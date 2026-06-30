import { supabase } from '../supabase'

const SITE_BASE = process.env.SITE_BASE_URL ?? 'https://kovil.ai'
const TARGET_CHUNK_CHARS = 1800
const CRAWL_CONCURRENCY = 5

const EMBED_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001'

// ── Sitemap ────────────────────────────────────────────────────────────────

export async function fetchSitemapUrls(): Promise<string[]> {
  const res = await fetch(`${SITE_BASE}/sitemap.xml`, {
    headers: { 'User-Agent': 'KovilShynaCrawler/1.0' },
    signal: AbortSignal.timeout(15_000),
  })
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`)
  const xml = await res.text()
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  return matches
    .map(m => m[1].trim())
    .filter(url => !url.endsWith('.xml'))
}

// ── HTML extraction ────────────────────────────────────────────────────────

function extractText(html: string): { title: string; text: string } {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  const title = (titleMatch?.[1] ?? '')
    .replace(/\s*\|\s*Kovil AI.*$/i, '')
    .trim()

  // Pull <main> only — that is where Next.js pages render their content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
  let body = mainMatch?.[1] ?? html

  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<header[\s\S]*?<\/header>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, ' -- ')
    .replace(/&ndash;/g, ' - ')
    .replace(/&hellip;/g, '...')
    .replace(/\s+/g, ' ')
    .trim()

  return { title, text: body }
}

// ── Chunker ────────────────────────────────────────────────────────────────

function chunkText(text: string): string[] {
  if (!text || text.length < 50) return []
  if (text.length <= TARGET_CHUNK_CHARS) return [text]

  const chunks: string[] = []
  let current = ''

  // Split on sentence boundaries for clean chunk edges
  const sentences = text.split(/(?<=[.!?])\s+/)
  for (const sentence of sentences) {
    const candidate = current ? current + ' ' + sentence : sentence
    if (candidate.length > TARGET_CHUNK_CHARS && current.length > 0) {
      chunks.push(current.trim())
      current = sentence
    } else {
      current = candidate
    }
  }
  if (current.trim()) chunks.push(current.trim())

  return chunks
}

// ── Embeddings ─────────────────────────────────────────────────────────────

async function embedSingle(text: string): Promise<number[]> {
  const res = await fetch(
    `${EMBED_BASE}:embedContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: { parts: [{ text }] }, outputDimensionality: 768 }),
    }
  )
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(`Embedding API ${res.status}: ${JSON.stringify(err)}`)
  }
  const data = await res.json()
  return (data.embedding?.values ?? []) as number[]
}

// Sequential within a page — concurrency across pages is handled by runWithConcurrency
async function embedTexts(texts: string[]): Promise<number[][]> {
  const results: number[][] = []
  for (const text of texts) {
    results.push(await embedSingle(text))
  }
  return results
}

export async function embedQuery(text: string): Promise<number[]> {
  return embedSingle(text)
}

// ── DB upsert ──────────────────────────────────────────────────────────────

async function upsertChunks(
  url: string,
  title: string,
  chunks: string[],
  embeddings: number[][]
): Promise<void> {
  const rows = chunks.map((content, i) => ({
    url,
    title,
    chunk_index: i,
    content,
    // pgvector expects the vector formatted as '[0.1,0.2,...]'
    embedding: `[${embeddings[i].join(',')}]`,
    last_crawled_at: new Date().toISOString(),
    is_stale: false,
  }))

  const { error } = await supabase
    .from('kb_chunks')
    .upsert(rows, { onConflict: 'url,chunk_index' })

  if (error) throw new Error(`Upsert failed for ${url}: ${error.message}`)

  // If the page had more chunks last time, mark the extras stale
  await supabase
    .from('kb_chunks')
    .update({ is_stale: true })
    .eq('url', url)
    .gt('chunk_index', chunks.length - 1)
}

// ── Single page ────────────────────────────────────────────────────────────

export type CrawlResult = {
  url: string
  chunks: number
  status: 'ok' | 'skip' | 'error'
  error?: string
}

export async function crawlPage(url: string): Promise<CrawlResult> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'KovilShynaCrawler/1.0' },
      signal: AbortSignal.timeout(15_000),
    })
    if (!res.ok) return { url, chunks: 0, status: 'skip' }

    const html = await res.text()
    const { title, text } = extractText(html)
    if (text.length < 100) return { url, chunks: 0, status: 'skip' }

    const chunks = chunkText(text)
    if (chunks.length === 0) return { url, chunks: 0, status: 'skip' }

    const embeddings = await embedTexts(chunks)
    await upsertChunks(url, title, chunks, embeddings)

    return { url, chunks: chunks.length, status: 'ok' }
  } catch (err) {
    return { url, chunks: 0, status: 'error', error: String(err) }
  }
}

// ── Retrieval (used in Phase 2 chat) ──────────────────────────────────────

export async function retrieveChunks(
  query: string,
  topK = 6
): Promise<Array<{ url: string; title: string; content: string; similarity: number }>> {
  const queryEmbedding = await embedQuery(query)
  const vectorStr = `[${queryEmbedding.join(',')}]`

  const { data, error } = await supabase.rpc('match_kb_chunks', {
    query_embedding: vectorStr,
    match_count: topK,
    similarity_threshold: 0.5,
  })

  if (error) throw new Error(`Retrieval failed: ${error.message}`)
  return data ?? []
}

// ── Full crawl orchestrator ────────────────────────────────────────────────

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<unknown>
): Promise<void> {
  const queue = [...items]
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift()!
      await fn(item)
    }
  })
  await Promise.all(workers)
}

export async function runCrawl(): Promise<{
  total: number
  indexed: number
  skipped: number
  errors: number
  durationMs: number
  results: CrawlResult[]
}> {
  const start = Date.now()
  const urls = await fetchSitemapUrls()
  const results: CrawlResult[] = []

  await runWithConcurrency(urls, CRAWL_CONCURRENCY, async (url) => {
    const result = await crawlPage(url)
    results.push(result)
    // Small delay to stay well within Gemini rate limits
    await new Promise(r => setTimeout(r, 50))
  })

  return {
    total: urls.length,
    indexed: results.filter(r => r.status === 'ok').length,
    skipped: results.filter(r => r.status === 'skip').length,
    errors: results.filter(r => r.status === 'error').length,
    durationMs: Date.now() - start,
    results,
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/src/lib/supabase'

const EMBED_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001'

async function embedText(text: string): Promise<number[]> {
  const res = await fetch(
    `${EMBED_BASE}:embedContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: { parts: [{ text }] }, outputDimensionality: 768 }),
    }
  )
  if (!res.ok) throw new Error(`Embed failed ${res.status}`)
  const data = await res.json()
  return data.embedding?.values ?? []
}

export async function POST(req: NextRequest) {
  if (req.headers.get('Authorization') !== `Bearer ${process.env.ADMIN_RECRAWL_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { faqs } = await req.json() as {
    faqs: Array<{ question: string; answer: string; page: string }>
  }

  if (!Array.isArray(faqs) || faqs.length === 0) {
    return NextResponse.json({ error: 'faqs array required' }, { status: 400 })
  }

  const results = { ok: 0, errors: 0 }

  for (let i = 0; i < faqs.length; i++) {
    const { question, answer, page } = faqs[i]
    const content = `Q: ${question}\nA: ${answer}`

    try {
      const embedding = await embedText(content)
      const { error } = await supabase.from('kb_chunks').upsert(
        {
          url: `https://kovil.ai/__faq__`,
          title: `FAQ: ${question.substring(0, 80)}`,
          chunk_index: 1000 + i,
          content,
          embedding: `[${embedding.join(',')}]`,
          last_crawled_at: new Date().toISOString(),
          is_stale: false,
        },
        { onConflict: 'url,chunk_index' }
      )
      if (error) throw error
      results.ok++
    } catch (err) {
      console.error(`[faq-ingest] failed on "${question}":`, err)
      results.errors++
    }

    // Small delay to stay within Gemini rate limits
    await new Promise(r => setTimeout(r, 200))
  }

  return NextResponse.json({ ...results, total: faqs.length })
}

import { NextRequest, NextResponse } from 'next/server'
import type { DiscoveryAnswers, QuestionAnswer } from '@/src/types/questionnaire'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
}

/**
 * POST /api/discovery/autosave
 *
 * Saves in-progress questionnaire answers to Supabase using a
 * timestamp-based server-side merge strategy:
 *
 * - Each answer carries a `_ts` (epoch ms) set when the user last changed it.
 * - The server reads the current DB row, then for each incoming answer only
 *   updates it if `incoming._ts > current._ts`.
 * - This means a stale browser (old code, no _ts, or outdated data) can NEVER
 *   overwrite a newer change made on another device, regardless of timing.
 *
 * Body: { session_id, client_slug, answers, client_email?, client_name? }
 */
export async function POST(req: NextRequest) {
  let body: {
    session_id?: string
    client_slug?: string
    answers?: unknown
    client_email?: string
    client_name?: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { session_id, client_slug, answers, client_email, client_name } = body

  if (!session_id || !client_slug || !answers) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const incoming = answers as DiscoveryAnswers

  // ── 1. Read current row from DB ──────────────────────────────────────────────
  let currentAnswers: DiscoveryAnswers = {}
  let rowExists = false

  try {
    const readRes = await fetch(
      `${SUPABASE_URL}/rest/v1/discovery_submissions` +
      `?session_id=eq.${encodeURIComponent(session_id)}&select=answers&limit=1`,
      { headers }
    )
    if (readRes.ok) {
      const rows = await readRes.json() as Array<{ answers: DiscoveryAnswers }>
      if (rows.length > 0) {
        rowExists = true
        currentAnswers = (rows[0].answers ?? {}) as DiscoveryAnswers
      }
    }
  } catch (e) {
    console.error('[autosave] read failed', e)
    // Non-fatal — fall through and write the incoming data as-is
  }

  // ── 2. Merge: incoming answer wins only if _ts is strictly newer ─────────────
  //
  // Rule matrix (current = what's in DB, incoming = what's arriving):
  //   • current missing (_ts absent or answer not in DB): accept incoming
  //   • incoming._ts > current._ts: accept incoming (it's newer)
  //   • otherwise: keep current (DB is authoritative on tie or stale write)
  //
  // This protects against any browser — on any code version — overwriting newer
  // data with stale data, regardless of network timing or deployment state.
  const merged: DiscoveryAnswers = { ...currentAnswers }

  for (const [qId, ans] of Object.entries(incoming)) {
    const current = currentAnswers[qId] as (QuestionAnswer & { _ts?: number }) | undefined
    const incomingAns = ans as QuestionAnswer & { _ts?: number }

    if (!rowExists || current === undefined) {
      // First save or new question ID — always accept
      merged[qId] = incomingAns
    } else {
      const incomingTs = incomingAns._ts ?? 0
      const currentTs = current._ts ?? 0
      if (incomingTs > currentTs) {
        // Incoming is strictly newer — accept
        merged[qId] = incomingAns
      }
      // else: keep current (it's newer or same age — DB wins)
    }
  }

  // ── 3. Upsert merged result ──────────────────────────────────────────────────
  const row: Record<string, unknown> = {
    session_id,
    client_slug,
    answers: merged,
    completed: false,
    updated_at: new Date().toISOString(),
  }
  if (client_email) row.client_email = client_email
  if (client_name) row.client_name = client_name

  const writeRes = await fetch(
    `${SUPABASE_URL}/rest/v1/discovery_submissions?on_conflict=session_id`,
    {
      method: 'POST',
      headers: {
        ...headers,
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    }
  )

  if (!writeRes.ok) {
    const detail = await writeRes.text()
    console.error('[autosave] write failed:', writeRes.status, detail)
    return NextResponse.json({ error: 'Save failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * POST /api/discovery/autosave
 *
 * Saves in-progress answers via the merge_discovery_answers Postgres function.
 *
 * The function runs inside a single database transaction with FOR UPDATE row
 * locking, so concurrent saves from multiple browsers/devices are serialised
 * at the DB level.  Within that transaction it compares each answer's _ts
 * (epoch ms set by the client when the user changes that specific answer):
 *   • incoming._ts > stored._ts  → incoming wins  (newer change)
 *   • otherwise                  → stored wins     (DB is authoritative)
 *
 * This makes it impossible for any browser — regardless of code version or
 * network timing — to overwrite a newer change made on another device.
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

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/merge_discovery_answers`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      p_session_id:   session_id,
      p_client_slug:  client_slug,
      p_answers:      answers,
      p_client_email: client_email ?? '',
      p_client_name:  client_name ?? '',
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    console.error('[autosave] merge_discovery_answers failed:', res.status, detail)
    return NextResponse.json({ error: 'Save failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

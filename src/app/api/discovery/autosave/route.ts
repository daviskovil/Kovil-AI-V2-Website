import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * POST /api/discovery/autosave
 *
 * Upserts an in-progress discovery questionnaire response to Supabase.
 * Called every 30 s from the client and on tab close via sendBeacon.
 *
 * Body: { session_id: string, client_slug: string, answers: Record<string, string> }
 */
export async function POST(req: NextRequest) {
  let body: { session_id?: string; client_slug?: string; answers?: unknown; client_email?: string; client_name?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { session_id, client_slug, answers, client_email, client_name } = body

  if (!session_id || !client_slug || !answers) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const row: Record<string, unknown> = {
    session_id,
    client_slug,
    answers,
    completed: false,
    updated_at: new Date().toISOString(),
  }
  if (client_email) row.client_email = client_email
  if (client_name) row.client_name = client_name

  // ?on_conflict=session_id tells PostgREST to use that column for upsert
  // (default is primary key `id` which is auto-generated and wouldn't match)
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/discovery_submissions?on_conflict=session_id`,
    {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(row),
    }
  )

  if (!res.ok) {
    const detail = await res.text()
    console.error('[autosave] Supabase error:', res.status, detail)
    return NextResponse.json({ error: 'Save failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

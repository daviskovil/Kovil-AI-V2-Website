import { NextRequest, NextResponse } from 'next/server'
import { getQuestionnaire } from '@/src/data/questionnaires'

/**
 * POST /api/discovery/auth
 *
 * Verifies a client's UID + password server-side.
 * The password is stored only in src/data/questionnaires/ (server bundle, never client).
 *
 * Body: { client_slug: string, uid: string, password: string }
 * Returns: { ok: true } or 401 { ok: false, error: string }
 */
export async function POST(req: NextRequest) {
  let body: { client_slug?: string; uid?: string; password?: string }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const { client_slug, uid, password } = body

  if (!client_slug || !uid || !password) {
    return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
  }

  const config = getQuestionnaire(client_slug)
  if (!config) {
    return NextResponse.json({ ok: false, error: 'Questionnaire not found' }, { status: 404 })
  }

  // No auth configured → anyone can access
  if (!config.accessCredentials) {
    return NextResponse.json({ ok: true })
  }

  // Small artificial delay to rate-limit brute-force attempts
  await new Promise(r => setTimeout(r, 400))

  if (
    uid.trim() === config.accessCredentials.uid &&
    password === config.accessCredentials.password
  ) {
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json(
    { ok: false, error: 'Invalid Access ID or password. Please check your credentials.' },
    { status: 401 }
  )
}

import { NextRequest, NextResponse } from 'next/server'

// Pings the kovil-ai-website-admin Supabase project (the one hosting the
// calendly-webhook Edge Function) so it never sits idle long enough to hit
// Supabase's free-tier ~7-day auto-pause. A paused project drops every
// Calendly booking notification silently — the function endpoint stops
// resolving in DNS entirely, so there's no error to catch, just a missing
// email. An OPTIONS request hits the function runtime (proving the project
// is awake) without triggering the real webhook logic or sending any email.
const ADMIN_SUPABASE_FUNCTION_URL =
  'https://jhqfdvhmleiutjxpodud.supabase.co/functions/v1/calendly-webhook'

export async function GET(req: NextRequest) {
  const secret = req.headers.get('authorization')?.replace('Bearer ', '')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const res = await fetch(ADMIN_SUPABASE_FUNCTION_URL, { method: 'OPTIONS' })
    return NextResponse.json({ ok: res.ok, status: res.status })
  } catch (err) {
    console.error('[keep-alive-supabase-admin] ping failed:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { runCrawl } from '@/src/lib/shyna/crawl'

export const maxDuration = 300 // 5-minute Vercel function timeout

export async function GET(req: NextRequest) {
  const secret = req.headers.get('authorization')?.replace('Bearer ', '')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const summary = await runCrawl()
    return NextResponse.json({ ok: true, ...summary })
  } catch (err) {
    console.error('[crawl-site] fatal error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

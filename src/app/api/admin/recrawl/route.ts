import { NextRequest, NextResponse } from 'next/server'
import { runCrawl } from '@/src/lib/shyna/crawl'

export const maxDuration = 300

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization') ?? ''
  const token = authHeader.replace('Bearer ', '')
  if (!token || token !== process.env.ADMIN_RECRAWL_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const summary = await runCrawl()
    return NextResponse.json({ ok: true, ...summary })
  } catch (err) {
    console.error('[admin/recrawl] fatal error:', err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

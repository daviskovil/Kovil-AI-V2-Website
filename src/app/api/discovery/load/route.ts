import { NextRequest, NextResponse } from 'next/server'
import type { DiscoveryAnswers } from '@/src/types/questionnaire'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * POST /api/discovery/load
 *
 * Fetches saved answers for a discovery session from Supabase.
 * Called on mount (after auth) so that any browser with the right credentials
 * can resume where the customer left off.
 *
 * Strategy:
 * 1. Try exact stable session_id match  (new behaviour — same credentials = same ID)
 * 2. Fall back to most-recent session for this client_slug  (recovers old sessions
 *    that were saved with a random UUID before this fix was deployed)
 *
 * Body: { session_id: string, client_slug: string }
 * Returns: { answers: DiscoveryAnswers | null, clientEmail: string, clientName: string, source: 'exact' | 'fallback' | 'none' }
 */

function hasContent(answers: unknown): boolean {
  if (!answers || typeof answers !== 'object') return false
  return Object.values(answers as Record<string, { response?: string }>)
    .some(v => v?.response?.trim())
}

export async function POST(req: NextRequest) {
  let body: { session_id?: string; client_slug?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ answers: null, source: 'none' })
  }

  const { session_id, client_slug } = body
  if (!session_id || !client_slug) {
    return NextResponse.json({ answers: null, source: 'none' })
  }

  const headers = {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
  }

  // ── 1. Exact match on stable session_id ────────────────────────────────────
  try {
    const exactRes = await fetch(
      `${SUPABASE_URL}/rest/v1/discovery_submissions` +
      `?session_id=eq.${encodeURIComponent(session_id)}` +
      `&client_slug=eq.${encodeURIComponent(client_slug)}` +
      `&select=answers,client_email,client_name,updated_at&limit=1`,
      { headers }
    )
    if (exactRes.ok) {
      const rows = await exactRes.json() as Array<{
        answers: DiscoveryAnswers; client_email: string | null; client_name: string | null; updated_at: string
      }>
      if (rows.length > 0 && hasContent(rows[0].answers)) {
        return NextResponse.json({
          answers: rows[0].answers,
          clientEmail: rows[0].client_email ?? '',
          clientName: rows[0].client_name ?? '',
          source: 'exact',
        })
      }
    }
  } catch (e) {
    console.error('[load] exact query failed', e)
  }

  // ── 2. Fallback: most-recent session for this client (any session_id) ───────
  // This recovers data from sessions that were saved before stable IDs were used.
  try {
    const fallbackRes = await fetch(
      `${SUPABASE_URL}/rest/v1/discovery_submissions` +
      `?client_slug=eq.${encodeURIComponent(client_slug)}` +
      `&order=updated_at.desc&select=answers,session_id,client_email,client_name,updated_at&limit=5`,
      { headers }
    )
    if (fallbackRes.ok) {
      const rows = await fallbackRes.json() as Array<{
        answers: DiscoveryAnswers; session_id: string; client_email: string | null; client_name: string | null; updated_at: string
      }>
      // Pick the first row that has actual answer content
      const best = rows.find(r => hasContent(r.answers))
      if (best) {
        console.log(`[load] fallback: recovered session ${best.session_id} updated ${best.updated_at}`)
        return NextResponse.json({
          answers: best.answers,
          clientEmail: best.client_email ?? '',
          clientName: best.client_name ?? '',
          source: 'fallback',
        })
      }
    }
  } catch (e) {
    console.error('[load] fallback query failed', e)
  }

  return NextResponse.json({ answers: null, clientEmail: '', clientName: '', source: 'none' })
}

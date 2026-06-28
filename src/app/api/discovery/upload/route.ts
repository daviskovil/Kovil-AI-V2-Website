import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const BUCKET = 'discovery-attachments'
const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

/**
 * POST /api/discovery/upload
 *
 * Accepts a multipart/form-data upload with:
 *   file        — the File blob
 *   session_id  — questionnaire session
 *   question_id — e.g. "BUS-01"
 *
 * Uploads to Supabase Storage under:
 *   discovery-attachments/{session_id}/{question_id}/{timestamp}-{filename}
 *
 * Returns: { url, name, size, type, path }
 */
export async function POST(req: NextRequest) {
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
  }

  const file = formData.get('file') as File | null
  const sessionId = (formData.get('session_id') as string | null) ?? ''
  const questionId = (formData.get('question_id') as string | null) ?? ''

  if (!file || !sessionId || !questionId) {
    return NextResponse.json({ error: 'Missing fields: file, session_id, question_id' }, { status: 400 })
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File too large — maximum 10 MB per file' }, { status: 413 })
  }

  // ── Ensure bucket exists ────────────────────────────────────────────────────
  // 409 = already exists, which is fine — ignore all errors here
  await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: BUCKET,
      name: BUCKET,
      public: true,
      file_size_limit: MAX_BYTES,
      allowed_mime_types: null, // all types allowed
    }),
  }).catch(() => { /* bucket already exists — OK */ })

  // ── Sanitise filename and build storage path ────────────────────────────────
  const safeName = file.name.replace(/[^a-zA-Z0-9._\-() ]/g, '_')
  const path = `${sessionId}/${questionId}/${Date.now()}-${safeName}`
  const arrayBuffer = await file.arrayBuffer()

  // ── Upload to Supabase Storage ──────────────────────────────────────────────
  const uploadRes = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`,
    {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': file.type || 'application/octet-stream',
        'x-upsert': 'true',
      },
      body: arrayBuffer,
    }
  )

  if (!uploadRes.ok) {
    const detail = await uploadRes.text()
    console.error('[upload] Supabase Storage error:', uploadRes.status, detail)
    return NextResponse.json({ error: 'Upload failed', detail }, { status: 502 })
  }

  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`

  return NextResponse.json({
    url: publicUrl,
    name: file.name,
    size: file.size,
    type: file.type,
    path,
  })
}

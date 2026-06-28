import { NextRequest, NextResponse } from 'next/server'
import type { DiscoveryConfig, DiscoveryAnswers } from '@/src/types/questionnaire'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = 'davis@kovil.ai'

/**
 * POST /api/discovery/submit
 *
 * Marks the submission complete in Supabase, then emails davis@kovil.ai
 * with every question and answer formatted by section.
 *
 * Body: { session_id, client_slug, answers: DiscoveryAnswers, config: DiscoveryConfig }
 */
export async function POST(req: NextRequest) {
  let body: {
    session_id?: string
    client_slug?: string
    answers?: DiscoveryAnswers
    config?: DiscoveryConfig
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { session_id, client_slug, answers, config } = body

  if (!session_id || !client_slug || !answers || !config) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const submittedAt = new Date().toISOString()

  // ── 1. Upsert to Supabase with completed = true ─────────────────────────────
  const row = {
    session_id,
    client_slug,
    answers,
    completed: true,
    updated_at: submittedAt,
    submitted_at: submittedAt,
  }

  const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/discovery_submissions`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(row),
  })

  if (!dbRes.ok) {
    const detail = await dbRes.text()
    console.error('[submit] Supabase error:', dbRes.status, detail)
    // Still try to send the email — data is not lost
  }

  // ── 2. Send email via Resend ─────────────────────────────────────────────────
  if (!RESEND_API_KEY) {
    console.warn('[submit] RESEND_API_KEY not set — skipping email')
    return NextResponse.json({ ok: true, emailSent: false })
  }

  const html = buildEmailHtml(config, answers, session_id, submittedAt)

  const emailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Kovil AI <noreply@kovil.ai>',
      to: [NOTIFY_EMAIL],
      subject: `Discovery Questionnaire Submitted — ${config.clientName}`,
      html,
    }),
  })

  if (!emailRes.ok) {
    const detail = await emailRes.text()
    console.error('[submit] Resend error:', emailRes.status, detail)
    // Supabase already has the data — don't fail the client request
    return NextResponse.json({ ok: true, emailSent: false })
  }

  return NextResponse.json({ ok: true, emailSent: true })
}

// ── Email template ─────────────────────────────────────────────────────────────

const PRIORITY_COLOR: Record<string, string> = {
  'Must-have': '#FF4F00',
  Important: '#D97706',
  'Nice-to-have': '#059669',
}

function buildEmailHtml(
  config: DiscoveryConfig,
  answers: DiscoveryAnswers,
  sessionId: string,
  submittedAt: string
): string {
  const dateStr = new Date(submittedAt).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  })

  const totalQuestions = config.tabs.reduce((n, t) => n + t.questions.length, 0)
  const answered = config.tabs
    .flatMap(t => t.questions)
    .filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length

  const sections = config.tabs
    .map(tab => {
      const rows = tab.questions
        .map(q => {
          const ans = answers[q.id]
          const response = ans?.response?.trim() || ''
          const notes = ans?.notes?.trim() || ''
          const color = PRIORITY_COLOR[q.priority] ?? '#6B7280'

          return `
            <tr style="border-bottom:1px solid #E5E2D9;">
              <td style="padding:12px 8px;vertical-align:top;white-space:nowrap;">
                <code style="font-size:11px;background:#EBE8E0;padding:2px 6px;border-radius:3px;color:#374151;">${q.id}</code>
              </td>
              <td style="padding:12px 12px;vertical-align:top;width:35%;">
                <p style="margin:0;font-size:13px;color:#0A0A0A;line-height:1.5;">${q.question}</p>
              </td>
              <td style="padding:12px 8px;vertical-align:top;white-space:nowrap;text-align:center;">
                <span style="font-size:11px;color:${color};font-weight:600;border:1px solid ${color}33;background:${color}0d;padding:2px 7px;border-radius:4px;">${q.priority}</span>
              </td>
              <td style="padding:12px 12px;vertical-align:top;width:30%;">
                ${response
                  ? `<p style="margin:0;font-size:13px;color:#0A0A0A;line-height:1.5;white-space:pre-wrap;">${response.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
                  : `<p style="margin:0;font-size:13px;color:#9CA3AF;font-style:italic;">No response provided</p>`}
              </td>
              <td style="padding:12px 12px;vertical-align:top;width:20%;">
                ${notes
                  ? `<p style="margin:0;font-size:12px;color:#6B7280;line-height:1.5;white-space:pre-wrap;">${notes.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
                  : `<p style="margin:0;font-size:12px;color:#D1D5DB;">—</p>`}
              </td>
            </tr>`
        })
        .join('')

      return `
        <div style="margin-bottom:36px;">
          <h2 style="margin:0 0 12px;padding:10px 16px;background:#0A0A0A;color:#ffffff;font-size:14px;font-weight:700;border-left:4px solid #FF4F00;border-radius:2px;">
            ${tab.label}
          </h2>
          <table style="width:100%;border-collapse:collapse;border:1px solid #E5E2D9;border-radius:4px;overflow:hidden;">
            <thead>
              <tr style="background:#F9F7F4;border-bottom:2px solid #E5E2D9;">
                <th style="padding:8px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">ID</th>
                <th style="padding:8px 12px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Question</th>
                <th style="padding:8px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:center;letter-spacing:0.05em;">Priority</th>
                <th style="padding:8px 12px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Response</th>
                <th style="padding:8px 12px;font-size:11px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Notes</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`
    })
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr><td align="center" style="padding:32px 16px;">
<table width="700" style="max-width:700px;width:100%;">

  <!-- Header -->
  <tr>
    <td style="background:#0A0A0A;padding:24px 32px;border-radius:8px 8px 0 0;">
      <div style="display:inline-block;border:1px solid rgba(255,255,255,0.2);border-radius:4px;padding:4px 10px;margin-bottom:12px;">
        <span style="font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:700;">
          <span style="color:#FF4F00;">Kovil</span><span style="color:#ffffff;"> AI</span>
        </span>
      </div>
      <h1 style="margin:0 0 4px;color:#ffffff;font-size:20px;font-weight:700;">Discovery Questionnaire Submitted</h1>
      <p style="margin:0;color:#9CA3AF;font-size:13px;">${config.clientName}</p>
    </td>
  </tr>

  <!-- Meta bar -->
  <tr>
    <td style="background:#F0EDE8;padding:14px 32px;border-bottom:1px solid #E5E2D9;">
      <table width="100%"><tr>
        <td style="font-size:12px;color:#6B7280;">Project</td>
        <td style="font-size:12px;color:#6B7280;">Submitted</td>
        <td style="font-size:12px;color:#6B7280;">Completion</td>
        <td style="font-size:12px;color:#6B7280;">Session</td>
      </tr><tr>
        <td style="font-size:13px;color:#0A0A0A;font-weight:600;padding-top:2px;padding-right:16px;">${config.projectTitle}</td>
        <td style="font-size:13px;color:#0A0A0A;font-weight:500;padding-top:2px;padding-right:16px;">${dateStr}</td>
        <td style="font-size:13px;font-weight:600;padding-top:2px;padding-right:16px;color:${answered === totalQuestions ? '#059669' : '#0A0A0A'};">${answered}/${totalQuestions} answered</td>
        <td style="font-size:11px;color:#9CA3AF;font-family:monospace;padding-top:2px;">${sessionId}</td>
      </tr></table>
    </td>
  </tr>

  <!-- Sections -->
  <tr>
    <td style="background:#ffffff;padding:32px;">
      ${sections}
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#EBE8E0;padding:16px 32px;border-radius:0 0 8px 8px;text-align:center;border-top:1px solid #E5E2D9;">
      <p style="margin:0;font-size:11px;color:#9CA3AF;">Kovil AI · 600 Old Country Road, Suite 535, Garden City, NY 11530</p>
    </td>
  </tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

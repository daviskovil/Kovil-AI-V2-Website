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
 * 1. Upserts the submission as completed in Supabase
 * 2. Emails the full Q&A to davis@kovil.ai
 * 3. Emails a confirmation + next-steps to the client (if clientEmail provided)
 *
 * Body: {
 *   session_id, client_slug,
 *   answers: DiscoveryAnswers, config: DiscoveryConfig,
 *   clientEmail?: string, clientContactName?: string
 * }
 */
export async function POST(req: NextRequest) {
  let body: {
    session_id?: string
    client_slug?: string
    answers?: DiscoveryAnswers
    config?: DiscoveryConfig
    clientEmail?: string
    clientContactName?: string
    pdfBase64?: string   // base64-encoded PDF for email attachment (generated client-side)
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { session_id, client_slug, answers, config, clientEmail, clientContactName, pdfBase64 } = body

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

  const dbRes = await fetch(
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

  if (!dbRes.ok) {
    const detail = await dbRes.text()
    console.error('[submit] Supabase error:', dbRes.status, detail)
    // Still try to send emails — data is not lost (it's in localStorage)
  }

  // ── 2. Send admin email (full Q&A) ─────────────────────────────────────────
  if (!RESEND_API_KEY) {
    console.warn('[submit] RESEND_API_KEY not set — skipping email')
    return NextResponse.json({ ok: true, emailSent: false })
  }

  const adminHtml = buildAdminEmailHtml(config, answers, session_id, submittedAt, clientEmail, clientContactName)

  const pdfFilename = `${config.clientSlug}-discovery-questionnaire.pdf`

  const adminEmailRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Kovil AI <noreply@kovil.ai>',
      to: [NOTIFY_EMAIL],
      subject: `Discovery Questionnaire Submitted — ${config.clientName}${clientEmail ? ` (${clientEmail})` : ''}`,
      html: adminHtml,
      ...(pdfBase64 ? { attachments: [{ filename: pdfFilename, content: pdfBase64 }] } : {}),
    }),
  })

  if (!adminEmailRes.ok) {
    const detail = await adminEmailRes.text()
    console.error('[submit] Resend admin email error:', adminEmailRes.status, detail)
    return NextResponse.json({ ok: true, emailSent: false })
  }

  // ── 3. Send customer confirmation email ────────────────────────────────────
  let customerEmailSent = false
  if (clientEmail && clientEmail.includes('@')) {
    const customerHtml = buildCustomerEmailHtml(
      config, answers, session_id, submittedAt, clientEmail, clientContactName
    )

    const customerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kovil AI <noreply@kovil.ai>',
        to: [clientEmail],
        replyTo: NOTIFY_EMAIL,
        subject: `Your Discovery Questionnaire — ${config.projectTitle}`,
        html: customerHtml,
        ...(pdfBase64 ? { attachments: [{ filename: pdfFilename, content: pdfBase64 }] } : {}),
      }),
    })

    customerEmailSent = customerEmailRes.ok
    if (!customerEmailRes.ok) {
      const detail = await customerEmailRes.text()
      console.error('[submit] Resend customer email error:', customerEmailRes.status, detail)
    }
  }

  return NextResponse.json({ ok: true, emailSent: true, customerEmailSent })
}

// ─────────────────────────────────────────────────────────────────────────────
// Email builders
// ─────────────────────────────────────────────────────────────────────────────

const PRIORITY_COLOR: Record<string, string> = {
  'Must-have': '#FF4F00',
  Important: '#D97706',
  'Nice-to-have': '#059669',
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  })
}

// ── Admin email — full Q&A by section ─────────────────────────────────────────

function buildAdminEmailHtml(
  config: DiscoveryConfig,
  answers: DiscoveryAnswers,
  sessionId: string,
  submittedAt: string,
  clientEmail?: string,
  clientContactName?: string
): string {
  const totalQuestions = config.tabs.reduce((n, t) => n + t.questions.length, 0)
  const answered = config.tabs
    .flatMap(t => t.questions)
    .filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length

  const sections = config.tabs.map(tab => {
    const rows = tab.questions.map(q => {
      const ans = answers[q.id]
      const response = ans?.response?.trim() || ''
      const notes = ans?.notes?.trim() || ''
      const attachments = ans?.attachments ?? []
      const color = PRIORITY_COLOR[q.priority] ?? '#6B7280'
      return `
        <tr style="border-bottom:1px solid #E5E2D9;">
          <td style="padding:10px 8px;vertical-align:top;white-space:nowrap;">
            <code style="font-size:11px;background:#EBE8E0;padding:2px 6px;border-radius:3px;color:#374151;">${q.id}</code>
          </td>
          <td style="padding:10px 12px;vertical-align:top;width:32%;">
            <p style="margin:0;font-size:13px;color:#0A0A0A;line-height:1.5;font-weight:500;">${esc(q.question)}</p>
          </td>
          <td style="padding:10px 8px;vertical-align:top;white-space:nowrap;text-align:center;">
            <span style="font-size:11px;color:${color};font-weight:600;border:1px solid ${color}33;background:${color}0d;padding:2px 7px;border-radius:4px;">${q.priority}</span>
          </td>
          <td style="padding:10px 12px;vertical-align:top;width:30%;">
            ${response
              ? `<p style="margin:0;font-size:13px;color:#0A0A0A;line-height:1.5;white-space:pre-wrap;">${esc(response)}</p>`
              : `<p style="margin:0;font-size:13px;color:#9CA3AF;font-style:italic;">No response</p>`}
            ${attachments.length > 0
              ? `<p style="margin:6px 0 0;font-size:11px;color:#6B7280;">📎 ${attachments.map(a => `<a href="${a.url}" style="color:#FF4F00;">${esc(a.name)}</a>`).join(', ')}</p>`
              : ''}
          </td>
          <td style="padding:10px 12px;vertical-align:top;width:20%;">
            ${notes
              ? `<p style="margin:0;font-size:12px;color:#6B7280;line-height:1.5;white-space:pre-wrap;">${esc(notes)}</p>`
              : `<p style="margin:0;font-size:12px;color:#D1D5DB;">—</p>`}
          </td>
        </tr>`
    }).join('')

    return `
      <div style="margin-bottom:32px;">
        <h2 style="margin:0 0 10px;padding:8px 16px;background:#0A0A0A;color:#fff;font-size:13px;font-weight:700;border-left:4px solid #FF4F00;border-radius:2px;">
          ${esc(tab.label)}
        </h2>
        <table style="width:100%;border-collapse:collapse;border:1px solid #E5E2D9;">
          <thead>
            <tr style="background:#F9F7F4;border-bottom:2px solid #E5E2D9;">
              <th style="padding:7px 8px;font-size:10px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">ID</th>
              <th style="padding:7px 12px;font-size:10px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Question</th>
              <th style="padding:7px 8px;font-size:10px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:center;letter-spacing:0.05em;">Priority</th>
              <th style="padding:7px 12px;font-size:10px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Response</th>
              <th style="padding:7px 12px;font-size:10px;font-weight:700;color:#6B7280;text-transform:uppercase;text-align:left;letter-spacing:0.05em;">Notes</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`
  }).join('')

  return `<!DOCTYPE html><html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px;">
<table width="720" style="max-width:720px;width:100%;">
  <tr>
    <td style="background:#0A0A0A;padding:24px 32px;border-radius:8px 8px 0 0;">
      <span style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:700;color:#FF4F00;">Kovil</span><span style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:700;color:#fff;"> AI</span>
      <h1 style="margin:12px 0 4px;color:#fff;font-size:19px;font-weight:700;">Discovery Questionnaire Submitted</h1>
      <p style="margin:0;color:#9CA3AF;font-size:13px;">${esc(config.clientName)}</p>
    </td>
  </tr>
  <tr>
    <td style="background:#F0EDE8;padding:12px 32px;border-bottom:1px solid #E5E2D9;">
      <table width="100%"><tr>
        <td style="font-size:11px;color:#6B7280;padding-bottom:2px;">Project</td>
        <td style="font-size:11px;color:#6B7280;padding-bottom:2px;">Submitted</td>
        <td style="font-size:11px;color:#6B7280;padding-bottom:2px;">Answered</td>
        ${clientEmail ? `<td style="font-size:11px;color:#6B7280;padding-bottom:2px;">Client Email</td>` : ''}
      </tr><tr>
        <td style="font-size:12px;color:#0A0A0A;font-weight:600;padding-right:16px;">${esc(config.projectTitle)}</td>
        <td style="font-size:12px;color:#0A0A0A;font-weight:500;padding-right:16px;">${fmtDate(submittedAt)}</td>
        <td style="font-size:12px;font-weight:700;color:${answered === totalQuestions ? '#059669' : '#FF4F00'};padding-right:16px;">${answered}/${totalQuestions}</td>
        ${clientEmail ? `<td style="font-size:12px;color:#0A0A0A;font-weight:500;">${clientContactName ? `${esc(clientContactName)} · ` : ''}<a href="mailto:${clientEmail}" style="color:#FF4F00;">${clientEmail}</a></td>` : ''}
      </tr></table>
    </td>
  </tr>
  <tr><td style="background:#fff;padding:32px;">${sections}</td></tr>
  <tr>
    <td style="background:#EBE8E0;padding:14px 32px;border-radius:0 0 8px 8px;text-align:center;border-top:1px solid #E5E2D9;">
      <p style="margin:0;font-size:11px;color:#9CA3AF;">Session ID: ${sessionId} · Kovil AI · 600 Old Country Road, Suite 535, Garden City, NY 11530</p>
    </td>
  </tr>
</table>
</td></tr></table>
</body></html>`
}

// ── Customer confirmation email — friendly, next-steps focused ────────────────

function buildCustomerEmailHtml(
  config: DiscoveryConfig,
  answers: DiscoveryAnswers,
  sessionId: string,
  submittedAt: string,
  clientEmail: string,
  clientContactName?: string
): string {
  const totalQuestions = config.tabs.reduce((n, t) => n + t.questions.length, 0)
  const answered = config.tabs
    .flatMap(t => t.questions)
    .filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length

  const firstName = clientContactName ? clientContactName.split(' ')[0] : ''
  const greeting = firstName ? `Hi ${esc(firstName)},` : 'Hi,'

  const questionnaireUrl = `https://kovil.ai/${config.clientSlug}/discovery-questionnaire`

  return `<!DOCTYPE html><html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:40px 16px;">
<table width="580" style="max-width:580px;width:100%;">

  <!-- Header -->
  <tr>
    <td style="background:#0A0A0A;padding:24px 32px;border-radius:8px 8px 0 0;border-bottom:3px solid #FF4F00;">
      <span style="font-family:'Space Grotesk',sans-serif;font-size:18px;font-weight:800;letter-spacing:-0.5px;">
        <span style="color:#FF4F00;">Kovil</span><span style="color:#ffffff;"> AI</span>
      </span>
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="background:#ffffff;padding:36px 32px;">

      <!-- Checkmark + headline -->
      <div style="text-align:center;margin-bottom:28px;">
        <div style="display:inline-block;width:60px;height:60px;border-radius:50%;background:#ECFDF5;border:3px solid #A7F3D0;text-align:center;line-height:54px;font-size:28px;margin-bottom:16px;">✓</div>
        <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#0A0A0A;">Your questionnaire has been received</h1>
        <p style="margin:0;font-size:14px;color:#FF4F00;font-weight:600;">${esc(config.projectTitle)}</p>
      </div>

      <!-- Greeting -->
      <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">${greeting}</p>
      <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.6;">
        Thank you for completing the discovery questionnaire. You answered <strong>${answered} of ${totalQuestions} questions</strong> —
        our team will review your responses and reach out within <strong>1–2 business days</strong> to coordinate next steps.
      </p>

      <!-- Divider -->
      <div style="border-top:1px solid #E5E2D9;margin:24px 0;"></div>

      <!-- Next steps -->
      <h2 style="margin:0 0 16px;font-size:14px;font-weight:700;color:#0A0A0A;text-transform:uppercase;letter-spacing:0.05em;">What happens next</h2>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:0 0 16px 0;">
            <table><tr>
              <td style="vertical-align:top;padding-right:14px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#FF4F00;color:#fff;text-align:center;line-height:32px;font-size:13px;font-weight:700;">1</div>
              </td>
              <td style="vertical-align:top;padding-top:4px;">
                <p style="margin:0 0 3px;font-size:14px;font-weight:600;color:#0A0A0A;">Review (1–2 business days)</p>
                <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.5;">Our team reviews your responses, aligns on scope, and prepares for your discovery call.</p>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 16px 0;">
            <table><tr>
              <td style="vertical-align:top;padding-right:14px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#0A0A0A;color:#fff;text-align:center;line-height:32px;font-size:13px;font-weight:700;">2</div>
              </td>
              <td style="vertical-align:top;padding-top:4px;">
                <p style="margin:0 0 3px;font-size:14px;font-weight:600;color:#0A0A0A;">Focused Discovery Call</p>
                <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.5;">A solution-focused 60-minute session to explore your goals, align on technical direction, and define the right approach for your project.</p>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 16px 0;">
            <table><tr>
              <td style="vertical-align:top;padding-right:14px;">
                <div style="width:32px;height:32px;border-radius:50%;background:#0A0A0A;color:#fff;text-align:center;line-height:32px;font-size:13px;font-weight:700;">3</div>
              </td>
              <td style="vertical-align:top;padding-top:4px;">
                <p style="margin:0 0 3px;font-size:14px;font-weight:600;color:#0A0A0A;">Proposal & Statement of Work</p>
                <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.5;">We deliver a detailed proposal, architecture overview, and SOW based on your inputs.</p>
              </td>
            </tr></table>
          </td>
        </tr>
      </table>

      <!-- Edit link -->
      <div style="background:#FFF7F5;border:1px solid #FFD5C8;border-radius:8px;padding:14px 18px;margin-top:8px;">
        <p style="margin:0;font-size:13px;color:#374151;">
          💡 Want to add more details or update a response? You can
          <a href="${questionnaireUrl}" style="color:#FF4F00;font-weight:600;">re-open the questionnaire here</a>
          at any time using your original access credentials.
        </p>
      </div>

      <!-- Divider -->
      <div style="border-top:1px solid #E5E2D9;margin:24px 0;"></div>

      <!-- Questions -->
      <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">
        Questions before your call? Reply to this email or reach us directly at
        <a href="mailto:davis@kovil.ai" style="color:#FF4F00;font-weight:500;">davis@kovil.ai</a>.
        We look forward to working with you.
      </p>
      <p style="margin:16px 0 0;font-size:14px;color:#0A0A0A;font-weight:600;">The Kovil AI Team</p>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#F5F3EF;padding:14px 32px;border-radius:0 0 8px 8px;border-top:1px solid #E5E2D9;">
      <p style="margin:0;font-size:11px;color:#9CA3AF;text-align:center;">
        Kovil AI · 600 Old Country Road, Suite 535, Garden City, NY 11530<br>
        Session: ${sessionId}
      </p>
    </td>
  </tr>

</table>
</td></tr></table>
</body></html>`
}

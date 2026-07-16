const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAILS = ['davis@kovil.ai', 'sahdev@kovil.ai']

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/New_York',
  })
}

/**
 * Fires once per new Shyna session (not per message) so the inbox stays
 * proportional to actual conversation volume. Includes the opening
 * exchange — the visitor's first message and Shyna's first reply — since
 * that's all that exists at the moment a session is created.
 */
export async function sendNewConversationEmail(params: {
  sessionId: string
  sourcePage: string | null
  firstMessage: string
  firstReply: string
}): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn('[shyna] RESEND_API_KEY not set — skipping new-conversation email')
    return
  }

  const { sessionId, sourcePage, firstMessage, firstReply } = params
  const pageUrl = sourcePage ? `https://kovil.ai${sourcePage}` : 'unknown page'

  const html = `<!DOCTYPE html><html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FAF8F4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px;">
<table width="580" style="max-width:580px;width:100%;">
  <tr>
    <td style="background:#0A0A0A;padding:20px 28px;border-radius:8px 8px 0 0;border-bottom:3px solid #FF4F00;">
      <span style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:800;">
        <span style="color:#FF4F00;">Kovil</span><span style="color:#fff;"> AI</span>
      </span>
      <h1 style="margin:10px 0 2px;color:#fff;font-size:17px;font-weight:700;">New Shyna Conversation</h1>
      <p style="margin:0;color:#9CA3AF;font-size:12px;">${esc(pageUrl)} &middot; ${fmtDate(new Date().toISOString())}</p>
    </td>
  </tr>
  <tr>
    <td style="background:#ffffff;padding:24px 28px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;">Visitor</p>
      <p style="margin:0 0 18px;font-size:14px;color:#0A0A0A;line-height:1.6;white-space:pre-wrap;background:#F5F3EF;padding:12px 14px;border-radius:8px;">${esc(firstMessage)}</p>
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;">Shyna</p>
      <p style="margin:0;font-size:14px;color:#0A0A0A;line-height:1.6;white-space:pre-wrap;background:#FFF7F5;padding:12px 14px;border-radius:8px;border:1px solid #FFD5C8;">${esc(firstReply)}</p>
    </td>
  </tr>
  <tr>
    <td style="background:#EBE8E0;padding:12px 28px;border-radius:0 0 8px 8px;text-align:center;">
      <p style="margin:0;font-size:11px;color:#9CA3AF;">Session ID: ${sessionId}</p>
    </td>
  </tr>
</table>
</td></tr></table>
</body></html>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shyna <noreply@kovil.ai>',
        to: ADMIN_EMAILS,
        subject: `New Shyna conversation — ${sourcePage ?? 'website'}`,
        html,
      }),
    })
    if (!res.ok) {
      const detail = await res.text()
      console.error('[shyna] notify email error:', res.status, detail)
    }
  } catch (err) {
    console.error('[shyna] notify email fetch failed:', err)
  }
}

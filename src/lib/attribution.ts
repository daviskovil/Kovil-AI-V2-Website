// ─── Attribution ─────────────────────────────────────────────────────────────
// Captures how a visitor first arrived (first-touch) and how the current session
// arrived (last-touch), then maps it to Calendly's tracking params so every
// booking is attributable to organic search / AI answer engines / referral / etc.

export type Touch = {
  source: string // e.g. 'google', 'chatgpt.com', 'kovil.ai', 'direct'
  medium: string // 'organic' | 'ai_referral' | 'referral' | 'social' | 'cpc' | 'direct' | <utm_medium>
  campaign: string // utm_campaign if present, else ''
  landingPage: string // path of the entry page for this touch
  referrer: string // referrer host, or ''
  ts: string // ISO timestamp
}

const FT_KEY = 'kovil_first_touch'

// Known search engines → organic (SEO)
const SEARCH_HOSTS = ['google.', 'bing.', 'duckduckgo.', 'yahoo.', 'yandex.', 'baidu.', 'ecosia.', 'brave.']

// Known AI answer engines → ai_referral (AEO). These are the signals that our
// GEO/AEO work is landing us inside AI-generated answers.
const AI_HOSTS = [
  'chatgpt.com', 'chat.openai.com', 'openai.com',
  'perplexity.ai', 'www.perplexity.ai',
  'gemini.google.com', 'bard.google.com',
  'claude.ai',
  'copilot.microsoft.com', 'bing.com/chat',
  'you.com', 'poe.com', 'phind.com', 'grok.com', 'x.ai',
]

const SOCIAL_HOSTS = ['linkedin.', 'facebook.', 'fb.', 't.co', 'twitter.', 'x.com', 'instagram.', 'reddit.', 'youtube.']

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase()
  } catch {
    return ''
  }
}

function matchesAny(host: string, needles: string[]): boolean {
  return needles.some((n) => host.includes(n))
}

/** Derive a Touch from the current URL + document.referrer. Client-only. */
function deriveTouch(): Touch {
  const params = new URLSearchParams(window.location.search)
  const utmSource = params.get('utm_source') || ''
  const utmMedium = params.get('utm_medium') || ''
  const utmCampaign = params.get('utm_campaign') || ''

  const referrer = document.referrer || ''
  const refHost = hostOf(referrer)
  const selfHost = window.location.hostname.toLowerCase()

  let source: string
  let medium: string

  if (utmSource) {
    // Explicit campaign tagging always wins
    source = utmSource
    medium = utmMedium || 'referral'
  } else if (!referrer || refHost === selfHost) {
    // No referrer, or an internal navigation → treat as direct
    source = 'direct'
    medium = 'direct'
  } else if (matchesAny(refHost, AI_HOSTS)) {
    source = refHost
    medium = 'ai_referral'
  } else if (matchesAny(refHost, SEARCH_HOSTS)) {
    source = refHost.replace(/^www\./, '').split('.')[0] // 'google', 'bing'
    medium = 'organic'
  } else if (matchesAny(refHost, SOCIAL_HOSTS)) {
    source = refHost.replace(/^www\./, '')
    medium = 'social'
  } else {
    source = refHost.replace(/^www\./, '')
    medium = 'referral'
  }

  return {
    source,
    medium,
    campaign: utmCampaign,
    landingPage: window.location.pathname,
    referrer: refHost,
    ts: new Date().toISOString(),
  }
}

/**
 * Records the first-touch attribution once per browser (persisted in
 * localStorage). Safe to call on every page load — it no-ops after the first.
 */
export function captureFirstTouch(): void {
  if (typeof window === 'undefined') return
  try {
    if (localStorage.getItem(FT_KEY)) return
    localStorage.setItem(FT_KEY, JSON.stringify(deriveTouch()))
  } catch {
    // localStorage blocked (private mode / cookies disabled) — attribution
    // degrades gracefully to last-touch only.
  }
}

function getFirstTouch(): Touch | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(FT_KEY)
    return raw ? (JSON.parse(raw) as Touch) : null
  } catch {
    return null
  }
}

/**
 * Builds the Calendly tracking query params from first- and last-touch data.
 * These surface on the invitee record and in the invitee.created webhook payload.
 */
export function calendlyTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const last = deriveTouch()
  const first = getFirstTouch() || last

  const clip = (s: string, n = 120) => (s || '').slice(0, n)

  return {
    utm_source: clip(last.source),
    utm_medium: clip(last.medium),
    utm_campaign: clip(last.campaign || first.source), // first-touch source when no explicit campaign
    utm_content: clip(last.landingPage), // page the booking was launched from
    utm_term: clip(last.referrer || 'none'), // referring host of this session
  }
}

/** A compact object suitable for a GA4 event payload. */
export function attributionForAnalytics(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const last = deriveTouch()
  const first = getFirstTouch() || last
  return {
    source: last.source,
    medium: last.medium,
    landing_page: last.landingPage,
    referrer: last.referrer || 'none',
    first_touch_source: first.source,
    first_touch_medium: first.medium,
  }
}

/**
 * middleware.ts — Edge middleware for permanent spam path suppression
 *
 * Returns HTTP 410 Gone (empty body, no crash) for ALL legacy spam URL patterns.
 *
 * Why 410 and not 404?
 *   Google drops 410 pages significantly faster — it stops queuing the URL for
 *   future recrawls almost immediately. 404 is ambiguous; Google may retry
 *   for months. 410 = "gone forever, stop checking."
 *
 * Why middleware and not a catch-all page?
 *   Runs at the Edge before any page rendering — zero cost, zero latency.
 *   Cannot be overridden by a future page.tsx at the same path.
 *
 * Architecture note (Vercel Edge Runtime):
 *   NextResponse(null, { status: 410 }) returns an empty body — this is
 *   required. Returning an HTML body in Edge middleware crashes Vercel.
 *
 * Coverage:
 *   - Directory-style spam paths: matched in config.matcher
 *   - Prefix patterns (/adobe-*, /workday-*, /servicenow-*): runtime startsWith check
 *   - 23 individual spam slugs: listed in SPAM_PREFIXES + config.matcher
 */

import { NextResponse, type NextRequest } from 'next/server'

/**
 * Runtime prefix checks for patterns that can't be cleanly expressed in the
 * path-to-regexp matcher syntax (same-segment prefixes like /adobe-something).
 * Also used as a safety net for the individual slugs.
 */
const SPAM_PREFIXES: string[] = [
  // Same-segment prefix patterns
  '/adobe-',
  '/workday-',
  '/servicenow-',
  // 23 individual spam slugs (matched without trailing slash to catch /slug and /slug/...)
  '/the-high-business-council',
  '/ultimate-business-advisor',
  '/founders-friend',
  '/web-design-wizard',
  '/database-administrator',
  '/cloud-migration-specialist',
  '/cloud-consultant',
  '/senior-ai',
  '/ai-studio',
  '/events',
  '/saas-quick',
  '/macky-ai',
  '/chris-worths-ai-alter-ego',
  '/smartsheet-2',
  '/streamlabs-podcast-editor',
  '/supaclip-pro',
  '/img2prompt',
  '/ellipsis-ai',
  '/leania-ai',
  '/astria-ai',
  '/entelligence-ai',
  '/webwave-ai',
  '/weaverse-ai',
]

const GONE = new NextResponse(null, {
  status: 410,
  headers: {
    'X-Robots-Tag': 'noindex, nofollow',
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
})

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Runtime check — fires for prefix patterns and individual slugs
  if (SPAM_PREFIXES.some(p => pathname.startsWith(p))) {
    return GONE
  }

  // Everything else that reaches middleware (directory patterns via matcher) → 410
  return GONE
}

export const config = {
  matcher: [
    // ── Directory-style spam paths ──────────────────────────────────────────
    // :path* matches zero or more segments, so /shop and /shop/anything both match
    '/onlines/:path*',
    '/shop/:path*',
    '/product/:path*',
    '/category/:path*',
    '/blogs/:path*',

    // ── Same-segment prefix patterns ────────────────────────────────────────
    // Handled by runtime startsWith check above; listed here so middleware fires
    '/adobe-:path*',
    '/workday-:path*',
    '/servicenow-:path*',

    // ── 23 individual spam slugs ────────────────────────────────────────────
    '/the-high-business-council/:path*',
    '/ultimate-business-advisor/:path*',
    '/founders-friend/:path*',
    '/web-design-wizard/:path*',
    '/database-administrator/:path*',
    '/cloud-migration-specialist/:path*',
    '/cloud-consultant/:path*',
    '/senior-ai/:path*',
    '/ai-studio/:path*',
    '/events/:path*',
    '/saas-quick/:path*',
    '/macky-ai/:path*',
    '/chris-worths-ai-alter-ego/:path*',
    '/smartsheet-2/:path*',
    '/streamlabs-podcast-editor/:path*',
    '/supaclip-pro/:path*',
    '/img2prompt/:path*',
    '/ellipsis-ai/:path*',
    '/leania-ai/:path*',
    '/astria-ai/:path*',
    '/entelligence-ai/:path*',
    '/webwave-ai/:path*',
    '/weaverse-ai/:path*',
  ],
}

/**
 * middleware.ts — Edge middleware for permanent spam path suppression
 *
 * Returns HTTP 410 Gone for all /onlines/* paths.
 *
 * Why 410 and not 404?
 * - 410 (Gone) signals to Google that the resource is *permanently* removed.
 * - Google processes 410 faster than 404 for deindexing — it stops queuing
 *   the URL for future recrawls almost immediately.
 * - 404 leaves ambiguity; Google may retry for months.
 *
 * Why middleware and not a catch-all page?
 * - Runs at the Edge before any page rendering — zero cost, zero latency.
 * - Guaranteed to fire for every /onlines/* URL regardless of what Next.js
 *   pages exist underneath.
 * - Cannot be accidentally overridden by a future page.tsx addition.
 *
 * These paths were spam affiliate product pages from the previous site.
 * ~19.5k URLs were indexed by Google. This file ensures they can never
 * return — even if someone adds a page.tsx at that path in future.
 */

import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Return 410 Gone for all /onlines/* spam paths — permanently.
  // Google will dequeue these URLs and stop allocating crawl budget to them.
  return new NextResponse(null, {
    status: 410,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}

export const config = {
  // Only activate middleware for /onlines/* — never fires on real pages
  matcher: ['/onlines/:path*'],
}

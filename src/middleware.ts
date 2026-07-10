import { NextResponse, type NextRequest } from 'next/server'

const SPAM_PREFIXES: string[] = [
  '/onlines/',
  '/shop/',
  '/product/',
  '/category/',
  '/blogs/',
  '/adobe-',
  '/workday-',
  '/servicenow-',
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

/**
 * Directory-style prefixes (e.g. '/onlines/') must also catch the bare path
 * without a trailing slash (e.g. '/onlines'), which otherwise falls through
 * to Next.js's normal 404 instead of returning 410.
 */
function isSpamPath(pathname: string): boolean {
  return SPAM_PREFIXES.some(p => {
    if (pathname.startsWith(p)) return true
    if (p.endsWith('/') && pathname === p.slice(0, -1)) return true
    return false
  })
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isSpamPath(pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  }

  // Forward the pathname as a header so server layouts can read it
  // (used to suppress the global Navbar/Footer on standalone pages)
  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)
  return response
}

export const config = {
  // Run on all paths except Next.js internals and static assets.
  // Runtime startsWith check above handles the actual spam filtering.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (SPAM_PREFIXES.some(p => pathname.startsWith(p))) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  // Run on all paths except Next.js internals and static assets.
  // Runtime startsWith check above handles the actual spam filtering.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

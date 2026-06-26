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
        'X-Middleware-Hit': 'spam-410',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  }

  // Pass through — but stamp a header so we can confirm middleware ran
  const res = NextResponse.next()
  res.headers.set('X-Middleware-Hit', 'pass')
  return res
}

export const config = {
  matcher: ['/onlines/:path*'],
}

import { NextResponse, type NextRequest } from 'next/server'
import sitemap from './app/sitemap'

// Omitted pages that are valid but not listed in sitemap.xml to avoid direct SEO indexing
const ADDITIONAL_VALID_PATHS = new Set([
  '/profiles',
  '/sitemap',
  '/meeting-confirmed',
  '/engineers',
])

// Active redirect sources from next.config.ts — must bypass 410 to allow redirects to execute
const LEGACY_REDIRECT_SOURCES = new Set([
  '/ai-project-estimator',
  '/ai-readiness-ad-marketing-agencies',
  '/power-automate-vs-zapier-vs-n8n-vs-make-which-workflow-automation-tool-should-your-team-master-2025',
  '/unlocking-precision-the-magic-of-custom-llm-embeddings-in-ai-solutions',
  '/llm-fine-tuning-guide',
  '/scaling-your-saas-with-offshore-full-stack-developers-a-guide-to-rapid-growth',
  '/llm-engineers',
  '/hire/llm-engineers',
  '/hire-fintech-developers',
  '/hire-machine-learning-engineer-offshore-at-low-cost',
  '/hire-ai-software-development-talent-offshore',
  '/hire-a-front-end-developer',
  '/hire-mern-developers',
  '/remote-full-stack-developer',
  '/hire-top-handpicked-pre-vetted-computer-vision-engineers',
  '/big-data-engineer',
  '/salesforce-community-cloud-specialist',
  '/gaming-hire-game-developers',
  '/how-it-works-hire-dedicated-developers',
  '/our-talent-pool',
  '/engage/computer-vision-engineers',
  '/engage/machine-learning-engineers',
])

const VALID_PREFIXES = [
  '/blog/',
  '/case-studies/',
  '/agentforce/',
  '/azure-ai-foundry/',
  '/vertex-ai/',
  '/intelligent-document-processing/',
  '/hire/',
  '/engage/',
  '/ai-workflow-automation-library/',
  '/tools/',
]

// Cache the set of sitemap paths to prevent re-creation on every request
let cachedValidPaths: Set<string> | null = null

function getValidPaths(): Set<string> {
  if (cachedValidPaths) return cachedValidPaths

  const paths = new Set<string>()
  try {
    const entries = sitemap()
    for (const entry of entries) {
      const urlObj = new URL(entry.url)
      paths.add(urlObj.pathname)
    }
  } catch (e) {
    console.error('Error parsing sitemap in middleware:', e)
  }

  cachedValidPaths = paths
  return paths
}

function isGonePath(pathname: string): boolean {
  // 1. Next.js internals, API routes and monitoring endpoints must bypass de-indexing
  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/') || pathname.startsWith('/monitoring')) {
    return false
  }

  // 2. Allow static files in /public (like favicon.ico, sitemaps, images, PDFs, etc.)
  if (pathname.includes('.')) {
    return false
  }

  // 3. Dynamic client questionnaires must bypass de-indexing
  if (pathname.endsWith('/discovery-questionnaire')) {
    return false
  }

  // 3b. Next.js file-convention image routes (opengraph-image, twitter-image, icon)
  // render with an extensionless pathname, so they'd otherwise fall through to 410.
  if (/\/(opengraph-image|twitter-image|icon|apple-icon)(-\d+)?$/.test(pathname)) {
    return false
  }

  // 4. Normalize the path (strip trailing slash)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname

  // 5. If it is an active redirect source in next.config.ts, let the redirect work
  if (LEGACY_REDIRECT_SOURCES.has(normalizedPath)) {
    return false
  }

  // 6. If it is in ADDITIONAL_VALID_PATHS, allow
  if (ADDITIONAL_VALID_PATHS.has(normalizedPath)) {
    return false
  }

  // 7. If it is in sitemap.ts paths, allow
  const validPaths = getValidPaths()
  if (validPaths.has(normalizedPath)) {
    return false
  }

  // 8. Everything else is a legacy spam URL, deleted page, or junk page -> HTTP 410 Gone
  return true
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isGonePath(pathname)) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Page Removed (410)</title>
          <meta name="robots" content="noindex, nofollow">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              background: #f9fafb;
              color: #111827;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              text-align: center;
            }
            .container {
              max-width: 32rem;
              padding: 1.5rem;
            }
            .code {
              font-size: 0.875rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #ea580c;
              margin-bottom: 1rem;
            }
            .title {
              font-size: 2.5rem;
              font-weight: 700;
              letter-spacing: -0.025em;
              margin: 0 0 1rem 0;
            }
            .message {
              font-size: 1.125rem;
              color: #4b5563;
              margin-bottom: 2rem;
              line-height: 1.6;
            }
            .btn {
              display: inline-flex;
              align-items: center;
              background: #ea580c;
              color: #ffffff;
              font-weight: 600;
              padding: 0.75rem 2rem;
              border-radius: 9999px;
              text-decoration: none;
              transition: opacity 0.2s;
            }
            .btn:hover {
              opacity: 0.9;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="code">410 Gone</div>
            <h1 class="title">Page has been removed</h1>
            <p class="message">This page is permanently gone. You can return to our homepage.</p>
            <a href="/" class="btn">Back to Kovil AI</a>
          </div>
        </body>
      </html>`,
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      }
    )
  }

  // Forward the pathname as a header so server layouts can read it
  const response = NextResponse.next()
  response.headers.set('x-pathname', pathname)
  return response
}

export const config = {
  // Run on all paths except Next.js internals and static assets.
  // Runtime startsWith check above handles the actual spam filtering.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

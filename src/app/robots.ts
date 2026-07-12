import type { MetadataRoute } from 'next'
import sitemap from './sitemap'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://kovil.ai'

/**
 * Old URLs that 301-redirect via next.config.ts.
 * Google must crawl these to follow the redirect and deindex the old URL.
 */
const legacyRedirectSources: string[] = [
  '/power-automate-vs-zapier-vs-n8n-vs-make-which-workflow-automation-tool-should-your-team-master-2025',
  '/unlocking-precision-the-magic-of-custom-llm-embeddings-in-ai-solutions',
  '/llm-fine-tuning-guide',
  '/scaling-your-saas-with-offshore-full-stack-developers-a-guide-to-rapid-growth',
  '/llm-engineers',
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
]

/**
 * Dynamically parse trash-cleanup-sitemap.xml at build time
 * to allow Googlebot to crawl all spam pages and process their 410 statuses.
 */
function getTrashSitemapPaths(): string[] {
  try {
    const filePath = path.join(process.cwd(), 'public', 'trash-cleanup-sitemap.xml')
    if (!fs.existsSync(filePath)) return []

    const content = fs.readFileSync(filePath, 'utf-8')
    const paths = new Set<string>()
    
    // Match all absolute URLs inside <loc> tags
    const matches = content.matchAll(/<loc>(https:\/\/kovil\.ai[^<]+)<\/loc>/g)
    for (const match of matches) {
      const url = match[1]
      const pathname = url.replace('https://kovil.ai', '')
      
      paths.add(pathname)
      
      // Ensure both trailing slash and slashless variants are allowed
      if (pathname.endsWith('/') && pathname !== '/') {
        paths.add(pathname.slice(0, -1))
      } else if (!pathname.endsWith('/')) {
        paths.add(pathname + '/')
      }
    }
    
    return Array.from(paths)
  } catch (e) {
    console.error('Error reading trash sitemap in robots.ts:', e)
    return []
  }
}

export default function robots(): MetadataRoute.Robots {
  // Auto-derive allow list from sitemap — stays in sync automatically
  const sitemapPaths = sitemap().map(
    (entry) => entry.url.replace(BASE_URL, '') || '/'
  )

  const trashPaths = getTrashSitemapPaths()

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          ...sitemapPaths,
          ...legacyRedirectSources,
          // Dynamically read from sitemap to cover all 13k+ spam URLs (with and without slashes)
          ...trashPaths,
          // Next.js assets (JS/CSS needed for page rendering)
          '/_next/static/',
          '/_next/image',
          // Misc
          '/sitemap.xml',
          '/favicon.ico',
          '/og-image.png',
          '/og-profiles.png',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}

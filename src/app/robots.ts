/**
 * robots.ts — dynamically generated from sitemap.ts
 *
 * Single source of truth: every URL in sitemap.ts is automatically allowed.
 * To allow a new page, just add it to sitemap.ts — no robots.txt edit needed.
 *
 * Strategy: Disallow: / (block everything) + explicit Allow per legitimate page.
 * Google uses the most specific matching rule, so /about beats Disallow: /.
 */

import type { MetadataRoute } from 'next'
import sitemap from './sitemap'

const BASE_URL = 'https://kovil.ai'

/**
 * Old URLs that 301-redirect via next.config.ts.
 * Google must crawl these to follow the redirect and deindex the old URL.
 * Blocking them causes "indexed though blocked by robots.txt" loop.
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

export default function robots(): MetadataRoute.Robots {
  // Auto-derive allow list from sitemap — stays in sync automatically
  const sitemapPaths = sitemap().map(
    (entry) => entry.url.replace(BASE_URL, '') || '/'
  )

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          ...sitemapPaths,
          ...legacyRedirectSources,
          /**
           * TEMPORARY — remove once GSC "Indexed pages" count drops to ~200.
           *
           * ~19.5k /onlines/* affiliate product URLs are technically indexed
           * but suppressed from SERP by an active GSC prefix removal (expires
           * Oct 3 2026). Allowing crawl lets Google confirm the 404 responses
           * and permanently deindex them. Without this, robots.txt blocks crawl
           * → Google can't see the 404 → pages stay indexed indefinitely.
           */
          '/onlines/',
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

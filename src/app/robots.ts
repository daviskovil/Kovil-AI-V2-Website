/**
 * robots.ts — dynamically generated from sitemap.ts
 *
 * Single source of truth: every URL in sitemap.ts is automatically allowed.
 * To allow a new page, just add it to sitemap.ts — no robots.txt edit needed.
 *
 * Strategy: Disallow: / (block everything) + explicit Allow per legitimate page.
 * Google uses the most specific matching rule, so /about beats Disallow: /.
 *
 * ── GSC SPAM DEINDEXING ────────────────────────────────────────────────────
 * Spam URLs must be explicitly ALLOWED here even though they return 410.
 * If a path is blocked by robots.txt, Googlebot cannot crawl it, so it never
 * sees the 410 Gone response, and the page stays frozen in Google's index
 * indefinitely ("indexed though blocked by robots.txt" state).
 *
 * The strategy:
 *   1. middleware.ts returns 410 Gone for all spam patterns (already done)
 *   2. robots.txt explicitly Allows all spam patterns (this file)
 *   3. trash-cleanup-sitemap.xml submitted to GSC → Googlebot bursts through
 *      all 19.7k URLs, hits 410 on each, and mass-deindexes within days
 *
 * These Allow entries can be removed once GSC shows ~0 indexed spam pages.
 * Expected timeline: 2–4 weeks after trash-cleanup-sitemap.xml is submitted.
 * ──────────────────────────────────────────────────────────────────────────
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

/**
 * Spam URL patterns that middleware returns 410 Gone for.
 * Must be explicitly Allowed so Googlebot can reach them and confirm they're dead.
 * Without these Allow entries, robots.txt's "Disallow: /" blocks Googlebot from
 * ever crawling these paths, preventing deindexing.
 *
 * Remove this list once GSC indexed count for spam patterns reaches ~0.
 */
const spamPatterns: string[] = [
  // ── Directory-style spam paths ────────────────────────────────────────────
  '/onlines/',
  '/shop/',
  '/product/',
  '/category/',
  '/blogs/',
  // ── Same-segment prefix patterns (no trailing slash — matches all variants) ─
  '/adobe-',
  '/workday-',
  '/servicenow-',
  // ── 23 individual spam slugs ──────────────────────────────────────────────
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
          // Spam paths returning 410 — must be crawlable for deindexing to work
          ...spamPatterns,
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

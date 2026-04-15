import type { MetadataRoute } from 'next'
import { posts } from '@/src/data/posts'
import { caseStudies } from '@/src/data/case-studies'

const BASE_URL = 'https://kovil.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // ── Static core pages ──────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                                  lastModified: now,          changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/how-it-works`,                      lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/managed-ai-engineer`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/outcome-based-project`,      lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/app-rescue`,                 lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`,                      lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,                              lastModified: now,          changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/frequently-asked-questions`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,                           lastModified: now,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/apply`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/ai-project-estimator`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/ai-readiness-ad-marketing-agencies`, lastModified: now,  changeFrequency: 'monthly', priority: 0.8 },
  ]

  // ── Blog posts (auto-generated from posts.ts) ──────────────────────────────
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Case studies (auto-generated from case-studies.ts) ────────────────────
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...caseStudyPages]
}

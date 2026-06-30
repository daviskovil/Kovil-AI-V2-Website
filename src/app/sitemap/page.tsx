import type { Metadata } from 'next'
import { posts } from '@/src/data/posts'
import { caseStudies } from '@/src/data/case-studies'
import SitemapClient from './SitemapClient'

export const metadata: Metadata = {
  title: 'Site Map | Every Page on Kovil AI',
  description: 'Browse all 280+ pages on kovil.ai — AI services, hire pages, case studies, blog posts, and more, organized by category for easy navigation.',
  alternates: { canonical: 'https://kovil.ai/sitemap' },
  robots: { index: true, follow: true },
}

export default function SitemapPage() {
  const blogLinks = posts.map(p => ({ label: p.title, href: `/blog/${p.slug}` }))
  const caseStudyLinks = caseStudies.map(cs => ({ label: cs.title, href: `/case-studies/${cs.slug}` }))
  return <SitemapClient blogLinks={blogLinks} caseStudyLinks={caseStudyLinks} />
}

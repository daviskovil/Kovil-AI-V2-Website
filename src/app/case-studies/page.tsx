import type { Metadata } from 'next'
import CaseStudiesPage from '@/src/pages/CaseStudiesPage'
import { caseStudies } from '@/src/data/case-studies'

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Kovil AI Engineering Case Studies',
  description: 'Real AI engineering outcomes delivered by Kovil AI across FinTech, HealthTech, Logistics, SaaS, and more.',
  url: 'https://kovil.ai/case-studies',
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((cs, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: cs.title,
    url: `https://kovil.ai/case-studies/${cs.slug}`,
  })),
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://kovil.ai/case-studies' },
  ],
}

export const metadata: Metadata = {
  title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
  description: 'How Kovil AI engineers delivered measurable outcomes across FinTech, HealthTech, Logistics, SaaS, and more.',
  alternates: { canonical: 'https://kovil.ai/case-studies' },
  openGraph: {
    type: 'website',
    title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
    description: 'Real AI engineering outcomes across FinTech, HealthTech, Logistics, SaaS and more. See what Kovil AI has shipped.',
    url: 'https://kovil.ai/case-studies',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-case-studies.jpg', width: 1200, height: 675, alt: 'Kovil AI Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
    description: 'Real AI engineering outcomes across FinTech, HealthTech, Logistics, SaaS and more. See what Kovil AI has shipped.',
    images: ['https://kovil.ai/og-case-studies.jpg'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><CaseStudiesPage /></div>
    </>
  )
}

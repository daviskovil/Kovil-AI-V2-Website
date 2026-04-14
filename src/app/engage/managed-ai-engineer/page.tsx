import type { Metadata } from 'next'
import ManagedAIEngineerPage from '@/src/pages/engage/ManagedAIEngineerPage'

export const metadata: Metadata = {
  title: 'Hire a Managed AI Engineer for Your Startup | 48-Hour Matching | Kovil AI',
  description: 'Hire a managed AI engineer embedded into your team in 48 hours. Vetted Tier-1 builders, sprint delivery, Engagement Manager oversight, 2-week risk-free trial. No lock-in. Built for startups and growing engineering teams.',
  alternates: { canonical: 'https://kovil.ai/engage/managed-ai-engineer' },
  keywords: ['hire AI engineer', 'managed AI engineer', 'hire AI engineer startup', 'AI engineer team augmentation', 'embedded AI engineer'],
  openGraph: {
    type: 'website',
    title: 'Hire a Managed AI Engineer | 48-Hour Matching | Kovil AI',
    description: 'Embed a vetted Tier-1 AI engineer into your team in 48 hours. Sprint delivery, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/engage/managed-ai-engineer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Managed AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Managed AI Engineer | 48-Hour Matching | Kovil AI',
    description: 'Embed a vetted Tier-1 AI engineer into your team in 48 hours. Sprint delivery, 2-week risk-free trial, no lock-in.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed AI Engineer',
  description: 'Embed a vetted Tier-1 AI engineer into your team in 48 hours. Sprint delivery, Engagement Manager oversight, 2-week risk-free trial, no long-term lock-in.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  serviceType: 'Managed AI Engineering',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/engage/managed-ai-engineer',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Match in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/engage/managed-ai-engineer',
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20"><ManagedAIEngineerPage /></div>
    </>
  )
}

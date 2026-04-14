import type { Metadata } from 'next'
import OutcomeProjectPage from '@/src/pages/engage/OutcomeProjectPage'

export const metadata: Metadata = {
  title: 'Fixed-Price AI Project Development — Scoped, Built & Shipped | Kovil AI',
  description: 'Get a fixed-price AI project proposal in 48 hours. Milestone-gated builds, dedicated squad, full IP ownership, and codebase handoff. No surprises, no retainers — just delivered AI.',
  alternates: { canonical: 'https://kovil.ai/engage/outcome-based-project' },
  openGraph: {
    type: 'website',
    title: 'Fixed-Price AI Project Development — Scoped, Built & Shipped | Kovil AI',
    description: 'Fixed-price AI project proposal in 48 hours. Milestone-gated builds, full IP ownership, codebase handoff. No surprises.',
    url: 'https://kovil.ai/engage/outcome-based-project',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Outcome-Based AI Project' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fixed-Price AI Project Development | Kovil AI',
    description: 'Fixed-price AI project proposal in 48 hours. Milestone-gated builds, full IP ownership, codebase handoff. No surprises.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Outcome-Based AI Project',
  description: 'Fixed-price AI project delivery with a scoped proposal in 48 hours. Milestone-gated builds, dedicated squad, full IP ownership, and full codebase handoff on completion.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  serviceType: 'Fixed-Price AI Project Development',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/engage/outcome-based-project',
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price proposal in 48 hours. Milestone-gated. Full IP ownership and codebase handoff.',
    url: 'https://kovil.ai/engage/outcome-based-project',
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20"><OutcomeProjectPage /></div>
    </>
  )
}

import type { Metadata } from 'next'
import AppRescuePage from '@/src/pages/engage/AppRescuePage'

export const metadata: Metadata = {
  title: 'AI App Rescue — Fix Hallucinating RAG, Failing AI Apps & Vibe Builds | Kovil AI',
  description: 'Failing AI app, hallucinating RAG pipeline, or broken vibe build? Kovil AI\'s SWAT team audits, fixes, and stabilises it — free diagnostic audit, 99.9% uptime SLA, P1 bugs resolved in 24 hours.',
  alternates: { canonical: 'https://kovil.ai/engage/app-rescue' },
  openGraph: {
    type: 'website',
    title: 'AI App Rescue — Fix Hallucinating RAG & Failing AI Apps | Kovil AI',
    description: 'Failing AI app or hallucinating RAG? Kovil AI SWAT team audits, fixes, and stabilises it. Free diagnostic audit, P1 bugs resolved in 24 hours.',
    url: 'https://kovil.ai/engage/app-rescue',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI App Rescue' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI App Rescue — Fix Hallucinating RAG & Failing AI Apps | Kovil AI',
    description: 'Failing AI app or hallucinating RAG? Kovil AI SWAT team audits, fixes, and stabilises it. Free diagnostic, P1 bugs in 24 hours.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI App Rescue',
  description: 'Audit, fix, and stabilise failing AI apps, hallucinating RAG pipelines, and broken vibe builds. Free diagnostic audit, 99.9% uptime SLA, P1 bugs resolved in 24 hours.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  serviceType: 'AI Application Rescue & Stabilisation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/engage/app-rescue',
  offers: {
    '@type': 'Offer',
    description: 'Free diagnostic audit. P1 bug resolution in 24 hours. 99.9% uptime SLA.',
    url: 'https://kovil.ai/engage/app-rescue',
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20"><AppRescuePage /></div>
    </>
  )
}

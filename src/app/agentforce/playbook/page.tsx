import type { Metadata } from 'next'
import AgentforcePlaybookHubPage from '@/src/pages/agentforce/playbook/AgentforcePlaybookHubPage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Agentforce Playbook: Implementation Guides & Technical Articles | Kovil AI',
  description: 'Practitioner guides for Salesforce Agentforce — pricing breakdowns, ROI frameworks, Atlas Reasoning Engine deep dives, scoping checklists, and real deployment case studies. Written by engineers who ship Agentforce in production.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook' },
  keywords: [
    'agentforce playbook',
    'agentforce implementation guide',
    'agentforce technical guide',
    'how to implement agentforce',
    'agentforce pricing guide',
    'agentforce roi guide',
    'agentforce best practices',
    'salesforce agentforce guide',
    'agentforce deployment guide',
    'agentforce practitioner guide',
    'atlas reasoning engine guide',
    'agentforce scoping guide',
    'agentforce case study',
    'agentforce for developers',
    'agentforce architecture guide',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Playbook: Implementation Guides & Technical Articles | Kovil AI',
    description: 'Practitioner guides for Salesforce Agentforce — pricing breakdowns, ROI frameworks, scoping checklists, and real deployment case studies.',
    url: 'https://kovil.ai/agentforce/playbook',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Playbook — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Playbook: Implementation Guides & Technical Articles | Kovil AI',
    description: 'Practitioner guides for Salesforce Agentforce — pricing, ROI, scoping, and deployment case studies from engineers who build in production.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

// ── CollectionPage Schema ─────────────────────────────────────────────────────
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce Playbook',
  description: 'Practitioner guides, implementation patterns, pricing breakdowns, ROI frameworks, and technical deep dives for Salesforce Agentforce deployments.',
  url: 'https://kovil.ai/agentforce/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  hasPart: [
    { '@type': 'Article', name: 'How to scope your first Agentforce agent', url: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent' },
    { '@type': 'Article', name: 'Atlas Reasoning Engine explained', url: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained' },
    { '@type': 'Article', name: 'Agentforce Service Cloud build case study', url: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build' },
    { '@type': 'Article', name: 'Agentforce Pricing Guide 2026', url: 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026' },
    { '@type': 'Article', name: 'Agentforce ROI Guide', url: 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide' },
    { '@type': 'Article', name: 'How Agentforce Works', url: 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work' },
  ],
}

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/agentforce/playbook' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Playbook: Implementation Guides & Technical Articles | Kovil AI',
  description: 'Practitioner guides for Salesforce Agentforce — pricing breakdowns, ROI frameworks, Atlas Reasoning Engine deep dives, scoping checklists, and real deployment case studies.',
  url: 'https://kovil.ai/agentforce/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3', 'p'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforcePlaybookHubPage />
    </>
  )
}

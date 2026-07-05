import type { Metadata } from 'next'
import AgentforceIndustriesHubPage from '@/src/pages/agentforce/industries/AgentforceIndustriesHubPage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Agentforce by Industry: Financial Services, Healthcare, Insurance & More',
  description: 'Production Agentforce deployments across six industries — financial services, healthcare, insurance, retail, manufacturing, and telecom. Industry-specific use cases, compliance guardrails, and Salesforce cloud integration patterns.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries' },
  keywords: [
    'agentforce by industry',
    'agentforce financial services',
    'agentforce healthcare',
    'agentforce insurance',
    'agentforce retail',
    'agentforce manufacturing',
    'agentforce telecom',
    'salesforce agentforce industry',
    'agentforce industry implementation',
    'agentforce regulated industries',
    'agentforce compliance',
    'salesforce agentforce vertical',
    'agentforce FSC',
    'agentforce health cloud',
    'agentforce communications cloud',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce by Industry | Kovil AI',
    description: 'Production Agentforce deployments across financial services, healthcare, insurance, retail, manufacturing, and telecom — with industry-specific compliance guardrails.',
    url: 'https://kovil.ai/agentforce/industries',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce by Industry — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce by Industry | Kovil AI',
    description: 'Production Agentforce for financial services, healthcare, insurance, retail, manufacturing, and telecom.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

// ── CollectionPage Schema ─────────────────────────────────────────────────────
const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce by Industry',
  description: 'Production Agentforce deployments across six regulated and high-volume industries — financial services, healthcare, insurance, retail & ecommerce, manufacturing, and telecom.',
  url: 'https://kovil.ai/agentforce/industries',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  hasPart: [
    { '@type': 'WebPage', name: 'Agentforce for Financial Services', url: 'https://kovil.ai/agentforce/industries/financial-services' },
    { '@type': 'WebPage', name: 'Agentforce for Healthcare', url: 'https://kovil.ai/agentforce/industries/healthcare' },
    { '@type': 'WebPage', name: 'Agentforce for Insurance', url: 'https://kovil.ai/agentforce/industries/insurance' },
    { '@type': 'WebPage', name: 'Agentforce for Retail & Ecommerce', url: 'https://kovil.ai/agentforce/industries/retail-ecommerce' },
    { '@type': 'WebPage', name: 'Agentforce for Manufacturing', url: 'https://kovil.ai/agentforce/industries/manufacturing' },
    { '@type': 'WebPage', name: 'Agentforce for Telecommunications', url: 'https://kovil.ai/agentforce/industries/telecom' },
  ],
}

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/agentforce/industries' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce by Industry: Financial Services, Healthcare, Insurance & More | Kovil AI',
  description: 'Production Agentforce deployments across six industries — financial services, healthcare, insurance, retail, manufacturing, and telecom. Industry-specific use cases, compliance guardrails, and Salesforce cloud integration patterns.',
  url: 'https://kovil.ai/agentforce/industries',
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
      <AgentforceIndustriesHubPage />
    </>
  )
}

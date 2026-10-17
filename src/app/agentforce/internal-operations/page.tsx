import type { Metadata } from 'next'
import InternalOperationsHubPage from '@/src/pages/agentforce/internal-operations/InternalOperationsHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for HR, Finance & IT Operations',
  description: 'Production Agentforce internal agents: HR onboarding, finance approval routing, and IT helpdesk resolution, with the Einstein Trust Layer.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations' },
  keywords: [
    'agentforce internal operations',
    'agentforce hr onboarding',
    'agentforce finance approval',
    'agentforce it helpdesk',
    'salesforce agentforce internal',
    'agentforce employee onboarding',
    'agentforce invoice approval',
    'agentforce it support',
    'internal operations agent deployment',
    'agentforce internal agent',
    'agentforce hr automation',
    'agentforce workflow automation',
    'salesforce internal AI agent',
    'agentforce back office',
    'agentforce employee experience',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Internal Operations — HR, Finance & IT Agents | Kovil AI',
    description: 'HR onboarding agents, finance approval automation, and IT helpdesk resolution — deployed in Salesforce.',
    url: 'https://kovil.ai/agentforce/internal-operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Internal Operations — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Internal Operations AI Agents | Kovil AI',
    description: 'HR onboarding, finance approval, and IT helpdesk agents — deployed inside Salesforce.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Internal Operations — HR, Finance & IT',
  description: 'Production Agentforce internal operations deployments — HR onboarding automation, finance approval routing, and IT helpdesk resolution deployed inside Salesforce with Einstein Trust Layer.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Salesforce Agentforce Internal Operations Implementation',
  url: 'https://kovil.ai/agentforce/internal-operations',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Internal Operations Agents',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HR Onboarding Agent',
          description: 'Auto-generates personalised onboarding checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
          url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Finance Approval Agent',
          description: 'Routes purchase orders, expense reports, and budget requests through configured approval chains autonomously — with full audit logging.',
          url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Helpdesk Agent',
          description: 'Resolves Tier 1 IT requests — password resets, software access, device setup — without helpdesk team involvement.',
          url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent',
        },
      },
    ],
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Internal Operations',
  description: 'Production Agentforce internal operations deployments — HR onboarding, finance approval, and IT helpdesk agents.',
  url: 'https://kovil.ai/agentforce/internal-operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  hasPart: [
    { '@type': 'WebPage', name: 'HR Onboarding Agent', url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent' },
    { '@type': 'WebPage', name: 'Finance Approval Agent', url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent' },
    { '@type': 'WebPage', name: 'IT Helpdesk Agent', url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Internal Operations', item: 'https://kovil.ai/agentforce/internal-operations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Internal Operations — HR, Finance & IT Agents | Kovil AI',
  description: 'Production Agentforce internal operations agents — HR onboarding automation, finance approval routing, and IT helpdesk resolution deployed in Salesforce.',
  url: 'https://kovil.ai/agentforce/internal-operations',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <InternalOperationsHubPage />
    </>
  )
}

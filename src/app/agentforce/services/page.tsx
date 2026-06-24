import type { Metadata } from 'next'
import AgentforceServicesHubPage from '@/src/pages/agentforce/services/AgentforceServicesHubPage'

export const metadata: Metadata = {
  title: 'Agentforce Implementation Services — Strategy, Design, Deployment & Integration | Kovil AI',
  description: 'Fixed-price Agentforce implementation services — strategy & readiness, agent design & configuration, Sales Cloud deployment, Service Cloud deployment, MuleSoft integration, and rescue & optimisation.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services' },
  keywords: [
    'agentforce implementation services',
    'agentforce consulting services',
    'agentforce implementation partner',
    'agentforce strategy readiness',
    'agentforce agent design configuration',
    'agentforce sales cloud deployment',
    'agentforce service cloud deployment',
    'mulesoft agentforce integration',
    'agentforce rescue optimisation',
    'salesforce agentforce services',
    'agentforce fixed price',
    'agentforce sprint delivery',
    'agentforce implementation cost',
    'agentforce deployment services',
    'agentforce consulting partner',
    'salesforce ai agent services',
    'agentforce data cloud integration',
    'agentforce implementation timeline',
    'agentforce production deployment',
    'agentforce managed services',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Implementation Services — Strategy, Design, Deployment & Integration | Kovil AI',
    description: 'Fixed-price Agentforce implementation services — strategy & readiness, agent design & configuration, Sales Cloud deployment, Service Cloud deployment, MuleSoft integration, and rescue & optimisation.',
    url: 'https://kovil.ai/agentforce/services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Implementation Services — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Implementation Services | Kovil AI',
    description: 'Fixed-price Agentforce implementation services — strategy, design, deployment, MuleSoft integration, and rescue & optimisation.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Implementation Services',
  description: 'Fixed-price Agentforce implementation services — strategy & readiness, agent design & configuration, Sales Cloud deployment, Service Cloud deployment, MuleSoft & Data Cloud integration, and rescue & optimisation.',
  serviceType: 'Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/services',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: '734 Franklin Ave',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
  },
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price Agentforce implementation services — strategy through production deployment',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentforce Strategy & Readiness',
          url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agent Design & Configuration',
          url: 'https://kovil.ai/agentforce/services/agent-design-configuration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sales Cloud Agent Deployment',
          url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Service Cloud Agent Deployment',
          url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MuleSoft & Data Cloud Integration',
          url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentforce Rescue & Optimisation',
          url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation',
        },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce implementation services does Kovil AI offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI offers six Agentforce services: Strategy & Readiness (org audit, use case prioritisation, implementation roadmap), Agent Design & Configuration (Topic and Action architecture, Instructions authoring, full Agent Builder build), Sales Cloud Agent Deployment (SDR agents, pipeline monitors, quote agents), Service Cloud Agent Deployment (autonomous case resolution, escalation, knowledge base), MuleSoft & Data Cloud Integration (external system connectivity and Data Cloud unification), and Rescue & Optimisation (audit and fix of underperforming Agentforce deployments).',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Strategy & Readiness engagement delivers a production-ready roadmap in 5–7 days. A single-agent deployment — SDR agent, pipeline monitor, or case resolution agent — takes 2–3 weeks from kick-off to go-live. Multi-agent programmes covering multiple use cases run 6–12 weeks depending on integration complexity. All engagements are fixed-price with a defined deliverable and timeline agreed upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Agentforce implementation services fixed price or hourly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Kovil AI Agentforce services are fixed price. Every engagement is scoped, priced upfront, and delivered against a defined set of deliverables. There is no hourly billing or time-and-materials model. The fixed-price structure applies to all services — from the initial Strategy & Readiness engagement through full multi-agent deployments and rescue programmes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Agentforce Strategy & Readiness service cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Strategy & Readiness service includes: a comprehensive audit of your Salesforce org (licence utilisation, data model review, Data Cloud readiness, integration landscape, agent prerequisites), identification and prioritisation of high-ROI Agentforce use cases ranked by feasibility and business impact, definition of your Agentforce architecture and the data integrations required, and delivery of a sequenced implementation roadmap with sprint plan and business case to present internally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need MuleSoft for Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MuleSoft is required when Agentforce agents need to read from or write to systems outside Salesforce — loan management systems, EHR platforms, core banking, ERP systems, or other external APIs. If all the data your agents need lives inside Salesforce (Contacts, Cases, Accounts, Opportunities), Apex callouts or named credentials may be sufficient. We assess integration requirements during the Strategy & Readiness phase and recommend the appropriate approach based on your use case scope.',
      },
    },
  ],
}

const collectionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce Implementation Services | Kovil AI',
  description: 'All Agentforce implementation services offered by Kovil AI — strategy, design, deployment, integration, and rescue.',
  url: 'https://kovil.ai/agentforce/services',
  hasPart: [
    { '@type': 'WebPage', name: 'Agentforce Strategy & Readiness', url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness' },
    { '@type': 'WebPage', name: 'Agent Design & Configuration', url: 'https://kovil.ai/agentforce/services/agent-design-configuration' },
    { '@type': 'WebPage', name: 'Sales Cloud Agent Deployment', url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment' },
    { '@type': 'WebPage', name: 'Service Cloud Agent Deployment', url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment' },
    { '@type': 'WebPage', name: 'MuleSoft & Data Cloud Integration', url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration' },
    { '@type': 'WebPage', name: 'Agentforce Rescue & Optimisation', url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/agentforce/services' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Implementation Services — Strategy, Design, Deployment & Integration | Kovil AI',
  description: 'Fixed-price Agentforce implementation services — strategy & readiness, agent design & configuration, Sales Cloud deployment, Service Cloud deployment, MuleSoft integration, and rescue & optimisation.',
  url: 'https://kovil.ai/agentforce/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforceServicesHubPage />
    </>
  )
}

import type { Metadata } from 'next'
import AgentforceStrategyReadinessPage from '@/src/pages/agentforce/services/AgentforceStrategyReadinessPage'

export const metadata: Metadata = {
  title: 'Agentforce Strategy & Readiness',
  description: 'Agentforce readiness assessment and AI strategy consulting. Audit your Salesforce org, map highest-ROI opportunities, and receive a prioritised implementation roadmap in 10 days.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness' },
  keywords: [
    'Agentforce readiness assessment',
    'Salesforce AI strategy consulting',
    'Agentforce implementation roadmap',
    'Agentforce ROI planning',
    'Agentforce audit service',
    'Salesforce AI readiness',
    'Agentforce consulting',
    'Salesforce org audit Agentforce',
    'Agentforce use case prioritisation',
    'Salesforce Data Cloud readiness',
    'Agentforce licence optimisation',
    'Salesforce AI opportunity mapping',
    'Agentforce architecture blueprint',
    'Salesforce AI consulting partner',
    'Agentforce integration gap analysis',
    'Salesforce Agentforce strategy',
    'Agentforce board roadmap',
    'Salesforce AI implementation planning',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Strategy & Readiness | Kovil AI',
    description: 'Agentforce readiness assessment and AI strategy consulting. Audit your Salesforce org, map highest-ROI opportunities, and receive a prioritised implementation roadmap in 10 days.',
    url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Strategy & Readiness | Kovil AI',
    description: 'Agentforce readiness assessment and AI strategy consulting. Audit your Salesforce org, map highest-ROI opportunities, and receive a prioritised implementation roadmap in 10 days.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Strategy & Readiness',
  description: 'Agentforce readiness assessment and AI strategy consulting. Audit your Salesforce org, map highest-ROI opportunities, and receive a prioritised implementation roadmap in 10 days.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce/services',
  },
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Strategy & Readiness | Kovil AI',
  description: 'Agentforce readiness assessment and AI strategy consulting. Audit your Salesforce org, map highest-ROI opportunities, and receive a prioritised implementation roadmap in 10 days.',
  url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in the Agentforce Strategy & Readiness engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement includes a full Salesforce org health check covering data quality, permission sets, and Einstein enablement; a Data Cloud readiness assessment; use case prioritisation ranked by ROI and feasibility across Sales, Service, and Ops; licence optimisation analysis; integration gap mapping; and a detailed agent architecture blueprint. You receive a board-ready prioritised roadmap on Day 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Agentforce readiness assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement delivers results in 10 days: Days 1–3 cover the org audit; Days 4–7 cover opportunity mapping and stakeholder alignment; Day 10 is roadmap delivery. You leave with a complete, phased implementation plan ready to execute immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'We have Agentforce licences but haven\'t deployed any agents — is this the right starting point?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This engagement is specifically designed for organisations with Agentforce licences and a use case in mind but without a clear implementation plan. We turn unused licences into a funded activation plan with clear ROI justification and a phased rollout schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a Salesforce Data Cloud readiness assessment involve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We assess whether your data is sufficiently structured, unified, and accessible to ground Agentforce agents in real-time, accurate information. This includes reviewing data model quality, existing integrations, ingestion pipeline readiness, and the identity resolution capabilities needed for unified customer profiles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this engagement help us justify Agentforce investment to our board?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The roadmap deliverable is designed to be board-ready — it includes phased agent rollout plans, resource requirements, defined success metrics, and ROI projections for each prioritised use case. It gives leadership the confidence to fund implementation.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/agentforce/services' },
    { '@type': 'ListItem', position: 4, name: 'Agentforce Strategy & Readiness', item: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforceStrategyReadinessPage />
    </>
  )
}

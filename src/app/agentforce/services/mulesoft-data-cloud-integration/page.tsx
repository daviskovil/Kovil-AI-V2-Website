import type { Metadata } from 'next'
import MulesoftDataCloudIntegrationPage from '@/src/pages/agentforce/services/MulesoftDataCloudIntegrationPage'

export const metadata: Metadata = {
  title: 'MuleSoft & Data Cloud Integration',
  description: 'MuleSoft Agentforce integration and Salesforce Data Cloud implementation. Connect agents to ERP, EHR, payments, and logistics with real-time data grounding across every enterprise system.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration' },
  keywords: [
    'MuleSoft Agentforce integration',
    'Salesforce Data Cloud Agentforce',
    'Agentforce API integration service',
    'MuleSoft AI agent connector',
    'Data Cloud Agentforce implementation',
    'Salesforce integration Agentforce',
    'MuleSoft API connector design',
    'Salesforce Data Cloud profile unification',
    'Agentforce real-time data grounding',
    'MuleSoft ERP integration Agentforce',
    'Agentforce EHR connectivity',
    'Salesforce Data Cloud integration partner',
    'MuleSoft Salesforce implementation',
    'Agentforce enterprise system integration',
    'Salesforce API-led connectivity',
    'Data Cloud unification service',
    'MuleSoft circuit breaker Agentforce',
    'Salesforce Agentforce data integration',
  ],
  openGraph: {
    type: 'website',
    title: 'MuleSoft & Data Cloud Integration | Kovil AI',
    description: 'MuleSoft Agentforce integration and Salesforce Data Cloud implementation. Connect agents to ERP, EHR, payments, and logistics with real-time data grounding across every enterprise system.',
    url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MuleSoft & Data Cloud Integration | Kovil AI',
    description: 'MuleSoft Agentforce integration and Salesforce Data Cloud implementation. Connect agents to ERP, EHR, payments, and logistics with real-time data grounding across every enterprise system.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MuleSoft & Data Cloud Integration',
  description: 'MuleSoft Agentforce integration and Salesforce Data Cloud implementation. Connect agents to ERP, EHR, payments, and logistics with real-time data grounding across every enterprise system.',
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
  url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration',
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
  name: 'MuleSoft & Data Cloud Integration | Kovil AI',
  description: 'MuleSoft Agentforce integration and Salesforce Data Cloud implementation. Connect agents to ERP, EHR, payments, and logistics with real-time data grounding across every enterprise system.',
  url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration',
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
      name: 'How do you integrate Agentforce with external systems using MuleSoft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We design and build custom MuleSoft API connectors for each external system following API-led connectivity principles — with experience, process, and system layers properly separated. Each connector includes error handling, circuit breakers, retry logic, and observability. The engagement runs six weeks: integration discovery in Week 1, API and connector build in Weeks 2–4, and Data Cloud unification in Weeks 5–6.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Salesforce Data Cloud and why does Agentforce need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salesforce Data Cloud is a real-time data platform that unifies customer and operational data from all your systems into a single profile. Agentforce agents use Data Cloud for grounding — ensuring every agent response is based on accurate, current data rather than stale or hallucinated information. Without Data Cloud unification, agents operating across multiple systems often produce inaccurate or incomplete responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which enterprise systems can you connect to Agentforce via MuleSoft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have built MuleSoft connectors for SAP, Oracle, Epic, Cerner, NetSuite, and many other ERP, EHR, payments, logistics, and ticketing systems. We also implement webhook and event streaming integrations so agents can respond to real-world events like order status changes, payment confirmations, and appointment updates in real time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if an external system goes down during an Agentforce agent interaction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement circuit breaker patterns, fallback responses, and retry queues in every MuleSoft connector we build. If an external system is unavailable, your agent degrades gracefully with appropriate fallback messaging rather than failing catastrophically or producing inaccurate responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Our Agentforce agents are failing because they can\'t access the data they need — can you help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We diagnose integration gaps preventing your agents from accessing the data they need, then build the MuleSoft connectors and Data Cloud pipelines required to unlock full agent capability. This is one of the most common root causes of underperforming Agentforce deployments and one of the most fixable.',
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
    { '@type': 'ListItem', position: 4, name: 'MuleSoft & Data Cloud Integration', item: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <MulesoftDataCloudIntegrationPage />
    </>
  )
}

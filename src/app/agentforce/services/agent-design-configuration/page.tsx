import type { Metadata } from 'next'
import AgentDesignConfigurationPage from '@/src/pages/agentforce/services/AgentDesignConfigurationPage'

export const metadata: Metadata = {
  title: 'Agent Design & Configuration | Kovil AI',
  description: 'Agentforce agent design service using Agent Builder, Prompt Builder, and Flow. Topics, Actions, Instructions, and Trust Layer configured precisely to your business logic.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agent-design-configuration' },
  keywords: [
    'Agentforce agent design service',
    'Salesforce Agent Builder configuration',
    'Agentforce Topics Actions Instructions setup',
    'configure Agentforce agent',
    'Agentforce build service',
    'Agent Builder implementation',
    'Salesforce Agentforce implementation partner',
    'Agentforce Prompt Builder setup',
    'Agentforce Trust Layer configuration',
    'Salesforce AI agent configuration',
    'Agentforce guardrail design',
    'Agentforce Flow integration',
    'custom Agentforce agent build',
    'Agentforce UAT go-live support',
    'Salesforce autonomous agent design',
    'Agentforce Topics Actions design',
    'Agentforce Einstein Trust Layer',
    'Salesforce AI implementation service',
  ],
  openGraph: {
    type: 'website',
    title: 'Agent Design & Configuration | Kovil AI',
    description: 'Agentforce agent design service using Agent Builder, Prompt Builder, and Flow. Topics, Actions, Instructions, and Trust Layer configured precisely to your business logic.',
    url: 'https://kovil.ai/agentforce/services/agent-design-configuration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Design & Configuration | Kovil AI',
    description: 'Agentforce agent design service using Agent Builder, Prompt Builder, and Flow. Topics, Actions, Instructions, and Trust Layer configured precisely to your business logic.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agent Design & Configuration',
  description: 'Agentforce agent design service using Agent Builder, Prompt Builder, and Flow. Topics, Actions, Instructions, and Trust Layer configured precisely to your business logic.',
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
  url: 'https://kovil.ai/agentforce/services/agent-design-configuration',
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
  name: 'Agent Design & Configuration | Kovil AI',
  description: 'Agentforce agent design service using Agent Builder, Prompt Builder, and Flow. Topics, Actions, Instructions, and Trust Layer configured precisely to your business logic.',
  url: 'https://kovil.ai/agentforce/services/agent-design-configuration',
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
      name: 'What does your Agentforce agent design service include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our agent design service covers the full configuration of your Agentforce agent using Agent Builder, Prompt Builder, and Flow. This includes Topic and Action design with precise intent boundaries, prompt engineering with role and persona instructions, Einstein Trust Layer configuration for data masking and toxicity filtering, Flow integration for real business processes, guardrail and fallback design, and structured UAT with a supervised go-live.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to design and configure an Agentforce agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our standard engagement runs four weeks: Week 1 covers agent scoping and Topic/Action inventory; Weeks 2–3 cover building and configuring in Agent Builder, Prompt Builder, and Flow; Week 4 covers UAT, adversarial prompt testing, and supervised go-live.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you configure the Einstein Trust Layer as part of agent design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every engagement includes Einstein Trust Layer configuration — data masking rules, toxicity filtering policies, and grounding settings — ensuring your agent operates within safe, compliant boundaries appropriate to your business and industry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you configure agents with complex approval workflows and Flow integrations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We wire Agentforce Actions to Salesforce Flows for multi-step approvals, record creation, notifications, and CRM updates. If your agent needs to trigger complex business processes — not just chat — we build that integration precisely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we already have Agentforce licences but no agent built yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This engagement is designed for exactly that scenario. We start with an agent scoping workshop to define every Topic, Action, and Instruction before a single line of configuration is written, then build, test, and go live within four weeks.',
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
    { '@type': 'ListItem', position: 4, name: 'Agent Design & Configuration', item: 'https://kovil.ai/agentforce/services/agent-design-configuration' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentDesignConfigurationPage />
    </>
  )
}

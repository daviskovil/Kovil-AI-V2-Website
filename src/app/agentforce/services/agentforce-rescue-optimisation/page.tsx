import type { Metadata } from 'next'
import AgentforceRescueOptimisationPage from '@/src/pages/agentforce/services/AgentforceRescueOptimisationPage'

export const metadata: Metadata = {
  title: 'Agentforce Rescue & Optimisation | Kovil AI',
  description: 'Agentforce rescue service for failing deployments. We fix hallucinating agents, broken Trust Layer guardrails, and integration failures — measurable performance restored in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation' },
  keywords: [
    'Agentforce rescue service',
    'fix failing Agentforce agent',
    'Agentforce optimisation',
    'underperforming Agentforce',
    'Agentforce troubleshooting service',
    'Agentforce remediation',
    'Agentforce performance fix',
    'Agentforce hallucination fix',
    'Agentforce Trust Layer misconfiguration',
    'broken Agentforce deployment',
    'Agentforce diagnostic audit',
    'Salesforce AI agent repair',
    'Agentforce integration failure fix',
    'stalled Agentforce rollout',
    'Agentforce guardrail hardening',
    'Salesforce Agentforce consultant',
    'Agentforce root cause analysis',
    'underperforming Salesforce AI agent',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Rescue & Optimisation | Kovil AI',
    description: 'Agentforce rescue service for failing deployments. We fix hallucinating agents, broken Trust Layer guardrails, and integration failures — measurable performance restored in 2 weeks.',
    url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Rescue & Optimisation | Kovil AI',
    description: 'Agentforce rescue service for failing deployments. We fix hallucinating agents, broken Trust Layer guardrails, and integration failures — measurable performance restored in 2 weeks.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Rescue & Optimisation',
  description: 'Agentforce rescue service for failing deployments. We fix hallucinating agents, broken Trust Layer guardrails, and integration failures — measurable performance restored in 2 weeks.',
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
  url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation',
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
  name: 'Agentforce Rescue & Optimisation | Kovil AI',
  description: 'Agentforce rescue service for failing deployments. We fix hallucinating agents, broken Trust Layer guardrails, and integration failures — measurable performance restored in 2 weeks.',
  url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation',
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
      name: 'What does the Agentforce rescue service cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our rescue service covers a full diagnostic audit of every failing component — Topic and Action configuration, prompt Instructions, Trust Layer policy settings, integration connections, and production conversation logs. We then remediate all identified failures in a focused two-week sprint and harden guardrails to prevent recurrence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you fix a failing Agentforce deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our rescue engagement runs three weeks: Days 1–3 are a diagnostic audit with a full root cause report; Weeks 1–2 are a remediation sprint addressing all P1 failures; Week 3 covers performance benchmarking, guardrail hardening, and a handover with a 30-day monitoring playbook.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fix Agentforce agents that were built by another agency or Salesforce partner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly audit and remediate Agentforce configurations delivered by other partners. We audit every Topic, Action, and instruction set, explain exactly what is broken and why, and fix it properly — regardless of who built the original configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes Agentforce agents to hallucinate or underperform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce hallucinations typically stem from missing grounding, poorly scoped Instructions, inadequate knowledge base coverage, or Trust Layer misconfiguration. Underperformance often traces back to poorly defined Topic boundaries, inadequate Action definitions, or broken integrations that prevent the agent from accessing the data it needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide evidence of improvement after an Agentforce rescue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We benchmark resolution rate, deflection rate, escalation frequency, and CSAT impact before and after remediation — giving you clear, reportable evidence of what the rescue delivered that you can take to leadership.',
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
    { '@type': 'ListItem', position: 4, name: 'Agentforce Rescue & Optimisation', item: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforceRescueOptimisationPage />
    </>
  )
}

import type { Metadata } from 'next'
import AgentforcePage from '@/src/pages/AgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce Implementation Partner — Build & Deploy AI Agents',
  description:
    'Kovil AI is a specialist Agentforce implementation partner in New York. We design, build, and deploy Salesforce Agentforce AI agents for Sales Cloud, Service Cloud, and Marketing Cloud — in fixed-price 2-week sprints. Book a free discovery call.',
  alternates: { canonical: 'https://kovil.ai/agentforce' },
  keywords: [
    'Agentforce',
    'Salesforce Agentforce',
    'Agentforce implementation',
    'Agentforce partner',
    'Agentforce consulting',
    'what is Agentforce',
    'Agentforce deployment',
    'Agentforce New York',
    'Salesforce AI agents',
    'Agentforce Sales Cloud',
    'Agentforce Service Cloud',
    'Agentforce Marketing Cloud',
    'Agentforce 360',
    'Atlas Reasoning Engine',
    'Einstein Trust Layer',
    'MuleSoft Agentforce',
    'Agentforce SDR agent',
    'Agentforce case resolution',
    'Agentforce implementation partner',
    'agent force',
    'salesforce agent force',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Implementation Partner — Build & Deploy AI Agents | Kovil AI',
    description:
      'Kovil AI is a specialist Agentforce implementation partner in New York. Fixed-price sprints. 2-week risk-free pilot.',
    url: 'https://kovil.ai/agentforce',
    siteName: 'Kovil AI',
    images: [
      {
        url: 'https://kovil.ai/og-agentforce.png',
        width: 1200,
        height: 630,
        alt: 'Kovil AI — Salesforce Agentforce Implementation Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Implementation Partner — Build & Deploy AI Agents | Kovil AI',
    description:
      'Kovil AI is a specialist Agentforce implementation partner in New York. Fixed-price sprints. 2-week risk-free pilot.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kovil AI — Agentforce Implementation Practice',
  description:
    'Kovil AI is a specialist Salesforce Agentforce implementation partner based in New York. We design, build, and deploy autonomous AI agents for Sales Cloud, Service Cloud, Marketing Cloud, and enterprise workflows — in fixed-price sprints with a 2-week risk-free pilot.',
  url: 'https://kovil.ai/agentforce',
  logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  image: 'https://kovil.ai/og-agentforce.png',
  telephone: '+16465359141',
  email: 'info@kovil.ai',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '734 Franklin Ave',
    addressLocality: 'Garden City',
    addressRegion: 'NY',
    postalCode: '11530',
    addressCountry: 'US',
  },
  areaServed: ['New York', 'United States', 'Worldwide'],
  serviceType: 'Salesforce Agentforce Implementation',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce Strategy & Readiness', url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent Design & Configuration', url: 'https://kovil.ai/agentforce/services/agent-design-configuration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales Cloud Agent Deployment', url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Cloud Agent Deployment', url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MuleSoft & Data Cloud Integration', url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce Rescue & Optimisation', url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '23',
    bestRating: '5',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Salesforce Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce is Salesforce\'s AI agent platform, launched October 2024 and now at Agentforce 360. It lets companies build, deploy, and manage autonomous AI agents that reason, plan, and execute tasks across Sales, Service, Marketing, and Data Cloud — without human intervention. Powered by the Atlas Reasoning Engine, protected by the Einstein Trust Layer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot agent scoped to one use case typically takes 2–3 weeks from scoping to go-live. A full multi-cloud deployment with MuleSoft integrations typically runs 6–12 weeks depending on org complexity and data readiness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need a Salesforce consultant or an AI engineer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both — but most firms only bring one. Agentforce sits at the intersection of Salesforce configuration and AI engineering. You need someone who understands Topics, Actions, and Flows AND understands LLM reasoning, prompt design, and hallucination guardrails. That\'s exactly what Kovil AI provides.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Salesforce licences do we need for Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce is licensed per conversation (approximately $2/conversation as of 2025) with volume discounts. Some capabilities require Data Cloud and Einstein licences. We provide a licence audit as part of our scoping engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce connect to non-Salesforce systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Via MuleSoft API connectors, HTTP callouts, or MCP server integrations. Agentforce 3 added native MCP support for Google Cloud, Stripe, PayPal, and more. We handle all integration architecture as part of our builds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure our data stays secure with Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce includes the Einstein Trust Layer — preventing prompt injection, filtering sensitive outputs, auditing every agent action, and ensuring data never leaves your Salesforce trust boundary for AI processing. We configure all guardrails as standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Kovil AI risk-free Agentforce pilot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We scope a single high-impact use case, build and deploy in 2 weeks, and define clear success metrics upfront. If the pilot doesn\'t hit agreed metrics, you don\'t pay. Over 90% of our pilots convert to full engagements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Kovil AI different from a traditional Salesforce SI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional SIs are generalists. We are an AI engineering firm specialising exclusively in agentic AI. Every build team member understands both the Salesforce platform and the AI layer underneath.',
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
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Implementation Partner — Build & Deploy AI Agents | Kovil AI',
  description: 'Kovil AI is a specialist Agentforce implementation partner in New York. We design, build, and deploy Salesforce Agentforce AI agents for Sales Cloud, Service Cloud, and Marketing Cloud — in fixed-price 2-week sprints.',
  url: 'https://kovil.ai/agentforce',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <AgentforcePage />
    </>
  )
}

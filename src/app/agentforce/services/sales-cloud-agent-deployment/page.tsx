import type { Metadata } from 'next'
import SalesCloudAgentDeploymentPage from '@/src/pages/agentforce/services/SalesCloudAgentDeploymentPage'

export const metadata: Metadata = {
  title: 'Sales Cloud Agent Deployment',
  description: 'Agentforce Sales Cloud deployment service. Deploy AI SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment' },
  keywords: [
    'Agentforce Sales Cloud deployment',
    'Salesforce Sales Cloud AI agent implementation',
    'deploy Agentforce Sales Cloud',
    'Agentforce sales automation deployment',
    'Sales Cloud Agentforce partner',
    'Agentforce SDR agent deployment',
    'Salesforce AI lead qualification agent',
    'Agentforce autonomous sales agent',
    'Salesforce Sales Cloud AI implementation',
    'Agentforce inbound lead qualification',
    'Agentforce meeting booking automation',
    'Salesforce SDR automation Agentforce',
    'Agentforce objection handling agent',
    'Sales Cloud AI agent build service',
    'Agentforce pipeline automation',
    'Salesforce AI sales development representative',
    'Agentforce CRM integration sales',
    'Salesforce Agentforce sales partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Sales Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce Sales Cloud deployment service. Deploy AI SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously.',
    url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce Sales Cloud deployment service. Deploy AI SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sales Cloud Agent Deployment',
  description: 'Agentforce Sales Cloud deployment service. Deploy AI SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously.',
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
  url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment',
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
  name: 'Sales Cloud Agent Deployment | Kovil AI',
  description: 'Agentforce Sales Cloud deployment service. Deploy AI SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously.',
  url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment',
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
      name: 'What does an Agentforce Sales Cloud SDR agent actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Agentforce SDR agent engages inbound leads, qualifies them against your ICP criteria in real time, handles common objections using approved messaging, drafts personalised follow-up emails grounded in CRM data, and books discovery calls directly in your calendar system — all without rep involvement from first touch to confirmed meeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy an Agentforce Sales Cloud agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our deployment runs four weeks: Week 1 covers SDR agent scoping — lead qualification criteria, objection library, CRM field mapping; Weeks 2–3 cover the Agent Builder build, Sales Cloud CRM integration, and outreach template creation; Week 4 is a supervised pilot on real inbound leads with conversion metrics benchmarked before scaling to full volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Agentforce SDR agent integrate with our existing Sales Cloud CRM records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The agent is built natively inside Agent Builder and wired directly to your Sales Cloud CRM records, lead scoring models, and calendar booking system. Lead qualification data, conversation history, and agent actions are all written back to CRM automatically — no separate system required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a lead asks something the SDR agent cannot handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complex objections and edge cases are escalated to a human rep with full conversation context — the rep picks up exactly where the agent left off, with qualification data, objection history, and lead context already captured. The escalation threshold is configurable based on your team\'s preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can an Agentforce SDR agent reduce our sales team\'s workload?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically see reps freed from first touch qualification, follow-up sequencing, data entry, and CRM updates after calls — tasks that consume 40–60% of SDR time. The agent handles volume and routine work; your reps focus exclusively on high-value conversations. Organisations with high inbound volume have scaled outreach capacity 3–5x without adding headcount.',
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
    { '@type': 'ListItem', position: 4, name: 'Sales Cloud Agent Deployment', item: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SalesCloudAgentDeploymentPage />
    </>
  )
}

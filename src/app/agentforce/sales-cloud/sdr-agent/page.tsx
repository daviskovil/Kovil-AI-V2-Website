import type { Metadata } from 'next'
import SDRAgentPage from '@/src/pages/agentforce/sales-cloud/SDRAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach',
  description: 'Deploy an Agentforce SDR agent that qualifies inbound leads, sends AI-personalised outreach, handles objections, and books meetings autonomously 24/7 inside Salesforce Sales Cloud.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent' },
  keywords: [
    'Agentforce SDR agent',
    'Salesforce AI SDR',
    'autonomous lead qualification Agentforce',
    'Agentforce Sales Cloud',
    'Salesforce AI outreach',
    'Agentforce lead qualification',
    'Salesforce SDR automation',
    'AI lead qualification agent',
    'Agentforce implementation',
    'Salesforce autonomous outreach',
    'Agentforce outreach automation',
    'Einstein lead scoring Agentforce',
    'Salesforce AI sales agent',
    'lead qualification automation Salesforce',
    'Kovil AI Agentforce',
    'Agentforce BANT qualification',
    'Salesforce meeting booking AI',
    'AI SDR Salesforce Sales Cloud',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach | Kovil AI',
    description: 'Deploy an Agentforce SDR agent that qualifies inbound leads, sends AI-personalised outreach, handles objections, and books meetings autonomously 24/7 inside Salesforce Sales Cloud.',
    url: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach | Kovil AI',
    description: 'Deploy an Agentforce SDR agent that qualifies inbound leads, sends AI-personalised outreach, handles objections, and books meetings autonomously 24/7 inside Salesforce Sales Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach',
  description: 'Deploy an Agentforce SDR agent that qualifies inbound leads, sends AI-personalised outreach, handles objections, and books meetings autonomously 24/7 inside Salesforce Sales Cloud.',
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
  url: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Sales Cloud',
    url: 'https://kovil.ai/agentforce/sales-cloud',
  },
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price 3-week sprint with 2-week risk-free pilot',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach | Kovil AI',
  description: 'Deploy an Agentforce SDR agent that qualifies inbound leads, sends AI-personalised outreach, handles objections, and books meetings autonomously 24/7 inside Salesforce Sales Cloud.',
  url: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent',
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
      name: 'How does the SDR agent handle objections?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The agent detects objection signals in lead responses (declining meeting, asking for more info, pricing questions) and routes to a configured objection handling sequence. For each objection type, the agent delivers relevant content: case studies for 'we already have a solution', ROI data for 'budget concerns', implementation timeline for 'not the right time'. After delivering the response, the agent waits a configured cooling period (typically 5–7 days) before re-attempting to book. All objection handling is logged to the Lead record.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does it work with our existing Salesforce org setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We configure the SDR agent within your existing Salesforce org — no migration or new instance required. We work with your current Lead fields, custom objects, territory rules, and pipeline stages. The org audit in Week 1 identifies any data quality issues that would affect agent performance and resolves them before the agent goes live.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from Pardot/Marketing Cloud email automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email automation sends fixed sequences to segments. The Agentforce SDR agent reasons about each lead individually — it adapts based on ICP fit score, engagement signals, lead responses, and objection content. It can have a two-way conversation with a lead, route to the right rep based on real-time calendar availability, and make qualification decisions. It is not a sequence. It is an agent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Einstein Trust Layer do in this context?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It ensures that when Prompt Builder generates outreach emails, no PII from the lead record is sent externally to an LLM. Data stays within the Salesforce trust boundary. It also prevents prompt injection (a lead cannot manipulate the agent by including instructions in their email), masks sensitive fields from appearing in AI context, and logs every single agent action for GDPR and compliance audit purposes.',
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
    { '@type': 'ListItem', position: 3, name: 'Sales Cloud', item: 'https://kovil.ai/agentforce/sales-cloud' },
    { '@type': 'ListItem', position: 4, name: 'SDR Agent', item: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SDRAgentPage />
    </>
  )
}

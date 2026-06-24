import type { Metadata } from 'next'
import ServiceCloudAgentDeploymentPage from '@/src/pages/agentforce/services/ServiceCloudAgentDeploymentPage'

export const metadata: Metadata = {
  title: 'Service Cloud Agent Deployment | Kovil AI',
  description: 'Agentforce Service Cloud deployment service. Deploy AI agents that autonomously resolve L1 and L2 support cases — refunds, troubleshooting, order status — with CSAT safeguards built in.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment' },
  keywords: [
    'Agentforce Service Cloud deployment',
    'Salesforce Service Cloud AI implementation',
    'deploy Agentforce Service Cloud',
    'Agentforce service automation deployment',
    'Service Cloud Agentforce partner',
    'Agentforce autonomous case resolution',
    'Salesforce AI customer service agent',
    'Agentforce L1 L2 case deflection',
    'Service Cloud AI agent build',
    'Agentforce CSAT preservation',
    'Salesforce Service Cloud AI deployment',
    'Agentforce support case automation',
    'Salesforce knowledge base Agentforce integration',
    'Agentforce sentiment escalation',
    'Salesforce AI support implementation',
    'Agentforce order refund automation',
    'Service Cloud Agentforce implementation',
    'Salesforce AI case deflection service',
  ],
  openGraph: {
    type: 'website',
    title: 'Service Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce Service Cloud deployment service. Deploy AI agents that autonomously resolve L1 and L2 support cases — refunds, troubleshooting, order status — with CSAT safeguards built in.',
    url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce Service Cloud deployment service. Deploy AI agents that autonomously resolve L1 and L2 support cases — refunds, troubleshooting, order status — with CSAT safeguards built in.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Cloud Agent Deployment',
  description: 'Agentforce Service Cloud deployment service. Deploy AI agents that autonomously resolve L1 and L2 support cases — refunds, troubleshooting, order status — with CSAT safeguards built in.',
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
  url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment',
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
  name: 'Service Cloud Agent Deployment | Kovil AI',
  description: 'Agentforce Service Cloud deployment service. Deploy AI agents that autonomously resolve L1 and L2 support cases — refunds, troubleshooting, order status — with CSAT safeguards built in.',
  url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment',
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
      name: 'What types of support cases can an Agentforce Service Cloud agent resolve autonomously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L1 and L2 cases are the primary target — refunds, order status lookups, delivery queries, rescheduling requests, password resets, and troubleshooting using Knowledge Base articles. These are handled end-to-end by the agent 24 hours a day without human involvement, using live Order Management and CRM data for accurate, contextual responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Agentforce service agent know when to escalate to a human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure sentiment-based escalation logic that detects when a customer\'s frustration exceeds a defined threshold and escalates to a human agent with full conversation context before the situation deteriorates. We also configure SLA monitoring so cases approaching breach are automatically escalated, and fallback topics handle any case type outside the agent\'s defined scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy an Agentforce Service Cloud agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our deployment runs four weeks: Week 1 covers case flow mapping — analysing top case categories, resolution workflows, and escalation triggers; Weeks 2–3 cover the agent build with Knowledge Base integration, Order Management grounding, and sentiment logic; Week 4 is a supervised go-live with real customer cases, CSAT monitoring, and live tuning before full handover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will Agentforce agents produce inaccurate answers from our Knowledge Base?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — agent responses are grounded directly in your approved Salesforce Knowledge Base articles. The Einstein Trust Layer prevents improvised or hallucinated answers. Agents can only respond based on what is documented in your knowledge base, ensuring accuracy and compliance with your approved support procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What auto-resolution rate can we expect from an Agentforce Service Cloud deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most organisations targeting 60%+ auto-resolution rates are achievable with a well-configured Agentforce Service Cloud deployment, depending on case mix and knowledge base quality. We benchmark resolution rate, deflection rate, escalation frequency, and CSAT impact before and after go-live — so you have clear, measurable evidence of what the deployment delivered.',
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
    { '@type': 'ListItem', position: 4, name: 'Service Cloud Agent Deployment', item: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServiceCloudAgentDeploymentPage />
    </>
  )
}

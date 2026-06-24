import type { Metadata } from 'next'
import AutonomousCaseResolutionPage from '@/src/pages/agentforce/service-cloud/AutonomousCaseResolutionPage'

export const metadata: Metadata = {
  title: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
  description: 'Agentforce case resolution agent that autonomously handles Tier 1 & Tier 2 support — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution' },
  keywords: [
    'Agentforce case resolution',
    'Salesforce Service Cloud AI agent',
    'Agentforce autonomous support',
    'AI case deflection Salesforce',
    'Agentforce L1 support',
    'Salesforce Agentforce implementation',
    'Agentforce autonomous case handling',
    'Salesforce AI customer service',
    'Agentforce Service Cloud',
    'Salesforce case automation',
    'Einstein case classification',
    'Atlas reasoning engine',
    'Salesforce OmniChannel routing',
    'AI support ticket resolution',
    'Agentforce partner UK',
    'Salesforce AI agent builder',
    'automated case resolution Salesforce',
    'Agentforce L2 support automation',
    'Service Cloud AI automation',
    'Kovil AI Agentforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
    description: 'Agentforce case resolution agent that autonomously handles Tier 1 & Tier 2 support — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
    url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Autonomous Case Resolution — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
    description: 'Agentforce case resolution agent that autonomously handles Tier 1 & Tier 2 support — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support',
  description: 'Agentforce case resolution agent that autonomously handles Tier 1 & Tier 2 support — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
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
  url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Service Cloud',
    url: 'https://kovil.ai/agentforce/service-cloud',
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
  description: 'Agentforce case resolution agent that autonomously handles Tier 1 & Tier 2 support — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
  url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution',
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
      name: 'What case types can the agent resolve autonomously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The resolution library is configured during implementation based on your specific service operations. Common autonomous resolutions include: order status checks, refund processing (within configured thresholds), appointment and delivery rescheduling, account field updates (address, contact info, preferences), password and credential resets, subscription changes, and standard troubleshooting for your top 20 issue types. Cases requiring genuine human judgement — complex complaints, exceptions outside policy, legal or compliance-sensitive requests — are always escalated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical autonomous resolution rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our clients typically achieve 55–75% autonomous resolution rates within 8 weeks of deployment, depending on the breadth of the resolution action library configured. The rate improves over time as the knowledge base is updated and edge cases are added to the agent\'s action library. We measure resolution rate, CSAT score, and escalation reasons as part of standard post-launch reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the agent handle frustrated or upset customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einstein Case Classification includes sentiment detection. Cases flagged as high-frustration trigger a modified resolution path: the agent acknowledges the frustration explicitly before attempting resolution, uses a more empathetic tone in all responses, and has a lower escalation threshold (it escalates sooner rather than attempting multiple autonomous resolution steps). Very high frustration scores can be configured to trigger immediate human escalation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this replace our human support team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It handles the high-volume, repetitive L1 and L2 cases that consume the majority of your team\'s time. Your human agents handle the genuinely complex cases — complaints, exceptions, VIP accounts, strategic situations — fully briefed by the AI. Most clients find this increases human agent satisfaction because they spend their time on meaningful work rather than answering the same questions repeatedly.',
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
    { '@type': 'ListItem', position: 3, name: 'Service Cloud', item: 'https://kovil.ai/agentforce/service-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Autonomous Case Resolution', item: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AutonomousCaseResolutionPage />
    </>
  )
}

import type { Metadata } from 'next'
import ServiceCloudHubPage from '@/src/pages/agentforce/service-cloud/ServiceCloudHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Customer Service — Service Cloud AI Agents | Kovil AI',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution (68%+ deflection), intelligent escalation with full context, and self-updating knowledge base agents. Fixed-price 2–3 week sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud' },
  keywords: [
    'agentforce service cloud',
    'agentforce customer service',
    'agentforce case resolution',
    'agentforce autonomous resolution',
    'salesforce agentforce service cloud',
    'agentforce case deflection',
    'agentforce intelligent escalation',
    'agentforce knowledge base agent',
    'service cloud agent deployment',
    'agentforce service agent',
    'agentforce L1 L2 support',
    'salesforce AI customer service',
    'agentforce CSAT',
    'agentforce omnichannel routing',
    'agentforce sentiment escalation',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Customer Service — Service Cloud AI Agents | Kovil AI',
    description: 'Autonomous case resolution, intelligent escalation, and knowledge base agents — deployed in Service Cloud with 65%+ deflection rates.',
    url: 'https://kovil.ai/agentforce/service-cloud',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Customer Service — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Service Cloud AI Agents | Kovil AI',
    description: 'Autonomous case resolution, intelligent escalation, and knowledge base agents — deployed in Service Cloud with 65%+ deflection rates.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Customer Service — Service Cloud Implementation',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution agents that deflect 65%+ of Tier 1 and Tier 2 cases, intelligent escalation with full context pre-loading, and self-updating knowledge base agents.',
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
  },
  serviceType: 'Salesforce Agentforce Service Cloud Implementation',
  url: 'https://kovil.ai/agentforce/service-cloud',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Service Cloud Agents',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autonomous Case Resolution Agent',
          description: 'Handles Tier 1 and Tier 2 support cases autonomously — refunds, order status, rescheduling — with 65%+ resolution rates and live Salesforce account context.',
          url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intelligent Escalation Agent',
          description: 'Detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full AI context brief pre-loaded.',
          url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Knowledge Base Agent',
          description: 'Detects resolution gaps, drafts new Knowledge Base articles, and updates stale articles automatically — keeping your KB accurate.',
          url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent',
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
      name: 'What does Agentforce do for customer service teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce deploys autonomous AI agents inside Salesforce Service Cloud that handle Tier 1 and Tier 2 support cases — refunds, order status, rescheduling, troubleshooting — without human involvement. The agent operates 24/7, logs every action to the case record, and routes to human agents only when complexity, sentiment, or SLA risk demands it. Production deployments typically achieve 55–75% autonomous resolution within 8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical Agentforce Service Cloud case deflection rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Production Agentforce Service Cloud deployments typically achieve 55–75% autonomous resolution rates within 8 weeks of go-live, depending on the breadth of the resolution action library and the quality of the knowledge base. The rate improves continuously as the knowledge base is updated and edge cases are added to the agent\'s action library.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle frustrated or upset customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einstein Case Classification includes sentiment detection. Cases flagged high-frustration trigger a modified path: the agent acknowledges the frustration before attempting resolution, uses a more empathetic tone, and has a lower escalation threshold. Very high frustration scores trigger immediate human escalation. This protects CSAT across the entire deflected case volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce Service Cloud replace human agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — it handles the high-volume, repetitive L1/L2 cases that consume most of your team\'s time. Human agents handle genuinely complex cases, VIP accounts, and strategic situations — fully briefed by the AI on what was attempted before escalation. Most clients see human agent satisfaction increase because they spend their time on meaningful work rather than answering the same queries repeatedly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Agentforce Service Cloud implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot targeting one use case — autonomous case resolution — typically takes 2–3 weeks from scoping to production. A full multi-agent Service Cloud deployment covering autonomous resolution, intelligent escalation, and knowledge base automation typically runs 6–8 weeks. Kovil AI operates fixed-price only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of Agentforce for customer service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROI is driven by resolution cost reduction — autonomous resolution eliminates agent handling time for the case types covered — and response time improvement. At 65% deflection on a team handling 5,000 cases/month at $12 average handling cost, gross saving is $46,800/month before licence cost. Typical net ROI positive in 12–18 months.',
      },
    },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Customer Service — Service Cloud',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution, intelligent escalation, and knowledge base agents.',
  url: 'https://kovil.ai/agentforce/service-cloud',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  hasPart: [
    { '@type': 'WebPage', name: 'Autonomous Case Resolution', url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution' },
    { '@type': 'WebPage', name: 'Intelligent Escalation', url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation' },
    { '@type': 'WebPage', name: 'Knowledge Base Agent', url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Service Cloud', item: 'https://kovil.ai/agentforce/service-cloud' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Customer Service — Service Cloud AI Agents | Kovil AI',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution, intelligent escalation, and knowledge base agents with 65%+ deflection rates.',
  url: 'https://kovil.ai/agentforce/service-cloud',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ServiceCloudHubPage />
    </>
  )
}

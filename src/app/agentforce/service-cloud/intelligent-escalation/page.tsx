import type { Metadata } from 'next'
import IntelligentEscalationPage from '@/src/pages/agentforce/service-cloud/IntelligentEscalationPage'

export const metadata: Metadata = {
  title: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading',
  description: 'Agentforce escalation agent that detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full context pre-loaded and zero re-explanation needed.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation' },
  keywords: [
    'Agentforce escalation routing',
    'Salesforce AI case routing',
    'Agentforce intelligent escalation',
    'Service Cloud AI escalation agent',
    'Salesforce case routing AI',
    'Agentforce escalation automation',
    'Salesforce OmniChannel intelligent routing',
    'Agentforce SLA breach detection',
    'Salesforce Service Cloud AI agent',
    'Agentforce context pre-loading',
    'Atlas reasoning engine escalation',
    'Einstein case classification routing',
    'Salesforce skill-based routing AI',
    'Agentforce sentiment-based routing',
    'Salesforce AI handle time reduction',
    'Agentforce case triage automation',
    'Service Cloud escalation AI',
    'Salesforce Agentforce implementation',
    'Kovil AI Agentforce',
    'Agentforce partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading | Kovil AI',
    description: 'Agentforce escalation agent that detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full context pre-loaded and zero re-explanation needed.',
    url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading | Kovil AI',
    description: 'Agentforce escalation agent that detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full context pre-loaded and zero re-explanation needed.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading',
  description: 'Agentforce escalation agent that detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full context pre-loaded and zero re-explanation needed.',
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
  url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation',
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
  name: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading | Kovil AI',
  description: 'Agentforce escalation agent that detects complexity, SLA risk, and sentiment — routing every case to the right human agent with full context pre-loaded and zero re-explanation needed.',
  url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation',
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
      name: 'How does it know which agent to route to?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OmniChannel routing uses skill tags configured on each agent profile. During implementation, we work with you to define your skill taxonomy (product areas, languages, customer tiers, specialist certifications) and tag your agents accordingly. The routing engine then matches case requirements to agent skills, filtered by current availability and queue load. Account ownership routing (routing to the pod that owns the account) can also be configured.',
      },
    },
    {
      '@type': 'Question',
      name: "Can it handle re-routing if the first agent can't resolve the case?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Re-escalation triggers a new routing decision with updated context — the complexity score increases (it is now a case that failed first-contact resolution), the sentiment score is re-evaluated, and the new AI context brief includes what the first agent attempted and why it did not resolve. The second agent receives a fully updated brief, not a cold case.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does SLA reprioritisation work in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The agent continuously monitors all open cases against their SLA timers. When a case reaches 75% of its SLA window without resolution, it is automatically elevated in the queue. At 90%, a Slack alert fires to the team lead. At 100% (breach), a manager alert fires. These thresholds are configurable. The queue reprioritisation happens in real time — agents see their queue re-sort as SLA risk changes throughout the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the AI context brief replace the agent reading the case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The brief supplements, not replaces. The agent still has access to the full case record. The brief gives them a 3-sentence head start — what the customer needs, what was tried, what to do next — so they spend 30 seconds getting oriented rather than 5 minutes reading through case history. This is where the 40% handle time reduction comes from.',
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
    { '@type': 'ListItem', position: 4, name: 'Intelligent Escalation', item: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <IntelligentEscalationPage />
    </>
  )
}

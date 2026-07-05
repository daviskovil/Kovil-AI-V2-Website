import type { Metadata } from 'next'
import CampaignExecutionAgentPage from '@/src/pages/agentforce/marketing-cloud/CampaignExecutionAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation',
  description: 'Deploy an Agentforce Campaign Execution Agent that monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent' },
  keywords: [
    'Agentforce campaign execution agent',
    'Agentforce Marketing Cloud agent',
    'Salesforce AI campaign optimisation',
    'Marketing Cloud AI automation',
    'Salesforce autonomous campaign agent',
    'Agentforce campaign management',
    'Salesforce Agentforce implementation',
    'Marketing Cloud journey optimisation',
    'Einstein engagement scoring',
    'Salesforce campaign performance monitoring',
    'AI campaign management Salesforce',
    'Agentforce autonomous optimisation',
    'Marketing Cloud real-time campaign',
    'Salesforce Atlas reasoning engine',
    'Kovil AI Agentforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation | Kovil AI',
    description: 'Deploy an Agentforce Campaign Execution Agent that monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation | Kovil AI',
    description: 'Deploy an Agentforce Campaign Execution Agent that monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation',
  description: 'Deploy an Agentforce Campaign Execution Agent that monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
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
  url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Marketing Cloud',
    url: 'https://kovil.ai/agentforce/marketing-cloud',
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation | Kovil AI',
  description: 'Deploy an Agentforce Campaign Execution Agent that monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
  url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent',
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
      name: 'What actions can the agent take autonomously vs what requires human approval?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Autonomous actions (within your configured parameters): segment suppression of cold contacts, send time shifts within a configured window, diversion of fatigue signals to re-engagement journeys, and suppression of unsubscribe-intent contacts from primary sends. Human approval required: pausing an active journey (the agent pauses and alerts, not resumes), changing campaign content, modifying the core audience definition, and any budget reallocation. The boundary between autonomous and human-approval actions is configured during implementation and can be adjusted.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does it protect our deliverability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three mechanisms: journey fatigue prediction (suppressing contacts approaching their tolerance threshold before they unsubscribe), unsubscribe intent detection (suppressing contacts showing pre-unsubscribe engagement patterns), and immediate journey pause on deliverability risk signals (sudden spike in spam complaints, bounce rate increase). These are the three most common causes of deliverability degradation — all three are monitored continuously.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it work across multiple brands or campaign types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The agent can be configured with separate benchmark thresholds and optimisation rules per brand, campaign type (transactional vs promotional vs nurture), and audience tier. Enterprise clients typically configure separate rule sets for different product lines or regional audiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the daily summary actually look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Slack message with: total campaigns active, campaigns performing above benchmark (with the top insight), campaigns optimised overnight (with what changed), and any campaigns paused (with reason). It takes 60 seconds to read and gives your team full situational awareness before their morning standup. The weekly summary adds trend lines — whether overall campaign health is improving or declining across the portfolio.",
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
    { '@type': 'ListItem', position: 3, name: 'Marketing Cloud', item: 'https://kovil.ai/agentforce/marketing-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Campaign Execution Agent', item: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <CampaignExecutionAgentPage />
    </>
  )
}

import type { Metadata } from 'next'
import LeadNurtureAgentPage from '@/src/pages/agentforce/marketing-cloud/LeadNurtureAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences | Kovil AI',
  description: 'Deploy an Agentforce Lead Nurture Agent that adapts every lead\'s journey in real time using engagement signals, intent data, and CRM history — with an intent-gated sales handoff.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent' },
  keywords: [
    'Agentforce lead nurture agent',
    'Salesforce AI nurture sequences',
    'Agentforce personalised nurturing',
    'Marketing Cloud lead nurture AI',
    'Salesforce AI lead engagement',
    'Agentforce nurture automation',
    'Salesforce Agentforce implementation',
    'Marketing Cloud AI personalisation',
    'Einstein lead scoring Agentforce',
    'Salesforce intent-gated sales handoff',
    'AI lead nurturing Salesforce',
    'Agentforce content selection',
    'Marketing Cloud journey adaptation',
    'Salesforce Atlas reasoning nurture',
    'Kovil AI Agentforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences | Kovil AI',
    description: 'Deploy an Agentforce Lead Nurture Agent that adapts every lead\'s journey in real time using engagement signals, intent data, and CRM history — with an intent-gated sales handoff.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences | Kovil AI',
    description: 'Deploy an Agentforce Lead Nurture Agent that adapts every lead\'s journey in real time using engagement signals, intent data, and CRM history — with an intent-gated sales handoff.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences',
  description: "Deploy an Agentforce Lead Nurture Agent that adapts every lead's journey in real time using engagement signals, intent data, and CRM history — with an intent-gated sales handoff.",
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is this different from a standard Marketing Cloud Journey Builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Journey Builder runs a fixed sequence — every contact goes through the same steps in the same order, with branches only at pre-defined decision points. The Lead Nurture Agent adapts the journey for each individual based on their real-time behaviour. It selects which content to send next based on what the lead engaged with last. It accelerates leads who are showing high intent. It pauses leads who are going cold. It personalises the email copy for each send. Journey Builder is a fixed script. The agent is a responsive system.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the sales readiness gate work in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The gate requires a configured combination of signals: intent score above your threshold (based on Einstein Lead Scoring), engagement with at least one decision-stage content piece (pricing page, demo request, case study), activity within the last X days (recency signal), and ICP fit meeting minimum threshold. When all conditions are met simultaneously, the handoff triggers automatically. You set the thresholds during implementation. Most clients find that reducing premature handoffs significantly improves their sales team's trust in marketing-qualified leads.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle different nurture tracks for different products or verticals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The content selection logic and personalisation templates are configured per vertical and product line. A lead interested in Product A in the financial services vertical receives different content than a lead interested in Product B in healthcare. The agent identifies the relevant track from the lead's engagement signals and firmographic data, and runs the appropriate content selection logic for that track.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to leads that never reach the sales readiness gate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leads that complete the full nurture sequence without reaching the readiness gate are moved to a long-term low-frequency drip — typically 1 touchpoint per month with relevant thought leadership content. This keeps them warm without driving deliverability cost. Leads that show no engagement over an extended period are moved to archived status and excluded from all sends. This is better for deliverability than keeping cold contacts in active sequences.',
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
    { '@type': 'ListItem', position: 4, name: 'Lead Nurture Agent', item: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadNurtureAgentPage />
    </>
  )
}

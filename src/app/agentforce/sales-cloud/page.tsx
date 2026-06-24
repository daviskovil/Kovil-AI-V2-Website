import type { Metadata } from 'next'
import SalesCloudHubPage from '@/src/pages/agentforce/sales-cloud/SalesCloudHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Sales Teams — SDR Agents, Pipeline Monitoring & Quote Automation | Kovil AI',
  description:
    'Production Agentforce Sales Cloud deployments — SDR agents that qualify leads in 9 minutes, pipeline health monitors, and quote automation. Fixed-price 2–3 week sprints. Salesforce Agentforce implementation partner.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud' },
  keywords: [
    'agentforce for sales',
    'agentforce sales cloud',
    'agentforce sdr agent',
    'agentforce sales automation',
    'agentforce lead qualification',
    'agentforce pipeline management',
    'agentforce quote automation',
    'salesforce agentforce sales',
    'agentforce sales team',
    'agentforce revenue cloud',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Sales Teams — SDR Agents, Pipeline Monitoring & Quote Automation | Kovil AI',
    description:
      'Production Agentforce Sales Cloud deployments — SDR agents that qualify leads in 9 minutes, pipeline health monitors, and quote automation. Fixed-price 2–3 week sprints.',
    url: 'https://kovil.ai/agentforce/sales-cloud',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Sales Teams | Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Sales Teams — SDR Agents, Pipeline Monitoring & Quote Automation | Kovil AI',
    description:
      'Production Agentforce Sales Cloud deployments — SDR agents that qualify leads in 9 minutes, pipeline health monitors, and quote automation.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Sales Teams — Sales Cloud Implementation',
  description:
    'Production Agentforce Sales Cloud deployments — SDR agents that qualify leads in 9 minutes, pipeline health monitors that never let deals go cold, and quote agents that compress multi-day quote cycles to hours.',
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: '734 Franklin Ave',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
  },
  serviceType: 'Salesforce Agentforce Sales Cloud Implementation',
  url: 'https://kovil.ai/agentforce/sales-cloud',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Sales Cloud Agents',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentforce SDR Agent',
          description:
            'Qualifies inbound leads, sends personalised outreach, handles objections, and books discovery calls — 24/7, without human SDR touch for standard leads.',
          url: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pipeline Health Monitor',
          description:
            'Monitors every deal in your pipeline for stall signals, auto-drafts follow-up sequences, updates opportunity stages, and alerts reps to risk before it is too late.',
          url: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Quote & Proposal Agent',
          description:
            'Pulls product and pricing data from Revenue Cloud/CPQ, drafts quotes, routes for approval, and sends to prospects — compressing multi-day quote cycles to hours.',
          url: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent',
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
      name: 'What does Agentforce do for sales teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce deploys autonomous AI agents inside Salesforce Sales Cloud that handle the repeatable, high-volume tasks consuming SDR and AE time: lead qualification, outreach sequencing, pipeline monitoring, follow-up drafting, and quote preparation. The agent operates 24/7, logs every action to the CRM, and routes to human reps only when the situation requires human judgement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce qualify leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Agentforce SDR agent runs qualification logic configured to your framework (BANT, MEDDIC, or a custom model). When a new Lead record is created, the agent reads the lead data, runs Einstein Lead Scoring against your ICP criteria, and makes a qualification decision. Qualified leads proceed to AI-drafted outreach. Below-threshold leads are flagged for ops review. The qualification reasoning trace is logged to the Lead record.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce write sales emails?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Salesforce Prompt Builder generates outreach emails grounded in live CRM data — the lead\'s company, their engagement history, your product\'s relevant value proposition for their industry. Every email is dynamically authored, not a template with variable substitution. The Einstein Trust Layer ensures no PII is sent externally and every draft meets your approved messaging guidelines before sending.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce integrate with Revenue Cloud / CPQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Quote & Proposal Agent is built with native Revenue Cloud and CPQ integration. The agent queries your product catalogue and configured pricing rules, applies discount tiers, generates the quote document, routes it through your approval process, and sends it to the prospect — all within Salesforce.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Agentforce Sales Cloud implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused single-use-case pilot (one agent — SDR, Pipeline Monitor, or Quote Agent) takes 2–3 weeks from scoping to production go-live. A full multi-agent Sales Cloud deployment covering all three use cases runs 6–8 weeks. Kovil AI operates fixed-price only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of Agentforce for sales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Production deployments show: lead response time dropping from 4 days to 9 minutes, qualified pipeline increasing 34%, and SDR productivity increasing 3.2× per rep. ROI comes from both revenue uplift (more qualified pipeline, faster close cycles) and productivity gain (SDRs freed from manual qualification and follow-up).',
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
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Sales Teams — SDR Agents, Pipeline Monitoring & Quote Automation | Kovil AI',
  description:
    'Production Agentforce Sales Cloud deployments — SDR agents, pipeline health monitors, and quote automation. Fixed-price 2–3 week sprints.',
  url: 'https://kovil.ai/agentforce/sales-cloud',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SalesCloudHubPage />
    </>
  )
}

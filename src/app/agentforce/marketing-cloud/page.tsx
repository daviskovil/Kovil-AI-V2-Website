import type { Metadata } from 'next'
import MarketingCloudHubPage from '@/src/pages/agentforce/marketing-cloud/MarketingCloudHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Marketing Teams — Marketing Cloud AI Agents | Kovil AI',
  description: 'Production Agentforce Marketing Cloud deployments — campaign execution agents, personalised lead nurture sequences, and end-to-end event automation. Fixed-price 2–3 week sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud' },
  keywords: [
    'agentforce marketing cloud',
    'agentforce marketing automation',
    'agentforce campaign agent',
    'agentforce lead nurture',
    'salesforce agentforce marketing',
    'agentforce journey optimisation',
    'agentforce event automation',
    'marketing cloud agent deployment',
    'agentforce marketing agent',
    'salesforce marketing AI',
    'agentforce campaign execution',
    'agentforce deliverability protection',
    'agentforce lead scoring marketing',
    'salesforce marketing cloud agentforce',
    'agentforce email personalisation',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Marketing Teams — Marketing Cloud AI Agents | Kovil AI',
    description: 'Campaign execution agents, personalised lead nurture, and event automation — deployed in Marketing Cloud.',
    url: 'https://kovil.ai/agentforce/marketing-cloud',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Marketing Teams — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Marketing Cloud AI Agents | Kovil AI',
    description: 'Campaign execution agents, personalised lead nurture, and event automation — deployed in Marketing Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Marketing Teams — Marketing Cloud Implementation',
  description: 'Production Agentforce Marketing Cloud deployments — autonomous campaign execution agents, personalised lead nurture sequences, and end-to-end event and webinar automation.',
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
  serviceType: 'Salesforce Agentforce Marketing Cloud Implementation',
  url: 'https://kovil.ai/agentforce/marketing-cloud',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Marketing Cloud Agents',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campaign Execution Agent',
          description: 'Monitors Marketing Cloud campaigns 24/7, adjusts segment targeting, pauses underperforming journeys, and reallocates budget autonomously.',
          url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lead Nurture Agent',
          description: 'Builds and adapts personalised lead nurture sequences grounded in real-time CRM data, engagement scoring, and intent signals.',
          url: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event & Webinar Agent',
          description: 'Automates end-to-end event and webinar operations — invitations, reminders, attendance tracking, and post-event follow-up sequences.',
          url: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent',
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
      name: 'What does Agentforce do for marketing teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce deploys autonomous AI agents inside Salesforce Marketing Cloud that handle campaign execution, lead nurture personalisation, and event operations — without manual marketing team intervention. The campaign execution agent monitors journeys 24/7, suppresses fatigue signals, and adjusts send times. The lead nurture agent builds personalised sequences grounded in real-time CRM engagement data. All agents log every action to Marketing Cloud for full audit visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce protect email deliverability in Marketing Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The campaign execution agent monitors three leading indicators of deliverability degradation: journey fatigue signals (contacts approaching tolerance threshold), unsubscribe intent patterns (pre-unsubscribe engagement behaviour), and sudden bounce/spam complaint spikes. It suppresses affected contacts and pauses at-risk journeys before deliverability damage occurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce personalise lead nurture sequences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lead nurture agent uses Salesforce Prompt Builder to generate email content grounded in live CRM data — the lead\'s company, engagement history, product interest signals, and ICP fit score. This produces dynamically authored messages rather than template substitution. Sequences adapt based on engagement: high-engagement leads receive accelerated sequences; disengaged leads shift to re-engagement tracks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Agentforce Marketing Cloud implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot targeting one use case — campaign execution optimisation or lead nurture personalisation — typically takes 2–3 weeks from scoping to production. A full multi-agent Marketing Cloud deployment covering all three use cases typically runs 6–8 weeks. Kovil AI operates fixed-price only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of Agentforce for marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marketing ROI from Agentforce is primarily revenue-driven: higher qualified pipeline from better-personalised nurture (typical 15–25% pipeline uplift), improved deliverability protecting sender reputation, and reduced marketing ops headcount for campaign management. Event automation ROI is time-saving — typically 12–20 hours per event cycle freed from manual coordination.',
      },
    },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Marketing Teams — Marketing Cloud',
  description: 'Production Agentforce Marketing Cloud deployments — campaign execution agents, personalised lead nurture sequences, and event automation.',
  url: 'https://kovil.ai/agentforce/marketing-cloud',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  hasPart: [
    { '@type': 'WebPage', name: 'Campaign Execution Agent', url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent' },
    { '@type': 'WebPage', name: 'Lead Nurture Agent', url: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent' },
    { '@type': 'WebPage', name: 'Event & Webinar Agent', url: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Marketing Cloud', item: 'https://kovil.ai/agentforce/marketing-cloud' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Marketing Teams — Marketing Cloud AI Agents | Kovil AI',
  description: 'Production Agentforce Marketing Cloud deployments — campaign execution agents, personalised lead nurture sequences, and end-to-end event automation.',
  url: 'https://kovil.ai/agentforce/marketing-cloud',
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
      <MarketingCloudHubPage />
    </>
  )
}

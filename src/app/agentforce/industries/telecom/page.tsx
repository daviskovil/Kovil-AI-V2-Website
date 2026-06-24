import type { Metadata } from 'next'
import TelecomAgentforcePage from '@/src/pages/agentforce/industries/TelecomAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Telecommunications | Kovil AI',
  description: 'Production Agentforce for telcos — network outage support agents, billing dispute resolution, plan management automation, and churn prevention agents. Communications Cloud · TCPA compliant · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/telecom' },
  keywords: [
    'agentforce telecom',
    'salesforce agentforce telecommunications',
    'agentforce communications cloud',
    'agentforce billing dispute',
    'agentforce churn prevention',
    'agentforce network support',
    'salesforce telecom AI',
    'agentforce mvno',
    'agentforce telco implementation',
    'agentforce outage support',
    'salesforce communications cloud agentforce',
    'agentforce BSS OSS integration',
    'agentforce TCPA compliance',
    'agentforce plan management',
    'agentforce IVR deflection',
    'telecom AI agent salesforce',
    'agentforce billing automation telecom',
    'agentforce churn prediction',
    'salesforce agentforce telco partner',
    'agentforce porting activation',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Telecommunications | Kovil AI',
    description: 'Production Agentforce for telcos — network outage support agents, billing dispute resolution, plan management automation, and churn prevention agents. Communications Cloud · TCPA compliant · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/telecom',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Telecommunications — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Telecommunications | Kovil AI',
    description: 'Production Agentforce for telcos — network outage support, billing dispute resolution, churn prevention, and plan management. Communications Cloud · TCPA compliant.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Telecommunications',
  description: 'Production Agentforce deployments for telcos, MVNOs, and communications providers — network outage support agents, billing dispute resolution, plan upgrade and downgrade automation, churn prevention agents, porting and activation, and technical troubleshooting agents built on Salesforce Communications Cloud, Data Cloud, and MuleSoft.',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
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
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '734 Franklin Ave',
        addressLocality: 'Garden City',
        addressRegion: 'NY',
        postalCode: '11530',
        addressCountry: 'US',
      },
    ],
  },
  serviceType: 'Salesforce Agentforce Implementation',
  category: 'Telecommunications',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/agentforce/industries/telecom',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Telecom Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Outage Support Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Billing Dispute Resolution Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plan Upgrade & Downgrade Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Churn Prevention Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Porting & Activation Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Troubleshooting Agent' } },
    ],
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 2–3 week sprint to production' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Salesforce products are needed for telecom Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core stack is Salesforce Communications Cloud (the telecom-specific CRM with native objects for service plans, accounts, devices, and orders), Service Cloud (for OmniChannel and case management), Data Cloud (for unified customer profiles, usage analytics, and churn propensity scoring), and MuleSoft (for BSS/OSS, billing system, and network management integration). Marketing Cloud handles TCPA-compliant outbound SMS and email sequences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with BSS and OSS systems like Amdocs or CSG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft provides integration to major telco BSS/OSS platforms — Amdocs, CSG, Netcracker, Ericsson, and Nokia — via REST and SOAP APIs. This gives Agentforce real-time access to billing records, service provisioning status, order management, and network diagnostics. Write-back capabilities allow agents to post credits, trigger provisioning changes, and update account records directly in the BSS without manual intervention.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce ensure TCPA compliance for outbound messaging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce outbound SMS and proactive notification sequences are governed by Marketing Cloud\'s consent management layer, which validates TCPA opt-in status before any outbound contact. Opt-out requests are processed in real time and propagated across all outbound channels. Contact frequency limits and quiet hours are configured at the campaign level. Every outbound contact attempt is logged with consent status for regulatory audit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best Agentforce use cases for telcos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For telecom operators and MVNOs, the highest-ROI starting points are network outage support automation and billing dispute resolution. Churn prevention agents deliver the strongest revenue protection ROI for operators with elevated voluntary churn. Plan upgrade automation drives incremental ARPU without additional sales headcount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with churn prediction models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce churn prevention agents are grounded in Einstein AI churn propensity scores and Data Cloud usage analytics — connecting to existing churn prediction models via the Data Cloud data pipeline or MuleSoft API integration. If no churn model exists, Einstein Prediction Builder can generate one from Communications Cloud usage and account data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce deflect IVR contacts and reduce call volume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce integrates with IVR platforms — Genesys, NICE CXone, Twilio Flex — to deflect callers to digital self-service channels at key IVR decision points. When a caller\'s intent matches one the agent can resolve autonomously (outage status, billing dispute, plan change), the IVR routes to a web chat or SMS agent interaction rather than queuing for a human agent. Production telco deployments typically achieve 25–40% IVR deflection within 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a telecom Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production telecom Agentforce sprint — scoped to one primary workflow such as network outage support or billing dispute resolution — takes 2–3 weeks from kickoff to deployment. This includes Communications Cloud configuration, MuleSoft integration to BSS/billing system, TCPA compliance configuration, agent Topic and Action build, testing, and go-live across selected channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce support multiple brands or MVNOs within one Salesforce org?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce supports multi-brand and MVNO deployments within a single Communications Cloud org using separate Experience Cloud portals per brand, brand-scoped OmniChannel routing, and brand-specific agent Topic configurations. Billing system integrations are scoped per brand where brands use separate BSS instances.',
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
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/agentforce/industries' },
    { '@type': 'ListItem', position: 4, name: 'Telecommunications', item: 'https://kovil.ai/agentforce/industries/telecom' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Telecommunications | Kovil AI',
  description: 'Production Agentforce for telcos — network outage support agents, billing dispute resolution, plan management automation, and churn prevention agents. Communications Cloud · TCPA compliant · Fixed-price sprints.',
  url: 'https://kovil.ai/agentforce/industries/telecom',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#use-cases h2', '#use-cases h3', '#faq-grid h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <TelecomAgentforcePage />
    </>
  )
}

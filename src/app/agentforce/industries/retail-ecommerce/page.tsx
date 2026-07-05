import type { Metadata } from 'next'
import RetailEcommerceAgentforcePage from '@/src/pages/agentforce/industries/RetailEcommerceAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Retail & Ecommerce',
  description: 'Production Agentforce for retail — order management agents, returns and refund automation, personalised shopping assistants, and loyalty program agents. Commerce Cloud · Service Cloud · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/retail-ecommerce' },
  keywords: [
    'agentforce retail',
    'salesforce agentforce ecommerce',
    'agentforce commerce cloud',
    'agentforce order management',
    'agentforce returns automation',
    'agentforce personalisation',
    'agentforce retail implementation',
    'salesforce retail AI',
    'agentforce ecommerce agent',
    'agentforce loyalty program',
    'agentforce order status agent',
    'salesforce commerce cloud agentforce',
    'agentforce returns refund',
    'agentforce shopping assistant',
    'salesforce B2C agentforce',
    'agentforce subscription management',
    'retail AI agent salesforce',
    'agentforce post purchase',
    'salesforce agentforce retail partner',
    'agentforce customer service retail',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Retail & Ecommerce | Kovil AI',
    description: 'Production Agentforce for retail — order management agents, returns and refund automation, personalised shopping assistants, and loyalty program agents. Commerce Cloud · Service Cloud · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/retail-ecommerce',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Retail & Ecommerce — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Retail & Ecommerce | Kovil AI',
    description: 'Production Agentforce for retail — order management agents, returns automation, personalised shopping assistants, and loyalty program agents. Commerce Cloud · Service Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Retail & Ecommerce',
  description: 'Production Agentforce deployments for retailers and ecommerce brands — order status and tracking agents, returns and refund automation, personalised shopping agents, loyalty programme agents, subscription management, and post-purchase follow-up sequences built on Commerce Cloud, Service Cloud, Data Cloud, and MuleSoft.',
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
  category: 'Retail & Ecommerce',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/agentforce/industries/retail-ecommerce',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Retail & Ecommerce Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Order Status & Tracking Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Returns & Refund Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personalised Shopping Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Loyalty Program Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Subscription Management Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Purchase Follow-Up Agent' } },
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
      name: 'What Salesforce products are needed for retail Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core stack for retail Agentforce is Commerce Cloud (for order and product data), Service Cloud (for OmniChannel and case management), Data Cloud (for unified customer profiles grounding personalisation and loyalty agents), and MuleSoft (for OMS, WMS, and third-party platform integration). Marketing Cloud handles post-purchase email and SMS sequences. Agentforce is included in qualifying Salesforce platform licences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Commerce Cloud for order management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce has native integration with Salesforce Commerce Cloud via the B2C Commerce Cloud connector, giving agents real-time access to order status, line items, delivery ETAs, and product catalogue data. For third-party OMS platforms — Manhattan Associates, Blue Yonder, or custom ERP-based OMS — MuleSoft provides the integration layer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle GDPR compliance for retail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce running on Salesforce operates within Salesforce\'s GDPR-compliant trust boundary. Customer PII is not sent to external LLMs — the Einstein Trust Layer enforces this. Data subject access requests and right-to-erasure workflows can be configured using Privacy Center. EU data residency is available. Post-purchase email and SMS sequences are governed by Marketing Cloud\'s consent management, with opt-out honoured across all channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best Agentforce use cases for ecommerce brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For ecommerce brands, the highest-ROI starting points are order status and tracking (the single highest-volume support query for most retailers) and returns and refund automation (which typically consumes 30–40% of service team capacity). Personalised shopping agents and post-purchase follow-up sequences typically follow in subsequent sprints.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce retail implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production retail Agentforce sprint — scoped to one primary workflow such as order status and returns — takes 2–3 weeks from kickoff to deployment. This includes Commerce Cloud and OMS integration, agent Topic and Action configuration, returns policy rule encoding, testing across real order scenarios, and go-live across selected channels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce support international ecommerce with multi-currency and multi-language?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Salesforce Commerce Cloud and Service Cloud support multi-currency, multi-language, and multi-region configurations natively. Agentforce agents can be configured to operate in multiple languages with locale-aware responses. Currency conversion, international returns policies, and region-specific carrier integrations are configured per locale during implementation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce support multiple retail brands within one Salesforce org?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce supports multi-brand deployments within a single Salesforce org using Experience Cloud for brand-specific customer portals, separate OmniChannel routing configurations, and brand-scoped agent Topics. Returns policies, loyalty rules, and escalation thresholds are configured per brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce compatible with headless commerce architectures?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Headless commerce platforms using the Salesforce B2C Commerce Cloud API layer, or third-party headless platforms connected via MuleSoft, provide Agentforce with the same real-time data access as native storefronts. The agent\'s Topics and Actions call APIs rather than rendering UI — making headless compatibility straightforward.',
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
    { '@type': 'ListItem', position: 4, name: 'Retail & Ecommerce', item: 'https://kovil.ai/agentforce/industries/retail-ecommerce' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Retail & Ecommerce | Kovil AI',
  description: 'Production Agentforce for retail — order management agents, returns and refund automation, personalised shopping assistants, and loyalty program agents. Commerce Cloud · Service Cloud · Fixed-price sprints.',
  url: 'https://kovil.ai/agentforce/industries/retail-ecommerce',
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
      <RetailEcommerceAgentforcePage />
    </>
  )
}

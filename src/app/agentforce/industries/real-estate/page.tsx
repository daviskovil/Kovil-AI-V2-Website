import type { Metadata } from 'next'
import RealEstateAgentforcePage from '@/src/pages/agentforce/industries/RealEstateAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Real Estate',
  description: 'Production Agentforce for real estate firms and property managers — property inquiry agents, lead qualification, tenant support automation, maintenance request handling, and lease renewal management. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/real-estate' },
  keywords: [
    'agentforce real estate',
    'salesforce agentforce property',
    'agentforce property inquiry agent',
    'agentforce lead qualification real estate',
    'agentforce tenant support',
    'agentforce lease management',
    'agentforce property management',
    'salesforce real estate AI',
    'agentforce CRE automation',
    'agentforce residential real estate',
    'salesforce agentforce property manager',
    'agentforce maintenance request',
    'agentforce lease renewal',
    'agentforce real estate implementation',
    'salesforce AI real estate',
    'agentforce Yardi integration',
    'agentforce property marketing',
    'agentforce real estate automation',
    'agentforce tenant onboarding',
    'agentforce real estate implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Real Estate | Kovil AI',
    description: 'Production Agentforce for real estate firms and property managers — property inquiry agents, lead qualification, tenant support automation, and lease renewal management.',
    url: 'https://kovil.ai/agentforce/industries/real-estate',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Real Estate — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Real Estate | Kovil AI',
    description: 'Production Agentforce for real estate firms and property managers — property inquiry agents, lead qualification, tenant support automation.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Real Estate',
  description: 'Production Agentforce implementations for real estate firms and property managers — property inquiry agents, lead qualification, tenant support automation, maintenance request handling, and lease renewal management.',
  serviceType: 'Agentforce Implementation',
  category: 'Real Estate',
  url: 'https://kovil.ai/agentforce/industries/real-estate',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
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
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price Agentforce real estate implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Real Estate Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Inquiry Agent', description: 'Handles inbound property queries — availability, pricing, specifications, and viewing scheduling — 24/7 without broker intervention.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Qualification Agent', description: 'Qualifies inbound buyer and tenant leads against ICP criteria, scores by intent, and routes high-quality leads to brokers instantly.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tenant Support Agent', description: 'Handles tenant service requests, lease queries, payment confirmations, and move-in/move-out process guidance autonomously.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Request Agent', description: 'Captures maintenance requests, classifies by urgency and trade type, creates work orders, and provides status updates to tenants.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lease Renewal Agent', description: 'Proactive lease renewal outreach, renewal offer generation, negotiation support routing, and signed document collection management.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Marketing Agent', description: 'Personalised property match outreach, market update delivery, and re-engagement sequences for cold prospects in your CRM.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for real estate are property inquiry handling (answering availability, pricing, and specification questions 24/7), lead qualification (scoring and routing inbound buyer and tenant leads), tenant support (lease queries, payment confirmation, move-in guidance), and maintenance request management (capturing, classifying, and tracking maintenance work orders). These cover the highest-volume, most repetitive interactions that consume broker and property manager time without generating direct revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Yardi or AppFolio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to property management platforms including Yardi Voyager, AppFolio, and RealPage — surfacing live unit availability, tenant records, lease data, and maintenance work order status to ground agent responses in real-time property data. For firms using Salesforce as their CRM, direct integration with custom property objects is available without requiring MuleSoft for simpler use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce help with tenant retention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce improves tenant retention through proactive engagement at key moments: lease renewal outreach 90 days before expiry, maintenance resolution follow-up to confirm satisfaction, and personalised market context delivery to tenants considering their options. Agents also handle the administrative burden of the renewal process — generating renewal offers, tracking responses, and routing negotiation conversations to property managers — making the renewal experience frictionless for tenants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce qualify real estate leads from multiple channels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce lead qualification agents handle inbound leads from web forms, portal integrations (Rightmove, Zoopla, Zillow, LoopNet), email enquiries, and chat — classifying each by buyer/tenant type, qualification criteria, and intent signals, then routing to the right broker within minutes. Response time drops from hours or days to under 9 minutes, which is the key window for lead conversion in real estate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a real estate Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — property inquiry handling or lead qualification — takes 2–3 weeks from kick-off to production. Full deployments covering multiple use cases with property management system integration run 6–10 weeks. We recommend starting with the highest-volume inbound use case first — typically lead qualification or tenant support — to demonstrate ROI before expanding scope.',
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
    { '@type': 'ListItem', position: 4, name: 'Real Estate', item: 'https://kovil.ai/agentforce/industries/real-estate' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Real Estate | Kovil AI',
  description: 'Production Agentforce for real estate firms and property managers — property inquiry agents, lead qualification, tenant support automation, and lease renewal management.',
  url: 'https://kovil.ai/agentforce/industries/real-estate',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <RealEstateAgentforcePage />
    </>
  )
}

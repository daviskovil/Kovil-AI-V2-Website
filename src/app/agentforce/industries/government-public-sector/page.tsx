import type { Metadata } from 'next'
import GovernmentPublicSectorAgentforcePage from '@/src/pages/agentforce/industries/GovernmentPublicSectorAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Government & Public Sector',
  description: 'Production Agentforce for government agencies and public sector organisations — citizen service agents, permit processing automation, benefits eligibility, case management, records requests, and compliance monitoring. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/government-public-sector' },
  keywords: [
    'agentforce government',
    'salesforce agentforce public sector',
    'agentforce citizen service',
    'agentforce permit processing',
    'agentforce benefits eligibility',
    'agentforce case management government',
    'salesforce government cloud agentforce',
    'agentforce public sector automation',
    'agentforce local government',
    'agentforce federal agency',
    'salesforce agentforce government agency',
    'agentforce records request',
    'agentforce compliance government',
    'agentforce public sector implementation',
    'salesforce AI government',
    'agentforce FedRAMP',
    'agentforce FISMA compliance',
    'agentforce citizen engagement',
    'agentforce government digital transformation',
    'agentforce public sector implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Government & Public Sector | Kovil AI',
    description: 'Production Agentforce for government agencies — citizen service agents, permit processing automation, benefits eligibility, case management, and records requests.',
    url: 'https://kovil.ai/agentforce/industries/government-public-sector',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Government & Public Sector — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Government & Public Sector | Kovil AI',
    description: 'Production Agentforce for government agencies — citizen service agents, permit processing, benefits eligibility, and case management.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Government & Public Sector',
  description: 'Production Agentforce implementations for government agencies and public sector organisations — citizen service agents, permit processing automation, benefits eligibility, case management, records requests, and compliance monitoring.',
  serviceType: 'Agentforce Implementation',
  category: 'Government & Public Sector',
  url: 'https://kovil.ai/agentforce/industries/government-public-sector',
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
    description: 'Fixed-price Agentforce government & public sector implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Government & Public Sector Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Citizen Service Agent', description: '24/7 service information, application status queries, department routing, and appointment scheduling for citizens across all contact channels.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Permit Processing Agent', description: 'Permit application intake, eligibility checks, documentation requirement guidance, status tracking, and inspection scheduling.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Benefits Eligibility Agent', description: 'Benefits programme eligibility screening, application guidance, document collection, and status updates for entitlement programmes.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Case Management Agent', description: 'Case creation, status updates, document requests, escalation routing, and citizen communication management across open cases.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Records Request Agent', description: 'FOIA and public records request intake, document delivery for standard requests, and status tracking with statutory deadline monitoring.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Monitoring Agent', description: 'Regulatory deadline tracking, inspection scheduling, violation notice delivery, and compliance status reporting for regulated entities.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for government agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for government are citizen service (24/7 information delivery, application status, department routing), permit processing (intake, eligibility checks, status tracking), and benefits eligibility (programme screening, application guidance, document collection). These handle the highest-volume citizen interactions that currently require human agent time for standard queries, allowing staff to focus on complex cases requiring judgment and policy expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce FedRAMP and FISMA compliant for government use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salesforce Government Cloud is FedRAMP Moderate authorized, making it the deployment environment for US federal Agentforce implementations. The Einstein Trust Layer provides the FISMA-required audit logging, access controls, and data protection controls. UK central government deployments are supported through Salesforce\'s G-Cloud accredited environment. We configure every government Agentforce deployment with agency-specific security requirements reviewed before any data is processed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle FOIA and public records requests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce records request agents handle the administrative workflow: accepting FOIA requests, confirming receipt within statutory timeframes, routing to the responsible department, sending acknowledgment letters, and tracking response deadlines against legal obligations. For standard records that meet automatic disclosure criteria, the agent can deliver records directly. Complex requests requiring legal review or exemption determination are routed to the appropriate records officer with full request context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce improve citizen service access for ADA compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce citizen service agents are accessible through text-based channels (web chat, SMS, email) which are inherently ADA-compatible and do not require visual or motor interaction that could create barriers. Agents can be configured to follow plain language standards for all responses, provide alternative format document options, and route accessibility accommodation requests to the appropriate ADA coordinator. Multi-language support is available for agencies serving non-English-speaking populations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a government Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — citizen service handling or permit status queries — takes 2–3 weeks from kick-off to production in a Government Cloud environment. Full deployments with legacy system integration (Tyler Technologies, IBM systems of record, state agency databases) run 8–14 weeks depending on integration complexity and security review requirements. Government procurement and security assessment timelines can extend pre-build phases significantly — we account for this in every government engagement plan.',
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
    { '@type': 'ListItem', position: 4, name: 'Government & Public Sector', item: 'https://kovil.ai/agentforce/industries/government-public-sector' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Government & Public Sector | Kovil AI',
  description: 'Production Agentforce for government agencies — citizen service agents, permit processing automation, benefits eligibility, case management, and records requests.',
  url: 'https://kovil.ai/agentforce/industries/government-public-sector',
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
      <GovernmentPublicSectorAgentforcePage />
    </>
  )
}

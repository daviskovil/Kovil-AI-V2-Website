import type { Metadata } from 'next'
import EnergyUtilitiesAgentforcePage from '@/src/pages/agentforce/industries/EnergyUtilitiesAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Energy & Utilities | Kovil AI',
  description: 'Production Agentforce for energy companies and utilities — outage management agents, billing inquiry resolution, smart meter query automation, new connection handling, and field service dispatch. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/energy-utilities' },
  keywords: [
    'agentforce energy utilities',
    'salesforce agentforce energy',
    'agentforce outage management',
    'agentforce billing inquiry utilities',
    'agentforce smart meter',
    'agentforce utilities automation',
    'salesforce energy and utilities cloud agentforce',
    'agentforce field service energy',
    'agentforce new connection',
    'agentforce utility customer service',
    'salesforce agentforce utility company',
    'agentforce NERC CIP',
    'agentforce energy implementation',
    'agentforce power company automation',
    'salesforce AI utilities',
    'agentforce grid management',
    'agentforce renewable energy',
    'agentforce sustainability reporting',
    'agentforce utility customer agent',
    'agentforce energy implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Energy & Utilities | Kovil AI',
    description: 'Production Agentforce for energy companies and utilities — outage management agents, billing inquiry resolution, smart meter query automation, and field service dispatch.',
    url: 'https://kovil.ai/agentforce/industries/energy-utilities',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Energy & Utilities — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Energy & Utilities | Kovil AI',
    description: 'Production Agentforce for energy companies and utilities — outage management agents, billing inquiry resolution, smart meter automation.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Energy & Utilities',
  description: 'Production Agentforce implementations for energy companies and utilities — outage management, billing inquiry resolution, smart meter query automation, new connection handling, and field service dispatch.',
  serviceType: 'Agentforce Implementation',
  category: 'Energy & Utilities',
  url: 'https://kovil.ai/agentforce/industries/energy-utilities',
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
    description: 'Fixed-price Agentforce energy & utilities implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Energy & Utilities Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outage Management Agent', description: 'Proactive outage notification, ETA communication, restoration status updates, and complaint deflection during grid events.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Billing Inquiry Agent', description: 'Bill explanation, payment plan setup, usage query resolution, and hardship programme routing without agent involvement.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Meter Query Agent', description: 'Usage data explanation, anomaly investigation, smart meter fault reporting, and rebate programme eligibility queries.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'New Connection Agent', description: 'New service application intake, eligibility checks, connection scheduling, and status tracking for residential and commercial connections.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Field Service Dispatch Agent', description: 'Job creation, technician assignment, customer appointment confirmation, and real-time dispatch status communication.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sustainability Reporting Agent', description: 'Carbon footprint queries, renewable energy certificate requests, sustainability programme enrolment, and usage efficiency recommendations.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for energy and utilities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for utilities are outage management (proactive notifications, ETA updates, complaint deflection during grid events), billing inquiry resolution (bill explanation, payment plans, usage queries), and smart meter queries (usage anomalies, fault reporting). These three use cases collectively represent 60–70% of inbound utility customer service volume and are well-suited to autonomous resolution because they follow predictable logic and draw on structured account and metering data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle peak demand during outage events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce agents scale elastically — there is no per-agent throughput cap that creates queuing during high-volume events. During major outage events when inbound volume spikes, the agent handles proactive outage status delivery, ETA updates, and restoration confirmation across thousands of simultaneous customer sessions without requiring additional agent headcount. The agent is configured with specific outage messaging protocols and complaint-acknowledgement flows that maintain customer satisfaction even when resolution timelines are outside your control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with utility billing and metering systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to utility billing platforms (Oracle Utilities, SAP IS-U, Hansen Technologies, Itron) and AMI/smart metering systems to surface live account balances, usage data, and meter readings. Salesforce Energy & Utilities Cloud provides the customer account and service agreement data model that grounds agent responses. Field service integration with SAP Field Service Management and Salesforce Field Service ensures dispatch agents have real-time technician availability and scheduling data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compliance requirements apply to Agentforce in utilities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utility Agentforce deployments must be configured to meet NERC CIP requirements for operational technology interactions, GDPR and CCPA for customer data handling, and sector-specific consumer protection obligations (OFGEM in the UK, FERC and state PUC requirements in the US). The Einstein Trust Layer provides the audit logging and data masking required for regulatory compliance. We configure every utility deployment with explicit regulatory compliance checkpoints before go-live.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce help utilities reduce call centre costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilities typically see 55–75% autonomous resolution rates on billing inquiry and outage query use cases within 90 days of deployment. At mid-size utilities handling 500,000+ annual customer contacts, this translates to $400,000–$1.2M in annual handling cost reduction. The largest ROI driver is outage event deflection — agents that handle the 10× inbound volume spike during major grid events eliminate the need for emergency contact centre staffing.',
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
    { '@type': 'ListItem', position: 4, name: 'Energy & Utilities', item: 'https://kovil.ai/agentforce/industries/energy-utilities' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Energy & Utilities | Kovil AI',
  description: 'Production Agentforce for energy companies and utilities — outage management agents, billing inquiry resolution, smart meter query automation, and field service dispatch.',
  url: 'https://kovil.ai/agentforce/industries/energy-utilities',
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
      <EnergyUtilitiesAgentforcePage />
    </>
  )
}

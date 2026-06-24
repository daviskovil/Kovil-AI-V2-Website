import type { Metadata } from 'next'
import LogisticsSupplyChainAgentforcePage from '@/src/pages/agentforce/industries/LogisticsSupplyChainAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Logistics & Supply Chain | Kovil AI',
  description: 'Production Agentforce for logistics companies and supply chain operators — shipment tracking agents, freight quoting automation, returns and claims resolution, carrier communication, and inventory alerting. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/logistics-supply-chain' },
  keywords: [
    'agentforce logistics',
    'salesforce agentforce supply chain',
    'agentforce shipment tracking',
    'agentforce freight quoting',
    'agentforce returns claims',
    'agentforce logistics automation',
    'salesforce logistics AI',
    'agentforce carrier communication',
    'agentforce inventory management',
    'agentforce 3PL automation',
    'salesforce agentforce freight',
    'agentforce supply chain visibility',
    'agentforce warehouse automation',
    'agentforce logistics implementation',
    'salesforce AI logistics',
    'agentforce SAP TM integration',
    'agentforce customer service logistics',
    'agentforce order tracking agent',
    'agentforce supply chain implementation',
    'agentforce logistics implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Logistics & Supply Chain | Kovil AI',
    description: 'Production Agentforce for logistics companies — shipment tracking agents, freight quoting automation, returns and claims resolution, carrier communication, and inventory alerting.',
    url: 'https://kovil.ai/agentforce/industries/logistics-supply-chain',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Logistics & Supply Chain — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Logistics & Supply Chain | Kovil AI',
    description: 'Production Agentforce for logistics companies — shipment tracking agents, freight quoting, returns and claims resolution.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Logistics & Supply Chain',
  description: 'Production Agentforce implementations for logistics companies and supply chain operators — shipment tracking agents, freight quoting automation, returns and claims resolution, and inventory alerting.',
  serviceType: 'Agentforce Implementation',
  category: 'Logistics & Supply Chain',
  url: 'https://kovil.ai/agentforce/industries/logistics-supply-chain',
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
    description: 'Fixed-price Agentforce logistics & supply chain implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Logistics & Supply Chain Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shipment Tracking Agent', description: 'Real-time shipment status, ETD/ETA updates, delay notifications, and exception alerts delivered autonomously across all channels.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freight Quoting Agent', description: 'Instant freight rate calculation, carrier selection, lane comparison, and quote generation for standard shipment types.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Returns & Claims Agent', description: 'Return request intake, eligibility assessment, claim submission guidance, and status tracking for damaged or lost shipments.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carrier Communication Agent', description: 'Carrier confirmation requests, POD collection, detention and demurrage dispute intake, and carrier performance escalation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventory Alert Agent', description: 'Low stock alerts, reorder recommendations, supplier outreach for critical items, and inventory discrepancy investigation routing.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Order Support Agent', description: 'Order status queries, delivery window updates, split shipment explanations, and proactive delay communication for end customers.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for logistics and supply chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for logistics are shipment tracking (real-time status, ETAs, delay notifications), returns and claims processing (intake, eligibility, submission, status tracking), and freight quoting (instant rate calculation and quote generation for standard lanes). These represent the highest-volume customer and carrier interactions and follow predictable logic that maps well to autonomous agent resolution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with TMS and WMS systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to transportation management systems (SAP TM, Oracle TMS, MercuryGate, JDA), warehouse management systems (Manhattan Associates, Blue Yonder, HighJump), and carrier APIs (FedEx, UPS, DHL, project44, Fourkites) to surface live shipment data, inventory levels, and carrier status. Real-time data grounding ensures agents respond with accurate, current information rather than stale records.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle shipment exceptions and delays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce shipment tracking agents are configured with exception-handling logic: when a shipment enters exception status (delay, damage, lost, customs hold), the agent triggers proactive outbound communication to the customer with status and revised ETA, creates a case in Salesforce for ops team visibility, and routes to a human operations specialist if the exception requires intervention beyond standard notification. Customers receive updates without needing to call in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce automate freight quoting for a 3PL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce freight quoting agents handle standard quote requests end-to-end — collecting origin, destination, weight, commodity, and service requirements, retrieving rates from your TMS or carrier rate tables via API, and returning a formatted quote within seconds. Complex or non-standard lanes are routed to human pricing specialists with the structured request data already collected. This eliminates the manual quoting workload for standard freight while maintaining expert review for complex requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a logistics Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — shipment tracking or returns intake — takes 2–3 weeks from kick-off to production. Full deployments covering multiple use cases with TMS and carrier API integration run 6–10 weeks depending on integration complexity. TMS integrations via MuleSoft typically add 2–3 weeks to the build timeline versus integrations that use standard carrier APIs directly.',
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
    { '@type': 'ListItem', position: 4, name: 'Logistics & Supply Chain', item: 'https://kovil.ai/agentforce/industries/logistics-supply-chain' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Logistics & Supply Chain | Kovil AI',
  description: 'Production Agentforce for logistics companies — shipment tracking agents, freight quoting automation, returns and claims resolution, carrier communication, and inventory alerting.',
  url: 'https://kovil.ai/agentforce/industries/logistics-supply-chain',
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
      <LogisticsSupplyChainAgentforcePage />
    </>
  )
}

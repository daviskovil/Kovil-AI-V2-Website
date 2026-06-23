import type { Metadata } from 'next'
import ManufacturingAgentforcePage from '@/src/pages/agentforce/industries/ManufacturingAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Manufacturing | Kovil AI',
  description: 'Production Agentforce for manufacturing — field service scheduling agents, warranty claim intake automation, dealer support, and preventive maintenance alerts. Manufacturing Cloud · Field Service · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/manufacturing' },
  keywords: [
    'agentforce manufacturing',
    'salesforce agentforce field service',
    'agentforce manufacturing cloud',
    'agentforce FSL',
    'agentforce warranty management',
    'agentforce dealer support',
    'agentforce IoT',
    'salesforce manufacturing AI',
    'agentforce field service lightning',
    'agentforce preventive maintenance',
    'salesforce manufacturing cloud agentforce',
    'agentforce parts inventory',
    'agentforce quality complaint',
    'salesforce field service agentforce',
    'manufacturing AI agent',
    'agentforce SAP integration',
    'agentforce industrial',
    'agentforce warranty automation',
    'salesforce agentforce manufacturing partner',
    'agentforce technician dispatch',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Manufacturing | Kovil AI',
    description: 'Production Agentforce for manufacturing — field service scheduling agents, warranty claim intake automation, dealer support, and preventive maintenance alerts. Manufacturing Cloud · Field Service · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/manufacturing',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Manufacturing | Kovil AI',
    description: 'Production Agentforce for manufacturing — field service scheduling agents, warranty claim intake, dealer support, and IoT-triggered preventive maintenance. Manufacturing Cloud · FSL.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Manufacturing',
  description: 'Production Agentforce deployments for manufacturers and industrial companies — field service scheduling agents, warranty claim intake automation, dealer and distributor support, preventive maintenance alerts via IoT, quality complaint triage, and parts and inventory query agents built on Manufacturing Cloud, Field Service Lightning, Data Cloud, and MuleSoft.',
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
  category: 'Manufacturing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/agentforce/industries/manufacturing',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Manufacturing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Field Service Scheduling Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warranty Claim Intake Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dealer & Distributor Support Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventive Maintenance Alerts Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Quality Complaint Triage Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parts & Inventory Query Agent' } },
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
      name: 'What Salesforce products are needed for manufacturing Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core stack is Manufacturing Cloud (for accounts, asset records, warranty contracts, and dealer agreements), Field Service Lightning (for technician scheduling and work order management), Data Cloud (for unified asset history and customer data), and MuleSoft (for ERP, IoT platform, and dealer management system integration). Agentforce is included in qualifying Salesforce platform licences. Einstein Trust Layer is required for production deployments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Field Service Lightning for technician dispatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce has native integration with Field Service Lightning — agents can query technician availability, skill records, and service territories in real time, create and update work orders, schedule appointments, and trigger dispatcher assignment. The FSL mobile app gives field technicians access to agent-generated work order context before they arrive on site.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce connect to SAP ERP for parts inventory and warranty data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft provides pre-built SAP S/4HANA and SAP ECC connectors that give Agentforce real-time read and write access to materials management, plant maintenance, warranty contracts, and sales order data. Oracle ERP Cloud connectivity uses the same MuleSoft integration layer. We scope the specific SAP objects and transactions needed during pre-sprint discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best Agentforce use cases for manufacturers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For manufacturers, the highest-ROI starting points are field service scheduling automation and warranty claim intake. Dealer and distributor support agents deliver the highest satisfaction improvement for companies with large channel networks. Preventive maintenance agents using IoT signal data deliver the strongest downtime reduction ROI for connected equipment manufacturers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with IoT platforms like PTC ThingWorx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to IoT platforms — PTC ThingWorx, GE Digital APM, Siemens MindSphere, and custom MQTT/REST IoT architectures — ingesting asset health signals, threshold alerts, and anomaly events. When an IoT signal triggers a maintenance threshold, the preventive maintenance agent initiates proactive customer outreach, creates a work order in Field Service Lightning, and checks parts availability — all without dispatcher involvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce support dealer and distributor networks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dealer support agents built on Manufacturing Cloud\'s channel partner data model can resolve the full range of dealer queries autonomously — order status, technical documentation, incentive programme status, co-op fund balance, and product configuration guidance. The agent integrates with the dealer management system via MuleSoft and with Revenue Cloud for incentive and rebate data.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce manufacturing implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production manufacturing Agentforce sprint — scoped to one primary workflow such as field service scheduling or warranty claim intake — takes 2–3 weeks from kickoff to deployment. This includes Manufacturing Cloud and FSL configuration review, MuleSoft integration to ERP, agent Topic and Action build, testing, and go-live. IoT-triggered preventive maintenance agents typically require an additional week for IoT integration configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Salesforce Field Technician app work with Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Field Service Lightning mobile app gives technicians access to agent-generated work order context — asset history, recommended parts, prior service records, and troubleshooting guidance — before and during the service visit. Agentforce can also update work order status, trigger parts orders, and close work orders via the FSL mobile app workflow.',
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
    { '@type': 'ListItem', position: 3, name: 'Manufacturing', item: 'https://kovil.ai/agentforce/industries/manufacturing' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Manufacturing | Kovil AI',
  description: 'Production Agentforce for manufacturing — field service scheduling agents, warranty claim intake automation, dealer support, and preventive maintenance alerts. Manufacturing Cloud · Field Service · Fixed-price sprints.',
  url: 'https://kovil.ai/agentforce/industries/manufacturing',
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
      <ManufacturingAgentforcePage />
    </>
  )
}

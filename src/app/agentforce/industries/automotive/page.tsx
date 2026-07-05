import type { Metadata } from 'next'
import AutomotiveAgentforcePage from '@/src/pages/agentforce/industries/AutomotiveAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Automotive',
  description: 'Production Agentforce for automotive OEMs, dealer groups, and fleet operators — dealer lead qualification, vehicle financing agents, service booking automation, recall management, and customer retention. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/automotive' },
  keywords: [
    'agentforce automotive',
    'salesforce agentforce automotive',
    'agentforce dealer lead qualification',
    'agentforce vehicle financing',
    'agentforce service booking automotive',
    'agentforce recall management',
    'agentforce automotive cloud',
    'salesforce automotive AI',
    'agentforce dealer group',
    'agentforce OEM automation',
    'salesforce agentforce dealership',
    'agentforce parts inquiry',
    'agentforce warranty management',
    'agentforce automotive implementation',
    'salesforce AI automotive',
    'agentforce CDK integration',
    'agentforce customer retention automotive',
    'agentforce fleet management',
    'agentforce automotive CRM',
    'agentforce automotive implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Automotive | Kovil AI',
    description: 'Production Agentforce for automotive OEMs, dealer groups, and fleet operators — dealer lead qualification, vehicle financing agents, service booking automation, and recall management.',
    url: 'https://kovil.ai/agentforce/industries/automotive',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Automotive — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Automotive | Kovil AI',
    description: 'Production Agentforce for automotive OEMs and dealer groups — dealer lead qualification, vehicle financing agents, service booking, and recall management.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Automotive',
  description: 'Production Agentforce implementations for automotive OEMs, dealer groups, and fleet operators — dealer lead qualification, vehicle financing agents, service booking automation, recall management, and customer retention.',
  serviceType: 'Agentforce Implementation',
  category: 'Automotive',
  url: 'https://kovil.ai/agentforce/industries/automotive',
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
    description: 'Fixed-price Agentforce automotive implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Automotive Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dealer Lead Qualification Agent', description: 'Qualifies inbound vehicle enquiries, matches to inventory, and routes high-intent leads to the right sales advisor within minutes.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vehicle Financing Agent', description: 'Finance eligibility pre-screening, product comparison, monthly payment calculation, and application intake without F&I desk involvement for standard requests.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Booking Agent', description: '24/7 service appointment booking, recall scheduling, maintenance reminder outreach, and service status updates for customers.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recall & Warranty Agent', description: 'Recall notification delivery, affected vehicle identification, appointment scheduling, and warranty claim intake and status tracking.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parts & Accessories Agent', description: 'Parts availability queries, pricing, order status, and accessories recommendation for service customers and aftermarket buyers.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Retention Agent', description: 'Proactive service reminder outreach, vehicle upgrade recommendations, loyalty programme engagement, and trade-in valuation initiation.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for automotive dealers and OEMs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for automotive are dealer lead qualification (responding to inbound vehicle enquiries within minutes and routing high-intent buyers to the right sales advisor), service booking automation (24/7 appointment scheduling, recall management, maintenance reminders), and customer retention (proactive service reminder outreach and vehicle upgrade sequencing). These represent the highest-volume, most time-sensitive customer interactions in automotive retail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with CDK, Reynolds & Reynolds, or DMS platforms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to dealer management systems including CDK Global, Reynolds & Reynolds ERA-IGNITE, Dealertrack, and Tekion — surfacing live inventory, service schedules, customer history, and parts availability to ground agent responses in real dealership data. For OEM deployments, Salesforce Automotive Cloud provides the vehicle and customer relationship model that Agentforce agents operate within.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce improve vehicle sales lead response time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce dealer lead qualification agents respond to inbound vehicle enquiries within seconds — matching the customer\'s requirements to current inventory, delivering model and trim information, and routing high-intent leads to the right sales advisor immediately. In automotive retail, the lead response window is critically short — leads contacted within 5 minutes convert at 4× the rate of leads contacted within an hour. Agentforce eliminates the human delay entirely for initial qualification and inventory matching.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce handle NHTSA recall notifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce recall agents handle the complete recall communication workflow — identifying affected vehicles in your customer database, delivering personalised outbound recall notifications via preferred channel, booking recall service appointments, and tracking completion rates. For OEM deployments, MuleSoft integration with NHTSA RINA and dealer communication systems ensures recall status is synchronised across the organisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an automotive Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — dealer lead qualification or service booking — takes 2–3 weeks from kick-off to production. Full deployments covering multiple use cases with DMS integration run 6–10 weeks. DMS integrations via MuleSoft typically require vendor API access agreements which can extend timelines — we assess this during the Strategy & Readiness phase.',
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
    { '@type': 'ListItem', position: 4, name: 'Automotive', item: 'https://kovil.ai/agentforce/industries/automotive' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Automotive | Kovil AI',
  description: 'Production Agentforce for automotive OEMs and dealer groups — dealer lead qualification, vehicle financing agents, service booking automation, and recall management.',
  url: 'https://kovil.ai/agentforce/industries/automotive',
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
      <AutomotiveAgentforcePage />
    </>
  )
}

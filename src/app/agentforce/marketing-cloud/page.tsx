import type { Metadata } from 'next'
import MarketingCloudHubPage from '@/src/pages/agentforce/marketing-cloud/MarketingCloudHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Marketing Teams — Marketing Cloud Agents | Kovil AI',
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
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Marketing Teams — Marketing Cloud | Kovil AI',
    description: 'Campaign execution agents, personalised lead nurture, and event automation — deployed in Marketing Cloud.',
    url: 'https://kovil.ai/agentforce/marketing-cloud',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Marketing Cloud — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Marketing Cloud | Kovil AI',
    description: 'Campaign execution agents, personalised lead nurture, and event automation — deployed in Marketing Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Marketing Teams — Marketing Cloud',
  description: 'Production Agentforce Marketing Cloud deployments — campaign execution agents, personalised lead nurture sequences, and event automation.',
  url: 'https://kovil.ai/agentforce/marketing-cloud',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MarketingCloudHubPage />
    </>
  )
}

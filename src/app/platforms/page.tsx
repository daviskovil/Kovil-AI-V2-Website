import type { Metadata } from 'next'
import PlatformsHubPage from '@/src/pages/platforms/PlatformsHubPage'
import { platforms, PLATFORM_GROUPS } from '@/src/data/platforms'

export const metadata: Metadata = {
  title: 'Enterprise Platform AI Integrations — Salesforce, HubSpot, ServiceNow & More',
  description: 'Kovil AI builds custom AI agents into the enterprise platforms you already run — Salesforce, HubSpot, ServiceNow, NetSuite, Shopify Plus, and 30+ more. Fixed-price, 2-week pilot.',
  alternates: { canonical: 'https://kovil.ai/platforms' },
  keywords: [
    'ai agent platform integration',
    'salesforce ai agent',
    'hubspot ai agent',
    'servicenow ai agent',
    'enterprise ai integration',
    'crm ai agents',
    'erp ai automation',
    'ai agents for enterprise software',
  ],
  openGraph: {
    type: 'website',
    title: 'Enterprise Platform AI Integrations | Kovil AI',
    description: 'Custom AI agents built into the enterprise platforms you already run — CRM, ERP, e-commerce, support, and more. Fixed-price, 2-week pilot.',
    url: 'https://kovil.ai/platforms',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Platform AI Integrations | Kovil AI',
    description: 'Custom AI agents built into the enterprise platforms you already run. Fixed-price, 2-week pilot.',
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Enterprise Platform AI Integrations',
  url: 'https://kovil.ai/platforms',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  about: PLATFORM_GROUPS.map((group) => ({
    '@type': 'Thing',
    name: group.title,
    hasPart: platforms.filter((p) => p.group === group.id).map((p) => ({ '@type': 'Thing', name: p.name })),
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlatformsHubPage />
    </>
  )
}

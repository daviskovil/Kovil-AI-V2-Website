import type { Metadata } from 'next'
import MultiLocationInventorySyncPage from '@/src/pages/shopify/workflows/MultiLocationInventorySyncPage'

export const metadata: Metadata = {
  title: 'Multi-Location Inventory Sync AI Agent',
  description: 'Deploy inventory sync agents to coordinate stock across multiple Shopify warehouses and sales channels in real-time, preventing oversells.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/multi-location-inventory-sync' },
  keywords: [
    'shopify inventory sync agent',
    'multi location inventory automation',
    'shopify multi warehouse stock sync',
    'real time inventory sync shopify',
    'shopify overselling prevention agent',
    'ecommerce inventory coordinator flows',
  ],
  openGraph: {
    type: 'website',
    title: 'Multi-Location Inventory Sync AI Agent | Kovil AI',
    description: 'Inventory sync agents to coordinate stock across multiple Shopify warehouses and sales channels in real-time, preventing oversells.',
    url: 'https://kovil.ai/shopify/workflows/multi-location-inventory-sync',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Location Inventory Sync AI Agent | Kovil AI',
    description: 'Inventory sync agents to coordinate stock across multiple Shopify warehouses and sales channels in real-time, preventing oversells.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Multi-Location Inventory Sync AI Agent',
  description: 'Custom inventory synchronization workflows mapping stock parameters across Shopify Plus location databases and channels in real-time.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Inventory & Logistical Workflows',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <MultiLocationInventorySyncPage />
    </>
  )
}

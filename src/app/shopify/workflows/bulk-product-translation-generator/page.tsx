import type { Metadata } from 'next'
import BulkProductTranslationGeneratorPage from '@/src/pages/shopify/workflows/BulkProductTranslationGeneratorPage'

export const metadata: Metadata = {
  title: 'Bulk Product Copy & Translation AI Generator',
  description: 'Deploy bulk catalog agents to rewrite descriptions, translate categories, and update meta tags across international Shopify store frontends.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/bulk-product-translation-generator' },
  keywords: [
    'bulk product copy generator shopify',
    'shopify translation agent',
    'automated product desc rewrite',
    'shopify catalog translator',
    'multilingual ecommerce product copy',
    'international shopify seo translator',
  ],
  openGraph: {
    type: 'website',
    title: 'Bulk Product Copy & Translation AI Generator | Kovil AI',
    description: 'Bulk catalog agents to rewrite descriptions, translate categories, and update meta tags across international Shopify store frontends.',
    url: 'https://kovil.ai/shopify/workflows/bulk-product-translation-generator',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bulk Product Copy & Translation AI Generator | Kovil AI',
    description: 'Bulk catalog agents to rewrite descriptions, translate categories, and update meta tags across international Shopify store frontends.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bulk Product Copy & Translation AI Generator',
  description: 'Custom AI translation and copywriting workflows that process batch e-commerce catalogs, formatting structured titles and descriptions into multiple languages for local search optimization.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Catalog & Content Translation Workflows',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BulkProductTranslationGeneratorPage />
    </>
  )
}

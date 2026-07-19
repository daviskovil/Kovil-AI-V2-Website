import type { Metadata } from 'next'
import HeadlessHydrogenAiSearchPage from '@/src/pages/shopify/solutions/HeadlessHydrogenAiSearchPage'

export const metadata: Metadata = {
  title: 'Shopify Hydrogen (Headless) AI Search Integration',
  description: 'Integrate semantic AI search on headless Shopify Hydrogen & Oxygen storefronts to match user intent directly. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/headless-hydrogen-ai-search' },
  keywords: [
    'shopify hydrogen ai search',
    'headless shopify semantic search',
    'oxygen storefront intent matching',
    'vector search headless shopify',
    'shopify headless custom search',
    'ai search integration headless ecommerce',
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify Hydrogen (Headless) AI Search Integration | Kovil AI',
    description: 'Semantic AI search on headless Shopify Hydrogen & Oxygen storefronts to match user intent directly.',
    url: 'https://kovil.ai/shopify/solutions/headless-hydrogen-ai-search',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Hydrogen (Headless) AI Search Integration | Kovil AI',
    description: 'Semantic AI search on headless Shopify Hydrogen & Oxygen storefronts to match user intent directly.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Hydrogen (Headless) AI Search Integration',
  description: 'Custom semantic vector search integration for headless Shopify Hydrogen & Oxygen storefronts, parsing conversational user intent into exact product coordinates.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Headless AI Search Integration',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HeadlessHydrogenAiSearchPage />
    </>
  )
}

import type { Metadata } from 'next'
import FoodBeverageAiPage from '@/src/pages/shopify/solutions/FoodBeverageAiPage'

export const metadata: Metadata = {
  title: 'Food & Beverage AI Agents for Shopify',
  description: 'Deploy custom conversational F&B agents for expiry tracking, recipe personalization, and batch route updates. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/food-beverage-ai-agents' },
  keywords: [
    'food beverage ai agent shopify',
    'f&b ecommerce ai agent',
    'expiry tracking automation shopify',
    'recipe recommender ai',
    'shopify food subscription ai',
    'batch routing automation shopify',
    'd2c food beverage personalization',
  ],
  openGraph: {
    type: 'website',
    title: 'Food & Beverage AI Agents for Shopify | Kovil AI',
    description: 'Conversational F&B agents for expiry tracking, recipe personalization, and batch route updates.',
    url: 'https://kovil.ai/shopify/solutions/food-beverage-ai-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Beverage AI Agents for Shopify | Kovil AI',
    description: 'Conversational F&B agents for expiry tracking, recipe personalization, and batch route updates.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Food & Beverage AI Agents',
  description: 'Custom conversational AI agents for food and beverage Shopify stores — expiry tracking, recipe personalization, batch route updates, allergy exclusions, and dynamic subscription boxes.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Food & Beverage',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <FoodBeverageAiPage />
    </>
  )
}

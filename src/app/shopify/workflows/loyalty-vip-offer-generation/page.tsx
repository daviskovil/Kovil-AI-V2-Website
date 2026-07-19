import type { Metadata } from 'next'
import LoyaltyVipOfferGenerationPage from '@/src/pages/shopify/workflows/LoyaltyVipOfferGenerationPage'

export const metadata: Metadata = {
  title: 'Loyalty & Custom VIP Offer AI Generator',
  description: 'Deploy VIP offer agents to analyze customer purchase patterns and automatically generate custom discount allocations and loyalty rewards.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/loyalty-vip-offer-generation' },
  keywords: [
    'loyalty vip offer generator ai',
    'shopify dynamic discount allocation agent',
    'automated customer rewards workflow',
    'vip customer purchase pattern analyzer',
    'd2c loyalty personalization engines',
  ],
  openGraph: {
    type: 'website',
    title: 'Loyalty & Custom VIP Offer AI Generator | Kovil AI',
    description: 'VIP offer agents to analyze customer purchase patterns and automatically generate custom discount allocations and loyalty rewards.',
    url: 'https://kovil.ai/shopify/workflows/loyalty-vip-offer-generation',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loyalty & Custom VIP Offer AI Generator | Kovil AI',
    description: 'VIP offer agents to analyze customer purchase patterns and automatically generate custom discount allocations and loyalty rewards.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Loyalty & Custom VIP Offer AI Generator',
  description: 'Custom loyalty and purchase behavior analysis workflows that automatically design specialized discount variants and tiers.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Retention & Loyalty Workflows',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LoyaltyVipOfferGenerationPage />
    </>
  )
}

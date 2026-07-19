import type { Metadata } from 'next'
import LuxuryJewelryAiPage from '@/src/pages/shopify/solutions/LuxuryJewelryAiPage'

export const metadata: Metadata = {
  title: 'Luxury Goods & Jewelry AI Agents for Shopify',
  description: 'Deploy custom conversational luxury agents for premium tone styling, virtual clienteling, and secure transactions. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/luxury-jewelry-ai-agents' },
  keywords: [
    'luxury ai agent shopify',
    'jewelry ecommerce ai agent',
    'virtual clienteling ai',
    'premium tone brand styling',
    'shopify jewelry concierge',
    'luxury goods checkout security',
    'd2c jewelry personalization',
  ],
  openGraph: {
    type: 'website',
    title: 'Luxury Goods & Jewelry AI Agents for Shopify | Kovil AI',
    description: 'Conversational luxury agents for premium tone styling, virtual clienteling, and secure transactions.',
    url: 'https://kovil.ai/shopify/solutions/luxury-jewelry-ai-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Goods & Jewelry AI Agents for Shopify | Kovil AI',
    description: 'Conversational luxury agents for premium tone styling, virtual clienteling, and secure transactions.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Goods & Jewelry AI Agents',
  description: 'Custom conversational AI agents for luxury goods and jewelry Shopify stores — premium brand styling tone, virtual clienteling, secure transactions, and private viewing booking.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Luxury Goods & Jewelry',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LuxuryJewelryAiPage />
    </>
  )
}

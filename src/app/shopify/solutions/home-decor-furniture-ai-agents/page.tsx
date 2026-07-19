import type { Metadata } from 'next'
import HomeDecorFurnitureAiPage from '@/src/pages/shopify/solutions/HomeDecorFurnitureAiPage'

export const metadata: Metadata = {
  title: 'Home & Furniture AI Agents for Shopify',
  description: 'Deploy custom conversational Home & Furniture agents for spacing consultations, coordinate recommendations, and delivery scheduling. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/home-decor-furniture-ai-agents' },
  keywords: [
    'home furniture ai agent shopify',
    'furniture ecommerce ai agent',
    'spacing consultation ai',
    'coordinate recommendation agent',
    'shopify furniture visual search',
    'delivery scheduling automation shopify',
    'd2c home decor personalization',
  ],
  openGraph: {
    type: 'website',
    title: 'Home & Furniture AI Agents for Shopify | Kovil AI',
    description: 'Conversational Home & Furniture agents for spacing consultations, coordinate recommendations, and delivery scheduling.',
    url: 'https://kovil.ai/shopify/solutions/home-decor-furniture-ai-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home & Furniture AI Agents for Shopify | Kovil AI',
    description: 'Conversational Home & Furniture agents for spacing consultations, coordinate recommendations, and delivery scheduling.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home & Furniture AI Agents',
  description: 'Custom conversational AI agents for home decor and furniture Shopify stores — spacing consultations, coordinate recommendations, delivery scheduling, and visual setup advice.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Home & Furniture',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HomeDecorFurnitureAiPage />
    </>
  )
}

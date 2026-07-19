import type { Metadata } from 'next'
import ElectronicsGadgetsAiPage from '@/src/pages/shopify/solutions/ElectronicsGadgetsAiPage'

export const metadata: Metadata = {
  title: 'Consumer Electronics & Gadgets AI Agents for Shopify',
  description: 'Deploy custom conversational electronics agents for dynamic spec comparisons, compatibility checks, and technical support. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/electronics-gadgets-ai-agents' },
  keywords: [
    'electronics ai agent shopify',
    'consumer electronics ai agent',
    'gadget compatibility checks ai',
    'spec comparison automation shopify',
    'shopify tech support ai',
    'd2c electronics personalization',
  ],
  openGraph: {
    type: 'website',
    title: 'Consumer Electronics & Gadgets AI Agents for Shopify | Kovil AI',
    description: 'Conversational electronics agents for dynamic spec comparisons, compatibility checks, and technical support.',
    url: 'https://kovil.ai/shopify/solutions/electronics-gadgets-ai-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer Electronics & Gadgets AI Agents for Shopify | Kovil AI',
    description: 'Conversational electronics agents for dynamic spec comparisons, compatibility checks, and technical support.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Consumer Electronics & Gadgets AI Agents',
  description: 'Custom conversational AI agents for electronics and gadgets Shopify stores — spec comparisons, compatibility checks, technical support, and warranty lookups.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Consumer Electronics & Gadgets',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ElectronicsGadgetsAiPage />
    </>
  )
}

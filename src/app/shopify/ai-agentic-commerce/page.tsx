import type { Metadata } from 'next'
import ShopifyAgenticCommercePage from '@/src/pages/shopify/ShopifyAgenticCommercePage'

export const metadata: Metadata = {
  title: 'Shopify Agentic Commerce Solutions & Consulting | Kovil AI',
  description: 'Design and deploy custom multi-agent networks (Manager, Design, and Comm agents) tailored for high-volume Shopify stores. Sprint-delivered with 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/ai-agentic-commerce' },
  keywords: [
    'shopify agentic commerce',
    'ecommerce ai agents',
    'ai agents for ecommerce',
    'multi agent ecommerce systems',
    'custom shopify ai solutions'
  ]
}

export default function Page() {
  return <ShopifyAgenticCommercePage />
}

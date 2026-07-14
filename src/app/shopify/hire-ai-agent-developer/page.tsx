import type { Metadata } from 'next'
import HireShopifyAgentDeveloperPage from '@/src/pages/shopify/HireShopifyAgentDeveloperPage'

export const metadata: Metadata = {
  title: 'Hire Shopify AI Agent Developers | Kovil AI',
  description: 'Hire senior AI developers specifically vetted for Shopify Partner Admin API integrations, LangGraph multi-agent configurations, and automated e-commerce workflows. Sprint-delivered with 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/hire-ai-agent-developer' },
  keywords: [
    'hire shopify ai developer',
    'shopify ai agent developers',
    'embedded shopify ai engineer',
    'hire ecommerce ai engineers',
    'shopify custom agent coding'
  ]
}

export default function Page() {
  return <HireShopifyAgentDeveloperPage />
}

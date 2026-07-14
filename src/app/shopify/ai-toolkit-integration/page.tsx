import type { Metadata } from 'next'
import ShopifyAiToolkitPage from '@/src/pages/shopify/ShopifyAiToolkitPage'

export const metadata: Metadata = {
  title: 'Shopify AI Toolkit & MCP Server Integrations | Kovil AI',
  description: 'Integrate your storefront with the official Shopify AI Toolkit and custom Model Context Protocol (MCP) servers. Semantically connect catalogs and order pipelines to LLMs.',
  alternates: { canonical: 'https://kovil.ai/shopify/ai-toolkit-integration' },
  keywords: [
    'shopify ai toolkit',
    'shopify ai api',
    'shopify mcp server',
    'model context protocol shopify',
    'shopify ai integration services'
  ]
}

export default function Page() {
  return <ShopifyAiToolkitPage />
}

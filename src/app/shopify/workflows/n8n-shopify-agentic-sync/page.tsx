import type { Metadata } from 'next'
import N8nShopifySyncPage from '@/src/pages/shopify/workflows/N8nShopifySyncPage'

export const metadata: Metadata = {
  title: 'n8n Shopify Agentic Sync Setup & Integration | Kovil AI',
  description: 'Technical blueprint detailing n8n workflows that connect Shopify stores with OpenAI assistants, CrewAI workflows, and Supabase tables.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync' },
  keywords: [
    'n8n shopify automation',
    'n8n agentic workflow shopify',
    'connect shopify open-source ai',
    'n8n supabase shopify integration',
    'ecommerce webhook sync n8n'
  ]
}

export default function Page() {
  return <N8nShopifySyncPage />
}

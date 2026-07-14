import type { Metadata } from 'next'
import ShopifySidekickActionsPage from '@/src/pages/shopify/ShopifySidekickActionsPage'

export const metadata: Metadata = {
  title: 'Custom Shopify Sidekick Actions & Assistant Overrides | Kovil AI',
  description: 'Extend the capabilities of default Shopify Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization.',
  alternates: { canonical: 'https://kovil.ai/shopify/custom-sidekick-actions' },
  keywords: [
    'shopify sidekick custom actions',
    'shopify ai sidekick extension',
    'shopify assistant coding',
    'extend shopify sidekick',
    'custom shopify ai actions'
  ]
}

export default function Page() {
  return <ShopifySidekickActionsPage />
}

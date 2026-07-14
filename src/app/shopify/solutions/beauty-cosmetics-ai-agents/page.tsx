import type { Metadata } from 'next'
import BeautyCosmeticsAiPage from '@/src/pages/shopify/solutions/BeautyCosmeticsAiPage'

export const metadata: Metadata = {
  title: 'Beauty & Cosmetics AI Styling & Recommendation Agents | Kovil AI',
  description: 'Deploy custom conversational beauty agents for skin profiles, shade matching, and custom makeup routines. Deployed within weeks with a 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents' },
  keywords: [
    'beauty ai agent shopify',
    'cosmetics shade matcher ai',
    'skincare recommendation agent',
    'shopify beauty consultant',
    'conversational cosmetic shopify'
  ]
}

export default function Page() {
  return <BeautyCosmeticsAiPage />
}

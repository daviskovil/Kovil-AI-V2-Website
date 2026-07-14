import type { Metadata } from 'next'
import WhatsappAgenticMarketingPage from '@/src/pages/shopify/workflows/WhatsappAgenticMarketingPage'

export const metadata: Metadata = {
  title: 'WhatsApp Agentic Marketing & Checkout Recovery | Kovil AI',
  description: 'Deploy conversational WhatsApp agents to recover abandoned checkouts, recommend catalog matches, and handle support queries dynamically.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing' },
  keywords: [
    'shopify whatsapp automation',
    'whatsapp checkout recovery agent',
    'conversational marketing whatsapp',
    'shopify customer retention whatsapp',
    'automated marketing agent whatsapp'
  ]
}

export default function Page() {
  return <WhatsappAgenticMarketingPage />
}

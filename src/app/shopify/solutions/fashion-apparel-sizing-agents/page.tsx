import type { Metadata } from 'next'
import FashionApparelSizingPage from '@/src/pages/shopify/solutions/FashionApparelSizingPage'

export const metadata: Metadata = {
  title: 'Fashion & Apparel AI Sizing & Styling Agents | Kovil AI',
  description: 'Deploy custom size fit recommendation agents, visual styling assistants, and virtual wardrobe orchestrations for fashion D2C brands.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents' },
  keywords: [
    'fashion sizing agent shopify',
    'apparel fit recommendation ai',
    'styling assistant agent',
    'virtual wardrobe shopify',
    'clothing recommendation ai'
  ]
}

export default function Page() {
  return <FashionApparelSizingPage />
}

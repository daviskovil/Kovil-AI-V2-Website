import type { Metadata } from 'next'
import ShopifyEcommerceAutomationPage from '@/src/pages/shopify/ShopifyEcommerceAutomationPage'

export const metadata: Metadata = {
  title: 'Shopify AI E-Commerce Automation Systems | Kovil AI',
  description: 'Enterprise-tier e-commerce AI automation workflows. Deploy custom autonomous systems for automated returns fraud verification, supply chain sync, and omnichannel marketing.',
  alternates: { canonical: 'https://kovil.ai/shopify/ecommerce-automation-solutions' },
  keywords: [
    'shopify ecommerce automation',
    'ecommerce ai automation',
    'shopify workflow automation',
    'automated returns shopify',
    'custom retail workflow sync'
  ]
}

export default function Page() {
  return <ShopifyEcommerceAutomationPage />
}

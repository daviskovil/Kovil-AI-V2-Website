import type { Metadata } from 'next'
import AutonomousCustomerServicePage from '@/src/pages/shopify/solutions/AutonomousCustomerServicePage'

export const metadata: Metadata = {
  title: 'Autonomous Customer Service AI Agents for Shopify | Kovil AI',
  description: 'Deploy support agents with read/write API access to order tracking, address modification, and return authorization systems. Matched in 48 hours.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/autonomous-customer-service' },
  keywords: [
    'shopify ai customer service',
    'autonomous ecommerce support',
    'gorgias ai agent integration',
    'zendesk shopify agent',
    'automated order tracking agent'
  ]
}

export default function Page() {
  return <AutonomousCustomerServicePage />
}

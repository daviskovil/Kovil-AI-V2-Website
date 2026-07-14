import type { Metadata } from 'next'
import SubscriptionRetentionPage from '@/src/pages/shopify/solutions/SubscriptionRetentionPage'

export const metadata: Metadata = {
  title: 'Subscription D2C Retention & Churn Prevention AI Agents | Kovil AI',
  description: 'Decrease subscription churn with custom retention agents that handle renewal negotiations, box swaps, and cohort analysis autonomously.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents' },
  keywords: [
    'subscription retention agent',
    'd2c subscription churn ai',
    'shopify subscription negotiator',
    'box swap automation',
    'recharge retention agent'
  ]
}

export default function Page() {
  return <SubscriptionRetentionPage />
}

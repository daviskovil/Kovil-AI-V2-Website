import type { Metadata } from 'next'
import ReturnsFraudAssessmentPage from '@/src/pages/shopify/workflows/ReturnsFraudAssessmentPage'

export const metadata: Metadata = {
  title: 'Autonomous Returns Fraud Assessment & Auditing Agent | Kovil AI',
  description: 'Deploy returns auditor agents that check customer history, cross-reference item photos, and dynamically flag risk before processing refunds.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment' },
  keywords: [
    'returns fraud detection shopify',
    'autonomous refund auditor',
    'returns photo analysis ai',
    'shopify returns risk engine',
    'loop returns fraud integration'
  ]
}

export default function Page() {
  return <ReturnsFraudAssessmentPage />
}

import type { Metadata } from 'next'
import RefundsReturnsAutomationPage from '@/src/pages/shopify/workflows/RefundsReturnsAutomationPage'

export const metadata: Metadata = {
  title: 'Automated Refunds & Returns Cancellation Auditor',
  description: 'Deploy returns auditing agents to verify customer order metrics, delivery dates, and return reasons to automatically process replacements or refunds.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/refunds-returns-automation' },
  keywords: [
    'shopify refund returns automation agent',
    'returns cancellation auditor flow',
    'automated support refund checking',
    'shopify delivery status returns verification',
    'automatic order replacement flows',
  ],
  openGraph: {
    type: 'website',
    title: 'Automated Refunds & Returns Cancellation Auditor | Kovil AI',
    description: 'Returns auditing agents to verify customer order metrics, delivery dates, and return reasons to automatically process replacements or refunds.',
    url: 'https://kovil.ai/shopify/workflows/refunds-returns-automation',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Refunds & Returns Cancellation Auditor | Kovil AI',
    description: 'Returns auditing agents to verify customer order metrics, delivery dates, and return reasons to automatically process replacements or refunds.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automated Refunds & Returns Cancellation Auditor',
  description: 'Custom returns and refunds validation workflows analyzing order files, shipment updates, and customer metadata to authorize refunds or generate drafts.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Support & Return Policy Workflows',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <RefundsReturnsAutomationPage />
    </>
  )
}

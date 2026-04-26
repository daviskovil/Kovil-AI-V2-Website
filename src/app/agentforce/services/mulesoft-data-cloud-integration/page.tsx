import type { Metadata } from 'next'
import MulesoftDataCloudIntegrationPage from '@/src/pages/agentforce/services/MulesoftDataCloudIntegrationPage'

export const metadata: Metadata = {
  title: 'MuleSoft & Data Cloud Integration | Kovil AI Agentforce',
  description: 'Connect Agentforce agents to ERP, EHR, payments, and logistics via MuleSoft API connectors and Data Cloud unification. Every agent action grounded in real-time, accurate data.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration' },
  openGraph: {
    type: 'website',
    title: 'MuleSoft & Data Cloud Integration | Kovil AI',
    description: 'Connect Agentforce agents to every enterprise system via MuleSoft and Data Cloud. Real-time data grounding across ERP, EHR, payments, and logistics.',
    url: 'https://kovil.ai/agentforce/services/mulesoft-data-cloud-integration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <MulesoftDataCloudIntegrationPage />
}

import type { Metadata } from 'next'
import DealProcessingPage from '@/src/pages/ai-workflow-automation-library/DealProcessingPage'

export const metadata: Metadata = {
  title: 'Deal Processing Automation — FinTech AI | Kovil AI',
  description: 'Automate deal processing from CRM stage change to signed contract. AI scoring, compliance gates, contract generation, and DocuSign e-signature — all triggered automatically from Salesforce or HubSpot.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/deal-processing-automation' },
  openGraph: {
    type: 'website',
    title: 'Deal Processing Automation — FinTech AI | Kovil AI',
    description: 'CRM-triggered deal automation: AI scoring, risk gates, contract generation, DocuSign e-signature — 85% faster deal closure.',
    url: 'https://kovil.ai/ai-workflow-automation-library/deal-processing-automation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Deal Processing Automation' }],
  },
}

export default function Page() {
  return <div className="pt-20"><DealProcessingPage /></div>
}

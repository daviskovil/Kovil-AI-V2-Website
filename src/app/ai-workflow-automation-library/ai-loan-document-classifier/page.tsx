import type { Metadata } from 'next'
import LoanDocumentClassifierPage from '@/src/pages/ai-workflow-automation-library/LoanDocumentClassifierPage'

export const metadata: Metadata = {
  title: 'AI Loan Document Classifier — FinTech Workflow | Kovil AI',
  description: 'Automate loan document intake with GPT-4o Vision. Classify document types, extract key fields, check completeness, and notify underwriters in under 60 seconds. Build in 2–3 weeks.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier' },
  openGraph: {
    type: 'website',
    title: 'AI Loan Document Classifier — FinTech Workflow | Kovil AI',
    description: 'Classify loan documents, extract fields, check completeness and notify underwriters automatically — GPT-4o Vision + n8n.',
    url: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Loan Document Classifier' }],
  },
}

export default function Page() {
  return <div className="pt-20"><LoanDocumentClassifierPage /></div>
}

import type { Metadata } from 'next'
import KYCAMLPage from '@/src/pages/ai-workflow-automation-library/KYCAMLPage'

export const metadata: Metadata = {
  title: 'KYC/AML Identity Verification Automation — FinTech AI | Kovil AI',
  description: 'Automate KYC/AML identity verification with GPT-4o Vision and AML screening APIs. Extract ID data, screen watchlists, generate risk scores, auto-approve or escalate. Build in 3–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/kyc-aml-identity-verification' },
}

export default function Page() {
  return <div className="pt-20"><KYCAMLPage /></div>
}

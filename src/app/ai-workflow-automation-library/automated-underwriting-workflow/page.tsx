import type { Metadata } from 'next'
import AutomatedUnderwritingPage from '@/src/pages/ai-workflow-automation-library/AutomatedUnderwritingPage'

export const metadata: Metadata = {
  title: 'Automated Underwriting Workflow — FinTech AI | Kovil AI',
  description: 'Automate credit underwriting with AI-driven risk scoring, bureau data integration, and decision engine logic. Reduce manual review time by 70% and approve qualified borrowers in minutes.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow' },
  openGraph: {
    type: 'website',
    title: 'Automated Underwriting Workflow — FinTech AI | Kovil AI',
    description: 'AI-driven underwriting: credit bureau data, risk scoring, decision engine, compliance logging — built and shipped in 4–6 weeks.',
    url: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Automated Underwriting Workflow' }],
  },
}

export default function Page() {
  return <div className="pt-20"><AutomatedUnderwritingPage /></div>
}

import type { Metadata } from 'next'
import AgentforceStrategyReadinessPage from '@/src/pages/agentforce/services/AgentforceStrategyReadinessPage'

export const metadata: Metadata = {
  title: 'Agentforce Strategy & Readiness | Kovil AI Agentforce',
  description: 'Audit your Salesforce org, map your highest-ROI Agentforce opportunities, and receive a prioritised implementation roadmap in 10 days. Start with certainty.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Strategy & Readiness | Kovil AI',
    description: 'Audit your Salesforce org, map your highest-ROI Agentforce opportunities, and receive a prioritised implementation roadmap in 10 days.',
    url: 'https://kovil.ai/agentforce/services/agentforce-strategy-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <AgentforceStrategyReadinessPage />
}

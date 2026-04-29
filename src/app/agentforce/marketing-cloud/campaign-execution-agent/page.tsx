import type { Metadata } from 'next'
import CampaignExecutionAgentPage from '@/src/pages/agentforce/marketing-cloud/CampaignExecutionAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation | Kovil AI',
  description: 'An Agentforce agent that monitors campaign performance in real time, adjusts segment targeting, pauses underperforming journeys, and reallocates budget — without waiting for a weekly review.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Campaign Execution Agent — Autonomous Campaign Optimisation | Kovil AI',
    description: 'An Agentforce agent that monitors campaign performance in real time, adjusts segment targeting, pauses underperforming journeys, and reallocates budget — without waiting for a weekly review.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/campaign-execution-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <CampaignExecutionAgentPage />
}

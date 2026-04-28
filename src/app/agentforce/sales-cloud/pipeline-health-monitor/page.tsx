import type { Metadata } from 'next'
import PipelineHealthMonitorPage from '@/src/pages/agentforce/sales-cloud/PipelineHealthMonitorPage'

export const metadata: Metadata = {
  title: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI | Kovil AI',
  description: 'An Agentforce agent that monitors every open opportunity for stall signals, auto-drafts rep follow-ups, updates stages, and alerts on deal risk — before deals slip.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI | Kovil AI',
    description: 'An Agentforce agent that monitors every open opportunity for stall signals, auto-drafts rep follow-ups, updates stages, and alerts on deal risk — before deals slip.',
    url: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <PipelineHealthMonitorPage />
}

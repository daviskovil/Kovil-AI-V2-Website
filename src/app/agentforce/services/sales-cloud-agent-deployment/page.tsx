import type { Metadata } from 'next'
import SalesCloudAgentDeploymentPage from '@/src/pages/agentforce/services/SalesCloudAgentDeploymentPage'

export const metadata: Metadata = {
  title: 'Sales Cloud Agent Deployment | Kovil AI Agentforce',
  description: 'Deploy Agentforce SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls autonomously inside your Sales Cloud org.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment' },
  openGraph: {
    type: 'website',
    title: 'Sales Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce SDR agents that qualify leads, handle objections, and book discovery calls autonomously inside your Sales Cloud org.',
    url: 'https://kovil.ai/agentforce/services/sales-cloud-agent-deployment',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <SalesCloudAgentDeploymentPage />
}

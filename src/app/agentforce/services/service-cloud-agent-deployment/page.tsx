import type { Metadata } from 'next'
import ServiceCloudAgentDeploymentPage from '@/src/pages/agentforce/services/ServiceCloudAgentDeploymentPage'

export const metadata: Metadata = {
  title: 'Service Cloud Agent Deployment | Kovil AI Agentforce',
  description: 'Deploy Agentforce service agents that resolve L1 and L2 support cases autonomously — refunds, troubleshooting, order status — with intelligent human escalation and CSAT safeguards.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment' },
  openGraph: {
    type: 'website',
    title: 'Service Cloud Agent Deployment | Kovil AI',
    description: 'Agentforce service agents that resolve L1 and L2 support cases autonomously with full account context and intelligent human escalation.',
    url: 'https://kovil.ai/agentforce/services/service-cloud-agent-deployment',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <ServiceCloudAgentDeploymentPage />
}

import type { Metadata } from 'next'
import AutonomousCaseResolutionPage from '@/src/pages/agentforce/service-cloud/AutonomousCaseResolutionPage'

export const metadata: Metadata = {
  title: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
  description: 'Deploy a Salesforce Agentforce agent that resolves Tier 1 and Tier 2 cases autonomously — refunds, rescheduling, order status, troubleshooting — with live account context and 65%+ resolution rates.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Autonomous Case Resolution — AI-Powered L1/L2 Support | Kovil AI',
    description: 'Deploy a Salesforce Agentforce agent that resolves Tier 1 and Tier 2 cases autonomously — refunds, rescheduling, order status, troubleshooting — with live account context and 65%+ resolution rates.',
    url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <AutonomousCaseResolutionPage />
}

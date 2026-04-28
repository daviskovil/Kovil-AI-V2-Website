import type { Metadata } from 'next'
import IntelligentEscalationPage from '@/src/pages/agentforce/service-cloud/IntelligentEscalationPage'

export const metadata: Metadata = {
  title: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading | Kovil AI',
  description: 'An Agentforce agent that detects case complexity, SLA risk, and customer sentiment — routing to the right human agent with full context pre-loaded and zero re-explanation needed.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Intelligent Escalation — AI-Powered Case Routing & Context Pre-loading | Kovil AI',
    description: 'An Agentforce agent that detects case complexity, SLA risk, and customer sentiment — routing to the right human agent with full context pre-loaded and zero re-explanation needed.',
    url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <IntelligentEscalationPage />
}

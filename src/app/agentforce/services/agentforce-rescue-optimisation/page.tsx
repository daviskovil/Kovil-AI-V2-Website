import type { Metadata } from 'next'
import AgentforceRescueOptimisationPage from '@/src/pages/agentforce/services/AgentforceRescueOptimisationPage'

export const metadata: Metadata = {
  title: 'Agentforce Rescue & Optimisation | Kovil AI Agentforce',
  description: 'Failing Agentforce deployment? We diagnose hallucinating agents, broken Trust Layer guardrails, and integration failures — restoring measurable performance in a 2-week sprint.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Rescue & Optimisation | Kovil AI',
    description: 'We diagnose and fix failing Agentforce deployments — hallucinating agents, broken guardrails, integration failures — measurable improvement in 2 weeks.',
    url: 'https://kovil.ai/agentforce/services/agentforce-rescue-optimisation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <AgentforceRescueOptimisationPage />
}

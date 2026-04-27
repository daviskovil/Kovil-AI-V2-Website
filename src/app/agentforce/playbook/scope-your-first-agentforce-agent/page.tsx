import type { Metadata } from 'next'
import ScopeYourFirstAgentPage from '@/src/pages/agentforce/playbook/ScopeYourFirstAgentPage'

export const metadata: Metadata = {
  title: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist | Kovil AI',
  description: 'Most Agentforce implementations fail at scoping — not at configuration. The 12 questions every implementation team must answer before touching Agent Builder.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent' },
  openGraph: {
    type: 'article',
    title: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist',
    description: 'Most Agentforce implementations fail at scoping — not at configuration. The 12 questions every implementation team must answer before touching Agent Builder.',
    url: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <ScopeYourFirstAgentPage />
}

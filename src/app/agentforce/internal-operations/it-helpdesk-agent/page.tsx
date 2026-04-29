import type { Metadata } from 'next'
import ITHelpdeskAgentPage from '@/src/pages/agentforce/internal-operations/ITHelpdeskAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
  description: 'An Agentforce agent that resolves common IT requests autonomously — credential resets, software access, hardware triage — without L1 human touch, while routing complex issues to the right engineer.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
    description: 'An Agentforce agent that resolves common IT requests autonomously — credential resets, software access, hardware triage — without L1 human touch, while routing complex issues to the right engineer.',
    url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <ITHelpdeskAgentPage />
}

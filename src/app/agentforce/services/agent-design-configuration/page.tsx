import type { Metadata } from 'next'
import AgentDesignConfigurationPage from '@/src/pages/agentforce/services/AgentDesignConfigurationPage'

export const metadata: Metadata = {
  title: 'Agent Design & Configuration | Kovil AI Agentforce',
  description: 'Bespoke Agentforce agent design using Agent Builder, Prompt Builder, and Flow. Topics, Actions, guardrails, and Trust Layer configured precisely to your business logic.',
  alternates: { canonical: 'https://kovil.ai/agentforce/services/agent-design-configuration' },
  openGraph: {
    type: 'website',
    title: 'Agent Design & Configuration | Kovil AI',
    description: 'Bespoke Agentforce agent design using Agent Builder, Prompt Builder, and Flow. Scoped precisely to your workflows and data.',
    url: 'https://kovil.ai/agentforce/services/agent-design-configuration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <AgentDesignConfigurationPage />
}

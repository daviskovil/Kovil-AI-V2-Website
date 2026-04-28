import type { Metadata } from 'next'
import KnowledgeBaseAgentPage from '@/src/pages/agentforce/service-cloud/KnowledgeBaseAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection | Kovil AI',
  description: 'An Agentforce agent that surfaces relevant knowledge articles during case resolution, suggests content gaps based on unresolved cases, and updates documentation from resolved case patterns.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection | Kovil AI',
    description: 'An Agentforce agent that surfaces relevant knowledge articles during case resolution, suggests content gaps based on unresolved cases, and updates documentation from resolved case patterns.',
    url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <KnowledgeBaseAgentPage />
}

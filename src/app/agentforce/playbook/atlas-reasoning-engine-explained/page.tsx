import type { Metadata } from 'next'
import AtlasReasoningEnginePage from '@/src/pages/agentforce/playbook/AtlasReasoningEnginePage'

export const metadata: Metadata = {
  title: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think | Kovil AI',
  description: 'Agentforce isn\'t a chatbot. Understanding how Atlas reasons, plans, and executes is essential for anyone building production agents — here\'s what\'s actually happening under the hood.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained' },
  openGraph: {
    type: 'article',
    title: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think',
    description: 'Agentforce isn\'t a chatbot. Understanding how Atlas reasons, plans, and executes is essential for anyone building production agents.',
    url: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <AtlasReasoningEnginePage />
}

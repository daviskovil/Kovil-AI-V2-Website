import type { Metadata } from 'next'
import LeadNurtureAgentPage from '@/src/pages/agentforce/marketing-cloud/LeadNurtureAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences | Kovil AI',
  description: 'An Agentforce agent that delivers personalised content sequences based on individual engagement signals, intent data, and CRM history — adapting each lead\'s journey in real time.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Lead Nurture Agent — AI-Personalised Nurture Sequences | Kovil AI',
    description: 'An Agentforce agent that delivers personalised content sequences based on individual engagement signals, intent data, and CRM history — adapting each lead\'s journey in real time.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/lead-nurture-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <LeadNurtureAgentPage />
}

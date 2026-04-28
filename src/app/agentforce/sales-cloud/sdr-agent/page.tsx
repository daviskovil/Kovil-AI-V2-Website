import type { Metadata } from 'next'
import SDRAgentPage from '@/src/pages/agentforce/sales-cloud/SDRAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach | Kovil AI',
  description: 'Deploy a Salesforce Agentforce SDR agent that qualifies inbound leads, sends personalised outreach, handles objections, and books meetings — autonomously, 24/7, inside your Sales Cloud org.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce SDR Agent — Autonomous Lead Qualification & Outreach | Kovil AI',
    description: 'Deploy a Salesforce Agentforce SDR agent that qualifies inbound leads, sends personalised outreach, handles objections, and books meetings — autonomously, 24/7, inside your Sales Cloud org.',
    url: 'https://kovil.ai/agentforce/sales-cloud/sdr-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <SDRAgentPage />
}

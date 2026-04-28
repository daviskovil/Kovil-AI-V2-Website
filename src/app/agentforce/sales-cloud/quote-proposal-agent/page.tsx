import type { Metadata } from 'next'
import QuoteProposalAgentPage from '@/src/pages/agentforce/sales-cloud/QuoteProposalAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation | Kovil AI',
  description: 'An Agentforce agent that pulls CPQ product data, drafts personalised proposals, routes for approval, and sends to prospects — without rep intervention.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation | Kovil AI',
    description: 'An Agentforce agent that pulls CPQ product data, drafts personalised proposals, routes for approval, and sends to prospects — without rep intervention.',
    url: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <QuoteProposalAgentPage />
}

import type { Metadata } from 'next'
import SmartBiddingPage from '@/src/pages/ai-workflow-automation-library/SmartBiddingPage'

export const metadata: Metadata = {
  title: 'Smart Bidding Architecture & Algorithmic Media Buying — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds a smart bidding system: deep-funnel conversion events → Meta + Google algorithm training → n8n pulls CPA data every 4 hours → GPT-4o anomaly alerts → Looker Studio dashboard. Average ROAS improvement +40%.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/smart-bidding-algorithmic-media-buying' },
  openGraph: {
    type: 'website',
    title: 'Smart Bidding Architecture & Algorithmic Media Buying | Kovil AI',
    description: 'Deep-funnel conversion events → Meta + Google algorithms → 4-hour CPA analysis → GPT-4o anomaly alerts → client dashboard. Average ROAS +40%.',
    url: 'https://kovil.ai/ai-workflow-automation-library/smart-bidding-algorithmic-media-buying',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Bidding Architecture & Algorithmic Media Buying | Kovil AI',
    description: 'Deep-funnel conversion tracking + real-time CPA monitoring + GPT-4o anomaly alerts + Looker Studio dashboard. ROAS +40%.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Smart Bidding Architecture & Algorithmic Media Buying',
  description: 'An automated media buying system that wires deep-funnel conversion events to Meta and Google algorithms, pulls real-time CPA data every 4 hours, uses GPT-4o to flag threshold breaches, and delivers a live Looker Studio dashboard.',
  totalTime: 'PT4H',
  tool: ['Meta Ads API', 'Google Ads API', 'n8n', 'GPT-4o', 'Looker Studio', 'Slack'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Deep-funnel conversion tracking', text: 'Server-side conversion tracking implemented via Meta Conversions API and Google Enhanced Conversions — wiring purchases, qualified leads, and calls to both platforms to train native bidding algorithms on high-quality signals.' },
    { '@type': 'HowToStep', position: 2, name: '4-hour performance data pull', text: 'n8n runs every 4 hours calling both Meta Ads API and Google Ads API, pulling spend, impressions, clicks, conversions, CPR, and ROAS per ad set into a unified cross-platform data schema.' },
    { '@type': 'HowToStep', position: 3, name: 'GPT-4o CPA analysis and flagging', text: 'GPT-4o compares every active ad set against the target CPA. Ad sets spending more than 20% above target are flagged with specific action recommendations.' },
    { '@type': 'HowToStep', position: 4, name: 'Meta AI Business Assistant CRO recommendations', text: 'Integration with Meta AI Business Assistant surfaces creative CRO opportunities based on hook rates, watch times, and CTA click rates. Recommendations logged as a creative testing backlog.' },
    { '@type': 'HowToStep', position: 5, name: 'Real-time Slack anomaly alerts', text: 'When GPT-4o flags a CPA breach or budget overrun, n8n immediately sends a structured Slack alert with ad set name, current CPR, target CPR, overspend amount, and recommended action.' },
    { '@type': 'HowToStep', position: 6, name: 'Looker Studio auto-refresh dashboard', text: 'A Looker Studio dashboard refreshes on the same 4-hour cadence showing ROAS by campaign, CPA trends, CVR by device, spend pacing, and 7-day summary — client-accessible via private link.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Smart Bidding Architecture & Algorithmic Media Buying', item: 'https://kovil.ai/ai-workflow-automation-library/smart-bidding-algorithmic-media-buying' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <SmartBiddingPage />
      </div>
    </>
  )
}

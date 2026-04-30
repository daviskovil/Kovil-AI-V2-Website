import type { Metadata } from 'next'
import PipelineHealthMonitorPage from '@/src/pages/agentforce/sales-cloud/PipelineHealthMonitorPage'

export const metadata: Metadata = {
  title: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI | Kovil AI',
  description: 'Agentforce pipeline health monitor that scans every open opportunity 24/7, detects stall signals before deals slip, auto-drafts rep follow-ups, and alerts on deal risk inside Salesforce Sales Cloud.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor' },
  keywords: [
    'Agentforce pipeline monitor',
    'Salesforce deal risk AI',
    'Agentforce Sales Cloud pipeline',
    'AI deal stall detection Salesforce',
    'Agentforce pipeline health',
    'Salesforce AI deal scoring',
    'Agentforce deal risk agent',
    'Salesforce pipeline health automation',
    'Einstein opportunity scoring Agentforce',
    'Agentforce stall detection',
    'Salesforce pipeline review automation',
    'deal risk monitoring Salesforce',
    'Agentforce implementation',
    'Salesforce AI sales pipeline',
    'Kovil AI Agentforce',
    'Agentforce Sales Cloud',
    'Salesforce forecast accuracy AI',
    'pipeline stall automation Salesforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI | Kovil AI',
    description: 'Agentforce pipeline health monitor that scans every open opportunity 24/7, detects stall signals before deals slip, auto-drafts rep follow-ups, and alerts on deal risk inside Salesforce Sales Cloud.',
    url: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI | Kovil AI',
    description: 'Agentforce pipeline health monitor that scans every open opportunity 24/7, detects stall signals before deals slip, auto-drafts rep follow-ups, and alerts on deal risk inside Salesforce Sales Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Pipeline Health Monitor — Stall Detection & Deal Risk AI',
  description: 'Agentforce pipeline health monitor that scans every open opportunity 24/7, detects stall signals before deals slip, auto-drafts rep follow-ups, and alerts on deal risk inside Salesforce Sales Cloud.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor',
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price 3-week sprint with 2-week risk-free pilot',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What counts as a 'stall' signal?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Stall criteria are configured per client during Week 1. Typical criteria: no email activity for X days (configurable per deal stage), no meeting logged in Y days, close date passed without update, stage age exceeding the pipeline benchmark for that stage, and contact engagement depth below multi-thread threshold. The agent cross-checks against Data Cloud signals — a prospect who is still opening emails is not treated the same as one who has gone dark. You control every threshold.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can it update Salesforce stages automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — for forward movement (stage advancement where evidence exists). We configure the conditions carefully with you during implementation. Backward stage movement (where a deal stalls in a late stage) requires manager review before the change is written. All automated updates are tagged with an 'Agentforce: automated' marker on the Activity record, so reps and managers always know what the agent did vs what a human did.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Slack integration work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure a Salesforce Flow that calls a Slack webhook when the agent flags a high-risk deal. The Slack message includes: deal name, size, rep name, days stalled, Einstein risk score, and a direct link to the Salesforce opportunity. We set up a dedicated #pipeline-alerts channel or use your existing sales Slack channels — your choice. Weekly digests are sent as a summary message on Monday morning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will this replace our weekly pipeline review meetings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It replaces the part of pipeline reviews where everyone is manually identifying what moved, what stalled, and what needs action. That work is done automatically before the meeting. Pipeline reviews become about strategy and deal coaching — not data archaeology. Most clients find their pipeline review time drops from 90 minutes to 30 minutes within the first month.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Sales Cloud', item: 'https://kovil.ai/agentforce/sales-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Pipeline Health Monitor', item: 'https://kovil.ai/agentforce/sales-cloud/pipeline-health-monitor' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PipelineHealthMonitorPage />
    </>
  )
}

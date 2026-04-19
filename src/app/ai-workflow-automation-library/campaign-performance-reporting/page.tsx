import type { Metadata } from 'next'
import CampaignReportingPage from '@/src/pages/ai-workflow-automation-library/CampaignReportingPage'

export const metadata: Metadata = {
  title: 'Campaign Performance Reporting Automation — AI Workflow | Kovil AI',
  description: 'See how Kovil AI automates weekly campaign reporting: n8n pulls live data from Meta, Google Ads & LinkedIn, GPT-4o writes the narrative, Google Slides builds the deck, Gmail emails the client — every Monday at 8am.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/campaign-performance-reporting' },
  keywords: [
    'campaign reporting automation',
    'n8n marketing automation',
    'GPT-4o ad reporting',
    'automated weekly report',
    'Meta Ads reporting automation',
    'Google Ads AI report',
    'marketing agency automation',
    'AI workflow automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Campaign Performance Reporting Automation | Kovil AI',
    description: 'n8n + GPT-4o workflow that pulls Meta, Google & LinkedIn ad data and auto-builds a branded slide report every Monday.',
    url: 'https://kovil.ai/ai-workflow-automation-library/campaign-performance-reporting',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Campaign Performance Reporting Automation with n8n and GPT-4o',
  description: 'An automated workflow that pulls campaign data from Meta Ads, Google Ads and LinkedIn, analyses it with GPT-4o, generates a Google Slides report and emails it to clients every Monday.',
  totalTime: 'PT2M',
  tool: ['n8n', 'GPT-4o', 'Meta Ads API', 'Google Ads API', 'LinkedIn API', 'Google Slides API', 'Gmail API', 'Slack'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Cron trigger fires', text: 'n8n Schedule node triggers every Monday at 8am in the client timezone.' },
    { '@type': 'HowToStep', position: 2, name: 'Pull ad data', text: 'Three parallel HTTP nodes pull 7-day metrics from Meta Ads API, Google Ads API and LinkedIn Marketing API.' },
    { '@type': 'HowToStep', position: 3, name: 'Merge and normalise', text: 'n8n Merge node combines all data; a JavaScript Function node normalises field names and currency.' },
    { '@type': 'HowToStep', position: 4, name: 'GPT-4o analysis', text: 'OpenAI GPT-4o analyses the dataset and returns top performers, anomalies and recommendations as structured JSON.' },
    { '@type': 'HowToStep', position: 5, name: 'Build Google Slides report', text: 'Google Slides API clones a master template and populates 5 slides with metrics and GPT-4o insights.' },
    { '@type': 'HowToStep', position: 6, name: 'Email to client', text: 'Gmail API sends a branded HTML email with the PDF report attached.' },
    { '@type': 'HowToStep', position: 7, name: 'Slack team update', text: 'Slack webhook posts headline metrics and report link to the internal #weekly-reports channel.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Campaign Performance Reporting', item: 'https://kovil.ai/ai-workflow-automation-library/campaign-performance-reporting' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <CampaignReportingPage />
      </div>
    </>
  )
}

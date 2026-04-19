import type { Metadata } from 'next'
import AMBriefReportingPage from '@/src/pages/ai-workflow-automation-library/AMBriefReportingPage'

export const metadata: Metadata = {
  title: 'Automated AM Briefs & Client Reporting — n8n + GPT-4o Workflow | Kovil AI',
  description: 'See how Kovil AI automates weekly client reporting and daily AM briefs: GA4 + ad platform data → GPT-4o drafts narratives → Google Slides report built automatically → Gmail to client, Slack brief to each Account Manager.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/automated-am-briefs-client-reporting' },
  openGraph: {
    type: 'website',
    title: 'Automated AM Briefs & Client Reporting | Kovil AI',
    description: 'GA4 + Meta + Google Ads → GPT-4o → Google Slides client report + personalised daily Slack brief per Account Manager. 8 hours saved per week.',
    url: 'https://kovil.ai/ai-workflow-automation-library/automated-am-briefs-client-reporting',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Automated AM Briefs & Client Reporting with GA4, GPT-4o and Google Slides',
  description: 'An automated workflow that pulls live data from GA4 and ad platforms, uses GPT-4o to draft weekly client report narratives, builds a Google Slides deck automatically, delivers it via Gmail, and pushes a personalised daily brief to each Account Manager via Slack.',
  totalTime: 'PT2M',
  tool: ['Google Analytics 4 API', 'Meta Ads API', 'Google Ads API', 'GPT-4o', 'n8n', 'Google Slides API', 'Gmail API', 'Slack'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Cron trigger fires at 7am', text: "n8n Schedule node fires at 7am in the agency's timezone. Two conditional paths execute: daily AM brief path (runs every day) and weekly client report path (runs on Mondays only)." },
    { '@type': 'HowToStep', position: 2, name: 'GA4 pulls analytics data', text: 'n8n calls the GA4 Data API with a service account to retrieve 7-day traffic data: sessions, conversions, revenue, and bounce rate by channel and landing page.' },
    { '@type': 'HowToStep', position: 3, name: 'Ad platform data pulled in parallel', text: 'Three HTTP Request nodes run simultaneously: Meta Marketing API, Google Ads API, and LinkedIn Marketing API return campaign-level spend, ROAS, clicks, and conversions.' },
    { '@type': 'HowToStep', position: 4, name: 'GPT-4o drafts client report and AM brief', text: 'Two GPT-4o calls run in parallel: one generates a 400-word client performance narrative with anomalies and recommendations; the other generates a personalised 5-bullet daily brief for each Account Manager.' },
    { '@type': 'HowToStep', position: 5, name: 'Google Slides deck built automatically', text: "Google Slides API clones the agency's master template, populates all slides with data and GPT-4o narrative, and exports as PDF." },
    { '@type': 'HowToStep', position: 6, name: 'Client gets report, AMs get brief', text: 'Gmail API sends the branded report email with PDF attachment to each client. Slack posts a personalised daily brief to each AM via DM — scoped strictly to their own client portfolio.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Automated AM Briefs & Client Reporting', item: 'https://kovil.ai/ai-workflow-automation-library/automated-am-briefs-client-reporting' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <AMBriefReportingPage />
      </div>
    </>
  )
}

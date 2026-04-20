import type { Metadata } from 'next'
import SEOFoundationPage from '@/src/pages/ai-workflow-automation-library/SEOFoundationPage'

export const metadata: Metadata = {
  title: 'Automated SEO Foundation & Backlink Syndication — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds an automated SEO foundation: client intake → Airtable → n8n syndicates to 50+ directories via BrightLocal → GSC pulls weekly rank data → personalized client reports auto-delivered. 30 clients managed by 2 staff.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/automated-seo-foundation-backlink-syndication' },
  openGraph: {
    type: 'website',
    title: 'Automated SEO Foundation & Backlink Syndication | Kovil AI',
    description: 'Client intake → Airtable → n8n syndicates to 50+ directories → GSC rank data → auto-delivered client reports. 30 clients, 2 staff, zero manual reporting time.',
    url: 'https://kovil.ai/ai-workflow-automation-library/automated-seo-foundation-backlink-syndication',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated SEO Foundation & Backlink Syndication | Kovil AI',
    description: 'Client intake → Airtable → n8n syndicates to 50+ directories → GSC rank data → auto-delivered client reports.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Automated SEO Foundation & Backlink Syndication',
  description: 'An automated workflow that captures client onboarding data into Airtable, uses n8n to syndicate NAP data to 50+ citation directories via BrightLocal, pulls weekly rank data from Google Search Console, and auto-delivers personalized client reports.',
  totalTime: 'PT10M',
  tool: ['Airtable', 'n8n', 'BrightLocal', 'Google Search Console', 'GPT-4o', 'Slack'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Client intake to Airtable', text: 'Client onboarding form data is captured and normalized into an Airtable database — the single source of truth for all downstream syndication and reporting.' },
    { '@type': 'HowToStep', position: 2, name: 'BrightLocal citation syndication', text: 'n8n reads Airtable and pushes client NAP data to BrightLocal for directory submission across 50+ citation sources including Google Business Profile, Bing Places, Apple Maps, Yelp, and industry-specific directories.' },
    { '@type': 'HowToStep', position: 3, name: 'Content syndication', text: 'A parallel n8n workflow distributes NAP-consistent content across web properties. GPT-4o generates business descriptions in multiple formats, maintaining canonical NAP data consistency.' },
    { '@type': 'HowToStep', position: 4, name: 'GSC rank data pull', text: 'Every week, n8n calls the Google Search Console API for each client — pulling indexed pages, click and impression data, average position changes, and any coverage errors.' },
    { '@type': 'HowToStep', position: 5, name: 'GPT-4o report narratives', text: 'GPT-4o drafts personalized rank improvement summaries per client, explaining changes in plain English and recommending 2–3 specific next actions based on the GSC data.' },
    { '@type': 'HowToStep', position: 6, name: 'Auto-delivered client report', text: 'n8n assembles the final report with GSC data tables, citation status, and the GPT-4o narrative, then delivers it to the client via branded email every Monday — zero human time.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Automated SEO Foundation & Backlink Syndication', item: 'https://kovil.ai/ai-workflow-automation-library/automated-seo-foundation-backlink-syndication' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <SEOFoundationPage />
      </div>
    </>
  )
}

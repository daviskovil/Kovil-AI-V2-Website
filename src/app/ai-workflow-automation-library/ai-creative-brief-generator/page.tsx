import type { Metadata } from 'next'
import CreativeBriefPage from '@/src/pages/ai-workflow-automation-library/CreativeBriefPage'

export const metadata: Metadata = {
  title: 'AI Creative Brief Generator — n8n + GPT-4o Workflow | Kovil AI',
  description: 'See how Kovil AI automates creative brief generation: Typeform intake → Notion brand context → GPT-4o writes the brief → Slack approval gate → Gmail delivery. Under 45 seconds, zero copy-paste.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator' },
  openGraph: {
    type: 'website',
    title: 'AI Creative Brief Generator | Kovil AI',
    description: 'Typeform intake → Notion brand context → GPT-4o writes the brief → Slack approval → Gmail delivery. Under 45 seconds.',
    url: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'AI Creative Brief Generator with Typeform, Notion and GPT-4o',
  description: 'An automated workflow that captures client intake via Typeform, pulls brand guidelines from Notion, generates a structured creative brief with GPT-4o, routes it through a Slack approval gate, and delivers it via Gmail.',
  totalTime: 'PT45S',
  tool: ['Typeform', 'Notion API', 'GPT-4o', 'Slack Block Kit', 'Gmail API', 'n8n'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Client submits intake form', text: 'A custom Typeform captures campaign objective, target audience, tone of voice, deliverables and timeline. A webhook fires instantly to n8n on submission.' },
    { '@type': 'HowToStep', position: 2, name: 'Fetch brand guidelines from Notion', text: "n8n calls the Notion API to retrieve the client's brand guidelines page and last 3 approved briefs for GPT-4o context." },
    { '@type': 'HowToStep', position: 3, name: 'GPT-4o writes structured brief', text: 'A prompt sends Typeform data + Notion context to GPT-4o, which outputs a fully structured creative brief in Markdown as structured JSON.' },
    { '@type': 'HowToStep', position: 4, name: 'Slack approval gate', text: "The brief is posted to a private Slack channel with Approve and Request Revision buttons via Slack's Block Kit interactive components." },
    { '@type': 'HowToStep', position: 5, name: 'Brief delivered and archived', text: 'On approval, Gmail API emails the brief to creative team leads and n8n creates a Notion page to archive it automatically.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'AI Creative Brief Generator', item: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <CreativeBriefPage />
      </div>
    </>
  )
}

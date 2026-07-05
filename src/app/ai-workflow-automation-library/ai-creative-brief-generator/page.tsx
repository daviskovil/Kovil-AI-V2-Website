import type { Metadata } from 'next'
import CreativeBriefPage from '@/src/pages/ai-workflow-automation-library/CreativeBriefPage'

export const metadata: Metadata = {
  title: 'AI Creative Brief Generator — GPT-4o Workflow',
  description: 'See how Kovil AI automates creative brief generation: Typeform intake → Notion brand context → GPT-4o writes the brief → Slack approval gate → Gmail delivery. Under 45 seconds, zero copy-paste.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator' },
  robots: { index: true, follow: true },
  keywords: [
    'AI creative brief generator',
    'automated creative brief',
    'GPT-4o brief writing',
    'marketing agency automation',
    'Typeform to Notion workflow',
    'n8n creative workflow',
    'AI brief automation',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Creative Brief Generator — GPT-4o Workflow | Kovil AI',
    description: 'Typeform intake → Notion brand context → GPT-4o structured brief → Slack approval → Gmail delivery. Under 45 seconds.',
    url: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Creative Brief Generator — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Creative Brief Generator — GPT-4o Workflow | Kovil AI',
    description: 'Typeform intake → Notion brand context → GPT-4o structured brief → Slack approval → Gmail delivery. Under 45 seconds.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'AI Creative Brief Generator with Typeform, Notion and GPT-4o',
  description: 'An automated workflow that captures client intake via Typeform, pulls brand guidelines from Notion, generates a structured creative brief with GPT-4o, routes it through a Slack approval gate, and delivers it via Gmail.',
  totalTime: 'PT45S',
  dateModified: '2025-04-21',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does GPT-4o maintain brand voice in the generated brief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The workflow pulls the client's existing brand guidelines and the last three approved briefs from Notion before each GPT-4o call. This context is passed directly into the system prompt, allowing GPT-4o to match tone, vocabulary, and structural preferences that are specific to each client — not a generic output.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the creative team wants to revise the brief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Slack approval gate has two buttons: Approve and Request Revision. Clicking Request Revision opens a Slack modal where the reviewer types specific feedback. n8n sends that feedback back to GPT-4o, which regenerates the relevant sections and resubmits for approval — without restarting the full workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this handle briefs for multiple clients with different brand voices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Each client has their own Notion brand guidelines page and brief archive. The workflow uses the HubSpot deal or Typeform client identifier to route to the correct Notion pages before generating the brief.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the full brief generation take end-to-end?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Typeform submission to brief appearing in the Slack approval channel takes under 45 seconds. GPT-4o generation typically takes 8–12 seconds. The remainder is Notion API fetch time and Slack message formatting.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Creative Brief Generator',
  description: 'Automated creative brief generation workflow using Typeform, Notion, and GPT-4o to produce structured briefs with a Slack approval gate in under 45 seconds.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/ai-creative-brief-generator',
  category: 'Ad & Marketing',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20">
        <CreativeBriefPage />
      </div>
    </>
  )
}

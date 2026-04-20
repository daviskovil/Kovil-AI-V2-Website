import type { Metadata } from 'next'
import HybridContentPage from '@/src/pages/ai-workflow-automation-library/HybridContentPage'

export const metadata: Metadata = {
  title: 'Deep SERP-First Hybrid Content Generation — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds a hybrid content pipeline: target keyword → Perplexity maps top 10 SERP → information gap analysis → brand-voice GPT-4o draft → 15-minute human review → CMS publish. 90% drafting time saved.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation' },
  openGraph: {
    type: 'website',
    title: 'Deep SERP-First Hybrid Content Generation | Kovil AI',
    description: 'Keyword → Perplexity SERP analysis → gap mapping → GPT-4o brand-voice draft → 15-min human review → publish. 90% drafting time saved. Ranks vs. generic AI content.',
    url: 'https://kovil.ai/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep SERP-First Hybrid Content Generation | Kovil AI',
    description: 'Perplexity SERP analysis + gap mapping + GPT-4o drafting + 15-min human review. 90% drafting time saved.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Deep SERP-First Hybrid Content Generation',
  description: 'A content production pipeline that uses Perplexity API to analyze top 10 SERP results, identifies information gaps competitors miss, generates brand-voice drafts with GPT-4o, and routes to human review for anecdote injection before CMS publishing.',
  totalTime: 'PT2H',
  tool: ['Perplexity API', 'GPT-4o', 'n8n', 'Notion', 'Google Search Console', 'Surfer SEO'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Keyword submission', text: 'Target keyword submitted via Notion content calendar entry or Slack slash command. n8n webhook captures keyword, target URL, tone instructions, and brand-specific requirements.' },
    { '@type': 'HowToStep', position: 2, name: 'Perplexity SERP analysis', text: 'Perplexity API analyzes top 10 ranking pages, extracting H2 structures, word counts, content formats, and subtopics covered. Returns structured JSON replacing 45-60 minutes of manual SERP analysis.' },
    { '@type': 'HowToStep', position: 3, name: 'Information gap analysis', text: 'GPT-4o identifies subtopics appearing in fewer than 3 of the top 10 results — unique differentiation angles the client can own. Also flags over-represented topics with low differentiation value.' },
    { '@type': 'HowToStep', position: 4, name: 'GPT-4o brand-voice draft', text: 'GPT-4o receives brand voice guide (from Notion), human-written seed paragraphs, and the gap map. Outputs a structured draft with all H2s covering gap topics — a scaffold for human review.' },
    { '@type': 'HowToStep', position: 5, name: 'Human 10% review', text: 'Strategist spends 15-25 minutes: injecting specific anecdotes, verifying statistics, adding internal links, and adjusting tone in 2-3 sections. Produces genuinely differentiated content.' },
    { '@type': 'HowToStep', position: 6, name: 'CMS publish and GSC indexing', text: 'Article pushed to CMS via API. Internal links mapped. GPT-4o generates meta title and description. Google Search Console URL inspection API called to submit URL for indexing.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Deep SERP-First Hybrid Content Generation', item: 'https://kovil.ai/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <HybridContentPage />
      </div>
    </>
  )
}

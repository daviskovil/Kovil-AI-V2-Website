import type { Metadata } from 'next'
import HybridContentPage from '@/src/pages/ai-workflow-automation-library/HybridContentPage'

export const metadata: Metadata = {
  title: 'SERP-First Hybrid Content Generation | Kovil AI',
  description: 'See how Kovil AI builds a hybrid content pipeline: target keyword → Perplexity maps top 10 SERP → information gap analysis → brand-voice GPT-4o draft → 15-minute human review → CMS publish. 90% drafting time saved.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation' },
  robots: { index: true, follow: true },
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
  dateModified: '2025-04-21',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does AI-only content fail to rank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Generic AI content fails to rank because it lacks the E-E-A-T signals Google's ranking systems reward: Experience (first-hand accounts), Expertise (depth beyond surface summaries), Authoritativeness (original perspectives), and Trustworthiness (verifiable data). AI models trained on public data produce content that mirrors what already ranks — creating a more polished version of existing content rather than something differentiated. Google's spam detection systems are specifically trained to identify and suppress this pattern.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 90/10 rule in this workflow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI handles 90% of the work: SERP research, competitor structure mapping, information gap identification, H2 scaffolding, and first-draft writing. Human strategists handle 10%: injecting first-hand anecdotes, verifying statistics against primary sources, adding nuanced internal links, and adjusting 2–3 sections that need a genuine human voice. This ratio produces content that scales economically while maintaining the differentiation signals that rank.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Perplexity API analyse the top 10 SERP results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Perplexity API call is structured to return a structured analysis of the top 10 ranking pages for the target keyword: each page\'s H2 structure, approximate word count, content format (listicle, guide, comparison), and subtopics covered. n8n then runs a frequency analysis across all 10 results to identify which subtopics appear in fewer than 3 results — these are the information gaps worth targeting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the full workflow take from keyword to published article?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The automated portion — SERP analysis, gap mapping, and GPT-4o draft generation — takes 8–12 minutes. Human review and anecdote injection takes 15–25 minutes. CMS publishing and GSC indexing submission takes under 2 minutes via API. Total time from keyword submission to live published article: under 45 minutes.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SERP-First Hybrid Content Generation',
  description: 'Hybrid content pipeline using Perplexity API for SERP analysis, GPT-4o for brand-voice drafting, and a 15-minute human review step — producing content that ranks vs. generic AI output.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation',
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
        <HybridContentPage />
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Google Vertex AI Services — Strategy, Gemini Integration & Agent Builder',
  description: 'Expert Vertex AI services — strategy & readiness, Gemini integration, Vertex AI Agent Builder, AI Search & RAG, BigQuery ML agents, and Vertex AI rescue. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services' },
  keywords: ['vertex ai services', 'gemini integration service', 'vertex ai agent builder', 'vertex ai search rag', 'bigquery ml agents', 'vertex ai strategy', 'google cloud ai services', 'vertex ai consulting', 'gemini api integration', 'vertex ai implementation'],
  openGraph: {
    type: 'website',
    title: 'Google Vertex AI Services | Kovil AI',
    description: 'Vertex AI strategy, Gemini integration, Agent Builder, AI Search & RAG, BigQuery ML, and rescue sprints. Fixed-price.',
    url: 'https://kovil.ai/vertex-ai/services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Google Vertex AI Services — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Google Vertex AI Services | Kovil AI', description: 'Vertex AI strategy, Gemini integration, Agent Builder, BigQuery ML. Fixed-price.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Google Vertex AI Services',
  url: 'https://kovil.ai/vertex-ai/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Vertex AI Strategy & Readiness', url: 'https://kovil.ai/vertex-ai/services/vertex-ai-strategy-readiness' },
    { '@type': 'WebPage', name: 'Gemini Integration Service', url: 'https://kovil.ai/vertex-ai/services/gemini-integration' },
    { '@type': 'WebPage', name: 'Vertex AI Agent Builder', url: 'https://kovil.ai/vertex-ai/services/vertex-agent-builder' },
    { '@type': 'WebPage', name: 'Vertex AI Search & RAG', url: 'https://kovil.ai/vertex-ai/services/vertex-ai-search-rag' },
    { '@type': 'WebPage', name: 'BigQuery ML & Data Agents', url: 'https://kovil.ai/vertex-ai/services/bigquery-ml-data-agents' },
    { '@type': 'WebPage', name: 'Vertex AI Rescue & Optimisation', url: 'https://kovil.ai/vertex-ai/services/vertex-ai-rescue-optimisation' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Google Vertex AI Services | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Services' }],
  sectionTag: 'Vertex AI Implementation Services',
  headline: 'Vertex AI',
  headlineAccent: 'Services',
  description: 'From strategy to production — Kovil AI delivers Vertex AI and Gemini implementations with fixed-price sprints, starting from a 2-week pilot through to full multi-agent production deployments.',
  stats: [
    { value: '6', label: 'Services' },
    { value: '2 weeks', label: 'To first pilot' },
    { value: 'Fixed', label: 'Price' },
    { value: '2–4 wks', label: 'To production' },
  ],
  cards: [
    { href: '/vertex-ai/services/vertex-ai-strategy-readiness', icon: 'Compass', color: G_BLUE, title: 'Vertex AI Strategy & Readiness', description: 'Enterprise AI readiness assessment and Vertex AI architecture planning — defining your data strategy, model selection, and deployment roadmap before you build.' },
    { href: '/vertex-ai/services/gemini-integration', icon: 'Zap', color: G_RED, title: 'Gemini Integration', description: 'Integrate Gemini 1.5 Pro, Gemini Flash, and multimodal models into your enterprise applications via Vertex AI — with grounding, function calling, and production safety controls.' },
    { href: '/vertex-ai/services/vertex-agent-builder', icon: 'Bot', color: G_BLUE, title: 'Vertex AI Agent Builder', description: 'Production multi-agent applications using Vertex AI Agent Builder and Gemini — orchestrating complex workflows with memory, tools, and grounding on Google Cloud.' },
    { href: '/vertex-ai/services/vertex-ai-search-rag', icon: 'Search', color: '#F59E0B', title: 'Vertex AI Search & RAG', description: 'Enterprise search and retrieval-augmented generation using Vertex AI Search, Vector Search, and Gemini — making your data queryable in natural language.' },
    { href: '/vertex-ai/services/bigquery-ml-data-agents', icon: 'Database', color: G_GREEN, title: 'BigQuery ML & Data Agents', description: 'AI agents grounded in your BigQuery data — natural language to SQL, automated analytics, and data intelligence agents powered by Gemini and BigQuery ML.' },
    { href: '/vertex-ai/services/vertex-ai-rescue-optimisation', icon: 'Wrench', color: '#EF4444', title: 'Vertex AI Rescue & Optimisation', description: 'Inheriting a stalled or underperforming Vertex AI project? We audit, optimise, and deliver — covering latency, cost, hallucination rates, and observability.' },
  ],
  ctaHeadline: 'Ready to build on Vertex AI?',
  ctaBody: 'Book a free 30-minute architecture call. We will give you a concrete technical approach and a fixed-price delivery plan.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SectionHubTemplate data={data} />
    </>
  )
}

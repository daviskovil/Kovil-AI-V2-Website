import type { Metadata } from 'next'
import LlamaIndexEngineersPage from '@/src/pages/hire/LlamaIndexEngineersPage'

export const metadata: Metadata = {
  title: 'Hire LlamaIndex Engineers — Advanced RAG & Ingestion, Matched in 48 Hours',
  description: 'Hire vetted LlamaIndex engineers embedded in your team in 48 hours. Advanced RAG, parent-child chunk relations, vector search, custom data connectors, LlamaHub, retrieval evaluations. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/llamaindex-engineers' },
  keywords: [
    'hire llamaindex engineers',
    'llamaindex developer',
    'llamaindex expert',
    'hire llamaindex expert',
    'rag pipeline engineer',
    'vector database search developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire LlamaIndex Engineers — Advanced RAG & Ingestion, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LlamaIndex engineers embedded in your team in 48 hours. Advanced RAG, vector database indexing, custom LlamaHub data connectors — sprint-delivered.',
    url: 'https://kovil.ai/hire/llamaindex-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-llamaindex-engineers.png', width: 1200, height: 630, alt: 'Hire LlamaIndex Engineers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire LlamaIndex Engineers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LlamaIndex engineers in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-hire-llamaindex-engineers.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire LlamaIndex Engineers',
  description: 'Embed vetted Tier-1 LlamaIndex engineers into your team in 48 hours. Specialists in advanced RAG pipelines, data ingestion, metadata filtering, hierarchical node parsing, re-ranking, and retrieval evaluations.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'LlamaIndex RAG & Vector Database Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/llamaindex-engineers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/llamaindex-engineers' },
}

// DefinedTerm — gives answer engines and LLMs a clean, unambiguous
// definition to lift for "what is a LlamaIndex engineer" queries,
// independent of the FAQ prose.
const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'LlamaIndex Engineer',
  description: 'LlamaIndex (formerly GPT Index) is a specialized data framework for connecting custom data sources to LLMs, focused heavily on data ingestion, indexing, and retrieval rather than general-purpose orchestration. A LlamaIndex engineer builds highly optimized RAG pipelines, semantic search engines over legacy databases, custom document parsers, and agentic multi-document query tools using it.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Hiring Glossary', url: 'https://kovil.ai/hire' },
  url: 'https://kovil.ai/hire/llamaindex-engineers',
}

// WebPage + Speakable — mirrors the pattern used on kovil.ai/ and the
// other newer service pages: dateModified for freshness signals,
// speakable for voice/AEO surfaces.
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hire LlamaIndex Engineers — Advanced RAG & Ingestion, Matched in 48 Hours',
  description: 'Hire vetted LlamaIndex engineers embedded in your team in 48 hours. Advanced RAG, parent-child chunk relations, vector search, custom data connectors, LlamaHub, retrieval evaluations.',
  url: 'https://kovil.ai/hire/llamaindex-engineers',
  datePublished: '2026-07-10',
  dateModified: '2026-08-24',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#definition p', '#faq h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a LlamaIndex Engineer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your vector database, data sources, and RAG accuracy goals.', url: 'https://kovil.ai/hire/llamaindex-engineers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'We surface 2–3 hand-picked LlamaIndex specialists matched to your particular data ingestion and search needs.', url: 'https://kovil.ai/hire/llamaindex-engineers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your engineer builds in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/llamaindex-engineers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LlamaIndex and what can a LlamaIndex engineer build?', acceptedAnswer: { '@type': 'Answer', text: 'LlamaIndex is a specialized data framework for connecting external data sources to LLMs. An engineer builds custom ingestion pipelines, parent-child chunk relations, SQL routers, and multi-document search agents.' } },
    { '@type': 'Question', name: 'How quickly can I hire a LlamaIndex engineer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'LlamaIndex vs LangChain — which is right for my project?', acceptedAnswer: { '@type': 'Answer', text: 'LlamaIndex is deeply specialized in retrieval accuracy, structured ingestion, and data queries. LangChain is a general orchestrator for generic AI chains.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                  item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',      item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'LlamaIndex Engineers',   item: 'https://kovil.ai/hire/llamaindex-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><LlamaIndexEngineersPage /></div>
    </>
  )
}

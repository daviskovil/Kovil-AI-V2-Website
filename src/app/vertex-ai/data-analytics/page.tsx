import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { Database, FileText, Search } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Data & Analytics Agents — BigQuery, Document AI, Enterprise Search | Kovil AI',
  description: 'Data and analytics AI agents on Vertex AI — BigQuery intelligent agents, Document AI pipelines, and enterprise search. Fixed-price production deployments on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/data-analytics' },
  keywords: ['vertex ai bigquery agent', 'bigquery intelligent agent', 'vertex ai document ai pipeline', 'google cloud enterprise search agent', 'vertex ai data analytics', 'bigquery ml gemini', 'vertex ai search agent', 'document ai vertex ai', 'google cloud data ai agents'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Data & Analytics Agents | Kovil AI',
    description: 'BigQuery intelligent agents, Document AI pipelines, and enterprise search on Vertex AI. Fixed-price production deployments.',
    url: 'https://kovil.ai/vertex-ai/data-analytics',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Data Analytics Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Data & Analytics Agents | Kovil AI', description: 'BigQuery agents, Document AI pipelines, and enterprise search on Vertex AI. Fixed-price.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Data & Analytics Agents',
  url: 'https://kovil.ai/vertex-ai/data-analytics',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'BigQuery Intelligent Agent', url: 'https://kovil.ai/vertex-ai/data-analytics/bigquery-intelligent-agent' },
    { '@type': 'WebPage', name: 'Document AI Pipeline', url: 'https://kovil.ai/vertex-ai/data-analytics/document-ai-pipeline' },
    { '@type': 'WebPage', name: 'Enterprise Search Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/data-analytics/enterprise-search-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Data & Analytics', item: 'https://kovil.ai/vertex-ai/data-analytics' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Data & Analytics Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/data-analytics',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Data & Analytics' }],
  sectionTag: 'Data & Analytics Use Cases',
  headline: 'Data & Analytics',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that unlock the intelligence in your data — from BigQuery natural language queries to Document AI extraction pipelines and enterprise knowledge search on Google Cloud.',
  cards: [
    { href: '/vertex-ai/data-analytics/bigquery-intelligent-agent', icon: Database, color: G_BLUE, title: 'BigQuery Intelligent Agent', description: 'Natural language to SQL agent over your BigQuery data warehouse — powered by Gemini — enabling business users to query complex datasets without writing SQL.' },
    { href: '/vertex-ai/data-analytics/document-ai-pipeline', icon: FileText, color: G_RED, title: 'Document AI Pipeline', description: 'Automated document extraction and classification pipeline using Google Cloud Document AI and Gemini — processing invoices, contracts, forms, and unstructured documents.' },
    { href: '/vertex-ai/data-analytics/enterprise-search-agent', icon: Search, color: G_GREEN, title: 'Enterprise Search Agent', description: 'Unified enterprise search over your internal knowledge using Vertex AI Search — bringing Google-quality search to your internal documents, wikis, and data sources.' },
  ],
  ctaHeadline: 'Ready to make your data intelligent?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right data agent use case and give you a fixed-price delivery plan.',
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

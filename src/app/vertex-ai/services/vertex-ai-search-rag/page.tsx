import type { Metadata } from 'next'
import VertexAISearchRAGPage from '@/src/pages/vertex-ai/services/VertexAISearchRAGPage'

export const metadata: Metadata = {
  title: 'Vertex AI Search & RAG Pipeline | Kovil AI Google Cloud Vertex AI',
  description: 'Enterprise RAG pipelines on Google Cloud using Vertex AI Search, BigQuery, and Cloud Storage. Ground Gemini agents in live enterprise knowledge with IAM-governed retrieval and production accuracy guarantees.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/vertex-ai-search-rag' },
  keywords: [
    'Vertex AI Search RAG',
    'Google Cloud RAG pipeline',
    'Vertex AI Search consultant',
    'enterprise RAG Google Cloud',
    'Gemini grounding enterprise data',
    'Vertex AI Search datastore',
    'hybrid search Vertex AI',
    'Document AI integration',
    'BigQuery ML RAG',
    'IAM-aware retrieval GCP',
    'Vertex AI Grounding API',
    'Google Cloud semantic search',
    'Vertex AI Search vs Elasticsearch',
    'GCP enterprise knowledge base',
    'Vertex AI RAG developer',
    'retrieval augmented generation GCP',
    'Gemini RAG pipeline',
    'Google Cloud document search',
  ],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Search & RAG Pipeline | Kovil AI Google Cloud Vertex AI',
    description: 'Enterprise RAG pipelines on Google Cloud using Vertex AI Search, BigQuery, and Cloud Storage. Ground Gemini agents in live enterprise knowledge with IAM-governed retrieval and production accuracy guarantees.',
    url: 'https://kovil.ai/vertex-ai/services/vertex-ai-search-rag',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI Vertex AI Search & RAG Pipeline' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex AI Search & RAG Pipeline | Kovil AI Google Cloud Vertex AI',
    description: 'Enterprise RAG pipelines on Google Cloud using Vertex AI Search, BigQuery, and Cloud Storage. Ground Gemini agents in live enterprise knowledge with IAM-governed retrieval and production accuracy guarantees.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vertex AI Search & RAG Pipeline',
  description: 'Enterprise RAG pipelines on Google Cloud using Vertex AI Search, BigQuery, and Cloud Storage. Ground Gemini agents in live enterprise knowledge with IAM-governed retrieval and production accuracy guarantees.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Vertex AI RAG Implementation',
  url: 'https://kovil.ai/vertex-ai/services/vertex-ai-search-rag',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Four-week RAG build with benchmarked retrieval accuracy and production deployment' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Vertex AI Search compare to Elasticsearch for enterprise search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI Search provides managed semantic and hybrid search with native Gemini grounding integration, auto-scaling, and no index management overhead — all within GCP\'s security perimeter. Elasticsearch offers more customisation and is platform-agnostic but requires significant infrastructure management. For GCP-committed organisations building Gemini-powered agents, Vertex AI Search typically delivers faster time-to-production and tighter integration with Vertex AI grounding APIs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data sources can Vertex AI Search index?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI Search can index documents from Cloud Storage (PDFs, Word documents, HTML, text files), BigQuery tables, Google Drive, websites via web crawling, and data imported via the API. For unstructured document types like scanned PDFs, we integrate Google Cloud Document AI to extract structured content before indexing to improve retrieval accuracy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Grounding API connect Vertex AI Search to Gemini?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Vertex AI Grounding API is a direct integration layer between your Vertex AI Search datastores and Gemini models. When a Gemini agent calls the Grounding API, it passes the user query, retrieves the most relevant chunks from your datastore, and injects them as context into the Gemini prompt — with source citations included in the response. We configure this pipeline and tune retrieval parameters during the build phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle access control so users only see documents they are permitted to read?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement IAM-aware retrieval by filtering Vertex AI Search results based on the authenticated user\'s GCP identity. Documents are tagged with access metadata during ingestion, and retrieval queries are scoped to the user\'s permitted document set. This means the agent can only surface information the user is already authorised to see, matching your existing GCP data governance policies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical retrieval latency for a production Vertex AI Search RAG pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Production Vertex AI Search retrieval typically adds 100–400ms to end-to-end response latency, depending on datastore size, query complexity, and GCP region. Combined with Gemini generation time, most enterprise RAG pipelines achieve total response times of 2–5 seconds for standard queries. We benchmark latency during the evaluation phase and tune index and retrieval configurations to meet your SLA requirements.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
    { '@type': 'ListItem', position: 4, name: 'Vertex AI Search & RAG Pipeline', item: 'https://kovil.ai/vertex-ai/services/vertex-ai-search-rag' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAISearchRAGPage />
    </>
  )
}

import type { Metadata } from 'next'
import EnterpriseSearchAgentPage from '@/src/pages/vertex-ai/data-analytics/EnterpriseSearchAgentPage'

export const metadata: Metadata = {
  title: 'Enterprise Search Agent — Unified GCP Search with Vertex AI | Kovil AI',
  description: 'Cross-repository enterprise search built on Vertex AI Search — unified semantic search across GCS, BigQuery, databases, and APIs with access control and Gemini-powered answer generation.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/data-analytics/enterprise-search-agent' },
  keywords: ['enterprise search agent', 'Vertex AI Search', 'enterprise RAG GCP', 'Google Cloud enterprise search', 'Vertex AI Search implementation', 'semantic search GCP', 'AI enterprise search', 'Gemini enterprise search', 'RAG pipeline Vertex AI', 'unified enterprise search', 'GCS BigQuery search agent', 'Vertex AI Search partner'],
  openGraph: {
    type: 'website',
    title: 'Enterprise Search Agent — Vertex AI Search Implementation | Kovil AI',
    description: 'Unified semantic search across your GCP data estate — GCS, BigQuery, databases, and APIs — with IAM access control and Gemini-powered answer generation.',
    url: 'https://kovil.ai/vertex-ai/data-analytics/enterprise-search-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Enterprise Search Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Search Agent | Kovil AI Vertex AI',
    description: 'Unified semantic search across GCS, BigQuery, databases, and APIs. Vertex AI Search with Gemini answer generation.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Enterprise Search Agent',
  description: 'Cross-repository enterprise search built on Vertex AI Search — unified semantic search across GCS, BigQuery, databases, and APIs with IAM-controlled access and Gemini-powered answer generation.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/data-analytics/enterprise-search-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What data sources can Vertex AI Search index?', acceptedAnswer: { '@type': 'Answer', text: 'Vertex AI Search can index data from Google Cloud Storage (documents, PDFs, HTML), BigQuery tables, Cloud SQL databases, Firestore, websites via web crawl, and any data source reachable via REST API using the Discovery Engine API. For enterprise deployments, we typically configure GCS-based document indexing for knowledge bases and policy documents, combined with API connectors for structured data in operational systems. All indexed data remains within your GCP project under your existing IAM permissions.' } },
    { '@type': 'Question', name: 'How does Vertex AI Search handle access control?', acceptedAnswer: { '@type': 'Answer', text: 'Vertex AI Search enforces document-level access control using Google Cloud IAM and Access Control Lists. Users only retrieve documents they are authorised to access — a finance analyst cannot retrieve HR-restricted documents even if they exist in the same search index. We implement a serving configuration that checks the caller\'s identity against document ACLs in real time during retrieval. This means one search index can serve multiple user groups with different access rights without separate indexes.' } },
    { '@type': 'Question', name: 'What is the difference between keyword search and semantic search in Vertex AI Search?', acceptedAnswer: { '@type': 'Answer', text: 'Keyword search matches exact terms and requires users to know the precise vocabulary used in your documents. Semantic search understands meaning — a query for "how do I submit a leave request" returns the correct HR policy page even if it uses "annual leave application" rather than "leave request". Vertex AI Search supports hybrid retrieval, combining keyword and semantic (vector) search with configurable weights and semantic re-ranking. Kovil AI tunes the hybrid retrieval parameters on your actual query logs to maximise relevance for your specific domain.' } },
    { '@type': 'Question', name: 'How long does it take to deploy a Vertex AI Search enterprise agent?', acceptedAnswer: { '@type': 'Answer', text: 'A production-ready enterprise search agent with Vertex AI Search, Gemini answer generation, IAM access control, and a search interface typically takes 3–4 weeks. This includes data source connector configuration, chunking strategy and indexing setup, hybrid retrieval tuning on sample queries, Gemini grounded answer generation configuration, and UI integration. For organisations with complex multi-source indexing or strict compliance requirements, we allow 5–6 weeks.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Data & Analytics', item: 'https://kovil.ai/vertex-ai/data-analytics' },
    { '@type': 'ListItem', position: 4, name: 'Enterprise Search Agent', item: 'https://kovil.ai/vertex-ai/data-analytics/enterprise-search-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EnterpriseSearchAgentPage />
    </>
  )
}

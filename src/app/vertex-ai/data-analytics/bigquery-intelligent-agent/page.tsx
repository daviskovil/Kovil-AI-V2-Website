import type { Metadata } from 'next'
import BigQueryIntelligentAgentPage from '@/src/pages/vertex-ai/data-analytics/BigQueryIntelligentAgentPage'

export const metadata: Metadata = {
  title: 'BigQuery Intelligent Agent — Natural Language Analytics on GCP | Kovil AI',
  description: 'AI agent that lets business users query BigQuery in plain English using Gemini in BigQuery and Vertex AI Agent Builder. No SQL required. Real-time dashboards explained in natural language.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/data-analytics/bigquery-intelligent-agent' },
  keywords: ['BigQuery intelligent agent', 'Gemini in BigQuery', 'natural language analytics', 'BigQuery natural language queries', 'Vertex AI data agent', 'BigQuery AI agent', 'NL2SQL BigQuery', 'Google Cloud data analytics AI', 'BigQuery ML agent', 'AI data analyst GCP', 'BigQuery Gemini integration', 'Vertex AI analytics agent'],
  openGraph: {
    type: 'website',
    title: 'BigQuery Intelligent Agent — Natural Language Analytics on GCP | Kovil AI',
    description: 'AI agent that lets business users query BigQuery in plain English using Gemini in BigQuery and Vertex AI Agent Builder. No SQL required. Real-time insights delivered to decision-makers.',
    url: 'https://kovil.ai/vertex-ai/data-analytics/bigquery-intelligent-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'BigQuery Intelligent Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigQuery Intelligent Agent | Kovil AI',
    description: 'Natural language analytics on BigQuery using Gemini. No SQL required. Real-time insights for business users.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'BigQuery Intelligent Agent',
  description: 'AI agent that lets business users query BigQuery in plain English using Gemini in BigQuery and Vertex AI Agent Builder — no SQL required, with automated insight generation and anomaly detection.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/data-analytics/bigquery-intelligent-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Gemini in BigQuery convert natural language to SQL?', acceptedAnswer: { '@type': 'Answer', text: 'Gemini in BigQuery uses a fine-tuned large language model that understands your specific schema — table names, column definitions, and relationships. When a user asks a question in plain English, Gemini generates the corresponding SQL, executes it against your BigQuery dataset, and returns both the results and a plain-language explanation. The model improves over time as it learns your data vocabulary and common query patterns.' } },
    { '@type': 'Question', name: 'How is our BigQuery data kept secure when using Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'All data remains within your Google Cloud project — no data leaves your GCP environment. Gemini in BigQuery operates within your existing IAM permissions, so users can only query tables they are already authorised to access. Vertex AI Agent Builder applies the same access controls, and all queries are logged in Cloud Audit Logs for compliance and audit trails.' } },
    { '@type': 'Question', name: 'What types of BigQuery data does the agent support?', acceptedAnswer: { '@type': 'Answer', text: 'The agent supports structured and semi-structured data in BigQuery, including standard tables, partitioned tables, views, and BigQuery ML models. It works across any data domain — sales, finance, operations, marketing, and more. Documents and unstructured data can be incorporated via BigQuery Object Tables combined with Gemini multimodal analysis.' } },
    { '@type': 'Question', name: 'How long does it take to deploy the BigQuery Intelligent Agent?', acceptedAnswer: { '@type': 'Answer', text: 'A production-ready BigQuery Intelligent Agent with natural language querying, automated insight generation, and anomaly detection typically takes 3 weeks from scoping to go-live. This includes BigQuery schema analysis and metadata enrichment, Gemini in BigQuery configuration, Vertex AI Agent Builder setup, IAM and audit log configuration, and end-user interface integration. Kovil AI delivers this as a fixed-price engagement.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Data & Analytics', item: 'https://kovil.ai/vertex-ai/data-analytics' },
    { '@type': 'ListItem', position: 4, name: 'BigQuery Intelligent Agent', item: 'https://kovil.ai/vertex-ai/data-analytics/bigquery-intelligent-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BigQueryIntelligentAgentPage />
    </>
  )
}

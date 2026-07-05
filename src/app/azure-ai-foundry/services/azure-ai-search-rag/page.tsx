import type { Metadata } from 'next'
import AzureAISearchRAGPage from '@/src/pages/azure-ai-foundry/services/AzureAISearchRAGPage'

export const metadata: Metadata = {
  title: 'Azure AI Search & RAG Pipeline — Azure AI Foundry',
  description: 'Build a production-grade RAG pipeline on Azure AI Search with vector + hybrid search, semantic ranking, Entra ID access control, and hallucination guardrails. Delivered in 14 days.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag' },
  keywords: [
    'Azure AI Search RAG pipeline',
    'retrieval augmented generation Azure',
    'Azure AI Search implementation',
    'Azure OpenAI RAG',
    'vector search Azure',
    'hybrid search Azure AI Search',
    'Azure AI Search consulting',
    'RAG pipeline build Azure',
    'Azure AI Search semantic ranking',
    'enterprise knowledge base Azure',
    'SharePoint Azure AI Search',
    'RAG hallucination prevention',
    'Azure AI Search partner',
    'Azure AI Foundry RAG',
    'AI search Azure enterprise',
    'document indexing Azure AI',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure AI Search & RAG Pipeline — Azure AI Foundry',
    description: 'Build a production-grade RAG pipeline on Azure AI Search with vector + hybrid search, semantic ranking, Entra ID access control, and hallucination guardrails. Delivered in 14 days.',
    url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Azure AI Search & RAG Pipeline' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Search & RAG Pipeline — Azure AI Foundry',
    description: 'Build a production-grade RAG pipeline on Azure AI Search with vector + hybrid search, semantic ranking, Entra ID access control, and hallucination guardrails. Delivered in 14 days.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure AI Search & RAG Pipeline',
  description: 'Production-grade retrieval-augmented generation pipeline on Azure AI Search with vector and hybrid search, semantic ranking, multi-source indexing, and hallucination guardrails.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is retrieval-augmented generation (RAG) and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAG is an architecture pattern where an AI agent retrieves relevant documents from a search index before generating a response — grounding the answer in your actual organisational knowledge rather than relying solely on the LLM\'s training data. This dramatically reduces hallucinations and makes the agent authoritative for domain-specific questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is hybrid search in Azure AI Search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hybrid search combines BM25 keyword search and vector similarity search in a single query using Reciprocal Rank Fusion (RRF). Keyword search handles exact-match and rare-term queries precisely; vector search handles semantic similarity and paraphrased queries well. Combining both in a single retrieval step consistently outperforms either approach alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent hallucinations in a RAG pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement multiple guardrails: semantic ranking to ensure the most relevant passages are retrieved; context window management to prevent dilution with irrelevant passages; groundedness evaluation using Azure AI Foundry\'s evaluation SDK to verify answers cite retrieved sources; and Prompt Flow pipeline steps that block or flag responses unsupported by the retrieved context.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the RAG pipeline respect our existing SharePoint and Entra ID permissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We configure Azure AI Search with security trimming based on the querying user\'s Entra ID group memberships — ensuring the retrieval step only returns documents the user is authorised to access. This preserves your existing information governance policies in the AI layer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What data sources can you index into Azure AI Search?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can index content from SharePoint Online, Confluence, Azure Blob Storage, Azure SQL, Cosmos DB, and REST APIs using Azure AI Search\'s native indexers and custom indexing pipelines. Multiple sources are unified into a single searchable index, with configurable field boosting to prioritise content from more authoritative sources.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/azure-ai-foundry/services' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Search & RAG Pipeline', item: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureAISearchRAGPage />
    </>
  )
}

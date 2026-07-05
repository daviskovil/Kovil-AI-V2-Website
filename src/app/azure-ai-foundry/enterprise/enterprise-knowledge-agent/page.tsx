import type { Metadata } from 'next'
import EnterpriseKnowledgeAgentPage from '@/src/pages/azure-ai-foundry/enterprise/EnterpriseKnowledgeAgentPage'

export const metadata: Metadata = {
  title: 'Enterprise Knowledge Agent — Azure AI Search RAG over SharePoint & Confluence',
  description: 'RAG knowledge agent built on Azure AI Search and GPT-4o. Indexes SharePoint, Confluence, and internal docs — gives employees instant cited answers with Entra ID access control.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/enterprise/enterprise-knowledge-agent' },
  keywords: ['Azure AI Search RAG', 'enterprise knowledge agent', 'SharePoint AI search', 'Confluence RAG agent', 'Azure OpenAI knowledge base', 'enterprise knowledge management AI', 'RAG over SharePoint', 'Azure AI Foundry knowledge agent', 'corporate knowledge base AI', 'Semantic Kernel RAG', 'Azure AI Search agent', 'enterprise search AI', 'employee knowledge assistant', 'Azure knowledge management', 'Kovil AI Azure', 'internal knowledge AI'],
  openGraph: { type: 'website', title: 'Enterprise Knowledge Agent — Azure AI Search RAG | Kovil AI', description: 'RAG agent over SharePoint, Confluence, and internal docs. 83% answer accuracy. 12-minute research time. Entra ID access control.', url: 'https://kovil.ai/azure-ai-foundry/enterprise/enterprise-knowledge-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Enterprise Knowledge Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Enterprise Knowledge Agent — Azure AI Search RAG | Kovil AI', description: 'Instant cited answers from your enterprise knowledge base. Built on Azure AI Search and GPT-4o.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Enterprise Knowledge Agent',
  description: 'RAG knowledge agent over SharePoint, Confluence, and internal docs using Azure AI Search and GPT-4o — instant cited answers with Entra ID access control.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/enterprise/enterprise-knowledge-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Azure AI Search handle access control for the knowledge agent?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Search integrates natively with Entra ID (Azure Active Directory). Document-level access control is enforced at retrieval time — the agent only returns content the authenticated user is authorised to see. This means a junior employee cannot retrieve documents restricted to senior leadership, and an engineer cannot access HR files. Access control is inherited from the source system (SharePoint permissions, Confluence spaces) and enforced without manual configuration per document.' } },
    { '@type': 'Question', name: 'How are answers cited back to source documents?', acceptedAnswer: { '@type': 'Answer', text: 'Every Azure AI Search retrieval returns source document metadata (file name, URL, section, last modified date). The GPT-4o system prompt is configured to include source citations in every response — employees can click through to the original document. This eliminates the hallucination problem where AI answers cannot be verified.' } },
    { '@type': 'Question', name: 'How is the index kept current as documents change?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Search indexers run on configurable schedules (hourly to daily) against SharePoint, Blob Storage, and other connected sources. When a document is updated in SharePoint, the indexer detects the change and re-indexes the affected document within the configured interval. New documents are indexed automatically. Deleted documents are removed from the index on the next indexer run.' } },
    { '@type': 'Question', name: 'Can the knowledge agent be deployed in Microsoft Teams?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The knowledge agent is typically deployed via Copilot Studio as a Teams bot — employees query it directly in Teams channels or direct message. It can also be surfaced as a web chat widget and as a SharePoint embedded component. All channels share the same Azure AI Search retrieval backend and Entra ID access control.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise Automation', item: 'https://kovil.ai/azure-ai-foundry/enterprise' },
    { '@type': 'ListItem', position: 4, name: 'Enterprise Knowledge Agent', item: 'https://kovil.ai/azure-ai-foundry/enterprise/enterprise-knowledge-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EnterpriseKnowledgeAgentPage />
    </>
  )
}

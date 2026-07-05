import type { Metadata } from 'next'
import AzureSharePointPage from '@/src/pages/azure-ai-foundry/integrations/AzureSharePointPage'

export const metadata: Metadata = {
  title: 'Azure AI Search + SharePoint: AI Knowledge Base Integration',
  description: 'Turn your SharePoint document library into a permission-aware AI knowledge base. Azure AI Search indexes SharePoint natively with Entra ID security trimming and real-time vector search.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/sharepoint' },
  keywords: ['Azure AI Search SharePoint', 'SharePoint RAG', 'SharePoint knowledge base AI', 'Azure AI Foundry SharePoint', 'SharePoint vector search', 'Entra ID permission-aware retrieval', 'SharePoint AI agent', 'SharePoint document indexing Azure', 'Azure AI Search indexer SharePoint', 'Semantic Kernel SharePoint', 'Copilot Studio SharePoint', 'SharePoint AI search', 'enterprise knowledge base AI', 'Kovil AI SharePoint', 'document retrieval AI'],
  openGraph: { type: 'website', title: 'Azure AI Search + SharePoint: Permission-Aware AI Knowledge Base | Kovil AI', description: 'Index SharePoint into Azure AI Search. 83% answer accuracy, 12-min research time, 100% permission-aware retrieval.', url: 'https://kovil.ai/azure-ai-foundry/integrations/sharepoint', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Search + SharePoint — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Search + SharePoint Knowledge Base | Kovil AI', description: 'SharePoint indexed into Azure AI Search with Entra ID permission filtering. 83% answer accuracy, real-time updates.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Search + SharePoint Knowledge Base Integration',
  description: 'SharePoint Online indexed into Azure AI Search with vector embeddings and Entra ID permission-aware retrieval — making company documents instantly queryable by AI agents.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/sharepoint',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Azure AI Search enforce SharePoint permissions during retrieval?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Search uses security trimming to filter search results based on the requesting user\'s Entra ID group memberships and SharePoint permission assignments. When an agent queries the index on behalf of a user, the search request includes the user\'s Entra ID object ID. Azure AI Search filters the result set to only return documents that the user is authorised to access in SharePoint — matching against ACLs captured during the indexing crawl. Permissions are re-synced on each delta crawl cycle.' } },
    { '@type': 'Question', name: 'What file types does the SharePoint indexer support?', acceptedAnswer: { '@type': 'Answer', text: 'The Azure AI Search SharePoint Online indexer supports PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), plain text, and HTML files stored in SharePoint document libraries. For PDF files, the built-in OCR skill processes scanned documents. Image-only PDFs require the Azure AI Vision OCR enrichment skill in the indexing pipeline. SharePoint List items (metadata) can also be indexed separately from document content.' } },
    { '@type': 'Question', name: 'How quickly does the index update when a SharePoint document changes?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Search uses a delta crawl mechanism for the SharePoint indexer that can be configured on a schedule (minimum 5-minute interval in preview). For near-real-time updates, a SharePoint webhook configured via Microsoft Graph can trigger the indexer on document create/update/delete events — achieving sub-minute index latency for changed documents. For most enterprise knowledge base use cases, a 15-minute delta crawl is sufficient.' } },
    { '@type': 'Question', name: 'What is the chunking strategy for long SharePoint documents?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI configures recursive text chunking at 512 tokens with a 64-token overlap between adjacent chunks. This overlap preserves semantic context that spans chunk boundaries — critical for documents where key information (like a definition or a condition) appears near a natural page or section break. Each chunk stores its parent document ID, page number, and section heading as metadata for source citation in agent responses.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'SharePoint', item: 'https://kovil.ai/azure-ai-foundry/integrations/sharepoint' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureSharePointPage />
    </>
  )
}

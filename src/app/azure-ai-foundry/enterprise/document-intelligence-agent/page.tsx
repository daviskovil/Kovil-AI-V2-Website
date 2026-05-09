import type { Metadata } from 'next'
import DocumentIntelligenceAgentPage from '@/src/pages/azure-ai-foundry/enterprise/DocumentIntelligenceAgentPage'

export const metadata: Metadata = {
  title: 'Azure AI Document Intelligence Agent — Automated Document Processing | Kovil AI',
  description: 'AI agent built on Azure AI Document Intelligence and GPT-4o that processes contracts, invoices, and compliance docs automatically — extracting, classifying, and routing structured data.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/enterprise/document-intelligence-agent' },
  keywords: ['Azure AI Document Intelligence', 'document processing automation', 'Azure OpenAI document extraction', 'contract extraction AI', 'invoice processing Azure', 'AI document classification', 'Azure form recognizer agent', 'enterprise document AI', 'document automation Azure', 'GPT-4o document processing', 'Azure AI Foundry document agent', 'intelligent document processing', 'IDP Azure', 'automated contract review', 'Azure AI document automation', 'Kovil AI Azure'],
  openGraph: { type: 'website', title: 'Azure AI Document Intelligence Agent | Kovil AI', description: 'Automate contract, invoice, and compliance document processing with Azure AI Document Intelligence and GPT-4o.', url: 'https://kovil.ai/azure-ai-foundry/enterprise/document-intelligence-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Document Intelligence Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Document Intelligence Agent | Kovil AI', description: 'Automate document processing with Azure AI Document Intelligence and GPT-4o. 85% accuracy. 10x faster.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Document Intelligence Agent',
  description: 'AI agent that processes contracts, invoices, and compliance documents automatically using Azure AI Document Intelligence and GPT-4o — extracting, classifying, and routing structured data.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/enterprise/document-intelligence-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What document formats does the Azure AI Document Intelligence agent support?', acceptedAnswer: { '@type': 'Answer', text: 'The agent supports PDF (digital and scanned), Word documents, Excel spreadsheets, image files (JPG, PNG, TIFF), and email formats. Azure AI Document Intelligence handles OCR for scanned documents and handwritten content. Custom extraction models can be trained for non-standard formats specific to your business.' } },
    { '@type': 'Question', name: 'How accurate is automated document extraction?', acceptedAnswer: { '@type': 'Answer', text: 'Accuracy depends on document quality and structure. For standardised forms and digital PDFs, Azure AI Document Intelligence achieves 95%+ field extraction accuracy. For scanned or handwritten documents, accuracy typically ranges from 85–92%. A human-in-the-loop escalation path handles low-confidence extractions.' } },
    { '@type': 'Question', name: 'Can the agent process documents from any source?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The agent ingests documents from Azure Blob Storage, SharePoint, email attachments, API uploads, and direct integrations with document management systems. Azure Logic Apps handles multi-source document routing.' } },
    { '@type': 'Question', name: 'How does the agent handle sensitive PII in documents?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Content Safety PII detection strips or masks sensitive fields (SSNs, financial account numbers, health identifiers) before they enter GPT-4o context. All processing occurs within your Azure VNet via private endpoints — no data traverses the public internet.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise Automation', item: 'https://kovil.ai/azure-ai-foundry/enterprise' },
    { '@type': 'ListItem', position: 4, name: 'Document Intelligence Agent', item: 'https://kovil.ai/azure-ai-foundry/enterprise/document-intelligence-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DocumentIntelligenceAgentPage />
    </>
  )
}

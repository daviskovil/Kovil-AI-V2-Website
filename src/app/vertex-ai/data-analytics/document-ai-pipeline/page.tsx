import type { Metadata } from 'next'
import DocumentAIPipelinePage from '@/src/pages/vertex-ai/data-analytics/DocumentAIPipelinePage'

export const metadata: Metadata = {
  title: 'Document AI Pipeline — Automated Document Extraction on GCP',
  description: 'Automated extraction and classification of invoices, contracts, and compliance documents using Google Cloud Document AI and Gemini — structured output to your ERP or data lake.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/data-analytics/document-ai-pipeline' },
  keywords: ['Document AI pipeline', 'Google Cloud Document AI', 'document extraction AI', 'invoice processing AI', 'contract extraction GCP', 'Gemini document processing', 'Vertex AI document classification', 'intelligent document processing GCP', 'Document AI Gemini integration', 'automated document extraction', 'GCP document intelligence', 'Vertex AI document pipeline'],
  openGraph: {
    type: 'website',
    title: 'Document AI Pipeline — Automated Document Extraction on GCP | Kovil AI',
    description: 'Automated extraction and classification of invoices, contracts, and compliance documents using Google Cloud Document AI and Gemini. Structured output to ERP or data lake.',
    url: 'https://kovil.ai/vertex-ai/data-analytics/document-ai-pipeline',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Document AI Pipeline — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document AI Pipeline | Kovil AI Vertex AI',
    description: 'Automated invoice, contract, and compliance document extraction using Google Cloud Document AI and Gemini.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Document AI Pipeline',
  description: 'Automated extraction and classification of invoices, contracts, and compliance documents using Google Cloud Document AI and Gemini — with structured output to ERP systems, data lakes, or downstream workflows.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/data-analytics/document-ai-pipeline',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What document types does Google Cloud Document AI support?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud Document AI supports a wide range of document types through specialised processors: invoices and purchase orders, tax forms (W-2, 1099, 1040), identity documents (passports, driver licences), bank statements, receipts, contracts, and general form documents. For custom document types — such as proprietary compliance forms or bespoke contracts — we build custom Document AI processors trained on your document corpus. Gemini extends this further with multimodal analysis for complex or non-standard layouts.' } },
    { '@type': 'Question', name: 'How accurate is Document AI extraction?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud Document AI specialised processors achieve 95–99% extraction accuracy on well-structured documents such as invoices and tax forms. For complex or varied document layouts, accuracy depends on training data quality and document consistency. Kovil AI implements a human-in-the-loop review workflow for low-confidence extractions, with confidence scoring and automatic routing to manual review below a configurable threshold. We tune processors on your specific document corpus during implementation.' } },
    { '@type': 'Question', name: 'How does the extracted data get into our ERP or data warehouse?', acceptedAnswer: { '@type': 'Answer', text: 'We build the complete extraction-to-destination pipeline: Document AI and Gemini extract structured fields from documents, which are validated against your business rules, then written to your target system via API — SAP, Oracle, NetSuite, Workday, Salesforce, BigQuery, or any system with an API. The pipeline runs on Cloud Run or Cloud Workflows, with full error handling, retry logic, and audit logging. You get a dashboard showing processing status, extraction confidence, and manual review queues.' } },
    { '@type': 'Question', name: 'Can the Document AI pipeline handle multi-language documents?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Google Cloud Document AI supports 200+ languages for OCR and text extraction. Gemini adds multilingual semantic understanding — enabling extraction of key fields from documents in any language without separate translation steps. For regulated industries requiring specific language compliance (e.g., EU documents in multiple languages), we configure language-specific processors and validation rules to maintain accuracy across all document languages your organisation processes.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Data & Analytics', item: 'https://kovil.ai/vertex-ai/data-analytics' },
    { '@type': 'ListItem', position: 4, name: 'Document AI Pipeline', item: 'https://kovil.ai/vertex-ai/data-analytics/document-ai-pipeline' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <DocumentAIPipelinePage />
    </>
  )
}

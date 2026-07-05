import type { Metadata } from 'next'
import LoanDocumentClassifierPage from '@/src/pages/ai-workflow-automation-library/LoanDocumentClassifierPage'

export const metadata: Metadata = {
  title: 'AI Loan Document Classifier — FinTech Workflow',
  description: 'Automate loan document intake with GPT-4o Vision. Classify document types, extract key fields, check completeness, and notify underwriters in under 60 seconds. Build in 2–3 weeks.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier' },
  openGraph: {
    type: 'website',
    title: 'AI Loan Document Classifier — FinTech Workflow | Kovil AI',
    description: 'Classify loan documents, extract fields, check completeness and notify underwriters automatically — GPT-4o Vision + n8n.',
    url: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Loan Document Classifier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Loan Document Classifier — FinTech Workflow | Kovil AI',
    description: 'Classify loan documents, extract fields, check completeness and notify underwriters automatically — GPT-4o Vision + n8n.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'AI Loan Document Classifier — Automate Loan Document Intake',
  description: 'Classify loan documents, extract key fields, check completeness, and notify underwriters automatically using GPT-4o Vision and n8n.',
  totalTime: 'PT60S',
  tool: ['GPT-4o Vision', 'n8n', 'AWS S3', 'Gmail'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Document ingestion', text: 'Email or portal submission triggers n8n. PDF/image is extracted from attachment and stored in S3.' },
    { '@type': 'HowToStep', position: 2, name: 'GPT-4o Vision classification', text: 'GPT-4o Vision identifies document type (W2, bank statement, pay stub, tax return) and extracts key fields.' },
    { '@type': 'HowToStep', position: 3, name: 'Completeness check', text: 'n8n validates required fields against loan product rules. Missing fields trigger applicant notification.' },
    { '@type': 'HowToStep', position: 4, name: 'Underwriter notification', text: 'Complete packages are pushed to the LOS and underwriter notified via Slack or email within 60 seconds.' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Loan Document Classifier',
  description: 'Automate loan document intake with GPT-4o Vision. Classify document types, extract fields, check completeness, and notify underwriters in under 60 seconds.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'FinTech AI Workflow Automation',
  url: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier',
  areaServed: { '@type': 'Country', name: 'United States' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What document types can the AI loan classifier handle?', acceptedAnswer: { '@type': 'Answer', text: 'The classifier handles W2s, bank statements, pay stubs, tax returns, utility bills, government IDs, and custom document types. GPT-4o Vision uses document context — not just keywords — for accurate classification.' } },
    { '@type': 'Question', name: 'How fast does it process a loan document?', acceptedAnswer: { '@type': 'Answer', text: 'End-to-end — from document receipt to underwriter notification — takes under 60 seconds for a standard 5–10 page package.' } },
    { '@type': 'Question', name: 'How long does this take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A standard build takes 2–3 weeks, including GPT-4o Vision integration, n8n workflow, LOS integration, and testing against your document set.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'AI Loan Document Classifier', item: 'https://kovil.ai/ai-workflow-automation-library/ai-loan-document-classifier' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><LoanDocumentClassifierPage /></div>
    </>
  )
}

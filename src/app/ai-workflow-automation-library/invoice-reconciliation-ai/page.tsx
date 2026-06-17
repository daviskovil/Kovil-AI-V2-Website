import type { Metadata } from 'next'
import InvoiceReconciliationPage from '@/src/pages/ai-workflow-automation-library/InvoiceReconciliationPage'

export const metadata: Metadata = {
  title: 'Invoice Reconciliation AI — FinTech Workflow | Kovil AI',
  description: 'Automate AP invoice reconciliation with GPT-4o Vision OCR, 3-way PO matching, discrepancy routing, and ERP auto-posting. 90% of invoices matched automatically — no manual review required.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/invoice-reconciliation-ai' },
  openGraph: {
    type: 'website',
    title: 'Invoice Reconciliation AI — FinTech Workflow | Kovil AI',
    description: 'GPT-4o Vision OCR + 3-way PO match + ERP auto-posting — 90% auto-match rate, zero duplicate payments.',
    url: 'https://kovil.ai/ai-workflow-automation-library/invoice-reconciliation-ai',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Invoice Reconciliation AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invoice Reconciliation AI — FinTech Workflow | Kovil AI',
    description: 'GPT-4o Vision OCR + 3-way PO match + ERP auto-posting — 90% auto-match rate, zero duplicate payments.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Automate Invoice Reconciliation with AI',
  description: 'GPT-4o Vision OCR extracts invoice data, a 3-way match engine compares against POs and receipts, discrepancies are routed for review, and clean invoices post automatically to the ERP.',
  tool: ['GPT-4o Vision', 'n8n', 'SAP / NetSuite / QuickBooks', 'Gmail'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Invoice ingestion', text: 'Invoices arrive via email, AP portal, or EDI. n8n captures and routes each document.' },
    { '@type': 'HowToStep', position: 2, name: 'OCR extraction', text: 'GPT-4o Vision extracts vendor name, invoice number, line items, amounts, and payment terms from any format.' },
    { '@type': 'HowToStep', position: 3, name: '3-way matching', text: 'Extracted data matched against PO and goods receipt in the ERP. Tolerance rules applied (±2% or configurable).' },
    { '@type': 'HowToStep', position: 4, name: 'Exception routing', text: 'Discrepancies flagged and routed to AP team with context. Vendor notified if invoice has errors.' },
    { '@type': 'HowToStep', position: 5, name: 'ERP auto-posting', text: 'Matched invoices posted to the ERP automatically. Full audit trail maintained for compliance.' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Invoice Reconciliation AI',
  description: 'Automate AP invoice reconciliation with GPT-4o Vision OCR, 3-way PO matching, and ERP auto-posting. 90% auto-match rate.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'FinTech AI Workflow Automation',
  url: 'https://kovil.ai/ai-workflow-automation-library/invoice-reconciliation-ai',
  areaServed: { '@type': 'Country', name: 'United States' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which ERP systems does the invoice reconciliation AI support?', acceptedAnswer: { '@type': 'Answer', text: 'The workflow integrates with SAP, Oracle NetSuite, Microsoft Dynamics 365, QuickBooks, and Xero. Custom ERP integrations via API are also supported.' } },
    { '@type': 'Question', name: 'What is the auto-match rate?', acceptedAnswer: { '@type': 'Answer', text: 'Clients typically achieve 88–93% auto-match rates within the first month, rising to 95%+ as tolerance rules are tuned to your vendor base.' } },
    { '@type': 'Question', name: 'How long does it take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A standard invoice reconciliation AI build takes 3–4 weeks, including GPT-4o Vision setup, ERP integration, 3-way match logic, and testing against your invoice dataset.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Invoice Reconciliation AI', item: 'https://kovil.ai/ai-workflow-automation-library/invoice-reconciliation-ai' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><InvoiceReconciliationPage /></div>
    </>
  )
}

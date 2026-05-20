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
}

export default function Page() {
  return <div className="pt-20"><InvoiceReconciliationPage /></div>
}

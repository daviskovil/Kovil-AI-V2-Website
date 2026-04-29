import type { Metadata } from 'next'
import FinanceApprovalAgentPage from '@/src/pages/agentforce/internal-operations/FinanceApprovalAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals | Kovil AI',
  description: 'An Agentforce agent that routes invoices and expense approvals, validates against policy, escalates exceptions, and logs to ERP — eliminating approval bottlenecks without sacrificing compliance.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals | Kovil AI',
    description: 'An Agentforce agent that routes invoices and expense approvals, validates against policy, escalates exceptions, and logs to ERP — eliminating approval bottlenecks without sacrificing compliance.',
    url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <FinanceApprovalAgentPage />
}

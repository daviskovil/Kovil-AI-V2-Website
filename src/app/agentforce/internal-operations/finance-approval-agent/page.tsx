import type { Metadata } from 'next'
import FinanceApprovalAgentPage from '@/src/pages/agentforce/internal-operations/FinanceApprovalAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals | Kovil AI',
  description: 'Agentforce finance approval agent that validates invoices against policy, routes to the right approver, chases SLA breaches, and posts approved transactions to ERP automatically.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent' },
  keywords: [
    'Agentforce finance approval agent',
    'Salesforce invoice approval AI',
    'Agentforce expense approval automation',
    'Salesforce AI finance workflow',
    'finance approval Agentforce',
    'Salesforce AI accounts payable',
    'Agentforce approval automation',
    'Salesforce Agentforce implementation',
    'Agentforce internal operations',
    'Salesforce AI expense management',
    'Agentforce invoice routing',
    'Salesforce finance AI agent',
    'Agentforce ERP integration',
    'Salesforce approval process automation',
    'Kovil AI Agentforce',
    'Salesforce Agentforce partner New York',
    'AI finance approval workflow',
    'Salesforce Atlas Reasoning Engine finance',
    'Agentforce policy validation',
    'automated invoice processing Salesforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals | Kovil AI',
    description: 'Agentforce finance approval agent that validates invoices against policy, routes to the right approver, chases SLA breaches, and posts approved transactions to ERP automatically.',
    url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals | Kovil AI',
    description: 'Agentforce finance approval agent that validates invoices against policy, routes to the right approver, chases SLA breaches, and posts approved transactions to ERP automatically.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Finance Approval Agent — Automated Invoice & Expense Approvals',
  description: 'Agentforce finance approval agent that validates invoices against policy, routes to the right approver, chases SLA breaches, and posts approved transactions to ERP automatically.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which ERP systems does the integration support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure integrations with SAP (via REST API or BAPIs), NetSuite (SuiteQL API), Xero (Xero API), and QuickBooks Online (QuickBooks API). These cover the majority of mid-market and enterprise finance stacks. For other ERP systems, we assess API availability in Week 1. If no direct API is available, we use a middleware approach via MuleSoft or Salesforce Connect.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the policy validation handle edge cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Submissions that fall into edge cases — amounts at the exact threshold boundary, new vendor types not explicitly listed, cost codes recently restructured — are routed to the finance exceptions queue for human review rather than automatically approved or rejected. The agent flags the specific ambiguity with context so the finance team can make a judgement call. The decision is then fed back to refine the policy rules — over time, edge cases reduce as the rule set matures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle multi-currency submissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multi-currency submissions are converted to the base reporting currency using the exchange rate configured in Salesforce (either a fixed rate or a live rate feed). The policy threshold checks run against the converted amount. The original currency and amount are preserved on the Finance Request record alongside the converted amount for audit purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the approval SLA and can we configure it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All SLA windows are configured during implementation. Standard defaults are: 24 hours for claims below the standard threshold, 8 hours for above-threshold claims, and 4 hours for flagged urgent submissions. Every SLA window, reminder timing (75% threshold), and escalation chain (who gets notified at breach) is fully configurable per approval tier and cost centre.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Internal Operations', item: 'https://kovil.ai/agentforce/internal-operations' },
    { '@type': 'ListItem', position: 4, name: 'Finance Approval Agent', item: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FinanceApprovalAgentPage />
    </>
  )
}

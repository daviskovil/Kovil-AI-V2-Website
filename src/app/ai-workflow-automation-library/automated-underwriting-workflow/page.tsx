import type { Metadata } from 'next'
import AutomatedUnderwritingPage from '@/src/pages/ai-workflow-automation-library/AutomatedUnderwritingPage'

export const metadata: Metadata = {
  title: 'Automated Underwriting Workflow — FinTech AI | Kovil AI',
  description: 'Automate credit underwriting with AI-driven risk scoring, bureau data integration, and decision engine logic. Reduce manual review time by 70% and approve qualified borrowers in minutes.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow' },
  openGraph: {
    type: 'website',
    title: 'Automated Underwriting Workflow — FinTech AI | Kovil AI',
    description: 'AI-driven underwriting: credit bureau data, risk scoring, decision engine, compliance logging — built and shipped in 4–6 weeks.',
    url: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Automated Underwriting Workflow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Underwriting Workflow — FinTech AI | Kovil AI',
    description: 'AI-driven underwriting: credit bureau data, risk scoring, decision engine, compliance logging — built and shipped in 4–6 weeks.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Automated Credit Underwriting with AI',
  description: 'AI-assisted underwriting workflow that aggregates bureau data, generates risk scores, applies decision engine logic, and produces compliance-ready decision packages.',
  tool: ['n8n', 'Experian / Equifax API', 'GPT-4o', 'Salesforce', 'DocuSign'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Application intake', text: 'Loan application triggers n8n. Applicant PII and financial data extracted and normalised.' },
    { '@type': 'HowToStep', position: 2, name: 'Bureau data pull', text: 'Credit bureau APIs (Experian, Equifax, TransUnion) return credit history, scores, and tradeline data in parallel.' },
    { '@type': 'HowToStep', position: 3, name: 'AI risk scoring', text: 'ML model scores applicant risk across DTI, LTV, credit history, and product-specific factors. SHAP explains the score.' },
    { '@type': 'HowToStep', position: 4, name: 'Decision engine', text: 'Rule-based decision engine applies product policy — auto-approve, refer to underwriter, or decline with reason codes.' },
    { '@type': 'HowToStep', position: 5, name: 'Compliance package', text: 'Decision, rationale, bureau data, and audit trail compiled into a compliance-ready PDF and logged to LOS.' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automated Underwriting Workflow',
  description: 'AI-driven credit underwriting — bureau data aggregation, ML risk scoring, decision engine, and compliance-ready audit trail. Built in 4–6 weeks.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'FinTech AI Workflow Automation',
  url: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow',
  areaServed: { '@type': 'Country', name: 'United States' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What credit bureaus can the underwriting AI connect to?', acceptedAnswer: { '@type': 'Answer', text: 'The workflow connects to Experian, Equifax, and TransUnion via their APIs. We can also integrate with alternative data providers (Plaid, Nova Credit) for thin-file applicants.' } },
    { '@type': 'Question', name: 'Is the AI underwriting decision explainable?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We use SHAP (SHapley Additive exPlanations) to generate human-readable explanations for every risk score. Every decision includes a plain-language rationale for compliance and adverse action notices.' } },
    { '@type': 'Question', name: 'How long does it take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A production-ready automated underwriting workflow typically takes 4–6 weeks, including bureau integrations, model training on your historical data, decision engine configuration, and compliance testing.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Automated Underwriting Workflow', item: 'https://kovil.ai/ai-workflow-automation-library/automated-underwriting-workflow' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><AutomatedUnderwritingPage /></div>
    </>
  )
}

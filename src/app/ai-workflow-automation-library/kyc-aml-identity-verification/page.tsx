import type { Metadata } from 'next'
import KYCAMLPage from '@/src/pages/ai-workflow-automation-library/KYCAMLPage'

export const metadata: Metadata = {
  title: 'KYC/AML Identity Verification Automation — FinTech AI | Kovil AI',
  description: 'Automate KYC/AML identity verification with GPT-4o Vision and AML screening APIs. Extract ID data, screen watchlists, generate risk scores, auto-approve or escalate. Build in 3–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/kyc-aml-identity-verification' },
  openGraph: {
    type: 'website',
    title: 'KYC/AML Identity Verification Automation | Kovil AI',
    description: 'GPT-4o Vision ID extraction + AML watchlist screening + risk scoring — auto-approve or escalate compliant customers in seconds.',
    url: 'https://kovil.ai/ai-workflow-automation-library/kyc-aml-identity-verification',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'KYC AML Identity Verification Automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KYC/AML Identity Verification Automation | Kovil AI',
    description: 'GPT-4o Vision ID extraction + AML watchlist screening + risk scoring — auto-approve or escalate compliant customers in seconds.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Automate KYC/AML Identity Verification',
  description: 'GPT-4o Vision extracts government ID data, AML screening APIs check watchlists, and an ML risk score determines auto-approval or compliance escalation.',
  tool: ['GPT-4o Vision', 'n8n', 'Comply Advantage / World-Check', 'Persona / Jumio', 'Supabase'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Document submission', text: 'Customer submits government-issued ID (passport, driving licence) via onboarding portal. Document uploaded to secure S3 bucket.' },
    { '@type': 'HowToStep', position: 2, name: 'GPT-4o Vision extraction', text: 'GPT-4o Vision extracts name, DOB, ID number, expiry, nationality, and address. Liveness check triggered via Persona or Jumio.' },
    { '@type': 'HowToStep', position: 3, name: 'AML watchlist screening', text: 'Extracted name and DOB screened against OFAC, UN, EU, and PEP lists via ComplyAdvantage or Refinitiv World-Check API.' },
    { '@type': 'HowToStep', position: 4, name: 'Risk scoring', text: 'ML model generates a composite risk score based on ID authenticity, liveness, AML hits, jurisdiction, and customer profile.' },
    { '@type': 'HowToStep', position: 5, name: 'Decision & audit trail', text: 'Low-risk customers auto-approved. High-risk or flagged cases routed to compliance officer. Full audit trail written to database.' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'KYC/AML Identity Verification Automation',
  description: 'Automate KYC/AML identity verification with GPT-4o Vision and AML screening APIs — auto-approve compliant customers in seconds, with full audit trail.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'FinTech AI Workflow Automation',
  url: 'https://kovil.ai/ai-workflow-automation-library/kyc-aml-identity-verification',
  areaServed: { '@type': 'Country', name: 'United States' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which AML screening providers does this integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'The standard build integrates with ComplyAdvantage or Refinitiv World-Check for sanctions, PEP, and adverse media screening. We can add LexisNexis, Dow Jones, or custom watchlists.' } },
    { '@type': 'Question', name: 'Is the KYC/AML system compliant with FinCEN and BSA requirements?', acceptedAnswer: { '@type': 'Answer', text: 'The system is designed with BSA/AML compliance as a first principle — audit trails, SAR-ready documentation, and risk scoring aligned with FinCEN guidance. Your compliance team reviews the final configuration before go-live.' } },
    { '@type': 'Question', name: 'How long does it take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A production KYC/AML automation build takes 3–4 weeks, including GPT-4o Vision integration, AML API connections, risk model configuration, and compliance team sign-off.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'KYC/AML Identity Verification', item: 'https://kovil.ai/ai-workflow-automation-library/kyc-aml-identity-verification' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><KYCAMLPage /></div>
    </>
  )
}

import type { Metadata } from 'next'
import HealthcareAzurePage from '@/src/pages/azure-ai-foundry/industries/HealthcareAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Healthcare & Life Sciences — HIPAA-Ready Azure AI',
  description: 'HIPAA-aligned AI agents for healthcare built on Azure. Automate prior authorisation, clinical documentation, EHR data extraction, patient intake, and discharge planning. Azure Health Data Services.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences' },
  keywords: ['AI agents healthcare Azure', 'HIPAA AI Azure', 'prior authorisation automation AI', 'clinical documentation AI Azure', 'EHR data extraction Azure', 'Azure Health Data Services AI', 'patient intake automation Azure', 'healthcare AI compliance', 'Azure OpenAI healthcare', 'FHIR AI integration', 'Azure AI Document Intelligence healthcare', 'discharge planning AI', 'clinical trial matching AI', 'Kovil AI healthcare', 'Azure AI Foundry healthcare'],
  openGraph: { type: 'website', title: 'AI Agents for Healthcare — HIPAA-Ready Azure AI | Kovil AI', description: 'Automate prior auth, clinical documentation, and EHR extraction on Azure Health Data Services. 100% HIPAA-aligned.', url: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Healthcare — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Healthcare | Kovil AI', description: 'Prior auth automation, clinical docs, EHR extraction on Azure. HIPAA-aligned. 68% pre-auth automated.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Healthcare & Life Sciences',
  description: 'HIPAA-aligned AI agents for healthcare built on Azure AI Foundry and Azure Health Data Services — automating prior authorisation, clinical documentation, EHR data extraction, patient intake, and discharge planning coordination.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the healthcare AI agent HIPAA compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All infrastructure components are deployed within Azure Health Data Services, which is covered under Microsoft\'s HIPAA Business Associate Agreement (BAA). PHI is processed and stored exclusively within your Azure tenant — it never transits shared endpoints. We configure Azure Policy to enforce data residency, apply encryption at rest and in transit, and implement role-based access controls via Microsoft Entra ID. Our implementation documentation supports your own HIPAA risk assessment process.' } },
    { '@type': 'Question', name: 'Which EHR systems does the agent integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'The agent integrates with Epic via the Epic FHIR R4 API, Cerner via Oracle Health APIs, and Meditech via their REST API layer. For EHRs without modern API surfaces, we use Azure AI Document Intelligence to process exported HL7 feeds or PDF clinical documents. All EHR integration is routed through Azure API Management with full authentication, rate limiting, and audit logging.' } },
    { '@type': 'Question', name: 'How does the prior authorisation automation handle payer denials?', acceptedAnswer: { '@type': 'Answer', text: 'The agent monitors submitted prior auth requests for denial responses via payer portal polling or EDI 278 transaction processing. On denial receipt, it automatically extracts the denial reason code, retrieves the relevant clinical evidence from the EHR, drafts a peer-to-peer review request or appeal letter with supporting documentation, and routes it to the appropriate clinical reviewer with all context pre-populated. Denial pattern analysis surfaces systemic issues in payer requirements for operational improvement.' } },
    { '@type': 'Question', name: 'Can the agent generate clinical documentation that clinicians can edit before signing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The agent generates draft clinical documentation — SOAP notes, referral letters, discharge summaries — which are surfaced in the clinician\'s EHR workflow as draft notes requiring review and attestation before they are committed to the medical record. The agent never autonomously commits documentation to the medical record; clinician review and signature are always required. This preserves clinician accountability while eliminating the blank-page documentation burden.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Healthcare & Life Sciences', item: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HealthcareAzurePage />
    </>
  )
}

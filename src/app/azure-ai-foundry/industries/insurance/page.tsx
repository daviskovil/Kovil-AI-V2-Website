import type { Metadata } from 'next'
import InsuranceAzurePage from '@/src/pages/azure-ai-foundry/industries/InsuranceAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Insurance — Claims to Compliance on Azure | Kovil AI',
  description: 'AI agents for insurance built on Azure. Automate claims triage, underwriting, fraud detection, policy servicing, and regulatory filing. 71% claims auto-triaged. 64% fraud detection improvement.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/insurance' },
  keywords: ['AI agents insurance Azure', 'claims automation AI Azure', 'underwriting automation AI', 'insurance fraud detection Azure', 'policy servicing chatbot Azure', 'regulatory filing automation insurance', 'Azure OpenAI insurance', 'Azure AI Document Intelligence insurance', 'Azure Machine Learning insurance', 'claims triage AI', 'renewal propensity scoring AI', 'insurance AI compliance', 'FNOL automation AI', 'Kovil AI insurance', 'Azure AI Foundry insurance'],
  openGraph: { type: 'website', title: 'AI Agents for Insurance — Claims to Compliance | Kovil AI', description: 'Claims triage, fraud detection, underwriting automation, and policy servicing on Azure. 71% claims auto-triaged. $1.4M ops savings.', url: 'https://kovil.ai/azure-ai-foundry/industries/insurance', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Insurance — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Insurance | Kovil AI', description: 'Claims triage, fraud detection, underwriting automation on Azure. 71% auto-triaged. 18hr processing (was 6 days).', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Insurance',
  description: 'Intelligent AI agents for insurance built on Azure AI Foundry — automating claims triage and routing, underwriting document review, fraud detection, policy servicing, regulatory filing, and renewal propensity scoring.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/insurance',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the claims triage agent determine which claims go straight-through vs. to an adjuster?', acceptedAnswer: { '@type': 'Answer', text: 'The triage agent classifies each incoming claim across three dimensions: complexity (single-party vs. multi-party, single-coverage vs. multi-coverage), fraud risk score from the Azure Machine Learning fraud model, and claim value relative to configurable straight-through thresholds. Claims below the fraud risk threshold and claim value threshold that match a known, low-complexity claim pattern are routed to automated payment. All others are assigned to an adjuster queue with an AI-generated claim summary, relevant policy details, and the fraud risk rationale.' } },
    { '@type': 'Question', name: 'What data sources does the fraud detection model use?', acceptedAnswer: { '@type': 'Answer', text: 'The Azure Machine Learning fraud model analyses internal claims history for pattern matching, claimant and entity relationship networks to detect organised fraud rings, third-party fraud indicator databases via API, geospatial data to validate incident locations, and unstructured claim narrative text via Azure OpenAI for inconsistency detection. The model is trained on your historical confirmed fraud cases and updated monthly as new fraud patterns are identified.' } },
    { '@type': 'Question', name: 'Which insurance core systems does the agent integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'We have pre-built integrations for Guidewire ClaimCenter, PolicyCenter, and BillingCenter via their REST APIs. For Duck Creek Technologies and Majesco platforms, we use their standard API layers. Legacy mainframe policy systems are connected via Azure API Management with custom adapter layers. Document management integrations cover Kofax, OnBase, and SharePoint. All integrations are managed through Azure API Management with full authentication, rate limiting, and audit logging.' } },
    { '@type': 'Question', name: 'How does the agent support state insurance department regulatory filing requirements?', acceptedAnswer: { '@type': 'Answer', text: 'The regulatory filing agent maintains a filing calendar for each state in which you operate, pulling requirements from SERFF and NAIC databases. It monitors upcoming deadlines, extracts the required data elements from your policy and claims systems, populates the required filing templates, and routes completed filings to your compliance team for review before submission. For states with SERFF electronic filing support, it can prepare the complete SERFF submission package. Filing history and submission confirmations are retained for audit purposes.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Insurance', item: 'https://kovil.ai/azure-ai-foundry/industries/insurance' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsuranceAzurePage />
    </>
  )
}

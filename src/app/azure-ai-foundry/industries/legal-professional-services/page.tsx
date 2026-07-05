import type { Metadata } from 'next'
import LegalProfServicesAzurePage from '@/src/pages/azure-ai-foundry/industries/LegalProfServicesAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Legal & Professional Services — Azure AI Foundry',
  description: 'AI agents for law firms and professional services built on Azure. Contract review automation, legal research, matter management, client intake, billing analysis. 83% contract review time saved.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services' },
  keywords: ['AI agents legal services Azure', 'contract review AI Azure', 'legal research automation AI', 'matter management AI', 'Azure AI Document Intelligence legal', 'Azure OpenAI law firm', 'legal AI compliance', 'contract extraction AI', 'billing analysis AI Azure', 'regulatory monitoring AI legal', 'client intake automation AI', 'Azure AI Search legal', 'law firm AI automation', 'Kovil AI legal', 'Azure AI Foundry legal services'],
  openGraph: { type: 'website', title: 'AI Agents for Legal & Professional Services — Azure AI | Kovil AI', description: 'Contract review, legal research automation, and matter management on Azure. 83% contract review time saved. $1.2M/yr per practice.', url: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Legal Services — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Legal Services | Kovil AI', description: 'Contract review, legal research, matter management automation on Azure. 83% review time saved. 12-min research.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Legal & Professional Services',
  description: 'Intelligent AI agents for law firms and professional services built on Azure AI Foundry — automating contract review and clause extraction, legal research, matter management, client intake, billing analysis, and regulatory change monitoring.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the contract review agent handle firm-specific playbook requirements?', acceptedAnswer: { '@type': 'Answer', text: 'We configure the contract review agent with your firm\'s approved playbook — including standard position on key clause types, acceptable and non-acceptable deviations, and escalation thresholds by contract value and counterparty type. The agent extracts clause language, classifies it against your playbook, and flags deviations with the specific playbook requirement and the extracted contract text side-by-side. Partners and senior associates review flagged items only, rather than reading full contracts.' } },
    { '@type': 'Question', name: 'Does the legal research agent hallucinate case citations?', acceptedAnswer: { '@type': 'Answer', text: 'Citation accuracy is the critical constraint in legal AI, and we address it architecturally. The research agent uses Azure AI Search grounded retrieval — it searches your authorised legal databases (Westlaw, Lexis, or your internal precedent library) and retrieves actual source documents before generating research memos. Every citation in the output is linked to the source document retrieved from the database. The agent does not generate citations from parametric model memory; all citations come from retrieved sources.' } },
    { '@type': 'Question', name: 'Where does firm and client data reside?', acceptedAnswer: { '@type': 'Answer', text: 'All firm and client data remains within your Azure tenant throughout. We deploy Azure OpenAI as a private resource in your subscription — no data is sent to shared OpenAI endpoints. Document Intelligence processing runs within your tenant. The SharePoint connector accesses your existing document management system with the service account permissions you define. Entra ID governs all access. For firms with specific data residency requirements, we configure deployment to specific Azure regions.' } },
    { '@type': 'Question', name: 'Can the agent integrate with our iManage or NetDocuments document management system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have pre-built connectors for iManage Work 10 and NetDocuments via their REST APIs. The agent can search, retrieve, and tag documents in your DMS, and file generated outputs (research memos, contract summaries, engagement letters) back to the appropriate matter workspace automatically. For firms on Interwoven or other older DMS platforms, we use Azure AI Document Intelligence to process exported document sets.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Legal & Professional Services', item: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LegalProfServicesAzurePage />
    </>
  )
}

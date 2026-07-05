import type { Metadata } from 'next'
import ERPProcessAgentPage from '@/src/pages/azure-ai-foundry/enterprise/ERPProcessAgentPage'

export const metadata: Metadata = {
  title: 'ERP Process Automation Agent — Azure AI Foundry & Dynamics 365',
  description: 'AI agent that automates purchase orders, vendor onboarding, and approval workflows using Semantic Kernel orchestrated against Dynamics 365 and SAP APIs.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/enterprise/erp-process-agent' },
  keywords: ['ERP automation AI', 'Dynamics 365 AI agent', 'Azure AI Foundry ERP', 'purchase order automation', 'vendor onboarding AI', 'Semantic Kernel Dynamics 365', 'SAP AI integration', 'Azure workflow automation', 'ERP process agent', 'AI approval automation', 'Dynamics 365 Semantic Kernel', 'enterprise automation Azure', 'Azure Logic Apps automation', 'ERP AI agent', 'Kovil AI Azure', 'business process automation AI'],
  openGraph: { type: 'website', title: 'ERP Process Automation Agent — Azure AI & Dynamics 365 | Kovil AI', description: 'Automate ERP workflows with Semantic Kernel and Dynamics 365. 60% manual steps eliminated. 4-hour approval cycles.', url: 'https://kovil.ai/azure-ai-foundry/enterprise/erp-process-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'ERP Process Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'ERP Process Automation Agent | Kovil AI', description: 'AI agent automating Dynamics 365 and SAP workflows. 60% manual steps eliminated.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'ERP Process Automation Agent',
  description: 'AI agent automating purchase orders, vendor onboarding, and approval workflows via Semantic Kernel orchestrated against Dynamics 365 and SAP APIs.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/enterprise/erp-process-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does the ERP agent work with SAP as well as Dynamics 365?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Azure API Management provides a unified gateway layer over both Dynamics 365 and SAP APIs. Semantic Kernel plugins abstract the API differences — the agent interacts with a consistent tool interface regardless of the underlying ERP system. This architecture also supports Oracle ERP, NetSuite, and other ERP systems with REST APIs.' } },
    { '@type': 'Question', name: 'How does the agent handle approval escalations?', acceptedAnswer: { '@type': 'Answer', text: 'Approval routing logic is configured as Semantic Kernel plugins with business rules encoded in the agent instructions. When a purchase order requires human approval, the agent routes via Azure Logic Apps to the appropriate approver via Teams notification or email — with the full context (vendor details, cost centre, policy compliance check) pre-loaded. Escalation paths for non-response within SLA are configurable.' } },
    { '@type': 'Question', name: 'Is there a full audit trail for automated ERP actions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every action the agent takes — creating a PO, initiating vendor onboarding, routing for approval — is logged to Azure Monitor with the decision context, agent reasoning, user identity, and timestamp. This audit trail is available for SOX, ISO 27001, and internal compliance review. The audit log is tamper-evident via Azure Monitor retention policies.' } },
    { '@type': 'Question', name: 'What happens when the agent encounters an exception?', acceptedAnswer: { '@type': 'Answer', text: 'Exception handling is designed as a core capability, not an afterthought. When the agent encounters an ambiguous case (vendor not in approved list, PO amount above threshold, missing required fields), it flags the exception with specific resolution instructions and routes to the appropriate human via Teams. The agent does not attempt to resolve exceptions outside its defined authority scope.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise Automation', item: 'https://kovil.ai/azure-ai-foundry/enterprise' },
    { '@type': 'ListItem', position: 4, name: 'ERP Process Agent', item: 'https://kovil.ai/azure-ai-foundry/enterprise/erp-process-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ERPProcessAgentPage />
    </>
  )
}

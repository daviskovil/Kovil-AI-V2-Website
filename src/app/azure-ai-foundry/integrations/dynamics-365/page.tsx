import type { Metadata } from 'next'
import AzureDynamics365Page from '@/src/pages/azure-ai-foundry/integrations/AzureDynamics365Page'

export const metadata: Metadata = {
  title: 'Azure AI Foundry + Dynamics 365 Integration',
  description: 'Build AI agents that act on your Dynamics 365 CRM and ERP data. Lead scoring, service triage, ERP automation, and more — powered by Azure OpenAI and Dataverse connectors.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/dynamics-365' },
  keywords: ['Azure AI Foundry Dynamics 365', 'Dynamics 365 AI agent', 'Azure OpenAI CRM integration', 'Dataverse AI agent', 'Dynamics 365 automation', 'Azure AI Dynamics 365 ERP', 'Semantic Kernel Dynamics 365', 'Copilot Studio Dynamics 365', 'D365 lead scoring AI', 'D365 service agent', 'Azure API Management Dynamics 365', 'CRM AI automation', 'Dynamics 365 copilot', 'Azure AI Foundry CRM', 'Kovil AI Dynamics 365'],
  openGraph: { type: 'website', title: 'Azure AI Foundry + Dynamics 365: AI Agents for CRM & ERP | Kovil AI', description: 'AI agents that read CRM context, trigger workflows, and update Dynamics 365 records autonomously. 68% faster lead qualification.', url: 'https://kovil.ai/azure-ai-foundry/integrations/dynamics-365', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry + Dynamics 365 — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry + Dynamics 365 | Kovil AI', description: 'AI agents acting on your Dynamics 365 CRM and ERP data. Dataverse connectors, Semantic Kernel, Azure OpenAI.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Foundry + Dynamics 365 Integration',
  description: 'AI agents that read Dynamics 365 CRM context, trigger workflows, and update records autonomously via Dataverse connectors and Azure API Management.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/dynamics-365',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Azure AI Foundry connect to Dynamics 365?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Foundry connects to Dynamics 365 via the Dataverse Web API and OData endpoints, routed through Azure API Management. Semantic Kernel plugins wrap each Dynamics 365 entity and action as a discrete callable function, allowing Azure OpenAI agents to read and write CRM and ERP data using OAuth 2.0 managed identity authentication — no stored service account passwords.' } },
    { '@type': 'Question', name: 'Can AI agents write back to Dynamics 365 records, or only read them?', acceptedAnswer: { '@type': 'Answer', text: 'AI agents can both read and write to Dynamics 365 via Dataverse. Write operations include creating and updating records, triggering Power Automate flows, and executing Dynamics 365 actions. All write operations are logged in Azure Monitor with the agent decision context and can be configured with approval requirements above defined thresholds.' } },
    { '@type': 'Question', name: 'Does this require changes to the Dynamics 365 configuration?', acceptedAnswer: { '@type': 'Answer', text: 'Minimal Dynamics 365 configuration is required. The standard Dataverse Web API is used for most operations, so no custom entities or workflows need to be created in Dynamics 365. Where Power Automate triggers are used, standard connectors are configured in the Power Platform environment — no custom Dynamics 365 solutions are deployed.' } },
    { '@type': 'Question', name: 'How is data security handled when AI agents access Dynamics 365?', acceptedAnswer: { '@type': 'Answer', text: 'Authentication uses Entra ID managed identities with least-privilege Dataverse role assignments. Azure API Management enforces request validation, rate limiting, and audit logging. The AI agent operates under the same security model as a human user — it can only access records that the configured service principal is authorised to see in Dynamics 365 security roles.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'Dynamics 365', item: 'https://kovil.ai/azure-ai-foundry/integrations/dynamics-365' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureDynamics365Page />
    </>
  )
}

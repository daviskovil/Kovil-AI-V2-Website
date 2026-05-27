import type { Metadata } from 'next'
import AzurePowerPlatformPage from '@/src/pages/azure-ai-foundry/integrations/AzurePowerPlatformPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry + Power Platform Integration | Kovil AI',
  description: 'AI-powered automation across every business process with Power Automate, Copilot Studio, and Azure OpenAI. 900+ connectors, document processing, approval workflows, and embedded AI in Power Apps.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/power-platform' },
  keywords: ['Azure AI Power Platform', 'Power Automate AI', 'Copilot Studio Power Platform', 'Azure OpenAI Power Automate', 'Power Apps AI', 'Dataverse AI integration', 'Power Platform AI automation', 'AI document processing Power Automate', 'Power BI AI narration', 'Azure AI Document Intelligence Power Automate', 'no-code AI automation Azure', 'Power Platform Copilot', 'Kovil AI Power Platform', 'business process AI Azure', 'enterprise automation low-code'],
  openGraph: { type: 'website', title: 'Azure AI Foundry + Power Platform: AI Automation at Scale | Kovil AI', description: '900+ connectors with LLM intelligence. Power Automate + Azure OpenAI + Copilot Studio. 5x faster workflow creation.', url: 'https://kovil.ai/azure-ai-foundry/integrations/power-platform', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry + Power Platform — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI + Power Platform | Kovil AI', description: 'Power Automate + Azure OpenAI + Copilot Studio. 900+ connectors with AI intelligence. 3-week average deployment.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Foundry + Power Platform Integration',
  description: 'AI-powered automation across business processes using Power Automate, Copilot Studio, and Azure OpenAI — with 900+ pre-built connectors and no-code/low-code deployment.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/power-platform',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Power Automate call Azure OpenAI?', acceptedAnswer: { '@type': 'Answer', text: 'Power Automate calls Azure OpenAI via a custom connector that wraps the Azure OpenAI REST API. The connector is defined in Power Platform with the Azure OpenAI endpoint, API key (stored as a Power Platform environment secret), and request/response schema. Alternatively, Azure API Management can front the Azure OpenAI endpoint with OAuth 2.0 authentication, giving Power Automate flows a managed, rate-limited interface to the AI service.' } },
    { '@type': 'Question', name: 'What is the difference between Copilot Studio and Power Virtual Agents?', acceptedAnswer: { '@type': 'Answer', text: 'Microsoft rebranded Power Virtual Agents as Copilot Studio in 2023 and expanded its capabilities significantly. Copilot Studio now supports generative AI answers (backed by Azure OpenAI), knowledge sources including SharePoint and public websites, and plugin-based extensibility using Power Platform connectors. Existing Power Virtual Agents bots are compatible with Copilot Studio and can be migrated to take advantage of generative AI capabilities.' } },
    { '@type': 'Question', name: 'Can Power Platform AI flows access on-premises systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The on-premises data gateway allows Power Automate flows to connect to on-premises SQL Server, Oracle, SAP, SharePoint Server, and other systems securely. The gateway creates an outbound connection from the on-premises network to Power Platform cloud infrastructure — no inbound firewall rules required. For SAP specifically, the SAP ERP and SAP BTP connectors support both cloud and on-premises SAP systems via the gateway.' } },
    { '@type': 'Question', name: 'How is governance handled for Power Platform AI deployments at enterprise scale?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI configures the Power Platform Center of Excellence (CoE) Starter Kit for governance at scale — providing inventory of all flows, apps, and bots, compliance reporting, maker activity monitoring, and data loss prevention (DLP) policy management. DLP policies control which connectors can be used together in a flow, preventing sensitive data from being sent to unauthorised external services via AI-powered flows.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'Power Platform', item: 'https://kovil.ai/azure-ai-foundry/integrations/power-platform' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzurePowerPlatformPage />
    </>
  )
}

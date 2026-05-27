import type { Metadata } from 'next'
import AzureM365TeamsPage from '@/src/pages/azure-ai-foundry/integrations/AzureM365TeamsPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry + Microsoft 365 & Teams Integration | Kovil AI',
  description: 'Deploy AI agents inside Teams, Outlook, and Office apps via Microsoft Graph API and Copilot Studio. Meeting summarisation, email triage, IT helpdesk — where employees already work.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/microsoft-365-teams' },
  keywords: ['Azure AI Microsoft 365', 'Teams AI agent', 'Copilot Studio Teams', 'Microsoft Graph API AI', 'M365 AI integration', 'Azure OpenAI Teams bot', 'Teams meeting summarisation AI', 'Outlook email triage AI', 'IT helpdesk Teams bot', 'SharePoint RAG Teams', 'Azure AI Foundry M365', 'Microsoft 365 Copilot extension', 'Teams adaptive cards AI', 'Kovil AI Microsoft 365', 'workplace AI agent'],
  openGraph: { type: 'website', title: 'Azure AI Foundry + Microsoft 365 & Teams: AI Agents in Your Workspace | Kovil AI', description: 'AI agents inside Teams, Outlook, and Office. Microsoft Graph API + Copilot Studio. 2.4 hrs saved per employee per week.', url: 'https://kovil.ai/azure-ai-foundry/integrations/microsoft-365-teams', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry + Microsoft 365 & Teams — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI + Microsoft 365 & Teams | Kovil AI', description: 'AI agents deployed inside Teams and Outlook. Graph API, Copilot Studio, Azure OpenAI. No separate portal.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Foundry + Microsoft 365 & Teams Integration',
  description: 'AI agents deployed inside Teams, Outlook, and Office apps using Microsoft Graph API and Copilot Studio — meeting summarisation, email triage, IT helpdesk, and knowledge retrieval.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/microsoft-365-teams',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do Azure AI agents connect to Microsoft 365 data?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI agents access M365 data through the Microsoft Graph API. An Entra ID app registration is created with granular delegated or application permission scopes — covering only the M365 workloads needed (e.g., Mail.Read for Outlook, Calendars.Read for calendar, Files.Read for SharePoint/OneDrive). Agents authenticate using OAuth 2.0 client credentials or delegated flows depending on whether they act on behalf of a user or as a background service.' } },
    { '@type': 'Question', name: 'Can the Teams AI agent access SharePoint documents?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The SharePoint Online connector in Azure AI Search indexes SharePoint document libraries, and the resulting semantic search index is exposed as a Semantic Kernel plugin. When a Teams user queries the knowledge agent, retrieval is permission-aware — the agent only surfaces documents that the requesting user\'s account is authorised to access in SharePoint, enforced via Entra ID group membership and SharePoint permission inheritance.' } },
    { '@type': 'Question', name: 'Does deploying a Teams AI agent require IT admin involvement?', acceptedAnswer: { '@type': 'Answer', text: 'Initial deployment requires a Teams Administrator or Global Administrator to approve the app registration and grant tenant-wide consent for the required Microsoft Graph permission scopes. Once approved, Copilot Studio publishes the bot to Teams via the standard Teams Admin Center app deployment process. Individual users do not need to grant permissions separately after tenant-wide consent is established.' } },
    { '@type': 'Question', name: 'What is the difference between Copilot Studio and building a custom Teams bot?', acceptedAnswer: { '@type': 'Answer', text: 'Copilot Studio provides a no-code/low-code authoring environment for conversational agents that publishes natively to Teams, Outlook, and SharePoint without custom bot development. For standard use cases (Q&A, knowledge retrieval, approval workflows), Copilot Studio reduces development time significantly. Custom Teams Bot Framework bots are appropriate when conversation design requirements exceed Copilot Studio capabilities or when deep integration with non-Microsoft systems requires custom middleware logic.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'Microsoft 365 & Teams', item: 'https://kovil.ai/azure-ai-foundry/integrations/microsoft-365-teams' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureM365TeamsPage />
    </>
  )
}

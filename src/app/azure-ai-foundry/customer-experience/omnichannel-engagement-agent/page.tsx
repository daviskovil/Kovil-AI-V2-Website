import type { Metadata } from 'next'
import OmnichannelEngagementAgentPage from '@/src/pages/azure-ai-foundry/customer-experience/OmnichannelEngagementAgentPage'

export const metadata: Metadata = {
  title: 'Omnichannel Engagement Agent — Teams, Web & Email on Azure | Kovil AI',
  description: 'Unified AI engagement agent across Teams, web chat, and email built on Azure AI Foundry. Consistent brand voice, live Dynamics 365 context, zero conversation loss on channel handoff.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/customer-experience/omnichannel-engagement-agent' },
  keywords: ['omnichannel AI agent Azure', 'Azure AI Teams chatbot', 'Copilot Studio omnichannel', 'Dynamics 365 AI agent', 'Azure Communication Services AI', 'unified customer engagement AI', 'Azure AI Foundry omnichannel', 'multi-channel AI Azure', 'Teams web email AI agent', 'Azure Service Bus messaging AI', 'customer engagement automation', 'omnichannel bot Azure', 'brand voice AI Azure', 'Microsoft Teams AI agent', 'Kovil AI Azure', 'omnichannel customer service'],
  openGraph: { type: 'website', title: 'Omnichannel Engagement Agent — Azure AI | Kovil AI', description: 'One AI agent across Teams, web, and email. Live Dynamics 365 context. 92% brand consistency. Zero context loss.', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/omnichannel-engagement-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Omnichannel Engagement Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Omnichannel Engagement Agent | Kovil AI', description: 'One AI agent across all channels. Teams, web, email. Live CRM context. Built on Azure AI Foundry.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Omnichannel Engagement Agent',
  description: 'Unified AI engagement agent across Teams, web chat, and email using Copilot Studio, Azure Communication Services, and Dynamics 365 integration.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/customer-experience/omnichannel-engagement-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the agent maintain conversation context across channel switches?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Service Bus is used as the cross-channel messaging backbone. When a customer switches from web chat to Teams, the conversation context (full history, extracted entities, open queries) is serialised to Azure Service Bus and reconstructed in the new channel. The customer does not need to repeat themselves — the agent has complete conversation history regardless of where the interaction started.' } },
    { '@type': 'Question', name: 'How does the agent pull live CRM context from Dynamics 365?', acceptedAnswer: { '@type': 'Answer', text: 'Semantic Kernel plugins connect to Dynamics 365 via Azure API Management on every interaction — retrieving the customer account record, interaction history, open cases, and contract status in real time. This data is injected into the agent context window so every response is grounded in the customer\'s actual account state. The agent never provides generic responses that conflict with the customer\'s real situation.' } },
    { '@type': 'Question', name: 'How is brand voice consistency enforced across channels?', acceptedAnswer: { '@type': 'Answer', text: 'Brand voice guidelines are encoded in the agent system prompt as hard constraints — tone, prohibited phrases, required disclaimers, and response structure. These constraints are applied consistently across all channels and all agent instances. Prompt Flow evaluation pipelines run automated brand voice compliance checks on sampled outputs weekly, flagging responses that deviate from guidelines.' } },
    { '@type': 'Question', name: 'Can the agent handle email threads, not just real-time chat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Azure Communication Services Email integration allows the agent to read incoming email threads, understand conversation history across multiple messages, and compose contextually appropriate replies. For customer service use cases, the agent drafts email responses for human review before sending — or sends autonomously for standard query types within configured parameters.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/azure-ai-foundry/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'Omnichannel Engagement Agent', item: 'https://kovil.ai/azure-ai-foundry/customer-experience/omnichannel-engagement-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OmnichannelEngagementAgentPage />
    </>
  )
}

import type { Metadata } from 'next'
import AICustomerServiceAgentPage from '@/src/pages/azure-ai-foundry/customer-experience/AICustomerServiceAgentPage'

export const metadata: Metadata = {
  title: 'AI Customer Service Agent — Resolve 70% of Queries on Azure',
  description: 'Azure AI Foundry customer service agent that autonomously resolves 70%+ of support queries using GPT-4o, Azure AI Search, and Copilot Studio — deployed in Teams and web chat.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/customer-experience/ai-customer-service-agent' },
  keywords: ['Azure AI customer service', 'AI support agent Azure', 'Azure OpenAI customer service', 'Copilot Studio customer support', 'Azure AI Foundry support agent', 'autonomous customer service AI', 'GPT-4o support agent', 'Azure AI Search customer service', 'customer service automation Azure', 'AI contact centre Azure', 'Microsoft AI customer service', 'Teams customer service bot', 'Azure customer support automation', 'AI self-service portal', 'Kovil AI Azure', 'customer service AI agent'],
  openGraph: { type: 'website', title: 'AI Customer Service Agent — 70% Autonomous Resolution | Kovil AI', description: 'Resolve 70%+ of support queries autonomously. Azure OpenAI + Azure AI Search + Copilot Studio. Under 2-minute response time.', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/ai-customer-service-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Customer Service Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Customer Service Agent — 70% Autonomous Resolution | Kovil AI', description: 'Azure AI customer service agent. 70%+ autonomous resolution. 4.6/5 CSAT maintained.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Customer Service Agent',
  description: 'Azure AI Foundry customer service agent autonomously resolving 70%+ of support queries using GPT-4o, Azure AI Search, and Copilot Studio.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/customer-experience/ai-customer-service-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the agent know when to escalate to a human?', acceptedAnswer: { '@type': 'Answer', text: 'Escalation conditions are configured in the agent instructions: sentiment below a configured threshold (detected via Azure AI Language), query complexity above agent capability scope, explicit user request for a human, account tier (premium customers may escalate automatically), and safety flags. When escalation triggers, the agent transfers the conversation with full context — conversation history, extracted entities, attempted resolutions — pre-loaded for the human agent.' } },
    { '@type': 'Question', name: 'Can the agent integrate with our existing CRM or order management system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Semantic Kernel plugins connect the agent to your CRM (Dynamics 365, Salesforce, HubSpot), order management system, and product catalogue via Azure API Management. The agent retrieves live account data, order status, and product information in real time — not from a static knowledge base. This grounding in live data is what enables accurate query resolution without hallucination.' } },
    { '@type': 'Question', name: 'How does Azure AI Search power the knowledge retrieval?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Search indexes your product documentation, help articles, policies, and FAQs using both keyword and vector search. When a customer asks a question, the agent retrieves the most relevant knowledge base content via semantic ranking, then uses GPT-4o to synthesise an accurate answer grounded in that retrieved content. This RAG pattern prevents hallucination — the agent cannot invent answers that aren\'t in your knowledge base.' } },
    { '@type': 'Question', name: 'What channels can the agent be deployed on?', acceptedAnswer: { '@type': 'Answer', text: 'Copilot Studio supports native deployment to Microsoft Teams, SharePoint, custom web chat widgets, and Azure Communication Services (which enables SMS, email, and voice channel integration). All channels share the same agent logic, knowledge base, and CRM integration — responses are consistent regardless of channel.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/azure-ai-foundry/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'AI Customer Service Agent', item: 'https://kovil.ai/azure-ai-foundry/customer-experience/ai-customer-service-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AICustomerServiceAgentPage />
    </>
  )
}

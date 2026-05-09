import type { Metadata } from 'next'
import ArchitectYourFirstAzureAgentPage from '@/src/pages/azure-ai-foundry/playbook/ArchitectYourFirstAzureAgentPage'

export const metadata: Metadata = {
  title: 'How to Architect Your First Azure AI Agent — 14-Question Checklist | Kovil AI',
  description: 'Step-by-step architecture guide for your first Azure AI agent. 14-question readiness checklist, orchestration framework comparison (Semantic Kernel vs Prompt Flow vs AutoGen), and Azure component decisions.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
  keywords: ['Azure AI agent architecture', 'how to build Azure AI agent', 'Semantic Kernel vs Prompt Flow', 'Azure AI agent checklist', 'Azure OpenAI agent design', 'AI agent orchestration Azure', 'Azure AI Foundry architecture guide', 'first Azure AI agent guide', 'Azure agent design decisions', 'AI agent readiness checklist', 'Semantic Kernel architecture', 'Azure AI agent tutorial', 'LLM agent architecture Azure', 'multi-agent Azure design', 'Kovil AI Azure playbook', 'Azure AI architecture decisions'],
  openGraph: { type: 'article', title: 'Architect Your First Azure AI Agent — Kovil AI Playbook', description: '14-question readiness checklist. Semantic Kernel vs Prompt Flow vs AutoGen. Complete architecture guide for Azure AI agents.', url: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Architect Your First Azure AI Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Architect Your First Azure AI Agent | Kovil AI', description: '14-question checklist. Semantic Kernel vs Prompt Flow vs AutoGen. Full architecture guide.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How to Architect Your First Azure AI Agent — 14-Question Checklist',
  description: 'Step-by-step architecture guide for Azure AI agents — covering readiness assessment, orchestration framework selection, and Azure component decisions.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When should I choose Semantic Kernel over Azure Prompt Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Semantic Kernel is the right choice when you need programmatic control over agent behaviour — complex multi-step reasoning, custom tool orchestration, or tight integration with your existing .NET or Python codebase. Prompt Flow is better suited for evaluation-heavy workflows, rapid prototyping, and teams that prefer a visual flow designer. Most production agents start in Prompt Flow for prototyping and graduate to Semantic Kernel for production orchestration.' } },
    { '@type': 'Question', name: 'What are the most common architecture mistakes in first Azure AI agents?', acceptedAnswer: { '@type': 'Answer', text: 'The three most common mistakes are: (1) Not chunking documents correctly for RAG — overlapping chunks with 10–15% overlap significantly improve retrieval quality. (2) Using a single large system prompt instead of layered context — role prompt, retrieved context, and conversation history should be managed separately. (3) No evaluation pipeline — shipping without Prompt Flow evaluation means you have no baseline to measure regressions against when you change the prompt or model.' } },
    { '@type': 'Question', name: 'How do I handle memory and conversation history in Azure agents?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI agents use three memory layers: in-context memory (current conversation window, typically 128k tokens with GPT-4o), external short-term memory (Azure Cosmos DB for session state, persisted across requests), and long-term memory (Azure AI Search vector index for user preferences and historical context). Semantic Kernel manages context window trimming automatically, dropping oldest messages when the window approaches the model\'s limit.' } },
    { '@type': 'Question', name: 'What security controls should I implement from day one?', acceptedAnswer: { '@type': 'Answer', text: 'Four non-negotiable controls from the first deployment: Managed Identity for all service-to-service authentication (no connection strings), Azure Key Vault for all secrets referenced by the agent, Private Endpoints for Azure OpenAI and Azure AI Search (no public endpoint), and Prompt Flow content safety filters with jailbreak and hate/violence detection enabled. These controls are significantly harder to retrofit than to implement from day one.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Architect Your First Azure AI Agent', item: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ArchitectYourFirstAzureAgentPage />
    </>
  )
}

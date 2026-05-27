import type { Metadata } from 'next'
import CopilotVsPVAPage from '@/src/pages/azure-ai-foundry/compare/CopilotVsPVAPage'

export const metadata: Metadata = {
  title: 'Copilot Studio vs Power Virtual Agents — What Changed & Migration Guide | Kovil AI',
  description: 'Power Virtual Agents was rebranded to Copilot Studio in 2023. Here is what actually changed technically — GPT-4o grounding, Semantic Kernel, Azure AI Search — and what it means for your PVA bots.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents' },
  keywords: ['Copilot Studio vs Power Virtual Agents', 'PVA vs Copilot Studio', 'Power Virtual Agents rebranded', 'Microsoft Copilot Studio migration', 'PVA to Copilot Studio migration', 'Copilot Studio GPT-4o', 'Power Virtual Agents Azure AI', 'Semantic Kernel Copilot Studio', 'Copilot Studio Azure AI Search', 'PVA generative answers', 'Copilot Studio Teams deployment', 'Kovil AI Copilot Studio'],
  openGraph: { type: 'article', title: 'Copilot Studio vs Power Virtual Agents | Kovil AI', description: 'What actually changed when Microsoft rebranded PVA to Copilot Studio — and what it means for your existing PVA bots and new agent builds.', url: 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Copilot Studio vs Power Virtual Agents — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Copilot Studio vs Power Virtual Agents | Kovil AI', description: 'What changed technically when PVA became Copilot Studio — and migration guidance for existing bots.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Copilot Studio vs Power Virtual Agents: What Changed and What It Means for Your Agents',
  description: 'Technical explanation of what changed when Microsoft rebranded Power Virtual Agents to Copilot Studio in 2023, including GPT-4o grounding, Semantic Kernel backend, Azure AI Search integration, and migration guidance.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Power Virtual Agents bots stop working after the rebrand to Copilot Studio?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Power Virtual Agents bots continue to work after the rebrand to Copilot Studio. Microsoft has not sunset or deprecated PVA functionality — existing topics, entities, dialog flows, and channel deployments are preserved. The Power Platform admin centre shows your bots under the Copilot Studio product name, but no functional changes occur to existing deployments. Microsoft has stated that PVA bot functionality is fully included in Copilot Studio without requiring migration for existing deployments to continue operating.' }
    },
    {
      '@type': 'Question',
      name: 'Should I migrate my existing PVA bots to Copilot Studio?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on whether your existing bots are meeting their goals. If your PVA bot handles a narrow, well-defined use case where every user intent is already covered by authored topics, migration is not urgent. If your bot regularly fails to answer questions outside its authored topics — a very common PVA pain point — migrating to Copilot Studio with generative answers enabled will immediately improve user experience without requiring you to author new topics. New builds should always use Copilot Studio, as all Microsoft development investment and documentation is now Copilot Studio-oriented.' }
    },
    {
      '@type': 'Question',
      name: 'What is the connection between Copilot Studio and Azure AI Foundry?',
      acceptedAnswer: { '@type': 'Answer', text: 'Copilot Studio connects to Azure AI Foundry via the Azure OpenAI connector in Power Platform. This integration allows Copilot Studio agents to call Azure OpenAI model deployments, use Azure AI Search indexes for grounded RAG responses, and invoke Prompt Flow endpoints built in Azure AI Foundry. Semantic Kernel serves as the agent runtime backend for Copilot Studio\'s autonomous agent capabilities. In practice, Copilot Studio acts as the low-code business layer on top of Azure AI Foundry\'s enterprise AI infrastructure — citizen developers build and manage agents in Copilot Studio, while the AI engineering team manages the Azure AI Foundry backend resources.' }
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/azure-ai-foundry/compare' },
    { '@type': 'ListItem', position: 4, name: 'Copilot Studio vs Power Virtual Agents', item: 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CopilotVsPVAPage />
    </>
  )
}

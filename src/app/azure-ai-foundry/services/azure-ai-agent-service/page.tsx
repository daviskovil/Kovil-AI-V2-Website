import type { Metadata } from 'next'
import AzureAIAgentServicePage from '@/src/pages/azure-ai-foundry/services/AzureAIAgentServicePage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Agent Service — Build Stateful AI Agents on Azure',
  description: 'Build production AI agents on Azure AI Foundry Agent Service. Stateful runs, Code Interpreter, Function Calling, File Search, Azure AI Search grounding. Fixed-price 14-day engagement.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-agent-service' },
  keywords: [
    'Azure AI Foundry agent service',
    'Azure AI agent service',
    'Azure AI agent service implementation',
    'Azure AI agent builder',
    'stateful AI agents Azure',
    'Azure AI agent Code Interpreter',
    'Azure AI agent Function Calling',
    'Azure AI agent File Search',
    'Azure AI Foundry agents',
    'Azure AI agent development',
    'multi-agent Azure AI',
    'Azure AI agent orchestration',
    'Azure OpenAI agent',
    'Azure AI Foundry agent build',
    'AI agent Azure tenant',
    'Azure AI agent service partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Agent Service — Build Stateful AI Agents on Azure | Kovil AI',
    description: 'Build production AI agents on Azure AI Foundry Agent Service. Stateful runs, Code Interpreter, Function Calling, File Search, AI Search grounding. Fixed-price 14-day engagement.',
    url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-agent-service',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Agent Service — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Foundry Agent Service | Kovil AI',
    description: 'Build production AI agents on Azure AI Foundry Agent Service. Stateful runs, tool calling, grounding. Fixed-price 14-day engagement.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure AI Foundry Agent Service Implementation',
  description: 'Kovil AI designs, builds, and deploys production AI agents on Azure AI Foundry Agent Service — implementing stateful agent runs, Code Interpreter, Function Calling, File Search, and Azure AI Search grounding within your Azure compliance boundary.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-agent-service',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 14-day engagement with clear deliverables and evaluation framework' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Azure AI Foundry Agent Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Azure AI Foundry Agent Service is Microsoft's managed infrastructure for building, deploying, and running stateful AI agents within Azure AI Foundry. It provides the runtime for persistent threads (conversation history and state across turns), tool execution (Code Interpreter, File Search, Function Calling, Azure AI Search grounding), and multi-agent coordination — without requiring you to build any session management or tool execution infrastructure yourself.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Azure AI Agent Service different from Azure OpenAI Assistants API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Azure AI Agent Service is the next evolution of the Azure OpenAI Assistants API, now integrated directly into Azure AI Foundry. It adds enterprise capabilities on top of the Assistants API model: support for models beyond Azure OpenAI (including models from the AI Foundry Model Catalog), deeper Prompt Flow integration for LLMOps, tighter Azure AI Search grounding, and full integration with Azure AI Foundry's evaluation, tracing, and governance tooling.",
      },
    },
    {
      '@type': 'Question',
      name: 'What tools can an Azure AI Agent Service agent use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure AI Agent Service provides four built-in tool types: Code Interpreter (a sandboxed Python execution environment for data analysis, calculations, and file generation), File Search (vector retrieval over documents uploaded to the agent), Function Calling (invoking any external API or internal system function you define), and Azure AI Search grounding (retrieval from your enterprise Azure AI Search index for grounded, cited answers). Agents can use multiple tools in a single run, combining them as needed to complete a task.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Azure AI Agent Service handle security and compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All agent execution happens within your Azure tenant — no data leaves your compliance boundary. Authentication uses Managed Identity, secrets are stored in Azure Key Vault, and network traffic stays on private endpoints. Entra ID RBAC controls who can create, invoke, or inspect agents. Every tool call and run step is logged with full tracing, providing the audit trail required for regulated industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Azure AI Agent Service agents coordinate with other agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Azure AI Agent Service supports multi-agent patterns where a primary orchestrator agent dispatches to specialised sub-agents — for example, a routing agent that delegates to a code analysis agent, a document retrieval agent, and a data query agent. Each sub-agent operates independently with its own thread and tool access, and results are passed back to the orchestrator through shared thread context or function calling handoffs.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/azure-ai-foundry/services' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Agent Service', item: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-agent-service' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureAIAgentServicePage />
    </>
  )
}

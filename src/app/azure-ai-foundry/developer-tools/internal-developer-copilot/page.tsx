import type { Metadata } from 'next'
import InternalDeveloperCopilotPage from '@/src/pages/azure-ai-foundry/developer-tools/InternalDeveloperCopilotPage'

export const metadata: Metadata = {
  title: 'Internal Developer Copilot — Azure OpenAI & GitHub Copilot | Kovil AI',
  description: 'AI developer copilot trained on your internal codebase, APIs, and runbooks. Built on Azure OpenAI and GitHub Copilot extensibility. 40% faster onboarding. 30% fewer support tickets.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot' },
  keywords: ['internal developer copilot Azure', 'GitHub Copilot Azure OpenAI', 'Azure AI developer tools', 'codebase AI assistant', 'internal knowledge AI Azure', 'developer productivity AI', 'Azure AI Foundry developer tools', 'GitHub Copilot extension Azure', 'custom copilot codebase', 'Azure DevOps AI assistant', 'developer onboarding AI', 'internal API documentation AI', 'Azure OpenAI code assistant', 'codebase RAG Azure', 'Kovil AI Azure', 'developer copilot enterprise'],
  openGraph: { type: 'website', title: 'Internal Developer Copilot — Azure AI | Kovil AI', description: 'AI copilot trained on your codebase. Azure OpenAI + GitHub Copilot. 40% faster onboarding. 30% fewer tickets.', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Internal Developer Copilot — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Internal Developer Copilot | Kovil AI', description: 'AI copilot trained on your codebase. Azure OpenAI + GitHub Copilot. 40% faster onboarding.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Internal Developer Copilot',
  description: 'AI developer copilot trained on your internal codebase, APIs, and runbooks using Azure OpenAI and GitHub Copilot extensibility — answers developer questions grounded in your actual systems.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How is the copilot trained on our internal codebase?', acceptedAnswer: { '@type': 'Answer', text: 'Your codebase, internal documentation, ADRs, and runbooks are indexed into Azure AI Search using Azure OpenAI embeddings. This vector index becomes the retrieval layer for the copilot — when a developer asks a question, the agent retrieves the most semantically relevant code sections and documentation before generating a response. The index is updated on a configurable schedule via Azure DevOps pipeline triggers.' } },
    { '@type': 'Question', name: 'Does the copilot integrate with GitHub Copilot in VS Code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The copilot is built as a GitHub Copilot Chat Extension — it appears as a named participant in the Copilot Chat panel. Developers interact with it using @your-copilot syntax without leaving their editor. The extension calls your Azure OpenAI deployment via Azure API Management, keeping all code and context within your Azure tenant.' } },
    { '@type': 'Question', name: 'How do you prevent the copilot from hallucinating about our systems?', acceptedAnswer: { '@type': 'Answer', text: 'Every response is grounded in retrieved context from your codebase index. The system prompt enforces that the copilot must cite the specific file or document source for any claim about your systems, and must state explicitly when it does not have sufficient internal documentation to answer. Prompt Flow evaluation pipelines run automated groundedness checks on sampled outputs weekly.' } },
    { '@type': 'Question', name: 'Can the copilot access live system state (e.g. current deployment status)?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Semantic Kernel plugins can connect the copilot to Azure DevOps APIs (pipeline status, PR state), Azure Monitor (current service health), and internal ticketing systems. Developers can ask questions like "what is the current state of the payment service deployment?" and receive live answers without leaving their editor.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'Internal Developer Copilot', item: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InternalDeveloperCopilotPage />
    </>
  )
}

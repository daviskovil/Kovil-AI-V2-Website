import type { Metadata } from 'next'
import AzureAIFoundryPage from '@/src/pages/AzureAIFoundryPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Implementation Partner — Build AI Agents on Azure | Kovil AI',
  description: 'Kovil AI builds production AI agents on Azure AI Foundry — Azure OpenAI, Semantic Kernel, Copilot Studio, Azure AI Search RAG. Fixed-price sprints. 2-week risk-free pilot. New York & Austin.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry' },
  keywords: [
    'Azure AI Foundry',
    'Azure AI Foundry implementation',
    'Azure OpenAI integration',
    'Semantic Kernel development',
    'Azure AI Search RAG',
    'Copilot Studio agents',
    'Prompt Flow LLMOps',
    'Azure AI agent development',
    'Microsoft AI agent builder',
    'Azure OpenAI consultant',
    'Azure AI Foundry partner',
    'enterprise AI agents Azure',
    'Azure AI Foundry New York',
    'Azure AI Foundry Austin',
    'AI agent Dynamics 365',
    'Azure AI implementation partner',
    'Microsoft Copilot Studio implementation',
    'Azure AI Foundry services',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Implementation Partner — Build AI Agents on Azure | Kovil AI',
    description: 'Build production AI agents on Azure AI Foundry. Azure OpenAI, Semantic Kernel, Copilot Studio, RAG pipelines. Fixed-price sprints. 2-week risk-free pilot.',
    url: 'https://kovil.ai/azure-ai-foundry',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Implementation Partner — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Foundry Implementation Partner | Kovil AI',
    description: 'Build production AI agents on Azure. Azure OpenAI, Semantic Kernel, Copilot Studio, RAG. Fixed-price sprints. 2-week risk-free pilot.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Azure AI Foundry Implementation Services',
  description: 'Kovil AI designs, builds and deploys production AI agents on Microsoft Azure AI Foundry — covering Azure OpenAI integration, Semantic Kernel orchestration, Copilot Studio agents, Azure AI Search RAG pipelines, Prompt Flow LLMOps, and Azure AI rescue and optimisation. Fixed-price sprints with a 2-week risk-free pilot.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '734 Franklin Ave',
        addressLocality: 'Garden City',
        addressRegion: 'NY',
        postalCode: '11530',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '1401 Lavaca Street, Unit #7259',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
        addressCountry: 'US',
      },
    ],
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'Azure AI Foundry Implementation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/azure-ai-foundry',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Azure AI Foundry Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure AI Foundry Strategy & Readiness' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Design & Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure OpenAI Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilot Studio Agents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure AI Search & RAG Pipeline' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Azure AI Rescue & Optimisation' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Azure AI Foundry (formerly Azure AI Studio) is Microsoft's unified platform for building, deploying, and governing enterprise AI applications. It brings together the Azure Model Catalog (1,700+ models including GPT-4o, o1, and Phi-4), Prompt Flow for LLMOps, Azure OpenAI Service, Azure AI Search, Semantic Kernel, and Responsible AI tooling — all within a single governed environment integrated with Microsoft Fabric, Copilot Studio, and Microsoft 365.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is Azure AI Foundry different from Azure OpenAI Service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure OpenAI Service is the API gateway to OpenAI models within the Azure trust boundary. Azure AI Foundry is the full development and operations platform — it includes Azure OpenAI, but also the Model Catalog with 1,700+ models, Prompt Flow for deployment orchestration, evaluation tools, RAG pipeline tooling, Responsible AI dashboards, and connections to Azure AI Search and Azure Machine Learning. For most enterprise agent builds, you use both.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Azure AI Foundry implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot agent scoped to one use case — for example, a RAG knowledge agent over SharePoint — typically takes 2–3 weeks from architecture to production deployment. A full multi-agent system with Copilot Studio, Dynamics 365 integration, and Azure AI Search typically runs 6–10 weeks depending on data readiness and enterprise architecture complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Semantic Kernel and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Semantic Kernel is Microsoft's open-source AI orchestration SDK for building multi-step, multi-tool AI agents in Azure. It defines plugins (tools the agent can call), planners (how the agent sequences steps), and memory (how context is maintained). It's the enterprise-grade equivalent of LangChain within the Microsoft ecosystem, with native Azure OpenAI integration and built-in support for function calling, RAG, and structured output.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Azure AI Foundry handle security and compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure AI Foundry inherits Azure enterprise security: Managed Identity for authentication, private endpoints to keep data off the public internet, Azure Key Vault for secrets management, content safety filters, and Entra ID RBAC. It supports HIPAA, SOC 2, ISO 27001, PCI DSS, and FedRAMP compliance frameworks. Prompt Flow provides full audit logging of every AI interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Kovil AI risk-free pilot for Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We scope a single high-impact agent use case, define clear success metrics, and build and deploy it in 2 weeks. If the pilot doesn't hit agreed metrics, you pay nothing. The pilot includes Azure environment provisioning, agent architecture and Prompt Flow deployment, RAG pipeline setup if applicable, evaluation framework, and 30-day post-launch support. Over 90% of our Azure AI pilots convert to full production engagements.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureAIFoundryPage />
    </>
  )
}

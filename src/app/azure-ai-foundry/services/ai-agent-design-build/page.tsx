import type { Metadata } from 'next'
import AIAgentDesignBuildPage from '@/src/pages/azure-ai-foundry/services/AIAgentDesignBuildPage'

export const metadata: Metadata = {
  title: 'AI Agent Design & Build — Azure AI Foundry',
  description: 'Production-grade AI agent design and build on Azure AI Foundry. Semantic Kernel orchestration, multi-agent workflows, evaluation frameworks, and Prompt Flow deployment in four weeks.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build' },
  keywords: [
    'Azure AI Foundry agent development',
    'Semantic Kernel agent build',
    'Azure AI agent design',
    'production AI agents Azure',
    'Azure AI Foundry implementation',
    'Prompt Flow deployment',
    'multi-agent Azure AI',
    'Azure AI agent consulting',
    'Semantic Kernel consulting',
    'Azure AI agent build service',
    'Azure OpenAI agent development',
    'AI agent evaluation Azure',
    'Azure AI Foundry developer',
    'LLM agent production Azure',
    'Azure AI Foundry partner',
    'AI agent orchestration Azure',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Agent Design & Build — Azure AI Foundry',
    description: 'Production-grade AI agent design and build on Azure AI Foundry. Semantic Kernel orchestration, multi-agent workflows, evaluation frameworks, and Prompt Flow deployment in four weeks.',
    url: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Azure AI Foundry Agent Design & Build' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Design & Build — Azure AI Foundry',
    description: 'Production-grade AI agent design and build on Azure AI Foundry. Semantic Kernel orchestration, multi-agent workflows, evaluation frameworks, and Prompt Flow deployment in four weeks.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Design & Build',
  description: 'Production-grade AI agent design and build on Azure AI Foundry using Semantic Kernel, Prompt Flow, and rigorous evaluation frameworks.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Semantic Kernel and why do you use it for Azure AI agent development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semantic Kernel is Microsoft\'s open-source AI orchestration framework that provides structured, testable agent development on Azure AI Foundry. It handles LLM call management, tool registration, memory, and multi-agent coordination — producing agents that are maintainable and observable, unlike bare API implementations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build and deploy a production AI agent on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our four-week engagement delivers a production-deployed agent: Week 1 covers architecture design; Weeks 2–3 cover build and continuous evaluation; Week 4 covers deployment, monitoring setup, and handover. The timeline assumes a single well-scoped use case — multi-agent systems may require additional weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does AI agent evaluation involve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Azure AI Foundry\'s evaluation SDK to run automated assessments throughout development — measuring groundedness (does the answer cite retrieved sources), relevance (does the answer address the query), coherence (is the answer logically structured), and task completion rate. Evaluation runs against curated ground truth datasets specific to your use case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build multi-agent systems on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design and implement multi-agent architectures using Semantic Kernel\'s agent collaboration patterns — including orchestrator-subagent hierarchies, agent handoffs, and shared memory contexts. Multi-agent systems are appropriate when a single agent cannot reliably complete all required tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the agent is deployed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure Azure Monitor, Application Insights, and cost alerting before handover — so your team has full observability over agent behaviour, token spend, and error rates from day one. We also provide a technical runbook and architecture documentation so your team can maintain and extend the agent.',
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
    { '@type': 'ListItem', position: 4, name: 'AI Agent Design & Build', item: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIAgentDesignBuildPage />
    </>
  )
}

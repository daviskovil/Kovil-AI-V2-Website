import type { Metadata } from 'next'
import VertexAgentBuilderPage from '@/src/pages/vertex-ai/services/VertexAgentBuilderPage'

export const metadata: Metadata = {
  title: 'Vertex AI Agent Builder & Reasoning Engine | Kovil AI Google Cloud Vertex AI',
  description: 'Production AI agents built on Vertex AI Agent Builder and Reasoning Engine. Tool calling, multi-agent workflows, Vertex AI Search grounding, and GCP-native security — deployed in four weeks.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/vertex-agent-builder' },
  keywords: [
    'Vertex AI Agent Builder',
    'Vertex AI Reasoning Engine',
    'Google Cloud AI agents',
    'Vertex AI agent development',
    'GCP AI agent consulting',
    'Vertex AI multi-agent workflows',
    'Vertex AI tool calling',
    'Vertex AI agent grounding',
    'production AI agents GCP',
    'Vertex AI Agent Builder consultant',
    'Google Cloud agent orchestration',
    'Vertex AI agent framework',
    'GCP autonomous agents',
    'Vertex AI vs LangChain',
    'Vertex AI agent deployment',
    'Google Cloud AI agentic AI',
    'Vertex AI Reasoning Engine developer',
    'enterprise AI agents Google Cloud',
  ],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Agent Builder & Reasoning Engine | Kovil AI Google Cloud Vertex AI',
    description: 'Production AI agents built on Vertex AI Agent Builder and Reasoning Engine. Tool calling, multi-agent workflows, Vertex AI Search grounding, and GCP-native security — deployed in four weeks.',
    url: 'https://kovil.ai/vertex-ai/services/vertex-agent-builder',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI Vertex AI Agent Builder & Reasoning Engine' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex AI Agent Builder & Reasoning Engine | Kovil AI Google Cloud Vertex AI',
    description: 'Production AI agents built on Vertex AI Agent Builder and Reasoning Engine. Tool calling, multi-agent workflows, Vertex AI Search grounding, and GCP-native security — deployed in four weeks.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vertex AI Agent Builder & Reasoning Engine',
  description: 'Production AI agents built on Vertex AI Agent Builder and Reasoning Engine. Tool calling, multi-agent workflows, Vertex AI Search grounding, and GCP-native security — deployed in four weeks.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Vertex AI Agent Development',
  url: 'https://kovil.ai/vertex-ai/services/vertex-agent-builder',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Four-week agent build with production deployment, monitoring, and multi-agent expansion pathway' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Vertex AI Agent Builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI Agent Builder is Google Cloud\'s managed platform for building, deploying, and managing conversational and task-oriented AI agents. It provides playbooks for natural language instruction, flows for deterministic logic, built-in tool integrations, and Vertex AI Search grounding — all managed within GCP\'s security perimeter without requiring custom orchestration code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Vertex AI Reasoning Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI Reasoning Engine is a managed orchestration service that runs agentic Python applications on GCP. It lets you deploy LangChain, LlamaIndex, or custom agent logic as a scalable, serverless managed service — without managing the underlying infrastructure. It handles scaling, versioning, and integration with other Vertex AI services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Vertex AI Agent Builder differ from LangChain or AutoGen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI Agent Builder is a managed GCP service with built-in integrations, IAM governance, and no infrastructure management. LangChain and AutoGen are open-source frameworks that offer more flexibility but require you to manage hosting, scaling, and security yourself. For GCP-committed organisations, Agent Builder reduces operational overhead significantly; Reasoning Engine can run LangChain agents if you need both.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Vertex AI agents work in multi-agent architectures?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Vertex AI supports multi-agent architectures where specialist agents handle specific tasks — a router agent, a retrieval agent, and an execution agent, for example — orchestrated through Reasoning Engine or Agent Builder flows. We design the multi-agent topology during architecture and build the expansion pathway into the initial deployment so adding new agents is straightforward.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure agent safety and prevent harmful outputs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We implement multiple safety layers: Gemini\'s built-in safety filters configured for your content policies, output validation against expected formats, prompt injection detection, and audit logging via Cloud Logging. For regulated industries, we layer additional output screening and human-in-the-loop approval steps for high-risk actions.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
    { '@type': 'ListItem', position: 4, name: 'Agent Builder & Reasoning Engine', item: 'https://kovil.ai/vertex-ai/services/vertex-agent-builder' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAgentBuilderPage />
    </>
  )
}

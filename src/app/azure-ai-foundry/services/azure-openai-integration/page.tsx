import type { Metadata } from 'next'
import AzureOpenAIIntegrationPage from '@/src/pages/azure-ai-foundry/services/AzureOpenAIIntegrationPage'

export const metadata: Metadata = {
  title: 'Azure OpenAI Integration | Kovil AI Azure AI Foundry',
  description: 'Enterprise Azure OpenAI integration with Managed Identity, Private Endpoints, Content Safety, and token cost monitoring. Production-ready in 14 days.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration' },
  keywords: [
    'Azure OpenAI integration',
    'Azure OpenAI enterprise setup',
    'Azure OpenAI private endpoint',
    'Azure OpenAI managed identity',
    'Azure OpenAI production deployment',
    'Azure OpenAI GPT-4o integration',
    'Azure OpenAI security configuration',
    'Azure OpenAI content safety',
    'Azure OpenAI cost optimisation',
    'Azure OpenAI consulting',
    'Prompt Flow Azure OpenAI',
    'Azure OpenAI token cost reduction',
    'Azure OpenAI o1 integration',
    'Azure OpenAI partner',
    'Azure AI Foundry OpenAI deployment',
    'enterprise LLM integration Azure',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure OpenAI Integration | Kovil AI Azure AI Foundry',
    description: 'Enterprise Azure OpenAI integration with Managed Identity, Private Endpoints, Content Safety, and token cost monitoring. Production-ready in 14 days.',
    url: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Azure OpenAI Integration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure OpenAI Integration | Kovil AI Azure AI Foundry',
    description: 'Enterprise Azure OpenAI integration with Managed Identity, Private Endpoints, Content Safety, and token cost monitoring. Production-ready in 14 days.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure OpenAI Integration',
  description: 'Enterprise Azure OpenAI integration with Managed Identity authentication, Private Endpoint network isolation, Content Safety filtering, and token cost monitoring.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why use Managed Identity instead of API keys for Azure OpenAI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Managed Identity eliminates the need to store and rotate API keys in application code or secret management systems. Authentication is handled by Microsoft Entra ID — meaning access is governed by Azure RBAC roles, auditable in Entra ID logs, and automatically rotated. This meets enterprise security policies that prohibit static API keys for production systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an Azure OpenAI Private Endpoint and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Private Endpoint creates a private IP address for your Azure OpenAI resource within your virtual network — meaning all LLM traffic stays within your Azure network perimeter and never traverses the public internet. This is essential for regulated industries (financial services, healthcare, government) where data must not be sent over public networks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an enterprise Azure OpenAI integration take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our 14-day engagement delivers a fully configured, evaluated integration: Days 1–3 cover model selection and deployment; Days 4–10 cover application integration, Managed Identity, Private Endpoints, and Content Safety configuration; Days 11–14 cover load testing, quality evaluation, and token cost monitoring setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Azure AI Content Safety filtering do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure AI Content Safety operates as a gateway that analyses both inputs to and outputs from Azure OpenAI — detecting and blocking harmful content categories (hate, violence, self-harm, sexual content) at configurable severity thresholds. It can be applied at the model deployment level or within a Prompt Flow pipeline for finer-grained control.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you reduce Azure OpenAI token costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We audit every LLM call for token waste — identifying bloated system prompts, unnecessary context repetition, and opportunities for prompt compression. We implement semantic caching for repeated queries, configure model routing to use smaller models where appropriate, and set up Azure Monitor cost dashboards with budget alerts so overspend is caught immediately.',
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
    { '@type': 'ListItem', position: 4, name: 'Azure OpenAI Integration', item: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureOpenAIIntegrationPage />
    </>
  )
}

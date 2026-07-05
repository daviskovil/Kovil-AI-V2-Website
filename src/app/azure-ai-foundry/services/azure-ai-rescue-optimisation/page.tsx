import type { Metadata } from 'next'
import AzureAIRescueOptimisationPage from '@/src/pages/azure-ai-foundry/services/AzureAIRescueOptimisationPage'

export const metadata: Metadata = {
  title: 'Azure AI Rescue & Optimisation — Azure AI Foundry',
  description: 'Fix underperforming Azure AI deployments. We diagnose hallucinations, reduce token costs, improve latency, and close security gaps in 14 days.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-rescue-optimisation' },
  keywords: [
    'Azure AI rescue service',
    'fix Azure AI hallucinations',
    'Azure OpenAI cost reduction',
    'Azure AI performance optimisation',
    'Azure AI debugging',
    'RAG pipeline fix Azure',
    'Azure AI security remediation',
    'Azure OpenAI latency optimisation',
    'broken Azure AI deployment',
    'Azure AI Foundry rescue',
    'Azure AI token cost reduction',
    'Azure AI monitoring setup',
    'fix underperforming AI agent',
    'Azure AI Foundry optimisation',
    'Azure OpenAI rescue consulting',
    'AI deployment rescue Azure',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure AI Rescue & Optimisation — Azure AI Foundry',
    description: 'Fix underperforming Azure AI deployments. We diagnose hallucinations, reduce token costs, improve latency, and close security gaps in 14 days.',
    url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-rescue-optimisation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Azure AI Rescue & Optimisation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Rescue & Optimisation — Azure AI Foundry',
    description: 'Fix underperforming Azure AI deployments. We diagnose hallucinations, reduce token costs, improve latency, and close security gaps in 14 days.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure AI Rescue & Optimisation',
  description: 'Diagnose and fix underperforming Azure AI deployments — remediating hallucinations, reducing token costs, improving latency, and closing security gaps.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-rescue-optimisation',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common causes of Azure AI agent hallucinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most frequent root causes are: poor chunking strategy producing context that misses key information; weak retrieval configuration that returns irrelevant passages; system prompts that don\'t sufficiently constrain the model to cited sources; high model temperature settings; and absence of groundedness guardrails in the generation step. We diagnose and address all of these systematically.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can you typically reduce Azure OpenAI token costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Token cost reductions of 30–60% are typical after a rescue engagement. The largest gains usually come from prompt compression (removing unnecessary context), semantic caching (avoiding repeated identical calls), model right-sizing (using GPT-4o-mini for tasks that don\'t require GPT-4o), and fixing RAG pipelines that were passing excessive irrelevant context in every call.',
      },
    },
    {
      '@type': 'Question',
      name: 'We inherited an Azure AI deployment from a previous team — can you fix it without starting over?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We assess the existing deployment first to determine what is salvageable versus what needs to be rebuilt. In most cases, architecture foundations are sound but implementation details — prompt design, chunking, retrieval configuration — need remediation. Starting over is rarely necessary and almost never the most cost-effective option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Azure AI security issues do you typically find and fix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common security gaps include: API keys exposed in application code instead of Managed Identity; Azure OpenAI endpoints accessible over public internet without Private Endpoints; missing Content Safety filters; overpermissioned service principals with Owner roles instead of least-privilege; and absent prompt injection mitigations. We close all identified gaps and document the remediation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure success after the rescue engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We establish measurable baselines before remediation — accuracy benchmarks, latency percentiles, token cost per request, and error rates — then re-measure the same metrics post-fix. This gives you clear, quantified evidence of improvement. We also configure ongoing monitoring so you can track these metrics continuously after handover.',
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
    { '@type': 'ListItem', position: 4, name: 'Azure AI Rescue & Optimisation', item: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-rescue-optimisation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureAIRescueOptimisationPage />
    </>
  )
}

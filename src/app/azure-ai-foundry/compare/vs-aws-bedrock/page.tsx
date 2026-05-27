import type { Metadata } from 'next'
import AzureVsAWSBedrockPage from '@/src/pages/azure-ai-foundry/compare/AzureVsAWSBedrockPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry vs AWS Bedrock — Enterprise Platform Comparison | Kovil AI',
  description: 'Detailed comparison of Azure AI Foundry vs AWS Bedrock for enterprise AI. Identity, M365 integration, compliance, model catalog, and vendor lock-in — which platform fits your org?',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock' },
  keywords: ['Azure AI Foundry vs AWS Bedrock', 'Azure AI vs Bedrock', 'AWS Bedrock enterprise comparison', 'Azure OpenAI vs Bedrock', 'enterprise AI platform comparison', 'Azure AI Foundry Microsoft', 'AWS Bedrock Claude', 'Azure vs AWS AI', 'Managed Identity vs IAM', 'M365 AI integration', 'enterprise AI cloud choice', 'Kovil AI Azure'],
  openGraph: { type: 'article', title: 'Azure AI Foundry vs AWS Bedrock | Kovil AI', description: 'Which enterprise AI platform should you build on? A detailed comparison of Azure AI Foundry vs AWS Bedrock across identity, compliance, M365 integration, and model catalog.', url: 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry vs AWS Bedrock — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry vs AWS Bedrock | Kovil AI', description: 'Enterprise platform comparison: identity, compliance, M365 integration, model catalog, lock-in risk.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  headline: 'Azure AI Foundry vs AWS Bedrock: Which Enterprise AI Platform Should You Build On?',
  description: 'Detailed enterprise comparison of Azure AI Foundry and AWS Bedrock covering identity management, M365 integration, compliance certifications, model catalog, multi-agent orchestration, and vendor lock-in risk.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use both Azure AI Foundry and AWS Bedrock together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many large enterprises run Azure AI Foundry for Microsoft-ecosystem workloads — Teams agents, SharePoint RAG, M365 Copilot extensions — while running AWS Bedrock for inference workloads that sit next to existing AWS infrastructure. The platforms call different model endpoints and can coexist within the same organisation. The main consideration is data gravity: each AI workload performs best when it runs close to the data it needs, so keep each use case on its native cloud.' }
    },
    {
      '@type': 'Question',
      name: 'Which platform has more AI models — Azure AI Foundry or AWS Bedrock?',
      acceptedAnswer: { '@type': 'Answer', text: 'AWS Bedrock currently has a broader third-party model marketplace, including Anthropic Claude, Meta Llama, Mistral, AI21 Labs, and Cohere. Azure AI Foundry has a strong model catalog — GPT-4o, o1, Phi-4, Mistral, Llama, and via AI Foundry Model Catalog — but its selection skews toward the OpenAI family. For organisations wanting the widest possible model choice or wanting to use Anthropic Claude specifically, AWS Bedrock has an advantage. For organisations already on Azure OpenAI, Azure AI Foundry is the natural home.' }
    },
    {
      '@type': 'Question',
      name: 'What is the cost difference between Azure AI Foundry and AWS Bedrock?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both platforms use pay-per-token pricing for on-demand inference, with comparable per-token rates for equivalent model families. Azure AI Foundry offers Provisioned Throughput Units (PTU), which provide reserved capacity at predictable monthly cost — typically more economical for high-volume, consistent workloads. AWS Bedrock offers Provisioned Model pricing with similar economics. The key cost differences emerge at the infrastructure layer: Azure AI Foundry deployments using Private Endpoints and Azure AI Search add Azure infrastructure costs that AWS Bedrock Knowledge Bases also add on the AWS side. Total cost of ownership comparisons should include vector storage, private networking, and logging costs alongside token pricing.' }
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/azure-ai-foundry/compare' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry vs AWS Bedrock', item: 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureVsAWSBedrockPage />
    </>
  )
}

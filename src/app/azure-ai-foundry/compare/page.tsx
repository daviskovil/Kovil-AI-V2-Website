import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { BarChart2, ArrowLeftRight, Code2 } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Comparisons — Platform & Framework Guides | Kovil AI',
  description: 'Unbiased comparisons of Azure AI Foundry vs AWS Bedrock, Google Vertex AI, and Salesforce Agentforce — plus Copilot Studio vs Power Virtual Agents and Semantic Kernel vs LangChain.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/compare' },
  keywords: ['azure ai foundry vs aws bedrock', 'azure ai foundry vs google vertex ai', 'azure ai foundry vs agentforce', 'copilot studio vs power virtual agents', 'semantic kernel vs langchain', 'azure ai comparison', 'enterprise ai platform comparison 2026', 'azure openai comparison', 'azure ai foundry alternative'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Comparisons | Kovil AI',
    description: 'Azure AI Foundry vs AWS Bedrock, Vertex AI, Agentforce — plus Copilot Studio vs PVA and Semantic Kernel vs LangChain.',
    url: 'https://kovil.ai/azure-ai-foundry/compare',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Comparisons — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Comparisons | Kovil AI', description: 'Azure vs AWS Bedrock, Vertex AI, Agentforce — framework and platform comparison guides.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Comparisons',
  url: 'https://kovil.ai/azure-ai-foundry/compare',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'Article', name: 'Azure AI Foundry vs AWS Bedrock vs Google Vertex AI', url: 'https://kovil.ai/azure-ai-foundry/compare/vs-aws-bedrock' },
    { '@type': 'Article', name: 'Azure AI Foundry vs Google Vertex AI', url: 'https://kovil.ai/azure-ai-foundry/compare/vs-google-vertex-ai' },
    { '@type': 'Article', name: 'Azure AI Foundry vs Salesforce Agentforce', url: 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce' },
    { '@type': 'Article', name: 'Copilot Studio vs Power Virtual Agents', url: 'https://kovil.ai/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents' },
    { '@type': 'Article', name: 'Semantic Kernel vs LangChain', url: 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/azure-ai-foundry/compare' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Comparisons | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/compare',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Compare' }],
  sectionTag: 'Platform & Framework Comparisons',
  headline: 'Azure AI Foundry',
  headlineAccent: 'vs The Alternatives',
  description: 'Unbiased enterprise comparisons of Azure AI Foundry against competing platforms and frameworks — so you can make an informed build-vs-buy decision before committing your architecture.',
  cards: [
    { href: '/azure-ai-foundry/compare/vs-aws-bedrock', icon: BarChart2, color: AZURE, tag: 'Platform', title: 'Azure AI Foundry vs AWS Bedrock vs Google Vertex AI', description: 'Three-way enterprise comparison for 2026 — model breadth, security posture, integration depth, compliance certifications, and total cost of ownership.' },
    { href: '/azure-ai-foundry/compare/vs-google-vertex-ai', icon: BarChart2, color: '#34D399', tag: 'Platform', title: 'Azure AI Foundry vs Google Vertex AI', description: 'Head-to-head enterprise comparison — Azure OpenAI vs Gemini, Semantic Kernel vs Vertex pipelines, Microsoft 365 integration vs Google Workspace depth.' },
    { href: '/azure-ai-foundry/compare/vs-agentforce', icon: BarChart2, color: '#60A5FA', tag: 'Platform', title: 'Azure AI Foundry vs Salesforce Agentforce', description: 'When to choose Azure AI Foundry vs Salesforce Agentforce — CRM-native agents vs general-purpose enterprise AI agent platforms.' },
    { href: '/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents', icon: ArrowLeftRight, color: '#8B5CF6', tag: 'Microsoft', title: 'Copilot Studio vs Power Virtual Agents', description: 'Migration guide and comparison — what changed when Microsoft rebranded Power Virtual Agents to Copilot Studio, and what it means for your existing bots.' },
    { href: '/azure-ai-foundry/compare/semantic-kernel-vs-langchain', icon: Code2, color: '#F59E0B', tag: 'Framework', title: 'Semantic Kernel vs LangChain', description: 'Enterprise AI framework comparison — Semantic Kernel vs LangChain for production agent orchestration on Azure, covering maturity, ecosystem, and vendor lock-in.' },
  ],
  ctaHeadline: 'Still deciding which platform to build on?',
  ctaBody: 'Book a 30-minute architecture call. We work across Azure AI Foundry, Vertex AI, and Agentforce — and will give you an unbiased recommendation for your use case.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SectionHubTemplate data={data} />
    </>
  )
}

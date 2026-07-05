import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Services — Strategy, Build & Integration',
  description: 'Expert Azure AI Foundry services — strategy & readiness, AI agent design, Azure OpenAI integration, Copilot Studio, Azure AI Search RAG, and rescue sprints. Fixed-price.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services' },
  keywords: ['azure ai foundry services', 'azure openai integration service', 'copilot studio implementation', 'azure ai agent builder', 'azure ai search rag service', 'azure ai strategy', 'azure ai consulting', 'azure ai foundry implementation', 'azure openai consulting', 'azure ai agent service'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Services | Kovil AI',
    description: 'Azure AI Foundry strategy, agent design, OpenAI integration, Copilot Studio, AI Search RAG, and rescue sprints. Fixed-price.',
    url: 'https://kovil.ai/azure-ai-foundry/services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Services — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Services | Kovil AI', description: 'Strategy, agent build, OpenAI integration, Copilot Studio, AI Search RAG on Azure. Fixed-price.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Services',
  url: 'https://kovil.ai/azure-ai-foundry/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI Foundry Strategy & Readiness', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness' },
    { '@type': 'WebPage', name: 'AI Agent Design & Build', url: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build' },
    { '@type': 'WebPage', name: 'Azure OpenAI Integration', url: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration' },
    { '@type': 'WebPage', name: 'Copilot Studio Agents', url: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents' },
    { '@type': 'WebPage', name: 'Azure AI Search & RAG', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag' },
    { '@type': 'WebPage', name: 'Azure AI Rescue & Optimisation', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-rescue-optimisation' },
    { '@type': 'WebPage', name: 'Azure AI Agent Service', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-agent-service' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/azure-ai-foundry/services' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Services | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Services' }],
  sectionTag: 'Azure AI Foundry Implementation Services',
  headline: 'Azure AI Foundry',
  headlineAccent: 'Services',
  description: 'From strategy to production — Kovil AI delivers Azure AI Foundry implementations with fixed-price sprints, starting from a 2-week pilot through to full multi-agent production deployments.',
  stats: [
    { value: '7', label: 'Services' },
    { value: '2 weeks', label: 'To first pilot' },
    { value: 'Fixed', label: 'Price' },
    { value: '2–4 wks', label: 'To production' },
  ],
  cards: [
    { href: '/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness', icon: 'Compass', color: AZURE, title: 'Azure AI Foundry Strategy & Readiness', description: 'Enterprise AI readiness assessment and Azure AI Foundry architecture planning — defining your data strategy, model selection, and deployment roadmap before you build.' },
    { href: '/azure-ai-foundry/services/ai-agent-design-build', icon: 'Cpu', color: '#0EA5E9', title: 'AI Agent Design & Build', description: 'End-to-end AI agent design, build, and deployment on Azure AI Foundry — from requirements through to monitored production agents with Azure AI Agent Service.' },
    { href: '/azure-ai-foundry/services/azure-openai-integration', icon: 'Zap', color: '#8B5CF6', title: 'Azure OpenAI Integration', description: 'Integrate GPT-4o, GPT-4o mini, and Azure OpenAI models into your enterprise systems — with responsible AI controls, content filtering, and private deployment.' },
    { href: '/azure-ai-foundry/services/copilot-studio-agents', icon: 'Bot', color: AZURE, title: 'Copilot Studio Agents', description: 'Low-code AI agents built in Microsoft Copilot Studio — deployed into Teams, Outlook, SharePoint, and Power Platform without a custom development team.' },
    { href: '/azure-ai-foundry/services/azure-ai-search-rag', icon: 'Search', color: '#F59E0B', title: 'Azure AI Search & RAG', description: 'Retrieval-augmented generation using Azure AI Search and your enterprise data — building AI that answers from your own documents, not hallucinated facts.' },
    { href: '/azure-ai-foundry/services/azure-ai-rescue-optimisation', icon: 'Wrench', color: '#EF4444', title: 'Azure AI Rescue & Optimisation', description: 'Inheriting a stalled or underperforming Azure AI project? We audit, optimise, and deliver — covering latency, cost, hallucination rates, and observability.' },
    { href: '/azure-ai-foundry/services/azure-ai-agent-service', icon: 'Settings', color: '#10B981', title: 'Azure AI Agent Service', description: 'Production deployment on Azure AI Agent Service — persistent memory, tool calling, code interpreter, and multi-agent orchestration at enterprise scale.' },
  ],
  ctaHeadline: 'Ready to build on Azure AI Foundry?',
  ctaBody: 'Book a free 30-minute architecture call. We will give you a concrete technical approach and a fixed-price delivery plan.',
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

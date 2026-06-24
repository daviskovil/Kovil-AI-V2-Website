import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { Compass, Cpu, Zap, Bot, Search, Wrench, Settings } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Implementation Services | Kovil AI',
  description: 'Full suite of Azure AI Foundry implementation services — strategy & readiness, AI agent design & build, Azure OpenAI integration, Copilot Studio, RAG pipelines, and rescue & optimisation. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services' },
  keywords: ['azure ai foundry services', 'azure ai implementation services', 'azure openai integration service', 'copilot studio implementation', 'azure ai agent build', 'azure ai search rag implementation', 'azure ai rescue optimisation', 'azure ai agent service implementation', 'azure ai foundry consultant', 'azure ai implementation partner'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Implementation Services | Kovil AI',
    description: 'Full suite of Azure AI Foundry implementation services — strategy, agent build, Azure OpenAI integration, Copilot Studio, RAG pipelines. Fixed-price sprints.',
    url: 'https://kovil.ai/azure-ai-foundry/services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Implementation Services — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Implementation Services | Kovil AI', description: 'Strategy, agent build, Azure OpenAI, Copilot Studio, RAG pipelines. Fixed-price sprints.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Implementation Services | Kovil AI',
  description: 'Full suite of Azure AI Foundry implementation services from Kovil AI.',
  url: 'https://kovil.ai/azure-ai-foundry/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI Foundry Strategy & Readiness', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness' },
    { '@type': 'WebPage', name: 'AI Agent Design & Build', url: 'https://kovil.ai/azure-ai-foundry/services/ai-agent-design-build' },
    { '@type': 'WebPage', name: 'Azure OpenAI Integration', url: 'https://kovil.ai/azure-ai-foundry/services/azure-openai-integration' },
    { '@type': 'WebPage', name: 'Copilot Studio Agents', url: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents' },
    { '@type': 'WebPage', name: 'Azure AI Search & RAG Pipeline', url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-search-rag' },
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
  name: 'Azure AI Foundry Implementation Services | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/services',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Services' }],
  sectionTag: 'Azure AI Foundry Implementation',
  headline: 'Azure AI Foundry',
  headlineAccent: 'Implementation Services',
  description: 'From strategy and readiness through to production AI agents — every Azure AI Foundry implementation service delivered on a fixed-price sprint with a 2-week risk-free pilot.',
  stats: [
    { value: '7', label: 'implementation services' },
    { value: '2 wks', label: 'risk-free pilot' },
    { value: 'Fixed', label: 'price, no hourly billing' },
    { value: '2–4 wks', label: 'to production agent' },
  ],
  cards: [
    { href: '/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness', icon: Compass, color: AZURE, title: 'Azure AI Foundry Strategy & Readiness', description: 'Org readiness assessment, architecture design, and phased deployment roadmap for Azure AI Foundry — before you write a line of code.' },
    { href: '/azure-ai-foundry/services/ai-agent-design-build', icon: Cpu, color: '#0EA5E9', title: 'AI Agent Design & Build', description: 'End-to-end design, configuration, and production deployment of AI agents on Azure AI Foundry — fully integrated with your enterprise systems.' },
    { href: '/azure-ai-foundry/services/azure-openai-integration', icon: Zap, color: '#8B5CF6', title: 'Azure OpenAI Integration', description: 'GPT-4o, o1, and o3 integration into your applications and workflows via Azure OpenAI Service, with responsible AI configuration from day one.' },
    { href: '/azure-ai-foundry/services/copilot-studio-agents', icon: Bot, color: '#0078D4', title: 'Copilot Studio Agents', description: 'Microsoft Copilot Studio agent design, build, and deployment for Teams, web, and enterprise channels — with Power Platform and Dynamics 365 integration.' },
    { href: '/azure-ai-foundry/services/azure-ai-search-rag', icon: Search, color: '#F59E0B', title: 'Azure AI Search & RAG Pipeline', description: 'Retrieval-augmented generation pipelines over SharePoint, Blob Storage, and enterprise knowledge bases — grounding your agents in real data.' },
    { href: '/azure-ai-foundry/services/azure-ai-rescue-optimisation', icon: Wrench, color: '#EF4444', title: 'Azure AI Rescue & Optimisation', description: 'Diagnose, fix, and optimise stalled or underperforming Azure AI Foundry deployments — turning failed pilots into production-ready agents.' },
    { href: '/azure-ai-foundry/services/azure-ai-agent-service', icon: Settings, color: '#10B981', title: 'Azure AI Agent Service', description: 'Stateful, multi-turn AI agents built on the Azure AI Agent Service with tool use, memory, and enterprise system integrations via the SDK.' },
  ],
  ctaHeadline: 'Not sure which service fits your situation?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right starting point and give you a fixed-price delivery plan the same week.',
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

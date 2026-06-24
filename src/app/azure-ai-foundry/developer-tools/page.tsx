import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { Code2, Plug, GitBranch } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Developer Tools & Agents | Kovil AI',
  description: 'AI developer tools on Azure AI Foundry — internal developer copilot, API integration agent, and MLOps automation. Fixed-price production deployments for engineering teams.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
  keywords: ['azure ai developer copilot', 'azure openai developer tools', 'azure ai api integration agent', 'azure mlops automation', 'azure prompt flow mlops', 'internal developer ai azure', 'azure ai foundry developer', 'github copilot azure openai', 'azure apim ai agent', 'azure ai ml pipeline automation'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Developer Tools & Agents | Kovil AI',
    description: 'Internal developer copilot, API integration agent, and MLOps automation on Azure AI Foundry. Fixed-price for engineering teams.',
    url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Developer Tools — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Developer Tools | Kovil AI', description: 'Developer copilot, API agent, and MLOps automation on Azure. Fixed-price for engineering teams.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Developer Tools & Agents',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Internal Developer Copilot on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot' },
    { '@type': 'WebPage', name: 'API Integration Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent' },
    { '@type': 'WebPage', name: 'MLOps Automation Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Developer Tools & Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Developer Tools' }],
  sectionTag: 'Developer Tool Use Cases',
  headline: 'Developer Tools',
  headlineAccent: 'on Azure AI Foundry',
  description: 'AI agents that accelerate your engineering team — from internal developer copilots trained on your codebase to automated API integration and MLOps pipeline management on Azure.',
  cards: [
    { href: '/azure-ai-foundry/developer-tools/internal-developer-copilot', icon: Code2, color: AZURE, title: 'Internal Developer Copilot', description: 'GitHub Copilot-integrated internal developer assistant powered by Azure OpenAI and your internal codebase, documentation, and engineering standards.' },
    { href: '/azure-ai-foundry/developer-tools/api-integration-agent', icon: Plug, color: '#8B5CF6', title: 'API Integration Agent', description: 'Automate API discovery, documentation, and integration testing using Azure API Management and OpenAPI specifications — reducing integration overhead.' },
    { href: '/azure-ai-foundry/developer-tools/mlops-automation-agent', icon: GitBranch, color: '#34D399', title: 'MLOps Automation Agent', description: 'Automate model deployment, monitoring, and retraining pipelines with Azure Prompt Flow and MLflow — continuous delivery for your AI systems.' },
  ],
  ctaHeadline: 'Ready to accelerate your engineering team with AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right developer tool use case and give you a fixed-price delivery plan.',
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

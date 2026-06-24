import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Playbook — Guides, Pricing & Case Studies | Kovil AI',
  description: 'Azure AI Foundry technical playbook — architect your first agent, Azure OpenAI vs OpenAI API, claims processing case study, pricing guide 2026, security compliance, and ROI guide.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook' },
  keywords: ['azure ai foundry playbook', 'azure openai guide', 'architect azure ai agent', 'azure ai pricing 2026', 'azure openai vs openai api', 'azure ai security compliance guide', 'azure ai roi guide', 'claims processing azure ai', 'azure ai foundry tutorial', 'azure ai foundry articles'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Playbook — Guides & Case Studies | Kovil AI',
    description: 'Architect your first Azure AI agent, pricing guide 2026, claims case study, security compliance, and ROI guide.',
    url: 'https://kovil.ai/azure-ai-foundry/playbook',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Playbook — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Playbook | Kovil AI', description: 'Architect agents, pricing, claims case study, security, and ROI guides for Azure AI Foundry.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Playbook — Guides & Case Studies',
  url: 'https://kovil.ai/azure-ai-foundry/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'Article', name: 'Architect Your First Azure AI Agent', url: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
    { '@type': 'Article', name: 'Azure OpenAI vs OpenAI API', url: 'https://kovil.ai/azure-ai-foundry/playbook/azure-openai-vs-openai-api' },
    { '@type': 'Article', name: 'Claims Processing Azure AI Case Study', url: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
    { '@type': 'Article', name: 'Azure AI Foundry Pricing Guide 2026', url: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026' },
    { '@type': 'Article', name: 'Azure AI Security & Compliance Guide', url: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide' },
    { '@type': 'Article', name: 'Azure AI ROI Guide', url: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Playbook — Guides & Case Studies | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Playbook' }],
  sectionTag: 'Technical Guides & Case Studies',
  headline: 'The Azure AI Foundry',
  headlineAccent: 'Playbook',
  description: 'Practical guides, architectural deep-dives, pricing breakdowns, and real-world case studies for enterprise teams building on Azure AI Foundry and Azure OpenAI.',
  cards: [
    { href: '/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent', icon: 'BookOpen', color: AZURE, tag: 'Guide', title: 'Architect Your First Azure AI Agent', description: 'Step-by-step enterprise architecture guide for building your first production AI agent on Azure AI Foundry — covering model selection, grounding, memory, and tool use.' },
    { href: '/azure-ai-foundry/playbook/azure-openai-vs-openai-api', icon: 'ArrowLeftRight', color: '#8B5CF6', tag: 'Comparison', title: 'Azure OpenAI vs OpenAI API', description: 'When to use Azure OpenAI Service vs the OpenAI API directly — covering compliance, data residency, private networking, SLAs, and enterprise security controls.' },
    { href: '/azure-ai-foundry/playbook/claims-processing-azure-ai-build', icon: 'FileText', color: '#34D399', tag: 'Case Study', title: 'Claims Processing on Azure AI', description: 'How we automated 73% of insurance claims processing using Azure AI Document Intelligence and GPT-4o — cutting processing time from 4 days to 4 hours.' },
    { href: '/azure-ai-foundry/playbook/pricing-guide-2026', icon: 'DollarSign', color: '#F59E0B', tag: 'Guide', title: 'Azure AI Foundry Pricing Guide 2026', description: 'Comprehensive pricing guide for Azure OpenAI, Azure AI Search, Azure AI Agent Service, and Copilot Studio — with real-world cost estimates for enterprise workloads.' },
    { href: '/azure-ai-foundry/playbook/security-compliance-guide', icon: 'Lock', color: '#EF4444', tag: 'Guide', title: 'Security & Compliance Guide', description: 'Enterprise security architecture for Azure AI Foundry — covering RBAC, private endpoints, content filtering, audit logging, and regulated industry compliance.' },
    { href: '/azure-ai-foundry/playbook/roi-guide', icon: 'TrendingUp', color: '#10B981', tag: 'Guide', title: 'Azure AI ROI Guide', description: 'How to build a credible ROI case for Azure AI Foundry — frameworks, metrics, and real-world benchmarks for calculating time-to-value and cost savings.' },
  ],
  ctaHeadline: 'Want a guide written for your specific use case?',
  ctaBody: 'Book a 30-minute call and we will walk you through the right architecture for your Azure AI Foundry build.',
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

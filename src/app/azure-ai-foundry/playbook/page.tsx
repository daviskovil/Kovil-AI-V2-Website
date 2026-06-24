import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { BookOpen, ArrowLeftRight, FileText, DollarSign, Lock, TrendingUp } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Playbook: Implementation Guides & Technical Articles | Kovil AI',
  description: 'Practitioner guides for Azure AI Foundry — architecture checklists, pricing breakdowns, ROI frameworks, security configuration, and real deployment case studies. Written by engineers who ship Azure AI in production.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook' },
  keywords: ['azure ai foundry playbook', 'azure ai foundry guide', 'azure ai implementation guide', 'azure openai vs openai api', 'azure ai foundry pricing guide', 'azure ai foundry roi guide', 'azure ai foundry security guide', 'azure ai agent architecture', 'azure ai case study', 'azure ai foundry best practices'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Playbook: Implementation Guides & Technical Articles | Kovil AI',
    description: 'Practitioner guides for Azure AI Foundry — pricing, ROI, security, agent architecture, and deployment case studies from engineers who build in production.',
    url: 'https://kovil.ai/azure-ai-foundry/playbook',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Playbook — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Playbook | Kovil AI', description: 'Architecture checklists, pricing, ROI, and security guides from engineers who ship Azure AI in production.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Playbook',
  description: 'Practitioner guides, implementation patterns, pricing breakdowns, ROI frameworks, and technical deep dives for Azure AI Foundry deployments.',
  url: 'https://kovil.ai/azure-ai-foundry/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'Article', name: 'How to Architect Your First Azure AI Agent', url: 'https://kovil.ai/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
    { '@type': 'Article', name: 'Azure OpenAI vs OpenAI API', url: 'https://kovil.ai/azure-ai-foundry/playbook/azure-openai-vs-openai-api' },
    { '@type': 'Article', name: 'Claims Processing AI Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
    { '@type': 'Article', name: 'Azure AI Foundry Pricing Guide 2026', url: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026' },
    { '@type': 'Article', name: 'Azure AI Foundry Security & Compliance Guide', url: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide' },
    { '@type': 'Article', name: 'Azure AI Foundry ROI Guide', url: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide' },
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
  name: 'Azure AI Foundry Playbook | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Playbook' }],
  sectionTag: 'Azure AI Foundry Playbook',
  headline: 'Azure AI Foundry',
  headlineAccent: 'Implementation Guides',
  description: 'Practitioner guides written by engineers who ship Azure AI Foundry in production — architecture checklists, pricing breakdowns, ROI frameworks, security configuration, and real deployment case studies.',
  cards: [
    { href: '/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent', icon: BookOpen, color: AZURE, tag: 'Architecture', title: 'How to Architect Your First Azure AI Agent', description: '14-question checklist for scoping, designing, and deploying your first Azure AI Foundry agent in production — covering model selection, grounding, and guardrails.' },
    { href: '/azure-ai-foundry/playbook/azure-openai-vs-openai-api', icon: ArrowLeftRight, color: '#8B5CF6', tag: 'Comparison', title: 'Azure OpenAI vs OpenAI API', description: 'Enterprise comparison guide — security, compliance, data residency, SLA, and total cost of ownership differences between Azure OpenAI Service and the direct OpenAI API.' },
    { href: '/azure-ai-foundry/playbook/claims-processing-azure-ai-build', icon: FileText, color: '#34D399', tag: 'Case Study', title: 'Claims Processing AI Agent on Azure', description: 'Insurance claims processing agent case study — end-to-end architecture, Azure Document Intelligence integration, and production deployment guide.' },
    { href: '/azure-ai-foundry/playbook/pricing-guide-2026', icon: DollarSign, color: '#F59E0B', tag: 'Pricing', title: 'Azure AI Foundry Pricing Guide 2026', description: 'What enterprise Azure AI Foundry actually costs — token pricing by model, compute, storage, and realistic total cost of ownership for production deployments.' },
    { href: '/azure-ai-foundry/playbook/security-compliance-guide', icon: Lock, color: '#EF4444', tag: 'Security', title: 'Azure AI Foundry Security & Compliance Guide', description: 'Complete enterprise configuration guide — RBAC, Private Link, content filtering, audit logging, and responsible AI configuration for regulated deployments.' },
    { href: '/azure-ai-foundry/playbook/roi-guide', icon: TrendingUp, color: '#10B981', tag: 'ROI', title: 'Azure AI Foundry ROI Guide', description: 'How to build an Azure AI Foundry business case that holds up — ROI framework, benefit quantification, and the numbers that get executive approval.' },
  ],
  ctaHeadline: 'Ready to build on Azure AI Foundry?',
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

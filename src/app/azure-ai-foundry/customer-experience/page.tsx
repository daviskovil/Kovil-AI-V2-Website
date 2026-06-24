import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { Headphones, Sparkles, Globe } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Customer Experience Agents | Kovil AI',
  description: 'Customer experience AI agents on Azure AI Foundry — AI customer service, personalised recommendations, and omnichannel engagement. Resolve 70%+ of queries autonomously. Fixed-price deployments.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/customer-experience' },
  keywords: ['azure ai customer service agent', 'azure ai personalised recommendation', 'azure ai omnichannel agent', 'azure openai customer experience', 'azure ai contact centre', 'copilot studio customer service', 'azure ai foundry cx', 'azure ai customer engagement', 'azure openai recommendation engine'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Customer Experience Agents | Kovil AI',
    description: 'AI customer service, personalised recommendations, and omnichannel engagement agents on Azure. Resolve 70%+ of queries autonomously.',
    url: 'https://kovil.ai/azure-ai-foundry/customer-experience',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Customer Experience Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Customer Experience Agents | Kovil AI', description: 'AI customer service, recommendations, and omnichannel engagement on Azure. Fixed-price.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Customer Experience Agents',
  url: 'https://kovil.ai/azure-ai-foundry/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'AI Customer Service Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/ai-customer-service-agent' },
    { '@type': 'WebPage', name: 'Personalised Recommendation Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/personalised-recommendation-agent' },
    { '@type': 'WebPage', name: 'Omnichannel Engagement Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/omnichannel-engagement-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/azure-ai-foundry/customer-experience' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Customer Experience Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Customer Experience' }],
  sectionTag: 'Customer Experience Use Cases',
  headline: 'Customer Experience',
  headlineAccent: 'on Azure AI Foundry',
  description: 'AI agents that resolve customer queries autonomously, personalise at scale, and engage consistently across every channel — built on Azure OpenAI, Copilot Studio, and Azure AI Search.',
  cards: [
    { href: '/azure-ai-foundry/customer-experience/ai-customer-service-agent', icon: Headphones, color: AZURE, title: 'AI Customer Service Agent', description: 'Resolve 70% of customer queries autonomously with Azure OpenAI-powered service agents — integrated into your CRM, knowledge base, and support channels.' },
    { href: '/azure-ai-foundry/customer-experience/personalised-recommendation-agent', icon: Sparkles, color: '#F59E0B', title: 'Personalised Recommendation Agent', description: 'Real-time product and content recommendations using Azure OpenAI embeddings and vector search — personalised to individual user behaviour and preferences.' },
    { href: '/azure-ai-foundry/customer-experience/omnichannel-engagement-agent', icon: Globe, color: '#34D399', title: 'Omnichannel Engagement Agent', description: 'Consistent AI engagement across Teams, web, email, and SMS channels using Microsoft Copilot Studio — meeting customers wherever they choose to interact.' },
  ],
  ctaHeadline: 'Ready to improve your customer experience with AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the highest-impact use case and give you a fixed-price delivery plan.',
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

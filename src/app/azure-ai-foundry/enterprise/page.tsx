import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { FileText, BookOpen, Settings } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Enterprise Automation Agents | Kovil AI',
  description: 'Enterprise automation agents on Azure AI Foundry — document intelligence, enterprise knowledge search, and ERP process automation. Fixed-price production deployments.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/enterprise' },
  keywords: ['azure ai enterprise automation', 'azure document intelligence agent', 'azure enterprise knowledge agent', 'azure ai erp automation', 'azure ai foundry enterprise', 'azure openai enterprise agent', 'azure ai document processing', 'azure ai search enterprise knowledge', 'azure ai dynamics erp agent'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Enterprise Automation Agents | Kovil AI',
    description: 'Document intelligence, enterprise knowledge search, and ERP process automation agents on Azure AI Foundry. Fixed-price production deployments.',
    url: 'https://kovil.ai/azure-ai-foundry/enterprise',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Enterprise Automation — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Enterprise Automation | Kovil AI', description: 'Document intelligence, enterprise knowledge, and ERP process agents on Azure. Fixed-price.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Enterprise Automation Agents',
  url: 'https://kovil.ai/azure-ai-foundry/enterprise',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI Document Intelligence Agent', url: 'https://kovil.ai/azure-ai-foundry/enterprise/document-intelligence-agent' },
    { '@type': 'WebPage', name: 'Enterprise Knowledge Agent', url: 'https://kovil.ai/azure-ai-foundry/enterprise/enterprise-knowledge-agent' },
    { '@type': 'WebPage', name: 'ERP Process Automation Agent', url: 'https://kovil.ai/azure-ai-foundry/enterprise/erp-process-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Enterprise Automation', item: 'https://kovil.ai/azure-ai-foundry/enterprise' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Enterprise Automation Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/enterprise',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Enterprise Automation' }],
  sectionTag: 'Enterprise Automation Use Cases',
  headline: 'Enterprise Automation',
  headlineAccent: 'on Azure AI Foundry',
  description: 'Production-ready AI agents for the highest-value enterprise automation patterns — document processing, knowledge management, and ERP process intelligence — all built on Azure AI Foundry.',
  cards: [
    { href: '/azure-ai-foundry/enterprise/document-intelligence-agent', icon: FileText, color: AZURE, title: 'Document Intelligence Agent', description: 'Automated document extraction, classification, and processing using Azure AI Document Intelligence — handling invoices, contracts, forms, and unstructured documents at scale.' },
    { href: '/azure-ai-foundry/enterprise/enterprise-knowledge-agent', icon: BookOpen, color: '#8B5CF6', title: 'Enterprise Knowledge Agent', description: 'Unified enterprise search and Q&A agent over SharePoint, Confluence, and internal knowledge bases — powered by Azure AI Search RAG and GPT-4o.' },
    { href: '/azure-ai-foundry/enterprise/erp-process-agent', icon: Settings, color: '#34D399', title: 'ERP Process Automation Agent', description: 'Automate ERP approval workflows, data entry, and process monitoring with Azure AI connected to Dynamics 365 — reducing manual process overhead.' },
  ],
  ctaHeadline: 'Ready to automate your highest-volume enterprise process?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right use case and give you a fixed-price delivery plan.',
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

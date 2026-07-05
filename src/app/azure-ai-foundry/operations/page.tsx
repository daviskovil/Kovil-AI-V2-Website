import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Operations Intelligence Agents',
  description: 'Operations intelligence agents on Azure AI Foundry — predictive maintenance, supply chain intelligence, and compliance monitoring. Production deployments on fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/operations' },
  keywords: ['azure ai predictive maintenance', 'azure ai supply chain intelligence', 'azure ai compliance monitoring', 'azure iot predictive maintenance', 'azure openai operations', 'azure ai foundry operations', 'azure ai operations agent', 'azure data factory supply chain', 'azure ai monitor compliance'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI',
    description: 'Predictive maintenance, supply chain intelligence, and compliance monitoring agents on Azure AI Foundry. Fixed-price production deployments.',
    url: 'https://kovil.ai/azure-ai-foundry/operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Operations Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI', description: 'Predictive maintenance, supply chain, and compliance agents on Azure. Fixed-price.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Operations Intelligence Agents',
  url: 'https://kovil.ai/azure-ai-foundry/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Predictive Maintenance Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent' },
    { '@type': 'WebPage', name: 'Supply Chain Intelligence Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent' },
    { '@type': 'WebPage', name: 'AI Compliance Monitoring Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/compliance-monitoring-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/azure-ai-foundry/operations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Operations' }],
  sectionTag: 'Operations Intelligence Use Cases',
  headline: 'Operations Intelligence',
  headlineAccent: 'on Azure AI Foundry',
  description: 'AI agents that monitor, predict, and optimise your operational processes — connected to IoT data, supply chain systems, and compliance frameworks via Azure AI Foundry.',
  cards: [
    { href: '/azure-ai-foundry/operations/predictive-maintenance-agent', icon: 'Wrench', color: '#F59E0B', title: 'Predictive Maintenance Agent', description: 'IoT-connected predictive maintenance using Azure IoT Hub, time-series data, and Azure OpenAI analysis — detecting failure signals before equipment goes down.' },
    { href: '/azure-ai-foundry/operations/supply-chain-intelligence-agent', icon: 'Package', color: AZURE, title: 'Supply Chain Intelligence Agent', description: 'End-to-end supply chain visibility, demand forecasting, and risk detection using Azure OpenAI and Azure Data Factory — reducing disruption and overstocking.' },
    { href: '/azure-ai-foundry/operations/compliance-monitoring-agent', icon: 'Shield', color: '#34D399', title: 'Compliance Monitoring Agent', description: 'Automated regulatory compliance monitoring using Azure Monitor, OpenAI analysis, and alert workflows — catching compliance gaps before they become violations.' },
  ],
  ctaHeadline: 'Ready to bring AI intelligence to your operations?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right operational use case and give you a fixed-price delivery plan.',
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

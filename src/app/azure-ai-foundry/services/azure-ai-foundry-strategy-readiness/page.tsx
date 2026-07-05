import type { Metadata } from 'next'
import AzureAIFoundryStrategyReadinessPage from '@/src/pages/azure-ai-foundry/services/AzureAIFoundryStrategyReadinessPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Strategy & Readiness — Azure AI Foundry',
  description: 'Azure AI Foundry readiness assessment and AI strategy consulting. Audit your Azure environment, map highest-ROI opportunities, and receive a production-ready architecture blueprint in 10 days.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness' },
  keywords: [
    'Azure AI Foundry strategy consulting',
    'Azure AI readiness assessment',
    'Azure AI Foundry implementation roadmap',
    'Azure OpenAI strategy',
    'Azure AI Foundry consulting',
    'Azure AI architecture blueprint',
    'Azure AI use case prioritisation',
    'Azure OpenAI readiness',
    'Azure AI ROI planning',
    'Azure AI Foundry audit',
    'Azure AI cost modelling',
    'Azure AI security review',
    'Azure AI Foundry partner',
    'Azure AI implementation planning',
    'Azure AI agent strategy',
    'Azure AI Foundry roadmap',
    'Azure AI Foundry assessment',
    'Azure AI investment justification',
  ],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Strategy & Readiness — Azure AI Foundry',
    description: 'Azure AI Foundry readiness assessment and AI strategy consulting. Audit your Azure environment, map highest-ROI opportunities, and receive a production-ready architecture blueprint in 10 days.',
    url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Azure AI Foundry Strategy & Readiness' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Foundry Strategy & Readiness — Azure AI Foundry',
    description: 'Azure AI Foundry readiness assessment and AI strategy consulting. Audit your Azure environment, map highest-ROI opportunities, and receive a production-ready architecture blueprint in 10 days.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Azure AI Foundry Strategy & Readiness',
  description: 'Azure AI Foundry readiness assessment and AI strategy consulting. Audit your Azure environment, map highest-ROI opportunities, and receive a production-ready architecture blueprint in 10 days.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in the Azure AI Foundry Strategy & Readiness engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement includes a full Azure environment audit covering existing OpenAI deployments, data estate readiness, networking, and cost; use case prioritisation ranked by ROI and feasibility; data estate readiness scoring; security and compliance review; cost modelling for prioritised use cases; and a detailed agent architecture blueprint. You receive a board-ready roadmap on Day 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Azure AI Foundry readiness assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement delivers results in 10 days: Days 1–3 cover the Azure environment audit; Days 4–7 cover use case prioritisation and stakeholder alignment; Day 10 is architecture blueprint delivery. You leave with a complete, phased implementation plan ready to execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'We have Azure OpenAI access but no agents deployed — is this the right starting point?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This engagement is designed for organisations with Azure OpenAI access and budget approval but no production AI agents deployed. We turn your existing Azure subscription into a funded activation plan with clear ROI justification and a phased rollout schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a data estate readiness assessment involve for Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We assess whether your data sources — Azure Data Lake, Fabric, SQL, Blob Storage, SharePoint — are sufficiently structured and accessible to ground Azure AI Foundry agents in accurate, real-time information. This includes reviewing data quality, integration readiness, and indexing requirements for Azure AI Search.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this engagement help justify Azure AI Foundry investment to leadership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The architecture blueprint is designed to be board-ready — it includes phased implementation plans, resource and cost requirements, defined success metrics, and ROI projections for each prioritised use case. It gives leadership the confidence to fund Azure AI Foundry development.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/azure-ai-foundry/services' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry Strategy & Readiness', item: 'https://kovil.ai/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureAIFoundryStrategyReadinessPage />
    </>
  )
}

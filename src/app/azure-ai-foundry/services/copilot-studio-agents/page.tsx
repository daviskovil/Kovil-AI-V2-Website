import type { Metadata } from 'next'
import CopilotStudioAgentsPage from '@/src/pages/azure-ai-foundry/services/CopilotStudioAgentsPage'

export const metadata: Metadata = {
  title: 'Copilot Studio Agents | Kovil AI Azure AI Foundry',
  description: 'Build and deploy Microsoft Copilot Studio agents inside Microsoft Teams, grounded in Azure AI Search, SharePoint, and Dynamics 365. Live in 14 days.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents' },
  keywords: [
    'Copilot Studio agent development',
    'Microsoft Copilot Studio consulting',
    'Copilot Studio Teams integration',
    'Copilot Studio SharePoint grounding',
    'Copilot Studio Azure AI Search',
    'Microsoft Teams AI agent',
    'Copilot Studio implementation',
    'Copilot Studio partner',
    'Power Platform AI agent',
    'Copilot Studio Dynamics 365',
    'Microsoft 365 AI agent',
    'Copilot Studio deployment',
    'low-code AI agent Microsoft',
    'enterprise Copilot Studio build',
    'Copilot Studio knowledge grounding',
    'Microsoft AI agent consulting',
  ],
  openGraph: {
    type: 'website',
    title: 'Copilot Studio Agents | Kovil AI Azure AI Foundry',
    description: 'Build and deploy Microsoft Copilot Studio agents inside Microsoft Teams, grounded in Azure AI Search, SharePoint, and Dynamics 365. Live in 14 days.',
    url: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Kovil AI Copilot Studio Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copilot Studio Agents | Kovil AI Azure AI Foundry',
    description: 'Build and deploy Microsoft Copilot Studio agents inside Microsoft Teams, grounded in Azure AI Search, SharePoint, and Dynamics 365. Live in 14 days.',
    images: ['https://kovil.ai/og-azure-ai-foundry.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Copilot Studio Agents',
  description: 'Design, build, and deploy Microsoft Copilot Studio agents inside Microsoft Teams, grounded in Azure AI Search, SharePoint, and Dynamics 365.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price engagement with clear deliverables and timelines' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Microsoft Copilot Studio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microsoft Copilot Studio is a low-code platform for building AI-powered conversational agents that integrate with Microsoft 365 services. Agents can be grounded in Azure AI Search, SharePoint, Dynamics 365, and external APIs — and deployed directly into Microsoft Teams for your entire organisation without requiring custom application development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Copilot Studio differ from building agents directly in Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Copilot Studio is a low-code platform optimised for Microsoft 365 integration — particularly Teams deployment, SharePoint grounding, and Dynamics 365 connectivity. Azure AI Foundry with Semantic Kernel is better suited for complex, code-first agent architectures. We recommend Copilot Studio when deep M365 integration matters most and custom logic requirements are limited.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the Copilot Studio agent grounded in our internal knowledge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We connect the agent to an Azure AI Search index built from your SharePoint libraries, document stores, and other internal knowledge sources. Every agent response is grounded in retrieved passages from this index — reducing hallucinations and making the agent authoritative for your organisation\'s specific knowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Copilot Studio agent respect our existing SharePoint permissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When configured with Entra ID-aware retrieval, the agent only returns content the querying user is authorised to access in SharePoint. This ensures that sensitive documents remain protected even when surfaced through a conversational AI interface.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy a Copilot Studio agent into Teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our 14-day engagement delivers a fully tested, production-deployed agent inside Teams: Days 1–3 cover agent design and topic mapping; Days 4–10 cover build and Azure AI grounding; Days 11–14 cover Teams deployment, user acceptance testing, and analytics configuration.',
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
    { '@type': 'ListItem', position: 4, name: 'Copilot Studio Agents', item: 'https://kovil.ai/azure-ai-foundry/services/copilot-studio-agents' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CopilotStudioAgentsPage />
    </>
  )
}

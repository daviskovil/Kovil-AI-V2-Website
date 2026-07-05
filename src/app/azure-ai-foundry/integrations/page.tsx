import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Integrations — Dynamics 365, Microsoft 365, SAP & More',
  description: 'Connect Azure AI Foundry to your enterprise systems — Dynamics 365, Microsoft 365 & Teams, SharePoint, Power Platform, SAP, and ServiceNow. Fixed-price integration sprints.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations' },
  keywords: ['azure ai foundry dynamics 365', 'azure ai microsoft 365 teams', 'azure ai sharepoint', 'azure ai power platform', 'azure ai sap integration', 'azure ai servicenow integration', 'azure ai foundry enterprise integrations', 'azure openai dynamics integration', 'copilot studio teams integration'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Integrations | Kovil AI',
    description: 'Connect Azure AI Foundry to Dynamics 365, Microsoft 365, SharePoint, Power Platform, SAP, and ServiceNow. Fixed-price integration sprints.',
    url: 'https://kovil.ai/azure-ai-foundry/integrations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Integrations — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Integrations | Kovil AI', description: 'Dynamics 365, Microsoft 365, SharePoint, SAP, ServiceNow — Azure AI enterprise integrations.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Integrations',
  url: 'https://kovil.ai/azure-ai-foundry/integrations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI Foundry + Dynamics 365', url: 'https://kovil.ai/azure-ai-foundry/integrations/dynamics-365' },
    { '@type': 'WebPage', name: 'Azure AI Foundry + Microsoft 365 & Teams', url: 'https://kovil.ai/azure-ai-foundry/integrations/microsoft-365-teams' },
    { '@type': 'WebPage', name: 'Azure AI Search + SharePoint', url: 'https://kovil.ai/azure-ai-foundry/integrations/sharepoint' },
    { '@type': 'WebPage', name: 'Azure AI Foundry + Power Platform', url: 'https://kovil.ai/azure-ai-foundry/integrations/power-platform' },
    { '@type': 'WebPage', name: 'Azure AI Foundry + SAP', url: 'https://kovil.ai/azure-ai-foundry/integrations/sap' },
    { '@type': 'WebPage', name: 'Azure AI Foundry + ServiceNow', url: 'https://kovil.ai/azure-ai-foundry/integrations/servicenow' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Integrations | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/integrations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Integrations' }],
  sectionTag: 'Enterprise System Integrations',
  headline: 'Azure AI Foundry',
  headlineAccent: 'Integrations',
  description: 'Connect Azure AI Foundry agents to your enterprise systems of record — Dynamics 365, Microsoft 365, SharePoint, Power Platform, SAP, and ServiceNow — for AI grounded in real operational data.',
  cards: [
    { href: '/azure-ai-foundry/integrations/dynamics-365', icon: 'Database', color: AZURE, title: 'Azure AI Foundry + Dynamics 365', description: 'Connect Azure AI Foundry agents to Dynamics 365 CRM and ERP — giving agents real-time access to customer records, opportunities, cases, and finance data.' },
    { href: '/azure-ai-foundry/integrations/microsoft-365-teams', icon: 'MessageSquare', color: '#0EA5E9', title: 'Azure AI Foundry + Microsoft 365 & Teams', description: 'Surface AI agents directly in Microsoft Teams, Outlook, and the Microsoft 365 productivity suite — meeting users where they already work.' },
    { href: '/azure-ai-foundry/integrations/sharepoint', icon: 'FolderOpen', color: AZURE, title: 'Azure AI Search + SharePoint', description: 'Build AI knowledge bases over SharePoint document libraries using Azure AI Search and RAG — making internal documents queryable in natural language.' },
    { href: '/azure-ai-foundry/integrations/power-platform', icon: 'Zap', color: '#8B5CF6', title: 'Azure AI Foundry + Power Platform', description: 'Embed Azure AI agents in Power Apps and Power Automate flows — extending AI capabilities to low-code business processes and citizen developers.' },
    { href: '/azure-ai-foundry/integrations/sap', icon: 'Settings', color: '#F59E0B', title: 'Azure AI Foundry + SAP', description: 'Connect Azure AI Foundry to SAP S/4HANA and Business Suite — enabling AI-powered ERP automation, procurement intelligence, and process agents.' },
    { href: '/azure-ai-foundry/integrations/servicenow', icon: 'ClipboardList', color: '#EF4444', title: 'Azure AI Foundry + ServiceNow', description: 'Automate ITSM workflows, deflect service desk tickets, and accelerate incident resolution with Azure AI agents integrated into the ServiceNow platform.' },
  ],
  ctaHeadline: 'Need a system that isn\'t listed here?',
  ctaBody: 'We integrate Azure AI Foundry with any API-accessible enterprise system. Book a call and we will scope the integration.',
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

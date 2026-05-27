import type { Metadata } from 'next'
import AzureVsAgentforcePage from '@/src/pages/azure-ai-foundry/compare/AzureVsAgentforcePage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry vs Salesforce Agentforce — AI Agent Platform Comparison | Kovil AI',
  description: 'Azure AI Foundry vs Salesforce Agentforce: which AI agent platform is right for your org? CRM-native AI vs enterprise infrastructure AI — a detailed comparison with honest verdict.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce' },
  keywords: ['Azure AI Foundry vs Agentforce', 'Azure AI vs Salesforce Agentforce', 'Agentforce enterprise comparison', 'Salesforce AI agents vs Azure', 'Einstein AI vs Azure OpenAI', 'enterprise AI agent platform', 'CRM AI vs enterprise AI', 'Agentforce vs Microsoft Copilot', 'Azure AI Foundry Salesforce integration', 'AI agents enterprise comparison', 'Kovil AI Azure Foundry'],
  openGraph: { type: 'article', title: 'Azure AI Foundry vs Salesforce Agentforce | Kovil AI', description: 'CRM-native AI vs enterprise infrastructure AI: a detailed comparison of Azure AI Foundry and Salesforce Agentforce with honest recommendations.', url: 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry vs Salesforce Agentforce — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry vs Salesforce Agentforce | Kovil AI', description: 'CRM-native AI vs enterprise infrastructure AI — which agent platform fits which use case?', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  headline: 'Azure AI Foundry vs Salesforce Agentforce: Which AI Agent Platform Is Right for You?',
  description: 'Detailed comparison of Azure AI Foundry and Salesforce Agentforce covering data scope, model selection, compliance, enterprise integrations, and how to decide which platform fits which use case.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can Azure AI Foundry and Salesforce Agentforce work together?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — and many enterprise organisations use both. A common architecture: Agentforce handles CRM-bounded automation (lead qualification, case routing, opportunity updates) within Salesforce, while Azure AI Foundry agents handle enterprise-wide workflows (document processing, compliance monitoring, ERP integration) deployed in Teams and web portals. Data flows between the two platforms via Salesforce REST APIs, MuleSoft, or Azure Logic Apps connectors. The platforms are complementary rather than competing when the right use cases are assigned to each.' }
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce work outside of Salesforce CRM?',
      acceptedAnswer: { '@type': 'Answer', text: 'Agentforce is primarily designed to operate within the Salesforce ecosystem — its agents are grounded on Salesforce CRM data and deploy within Salesforce interfaces (Sales Cloud, Service Cloud, Experience Cloud). Agentforce can call external APIs via Salesforce Flow and Apex, but these integrations require Salesforce development expertise and are bounded by what Salesforce\'s integration layer supports. For workflows requiring deep access to non-Salesforce data sources — SharePoint, SQL databases, ERP systems, Azure Blob Storage — Azure AI Foundry is the more capable platform.' }
    },
    {
      '@type': 'Question',
      name: 'Which is more cost-effective — Azure AI Foundry or Agentforce?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce is licensed as a Salesforce add-on, typically priced per conversation or per user seat on top of existing Salesforce licences. Azure AI Foundry costs are consumption-based (Azure OpenAI token pricing + Azure AI Search + infrastructure), which can be more economical at high conversation volumes or for internal-facing use cases where Salesforce seat pricing would be prohibitive. For CRM-native use cases where every user already has a Salesforce licence, Agentforce's add-on cost is straightforward. For enterprise-wide AI across all employees and systems, Azure AI Foundry's consumption model typically scales better." }
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/azure-ai-foundry/compare' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry vs Salesforce Agentforce', item: 'https://kovil.ai/azure-ai-foundry/compare/vs-agentforce' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureVsAgentforcePage />
    </>
  )
}

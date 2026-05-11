import type { Metadata } from 'next'
import AzureAgentReadinessPage from '@/src/pages/AzureAgentReadinessPage'

export const metadata: Metadata = {
  title: 'Azure AI Agent Deployment Readiness Assessment | Kovil AI',
  description: 'Free 4-minute assessment for enterprise AI decision-makers. Find out if your organisation is ready to deploy AI agents on Azure AI Foundry — scored across infrastructure, data, use case, team, and investment. Get a full 90-day deployment plan.',
  keywords: [
    'Azure AI Foundry readiness assessment',
    'Azure AI agent deployment',
    'enterprise AI readiness assessment',
    'Azure OpenAI agent readiness',
    'Azure AI Foundry assessment tool',
    'AI agent readiness score',
    'deploy AI agents on Azure',
    'Kovil AI Azure',
  ],
  alternates: { canonical: 'https://kovil.ai/tools/azure-ai-agent-readiness' },
  openGraph: {
    type: 'website',
    title: 'Azure AI Agent Deployment Readiness Assessment | Kovil AI',
    description: 'Is your enterprise ready to deploy AI agents on Azure AI Foundry? Get your personalised readiness score, 90-day roadmap, and deployment plan in 4 minutes.',
    url: 'https://kovil.ai/tools/azure-ai-agent-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Azure AI Agent Deployment Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Agent Deployment Readiness Assessment | Kovil AI',
    description: 'Free 4-minute assessment. Get your Azure AI Foundry readiness score + a full 90-day deployment plan.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Azure AI Agent Deployment Readiness Assessment',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://kovil.ai/tools/azure-ai-agent-readiness',
  description: 'A free 4-minute interactive assessment for enterprise AI decision-makers. Scores your organisation across Azure infrastructure, data quality, use case clarity, team capability, and investment readiness — then delivers a personalised recommended first agent, Azure services stack, 90-day deployment roadmap, data readiness plan, and team governance checklist.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  creator: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  audience: { '@type': 'Audience', audienceType: 'Enterprise AI decision-makers, Azure architects, CTOs, and IT leaders' },
  featureList: [
    'Readiness score across 5 Azure AI dimensions with per-dimension insights',
    'Industry-specific recommended first AI agent use case',
    'Tailored Azure services stack with descriptions of why each service is needed',
    'Phased 90-day deployment roadmap with specific tasks for your situation',
    'Data readiness action plan tailored to your data quality and sources',
    'Team and governance checklist based on your Azure expertise and HITL status',
    'Critical blockers and risk flags with severity levels',
    'Downloadable PDF report',
    'Free, no sign-up required — results delivered instantly',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Azure AI Foundry readiness and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure AI Foundry readiness refers to how prepared an enterprise is — in terms of Azure infrastructure, data quality, team expertise, and governance — to successfully build and deploy AI agents using Microsoft\'s Azure AI Foundry platform. High readiness means an organisation can ship a production-grade agent in 4–6 weeks. Low readiness means foundational work is needed first, and skipping it leads to costly rebuilds, security failures, and agents that don\'t perform reliably in production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Azure AI Agent Readiness Assessment measure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The assessment scores your organisation across five dimensions: (1) Azure Infrastructure — subscription tier, existing Azure AI services, and identity/security controls; (2) Data — source availability, quality, and compliance requirements; (3) Use Case Clarity — how well-defined your target agent and workflows are; (4) Team — Azure expertise, AI/ML maturity, and human-in-the-loop governance; (5) Investment — monthly budget earmarked for Azure AI services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I get from the assessment results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The results include: (1) Your overall readiness score (0–100) with a tier classification; (2) Dimension scores with a specific insight for each dimension; (3) Your recommended first Azure AI agent use case based on your industry, with estimated build time and expected ROI; (4) The exact Azure services stack for your use case; (5) A phased 90-day deployment roadmap with specific tasks; (6) A data readiness action plan tailored to your data sources and quality; (7) A team and governance checklist; and (8) Critical blockers to resolve. All results are downloadable as a PDF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Azure services are needed to build an AI agent on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core Azure services depend on your agent type. For an internal knowledge assistant: Azure OpenAI Service (GPT-4o), Azure AI Search (RAG retrieval), Microsoft Graph API (SharePoint/Teams ingestion), and Azure AI Foundry for orchestration. For document processing: Azure Document Intelligence, Azure OpenAI, Azure Blob Storage, and Azure Functions. For customer-facing chatbots: Azure OpenAI, Azure AI Search, Azure Bot Service, and Azure Cosmos DB. The assessment recommends the specific stack for your target agent type.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy an AI agent on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enterprise-Ready organisations (score 76+) can have a first agent live in 4–6 weeks. Pre-Production Ready organisations (56–75) typically take 6–10 weeks once specific gaps are addressed. Organisations needing foundation work (36–55) should expect 12–16 weeks including infrastructure setup. The assessment provides a specific phased roadmap for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should take this Azure AI agent readiness assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This assessment is designed for enterprise AI decision-makers including Chief AI Officers, CTOs, Head of IT, Head of Digital Transformation, Azure architects, and AI/ML team leads who are evaluating whether and how to deploy AI agents using Azure AI Foundry. It is particularly valuable for organisations in Financial Services, Healthcare, Manufacturing, Professional Services, Government, Retail, and Technology.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://kovil.ai/tools' },
    { '@type': 'ListItem', position: 3, name: 'Azure AI Agent Readiness Assessment', item: 'https://kovil.ai/tools/azure-ai-agent-readiness' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><AzureAgentReadinessPage /></div>
    </>
  )
}

import type { Metadata } from 'next'
import AzureAgentReadinessPage from '@/src/pages/AzureAgentReadinessPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Agent Deployment Readiness Assessment | Kovil AI',
  description: 'Free 4-minute assessment for enterprise AI decision-makers. Find out if your organisation is ready to deploy AI agents on Azure AI Foundry — scored across infrastructure, data, use case, team, and investment.',
  keywords: [
    'Azure AI Foundry readiness',
    'Azure AI agent deployment',
    'enterprise AI readiness assessment',
    'Azure OpenAI agent',
    'Azure AI Foundry assessment',
    'AI agent readiness score',
    'deploy AI agents Azure',
    'Kovil AI Azure',
  ],
  alternates: { canonical: 'https://kovil.ai/tools/azure-agent-readiness' },
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Agent Deployment Readiness Assessment | Kovil AI',
    description: 'Is your enterprise ready to deploy AI agents on Azure AI Foundry? Get your personalised readiness score across 5 dimensions in 4 minutes.',
    url: 'https://kovil.ai/tools/azure-agent-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Azure AI Foundry Agent Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azure AI Foundry Agent Deployment Readiness Assessment | Kovil AI',
    description: 'Free 4-minute assessment. Find out if your enterprise is ready to deploy AI agents on Azure AI Foundry.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Azure AI Foundry Agent Deployment Readiness Assessment',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://kovil.ai/tools/azure-agent-readiness',
  description: 'A free 4-minute assessment for enterprise AI decision-makers. Scores your organisation across Azure infrastructure, data quality, use case clarity, team capability, and investment readiness — then delivers a personalised recommended first agent and Azure services stack.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  creator: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Enterprise AI decision-makers, Azure architects, and IT leaders',
  },
  featureList: [
    'Readiness score across 5 Azure AI dimensions',
    'Industry-specific recommended first AI agent use case',
    'Tailored Azure services stack recommendation',
    'Critical blockers and risk flags identified',
    'Human-in-the-loop governance gap analysis',
    'Downloadable PDF report',
    'Free, no sign-up required',
    'Results delivered instantly',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Azure AI Foundry readiness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Azure AI Foundry readiness refers to how prepared an enterprise is — in terms of Azure infrastructure, data quality, team expertise, and governance — to successfully build and deploy AI agents using Microsoft\'s Azure AI Foundry platform. High readiness means an organisation can ship a production-grade agent in 4–6 weeks. Low readiness means foundational work is needed first.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Azure AI Foundry Agent Readiness Assessment measure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The assessment scores your organisation across five dimensions: (1) Azure Infrastructure — subscription tier, existing Azure AI services, and identity/security controls; (2) Data — source availability, quality, and compliance requirements; (3) Use Case Clarity — how well-defined your target agent and workflows are; (4) Team — Azure expertise, AI/ML maturity, and human-in-the-loop governance; (5) Investment — monthly budget available for Azure AI services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Azure services do I need to build an AI agent on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core Azure services for most AI agent builds on Azure AI Foundry include: Azure OpenAI Service (GPT-4o as the reasoning model), Azure AI Search (for retrieval-augmented generation), Azure Document Intelligence (for document processing use cases), Azure API Management (for access control), and Microsoft Entra ID (for identity and security). The assessment recommends the specific stack for your agent type.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to deploy an AI agent on Azure AI Foundry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For organisations that score Enterprise-Ready, a first production-grade AI agent typically takes 4–6 weeks to build and deploy using Azure AI Foundry. Pre-Production Ready organisations typically take 6–10 weeks once identified gaps are addressed. Organisations that need foundation work should expect 4–8 weeks of setup before the build sprint begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is human-in-the-loop (HITL) and why is it important for enterprise AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Human-in-the-loop (HITL) refers to the defined process by which a human reviews, approves, or overrides an AI agent\'s outputs. For enterprise AI deployments, HITL is critical for compliance, liability management, and quality assurance. Agents without a defined HITL process frequently fail enterprise security audits and produce unchecked errors that reach customers or internal stakeholders. The assessment evaluates how mature your HITL governance plan is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should take the Azure AI Foundry readiness assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This assessment is designed for enterprise AI decision-makers including Chief AI Officers, Chief Technology Officers, Head of IT, Azure architects, and digital transformation leads who are evaluating whether to build AI agents on Azure AI Foundry. It is particularly valuable for teams in Financial Services, Healthcare, Manufacturing, Professional Services, Government, and Retail sectors.',
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
    { '@type': 'ListItem', position: 3, name: 'Azure AI Foundry Agent Readiness Assessment', item: 'https://kovil.ai/tools/azure-agent-readiness' },
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

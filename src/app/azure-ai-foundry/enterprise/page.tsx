import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Enterprise Automation Agents',
  description: 'Enterprise agents on Azure AI Foundry: document intelligence, enterprise knowledge search, and ERP process automation. Fixed-price deployments.',
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
    { href: '/azure-ai-foundry/enterprise/document-intelligence-agent', icon: 'FileText', color: AZURE, title: 'Document Intelligence Agent', description: 'Automated document extraction, classification, and processing using Azure AI Document Intelligence — handling invoices, contracts, forms, and unstructured documents at scale.' },
    { href: '/azure-ai-foundry/enterprise/enterprise-knowledge-agent', icon: 'BookOpen', color: '#8B5CF6', title: 'Enterprise Knowledge Agent', description: 'Unified enterprise search and Q&A agent over SharePoint, Confluence, and internal knowledge bases — powered by Azure AI Search RAG and GPT-4o.' },
    { href: '/azure-ai-foundry/enterprise/erp-process-agent', icon: 'Settings', color: '#34D399', title: 'ERP Process Automation Agent', description: 'Automate ERP approval workflows, data entry, and process monitoring with Azure AI connected to Dynamics 365 — reducing manual process overhead.' },
  ],
  overview: {
    "heading": "How enterprise automation agents on Azure AI Foundry work",
    "paragraphs": [
      "Three patterns account for much of the manual work in large organisations: reading documents, finding answers in internal knowledge, and clicking through ERP screens. The agents in this section automate each one.",
      "The Document Intelligence Agent receives documents by email, upload portal or Azure Blob Storage, classifies them, extracts structured fields with Azure AI Document Intelligence and GPT-4o, scores its confidence, and pushes validated data into your ERP, CRM or document system through Azure Logic Apps. The Enterprise Knowledge Agent connects Azure AI Search to SharePoint, Confluence and other repositories and answers with cited responses grounded in what it retrieves. The ERP Process Agent maps your workflows and builds secure connections to Dynamics 365 or SAP through Azure API Management.",
      "Each agent keeps a checkpoint before it acts alone: confidence scores on extraction, citations on answers, and a shadow-mode period where ERP agents run alongside your existing process."
    ]
  },
  comparison: {
    "heading": "Which enterprise agent fits which process",
    "columns": [
      "Agent",
      "Job it does",
      "Where it gets input",
      "How it acts",
      "Main Azure services"
    ],
    "rows": [
      [
        "Document Intelligence",
        "Extracts and classifies invoices, contracts, forms and unstructured documents",
        "Email, upload portal, Azure Blob Storage",
        "Validates against business rules and pushes data into your ERP, CRM or document system, with an audit trail in Azure Monitor",
        "Azure AI Document Intelligence, Azure OpenAI GPT-4o, Blob Storage, Logic Apps, Prompt Flow"
      ],
      [
        "Enterprise Knowledge",
        "Answers questions over internal knowledge",
        "SharePoint, Confluence and internal knowledge bases through Microsoft Graph and connectors",
        "Returns cited answers using hybrid vector and keyword retrieval, in Teams or Copilot Studio",
        "Azure AI Search, Azure OpenAI GPT-4o, SharePoint connector, Copilot Studio"
      ],
      [
        "ERP Process Automation",
        "Handles approvals, data entry and process monitoring",
        "Dynamics 365 or SAP through API connections",
        "Runs multi-step workflows built from Semantic Kernel plugins, with monitoring dashboards",
        "Semantic Kernel, API Management, Dynamics 365 connector, Logic Apps, Azure OpenAI"
      ]
    ]
  },
  faqs: [
    {
      "question": "Where should we start?",
      "answer": "Start with your highest-volume manual process that has clear rules and existing digital inputs. Document handling and internal questions are common first choices, and a scoping call confirms the right one."
    },
    {
      "question": "What is shadow mode?",
      "answer": "The ERP agent runs in parallel with your existing process first, so results can be compared and validated before full cutover."
    },
    {
      "question": "Does the knowledge agent show where answers come from?",
      "answer": "Yes. Answers are cited, and a strict grounding instruction prevents it from responding with anything the retrieved content does not support."
    },
    {
      "question": "Which ERP systems does it connect to?",
      "answer": "The ERP agent is built for Dynamics 365 and SAP environments, connected through Azure API Management."
    },
    {
      "question": "How is the work priced?",
      "answer": "Each agent is delivered as a fixed-price build, scoped on a 30-minute call."
    }
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

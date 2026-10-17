import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Developer Tools & Agents',
  description: 'Developer tools on Azure AI Foundry: internal developer copilot, API integration agent, and MLOps automation for engineering teams.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
  keywords: ['azure ai developer copilot', 'azure openai developer tools', 'azure ai api integration agent', 'azure mlops automation', 'azure prompt flow mlops', 'internal developer ai azure', 'azure ai foundry developer', 'github copilot azure openai', 'azure apim ai agent', 'azure ai ml pipeline automation'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Developer Tools & Agents | Kovil AI',
    description: 'Internal developer copilot, API integration agent, and MLOps automation on Azure AI Foundry. Fixed-price for engineering teams.',
    url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Developer Tools — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Developer Tools | Kovil AI', description: 'Developer copilot, API agent, and MLOps automation on Azure. Fixed-price for engineering teams.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Developer Tools & Agents',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Internal Developer Copilot on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/internal-developer-copilot' },
    { '@type': 'WebPage', name: 'API Integration Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent' },
    { '@type': 'WebPage', name: 'MLOps Automation Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Developer Tools & Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Developer Tools' }],
  sectionTag: 'Developer Tool Use Cases',
  headline: 'Developer Tools',
  headlineAccent: 'on Azure AI Foundry',
  description: 'AI agents that accelerate your engineering team — from internal developer copilots trained on your codebase to automated API integration and MLOps pipeline management on Azure.',
  cards: [
    { href: '/azure-ai-foundry/developer-tools/internal-developer-copilot', icon: 'Code2', color: AZURE, title: 'Internal Developer Copilot', description: 'GitHub Copilot-integrated internal developer assistant powered by Azure OpenAI and your internal codebase, documentation, and engineering standards.' },
    { href: '/azure-ai-foundry/developer-tools/api-integration-agent', icon: 'Plug', color: '#8B5CF6', title: 'API Integration Agent', description: 'Automate API discovery, documentation, and integration testing using Azure API Management and OpenAPI specifications — reducing integration overhead.' },
    { href: '/azure-ai-foundry/developer-tools/mlops-automation-agent', icon: 'GitBranch', color: '#34D399', title: 'MLOps Automation Agent', description: 'Automate model deployment, monitoring, and retraining pipelines with Azure Prompt Flow and MLflow — continuous delivery for your AI systems.' },
  ],
  overview: {
    "heading": "How developer tool agents on Azure AI Foundry work",
    "paragraphs": [
      "These three agents target everyday engineering friction: finding answers about your own systems, keeping APIs documented and tested, and moving AI models to production safely.",
      "The Internal Developer Copilot indexes your repositories, architecture documents, runbooks and API specifications into Azure AI Search with Entra ID access control, so engineers only see what they are authorised to see. It is delivered as a GitHub Copilot extension in VS Code and as a bot in Microsoft Teams. The API Integration Agent connects to your Azure API Management gateway and generates OpenAPI specifications, test suites and documentation from live traffic and code analysis. The MLOps Automation Agent runs Prompt Flow evaluations on each model candidate and only promotes models that meet your thresholds.",
      "Each is a fixed-price build, and all three can be delivered inside three weeks."
    ]
  },
  comparison: {
    "heading": "Which developer tool agent fits which problem",
    "columns": [
      "Agent",
      "Problem it addresses",
      "What it works from",
      "What you get",
      "Main Azure services",
      "Typical delivery"
    ],
    "rows": [
      [
        "Internal Developer Copilot",
        "Engineers lose time looking for internal knowledge",
        "Repositories, architecture docs, runbooks, API specifications",
        "Answers in VS Code and Teams, plus analytics on usage and knowledge gaps",
        "Azure OpenAI GPT-4o, Azure AI Search, GitHub Copilot Extension API, Semantic Kernel, Azure DevOps",
        "3 weeks"
      ],
      [
        "API Integration Agent",
        "API documentation and tests lag behind the APIs",
        "Your Azure API Management gateway, live traffic, code",
        "OpenAPI specs, test suites, documentation and plain-language error root causes",
        "Azure OpenAI, API Management, Semantic Kernel, Azure DevOps, Prompt Flow",
        "2 weeks"
      ],
      [
        "MLOps Automation Agent",
        "Models are deployed and monitored by hand",
        "Model candidates, ground-truth datasets, production telemetry",
        "Gated deployments, drift and safety monitoring, automatic rollback on severe degradation",
        "Azure Machine Learning, Azure AI Foundry, Prompt Flow, Azure Monitor, Azure DevOps",
        "3 weeks"
      ]
    ]
  },
  faqs: [
    {
      "question": "Could the copilot show engineers code they should not see?",
      "answer": "No. Indexing uses Entra ID access control, so each engineer only retrieves content they are authorised to access."
    },
    {
      "question": "Which editors does the copilot support?",
      "answer": "It is delivered as a GitHub Copilot extension for VS Code and as a Microsoft Teams bot. If your team works elsewhere, we confirm options on the scoping call."
    },
    {
      "question": "What does the API agent need from us?",
      "answer": "Access to your Azure API Management gateway. The build is deployed against that gateway."
    },
    {
      "question": "How does the MLOps agent decide to promote a model?",
      "answer": "Evaluation results are compared against pass and fail thresholds you configure. Only models that meet every criterion are promoted to production."
    },
    {
      "question": "How is the work priced?",
      "answer": "Each agent is delivered as a fixed-price build, scoped on a 30-minute call."
    }
  ],
  ctaHeadline: 'Ready to accelerate your engineering team with AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right developer tool use case and give you a fixed-price delivery plan.',
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

import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Developer Tools & Agents',
  description: 'Developer tools on Vertex AI: code generation agents, MLOps pipeline automation, and API testing agents for engineering teams on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/developer-tools' },
  keywords: ['vertex ai code generation agent', 'vertex ai mlops pipeline', 'vertex ai api testing agent', 'google cloud developer ai', 'gemini code generation', 'vertex ai mlops automation', 'google cloud ai developer tools', 'vertex ai devops automation', 'gemini code assist enterprise'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Developer Tools & Agents | Kovil AI',
    description: 'Code generation, MLOps pipeline automation, and API testing agents on Vertex AI. Fixed-price for engineering teams.',
    url: 'https://kovil.ai/vertex-ai/developer-tools',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Developer Tools — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Developer Tools | Kovil AI', description: 'Code generation, MLOps, and API testing agents on Vertex AI. Fixed-price for engineering teams.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Developer Tools & Agents',
  url: 'https://kovil.ai/vertex-ai/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Code Generation Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent' },
    { '@type': 'WebPage', name: 'MLOps Pipeline Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent' },
    { '@type': 'WebPage', name: 'API Testing Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/vertex-ai/developer-tools' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Developer Tools & Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Developer Tools' }],
  sectionTag: 'Developer Tool Use Cases',
  headline: 'Developer Tools',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that supercharge your engineering team — Gemini-powered code generation, Vertex AI Pipelines MLOps automation, and AI-driven API testing on Google Cloud.',
  cards: [
    { href: '/vertex-ai/developer-tools/code-generation-agent', icon: 'Code2', color: G_BLUE, title: 'Code Generation Agent', description: 'Enterprise code generation and review using Gemini Code Assist and Vertex AI — trained on your codebase, documentation, and engineering standards for in-context completions.' },
    { href: '/vertex-ai/developer-tools/mlops-pipeline-agent', icon: 'GitBranch', color: G_RED, title: 'MLOps Pipeline Agent', description: 'Automated model training, evaluation, deployment, and monitoring using Vertex AI Pipelines and Kubeflow — continuous delivery for your ML models.' },
    { href: '/vertex-ai/developer-tools/api-testing-agent', icon: 'Plug', color: G_GREEN, title: 'API Testing Agent', description: 'AI-powered API test generation and regression testing using Gemini — automatically generating test cases from OpenAPI specs and catching breaking changes.' },
  ],
  overview: {
    "heading": "How developer tool agents on Vertex AI work",
    "paragraphs": [
      "These agents target three recurring engineering costs: writing and reviewing code, managing the machine learning lifecycle, and keeping API tests and documentation accurate.",
      "The Code Generation Agent uses Gemini Code Assist and Vertex AI, grounded in your codebase, documentation and engineering standards. It lives in the IDE and keeps your code inside your Google Cloud environment. The MLOps Pipeline Agent automates training, evaluation, deployment and monitoring with Vertex AI Pipelines and Kubeflow, with Gemini explaining model changes. The API Testing Agent generates test cases from OpenAPI specifications and catches contract violations before they reach production.",
      "Delivery takes 3 to 4 weeks for the code agent, 3 weeks for API testing and 4 to 6 weeks for the MLOps pipeline."
    ]
  },
  comparison: {
    "heading": "Which developer tool agent fits which problem",
    "columns": [
      "Agent",
      "Problem it addresses",
      "What it uses",
      "Main Google Cloud services",
      "Typical delivery"
    ],
    "rows": [
      [
        "Code Generation Agent",
        "Developers lack codebase-aware help in their IDE",
        "Your codebase, documentation and engineering standards",
        "Gemini Code Assist, Vertex AI",
        "3 to 4 weeks"
      ],
      [
        "MLOps Pipeline Agent",
        "Models are trained, deployed and monitored by hand",
        "Training data, evaluation gates, model registry, drift monitoring",
        "Vertex AI Pipelines, Kubeflow, BigQuery ML, Gemini",
        "4 to 6 weeks"
      ],
      [
        "API Testing Agent",
        "API tests and OpenAPI docs lag behind actual behaviour",
        "OpenAPI specifications and API behaviour",
        "Gemini",
        "3 weeks"
      ]
    ]
  },
  faqs: [
    {
      "question": "Does our code leave our Google Cloud environment?",
      "answer": "The Code Generation Agent is designed so your code stays inside your Google Cloud environment."
    },
    {
      "question": "What does the MLOps agent automate?",
      "answer": "Model training, evaluation gating, a model registry, deployment and drift monitoring, with Gemini explaining what changed and why."
    },
    {
      "question": "How does the API testing agent find problems?",
      "answer": "It generates test cases from OpenAPI specifications, keeps the documentation accurate and flags contract violations and breaking changes."
    },
    {
      "question": "Why does MLOps take longer than the others?",
      "answer": "It covers more components, including pipelines, evaluation gates, a registry and monitoring, so the timeline depends on the scope of your pipeline."
    },
    {
      "question": "How is the work priced?",
      "answer": "Each agent is delivered as a fixed-price build, scoped on a 30-minute call."
    }
  ],
  ctaHeadline: 'Ready to accelerate your engineering team with Vertex AI?',
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

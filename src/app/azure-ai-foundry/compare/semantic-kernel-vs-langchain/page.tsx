import type { Metadata } from 'next'
import SemanticKernelVsLangChainPage from '@/src/pages/azure-ai-foundry/compare/SemanticKernelVsLangChainPage'

export const metadata: Metadata = {
  title: 'Semantic Kernel vs LangChain — Enterprise AI Framework Comparison',
  description: 'Semantic Kernel vs LangChain: which AI orchestration framework is right for enterprise? Azure-native vs Python-native, Managed Identity, enterprise support, and real-world architecture guidance.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain' },
  keywords: ['Semantic Kernel vs LangChain', 'Semantic Kernel enterprise', 'LangChain enterprise comparison', 'AI orchestration framework enterprise', 'Semantic Kernel Azure', 'LangChain Azure OpenAI', 'Managed Identity LangChain', 'Semantic Kernel .NET', 'LangGraph vs Semantic Kernel', 'AI agent orchestration SDK', 'Azure AI Foundry framework', 'Kovil AI Semantic Kernel'],
  openGraph: { type: 'article', title: 'Semantic Kernel vs LangChain | Kovil AI', description: 'Enterprise AI orchestration framework comparison: Azure-native Semantic Kernel vs Python-native LangChain. Identity, compliance, ecosystem breadth, and architecture guidance.', url: 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Semantic Kernel vs LangChain — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Semantic Kernel vs LangChain | Kovil AI', description: 'Enterprise AI framework comparison: Managed Identity auth, .NET vs Python, Azure integration, and when to use both.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  headline: 'Semantic Kernel vs LangChain: Choosing the Right AI Orchestration Framework for Enterprise',
  description: 'Detailed comparison of Semantic Kernel and LangChain for enterprise AI engineering teams, covering authentication, Azure integration, language ecosystem, multi-agent orchestration, community support, and architecture recommendations.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I use both Semantic Kernel and LangChain in the same enterprise AI project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — and many enterprise teams do. A common architecture: the production application layer uses Semantic Kernel (C#/.NET or TypeScript) with Managed Identity authentication to Azure OpenAI and Azure AI Search; the data science and experimentation layer uses LangChain (Python) for RAG pipeline prototyping, evaluation, and ML research. Both layers call the same Azure OpenAI model endpoints. This approach lets each team use the framework most natural to their language and workflow, while maintaining a single Azure AI Foundry infrastructure backend.' }
    },
    {
      '@type': 'Question',
      name: 'Which has better documentation — Semantic Kernel or LangChain?',
      acceptedAnswer: { '@type': 'Answer', text: 'LangChain has significantly more community documentation, tutorials, blog posts, and Stack Overflow answers than Semantic Kernel, largely due to its larger open-source community and earlier release. Microsoft\'s official Semantic Kernel documentation is high-quality and well-maintained, but the breadth of third-party learning resources is narrower. For teams learning an AI orchestration framework from scratch, LangChain\'s ecosystem makes self-directed learning easier. For teams that primarily consume Microsoft official documentation and enterprise support channels, Semantic Kernel\'s official docs are thorough and kept current with each Azure AI Foundry release.' }
    },
    {
      '@type': 'Question',
      name: 'Which framework is faster to learn for a .NET developer?',
      acceptedAnswer: { '@type': 'Answer', text: 'For .NET developers, Semantic Kernel is significantly faster to learn. The C# SDK mirrors familiar .NET patterns — dependency injection, async/await, IConfiguration for settings, DefaultAzureCredential for auth — and integrates naturally with ASP.NET Core and Azure Functions. LangChain\'s primary SDK is Python; the TypeScript/JavaScript SDK exists but has a smaller surface area. A .NET developer learning LangChain faces both the framework learning curve and the Python ecosystem learning curve simultaneously. Semantic Kernel lets them apply existing .NET knowledge immediately.' }
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/azure-ai-foundry/compare' },
    { '@type': 'ListItem', position: 4, name: 'Semantic Kernel vs LangChain', item: 'https://kovil.ai/azure-ai-foundry/compare/semantic-kernel-vs-langchain' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SemanticKernelVsLangChainPage />
    </>
  )
}

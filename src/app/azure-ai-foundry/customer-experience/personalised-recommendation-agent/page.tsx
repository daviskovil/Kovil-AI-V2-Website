import type { Metadata } from 'next'
import PersonalisedRecommendationAgentPage from '@/src/pages/azure-ai-foundry/customer-experience/PersonalisedRecommendationAgentPage'

export const metadata: Metadata = {
  title: 'Personalised Recommendation Agent — Azure OpenAI Embeddings & Vector Search',
  description: 'Real-time personalisation agent built on Azure OpenAI embeddings and Azure AI Search vector search. Increases conversion by 28% and average order value by 19%.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/customer-experience/personalised-recommendation-agent' },
  keywords: ['Azure AI recommendation engine', 'personalisation AI Azure', 'Azure OpenAI embeddings recommendations', 'Azure AI Search vector recommendations', 'real-time personalisation Azure', 'e-commerce AI recommendations', 'Azure AI Foundry recommendations', 'semantic product recommendations', 'AI recommendation system Azure', 'vector search recommendations', 'Azure Cosmos DB recommendations', 'personalisation engine Azure', 'product recommendation AI', 'Azure Event Hubs personalisation', 'Kovil AI Azure', 'recommendation agent Azure'],
  openGraph: { type: 'website', title: 'Personalised Recommendation Agent — Azure AI | Kovil AI', description: 'Real-time AI recommendations using Azure OpenAI embeddings and vector search. +28% conversion, +19% AOV.', url: 'https://kovil.ai/azure-ai-foundry/customer-experience/personalised-recommendation-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Personalised Recommendation Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Personalised Recommendation Agent | Kovil AI', description: 'Real-time Azure AI recommendations. +28% conversion rate. Built on Azure OpenAI embeddings and vector search.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Personalised Recommendation Agent',
  description: 'Real-time personalisation agent using Azure OpenAI embeddings and Azure AI Search vector search — recommends products or services based on live user signals and semantic similarity.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/customer-experience/personalised-recommendation-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does semantic similarity improve recommendations over collaborative filtering?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional collaborative filtering recommends what similar users bought. Semantic similarity recommends items that are conceptually related to what the user is interested in — even if no other user has made that combination of purchases. For example, a customer browsing running shoes and asking about marathon training would receive recommendations for nutrition products, heart rate monitors, and running apps — not just more shoes.' } },
    { '@type': 'Question', name: 'How does the agent personalise in real time?', acceptedAnswer: { '@type': 'Answer', text: 'User behaviour events (page views, add-to-cart, search queries, dwell time) are streamed to Azure Event Hubs. The recommendation engine reads this stream, updates the user intent vector, and returns refreshed recommendations — all within the current session. Recommendations update with each user interaction, not just at session start.' } },
    { '@type': 'Question', name: 'Can the recommendation agent integrate with an existing e-commerce platform?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The recommendation engine exposes a REST API via Azure API Management — callable from any e-commerce platform (Shopify, Magento, custom-built). The integration requires two connections: event ingestion (user behaviour events sent to Azure Event Hubs) and recommendation retrieval (product/content recommendations retrieved from the API).' } },
    { '@type': 'Question', name: 'How is recommendation quality measured?', acceptedAnswer: { '@type': 'Answer', text: 'Recommendation quality is measured via A/B testing using Azure App Configuration feature flags. Key metrics: click-through rate on recommendations, add-to-cart conversion rate, revenue per recommendation impression, and average order value uplift. Prompt Flow evaluation pipelines run automated quality checks on recommendation relevance against sampled user queries.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/azure-ai-foundry/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'Personalised Recommendation Agent', item: 'https://kovil.ai/azure-ai-foundry/customer-experience/personalised-recommendation-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PersonalisedRecommendationAgentPage />
    </>
  )
}

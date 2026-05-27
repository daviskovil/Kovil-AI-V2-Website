import type { Metadata } from 'next'
import RetailEcommerceAzurePage from '@/src/pages/azure-ai-foundry/industries/RetailEcommerceAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Retail & eCommerce — Azure AI Foundry | Kovil AI',
  description: 'AI agents for retail and eCommerce built on Azure. Personalised product recommendations, customer service automation, demand forecasting, visual search, and returns processing. 38% conversion lift.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce' },
  keywords: ['AI agents retail Azure', 'eCommerce AI automation Azure', 'product recommendation AI Azure', 'retail customer service AI', 'demand forecasting AI Azure', 'visual search Azure AI', 'returns automation AI', 'Azure OpenAI retail', 'Azure AI Search eCommerce', 'personalisation AI Azure', 'Azure Machine Learning retail', 'Cosmos DB eCommerce AI', 'Copilot Studio retail', 'Kovil AI retail', 'Azure AI Foundry eCommerce'],
  openGraph: { type: 'website', title: 'AI Agents for Retail & eCommerce — Azure AI Foundry | Kovil AI', description: 'Personalised recommendations, automated customer service, demand forecasting on Azure. 38% conversion lift. 72% support queries automated.', url: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Retail & eCommerce — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Retail & eCommerce | Kovil AI', description: 'Personalised recommendations, demand forecasting, customer service automation on Azure. 38% conversion lift.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Retail & eCommerce',
  description: 'Intelligent AI agents for retail and eCommerce built on Azure AI Foundry — delivering personalised product recommendations, customer service automation, demand forecasting, visual search, and returns processing at scale.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which eCommerce platforms does the agent integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'The agent integrates with Shopify (via Shopify Admin API), Salesforce Commerce Cloud, Magento/Adobe Commerce, BigCommerce, and custom-built commerce platforms with REST or GraphQL APIs. Integration is managed through Azure API Management, with Cosmos DB serving as the low-latency product and customer data store the recommendation and customer service agents query in real time.' } },
    { '@type': 'Question', name: 'How does the personalised recommendation engine work?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Machine Learning trains collaborative filtering and content-based models on your historical purchase, browsing, and search data — refreshed on a configurable schedule. At request time, the recommendation agent queries Azure AI Search for candidate retrieval using hybrid semantic and keyword search, then applies the ML ranking model to personalise results for the current session context. Azure OpenAI generates natural-language product explanations for recommendation carousels where needed.' } },
    { '@type': 'Question', name: 'Can the customer service agent handle complex multi-turn conversations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The customer service agent is built on Microsoft Copilot Studio, which maintains conversation context across turns and supports branching dialogue flows. It connects to your OMS for real-time order status, your product catalogue for specifications and availability, and your returns management system for automated return authorisation. When a query requires human judgment, the agent hands off the full conversation context to a human agent — no repeat of information required.' } },
    { '@type': 'Question', name: 'How quickly can the demand forecasting agent be deployed?', acceptedAnswer: { '@type': 'Answer', text: 'Demand forecasting typically goes live in 4–6 weeks. The timeline covers historical sales data ingestion into Azure Machine Learning, feature engineering incorporating promotional calendars and seasonal signals, model training and validation against held-out periods, and integration with your inventory management system for automated replenishment trigger generation. Forecast accuracy is benchmarked against your existing forecasting approach before go-live.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Retail & eCommerce', item: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RetailEcommerceAzurePage />
    </>
  )
}

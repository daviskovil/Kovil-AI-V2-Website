import type { Metadata } from 'next'
import SupplyChainIntelligenceAgentPage from '@/src/pages/azure-ai-foundry/operations/SupplyChainIntelligenceAgentPage'

export const metadata: Metadata = {
  title: 'Supply Chain Intelligence Agent — Azure OpenAI & Data Factory | Kovil AI',
  description: 'Real-time supply chain risk analysis agent built on Azure OpenAI and Azure Data Factory. Surfaces risks 48 hours earlier. 62% fewer unplanned stockouts.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent' },
  keywords: ['supply chain AI Azure', 'Azure OpenAI supply chain', 'supply chain risk analysis AI', 'Azure Data Factory supply chain', 'supply chain intelligence agent', 'procurement AI Azure', 'supplier risk AI', 'Azure Synapse supply chain', 'logistics AI Azure', 'supply chain disruption AI', 'demand forecasting AI Azure', 'Azure AI Foundry operations', 'supply chain automation', 'procurement intelligence AI', 'Kovil AI Azure', 'operations AI agent'],
  openGraph: { type: 'website', title: 'Supply Chain Intelligence Agent — Azure AI | Kovil AI', description: 'AI supply chain risk analysis on Azure. 48-hour risk lead time. 62% fewer stockouts. Azure OpenAI + Data Factory.', url: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Supply Chain Intelligence Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Supply Chain Intelligence Agent | Kovil AI', description: 'AI supply chain risk. 48hr lead time. 62% fewer stockouts. Azure OpenAI + Data Factory.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Supply Chain Intelligence Agent',
  description: 'Real-time supply chain risk analysis using Azure OpenAI and Azure Data Factory — surfaces disruption risks and recommended actions 48 hours before impact.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What external data sources does the supply chain agent monitor?', acceptedAnswer: { '@type': 'Answer', text: 'The agent ingests: logistics provider APIs (carrier tracking, port status), weather and natural disaster feeds, supplier financial health data, commodity price feeds, and custom ERP/WMS data from your internal systems. All sources are connected via Azure Data Factory pipelines and normalised into a unified risk data layer in Azure Synapse Analytics.' } },
    { '@type': 'Question', name: 'How does the agent generate specific re-routing recommendations?', acceptedAnswer: { '@type': 'Answer', text: 'When a risk is detected on a lane or supplier, the agent uses Semantic Kernel to retrieve alternative routing options from your logistics data — including alternative carriers, transit times, cost differentials, and capacity availability. GPT-4o synthesises these options into ranked recommendations with trade-off analysis, formatted for procurement team review.' } },
    { '@type': 'Question', name: 'Can the agent be connected to Power BI for executive reporting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Azure Synapse Analytics acts as the data layer, and Power BI Embedded connects directly to Synapse for real-time reporting. The executive dashboard shows top-5 current risks, recommended actions, historical accuracy of risk predictions, and supply chain health metrics — updated continuously as new data arrives.' } },
    { '@type': 'Question', name: 'How long does it take to see the first risk alerts?', acceptedAnswer: { '@type': 'Answer', text: 'After the initial data pipeline setup (typically 1 week), the agent begins generating risk signals immediately. However, alert accuracy improves over the first 4–6 weeks as the system learns normal operating patterns for your specific supply network. We configure conservative thresholds initially and tune them down as confidence in baseline patterns increases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/azure-ai-foundry/operations' },
    { '@type': 'ListItem', position: 4, name: 'Supply Chain Intelligence Agent', item: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SupplyChainIntelligenceAgentPage />
    </>
  )
}

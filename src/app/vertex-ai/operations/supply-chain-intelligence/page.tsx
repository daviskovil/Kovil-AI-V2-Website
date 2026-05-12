import type { Metadata } from 'next'
import SupplyChainIntelligencePage from '@/src/pages/vertex-ai/operations/SupplyChainIntelligencePage'

export const metadata: Metadata = {
  title: 'Supply Chain Intelligence Agent — BigQuery ML & Gemini on GCP | Kovil AI',
  description: 'Real-time supply chain risk analysis using BigQuery ML and Gemini — ingests supplier, logistics, and demand data, surfaces risks, and recommends re-routing autonomously on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/operations/supply-chain-intelligence' },
  keywords: ['supply chain AI GCP', 'supply chain intelligence Vertex AI', 'BigQuery ML supply chain', 'Gemini supply chain risk', 'Google Cloud supply chain agent', 'AI supply chain analytics', 'Vertex AI operations agent', 'supply chain disruption AI', 'GCP supply chain optimisation', 'supply chain risk AI agent', 'BigQuery supply chain intelligence', 'Google Cloud operations AI'],
  openGraph: {
    type: 'website',
    title: 'Supply Chain Intelligence Agent — BigQuery ML & Gemini | Kovil AI',
    description: 'Real-time supply chain risk analysis on Google Cloud. BigQuery ML disruption prediction, Gemini-powered risk narration, autonomous re-routing recommendations.',
    url: 'https://kovil.ai/vertex-ai/operations/supply-chain-intelligence',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Supply Chain Intelligence Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supply Chain Intelligence Agent | Kovil AI Vertex AI',
    description: 'Real-time supply chain risk with BigQuery ML and Gemini on GCP. Autonomous disruption detection and re-routing recommendations.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Supply Chain Intelligence Agent',
  description: 'Real-time supply chain risk analysis using BigQuery ML and Gemini on Google Cloud — ingests supplier, logistics, and demand data, surfaces risks autonomously, and recommends corrective actions.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/operations/supply-chain-intelligence',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What data sources does the supply chain intelligence agent ingest?', acceptedAnswer: { '@type': 'Answer', text: 'The agent ingests data from multiple sources via Dataflow and Cloud Pub/Sub: supplier ERP systems (SAP, Oracle, NetSuite) via API or file export, logistics carrier APIs (FedEx, UPS, DHL, custom 3PLs), demand planning systems and sales order data from your CRM or ERP, external risk signals via APIs (weather APIs, port status feeds, news APIs for geopolitical events), and your internal inventory levels in BigQuery. All data is ingested into a unified BigQuery data model that the agent reasons over in real time.' } },
    { '@type': 'Question', name: 'How does the agent detect supply chain disruptions?', acceptedAnswer: { '@type': 'Answer', text: 'Disruption detection uses a multi-layer approach: BigQuery ML time-series models flag statistical anomalies in lead times, shipment velocity, and order fulfilment rates; rule-based alerts trigger on hard thresholds (e.g., a supplier\'s on-time delivery rate dropping below 80% over 7 days); and Gemini analyses external signals — news, weather, port status — correlated against your supplier geographies to surface emerging risks before they appear in your data. The agent aggregates signals into a risk score per supplier and SKU, with Gemini narrating the risk rationale in plain language.' } },
    { '@type': 'Question', name: 'What corrective actions can the agent recommend?', acceptedAnswer: { '@type': 'Answer', text: 'The agent recommends specific, actionable responses based on the disruption type and severity: for lead time extensions, it calculates safety stock adjustment recommendations and expedite options with cost comparisons; for supplier failures, it surfaces qualified alternative suppliers from your approved vendor list and pre-populates RFQ templates; for logistics disruptions, it recommends re-routing via alternative carriers or routes with estimated delivery and cost deltas; and for demand spikes, it recommends inter-warehouse transfers to rebalance inventory. Recommendations include a confidence score and the data evidence behind each recommendation.' } },
    { '@type': 'Question', name: 'How long does implementation take?', acceptedAnswer: { '@type': 'Answer', text: 'A production supply chain intelligence agent with data ingestion pipelines, BigQuery ML models, Gemini risk narration, and alerting typically takes 5–8 weeks from scoping to go-live. The timeline depends primarily on the number and complexity of data source integrations — ERP API connections, logistics carrier feeds, and demand planning system exports vary significantly in complexity. Kovil AI delivers this as a fixed-price engagement with weekly sprint demos and a production deployment at the end of each sprint.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/vertex-ai/operations' },
    { '@type': 'ListItem', position: 4, name: 'Supply Chain Intelligence', item: 'https://kovil.ai/vertex-ai/operations/supply-chain-intelligence' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SupplyChainIntelligencePage />
    </>
  )
}

import type { Metadata } from 'next'
import ManufacturingAzurePage from '@/src/pages/azure-ai-foundry/industries/ManufacturingAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Manufacturing & Supply Chain — Azure IoT & ML | Kovil AI',
  description: 'AI agents for manufacturing built on Azure. Predictive maintenance, quality control vision, supply chain intelligence, and production scheduling. Azure IoT Hub, Azure ML, and Azure Digital Twins.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain' },
  keywords: ['AI agents manufacturing Azure', 'predictive maintenance Azure AI', 'quality control AI Azure', 'supply chain intelligence Azure', 'Azure IoT Hub AI', 'Azure Digital Twins manufacturing', 'Azure Machine Learning predictive maintenance', 'production scheduling AI Azure', 'equipment anomaly detection Azure', 'supplier risk monitoring AI', 'Azure AI Vision quality control', 'manufacturing AI automation', 'Kovil AI manufacturing', 'Azure AI Foundry manufacturing', 'industrial AI Azure'],
  openGraph: { type: 'website', title: 'AI Agents for Manufacturing — Azure IoT & ML | Kovil AI', description: 'Predictive maintenance, quality control vision, and supply chain intelligence on Azure IoT Hub + Azure ML. 43% downtime reduction.', url: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Manufacturing — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Manufacturing | Kovil AI', description: 'Predictive maintenance, quality vision, supply chain intelligence on Azure IoT + ML. 43% downtime reduction.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Manufacturing & Supply Chain',
  description: 'Intelligent AI agents for manufacturing and supply chain built on Azure — delivering predictive maintenance, quality control vision, supply chain risk intelligence, and autonomous production scheduling using Azure IoT Hub, Azure Machine Learning, and Azure Digital Twins.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of industrial equipment does the predictive maintenance agent support?', acceptedAnswer: { '@type': 'Answer', text: 'The predictive maintenance agent works with any equipment that produces telemetry data — motors, compressors, pumps, conveyors, CNC machines, robots, and HVAC systems. Data ingestion is handled by Azure IoT Hub, which supports OPC-UA, MQTT, and HTTP protocols. For equipment without native connectivity, we deploy Azure IoT Edge gateways that collect data from PLCs and SCADA systems and forward to the cloud. The Azure Machine Learning anomaly detection models are trained per equipment class using your historical sensor data.' } },
    { '@type': 'Question', name: 'How accurate is the quality control vision agent?', acceptedAnswer: { '@type': 'Answer', text: 'Defect detection accuracy depends on defect type and training data quality, but deployments consistently achieve 98–99.5% detection accuracy compared to 90–95% for manual inspection — with zero fatigue-related degradation over time. Azure AI Vision custom models are trained on your specific product defect library. We typically require a minimum of 500 labelled defect images per defect class for production-grade model training. Models are retrained automatically as new defect examples are captured.' } },
    { '@type': 'Question', name: 'How does the supply chain intelligence agent monitor for disruptions?', acceptedAnswer: { '@type': 'Answer', text: 'The agent continuously monitors multiple signal sources: supplier delivery performance metrics from your ERP, supplier financial health indicators via third-party data feeds, news and regulatory change signals via Azure AI Search over curated news sources, and logistics carrier performance data. When risk signals exceed configurable thresholds, the agent generates an alert with the affected SKUs, estimated impact on production schedule, and recommended alternative sourcing options — giving procurement teams lead time to act before a disruption becomes a production stoppage.' } },
    { '@type': 'Question', name: 'Can the agent integrate with our existing MES and ERP systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate with major MES platforms including Siemens Opcenter, Rockwell FactoryTalk, and SAP Digital Manufacturing via REST APIs managed through Azure API Management. ERP integration covers SAP S/4HANA, Microsoft Dynamics 365 Supply Chain, and Oracle via standard API connectors. Production schedule updates generated by the agent are pushed back to the MES automatically, and work orders are created directly in the CMMS system without manual data entry.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Manufacturing & Supply Chain', item: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ManufacturingAzurePage />
    </>
  )
}

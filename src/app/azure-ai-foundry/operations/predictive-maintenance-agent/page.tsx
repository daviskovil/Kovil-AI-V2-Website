import type { Metadata } from 'next'
import PredictiveMaintenanceAgentPage from '@/src/pages/azure-ai-foundry/operations/PredictiveMaintenanceAgentPage'

export const metadata: Metadata = {
  title: 'Predictive Maintenance Agent — Azure IoT Hub & OpenAI',
  description: 'AI agent that monitors IoT sensor streams via Azure IoT Hub, detects equipment anomalies with GPT-4o, and triggers work orders before failures occur. 73% downtime reduction.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent' },
  keywords: ['predictive maintenance AI Azure', 'Azure IoT Hub AI agent', 'Azure OpenAI anomaly detection', 'equipment failure prediction AI', 'Azure Stream Analytics AI', 'IoT predictive maintenance', 'Azure Digital Twins maintenance', 'AI work order automation', 'industrial AI Azure', 'Azure AI Foundry maintenance', 'asset monitoring AI', 'CMMS AI integration', 'Azure AI IoT', 'manufacturing AI Azure', 'Kovil AI Azure', 'predictive maintenance automation'],
  openGraph: { type: 'website', title: 'Predictive Maintenance Agent — Azure IoT & AI | Kovil AI', description: 'Detect equipment failures before they happen. Azure IoT Hub + GPT-4o anomaly detection. 73% downtime reduction.', url: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Predictive Maintenance Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Predictive Maintenance Agent — Azure IoT & AI | Kovil AI', description: 'AI agent for predictive maintenance. 73% downtime reduction. Azure IoT Hub + GPT-4o.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Predictive Maintenance Agent',
  description: 'AI agent monitoring IoT sensor streams via Azure IoT Hub, detecting anomalies with Azure OpenAI, and triggering maintenance work orders before equipment fails.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of IoT sensors does the agent support?', acceptedAnswer: { '@type': 'Answer', text: 'The agent supports any sensor that can stream data to Azure IoT Hub — vibration, temperature, pressure, flow rate, current draw, RPM, and custom protocol sensors via IoT Edge gateways. Azure IoT Hub\'s protocol support covers MQTT, AMQP, and HTTPS. Legacy OPC-UA industrial equipment connects via Azure IoT Edge modules.' } },
    { '@type': 'Question', name: 'How does the agent determine an anomaly vs normal variation?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Stream Analytics establishes normal operating baselines per asset using historical sensor data. Azure OpenAI then interprets deviations in the context of operating conditions, maintenance history, and asset age — distinguishing genuine failure precursors from normal operating variation. Anomaly thresholds are configurable per asset class and can be refined as the system accumulates production data.' } },
    { '@type': 'Question', name: 'Can the agent integrate with our existing CMMS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Semantic Kernel plugins connect to your CMMS (IBM Maximo, SAP PM, Infor EAM, or custom systems) via Azure API Management. When the agent identifies a maintenance requirement, it creates a work order with the asset ID, failure description, priority level, and sensor data context — directly in your CMMS without manual data entry.' } },
    { '@type': 'Question', name: 'How quickly can the agent be deployed in a manufacturing environment?', acceptedAnswer: { '@type': 'Answer', text: 'The standard deployment timeline is 3–4 weeks: Week 1 for Azure IoT Hub configuration and sensor connectivity, Week 2 for Azure Stream Analytics baseline establishment and Azure OpenAI anomaly interpretation configuration, Week 3 for CMMS integration and work order automation, Week 4 for UAT against historical failure events and go-live. Environments with existing Azure IoT infrastructure typically complete in 2–3 weeks.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/azure-ai-foundry/operations' },
    { '@type': 'ListItem', position: 4, name: 'Predictive Maintenance Agent', item: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PredictiveMaintenanceAgentPage />
    </>
  )
}

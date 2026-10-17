import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Operations Intelligence Agents',
  description: 'Operations agents on Azure AI Foundry: predictive maintenance, supply chain intelligence, and compliance monitoring. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/operations' },
  keywords: ['azure ai predictive maintenance', 'azure ai supply chain intelligence', 'azure ai compliance monitoring', 'azure iot predictive maintenance', 'azure openai operations', 'azure ai foundry operations', 'azure ai operations agent', 'azure data factory supply chain', 'azure ai monitor compliance'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI',
    description: 'Predictive maintenance, supply chain intelligence, and compliance monitoring agents on Azure AI Foundry. Fixed-price production deployments.',
    url: 'https://kovil.ai/azure-ai-foundry/operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Operations Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI', description: 'Predictive maintenance, supply chain, and compliance agents on Azure. Fixed-price.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry Operations Intelligence Agents',
  url: 'https://kovil.ai/azure-ai-foundry/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Predictive Maintenance Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/predictive-maintenance-agent' },
    { '@type': 'WebPage', name: 'Supply Chain Intelligence Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/supply-chain-intelligence-agent' },
    { '@type': 'WebPage', name: 'AI Compliance Monitoring Agent on Azure', url: 'https://kovil.ai/azure-ai-foundry/operations/compliance-monitoring-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/azure-ai-foundry/operations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry Operations Intelligence Agents | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Operations' }],
  sectionTag: 'Operations Intelligence Use Cases',
  headline: 'Operations Intelligence',
  headlineAccent: 'on Azure AI Foundry',
  description: 'AI agents that monitor, predict, and optimise your operational processes — connected to IoT data, supply chain systems, and compliance frameworks via Azure AI Foundry.',
  cards: [
    { href: '/azure-ai-foundry/operations/predictive-maintenance-agent', icon: 'Wrench', color: '#F59E0B', title: 'Predictive Maintenance Agent', description: 'IoT-connected predictive maintenance using Azure IoT Hub, time-series data, and Azure OpenAI analysis — detecting failure signals before equipment goes down.' },
    { href: '/azure-ai-foundry/operations/supply-chain-intelligence-agent', icon: 'Package', color: AZURE, title: 'Supply Chain Intelligence Agent', description: 'End-to-end supply chain visibility, demand forecasting, and risk detection using Azure OpenAI and Azure Data Factory — reducing disruption and overstocking.' },
    { href: '/azure-ai-foundry/operations/compliance-monitoring-agent', icon: 'Shield', color: '#34D399', title: 'Compliance Monitoring Agent', description: 'Automated regulatory compliance monitoring using Azure Monitor, OpenAI analysis, and alert workflows — catching compliance gaps before they become violations.' },
  ],
  overview: {
    heading: 'How operations agents on Azure AI Foundry work',
    paragraphs: [
      'Operations teams already have the data: sensor telemetry, ERP and warehouse records, policy documents and audit logs. What they usually lack is something that reads those signals continuously and turns them into a decision or an action. The three agents in this section do that on Azure, using Azure OpenAI to interpret each signal and Semantic Kernel to coordinate the steps from alert to action.',
      'Each agent follows the same pattern. It ingests data through Azure services such as IoT Hub, Data Factory or Event Grid, scores or interprets what it finds, then hands a recommendation to a person or a system: a work order in your CMMS, an alert in Teams, or an incident report for review. Human review stays in the loop for critical assets and regulated decisions, and every AI decision and override is logged to Azure Monitor.',
      'You can start with one agent and add others later, because they share the same Azure foundation: the data pipelines, identity setup and monitoring built for the first agent carry over.',
    ],
  },
  comparison: {
    heading: 'Which operations agent fits which problem',
    intro: 'All three are delivered as fixed-price pilots. The table shows what each one reads, what it does with it and which Azure services it uses.',
    columns: ['Agent', 'Problem it addresses', 'Reads from', 'Acts by', 'Main Azure services', 'Typical delivery'],
    rows: [
      ['Predictive Maintenance', 'Unplanned equipment downtime', 'IoT sensor streams, maintenance history', 'Creating prioritised work orders in SAP PM, IBM Maximo, Infor EAM or ServiceNow', 'IoT Hub, Stream Analytics, Digital Twins, Azure OpenAI, Logic Apps', '3 to 4 weeks, 2 to 3 with existing Azure IoT'],
      ['Supply Chain Intelligence', 'Supplier and logistics risks spotted too late', 'ERP and WMS data, supplier records, logistics and weather feeds, demand forecasts', 'Ranking risks and recommending actions to procurement and ops via Teams or email', 'Data Factory, Synapse Analytics, Azure OpenAI, Service Bus, Power BI Embedded', '2 to 3 weeks'],
      ['Compliance Monitoring', 'Policy deviations found weeks after they happen', 'Transactions, access logs, regulatory update feeds', 'Flagging deviations, drafting incident reports and keeping an audit trail', 'Event Grid, Azure Monitor, Key Vault, Microsoft Sentinel, Azure OpenAI', '2 to 3 weeks'],
    ],
  },
  faqs: [
    { question: 'Which operations agent should we start with?', answer: 'Start where a missed signal costs the most and the data already exists in Azure or can be streamed to it. Equipment-heavy sites usually begin with predictive maintenance, distribution businesses with supply chain intelligence, and regulated businesses with compliance monitoring. A 30-minute scoping call confirms the choice before any build starts.' },
    { question: 'Do we need our data in Azure before we begin?', answer: 'Not fully. Pipeline setup is part of each build, including IoT Hub device provisioning, Data Factory pipelines and Event Grid connections. Environments that already run Azure IoT infrastructure usually finish sooner.' },
    { question: 'Does the agent act on its own?', answer: 'The agents recommend and draft. Critical assets and regulated decisions go through human review, and every AI decision, flag and override is written to Azure Monitor so you have an audit trail.' },
    { question: 'Can these connect to the systems we already use?', answer: 'Yes. Work orders can be created in SAP PM, IBM Maximo, Infor EAM or ServiceNow. ERP and warehouse systems connect through Azure API Management, and alerts reach people through Microsoft Teams and email.' },
    { question: 'How is the work priced?', answer: 'Each agent is delivered as a fixed-price pilot. The price depends on the number of data sources and integrations, and we confirm it on the scoping call.' },
  ],
  ctaHeadline: 'Ready to bring AI intelligence to your operations?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right operational use case and give you a fixed-price delivery plan.',
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

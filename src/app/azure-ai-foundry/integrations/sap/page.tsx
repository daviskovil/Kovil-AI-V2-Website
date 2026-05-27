import type { Metadata } from 'next'
import AzureSAPPage from '@/src/pages/azure-ai-foundry/integrations/AzureSAPPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry + SAP Integration | Kovil AI',
  description: 'AI agents that read, write, and act on SAP S/4HANA and ECC data via Azure API Management OData connectors. Purchase order automation, invoice processing, and financial close AI — no ABAP required.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/sap' },
  keywords: ['Azure AI SAP integration', 'SAP AI agent', 'Azure OpenAI SAP', 'SAP S/4HANA AI automation', 'Azure API Management SAP OData', 'SAP purchase order automation AI', 'SAP invoice processing AI', 'Azure Logic Apps SAP', 'Semantic Kernel SAP', 'SAP ECC AI agent', 'Azure Data Factory SAP', 'SAP Ariba AI', 'SAP BAPI Azure', 'Kovil AI SAP', 'SAP process automation Azure'],
  openGraph: { type: 'website', title: 'Azure AI Foundry + SAP: AI Agents for SAP S/4HANA & ECC | Kovil AI', description: 'AI agents querying and writing to SAP via OData/BAPI connectors. 67% PO processing reduction. No ABAP customisation.', url: 'https://kovil.ai/azure-ai-foundry/integrations/sap', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry + SAP — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI + SAP Integration | Kovil AI', description: 'Azure AI agents acting on SAP data. OData + BAPI connectors, Semantic Kernel, Azure API Management. $840K avg annual saving.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Foundry + SAP Integration',
  description: 'AI agents that query SAP S/4HANA and ECC data via OData and BAPI connectors through Azure API Management — automating procurement, finance, and HR processes without SAP customisation.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/sap',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does the Azure AI + SAP integration require ABAP development or SAP customisation?', acceptedAnswer: { '@type': 'Answer', text: 'No. The integration uses standard SAP Gateway OData services and existing RFC-enabled BAPI function modules — both of which are available in all standard SAP S/4HANA and ECC installations without custom ABAP development. Azure API Management registers these standard SAP interfaces and presents them to Azure AI services as an OpenAPI schema. The only SAP configuration required is creating a communication user with appropriate role assignments.' } },
    { '@type': 'Question', name: 'Which SAP modules can the AI agent access?', acceptedAnswer: { '@type': 'Answer', text: 'The Azure AI + SAP integration supports all modules that expose standard OData services or RFC-enabled BAPIs. Common modules include MM (Materials Management) for procurement and inventory, FI/CO for finance and controlling, SD for sales and distribution, HR (HCM) for HR processes, PP for production planning, and Ariba for procurement. S/4HANA Clean Core OData APIs provide the broadest coverage for S/4HANA environments.' } },
    { '@type': 'Question', name: 'How are write operations to SAP secured and audited?', acceptedAnswer: { '@type': 'Answer', text: 'All write operations (PO creation, invoice posting, master data updates) are executed under a SAP communication user with role assignments scoped to the specific transactions the agent is authorised to perform. Azure API Management logs every request and response, and Azure Monitor captures the agent decision context alongside the SAP document numbers created. This provides an end-to-end audit trail from the business event that triggered the agent action to the SAP document created.' } },
    { '@type': 'Question', name: 'Can the AI agent handle SAP exception scenarios, such as a vendor not in the approved list?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Exception handling is a designed capability. When the agent encounters a scenario outside its authority — unapproved vendor, spend above threshold, missing required SAP master data — it stops the automated path, logs the exception with full context, and routes to the appropriate human approver via Teams adaptive card. The agent never silently fails or creates incorrect SAP documents. All exception scenarios are configurable and tested in the UAT environment before go-live.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'SAP', item: 'https://kovil.ai/azure-ai-foundry/integrations/sap' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureSAPPage />
    </>
  )
}

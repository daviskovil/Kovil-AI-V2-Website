import type { Metadata } from 'next'
import FinancialServicesAzurePage from '@/src/pages/azure-ai-foundry/industries/FinancialServicesAzurePage'

export const metadata: Metadata = {
  title: 'AI Agents for Financial Services & Banking — Azure AI Foundry | Kovil AI',
  description: 'AI agents for financial services built on Azure. Automate KYC/AML document processing, fraud detection, regulatory compliance monitoring, and loan underwriting. Full audit trail. Entra ID governance.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking' },
  keywords: ['AI agents financial services Azure', 'Azure AI banking automation', 'KYC AML automation Azure', 'fraud detection Azure AI', 'regulatory compliance AI Azure', 'loan underwriting automation Azure', 'trade surveillance AI', 'Azure OpenAI financial services', 'Azure AI Document Intelligence banking', 'financial services AI compliance', 'Azure AI Foundry banking', 'Kovil AI financial services', 'credit underwriting AI Azure', 'AML compliance automation', 'Azure AI fraud prevention'],
  openGraph: { type: 'website', title: 'AI Agents for Financial Services — Azure AI Foundry | Kovil AI', description: 'Automate KYC/AML, fraud detection, compliance monitoring, and loan underwriting on Azure. Full audit trail. Entra ID governed.', url: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'AI Agents for Financial Services — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'AI Agents for Financial Services | Kovil AI', description: 'KYC/AML automation, fraud detection, compliance monitoring on Azure. 6x faster KYC. 99.2% audit trail.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agents for Financial Services & Banking',
  description: 'Intelligent AI agents for financial services built on Azure AI Foundry — automating KYC/AML document processing, fraud detection, regulatory compliance monitoring, trade surveillance, and loan underwriting with full audit trail and Entra ID governance.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do the financial services AI agents maintain regulatory compliance?', acceptedAnswer: { '@type': 'Answer', text: 'Every agent action, data access, and decision is logged in Azure Monitor with immutable records. We configure the agent to operate within your existing compliance frameworks — including configurable human-in-the-loop approval gates for high-risk decisions such as large transaction flags or KYC escalations. Audit evidence packages are exportable in formats compatible with regulatory examinations. Azure Policy enforces data residency and access controls throughout.' } },
    { '@type': 'Question', name: 'How does the agent handle sensitive customer data and PII?', acceptedAnswer: { '@type': 'Answer', text: 'All customer data remains within your Azure tenant. We use Microsoft Entra ID for role-based access control — ensuring the agent only accesses the data sources its role requires. Azure AI Document Intelligence processes KYC documents within your environment without data leaving your perimeter. No customer PII is sent to shared AI endpoints; we configure Azure OpenAI deployed resources within your subscription for complete data isolation.' } },
    { '@type': 'Question', name: 'Which core banking systems can the agent integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'The agent integrates with major core banking platforms including Temenos, FIS, Fiserv, and Finastra via REST APIs managed through Azure API Management. For document repositories we connect to SharePoint, FileNet, and OpenText. CRM integration covers Salesforce Financial Services Cloud and Microsoft Dynamics 365. Where proprietary systems lack APIs, Azure AI Document Intelligence processes exported documents or screen-scraped data feeds.' } },
    { '@type': 'Question', name: 'Can the fraud detection agent integrate with our existing fraud risk scoring system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Azure AI fraud detection layer is designed to augment your existing fraud risk platform rather than replace it. We connect the agent to your current fraud scoring system via Azure API Management, using the existing risk scores as one input signal alongside Azure Machine Learning anomaly detection and Azure OpenAI entity relationship analysis. The agent generates a composite risk assessment and routes to your existing adjudication workflow — preserving your current operational model while adding AI-powered pattern detection on top.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
    { '@type': 'ListItem', position: 4, name: 'Financial Services & Banking', item: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FinancialServicesAzurePage />
    </>
  )
}

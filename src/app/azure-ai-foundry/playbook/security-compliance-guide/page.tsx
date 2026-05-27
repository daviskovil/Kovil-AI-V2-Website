import type { Metadata } from 'next'
import AzureSecurityCompliancePage from '@/src/pages/azure-ai-foundry/playbook/AzureSecurityCompliancePage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Security & Compliance: Complete Enterprise Configuration Guide | Kovil AI',
  description: 'How to configure Azure AI Foundry for enterprise security: Managed Identity, private endpoints, Content Safety, HIPAA, SOC 2, ISO 27001. 12-point production security checklist.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide' },
  keywords: ['Azure AI Foundry security', 'Azure OpenAI HIPAA', 'Azure AI Managed Identity', 'Azure AI private endpoints', 'Azure AI compliance', 'Azure OpenAI security configuration', 'Azure AI Content Safety', 'Azure AI RBAC', 'Azure OpenAI private endpoint', 'Azure AI SOC 2', 'Azure AI ISO 27001', 'Azure AI FedRAMP', 'Azure AI PCI DSS', 'Azure AI security checklist', 'Kovil AI Azure playbook', 'Azure AI enterprise security'],
  openGraph: { type: 'article', title: 'Azure AI Foundry Security & Compliance Guide | Kovil AI', description: 'Complete enterprise security configuration: Managed Identity, private endpoints, Content Safety thresholds, HIPAA/SOC2/ISO27001, 12-point checklist.', url: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Security & Compliance Guide — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Security & Compliance | Kovil AI', description: 'Managed Identity, private endpoints, Content Safety, HIPAA BAA, 12-point production security checklist.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Azure AI Foundry Security & Compliance: The Complete Enterprise Configuration Guide',
  description: 'How to configure Azure AI Foundry for enterprise security across six layers: identity and access management, network isolation, data governance, Content Safety, compliance frameworks, and audit monitoring.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Azure AI Foundry HIPAA compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Azure AI Foundry services including Azure OpenAI, Azure AI Search, and Azure Storage are covered under Microsoft\'s HIPAA Business Associate Agreement (BAA). You must sign the BAA in the Azure portal under Compliance settings for your subscription. Additionally, you must configure private endpoints (no public access) for all AI services, verify that content logging (abuse monitoring) is not enabled, and ensure PHI does not appear in diagnostic logs. The BAA covers the platform infrastructure — your application-layer PHI handling, including what you log and cache, is your responsibility.' } },
    { '@type': 'Question', name: 'Can we use Azure OpenAI without exposing data to the public internet?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Azure OpenAI supports private endpoints that route all traffic within your Azure Virtual Network. You configure a private endpoint in your VNet subnet, associate it with the Private DNS Zone (privatelink.openai.azure.com), and set public network access to Disabled on the Azure OpenAI resource. All traffic from your application to Azure OpenAI then travels within Azure\'s network backbone with no public internet exposure. This configuration is required for HIPAA, PCI DSS, and most enterprise security frameworks. Configure it at the start of your build — retrofitting private networking to an existing deployment is significantly more complex.' } },
    { '@type': 'Question', name: 'What PII does Azure AI log by default?', acceptedAnswer: { '@type': 'Answer', text: 'Azure OpenAI does not log prompt or completion content by default. It logs request metadata: timestamp, token counts, model used, latency, and error codes. Azure AI Search logs query text (which may contain PII if users search for personal information) and result metadata. Prompt Flow captures flow run metadata and step-level traces — the inputs and outputs of each step can be captured if tracing is enabled, which may include PII in query text and retrieved content. You should review your Prompt Flow trace settings and mask PII fields before they are captured. Azure Monitor aggregates metrics only, not request content.' } },
    { '@type': 'Question', name: 'How do we ensure our Azure AI deployment passes a security audit?', acceptedAnswer: { '@type': 'Answer', text: 'The 12-point checklist in this guide represents the minimum security baseline for an enterprise audit. The items most commonly flagged are: API keys in application code (fix: Managed Identity), overly broad RBAC assignments at subscription scope (fix: resource-level minimum roles), public endpoints on AI services (fix: private endpoints with public access disabled), and default Content Safety thresholds without documentation (fix: explicit threshold configuration per deployment with documented rationale). Run the 12-point checklist before your audit. Most audit findings in Azure AI deployments are configuration issues, not architectural ones — they are fixable once identified.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry Security & Compliance Guide', item: 'https://kovil.ai/azure-ai-foundry/playbook/security-compliance-guide' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureSecurityCompliancePage />
    </>
  )
}

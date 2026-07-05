import type { Metadata } from 'next'
import AzureServiceNowPage from '@/src/pages/azure-ai-foundry/integrations/AzureServiceNowPage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry + ServiceNow Integration',
  description: 'AI agents that triage, resolve, and close ServiceNow incidents before humans touch them. Azure OpenAI + ServiceNow REST API — 74% tickets auto-resolved, 4.2 min avg resolution time.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/integrations/servicenow' },
  keywords: ['Azure AI ServiceNow integration', 'ServiceNow AI agent', 'Azure OpenAI ServiceNow', 'ServiceNow incident triage AI', 'ServiceNow automation AI', 'Azure AI Search ServiceNow KB', 'Semantic Kernel ServiceNow', 'ITSM AI automation', 'ServiceNow REST API Azure', 'Azure API Management ServiceNow', 'IT helpdesk AI agent', 'ServiceNow SLA prediction AI', 'change management AI ServiceNow', 'Kovil AI ServiceNow', 'AI ticket resolution'],
  openGraph: { type: 'website', title: 'Azure AI Foundry + ServiceNow: Auto-Resolve Tickets with AI | Kovil AI', description: '74% of ServiceNow tickets auto-resolved. AI triage, KB-based resolution, SLA breach prediction. No instance modifications.', url: 'https://kovil.ai/azure-ai-foundry/integrations/servicenow', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry + ServiceNow — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI + ServiceNow: 74% Auto-Resolution | Kovil AI', description: 'AI agents resolving ServiceNow tickets before analysts touch them. Azure OpenAI + REST API. No plugin install required.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Azure AI Foundry + ServiceNow Integration',
  description: 'AI agents that triage incidents, retrieve knowledge base resolutions, and auto-close repeat issues in ServiceNow — connected via REST API without instance modification.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/integrations/servicenow',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Azure AI integration with ServiceNow require a plugin or ServiceNow Store application?', acceptedAnswer: { '@type': 'Answer', text: 'No. The integration uses the standard ServiceNow Table API and Scripted REST endpoints — both available on all ServiceNow instances without plugin installation. Authentication uses OAuth 2.0 with a ServiceNow OAuth provider profile, which is a standard ServiceNow capability. This approach means there is no ServiceNow Store certification dependency, no upgrade compatibility concern with new ServiceNow releases, and no additional ServiceNow licensing cost.' } },
    { '@type': 'Question', name: 'How does the AI agent decide whether to auto-resolve a ticket or escalate to a human?', acceptedAnswer: { '@type': 'Answer', text: 'The agent applies a configurable decision framework: if a high-confidence resolution is found in the indexed knowledge base (above a set similarity threshold) AND the issue type is in the agent\'s authorised resolution scope AND the affected CI is not flagged as critical infrastructure, the agent attempts autonomous resolution. If any condition fails, the agent posts a work note with the resolution suggestion and routes the ticket to a human analyst. The authorised resolution scope and confidence thresholds are tuned during the deployment UAT phase.' } },
    { '@type': 'Question', name: 'What happens to the audit trail when the AI agent resolves a ticket?', acceptedAnswer: { '@type': 'Answer', text: 'Every agent action is recorded in two places: a work note in the ServiceNow incident record (visible to analysts and auditors in ServiceNow) and a structured log entry in Azure Monitor with the agent reasoning, KB articles retrieved, API calls made, and resolution confidence score. This dual audit trail satisfies both IT governance requirements (ServiceNow-native audit trail) and security/compliance review (Azure Monitor structured logs with configurable retention).' } },
    { '@type': 'Question', name: 'How is the ServiceNow knowledge base kept current in the Azure AI Search index?', acceptedAnswer: { '@type': 'Answer', text: 'A ServiceNow Business Rule fires on KB article publish, update, and retire events — sending the article payload via HTTP to the Azure AI Search push indexer endpoint. This provides near-real-time index updates when knowledge is changed in ServiceNow. Additionally, resolved incident work notes are periodically batch-indexed to expand the resolution corpus beyond formal KB articles — capturing tribal knowledge embedded in past ticket resolutions.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Integrations', item: 'https://kovil.ai/azure-ai-foundry/integrations' },
    { '@type': 'ListItem', position: 4, name: 'ServiceNow', item: 'https://kovil.ai/azure-ai-foundry/integrations/servicenow' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureServiceNowPage />
    </>
  )
}

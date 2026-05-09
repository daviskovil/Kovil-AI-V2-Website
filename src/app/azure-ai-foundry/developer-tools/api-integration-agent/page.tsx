import type { Metadata } from 'next'
import APIIntegrationAgentPage from '@/src/pages/azure-ai-foundry/developer-tools/APIIntegrationAgentPage'

export const metadata: Metadata = {
  title: 'API Integration Agent — Azure APIM & OpenAPI Auto-Gen | Kovil AI',
  description: 'AI agent that reads OpenAPI specs, generates integration code, and publishes APIs to Azure API Management. Cut API integration time from days to hours. Built on Azure AI Foundry.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent' },
  keywords: ['API integration agent Azure', 'Azure APIM AI automation', 'OpenAPI code generation AI', 'Azure API Management AI', 'API auto-generation Azure OpenAI', 'Azure AI Foundry API tools', 'developer automation AI Azure', 'API documentation AI', 'Azure Logic Apps AI integration', 'OpenAPI spec AI agent', 'API testing AI Azure', 'Azure Function AI generation', 'integration agent Azure', 'API mesh AI Azure', 'Kovil AI Azure', 'API automation developer tools'],
  openGraph: { type: 'website', title: 'API Integration Agent — Azure APIM & AI | Kovil AI', description: 'AI agent for API integration. Reads OpenAPI specs, generates code, publishes to Azure APIM. Days to hours.', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'API Integration Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'API Integration Agent | Kovil AI', description: 'AI reads OpenAPI specs, generates integration code, publishes to Azure APIM. Days to hours.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'API Integration Agent',
  description: 'AI agent that ingests OpenAPI specifications, generates typed integration code, and automates publication to Azure API Management — reducing API integration time from days to hours.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What API specification formats does the agent support?', acceptedAnswer: { '@type': 'Answer', text: 'The agent supports OpenAPI 3.x (JSON and YAML), Swagger 2.0, AsyncAPI for event-driven APIs, and GraphQL schema definitions. For legacy APIs without formal specifications, the agent can infer structure from sample requests and response payloads, generating a draft OpenAPI specification for developer review before code generation begins.' } },
    { '@type': 'Question', name: 'What programming languages can the agent generate integration code for?', acceptedAnswer: { '@type': 'Answer', text: 'The agent generates typed client code for C# (.NET), TypeScript/JavaScript, Python, and Java. Generated code includes: strongly typed request/response models, authentication handling (OAuth 2.0, API keys, Managed Identity), retry logic with exponential backoff, and error handling aligned to your team\'s existing patterns. Code is generated as a pull request for developer review before merging.' } },
    { '@type': 'Question', name: 'How does the agent handle API versioning in Azure APIM?', acceptedAnswer: { '@type': 'Answer', text: 'The agent manages version lifecycle in Azure API Management automatically — creating new API versions when a breaking change is detected in the spec, maintaining backward-compatible versions for a configurable deprecation window, and updating APIM policies (rate limiting, transformation, authentication) to reflect the new version. Version change summaries are posted as PR comments for developer visibility.' } },
    { '@type': 'Question', name: 'Can the agent generate integration tests alongside the client code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For each generated integration, the agent produces a test suite covering: happy path requests for all endpoints, error response handling (400, 401, 404, 500), rate limit behaviour, and schema validation of responses. Tests are written in the same language as the client code and are designed to run in Azure DevOps pipelines against a sandbox API environment.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'API Integration Agent', item: 'https://kovil.ai/azure-ai-foundry/developer-tools/api-integration-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <APIIntegrationAgentPage />
    </>
  )
}

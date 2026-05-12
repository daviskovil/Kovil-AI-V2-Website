import type { Metadata } from 'next'
import APITestingAgentPage from '@/src/pages/vertex-ai/developer-tools/APITestingAgentPage'

export const metadata: Metadata = {
  title: 'API Testing & Documentation Agent — Gemini-Powered QA on GCP | Kovil AI',
  description: 'AI agent that generates, runs, and maintains API tests using Gemini — produces OpenAPI documentation, detects regressions, and flags contract violations automatically on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent' },
  keywords: ['API testing agent GCP', 'Gemini API testing', 'AI API test generation', 'Vertex AI QA agent', 'automated API testing GCP', 'Gemini OpenAPI documentation', 'Google Cloud API testing', 'AI contract testing', 'Vertex AI developer tools', 'API regression detection AI', 'GCP QA automation agent', 'Gemini API documentation generator'],
  openGraph: {
    type: 'website',
    title: 'API Testing & Documentation Agent — Gemini on GCP | Kovil AI',
    description: 'AI agent that generates and maintains API tests using Gemini — OpenAPI documentation, regression detection, and contract violation flagging on Google Cloud.',
    url: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'API Testing Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API Testing & Documentation Agent | Kovil AI Vertex AI',
    description: 'Gemini-powered API test generation, documentation, and contract validation on Google Cloud.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'API Testing & Documentation Agent',
  description: 'AI agent that generates, runs, and maintains API tests using Gemini — produces OpenAPI documentation, detects regressions, and flags contract violations automatically on Google Cloud.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Gemini generate API tests?', acceptedAnswer: { '@type': 'Answer', text: 'Gemini analyses your API specification (OpenAPI/Swagger, gRPC proto files, or by observing actual traffic) and generates comprehensive test suites: positive test cases that verify correct behaviour for valid inputs, negative test cases for boundary conditions and invalid inputs, security tests for authentication bypass and injection vulnerabilities, and performance tests for latency and throughput under load. Generated tests are output as executable code in your preferred framework (pytest, Jest, Postman collections, k6) and committed to your repository. The agent re-runs and updates tests automatically when the API spec changes.' } },
    { '@type': 'Question', name: 'How does the agent detect API regressions?', acceptedAnswer: { '@type': 'Answer', text: 'The agent runs the complete test suite on every code commit via Cloud Build integration. For each test run, it compares response schemas, field values, status codes, and latency against the established baseline. When a regression is detected — a previously passing test now fails, a response schema changes unexpectedly, or latency degrades beyond a threshold — the agent generates a Gemini-narrated regression report: "The /orders/{id} endpoint now returns 500 for requests with a null shipping address. Previously it returned a 400 with an error message. This is a breaking change affecting 3 downstream consumer services." Reports are posted to your Slack channel and linked in the PR.' } },
    { '@type': 'Question', name: 'How is the OpenAPI documentation generated and kept up to date?', acceptedAnswer: { '@type': 'Answer', text: 'The agent observes actual API traffic captured via Apigee or Cloud Endpoints, analyses request and response shapes, and generates or updates the OpenAPI specification to match actual behaviour — not just what the spec claims. It also enriches the documentation with natural language descriptions of each endpoint, parameter, and response code written by Gemini. The documentation is generated as a static site (Redoc or Swagger UI) and deployed automatically. When API behaviour changes — detected via traffic analysis — the agent opens a PR with the updated spec and a Gemini summary of what changed.' } },
    { '@type': 'Question', name: 'What API gateway and CI/CD integrations are supported?', acceptedAnswer: { '@type': 'Answer', text: 'The agent integrates with Google Cloud Apigee and Cloud Endpoints as the API gateway layer for traffic capture and policy enforcement. For CI/CD, it integrates with Cloud Build, GitHub Actions, and GitLab CI — running the test suite as part of every pull request and blocking merges when contract violations are detected. For API contract testing in a microservices environment, we implement consumer-driven contract testing using Pact, orchestrated by the agent and run on Cloud Run. Results are stored in BigQuery and surfaced in a quality dashboard showing test coverage, regression frequency, and API reliability over time.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/vertex-ai/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'API Testing Agent', item: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <APITestingAgentPage />
    </>
  )
}

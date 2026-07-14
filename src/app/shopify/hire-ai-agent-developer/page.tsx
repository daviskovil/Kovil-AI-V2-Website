import type { Metadata } from 'next'
import HireShopifyAgentDeveloperPage from '@/src/pages/shopify/HireShopifyAgentDeveloperPage'

export const metadata: Metadata = {
  title: 'Hire Shopify AI Agent Developers',
  description: 'Hire senior AI developers vetted for Shopify Admin API integrations, LangGraph multi-agent orchestration, MCP servers, and RAG catalog search. Matched in 48 hours, 100% IP ownership, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/hire-ai-agent-developer' },
  keywords: [
    'hire shopify ai developer',
    'shopify ai agent developers',
    'embedded shopify ai engineer',
    'hire ecommerce ai engineers',
    'shopify custom agent coding',
    'shopify mcp developer',
    'langgraph developer for hire',
    'shopify api integration engineer',
    'hire ai engineer ecommerce',
    'shopify rag developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire Shopify AI Agent Developers | Kovil AI',
    description: 'Embed senior engineers specializing in custom e-commerce agents, GraphQL tool-calling, and Model Context Protocol setups. Matched in 48 hours.',
    url: 'https://kovil.ai/shopify/hire-ai-agent-developer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-agent-architecture.png', width: 1200, height: 675, alt: 'Hire Shopify AI Agent Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Shopify AI Agent Developers | Kovil AI',
    description: 'Embed senior engineers specializing in custom e-commerce agents, GraphQL tool-calling, and Model Context Protocol setups. Matched in 48 hours.',
    images: ['https://kovil.ai/shopify-agent-architecture.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Shopify AI Agent Developers',
  description: 'Staffing and embedded-engineering service placing senior developers specializing in Shopify Admin API integrations, Model Context Protocol servers, LangGraph multi-agent orchestration, and RAG catalog search.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
    address: [
      { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' },
    ],
  },
  serviceType: 'AI Talent Placement & Embedded Engineering',
  category: 'Shopify AI Development Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/hire-ai-agent-developer',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shopify AI Talent Placements',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MCP & Integration Engineer Placement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Agent / LangGraph Architect Placement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG & Semantic Search Engineer Placement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full-Stack Agent Engineer Placement' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does a Shopify AI agent developer do?', acceptedAnswer: { '@type': 'Answer', text: 'An AI agent developer designs and writes custom software agents that communicate directly with Shopify\'s database using standard APIs. Unlike a basic chat widget, these agents can execute multi-turn e-commerce actions—fetching shipping tracking codes, automating refunds, dynamically adjusting variant prices, and auto-drafting marketing copy.' } },
    { '@type': 'Question', name: 'How much does it cost to hire an AI developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'We place senior, vetted, Delivery-Lead-audited agent engineers on a flexible contract basis. Rates are competitive and transparent, structured based on engagement scope, with no long-term contracts and a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'What is the average timeline to match and deploy an engineer?', acceptedAnswer: { '@type': 'Answer', text: 'We match you with 2–3 vetted engineers specifically qualified for your stack within 24–48 hours of scoping. Once selected, your developer can begin embedding and coding within 3–4 days.' } },
    { '@type': 'Question', name: 'Do I fully own the custom agent\'s IP and code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100%. All custom code, agentic prompts, workflow schemas, database structures, and documentation developed during the placement are fully owned by you under clear IP-assignment clauses.' } },
    { '@type': 'Question', name: 'How is this different from hiring through a freelance platform like Upwork?', acceptedAnswer: { '@type': 'Answer', text: 'Every Kovil AI engineer passes a live technical assessment specifically on Shopify Admin API and agentic reasoning problems, graded by our own senior engineers — and every placement is backed by a Delivery Lead who audits milestones, not just a hands-off contract.' } },
    { '@type': 'Question', name: 'Can I hire more than one developer for a larger project?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many brands start with an embedded engineer for a first workflow, then scale to a managed pod (engineer + comms/design specialist + delivery lead) once the initial build proves out.' } },
    { '@type': 'Question', name: 'What happens if the developer isn\'t a good fit?', acceptedAnswer: { '@type': 'Answer', text: 'Every placement includes a 2-week risk-free trial. If it\'s not working, we swap in a new engineer at no additional cost, or you can exit the engagement entirely — no long notice periods or replacement fees.' } },
    { '@type': 'Question', name: 'Do your developers work in my existing codebase and tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Engineers embed directly into your GitHub/GitLab repos, project management tools, and communication channels, following your existing code review and deployment processes.' } },
    { '@type': 'Question', name: 'What seniority level are the engineers you place?', acceptedAnswer: { '@type': 'Answer', text: 'We only place senior engineers — typically 5+ years of production software experience with demonstrable agentic AI or e-commerce integration shipping history.' } },
    { '@type': 'Question', name: 'Can a hired developer also help with non-AI Shopify development?', acceptedAnswer: { '@type': 'Answer', text: 'Our developers specialize in AI agent and integration engineering, but most are also strong full-stack Shopify developers capable of theme work, app development, and general storefront engineering.' } },
    { '@type': 'Question', name: 'Do you offer ongoing support after the initial build?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients convert an initial sprint engagement into an ongoing retainer for monitoring, model upgrades, and incremental feature work.' } },
    { '@type': 'Question', name: 'How do you handle timezone overlap for embedded engineers?', acceptedAnswer: { '@type': 'Answer', text: 'We match based on your stated overlap requirements during scoping — most clients request at least 4 hours of daily overlap. Our talent pool spans North America, Europe, and Asia-Pacific.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Hire AI Agent Developers', item: 'https://kovil.ai/shopify/hire-ai-agent-developer' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hire Shopify AI Agent Developers | Kovil AI',
  description: 'Hire senior AI developers vetted for Shopify Admin API integrations, LangGraph multi-agent orchestration, MCP servers, and RAG catalog search.',
  url: 'https://kovil.ai/shopify/hire-ai-agent-developer',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HireShopifyAgentDeveloperPage />
    </>
  )
}

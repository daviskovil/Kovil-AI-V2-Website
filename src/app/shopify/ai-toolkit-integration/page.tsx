import type { Metadata } from 'next'
import ShopifyAiToolkitPage from '@/src/pages/shopify/ShopifyAiToolkitPage'

export const metadata: Metadata = {
  title: 'Shopify AI Toolkit & MCP Server Integrations',
  description: 'Integrate your storefront with the official Shopify AI Toolkit and custom Model Context Protocol (MCP) servers. Semantically connect catalogs and order pipelines to LLMs with sub-50ms response times.',
  alternates: { canonical: 'https://kovil.ai/shopify/ai-toolkit-integration' },
  keywords: [
    'shopify ai toolkit',
    'shopify ai api',
    'shopify mcp server',
    'model context protocol shopify',
    'shopify ai integration services',
    'shopify graphql ai',
    'shopify vector search',
    'shopify rag catalog',
    'mcp server developer',
    'shopify llm integration',
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify AI Toolkit & MCP Server Integrations | Kovil AI',
    description: 'Integrate your storefront with the official Shopify AI Toolkit and custom Model Context Protocol (MCP) servers.',
    url: 'https://kovil.ai/shopify/ai-toolkit-integration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-agent-architecture.png', width: 1200, height: 675, alt: 'Shopify AI Toolkit & MCP Integrations — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify AI Toolkit & MCP Server Integrations | Kovil AI',
    description: 'Integrate your storefront with the official Shopify AI Toolkit and custom Model Context Protocol (MCP) servers.',
    images: ['https://kovil.ai/shopify-agent-architecture.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify AI Toolkit & MCP Server Integration',
  description: 'Custom Model Context Protocol (MCP) server engineering, GraphQL API integration, and vector database catalog sync for Shopify stores — connecting product, order, and inventory data to LLMs securely.',
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
  serviceType: 'AI Platform Engineering',
  category: 'Shopify AI Integration',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/ai-toolkit-integration',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Toolkit Integration Pillars',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MCP Server Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify GraphQL Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vector Database Catalog Sync' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Checkout & Draft Order Tooling' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-3 week fixed-price sprint to production.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the Model Context Protocol (MCP)?', acceptedAnswer: { '@type': 'Answer', text: 'The Model Context Protocol (MCP) is an open standard that allows LLMs to interact with secure external data sources and tools. We write custom MCP servers that map Shopify\'s database schema, exposing product features, inventory metrics, and customer tracking tools directly to AI reasoning models.' } },
    { '@type': 'Question', name: 'Do you use the official Shopify AI Toolkit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate official Shopify API layers with custom-built libraries to create robust agentic ecosystems that handle the unique scale, checkout parameters, and draft-order requirements of enterprise stores.' } },
    { '@type': 'Question', name: 'Can the integration scale with holiday traffic peaks?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Our custom MCP and RAG nodes run on serverless cloud architectures that scale automatically to handle flash-sale checkout spikes.' } },
    { '@type': 'Question', name: 'Why build a custom MCP server instead of using Shopify\'s default AI features?', acceptedAnswer: { '@type': 'Answer', text: 'A custom MCP layer lets us expose exactly the data and actions your specific workflows need — draft order creation, custom discount logic, ERP-synced stock levels — none of which are available out of the box.' } },
    { '@type': 'Question', name: 'Is my product catalog data sent to a third party for indexing?', acceptedAnswer: { '@type': 'Answer', text: 'No. Vector indexing runs inside your own private cloud tenant. Catalog data never leaves your infrastructure boundary except as encrypted API calls to the LLM provider you\'ve chosen.' } },
    { '@type': 'Question', name: 'How do you keep the vector index in sync with live inventory?', acceptedAnswer: { '@type': 'Answer', text: 'We connect Shopify webhooks to trigger incremental re-indexing, so the vector database reflects catalog changes within seconds rather than running on a stale nightly batch.' } },
    { '@type': 'Question', name: 'Can agents write back to Shopify, or only read data?', acceptedAnswer: { '@type': 'Answer', text: 'Both, depending on the tools you authorize. Read-only tools are the default; write-capable tools are opt-in and can require human approval before execution.' } },
    { '@type': 'Question', name: 'Do you support multi-store or multi-region Shopify Plus setups?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We architect MCP gateways that can route to multiple Shopify store instances based on region, brand, or currency, with a unified tool schema.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'AI Toolkit & MCP', item: 'https://kovil.ai/shopify/ai-toolkit-integration' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shopify AI Toolkit & MCP Server Integrations | Kovil AI',
  description: 'Integrate your storefront with the official Shopify AI Toolkit and custom Model Context Protocol (MCP) servers.',
  url: 'https://kovil.ai/shopify/ai-toolkit-integration',
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
      <ShopifyAiToolkitPage />
    </>
  )
}

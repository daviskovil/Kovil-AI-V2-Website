import type { Metadata } from 'next'
import ShopifyHubPage from '@/src/pages/shopify/ShopifyHubPage'

export const metadata: Metadata = {
  title: 'Shopify AI Agent Integration & E-Commerce Automation',
  description: 'Deploy custom autonomous AI agent networks on Shopify. Integrate Model Context Protocol (MCP) servers, semantic product recommendation RAG, and multi-agent workflows for e-commerce. Matched in 48 hours, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify' },
  keywords: [
    'shopify ai agent',
    'shopify ai agents',
    'shopify agentic ai',
    'ai agents for ecommerce',
    'ecommerce ai agents',
    'shopify ai toolkit',
    'shopify ecommerce automation',
    'shopify ai sidekick',
    'shopify custom ai agent',
    'mcp server shopify'
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify AI Agent Integration & E-Commerce Automation | Kovil AI',
    description: 'Deploy custom autonomous AI agent networks on Shopify. Integrate Model Context Protocol (MCP) servers, semantic RAG, and multi-agent e-commerce workflows. Sprint-delivered with 2-week risk-free trial.',
    url: 'https://kovil.ai/shopify',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-agent-architecture.png', width: 1200, height: 675, alt: 'Shopify AI Agent Architecture — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify AI Agent Integration & E-Commerce Automation | Kovil AI',
    description: 'Deploy custom autonomous AI agent networks on Shopify. Integrate Model Context Protocol (MCP) servers and multi-agent workflows. 2-week risk-free trial.',
    images: ['https://kovil.ai/shopify-agent-architecture.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify AI Agent Development and Integration Services',
  description: 'Design, build, and embed custom autonomous AI agents and multi-agent networks inside Shopify stores. Specialists in Model Context Protocol (MCP) servers, e-commerce automation, and stateful LangGraph workflows. Matches in 48 hours with a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'AI E-Commerce Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/shopify',
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do custom AI agents connect and interact with my Shopify store?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We connect AI models directly to your store using custom Model Context Protocol (MCP) servers and the Shopify Admin API. This grants the AI agents secure read/write capabilities to look up catalog details, fetch inventory stock levels, sync shipping status, and create promotional discount codes based on semantic goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can e-commerce AI agents write actions back to Shopify autonomously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Unlike passive retrieval chatbots, Kovil AI builds autonomous "acting" agents that perform operations like adjusting pricing tables, tagging newly ingested product spec-sheets, and recovery email generation. All critical actions (such as direct pricing updates or campaign sends) are governed by stateful human-in-the-loop Slack validation approvals.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the role of the Manager Agent in a multi-agent e-commerce team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a multi-agent system, the Manager Agent coordinates workflow state machines (built on LangGraph). For example, it directs the Design Agent to generate product promotional banners, automatically routes those assets to the Communication Agent to compile the email draft, and triggers a Slack review notification to the store manager for human approval before execution.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you prevent AI hallucination or pricing errors in production systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We employ rigorous AI evaluation frameworks (such as Promptfoo and RAGAS) during the development sprint to test prompts against thousands of edge cases. Furthermore, we programmatically enforce schema validation filters and insert strict range limit rules (e.g. no discount code can exceed 25% value) into the integration code, combined with human checkpoint gates.'
      }
    }
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Shopify AI Solutions', item: 'https://kovil.ai/shopify' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><ShopifyHubPage /></div>
    </>
  )
}

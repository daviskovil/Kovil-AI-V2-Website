import type { Metadata } from 'next'
import ShopifyAgenticCommercePage from '@/src/pages/shopify/ShopifyAgenticCommercePage'

export const metadata: Metadata = {
  title: 'Shopify Agentic Commerce Solutions & Consulting',
  description: 'Design and deploy custom multi-agent networks (Manager, Design, Comms, and Repricing agents) tailored for high-volume Shopify stores. LangGraph orchestration, human-in-the-loop controls, sprint-delivered with 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/ai-agentic-commerce' },
  keywords: [
    'shopify agentic commerce',
    'ecommerce ai agents',
    'ai agents for ecommerce',
    'multi agent ecommerce systems',
    'custom shopify ai solutions',
    'langgraph shopify',
    'autonomous ecommerce agents',
    'shopify ai automation consulting',
    'ai repricing agent shopify',
    'multi agent commerce architecture',
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify Agentic Commerce Solutions & Consulting | Kovil AI',
    description: 'Design and deploy custom multi-agent networks tailored for high-volume Shopify stores. LangGraph orchestration with human-in-the-loop controls.',
    url: 'https://kovil.ai/shopify/ai-agentic-commerce',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-agent-architecture.png', width: 1200, height: 675, alt: 'Shopify Agentic Commerce — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Agentic Commerce Solutions & Consulting | Kovil AI',
    description: 'Design and deploy custom multi-agent networks tailored for high-volume Shopify stores.',
    images: ['https://kovil.ai/shopify-agent-architecture.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Agentic Commerce Solutions',
  description: 'Custom multi-agent AI network design and deployment for Shopify stores — Manager, Design, Communication, and Repricing agents coordinated via LangGraph with human-in-the-loop approval controls.',
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
  serviceType: 'Multi-Agent AI System Design & Implementation',
  category: 'Shopify AI Automation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/ai-agentic-commerce',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentic Commerce Agent Roles',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manager Agent Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design & Creative Agent Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Communication Agent Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repricing & Ops Agent Design' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-3 week first sprint to production.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Agentic Commerce?', acceptedAnswer: { '@type': 'Answer', text: 'Agentic Commerce represents a shift from static, rule-based automation (like Zapier triggers) to dynamic, cognitive AI agents. Instead of running rigid if/then flows, custom agents use large language models to reason over data, choose what tools to execute, self-correct errors, and coordinate multi-step tasks autonomously.' } },
    { '@type': 'Question', name: 'How long does a custom multi-agent setup take to deploy?', acceptedAnswer: { '@type': 'Answer', text: 'Most multi-agent systems are prototyped and integrated within 2–3 weeks for a first workflow. We place a dedicated, vetted engineering team to execute the build, backed by weekly milestones and Engagement Lead quality audits.' } },
    { '@type': 'Question', name: 'What security measures protect customer data?', acceptedAnswer: { '@type': 'Answer', text: 'We run agent instances in dedicated, private cloud tenants. All customer data and Shopify tokens are fully encrypted, with masked data pathways ensuring PII never enters public LLM training datasets.' } },
    { '@type': 'Question', name: 'Do I need to replace my existing Shopify Flow automations?', acceptedAnswer: { '@type': 'Answer', text: 'No. Agentic systems typically sit alongside Shopify Flow, handling the unstructured, judgment-based work that Flow can\'t, while Flow continues to handle simple deterministic triggers.' } },
    { '@type': 'Question', name: 'How many agents does a typical deployment include?', acceptedAnswer: { '@type': 'Answer', text: 'Most first engagements start with 2–3 agents covering one workflow end-to-end. Brands that scale up typically run 4–6 specialized agents across marketing, ops, and support.' } },
    { '@type': 'Question', name: 'Can the agents make purchasing or pricing decisions without approval?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you configure them to. By default, every high-stakes action routes through a Slack approval gate before execution. You control which actions are fully autonomous.' } },
    { '@type': 'Question', name: 'What happens if an agent encounters something it can\'t handle?', acceptedAnswer: { '@type': 'Answer', text: 'Agents are built with explicit escalation paths — when confidence is low or the situation falls outside defined boundaries, the workflow pauses and routes to a human, rather than guessing.' } },
    { '@type': 'Question', name: 'Which LLM providers do you use?', acceptedAnswer: { '@type': 'Answer', text: 'We architect model-agnostic systems and typically use a mix of Anthropic Claude, OpenAI GPT, and open-source models selected per task based on latency, cost, and reasoning requirements.' } },
    { '@type': 'Question', name: 'Can this integrate with our existing marketing and support tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build direct connectors to Klaviyo, Gorgias, Zendesk, HubSpot, Stripe, and most major e-commerce tools, so agents write into systems you already use.' } },
    { '@type': 'Question', name: 'What\'s the ongoing cost after the initial build?', acceptedAnswer: { '@type': 'Answer', text: 'Ongoing cost is primarily LLM token usage (typically $10–$150/month depending on volume) plus optional monitoring retainer. There\'s no software license fee — you own the code and infrastructure outright.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Agentic Commerce', item: 'https://kovil.ai/shopify/ai-agentic-commerce' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shopify Agentic Commerce Solutions & Consulting | Kovil AI',
  description: 'Design and deploy custom multi-agent networks tailored for high-volume Shopify stores.',
  url: 'https://kovil.ai/shopify/ai-agentic-commerce',
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
      <ShopifyAgenticCommercePage />
    </>
  )
}

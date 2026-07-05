import type { Metadata } from 'next'
import AgentforcePricingGuidePage from '@/src/pages/agentforce/playbook/AgentforcePricingGuidePage'

export const metadata: Metadata = {
  title: 'Agentforce Pricing 2026: $2 Per Conversation + Real Total Cost',
  description:
    'Salesforce Agentforce official pricing 2026: $2 per conversation — but that is not the real cost. Full breakdown of Data Cloud licences, Einstein add-ons, MuleSoft, implementation cost, and total cost of ownership.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026' },
  keywords: [
    'agentforce pricing',
    'salesforce agentforce pricing',
    'agentforce $2 per conversation',
    'salesforce agentforce pricing official 2026',
    'agentforce pricing per conversation',
    'how much does agentforce cost',
    'agentforce cost',
    'agentforce licence cost',
    'agentforce per conversation pricing',
    'salesforce agentforce price 2026',
    'agentforce data cloud cost',
    'agentforce implementation cost',
    'agentforce total cost of ownership',
    'agentforce roi',
    'agentforce conversation pricing',
    'salesforce agentforce 2026 pricing',
    'agentforce vs competitor pricing',
    'what is agentforce pricing',
  ],
  openGraph: {
    type: 'article',
    title: 'Agentforce Pricing 2026: $2 Per Conversation + Real Total Cost | Kovil AI',
    description:
      'Salesforce Agentforce official pricing 2026: $2 per conversation — but that is not the real cost. Data Cloud, Einstein add-ons, MuleSoft, implementation, and TCO breakdown.',
    url: 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Pricing Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Pricing 2026: $2 Per Conversation + Real Total Cost | Kovil AI',
    description:
      'Salesforce Agentforce official pricing 2026: $2 per conversation — but that is not the real cost. Data Cloud, Einstein add-ons, MuleSoft, implementation, and TCO breakdown.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentforce Pricing Guide 2026: What It Really Costs to Deploy Salesforce Agentforce',
  description:
    'Complete Agentforce pricing breakdown — per-conversation cost, Data Cloud licences, Einstein add-ons, MuleSoft, implementation cost, and total cost of ownership.',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026',
  },
  image: { '@type': 'ImageObject', url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Agentforce priced per conversation or per user?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce is priced per conversation, not per user or per seat. As of 2026, the list price is $2.00 per conversation. Volume discounts are negotiated at enterprise level and can bring the effective rate down to $0.80–$1.20 per conversation at scale.',
      },
    },
    {
      '@type': 'Question',
      name: 'What counts as an Agentforce conversation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A conversation is a complete interaction between an end user and an Agentforce agent — from the first message to resolution or escalation. A conversation ends when the user session closes, the agent resolves the case, or a 24-hour inactivity window passes. Multiple back-and-forth messages within one session count as a single conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need Data Cloud for Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not strictly required for basic deployments, but strongly recommended for production-grade agents. Without Data Cloud, agents are grounded only in data available in the immediate Salesforce record context. Data Cloud lists at $108,000/year for 10M profiles. Many organisations already have Data Cloud, making this a moot cost question.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is MuleSoft required for Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MuleSoft is not required. For simpler integrations, Agentforce can use HTTP callout Actions via Apex — connecting to REST APIs without MuleSoft. MuleSoft becomes worth the cost when you need complex, high-volume integration with enterprise systems. Typical MuleSoft Anypoint Platform pricing: $150,000–$500,000+/year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I start with a small pilot before committing to annual volume?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Salesforce offers monthly Agentforce licences at a premium, and Kovil AI runs fixed-price pilots scoped to a single use case. Our typical pilot is 2–3 weeks and scoped to production — not a proof of concept. The pilot gives you real conversation volume and a real business case before you commit to annual volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Agentforce implementation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused single-use-case pilot (2–3 weeks) typically runs $15,000–$35,000 fixed price. A full multi-cloud deployment (6–12 weeks) runs $60,000–$180,000. Ongoing managed services add $5,000–$15,000/month. Traditional SIs often charge $250–$400/hour T&M. Kovil AI operates fixed-price only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Agentforce and Einstein licence pricing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce is priced per conversation for autonomous agent interactions. Einstein licences are user-based add-ons (~$50/user/month for Einstein for Sales or Service) that unlock Einstein Copilot and predictive AI features for individual reps. Many deployments need both. If you are on Salesforce Unlimited or Unlimited+, some Einstein features are included.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate the ROI of Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with your baseline cost: FTEs × loaded annual cost. Apply your autonomous resolution rate target to determine displaced FTE. Calculate gross saving. Subtract annual Agentforce cost (conversations × $2 × 12, plus licences). Divide Year 1 total cost by annual net saving to get payback period. Typical break-even is 14–24 months.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/agentforce/playbook' },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Agentforce Pricing Guide 2026',
      item: 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026',
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Pricing Guide 2026: Full Cost Breakdown | Kovil AI',
  description:
    'Complete Agentforce pricing guide — per-conversation cost, Data Cloud licences, Einstein add-ons, MuleSoft, implementation cost, and total cost of ownership model.',
  url: 'https://kovil.ai/agentforce/playbook/agentforce-pricing-guide-2026',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3', 'p'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforcePricingGuidePage />
    </>
  )
}

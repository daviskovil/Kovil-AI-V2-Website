import type { Metadata } from 'next'
import ShopifyPlusPlatformPage from '@/src/pages/platforms/shopify-plus/ShopifyPlusPlatformPage'

export const metadata: Metadata = {
  title: 'Shopify Plus Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Shopify Plus — Shopify Magic and Sidekick AI agents, plus vetted Liquid/Hydrogen developers, app engineers, and solutions architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/shopify-plus' },
  keywords: [
    'shopify plus ai agents',
    'hire shopify developer',
    'shopify liquid developer',
    'shopify hydrogen developer',
    'shopify staff augmentation',
    'shopify solutions architect',
    'shopify magic sidekick integration',
    'what is shopify plus',
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify Plus Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Shopify Magic and Sidekick AI agents, plus vetted Liquid/Hydrogen developers, app engineers, and solutions architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/shopify-plus',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Plus Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Shopify Magic and Sidekick AI agents, plus vetted Liquid/Hydrogen developers, app engineers, and solutions architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify Plus Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Shopify Magic and Sidekick AI agents on Shopify Plus and staffs vetted Liquid/Hydrogen developers, app engineers, and solutions architects — covering storefronts, checkout extensibility, B2B, and multi-channel integrations.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Shopify Plus Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/shopify-plus',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Shopify Plus Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Magic & Sidekick AI Agent Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Frontend Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify App & Backend Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Solutions Architect Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/shopify-plus' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Shopify Plus',
  description: "Shopify Plus is Shopify's enterprise commerce tier, adding checkout extensibility, Shopify Functions, B2B on Shopify, multi-currency Markets, and dedicated infrastructure on top of the core platform that powers over a million businesses worldwide.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/shopify-plus',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shopify Plus Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Shopify Plus — Shopify Magic and Sidekick AI agents, plus vetted Liquid/Hydrogen developers, app engineers, and solutions architects.',
  url: 'https://kovil.ai/platforms/shopify-plus',
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#definition p', '#faq h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Work With Kovil AI on Shopify Plus',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Store', text: "Tell us what you're running, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/shopify-plus' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Shopify specialists matched to your stack and traffic.', url: 'https://kovil.ai/platforms/shopify-plus' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/shopify-plus' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Shopify Plus?', acceptedAnswer: { '@type': 'Answer', text: "Shopify Plus is Shopify's enterprise tier, built for high-growth and large merchants — adding checkout extensibility, Shopify Functions, B2B on Shopify, multi-currency Markets, and dedicated infrastructure on top of the core Shopify platform." } },
    { '@type': 'Question', name: 'Does Shopify have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Shopify ships Shopify Magic for AI-generated product content and images, plus Sidekick, Shopify's AI commerce assistant. Kovil AI configures both natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Shopify, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Shopify developer to clean up catalog and app architecture, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Shopify developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Shopify talent bills $20-$40 per hour depending on role and experience, versus $45-$140+ per hour for prevailing US onsite rates for the same roles, typically 60-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Frontend Developer, App Developer, Solutions Architect, and AI Specialist?', acceptedAnswer: { '@type': 'Answer', text: 'A Frontend Developer builds Liquid themes or headless Hydrogen storefronts. An App & Backend Developer builds custom apps and Shopify Functions. A Solutions Architect designs the multi-channel integration strategy for complex Plus deployments. An AI & Sidekick Specialist configures Shopify Magic and builds custom Sidekick actions.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Shopify specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Shopify engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: "Shopify doesn't run a single formal individual certification program the way some enterprise platforms do. Instead, we weight a live build challenge and production portfolio review heavily." } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Shopify with other systems like an ERP or 3PL?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Shopify talent regularly builds integrations using the Admin API, Storefront API, and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the integrations and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom apps, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Shopify staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated developer or architect talent working in the same store.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Shopify?', acceptedAnswer: { '@type': 'Answer', text: 'Automated product content generation, inventory sync across channels, post-purchase upsell checkout extensions, and custom B2B pricing logic.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Shopify Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A Partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new launches or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Shopify rescues or fixing a messy store?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Shopify engagements start as a rescue of a slow legacy theme, an abandoned checkout extension, or a forgotten app integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Shopify Plus', item: 'https://kovil.ai/platforms/shopify-plus' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><ShopifyPlusPlatformPage /></div>
    </>
  )
}

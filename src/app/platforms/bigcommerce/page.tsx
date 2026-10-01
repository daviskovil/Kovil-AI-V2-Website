import type { Metadata } from 'next'
import BigCommercePlatformPage from '@/src/pages/platforms/bigcommerce/BigCommercePlatformPage'

export const metadata: Metadata = {
  title: 'BigCommerce Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for BigCommerce — AI-driven catalog and pricing automation, plus vetted Stencil developers, integration engineers, and headless commerce architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/bigcommerce' },
  keywords: [
    'bigcommerce ai automation',
    'hire bigcommerce developer',
    'bigcommerce stencil developer',
    'bigcommerce headless commerce',
    'bigcommerce staff augmentation',
    'bigcommerce integration consultant',
    'bigcommerce b2b edition',
    'what is bigcommerce',
  ],
  openGraph: {
    type: 'website',
    title: 'BigCommerce Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven catalog and pricing automation, plus vetted Stencil developers, integration engineers, and headless commerce architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/bigcommerce',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigCommerce Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven catalog and pricing automation, plus vetted Stencil developers, integration engineers, and headless commerce architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'BigCommerce Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on BigCommerce and staffs vetted Stencil developers, integration engineers, and headless commerce architects — covering storefronts, B2B, and multi-channel integrations.',
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
  serviceType: 'BigCommerce Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/bigcommerce',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'BigCommerce Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Catalog & Pricing Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BigCommerce Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integration Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headless Commerce Architect Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/bigcommerce' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'BigCommerce',
  description: "BigCommerce is an open, API-first e-commerce platform built for both traditional storefronts and headless, composable commerce, with a native B2B Edition and multi-storefront support.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/bigcommerce',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'BigCommerce Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for BigCommerce — AI-driven catalog and pricing automation, plus vetted Stencil developers, integration engineers, and headless commerce architects.',
  url: 'https://kovil.ai/platforms/bigcommerce',
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
  name: 'How to Work With Kovil AI on BigCommerce',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Store', text: "Tell us what you're running, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/bigcommerce' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted BigCommerce specialists matched to your stack and architecture.', url: 'https://kovil.ai/platforms/bigcommerce' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/bigcommerce' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is BigCommerce?', acceptedAnswer: { '@type': 'Answer', text: "BigCommerce is an open, API-first e-commerce platform — what the company calls 'Open SaaS' — built for both traditional storefronts and headless/composable commerce, with a native B2B Edition and multi-storefront support." } },
    { '@type': 'Question', name: 'Does BigCommerce have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "BigCommerce ships built-in automation for abandoned cart recovery, pricing rules, and catalog workflows. Kovil AI configures those natively and builds custom API automation or headless AI features where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on BigCommerce, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a BigCommerce developer to clean up catalog and theme architecture, then layer automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a BigCommerce developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote BigCommerce talent bills $18-$36 per hour depending on role and experience, versus $40-$115+ per hour for prevailing US onsite rates for the same roles, typically 58-67% lower." } },
    { '@type': 'Question', name: 'What is the difference between a BigCommerce Developer, Integration Engineer, and Headless Commerce Architect?', acceptedAnswer: { '@type': 'Answer', text: 'A BigCommerce Developer builds and customizes Stencil themes. A Full-Stack Integration Engineer connects BigCommerce to your ERP, PIM, and marketing stack. A Headless Commerce Architect designs composable architecture for custom Next.js or React storefronts.' } },
    { '@type': 'Question', name: 'How quickly can I hire a BigCommerce specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your BigCommerce specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant BigCommerce experience where it exists, but weight a live build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate BigCommerce with other systems like an ERP or PIM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our BigCommerce talent regularly builds integrations using the REST API, GraphQL Storefront API, and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the integrations and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom apps, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with BigCommerce staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated developer or architect talent working in the same store.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of BigCommerce?', acceptedAnswer: { '@type': 'Answer', text: 'Catalog sync across channels, B2B pricing automation, headless storefront builds with AI-powered search, and custom checkout logic.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a BigCommerce Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A Partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new launches or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support BigCommerce rescues or fixing a messy store?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our BigCommerce engagements start as a rescue of a slow legacy theme, a broken headless build, or a forgotten app integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'BigCommerce', item: 'https://kovil.ai/platforms/bigcommerce' },
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
      <div className="pt-20"><BigCommercePlatformPage /></div>
    </>
  )
}

import type { Metadata } from 'next'
import KlaviyoPlatformPage from '@/src/pages/platforms/klaviyo/KlaviyoPlatformPage'

export const metadata: Metadata = {
  title: 'Klaviyo Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Klaviyo — Klaviyo AI predictive agents, plus vetted developers, e-commerce data engineers, and lifecycle strategists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/klaviyo' },
  keywords: [
    'klaviyo ai agents',
    'hire klaviyo developer',
    'klaviyo flow developer',
    'klaviyo staff augmentation',
    'klaviyo lifecycle strategist',
    'klaviyo api integration',
    'klaviyo ecommerce data engineer',
    'what is klaviyo',
  ],
  openGraph: {
    type: 'website',
    title: 'Klaviyo Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Klaviyo AI predictive agents, plus vetted developers, e-commerce data engineers, and lifecycle strategists matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/klaviyo',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klaviyo Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Klaviyo AI predictive agents, plus vetted developers, e-commerce data engineers, and lifecycle strategists matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Klaviyo Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Klaviyo AI predictive agents on Klaviyo and staffs vetted developers, e-commerce data engineers, and lifecycle strategists — covering flows, segmentation, and e-commerce integrations.',
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
  serviceType: 'Klaviyo Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/klaviyo',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Klaviyo Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klaviyo AI Agent Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klaviyo Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Data Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lifecycle/CRM Strategist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/klaviyo' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Klaviyo',
  description: 'Klaviyo is an email and SMS marketing automation platform built specifically for e-commerce, with deep native integrations into Shopify, BigCommerce, and WooCommerce, powered in part by Klaviyo AI for predictive analytics and generated content.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/klaviyo',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Klaviyo Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Klaviyo — Klaviyo AI predictive agents, plus vetted developers, e-commerce data engineers, and lifecycle strategists.',
  url: 'https://kovil.ai/platforms/klaviyo',
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
  name: 'How to Work With Kovil AI on Klaviyo',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your flows and segments are structured, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/klaviyo' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Klaviyo specialists matched to your stack and list size.', url: 'https://kovil.ai/platforms/klaviyo' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/klaviyo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Klaviyo?', acceptedAnswer: { '@type': 'Answer', text: 'Klaviyo is an email and SMS marketing automation platform built specifically for e-commerce, with deep native integrations into Shopify, BigCommerce, and WooCommerce, powering lifecycle flows and predictive segmentation for over 150,000 brands.' } },
    { '@type': 'Question', name: 'Does Klaviyo have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Klaviyo ships Klaviyo AI for predictive analytics, subject line generation, and send-time optimization. Kovil AI configures Klaviyo AI natively and builds custom API automation where it isn't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Klaviyo, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Klaviyo developer to clean up flow and segment architecture, then layer Klaviyo AI on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Klaviyo developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Klaviyo talent bills $20-$36 per hour depending on role and experience, versus $45-$115+ per hour for prevailing US onsite rates for the same roles, typically 60-68% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Developer, Data Engineer, Strategist, and AI Specialist?', acceptedAnswer: { '@type': 'Answer', text: 'A Klaviyo Developer builds custom flows and API integrations. An E-Commerce Data Engineer owns the data layer connecting Klaviyo to your store. A Lifecycle/CRM Strategist designs flow architecture and segmentation strategy. A Klaviyo AI Specialist configures predictive analytics and content generation.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Klaviyo specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Klaviyo specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant Klaviyo partner credentials where they exist, but weight a live flow build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Klaviyo with other systems like Shopify or a data warehouse?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Klaviyo talent regularly builds integrations using the Klaviyo API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the flows and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom flows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Klaviyo AI build with staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an AI build alongside dedicated developer or strategist talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Klaviyo?', acceptedAnswer: { '@type': 'Answer', text: 'Predicted-value flow branching, churn risk win-back automation, AI-generated campaign content pipelines, and custom data warehouse sync.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Klaviyo partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new flows or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Klaviyo rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Klaviyo engagements start as a rescue of stale flows, broken segments, or a Shopify sync nobody remembers configuring, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Klaviyo', item: 'https://kovil.ai/platforms/klaviyo' },
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
      <div className="pt-20"><KlaviyoPlatformPage /></div>
    </>
  )
}

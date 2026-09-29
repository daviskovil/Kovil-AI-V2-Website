import type { Metadata } from 'next'
import XeroPlatformPage from '@/src/pages/platforms/xero/XeroPlatformPage'

export const metadata: Metadata = {
  title: 'Xero Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Xero — AI-driven reconciliation automation, plus vetted Xero administrators, API developers, and ecosystem integration specialists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/xero' },
  keywords: [
    'xero ai automation',
    'hire xero developer',
    'xero api developer',
    'xero staff augmentation',
    'xero certified advisor for hire',
    'xero integration consultant',
    'xero app marketplace integration',
    'what is xero',
  ],
  openGraph: {
    type: 'website',
    title: 'Xero Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven reconciliation automation, plus vetted Xero administrators, developers, and ecosystem integration specialists matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/xero',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xero Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven reconciliation automation, plus vetted Xero administrators, developers, and ecosystem integration specialists matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Xero Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven reconciliation automation on Xero and staffs vetted administrators, API developers, and ecosystem integration specialists — covering core accounting, payroll, projects, and multi-channel integrations.',
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
  serviceType: 'Xero Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'New Zealand' },
  ],
  url: 'https://kovil.ai/platforms/xero',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Xero Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Reconciliation Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Xero Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Xero API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecosystem Integration Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/xero' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Xero',
  description: 'Xero is a cloud accounting platform combining core bookkeeping with payroll, project tracking, expense management, and inventory — one of the leading cloud accounting platforms for small businesses in the UK, Australia, and New Zealand, extended through the Xero App Marketplace.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/xero',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Xero Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Xero — AI-driven reconciliation automation, plus vetted Xero administrators, developers, and ecosystem integration specialists.',
  url: 'https://kovil.ai/platforms/xero',
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
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
  name: 'How to Work With Kovil AI on Xero',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Books', text: "Tell us how your accounts are structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/xero' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Xero specialists matched to your stack and automation needs.', url: 'https://kovil.ai/platforms/xero' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/xero' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Xero?', acceptedAnswer: { '@type': 'Answer', text: 'Xero is a cloud accounting platform combining core bookkeeping with payroll, project tracking, expense management, and inventory — one of the leading cloud accounting platforms for small businesses in the UK, Australia, and New Zealand, extended through the Xero App Marketplace.' } },
    { '@type': 'Question', name: 'Does Xero have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Xero ships built-in automation for bank reconciliation suggestions, invoice reminders, and duplicate detection. Kovil AI configures those natively and builds custom API automation where it isn't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Xero, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Xero administrator to clean up chart-of-accounts hygiene, then layer AI-driven reconciliation automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Xero developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Xero talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles, typically 56-68% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Xero Administrator, API Developer, and Ecosystem Integration Specialist?', acceptedAnswer: { '@type': 'Answer', text: 'A Xero Administrator configures the chart of accounts, tracking categories, and bank feed rules without code. A Xero API Developer builds custom integrations using the Xero API and OAuth. An Ecosystem Integration Specialist designs the multi-app integration strategy for complex, multi-channel setups.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Xero specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Xero specialists Certified Advisors?', acceptedAnswer: { '@type': 'Answer', text: 'Where relevant, we verify the Xero Certified Advisor credential. For API and integration work specifically, we weight a live build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Xero with other systems like Shopify or Stripe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Xero talent regularly builds integrations using the Xero API and custom middleware, including Shopify and Stripe.' } },
    { '@type': 'Question', name: 'Who owns the integrations and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom integrations, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Xero staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Xero?', acceptedAnswer: { '@type': 'Answer', text: 'Invoice-to-cash matching, multi-currency consolidated reporting, e-commerce order sync from Shopify and Stripe, and reconciliation automation.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Xero App Marketplace app or a bookkeeper?', acceptedAnswer: { '@type': 'Answer', text: 'A Marketplace app solves one narrow problem. A bookkeeper manages your books but typically does not build custom API integrations. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Xero rescues or fixing messy books?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Xero engagements start as a rescue of duplicate transactions, miscategorized expenses, or a forgotten integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Xero', item: 'https://kovil.ai/platforms/xero' },
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
      <div className="pt-20"><XeroPlatformPage /></div>
    </>
  )
}

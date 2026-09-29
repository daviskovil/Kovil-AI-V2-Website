import type { Metadata } from 'next'
import QuickBooksPlatformPage from '@/src/pages/platforms/quickbooks/QuickBooksPlatformPage'

export const metadata: Metadata = {
  title: 'QuickBooks Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for QuickBooks — AI-driven reconciliation automation, plus vetted QuickBooks administrators, API developers, and app ecosystem consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/quickbooks' },
  keywords: [
    'quickbooks ai automation',
    'hire quickbooks developer',
    'quickbooks online api developer',
    'quickbooks staff augmentation',
    'quickbooks proadvisor for hire',
    'quickbooks integration consultant',
    'quickbooks app store integration',
    'what is quickbooks',
  ],
  openGraph: {
    type: 'website',
    title: 'QuickBooks Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven reconciliation automation, plus vetted QuickBooks administrators, developers, and app ecosystem consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/quickbooks',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickBooks Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven reconciliation automation, plus vetted QuickBooks administrators, developers, and app ecosystem consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'QuickBooks Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven reconciliation automation on QuickBooks and staffs vetted administrators, QBO API developers, and app ecosystem consultants — covering core accounting, payroll, payments, and multi-channel integrations.',
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
  serviceType: 'QuickBooks Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/quickbooks',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'QuickBooks Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Reconciliation Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'QuickBooks Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'QBO API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Ecosystem Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/quickbooks' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'QuickBooks',
  description: 'QuickBooks, made by Intuit, is the most widely used small business accounting platform in the United States, combining core bookkeeping with payroll, payments, time tracking, and inventory, extended through the QuickBooks App Store.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/quickbooks',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'QuickBooks Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for QuickBooks — AI-driven reconciliation automation, plus vetted QuickBooks administrators, developers, and app ecosystem consultants.',
  url: 'https://kovil.ai/platforms/quickbooks',
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
  name: 'How to Work With Kovil AI on QuickBooks',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Books', text: "Tell us how your accounts are structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/quickbooks' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted QuickBooks specialists matched to your stack and automation needs.', url: 'https://kovil.ai/platforms/quickbooks' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/quickbooks' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is QuickBooks?', acceptedAnswer: { '@type': 'Answer', text: 'QuickBooks, made by Intuit, is the most widely used small business accounting platform in the United States, combining core bookkeeping with payroll, payments, time tracking, and inventory, extended through the QuickBooks App Store.' } },
    { '@type': 'Question', name: 'Does QuickBooks have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "QuickBooks ships Intuit Assist for transaction categorization, cash flow insights, and invoice reminders. Kovil AI configures Intuit Assist natively and builds custom API automation where it isn't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on QuickBooks, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a QuickBooks administrator to clean up chart-of-accounts hygiene, then layer AI-driven reconciliation automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a QuickBooks developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote QuickBooks talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles, typically 56-68% lower." } },
    { '@type': 'Question', name: 'What is the difference between a QuickBooks Administrator, API Developer, and App Ecosystem Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A QuickBooks Administrator configures the chart of accounts and bank feed rules without code. A QBO API Developer builds custom integrations using the QuickBooks Online API. An App Ecosystem Consultant designs the multi-app integration strategy for complex, multi-channel setups.' } },
    { '@type': 'Question', name: 'How quickly can I hire a QuickBooks specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your QuickBooks specialists certified ProAdvisors?', acceptedAnswer: { '@type': 'Answer', text: 'Where relevant, we verify the QuickBooks ProAdvisor credential. For API and integration work specifically, we weight a live build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate QuickBooks with other systems like Shopify or Stripe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our QuickBooks talent regularly builds integrations using the QuickBooks Online API and custom middleware, including Shopify and Stripe.' } },
    { '@type': 'Question', name: 'Who owns the integrations and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom integrations, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with QuickBooks staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of QuickBooks?', acceptedAnswer: { '@type': 'Answer', text: 'Invoice-to-cash matching, e-commerce order sync from Shopify and Stripe, custom expense categorization rules, and reconciliation automation.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a QuickBooks App Store app or a bookkeeper?', acceptedAnswer: { '@type': 'Answer', text: 'An App Store app solves one narrow problem. A bookkeeper manages your books but typically does not build custom API integrations. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support QuickBooks rescues or fixing messy books?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our QuickBooks engagements start as a rescue of duplicate transactions, miscategorized expenses, or a forgotten integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'QuickBooks', item: 'https://kovil.ai/platforms/quickbooks' },
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
      <div className="pt-20"><QuickBooksPlatformPage /></div>
    </>
  )
}

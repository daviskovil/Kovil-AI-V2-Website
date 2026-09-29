import type { Metadata } from 'next'
import ZuoraPlatformPage from '@/src/pages/platforms/zuora/ZuoraPlatformPage'

export const metadata: Metadata = {
  title: 'Zuora Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Zuora — AI-driven billing automation, plus vetted Zuora administrators, developers, and revenue recognition consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/zuora' },
  keywords: [
    'zuora ai automation',
    'hire zuora developer',
    'hire zuora administrator',
    'zuora staff augmentation',
    'zuora revenue recognition consultant',
    'zuora billing integration',
    'zuora systems integrator alternative',
    'what is zuora',
  ],
  openGraph: {
    type: 'website',
    title: 'Zuora Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven billing automation, plus vetted Zuora administrators, developers, and revenue recognition consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/zuora',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuora Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven billing automation, plus vetted Zuora administrators, developers, and revenue recognition consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Zuora Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven billing automation on Zuora and staffs vetted Zuora administrators, developers, and revenue recognition consultants — covering Zuora Billing, Revenue, CPQ, and Collections.',
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
  serviceType: 'Zuora Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/zuora',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Zuora Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Billing Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zuora Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zuora Developer Staffing (Billing Integration)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Recognition Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/zuora' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Zuora',
  description: 'Zuora is a subscription management and billing platform built around Zuora Billing, Zuora Revenue (automated ASC 606/IFRS 15 revenue recognition), Zuora CPQ, and Zuora Collections, all sharing one data model.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/zuora',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Zuora Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Zuora — AI-driven billing automation, plus vetted Zuora administrators, developers, and revenue recognition consultants.',
  url: 'https://kovil.ai/platforms/zuora',
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
  name: 'How to Work With Kovil AI on Zuora',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Billing Model', text: "Tell us which Zuora products you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/zuora' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Zuora specialists matched to your billing model and stack.', url: 'https://kovil.ai/platforms/zuora' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/zuora' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Zuora?', acceptedAnswer: { '@type': 'Answer', text: 'Zuora is a subscription management and billing platform built around Zuora Billing, Zuora Revenue (automated ASC 606/IFRS 15 revenue recognition), Zuora CPQ, and Zuora Collections, all sharing one data model.' } },
    { '@type': 'Question', name: 'Does Zuora have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Zuora ships built-in analytics for churn prediction and payment retry optimization. Kovil AI configures those natively and builds custom billing workflow automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Zuora, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Zuora administrator to clean up rate plan hygiene, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Zuora developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Zuora talent bills $18-$40 per hour depending on role and experience, versus $45-$150+ per hour for prevailing US onsite rates for the same roles, typically 63-71% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Zuora Administrator, Developer, and Revenue Recognition Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Zuora Administrator configures rate plans and workflows without code. A Zuora Developer builds custom integrations using the Zuora REST API. A Revenue Recognition Consultant designs the billing model and ASC 606/IFRS 15 compliance rules.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Zuora specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Zuora engineers have verified production experience?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify production experience directly, with particular weight on ASC 606/IFRS 15 revenue recognition literacy, alongside a live build challenge.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Zuora with other systems like Salesforce or NetSuite?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Zuora talent regularly builds integrations using the Zuora REST API and custom middleware, including Salesforce and NetSuite.' } },
    { '@type': 'Question', name: 'Who owns the workflows, integrations, and configurations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom workflows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Zuora staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What Zuora products does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Zuora Billing, Zuora Revenue, Zuora CPQ, and Zuora Collections, plus integrations including Salesforce and NetSuite.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Zuora systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new products or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Zuora rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Zuora engagements start as a rescue of a deployment with messy rate plan structures or a revenue recognition process that never worked, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Zuora', item: 'https://kovil.ai/platforms/zuora' },
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
      <div className="pt-20"><ZuoraPlatformPage /></div>
    </>
  )
}

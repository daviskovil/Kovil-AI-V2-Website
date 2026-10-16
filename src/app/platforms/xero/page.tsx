import type { Metadata } from 'next'
import XeroPlatformPage from '@/src/pages/platforms/xero/XeroPlatformPage'

export const metadata: Metadata = {
  title: 'Xero AI Agents & Developers for Hire',
  description: 'Hire vetted Xero specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
    title: 'Xero AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Xero specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/xero',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xero AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Xero specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
  dateModified: '2026-10-16',
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
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Xero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xero is a cloud accounting platform used widely by small and mid-sized businesses and by accounting practices, particularly in the UK, Australia, and New Zealand. It covers bookkeeping, invoicing, bank reconciliation, payroll in supported countries, projects, and an app marketplace connected through its APIs."
      }
    },
    {
      "@type": "Question",
      "name": "Does Xero have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xero includes built-in automation and AI-driven suggestions for tasks like bank reconciliation, invoice reminders, and duplicate detection. A custom build makes sense when you need logic across systems, such as mining your own rules, coding bills from email, or running an agent across many organisations."
      }
    },
    {
      "@type": "Question",
      "name": "What are tracking categories, and why do they matter for automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tracking categories let you tag transactions with dimensions such as department or project, and Xero allows two of them. Reports and any automation that reads them are only as reliable as how consistently they are applied, so we audit them before building on top."
      }
    },
    {
      "@type": "Question",
      "name": "Can you clean up and improve our Xero bank rules?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We review existing rules for overlap and order, mine your reconciled history for patterns worth turning into rules, and retire the ones causing wrong categories. The aim is more transactions reconciling in one click, with fewer silent errors."
      }
    },
    {
      "@type": "Question",
      "name": "How do Xero integrations work when we have several organisations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Xero connections are made per organisation, and each one has its own authorization. We build integrations that track each connection, refresh tokens correctly, and handle revoked access, so one failure does not silently stop the whole group."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Xero developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Xero talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles — typically 56-68% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Xero Administrator, API Developer, and Ecosystem Integration Specialist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Administrator owns the chart of accounts, tracking categories, and bank rules. An API Developer writes code against the Xero APIs and webhooks. An Ecosystem Integration Specialist decides which apps to connect and how data should flow between them."
      }
    },
    {
      "@type": "Question",
      "name": "Does a Xero Certified Advisor credential matter for this work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Certified Advisor credential shows knowledge of Xero for accounting work, and we verify it where it applies. For integration and AI work it is not enough on its own, so we also run a live build and review shipped projects."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build an agent that works across many client organisations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. For practices, we build a single view across all Xero organisations covering overdue items, unreconciled transactions, and unusual movements, with per-client permissions respected. It is a practice-level tool and sends summaries to a person to act on."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle multi-currency in Xero automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We treat exchange rates and revaluation as first-class concerns. Automation checks which rate was used, flags unusual gains and losses before close, and never posts foreign-currency entries without a rate source you have approved."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Xero specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted administrator, developer, or specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the integrations and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom integrations, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Xero rescues or fixing messy books?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve conflicting bank rules, bloated tracking categories, duplicated bills, or an integration that stopped syncing unnoticed. We audit first, agree a cleanup plan, and fix in stages so reporting stays usable throughout."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    }
  ]
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

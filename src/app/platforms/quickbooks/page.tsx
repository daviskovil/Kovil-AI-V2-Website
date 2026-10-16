import type { Metadata } from 'next'
import QuickBooksPlatformPage from '@/src/pages/platforms/quickbooks/QuickBooksPlatformPage'

export const metadata: Metadata = {
  title: 'QuickBooks AI Agents & Developers for Hire',
  description: 'Hire vetted QuickBooks specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
    title: 'QuickBooks AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted QuickBooks specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/quickbooks',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickBooks AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted QuickBooks specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
  name: 'How to Work With Kovil AI on QuickBooks',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Books', text: "Tell us how your accounts are structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/quickbooks' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted QuickBooks specialists matched to your stack and automation needs.', url: 'https://kovil.ai/platforms/quickbooks' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/quickbooks' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is QuickBooks Online, and how is it different from QuickBooks Desktop for automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QuickBooks Online (QBO) is Intuit's cloud accounting product, with a REST API, OAuth 2.0, and webhooks, which is what modern integrations and AI automation are built on. QuickBooks Desktop is a separate installed product with a different integration model, so a Desktop file usually needs a migration or a bridge before AI automation is practical. We work primarily on QBO."
      }
    },
    {
      "@type": "Question",
      "name": "Does QuickBooks have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QuickBooks includes Intuit Assist, Intuit's built-in assistant for tasks such as categorization suggestions and insights, and it works within the product's own limits. A custom build makes sense when you need logic that spans systems, such as matching Stripe payouts, applying your own approval rules, or running LLM steps against your chart of accounts."
      }
    },
    {
      "@type": "Question",
      "name": "What can an LLM safely automate in QuickBooks, and what should stay with a human?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Good fits are suggesting categories, drafting invoice reminders, summarizing variances, and flagging duplicates, all with a confidence threshold and human approval. We keep a person in the loop for anything that posts to tax-sensitive accounts, touches closed periods, or moves money, and every automated action is logged so it can be reviewed and reversed."
      }
    },
    {
      "@type": "Question",
      "name": "Can you reconcile Stripe or Shopify payouts into QuickBooks correctly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Payouts arrive as a net deposit after fees, refunds, and adjustments, so recording them as plain income breaks reports. We rebuild the gross sale, fee, refund, and payout entries so each bank deposit matches the orders behind it."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Undeposited Funds problem, and can it be fixed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Undeposited Funds is a holding account for payments received but not yet deposited. When payments are never grouped into deposits, it fills with unmatched items and the bank reconciliation never ties out. We clear the backlog, set up deposit matching, and put a rule in place so it does not rebuild."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a QuickBooks developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote QuickBooks talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles — typically 56-68% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a QuickBooks Administrator, API Developer, and App Ecosystem Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Administrator owns the chart of accounts, bank rules, and reports inside the product. An API Developer writes code against the QuickBooks Online API and webhooks. An App Ecosystem Consultant decides which apps and integrations to use and how data should flow between them."
      }
    },
    {
      "@type": "Question",
      "name": "Does a QuickBooks ProAdvisor certification matter for this work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ProAdvisor certification shows a baseline in QuickBooks bookkeeping, and we verify it where it applies. For integration and AI work it is not enough on its own, so we also run a live build and review of shipped integrations."
      }
    },
    {
      "@type": "Question",
      "name": "How do API rate limits and token expiry affect QuickBooks integrations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The QuickBooks Online API limits how fast an app can call a given company, and OAuth refresh tokens must be renewed or they expire. An integration that ignores either one works in testing and then stops quietly in production. We build retries with backoff, token refresh, and alerts so failures are visible."
      }
    },
    {
      "@type": "Question",
      "name": "Should we stay on QuickBooks or move to an ERP like NetSuite or Acumatica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QuickBooks fits many growing businesses. Consider an ERP when you need multi-entity consolidation, complex inventory or manufacturing, or approvals and controls QuickBooks cannot enforce. We can assess that honestly, and staff NetSuite or Acumatica work if a move makes sense."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a QuickBooks specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted administrator, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
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
      "name": "Do you support QuickBooks rescues or fixing messy books?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve duplicate vendors and customers, a bloated chart of accounts, an Undeposited Funds backlog, or an old integration nobody maintains. We audit first, agree a cleanup plan, and fix in stages so reporting stays usable throughout."
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

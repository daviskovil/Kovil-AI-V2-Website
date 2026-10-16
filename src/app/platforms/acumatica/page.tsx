import type { Metadata } from 'next'
import AcumaticaPlatformPage from '@/src/pages/platforms/acumatica/AcumaticaPlatformPage'

export const metadata: Metadata = {
  title: 'Acumatica AI Agents & Developers for Hire',
  description: 'Hire vetted Acumatica specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  alternates: { canonical: 'https://kovil.ai/platforms/acumatica' },
  keywords: [
    'acumatica ai automation',
    'hire acumatica developer',
    'hire acumatica administrator',
    'acumatica staff augmentation',
    'acumatica net developer',
    'acumatica erp consultant',
    'acumatica var alternative',
    'what is acumatica',
  ],
  openGraph: {
    type: 'website',
    title: 'Acumatica AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Acumatica specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/acumatica',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acumatica AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Acumatica specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Acumatica Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Acumatica and staffs vetted Acumatica administrators, .NET developers, and ERP consultants — covering Financial Management, Distribution, Manufacturing, Project Accounting, and Field Service.',
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
  serviceType: 'Acumatica Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/acumatica',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Acumatica Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Build (.NET/Native AI)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acumatica Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '.NET/Acumatica Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/acumatica' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Acumatica',
  description: 'Acumatica is a cloud ERP platform built around a unified Financial Management core, extended by Distribution Management, Manufacturing Management, Project Accounting, CRM, and Field Service Management, with consumption-based licensing rather than per-user fees.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/acumatica',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Acumatica Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Acumatica — AI-driven automation, plus vetted Acumatica administrators, developers, and ERP consultants.',
  url: 'https://kovil.ai/platforms/acumatica',
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
  name: 'How to Work With Kovil AI on Acumatica',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which Acumatica modules you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/acumatica' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Acumatica specialists matched to your modules and stack.', url: 'https://kovil.ai/platforms/acumatica' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/acumatica' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Acumatica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acumatica is a cloud ERP covering financials, distribution, manufacturing, project accounting, and more, with a customization platform and an Open API. It is known for consumption-based licensing, which prices by computing resources rather than by user count."
      }
    },
    {
      "@type": "Question",
      "name": "Does Acumatica have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acumatica includes built-in AI capabilities such as AI-assisted document recognition. A custom build makes sense when you need logic across systems, such as matching invoices to purchase orders, triggering agents from Business Events, or running LLM steps against your data."
      }
    },
    {
      "@type": "Question",
      "name": "What does consumption-based licensing mean for integrations and AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acumatica licenses by computing resources rather than named users, so broad access is affordable but heavy integration and reporting load uses capacity. We plan integration volume and scheduling with that in mind instead of discovering it later."
      }
    },
    {
      "@type": "Question",
      "name": "Which Acumatica API should we use for an integration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contract-based REST endpoints are versioned and suited to most integrations. Generic inquiries suit read-heavy reporting, and screen-based access is a last resort because it can break when screens change. We choose per use case."
      }
    },
    {
      "@type": "Question",
      "name": "How do customizations affect Acumatica upgrades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acumatica ships releases on a regular cadence, and customizations that rely on unsupported patterns can break them. We build and refactor customization projects to supported patterns and test in a separate tenant before publishing."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire an Acumatica developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Acumatica talent bills $18-$38 per hour depending on role and experience, versus $40-$140+ per hour for prevailing US onsite rates for the same roles — typically 60-70% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an Acumatica Administrator, Developer, and ERP Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Administrator owns inquiries, reports, workflows, and security roles. A .NET/Acumatica Developer builds customization projects and integrations. An ERP Consultant configures financials, distribution, and multi-entity structure and guides process design."
      }
    },
    {
      "@type": "Question",
      "name": "What are Business Events, and how can an AI agent use them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business Events fire when records meet conditions, such as stock below a threshold. We use them to trigger an agent that drafts a proposed action, such as a purchase order, which a person approves before anything posts."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Acumatica with Shopify, Salesforce, or warehouse tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use the contract-based Open API with a declared source of truth for each field, so order, inventory, and customer data stay aligned without conflicting writes."
      }
    },
    {
      "@type": "Question",
      "name": "Is there such a thing as a certified Acumatica specialist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acumatica offers certifications and we verify them where they exist. For development and integration work we also weight a live design exercise and a review of shipped work, since credentials alone do not test judgment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire an Acumatica specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted administrator, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the customizations, automations, and integrations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom screens, business events, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Acumatica rescues or fixing a failing implementation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve heavy customizations that block upgrades, fragile integrations, weak multi-entity design, or stalled go-lives. We audit first, then stabilize in stages so operations are not disrupted."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as new modules or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
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
    { '@type': 'ListItem', position: 3, name: 'Acumatica', item: 'https://kovil.ai/platforms/acumatica' },
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
      <div className="pt-20"><AcumaticaPlatformPage /></div>
    </>
  )
}

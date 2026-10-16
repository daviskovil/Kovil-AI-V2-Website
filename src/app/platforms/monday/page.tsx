import type { Metadata } from 'next'
import MondayPlatformPage from '@/src/pages/platforms/monday/MondayPlatformPage'

export const metadata: Metadata = {
  title: 'Monday.com AI Agents & Developers for Hire',
  description: 'Hire vetted Monday.com specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  alternates: { canonical: 'https://kovil.ai/platforms/monday' },
  keywords: [
    'monday.com ai automation',
    'hire monday.com developer',
    'monday.com solutions engineer',
    'monday.com staff augmentation',
    'monday.com api integration',
    'monday.com work os consultant',
    'monday.com automation builder',
    'what is monday.com',
  ],
  openGraph: {
    type: 'website',
    title: 'Monday.com AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Monday.com specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/monday',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monday.com AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Monday.com specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'monday.com Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on monday.com and staffs vetted solutions engineers, developers, and Work OS consultants — covering boards, automations, CRM, and dashboards.',
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
  serviceType: 'monday.com Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/monday',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'monday.com Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflow Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solutions Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation/API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work OS Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/monday' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'monday.com',
  description: 'monday.com is a Work OS — a flexible, no-code platform for building custom boards, automations, and workflow apps across marketing, operations, dev, and sales.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/monday',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'monday.com Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for monday.com — AI-driven workflow automation, plus vetted solutions engineers, developers, and Work OS consultants.',
  url: 'https://kovil.ai/platforms/monday',
  datePublished: '2026-10-02',
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
  name: 'How to Work With Kovil AI on monday.com',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your boards and workflows are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/monday' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted monday.com specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/monday' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/monday' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is monday.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "monday.com is a work management platform built on boards of items with typed columns, used for projects, requests, sales, and software development. It adds automations, dashboards, forms, and a GraphQL API and apps framework for custom work."
      }
    },
    {
      "@type": "Question",
      "name": "Does monday.com have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "monday.com includes built-in AI for tasks such as summarizing, categorizing, and extracting information in columns. A custom build makes sense when you need an LLM working with data from other systems or logic the built-in blocks cannot express."
      }
    },
    {
      "@type": "Question",
      "name": "How should we structure boards so dashboards and automation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use typed columns such as status, people, and dropdowns instead of free text, keep structure consistent across boards, and limit layers of mirrored data. We design that structure first, since dashboards and AI depend on it."
      }
    },
    {
      "@type": "Question",
      "name": "What are monday.com automation limits, and how do we work around them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation actions are limited per month by plan, so heavy recipe use can run out. We consolidate overlapping recipes and, where it makes sense, move high-volume logic to API-driven workflows that are easier to monitor."
      }
    },
    {
      "@type": "Question",
      "name": "How does the monday.com GraphQL API limit what we can build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The API limits requests by query complexity rather than just count, so large or deeply nested queries can be throttled. We design queries and sync schedules around those limits and add retries so integrations keep working at scale."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a monday.com specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote monday.com talent bills $20-$30 per hour depending on role and experience, versus $45-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-66% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Solutions Engineer, Developer, and Work OS Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Solutions Engineer designs boards, columns, and recipes. An Automation/API Developer writes code against the GraphQL API and apps framework. A Work OS Consultant plans multi-team rollouts, templates, and governance."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build on monday CRM or monday service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. These editions run on the same boards and automations, so we configure pipelines, intake, and automation, and connect them to email, calendar, and your other systems."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI connect monday.com to Salesforce, Jira, or Slack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use native integrations where they are enough and the API where they are not, with deduplicated events so syncs do not create conflicting records."
      }
    },
    {
      "@type": "Question",
      "name": "Are your monday.com specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant monday.com experience and credentials where they exist, but weight a live board-design exercise and a review of shipped work at least as heavily, since credentials alone do not test judgment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a monday.com specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted engineer, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the boards and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom boards, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support monday.com rescues or fixing a messy account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve free-text columns, runaway recipes, redundant boards, or dashboards that disagree. We audit first, then standardize in stages so teams are not disrupted."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
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
    { '@type': 'ListItem', position: 3, name: 'monday.com', item: 'https://kovil.ai/platforms/monday' },
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
      <div className="pt-20"><MondayPlatformPage /></div>
    </>
  )
}

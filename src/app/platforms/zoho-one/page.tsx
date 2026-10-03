import type { Metadata } from 'next'
import ZohoOnePlatformPage from '@/src/pages/platforms/zoho-one/ZohoOnePlatformPage'

export const metadata: Metadata = {
  title: "Zoho One Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Zoho One — Zia and custom AI agent builds, plus vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/zoho-one' },
  keywords: ["zoho one ai agents","hire zoho one developer","zoho one staff augmentation","zoho one consultant","zoho deluge developer","zoho crm admin for hire","zoho zia implementation","what is zoho one"],
  openGraph: {
    type: 'website',
    title: "Zoho One Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Zia and custom AI agent builds, plus vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/zoho-one',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zoho One Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Zia and custom AI agent builds, plus vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Zoho One Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers Zia and custom AI agent builds on Zoho One and staffs vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists.",
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
  serviceType: "Zoho One Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/zoho-one',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Zoho One Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Agent Build on Zoho One" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Zoho Developers (Deluge) Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Zoho CRM Admins Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Zoho Solutions Architects Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Zia AI Specialists Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/zoho-one' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Zoho One",
  description: "Zoho One is an all-in-one business software suite from Zoho that bundles dozens of integrated applications — including CRM, finance, HR, marketing, support, and low-code tools — under one login and shared data model.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/zoho-one',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Zoho One Platform Partner — AI Agents & Specialist Talent",
  description: "Zia and custom AI agent builds, plus vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists matched in 48 hours. 2-week risk-free trial.",
  url: 'https://kovil.ai/platforms/zoho-one',
  datePublished: '2026-10-03',
  dateModified: '2026-10-03',
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
  name: "How to Work With Kovil AI on Zoho One",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Account", text: "Tell us how you use Zoho One, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/zoho-one' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Zoho One specialists matched to your stack and scale.", url: 'https://kovil.ai/platforms/zoho-one' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/zoho-one' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Zoho One?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoho One is an all-in-one business software suite from Zoho that bundles dozens of integrated applications — including CRM, finance, HR, marketing, support, and low-code tools — under one login and shared data model."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zoho One have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoho ships its own AI assistant, Zia, across the suite for predictions, summaries, and automation. Kovil AI configures Zia natively and builds custom Deluge scripts, API integrations, and LLM-powered workflows where it isn't enough."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Zoho One, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire a Zoho CRM admin or Deluge developer to clean up data and automation first, then add Zia and custom AI agents on top of a suite that is already well-configured."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Zoho One developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Zoho One talent bills $18-$42 per hour depending on role and experience, versus $45-$145+ per hour for prevailing US onsite rates for the same roles — typically 65-70% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Zoho Developer, CRM Admin, and Solutions Architect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Zoho Developer writes Deluge scripts, custom functions, and API integrations. A Zoho CRM Admin owns day-to-day configuration, fields, workflows, and user permissions. A Solutions Architect designs how the suite's apps share data and which processes belong where."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Zoho One specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Zoho One specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Zoho One with non-Zoho systems like Shopify, QuickBooks, or Salesforce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Zoho talent regularly builds integrations using Zoho Flow, the Zoho APIs, and custom Deluge to connect the suite with Shopify, QuickBooks, Salesforce, and whatever else your business runs on."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the work built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an AI build with Zoho One staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same account."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Zoho One?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zoho CRM customization and automation, Creator custom apps, Flow integrations between Zoho and external tools, Books and Inventory configuration, and Zia-powered or LLM-powered workflows across the suite."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Zoho One partner agency or freelancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Zoho rescues or fixing a messy Zoho setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Zoho engagements start as a rescue — apps adopted one at a time with duplicated data, Deluge scripts nobody understands, or a Zoho One rollout that never reached full adoption. We audit it, then rebuild in milestone-gated phases."
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
    { '@type': 'ListItem', position: 3, name: "Zoho One", item: 'https://kovil.ai/platforms/zoho-one' },
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
      <div className="pt-20"><ZohoOnePlatformPage /></div>
    </>
  )
}

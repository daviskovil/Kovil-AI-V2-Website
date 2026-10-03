import type { Metadata } from 'next'
import ZendeskPlatformPage from '@/src/pages/platforms/zendesk/ZendeskPlatformPage'

export const metadata: Metadata = {
  title: "Zendesk Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Zendesk — AI support agent builds, plus vetted Zendesk admins, workflow developers, and operations consultants matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/zendesk' },
  keywords: ["zendesk ai agents","hire zendesk developer","zendesk admin for hire","zendesk staff augmentation","zendesk integration developer","zendesk consultant","zendesk workflow automation","what is zendesk"],
  openGraph: {
    type: 'website',
    title: "Zendesk Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI support agent builds, plus vetted Zendesk admins, workflow developers, and operations consultants matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/zendesk',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zendesk Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI support agent builds, plus vetted Zendesk admins, workflow developers, and operations consultants matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Zendesk Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers AI support agents on Zendesk and staffs vetted Zendesk admins, workflow developers, and support operations consultants — covering Support, Guide, Messaging, and custom integrations.",
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
  serviceType: "Zendesk Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/zendesk',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Zendesk Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Support Agent Build" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Zendesk Admin Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Support Workflow Developer Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Support Operations Consultant Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/zendesk' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Zendesk",
  description: "Zendesk is a customer service platform that combines ticketing, a help center, messaging and voice channels, and analytics in one agent workspace, extended with AI agents that resolve routine requests automatically.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/zendesk',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Zendesk Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Zendesk — AI support agent builds, plus vetted admins, workflow developers, and operations consultants.",
  url: 'https://kovil.ai/platforms/zendesk',
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
  name: "How to Work With Kovil AI on Zendesk",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Instance", text: "Tell us which Zendesk products you run, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/zendesk' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Zendesk specialists matched to your stack and ticket volume.", url: 'https://kovil.ai/platforms/zendesk' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/zendesk' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Zendesk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zendesk is a customer service platform that combines ticketing, a help center, messaging and voice channels, and analytics in one agent workspace, increasingly extended with AI agents that resolve routine requests automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Does Zendesk have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zendesk ships built-in AI agents and agent-assist features. Kovil AI configures those natively and builds custom LLM and API integrations where they aren't enough, such as pulling data from your order or billing systems."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Zendesk, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire an admin or consultant to clean up triggers and knowledge first, then add AI agents on top of a setup that is already well-structured."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Zendesk specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Zendesk talent bills $18-$32 per hour depending on role and experience, versus $40-$110+ per hour for prevailing US onsite rates for the same roles — typically 60-69% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Zendesk Admin, Workflow Developer, and Operations Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Zendesk Admin owns day-to-day configuration like triggers, macros, and permissions. A Support Workflow Developer builds custom apps and API integrations. A Support Operations Consultant redesigns routing, knowledge strategy, and support processes."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Zendesk specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted admin, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Zendesk specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant platform experience and certifications where they exist, but weight a live configuration challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Zendesk with other systems like Salesforce, Shopify, or Jira?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Zendesk talent regularly builds integrations using the Zendesk API, apps framework, and webhooks to connect support with Salesforce, Shopify, Jira, and whatever else your business runs on."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the apps and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom apps, triggers, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an AI build with Zendesk staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated admin or developer talent working in the same instance."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Zendesk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI agent configurations for routine requests, rebuilt routing and trigger logic, knowledge base restructuring, and custom integrations that surface order and account data inside tickets."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Zendesk partner agency or freelancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as channels or volume grow, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Zendesk rescues or fixing a messy instance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Zendesk engagements start as a rescue — conflicting triggers, duplicated fields, and macros nobody understands. We audit it, then stabilize and rebuild in milestone-gated phases."
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
    { '@type': 'ListItem', position: 3, name: "Zendesk", item: 'https://kovil.ai/platforms/zendesk' },
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
      <div className="pt-20"><ZendeskPlatformPage /></div>
    </>
  )
}

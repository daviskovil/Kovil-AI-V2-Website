import type { Metadata } from 'next'
import ServiceNowPlatformPage from '@/src/pages/platforms/servicenow/ServiceNowPlatformPage'

export const metadata: Metadata = {
  title: "ServiceNow Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for ServiceNow — Now Assist and AI agent builds, plus vetted ServiceNow developers, ITSM consultants, and architects matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/servicenow' },
  keywords: ["servicenow ai agents","hire servicenow developer","servicenow itsm consultant","servicenow staff augmentation","now assist implementation","servicenow architect","servicenow virtual agent","what is servicenow"],
  openGraph: {
    type: 'website',
    title: "ServiceNow Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Now Assist and AI agent builds, plus vetted ServiceNow developers, ITSM consultants, and architects matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/servicenow',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ServiceNow Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Now Assist and AI agent builds, plus vetted ServiceNow developers, ITSM consultants, and architects matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "ServiceNow Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers Now Assist and AI agent builds on ServiceNow and staffs vetted developers, ITSM consultants, architects, and Now Assist specialists — covering ITSM, ITOM, HR Service Delivery, and the App Engine.",
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
  serviceType: "ServiceNow Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/servicenow',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "ServiceNow Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Now Assist & AI Agent Build" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "ServiceNow Developer Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "ITSM Consultant Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "ServiceNow Architect Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Now Assist AI Specialist Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/servicenow' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "ServiceNow",
  description: "ServiceNow is an enterprise cloud platform, the Now Platform, that automates workflows across IT, HR, customer service, and security on a single data model, with Now Assist providing built-in generative AI.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/servicenow',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "ServiceNow Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for ServiceNow — Now Assist and AI agent builds, plus vetted developers, ITSM consultants, and architects.",
  url: 'https://kovil.ai/platforms/servicenow',
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
  name: "How to Work With Kovil AI on ServiceNow",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Instance", text: "Tell us which ServiceNow modules you run, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/servicenow' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted ServiceNow specialists matched to your modules and stack.", url: 'https://kovil.ai/platforms/servicenow' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/servicenow' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ServiceNow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ServiceNow is an enterprise cloud platform, the Now Platform, that automates workflows across IT, HR, customer service, and security on a single data model. It is best known for IT Service Management (ITSM) and is increasingly used as the system of action for enterprise AI."
      }
    },
    {
      "@type": "Question",
      "name": "What is Now Assist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Now Assist is ServiceNow's generative AI capability, built into the Now Platform to summarize records, draft resolutions, power conversational experiences, and support agentic workflows. Kovil AI configures Now Assist natively and builds custom LLM integrations where it isn't enough."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on ServiceNow, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire an ITSM consultant or developer to clean up processes and data first, then add Now Assist and custom agents on top of workflows that are already well-defined."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a ServiceNow developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote ServiceNow talent bills $24-$45 per hour depending on role and experience, versus $70-$180+ per hour for prevailing US onsite rates for the same roles — typically 69-73% lower, at the same certification bar."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a ServiceNow Developer, ITSM Consultant, and Architect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Developer builds applications, scripts, and integrations. An ITSM Consultant designs and configures service management processes to match how your teams work. An Architect designs instance strategy, data model, and integration approach for enterprise programs."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a ServiceNow specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted developer, consultant, or architect within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Do your ServiceNow engineers hold official certifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We verify ServiceNow Certified System Administrator, Certified Application Developer, and Certified Implementation Specialist credentials directly as part of vetting, alongside a live technical assessment, since certification alone does not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate ServiceNow with other systems like Salesforce, Workday, or Jira?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our ServiceNow talent regularly builds integrations using IntegrationHub and REST APIs to connect ServiceNow with Salesforce, Workday, Jira, and whatever else your business runs on."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the applications and workflows built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom applications, flows, scripts, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an AI build with ServiceNow staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated developer or consultant talent working in the same instance."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on ServiceNow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Now Assist configurations, Virtual Agent improvements, custom scoped applications, CMDB data-quality remediation, and cross-platform integrations."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a traditional ServiceNow partner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional partners typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as new modules roll out, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support ServiceNow rescues or fixing a heavily customized instance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A significant share of our ServiceNow engagements start as a rescue — an instance with years of customization debt, a failed upgrade, or an ITSM rollout that never gained adoption. We audit it, then stabilize and rebuild in milestone-gated phases."
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
    { '@type': 'ListItem', position: 3, name: "ServiceNow", item: 'https://kovil.ai/platforms/servicenow' },
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
      <div className="pt-20"><ServiceNowPlatformPage /></div>
    </>
  )
}

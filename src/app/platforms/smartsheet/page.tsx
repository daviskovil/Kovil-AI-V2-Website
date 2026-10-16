import type { Metadata } from 'next'
import SmartsheetPlatformPage from '@/src/pages/platforms/smartsheet/SmartsheetPlatformPage'

export const metadata: Metadata = {
  title: 'Smartsheet AI Agents & Developers for Hire',
  description: 'Hire vetted Smartsheet specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  alternates: { canonical: 'https://kovil.ai/platforms/smartsheet' },
  keywords: [
    'smartsheet ai automation',
    'hire smartsheet developer',
    'smartsheet solutions architect',
    'smartsheet staff augmentation',
    'smartsheet control center',
    'smartsheet api integration',
    'smartsheet work management consultant',
    'what is smartsheet',
  ],
  openGraph: {
    type: 'website',
    title: 'Smartsheet AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Smartsheet specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/smartsheet',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smartsheet AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Smartsheet specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smartsheet Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Smartsheet and staffs vetted solutions architects, developers, and work management consultants — covering sheets, automation, Control Center, and dashboards.',
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
  serviceType: 'Smartsheet Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/smartsheet',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Smartsheet Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Resource Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smartsheet Solutions Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation/API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Management Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/smartsheet' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Smartsheet',
  description: 'Smartsheet is a collaborative work management platform with a spreadsheet-native grid interface, combining sheet editing with automation workflows, resource management, and Control Center for standardized project rollouts.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/smartsheet',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Smartsheet Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Smartsheet — AI-driven resource automation, plus vetted solutions architects, developers, and work management consultants.',
  url: 'https://kovil.ai/platforms/smartsheet',
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
  name: 'How to Work With Kovil AI on Smartsheet',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your sheets and workflows are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/smartsheet' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Smartsheet specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/smartsheet' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/smartsheet' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Smartsheet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smartsheet is a work management platform with a spreadsheet-style grid, used for project tracking, resource planning, and process automation. It adds dashboards, reports, WorkApps, Control Center for governed project provisioning, and a REST API with Bridge and Data Shuttle for integration."
      }
    },
    {
      "@type": "Question",
      "name": "Does Smartsheet have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smartsheet includes built-in AI features such as formula assistance and text transformation. A custom build makes sense when you need an LLM working with data from other systems or logic the built-in features cannot express."
      }
    },
    {
      "@type": "Question",
      "name": "When do we need Control Center, and when is it overkill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Control Center pays off when many projects must follow the same structure and roll up into consistent reporting. For a few projects, disciplined templates may be enough. We recommend the lighter option when it is enough."
      }
    },
    {
      "@type": "Question",
      "name": "Why do large Smartsheet sheets get slow, and how do we fix them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Large sheets with many cross-sheet references and complex formulas slow down and can hit size limits. We restructure by splitting data sensibly, simplifying references, and archiving old rows, so performance and accuracy hold up."
      }
    },
    {
      "@type": "Question",
      "name": "How do you keep Smartsheet and another system in sync safely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We declare one side the source of truth for each field, use Data Shuttle, Live Data Connector, or the API accordingly, and add retries and logging. That avoids the conflicting edits that two-way syncs tend to create."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Smartsheet specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Smartsheet talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-67% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Solutions Architect, Developer, and Work Management Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Solutions Architect designs sheet structure, Control Center blueprints, and governance. An Automation/API Developer builds with the API, Bridge, and Data Shuttle. A Work Management Consultant standardizes templates and reports and helps teams adopt them."
      }
    },
    {
      "@type": "Question",
      "name": "Can you move our resource planning into Smartsheet properly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Resource Management depends on consistent time and assignment data, so we set simple rules for entering it and build views that planners and leaders can trust."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI connect Smartsheet to Salesforce, Jira, or Microsoft 365?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use Data Shuttle, Live Data Connector, or the API according to the use case, with a clear source of truth so syncs do not conflict."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Smartsheet specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant Smartsheet experience and credentials where they exist, but weight a live sheet-design exercise and a review of shipped work at least as heavily, since credentials alone do not test judgment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Smartsheet specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted architect, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the sheets and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom sheets, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Smartsheet rescues or fixing a messy account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve oversized sheets, fragile cross-sheet formulas, drifting template copies, or unowned automation. We audit first, then restructure in stages so teams are not disrupted."
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
    { '@type': 'ListItem', position: 3, name: 'Smartsheet', item: 'https://kovil.ai/platforms/smartsheet' },
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
      <div className="pt-20"><SmartsheetPlatformPage /></div>
    </>
  )
}

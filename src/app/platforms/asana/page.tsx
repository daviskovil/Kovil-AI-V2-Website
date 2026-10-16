import type { Metadata } from 'next'
import AsanaPlatformPage from '@/src/pages/platforms/asana/AsanaPlatformPage'

export const metadata: Metadata = {
  title: 'Asana AI Agents & Developers for Hire',
  description: 'Hire vetted Asana specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  alternates: { canonical: 'https://kovil.ai/platforms/asana' },
  keywords: [
    'asana ai automation',
    'hire asana developer',
    'asana solutions architect',
    'asana staff augmentation',
    'asana api integration',
    'asana work management consultant',
    'asana work graph',
    'what is asana',
  ],
  openGraph: {
    type: 'website',
    title: 'Asana AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Asana specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/asana',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asana AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Asana specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asana Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Asana and staffs vetted solutions architects, API specialists, and work management consultants — covering projects, goals, portfolios, and the Work Graph.',
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
  serviceType: 'Asana Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/asana',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Asana Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workload Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asana Solutions Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Integration Specialist Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Management Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/asana' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Asana',
  description: 'Asana is a work management platform built around the Work Graph, a connected data model linking company goals to the projects and tasks that drive them.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/asana',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Asana Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Asana — AI-driven workload automation, plus vetted solutions architects, API specialists, and work management consultants.',
  url: 'https://kovil.ai/platforms/asana',
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
  name: 'How to Work With Kovil AI on Asana',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your projects and portfolios are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/asana' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Asana specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/asana' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/asana' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Asana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asana is a work management platform built around a Work Graph, where tasks can belong to several projects and connect to goals. Teams use it for project tracking, request intake, workload planning, and reporting through Portfolios, with a REST API and webhooks for integration."
      }
    },
    {
      "@type": "Question",
      "name": "Does Asana have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Asana includes built-in AI features and AI Studio for building AI-driven workflows inside the product. A custom build makes sense when you need logic across systems, such as drafting status updates from task data or routing requests using context from your CRM."
      }
    },
    {
      "@type": "Question",
      "name": "How should we structure Asana so Portfolios and reporting work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consistent project templates, a small set of governed custom fields, and clear ownership are what make Portfolios reliable. We design that structure first, because reports and AI are only as good as the setup beneath them."
      }
    },
    {
      "@type": "Question",
      "name": "What are the limits of Asana Rules, and when do we need the API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rules and Workflow Builder handle most routing and approval needs inside Asana. The API and webhooks are for things Rules cannot do, such as syncing with other tools, running logic against external data, or calling an LLM with context from elsewhere."
      }
    },
    {
      "@type": "Question",
      "name": "How do you prevent sync loops between Asana and other tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Two-way syncs can echo changes back and forth indefinitely. We tag the origin of each change, filter webhook events, and deduplicate updates, and we test with failure cases before anything goes live."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire an Asana specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Asana talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-67% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Solutions Architect, API Specialist, and Work Management Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Solutions Architect designs the project, field, and Portfolio structure. An API Integration Specialist writes code against the Asana API and webhooks. A Work Management Consultant standardizes templates and rules and helps teams adopt them."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build intake that routes requests automatically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build forms with the fields that matter, then route requests by rule or by an agent that reads the request, with low-confidence cases sent to a person. The goal is requests that arrive complete and in the right place."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI connect Asana to Salesforce, Jira, or Slack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build syncs using native integrations where they are enough and the Asana API where they are not, with event filtering so changes do not loop or overwrite each other."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Asana specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant Asana experience and credentials where they exist, but weight a live workspace-design exercise and a review of shipped work at least as heavily, since credentials alone do not test judgment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire an Asana specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted architect, specialist, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the projects and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom project templates, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Asana rescues or fixing a messy workspace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve inconsistent project setups, duplicated custom fields, rules nobody can explain, or Portfolios that disagree with team views. We audit first, then standardize in stages so teams are not disrupted."
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
    { '@type': 'ListItem', position: 3, name: 'Asana', item: 'https://kovil.ai/platforms/asana' },
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
      <div className="pt-20"><AsanaPlatformPage /></div>
    </>
  )
}

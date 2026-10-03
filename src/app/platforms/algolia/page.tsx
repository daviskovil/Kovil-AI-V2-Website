import type { Metadata } from 'next'
import AlgoliaPlatformPage from '@/src/pages/platforms/algolia/AlgoliaPlatformPage'

export const metadata: Metadata = {
  title: "Algolia Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Algolia — AI search and discovery builds, plus vetted search relevance engineers, frontend developers, AI search specialists, and architects matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/algolia' },
  keywords: ["algolia ai agents","hire algolia developer","algolia staff augmentation","algolia neuralsearch","algolia relevance engineer","algolia search developer","ai search implementation","what is algolia"],
  openGraph: {
    type: 'website',
    title: "Algolia Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI search and discovery builds, plus vetted search relevance engineers, frontend developers, AI search specialists, and architects matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/algolia',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Algolia Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI search and discovery builds, plus vetted search relevance engineers, frontend developers, AI search specialists, and architects matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Algolia Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers AI search and discovery builds on Algolia and staffs vetted search relevance engineers, frontend developers, AI search specialists, and architects.",
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
  serviceType: "Algolia Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/algolia',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Algolia Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Agent Build on Algolia" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Search Relevance Engineers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Frontend & API Developers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Algolia AI Search Specialists Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Search Architects Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/algolia' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Algolia",
  description: "Algolia is an AI search and discovery platform that provides fast, relevant search, recommendations, and merchandising for websites and apps through APIs and front-end libraries.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/algolia',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Algolia Platform Partner — AI Agents & Specialist Talent",
  description: "AI search and discovery builds, plus vetted search relevance engineers, frontend developers, AI search specialists, and architects matched in 48 hours. 2-week risk-free trial.",
  url: 'https://kovil.ai/platforms/algolia',
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
  name: "How to Work With Kovil AI on Algolia",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Application", text: "Tell us how you use Algolia, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/algolia' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Algolia specialists matched to your stack and scale.", url: 'https://kovil.ai/platforms/algolia' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/algolia' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Algolia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Algolia is an AI search and discovery platform that provides fast, relevant search, recommendations, and merchandising for websites and apps through APIs and front-end libraries."
      }
    },
    {
      "@type": "Question",
      "name": "Does Algolia have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Algolia ships AI-powered capabilities including NeuralSearch, which combines keyword and vector search. Kovil AI configures those natively and builds custom ranking logic and LLM-powered experiences where they aren't enough."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Algolia, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire a relevance engineer to fix indexing, ranking, and analytics first, then add conversational and AI-powered discovery on top of a search experience that already performs."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Algolia developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Algolia talent bills $24-$44 per hour depending on role and experience, versus $70-$155+ per hour for prevailing US onsite rates for the same roles — typically 69-71% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Search Relevance Engineer, Frontend Developer, and Search Architect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Search Relevance Engineer tunes ranking, synonyms, and query rules based on real behavior. A Frontend/API Developer builds the search UI and integrates the API. A Search Architect designs index structure, data pipelines, and the overall discovery architecture."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Algolia specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Algolia specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Algolia with our commerce platform, CMS, and data pipelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Algolia talent regularly builds indexing pipelines from Shopify, BigCommerce, Contentful, and custom data sources, keeping the index fresh and consistent with your source of truth."
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
      "name": "Can I combine an AI build with Algolia staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same application."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Algolia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Relevance tuning against real query analytics, NeuralSearch rollouts, search UI with InstantSearch, recommendation and merchandising rules, and conversational discovery experiences backed by an LLM."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Algolia partner agency or freelancer?",
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
      "name": "Do you support Algolia rescues or fixing poor search relevance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Algolia engagements start as a rescue — stale indexes, zero-result queries, rules nobody understands, or a search experience customers have given up on. We audit it against real analytics, then rebuild in milestone-gated phases."
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
    { '@type': 'ListItem', position: 3, name: "Algolia", item: 'https://kovil.ai/platforms/algolia' },
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
      <div className="pt-20"><AlgoliaPlatformPage /></div>
    </>
  )
}

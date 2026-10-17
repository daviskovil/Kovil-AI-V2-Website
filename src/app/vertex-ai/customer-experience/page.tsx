import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Customer Experience Agents',
  description: 'Customer experience agents on Vertex AI: conversational AI, personalisation engines, and contact centre AI. 70%+ of queries resolved autonomously.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/customer-experience' },
  keywords: ['vertex ai conversational agent', 'vertex ai personalisation engine', 'google cloud contact centre ai', 'vertex ai customer experience', 'dialogflow cx vertex ai', 'gemini customer service agent', 'google cloud cx agent', 'vertex ai recommendation engine', 'google ccai vertex ai'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Customer Experience Agents | Kovil AI',
    description: 'Conversational AI agents, personalisation engines, and contact centre AI on Vertex AI. Resolve 70%+ of queries. Fixed-price.',
    url: 'https://kovil.ai/vertex-ai/customer-experience',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Customer Experience Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Customer Experience Agents | Kovil AI', description: 'Conversational AI, personalisation, and contact centre agents on Vertex AI. Fixed-price.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Customer Experience Agents',
  url: 'https://kovil.ai/vertex-ai/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Conversational AI Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent' },
    { '@type': 'WebPage', name: 'Personalisation Engine on Vertex AI', url: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine' },
    { '@type': 'WebPage', name: 'Contact Centre AI on Google Cloud', url: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/vertex-ai/customer-experience' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Customer Experience Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Customer Experience' }],
  sectionTag: 'Customer Experience Use Cases',
  headline: 'Customer Experience',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that transform customer interactions — conversational agents that understand intent, personalisation engines that predict needs, and contact centre AI that deflects volume at scale.',
  cards: [
    { href: '/vertex-ai/customer-experience/conversational-ai-agent', icon: 'MessageSquare', color: G_BLUE, title: 'Conversational AI Agent', description: 'Omnichannel conversational agents built on Vertex AI Agent Builder and Dialogflow CX — resolving customer queries autonomously with Gemini-powered understanding.' },
    { href: '/vertex-ai/customer-experience/personalisation-engine', icon: 'Sparkles', color: G_RED, title: 'Personalisation Engine', description: 'Real-time personalisation using Vertex AI Recommendations AI and BigQuery ML — serving the right product, content, or offer to each user at the right moment.' },
    { href: '/vertex-ai/customer-experience/contact-centre-ai', icon: 'Headphones', color: G_GREEN, title: 'Contact Centre AI', description: 'Google Cloud Contact Centre AI (CCAI) implementation — Agent Assist, automated summarisation, and virtual agents that reduce call handling time and cost.' },
  ],
  overview: {
    "heading": "How customer experience agents on Vertex AI work",
    "paragraphs": [
      "The three agents in this section cover customer conversations, personalisation and the contact centre. They use Gemini for understanding and generation, with Google Cloud services supplying the conversation, retrieval and recommendation layers.",
      "The Conversational AI Agent is built on Vertex AI Agent Builder and Dialogflow CX and resolves customer queries across channels. The Personalisation Engine uses Vertex AI Recommendations AI and BigQuery ML to choose what to show each user. The Contact Centre AI service implements Google Cloud Contact Center AI, including Agent Assist, automated summarisation and virtual agents, to reduce handling time and after-call work.",
      "The conversational and personalisation agents typically take 3 weeks. Contact Centre AI takes 4 to 6 weeks."
    ]
  },
  comparison: {
    "heading": "Which customer experience agent fits which job",
    "columns": [
      "Agent",
      "Job it does",
      "Main Google Cloud services",
      "Typical delivery"
    ],
    "rows": [
      [
        "Conversational AI Agent",
        "Resolves customer queries autonomously across channels",
        "Vertex AI Agent Builder, Dialogflow CX, Gemini, Vertex AI Search, Cloud Run",
        "3 weeks"
      ],
      [
        "Personalisation Engine",
        "Serves the right product, content or offer to each user in real time",
        "Vertex AI Recommendations AI, BigQuery ML, Gemini",
        "3 weeks"
      ],
      [
        "Contact Centre AI",
        "Supports human agents and handles routine calls with virtual agents",
        "Google Cloud Contact Center AI: Agent Assist, summarisation, virtual agents",
        "4 to 6 weeks"
      ]
    ]
  },
  faqs: [
    {
      "question": "Which agent should we start with?",
      "answer": "Start with the problem that costs most today. Choose the conversational agent for slow response times, the personalisation engine for generic recommendations, and Contact Centre AI for high handling time and after-call work."
    },
    {
      "question": "Does the conversational agent hand off to people?",
      "answer": "Escalation to human agents is part of the design, and we agree the rules for it during scoping."
    },
    {
      "question": "Do we need to use Google Cloud already?",
      "answer": "The agents run on Vertex AI, so a Google Cloud project is required. If your data lives elsewhere, we scope how it reaches Google Cloud during planning."
    },
    {
      "question": "How does this compare with Azure or Agentforce?",
      "answer": "Our platform comparison guides cover when Vertex AI is the better fit. It tends to suit teams whose data is in BigQuery or who work in Google Workspace."
    },
    {
      "question": "How is the work priced?",
      "answer": "Each agent is delivered as a fixed-price build, scoped on a 30-minute call."
    }
  ],
  ctaHeadline: 'Ready to transform your customer experience with Vertex AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right CX use case and give you a fixed-price delivery plan.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SectionHubTemplate data={data} />
    </>
  )
}

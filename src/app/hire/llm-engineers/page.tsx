import type { Metadata } from 'next'
import LLMEngineersPage from '@/src/pages/hire/LLMEngineersPage'

export const metadata: Metadata = {
  title: 'Hire an LLM Engineer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted LLM engineer in 48 hours. RAG systems, fine-tuning, AI agents, LLM API integration, LLMOps. Engagement Manager oversight, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/llm-engineers' },
  keywords: [
    'hire LLM engineer',
    'LLM developer',
    'hire LLM developer',
    'large language model engineer',
    'hire AI engineer',
    'RAG developer',
    'LLM fine-tuning engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire an LLM Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LLM engineers embedded in your team in 48 hours. RAG systems, fine-tuning, AI agents, LLMOps — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire/llm-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire an LLM Engineer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire an LLM Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LLM engineers embedded in your team in 48 hours. RAG systems, fine-tuning, AI agents — sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire LLM Engineers',
  description: 'Embed a vetted Tier-1 LLM engineer into your team in 48 hours. Specialists in RAG systems, LLM fine-tuning, AI agents, prompt engineering, LLM API integration, and LLMOps. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'LLM Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/llm-engineers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/hire/llm-engineers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LLM Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Systems & Knowledge Bases' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Fine-Tuning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agents & Tool Use' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prompt Engineering & Evaluation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM API Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLMOps & Production Reliability' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire an LLM Engineer with Kovil AI',
  description: 'Embed a vetted LLM engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your LLM use case, data situation, and tech stack. A Delivery Lead contacts you within 24 hours to scope requirements and identify the right specialist.',
      url: 'https://kovil.ai/hire/llm-engineers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked LLM engineers with proven experience in your domain — RAG, agents, fine-tuning, or LLMOps. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/hire/llm-engineers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-ready LLM systems — not demos or prototypes.',
      url: 'https://kovil.ai/hire/llm-engineers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an LLM engineer do?',
      acceptedAnswer: { '@type': 'Answer', text: 'An LLM engineer builds production systems powered by large language models. This includes designing and deploying RAG pipelines, fine-tuning foundation models on proprietary data, building autonomous AI agents, implementing prompt engineering and evaluation frameworks, integrating LLM APIs into products, and maintaining LLMOps infrastructure — model versioning, cost monitoring, hallucination detection, and regression testing.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire an LLM engineer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted LLM engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit and quality before committing to a longer engagement.' },
    },
    {
      '@type': 'Question',
      name: 'What models and frameworks do your LLM engineers work with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our engineers are proficient across GPT-4o, Claude 3.7, Gemini 2.0, Llama 3, and Mistral, and leading open-source models. On the frameworks side: LangChain, LlamaIndex, DSPy, LangGraph, Haystack, and custom implementations. They cover the full stack from model selection and integration to production deployment and monitoring.' },
    },
    {
      '@type': 'Question',
      name: 'RAG vs fine-tuning — which does my project need?',
      acceptedAnswer: { '@type': 'Answer', text: 'RAG (retrieval-augmented generation) is the right choice when your data changes frequently, you need source attribution, or you want to avoid retraining costs. It grounds the model in your documents at query time. Fine-tuning is better when you need the model to adopt a specific tone, format, or domain vocabulary consistently. Your matched LLM engineer will assess your use case and recommend the right approach before any build begins.' },
    },
    {
      '@type': 'Question',
      name: 'How do you prevent hallucinations in production LLM systems?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our LLM engineers apply multiple layers of defence: grounding responses via RAG with source citation, implementing structured output schemas, using evaluation frameworks (LLM-as-judge, human-in-the-loop scoring) to measure hallucination rates, applying guardrails libraries for output validation, and setting up regression pipelines that catch quality regressions before they reach production. Hallucination rate is treated as a first-class production metric.' },
    },
    {
      '@type': 'Question',
      name: 'Who owns the IP and code your LLM engineer produces?',
      acceptedAnswer: { '@type': 'Answer', text: 'You do — 100%. All code, prompts, fine-tuned model weights, evaluation datasets, and pipeline architecture produced during your engagement are fully owned by your company. Kovil AI retains no rights to any work product. This is contractually guaranteed from day one.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',  item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'LLM Engineers',      item: 'https://kovil.ai/hire/llm-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><LLMEngineersPage /></div>
    </>
  )
}

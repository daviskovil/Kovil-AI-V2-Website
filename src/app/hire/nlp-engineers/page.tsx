import type { Metadata } from 'next'
import NLPEngineersPage from '@/src/pages/hire/NLPEngineersPage'

export const metadata: Metadata = {
  title: 'Hire an NLP Engineer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted NLP engineer in 48 hours. Sentiment analysis, NER, text classification, document intelligence, conversational AI. Engagement Manager oversight, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/nlp-engineers' },
  keywords: [
    'hire NLP engineer',
    'NLP developer',
    'natural language processing engineer',
    'hire NLP developer',
    'text AI engineer',
    'NLP specialist',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire an NLP Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 NLP engineers embedded in your team in 48 hours. Sentiment analysis, NER, text classification, document intelligence — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire/nlp-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire an NLP Engineer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire an NLP Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 NLP engineers embedded in your team in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire NLP Engineers',
  description: 'Embed a vetted Tier-1 NLP engineer into your team in 48 hours. Specialists in sentiment analysis, named entity recognition, text classification, machine translation, conversational AI, and document intelligence. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'Natural Language Processing Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/nlp-engineers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/hire/nlp-engineers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NLP Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sentiment & Opinion Analysis' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Named Entity Recognition & Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Text Classification Pipelines' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Translation & Localisation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Conversational AI & Dialogue Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Intelligence & Summarisation' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire an NLP Engineer with Kovil AI',
  description: 'Embed a vetted NLP engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your NLP use case, data situation, and stack. A Delivery Lead contacts you within 24 hours.',
      url: 'https://kovil.ai/hire/nlp-engineers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked NLP engineers matched to your domain. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/hire/nlp-engineers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-ready NLP systems.',
      url: 'https://kovil.ai/hire/nlp-engineers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an NLP engineer do?',
      acceptedAnswer: { '@type': 'Answer', text: 'An NLP engineer builds systems that enable machines to understand, interpret, and generate human language. They design, fine-tune, and deploy models for tasks like sentiment analysis, named entity recognition, text classification, machine translation, summarisation, and conversational AI. They also handle the full ML pipeline from data preparation and annotation through to production deployment and monitoring.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire an NLP engineer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted NLP engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit before committing.' },
    },
    {
      '@type': 'Question',
      name: 'What NLP frameworks and models do your engineers use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our engineers are proficient across spaCy, Hugging Face Transformers, NLTK, BERT, RoBERTa, T5, GPT fine-tuning, and LangChain. They cover the full stack — from corpus preparation and model fine-tuning to serving inference APIs at production scale.' },
    },
    {
      '@type': 'Question',
      name: "What's the difference between an NLP engineer and an LLM engineer?",
      acceptedAnswer: { '@type': 'Answer', text: 'An NLP engineer has deep expertise in the full spectrum of language processing — from classical statistical methods and task-specific fine-tuned models to modern transformer architectures. An LLM engineer focuses specifically on prompting, orchestrating, and deploying large pre-trained language models. There is significant overlap, but NLP engineers typically handle lower-level text processing, custom model training, and domain-specific fine-tuning that general LLM engineers may not.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a large labelled dataset to get started with NLP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Many NLP tasks benefit from transfer learning — fine-tuning a pre-trained model like BERT or RoBERTa on even a few hundred labelled examples can yield strong results. Your engineer will assess your data situation on day one and advise on annotation strategy, data augmentation, and whether zero-shot or few-shot approaches can reduce labelling requirements.' },
    },
    {
      '@type': 'Question',
      name: 'What industries do your NLP engineers have experience in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Legal (contract analysis, clause extraction, compliance monitoring), healthcare (clinical NLP, medical coding, patient record extraction), finance (sentiment on earnings calls, regulatory document parsing, fraud detection), e-commerce (review analysis, product categorisation, search relevance), and SaaS (intent detection, churn prediction from support tickets, automated routing).' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',              item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers', item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'NLP Engineers',     item: 'https://kovil.ai/hire/nlp-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><NLPEngineersPage /></div>
    </>
  )
}

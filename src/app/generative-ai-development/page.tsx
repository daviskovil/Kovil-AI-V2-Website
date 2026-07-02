import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Generative AI Development Company | Build Production GenAI Applications',
  description: 'Generative AI development for enterprises. Chatbots, RAG, image generation, document automation, fine-tuning. Kovil AI ships production GenAI systems that deliver measurable ROI.',
  keywords: ['generative AI development', 'generative AI company', 'GenAI development services', 'generative AI application development', 'enterprise generative AI', 'AI product development', 'LLM application development', 'generative AI consulting'],
  openGraph: {
    title: 'Generative AI Development Company | Build Production GenAI Applications',
    description: 'Generative AI development for enterprises. Chatbots, RAG, image generation, document automation, fine-tuning. Kovil AI ships production GenAI systems that deliver measurable ROI.',
    images: [{ url: 'https://kovil.ai/tech-generative-ai-development.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Generative AI development company building production chatbots, RAG pipelines, agents, and fine-tuned models for enterprise clients.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Generative AI Development', item: 'https://kovil.ai/generative-ai-development' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Generative AI Development',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'End-to-end generative AI development: chatbots, RAG pipelines, AI agents, fine-tuned models, image generation, and document automation for enterprise use cases.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Generative AI Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enterprise AI Chatbot Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Pipeline Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Fine-Tuning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative AI Product Development' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is generative AI development?',
      acceptedAnswer: { '@type': 'Answer', text: 'Generative AI development is the process of building applications that use large language models, image generation models, or multimodal models to create text, code, images, audio, or structured data. This includes chatbots, RAG pipelines, AI agents, document automation systems, and fine-tuned domain-specific models.' },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a generative AI application?',
      acceptedAnswer: { '@type': 'Answer', text: 'A production-ready AI chatbot with RAG takes 6-10 weeks. A simple API integration takes 1-2 weeks. A custom fine-tuned model with evaluation infrastructure takes 10-14 weeks. Timeline depends on data availability, integration complexity, and how many edge cases need to be handled in the evaluation suite.' },
    },
    {
      '@type': 'Question',
      name: 'What models does Kovil AI use for generative AI development?',
      acceptedAnswer: { '@type': 'Answer', text: 'We work with the full model landscape: GPT-4o and GPT-4o mini (OpenAI), Claude Sonnet and Opus (Anthropic), Gemini 1.5 Pro (Google), and open-source models including Llama 3, Mistral, Mixtral, and Phi-3. Model selection is driven by your accuracy requirements, latency targets, privacy constraints, and infrastructure preferences.' },
    },
    {
      '@type': 'Question',
      name: 'When should I fine-tune a model vs use RAG?',
      acceptedAnswer: { '@type': 'Answer', text: 'Use RAG when your knowledge is large, frequently updated, or needs source citation. Use fine-tuning when you need a specific output style, domain vocabulary, or structured output format that prompt engineering alone cannot reliably produce. The most powerful systems often combine both: a fine-tuned model that retrieves from a RAG pipeline.' },
    },
    {
      '@type': 'Question',
      name: 'How do you measure the quality of a generative AI system?',
      acceptedAnswer: { '@type': 'Answer', text: 'We use evaluation frameworks including RAGAS (for RAG quality: context recall, faithfulness, answer relevancy), LLM-as-judge for open-ended quality, human review for edge cases, and task-specific metrics like F1 for extraction tasks or BLEU/ROUGE for summarisation. Every production system we ship includes a regression eval suite that runs on each deployment.' },
    },
    {
      '@type': 'Question',
      name: 'Can you build generative AI on private data without sending it to third parties?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build fully private GenAI stacks using open-source models (Llama 3, Mistral) hosted on your own infrastructure (AWS, Azure, GCP, or on-premise). Documents never leave your environment. For regulated industries like healthcare and finance, we design the architecture to meet HIPAA, SOC 2, and GDPR requirements from the start.' },
    },
    {
      '@type': 'Question',
      name: 'What does a generative AI development engagement with Kovil AI look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'It starts with a scoping call to define the use case, success metrics, and data availability. We then run a 2-week discovery sprint to prototype and validate the approach before committing to a full build. Full builds follow 2-week sprints with weekly demos. You own all code and model weights at completion.' },
    },
    {
      '@type': 'Question',
      name: 'How do you handle hallucinations in production generative AI systems?',
      acceptedAnswer: { '@type': 'Answer', text: 'Hallucination control is layered: RAG with source grounding for factual questions, structured output schemas (JSON mode, function calling) to constrain output format, RAGAS faithfulness scoring in the eval suite, confidence thresholds that trigger human escalation, and citation enforcement so users can verify claims. No system eliminates hallucination entirely, but these layers reduce it to acceptable rates for most use cases.' },
    },
  ],
}

const useCases = [
  {
    icon: '💬',
    title: 'Enterprise AI Chatbots',
    timeline: '6-8 weeks',
    complexity: 'Medium',
    model: 'GPT-4o / Claude Sonnet',
    desc: 'Customer support, internal knowledge assistants, HR bots, IT helpdesks. Multi-turn conversation with memory, escalation logic, and analytics dashboards.',
  },
  {
    icon: '📄',
    title: 'Document Intelligence',
    timeline: '4-8 weeks',
    complexity: 'Medium',
    model: 'GPT-4o / Claude Opus',
    desc: 'Contract analysis, invoice extraction, report summarisation, regulatory document review. Structured output with citation links back to source documents.',
  },
  {
    icon: '🔍',
    title: 'RAG Knowledge Systems',
    timeline: '6-10 weeks',
    complexity: 'High',
    model: 'Any LLM + vector store',
    desc: 'Internal knowledge bases, technical documentation assistants, research Q&A. Hybrid search, re-ranking, RAGAS evaluation, and source citations built in.',
  },
  {
    icon: '🤖',
    title: 'Autonomous AI Agents',
    timeline: '8-12 weeks',
    complexity: 'High',
    model: 'GPT-4o / LangGraph',
    desc: 'Task automation agents that browse, write code, query APIs, and complete multi-step workflows. Human-in-the-loop checkpoints for high-stakes actions.',
  },
  {
    icon: '🎨',
    title: 'Image and Content Generation',
    timeline: '3-5 weeks',
    complexity: 'Low-Medium',
    model: 'DALL-E 3 / Stable Diffusion',
    desc: 'Marketing asset generation, product image variants, personalised content at scale. Style consistency enforcement and brand guideline compliance.',
  },
  {
    icon: '🧠',
    title: 'Fine-Tuned Domain Models',
    timeline: '10-14 weeks',
    complexity: 'Very High',
    model: 'GPT-4o-mini / Llama 3',
    desc: 'Domain-specific models for medical coding, legal clause classification, financial sentiment. Requires labelled training data; delivers higher accuracy at lower inference cost.',
  },
]

const marketStats = [
  { value: '$1.3T', label: 'projected generative AI market by 2032, growing at 42% CAGR (Bloomberg Intelligence)' },
  { value: '78%', label: 'of Fortune 500 companies piloting at least one generative AI application as of 2025' },
  { value: '3-5x', label: 'ROI within 12 months reported by enterprises with mature GenAI deployments (McKinsey 2025)' },
]

const buildBlocks = [
  { name: 'LLM Layer', items: ['GPT-4o, Claude, Gemini', 'Llama 3, Mistral (self-hosted)', 'Prompt engineering + versioning', 'Structured output (JSON mode)'] },
  { name: 'Retrieval Layer', items: ['Pinecone, Weaviate, pgvector', 'Hybrid search (semantic + BM25)', 'Re-ranking (Cohere, cross-encoder)', 'RAGAS evaluation suite'] },
  { name: 'Orchestration Layer', items: ['LangChain LCEL chains', 'LangGraph agent graphs', 'LlamaIndex data connectors', 'Tool use + function calling'] },
  { name: 'Production Layer', items: ['LangSmith tracing', 'Async streaming + fallbacks', 'Token budget enforcement', 'CI/CD eval regression checks'] },
]

export default function GenerativeAIDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Generative AI Development</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Chatbots, RAG, Agents, Fine-Tuning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Generative AI Development That Delivers Real ROI
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                From enterprise chatbots and RAG knowledge systems to autonomous agents and fine-tuned domain models. Kovil AI engineers build production generative AI applications that solve real business problems, not demos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Start Your GenAI Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/tech-generative-ai-development.webp"
                alt="Generative AI development showing chatbot, RAG pipeline, and AI agent applications built for enterprise"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['GPT-4o / Claude / Gemini', 'Llama 3 / Mistral (private)', 'LangChain + LangGraph', 'RAG + Re-ranking', 'Fine-Tuning', 'RAGAS Evaluation'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Definition + market stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Generative AI Development Actually Involves</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Generative AI development is the engineering discipline of integrating large language and multimodal models into working products. This is not prompt writing. It involves architecture decisions across the retrieval layer, orchestration layer, evaluation suite, and production infrastructure.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Most companies underestimate the gap between a working demo and a production system. A chatbot demo is a weekend project. A chatbot that handles 10,000 conversations a day with consistent quality, auditability, and fallback handling is a 6-10 week engineering effort.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                Kovil AI brings engineers who have shipped generative AI systems at that level of complexity. We scope accurately, build the evaluation infrastructure from day one, and deliver code you own and can operate.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none flex-shrink-0">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed pt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Use case table */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Generative AI Use Cases: Timeline and Complexity</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Scope, timeline, and model recommendations for the most common enterprise GenAI applications.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Application</th>
                  <th className="text-left px-5 py-4 font-semibold">Build Timeline</th>
                  <th className="text-left px-5 py-4 font-semibold">Complexity</th>
                  <th className="text-left px-5 py-4 font-semibold">Recommended Model</th>
                  <th className="text-left px-5 py-4 font-semibold">Key Challenge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { app: 'Enterprise Chatbot', timeline: '6-8 weeks', complexity: 'Medium', model: 'GPT-4o / Claude Sonnet', challenge: 'Consistent quality at scale, escalation logic' },
                  { app: 'RAG Knowledge System', timeline: '6-10 weeks', complexity: 'High', model: 'Any LLM + Pinecone', challenge: 'Retrieval quality, hallucination control' },
                  { app: 'Document Extraction', timeline: '4-6 weeks', complexity: 'Medium', model: 'GPT-4o / Claude Opus', challenge: 'Structured output accuracy, edge cases' },
                  { app: 'Autonomous Agent', timeline: '8-12 weeks', complexity: 'Very High', model: 'GPT-4o + LangGraph', challenge: 'Reliability, loop control, error recovery' },
                  { app: 'Fine-Tuned Domain Model', timeline: '10-14 weeks', complexity: 'Very High', model: 'Llama 3 / GPT-4o-mini', challenge: 'Data labelling quality, eval regression' },
                  { app: 'Image Generation Pipeline', timeline: '3-5 weeks', complexity: 'Low-Medium', model: 'DALL-E 3 / SD XL', challenge: 'Style consistency, brand compliance' },
                ].map((row, i) => (
                  <tr key={row.app} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{row.app}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.timeline}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.complexity}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.model}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.challenge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Use case cards */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What We Build</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Six core generative AI application types Kovil AI has shipped in production.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(u => (
              <div key={u.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-1">{u.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">{u.timeline}</span>
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">{u.model}</span>
                </div>
                <p className="text-sm text-[#4B4B4B] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid-page dark CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Turn Your GenAI Idea Into a Production System</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            We start with a 2-week discovery sprint to validate your use case and de-risk the build before committing to full development.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
          >
            Book a Discovery Sprint
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Tech stack / build blocks */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Our Generative AI Technology Stack</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four layers every production GenAI system needs. We handle all of them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {buildBlocks.map(block => (
              <div key={block.name} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-[#E5E2D9]">{block.name}</h3>
                <ul className="space-y-2">
                  {block.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4B4B4B]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Case study */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Financial Services: GenAI Compliance Document Assistant</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A mid-market asset manager needed to automate regulatory compliance Q&A across 8,000 pages of SEC filings, internal policy documents, and FINRA guidance. We built a RAG system with hybrid search, clause-level citations, and a confidence-gating layer that escalates to a human compliance officer when the model is uncertain.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">87%</div>
                <div className="text-sm text-[#9B9B9B]">of compliance queries answered without human escalation, up from 0%</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">4 min</div>
                <div className="text-sm text-[#9B9B9B]">average response time vs 2-day turnaround with manual compliance team</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">$2.1M</div>
                <div className="text-sm text-[#9B9B9B]">projected annual savings in compliance headcount and response delays</div>
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* FAQs */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Generative AI Development: Frequently Asked Questions</h2>
          <div className="divide-y divide-[#E5E2D9]">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{faq.name}</h3>
                <p className="text-[#4B4B4B] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Related links */}
      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Agent Development', href: '/ai-agent-development' },
              { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
              { label: 'LLM Development', href: '/llm-development' },
              { label: 'LangChain Developer', href: '/langchain-developer' },
              { label: 'OpenAI Integration', href: '/openai-integration' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
              { label: 'AI for Fintech', href: '/ai-for-fintech' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm text-[#4B4B4B] border border-[#E5E2D9] rounded-full px-4 py-2 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors"
              >
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Bottom CTA */}
      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Build Your Generative AI Product?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            We scope your use case, validate the approach in 2 weeks, and ship a production-ready system. All code and models are yours to own.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg"
          >
            Start the Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

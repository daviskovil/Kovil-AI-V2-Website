import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire LangChain Developers | Expert LangChain & LlamaIndex Engineers',
  description: 'Build production LLM applications with expert LangChain developers. Chains, agents, RAG pipelines, memory, tools. Kovil AI engineers ship in weeks, not months.',
  keywords: ['LangChain developer', 'LangChain engineer', 'hire LangChain developer', 'LangChain consultant', 'LangChain agent development', 'LangChain RAG pipeline', 'LlamaIndex developer', 'LLM application development'],
  openGraph: {
    title: 'Hire LangChain Developers | Expert LangChain & LlamaIndex Engineers',
    description: 'Build production LLM applications with expert LangChain developers. Chains, agents, RAG pipelines, memory, tools. Kovil AI engineers ship in weeks, not months.',
    images: [{ url: 'https://kovil.ai/tech-langchain-developer.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'AI-first engineering company specialising in LangChain, LlamaIndex, and production LLM application development.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'LangChain Developer', item: 'https://kovil.ai/langchain-developer' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'LangChain Development',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Expert LangChain and LlamaIndex development for production LLM applications — chains, agents, RAG pipelines, memory management, tool use.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LangChain Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LangChain Agent Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Pipeline Engineering with LangChain' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LlamaIndex Integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LangGraph Multi-Agent Orchestration' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is LangChain used for in production?',
      acceptedAnswer: { '@type': 'Answer', text: 'LangChain is a framework for building LLM-powered applications. In production it is used for RAG pipelines, conversational agents with memory, document Q&A systems, multi-step reasoning chains, and tool-using AI assistants. Production use requires careful attention to prompt versioning, fallback handling, and cost monitoring.' },
    },
    {
      '@type': 'Question',
      name: 'LangChain vs LlamaIndex: which should I use?',
      acceptedAnswer: { '@type': 'Answer', text: 'LangChain excels at orchestrating complex chains and agents with diverse tools. LlamaIndex excels at document ingestion, chunking, and retrieval-first workloads. Many production systems use both: LlamaIndex for the retrieval layer and LangChain for orchestration and agent logic. The right choice depends on whether your primary challenge is retrieval quality or orchestration complexity.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a LangChain RAG application take to build?',
      acceptedAnswer: { '@type': 'Answer', text: 'A basic RAG prototype takes 1-2 weeks. A production-grade RAG system with evaluation, re-ranking, fallback handling, and monitoring typically takes 6-10 weeks. The gap between prototype and production is mainly observability, latency optimisation, and retrieval quality tuning.' },
    },
    {
      '@type': 'Question',
      name: 'What is LangGraph and when should I use it?',
      acceptedAnswer: { '@type': 'Answer', text: 'LangGraph is a library built on LangChain for building stateful multi-agent workflows as graphs. Use it when you need agents that loop, branch conditionally, or collaborate. It gives you explicit control over agent state, which makes complex multi-agent systems more reliable and debuggable than pure LangChain agent executors.' },
    },
    {
      '@type': 'Question',
      name: 'How do you handle LangChain in production at scale?',
      acceptedAnswer: { '@type': 'Answer', text: 'Production LangChain systems need: LangSmith for tracing and debugging, async chain execution for throughput, prompt versioning to prevent regression, streaming for low perceived latency, fallback chains for API failures, token budget management per request, and a separate evaluation suite to catch quality regressions before deployment.' },
    },
    {
      '@type': 'Question',
      name: 'Can LangChain connect to my existing databases and APIs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. LangChain has built-in integrations for SQL databases, REST APIs, vector stores (Pinecone, Weaviate, pgvector), document loaders (PDF, Notion, Google Drive, Confluence), and over 50 tool integrations. Custom tools can be created in minutes by wrapping any Python function with a LangChain Tool decorator.' },
    },
    {
      '@type': 'Question',
      name: 'What does a LangChain developer cost compared to building in-house?',
      acceptedAnswer: { '@type': 'Answer', text: 'Building an in-house LangChain team means recruiting senior ML engineers familiar with both LLM APIs and orchestration frameworks, which takes 3-6 months and involves significant ramp-up time. Engaging Kovil AI gives you a team that has already solved production LangChain challenges across multiple industries, compressing time-to-production from months to weeks.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with open-source models or only OpenAI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both. LangChain supports dozens of LLM providers. Kovil AI builds with GPT-4o, Claude, Gemini, and open-source models (Llama 3, Mistral, Mixtral) hosted on AWS Bedrock, Azure OpenAI, or self-hosted infrastructure. Model selection is driven by your latency, privacy, and accuracy requirements.' },
    },
  ],
}

const frameworks = [
  {
    name: 'LangChain',
    strength: 'Orchestration & agents',
    retrieval: 'Good (via integrations)',
    agents: 'Excellent (LCEL, agents)',
    multiAgent: 'Via LangGraph',
    ecosystem: '600+ integrations',
    bestFor: 'Complex chains, tool-using agents',
  },
  {
    name: 'LlamaIndex',
    strength: 'Document retrieval',
    retrieval: 'Best-in-class',
    agents: 'Good (ReAct)',
    multiAgent: 'Limited',
    ecosystem: 'Strong data connectors',
    bestFor: 'RAG-first, document Q&A',
  },
  {
    name: 'LangGraph',
    strength: 'Multi-agent graphs',
    retrieval: 'Via LangChain',
    agents: 'Excellent (stateful)',
    multiAgent: 'Excellent',
    ecosystem: 'LangChain ecosystem',
    bestFor: 'Complex agent workflows',
  },
  {
    name: 'Direct API',
    strength: 'Full control',
    retrieval: 'Custom',
    agents: 'Custom ReAct',
    multiAgent: 'Custom',
    ecosystem: 'None (build your own)',
    bestFor: 'Simple use cases, no overhead',
  },
]

const services = [
  {
    icon: '🔗',
    title: 'LangChain Chain Development',
    desc: 'LCEL-based chains for document Q&A, summarisation, extraction, and structured output. Prompt versioning, streaming, and fallback built in from day one.',
  },
  {
    icon: '🤖',
    title: 'LangChain Agent Engineering',
    desc: 'Tool-using agents that call APIs, query databases, run code, and search the web. ReAct, function calling, and custom tool definitions tailored to your workflows.',
  },
  {
    icon: '📚',
    title: 'RAG Pipeline with LlamaIndex',
    desc: 'Hybrid semantic + keyword retrieval, re-ranking with Cohere or cross-encoder models, RAGAS evaluation, and chunking strategies tuned for your document corpus.',
  },
  {
    icon: '🕸',
    title: 'LangGraph Multi-Agent Systems',
    desc: 'Stateful agent graphs with conditional branching, human-in-the-loop nodes, and shared memory. Built for workflows too complex for single-agent ReAct loops.',
  },
  {
    icon: '🔭',
    title: 'LangSmith Observability',
    desc: 'Tracing, evaluation datasets, prompt regression testing, and latency dashboards. Know exactly where your chain fails before it reaches production users.',
  },
  {
    icon: '🚀',
    title: 'Production Hardening',
    desc: 'Async execution, rate-limit handling, token budget enforcement, structured JSON output validation, and fallback chains. Built to handle real traffic, not just demos.',
  },
]

const productionPitfalls = [
  { problem: 'Hallucination in RAG answers', fix: 'Source citation enforcement + RAGAS faithfulness scoring on every release' },
  { problem: 'Unpredictable agent loops', fix: 'LangGraph stateful graphs with explicit loop-break conditions and max-step limits' },
  { problem: 'Prompt drift after model updates', fix: 'Prompt versioning in LangSmith with regression eval suite on each deploy' },
  { problem: 'Slow chain latency (>5s)', fix: 'Async LCEL, streaming output, and parallelised retrieval branches' },
  { problem: 'Retrieval quality degrading over time', fix: 'Scheduled RAGAS context-recall benchmarks + chunking strategy reviews' },
  { problem: 'Token cost overruns', fix: 'Per-request token budgets, context compression, and model routing by complexity' },
]

const marketStats = [
  { value: '73%', label: 'of LLM app teams use LangChain or LlamaIndex in production' },
  { value: '6-10 wks', label: 'typical time from prototype to production-grade RAG' },
  { value: '4x', label: 'faster retrieval with re-ranking vs naive top-k similarity' },
]

export default function LangChainDeveloperPage() {
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
                <span className="text-white">LangChain Developer</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">LangChain + LlamaIndex + LangGraph</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                LangChain Developers Who Ship Production Systems
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Chains, agents, RAG pipelines, multi-agent graphs. Kovil AI engineers have shipped LangChain systems across legal, finance, healthcare, and e-commerce. From prototype to production-ready in weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Start Your LangChain Project
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
                src="/tech-langchain-developer.webp"
                alt="LangChain developer building production LLM application with chains, agents, and RAG pipeline"
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
            {['LangChain LCEL', 'LangGraph', 'LlamaIndex', 'LangSmith Tracing', 'OpenAI / Claude / Llama 3', 'Pinecone / pgvector'].map(t => (
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
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What LangChain Development Actually Involves</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                LangChain is a framework for composing LLM calls, tools, memory, and data retrieval into coherent application flows. A LangChain developer designs the architecture of these flows: which model at which step, how context is retrieved, how state is managed across turns, and how failures are handled.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                The gap between a LangChain prototype and a production system is wide. Prototypes ignore latency, cost, hallucination rate, and failure modes. Production systems require evaluation suites, prompt versioning, async execution, token budgets, and fallback logic. This is where most teams underestimate effort.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                Kovil AI engineers work with the full LangChain ecosystem, including LangGraph for multi-agent orchestration, LlamaIndex for retrieval, and LangSmith for observability. We do not build demos. We build systems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed pt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Services */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Kovil AI Builds with LangChain</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">From simple chains to stateful multi-agent systems, we cover the full LangChain and LlamaIndex stack.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{s.title}</h3>
                <p className="text-sm text-[#4B4B4B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Framework comparison table */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">LangChain vs LlamaIndex vs LangGraph vs Direct API</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Choosing the right framework depends on whether your core challenge is retrieval, orchestration, or multi-agent coordination.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Framework</th>
                  <th className="text-left px-5 py-4 font-semibold">Core Strength</th>
                  <th className="text-left px-5 py-4 font-semibold">Retrieval</th>
                  <th className="text-left px-5 py-4 font-semibold">Agent Support</th>
                  <th className="text-left px-5 py-4 font-semibold">Multi-Agent</th>
                  <th className="text-left px-5 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map((f, i) => (
                  <tr key={f.name} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{f.name}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{f.strength}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{f.retrieval}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{f.agents}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{f.multiAgent}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{f.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#9B9B9B] mt-4 text-center">Many production systems combine LlamaIndex for retrieval with LangChain/LangGraph for orchestration. Framework choice is rarely either/or.</p>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid-page dark CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">From LangChain Prototype to Production in Weeks</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            Our engineers have shipped LangChain systems across legal, finance, healthcare, and e-commerce. Tell us what you are building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
          >
            Talk to a LangChain Engineer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Production pitfalls */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why LangChain Systems Fail in Production</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Common failure modes we solve before they reach your users.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productionPitfalls.map(p => (
              <div key={p.problem} className="bg-white rounded-xl border border-[#E5E2D9] p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-500 font-bold text-lg leading-none mt-0.5">✕</span>
                  <p className="text-sm font-semibold text-[#0A0A0A]">{p.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#4B4B4B]">{p.fix}</p>
                </div>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Legal Intelligence Platform: Multi-Agent Contract Analysis</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A legal technology company needed to automate contract review across 12 clause types with jurisdiction-specific reasoning. We built a LangGraph multi-agent system where a supervisor agent routes clauses to specialist sub-agents. Each sub-agent uses a LlamaIndex RAG pipeline over precedent documents to ground its analysis.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">91%</div>
                <div className="text-sm text-[#9B9B9B]">accuracy on clause classification, up from 64% with single-chain approach</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">8 min</div>
                <div className="text-sm text-[#9B9B9B]">full contract review time, down from 3 hours of manual attorney work</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">$620K</div>
                <div className="text-sm text-[#9B9B9B]">annualised savings in attorney review hours in the first year</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">LangChain Development: Frequently Asked Questions</h2>
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
              { label: 'OpenAI Integration', href: '/openai-integration' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
              { label: 'AI for Legal', href: '/ai-for-legal' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Build with LangChain?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us about your use case. We will scope your system, recommend the right framework stack, and ship a production-ready build.
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

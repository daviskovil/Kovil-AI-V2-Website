import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Project Development Company | End-to-End AI Build Services',
  description: 'Kovil AI runs complete AI project development: discovery, architecture, build, evaluation, and production handover. Choose fixed-price, time-and-materials, or outcome-based.',
  keywords: ['AI project development', 'AI development company', 'AI project management', 'build AI project', 'AI software development', 'enterprise AI project', 'AI development services'],
  openGraph: {
    title: 'AI Project Development Company | End-to-End AI Build Services',
    description: 'Kovil AI runs complete AI project development: discovery, architecture, build, evaluation, and production handover. Choose fixed-price, time-and-materials, or outcome-based.',
    images: [{ url: 'https://kovil.ai/engagement-ai-project.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'End-to-end AI project development company: discovery, architecture, build, evaluation, and handover for enterprise AI systems.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'AI Project Development', item: 'https://kovil.ai/ai-project-development' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Project Development',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Complete AI project development from discovery sprint to production handover. Chatbots, RAG pipelines, AI agents, fine-tuned models, and LLM integrations.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Project Types',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbot Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Pipeline Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Agent System' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Integration Project' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an AI project development engagement include?',
      acceptedAnswer: { '@type': 'Answer', text: 'A full AI project development engagement with Kovil AI includes: a discovery sprint (2 weeks, producing technical spec and architecture), build phase (4-12 weeks depending on scope), evaluation infrastructure (eval suite, RAGAS scoring, regression tests), production deployment, monitoring setup, documentation, and a knowledge transfer session. You own all code, prompts, eval datasets, and model weights at handover.' },
    },
    {
      '@type': 'Question',
      name: 'How long does an AI project take from start to finish?',
      acceptedAnswer: { '@type': 'Answer', text: 'Total timeline depends on scope. A focused AI chatbot integration: 6-8 weeks. A RAG pipeline with evaluation: 8-12 weeks. A multi-agent workflow system: 12-16 weeks. These timelines include the 2-week discovery sprint. The discovery sprint is not optional — it is what makes the rest of the project predictable.' },
    },
    {
      '@type': 'Question',
      name: 'What engagement model should I choose for my AI project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed-price is best when your requirements are clear and stable — good for MVP builds, defined integrations, and document processing systems. Time-and-materials is best when requirements may evolve — good for exploratory work or when you want to stay flexible on priorities. Outcome-based is best when you have a clear KPI and want Kovil AI to share the performance risk. We will recommend the right model after understanding your project in a scoping call.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with our existing tech stack?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate with your existing stack, not around it. We have shipped AI systems on top of AWS, Azure, GCP, Vercel, and on-premise infrastructure. Common integrations include Salesforce, HubSpot, Zendesk, Slack, Confluence, Notion, Google Drive, SharePoint, and custom REST APIs. If you use it, we have probably integrated with it.' },
    },
    {
      '@type': 'Question',
      name: 'What happens after the project is delivered?',
      acceptedAnswer: { '@type': 'Answer', text: 'We do a structured handover: documentation review, codebase walkthrough, monitoring and alerting orientation, and a 2-week post-launch support window included in all engagements. After that, you can maintain the system internally, engage us for ongoing retainer support, or bring in your own team — the code and architecture are yours to operate.' },
    },
    {
      '@type': 'Question',
      name: 'How do you measure quality during an AI project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every project gets an evaluation suite from day one. For RAG systems: RAGAS context recall, faithfulness, and answer relevancy. For classification: F1, precision, recall on a held-out test set. For agents: task success rate and step efficiency. For generation tasks: BLEU, ROUGE, or LLM-as-judge depending on the use case. Eval scores are tracked in a dashboard and run on every deployment to catch regressions.' },
    },
    {
      '@type': 'Question',
      name: 'Can you work with our internal AI or engineering team?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We frequently work alongside internal teams. Common structures: Kovil AI leads architecture and builds the AI layer while your team handles frontend or integrations; Kovil AI upskills your internal team during the build; or Kovil AI delivers the first version and your team takes over for ongoing development. The structure depends on your team\'s current capabilities and where you want to own the work long-term.' },
    },
    {
      '@type': 'Question',
      name: 'What makes an AI project fail, and how do you prevent it?',
      acceptedAnswer: { '@type': 'Answer', text: 'The top failure modes: (1) undefined success criteria — prevented by our eval-first approach; (2) poor data quality — caught in discovery sprint; (3) scope creep — managed by change order process or T&M structure; (4) hallucination in production — mitigated by RAG grounding, structured output, and confidence gating; (5) no monitoring after launch — prevented by our mandatory monitoring setup at handover. We have built these guardrails from experience across dozens of AI projects.' },
    },
  ],
}

const projectTypes = [
  {
    icon: '💬',
    title: 'AI Chatbot Build',
    timeline: '6-8 weeks',
    model: 'GPT-4o / Claude Sonnet',
    desc: 'Customer support, internal helpdesk, product assistant. Multi-turn conversation, memory, escalation, analytics dashboard. Deployed to web, Slack, or WhatsApp.',
    tags: ['LangChain', 'RAG', 'LangSmith'],
  },
  {
    icon: '📄',
    title: 'Document Intelligence',
    timeline: '4-8 weeks',
    model: 'GPT-4o / Claude Opus',
    desc: 'Contract analysis, invoice extraction, regulatory review, report summarisation. Structured output with citation links. Human-review workflow for flagged documents.',
    tags: ['LlamaIndex', 'Structured Output', 'RAGAS'],
  },
  {
    icon: '🔍',
    title: 'RAG Knowledge System',
    timeline: '6-10 weeks',
    model: 'Any LLM + vector store',
    desc: 'Internal knowledge base, technical docs assistant, research Q&A. Hybrid search, re-ranking, RAGAS evaluation, source citations. Built to stay accurate as your docs change.',
    tags: ['Pinecone / pgvector', 'Hybrid Search', 'Re-ranking'],
  },
  {
    icon: '🤖',
    title: 'AI Agent System',
    timeline: '8-12 weeks',
    model: 'GPT-4o + LangGraph',
    desc: 'Multi-step task automation: browse, write code, query APIs, complete workflows. Human-in-the-loop for high-stakes actions. Stateful LangGraph architecture for reliability.',
    tags: ['LangGraph', 'Tool Use', 'Human-in-Loop'],
  },
  {
    icon: '🔗',
    title: 'LLM API Integration',
    timeline: '2-4 weeks',
    model: 'OpenAI / Anthropic',
    desc: 'Add AI features to your existing SaaS product: summarise, classify, generate, extract. Streaming, token budgets, fallback chains, and prompt versioning from day one.',
    tags: ['OpenAI API', 'Streaming', 'Prompt Versioning'],
  },
  {
    icon: '🧠',
    title: 'Fine-Tuned Domain Model',
    timeline: '10-14 weeks',
    model: 'Llama 3 / GPT-4o-mini',
    desc: 'Domain-specific model for medical coding, legal clause classification, financial document parsing. Requires labelled training data. Higher accuracy at lower inference cost.',
    tags: ['LoRA / QLoRA', 'PEFT', 'Eval Regression Suite'],
  },
]

const lifecycle = [
  { phase: 'Discovery', week: 'Wk 1-2', activities: ['Requirements mapping', 'Data audit', 'Architecture design', 'Risk identification', 'Technical spec + fixed-price proposal'] },
  { phase: 'Foundation', week: 'Wk 3-5', activities: ['Data pipeline build', 'Model integration', 'Eval harness setup', 'Staging environment', 'First internal demo'] },
  { phase: 'Core Build', week: 'Wk 6-9', activities: ['Feature development', 'Retrieval tuning', 'Integration testing', 'RAGAS benchmarks', 'Weekly client demos'] },
  { phase: 'Production', week: 'Wk 10-12', activities: ['Performance hardening', 'Security review', 'Monitoring + alerting', 'Documentation', 'Handover + support window'] },
]

const marketStats = [
  { value: '85%', label: 'of enterprise AI projects fail to reach production — mostly from poor scoping and no eval infrastructure (RAND 2024)' },
  { value: '2 weeks', label: 'is how long our discovery sprint takes to define architecture, spec, and risk register before any code is written' },
  { value: '$4.4M', label: 'average cost of a failed enterprise AI project when including rework, opportunity cost, and delayed time-to-market' },
]

export default function AIProjectDevelopmentPage() {
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
                <span className="text-white">AI Project Development</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full" />
                <span className="text-[#FF4F00] text-sm font-medium">Discovery. Build. Evaluate. Handover.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                AI Project Development That Ships and Sticks
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                From first conversation to production handover. Kovil AI runs the full project: scoping, architecture, build, evaluation infrastructure, deployment, and knowledge transfer. You own everything we build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Scope Your AI Project
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
                src="/engagement-ai-project.webp"
                alt="AI project development lifecycle showing discovery, build, evaluation and handover phases with tech stack"
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
            {['2-Week Discovery Sprint', 'Eval Suite on Day 1', 'Weekly Demos', 'Production Deployment', 'Full Documentation', 'You Own All Code'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why AI projects fail + stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why Most AI Projects Never Reach Production</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                85% of enterprise AI projects fail to reach production. The reasons are almost never the model. They are the process: vague requirements, no evaluation infrastructure, poor data quality discovered mid-build, and no one accountable for the end-to-end outcome.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Kovil AI was designed to fix this. Every project starts with a 2-week discovery sprint that produces a technical spec, data audit, risk log, and architecture diagram. We build the evaluation harness on day one of the build phase, not as an afterthought. And we stay accountable through to production deployment, not just code delivery.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                The result is AI projects that ship on time, meet their quality targets, and continue to perform after handover.
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

      {/* Project lifecycle */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">The Kovil AI Project Lifecycle</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four phases with clear deliverables at each gate. No handwave moments, no "it will work itself out."</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifecycle.map((phase, i) => (
              <div key={phase.phase} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E5E2D9]">
                  <span className="text-2xl font-bold text-[#FF4F00] opacity-40">0{i + 1}</span>
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">{phase.phase}</p>
                    <p className="text-xs text-[#9B9B9B]">{phase.week}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.activities.map(a => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#4B4B4B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Project types */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">AI Project Types We Build</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Six core AI project types Kovil AI has shipped to production. Every one includes eval infrastructure, monitoring, and full handover.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map(p => (
              <div key={p.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-1">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">{p.timeline}</span>
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">{p.model}</span>
                </div>
                <p className="text-sm text-[#4B4B4B] leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs text-[#FF4F00] bg-[#FF4F00]/5 border border-[#FF4F00]/20 rounded-full px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Project Type Fits?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            Tell us the business problem. We will recommend the right AI approach, technology stack, and engagement model in a free 30-minute scoping call.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
          >
            Book a Free Scoping Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Engagement model chooser */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Choose Your Engagement Model</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">The right model depends on how well-defined your requirements are and how much budget risk you want to carry.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Fixed-Price',
                badge: 'Best for defined scope',
                tagline: 'Know exactly what you are paying before a line of code is written.',
                pros: ['Budget certainty', 'Clear delivery date', 'Milestone payment gates', 'Spec document you keep'],
                cons: ['Change orders for additions', 'Requires stable requirements'],
                cta: 'Learn about Fixed-Price',
                href: '/fixed-price-ai-project',
              },
              {
                title: 'Outcome-Based',
                badge: 'Best for ROI-driven builds',
                tagline: 'Pay when the metric moves. Kovil AI takes shared risk on performance.',
                pros: ['Aligned incentives', 'Performance fee on results', 'Shared risk model', 'Metric-first scoping'],
                cons: ['Requires established baseline', 'Selective — not for all projects'],
                cta: 'Learn about Outcome-Based',
                href: '/outcome-based-ai-development',
                highlight: true,
              },
              {
                title: 'Time-and-Materials',
                badge: 'Best for evolving scope',
                tagline: 'Maximum flexibility. Change priorities sprint-to-sprint.',
                pros: ['Full scope flexibility', 'No change order friction', 'Right for exploratory work', 'Transparent billing'],
                cons: ['No fixed budget ceiling', 'Requires active management'],
                cta: 'Talk to Us',
                href: '/contact',
              },
            ].map(model => (
              <div key={model.title} className={`rounded-xl border p-6 flex flex-col ${model.highlight ? 'bg-[#0A0A0A] border-[#FF4F00]/50' : 'bg-white border-[#E5E2D9]'}`}>
                <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-2 ${model.highlight ? 'text-[#FF4F00]' : 'text-[#9B9B9B]'}`}>{model.badge}</span>
                <h3 className={`text-xl font-bold mb-2 ${model.highlight ? 'text-white' : 'text-[#0A0A0A]'}`}>{model.title}</h3>
                <p className={`text-sm mb-5 ${model.highlight ? 'text-[#9B9B9B]' : 'text-[#4B4B4B]'}`}>{model.tagline}</p>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${model.highlight ? 'text-[#9B9B9B]' : 'text-[#0A0A0A]'}`}>Advantages</p>
                    <ul className="space-y-1.5">
                      {model.pros.map(p => (
                        <li key={p} className={`flex items-center gap-2 text-sm ${model.highlight ? 'text-[#9B9B9B]' : 'text-[#4B4B4B]'}`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F00] flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${model.highlight ? 'text-[#9B9B9B]' : 'text-[#0A0A0A]'}`}>Consider if</p>
                    <ul className="space-y-1.5">
                      {model.cons.map(c => (
                        <li key={c} className={`flex items-center gap-2 text-sm ${model.highlight ? 'text-[#9B9B9B]' : 'text-[#4B4B4B]'}`}>
                          <span className="text-amber-400 flex-shrink-0 text-xs">!</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href={model.href}
                  className={`mt-6 inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg text-sm transition-colors ${model.highlight ? 'bg-[#FF4F00] text-white hover:bg-[#e64400]' : 'border border-[#E5E2D9] text-[#0A0A0A] hover:border-[#FF4F00] hover:text-[#FF4F00]'}`}
                >
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
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
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Fintech Startup: Full AI Project from Discovery to Production</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-4 max-w-2xl">
              A Series B lending startup needed an AI underwriting assistant: ingest applicant documents, extract financial data, cross-reference against internal risk models, and generate a structured decision recommendation for human underwriters.
            </p>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              Discovery sprint uncovered that their applicant PDFs had 14 distinct layouts requiring adaptive parsing. We added a document classifier as a pre-processing step (not in original scope), priced it in the fixed-price proposal, and delivered the full system in 11 weeks.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">11 wks</div>
                <div className="text-sm text-[#9B9B9B]">discovery to production — 3 weeks faster than their original estimate</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">89%</div>
                <div className="text-sm text-[#9B9B9B]">extraction accuracy on financial fields vs 61% with their previous vendor</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">7 min</div>
                <div className="text-sm text-[#9B9B9B]">average underwriter review time, down from 52 minutes per application</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">AI Project Development: Frequently Asked Questions</h2>
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
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related services and engagement models</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Fixed-Price AI Project', href: '/fixed-price-ai-project' },
              { label: 'Outcome-Based AI Development', href: '/outcome-based-ai-development' },
              { label: 'Generative AI Development', href: '/generative-ai-development' },
              { label: 'AI Agent Development', href: '/ai-agent-development' },
              { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your AI Project?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Describe the problem you want to solve. We will scope it, recommend the right approach, and tell you honestly what it will take to ship.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg"
          >
            Scope Your AI Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

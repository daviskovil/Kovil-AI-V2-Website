import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LLM Development | Large Language Model Integration and Fine-Tuning | Kovil AI',
  description: 'Kovil AI integrates, fine-tunes, and deploys large language models for enterprise. GPT-4, Claude, Gemini, Llama 3. LLMOps, evaluation, and production-grade deployment.',
  keywords: ['LLM development', 'large language model integration', 'LLM fine-tuning', 'LLM deployment', 'enterprise LLM'],
  openGraph: {
    title: 'LLM Development | Large Language Model Integration | Kovil AI',
    description: 'Enterprise LLM integration, fine-tuning, and production deployment. GPT-4, Claude, Gemini, Llama 3.',
    url: 'https://kovil.ai/llm-development',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/tech-llm-development.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'LLM Development | Kovil AI', description: 'Enterprise LLM integration and fine-tuning.' },
  alternates: { canonical: 'https://kovil.ai/llm-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specialising in LLM development and integration.', address: { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }, contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'LLM Development', item: 'https://kovil.ai/llm-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'LLM Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Enterprise large language model integration, fine-tuning, evaluation, and production deployment.', serviceType: 'LLM Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LLM development?', acceptedAnswer: { '@type': 'Answer', text: 'LLM development refers to selecting, integrating, fine-tuning, evaluating, and deploying large language models into production applications. It encompasses everything from initial model selection and API integration through fine-tuning on proprietary data, building evaluation frameworks, and maintaining models with LLMOps practices in production.' } },
    { '@type': 'Question', name: 'Should I use GPT-4, Claude, or Gemini?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your use case. GPT-4o excels at general reasoning, code generation, and vision tasks. Claude Sonnet is exceptional for long document processing, coding, and tasks requiring careful, nuanced outputs. Gemini 1.5 Pro is best when you need very long context windows. We help you run structured evaluations to choose the right model for your specific task rather than relying on general benchmarks.' } },
    { '@type': 'Question', name: 'When should I fine-tune an LLM vs using RAG?', acceptedAnswer: { '@type': 'Answer', text: 'Fine-tune when you need the model to adopt a specific style, format, or behavior consistently, or when you have a highly specialized domain with distinct vocabulary. Use RAG when you need the model to answer questions from a specific knowledge base and need responses to stay current with updated documents. For most enterprise use cases, RAG is the right first step. Fine-tuning is usually layer two.' } },
    { '@type': 'Question', name: 'What fine-tuning methods do you use?', acceptedAnswer: { '@type': 'Answer', text: 'We use LoRA (Low-Rank Adaptation) and QLoRA for parameter-efficient fine-tuning on consumer or cloud GPUs. For OpenAI models, we use their fine-tuning API. For Llama 3 and other open-source models, we fine-tune using the Hugging Face PEFT library with custom training pipelines on AWS or GCP.' } },
    { '@type': 'Question', name: 'How do you evaluate LLM performance?', acceptedAnswer: { '@type': 'Answer', text: 'We build task-specific evaluation datasets before the integration begins. For RAG systems we use RAGAS. For open-ended generation we use LLM-as-judge (a separate LLM grades outputs). For structured tasks we use deterministic metrics. The key is having a measurable definition of "working well" before any code is written.' } },
    { '@type': 'Question', name: 'Can you deploy LLMs on private infrastructure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We deploy open-source models including Llama 3 and Mistral on AWS, GCP, Azure, or your own servers using vLLM or TGI for high-throughput serving. This is the right approach when data privacy regulations prevent you from sending data to third-party APIs.' } },
    { '@type': 'Question', name: 'What is LLMOps and do I need it?', acceptedAnswer: { '@type': 'Answer', text: 'LLMOps is the operational practice of running LLMs in production: prompt versioning, A/B testing of model updates, monitoring for output quality degradation, cost tracking, and incident response for model failures. If you are using an LLM in a production application, you need LLMOps. Without it, you will not know when your model stops working well.' } },
    { '@type': 'Question', name: 'How long does LLM integration take?', acceptedAnswer: { '@type': 'Answer', text: 'A basic LLM API integration with proper error handling, streaming, and a simple evaluation framework takes 2 to 4 weeks. A full production integration including fine-tuning, RAG, evaluation pipelines, and LLMOps monitoring typically takes 6 to 12 weeks depending on complexity.' } },
  ],
}

const models = [
  { name: 'GPT-4o', provider: 'OpenAI', contextWindow: '128K tokens', strength: 'General reasoning, vision, code', speed: 'Fast', bestFor: 'Versatile production workloads' },
  { name: 'Claude Sonnet', provider: 'Anthropic', contextWindow: '200K tokens', strength: 'Long documents, careful reasoning', speed: 'Fast', bestFor: 'Complex analysis, coding, long docs' },
  { name: 'Gemini 1.5 Pro', provider: 'Google', contextWindow: '1M tokens', strength: 'Ultra-long context, multimodal', speed: 'Medium', bestFor: 'Tasks requiring massive context' },
  { name: 'Llama 3 70B', provider: 'Meta (open-source)', contextWindow: '128K tokens', strength: 'Self-hosted, no data sharing', speed: 'Varies (infra-dependent)', bestFor: 'Private deployments, cost at scale' },
  { name: 'GPT-4o mini', provider: 'OpenAI', contextWindow: '128K tokens', strength: 'Speed, low cost', speed: 'Very Fast', bestFor: 'High-volume, cost-sensitive tasks' },
]

const services = [
  { icon: '🔌', title: 'LLM API Integration', desc: 'Production-grade integration of OpenAI, Anthropic, and Google APIs with streaming, error handling, retry logic, and cost monitoring.' },
  { icon: '🎛️', title: 'Prompt Engineering', desc: 'Systematic prompt design with structured outputs, chain-of-thought strategies, and regression testing against prompt changes.' },
  { icon: '🏋️', title: 'Fine-Tuning (LoRA/QLoRA)', desc: 'Domain-specific fine-tuning using parameter-efficient methods. We scope dataset construction, training, and evaluation.' },
  { icon: '📊', title: 'Evaluation Framework', desc: 'Task-specific evaluation before the integration. LLM-as-judge, RAGAS, and custom deterministic metrics for your use case.' },
  { icon: '🚀', title: 'Private LLM Deployment', desc: 'Self-hosted Llama 3 or Mistral on AWS, GCP, or Azure using vLLM or TGI for high-throughput, privacy-compliant serving.' },
  { icon: '🔍', title: 'LLMOps and Monitoring', desc: 'Prompt versioning, output quality monitoring, cost tracking, A/B testing for model updates, and alerting for degradation.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="bg-[#0A0A0A] py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-6 font-sans">
                  <Link href="/" className="hover:text-[#FF4F00] transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-[#A09A91]">LLM Development</span>
                </nav>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">LLM Development</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  LLM Integration and Fine-Tuning Built for Production
                </h1>
                <p className="text-[#A09A91] text-lg leading-relaxed mb-8 font-sans">
                  From model selection through fine-tuning, evaluation, and LLMOps, Kovil AI handles the full LLM engineering lifecycle. GPT-4, Claude, Gemini, and Llama 3. Production-grade from day one.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['GPT-4o, Claude, Gemini', 'LoRA / QLoRA Fine-Tuning', 'Evaluation Framework First', 'Private LLM Hosting'].map(b => (
                    <span key={b} className="inline-flex items-center gap-1.5 bg-[#141414] border border-[#252525] text-white text-xs font-medium px-3 py-1.5 rounded-full font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] flex-shrink-0" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                    Book a Free Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                    How It Works
                  </Link>
                </div>
              </div>
              <div className="lg:flex justify-end hidden">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#FF4F00]/20 to-transparent rounded-2xl blur-xl" />
                  <Image src="/tech-llm-development.webp" alt="LLM Development by Kovil AI" width={540} height={304} className="relative rounded-2xl border border-[#1E1E1E] shadow-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-[#E5E2D9] py-5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-[#6B7280] font-sans">
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 150+ LLM Systems Deployed</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> GPT-4, Claude, Gemini, Llama 3</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Evaluation Framework First</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> LoRA / QLoRA Fine-Tuning</span>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What is LLM Development?</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">The Full Lifecycle: From API to Production LLMOps</h2>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-4">
                  LLM development is not just calling an API. It is systematically selecting the right model for your task, engineering prompts that are robust under varied inputs, building evaluation frameworks that measure quality, integrating with your data and tools, fine-tuning when general models are not domain-specific enough, and then operating the system in production with proper monitoring.
                </p>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-6">
                  Most companies underestimate the engineering required to run LLMs reliably. Prompts break. Models degrade between versions. Costs spiral without monitoring. Output quality is invisible without evaluation. Kovil AI handles all of it.
                </p>
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Kovil AI's approach</p>
                  <p className="text-[#A09A91] text-sm font-sans leading-relaxed">We build the evaluation framework before the integration. If you cannot measure it, you cannot ship it. Every LLM system we deploy includes task-specific evals, prompt versioning, and a monitoring plan from day one.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: '$200B+', label: 'Enterprise LLM market projected by 2030 (Grand View Research 2025)' },
                  { value: '3x', label: 'Faster time-to-production for LLM systems with pre-built evaluation pipelines (internal Kovil AI data)' },
                  { value: '68%', label: 'AI engineering teams using Python + LLM APIs as their primary tech combination (Stack Overflow 2025)' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-[#E5E2D9]">
                    <p className="font-display text-3xl font-bold text-[#FF4F00] mb-1">{s.value}</p>
                    <p className="text-[#6B7280] text-sm font-sans">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── SERVICES ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What We Deliver</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Six LLM Engineering Services</h2>
            <p className="text-[#6B7280] font-sans mb-12 max-w-2xl">From first API call to production monitoring. We handle the complete LLM engineering lifecycle.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{s.title}</h3>
                  <p className="text-[#6B7280] text-sm font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── MODEL COMPARISON ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Model Selection Guide</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">GPT-4 vs Claude vs Gemini vs Llama 3</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">The right model depends on your task, data privacy requirements, and cost constraints. We run structured evals to confirm the selection before committing.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="text-left px-5 py-4 text-[#6B7280] font-semibold font-sans">Model</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Provider</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Context Window</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Key Strength</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Speed</th>
                    <th className="text-left px-5 py-4 text-[#FF4F00] font-semibold font-sans">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {models.map((m, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-5 py-4 font-bold text-[#0A0A0A] font-sans">{m.name}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{m.provider}</td>
                      <td className="px-5 py-4 font-mono text-[#4B4B4B]">{m.contextWindow}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{m.strength}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{m.speed}</td>
                      <td className="px-5 py-4 text-[#16a34a] font-medium font-sans">{m.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── MID CTA ── */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Not Sure Which Model?</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">We scope the right LLM stack for your use case. Free.</h2>
                <p className="text-[#A09A91] font-sans mt-2">Model selection, architecture review, and delivery scoping in one call.</p>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans whitespace-nowrap">
                Book a Free Architecture Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1E1E1E]" />

        {/* ── FINE-TUNING ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Fine-Tuning</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">When to Fine-Tune vs When to Use RAG</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Fine-tuning and RAG solve different problems. Most teams that ask about fine-tuning actually need RAG first.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-[#E5E2D9] p-8">
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-4">Use RAG when...</h3>
                <ul className="space-y-3">
                  {['You need answers from a specific knowledge base', 'Your data changes frequently', 'You need citations and source traceability', 'You want to avoid training costs', 'You need to be live in 3-6 weeks'].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B4B4B] font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-[#E5E2D9] p-8">
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-4">Fine-tune when...</h3>
                <ul className="space-y-3">
                  {['You need consistent style, tone, or output format', 'Your domain has highly specialized vocabulary', 'You need to reduce prompt length significantly', 'Latency is critical and RAG adds too much overhead', 'You need the model to follow complex task-specific instructions reliably'].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4B4B4B] font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── CASE STUDY ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Case Study — Mortgage / FinTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl">LLM-Powered Document Classification Platform for Secondary Mortgage Market</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[{ stat: '2-Phase', label: 'AI platform delivered end-to-end' }, { stat: 'Auto', label: 'document classification at intake' }, { stat: '14 days', label: 'to first production shipment' }].map((s, i) => (
                  <div key={i}><p className="font-display text-3xl font-bold text-[#FF4F00] mb-1">{s.stat}</p><p className="text-[#A09A91] text-sm font-sans">{s.label}</p></div>
                ))}
              </div>
              <Link href="/case-studies/secondary-mortgage-document-platform" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Full Case Study <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── FAQs ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">FAQs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Common Questions About LLM Development</h2>
            <div className="divide-y divide-[#E5E2D9]">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="py-7">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── RELATED ── */}
        <section className="py-12 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4 font-sans">Related Services</p>
            <div className="flex flex-wrap gap-4">
              {[{ href: '/rag-pipeline-development', label: 'RAG Pipeline Development' }, { href: '/ai-agent-development', label: 'AI Agent Development' }, { href: '/openai-integration', label: 'OpenAI Integration' }, { href: '/hire/llm-engineer', label: 'Hire LLM Engineers' }, { href: '/hire/generative-ai-developer', label: 'Hire GenAI Developers' }].map(l => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-[#FF4F00] font-semibold hover:underline font-sans text-sm">{l.label} <ChevronRight className="w-3.5 h-3.5" /></Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">From LLM Idea to Production System.</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Model selection, integration, evaluation, fine-tuning, and LLMOps. Fixed-price delivery.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Free LLM Architecture Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}

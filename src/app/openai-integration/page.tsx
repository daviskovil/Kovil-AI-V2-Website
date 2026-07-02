import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpenAI Integration | GPT-4 API Integration Experts | Kovil AI',
  description: 'Kovil AI integrates OpenAI GPT-4, embeddings, DALL-E, and Whisper into production applications. Streaming, fine-tuning, assistants API. Fixed-price delivery.',
  keywords: ['OpenAI integration', 'GPT-4 API integration', 'OpenAI developer', 'ChatGPT API integration', 'OpenAI API service'],
  openGraph: {
    title: 'OpenAI Integration Experts | GPT-4 API | Kovil AI',
    description: 'Production-grade OpenAI API integration. GPT-4o, embeddings, DALL-E 3, and Assistants API.',
    url: 'https://kovil.ai/openai-integration',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/tech-openai-integration.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'OpenAI Integration | Kovil AI', description: 'Production OpenAI API integration done right.' },
  alternates: { canonical: 'https://kovil.ai/openai-integration' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specialising in OpenAI API integration.', address: { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }, contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'OpenAI Integration', item: 'https://kovil.ai/openai-integration' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'OpenAI API Integration', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade OpenAI API integration including GPT-4o, embeddings, DALL-E 3, Assistants API, and fine-tuning.', serviceType: 'OpenAI Integration', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What OpenAI APIs do you integrate?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate the full OpenAI API suite: Chat Completions (GPT-4o, GPT-4o mini), Embeddings (text-embedding-3-large and text-embedding-3-small), DALL-E 3 for image generation, Whisper for transcription, and the Assistants API with persistent threads, file search, and code interpreter tools.' } },
    { '@type': 'Question', name: 'What is the difference between GPT-4o and GPT-4o mini?', acceptedAnswer: { '@type': 'Answer', text: 'GPT-4o is OpenAI\'s most capable multimodal model, handling text, images, audio, and video inputs. GPT-4o mini is a smaller, much faster, and more cost-efficient version designed for high-volume tasks where the quality difference is acceptable. For most production applications, we use GPT-4o mini for common tasks and route complex or sensitive requests to GPT-4o.' } },
    { '@type': 'Question', name: 'How do you handle OpenAI API rate limits in production?', acceptedAnswer: { '@type': 'Answer', text: 'We implement exponential backoff retry logic, request queuing with BullMQ or Celery, token counting before requests to avoid oversized calls, and proper error handling for rate limit responses. For high-volume applications we also implement prompt caching and response caching to reduce API calls.' } },
    { '@type': 'Question', name: 'Can you implement streaming responses from GPT-4?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Streaming is essential for any user-facing chat or generation interface. We implement Server-Sent Events on the backend and proper streaming response parsing on the frontend, with graceful handling of connection drops, partial responses, and client disconnection.' } },
    { '@type': 'Question', name: 'Should I use the Assistants API or build my own conversation management?', acceptedAnswer: { '@type': 'Answer', text: 'The Assistants API is convenient for rapid prototyping and works well when you need built-in file search, code interpreter, and persistent threads. For production applications that require full observability, custom context management, and no vendor lock-in on conversation state, we typically recommend building your own conversation layer.' } },
    { '@type': 'Question', name: 'Can you fine-tune GPT-4o on our proprietary data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. OpenAI supports fine-tuning for GPT-4o mini and other models via their fine-tuning API. We handle dataset construction, training job management, evaluation of the fine-tuned model, and deployment. Fine-tuning is best for teaching the model a specific format, style, or domain vocabulary rather than new knowledge (use RAG for that).' } },
    { '@type': 'Question', name: 'How do you manage OpenAI API costs at scale?', acceptedAnswer: { '@type': 'Answer', text: 'We implement: response caching for identical or near-identical requests, prompt caching using OpenAI\'s prompt caching feature, model routing that uses GPT-4o mini for simple tasks and reserves GPT-4o for complex ones, token budgeting per user or session, and real-time cost monitoring with alerting for anomalies.' } },
    { '@type': 'Question', name: 'What production safeguards do you add to OpenAI integrations?', acceptedAnswer: { '@type': 'Answer', text: 'Structured output enforcement to prevent format failures, content moderation using OpenAI\'s moderation endpoint, retry logic with backoff, token and request budget limits per user, PII detection before sending to the API, comprehensive logging of all prompts and completions for debugging and audit, and graceful fallback behavior when the API is unavailable.' } },
  ],
}

const openaiModels = [
  { model: 'GPT-4o', useCase: 'Complex reasoning, vision, coding', strength: 'Best overall quality, multimodal', routing: 'Complex, high-stakes tasks' },
  { model: 'GPT-4o mini', useCase: 'Classification, summarisation, chat', strength: 'Fast, low cost, high volume', routing: 'Everyday tasks at scale' },
  { model: 'text-embedding-3-large', useCase: 'RAG, semantic search', strength: 'Highest retrieval quality', routing: 'Production RAG pipelines' },
  { model: 'text-embedding-3-small', useCase: 'High-volume embedding tasks', strength: 'Good quality, lower cost', routing: 'Cost-sensitive search' },
  { model: 'DALL-E 3', useCase: 'Image generation', strength: 'Highest quality, prompt adherence', routing: 'All image generation tasks' },
  { model: 'Whisper', useCase: 'Audio transcription', strength: 'Multilingual, highly accurate', routing: 'Voice and audio workloads' },
]

const integrations = [
  { title: 'Chat Completions', desc: 'Production-grade GPT-4o integration with streaming, structured outputs, function calling, and cost monitoring.' },
  { title: 'Embeddings API', desc: 'High-quality text embeddings for RAG pipelines, semantic search, and document similarity systems.' },
  { title: 'Assistants API', desc: 'Persistent threads, file search over your documents, and code interpreter for data analysis tasks.' },
  { title: 'Fine-Tuning API', desc: 'Domain-specific fine-tuning on GPT-4o mini with dataset construction, training, and evaluation.' },
  { title: 'DALL-E 3', desc: 'Image generation integrated into product workflows with quality controls and content moderation.' },
  { title: 'Whisper Transcription', desc: 'Audio transcription for meeting intelligence, voice interfaces, and content indexing pipelines.' },
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
                  <span className="text-[#A09A91]">OpenAI Integration</span>
                </nav>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">OpenAI Integration</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  OpenAI API Integration That Is Built for Production, Not Demos
                </h1>
                <p className="text-[#A09A91] text-lg leading-relaxed mb-8 font-sans">
                  From streaming GPT-4o chat interfaces to RAG pipelines with embeddings and fine-tuning on your data, Kovil AI delivers production-grade OpenAI integrations with proper error handling, cost controls, and monitoring built in from the start.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['GPT-4o + GPT-4o mini', 'Streaming Responses', 'Structured Outputs', 'Cost Monitoring'].map(b => (
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
                  <Image src="/tech-openai-integration.webp" alt="OpenAI Integration by Kovil AI" width={540} height={304} className="relative rounded-2xl border border-[#1E1E1E] shadow-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-[#E5E2D9] py-5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-[#6B7280] font-sans">
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 150+ AI Systems Deployed</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Full OpenAI API Suite</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Streaming and Structured Outputs</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Cost Monitoring Built-In</span>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What We Do</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">Production OpenAI Integration Is More Than Calling the API</h2>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-4">
                  The OpenAI API call is one line of code. The production integration is 3,000 more lines: retry logic, rate limit handling, streaming response parsing, structured output validation, context window management, cost tracking, PII scrubbing before the API call, and comprehensive logging.
                </p>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-6">
                  Kovil AI has integrated every OpenAI product into production applications: Chat Completions, Embeddings, DALL-E, Whisper, Assistants API, and fine-tuning. We know where they break and how to build around their limitations.
                </p>
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Kovil AI's approach</p>
                  <p className="text-[#A09A91] text-sm font-sans leading-relaxed">We build cost monitoring and rate limit management into every OpenAI integration from day one. Most teams discover they need these after their first surprise API bill or production outage. We prevent both.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: '3M+', label: 'Developers and organisations now using OpenAI APIs in production (OpenAI 2025)' },
                  { value: '60%', label: 'AI engineering projects that start on OpenAI before diversifying to other providers' },
                  { value: '15x', label: 'Cost difference between GPT-4o mini and GPT-4o — model routing reduces spend significantly' },
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

        {/* ── INTEGRATIONS ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Full API Suite</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Every OpenAI API, Production-Ready</h2>
            <p className="text-[#6B7280] font-sans mb-12 max-w-2xl">We integrate the complete OpenAI platform, not just the chat endpoint.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#FF4F00] mb-4" />
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{s.title}</h3>
                  <p className="text-[#6B7280] text-sm font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── MODEL TABLE ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Model Selection Guide</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Which OpenAI Model for Which Task?</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Routing requests to the right model is one of the most impactful performance and cost decisions in any OpenAI integration.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="text-left px-5 py-4 text-[#6B7280] font-semibold font-sans">Model</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Use Case</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Key Strength</th>
                    <th className="text-left px-5 py-4 text-[#FF4F00] font-semibold font-sans">Route Here When...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {openaiModels.map((m, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-5 py-4 font-bold text-[#0A0A0A] font-sans">{m.model}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{m.useCase}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{m.strength}</td>
                      <td className="px-5 py-4 text-[#16a34a] font-medium font-sans">{m.routing}</td>
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
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Ship Faster</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">OpenAI integration done right in 2 to 4 weeks.</h2>
                <p className="text-[#A09A91] font-sans mt-2">Streaming, cost controls, structured outputs, and monitoring included.</p>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans whitespace-nowrap">
                Start My Integration <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1E1E1E]" />

        {/* ── PRODUCTION SAFEGUARDS ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Production Safeguards</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">What Every Production OpenAI Integration Needs</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Most teams add these after their first incident. We build them in from the start.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Retry with Exponential Backoff', detail: 'Handles rate limits and transient errors without cascading failures' },
                { title: 'Structured Output Validation', detail: 'Enforces JSON schema on every response so downstream code never breaks on malformed output' },
                { title: 'PII Scrubbing', detail: 'Strips personally identifiable information before it reaches OpenAI servers' },
                { title: 'Cost Monitoring and Alerting', detail: 'Real-time token tracking with budget alerts before spend exceeds thresholds' },
                { title: 'Prompt Versioning', detail: 'Tracks prompt changes with rollback capability and regression testing on updates' },
                { title: 'Graceful Fallback', detail: 'Degrades gracefully to cached responses or simplified models when the API is unavailable' },
              ].map((d, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl border border-[#E5E2D9] p-5">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0A0A0A] font-sans mb-1">{d.title}</p>
                    <p className="text-[#6B7280] text-sm font-sans">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── FAQs ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">FAQs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Common Questions About OpenAI Integration</h2>
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
              {[{ href: '/langchain-developer', label: 'LangChain Development' }, { href: '/rag-pipeline-development', label: 'RAG Pipeline Development' }, { href: '/ai-agent-development', label: 'AI Agent Development' }, { href: '/hire/generative-ai-developer', label: 'Hire GenAI Developers' }, { href: '/hire/llm-engineer', label: 'Hire LLM Engineers' }].map(l => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-[#FF4F00] font-semibold hover:underline font-sans text-sm">{l.label} <ChevronRight className="w-3.5 h-3.5" /></Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">OpenAI Integration Built to Last in Production.</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Streaming, cost controls, structured outputs, and monitoring. Fixed-price delivery.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Free Integration Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}

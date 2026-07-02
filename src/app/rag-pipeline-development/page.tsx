import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'RAG Pipeline Development | Retrieval-Augmented Generation Experts | Kovil AI',
  description: 'Kovil AI builds production RAG pipelines that ground LLM responses in your proprietary data. Reduce hallucinations. RAGAS evaluation included. Fixed-price delivery.',
  keywords: ['RAG pipeline development', 'retrieval augmented generation', 'RAG system', 'vector database integration', 'LLM grounding'],
  openGraph: {
    title: 'RAG Pipeline Development | Kovil AI',
    description: 'Production RAG pipelines that ground your LLM in real data. Reduce hallucinations. Ship in 3-6 weeks.',
    url: 'https://kovil.ai/rag-pipeline-development',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/tech-rag-pipeline.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'RAG Pipeline Development | Kovil AI', description: 'Production RAG pipelines grounded in your data.' },
  alternates: { canonical: 'https://kovil.ai/rag-pipeline-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specialising in RAG pipeline development.', address: { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }, contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'RAG Pipeline Development', item: 'https://kovil.ai/rag-pipeline-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'RAG Pipeline Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production retrieval-augmented generation pipelines that ground LLM responses in proprietary data, reducing hallucinations and improving accuracy.', serviceType: 'RAG Pipeline Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is RAG (Retrieval-Augmented Generation)?', acceptedAnswer: { '@type': 'Answer', text: 'RAG is an architecture that combines a retrieval system with a large language model. Instead of relying solely on the LLM\'s training data, RAG retrieves relevant documents from your own knowledge base at query time and provides them as context. The result is responses grounded in your specific information with dramatically lower hallucination rates.' } },
    { '@type': 'Question', name: 'Why does my LLM application need RAG?', acceptedAnswer: { '@type': 'Answer', text: 'Without RAG, LLMs answer from their training data, which is outdated, generic, and knows nothing about your company or products. RAG grounds every response in your knowledge base, making the AI accurate, current, and proprietary to your business.' } },
    { '@type': 'Question', name: 'Which vector database do you recommend?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your requirements. Pinecone is our default for teams that want a fully managed solution and need to move fast. Weaviate is excellent for hybrid semantic and keyword search. pgvector is the right call when you are already on PostgreSQL and want minimal infrastructure complexity.' } },
    { '@type': 'Question', name: 'How do you reduce hallucinations in a RAG system?', acceptedAnswer: { '@type': 'Answer', text: 'Grounding responses in retrieved context is the primary mechanism. We also add citation enforcement (the LLM must cite its source chunk), answer relevancy checks with RAGAS, document re-ranking before generation, and a fallback behavior that returns "I don\'t know" when retrieval quality is too low.' } },
    { '@type': 'Question', name: 'What types of data can you build RAG pipelines over?', acceptedAnswer: { '@type': 'Answer', text: 'PDFs, Word documents, HTML, Confluence wikis, Notion databases, SQL databases, CSV files, code repositories, and Slack histories. Most enterprise RAG projects require unifying multiple heterogeneous data sources into a single retrieval layer.' } },
    { '@type': 'Question', name: 'How do you evaluate whether a RAG system is working well?', acceptedAnswer: { '@type': 'Answer', text: 'We use RAGAS to measure faithfulness (is the answer grounded in the retrieved context?), answer relevancy (does it address the question?), and context recall (did retrieval find the right chunks?). We build the evaluation pipeline before the RAG system so quality is measurable from iteration one.' } },
    { '@type': 'Question', name: 'How long does it take to build a production RAG pipeline?', acceptedAnswer: { '@type': 'Answer', text: 'A single-source RAG system can be built and deployed in 3 to 6 weeks. Multi-source RAG with hybrid search, re-ranking, and custom evaluation typically takes 6 to 10 weeks.' } },
    { '@type': 'Question', name: 'Can RAG work with structured data like databases or spreadsheets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For structured data we use text-to-SQL for database querying, metadata filtering on structured fields, and hybrid pipelines that combine structured lookups with semantic search over unstructured text.' } },
  ],
}

const vectorDbs = [
  { name: 'Pinecone', scalability: 'Very High', latency: 'Very Low', hybridSearch: 'Good', managed: 'Fully Managed', bestFor: 'Production at scale, fast time-to-value' },
  { name: 'Weaviate', scalability: 'High', latency: 'Low', hybridSearch: 'Excellent', managed: 'Managed + Self-host', bestFor: 'Hybrid semantic and keyword search' },
  { name: 'Qdrant', scalability: 'High', latency: 'Very Low', hybridSearch: 'Excellent', managed: 'Managed + Self-host', bestFor: 'High-performance custom deployments' },
  { name: 'pgvector', scalability: 'Medium', latency: 'Medium', hybridSearch: 'Full SQL filters', managed: 'Self-host', bestFor: 'Teams already on PostgreSQL' },
  { name: 'Chroma', scalability: 'Low-Medium', latency: 'Fast (local)', hybridSearch: 'Basic', managed: 'Self-host only', bestFor: 'Development and prototyping' },
]

const ragLayers = [
  { num: '01', title: 'Document Ingestion', desc: 'Parsing PDFs, Word docs, HTML, databases, and APIs into clean text. Handling tables, images, and mixed-format documents properly.' },
  { num: '02', title: 'Intelligent Chunking', desc: 'Splitting documents into chunks that preserve semantic meaning. Wrong chunk sizes destroy retrieval quality. We tune this per document type.' },
  { num: '03', title: 'Embedding and Indexing', desc: 'Converting chunks to vector embeddings using the right model for your domain, then indexing with proper metadata into the vector store.' },
  { num: '04', title: 'Retrieval and Re-ranking', desc: 'Semantic search retrieves candidates. A cross-encoder re-ranker re-orders by relevancy before passing context to the LLM.' },
  { num: '05', title: 'LLM Generation with Citation', desc: 'The LLM generates answers grounded in retrieved context, with mandatory source citations so every claim is traceable.' },
  { num: '06', title: 'RAGAS Evaluation Pipeline', desc: 'Automated evaluation measuring faithfulness, answer relevancy, and context recall on every deployment and regression.' },
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
                  <span className="text-[#A09A91]">RAG Pipeline Development</span>
                </nav>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">RAG Pipeline Development</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  RAG Pipelines That Ground Your LLM in Real Data
                </h1>
                <p className="text-[#A09A91] text-lg leading-relaxed mb-8 font-sans">
                  Your LLM does not know your documents, products, or internal knowledge. RAG fixes that. Kovil AI builds production retrieval-augmented generation pipelines that cut hallucinations, ground every response in your data, and include RAGAS evaluation from day one.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Pinecone, Weaviate, Qdrant', 'RAGAS Evaluation Built-In', 'Hybrid Search', '3-6 Week Delivery'].map(b => (
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
                  <Image src="/tech-rag-pipeline.webp" alt="RAG Pipeline Development by Kovil AI" width={540} height={304} className="relative rounded-2xl border border-[#1E1E1E] shadow-2xl" priority />
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
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> RAGAS Evaluation on Every Build</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Multi-Source RAG Specialists</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Hybrid Search Architecture</span>
            </div>
          </div>
        </section>

        {/* ── WHAT IS RAG ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What is RAG?</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">How Retrieval-Augmented Generation Works</h2>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-4">
                  RAG connects a large language model to a retrieval system over your own data. At query time, the system retrieves the most relevant chunks from your knowledge base and provides them as context to the LLM. The model then generates a response grounded in that specific retrieved information rather than its general training data.
                </p>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-6">
                  The result is AI that knows your documents, policies, and products, and can answer questions about them accurately. Every answer traces back to a source. Hallucinations drop sharply because the model works from retrieved facts, not from memory.
                </p>
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Kovil AI's approach</p>
                  <p className="text-[#A09A91] text-sm font-sans leading-relaxed">We build the RAGAS evaluation pipeline before the RAG system itself. Quality must be measurable from the first iteration. Every production RAG pipeline includes automated faithfulness, relevancy, and context recall scoring baked into the CI pipeline.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: '60-80%', label: 'Reduction in LLM hallucination rate with properly built RAG vs no grounding (Stanford AI Lab)' },
                  { value: '$4.4B', label: 'Enterprise RAG market size projected by 2027 (Grand View Research)' },
                  { value: '3x', label: 'Higher answer accuracy when RAG includes mandatory source citation enforcement' },
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

        {/* ── 6 LAYERS ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Pipeline Architecture</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">The Six Layers of a Production RAG Pipeline</h2>
            <p className="text-[#6B7280] font-sans mb-12 max-w-2xl">Most RAG demos implement only retrieval and generation. Production systems require all six layers, each engineered carefully.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ragLayers.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E2D9] p-6">
                  <div className="font-display text-3xl font-bold text-[#FF4F00] opacity-40 mb-3">{c.num}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{c.title}</h3>
                  <p className="text-[#6B7280] text-sm font-sans leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── VECTOR DB TABLE ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Vector Database Selection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Which Vector Database Is Right for Your RAG System?</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Database selection impacts retrieval quality, latency, and operational overhead significantly. Here is how the leading options compare.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="text-left px-5 py-4 text-[#6B7280] font-semibold font-sans">Database</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Scalability</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Latency</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Hybrid Search</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Managed</th>
                    <th className="text-left px-5 py-4 text-[#FF4F00] font-semibold font-sans">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {vectorDbs.map((db, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-5 py-4 font-bold text-[#0A0A0A] font-sans">{db.name}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{db.scalability}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{db.latency}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{db.hybridSearch}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{db.managed}</td>
                      <td className="px-5 py-4 text-[#16a34a] font-medium font-sans">{db.bestFor}</td>
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
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Stop Hallucinating</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ground your LLM in your own data in 3 to 6 weeks.</h2>
                <p className="text-[#A09A91] font-sans mt-2">RAGAS evaluation included. Fixed-price. No delivery risk.</p>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans whitespace-nowrap">
                Scope My RAG Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1E1E1E]" />

        {/* ── DATA SOURCES ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Supported Data Sources</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">We Build RAG Over Any Data Source</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Most enterprise RAG projects need to unify multiple data sources. We design retrieval architectures that handle heterogeneous data cleanly.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { source: 'PDF Documents', detail: 'Contracts, research papers, manuals, reports, including tables and multi-column layouts' },
                { source: 'Word and Office Files', detail: 'DOCX, PPTX, XLSX with proper structure extraction and table handling' },
                { source: 'Web and HTML Content', detail: 'Internal wikis, product documentation sites, support knowledge bases' },
                { source: 'Confluence and Notion', detail: 'Workspace documentation with page hierarchy and metadata preserved' },
                { source: 'SQL Databases', detail: 'Text-to-SQL for structured data with schema-aware query generation' },
                { source: 'Code Repositories', detail: 'GitHub, GitLab code search and documentation with AST-aware chunking' },
              ].map((d, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl border border-[#E5E2D9] p-5">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0A0A0A] font-sans mb-1">{d.source}</p>
                    <p className="text-[#6B7280] text-sm font-sans">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── CASE STUDY ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Case Study — Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl">RAG over 15 Years of Contract Precedents for a 60-Attorney Law Firm</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[{ stat: '94%', label: 'clause analysis automated' }, { stat: '78%', label: 'faster review time' }, { stat: '$380K', label: 'partner hours reclaimed annually' }].map((s, i) => (
                  <div key={i}><p className="font-display text-3xl font-bold text-[#FF4F00] mb-1">{s.stat}</p><p className="text-[#A09A91] text-sm font-sans">{s.label}</p></div>
                ))}
              </div>
              <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Full Case Study <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── FAQs ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">FAQs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Common Questions About RAG Pipeline Development</h2>
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
              {[{ href: '/ai-agent-development', label: 'AI Agent Development' }, { href: '/llm-development', label: 'LLM Development' }, { href: '/langchain-developer', label: 'LangChain Development' }, { href: '/hire/llm-engineer', label: 'Hire LLM Engineers' }, { href: '/hire/ai-engineer', label: 'Hire AI Engineers' }].map(l => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-[#FF4F00] font-semibold hover:underline font-sans text-sm">{l.label} <ChevronRight className="w-3.5 h-3.5" /></Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Your Knowledge Base. Your LLM. Zero Hallucinations.</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed-price RAG pipeline delivery with RAGAS evaluation built in from day one.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Free RAG Architecture Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}

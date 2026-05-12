'use client'

import { motion } from "motion/react"
import { ArrowRight, ChevronRight, CheckCircle2, Clock, BookOpen, Cpu, Database, Shield, Layers, Zap } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const questions = [
  { n: "01", title: "What is the single job this agent does?", body: "Write it in one sentence. 'Surface relevant product recommendations based on a user's viewing history and current search query.' If you need two sentences, you are scoping two agents. This sentence becomes the foundation of every design decision that follows — your system prompt, your evaluation criteria, your escalation policy." },
  { n: "02", title: "What type of use case is this — Q&A, action-taking, or multi-step reasoning?", body: "The answer determines your orchestration layer. Q&A agents (retrieving and synthesising information) work well with Agent Builder's built-in Vertex AI Search integration. Action-taking agents (writing to systems, triggering workflows) need Reasoning Engine with tool plugins. Multi-step reasoning agents need Reasoning Engine with a ReAct or chain-of-thought loop." },
  { n: "03", title: "Which Gemini model fits this use case?", body: "Gemini 2.0 Flash handles 90% of enterprise agent tasks at 10x lower cost than Pro. Pro is justified for complex multi-document synthesis, ambiguous long-form reasoning, and tasks where Flash consistently fails your evaluation test cases. Ultra adds native multimodal reasoning at the highest capability tier. Always benchmark Flash first against your eval dataset before paying for Pro." },
  { n: "04", title: "Agent Builder, Reasoning Engine, or direct Vertex AI SDK?", body: "Agent Builder: right for document-grounded Q&A agents with Vertex AI Search integration and a managed runtime. Reasoning Engine: right for multi-agent systems, LangChain/LangGraph workflows, and custom tool orchestration in Python. Direct SDK: right only for simple, stateless generation tasks where you don't need a persistent agent loop. Most production agents live on Agent Builder or Reasoning Engine." },
  { n: "05", title: "What is the data access pattern — RAG, fine-tuning, or grounding?", body: "RAG via Vertex AI Search: right for agents grounded in your own documents, policies, and knowledge bases. Fine-tuning: right when the model needs to adopt a specific vocabulary, tone, or domain behaviour — not to 'know facts'. Grounding with Google Search: right when the agent needs current, publicly available information. You can combine all three, but start with one. RAG is the right default for most enterprise agents." },
  { n: "06", title: "What are all the data sources, and how will they be indexed?", body: "List every source: PDFs in Cloud Storage, BigQuery tables, website URLs, API responses. For each, determine the ingestion path: Document AI for complex PDFs, Vertex AI Search datastore import for structured data, scheduled pipelines via Dataflow or Cloud Composer for refreshing data. Each data source needs an indexing strategy and a refresh cadence before build starts." },
  { n: "07", title: "What are the IAM and security requirements?", body: "Define: which service accounts the agent uses (never user credentials), which GCP services are in scope for VPC Service Controls, whether CMEK is required for data-at-rest in BigQuery and Cloud Storage, whether DLP must scan agent outputs for PII before returning to users, and the Cloud Audit Logs retention policy. These decisions are infrastructure-level and must be made before deployment architecture is finalised." },
  { n: "08", title: "What are the latency requirements?", body: "Conversational agents typically need <2 second P95 response latency. Background processing agents may tolerate 30+ seconds. Latency requirements determine: whether you need streaming responses (Gemini supports token streaming), whether RAG retrieval must be cached (Memorystore), whether you need regional endpoints, and whether you can afford multi-step reasoning chains or need single-pass responses." },
  { n: "09", title: "What is the human-in-the-loop policy?", body: "Define the conditions that require human review or approval: actions above a monetary threshold, content flagged by the safety filter, user requests that the agent cannot resolve with high confidence, and regulated actions (medical advice, legal counsel, financial recommendations). For each condition, define the escalation path — Cloud Tasks queue for async review, real-time human agent transfer, or automatic deflection with an explanation." },
  { n: "10", title: "How will you evaluate this agent before go-live?", body: "You need a minimum of 150 representative test cases: input + expected output + pass/fail criteria. The evaluation framework should run automatically on every deployment using Vertex AI Evaluation Service or a custom pipeline in Cloud Build. Define your go-live threshold: 'agent must achieve ≥85% correct responses on the eval dataset with zero critical failures'. Without this, you do not know your error rate until users find it." },
  { n: "11", title: "What is the monitoring strategy post-launch?", body: "Define upfront: which metrics you will track (response latency, token spend, safety filter trigger rate, user escalation rate, thumbs up/down feedback), where they will be stored (BigQuery via Cloud Logging export, Cloud Monitoring custom metrics), and what alert thresholds will trigger PagerDuty or Cloud Monitoring notifications. The cost of retroactive monitoring instrumentation is 5x the cost of doing it during build." },
  { n: "12", title: "What is the cost budget, and what is the rollback plan?", body: "Estimate token volume: (average query tokens + average response tokens) × expected daily queries × 30. For Gemini 2.0 Flash, multiply by the current per-token rate and add ~20% for RAG retrieval overhead. Define the rollback trigger (error rate above X, quality score below Y, cost above Z per day) and the rollback procedure — Cloud Run revision rollback is instant, Agent Builder version rollback requires re-pointing the endpoint." },
]

const takeaways = [
  "Gemini 2.0 Flash handles 90% of enterprise agent tasks at a fraction of Pro pricing — benchmark it first before committing to a more expensive model.",
  "Agent Builder is the right starting point for document-grounded agents; Reasoning Engine is for multi-agent and custom orchestration workflows.",
  "RAG via Vertex AI Search is the correct default retrieval strategy for most enterprise agents — fine-tuning is for domain style, not knowledge.",
  "VPC Service Controls, IAM least privilege, and CMEK are non-negotiable from day one for regulated industries — retrofitting them is expensive.",
  "Build your evaluation dataset of 150+ test cases in parallel with the agent, not after — go-live without an eval pipeline means unknown error rates.",
  "Define latency, escalation, monitoring, and rollback requirements before a line of code is written — they are architecture inputs, not afterthoughts.",
]

export default function ArchitectFirstVertexAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/vertex-ai/playbook" className="hover:text-foreground transition-colors">Playbook</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Architect Your First Agent</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: G_BLUE, background: `${G_BLUE}15` }}>Implementation Guide</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />10 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          How to architect your first Vertex AI agent: A practitioner&apos;s checklist
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Most first Vertex AI agents fail not because of bad code, but because of bad architecture decisions made in the first week. Model selection, orchestration layer, retrieval strategy, security posture — these 12 questions determine whether you ship a production agent or an expensive demo. Answer them before you write a line of code.
        </p>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-16">

          {/* Section 1 — The 12 Questions */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Before you build: the 12 questions</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Answer every question below before opening the Vertex AI console. These answers become the architecture specification for your agent — they inform your system prompt, your Gemini model selection, your Vertex AI Search index configuration, your IAM setup, and your evaluation pipeline.
            </p>
            <div className="space-y-4">
              {questions.map(item => (
                <div key={item.n} className="flex gap-5 p-5 rounded-2xl border border-border bg-card hover:border-blue-500/30 transition-colors">
                  <span className="font-display font-black text-2xl shrink-0 leading-none mt-1" style={{ color: G_BLUE }}>{item.n}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Gemini model selection */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Choosing the right Gemini model</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Model selection is the most consequential cost decision in a Vertex AI agent build. The price difference between Flash and Pro is roughly 10x. Here is the decision framework we use on every engagement.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Factor</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: G_BLUE }}>Gemini 2.0 Flash</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Gemini 1.5 Pro</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Gemini Ultra</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Best for", "90% of enterprise agent tasks", "Complex reasoning, long docs", "Multimodal, highest capability"],
                    ["Context window", "1M tokens", "2M tokens", "1M tokens"],
                    ["Tool calling", "Full support", "Full support", "Full support"],
                    ["Relative cost", "Lowest (~10x cheaper than Pro)", "Mid-tier", "Highest"],
                    ["Latency", "Fast (~1–2s typical)", "Moderate (~3–5s typical)", "Moderate–slow"],
                    ["Multimodal", "Images + text", "Images + text + video", "Images + text + video (best)"],
                    ["Recommended for", "RAG agents, Q&A, tool use", "Legal/financial doc analysis", "Vision-heavy workflows"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-3 px-4 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl p-5 border" style={{ background: `${G_BLUE}08`, borderColor: `${G_BLUE}25` }}>
              <p className="text-sm font-semibold mb-2" style={{ color: G_BLUE }}>Our recommendation</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Start every new agent on Gemini 2.0 Flash. Build your evaluation dataset. Run Flash against it. Only upgrade to Pro if Flash fails more than 10% of your critical test cases. In our experience, Flash passes 85–90% of enterprise agent evaluations, making the 10x cost premium of Pro unjustified for most use cases.</p>
            </div>
          </div>

          {/* Section 3 — Agent Builder vs Reasoning Engine */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Agent Builder vs Reasoning Engine: when to use which</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is the most common architecture confusion in new Vertex AI projects. Both are production-grade managed runtimes for Gemini-powered agents — but they serve very different use cases.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  icon: Layers,
                  title: "Vertex AI Agent Builder",
                  when: "Choose when:",
                  points: [
                    "You need a document-grounded Q&A agent with Vertex AI Search integration",
                    "The agent's knowledge base is in Cloud Storage (PDFs, Docs, web pages)",
                    "You want managed infrastructure — Google handles scaling, availability, updates",
                    "You don't need custom Python orchestration logic",
                    "You want built-in conversation history and session management",
                  ],
                  note: "Agent Builder is the fastest path from zero to production for RAG agents. Most enterprise knowledge management, customer support, and document Q&A agents belong here.",
                },
                {
                  icon: Cpu,
                  title: "Reasoning Engine",
                  when: "Choose when:",
                  points: [
                    "You need multi-agent orchestration (LangChain, LangGraph, custom loops)",
                    "The agent must call external APIs and take actions in backend systems",
                    "You need custom tool plugins that go beyond document retrieval",
                    "You are building a multi-step reasoning pipeline with conditional logic",
                    "You need to port an existing LangChain agent to a managed GCP runtime",
                  ],
                  note: "Reasoning Engine is for code-first engineers who need control. It executes your Python application in a managed environment with Vertex AI model access, logging, and tracing built in.",
                },
              ].map(item => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${G_BLUE}15` }}>
                    <item.icon className="h-5 w-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold text-base mb-3">{item.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-muted-foreground">{item.when}</p>
                  <ul className="space-y-1.5 mb-4">
                    {item.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic leading-relaxed border-t border-border pt-3">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — RAG vs Fine-Tuning */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">RAG vs fine-tuning: the decision framework</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The RAG vs fine-tuning question is one of the most misunderstood decisions in enterprise AI. The answer almost always depends on whether you are solving a knowledge problem or a behaviour problem.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  label: "Use RAG when",
                  color: "#34A853",
                  items: [
                    "The agent needs to answer questions about your specific documents, policies, or data",
                    "Your knowledge base changes frequently (product catalogue, support articles, regulations)",
                    "You need the agent to cite sources or show where an answer came from",
                    "You are building a document Q&A, knowledge management, or support agent",
                    "You need to get to production quickly — RAG requires no training time",
                  ],
                },
                {
                  label: "Use fine-tuning when",
                  color: G_BLUE,
                  items: [
                    "The model needs to adopt your brand's specific writing style or tone consistently",
                    "The agent handles a narrow, well-defined domain with specialised vocabulary (legal, medical, financial)",
                    "You have 1,000+ high-quality labelled training examples",
                    "The base model consistently fails to follow your output format requirements",
                    "You have already validated RAG performance and it is insufficient for your use case",
                  ],
                },
                {
                  label: "Never use fine-tuning to",
                  color: "#EA4335",
                  items: [
                    "Teach the model new facts — use RAG instead; fine-tuned facts are unreliable and stale",
                    "Fix a poorly written system prompt — improving the prompt is always cheaper and faster",
                    "Substitute for RAG when your knowledge base changes more than monthly",
                  ],
                },
              ].map(section => (
                <div key={section.label} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-sm font-semibold mb-3" style={{ color: section.color }}>{section.label}</p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="shrink-0 mt-0.5" style={{ color: section.color }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed p-4 rounded-xl border border-border bg-muted/20">
              <strong className="text-foreground">Cost note:</strong> Fine-tuning a Gemini model on Vertex AI costs roughly $3–8 per 1,000 training examples and requires a training job that takes 2–4 hours. RAG with Vertex AI Search costs approximately $0.40 per 1,000 queries for retrieval. For most enterprise use cases with evolving knowledge bases, RAG delivers better ROI.
            </p>
          </div>

          {/* Section 5 — Security Checklist */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Security checklist: non-negotiables from day one</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These five security controls are significantly cheaper to implement at the start of a project than to retrofit after go-live. For regulated industries — financial services, healthcare, government — they are not optional.
            </p>
            <div className="space-y-4">
              {[
                { icon: Shield, title: "VPC Service Controls", body: "Create a VPC Service Controls perimeter that encompasses Vertex AI, BigQuery, Cloud Storage, and Secret Manager. Any API call crossing the perimeter is blocked. This prevents data exfiltration even from compromised service accounts. Configure your access policy before any data enters your GCP project." },
                { icon: Shield, title: "IAM least privilege", body: "The Vertex AI service account gets only the roles it needs: roles/aiplatform.user for model calls, roles/bigquery.dataViewer on specific datasets, roles/storage.objectViewer on specific buckets. Never use roles/owner or roles/editor on a production service account. Run IAM Recommender quarterly to remove unused permissions." },
                { icon: Shield, title: "Customer-Managed Encryption Keys (CMEK)", body: "For regulated data in BigQuery datasets and Cloud Storage buckets, configure CMEK via Cloud KMS. This gives you control over the encryption key lifecycle — you can revoke access to data by disabling the key, independent of Google's infrastructure. Required for most financial services and healthcare workloads." },
                { icon: Shield, title: "Cloud Audit Logs", body: "Enable Data Access audit logs for Vertex AI, BigQuery, and Cloud Storage — not just Admin Activity logs. Forward all audit logs to a locked Cloud Storage bucket (retention lock enabled) with a minimum 1-year retention period. For regulated industries, 7-year retention is standard. Audit log gaps are a common compliance finding." },
                { icon: Shield, title: "DLP for agent outputs", body: "If the agent may surface PII from your data sources in its responses, configure Cloud Data Loss Prevention (DLP) to scan agent outputs before they are returned to users. Define info types (SSN, payment card, health record ID) and configure the DLP response — de-identify, mask, or block responses containing these patterns. Especially important for agents with broad access to user data." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${G_BLUE}15` }}>
                    <item.icon className="h-5 w-5" style={{ color: G_BLUE }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border p-8" style={{ background: `${G_BLUE}06`, borderColor: `${G_BLUE}20` }}>
            <div className="flex items-center gap-2 mb-5">
              <Zap className="h-5 w-5" style={{ color: G_BLUE }} />
              <h2 className="font-display font-bold text-xl">Key takeaways</h2>
            </div>
            <div className="space-y-3">
              {takeaways.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: G_BLUE }} />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: G_BLUE }}>Continue Reading</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { pill: "Technical Deep Dive", title: "Vertex AI vs Gemini API: What changes when you build enterprise agents on GCP?", href: "/vertex-ai/playbook/vertex-ai-vs-gemini-api" },
              { pill: "Case Study", title: "From 6 hours to 17 minutes: a Vertex AI content intelligence build", href: "/vertex-ai/playbook/retail-personalisation-vertex-ai-build" },
            ].map(a => (
              <Link key={a.title} href={a.href} className="group block rounded-2xl border border-border bg-background p-5 hover:border-blue-500/40 hover:shadow-md transition-all">
                <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: G_BLUE }}>{a.pill}</span>
                <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors leading-snug">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: G_BLUE }}>2-week risk-free pilot</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build your first Vertex AI agent?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We handle the architecture decisions, configure the GCP security controls, and ship to production. Fixed price. Zero delivery risk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                <BookOpen className="mr-2 h-4 w-4" />
                View all services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

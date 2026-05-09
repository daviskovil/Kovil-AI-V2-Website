'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Clock, BookOpen, Brain, Cpu, Database, Shield } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const checklist = [
  { n: "01", title: "What is the single job this agent does?", body: "Write it in one sentence. 'Resolve customer support queries about order status and refunds.' If you need two sentences, you are scoping two agents. This sentence becomes the foundation of every design decision that follows." },
  { n: "02", title: "What data does the agent need to complete that job?", body: "List every data source: CRM records, knowledge base documents, product catalogue, order management system. For each source, identify how it will be made available — Azure AI Search index, direct API call, or Semantic Kernel plugin." },
  { n: "03", title: "Who is authorised to use this agent?", body: "Define the identity boundary. Is it internal employees only (Entra ID authentication)? External customers (Azure B2C)? Both? Access control must be designed before build, not bolted on after." },
  { n: "04", title: "What should it never do?", body: "The 'never do' list goes into your system prompt as hard constraints. Common examples: never make refund commitments above a threshold, never discuss competitor products, never access records the user is not authorised to view, never process transactions without human approval." },
  { n: "05", title: "How does it authenticate to backend systems?", body: "For internal Azure services: Managed Identity (no stored credentials — this is always the right answer in Azure). For external APIs: Azure Key Vault for secrets, never hardcoded. Define this before the build starts." },
  { n: "06", title: "What is the retrieval strategy?", body: "Three options: (1) Azure AI Search RAG — right for most document-grounded use cases; (2) Fine-tuning — right when the model needs to embody a specific style or domain vocabulary, not to 'know facts'; (3) No retrieval — right for reasoning or generation tasks with no knowledge requirement. Most enterprise agents use option 1." },
  { n: "07", title: "How do you measure success?", body: "Define your success metric before go-live, not after. Example: '65% autonomous resolution rate with CSAT ≥ 4.2/5 at 30 days post-launch.' This becomes your pilot pass/fail criterion and the benchmark for ongoing monitoring." },
  { n: "08", title: "What triggers the agent?", body: "Is it user-initiated (conversational), event-triggered (new document uploaded, new case created), or scheduled (daily report generation)? The trigger type determines whether you use Copilot Studio, a Logic App, an Azure Function, or a Semantic Kernel orchestration loop." },
  { n: "09", title: "How does it escalate to a human?", body: "Every production agent needs an escalation path. Define: the conditions that trigger escalation (complexity threshold, negative sentiment, explicit user request, agent confidence below threshold), the destination (Teams notification, CRM ticket, email), and what context is passed to the human." },
  { n: "10", title: "What is the content safety configuration?", body: "Azure AI Content Safety is on by default. Configure severity thresholds for hate, violence, sexual, and self-harm categories. For regulated industries, also configure PII detection and output filtering. Do this before UAT, not after go-live." },
  { n: "11", title: "How is PII handled?", body: "Identify PII fields that must never enter LLM context (SSNs, payment card numbers, health record IDs). Use Azure AI Content Safety PII detection to strip or mask these fields at the application layer before they reach Azure OpenAI." },
  { n: "12", title: "What is the evaluation dataset?", body: "You need a minimum of 100–200 representative test cases before go-live. Each case: input + expected output + pass/fail criteria. Build this dataset in parallel with the agent — not after it's built. Prompt Flow uses this dataset for automated evaluation on every deployment." },
  { n: "13", title: "What is the monitoring strategy?", body: "Define upfront: which metrics you'll track (response latency, token cost, quality score, escalation rate), where they'll be logged (Azure Monitor, Application Insights), and what thresholds trigger alerts. The Prompt Flow deployment dashboard handles this if configured correctly." },
  { n: "14", title: "What is the rollback plan?", body: "Azure AI Foundry Prompt Flow deployments support traffic splitting and instant rollback. Define your rollback trigger (quality score drops below X, error rate above Y) and the rollback procedure before deploying to production. Test it in staging." },
]

export default function ArchitectYourFirstAzureAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry/playbook" className="hover:text-foreground transition-colors">Playbook</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Architect Your First Agent</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Implementation Guide</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />9 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          How to architect your first Azure AI Foundry agent: A practitioner&apos;s checklist
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Most first Azure AI agents fail before a line of code is written. The architecture decisions made in the first week — orchestration layer, retrieval strategy, authentication approach — determine whether you get a working production agent or an expensive demo. Here are the 14 questions you must answer before you start.
        </p>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-16">

          {/* Section 1 */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The 3 architecture decisions that determine everything</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Before you open Azure AI Foundry, three architecture decisions must be made. Get these right, and the build is straightforward. Get them wrong, and you will rebuild from scratch in week four.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: Cpu, title: "Orchestration Layer", body: "Semantic Kernel (code-first, complex multi-step agents, Python/C#), Copilot Studio (low-code, Teams-native, bounded use cases), or direct Azure OpenAI API (simple stateless completions). Most enterprise production agents use Semantic Kernel." },
                { icon: Database, title: "Retrieval Strategy", body: "Azure AI Search RAG (right for most document-grounded use cases), fine-tuning (for domain vocabulary, not facts), or no retrieval (for pure reasoning tasks). When in doubt, start with RAG — it's easier to iterate and doesn't require retraining." },
                { icon: Shield, title: "Deployment Target", body: "Managed online endpoint via Prompt Flow (recommended — versioning, A/B testing, monitoring included), Azure Function (for event-driven stateless tasks), or Logic App (for low-code workflow integration). Most production agents should be on managed endpoints." },
              ].map(item => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${AZURE}15` }}>
                    <item.icon className="h-5 w-5" style={{ color: AZURE }} />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The single most important question callout */}
          <div className="rounded-2xl p-6 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>The most important question</p>
            <p className="text-foreground leading-relaxed font-medium">
              &ldquo;What is the single, specific job this agent will do?&rdquo; Write it in one sentence. If you need two sentences, you are scoping two agents. Build one first. Agents scoped too broadly are the single most common reason Azure AI implementations fail.
            </p>
          </div>

          {/* Section 2 — Checklist */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The 14-question pre-build checklist</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Answer every question below before writing a line of code. These answers become the specification for your agent — they inform your system prompt, your Semantic Kernel plugin design, your Azure AI Search index configuration, and your Prompt Flow evaluation pipeline.
            </p>
            <div className="space-y-4">
              {checklist.map(item => (
                <div key={item.n} className="flex gap-5 p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors">
                  <span className="font-display font-black text-2xl shrink-0 leading-none mt-1" style={{ color: AZURE }}>{item.n}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — Most common mistakes */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The 5 most common first-agent mistakes</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After building dozens of Azure AI agents in production, these are the failure patterns we see repeatedly.
            </p>
            <div className="space-y-3">
              {[
                { title: "Building a general-purpose assistant", body: "An agent that handles everything handles nothing well. One agent, one job, one well-defined scope." },
                { title: "Skipping content safety configuration", body: "Azure AI Content Safety is on by default but using default thresholds. For regulated industries, you must configure it explicitly — default thresholds are not compliance." },
                { title: "No evaluation framework before go-live", body: "Deploying without a Prompt Flow evaluation pipeline means you do not know your agent's error rate until users find it. Build the eval dataset in parallel with the agent." },
                { title: "Hardcoded prompts with no versioning", body: "A system prompt that lives in code and isn't tracked in Prompt Flow cannot be evaluated, A/B tested, or rolled back. Use Prompt Flow from day one." },
                { title: "No private networking on Azure OpenAI", body: "For any production enterprise deployment, traffic to Azure OpenAI should traverse private endpoints within your VNet — not the public internet. Configure this at the start, not when a security audit flags it." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <div className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — Orchestration deep dive */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Choosing your orchestration layer</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The orchestration layer is the single most consequential technical decision in an Azure AI agent build. Here is how to choose.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Factor</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: AZURE }}>Semantic Kernel</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Copilot Studio</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Direct API</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Best for", "Complex multi-step agents", "Teams-native, bounded use cases", "Simple stateless completions"],
                    ["Skill required", "Python / C# / Java engineers", "Power Platform users", "Any developer"],
                    ["Multi-step reasoning", "Full support", "Limited", "Manual implementation"],
                    ["Custom tool plugins", "Full support", "Limited via connectors", "Manual implementation"],
                    ["Production monitoring", "Via Prompt Flow", "Built-in analytics", "Manual via App Insights"],
                    ["Teams deployment", "Via custom bot", "Native", "Via custom bot"],
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
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: AZURE }}>Continue Reading</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { pill: "Technical Deep Dive", title: "Azure OpenAI vs OpenAI API: What changes when you deploy in Azure?", href: "/azure-ai-foundry/playbook/azure-openai-vs-openai-api" },
              { pill: "Service", title: "AI Agent Design & Build — end-to-end agent engineering on Azure", href: "/azure-ai-foundry/services/ai-agent-design-build" },
            ].map(a => (
              <Link key={a.title} href={a.href} className="group block rounded-2xl border border-border bg-background p-5 hover:border-accent/40 hover:shadow-md transition-all">
                <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: AZURE }}>{a.pill}</span>
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>2-week risk-free pilot</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build your first Azure AI Foundry agent?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We handle the architecture decisions, build the evaluation pipeline, and deploy to production. Fixed price. Zero delivery risk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
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

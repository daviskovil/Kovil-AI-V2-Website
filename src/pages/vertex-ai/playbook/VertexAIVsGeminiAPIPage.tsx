'use client'

import { motion } from "motion/react"
import { ArrowRight, ChevronRight, CheckCircle2, Clock, BookOpen, Shield, Database, Globe, Zap, ArrowRightLeft } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"
const G_GREEN = "#34A853"
const G_RED = "#EA4335"

const comparisonRows = [
  ["Data Residency", "GCP regional endpoint — inference stays in your region", "Google global routing — no regional guarantee"],
  ["Security Controls", "VPC Service Controls, CMEK, Private Service Connect", "Standard HTTPS, no VPC perimeter, no CMEK"],
  ["Model Management", "Versioned deployments, traffic splitting, batch prediction jobs", "Direct API, latest model always served"],
  ["Grounding", "Vertex AI Search (your data), Google Search, custom grounding sources", "Google Search only"],
  ["SLA", "Enterprise SLA with financial penalties", "Consumer-grade, no SLA commitment"],
  ["Pricing", "Per-token (same rate) + committed use discounts up to 20%", "Per-token pay-as-you-go, no committed use"],
  ["Fine-tuning", "Supervised fine-tuning on Vertex AI — all Gemini models", "Limited (Gemini 1.5 Flash only via API)"],
  ["Model Monitoring", "Drift detection, quality metrics, output logging in Cloud Logging", "Not available"],
  ["Access Controls", "IAM roles via GCP project, Workload Identity Federation, Org Policy", "API key only"],
  ["Audit Logging", "Full Cloud Audit Logs (Data Access + Admin Activity)", "Basic API request logs"],
  ["Batch Processing", "Vertex AI Batch Prediction — process millions of records offline", "Not available"],
  ["Private Networking", "Private Service Connect, no public internet traffic required", "Public internet only"],
]

const vertexScenarios = [
  { title: "You operate in a regulated industry", body: "Financial services (SOC 2, PCI DSS), healthcare (HIPAA BAA available), government (FedRAMP), and legal are the obvious examples. Any framework requiring data residency, audit trails, or encryption key management requires Vertex AI. The Gemini API cannot provide a HIPAA BAA, regional data processing guarantees, or CMEK." },
  { title: "You need to ground the agent in your own enterprise data", body: "Vertex AI Search integration is only available through Vertex AI. If the agent must retrieve answers from your internal documents, product catalogue, knowledge base, or BigQuery datasets — and you need a fully managed search and retrieval layer — Vertex AI Agent Builder with Vertex AI Search is the only path." },
  { title: "You need production-grade SLA for a customer-facing application", body: "The Gemini API has no uptime SLA and is subject to rate limiting without advance notice. For customer-facing agents handling revenue-generating interactions — customer service, e-commerce recommendations, booking agents — you need the Vertex AI enterprise SLA with defined availability commitments and support response times." },
  { title: "You need to fine-tune Gemini on proprietary data", body: "Full supervised fine-tuning across all Gemini models is available exclusively on Vertex AI. If your agent needs to adopt domain-specific vocabulary, a precise output format, or a specific tone that the base model cannot achieve through prompting alone — and you have the training data to support fine-tuning — this is a Vertex AI-only capability." },
  { title: "You are already in the GCP ecosystem", body: "If your data is in BigQuery, your infrastructure is in GKE, your secrets are in Secret Manager, and your pipelines run on Cloud Composer — Vertex AI integrates natively with all of it. The network, IAM, billing, and observability infrastructure is already in place. Using the public Gemini API would mean routing traffic outside your GCP perimeter unnecessarily." },
]

const geminiScenarios = [
  { title: "You are prototyping or building a proof of concept", body: "The Gemini API requires no GCP project setup, no IAM configuration, no VPC networking. You get an API key and start calling the model within minutes. For validation experiments, developer demos, and early-stage prototyping where speed matters more than security controls, the Gemini API is the right starting point. Migrate to Vertex AI when you move to production." },
  { title: "You are building a consumer-facing application with Google Search grounding", body: "If your agent needs to answer questions using current public information from the web — and your use case does not involve enterprise data or regulated information — the Gemini API with Google Search grounding is simpler to operate than standing up a Vertex AI project." },
  { title: "You have simple, low-volume generation needs", body: "Single-call text or code generation tasks that are stateless, do not touch user data, and do not need monitoring or versioning are fine on the Gemini API. The infrastructure overhead of Vertex AI is not justified for simple automation scripts, personal productivity tools, or developer utilities." },
]

const migrationSteps = [
  { step: "1", title: "Enable Vertex AI API and set up GCP project", body: "Enable the Vertex AI API in Cloud Console. Create or designate a GCP project. Configure organisation policies for resource location constraints if data residency is required." },
  { step: "2", title: "Create service account and configure IAM", body: "Create a dedicated service account (e.g., vertex-ai-agent@project.iam.gserviceaccount.com). Grant roles/aiplatform.user. For Agent Builder, also add roles/discoveryengine.editor. Remove any broad project roles." },
  { step: "3", title: "Update client initialisation in code", body: "Replace: import google.generativeai as genai / genai.configure(api_key=...) with: from google.cloud import aiplatform / aiplatform.init(project=PROJECT_ID, location=REGION). The model endpoint format changes from 'gemini-2.0-flash' to 'gemini-2.0-flash-001' or the full endpoint URI." },
  { step: "4", title: "Configure VPC and Private Service Connect (if required)", body: "For private networking: create a VPC, configure Private Service Connect for Vertex AI, update DNS to route vertex-ai-related API calls through the private endpoint. This prevents traffic from traversing the public internet. Required for regulated industries; optional for others." },
  { step: "5", title: "Set up Cloud Logging export and monitoring", body: "Enable Data Access audit logs for the Vertex AI API. Create a BigQuery export for audit logs. Configure Cloud Monitoring dashboards for token usage, latency, and error rates. Set up billing alerts for token spend." },
  { step: "6", title: "Run parallel validation", body: "Route 5–10% of production traffic to the Vertex AI endpoint for 1–2 weeks. Compare response quality, latency, and error rates between the Gemini API and Vertex AI. Vertex AI endpoints typically have slightly lower latency due to regional proximity." },
]

const takeaways = [
  "Vertex AI and the Gemini API use identical Gemini models at identical per-token pricing — the difference is the infrastructure layer around the model, not the model itself.",
  "VPC Service Controls, CMEK, and regional data residency are only available on Vertex AI — any regulated-industry enterprise application requires Vertex AI.",
  "Vertex AI Search integration for grounding agents in your own data is a Vertex AI exclusive — it is not available through the Gemini API.",
  "Migration from the Gemini API to Vertex AI is 1–2 days of code change and 1–2 weeks of infrastructure setup — it is not a major undertaking.",
  "For sustained workloads above ~50M tokens/month, Vertex AI committed use discounts make it cost-competitive or cheaper than Gemini API pay-as-you-go.",
  "Start on the Gemini API for prototyping, migrate to Vertex AI before any production deployment that handles user data or requires SLA.",
]

export default function VertexAIVsGeminiAPIPage() {
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
          <span className="text-foreground">Vertex AI vs Gemini API</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: G_BLUE, background: `${G_BLUE}15` }}>Technical Deep Dive</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />14 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Vertex AI vs Gemini API: what actually changes when you build enterprise agents on GCP?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Both use the same Gemini models. Both charge the same per-token rate. The difference is everything that surrounds the model — data residency guarantees, security controls, model management, grounding capabilities, SLA, and fine-tuning. Here is the complete technical breakdown, with a decision framework for enterprise teams and a migration guide if you are moving from the Gemini API.
        </p>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-16">

          {/* Section 1 — Comparison Table */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The key differences at a glance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The same Gemini 2.0 Flash model, called via the Gemini API vs called via Vertex AI, produces identical output. The differences are entirely in the infrastructure layer — what wraps the model call.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: G_BLUE }}>Vertex AI (GCP)</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Gemini API</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{row[0]}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row[1]}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl p-5 border" style={{ background: `${G_BLUE}08`, borderColor: `${G_BLUE}25` }}>
              <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">The short version:</strong> the Gemini API is a great way to access Gemini models with minimal setup. Vertex AI is the production-grade enterprise platform for those same models — with data residency, security controls, managed infrastructure, fine-tuning, and SLA. For any enterprise application that handles user data, the decision is Vertex AI.</p>
            </div>
          </div>

          {/* Section 2 — When Vertex AI */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">When Vertex AI is the right choice</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Five scenarios where Vertex AI is not just preferable, but required.
            </p>
            <div className="space-y-4">
              {vertexScenarios.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card">
                  <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${G_BLUE}15` }}>
                    <span className="text-xs font-bold" style={{ color: G_BLUE }}>{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — When Gemini API is fine */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">When the Gemini API is fine</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Three legitimate scenarios where the Gemini API is the right choice — and why each is time-bounded.
            </p>
            <div className="space-y-4">
              {geminiScenarios.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${G_GREEN}20` }}>
                    <span className="text-xs font-bold" style={{ color: G_GREEN }}>✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — Migration Path */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Migration path: Gemini API to Vertex AI</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Teams who built on the Gemini API during prototyping frequently ask us how complex the migration is. The answer: the code changes are minor. The infrastructure setup takes 1–2 weeks. Here is the full migration path.
            </p>
            <div className="space-y-4">
              {migrationSteps.map(item => (
                <div key={item.step} className="flex gap-5 p-5 rounded-2xl border border-border bg-card">
                  <span className="font-display font-black text-xl shrink-0 leading-none mt-1" style={{ color: G_BLUE }}>Step {item.step}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 p-5 rounded-2xl border" style={{ background: `${G_BLUE}08`, borderColor: `${G_BLUE}25` }}>
              <p className="text-sm font-semibold mb-2" style={{ color: G_BLUE }}>Estimated migration effort</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: "Code changes", value: "1–2 days" },
                  { label: "Infrastructure setup", value: "3–5 days" },
                  { label: "Security review + testing", value: "3–5 days" },
                ].map(item => (
                  <div key={item.label} className="text-center p-3 rounded-xl bg-background border border-border">
                    <p className="font-display font-bold text-xl mb-1" style={{ color: G_BLUE }}>{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5 — Cost Comparison */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Cost comparison: the full picture</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The per-token model pricing is identical. The total cost picture is more nuanced.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  title: "Vertex AI total cost",
                  color: G_BLUE,
                  items: [
                    "Gemini model tokens: same rate as Gemini API",
                    "Vertex AI Search queries: ~$0.40 per 1,000 queries",
                    "Cloud Storage (for documents): ~$0.02/GB/month",
                    "Cloud Logging + Monitoring: minimal for most workloads",
                    "VPC + NAT: ~$30–50/month for typical configuration",
                    "Committed use discount: up to 20% for 1-year commitment",
                  ],
                },
                {
                  title: "Gemini API total cost",
                  color: "#5F6368",
                  items: [
                    "Gemini model tokens: same rate as Vertex AI",
                    "Google Search grounding: per-query charges apply",
                    "No infrastructure overhead",
                    "No committed use discounts available",
                    "No model monitoring (must build separately)",
                    "No fine-tuning, no batch prediction",
                  ],
                },
              ].map(section => (
                <div key={section.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-sm mb-3" style={{ color: section.color }}>{section.title}</h3>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRightLeft className="h-3.5 w-3.5 shrink-0 mt-0.5 opacity-40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed p-4 rounded-xl border border-border bg-muted/20">
              <strong className="text-foreground">Break-even estimate:</strong> For workloads below ~50M tokens/month, the Gemini API is cheaper due to zero infrastructure overhead. Above that threshold — or for any workload using Vertex AI Search or requiring compliance features — Vertex AI with committed use typically matches or undercuts Gemini API pricing while delivering enterprise-grade controls.
            </p>
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
              { pill: "Implementation Guide", title: "How to architect your first Vertex AI agent: a practitioner's checklist", href: "/vertex-ai/playbook/architect-your-first-vertex-ai-agent" },
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: G_BLUE }}>Enterprise-ready on GCP</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move your agent to Vertex AI?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We handle the GCP infrastructure setup, security controls, migration, and go-live. Fixed price. No nasty surprises.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                <BookOpen className="mr-2 h-4 w-4" />
                View all Vertex AI services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Wrench, Network, Database, ShieldCheck, GitBranch, Gauge, X, Minus,
  Server, Code2, Users, FileSearch, Rocket, Briefcase,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Shopify-Specific CTA Trigger ─────────────────────────────────────────────
function ShopifyCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white rounded-full ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const heroStats = [
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Shopify AI Vetted" },
  { stat: "100%",    label: "IP ownership" },
  { stat: "2 weeks", label: "Risk-free trial" },
]

const roleProfiles = [
  {
    icon: Server,
    title: "MCP & Integration Engineers",
    desc: "Write custom Model Context Protocol servers and Shopify Admin/GraphQL API wrappers that expose your catalog, orders, and inventory as structured tools an LLM can safely call.",
    bullets: ["Model Context Protocol (MCP) server design", "Shopify Admin & Storefront GraphQL API", "Webhook-driven event architecture", "Rate-limit-aware queueing and retries"],
  },
  {
    icon: Network,
    title: "Multi-Agent / LangGraph Architects",
    desc: "Design stateful multi-agent workflows — Manager, Design, and Communication agent patterns — that coordinate long-running e-commerce operations across systems.",
    bullets: ["LangGraph & CrewAI orchestration", "Stateful checkpointing and resumable runs", "Human-in-the-loop approval gates", "Multi-agent handoff and delegation logic"],
  },
  {
    icon: Database,
    title: "RAG & Semantic Search Engineers",
    desc: "Build vector-database backed retrieval layers so agents reason over large product catalogs with grounded, hallucination-resistant answers.",
    bullets: ["pgvector / Pinecone / Weaviate indexing", "Embedding pipeline design for product data", "Semantic + hybrid keyword search", "Catalog re-indexing on webhook events"],
  },
  {
    icon: Wrench,
    title: "Full-Stack Agent Engineers",
    desc: "Ship the surrounding product: admin dashboards, approval consoles, and customer-facing chat surfaces that wrap your custom agents in a usable interface.",
    bullets: ["Next.js / React admin consoles", "Real-time agent activity logging UIs", "Auth, roles, and audit trail plumbing", "Slack / email approval integrations"],
  },
]

const vettingStages = [
  { icon: FileSearch, title: "Resume & Portfolio Screen", desc: "We filter for engineers with production e-commerce or agentic AI shipping history — not just tutorial-level LangChain demos." },
  { icon: Code2, title: "Live Technical Assessment", desc: "A scoped take-home plus live pairing session on a realistic Shopify Admin API + agent-reasoning problem, graded by a senior Kovil AI engineer." },
  { icon: GitBranch, title: "System Design Interview", desc: "Candidates whiteboard a multi-agent architecture for a sample e-commerce workflow, defending tool-boundary and failure-handling decisions." },
  { icon: Gauge, title: "Trial Sprint Performance", desc: "Only the top-scoring 4% of applicants get placed, and every placement still runs through your 2-week risk-free trial before you commit further." },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted AI Developers", desc: "Every placed engineer passes a strict vetting process focusing on agentic reasoning loops, e-commerce GraphQL API structures, and custom tool safety constraints." },
  { icon: GitBranch,   title: "Delivery Lead Oversight", desc: "A senior Kovil AI lead audits and verifies all implementation milestones to check prompt reliability, API boundary safety, and cost controls." },
  { icon: Gauge,       title: "Evaluation-Driven Quality", desc: "We track success metrics (task completion rate, tool-call accuracy, latency, and token cost per run) using programmatic eval suites from day one." },
]

const engagementModels = [
  {
    icon: Users,
    title: "Embedded Engineer",
    subtitle: "1 developer, joins your team",
    desc: "A single senior engineer embeds directly into your existing team's stand-ups and sprint cycles, working inside your codebase and repos under your direction.",
    bestFor: "Teams that already have a technical lead and just need hands-on-keyboard capacity.",
  },
  {
    icon: Briefcase,
    title: "Managed Pod",
    subtitle: "2–4 developers + delivery lead",
    desc: "A small pod (engineer + design/comms specialist + delivery lead) owns an entire workflow end-to-end, from architecture through production monitoring.",
    bestFor: "Brands that want a fully-owned outcome (e.g. 'automate our returns pipeline') without managing engineers day-to-day.",
  },
  {
    icon: Rocket,
    title: "Outcome-Based Sprint",
    subtitle: "Fixed scope, fixed price",
    desc: "We scope a specific deliverable — an MCP server, a repricing agent, a support triage bot — and quote a fixed price and timeline before any code is written.",
    bestFor: "Teams with a well-defined project who want budget certainty over hourly billing.",
  },
]

const stack = [
  "Shopify Admin API", "GraphQL API", "Shopify Webhooks", "MCP Servers", "LangGraph",
  "CrewAI", "Pydantic AI", "Supabase", "pgvector", "Pinecone", "NetSuite Sync", "SAP Integration",
  "n8n", "Klaviyo API", "Gorgias API", "Stripe API", "Next.js", "TypeScript", "Python", "Redis",
]

const comparisonRows = [
  { capability: "Time to first candidate", agency: "2–4 weeks of resume shuffling", freelance: "Days, but unvetted quality", kovil: "Under 48 hours, pre-vetted for Shopify AI" },
  { capability: "Agentic AI specialization", agency: "Generalist dev pool, rarely AI-specific", freelance: "Self-reported, unverified", kovil: "Live-graded on MCP, LangGraph & RAG problems" },
  { capability: "IP ownership", agency: "Often ambiguous in contract", freelance: "Varies by platform terms", kovil: "100% yours, no ambiguity" },
  { capability: "Delivery oversight", agency: "None — you manage the hire", freelance: "None — you manage the hire", kovil: "Senior Delivery Lead audits every milestone" },
  { capability: "Risk if it's not a fit", agency: "Long notice periods, replacement fees", freelance: "Dispute resolution through the platform", kovil: "2-week risk-free trial, swap or exit anytime" },
]

const faqs = [
  { q: "What does a Shopify AI agent developer do?", a: "An AI agent developer designs and writes custom software agents that communicate directly with Shopify's database using standard APIs. Unlike a basic chat widget, these agents can execute multi-turn e-commerce actions—fetching shipping tracking codes, automating refunds based on return guidelines, dynamically adjusting variant prices based on competitor scrapes, and auto-drafting marketing copy." },
  { q: "How much does it cost to hire an AI developer through Kovil AI?", a: "We place senior, vetted, Delivery-Lead-audited agent engineers on a flexible contract basis. Rates are competitive and transparent, structured based on engagement scope, with no long-term contracts and a 2-week risk-free trial. We'll give you an exact quote once we understand your workload and engagement model on a scoping call." },
  { q: "What is the average timeline to match and deploy an engineer?", a: "We match you with 2–3 vetted engineers specifically qualified for your stack within 24–48 hours of scoping. Once selected, your developer can begin embedding and coding within 3–4 days." },
  { q: "Do I fully own the custom agent's IP and code?", a: "Yes, 100%. All custom code, agentic prompts, workflow schemas, database structures, and documentation developed during the placement are fully owned by you under clear IP-assignment clauses." },
  { q: "How is this different from hiring through a freelance platform like Upwork?", a: "Freelance platforms rely on self-reported skills and star ratings. Every Kovil AI engineer passes a live technical assessment specifically on Shopify Admin API and agentic reasoning problems, graded by our own senior engineers — and every placement is backed by a Delivery Lead who audits milestones, not just a hands-off contract." },
  { q: "Can I hire more than one developer for a larger project?", a: "Yes. Many brands start with an embedded engineer for a first workflow, then scale to a managed pod (engineer + comms/design specialist + delivery lead) once the initial build proves out. We can also assemble a full pod from day one if your scope calls for it." },
  { q: "What happens if the developer isn't a good fit?", a: "Every placement includes a 2-week risk-free trial. If it's not working, we swap in a new engineer at no additional cost, or you can exit the engagement entirely — no long notice periods or replacement fees." },
  { q: "Do your developers work in my existing codebase and tools?", a: "Yes. Engineers embed directly into your GitHub/GitLab repos, project management tools (Linear, Jira, Asana), and communication channels (Slack, Teams), following your existing code review and deployment processes rather than working in an external silo." },
  { q: "What seniority level are the engineers you place?", a: "We only place senior engineers — typically 5+ years of production software experience with demonstrable agentic AI or e-commerce integration shipping history. We do not place junior developers or bootcamp graduates on client engagements." },
  { q: "Can a hired developer also help with non-AI Shopify development?", a: "Our developers specialize in AI agent and integration engineering, but most are also strong full-stack Shopify developers capable of theme work, app development, and general storefront engineering alongside the agentic build." },
  { q: "Do you offer ongoing support after the initial build?", a: "Yes. Many clients convert an initial sprint engagement into an ongoing retainer for monitoring, model upgrades, and incremental feature work. This is entirely optional and scoped separately from the initial placement." },
  { q: "How do you handle timezone overlap for embedded engineers?", a: "We match based on your stated overlap requirements during scoping — most clients request at least 4 hours of daily overlap with their core team. Our talent pool spans North America, Europe, and Asia-Pacific, so timezone-aligned matching is rarely a constraint." },
]

export default function HireShopifyAgentDeveloperPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Hire Developers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Talent Solutions</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Hire Shopify AI Agent Developers — <br />
              <span className="text-accent">Vetted, Embedded, Shipped in 48 Hours.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Embed senior Python/TypeScript engineers specializing in custom e-commerce agents, GraphQL tool-calling integrations, and Model Context Protocol setups. Match in 48 hours, own 100% of the code, and try it risk-free for two weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Book Scoping Call" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#roles">See Developer Profiles</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-muted/10 border border-border rounded-3xl p-6 md:p-8 grid grid-cols-2 gap-4">
            {heroStats.map((item, idx) => (
              <div key={idx} className="bg-background border border-border p-4 rounded-2xl text-center space-y-1 shadow-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{item.stat}</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Profiles */}
      <section id="roles" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Who You're Hiring</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Four Specialist Profiles, One Talent Pool</h2>
            <p className="text-muted-foreground text-sm">
              We don't place generalist "full-stack" developers and hope they figure out agentic AI. Every engineer is vetted against one of these specific role profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roleProfiles.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <ul className="space-y-1.5 pt-2 border-t border-border/60">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Vetting Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Only the Top 1% Make It Through</h2>
            <p className="text-muted-foreground text-sm">
              Four stages, one filter: can this engineer ship a production agentic system on your storefront without hand-holding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {vettingStages.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="relative bg-muted/10 border border-border rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">STAGE {idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  {idx < vettingStages.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                  )}
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            {included.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-muted/10 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs text-foreground">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Engagement Models</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Pick the Shape That Fits Your Team</h2>
            <p className="text-muted-foreground text-sm">
              From a single embedded engineer to a fully-owned outcome — the structure adapts to how much you want to manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8 space-y-4 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-accent font-mono uppercase tracking-wide">{item.subtitle}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-[11px] text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {item.bestFor}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Vetted Across the Stack</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-3">Every Engineer Is Tested on This Exact Toolchain</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We test engineers on e-commerce logic, stateful multi-agent systems, and secure API boundaries—ensuring they deliver production-ready code from day one, not after a ramp-up period.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tag, idx) => (
              <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Kovil AI vs. Alternatives</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Post a Job Ad?</h2>
            <p className="text-muted-foreground text-sm">
              Staffing agencies and freelance platforms weren't built to vet agentic AI skill. Here's the practical difference.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Staffing Agency</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Freelance Platform</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.agency}</span>
                    </td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><Minus className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />{row.freelance}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.kovil}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Placement FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common hiring queries for Shopify AI placements.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-muted/5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold hover:bg-muted/20 transition-all"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Embed Vetted Shopify AI Engineers Today
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Deliver stateful workflows, repricers, and custom API layers with our senior resources. First 2 weeks are fully risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Book Scoping Call" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">No upfront recruitment fees. 2-week risk-free trial on placements.</p>
        </div>
      </section>

    </div>
  )
}

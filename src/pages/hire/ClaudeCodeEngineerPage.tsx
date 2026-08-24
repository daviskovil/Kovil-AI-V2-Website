'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Terminal, CheckCircle2, ArrowRight, Clock, ChevronDown, GitPullRequest,
  Blocks, ShieldCheck, Rocket, RefreshCw, Users, Gauge, X, Minus, BookOpen
} from "lucide-react"
import { Button } from "../../components/ui/button"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Engineer tier" },
  { stat: "2–10x",   label: "Throughput uplift*" },
  { stat: "2 weeks", label: "Risk-free trial" },
]

const marketStats = [
  { value: "76%", label: "of developers are using or planning to use AI coding tools in their workflow", src: "Stack Overflow 2024" },
  { value: "#1", label: "Claude models rank among the top choices engineering teams cite for agentic coding quality", src: "Industry surveys" },
  { value: "10x", label: "reported task-throughput gains when senior engineers pair with agentic coding tools on well-scoped work", src: "Practitioner reports" },
  { value: "2024", label: "the year agentic coding moved from autocomplete to autonomous, codebase-aware engineering", src: "—" },
]

const capabilities = [
  { icon: Terminal,       title: "Agentic, Codebase-Aware Coding", desc: "Engineers who drive Claude Code across a whole repository — reading context, planning changes, editing multiple files, running tests, and iterating — not just accepting single-line autocompletions." },
  { icon: RefreshCw,      title: "Large-Scale Refactors & Migrations", desc: "Framework upgrades, language migrations, monolith-to-service splits, and dependency overhauls executed with agentic tooling and human review — weeks of grunt work compressed into days." },
  { icon: Blocks,         title: "MCP & Custom Tool Integration", desc: "Wiring Claude Code to your internal systems through the Model Context Protocol — custom servers, tools, and data sources so the agent works with your stack, not a generic sandbox." },
  { icon: GitPullRequest, title: "Automated Test & Review Pipelines", desc: "Agentic test generation, coverage backfills, PR triage, and CI workflows that turn Claude Code into a force multiplier for your existing engineering team." },
  { icon: Rocket,         title: "Greenfield Builds at Speed", desc: "New services and features scaffolded, implemented, and shipped fast — with an experienced engineer steering architecture, quality, and security, not blindly trusting generated code." },
  { icon: ShieldCheck,    title: "Safe, Reviewed, Production-Grade", desc: "Guardrails, human-in-the-loop review, and disciplined verification. Our engineers know where agentic coding shines and where it needs a firm hand — so speed never costs you reliability." },
]

const roles = [
  { title: "Claude Code Engineer", desc: "A hands-on engineer who uses Claude Code to build, refactor, and ship features across your codebase at high velocity — with the judgment to review and verify agent output." },
  { title: "Claude Code Software Engineer", desc: "Full software-engineering depth combined with agentic-coding fluency: architecture, testing, and system design, executed with Claude Code as a productivity multiplier on real production work." },
  { title: "Claude Code Lead Engineer", desc: "A senior lead who sets your team's agentic-coding practices — workflows, MCP tooling, review standards, and guardrails — and mentors your engineers to adopt Claude Code safely and effectively." },
]

const skills = [
  "Claude Code (CLI + IDE)", "Model Context Protocol (MCP)", "Anthropic API", "Agentic workflows",
  "TypeScript", "Python", "Go", "Rust", "React / Next.js", "Node.js",
  "CI/CD automation", "Test generation", "Git & code review", "Prompt engineering",
  "Large-scale refactoring", "Legacy migration",
]

const included = [
  { icon: ShieldCheck, title: "Vetted for Agentic Fluency", desc: "We vet not just for coding ability but for agentic judgment — how an engineer scopes work for Claude Code, reviews its output, and knows when to trust it and when to intervene." },
  { icon: Users,       title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone — verifying that agent-assisted output is reviewed, tested, secure, and production-ready before it reaches you." },
  { icon: Gauge,       title: "Velocity With Verification", desc: "You get the speed of agentic coding with the discipline of senior review. We measure throughput and quality — not one at the expense of the other." },
  { icon: BookOpen,    title: "Team Enablement Included", desc: "Beyond shipping, our engineers can level up your team — establishing Claude Code workflows, MCP tooling, and review standards so the capability stays after the engagement." },
  { icon: Blocks,      title: "Works With Your Stack", desc: "MCP integrations and custom tooling connect Claude Code to your repos, databases, and internal systems — so the agent operates in your real environment." },
  { icon: Rocket,      title: "Production, Not Prototypes", desc: "Reviewed, tested, deployed code that survives real traffic. We use agentic speed to ship reliable software faster — not to cut corners." },
]

const steps = [
  { number: "01", timeline: "Day 1", title: "Brief Your Project", description: "Tell us your codebase, stack, and what you want to ship or modernise. A Delivery Lead scopes it with you within 24 hours.", bullets: ["5-minute async intake", "Delivery Lead within 24h", "Codebase & stack matched"] },
  { number: "02", timeline: "Days 2–3", title: "Meet Your Engineer", description: "We surface 2–3 engineers fluent in Claude Code with proven, shipped work in your language and domain. You review, interview, and choose.", bullets: ["Curated match, not a marketplace", "Live intro call included", "Milestone plan agreed upfront"] },
  { number: "03", timeline: "Week 1+", title: "Ship at Velocity", description: "Your engineer works in focused sprints, using Claude Code to move fast while reviewing and testing rigorously. An Engagement Manager audits every milestone.", bullets: ["Weekly milestone check-ins", "Reviewed, tested output", "Two-week risk-free trial"] },
]

const forWho = [
  { title: "Engineering Leaders Adopting Agentic Tools", desc: "You see that agentic coding is reshaping how software gets built and want your team to adapt now — with an expert who can lead the transition, set standards, and prove the ROI." },
  { title: "Teams Facing a Big Migration or Backlog", desc: "You have a framework upgrade, legacy migration, or mountain of tech debt. An engineer fluent in Claude Code can compress weeks of grunt work into days — safely." },
  { title: "Founders Who Need to Ship Fast", desc: "You need production features shipped quickly without hiring a full team. Get a senior engineer who ships at agentic velocity, with a 2-week risk-free trial." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief", desc: "Describe your codebase, stack, and goals — a feature to ship, a migration to run, or a team to enable. A Delivery Lead calls within 24 hours." },
  { day: "Day 2–3", title: "Meet Your Shortlist", desc: "Review 2–3 Claude Code engineers matched to your language and domain. Interview them, see their work, choose your fit." },
  { day: "Day 3–4", title: "Scope & Standards Locked", desc: "You agree the sprint plan, review standards, and success criteria — so agentic speed comes with clear quality gates." },
  { day: "Week 1+", title: "Sprint & Ship", desc: "Your engineer ships in weekly sprints using Claude Code, with rigorous review and testing. Your Engagement Manager audits each milestone." },
  { day: "Ongoing", title: "Scale or Enable", desc: "Extend the engagement, add engineers, or have them enable your team on Claude Code workflows — then wind down with no lock-in." },
]

const comparison = [
  { label: "Agentic-coding fluency", kovil: "yes",        traditional: "rare",     agency: "generalist", freelancer: "hit or miss" },
  { label: "Senior review discipline", kovil: "yes",       traditional: "yes",      agency: "partial",    freelancer: "no" },
  { label: "Time to start",          kovil: "24–48 hours", traditional: "4–6 months", agency: "3–6 weeks", freelancer: "1–2 weeks" },
  { label: "MCP & custom tooling",   kovil: "yes",         traditional: "maybe",    agency: "rare",       freelancer: "no" },
  { label: "Team enablement",        kovil: "yes",         traditional: "n/a",      agency: "no",         freelancer: "no" },
  { label: "Risk-free trial",        kovil: "yes",         traditional: "no",       agency: "no",         freelancer: "rare" },
  { label: "IP ownership",           kovil: "100% yours",  traditional: "100% yours", agency: "often shared", freelancer: "varies" },
]

const faqs = [
  { q: "What is a Claude Code engineer?", a: "A Claude Code engineer is a software engineer who is fluent in Anthropic's Claude Code — an agentic coding tool that works directly in the terminal and IDE, understands an entire codebase, and can plan and execute multi-file changes, run tests, and iterate autonomously under the engineer's direction. A Claude Code engineer combines strong software-engineering fundamentals (architecture, testing, review) with the judgment to scope work for the agent, verify its output, and know when to trust it and when to intervene. The value is speed with reliability: shipping production software faster without sacrificing quality." },
  { q: "What is Claude Code?", a: "Claude Code is Anthropic's agentic coding tool, powered by its Claude models. Unlike an autocomplete assistant that suggests the next line, Claude Code operates over your whole repository: it reads and reasons about the codebase, plans changes, edits multiple files, runs commands and tests, and iterates toward a goal — in the terminal or inside your IDE. It supports the Model Context Protocol (MCP) to connect to external tools and data sources, so it can work with your real systems rather than a generic sandbox." },
  { q: "What does a Claude Code lead engineer do?", a: "A Claude Code lead engineer is a senior engineer who sets the standards and practices for agentic coding across a team. Responsibilities typically include: defining Claude Code workflows and guardrails, building MCP tooling to connect the agent to internal systems, establishing code-review and verification standards for agent-assisted output, mentoring other engineers on effective and safe usage, and owning the highest-complexity agentic work. The lead's job is to turn agentic coding from an individual productivity hack into a reliable, repeatable team capability." },
  { q: "Is there a Claude Code certification?", a: "There is no single official exam that gates the skill of using Claude Code, so a 'Claude Code certification' is not the meaningful signal of competence. What matters is demonstrated production work: real repositories shipped, migrations completed, and evidence of sound review discipline. Kovil AI vets engineers on exactly this — a live build, a portfolio of shipped agent-assisted work, and their judgment in reviewing and verifying output — rather than a certificate. Anthropic does publish official documentation and best-practice guides for Claude Code, which our engineers know deeply." },
  { q: "How is Claude Code different from GitHub Copilot or Cursor?", a: "GitHub Copilot is primarily an in-editor autocomplete and chat assistant. Cursor is an AI-native code editor with strong in-IDE agentic features. Claude Code is Anthropic's agentic coding tool that runs in the terminal and IDE and is designed to operate autonomously over an entire codebase — planning, editing across many files, running tests, and iterating — with deep support for the Model Context Protocol to integrate external tools. In practice, teams often use more than one; a skilled engineer picks the right tool for the task. Kovil AI's engineers are fluent in Claude Code specifically and can advise on where it fits in your toolchain." },
  { q: "What are some tips for using Claude Code effectively?", a: "Experienced Claude Code engineers follow a few principles: (1) Scope work into clear, verifiable units rather than vague mega-tasks. (2) Give the agent good context — a well-maintained project guide, tests, and conventions it can read. (3) Use tests and evals as the ground truth so the agent can self-correct. (4) Keep a human in the loop on architecture, security, and high-stakes changes. (5) Wire it to your real systems with MCP so it works in your environment. (6) Review agent output with the same rigor as any pull request. Speed comes from good scoping and verification, not from blindly accepting generated code." },
  { q: "How much does it cost to hire a Claude Code engineer?", a: "Rates depend on seniority and engagement structure. Kovil AI places vetted, Engagement-Manager-audited Claude Code specialists on a flexible monthly or outcome-based model. By utilizing our global talent pool and agentic workflows, you get elite, production-ready engineers at a fraction of the cost of full-time recruiting, with zero hiring delay and a 2-week risk-free trial." },
  { q: "How quickly can I hire a Claude Code engineer through Kovil AI?", a: "Most clients are matched with a vetted Claude Code engineer within 24–48 hours of submitting their brief, with work starting on an agreed milestone plan in 3–4 days. A 2-week risk-free trial lets you validate fit, velocity, and output quality before committing to a longer engagement." },
  { q: "Can a Claude Code engineer help my existing team adopt agentic coding?", a: "Yes — team enablement is a core offering. Beyond shipping features, our engineers can establish Claude Code workflows, build MCP tooling for your systems, set review and verification standards, and mentor your developers so the capability stays with your team after the engagement ends. This is a common reason engineering leaders hire a Claude Code lead engineer specifically." },
  { q: "Do I own all the code produced with Claude Code?", a: "Yes, 100%. All code, tooling, MCP integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in." },
]

// ── Component ───────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-background">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <h3 className="font-semibold text-base pr-4">{item.q}</h3>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="inline-flex items-center gap-1.5 font-semibold text-accent"><CheckCircle2 className="h-4 w-4" />Yes</span>
  if (value === "no")  return <span className="inline-flex items-center gap-1.5 text-muted-foreground/70"><X className="h-4 w-4" />No</span>
  if (value === "partial" || value === "maybe" || value === "rare")
    return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

export default function ClaudeCodeEngineerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-accent transition-colors">Hire AI Engineers</Link>
          <span>/</span>
          <span className="text-foreground">Claude Code Engineers</span>
        </nav>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Hire Claude Code Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire Claude Code Engineers —<br />
            <span className="text-accent">Ship at Agentic Velocity.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Elite engineers fluent in Anthropic's Claude Code — the agentic coding toolchain reshaping how software gets built. Ship features, run migrations, and enable your team, with senior review discipline at every step.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/book-a-call">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in. 100% IP yours.</p>
          </div>
        </div>

        {/* Hero stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/60 mt-4">*Throughput uplift varies by task and codebase; agentic coding excels on well-scoped, verifiable work.</p>
      </section>

      {/* Definition — explicit, citable answer for "what is a Claude
          Code engineer" queries, independent of the FAQ prose */}
      <section id="definition" className="border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is a Claude Code Engineer?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Claude Code engineer</strong> is a software engineer fluent in Anthropic's Claude Code — an agentic coding tool that works in the terminal and IDE, understands an entire codebase, and can plan and execute multi-file changes, run tests, and iterate autonomously under the engineer's direction. They combine strong software-engineering fundamentals with the judgment to scope work for the agent, verify its output, and know when to trust it and when to intervene — the difference between a fast demo and reliable, production-grade software.
            </p>
          </div>
        </div>
      </section>

      {/* What is Claude Code — AEO definition block */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">First, the Basics</p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5">What Is Claude Code — and Why Hire an Engineer For It?</h2>
            <p className="text-background/70 leading-relaxed mb-4">
              <strong className="text-background">Claude Code is Anthropic's agentic coding tool.</strong> Unlike autocomplete assistants that suggest the next line, it operates over your entire codebase — reading context, planning changes, editing multiple files, running tests, and iterating toward a goal in your terminal or IDE.
            </p>
            <p className="text-background/70 leading-relaxed">
              The tool is powerful, but the outcome depends on the engineer driving it. A skilled Claude Code engineer scopes work well, wires the agent to your systems via the Model Context Protocol, reviews and verifies rigorously, and knows exactly where agentic speed helps and where it needs a firm hand. That judgment is what turns a fast demo into reliable, production-grade software.
            </p>
          </div>
          <div className="rounded-2xl border border-background/15 bg-background/[0.03] p-6">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-4">At a glance</p>
            <ul className="space-y-4">
              {[
                ["Autocomplete assistant", "Suggests the next line in your editor"],
                ["Claude Code", "Plans & edits across the whole repo, runs tests, iterates"],
                ["The differentiator", "Codebase-aware, agentic, MCP-connected to your tools"],
                ["Why hire for it", "Speed only pays off with senior review & verification"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-background">{k}</p>
                    <p className="text-sm text-background/60">{v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Market stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Now</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">Agentic coding is the biggest shift in software delivery in a decade — and the talent to wield it well is rare.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketStats.map((s) => (
            <div key={s.label} className="border-t-2 border-accent/40 pt-4">
              <p className="font-display font-black text-4xl text-accent mb-2">{s.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              <p className="text-xs text-muted-foreground/50 mt-2">{s.src}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Do</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a Claude Code Engineer Do for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 hover:border-accent/40 transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-accent" /></div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Roles We Place</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Claude Code Engineer, Software Engineer, or Lead — Matched to Your Need</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Whether you need a builder, a full software engineer, or a lead to set your team's agentic-coding standards, we match the right seniority.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-muted/20 p-7 relative overflow-hidden group hover:border-accent/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Skills &amp; Stack</p>
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">What Our Claude Code Engineers Bring</h2>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((t) => (
            <span key={t} className="text-sm font-medium bg-muted/40 border border-border px-4 py-2 rounded-full text-foreground/80">{t}</span>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Claude Code Engineer?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Claude Code Engineer with Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full"><Clock className="h-3 w-3" />{step.timeline}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a Claude Code engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your project on a 30-minute call. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <Link href="/book-a-call">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What You Get When You Hire a Claude Code Engineer Through Kovil AI</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-muted/20 p-6">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-accent" /></div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire a Claude Code Engineer</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-48"></th>
                  <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Traditional Hire</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Dev Agency</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                    <td className="py-4 px-6 bg-accent/[0.03]"><Cell value={row.kovil} /></td>
                    <td className="py-4 px-6"><Cell value={row.traditional} /></td>
                    <td className="py-4 px-6"><Cell value={row.agency} /></td>
                    <td className="py-4 px-6"><Cell value={row.freelancer} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From Brief to Shipped Code — What the First Weeks Look Like</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                <div className="flex-1 bg-muted/20 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-1 block md:hidden">{item.day}</span>
                  <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring Claude Code Engineers</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/ai-agent-developer", label: "Hire AI Agent Developers", desc: "Autonomous agents, tool use, multi-agent systems" },
            { href: "/hire/llm-engineer", label: "Hire LLM Engineers", desc: "RAG, fine-tuning, and LLM app development" },
            { href: "/hire/software-engineer", label: "Hire Software Engineers", desc: "Full-stack, product, and platform engineering" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group">
              <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your Claude Code engineer?</h2>
            <p className="text-background/60 text-base">Book a 30-minute call. Matched in 48 hours. 2-week risk-free trial. 100% IP yours.</p>
          </div>
          <Link href="/book-a-call">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Users, BarChart2, FileText, Zap, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

const useCases = [
  {
    icon: Users,
    color: SF_BLUE,
    title: "Agentforce SDR Agent",
    href: "/agentforce/sales-cloud/sdr-agent",
    description:
      "Qualifies inbound leads, sends personalised outreach, handles objections, and books discovery calls — 24/7, without human SDR touch for standard leads.",
    stat: "9 min avg lead response",
    statSub: "was 4 days",
  },
  {
    icon: BarChart2,
    color: "#60A5FA",
    title: "Pipeline Health Monitor",
    href: "/agentforce/sales-cloud/pipeline-health-monitor",
    description:
      "Monitors every deal in your pipeline for stall signals, auto-drafts follow-up sequences, updates opportunity stages, and alerts reps to risk before it is too late.",
    stat: "+34% qualified pipeline",
    statSub: "from same headcount",
  },
  {
    icon: FileText,
    color: "#34D399",
    title: "Quote & Proposal Agent",
    href: "/agentforce/sales-cloud/quote-proposal-agent",
    description:
      "Pulls product and pricing data from Revenue Cloud/CPQ, drafts quotes, routes for approval, and sends to prospects — compressing multi-day quote cycles to hours.",
    stat: "3.2× rep productivity",
    statSub: "per SDR",
  },
]

const stats = [
  { value: "9 min", label: "avg lead response time", sub: "was 4 days" },
  { value: "+34%", label: "increase in qualified pipeline", sub: "same headcount" },
  { value: "3.2×", label: "SDR productivity per rep", sub: "vs baseline" },
  { value: "60%", label: "of SDR manual time reclaimed", sub: "for high-value activities" },
]

const howItTransforms = [
  {
    n: "01",
    title: "SDRs stop qualifying, start closing",
    body: "Agentforce handles all inbound lead qualification, follow-up sequences, and meeting booking. SDRs focus on discovery calls and closing — the activities that require human judgement and relationship skills. Qualification is a process, not a skill. Let the agent run the process.",
  },
  {
    n: "02",
    title: "Never lose a deal to slow follow-up",
    body: "Pipeline Monitor tracks every deal 24/7. The moment a deal goes quiet, Agentforce drafts and sends a follow-up. Reps review and approve — they do not write from scratch. Hot leads do not go cold because a rep was in back-to-back meetings on a Friday afternoon.",
  },
  {
    n: "03",
    title: "Quote in hours, not days",
    body: "Quote agent pulls pricing from Revenue Cloud or CPQ, drafts the quote document, routes for approval, and sends to the prospect. Multi-day quote cycles compress to hours. Reps spend time on the conversation, not the paperwork.",
  },
]

const faqItems = [
  {
    q: "What does Agentforce do for sales teams?",
    a: "Agentforce deploys autonomous AI agents inside Salesforce Sales Cloud that handle the repeatable, high-volume tasks that consume SDR and AE time: lead qualification, outreach sequencing, pipeline monitoring, follow-up drafting, and quote preparation. The agent operates 24/7, logs every action to the CRM, and routes to human reps only when the situation requires human judgement — negotiation, objection handling above a complexity threshold, or relationship-critical touchpoints.",
  },
  {
    q: "How does Agentforce qualify leads?",
    a: "The Agentforce SDR agent runs qualification logic configured to your framework (BANT, MEDDIC, or a custom model). When a new Lead record is created in Salesforce, the agent reads the lead data, runs Einstein Lead Scoring against your ICP criteria (company size, industry, title, engagement signals), and makes a qualification decision. Qualified leads proceed to AI-drafted outreach. Below-threshold leads are flagged for ops review. The qualification reasoning trace is logged to the Lead record for full rep visibility.",
  },
  {
    q: "Can Agentforce write sales emails?",
    a: "Yes. Salesforce Prompt Builder generates outreach emails grounded in live CRM data — the lead's company, their engagement history, your product's relevant value proposition for their industry. Every email is dynamically authored, not a template with variable substitution. The Einstein Trust Layer ensures no PII is sent externally and every draft meets your approved messaging guidelines before sending. Follow-up emails are also generated automatically based on open/click/reply signals.",
  },
  {
    q: "Does Agentforce integrate with Revenue Cloud / CPQ?",
    a: "Yes. The Quote & Proposal Agent is built with native Revenue Cloud and CPQ integration. The agent queries your product catalogue and configured pricing rules, applies discount tiers, generates the quote document, routes it through your approval process, and sends it to the prospect — all within Salesforce. Custom pricing logic is handled via Apex Actions that wrap your existing CPQ configuration, meaning you do not need to rebuild your pricing rules for the agent.",
  },
  {
    q: "How long does Agentforce Sales Cloud implementation take?",
    a: "A focused single-use-case pilot (one agent — SDR, Pipeline Monitor, or Quote Agent) takes 2–3 weeks from scoping to production go-live. A full multi-agent Sales Cloud deployment covering all three use cases runs 6–8 weeks. Kovil AI operates fixed-price only: you pay for a working agent in production, not for hours. Both timelines include UAT and 2 weeks of post-launch support.",
  },
  {
    q: "What is the ROI of Agentforce for sales?",
    a: "ROI for sales agents has two components: revenue uplift (more qualified pipeline from the same headcount, faster lead response time, higher win rate from faster quotes) and productivity gain (SDRs freed from manual qualification and follow-up, reps freed from quote drafting). Production deployments show: lead response time dropping from 4 days to 9 minutes, qualified pipeline increasing 34%, and SDR productivity increasing 3.2× per rep. See our Agentforce ROI Guide for full methodology.",
  },
]

export default function SalesCloudHubPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight size={11} className="text-white/20" />
          <Link href="/agentforce" className="hover:text-white/70 transition-colors">Agentforce</Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Sales Cloud</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: SF_BLUE, background: `${SF_BLUE}18`, border: `1px solid ${SF_BLUE}28` }}
              >
                Agentforce · Sales Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Agentforce for<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">
                Sales Teams
              </span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              SDR agents that qualify leads in 9 minutes, pipeline monitors that never let deals go cold, and quote agents that close faster — production Agentforce Sales Cloud deployments built and deployed by Kovil AI.
            </motion.p>

            {/* Stats row */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.value} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: SF_BLUE }}>{s.value}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70 leading-snug">{s.label}</p>
                  <p className="text-[10px] text-white/35">{s.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.18)} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display cursor-pointer"
                style={{ background: SF_BLUE, boxShadow: `0 4px 24px ${SF_BLUE}4D` }}
              >
                Book a discovery call <ArrowRight size={15} />
              </button>
              <Link
                href="/agentforce"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                Browse all agents
              </Link>
            </motion.div>
          </div>

          {/* Right: dark 3D panel */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">AI Agent · Sales Cloud</span>
            </div>

            {/* Sales scenarios */}
            <div className="space-y-2 mb-5">
              {[
                { label: "Inbound Lead", color: SF_BLUE },
                { label: "Stalled Deal", color: "#60A5FA" },
                { label: "Quote Request", color: "#34D399" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium"
                  style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}
                >
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.label}
                </div>
              ))}
            </div>

            {/* Atlas AI box */}
            <div
              className="rounded-xl p-4 mb-5"
              style={{ backgroundColor: `${SF_BLUE}12`, border: `1px solid ${SF_BLUE}30` }}
            >
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider mb-2" style={{ color: SF_BLUE }}>
                Atlas Reasoning Engine
              </div>
              <div className="flex flex-wrap gap-2">
                {["Lead Scoring", "Opportunity Analysis", "CPQ Integration"].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-md px-2 py-1 text-[10px] text-white/60"
                    style={{ backgroundColor: `${SF_BLUE}18` }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Output card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0D0D0D] p-4 mb-4">
              <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                <div>
                  <div className="text-white/30 mb-0.5">Lead</div>
                  <div className="text-white/80 font-medium">TechCorp Inc. — VP Engineering</div>
                </div>
                <div>
                  <div className="text-white/30 mb-0.5">Score</div>
                  <div className="font-medium" style={{ color: "#34D399" }}>94/100 — High intent</div>
                </div>
                <div>
                  <div className="text-white/30 mb-0.5">Action</div>
                  <div className="text-white/80 font-medium">Meeting booked</div>
                </div>
                <div>
                  <div className="text-white/30 mb-0.5">Rep</div>
                  <div className="text-white/80 font-medium">Jake notified</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap gap-2">
              {["Lead qualified", "Meeting booked", "CRM updated", "Rep alerted"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md px-2 py-1 text-[10px] font-medium"
                  style={{ backgroundColor: "#34D39918", color: "#34D399", border: "1px solid #34D39930" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use case hub cards */}
      <section className="bg-[#0D0D0D] py-20 mt-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
              style={{ color: `${SF_BLUE}B3` }}
            >
              Sales Cloud agents
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Three agents. One sales motion.</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              Each agent is a standalone deployment. Start with the one that addresses your most urgent pipeline problem, then add the others.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} {...fade(i * 0.07)}>
                <Link
                  href={uc.href}
                  className="group block h-full rounded-2xl border border-white/[0.07] bg-[#111111] p-6 hover:border-white/[0.14] transition-all"
                >
                  <div
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${uc.color}18` }}
                  >
                    <uc.icon className="h-5 w-5" style={{ color: uc.color }} />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-white/90 transition-colors leading-snug">
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/45 mb-6">{uc.description}</p>

                  <div
                    className="rounded-lg px-3 py-2 mb-6 inline-block"
                    style={{ backgroundColor: `${uc.color}12`, border: `1px solid ${uc.color}25` }}
                  >
                    <div className="text-sm font-bold" style={{ color: uc.color }}>{uc.stat}</div>
                    <div className="text-[10px] text-white/40">{uc.statSub}</div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: uc.color }}>
                    Deep-dive <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Agentforce transforms your sales team */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-12">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
            style={{ color: `${SF_BLUE}B3` }}
          >
            How it works
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            How Agentforce transforms your sales team
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {howItTransforms.map((step, i) => (
            <motion.div key={step.n} {...fade(i * 0.07)}
              className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6"
            >
              <div
                className="font-display text-4xl font-bold mb-4 opacity-20"
                style={{ color: SF_BLUE }}
              >
                {step.n}
              </div>
              <h3 className="font-display font-bold text-white text-base mb-3 leading-snug">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI callout */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div {...fade(0)}
            className="rounded-2xl border p-8 lg:p-12"
            style={{ borderColor: `${SF_BLUE}30`, backgroundColor: `${SF_BLUE}08` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: SF_BLUE }} />
              <span className="text-[11px] font-semibold uppercase tracking-wider font-display" style={{ color: SF_BLUE }}>
                Production deployment — B2B SaaS
              </span>
            </div>
            <blockquote className="font-display text-xl lg:text-2xl font-bold text-white leading-snug mb-6">
              &ldquo;200-person B2B SaaS company deployed Agentforce SDR agents in Sales Cloud. Lead response: 4 days to 9 minutes. Qualified pipeline: +34%. SDR productivity: 3.2× per rep. Implementation: 3 weeks.&rdquo;
            </blockquote>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { v: "4 days → 9 min", l: "Lead response" },
                { v: "+34%", l: "Qualified pipeline" },
                { v: "3.2×", l: "SDR productivity" },
                { v: "3 weeks", l: "To production" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="text-lg font-bold font-display" style={{ color: SF_BLUE }}>{m.v}</div>
                  <div className="text-xs text-white/40">{m.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services this builds on */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
            style={{ color: `${SF_BLUE}B3` }}
          >
            Services
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Services this builds on</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Sales Cloud Agent Deployment",
              desc: "Fixed-price 2–3 week sprint. One use case, scoped to production. Topics, Actions, Einstein Trust Layer, UAT, and post-launch support.",
              href: "/agentforce/services/sales-cloud-agent-deployment",
              color: SF_BLUE,
            },
            {
              title: "Agentforce Strategy & Readiness",
              desc: "10-day org audit, use case prioritisation, licence optimisation, and deployment roadmap — before you commit to build.",
              href: "/agentforce/services/agentforce-strategy-readiness",
              color: "#60A5FA",
            },
          ].map((svc, i) => (
            <motion.div key={svc.title} {...fade(i * 0.07)}>
              <Link
                href={svc.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 hover:border-white/[0.14] transition-all"
              >
                <h3 className="font-display font-bold text-white text-base">{svc.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed flex-1">{svc.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: svc.color }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
              style={{ color: `${SF_BLUE}B3` }}
            >
              FAQ
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {faqItems.map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.06)} className="py-6">
                <div className="flex gap-3 mb-2">
                  <HelpCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                  <h3 className="font-display font-semibold text-white text-base leading-snug">{item.q}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/50 pl-7">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: SF_BLUE }} />
          </div>
          <Zap size={24} className="relative mx-auto mb-4" style={{ color: SF_BLUE }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Deploy Agentforce in your Sales Cloud.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We will review your Sales Cloud org, scope the right agent for your pipeline problem, and design a 2–3 week fixed-price pilot — your first agent live and running within a month.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display cursor-pointer"
              style={{ background: SF_BLUE, boxShadow: `0 8px 32px ${SF_BLUE}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </button>
            <Link
              href="/agentforce"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse all agents
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            2–3 week sprint · Fixed-price · Production-grade · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

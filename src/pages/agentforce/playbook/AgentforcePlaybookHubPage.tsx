'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Clock, BookOpen, DollarSign, TrendingUp, Brain, Wrench } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const articles = [
  {
    slug: "scope-your-first-agentforce-agent",
    pill: "Implementation Guide",
    pillColor: SF_BLUE,
    icon: Wrench,
    title: "How to scope your first Agentforce agent: A practitioner's checklist",
    desc: "The 12 questions you must answer before writing a single Topic or Action. Covers use case selection, data readiness, escalation design, and guardrail requirements.",
    readTime: "8 min read",
  },
  {
    slug: "atlas-reasoning-engine-explained",
    pill: "Technical Deep Dive",
    pillColor: "#60A5FA",
    icon: Brain,
    title: "Atlas Reasoning Engine explained: How Agentforce agents actually think",
    desc: "A technical breakdown of hybrid reasoning, topic classification, and action execution — with real org examples showing how the four-phase loop works in production.",
    readTime: "12 min read",
  },
  {
    slug: "financial-services-service-cloud-build",
    pill: "Case Study",
    pillColor: "#34D399",
    icon: BookOpen,
    title: "From 48-hour case resolution to 4 hours: An Agentforce Service Cloud build",
    desc: "Step-by-step walkthrough of a financial services deployment — architecture, MuleSoft integration, and guardrail configuration that achieved 68% autonomous resolution.",
    readTime: "15 min read",
  },
  {
    slug: "agentforce-pricing-guide-2026",
    pill: "Pricing Guide",
    pillColor: "#F59E0B",
    icon: DollarSign,
    title: "Agentforce Pricing Guide 2026: What it really costs to deploy",
    desc: "Per-conversation pricing breakdown, Data Cloud add-ons, Einstein licences, MuleSoft costs, implementation cost ranges, and a full TCO model with Year 1 vs Year 2+ numbers.",
    readTime: "10 min read",
  },
  {
    slug: "agentforce-roi-guide",
    pill: "Business Case",
    pillColor: "#A78BFA",
    icon: TrendingUp,
    title: "The Agentforce ROI Guide: How to build the business case",
    desc: "Cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers. Includes worked examples for Service Cloud and SDR agent deployments.",
    readTime: "9 min read",
  },
  {
    slug: "how-does-agentforce-work",
    pill: "Technical Guide",
    pillColor: "#FB923C",
    icon: Brain,
    title: "How Agentforce works: Atlas Reasoning, Topics, Actions & Trust Layer",
    desc: "Complete technical guide for decision-makers — the four-phase reasoning loop, Topics and Actions building blocks, Einstein Trust Layer, data grounding, and chatbot comparison.",
    readTime: "14 min read",
  },
]

export default function AgentforcePlaybookHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HERO ── */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <span>/</span>
            <span className="text-foreground">Playbook</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ color: SF_BLUE, background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}25` }}
            >
              <BookOpen className="h-3.5 w-3.5" />
              Practitioner Guides · Field Notes · Deep Dives
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              The Agentforce<br />
              <span style={{ color: SF_BLUE }}>Playbook</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Implementation guides, pricing breakdowns, ROI frameworks, and technical deep dives — written by engineers who have deployed Agentforce in production across financial services, healthcare, and B2B SaaS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="lg"
                className="rounded-full px-8"
                onClick={openCalendly}
              >
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  All Agentforce services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "practitioner guides" },
              { value: "$2", label: "per conversation (list price)" },
              { value: "2–3 wks", label: "to production agent" },
              { value: "68%", label: "avg autonomous resolution" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: SF_BLUE }}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight mb-2">All articles</h2>
            <p className="text-muted-foreground">Everything you need before, during, and after your first Agentforce deployment.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={`/agentforce/playbook/${article.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full block"
                >
                  {/* Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ color: article.pillColor, background: `${article.pillColor}15` }}
                    >
                      {article.pill}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg leading-snug mb-3 group-hover:text-accent transition-colors flex-1">
                    {article.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {article.desc}
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: article.pillColor }}
                  >
                    Read article <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>
              Ready to deploy?
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
              Turn the playbook into production
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We build Agentforce pilots in 2–3 weeks, fixed price. Book a scoping call — we&apos;ll map your highest-ROI use case before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="lg"
                className="rounded-full px-10"
                onClick={openCalendly}
              >
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" size="lg" className="rounded-full px-10">
                  Explore Agentforce services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

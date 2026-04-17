'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Database, Server, GitBranch, Zap, ShieldCheck, BarChart3,
  Repeat2, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your data infrastructure challenges, current stack, and goals. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Stack & domain matched"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked data engineers with proven experience in your tooling and domain. You review profiles, join intro calls, and choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get reliable, production-ready data infrastructure.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Data Engineers", desc: "Every data engineer passes a rigorous 5-stage vetting — SQL & Python depth, pipeline architecture, distributed systems, data modelling, and live delivery simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you. Pipeline reliability, data quality, schema design — all checked." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Work happens in structured weekly sprints with clear deliverables. Not open-ended hours billed to a ticket queue." },
  { icon: Database, title: "Data Engineering Depth", desc: "Specialists across pipeline architecture, warehouse design, real-time streaming, dbt modelling, and ML data infrastructure." },
  { icon: BarChart3, title: "Production-Ready Pipelines", desc: "We don't just build pipelines — we deploy them. Monitored, tested, documented, and observable from day one." },
  { icon: Server, title: "Full-Stack Data Coverage", desc: "Your engineer handles ingestion, transformation, orchestration, storage, and the observability layer — end to end." },
]

const buildItems = [
  {
    title: "Data Pipeline Architecture",
    desc: "End-to-end pipelines from ingestion to transformation to serving. Batch and streaming. Built to handle your data volume today and 10x tomorrow.",
  },
  {
    title: "Data Warehouse & Lakehouse Design",
    desc: "Snowflake, BigQuery, Redshift, Databricks — schema design, partitioning strategy, query optimisation, and cost control.",
  },
  {
    title: "Real-Time Streaming Pipelines",
    desc: "Apache Kafka, Spark Streaming, Flink — event-driven architectures for real-time analytics, fraud detection, and live dashboards.",
  },
  {
    title: "Data Modelling & Transformation",
    desc: "dbt models, dimensional modelling, data vault, and semantic layers that make your data reliable and consistent across every tool.",
  },
  {
    title: "ML Feature Stores & AI Data Infra",
    desc: "Feature engineering pipelines, feature stores (Feast, Tecton), training data pipelines, and data infra that makes your ML team 3x faster.",
  },
  {
    title: "Data Quality & Observability",
    desc: "Great Expectations, Monte Carlo, dbt tests — automated data quality checks, anomaly detection, and lineage tracking across your stack.",
  },
]

const forWho = [
  {
    title: "Scale-ups Drowning in Data Debt",
    desc: "Your product generates data but it's messy, unreliable, and nobody trusts the numbers. A data engineer who fixes the foundation, not just the dashboards.",
  },
  {
    title: "AI Teams Who Need Reliable Data",
    desc: "Your ML models are only as good as your data. Data engineers who understand ML infra, feature pipelines, and what production AI systems actually need.",
  },
  {
    title: "CTOs & Heads of Data",
    desc: "You need to modernise your data stack, migrate to the cloud, or build a real-time pipeline — without a 6-month hiring process. Sprint-delivered, Engagement Manager audited.",
  },
]

const timeline = [
  { day: "Day 1",     title: "Submit Your Brief",       desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope requirements, current stack, and data goals." },
  { day: "Day 2–3",   title: "Meet Your Shortlist",     desc: "We surface 2–3 data engineers matched to your tooling and domain. You review profiles, join intro calls, and choose your fit." },
  { day: "Day 3–4",   title: "Milestone Plan Locked",   desc: "You and your engineer agree a sprint plan — pipeline targets, quality benchmarks, timelines, and success criteria before any work begins." },
  { day: "Week 1+",   title: "Sprint & Deliver",        desc: "Your engineer works in focused sprints. Your Engagement Manager audits every output. You review at each milestone checkpoint." },
  { day: "Ongoing",   title: "Scale or Wind Down",      desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",           kovil: "24–48 hours",   inhouse: "2–4 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "Data engineering depth",  kovil: "Deep domain",   inhouse: "Varies",       agency: "Varies",       freelancer: "Varies" },
  { label: "Managed delivery",        kovil: "✓ Always",      inhouse: "✗",            agency: "Partial",      freelancer: "✗" },
  { label: "Risk-free trial",         kovil: "✓ 2 weeks",     inhouse: "✗",            agency: "✗",            freelancer: "Rarely" },
  { label: "Production deploy",       kovil: "✓ Included",    inhouse: "Depends",      agency: "Extra cost",   freelancer: "Varies" },
  { label: "IP ownership",            kovil: "100% yours",    inhouse: "100% yours",   agency: "Often shared", freelancer: "Varies" },
]

const faqs = [
  {
    q: "What does a data engineer do?",
    a: "A data engineer builds and maintains the infrastructure that collects, stores, transforms, and delivers data across an organisation. They design and operate pipelines that move data from source systems into warehouses, lakes, or real-time streams — making it clean, reliable, and accessible for analysts, data scientists, and AI systems. They also own orchestration, data quality, and observability.",
  },
  {
    q: "How quickly can I hire a data engineer through Kovil AI?",
    a: "Most clients are matched with a vetted data engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit before committing to a longer engagement.",
  },
  {
    q: "What tools and technologies do your data engineers work with?",
    a: "Our data engineers are proficient across Python, SQL, dbt, Apache Spark, Kafka, Airflow, Prefect, Snowflake, BigQuery, Redshift, Databricks, and all major cloud platforms — AWS, GCP, and Azure. They cover the full modern data stack from ingestion to serving.",
  },
  {
    q: "What's the difference between a data engineer and a data scientist?",
    a: "A data engineer builds and maintains the systems that collect, transform, and deliver data — pipelines, warehouses, and streaming infrastructure. A data scientist uses that data to build models, run analyses, and generate insights. Data engineers make data scientists productive by ensuring data is clean, reliable, and accessible at scale.",
  },
  {
    q: "How do I know if I need a data engineer or a data analyst?",
    a: "If your data is messy, siloed, or arrives unreliably — you need a data engineer to fix the infrastructure first. If your data is clean and accessible but you need business insights and reporting — a data analyst is the right hire. Most growing companies need both, but the data engineer typically comes first to build the foundation analysts rely on.",
  },
  {
    q: "Can a data engineer help us migrate from our legacy data warehouse?",
    a: "Yes — data warehouse and lakehouse migrations are a core use case for our data engineers. They can assess your current architecture, plan the migration strategy, rewrite legacy ETL jobs into modern dbt models, and execute a zero-downtime cutover. They're experienced with migrations from on-premise systems and legacy warehouses to Snowflake, BigQuery, Databricks, and Redshift.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base pr-4">{item.q}</span>
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

export default function DataEngineersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Data Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a Data Engineer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 data engineers embedded into your team. Data pipelines, warehouses, real-time streaming, ML feature stores — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a Data Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h",   label: "Time to match" },
            { stat: "Top 1%",  label: "Engineer tier" },
            { stat: "100%",    label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What They Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a Data Engineer Build for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Database className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Data Engineer Through Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Data Engineer with Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    <Clock className="h-3 w-3" />{step.timeline}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a data engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your data challenge. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">
              Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What&apos;s Included When You Hire a Data Engineer Through Kovil AI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a Data Engineer?</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
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

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a Data Engineer?</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Big Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring Data Engineers</h2>
          <div className="max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/machine-learning-engineers", label: "Hire Machine Learning Engineers", desc: "ML pipelines, model training, production ML" },
            { href: "/hire/mlops-engineers",            label: "Hire MLOps Engineers",            desc: "CI/CD for ML, model monitoring, infra" },
            { href: "/engage/managed-ai-engineer",      label: "Managed AI Engineer",             desc: "Embedded AI engineer for any AI task" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group"
            >
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your data engineer?</h2>
            <p className="text-background/60 text-base">Tell us your data challenge. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a Data Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}

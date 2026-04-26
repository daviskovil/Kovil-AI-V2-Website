'use client'

import { motion } from "motion/react"
import {
  UserCheck, Mail, MessageSquareMore, CalendarCheck, TrendingUp, Zap,
  CheckCircle2, Clock, ArrowRight, ChevronRight
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "SDR Agent Scoping",
    description: "We map your inbound lead sources, qualification criteria, objection patterns, and CRM field requirements — defining the exact Topics, Actions, and handoff logic your SDR agent needs.",
    bullets: ["Lead qualification criteria defined", "Objection library documented", "CRM integration points mapped"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & CRM Integration",
    description: "The SDR agent is built inside Agent Builder, wired to your Sales Cloud CRM records, lead scoring models, and calendar booking system — then tested against real lead scenarios.",
    bullets: ["Agent Builder configuration complete", "Sales Cloud CRM fully integrated", "Personalised outreach templates built"],
  },
  {
    number: "03",
    timeline: "Week 4",
    title: "Pilot & Scale",
    description: "We run a supervised pilot on a subset of inbound leads, monitor conversion metrics in real time, tune agent behaviour, and then open the floodgates for full-volume deployment.",
    bullets: ["Supervised pilot with real leads", "Conversion metrics benchmarked", "Full-volume scale with monitoring"],
  },
]

const features = [
  {
    icon: UserCheck,
    title: "Lead Qualification Agent",
    desc: "Inbound leads are engaged, qualified against your ICP criteria, and scored in real time — before a single rep spends a minute on them. Bad leads filtered out automatically.",
  },
  {
    icon: Mail,
    title: "Personalised Outreach Drafting",
    desc: "The agent drafts personalised follow-up emails grounded in CRM data, lead source, and company context — reviewed and sent by reps or dispatched autonomously based on your preference.",
  },
  {
    icon: MessageSquareMore,
    title: "Objection Handling",
    desc: "Common objections — pricing, timing, competitor comparisons — are handled by the agent using approved messaging, with complex objections escalated to a rep with full conversation context.",
  },
  {
    icon: CalendarCheck,
    title: "Meeting Booking",
    desc: "Qualified leads are guided to book a discovery call directly in your calendar system — zero rep involvement required from first touch to confirmed meeting on the calendar.",
  },
  {
    icon: TrendingUp,
    title: "Pipeline Health Monitoring",
    desc: "The agent monitors stalled deals, flags aged leads, and nudges dormant opportunities — keeping your pipeline clean and ensuring no qualified lead falls through the cracks.",
  },
  {
    icon: Zap,
    title: "Rep Activity Offloading",
    desc: "Routine tasks — data entry, follow-up sequencing, CRM updates after calls — are handled by the agent, freeing your reps to focus exclusively on high-value conversations.",
  },
]

const forWho = [
  {
    label: "Sales Teams with High Inbound Volume",
    desc: "Your team is drowning in inbound leads but can't qualify them fast enough. The SDR agent handles first touch, qualification, and follow-up at any volume — without adding headcount.",
  },
  {
    label: "RevOps Teams Reducing CAC",
    desc: "Every uncontacted lead is a wasted acquisition cost. This agent ensures zero leads go unengaged, shortens time-to-first-contact to under 5 minutes, and cuts CAC by eliminating manual SDR work.",
  },
  {
    label: "SDR-Heavy Orgs Scaling Without Headcount",
    desc: "You need to scale outreach capacity 3–5x without tripling your SDR payroll. Agentforce SDR handles the volume; your reps handle the relationships.",
  },
]

export default function SalesCloudAgentDeploymentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Sales Cloud Agent Deployment</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            Sales Cloud Agent Deployment
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            An SDR that never sleeps,{" "}
            <span className="text-accent">never forgets a follow-up.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Agentforce SDR agents that qualify inbound leads, handle objections, draft personalised outreach, and book discovery calls — autonomously, inside your Sales Cloud org.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              className="rounded-full font-semibold px-8 text-base h-12"
              onClick={openCalendly}
            >
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Agentforce
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          How It Works
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Live SDR agent in four weeks, scaling from day one.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
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
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
            What&apos;s Included
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
            A complete autonomous sales development layer.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
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
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${SF_BLUE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: SF_BLUE }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          Who It&apos;s For
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Scale your pipeline without scaling your payroll.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${SF_BLUE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: SF_BLUE }} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Ready to deploy your first autonomous SDR?
            </h2>
            <p className="text-background/60 text-base">
              Book a call and we&apos;ll scope your Sales Cloud agent and pipeline impact in 30 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap"
              onClick={openCalendly}
            >
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Agentforce
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

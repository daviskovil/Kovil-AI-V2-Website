'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Clock, Mail, Calendar, Lightbulb, FileText, BookOpen, Cpu, Shield, Zap, Users } from "lucide-react"
import { Button } from "../components/ui/button"

// ── What happens next ─────────────────────────────────────────────────────────
const nextSteps = [
  {
    icon: Mail,
    step: "01",
    title: "Check your inbox",
    desc: "A calendar invite is on its way with the meeting link. Check spam if you don't see it within 5 minutes.",
  },
  {
    icon: FileText,
    step: "02",
    title: "We'll do our homework",
    desc: "Before the call, our team will research your company, your stack, and your space — so we show up with context, not just questions.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "An honest conversation",
    desc: "No sales deck. No pitch. We'll talk through your AI challenge, share our honest read on what's realistic, and map out what a first sprint could look like.",
  },
]

// ── Prep checklist ────────────────────────────────────────────────────────────
const prepItems = [
  "The specific problem or process you want AI to solve",
  "Your current tech stack (even rough details help)",
  "Who will own the AI system internally once it's live",
  "A sense of your ideal timeline",
  "Any previous AI attempts — what worked, what didn't",
]

// ── Insights cards ────────────────────────────────────────────────────────────
const insights = [
  {
    tag: "COMMON MISTAKE",
    icon: Shield,
    color: "#EF4444",
    bg: "#EF444410",
    title: "Starting with the model, not the problem",
    body: "Most failed AI projects pick a tool first — GPT, Claude, Llama — and then try to fit a business problem to it. The teams that succeed define the measurable outcome first, then choose the smallest model that achieves it.",
  },
  {
    tag: "WHAT WE'VE SEEN",
    icon: Zap,
    color: "#F97316",
    bg: "#F9731610",
    title: "The 80/20 of AI project success",
    body: "80% of the value in an AI build comes from data quality and retrieval — not the model. Getting your document chunking strategy, your embedding model, and your retrieval pipeline right matters far more than which LLM you choose.",
  },
  {
    tag: "PLANNING TIP",
    icon: Users,
    color: "#0078D4",
    bg: "#0078D410",
    title: "Identify your human-in-the-loop early",
    body: "Every production AI system needs a named human who owns the output quality. Before the build starts, decide who reviews edge cases, who tunes guardrails, and who the escalation path is for when the agent gets it wrong.",
  },
  {
    tag: "SCOPE ADVICE",
    icon: Lightbulb,
    color: "#8B5CF6",
    bg: "#8B5CF610",
    title: "Narrow scope ships. Broad scope stalls.",
    body: "The most successful first AI agents do one thing extremely well — then expand. Teams that try to automate five processes in sprint one deliver none of them. Pick the highest-value single workflow, prove ROI, then scale.",
  },
]

// ── Resources ─────────────────────────────────────────────────────────────────
const resources = [
  {
    icon: BookOpen,
    label: "Playbook",
    title: "How to scope your first AI agent",
    href: "/agentforce/playbook/scope-your-first-agentforce-agent",
    desc: "The questions to answer before any build begins.",
  },
  {
    icon: FileText,
    label: "Case Study",
    title: "See how we build in practice",
    href: "/case-studies",
    desc: "Real projects, real results, real timelines.",
  },
  {
    icon: Cpu,
    label: "Services",
    title: "Explore our engagement models",
    href: "/how-it-works",
    desc: "Fixed-price sprints, managed engineers, or rescue — pick your fit.",
  },
]

export default function MeetingConfirmedPage() {
  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* ── HERO ── */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-2xl scale-150" />
            <div className="relative h-20 w-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-500" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-widest uppercase mb-5">
            <Clock className="h-3 w-3" /> You&apos;re confirmed
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5">
            Your call is booked.<br />
            <span className="text-accent">We&apos;re looking forward to it.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A calendar invite is heading to your inbox now. While you wait, here's everything you need to know about what happens next — and a few things worth thinking about before we speak.
          </p>
        </motion.div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="border-t border-border py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">What happens next</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Three things to expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-muted-foreground">{step.step}</span>
                  <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="h-4.5 w-4.5 text-accent" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREP CHECKLIST ── */}
      <section className="py-16 bg-accent/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">Before the call</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-2">5 things worth thinking about</h2>
            <p className="text-muted-foreground mb-8">
              You don&apos;t need slides or a brief — just a rough answer to each of these. The more context you can share, the more useful we can be on the call.
            </p>

            <div className="space-y-3">
              {prepItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl px-5 py-4"
                >
                  <div className="h-5 w-5 rounded-full border-2 border-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-accent">{i + 1}</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">While you wait</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-3">
              4 things we&apos;ve learned from 100+ AI builds
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Honest observations from the projects that worked — and the ones that didn&apos;t.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {insights.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: card.bg }}>
                    <card.icon className="h-4 w-4" style={{ color: card.color }} />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: card.color }}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base mb-2 leading-snug">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESOURCES ── */}
      <section className="py-16 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-mono text-accent tracking-widest uppercase mb-3">Explore</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Useful reading before we speak</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={r.href} className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center">
                      <r.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">{r.label}</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-2 group-hover:text-accent transition-colors leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-sm">{r.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              <Calendar className="h-3 w-3" /> See you on the call
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
              Questions before we meet?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              If anything comes up before the call — scope questions, technical details, or just want to send some context ahead — drop us a line. We read every message.
            </p>
            <Link href="/contact">
              <Button variant="accent" size="lg" className="rounded-full px-8 h-12 text-base">
                Send us a message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

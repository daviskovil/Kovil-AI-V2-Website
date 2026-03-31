import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield, CheckCircle2, ArrowRight, Clock, ChevronDown,
  AlertTriangle, Stethoscope, Wrench, Activity, Lock, HeartPulse
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

const steps = [
  {
    number: "01", timeline: "Days 1–3",
    title: "Deep Audit",
    description: "Our SWAT team audits your full codebase, AI architecture, RAG pipeline, and production logs. You receive a prioritised diagnostic report — every bug, bottleneck, and risk mapped.",
    bullets: ["Codebase + AI layer reviewed", "Prioritised fix list delivered", "No commitment to proceed required"],
  },
  {
    number: "02", timeline: "Weeks 1–2",
    title: "Fix & Stabilise",
    description: "We resolve hallucinations, performance regressions, and critical P1 bugs systematically. Every fix is peer-reviewed and regression-tested before it goes near production.",
    bullets: ["Hallucination & RAG accuracy fixes", "Performance & uptime restoration", "Peer-reviewed before each deploy"],
  },
  {
    number: "03", timeline: "Month 1 onwards",
    title: "Ongoing Maintenance",
    description: "We stay on as your reliability partner — proactive monitoring, patching, and continuous optimisation. Named engineer, guaranteed SLA, no surprises.",
    bullets: ["Named engineer on your account", "Proactive monitoring & alerting", "99.9% uptime SLA guarantee"],
  },
]

const whatWeFix = [
  { icon: AlertTriangle, title: "LLM Hallucinations", desc: "RAG pipelines returning fabricated answers, incorrect citations, or context misalignment — traced, tuned, and resolved." },
  { icon: Activity, title: "Performance Regressions", desc: "Slow inference, high latency, unscalable architectures — we profile, optimise, and load-test before declaring it fixed." },
  { icon: Wrench, title: "P1 Production Bugs", desc: "Critical failures in AI workflows, broken integrations, or cascading errors in agent pipelines — triaged and fixed fast." },
  { icon: Stethoscope, title: "Half-Finished Vibe Builds", desc: "Received a half-built app from an agency or AI tool? We audit what exists, rescue what's salvageable, and complete it properly." },
  { icon: HeartPulse, title: "Reliability & Uptime Gaps", desc: "Flaky deployments, missing error handling, no observability — we build the reliability layer your AI app was missing." },
  { icon: Lock, title: "Security & Data Risks", desc: "Exposed API keys, prompt injection vulnerabilities, insecure data pipelines — identified and hardened as part of the audit." },
]

const forWho = [
  { label: "Teams with a Broken AI Build", desc: "Your AI app is in production but performing badly — hallucinating, crashing, or losing users. You need it fixed fast." },
  { label: "Founders Burned by Agencies", desc: "An agency or offshore team delivered a half-built mess. We audit what's there, salvage what works, and complete the build." },
  { label: "CTOs Managing Legacy AI Debt", desc: "Technical debt has accumulated across your AI stack. You need a structured audit and a clear path to stability." },
]

const timeline = [
  { day: "Day 1", title: "Intake Call & NDA Signed", desc: "We hop on a call, understand your situation, sign an NDA, and get read access to your codebase and production logs. Urgent cases can start same day." },
  { day: "Days 1–3", title: "Full Diagnostic Audit", desc: "Our SWAT team audits your codebase, AI architecture, RAG pipeline, and production metrics. Every bug, bottleneck, and risk is mapped and prioritised." },
  { day: "Day 3–4", title: "Diagnostic Report Delivered", desc: "You receive a prioritised fix list with severity ratings, root cause analysis, and a recommended remediation plan. No commitment required to proceed." },
  { day: "Weeks 1–2", title: "Fix & Stabilise", desc: "We resolve P1 bugs, hallucinations, performance regressions, and structural issues — peer-reviewed and regression-tested before every deploy." },
  { day: "Month 1+", title: "Ongoing Maintenance (Optional)", desc: "Stay on a reliability retainer — proactive monitoring, patching, and a 99.9% uptime SLA with a named engineer on your account." },
]

const comparison = [
  { label: "Free audit first",       kovil: "✓ Always",          existing: "Rarely",          freelancer: "✗",           inhouse: "✗" },
  { label: "AI-specialist SWAT",     kovil: "✓ Dedicated team",  existing: "Generic devs",    freelancer: "Varies",      inhouse: "Depends" },
  { label: "Starts within",          kovil: "24–48 hours",        existing: "Weeks",           freelancer: "Varies",      inhouse: "Weeks" },
  { label: "SLA guarantee",          kovil: "99.9% uptime",       existing: "Rarely",          freelancer: "✗",           inhouse: "Internal only" },
  { label: "Vibe-coded app rescue",  kovil: "✓ Speciality",       existing: "Maybe",           freelancer: "Risky",       inhouse: "Slow" },
  { label: "No long-term lock-in",   kovil: "✓ Audit only first", existing: "Often contracts", freelancer: "✓",           inhouse: "N/A" },
]

export default function AppRescuePage() {

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">AI Reliability & App Rescue</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Stop the Bleeding.<br />
            <span className="text-accent">Fix Your AI App.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Failing AI app, hallucinating RAG, or a half-finished vibe-coded build? Our SWAT team audits, fixes, and stabilises it — with a 99.9% uptime SLA on maintenance.
          </p>
          <div className="flex flex-wrap gap-4">
            <OnboardingModal defaultGoal="rescue">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Get Rescued <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="self-center text-sm text-muted-foreground">Free diagnostic audit. No commitment to proceed.</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "24h", label: "Audit kickoff" },
            { stat: "99.9%", label: "Uptime SLA" },
            { stat: "P1", label: "Emergency triage" },
            { stat: "Free", label: "Diagnostic audit" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">If your AI app is struggling, we're the call you make.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Audit. Fix. Maintain. In that order.</h2>
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
              <ul className="space-y-2 mt-auto">
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

      {/* What We Fix */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What We Fix</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every layer of your AI app, covered.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeFix.map((item, i) => {
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

      {/* What to Expect Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From distress call to stable app — here's how it unfolds.</h2>
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

      {/* Why Kovil vs Alternatives */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil</p>
        <h2 className="font-display font-bold text-3xl mb-12">Why teams choose us over their existing options.</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Existing Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.existing}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to fix your AI app?</h2>
            <p className="text-background/60 text-base">Start with a free audit. No commitment to proceed until you've seen the report.</p>
          </div>
          <OnboardingModal defaultGoal="rescue">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Get Rescued <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}

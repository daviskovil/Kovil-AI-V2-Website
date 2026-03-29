import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users, CheckCircle2, ArrowRight, Clock, ChevronDown,
  Zap, ShieldCheck, BarChart3, Repeat2, Globe2, Brain
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form. A Delivery Lead contacts you within 24 hours to scope your requirements, preferred stack, and timeline.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Stack & timezone matched"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Builder",
    description: "We surface a curated shortlist of Tier-1 AI builders matched to your domain. You meet, align on sprint goals, and sign off on a milestone plan.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your builder works in focused sprints. A Shadow Lead audits every milestone output. You get working, production-ready AI — not decks, not promises.",
    bullets: ["Weekly milestone check-ins", "Shadow Lead quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Builder", desc: "Every builder passes a rigorous 5-stage technical vetting — coding, system design, AI depth, and live delivery simulation." },
  { icon: Repeat2, title: "Shadow Lead Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you. No surprises, no silent drift." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Work happens in structured weekly sprints with clear deliverables. Not open-ended hours billed to a ticket queue." },
  { icon: Globe2, title: "Timezone Matched", desc: "We match your builder to overlap with your core working hours — real-time collaboration, not async delays." },
  { icon: BarChart3, title: "Progress Dashboard", desc: "View sprint goals, completed work, and upcoming milestones in one place. Full visibility at all times." },
  { icon: Brain, title: "AI Domain Depth", desc: "Builders specialise across LLMs, RAG pipelines, voice AI, agent frameworks, and MLOps — not generalist developers." },
]

const forWho = [
  { label: "Growing Startups", desc: "Need AI velocity without building a full in-house team. Get a builder embedded immediately." },
  { label: "Enterprises Augmenting Teams", desc: "Your team has direction but needs specialist AI execution. We slot in without friction." },
  { label: "CTOs & Heads of Engineering", desc: "Want reliable AI delivery without managing freelancers, agencies, or offshore vendors." },
]

const faqs = [
  { q: "How long does it take to match a builder?", a: "Typically 24–48 hours. We maintain an active bench of vetted builders across AI domains and timezones, so matching is fast." },
  { q: "What if the builder isn't a fit after we start?", a: "You're covered by a two-week risk-free trial. If the match isn't right, we rematch at no extra cost — no questions asked." },
  { q: "Can I scale up to multiple builders?", a: "Yes. Once the first builder is embedded and productive, we can add a second or third based on sprint capacity and roadmap needs." },
  { q: "Who owns the code and IP?", a: "You do — 100%. All work product, code, and AI models built during the engagement are fully assigned to your company." },
  { q: "Do I need to manage the builder day-to-day?", a: "Minimal management needed. Your builder is self-directed within each sprint. The Shadow Lead handles quality. You review outputs at milestones." },
]

export default function ManagedAIBuilderPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Managed AI Builder</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Ship AI Features Faster —<br />
            <span className="text-accent">Fully Managed Delivery.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Embed a vetted Tier-1 AI builder into your team. Every sprint is milestone-gated, Shadow Lead audited, and built to production standard.
          </p>
          <div className="flex flex-wrap gap-4">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire an AI Builder <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="self-center text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h", label: "Time to match" },
            { stat: "Top 1%", label: "Builder tier" },
            { stat: "100%", label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Built for teams that need AI done right.</h2>
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
                  <Users className="h-4 w-4 text-accent" />
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From brief to builder in 48 hours.</h2>
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

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Everything managed. Nothing left to chance.</h2>
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

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="font-display font-bold text-3xl mb-10">Common questions.</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold hover:bg-muted/30 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your AI builder?</h2>
            <p className="text-background/60 text-base">Tell us what you need. We'll match you in 48 hours.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire an AI Builder <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}

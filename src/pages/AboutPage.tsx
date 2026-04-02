import { Helmet } from "react-helmet-async"
import { motion } from "motion/react"
import { ArrowRight, Zap, Shield, Users, Target, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

const values = [
  {
    icon: Target,
    title: "Outcome-first delivery",
    desc: "We measure ourselves by what ships, not by hours logged. Every engagement is milestone-gated — you approve each stage before we move forward.",
  },
  {
    icon: Shield,
    title: "Managed accountability",
    desc: "An Engagement Manager owns every project. Not just a PM — someone who speaks AI fluently and holds the quality bar end to end.",
  },
  {
    icon: Zap,
    title: "Zero onboarding tax",
    desc: "Our engineers are pre-vetted and AI-native. They join your codebase and start contributing from day one — no ramp-up, no hand-holding.",
  },
  {
    icon: Users,
    title: "Top 5% only",
    desc: "We run a rigorous technical assessment: live coding, LLM architecture challenges, system design, and domain-specific AI tasks. Only the best join the Kovil network.",
  },
]

const timeline = [
  { year: "2022", label: "Founded", desc: "Kovil AI was founded in New York by a team of engineers who saw too many AI projects fail not from bad ideas — but from bad delivery." },
  { year: "2023", label: "First 10 clients", desc: "We refined the managed delivery model across fintech, healthcare, and SaaS — shipping AI that actually worked in production." },
  { year: "2024", label: "Three engagement models", desc: "We formalised our three offerings: Managed AI Engineer, Outcome-Based AI Projects, and AI Reliability & App Rescue." },
  { year: "2025", label: "Scaling up", desc: "Expanded the engineer network globally, introduced the Engagement Manager role, and launched milestone-gated delivery as a core commitment." },
  { year: "2026", label: "Today", desc: "Kovil AI operates as a fully managed AI engineering service trusted by product teams across the US, UK, and beyond." },
]

const stats = [
  { value: "Top 5%", label: "of applicants accepted" },
  { value: "2-week", label: "risk-free trial on every engagement" },
  { value: "3", label: "engagement models for every situation" },
  { value: "Zero", label: "failed deliveries — milestone-gated" },
]

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Kovil AI — Managed AI Engineering, Zero Delivery Risk</title>
        <meta name="description" content="Kovil AI is a managed AI engineering company based in New York. We embed vetted AI engineers into your team and own the delivery. Learn how we work and why we're different." />
        <link rel="canonical" href="https://kovil.ai/about" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kovil AI",
          "url": "https://kovil.ai",
          "logo": "https://kovil.ai/kovil-logo-dark.png",
          "description": "Managed AI engineering company. We embed vetted AI engineers into your team with milestone-gated delivery and zero risk.",
          "address": { "@type": "PostalAddress", "addressLocality": "Garden City", "addressRegion": "NY", "addressCountry": "US" },
          "sameAs": ["https://www.linkedin.com/company/kovil-ai/"]
        })}</script>
      </Helmet>

      <div className="pt-20 min-h-screen bg-background">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">About Kovil AI</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                We Make AI<br />
                <span className="text-accent">Actually Ship.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Kovil AI is a managed AI engineering company. We embed vetted AI engineers into your team, build AI projects at a fixed price and timeline, and rescue AI applications that aren't working. We don't just provide talent — we own the delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" size="lg" className="rounded-full px-8">
                    Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/case-studies">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-6">
                  <p className="font-display text-3xl font-bold text-accent mb-1">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-foreground py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-mono text-accent tracking-widest uppercase mb-6">Our Mission</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-background leading-tight mb-8">
                "Most AI projects fail not because the idea was bad — but because delivery was broken."
              </h2>
              <p className="text-background/60 text-lg leading-relaxed max-w-2xl mx-auto">
                We built Kovil AI to close the gap between AI's potential and reliable AI delivery. Every system we design, every engineer we place, every project we take on — runs through a managed delivery process that owns the outcome, not just the hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">How We Work</p>
            <h2 className="font-display text-4xl font-bold text-foreground">Built on four principles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-card border-y border-border py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-foreground">How we got here</h2>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-border" />

              <div className="space-y-10">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="w-[72px] flex-shrink-0 text-right">
                      <span className="font-mono text-sm font-bold text-accent">{t.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-0.5">
                      <div className="h-4 w-4 rounded-full bg-accent border-4 border-background relative z-10" />
                    </div>
                    <div className="pb-2">
                      <p className="font-display font-bold text-foreground mb-1">{t.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we're not */}
        <section className="max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Clarity</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">What Kovil AI is not</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We're deliberately different from the alternatives. Here's what you won't get from us.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Not a staffing agency", desc: "We don't drop an engineer on you and disappear. We manage the delivery and own the outcome." },
              { label: "Not a freelance marketplace", desc: "Every engineer is pre-vetted, managed, and backed by an Engagement Manager. No vetting burden on you." },
              { label: "Not a big agency", desc: "No 12-week discovery phases, no bloated teams, no surprise scope changes. We're lean, fast, and accountable." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <h3 className="font-bold text-sm text-foreground">{item.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-foreground rounded-2xl p-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-background mb-3">Ready to ship your AI?</h2>
            <p className="text-background/60 mb-8 max-w-md mx-auto">Book a 30-minute discovery call. No sales pitch — we'll listen to what you're building and tell you honestly if we can help.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg" className="rounded-full px-8">
                  Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-background hover:bg-white/10">
                  Send us a message
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  )
}

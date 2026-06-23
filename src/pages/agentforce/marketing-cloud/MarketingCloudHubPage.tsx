'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, BarChart2, Mail, Calendar, Shield, Brain } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const useCases = [
  {
    slug: "campaign-execution-agent",
    icon: BarChart2,
    color: SF_BLUE,
    title: "Campaign Execution Agent",
    subtitle: "Autonomous campaign monitoring and optimisation",
    desc: "Monitors campaign performance in real time, adjusts segment targeting based on engagement signals, pauses underperforming journeys, and escalates to your marketing team when human judgement is needed.",
    stat: { value: "3×", label: "faster campaign iteration cycles" },
  },
  {
    slug: "lead-nurture-agent",
    icon: Mail,
    color: "#60A5FA",
    title: "Lead Nurture Agent",
    subtitle: "Personalised content sequences at scale",
    desc: "Delivers personalised content sequences based on real-time engagement signals, intent data, and CRM history. Scores leads continuously and routes sales-ready prospects to your SDR team with full context.",
    stat: { value: "+34%", label: "increase in qualified pipeline" },
  },
  {
    slug: "event-webinar-agent",
    icon: Calendar,
    color: "#34D399",
    title: "Event & Webinar Agent",
    subtitle: "End-to-end event operations — automated",
    desc: "Manages registrations, sends personalised reminders, follows up post-event with tailored content based on session attendance, and scores leads for sales handoff — without a single manual email.",
    stat: { value: "60%", label: "of event ops time reclaimed" },
  },
]

export default function MarketingCloudHubPage() {
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
            <span className="text-foreground">Marketing Cloud</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
                style={{ color: SF_BLUE, background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}25` }}>
                Agentforce · Marketing Cloud
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Agentforce for<br />
                <span style={{ color: SF_BLUE }}>Marketing Teams</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Campaign execution agents, personalised lead nurture sequences, and end-to-end event automation — deployed in Marketing Cloud so your team focuses on strategy, not execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
                  Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/agentforce">
                  <Button variant="outline" size="lg" className="rounded-full px-8">All Agentforce services</Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — dark 3D panel */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
              className="hidden lg:block" style={{ perspective: "1400px" }}>
              <div className="rounded-2xl p-5 space-y-3 relative overflow-hidden" style={{
                background: "linear-gradient(145deg, #0d1117 0%, #0c1629 50%, #0f0d1a 100%)",
                transform: "rotateY(-10deg) rotateX(4deg)", transformStyle: "preserve-3d",
                boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,161,224,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}>
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,161,224,0.6), transparent)" }} />
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,161,224,0.12) 0%, transparent 70%)" }} />

                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                  <span className="text-[11px] font-mono" style={{ color: SF_BLUE }}>AI Agent · Marketing Cloud</span>
                </div>

                <div className="rounded-xl p-3 space-y-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[10px] font-mono text-gray-500 mb-2">CAMPAIGN SIGNALS</p>
                  {[
                    { label: "Email CTR dropped 18% — Segment B", color: SF_BLUE },
                    { label: "Webinar attendee — High intent", color: "#60A5FA" },
                    { label: "New MQL — Score 87/100", color: "#34D399" },
                  ].map((doc) => (
                    <div key={doc.label} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: doc.color }} />
                      <span className="text-[11px] text-gray-300">{doc.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-3" style={{ background: `${SF_BLUE}12`, border: `1px solid ${SF_BLUE}30` }}>
                  <p className="text-[10px] font-mono mb-2" style={{ color: SF_BLUE }}>ATLAS REASONING ENGINE</p>
                  <div className="space-y-1.5">
                    {["Engagement Signal Analysis", "Content & Segment Matching", "Journey Optimisation"].map((step) => (
                      <div key={step} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                        <span className="text-[11px] text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[10px] font-mono text-gray-500 mb-2">ACTIONS TAKEN</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div><span className="text-gray-500">Journey: </span><span style={{ color: "#34D399" }}>Variant B activated</span></div>
                    <div><span className="text-gray-500">MQL: </span><span className="text-gray-200">Routed to SDR</span></div>
                    <div><span className="text-gray-500">Sequence: </span><span className="text-gray-200">Personalised × 3</span></div>
                    <div><span className="text-gray-500">Lead: </span><span className="text-gray-200">Score updated</span></div>
                  </div>
                </div>

                <p className="text-[10px] font-mono text-center text-gray-600 pt-1">Journey updated · MQL routed · CRM synced</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "3×", label: "faster campaign iteration" },
              { value: "+34%", label: "increase in qualified pipeline" },
              { value: "60%", label: "event ops time reclaimed" },
              { value: "2–3 wks", label: "to production agent" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold" style={{ color: SF_BLUE }}>{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASE CARDS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Marketing Cloud Use Cases</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-3">Three agents. One complete marketing operation.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Deploy one use case as a pilot, then expand across your full marketing motion as confidence builds.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={uc.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={`/agentforce/marketing-cloud/${uc.slug}`}
                  className="group bg-card border border-border rounded-2xl p-7 hover:shadow-lg transition-all duration-300 flex flex-col h-full block"
                  style={{ borderTopWidth: "3px", borderTopColor: uc.color }}>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${uc.color}15`, border: `1px solid ${uc.color}30` }}>
                    <uc.icon className="h-5 w-5" style={{ color: uc.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-1 group-hover:text-accent transition-colors">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{uc.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{uc.desc}</p>
                  <div className="rounded-xl p-3 mb-4" style={{ background: `${uc.color}10`, border: `1px solid ${uc.color}20` }}>
                    <div className="font-display font-bold text-2xl" style={{ color: uc.color }}>{uc.stat.value}</div>
                    <div className="text-xs text-muted-foreground">{uc.stat.label}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: uc.color }}>
                    Deep-dive <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE + CTA ── */}
      <section className="border-t border-border py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5" style={{ color: SF_BLUE }} />
              <span className="text-sm font-semibold">Einstein Trust Layer · Zero data retention · GDPR-safe outreach guardrails</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Grounded in Data Cloud unified profiles · Not generic AI responses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>2-week risk-free pilot</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Deploy your first Marketing Cloud agent in 2 weeks</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Fixed price. Measurable outcome. If it doesn&apos;t deliver, you don&apos;t pay.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="rounded-full px-10" onClick={openCalendly}>
                Start my pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" size="lg" className="rounded-full px-10">Explore all Agentforce services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Brain, BookOpen, Shield } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const useCases = [
  {
    slug: "autonomous-case-resolution",
    icon: CheckCircle2,
    color: SF_BLUE,
    title: "Autonomous Case Resolution",
    subtitle: "L1 & L2 case handling without human touch",
    desc: "Handles refunds, order status, rescheduling, policy queries, and troubleshooting — with live account context from CRM and Data Cloud. Our clients average 65%+ autonomous resolution on day one.",
    stat: { value: "68%", label: "cases resolved autonomously" },
  },
  {
    slug: "intelligent-escalation",
    icon: Users,
    color: "#60A5FA",
    title: "Intelligent Escalation",
    subtitle: "Smart routing with full context pre-loaded",
    desc: "Detects case complexity, customer sentiment, SLA risk, and churn signals — routes to the right human agent with the full conversation context, account history, and suggested resolution pre-loaded.",
    stat: { value: "4.2 hrs", label: "avg resolution (was 48 hrs)" },
  },
  {
    slug: "knowledge-base-agent",
    icon: BookOpen,
    color: "#34D399",
    title: "Knowledge Base Agent",
    subtitle: "Surfaces articles, flags gaps, updates docs",
    desc: "Surfaces relevant knowledge articles mid-conversation, identifies content gaps from unresolved patterns, and drafts documentation updates based on resolved case history — keeping your knowledge base current without manual effort.",
    stat: { value: "85%", label: "first-contact resolution rate" },
  },
]

export default function ServiceCloudHubPage() {
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
            <span className="text-foreground">Service Cloud</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
                style={{ color: SF_BLUE, background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}25` }}>
                Agentforce · Service Cloud
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                Agentforce for<br />
                <span style={{ color: SF_BLUE }}>Customer Service</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Autonomous case resolution, intelligent escalation, and self-updating knowledge — deployed in Service Cloud with 65%+ autonomous resolution rates from week one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
                  Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/agentforce/services/service-cloud-agent-deployment">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Service Cloud deployment
                  </Button>
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

                {/* Status */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                  <span className="text-[11px] font-mono" style={{ color: SF_BLUE }}>AI Agent · Service Cloud</span>
                </div>

                {/* Input docs */}
                <div className="rounded-xl p-3 space-y-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[10px] font-mono text-gray-500 mb-2">INCOMING CASES</p>
                  {[
                    { label: "Case #45821 — Return Request", color: SF_BLUE },
                    { label: "Email — Billing Complaint", color: "#60A5FA" },
                    { label: "Chat — Order Not Arrived", color: "#34D399" },
                  ].map((doc) => (
                    <div key={doc.label} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ background: doc.color }} />
                      <span className="text-[11px] text-gray-300">{doc.label}</span>
                    </div>
                  ))}
                </div>

                {/* AI processing */}
                <div className="rounded-xl p-3" style={{ background: `${SF_BLUE}12`, border: `1px solid ${SF_BLUE}30` }}>
                  <p className="text-[10px] font-mono mb-2" style={{ color: SF_BLUE }}>ATLAS REASONING ENGINE</p>
                  <div className="space-y-1.5">
                    {["Customer 360 Context", "Policy & Entitlement Check", "Sentiment Analysis"].map((step) => (
                      <div key={step} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                        <span className="text-[11px] text-gray-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output */}
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[10px] font-mono text-gray-500 mb-2">RESOLUTION</p>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div><span className="text-gray-500">Customer: </span><span className="text-gray-200">Lisa Park</span></div>
                    <div><span className="text-gray-500">Action: </span><span style={{ color: "#34D399" }}>Auto-resolved ✓</span></div>
                    <div><span className="text-gray-500">Refund: </span><span className="text-gray-200">$89.99 initiated</span></div>
                    <div><span className="text-gray-500">CSAT: </span><span className="text-gray-200">Survey sent</span></div>
                  </div>
                </div>

                <p className="text-[10px] font-mono text-center text-gray-600 pt-1">Case closed · Refund initiated · Survey sent</p>
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
              { value: "68%", label: "cases resolved autonomously" },
              { value: "4.2 hrs", label: "avg resolution (was 48 hrs)" },
              { value: "$340K", label: "avg annual cost reduction" },
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

      {/* ── USE CASE HUB CARDS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">Service Cloud Use Cases</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-3">Three agents. One complete service operation.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Each use case is a standalone deployment — start with one, expand to all three as your confidence grows.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={uc.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={`/agentforce/service-cloud/${uc.slug}`}
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

      {/* ── COMPLIANCE STRIP ── */}
      <section className="border-t border-border py-10 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5" style={{ color: SF_BLUE }} />
              <span className="text-sm font-semibold">Every deployment includes Einstein Trust Layer · Zero data retention · Full audit logging</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Grounded in live CRM data · Not hallucinating from stale context</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>2-week risk-free pilot</p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Deploy your first Service Cloud agent in 2 weeks</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Fixed price. We scope the use case, build, and deploy. If it doesn&apos;t hit your agreed metrics, you don&apos;t pay.
            </p>
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

'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Clock, Shield, Brain, Zap, FileText } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { openCalendly } from "../../../../lib/calendly"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

const SF_BLUE = "#00A1E0"

export interface UseCase {
  id: string
  icon: LucideIcon
  color: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
}

export interface BuildStep {
  number: string
  label: string
  title: string
  desc: string
  bullets: string[]
}

export interface ComplianceItem {
  icon: LucideIcon
  title: string
  desc: string
}

export interface StatItem {
  stat: string
  label: string
}

export interface HeroPanel {
  agentLabel: string
  inputDocs: { label: string; color: string }[]
  processingSteps: string[]
  outputFields: { label: string; value: string }[]
  footerText: string
}

export interface IndustryPageData {
  breadcrumb: string
  industryTag: string
  headline: string
  headlineAccent: string
  description: string
  expandedDescription: string
  ctaLabel: string
  stats: StatItem[]
  useCases: UseCase[]
  useCasesIntro: string
  buildSteps: BuildStep[]
  buildStepsIntro?: string
  complianceTitle: string
  complianceIntro: string
  complianceItems: ComplianceItem[]
  integrations: string[]
  faqTitle: string
  faqs: { q: string; a: string }[]
  ctaHeadline: string
  ctaBody: string
  ctaTrustItems: string[]
  heroPanel: HeroPanel
}

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/agentforce/industries" className="hover:text-foreground transition-colors">Industries</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{data.breadcrumb}</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · {data.industryTag}
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-5">
              {data.headline}{" "}
              <span className="text-accent">{data.headlineAccent}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">{data.description}</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{data.expandedDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                {data.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  See Agentforce Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — 3D hero panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ perspective: "1400px" }}
          >
            <div
              className="rounded-2xl p-5 space-y-3 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0d1117 0%, #0c1629 50%, #0f0d1a 100%)",
                transform: "rotateY(-10deg) rotateX(4deg)",
                transformStyle: "preserve-3d",
                boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,161,224,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,161,224,0.6), transparent)" }} />
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,161,224,0.12) 0%, transparent 70%)" }} />

              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {data.heroPanel.agentLabel}
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              <div className="grid grid-cols-3 gap-2 relative">
                {data.heroPanel.inputDocs.map((doc) => (
                  <div key={doc.label} className="rounded-xl p-2.5 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: `rgba(0,161,224,0.35)` }} />
              </div>

              <div className="rounded-xl p-3 relative"
                style={{ background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: SF_BLUE }} />
                  <span className="text-[11px] font-bold" style={{ color: SF_BLUE }}>Atlas Reasoning Engine</span>
                </div>
                <div className="space-y-1.5">
                  {data.heroPanel.processingSteps.map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: `rgba(0,161,224,0.35)` }} />
              </div>

              <div className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Agent Resolution</div>
                <div className="space-y-1">
                  {data.heroPanel.outputFields.map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-16 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{data.heroPanel.footerText}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {data.stats.map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[180px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────────────────── */}
      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Agentforce use cases for {data.industryTag.toLowerCase()} — production-ready.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">{data.useCasesIntro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
              <motion.div
                key={uc.id}
                id={uc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                  <Icon className="h-5 w-5" style={{ color: uc.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">{uc.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{uc.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                <ul className="space-y-1.5">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: uc.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── How we build it ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>How We Build It</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            From Salesforce org to live agent — in three steps.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">{data.buildStepsIntro}</p>
          <div className="space-y-8">
            {data.buildSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-8 items-start"
              >
                <div className="hidden md:flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}30` }}>
                    <span className="font-display font-black text-sm" style={{ color: SF_BLUE }}>{step.number}</span>
                  </div>
                  {i < data.buildSteps.length - 1 && <div className="w-px flex-1 min-h-[60px] bg-border" />}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-3"
                    style={{ color: SF_BLUE, background: `${SF_BLUE}15` }}>{step.label}</span>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: SF_BLUE }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Compliance & Trust</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">{data.complianceTitle}</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">{data.complianceIntro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.complianceItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}30` }}>
                  <Icon className="h-5 w-5" style={{ color: SF_BLUE }} />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Integrations ──────────────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Integrations</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">
            Connects to your technology ecosystem.
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.integrations.map((int) => (
              <span key={int} className="text-sm bg-background border border-border px-3 py-1.5 rounded-full text-muted-foreground">
                {int}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>FAQ</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">{data.faqTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 lg:p-14 text-center"
          style={{ background: `${SF_BLUE}08`, border: `1px solid ${SF_BLUE}30` }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">{data.ctaHeadline}</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{data.ctaBody}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                See Agentforce Services
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[
              { icon: Clock, text: "2–3 week sprint to production" },
              { icon: Shield, text: "Einstein Trust Layer · Fixed-price" },
              { icon: CheckCircle2, text: "No hourly billing" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}

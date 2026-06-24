'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, ChevronRight, Compass, Settings2, Wrench, Database, Cloud, LifeBuoy } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

const services = [
  {
    icon: Compass,
    color: SF_BLUE,
    title: "Agentforce Strategy & Readiness",
    href: "/agentforce/services/agentforce-strategy-readiness",
    description:
      "Org audit, data readiness assessment, use case prioritisation, and a production-ready implementation roadmap. The starting point for every Agentforce engagement.",
    deliverable: "Roadmap delivered in 5–7 days",
  },
  {
    icon: Settings2,
    color: "#60A5FA",
    title: "Agent Design & Configuration",
    href: "/agentforce/services/agent-design-configuration",
    description:
      "Topic and Action architecture, Instructions authoring, Einstein Trust Layer configuration, and full Agent Builder build — from scoped design to production agent.",
    deliverable: "Agent live in 2–3 weeks",
  },
  {
    icon: Cloud,
    color: "#34D399",
    title: "Sales Cloud Agent Deployment",
    href: "/agentforce/services/sales-cloud-agent-deployment",
    description:
      "SDR agents, pipeline health monitors, and quote & proposal agents deployed inside Sales Cloud — with Revenue Cloud and CPQ integration where required.",
    deliverable: "Fixed-price sprint deployment",
  },
  {
    icon: LifeBuoy,
    color: "#F472B6",
    title: "Service Cloud Agent Deployment",
    href: "/agentforce/services/service-cloud-agent-deployment",
    description:
      "Autonomous case resolution, intelligent escalation, and knowledge base agents deployed inside Service Cloud — reducing case handling time and operating cost.",
    deliverable: "Fixed-price sprint deployment",
  },
  {
    icon: Database,
    color: "#A78BFA",
    title: "MuleSoft & Data Cloud Integration",
    href: "/agentforce/services/mulesoft-data-cloud-integration",
    description:
      "End-to-end integration of Agentforce with external systems via MuleSoft Anypoint — ERP, LMS, core banking, EHR — plus Data Cloud unification for real-time agent grounding.",
    deliverable: "Integration delivered alongside agent build",
  },
  {
    icon: Wrench,
    color: "#FB923C",
    title: "Agentforce Rescue & Optimisation",
    href: "/agentforce/services/agentforce-rescue-optimisation",
    description:
      "Underperforming Agentforce deployment? We audit your existing agent configuration, identify root causes, rewrite Instructions and Topics, and get you to your target resolution rate.",
    deliverable: "Rescue audit completed in 5–7 days",
  },
]

const proofPoints = [
  { stat: "2–3 wks", label: "Typical time to production for a single-agent deployment" },
  { stat: "Fixed price", label: "Every engagement priced upfront — no hourly billing surprises" },
  { stat: "68%", label: "Autonomous resolution rate achieved at 90 days in production" },
  { stat: "5 clouds", label: "Sales, Service, Marketing, Internal Ops, and Industry implementations" },
]

export default function AgentforceServicesHubPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{ background: `radial-gradient(ellipse, ${SF_BLUE} 0%, transparent 70%)` }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-2 rounded-full border border-white/10 text-white/50">
            <span style={{ color: SF_BLUE }}>●</span> Agentforce Implementation Services
          </motion.div>
          <motion.h1 {...fade(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Agentforce Services<br />
            <span style={{ color: SF_BLUE }}>Built for Production</span>
          </motion.h1>
          <motion.p {...fade(0.1)} className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Every Agentforce engagement — strategy, design, deployment, integration, and rescue — delivered as a fixed-price sprint by a specialist implementation team.
          </motion.p>
          <motion.div {...fade(0.15)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openCalendly} className="text-white font-semibold px-8 py-3 rounded-xl" style={{ background: SF_BLUE }}>
              Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/5 px-8 py-3 rounded-xl">
                View Agentforce Overview <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Proof points ───────────────────────────────────────── */}
      <section className="py-12 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {proofPoints.map((p, i) => (
            <motion.div key={p.label} {...fade(i * 0.07)} className="text-center">
              <div className="text-3xl font-extrabold mb-1" style={{ color: SF_BLUE }}>{p.stat}</div>
              <div className="text-sm text-white/50 leading-tight">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services grid ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fade()} className="text-3xl sm:text-4xl font-bold text-center mb-4">
            All Agentforce Services
          </motion.h2>
          <motion.p {...fade(0.05)} className="text-white/50 text-center max-w-xl mx-auto mb-14">
            Every service is available as a standalone fixed-price engagement, or as part of a phased implementation programme.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div key={svc.title} {...fade(i * 0.07)}>
                  <Link href={svc.href} className="group block h-full bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${svc.color}15` }}>
                        <Icon className="h-5 w-5" style={{ color: svc.color }} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">{svc.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-5">{svc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${svc.color}15`, color: svc.color }}>
                        {svc.deliverable}
                      </span>
                      <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How we engage ──────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 {...fade()} className="text-3xl sm:text-4xl font-bold mb-6">
            Every Engagement Is <span style={{ color: SF_BLUE }}>Fixed Price</span>
          </motion.h2>
          <motion.p {...fade(0.05)} className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            No hourly billing. No scope creep surprises. Every Agentforce service is priced upfront with a defined deliverable and timeline. You know the cost before we start.
          </motion.p>
          <motion.div {...fade(0.1)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openCalendly} className="text-white font-semibold px-8 py-3 rounded-xl" style={{ background: SF_BLUE }}>
              Discuss Your Requirements <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce/services/agentforce-strategy-readiness">
              <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/5 px-8 py-3 rounded-xl">
                Start with Strategy & Readiness <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}

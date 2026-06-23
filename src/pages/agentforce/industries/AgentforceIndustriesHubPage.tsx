'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Building2, Heart, Shield, ShoppingCart, Factory, Wifi } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const industries = [
  {
    slug: "financial-services",
    icon: Building2,
    color: SF_BLUE,
    label: "Financial Services",
    subtitle: "Banks · Lenders · Wealth Managers",
    desc: "Wealth management onboarding, loan servicing automation, compliance monitoring, KYC case resolution, and fraud alert triage — grounded in Financial Services Cloud.",
    useCases: ["Wealth management onboarding", "Loan servicing case resolution", "Compliance monitoring agent", "Fraud alert triage"],
    compliance: "SEC · FINRA · SOX · AML",
  },
  {
    slug: "healthcare",
    icon: Heart,
    color: "#34D399",
    label: "Healthcare & Life Sciences",
    subtitle: "Health Systems · Clinics · Life Sciences",
    desc: "Patient scheduling agents, prior authorization resolution, care coordination, and billing inquiry handling — built on Health Cloud with HIPAA-safe guardrails.",
    useCases: ["Patient scheduling agent", "Prior authorization resolution", "Care coordination agent", "Billing inquiry handling"],
    compliance: "HIPAA · HL7 FHIR · SOC 2",
  },
  {
    slug: "insurance",
    icon: Shield,
    color: "#60A5FA",
    label: "Insurance",
    subtitle: "P&C · Life · Specialty Insurers",
    desc: "FNOL claims intake, policy renewal automation, underwriting triage, broker support agents, and fraud alert triage — meeting state DOI and NAIC requirements.",
    useCases: ["FNOL claims intake agent", "Policy renewal agent", "Underwriting triage", "Broker support agent"],
    compliance: "NAIC · State DOI · GDPR",
  },
  {
    slug: "retail-ecommerce",
    icon: ShoppingCart,
    color: "#F59E0B",
    label: "Retail & Ecommerce",
    subtitle: "Retailers · D2C · Marketplace Brands",
    desc: "Order management agents, returns and refund automation, personalised shopping assistants, and loyalty program agents — deployed across Commerce Cloud and Service Cloud.",
    useCases: ["Order status & tracking agent", "Returns & refund agent", "Personalised shopping agent", "Loyalty program agent"],
    compliance: "PCI-DSS · GDPR · CCPA",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    color: "#A78BFA",
    label: "Manufacturing",
    subtitle: "Manufacturers · Industrial Companies",
    desc: "Field service scheduling agents, warranty claim intake, dealer support automation, and IoT-triggered preventive maintenance alerts — on Manufacturing Cloud and Field Service Lightning.",
    useCases: ["Field service scheduling agent", "Warranty claim intake", "Dealer support agent", "Preventive maintenance alerts"],
    compliance: "ISO 9001 · OSHA · SOC 2",
  },
  {
    slug: "telecom",
    icon: Wifi,
    color: "#FB923C",
    label: "Telecommunications",
    subtitle: "Telcos · MVNOs · Communications Providers",
    desc: "Network outage support agents, billing dispute resolution, plan management automation, and churn prevention agents — on Communications Cloud with TCPA and FCC guardrails.",
    useCases: ["Network outage support agent", "Billing dispute resolution", "Plan management agent", "Churn prevention agent"],
    compliance: "FCC · TCPA · CPNI · GDPR",
  },
]

export default function AgentforceIndustriesHubPage() {
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
            <span className="text-foreground">Industries</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ color: SF_BLUE, background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}25` }}
            >
              Industry-Specific Agentforce Deployments
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Agentforce<br />
              <span style={{ color: SF_BLUE }}>by Industry</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Production Agentforce deployments across six regulated and high-volume industries — each with dedicated compliance guardrails, cloud integration patterns, and use cases proven in the field.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  All Agentforce services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "industry verticals" },
              { value: "68%", label: "avg autonomous resolution" },
              { value: "2–3 wks", label: "to production agent" },
              { value: "Fixed", label: "price, no hourly billing" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: SF_BLUE }}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/agentforce/industries/${ind.slug}`}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 block"
                  style={{ borderLeftWidth: "4px", borderLeftColor: ind.color }}
                >
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                    {/* Icon + label */}
                    <div className="flex items-center gap-4">
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}
                      >
                        <ind.icon className="h-6 w-6" style={{ color: ind.color }} />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-xl group-hover:text-accent transition-colors">{ind.label}</h2>
                        <p className="text-xs text-muted-foreground mt-0.5">{ind.subtitle}</p>
                      </div>
                    </div>

                    {/* Description + use cases */}
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {ind.useCases.map((uc) => (
                          <span key={uc} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compliance + CTA */}
                    <div className="text-right shrink-0 space-y-3">
                      <p className="text-[11px] text-muted-foreground font-medium">{ind.compliance}</p>
                      <div
                        className="flex items-center gap-1.5 text-xs font-semibold justify-end opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: ind.color }}
                      >
                        Explore use cases <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-mono tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>
              Don&apos;t see your industry?
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">
              We deploy Agentforce across all sectors
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              The six industries above represent our deepest deployment patterns, but Agentforce works across any Salesforce-enabled organisation. Book a call — we&apos;ll scope the right use case for your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="rounded-full px-10" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" size="lg" className="rounded-full px-10">
                  Explore Agentforce services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

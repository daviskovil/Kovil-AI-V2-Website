'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  Settings, Bot, Play, ShieldCheck, Repeat2, Eye, TrendingUp, X,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"
import { ShopifyProofCarousel, type Slide } from "@/src/components/ShopifyProofCarousel"

function ShopifyCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white rounded-full ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

const heroStats = [
  { stat: "24/7",   label: "Competitor monitoring" },
  { stat: "Hourly", label: "Scrape frequency" },
  { stat: "0",      label: "Below-floor price events" },
  { stat: "2 wks",  label: "To first live repricer" },
]

const proofSlides: Slide[] = [
  {
    tag: "Workflow Blueprint",
    title: "A brand was losing sales to competitors it couldn't see moving.",
    desc: "Kovil AI deployed hourly scraper agents against the brand's core competitive set, feeding price signals into a margin engine that only ever adjusts within a hard-coded floor.",
    stats: [
      { value: "Hourly", label: "Competitor scans" },
      { value: "0", label: "Below-floor events" },
    ],
  },
  {
    tag: "Under the Hood",
    title: "Rotated proxies scrape respectfully; GraphQL commits the price live.",
    desc: "The scraper agents crawl at normal user-like intervals through rotated proxy networks, and approved price changes commit directly to Shopify Admin via GraphQL mutations — no manual CSV upload.",
    stats: [
      { value: "Rotated proxies", label: "Safe scraping" },
      { value: "GraphQL", label: "Live price commit" },
    ],
  },
  {
    tag: "Multi-Agent Handoff",
    title: "A Scraper Agent feeds a Margin Calculator, which feeds a Repricer.",
    desc: "The Scraper Agent captures competitor prices, the Margin Calculator checks them against cost floor and inventory, and the Repricer commits the adjustment — with every step logged to an audit trail.",
    stats: [
      { value: "4", label: "Agents in the loop" },
      { value: "Full", label: "Audit trail" },
    ],
  },
  {
    tag: "Safety Controls",
    title: "The agent has never once priced below the configured cost floor.",
    desc: "Every repricing decision runs against a hard-coded margin floor, and changes above a configured delta require a manager's Slack approval before they commit.",
    stats: [
      { value: "0", label: "Below-floor changes" },
      { value: "Optional", label: "Slack approval gate" },
    ],
  },
  {
    tag: "Outcome",
    title: "Same-hour competitive response, protected margins, full visibility.",
    desc: "The brand now reacts to competitor moves within the hour instead of days later, without ever risking a margin-losing price war.",
    stats: [
      { value: "Hourly", label: "Monitoring" },
      { value: "0", label: "Below-Floor Events" },
    ],
  },
]

const pipeline = [
  { icon: Play, title: "Competitor Store Scraping", desc: "Agents crawl target competitor product landing pages hourly, capturing pricing, discount structures, and stock statuses via rotated proxy networks." },
  { icon: Bot, title: "Margin & Rules Calculation", desc: "Scraped data is compared against your internal margin database to determine the optimal variant price adjustment within your configured bounds." },
  { icon: Settings, title: "Shopify Price Commits", desc: "Approved price changes update variant pricing structures in Shopify Admin via GraphQL mutations, logged with a before/after record." },
  { icon: Eye, title: "Review & Audit Trail", desc: "Every price change is written to a central history log; flows above a configured delta can require a Slack approval before committing." },
]

const features = [
  { icon: ShieldCheck, title: "Floor Price Safeguards", desc: "Set strict baseline bounds so the pricing agent never discounts variants below your configured cost margin, no matter what a competitor does." },
  { icon: Repeat2, title: "Self-Healing Scraping Nodes", desc: "If a competitor's site layout changes, models parse the new HTML schema dynamically to correct selectors rather than silently failing." },
  { icon: Eye, title: "Full Audit Trail Logging", desc: "Track every variant update inside a central history log, showing previous vs. current pricing and which competitor signal triggered it." },
  { icon: TrendingUp, title: "Margin-Aware Elasticity", desc: "The repricer weighs demand elasticity signals, not just competitor price, to avoid a race-to-the-bottom on items where price isn't the primary driver." },
]

const scenario = {
  title: "Example: Competitor Flash Sale Detected",
  steps: [
    "The hourly scrape detects a competitor has dropped price 15% on a directly comparable SKU.",
    "The margin engine checks your cost floor and current inventory position for the matching item.",
    "Since the drop would breach your configured floor price, the agent instead applies the maximum allowable discount and flags the gap.",
    "A Slack notification summarizes the competitive gap for a manager to review a potential promotional response.",
    "The price change and its full reasoning trail are logged to the audit dashboard for later review.",
  ],
}

const stack = ["Shopify Admin API", "GraphQL API", "Proxy Network Providers", "pgvector", "Redis", "Slack API", "n8n"]

const comparisonRows = [
  { capability: "Monitoring frequency", manual: "Weekly or ad-hoc spot checks", kovil: "Hourly automated scraping" },
  { capability: "Margin protection", manual: "Manual spreadsheet cross-check", kovil: "Hard-coded floor price safeguards" },
  { capability: "Selector maintenance", manual: "Breaks silently when competitor sites change", kovil: "Self-healing HTML schema parsing" },
  { capability: "Review process", manual: "No structured audit trail", kovil: "Full history log with reasoning per change" },
  { capability: "Response time", manual: "Days to notice and react", kovil: "Same-hour detection and adjustment" },
]

const faqs = [
  { q: "Is scraping competitor sites safe and compliant?", a: "Yes. Our scraping agents use rotated proxy networks and scrape pages at normal user-like intervals to respect server load, avoiding aggressive request patterns that could be flagged as abusive." },
  { q: "Can we review repricing before it goes live?", a: "Yes, you can toggle a 'Slack Review' gate requiring a manager's confirmation click before any price change above a configured delta commits to Shopify." },
  { q: "How do you prevent the agent from racing to the bottom on price?", a: "Every repricing decision runs against a hard-coded floor price tied to your actual cost margin, and we can additionally weigh demand elasticity so the agent doesn't chase price on items where it isn't the primary conversion driver." },
  { q: "What happens if a competitor's website structure changes?", a: "The scraping agent parses HTML schemas dynamically rather than relying on brittle fixed selectors, so moderate layout changes are handled automatically without breaking the pipeline." },
  { q: "How many competitor stores can be monitored simultaneously?", a: "Most deployments monitor 5–20 competitor storefronts per product category without performance issues; larger monitoring scopes are scaled with additional scraping infrastructure." },
  { q: "Can this integrate with our existing ERP for cost data?", a: "Yes. We connect directly to your ERP or product cost database (NetSuite, SAP, or a custom system) so the margin floor calculation always reflects your actual current cost basis." },
  { q: "Is there a full audit trail of every price change?", a: "Yes. Every variant update is logged with the previous price, new price, and the specific competitor signal that triggered the change, giving your team complete visibility." },
  { q: "How long does it take to launch a first repricing workflow?", a: "A first deployment scoped to a core product category typically takes about 2 weeks, including margin rule configuration and testing against real competitor data." },
  { q: "Can the repricer raise prices, not just lower them?", a: "Yes. When competitor prices increase or a monitored item goes out of stock elsewhere, the agent can recommend or automatically apply a price increase within your configured bounds." },
  { q: "What if we only want alerts, not automatic price changes?", a: "That's a supported configuration. Many clients start with alert-only mode — the agent surfaces competitive gaps in Slack for manual action — before graduating to automatic commits once trust is established." },
]

export default function CompetitorPriceRepricerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Competitor Repricer</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows · Pricing Blueprint</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Competitor Price Repricer — <br />
              <span className="text-accent">Dynamic Scrapers & Price Engines.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy automated scraper agents to monitor competitor storefronts hourly and adjust your Shopify variant pricing dynamically inside safe, cost-protected margin floors.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Deploy Repricer Setup" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#pipeline">See the Pipeline</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-muted/10 border border-border rounded-3xl p-6 md:p-8 grid grid-cols-2 gap-4">
            {heroStats.map((item, idx) => (
              <div key={idx} className="bg-background border border-border p-4 rounded-2xl text-center space-y-1 shadow-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{item.stat}</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Repricing Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Scrape, Evaluate, Commit, Audit</h2>
            <p className="text-muted-foreground text-sm">Scrape competitor pricing, evaluate cost margins, and update store variants autonomously.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {pipeline.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative bg-background border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {idx < pipeline.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ShopifyProofCarousel
        heading="How one brand protected margin while staying price-competitive."
        subheading="A real deployment, walked step by step — from hourly scraping to a multi-agent margin handoff to the floor price that never gets breached."
        slides={proofSlides}
      />

      {/* Features */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Technical Features</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Protected Margins, Self-Healing Scrapers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-background rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Walkthrough</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">{scenario.title}</h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <ol className="space-y-4">
              {scenario.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs flex items-center justify-center shrink-0">{idx + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">The Repricing Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tag, idx) => (
              <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Manual vs. Agentic Repricing</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Check Prices Manually?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Manual Monitoring</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Repricer</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.manual}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.kovil}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Workflows FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding proxy networks and margin rules.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-background">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold hover:bg-muted/20 transition-all">
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Scraper Repricing Network</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Partner with Kovil AI to map your margins and deploy dynamic repricer flows under a 2-week risk-free trial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Deploy Repricer Setup" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

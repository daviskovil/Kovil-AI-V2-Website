'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "Real-Time Behavioural Signal Ingestion",
    desc: "Capture browsing events, cart additions, dwell time, and purchase history in real time via Azure Event Hubs, building a live user profile that updates with every interaction.",
  },
  {
    title: "Semantic Product & Content Matching",
    desc: "Azure OpenAI Embeddings represent products and user intent in the same vector space, enabling semantic similarity matching that goes far beyond collaborative filtering.",
  },
  {
    title: "CRM History Integration",
    desc: "Enrich real-time signals with long-term purchase history, lifetime value, and segment attributes from your CRM, ensuring recommendations are informed by the full customer relationship.",
  },
  {
    title: "A/B Testing Framework",
    desc: "Built-in experiment management lets you test recommendation strategies, ranking models, and UI placements with statistical significance tracking and automatic winner selection.",
  },
  {
    title: "Explainable Recommendations",
    desc: "Each recommendation includes a human-readable reason ('Because you viewed X' or 'Popular with customers like you'), increasing click-through and customer trust.",
  },
  {
    title: "Personalisation at Any Scale",
    desc: "Azure Cosmos DB and Azure API Management deliver sub-100ms recommendation responses at any request volume, with horizontal scaling built in from day one.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "User Signal Pipeline",
    desc: "We build an Azure Event Hubs ingestion pipeline that captures real-time behavioural signals from your web and mobile surfaces, enriching them with CRM history stored in Azure Cosmos DB.",
    bullets: [
      "Event Hubs capture clicks, views, add-to-cart, and purchase events at scale",
      "Stream processing enriches events with CRM segment and LTV data",
      "User profiles updated in Cosmos DB within seconds of each interaction",
    ],
  },
  {
    step: "02",
    title: "Semantic Similarity Engine",
    desc: "Azure OpenAI Embeddings encode your product catalogue and content library into a vector index in Azure AI Search. At query time, the user's live profile is embedded and matched against this index.",
    bullets: [
      "Product catalogue embedded nightly; real-time embedding for new listings",
      "Hybrid vector + metadata filtering for category, price range, and availability",
      "Re-ranking layer applies business rules (margin, inventory, promoted items)",
    ],
  },
  {
    step: "03",
    title: "Recommendation API Deployment",
    desc: "Results are served via a low-latency Azure API Management endpoint that your frontend queries. Kovil AI provides SDKs for web, iOS, and Android with built-in A/B test assignment.",
    bullets: [
      "P95 response time under 80ms at production load",
      "Feature flags control recommendation strategy per user segment",
      "Application Insights telemetry for click-through rate and revenue attribution",
    ],
  },
]

const metrics = [
  { value: "+28%", label: "Conversion rate" },
  { value: "+19%", label: "Average order value" },
  { value: "3x", label: "Engagement rate" },
  { value: "Real-time", label: "Personalisation" },
]

const techStack = [
  "Azure OpenAI Embeddings",
  "Azure AI Search (vector)",
  "Azure Cosmos DB",
  "Azure Event Hubs",
  "Semantic Kernel",
  "Azure API Management",
]

export default function PersonalisedRecommendationAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry/customer-experience" className="hover:text-foreground transition-colors">Customer Experience</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Personalised Recommendation Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Customer Experience · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Recommendations that convert. Powered by{" "}
            <span className="text-accent">real-time signals.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Kovil AI builds Azure-native personalisation engines that ingest live behavioural signals, match them against semantically embedded product catalogues, and serve sub-100ms recommendations that drive measurable conversion and revenue lift.
          </p>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From user signal to personalised recommendation in milliseconds.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <span className="font-display font-black text-5xl text-accent/15 leading-none block mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Capabilities</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What this agent can do.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-colors">
                <div className="h-2 w-2 rounded-full mb-4" style={{ background: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Built With</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Azure technology stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08`, color: AZURE }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Turn browsing intent into revenue, automatically.</h2>
            <p className="text-background/60 text-base">Book a call to discuss your catalogue size, traffic volumes, and what a 28% conversion lift would mean for your business.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

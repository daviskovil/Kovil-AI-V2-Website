'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, ShoppingCart, BarChart3, Truck, Search, RotateCcw, MessageCircle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const capabilities = [
  { title: "Personalised Product Recommendations", desc: "Generates real-time, session-aware product recommendations based on browsing behaviour, purchase history, and inventory signals — increasing average order value and repeat purchase rates." },
  { title: "Customer Service Automation", desc: "Handles order status, returns, sizing queries, and product questions across chat, email, and voice — with seamless escalation to human agents when context requires it." },
  { title: "Inventory Demand Forecasting", desc: "Analyses historical sales patterns, seasonal signals, promotional calendars, and external demand indicators to produce SKU-level demand forecasts that reduce overstock and stockouts." },
  { title: "Visual Search & Product Discovery", desc: "Enables shoppers to search by image — uploading a photo to surface visually similar products in your catalogue. Powered by Azure AI Vision and Azure AI Search hybrid retrieval." },
  { title: "Returns Processing Automation", desc: "Automates returns authorisation, label generation, refund eligibility checks, and restocking routing — compressing returns cycle time from days to hours while reducing fraud exposure." },
  { title: "Supplier Communication Intelligence", desc: "Monitors supplier performance, automates purchase order generation based on reorder thresholds, and surfaces supply chain risk signals before they impact shelf availability." },
]

const howItWorks = [
  {
    step: "01",
    title: "Commerce Platform Integration",
    desc: "We connect the agent to your eCommerce platform, OMS, and product catalogue via Azure API Management — with Cosmos DB powering the low-latency product and customer data access the agent needs.",
    bullets: ["Shopify, Salesforce Commerce, Magento, and custom connectors", "Cosmos DB for real-time product and inventory data", "Azure API Management for secure third-party integrations"],
  },
  {
    step: "02",
    title: "Personalisation & Prediction Engine",
    desc: "Azure OpenAI and Azure Machine Learning work together to personalise every customer interaction — predicting intent, scoring recommendations, and generating natural-language responses at scale.",
    bullets: ["Azure ML for demand forecasting and propensity models", "Azure OpenAI for conversational customer service", "Azure AI Search for hybrid product retrieval and visual search"],
  },
  {
    step: "03",
    title: "Omnichannel Orchestration",
    desc: "The agent operates consistently across web, mobile app, email, and chat — maintaining customer context across channels and surfacing insights to merchandising and operations teams in real time.",
    bullets: ["Copilot Studio for channel orchestration", "Unified customer context across touchpoints", "Real-time performance dashboards for merchandising teams"],
  },
]

const metrics = [
  { value: "38%", label: "conversion lift" },
  { value: "72%", label: "support queries automated" },
  { value: "14%", label: "inventory reduction" },
  { value: "3.1x", label: "faster returns" },
]

const techStack = [
  "Azure OpenAI",
  "Azure AI Search",
  "Azure Machine Learning",
  "Azure Cosmos DB",
  "Azure API Management",
  "Microsoft Copilot Studio",
]

export default function RetailEcommerceAzurePage() {
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
            <Link href="/azure-ai-foundry/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Retail & eCommerce</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Retail & eCommerce</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for retail & eCommerce.{" "}
            <span className="text-accent">Built on Azure.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            From personalised recommendations and automated customer service to demand forecasting and returns processing — agents that connect your commerce stack, reduce operational cost, and drive measurable revenue impact without stitching together fragile point solutions.
          </p>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Integrate your commerce stack. Personalise at scale.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across retail and eCommerce operations.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Automate retail operations. Personalise every customer touchpoint.</h2>
            <p className="text-background/60 text-base">Revenue-impact agents on Azure. First deployment in 3–4 weeks. No rip-and-replace of existing commerce platforms.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/industries/retail-ecommerce" />
    </div>
  )
}

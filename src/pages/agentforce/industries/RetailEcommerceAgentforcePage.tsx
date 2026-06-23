'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, ShieldCheck, Database, Zap,
  Package, RotateCcw, ShoppingBag, Star, Repeat, MessageCircle,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "order-status-tracking-agent",
    icon: Package,
    color: SF_BLUE,
    title: "Order Status & Tracking Agent",
    subtitle: "Real-time order status, delivery tracking, delay notification, carrier updates",
    description:
      "Resolves the highest-volume retail support query — 'where is my order' — autonomously across all digital channels. The agent retrieves real-time order and carrier data from Commerce Cloud and OMS, provides accurate delivery estimates, proactively notifies customers about delays, and initiates carrier escalations when shipments are lost or significantly delayed — all without a human agent involved.",
    bullets: [
      "Real-time order status from Commerce Cloud and OMS integration",
      "Carrier tracking data retrieval with delay detection and proactive outreach",
      "Lost shipment identification and carrier claim initiation",
      "Multi-order and multi-item query handling in a single interaction",
    ],
  },
  {
    id: "returns-refund-agent",
    icon: RotateCcw,
    color: "#60A5FA",
    title: "Returns & Refund Agent",
    subtitle: "Returns eligibility check, label generation, refund processing, exchange facilitation",
    description:
      "Applies your returns policy rules automatically — checking eligibility by item, category, purchase date, and channel — generating return labels via your carrier integration, processing refunds to the original payment method, and facilitating product exchanges. Average returns processing time reduced from 7 days to under 48 hours in production deployments.",
    bullets: [
      "Returns eligibility check against purchase date, item category, and channel rules",
      "Return label generation via carrier integration (UPS, FedEx, USPS)",
      "Refund processing to original payment method with Revenue Cloud integration",
      "Exchange facilitation with inventory availability check before confirmation",
    ],
  },
  {
    id: "personalised-shopping-agent",
    icon: ShoppingBag,
    color: "#34D399",
    title: "Personalised Shopping Agent",
    subtitle: "Product recommendations based on purchase history, browsing data, and inventory",
    description:
      "Provides personalised product recommendations grounded in the customer's purchase history, browsing data from Data Cloud, and real-time inventory from Commerce Cloud. Handles pre-purchase queries — product comparisons, sizing questions, compatibility — and guides customers through selection to checkout, increasing average order value and conversion rate.",
    bullets: [
      "Purchase history and browse data-grounded product recommendations via Data Cloud",
      "Real-time inventory and availability check before recommendation",
      "Product comparison, sizing, and compatibility query resolution",
      "Pre-purchase Q&A with direct add-to-cart capability via Commerce Cloud APIs",
    ],
  },
  {
    id: "loyalty-program-agent",
    icon: Star,
    color: "#F59E0B",
    title: "Loyalty Program Agent",
    subtitle: "Points balance, redemption options, tier status, promotion eligibility",
    description:
      "Manages the full range of loyalty programme queries and activations — points balance, redemption options, tier status, promotion eligibility, and points expiry — with direct integration to your loyalty engine in Salesforce Marketing Cloud or a third-party loyalty platform.",
    bullets: [
      "Points balance and transaction history retrieval in real time",
      "Redemption option display and redemption processing",
      "Tier status explanation and upgrade requirements",
      "Promotion eligibility check and activation for targeted offers",
    ],
  },
  {
    id: "subscription-management-agent",
    icon: Repeat,
    color: "#8B5CF6",
    title: "Subscription Management",
    subtitle: "Pause, cancel, swap, reactivate subscription products — billing query handling",
    description:
      "Handles subscription lifecycle actions autonomously — pause, cancel, swap product, or reactivate — applying your configured business rules for each action type. Manages billing frequency queries, next charge date information, and payment method updates without human agent involvement.",
    bullets: [
      "Subscription pause, skip, and resume with configurable frequency limits",
      "Subscription cancellation with retention offer before confirmation",
      "Product swap and frequency change within active subscription",
      "Payment method update and billing query resolution",
    ],
  },
  {
    id: "post-purchase-followup-agent",
    icon: MessageCircle,
    color: "#EF4444",
    title: "Post-Purchase Follow-Up",
    subtitle: "Delivery confirmation, satisfaction survey, review request, repurchase prompt",
    description:
      "Manages the post-purchase sequence automatically — delivery confirmation, satisfaction survey trigger, review request, and repurchase prompt — personalised to the customer's product and channel preferences. Coordinates with Marketing Cloud for email and SMS sequences, and flags unhappy customers for proactive human outreach before they churn.",
    bullets: [
      "Delivery confirmation with personalised messaging via preferred channel",
      "Post-delivery satisfaction survey trigger and response handling",
      "Product review request with platform routing (Google, Trustpilot, Yotpo)",
      "Repurchase prompt with personalised timing based on product consumption rate",
    ],
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Connect Commerce Cloud and Order Management",
    desc: "Agentforce integrates with Commerce Cloud, OMS, and WMS via MuleSoft for real-time inventory, order, and fulfilment data. Third-party platforms — Shopify, SAP Commerce, Manhattan Associates OMS — connect via pre-built MuleSoft connectors.",
  },
  {
    number: "02",
    title: "Build Retail Service Agents",
    desc: "Topics and Actions are scoped to your returns policy rules, loyalty programme configuration, subscription terms, and escalation thresholds. Every agent decision boundary is configurable to match your retail operations.",
  },
  {
    number: "03",
    title: "Deploy Across All Customer Touchpoints",
    desc: "Agents deploy across web storefront chat, mobile app, email, SMS, and Messaging for In-App via Service Cloud OmniChannel — providing consistent, autonomous service across every channel your customers use.",
  },
]

// ── Compliance ────────────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Shield,
    title: "PCI-DSS",
    desc: "Payment card data handled within Salesforce's PCI-DSS Level 1 certified environment. No raw card data processed by agent actions — tokenised payment references only.",
  },
  {
    icon: Lock,
    title: "GDPR / CCPA",
    desc: "Customer PII handling controls with data subject rights support. Consent management for post-purchase email and SMS sequences. EU data residency options for UK and EU retail deployments.",
  },
  {
    icon: ShieldCheck,
    title: "TCPA (SMS Outreach)",
    desc: "Outbound SMS post-purchase sequences configured with TCPA-compliant opt-in validation and opt-out handling. Consent records stored in Marketing Cloud.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "No customer order or payment data transmitted to external LLMs. Einstein Trust Layer keeps all data within the Salesforce trust boundary with full audit logging.",
  },
]

// ── Integrations ──────────────────────────────────────────────────────────────
const integrations = [
  "Commerce Cloud", "Service Cloud", "Marketing Cloud", "Data Cloud",
  "MuleSoft", "Shopify", "SAP Commerce", "Manhattan Associates OMS",
  "Returnly", "Happy Returns", "Klaviyo", "Yotpo", "Stripe", "Adyen",
]

// ── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What Salesforce products are needed for retail Agentforce?",
    a: "The core stack for retail Agentforce is Commerce Cloud (for order and product data), Service Cloud (for OmniChannel and case management), Data Cloud (for unified customer profiles grounding personalisation and loyalty agents), and MuleSoft (for OMS, WMS, and third-party platform integration). Marketing Cloud handles post-purchase email and SMS sequences. Agentforce is included in qualifying Salesforce platform licences.",
  },
  {
    q: "Can Agentforce integrate with Commerce Cloud for order management?",
    a: "Yes. Agentforce has native integration with Salesforce Commerce Cloud via the B2C Commerce Cloud connector, giving agents real-time access to order status, line items, delivery ETAs, and product catalogue data. For third-party OMS platforms — Manhattan Associates, Blue Yonder, or custom ERP-based OMS — MuleSoft provides the integration layer. We scope the integration depth during pre-sprint discovery.",
  },
  {
    q: "How does Agentforce handle GDPR compliance for retail?",
    a: "Agentforce running on Salesforce operates within Salesforce's GDPR-compliant trust boundary. Customer PII is not sent to external LLMs — the Einstein Trust Layer enforces this. Data subject access requests and right-to-erasure workflows can be configured using Privacy Center. EU data residency is available. Post-purchase email and SMS sequences are governed by Marketing Cloud's consent management, with opt-out honoured across all channels.",
  },
  {
    q: "What are the best Agentforce use cases for ecommerce brands?",
    a: "For ecommerce brands, the highest-ROI starting points are order status and tracking (the single highest-volume support query for most retailers) and returns and refund automation (which typically consumes 30–40% of service team capacity). Personalised shopping agents and post-purchase follow-up sequences typically follow in subsequent sprints. Loyalty programme agents deliver the highest upsell conversion impact for brands with mature loyalty programmes.",
  },
  {
    q: "How long does an Agentforce retail implementation take?",
    a: "A production retail Agentforce sprint — scoped to one primary workflow such as order status and returns — takes 2–3 weeks from kickoff to deployment. This includes Commerce Cloud and OMS integration, agent Topic and Action configuration, returns policy rule encoding, testing across real order scenarios, and go-live across selected channels. Broader multi-workflow programmes run in sequential 2-week sprints.",
  },
  {
    q: "Can Agentforce support international ecommerce with multi-currency and multi-language?",
    a: "Yes. Salesforce Commerce Cloud and Service Cloud support multi-currency, multi-language, and multi-region configurations natively. Agentforce agents can be configured to operate in multiple languages with locale-aware responses. Currency conversion, international returns policies, and region-specific carrier integrations are configured per locale during implementation.",
  },
  {
    q: "Can Agentforce support multiple retail brands within one Salesforce org?",
    a: "Yes. Agentforce supports multi-brand deployments within a single Salesforce org using Experience Cloud for brand-specific customer portals, separate OmniChannel routing configurations, and brand-scoped agent Topics. Returns policies, loyalty rules, and escalation thresholds are configured per brand. Data Cloud's multi-org data sharing capabilities also support cross-brand unified customer profiles where desired.",
  },
  {
    q: "Is Agentforce compatible with headless commerce architectures?",
    a: "Yes. Headless commerce platforms using the Salesforce B2C Commerce Cloud API layer, or third-party headless platforms connected via MuleSoft, provide Agentforce with the same real-time data access as native storefronts. The agent's Topics and Actions call APIs rather than rendering UI — making headless compatibility straightforward. We have implemented retail Agentforce alongside Contentful, VTEX, and custom React storefronts.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function RetailEcommerceAgentforcePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Retail &amp; Ecommerce</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-23">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Retail &amp; Ecommerce
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Agentforce for{" "}
              <span style={{ color: SF_BLUE }}>Retail &amp; Ecommerce</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Order management agents, returns and refund automation, personalised shopping assistants, and loyalty program agents.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Production Agentforce deployments for retailers and ecommerce brands — built on Commerce Cloud,
              Service Cloud, and Data Cloud. Fixed-price sprints, 2–3 weeks to production.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-full font-semibold px-8 text-base h-12 text-white"
                style={{ background: SF_BLUE }}
                onClick={openCalendly}
              >
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  All Agentforce Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — dark 3D panel */}
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

              {/* Status bar */}
              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                  AI Agent · Commerce Cloud + Service Cloud
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Order Inquiry", color: SF_BLUE },
                  { label: "Return Request", color: "#60A5FA" },
                  { label: "Product Query", color: "#34D399" },
                ].map((doc) => (
                  <div key={doc.label} className="rounded-xl p-2.5 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(0,161,224,0.35)" }} />
              </div>

              {/* AI processing card */}
              <div className="rounded-xl p-3 relative"
                style={{ background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: SF_BLUE }} />
                  <span className="text-[11px] font-bold" style={{ color: SF_BLUE }}>Atlas Reasoning Engine</span>
                </div>
                <div className="space-y-1.5">
                  {["Order History Retrieval", "Returns Policy Check", "Inventory Lookup"].map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(0,161,224,0.35)" }} />
              </div>

              {/* Output */}
              <div className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Resolution Output</div>
                <div className="space-y-1">
                  {[
                    { label: "Customer", value: "Emma Davis" },
                    { label: "Order",    value: "#SF-20261182" },
                    { label: "Status",   value: "Return approved" },
                    { label: "Action",   value: "Refund initiated" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-16 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Refund processed · Return label sent · CRM updated
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "70%+",      label: "customer service queries resolved autonomously" },
              { stat: "48hrs",     label: "average returns processing (was 7 days)" },
              { stat: "4.7/5",     label: "CSAT maintained on AI-resolved interactions" },
              { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────────────────── */}
      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Agentforce for Retail — Production Use Cases
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production deployment configuration for retailers and ecommerce brands.
          Each targets the workflows that consume the most service team capacity and have the clearest autonomous resolution path.
        </p>
        <div className="space-y-8">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.id}
              id={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                      <uc.icon className="h-5 w-5" style={{ color: uc.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground">{uc.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                  <ul className="space-y-2">
                    {uc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            From kickoff to production in three steps.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Every retail Agentforce engagement follows the same proven delivery pattern — connected to your
            existing Commerce Cloud, OMS, and loyalty configuration.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}18`, border: `1px solid ${SF_BLUE}30` }}>
                  <span className="font-display font-black text-sm" style={{ color: SF_BLUE }}>{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Integrations</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
          Connects to your retail technology stack.
        </h2>
        <div className="flex flex-wrap gap-2">
          {integrations.map((pill) => (
            <span key={pill}
              className="text-sm bg-muted/30 border border-border px-4 py-2 rounded-full text-muted-foreground">
              {pill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Built for regulated retail and ecommerce environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Retail Agentforce deployments handle payment data, customer PII, and outbound marketing communications
            under PCI-DSS, GDPR, CCPA, and TCPA. Compliance is designed in from the start.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}18`, border: `1px solid ${SF_BLUE}30` }}>
                  <item.icon className="h-5 w-5" style={{ color: SF_BLUE }} />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>FAQ</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Agentforce for Retail &amp; Ecommerce — common questions.
        </h2>
        <div id="faq-grid" className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section id="cta" className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 lg:p-14 text-center"
          style={{ background: `${SF_BLUE}08`, border: `1px solid ${SF_BLUE}28` }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">
            Ready to deploy Agentforce for your retail operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute discovery call. We will scope your highest-impact retail workflow —
            order management, returns automation, or personalised shopping — and deliver a fixed-price plan the same week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="rounded-full font-semibold px-8 text-base h-12 text-white"
              style={{ background: SF_BLUE }}
              onClick={openCalendly}
            >
              Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                All Agentforce Services
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[
              { icon: Clock, text: "2–3 week sprint to production" },
              { icon: Shield, text: "PCI-DSS · GDPR · CCPA · Einstein Trust Layer" },
              { icon: CheckCircle2, text: "Fixed price, no hourly billing" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" style={{ color: SF_BLUE }} /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}

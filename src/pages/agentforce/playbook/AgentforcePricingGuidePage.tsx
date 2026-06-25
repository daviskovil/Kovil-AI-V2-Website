'use client'

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Clock, Calendar, Users, Lightbulb, DollarSign, AlertTriangle, HelpCircle, TrendingUp, List } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

// ── Table of contents ─────────────────────────────────────────────────────────
const tocSections = [
  { n: 1, title: "The Agentforce pricing model",       id: "pricing-model" },
  { n: 2, title: "Licence requirements beyond the base", id: "licence-requirements" },
  { n: 3, title: "Implementation cost",                id: "implementation-cost" },
  { n: 4, title: "Total cost of ownership model",      id: "tco-model" },
  { n: 5, title: "How to negotiate pricing",           id: "negotiation" },
  { n: 6, title: "Questions to ask your AE",          id: "questions-ae" },
  { n: 7, title: "Frequently asked questions",         id: "faq" },
]

// ── Related articles ──────────────────────────────────────────────────────────
const relatedArticles = [
  {
    pill: "Business Case",
    title: "The Agentforce ROI Guide: How to build the business case for Salesforce AI agents",
    desc: "Cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers from production.",
    readTime: "14 min read",
    href: "/agentforce/playbook/agentforce-roi-guide",
  },
  {
    pill: "Technical Guide",
    title: "How Agentforce Works: The complete technical guide for decision-makers",
    desc: "Atlas Reasoning Engine, Topics and Actions, Einstein Trust Layer, and how agents take action in external systems.",
    readTime: "12 min read",
    href: "/agentforce/playbook/how-does-agentforce-work",
  },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    q: "Is Agentforce priced per conversation or per user?",
    a: "Agentforce is priced per conversation, not per user or per seat. As of 2026, the list price is $2.00 per conversation. This is a fundamentally different model from traditional Salesforce licences — your cost scales with agent activity, not headcount. Volume discounts are negotiated at enterprise level and can bring the effective rate down to $0.80–$1.20 per conversation at scale.",
  },
  {
    q: "What counts as an Agentforce conversation?",
    a: "A conversation is a complete interaction between an end user and an Agentforce agent — from the first message to resolution or escalation. A conversation ends when the user session closes, the agent resolves the case, or a 24-hour inactivity window passes. Multiple back-and-forth messages within one session count as a single conversation. One exchange of 12 messages costs the same as a single-message interaction that resolves immediately.",
  },
  {
    q: "Do I need Data Cloud for Agentforce?",
    a: "Not strictly required for basic deployments, but strongly recommended for production-grade agents. Without Data Cloud, your agents are grounded only in data available directly in your Salesforce org. With Data Cloud, agents access unified customer profiles that combine CRM data, engagement history, and third-party signals. The cost difference — Data Cloud lists at $108,000/year for 10M profiles — needs to be weighed against the improvement in agent accuracy and resolution rate. Many organisations already have Data Cloud, making this a moot cost question.",
  },
  {
    q: "Is MuleSoft required for Agentforce?",
    a: "MuleSoft is not required. For simpler integrations with external systems, Agentforce can use HTTP callout Actions via Apex — connecting to REST APIs without MuleSoft. MuleSoft becomes worth the cost when you need complex, high-volume integration with enterprise systems (ERP, EHR, core banking) or when you need advanced transformation, monitoring, and governance capabilities. Typical MuleSoft Anypoint Platform pricing ranges from $150,000–$500,000+/year. For lighter integration needs, Apex HTTP callouts are a significant cost saving.",
  },
  {
    q: "Can I start with a small pilot before committing to annual volume?",
    a: "Yes. Salesforce offers monthly Agentforce licences (at a premium over annual pricing), and Kovil AI runs fixed-price pilots scoped to a single use case. Our typical pilot is 2–3 weeks and scoped to production — not a proof of concept. The pilot gives you real conversation volume, real resolution rate data, and a real business case before you commit to annual volume. We recommend starting with a pilot for exactly this reason.",
  },
  {
    q: "How much does Agentforce implementation cost?",
    a: "Implementation cost varies by scope. A focused single-use-case pilot (2–3 weeks) typically runs $15,000–$35,000 fixed price. A full multi-cloud deployment (6–12 weeks) covering multiple use cases, MuleSoft integration, and Data Cloud setup runs $60,000–$180,000. Ongoing managed services for agent monitoring and optimisation add $5,000–$15,000/month. Traditional Salesforce SIs often charge $250–$400/hour on T&M, which can reach $432,000+ for a 12-week engagement. Kovil AI operates fixed-price only.",
  },
  {
    q: "What is the difference between Agentforce and Einstein licence pricing?",
    a: "Agentforce is priced per conversation for autonomous agent interactions. Einstein licences are user-based add-ons (~$50/user/month for Einstein for Sales or Service) that unlock Einstein Copilot features, predictive scoring, and generative AI capabilities for individual reps. Many Agentforce deployments need both: Agentforce for autonomous agent handling, Einstein licences for the rep-facing AI features that support HITL escalations. If you are on Salesforce Unlimited or Unlimited+, some Einstein features are included.",
  },
  {
    q: "How do I calculate the ROI of Agentforce?",
    a: "Start with your baseline cost: number of service reps or SDRs handling the target query type, multiplied by annual loaded cost per head. Then establish your autonomous resolution rate target (typically 55–70% for well-configured agents). Apply that rate to calculate labour displacement. Compare annual Agentforce cost (conversations × $2 × 12 months, plus licences) against annual labour saving. Typical break-even is 14–24 months. Our ROI guide covers this in full detail with worked examples from real deployments.",
  },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) setProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 pointer-events-none">
      <div
        className="h-full transition-all duration-100"
        style={{ width: `${progress}%`, backgroundColor: SF_BLUE }}
      />
    </div>
  )
}

function TableOfContents() {
  return (
    <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${SF_BLUE}30` }}>
      <div
        className="px-4 py-3 flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-widest"
        style={{ backgroundColor: `${SF_BLUE}10`, color: SF_BLUE }}
      >
        <List className="h-3.5 w-3.5" />
        In this guide
      </div>
      <nav className="py-1">
        {tocSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="flex items-start gap-3 px-4 py-2.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors group"
          >
            <span
              className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
              style={{ backgroundColor: SF_BLUE }}
            >
              {s.n}
            </span>
            <span className="leading-snug">{s.title}</span>
          </a>
        ))}
      </nav>
      <div className="border-t border-border p-3">
        <button
          onClick={openCalendly}
          className="w-full text-xs font-semibold text-white py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity"
          style={{ backgroundColor: SF_BLUE }}
        >
          Book a Scoping Call
        </button>
      </div>
    </div>
  )
}

function SectionHeading({ n, id, children }: { n: number; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-5 mt-0 scroll-mt-24">
      <div
        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white"
        style={{ backgroundColor: SF_BLUE }}
      >
        {n}
      </div>
      <h2 className="font-display text-2xl font-bold tracking-tight leading-tight">{children}</h2>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <div className="flex-1 h-px bg-border" />
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `${SF_BLUE}80` }} />
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 my-8 border-l-4"
      style={{ backgroundColor: `${SF_BLUE}10`, borderLeftColor: SF_BLUE }}
    >
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
        <div className="text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  )
}

function PriceBox({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="rounded-xl my-8 overflow-hidden border" style={{ borderColor: `${SF_BLUE}30` }}>
      <div
        className="px-5 py-3 flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest"
        style={{ backgroundColor: `${SF_BLUE}10`, color: SF_BLUE }}
      >
        <DollarSign className="h-4 w-4" />
        Pricing at a glance
      </div>
      <div className="divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="flex items-start justify-between gap-4 px-5 py-3">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="text-sm font-semibold text-foreground text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-5 my-8 border-l-4 border-amber-500 bg-amber-500/5">
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
        <div className="text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AgentforcePricingGuidePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Reading progress */}
      <ReadingProgress />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <span>/</span>
            <span className="cursor-default">Playbook</span>
            <span>/</span>
            <span className="text-foreground">Agentforce Pricing Guide 2026</span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
            >
              Playbook · Pricing
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Agentforce Pricing Guide 2026: What It Really Costs to Deploy Salesforce Agentforce
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most pricing pages give you the headline number. This guide breaks down the full cost — licences, conversations, Data Cloud, Einstein, implementation, and ongoing support — so you can model a realistic business case before your first scoping call.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                16 min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                June 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                By Kovil AI Engineering Team
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main: article + sticky TOC sidebar */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="lg:grid lg:grid-cols-[1fr_272px] lg:gap-14 lg:items-start">

          {/* ── Article content ──────────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >

              {/* Section 1 */}
              <SectionHeading n={1} id="pricing-model">The Agentforce pricing model</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Agentforce is priced per conversation — not per seat, not per month. As of 2026, the list price is <strong className="text-foreground">$2 per conversation</strong> with volume discounts negotiated at enterprise level. This is a structural departure from the Salesforce licence model you may be used to: your bill is determined by how much your agents do, not by how many users you have.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Understanding what counts as a conversation is the first pricing question every buyer should resolve before modelling costs.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                What counts as a conversation?
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                A conversation is a complete interaction between an end user and an Agentforce agent — from the first message to resolution or escalation. A conversation ends when the user session closes, the agent resolves the case, or a 24-hour inactivity window passes. Multiple back-and-forth messages within one session count as one conversation. A complex exchange involving 15 messages costs the same as a single-question resolution.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                This matters enormously for your cost model. If your target use case involves lengthy multi-turn exchanges (complex technical support, financial advisory sessions), the per-conversation unit economics look very different from a simple FAQ deflection use case where most sessions resolve in 2–3 exchanges.
              </p>

              <PriceBox items={[
                { label: "Base list price", value: "$2.00 per conversation" },
                { label: "Enterprise volume (1,000+ conversations/day)", value: "$0.80–$1.20/conversation negotiated" },
                { label: "Minimum commitment", value: "~1,000 conversations/month ($2,000/month minimum)" },
                { label: "Contract term", value: "Annual commitment standard; monthly available at premium" },
              ]} />

              <Callout>
                Volume pricing is negotiated at the account level during your Salesforce AE conversation — it is not published on a pricing page. If you are expecting to run 500+ conversations/day, ensure you have that negotiation before signing. The difference between list price and negotiated enterprise pricing is material at scale.
              </Callout>

              <SectionDivider />

              {/* Section 2 */}
              <SectionHeading n={2} id="licence-requirements">Licence requirements beyond the base</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                The $2/conversation figure covers your Agentforce conversation consumption. It does not cover the additional licences and platform costs that most serious production deployments require. Here is what you need to budget for beyond the headline number.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Data Cloud — required for most serious deployments
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Data Cloud is not included in the Agentforce conversation price. If you want your agents grounded in unified customer data — which is the recommendation for any production-grade deployment — you need Data Cloud. Without it, your agents reason over whatever data is in the immediate Salesforce record context. With it, they have access to a unified 360-degree customer profile combining CRM data, engagement history, external signals, and calculated insights.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Data Cloud pricing as of 2026:</strong> $108,000/year for 10 million unified profiles (Salesforce list price). Many organisations that have already invested in Salesforce at scale already have Data Cloud — in which case this is not an incremental cost. If you do not have it, this is the largest add-on cost in the stack.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Einstein licences
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Some Agentforce capabilities — Einstein Copilot Search, Einstein for Sales, Einstein for Service — require Einstein licences on top of your base Salesforce edition. These are user-based licences that sit alongside the conversation-based Agentforce pricing.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Einstein for Sales and Service:</strong> approximately $50/user/month. A 50-person sales team adds $30,000/year. If you are on Salesforce Unlimited or Unlimited+, some Einstein features are already included in your base licence — confirm with your AE which specific capabilities are covered before purchasing add-ons.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                MuleSoft for external integrations
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                If your agents need to connect to non-Salesforce systems — ERP for inventory and order data, EHR for patient records, core banking platforms, logistics tracking systems — you need an integration layer. MuleSoft is the Salesforce-native option.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">MuleSoft Anypoint Platform:</strong> typically $150,000–$500,000+/year depending on cores and API call volume. This is a significant budget line. However, for simpler integrations, Agentforce supports HTTP callout Actions via Apex that can connect to REST APIs directly without MuleSoft — a substantial cost saving for architectures where MuleSoft&apos;s advanced transformation and governance capabilities are not needed.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The scoping question to ask early: does every external integration need MuleSoft, or can some be handled via Apex callouts? In our experience, approximately 40% of integrations that clients initially think need MuleSoft can be addressed with Apex — saving six figures annually.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Your base Salesforce licences
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Agentforce runs on top of your existing Salesforce org. Sales Cloud, Service Cloud, Financial Services Cloud, or Health Cloud licences are prerequisites. If you do not have these, they need to be factored into total cost. Sales Cloud Professional: from $80/user/month. Service Cloud: from $80/user/month. Enterprise editions (required for many Agentforce capabilities): from $165/user/month.
              </p>

              <SectionDivider />

              {/* Section 3 */}
              <SectionHeading n={3} id="implementation-cost">Implementation cost — what you pay a partner</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                For most organisations, implementation is the largest one-time cost and the factor most likely to determine whether the deployment succeeds. Implementation cost is highly variable and depends on use case complexity, org maturity, integration requirements, and the partner model you choose.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Fixed-price pilot (2–3 weeks): $15,000–$35,000
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                One use case, scoped to production. Includes Topic configuration, Action development (Flow and Apex), Einstein Trust Layer setup, human-in-the-loop exception handling, UAT, and go-live. Also includes 2 weeks of post-launch support to tune behaviour and resolve edge cases surfaced by real traffic. This is how Kovil AI always starts — a focused pilot on the highest-value use case, with a clear definition of success.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Full multi-cloud deployment (6–12 weeks): $60,000–$180,000
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Multiple use cases across Sales Cloud, Service Cloud, and/or Marketing Cloud. Includes MuleSoft integration (if required), Data Cloud setup, custom Action development, full UAT, training, and production deployment. The upper end of this range reflects complex integrations with legacy systems, regulated industry compliance configuration, and large knowledge base setup for RAG-grounded agents.
              </p>

              <h3
                className="font-display text-xl font-semibold mb-3 mt-8 pl-3"
                style={{ borderLeft: `3px solid ${SF_BLUE}` }}
              >
                Ongoing managed services: $5,000–$15,000/month
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Agent performance monitoring, conversation analysis (identifying gaps in Topic coverage), model and instruction updates, new use case addition, and quarterly business reviews. Most organisations find that agents require ongoing tuning in the first 6 months as real-world traffic surfaces edge cases not seen in UAT. The question is whether your internal team handles this or an external partner does.
              </p>

              <WarningBox>
                <strong>Traditional Salesforce SIs often charge $250–$400/hour on a time-and-materials basis.</strong> A 12-week engagement at $300/hour with a 3-person team costs $432,000+ with no guaranteed outcome. You are paying for time, not results. Kovil AI operates fixed-price only — you pay for a working agent in production, not for hours on a Jira board.
              </WarningBox>

              <SectionDivider />

              {/* Section 4 */}
              <SectionHeading n={4} id="tco-model">Total cost of ownership model</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Here is a worked Year 1 TCO example for a mid-size B2B SaaS company deploying Agentforce for SDR qualification and service case resolution.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">Scenario:</strong> 5,000 conversations/month, 2 use cases (SDR qualification agent + Service case resolution agent). No existing Data Cloud. 50-user sales team requiring Einstein for Sales licences. 6-week implementation scoped as pilot-then-full-build.
              </p>

              <div className="rounded-xl border overflow-hidden my-8" style={{ borderColor: `${SF_BLUE}25` }}>
                <div
                  className="px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
                >
                  Year 1 cost breakdown
                </div>
                <div className="divide-y divide-border">
                  {[
                    { item: "Agentforce conversations (5,000/month × $2 × 12)", cost: "$120,000" },
                    { item: "Data Cloud (10M profiles, list price)",             cost: "$108,000" },
                    { item: "Einstein for Sales (50 users × $50/month × 12)",   cost: "$30,000"  },
                    { item: "Implementation (pilot + full build)",               cost: "$80,000"  },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between px-5 py-3">
                      <span className="text-sm text-muted-foreground">{row.item}</span>
                      <span className="text-sm font-semibold text-foreground">{row.cost}</span>
                    </div>
                  ))}
                  <div
                    className="flex items-center justify-between px-5 py-3 font-bold"
                    style={{ backgroundColor: `${SF_BLUE}08` }}
                  >
                    <span className="text-sm" style={{ color: SF_BLUE }}>Total Year 1</span>
                    <span className="text-sm" style={{ color: SF_BLUE }}>~$338,000</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border overflow-hidden my-8" style={{ borderColor: `${SF_BLUE}25` }}>
                <div
                  className="px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
                >
                  Year 2+ (ongoing annual cost)
                </div>
                <div className="divide-y divide-border">
                  {[
                    { item: "Agentforce conversations (5,000/month × $2 × 12)", cost: "$120,000" },
                    { item: "Managed services ($7,000/month)",                   cost: "$84,000"  },
                    { item: "Einstein licences (ongoing)",                        cost: "$30,000"  },
                  ].map((row) => (
                    <div key={row.item} className="flex items-center justify-between px-5 py-3">
                      <span className="text-sm text-muted-foreground">{row.item}</span>
                      <span className="text-sm font-semibold text-foreground">{row.cost}</span>
                    </div>
                  ))}
                  <div
                    className="flex items-center justify-between px-5 py-3 font-bold"
                    style={{ backgroundColor: `${SF_BLUE}08` }}
                  >
                    <span className="text-sm" style={{ color: SF_BLUE }}>Total Year 2+</span>
                    <span className="text-sm" style={{ color: SF_BLUE }}>~$234,000/year</span>
                  </div>
                </div>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">ROI crossover:</strong> At 68% case resolution automation, a team that previously needed 10 service agents at $55,000/year loaded cost ($550,000/year) now handles the same volume with 3–4 agents ($165,000–$220,000/year). Gross annual saving: $330,000–$385,000. Net of Year 2 Agentforce cost ($234,000): approximately $96,000–$151,000 net annual saving. Break-even on the Year 1 investment lands at approximately 21–24 months.
              </p>

              <Callout>
                These numbers assume list-price Agentforce conversations and no existing Data Cloud. If your organisation already has Data Cloud and negotiates volume pricing (achievable at 1,000+ conversations/day), the economics shift materially. The most important single variable is autonomous resolution rate — a shift from 55% to 70% resolution can cut your effective conversation cost by 30%.
              </Callout>

              <SectionDivider />

              {/* Section 5 */}
              <SectionHeading n={5} id="negotiation">How to negotiate Agentforce pricing</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Agentforce pricing is not fixed — it is negotiated. The headline $2/conversation figure is the Salesforce list price, not the price sophisticated buyers pay. Here is where the negotiation leverage exists.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Volume commitments:</strong> Commit to higher monthly conversation volume and negotiate the per-conversation rate down. If your use case justifies 1,000+ conversations/day, use that volume commitment as your primary negotiating lever.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Multi-year deals:</strong> A 3-year commitment typically unlocks better per-conversation pricing and potentially favourable terms on Data Cloud. If you are confident in the platform, the multi-year discount can be worth it.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Bundled Salesforce deals:</strong> If you are negotiating or renewing other Salesforce products simultaneously (Sales Cloud, Service Cloud, Marketing Cloud), bundle Agentforce into the negotiation. Salesforce AEs have more flexibility on package pricing than on individual product pricing.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Proof-of-value pilot terms:</strong> Ask for a limited-volume pilot at reduced or fixed price before committing to annual volume. Many AEs can accommodate a 90-day, capped-volume pilot arrangement. This lets you validate the business case with real traffic before the annual commitment.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Kovil AI advises on licence optimisation as part of our Strategy &amp; Readiness engagement. We have visibility across multiple deployments and can advise on what realistic negotiated pricing looks like for your volume profile before you walk into the AE conversation.
              </p>

              <SectionDivider />

              {/* Section 6 */}
              <SectionHeading n={6} id="questions-ae">Questions to ask your Salesforce AE</SectionHeading>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                When you sit down with your Salesforce AE to discuss Agentforce pricing, these are the eight questions that will reveal the true cost and the available flexibility:
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { n: 1, q: "What is the all-in per-conversation price for our expected monthly volume, including any commit discount?" },
                  { n: 2, q: "What licence tiers are required for the specific use cases we are targeting (service deflection, SDR qualification, internal operations)?" },
                  { n: 3, q: "Is Data Cloud included in any packaging option at our Salesforce spend level, or is it a full add-on?" },
                  { n: 4, q: "What Einstein capabilities are included in our current Salesforce edition vs. requiring additional licences?" },
                  { n: 5, q: "Can we run a 90-day capped pilot at a fixed or trial rate before committing to annual conversation volume?" },
                  { n: 6, q: "What is the contractual commitment if our actual conversation volume is significantly lower than our committed volume?" },
                  { n: 7, q: "What is included in Agentforce platform support at our licence tier, and what costs extra?" },
                  { n: 8, q: "If we bundle Agentforce with our upcoming Sales Cloud or Service Cloud renewal, what is the combined discount available?" },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:bg-muted/50 hover:border-border/80 transition-colors"
                  >
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: SF_BLUE }}
                    >
                      {item.n}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{item.q}</p>
                  </div>
                ))}
              </div>

            </motion.div>

            {/* Mid-article CTA */}
            <div
              className="rounded-2xl p-8 text-center border mb-16"
              style={{ backgroundColor: `${SF_BLUE}08`, borderColor: `${SF_BLUE}30` }}
            >
              <TrendingUp className="h-8 w-8 mx-auto mb-4" style={{ color: SF_BLUE }} />
              <h3 className="font-display text-xl font-bold mb-2">Want a cost model for your specific use case?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Book a scoping call — we will model the full licence and implementation cost for your use case before you commit to anything. No obligation, no sales pitch.
              </p>
              <Button
                onClick={openCalendly}
                className="font-semibold px-6 py-2.5 rounded-lg text-white"
                style={{ backgroundColor: SF_BLUE }}
              >
                Book a Scoping Call
              </Button>
            </div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div id="faq" className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
                  Frequently asked questions
                </h2>
                <div className="rounded-xl border border-border overflow-hidden divide-y divide-border">
                  {faqItems.map((item, i) => (
                    <motion.div
                      key={item.q}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="p-6 bg-card hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex gap-3 mb-3">
                        <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                        <h3 className="font-display font-semibold text-base text-foreground leading-snug">{item.q}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>{/* end article content */}

          {/* ── Sticky TOC sidebar ────────────────────────────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </aside>

        </div>
      </div>

      {/* Related articles */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Related articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block rounded-2xl border border-border bg-card p-6 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <span
                  className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
                >
                  {article.pill}
                </span>
                <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                  {article.readTime} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA banner */}
      <div className="bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to model your Agentforce business case?
          </h2>
          <p className="text-base opacity-70 mb-8 max-w-xl mx-auto">
            We model the full licence and implementation cost before you commit to anything — and we operate fixed-price only, so you know exactly what you&apos;re getting.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={openCalendly}
              className="font-semibold px-6 py-2.5 rounded-lg text-white"
              style={{ backgroundColor: SF_BLUE }}
            >
              Book a Call
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="font-semibold px-6 py-2.5 rounded-lg border-background/30 text-background hover:bg-background/10">
                Back to Agentforce <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

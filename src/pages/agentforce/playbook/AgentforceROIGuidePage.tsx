'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, Users, Lightbulb, TrendingUp, AlertTriangle, HelpCircle, DollarSign, BarChart2, CheckCircle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const relatedArticles = [
  {
    pill: "Pricing",
    title: "Agentforce Pricing Guide 2026: What It Really Costs to Deploy Salesforce Agentforce",
    desc: "Full cost breakdown — per-conversation pricing, Data Cloud, Einstein licences, MuleSoft, and implementation cost.",
    readTime: "16 min read",
    href: "/agentforce/playbook/agentforce-pricing-guide-2026",
  },
  {
    pill: "Implementation Guide",
    title: "How to scope your first Agentforce agent: A practitioner's checklist",
    desc: "The 12 questions you must answer before writing a single Topic or Action.",
    readTime: "8 min read",
    href: "/agentforce/playbook/scope-your-first-agentforce-agent",
  },
]

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

function MetricCard({ stat, label, sub }: { stat: string; label: string; sub: string }) {
  return (
    <div
      className="rounded-xl p-5 border text-center"
      style={{ borderColor: `${SF_BLUE}25`, backgroundColor: `${SF_BLUE}05` }}
    >
      <div className="font-display text-3xl font-bold mb-1" style={{ color: SF_BLUE }}>{stat}</div>
      <div className="text-sm font-semibold text-foreground mb-0.5">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  )
}

const faqItems = [
  {
    q: "What is a typical Agentforce ROI?",
    a: "Based on production deployments we have run, Agentforce typically delivers 35–70% gross cost reduction in the targeted function. Net ROI after licence and implementation costs is highly dependent on autonomous resolution rate and conversation volume. Service Cloud deployments targeting Tier 1 query deflection tend to deliver the clearest ROI — typically $150,000–$400,000 in annual net saving for mid-size organisations. The key variable is resolution rate: a well-configured agent resolves 65–70% of queries autonomously; a poorly scoped agent may resolve 30–40%, which dramatically changes the economics.",
  },
  {
    q: "How long does Agentforce take to reach positive ROI?",
    a: "Typical time to positive ROI is 14–24 months from deployment go-live, depending on use case mix and licence cost. The fastest ROI profile is a Service Cloud agent targeting high-volume Tier 1 queries (order status, account queries, FAQ deflection) with a high autonomous resolution rate. The slowest ROI profile involves complex multi-cloud deployments with heavy MuleSoft integration and a lower-volume, higher-value use case where conversation volume is lower.",
  },
  {
    q: "How do I calculate autonomous resolution rate?",
    a: "Autonomous resolution rate = (conversations resolved by the agent without human escalation) / (total conversations handled by the agent). In the first 30–60 days post-launch, track every conversation and categorise its outcome: autonomous resolution, human escalation (expected), human escalation (unexpected or edge case), or agent failure. The expected escalation rate is built into your scoping. Unexpected escalations identify gaps in Topic coverage or Action failures that need to be addressed to improve resolution rate.",
  },
  {
    q: "What is the ROI of an Agentforce SDR agent?",
    a: "ROI for an SDR agent is primarily calculated as revenue uplift (not cost reduction) because SDR agents expand pipeline coverage without replacing your entire SDR team. The key metric is qualified pipeline increase — typically 25–40% in production deployments. At a $3M qualified pipeline with 20% close rate ($600K ARR), a 34% increase in qualified pipeline adds $204K incremental ARR. SDR teams also free up 60% of their time from manual qualification tasks, effectively increasing team capacity by 1.6× without adding headcount.",
  },
  {
    q: "Does Agentforce ROI include revenue uplift or just cost savings?",
    a: "A complete business case includes both. Cost savings (labour displacement, reduced case handling cost, lower escalation rate) are the most straightforward to calculate and appear in the first 6–12 months. Revenue uplift — from SDR agents expanding pipeline, from service agents recovering at-risk customers, from faster quote cycles improving win rate — typically materialises over 12–24 months but is often larger in absolute terms. Present both to your board, with clear assumptions, separate from each other.",
  },
  {
    q: "How do I present the Agentforce business case to the board?",
    a: "Structure the board presentation in four parts: (1) Current state cost: what you spend today on the function being automated. (2) Deployment cost: Year 1 total including licences, implementation, and a realistic resolution rate target. (3) Steady-state economics: Year 2+ cost vs. Year 2+ saving. (4) Sensitivity analysis: what happens if resolution rate comes in 15 points below target? Boards respond to sensitivity analysis — show you have stress-tested the model. Avoid presenting a single-point ROI number without showing the range.",
  },
  {
    q: "What KPIs should I track for Agentforce ROI?",
    a: "The primary KPIs are: autonomous resolution rate (% of conversations resolved without human intervention), average handle time (for escalated cases — should decrease as agent provides better context), conversation volume (confirms the agent is being used), CSAT score (should remain ≥ baseline), and cost per resolved case (should decrease significantly). Secondary KPIs: escalation reason distribution (which categories escalate most), repeat contact rate (are agents actually resolving issues or just deflecting temporarily), and first-contact resolution rate.",
  },
  {
    q: "Is there an Agentforce ROI calculator?",
    a: "Salesforce provides a general-purpose ROI calculator, but we have found it tends to be optimistic on resolution rate and does not account for implementation cost or Data Cloud in the base calculation. We build custom ROI models as part of our Strategy & Readiness engagement — modelled against your specific conversation volume, use case mix, current headcount and loaded cost, and negotiated pricing. Book a call and we will build a model for your organisation before you commit to anything.",
  },
]

export default function AgentforceROIGuidePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Back breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <span>/</span>
            <span className="hover:text-foreground transition-colors cursor-default">Playbook</span>
            <span>/</span>
            <span className="text-foreground">Agentforce ROI Guide</span>
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
              Playbook · Business Case
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              The Agentforce ROI Guide: How to Build the Business Case for Salesforce AI Agents
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most Agentforce ROI conversations get stuck on the $2/conversation headline. This guide shows you how to build a complete, board-ready business case — cost savings, revenue uplift, productivity gains, and risk reduction — with real numbers from production deployments.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                14 min read
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

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mt-0 mb-4">
            The three ROI drivers of Agentforce
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Every Agentforce ROI model, regardless of use case, draws from three sources. A complete business case quantifies all three — not just the most obvious one.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${SF_BLUE}15` }}
              >
                <DollarSign className="h-5 w-5" style={{ color: SF_BLUE }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">1. Cost reduction — labour displacement for Tier 1 and Tier 2 queries</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The most direct and fastest-to-realise ROI driver. Agentforce agents handle high-volume, repeatable interactions autonomously — customer service queries, lead qualification, internal HR requests. Every conversation the agent resolves without human intervention is an interaction your team does not need to handle. At scale, this translates to meaningful FTE reduction or headcount freeze, depending on your growth trajectory.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${SF_BLUE}15` }}
              >
                <TrendingUp className="h-5 w-5" style={{ color: SF_BLUE }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">2. Revenue uplift — SDR agents and pipeline coverage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  SDR agents do not replace human sellers — they expand coverage. Lead response time drops from hours or days to minutes. Every inbound lead is qualified, regardless of time zone, day of week, or rep availability. Qualified pipeline increases because agents never let a hot lead go cold while waiting for a rep to get to their inbox on Monday morning.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${SF_BLUE}15` }}
              >
                <BarChart2 className="h-5 w-5" style={{ color: SF_BLUE }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">3. Risk reduction — compliance automation and error reduction</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agents configured with Einstein Trust Layer guardrails are more consistent than humans at following compliance scripts, data handling procedures, and disclosure requirements. In regulated industries — financial services, healthcare, insurance — this risk reduction has real economic value in reduced compliance incidents, audit costs, and regulatory risk. This is the hardest ROI driver to quantify but often the most compelling to risk-averse boards.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Cost savings ROI model
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The cost savings model is the most straightforward ROI calculation. Here is the formula and a worked example from a real deployment.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Formula:</strong> Annual agent labour cost × autonomous resolution rate = gross annual saving
          </p>

          <div
            className="rounded-xl border p-6 my-8 font-mono text-sm"
            style={{ borderColor: `${SF_BLUE}25`, backgroundColor: `${SF_BLUE}05` }}
          >
            <div className="text-muted-foreground mb-2">Example: Service team of 10 agents at $55,000/year loaded cost</div>
            <div className="space-y-1.5 text-foreground">
              <div>Total team cost: 10 × $55,000 = <strong>$550,000/year</strong></div>
              <div>Autonomous resolution target: <strong>68%</strong></div>
              <div>Agent handles: 68% of volume → team needs only 3.2 FTE</div>
              <div>Displaced FTE: 10 − 3.2 = <strong>6.8 FTE</strong></div>
              <div>Gross saving: 6.8 × $55,000 = <strong>$374,000/year</strong></div>
              <div>Less Agentforce cost (5,000 conv/month): <strong>$120,000/year</strong></div>
              <div className="pt-2 border-t" style={{ borderColor: `${SF_BLUE}30` }}>
                Net annual saving: <strong style={{ color: SF_BLUE }}>$254,000/year</strong>
              </div>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Real deployment:</strong> A financial services client deployed Agentforce for Service Cloud targeting mortgage servicing queries — account balance, payment history, rate change requests. Autonomous resolution rate stabilised at 68% by day 45 post-launch. Annual saving: $340,000 net of all Agentforce costs.
          </p>

          <Callout>
            The 68% resolution rate is not automatic — it is the result of precise scoping, clean knowledge base data, and well-configured Topics. Agents that are scoped too broadly, given access to stale knowledge articles, or deployed without iterative tuning in the first 60 days routinely land at 35–45% resolution rate. The difference between 45% and 68% resolution is the difference between a marginal result and a compelling one.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Revenue uplift ROI model
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Revenue uplift ROI is calculated differently from cost savings. You are not displacing a cost — you are expanding capacity and converting more of your existing pipeline.
          </p>

          <div
            className="rounded-xl border p-6 my-8 font-mono text-sm"
            style={{ borderColor: `${SF_BLUE}25`, backgroundColor: `${SF_BLUE}05` }}
          >
            <div className="text-muted-foreground mb-2">Example: 200-person B2B SaaS, 10-rep SDR team</div>
            <div className="space-y-1.5 text-foreground">
              <div>SDR team OTE: 10 × $80,000 = <strong>$800,000/year</strong></div>
              <div>Lead response time: 4 days → <strong>9 minutes</strong></div>
              <div>Qualified pipeline increase: <strong>+34%</strong></div>
              <div>Current qualified pipeline: $3M ARR at 20% close rate = $600K revenue</div>
              <div>34% uplift → $4.02M qualified pipeline → <strong>$804K revenue</strong></div>
              <div>Incremental revenue: <strong>$204,000/year</strong></div>
              <div className="pt-2 border-t" style={{ borderColor: `${SF_BLUE}30` }}>
                SDR capacity freed: <span style={{ color: SF_BLUE }}>+60% of time</span> → effective team = 16 SDR equiv.
              </div>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The capacity story matters as much as the pipeline number. When SDRs no longer spend 60% of their time on manual qualification, email admin, and follow-up scheduling, they spend that time on discovery calls, objection handling, and multi-threading — the activities that actually move deals forward. The effective output of a 10-rep SDR team running with Agentforce is comparable to a 14–16 rep team without it.
          </p>

          <div className="border-t border-border my-10" />

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Time-to-ROI analysis
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Time to positive ROI is the metric boards care most about when evaluating AI investment. Here is how it varies by use case.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <MetricCard stat="14–18 mo" label="Service Cloud (Tier 1 deflection)" sub="Fastest ROI profile" />
            <MetricCard stat="18–24 mo" label="SDR + Pipeline agents" sub="Medium ROI profile" />
            <MetricCard stat="24–30 mo" label="Multi-cloud + MuleSoft" sub="Complex integration profile" />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Fastest ROI: Service Cloud agents targeting high-volume Tier 1 queries.</strong> The unit economics are straightforward — every resolved conversation is a measurable cost saving, and Tier 1 queries (order status, account queries, billing questions) are the easiest to configure with high resolution rates. If your service team handles 3,000+ cases/month, this is the use case to start with.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Medium ROI: SDR qualification and pipeline management agents.</strong> Revenue uplift takes longer to appear in the P&amp;L than cost reduction, and qualified pipeline improvement depends on downstream factors (AE conversion rate, deal velocity) that the agent does not control. The business case is real, but the time horizon is longer.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Slowest ROI: Complex multi-cloud deployments with heavy MuleSoft integration.</strong> Higher implementation cost, longer build time, and potentially lower initial resolution rate (because complex use cases are harder to scope precisely) means the break-even stretches. These deployments often have the largest long-term ROI — but they require a longer commitment horizon to justify.
          </p>

          <div className="border-t border-border my-10" />

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The ROI calculation framework — five steps
          </h2>

          <div className="space-y-6 mb-8">
            {[
              {
                n: 1,
                title: "Baseline the current cost",
                body: "Count the FTEs handling the target function. Calculate loaded cost per FTE (salary + benefits + management overhead + tooling = typically 1.3–1.5× base salary). Multiply to get annual baseline cost. This is your cost-to-beat number.",
              },
              {
                n: 2,
                title: "Set a realistic autonomous resolution rate target",
                body: "For well-configured Service Cloud Tier 1 agents: 60–70%. For SDR qualification agents: 70–80% of leads touched (not closed). For complex technical support: 40–55%. Do not use 80%+ unless you have a comparator deployment. The business case fails if resolution rate misses by 15+ points.",
              },
              {
                n: 3,
                title: "Calculate the gross annual saving",
                body: "Apply the resolution rate to your baseline FTE cost. If the agent resolves 68% of volume autonomously, your team handling the remaining 32% is effectively 3.2 FTE equivalent (for a 10-FTE function). Gross saving = displaced FTE × loaded cost.",
              },
              {
                n: 4,
                title: "Subtract total Agentforce cost",
                body: "Conversation cost (monthly volume × $2 × 12) + Data Cloud (if not existing) + Einstein licences (if required) + managed services (ongoing). This is your annual run cost. Subtract from gross saving to get net annual saving.",
              },
              {
                n: 5,
                title: "Calculate payback period",
                body: "Year 1 total cost (annual run cost + implementation cost) ÷ annual net saving = payback in years. A 21-month payback on a $338,000 Year 1 investment with $254,000/year net saving is a defensible business case at most organisations.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: SF_BLUE }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 6 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Three real deployment ROI snapshots
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            These are numbers from production deployments — not hypothetical projections from a vendor calculator.
          </p>

          <div className="space-y-6 mb-8">
            {[
              {
                label: "Financial Services — Service Cloud",
                color: SF_BLUE,
                metrics: [
                  { k: "Resolution rate", v: "68%" },
                  { k: "Annual net saving", v: "$340,000" },
                  { k: "Use case", v: "Mortgage servicing queries" },
                  { k: "Payback period", v: "19 months" },
                ],
              },
              {
                label: "B2B SaaS — Sales Cloud SDR Agent",
                color: "#60A5FA",
                metrics: [
                  { k: "Pipeline increase", v: "+34%" },
                  { k: "Lead response", v: "4 days → 9 minutes" },
                  { k: "SDR productivity", v: "3.2× per rep" },
                  { k: "Implementation time", v: "3 weeks" },
                ],
              },
              {
                label: "Healthcare — Service Cloud Operations",
                color: "#34D399",
                metrics: [
                  { k: "Admin time reclaimed", v: "22 hrs/week" },
                  { k: "Use case", v: "Appointment scheduling & pre-auth" },
                  { k: "Resolution rate", v: "61%" },
                  { k: "Staff freed for clinical", v: "1.4 FTE equivalent" },
                ],
              },
            ].map((snap) => (
              <div
                key={snap.label}
                className="rounded-xl border p-5"
                style={{ borderColor: `${snap.color}30`, backgroundColor: `${snap.color}05` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: snap.color }} />
                  <span className="text-sm font-semibold text-foreground">{snap.label}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {snap.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="text-xs text-muted-foreground mb-0.5">{m.k}</div>
                      <div className="text-sm font-semibold text-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 7 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Common ROI mistakes to avoid
          </h2>

          <div className="space-y-5 mb-8">
            {[
              {
                title: "Counting conversation volume before measuring deflection rate",
                body: "High conversation volume is not ROI. The metric that matters is autonomous resolution rate — the percentage of conversations the agent resolves without human escalation. An agent handling 10,000 conversations/month at 30% resolution is more expensive than one handling 3,000 at 70% resolution. Build the business case on resolution rate, not volume.",
              },
              {
                title: "Ignoring implementation and licence cost in Year 1",
                body: "The $2/conversation figure is not the total cost. Year 1 always includes implementation cost on top of the run cost. A business case that shows only the conversation cost and the labour saving — without implementation cost — will be challenged by finance. Build the full TCO model including implementation in Year 1.",
              },
              {
                title: "Not accounting for HITL exceptions in resolution rate",
                body: "Human-in-the-loop exceptions — cases the agent flags for human review before acting — are not autonomous resolutions. If your model assumes 68% resolution but 15% of resolutions require HITL approval before completion, your effective autonomous rate is lower. Be precise about what counts as autonomous.",
              },
              {
                title: "Overstating autonomous resolution rate in the business case",
                body: "If your board approves based on a 75% resolution rate projection and the agent lands at 55%, you have a credibility problem regardless of whether 55% is still a positive ROI. Build your base case on a conservative resolution rate (40–50% for new use cases) and show the upside scenario at 65–70%. Boards respect conservative modelling.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Mid-article CTA */}
      <div className="max-w-2xl mx-auto px-6 mb-0">
        <div
          className="rounded-2xl p-8 text-center border"
          style={{ backgroundColor: `${SF_BLUE}08`, borderColor: `${SF_BLUE}30` }}
        >
          <CheckCircle className="h-8 w-8 mx-auto mb-4" style={{ color: SF_BLUE }} />
          <h3 className="font-display text-xl font-bold mb-2">Need a board-ready business case?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            We build custom ROI models as part of our Strategy &amp; Readiness engagement — modelled against your specific volume, use case mix, current headcount cost, and negotiated pricing.
          </p>
          <Button
            onClick={openCalendly}
            className="font-semibold px-6 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: SF_BLUE }}
          >
            Book a Scoping Call
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-border pb-8 last:border-0"
              >
                <div className="flex gap-3 mb-2">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                  <h3 className="font-display font-semibold text-base text-foreground leading-snug">{item.q}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
                className="group block rounded-2xl border border-border bg-card p-6 hover:border-border/60 transition-colors"
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
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to build your Agentforce ROI model?
          </h2>
          <p className="text-base opacity-70 mb-8 max-w-xl mx-auto">
            Our team models the full business case for your specific use case, volume, and headcount — before you commit to any licences or implementation spend.
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

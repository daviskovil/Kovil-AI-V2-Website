import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Rocket, Shield, CheckCircle2, ArrowRight, Clock, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { OnboardingModal } from "../components/OnboardingModal"
import { SEOHead } from "../components/SEOHead"

// FAQPage schema — uses questions from all 3 tabs
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",         "item": "https://kovil.ai/" },
    { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://kovil.ai/how-it-works" }
  ]
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How quickly can I get an AI engineer started?", "acceptedAnswer": { "@type": "Answer", "text": "Typically within 24–48 hours of your intake brief. We maintain an active bench of vetted engineers across AI domains and timezones, so matching is fast — no lengthy recruiting process." } },
    { "@type": "Question", "name": "What if the engineer isn't a good fit?", "acceptedAnswer": { "@type": "Answer", "text": "You're covered by a two-week risk-free trial. If the match doesn't feel right for any reason, we rematch you with another engineer at no extra cost — no questions asked." } },
    { "@type": "Question", "name": "How does milestone-gating work?", "acceptedAnswer": { "@type": "Answer", "text": "Each sprint ends with a defined deliverable that you review and sign off before the next sprint begins. No work proceeds without your approval, giving you full control over direction and quality." } },
    { "@type": "Question", "name": "What is included in a fixed-price AI project?", "acceptedAnswer": { "@type": "Answer", "text": "A fixed-scope document with clear deliverables, a realistic timeline, and a flat price. We build in gated milestones and hand off the full codebase with IP fully assigned to you." } },
    { "@type": "Question", "name": "Do you offer a free audit for failing AI apps?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our AI App Rescue engagement starts with a free diagnostic audit — a full review of your codebase, AI architecture, RAG pipeline, and production logs. No commitment to proceed required." } },
    { "@type": "Question", "name": "What types of AI products do you build?", "acceptedAnswer": { "@type": "Answer", "text": "We build AI agent pipelines, RAG knowledge bases, voice AI, conversational apps, AI-augmented SaaS features, LLM evaluation pipelines, and data extraction automation — across all major AI stacks." } },
    { "@type": "Question", "name": "Who owns the IP for work built by Kovil AI?", "acceptedAnswer": { "@type": "Answer", "text": "100% of the IP is assigned to you upon final payment. All code, models, prompts, and work product built during the engagement are yours — no lock-in, no Kovil AI dependency." } },
    { "@type": "Question", "name": "What is the Engagement Manager's role?", "acceptedAnswer": { "@type": "Answer", "text": "Your Engagement Manager is a senior Kovil AI lead who audits every milestone output before it reaches you, flags issues early, and ensures delivery stays aligned with your goals." } }
  ]
}

const tabs = [
  {
    id: "managed-builder",
    label: "Managed AI Engineer",
    icon: Users,
    tagline: "Hire a vetted AI engineer embedded into your team — fully managed, milestone-gated.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Day 1",
        title: "Brief Your Needs",
        description:
          "Fill a quick intake form — takes under 5 minutes. A Delivery Lead contacts you within 24 hours to scope your requirements, preferred stack, and expected timeline.",
        bullets: [
          "5-minute async intake",
          "Delivery Lead assigned same day",
          "Stack & timezone matched",
        ],
      },
      {
        number: "02",
        timeline: "Days 2 – 3",
        title: "Meet Your Engineer",
        description:
          "We surface a shortlist of vetted Tier-1 AI engineers matched to your domain. You meet, align on sprint goals, and sign off on a milestone plan before any work begins.",
        bullets: [
          "Curated shortlist — not a marketplace",
          "Live intro call included",
          "Milestone plan agreed upfront",
        ],
      },
      {
        number: "03",
        timeline: "Week 1 onwards",
        title: "Sprint & Deliver",
        description:
          "Your engineer works in focused sprints. A Engagement Manager audits every milestone output. You get working, production-ready AI — not decks, not promises.",
        bullets: [
          "Weekly milestone check-ins",
          "Engagement Manager quality audit",
          "Two-week risk-free trial",
        ],
      },
    ],
    cta: "Hire an AI Engineer",
    faqs: [
      { q: "How quickly can I get an engineer started?", a: "Typically within 24–48 hours of your intake brief. We maintain an active bench of vetted engineers across AI domains and timezones, so matching is fast — no lengthy recruiting process." },
      { q: "What if the engineer isn't a good fit?", a: "You're covered by a two-week risk-free trial. If the match doesn't feel right for any reason, we rematch you with another engineer at no extra cost — no questions asked." },
      { q: "How does milestone-gating work?", a: "Each sprint ends with a defined deliverable that you review and sign off before the next sprint begins. No work proceeds without your approval, giving you full control over direction and quality." },
      { q: "Do I need to manage the engineer day-to-day?", a: "Minimal management needed. Your engineer is self-directed within each sprint. Your Engagement Manager handles quality auditing and escalations — you only review outputs at milestones." },
      { q: "What tech stacks do your engineers cover?", a: "Our bench covers LLMs, RAG pipelines, vector databases, agent frameworks (LangChain, CrewAI, AutoGen), voice AI, MLOps, full-stack AI integration (Next.js, FastAPI, Node), and more." },
      { q: "Can I hire more than one engineer?", a: "Yes. Once your first engineer is embedded and productive, we can add a second or third based on sprint capacity and roadmap needs — scaling your team without scaling your overhead." },
      { q: "Is there a minimum engagement period?", a: "No hard minimum. We recommend at least 4 weeks to see meaningful output, but you can pause or wind down after the two-week trial if it's not the right fit." },
      { q: "How does billing work?", a: "Engineers are billed on a weekly rate, invoiced weekly or bi-weekly depending on your preference. No long-term contracts — you stay because it's working, not because you're locked in." },
      { q: "What is the Engagement Manager's role?", a: "Your Engagement Manager is a senior Kovil AI lead who audits every milestone output before it reaches you, flags issues early, and ensures delivery stays aligned with your goals." },
      { q: "Can I convert the engineer to a full-time hire?", a: "Yes, with a placement fee. If you find someone you love working with and want to bring them in-house, we can facilitate the transition — just let your Engagement Manager know." },
    ],
  },
  {
    id: "outcome-project",
    label: "Outcome-Based AI Project",
    icon: Rocket,
    tagline: "Describe the outcome you want. We scope, build, and ship it — fixed price, fixed timeline.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Days 1 – 2",
        title: "Scope & Estimate",
        description:
          "Share your idea in plain language. Our team produces a fixed-scope document with clear deliverables, a realistic timeline, and a flat price. No ambiguity, no hidden fees.",
        bullets: [
          "Fixed-price proposal in 48 hours",
          "Deliverables defined in writing",
          "No retainer — pay per project",
        ],
      },
      {
        number: "02",
        timeline: "Weeks 1 – N",
        title: "Build in Gated Milestones",
        description:
          "A dedicated squad builds your AI product in gated milestones. You review and approve each phase before we proceed — full visibility, no surprises mid-build.",
        bullets: [
          "Dedicated squad, not freelancers",
          "Milestone approval gates",
          "Real-time progress dashboard",
        ],
      },
      {
        number: "03",
        timeline: "Final week",
        title: "Ship & Handoff",
        description:
          "We deploy to your infrastructure, write full documentation, and hand off the complete codebase. Optional post-launch support and maintenance retainer available.",
        bullets: [
          "Full codebase ownership",
          "Deployment + documentation included",
          "Optional post-launch support",
        ],
      },
    ],
    cta: "Build an AI Project",
    faqs: [
      { q: "How is the fixed price calculated?", a: "We scope the project in detail before quoting — reviewing your requirements, tech complexity, integration points, and timeline. The fixed price covers all labour and delivery. No surprises after you sign." },
      { q: "What if the scope changes mid-project?", a: "Minor clarifications are absorbed within scope. Meaningful scope changes trigger a formal change request with a revised quote and timeline — agreed before any additional work starts." },
      { q: "Who owns the code and IP?", a: "You do, 100%. Upon final payment, full intellectual property transfers to you — source code, documentation, assets, everything. We retain no rights or access after handoff." },
      { q: "How many rounds of revisions are included?", a: "Two revision rounds per milestone are included in every project. Additional revisions beyond that are scoped and quoted separately to keep delivery on track." },
      { q: "What if you miss the deadline?", a: "We guarantee the timeline outlined in your scope document. If we miss it due to factors on our side, we continue working at no additional cost until the agreed deliverables are complete." },
      { q: "Can I see progress before the final delivery?", a: "Yes — you get access to a real-time progress dashboard and are involved at every milestone gate. You review and approve each phase before we proceed to the next." },
      { q: "Do you provide post-launch support?", a: "We offer an optional post-launch support and maintenance retainer. This covers bug fixes, performance monitoring, and minor enhancements for an agreed monthly fee." },
      { q: "What tech stack will you use?", a: "We recommend the best stack for your project's requirements, but we're flexible. If you have an existing stack or preferences, we align to them. All choices are documented in the scope agreement." },
      { q: "How do the milestone approval gates work?", a: "At each milestone, we present the deliverable, walk you through what was built, and request sign-off. If anything needs adjustment, we address it before moving forward — no surprises at launch." },
      { q: "Do you handle deployment and DevOps?", a: "Yes. Deployment to your infrastructure is included in the final milestone. We set up CI/CD pipelines, environment configs, and hand over full operational documentation." },
    ],
  },
  {
    id: "app-rescue",
    label: "AI Reliability & App Rescue",
    icon: Shield,
    tagline: "Failing AI app? Hallucinating RAG? Vibe-coded mess? Our SWAT team audits, fixes, and stabilises it.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Days 1 – 3",
        title: "Deep Audit",
        description:
          "Our SWAT team audits your full codebase, AI architecture, and production logs. You receive a prioritised diagnostic report — every bug, bottleneck, and risk surface mapped.",
        bullets: [
          "Codebase + AI layer reviewed",
          "Prioritised fix list delivered",
          "No commitment required to proceed",
        ],
      },
      {
        number: "02",
        timeline: "Weeks 1 – 2",
        title: "Fix & Stabilise",
        description:
          "We resolve hallucinations, performance regressions, and critical P1 bugs systematically. Every fix is peer-reviewed and regression-tested before it hits production.",
        bullets: [
          "Hallucination & RAG fixes",
          "Performance & uptime restored",
          "Peer-reviewed before deploy",
        ],
      },
      {
        number: "03",
        timeline: "Month 1 onwards",
        title: "Ongoing Maintenance",
        description:
          "We stay on as your reliability partner — monitoring, proactive patching, and continuous optimisation. Guaranteed SLA with a named engineer on call.",
        bullets: [
          "Named engineer on your account",
          "Proactive monitoring & alerting",
          "99.9% uptime SLA guarantee",
        ],
      },
    ],
    cta: "Get Rescued",
    faqs: [
      { q: "What does the free audit include?", a: "A full review of your codebase, AI architecture, production logs, and performance metrics. You receive a prioritised diagnostic report covering every bug, bottleneck, hallucination risk, and structural issue — no commitment needed to proceed." },
      { q: "How long does the audit take?", a: "Most audits are completed within 1–3 business days depending on codebase size and complexity. We'll give you an accurate estimate after your initial intake call." },
      { q: "What types of issues can you fix?", a: "LLM hallucinations, RAG retrieval failures, latency and performance degradation, critical P1 bugs, broken integrations, insecure prompt handling, infrastructure instability, and poorly structured AI pipelines." },
      { q: "Can you fix apps built by other agencies or freelancers?", a: "Yes — this is one of the most common scenarios we handle. We've rescued apps built by offshore teams, vibe-coded MVPs, and agency projects that were abandoned mid-build." },
      { q: "What's the SLA guarantee?", a: "Our maintenance retainer includes a 99.9% uptime SLA with a named engineer on your account. Response times for P1 (critical) issues are under 2 hours." },
      { q: "How do you fix hallucination issues in RAG systems?", a: "We audit your retrieval pipeline, chunking strategy, embedding model, and prompt structure. Fixes typically involve improving context relevance, adding re-ranking layers, and tightening system prompt guardrails." },
      { q: "What does the ongoing maintenance retainer cost?", a: "Retainer pricing depends on the complexity of your system and the SLA tier required. We quote after the audit when we have a full picture of your infrastructure and support needs." },
      { q: "Do you need full access to our codebase?", a: "For the audit, yes — we need read access to your repos and production environment logs. All access is governed by an NDA and security agreement signed before work begins." },
      { q: "Can you work alongside our existing engineering team?", a: "Absolutely. We often operate as a specialist layer alongside in-house teams — handling AI reliability while your team focuses on product features. We document everything for a clean handoff." },
      { q: "What if the app is beyond repair?", a: "We'll tell you honestly in the audit report. If a rebuild is more cost-effective than fixing, we'll say so and can scope an Outcome-Based rebuild project — giving you a clean, production-grade replacement." },
    ],
  },
]

function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const half = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, half)
  const right = faqs.slice(half)

  const Item = ({ faq, index, ...rest }: { faq: { q: string; a: string }; index: number; [key: string]: unknown }) => {
    void rest
    const isOpen = openIndex === index
    return (
      <div
        className={`border rounded-xl transition-all duration-200 ${isOpen ? "border-accent/40 bg-accent/[0.03]" : "border-border hover:border-border/80"}`}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        >
          <span className={`text-sm font-semibold leading-snug ${isOpen ? "text-accent" : "text-foreground"}`}>
            {faq.q}
          </span>
          <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-accent" : "text-muted-foreground"}`} />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="mt-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-border" />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">Frequently Asked Questions</span>
          <span className="text-xs font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full">{faqs.length}</span>
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* 2-column grid */}
      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-3">
          {left.map((faq, i) => (
            <Item key={i} faq={faq} index={i} />
          ))}
        </div>
        <div className="space-y-3">
          {right.map((faq, i) => (
            <Item key={i + half} faq={faq} index={i + half} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState(0)

  const active = tabs[activeTab]
  const ActiveIcon = active.icon

  return (
    <>
    <SEOHead
      title="How It Works — Managed AI Engineers, Fixed-Price Projects & App Rescue"
      description="Three engagement models: embed a managed AI engineer, deliver a fixed-price AI project, or rescue a failing AI app. See how each works, step by step."
      canonical="/how-it-works"
      schema={[FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
    />
    <div className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-4">
            From Brief to Build —<br />
            <span className="text-accent">Zero Guesswork.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose your engagement model. Every path is milestone-gated, managed, and built to deliver real outcomes.
          </p>
        </div>
        <div className="mt-10 h-px bg-border relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 no-scrollbar">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              const isActive = i === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2.5 px-6 py-5 text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          {/* Tab Intro */}
          <div className="flex items-start gap-4 mb-14">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <ActiveIcon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">{active.label}</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">{active.tagline}</p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {active.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="relative flex flex-col rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />

                {/* Step number + timeline */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-black text-4xl text-accent/20 leading-none select-none">
                    {step.number}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {step.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>

                {/* Bullets */}
                <ul className="space-y-2 mt-auto">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Connector Line (desktop) */}
          <div className="hidden md:flex items-center gap-0 mb-16 -mt-12 px-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                {i < 2 && <div className="flex-1 h-px border-t border-dashed border-accent/30" />}
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-muted/20 p-8">
            <div>
              <p className="font-display font-bold text-xl text-foreground mb-1">Ready to get started?</p>
              <p className="text-sm text-muted-foreground">No commitment needed — let's scope your project first.</p>
            </div>
            <OnboardingModal>
              <Button variant="accent" className="rounded-full font-semibold px-8 whitespace-nowrap">
                {active.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
          </div>

          {/* FAQs */}
          <FAQAccordion faqs={active.faqs} />

        </motion.section>
      </AnimatePresence>

      {/* Compare All Models */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="h-px bg-border mb-16 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Compare Models</p>
        <h2 className="font-display font-bold text-3xl mb-10">Not sure which model fits?</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 font-semibold text-muted-foreground w-40">Feature</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Managed AI Engineer</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Outcome-Based Project</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">App Rescue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Best for", "Ongoing AI features & scale", "New product or MVP build", "Broken or underperforming apps"],
                ["Pricing", "Weekly rate", "Fixed price", "Audit + retainer"],
                ["Timeline", "Flexible, rolling", "Scoped upfront", "Emergency start"],
                ["Team setup", "1 embedded engineer", "Dedicated squad", "SWAT audit team"],
                ["Risk-free trial", "✓ 2-week trial", "✓ Milestone gates", "✓ Free audit first"],
                ["Managed delivery", "✓", "✓", "✓"],
              ].map(([feature, col1, col2, col3]) => (
                <tr key={feature} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 pr-6 text-muted-foreground font-medium">{feature}</td>
                  <td className="py-4 px-4 text-foreground">{col1}</td>
                  <td className="py-4 px-4 text-foreground">{col2}</td>
                  <td className="py-4 px-4 text-foreground">{col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
    </>
  )
}

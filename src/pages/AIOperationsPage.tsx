'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import {
  ArrowRight, X, CheckCircle, Check, Minus,
  TrendingDown, DollarSign, Shield, Database,
  ChevronDown, ChevronUp, Activity, Clock, BarChart3,
} from 'lucide-react'
import { openCalendly } from '../lib/calendly'

const ACCENT = '#FF4F00'
const TEAL   = '#10A37F'

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── AI Health Dashboard mockup ─────────────────────────────────────────────────

function AIDashboardMockup() {
  const metrics = [
    { label: 'Model Accuracy',    value: '94.2%',  delta: '+1.3% vs last week' },
    { label: 'Inference Cost',    value: '$0.0031', delta: '-18% vs last week' },
    { label: 'Latency P95',       value: '287ms',  delta: '-42ms vs last week' },
    { label: 'Hallucination Rate',value: '1.8%',   delta: '-0.4% vs last week' },
  ]
  const alerts = [
    { type: 'ok',   msg: 'RAG retrieval accuracy within SLA' },
    { type: 'ok',   msg: 'Token budget under monthly limit' },
    { type: 'warn', msg: 'Model version update available — under review' },
  ]
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-white/40 font-display">
            AI Health Dashboard — Live
          </span>
        </div>
        <span className="text-[10px] text-white/25">Updated 2 min ago</span>
      </div>

      {/* Metric grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {metrics.map(m => (
          <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
            <p className="text-[10px] text-white/35 mb-1 font-display uppercase tracking-wide">{m.label}</p>
            <p className="font-display text-lg font-bold text-white">{m.value}</p>
            <p className="text-[10px] font-medium" style={{ color: TEAL }}>{m.delta}</p>
          </div>
        ))}
      </div>

      {/* Alert list */}
      <div className="space-y-1.5 border-t border-white/[0.05] pt-4">
        {alerts.map(a => (
          <div key={a.msg} className="flex items-center gap-2 text-xs text-white/45">
            <div className="h-1.5 w-1.5 rounded-full shrink-0"
              style={{ background: a.type === 'ok' ? TEAL : '#F59E0B' }} />
            {a.msg}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
        {[
          { label: 'Systems monitored', value: '12' },
          { label: 'Incidents this month', value: '0' },
          { label: 'Uptime SLA', value: '99.9%' },
        ].map(item => (
          <div key={item.label} className="text-center">
            <p className="font-display text-base font-bold text-white">{item.value}</p>
            <p className="text-[10px] text-white/30">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const problemCards = [
  {
    icon: <TrendingDown size={20} />,
    title: 'Model Drift',
    body: "Real-world data shifts every quarter. Models trained on yesterday's data produce degraded outputs today — often without any error thrown. Your AI looks working but accuracy has dropped 15–30% unnoticed.",
    color: '#EF4444',
  },
  {
    icon: <DollarSign size={20} />,
    title: 'Cost Spirals',
    body: 'Token costs compound fast. A poorly optimised RAG pipeline or over-provisioned context window can triple your monthly AI spend within six months. Most teams have no real visibility into where the spend is going.',
    color: '#F59E0B',
  },
  {
    icon: <Shield size={20} />,
    title: 'Compliance Gaps',
    body: 'Regulated industries require audit logs for every AI inference. Without structured logging, you cannot answer a compliance audit — or a client due diligence questionnaire. Silence is not a defence.',
    color: '#8B5CF6',
  },
  {
    icon: <Database size={20} />,
    title: 'Data Pipeline Rot',
    body: "RAG indices go stale. Vector embeddings drift from your actual document corpus. Connectors break silently. Your AI answers questions with information that's six months out of date — and users lose trust.",
    color: '#3B82F6',
  },
]

const pillars = [
  {
    num: '01',
    title: 'Monitor & Alert',
    body: 'Continuous visibility into model accuracy, latency, token costs, hallucination rates, and data pipeline health. Real-time alerting before your users report a problem.',
    items: [
      'Model performance dashboards',
      'Drift detection & alerting',
      'Token cost monitoring',
      'Data pipeline health checks',
      'SLA breach notifications',
    ],
  },
  {
    num: '02',
    title: 'Optimise & Improve',
    body: 'Monthly optimisation sprints targeting cost reduction, latency improvement, and accuracy uplift. We do not just watch the metrics — we move them. Average token cost reduction: 28% within 90 days.',
    items: [
      'Context window optimisation',
      'RAG retrieval tuning',
      'Prompt template improvement',
      'Caching and batching strategy',
      'Model version evaluation',
    ],
  },
  {
    num: '03',
    title: 'Govern & Comply',
    body: 'Structured audit logging for every inference, compliance reporting for regulated industries, and guardrails that prevent your AI from producing outputs that create legal or reputational risk.',
    items: [
      'Per-inference audit trails',
      'Output guardrails management',
      'Compliance report generation',
      'PII detection and masking',
      'Model change documentation',
    ],
  },
]

const onboardingSteps = [
  {
    step: 'Week 1',
    title: 'AI Stack Audit',
    body: 'We document your current AI architecture, instrument monitoring, establish performance baselines, and identify the top 3 cost and reliability improvement opportunities.',
    color: ACCENT,
  },
  {
    step: 'Week 2',
    title: 'Monitoring Live',
    body: 'Dashboards, alerting, and audit logging are configured and handed over. You have full visibility into your AI system health — often for the first time.',
    color: TEAL,
  },
  {
    step: 'Month 1',
    title: 'First Optimisation Sprint',
    body: 'We deliver the first concrete improvement — typically a 15–25% token cost reduction or a measurable accuracy uplift. Proof of value before any longer commitment.',
    color: '#8B5CF6',
  },
]

const pricingTiers = [
  {
    name: 'Maintain',
    price: '$2,000 – $4,000',
    period: '/month',
    description: 'Monitoring, alerting, and incident response. The baseline that prevents AI systems from failing silently in production.',
    features: [
      'Continuous model performance monitoring',
      'Automated alerting on drift, errors, and cost spikes',
      '24-hour incident response SLA',
      'Monthly health report',
      'Model version tracking',
      'Basic token cost reporting',
    ],
    cta: 'Start with Maintain',
    highlight: false,
  },
  {
    name: 'Operate',
    price: '$8,000 – $15,000',
    period: '/month',
    description: 'Full operations including optimisation sprints, data pipeline management, and continuous improvement — AI as a true managed service.',
    features: [
      'Everything in Maintain',
      'Monthly optimisation sprints',
      'Token cost reduction (target 20–35%)',
      'RAG index and data pipeline management',
      'Latency and throughput improvements',
      'Compliance audit logging',
      'Quarterly strategic review',
    ],
    cta: 'Start with Operate',
    highlight: true,
  },
  {
    name: 'Accelerate',
    price: '$25,000 – $50,000',
    period: '/month',
    description: 'Dedicated embedded operations team with engineering hours, model evaluation, compliance reporting, and AI roadmap advisory.',
    features: [
      'Everything in Operate',
      'Dedicated embedded engineering team',
      'Continuous model evaluation and fine-tuning',
      'Custom compliance reporting (SOC 2, HIPAA-adjacent)',
      'AI roadmap advisory and strategy',
      'Priority SLA with 4-hour response',
      'Executive stakeholder reporting',
    ],
    cta: 'Talk to us about Accelerate',
    highlight: false,
  },
]

const texasVerticals = [
  {
    icon: '🏥',
    name: 'Healthcare & MedTech',
    pain: 'Clinical AI that hallucinates or drifts is a patient safety issue. HIPAA audit logs are not optional.',
    solution: 'PHI-safe monitoring, guardrails, and compliance-ready audit trails for clinical AI systems.',
    color: '#3B82F6',
  },
  {
    icon: '⚖️',
    name: 'Legal & Financial Services',
    pain: 'Document AI that degrades or produces incorrect outputs creates liability. Every inference must be auditable.',
    solution: 'Structured audit logging, output drift detection, and human-in-the-loop checkpoints for regulated workflows.',
    color: '#8B5CF6',
  },
  {
    icon: '⚡',
    name: 'Energy & Oil & Gas',
    pain: 'Operational AI on rig, pipeline, and facility data cannot tolerate silent failures or stale models.',
    solution: 'Real-time monitoring with anomaly detection, alerting pipelines, and on-call incident response.',
    color: '#F59E0B',
  },
  {
    icon: '🏗️',
    name: 'Real Estate & PropTech',
    pain: 'Valuation, underwriting, and CRM AI tools need to stay accurate as market data shifts every quarter.',
    solution: 'Monthly data refresh cycles, model re-evaluation, and benchmarking against live market data.',
    color: ACCENT,
  },
]

const stats = [
  { value: '97%',   label: 'average uptime across operated AI systems' },
  { value: '28%',   label: 'average token cost reduction within 90 days' },
  { value: '< 2 hr', label: 'mean time to detect and alert on model drift' },
  { value: '100%',  label: 'IP ownership — all configs, logs, and dashboards are yours' },
]

const comparisonRows = [
  { feature: 'Ongoing performance monitoring',        kovil: true,       diy: 'partial' as const, agency: false      },
  { feature: 'Model drift detection & remediation',   kovil: true,       diy: false,              agency: false      },
  { feature: 'Token cost optimisation sprints',       kovil: true,       diy: false,              agency: false      },
  { feature: 'Incident response SLA',                 kovil: true,       diy: false,              agency: 'partial' as const },
  { feature: 'Compliance audit logging',              kovil: true,       diy: 'partial' as const, agency: false      },
  { feature: 'RAG index & data pipeline management',  kovil: true,       diy: 'partial' as const, agency: false      },
  { feature: 'Monthly improvement sprints',           kovil: true,       diy: false,              agency: false      },
  { feature: 'AI strategy & roadmap advisory',        kovil: true,       diy: false,              agency: 'partial' as const },
]

const faqs = [
  {
    q: 'What exactly does AI Operations cover?',
    a: 'AI Operations is the ongoing engineering work required to keep AI systems healthy in production: model performance monitoring, drift detection and remediation, token cost optimisation, compliance and audit logging, data pipeline maintenance, version management for model updates, and continuous improvement. It is the discipline that prevents working AI from silently degrading over time.',
  },
  {
    q: 'We built our AI system internally — can Kovil AI operate it?',
    a: 'Yes. We operate AI systems regardless of who built them. Our onboarding process documents your current architecture, establishes baseline performance metrics, instruments monitoring, and configures alerting thresholds within the first two weeks. We have operated systems built on LangChain, LlamaIndex, CrewAI, OpenAI APIs, Anthropic Claude, Azure OpenAI, and custom fine-tuned models.',
  },
  {
    q: 'What is the difference between the Maintain, Operate, and Accelerate tiers?',
    a: 'Maintain covers core monitoring, alerting, and incident response — the baseline that keeps your system from breaking silently. Operate adds proactive optimisation: cost reduction, latency improvement, data pipeline management, and monthly improvement sprints. Accelerate is a full embedded operations team: dedicated engineering hours, continuous model evaluation, compliance reporting, and strategic AI roadmap advisory.',
  },
  {
    q: 'How does Kovil AI handle AI compliance and audit requirements?',
    a: 'We instrument structured audit logging for every model inference: input hash, output hash, latency, token cost, model version, and user context. For regulated industries, we produce monthly compliance reports mapping your AI systems against applicable frameworks (SOC 2, HIPAA-adjacent, financial services AI governance). We also manage guardrails libraries for open-source model deployments and implement PII masking for data that should not enter LLM context.',
  },
  {
    q: 'What does model drift detection mean in practice?',
    a: "Model drift means your AI system starts giving worse outputs than it did at launch — often because the real-world data it operates on has changed, even though the model weights have not. We detect drift by monitoring output quality metrics (accuracy, coherence, hallucination rate) against your production data weekly, comparing against the baseline we established at launch. When drift is detected, we diagnose the cause — data distribution shift, retrieval index staleness, prompt template mismatch — and remediate within the agreed SLA.",
  },
  {
    q: 'Is there a minimum commitment for AI Operations?',
    a: 'The Maintain tier requires a 3-month minimum to allow proper onboarding, baseline establishment, and monitoring configuration. Operate and Accelerate tiers have a 6-month minimum. There are no lock-in contracts beyond the initial term — month-to-month after that. Every engagement begins with a free 2-week onboarding audit regardless of tier.',
  },
]

// ── Cell renderer ─────────────────────────────────────────────────────────────

function ComparisonCell({ value }: { value: boolean | 'partial' }) {
  if (value === true)      return <Check  size={16} style={{ color: TEAL }}         className="mx-auto" />
  if (value === 'partial') return <Minus  size={16} className="mx-auto text-yellow-500/70" />
  return                          <X      size={14} className="mx-auto text-white/20" />
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AIOperationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* Left: copy */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: ACCENT, background: `${ACCENT}18`, border: `1px solid ${ACCENT}28` }}>
                <Activity size={12} /> AI Operations
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(30px,4vw,52px)] font-bold leading-[1.07] tracking-tight text-white">
              Your AI systems in production.<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FF8C42] bg-clip-text text-transparent">
                Monitored. Optimised. Never left to drift.
              </span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Most AI systems degrade within 90 days of launch. Model drift, rising token costs, stale data pipelines,
              and silent failures kill ROI before your team notices. Kovil AI operates your AI systems so yours doesn&apos;t have to.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3">
              {[
                { num: '97%',    label: 'average uptime'          },
                { num: '28%',    label: 'token cost reduction'    },
                { num: '< 2 hr', label: 'drift detection time'    },
                { num: '48 hr',  label: 'deployment to monitored' },
              ].map(s => (
                <div key={s.label} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: ACCENT }}>{s.num}</p>
                  <p className="mt-0.5 text-xs text-white/55">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {[
                'Model Monitoring', 'Drift Detection', 'Cost Optimisation',
                'RAG Operations', 'LLMOps', 'Compliance Logging', 'Incident Response',
              ].map(t => (
                <span key={t}
                  className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display cursor-pointer"
                style={{ background: ACCENT, boxShadow: `0 4px 24px ${ACCENT}4D` }}>
                Book a free AI audit <ArrowRight size={15} />
              </button>
              <Link href="#pricing"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors">
                See pricing
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${ACCENT}B3` }} />
              Free onboarding audit · No lock-in · <span className="text-white/50 font-medium">2-week trial included</span>
            </motion.p>
          </div>

          {/* Right: dashboard mockup */}
          <motion.div {...fade(0.1)}>
            <AIDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
              style={{ color: `${ACCENT}B3` }}>The Problem</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">
              AI systems degrade silently. Most teams don&apos;t notice until it&apos;s too late.
            </h2>
            <p className="mt-3 text-white/45 text-sm leading-relaxed">
              Launching an AI system is step one. Keeping it healthy, accurate, and cost-efficient in production is the
              hard part — and it&apos;s where most organisations fail quietly.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((card, i) => (
              <motion.div key={card.title} {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6 hover:border-white/[0.12] transition-colors">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${card.color}18`, color: card.color }}>
                  {card.icon}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
            style={{ color: `${ACCENT}B3` }}>The Solution</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            AI Operations as a managed service — not an afterthought.
          </h2>
          <p className="mt-3 text-white/45 text-sm leading-relaxed">
            Kovil AI embeds into your production AI stack as your operations team. We monitor, optimise, and improve
            your AI systems on a monthly retainer — so your engineers focus on building new things.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid gap-4 lg:grid-cols-3 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div key={pillar.num} {...fade(i * 0.08)}
              className="rounded-2xl border border-white/[0.07] bg-[#111111] p-7">
              <span className="font-display text-4xl font-bold" style={{ color: `${ACCENT}30` }}>{pillar.num}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45 mb-5">{pillar.body}</p>
              <ul className="space-y-2">
                {pillar.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/50">
                    <CheckCircle size={12} style={{ color: ACCENT }} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 3-step onboarding */}
        <motion.div {...fade(0)} className="rounded-2xl border border-white/[0.07] bg-[#111111] p-8">
          <h3 className="font-display text-lg font-bold text-white mb-8 text-center">
            From contract to fully monitored in 2 weeks
          </h3>
          <div className="grid gap-8 sm:grid-cols-3">
            {onboardingSteps.map((s, i) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                  style={{ background: s.color }}>
                  {i + 1}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest font-display"
                  style={{ color: s.color }}>{s.step}</span>
                <h4 className="mt-1 font-display font-semibold text-white text-sm">{s.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/40">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.value} {...fade(i * 0.07)} className="text-center">
                <p className="font-display text-[clamp(26px,3.5vw,40px)] font-bold" style={{ color: ACCENT }}>
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-white/45 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
            style={{ color: `${ACCENT}B3` }}>Pricing</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">
            Three tiers. One goal: AI that stays healthy.
          </h2>
          <p className="mt-3 text-white/45 text-sm">
            All tiers include a free 2-week onboarding audit. No lock-in after the initial term.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <motion.div key={tier.name} {...fade(i * 0.08)}
              className="relative rounded-2xl border p-7 flex flex-col"
              style={{
                borderColor: tier.highlight ? 'rgba(255,79,0,0.40)' : 'rgba(255,255,255,0.07)',
                background:  tier.highlight ? `${ACCENT}0A` : '#111111',
              }}>
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full px-4 py-1 text-[11px] font-bold font-display text-white"
                    style={{ background: ACCENT }}>
                    Most popular
                  </span>
                </div>
              )}
              <div className="mb-5">
                <p className="font-display text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: tier.highlight ? ACCENT : 'rgba(255,255,255,0.4)' }}>
                  {tier.name}
                </p>
                <p className="font-display text-2xl font-bold text-white">
                  {tier.price}
                  <span className="text-sm font-normal text-white/40">{tier.period}</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/45">{tier.description}</p>
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-xs text-white/55">
                    <CheckCircle size={13} style={{ color: tier.highlight ? ACCENT : TEAL }}
                      className="mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={openCalendly}
                className="w-full rounded-xl py-3 text-sm font-semibold font-display transition-all cursor-pointer"
                style={tier.highlight
                  ? { background: ACCENT, color: '#fff', boxShadow: `0 4px 20px ${ACCENT}40` }
                  : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TEXAS VERTICALS ───────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
              style={{ color: `${ACCENT}B3` }}>Texas Focus</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">
              Built for Texas industries. Operating AI where the stakes are high.
            </h2>
            <p className="mt-3 text-white/45 text-sm leading-relaxed">
              Kovil AI is headquartered in Austin and Garden City. We understand the compliance, regulatory, and
              operational demands of industries that drive the Texas economy.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {texasVerticals.map((v, i) => (
              <motion.div key={v.name} {...fade(i * 0.07)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6 hover:border-white/[0.12] transition-colors">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                  style={{ background: `${v.color}18` }}>
                  {v.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-2">{v.name}</h3>
                <p className="text-xs leading-relaxed text-white/40 mb-3">{v.pain}</p>
                <p className="text-xs leading-relaxed font-medium" style={{ color: `${v.color}CC` }}>{v.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
            style={{ color: `${ACCENT}B3` }}>Why Kovil AI</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Managed AI Ops vs the alternatives</h2>
        </motion.div>

        <motion.div {...fade(0.08)} className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[520px]">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="px-6 py-4 text-left text-xs font-semibold text-white/40 w-1/2">Capability</th>
                <th className="px-4 py-4 text-center text-xs font-semibold" style={{ color: ACCENT }}>Kovil AI</th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-white/40">DIY / In-house</th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-white/40">General Agency</th>
              </tr>
            </thead>
            <tbody className="bg-[#111111]">
              {comparisonRows.map((row, i) => (
                <tr key={row.feature}
                  className={`border-b border-white/[0.04] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="px-6 py-3.5 text-xs text-white/55">{row.feature}</td>
                  <td className="px-4 py-3.5 text-center"><ComparisonCell value={row.kovil} /></td>
                  <td className="px-4 py-3.5 text-center"><ComparisonCell value={row.diy} /></td>
                  <td className="px-4 py-3.5 text-center"><ComparisonCell value={row.agency} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display"
              style={{ color: `${ACCENT}B3` }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common questions</h2>
          </motion.div>

          <div className="divide-y divide-white/[0.06]">
            {faqs.map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.05)}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer">
                  <span className="font-display font-semibold text-white text-sm">{item.q}</span>
                  {openFaq === i
                    ? <ChevronUp   size={16} style={{ color: ACCENT }} className="shrink-0" />
                    : <ChevronDown size={16} className="text-white/30 shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="pb-5">
                    <p className="text-sm leading-relaxed text-white/50">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: ACCENT }} />
          </div>
          <BarChart3 size={24} className="relative mx-auto mb-4" style={{ color: ACCENT }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Stop hoping your AI is still working.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a free 30-minute AI audit. We&apos;ll review your current stack, identify the top 3 health risks, and
            give you a clear picture of what&apos;s drifting, costing too much, or at compliance risk — no commitment required.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display cursor-pointer"
              style={{ background: ACCENT, boxShadow: `0 8px 32px ${ACCENT}4D` }}>
              Book your free AI audit <ArrowRight size={16} />
            </button>
            <Link href="/hire"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors">
              Explore hire services
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            Free audit · No commitment · 48-hour turnaround on audit findings
          </p>
        </motion.div>
      </section>

    </div>
  )
}

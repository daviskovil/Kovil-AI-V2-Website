'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, MessageSquare, ChevronRight, Shield } from 'lucide-react'
import { openCalendly } from '../../lib/calendly'

// ── Shared helpers ────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── NodeBox ───────────────────────────────────────────────────────────────────

function NodeBox({ cx, cy, bg, border, children }: {
  cx: number; cy: number; bg: string; border?: string; children: React.ReactNode
}) {
  const size = 56
  return (
    <g>
      <rect
        x={cx - size / 2} y={cy - size / 2}
        width={size} height={size} rx={12}
        fill={bg}
        stroke={border ?? 'transparent'}
        strokeWidth={border ? 1.5 : 0}
      />
      {children}
    </g>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-fraud" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function NodeLabel({ cx, cy, text, sub }: { cx: number; cy: number; text: string; sub?: string }) {
  return (
    <g>
      <text x={cx} y={cy + 38} textAnchor="middle" fontSize="9.5" fill="#A8A29E" fontFamily="Inter, sans-serif" fontWeight="500">
        {text}
      </text>
      {sub && (
        <text x={cx} y={cy + 50} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">
          {sub}
        </text>
      )}
    </g>
  )
}

// Transaction Event — indigo
function TxnIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 12} y={cy - 8} width={24} height={16} rx={4} fill="white" opacity={0.9} />
      <line x1={cx - 8} y1={cy - 2} x2={cx - 2} y2={cy - 2} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 3} x2={cx + 4} y2={cy + 3} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Feature Extraction — orange
function FeatureIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <line x1={cx - 10} y1={cy - 8} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 2} x2={cx + 6} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 4} x2={cx + 2} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 10} x2={cx + 8} y2={cy + 10} stroke="white" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// ML Model — purple
function MLIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <circle cx={cx} cy={cy} r="10" stroke="white" strokeWidth="2" fill="none" opacity={0.9} />
      <circle cx={cx - 7} cy={cy - 5} r="2.5" fill="white" />
      <circle cx={cx + 7} cy={cy - 5} r="2.5" fill="white" />
      <circle cx={cx} cy={cy + 7} r="2.5" fill="white" />
      <line x1={cx - 7} y1={cy - 5} x2={cx} y2={cy + 7} stroke="white" strokeWidth="1.5" opacity={0.7} />
      <line x1={cx + 7} y1={cy - 5} x2={cx} y2={cy + 7} stroke="white" strokeWidth="1.5" opacity={0.7} />
      <line x1={cx - 7} y1={cy - 5} x2={cx + 7} y2={cy - 5} stroke="white" strokeWidth="1.5" opacity={0.7} />
    </NodeBox>
  )
}

// Decision Gate — amber
function DecisionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F59E0B">
      <path d={`M${cx},${cy - 13} L${cx + 13},${cy} L${cx},${cy + 13} L${cx - 13},${cy} Z`}
        fill="white" opacity={0.9} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="#F59E0B" fontFamily="Inter, sans-serif">?</text>
    </NodeBox>
  )
}

// Block / Alert — red
function BlockIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EF4444">
      <circle cx={cx} cy={cy} r="12" stroke="white" strokeWidth="2.5" fill="none" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 7} x2={cx + 7} y2={cy + 7} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx + 7} y1={cy - 7} x2={cx - 7} y2={cy + 7} stroke="white" strokeWidth="3" strokeLinecap="round" />
    </NodeBox>
  )
}

// ── Hero diagram ──────────────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-fraud)'
  const nodes = [70, 185, 305, 420, 550, 660]
  const y = 100

  return (
    <svg viewBox="0 0 730 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />
      <path d={`M${nodes[0] + 28},${y} H${nodes[1] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[1] + 28},${y} H${nodes[2] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[2] + 28},${y} H${nodes[3] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[3] + 28},${y} H${nodes[4] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[4] + 28},${y} H${nodes[5] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      <TxnIcon cx={nodes[0]} cy={y} />
      <NodeLabel cx={nodes[0]} cy={y} text="Transaction" sub="Kafka / Webhook" />

      <FeatureIcon cx={nodes[1]} cy={y} />
      <NodeLabel cx={nodes[1]} cy={y} text="Feature Eng." sub="Velocity + context" />

      <MLIcon cx={nodes[2]} cy={y} />
      <NodeLabel cx={nodes[2]} cy={y} text="ML Model" sub="Risk score 0–100" />

      <DecisionIcon cx={nodes[3]} cy={y} />
      <NodeLabel cx={nodes[3]} cy={y} text="Decision Gate" sub="Threshold rules" />

      <BlockIcon cx={nodes[4]} cy={y} />
      <NodeLabel cx={nodes[4]} cy={y} text="Block / Review" sub="Hard / soft stop" />

      <NodeBox cx={nodes[5]} cy={y} bg="#22C55E">
        <polyline points={`${nodes[5] - 9},${y} ${nodes[5] - 3},${y + 6} ${nodes[5] + 9},${y - 8}`}
          fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </NodeBox>
      <NodeLabel cx={nodes[5]} cy={y} text="Approve" sub="Log + continue" />

      {nodes.map((x, i) => (
        <g key={i}>
          <circle cx={x + 18} cy={y - 20} r={8} fill="#FF4F00" />
          <text x={x + 18} y={y - 16} textAnchor="middle" fill="white" fontSize="6.5" fontWeight="700" fontFamily="Inter, sans-serif">{i + 1}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Page data ─────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '<80ms', label: 'decision latency', sub: 'real-time scoring' },
  { stat: '0.1%', label: 'false positive rate', sub: 'precision-tuned model' },
  { stat: '94%', label: 'fraud detection rate', sub: 'on validation set' },
  { stat: '100%', label: 'transactions logged', sub: 'full audit trail' },
]

const steps = [
  {
    num: 1,
    tool: 'Transaction Event (Kafka / Webhook)',
    toolColor: '#6366F1',
    title: 'Every transaction event triggers the fraud pipeline in real time',
    detail: 'The fraud detection pipeline is triggered by a transaction event stream — either a Kafka topic (for high-volume payment processors) or a synchronous webhook (for lower-volume integrations). The event payload contains: transaction_id, user_id, amount, currency, merchant_id, merchant_category, device_fingerprint, IP address, geolocation, payment method type, and timestamp. The pipeline must return a decision within 80ms for card-present transactions.',
    tags: ['Kafka consumer', 'Webhook trigger', 'Sub-80ms SLA', 'Real-time'],
  },
  {
    num: 2,
    tool: 'Feature Engineering (Python / Redis)',
    toolColor: '#FF4F00',
    title: '50+ behavioural features computed from transaction context',
    detail: 'A Python feature engineering layer queries Redis for the user\'s transaction history and computes 50+ features in real time: transaction velocity (txns in last 1/5/15/60 minutes), average transaction amount deviation, new merchant flag, new device flag, impossible travel score (distance / time since last transaction), time-of-day anomaly score, and merchant risk category. Historical features are precomputed and cached in Redis with a 24-hour TTL.',
    tags: ['Python feature engineering', 'Redis cache', 'Velocity features', 'Geolocation scoring'],
  },
  {
    num: 3,
    tool: 'ML Fraud Model (XGBoost / LightGBM)',
    toolColor: '#8B5CF6',
    title: 'Gradient boosting model scores the transaction 0–100',
    detail: 'The feature vector is passed to a trained XGBoost or LightGBM classifier. The model returns a fraud_probability score between 0 and 1, a risk_tier (low / medium / high), and the top 5 feature importances for that specific prediction (used for analyst explainability). The model is retrained weekly on new confirmed fraud labels. Model serving is via FastAPI with model versioning — multiple model versions can run simultaneously for A/B testing.',
    tags: ['XGBoost', 'LightGBM', 'FastAPI serving', 'SHAP explainability'],
  },
  {
    num: 4,
    tool: 'Decision Engine (Configurable Rules)',
    toolColor: '#F59E0B',
    title: 'Score combined with business rules to produce a final decision',
    detail: 'The ML score is passed to a configurable decision engine that applies business-specific rules on top of the raw probability. Rules include: hard blocks (score > 0.95 always blocks), velocity limits (>5 transactions in 60 seconds always reviews), whitelist (known good merchant IDs bypass), blacklist (known bad user IDs always block), and amount-based thresholds. Rules are stored as admin-configurable YAML — no engineering change needed to add or modify a rule.',
    tags: ['Rule engine', 'Configurable thresholds', 'Whitelist / blacklist', 'YAML config'],
  },
  {
    num: 5,
    tool: 'Block / Review / Approve Action',
    toolColor: '#EF4444',
    title: 'Transaction blocked, sent for 3DS/OTP review, or approved automatically',
    detail: 'Based on the decision engine output, the pipeline takes one of three actions: BLOCK — the transaction is declined and the user receives an immediate decline notification with a support contact. REVIEW — the transaction is held and the user is prompted for 3D Secure or OTP verification (for borderline risk). APPROVE — the transaction passes and the payment is authorised. Fraud analyst queue items are enriched with the full feature vector, ML score, and rule trigger for efficient manual review.',
    tags: ['Transaction block', '3DS / OTP challenge', 'Fraud analyst queue', 'Decline notification'],
  },
  {
    num: 6,
    tool: 'Alert & Case Management',
    toolColor: '#EF4444',
    title: 'High-risk cases escalated with full context for analyst review',
    detail: 'All blocked and reviewed transactions are written to a fraud case management system. Analysts see: the full feature vector, ML score breakdown with SHAP values, rule trigger details, the user\'s full transaction history, and recommended actions. Real-time Slack alerts fire for high-value blocked transactions (configurable threshold). The case management system tracks resolution outcomes — which are fed back as labels for model retraining.',
    tags: ['Case management', 'SHAP explainability', 'Slack alerts', 'Retraining feedback loop'],
  },
  {
    num: 7,
    tool: 'Audit Log & Regulatory Reporting',
    toolColor: '#6366F1',
    title: 'Every decision logged immutably for regulatory compliance',
    detail: 'Every transaction — approved, blocked, or reviewed — is written to an immutable audit log with: transaction ID, timestamp, feature vector snapshot, model version, fraud score, decision engine output, rule triggers, and final action taken. The log supports SAR (Suspicious Activity Report) generation, PCI-DSS audit requirements, and scheme (Visa/Mastercard) fraud reporting. Retention is configurable per jurisdiction (typically 5–7 years).',
    tags: ['Immutable audit log', 'SAR generation', 'PCI-DSS compliance', 'Scheme reporting'],
  },
]

const techStack = [
  { name: 'XGBoost / LightGBM', role: 'ML fraud scoring', color: '#8B5CF6', desc: 'Gradient boosting classifier trained on confirmed fraud labels. Returns a 0–100 fraud probability score with SHAP feature importances for explainability.' },
  { name: 'Python / FastAPI', role: 'Feature engineering & model serving', color: '#3776AB', desc: 'Computes 50+ real-time behavioural features and serves the ML model via a low-latency FastAPI endpoint with sub-80ms P99 response time.' },
  { name: 'Redis', role: 'Real-time feature cache', color: '#DC382D', desc: 'Caches user transaction velocity, device history, and merchant interaction features with TTL expiry for sub-millisecond feature lookups.' },
  { name: 'Kafka', role: 'Transaction event stream', color: '#231F20', desc: 'High-throughput transaction event pipeline for payment processors. Supports millions of transactions per day with guaranteed delivery and replay.' },
  { name: 'n8n', role: 'Orchestration & alerting', color: '#F65B2B', desc: 'Manages the non-real-time parts: analyst queue enrichment, Slack fraud alerts, case management updates, and daily reporting.' },
  { name: 'PostgreSQL', role: 'Audit log & case management', color: '#336791', desc: 'Immutable fraud decision log with full feature vector snapshots. Supports SAR generation, regulatory reporting, and model retraining data pipelines.' },
]

const faq = [
  {
    q: 'How is the ML model trained for our specific transaction patterns?',
    a: 'During the build sprint, we train the initial model on your historical confirmed fraud labels (minimum 6 months of data recommended). We use your transaction data to engineer features relevant to your specific product — card payments, ACH, crypto, or lending. The model is then validated on a holdout set and calibrated to your target false positive rate before deployment.',
  },
  {
    q: 'What latency can we expect at production scale?',
    a: 'The end-to-end pipeline (feature engineering + model inference + decision engine) is designed for sub-80ms P99 latency for synchronous integrations. Feature caching in Redis is the primary latency lever — cache hit rates above 95% are typical for active users. For Kafka-based integrations with async decision delivery, latency targets are relaxed to sub-500ms.',
  },
  {
    q: 'How do we prevent the model from blocking legitimate customers?',
    a: 'False positive rate is the primary optimisation target during calibration. We tune the decision threshold to your specified false positive budget (typically 0.1–0.5% of legitimate transactions). The review queue (soft block + 3DS/OTP) handles borderline cases without hard declining them. Post-launch, we monitor false positive rates weekly and retune as needed — included in the post-launch support period.',
  },
  {
    q: 'Can the decision rules be updated without code deployments?',
    a: 'Yes. Business rules are stored in a YAML configuration file. Adding, modifying, or removing rules (thresholds, whitelists, blacklists, velocity limits) requires only a config update and pipeline restart — no code deployment. We document every configurable rule parameter and provide a rules management runbook during handover.',
  },
  {
    q: 'Does this meet PCI-DSS and financial regulator requirements?',
    a: 'The audit log captures all data required for PCI-DSS fraud monitoring compliance: transaction IDs, timestamps, model scores, decision rationale, and analyst actions. The system supports SAR generation for AML reporting. Specific regulatory requirements vary by jurisdiction and licence type — we review these during scoping and configure the logging schema accordingly.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function RealTimeFraudPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Real-Time Fraud Detection</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: '#34D399', background: '#34D39918', border: '1px solid #34D39928' }}>
                FinTech
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Real-Time Fraud<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Detection</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Every transaction is scored in under 80ms by an XGBoost model trained on your fraud patterns. A configurable rule engine applies business-specific blocks and reviews — with full SHAP explainability, a fraud analyst queue, and an immutable audit log for regulatory compliance.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold text-[#FF4F00]">{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['XGBoost', 'Python', 'FastAPI', 'Redis', 'Kafka'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF4F00] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display shadow-[0_4px_24px_rgba(255,79,0,0.30)] cursor-pointer"
              >
                Build this for my FinTech <ArrowRight size={15} />
              </button>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            {/* Build time pill */}
            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} className="text-[#FF4F00]/70" />
              Typical build: <span className="text-white/55 font-medium">5–7 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#EF4444] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live pipeline — &lt;80ms per transaction</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Transaction event' },
                { label: 'Decision latency', value: '<80ms P99' },
                { label: 'Model', value: 'XGBoost + rules' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-[10px] text-white/30 font-display uppercase tracking-wide">{item.label}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/65">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT THIS SOLVES ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why rule-based fraud systems fail at scale</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Shield, title: 'Static rules can\'t keep up with fraud patterns', desc: 'Fraudsters adapt faster than manual rule updates. A rule written for last month\'s fraud pattern misses this month\'s attack. Without an ML layer, your false negative rate climbs steadily as fraud evolves while your team plays catch-up.' },
            { icon: Clock, title: 'High false positives destroy customer experience', desc: 'Blunt velocity rules block legitimate customers travelling, buying in new categories, or making large purchases. Every false positive is a customer service call, a churned user, or an unrecovered transaction — all preventable costs.' },
            { icon: MessageSquare, title: 'No explainability for analyst review', desc: 'When a transaction is blocked, analysts can\'t see why without an explainability layer. This slows review queue resolution and makes it impossible to identify whether a block was a model error or a genuine fraud catch.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4F00]/10 border border-[#FF4F00]/20">
                  <Icon size={18} className="text-[#FF4F00]" />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── STEP BY STEP ────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual pipeline Kovil AI builds and deploys — not a diagram. Here's what runs inside every node.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.06)}
                className="group relative grid gap-6 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 transition-colors hover:border-white/[0.12] sm:grid-cols-[auto_1fr]">
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ background: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide text-white/60">
                    {step.tool}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50 mb-4">{step.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-[2.3rem] top-full h-4 w-px bg-white/[0.06]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">Tech stack</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the pipeline</h2>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tool, i) => (
            <motion.div key={tool.name} {...fade(i * 0.05)}
              className="rounded-2xl border border-white/[0.07] bg-[#111111] p-5 hover:border-white/[0.12] transition-colors">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="h-3 w-3 rounded-full" style={{ background: tool.color }} />
                <span className="font-display text-xs font-semibold text-white/80">{tool.name}</span>
              </div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider font-display" style={{ color: tool.color }}>
                {tool.role}
              </p>
              <p className="text-xs leading-relaxed text-white/40">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT KOVIL BUILDS ───────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fade(0)}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 5–7 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, trains, and deploys this pipeline end-to-end. You get a production fraud system with trained model, configurable rules, and analyst tooling — fully managed delivery.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'XGBoost / LightGBM model trained on your fraud history',
                  '50+ feature engineering pipeline with Redis velocity caching',
                  'Configurable decision engine with YAML rule management',
                  'FastAPI model serving endpoint with sub-80ms P99 latency',
                  'Kafka or webhook transaction event integration',
                  'Fraud analyst queue with SHAP explainability',
                  'Real-time Slack alerts for high-value fraud events',
                  'Immutable audit log with SAR generation support',
                  'Weekly model retraining pipeline with A/B testing support',
                  '2-week handover: runbook, model docs, support access',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle size={15} className="text-[#FF4F00] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">Sprint timeline</span>
                  <span className="rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/25 px-3 py-1 text-[11px] font-semibold text-[#FF4F00] font-display">
                    5–7 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Data access & scoping', items: ['Historical transaction data access', 'Fraud label extraction', 'Feature schema design'] },
                  { week: 'Weeks 2–3', title: 'Feature engineering & model training', items: ['50+ feature pipeline build', 'Model training & validation', 'SHAP explainability integration'] },
                  { week: 'Weeks 4–5', title: 'Inference service & rule engine', items: ['FastAPI model serving setup', 'Redis velocity cache', 'Decision engine YAML config'] },
                  { week: 'Weeks 6–7', title: 'Integration, testing & handover', items: ['Payment system integration', 'Load testing & latency validation', 'Runbook, model docs & handover'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-5 ${i < 3 ? 'border-b border-white/[0.05] mb-5' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#FF4F00]">{wk.week}</span>
                      <span className="text-sm font-semibold text-white">{wk.title}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {wk.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <div className="h-1 w-1 rounded-full bg-[#FF4F00]/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: '#34D399B3' }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {faq.map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.07)} className="py-6">
                <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">{item.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full bg-[#FF4F00] opacity-[0.07] blur-[80px]" />
          </div>
          <Shield size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to ship real-time fraud detection?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the fraud pipeline for your transaction volumes, fraud patterns, and regulatory requirements — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(255,79,0,0.30)] hover:shadow-[0_8px_40px_rgba(255,79,0,0.45)] transition-all hover:opacity-95 font-display cursor-pointer"
            >
              Book a discovery call <ArrowRight size={16} />
            </button>
            <Link
              href="/ai-workflow-automation-library"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other workflows
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            Typical sprint: 5–7 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

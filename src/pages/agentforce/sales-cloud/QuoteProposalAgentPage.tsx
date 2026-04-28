'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, FileText } from 'lucide-react'
import { openCalendly } from '../../../lib/calendly'

const SF_BLUE = '#00A1E0'

// ── SVG Node helpers ──────────────────────────────────────────────────────────

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

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-quote" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

// Opportunity trigger node (orange)
function OppIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">OPP</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Stage</text>
    </NodeBox>
  )
}

// CPQ node (SF Blue)
function CPQIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CPQ</text>
    </NodeBox>
  )
}

// Atlas Reasoning node (dark)
function AtlasIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
    </NodeBox>
  )
}

// Prompt Builder node (green)
function PromptBuilderIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <rect x={cx - 10} y={cy - 11} width={20} height={3} rx={1.5} fill="white" opacity={0.85} />
      <rect x={cx - 10} y={cy - 5} width={15} height={3} rx={1.5} fill="white" opacity={0.85} />
      <rect x={cx - 10} y={cy + 1} width={18} height={3} rx={1.5} fill="white" opacity={0.85} />
      <rect x={cx - 10} y={cy + 7} width={12} height={3} rx={1.5} fill="white" opacity={0.85} />
    </NodeBox>
  )
}

// Approval node (amber)
function ApprovalIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <path
        d={`M${cx},${cy - 13} L${cx + 13},${cy} L${cx},${cy + 13} L${cx - 13},${cy} Z`}
        fill="none" stroke="white" strokeWidth="2"
      />
      <path
        d={`M${cx - 5},${cy} L${cx - 1},${cy + 4} L${cx + 6},${cy - 5}`}
        fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />
    </NodeBox>
  )
}

// DocuSign node (purple)
function DocuSignIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <text x={cx} y={cy - 3} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">DS</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="8" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Sign</text>
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-quote)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Main pipeline arrows */}
      <path d="M56,110 H104" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M188,110 H236" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M320,110 H368" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M452,110 H500" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M584,110 H632" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Approval branch: approved → DocuSign */}
      <path d="M716,82 C716,60 760,60 760,82" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Approval rejection dashed arrow back to PromptBuilder */}
      <path d="M716,138 C716,190 406,190 406,138" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <OppIcon cx={28} cy={110} />
      <NodeLabel cx={28} cy={110} text="Opp Stage" sub="Proposal" />

      <CPQIcon cx={160} cy={110} />
      <NodeLabel cx={160} cy={110} text="CPQ Pull" sub="Pricing rules" />

      <AtlasIcon cx={292} cy={110} />
      <NodeLabel cx={292} cy={110} text="Atlas" sub="Structure" />

      <PromptBuilderIcon cx={424} cy={110} />
      <NodeLabel cx={424} cy={110} text="Prompt Builder" sub="Draft proposal" />

      <ApprovalIcon cx={556} cy={110} />
      <NodeLabel cx={556} cy={110} text="Approval" sub="Route & sign-off" />

      {/* DocuSign — approved path */}
      <DocuSignIcon cx={688} cy={60} />
      <NodeLabel cx={688} cy={60} text="DocuSign" sub="e-Signature" />

      {/* Edit Request — rejected path */}
      <NodeBox cx={688} cy={165} bg="#374151" border="#6B7280">
        <text x={688} y={169} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">REVISE</text>
      </NodeBox>
      <NodeLabel cx={688} cy={165} text="Edit Request" sub="Re-draft" />

      {/* Step badges */}
      {([
        [28, 110, '1'], [160, 110, '2'], [292, 110, '3'],
        [424, 110, '4'], [556, 110, '5'], [688, 60, '6a'], [688, 165, '6b'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Labels on branch paths */}
      <text x={730} y={55} textAnchor="middle" fontSize="8" fill="#22C55E" fontFamily="Inter, sans-serif">approved ✓</text>
      <text x={620} y={200} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">rejected ↩ re-draft</text>
    </svg>
  )
}

// ── Step data ──────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Opportunity Trigger',
    toolColor: '#FF4F00',
    title: 'Agent fires when Opportunity enters Proposal/Quote stage',
    detail: 'Configured as an Agentforce Topic mapped to the Opportunity stage field. When a rep moves a deal to the Proposal or Quote stage, the agent fires automatically — no form to fill, no template to find, no back-and-forth with ops. The trigger captures full Opportunity context: products of interest, deal size, prospect company, contact details, any notes logged on the record, and the rep\'s meeting notes from linked Activities. Everything the proposal needs is assembled before the first action runs.',
    tags: ['Stage-based Trigger', 'Opportunity Object', 'Context Capture', 'Meeting Notes Ingestion', 'Agent Builder'],
  },
  {
    num: 2,
    tool: 'Salesforce CPQ',
    toolColor: SF_BLUE,
    title: 'CPQ fetches the correct product configuration and pricing automatically',
    detail: 'The agent queries Salesforce CPQ using the products and quantities logged on the Opportunity. CPQ applies your configured pricing rules: volume discounts, bundle pricing, contractual rates for existing customers, and promotional pricing windows. No rep involvement — CPQ enforces pricing policy automatically. The agent receives configured quote line items with correct pricing, discounts, and terms. Custom pricing exceptions outside standard CPQ rules are flagged for rep review before proceeding, preventing non-compliant quotes from reaching prospects.',
    tags: ['Salesforce CPQ', 'Pricing Rules', 'Volume Discounts', 'Bundle Configuration', 'Exception Flagging', 'Price Book'],
  },
  {
    num: 3,
    tool: 'Atlas Reasoning Engine',
    toolColor: '#0F172A',
    title: 'Atlas configures the proposal structure for this specific deal',
    detail: 'The Atlas Reasoning Engine reasons about proposal structure using full deal context: industry vertical (which case studies and ROI data to include), deal size (executive summary depth, risk section requirements), and product configuration (which features to emphasise). For enterprise deals above a configured threshold, Atlas selects an extended format including implementation timeline, success metrics framework, and security overview. For SMB deals, it selects a concise format focused on ROI and time-to-value. Proposal structure is configurable per vertical and deal tier during implementation.',
    tags: ['Atlas Reasoning Engine', 'Proposal Structure Logic', 'Vertical Personalisation', 'Deal Tier Rules', 'Section Selection'],
  },
  {
    num: 4,
    tool: 'Prompt Builder',
    toolColor: '#10A37F',
    title: 'Prompt Builder drafts the full proposal grounded in live CRM and CPQ data',
    detail: 'Prompt Builder generates the complete proposal document with all sections populated from live data: executive summary tailored to the prospect\'s stated pain points from CRM notes, product section using CPQ line items, pricing summary with approved discounts applied, relevant case studies matched to the prospect\'s industry, implementation timeline using your standard delivery model, and terms grounded in your MSA template. Every section is generated fresh — not filled from a static template. The Einstein Trust Layer ensures no sensitive pricing data leaks to external AI services during generation.',
    tags: ['Prompt Builder', 'Live Data Grounding', 'CPQ Line Items', 'Case Study Matching', 'Einstein Trust Layer', 'MSA Terms'],
  },
  {
    num: 5,
    tool: 'Approval Process',
    toolColor: '#D97706',
    title: 'Proposal routes through configured approval chain before leaving Salesforce',
    detail: 'The drafted proposal triggers Salesforce\'s native Approval Process. Routing logic is configured per deal tier: deals within standard pricing auto-approve after manager spot-check with a 1-hour SLA, deals with discounts above threshold require VP approval, and strategic deals above enterprise threshold require C-suite sign-off. Approvers see a side-by-side view of the draft proposal and the Opportunity record. Approvers can reject with annotated comments which feed back into a revision loop — the agent re-drafts the flagged sections rather than starting over.',
    tags: ['Salesforce Approval Process', 'Deal Tier Routing', 'SLA Enforcement', 'Annotated Rejection', 'Revision Loop', 'Compliance'],
  },
  {
    num: 6,
    tool: 'DocuSign',
    toolColor: '#8B5CF6',
    title: 'Approved proposal sent via DocuSign with e-signature ready for the prospect',
    detail: 'On approval, the agent triggers a DocuSign envelope with the finalised proposal attached. The prospect receives a personalised delivery email (generated by Prompt Builder, not a generic DocuSign notification) with the proposal and a direct e-signature link. Signing events feed back to Salesforce as Activity records — the Opportunity stage advances automatically to Closed Won when the prospect signs. If the proposal is not opened within 48 hours, the agent triggers a personalised follow-up sequence. Closed-won events automatically create the Order record in Salesforce.',
    tags: ['DocuSign Integration', 'e-Signature', 'Activity Logging', 'Automatic Stage Advance', 'Order Record Creation', 'Follow-up Automation'],
  },
]

// ── Tech stack ─────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Proposal configuration', color: SF_BLUE, desc: 'Reasons about proposal structure, section selection, and vertical personalisation based on deal context — so every proposal is structured for the specific opportunity.' },
  { name: 'Salesforce CPQ', role: 'Pricing + configuration', color: '#FF4F00', desc: 'Fetches correct product configuration, applies pricing rules, volume discounts, and bundle pricing automatically — enforcing pricing compliance on every quote.' },
  { name: 'Prompt Builder', role: 'Proposal drafting', color: '#10A37F', desc: 'Generates the full proposal document from live CRM and CPQ data. Every section is authored fresh — executive summary, product detail, case studies, timeline, terms.' },
  { name: 'DocuSign', role: 'e-Signature delivery', color: '#8B5CF6', desc: 'Delivers the approved proposal to the prospect with e-signature ready. Signing events feed back to Salesforce automatically, advancing the Opportunity stage.' },
  { name: 'Salesforce Approval Process', role: 'Compliance routing', color: '#D97706', desc: 'Routes proposals through your configured approval hierarchy before they leave Salesforce. Deal-tier rules enforce the right sign-off level for every deal size.' },
  { name: 'Einstein Trust Layer', role: 'Data security', color: '#0F172A', desc: 'Prevents sensitive pricing and PII from leaking to external LLMs. Masks critical data fields, blocks prompt injection, and logs every agent action for compliance audit.' },
  { name: 'Salesforce Flow', role: 'Stage automation', color: '#6366F1', desc: 'Automates Opportunity stage advancement on proposal approval and on DocuSign completion. Creates Order records on Closed Won without rep intervention.' },
]

// ── Outcomes ───────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '< 4 hrs', label: 'quote turnaround', sub: 'vs days manually' },
  { stat: '98%', label: 'pricing accuracy', sub: 'CPQ enforced' },
  { stat: '100%', label: 'approval compliance', sub: 'no exceptions' },
  { stat: '45 min', label: 'rep time saved', sub: 'per proposal' },
]

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function QuoteProposalAgentPage() {
  const accentColor = SF_BLUE

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/agentforce" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> Agentforce
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Sales Cloud</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Quote &amp; Proposal Agent</span>
        </nav>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: accentColor, background: `${accentColor}18`, border: `1px solid ${accentColor}28` }}>
                Sales Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,52px)] font-bold leading-[1.06] tracking-tight text-white">
              Quote &amp; Proposal Agent —<br />
              <span style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}, #38BDF8)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                CPQ, Proposals &amp; Approvals on Autopilot
              </span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Fires when an Opportunity reaches proposal stage. Pulls the right product configuration from CPQ, drafts a personalised proposal grounded in live CRM data, routes through approval, and delivers to the prospect — without the rep touching a template.
            </motion.p>

            {/* Outcome stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Atlas Reasoning Engine', 'Salesforce CPQ', 'Prompt Builder', 'DocuSign', 'Approval Process', 'Einstein Trust Layer'].map(t => (
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
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display cursor-pointer"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Automate your quote process <ArrowRight size={15} />
              </button>
              <Link
                href="/agentforce"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all agents
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${accentColor}B3` }} />
              Typical build: <span className="text-white/55 font-medium">3-week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live agent — fires on every Proposal stage move</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Quote turnaround', value: '< 4 hours' },
                { label: 'Pricing accuracy', value: 'CPQ enforced' },
                { label: 'Approval', value: '100% compliant' },
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

      {/* ── THE PROBLEM ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why proposal cycles drag on — and kill deals</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { title: 'Reps spend 45+ minutes building each proposal from scratch', desc: 'Finding the right template, pulling in the correct pricing, choosing which case studies to include, and formatting the document — all before writing a single personalised line. Multiply by deal volume and your best reps are spending a full day a week on admin.' },
            { title: 'Pricing errors create rework and erode trust', desc: 'Manually entered pricing bypasses CPQ rules. Volume discounts get forgotten. Bundle pricing gets miscalculated. The prospect receives an incorrect quote, the rep has to apologise and resend, and the deal clock restarts. Pricing errors kill momentum at the most critical stage.' },
            { title: 'Approval bottlenecks add days to every deal cycle', desc: 'Proposals sitting in manager inboxes for review. Chasing approvers via Slack. Re-sending with corrections after rejection. Every day a proposal sits un-approved is a day your competitor can close. The approval process should take hours, not days.' },
          ].map((item, i) => (
            <motion.div key={item.title} {...fade(i * 0.08)}
              className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{ background: `${accentColor}1A`, borderColor: `${accentColor}33` }}>
                <FileText size={18} style={{ color: accentColor }} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual Agentforce workflow Kovil AI builds and deploys — not a demo. Here is what runs inside every step.
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

      {/* ── TECH STACK ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>Tech stack</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the workflow</h2>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── WHAT KOVIL BUILDS ─────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fade(0)}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3-week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests, and deploys this agent end-to-end. You do not touch CPQ or DocuSign configuration until the full workflow is live and generating compliant proposals automatically.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Agentforce Topic configured with Opportunity stage trigger',
                  'CPQ query logic for product configuration and pricing rules',
                  'Atlas proposal structure logic by vertical and deal tier',
                  'Prompt Builder templates for all proposal sections',
                  'Salesforce Approval Process with deal-tier routing rules',
                  'DocuSign integration with personalised delivery email',
                  'Automatic stage advancement on prospect signature',
                  'Order record creation on Closed Won',
                  'Follow-up sequence for unopened proposals',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle size={15} style={{ color: accentColor }} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">Sprint timeline</span>
                  <span className="rounded-full px-3 py-1 text-[11px] font-semibold font-display"
                    style={{ background: `${accentColor}1A`, border: `1px solid ${accentColor}40`, color: accentColor }}>
                    3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Trigger + CPQ', items: ['Opportunity stage trigger + CPQ product query + pricing rule integration'] },
                  { week: 'Week 2', title: 'Draft + approve', items: ['Prompt Builder proposal templates + Approval Process configuration + deal-tier routing'] },
                  { week: 'Week 3', title: 'DocuSign + deploy', items: ['e-Signature integration + stage automation + Order record creation + production deployment'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 2 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>{wk.week}</span>
                      <span className="text-sm font-semibold text-white">{wk.title}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {wk.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <div className="h-1 w-1 rounded-full" style={{ background: `${accentColor}80` }} />
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

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {[
              {
                q: 'Do we need Salesforce CPQ already set up?',
                a: 'Yes — the agent pulls product and pricing data from an existing CPQ configuration. If you do not have CPQ, we offer a separate CPQ setup engagement before the agent sprint. If you have CPQ but it needs cleanup (outdated pricing rules, missing products), we do a CPQ audit and tidy in Week 1 before wiring the agent to it.',
              },
              {
                q: 'Can it handle custom pricing exceptions?',
                a: 'CPQ enforces your configured pricing rules automatically for standard deals. Custom pricing exceptions — bespoke enterprise deals outside CPQ rules — are flagged for rep input before the agent proceeds. The rep enters the agreed custom pricing, and the agent takes it from there for the rest of the proposal workflow. You control which deal types require human pricing sign-off.',
              },
              {
                q: 'How does the approval process work for complex orgs with multiple approval tiers?',
                a: "Salesforce's native Approval Process supports multi-tier, parallel, and sequential approval chains. We configure approval routing to match your exact sign-off hierarchy during implementation. Manager approvals for standard deals can be SLA-enforced (auto-approve after X hours if no action is taken). Strategic deal approvals include a full side-by-side review view. Annotated rejections feed directly into the agent's revision loop — the agent re-drafts flagged sections without starting from scratch.",
              },
              {
                q: 'What happens if the prospect does not sign?',
                a: 'The agent monitors DocuSign envelope status and fires follow-up actions on configurable timers: a personalised follow-up email at 48 hours drafted by Prompt Builder with deal-specific context, a rep alert at 5 days, and a manager alert at 10 days. If the proposal expires, the agent flags for rep review rather than re-sending automatically. All follow-up actions are logged as Activities on the Opportunity record.',
              },
            ].map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.07)} className="py-6">
                <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">{item.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <FileText size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Turn every proposal into a closed deal faster.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current quote-to-close process, identify the delays, and scope a 3-week fixed-price Agentforce implementation — CPQ to DocuSign, fully automated.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display cursor-pointer"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </button>
            <Link
              href="/agentforce"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other agents
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            3-week sprint · Fixed-price · Production-grade · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

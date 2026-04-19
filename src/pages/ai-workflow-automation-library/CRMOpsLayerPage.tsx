'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Database, Shield, Zap } from 'lucide-react'

// ── Brand-coloured node icons ─────────────────────────────────────────────────

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

function FormIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF6B35">
      <rect x={cx - 11} y={cy - 13} width={22} height={26} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 7} x2={cx + 7} y2={cy - 7} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy - 2} x2={cx + 7} y2={cy - 2} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 3} x2={cx + 3} y2={cy + 3} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx + 6} cy={cy + 6} r={4} fill="#FF6B35" />
      <line x1={cx + 4} y1={cy + 6} x2={cx + 8} y2={cy + 6} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx + 6} y1={cy + 4} x2={cx + 6} y2={cy + 8} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </NodeBox>
  )
}

function EmailIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4285F4">
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={2.5} fill="white" opacity={0.9} />
      <polyline points={`${cx - 13},${cy - 9} ${cx},${cy + 2} ${cx + 13},${cy - 9}`} fill="none" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round" />
    </NodeBox>
  )
}

function CSVIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CSV</text>
    </NodeBox>
  )
}

function APIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">API</text>
    </NodeBox>
  )
}

function N8nIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
    </NodeBox>
  )
}

function OpenAIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r="5" fill="white" />
      <circle cx={cx} cy={cy - 10} r="3" fill="white" />
      <circle cx={cx + 9} cy={cy + 5} r="3" fill="white" />
      <circle cx={cx - 9} cy={cy + 5} r="3" fill="white" />
    </NodeBox>
  )
}

function ValidatorIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <path d={`M${cx},${cy - 13} L${cx + 12},${cy - 6} L${cx + 12},${cy + 6} L${cx},${cy + 13} L${cx - 12},${cy + 6} L${cx - 12},${cy - 6} Z`}
        fill="none" stroke="white" strokeWidth="2" />
      <path d={`M${cx - 5},${cy} L${cx - 1},${cy + 4} L${cx + 6},${cy - 4}`}
        fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

function ClearbitIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CB</text>
    </NodeBox>
  )
}

function HubSpotIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF7A59">
      <circle cx={cx} cy={cy - 5} r="5" fill="white" opacity={0.9} />
      <circle cx={cx - 10} cy={cy + 6} r="4" fill="white" opacity={0.9} />
      <circle cx={cx + 10} cy={cy + 6} r="4" fill="white" opacity={0.9} />
      <line x1={cx} y1={cy} x2={cx - 8} y2={cy + 3} stroke="white" strokeWidth="2" opacity={0.9} />
      <line x1={cx} y1={cy} x2={cx + 8} y2={cy + 3} stroke="white" strokeWidth="2" opacity={0.9} />
    </NodeBox>
  )
}

function SlackIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4A154B">
      <line x1={cx - 7} y1={cy - 8} x2={cx - 4} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx + 3} y1={cy - 8} x2={cx + 6} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 3} x2={cx + 9} y2={cy - 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 9} y1={cy + 3} x2={cx + 10} y2={cy + 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-crm" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-crm)'

  return (
    <svg viewBox="0 0 780 240" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Fan-in: sources → n8n Parser */}
      {/* Form → n8n */}
      <path d="M66,55 C115,55 115,120 153,120" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Email → n8n */}
      <path d="M66,95 C110,95 110,120 153,120" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* CSV → n8n */}
      <path d="M66,145 C110,145 110,120 153,120" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* API → n8n */}
      <path d="M66,185 C115,185 115,120 153,120" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* n8n → GPT-4o */}
      <path d="M234,120 H295" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* GPT-4o → Validator */}
      <path d="M376,120 H437" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Validator → Clearbit */}
      <path d="M518,120 H574" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Clearbit → CRM */}
      <path d="M650,120 H705" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Validator → Slack (rejected branch — drops down) */}
      <path d="M465,148 L465,190 H705" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes — sources (fan-in left) */}
      <FormIcon cx={38} cy={55} />
      <NodeLabel cx={38} cy={55} text="Form" sub="Typeform/HS" />

      <EmailIcon cx={38} cy={95} />
      <NodeLabel cx={38} cy={95} text="Email" sub="Parsing inbox" />

      <CSVIcon cx={38} cy={145} />
      <NodeLabel cx={38} cy={145} text="CSV" sub="Bulk upload" />

      <APIIcon cx={38} cy={185} />
      <NodeLabel cx={38} cy={185} text="API" sub="Partner POST" />

      {/* Pipeline nodes */}
      <N8nIcon cx={193} cy={120} />
      <NodeLabel cx={193} cy={120} text="n8n Parser" sub="Normalise" />

      <OpenAIIcon cx={335} cy={120} />
      <NodeLabel cx={335} cy={120} text="GPT-4o" sub="Field map" />

      <ValidatorIcon cx={476} cy={120} />
      <NodeLabel cx={476} cy={120} text="Validator" sub="18 checks" />

      <ClearbitIcon cx={612} cy={120} />
      <NodeLabel cx={612} cy={120} text="Clearbit" sub="Enrich" />

      <HubSpotIcon cx={733} cy={120} />
      <NodeLabel cx={733} cy={120} text="CRM" sub="SF / HS" />

      {/* Slack branch (rejected) */}
      <SlackIcon cx={733} cy={190} />
      <NodeLabel cx={733} cy={190} text="Slack" sub="#crm-ops-log" />

      {/* Step badges */}
      {([
        [38, 55, '1a'], [38, 95, '1b'], [38, 145, '1c'], [38, 185, '1d'],
        [193, 120, '2'], [335, 120, '3'], [476, 120, '4'], [612, 120, '5'], [733, 120, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill="#A78BFA" />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Rejected label on dashed branch */}
      <text x={590} y={186} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">rejected ❌</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'n8n Trigger',
    toolColor: '#F65B2B',
    title: 'Inbound records captured from all four sources',
    detail: 'Inbound records arrive from four possible sources: web forms (Typeform/HubSpot forms), email forwarded to a dedicated parsing inbox, CSV bulk uploads dragged into a Slack channel, or API direct POST from partner systems. n8n captures all four via dedicated trigger nodes and routes them into a single normalisation pipeline. No source is missed — even poorly formatted CSVs with misaligned columns are accepted and queued for parsing.',
    tags: ['n8n Trigger Nodes', 'Typeform Webhook', 'Email Parsing', 'CSV Intake', 'REST API Trigger'],
  },
  {
    num: 2,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o parses raw records into strict CRM field schema',
    detail: 'GPT-4o receives the raw record and is given a strict JSON schema matching the target CRM field structure. It extracts and maps every field: company name to normalised format (full legal name — no Inc. or Ltd abbreviations), contact name to first/last split with proper capitalisation, phone to E.164 international format, industry to a standardised taxonomy of 24 approved categories, and deal stage to the correct CRM pipeline stage name. Output is always structured JSON, never free text.',
    tags: ['GPT-4o', 'JSON Schema', 'Field Extraction', 'E.164 Phone Format', 'Industry Taxonomy', 'Pipeline Stage Mapping'],
  },
  {
    num: 3,
    tool: 'Validation Engine',
    toolColor: '#D97706',
    title: '18 validation checks run against every parsed record',
    detail: 'A rule-based validator runs 18 checks against the parsed record: required fields present, email format valid including MX record check (not just regex), phone number dialable, company name not on blocklist, deal value within acceptable range, no duplicate contact email in CRM, and industry matching the approved taxonomy. Records failing critical checks (invalid email, duplicate) are rejected with a specific error code and routed to Slack for ops review. Records failing soft checks are flagged but allowed through.',
    tags: ['18-Point Validation', 'MX Record Check', 'Duplicate Detection', 'Hard vs Soft Flags', 'Error Codes', 'Blocklist Check'],
  },
  {
    num: 4,
    tool: 'Clearbit',
    toolColor: '#0F172A',
    title: 'Clearbit enriches every valid business email with 12+ firmographic data points',
    detail: 'For contacts with a valid business email, n8n calls the Clearbit Enrichment API to append firmographic data: company employee count, annual revenue estimate, tech stack (tools the company uses), LinkedIn URL, company description, and HQ location. Enrichment adds an average of 12 additional data points per contact — without any manual research. Contacts with personal email addresses (Gmail, Yahoo) skip enrichment and pass through with available data only.',
    tags: ['Clearbit Enrichment API', 'Firmographic Data', 'Tech Stack Detection', '12+ Fields Added', 'Auto-enrichment'],
  },
  {
    num: 5,
    tool: 'Salesforce / HubSpot',
    toolColor: '#FF7A59',
    title: 'Clean enriched record written to CRM — no duplicates, ever',
    detail: 'The clean, enriched record is pushed to the target CRM via API. Duplicate detection runs first: if a contact with the same email already exists, the record is UPDATED rather than creating a duplicate. New contacts are CREATED with all fields populated and properly mapped to the CRM field taxonomy. Deals are created in the correct pipeline stage with the correct owner assigned based on territory and industry rules configured during setup.',
    tags: ['Salesforce API', 'HubSpot API', 'Upsert Logic', 'Pipeline Stage Mapping', 'Owner Assignment', 'Zero Duplicates'],
  },
  {
    num: 6,
    tool: 'Slack',
    toolColor: '#4A154B',
    title: 'Slack audit trail with full pass/flag/reject visibility',
    detail: 'Every record processed is logged to a dedicated #crm-ops-log Slack channel with a status emoji: clean and written to CRM, written with a soft flag noting the missing field, or rejected with the specific reason. For rejections, the Slack message includes the specific validation failure and the raw data so the ops team can fix and resubmit. A weekly digest is posted every Monday: total records processed, pass rate, and top failure reasons for the week.',
    tags: ['Slack Webhook', '#crm-ops-log', 'Status Emojis', 'Rejection Detail', 'Weekly Digest', 'Resubmit Workflow'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Captures all four inbound sources, routes records through the normalisation pipeline, and manages all branch logic for pass/flag/reject paths.' },
  { name: 'GPT-4o', role: 'Field parser', color: '#10A37F', desc: 'Receives raw record and outputs structured JSON matching exact CRM field schema. Handles messy, inconsistent input formats from any source.' },
  { name: 'Clearbit', role: 'Data enrichment', color: '#0F172A', desc: 'Appends 12+ firmographic fields per contact via Enrichment API — employee count, revenue, tech stack, LinkedIn URL, HQ location.' },
  { name: 'Salesforce', role: 'CRM target', color: '#00A1E0', desc: 'Receives clean, validated, enriched records via API. Upsert logic prevents duplicates. Owner and pipeline stage assigned automatically.' },
  { name: 'HubSpot', role: 'CRM target', color: '#FF7A59', desc: 'Alternative CRM target. Same upsert logic, same field taxonomy mapping, same pipeline stage assignment via HubSpot API.' },
  { name: 'Slack', role: 'Audit + ops', color: '#4A154B', desc: 'Receives every record outcome with full context. Ops team can review rejections and resubmit corrected records from the channel.' },
  { name: 'Validation Engine', role: 'Custom rules (built by Kovil)', color: '#D97706', desc: '18-rule custom validator: MX record checks, duplicate detection, blocklist lookup, deal value range, industry taxonomy matching.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '5 hrs', label: 'saved/day', sub: 'vs. manual ops' },
  { stat: '18', label: 'validation checks', sub: 'per record' },
  { stat: '12+', label: 'enriched fields', sub: 'via Clearbit' },
  { stat: '< 30s', label: 'per record', sub: 'end-to-end' },
]

// ── Animation helper ──────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function CRMOpsLayerPage() {
  const industryColor = '#A78BFA'
  const accentColor = '#A78BFA'

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">CRM Ops Layer — Intelligent Data Hygiene</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              CRM Ops Layer —<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Intelligent Data Hygiene</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              AI agents parse messy inbound requests, enforce strict naming conventions, and ensure pristine data hygiene before information ever enters your enterprise Salesforce or HubSpot instance.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['GPT-4o', 'n8n', 'Clearbit', 'Salesforce', 'HubSpot', 'Slack', 'Validation Engine'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Clean your CRM pipeline <ArrowRight size={15} />
              </a>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${accentColor}B3` }} />
              Typical build: <span className="text-white/55 font-medium">3–4 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — runs on every inbound record</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Sources', value: '4 inbound types' },
                { label: 'Validation', value: '18 checks' },
                { label: 'Speed', value: '< 30s / record' },
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why CRM data goes bad at the source</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Database, title: 'Dirty data compounds faster than you can clean it', desc: 'One misspelled company name creates duplicate accounts. One non-standard phone format breaks your dialler. One wrong deal stage skews your entire pipeline forecast. Manual ops teams cannot keep up with inbound volume.' },
            { icon: Shield, title: 'No validation means garbage in, garbage out forever', desc: 'Without MX record checks, fake emails fill your nurture sequences. Without duplicate detection, the same contact gets three follow-up sequences. Without taxonomy enforcement, your reporting segments collapse.' },
            { icon: Zap, title: 'Enrichment takes hours of manual research per contact', desc: 'Your ops team spends 15 minutes per contact searching LinkedIn, Crunchbase, and company websites to fill in the firmographic fields your CRM needs for segmentation and scoring. At 50 records per day, that is 12+ hours of research.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{ background: `${accentColor}1A`, borderColor: `${accentColor}33` }}>
                  <Icon size={18} style={{ color: accentColor }} />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual workflow Kovil AI builds and deploys — not a diagram. Here is what runs inside every node.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.06)}
                className="group relative grid gap-6 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 transition-colors hover:border-white/[0.12] sm:grid-cols-[auto_1fr]">
                {/* Left: step number + tool */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ background: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide text-white/60">
                    {step.tool}
                  </span>
                </div>
                {/* Right: content */}
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

      {/* ── WHAT KOVIL BUILDS ───────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fade(0)}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You do not touch n8n until it is live and processing records cleanly.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'n8n trigger nodes for all four inbound source types',
                  'GPT-4o field parser prompt engineered to your CRM schema',
                  'Custom 18-point validation rule engine',
                  'Clearbit Enrichment API integration and field mapping',
                  'Salesforce or HubSpot upsert logic with duplicate prevention',
                  'Owner and pipeline stage assignment rules configured',
                  'Slack #crm-ops-log channel with weekly digest automation',
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
                    3–4 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Ingest + parser', items: ['n8n triggers for all 4 sources + GPT-4o field parser + JSON schema'] },
                  { week: 'Week 2', title: 'Validation + enrichment', items: ['18-point validation engine + Clearbit enrichment integration'] },
                  { week: 'Week 3–4', title: 'CRM write + deploy', items: ['Salesforce/HubSpot upsert + Slack audit trail + full deployment'] },
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

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <Database size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Clean your CRM pipeline.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We will scope the validation rules, CRM field schema, and Clearbit enrichment logic for your specific Salesforce or HubSpot setup — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </a>
            <Link
              href="/ai-workflow-automation-library"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other workflows
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            Typical sprint: 3–4 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

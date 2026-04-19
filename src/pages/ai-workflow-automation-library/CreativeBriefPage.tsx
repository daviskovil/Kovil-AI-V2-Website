'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, BarChart3, ChevronRight, Users, MessageSquare } from 'lucide-react'

// ── Brand-coloured node icons for the hero diagram ────────────────────────────

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

// Typeform "Tf"
function TypeformIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0099FF">
      <text x={cx} y={cy + 7} textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Tf</text>
    </NodeBox>
  )
}

// Notion "N"
function NotionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#191919" border="rgba(255,255,255,0.15)">
      <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">N</text>
    </NodeBox>
  )
}

// OpenAI / GPT-4o
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

// Slack
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

// Gmail
function GmailIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="white" border="#E5E0D8">
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={2} fill="none" stroke="#EA4335" strokeWidth="2" />
      <polyline points={`${cx - 13},${cy - 9} ${cx},${cy + 4} ${cx + 13},${cy - 9}`} fill="none" stroke="#EA4335" strokeWidth="2" strokeLinejoin="round" />
      <line x1={cx - 13} y1={cy + 9} x2={cx - 3} y2={cy} stroke="#4285F4" strokeWidth="2" />
      <line x1={cx + 13} y1={cy + 9} x2={cx + 3} y2={cy} stroke="#34A853" strokeWidth="2" />
    </NodeBox>
  )
}

// Arrow marker definition
function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-light" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

// Node label below each node
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

// ── Hero workflow diagram ──────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-light)'

  return (
    <svg viewBox="0 0 680 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Connection paths — linear horizontal flow */}
      <path d="M113,100 H179" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M243,100 H309" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M373,100 H439" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d="M503,100 H569" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <TypeformIcon cx={85} cy={100} />
      <NodeLabel cx={85} cy={100} text="Typeform" sub="Client intake" />

      <NotionIcon cx={215} cy={100} />
      <NodeLabel cx={215} cy={100} text="Notion" sub="Brand guidelines" />

      <OpenAIIcon cx={345} cy={100} />
      <NodeLabel cx={345} cy={100} text="GPT-4o" sub="Brief writer" />

      <SlackIcon cx={475} cy={100} />
      <NodeLabel cx={475} cy={100} text="Slack" sub="Approval gate" />

      <GmailIcon cx={605} cy={100} />
      <NodeLabel cx={605} cy={100} text="Gmail" sub="Brief delivery" />

      {/* Step number badges */}
      {[
        [85, 100, '1'], [215, 100, '2'], [345, 100, '3'], [475, 100, '4'], [605, 100, '5'],
      ].map(([x, y, n]) => (
        <g key={String(n)}>
          <circle cx={Number(x) + 20} cy={Number(y) - 20} r={9} fill="#A78BFA" />
          <text x={Number(x) + 20} y={Number(y) - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Typeform',
    toolColor: '#0099FF',
    title: 'Client submits the brief intake form',
    detail: 'A custom Typeform captures all the information GPT-4o needs: campaign objective, target audience, tone of voice, key message, deliverables, timeline, budget range, and any reference brands. The form is branded, mobile-friendly and takes 5–8 minutes to complete. On submission, a Typeform webhook fires a POST request to n8n instantly.',
    tags: ['Typeform', 'Webhook trigger', 'Custom form logic'],
  },
  {
    num: 2,
    tool: 'Notion API',
    toolColor: '#191919',
    title: "n8n fetches brand guidelines and past briefs from Notion",
    detail: "n8n makes an authenticated API call to Notion to retrieve the client's brand guidelines page and the last 3 approved briefs. This gives GPT-4o live context about the client's tone, visual identity, preferred language and historical brief structure — not a generic template.",
    tags: ['Notion API', 'Dynamic context retrieval', 'Past brief examples'],
  },
  {
    num: 3,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o writes a structured creative brief in seconds',
    detail: 'A carefully engineered prompt sends the Typeform submission + Notion context to GPT-4o. The model outputs a fully structured brief: Campaign Overview, Target Audience, Core Message, Tone & Voice, Deliverables (with specs), Creative Direction, Success Metrics, and a Timeline. Output is formatted in Markdown and returned as structured JSON.',
    tags: ['GPT-4o', 'Prompt engineering', 'Structured JSON output', 'Markdown formatting'],
  },
  {
    num: 4,
    tool: 'Slack Approval Gate',
    toolColor: '#4A154B',
    title: 'Account manager reviews and approves in Slack',
    detail: "The generated brief is posted to a private Slack channel (e.g. #brief-review) as a formatted message with the full brief content. Two action buttons — ✅ Approve and ✏️ Request Revision — are embedded using Slack's Block Kit interactive components. Clicking Approve triggers the next step automatically. Clicking Revise sends a DM asking for specific feedback.",
    tags: ['Slack Block Kit', 'Interactive buttons', 'Human-in-the-loop', 'Approval workflow'],
  },
  {
    num: 5,
    tool: 'Gmail + Notion',
    toolColor: '#EA4335',
    title: 'Approved brief is delivered and stored automatically',
    detail: "On approval, two things happen simultaneously: (1) Gmail API sends the formatted brief to the creative team leads via email with a clean HTML layout. (2) n8n creates a new Notion page in the client's project database, stores the approved brief, and tags it with campaign name and date. No manual filing.",
    tags: ['Gmail API', 'Notion API', 'Parallel output', 'Auto-archiving'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Typeform', role: 'Client intake', color: '#0099FF', desc: 'Custom intake form captures all brief requirements. Webhook triggers n8n on submission.' },
  { name: 'Notion API', role: 'Brand context source', color: '#191919', desc: "Fetches brand guidelines and past briefs to give GPT-4o real context rather than a generic prompt." },
  { name: 'GPT-4o (OpenAI)', role: 'Brief generator', color: '#10A37F', desc: 'Writes a fully structured brief in under 30 seconds using brand context + form data. Temperature set to 0.4 for creative but consistent output.' },
  { name: 'Slack Block Kit', role: 'Approval gate', color: '#4A154B', desc: 'Interactive message with Approve/Revise buttons. Approval triggers delivery. Revision sends feedback DM.' },
  { name: 'Gmail API', role: 'Brief delivery', color: '#EA4335', desc: 'Sends the approved brief as a formatted HTML email to the creative team leads.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '3 hrs', label: 'saved per brief', sub: 'vs. manual writing' },
  { stat: '45 sec', label: 'to generate brief', sub: 'after form submission' },
  { stat: 'Zero', label: 'copy-paste required', sub: 'Notion → GPT-4o automated' },
  { stat: '100%', label: 'briefs approved', sub: 'first or second pass' },
]

// ── Component ─────────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

export default function CreativeBriefPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">AI Creative Brief Generator</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: '#A78BFA', background: '#A78BFA18', border: '1px solid #A78BFA28' }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              AI Creative Brief<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Generator</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              When a client submits your intake form, this workflow pulls their brand guidelines from Notion, sends the full context to GPT-4o, and drops a polished structured brief into your creative team&apos;s hands — with an approval gate in between.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold text-[#A78BFA]">{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Typeform', 'Notion', 'GPT-4o', 'Slack', 'Gmail', 'n8n'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#A78BFA] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display shadow-[0_4px_24px_rgba(167,139,250,0.30)]"
              >
                Build this for my agency <ArrowRight size={15} />
              </a>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            {/* Build time pill */}
            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} className="text-[#A78BFA]/70" />
              Typical build: <span className="text-white/55 font-medium">1–2 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#A78BFA] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Fires on every Typeform submission</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Form submission' },
                { label: 'Avg runtime', value: '~45 seconds' },
                { label: 'Human touchpoint', value: 'Approval in Slack' },
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A78BFA]/70 font-display">The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why agencies still write briefs manually</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Writing briefs eats 3 hours per client intake', desc: 'A creative director or account manager has to chase the client for info, pull brand docs from five different places, and then write a brief from scratch. Every. Single. Time.' },
            { icon: BarChart3, title: 'Briefs written under pressure are vague', desc: 'When you\'re juggling 8 clients and a deadline, briefs get generic. GPT-4o with your actual brand context produces more specific, actionable briefs than a rushed human.' },
            { icon: Users, title: 'Approval loops kill momentum', desc: 'Without a structured approval step, briefs get shared in email threads and revised 4 times via Slack DMs. This workflow bakes in a single clear approval gate.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/20">
                  <Icon size={18} className="text-[#A78BFA]" />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A78BFA]/70 font-display">How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual workflow Kovil AI builds and deploys — not a diagram. Here&apos;s what runs inside every node.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.06)}
                className="group relative grid gap-6 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 transition-colors hover:border-white/[0.12] sm:grid-cols-[auto_1fr]">
                {/* Left: step number + tool */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border font-display text-sm font-bold"
                    style={{ borderColor: `${step.toolColor}40`, background: `${step.toolColor}14`, color: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide"
                    style={{ color: step.toolColor }}>
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
                {/* Connector line */}
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A78BFA]/70 font-display">Tech stack</span>
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A78BFA]/70 font-display">What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 1–2 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don&apos;t touch n8n until it&apos;s live and running.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Typeform designed and branded to your agency',
                  'Notion API integration with your brand guidelines database',
                  'GPT-4o prompt engineered for your specific brief structure',
                  'Slack Block Kit approval flow with Approve / Revise buttons',
                  'Gmail delivery and Notion auto-archiving configured',
                  'n8n workflow hosted and monitored',
                  'Runbook and credentials handover',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle size={15} className="text-[#A78BFA] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">Sprint timeline</span>
                  <span className="rounded-full bg-[#A78BFA]/10 border border-[#A78BFA]/25 px-3 py-1 text-[11px] font-semibold text-[#A78BFA] font-display">
                    1–2 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Typeform + Notion + GPT-4o', items: ['Typeform setup + Notion API integration', 'GPT-4o prompt engineering', 'Brief structure design and testing'] },
                  { week: 'Week 2', title: 'Slack + Gmail + deploy', items: ['Slack Block Kit approval flow', 'Gmail delivery + Notion auto-archiving', 'End-to-end testing + deployment'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 1 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#A78BFA]">{wk.week}</span>
                      <span className="text-sm font-semibold text-white">{wk.title}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {wk.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <div className="h-1 w-1 rounded-full bg-[#A78BFA]/50" />
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
            <div className="h-64 w-[500px] rounded-full bg-[#A78BFA] opacity-[0.07] blur-[80px]" />
          </div>
          <MessageSquare size={24} className="relative mx-auto mb-4 text-[#A78BFA]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to eliminate brief-writing from your workflow?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll scope the workflow for your brand, clients and brief structure — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#A78BFA] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(167,139,250,0.30)] hover:shadow-[0_8px_40px_rgba(167,139,250,0.45)] transition-all hover:opacity-95 font-display"
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
            Typical sprint: 1–2 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

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

// HubSpot "H"
function HubSpotIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF7A59">
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="24" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">H</text>
    </NodeBox>
  )
}

// DocuSign "DS"
function DocuSignIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FECB2E">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">DS</text>
    </NodeBox>
  )
}

// Stripe "S"
function StripeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#635BFF">
      <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="22" fontWeight="800" fontStyle="italic" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">S</text>
    </NodeBox>
  )
}

// Typeform "Tf"
function TypeformIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0099FF">
      <text x={cx} y={cy + 6} textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Tf</text>
    </NodeBox>
  )
}

// n8n Wait (lightning bolt)
function N8nMergeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
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

// Calendly calendar icon
function CalendlyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#006BFF">
      <rect x={cx - 10} y={cy - 12} width={20} height={22} rx={3} fill="none" stroke="white" strokeWidth="2" />
      <line x1={cx - 10} y1={cy - 6} x2={cx + 10} y2={cy - 6} stroke="white" strokeWidth="2" />
      <line x1={cx - 4} y1={cy - 14} x2={cx - 4} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx + 4} y1={cy - 14} x2={cx + 4} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
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
    <svg viewBox="0 0 800 270" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Connection paths */}
      {/* HubSpot → DocuSign (curve up) */}
      <path d="M93,135 C140,135 140,60 172,60" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* HubSpot → Stripe (straight) */}
      <path d="M93,135 H172" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* HubSpot → Typeform (curve down) */}
      <path d="M93,135 C140,135 140,210 172,210" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* DocuSign → n8n Wait (curve down) */}
      <path d="M228,60 C280,60 280,135 317,135" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Stripe → n8n Wait (straight) */}
      <path d="M228,135 H317" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Typeform → n8n Wait (curve up) */}
      <path d="M228,210 C280,210 280,135 317,135" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* n8n Wait → Notion */}
      <path d="M373,135 H442" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Notion → Slack (curve up) */}
      <path d="M498,135 C535,135 535,75 562,75" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Notion → Calendly (curve down) */}
      <path d="M498,135 C535,135 535,195 562,195" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <HubSpotIcon cx={65} cy={135} />
      <NodeLabel cx={65} cy={135} text="HubSpot" sub="Deal Won trigger" />

      <DocuSignIcon cx={200} cy={60} />
      <NodeLabel cx={200} cy={60} text="DocuSign" sub="Contract" />

      <StripeIcon cx={200} cy={135} />
      <NodeLabel cx={200} cy={135} text="Stripe" sub="Invoice" />

      <TypeformIcon cx={200} cy={210} />
      <NodeLabel cx={200} cy={210} text="Typeform" sub="Onboarding form" />

      <N8nMergeIcon cx={345} cy={135} />
      <NodeLabel cx={345} cy={135} text="n8n Wait" sub="All 3 complete" />

      <NotionIcon cx={470} cy={135} />
      <NodeLabel cx={470} cy={135} text="Notion" sub="Client workspace" />

      <SlackIcon cx={590} cy={75} />
      <NodeLabel cx={590} cy={75} text="Slack" sub="Team channel" />

      <CalendlyIcon cx={590} cy={195} />
      <NodeLabel cx={590} cy={195} text="Calendly" sub="Kickoff call" />

      {/* Step number badges */}
      {[
        [65, 135, '1'], [200, 60, '2a'], [200, 135, '2b'], [200, 210, '2c'],
        [345, 135, '3'], [470, 135, '4'], [590, 75, '5'], [590, 195, '6'],
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
    tool: 'HubSpot CRM',
    toolColor: '#FF7A59',
    title: "Deal marked Won in HubSpot triggers the workflow instantly",
    detail: "When an account manager moves a deal to 'Won' in HubSpot, a webhook fires a POST request to n8n within seconds. n8n extracts the client name, contact email, deal value, package tier and assigned account manager from the HubSpot payload. No manual trigger. No form to fill out.",
    tags: ['HubSpot CRM', 'Deal stage webhook', 'Automatic trigger', 'Data extraction'],
  },
  {
    num: 2,
    tool: 'Parallel execution',
    toolColor: '#1877F2',
    title: 'Three things fire simultaneously: contract, invoice, onboarding form',
    detail: "n8n splits into three parallel branches: (1) DocuSign API sends the signed contract template pre-filled with deal name and value. (2) Stripe API creates and sends a branded invoice for the deposit amount. (3) Typeform sends a custom onboarding intake form to the client contact. All three happen within 30 seconds of the deal being marked Won.",
    tags: ['n8n parallel branches', 'DocuSign API', 'Stripe API', 'Typeform API', 'Simultaneous triggers'],
  },
  {
    num: 3,
    tool: 'n8n Wait node',
    toolColor: '#F65B2B',
    title: 'Workflow pauses until all three are completed',
    detail: "n8n's Wait node listens for three webhook callbacks: DocuSign contract signed, Stripe invoice paid, and Typeform form submitted. Only when all three are confirmed does the workflow continue. If any item is pending after 48 hours, a Slack alert is sent to the account manager with the specific outstanding item.",
    tags: ['n8n Wait node', 'Webhook listeners', 'Conditional logic', '48hr escalation alert'],
  },
  {
    num: 4,
    tool: 'Notion API',
    toolColor: '#191919',
    title: 'Client Notion workspace is built from a master template',
    detail: "Notion API clones a master client workspace template into the agency's Notion account. It creates pages for: Brief & Strategy, Campaign Assets, Reporting, Meeting Notes and Client Contacts. All page titles, client name references and brand details are populated automatically from the HubSpot deal data.",
    tags: ['Notion API', 'Template cloning', 'Programmatic page creation', 'Auto-populated content'],
  },
  {
    num: 5,
    tool: 'Slack API',
    toolColor: '#4A154B',
    title: 'Dedicated client Slack channel created, team invited',
    detail: "Slack API creates a new private channel named #client-[brandname]. The account manager, creative lead and strategy lead are auto-invited using their Slack user IDs (stored in n8n). A welcome message is posted with the client name, kickoff date, and a link to the Notion workspace. The client does not have access — this is internal.",
    tags: ['Slack API', 'Channel creation', 'Auto-invite members', 'Welcome message bot'],
  },
  {
    num: 6,
    tool: 'Calendly API',
    toolColor: '#006BFF',
    title: 'Kickoff call scheduled automatically',
    detail: "Calendly API generates a unique scheduling link for the kickoff call (pre-configured for 60 minutes with the account manager and strategy lead). n8n sends the Calendly link to the client via a personalised Gmail email — subject: 'Welcome to [Agency Name] — let's book your kickoff.' The Calendly booking syncs to Google Calendar automatically.",
    tags: ['Calendly API', 'Auto-scheduling link', 'Gmail API', 'Google Calendar sync'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'HubSpot CRM', role: 'Deal trigger', color: '#FF7A59', desc: 'Webhook fires on deal Won. n8n extracts all client data from the deal payload automatically.' },
  { name: 'DocuSign API', role: 'Contract delivery', color: '#FECB2E', desc: 'Sends pre-filled contract template. Webhook confirms when signed. Stores executed document in client folder.' },
  { name: 'Stripe API', role: 'Invoice generation', color: '#635BFF', desc: 'Creates and sends branded deposit invoice. Webhook confirms payment before workflow continues.' },
  { name: 'Typeform API', role: 'Onboarding intake', color: '#0099FF', desc: 'Sends custom onboarding form. Webhook confirms submission. Data flows directly into Notion workspace.' },
  { name: 'n8n', role: 'Orchestration layer', color: '#F65B2B', desc: 'Manages all parallel branches, Wait node logic, escalation alerts and the full conditional flow.' },
  { name: 'Notion API', role: 'Workspace builder', color: '#191919', desc: 'Clones master template, creates all pages, populates client-specific content from HubSpot data.' },
  { name: 'Slack + Calendly + Gmail', role: 'Team setup & kickoff', color: '#4A154B', desc: 'Creates internal Slack channel, auto-invites team, sends Calendly scheduling link to client.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '3 days', label: 'old onboarding time', sub: 'manual process' },
  { stat: '2 hrs', label: 'automated onboarding', sub: 'from Won to ready' },
  { stat: '6 tasks', label: 'run in parallel', sub: 'no sequential waiting' },
  { stat: '0', label: 'manual steps', sub: 'after deal is marked Won' },
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

export default function ClientOnboardingPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">New Client Onboarding Automation</span>
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
              New Client Onboarding<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] bg-clip-text text-transparent">Automation</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              The moment a deal is marked Won in HubSpot, this n8n workflow fires DocuSign, Stripe and your onboarding form simultaneously — then builds the Notion workspace, Slack channel and books the kickoff call automatically.
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
              {['HubSpot', 'DocuSign', 'Stripe', 'Typeform', 'n8n', 'Notion', 'Slack', 'Calendly'].map(t => (
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
              Typical build: <span className="text-white/55 font-medium">3–4 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#A78BFA] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Fires on HubSpot deal Won</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'HubSpot webhook' },
                { label: 'Before automation', value: '3 business days' },
                { label: 'After automation', value: '~2 hours' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why onboarding takes 3 days when it should take 2 hours</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'New client setup takes 3 days of back-and-forth', desc: 'Sending the contract, chasing the invoice, collecting onboarding info, setting up the Notion workspace, creating the Slack channel — it all happens sequentially, manually, across 3 different people.' },
            { icon: BarChart3, title: 'First impressions are set in the first 48 hours', desc: "Clients judge your agency's professionalism in the first few days. A slow, disorganised onboarding creates doubt before the work has even started." },
            { icon: Users, title: 'Account managers spend Friday afternoons on admin', desc: "Every Won deal means 2–3 hours of setup work: DocuSign, Stripe, folder creation, team intros. This automation removes all of it." },
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don&apos;t touch n8n until it&apos;s live and running.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'HubSpot webhook configured with deal stage trigger',
                  'DocuSign contract template pre-filled from CRM data',
                  'Stripe invoice automation with deposit calculation',
                  'Typeform onboarding intake form built and connected',
                  'n8n Wait node with 48hr escalation logic',
                  'Notion workspace cloned from your master template',
                  'Slack channel creation + team auto-invite configured',
                  'Calendly scheduling link + Gmail personalised email',
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
                    3–4 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'CRM + parallel triggers', items: ['HubSpot webhook + DocuSign + Stripe + Typeform parallel setup', 'API credential configuration', 'Parallel branch testing'] },
                  { week: 'Week 2', title: 'Wait logic + Notion', items: ["n8n Wait logic + 48hr escalation alerts", 'Notion template cloning + page creation', 'HubSpot data mapping'] },
                  { week: 'Week 3', title: 'Slack + Calendly + deploy', items: ['Slack channel creation + Gmail delivery', 'Calendly API + Google Calendar sync', 'End-to-end testing + deployment'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 2 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
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
            Automate your client onboarding in one sprint.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll scope the full onboarding workflow for your CRM, contract, billing and workspace tools — fixed price, zero delivery risk.
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
            Typical sprint: 3–4 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}

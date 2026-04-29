'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Zap } from 'lucide-react'
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
      <marker id="arrow-it" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-it)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Ticket In → Classify */}
      <path d="M84,110 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Classify → KB Search */}
      <path d="M227,110 H270" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* KB Search → Atlas Resolve */}
      <path d="M354,110 H397" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas Resolve → Branch */}
      <path d="M481,110 H510" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Branch → Auto-resolve (up) */}
      <path d="M538,82 L538,42 H624 V64" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Branch → Engineer Route (down, dashed) */}
      <path d="M538,138 L538,180 H624 V190" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />
      {/* Auto-resolve → Ticket Update */}
      <path d="M680,42 H738 V84" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Engineer Route → Slack notify */}
      <path d="M680,193 H704" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <NodeBox cx={56} cy={110} bg="#FF4F00">
        <text x={56} y={115} textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">TICK</text>
      </NodeBox>
      <NodeLabel cx={56} cy={110} text="Ticket In" sub="any channel" />

      <NodeBox cx={171} cy={110} bg={SF_BLUE}>
        <circle cx={171} cy={110} r="13" stroke="white" strokeWidth="1.5" fill="none" />
        <text x={171} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
      </NodeBox>
      <NodeLabel cx={171} cy={110} text="Classify" sub="Einstein" />

      <NodeBox cx={312} cy={110} bg="#10A37F">
        <text x={312} y={106} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">KB</text>
        <text x={312} y={117} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">Search</text>
      </NodeBox>
      <NodeLabel cx={312} cy={110} text="Knowledge" sub="Base" />

      <NodeBox cx={453} cy={110} bg="#0F172A" border="#334155">
        <text x={453} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
      </NodeBox>
      <NodeLabel cx={453} cy={110} text="Atlas" sub="Resolve" />

      {/* Branch diamond */}
      <g>
        <polygon
          points={`${510},${82} ${538},${110} ${510},${138} ${482},${110}`}
          fill="#D97706"
        />
        <text x={510} y={114} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
      </g>
      <NodeLabel cx={510} cy={110} text="Resolvable?" sub="" />

      {/* Auto-resolve (up) */}
      <NodeBox cx={652} cy={42} bg={SF_BLUE}>
        <text x={652} y={47} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">✓</text>
      </NodeBox>
      <NodeLabel cx={652} cy={42} text="L1 Resolved" sub="auto" />

      {/* Engineer Route (down, dashed) */}
      <NodeBox cx={652} cy={193} bg="#8B5CF6">
        <text x={652} y={190} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">ENG</text>
      </NodeBox>
      <NodeLabel cx={652} cy={193} text="Engineer" sub="Route" />

      {/* Ticket Update */}
      <NodeBox cx={765} cy={110} bg={SF_BLUE}>
        <text x={765} y={115} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">LOG</text>
      </NodeBox>
      <NodeLabel cx={765} cy={110} text="Ticket" sub="Closed" />

      {/* Slack notify for engineer */}
      <NodeBox cx={737} cy={193} bg="#4A154B">
        <text x={737} y={190} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">Slack</text>
      </NodeBox>
      <NodeLabel cx={737} cy={193} text="Engineer" sub="Alert" />

      {/* Step badges */}
      {([
        [56, 110, '1'], [171, 110, '2'], [312, 110, '3'], [453, 110, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={608} y={30} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">L1 ✓</text>
      <text x={608} y={205} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">complex →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Ticket Intake & Classification',
    toolColor: '#FF4F00',
    title: 'IT ticket captured from any channel and classified within seconds',
    detail: 'The IT Helpdesk Agent accepts tickets from multiple intake channels: Slack command (employees type /it-help and describe their issue), email to the IT helpdesk address (parsed via email-to-case), the Salesforce employee self-service portal, and direct escalation from the HR Onboarding Agent for new hire provisioning issues. Einstein Case Classification analyses the ticket description to identify: issue type (credential, access, hardware, software, network, account management), urgency tier (blocking work vs inconvenient), affected system (Salesforce, Slack, Jira, laptop, VPN — extracted from ticket text), and whether a known resolution exists in the knowledge base. Classification determines the resolution path within seconds of submission.',
    tags: ['Slack Command', 'Email-to-Case', 'Self-service Portal', 'Einstein Classification', 'Issue Type Detection', 'Urgency Triage', 'Known Resolution Check'],
  },
  {
    num: 2,
    tool: 'Knowledge Base Resolution Search',
    toolColor: '#10A37F',
    title: 'Semantic KB search retrieves the correct resolution procedure for the issue type',
    detail: 'For every classified ticket, the agent performs a semantic search of the IT knowledge base — which covers documented resolution procedures for all common L1 issues. Unlike keyword search, semantic search handles the variety of ways employees describe the same problem: \'can\'t log in\', \'password not working\', \'locked out of my account\', and \'authentication failing\' all retrieve the same credential reset procedure. The KB search is filtered by the affected system identified in classification — a Salesforce login issue retrieves Salesforce-specific procedures, not generic login steps. If no procedure exists above the confidence threshold, the ticket routes directly to L2 engineering without attempting autonomous resolution.',
    tags: ['Semantic KB Search', 'Salesforce Knowledge', 'System-filtered Search', 'Confidence Threshold', 'L2 Direct Route', 'Procedure Retrieval'],
  },
  {
    num: 3,
    tool: 'Atlas Resolution Execution',
    toolColor: '#0F172A',
    title: 'Atlas executes the resolution procedure — calling APIs to fix the issue directly',
    detail: 'For resolvable L1 issues, Atlas Reasoning Engine does not just surface a knowledge article — it executes the fix directly via configured API integrations. Password and credential resets: calls your identity provider (Okta, Azure AD) API to reset credentials and sends the new access link to the employee\'s verified contact method. Software access requests: calls the relevant application\'s provisioning API to grant the requested access role. Account unlocks: calls the identity provider to unlock the account. VPN troubleshooting: runs a connectivity check and sends the employee a guided resolution sequence. The agent verifies that the action completed successfully before closing the ticket.',
    tags: ['Atlas Reasoning Engine', 'API Execution', 'Okta API', 'Azure AD', 'Credential Reset', 'Access Provisioning', 'Action Verification'],
  },
  {
    num: 4,
    tool: 'Employee Confirmation & Self-service',
    toolColor: SF_BLUE,
    title: 'Employee notified of resolution and guided through self-service confirmation',
    detail: 'When the resolution action completes, the agent sends a personalised notification to the employee via Slack (or their configured channel): a clear description of what was done, any steps they need to take to complete the fix (e.g. click the password reset link, restart their VPN client), and a confirmation prompt asking them to verify the issue is resolved. If the employee confirms resolution, the ticket is closed automatically and a CSAT prompt is sent. If the employee reports the fix did not work, the ticket is escalated to L2 engineering with full context: the resolution that was attempted, what the employee reported, and the complete ticket history.',
    tags: ['Slack Notification', 'Resolution Steps', 'Confirmation Prompt', 'Auto-close on Confirm', 'CSAT Survey', 'L2 Escalation on Failure'],
  },
  {
    num: 5,
    tool: 'Complex Ticket Routing to Engineering',
    toolColor: '#8B5CF6',
    title: 'Tickets requiring genuine engineering judgement routed with full context pre-loaded',
    detail: 'Tickets that cannot be resolved autonomously — infrastructure issues, security incidents, complex network problems, hardware failures requiring physical intervention — are routed to the IT engineering queue via OmniChannel. The routing considers: issue type (network vs security vs hardware — different specialist queues), urgency tier (P1 incidents bypass the queue and page the on-call engineer directly), and the affected employee\'s role (C-suite tickets are escalated immediately regardless of tier). The assigned engineer receives a pre-prepared ticket summary: issue type, affected system, resolution already attempted (if any), employee\'s exact description, and Einstein\'s diagnostic assessment. Handle time drops because the engineer does not start cold.',
    tags: ['OmniChannel Routing', 'Specialist Queues', 'P1 Incident Paging', 'Role-based Priority', 'Engineer Context Brief', 'On-call Integration'],
  },
  {
    num: 6,
    tool: 'Ticket Logging & Knowledge Base Update',
    toolColor: '#D97706',
    title: 'Every ticket resolved — the knowledge base improved from resolution patterns',
    detail: 'Every resolved ticket — autonomous and human-resolved — is logged with: resolution action taken, time to resolution, employee confirmation, and CSAT score. Tickets resolved by engineers that do not have a matching KB article are flagged as documentation gaps. Engineers are prompted to document the resolution procedure after closing the ticket — a Prompt Builder draft is pre-generated from the ticket details to reduce the documentation burden to a 5-minute review and approve rather than starting from scratch. Over time, new L1 resolution types are added to the knowledge base — expanding autonomous resolution coverage. Weekly gap reports are posted to the IT team\'s Slack channel.',
    tags: ['Resolution Logging', 'CSAT Tracking', 'KB Gap Detection', 'Engineer Documentation Prompt', 'Prompt Builder Draft', 'Weekly Gap Report', 'Coverage Expansion'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Resolution execution', color: SF_BLUE, desc: 'Executes L1 resolution actions directly via API — credential resets, access provisioning, account unlocks — rather than just surfacing a knowledge article.' },
  { name: 'Einstein Case Classification', role: 'Ticket triage', color: '#10A37F', desc: 'Classifies every ticket by type, urgency, and affected system within seconds — determining whether it goes to autonomous resolution or specialist engineering.' },
  { name: 'Salesforce Knowledge', role: 'Resolution procedures', color: '#8B5CF6', desc: 'Houses documented resolution procedures for all common L1 issues. Semantic search ensures the right procedure is retrieved regardless of how the employee describes the problem.' },
  { name: 'Identity Systems', role: 'Action execution', color: '#FF4F00', desc: 'Okta and Azure AD integrations enable the agent to execute credential resets, account unlocks, and access provisioning directly — without human involvement.' },
  { name: 'Slack', role: 'Employee interface', color: '#4A154B', desc: 'Primary channel for ticket submission (/it-help command), resolution notifications, confirmation prompts, and CSAT surveys.' },
  { name: 'OmniChannel', role: 'Engineer routing', color: '#D97706', desc: 'Routes complex tickets to the correct specialist queue — with skill-based routing, P1 incident paging, and role-based priority logic.' },
  { name: 'Einstein Trust Layer', role: 'Security', color: '#0F172A', desc: 'Critical for an IT context where actions include credential management. All API calls and employee data stay within Salesforce\'s trust boundary.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '70%', label: 'tickets auto-resolved', sub: 'L1 without human touch' },
  { stat: '< 3 min', label: 'resolution time', sub: 'for autonomous tickets' },
  { stat: '24/7', label: 'coverage', sub: 'no out-of-hours backlog' },
  { stat: '50%', label: 'engineer time freed', sub: 'for real engineering work' },
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

export default function ITHelpdeskAgentPage() {
  const accentColor = SF_BLUE

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/agentforce" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> Agentforce
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/35">Internal Operations</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">IT Helpdesk Agent</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: accentColor, background: `${accentColor}18`, border: `1px solid ${accentColor}28` }}>
                Internal Operations
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              IT Helpdesk Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">L1 Tickets Resolved Without a Human in the Loop</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Resolves the 70% of IT tickets that follow predictable patterns — password resets, software access requests, VPN setup, hardware troubleshooting, account unlocks — autonomously, 24/7. Your IT engineers focus on infrastructure and complex problems, not L1 admin.
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
              {['Atlas Reasoning Engine', 'Salesforce Case', 'Knowledge Base', 'Slack Integration', 'Identity Systems', 'Salesforce Flow', 'Einstein Trust Layer'].map(t => (
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
                Book a discovery call <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">3-week sprint · Fixed price · Production-grade</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — L1 resolved before an engineer sees it</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Auto-resolution', value: '70% of tickets' },
                { label: 'Response time', value: '< 3 minutes' },
                { label: 'Coverage', value: '24/7' },
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

      {/* ── STEP BY STEP ────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual Agentforce configuration Kovil AI builds and deploys — not a diagram. Here is what runs inside every node.
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>Tech stack</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the agent</h2>
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3-week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and resolving tickets autonomously.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'IT Helpdesk Agent with multi-channel ticket intake (Slack, email, portal)',
                  'Einstein Case Classification with IT-specific issue taxonomy',
                  'Semantic KB search with system-filtered resolution procedure retrieval',
                  'Atlas resolution execution for credential resets, access provisioning, account unlocks',
                  'Identity provider integration (Okta or Azure AD)',
                  'OmniChannel engineer routing with P1 incident paging',
                  'Employee confirmation flow with CSAT survey',
                  'KB gap detection and engineer documentation prompt automation',
                  'Weekly gap report to IT Slack channel',
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
                  { week: 'Week 1', title: 'Intake + classification', items: ['Slack command, email-to-case, Einstein classification, KB semantic search'] },
                  { week: 'Week 2', title: 'Resolution execution', items: ['Atlas action library, Okta/Azure AD integration, credential reset, access provisioning'] },
                  { week: 'Week 3', title: 'Routing + logging + deploy', items: ['OmniChannel engineer routing, P1 paging, KB gap detection, CSAT, production deployment'] },
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

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {[
              {
                q: 'What L1 issues can the agent resolve autonomously?',
                a: 'The autonomous resolution library is configured during implementation based on your IT environment. Common autonomous resolutions include: password and credential resets, account unlocks, MFA reset, basic software access grants for configured applications, VPN troubleshooting (connectivity checks and guided steps), standard onboarding system provisioning, and known configuration issues with documented fixes. Issues requiring physical intervention (hardware failure, network infrastructure), security investigation, or systems without API integration are always routed to engineering.',
              },
              {
                q: 'How does the credential reset work securely?',
                a: 'The agent calls your identity provider\'s API (Okta or Azure AD) to initiate the reset — it does not handle or transmit the new credential. The reset link is sent directly from the identity provider to the employee\'s verified secondary contact method (personal email or backup phone number configured in their profile). The agent never sees the credential itself. All API calls are made within the Einstein Trust Layer — no credential data leaves Salesforce\'s security boundary.',
              },
              {
                q: 'What happens with P1 incidents — infrastructure outages and security events?',
                a: 'P1 incidents are detected by urgency classification signals: keywords like \'everyone is affected\', \'whole team can\'t access\', \'security breach\', \'data leak\', or \'production is down\'. P1 tickets bypass the standard queue and trigger immediate on-call paging via PagerDuty integration (or your configured on-call system). The page includes the full ticket context. Simultaneously, a Slack alert fires to the IT leadership channel. The agent does not attempt autonomous resolution for P1 incidents — it escalates immediately.',
              },
              {
                q: 'How long until autonomous resolution rate improves over time?',
                a: 'Initial autonomous resolution rate depends on the breadth of the configured action library and KB coverage at launch — typically 50–60% in week 1. As engineers document new resolution procedures (prompted by the KB gap detection system) and new API actions are added, the rate improves. Most clients reach 70%+ within 90 days. We track resolution rate, CSAT, and KB coverage as standard post-launch metrics and report weekly.',
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

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <Zap size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Resolve 70% of IT tickets before an engineer sees them.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current helpdesk ticket distribution, identify your L1 automation opportunity, and scope a 3-week fixed-price Agentforce implementation.
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

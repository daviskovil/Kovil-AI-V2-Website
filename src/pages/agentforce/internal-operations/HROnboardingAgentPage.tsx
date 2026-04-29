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
      <marker id="arrow-hr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-hr)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* New Hire → Checklist Gen */}
      <path d="M84,110 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Checklist Gen → System Provision */}
      <path d="M227,110 H270" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* System Provision → Slack Welcome */}
      <path d="M354,110 H397" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Slack Welcome → Atlas Q&A */}
      <path d="M481,110 H524" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas Q&A → Progress Track (diamond) */}
      <path d="M580,110 H623" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Progress Track → Complete (up) */}
      <path d="M651,82 L651,42 H738 V64" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Progress Track → Manager Nudge (down, dashed) */}
      <path d="M651,138 L651,180 H738 V190" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <NodeBox cx={56} cy={110} bg="#FF4F00">
        <text x={56} y={106} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">HIRE</text>
      </NodeBox>
      <NodeLabel cx={56} cy={110} text="New Hire" sub="trigger" />

      <NodeBox cx={171} cy={110} bg={SF_BLUE}>
        <text x={171} y={115} textAnchor="middle" fill="white" fontSize="15" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">✓</text>
      </NodeBox>
      <NodeLabel cx={171} cy={110} text="Checklist" sub="Gen" />

      <NodeBox cx={312} cy={110} bg="#10A37F">
        <text x={312} y={106} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">SYS</text>
      </NodeBox>
      <NodeLabel cx={312} cy={110} text="System" sub="Provision" />

      <NodeBox cx={453} cy={110} bg="#4A154B">
        <text x={453} y={106} textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Slack</text>
      </NodeBox>
      <NodeLabel cx={453} cy={110} text="Welcome" sub="+ Buddy" />

      <NodeBox cx={552} cy={110} bg="#0F172A" border="#334155">
        <text x={552} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
      </NodeBox>
      <NodeLabel cx={552} cy={110} text="Atlas" sub="Q&A" />

      {/* Branch diamond */}
      <g>
        <polygon
          points={`${623},${82} ${651},${110} ${623},${138} ${595},${110}`}
          fill="#D97706"
        />
        <text x={623} y={114} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
      </g>
      <NodeLabel cx={623} cy={110} text="Complete?" sub="check" />

      {/* Complete node (up) */}
      <NodeBox cx={738} cy={42} bg={SF_BLUE}>
        <text x={738} y={39} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">✓ Done</text>
      </NodeBox>
      <NodeLabel cx={738} cy={42} text="Onboarding" sub="complete" />

      {/* Manager Nudge (down, dashed) */}
      <NodeBox cx={738} cy={193} bg="#EF4444">
        <text x={738} y={190} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">NUDGE</text>
      </NodeBox>
      <NodeLabel cx={738} cy={193} text="Manager" sub="Alert" />

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
      <text x={700} y={30} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">complete ✓</text>
      <text x={700} y={205} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">incomplete →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'New Hire Record Trigger',
    toolColor: '#FF4F00',
    title: 'Agent fires the moment a new employee record is created in Salesforce',
    detail: 'The HR Onboarding Agent is triggered by the creation of a new Employee record in Salesforce — populated by your HRIS system (Workday, BambooHR, or similar) via integration. The trigger captures the hire\'s role, department, start date, location, and manager. From this data, the agent determines the correct onboarding track: the checklist, system access requirements, and policy documents vary by department (engineering vs sales vs operations) and location (different compliance requirements by region). Onboarding track selection is fully configurable during implementation — no new hire gets a generic checklist.',
    tags: ['Employee Record Trigger', 'HRIS Integration', 'Workday', 'BambooHR', 'Onboarding Track Selection', 'Department Rules', 'Location Compliance'],
  },
  {
    num: 2,
    tool: 'Personalised Checklist Generation',
    toolColor: SF_BLUE,
    title: 'Personalised onboarding checklist generated and shared with new hire and manager',
    detail: 'Prompt Builder generates a personalised onboarding checklist for each new hire based on their role, department, and location. The checklist includes: required compliance training (role and location specific), system access requests to trigger, equipment setup steps, key contacts and intro meetings to schedule, and first-week milestones. The checklist is delivered as a Salesforce Experience Cloud task list (or via the configured portal), a Slack message to the new hire, and a copy to their manager with a clear view of what the hire needs to complete and by when. Checklist items are tracked as Salesforce Tasks — completion status is visible to HR in real time.',
    tags: ['Prompt Builder', 'Personalised Checklist', 'Salesforce Tasks', 'Experience Cloud', 'Manager Copy', 'Compliance Training', 'Real-time Tracking'],
  },
  {
    num: 3,
    tool: 'System Access Provisioning',
    toolColor: '#10A37F',
    title: 'System access requests triggered automatically on day one — no IT ticket needed',
    detail: 'Based on the new hire\'s role and department, the agent triggers access provisioning requests for all required systems: identity provider account creation (Okta, Azure AD), email and calendar setup, core business applications (Salesforce, Slack, Jira, Confluence — configurable per role), and any role-specific tools. Provisioning is triggered via Salesforce Flow calling your identity provider\'s API — no manual IT ticket, no waiting for someone to process a form. Access confirmation events feed back into the onboarding checklist, marking provisioning items as complete when the accounts are created.',
    tags: ['Identity Provisioning', 'Okta Integration', 'Azure AD', 'Role-based Access', 'Salesforce Flow', 'API Triggers', 'Access Confirmation'],
  },
  {
    num: 4,
    tool: 'Slack Welcome & Buddy Assignment',
    toolColor: '#4A154B',
    title: 'New hire welcomed in Slack with context-aware intro and buddy assigned',
    detail: 'On the hire\'s start date, the agent sends a personalised welcome message to the company Slack — generated by Prompt Builder with the hire\'s name, role, background (from their employee profile), and first-week focus areas. The agent also assigns an onboarding buddy from a configured pool of volunteers (matched by department and seniority) and sends an introduction DM to both parties. Automated check-in messages are scheduled for end of day 1, end of week 1, and end of week 2 — asking the new hire how they are finding the process and surfacing any blockers for HR to address.',
    tags: ['Slack Welcome', 'Prompt Builder', 'Buddy Assignment', 'Department Matching', 'Check-in Scheduling', 'Blocker Detection'],
  },
  {
    num: 5,
    tool: 'Policy Q&A via Atlas',
    toolColor: '#0F172A',
    title: 'Atlas answers policy questions from new hires 24/7 in Slack or the portal',
    detail: 'New hires have a high volume of policy questions in their first weeks — about leave, expenses, equipment, benefits, performance reviews, and processes. The Atlas Reasoning Engine powers a policy Q&A interface accessible via Slack DM and the HR portal. Atlas retrieves answers from your configured policy document library (connected via Salesforce Knowledge or a document store), answers in plain language appropriate to the question\'s complexity, and flags questions it cannot answer for HR follow-up. All Q&A interactions are logged — questions that frequently cannot be answered surface as documentation gaps for the HR team.',
    tags: ['Atlas Reasoning Engine', 'Policy Q&A', 'Salesforce Knowledge', 'Slack DM', 'HR Portal', 'Gap Flagging', 'Audit Log'],
  },
  {
    num: 6,
    tool: 'Progress Tracking & Manager Nudges',
    toolColor: '#D97706',
    title: 'Checklist progress tracked continuously — manager alerted when items stall',
    detail: 'The agent monitors checklist completion in real time. Items not completed within their configured window trigger an automatic nudge: a Slack reminder to the new hire for self-service items, and a Slack alert to the manager for items requiring manager action (intro meetings to schedule, equipment sign-off). At the end of week 2, the agent generates a completion summary for the HR team: items completed, items outstanding, any policy questions that could not be answered, and the new hire\'s check-in sentiment. Onboarding is marked complete when all mandatory checklist items are checked off — partial completion is never silently accepted.',
    tags: ['Progress Monitoring', 'Automated Nudges', 'Manager Alerts', 'Slack Reminders', 'Completion Summary', 'Mandatory Items Gate'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Policy Q&A', color: SF_BLUE, desc: 'Powers the 24/7 policy Q&A interface — retrieving answers from your policy library, responding in plain language, and flagging unanswerable questions for HR follow-up.' },
  { name: 'Salesforce Flow', role: 'Provisioning triggers', color: '#10A37F', desc: 'Triggers system access provisioning via API calls to your identity provider, tracks access confirmation events, and updates the onboarding checklist automatically.' },
  { name: 'Prompt Builder', role: 'Personalised content', color: '#8B5CF6', desc: 'Generates the personalised onboarding checklist, Slack welcome message, check-in messages, and completion summary — tailored to role, department, and location.' },
  { name: 'Slack', role: 'New hire communication', color: '#4A154B', desc: 'Primary communication channel for welcome messages, buddy introductions, check-in prompts, manager nudges, and policy Q&A interaction.' },
  { name: 'Salesforce Knowledge', role: 'Policy library', color: '#FF4F00', desc: 'Houses the policy documents and HR content that Atlas retrieves from when answering new hire questions — single source of truth for all HR policy.' },
  { name: 'Einstein Trust Layer', role: 'Data security', color: '#0F172A', desc: 'Ensures employee PII — salary, personal details, compliance data — stays within Salesforce\'s trust boundary during all AI processing.' },
  { name: 'Data Cloud', role: 'Employee profile', color: '#6366F1', desc: 'Unifies HRIS data, system provisioning status, and engagement signals to give the agent full context on each new hire\'s onboarding progress.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '80%', label: 'admin time saved', sub: 'per new hire' },
  { stat: 'Day 1', label: 'system access ready', sub: 'zero provisioning delays' },
  { stat: '100%', label: 'checklist completion', sub: 'nothing falls through' },
  { stat: '3×', label: 'new hire satisfaction', sub: 'vs manual process' },
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

export default function HROnboardingAgentPage() {
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
          <span className="text-white/55">HR Onboarding Agent</span>
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
              HR Onboarding Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Every New Hire Onboarded Without a Single Chase Email</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Guides every new hire through their onboarding journey automatically — personalised checklists, policy Q&A, system access provisioning triggers, and manager nudges — so your HR team runs a consistent, zero-drop process without manual follow-up.
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
              {['Atlas Reasoning Engine', 'Salesforce Flow', 'Slack Integration', 'Prompt Builder', 'Einstein Trust Layer', 'Data Cloud', 'Identity Provisioning'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — onboarding every new hire automatically</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Employee record' },
                { label: 'Coverage', value: '24/7 Q&A' },
                { label: 'Provisioning', value: 'Autonomous' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and onboarding new hires automatically.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'HR Onboarding Agent with role and department-based track selection',
                  'HRIS integration (Workday or BambooHR) for employee record trigger',
                  'Personalised checklist generation via Prompt Builder',
                  'System access provisioning triggers for configured identity provider and applications',
                  'Slack welcome, buddy assignment, and check-in automation',
                  'Atlas policy Q&A interface via Slack and HR portal',
                  'Manager nudge automation with configurable completion windows',
                  'Onboarding completion summary for HR dashboard',
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
                  { week: 'Week 1', title: 'Trigger + checklist', items: ['HRIS integration, employee record trigger, checklist generation, Salesforce Task configuration'] },
                  { week: 'Week 2', title: 'Provisioning + Slack', items: ['Identity provider integration, Slack welcome/buddy automation, Atlas Q&A setup'] },
                  { week: 'Week 3', title: 'Progress tracking + deploy', items: ['Manager nudges, check-in scheduling, completion summary, production deployment'] },
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
                q: 'Which HRIS systems does the integration support?',
                a: 'We configure integrations with Workday, BambooHR, and HiBob via API — these cover the majority of mid-market and enterprise HR setups. For other HRIS platforms, we use the platform\'s API or a middleware integration (Mulesoft or n8n) to feed the employee record creation event into Salesforce. The specific integration is scoped in Week 1 — if you use a platform not listed, we confirm integration feasibility before the sprint begins.',
              },
              {
                q: 'What happens if a new hire does not complete checklist items on time?',
                a: 'The agent sends automated nudges to the new hire for self-service items (reminders via Slack at configurable intervals). For items requiring manager action, the manager receives a Slack alert. If mandatory items are still incomplete after a configured grace period, HR receives an escalation flag with the specific items outstanding and the hire\'s name. No mandatory item is silently allowed to expire — the system keeps nudging until completion or HR manually overrides.',
              },
              {
                q: 'Can it handle different onboarding tracks for different departments?',
                a: 'Yes — this is a core configuration during implementation. Each department gets its own onboarding track: different checklist items, different system access requirements, different compliance training, and different policy document sets for the Q&A library. Location-based variations are also supported — US vs UK vs APAC hires have different compliance training and policy requirements configured separately.',
              },
              {
                q: 'How does the policy Q&A work in practice?',
                a: 'New hires DM the onboarding Slack bot with their question in plain English. Atlas retrieves the relevant policy section, summarises it conversationally, and responds within seconds. For questions that require nuance or HR judgement (edge cases, exceptions to policy), Atlas flags the question for HR follow-up and tells the new hire that a human will respond. All Q&A is logged — the HR team can see every question asked and every answer given, with the option to improve the policy library based on frequently asked questions.',
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
            Onboard every new hire without a single chase email.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll map your current onboarding process, identify where new hires fall through the cracks, and scope a 3-week fixed-price Agentforce implementation.
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

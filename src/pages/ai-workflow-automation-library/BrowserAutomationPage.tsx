'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Monitor } from 'lucide-react'

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

function TriggerIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
    </NodeBox>
  )
}

function TwinIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">TWN</text>
    </NodeBox>
  )
}

function VisionIcon({ cx, cy }: { cx: number; cy: number }) {
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

function ExtractIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 12} y={cy - 10} width={24} height={20} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 8} y1={cy - 4} x2={cx + 8} y2={cy - 4} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 1} x2={cx + 8} y2={cy + 1} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 6} x2={cx + 2} y2={cy + 6} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function WriteBackIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <rect x={cx - 11} y={cy - 13} width={22} height={26} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 6} y1={cy - 5} x2={cx + 6} y2={cy - 5} stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy + 1} x2={cx + 6} y2={cy + 1} stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx + 4} cy={cy + 6} r={3} fill="#8B5CF6" />
    </NodeBox>
  )
}

function LogIcon({ cx, cy }: { cx: number; cy: number }) {
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
      <marker id="arrow-browser" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-browser)'

  const nodes = [
    { cx: 65, cy: 120 },
    { cx: 195, cy: 120 },
    { cx: 325, cy: 120 },
    { cx: 455, cy: 120 },
    { cx: 585, cy: 120 },
    { cx: 715, cy: 120 },
  ]

  return (
    <svg viewBox="0 0 780 240" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {nodes.slice(0, 5).map((n, i) => (
        <path key={i} d={`M${n.cx + 28},${n.cy} H${nodes[i + 1].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      ))}

      <TriggerIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Trigger" sub="Schedule/Slack" />

      <TwinIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="Twin.so" sub="Cloud browser" />

      <VisionIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="GPT-4o Vision" sub="Screen read" />

      <ExtractIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="Data Extract" sub="AI agent" />

      <WriteBackIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="Write Back" sub="Airtable" />

      <LogIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Audit Log" sub="Slack" />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx + 20} cy={n.cy - 20} r={9} fill="#A78BFA" />
          <text x={n.cx + 20} y={n.cy - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{i + 1}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'n8n Trigger',
    toolColor: '#F65B2B',
    title: 'Workflow trigger fires on schedule or via Slack command with task parameters',
    detail: 'The workflow can be triggered two ways: on a configurable schedule (daily, weekly, or on a specific cadence) or on demand via a Slack slash command. The Slack trigger allows operators to pass parameters — specific record IDs, date ranges, or task types — without opening n8n. When triggered, n8n validates the input parameters, checks for any currently-running browser sessions to prevent conflicts, and queues the task. A Slack confirmation message is posted to the operator: "Browser task queued — estimated completion in X minutes."',
    tags: ['n8n Scheduler', 'Slack Slash Command', 'Parameter Passing', 'Conflict Detection', 'Task Queue', 'Operator Confirmation'],
  },
  {
    num: 2,
    tool: 'Twin.so',
    toolColor: '#0F172A',
    title: 'Twin.so spins up a secure isolated cloud browser, navigates and logs in using encrypted credentials',
    detail: 'Twin.so spins up a fresh, isolated cloud browser instance for each workflow run. The browser navigates to the legacy enterprise system URL. Login credentials are stored in an encrypted secrets vault (never in plaintext in n8n or code) and injected securely at runtime. Twin.so handles 2FA flows, CAPTCHA challenges, and session cookie management automatically. Each browser session is completely isolated — no shared state between runs, and the session is terminated and destroyed after the workflow completes.',
    tags: ['Twin.so', 'Cloud Browser', 'Encrypted Credentials', '2FA Handling', 'CAPTCHA Support', 'Session Isolation'],
  },
  {
    num: 3,
    tool: 'GPT-4o Vision',
    toolColor: '#10A37F',
    title: 'GPT-4o Vision reads the screen — identifying fields, tables, buttons without API documentation',
    detail: 'Twin.so takes a screenshot of the current page state and sends it to GPT-4o Vision. GPT-4o Vision analyzes the screenshot to identify: input fields and their labels, table structures and column headers, navigation buttons and menus, data values in each cell, and the current page context. This vision-based approach requires zero API documentation, zero DOM scraping, and zero reverse engineering. It reads the screen exactly as a human would — but in milliseconds and without fatigue.',
    tags: ['GPT-4o Vision', 'Screenshot Analysis', 'Field Identification', 'Table Reading', 'Zero API Docs', 'Visual Navigation'],
  },
  {
    num: 4,
    tool: 'AI Agent',
    toolColor: '#6366F1',
    title: 'AI agent executes required actions: clicking through menus, reading tables, extracting records',
    detail: 'Based on GPT-4o Vision\'s screen analysis, n8n directs Twin.so to execute specific actions: click a menu item at coordinates (x, y), type text into an identified input field, scroll down to load more table rows, select a date range from a date picker, or export a report to CSV. Each action is followed by a new screenshot and vision analysis — confirming the action succeeded before proceeding. If an unexpected modal or error appears, the workflow logs it and halts, posting an alert to Slack rather than proceeding blindly.',
    tags: ['Action Execution', 'Click Navigation', 'Form Input', 'Table Extraction', 'Error Detection', 'Step Confirmation'],
  },
  {
    num: 5,
    tool: 'Airtable / Modern System',
    toolColor: '#8B5CF6',
    title: 'Extracted data normalized and written back to Airtable or client\'s preferred modern system',
    detail: 'Extracted data from the legacy system is normalized by GPT-4o into a clean schema — dates standardized to ISO 8601, numeric fields stripped of formatting, text fields trimmed and encoded consistently. The normalized data is written to Airtable via API, or pushed directly to the client\'s preferred modern destination: a Google Sheet, a database via API, a Salesforce record update, or a webhook to any receiving endpoint. Data validation runs before write to flag any records that appear malformed or incomplete.',
    tags: ['Data Normalization', 'ISO 8601 Dates', 'Airtable Write', 'Salesforce Push', 'Google Sheets', 'Data Validation'],
  },
  {
    num: 6,
    tool: 'Slack Audit Log',
    toolColor: '#4A154B',
    title: 'Full audit log posted to Slack with screenshots of each action taken — every run is reviewable',
    detail: 'After the workflow completes, n8n compiles a complete audit package: a summary of all actions taken, screenshots at each key step, the raw data extracted, the normalized output written to the destination, and a run duration timestamp. This is posted to a designated Slack channel as a structured message with attachments. Every action is logged — nothing happens silently. If a run is ever questioned by the enterprise client\'s IT or compliance team, the full audit trail is available and exportable. Runs are stored for 90 days by default.',
    tags: ['Slack Audit Log', 'Screenshot Archive', 'Action Timeline', 'Compliance Trail', '90-Day Retention', 'Exportable Logs'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Twin.so', role: 'Cloud browser', color: '#0F172A', desc: 'Spins up isolated cloud browser sessions per run. Handles login, 2FA, CAPTCHA, and session management without local browser setup.' },
  { name: 'GPT-4o Vision', role: 'Screen reader', color: '#10A37F', desc: 'Reads screenshots to identify fields, tables, and buttons. Requires zero API documentation or DOM access — pure visual navigation.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Connects triggers to Twin.so, routes Vision analysis to action execution, manages error handling, and coordinates data write.' },
  { name: 'Airtable', role: 'Data destination', color: '#FFB347', desc: 'Primary write destination for normalized data extracted from legacy systems. Configurable schema per enterprise client.' },
  { name: 'Python', role: 'Data processing', color: '#3776AB', desc: 'Handles complex data normalization, format conversion, and validation before writing to the destination system.' },
  { name: 'Slack', role: 'Audit + triggers', color: '#4A154B', desc: 'On-demand workflow triggers via slash command. Full audit log with screenshots posted after every run. Alert on any failures.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '0', label: 'IT tickets required', sub: 'no API access needed' },
  { stat: '100%', label: 'audit trail', sub: 'every run logged' },
  { stat: 'Any', label: 'legacy system', sub: 'if it has a UI' },
  { stat: 'Days', label: '→ Minutes', sub: 'per data task' },
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

export default function BrowserAutomationPage() {
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
          <span className="text-white/55">Browser-Based No-API Automation for Legacy Enterprise Clients</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Browser-Based No-API<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Automation for Legacy Enterprise</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Enterprise clients (finance, corporate) deny API access for security reasons. Browser-based automation bypasses the need entirely — GPT-4o Vision reads the screen like a human, Twin.so acts on it, and every run is fully audited.
            </motion.p>

            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Twin.so', 'n8n', 'GPT-4o', 'Slack', 'Airtable', 'Python'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Automate my legacy system <ArrowRight size={15} />
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

          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — works on any system with a UI</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'API needed', value: 'Zero' },
                { label: 'Audit trail', value: '100% logged' },
                { label: 'IT tickets', value: 'None' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why enterprise API access is a permanent blocker</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Monitor, title: 'Enterprise IT security policies deny API access — and that never changes', desc: 'Finance and corporate IT teams lock down API access by policy. Getting an API key approved requires months of security review, legal sign-off, and compliance documentation. For ongoing operational tasks, that process is simply not viable.' },
            { icon: Monitor, title: 'Staff spend hours per week manually copying data between legacy and modern systems', desc: 'Without automation, humans navigate through clunky legacy UIs, read data from tables, and manually re-enter it into modern platforms. This is error-prone, time-consuming, and completely unnecessary — the data exists, it just can\'t be accessed programmatically.' },
            { icon: Monitor, title: 'No audit trail means legacy system tasks are undocumentable and unreviewable', desc: 'Manual data extraction leaves no record of what was accessed, when, by whom, or whether it was accurate. Browser-based automation with screenshot logging creates a complete, reviewable audit trail that actually improves compliance versus manual processes.' },
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
              This is the actual workflow Kovil AI engineers can build and deploy — not a diagram. Here is what runs inside every node.
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
                Kovil AI engineers scope, build, test and deploy this browser automation workflow end-to-end. No IT engagement required from the client — the workflow works with their existing UI.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Twin.so cloud browser configuration and credential vault setup',
                  'GPT-4o Vision screen analysis workflow for target legacy system',
                  'Action execution scripts for each required operation type',
                  'Error handling and halt logic for unexpected page states',
                  'Data normalization pipeline to clean schema for destination',
                  'Airtable write workflow with data validation layer',
                  'Slack audit log with screenshot archiving and 90-day retention',
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
                  { week: 'Week 1', title: 'Browser + Vision', items: ['Twin.so setup + GPT-4o Vision screen mapping of target system'] },
                  { week: 'Week 2', title: 'Actions + extraction', items: ['Action execution scripts + error handling + data extraction logic'] },
                  { week: 'Week 3–4', title: 'Write + audit + deploy', items: ['Data normalization + Airtable write + Slack audit log + full deployment'] },
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
              { q: 'How does Twin.so work without API access?', a: "Twin.so deploys a secure isolated cloud browser that navigates web interfaces exactly as a human would — moving the mouse, clicking buttons, reading text on screen, filling forms, and scrolling through data tables. It does not require API documentation, credentials sharing beyond login details, or any changes to the enterprise system. From the legacy system's perspective, it sees a normal human browser session." },
              { q: 'Is this approach secure for enterprise clients?', a: "Yes. Twin.so runs in an isolated cloud environment separate from the agency's infrastructure. Login credentials are stored in an encrypted secrets vault, not in n8n directly. Every session is ephemeral — the browser instance is destroyed after the task completes. A full screenshot audit log is maintained for compliance and review. The enterprise client's IT team does not need to open firewall ports or grant any backend access." },
              { q: 'What types of legacy systems can this automate?', a: "Any system accessible via a web browser can be automated: legacy ERP systems, government databases, insurance portals, financial compliance platforms, custom-built intranets without APIs, and proprietary CRM systems from the 2000s. If a human can log in and use it through a browser, Twin.so with GPT-4o Vision can replicate that workflow." },
              { q: 'How does GPT-4o Vision know what to click without API documentation?', a: "GPT-4o Vision receives a screenshot of the current page state and a task description in plain English (e.g., 'Find the Q3 report in the Reports section and download it as CSV'). It identifies the relevant UI elements from the visual layout — buttons, menus, input fields, table headers — and instructs Twin.so where to click and what to type. No documentation, no selectors, no code changes required." },
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
          <Monitor size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Automate any legacy system. Zero IT tickets.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will review your legacy system UI, scope the Twin.so browser workflow, and define the data extraction and write-back logic — fixed price, zero delivery risk.
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

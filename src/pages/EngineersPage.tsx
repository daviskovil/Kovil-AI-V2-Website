'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Download, ChevronRight, CheckCircle2 } from 'lucide-react'
import { engineers, type Engineer, type Domain } from '@/src/data/engineers'

// ─── Domain config ─────────────────────────────────────────────────────────

const DOMAINS: { key: Domain | 'all'; label: string; short: string }[] = [
  { key: 'all',              label: 'All Profiles',     short: 'All'       },
  { key: 'ai-engineering',   label: 'AI Engineering',   short: 'AI Eng.'   },
  { key: 'data-engineering', label: 'Data Engineering', short: 'Data Eng.' },
  { key: 'ml-engineering',   label: 'ML Engineering',   short: 'ML Eng.'   },
  { key: 'data-science',     label: 'Data Science',     short: 'Data Sci.' },
]

const DOMAIN_COLOR: Record<Domain, string> = {
  'ai-engineering':   '#FF4F00',
  'data-engineering': '#3B82F6',
  'ml-engineering':   '#A855F7',
  'data-science':     '#10B981',
}

const DOMAIN_LABEL: Record<Domain, string> = {
  'ai-engineering':   'AI Engineering',
  'data-engineering': 'Data Engineering',
  'ml-engineering':   'ML Engineering',
  'data-science':     'Data Science',
}

const AVAIL_CONFIG: Record<Engineer['availability'], { label: string; dot: string; badge: string }> = {
  'now':      { label: 'Available Now',           dot: '#22C55E', badge: 'bg-green-500/10  border border-green-500/25  text-green-400'  },
  '1-week':   { label: 'Available in 1 Week',     dot: '#3B82F6', badge: 'bg-blue-500/10   border border-blue-500/25   text-blue-400'   },
  '2-weeks':  { label: 'Available in 2 Weeks',    dot: '#F59E0B', badge: 'bg-amber-500/10  border border-amber-500/25  text-amber-400'  },
  '2h-day':   { label: 'Available 2 hrs / day',   dot: '#A855F7', badge: 'bg-purple-500/10 border border-purple-500/25 text-purple-400' },
  '20h-week': { label: 'Available 20 hrs / week', dot: '#EC4899', badge: 'bg-pink-500/10   border border-pink-500/25   text-pink-400'   },
}

// ─── SVG Avatar Icons ──────────────────────────────────────────────────────

function MaleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="32" cy="20" r="11" fill={color} opacity="0.15" />
      <circle cx="32" cy="20" r="11" stroke={color} strokeWidth="2.5" />
      <path
        d="M12 58c0-11.046 8.954-20 20-20s20 8.954 20 20"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
        fill={color} fillOpacity="0.08"
      />
      <path d="M27 38.5 L32 44 L37 38.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

function FemaleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="32" cy="20" r="11" fill={color} opacity="0.15" />
      <circle cx="32" cy="20" r="11" stroke={color} strokeWidth="2.5" />
      <path d="M21.5 15.5 Q32 8 42.5 15.5" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path
        d="M18 58 C18 47 24 40 32 38 C40 40 46 47 46 58"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"
        fill={color} fillOpacity="0.08"
      />
      <path d="M22 50 Q32 54 42 50" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

// ─── Engineer Card ─────────────────────────────────────────────────────────

function EngineerCard({ eng, onClick }: { eng: Engineer; onClick: () => void }) {
  const color = DOMAIN_COLOR[eng.domain]
  const avail = AVAIL_CONFIG[eng.availability]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.32 }}
      onClick={onClick}
      className="group relative rounded-2xl border border-white/[0.07] bg-[#111111] overflow-hidden cursor-pointer
                 transition-all duration-300 hover:border-white/[0.14] select-none"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
    >
      {/* Hover radial glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 0%, ${color}14, transparent 65%)` }}
      />

      {/* Top accent stripe */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}55)` }}
      />

      {/* Top glow wash */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{ background: `linear-gradient(180deg, ${color}0D 0%, transparent 100%)` }}
      />

      <div className="relative pt-7 pb-5 px-5 flex flex-col gap-4">

        {/* Avatar + name */}
        <div className="flex items-center gap-4">
          <div
            className="w-[62px] h-[62px] rounded-[14px] flex-shrink-0 flex items-center justify-center p-2.5"
            style={{
              background: `linear-gradient(145deg, ${color}1C, ${color}07)`,
              border: `1.5px solid ${color}32`,
              boxShadow: `0 4px 18px ${color}20`,
            }}
          >
            {eng.gender === 'female' ? <FemaleIcon color={color} /> : <MaleIcon color={color} />}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[1.3rem] font-bold leading-tight tracking-tight text-white truncate">
              {eng.name}
            </h3>
            <p className="text-[0.73rem] font-semibold mt-0.5 leading-snug truncate" style={{ color }}>
              {eng.title}
            </p>
            <p className="text-[0.68rem] text-white/35 mt-0.5 font-medium">
              {eng.yearsExp} yrs · {DOMAIN_LABEL[eng.domain]}
            </p>
          </div>
        </div>

        {/* Availability */}
        <span className={`inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-[3px] text-[11px] font-semibold ${avail.badge}`}>
          <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ background: avail.dot }} />
          {avail.label}
        </span>

        {/* Bio — 2 line clamp */}
        <p className="text-[0.75rem] text-white/42 leading-relaxed line-clamp-2">
          {eng.bio}
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap gap-1.5">
          {eng.skills.slice(0, 4).map(s => (
            <span
              key={s}
              className="rounded px-2 py-[3px] text-[10px] text-white/50 border border-white/[0.09] bg-white/[0.04]"
            >
              {s}
            </span>
          ))}
          {eng.skills.length > 4 && (
            <span className="rounded px-2 py-[3px] text-[10px] text-white/25 border border-white/[0.05]">
              +{eng.skills.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <span className="text-[11px] text-white/30 font-medium truncate max-w-[120px]">
            {eng.engagementType[0]}
          </span>
          <span
            className="flex items-center gap-1 text-[12px] font-semibold group-hover:gap-1.5 transition-all"
            style={{ color }}
          >
            View Profile
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </div>
    </motion.div>
  )
}

// ─── Modal ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-3">
      {children}
    </p>
  )
}

function EngineerModal({ eng, onClose }: { eng: Engineer; onClose: () => void }) {
  const color = DOMAIN_COLOR[eng.domain]
  const avail = AVAIL_CONFIG[eng.availability]

  const handleDownload = () => {
    document.body.classList.add('kovil-printing')
    window.print()
    document.body.classList.remove('kovil-printing')
  }

  return (
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        id="kv-print-target"
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.09] bg-[#0F0F0F]"
        style={{ boxShadow: `0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)` }}
        onClick={e => e.stopPropagation()}
      >
        {/* Accent stripe */}
        <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${color}, ${color}50)` }} />
        {/* Top glow */}
        <div className="absolute inset-x-0 top-0 h-48 pointer-events-none" style={{ background: `linear-gradient(180deg, ${color}0E 0%, transparent 100%)` }} />

        {/* Header */}
        <div className="relative flex items-start justify-between px-7 pt-8 pb-5">
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div
              className="w-[76px] h-[76px] rounded-2xl flex-shrink-0 p-3"
              style={{
                background: `linear-gradient(145deg, ${color}20, ${color}07)`,
                border: `1.5px solid ${color}35`,
                boxShadow: `0 8px 32px ${color}28`,
              }}
            >
              {eng.gender === 'female' ? <FemaleIcon color={color} /> : <MaleIcon color={color} />}
            </div>

            <div>
              <h2 className="text-[1.65rem] font-bold text-white leading-tight tracking-tight">{eng.name}</h2>
              <p className="text-sm font-semibold mt-0.5" style={{ color }}>{eng.title}</p>
              <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${avail.badge}`}>
                  <span className="w-[6px] h-[6px] rounded-full" style={{ background: avail.dot }} />
                  {avail.label}
                </span>
                <span className="text-[11px] text-white/35">{eng.yearsExp} years experience</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 ml-4 flex-shrink-0">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-bold bg-[#FF4F00] text-white hover:bg-[#e64600] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/35 hover:text-white hover:bg-white/[0.07] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 pb-8 space-y-6">

          {/* Bio */}
          <p className="text-[0.84rem] text-white/55 leading-relaxed">{eng.bio}</p>

          {/* Highlights */}
          <section>
            <SectionLabel>Key Highlights</SectionLabel>
            <ul className="space-y-2.5">
              {eng.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[0.82rem] text-white/60 leading-relaxed">
                  <CheckCircle2 className="w-[15px] h-[15px] mt-0.5 flex-shrink-0" style={{ color }} />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section>
            <SectionLabel>Core Skills</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {eng.skills.map(s => (
                <span key={s} className="rounded-lg px-2.5 py-1 text-[12px] font-medium text-white/60 border border-white/[0.09] bg-white/[0.04]">
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="grid grid-cols-2 gap-3">
              {(
                [
                  ['Languages',  eng.stack.languages],
                  ['Frameworks', eng.stack.frameworks],
                  ['Cloud',      eng.stack.cloud],
                  ['Tools',      eng.stack.tools],
                ] as [string, string[]][]
              ).map(([cat, items]) => (
                <div key={cat} className="rounded-xl p-3.5 bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/28 mb-2">{cat}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(it => (
                      <span key={it} className="rounded px-1.5 py-[2px] text-[11px] text-white/50 border border-white/[0.07] bg-white/[0.02]">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Engagement + Education */}
          <div className="grid grid-cols-2 gap-4">
            <section>
              <SectionLabel>Engagement</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {eng.engagementType.map(e => (
                  <span
                    key={e}
                    className="rounded-full px-2.5 py-[3px] text-[11px] font-medium border"
                    style={{ color, borderColor: `${color}40`, background: `${color}0C` }}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </section>
            <section>
              <SectionLabel>Education</SectionLabel>
              <p className="text-[12px] text-white/50 leading-snug">{eng.education}</p>
            </section>
          </div>

          {/* Certifications */}
          {eng.certifications.length > 0 && (
            <section>
              <SectionLabel>Certifications</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {eng.certifications.map(c => (
                  <span key={c} className="rounded-lg px-2.5 py-1 text-[11px] text-white/55 border border-white/[0.08] bg-white/[0.04]">
                    {c}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div
            className="rounded-2xl p-5 text-center"
            style={{ background: `linear-gradient(135deg, ${color}10, ${color}04)`, border: `1px solid ${color}22` }}
          >
            <p className="text-[0.88rem] font-semibold text-white mb-1">
              Interested in {eng.name.split(' ')[0]}?
            </p>
            <p className="text-[0.75rem] text-white/40 mb-4">
              Let&rsquo;s talk about how they can join your team — typically within days.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: color }}
            >
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function EngineersPage() {
  const [activeDomain, setActiveDomain] = useState<Domain | 'all'>('all')
  const [selected, setSelected]         = useState<Engineer | null>(null)

  const filtered = useMemo(
    () => activeDomain === 'all' ? engineers : engineers.filter(e => e.domain === activeDomain),
    [activeDomain],
  )

  return (
    <>
      {/* Print CSS — hides everything except the open modal */}
      <style>{`
        @media print {
          body.kovil-printing > *           { display: none !important; }
          body.kovil-printing #kv-print-target {
            display: block !important;
            position: static !important;
            box-shadow: none !important;
            max-height: none !important;
            overflow: visible !important;
            border: none !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-[#090909]">

        {/* ── Page header ─────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5
                            bg-[#FF4F00]/10 border border-[#FF4F00]/25 text-[#FF4F00]
                            text-[11px] font-bold uppercase tracking-widest">
              Vetted Talent · Direct Access
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Available{' '}
              <span className="text-[#FF4F00]">AI &amp; Data</span>
              {' '}Engineers
            </h1>

            <p className="text-[0.9rem] text-white/45 leading-relaxed">
              Senior engineers, ready to deploy. Browse by domain, view full profiles, and get in touch in minutes.
            </p>
          </motion.div>

          {/* ── Domain filter tabs ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex items-center gap-2 mt-10 flex-wrap justify-center"
          >
            {DOMAINS.map(d => {
              const isActive    = activeDomain === d.key
              const domainColor = d.key !== 'all' ? DOMAIN_COLOR[d.key as Domain] : '#FF4F00'
              return (
                <button
                  key={d.key}
                  onClick={() => setActiveDomain(d.key as Domain | 'all')}
                  className="rounded-xl px-4 py-2 text-[13px] font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? { background: `${domainColor}18`, border: `1px solid ${domainColor}55`, color: domainColor }
                      : { background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.40)' }
                  }
                >
                  <span className="hidden sm:inline">{d.label}</span>
                  <span className="sm:hidden">{d.short}</span>
                </button>
              )
            })}
          </motion.div>

          <p className="text-center text-[12px] text-white/25 mt-4 font-medium">
            {filtered.length} profile{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* ── Card grid ────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map(eng => (
                <EngineerCard key={eng.id} eng={eng} onClick={() => setSelected(eng)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* ── Modal ─────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <EngineerModal eng={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

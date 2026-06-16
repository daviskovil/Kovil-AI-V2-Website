'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Download, ChevronRight, Briefcase, GraduationCap, Award } from 'lucide-react'
import { engineers } from '../data/engineers'
import type { Engineer } from '../data/engineers'
import { openCalendly } from '../lib/calendly'

// ─── Domain & Availability metadata ──────────────────────────────────────────

const DOMAINS = [
  { key: 'all',               label: 'All Engineers' },
  { key: 'ai-engineering',    label: 'AI Engineering' },
  { key: 'data-engineering',  label: 'Data Engineering' },
  { key: 'ml-engineering',    label: 'ML Engineering' },
  { key: 'data-science',      label: 'Data Science' },
] as const

const DOMAIN_META: Record<string, { color: string; bg: string; label: string }> = {
  'ai-engineering':   { color: '#FF4F00', bg: '#FFF3EE', label: 'AI Engineering' },
  'data-engineering': { color: '#B45309', bg: '#FFFBEB', label: 'Data Engineering' },
  'ml-engineering':   { color: '#6D28D9', bg: '#F5F3FF', label: 'ML Engineering' },
  'data-science':     { color: '#0369A1', bg: '#EFF6FF', label: 'Data Science' },
}

const AVAILABILITY_META: Record<string, { label: string; dot: string }> = {
  'available':      { label: 'Available Now',        dot: '#22C55E' },
  'available-soon': { label: 'Available in 4 Weeks', dot: '#F59E0B' },
  'interviewing':   { label: 'In Final Interviews',  dot: '#8B5CF6' },
}

const STACK_LABELS: Record<string, string> = {
  languages:  'Languages',
  frameworks: 'Frameworks & Libraries',
  cloud:      'Cloud & Platforms',
  tools:      'Tools & Infrastructure',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EngineersPage() {
  const [activeDomain, setActiveDomain] = useState('all')
  const [selected, setSelected]         = useState<Engineer | null>(null)

  const filtered = engineers.filter(
    e => activeDomain === 'all' || e.domain === activeDomain
  )

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  /* Keyboard close */
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelected(null)
  }, [])
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [handleKey])

  /* PDF download — visibility trick keeps it dependency-free */
  const handleDownload = () => {
    document.body.classList.add('kovil-printing')
    window.print()
    setTimeout(() => document.body.classList.remove('kovil-printing'), 800)
  }

  return (
    <>
      {/* ── Print stylesheet ─────────────────────────────── */}
      <style>{`
        @media print {
          body.kovil-printing > *                { visibility: hidden; }
          body.kovil-printing #kv-print-target,
          body.kovil-printing #kv-print-target * { visibility: visible; }
          body.kovil-printing #kv-print-target   {
            position: fixed; inset: 0;
            overflow: visible;
            background: white;
            padding: 32px 40px;
            font-family: system-ui, sans-serif;
          }
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <main className="min-h-screen bg-background">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-28 pb-14 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-accent mb-4">
              Kovil AI · Engineering Talent
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-foreground mb-5">
              Available Engineers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A curated selection of elite AI and Data engineers available for fixed-price
              projects and staff augmentation engagements. Every engineer on this page
              has been vetted and placed by the Kovil AI team.
            </p>
          </motion.div>
        </section>

        {/* ── Filter bar ───────────────────────────────────── */}
        <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-3.5 flex gap-2 overflow-x-auto no-scrollbar">
            {DOMAINS.map(d => (
              <button
                key={d.key}
                onClick={() => setActiveDomain(d.key)}
                className={`
                  px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap
                  transition-all duration-200 focus:outline-none
                  ${activeDomain === d.key
                    ? 'bg-foreground text-background shadow-sm'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/60'
                  }
                `}
              >
                {d.label}
                {d.key !== 'all' && (
                  <span className="ml-1.5 opacity-50 text-xs">
                    {engineers.filter(e => e.domain === d.key).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Profile grid ─────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((eng, i) => (
                <EngineerCard
                  key={eng.id}
                  engineer={eng}
                  index={i}
                  onClick={() => setSelected(eng)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              No engineers available in this category right now.
            </div>
          )}
        </section>

      </main>

      {/* ── Modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <EngineerModal
            engineer={selected}
            onClose={() => setSelected(null)}
            onDownload={handleDownload}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Engineer Card ────────────────────────────────────────────────────────────

function EngineerCard({
  engineer: e,
  index,
  onClick,
}: {
  engineer: Engineer
  index: number
  onClick: () => void
}) {
  const dm = DOMAIN_META[e.domain]
  const av = AVAILABILITY_META[e.availability]

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      layout
      onClick={onClick}
      className="group relative bg-card border border-border rounded-2xl p-6 cursor-pointer
        flex flex-col transition-all duration-300
        hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1.5
        hover:border-transparent"
      style={{ '--hover-shadow': dm.color } as React.CSSProperties}
    >
      {/* Domain chip */}
      <span
        className="self-start inline-flex items-center px-2.5 py-1 rounded-full
          text-[10.5px] font-bold tracking-wide mb-5"
        style={{ backgroundColor: dm.bg, color: dm.color }}
      >
        {dm.label}
      </span>

      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center
          text-lg font-bold text-white mb-4 shadow-sm"
        style={{ backgroundColor: dm.color }}
      >
        {e.codename[0]}
      </div>

      {/* Identity */}
      <h3 className="text-base font-bold text-foreground mb-0.5 leading-snug">
        {e.codename}
      </h3>
      <p className="text-xs text-muted-foreground mb-4 leading-snug">
        {e.title}
      </p>

      {/* Top skills */}
      <div className="flex flex-wrap gap-1.5 mb-auto">
        {e.skills.slice(0, 3).map(s => (
          <span
            key={s}
            className="text-[10.5px] font-medium px-2 py-0.5 rounded-md
              bg-muted text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
        <div className="flex items-center gap-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: av.dot }}
          />
          <span className="text-[10.5px] text-muted-foreground font-medium">
            {av.label}
          </span>
        </div>
        <span className="text-[10.5px] font-semibold text-muted-foreground">
          {e.yearsExp} yrs
        </span>
      </div>

      {/* Hover caret */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ChevronRight className="w-3.5 h-3.5" style={{ color: dm.color }} />
      </div>
    </motion.article>
  )
}

// ─── Engineer Modal ───────────────────────────────────────────────────────────

function EngineerModal({
  engineer: e,
  onClose,
  onDownload,
}: {
  engineer: Engineer
  onClose: () => void
  onDownload: () => void
}) {
  const dm = DOMAIN_META[e.domain]
  const av = AVAILABILITY_META[e.availability]

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm no-print"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel wrapper — keeps modal centred */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 no-print pointer-events-none">
        <motion.div
          id="kv-print-target"
          role="dialog"
          aria-modal="true"
          aria-label={`Profile: ${e.codename}`}
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-background rounded-3xl shadow-2xl shadow-black/20
            w-full max-w-5xl max-h-[92vh] overflow-hidden pointer-events-auto flex flex-col"
          onClick={ev => ev.stopPropagation()}
        >

          {/* ── Header bar ── */}
          <header className="flex items-center justify-between gap-4 px-8 py-5 border-b border-border shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center
                  text-sm font-bold text-white shrink-0"
                style={{ backgroundColor: dm.color }}
              >
                {e.codename[0]}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h2 className="text-base font-bold text-foreground">{e.codename}</h2>
                  <span
                    className="text-[10.5px] font-bold px-2 py-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: dm.bg, color: dm.color }}
                  >
                    {dm.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{e.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 no-print">
              <button
                onClick={onDownload}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold
                  bg-foreground text-background rounded-full hover:opacity-80
                  transition-opacity"
              >
                <Download className="w-3 h-3" />
                Download Profile
              </button>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  text-muted-foreground hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* ── Body ── */}
          <div className="overflow-y-auto flex-1 overscroll-contain">
            <div className="grid lg:grid-cols-[240px_1fr] lg:divide-x divide-border">

              {/* ── Left sidebar ── */}
              <aside className="p-7 space-y-7 border-b lg:border-b-0">

                {/* Status */}
                <div>
                  <SideLabel>Status</SideLabel>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: av.dot }}
                    />
                    <span className="text-sm font-semibold text-foreground">
                      {av.label}
                    </span>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <SideLabel>Experience</SideLabel>
                  <p className="mt-1.5">
                    <span className="text-3xl font-bold text-foreground">{e.yearsExp}</span>
                    <span className="text-sm font-medium text-muted-foreground ml-1.5">years</span>
                  </p>
                </div>

                {/* Engagement */}
                <div>
                  <SideLabel>Engagement Types</SideLabel>
                  <div className="mt-1.5 space-y-1.5">
                    {e.engagementType.map(t => (
                      <div key={t} className="flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3 text-muted-foreground shrink-0" />
                        <span className="text-xs font-medium text-foreground">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core skills */}
                <div>
                  <SideLabel>Core Skills</SideLabel>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {e.skills.map(s => (
                      <span
                        key={s}
                        className="text-[11px] font-semibold px-2 py-1 rounded-lg"
                        style={{ backgroundColor: dm.bg, color: dm.color }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <SideLabel>Education</SideLabel>
                  <div className="mt-1.5 flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground leading-snug">{e.education}</p>
                  </div>
                </div>

                {/* Certifications */}
                {e.certifications.length > 0 && (
                  <div>
                    <SideLabel>Certifications</SideLabel>
                    <div className="mt-1.5 space-y-1.5">
                      {e.certifications.map(c => (
                        <div key={c} className="flex items-start gap-1.5">
                          <Award className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
                          <p className="text-xs text-muted-foreground leading-snug">{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </aside>

              {/* ── Right content ── */}
              <div className="p-7 lg:p-8 space-y-8">

                {/* About */}
                <section>
                  <SectionLabel>About</SectionLabel>
                  <p className="mt-3 text-[15px] text-foreground leading-relaxed">
                    {e.bio}
                  </p>
                </section>

                {/* Technical Stack */}
                <section>
                  <SectionLabel>Technical Stack</SectionLabel>
                  <div className="mt-3 grid sm:grid-cols-2 gap-5">
                    {(Object.entries(e.stack) as [keyof typeof e.stack, string[]][]).map(
                      ([cat, items]) => (
                        <div key={cat}>
                          <p className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                            {STACK_LABELS[cat] ?? cat}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {items.map(item => (
                              <span
                                key={item}
                                className="text-[11px] font-medium px-2.5 py-1
                                  bg-muted rounded-lg text-foreground"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </section>

                {/* Key Highlights */}
                <section>
                  <SectionLabel>Key Project Highlights</SectionLabel>
                  <div className="mt-3 space-y-3.5">
                    {e.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center
                            text-[10px] font-bold text-white shrink-0 mt-0.5"
                          style={{ backgroundColor: dm.color }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-sm text-foreground leading-snug">{h}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <section className="pt-2 border-t border-border no-print">
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in working with {e.codename}?
                  </p>
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                      bg-accent text-white font-semibold text-sm
                      hover:opacity-90 transition-opacity"
                  >
                    Discuss This Engineer
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </section>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

// ─── Small helpers ────────────────────────────────────────────────────────────

function SideLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
      {children}
    </p>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9.5px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
      {children}
    </p>
  )
}

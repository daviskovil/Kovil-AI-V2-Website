'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Download, CheckCircle2, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { engineers, type Engineer, type Domain } from '@/src/data/engineers'

// ─── Constants ─────────────────────────────────────────────────────────────

const ORANGE = '#FF4F00'

const DOMAINS: { key: Domain | 'all'; label: string }[] = [
  { key: 'all',              label: 'All' },
  { key: 'ai-engineering',   label: 'AI Engineering' },
  { key: 'data-engineering', label: 'Data Engineering' },
  { key: 'ml-engineering',   label: 'ML Engineering' },
  { key: 'data-science',     label: 'Data Science' },
]

const DOMAIN_LABEL: Record<Domain, string> = {
  'ai-engineering':   'AI Engineering',
  'data-engineering': 'Data Engineering',
  'ml-engineering':   'ML Engineering',
  'data-science':     'Data Science',
}

// Black / orange / white availability badges only
const AVAIL: Record<Engineer['availability'], { label: string; cls: string; dot: string }> = {
  'now':      { label: 'Available Now',           cls: 'bg-[#FF4F00] text-white',                                 dot: 'bg-white animate-pulse'  },
  '1-week':   { label: 'Available in 1 Week',     cls: 'border border-[#FF4F00] text-[#FF4F00] bg-[#FF4F00]/5',  dot: 'bg-[#FF4F00]'            },
  '2-weeks':  { label: 'Available in 2 Weeks',    cls: 'border border-black/25 text-black/55',                   dot: 'bg-black/40'             },
  '2h-day':   { label: 'Available 2 hrs / day',   cls: 'bg-black text-white',                                    dot: 'bg-white'                },
  '20h-week': { label: 'Available 20 hrs / week', cls: 'border border-black/20 text-black/45',                   dot: 'bg-black/35'             },
}

// ─── Gender SVG Icons ──────────────────────────────────────────────────────

function MaleIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <circle cx="28" cy="18" r="10" fill={ORANGE} opacity="0.15" />
      <circle cx="28" cy="18" r="10" stroke={ORANGE} strokeWidth="2.5" />
      <path d="M10 52c0-9.941 8.059-18 18-18s18 8.059 18 18"
        stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round"
        fill={ORANGE} fillOpacity="0.09" />
      {/* tie/collar hint */}
      <path d="M24 34.5 L28 40 L32 34.5" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    </svg>
  )
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <circle cx="28" cy="18" r="10" fill={ORANGE} opacity="0.15" />
      <circle cx="28" cy="18" r="10" stroke={ORANGE} strokeWidth="2.5" />
      {/* hair arc */}
      <path d="M18.5 13.5 Q28 6 37.5 13.5" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
      {/* dress silhouette */}
      <path d="M14 52 C14 41 20 34 28 32 C36 34 42 41 42 52"
        stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round"
        fill={ORANGE} fillOpacity="0.09" />
      <path d="M18 46 Q28 50 38 46" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

// ─── Print Profile (shown only on @media print) ────────────────────────────

function PrintProfile({ eng }: { eng: Engineer }) {
  const avail = AVAIL[eng.availability]
  return (
    <div
      id="kovil-pdf-doc"
      style={{
        display: 'none',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: '#fff',
        color: '#111',
        width: '100%',
        padding: '40px 48px 32px',
        boxSizing: 'border-box',
      }}
    >
      {/* ─── Header bar ─── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/kovil-logo-symbol.webp" alt="Kovil AI" style={{ height: 36, width: 36, borderRadius: 6 }} />
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: '#111' }}>Kovil AI</span>
        </div>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FF4F00' }}>
          Candidate Profile · Confidential
        </span>
      </div>

      {/* Orange rule */}
      <div style={{ height: 3, background: '#FF4F00', borderRadius: 2, marginBottom: 24 }} />

      {/* ─── Candidate headline ─── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.5px', color: '#111', lineHeight: 1.1 }}>
            {eng.name}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#FF4F00', marginTop: 4 }}>{eng.title}</div>
          <div style={{ fontSize: 11, color: '#666', marginTop: 3 }}>
            {DOMAIN_LABEL[eng.domain]} · {eng.yearsExp} years experience
          </div>
        </div>
        {/* Availability badge */}
        <div style={{
          padding: '6px 14px',
          borderRadius: 999,
          background: eng.availability === 'now' ? '#FF4F00' : eng.availability === '2h-day' ? '#111' : 'transparent',
          border: eng.availability === 'now' || eng.availability === '2h-day' ? 'none' : '1.5px solid #FF4F00',
          color: eng.availability === 'now' || eng.availability === '2h-day' ? '#fff' : '#FF4F00',
          fontSize: 11,
          fontWeight: 700,
          marginTop: 4,
          whiteSpace: 'nowrap' as const,
        }}>
          {avail.label}
        </div>
      </div>

      {/* ─── Body: 2-column grid ─── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>

        {/* Left column */}
        <div>
          {/* Profile Summary */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 6 }}>Profile Summary</div>
            <div style={{ fontSize: 11, color: '#444', lineHeight: 1.7 }}>{eng.bio}</div>
          </div>

          {/* Core Skills */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 8 }}>Core Skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5 }}>
              {eng.skills.map(s => (
                <span key={s} style={{ fontSize: 10, padding: '3px 9px', border: '1px solid #ddd', borderRadius: 4, color: '#333' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 8 }}>Technology Stack</div>
            {([
              ['Languages',  eng.stack.languages],
              ['Frameworks', eng.stack.frameworks],
              ['Cloud',      eng.stack.cloud],
              ['Tools',      eng.stack.tools],
            ] as [string, string[]][]).map(([cat, items]) => (
              <div key={cat} style={{ display: 'flex', gap: 8, marginBottom: 5, fontSize: 11 }}>
                <span style={{ fontWeight: 700, color: '#111', width: 80, flexShrink: 0 }}>{cat}</span>
                <span style={{ color: '#555' }}>{items.join(', ')}</span>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 6 }}>Education</div>
            <div style={{ fontSize: 11, color: '#444', lineHeight: 1.6 }}>{eng.education}</div>
          </div>
        </div>

        {/* Right column */}
        <div>
          {/* Key Achievements */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 8 }}>Key Achievements</div>
            {eng.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 14, color: '#FF4F00', lineHeight: 1, marginTop: 1, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 11, color: '#333', lineHeight: 1.65 }}>{h}</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          {eng.certifications.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 8 }}>Certifications</div>
              {eng.certifications.map(c => (
                <div key={c} style={{ display: 'flex', gap: 8, marginBottom: 5, fontSize: 11, color: '#444' }}>
                  <span style={{ color: '#FF4F00' }}>✓</span> {c}
                </div>
              ))}
            </div>
          )}

          {/* Engagement */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FF4F00', marginBottom: 8 }}>Engagement Options</div>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5 }}>
              {eng.engagementType.map(e => (
                <span key={e} style={{ fontSize: 10, padding: '3px 10px', border: '1.5px solid #FF4F00', borderRadius: 999, color: '#FF4F00', fontWeight: 600 }}>{e}</span>
              ))}
            </div>
          </div>

          {/* CTA box */}
          <div style={{ background: '#FFF5F2', border: '1.5px solid #FF4F00', borderRadius: 10, padding: '16px 18px' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#111', marginBottom: 4 }}>
              Ready to hire {eng.name.split(' ')[0]}?
            </div>
            <div style={{ fontSize: 11, color: '#666', marginBottom: 10, lineHeight: 1.5 }}>
              Get in touch and we can have {eng.gender === 'male' ? 'him' : 'her'} embedded with your team within days — not weeks.
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#FF4F00' }}>
              kovil.ai  ·  Get in Touch
            </div>
          </div>
        </div>
      </div>

      {/* ─── Footer ─── */}
      <div style={{ height: 1, background: '#eee', margin: '24px 0 14px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: '#999' }}>
          Kovil AI · <span style={{ color: '#FF4F00' }}>kovil.ai</span>
        </span>
        <span style={{ fontSize: 10, color: '#bbb' }}>Confidential · For recipient use only</span>
      </div>
    </div>
  )
}

// ─── Engineer Card ─────────────────────────────────────────────────────────

function EngineerCard({ eng, onClick }: { eng: Engineer; onClick: () => void }) {
  const avail = AVAIL[eng.availability]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28 }}
      onClick={onClick}
      className="group bg-white rounded-[20px] overflow-hidden cursor-pointer select-none
                 transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)' }}
      whileHover={{ boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.05)' }}
    >
      {/* ── Orange gradient top section ── */}
      <div
        className="h-[108px] relative overflow-hidden rounded-t-[20px]"
        style={{ background: `linear-gradient(145deg, #FF6A00 0%, #FF4F00 50%, #CC2200 100%)` }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        {/* Domain label top-right */}
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">
            {DOMAIN_LABEL[eng.domain]}
          </span>
        </div>
      </div>

      {/* ── Overlapping circular avatar ── */}
      <div className="flex justify-center -mt-10 relative z-10">
        <div
          className="w-[80px] h-[80px] rounded-full flex items-center justify-center p-[14px] bg-white"
          style={{
            boxShadow: '0 0 0 4px white, 0 4px 16px rgba(0,0,0,0.12)',
            background: '#FFF5F0',
          }}
        >
          {eng.gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-5 pb-5 pt-3 text-center">

        {/* Name */}
        <h3 className="text-[1.25rem] font-bold tracking-tight text-black leading-tight">
          {eng.name}
        </h3>

        {/* Title in orange */}
        <p className="text-[0.7rem] font-semibold mt-0.5 leading-snug" style={{ color: ORANGE }}>
          {eng.title}
        </p>

        {/* Years */}
        <p className="text-[0.65rem] text-black/35 mt-0.5 font-medium">
          {eng.yearsExp} yrs experience
        </p>

        {/* Availability pill */}
        <div className="flex justify-center mt-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-[4px] text-[10.5px] font-semibold ${avail.cls}`}>
            <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${avail.dot}`} />
            {avail.label}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.07] my-3.5" />

        {/* Skill chips */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {eng.skills.slice(0, 3).map(s => (
            <span
              key={s}
              className="rounded-md px-2 py-[3px] text-[10px] border border-black/[0.10] text-black/50 bg-black/[0.02] font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="mt-4 w-full py-[9px] rounded-xl text-[12.5px] font-bold text-white transition-all duration-200
                     hover:brightness-110 active:scale-[0.98]"
          style={{ background: ORANGE }}
        >
          View Profile
        </button>

      </div>
    </motion.div>
  )
}

// ─── Section label helper ──────────────────────────────────────────────────

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] mb-2.5" style={{ color: ORANGE }}>
      {children}
    </p>
  )
}

// ─── Modal ─────────────────────────────────────────────────────────────────

function EngineerModal({ eng, onClose }: { eng: Engineer; onClose: () => void }) {
  const avail = AVAIL[eng.availability]

  const handlePDF = () => {
    document.body.classList.add('kovil-printing')
    window.print()
    document.body.classList.remove('kovil-printing')
  }

  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Print-only professional document — rendered with data, hidden on screen */}
      <PrintProfile eng={eng} />

      {/* ── Modal panel ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        className="relative w-[95vw] max-w-[1320px] bg-white rounded-3xl overflow-hidden"
        style={{
          height: 'min(88vh, 820px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Orange top stripe */}
        <div className="absolute inset-x-0 top-0 h-[3px] z-10" style={{ background: ORANGE }} />

        {/* ── Header ── */}
        <div className="flex items-center gap-5 px-7 pt-7 pb-5 border-b border-black/[0.07]">

          {/* Avatar */}
          <div
            className="w-[68px] h-[68px] rounded-full flex-shrink-0 p-[13px]"
            style={{
              background: '#FFF5F0',
              boxShadow: `0 0 0 3px white, 0 4px 16px rgba(255,79,0,0.15)`,
              border: `2px solid ${ORANGE}25`,
            }}
          >
            {eng.gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
          </div>

          {/* Name + meta */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[1.7rem] font-bold tracking-tight text-black leading-tight">{eng.name}</h2>
            <p className="text-[0.8rem] font-semibold mt-0.5" style={{ color: ORANGE }}>{eng.title}</p>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[10.5px] font-semibold ${avail.cls}`}>
                <span className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${avail.dot}`} />
                {avail.label}
              </span>
              <span className="text-[11px] text-black/38 font-medium">
                {eng.yearsExp} yrs · {DOMAIN_LABEL[eng.domain]}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={handlePDF}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-bold text-white transition-all hover:brightness-110"
              style={{ background: ORANGE }}
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl text-black/30 hover:text-black hover:bg-black/[0.05] transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Body — 3 columns, no scroll ── */}
        <div
          className="grid px-6 pb-6 pt-5 gap-x-6"
          style={{
            gridTemplateColumns: '1fr 1.1fr 0.95fr',
            height: 'calc(100% - 105px)',
          }}
        >

          {/* ── Column 1: Bio, Skills, Certs, Education ── */}
          <div className="flex flex-col gap-5 min-h-0 overflow-hidden">

            {/* Bio */}
            <div>
              <SLabel>Profile Summary</SLabel>
              <p className="text-[11.5px] text-black/55 leading-[1.7] line-clamp-5">{eng.bio}</p>
            </div>

            {/* Skills */}
            <div>
              <SLabel>Core Skills</SLabel>
              <div className="flex flex-wrap gap-1.5">
                {eng.skills.map(s => (
                  <span
                    key={s}
                    className="rounded-md px-2 py-[3px] text-[10px] font-medium border border-black/[0.10] text-black/55 bg-black/[0.02]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SLabel>Certifications</SLabel>
              <ul className="space-y-1.5">
                {eng.certifications.map(c => (
                  <li key={c} className="flex items-start gap-2 text-[11px] text-black/55">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-[1px]" style={{ color: ORANGE }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <SLabel>Education</SLabel>
              <p className="text-[11px] text-black/50 leading-relaxed">{eng.education}</p>
            </div>

          </div>

          {/* ── Column 2: Highlights + Engagement ── */}
          <div
            className="flex flex-col gap-5 min-h-0 overflow-hidden pl-6 pr-6"
            style={{ borderLeft: '1px solid rgba(0,0,0,0.07)', borderRight: '1px solid rgba(0,0,0,0.07)' }}
          >

            {/* Highlights */}
            <div className="flex-1">
              <SLabel>Key Achievements</SLabel>
              <ul className="space-y-3">
                {eng.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[11.5px] text-black/60 leading-[1.65]">
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white mt-[1px]"
                      style={{ background: ORANGE }}
                    >
                      {i + 1}
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Engagement */}
            <div>
              <SLabel>Engagement Options</SLabel>
              <div className="flex flex-wrap gap-2">
                {eng.engagementType.map(e => (
                  <span
                    key={e}
                    className="rounded-full px-3 py-[4px] text-[10.5px] font-semibold border"
                    style={{ color: ORANGE, borderColor: `${ORANGE}40`, background: `${ORANGE}08` }}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ── Column 3: Stack + CTA ── */}
          <div className="flex flex-col gap-5 min-h-0 overflow-hidden">

            {/* Tech Stack */}
            <div className="flex-1">
              <SLabel>Technology Stack</SLabel>
              <div className="space-y-3">
                {([
                  ['Languages',  eng.stack.languages],
                  ['Frameworks', eng.stack.frameworks],
                  ['Cloud',      eng.stack.cloud],
                  ['Tools',      eng.stack.tools],
                ] as [string, string[]][]).map(([cat, items]) => (
                  <div key={cat}>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-black/30 mb-1">{cat}</p>
                    <div className="flex flex-wrap gap-1">
                      {items.map(it => (
                        <span
                          key={it}
                          className="rounded px-1.5 py-[2px] text-[10px] text-black/55 border border-black/[0.09] bg-black/[0.02]"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div
              className="rounded-2xl p-4 text-center"
              style={{ background: '#FFF5F2', border: `1.5px solid ${ORANGE}30` }}
            >
              <p className="text-[13px] font-bold text-black mb-1">
                Interested in {eng.name.split(' ')[0]}?
              </p>
              <p className="text-[10.5px] text-black/45 mb-3 leading-relaxed">
                We can have {eng.gender === 'male' ? 'him' : 'her'} embedded with your team within days.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-[12px] font-bold text-white transition-all hover:brightness-110"
                style={{ background: ORANGE }}
              >
                Get in Touch
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

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
      {/* ── Print CSS ── */}
      <style>{`
        @media print {
          body.kovil-printing * { visibility: hidden !important; }
          body.kovil-printing #kovil-pdf-doc {
            visibility: visible !important;
            display: block !important;
            position: fixed !important;
            top: 0; left: 0;
            width: 100%;
            background: #fff !important;
          }
          body.kovil-printing #kovil-pdf-doc * { visibility: visible !important; }
        }
      `}</style>

      {/* ── White page ── */}
      <div className="min-h-screen bg-white">

        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[11px] font-bold uppercase tracking-widest"
              style={{ background: `${ORANGE}10`, border: `1px solid ${ORANGE}30`, color: ORANGE }}
            >
              Vetted Talent · Direct Access
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
              Available{' '}
              <span style={{ color: ORANGE }}>AI &amp; Data</span>
              {' '}Engineers
            </h1>

            <p className="text-[0.92rem] text-black/45 leading-relaxed">
              Senior engineers, ready to deploy. Browse by domain, view full profiles, and get in touch in minutes.
            </p>
          </motion.div>

          {/* ── Filter tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex items-center gap-2 mt-10 flex-wrap justify-center"
          >
            {DOMAINS.map(d => {
              const isActive = activeDomain === d.key
              return (
                <button
                  key={d.key}
                  onClick={() => setActiveDomain(d.key as Domain | 'all')}
                  className="rounded-xl px-5 py-2 text-[13px] font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? { background: '#111', color: '#fff', border: '1px solid #111' }
                      : { background: 'transparent', color: 'rgba(0,0,0,0.45)', border: '1px solid rgba(0,0,0,0.15)' }
                  }
                >
                  {d.label}
                </button>
              )
            })}
          </motion.div>

          <p className="text-center text-[11.5px] text-black/25 mt-4 font-medium">
            {filtered.length} profile{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* ── Card grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(eng => (
                <EngineerCard key={eng.id} eng={eng} onClick={() => setSelected(eng)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && <EngineerModal eng={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}

'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Download, CheckCircle2, ChevronRight } from 'lucide-react'
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

const AVAIL: Record<Engineer['availability'], { label: string; cls: string; dot: string }> = {
  'now':      { label: 'Available Now',           cls: 'bg-[#111] text-white',                            dot: 'bg-[#4ade80] animate-pulse' },
  '1-week':   { label: 'Available in 1 Week',     cls: 'border border-black/20 text-black/60 bg-[#F5F5F5]', dot: 'bg-black/25'               },
  '2-weeks':  { label: 'Available in 2 Weeks',    cls: 'border border-black/15 text-black/45 bg-[#F8F8F8]', dot: 'bg-black/20'               },
  '2h-day':   { label: 'Available 2 hrs / day',   cls: 'border border-black/20 text-black/55 bg-[#F5F5F5]', dot: 'bg-black/25'               },
  '20h-week': { label: 'Available 20 hrs / week', cls: 'border border-black/12 text-black/40 bg-[#F8F8F8]', dot: 'bg-black/18'               },
}

// ─── Gender SVG Icons ──────────────────────────────────────────────────────

const ICON_COLOR = '#555'

function MaleIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <circle cx="28" cy="18" r="10" fill={ICON_COLOR} opacity="0.10" />
      <circle cx="28" cy="18" r="10" stroke={ICON_COLOR} strokeWidth="2.5" />
      <path d="M10 52c0-9.941 8.059-18 18-18s18 8.059 18 18"
        stroke={ICON_COLOR} strokeWidth="2.5" strokeLinecap="round"
        fill={ICON_COLOR} fillOpacity="0.07" />
      <path d="M24 34.5 L28 40 L32 34.5" stroke={ICON_COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    </svg>
  )
}

function FemaleIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
      <circle cx="28" cy="18" r="10" fill={ICON_COLOR} opacity="0.10" />
      <circle cx="28" cy="18" r="10" stroke={ICON_COLOR} strokeWidth="2.5" />
      <path d="M18.5 13.5 Q28 6 37.5 13.5" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35" />
      <path d="M14 52 C14 41 20 34 28 32 C36 34 42 41 42 52"
        stroke={ICON_COLOR} strokeWidth="2.5" strokeLinecap="round"
        fill={ICON_COLOR} fillOpacity="0.07" />
      <path d="M18 46 Q28 50 38 46" stroke={ICON_COLOR} strokeWidth="1.8" strokeLinecap="round" opacity="0.30" />
    </svg>
  )
}

// ─── PDF generator (opens a new window, prints it, closes) ────────────────

function openPrintWindow(eng: Engineer) {
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const logoSrc = `${origin}/kovil-logo-symbol.webp`

  const availLabel = AVAIL[eng.availability].label

  const badgeBg    = eng.availability === 'now'    ? '#FF4F00'
                   : eng.availability === '2h-day' ? '#111111'
                   : 'transparent'
  const badgeBorder = (eng.availability === 'now' || eng.availability === '2h-day')
                   ? 'none' : '1.5px solid #FF4F00'
  const badgeColor  = (eng.availability === 'now' || eng.availability === '2h-day')
                   ? '#fff' : '#FF4F00'

  const highlightRows = eng.highlights.map((h, i) => `
    <div style="display:flex;gap:10px;margin-bottom:11px;align-items:flex-start;">
      <div style="min-width:22px;height:22px;border-radius:50%;background:#FF4F00;color:#fff;
                  font-size:10px;font-weight:800;display:flex;align-items:center;
                  justify-content:center;flex-shrink:0;margin-top:1px;">${i + 1}</div>
      <p style="font-size:11.5px;color:#333;line-height:1.65;margin:0;">${h}</p>
    </div>`).join('')

  const certRows = eng.certifications.map(c => `
    <div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:7px;">
      <span style="color:#FF4F00;font-size:13px;line-height:1;margin-top:1px;flex-shrink:0;">✓</span>
      <span style="font-size:11px;color:#444;line-height:1.55;">${c}</span>
    </div>`).join('')

  const skillChips = eng.skills.map(s =>
    `<span style="display:inline-block;font-size:10px;padding:3px 9px;border:1px solid #ddd;
                  border-radius:5px;color:#444;margin:0 4px 4px 0;">${s}</span>`
  ).join('')

  const stackRows = [
    ['Languages',  eng.stack.languages],
    ['Frameworks', eng.stack.frameworks],
    ['Cloud',      eng.stack.cloud],
    ['Tools',      eng.stack.tools],
  ].map(([cat, items]) => `
    <div style="display:flex;gap:8px;margin-bottom:6px;font-size:11px;">
      <span style="font-weight:700;color:#111;width:82px;flex-shrink:0;">${cat}</span>
      <span style="color:#555;">${(items as string[]).join(', ')}</span>
    </div>`).join('')

  const engagementBadges = eng.engagementType.map(e =>
    `<span style="display:inline-block;font-size:10px;padding:3px 11px;
                  border:1.5px solid #FF4F00;border-radius:999px;
                  color:#FF4F00;font-weight:600;margin:0 5px 5px 0;">${e}</span>`
  ).join('')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Kovil AI — ${eng.name} — Candidate Profile</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    background: #fff; color: #111;
    padding: 36px 48px 28px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  @media print {
    body { padding: 28px 40px 22px; }
    @page { margin: 0; size: A4; }
  }
</style>
</head>
<body>

<!-- ── TOP BAR ── -->
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
  <div style="display:flex;align-items:center;gap:10px;">
    <img src="${logoSrc}" alt="Kovil AI" style="height:38px;width:38px;border-radius:7px;object-fit:cover;">
    <span style="font-size:22px;font-weight:800;letter-spacing:-0.4px;color:#111;">Kovil AI</span>
  </div>
  <span style="font-size:9.5px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#FF4F00;">
    Candidate Profile &nbsp;·&nbsp; Confidential
  </span>
</div>

<!-- Orange rule -->
<div style="height:3px;background:#FF4F00;border-radius:2px;margin-bottom:22px;"></div>

<!-- ── CANDIDATE HEADLINE ── -->
<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:24px;">
  <div>
    <div style="font-size:32px;font-weight:800;letter-spacing:-0.6px;color:#111;line-height:1.05;">${eng.name}</div>
    <div style="font-size:14px;font-weight:600;color:#FF4F00;margin-top:5px;">${eng.title}</div>
    <div style="font-size:11px;color:#777;margin-top:3px;">${DOMAIN_LABEL[eng.domain]} &nbsp;·&nbsp; ${eng.yearsExp} years experience</div>
  </div>
  <div style="padding:7px 16px;border-radius:999px;background:${badgeBg};border:${badgeBorder};
              color:${badgeColor};font-size:11px;font-weight:700;margin-top:4px;white-space:nowrap;">
    ${availLabel}
  </div>
</div>

<!-- ── 2-COL BODY ── -->
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0 44px;">

  <!-- LEFT COLUMN -->
  <div>

    <!-- Profile Summary -->
    <div style="margin-bottom:20px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:7px;">Profile Summary</div>
      <p style="font-size:11.5px;color:#444;line-height:1.75;">${eng.bio}</p>
    </div>

    <!-- Core Skills -->
    <div style="margin-bottom:20px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:7px;">Core Skills</div>
      <div>${skillChips}</div>
    </div>

    <!-- Technology Stack -->
    <div style="margin-bottom:20px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:8px;">Technology Stack</div>
      ${stackRows}
    </div>

    <!-- Education -->
    <div>
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:7px;">Education</div>
      <p style="font-size:11.5px;color:#444;line-height:1.65;">${eng.education}</p>
    </div>

  </div>

  <!-- RIGHT COLUMN -->
  <div>

    <!-- Key Achievements -->
    <div style="margin-bottom:20px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:9px;">Key Achievements</div>
      ${highlightRows}
    </div>

    <!-- Certifications -->
    ${eng.certifications.length > 0 ? `
    <div style="margin-bottom:20px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:8px;">Certifications</div>
      ${certRows}
    </div>` : ''}

    <!-- Engagement -->
    <div style="margin-bottom:24px;">
      <div style="font-size:9px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;
                  color:#FF4F00;margin-bottom:8px;">Engagement Options</div>
      ${engagementBadges}
    </div>

    <!-- CTA box -->
    <div style="background:#FFF5F2;border:1.5px solid #FF4F00;border-radius:12px;padding:18px 20px;">
      <div style="font-size:14px;font-weight:800;color:#111;margin-bottom:5px;">
        Ready to hire ${eng.name.split(' ')[0]}?
      </div>
      <p style="font-size:11px;color:#666;line-height:1.6;margin-bottom:12px;">
        Get in touch and we can have ${eng.gender === 'male' ? 'him' : 'her'} embedded
        with your team within days — not weeks.
      </p>
      <div style="font-size:12px;font-weight:700;color:#FF4F00;">
        kovil.ai &nbsp;·&nbsp; hello@kovil.ai
      </div>
    </div>

  </div>
</div>

<!-- ── FOOTER ── -->
<div style="height:1px;background:#e8e8e8;margin:26px 0 14px;"></div>
<div style="display:flex;align-items:center;justify-content:space-between;">
  <span style="font-size:10px;color:#aaa;">
    Kovil AI &nbsp;·&nbsp; <span style="color:#FF4F00;">kovil.ai</span>
  </span>
  <span style="font-size:10px;color:#ccc;">Confidential &nbsp;·&nbsp; For recipient use only</span>
</div>

</body>
</html>`

  const pw = window.open('', '_blank', 'width=860,height=700')
  if (!pw) return
  pw.document.open()
  pw.document.write(html)
  pw.document.close()
  // Small delay ensures images load before print dialog opens
  pw.addEventListener('load', () => {
    setTimeout(() => {
      pw.focus()
      pw.print()
    }, 400)
  })
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
      {/* ── Dark top section ── */}
      <div
        className="h-[100px] relative overflow-hidden rounded-t-[20px]"
        style={{ background: '#1A1A1A' }}
      >
        {/* Subtle dot texture */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        {/* Domain label */}
        <div className="absolute top-3 right-3.5">
          <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40">
            {DOMAIN_LABEL[eng.domain]}
          </span>
        </div>
      </div>

      {/* ── Overlapping circular avatar ── */}
      <div className="flex justify-center -mt-10 relative z-10">
        <div
          className="w-[80px] h-[80px] rounded-full flex items-center justify-center p-[15px]"
          style={{
            background: '#F5F5F5',
            boxShadow: '0 0 0 4px white, 0 4px 14px rgba(0,0,0,0.10)',
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

        {/* Title */}
        <p className="text-[0.7rem] font-semibold mt-0.5 leading-snug text-black/50">
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
                     hover:bg-[#333] active:scale-[0.98] bg-[#111]"
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
    <p className="text-[9.5px] font-bold uppercase tracking-[0.14em] mb-2.5 text-black/35">
      {children}
    </p>
  )
}

// ─── Modal ─────────────────────────────────────────────────────────────────

function EngineerModal({ eng, onClose }: { eng: Engineer; onClose: () => void }) {
  const avail = AVAIL[eng.availability]

  const handlePDF = () => openPrintWindow(eng)

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
        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-[2px] z-10 bg-black/[0.06]" />


        {/* ── Header ── */}
        <div className="flex items-center gap-5 px-7 pt-7 pb-5 border-b border-black/[0.07]">

          {/* Avatar */}
          <div
            className="w-[68px] h-[68px] rounded-full flex-shrink-0 p-[13px]"
            style={{
              background: '#F0F0F0',
              boxShadow: '0 0 0 3px white, 0 4px 12px rgba(0,0,0,0.08)',
              border: '1.5px solid rgba(0,0,0,0.08)',
            }}
          >
            {eng.gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
          </div>

          {/* Name + meta */}
          <div className="flex-1 min-w-0">
            <h2 className="text-[1.7rem] font-bold tracking-tight text-black leading-tight">{eng.name}</h2>
            <p className="text-[0.8rem] font-semibold mt-0.5 text-black/50">{eng.title}</p>
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
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-bold text-white transition-all hover:bg-[#333] bg-[#111]"
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
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-[1px] text-black/30" />
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
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white mt-[1px] bg-[#111]"
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
                    className="rounded-full px-3 py-[4px] text-[10.5px] font-semibold border border-black/15 text-black/50 bg-black/[0.02]"
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
            <div className="rounded-2xl p-4 text-center bg-[#F8F8F8] border border-black/[0.06]">
              <p className="text-[13px] font-bold text-black mb-1">
                Interested in {eng.name.split(' ')[0]}?
              </p>
              <p className="text-[10.5px] text-black/40 mb-3 leading-relaxed">
                We can have {eng.gender === 'male' ? 'him' : 'her'} embedded with your team within days.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-[12px] font-bold text-white transition-all bg-[#111] hover:bg-[#333]"
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
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-[11px] font-semibold uppercase tracking-widest border border-black/10 text-black/40">
              Vetted Talent · Direct Access
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
              Available AI &amp; Data Engineers
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

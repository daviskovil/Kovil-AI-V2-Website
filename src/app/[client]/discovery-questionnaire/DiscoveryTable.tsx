'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import type {
  DiscoveryConfig,
  DiscoveryAnswers,
  QuestionAnswer,
  QuestionPriority,
} from '@/src/types/questionnaire'

// ── Utilities ──────────────────────────────────────────────────────────────────

function generateSessionId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function lsKey(slug: string, suffix: string) {
  return `kovil-discovery-${slug}-${suffix}`
}

function emptyAnswer(): QuestionAnswer {
  return { response: '', notes: '' }
}

// ── Priority badge ─────────────────────────────────────────────────────────────

const PRIORITY_BADGE: Record<QuestionPriority, string> = {
  'Must-have': 'bg-[#FF4F00] text-white font-bold',
  Important: 'bg-amber-100 text-amber-800 border border-amber-300 font-semibold',
  'Nice-to-have': 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-medium',
}

function PriorityBadge({ priority }: { priority: QuestionPriority }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] whitespace-nowrap ${PRIORITY_BADGE[priority]}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
        priority === 'Must-have' ? 'bg-white' :
        priority === 'Important' ? 'bg-amber-500' : 'bg-emerald-500'
      }`} />
      {priority}
    </span>
  )
}

// ── Clickable answer cell ──────────────────────────────────────────────────────

function AnswerCell({ value, placeholder, onClick }: {
  value: string
  placeholder: string
  onClick: () => void
}) {
  const isEmpty = !value.trim()
  return (
    <div
      onClick={onClick}
      className={`min-h-[72px] rounded cursor-pointer transition-all duration-150 group relative ${
        isEmpty
          ? 'border border-dashed border-gray-300 bg-gray-50 hover:border-[#FF4F00] hover:bg-orange-50/20'
          : 'border border-[#E5E2D9] bg-white hover:border-[#FF4F00] hover:shadow-sm'
      }`}
    >
      <div className="p-3 h-full flex items-start">
        {isEmpty ? (
          <span className="text-xs text-gray-400 group-hover:text-[#FF4F00] transition-colors leading-relaxed">
            {placeholder}
          </span>
        ) : (
          <div className="flex items-start justify-between gap-2 w-full">
            <p className="text-sm text-[#0A0A0A] leading-relaxed whitespace-pre-wrap line-clamp-5 flex-1">
              {value}
            </p>
            <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#FF4F00] flex-shrink-0 mt-0.5 transition-colors"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Popup editor ───────────────────────────────────────────────────────────────

function EditorPopup({ questionId, field, questionText, initialValue, onSave, onClose }: {
  questionId: string
  field: 'response' | 'notes'
  questionText: string
  initialValue: string
  onSave: (value: string) => void
  onClose: () => void
}) {
  const [value, setValue] = useState(initialValue)
  const [saved, setSaved] = useState(false)
  const taRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const ta = taRef.current
    if (!ta) return
    ta.focus()
    ta.setSelectionRange(ta.value.length, ta.value.length)
  }, [])

  function insertAtCursor(text: string) {
    const ta = taRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const next = value.slice(0, start) + text + value.slice(end)
    setValue(next)
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(start + text.length, start + text.length)
    })
  }

  function insertBulletLine() {
    const ta = taRef.current
    if (!ta) return
    const start = ta.selectionStart
    const before = value.slice(0, start)
    const lineStart = before.lastIndexOf('\n') + 1
    const lineContent = value.slice(lineStart, start)
    if (lineContent.trim() === '') {
      const next = value.slice(0, lineStart) + '• ' + value.slice(lineStart)
      setValue(next)
      requestAnimationFrame(() => {
        ta.focus()
        ta.setSelectionRange(lineStart + 2, lineStart + 2)
      })
    } else {
      insertAtCursor('\n• ')
    }
  }

  function insertNumberLine() {
    const ta = taRef.current
    if (!ta) return
    const start = ta.selectionStart
    const before = value.slice(0, start)
    const lineStart = before.lastIndexOf('\n') + 1
    const lineContent = value.slice(lineStart, start)
    if (lineContent.trim() === '') {
      const next = value.slice(0, lineStart) + '1. ' + value.slice(lineStart)
      setValue(next)
      requestAnimationFrame(() => {
        ta.focus()
        ta.setSelectionRange(lineStart + 3, lineStart + 3)
      })
    } else {
      insertAtCursor('\n1. ')
    }
  }

  function wrapBold() {
    const ta = taRef.current
    if (!ta) return
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const selected = value.slice(start, end)
    if (selected) {
      const next = value.slice(0, start) + '**' + selected + '**' + value.slice(end)
      setValue(next)
    } else {
      insertAtCursor('**bold**')
    }
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => {
      onSave(value)
    }, 500)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Escape') { e.preventDefault(); onClose() }
    if (e.key === 'Tab') { e.preventDefault(); handleSave() }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); handleSave() }
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') { e.preventDefault(); wrapBold() }
    if (e.key === 'Enter' && !e.shiftKey) {
      const ta = taRef.current!
      const start = ta.selectionStart
      const before = value.slice(0, start)
      const lastLine = before.slice(before.lastIndexOf('\n') + 1)
      const bulletMatch = lastLine.match(/^(•\s|(\d+)\.\s)/)
      if (bulletMatch) {
        e.preventDefault()
        const prefix = bulletMatch[2] ? `${parseInt(bulletMatch[2]) + 1}. ` : '• '
        insertAtCursor('\n' + prefix)
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={onClose} />

      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col border border-[#E5E2D9] overflow-hidden"
        style={{ maxHeight: '82vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A0A0A]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs font-bold bg-[#FF4F00] text-white px-2.5 py-1 rounded flex-shrink-0">
              {questionId}
            </span>
            <span className="text-sm font-semibold text-white capitalize">
              {field === 'response' ? 'Response' : 'Notes / Follow-up'}
            </span>
          </div>
          <button onClick={onClose}
            className="text-white/40 hover:text-white text-2xl leading-none w-7 h-7 flex items-center justify-center rounded hover:bg-white/10 transition-colors">
            ×
          </button>
        </div>

        {/* Question preview */}
        <div className="px-5 py-2.5 bg-[#FAF8F4] border-b border-[#E5E2D9]">
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 italic">{questionText}</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-0.5 px-3 py-1.5 border-b border-[#E5E2D9] bg-white">
          {[
            { label: '• Bullet', action: insertBulletLine, title: 'Bullet list' },
            { label: '1. Number', action: insertNumberLine, title: 'Numbered list' },
          ].map(btn => (
            <button key={btn.label} onClick={btn.action} title={btn.title}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded hover:bg-[#EBE8E0] text-[#0A0A0A] transition-colors">
              {btn.label}
            </button>
          ))}
          <div className="w-px h-4 bg-[#E5E2D9] mx-1" />
          <button onClick={wrapBold} title="Bold (Ctrl+B)"
            className="px-3 py-1.5 text-xs font-bold rounded hover:bg-[#EBE8E0] text-[#0A0A0A] transition-colors">
            B
          </button>
          <button onClick={() => insertAtCursor('\n──────────────\n')} title="Divider line"
            className="px-3 py-1.5 text-xs font-medium rounded hover:bg-[#EBE8E0] text-[#0A0A0A] transition-colors">
            — Line
          </button>
          <div className="flex-1" />
          <span className="text-[11px] text-gray-400 pr-2">{value.length} chars</span>
        </div>

        {/* Textarea */}
        <textarea
          ref={taRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            field === 'response'
              ? 'Type your response here…\n\nTip: Use the toolbar for bullet points or numbered lists.'
              : 'Add optional notes, follow-up questions, or clarifications…'
          }
          className="flex-1 px-5 py-4 resize-none text-sm text-[#0A0A0A] leading-relaxed focus:outline-none placeholder:text-gray-400"
          style={{ minHeight: '200px', fontFamily: 'inherit' }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#E5E2D9] bg-[#FAF8F4]">
          <span className="text-[11px] text-gray-400">
            Ctrl+Enter = save · Ctrl+B = bold · Esc = cancel
          </span>
          <div className="flex items-center gap-2">
            <button onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-[#E5E2D9] text-gray-600 hover:bg-[#EBE8E0] transition-colors font-medium">
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saved}
              className={`flex items-center gap-2 px-5 py-2 text-sm rounded-lg font-bold transition-all duration-200 ${
                saved
                  ? 'bg-emerald-500 text-white scale-95'
                  : 'bg-[#FF4F00] text-white hover:bg-[#e64600]'
              }`}
            >
              {saved ? (
                <>
                  {/* Checkmark */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Saved!
                </>
              ) : (
                <>
                  {/* Floppy disk save icon */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save Response
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Save status indicator ──────────────────────────────────────────────────────

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

function SaveIndicator({ status, lastSavedAt }: { status: SaveStatus; lastSavedAt: Date | null }) {
  if (status === 'saving') return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />Saving…
    </div>
  )
  if (status === 'saved') return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <span className="w-2 h-2 rounded-full bg-emerald-500" />
      All changes saved
      {lastSavedAt && <span className="text-gray-400">· {lastSavedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>}
    </div>
  )
  if (status === 'error') return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-2 h-2 rounded-full bg-red-500" />
      <span className="text-red-500">Server sync failed — answers stored locally</span>
    </div>
  )
  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <span className="w-2 h-2 rounded-full bg-gray-300" />Auto-saves every 30 s
    </div>
  )
}

// ── Tab button ─────────────────────────────────────────────────────────────────

function TabBtn({ label, count, done, active, onClick, allDone }: {
  label: string; count: number; done?: number
  active: boolean; onClick: () => void; allDone?: boolean
}) {
  return (
    <button onClick={onClick}
      className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
        active ? 'border-[#FF4F00] text-[#FF4F00]'
               : 'border-transparent text-gray-500 hover:text-[#0A0A0A] hover:border-gray-300'
      }`}
    >
      {label}
      {done !== undefined ? (
        <span className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
          allDone ? 'bg-emerald-100 text-emerald-700'
          : active ? 'bg-orange-100 text-[#FF4F00]'
          : 'bg-gray-100 text-gray-500'
        }`}>{done}/{count}</span>
      ) : (
        <span className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
          allDone ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
        }`}>{count}</span>
      )}
    </button>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function DiscoveryTable({ config }: { config: DiscoveryConfig }) {
  const [activeTab, setActiveTab] = useState('all')
  const [view, setView] = useState<'questions' | 'tracker'>('questions')
  const [answers, setAnswers] = useState<DiscoveryAnswers>({})
  const [sessionId, setSessionId] = useState('')
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null)
  const [purposeOpen, setPurposeOpen] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [popup, setPopup] = useState<{ questionId: string; field: 'response' | 'notes'; questionText: string } | null>(null)
  const [popupInitial, setPopupInitial] = useState('')

  const slug = config.clientSlug
  const allQuestions = config.tabs.flatMap(t => t.questions)
  const totalCount = allQuestions.length
  const answeredCount = allQuestions.filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length
  const mustHaveTotal = allQuestions.filter(q => q.priority === 'Must-have').length
  const mustHaveAnswered = allQuestions.filter(q => q.priority === 'Must-have' && (answers[q.id]?.response ?? '').trim().length > 0).length
  const pct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0

  // ── localStorage restore ────────────────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem(lsKey(slug, 'session'))
    const id = stored ?? generateSessionId()
    if (!stored) localStorage.setItem(lsKey(slug, 'session'), id)
    setSessionId(id)
    try {
      const sa = localStorage.getItem(lsKey(slug, 'answers'))
      if (sa) setAnswers(JSON.parse(sa))
    } catch { /* ignore */ }
  }, [slug])

  // ── Server auto-save ────────────────────────────────────────────────────────
  const serverSave = useCallback(async (currentAnswers: DiscoveryAnswers, sid: string) => {
    if (!sid) return
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/discovery/autosave', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sid, client_slug: slug, answers: currentAnswers }),
      })
      setSaveStatus(res.ok ? 'saved' : 'error')
      if (res.ok) setLastSavedAt(new Date())
    } catch { setSaveStatus('error') }
  }, [slug])

  useEffect(() => {
    if (!sessionId) return
    const iv = setInterval(() => serverSave(answers, sessionId), 30_000)
    return () => clearInterval(iv)
  }, [answers, sessionId, serverSave])

  useEffect(() => {
    const handleUnload = () => {
      if (!sessionId) return
      navigator.sendBeacon('/api/discovery/autosave',
        new Blob([JSON.stringify({ session_id: sessionId, client_slug: slug, answers })], { type: 'application/json' }))
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [answers, sessionId, slug])

  // ── Update answers ──────────────────────────────────────────────────────────
  function updateAnswer(questionId: string, field: keyof QuestionAnswer, value: string) {
    setAnswers(prev => {
      const next = { ...prev, [questionId]: { ...(prev[questionId] ?? emptyAnswer()), [field]: value } }
      localStorage.setItem(lsKey(slug, 'answers'), JSON.stringify(next))
      return next
    })
    setSaveStatus('idle')
    // Trigger immediate server save on popup close
    setTimeout(() => serverSave({ ...answers, [questionId]: { ...(answers[questionId] ?? emptyAnswer()), [field]: value } }, sessionId), 300)
  }

  function openPopup(questionId: string, field: 'response' | 'notes', questionText: string) {
    setPopupInitial(answers[questionId]?.[field] ?? '')
    setPopup({ questionId, field, questionText })
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (!sessionId) return
    setSubmitting(true); setSubmitError(null)
    try {
      const res = await fetch('/api/discovery/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, client_slug: slug, answers, config }),
      })
      if (res.ok) setSubmitted(true)
      else setSubmitError('Submission failed — please try again.')
    } catch { setSubmitError('Network error — check your connection.') }
    setSubmitting(false)
  }

  const visibleTabs = activeTab === 'all' ? config.tabs : config.tabs.filter(t => t.id === activeTab)

  // ── Thank-you ───────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-display text-3xl font-bold text-[#0A0A0A] mb-3">Questionnaire Submitted</h1>
        <p className="text-gray-500 max-w-md text-center leading-relaxed">
          Thank you — your responses have been received. The Kovil AI team will review your answers before your discovery call.
        </p>
        <p className="mt-6 text-xs text-gray-400 font-mono">Session: {sessionId}</p>
      </div>
    )
  }

  // ── Tracker view ────────────────────────────────────────────────────────────
  const TrackerView = () => (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="font-display text-xl font-bold text-[#0A0A0A] mb-1">Completion Tracker</h2>
      <p className="text-sm text-gray-500 mb-6">{answeredCount} of {totalCount} answered · {pct}% complete</p>
      <div className="bg-white rounded-xl border border-[#E5E2D9] overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0A0A0A]">
              <th className="text-left py-3 px-5 text-xs font-bold text-white uppercase tracking-wider">Section</th>
              <th className="text-center py-3 px-4 text-xs font-bold text-white uppercase tracking-wider w-20">Total</th>
              <th className="text-center py-3 px-4 text-xs font-bold text-white uppercase tracking-wider w-20">Done</th>
              <th className="text-left py-3 px-5 text-xs font-bold text-white uppercase tracking-wider w-48">Progress</th>
            </tr>
          </thead>
          <tbody>
            {config.tabs.map((tab, i) => {
              const done = tab.questions.filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length
              const p = Math.round((done / tab.questions.length) * 100)
              return (
                <tr key={tab.id}
                  className={`border-t border-[#E5E2D9] cursor-pointer hover:bg-orange-50/30 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                  onClick={() => { setActiveTab(tab.id); setView('questions') }}
                >
                  <td className="py-3.5 px-5 text-sm font-medium text-[#0A0A0A]">{tab.label}</td>
                  <td className="py-3.5 px-4 text-sm text-center text-gray-500">{tab.questions.length}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`text-sm font-bold ${done === tab.questions.length ? 'text-emerald-600' : 'text-[#0A0A0A]'}`}>{done}</span>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-[#EBE8E0] rounded-full overflow-hidden">
                        <div className="h-full bg-[#FF4F00] rounded-full transition-all duration-500" style={{ width: `${p}%` }} />
                      </div>
                      <span className={`text-xs font-semibold w-8 text-right ${done === tab.questions.length ? 'text-emerald-600' : 'text-gray-500'}`}>{p}%</span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-[#0A0A0A] bg-[#FAF8F4]">
              <td className="py-3.5 px-5 text-sm font-bold text-[#0A0A0A]">TOTAL</td>
              <td className="py-3.5 px-4 text-sm text-center font-bold">{totalCount}</td>
              <td className="py-3.5 px-4 text-center">
                <span className={`text-sm font-bold ${answeredCount === totalCount ? 'text-emerald-600' : 'text-[#0A0A0A]'}`}>{answeredCount}</span>
              </td>
              <td className="py-3.5 px-5">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-[#EBE8E0] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF4F00] rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className={`text-xs font-bold w-8 text-right ${answeredCount === totalCount ? 'text-emerald-600' : 'text-[#FF4F00]'}`}>{pct}%</span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

  // ── Main layout ─────────────────────────────────────────────────────────────
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">

      {/* ── Sticky top block: nav + title bar + tabs ───────────────────────── */}
      <div className="flex-shrink-0 sticky top-0 z-30">

        {/* 1. Black nav bar */}
        <div className="bg-[#0A0A0A] border-b-2 border-[#FF4F00]">
          <div className="flex items-center gap-4 px-5 h-12">
            {/* Logo */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded overflow-hidden border border-white/20 flex-shrink-0">
                <Image src="/kovil-logo-symbol-orange.webp" alt="Kovil AI" width={32} height={32} className="object-cover" />
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">Kovil AI</span>
            </div>

            <div className="w-px h-5 bg-white/20 flex-shrink-0" />

            {/* Nav */}
            <nav className="flex items-center gap-1">
              <button onClick={() => setView('questions')}
                className={`px-3.5 py-1.5 rounded text-sm font-semibold transition-colors ${
                  view === 'questions' ? 'bg-[#FF4F00] text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}>
                Discovery Questionnaire
              </button>
              <button onClick={() => setView('tracker')}
                className={`px-3.5 py-1.5 rounded text-sm font-medium transition-colors ${
                  view === 'tracker' ? 'bg-[#FF4F00] text-white' : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}>
                Completion Tracker
              </button>
            </nav>

            <div className="flex-1" />

            {/* Progress bar */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-36 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#FF4F00] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
              </div>
              <span className="text-xs font-semibold text-white/70 whitespace-nowrap">
                {answeredCount}/{totalCount} answered
              </span>
            </div>
          </div>
        </div>

        {/* 2. White project title bar */}
        <div className="bg-white border-b border-[#E5E2D9] px-6 py-3 flex items-center justify-between gap-6">
          <div className="min-w-0">
            <h1 className="font-display text-lg font-bold text-[#0A0A0A] leading-tight truncate">
              {config.projectTitle}
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">{config.clientName}</p>
          </div>
          {/* Stats pills */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#E5E2D9] rounded-lg px-3 py-2">
              <span className="text-xs text-gray-500">Must-have</span>
              <span className={`text-sm font-bold ${mustHaveAnswered === mustHaveTotal ? 'text-emerald-600' : 'text-[#FF4F00]'}`}>
                {mustHaveAnswered}/{mustHaveTotal}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#E5E2D9] rounded-lg px-3 py-2">
              <span className="text-xs text-gray-500">All questions</span>
              <span className="text-sm font-bold text-[#0A0A0A]">{answeredCount}/{totalCount}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#E5E2D9] rounded-lg px-3 py-2">
              <span className="text-sm font-bold text-[#FF4F00]">{pct}%</span>
              <span className="text-xs text-gray-500">complete</span>
            </div>
          </div>
        </div>

        {/* 3. Tab navigation */}
        {view === 'questions' && (
          <div className="bg-white border-b border-[#E5E2D9] overflow-x-auto shadow-sm">
            <div className="flex items-end px-5 gap-0 min-w-max">
              <TabBtn label="All Sections" count={totalCount} active={activeTab === 'all'}
                onClick={() => setActiveTab('all')} allDone={answeredCount === totalCount} />
              {config.tabs.map(tab => {
                const done = tab.questions.filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length
                return (
                  <TabBtn key={tab.id} label={tab.shortLabel} count={tab.questions.length}
                    done={done} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}
                    allDone={done === tab.questions.length} />
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Scrollable body ─────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-auto">
        {view === 'tracker' ? (
          <TrackerView />
        ) : (
          <table className="w-full border-collapse" style={{ minWidth: '960px' }}>
            {/* Column headers */}
            <thead>
              <tr className="bg-[#0A0A0A] text-white">
                <th className="py-3 px-3 text-center w-10 text-xs font-bold uppercase tracking-wider border-r border-white/10">#</th>
                <th className="py-3 px-3 text-left w-[76px] text-xs font-bold uppercase tracking-wider border-r border-white/10">ID</th>
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10" style={{ width: '36%' }}>Question</th>
                <th className="py-3 px-3 text-center w-28 text-xs font-bold uppercase tracking-wider border-r border-white/10">Priority</th>
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10" style={{ width: '26%' }}>
                  Response <span className="normal-case font-normal text-white/40">(complete this)</span>
                </th>
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider">Notes / Follow-up</th>
              </tr>
            </thead>

            <tbody>
              {visibleTabs.map((tab, tabIdx) => {
                let offset = 0
                if (activeTab === 'all') {
                  for (let i = 0; i < tabIdx; i++) offset += config.tabs[i].questions.length
                }
                const tabDone = tab.questions.filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length

                return (
                  <>
                    {/* Section divider */}
                    {activeTab === 'all' && (
                      <tr key={`sec-${tab.id}`}>
                        <td colSpan={6} className="p-0">
                          <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 border-y border-[#E5E2D9] border-l-4 border-l-[#FF4F00]">
                            <span className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">{tab.label}</span>
                            <span className="text-xs text-gray-400">{tabDone}/{tab.questions.length} answered</span>
                          </div>
                        </td>
                      </tr>
                    )}

                    {tab.questions.map((q, qi) => {
                      const rowNum = (activeTab === 'all' ? offset : 0) + qi + 1
                      const answer = answers[q.id] ?? emptyAnswer()
                      const isDone = answer.response.trim().length > 0
                      const isExpanded = purposeOpen === q.id

                      return (
                        <tr key={q.id}
                          className={`border-b border-[#E5E2D9] group transition-colors ${isDone ? 'bg-white' : 'bg-white hover:bg-orange-50/10'}`}
                        >
                          {/* # */}
                          <td className="py-4 px-3 text-center align-top w-10 border-r border-[#F0EDE8]">
                            {isDone ? (
                              <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <span className="text-xs text-gray-400 font-mono tabular-nums">{rowNum}</span>
                            )}
                          </td>

                          {/* ID */}
                          <td className="py-4 px-3 align-top w-[76px] border-r border-[#F0EDE8]">
                            <span className="inline-block text-[11px] font-mono font-bold text-gray-600 bg-[#EBE8E0] px-2 py-0.5 rounded whitespace-nowrap">
                              {q.id}
                            </span>
                          </td>

                          {/* Question */}
                          <td className="py-4 px-4 align-top border-r border-[#F0EDE8]" style={{ width: '36%' }}>
                            <p className={`text-sm leading-relaxed ${isDone ? 'text-gray-500' : 'text-[#0A0A0A] font-medium'}`}>
                              {q.question}
                            </p>
                            <button onClick={() => setPurposeOpen(isExpanded ? null : q.id)}
                              className="mt-1.5 flex items-center gap-1 text-[11px] text-[#FF4F00]/60 hover:text-[#FF4F00] transition-colors">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {isExpanded ? 'Hide' : 'Why we ask'}
                            </button>
                            {isExpanded && (
                              <p className="mt-2 text-[11px] text-gray-500 italic leading-relaxed bg-amber-50 border border-amber-100 rounded px-3 py-2">
                                {q.purpose}
                              </p>
                            )}
                            <p className="mt-1.5 text-[11px] text-gray-400">
                              Feeds → <span className="text-gray-500">{q.feedsDocument}</span>
                            </p>
                          </td>

                          {/* Priority */}
                          <td className="py-4 px-3 align-top text-center w-28 border-r border-[#F0EDE8]">
                            <PriorityBadge priority={q.priority} />
                          </td>

                          {/* Response */}
                          <td className="py-4 px-4 align-top border-r border-[#F0EDE8]" style={{ width: '26%' }}>
                            <AnswerCell
                              value={answer.response}
                              placeholder="+ Click to add response…"
                              onClick={() => openPopup(q.id, 'response', q.question)}
                            />
                          </td>

                          {/* Notes */}
                          <td className="py-4 px-4 align-top">
                            <AnswerCell
                              value={answer.notes}
                              placeholder="+ Add notes…"
                              onClick={() => openPopup(q.id, 'notes', q.question)}
                            />
                          </td>
                        </tr>
                      )
                    })}
                  </>
                )
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Bottom action bar ────────────────────────────────────────────────── */}
      {view === 'questions' && (
        <div className="flex-shrink-0 bg-white border-t border-[#E5E2D9] shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-6 py-3">
            <SaveIndicator status={saveStatus} lastSavedAt={lastSavedAt} />
            <div className="flex items-center gap-4">
              {submitError && <p className="text-xs text-red-500 max-w-xs text-right">{submitError}</p>}
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 bg-[#FF4F00] hover:bg-[#e64600] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                {submitting ? (
                  <><span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</>
                ) : (
                  <>
                    Submit Questionnaire
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Popup editor ────────────────────────────────────────────────────── */}
      {popup && (
        <EditorPopup
          questionId={popup.questionId}
          field={popup.field}
          questionText={popup.questionText}
          initialValue={popupInitial}
          onSave={value => {
            updateAnswer(popup.questionId, popup.field, value)
            setPopup(null)
          }}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  )
}

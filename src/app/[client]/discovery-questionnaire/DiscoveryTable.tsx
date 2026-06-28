'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type {
  DiscoveryConfig,
  DiscoveryAnswers,
  QuestionAnswer,
  QuestionPriority,
} from '@/src/types/questionnaire'

// ── Helpers ────────────────────────────────────────────────────────────────────

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

function autoResize(el: HTMLTextAreaElement | null) {
  if (!el) return
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

// ── Priority badge ─────────────────────────────────────────────────────────────

const PRIORITY_STYLES: Record<QuestionPriority, string> = {
  'Must-have':
    'bg-orange-50 text-orange-700 border border-orange-300 font-semibold',
  Important:
    'bg-amber-50 text-amber-700 border border-amber-300 font-medium',
  'Nice-to-have':
    'bg-emerald-50 text-emerald-700 border border-emerald-300 font-medium',
}

function PriorityBadge({ priority }: { priority: QuestionPriority }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs whitespace-nowrap ${PRIORITY_STYLES[priority]}`}
    >
      {priority}
    </span>
  )
}

// ── Auto-resize textarea ───────────────────────────────────────────────────────

function AutoTextarea({
  value,
  onChange,
  placeholder,
  className = '',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  className?: string
}) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    autoResize(ref.current)
  }, [value])

  return (
    <textarea
      ref={ref}
      rows={1}
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      onInput={() => autoResize(ref.current)}
      className={`w-full resize-none overflow-hidden bg-transparent text-sm leading-relaxed placeholder:text-gray-400 focus:outline-none ${className}`}
    />
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

type SaveStatus = 'idle' | 'saving' | 'saved' | 'error'

export default function DiscoveryTable({ config }: { config: DiscoveryConfig }) {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [answers, setAnswers] = useState<DiscoveryAnswers>({})
  const [sessionId, setSessionId] = useState<string>('')
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [purposeOpen, setPurposeOpen] = useState<string | null>(null)
  const [view, setView] = useState<'questions' | 'tracker'>('questions')

  const slug = config.clientSlug
  const allQuestions = config.tabs.flatMap(t => t.questions)
  const totalCount = allQuestions.length
  const answeredCount = allQuestions.filter(
    q => (answers[q.id]?.response ?? '').trim().length > 0
  ).length
  const mustHaveTotal = allQuestions.filter(q => q.priority === 'Must-have').length
  const mustHaveAnswered = allQuestions.filter(
    q => q.priority === 'Must-have' && (answers[q.id]?.response ?? '').trim().length > 0
  ).length

  // ── Restore from localStorage on mount ─────────────────────────────────────
  useEffect(() => {
    const storedSession = localStorage.getItem(lsKey(slug, 'session'))
    const id = storedSession ?? generateSessionId()
    if (!storedSession) localStorage.setItem(lsKey(slug, 'session'), id)
    setSessionId(id)

    const storedAnswers = localStorage.getItem(lsKey(slug, 'answers'))
    if (storedAnswers) {
      try {
        setAnswers(JSON.parse(storedAnswers))
      } catch {
        /* ignore */
      }
    }
  }, [slug])

  // ── Server auto-save ────────────────────────────────────────────────────────
  const serverSave = useCallback(
    async (currentAnswers: DiscoveryAnswers, sid: string) => {
      if (!sid) return
      setSaveStatus('saving')
      try {
        const res = await fetch('/api/discovery/autosave', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sid,
            client_slug: slug,
            answers: currentAnswers,
          }),
        })
        if (res.ok) {
          setSaveStatus('saved')
          setLastSavedAt(new Date())
        } else {
          setSaveStatus('error')
        }
      } catch {
        setSaveStatus('error')
      }
    },
    [slug]
  )

  // Save every 30 s
  useEffect(() => {
    if (!sessionId) return
    const interval = setInterval(() => serverSave(answers, sessionId), 30_000)
    return () => clearInterval(interval)
  }, [answers, sessionId, serverSave])

  // sendBeacon on tab close
  useEffect(() => {
    const handleUnload = () => {
      if (!sessionId) return
      const payload = JSON.stringify({
        session_id: sessionId,
        client_slug: slug,
        answers,
      })
      navigator.sendBeacon(
        '/api/discovery/autosave',
        new Blob([payload], { type: 'application/json' })
      )
    }
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [answers, sessionId, slug])

  // ── Answer updates ──────────────────────────────────────────────────────────
  function updateAnswer(
    questionId: string,
    field: keyof QuestionAnswer,
    value: string
  ) {
    setAnswers(prev => {
      const next = {
        ...prev,
        [questionId]: { ...(prev[questionId] ?? emptyAnswer()), [field]: value },
      }
      // Persist to localStorage immediately
      localStorage.setItem(lsKey(slug, 'answers'), JSON.stringify(next))
      return next
    })
    if (saveStatus === 'saved') setSaveStatus('idle')
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (!sessionId) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/discovery/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          client_slug: slug,
          answers,
          config,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitError('Submission failed — please try again or contact your Kovil AI representative.')
      }
    } catch {
      setSubmitError('Network error — please check your connection and try again.')
    }
    setSubmitting(false)
  }

  // ── Filtered questions for current tab ─────────────────────────────────────
  const visibleTabs =
    activeTab === 'all'
      ? config.tabs
      : config.tabs.filter(t => t.id === activeTab)

  // ── Thank-you screen ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center p-8">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-bold text-[#0A0A0A] mb-3">
            Questionnaire Submitted
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Thank you — your responses have been received by the Kovil AI team. We&apos;ll
            review your answers before our discovery call and come prepared with
            tailored recommendations.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Session ID: <span className="font-mono">{sessionId}</span>
          </p>
        </div>
      </div>
    )
  }

  // ── Tracker view ────────────────────────────────────────────────────────────
  const TrackerView = () => (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="font-display text-xl font-bold text-[#0A0A0A] mb-6">Completion Tracker</h2>
      <div className="bg-white rounded-lg border border-[#E5E2D9] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#0A0A0A] text-white text-sm">
              <th className="text-left py-3 px-4 font-semibold">Section</th>
              <th className="text-center py-3 px-4 font-semibold w-24">Questions</th>
              <th className="text-center py-3 px-4 font-semibold w-24">Answered</th>
              <th className="text-left py-3 px-4 font-semibold w-40">Progress</th>
            </tr>
          </thead>
          <tbody>
            {config.tabs.map(tab => {
              const tabAnswered = tab.questions.filter(
                q => (answers[q.id]?.response ?? '').trim().length > 0
              ).length
              const pct = Math.round((tabAnswered / tab.questions.length) * 100)
              return (
                <tr
                  key={tab.id}
                  className="border-t border-[#E5E2D9] hover:bg-[#FAF8F4] cursor-pointer"
                  onClick={() => { setActiveTab(tab.id); setView('questions') }}
                >
                  <td className="py-3 px-4 text-sm text-[#0A0A0A] font-medium">{tab.label}</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-500">{tab.questions.length}</td>
                  <td className="py-3 px-4 text-sm text-center font-semibold">
                    <span className={tabAnswered === tab.questions.length ? 'text-emerald-600' : 'text-[#0A0A0A]'}>
                      {tabAnswered}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[#EBE8E0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#FF4F00] rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 w-8 text-right">{pct}%</span>
                    </div>
                  </td>
                </tr>
              )
            })}
            <tr className="border-t-2 border-[#0A0A0A] bg-[#FAF8F4]">
              <td className="py-3 px-4 text-sm font-bold text-[#0A0A0A]">TOTAL</td>
              <td className="py-3 px-4 text-sm text-center font-bold">{totalCount}</td>
              <td className="py-3 px-4 text-sm text-center font-bold">
                <span className={answeredCount === totalCount ? 'text-emerald-600' : 'text-[#0A0A0A]'}>
                  {answeredCount}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-[#EBE8E0] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF4F00] rounded-full transition-all duration-500"
                      style={{ width: `${Math.round((answeredCount / totalCount) * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-8 text-right">
                    {Math.round((answeredCount / totalCount) * 100)}%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )

  // ── Main render ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col">

      {/* ── Top header bar ──────────────────────────────────────────────────── */}
      <header className="bg-[#0A0A0A] text-white sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-0 h-14 px-6">

          {/* Logo */}
          <div className="border border-white/20 rounded px-3 py-1 mr-6 flex-shrink-0">
            <span className="font-display font-bold text-sm tracking-tight">
              <span className="text-[#FF4F00]">Kovil</span>{' '}
              <span className="text-white">AI</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-1 flex-1">
            <button
              onClick={() => setView('questions')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                view === 'questions'
                  ? 'bg-[#FF4F00] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Discovery Questionnaire
            </button>
            <button
              onClick={() => setView('tracker')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                view === 'tracker'
                  ? 'bg-[#FF4F00] text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Completion Tracker
            </button>
          </nav>

          {/* Progress pill */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-28 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF4F00] rounded-full transition-all duration-500"
                  style={{ width: `${Math.round((answeredCount / totalCount) * 100)}%` }}
                />
              </div>
              <span className="text-xs text-white/70 whitespace-nowrap">
                {answeredCount}/{totalCount} answered
              </span>
            </div>
          </div>
        </div>

        {/* Project title sub-bar */}
        <div className="border-t border-white/10 px-6 py-2">
          <h1 className="font-display text-sm font-semibold text-white/90 leading-tight">
            {config.projectTitle}
          </h1>
          <p className="text-xs text-white/50 mt-0.5">{config.clientName}</p>
        </div>
      </header>

      {view === 'tracker' ? (
        <TrackerView />
      ) : (
        <>
          {/* ── Tab navigation ─────────────────────────────────────────────── */}
          <div className="bg-white border-b border-[#E5E2D9] sticky top-[89px] z-20 overflow-x-auto">
            <div className="flex items-center px-4 min-w-max">
              {/* All tab */}
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-[#FF4F00] text-[#FF4F00]'
                    : 'border-transparent text-gray-500 hover:text-[#0A0A0A] hover:border-gray-300'
                }`}
              >
                All Sections
                <span className="ml-1.5 text-xs bg-[#EBE8E0] text-gray-600 px-1.5 py-0.5 rounded-full">
                  {totalCount}
                </span>
              </button>

              {config.tabs.map(tab => {
                const tabAnswered = tab.questions.filter(
                  q => (answers[q.id]?.response ?? '').trim().length > 0
                ).length
                const allDone = tabAnswered === tab.questions.length
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#FF4F00] text-[#FF4F00]'
                        : 'border-transparent text-gray-500 hover:text-[#0A0A0A] hover:border-gray-300'
                    }`}
                  >
                    {tab.shortLabel}
                    <span
                      className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                        allDone
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-[#EBE8E0] text-gray-600'
                      }`}
                    >
                      {tabAnswered}/{tab.questions.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Table ──────────────────────────────────────────────────────── */}
          <div className="flex-1 overflow-auto">
            <table className="w-full border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#0A0A0A] text-white text-xs uppercase tracking-wider">
                  <th className="py-3 px-3 text-center w-10 font-semibold">#</th>
                  <th className="py-3 px-3 text-left w-20 font-semibold">ID</th>
                  <th className="py-3 px-4 text-left font-semibold" style={{ width: '34%' }}>
                    Question
                  </th>
                  <th className="py-3 px-3 text-center w-28 font-semibold">Priority</th>
                  <th className="py-3 px-4 text-left font-semibold" style={{ width: '28%' }}>
                    Response{' '}
                    <span className="normal-case font-normal text-white/50">(complete this column)</span>
                  </th>
                  <th className="py-3 px-4 text-left font-semibold" style={{ width: '16%' }}>
                    Notes / Follow-up
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleTabs.map((tab, tabIdx) => {
                  const showSectionRow = activeTab === 'all'
                  let globalRowNum = 0
                  if (activeTab === 'all') {
                    for (let i = 0; i < tabIdx; i++) {
                      globalRowNum += config.tabs[i].questions.length
                    }
                  }

                  return (
                    <>
                      {showSectionRow && (
                        <tr key={`section-${tab.id}`} className="bg-[#EBE8E0]">
                          <td
                            colSpan={6}
                            className="py-2 px-4 text-xs font-bold text-[#0A0A0A] uppercase tracking-wider"
                          >
                            {tab.label}
                          </td>
                        </tr>
                      )}

                      {tab.questions.map((q, qIdx) => {
                        const rowNum = (activeTab === 'all' ? globalRowNum : 0) + qIdx + 1
                        const answer = answers[q.id] ?? emptyAnswer()
                        const isDone = answer.response.trim().length > 0
                        const isOpen = purposeOpen === q.id

                        return (
                          <tr
                            key={q.id}
                            className={`border-b border-[#E5E2D9] group transition-colors ${
                              isDone ? 'bg-white' : 'bg-[#FEFDFB]'
                            } hover:bg-[#FFF8F5]`}
                          >
                            {/* Row number + done indicator */}
                            <td className="py-3 px-3 text-center align-top">
                              {isDone ? (
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                              ) : (
                                <span className="text-xs text-gray-400 font-mono">{rowNum}</span>
                              )}
                            </td>

                            {/* ID */}
                            <td className="py-3 px-3 align-top">
                              <span className="text-xs font-mono font-semibold text-gray-500 bg-[#EBE8E0] px-2 py-0.5 rounded">
                                {q.id}
                              </span>
                            </td>

                            {/* Question + purpose tooltip */}
                            <td className="py-3 px-4 align-top">
                              <p className="text-sm text-[#0A0A0A] leading-relaxed">
                                {q.question}
                              </p>
                              <button
                                onClick={() => setPurposeOpen(isOpen ? null : q.id)}
                                className="mt-1 text-xs text-[#FF4F00]/70 hover:text-[#FF4F00] transition-colors flex items-center gap-1"
                              >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {isOpen ? 'Hide purpose' : 'Why we ask'}
                              </button>
                              {isOpen && (
                                <p className="mt-2 text-xs text-gray-500 italic bg-[#FAF8F4] border border-[#E5E2D9] rounded px-3 py-2 leading-relaxed">
                                  {q.purpose}
                                </p>
                              )}
                              <p className="mt-1 text-xs text-gray-400">
                                Feeds: {q.feedsDocument}
                              </p>
                            </td>

                            {/* Priority */}
                            <td className="py-3 px-3 align-top text-center">
                              <PriorityBadge priority={q.priority} />
                            </td>

                            {/* Response — editable */}
                            <td className="py-3 px-4 align-top">
                              <div
                                className={`min-h-[60px] rounded border transition-colors px-3 py-2 ${
                                  isDone
                                    ? 'border-emerald-200 bg-emerald-50/40'
                                    : 'border-[#E5E2D9] bg-white focus-within:border-[#FF4F00] focus-within:ring-1 focus-within:ring-[#FF4F00]/20'
                                }`}
                              >
                                <AutoTextarea
                                  value={answer.response}
                                  onChange={v => updateAnswer(q.id, 'response', v)}
                                  placeholder="Type your response here…"
                                  className={isDone ? 'text-[#0A0A0A]' : 'text-gray-600'}
                                />
                              </div>
                            </td>

                            {/* Notes — editable */}
                            <td className="py-3 px-4 align-top">
                              <div className="min-h-[60px] rounded border border-[#E5E2D9] bg-white focus-within:border-[#FF4F00]/50 px-3 py-2 transition-colors">
                                <AutoTextarea
                                  value={answer.notes}
                                  onChange={v => updateAnswer(q.id, 'notes', v)}
                                  placeholder="Optional notes…"
                                  className="text-gray-500"
                                />
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* ── Sticky bottom bar ──────────────────────────────────────────── */}
          <div className="sticky bottom-0 z-20 bg-white border-t border-[#E5E2D9] shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between px-6 py-3">
              {/* Auto-save indicator */}
              <div className="flex items-center gap-2 text-sm">
                {saveStatus === 'saving' && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-gray-500">Saving…</span>
                  </>
                )}
                {saveStatus === 'saved' && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-500">
                      All changes saved
                      {lastSavedAt && (
                        <span className="text-gray-400 ml-1">
                          · {lastSavedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </span>
                  </>
                )}
                {saveStatus === 'error' && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-red-600 text-xs">
                      Server save failed — your answers are stored locally and will sync on next save.
                    </span>
                  </>
                )}
                {saveStatus === 'idle' && (
                  <span className="text-gray-400 text-xs">
                    Answers saved locally · auto-syncs every 30 s
                  </span>
                )}
              </div>

              {/* Must-have progress + Submit */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    Must-have:{' '}
                    <span className={mustHaveAnswered === mustHaveTotal ? 'text-emerald-600 font-semibold' : 'font-semibold text-[#0A0A0A]'}>
                      {mustHaveAnswered}/{mustHaveTotal}
                    </span>{' '}
                    answered
                  </p>
                </div>

                {submitError && (
                  <p className="text-xs text-red-600 max-w-xs text-right">{submitError}</p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex items-center gap-2 bg-[#FF4F00] hover:bg-[#e64600] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                >
                  {submitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting…
                    </>
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
        </>
      )}
    </div>
  )
}

'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const EXCLUDED_PREFIXES = ['/apply', '/sitemap', '/discovery-questionnaire']

const SESSION_KEY   = 'shyna_session_id'
const SEEN_KEY      = 'shyna_seen'
const MESSAGES_KEY  = 'shyna_messages'
const PROACTIVE_MS = 15_000
const PULSE_DELAY  = 8_000

const GREETING =
  "Hi, I'm Shyna. I can answer questions about Kovil AI's services, " +
  'engagement models, and case studies. What can I help you with?'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  isError?: boolean
}

// ── Simple markdown renderer ──────────────────────────────────────────────────
// Handles **bold**, * bullet lists, and line breaks — nothing more.
function renderMarkdown(text: string): React.ReactNode[] {
  const lines = text.split('\n')
  const nodes: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = (key: string) => {
    if (listItems.length === 0) return
    nodes.push(
      <ul key={key} style={{ margin: '4px 0 4px 4px', paddingLeft: 14, listStyle: 'disc' }}>
        {listItems.map((item, i) => (
          <li key={i} style={{ marginBottom: 2 }}>{renderInline(item)}</li>
        ))}
      </ul>
    )
    listItems = []
  }

  lines.forEach((line, i) => {
    const bullet = line.match(/^\s*[\*\-]\s+(.+)/)
    if (bullet) {
      listItems.push(bullet[1])
    } else {
      flushList(`list-${i}`)
      if (line.trim() === '') {
        nodes.push(<span key={`br-${i}`} style={{ display: 'block', height: 6 }} />)
      } else {
        nodes.push(<span key={`line-${i}`} style={{ display: 'block' }}>{renderInline(line)}</span>)
      }
    }
  })
  flushList('list-end')

  return nodes
}

function renderInline(text: string): React.ReactNode {
  // Split on markdown links [text](url) and bare https:// URLs
  const pattern = /(\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/\S+)/g
  const parts = text.split(pattern)
  return (
    <>
      {parts.map((part, i) => {
        const mdLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)
        if (mdLink) {
          return (
            <a key={i} href={mdLink[2]} target="_blank" rel="noopener noreferrer"
              style={{ color: '#FF4F00', textDecoration: 'underline', fontWeight: 500 }}>
              {mdLink[1]}
            </a>
          )
        }
        if (/^https?:\/\//.test(part)) {
          return (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer"
              style={{ color: '#FF4F00', textDecoration: 'underline', fontWeight: 500 }}>
              {part}
            </a>
          )
        }
        // Handle **bold** within plain text segments
        const boldParts = part.split(/(\*\*[^*]+\*\*)/)
        return (
          <React.Fragment key={i}>
            {boldParts.map((bp, j) => {
              if (bp.startsWith('**') && bp.endsWith('**')) {
                return <strong key={j} style={{ fontWeight: 700 }}>{bp.slice(2, -2)}</strong>
              }
              return bp ? <span key={j}>{bp}</span> : null
            })}
          </React.Fragment>
        )
      })}
    </>
  )
}

// ── Avatar ────────────────────────────────────────────────────────────────────
function ShynaAvatar({ size = 36 }: { size?: number }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: size, height: size, borderRadius: '50%', flexShrink: 0,
          background: '#FF4F00', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: Math.round(size * 0.4),
          fontFamily: 'var(--font-space-grotesk, sans-serif)',
          userSelect: 'none',
        }}
      >S</div>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/shyna-avatar.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0, display: 'block' }}
    />
  )
}

// ── Typing dots ───────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '3px 2px' }}>
      {[0, 1, 2].map(i => (
        <span
          key={i}
          style={{
            width: 6, height: 6, borderRadius: '50%', background: '#bbb',
            display: 'inline-block',
            animation: `shyna-bounce 1.3s ease-in-out ${i * 0.18}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

// ── Inner widget ──────────────────────────────────────────────────────────────
function ShynaWidgetInner({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen]               = useState(false)
  const [showProactive, setShowProactive] = useState(false)
  const [showPulse, setShowPulse]         = useState(false)
  const [messages, setMessages]           = useState<Message[]>([])
  const [input, setInput]                 = useState('')
  const [loading, setLoading]             = useState(false)
  const [sessionId, setSessionId]         = useState<string | null>(null)
  const [unread, setUnread]               = useState(0)
  const [hasSeen, setHasSeen]             = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLTextAreaElement>(null)
  const panelRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY)
    if (stored) setSessionId(stored)
    if (localStorage.getItem(SEEN_KEY)) setHasSeen(true)
    const storedMsgs = localStorage.getItem(MESSAGES_KEY)
    if (storedMsgs) {
      try {
        const parsed = JSON.parse(storedMsgs)
        if (Array.isArray(parsed) && parsed.length > 0) setMessages(parsed)
      } catch {}
    }
  }, [])

  // Persist transcript across opens/closes
  useEffect(() => {
    if (messages.length === 0) return
    try {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages.slice(-100)))
    } catch {}
  }, [messages])

  useEffect(() => {
    const seen = localStorage.getItem(SEEN_KEY)
    if (seen) return
    const t = setTimeout(() => setShowPulse(true), PULSE_DELAY)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const seen = localStorage.getItem(SEEN_KEY)
    if (seen || isOpen) return
    const t = setTimeout(() => setShowProactive(true), PROACTIVE_MS)
    return () => clearTimeout(t)
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => inputRef.current?.focus(), 150)
    return () => clearTimeout(t)
  }, [isOpen])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        const trigger = document.getElementById('shyna-trigger')
        if (trigger && trigger.contains(e.target as Node)) return
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen])

  const open = useCallback(() => {
    setIsOpen(true)
    setShowProactive(false)
    setShowPulse(false)
    setUnread(0)
    setHasSeen(true)
    localStorage.setItem(SEEN_KEY, '1')
    if (messages.length === 0) {
      setMessages([{ id: 'greeting', role: 'assistant', content: GREETING }])
    }
  }, [messages.length])

  const close = useCallback(() => setIsOpen(false), [])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', content: text }])
    setInput('')
    if (inputRef.current) inputRef.current.style.height = 'auto'
    setLoading(true)

    try {
      const res  = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId, sourcePage: pathname }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Request failed')

      if (data.sessionId) {
        setSessionId(data.sessionId)
        localStorage.setItem(SESSION_KEY, data.sessionId)
      }

      setMessages(prev => [
        ...prev,
        { id: `a-${Date.now()}`, role: 'assistant', content: data.reply },
      ])
      if (!isOpen) setUnread(n => n + 1)
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`, role: 'assistant', isError: true,
          content: 'Having trouble right now. Reach us at info@kovil.ai or book a call.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }, [input, loading, sessionId, pathname, isOpen])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 88) + 'px'
  }

  const canSend = input.trim().length > 0 && !loading

  return (
    <>
      {/* ── Chat panel ──────────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Chat with Shyna, Kovil AI assistant"
        aria-hidden={!isOpen}
        style={{
          position: 'fixed',
          bottom: 96,
          right: 24,
          zIndex: 9999,
          width: 'min(388px, calc(100vw - 32px))',
          height: 'min(540px, calc(100vh - 120px))',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          border: '1px solid #E5E2D9',
          borderRadius: 16,
          boxShadow: '0 8px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(24px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'transform 0.26s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '13px 14px',
          background: '#FFFFFF',
          borderBottom: '1px solid #F0EDE8',
          flexShrink: 0,
        }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <ShynaAvatar size={36} />
            <span style={{
              position: 'absolute', bottom: 1, right: 1,
              width: 9, height: 9, borderRadius: '50%',
              background: '#22c55e', border: '2px solid #fff',
            }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0A0A0A', lineHeight: 1.2, fontFamily: 'var(--font-space-grotesk, sans-serif)' }}>
              Shyna
            </div>
            <div style={{ fontSize: 11, color: '#888', lineHeight: 1.3 }}>
              Kovil AI Assistant
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Minimise chat"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#aaa', padding: 6, borderRadius: 8, lineHeight: 0,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#333')}
            onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '14px 12px',
          display: 'flex', flexDirection: 'column', gap: 10,
          background: '#FAF9F7',
          scrollbarWidth: 'thin', scrollbarColor: '#E5E2D9 transparent',
        }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                gap: 7,
              }}
            >
              {msg.role === 'assistant' && <ShynaAvatar size={22} />}
              <div style={{
                maxWidth: '80%',
                padding: '9px 13px',
                borderRadius: msg.role === 'user'
                  ? '16px 16px 4px 16px'
                  : '16px 16px 16px 4px',
                background: msg.role === 'user'
                  ? '#FF4F00'
                  : msg.isError ? '#FFF0EE' : '#FFFFFF',
                color: msg.role === 'user'
                  ? '#FFFFFF'
                  : msg.isError ? '#c0392b' : '#0A0A0A',
                fontSize: 13.5,
                lineHeight: 1.57,
                border: msg.role === 'assistant' ? '1px solid #EDE9E3' : 'none',
                boxShadow: msg.role === 'assistant' ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
                wordBreak: 'break-word',
              }}>
                {msg.role === 'assistant' && !msg.isError
                  ? renderMarkdown(msg.content)
                  : msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
              <ShynaAvatar size={22} />
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #EDE9E3',
                borderRadius: '16px 16px 16px 4px',
                padding: '10px 14px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              }}>
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div style={{
          padding: '10px 12px 12px',
          background: '#FFFFFF',
          borderTop: '1px solid #F0EDE8',
          flexShrink: 0,
        }}>
          <div
            style={{
              display: 'flex', alignItems: 'flex-end', gap: 8,
              background: '#FAF9F7',
              border: '1.5px solid #E5E2D9',
              borderRadius: 12,
              padding: '8px 8px 8px 13px',
              transition: 'border-color 0.15s',
            }}
            onFocusCapture={e => (e.currentTarget.style.borderColor = '#FF4F00')}
            onBlurCapture={e => (e.currentTarget.style.borderColor = '#E5E2D9')}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows={1}
              aria-label="Type your message"
              maxLength={2000}
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                resize: 'none', color: '#0A0A0A',
                fontSize: 13.5, lineHeight: 1.52,
                fontFamily: 'var(--font-inter, sans-serif)',
                maxHeight: 88, overflowY: 'auto',
              }}
            />
            <button
              onClick={send}
              disabled={!canSend}
              aria-label="Send message"
              style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: 8,
                border: 'none',
                background: canSend ? '#FF4F00' : '#E5E2D9',
                cursor: canSend ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.15s, transform 0.12s',
                lineHeight: 0,
              }}
              onMouseEnter={e => { if (canSend) e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={canSend ? '#fff' : '#aaa'}
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
          <p style={{ margin: '5px 2px 0', fontSize: 10, color: '#bbb', lineHeight: 1.3, textAlign: 'center' }}>
            AI assistant. Verify important details with the Kovil AI team.
          </p>
        </div>
      </div>

      {/* ── Proactive tooltip ────────────────────────────────────────────────── */}
      {showProactive && !isOpen && (
        <div
          style={{
            position: 'fixed', bottom: 96, right: 96, zIndex: 9998,
            background: '#FFFFFF',
            border: '1px solid #E5E2D9',
            borderRadius: '14px 14px 4px 14px',
            padding: '10px 34px 10px 14px',
            maxWidth: 230, fontSize: 13, color: '#0A0A0A', lineHeight: 1.48,
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            animation: 'shyna-fadein 0.28s ease',
            cursor: 'pointer',
          }}
          onClick={open}
          role="button"
          tabIndex={0}
          aria-label="Open chat with Shyna"
          onKeyDown={e => e.key === 'Enter' && open()}
        >
          <button
            onClick={e => { e.stopPropagation(); setShowProactive(false) }}
            aria-label="Dismiss"
            style={{
              position: 'absolute', top: 8, right: 10,
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#bbb', padding: 2, lineHeight: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#555')}
            onMouseLeave={e => (e.currentTarget.style.color = '#bbb')}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          Hi, I'm Shyna. Have questions about Kovil AI?
          <div style={{ marginTop: 5, fontSize: 11, color: '#FF4F00', fontWeight: 600 }}>
            Click to chat
          </div>
        </div>
      )}

      {/* ── Trigger ──────────────────────────────────────────────────────────── */}
      {/* Pill expands when unseen; collapses to avatar once user has engaged */}
      <button
        id="shyna-trigger"
        onClick={isOpen ? close : open}
        aria-label={isOpen ? 'Minimise chat' : 'Chat with Shyna, Kovil AI assistant'}
        aria-expanded={isOpen}
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 10000,
          display: 'flex', alignItems: 'center', gap: 10,
          height: 58,
          // Pill when unseen + not open, circle when seen/open
          width: (!isOpen && !hasSeen) ? 'auto' : 58,
          borderRadius: 100,
          border: 'none',
          background: (!isOpen && !hasSeen)
            ? '#FFFFFF'
            : 'transparent',
          boxShadow: (!isOpen && !hasSeen)
            ? '0 4px 20px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.08)'
            : 'none',
          padding: (!isOpen && !hasSeen) ? '0 20px 0 6px' : 0,
          cursor: 'pointer', overflow: 'visible',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          animation: showPulse && !isOpen
            ? 'shyna-pulse 2.2s cubic-bezier(0.455,0.03,0.515,0.955) 0s 3'
            : 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {/* Avatar circle */}
        <div style={{
          width: 46, height: 46, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
          boxShadow: '0 4px 16px rgba(255,79,0,0.35)',
          position: 'relative',
        }}>
          <ShynaAvatar size={46} />
          {unread > 0 && !isOpen && (
            <span
              aria-label={`${unread} unread message${unread > 1 ? 's' : ''}`}
              style={{
                position: 'absolute', top: -2, right: -2,
                minWidth: 18, height: 18, borderRadius: 10,
                background: '#FF4F00', color: '#fff',
                fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid #fff', padding: '0 3px',
                fontFamily: 'var(--font-inter, sans-serif)',
              }}
            >
              {unread > 9 ? '9+' : unread}
            </span>
          )}
        </div>

        {/* Label — only visible when pill is expanded */}
        {!isOpen && !hasSeen && (
          <div style={{ lineHeight: 1.25, textAlign: 'left', flexShrink: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0A0A0A', fontFamily: 'var(--font-space-grotesk, sans-serif)', whiteSpace: 'nowrap' }}>
              Ask Shyna
            </div>
            <div style={{ fontSize: 11, color: '#888', whiteSpace: 'nowrap' }}>
              AI assistant
            </div>
          </div>
        )}
      </button>

      {/* ── Animations ───────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes shyna-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes shyna-fadein {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shyna-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,79,0,0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(255,79,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,79,0,0); }
        }
        #shyna-trigger > div {
          transition: box-shadow 0.2s;
        }
        #shyna-trigger:hover > div {
          box-shadow: 0 6px 24px rgba(255,79,0,0.5);
        }
      `}</style>
    </>
  )
}

export default function ShynaWidget() {
  const pathname = usePathname() ?? '/'
  const excluded = EXCLUDED_PREFIXES.some(
    p => pathname === p || pathname.startsWith(p + '/')
  )
  if (excluded) return null
  return <ShynaWidgetInner pathname={pathname} />
}

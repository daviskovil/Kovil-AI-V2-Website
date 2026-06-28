'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import type {
  DiscoveryConfig,
  DiscoveryAnswers,
  QuestionAnswer,
  QuestionPriority,
  QuestionAttachment,
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

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
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

function AnswerCell({ value, placeholder, onClick, attachmentCount = 0 }: {
  value: string
  placeholder: string
  onClick: () => void
  attachmentCount?: number
}) {
  const isEmpty = !value.trim()
  return (
    <div
      onClick={onClick}
      className={`min-h-[80px] rounded cursor-pointer transition-all duration-150 group relative ${
        isEmpty
          ? 'border border-dashed border-gray-300 bg-gray-50 hover:border-[#FF4F00] hover:bg-orange-50/20'
          : 'border border-[#E5E2D9] bg-white hover:border-[#FF4F00] hover:shadow-sm'
      }`}
    >
      <div className="p-3 h-full flex flex-col gap-2">
        {isEmpty ? (
          <span className="text-xs text-gray-400 group-hover:text-[#FF4F00] transition-colors leading-relaxed">
            {placeholder}
          </span>
        ) : (
          <>
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
            {attachmentCount > 0 && (
              <div className="flex items-center gap-1 text-[11px] text-gray-400">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                {attachmentCount} attachment{attachmentCount > 1 ? 's' : ''}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// ── Popup editor ───────────────────────────────────────────────────────────────

function EditorPopup({
  questionId, field, questionText, initialValue, initialAttachments, sessionId, onSave, onClose,
}: {
  questionId: string
  field: 'response' | 'notes'
  questionText: string
  initialValue: string
  initialAttachments: QuestionAttachment[]
  sessionId: string
  onSave: (value: string, attachments: QuestionAttachment[]) => void
  onClose: () => void
}) {
  const [value, setValue] = useState(initialValue)
  const [saved, setSaved] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [existingAttachments, setExistingAttachments] = useState<QuestionAttachment[]>(initialAttachments)
  const [pendingFiles, setPendingFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const taRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  // Track whether mousedown started on the overlay (backdrop), NOT inside the modal card.
  // We only close if BOTH mousedown AND mouseup happened on the overlay — this prevents
  // text selection drags inside the popup from accidentally closing it.
  const mouseDownOnOverlay = useRef(false)

  useEffect(() => {
    const ta = taRef.current
    if (!ta) return
    ta.focus()
    ta.setSelectionRange(ta.value.length, ta.value.length)
  }, [])

  // ── Text toolbar helpers ───────────────────────────────────────────────────

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

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Escape') { e.preventDefault(); onClose() }
    if (e.key === 'Tab') { e.preventDefault(); void handleSave() }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); void handleSave() }
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

  // ── File upload helpers ────────────────────────────────────────────────────

  function handleFileSelect(files: FileList | null) {
    if (!files) return
    const toAdd = Array.from(files).filter(f => {
      if (f.size > 10 * 1024 * 1024) return false // 10 MB limit
      return true
    })
    setPendingFiles(prev => [...prev, ...toAdd])
    // Reset input so same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function removePending(idx: number) {
    setPendingFiles(prev => prev.filter((_, i) => i !== idx))
  }

  function removeExisting(idx: number) {
    setExistingAttachments(prev => prev.filter((_, i) => i !== idx))
  }

  // ── Save ───────────────────────────────────────────────────────────────────

  async function handleSave() {
    if (uploading || saved) return

    let finalAttachments = [...existingAttachments]

    // Upload pending files (response field only)
    if (pendingFiles.length > 0 && field === 'response') {
      setUploading(true)
      for (const file of pendingFiles) {
        const fd = new FormData()
        fd.append('file', file)
        fd.append('session_id', sessionId)
        fd.append('question_id', questionId)
        try {
          const res = await fetch('/api/discovery/upload', { method: 'POST', body: fd })
          if (res.ok) {
            const data = await res.json() as { url: string; name: string; size: number; type: string }
            finalAttachments.push({
              name: data.name,
              size: data.size,
              type: data.type,
              url: data.url,
              uploadedAt: new Date().toISOString(),
            })
          }
        } catch {
          // Upload failed silently — file stays pending but we don't block save
        }
      }
      setUploading(false)
    }

    setSaved(true)
    setTimeout(() => onSave(value, finalAttachments), 500)
  }

  const hasFiles = field === 'response' && (existingAttachments.length > 0 || pendingFiles.length > 0)

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      // POPUP FIX: Only close when mousedown AND mouseup both happen on the overlay backdrop.
      // This prevents text-selection drags inside the popup from closing it.
      onMouseDown={e => { mouseDownOnOverlay.current = e.target === overlayRef.current }}
      onMouseUp={e => {
        if (mouseDownOnOverlay.current && e.target === overlayRef.current) onClose()
        mouseDownOnOverlay.current = false
      }}
    >
      {/* Semi-transparent backdrop — no onClick handler */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Modal card — stopPropagation on mousedown prevents overlay from tracking clicks inside here */}
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col border border-[#E5E2D9] overflow-hidden"
        style={{ maxHeight: '88vh' }}
        onMouseDown={e => e.stopPropagation()}
        onDragOver={e => { e.preventDefault(); if (field === 'response') setIsDragOver(true) }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={e => {
          e.preventDefault()
          setIsDragOver(false)
          if (field === 'response') handleFileSelect(e.dataTransfer.files)
        }}
      >
        {/* Drag-over overlay */}
        {isDragOver && (
          <div className="absolute inset-0 z-10 bg-orange-50/90 border-2 border-dashed border-[#FF4F00] rounded-xl flex items-center justify-center pointer-events-none">
            <p className="text-lg font-semibold text-[#FF4F00]">Drop files here</p>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A0A0A]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs font-bold bg-[#FF4F00] text-white px-2.5 py-1 rounded flex-shrink-0">
              {questionId}
            </span>
            <span className="text-sm font-semibold text-white capitalize">
              {field === 'response' ? 'Response' : 'Notes / Add anything'}
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
              : 'Add optional notes, follow-up questions, or any additional context…'
          }
          className="flex-1 px-5 py-4 resize-none text-sm text-[#0A0A0A] leading-relaxed focus:outline-none placeholder:text-gray-400"
          style={{ minHeight: '180px', fontFamily: 'inherit' }}
        />

        {/* File attachments — response field only */}
        {field === 'response' && (
          <div className="border-t border-[#E5E2D9] bg-[#FAF8F4] px-5 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span className="text-xs font-semibold text-[#0A0A0A]">
                  Attachments {hasFiles ? `(${existingAttachments.length + pendingFiles.length})` : ''}
                </span>
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 text-xs font-medium text-[#FF4F00] hover:text-[#e64600] transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Attach file
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={e => handleFileSelect(e.target.files)}
              />
            </div>

            {/* File list */}
            {hasFiles ? (
              <div className="space-y-1">
                {existingAttachments.map((att, i) => (
                  <div key={`ex-${i}`} className="flex items-center gap-2 bg-white border border-[#E5E2D9] rounded px-3 py-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <a href={att.url} target="_blank" rel="noreferrer"
                      className="text-xs text-blue-600 hover:underline truncate flex-1 min-w-0" title={att.name}>
                      {att.name}
                    </a>
                    <span className="text-[11px] text-gray-400 flex-shrink-0">{formatFileSize(att.size)}</span>
                    <button onClick={() => removeExisting(i)}
                      className="text-gray-300 hover:text-red-400 transition-colors text-base leading-none flex-shrink-0">
                      ×
                    </button>
                  </div>
                ))}
                {pendingFiles.map((file, i) => (
                  <div key={`pend-${i}`} className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded px-3 py-1.5">
                    <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs text-[#0A0A0A] truncate flex-1 min-w-0" title={file.name}>{file.name}</span>
                    <span className="text-[11px] text-gray-400 flex-shrink-0">{formatFileSize(file.size)}</span>
                    <span className="text-[10px] text-amber-600 flex-shrink-0">• uploads on save</span>
                    <button onClick={() => removePending(i)}
                      className="text-gray-300 hover:text-red-400 transition-colors text-base leading-none flex-shrink-0">
                      ×
                    </button>
                  </div>
                ))}
                {/* Add more */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border border-dashed border-[#E5E2D9] rounded py-1.5 text-xs text-gray-400 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors"
                >
                  + Add more files
                </button>
              </div>
            ) : (
              <div
                className="border border-dashed border-[#E5E2D9] rounded-lg p-4 text-center cursor-pointer hover:border-[#FF4F00] hover:bg-orange-50/30 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <svg className="w-5 h-5 text-gray-300 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xs text-gray-400">Drop files here or <span className="text-[#FF4F00]">browse</span></p>
                <p className="text-[10px] text-gray-300 mt-0.5">Max 10 MB per file</p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#E5E2D9] bg-white">
          <span className="text-[11px] text-gray-400">
            Ctrl+Enter = save · Ctrl+B = bold · Esc = cancel
          </span>
          <div className="flex items-center gap-2">
            <button onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-[#E5E2D9] text-gray-600 hover:bg-[#EBE8E0] transition-colors font-medium">
              Cancel
            </button>
            <button
              onClick={() => { void handleSave() }}
              disabled={saved || uploading}
              className={`flex items-center gap-2 px-5 py-2 text-sm rounded-lg font-bold transition-all duration-200 ${
                saved
                  ? 'bg-emerald-500 text-white scale-95'
                  : uploading
                  ? 'bg-amber-500 text-white cursor-wait'
                  : 'bg-[#FF4F00] text-white hover:bg-[#e64600]'
              }`}
            >
              {saved ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Saved!
                </>
              ) : uploading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Uploading…
                </>
              ) : (
                <>
                  {/* Floppy disk icon */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save
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
  const [popup, setPopup] = useState<{
    questionId: string
    field: 'response' | 'notes'
    questionText: string
  } | null>(null)
  const [popupInitial, setPopupInitial] = useState('')
  const [popupInitialAttachments, setPopupInitialAttachments] = useState<QuestionAttachment[]>([])

  const slug = config.clientSlug
  const allQuestions = config.tabs.flatMap(t => t.questions)
  const totalCount = allQuestions.length
  const answeredCount = allQuestions.filter(q => (answers[q.id]?.response ?? '').trim().length > 0).length
  const mustHaveTotal = allQuestions.filter(q => q.priority === 'Must-have').length
  const mustHaveAnswered = allQuestions.filter(
    q => q.priority === 'Must-have' && (answers[q.id]?.response ?? '').trim().length > 0
  ).length
  const pct = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0

  // ── localStorage restore ────────────────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem(lsKey(slug, 'session'))
    const id = stored ?? generateSessionId()
    if (!stored) localStorage.setItem(lsKey(slug, 'session'), id)
    setSessionId(id)
    try {
      const sa = localStorage.getItem(lsKey(slug, 'answers'))
      if (sa) setAnswers(JSON.parse(sa) as DiscoveryAnswers)
    } catch { /* ignore corrupt data */ }
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
  function updateAnswer(
    questionId: string,
    field: keyof QuestionAnswer,
    value: string,
    attachments?: QuestionAttachment[]
  ) {
    const existing = answers[questionId] ?? emptyAnswer()
    const next: DiscoveryAnswers = {
      ...answers,
      [questionId]: {
        ...existing,
        [field]: value,
        // Only overwrite attachments when explicitly provided (from response popup)
        ...(attachments !== undefined ? { attachments } : {}),
      },
    }
    setAnswers(next)
    localStorage.setItem(lsKey(slug, 'answers'), JSON.stringify(next))
    setSaveStatus('idle')
    setTimeout(() => serverSave(next, sessionId), 300)
  }

  function openPopup(questionId: string, field: 'response' | 'notes', questionText: string) {
    setPopupInitial(answers[questionId]?.[field] ?? '')
    setPopupInitialAttachments(
      field === 'response' ? (answers[questionId]?.attachments ?? []) : []
    )
    setPopup({ questionId, field, questionText })
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
        body: JSON.stringify({ session_id: sessionId, client_slug: slug, answers, config }),
      })
      if (res.ok) setSubmitted(true)
      else setSubmitError('Submission failed — please try again.')
    } catch { setSubmitError('Network error — check your connection.') }
    setSubmitting(false)
  }

  const visibleTabs = activeTab === 'all' ? config.tabs : config.tabs.filter(t => t.id === activeTab)

  // ── Thank-you screen ────────────────────────────────────────────────────────
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
                      <div className="flex-1 h-2 bg-red-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${p}%` }} />
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
                  <div className="flex-1 h-2 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
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

        {/* 1. White nav bar with orange underline accent */}
        <div className="bg-white border-b-2 border-[#FF4F00] shadow-sm">
          <div className="flex items-center gap-4 px-5 h-13 py-2">
            {/* Logo — dark (black) version for white background */}
            <div className="flex items-center gap-0 flex-shrink-0">
              <Image
                src="/kovil-logo-dark.webp"
                alt="Kovil AI"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>

            <div className="w-px h-5 bg-[#0A0A0A]/15 flex-shrink-0" />

            {/* Nav */}
            <nav className="flex items-center gap-1">
              <button onClick={() => setView('questions')}
                className={`px-3.5 py-1.5 rounded text-sm font-semibold transition-colors ${
                  view === 'questions'
                    ? 'bg-[#FF4F00] text-white'
                    : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/8'
                }`}>
                Discovery Questionnaire
              </button>
              <button onClick={() => setView('tracker')}
                className={`px-3.5 py-1.5 rounded text-sm font-medium transition-colors ${
                  view === 'tracker'
                    ? 'bg-[#FF4F00] text-white'
                    : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A] hover:bg-[#0A0A0A]/8'
                }`}>
                Completion Tracker
              </button>
            </nav>

            <div className="flex-1" />

            {/* Green/red progress bar */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-40 h-2 bg-red-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-[#0A0A0A]/60 whitespace-nowrap">
                {answeredCount}/{totalCount} answered
              </span>
            </div>
          </div>
        </div>

        {/* 2. White project title bar */}
        <div className="bg-white border-b border-[#E5E2D9] px-6 py-3 flex items-center justify-between gap-6">
          <div className="min-w-0">
            <h1 className="font-display text-xl font-bold text-[#0A0A0A] leading-tight truncate">
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
              <span className={`text-sm font-bold ${pct === 100 ? 'text-emerald-600' : 'text-[#FF4F00]'}`}>{pct}%</span>
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
          <table className="w-full border-collapse" style={{ minWidth: '1100px' }}>

            {/* Column headers */}
            <thead>
              <tr className="bg-[#0A0A0A] text-white">
                <th className="py-3 px-3 text-center w-10 text-xs font-bold uppercase tracking-wider border-r border-white/10">#</th>
                <th className="py-3 px-3 text-left w-[76px] text-xs font-bold uppercase tracking-wider border-r border-white/10">ID</th>
                {/* Question: reduced from 36% → 25% */}
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10" style={{ width: '25%' }}>Question</th>
                <th className="py-3 px-3 text-center w-28 text-xs font-bold uppercase tracking-wider border-r border-white/10">Priority</th>
                {/* Response: increased from 26% → 31% */}
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider border-r border-white/10" style={{ width: '31%' }}>
                  Response <span className="normal-case font-normal text-white/40">(complete this)</span>
                </th>
                {/* Notes heading updated */}
                <th className="py-3 px-4 text-left text-xs font-bold uppercase tracking-wider">Notes / Add anything</th>
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
                          <td className="py-5 px-3 text-center align-top w-10 border-r border-[#F0EDE8]">
                            {isDone ? (
                              <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <span className="text-xs text-gray-400 font-mono tabular-nums">{rowNum}</span>
                            )}
                          </td>

                          {/* ID */}
                          <td className="py-5 px-3 align-top w-[76px] border-r border-[#F0EDE8]">
                            <span className="inline-block text-[11px] font-mono font-bold text-gray-600 bg-[#EBE8E0] px-2 py-0.5 rounded whitespace-nowrap">
                              {q.id}
                            </span>
                          </td>

                          {/* Question — increased text size + weight */}
                          <td className="py-5 px-4 align-top border-r border-[#F0EDE8]" style={{ width: '25%' }}>
                            <p className={`text-[15px] leading-snug font-semibold ${isDone ? 'text-gray-500' : 'text-[#0A0A0A]'}`}>
                              {q.question}
                            </p>
                            <button onClick={() => setPurposeOpen(isExpanded ? null : q.id)}
                              className="mt-2 flex items-center gap-1 text-[11px] text-[#FF4F00]/60 hover:text-[#FF4F00] transition-colors">
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
                          <td className="py-5 px-3 align-top text-center w-28 border-r border-[#F0EDE8]">
                            <PriorityBadge priority={q.priority} />
                          </td>

                          {/* Response */}
                          <td className="py-5 px-4 align-top border-r border-[#F0EDE8]" style={{ width: '31%' }}>
                            <AnswerCell
                              value={answer.response}
                              placeholder="+ Click to add response…"
                              attachmentCount={(answer.attachments ?? []).length}
                              onClick={() => openPopup(q.id, 'response', q.question)}
                            />
                          </td>

                          {/* Notes */}
                          <td className="py-5 px-4 align-top">
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
          initialAttachments={popupInitialAttachments}
          sessionId={sessionId}
          onSave={(value, attachments) => {
            updateAnswer(
              popup.questionId,
              popup.field,
              value,
              popup.field === 'response' ? attachments : undefined
            )
            setPopup(null)
          }}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  )
}

'use client'

import { useEffect, useState, useCallback } from 'react'
import { X, Clock, Video } from 'lucide-react'
import { CALENDLY_URL } from '../lib/calendly'

export const OPEN_CALENDLY_EVENT = 'open-calendly'

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    document.addEventListener(OPEN_CALENDLY_EVENT, open)
    return () => document.removeEventListener(OPEN_CALENDLY_EVENT, open)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, close])

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  // White background + orange primary to match Kovil brand
  const embedUrl = `${CALENDLY_URL}?embed_type=Inline&embed_domain=kovil.ai&hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=FF4F00`

  return (
    /* Overlay starts at 64px so the sticky navbar sits on top */
    <div
      className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white"
      style={{ top: '64px' }}
    >
      {/* Page-style container */}
      <div className="min-h-full flex flex-col">

        {/* Header */}
        <div className="border-b border-gray-100 bg-white px-6 py-5 relative max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-gray-900 font-display">Book a Discovery Call</h1>
          <p className="mt-1.5 text-sm text-gray-500 max-w-md">
            Tell us what you're building — we'll listen, ask the right questions, and give you an honest picture of how we can help.
          </p>
          <button
            type="button"
            onClick={close}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Calendly iframe — fills remaining height */}
        <div className="flex-1 w-full max-w-5xl mx-auto" style={{ minHeight: '660px' }}>
          <iframe
            src={embedUrl}
            title="Book a call with Kovil AI"
            className="w-full border-0"
            style={{ height: '100%', minHeight: '660px' }}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  )
}

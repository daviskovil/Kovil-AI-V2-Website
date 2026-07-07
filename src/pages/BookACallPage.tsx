'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { calendlyTrackingParams, attributionForAnalytics } from '@/src/lib/attribution'

const BASE_EMBED_URL =
  'https://calendly.com/kovil-ai/talent?embed_type=Inline&embed_domain=kovil.ai&hide_gdpr_banner=1&background_color=ffffff&text_color=111111&primary_color=FF4F00'

type GtagFn = (...args: unknown[]) => void
function fireGtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GtagFn }).gtag === 'function') {
    ;(window as unknown as { gtag: GtagFn }).gtag('event', event, params ?? {})
  }
}

export default function BookACallPage() {
  const router = useRouter()
  // Build the embed URL on the client so we can append attribution (needs
  // window/referrer/localStorage). Starts null → we render once it's ready to
  // avoid remounting the iframe when the src changes.
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(calendlyTrackingParams())
    setEmbedUrl(`${BASE_EMBED_URL}&${params.toString()}`)
  }, [])

  // Detect Calendly booking completion → log conversion, then redirect
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        fireGtag('book_call', { method: 'calendly_embed', ...attributionForAnalytics() })
        router.push('/meeting-confirmed')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [router])

  return (
    <div className="pt-20 min-h-screen bg-white">

      {/* Header */}
      <div className="border-b border-gray-100 bg-white px-6 py-6 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold text-gray-900 font-display">Book a Discovery Call</h1>
        <p className="mt-2 text-sm text-gray-500 max-w-md">
          Tell us what you're building — we'll listen, ask the right questions, and give you an honest picture of how we can help.
        </p>
      </div>

      {/* Calendly inline embed */}
      <div className="w-full max-w-5xl mx-auto" style={{ minHeight: '700px' }}>
        {embedUrl && (
          <iframe
            src={embedUrl}
            title="Book a call with Kovil AI"
            className="w-full border-0"
            style={{ height: '700px' }}
            loading="lazy"
          />
        )}
      </div>

    </div>
  )
}

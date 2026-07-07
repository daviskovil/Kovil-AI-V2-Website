'use client'

import { useEffect } from 'react'
import { captureFirstTouch } from '@/src/lib/attribution'

/**
 * Records first-touch attribution on the visitor's first page load, site-wide.
 * Renders nothing. Must live inside the client boundary (it reads
 * document.referrer + localStorage), so it sits in the root layout body.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureFirstTouch()
  }, [])
  return null
}

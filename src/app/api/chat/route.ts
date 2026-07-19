import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/src/lib/supabase'
import { retrieveChunks } from '@/src/lib/shyna/crawl'
import { buildContents, chat } from '@/src/lib/shyna/gemini'
import { checkRateLimit } from '@/src/lib/shyna/rate-limit'
import { sendNewConversationEmail } from '@/src/lib/shyna/notify'

export const maxDuration = 60

const MAX_MESSAGE_LENGTH = 2000
const MAX_SESSION_MESSAGES = 50

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '0.0.0.0'
  )
}

export async function POST(req: NextRequest) {
  // Parse body
  let body: { sessionId?: string; message?: string; sourcePage?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { sessionId: incomingSessionId, message, sourcePage } = body

  // Validate input
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 })
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'Message too long' }, { status: 400 })
  }

  // Rate limit check (per IP, 30 messages per hour)
  const ip = getClientIP(req)
  const { allowed } = await checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many messages. Please wait a bit before continuing.' },
      { status: 429 }
    )
  }

  try {
    // Resolve or create session
    let sessionId = incomingSessionId
    let isNewSession = false

    if (sessionId) {
      const { data: existing } = await supabase
        .from('chat_sessions')
        .select('id')
        .eq('id', sessionId)
        .single()
      if (!existing) sessionId = undefined
    }

    if (!sessionId) {
      const { data: newSession, error } = await supabase
        .from('chat_sessions')
        .insert({ visitor_meta: { source_page: sourcePage ?? null } })
        .select('id')
        .single()
      if (error || !newSession) throw new Error('Failed to create session')
      sessionId = newSession.id
      isNewSession = true
    }

    // sessionId is always set by this point (either resolved above or just
    // created), but the two branches above are enough separate reassignments
    // that TypeScript can't prove it — this explicit guard narrows it to
    // `string` for the rest of the function.
    if (!sessionId) {
      throw new Error('Session ID resolution failed')
    }

    // Enforce session message cap
    const { count } = await supabase
      .from('chat_messages')
      .select('id', { count: 'exact', head: true })
      .eq('session_id', sessionId)

    if ((count ?? 0) >= MAX_SESSION_MESSAGES) {
      return NextResponse.json(
        {
          error: 'This conversation has reached its limit. Start a new chat or reach us at info@kovil.ai.',
          sessionId,
        },
        { status: 429 }
      )
    }

    // Load conversation history
    const { data: historyRows } = await supabase
      .from('chat_messages')
      .select('role, content')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(14)

    // Retrieve relevant KB chunks via semantic search
    let kbContext = ''
    try {
      const chunks = await retrieveChunks(message, 6)
      if (chunks.length > 0) {
        kbContext = chunks
          .map(c => `[${c.title ?? 'Kovil AI'}] (${c.url})\n${c.content}`)
          .join('\n\n---\n\n')
      }
    } catch (err) {
      console.error('[chat] retrieval error:', err)
      // Continue without context — Shyna will handle the gap gracefully
    }

    // Call Gemini
    const contents = buildContents(historyRows ?? [], kbContext, message.trim())
    const reply = await chat(contents)

    // Notify the team the moment a new conversation starts. Awaited (not
    // fire-and-forget) because Vercel can terminate the function as soon as
    // the response is sent, which would silently drop an unawaited email
    // send. sendNewConversationEmail swallows its own errors, so a failure
    // here never breaks the chat response.
    if (isNewSession) {
      await sendNewConversationEmail({
        sessionId,
        sourcePage: sourcePage ?? null,
        firstMessage: message.trim(),
        firstReply: reply,
      })
    }

    // Persist user message then assistant reply (sequential for ordering)
    await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, role: 'user', content: message.trim() })
    await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, role: 'assistant', content: reply })

    // Keep session alive
    await supabase
      .from('chat_sessions')
      .update({ last_active_at: new Date().toISOString() })
      .eq('id', sessionId)

    return NextResponse.json({ reply, sessionId })
  } catch (err) {
    console.error('[chat] error:', err)
    return NextResponse.json(
      {
        error:
          'Having trouble right now. You can reach us at info@kovil.ai or book a call.',
        sessionId: incomingSessionId,
      },
      { status: 500 }
    )
  }
}

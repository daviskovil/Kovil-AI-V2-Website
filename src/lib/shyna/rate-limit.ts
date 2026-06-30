import { createHash } from 'crypto'
import { supabase } from '../supabase'

const HOURLY_LIMIT = 30

function hashIP(ip: string): string {
  return createHash('sha256').update(ip).digest('hex').slice(0, 16)
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean }> {
  const ipHash = hashIP(ip)
  const windowStart = new Date()
  windowStart.setMinutes(0, 0, 0)
  windowStart.setMilliseconds(0)

  try {
    const { data, error } = await supabase.rpc('increment_rate_limit', {
      p_ip_hash: ipHash,
      p_window_start: windowStart.toISOString(),
      p_limit: HOURLY_LIMIT,
    })

    if (error) {
      console.error('[rate-limit]', error.message)
      return { allowed: true } // Fail open so a DB blip doesn't break chat
    }

    return { allowed: (data as { allowed: boolean }).allowed }
  } catch {
    return { allowed: true }
  }
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'linear-gradient(135deg, #141C4A 0%, #0A0A0D 100%)', width: 1200, height: 630, display: 'flex', position: 'relative', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 630, background: '#FF4F00' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 70px', flex: 1 }}>
          <div style={{ display: 'flex', background: '#FF4F00', borderRadius: 20, padding: '8px 20px', marginBottom: 28, alignSelf: 'flex-start' }}>
            <span style={{ color: 'white', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>KOVIL AI</span>
          </div>
          <div style={{ color: '#9AA8F2', fontSize: 16, fontWeight: 600, letterSpacing: 4, marginBottom: 14, display: 'flex' }}>BOOMI PLATFORM PARTNER</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
            <span style={{ color: 'white', fontSize: 50, fontWeight: 700, lineHeight: 1.1 }}>AI Integrations & Specialist</span>
            <span style={{ color: '#FF4F00', fontSize: 50, fontWeight: 700, lineHeight: 1.1 }}>Talent for Boomi</span>
          </div>
          <div style={{ color: '#6C7BC4', fontSize: 20, marginBottom: 36, display: 'flex' }}>AI Agents · Developers · API Specialists · Architects</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#1C2660', borderRadius: 12, padding: '16px 28px', border: '1px solid #2D3A8C' }}>
              <span style={{ color: '#FF4F00', fontSize: 42, fontWeight: 700, display: 'flex' }}>48 hrs</span>
              <span style={{ color: '#6C7BC4', fontSize: 14, display: 'flex', marginTop: 4 }}>To Match Talent</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#1C2660', borderRadius: 12, padding: '16px 28px', border: '1px solid #2D3A8C' }}>
              <span style={{ color: 'white', fontSize: 42, fontWeight: 700, display: 'flex' }}>2 wks</span>
              <span style={{ color: '#6C7BC4', fontSize: 14, display: 'flex', marginTop: 4 }}>To an AI Pilot</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320, background: '#1C2660', borderLeft: '1px solid #2D3A8C', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 96, display: 'flex' }}>☁️</div>
          <div style={{ color: '#4C5CA8', fontSize: 14, display: 'flex' }}>kovil.ai/platforms/boomi</div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, height: 6, background: 'linear-gradient(90deg, #FF4F00, transparent)' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

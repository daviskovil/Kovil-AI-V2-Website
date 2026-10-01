import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const dots = [
  { color: '#00A1E0', x: 0, y: -78 },
  { color: '#FF7A59', x: 68, y: -48 },
  { color: '#0078D4', x: 80, y: 22 },
  { color: '#0F3460', x: 45, y: 72 },
  { color: '#2CA01C', x: -16, y: 82 },
  { color: '#13B5EA', x: -62, y: 50 },
  { color: '#714B67', x: -80, y: -10 },
  { color: '#0052CC', x: -40, y: -68 },
]

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'linear-gradient(135deg, #0A0A0D 0%, #171109 100%)', width: 1200, height: 630, display: 'flex', position: 'relative', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 630, background: '#FF4F00' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 64px', flex: 1 }}>
          <div style={{ display: 'flex', background: '#FF4F00', borderRadius: 20, padding: '8px 20px', marginBottom: 28, alignSelf: 'flex-start' }}>
            <span style={{ color: 'white', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>KOVIL AI</span>
          </div>
          <div style={{ color: '#FF8A4C', fontSize: 16, fontWeight: 600, letterSpacing: 4, marginBottom: 14, display: 'flex' }}>PLATFORM AI EXPERTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
            <span style={{ color: 'white', fontSize: 48, fontWeight: 700, lineHeight: 1.12, display: 'flex' }}>Integrate AI Agents Into</span>
            <span style={{ color: '#FF4F00', fontSize: 48, fontWeight: 700, lineHeight: 1.12, display: 'flex' }}>Your Existing Platforms</span>
          </div>
          <div style={{ color: '#9A9A9F', fontSize: 19, marginBottom: 36, display: 'flex' }}>Salesforce · HubSpot · Shopify · 30+ Enterprise Tools</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#1A1A1E', borderRadius: 12, padding: '16px 28px', border: '1px solid #2A2A2E' }}>
              <span style={{ color: '#FF4F00', fontSize: 42, fontWeight: 700, display: 'flex' }}>48 hrs</span>
              <span style={{ color: '#8A8A8F', fontSize: 14, display: 'flex', marginTop: 4 }}>To Match Talent</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#1A1A1E', borderRadius: 12, padding: '16px 28px', border: '1px solid #2A2A2E' }}>
              <span style={{ color: 'white', fontSize: 42, fontWeight: 700, display: 'flex' }}>30+</span>
              <span style={{ color: '#8A8A8F', fontSize: 14, display: 'flex', marginTop: 4 }}>Platforms Supported</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 340, position: 'relative' }}>
          <div style={{ position: 'relative', width: 280, height: 280, display: 'flex' }}>
            {dots.map((d, i) => (
              <div key={i} style={{ position: 'absolute', left: 140 + d.x - 14, top: 140 + d.y - 14, width: 28, height: 28, borderRadius: 14, background: d.color, display: 'flex' }} />
            ))}
            <div
              style={{
                position: 'absolute',
                left: 75,
                top: 75,
                width: 130,
                height: 130,
                borderRadius: 65,
                background: 'radial-gradient(circle at 35% 30%, #2e2e33 0%, #0a0a0d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 70px 12px rgba(255,79,0,0.4)',
              }}
            >
              <span style={{ color: '#FF8A4C', fontSize: 40, fontWeight: 800, display: 'flex' }}>AI</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, height: 6, background: 'linear-gradient(90deg, #FF4F00, transparent)' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

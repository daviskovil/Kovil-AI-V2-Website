import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'linear-gradient(135deg, #040A14 0%, #080A10 100%)', width: 1200, height: 630, display: 'flex', position: 'relative', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 630, background: '#FF4F00' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 70px', flex: 1 }}>
          <div style={{ display: 'flex', background: '#FF4F00', borderRadius: 20, padding: '8px 20px', marginBottom: 28, alignSelf: 'flex-start' }}>
            <span style={{ color: 'white', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>KOVIL AI</span>
          </div>
          <div style={{ color: '#FF4F00', fontSize: 16, fontWeight: 600, letterSpacing: 4, marginBottom: 14, display: 'flex' }}>AI FOR LOGISTICS</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
            <span style={{ color: 'white', fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>Route. Forecast.</span>
            <span style={{ color: '#FF4F00', fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>Deliver.</span>
          </div>
          <div style={{ color: '#3A5070', fontSize: 20, marginBottom: 36, display: 'flex' }}>Carrier AI · Supply Chain Visibility · Docs</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#081018', borderRadius: 12, padding: '16px 28px', border: '1px solid #0E1E30' }}>
              <span style={{ color: '#FF4F00', fontSize: 36, fontWeight: 700, display: 'flex' }}>$2M Seed</span>
              <span style={{ color: '#3A5070', fontSize: 14, display: 'flex', marginTop: 4 }}>on 4-Week MVP</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#081018', borderRadius: 12, padding: '16px 28px', border: '1px solid #0E1E30' }}>
              <span style={{ color: 'white', fontSize: 42, fontWeight: 700, display: 'flex' }}>20%</span>
              <span style={{ color: '#3A5070', fontSize: 14, display: 'flex', marginTop: 4 }}>Route Cost Reduction</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320, background: '#081018', borderLeft: '1px solid #0E1E30', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 96, display: 'flex' }}>🚛</div>
          <div style={{ color: '#1A2E40', fontSize: 14, display: 'flex' }}>kovil.ai/ai-for-logistics</div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, height: 6, background: 'linear-gradient(90deg, #FF4F00, transparent)' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

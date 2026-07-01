import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'linear-gradient(135deg, #040E1C 0%, #080A14 100%)', width: 1200, height: 630, display: 'flex', position: 'relative', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 8, height: 630, background: '#FF4F00' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 70px', flex: 1 }}>
          <div style={{ display: 'flex', background: '#FF4F00', borderRadius: 20, padding: '8px 20px', marginBottom: 28, alignSelf: 'flex-start' }}>
            <span style={{ color: 'white', fontSize: 14, fontWeight: 700, letterSpacing: 1 }}>KOVIL AI</span>
          </div>
          <div style={{ color: '#FF4F00', fontSize: 16, fontWeight: 600, letterSpacing: 4, marginBottom: 14, display: 'flex' }}>AI FOR FINTECH</div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
            <span style={{ color: 'white', fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>Payment. Fraud.</span>
            <span style={{ color: '#FF4F00', fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>Compliance.</span>
          </div>
          <div style={{ color: '#4A6890', fontSize: 20, marginBottom: 36, display: 'flex' }}>KYC/AML · Document AI · Loan Origination</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#0A1428', borderRadius: 12, padding: '16px 28px', border: '1px solid #152040' }}>
              <span style={{ color: '#FF4F00', fontSize: 42, fontWeight: 700, display: 'flex' }}>18 days</span>
              <span style={{ color: '#4A6890', fontSize: 14, display: 'flex', marginTop: 4 }}>Payment MVP Shipped</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', background: '#0A1428', borderRadius: 12, padding: '16px 28px', border: '1px solid #152040' }}>
              <span style={{ color: 'white', fontSize: 42, fontWeight: 700, display: 'flex' }}>90%</span>
              <span style={{ color: '#4A6890', fontSize: 14, display: 'flex', marginTop: 4 }}>Manual Entry Eliminated</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 320, background: '#0A1428', borderLeft: '1px solid #152040', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 96, display: 'flex' }}>💳</div>
          <div style={{ color: '#2A4070', fontSize: 14, display: 'flex' }}>kovil.ai/ai-for-fintech</div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 1200, height: 6, background: 'linear-gradient(90deg, #FF4F00, transparent)' }} />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

'use client'

interface RadioCardProps {
  label: string
  description?: string
  selected: boolean
  onClick: () => void
  icon?: React.ReactNode
}

export default function RadioCard({ label, description, selected, onClick, icon }: RadioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left transition-all duration-200 focus:outline-none focus-visible:ring-2"
      style={{
        borderRadius: '12px',
        padding: '16px',
        backgroundColor: selected ? 'rgba(255,90,20,0.08)' : '#111111',
        border: selected ? '1.5px solid #FF5A14' : '1.5px solid #222222',
        cursor: 'pointer',
      }}
    >
      <div className="flex items-start gap-3">
        {/* Radio indicator */}
        <div
          className="flex-shrink-0 mt-0.5 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            width: '18px',
            height: '18px',
            border: selected ? '2px solid #FF5A14' : '2px solid #444444',
            backgroundColor: selected ? '#FF5A14' : 'transparent',
          }}
        >
          {selected && (
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }} />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {icon && <span style={{ color: selected ? '#FF5A14' : '#888888' }}>{icon}</span>}
            <span
              className="font-medium text-sm leading-snug"
              style={{ color: selected ? '#FFFFFF' : '#CCCCCC' }}
            >
              {label}
            </span>
          </div>
          {description && (
            <p
              className="text-xs mt-1 leading-relaxed"
              style={{ color: '#888888' }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

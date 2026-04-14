'use client'

interface TagProps {
  label: string
  selected: boolean
  onClick: () => void
}

export default function Tag({ label, selected, onClick }: TagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2"
      style={{
        padding: '8px 14px',
        borderRadius: '8px',
        border: selected ? '1.5px solid #FF5A14' : '1.5px solid #333333',
        backgroundColor: selected ? 'rgba(255,90,20,0.12)' : '#111111',
        color: selected ? '#FF5A14' : '#888888',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}
    >
      {selected && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6L4.5 8.5L10 3" stroke="#FF5A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {label}
    </button>
  )
}

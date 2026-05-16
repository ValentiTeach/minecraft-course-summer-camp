import { useEffect } from 'react'

export default function DayModal({ day, onClose }) {
  const open = Boolean(day)

  // Lock scroll + close on Escape
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      className={`modal-backdrop ${open ? 'show' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-hidden={!open}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Закрити">×</button>
        {day && (
          <>
            <div className="mono" style={{ color: 'var(--purple)', marginBottom: 12 }}>
              День {String(day.num).padStart(2, '0')} / {day.date}
            </div>
            <h3>{day.title}</h3>
            <div className="modal-meta">
              <span>Посада: {day.rank}</span>
              <span>•</span>
              <span>{day.tag}</span>
            </div>
            <div className="modal-section">
              <h5>Мета дня</h5>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)' }}>
                {day.detail.goal}
              </p>
            </div>
            <div className="modal-section">
              <h5>Активності</h5>
              <ul>
                {day.detail.activities.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

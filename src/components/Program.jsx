import { useState } from 'react'
import { DAYS } from '../data/days'
import { useReveal } from '../hooks/useReveal'
import DayModal from './DayModal'

export default function Program() {
  const [week, setWeek] = useState(1)
  const [activeDay, setActiveDay] = useState(null)
  const h2 = useReveal()
  const lead = useReveal()

  const visibleDays = DAYS.filter((d) => d.week === week)

  return (
    <section id="program">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-num">03 / Програма по днях</span>
            <h2 ref={h2.ref} className={`reveal ${h2.shown ? 'shown' : ''}`}>
              Що відбувається<br />щодня.
            </h2>
          </div>
          <p ref={lead.ref} className={`reveal ${lead.shown ? 'shown' : ''}`}>
            Тиждень 1 — фундамент і влада. Тиждень 2 — автоматизація і код.
            Кожен день закінчується конкретним тест-завданням, яке відкриває наступну посаду.
            Натисни на день, щоб побачити детальний план.
          </p>
        </div>

        <div className="week-tabs">
          <button
            className={`week-tab ${week === 1 ? 'active' : ''}`}
            onClick={() => setWeek(1)}
          >
            Week 01 — Фундамент
          </button>
          <button
            className={`week-tab ${week === 2 ? 'active' : ''}`}
            onClick={() => setWeek(2)}
          >
            Week 02 — Код
          </button>
        </div>

        <div className="days-grid">
          {visibleDays.map((d) => (
            <button
              key={d.num}
              className="day-card"
              onClick={() => setActiveDay(d)}
            >
              <div className="day-meta">
                <div className="day-num">{String(d.num).padStart(2, '0')}</div>
                <div className="day-date">{d.date}</div>
              </div>
              <div className="day-rank">{d.rank}</div>
              <h4>{d.title}</h4>
              <p className="day-desc">{d.desc}</p>
              <div className="day-tag">{d.tag}</div>
            </button>
          ))}
        </div>
      </div>

      <DayModal day={activeDay} onClose={() => setActiveDay(null)} />
    </section>
  )
}

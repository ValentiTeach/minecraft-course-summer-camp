import { useState } from 'react'
import { RANKS } from '../data/ranks'
import { useReveal } from '../hooks/useReveal'

function RankCard({ rank, index, isOpen, onToggle }) {
  const num = String(index + 1).padStart(2, '0')
  return (
    <div className={`rank ${isOpen ? 'open' : ''}`}>
      <div
        className="rank-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      >
        <div className="rank-num">{num}</div>
        <div className="rank-dot" style={{ background: rank.color }} />
        <div className="rank-title">
          {rank.title}
          <small>{rank.subtitle}</small>
        </div>
        <div className="rank-days">{rank.days}</div>
        <div className="rank-toggle">
          <svg viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </div>
      </div>
      <div className="rank-body">
        <div className="rank-body-inner">
          <div>
            <h5>Що відкривається</h5>
            <ul>
              {rank.unlocks.map((u, i) => <li key={i}>{u}</li>)}
            </ul>
          </div>
          <div>
            <h5>Що вивчається</h5>
            <ul>
              {rank.learns.map((u, i) => <li key={i}>{u}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareerLadder() {
  const [openIndex, setOpenIndex] = useState(0)
  const h2 = useReveal()
  const lead = useReveal()

  return (
    <section id="ladder">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-num">02 / Кар&apos;єрна драбина</span>
            <h2 ref={h2.ref} className={`reveal ${h2.shown ? 'shown' : ''}`}>
              Шість посад.<br />Шість підвищень.
            </h2>
          </div>
          <p ref={lead.ref} className={`reveal ${lead.shown ? 'shown' : ''}`}>
            Кожне підвищення — це не просто похвала. Це нова група в LuckPerms
            з новим префіксом у чаті, новий набір прав і фізична картка-офер на руки.
            Натисни, щоб дізнатися, що відкривається на кожному рівні.
          </p>
        </div>

        <div className="ladder">
          {RANKS.map((rank, i) => (
            <RankCard
              key={i}
              rank={rank}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

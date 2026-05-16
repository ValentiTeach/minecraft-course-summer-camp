import { useEffect, useState } from 'react'

export default function Hero() {
  // Staggered entrance — 5 elements, 120ms apart
  const [shownCount, setShownCount] = useState(0)

  useEffect(() => {
    const timers = [0, 1, 2, 3, 4].map((i) =>
      setTimeout(() => setShownCount((c) => Math.max(c, i + 1)), 100 + i * 120)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const cls = (i) => `reveal ${shownCount > i ? 'shown' : ''}`

  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div>
          <div className={`eyebrow ${cls(0)}`}>
            Літній гурток / 15–26 червня 2026
          </div>
          <h1 className={cls(1)}>
            Minecraft:<br />
            від <span className="accent">Intern</span><br />
            до <span className="accent">Senior</span>
          </h1>
          <p className={`lead ${cls(2)}`}>
            Не курс «погратись у Майнкрафт». Десятиденна симуляція IT-студії,
            де учні влаштовуються стажерами, отримують підвищення кожні два дні
            і на десятий день запускають власний сервер для батьків та друзів.
          </p>
          <div className={`pixel-row ${cls(3)}`}>
            <span /><span /><span /><span /><span />
          </div>
          <div className={`hero-meta ${cls(4)}`} style={{ marginTop: 48 }}>
            <div>
              <div className="label">Тривалість</div>
              <div className="value">10 днів</div>
            </div>
            <div>
              <div className="label">Вік</div>
              <div className="value">11–15 років</div>
            </div>
            <div>
              <div className="label">Формат</div>
              <div className="value">~3 год / день</div>
            </div>
            <div>
              <div className="label">Локація</div>
              <div className="value">Коломия</div>
            </div>
          </div>
        </div>
        <div className={`hero-art ${cls(0)}`}>
          <div className="big-L">L</div>
        </div>
      </div>
    </header>
  )
}

import { useReveal } from '../hooks/useReveal'

export default function Concept() {
  const h2 = useReveal()
  const lead = useReveal()
  const grid = useReveal()

  return (
    <section id="concept">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-num">01 / Концепція</span>
            <h2 ref={h2.ref} className={`reveal ${h2.shown ? 'shown' : ''}`}>
              Три дисципліни.<br />Один сервер.
            </h2>
          </div>
          <p ref={lead.ref} className={`reveal ${lead.shown ? 'shown' : ''}`}>
            Курс будує те, що в IT називають <em>full-stack</em> мисленням:
            не просто кодити, а розуміти всю систему — від прав доступу до архітектури,
            від плагінів до автоматизації.
          </p>
        </div>

        <div ref={grid.ref} className={`concept-grid reveal ${grid.shown ? 'shown' : ''}`}>
          <div className="concept-cell">
            <span className="num">01</span>
            <h3>Адміністрування</h3>
            <p>LuckPerms, WorldGuard, AuthMe, бекапи. Учень навчається не «опнути всіх», а будувати правильну ієрархію доступу та читати логи інцидентів.</p>
          </div>
          <div className="concept-cell">
            <span className="num">02</span>
            <h3>Архітектура</h3>
            <p>Композиція, пропорції, робота з палітрою блоків. WorldEdit як інструмент масштабу. Перехід від «куб з вікнами» до осмисленого простору.</p>
          </div>
          <div className="concept-cell">
            <span className="num">03</span>
            <h3>Програмування</h3>
            <p>Lua / Luau через CC:Tweaked. Турбі-роботи, автоматичні ферми, цикли та функції. Та сама мова, що працює в Roblox Studio — крос-платформний скіл.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

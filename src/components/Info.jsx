import { useReveal } from '../hooks/useReveal'

const INFO_ROWS = [
  { key: 'Дати', val: <><strong>15–26 червня 2026</strong> · 10 робочих днів (пн–пт × 2 тижні)</> },
  { key: 'Час', val: '~3 години на день · точний розклад уточнюється за тиждень до початку' },
  { key: 'Вік', val: '11–15 років · бажано базове знайомство з ПК та Майнкрафтом' },
  { key: 'Група', val: 'До 12 учнів · 1 викладач + 1 наставник' },
  { key: 'Локація', val: 'Logika, Філія Коломия · ліцей №9' },
  { key: 'Що потрібно', val: "Тільки бажання — комп'ютери, ліцензії та сервер забезпечує школа" },
  { key: 'Фінал', val: <><strong>Grand Opening 26.06</strong> — публічна презентація для батьків та друзів</> },
  { key: 'Сертифікат', val: 'Іменний диплом «Senior Minecraft Developer & DevOps Engineer» з переліком засвоєних скілів' },
]

const PRICE_LINES = [
  '10 днів навчання',
  'Картки-офери (6 шт)',
  'Сертифікат Senior',
  'Доступ до сервера Logika',
  'Запис на Grand Opening',
]

export default function Info() {
  const h2 = useReveal()
  const lead = useReveal()

  return (
    <section id="info">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="sec-num">05 / Практична інформація</span>
            <h2 ref={h2.ref} className={`reveal ${h2.shown ? 'shown' : ''}`}>
              Дати, гроші,<br />деталі.
            </h2>
          </div>
          <p ref={lead.ref} className={`reveal ${lead.shown ? 'shown' : ''}`}>
            Курс розрахований на групу до 12 учнів — щоб кожен отримав
            індивідуальну увагу та свою зону на сервері. Записуйтеся завчасно.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-list">
            {INFO_ROWS.map((row, i) => (
              <div className="info-row" key={i}>
                <div className="info-key">{row.key}</div>
                <div className="info-val">{row.val}</div>
              </div>
            ))}
          </div>

          <div className="price-card" id="enroll">
            <div className="label">Вартість участі</div>
            <h3>Літній інтенсив</h3>
            {PRICE_LINES.map((line, i) => (
              <div className="price-line" key={i}>
                <span>{line}</span>
                <span>✓</span>
              </div>
            ))}
            <a href="tel:+380" className="cta-btn">Записатися на курс</a>
            <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 16, textAlign: 'center' }}>
              Подзвоніть або напишіть — підкажемо найближчий вільний потік
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

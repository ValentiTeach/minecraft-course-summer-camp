const SKILLS = [
  {
    mono: 'linux / config',
    title: 'Робота з YAML та конфігами',
    desc: 'Розуміє структуру серверних плагінів, вміє читати та правити config-файли без страху щось зламати.',
  },
  {
    mono: 'permissions',
    title: 'Система прав доступу',
    desc: 'LuckPerms, групи, ієрархія, спадкування прав. Те саме, що використовується в реальних серверних інфраструктурах.',
  },
  {
    mono: 'architecture',
    title: 'Архітектурне мислення',
    desc: 'Композиція, пропорції, робота з масштабом через WorldEdit. Розуміння, як декомпозувати великий проєкт на частини.',
  },
  {
    mono: 'lua / luau',
    title: 'Програмування на Lua',
    desc: 'Змінні, типи, цикли, функції. Та сама мова працює в Roblox Studio — навичка переноситься на власні ігрові проєкти.',
  },
  {
    mono: 'automation',
    title: 'Автоматизація задач',
    desc: "Турбі-роботи, автоматичні ферми, цикли обробки. Перший досвід «комп'ютер працює за мене».",
  },
  {
    mono: 'devops',
    title: 'Бекапи та відновлення',
    desc: 'Як зберігати дані, як відновити сервер після інциденту, як читати логи. Реальні DevOps-практики у мініатюрі.',
  },
]

export default function Skills() {
  return (
    <section style={{ borderBottom: 'none', paddingBottom: 0 }}>
      <div className="wrap">
        <div className="skills-wrap">
          <span
            className="mono"
            style={{ color: 'var(--purple)', display: 'block', marginBottom: 16 }}
          >
            04 / Результат
          </span>
          <h2>Що отримує учень на виході.</h2>
          <p>
            Не «грав у комп&apos;ютер два тижні» — а junior-DevOps starter pack,
            який можна показати в портфоліо при вступі до IT-ліцеїв.
          </p>

          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div className="skill-item" key={i}>
                <span className="skill-mono">{s.mono}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

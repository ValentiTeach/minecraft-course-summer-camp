export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <div>
            <div className="brand-name"> Minecraft </div>
            <div className="brand-sub"> від Intern до Senior</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#concept">Концепція</a>
          <a href="#ladder">Драбина</a>
          <a href="#program">Програма</a>
          <a href="#info">Інфо</a>
          <a href="https://t.me/amourkit" target="_blank" rel="noopener noreferrer" className="cta-btn">Записатися</a>
        </div>
      </div>
    </nav>
  )
}

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <div className="brand-L">L</div>
          <div>
            <div className="brand-name">Logika</div>
            <div className="brand-sub">школа програмування</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#concept">Концепція</a>
          <a href="#ladder">Драбина</a>
          <a href="#program">Програма</a>
          <a href="#info">Інфо</a>
          <a href="#enroll" className="cta-btn">Записатися</a>
        </div>
      </div>
    </nav>
  )
}

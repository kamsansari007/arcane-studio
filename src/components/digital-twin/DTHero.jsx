function DTHero({ label, title, description, cta }) {
  return (
    <div className="hero">
      <div className="hero-inner dt-inner">
        <span className="hero-label">{label}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="/#contact" className="hero-cta">{cta}</a>
      </div>
    </div>
  )
}

export default DTHero

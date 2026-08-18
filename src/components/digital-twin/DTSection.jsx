function DTSection({ label, title, intro, alt, children, className = '' }) {
  return (
    <section className={`${alt ? 'section-alt' : ''} ${className}`}>
      <div className="dt-inner">
        {label && <div className="section-label">{label}</div>}
        {title && <h2 className="section-title">{title}</h2>}
        {intro && <p className="section-intro">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

export default DTSection

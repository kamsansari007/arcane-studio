function PlatformBox({ label, title, description, features }) {
  return (
    <div className="platform-box">
      <div>
        <div className="section-label" style={{ color: 'var(--mint)' }}>{label}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="platform-features">
        {features.map((feature) => (
          <div className="platform-feat" key={feature.title}>
            <div className="feat-icon" aria-hidden="true">{feature.icon}</div>
            <div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlatformBox

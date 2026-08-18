function MaturityTrack({ steps, footnote }) {
  return (
    <>
      <div className="maturity-track">
        {steps.map((step, index) => (
          <div className={`maturity-step ${index < 2 ? 'active' : ''}`} key={step.title}>
            <div className="step-num">Level {index + 1}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      {footnote && <div className="maturity-arrow">{footnote}</div>}
    </>
  )
}

export default MaturityTrack

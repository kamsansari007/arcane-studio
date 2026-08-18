import './ServiceContent.css'

function ServiceContent({
  intro,
  images,
  workflowTitle,
  workflow,
  deliverablesTitle,
  deliverables,
  deliverableImage,
}) {
  return (
    <>
      <section className="section section--light service-intro">
        <div className="container">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {images && images.length > 0 && (
        <section className="service-images">
          <div className="container service-images__grid">
            {images.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </section>
      )}

      {workflow && workflow.length > 0 && (
        <section className="section section--light service-workflow">
          <div className="container">
            <h2 className="service-workflow__title">{workflowTitle}</h2>
            <div className="service-workflow__grid">
              {workflow.map((step) => (
                <div className="workflow-card" key={step.title}>
                  <h3>{step.title}</h3>
                  {step.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {deliverables && deliverables.length > 0 && (
        <section className="section section--light service-deliverables">
          <div className="container service-deliverables__grid">
            <div>
              <h2>{deliverablesTitle}</h2>
              <div className="service-deliverables__list">
                {deliverables.map((item) => (
                  <div key={item.title} className="service-deliverables__item">
                    <h4>{item.title}</h4>
                    {item.description && <p>{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            {deliverableImage && (
              <div className="service-deliverables__image">
                <img src={deliverableImage} alt="" loading="lazy" />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default ServiceContent

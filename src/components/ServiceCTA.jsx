import './ServiceCTA.css'

function ServiceCTA({ image }) {
  return (
    <section className="section section--light service-cta">
      <div className="container">
        <div className="service-cta__card">
          <div className="service-cta__text">
            <h2>Get in Touch With a Member of Our Team Today</h2>
            <a href="/#contact" className="btn btn-light">Speak With an Expert</a>
          </div>
          {image && (
            <div className="service-cta__image">
              <img src={image} alt="Arcane Studio team member" loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceCTA

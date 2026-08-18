import { services } from '../data/services.js'
import './Services.css'

function Services() {
  return (
    <section className="section section--dark services" id="services">
      <div className="container">
        <h2 className="services__title">Explore our comprehensive BIM modeling services</h2>
        <p className="services__subtitle">
          This section highlights key projects, showcasing creativity, expertise, and the
          value delivered through our work.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

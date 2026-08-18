import { Link } from 'react-router-dom'
import { servicesNav } from '../data/servicesData.js'
import './ServicesDirectory.css'

function ServicesDirectory() {
  return (
    <section className="section section--light services-directory">
      <div className="container">
        <h2>Explore Every Arcane Studio Service</h2>
        <div className="services-directory__grid">
          {servicesNav.map((service) => (
            <Link to={`/services/${service.slug}`} className="services-directory__card" key={service.slug}>
              {service.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesDirectory

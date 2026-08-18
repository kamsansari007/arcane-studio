import { projects } from '../data/projects.js'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="section section--light portfolio">
      <div className="container">
        <h2 className="portfolio__title">
          Our team of expert professionals work on world-class visionary projects.
        </h2>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <a href="#projects" className="portfolio__card" key={project.title}>
              <div className="portfolio__card-info">
                <p>{project.location}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="portfolio__card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio__cta">
          <a href="#projects" className="btn btn-dark">Click Here to See More Projects</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

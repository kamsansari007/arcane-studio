import { optimizingPoints } from '../data/servicesOverview.js'
import './OptimizingProjects.css'

function OptimizingProjects() {
  return (
    <section className="section section--dark optimizing">
      <div className="container optimizing__grid">
        <div>
          <h2>Optimizing Projects with Advanced BIM Modeling</h2>
          <p>
            Explore how our Arcane Studio services leverage ISO 19650 workflows and 4D/5D
            dashboards to deliver clash-free digital twins, enhancing project efficiency and
            sustainability.
          </p>
        </div>

        <div className="optimizing__list">
          {optimizingPoints.map((point) => (
            <div key={point.title} className="optimizing__item">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OptimizingProjects

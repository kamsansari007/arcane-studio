import { latestProjects } from '../data/experienceProjects.js'
import './ExperienceGallery.css'

function ExperienceGallery() {
  return (
    <section className="experience-gallery">
      <div className="container">
        <h2 className="experience-gallery__title">Latest this month</h2>

        <div className="experience-gallery__grid">
          {latestProjects.map((project, index) => (
            <a
              href="#project"
              className={`light-card ${index < 2 ? 'light-card--large' : ''}`}
              key={project.title}
            >
              <p>{project.location}</p>
              <h3>{project.title}</h3>
              <div className="light-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceGallery

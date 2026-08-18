import './ProjectCard.css'

function ProjectCard({ image, title, location }) {
  return (
    <div className="project-card">
      <div className="project-card__info">
        <p>{location}</p>
        <h3>{title}</h3>
      </div>
      <div className="project-card__image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </div>
  )
}

export default ProjectCard

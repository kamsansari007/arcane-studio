import './JobCard.css'

function JobCard({ title, location, type, description, applyHref }) {
  return (
    <div className="job-card">
      <div className="job-card__header">
        <h3>{title}</h3>
        <span className="job-card__type">{type}</span>
      </div>
      <p className="job-card__location">{location}</p>
      <p className="job-card__description">{description}</p>
      <a href={applyHref} className="job-card__apply">
        Apply Now <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  )
}

export default JobCard

import ProjectCard from '../components/ProjectCard.jsx'
import { secondmentProjects, formulaOneProjects } from '../data/experienceProjects.js'
import './SecondmentStaffing.css'

function SecondmentStaffing() {
  return (
    <section className="section section--dark secondment">
      <div className="container">
        <h2 className="secondment__title">Secondment Staffing Services</h2>
        <p className="secondment__text">We offer secondment staffing services in the GCC.</p>

        <div className="secondment__grid">
          {secondmentProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="secondment__grid">
          {formulaOneProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecondmentStaffing

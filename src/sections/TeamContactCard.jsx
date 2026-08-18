import './TeamContactCard.css'

function TeamContactCard() {
  return (
    <section className="section section--light team-contact">
      <div className="container">
        <div className="team-contact__card">
          <div className="team-contact__text">
            <h2>Get in Touch with a Member of Our Team Today</h2>
            <a href="/#contact" className="btn btn-light">Speak With an Expert</a>
          </div>
          <div className="team-contact__image">
            <img src="/assets/about/BIM-Photo-002-_-Anis.jpeg" alt="Arcane Studio team member" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamContactCard

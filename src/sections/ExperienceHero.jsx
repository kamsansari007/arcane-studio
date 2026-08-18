import './ExperienceHero.css'

function ExperienceHero() {
  return (
    <section className="experience-hero">
      <div className="container">
        <h1>Our Projects Experience</h1>

        <div className="experience-hero__media">
          <img src="/assets/experience/experience-hero.jpg" alt="Arcane Studio Panda Zoo visualization" />
          <div className="experience-hero__overlay">
            <p>We are proud to have contributed to house the first Pandas in the Gulf GCC in Doha, Qatar.</p>
            <a href="/#contact" className="btn btn-light">Speak With an Expert</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceHero

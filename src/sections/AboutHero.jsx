import './AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__overlay" />
      <div className="container about-hero__content">
        <h1>About Arcane Studio</h1>
        <a href="/#contact" className="btn btn-light">Speak With an Expert</a>
      </div>
    </section>
  )
}

export default AboutHero

import './ServiceHero.css'

function ServiceHero({ title, image }) {
  return (
    <section className="service-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="service-hero__overlay" />
      <div className="container service-hero__content">
        <h1>{title}</h1>
        <a href="/#contact" className="btn btn-outline-light">Speak With an Expert</a>
      </div>
    </section>
  )
}

export default ServiceHero

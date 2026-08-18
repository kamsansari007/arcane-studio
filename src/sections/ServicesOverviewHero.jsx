import './ServicesOverviewHero.css'

function ServicesOverviewHero() {
  return (
    <section
      className="services-overview-hero"
      style={{ backgroundImage: "url('/assets/services/d454e734c35e55c33ad2342714744958fff7d4f1.jpg')" }}
    >
      <div className="services-overview-hero__overlay" />
      <div className="container services-overview-hero__content">
        <h1>Services</h1>
      </div>
    </section>
  )
}

export default ServicesOverviewHero

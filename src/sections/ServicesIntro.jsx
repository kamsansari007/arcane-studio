import { featureCards } from '../data/servicesOverview.js'
import './ServicesIntro.css'

function ServicesIntro() {
  return (
    <>
      <section className="section section--dark services-intro">
        <div className="container services-intro__grid">
          <div>
            <h2>Advanced BIM Services Tailored for the Gulf</h2>
            <p>
              Discover how Arcane Studio leverages cutting-edge digital twin technologies and
              ISO 19650 workflows to deliver clash-free models, optimize projects, and promote
              sustainable building practices across Qatar, KSA, UAE, and Lebanon.
            </p>
          </div>
          <div className="services-intro__image">
            <img src="/assets/services/6ddc54ce26a76a50ebe355025c64aead31358e18.jpg" alt="" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section section--dark services-features">
        <div className="container">
          <h2>Leading BIM Modeling Services Across the Gulf Region</h2>
          <p className="services-features__lead">
            Explore our comprehensive BIM solutions designed to enhance project efficiency and
            minimize errors.
          </p>

          <div className="services-features__grid">
            {featureCards.map((card) => (
              <div className="services-features__card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesIntro

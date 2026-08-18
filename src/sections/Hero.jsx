import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="container">
        <div className="hero__content">
          <h1>Build Better, Smarter and Faster with Arcane Studio.</h1>
          <p>
            Arcane Studio is the fastest-growing, exclusive ISO 19650-certified Qatar-based
            provider of BIM services, with offices in Qatar, the UAE, and the KSA, serving the
            whole GCC region.
          </p>
          <a href="#contact" className="btn btn-light">Speak With An Expert</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

import './ServicesAndProjects.css'

function ServicesAndProjects() {
  return (
    <section className="section section--dark services-projects">
      <div className="container services-projects__grid">
        <div className="info-card">
          <img
            className="info-card__image"
            src="/assets/about/Formula-1-thumbnail-BIM-DESIGN-LLC-1024x576.jpg"
            alt="F1 Racetrack, Qatar Grand Prix"
            loading="lazy"
          />
          <h3>We Offer Comprehensive BIM Services For Your Project Needs</h3>
          <ul>
            <li><strong>Architectural BIM Modeling:</strong> Detailed, data-rich models for design and visualization.</li>
            <li><strong>Structural BIM Modeling:</strong> Precise modeling to ensure structural integrity.</li>
            <li><strong>MEPF BIM Services:</strong> Coordinated mechanical, electrical, plumbing, and firefighting systems.</li>
            <li><strong>Infrastructure and Landscape BIM:</strong> Modeling civil and landscape elements.</li>
            <li><strong>Façade Modeling and Detailing:</strong> Accurate representations of building envelopes.</li>
            <li>Our models are crafted to Levels of Development (LOD) 100 through 500, delivering the precision required at every project stage.</li>
          </ul>
        </div>

        <div className="info-card">
          <img
            className="info-card__image"
            src="/assets/about/Panda-zoo-1.jpg"
            alt="Panda House, Al Khor Zoo"
            loading="lazy"
          />
          <h3>We&rsquo;ve Served Iconic Projects</h3>
          <p>Our expertise is demonstrated through a diverse portfolio of high-profile projects:</p>
          <ul>
            <li><strong>S17 Bus Station – Qatar (Ongoing):</strong> A vital infrastructure project enhancing Qatar&rsquo;s public transportation network.</li>
            <li><strong>Msheireb Bus Station – Qatar:</strong> A modern facility supporting Doha&rsquo;s urban mobility.</li>
            <li><strong>Lusail Circuit, Formula 1 – Qatar:</strong> Advanced BIM solutions for a world-class motorsport venue.</li>
            <li><strong>Panda Enclosure, Al Khor Zoo – Qatar:</strong> Specialized modeling for a unique zoological structure.</li>
          </ul>
          <p>
            These projects highlight our capability to manage complex, large-scale developments
            across various sectors, reinforcing our credibility in the AEC industry.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesAndProjects

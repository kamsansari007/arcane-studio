import './WhyChooseApproach.css'

function WhyChooseApproach() {
  return (
    <section className="section section--dark why-approach">
      <div className="container">
        <div className="why-approach__grid">
          <div className="info-card">
            <div className="info-card__logo">
              <img src="/assets/arcane-studio-logo.svg" alt="Arcane Studio" loading="lazy" />
            </div>
            <h3>Why Choose Us</h3>
            <hr />
            <ul>
              <li><strong>Comprehensive Expertise:</strong> Decades of experience in BIM processes and technologies.</li>
              <li><strong>Multi-Disciplinary Team:</strong> Skilled professionals across all BIM disciplines.</li>
              <li><strong>Proven Track Record:</strong> Successful delivery of high-profile projects globally.</li>
              <li><strong>End-to-End Solutions:</strong> Support from project inception to post-construction.</li>
            </ul>
          </div>

          <div className="info-card info-card--approach">
            <img
              className="info-card__image"
              src="/assets/about/WhatsApp-Image-2025-05-12-at-16.24.30-1024x576.jpeg"
              alt="Arcane Studio team on site"
              loading="lazy"
            />
            <h3>Our Approach</h3>
            <hr />
            <ul>
              <li>
                <strong>Client-Centric Solutions</strong>
                <p>We understand that every project is unique, and we tailor our services to meet the specific requirements of each client.</p>
              </li>
              <li>
                <strong>Collaborative Workflows</strong>
                <p>Our focus on collaboration ensures smooth communication between stakeholders, minimizing delays and reducing costs.</p>
              </li>
              <li>
                <strong>Cutting-Edge Technology</strong>
                <p>We leverage the latest BIM software and tools, ensuring our clients benefit from industry-leading technologies.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="why-approach__cta">
          <a href="/#services" className="btn btn-light">Explore More</a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseApproach

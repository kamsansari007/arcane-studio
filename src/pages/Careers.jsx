import { useEffect } from 'react'
import JobCard from '../components/careers/JobCard.jsx'
import './Careers.css'

const openings = []

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>
            At Arcane Studio, we believe that great work comes from great people. Our team is
            at the heart of everything we do — delivering precision, quality, and innovation on
            every project.
          </p>
        </div>
      </section>

      <div className="careers-photo-wrap">
        <div className="container">
          <div className="careers-photo">
            <img src="/assets/careers/BIM-DESIGN-CAREER-TEAM.jpg" alt="The Arcane Studio team" />
          </div>
        </div>
      </div>

      <section className="careers-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p className="careers-section__intro">
            Arcane Studio is a team of dedicated professionals committed to delivering
            high-quality BIM services across the GCC region. We foster a culture of
            collaboration, continuous learning, and technical excellence.
          </p>

          <div className="careers-culture-grid">
            <div className="careers-culture-card">
              <span className="careers-culture-card__label">Our Culture</span>
              <p>
                We value teamwork, integrity, and a passion for delivering exceptional results.
                Every member of our team plays a critical role in the success of our projects
                and the growth of our company.
              </p>
            </div>
            <div className="careers-culture-card">
              <span className="careers-culture-card__label">Growth &amp; Development</span>
              <p>
                We invest in our people. From hands-on project experience to professional
                development opportunities, we support our team members in building rewarding
                careers in BIM and digital construction.
              </p>
            </div>
          </div>

          <blockquote className="careers-quote">
            &ldquo;Our strength lies in our people. Every project we deliver reflects the
            dedication and expertise of our entire team.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">
          <h2>Why Arcane Studio?</h2>
          <p className="careers-section__intro">
            Working at Arcane Studio means being part of a company that values quality, precision,
            and professional growth. Here is what sets us apart:
          </p>
          <ul className="careers-why-list">
            <li><strong>Meaningful Projects:</strong> Contribute to impactful work across the GCC region.</li>
            <li><strong>Collaborative Environment:</strong> Work alongside experienced professionals in a supportive team.</li>
            <li><strong>Professional Standards:</strong> Operate within a framework of industry-recognized standards and best practices.</li>
            <li><strong>Career Growth:</strong> Develop your skills and advance your career as the company grows.</li>
          </ul>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">
          <h2>Current Openings</h2>
          {openings.length > 0 ? (
            <div className="careers-jobs-grid">
              {openings.map((job) => (
                <JobCard key={job.title} {...job} />
              ))}
            </div>
          ) : (
            <div className="careers-jobs-empty">
              <p>
                We don&apos;t have any open positions listed right now, but we&apos;re always
                happy to hear from talented professionals. Send us your resume and we&apos;ll
                keep it on file for the next opportunity that fits.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="careers-cta-section">
        <div className="container">
          <div className="careers-cta">
            <h2>Interested in Working with Us?</h2>
            <p>We&apos;re always happy to hear from talented professionals. Get in touch and tell us about yourself.</p>
            <a href="/contact" className="btn careers-cta__btn">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers

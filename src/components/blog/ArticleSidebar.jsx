import { Link } from 'react-router-dom'
import './ArticleSidebar.css'

function ArticleSidebar({ caseStudy }) {
  return (
    <aside className="article-sidebar">
      <div className="sidebar-card sidebar-card--audit">
        <h4>Get a Free BIM Audit</h4>
        <p>See how federated BIM coordination can cut rework and compress your project timeline before the first clash hits the site.</p>
        <a href="/#contact" className="btn btn-light">Request Audit</a>
      </div>

      <div className="sidebar-card">
        <span className="sidebar-card__eyebrow">About Arcane Studio</span>
        <h4>Arcane Studio</h4>
        <p>ISO-certified BIM consultancy delivering clash-free, compliant models for complex construction projects across the GCC.</p>
        <div className="sidebar-stats">
          <div className="sidebar-stat">
            <strong>50+</strong>
            <span>Projects</span>
          </div>
          <div className="sidebar-stat">
            <strong>5</strong>
            <span>Countries</span>
          </div>
          <div className="sidebar-stat">
            <strong>8</strong>
            <span>Disciplines</span>
          </div>
        </div>
        <div className="sidebar-badges">
          <span>ISO 19650</span>
          <span>ISO 9001</span>
          <span>ISO 45001</span>
        </div>
      </div>

      {caseStudy && (
        <div className="sidebar-card">
          <span className="sidebar-card__eyebrow">Case Study</span>
          <h4>{caseStudy.title}</h4>
          <p>{caseStudy.description}</p>
          <Link to={caseStudy.href} className="sidebar-card__link">Read the case study &rarr;</Link>
        </div>
      )}
    </aside>
  )
}

export default ArticleSidebar

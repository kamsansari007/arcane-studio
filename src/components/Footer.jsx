import { Link } from 'react-router-dom'
import './Footer.css'

const offices = [
  {
    name: 'Doha, Qatar (Head Office)',
    address: 'Street 830, Building 54, Zone 17, Al Corniche, Al Rufaa Tower Offices, 10th Floor, Office 14',
  },
  {
    name: 'Dubai, UAE',
    address: 'No-17, Al Quoz Industrial Area 1, Marabia Street, P.O. Box 121550',
  },
  {
    name: 'Riyadh, KSA',
    address: 'ALHajjaj ibn Yusuf 2615, L Zahra District 6305, P.O. Box 12812',
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <img src="/assets/arcane-studio-logo.svg" alt="Arcane Studio" />
          </div>

          {offices.map((office) => (
            <div key={office.name} className="site-footer__office">
              <strong>{office.name}</strong>
              <p>{office.address}</p>
            </div>
          ))}
        </div>

        <div className="site-footer__pages">
          <h4>Pages</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/our-experience">Our Experience</Link></li>
            <li><Link to="/services">Design Services</Link></li>
            <li><Link to="/digital-twin">Digital Twin</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Join Our Team</Link></li>
          </ul>
        </div>

        <div className="site-footer__contact">
          <a href="mailto:arcane_studio@yopmail.com">arcane_studio@yopmail.com</a>
          <a href="tel:+912345678">+9 12345678</a>
        </div>

        <div className="site-footer__social">
          <h4>Social</h4>
          <a href="#linkedin">LinkedIn</a>
          <a href="#youtube">YouTube</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

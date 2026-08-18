import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { bimServices, bimImplementation, accImplementation } from '../data/nav.js'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const closeTimeout = useRef(null)

  const openServices = () => {
    clearTimeout(closeTimeout.current)
    setServicesOpen(true)
  }

  const scheduleClose = () => {
    clearTimeout(closeTimeout.current)
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo">
          <img src="/assets/arcane-studio-logo.svg" alt="Arcane Studio" />
        </Link>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/our-experience">Our Experience</Link>

          <div
            className="site-nav__dropdown"
            ref={dropdownRef}
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <button
              className="site-nav__dropdown-toggle"
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Design Services
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="site-nav__mega">
                <div>
                  <h4>BIM Services</h4>
                  <ul>
                    {bimServices.map((item) => (
                      <li key={item.label}>
                        {item.href.startsWith('/') ? (
                          <Link to={item.href} onClick={() => setServicesOpen(false)}>{item.label}</Link>
                        ) : (
                          <a href={item.href}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>BIM Implementation</h4>
                  <ul>
                    {bimImplementation.map((item) => (
                      <li key={item.label}>
                        {item.href.startsWith('/') ? (
                          <Link to={item.href} onClick={() => setServicesOpen(false)}>{item.label}</Link>
                        ) : (
                          <a href={item.href}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                  <h4>ACC Implementation</h4>
                  <ul>
                    {accImplementation.map((item) => (
                      <li key={item.label}>
                        {item.href.startsWith('/') ? (
                          <Link to={item.href} onClick={() => setServicesOpen(false)}>{item.label}</Link>
                        ) : (
                          <a href={item.href}>{item.label}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link to="/digital-twin">Digital Twin</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Join Our Team</Link>
        </nav>

        <div className="site-header__actions">
          <Link to="/contact" className="btn btn-dark site-header__contact">Contact</Link>
          <button
            className="site-header__burger"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

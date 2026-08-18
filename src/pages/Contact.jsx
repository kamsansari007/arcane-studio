import { useEffect } from 'react'
import OfficeMapCard from '../components/contact/OfficeMapCard.jsx'
import './Contact.css'

const channels = [
  { label: 'Email', href: 'mailto:arcane_studio@yopmail.com', icon: '✉' },
  { label: 'WhatsApp', href: 'https://wa.me/912345678', icon: '💬' },
  { label: 'Phone', href: 'tel:+912345678', icon: '☎' },
]

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-hero__content">
          <h1>Contact Us</h1>
          <p>
            Select an option or email us at{' '}
            <a href="mailto:arcane_studio@yopmail.com">arcane_studio@yopmail.com</a>
          </p>

          <div className="contact-hero__channels">
            {channels.map((channel) => (
              <a href={channel.href} className="contact-hero__channel" key={channel.label}>
                <span aria-hidden="true">{channel.icon}</span>
                {channel.label}
              </a>
            ))}
          </div>

          <p className="contact-hero__address">Al Rufaa Tower, 10th floor, Doha, Qatar</p>
          <a href="tel:+912345678" className="contact-hero__phone">+9 12345678</a>
        </div>
      </section>

      <section className="section contact-region">
        <div className="container">
          <h2>We Serve the GCC Gulf Region</h2>
        </div>
      </section>

      <section className="contact-maps">
        <OfficeMapCard
          label="Qatar Head Office"
          mapSrc="https://maps.google.com/maps?q=Arcane+Studio+Doha+Qatar&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          className="contact-maps__primary"
        />

        <div className="contact-maps__row">
          <OfficeMapCard
            label="UAE Office"
            mapSrc="https://maps.google.com/maps?q=Al+Marabea+St,+Al+Quoz+Industrial+Area+1,+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
          />
          <OfficeMapCard
            label="KSA Office"
            mapSrc="https://maps.google.com/maps?q=Al+Hajjaj+Ibn+Yusuf+St,+Az+Zahra,+Riyadh&t=&z=14&ie=UTF8&iwloc=&output=embed"
            mapsHref="https://maps.google.com/maps?q=Al+Hajjaj+Ibn+Yusuf+St,+Az+Zahra,+Riyadh"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact

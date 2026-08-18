import { useState } from 'react'
import './ServiceFAQ.css'

function ServiceFAQ({ definition, faqTitle, faq }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section section--dark service-faq">
      <div className="container">
        {definition && (
          <div className="service-faq__definition">
            <h2>{definition.title}</h2>
            <p>{definition.body}</p>
          </div>
        )}

        <hr className="service-faq__divider" />

        <h2 className="service-faq__title">
          <span aria-hidden="true">❓</span> {faqTitle}
        </h2>

        <div className="service-faq__list">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className="faq-item" key={item.q}>
                <button
                  type="button"
                  className="faq-item__toggle"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={`faq-item__arrow ${isOpen ? 'is-open' : ''}`} aria-hidden="true">▸</span>
                </button>
                {isOpen && <p className="faq-item__answer">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceFAQ

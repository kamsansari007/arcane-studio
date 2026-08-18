import { useState } from 'react'
import './FAQAccordion.css'

function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div className="faq-accordion__item" key={item.q}>
            <button
              type="button"
              className="faq-accordion__toggle"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className={`faq-accordion__arrow ${isOpen ? 'is-open' : ''}`} aria-hidden="true">▸</span>
            </button>
            {isOpen && <p className="faq-accordion__answer">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion

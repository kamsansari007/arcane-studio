function ServiceCardsGrid({ items }) {
  return (
    <div className="services-row">
      {items.map((item) => (
        <div className="service-card" key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceCardsGrid

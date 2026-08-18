function IconCardGrid({ items, variant = 'challenge' }) {
  const gridClass = variant === 'challenge' ? 'challenge-grid' : 'arch-flow'
  const cardClass = variant === 'challenge' ? 'challenge-card' : 'arch-block'
  const iconClass = variant === 'challenge' ? 'icon' : 'arch-icon'
  const Heading = variant === 'challenge' ? 'h3' : 'h4'

  return (
    <div className={gridClass}>
      {items.map((item) => (
        <div className={cardClass} key={item.title}>
          <div className={iconClass} aria-hidden="true">{item.icon}</div>
          <Heading>{item.title}</Heading>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default IconCardGrid

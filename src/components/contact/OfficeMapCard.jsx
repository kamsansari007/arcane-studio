import './OfficeMapCard.css'

function OfficeMapCard({ label, mapSrc, mapsHref, className = '' }) {
  return (
    <div className={`office-map-card ${className}`}>
      <div className="office-map-card__frame">
        <iframe
          src={mapSrc}
          title={label}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {mapsHref && (
          <a href={mapsHref} target="_blank" rel="noreferrer" className="office-map-card__open-link">
            Open in Maps <span aria-hidden="true">&#8599;</span>
          </a>
        )}
      </div>
      <div className="office-map-card__caption">
        <h3>{label}</h3>
      </div>
    </div>
  )
}

export default OfficeMapCard

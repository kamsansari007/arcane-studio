function OutcomesGrid({ groups }) {
  return (
    <div className="outcomes-grid">
      {groups.map((group) => (
        <div className="outcome-group" key={group.title}>
          <h3>{group.title}</h3>
          {group.items.map((item) => (
            <div className="outcome-item" key={item.text}>
              <div className="outcome-check">{item.marker}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OutcomesGrid

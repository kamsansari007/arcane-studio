import './KeyTakeaways.css'

function KeyTakeaways({ items }) {
  return (
    <div className="key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="key-takeaways__arrow" aria-hidden="true">&rarr;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeyTakeaways

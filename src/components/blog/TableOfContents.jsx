import './TableOfContents.css'

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function TableOfContents({ headings }) {
  return (
    <div className="table-of-contents">
      <h4>Table of Contents</h4>
      <ul>
        {headings.map((heading) => (
          <li key={heading}>
            <a href={`#${slugify(heading)}`}>{heading}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { slugify }
export default TableOfContents

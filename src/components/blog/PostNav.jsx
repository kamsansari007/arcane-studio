import { Link } from 'react-router-dom'
import './PostNav.css'

function PostNav({ prev, next }) {
  if (!prev && !next) return null

  return (
    <nav className="post-nav">
      {prev ? (
        <Link to={`/blog/${prev.slug}`} className="post-nav__link post-nav__link--prev">
          <span className="post-nav__arrow" aria-hidden="true">&larr;</span>
          <span className="post-nav__text">
            <span className="post-nav__label">Previous</span>
            <span className="post-nav__title">{prev.title}</span>
          </span>
        </Link>
      ) : <span />}

      {next ? (
        <Link to={`/blog/${next.slug}`} className="post-nav__link post-nav__link--next">
          <span className="post-nav__text">
            <span className="post-nav__label">Next</span>
            <span className="post-nav__title">{next.title}</span>
          </span>
          <span className="post-nav__arrow" aria-hidden="true">&rarr;</span>
        </Link>
      ) : <span />}
    </nav>
  )
}

export default PostNav

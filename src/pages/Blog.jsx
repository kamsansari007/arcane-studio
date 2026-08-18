import { useEffect, useState } from 'react'
import BlogCard from '../components/blog/BlogCard.jsx'
import { blogPosts } from '../data/blogPosts.js'
import './Blog.css'

const POSTS_PER_PAGE = 4

function Blog() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const start = (page - 1) * POSTS_PER_PAGE
  const visiblePosts = blogPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <div className="blog-listing">
      <section className="section blog-listing__welcome">
        <div className="container">
          <div className="blog-listing__welcome-card">
            <div>
              <h1>Welcome to Our Blog!</h1>
              <p>Join us to discover forward-thinking perspectives and leading solutions that are redefining the built environment.</p>
            </div>
            <img src="/assets/arcane-studio-logo.svg" alt="Arcane Studio" />
          </div>
        </div>
      </section>

      <section className="section section--dark blog-listing__grid-section">
        <div className="container">
          <div className="blog-listing__grid">
            {visiblePosts.map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>

          <nav className="blog-listing__pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                className={num === page ? 'is-active' : ''}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            ))}
            {page < totalPages && (
              <button type="button" className="blog-listing__next" onClick={() => setPage(page + 1)}>
                Next Page <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Blog

import { blogPosts } from '../data/blog.js'
import './BlogPreview.css'

function BlogPreview() {
  return (
    <section className="section section--dark blog-preview" id="blog">
      <div className="container blog-preview__layout">
        <h2 className="blog-preview__title">See What&apos;s New</h2>

        <div className="blog-preview__list">
          {blogPosts.map((post) => (
            <a href="#blog" className="blog-card" key={post.title}>
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-card__body">
                <span className="eyebrow">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

import { Link } from 'react-router-dom'
import CategoryLabel from './CategoryLabel.jsx'
import './BlogLayout.css'

function BlogLayout({ post, sidebar, children, footer }) {
  return (
    <article className="blog-post">
      <div className="blog-post__hero" style={{ backgroundImage: `url(${post.heroImage})` }}>
        <div className="blog-post__hero-overlay" />
        <div className="container blog-post__hero-content">
          <div className="blog-post__breadcrumb">
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span>{post.title}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="blog-post__meta">
            <span>{post.author}</span>
            <span aria-hidden="true">|</span>
            <span>{post.dateLabel}</span>
            <span aria-hidden="true">|</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </div>

      <div className="container blog-post__body">
        <div className="blog-post__author-card">
          <img src={post.authorAvatar} alt={post.author} />
          <div>
            <span className="blog-post__author-name">{post.author}</span>
            <span className="blog-post__author-org">{post.authorOrg} | Published {post.dateLabel}</span>
          </div>
          <CategoryLabel category={post.category} />
        </div>

        <div className="blog-post__grid">
          <div className="blog-post__content">{children}</div>
          <div className="blog-post__sidebar">{sidebar}</div>
        </div>

        {footer}
      </div>
    </article>
  )
}

export default BlogLayout

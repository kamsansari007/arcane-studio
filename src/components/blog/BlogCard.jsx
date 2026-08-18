import { Link } from 'react-router-dom'
import CategoryLabel from './CategoryLabel.jsx'
import './BlogCard.css'

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card__image">
        <img src={post.heroImage} alt={post.title} loading="lazy" />
      </div>
      <div className="blog-card__body">
        <CategoryLabel category={post.category} />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <div className="blog-card__divider" />
        <div className="blog-card__meta">
          <img className="blog-card__avatar" src={post.authorAvatar} alt={post.author} loading="lazy" />
          <div className="blog-card__author">
            <span className="blog-card__author-name">{post.author}</span>
            <span className="blog-card__author-org">{post.authorOrg}</span>
          </div>
          <span className="blog-card__date">{post.dateShort}</span>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard

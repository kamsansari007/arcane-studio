import BlogCard from './BlogCard.jsx'
import './RelatedPosts.css'

function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="related-posts">
      <h2>Related Articles</h2>
      <div className="related-posts__grid">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts

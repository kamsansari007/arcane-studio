import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import BlogLayout from '../components/blog/BlogLayout.jsx'
import ArticleBody from '../components/blog/ArticleBody.jsx'
import TableOfContents from '../components/blog/TableOfContents.jsx'
import ArticleSidebar from '../components/blog/ArticleSidebar.jsx'
import PostNav from '../components/blog/PostNav.jsx'
import RelatedPosts from '../components/blog/RelatedPosts.jsx'
import { getPostBySlug, getAdjacentPosts, getRelatedPosts } from '../data/blogPosts.js'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const { prev, next } = getAdjacentPosts(slug)
  const related = getRelatedPosts(slug)

  const headings = [
    ...post.sections.map((section) => section.heading),
    ...(post.faq && post.faq.length > 0 ? ['Frequently Asked Questions'] : []),
    'Conclusion',
  ]

  return (
    <BlogLayout
      post={post}
      sidebar={(
        <>
          <TableOfContents headings={headings} />
          <ArticleSidebar caseStudy={post.caseStudy} />
        </>
      )}
      footer={<RelatedPosts posts={related} />}
    >
      <ArticleBody post={post} />
      <PostNav prev={prev} next={next} />
    </BlogLayout>
  )
}

export default BlogPost

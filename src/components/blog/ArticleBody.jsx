import KeyTakeaways from './KeyTakeaways.jsx'
import ComparisonTable from './ComparisonTable.jsx'
import FAQAccordion from './FAQAccordion.jsx'
import { slugify } from './TableOfContents.jsx'
import './ArticleBody.css'

function ArticleBody({ post }) {
  return (
    <div className="article-body">
      <KeyTakeaways items={post.keyTakeaways} />

      <div className="article-body__intro">
        {post.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {post.sections.map((section) => (
        <div className="article-body__section" key={section.heading}>
          <h2 id={slugify(section.heading)}>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}

      {post.comparisonTable && (
        <ComparisonTable
          leftHeader={post.comparisonTable.leftHeader}
          rightHeader={post.comparisonTable.rightHeader}
          rows={post.comparisonTable.rows}
        />
      )}

      {post.faq && post.faq.length > 0 && (
        <div className="article-body__section">
          <h2 id={slugify('Frequently Asked Questions')}>Frequently Asked Questions</h2>
          <FAQAccordion items={post.faq} />
        </div>
      )}

      <div className="article-body__conclusion">
        <h2 id={slugify('Conclusion')}>Conclusion</h2>
        <p>{post.conclusion}</p>
      </div>

      {post.tags && (
        <div className="article-body__tags">
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ArticleBody

import React from "react"
import { Link, graphql } from "gatsby"
import Emoji from "react-emoji-render"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Author from "../components/Author/author"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo pagetitle={post.frontmatter.title} />
      <article className={`entry`}>
        <div className={`entry__inner`}>
          <header className={`entry__header`}>
            <h1 className={`entry__title`}>{post.frontmatter.title}</h1>
            <div className={`entry__meta`}>
              <p className={`entry__date`}><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
              <p className={`entry__category`}><Link to={`/`}>{post.frontmatter.category}</Link></p>
            </div>
          </header>
          <figure className={`thumbnail`} >
            <Emoji text={post.frontmatter.emoji || "📝"} />
          </figure>
          <div className={`entry__content`} dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className={`entry__footer`}>
            <ul className={`entry__tags`}>
              {post.frontmatter.tags.map(tag => (
                <li key={tag}><Link to={`/tags/${tag.fieldValue}/`}>#{tag}</Link></li>
              ))}
            </ul>
          </footer>
        </div>
        <Author />
      </article>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!){
  markdownRemark(frontmatter: {slug: {eq: $slug}}
    ) {
      html
      frontmatter {
        title
        date(formatString: "MMM D YYYY")
        category
        slug
        tags
        emoji
      }
      tableOfContents
    }
  }`

export default BlogPost
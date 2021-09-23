import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article className={`entry`}>
        <div className={`entry__inner`}>
          <header className={`entry__header`}>
            <h1 className={`entry__title`}>{post.frontmatter.title}</h1>
            <div className={`entry__meta`}>
              <p className={`entry__date`}><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
              <p className={`entry__category`}><Link to={`/`}>{post.frontmatter.category}</Link></p>
            </div>
          </header>
          <figure></figure>
          <div className={`entry__content`} dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className={`entry__footer`}></footer>
        </div>
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
      }
      tableOfContents
    }
  }`

export default BlogPost
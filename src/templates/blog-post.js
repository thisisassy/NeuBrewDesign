import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <article className={`entry`}>
          <div className={`entry__inner`}>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <div>
                <p><time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time></p>
                <p><Link to={`/`}>{post.frontmatter.category}</Link></p>
              </div>
            </header>
            <figure></figure>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer></footer>
          </div>
        </article>
      </div>
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
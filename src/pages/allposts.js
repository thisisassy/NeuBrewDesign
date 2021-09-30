import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Emoji from "react-emoji-render"

const AllPosts = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const sum = data.allMarkdownRemark.totalCount
  return (
    <Layout>
      <Seo />
      <section>
        <h2>All Posts<span>{sum}</span></h2>
        <div>
          {posts.map(({ node }) => (
            <article key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure>
                  <Emoji text={node.frontmatter.emoji || "📝"} />
                </figure>
                <div>
                  <h3>{node.frontmatter.title}</h3>
                  <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout >
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            slug
            emoji
            date(formatString: "MMM DD YYYY")
          }
        }
      }
      totalCount
    }
  }
`
export default AllPosts
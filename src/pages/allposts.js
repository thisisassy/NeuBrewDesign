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
        <h2 className={`pageHeading`}>All Posts<span className={`count`}>{sum}</span></h2>
        <div className={`allPosts`}>
          {posts.map(({ node }) => (
            <article className={`allPostsItem`} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure className={`allPostsThumbnail`}>
                  <Emoji text={node.frontmatter.emoji || "📝"} />
                </figure>
                <div className={`allPostsItemHeader`}>
                  <h3>{node.frontmatter.title}</h3>
                  <div className={`allPostsItemMeta`}>
                    <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                    <p>{node.frontmatter.category}</p>
                  </div>
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
            category
          }
        }
      }
      totalCount
    }
  }
`
export default AllPosts
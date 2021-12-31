import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Emoji from "react-emoji-render"
import * as styles from "../AllPosts/index.module.scss"

const AllPosts = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            thumbnail
            slug
            emoji
            draft
            date(formatString: "YYYY.MM.DD")
            category
          }
          excerpt(format: PLAIN, pruneLength: 80, truncate: true)
        }
      }
    }
  }
`)
  const posts = data.allMarkdownRemark.edges
  return (
    <section>
      <div className={styles.allPosts}>
        {posts.map(({ node }) => (
          <article className={styles.allPostsItem} key={node.frontmatter.slug}>
            <Link to={`/${node.frontmatter.slug}`}>
              <figure className={styles.allPostsThumbnail}>
                <Emoji text={node.frontmatter.emoji || "📝"} />
              </figure>
              <div className={styles.allPostsItemHeader}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
                <div className={styles.allPostsItemMeta}>
                  <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                  <p>{node.frontmatter.category}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
export default AllPosts
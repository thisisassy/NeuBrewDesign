import React from "react"
import { graphql, Link } from "gatsby"
import Emoji from "react-emoji-render"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/pages/index.module.scss"


const IndexPage = ({ data }) => {
  const RecentEntry = data.recent.edges
  const category = data.cat.group
  const sum = data.cat.totalCount
  return (
    <Layout>
      <Seo />
      <section>
        <div className={styles.sectionHead}>
          <h3>All {sum} posts</h3>
          <ul className={styles.catList}>
            {category.map(category => (
              <li><Link to={`/categories/${category.fieldValue}/`}>{category.fieldValue}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.NewestEntry}>
          {RecentEntry.map(({ node }) => (
            <article className={`recentItem`} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure className={styles.entry__thumbnail}>
                  <Emoji text={node.frontmatter.emoji || "📝"} />
                </figure>
                <div className={styles.entryHeader}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.excerpt}</p>
                  <div className={styles.entryMeta}>
                    <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                    <p>{node.frontmatter.category}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <p className={styles.seeMoreLink}><Link to={`/allposts/`}>See more posts</Link></p>
    </Layout>
  )
}
export const query = graphql`
{
  recent: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 12)  {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMM D YYYY")
          category
          slug
          emoji
        }
        excerpt(format: PLAIN, pruneLength: 50, truncate: true)
      }
    }
  }
  entry: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, skip: 3, limit: 7) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMM D YYYY")
          category
          slug
          emoji
        }
        excerpt(format: PLAIN, pruneLength: 80, truncate: true)
      }
    }
  }
  cat: allMarkdownRemark {
    totalCount
    group(field: frontmatter___category) {
      fieldValue
      totalCount
    }
  }
}
`
export default IndexPage
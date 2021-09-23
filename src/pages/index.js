import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/Sidebar/sidebar"


const IndexPage = ({ data }) => {
  const RecentEntry = data.recent.edges
  const Entry = data.entry.edges
  return (
    <Layout>
      <Seo />
      <section>
        <div className={`NewestEntry`}>
          {RecentEntry.map(({ node }) => (
            <article className={`recentItem`} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure></figure>
                <div className={`entryHeader`}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.excerpt}</p>
                  <div className={`entryMeta`}>
                    <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                    <p>{node.frontmatter.category}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className={`entrySection`}>
        <div className={`NormalEntry`}>
          {Entry.map(({ node }) => (
            <article className={`entryItem`} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure></figure>
                <div className={`entryHeader`}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.excerpt}</p>
                  <div className={`entryMeta`}>
                    <p><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></p>
                    <p>{node.frontmatter.category}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <Sidebar />
      </section>
    </Layout>
  )
}
export const query = graphql`
{
  recent: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3)  {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMM D YYYY")
          category
          slug
        }
        excerpt(pruneLength: 140)
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
        }
        excerpt(pruneLength: 140)
      }
    }
  }
}
`
export default IndexPage
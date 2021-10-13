import React from "react"
import { Link, graphql } from "gatsby"
import Emoji from "react-emoji-render"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag}の記事一覧`

  return (
    <Layout>
      <Seo pagetitle={tagHeader} />
      <section>
        <h1>{tagHeader}<span>{totalCount}</span></h1>
        <div className={`tagEntry`}>
          {edges.map(({ node }) => (
            <article className={`tagEntryItem`} key={node.frontmatter.slug}>
              <Link to={`/${node.frontmatter.slug}`}>
                <figure className={`entry__thumbnail`}>
                  <Emoji text={node.frontmatter.emoji || "📝"} />
                </figure>
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
    </Layout>
  )
}

export const query = graphql`
query($tag: String)  {
  allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMM D YYYY")
          draft
          emoji
          thumbnail
          tags
        }
      }
    }
  }
}
`

export default Tags
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag}の記事一覧`

  return (
    <Layout>
      <Seo pagetitle={tagHeader} />
      <section>
        <h1>{tagHeader}<span>{totalCount}</span></h1>
        <div>
          <article>
            <Link to={`/`}>
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
      field
    }
    nodes {
      frontmatter {
        title
      }
    }
  }
}
`

export default Tags
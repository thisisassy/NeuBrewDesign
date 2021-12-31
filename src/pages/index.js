import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/pages/index.module.scss"
import AllPosts from "../components/AllPosts/allposts"

const IndexPage = ({ data }) => {
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
      </section>
      <AllPosts />
    </Layout>
  )
}
export const query = graphql`
{
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
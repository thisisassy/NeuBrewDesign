import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`)

  const category = data.allMarkdownRemark.group
  return (
    <footer>
      <div className={styles.footer__inner}>
        <h1><Link to={`/`}>Neu Brew Design</Link></h1>
        <ul>
          <li><Link to={`/allposts/`}>All Posts</Link></li>
          <li><Link to={`/about/`}>About</Link></li>
          <li><Link to={`/policy/`}>Privacy Policy</Link></li>
          <li><Link to={`/contact/`}>Contact</Link></li>
        </ul>
        <div>
          <ul>
            {category.map(category => (
              <li><Link to={`/categories/${category.fieldValue}/`}>{category.fieldValue}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            {/* <h4>Sponsored</h4> */}
          </div>
        </div>
      </div>
      <div className={styles.footer__outer}>
        <p className={styles.copyright}><span>&copy;{new Date().getFullYear()}</span>{` `}<Link to={`/`}>Neu Brew Design</Link></p>
      </div>
    </footer>
  )
}
export default Footer
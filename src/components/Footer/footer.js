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
        <ul className={styles.footer__nav}>
          <li><Link to={`/allposts/`}>All Posts</Link></li>
          <li><Link to={`/about/`}>About</Link></li>
          <li><Link to={`/policy/`}>Privacy Policy</Link></li>
          <li><Link to={`/contact/`}>Contact</Link></li>
        </ul>
        <div className={styles.foot__category}>
          <ul>
            {category.map(category => (
              <li><Link to={`/categories/${category.fieldValue}/`}>{category.fieldValue}</Link></li>
            ))}
          </ul>
        </div>
        <div className={styles.sponsoredLink}>
          <div>
            <h4>Sponsored</h4>
            <a href="https://px.a8.net/svt/ejp?a8mat=3HKDTG+FA4JQQ+4H72+5ZMCH" rel="nofollow">
              <img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=210903028924&amp;wid=001&amp;eno=01&amp;mid=s00000020891001006000&amp;mc=1" /></a>
            <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3HKDTG+FA4JQQ+4H72+5ZMCH" alt="" />
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
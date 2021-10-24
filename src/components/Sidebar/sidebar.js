import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Sidebar/index.module.scss"
import Profile from "../../images/profile.jpg"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`)

  const tag = data.allMarkdownRemark.group
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.sideModule} ${styles.profileModule}`}>
        <h3>Profile</h3>
        <img src={Profile} alt="" />
        <h3>Haruka Ashley</h3>
        <p>デザインとコーディングのメモ。生活と読書、思考の記録を書いています。</p>
        <Link to={`/about/`}>詳しいプロフィールをみる</Link>
      </div>
      <div className={`${styles.sideModule} ${styles.featureModule}`}>
        <h3>Feature</h3>
        <ul className={`entry__tags`}>
          {tag.map(tag => (
            <li>#<Link to={`/tags/${tag.fieldValue}/`}>{tag.fieldValue}<span>{tag.totalCount}</span></Link></li>
          ))}
        </ul>
      </div >
      <div className={`${styles.sideModule} ${styles.sponsoredModule}`}>
        <h3>Sponsored</h3>
        <a href="https://px.a8.net/svt/ejp?a8mat=3HMZTY+75SPPU+407E+65U41" rel="nofollow">
          <img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=211024870433&amp;wid=001&amp;eno=01&amp;mid=s00000018689001035000&amp;mc=1" /></a>
        <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3HMZTY+75SPPU+407E+65U41" alt="" />
      </div>
    </aside >
  )
}
export default Sidebar
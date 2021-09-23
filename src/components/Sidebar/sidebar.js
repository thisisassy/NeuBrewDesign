import React from "react"
import { Link } from "gatsby"
import * as styles from "../Sidebar/index.module.scss"

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.sideModule} ${styles.profileModule}`}>
        <h3>Profile</h3>
        <p>Haruka Ashley. デザインとコーディングのメモ。生活と読書、思考の記録を書いています。</p>
        <Link to={`/about/`}>詳しいプロフィールをみる</Link>
      </div>
      <div className={`${styles.sideModule} ${styles.sponsoredModule}`}>
        <h3>Sponsored</h3>
        <div><a href="https://px.a8.net/svt/ejp?a8mat=3HE1B0+BLYBG2+3F5M+626XT" rel="nofollow">
          <img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=210606876702&amp;wid=001&amp;eno=01&amp;mid=s00000015961001018000&amp;mc=1" /></a>
          <img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=3HE1B0+BLYBG2+3F5M+626XT" alt="" /></div>
      </div>
    </aside>
  )
}
export default Sidebar
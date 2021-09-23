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
    </aside>
  )
}
export default Sidebar
import React from "react"
import { Link } from "gatsby"
import * as styles from "../Author/index.module.scss"
import Profile from "../../images/profile.jpg"

const Author = () => {
  return (
    <div className={styles.authorItem}>
      <h3 className={styles.heading}>この記事を書いた人</h3>
      <div className={styles.authorBody}>
        <div className={styles.authorImage}><img src={Profile} alt="" /></div>
        <div>
          <h4>Haruka</h4>
          <p>デザインとコーディングのメモ。生活と読書、思考の記録を書いています。</p>
          <p><Link to={`/about/`}>詳しいプロフィールをみる</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Author
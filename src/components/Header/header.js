import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Header/index.module.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>Neu Brew Design</h1>
        <ul>
          <li className={styles.nav__item}><Link href="/">All Posts</Link></li>
          <li className={styles.nav__item}><Link to={`/`}>About</Link></li>
          <li className={styles.nav__item}><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
export default Header
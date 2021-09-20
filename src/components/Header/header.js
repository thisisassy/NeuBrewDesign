import React from "react"
import { Link } from "gatsby"
import * as styles from "../Header/index.module.scss"

const Header = () => {
  return (
    <header>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>Neu Brew Design</h1>
        <ul>
          <li className={styles.nav__item}><Link to={`/`}>All Posts</Link></li>
          <li className={styles.nav__item}><Link to={`/about/`}>About</Link></li>
          <li className={styles.nav__item}><Link to={`/contact/`}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
export default Header
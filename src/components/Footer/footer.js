import React from "react"
import { Link } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__inner}>
        <h1>Neu Brew Design</h1>
        <ul className={styles.footer__nav}>
          <li className={styles.nav__item}><Link to={`/`}>All Posts</Link></li>
          <li className={styles.nav__item}><Link to={`/`}>About</Link></li>
          <li className={styles.nav__item}><Link to={`/`}>Contact</Link></li>
        </ul>
        <div className={styles.foot__category}>
          <li>Blog</li>
          <li>English</li>
          <li>Life</li>
          <li>Study</li>
          <li>Tech</li>
        </div>
        <div>{/* 広告を入れる */}</div>
      </div>
      <div className={styles.footer__outer}>
        <p className={styles.copyright}><span>&copy;{new Date().getFullYear()}</span>{` `}<Link to={`/`}>Neu Brew Design</Link></p>
      </div>
    </footer>
  )
}
export default Footer
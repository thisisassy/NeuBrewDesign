import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__inner}>
        <h1>Neu Brew Design</h1>
        <ul className={styles.footer__nav}>
          <li><a href="/">All Posts</a></li>
          <li><Link to={`/`}>About</Link></li>
          <li><a href="/">Contact</a></li>
        </ul>
        <div className={styles.foot__category}>
          <li>Blog</li>
          <li>English</li>
          <li>Life</li>
          <li>Study</li>
          <li>Tech</li>
        </div>
        <div>
          <h3>Sponsored</h3>
        </div>
      </div>
      <div className={styles.footer__outer}>
        <p className={styles.copyright}><span>&copy;{new Date().getFullYear()}</span>{` `}<Link to={`/`}>Neu Brew Design</Link></p>
      </div>
    </footer>
  )
}
export default Footer
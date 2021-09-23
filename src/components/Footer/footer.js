import React from "react"
import { Link } from "gatsby"
import * as styles from "../Footer/index.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__inner}>
        <h1><Link to={`/`}>Neu Brew Design</Link></h1>
        <ul className={styles.footer__nav}>
          <li><Link to={`/`}>All Posts</Link></li>
          <li><Link to={`/about/`}>About</Link></li>
          <li><Link to={`/policy/`}>Privacy Policy</Link></li>
          <li><Link to={`/contact/`}>Contact</Link></li>
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
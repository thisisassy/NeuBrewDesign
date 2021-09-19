import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className={`footer__inner`}>
        <h1>Neu Brew Design</h1>
        <ul>
          <li><a href="/">All Posts</a></li>
          <li><Link to={`/`}>About</Link></li>
          <li><a href="/">Contact</a></li>
          <li><p className={`copyright`}><span>&copy;{new Date().getFullYear()}</span>{` `}<Link to={`/`}>Neu Brew Design</Link></p></li>
        </ul>
        <div>
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
    </footer>
  )
}
export default Footer
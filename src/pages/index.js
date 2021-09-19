import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div className={`contents`}>
      <header>
        <h1>Neu Brew Design</h1>
        <ul>
          <li><a href="/">All Posts</a></li>
          <li><Link to={`/`}>About</Link></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </header>
      <footer>
        <div className={`footer__inner`}>
          <h1>Neu Brew Design</h1>
          <ul>
            <li><a href="/">All Posts</a></li>
            <li><Link to={`/`}>About</Link></li>
            <li><a href="/">Contact</a></li>
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
    </div>
  )
}

export default IndexPage
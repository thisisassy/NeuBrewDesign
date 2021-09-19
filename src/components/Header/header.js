import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Neu Brew Design</h1>
      <ul>
        <li><a href="/">All Posts</a></li>
        <li><Link to={`/`}>About</Link></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </header>
  )
}
export default Header
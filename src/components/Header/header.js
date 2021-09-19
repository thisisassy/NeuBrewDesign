import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../Header/index.module.scss"

const Header = () => {
  return (
    <header>
      <div className={`header__inner`}>
        <h1 className={`header__logo`}>Neu Brew Design</h1>
        <ul>
          <li className={`nav__item`}><Link href="/">All Posts</Link></li>
          <li className={`nav__item`}><Link to={`/`}>About</Link></li>
          <li className={`nav__item`}><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
export default Header
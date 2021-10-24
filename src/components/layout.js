import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import "../styles/styles.scss"

export default ({ children }) => (
  <div className={`wrapper`}>
    <Header />
    <main className={`content__inner`}>{children}</main>
    <Footer />
  </div>
)
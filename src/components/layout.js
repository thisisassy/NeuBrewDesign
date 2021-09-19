import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
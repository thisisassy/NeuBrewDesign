import React from "react"
import Header from "../src/components/Header/header"
import Footer from "../src/components/Footer/footer"

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
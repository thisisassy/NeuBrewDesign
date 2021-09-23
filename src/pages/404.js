import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ErrorPage = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="404 Not Found"
        pagepath={location.pathname} />
      <div style={{ padding: "0 82px", textAlign: "center" }}>
        <h1 style={{ fontSize: "72px", margin: "0" }}>404</h1>
        <p>Page Not Found</p>
        <p>お探しのページが見つかりませんでした。</p>
      </div>
    </Layout>
  )
}

export default ErrorPage
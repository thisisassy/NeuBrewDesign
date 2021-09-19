import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.scss"


const IndexPage = () => {
  return (
    <Layout className={`contents`}>
      <section className={`NewestEntry`}>
        <article>
          <figure></figure>
          <div className={`entryHeader`}>
            <h2>Title</h2>
            <p>excerpt</p>
            <div className={`entryMeta`}>
              <p><time dateTime=""></time></p>
              <p>Blog</p>
            </div>
          </div>
        </article>
      </section>
      <section className={`entryContainer`}></section>
    </Layout>
  )
}

export default IndexPage
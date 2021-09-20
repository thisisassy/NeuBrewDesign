import React from "react"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
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
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Success = () => {
  return (
    <Layout>
      <section className={`contact__container`}>
        <h3>送信が完了しました。</h3>
        <p>お問い合わせありがとうございました。</p>
        <p className={`back`}>
          <Link to={`/`}>ブログトップに戻る</Link>
        </p>
      </section>
    </Layout>
  )
}

export default Success
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ location }) => {
  return (
    <Layout>
      <Seo pagetitle="About"
        pagepath={location.pathname} />
      <section>
        <div>
          <h1>このブログと書いている人について</h1>
          <p>こんにちは。はじめまして、haruka <a href="https://twitter.com/neubrewdesign">(@neubrewdesign)</a>です。<br />
            このブログでは、Webデザインやコーディングなどの技術のことを中心に、生活向上、旅行、本のメモなど新しい暮らしと生き方について実験していく過程を書いています。</p>
          <p>普段はデザイナーとしてWebサイトやサービスのデザインをしています。仕事をしている上で、身についたデザインやコーディングの知見をブログに書いています。そのほかにも、日々の生活の向上や海外移住への道のり、旅行など幅広く話題を扱います。</p>
          <h4>自己紹介</h4>
          <p>名前：Haruka Ashley<br />
            1994年生まれ、関西在住<br />
            職業：デザイナー</p>
          <h4>好きなこと・やってみたいこと</h4>
          <p>読書・海外ドラマ鑑賞・語学学習・図書館<br />やってみたいことは海外移住、大学院留学、移動しながらの生活</p>
          <p>お問い合わせや記事の内容に関する要望・質問はお問い合わせフォームかTwitterのDMで承ります。</p>
          <p>
            <Link to={`/`}>お問い合わせフォームはこちら</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
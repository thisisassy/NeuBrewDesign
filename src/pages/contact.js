import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/pages/contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <Seo pagetitle="Contact" />
      <section className={`contact__container`}>
        <h2>Contact</h2>
        <div className={`contact__form`}>
          <form className={`form`}
            name="Contact Form"
            method="POST"
            data-netlify="turue"
            action="/success">
            <input type="hidden" name="form-name" value="Contact Form"></input>
            <label>
              <div>お名前</div>
              <input type="text" name="name" className={`form__field`}></input>
            </label>
            <label>
              <div>メールアドレス</div>
              <input type="text" name="email" className={`form__field`}></input>
            </label>
            <label>
              <div>お問い合わせ内容</div>
              <textarea name="message" className="form__message" placeholder="こちらにお問い合わせ内容をお書きください。"></textarea>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit" className={`btn submitBtn`}>送信</button>
            </label>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
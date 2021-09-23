---
title: "GatsbyJSブログでGoogleアドセンスの審査を通過したい"
slug: 2021-09-04-gatsbyjs-blog-google-adsense
date: 2021-09-04
draft: false
category: ["Blog"]
tags: ["GoogleAdsense"]
thumbnail: ./thumbnail.jpg
---

1回目の審査を申し込んで、記事数を見直してみて、2回目にトライしてみたのですが、やはり審査に落ちてしまいました。あまり無闇にやっても受からない気がするので、GatsbyJSで制作されたブログがGoogleアドセンスの審査を通過して、広告での収益化を目指すために改めてしっかりやるべきことを記録しておきます。

まずは先人の知恵を借りるべき、他にGatsbyJS製のブログを使っている上で、Googleアドセンスの審査に合格している人たちのブログを拝見しました。他の人の記事をよく読んでいく中で、私のブログに足りていないものがわかってきました。



### html.jsを用意する

アドセンスから支給されたscriptタグをhead内に貼り付けるために、html.jsファイルを用意します。

```
cp .cache/default-html.js src/html.js
```

こうすると、src/直下にhtml.jsが作成されます。作成された時の中身はこんな感じです。

```
import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        // ここにアドセンスのscriptタグを記述
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html >
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

```

`{props.headComponents}`の下にアドセンスのscriptタグを記述します。



### カテゴリーやタグページでうまく機能していないページを非表示にする

2回目の審査に落ちて、価値の低い広告枠（コンテンツの量が不十分なサイト）についてという注意が追加されました。これはつまり前回の申し込みよりサイトの品質が落ちたことを意味します。

恐らく、カテゴリーページやタグページを追加したことが要員かと思います。これらのページはカテゴリーやタグごとにまとめられているだけで、indexと同じ記事を表示しています。

一旦カテゴリー別の記事一覧ページは非表示にしました。またブログのカテゴリーも見直して、デザインと技術記事をTechにまとめて、全部で5つに絞りました。



### 過去の記事をリライト

稼ぐ、儲ける、お金など少し下心が見えた単語を使っている記事たちは合格するまでの間は非公開もしくは内容を精査して書き直しました。


### 記事数を増やす

2度申請した時点で、ブログの総記事数が20に足りていませんが、審査に時間がかかることもあり、申請後にも記事を書いてトータル20以上を目指します。

以上の取り組みをやってみて、再び申請してみます。さて結果はどうなることやら。

こちらのブログを参考にしました。  
[【Gatsby.js】Google AdSense の導入から広告設置、収益化までを解説](https://okuhira.studio/gatsbyjs-googleadsense/)
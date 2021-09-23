---
title: GatsbyJSで最新記事を出し分ける
slug: gatsbyjs-entries
date: 2021-08-28
draft: false
category: ["Tech"]
tags: ["GatsbyJS"]
thumbnail: ./thumbnail.jpg
---

このブログのトップの記事一覧の見た目を変更しました。以前は記事カードをただ並べていただけですが、今回は最新記事3つを一番上に横並びにして、他の記事は縦に並べてみました。そしてサイドバーを横に持ってきました。

今回は、記事をパーツ別に表示する方法において備忘録的に書いておきます。


### queryにそれぞれ名前をつける

`pages/index.js`など記事一覧を表示しているファイルのqueryを見ます。それぞれgraphqlから取得してるものに名前をつけます。名前をつけておくことで、同じものを取得していてもエラーにならずにすみます。

```
export const query = graphql`
query {
  recent: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
    edges {
      node {
        frontmatter {
         ...
        }
      }
    }
  }
  entry: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, skip: 3, limit: 6) {
    edges {
      node {
        frontmatter {
        ...
        }
      }
    }
  }
}
`
```

最新記事を3つだけ出すために、`limit: 3`で記事数を制限しています。そして2個目の記事一覧で`skip: 3`として、４番目以降の記事を表示させています。



### それぞれを出しわける

```
const IndexPage = ({ data }) => {
  const RecentModule = data.recent.edges
  const Entry = data.entry.edges
  return ()
  ...
```

最新記事と他の記事と分けて、同じように記事一覧ページを実装すればオーケーです。



GatsbyJSもJavaScriptmも少しずつわかるようになってきた。

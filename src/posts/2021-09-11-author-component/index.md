---
title: "Gatsbyブログにもこの記事書いた人を表示させる"
slug: "2021-09-11-author-component"
date: "2021-09-11"
draft: false
category: ["Tech"]
tags: ["GatsbyJS"]
emoji: "🛠"
---

こんにちは、[Haruka](https://twitter.com/neubrewdesign)です。

最近ちょこちょこブログの見た目や機能を変更していましたが、このブログにも著者情報を表示させました。
よくブログの記事の一番下にあるこの記事書いた人っていうやつです。

作り方は簡単ですが、書いておきます。テキストとプロフィール画像を表示させるシンプルな見た目をつくります。


### コンポーネントをつくる

まずは他と同じように`author.js`ファイルを作ってコンポーネントを作成します。

```javascript
import React from "react"
import { Link } from "gatsby"
import Profile from "../images/profile.png"

const Author = () => {
  return (
    <section>
      <h2>この記事を書いた人</h2>
      <div>
        <div>
          <img src={Profile} alt />
        </div>
        <div>
          <h4>name</h4>
          <p>text<br />
            <Link to={`/link`}>link</Link></p>
        </div>
      </div>
    </section>
  )
}
export default Author
```

ここで表示させる画像はStaticQueryは使わずに、`src/images`フォルダにある画像を引っ張ってきています。
`import Profile from "../images/profile.png"`

そして作成したコンポーネントをブログ記事を生成しているテンプレートファイルから読み込ませます。

```
// blog-post.js
import Author from "../components/author"
```
表示されたら、スタイルを当てていきましょう。

![image-01](./image-01.png)

これで著者情報を表示することができました。
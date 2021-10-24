---
title: "GatbyJSのブログ記事のサムネイルに絵文字を表示させる"
date: "2021-09-27"
slug: "2021-09-27-display-emoji-on-thumbnails-of-articles"
draft: false
category: ["Tech"]
tags: ["GatsbyJS"]
emoji: "🛠"
---

これまで画像をつくっていたサムネイルを絵文字を表示させて統一感を出すことにしました。
今までは記事に合ったサムネイル画像をcanvaなので作って記事ごとに表示させていました。そうすると、いちいち画像を作らないといけない、画像がないときはブログのog画像が代わりに表示されて少し地味になるなど手間がかかると思い始めました。

最近だと、zenn.devを始め、わざわざアイキャッチ画像を設定せず、記事の内容やカテゴリーに合った絵文字を表示させている媒体をよく見かけます。

![thumbnail](./image1.png)  
見た目はこんな感じ。

### やったこと
絵文字を表示させるために[react-emoji-render](https://github.com/tommoor/react-emoji-render)を使用しました。

```
yarn add react-emoji-render
```

絵文字を表示させたいページもしくはコンポーネントに読み込みます。
```
import Emoji from "react-emoji-render"
```

markdownで書いている記事に、`emoji: "🛠"`を追加し、graphqlクエリにも`emoji`を追記します。
そして表示させたいところに1行追加します。
```
<figure>
  <Emoji text={node.frontmatter.emoji || "📝"} />
</figure>
```
emojiがnullの場合は固定の絵文字を表示させるようにしています。

### 絵文字を中央寄せにする

ちなみに、絵文字を左右中央寄せにする場合は、`<Emoji />`の親要素に対して`display: flex`を設定して、`justify-content`, `align-items`にそれぞれ`center`とします。
```
figure {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

また絵文字はTwitterで使われているようなフラットなものにも変換できます。
その場合は、Twemojiを読み込みます。
```
import { Twemoji } from 'react-emoji-render';
...
<Twemoji svg text={emoji || "💻"} />
```

今後も記事執筆の面倒さを少しずつ改善していきます。

参考にした記事はこちら
- https://catnose99.com/blazing-fast-writing/
- https://gdhg.info/posts/gatsby-blog-emoji-thumbnail/
- https://k-log.netlify.app/blog/gatsby-blog-emoji-thumbnail


---


##### おすすめの書籍
<a href="https://www.amazon.co.jp/%E3%80%90%E7%89%B9%E5%85%B8%E4%BB%98%E3%81%8D-%E3%80%91Web%E3%82%B5%E3%82%A4%E3%83%88%E9%AB%98%E9%80%9F%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE-%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E6%B4%BB%E7%94%A8%E5%85%A5%E9%96%80-Compass-Books%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/4839973008?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3UBWV0C3JXMKN&dchild=1&keywords=GatsbyJS&qid=1634992548&sprefix=gatsbyjs%2Caps%2C181&sr=8-1&linkCode=li3&tag=akurah510-22&linkId=a6da24aada67ceb526a084efce526781&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4839973008&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=akurah510-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=akurah510-22&language=ja_JP&l=li3&o=9&a=4839973008" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
---
title: "GatsbyJSでCSS modulesを使ってSass/Scssを書く"
slug: "2021-06-18-gatsby-scss-css-modules"
date: "2021-06-18"
draft: false
category: ["Tech"]
tags: ["GatsbyJS", "Sass"]
thumbnail: ./hero.jpg
---

Gatsbyで作ったサイトのスタイルを書く時は、LessとSassの両方が使えます。今回はSassを使ってスタイリングする際の使い方を説明します。またレスポンシブサイトを作る上でのブレイクポイントの決め方も書いています。

#### プラグインを入れる

使用するプラグインは以下の通り。

```
yarn add node-sass gatsby-plugin-sass
```

そしてインストールが出来たら`Gatsby-config.js`に追記します。

```
plugins: [
`gatsby-plugin-sass`,
]
```



#### stylesファイルをつくる

次は実際にScssファイルを使っていきましょう。まずはスタイルのファイルを格納するフォルダ`styles`を`src`直下に作成します。私の場合はこんな感じのフォルダ構成です。

```
/
└─ src/
    └─ styles/
        ├─ common/
        │   ├─ _base.scss
        │		├─ _variable.scss
        └─ components/
        		├─ header.module.scss
        		├─ footer.module.scss
       
```

サイト全体に影響するフォントや変数の指定は、`base.scss`, `variable.scss`に書いています。

モジュールごとのscssは`***.module.scss`というファイル名でつくり各コンポーネントやページに合わせてつくります。

そしてこれらをインポートするメインのscssファイルを作ります。`index.scss`ファイルをつくり、ここで`@import`してscssを呼び出しています。以下のようになります。

```
@charset 'utf-8';

// base
@import '../styles/common/_base.scss';
@import '../styles/common/_variable.scss';

// component
@import '../styles/components/header.module.scss';
@import '../styles/components/footer.module.scss';
```

このファイルは`src/components/`の中に入れて、layout.jsで`import "../components/index.scss";`とスタイルを参照しています。

別のやり方では、gatsby-browser.jsに@importするやり方もあるようですが、私の場合はそれだとスタイルが反映されなかったのでこの方法にしました。

これでScssの使い方は一通り完了です。せっかくなのでScssでレスポンシブサイトを作れるようにブレイクポイントを設定していきましょう。



#### 変数でメディアクエリを定義する

横幅を決めるブレイクポイントを定義していきます。

```
$breakpoints: (
  'xs': 'screen and (min-width: 320px)',
  'sm': 'screen and (min-width: 520px)',
  'md': 'screen and (min-width: 960px)',
  'lg': 'screen and (min-width: 1200px)',
  'xl': 'screen and (min-width: 1400px)',
  ) !default;
  
```

つづいて、上で定義したメディアクエリをmixinを使って呼び出せるようにします。

```
 @mixin mq($breakpoint: md) {
    @media #{map-get($breakpoints, $breakpoint)} {
       @content;
      }
    }
```

こうすることで、スマホ、タブレット、pcのそれぞれのサイズのときの見え方を変更することができます。使い方はこんな感じ。

```
.header {
  padding: 0 24px;
  @include mq() { // 初期値のmd:960pxになる
    padding: 0 64px;
  }
}
```

Sassの変数とmixinの書き方は以下の記事を参考にしました。

[Sassの変数とmixinで変更に強いメディアクエリをつくる](https://www.tam-tam.co.jp/tipsnote/html_css/post10708.html)

そしてブレイクポイントの定義に関しては以下の記事が大変参考になります。

[【図解で納得】レスポンシブデザインのブレイクポイントの細かすぎる新解釈2021最新版](https://hashimotosan.hatenablog.jp/entry/2020/12/06/182327)
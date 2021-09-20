---
title: "GatsbyJSとNetlifyでブログをつくった"
slug: "2021-06-03-blogged-with-gatsbyjs-and-netlify"
date: "2021-06-03"
draft: false
tags: ["GatsbyJS"]
category: ["Tech"]
---

昨年からGatsbyJSには興味を持っており、参考書籍など購入して時間があるときにちまちま触っていました。ただずっと作っては壊し、作っては調べ、また壊すなどスクラップ＆ビルドばかりやっていました。これでは全然知見が貯まらないぞ、と思い直し新しくブログを作りました。

それがこのサイトです。

デプロイはGithub経由でNetlifyにビルドしています。買った本ではContentfulを使用してブログ記事を生成しているのですが、個人的にはmarkdownで書きたいので、`gatsby-transformer-remark`を利用しています。



作るにあたって参考にした記事はこちら: [Gatsby と Netlify で Jamstack 構成のブログサイトを作ろう](https://www.to-r.net/media/jamstack-demo/ "Gatsby と Netlify で Jamstack 構成のブログサイトを作ろう")



GatbyJSでの環境構築からサイトの設定などおおまかに参考した書籍はこちら

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=akurah510-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4839973008&linkId=61bc1b8000f62262ca08521083bd1a09"></iframe>



このブログでは今後、Gatsbyで制作した事柄についての備忘録を書いていきます。
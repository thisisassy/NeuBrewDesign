---
title: "実務で使っているgitコマンドまとめ"
date: "2021-10-29"
slug: "2021-10-29-git-commands-used-at-work"
draft: true
category: ["Tech"]
tags: ["Git"]
emoji: "🛠"
---

この1年で実務でコーディングすることが以前より増してきました。

Gitを使って作業していると、いろいろなGitコマンドを使う頻度がよくあり、いつも「あれ、どうやるんだっけ？」と思って何回も調べなおしていることがあります。  
そこで今回は索引になるように、実務でよく使うGitコマンドを、いつ使うかの場面別でまとめておきます。


### Gitの使い方、きほんのき

まずはGit操作の基本中のきほんです。コーディングの作業をしてある程度画面を変更したり、修正する箇所を直したときによく使う3つのコマンドです。

```
git add .
git commit -m "コミットメッセージ"
git push
```
この3つは基本中のきほん操作なので、ぜひ覚えておきましょう。

#### リポジトリの最新の情報を持ってくる

つぎは、他の人が別のブランチで修正のある箇所をmergeして、masterブランチの大元が最新の情報になった時に使います。  
頻繁に最新情報を取ってくる必要はありませんが、自分の作業ブランチにも影響が出てくるときによく使います。

```
git fetch
git merge [masterブランチ名]
// もしくは
git pull origin master
```

`git pull`の場合は、`git fetch, git merge`を一気にしてくれるコマンドです。

#### ブランチを移動する、新しくつくる

新しく作業ブランチをつくるときは`git branch [ブランチ名]`で作成することができます。しかし実際は、ブランチを作ったあとにそのブランチへ移動したいので、
```
git checkout -b [新しく作るブランチ名]
```
で、ブランチの作成と移動を一緒に行います。

また、ただ移動したい時は`git checkout(switch) [ブランチ名]`をやるだけです。

### コミットはせずに変更を退避したいとき

1つのPRで作業しているときに、中断して別のブランチを修正したくなる時があります。そうすると、今まで作業していたブランチの編集が残ります。  
このとき、変更した箇所をコミットしてから別のブランチに移動することもできますが、まだ作業途中でコミットしたくない時があります。  

そんな時に使えるの以下の`stash`です。  
以下のコマンドで、まだコミットしていない変更分を退避させることができます。
```
git stash -u
```
`-u`は`--include-untracked`の略です。

#### 今までstashしたものをリストでみる

過去にstashしたものをみたいときは、
```
git stash list
stash@{0}: WIP on develop: ac07e98 rebuild
stash@{1}: WIP on develop: ac07e98 rebuild
```
で見ることができます。

`stash@{0}`から始まる1行が退避させた作業分です。また`WIP on develop`のdevelopがブランチ名になります。  
このあとに続くのが、コミットハッシュとコミットメッセージです。

#### 退避した作業をもとに戻す

また退避させた分の作業を再開させたい時があります。stashして退避させたものをもとに戻す時は、
```
git stash apply stash@{0}
```
とやります。`stash@{0}`がもとに戻したい作業分です。

#### 退避した作業を消す

退避させた分をもとに戻しても、stashしたものはlistに残ります。ここで消しておかないとstashするたびに積み重なっていきますので消しておきましょう。
```
git stash drop stash@{0}
// これで消すことができる
Dropped stash@{0} (4ad238dfcc67d6581ea89952d3486f73151df70d)
```
applyと同じようにstash名を指定して、`git stash drop`で消すことができます。stash名を指定しない場合は、最近退避された情報を消すことができます。


だいたい上記のコマンドを実務でよく使います。いずれも作業する上で必要なコマンドとなってくるので、Gitを勉強したての方は使えるようになっておくといいです。  
またGitの詳しい使い方やGithubを使ってチーム開発を行うフローについてさらに知りたい方は以下の本がおすすめです。  

##### [GitHub実践入門 ~Pull Requestによる開発の変革](https://amzn.to/3Gvg9a5)
<a href="https://www.amazon.co.jp/GitHub%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-Pull-Request%E3%81%AB%E3%82%88%E3%82%8B%E9%96%8B%E7%99%BA%E3%81%AE%E5%A4%89%E9%9D%A9-PRESS-plus/dp/477416366X?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3IBGCFHOY32DJ&dchild=1&keywords=github%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80&qid=1635486884&sprefix=Github%2Caps%2C273&sr=8-1&linkCode=li3&tag=akurah510-22&linkId=6b504e590b08496fe34a3b42403d9d7d&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=477416366X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=akurah510-22&language=ja_JP" /></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=akurah510-22&language=ja_JP&l=li3&o=9&a=477416366X" width="1" height="1" alt="" style="border:none !important; margin:0px !important;" />

出版年が2014年と古いですが、書かれている内容や使われているコマンドは現在と大きく変わりません。  
本書の中では、Githubを用いたチームでの開発フローやPull Requestの作り方、レビューのもらい方などチーム開発で必要になってくることが書いてあります。

Gitを使えるようになりたい人やチーム開発をやりたい方は一度目を通しておくことをおすすめします。
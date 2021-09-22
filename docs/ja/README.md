---
lang: ja-JP
title: Qratch
description: Qratch はグラフィカルなWebコンテンツを構築するための軽量で使いやすい TypeScript/JavaScript 向けライブラリです。
---

# Qratch

Qratch はグラフィカルなWebコンテンツを構築するための軽量で使いやすい TypeScript/JavaScript 向けライブラリです。

## Qratch の特徴

Qratch は以下のような特徴を持つライブラリです。

- [TypeScript による型のサポート](./#typescript-による型のサポート)
- [モダンで使いやすい設計](./#モダンで使いやすい設計)
- [軽量/高速](./#軽量高速)

### TypeScript による型のサポート

Qratch は TypeScript で開発されており、型システムによる強力なコード補完を利用し素早くコーディングをすることができます。

### モダンで使いやすい設計

Qratch の設計はプログラマにモダンで使いやすいAPIを提供します。例えば Qratch の描画APIは関数のオーバーロードにより、様々なケースで最適な引数パターンを利用することができます。

### 軽量/高速

Qratch のコアライブラリのビルドはわずか `30kb` 程です。これは Qratch が必要最低限の機能しか備えていないのが理由です。またシーンやレイヤーの管理などの機能はなく、アプリケーションに合った最適なパフォーマンスを出すことができます。

以下は他のグラフィクスライブラリと Qratch の比較です。

| ライブラリ | サイズ | シーンやレイヤーの管理 |
|----------|-------|-------|
| [Qratch](qratch.dev) ([`v0.0.2`](https://unpkg.com/browse/qratch@0.0.2/dist/umd/index.js)) | `30kb` | 無し |
| [Fabric.js](http://fabricjs.com) ([`v4.6.0`](https://unpkg.com/browse/fabric@4.6.0/dist/fabric.min.js)) | `309kb` | あり |
| [Konva.js](https://konvajs.org) ([`v8.1.4`](https://unpkg.com/browse/konva@8.1.4/konva.min.js))| `156kb` | あり |

## 今すぐ試す

[Qratch Playground](https://play.qratch.dev)

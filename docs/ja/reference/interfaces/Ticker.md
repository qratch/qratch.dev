# [Ticker](https://github.com/qratch/qratch/blob/master/src/Ticker/Ticker.ts)

`Ticker` はアプリケーションに画面を更新するタイミング(フレーム)を提供するインターフェースです。

## `Component`

`Ticker` は [`Component`](./Component.md) を継承しています。

## メソッド

### `addCallback(callback: () => void): void`

コールバック関数を `Ticker` に登録します。登録した関数は画面を更新できるタイミング毎に呼び出されます。また登録した関数はフレームサイクルが開始されるまで呼び出されることはありません。

### `start(): void`

フレームサイクルを開始します。

### `frames(): number`

現在までのフレーム数を返します。

### `setTargetFPS(fps: number): void`

`Ticker` の目標[フレームレート(FPS)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%BC%E3%83%88)を引数 `fps` に渡された値に設定します。また `fps` は `Ticker` の対応外の値が渡された際、自動的に調整された値が設定されます。

### `getTargetFPS(): number`

`Ticker` の目標[フレームレート(FPS)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AC%E3%83%BC%E3%83%88)を返します。


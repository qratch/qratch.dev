# [Component](https://github.com/qratch/qratch/blob/master/src/Component/Component.ts)

`Component` はQratchの機能を拡張するためのインターフェースです。このインターフェースはアプリケーションの様々なイベントに対して呼び出される関数が定義されています。

## メソッド

### `onInstall?(): void`

コンポーネントがアプリケーションにインストールされたときに呼び出されるメソッドです。

### `onInit?(): void`

アプリケーションが初期化されたときに呼び出されるメソッドです。

### `onFrameTickerStart?(): void`

アプリケーションの一番最初のフレームが実行される前に呼び出されるメソッドです。

### `onFrameStart?(): void`

アプリケーションのフレームが開始するたびに呼び出されるメソッドです。

### `onFrameEnd?(): void`

アプリケーションのフレームが終了するたびに呼び出されるメソッドです。

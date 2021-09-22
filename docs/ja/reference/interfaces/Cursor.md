# [Cursor](https://github.com/qratch/qratch/blob/master/src/Cursor/Cursor.ts)

`Cursor` はマウスカーソルの入力を管理するインターフェースです。

## `Pointable`

`Cursor` は [`Pointable`](Pointable.md) なインターフェースです。

## `Component`

`Cursor` は [`Component`](Component.md) を継承しています。

## メソッド

### `delta(): Pointable`

1フレーム前からのカーソルの移動量を [`Pointable`](Pointable.md) で返します。

### `setStyle(style: CursorStyle): this`

[`CursorStyle`](../types/CursorStyle.md) 型の引数 `style` をカーソルのスタイルに反映させます。

### `getStyle(): CursorStyle`

現在、カーソルに反映されているスタイルを [`CursorStyle`](../types/CursorStyle.md) で返します。

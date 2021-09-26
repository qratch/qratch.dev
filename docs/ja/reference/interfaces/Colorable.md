# [Colorable](https://github.com/qratch/qratch/blob/master/src/Color/Colorable.ts)

`Colorable` は `RGBA` を管理するインターフェースです。

## `RGBA`

`Colorable` は [`RGBA`](../types/RGBA.md) なインターフェースです。

## `extends RenderStylable`

`Colorable` は [`RenderStylable`](RenderStylable.md) を継承します。

## メソッド

### <code>set(r: number, g: number, b: number, a?: number)</code>

`r(赤)` `g(緑)` `b(青)` `a(不透明度)` をまとめて設定します。各パラメータは `0.0 ~ 1.0` の範囲で指定します。`a` は省略可能で、デフォルト値は実装に委ねられます。

### <code>set(rgb: number, a?: number)</code>

色成分 `rgb(赤緑青)` をまとめて設定し、`a(不透明度)` を設定します。2つのパラメータは `0.0 ~ 1.0` の範囲で指定します。`a` は省略可能で、デフォルト値は実装に委ねられます。

### <code>set(rgba: [RGBA](../types/RGBA.md))</code>

[`RGBA`](../types/RGBA.md) なオブジェクトから色成分を設定します。

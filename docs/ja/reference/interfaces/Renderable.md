# [Renderable](https://github.com/qratch/qratch/blob/master/src/Renderer/Renderable.ts)

`Renderable` は最低限必要な描画APIを提供するインターフェースです。

## `Component`

`Renderable` は [`Component`](Component.md) を継承しています。

## メンバ

### `readonly width: number`

描画できる領域の幅を表します。

### `readonly width: height`

描画できる領域の高さを表します。

## メソッド

### <code>center(): [Pointable](Pointable.md)</code>

描画できる領域の中央座標を返します。

### <code>fill(style: [RenderStyle](../types/RenderStyle.md)): void</code>

描画できる領域を `style` で塗りつぶします。

### <code>fillRect(x: number, y: number, width: number, height: number, style: [RenderStyle](../types/RenderStyle.md)): void</code>

座標 `x`, `y` に大きさ `width`, `height` の矩形をスタイル `style` で塗りつぶします。

### <code>strokeRect(x: number, y: number, width: number, height: number, lineWidth: number, style: [RenderStyle](../types/RenderStyle.md)): void</code>

座標 `x`, `y` から大きさ `width`, `height` の矩形の線を太さ `lineWidth` スタイル `style` で描画します。

### <code>line(x1: number, y1: number, x2: number, y2: number, lineWidth: number, lineCap: [RenderLineCap](../types/RenderLineCap.md), style: [RenderStyle](../types/RenderStyle.md)): void</code>

座標 `x1`, `y1` から座標 `x2`, `y2` の線を太さ `lineWidth` 両端形状 `lineCap` スタイル `style` で描画します。

### <code>fillArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, style: [RenderStyle](../types/RenderStyle.md), anticlockwise?: boolean): void</code>

座標 `x`, `y` に半径 `radius` 開始角度 `startAngle` 終了角度 `endAngle` の扇形を `style` で描画します。`anticlockwise` に `true` が指定されている場合、半時計回りに描画します。

### <code>strokeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, lineWidth: number, style: [RenderStyle](../types/RenderStyle.md), anticlockwise?: boolean): void</code>

座標 `x`, `y` に半径 `radius` 開始角度 `startAngle` 終了角度 `endAngle` の扇形の線を太さ `lineWidth` スタイル `style` で描画します。`anticlockwise` に `true` が指定されている場合、半時計回りに描画します。

### <code>fillEllipse(x: number, y: number, radiusX: number, radiusY: number, startAngle: number, endAngle: number, style: [RenderStyle](../types/RenderStyle.md), anticlockwise?: boolean): void</code>

座標 `x`, `y` に横半径 `radiusX` 縦半径 `radiusY` 開始角度 `startAngle` 終了角度 `endAngle` の楕円を `style` で描画します。`anticlockwise` に `true` が指定されている場合、半時計回りに描画します。

### <code>strokeEllipse(x: number, y: number, radiusX: number, radiusY: number, startAngle: number, endAngle: number, lineWidth: number, style: [RenderStyle](../types/RenderStyle.md), anticlockwise?: boolean): void</code>

座標 `x`, `y` に横半径 `radiusX` 縦半径 `radiusY` 開始角度 `startAngle` 終了角度 `endAngle` の楕円の線を太さ `lineWidth` スタイル `style` で描画します。`anticlockwise` に `true` が指定されている場合、半時計回りに描画します。

### <code>fillPolygon(points: [RenderPolygonPoint](../types/RenderPolygonPoint.md)[], style: [RenderStyle](../types/RenderStyle.md)): void</code>

頂点座標の配列 `points` から成る多角形をスタイル `style` で塗りつぶします。

### <code>strokePolygon(points: [RenderPolygonPoint](../types/RenderPolygonPoint.md)[], lineWidth: number, style: [RenderStyle](../types/RenderStyle.md)): void</code>

頂点座標の配列 `points` から成る多角形の線を太さ `lineWidth` スタイル `style` で塗りつぶします。

### <code>fillText(text: string, x: number, y: number, style: [RenderStyle](../types/RenderStyle.md), maxWidth?: number, font?: string, textAlign?: [RenderTextAlign](../types/RenderTextAlign.md), textBaseline?: [RenderTextBaseline](../types/RenderTextBaseline.md)): void</code>

文字列 `text` を座標 `x`, `y` にスタイル `style` 最大幅 `maxWidth` フォント `font` 文字列揃え `textAlign` 基準線 `textBaseline` で塗りつぶします。

### <code>strokeText(text: string, x: number, y: number, lineWidth: number, style: [RenderStyle](../types/RenderStyle.md), maxWidth?: number, font?: string, textAlign?: [RenderTextAlign](../types/RenderTextAlign.md), textBaseline?: [RenderTextBaseline](../types/RenderTextBaseline.md)): void</code>

文字列 `text` の線を座標 `x`, `y` に太さ `lineWidth` スタイル `style` 最大幅 `maxWidth` フォント `font` 文字列揃え `textAlign` 基準線 `textBaseline` で描画します。

### <code>img(image: [RenderImage](../types/RenderImage.md), x: number, y: number, width?: number, height?: number): void</code>

画像 `image` を座標 `x`, `y` に描画します。`width` と `height` が指定されている場合そのサイズにリサイズし、描画します。

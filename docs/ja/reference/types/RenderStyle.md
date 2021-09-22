# [RenderStyle](https://github.com/qratch/qratch/blob/master/src/Renderer/RenderStyle.ts)

`RenderStyle` は描画する色などのスタイルを表す型です。

通常 [`CSS Color`](https://developer.mozilla.org/ja/docs/Web/CSS/color_value) で表せる色情報の文字列リテラルで表します。

現在の Qratch はグラデーションやパターンをサポートされておりません。これらは今後、実装予定です。

## サンプル

```ts
import { RenderStyle } from 'qratch'

const red: RenderStyle = 'red'
const green: RenderStyle = '#00ff00'
const blue: RenderStyle = 'rgba(0, 0, 255, 1)'
```

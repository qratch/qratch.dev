# [RenderImage](https://github.com/qratch/qratch/blob/master/src/Renderer/RenderImage.ts)

`RenderImage` は描画する画像を表す型です。

現在の Qratch は `CanvasImageSource` しかサポートしていません。

## サンプル

```ts
import { RenderImage } from 'qratch'

// image
const image: RenderImage = new Image()
image.src = 'player.png'

// canvas
const canvas: RenderImage = document.querySelector<HTMLCanvasElement>('#canvas')
```

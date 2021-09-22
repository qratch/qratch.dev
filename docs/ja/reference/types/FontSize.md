# [FontSize](https://github.com/qratch/qratch/blob/master/src/Font/FontSize.ts)

`FontSize` はフォントの大きさを表す型です。実態は `string` と `number` の共用型です。

通常 CSS の [`font-size`](https://developer.mozilla.org/ja/docs/Web/CSS/font-size) と同じ値を受け付けます。

## サンプル

```ts
import { FontSize } from 'qratch'

const px10: FontSize = 10
const rem3: FontSize = '3rem'
```

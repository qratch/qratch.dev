# [RGBA](https://github.com/qratch/qratch/blob/master/src/Color/RGBA.ts)

`RGBA` は色成分 `R(赤)` `G(緑)` `B(青)` `A(不透明度)` をまとめた型です。それぞれ `0.0 ~ 1.0` の範囲で指定します。

## サンプル

```ts
import { RGBA } from 'qratch'

// 赤色
const red: RGBA = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
}

// 灰色
const gray: RGBA = {
  r: 0.5,
  g: 0.5,
  b: 0.5,
  a: 1,
}

// 半透明の白
const translucent: RGBA = {
  r: 1,
  g: 1,
  b: 1,
  a: 0.5,
}
```

# [Keyboard](https://github.com/qratch/qratch/blob/master/src/Keyboard/Keyboard.ts)

`Keyboard` はユーザからのキー入力を管理するインターフェースです。

## `extends Component`

`Keyboard` は [`Component`](Component.md) を継承しています。

## サンプル

```ts
import { Keyboard } from 'qratch`

// これはあくまでサンプルのため declare を使い、Keyboardを宣言しています。
// QratchApp を使用している場合は QratchApp#keyboard が使用できます。
declare const keyboard: Keyboard

let speed = 1
let x = 0
let y = 0

if (keyboard.pressed('ArrowUp')) {
  y -= speed
}

if (keyboard.pressed('ArrowDown')) {
  y += speed
}

if (keyboard.pressed('ArrowLeft')) {
  x -= speed
}

if (keyboard.pressed('ArrowRight')) {
  x += speed
}

if (keyboard.down('z')) {
  speed--
}

if (keyboard.up('z')) {
  speed++
}
```

### メソッド

#### <code>pressed(code: [KeyCode](../types/KeyCode.md)): boolean</code>

引数で指定されたキーが押されている間 `true` を返します。それ以外のときは `false` を返します。

### <code>up(code: [KeyCode](../types/KeyCode.md)): boolean</code>

引数で指定されたキーが押された瞬間だけ `true` を返します。それ以外のときは `false` を返します。

### <code>down(code: [KeyCode](../types/KeyCode.md)): boolean</code>

引数で指定されたキーが離された瞬間だけ `true` を返します。それ以外のときは `false` を返します。

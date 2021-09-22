# [FontWeight](https://github.com/qratch/qratch/blob/master/src/Font/FontWeight.ts)

`FontWeight` はフォントの太さを表す型です。

現在の Qratch は以下の太さをサポートしています。

| `FontWeight` | イメージ |
|-------------|---------|
| `'normal'` | <span style="font-weight: normal">`400` と同値。</span> |
| `'bold'` | <span style="font-weight: bold">`700` と同値｡</span> |
| `'lighter'` | <span style="font-weight: lighter">描画対象が `HTMLElement` の場合、相対的に1段階細い値｡</span> |
| `'bolder'` | <span style="font-weight: bolder">描画対象が `HTMLElement` の場合、相対的に1段階太い値｡</span> |
| `number` | <span>`1` ~ `1000` の範囲の数値リテラル｡</span> |


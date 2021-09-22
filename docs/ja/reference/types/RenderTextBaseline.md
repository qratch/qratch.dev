# [RenderTextBaseline](https://github.com/qratch/qratch/blob/master/src/Renderer/RenderTextBaseline.ts)

`RenderTextBaseline` はテキストを描画する基準線を表す型です。

現在の Qratch は以下の値をサポートしています。

| `RenderTextBaseline` | 説明 |
|----------------------|-----|
| `'top'` | テキストベースラインは em square 一辺が 1 em の正方形 の上になります。 |
| `'hanging'` | テキストベースラインは hanging ベースラインになります。 |
| `'middle'` | テキストベースラインは em square の真ん中になります。 |
| `'alphabetic'` | テキストベースラインは標準的な alphabetic ベースラインになります。 |
| `'ideographic'` | テキストベースラインは ideographic ベースラインになります。文字の主要範囲の底辺が alphabetic ベースラインの下からはみ出る場合があるのに対し、このラインは主要範囲の底辺そのものを表します。(中国語、日本語、韓国語で意味を持ちます。) |
| `'bottom'` | テキストベースラインは bounding box の下辺になります。ideographic ベースラインとの違いは、ディセンダー (descenders) をも含めて底辺を決めるかどうかです。 |

> 引用元
>
> [CanvasRenderingContext2D.textBaseline - Web API | MDN](https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/textBaseline)

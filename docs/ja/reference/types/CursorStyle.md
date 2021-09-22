# [CursorStyle](https://github.com/qratch/qratch/blob/master/src/Cursor/CursorStyle.ts)

`CursorStyle` はマウスカーソルの見た目に設定できるスタイルを表す型です。

指定できる値は以下の表を参考にしてください。各スタイルにカーソルを合わせると、そのスタイルのイメージを表示します。

<table>
<thead>
</thead>
<tbody>
  <tr v-for="styles in ['auto','default','none','context-menu','help','pointer','progress','wait','cell','crosshair','text','vertical-text','alias','copy','move','no-drop','not-allowed','grab','grabbing','all-scroll','col-resize','row-resize','n-resize','e-resize','s-resize','w-resize','ne-resize','nw-resize','se-resize','sw-resize','ew-resize','ns-resize','nesw-resize','nwse-resize','zoom-in','zoom-out'].reduce((c, v, i) => (i % 6 ? c : [...c, ['auto','default','none','context-menu','help','pointer','progress','wait','cell','crosshair','text','vertical-text','alias','copy','move','no-drop','not-allowed','grab','grabbing','all-scroll','col-resize','row-resize','n-resize','e-resize','s-resize','w-resize','ne-resize','nw-resize','se-resize','sw-resize','ew-resize','ns-resize','nesw-resize','nwse-resize','zoom-in','zoom-out'].slice(i, i + 6)]), [])">
    <td v-for="style in styles" :style="{ cursor: style }">
      <code>
        {{ style }}
      </code>
    </td>
  </tr>
</tbody>
</table>

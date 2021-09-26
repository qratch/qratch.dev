"use strict";(self.webpackChunkqratch_dev=self.webpackChunkqratch_dev||[]).push([[346],{451:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-9355f828",path:"/ja/reference/types/RGBA.html",title:"RGBA",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"サンプル",slug:"サンプル",children:[]}],filePathRelative:"ja/reference/types/RGBA.md",git:{updatedTime:1632697215e3,contributors:[{name:"hota1024",email:"hotalog@hota1024.com",commits:1}]}}},9702:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(6252);const p={id:"rgba",tabindex:"-1"},t=(0,e._)("a",{class:"header-anchor",href:"#rgba","aria-hidden":"true"},"#",-1),o=(0,e.Uk)(),r={href:"https://github.com/qratch/qratch/blob/master/src/Color/RGBA.ts",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("RGBA"),l=(0,e.uE)('<p><code>RGBA</code> は色成分 <code>R(赤)</code> <code>G(緑)</code> <code>B(青)</code> <code>A(不透明度)</code> をまとめた型です。それぞれ <code>0.0 ~ 1.0</code> の範囲で指定します。</p><h2 id="サンプル" tabindex="-1"><a class="header-anchor" href="#サンプル" aria-hidden="true">#</a> サンプル</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">RGBA</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;qratch&#39;</span>\n\n<span class="token comment">// 赤色</span>\n<span class="token keyword">const</span> red<span class="token operator">:</span> <span class="token constant">RGBA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  g<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  b<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 灰色</span>\n<span class="token keyword">const</span> gray<span class="token operator">:</span> <span class="token constant">RGBA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  r<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n  g<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n  b<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n  a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 半透明の白</span>\n<span class="token keyword">const</span> translucent<span class="token operator">:</span> <span class="token constant">RGBA</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  r<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  g<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  b<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  a<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',3),u={},b=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("h1",p,[t,o,(0,e._)("a",r,[c,(0,e.Wm)(a)])]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);
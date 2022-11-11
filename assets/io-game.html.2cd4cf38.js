import{_ as o,o as p,c,d as n,e as a,a as e,b as t,r as l}from"./app.6c70c16b.js";const i={},r=t('<h1 id="iogame" tabindex="-1"><a class="header-anchor" href="#iogame" aria-hidden="true">#</a> IoGame</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>\u4E00\u4E2A\u6E38\u620F\u6846\u67B6</li></ul><h2 id="\u5B98\u7F51" tabindex="-1"><a class="header-anchor" href="#\u5B98\u7F51" aria-hidden="true">#</a> \u5B98\u7F51</h2>',4),u={href:"https://www.yuque.com/iohao/game/wwvg7z",target:"_blank",rel:"noopener noreferrer"},d={href:"https://gitee.com/iohao/iogame",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> Api</h2><h3 id="\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5" aria-hidden="true">#</a> \u901A\u77E5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4E25\u683C\u987A\u5E8F\u7684 \u5E7F\u64AD\u4E0A\u4E0B\u6587</span>
<span class="token keyword">var</span> broadcastContext <span class="token operator">=</span> <span class="token class-name">BrokerClientHelper</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBroadcastOrderContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9ED8\u8BA4\u7684\u5E7F\u64AD\u4E0A\u4E0B\u6587</span>
<span class="token keyword">var</span> broadcastContext <span class="token operator">=</span> <span class="token class-name">BrokerClientHelper</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBroadcastContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \u7701\u7565\u90E8\u5206\u4EE3\u7801
<span class="token comment">// \u5F97\u5230\u4E25\u683C\u987A\u5E8F\u7684\u5E7F\u64AD\u4E0A\u4E0B\u6587</span>
<span class="token keyword">var</span> broadcastOrderContext <span class="token operator">=</span> <span class="token class-name">BrokerClientHelper</span><span class="token punctuation">.</span><span class="token function">getBroadcastOrderContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u793A\u4F8B</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">BarHelloPb</span> helloPb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BarHelloPb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    helloPb<span class="token punctuation">.</span>amount <span class="token operator">=</span> i<span class="token punctuation">;</span>

    broadcastOrderContext<span class="token punctuation">.</span><span class="token function">broadcastOrder</span><span class="token punctuation">(</span>cmdInfo<span class="token punctuation">,</span> helloPb<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(h,v){const s=l("ExternalLinkIcon");return p(),c("div",null,[r,n("ul",null,[n("li",null,[a("\u6587\u6863 "),n("a",u,[a("https://www.yuque.com/iohao/game/wwvg7z"),e(s)])]),n("li",null,[a("Gitee "),n("a",d,[a("https://gitee.com/iohao/iogame"),e(s)])])]),k])}const f=o(i,[["render",m],["__file","io-game.html.vue"]]);export{f as default};

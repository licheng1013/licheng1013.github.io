import{_ as p,Q as l,S as i,Z as n,a2 as a,$ as e,a1 as t,E as c}from"./framework-f983c147.js";const o={},r=t(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> Css</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>对常用css配置进行收集</li><li>Css是对Html进行装饰</li><li>如果说Html是骨架那么Css就是衣服。</li><li>想想一个Cat(猫)没有他的毛发会是啥样。</li></ul><h2 id="css配置" tabindex="-1"><a class="header-anchor" href="#css配置" aria-hidden="true">#</a> Css配置🪲</h2><ul><li>每个Vue项目基本必须配置的样式</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请使用div进行布局不要element-ui的组件布局！</p></div><ul><li>项目默认css配置</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">html,body,#app</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token comment">//white-space:pre //允许换行符，可选</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>图片完美填充示例</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">#img</span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;https://bbs.deepin.org/-test.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css动画库" tabindex="-1"><a class="header-anchor" href="#css动画库" aria-hidden="true">#</a> css动画库😎</h3>`,11),u={href:"https://animate.style/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://greensock.com/showcase/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/airbnb/lottie-web",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//npm install lottie-web --save</span>
<span class="token comment">//下载动画json</span>
lottie<span class="token punctuation">.</span><span class="token function">loadAnimation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">container</span><span class="token operator">:</span> element<span class="token punctuation">,</span> <span class="token comment">// html dom 元素</span>
    <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token string">&#39;svg&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoplay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;data.json&#39;</span> <span class="token comment">// 你的动画json</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> Flex布局</h2><ul><li>首选必须使用div布局，其他框架标签可能有bug</li><li>必须如果要固定某元素宽度，不受页面大小变动则必须设定其他元素的具体宽度</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ul><li>左sidebar ,右params ,如果右params没有设置 flex: 1; 那么宽度变小时 sidebar 也会变小。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.main</span><span class="token punctuation">{</span> 
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> cornflowerblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.params</span><span class="token punctuation">{</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,h){const s=c("ExternalLinkIcon");return l(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[a("https://animate.style/"),e(s)])]),n("li",null,[n("a",d,[a("https://greensock.com/showcase/"),e(s)])]),n("li",null,[n("a",v,[a("https://github.com/airbnb/lottie-web"),e(s)])])]),k])}const f=p(o,[["render",m],["__file","css.html.vue"]]);export{f as default};
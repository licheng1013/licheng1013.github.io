import{_ as n,o as s,c as a,d as t}from"./app-52d72a6e.js";const p={},e=t(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="go语言实现" tabindex="-1"><a class="header-anchor" href="#go语言实现" aria-hidden="true">#</a> Go语言实现</h2><h3 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h3><div class="hint-container info"><p class="hint-container-title">描述</p><ul><li>实现了基本代理模式，和嵌套代理模式</li></ul></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestProxy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span>
	p1<span class="token punctuation">.</span>proxy <span class="token operator">=</span> <span class="token operator">&amp;</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		p2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//新的</span>
		p2<span class="token punctuation">.</span>proxy <span class="token operator">=</span> p1  <span class="token comment">//新的代理挂在旧的代理</span>
		p1 <span class="token operator">=</span> p2        <span class="token comment">//新的替换原有的</span>
	<span class="token punctuation">}</span>
	p1<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> A <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	proxy A
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;代理之前&quot;</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;代理之后&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;业务逻辑&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","design-mode.html.vue"]]);export{r as default};

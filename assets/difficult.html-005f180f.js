import{_ as n,Q as s,S as a,a1 as e}from"./framework-f983c147.js";const t={},c=e(`<h1 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>23/2/28</li><li>理解go某些高级操作。</li></ul><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;fmt&quot;</span>
  <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建两个channel</span>
  ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

  <span class="token comment">// 启动两个Goroutine分别向channel发送数据</span>
  <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">// 模拟耗时操作</span>
    ch1 <span class="token operator">&lt;-</span> <span class="token string">&quot;one&quot;</span> <span class="token comment">// 向ch1发送数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">// 模拟耗时操作</span>
    ch2 <span class="token operator">&lt;-</span> <span class="token string">&quot;two&quot;</span> <span class="token comment">// 向ch2发送数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 使用select语句接收channel数据</span>
  <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> msg1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch1<span class="token punctuation">:</span> <span class="token comment">// 如果ch1有数据，执行这个case</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received&quot;</span><span class="token punctuation">,</span> msg1<span class="token punctuation">)</span>
      <span class="token keyword">case</span> msg2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch2<span class="token punctuation">:</span> <span class="token comment">// 如果ch2有数据，执行这个case</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received&quot;</span><span class="token punctuation">,</span> msg2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 因为ch2比ch1先准备好 select语句会先执行第二个case，然后等待ch1准备好再执行第一个case。</span>
  <span class="token comment">// 输出结果</span>
  <span class="token comment">// received two</span>
  <span class="token comment">// received one</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","difficult.html.vue"]]);export{r as default};

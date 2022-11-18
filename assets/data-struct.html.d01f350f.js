import{_ as n,o as s,c as a,d as p}from"./app.b34d8c3b.js";const t={},e=p(`<h1 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>\u5F85\u5199</li></ul><h2 id="hashmap" tabindex="-1"><a class="header-anchor" href="#hashmap" aria-hidden="true">#</a> HashMap</h2><ul><li><p>\u6570\u636E\u7ED3\u6784: Array LinkedList Tree</p></li><li><p>\u5B9E\u73B0</p><ul><li>\u9ED8\u8BA4\u6784\u9020\u65B9\u6CD5\u4E0D\u4F1A\u521B\u5EFA\u5185\u90E8\u7684\u6570\u7EC4\u5BF9\u8C61</li><li>put\u65B9\u6CD5\u8C03\u7528\u8FC7\u7A0B,\u5224\u65AD\u5185\u90E8\u662F\u5426\u521B\u5EFA\u4E86\u6570\u7EC4\u5BF9\u8C61\uFF0C\u6CA1\u6709\u521B\u5EFA\u5219\u521B\u5EFA\u3002 <ul><li>\u8BA1\u7B97key\u7684hashCode\u5982\u679C\u5728\u6570\u7EC4\u4E2D\u4E0D\u5B58\u5728\u5219\u5B58\u5165\u8FDB\u53BB <ul><li>\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61hash\u503C\u548C\u5BF9\u8C61\u5730\u5740\u5BF9\u6BD4\u662F\u5426\u4E00\u6837 \u4E0D\u4E00\u6837\u7EE7\u7EED\u5224\u65AD equals \u5BF9\u6BD4\u4E5F\u4E0D\u4E00\u6837 (hash\u503C\u4E00\u6837\uFF0C\u5730\u5740\u4E0D\u4E00\u6837,equals\u4E5F\u4E0D\u4E00\u6837\u5219\u5F80\u4E0B\u8D70)</li><li>\u5224\u65AD\u6709\u6CA1\u6709\u53D8\u6210\u6811</li><li>\u53D8\u6210\u94FE\u8868\u653E\u5165\u5176\u4E2D\uFF1A\u5982\u679C\uFF0C\u94FE\u8868\u5927\u4E8E8\u5E76\u4E14HashMap\u7684\u6570\u7EC4\u5927\u4E8E64\u5219\u8F6C\u6362\u6210\u6811</li></ul></li><li>size++</li><li>\u6267\u884C\u5B8C\u6BD5</li></ul></li><li>\u9ED8\u8BA4\u957F\u5EA6\u4E3A: 16 \u8D1F\u8F7D\u56E0\u5B50: 0.75</li></ul></li><li><p>putVal\u65B9\u6CD5</p></li><li><p>\u7701\u7565\u5176\u4ED6\u65B9\u6CD5</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HashMap</span><span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">,</span>
                 <span class="token keyword">boolean</span> evict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> p<span class="token punctuation">;</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> i<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab <span class="token operator">=</span> table<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">//\u5224\u65AD\u6570\u7EC4\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E3A\u7A7A\u5219\u521B\u5EFA</span>
      n <span class="token operator">=</span> <span class="token punctuation">(</span>tab <span class="token operator">=</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>p <span class="token operator">=</span> tab<span class="token punctuation">[</span>i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//\u5224\u65AD\u8BA1\u7B97hash\u662F\u5426\u5728\u6570\u7EC4\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5219\u63D2\u5165</span>
      tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//hash\u51B2\u7A81\u5904\u7406</span>
      <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e<span class="token punctuation">;</span> <span class="token class-name">K</span> k<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
              <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> p<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
        e <span class="token operator">=</span> p<span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span>
        e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putTreeVal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> tab<span class="token punctuation">,</span> hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> binCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token operator">++</span>binCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">&gt;=</span> <span class="token constant">TREEIFY_THRESHOLD</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1 for 1st</span>
              <span class="token function">treeifyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
                  <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          p <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
        <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">++</span>modCount<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>size <span class="token operator">&gt;</span> threshold<span class="token punctuation">)</span>
      <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">afterNodeInsertion</span><span class="token punctuation">(</span>evict<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linkedlist" tabindex="-1"><a class="header-anchor" href="#linkedlist" aria-hidden="true">#</a> LinkedList</h2><ul><li>\u6570\u636E\u7ED3\u6784: \u94FE\u8868</li><li>\u7279\u70B9: \u5185\u5B58\u4E0D\u8FDE\u7EED\uFF0C\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u5B58\u50A8\u4E0B\u4E00\u4E2A\u5BF9\u8C61a &gt; b &gt; c &gt; d</li><li>\u4F18\u70B9: \u63D2\u5165\uFF0C\u5220\u9664\u5FEB\u3002\u56E0\u4E3A\u53EA\u9700\u8981\u628A\u5F15\u7528\u91CD\u65B0\u6307\u5B9A\u4E00\u4E0B\u5373\u53EF\u3002</li><li>\u7F3A\u70B9: \u67E5\u8BE2\u6162\uFF0C\u9700\u8981\u904D\u5386\u5143\u7D20\uFF0C\u5143\u7D20\u8D8A\u591A\u904D\u5386\u7684\u65F6\u95F4\u8D8A\u4E45</li></ul><h2 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h2><ul><li>\u6570\u636E\u7ED3\u6784: \u6570\u7EC4</li><li>\u7279\u70B9: \u5185\u5B58\u8FDE\u7EED\uFF0C\u67E5\u8BE2\u5FEB\u3002\u7528\u4E8EHashMap ArrayList\u7684\u5E95\u5C42\u5B9E\u73B0</li></ul><h2 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h2><ul><li>\u6570\u636E\u7ED3\u6784: \u6808</li><li>\u7279\u70B9: \u540E\u8FDB\u5148\u51FA\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u548C\u94FE\u8868\u8FDB\u884C\u5B9E\u73B0\uFF0C\u76EE\u524D\u6570\u7EC4\u4F18\u5148\u6548\u679C\u66F4\u597D</li><li>\u7406\u89E3: \u53E0\u52A0\u51F3\u5B50\uFF0C\u540E\u653E\u7684\u51F3\u5B50\u4F1A\u5728\u6700\u524D\u9762\uFF0C\u8FD9\u5C31\u662F\u73B0\u5B9E\u4E2D\u7684\u5BF9\u6BD4</li></ul><h2 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h2><ul><li>\u6570\u636E\u7ED3\u6784: \u961F\u5217</li><li>\u7279\u70B9: \u5148\u8FDB\u5148\u51FA\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u548C\u94FE\u8868\u8FDB\u884C\u5B9E\u73B0\uFF0C\u76EE\u524D\u94FE\u8868\u4F18\u5148\u6548\u679C\u66F4\u597D</li></ul>`,14),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","data-struct.html.vue"]]);export{k as default};
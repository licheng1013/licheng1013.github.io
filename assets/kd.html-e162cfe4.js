import{_ as n,o as s,c as a,d as t}from"./app-4a82a665.js";const p={},e=t(`<h1 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>
<span class="token keyword">fun</span> <span class="token function">rename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">val</span> path <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲&quot;</span></span>
    <span class="token comment">// 获取所有文件</span>
    <span class="token keyword">val</span> files <span class="token operator">=</span> FileUtil<span class="token punctuation">.</span><span class="token function">getFiles</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>file <span class="token keyword">in</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修改文件名</span>
        <span class="token keyword">val</span> name <span class="token operator">=</span> file<span class="token punctuation">.</span>name
        <span class="token comment">// 插入字符串</span>
        <span class="token keyword">var</span> newName <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;-&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">&quot; &quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span>
        file<span class="token punctuation">.</span><span class="token function">renameTo</span><span class="token punctuation">(</span><span class="token function">File</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>parentFile<span class="token punctuation">,</span> newName<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">fun</span> <span class="token function">downloadBB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> cmd <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲\\\\BBDown.exe&quot;</span></span>
    <span class="token keyword">val</span> json <span class="token operator">=</span> FileUtil<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲\\\\json.txt&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> list <span class="token operator">=</span> JsonUtil<span class="token punctuation">.</span><span class="token function">toObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> ArrayList<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>it <span class="token keyword">in</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token keyword">is</span> Map<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">val</span> id <span class="token operator">=</span> it<span class="token punctuation">[</span><span class="token string-literal singleline"><span class="token string">&quot;bvid&quot;</span></span><span class="token punctuation">]</span>
            <span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 休眠3秒继续</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 执行命令</span>
<span class="token keyword">fun</span> <span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token operator">:</span> String<span class="token punctuation">,</span> bvId<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> processBuilder <span class="token operator">=</span> <span class="token function">ProcessBuilder</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> bvId<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;--audio-only&quot;</span></span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>processBuilder<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    processBuilder<span class="token punctuation">.</span><span class="token function">redirectErrorStream</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> process <span class="token operator">=</span> processBuilder<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> bufferedReader <span class="token operator">=</span> process<span class="token punctuation">.</span>inputStream<span class="token punctuation">.</span><span class="token function">bufferedReader</span><span class="token punctuation">(</span>charset <span class="token operator">=</span> Charsets<span class="token punctuation">.</span>US_ASCII<span class="token punctuation">)</span>
    <span class="token keyword">var</span> line<span class="token operator">:</span> String<span class="token operator">?</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span> <span class="token punctuation">{</span> line <span class="token operator">=</span> it <span class="token punctuation">}</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    process<span class="token punctuation">.</span><span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","kd.html.vue"]]);export{k as default};
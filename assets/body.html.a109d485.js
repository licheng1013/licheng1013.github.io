import{_ as n,o as s,c as a,b as t}from"./app.8ec5dc51.js";const e={},p=t(`<h1 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h1><h2 id="\u6839\u636E\u6761\u4EF6\u521B\u5EFAbean\u7684\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u6761\u4EF6\u521B\u5EFAbean\u7684\u6CE8\u89E3" aria-hidden="true">#</a> \u6839\u636E\u6761\u4EF6\u521B\u5EFAbean\u7684\u6CE8\u89E3</h2><h3 id="conditionalonproperty" tabindex="-1"><a class="header-anchor" href="#conditionalonproperty" aria-hidden="true">#</a> @ConditionalOnProperty</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;spring.cloud.discovery.enabled&quot;</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnDiscoveryEnabled</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5728\u6307\u5B9A\u7684\u7C7B\u4E0A\u6DFB\u52A0\uFF0C\u53EF\u4EE5\u9650\u5236\u7C7B\u7684bean\u521B\u5EFA\u3002</span>
    <span class="token comment">//value             \u914D\u7F6Eyml\u6587\u4EF6\u4E2D\u7684\u5C5E\u6027\u540D</span>
    <span class="token comment">//matchIfMissing    \u8BBE\u7F6E\u503C,\u9ED8\u8BA4\u4E3Afalse\u53CA\u9ED8\u8BA4\u4E0D\u521B\u5EFAbean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conditionalonmissingbean" tabindex="-1"><a class="header-anchor" href="#conditionalonmissingbean" aria-hidden="true">#</a> @ConditionalOnMissingBean</h3><ul><li>\u88C5\u6709\u8BE5\u6CE8\u89E3\u7684\u65B9\u6CD5\u6216\u8005\u7C7B\u4E0A\uFF0C\u53EA\u6709\u5728spring\u5BB9\u5668\u4E2D\u4E0D\u5B58\u5728\u65F6\u5219\u521B\u5EFA</li></ul><h3 id="conditionalonbean" tabindex="-1"><a class="header-anchor" href="#conditionalonbean" aria-hidden="true">#</a> @ConditionalOnBean</h3><ul><li>\u5F53\u6307\u5B9A\u7684\u7C7B\u7684bean\u5728spring\u5BB9\u5668\u4E2D\u5B58\u5728\u65F6\u5219\u521B\u5EFA</li><li>@ConditionalOnBean(SpringClientFactory.class)</li></ul><h3 id="autoconfigureafter" tabindex="-1"><a class="header-anchor" href="#autoconfigureafter" aria-hidden="true">#</a> @AutoConfigureAfter</h3><ul><li>\u5728\u6307\u5B9A\u7684\u7C7B\u521B\u5EFAbean\u4E4B\u540E\u5728\u542F\u52A8\u522B\u7684\u7C7B\u7684\u81EA\u52A8\u914D\u7F6E @AutoConfigureAfter(RibbonAutoConfiguration.class)</li></ul><h3 id="conditionalonclass" tabindex="-1"><a class="header-anchor" href="#conditionalonclass" aria-hidden="true">#</a> @ConditionalOnClass</h3><ul><li>\u68C0\u67E5\u6307\u5B9A\u7684\u7C7B\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u521B\u5EFA\u8BE5\u6CE8\u89E3\u4E0B\u7684bean</li><li>@ConditionalOnClass(Endpoint.class)</li></ul><h3 id="conditional" tabindex="-1"><a class="header-anchor" href="#conditional" aria-hidden="true">#</a> @Conditional</h3><ul><li>\u68C0\u67E5\u6307\u5B9A\u7684\u7C7B\u662F\u5426\u5B58\u5728\uFF0C\u5B58\u5728\u5219\u521B\u5EFA\u8BE5\u6CE8\u89E3\u4E0B\u7684bean</li><li>@Conditional(OnAvailableEndpointCondition.class)</li></ul><h3 id="autoconfigurebefore" tabindex="-1"><a class="header-anchor" href="#autoconfigurebefore" aria-hidden="true">#</a> @AutoConfigureBefore</h3><ul><li>\u5728\u5F53\u524Dbean\u521B\u5EFA\u4E4B\u524D\u521B\u5EFA\u4E4B\u524D\u914D\u7F6E\u5176\u4ED6bean\`\`</li><li>@AutoConfigureBefore({ SimpleDiscoveryClientAutoConfiguration.class, CommonsClientAutoConfiguration.class })</li></ul><h2 id="\u53CCmq\u63A7\u5236\u65F6\u95F4\u5DEE" tabindex="-1"><a class="header-anchor" href="#\u53CCmq\u63A7\u5236\u65F6\u95F4\u5DEE" aria-hidden="true">#</a> \u53CCMQ\u63A7\u5236\u65F6\u95F4\u5DEE</h2><ul><li><p>\u5185\u90E8\u7CFB\u7EDFmq</p><ul><li>\u63A8\u9001\u7ED9A\u7CFB\u7EDF1\u79D2\u4E00\u6B21</li><li>A\u7CFB\u7EDF\u63A8\u9001\u7ED9\u7B2C\u4E09\u65B9\u7CFB\u7EDF5\u79D2\u4E00\u6B21</li></ul></li><li><p>\u6A21\u62DFA\u7CFB\u7EDF1\u79D2\u6267\u884C\u4E00\u6B21\uFF0C\u5E76\u4E14\u6BCF5\u79D2\u6253\u5370\u4E00\u6B21</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span></span><span class="token class-name">Timer</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Timer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">TimerTask</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/6/6
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Timer</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    timer<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> time <span class="token operator">=</span> <span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>multipart<span class="token punctuation">.</span></span><span class="token class-name">MultipartFile</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/6/29
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/file&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;uploadFile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token class-name">SystemFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span>  file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fileName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token string">&quot;\u6587\u4EF6\u540D\u4E3A\u7A7A&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            file<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0A\u4F20\u5931\u8D25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u4E0A\u4F20\u6210\u529F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","body.html.vue"]]);export{r as default};
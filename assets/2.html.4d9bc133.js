import{_ as n}from"./log.88ec32b8.js";import{_ as s,o as a,c as e,d as i}from"./app.baf9dfdd.js";const t={},l=i('<h1 id="_2-go变量" tabindex="-1"><a class="header-anchor" href="#_2-go变量" aria-hidden="true">#</a> 2-Go变量</h1><p><img src="'+n+`" alt=""></p><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>本文的作用</li><li>变量介绍</li><li>注释说明</li></ul><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><ul><li>排除掉不执行的代码片段</li><li>Go以 // 来作为注释开头</li><li>下面将会有例子进行尝试</li></ul><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><ul><li>变量是什么？ 您可以理解为是一个存储东西的盒子！</li><li>一个示例：a = 10 代表了 10 放入了这个 a 的盒子里面了！</li><li>当然变量也有类型的，就像衣服一样。有大衣款式也有小衣款式。</li><li>为什么要会这样说呢？你总得帮选个<strong>变量</strong>选择个合适的类型吧。如果实在不在知道选择多大的，那么选最大的就行了。</li><li>下面是Go的最常用的4种类型</li><li>类型之间转换是需要其他操作的，如果直接转换会出现错误的。目前暂不演示了。</li><li>main 是个方法，您现在不需要知晓方法的作用(如果已经知道了更好)。只需要跟着操作走即可。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 方法内的变量必须使用，不能出现定义了变量而不使用的场景。</span>
	<span class="token keyword">var</span> a <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">// a := 1 这样写也是等同的更简洁</span>
	<span class="token keyword">var</span> b <span class="token builtin">float64</span> <span class="token operator">=</span> <span class="token number">1.1</span>
	<span class="token keyword">var</span> c <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token keyword">var</span> d <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;HelloWorld&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//fmt.Println(a) 打印盒子里面的东西</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Go语言会进行类型推导，所以写成以下格式同上面是一样的</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a <span class="token operator">:=</span> <span class="token number">1</span>
	b <span class="token operator">:=</span> <span class="token number">1.1</span>
	c <span class="token operator">:=</span> <span class="token boolean">true</span>
	d <span class="token operator">:=</span> <span class="token string">&quot;HelloWorld&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//fmt.Println(a) 打印盒子里面的东西</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3><ul><li>全局变量概念：你在一个文件种定义的变量可以被其他文件所访问并使用</li><li>Go语言的全局变量想要被其他文件所访问也是非常容易的。只需要首字母大写即可。</li><li>如果只在当前文件使用就首字母小写即可！</li><li>类型定义同 <strong>变量</strong> 说明一致</li><li>示例：</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span> Number <span class="token operator">=</span> <span class="token number">100</span> 

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span> 
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3><ul><li>局部变量概念：你只能在这个文件中使用，或者方法(&quot;后续说明&quot;)内使用</li><li>单个文件使用：你可以在这个文件的任意地方使用</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">100</span> 

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单个方法使用：你只能在方法内使用</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">100</span> 
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结束语" tabindex="-1"><a class="header-anchor" href="#结束语" aria-hidden="true">#</a> 结束语</h2><ul><li>本章又多出了一些概念出来了，您可能会有疑问。您的疑问从<strong>百度搜索</strong>试试看。这应该是需要会的！</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><ul><li>由于评论区无法留言。</li><li>如果你想一起完善文档，或者参与文档的建设，请关注我！</li></ul>`,23),o=[l];function p(c,u){return a(),e("div",null,o)}const k=s(t,[["render",p],["__file","2.html.vue"]]);export{k as default};

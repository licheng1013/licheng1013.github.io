import{_ as n,Q as s,S as a,a1 as t}from"./framework-e413c16a.js";const e={},o=t(`<h1 id="gorm" tabindex="-1"><a class="header-anchor" href="#gorm" aria-hidden="true">#</a> Gorm</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>2022/9/23</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>go get -u gorm.io/gorm</li><li>go get -u github.com/go-sql-driver/mysql</li><li>go get -u gorm.io/driver/mysql v1.3.5</li></ul><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ul><li>下面代码复制完运行这行代码后会自动搜索包: go mod tidy</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-gin/common&quot;</span>
	<span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
	<span class="token string">&quot;gorm.io/gorm&quot;</span>
	<span class="token string">&quot;gorm.io/gorm/logger&quot;</span>
	<span class="token string">&quot;gorm.io/gorm/schema&quot;</span>
	<span class="token string">&quot;log&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 初始化mysql链接</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">mysqlInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mysqlInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 日志打印</span>
	newLogger <span class="token operator">:=</span> logger<span class="token punctuation">.</span>Default

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Mysql:初始化！&quot;</span><span class="token punctuation">)</span>
	dsn <span class="token operator">:=</span> <span class="token string">&quot;root:root@tcp(127.0.0.1:3306)/t_demo?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span>
	v<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		Logger<span class="token punctuation">:</span> newLogger<span class="token punctuation">,</span>
		NamingStrategy<span class="token punctuation">:</span> schema<span class="token punctuation">.</span>NamingStrategy<span class="token punctuation">{</span>
			TablePrefix<span class="token punctuation">:</span>   <span class="token string">&quot;t_&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 定义表前缀</span>
			SingularTable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// true不在表后面+ s，</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	common<span class="token punctuation">.</span>Db <span class="token operator">=</span> v
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(e,[["render",p],["__file","gorm.html.vue"]]);export{r as default};

import{_ as n,o as s,c as a,d as t}from"./app.71ee16c0.js";const p={},e=t(`<h1 id="gin" tabindex="-1"><a class="header-anchor" href="#gin" aria-hidden="true">#</a> Gin</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>2022/9/23</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ul><li>go get -u github.com/gin-gonic/gin</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 监听并在 0.0.0.0:8080 上启动服务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优雅停机" tabindex="-1"><a class="header-anchor" href="#优雅停机" aria-hidden="true">#</a> 优雅停机</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">var</span> R <span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Init 初始化</span>
<span class="token keyword">func</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//WxText()</span>
	<span class="token comment">//其他初始化,必须在此之上</span>

	<span class="token keyword">var</span> port <span class="token operator">=</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> YmlConfig<span class="token punctuation">[</span><span class="token string">&quot;port&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;http://&quot;</span> <span class="token operator">+</span> util<span class="token punctuation">.</span><span class="token function">GetTargetMaskIp</span><span class="token punctuation">(</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> port
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Gin: 初始化，地址: &quot;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span>

	<span class="token comment">//下面都是优雅停机方式</span>
	srv <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    port<span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> R<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 服务连接</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;listen: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 等待中断信号以优雅地关闭服务器（设置 10 秒的超时时间）</span>
	quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> os<span class="token punctuation">.</span>Signal<span class="token punctuation">)</span>
	signal<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span>quit<span class="token punctuation">,</span> os<span class="token punctuation">.</span>Interrupt<span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>quit
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;关闭服务器...&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;服务器关闭：&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;服务器退出&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h2><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> middleware

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;api/entity&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;runtime/debug&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Recover 全局异常处理器</span>
<span class="token keyword">func</span> <span class="token function">Recover</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			debug<span class="token punctuation">.</span><span class="token function">PrintStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//打印错误堆栈信息</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token function">errorToString</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//终止后续接口调用，不加的话,还会继续接口后续代码</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewServiceError 使用关键字 panic 抛出异常,否则无法识别到</span>
<span class="token keyword">func</span> <span class="token function">NewServiceError</span><span class="token punctuation">(</span>text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceError<span class="token punctuation">{</span>text<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ServiceError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	s <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>ServiceError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> e<span class="token punctuation">.</span>s
<span class="token punctuation">}</span>

<span class="token comment">// recover错误，转string</span>
<span class="token keyword">func</span> <span class="token function">errorToString</span><span class="token punctuation">(</span>r <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> v <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>ServiceError<span class="token punctuation">:</span>
		<span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors跨域" tabindex="-1"><a class="header-anchor" href="#cors跨域" aria-hidden="true">#</a> cors跨域</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-contrib/cors&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">initCors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;跨域处理器！&quot;</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cors 跨域配置</span>
<span class="token keyword">func</span> <span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	handlerFunc <span class="token operator">:=</span> cors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		AllowMethods<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		AllowHeaders<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Authentication&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//此处设置非默认之外的请求头(自定义请求头),否则会出现跨域问题,必须制定名称</span>
		AllowAllOrigins<span class="token punctuation">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span>
		AllowCredentials<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		MaxAge<span class="token punctuation">:</span>           <span class="token number">24</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> handlerFunc
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存redis" tabindex="-1"><a class="header-anchor" href="#缓存redis" aria-hidden="true">#</a> 缓存redis</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-gin/entity&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;go-util/util&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> CachePath <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

<span class="token comment">// 需要配合Redis进行使用！</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//initCache()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;缓存处理器！&quot;</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cache Redis缓存中间件</span>
<span class="token keyword">func</span> <span class="token function">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		path <span class="token operator">:=</span> util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> CachePath <span class="token punctuation">{</span>
			<span class="token comment">//需要缓存该返回结果！</span>
			<span class="token keyword">if</span> i <span class="token operator">==</span> path <span class="token punctuation">{</span>
				cacheStr <span class="token operator">:=</span> <span class="token function">RedisGetString</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;触发缓存:&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>
				<span class="token keyword">if</span> cacheStr <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
					c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">var</span> r entity<span class="token punctuation">.</span>R
				util<span class="token punctuation">.</span><span class="token function">JsonToObj</span><span class="token punctuation">(</span>cacheStr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">)</span>
				c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
				c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//终止访问</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// CacheData 添加需要缓存的路径,默认30秒</span>
<span class="token keyword">func</span> <span class="token function">CacheData</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	isExistPath <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> s <span class="token operator">:=</span> <span class="token keyword">range</span> CachePath <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s <span class="token operator">==</span> k <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;触发缓存：&quot;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span>
			isExistPath <span class="token operator">=</span> <span class="token boolean">true</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
		isExistPath <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>isExistPath <span class="token punctuation">{</span>
		CachePath <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>CachePath<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>CachePath<span class="token punctuation">)</span>

	<span class="token function">RedisSetExpiration</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">,</span> <span class="token number">30</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// CachePathUrlData 根据路径进行缓存 /file/list?xx=aa =&gt; /file/list</span>
<span class="token keyword">func</span> <span class="token function">CachePathUrlData</span><span class="token punctuation">(</span>v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">CacheData</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// GetParamsUrlPahData 根据路径+参数进行缓存 /file/list?xx=aa =&gt; /file/list?xx=aa</span>
<span class="token keyword">func</span> <span class="token function">GetParamsUrlPahData</span><span class="token punctuation">(</span>v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">CacheData</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GinParamsUrlPah</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="认证处理器" tabindex="-1"><a class="header-anchor" href="#认证处理器" aria-hidden="true">#</a> 认证处理器</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;gin-gin/common&quot;</span>
	<span class="token string">&quot;gin-gin/entity&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;go-util/util&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Authorization 请求头key</span>
<span class="token keyword">var</span> Authorization <span class="token operator">=</span> <span class="token string">&quot;Authorization&quot;</span>

<span class="token comment">// 排除路径</span>
<span class="token keyword">var</span> excludePath <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// go的加载特性，是从字母顺序进行加载文件的！</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//initAuth()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;认证处理器！&quot;</span><span class="token punctuation">)</span>
	excludePath <span class="token operator">=</span> YmlConfig<span class="token punctuation">[</span><span class="token string">&quot;excludePath&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Auth 认证拦截器</span>
<span class="token keyword">func</span> <span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//保存到上下文中</span>
		util<span class="token punctuation">.</span><span class="token function">GinSetContext</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

		path <span class="token operator">:=</span> util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//log.Println(path)</span>
		<span class="token comment">//排除路径处理</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> excludePath <span class="token punctuation">{</span>
			<span class="token comment">// 排除路径例如： /test/** , 排除匹配 /test/ 的所有拦截</span>
			<span class="token keyword">var</span> ePath <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
			<span class="token comment">//检查是否存在**号</span>
			<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>ePath<span class="token punctuation">,</span> <span class="token string">&quot;**&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> path <span class="token operator">==</span> ePath <span class="token punctuation">{</span>
				<span class="token keyword">var</span> prefix <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>ePath<span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>

		<span class="token comment">//登入认证</span>
		query <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetHeader</span><span class="token punctuation">(</span>Authorization<span class="token punctuation">)</span>
		<span class="token keyword">if</span> query <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;账号没有登入！&quot;</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token string">&quot;没有登入!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//终止访问</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//权限认证-还可以做其他的认证！</span>
		<span class="token keyword">var</span> user entity<span class="token punctuation">.</span>User
		userId<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GetTokenParse</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
		common<span class="token punctuation">.</span>Db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">{</span>Id<span class="token punctuation">:</span> userId<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
		<span class="token keyword">if</span> user<span class="token punctuation">.</span>Deleted <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token string">&quot;用户已禁用!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//终止访问</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		Ctx <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>Ctx<span class="token punctuation">,</span> util<span class="token punctuation">.</span>UserIdKey<span class="token punctuation">,</span> userId<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//拦截后</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具类" tabindex="-1"><a class="header-anchor" href="#工具类" aria-hidden="true">#</a> 工具类</h2><h3 id="对象封装" tabindex="-1"><a class="header-anchor" href="#对象封装" aria-hidden="true">#</a> 对象封装</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> entity

<span class="token keyword">type</span> R <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>         <span class="token string">\`json:&quot;code&quot;\`</span>
	Msg  <span class="token builtin">string</span>      <span class="token string">\`json:&quot;msg&quot;\`</span>
	Data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;data&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// OkData 成功的数据返回</span>
<span class="token keyword">func</span> <span class="token function">OkData</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Data<span class="token punctuation">:</span> data<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// OkMsg 成功的消息返回</span>
<span class="token keyword">func</span> <span class="token function">OkMsg</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Fail 失败的消息返回</span>
<span class="token keyword">func</span> <span class="token function">Fail</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","gin.html.vue"]]);export{k as default};

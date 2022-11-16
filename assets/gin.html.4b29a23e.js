import{_ as n,o as s,c as a,b as t}from"./app.11077b12.js";const p={},e=t(`<h1 id="gin" tabindex="-1"><a class="header-anchor" href="#gin" aria-hidden="true">#</a> Gin</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2022/9/23</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>go get -u github.com/gin-gonic/gin</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pong&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u76D1\u542C\u5E76\u5728 0.0.0.0:8080 \u4E0A\u542F\u52A8\u670D\u52A1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F18\u96C5\u505C\u673A" tabindex="-1"><a class="header-anchor" href="#\u4F18\u96C5\u505C\u673A" aria-hidden="true">#</a> \u4F18\u96C5\u505C\u673A</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>
<span class="token keyword">var</span> R <span class="token operator">=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Init \u521D\u59CB\u5316</span>
<span class="token keyword">func</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//WxText()</span>
	<span class="token comment">//\u5176\u4ED6\u521D\u59CB\u5316,\u5FC5\u987B\u5728\u6B64\u4E4B\u4E0A</span>

	<span class="token keyword">var</span> port <span class="token operator">=</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> YmlConfig<span class="token punctuation">[</span><span class="token string">&quot;port&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;http://&quot;</span> <span class="token operator">+</span> util<span class="token punctuation">.</span><span class="token function">GetTargetMaskIp</span><span class="token punctuation">(</span><span class="token string">&quot;24&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> port
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Gin: \u521D\u59CB\u5316\uFF0C\u5730\u5740: &quot;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span>

	<span class="token comment">//\u4E0B\u9762\u90FD\u662F\u4F18\u96C5\u505C\u673A\u65B9\u5F0F</span>
	srv <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>    port<span class="token punctuation">,</span>
		Handler<span class="token punctuation">:</span> R<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u670D\u52A1\u8FDE\u63A5</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Fatalf</span><span class="token punctuation">(</span><span class="token string">&quot;listen: %s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u7B49\u5F85\u4E2D\u65AD\u4FE1\u53F7\u4EE5\u4F18\u96C5\u5730\u5173\u95ED\u670D\u52A1\u5668\uFF08\u8BBE\u7F6E 10 \u79D2\u7684\u8D85\u65F6\u65F6\u95F4\uFF09</span>
	quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> os<span class="token punctuation">.</span>Signal<span class="token punctuation">)</span>
	signal<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span>quit<span class="token punctuation">,</span> os<span class="token punctuation">.</span>Interrupt<span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span>quit
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5173\u95ED\u670D\u52A1\u5668...&quot;</span><span class="token punctuation">)</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">*</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u5668\u5173\u95ED\uFF1A&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u5668\u9000\u51FA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h2><h3 id="\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> middleware

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;api/entity&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;runtime/debug&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Recover \u5168\u5C40\u5F02\u5E38\u5904\u7406\u5668</span>
<span class="token keyword">func</span> <span class="token function">Recover</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			debug<span class="token punctuation">.</span><span class="token function">PrintStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u6253\u5370\u9519\u8BEF\u5806\u6808\u4FE1\u606F</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token function">errorToString</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EC8\u6B62\u540E\u7EED\u63A5\u53E3\u8C03\u7528\uFF0C\u4E0D\u52A0\u7684\u8BDD,\u8FD8\u4F1A\u7EE7\u7EED\u63A5\u53E3\u540E\u7EED\u4EE3\u7801</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewServiceError \u4F7F\u7528\u5173\u952E\u5B57 panic \u629B\u51FA\u5F02\u5E38,\u5426\u5219\u65E0\u6CD5\u8BC6\u522B\u5230</span>
<span class="token keyword">func</span> <span class="token function">NewServiceError</span><span class="token punctuation">(</span>text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ServiceError<span class="token punctuation">{</span>text<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> ServiceError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	s <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>ServiceError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> e<span class="token punctuation">.</span>s
<span class="token punctuation">}</span>

<span class="token comment">// recover\u9519\u8BEF\uFF0C\u8F6Cstring</span>
<span class="token keyword">func</span> <span class="token function">errorToString</span><span class="token punctuation">(</span>r <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> v <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">*</span>ServiceError<span class="token punctuation">:</span>
		<span class="token keyword">return</span> v<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cors\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#cors\u8DE8\u57DF" aria-hidden="true">#</a> cors\u8DE8\u57DF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

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
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8DE8\u57DF\u5904\u7406\u5668\uFF01&quot;</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cors \u8DE8\u57DF\u914D\u7F6E</span>
<span class="token keyword">func</span> <span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	handlerFunc <span class="token operator">:=</span> cors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>cors<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		AllowMethods<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		AllowHeaders<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Authentication&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//\u6B64\u5904\u8BBE\u7F6E\u975E\u9ED8\u8BA4\u4E4B\u5916\u7684\u8BF7\u6C42\u5934(\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934),\u5426\u5219\u4F1A\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898,\u5FC5\u987B\u5236\u5B9A\u540D\u79F0</span>
		AllowAllOrigins<span class="token punctuation">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span>
		AllowCredentials<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		MaxAge<span class="token punctuation">:</span>           <span class="token number">24</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> handlerFunc
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F13\u5B58redis" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58redis" aria-hidden="true">#</a> \u7F13\u5B58redis</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;gin-gin/entity&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;go-util/util&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> CachePath <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

<span class="token comment">// \u9700\u8981\u914D\u5408Redis\u8FDB\u884C\u4F7F\u7528\uFF01</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//initCache()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7F13\u5B58\u5904\u7406\u5668\uFF01&quot;</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cache Redis\u7F13\u5B58\u4E2D\u95F4\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">Cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		path <span class="token operator">:=</span> util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> CachePath <span class="token punctuation">{</span>
			<span class="token comment">//\u9700\u8981\u7F13\u5B58\u8BE5\u8FD4\u56DE\u7ED3\u679C\uFF01</span>
			<span class="token keyword">if</span> i <span class="token operator">==</span> path <span class="token punctuation">{</span>
				cacheStr <span class="token operator">:=</span> <span class="token function">RedisGetString</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
				log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u89E6\u53D1\u7F13\u5B58:&quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span>
				<span class="token keyword">if</span> cacheStr <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
					c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">var</span> r entity<span class="token punctuation">.</span>R
				util<span class="token punctuation">.</span><span class="token function">JsonToObj</span><span class="token punctuation">(</span>cacheStr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>r<span class="token punctuation">)</span>
				c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
				c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EC8\u6B62\u8BBF\u95EE</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// CacheData \u6DFB\u52A0\u9700\u8981\u7F13\u5B58\u7684\u8DEF\u5F84,\u9ED8\u8BA430\u79D2</span>
<span class="token keyword">func</span> <span class="token function">CacheData</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	isExistPath <span class="token operator">:=</span> <span class="token boolean">false</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> s <span class="token operator">:=</span> <span class="token keyword">range</span> CachePath <span class="token punctuation">{</span>
		<span class="token keyword">if</span> s <span class="token operator">==</span> k <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u89E6\u53D1\u7F13\u5B58\uFF1A&quot;</span> <span class="token operator">+</span> k<span class="token punctuation">)</span>
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

<span class="token comment">// CachePathUrlData \u6839\u636E\u8DEF\u5F84\u8FDB\u884C\u7F13\u5B58 /file/list?xx=aa =&gt; /file/list</span>
<span class="token keyword">func</span> <span class="token function">CachePathUrlData</span><span class="token punctuation">(</span>v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">CacheData</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// GetParamsUrlPahData \u6839\u636E\u8DEF\u5F84+\u53C2\u6570\u8FDB\u884C\u7F13\u5B58 /file/list?xx=aa =&gt; /file/list?xx=aa</span>
<span class="token keyword">func</span> <span class="token function">GetParamsUrlPahData</span><span class="token punctuation">(</span>v <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">CacheData</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GinParamsUrlPah</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BA4\u8BC1\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC1\u5904\u7406\u5668" aria-hidden="true">#</a> \u8BA4\u8BC1\u5904\u7406\u5668</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

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

<span class="token comment">// Authorization \u8BF7\u6C42\u5934key</span>
<span class="token keyword">var</span> Authorization <span class="token operator">=</span> <span class="token string">&quot;Authorization&quot;</span>

<span class="token comment">// \u6392\u9664\u8DEF\u5F84</span>
<span class="token keyword">var</span> excludePath <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// go\u7684\u52A0\u8F7D\u7279\u6027\uFF0C\u662F\u4ECE\u5B57\u6BCD\u987A\u5E8F\u8FDB\u884C\u52A0\u8F7D\u6587\u4EF6\u7684\uFF01</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//initAuth()</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BA4\u8BC1\u5904\u7406\u5668\uFF01&quot;</span><span class="token punctuation">)</span>
	excludePath <span class="token operator">=</span> YmlConfig<span class="token punctuation">[</span><span class="token string">&quot;excludePath&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	R<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Auth \u8BA4\u8BC1\u62E6\u622A\u5668</span>
<span class="token keyword">func</span> <span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//\u4FDD\u5B58\u5230\u4E0A\u4E0B\u6587\u4E2D</span>
		util<span class="token punctuation">.</span><span class="token function">GinSetContext</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

		path <span class="token operator">:=</span> util<span class="token punctuation">.</span><span class="token function">GinUrlPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//log.Println(path)</span>
		<span class="token comment">//\u6392\u9664\u8DEF\u5F84\u5904\u7406</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> excludePath <span class="token punctuation">{</span>
			<span class="token comment">// \u6392\u9664\u8DEF\u5F84\u4F8B\u5982\uFF1A /test/** , \u6392\u9664\u5339\u914D /test/ \u7684\u6240\u6709\u62E6\u622A</span>
			<span class="token keyword">var</span> ePath <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
			<span class="token comment">//\u68C0\u67E5\u662F\u5426\u5B58\u5728**\u53F7</span>
			<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasSuffix</span><span class="token punctuation">(</span>ePath<span class="token punctuation">,</span> <span class="token string">&quot;**&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> path <span class="token operator">==</span> ePath <span class="token punctuation">{</span>
				<span class="token keyword">var</span> prefix <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">ReplaceAll</span><span class="token punctuation">(</span>ePath<span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
				<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">HasPrefix</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

		<span class="token punctuation">}</span>

		<span class="token comment">//\u767B\u5165\u8BA4\u8BC1</span>
		query <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">GetHeader</span><span class="token punctuation">(</span>Authorization<span class="token punctuation">)</span>
		<span class="token keyword">if</span> query <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D26\u53F7\u6CA1\u6709\u767B\u5165\uFF01&quot;</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u767B\u5165!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EC8\u6B62\u8BBF\u95EE</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		<span class="token comment">//\u6743\u9650\u8BA4\u8BC1-\u8FD8\u53EF\u4EE5\u505A\u5176\u4ED6\u7684\u8BA4\u8BC1\uFF01</span>
		<span class="token keyword">var</span> user entity<span class="token punctuation">.</span>User
		userId<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span>util<span class="token punctuation">.</span><span class="token function">GetTokenParse</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
		common<span class="token punctuation">.</span>Db<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">{</span>Id<span class="token punctuation">:</span> userId<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
		<span class="token keyword">if</span> user<span class="token punctuation">.</span>Deleted <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> entity<span class="token punctuation">.</span><span class="token function">Fail</span><span class="token punctuation">(</span><span class="token string">&quot;\u7528\u6237\u5DF2\u7981\u7528!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u7EC8\u6B62\u8BBF\u95EE</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		Ctx <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>Ctx<span class="token punctuation">,</span> util<span class="token punctuation">.</span>UserIdKey<span class="token punctuation">,</span> userId<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">//\u62E6\u622A\u540E</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u5DE5\u5177\u7C7B</h2><h3 id="\u5BF9\u8C61\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5C01\u88C5" aria-hidden="true">#</a> \u5BF9\u8C61\u5C01\u88C5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> entity

<span class="token keyword">type</span> R <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Code <span class="token builtin">int</span>         <span class="token string">\`json:&quot;code&quot;\`</span>
	Msg  <span class="token builtin">string</span>      <span class="token string">\`json:&quot;msg&quot;\`</span>
	Data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;data&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token comment">// OkData \u6210\u529F\u7684\u6570\u636E\u8FD4\u56DE</span>
<span class="token keyword">func</span> <span class="token function">OkData</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Data<span class="token punctuation">:</span> data<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// OkMsg \u6210\u529F\u7684\u6D88\u606F\u8FD4\u56DE</span>
<span class="token keyword">func</span> <span class="token function">OkMsg</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Fail \u5931\u8D25\u7684\u6D88\u606F\u8FD4\u56DE</span>
<span class="token keyword">func</span> <span class="token function">Fail</span><span class="token punctuation">(</span>msg <span class="token builtin">string</span><span class="token punctuation">)</span> R <span class="token punctuation">{</span>
	<span class="token keyword">return</span> R<span class="token punctuation">{</span>Code<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> Msg<span class="token punctuation">:</span> msg<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","gin.html.vue"]]);export{k as default};

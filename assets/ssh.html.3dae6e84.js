import{_ as n,o as s,c as a,b as t}from"./app.ba0cf229.js";const o={},p=t(`<h1 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> ssh</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2022/10/25</li></ul><h2 id="\u7EC8\u7AEF\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u7AEF\u8FDE\u63A5" aria-hidden="true">#</a> \u7EC8\u7AEF\u8FDE\u63A5</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>
<span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;golang.org/x/crypto/ssh&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Test2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sshHost <span class="token operator">:=</span> <span class="token string">&quot;192.168.101.11&quot;</span>
	sshUser <span class="token operator">:=</span> <span class="token string">&quot;root&quot;</span>
	sshPassword <span class="token operator">:=</span> <span class="token string">&quot;root&quot;</span>
	sshPort <span class="token operator">:=</span> <span class="token number">22</span>

	<span class="token comment">//\u521B\u5EFAssh\u767B\u9646\u914D\u7F6E</span>
	config <span class="token operator">:=</span> <span class="token operator">&amp;</span>ssh<span class="token punctuation">.</span>ClientConfig<span class="token punctuation">{</span>
		Timeout<span class="token punctuation">:</span>         time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token comment">//ssh \u8FDE\u63A5time out \u65F6\u95F4\u4E00\u79D2\u949F, \u5982\u679Cssh\u9A8C\u8BC1\u9519\u8BEF \u4F1A\u5728\u4E00\u79D2\u5185\u8FD4\u56DE</span>
		User<span class="token punctuation">:</span>            sshUser<span class="token punctuation">,</span>
		HostKeyCallback<span class="token punctuation">:</span> ssh<span class="token punctuation">.</span><span class="token function">InsecureIgnoreHostKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u8FD9\u4E2A\u53EF\u4EE5, \u4F46\u662F\u4E0D\u591F\u5B89\u5168</span>
		<span class="token comment">//HostKeyCallback: hostKeyCallBackFunc(h.Host),</span>
	<span class="token punctuation">}</span>
	config<span class="token punctuation">.</span>Auth <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ssh<span class="token punctuation">.</span>AuthMethod<span class="token punctuation">{</span>ssh<span class="token punctuation">.</span><span class="token function">Password</span><span class="token punctuation">(</span>sshPassword<span class="token punctuation">)</span><span class="token punctuation">}</span>

	<span class="token comment">//dial \u83B7\u53D6ssh client</span>
	addr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%s:%d&quot;</span><span class="token punctuation">,</span> sshHost<span class="token punctuation">,</span> sshPort<span class="token punctuation">)</span>
	sshClient<span class="token punctuation">,</span> err <span class="token operator">:=</span> ssh<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;\u521B\u5EFAssh client \u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> sshClient<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//\u521B\u5EFAssh-session</span>
	session<span class="token punctuation">,</span> err <span class="token operator">:=</span> sshClient<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;\u521B\u5EFAssh session \u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> session<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//\u6267\u884C\u8FDC\u7A0B\u547D\u4EE4</span>
	combo<span class="token punctuation">,</span> err <span class="token operator">:=</span> session<span class="token punctuation">.</span><span class="token function">CombinedOutput</span><span class="token punctuation">(</span><span class="token string">&quot;echo HelloWorld&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDC\u7A0B\u6267\u884Ccmd \u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u547D\u4EE4\u8F93\u51FA:&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>combo<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[p];function c(i,l){return s(),a("div",null,e)}const r=n(o,[["render",c],["__file","ssh.html.vue"]]);export{r as default};

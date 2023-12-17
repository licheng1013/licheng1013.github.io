import{_ as n,o as s,c as a,d as t}from"./app-67426251.js";const p={},e=t(`<h1 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>23/2/28</li><li>理解go某些高级操作。</li></ul><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> Select</h2><ul><li>select 用于在多线程计算数据</li><li>下面示例附带了超时机制,但没有default语句.</li><li>当存在default语句，如果渠道还未存在数据,则直接执行default语句</li><li><strong>超时机制的作用在于延迟兜底操作。</strong></li><li><strong>default就是渠道都没准备好,就直接执行</strong></li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		c1 <span class="token operator">&lt;-</span> <span class="token string">&quot;one&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		c2 <span class="token operator">&lt;-</span> <span class="token string">&quot;two&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> msg1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received&quot;</span><span class="token punctuation">,</span> msg1<span class="token punctuation">)</span>
		<span class="token keyword">case</span> msg2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c2<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received&quot;</span><span class="token punctuation">,</span> msg2<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span> <span class="token comment">//超时</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 输出</span>
	<span class="token comment">// received one</span>
	<span class="token comment">// received two</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h3><ul><li>1:我们需要一些其他线程的结果聚合就可以使用他，例如1个线程计算从1+至50,另1个线程从51+至100。</li><li>就可以使用上面的方式进行处理提高效率</li><li>如下示例</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> sum <span class="token builtin">int</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> i
		<span class="token punctuation">}</span>
		c1 <span class="token operator">&lt;-</span> sum
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> sum <span class="token builtin">int</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">51</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> i
		<span class="token punctuation">}</span>
		c2 <span class="token operator">&lt;-</span> sum
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> sum <span class="token builtin">int</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> msg1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
			sum <span class="token operator">+=</span> msg1
		<span class="token keyword">case</span> msg2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c2<span class="token punctuation">:</span>
			sum <span class="token operator">+=</span> msg2
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
			<span class="token comment">//每次只等待1秒超时,如果注释这个case那么就会一直等待,知道渠道发送数据</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;timeout&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;结果:&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用注意" tabindex="-1"><a class="header-anchor" href="#使用注意" aria-hidden="true">#</a> 使用注意</h3><ul><li>select什么情况下会阻塞?</li></ul><div class="hint-container info"><p class="hint-container-title">答</p><ul><li>当select语句没有任何case语句准备好，也没有default语句时，它就会阻塞，直到至少有一个case语句可以执行1。</li><li>这意味着select语句会等待所有的channel操作，直到有一个channel可以收到或发送数据2。</li><li>如果你想避免select语句阻塞，你可以使用default语句或者超时机制。</li></ul></div><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2><h3 id="轻量级线程变量如何处理的" tabindex="-1"><a class="header-anchor" href="#轻量级线程变量如何处理的" aria-hidden="true">#</a> 轻量级线程变量如何处理的?</h3><div class="hint-container info"><p class="hint-container-title">答</p><ul><li>Go 语言支持并发，可以通过 go 关键字来开启 goroutine，也就是轻量级线程。goroutine 的调度是由 Go 运行时进行管理的。</li><li>当启动一个 goroutine 时，它会继承当前函数的局部变量的值，并在自己的栈上创建一个副本。如果局部变量是指针或引用类型，</li><li>那么 goroutine 可能会访问或修改共享的数据。为了避免数据竞争或不一致的问题，</li><li>Go 语言提供了 sync 包中的互斥锁 Mutex 和读写锁 RWMutex 来限制多个 goroutine 对同一个变量的访问3。</li><li>你可以使用 sync.Mutex 的 Lock 和 Unlock 方法来保护临界区域，</li><li>或者使用 sync.RWMutex 的 RLock 和 RUnlock 方法来允许多个读操作同时进行，但只允许一个写操作进行。</li></ul></div><h3 id="goroutine和线程区别" tabindex="-1"><a class="header-anchor" href="#goroutine和线程区别" aria-hidden="true">#</a> goroutine和线程区别？</h3><div class="hint-container info"><p class="hint-container-title">答</p><ul><li>goroutine 是 Go 语言运行时管理的轻量级线程，而线程是操作系统管理的执行单元。</li><li>goroutine 的切换开销比线程小得多，因为 goroutine 的切换只涉及三个寄存器的值修改，而线程的切换涉及模式切换、寄存器刷新等操作。</li><li>goroutine 的栈空间比线程动态灵活，goroutine 一般只需要 2KB 的栈内存，而线程通常需要 2MB。goroutine 的栈大小会根据需要动态地伸缩，而线程的栈大小是固定不变的。</li><li>goroutine 可以轻松创建成千上万个，并发执行，而线程的数量受到操作系统和硬件资源的限制。</li></ul></div><h3 id="goroutine能创建多少个" tabindex="-1"><a class="header-anchor" href="#goroutine能创建多少个" aria-hidden="true">#</a> goroutine能创建多少个？</h3><div class="hint-container info"><p class="hint-container-title">答</p><ul><li>goroutine 的数量并不受核心数的限制，而是受到内存和调度器的限制。</li><li>理论上，goroutine 的数量可以达到几百万个，但实际上这样会导致内存消耗过大和调度开销过高。</li><li>因此，在实际开发中，需要根据具体的场景和需求来控制 goroutine 的并发数量。</li></ul></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2><ul><li>可能不经常用到</li></ul><h3 id="基本排序" tabindex="-1"><a class="header-anchor" href="#基本排序" aria-hidden="true">#</a> 基本排序</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> StudentTasks <span class="token punctuation">[</span><span class="token punctuation">]</span>StudentTask

<span class="token keyword">func</span> <span class="token punctuation">(</span>s StudentTasks<span class="token punctuation">)</span> <span class="token function">Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s StudentTasks<span class="token punctuation">)</span> <span class="token function">Less</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>Score <span class="token operator">&gt;</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>Score
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s StudentTasks<span class="token punctuation">)</span> <span class="token function">Swap</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> StudentTask <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Score <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个学生切片</span>
	students <span class="token operator">:=</span> StudentTasks<span class="token punctuation">{</span>
		<span class="token punctuation">{</span><span class="token number">90</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token number">80</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span><span class="token number">76</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	sort<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>students<span class="token punctuation">)</span> <span class="token comment">// [{90} {80} {76} {60}]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chan-缓冲区" tabindex="-1"><a class="header-anchor" href="#chan-缓冲区" aria-hidden="true">#</a> Chan(缓冲区)</h2><ul><li>多线程单Chan Vs 多线程多Chan</li><li>由多线程多Chan处理性能更快(都设置了缓冲区)</li><li>未设置缓存区的Chan 对比 设置缓存区的 Chan 所花费的时间要在2亿循环中，设置缓存区比未设置快大约5倍</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;testing&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestMultipleWritersToSingleChannel</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个带有缓冲区的通道</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span>
	<span class="token comment">// 未设置缓存区 55.9750587s</span>
	<span class="token comment">// 设置缓存区 11.7164381s</span>

	<span class="token comment">// 启动多个协程写入数据</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
				ch <span class="token operator">&lt;-</span> j
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 读取所有数据</span>
	<span class="token keyword">var</span> count <span class="token builtin">int</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token keyword">range</span> ch <span class="token punctuation">{</span>
		count<span class="token operator">++</span>
		<span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">200000000</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
	<span class="token comment">// 检查是否读取了所有数据</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;处理数量 -&gt; &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;处理时间: %s\\n&quot;</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">TestMultipleWritersToMultipleChannels</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建多个带有缓冲区的通道</span>
	ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span>
	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">)</span>
	ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			ch1 <span class="token operator">&lt;-</span> j
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100000000</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			ch2 <span class="token operator">&lt;-</span> j
		<span class="token punctuation">}</span>
		<span class="token function">close</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// count 加锁</span>
	<span class="token keyword">var</span> count <span class="token builtin">int</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
				<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
					count<span class="token operator">++</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					ch3 <span class="token operator">&lt;-</span> <span class="token number">1</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token boolean">_</span><span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
				<span class="token keyword">if</span> ok <span class="token punctuation">{</span>
					count<span class="token operator">++</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					ch3 <span class="token operator">&lt;-</span> <span class="token number">1</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch3<span class="token punctuation">:</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;处理数量 -&gt; &quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	elapsed <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;处理时间: %s\\n&quot;</span><span class="token punctuation">,</span> elapsed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协程上下文" tabindex="-1"><a class="header-anchor" href="#协程上下文" aria-hidden="true">#</a> 协程上下文</h2><h3 id="简易版" tabindex="-1"><a class="header-anchor" href="#简易版" aria-hidden="true">#</a> 简易版</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 定义一个上下文,测试是否线程安全</span>
<span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token function">NewLocalContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main goroutine id:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token function">Go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token function">Go</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span> <span class="token comment">// 等待1秒加入上下文</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Go</span><span class="token punctuation">(</span>num <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
			ctx<span class="token punctuation">.</span><span class="token function">SaveCtx</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
			<span class="token comment">// 打印</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
			<span class="token comment">// 打印协程id</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;上下文数据:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">GetCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;协程id:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span><span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		ctx<span class="token punctuation">.</span><span class="token function">ClearCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>LocalContext<span class="token punctuation">)</span> <span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">uint64</span> <span class="token punctuation">{</span>
	b <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
	b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token punctuation">:</span>runtime<span class="token punctuation">.</span><span class="token function">Stack</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
	b <span class="token operator">=</span> bytes<span class="token punctuation">.</span><span class="token function">TrimPrefix</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;goroutine &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	b <span class="token operator">=</span> b<span class="token punctuation">[</span><span class="token punctuation">:</span>bytes<span class="token punctuation">.</span><span class="token function">IndexByte</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
	n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">ParseUint</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> n
<span class="token punctuation">}</span>

<span class="token comment">// SaveCtx 保存上下文</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LocalContext<span class="token punctuation">)</span> <span class="token function">SaveCtx</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	background <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TODO 暂时不可用</span>
	background <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>background<span class="token punctuation">,</span> l<span class="token punctuation">.</span>key<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
	l<span class="token punctuation">.</span>ctx<span class="token punctuation">[</span>l<span class="token punctuation">.</span><span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> background
<span class="token punctuation">}</span>

<span class="token comment">// GetCtx 获取上下文</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LocalContext<span class="token punctuation">)</span> <span class="token function">GetCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> l<span class="token punctuation">.</span>ctx<span class="token punctuation">[</span>l<span class="token punctuation">.</span><span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token comment">// TODO 暂时不可用</span>
<span class="token punctuation">}</span>

<span class="token comment">// ClearCtx 清理上下文</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>l <span class="token operator">*</span>LocalContext<span class="token punctuation">)</span> <span class="token function">ClearCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> l<span class="token punctuation">.</span><span class="token function">GetGID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// LocalContext 本地上下文</span>
<span class="token keyword">type</span> LocalContext <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint64</span><span class="token punctuation">]</span>context<span class="token punctuation">.</span>Context
	key <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewLocalContext 创建本地上下文</span>
<span class="token keyword">func</span> <span class="token function">NewLocalContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>LocalContext <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>LocalContext<span class="token punctuation">{</span>key<span class="token punctuation">:</span> <span class="token string">&quot;userIdKey&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">uint64</span><span class="token punctuation">]</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","difficult.html.vue"]]);export{k as default};

import{_ as n,Q as s,S as a,a1 as t}from"./framework-f983c147.js";const p={},e=t(`<h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> webSocket</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>2022/10/25</li></ul><h2 id="自定义协议" tabindex="-1"><a class="header-anchor" href="#自定义协议" aria-hidden="true">#</a> 自定义协议</h2><ul><li>2023/2/16</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token comment">// 定义一个自定义协议的结构体，包含消息的长度、类型和内容</span>
<span class="token keyword">type</span> MyProtocol <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Length <span class="token builtin">int</span>    <span class="token comment">// 消息的长度，用4个字节表示</span>
	Type   <span class="token builtin">int</span>    <span class="token comment">// 消息的类型，用4个字节表示，比如1表示文本，2表示图片，3表示音频等</span>
	Data   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token comment">// 消息的内容，用字节切片表示，长度由Length决定</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个编码函数，将自定义协议的结构体转换为字节切片，用于发送数据</span>
<span class="token keyword">func</span> <span class="token function">Encode</span><span class="token punctuation">(</span>mp <span class="token operator">*</span>MyProtocol<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个缓冲区，用于存储编码后的数据</span>
	buf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 使用encoding/binary包中的Write函数，按照大端字节序，将结构体中的字段写入缓冲区</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
	<span class="token comment">// 返回缓冲区中的字节切片</span>
	<span class="token keyword">return</span> buf<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个解码函数，将字节切片转换为自定义协议的结构体，用于接收数据</span>
<span class="token keyword">func</span> <span class="token function">Decode</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token operator">*</span>MyProtocol <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个缓冲区，用于存储解码后的数据</span>
	buf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token comment">// 创建一个自定义协议的结构体，用于存储解码后的字段</span>
	mp <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 使用encoding/binary包中的Read函数，按照大端字节序，从缓冲区中读取字段到结构体中</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token comment">// 根据Length的值，创建一个字节切片，用于存储Data字段</span>
	mp<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
	<span class="token comment">// 返回解码后的结构体</span>
	<span class="token keyword">return</span> mp
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">/</span> 服务端的示例代码
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;log&quot;</span>
    <span class="token string">&quot;net&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// 定义一个处理连接的函数，接收一个net.TCPConn类型的参数</span>
<span class="token keyword">func</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>conn <span class="token operator">*</span>net<span class="token punctuation">.</span>TCPConn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 延迟关闭连接</span>
    <span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 创建一个缓冲区，用于存储接收到的数据</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    <span class="token comment">// 循环读取数据</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从连接中读取数据，返回读取的字节数和错误</span>
        n<span class="token punctuation">,</span> err <span class="token operator">:=</span> conn<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token comment">// 如果错误不为空，打印错误并退出循环</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果读取的字节数为0，说明连接已经关闭，退出循环</span>
        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;connection closed&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 打印接收到的数据</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;received data:&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// 调用解码函数，将字节切片转换为自定义协议的结构体</span>
        mp <span class="token operator">:=</span> <span class="token function">Decode</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment">// 打印解码后的结构体</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;decoded data: %+v\\n&quot;</span><span class="token punctuation">,</span> mp<span class="token punctuation">)</span>
        <span class="token comment">// 根据消息的类型，做不同的处理</span>
        <span class="token keyword">switch</span> mp<span class="token punctuation">.</span>Type <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token comment">// 文本消息</span>
            <span class="token comment">// 回复一个文本消息，内容为&quot;Hello&quot;</span>
            reply <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span>
                Length<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                Type<span class="token punctuation">:</span>   <span class="token number">1</span><span class="token punctuation">,</span>
                Data<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 调用编码函数，将自定义协议的结构体转换为字节切片</span>
            data <span class="token operator">:=</span> <span class="token function">Encode</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span>
            <span class="token comment">// 将字节切片写入连接，返回写入的字节数和错误</span>
            n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token comment">// 如果错误不为空，打印错误并退出循环</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 打印写入的字节数</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sent bytes:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token comment">// 图片消息</span>
            <span class="token comment">// 回复一个图片消息，内容为一张图片的字节切片</span>
            reply <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span>
                Length<span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>imageBytes<span class="token punctuation">)</span><span class="token punctuation">,</span>
                Type<span class="token punctuation">:</span>   <span class="token number">2</span><span class="token punctuation">,</span>
                Data<span class="token punctuation">:</span>   imageBytes<span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 调用编码函数，将自定义协议的结构体转换为字节切片</span>
            data <span class="token operator">:=</span> <span class="token function">Encode</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span>
            <span class="token comment">// 将字节切片写入连接，返回写入的字节数和错误</span>
            n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token comment">// 如果错误不为空，打印错误并退出循环</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 打印写入的字节数</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sent bytes:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token comment">// 音频消息</span>
            <span class="token comment">// 回复一个音频消息，内容为一段音频的字节切片</span>
            reply <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span>
                Length<span class="token punctuation">:</span> <span class="token function">len</span><span class="token punctuation">(</span>audioBytes<span class="token punctuation">)</span><span class="token punctuation">,</span>
                Type<span class="token punctuation">:</span>   <span class="token number">3</span><span class="token punctuation">,</span>
                Data<span class="token punctuation">:</span>   audioBytes<span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 调用编码函数，将自定义协议的结构体转换为字节切片</span>
            data <span class="token operator">:=</span> <span class="token function">Encode</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span>
            <span class="token comment">// 将字节切片写入连接，返回写入的字节数和错误</span>
            n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token comment">// 如果错误不为空，打印错误并退出循环</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 打印写入的字节数</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sent bytes:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token comment">// 未知消息</span>
            <span class="token comment">// 回复一个文本消息，内容为&quot;Unknown&quot;</span>
            reply <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span>
                Length<span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
                Type<span class="token punctuation">:</span>   <span class="token number">1</span>
                Data<span class="token punctuation">:</span>   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;Unknown&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 调用编码函数，将自定义协议的结构体转换为字节切片</span>
            data <span class="token operator">:=</span> <span class="token function">Encode</span><span class="token punctuation">(</span>reply<span class="token punctuation">)</span>
            <span class="token comment">// 将字节切片写入连接，返回写入的字节数和错误</span>
            n<span class="token punctuation">,</span> err <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token comment">// 如果错误不为空，打印错误并退出循环</span>
            <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 打印写入的字节数</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sent bytes:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个服务端的地址，包含IP和端口</span>
    addr <span class="token operator">:=</span> <span class="token operator">&amp;</span>net<span class="token punctuation">.</span>TCPAddr<span class="token punctuation">{</span>
        IP<span class="token punctuation">:</span>   net<span class="token punctuation">.</span><span class="token function">ParseIP</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        Port<span class="token punctuation">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 使用net包中的ListenTCP函数，监听服务端的地址，返回一个net.TCPListener类型的对象和错误</span>
    listener<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">ListenTCP</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
    <span class="token comment">// 如果错误不为空，打印错误并退出程序</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 延迟关闭监听器</span>
    <span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 打印服务端的地址</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;server listening on:&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
    <span class="token comment">// 循环接收客户端的请求</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用net.TCPListener的AcceptTCP方法，接收客户端的连接，返回一个net.TCPConn类型的对象和错误</span>
        conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> listener<span class="token punctuation">.</span><span class="token function">AcceptTCP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// 如果错误不为空，打印错误并继续循环</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 打印客户端的地址</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;client connected from:&quot;</span><span class="token punctuation">,</span> conn<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// 创建一个goroutine，调用处理连接的函数，传入连接对象作为参数</span>
        <span class="token keyword">go</span> <span class="token function">handleConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> service

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;github.com/gorilla/websocket&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> addr <span class="token operator">=</span> flag<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&quot;addr&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:8080&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http service address&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> options <span class="token operator">=</span> websocket<span class="token punctuation">.</span>Upgrader<span class="token punctuation">{</span>CheckOrigin<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// use default options</span>

<span class="token keyword">func</span> <span class="token function">socketHandler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">,</span> err <span class="token operator">:=</span> options<span class="token punctuation">.</span><span class="token function">Upgrade</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;upgrade:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		mt<span class="token punctuation">,</span> message<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ReadMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;read:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>

		log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;recv: %s&quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
		err <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">WriteMessage</span><span class="token punctuation">(</span>mt<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;write:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">SetFlags</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/ws&quot;</span><span class="token punctuation">,</span> socketHandler<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token operator">*</span>addr<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","socket.html.vue"]]);export{k as default};

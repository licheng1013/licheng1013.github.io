const n=JSON.parse('{"key":"v-0afe37c4","path":"/study/go/socket.html","title":"socket","lang":"zh-CN","frontmatter":{"description":"socket 介绍 2022/10/25 自定义协议 2023/2/16 // 定义一个自定义协议的结构体，包含消息的长度、类型和内容 type MyProtocol struct { \\tLength int // 消息的长度，用4个字节表示 \\tType int // 消息的类型，用4个字节表示，比如1表示文本，2表示图片，3表示音频等 \\tData []byte // 消息的内容，用字节切片表示，长度由Length决定 } // 定义一个编码函数，将自定义协议的结构体转换为字节切片，用于发送数据 func Encode(mp *MyProtocol) []byte { \\t// 创建一个缓冲区，用于存储编码后的数据 \\tbuf := bytes.NewBuffer([]byte{}) \\t// 使用encoding/binary包中的Write函数，按照大端字节序，将结构体中的字段写入缓冲区 \\tbinary.Write(buf, binary.BigEndian, mp.Length) \\tbinary.Write(buf, binary.BigEndian, mp.Type) \\tbinary.Write(buf, binary.BigEndian, mp.Data) \\t// 返回缓冲区中的字节切片 \\treturn buf.Bytes() } // 定义一个解码函数，将字节切片转换为自定义协议的结构体，用于接收数据 func Decode(data []byte) *MyProtocol { \\t// 创建一个缓冲区，用于存储解码后的数据 \\tbuf := bytes.NewBuffer(data) \\t// 创建一个自定义协议的结构体，用于存储解码后的字段 \\tmp := &amp;MyProtocol{} \\t// 使用encoding/binary包中的Read函数，按照大端字节序，从缓冲区中读取字段到结构体中 \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Length) \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Type) \\t// 根据Length的值，创建一个字节切片，用于存储Data字段 \\tmp.Data = make([]byte, mp.Length) \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Data) \\t// 返回解码后的结构体 \\treturn mp }","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/go/socket.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"socket"}],["meta",{"property":"og:description","content":"socket 介绍 2022/10/25 自定义协议 2023/2/16 // 定义一个自定义协议的结构体，包含消息的长度、类型和内容 type MyProtocol struct { \\tLength int // 消息的长度，用4个字节表示 \\tType int // 消息的类型，用4个字节表示，比如1表示文本，2表示图片，3表示音频等 \\tData []byte // 消息的内容，用字节切片表示，长度由Length决定 } // 定义一个编码函数，将自定义协议的结构体转换为字节切片，用于发送数据 func Encode(mp *MyProtocol) []byte { \\t// 创建一个缓冲区，用于存储编码后的数据 \\tbuf := bytes.NewBuffer([]byte{}) \\t// 使用encoding/binary包中的Write函数，按照大端字节序，将结构体中的字段写入缓冲区 \\tbinary.Write(buf, binary.BigEndian, mp.Length) \\tbinary.Write(buf, binary.BigEndian, mp.Type) \\tbinary.Write(buf, binary.BigEndian, mp.Data) \\t// 返回缓冲区中的字节切片 \\treturn buf.Bytes() } // 定义一个解码函数，将字节切片转换为自定义协议的结构体，用于接收数据 func Decode(data []byte) *MyProtocol { \\t// 创建一个缓冲区，用于存储解码后的数据 \\tbuf := bytes.NewBuffer(data) \\t// 创建一个自定义协议的结构体，用于存储解码后的字段 \\tmp := &amp;MyProtocol{} \\t// 使用encoding/binary包中的Read函数，按照大端字节序，从缓冲区中读取字段到结构体中 \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Length) \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Type) \\t// 根据Length的值，创建一个字节切片，用于存储Data字段 \\tmp.Data = make([]byte, mp.Length) \\tbinary.Read(buf, binary.BigEndian, &amp;mp.Data) \\t// 返回解码后的结构体 \\treturn mp }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-02T10:40:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T10:40:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"socket\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-02T10:40:48.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"自定义协议","slug":"自定义协议","link":"#自定义协议","children":[{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"简单协议","slug":"简单协议","link":"#简单协议","children":[{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}]}],"git":{"createdTime":1670583353000,"updatedTime":1677753648000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":3}]},"readingTime":{"minutes":5.51,"words":1653},"filePathRelative":"study/go/socket.md","localizedDate":"2022年12月9日","excerpt":"<h1> socket</h1>\\n<h2> 介绍</h2>\\n<ul>\\n<li>2022/10/25</li>\\n</ul>\\n<h2> 自定义协议</h2>\\n<ul>\\n<li>2023/2/16</li>\\n</ul>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code>\\n<span class=\\"token comment\\">// 定义一个自定义协议的结构体，包含消息的长度、类型和内容</span>\\n<span class=\\"token keyword\\">type</span> MyProtocol <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n\\tLength <span class=\\"token builtin\\">int</span>    <span class=\\"token comment\\">// 消息的长度，用4个字节表示</span>\\n\\tType   <span class=\\"token builtin\\">int</span>    <span class=\\"token comment\\">// 消息的类型，用4个字节表示，比如1表示文本，2表示图片，3表示音频等</span>\\n\\tData   <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span> <span class=\\"token comment\\">// 消息的内容，用字节切片表示，长度由Length决定</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 定义一个编码函数，将自定义协议的结构体转换为字节切片，用于发送数据</span>\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">Encode</span><span class=\\"token punctuation\\">(</span>mp <span class=\\"token operator\\">*</span>MyProtocol<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// 创建一个缓冲区，用于存储编码后的数据</span>\\n\\tbuf <span class=\\"token operator\\">:=</span> bytes<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">NewBuffer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 使用encoding/binary包中的Write函数，按照大端字节序，将结构体中的字段写入缓冲区</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Write</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> mp<span class=\\"token punctuation\\">.</span>Length<span class=\\"token punctuation\\">)</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Write</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> mp<span class=\\"token punctuation\\">.</span>Type<span class=\\"token punctuation\\">)</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Write</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> mp<span class=\\"token punctuation\\">.</span>Data<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 返回缓冲区中的字节切片</span>\\n\\t<span class=\\"token keyword\\">return</span> buf<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Bytes</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 定义一个解码函数，将字节切片转换为自定义协议的结构体，用于接收数据</span>\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">Decode</span><span class=\\"token punctuation\\">(</span>data <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span>MyProtocol <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// 创建一个缓冲区，用于存储解码后的数据</span>\\n\\tbuf <span class=\\"token operator\\">:=</span> bytes<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">NewBuffer</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 创建一个自定义协议的结构体，用于存储解码后的字段</span>\\n\\tmp <span class=\\"token operator\\">:=</span> <span class=\\"token operator\\">&amp;</span>MyProtocol<span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\t<span class=\\"token comment\\">// 使用encoding/binary包中的Read函数，按照大端字节序，从缓冲区中读取字段到结构体中</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Read</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>mp<span class=\\"token punctuation\\">.</span>Length<span class=\\"token punctuation\\">)</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Read</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>mp<span class=\\"token punctuation\\">.</span>Type<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 根据Length的值，创建一个字节切片，用于存储Data字段</span>\\n\\tmp<span class=\\"token punctuation\\">.</span>Data <span class=\\"token operator\\">=</span> <span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">byte</span><span class=\\"token punctuation\\">,</span> mp<span class=\\"token punctuation\\">.</span>Length<span class=\\"token punctuation\\">)</span>\\n\\tbinary<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Read</span><span class=\\"token punctuation\\">(</span>buf<span class=\\"token punctuation\\">,</span> binary<span class=\\"token punctuation\\">.</span>BigEndian<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>mp<span class=\\"token punctuation\\">.</span>Data<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token comment\\">// 返回解码后的结构体</span>\\n\\t<span class=\\"token keyword\\">return</span> mp\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

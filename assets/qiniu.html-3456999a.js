const n=JSON.parse('{"key":"v-39c90182","path":"/study/go/qiniu.html","title":"七牛云","lang":"zh-CN","frontmatter":{"description":"七牛云 七牛云存储对接 go 2022/11/26 后端go具体代码 import ( \\t\\"github.com/qiniu/go-sdk/v7/auth/qbox\\" \\t\\"github.com/qiniu/go-sdk/v7/storage\\" ) //七牛云密钥 - 密钥查看: https://portal.qiniu.com/user/key const accessKey = \\"your accessKey\\" const secretKey = \\"your secretKey\\" //你的资源资源桶名称 - 桶查看: https://portal.qiniu.com/kodo/bucket const bucket =\\"my-video-test\\" //获取token func getToken() { \\tputPolicy := storage.PutPolicy{ \\t\\tScope: bucket, \\t} \\tmac := qbox.NewMac(accessKey, secretKey) \\tupToken := putPolicy.UploadToken(mac) \\tlog.Println(upToken) } //删除文件 func deleteFile(fileName string) { \\tmac := qbox.NewMac(accessKey, secretKey) \\tcfg := storage.Config{ \\t\\t// 是否使用https域名进行资源管理 \\t\\tUseHTTPS: true, \\t} \\tbucketManager := storage.NewBucketManager(mac, &amp;cfg) \\terr := bucketManager.Delete(bucket, fileName) \\tif err != nil { \\t\\tlog.Println(err) \\t} }","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/go/qiniu.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"七牛云"}],["meta",{"property":"og:description","content":"七牛云 七牛云存储对接 go 2022/11/26 后端go具体代码 import ( \\t\\"github.com/qiniu/go-sdk/v7/auth/qbox\\" \\t\\"github.com/qiniu/go-sdk/v7/storage\\" ) //七牛云密钥 - 密钥查看: https://portal.qiniu.com/user/key const accessKey = \\"your accessKey\\" const secretKey = \\"your secretKey\\" //你的资源资源桶名称 - 桶查看: https://portal.qiniu.com/kodo/bucket const bucket =\\"my-video-test\\" //获取token func getToken() { \\tputPolicy := storage.PutPolicy{ \\t\\tScope: bucket, \\t} \\tmac := qbox.NewMac(accessKey, secretKey) \\tupToken := putPolicy.UploadToken(mac) \\tlog.Println(upToken) } //删除文件 func deleteFile(fileName string) { \\tmac := qbox.NewMac(accessKey, secretKey) \\tcfg := storage.Config{ \\t\\t// 是否使用https域名进行资源管理 \\t\\tUseHTTPS: true, \\t} \\tbucketManager := storage.NewBucketManager(mac, &amp;cfg) \\terr := bucketManager.Delete(bucket, fileName) \\tif err != nil { \\t\\tlog.Println(err) \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T10:55:53.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T10:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"七牛云\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-09T10:55:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"七牛云存储对接","slug":"七牛云存储对接","link":"#七牛云存储对接","children":[]},{"level":2,"title":"后端go具体代码","slug":"后端go具体代码","link":"#后端go具体代码","children":[]},{"level":2,"title":"前端Vue","slug":"前端vue","link":"#前端vue","children":[]}],"git":{"createdTime":1670583353000,"updatedTime":1670583353000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"study/go/qiniu.md","localizedDate":"2022年12月9日","excerpt":"<h1> 七牛云</h1>\\n<h2> 七牛云存储对接</h2>\\n<ul>\\n<li>go</li>\\n<li>2022/11/26</li>\\n</ul>\\n<h2> 后端go具体代码</h2>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>\\n\\t<span class=\\"token string\\">\\"github.com/qiniu/go-sdk/v7/auth/qbox\\"</span>\\n\\t<span class=\\"token string\\">\\"github.com/qiniu/go-sdk/v7/storage\\"</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token comment\\">//七牛云密钥 - 密钥查看: https://portal.qiniu.com/user/key</span>\\n<span class=\\"token keyword\\">const</span> accessKey <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"your accessKey\\"</span>  \\n<span class=\\"token keyword\\">const</span> secretKey <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"your secretKey\\"</span>\\n<span class=\\"token comment\\">//你的资源资源桶名称 - 桶查看: https://portal.qiniu.com/kodo/bucket</span>\\n<span class=\\"token keyword\\">const</span> bucket <span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"my-video-test\\"</span>\\n<span class=\\"token comment\\">//获取token</span>\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">getToken</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token punctuation\\">{</span>\\n\\tputPolicy <span class=\\"token operator\\">:=</span> storage<span class=\\"token punctuation\\">.</span>PutPolicy<span class=\\"token punctuation\\">{</span>\\n\\t\\tScope<span class=\\"token punctuation\\">:</span> bucket<span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tmac <span class=\\"token operator\\">:=</span> qbox<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">NewMac</span><span class=\\"token punctuation\\">(</span>accessKey<span class=\\"token punctuation\\">,</span> secretKey<span class=\\"token punctuation\\">)</span>\\n\\tupToken <span class=\\"token operator\\">:=</span> putPolicy<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">UploadToken</span><span class=\\"token punctuation\\">(</span>mac<span class=\\"token punctuation\\">)</span>\\n\\tlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>upToken<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">//删除文件</span>\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">deleteFile</span><span class=\\"token punctuation\\">(</span>fileName <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token punctuation\\">{</span>\\n\\tmac <span class=\\"token operator\\">:=</span> qbox<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">NewMac</span><span class=\\"token punctuation\\">(</span>accessKey<span class=\\"token punctuation\\">,</span> secretKey<span class=\\"token punctuation\\">)</span>\\n\\tcfg <span class=\\"token operator\\">:=</span> storage<span class=\\"token punctuation\\">.</span>Config<span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token comment\\">// 是否使用https域名进行资源管理</span>\\n\\t\\tUseHTTPS<span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\tbucketManager <span class=\\"token operator\\">:=</span> storage<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">NewBucketManager</span><span class=\\"token punctuation\\">(</span>mac<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">&amp;</span>cfg<span class=\\"token punctuation\\">)</span>\\n\\terr <span class=\\"token operator\\">:=</span> bucketManager<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Delete</span><span class=\\"token punctuation\\">(</span>bucket<span class=\\"token punctuation\\">,</span> fileName<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token keyword\\">if</span> err <span class=\\"token operator\\">!=</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\tlog<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>err<span class=\\"token punctuation\\">)</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

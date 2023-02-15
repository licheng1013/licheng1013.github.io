const t=JSON.parse('{"key":"v-6261669c","path":"/study/java/maven.html","title":"Maven","lang":"zh-CN","frontmatter":{"description":"Maven 介绍😄 2019 如果把 mirror 去掉则是默认从中央仓库拉取 镜像🍋 settings.xml 8 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;settings xmlns=\\"http://maven.apache.org/SETTINGS/1.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd\\"&gt; &lt;pluginGroups&gt; &lt;/pluginGroups&gt; &lt;proxies&gt; &lt;/proxies&gt; &lt;servers&gt; &lt;/servers&gt; &lt;mirrors&gt; \\t &lt;mirror&gt; \\t\\t &lt;id&gt;aliyunmaven&lt;/id&gt; \\t\\t &lt;mirrorOf&gt;*&lt;/mirrorOf&gt; \\t\\t &lt;name&gt;阿里云公共仓库&lt;/name&gt; \\t\\t &lt;url&gt;https://maven.aliyun.com/repository/public&lt;/url&gt; \\t &lt;/mirror&gt; &lt;/mirrors&gt; &lt;profiles&gt; \\t\\t&lt;profile&gt; \\t\\t\\t&lt;id&gt;development&lt;/id&gt; \\t\\t\\t&lt;activation&gt; \\t\\t\\t &lt;jdk&gt;1.8&lt;/jdk&gt; \\t\\t\\t &lt;activeByDefault&gt;true&lt;/activeByDefault&gt; \\t\\t\\t&lt;/activation&gt; \\t\\t\\t&lt;properties&gt; \\t\\t\\t &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; \\t\\t\\t &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; \\t\\t\\t &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt; \\t\\t\\t&lt;/properties&gt; \\t\\t&lt;/profile&gt; &lt;/profiles&gt; &lt;/settings&gt;","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/java/maven.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"Maven"}],["meta",{"property":"og:description","content":"Maven 介绍😄 2019 如果把 mirror 去掉则是默认从中央仓库拉取 镜像🍋 settings.xml 8 &lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt; &lt;settings xmlns=\\"http://maven.apache.org/SETTINGS/1.0.0\\" xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xsi:schemaLocation=\\"http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd\\"&gt; &lt;pluginGroups&gt; &lt;/pluginGroups&gt; &lt;proxies&gt; &lt;/proxies&gt; &lt;servers&gt; &lt;/servers&gt; &lt;mirrors&gt; \\t &lt;mirror&gt; \\t\\t &lt;id&gt;aliyunmaven&lt;/id&gt; \\t\\t &lt;mirrorOf&gt;*&lt;/mirrorOf&gt; \\t\\t &lt;name&gt;阿里云公共仓库&lt;/name&gt; \\t\\t &lt;url&gt;https://maven.aliyun.com/repository/public&lt;/url&gt; \\t &lt;/mirror&gt; &lt;/mirrors&gt; &lt;profiles&gt; \\t\\t&lt;profile&gt; \\t\\t\\t&lt;id&gt;development&lt;/id&gt; \\t\\t\\t&lt;activation&gt; \\t\\t\\t &lt;jdk&gt;1.8&lt;/jdk&gt; \\t\\t\\t &lt;activeByDefault&gt;true&lt;/activeByDefault&gt; \\t\\t\\t&lt;/activation&gt; \\t\\t\\t&lt;properties&gt; \\t\\t\\t &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt; \\t\\t\\t &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt; \\t\\t\\t &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt; \\t\\t\\t&lt;/properties&gt; \\t\\t&lt;/profile&gt; &lt;/profiles&gt; &lt;/settings&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T10:55:53.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T10:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maven\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-09T10:55:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"介绍😄","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"镜像🍋","slug":"镜像","link":"#镜像","children":[]},{"level":2,"title":"父子依赖👻","slug":"父子依赖","link":"#父子依赖","children":[]}],"git":{"createdTime":1670583353000,"updatedTime":1670583353000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":214},"filePathRelative":"study/java/maven.md","localizedDate":"2022年12月9日","excerpt":"<h1> Maven</h1>\\n<h2> 介绍😄</h2>\\n<ul>\\n<li>2019</li>\\n<li>如果把 mirror 去掉则是默认从中央仓库拉取</li>\\n</ul>\\n<h2> 镜像🍋</h2>\\n<ul>\\n<li>settings.xml</li>\\n<li>8</li>\\n</ul>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token prolog\\">&lt;?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>settings</span> <span class=\\"token attr-name\\">xmlns</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://maven.apache.org/SETTINGS/1.0.0<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\"><span class=\\"token namespace\\">xmlns:</span>xsi</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://www.w3.org/2001/XMLSchema-instance<span class=\\"token punctuation\\">\\"</span></span>\\n          <span class=\\"token attr-name\\"><span class=\\"token namespace\\">xsi:</span>schemaLocation</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>pluginGroups</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>pluginGroups</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>proxies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>proxies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>servers</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>servers</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mirrors</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mirror</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>aliyunmaven<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mirrorOf</span><span class=\\"token punctuation\\">&gt;</span></span>*<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mirrorOf</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>阿里云公共仓库<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>name</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>https://maven.aliyun.com/repository/public<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>url</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mirror</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mirrors</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>profiles</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>profile</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>development<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>activation</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t   <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>jdk</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>jdk</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t   <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>activeByDefault</span><span class=\\"token punctuation\\">&gt;</span></span>true<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>activeByDefault</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>activation</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t   <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>maven.compiler.source</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>maven.compiler.source</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t   <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>maven.compiler.target</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>maven.compiler.target</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t   <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>maven.compiler.compilerVersion</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>maven.compiler.compilerVersion</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>profile</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>profiles</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>settings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
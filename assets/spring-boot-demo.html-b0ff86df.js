const n=JSON.parse('{"key":"v-6485064d","path":"/study/java/spring-boot-demo.html","title":"SpringBootDemo","lang":"zh-CN","frontmatter":{"description":"SpringBootDemo 根据条件创建bean的注解👻 @ConditionalOnProperty💒 @ConditionalOnProperty(value = \\"spring.cloud.discovery.enabled\\", matchIfMissing = true) public @interface ConditionalOnDiscoveryEnabled { //在指定的类上添加，可以限制类的bean创建。 //value 配置yml文件中的属性名 //matchIfMissing 设置值,默认为false及默认不创建bean }","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/java/spring-boot-demo.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"SpringBootDemo"}],["meta",{"property":"og:description","content":"SpringBootDemo 根据条件创建bean的注解👻 @ConditionalOnProperty💒 @ConditionalOnProperty(value = \\"spring.cloud.discovery.enabled\\", matchIfMissing = true) public @interface ConditionalOnDiscoveryEnabled { //在指定的类上添加，可以限制类的bean创建。 //value 配置yml文件中的属性名 //matchIfMissing 设置值,默认为false及默认不创建bean }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T10:55:53.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T10:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBootDemo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-09T10:55:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"根据条件创建bean的注解👻","slug":"根据条件创建bean的注解","link":"#根据条件创建bean的注解","children":[{"level":3,"title":"@ConditionalOnProperty💒","slug":"conditionalonproperty","link":"#conditionalonproperty","children":[]},{"level":3,"title":"@ConditionalOnMissingBean🌅","slug":"conditionalonmissingbean","link":"#conditionalonmissingbean","children":[]},{"level":3,"title":"@ConditionalOnBean🌟","slug":"conditionalonbean","link":"#conditionalonbean","children":[]},{"level":3,"title":"@AutoConfigureAfter🐔","slug":"autoconfigureafter","link":"#autoconfigureafter","children":[]},{"level":3,"title":"@ConditionalOnClass🍊","slug":"conditionalonclass","link":"#conditionalonclass","children":[]},{"level":3,"title":"@Conditional🍊","slug":"conditional","link":"#conditional","children":[]},{"level":3,"title":"@AutoConfigureBefore😎","slug":"autoconfigurebefore","link":"#autoconfigurebefore","children":[]}]},{"level":2,"title":"双MQ控制时间差🍎","slug":"双mq控制时间差","link":"#双mq控制时间差","children":[]},{"level":2,"title":"文件上传🚩","slug":"文件上传","link":"#文件上传","children":[]}],"git":{"createdTime":1670583353000,"updatedTime":1670583353000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"study/java/spring-boot-demo.md","localizedDate":"2022年12月9日","excerpt":"<h1> SpringBootDemo</h1>\\n<h2> 根据条件创建bean的注解👻</h2>\\n<h3> @ConditionalOnProperty💒</h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@ConditionalOnProperty</span><span class=\\"token punctuation\\">(</span>value <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"spring.cloud.discovery.enabled\\"</span><span class=\\"token punctuation\\">,</span> matchIfMissing <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token annotation punctuation\\">@interface</span> <span class=\\"token class-name\\">ConditionalOnDiscoveryEnabled</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//在指定的类上添加，可以限制类的bean创建。</span>\\n    <span class=\\"token comment\\">//value             配置yml文件中的属性名</span>\\n    <span class=\\"token comment\\">//matchIfMissing    设置值,默认为false及默认不创建bean</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

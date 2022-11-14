import{_ as s,o as n,c as a,b as e}from"./app.a79c9875.js";const i={},l=e(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2018</li><li>shell\u811A\u672C\u6559\u7A0B</li></ul><h2 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h2><ul><li>\u521B\u5EFA\u4E00\u4E2Ashell\u811A\u672C</li><li>vim test.sh</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># \u4E0A\u9762\u7528\u4E8E\u5B9A\u4E49\u6267\u884C\u7684sh\uFF0C\u9700\u8981\u4F7F\u7528./test.sh\u624D\u80FD\u4EE5bash\u6267\u884C\u811A\u672C</span>
<span class="token comment"># \u5982\u679C\u662F sh test.sh \u90A3\u4E48\u53EA\u4F1A\u662F\u666E\u901A\u7684shell\u8FDB\u884C\u6267\u884C if [[ $cmd == &quot;q&quot; ]] \u4E0D\u80FD\u5728sh\u4E0B\u6267\u884C</span>

<span class="token comment"># if\u8BED\u6CD5  \u6216 || \u4E8E &amp;&amp; </span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$cmd</span> <span class="token operator">==</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EC4\u5408\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u547D\u4EE4" aria-hidden="true">#</a> \u7EC4\u5408\u547D\u4EE4</h2><ul><li>\u9002\u5408\u4E8E\u5728\u811A\u672C\u83B7\u53D6\u521D\u59CB\u4E1C\u897F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u83B7\u53D6ip\u5730\u5740</span>
<span class="token assign-left variable">netName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;[ :]+&#39;</span> <span class="token string">&#39;!NF{if(eth!=&quot;&quot;&amp;&amp;ip==&quot;&quot;)print eth;eth=ip4=&quot;&quot;}/^[^ ]/{eth=$1}/inet addr:/{ip=$4}&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> ^e<span class="token variable">\`</span></span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span>\`ifconfig <span class="token variable">$netName</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==2{print $2}&#39;</span>

<span class="token comment"># \u66FF\u6362\u67D0\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/mysqlPasswordSet/<span class="token variable">$password</span>/g&quot;</span> /root/quick/config/application-dev.yml

<span class="token comment"># \u8FFD\u52A0\u6307\u4EE4\u8F93\u5165</span>
mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$password</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
USE mysql;
update user set Host=&quot;%&quot; where User=&quot;root&quot;;
select User,authentication_string,Host from user;
flush privileges;
flush privileges;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#shell\u53C2\u6570" aria-hidden="true">#</a> shell\u53C2\u6570</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
speel <span class="token number">5</span> <span class="token comment">#\u4F11\u77205\u79D2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function o(p,c){return n(),a("div",null,t)}const d=s(i,[["render",o],["__file","shell.html.vue"]]);export{d as default};

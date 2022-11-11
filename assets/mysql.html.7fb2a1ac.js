import{_ as l,o as i,c as r,d as a,e,a as n,b as t,r as d}from"./app.6c70c16b.js";const c={},o=t(`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2019</li><li>mysql \u91C7\u7528c\u6216c++\u5199\u7684</li></ul><h2 id="mysql\u57FA\u672C\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#mysql\u57FA\u672C\u4F18\u5316" aria-hidden="true">#</a> Mysql\u57FA\u672C\u4F18\u5316</h2><ul><li>\u7981\u6B62\u4F7F\u7528 select *</li><li>\u53EA\u9700\u8981\u4E00\u6761\u6570\u636E\u5219 limit</li><li>\u8D2D\u4E70\u9AD8\u6027\u80FD\u4E91\u76D8</li></ul><h2 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h2><ul><li>\u7D22\u5F15\u662F\u5426\u751F\u6548</li><li>explain</li><li>\u7D22\u5F15\u5931\u6548\u573A\u666F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0D\u7B49             where xx != 1</span>
<span class="token comment"># \u5DE6%\u6A21\u7CCA\u67E5\u8BE2      where xx like &quot;%xx&quot;</span>
<span class="token comment"># \u8BA1\u7B97\u5931\u6548        where xx = n+1</span>
<span class="token comment"># \u4F7F\u7528\u51FD\u6570       where xx(1,3) = 1</span>
<span class="token comment"># \u5B57\u7B26\u4E32\u4F7F\u7528\u6570\u5B57\u67E5\u8BE2 where xx = 111  \u6CE8:\u5982\u679C xx \u4E3A\u5B57\u7B26\u4E32\u5B57\u6BB5\u90A3\u4E48\u6B64\u65F6\u662F\u4E0D\u8D70\u7D22\u5F15\u7684</span>
<span class="token comment"># or\u67E5\u8BE2        where xx = 1 or nn = 2 \u6CE8:\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u5B57\u6BB5\u5EFA\u7ACB\u7D22\u5F15\u90A3\u4E48\u662F\u4E0D\u4F1A\u8D70\u7D22\u5F15\uFF0C\u9700\u8981\u4E24\u4E2A\u5B57\u6BB5\u90FD\u5EFA\u7ACB</span>
<span class="token comment"># not in       where xx not in (11,22,33) \u6CE8:\u666E\u901A\u5B57\u6BB5\u4F1A\u5931\u6548\uFF0C\u4F46\u4E3B\u952E\u5B57\u6BB5\u4E0D\u4F1A\u5931\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7D22\u5F15\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u7C7B\u578B" aria-hidden="true">#</a> \u7D22\u5F15\u7C7B\u578B</h2><ul><li>\u4E3B\u952E\u7D22\u5F15</li><li>\u666E\u901A\u7D22\u5F15</li><li>\u552F\u4E00\u7D22\u5F15</li><li>\u5168\u6587\u7D22\u5F15</li><li>\u7A7A\u95F4\u7D22\u5F15</li><li>\u4F18\u70B9\u589E\u52A0\u4E86\u67E5\u8BE2\u901F\u5EA6\uFF0C\u4F46\u51CF\u5C11\u4E86\u589E\u5220\u6539\u901F\u5EA6\uFF0C\u56E0\u4E3A\u9700\u8981\u64CD\u4F5C\u4E00\u4E0B\u7D22\u5F15\u6587\u4EF6</li></ul><h2 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h2><h3 id="\u7279\u6027acid" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027acid" aria-hidden="true">#</a> \u7279\u6027ACID</h3><ul><li>\u539F\u5B50\u6027\uFF0C\u8981\u4E48\u90FD\u6210\u529F\u8981\u4E48\u90FD\u5931\u6548</li><li>\u9694\u79BB\u6027(\u9694\u79BB\u7EA7\u522B)</li><li>\u4E00\u81F4\u6027\uFF0C\u7ED3\u679C\u8981\u4E0E\u9884\u671F\u7684\u4E00\u81F4</li><li>\u6301\u4E45\u6027\uFF0C\u5E94\u8BE5\u4FDD\u5B58\u5230\u78C1\u76D8\u4E2D\uFF0C\u624D\u7B97\u5B8C\u6210\u6574\u4E2A\u4E8B\u52A1</li></ul><h3 id="\u9694\u79BB\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#\u9694\u79BB\u7EA7\u522B" aria-hidden="true">#</a> \u9694\u79BB\u7EA7\u522B</h3><ul><li>\u8BFB\u672A\u63D0\u4EA4(\u810F\u8BFB)\uFF0C\u4E8B\u52A1B\u80FD\u8BFB\u5230\u4E8B\u52A1A\u672A\u63D0\u4EA4\u7684\u6570\u636E,(\u4F1A\u8BFB\u51FAA\u4E8B\u52A1\u5DF2\u7ECF\u4FEE\u6539\u7684\u540E\u7684\u6570\u636E\uFF0C\u672A\u63D0\u4EA4\u4E8B\u52A1\u4E4B\u524D\u7684\u6570\u636E)</li><li><ul><li>\u5F71\u54CD\uFF1A\u6570\u636E\u4FEE\u6539: \u6E90a = 10,A\u4E8B\u52A1 a = 10+10 \u56DE\u6EDA,B\u4E8B\u52A1a = 20(\u810F\u6570\u636E)+10\u5DF2\u63D0\u4EA4\u3002\u6700\u7EC8\u7684\u6570\u636E=30,</li></ul></li><li><ul><li>\u603B\u7ED3\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u5185\u7684\u4FEE\u6539\u6570\u636E\uFF0C\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u4E8B\u52A1\u7684\u5224\u65AD\uFF0C\u5BF9\u4FEE\u6539(\u52A0\u9501)</li></ul></li><li>\u8BFB\u5DF2\u63D0\u4EA4(\u4E0D\u53EF\u91CD\u590D\u8BFB)\uFF0C</li><li><ul><li>\u5F71\u54CD\uFF1A\u6570\u636E\u4FEE\u6539\uFF1A\u6E90a = 10,\u4E8B\u52A1A\u8BFB\u53D6 10\uFF0C\u4E8B\u52A1B\u8BFB\u53D6 10\uFF0C\u4E8B\u52A1A\u4FEE\u6539 10+10\uFF0C\u5728\u8BFB\u53D6\u7B49\u4E8E20\uFF0C\u4E8B\u52A1B\u8BFB\u53D6\u8FD8\u662F10,</li></ul></li><li><ul><li>\u603B\u7ED3\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u5185\u4FEE\u6539\u6570\u636E\u540E\uFF0C\u4FEE\u6539\u524D\u540E\u8BFB\u53D6\u7684\u6570\u636E\u4E0D\u4E00\u81F4\uFF0C\u6B64\u60C5\u51B5\u5728\u4E00\u822C\u4E0D\u4F1A\u53D1\u751F\u3002</li></ul></li><li>\u53EF\u91CD\u590D\u8BFB(\u6709\u5E7B\u8BFB\u95EE\u9898)(\u9ED8\u8BA4):</li><li><ul><li>\u5F71\u54CD\uFF1A\u4E3B\u952E\u6E90a B\u4E8B\u52A1\u67E5\u8BE2a\u53D1\u73B0\u6CA1\u6709\u51C6\u5907\u63D2\u5165\u4F46\u672A\u63D0\u4EA4\u4E8B\u52A1\uFF0CA\u4E8B\u52A1\u5DF2\u7ECF\u63D2\u5165a\u552F\u4E00\u6570\u636E\u5E76\u63D0\u4EA4\u4E8B\u52A1\uFF0CB\u4E8B\u52A1\u5F00\u59CB\u63D0\u4EA4\uFF0C\u7136\u540E\u53D1\u73B0\u4E86\u51B2\u7A81\uFF0C\u5F88\u8FF7\u60D1\u3002</li></ul></li><li><ul><li>\u603B\u7ED3\uFF1A\u4E00\u4E2A\u4E8B\u52A1\u591A\u6B21\u67E5\u8BE2\u6570\u636E\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\uFF0C\u5982\u679C\u53E6\u4E00\u4E2A\u4E8B\u52A1\u6267\u884C\u4E86\u63D2\u5165\uFF0C\u90A3\u4E48\u53EF\u80FD\u9020\u6210\u4E86\u5E7B\u8BFB</li></ul></li><li>\u4E32\u884C\u5316(\u4EE5\u4E0A\u95EE\u9898\u90FD\u89E3\u51B3\uFF0C\u6548\u7387\u4F4E\u4E0B)\uFF0C\u4E0D\u80FD\u5E76\u53D1\u6267\u884C,\u4E8B\u52A1\u53EA\u80FD\u4E00\u4E2A\u4E2A\u6267\u884C\uFF0C\u6548\u7387\u4F4E\u4E0B\u3002</li></ul><h2 id="\u9501" tabindex="-1"><a class="header-anchor" href="#\u9501" aria-hidden="true">#</a> \u9501</h2><h3 id="\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#\u4E50\u89C2\u9501" aria-hidden="true">#</a> \u4E50\u89C2\u9501</h3><ul><li>\u57FA\u4E8E\u4E1A\u52A1\u5B9E\u73B0\uFF0C\u5728\u6570\u636E\u5E93\u5B9A\u4E49\u4E00\u4E2A\u7248\u672C\u53F7\u8FDB\u884C\u5B9E\u73B0\u3002\u5982\u679C\u6570\u636E\u5728\u5176\u4ED6\u5730\u65B9\u5DF2\u88AB\u4FEE\u6539\uFF0C\u5219\u5F02\u5E38\u3002</li><li>\u9002\u7528\u5FEB\u901F\u8FD4\u56DE\u7ED3\u679C\u7684\u573A\u666F\uFF0C\u8BFB\u53D6\u9891\u7E41\u7684\u573A\u666F</li></ul><h3 id="\u81EA\u65CB\u9501-\u4E50\u89C2\u9501\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u81EA\u65CB\u9501-\u4E50\u89C2\u9501\u9012\u5F52" aria-hidden="true">#</a> \u81EA\u65CB\u9501(\u4E50\u89C2\u9501\u9012\u5F52)</h3><ul><li>\u57FA\u4E8E\u4E50\u89C2\u9501\u5FAA\u73AF\u6267\u884C\u4E1A\u52A1\uFF0C\u76F4\u81F3\u4E1A\u52A1\u6267\u884C\u5B8C\u6210\u3002</li><li>\u9002\u7528\u80FD\u591F\u7B49\u5F85\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u8BFB\u53D6\u9891\u7E41\u7684\u573A\u666F</li></ul><h2 id="\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD" aria-hidden="true">#</a> \u5907\u4EFD</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8BED\u6CD5 mysqldump -u\u7528\u6237\u540D -p \u6570\u636E\u5E93\u540D &gt; \u6570\u636E\u5E93\u540D.sql</span>
<span class="token comment"># \u793A\u4F8B</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> shiping <span class="token operator">&gt;</span> shipin.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u5B9A\u65F6\u5907\u4EFD\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u5907\u4EFD\u547D\u4EE4" aria-hidden="true">#</a> \u5B9A\u65F6\u5907\u4EFD\u547D\u4EE4</h3><ul><li>\u5B89\u88C5mysql\u8FDE\u63A5\u5668</li><li>yum install -y mariadb.x86_64 mariadb-libs.x86_64</li><li>\u6BCF\u65E5\u4E24\u70B9\u5907\u4EFD\u4E00\u6B21</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B9A\u65F6\u547D\u4EE4</span>
<span class="token function">crontab</span> <span class="token parameter variable">-e</span> 
<span class="token number">0</span> <span class="token number">2</span> * * * <span class="token function">bash</span> <span class="token variable">\${\u4F60\u7684\u811A\u672C\u76EE\u5F55}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5907\u4EFD\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5907\u4EFD\u811A\u672C" aria-hidden="true">#</a> \u5907\u4EFD\u811A\u672C</h3><ul><li>vim backup.sh</li><li><strong>\u5982\u679C\u662Fdocker\u5FC5\u987B\u6307\u5B9A-h\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u6709\u95EE\u9898</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">dbName</span><span class="token operator">=</span><span class="token string">&quot;ink&quot;</span> <span class="token comment">#\u65E5\u671F</span>
<span class="token assign-left variable">createTime</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d_%H-%M-%S<span class="token variable">\`</span></span>
<span class="token assign-left variable">filePath</span><span class="token operator">=</span><span class="token string">&quot;./sql/&quot;</span> <span class="token comment">#\u4FDD\u5B58\u8DEF\u5F84</span>
mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-proot</span> <span class="token parameter variable">-h127.0.0.1</span> <span class="token variable">$dbName</span><span class="token operator">&gt;</span> <span class="token string">&quot;<span class="token variable">$filePath</span><span class="token variable">$dbName</span>-<span class="token variable">$createTime</span>&quot;</span>.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2>`,29),h={href:"http://licheng1013.gitee.io/blog-doc/linux/docker.html#mysql",target:"_blank",rel:"noopener noreferrer"},p=a("h2",{id:"\u8BFB\u5199\u5206\u79BB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u8BFB\u5199\u5206\u79BB","aria-hidden":"true"},"#"),e(" \u8BFB\u5199\u5206\u79BB")],-1),u=a("li",null,"\u7B2C\u4E09\u65B9\u535A\u5BA2\u6559\u7A0B",-1),m={href:"http://www.r9it.com/20190727/mysql-master-slave-in-docker.html",target:"_blank",rel:"noopener noreferrer"};function b(v,k){const s=d("ExternalLinkIcon");return i(),r("div",null,[o,a("ul",null,[a("li",null,[a("a",h,[e("http://licheng1013.gitee.io/blog-doc/linux/docker.html#mysql"),n(s)])])]),p,a("ul",null,[u,a("li",null,[a("a",m,[e("http://www.r9it.com/20190727/mysql-master-slave-in-docker.html"),n(s)])])])])}const g=l(c,[["render",b],["__file","mysql.html.vue"]]);export{g as default};

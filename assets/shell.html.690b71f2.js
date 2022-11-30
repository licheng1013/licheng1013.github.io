import{_ as s,o as a,c as n,d as e}from"./app.758e5e9e.js";const i={},l=e(`<h1 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> Shell</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>2018</li><li>shell脚本教程</li></ul><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><ul><li>创建一个shell脚本</li><li>vim test.sh</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 上面用于定义执行的sh，需要使用./test.sh才能以bash执行脚本</span>
<span class="token comment"># 如果是 sh test.sh 那么只会是普通的shell进行执行 if [[ $cmd == &quot;q&quot; ]] 不能在sh下执行</span>

<span class="token comment"># if语法  或 || 于 &amp;&amp; </span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$cmd</span> <span class="token operator">==</span> <span class="token string">&quot;test&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合命令" tabindex="-1"><a class="header-anchor" href="#组合命令" aria-hidden="true">#</a> 组合命令</h2><ul><li>适合于在脚本获取初始东西</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取ip地址</span>
<span class="token assign-left variable">netName</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;[ :]+&#39;</span> <span class="token string">&#39;!NF{if(eth!=&quot;&quot;&amp;&amp;ip==&quot;&quot;)print eth;eth=ip4=&quot;&quot;}/^[^ ]/{eth=$1}/inet addr:/{ip=$4}&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> ^e<span class="token variable">\`</span></span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span>\`ifconfig <span class="token variable">$netName</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==2{print $2}&#39;</span>

<span class="token comment"># 替换某个文件的内容</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/mysqlPasswordSet/<span class="token variable">$password</span>/g&quot;</span> /root/quick/config/application-dev.yml

<span class="token comment"># 追加指令输入</span>
mysql <span class="token parameter variable">-uroot</span> -p<span class="token variable">$password</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
USE mysql;
update user set Host=&quot;%&quot; where User=&quot;root&quot;;
select User,authentication_string,Host from user;
flush privileges;
flush privileges;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell参数" tabindex="-1"><a class="header-anchor" href="#shell参数" aria-hidden="true">#</a> shell参数</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
speel <span class="token number">5</span> <span class="token comment">#休眠5秒</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function o(p,c){return a(),n("div",null,t)}const d=s(i,[["render",o],["__file","shell.html.vue"]]);export{d as default};

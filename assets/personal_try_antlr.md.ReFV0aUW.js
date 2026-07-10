import{_ as s,o as n,c as e,ak as l}from"./chunks/framework.DHNUngTD.js";const u=JSON.parse('{"title":"Antlr","description":"","frontmatter":{},"headers":[],"relativePath":"personal/try/antlr.md","filePath":"personal/try/antlr.md","lastUpdated":1776156701000}'),p={name:"personal/try/antlr.md"};function i(t,a,r,c,o,h){return n(),e("div",null,[...a[0]||(a[0]=[l(`<h1 id="antlr" tabindex="-1">Antlr <a class="header-anchor" href="#antlr" aria-label="Permalink to “Antlr”">​</a></h1><h2 id="介绍" tabindex="-1">介绍🍇 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h2><ul><li>2022/11/18</li><li>版本 antlr4</li></ul><h2 id="符号作用" tabindex="-1">符号作用🍎 <a class="header-anchor" href="#符号作用" aria-label="Permalink to “符号作用”">​</a></h2><h2 id="示例" tabindex="-1">示例🌟 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h2><h3 id="json" tabindex="-1">JSON💞 <a class="header-anchor" href="#json" aria-label="Permalink to “JSON”">​</a></h3><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grammar JSON;</span></span>
<span class="line"><span>json: value EOF;</span></span>
<span class="line"><span>value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;</span></span>
<span class="line"><span>obj : &#39;{&#39; pair (&#39;,&#39; pair)* &#39;}&#39; | &#39;{&#39; &#39;}&#39; ;</span></span>
<span class="line"><span>pair : STRING &#39;:&#39; value ;</span></span>
<span class="line"><span>arr  : &#39;[&#39; value (&#39;,&#39; value)* &#39;]&#39; | &#39;[&#39; &#39;]&#39;;</span></span>
<span class="line"><span>STRING : &#39;&quot;&#39; (ESC | SAFECODEPOINT)* &#39;&quot;&#39; ;</span></span>
<span class="line"><span>fragment ESC : &#39;\\\\&#39; ([&quot;\\\\/bfnrt] | UNICODE) ;</span></span>
<span class="line"><span>fragment UNICODE  : &#39;u&#39; HEX HEX HEX HEX;</span></span>
<span class="line"><span>fragment HEX : [0-9a-fA-F] ;</span></span>
<span class="line"><span>fragment SAFECODEPOINT : ~ [&quot;\\\\\\u0000-\\u001F];</span></span>
<span class="line"><span>NUMBER : &#39;-&#39;? INT (&#39;.&#39; [0-9] +)? EXP? ;</span></span>
<span class="line"><span>fragment INT : &#39;0&#39; | [1-9] [0-9]* ;</span></span>
<span class="line"><span>// no leading zeros</span></span>
<span class="line"><span>fragment EXP : [Ee] [+\\-]? INT;</span></span>
<span class="line"><span>// \\- since - means &quot;range&quot; inside [...]</span></span>
<span class="line"><span>// 跳过值</span></span>
<span class="line"><span>WS : [ \\t\\n\\r] + -&gt; skip ;</span></span></code></pre></div><h3 id="orm" tabindex="-1">ORM🍏 <a class="header-anchor" href="#orm" aria-label="Permalink to “ORM”">​</a></h3><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>grammar ORM;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>test: value EOF;</span></span>
<span class="line"><span>//value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;</span></span>
<span class="line"><span>value  :  let *; // * 代表可以有多个</span></span>
<span class="line"><span>let : &#39;\${&#39;VAL&#39;}&#39;  ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>VAL : ([a-z]|[A-Z])+;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// \\- since - means &quot;range&quot; inside [...]</span></span>
<span class="line"><span>// 跳过值</span></span>
<span class="line"><span>WS : [ \\t\\n\\ra-zA-Z] + -&gt; skip ;</span></span></code></pre></div>`,9)])])}const g=s(p,[["render",i]]);export{u as __pageData,g as default};

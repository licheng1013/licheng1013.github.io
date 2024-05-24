import{_ as e,o as n,c as a,e as i}from"./app-CCiKvSgg.js";const l={},t=i(`<h1 id="antlr" tabindex="-1"><a class="header-anchor" href="#antlr"><span>Antlr</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍🍇</span></a></h2><ul><li>2022/11/18</li><li>版本 antlr4</li></ul><h2 id="符号作用" tabindex="-1"><a class="header-anchor" href="#符号作用"><span>符号作用🍎</span></a></h2><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例🌟</span></a></h2><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON💞</span></a></h3><div class="language-antlr line-numbers-mode" data-ext="antlr" data-title="antlr"><pre class="language-antlr"><code>grammar JSON;
json: value EOF;
value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;
obj : &#39;{&#39; pair (&#39;,&#39; pair)* &#39;}&#39; | &#39;{&#39; &#39;}&#39; ;
pair : STRING &#39;:&#39; value ;
arr  : &#39;[&#39; value (&#39;,&#39; value)* &#39;]&#39; | &#39;[&#39; &#39;]&#39;;
STRING : &#39;&quot;&#39; (ESC | SAFECODEPOINT)* &#39;&quot;&#39; ;
fragment ESC : &#39;\\\\&#39; ([&quot;\\\\/bfnrt] | UNICODE) ;
fragment UNICODE  : &#39;u&#39; HEX HEX HEX HEX;
fragment HEX : [0-9a-fA-F] ;
fragment SAFECODEPOINT : ~ [&quot;\\\\\\u0000-\\u001F];
NUMBER : &#39;-&#39;? INT (&#39;.&#39; [0-9] +)? EXP? ;
fragment INT : &#39;0&#39; | [1-9] [0-9]* ;
// no leading zeros
fragment EXP : [Ee] [+\\-]? INT;
// \\- since - means &quot;range&quot; inside [...]
// 跳过值
WS : [ \\t\\n\\r] + -&gt; skip ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm" tabindex="-1"><a class="header-anchor" href="#orm"><span>ORM🍏</span></a></h3><div class="language-antlr line-numbers-mode" data-ext="antlr" data-title="antlr"><pre class="language-antlr"><code>grammar ORM;

test: value EOF;
//value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;
value  :  let *; // * 代表可以有多个
let : &#39;\${&#39;VAL&#39;}&#39;  ;

VAL : ([a-z]|[A-Z])+;

// \\- since - means &quot;range&quot; inside [...]
// 跳过值
WS : [ \\t\\n\\ra-zA-Z] + -&gt; skip ;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[t];function s(d,c){return n(),a("div",null,r)}const u=e(l,[["render",s],["__file","antlr.html.vue"]]),m=JSON.parse(`{"path":"/study/try/antlr.html","title":"Antlr","lang":"zh-CN","frontmatter":{"description":"Antlr 介绍🍇 2022/11/18 版本 antlr4 符号作用🍎 示例🌟 JSON💞 ORM🍏","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/try/antlr.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"Antlr"}],["meta",{"property":"og:description","content":"Antlr 介绍🍇 2022/11/18 版本 antlr4 符号作用🍎 示例🌟 JSON💞 ORM🍏"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T10:55:53.000Z"}],["meta",{"property":"article:author","content":"LiCheng"}],["meta",{"property":"article:modified_time","content":"2022-12-09T10:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Antlr\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-09T10:55:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LiCheng\\",\\"url\\":\\"https://gitee.com/licheng1013\\"}]}"]]},"headers":[{"level":2,"title":"介绍🍇","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"符号作用🍎","slug":"符号作用","link":"#符号作用","children":[]},{"level":2,"title":"示例🌟","slug":"示例","link":"#示例","children":[{"level":3,"title":"JSON💞","slug":"json","link":"#json","children":[]},{"level":3,"title":"ORM🍏","slug":"orm","link":"#orm","children":[]}]}],"git":{"createdTime":1668737652000,"updatedTime":1670583353000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"study/try/antlr.md","localizedDate":"2022年11月18日","excerpt":"\\n<h2>介绍🍇</h2>\\n<ul>\\n<li>2022/11/18</li>\\n<li>版本 antlr4</li>\\n</ul>\\n<h2>符号作用🍎</h2>\\n<h2>示例🌟</h2>\\n<h3>JSON💞</h3>\\n<div class=\\"language-antlr\\" data-ext=\\"antlr\\" data-title=\\"antlr\\"><pre class=\\"language-antlr\\"><code>grammar JSON;\\njson: value EOF;\\nvalue  : STRING | NUMBER | obj | arr | 'true' | 'false' | 'null' ;\\nobj : '{' pair (',' pair)* '}' | '{' '}' ;\\npair : STRING ':' value ;\\narr  : '[' value (',' value)* ']' | '[' ']';\\nSTRING : '\\"' (ESC | SAFECODEPOINT)* '\\"' ;\\nfragment ESC : '\\\\\\\\' ([\\"\\\\\\\\/bfnrt] | UNICODE) ;\\nfragment UNICODE  : 'u' HEX HEX HEX HEX;\\nfragment HEX : [0-9a-fA-F] ;\\nfragment SAFECODEPOINT : ~ [\\"\\\\\\\\\\\\u0000-\\\\u001F];\\nNUMBER : '-'? INT ('.' [0-9] +)? EXP? ;\\nfragment INT : '0' | [1-9] [0-9]* ;\\n// no leading zeros\\nfragment EXP : [Ee] [+\\\\-]? INT;\\n// \\\\- since - means \\"range\\" inside [...]\\n// 跳过值\\nWS : [ \\\\t\\\\n\\\\r] + -&gt; skip ;\\n</code></pre></div>","autoDesc":true}`);export{u as comp,m as data};

import{_ as e,o as n,c as a,e as i}from"./app.eae5ee61.js";const l={},r=i(`<h1 id="antlr" tabindex="-1"><a class="header-anchor" href="#antlr" aria-hidden="true">#</a> Antlr</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍🍇</h2><ul><li>2022/11/18</li><li>版本 antlr4</li></ul><h2 id="符号作用" tabindex="-1"><a class="header-anchor" href="#符号作用" aria-hidden="true">#</a> 符号作用🍎</h2><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例🌟</h2><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON💞</h3><div class="language-antlr line-numbers-mode" data-ext="antlr"><pre class="language-antlr"><code>grammar JSON;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm" tabindex="-1"><a class="header-anchor" href="#orm" aria-hidden="true">#</a> ORM🍏</h3><div class="language-antlr line-numbers-mode" data-ext="antlr"><pre class="language-antlr"><code>grammar ORM;

test: value EOF;
//value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;
value  :  let *; // * 代表可以有多个
let : &#39;\${&#39;VAL&#39;}&#39;  ;

VAL : ([a-z]|[A-Z])+;

// \\- since - means &quot;range&quot; inside [...]
// 跳过值
WS : [ \\t\\n\\ra-zA-Z] + -&gt; skip ;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[r];function s(v,u){return n(),a("div",null,d)}const c=e(l,[["render",s],["__file","antlr.html.vue"]]);export{c as default};

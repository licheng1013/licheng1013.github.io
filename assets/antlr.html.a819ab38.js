import{_ as e,o as n,c as i,d as a}from"./app.b34d8c3b.js";const l={},r=a(`<h1 id="antlr" tabindex="-1"><a class="header-anchor" href="#antlr" aria-hidden="true">#</a> Antlr</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2022/11/18</li><li>\u7248\u672C antlr4</li></ul><h2 id="\u7B26\u53F7\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B26\u53F7\u4F5C\u7528" aria-hidden="true">#</a> \u7B26\u53F7\u4F5C\u7528</h2><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3><div class="language-antlr ext-antlr line-numbers-mode"><pre class="language-antlr"><code>grammar JSON;
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
// \u8DF3\u8FC7\u503C
WS : [ \\t\\n\\r] + -&gt; skip ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm" tabindex="-1"><a class="header-anchor" href="#orm" aria-hidden="true">#</a> ORM</h3><div class="language-antlr ext-antlr line-numbers-mode"><pre class="language-antlr"><code>grammar ORM;

test: value EOF;
//value  : STRING | NUMBER | obj | arr | &#39;true&#39; | &#39;false&#39; | &#39;null&#39; ;
value  :  let *; // * \u4EE3\u8868\u53EF\u4EE5\u6709\u591A\u4E2A
let : &#39;\${&#39;VAL&#39;}&#39;  ;

VAL : ([a-z]|[A-Z])+;

// \\- since - means &quot;range&quot; inside [...]
// \u8DF3\u8FC7\u503C
WS : [ \\t\\n\\ra-zA-Z] + -&gt; skip ;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),d=[r];function s(v,u){return n(),i("div",null,d)}const c=e(l,[["render",s],["__file","antlr.html.vue"]]);export{c as default};

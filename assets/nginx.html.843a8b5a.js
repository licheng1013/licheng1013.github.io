import{_ as n,o as s,c as a,b as e}from"./app.6c70c16b.js";const i={},l=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><ul><li>2019</li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    sendfile        on<span class="token punctuation">;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    
    <span class="token comment">#\u8D1F\u8F7D\u5747\u8861ly\u6700\u540E\u4E0D\u8981\u6709\u7A7A\u683C</span>
    upstream ly<span class="token punctuation">{</span> 
        server localhost:8080<span class="token punctuation">;</span>
        server localhost:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name www.shileke.cn<span class="token punctuation">;</span>
        root html<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
        ssl_certificate   /usr/local/nginx/cert/3022254_www.shileke.cn.pem<span class="token punctuation">;</span>
        ssl_certificate_key  /usr/local/nginx/cert/3022254_www.shileke.cn.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
        <span class="token comment">#\u5F3A\u5236https\u8BBF\u95EE</span>
        <span class="token comment">#fastcgi_param   HTTPS         on;</span>
        <span class="token comment">#fastcgi_param   HTTP_SCHEME   https;	</span>
    
        location / <span class="token punctuation">{</span>
                    root  /usr/local/src/static/dengling/<span class="token punctuation">;</span>
                    index index.html index.htm<span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
    
        location /api <span class="token punctuation">{</span>    
            charset utf-8<span class="token punctuation">;</span>          <span class="token comment">#\u663E\u793A\u4E2D\u6587</span>
            proxy_pass http://ly/<span class="token punctuation">;</span>
            proxy_redirect off<span class="token punctuation">;</span>	  
        <span class="token punctuation">}</span>
    
        location /app <span class="token punctuation">{</span>
            <span class="token builtin class-name">alias</span> /usr/local/src/app/<span class="token punctuation">;</span>
            autoindex on<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(p,o){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","nginx.html.vue"]]);export{d as default};

const n=JSON.parse('{"key":"v-03aa6f39","path":"/study/linux/nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{"description":"Nginx 2019 配置😎 #user nobody; worker_processes 1; events { worker_connections 1024; } http { include mime.types; default_type application/octet-stream; sendfile on; keepalive_timeout 65; #负载均衡ly最后不要有空格 upstream ly{ server localhost:8080; server localhost:8081; } server { listen 443 ssl; server_name www.shileke.cn; root html; index index.html index.htm; ssl_certificate /usr/local/nginx/cert/3022254_www.shileke.cn.pem; ssl_certificate_key /usr/local/nginx/cert/3022254_www.shileke.cn.key; ssl_session_timeout 5m; ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4; ssl_protocols TLSv1 TLSv1.1 TLSv1.2; ssl_prefer_server_ciphers on; #强制https访问 #fastcgi_param HTTPS on; #fastcgi_param HTTP_SCHEME https;\\t location / { root /usr/local/src/static/dengling/; index index.html index.htm; } location /api { charset utf-8; #显示中文 proxy_pass http://ly/; proxy_redirect off;\\t } location /app { alias /usr/local/src/app/; autoindex on; } } }","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/linux/nginx.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"Nginx 2019 配置😎 #user nobody; worker_processes 1; events { worker_connections 1024; } http { include mime.types; default_type application/octet-stream; sendfile on; keepalive_timeout 65; #负载均衡ly最后不要有空格 upstream ly{ server localhost:8080; server localhost:8081; } server { listen 443 ssl; server_name www.shileke.cn; root html; index index.html index.htm; ssl_certificate /usr/local/nginx/cert/3022254_www.shileke.cn.pem; ssl_certificate_key /usr/local/nginx/cert/3022254_www.shileke.cn.key; ssl_session_timeout 5m; ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4; ssl_protocols TLSv1 TLSv1.1 TLSv1.2; ssl_prefer_server_ciphers on; #强制https访问 #fastcgi_param HTTPS on; #fastcgi_param HTTP_SCHEME https;\\t location / { root /usr/local/src/static/dengling/; index index.html index.htm; } location /api { charset utf-8; #显示中文 proxy_pass http://ly/; proxy_redirect off;\\t } location /app { alias /usr/local/src/app/; autoindex on; } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-09T10:55:53.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-09T10:55:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-09T10:55:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置😎","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1670583353000,"updatedTime":1670583353000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"study/linux/nginx.md","localizedDate":"2022年12月9日","excerpt":"<h1> Nginx</h1>\\n<ul>\\n<li>2019</li>\\n</ul>\\n<h2> 配置😎</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#user  nobody;</span>\\nworker_processes  <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n\\n\\nevents <span class=\\"token punctuation\\">{</span>\\n    worker_connections  <span class=\\"token number\\">1024</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\nhttp <span class=\\"token punctuation\\">{</span>\\n    include       mime.types<span class=\\"token punctuation\\">;</span>\\n    default_type  application/octet-stream<span class=\\"token punctuation\\">;</span>\\n    sendfile        on<span class=\\"token punctuation\\">;</span>\\n    keepalive_timeout  <span class=\\"token number\\">65</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token comment\\">#负载均衡ly最后不要有空格</span>\\n    upstream ly<span class=\\"token punctuation\\">{</span> \\n        server localhost:8080<span class=\\"token punctuation\\">;</span>\\n        server localhost:8081<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    server <span class=\\"token punctuation\\">{</span>\\n        listen <span class=\\"token number\\">443</span> ssl<span class=\\"token punctuation\\">;</span>\\n        server_name www.shileke.cn<span class=\\"token punctuation\\">;</span>\\n        root html<span class=\\"token punctuation\\">;</span>\\n        index index.html index.htm<span class=\\"token punctuation\\">;</span>\\n        ssl_certificate   /usr/local/nginx/cert/3022254_www.shileke.cn.pem<span class=\\"token punctuation\\">;</span>\\n        ssl_certificate_key  /usr/local/nginx/cert/3022254_www.shileke.cn.key<span class=\\"token punctuation\\">;</span>\\n        ssl_session_timeout 5m<span class=\\"token punctuation\\">;</span>\\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class=\\"token operator\\">!</span>NULL:<span class=\\"token operator\\">!</span>aNULL:<span class=\\"token operator\\">!</span>MD5:<span class=\\"token operator\\">!</span>ADH:<span class=\\"token operator\\">!</span>RC4<span class=\\"token punctuation\\">;</span>\\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class=\\"token punctuation\\">;</span>\\n        ssl_prefer_server_ciphers on<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">#强制https访问</span>\\n        <span class=\\"token comment\\">#fastcgi_param   HTTPS         on;</span>\\n        <span class=\\"token comment\\">#fastcgi_param   HTTP_SCHEME   https;\\t</span>\\n    \\n        location / <span class=\\"token punctuation\\">{</span>\\n                    root  /usr/local/src/static/dengling/<span class=\\"token punctuation\\">;</span>\\n                    index index.html index.htm<span class=\\"token punctuation\\">;</span>\\n               <span class=\\"token punctuation\\">}</span>\\n    \\n        location /api <span class=\\"token punctuation\\">{</span>    \\n            charset utf-8<span class=\\"token punctuation\\">;</span>          <span class=\\"token comment\\">#显示中文</span>\\n            proxy_pass http://ly/<span class=\\"token punctuation\\">;</span>\\n            proxy_redirect off<span class=\\"token punctuation\\">;</span>\\t  \\n        <span class=\\"token punctuation\\">}</span>\\n    \\n        location /app <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token builtin class-name\\">alias</span> /usr/local/src/app/<span class=\\"token punctuation\\">;</span>\\n            autoindex on<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};

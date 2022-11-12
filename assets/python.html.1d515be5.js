import{_ as t,o as l,c as p,d as n,e,a,b as i,r as d}from"./app.0105a10a.js";const c={},r=i('<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2018</li><li>\u5165\u95E8\u8BED\u8A00\uFF0C\u5B66\u4E86\u53C8\u5F03\uFF0C\u5F03\u800C\u53C8\u5B66</li><li>\u4E0B\u8F7D\uFF1A[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li></ul><h2 id="pip\u955C\u50CF\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#pip\u955C\u50CF\u8BBE\u7F6E" aria-hidden="true">#</a> pip\u955C\u50CF\u8BBE\u7F6E</h2><ul><li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li></ul><h2 id="game" tabindex="-1"><a class="header-anchor" href="#game" aria-hidden="true">#</a> Game</h2>',6),o={href:"https://blog.csdn.net/qq_37794658/article/details/105546981",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_37794658/article/details/105456363",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"\u5F00\u6E90\u5E93",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u6E90\u5E93","aria-hidden":"true"},"#"),e(" \u5F00\u6E90\u5E93")],-1),v=n("li",null,"\u4E00\u4E9B\u597D\u7528\u7684\u5F00\u6E90\u5E93",-1),b={href:"https://github.com/soimort/you-get",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/gevent/gevent",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="pygame" tabindex="-1"><a class="header-anchor" href="#pygame" aria-hidden="true">#</a> Pygame</h2><h3 id="\u4ECB\u7ECD-1" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD-1" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><ul><li>\u5B89\u88C5 pip install pygame</li></ul><h3 id="\u56FE\u7247\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u52A0\u8F7D" aria-hidden="true">#</a> \u56FE\u7247\u52A0\u8F7D</h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> pygame
pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>
win <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u753B\u5E03\u7A97\u53E3\u7684\u5927\u5C0F</span>
<span class="token comment"># \u5F53\u524D\u76EE\u5F55\u4E0B\u7684</span>
space <span class="token operator">=</span> pygame<span class="token punctuation">.</span>image<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;a.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>convert_alpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># \u62C9\u4F38\u56FE\u7247</span>
    <span class="token comment"># space = pygame.transform.scale(space,(600,600))</span>
    <span class="token comment"># \u5FAA\u73AF\u4E8B\u4EF6</span>
    <span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># \u7A97\u53E3x\u4E8B\u4EF6</span>
        <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> pygame<span class="token punctuation">.</span>QUIT<span class="token punctuation">:</span>
            exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">158</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># \u6E32\u67D3\u5E95\u8272</span>
    win<span class="token punctuation">.</span>blit<span class="token punctuation">(</span>space<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \u52A0\u8F7D\u56FE\u7247</span>
    pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u5237\u65B0\u753B\u5E03</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\u4E8B\u4EF6</h3><ul><li>@date 2020/4/14 12:58</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# \u79FB\u52A8\u901F\u5EA6
speed = 10
while True:
    # \u8BBE\u7F6E\u6E38\u620F\u6BCF\u79D2\u8FD0\u884C\u901F\u5EA6 \u5E27\u7387
    pygame.time.Clock().tick_busy_loop(60)
    # \u5FAA\u73AF\u7A97\u53E3\u4E8B\u4EF6
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # \u83B7\u53D6\u6240\u6709\u952E\u76D8\u72B6\u6001
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed \u5BF9\u5E94key\u5730\u5740
    if keys[pygame.K_UP]:   y-=speed # \u4E0A
    if keys[pygame.K_DOWN]:  y+=speed # \u4E0B
    if keys[pygame.K_RIGHT]:   x+=speed # \u5DE6
    if keys[pygame.K_LEFT]: x-=speed # \u53F3
    # \u9650\u5236\u79FB\u52A8\u8DDD\u79BB   \u53F3\u5408\u4E0B\u8BF4\u660E \u7531\u4E8E\u65B9\u5757\u7684\u7ED8\u753B\u662F\u4ECE xy\u5750\u6807\u5F00\u59CB\u7684 \u5373xy\u5750\u6807\u7684\u53F3\u8FB9\u548C\u4E0B\u8FB9\u8FDB\u884C\u7ED8\u753B,  \u5750\u6807&gt;\u957F\u6216\u5BBD-\u901F\u5EA6 \u5219  \u5750\u6807 = \u957F\u6216\u5BBD - \u901F\u5EA6
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # \u5E95\u8272
    pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # \u521B\u5EFA\u82D7\u70B9 \u53C2\u6570\u4F9D\u6B21\u662F  \u7A97\u53E3\u5BF9\u8C61,\u989C\u8272\u5143\u7EC4,\u5750\u6807\u5BBD\u5EA6\u5143\u7EC4
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u78B0\u649E\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u78B0\u649E\u5904\u7406" aria-hidden="true">#</a> \u78B0\u649E\u5904\u7406</h3><p>-@date 2020/4/14</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# \u79FB\u52A8\u901F\u5EA6
speed = 20
space = pygame.image.load(&quot;b.jpg&quot;).convert_alpha()
space = pygame.transform.scale(space,(speed,speed))
i,j = 0,0
while True:
    # \u8BBE\u7F6E\u6E38\u620F\u6BCF\u79D2\u8FD0\u884C\u901F\u5EA6 \u5E27\u7387
    pygame.time.Clock().tick_busy_loop(60)
    
    # x,y = pygame.mouse.get_pos()
    # \u5FAA\u73AF\u7A97\u53E3\u4E8B\u4EF6
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # \u83B7\u53D6\u6240\u6709\u952E\u76D8\u72B6\u6001
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed \u5BF9\u5E94key\u5730\u5740
    if keys[pygame.K_UP]:   y-=speed # \u4E0A
    if keys[pygame.K_DOWN]:  y+=speed # \u4E0B
    if keys[pygame.K_RIGHT]:   x+=speed # \u5DE6
    if keys[pygame.K_LEFT]: x-=speed # \u53F3
    # \u9650\u5236\u79FB\u52A8\u8DDD\u79BB   \u53F3\u5408\u4E0B\u8BF4\u660E \u7531\u4E8E\u65B9\u5757\u7684\u7ED8\u753B\u662F\u4ECE xy\u5750\u6807\u5F00\u59CB\u7684 \u5373xy\u5750\u6807\u7684\u53F3\u8FB9\u548C\u4E0B\u8FB9\u8FDB\u884C\u7ED8\u753B,  \u5750\u6807&gt;\u957F\u6216\u5BBD-\u901F\u5EA6 \u5219  \u5750\u6807 = \u957F\u6216\u5BBD - \u901F\u5EA6
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # \u5E95\u8272
    win.blit(space,(x,y))
    win.blit(space,(i,j))
    if i == x and j == y :
        print(&quot;\u78B0\u649E&quot;)
    print(&quot;\u6CA1\u6709&quot;)

    # pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # \u521B\u5EFA\u82D7\u70B9 \u53C2\u6570\u4F9D\u6B21\u662F  \u7A97\u53E3\u5BF9\u8C61,\u989C\u8272\u5143\u7EC4,\u5750\u6807\u5BBD\u5EA6\u5143\u7EC4
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function g(k,_){const s=d("ExternalLinkIcon");return l(),p("div",null,[r,n("ul",null,[n("li",null,[e("\u8D2A\u5403\u86C7\uFF1A"),n("a",o,[e("https://blog.csdn.net/qq_37794658/article/details/105546981"),a(s)])]),n("li",null,[e("\u79FB\u52A8\u5F39\u7403\uFF1A"),n("a",u,[e("https://blog.csdn.net/qq_37794658/article/details/105456363"),a(s)])])]),m,n("ul",null,[v,n("li",null,[e("\u89C6\u9891\u5E93\uFF1A"),n("a",b,[e("https://github.com/soimort/you-get"),a(s)])]),n("li",null,[e("\u534F\u7A0B\u5E93\uFF1A"),n("a",h,[e("https://github.com/gevent/gevent"),a(s)])])]),y])}const x=t(c,[["render",g],["__file","python.html.vue"]]);export{x as default};

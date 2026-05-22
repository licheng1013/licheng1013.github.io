import{_ as a,o as i,c as n,ak as p,aN as l}from"./chunks/framework.DatqH1PK.js";const E=JSON.parse('{"title":"Python","description":"","frontmatter":{},"headers":[],"relativePath":"personal/try/python.md","filePath":"personal/try/python.md","lastUpdated":1775897862000}'),e={name:"personal/try/python.md"};function h(t,s,k,r,g,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to “Python”">​</a></h1><h2 id="介绍" tabindex="-1">介绍😎 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h2><ul><li>2018</li><li>入门语言，学了又弃，弃而又学</li><li>下载：[<a href="https://registry.npmmirror.com/binary.html?path=python/" target="_blank" rel="noreferrer">https://registry.npmmirror.com/binary.html?path=python/</a>](<a href="https://registry.npmmirror.com/binary.html?path=python/" target="_blank" rel="noreferrer">https://registry.npmmirror.com/binary.html?path=python/</a></li></ul><h2 id="pip镜像设置" tabindex="-1">pip镜像设置✋ <a class="header-anchor" href="#pip镜像设置" aria-label="Permalink to “pip镜像设置”">​</a></h2><ul><li>pip config set global.index-url <a href="http://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noreferrer">http://mirrors.aliyun.com/pypi/simple/</a></li></ul><h2 id="game" tabindex="-1">Game🎁 <a class="header-anchor" href="#game" aria-label="Permalink to “Game”">​</a></h2><ul><li>贪吃蛇：<a href="https://blog.csdn.net/qq_37794658/article/details/105546981" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_37794658/article/details/105546981</a></li><li>移动弹球：<a href="https://blog.csdn.net/qq_37794658/article/details/105456363" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_37794658/article/details/105456363</a></li></ul><h2 id="开源库" tabindex="-1">开源库🚩 <a class="header-anchor" href="#开源库" aria-label="Permalink to “开源库”">​</a></h2><ul><li>一些好用的开源库</li><li>视频库：<a href="https://github.com/soimort/you-get" target="_blank" rel="noreferrer">https://github.com/soimort/you-get</a></li><li>协程库：<a href="https://github.com/gevent/gevent" target="_blank" rel="noreferrer">https://github.com/gevent/gevent</a></li></ul><h2 id="pygame" tabindex="-1">Pygame🍇 <a class="header-anchor" href="#pygame" aria-label="Permalink to “Pygame”">​</a></h2><h3 id="介绍-1" tabindex="-1">介绍🌟 <a class="header-anchor" href="#介绍-1" aria-label="Permalink to “介绍”">​</a></h3><ul><li>安装 pip install pygame</li></ul><h3 id="图片加载" tabindex="-1">图片加载⭐ <a class="header-anchor" href="#图片加载" aria-label="Permalink to “图片加载”">​</a></h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pygame.init()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">win </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.display.set_mode((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 画布窗口的大小</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前目录下的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">space </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.image.load(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).convert_alpha()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 拉伸图片</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # space = pygame.transform.scale(space,(600,600))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 循环事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.event.get():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 窗口x事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    win.fill((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">158</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 渲染底色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    win.blit(space,(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 加载图片</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pygame.display.update() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 刷新画布</span></span></code></pre></div><h3 id="上下左右移动事件" tabindex="-1">上下左右移动事件🍉 <a class="header-anchor" href="#上下左右移动事件" aria-label="Permalink to “上下左右移动事件”">​</a></h3><ul><li>@date 2020/4/14 12:58</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>width = 600</span></span>
<span class="line"><span>heigth = 600</span></span>
<span class="line"><span>win = pygame.display.set_mode((width,heigth))</span></span>
<span class="line"><span>x,y = 300,300</span></span>
<span class="line"><span># 移动速度</span></span>
<span class="line"><span>speed = 10</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    # 设置游戏每秒运行速度 帧率</span></span>
<span class="line"><span>    pygame.time.Clock().tick_busy_loop(60)</span></span>
<span class="line"><span>    # 循环窗口事件</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            exit(0)</span></span>
<span class="line"><span>    # 获取所有键盘状态</span></span>
<span class="line"><span>    keys = pygame.key.get_pressed()</span></span>
<span class="line"><span>    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址</span></span>
<span class="line"><span>    if keys[pygame.K_UP]:   y-=speed # 上</span></span>
<span class="line"><span>    if keys[pygame.K_DOWN]:  y+=speed # 下</span></span>
<span class="line"><span>    if keys[pygame.K_RIGHT]:   x+=speed # 左</span></span>
<span class="line"><span>    if keys[pygame.K_LEFT]: x-=speed # 右</span></span>
<span class="line"><span>    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度</span></span>
<span class="line"><span>    if x &lt; 0:x=0</span></span>
<span class="line"><span>    if x &gt; width-speed:x=width-speed</span></span>
<span class="line"><span>    if y &lt;= 0:y=0</span></span>
<span class="line"><span>    if y &gt; heigth-speed:y=heigth-speed</span></span>
<span class="line"><span>    win.fill((64,158,255)) # 底色</span></span>
<span class="line"><span>    pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组</span></span>
<span class="line"><span>    pygame.display.update()</span></span></code></pre></div><h3 id="碰撞处理" tabindex="-1">碰撞处理😎 <a class="header-anchor" href="#碰撞处理" aria-label="Permalink to “碰撞处理”">​</a></h3><p>-@date 2020/4/14</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>width = 600</span></span>
<span class="line"><span>heigth = 600</span></span>
<span class="line"><span>win = pygame.display.set_mode((width,heigth))</span></span>
<span class="line"><span>x,y = 300,300</span></span>
<span class="line"><span># 移动速度</span></span>
<span class="line"><span>speed = 20</span></span>
<span class="line"><span>space = pygame.image.load(&quot;b.jpg&quot;).convert_alpha()</span></span>
<span class="line"><span>space = pygame.transform.scale(space,(speed,speed))</span></span>
<span class="line"><span>i,j = 0,0</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    # 设置游戏每秒运行速度 帧率</span></span>
<span class="line"><span>    pygame.time.Clock().tick_busy_loop(60)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # x,y = pygame.mouse.get_pos()</span></span>
<span class="line"><span>    # 循环窗口事件</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            exit(0)</span></span>
<span class="line"><span>    # 获取所有键盘状态</span></span>
<span class="line"><span>    keys = pygame.key.get_pressed()</span></span>
<span class="line"><span>    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址</span></span>
<span class="line"><span>    if keys[pygame.K_UP]:   y-=speed # 上</span></span>
<span class="line"><span>    if keys[pygame.K_DOWN]:  y+=speed # 下</span></span>
<span class="line"><span>    if keys[pygame.K_RIGHT]:   x+=speed # 左</span></span>
<span class="line"><span>    if keys[pygame.K_LEFT]: x-=speed # 右</span></span>
<span class="line"><span>    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度</span></span>
<span class="line"><span>    if x &lt; 0:x=0</span></span>
<span class="line"><span>    if x &gt; width-speed:x=width-speed</span></span>
<span class="line"><span>    if y &lt;= 0:y=0</span></span>
<span class="line"><span>    if y &gt; heigth-speed:y=heigth-speed</span></span>
<span class="line"><span>    win.fill((64,158,255)) # 底色</span></span>
<span class="line"><span>    win.blit(space,(x,y))</span></span>
<span class="line"><span>    win.blit(space,(i,j))</span></span>
<span class="line"><span>    if i == x and j == y :</span></span>
<span class="line"><span>        print(&quot;碰撞&quot;)</span></span>
<span class="line"><span>    print(&quot;没有&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组</span></span>
<span class="line"><span>    pygame.display.update()</span></span></code></pre></div><h2 id="爬虫" tabindex="-1">爬虫 <a class="header-anchor" href="#爬虫" aria-label="Permalink to “爬虫”">​</a></h2><h3 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to “基本示例”">​</a></h3><ul><li>2021/12/19</li><li>安装依赖</li><li>pip install lxml</li><li>pip install bs4</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uuid</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> io </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BytesIO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导入requests包 pip install requests</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PIL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Image</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bs4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BeautifulSoup  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># pip install bs4  / pip install lxml</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image_suffix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;4kdongman/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">home_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://pic.netbian.com/&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(html_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">home_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image_suffix, image_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">home_url):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    str_html </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.get(html_url)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    soup </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BeautifulSoup(str_html.text, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;lxml&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 需要获取标签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        _str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> soup.select(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#main &gt; div.slist &gt; ul &gt; li:nth-child(&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;) &gt; a &gt; img&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_str) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #print(_str)  # 打印路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # _list.append(_str)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            img </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_str[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img.find(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img.find(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            img_list.append(image_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img[start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:end </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> img_list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取图片地址分页</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url_suffix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">image_suffix):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_img(home_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url_suffix)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_img(home_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> url_suffix </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;index_&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__str__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_page(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(v_list)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_page(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载时使用</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.get(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BytesIO(r.content)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Image.open(f)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uuid.uuid4()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    img.save(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">E:</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\i</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">mg</span><span style="--shiki-light:#22863A;--shiki-light-font-weight:bold;--shiki-dark:#85E89D;--shiki-dark-font-weight:bold;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文件夹必须存在</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="标签获取" tabindex="-1">标签获取 <a class="header-anchor" href="#标签获取" aria-label="Permalink to “标签获取”">​</a></h3><p><img src="`+l+`" alt=""></p><h2 id="jwt使用" tabindex="-1">Jwt使用 <a class="header-anchor" href="#jwt使用" aria-label="Permalink to “Jwt使用”">​</a></h2><ul><li>pip install PyJWT</li><li>编码 jwt.encode({&#39;some&#39;: &#39;payload&#39;}, &#39;secret&#39;, algorithm=&#39;HS256&#39;) #必须键值对</li><li>解码 jwt.decode(encoded, &#39;secret&#39;, algorithms=[&#39;HS256&#39;])</li></ul><h2 id="介绍-2" tabindex="-1">介绍 <a class="header-anchor" href="#介绍-2" aria-label="Permalink to “介绍”">​</a></h2><ul><li>安装 pip install pygame</li></ul><h3 id="图片加载-1" tabindex="-1">图片加载 <a class="header-anchor" href="#图片加载-1" aria-label="Permalink to “图片加载”">​</a></h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pygame.init()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">win </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.display.set_mode((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 画布窗口的大小</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前目录下的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">space </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.image.load(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).convert_alpha()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 拉伸图片</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # space = pygame.transform.scale(space,(600,600))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 循环事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.event.get():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 窗口x事件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pygame.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">QUIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    win.fill((</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">158</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 渲染底色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    win.blit(space,(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 加载图片</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pygame.display.update() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 刷新画布</span></span></code></pre></div><h3 id="上下左右移动事件-1" tabindex="-1">上下左右移动事件 <a class="header-anchor" href="#上下左右移动事件-1" aria-label="Permalink to “上下左右移动事件”">​</a></h3><ul><li>@date 2020/4/14 12:58</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>width = 600</span></span>
<span class="line"><span>heigth = 600</span></span>
<span class="line"><span>win = pygame.display.set_mode((width,heigth))</span></span>
<span class="line"><span>x,y = 300,300</span></span>
<span class="line"><span># 移动速度</span></span>
<span class="line"><span>speed = 10</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    # 设置游戏每秒运行速度 帧率</span></span>
<span class="line"><span>    pygame.time.Clock().tick_busy_loop(60)</span></span>
<span class="line"><span>    # 循环窗口事件</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            exit(0)</span></span>
<span class="line"><span>    # 获取所有键盘状态</span></span>
<span class="line"><span>    keys = pygame.key.get_pressed()</span></span>
<span class="line"><span>    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址</span></span>
<span class="line"><span>    if keys[pygame.K_UP]:   y-=speed # 上</span></span>
<span class="line"><span>    if keys[pygame.K_DOWN]:  y+=speed # 下</span></span>
<span class="line"><span>    if keys[pygame.K_RIGHT]:   x+=speed # 左</span></span>
<span class="line"><span>    if keys[pygame.K_LEFT]: x-=speed # 右</span></span>
<span class="line"><span>    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度</span></span>
<span class="line"><span>    if x &lt; 0:x=0</span></span>
<span class="line"><span>    if x &gt; width-speed:x=width-speed</span></span>
<span class="line"><span>    if y &lt;= 0:y=0</span></span>
<span class="line"><span>    if y &gt; heigth-speed:y=heigth-speed</span></span>
<span class="line"><span>    win.fill((64,158,255)) # 底色</span></span>
<span class="line"><span>    pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组</span></span>
<span class="line"><span>    pygame.display.update()</span></span></code></pre></div><h3 id="碰撞处理-1" tabindex="-1">碰撞处理 <a class="header-anchor" href="#碰撞处理-1" aria-label="Permalink to “碰撞处理”">​</a></h3><p>-@date 2020/4/14</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>import pygame</span></span>
<span class="line"><span>pygame.init()</span></span>
<span class="line"><span>width = 600</span></span>
<span class="line"><span>heigth = 600</span></span>
<span class="line"><span>win = pygame.display.set_mode((width,heigth))</span></span>
<span class="line"><span>x,y = 300,300</span></span>
<span class="line"><span># 移动速度</span></span>
<span class="line"><span>speed = 20</span></span>
<span class="line"><span>space = pygame.image.load(&quot;b.jpg&quot;).convert_alpha()</span></span>
<span class="line"><span>space = pygame.transform.scale(space,(speed,speed))</span></span>
<span class="line"><span>i,j = 0,0</span></span>
<span class="line"><span>while True:</span></span>
<span class="line"><span>    # 设置游戏每秒运行速度 帧率</span></span>
<span class="line"><span>    pygame.time.Clock().tick_busy_loop(60)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # x,y = pygame.mouse.get_pos()</span></span>
<span class="line"><span>    # 循环窗口事件</span></span>
<span class="line"><span>    for event in pygame.event.get():</span></span>
<span class="line"><span>        if event.type == pygame.QUIT:</span></span>
<span class="line"><span>            exit(0)</span></span>
<span class="line"><span>    # 获取所有键盘状态</span></span>
<span class="line"><span>    keys = pygame.key.get_pressed()</span></span>
<span class="line"><span>    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址</span></span>
<span class="line"><span>    if keys[pygame.K_UP]:   y-=speed # 上</span></span>
<span class="line"><span>    if keys[pygame.K_DOWN]:  y+=speed # 下</span></span>
<span class="line"><span>    if keys[pygame.K_RIGHT]:   x+=speed # 左</span></span>
<span class="line"><span>    if keys[pygame.K_LEFT]: x-=speed # 右</span></span>
<span class="line"><span>    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度</span></span>
<span class="line"><span>    if x &lt; 0:x=0</span></span>
<span class="line"><span>    if x &gt; width-speed:x=width-speed</span></span>
<span class="line"><span>    if y &lt;= 0:y=0</span></span>
<span class="line"><span>    if y &gt; heigth-speed:y=heigth-speed</span></span>
<span class="line"><span>    win.fill((64,158,255)) # 底色</span></span>
<span class="line"><span>    win.blit(space,(x,y))</span></span>
<span class="line"><span>    win.blit(space,(i,j))</span></span>
<span class="line"><span>    if i == x and j == y :</span></span>
<span class="line"><span>        print(&quot;碰撞&quot;)</span></span>
<span class="line"><span>    print(&quot;没有&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组</span></span>
<span class="line"><span>    pygame.display.update()</span></span></code></pre></div>`,40)])])}const c=a(e,[["render",h]]);export{E as __pageData,c as default};

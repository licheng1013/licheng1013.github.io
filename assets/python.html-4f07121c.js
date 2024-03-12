import{_ as t,r as p,o as l,c,a as n,e as s,b as e,d as i}from"./app-4a82a665.js";const o="/linux/python1.png",d={},u=i('<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍😎</h2><ul><li>2018</li><li>入门语言，学了又弃，弃而又学</li><li>下载：[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li></ul><h2 id="pip镜像设置" tabindex="-1"><a class="header-anchor" href="#pip镜像设置" aria-hidden="true">#</a> pip镜像设置✋</h2><ul><li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li></ul><h2 id="game" tabindex="-1"><a class="header-anchor" href="#game" aria-hidden="true">#</a> Game🎁</h2>',6),r={href:"https://blog.csdn.net/qq_37794658/article/details/105546981",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_37794658/article/details/105456363",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"开源库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开源库","aria-hidden":"true"},"#"),s(" 开源库🚩")],-1),k=n("li",null,"一些好用的开源库",-1),b={href:"https://github.com/soimort/you-get",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/gevent/gevent",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="pygame" tabindex="-1"><a class="header-anchor" href="#pygame" aria-hidden="true">#</a> Pygame🍇</h2><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍🌟</h3><ul><li>安装 pip install pygame</li></ul><h3 id="图片加载" tabindex="-1"><a class="header-anchor" href="#图片加载" aria-hidden="true">#</a> 图片加载⭐</h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pygame
pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>
win <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 画布窗口的大小</span>
<span class="token comment"># 当前目录下的</span>
space <span class="token operator">=</span> pygame<span class="token punctuation">.</span>image<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;a.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>convert_alpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 拉伸图片</span>
    <span class="token comment"># space = pygame.transform.scale(space,(600,600))</span>
    <span class="token comment"># 循环事件</span>
    <span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 窗口x事件</span>
        <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> pygame<span class="token punctuation">.</span>QUIT<span class="token punctuation">:</span>
            exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">158</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 渲染底色</span>
    win<span class="token punctuation">.</span>blit<span class="token punctuation">(</span>space<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 加载图片</span>
    pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 刷新画布</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上下左右移动事件" tabindex="-1"><a class="header-anchor" href="#上下左右移动事件" aria-hidden="true">#</a> 上下左右移动事件🍉</h3><ul><li>@date 2020/4/14 12:58</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# 移动速度
speed = 10
while True:
    # 设置游戏每秒运行速度 帧率
    pygame.time.Clock().tick_busy_loop(60)
    # 循环窗口事件
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # 获取所有键盘状态
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址
    if keys[pygame.K_UP]:   y-=speed # 上
    if keys[pygame.K_DOWN]:  y+=speed # 下
    if keys[pygame.K_RIGHT]:   x+=speed # 左
    if keys[pygame.K_LEFT]: x-=speed # 右
    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # 底色
    pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="碰撞处理" tabindex="-1"><a class="header-anchor" href="#碰撞处理" aria-hidden="true">#</a> 碰撞处理😎</h3><p>-@date 2020/4/14</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# 移动速度
speed = 20
space = pygame.image.load(&quot;b.jpg&quot;).convert_alpha()
space = pygame.transform.scale(space,(speed,speed))
i,j = 0,0
while True:
    # 设置游戏每秒运行速度 帧率
    pygame.time.Clock().tick_busy_loop(60)
    
    # x,y = pygame.mouse.get_pos()
    # 循环窗口事件
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # 获取所有键盘状态
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址
    if keys[pygame.K_UP]:   y-=speed # 上
    if keys[pygame.K_DOWN]:  y+=speed # 下
    if keys[pygame.K_RIGHT]:   x+=speed # 左
    if keys[pygame.K_LEFT]: x-=speed # 右
    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # 底色
    win.blit(space,(x,y))
    win.blit(space,(i,j))
    if i == x and j == y :
        print(&quot;碰撞&quot;)
    print(&quot;没有&quot;)

    # pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="爬虫" tabindex="-1"><a class="header-anchor" href="#爬虫" aria-hidden="true">#</a> 爬虫</h2><h3 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例" aria-hidden="true">#</a> 基本示例</h3><ul><li>2021/12/19</li><li>安装依赖</li><li>pip install lxml</li><li>pip install bs4</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> uuid
<span class="token keyword">from</span> io <span class="token keyword">import</span> BytesIO

<span class="token keyword">import</span> requests  <span class="token comment"># 导入requests包 pip install requests</span>
<span class="token keyword">from</span> PIL <span class="token keyword">import</span> Image
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup  <span class="token comment"># pip install bs4  / pip install lxml</span>

image_suffix <span class="token operator">=</span> <span class="token string">&#39;4kdongman/&#39;</span>
home_url <span class="token operator">=</span> <span class="token string">&quot;https://pic.netbian.com/&quot;</span>


<span class="token keyword">def</span> <span class="token function">get_img</span><span class="token punctuation">(</span>html_url<span class="token operator">=</span>home_url<span class="token operator">+</span>image_suffix<span class="token punctuation">,</span> image_url<span class="token operator">=</span>home_url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    str_html <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>html_url<span class="token punctuation">)</span>
    soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>str_html<span class="token punctuation">.</span>text<span class="token punctuation">,</span> <span class="token string">&#39;lxml&#39;</span><span class="token punctuation">)</span>
    img_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 需要获取标签</span>
        _str <span class="token operator">=</span> soup<span class="token punctuation">.</span>select<span class="token punctuation">(</span><span class="token string">&#39;#main &gt; div.slist &gt; ul &gt; li:nth-child(&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;) &gt; a &gt; img&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>_str<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token comment">#print(_str)  # 打印路径</span>
            <span class="token comment"># _list.append(_str)</span>
            img <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>_str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            start <span class="token operator">=</span> img<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span>
            end <span class="token operator">=</span> img<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&quot;.jpg&quot;</span><span class="token punctuation">)</span>
            img_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>image_url <span class="token operator">+</span> img<span class="token punctuation">[</span>start <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">:</span>end <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> img_list


<span class="token comment"># 获取图片地址分页</span>
<span class="token keyword">def</span> <span class="token function">get_page</span><span class="token punctuation">(</span>index<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> url_suffix<span class="token operator">=</span>image_suffix<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> index <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> get_img<span class="token punctuation">(</span>home_url <span class="token operator">+</span> url_suffix<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> get_img<span class="token punctuation">(</span>home_url <span class="token operator">+</span> url_suffix <span class="token operator">+</span> <span class="token string">&quot;index_&quot;</span> <span class="token operator">+</span> index<span class="token punctuation">.</span>__str__<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span>


v_list <span class="token operator">=</span> get_page<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>v_list<span class="token punctuation">)</span>


<span class="token keyword">for</span> i <span class="token keyword">in</span> get_page<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 下载时使用</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    r <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    f <span class="token operator">=</span> BytesIO<span class="token punctuation">(</span>r<span class="token punctuation">.</span>content<span class="token punctuation">)</span>
    img <span class="token operator">=</span> Image<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span>
    name <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>uuid<span class="token punctuation">.</span>uuid4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.png&quot;</span>
    img<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">r&#39;E:\\img\\\\&#39;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>  <span class="token comment"># 文件夹必须存在</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标签获取" tabindex="-1"><a class="header-anchor" href="#标签获取" aria-hidden="true">#</a> 标签获取</h3><p><img src="`+o+`" alt=""></p><h2 id="jwt使用" tabindex="-1"><a class="header-anchor" href="#jwt使用" aria-hidden="true">#</a> Jwt使用</h2><ul><li>pip install PyJWT</li><li>编码 jwt.encode({&#39;some&#39;: &#39;payload&#39;}, &#39;secret&#39;, algorithm=&#39;HS256&#39;) #必须键值对</li><li>解码 jwt.decode(encoded, &#39;secret&#39;, algorithms=[&#39;HS256&#39;])</li></ul><h2 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h2><ul><li>安装 pip install pygame</li></ul><h3 id="图片加载-1" tabindex="-1"><a class="header-anchor" href="#图片加载-1" aria-hidden="true">#</a> 图片加载</h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pygame
pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>
win <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 画布窗口的大小</span>
<span class="token comment"># 当前目录下的</span>
space <span class="token operator">=</span> pygame<span class="token punctuation">.</span>image<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token string">&quot;a.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>convert_alpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 拉伸图片</span>
    <span class="token comment"># space = pygame.transform.scale(space,(600,600))</span>
    <span class="token comment"># 循环事件</span>
    <span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 窗口x事件</span>
        <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> pygame<span class="token punctuation">.</span>QUIT<span class="token punctuation">:</span>
            exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">158</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 渲染底色</span>
    win<span class="token punctuation">.</span>blit<span class="token punctuation">(</span>space<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 加载图片</span>
    pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 刷新画布</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上下左右移动事件-1" tabindex="-1"><a class="header-anchor" href="#上下左右移动事件-1" aria-hidden="true">#</a> 上下左右移动事件</h3><ul><li>@date 2020/4/14 12:58</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# 移动速度
speed = 10
while True:
    # 设置游戏每秒运行速度 帧率
    pygame.time.Clock().tick_busy_loop(60)
    # 循环窗口事件
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # 获取所有键盘状态
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址
    if keys[pygame.K_UP]:   y-=speed # 上
    if keys[pygame.K_DOWN]:  y+=speed # 下
    if keys[pygame.K_RIGHT]:   x+=speed # 左
    if keys[pygame.K_LEFT]: x-=speed # 右
    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # 底色
    pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="碰撞处理-1" tabindex="-1"><a class="header-anchor" href="#碰撞处理-1" aria-hidden="true">#</a> 碰撞处理</h3><p>-@date 2020/4/14</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
import pygame
pygame.init()
width = 600
heigth = 600
win = pygame.display.set_mode((width,heigth))
x,y = 300,300
# 移动速度
speed = 20
space = pygame.image.load(&quot;b.jpg&quot;).convert_alpha()
space = pygame.transform.scale(space,(speed,speed))
i,j = 0,0
while True:
    # 设置游戏每秒运行速度 帧率
    pygame.time.Clock().tick_busy_loop(60)
    
    # x,y = pygame.mouse.get_pos()
    # 循环窗口事件
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit(0)
    # 获取所有键盘状态
    keys = pygame.key.get_pressed()
    # https://www.pygame.org/docs/ref/key.html#pygame.key.get_pressed 对应key地址
    if keys[pygame.K_UP]:   y-=speed # 上
    if keys[pygame.K_DOWN]:  y+=speed # 下
    if keys[pygame.K_RIGHT]:   x+=speed # 左
    if keys[pygame.K_LEFT]: x-=speed # 右
    # 限制移动距离   右合下说明 由于方块的绘画是从 xy坐标开始的 即xy坐标的右边和下边进行绘画,  坐标&gt;长或宽-速度 则  坐标 = 长或宽 - 速度
    if x &lt; 0:x=0
    if x &gt; width-speed:x=width-speed
    if y &lt;= 0:y=0
    if y &gt; heigth-speed:y=heigth-speed
    win.fill((64,158,255)) # 底色
    win.blit(space,(x,y))
    win.blit(space,(i,j))
    if i == x and j == y :
        print(&quot;碰撞&quot;)
    print(&quot;没有&quot;)

    # pygame.draw.rect(win, (255, 0, 0), (x, y, speed, speed)) # 创建苗点 参数依次是  窗口对象,颜色元组,坐标宽度元组
    pygame.display.update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function h(f,_){const a=p("ExternalLinkIcon");return l(),c("div",null,[u,n("ul",null,[n("li",null,[s("贪吃蛇："),n("a",r,[s("https://blog.csdn.net/qq_37794658/article/details/105546981"),e(a)])]),n("li",null,[s("移动弹球："),n("a",m,[s("https://blog.csdn.net/qq_37794658/article/details/105456363"),e(a)])])]),v,n("ul",null,[k,n("li",null,[s("视频库："),n("a",b,[s("https://github.com/soimort/you-get"),e(a)])]),n("li",null,[s("协程库："),n("a",g,[s("https://github.com/gevent/gevent"),e(a)])])]),y])}const w=t(d,[["render",h],["__file","python.html.vue"]]);export{w as default};

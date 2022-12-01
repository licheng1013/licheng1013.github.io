import{_ as t,o as l,c as p,b as n,e,a,d as i,r as d}from"./app.5dca1198.js";const c={},r=i('<h1 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍😎</h2><ul><li>2018</li><li>入门语言，学了又弃，弃而又学</li><li>下载：[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li></ul><h2 id="pip镜像设置" tabindex="-1"><a class="header-anchor" href="#pip镜像设置" aria-hidden="true">#</a> pip镜像设置✋</h2><ul><li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li></ul><h2 id="game" tabindex="-1"><a class="header-anchor" href="#game" aria-hidden="true">#</a> Game🎁</h2>',6),o={href:"https://blog.csdn.net/qq_37794658/article/details/105546981",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_37794658/article/details/105456363",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"开源库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开源库","aria-hidden":"true"},"#"),e(" 开源库🚩")],-1),v=n("li",null,"一些好用的开源库",-1),b={href:"https://github.com/soimort/you-get",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/gevent/gevent",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="pygame" tabindex="-1"><a class="header-anchor" href="#pygame" aria-hidden="true">#</a> Pygame🍇</h2><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍🌟</h3><ul><li>安装 pip install pygame</li></ul><h3 id="图片加载" tabindex="-1"><a class="header-anchor" href="#图片加载" aria-hidden="true">#</a> 图片加载⭐</h3><ul><li>@date 2020/4/14 10:22</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pygame
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function g(k,_){const s=d("ExternalLinkIcon");return l(),p("div",null,[r,n("ul",null,[n("li",null,[e("贪吃蛇："),n("a",o,[e("https://blog.csdn.net/qq_37794658/article/details/105546981"),a(s)])]),n("li",null,[e("移动弹球："),n("a",u,[e("https://blog.csdn.net/qq_37794658/article/details/105456363"),a(s)])])]),m,n("ul",null,[v,n("li",null,[e("视频库："),n("a",b,[e("https://github.com/soimort/you-get"),a(s)])]),n("li",null,[e("协程库："),n("a",h,[e("https://github.com/gevent/gevent"),a(s)])])]),y])}const x=t(c,[["render",g],["__file","python.html.vue"]]);export{x as default};

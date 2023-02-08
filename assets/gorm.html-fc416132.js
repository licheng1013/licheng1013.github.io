import{_ as r}from"./1-405629e8.js";import{_ as c,Q as n,S as o,Z as t,a2 as i,$ as e,a1 as a,H as s}from"./framework-f65d2d9f.js";const h="/plugins/gorm/gorm-video.gif",m="/plugins/gorm/sql.gif",p="/plugins/gorm/gorm-api.gif",b="/plugins/gorm/gorm-gin.gif",k="/plugins/gorm/2.png",g="/plugins/gorm/temp1.png",u="/plugins/gorm/temp2.png",_="/zfb.jpg",x={},f=t("h1",{id:"gorm",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#gorm","aria-hidden":"true"},"#"),i(" Gorm")],-1),v={class:"hint-container info"},y=t("p",{class:"hint-container-title"},"重要",-1),$=t("li",null,"对于使用问题，您还可以加群询问。",-1),G=t("strong",null,"289132257",-1),q={href:"https://jq.qq.com/?_wv=1027&k=MLHAbqMY",target:"_blank",rel:"noopener noreferrer"},w=a('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍🐱</h2><div class="hint-container warning"><p class="hint-container-title">描述</p><ul><li>2022/8</li><li>基于Gorm 和 Gin 制作的代码生成插件</li><li>如果您对使用文档有任何建议，非常乐意接受您的反馈。</li></ul></div><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签⚡</h3><iframe width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/20411"></iframe><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例</strong></h3>',5),A=t("li",null,[t("strong",null,"以后最新示例都将在此仓库下构建")],-1),B={href:"https://gitee.com/licheng1013/gorm-example",target:"_blank",rel:"noopener noreferrer"},j=t("li",null,[t("img",{src:h,alt:""})],-1),X=t("h3",{id:"视频教学",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#视频教学","aria-hidden":"true"},"#"),i(" 视频教学🐶")],-1),M=a('<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能🐔</h2><ul class="task-list-container"><li><p>已经勾选的是已完成，未勾选的是准备开发的。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 支持对gorm框架的联动数据库表进行实体生成</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 支持对gorm+gin框架的联动数据库进行接口与实体生成</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 支持生成json tag 和 form tag</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 支持根据字段或者注释自动映射到gorm框架中的联动属性，自动创建和修改时间</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 支持根据字段描述来联动乐观锁</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 支持Gin框架路由导航</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 支持自定义模板配置</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 支持结构体转创建表sql功能(2023.1.7及以上)</label></p></li><li><p><s>[x] 支持Gin接口调试集成</s></p></li></ul><h2 id="结构体转创建表" tabindex="-1"><a class="header-anchor" href="#结构体转创建表" aria-hidden="true">#</a> 结构体转创建表</h2><div class="hint-container warning"><p class="hint-container-title">示例</p><ul><li>下图演示</li></ul></div><ul><li><img src="'+m+'" alt=""></li></ul><h2 id="gin接口调试" tabindex="-1"><a class="header-anchor" href="#gin接口调试" aria-hidden="true">#</a> <s>Gin接口调试:👊</s></h2>',6),N={class:"hint-container warning"},V=t("p",{class:"hint-container-title"},"重要",-1),E={href:"https://plugins.jetbrains.com/plugin/20953-requesttool",target:"_blank",rel:"noopener noreferrer"},L=a('<div class="hint-container tip"><p class="hint-container-title">Gin接口调试支持</p><ul><li><s>什么你还在为来回切换软件调试接口烦恼吗？</s></li><li><s>请看下面的演示。</s></li></ul></div><ul><li><img src="'+p+'" alt=""></li></ul><h2 id="gin路由导航" tabindex="-1"><a class="header-anchor" href="#gin路由导航" aria-hidden="true">#</a> Gin路由导航👊</h2><div class="hint-container tip"><p class="hint-container-title">Gin框架路由导航支持</p><ul><li>什么你还在为找接口代码位置烦恼吗？</li><li>请使用下面的操作。</li><li>ctrl + alt + / 可以打开Gin的路由搜索窗口</li></ul></div><ul><li><img src="'+b+'" alt=""></li></ul><h2 id="gorm模板功能" tabindex="-1"><a class="header-anchor" href="#gorm模板功能" aria-hidden="true">#</a> Gorm模板功能👊</h2><div class="hint-container tip"><p class="hint-container-title">模板注意事项</p><ul><li><strong>使用模板时不能修改模板的文件名！</strong></li><li>每个文件模板都支持变量提示！</li><li>每个文件模板变量并没有全支持！</li></ul></div><div class="hint-container warning"><p class="hint-container-title">警告</p><ul><li><strong>默认模板生成的位置在项目的 ./.idea/gorm/ 下面.</strong></li><li><strong>当然你如果在根目录下面建立一个gorm目录那么模板生成就会在gorm目录下</strong></li><li><img src="'+k+'" alt=""></li></ul></div><ul><li>如何生成模板 -&gt; 请参考以下示例:</li><li>分别在两个窗口设定了<strong>生成自定义模板</strong>按钮</li><li><img src="'+g+'" alt="" width="500" height="300"> <img src="'+u+'" alt="" width="500" height="300"></li></ul><h3 id="easy模板变量" tabindex="-1"><a class="header-anchor" href="#easy模板变量" aria-hidden="true">#</a> Easy模板变量🌟</h3><ul><li><strong>同一个变量名在不同文件有不同的作用</strong></li></ul><table><thead><tr><th>变量名</th><th>所属文件(*所有文件)</th><th>作用</th></tr></thead><tbody><tr><td>${model}</td><td>*</td><td>导入的包</td></tr><tr><td>${name}</td><td>model</td><td>数据库表名(AaaXxx格式)</td></tr><tr><td>${field}</td><td>model</td><td>数据库字段列表</td></tr><tr><td>${name}</td><td>api</td><td>api结构体名称(AaaXxxApi)</td></tr><tr><td>${entity}</td><td>api</td><td>导入的实体路径类型</td></tr><tr><td>${path}</td><td>api</td><td>请求路径(user/xxx格式)</td></tr><tr><td>${id}</td><td>api</td><td>主键字段</td></tr></tbody></table><h3 id="mvc模板变量" tabindex="-1"><a class="header-anchor" href="#mvc模板变量" aria-hidden="true">#</a> Mvc模板变量😆</h3><ul><li><strong>同一个变量名在不同文件有不同的作用</strong></li></ul><table><thead><tr><th>变量名</th><th>所属文件(*所有文件)</th><th>作用</th></tr></thead><tbody><tr><td>${model}</td><td>*</td><td>导入的包</td></tr><tr><td>${name}</td><td>model</td><td>数据库表名(AaaXxx格式)</td></tr><tr><td>${field}</td><td>model</td><td>数据库字段列表</td></tr><tr><td>${name}</td><td>api</td><td>api结构体名称(AaaXxxApi格式)</td></tr><tr><td>${entity}</td><td>api</td><td>model包的路径类型</td></tr><tr><td>${path}</td><td>api</td><td>请求路径(user/xxx格式)</td></tr><tr><td>${id}</td><td>api</td><td>主键字段</td></tr><tr><td>${servicePath}</td><td>api</td><td>service业务类的路径</td></tr><tr><td>${name}</td><td>service</td><td>service内部类名(aaaXxx格式)</td></tr><tr><td>${serviceName}</td><td>service</td><td>service外部变量(AaaXxx格式)</td></tr><tr><td>${entity}</td><td>service</td><td>model实体类型</td></tr></tbody></table><h3 id="测试的平台" tabindex="-1"><a class="header-anchor" href="#测试的平台" aria-hidden="true">#</a> 测试的平台🐈</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> Win11</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> Linux</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> MacOs</label></li></ul><h3 id="测试的数据库" tabindex="-1"><a class="header-anchor" href="#测试的数据库" aria-hidden="true">#</a> 测试的数据库🌰</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> Mysql</label></li></ul><h3 id="生成代码示例" tabindex="-1"><a class="header-anchor" href="#生成代码示例" aria-hidden="true">#</a> 生成代码示例🎁</h3><ul><li>数据库表结构</li></ul><p><img src="'+r+'" alt=""></p>',22),z=t("li",null,[t("strong",null,"具体业务代码")],-1),H={href:"https://gitee.com/licheng1013/gorm-example",target:"_blank",rel:"noopener noreferrer"},I=a('<h2 id="赞助" tabindex="-1"><a class="header-anchor" href="#赞助" aria-hidden="true">#</a> 赞助🐭</h2><p><img src="'+_+'" alt="/zfb.jpg" width="200" height="300"></p><h2 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾" aria-hidden="true">#</a> 结尾🐒</h2><ul><li>个人博客：https://licheng1013.github.io</li><li>插件说明：https://licheng1013.github.io/plugins/jorm.html</li><li>功能建议：请在评论区留言！</li></ul>',4);function P(R,S){const l=s("ExternalLinkIcon"),d=s("BiliBili");return n(),o("div",null,[f,t("div",v,[y,t("ul",null,[$,t("li",null,[i("🐧群: "),G,i(" 加群链接: "),t("a",q,[i("交流群"),e(l)])])])]),w,t("ul",null,[A,t("li",null,[t("a",B,[i("https://gitee.com/licheng1013/gorm-example"),e(l)])]),j]),X,e(d,{bvid:"BV1AP4y1R7mc"}),M,t("div",N,[V,t("ul",null,[t("li",null,[i("此功能由 "),t("a",E,[i("RequestTool"),e(l)]),i(" 插件提供")])])]),L,t("ul",null,[z,t("li",null,[i("参考此项目: "),t("a",H,[i("https://gitee.com/licheng1013/gorm-example"),e(l)])])]),I])}const O=c(x,[["render",P],["__file","gorm.html.vue"]]);export{O as default};

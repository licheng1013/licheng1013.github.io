import{_ as r}from"./1.5ca9ebf6.js";import{_ as c,o,c as h,b as t,e,a as i,d as l,r as s}from"./app.9dbbe522.js";const n="/plugins/gorm/gorm-video.gif",m="/plugins/gorm/gorm-gin.gif",b="/plugins/gorm/temp1.png",p="/plugins/gorm/temp2.png",k="/zfb.jpg",u={},g=t("h1",{id:"gorm",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#gorm","aria-hidden":"true"},"#"),e(" Gorm")],-1),x=t("h2",{id:"介绍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),e(" 介绍🐱")],-1),_=t("li",null,"2022/8",-1),f=t("li",null,"基于Gorm 和 Gin 制作的代码生成插件",-1),y=t("strong",null,"错误或建议可以访问此链接提交问题",-1),v={href:"https://gitee.com/licheng1013/gorm-example/issues",target:"_blank",rel:"noopener noreferrer"},$={href:"https://jq.qq.com/?_wv=1027&k=MLHAbqMY",target:"_blank",rel:"noopener noreferrer"},A=l('<h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签⚡</h3><iframe width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/20411"></iframe><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> <strong>示例</strong></h3>',3),B=t("li",null,[t("strong",null,"以后最新示例都将在此仓库下构建")],-1),G={href:"https://gitee.com/licheng1013/gorm-example",target:"_blank",rel:"noopener noreferrer"},j=t("li",null,[t("img",{src:n,alt:""})],-1),X=t("h3",{id:"视频教学",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#视频教学","aria-hidden":"true"},"#"),e(" 视频教学🐶")],-1),q=l('<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能🐔</h2><ul class="task-list-container"><li><p>已经勾选的是已完成，未勾选的是准备开发的。</p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 支持对gorm框架的联动数据库表进行实体生成</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 支持对gorm+gin框架的联动数据库进行接口与实体生成</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 支持生成json tag 和 form tag</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 支持根据字段或者注释自动映射到gorm框架中的联动属性，自动创建和修改时间</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 支持根据字段描述来联动乐观锁</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 支持Gin框架路由导航</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 支持自定义模板配置</label></p></li></ul><h2 id="gin路由导航" tabindex="-1"><a class="header-anchor" href="#gin路由导航" aria-hidden="true">#</a> Gin路由导航👊</h2><div class="custom-container tip"><p class="custom-container-title">Gin框架路由导航支持</p><ul><li>什么你还在为找接口代码位置烦恼吗？</li><li>请使用下面的操作。</li><li>ctrl + alt + / 可以打开Gin的路由搜索窗口</li></ul></div><ul><li><img src="'+m+'" alt=""></li></ul><h2 id="模板功能" tabindex="-1"><a class="header-anchor" href="#模板功能" aria-hidden="true">#</a> 模板功能👊</h2><div class="custom-container tip"><p class="custom-container-title">模板注意事项</p><ul><li><strong>使用模板时不能修改模板的文件名！</strong></li><li>每个文件模板都支持变量提示！</li><li>每个文件模板变量并没有全支持！</li></ul></div><ul><li>如何生成模板 -&gt; 请参考以下示例:</li><li>分别在两个窗口设定了<strong>生成自定义模板</strong>按钮</li><li><img src="'+b+'" alt="" width="500" height="300"> <img src="'+p+'" alt="" width="500" height="300"></li></ul><h3 id="easy模板变量" tabindex="-1"><a class="header-anchor" href="#easy模板变量" aria-hidden="true">#</a> Easy模板变量🌟</h3><ul><li><strong>同一个变量名在不同文件有不同的作用</strong></li></ul><table><thead><tr><th>变量名</th><th>所属文件(*所有文件)</th><th>作用</th></tr></thead><tbody><tr><td>${model}</td><td>*</td><td>导入的包</td></tr><tr><td>${name}</td><td>model</td><td>数据库表名(AaaXxx格式)</td></tr><tr><td>${field}</td><td>model</td><td>数据库字段列表</td></tr><tr><td>${name}</td><td>api</td><td>api结构体名称(AaaXxxApi)</td></tr><tr><td>${entity}</td><td>api</td><td>导入的实体路径类型</td></tr><tr><td>${path}</td><td>api</td><td>请求路径(user/xxx格式)</td></tr><tr><td>${id}</td><td>api</td><td>主键字段</td></tr></tbody></table><h3 id="mvc模板变量" tabindex="-1"><a class="header-anchor" href="#mvc模板变量" aria-hidden="true">#</a> Mvc模板变量😆</h3><ul><li><strong>同一个变量名在不同文件有不同的作用</strong></li></ul><table><thead><tr><th>变量名</th><th>所属文件(*所有文件)</th><th>作用</th></tr></thead><tbody><tr><td>${model}</td><td>*</td><td>导入的包</td></tr><tr><td>${name}</td><td>model</td><td>数据库表名(AaaXxx格式)</td></tr><tr><td>${field}</td><td>model</td><td>数据库字段列表</td></tr><tr><td>${name}</td><td>api</td><td>api结构体名称(AaaXxxApi格式)</td></tr><tr><td>${entity}</td><td>api</td><td>model包的路径类型</td></tr><tr><td>${path}</td><td>api</td><td>请求路径(user/xxx格式)</td></tr><tr><td>${id}</td><td>api</td><td>主键字段</td></tr><tr><td>${servicePath}</td><td>api</td><td>service业务类的路径</td></tr><tr><td>${name}</td><td>service</td><td>service内部类名(aaaXxx格式)</td></tr><tr><td>${serviceName}</td><td>service</td><td>service外部变量(AaaXxx格式)</td></tr><tr><td>${entity}</td><td>service</td><td>model实体类型</td></tr></tbody></table><h3 id="测试的平台" tabindex="-1"><a class="header-anchor" href="#测试的平台" aria-hidden="true">#</a> 测试的平台🐈</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> Win11</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> Linux</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> MacOs</label></li></ul><h3 id="测试的数据库" tabindex="-1"><a class="header-anchor" href="#测试的数据库" aria-hidden="true">#</a> 测试的数据库🌰</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> Mysql</label></li></ul><h3 id="生成代码示例" tabindex="-1"><a class="header-anchor" href="#生成代码示例" aria-hidden="true">#</a> 生成代码示例🎁</h3><ul><li>数据库表结构</li></ul><p><img src="'+r+'" alt=""></p>',21),w=t("li",null,[t("strong",null,"具体业务代码")],-1),M={href:"https://gitee.com/licheng1013/gorm-example",target:"_blank",rel:"noopener noreferrer"},N=l('<h2 id="赞助" tabindex="-1"><a class="header-anchor" href="#赞助" aria-hidden="true">#</a> 赞助🐭</h2><p><img src="'+k+'" alt="/zfb.jpg" width="200" height="300"></p><h2 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾" aria-hidden="true">#</a> 结尾🐒</h2><ul><li>个人博客：https://licheng1013.github.io</li><li>插件说明：https://licheng1013.github.io/plugins/jorm.html</li><li>功能建议：请在评论区留言！</li></ul>',4);function V(E,L){const a=s("ExternalLinkIcon"),d=s("BiliBili");return o(),h("div",null,[g,x,t("ul",null,[_,f,t("li",null,[y,e(": "),t("a",v,[e("issues"),i(a)])]),t("li",null,[e("🐧群: 289132257 加群链接: "),t("a",$,[e("Gorm交流群"),i(a)])])]),A,t("ul",null,[B,t("li",null,[t("a",G,[e("https://gitee.com/licheng1013/gorm-example"),i(a)])]),j]),X,i(d,{bvid:"BV1AP4y1R7mc"}),q,t("ul",null,[w,t("li",null,[e("参考此项目: "),t("a",M,[e("https://gitee.com/licheng1013/gorm-example"),i(a)])])]),N])}const P=c(u,[["render",V],["__file","gorm.html.vue"]]);export{P as default};
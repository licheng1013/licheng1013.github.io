import{_ as e,o as d,c as l,b as t,a as r,w as h,d as i,r as n,e as c}from"./app.2c7b6749.js";const s="/images/git/img.png",o="/images/git/img_1.png",u="/images/git/img_2.png",g="/images/git/img_3.png",m={},_=i('<h1 id="git使用" tabindex="-1"><a class="header-anchor" href="#git使用" aria-hidden="true">#</a> Git使用</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>2018</li><li>学习git的使用</li></ul><h2 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h2>',4),p=i('<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>git add .</td><td>添加当前目录</td></tr><tr><td>git commit -t &quot;msg&quot;</td><td>提交和加入信息</td></tr><tr><td>git remote add {name} {url}</td><td>添加分支</td></tr><tr><td>git push {name}</td><td>推送分支</td></tr><tr><td>git checkout -- *</td><td>撤销至上次提交后的所有修改</td></tr></tbody></table><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><h3 id="新建分支" tabindex="-1"><a class="header-anchor" href="#新建分支" aria-hidden="true">#</a> 新建分支</h3><ul><li>idea内</li></ul><p><img src="'+s+'" alt="新建分支图片"> <img src="'+o+'" alt="新建分支图片"></p><ul><li>命令行</li><li>git branch dev 创建分支</li><li>git checkout dev 切换分支</li><li>git checkout -b dev 创建并切换分支</li></ul><h3 id="选择其他分支合并到当前分支" tabindex="-1"><a class="header-anchor" href="#选择其他分支合并到当前分支" aria-hidden="true">#</a> 选择其他分支合并到当前分支</h3><ul><li>idea内</li></ul><p><img src="'+u+'" alt="新建分支图片"></p><ul><li>当前分支指向了其他分支的一个最新提交记录</li><li>场景：只需要获取的最新进度即可</li></ul><h3 id="使用其他分支当作基础分支合并到当前分支上" tabindex="-1"><a class="header-anchor" href="#使用其他分支当作基础分支合并到当前分支上" aria-hidden="true">#</a> 使用其他分支当作基础分支合并到当前分支上</h3><ul><li>idea内</li></ul><p><img src="'+g+'" alt="新建分支图片"></p><ul><li>当前分支使用了其他分支作为基础分支进行合并。</li><li>场景：需要基于主分支进行扩展的场景</li><li>例如：需要基于主分支开发不同商家的功能，A商家，和B商家的功能放在一起无法使用。只能通过主分支进行开发和升级。</li></ul><h3 id="清除提交历史在创建新分支" tabindex="-1"><a class="header-anchor" href="#清除提交历史在创建新分支" aria-hidden="true">#</a> 清除提交历史在创建新分支</h3><ul><li>idea内无法操作</li><li>git checkout --orphan master2</li><li>场景由于要把之前嵌入别人的插件的项目抽离出来，构成一个基本分支但有了抽离的提交记录。</li><li>就会导致覆盖过去也会把插件也删掉，所以需要创建一个新的无提交历史的分支</li></ul><h3 id="清理已经提交过的目录" tabindex="-1"><a class="header-anchor" href="#清理已经提交过的目录" aria-hidden="true">#</a> 清理已经提交过的目录</h3><ul><li>命令</li><li>git rm -r --cached .idea</li></ul>',19);function f(b,x){const a=n("RouterLink");return d(),l("div",null,[_,t("ul",null,[t("li",null,[r(a,{to:"/util/small-util.html"},{default:h(()=>[c("下载地址")]),_:1})])]),p])}const v=e(m,[["render",f],["__file","git.html.vue"]]);export{v as default};

import{_ as d,o as i,c as a,f as u,a as h,w as c,d as p,r as m,b as l,t as o,F as _,g as v,e as n,h as k,v as f,i as g}from"./app.2c7b6749.js";const b={},y=p('<h1 id="socket聊天室" tabindex="-1"><a class="header-anchor" href="#socket聊天室" aria-hidden="true">#</a> Socket聊天室</h1><h2 id="在线聊天" tabindex="-1"><a class="header-anchor" href="#在线聊天" aria-hidden="true">#</a> 在线聊天</h2><ul><li>o 完成 x 未完成</li><li>2022/6/10</li><li>基于SpringBoot开发的WebSocket技术(o)</li><li>开发中-&gt;待部署服务器(o)</li><li>待完成: 增加聊天房间(x)</li><li>待完成: 增加用户昵称(x)</li></ul><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ul><li>回车完不会清除文字(修复)</li><li>输入的文字无法滑动(修复)</li></ul><h2 id="聊天室" tabindex="-1"><a class="header-anchor" href="#聊天室" aria-hidden="true">#</a> 聊天室</h2>',6),x=l("p",null,null,-1),S={class:"box-div"},V={key:0,class:"div-right"},E={key:1};function N(e,s){const r=m("SocketDiv");return i(),a("div",null,[y,u("suppress ALL "),h(r,null,{default:c(()=>[l("div",null,"在线人数: "+o(e.size),1),x,l("div",S,[(i(!0),a(_,null,v(e.msglist,t=>(i(),a("div",null,[e.userId==t.userId?(i(),a("div",V,o(t.msg),1)):(i(),a("div",E,o(t.msg),1))]))),256))]),n(" 输入："),k(l("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>e.msg=t),onKeyup:s[1]||(s[1]=g((...t)=>e.upEnter&&e.upEnter(...t),["enter"]))},null,544),[[f,e.msg]]),n(),l("button",{onClick:s[2]||(s[2]=(...t)=>e.upEnter&&e.upEnter(...t))},"发送")]),_:1})])}const B=d(b,[["render",N],["__file","socket.html.vue"]]);export{B as default};

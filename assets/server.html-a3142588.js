import{_ as e,Q as a,S as i,a1 as l}from"./framework-f983c147.js";const r={},t=l('<h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1><ul><li>2022/6/22</li></ul><h2 id="通信协议" tabindex="-1"><a class="header-anchor" href="#通信协议" aria-hidden="true">#</a> 通信协议🐔</h2><ul><li>基于 Socket 来实现</li><li>Socket是最原始的一种链接方式，负责从 a 链接到 b</li><li>此层面需要自己去定义数据的开头和结尾并且设置断开时间</li></ul><h3 id="rpc" tabindex="-1"><a class="header-anchor" href="#rpc" aria-hidden="true">#</a> RPC🍅</h3><ul><li>远程调用</li><li>内部的实现可以自由定义数据的传输接受方式</li><li>性能好，但数据的传输格式的自己定义</li></ul><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP🍒</h3><ul><li>由一组定义好的协议进行数据的传输</li><li>但报文太多影响效率</li></ul>',8),h=[t];function c(d,n){return a(),i("div",null,h)}const o=e(r,[["render",c],["__file","server.html.vue"]]);export{o as default};
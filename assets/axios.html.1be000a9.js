import{_ as l,o as d,c as r,a as e,e as s,b as a,d as i,r as o}from"./app.9438fc5a.js";const t={},u=i('<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><ul><li>2022/7/12</li></ul><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍💞</h2><ul><li>2019</li></ul><h2 id="vue3插件玩法" tabindex="-1"><a class="header-anchor" href="#vue3插件玩法" aria-hidden="true">#</a> Vue3插件玩法🍒</h2>',5),v=e("li",null,"npm install --save axios vue-axios",-1),c={href:"http://www.axios-js.com/zh-cn/docs/vue-axios.html",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"使用",-1),b=i(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>import Vue from &#39;vue&#39;
import axios from &#39;axios&#39;
import VueAxios from &#39;vue-axios&#39;



// axios 配置
axios.defaults.baseURL = &quot;http://localhost:8000/&quot;
axios.defaults.headers.common[&#39;Authorization&#39;] = &quot;YourAuthorization&quot;;
axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded&#39;;
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
Vue.use(VueAxios, axios)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue组件</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>this.axios.get(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})

this.axios.post(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm基本用法" tabindex="-1"><a class="header-anchor" href="#npm基本用法" aria-hidden="true">#</a> <s>Npm基本用法</s>💔</h2>`,4),h=e("li",null,"介绍: Vue项目请使用上面配置，否则使用Npm用法",-1),p={href:"http://www.axios-js.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"npm install axios",-1),g=i(`<h3 id="http配置" tabindex="-1"><a class="header-anchor" href="#http配置" aria-hidden="true">#</a> <s>Http配置</s>🌟</h3><ul><li>Http.js</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>import axios from &#39;axios&#39;;
//请求超时5秒
axios.defaults.timeout = 5000;
//如果你要用到session验证码功能，让请求携带cookie，可以加上以下一行
axios.defaults.withCredentials = true
axios.defaults.baseURL =&#39;http://192.168.43.80:8081/&#39;; //请求base url

export function get(url, params={}, headers={}){
    return new Promise((resolve, reject) =&gt; {
        axios.get(url,{
            params: params,
            headers: headers
        })
            .then(response =&gt; {
                resolve(response.data);
            })
            .catch(err =&gt; {
                reject(err)
            })
    })
}
export function post(url, params={}, headers={}){
    return new Promise((resolve, reject) =&gt; {
        axios.post(url,{},{
            params:params,
            headers:headers
        })
            .then(response =&gt; {
                resolve(response.data);
            })
            .catch(err =&gt; {
                reject(err)
            })
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api配置" tabindex="-1"><a class="header-anchor" href="#api配置" aria-hidden="true">#</a> <s>Api配置</s>🍎</h3><ul><li>api.js</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>//建议使用  //params为json对象,底层会自动解析参数-优先使用
import {get,post} from &#39;../utils/http.js&#39;
export const getUserList =   (params) =&gt; {
    return get(&#39;user/list&#39;,
        params
    )
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>getUserList().then((res)=&gt;{
        console.log(res)
        this.tableData = res.data.records;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(f,w){const n=o("ExternalLinkIcon");return d(),r("div",null,[u,e("ul",null,[v,e("li",null,[e("a",c,[s("http://www.axios-js.com/zh-cn/docs/vue-axios.html"),a(n)])]),m]),b,e("ul",null,[h,e("li",null,[e("a",p,[s("http://www.axios-js.com/zh-cn/"),a(n)])]),x]),g])}const j=l(t,[["render",_],["__file","axios.html.vue"]]);export{j as default};

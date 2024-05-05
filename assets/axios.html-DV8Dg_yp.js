import{_ as l,r as t,o as r,c as d,a as e,e as s,b as a,d as i}from"./app-Bmz9YWq3.js";const o={},c=i('<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>Axios</span></a></h1><ul><li>2022/7/12</li></ul><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍💞</span></a></h2><ul><li>2019</li></ul><h2 id="vue3插件玩法" tabindex="-1"><a class="header-anchor" href="#vue3插件玩法"><span>Vue3插件玩法🍒</span></a></h2>',5),u=e("li",null,"npm install --save axios vue-axios",-1),m={href:"http://www.axios-js.com/zh-cn/docs/vue-axios.html",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"使用",-1),p=i(`<div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>import Vue from &#39;vue&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue组件</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>this.axios.get(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})

this.axios.post(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm基本用法" tabindex="-1"><a class="header-anchor" href="#npm基本用法"><span><s>Npm基本用法</s>💔</span></a></h2>`,4),h=e("li",null,"介绍: Vue项目请使用上面配置，否则使用Npm用法",-1),b={href:"http://www.axios-js.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"npm install axios",-1),g=i(`<h3 id="http配置" tabindex="-1"><a class="header-anchor" href="#http配置"><span><s>Http配置</s>🌟</span></a></h3><ul><li>Http.js</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>import axios from &#39;axios&#39;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api配置" tabindex="-1"><a class="header-anchor" href="#api配置"><span><s>Api配置</s>🍎</span></a></h3><ul><li>api.js</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>//建议使用  //params为json对象,底层会自动解析参数-优先使用
import {get,post} from &#39;../utils/http.js&#39;
export const getUserList =   (params) =&gt; {
    return get(&#39;user/list&#39;,
        params
    )
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>getUserList().then((res)=&gt;{
        console.log(res)
        this.tableData = res.data.records;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function w(f,_){const n=t("ExternalLinkIcon");return r(),d("div",null,[c,e("ul",null,[u,e("li",null,[e("a",m,[s("http://www.axios-js.com/zh-cn/docs/vue-axios.html"),a(n)])]),v]),p,e("ul",null,[h,e("li",null,[e("a",b,[s("http://www.axios-js.com/zh-cn/"),a(n)])]),x]),g])}const V=l(o,[["render",w],["__file","axios.html.vue"]]),j=JSON.parse('{"path":"/study/web/axios.html","title":"Axios","lang":"zh-CN","frontmatter":{"description":"Axios 2022/7/12 介绍💞 2019 Vue3插件玩法🍒 npm install --save axios vue-axios http://www.axios-js.com/zh-cn/docs/vue-axios.html 使用 Vue组件 💔 介绍: Vue项目请使用上面配置，否则使用Npm用法 http://www.axios...","head":[["meta",{"property":"og:url","content":"https://licheng1013.github.io/study/web/axios.html"}],["meta",{"property":"og:site_name","content":"LiCheng Blog"}],["meta",{"property":"og:title","content":"Axios"}],["meta",{"property":"og:description","content":"Axios 2022/7/12 介绍💞 2019 Vue3插件玩法🍒 npm install --save axios vue-axios http://www.axios-js.com/zh-cn/docs/vue-axios.html 使用 Vue组件 💔 介绍: Vue项目请使用上面配置，否则使用Npm用法 http://www.axios..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-16T03:07:15.000Z"}],["meta",{"property":"article:author","content":"LiCheng"}],["meta",{"property":"article:modified_time","content":"2022-12-16T03:07:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Axios\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-16T03:07:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LiCheng\\",\\"url\\":\\"https://gitee.com/licheng1013\\"}]}"]]},"headers":[{"level":2,"title":"介绍💞","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"Vue3插件玩法🍒","slug":"vue3插件玩法","link":"#vue3插件玩法","children":[]},{"level":2,"title":"Npm基本用法💔","slug":"npm基本用法","link":"#npm基本用法","children":[{"level":3,"title":"Http配置🌟","slug":"http配置","link":"#http配置","children":[]},{"level":3,"title":"Api配置🍎","slug":"api配置","link":"#api配置","children":[]}]}],"git":{"createdTime":1657691221000,"updatedTime":1671160035000,"contributors":[{"name":"licheng1013","email":"2501093733@qq.com","commits":1}]},"readingTime":{"minutes":0.98,"words":294},"filePathRelative":"study/web/axios.md","localizedDate":"2022年7月13日","excerpt":"\\n<ul>\\n<li>2022/7/12</li>\\n</ul>\\n<h2>介绍💞</h2>\\n<ul>\\n<li>2019</li>\\n</ul>\\n<h2>Vue3插件玩法🍒</h2>\\n<ul>\\n<li>npm install --save axios vue-axios</li>\\n<li><a href=\\"http://www.axios-js.com/zh-cn/docs/vue-axios.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">http://www.axios-js.com/zh-cn/docs/vue-axios.html</a></li>\\n<li>使用</li>\\n</ul>","autoDesc":true}');export{V as comp,j as data};

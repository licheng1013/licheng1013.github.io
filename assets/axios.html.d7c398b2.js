import{_ as l,o as r,c as d,d as e,e as s,a,b as i,r as o}from"./app.51ed7218.js";const t={},u=i('<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><ul><li>2022/7/12</li></ul><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>2019</li></ul><h2 id="vue3\u63D2\u4EF6\u73A9\u6CD5" tabindex="-1"><a class="header-anchor" href="#vue3\u63D2\u4EF6\u73A9\u6CD5" aria-hidden="true">#</a> Vue3\u63D2\u4EF6\u73A9\u6CD5</h2>',5),v=e("li",null,"npm install --save axios vue-axios",-1),c={href:"http://www.axios-js.com/zh-cn/docs/vue-axios.html",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"\u4F7F\u7528",-1),b=i(`<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>import Vue from &#39;vue&#39;
import axios from &#39;axios&#39;
import VueAxios from &#39;vue-axios&#39;



// axios \u914D\u7F6E
axios.defaults.baseURL = &quot;http://localhost:8000/&quot;
axios.defaults.headers.common[&#39;Authorization&#39;] = &quot;YourAuthorization&quot;;
axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded&#39;;
// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
Vue.use(VueAxios, axios)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Vue\u7EC4\u4EF6</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>this.axios.get(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})

this.axios.post(&quot;/banner/list&quot;).then((response) =&gt; {
    console.log(response.data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#npm\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> <s>Npm\u57FA\u672C\u7528\u6CD5</s></h2>`,4),h=e("li",null,"\u4ECB\u7ECD: Vue\u9879\u76EE\u8BF7\u4F7F\u7528\u4E0A\u9762\u914D\u7F6E\uFF0C\u5426\u5219\u4F7F\u7528Npm\u7528\u6CD5",-1),p={href:"http://www.axios-js.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,"npm install axios",-1),g=i(`<h3 id="http\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#http\u914D\u7F6E" aria-hidden="true">#</a> <s>Http\u914D\u7F6E</s></h3><ul><li>Http.js</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>import axios from &#39;axios&#39;;
//\u8BF7\u6C42\u8D85\u65F65\u79D2
axios.defaults.timeout = 5000;
//\u5982\u679C\u4F60\u8981\u7528\u5230session\u9A8C\u8BC1\u7801\u529F\u80FD\uFF0C\u8BA9\u8BF7\u6C42\u643A\u5E26cookie\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u4EE5\u4E0B\u4E00\u884C
axios.defaults.withCredentials = true
axios.defaults.baseURL =&#39;http://192.168.43.80:8081/&#39;; //\u8BF7\u6C42base url

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#api\u914D\u7F6E" aria-hidden="true">#</a> <s>Api\u914D\u7F6E</s></h3><ul><li>api.js</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>//\u5EFA\u8BAE\u4F7F\u7528  //params\u4E3Ajson\u5BF9\u8C61,\u5E95\u5C42\u4F1A\u81EA\u52A8\u89E3\u6790\u53C2\u6570-\u4F18\u5148\u4F7F\u7528
import {get,post} from &#39;../utils/http.js&#39;
export const getUserList =   (params) =&gt; {
    return get(&#39;user/list&#39;,
        params
    )
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>getUserList().then((res)=&gt;{
        console.log(res)
        this.tableData = res.data.records;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(f,w){const n=o("ExternalLinkIcon");return r(),d("div",null,[u,e("ul",null,[v,e("li",null,[e("a",c,[s("http://www.axios-js.com/zh-cn/docs/vue-axios.html"),a(n)])]),m]),b,e("ul",null,[h,e("li",null,[e("a",p,[s("http://www.axios-js.com/zh-cn/"),a(n)])]),x]),g])}const j=l(t,[["render",_],["__file","axios.html.vue"]]);export{j as default};

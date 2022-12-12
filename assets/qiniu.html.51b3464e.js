import{_ as n,o as s,c as a,d as e}from"./app.ebf1e1a1.js";const t={},i=e(`<h1 id="七牛云" tabindex="-1"><a class="header-anchor" href="#七牛云" aria-hidden="true">#</a> 七牛云</h1><h2 id="七牛云存储对接" tabindex="-1"><a class="header-anchor" href="#七牛云存储对接" aria-hidden="true">#</a> 七牛云存储对接</h2><ul><li>go</li><li>2022/11/26</li></ul><h2 id="后端go具体代码" tabindex="-1"><a class="header-anchor" href="#后端go具体代码" aria-hidden="true">#</a> 后端go具体代码</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/qiniu/go-sdk/v7/auth/qbox&quot;</span>
	<span class="token string">&quot;github.com/qiniu/go-sdk/v7/storage&quot;</span>
<span class="token punctuation">)</span>


<span class="token comment">//七牛云密钥 - 密钥查看: https://portal.qiniu.com/user/key</span>
<span class="token keyword">const</span> accessKey <span class="token operator">=</span> <span class="token string">&quot;your accessKey&quot;</span>  
<span class="token keyword">const</span> secretKey <span class="token operator">=</span> <span class="token string">&quot;your secretKey&quot;</span>
<span class="token comment">//你的资源资源桶名称 - 桶查看: https://portal.qiniu.com/kodo/bucket</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span><span class="token string">&quot;my-video-test&quot;</span>
<span class="token comment">//获取token</span>
<span class="token keyword">func</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	putPolicy <span class="token operator">:=</span> storage<span class="token punctuation">.</span>PutPolicy<span class="token punctuation">{</span>
		Scope<span class="token punctuation">:</span> bucket<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	mac <span class="token operator">:=</span> qbox<span class="token punctuation">.</span><span class="token function">NewMac</span><span class="token punctuation">(</span>accessKey<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span>
	upToken <span class="token operator">:=</span> putPolicy<span class="token punctuation">.</span><span class="token function">UploadToken</span><span class="token punctuation">(</span>mac<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>upToken<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//删除文件</span>
<span class="token keyword">func</span> <span class="token function">deleteFile</span><span class="token punctuation">(</span>fileName <span class="token builtin">string</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	mac <span class="token operator">:=</span> qbox<span class="token punctuation">.</span><span class="token function">NewMac</span><span class="token punctuation">(</span>accessKey<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span>
	cfg <span class="token operator">:=</span> storage<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		<span class="token comment">// 是否使用https域名进行资源管理</span>
		UseHTTPS<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	bucketManager <span class="token operator">:=</span> storage<span class="token punctuation">.</span><span class="token function">NewBucketManager</span><span class="token punctuation">(</span>mac<span class="token punctuation">,</span> <span class="token operator">&amp;</span>cfg<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> bucketManager<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>bucket<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端vue" tabindex="-1"><a class="header-anchor" href="#前端vue" aria-hidden="true">#</a> 前端Vue</h2><ul><li>vue2</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;template&gt;
    &lt;el-upload
        :limit=&quot;1&quot;
        ref=&quot;upload&quot;
        action=&quot;https://upload-z2.qiniup.com&quot;
        :data=&quot;{token:fileAction.token}&quot;
        :on-success=&quot;onUploadOk&quot;
        :auto-upload=&quot;false&quot;&gt;
        &lt;el-button slot=&quot;trigger&quot; size=&quot;small&quot; type=&quot;primary&quot;&gt;选取文件&lt;/el-button&gt;
        &lt;el-button style=&quot;margin-left: 10px;&quot; size=&quot;small&quot; type=&quot;success&quot; @click=&quot;submitUpload&quot;&gt;上传到服务器&lt;/el-button&gt;
    &lt;/el-upload&gt;
 &lt;/template&gt;
 &lt;script&gt;
export default {
  data() {
    return {
      fileAction:{
         token : &quot;eV3kvzxi6iRIBq7U-7olByD0bQIZfonL6SqBXB2Q:9mf6GZdDd0aXH1v8EWhvNlFfhLk=:eyJzY29wZSI6Im15LXZpZGVvLXRlc3QiLCJkZWFkbGluZSI6MTY2OTQzNDU3MX0=&quot;
      }
    }
  },
  methods: {
    onUploadOk(r,f,fs){
      console.log(&quot;上传结果: &quot;+r.key)
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
  },
}
&lt;/script&gt;
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[i];function l(c,u){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","qiniu.html.vue"]]);export{d as default};

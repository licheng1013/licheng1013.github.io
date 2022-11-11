import{_ as t,o as p,c as e,d as n,e as s,a as o,b as c,r as l}from"./app.6c70c16b.js";const i={},u=n("h1",{id:"mqtt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),s(" Mqtt")],-1),k=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),r=n("li",null,"2022/6/6",-1),d={href:"https://www.emqx.com/zh",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"\u57FA\u4E8E\uFF1A\u5B8C\u6574 MQTT 3.x \u548C 5.0 \u89C4\u8303",-1),v=c(`<h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><ul><li>\u79FB\u52A8\u7AEF \u4E0E \u670D\u52A1\u7AEF\u7684\u6D88\u606F\u89E3\u8026</li></ul><h2 id="\u793A\u4F8B-springboot" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-springboot" aria-hidden="true">#</a> \u793A\u4F8B SpringBoot</h2><ul><li>\u63A5\u5165\u4F9D\u8D56</li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.eclipse.paho<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>org.eclipse.paho.client.mqttv3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u914D\u7F6E\u7C7B</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>mqtt</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">MqttClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">MqttConnectOptions</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">MqttException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span>persist<span class="token punctuation">.</span></span><span class="token class-name">MemoryPersistence</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/6/7
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Config</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MqttClient</span> <span class="token function">mqttClient</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Autowired</span>  <span class="token class-name">OnMessageCallback</span> onMessageCallback<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MqttException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> topic <span class="token operator">=</span> <span class="token string">&quot;/fb1973f8-5590-4336-9384-54f07ad79c57/status/base&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> topic1 <span class="token operator">=</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> topic2 <span class="token operator">=</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> topic3 <span class="token operator">=</span> <span class="token string">&quot;test3&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> broker <span class="token operator">=</span> <span class="token string">&quot;tcp://120.76.138.18:1883&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;fix_panzhihua_developer&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;developer&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> clientId <span class="token operator">=</span> <span class="token string">&quot;testClientId&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">MqttClient</span> client <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoryPersistence</span> persistence <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoryPersistence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttClient</span><span class="token punctuation">(</span>broker<span class="token punctuation">,</span> clientId<span class="token punctuation">,</span> persistence<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MqttConnectOptions</span> connOpts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MqttConnectOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// MQTT \u8FDE\u63A5\u9009\u9879</span>
        connOpts<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        connOpts<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connOpts<span class="token punctuation">.</span><span class="token function">setCleanSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u7559\u4F1A\u8BDD</span>
        client<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span>onMessageCallback<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u56DE\u8C03</span>
        client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>connOpts<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5EFA\u7ACB\u8FDE\u63A5</span>
        <span class="token comment">// \u53EF\u4EE5\u8BA2\u9605\u591A\u4E2A\u5E76\u4E14\u901A\u8FC7 OnMessageCallback \u83B7\u53D6\u53D1\u9001\u56DE\u6765\u7684\u6D88\u606F</span>
        client<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>topic<span class="token punctuation">,</span> topic1<span class="token punctuation">,</span> topic2<span class="token punctuation">,</span> topic3<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> client<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mqtt\u63A7\u5236\u5668</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>mqtt</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/6/7
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MqttController</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printTopic</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6D88\u606F\u56DE\u8C03</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>mqtt</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">IMqttDeliveryToken</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">MqttCallback</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>eclipse<span class="token punctuation">.</span>paho<span class="token punctuation">.</span>client<span class="token punctuation">.</span>mqttv3<span class="token punctuation">.</span></span><span class="token class-name">MqttMessage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OnMessageCallback</span> <span class="token keyword">implements</span> <span class="token class-name">MqttCallback</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MqttController</span> mqttController<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectionLost</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FDE\u63A5\u4E22\u5931\u540E\uFF0C\u4E00\u822C\u5728\u8FD9\u91CC\u9762\u8FDB\u884C\u91CD\u8FDE</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u65AD\u5F00\uFF0C\u53EF\u4EE5\u505A\u91CD\u8FDE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">messageArrived</span><span class="token punctuation">(</span><span class="token class-name">String</span> topic<span class="token punctuation">,</span> <span class="token class-name">MqttMessage</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        mqttController<span class="token punctuation">.</span><span class="token function">printTopic</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// subscribe\u540E\u5F97\u5230\u7684\u6D88\u606F\u4F1A\u6267\u884C\u5230\u8FD9\u91CC\u9762</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u6536\u6D88\u606F\u4E3B\u9898:&quot;</span> <span class="token operator">+</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u6536\u6D88\u606FQos:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">.</span><span class="token function">getQos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63A5\u6536\u6D88\u606F\u5185\u5BB9:&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getPayload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deliveryComplete</span><span class="token punctuation">(</span><span class="token class-name">IMqttDeliveryToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;deliveryComplete---------&quot;</span> <span class="token operator">+</span> token<span class="token punctuation">.</span><span class="token function">isComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(g,w){const a=l("ExternalLinkIcon");return p(),e("div",null,[u,k,n("ul",null,[r,n("li",null,[s("\u6D88\u606F\u961F\u5217 "),n("a",d,[s("https://www.emqx.com/zh"),o(a)])]),m]),v])}const q=t(i,[["render",b],["__file","mqtt.html.vue"]]);export{q as default};

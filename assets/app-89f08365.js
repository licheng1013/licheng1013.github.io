import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$2,k as isLinkHttp,l as removeLeadingSlash,m as inject,n as getCurrentInstance,p as camelize,q as capitalize,s as nextTick,t as isRef,u as unref,w as watch,v as getCurrentScope,x as onScopeDispose,y as shallowRef,z as watchEffect,A as onUnmounted,T as Transition,B as useRouter,C as onBeforeUnmount,R as RouterLink,D as resolveComponent,E as provide,F as useRoute,G as isLinkMailto,H as toRef,I as isLinkTel,J as isLinkExternal,K as ensureEndingSlash,L as isPlainObject,M as TransitionGroup,N as removeEndingSlash,O as useLink,P as toRefs,_ as _export_sfc,Q as openBlock,S as createElementBlock,U as createRouter,V as START_LOCATION_NORMALIZED,W as createSSRApp,X as createWebHistory,Y as RouterView}from"./framework-7d554712.js";const scriptRel="modulepreload",assetsURL=function($){return"/"+$},seen={},__vitePreload=function(E,F,j){if(!F||F.length===0)return E();const N=document.getElementsByTagName("link");return Promise.all(F.map(B=>{if(B=assetsURL(B),B in seen)return;seen[B]=!0;const Z=B.endsWith(".css"),Q=Z?'[rel="stylesheet"]':"";if(!!j)for(let le=N.length-1;le>=0;le--){const ie=N[le];if(ie.href===B&&(!Z||ie.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${B}"]${Q}`))return;const ae=document.createElement("link");if(ae.rel=Z?"stylesheet":scriptRel,Z||(ae.as="script",ae.crossOrigin=""),ae.href=B,document.head.appendChild(ae),Z)return new Promise((le,ie)=>{ae.addEventListener("load",le),ae.addEventListener("error",()=>ie(new Error(`Unable to preload CSS for ${B}`)))})})).then(()=>E())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-e162e041.js"),[]).then(({data:$})=>$),"v-145ac574":()=>__vitePreload(()=>import("./index.html-e4317145.js"),[]).then(({data:$})=>$),"v-a39c4cfa":()=>__vitePreload(()=>import("./body.html-c557c923.js"),[]).then(({data:$})=>$),"v-883c5c18":()=>__vitePreload(()=>import("./desc.html-40f291bd.js"),[]).then(({data:$})=>$),"v-d8862ffc":()=>__vitePreload(()=>import("./random.html-e5e0143e.js"),[]).then(({data:$})=>$),"v-0439749c":()=>__vitePreload(()=>import("./video.html-61976e85.js"),[]).then(({data:$})=>$),"v-2d0a870d":()=>__vitePreload(()=>import("./index.html-c8a8f0dc.js"),[]).then(({data:$})=>$),"v-67d16688":()=>__vitePreload(()=>import("./index.html-5b5101e8.js"),[]).then(({data:$})=>$),"v-4a5f1fe4":()=>__vitePreload(()=>import("./gorm.html-91da4661.js"),[]).then(({data:$})=>$),"v-0167aec8":()=>__vitePreload(()=>import("./io-game.html-800886c1.js"),[]).then(({data:$})=>$),"v-33afe9f2":()=>__vitePreload(()=>import("./java-orm.html-b1388734.js"),[]).then(({data:$})=>$),"v-4bd5befb":()=>__vitePreload(()=>import("./request-tool.html-81458fc0.js"),[]).then(({data:$})=>$),"v-9376cbd8":()=>__vitePreload(()=>import("./rocket-cat.html-48167248.js"),[]).then(({data:$})=>$),"v-eadc129a":()=>__vitePreload(()=>import("./rs-orm.html-fa865f3f.js"),[]).then(({data:$})=>$),"v-eeac3bce":()=>__vitePreload(()=>import("./vue-admin.html-b8d1c157.js"),[]).then(({data:$})=>$),"v-d7188082":()=>__vitePreload(()=>import("./index.html-f79d47c5.js"),[]).then(({data:$})=>$),"v-156a1114":()=>__vitePreload(()=>import("./index.html-cb40a951.js"),[]).then(({data:$})=>$),"v-34c0cc3a":()=>__vitePreload(()=>import("./common.html-f85c095a.js"),[]).then(({data:$})=>$),"v-6b01bef8":()=>__vitePreload(()=>import("./dev.html-1a1ddbd7.js"),[]).then(({data:$})=>$),"v-4331a9ae":()=>__vitePreload(()=>import("./idea.html-50542a67.js"),[]).then(({data:$})=>$),"v-e4904468":()=>__vitePreload(()=>import("./index.html-37281b6a.js"),[]).then(({data:$})=>$),"v-c0e604d0":()=>__vitePreload(()=>import("./day1.html-42dec464.js"),[]).then(({data:$})=>$),"v-5245b9ca":()=>__vitePreload(()=>import("./day10.html-b0fc5017.js"),[]).then(({data:$})=>$),"v-53fa9269":()=>__vitePreload(()=>import("./day11.html-4eed8ea9.js"),[]).then(({data:$})=>$),"v-55af6b08":()=>__vitePreload(()=>import("./day12.html-b5fe6ba2.js"),[]).then(({data:$})=>$),"v-576443a7":()=>__vitePreload(()=>import("./day13.html-81521a1c.js"),[]).then(({data:$})=>$),"v-59191c46":()=>__vitePreload(()=>import("./day14.html-0fa74351.js"),[]).then(({data:$})=>$),"v-5acdf4e5":()=>__vitePreload(()=>import("./day15.html-3238b469.js"),[]).then(({data:$})=>$),"v-5c82cd84":()=>__vitePreload(()=>import("./day16.html-5c9c2e53.js"),[]).then(({data:$})=>$),"v-5e37a623":()=>__vitePreload(()=>import("./day17.html-653bdee8.js"),[]).then(({data:$})=>$),"v-5fec7ec2":()=>__vitePreload(()=>import("./day18.html-58ba3de9.js"),[]).then(({data:$})=>$),"v-61a15761":()=>__vitePreload(()=>import("./day19.html-abafe376.js"),[]).then(({data:$})=>$),"v-bd7c5392":()=>__vitePreload(()=>import("./day2.html-989b5b84.js"),[]).then(({data:$})=>$),"v-ba12a254":()=>__vitePreload(()=>import("./day3.html-c7124f9a.js"),[]).then(({data:$})=>$),"v-b6a8f116":()=>__vitePreload(()=>import("./day4.html-666a8b69.js"),[]).then(({data:$})=>$),"v-b33f3fd8":()=>__vitePreload(()=>import("./day5.html-7fa71ca3.js"),[]).then(({data:$})=>$),"v-afd58e9a":()=>__vitePreload(()=>import("./day6.html-4901cc13.js"),[]).then(({data:$})=>$),"v-ac6bdd5c":()=>__vitePreload(()=>import("./day7.html-41ac20b0.js"),[]).then(({data:$})=>$),"v-a9022c1e":()=>__vitePreload(()=>import("./day8.html-d16e45a7.js"),[]).then(({data:$})=>$),"v-a5987ae0":()=>__vitePreload(()=>import("./day9.html-b26a5bc5.js"),[]).then(({data:$})=>$),"v-0a92777c":()=>__vitePreload(()=>import("./study.html-a6ad208a.js"),[]).then(({data:$})=>$),"v-9b94b2c8":()=>__vitePreload(()=>import("./index.html-65454a75.js"),[]).then(({data:$})=>$),"v-72f1067a":()=>__vitePreload(()=>import("./gorm.html-68c67699.js"),[]).then(({data:$})=>$),"v-2fbe537d":()=>__vitePreload(()=>import("./jorm.html-46f090b6.js"),[]).then(({data:$})=>$),"v-987b21a6":()=>__vitePreload(()=>import("./vue-admin.html-d280bd90.js"),[]).then(({data:$})=>$),"v-74d2721e":()=>__vitePreload(()=>import("./index.html-c6205fd4.js"),[]).then(({data:$})=>$),"v-05aa60bc":()=>__vitePreload(()=>import("./cocos.html-28605f79.js"),[]).then(({data:$})=>$),"v-655dabc9":()=>__vitePreload(()=>import("./game.html-2550b815.js"),[]).then(({data:$})=>$),"v-40662ab6":()=>__vitePreload(()=>import("./godot.html-831056e5.js"),[]).then(({data:$})=>$),"v-20932f22":()=>__vitePreload(()=>import("./unity.html-2cc42f6b.js"),[]).then(({data:$})=>$),"v-ec4f77b0":()=>__vitePreload(()=>import("./index.html-e1e0b707.js"),[]).then(({data:$})=>$),"v-1296d022":()=>__vitePreload(()=>import("./design-mode.html-fa571b60.js"),[]).then(({data:$})=>$),"v-50eda543":()=>__vitePreload(()=>import("./difficult.html-455afdfd.js"),[]).then(({data:$})=>$),"v-73096696":()=>__vitePreload(()=>import("./gin.html-a555e677.js"),[]).then(({data:$})=>$),"v-470743c9":()=>__vitePreload(()=>import("./go.html-cbcc16d1.js"),[]).then(({data:$})=>$),"v-97ce3324":()=>__vitePreload(()=>import("./gorm.html-5164074d.js"),[]).then(({data:$})=>$),"v-39c90182":()=>__vitePreload(()=>import("./qiniu.html-6b3c50dd.js"),[]).then(({data:$})=>$),"v-0afe37c4":()=>__vitePreload(()=>import("./socket.html-49515917.js"),[]).then(({data:$})=>$),"v-a86ab80e":()=>__vitePreload(()=>import("./ssh.html-a7f60d10.js"),[]).then(({data:$})=>$),"v-08700fb4":()=>__vitePreload(()=>import("./try.html-157ff74f.js"),[]).then(({data:$})=>$),"v-0d202a22":()=>__vitePreload(()=>import("./util.html-9c1d90e8.js"),[]).then(({data:$})=>$),"v-e2d863ca":()=>__vitePreload(()=>import("./wails.html-cfe99d81.js"),[]).then(({data:$})=>$),"v-74fcd9ee":()=>__vitePreload(()=>import("./index.html-9b218669.js"),[]).then(({data:$})=>$),"v-f4a23b22":()=>__vitePreload(()=>import("./data-struct.html-6a51e0b4.js"),[]).then(({data:$})=>$),"v-ce60a5b4":()=>__vitePreload(()=>import("./hutool.html-10260bdc.js"),[]).then(({data:$})=>$),"v-eb998da4":()=>__vitePreload(()=>import("./io-game.html-6efbd010.js"),[]).then(({data:$})=>$),"v-e295e46e":()=>__vitePreload(()=>import("./java.html-4df046e6.js"),[]).then(({data:$})=>$),"v-6261669c":()=>__vitePreload(()=>import("./maven.html-916067b4.js"),[]).then(({data:$})=>$),"v-ff9673f2":()=>__vitePreload(()=>import("./mqtt.html-330f3be1.js"),[]).then(({data:$})=>$),"v-e4f84858":()=>__vitePreload(()=>import("./mybatis.html-904a406d.js"),[]).then(({data:$})=>$),"v-53d99f9f":()=>__vitePreload(()=>import("./protostuff.html-653010e1.js"),[]).then(({data:$})=>$),"v-0ea8a1d4":()=>__vitePreload(()=>import("./redisson.html-e478355e.js"),[]).then(({data:$})=>$),"v-37e7ddac":()=>__vitePreload(()=>import("./rocket-mq.html-322ec44f.js"),[]).then(({data:$})=>$),"v-6485064d":()=>__vitePreload(()=>import("./spring-boot-demo.html-b0ff86df.js"),[]).then(({data:$})=>$),"v-9c987956":()=>__vitePreload(()=>import("./spring-boot.html-8e8ad9ab.js"),[]).then(({data:$})=>$),"v-71361d27":()=>__vitePreload(()=>import("./spring-cloud-alibaba.html-bf7927d8.js"),[]).then(({data:$})=>$),"v-4a160b56":()=>__vitePreload(()=>import("./spring-cloud.html-18b92bc8.js"),[]).then(({data:$})=>$),"v-13b6c6a9":()=>__vitePreload(()=>import("./transaction.html-6040db91.js"),[]).then(({data:$})=>$),"v-2e75823a":()=>__vitePreload(()=>import("./index.html-1b6f1973.js"),[]).then(({data:$})=>$),"v-157e5c3f":()=>__vitePreload(()=>import("./docker.html-e3b1b3ea.js"),[]).then(({data:$})=>$),"v-eff126fe":()=>__vitePreload(()=>import("./git.html-ef24a344.js"),[]).then(({data:$})=>$),"v-855c2bc2":()=>__vitePreload(()=>import("./linux.html-2df15285.js"),[]).then(({data:$})=>$),"v-15351731":()=>__vitePreload(()=>import("./mysql.html-f80a2b62.js"),[]).then(({data:$})=>$),"v-03aa6f39":()=>__vitePreload(()=>import("./nginx.html-3ac416a6.js"),[]).then(({data:$})=>$),"v-6ab5d8fc":()=>__vitePreload(()=>import("./server.html-ef2171c6.js"),[]).then(({data:$})=>$),"v-3f92c263":()=>__vitePreload(()=>import("./shell.html-1219e7cb.js"),[]).then(({data:$})=>$),"v-9d9383da":()=>__vitePreload(()=>import("./index.html-dcfd75f7.js"),[]).then(({data:$})=>$),"v-03a09d9f":()=>__vitePreload(()=>import("./antlr.html-181313db.js"),[]).then(({data:$})=>$),"v-277b3408":()=>__vitePreload(()=>import("./english.html-ed891aa5.js"),[]).then(({data:$})=>$),"v-6b7873d0":()=>__vitePreload(()=>import("./flutter.html-26987e00.js"),[]).then(({data:$})=>$),"v-7829234e":()=>__vitePreload(()=>import("./jiazhao.html-cd9b04c5.js"),[]).then(({data:$})=>$),"v-566cfcec":()=>__vitePreload(()=>import("./python.html-2e44d0b3.js"),[]).then(({data:$})=>$),"v-42dddec2":()=>__vitePreload(()=>import("./rust.html-124438f7.js"),[]).then(({data:$})=>$),"v-9d9130cc":()=>__vitePreload(()=>import("./index.html-cf547fdd.js"),[]).then(({data:$})=>$),"v-5ff88586":()=>__vitePreload(()=>import("./axios.html-9539757a.js"),[]).then(({data:$})=>$),"v-0afa9360":()=>__vitePreload(()=>import("./css.html-35f80b51.js"),[]).then(({data:$})=>$),"v-0a822add":()=>__vitePreload(()=>import("./electron.html-8aeaf3ad.js"),[]).then(({data:$})=>$),"v-566689bd":()=>__vitePreload(()=>import("./node.html-a1cf25a2.js"),[]).then(({data:$})=>$),"v-50b2aeca":()=>__vitePreload(()=>import("./vite.html-e355678f.js"),[]).then(({data:$})=>$),"v-0221a8ad":()=>__vitePreload(()=>import("./vue.html-4757618c.js"),[]).then(({data:$})=>$),"v-3dc19728":()=>__vitePreload(()=>import("./chess.html-f54e3a1d.js"),[]).then(({data:$})=>$),"v-0d6a9cd2":()=>__vitePreload(()=>import("./design-mode.html-0c35ff45.js"),[]).then(({data:$})=>$),"v-1a97af14":()=>__vitePreload(()=>import("./proxy.html-24f084f0.js"),[]).then(({data:$})=>$),"v-3706649a":()=>__vitePreload(()=>import("./404.html-87f3534a.js"),[]).then(({data:$})=>$),"v-abc9f35a":()=>__vitePreload(()=>import("./index.html-bbf60ef6.js"),[]).then(({data:$})=>$),"v-60fb21ea":()=>__vitePreload(()=>import("./index.html-46625d6d.js"),[]).then(({data:$})=>$),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-dfbfbe16.js"),[]).then(({data:$})=>$),"v-744d024e":()=>__vitePreload(()=>import("./index.html-bf04d4f1.js"),[]).then(({data:$})=>$),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-0e302620.js"),[]).then(({data:$})=>$),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-71972926.js"),[]).then(({data:$})=>$),"v-01560935":()=>__vitePreload(()=>import("./index.html-bac91579.js"),[]).then(({data:$})=>$),"v-5decfa84":()=>__vitePreload(()=>import("./index.html-df85573d.js"),[]).then(({data:$})=>$),"v-075c6c62":()=>__vitePreload(()=>import("./index.html-60d76f17.js"),[]).then(({data:$})=>$),"v-506407f4":()=>__vitePreload(()=>import("./index.html-102cea2d.js"),[]).then(({data:$})=>$),"v-37a8c5a0":()=>__vitePreload(()=>import("./index.html-9ea3d771.js"),[]).then(({data:$})=>$),"v-0379cba1":()=>__vitePreload(()=>import("./index.html-59c39153.js"),[]).then(({data:$})=>$)},siteData$1=JSON.parse(`{"base":"/","lang":"en-US","title":"LiCheng Blog","description":"vuepress-theme-hope 的演示","head":[["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-Y1CRKZRBH8","async":true}],["script",{},"  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n\\n  gtag('config', 'G-Y1CRKZRBH8');"],["link",{"rel":"icon","href":"favicon.ico"}],["link",{"rel":"icon","href":"logo.png","sizes":"512x512"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"logo.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"logo.png"}],["meta",{"name":"msapplication-TileColor","content":"#46bd87"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"zh-CN"},"/en/":{"lang":"en-US"}}}`),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f4372200.js"),["assets/index.html-f4372200.js","assets/framework-7d554712.js"])),"v-145ac574":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7d72c3c1.js"),["assets/index.html-7d72c3c1.js","assets/framework-7d554712.js"])),"v-a39c4cfa":defineAsyncComponent(()=>__vitePreload(()=>import("./body.html-0f4b5796.js"),["assets/body.html-0f4b5796.js","assets/framework-7d554712.js"])),"v-883c5c18":defineAsyncComponent(()=>__vitePreload(()=>import("./desc.html-4a01a961.js"),["assets/desc.html-4a01a961.js","assets/framework-7d554712.js"])),"v-d8862ffc":defineAsyncComponent(()=>__vitePreload(()=>import("./random.html-156b67fa.js"),["assets/random.html-156b67fa.js","assets/framework-7d554712.js"])),"v-0439749c":defineAsyncComponent(()=>__vitePreload(()=>import("./video.html-dfabf2cb.js"),["assets/video.html-dfabf2cb.js","assets/framework-7d554712.js"])),"v-2d0a870d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5fc2725a.js"),["assets/index.html-5fc2725a.js","assets/framework-7d554712.js"])),"v-67d16688":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-32f90c07.js"),["assets/index.html-32f90c07.js","assets/framework-7d554712.js"])),"v-4a5f1fe4":defineAsyncComponent(()=>__vitePreload(()=>import("./gorm.html-b98f270d.js"),["assets/gorm.html-b98f270d.js","assets/1-e13e731e.js","assets/framework-7d554712.js"])),"v-0167aec8":defineAsyncComponent(()=>__vitePreload(()=>import("./io-game.html-b4425ab3.js"),["assets/io-game.html-b4425ab3.js","assets/framework-7d554712.js"])),"v-33afe9f2":defineAsyncComponent(()=>__vitePreload(()=>import("./java-orm.html-a4d222d0.js"),["assets/java-orm.html-a4d222d0.js","assets/img-c1a6ea05.js","assets/framework-7d554712.js"])),"v-4bd5befb":defineAsyncComponent(()=>__vitePreload(()=>import("./request-tool.html-7f36d7d7.js"),["assets/request-tool.html-7f36d7d7.js","assets/framework-7d554712.js"])),"v-9376cbd8":defineAsyncComponent(()=>__vitePreload(()=>import("./rocket-cat.html-07ab54af.js"),["assets/rocket-cat.html-07ab54af.js","assets/framework-7d554712.js"])),"v-eadc129a":defineAsyncComponent(()=>__vitePreload(()=>import("./rs-orm.html-d7169bce.js"),["assets/rs-orm.html-d7169bce.js","assets/framework-7d554712.js"])),"v-eeac3bce":defineAsyncComponent(()=>__vitePreload(()=>import("./vue-admin.html-cc526768.js"),["assets/vue-admin.html-cc526768.js","assets/framework-7d554712.js"])),"v-d7188082":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5379661e.js"),["assets/index.html-5379661e.js","assets/framework-7d554712.js"])),"v-156a1114":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7a332145.js"),["assets/index.html-7a332145.js","assets/framework-7d554712.js"])),"v-34c0cc3a":defineAsyncComponent(()=>__vitePreload(()=>import("./common.html-a01073af.js"),["assets/common.html-a01073af.js","assets/framework-7d554712.js"])),"v-6b01bef8":defineAsyncComponent(()=>__vitePreload(()=>import("./dev.html-4b9f9c53.js"),["assets/dev.html-4b9f9c53.js","assets/framework-7d554712.js"])),"v-4331a9ae":defineAsyncComponent(()=>__vitePreload(()=>import("./idea.html-710f22d2.js"),["assets/idea.html-710f22d2.js","assets/framework-7d554712.js"])),"v-e4904468":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a9ce3b58.js"),["assets/index.html-a9ce3b58.js","assets/framework-7d554712.js"])),"v-c0e604d0":defineAsyncComponent(()=>__vitePreload(()=>import("./day1.html-03088617.js"),["assets/day1.html-03088617.js","assets/framework-7d554712.js"])),"v-5245b9ca":defineAsyncComponent(()=>__vitePreload(()=>import("./day10.html-37ce5fa3.js"),["assets/day10.html-37ce5fa3.js","assets/framework-7d554712.js"])),"v-53fa9269":defineAsyncComponent(()=>__vitePreload(()=>import("./day11.html-1cd4289f.js"),["assets/day11.html-1cd4289f.js","assets/framework-7d554712.js"])),"v-55af6b08":defineAsyncComponent(()=>__vitePreload(()=>import("./day12.html-e5b36c5b.js"),["assets/day12.html-e5b36c5b.js","assets/framework-7d554712.js"])),"v-576443a7":defineAsyncComponent(()=>__vitePreload(()=>import("./day13.html-1c83c373.js"),["assets/day13.html-1c83c373.js","assets/framework-7d554712.js"])),"v-59191c46":defineAsyncComponent(()=>__vitePreload(()=>import("./day14.html-8aff2dcf.js"),["assets/day14.html-8aff2dcf.js","assets/framework-7d554712.js"])),"v-5acdf4e5":defineAsyncComponent(()=>__vitePreload(()=>import("./day15.html-f92fbf3b.js"),["assets/day15.html-f92fbf3b.js","assets/framework-7d554712.js"])),"v-5c82cd84":defineAsyncComponent(()=>__vitePreload(()=>import("./day16.html-5da7ee08.js"),["assets/day16.html-5da7ee08.js","assets/framework-7d554712.js"])),"v-5e37a623":defineAsyncComponent(()=>__vitePreload(()=>import("./day17.html-0a91662a.js"),["assets/day17.html-0a91662a.js","assets/framework-7d554712.js"])),"v-5fec7ec2":defineAsyncComponent(()=>__vitePreload(()=>import("./day18.html-5026bb7b.js"),["assets/day18.html-5026bb7b.js","assets/framework-7d554712.js"])),"v-61a15761":defineAsyncComponent(()=>__vitePreload(()=>import("./day19.html-1fa047c8.js"),["assets/day19.html-1fa047c8.js","assets/framework-7d554712.js"])),"v-bd7c5392":defineAsyncComponent(()=>__vitePreload(()=>import("./day2.html-c7fad436.js"),["assets/day2.html-c7fad436.js","assets/framework-7d554712.js"])),"v-ba12a254":defineAsyncComponent(()=>__vitePreload(()=>import("./day3.html-62c79c4b.js"),["assets/day3.html-62c79c4b.js","assets/framework-7d554712.js"])),"v-b6a8f116":defineAsyncComponent(()=>__vitePreload(()=>import("./day4.html-27e2a4e5.js"),["assets/day4.html-27e2a4e5.js","assets/framework-7d554712.js"])),"v-b33f3fd8":defineAsyncComponent(()=>__vitePreload(()=>import("./day5.html-18ded39e.js"),["assets/day5.html-18ded39e.js","assets/framework-7d554712.js"])),"v-afd58e9a":defineAsyncComponent(()=>__vitePreload(()=>import("./day6.html-b99c8514.js"),["assets/day6.html-b99c8514.js","assets/framework-7d554712.js"])),"v-ac6bdd5c":defineAsyncComponent(()=>__vitePreload(()=>import("./day7.html-7c9e1acb.js"),["assets/day7.html-7c9e1acb.js","assets/framework-7d554712.js"])),"v-a9022c1e":defineAsyncComponent(()=>__vitePreload(()=>import("./day8.html-21f91e2e.js"),["assets/day8.html-21f91e2e.js","assets/framework-7d554712.js"])),"v-a5987ae0":defineAsyncComponent(()=>__vitePreload(()=>import("./day9.html-e75e2b28.js"),["assets/day9.html-e75e2b28.js","assets/framework-7d554712.js"])),"v-0a92777c":defineAsyncComponent(()=>__vitePreload(()=>import("./study.html-19b69457.js"),["assets/study.html-19b69457.js","assets/framework-7d554712.js"])),"v-9b94b2c8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-61e9fcfe.js"),["assets/index.html-61e9fcfe.js","assets/framework-7d554712.js"])),"v-72f1067a":defineAsyncComponent(()=>__vitePreload(()=>import("./gorm.html-955d3e26.js"),["assets/gorm.html-955d3e26.js","assets/1-e13e731e.js","assets/framework-7d554712.js"])),"v-2fbe537d":defineAsyncComponent(()=>__vitePreload(()=>import("./jorm.html-51e93764.js"),["assets/jorm.html-51e93764.js","assets/img-c1a6ea05.js","assets/framework-7d554712.js"])),"v-987b21a6":defineAsyncComponent(()=>__vitePreload(()=>import("./vue-admin.html-99c1264f.js"),["assets/vue-admin.html-99c1264f.js","assets/framework-7d554712.js"])),"v-74d2721e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4144dadb.js"),["assets/index.html-4144dadb.js","assets/framework-7d554712.js"])),"v-05aa60bc":defineAsyncComponent(()=>__vitePreload(()=>import("./cocos.html-2a4944a3.js"),["assets/cocos.html-2a4944a3.js","assets/framework-7d554712.js"])),"v-655dabc9":defineAsyncComponent(()=>__vitePreload(()=>import("./game.html-8bcaceb6.js"),["assets/game.html-8bcaceb6.js","assets/framework-7d554712.js"])),"v-40662ab6":defineAsyncComponent(()=>__vitePreload(()=>import("./godot.html-a052108e.js"),["assets/godot.html-a052108e.js","assets/framework-7d554712.js"])),"v-20932f22":defineAsyncComponent(()=>__vitePreload(()=>import("./unity.html-74c3590e.js"),["assets/unity.html-74c3590e.js","assets/framework-7d554712.js"])),"v-ec4f77b0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-817b5f17.js"),["assets/index.html-817b5f17.js","assets/framework-7d554712.js"])),"v-1296d022":defineAsyncComponent(()=>__vitePreload(()=>import("./design-mode.html-2cdf3f48.js"),["assets/design-mode.html-2cdf3f48.js","assets/framework-7d554712.js"])),"v-50eda543":defineAsyncComponent(()=>__vitePreload(()=>import("./difficult.html-f24a2fb1.js"),["assets/difficult.html-f24a2fb1.js","assets/framework-7d554712.js"])),"v-73096696":defineAsyncComponent(()=>__vitePreload(()=>import("./gin.html-67a0b599.js"),["assets/gin.html-67a0b599.js","assets/framework-7d554712.js"])),"v-470743c9":defineAsyncComponent(()=>__vitePreload(()=>import("./go.html-b091101b.js"),["assets/go.html-b091101b.js","assets/framework-7d554712.js"])),"v-97ce3324":defineAsyncComponent(()=>__vitePreload(()=>import("./gorm.html-daee9246.js"),["assets/gorm.html-daee9246.js","assets/framework-7d554712.js"])),"v-39c90182":defineAsyncComponent(()=>__vitePreload(()=>import("./qiniu.html-97a62208.js"),["assets/qiniu.html-97a62208.js","assets/framework-7d554712.js"])),"v-0afe37c4":defineAsyncComponent(()=>__vitePreload(()=>import("./socket.html-04210bae.js"),["assets/socket.html-04210bae.js","assets/framework-7d554712.js"])),"v-a86ab80e":defineAsyncComponent(()=>__vitePreload(()=>import("./ssh.html-a5213836.js"),["assets/ssh.html-a5213836.js","assets/framework-7d554712.js"])),"v-08700fb4":defineAsyncComponent(()=>__vitePreload(()=>import("./try.html-dd6dba6e.js"),["assets/try.html-dd6dba6e.js","assets/framework-7d554712.js"])),"v-0d202a22":defineAsyncComponent(()=>__vitePreload(()=>import("./util.html-33d86097.js"),["assets/util.html-33d86097.js","assets/framework-7d554712.js"])),"v-e2d863ca":defineAsyncComponent(()=>__vitePreload(()=>import("./wails.html-54e4a569.js"),["assets/wails.html-54e4a569.js","assets/framework-7d554712.js"])),"v-74fcd9ee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ef1a376c.js"),["assets/index.html-ef1a376c.js","assets/framework-7d554712.js"])),"v-f4a23b22":defineAsyncComponent(()=>__vitePreload(()=>import("./data-struct.html-99ba398a.js"),["assets/data-struct.html-99ba398a.js","assets/framework-7d554712.js"])),"v-ce60a5b4":defineAsyncComponent(()=>__vitePreload(()=>import("./hutool.html-19d3576f.js"),["assets/hutool.html-19d3576f.js","assets/framework-7d554712.js"])),"v-eb998da4":defineAsyncComponent(()=>__vitePreload(()=>import("./io-game.html-5688fee8.js"),["assets/io-game.html-5688fee8.js","assets/framework-7d554712.js"])),"v-e295e46e":defineAsyncComponent(()=>__vitePreload(()=>import("./java.html-ea3dfaf9.js"),["assets/java.html-ea3dfaf9.js","assets/framework-7d554712.js"])),"v-6261669c":defineAsyncComponent(()=>__vitePreload(()=>import("./maven.html-f9fe36a5.js"),["assets/maven.html-f9fe36a5.js","assets/framework-7d554712.js"])),"v-ff9673f2":defineAsyncComponent(()=>__vitePreload(()=>import("./mqtt.html-aed8e6bc.js"),["assets/mqtt.html-aed8e6bc.js","assets/framework-7d554712.js"])),"v-e4f84858":defineAsyncComponent(()=>__vitePreload(()=>import("./mybatis.html-24a26a5a.js"),["assets/mybatis.html-24a26a5a.js","assets/framework-7d554712.js"])),"v-53d99f9f":defineAsyncComponent(()=>__vitePreload(()=>import("./protostuff.html-ad6c3c2d.js"),["assets/protostuff.html-ad6c3c2d.js","assets/framework-7d554712.js"])),"v-0ea8a1d4":defineAsyncComponent(()=>__vitePreload(()=>import("./redisson.html-9651d6cb.js"),["assets/redisson.html-9651d6cb.js","assets/framework-7d554712.js"])),"v-37e7ddac":defineAsyncComponent(()=>__vitePreload(()=>import("./rocket-mq.html-d7632b97.js"),["assets/rocket-mq.html-d7632b97.js","assets/framework-7d554712.js"])),"v-6485064d":defineAsyncComponent(()=>__vitePreload(()=>import("./spring-boot-demo.html-39102c5a.js"),["assets/spring-boot-demo.html-39102c5a.js","assets/framework-7d554712.js"])),"v-9c987956":defineAsyncComponent(()=>__vitePreload(()=>import("./spring-boot.html-184a3918.js"),["assets/spring-boot.html-184a3918.js","assets/framework-7d554712.js"])),"v-71361d27":defineAsyncComponent(()=>__vitePreload(()=>import("./spring-cloud-alibaba.html-7120a469.js"),["assets/spring-cloud-alibaba.html-7120a469.js","assets/framework-7d554712.js"])),"v-4a160b56":defineAsyncComponent(()=>__vitePreload(()=>import("./spring-cloud.html-3aed5bed.js"),["assets/spring-cloud.html-3aed5bed.js","assets/framework-7d554712.js"])),"v-13b6c6a9":defineAsyncComponent(()=>__vitePreload(()=>import("./transaction.html-d57502d9.js"),["assets/transaction.html-d57502d9.js","assets/framework-7d554712.js"])),"v-2e75823a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1d3db1a1.js"),["assets/index.html-1d3db1a1.js","assets/framework-7d554712.js"])),"v-157e5c3f":defineAsyncComponent(()=>__vitePreload(()=>import("./docker.html-ac9f4487.js"),["assets/docker.html-ac9f4487.js","assets/framework-7d554712.js"])),"v-eff126fe":defineAsyncComponent(()=>__vitePreload(()=>import("./git.html-3441eb79.js"),["assets/git.html-3441eb79.js","assets/framework-7d554712.js"])),"v-855c2bc2":defineAsyncComponent(()=>__vitePreload(()=>import("./linux.html-940d4bd2.js"),["assets/linux.html-940d4bd2.js","assets/framework-7d554712.js"])),"v-15351731":defineAsyncComponent(()=>__vitePreload(()=>import("./mysql.html-0a860efb.js"),["assets/mysql.html-0a860efb.js","assets/framework-7d554712.js"])),"v-03aa6f39":defineAsyncComponent(()=>__vitePreload(()=>import("./nginx.html-490e765e.js"),["assets/nginx.html-490e765e.js","assets/framework-7d554712.js"])),"v-6ab5d8fc":defineAsyncComponent(()=>__vitePreload(()=>import("./server.html-b3feb99e.js"),["assets/server.html-b3feb99e.js","assets/framework-7d554712.js"])),"v-3f92c263":defineAsyncComponent(()=>__vitePreload(()=>import("./shell.html-97c03dd8.js"),["assets/shell.html-97c03dd8.js","assets/framework-7d554712.js"])),"v-9d9383da":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-199454a3.js"),["assets/index.html-199454a3.js","assets/framework-7d554712.js"])),"v-03a09d9f":defineAsyncComponent(()=>__vitePreload(()=>import("./antlr.html-c7da08ca.js"),["assets/antlr.html-c7da08ca.js","assets/framework-7d554712.js"])),"v-277b3408":defineAsyncComponent(()=>__vitePreload(()=>import("./english.html-39145a38.js"),["assets/english.html-39145a38.js","assets/framework-7d554712.js"])),"v-6b7873d0":defineAsyncComponent(()=>__vitePreload(()=>import("./flutter.html-876b790e.js"),["assets/flutter.html-876b790e.js","assets/framework-7d554712.js"])),"v-7829234e":defineAsyncComponent(()=>__vitePreload(()=>import("./jiazhao.html-75db8d53.js"),["assets/jiazhao.html-75db8d53.js","assets/framework-7d554712.js"])),"v-566cfcec":defineAsyncComponent(()=>__vitePreload(()=>import("./python.html-56dd9299.js"),["assets/python.html-56dd9299.js","assets/framework-7d554712.js"])),"v-42dddec2":defineAsyncComponent(()=>__vitePreload(()=>import("./rust.html-7a9f6491.js"),["assets/rust.html-7a9f6491.js","assets/framework-7d554712.js"])),"v-9d9130cc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-98017c58.js"),["assets/index.html-98017c58.js","assets/framework-7d554712.js"])),"v-5ff88586":defineAsyncComponent(()=>__vitePreload(()=>import("./axios.html-b448a5e8.js"),["assets/axios.html-b448a5e8.js","assets/framework-7d554712.js"])),"v-0afa9360":defineAsyncComponent(()=>__vitePreload(()=>import("./css.html-7ef76b49.js"),["assets/css.html-7ef76b49.js","assets/framework-7d554712.js"])),"v-0a822add":defineAsyncComponent(()=>__vitePreload(()=>import("./electron.html-1dc55c6b.js"),["assets/electron.html-1dc55c6b.js","assets/framework-7d554712.js"])),"v-566689bd":defineAsyncComponent(()=>__vitePreload(()=>import("./node.html-6a1bbe73.js"),["assets/node.html-6a1bbe73.js","assets/framework-7d554712.js"])),"v-50b2aeca":defineAsyncComponent(()=>__vitePreload(()=>import("./vite.html-67012648.js"),["assets/vite.html-67012648.js","assets/framework-7d554712.js"])),"v-0221a8ad":defineAsyncComponent(()=>__vitePreload(()=>import("./vue.html-a79062d1.js"),["assets/vue.html-a79062d1.js","assets/framework-7d554712.js"])),"v-3dc19728":defineAsyncComponent(()=>__vitePreload(()=>import("./chess.html-7e0a276b.js"),["assets/chess.html-7e0a276b.js","assets/framework-7d554712.js"])),"v-0d6a9cd2":defineAsyncComponent(()=>__vitePreload(()=>import("./design-mode.html-6bd42aba.js"),["assets/design-mode.html-6bd42aba.js","assets/framework-7d554712.js"])),"v-1a97af14":defineAsyncComponent(()=>__vitePreload(()=>import("./proxy.html-e76485c4.js"),["assets/proxy.html-e76485c4.js","assets/framework-7d554712.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-e0b5b250.js"),["assets/404.html-e0b5b250.js","assets/framework-7d554712.js"])),"v-abc9f35a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0525afe3.js"),["assets/index.html-0525afe3.js","assets/framework-7d554712.js"])),"v-60fb21ea":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9931b00c.js"),["assets/index.html-9931b00c.js","assets/framework-7d554712.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4e778ae7.js"),["assets/index.html-4e778ae7.js","assets/framework-7d554712.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ce72a6e0.js"),["assets/index.html-ce72a6e0.js","assets/framework-7d554712.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-59b90e84.js"),["assets/index.html-59b90e84.js","assets/framework-7d554712.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b2378aba.js"),["assets/index.html-b2378aba.js","assets/framework-7d554712.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ef11485f.js"),["assets/index.html-ef11485f.js","assets/framework-7d554712.js"])),"v-5decfa84":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8b620a88.js"),["assets/index.html-8b620a88.js","assets/framework-7d554712.js"])),"v-075c6c62":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ef09f85c.js"),["assets/index.html-ef09f85c.js","assets/framework-7d554712.js"])),"v-506407f4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-46dc5a43.js"),["assets/index.html-46dc5a43.js","assets/framework-7d554712.js"])),"v-37a8c5a0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-300b9bd6.js"),["assets/index.html-300b9bd6.js","assets/framework-7d554712.js"])),"v-0379cba1":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f0d9fb0a.js"),["assets/index.html-f0d9fb0a.js","assets/framework-7d554712.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const $=inject(pageFrontmatterSymbol);if(!$)throw new Error("usePageFrontmatter() is called without provider.");return $},pageHeadSymbol=Symbol(""),usePageHead=()=>{const $=inject(pageHeadSymbol);if(!$)throw new Error("usePageHead() is called without provider.");return $},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const $=inject(pageHeadTitleSymbol);if(!$)throw new Error("usePageHeadTitle() is called without provider.");return $},pageLangSymbol=Symbol(""),usePageLang=()=>{const $=inject(pageLangSymbol);if(!$)throw new Error("usePageLang() is called without provider.");return $},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const $=inject(pageLayoutSymbol);if(!$)throw new Error("usePageLayout() is called without provider.");return $},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const $=inject(routeLocaleSymbol);if(!$)throw new Error("useRouteLocale() is called without provider.");return $},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const $=inject(siteLocaleDataSymbol);if(!$)throw new Error("useSiteLocaleData() is called without provider.");return $},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:$=>$.reduce((E,F)=>({...E,...F.layouts}),{}),resolvePageData:async $=>{const E=pagesData.value[$];return await(E==null?void 0:E())??pageDataEmpty},resolvePageFrontmatter:$=>$.frontmatter,resolvePageHead:($,E,F)=>{const j=isString$1(E.description)?E.description:F.description,N=[...isArray(E.head)?E.head:[],...F.head,["title",{},$],["meta",{name:"description",content:j}]];return dedupeHead(N)},resolvePageHeadTitle:($,E)=>[$.title,E.title].filter(F=>!!F).join(" | "),resolvePageLang:$=>$.lang||"en",resolvePageLayout:($,E)=>{let F;if($.path){const j=$.frontmatter.layout;isString$1(j)?F=j:F=LAYOUT_NAME_DEFAULT}else F=LAYOUT_NAME_NOT_FOUND;return E[F]},resolveRouteLocale:($,E)=>resolveLocalePath($,E),resolveSiteLocaleData:($,E)=>({...$,...$.locales[E]})}),ClientOnly=defineComponent({name:"ClientOnly",setup($,E){const F=ref(!1);return onMounted(()=>{F.value=!0}),()=>{var j,N;return F.value?(N=(j=E.slots).default)==null?void 0:N.call(j):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup($){const E=usePageData(),F=computed(()=>pagesComponents[$.pageKey||E.value.key]);return()=>F.value?h$2(F.value):h$2("div","404 Not Found")}}),defineClientConfig=($={})=>$,withBase=$=>isLinkHttp($)?$:`/${removeLeadingSlash($)}`;const hopeInject="",clientConfig0={};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function($,E){for(var F=new u16(31),j=0;j<31;++j)F[j]=E+=1<<$[j-1];for(var N=new u32(F[30]),j=1;j<30;++j)for(var B=F[j];B<F[j+1];++B)N[B]=B-F[j]<<5|j;return[F,N]},_a$1=freb(fleb,2),fl=_a$1[0],revfl=_a$1[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$5=0;i$5<32768;++i$5){var x$3=(i$5&43690)>>>1|(i$5&21845)<<1;x$3=(x$3&52428)>>>2|(x$3&13107)<<2,x$3=(x$3&61680)>>>4|(x$3&3855)<<4,rev[i$5]=((x$3&65280)>>>8|(x$3&255)<<8)>>>1}var hMap=function($,E,F){for(var j=$.length,N=0,B=new u16(E);N<j;++N)$[N]&&++B[$[N]-1];var Z=new u16(E);for(N=0;N<E;++N)Z[N]=Z[N-1]+B[N-1]<<1;var Q;if(F){Q=new u16(1<<E);var X=15-E;for(N=0;N<j;++N)if($[N])for(var ae=N<<4|$[N],le=E-$[N],ie=Z[$[N]-1]++<<le,se=ie|(1<<le)-1;ie<=se;++ie)Q[rev[ie]>>>X]=ae}else for(Q=new u16(j),N=0;N<j;++N)$[N]&&(Q[N]=rev[Z[$[N]-1]++]>>>15-$[N]);return Q},flt=new u8(288);for(var i$5=0;i$5<144;++i$5)flt[i$5]=8;for(var i$5=144;i$5<256;++i$5)flt[i$5]=9;for(var i$5=256;i$5<280;++i$5)flt[i$5]=7;for(var i$5=280;i$5<288;++i$5)flt[i$5]=8;var fdt=new u8(32);for(var i$5=0;i$5<32;++i$5)fdt[i$5]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function($){for(var E=$[0],F=1;F<$.length;++F)$[F]>E&&(E=$[F]);return E},bits=function($,E,F){var j=E/8|0;return($[j]|$[j+1]<<8)>>(E&7)&F},bits16=function($,E){var F=E/8|0;return($[F]|$[F+1]<<8|$[F+2]<<16)>>(E&7)},shft=function($){return($+7)/8|0},slc=function($,E,F){(E==null||E<0)&&(E=0),(F==null||F>$.length)&&(F=$.length);var j=new($.BYTES_PER_ELEMENT==2?u16:$.BYTES_PER_ELEMENT==4?u32:u8)(F-E);return j.set($.subarray(E,F)),j},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function($,E,F){var j=new Error(E||ec[$]);if(j.code=$,Error.captureStackTrace&&Error.captureStackTrace(j,err),!F)throw j;return j},inflt=function($,E,F){var j=$.length;if(!j||F&&F.f&&!F.l)return E||new u8(0);var N=!E||F,B=!F||F.i;F||(F={}),E||(E=new u8(j*3));var Z=function(tn){var an=E.length;if(tn>an){var nn=new u8(Math.max(an*2,tn));nn.set(E),E=nn}},Q=F.f||0,X=F.p||0,ae=F.b||0,le=F.l,ie=F.d,se=F.m,oe=F.n,ue=j*8;do{if(!le){Q=bits($,X,1);var ce=bits($,X+1,3);if(X+=3,ce)if(ce==1)le=flrm,ie=fdrm,se=9,oe=5;else if(ce==2){var we=bits($,X,31)+257,Ve=bits($,X+10,15)+4,Re=we+bits($,X+5,31)+1;X+=14;for(var qe=new u8(Re),We=new u8(19),Ee=0;Ee<Ve;++Ee)We[clim[Ee]]=bits($,X+Ee*3,7);X+=Ve*3;for(var Pe=max(We),je=(1<<Pe)-1,Ke=hMap(We,Pe,1),Ee=0;Ee<Re;){var ln=Ke[bits($,X,je)];X+=ln&15;var de=ln>>>4;if(de<16)qe[Ee++]=de;else{var Be=0,Ae=0;for(de==16?(Ae=3+bits($,X,3),X+=2,Be=qe[Ee-1]):de==17?(Ae=3+bits($,X,7),X+=3):de==18&&(Ae=11+bits($,X,127),X+=7);Ae--;)qe[Ee++]=Be}}var Se=qe.subarray(0,we),Fe=qe.subarray(we);se=max(Se),oe=max(Fe),le=hMap(Se,se,1),ie=hMap(Fe,oe,1)}else err(1);else{var de=shft(X)+4,ke=$[de-4]|$[de-3]<<8,he=de+ke;if(he>j){B&&err(0);break}N&&Z(ae+ke),E.set($.subarray(de,he),ae),F.b=ae+=ke,F.p=X=he*8,F.f=Q;continue}if(X>ue){B&&err(0);break}}N&&Z(ae+131072);for(var Me=(1<<se)-1,Ge=(1<<oe)-1,ze=X;;ze=X){var Be=le[bits16($,X)&Me],Ue=Be>>>4;if(X+=Be&15,X>ue){B&&err(0);break}if(Be||err(2),Ue<256)E[ae++]=Ue;else if(Ue==256){ze=X,le=null;break}else{var Ye=Ue-254;if(Ue>264){var Ee=Ue-257,Ze=fleb[Ee];Ye=bits($,X,(1<<Ze)-1)+fl[Ee],X+=Ze}var Je=ie[bits16($,X)&Ge],Xe=Je>>>4;Je||err(3),X+=Je&15;var Fe=fd[Xe];if(Xe>3){var Ze=fdeb[Xe];Fe+=bits16($,X)&(1<<Ze)-1,X+=Ze}if(X>ue){B&&err(0);break}N&&Z(ae+131072);for(var en=ae+Ye;ae<en;ae+=4)E[ae]=E[ae-Fe],E[ae+1]=E[ae+1-Fe],E[ae+2]=E[ae+2-Fe],E[ae+3]=E[ae+3-Fe];ae=en}}F.l=le,F.p=ze,F.b=ae,F.f=Q,le&&(Q=1,F.m=se,F.d=ie,F.n=oe)}while(!Q);return ae==E.length?E:slc(E,0,ae)},et$1=new u8(0),zlv=function($){(($[0]&15)!=8||$[0]>>>4>7||($[0]<<8|$[1])%31)&&err(6,"invalid zlib data"),$[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync($,E){return inflt((zlv($),$.subarray(2,-4)),E)}var te$1=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et$1,{stream:!0}),tds=1}catch{}var dutf8=function($){for(var E="",F=0;;){var j=$[F++],N=(j>127)+(j>223)+(j>239);if(F+N>$.length)return[E,slc($,F-1)];N?N==3?(j=((j&15)<<18|($[F++]&63)<<12|($[F++]&63)<<6|$[F++]&63)-65536,E+=String.fromCharCode(55296|j>>10,56320|j&1023)):N&1?E+=String.fromCharCode((j&31)<<6|$[F++]&63):E+=String.fromCharCode((j&15)<<12|($[F++]&63)<<6|$[F++]&63):E+=String.fromCharCode(j)}};function strToU8($,E){if(E){for(var F=new u8($.length),j=0;j<$.length;++j)F[j]=$.charCodeAt(j);return F}if(te$1)return te$1.encode($);for(var N=$.length,B=new u8($.length+($.length>>1)),Z=0,Q=function(le){B[Z++]=le},j=0;j<N;++j){if(Z+5>B.length){var X=new u8(Z+8+(N-j<<1));X.set(B),B=X}var ae=$.charCodeAt(j);ae<128||E?Q(ae):ae<2048?(Q(192|ae>>6),Q(128|ae&63)):ae>55295&&ae<57344?(ae=65536+(ae&1023<<10)|$.charCodeAt(++j)&1023,Q(240|ae>>18),Q(128|ae>>12&63),Q(128|ae>>6&63),Q(128|ae&63)):(Q(224|ae>>12),Q(128|ae>>6&63),Q(128|ae&63))}return slc(B,0,Z)}function strFromU8($,E){if(E){for(var F="",j=0;j<$.length;j+=16384)F+=String.fromCharCode.apply(null,$.subarray(j,j+16384));return F}else{if(td)return td.decode($);var N=dutf8($),B=N[0],Z=N[1];return Z.length&&err(8),B}}const G=({name:$="",color:E="currentColor"},{slots:F})=>{var j;return h$2("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${$}-icon`],viewBox:"0 0 1024 1024",fill:E,"aria-label":`${$} icon`},(j=F.default)==null?void 0:j.call(F))};G.displayName="IconBase";const vt=({size:$=48,stroke:E=4,wrapper:F=!0,height:j=2*$})=>{const N=h$2("svg",{xmlns:"http://www.w3.org/2000/svg",width:$,height:$,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[h$2("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),h$2("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":E,"stroke-linecap":"round"},[h$2("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),h$2("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return F?h$2("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${j}px`},N):N};vt.displayName="LoadingIcon";const Rt=($,{slots:E})=>{var F;return((F=E.default)==null?void 0:F.call(E))||null},gt=()=>h$2(G,{name:"github"},()=>h$2("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));gt.displayName="GitHubIcon";const $t=()=>h$2(G,{name:"gitlab"},()=>h$2("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));$t.displayName="GitlabIcon";const yt=()=>h$2(G,{name:"gitee"},()=>h$2("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));yt.displayName="GiteeIcon";const bt=()=>h$2(G,{name:"bitbucket"},()=>h$2("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));bt.displayName="BitbucketIcon";const wt=()=>h$2(G,{name:"source"},()=>h$2("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));wt.displayName="SourceIcon";const et=Array.isArray,Gt=$=>typeof $=="function",P$1=$=>typeof $=="string";var Ot=$=>/^(https?:)?\/\//.test($),J=$=>Object.prototype.toString.call($)==="[object Object]";const Vt=($,E)=>{const F=E?E._instance:getCurrentInstance();return J(F==null?void 0:F.appContext.components)&&($ in F.appContext.components||camelize($)in F.appContext.components||capitalize(camelize($))in F.appContext.components)};function Ft($){return $}function Zt($,E=!0){getCurrentInstance()?onMounted($):E?$():nextTick($)}function Qt($,E=!1){const F=ref(),j=()=>F.value=!!$();return j(),Zt(j,E),F}const St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mt="__vueuse_ssr_handlers__";St[Mt]=St[Mt]||{};var Dt;(function($){$.UP="UP",$.RIGHT="RIGHT",$.DOWN="DOWN",$.LEFT="LEFT",$.NONE="NONE"})(Dt||(Dt={}));var Jt=Object.defineProperty,xt=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,It=($,E,F)=>E in $?Jt($,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):$[E]=F,Xt=($,E)=>{for(var F in E||(E={}))qt.call(E,F)&&It($,F,E[F]);if(xt)for(var F of xt(E))Kt.call(E,F)&&It($,F,E[F]);return $};const te={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Xt({linear:Ft},te);const Et=()=>Qt(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),ee=()=>{const $=Et();return computed(()=>$.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},ne=$=>{const E=useRouteLocale();return computed(()=>$[E.value])},re=$=>/\b(?:Android|iPhone)/i.test($),fe=($,E)=>{let F=1;for(let j=0;j<$.length;j++)F+=$.charCodeAt(j),F+=F<<10,F^=F>>6;return F+=F<<3,F^=F>>11,F%E};var K$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nt={},me={get exports(){return nt},set exports($){nt=$}};(function($,E){(function(F,j){$.exports=j()})(K$1,function(){var F=1e3,j=6e4,N=36e5,B="millisecond",Z="second",Q="minute",X="hour",ae="day",le="week",ie="month",se="quarter",oe="year",ue="date",ce="Invalid Date",de=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ke=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,he={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Be){var Ae=["th","st","nd","rd"],Se=Be%100;return"["+Be+(Ae[(Se-20)%10]||Ae[Se]||Ae[0])+"]"}},we=function(Be,Ae,Se){var Fe=String(Be);return!Fe||Fe.length>=Ae?Be:""+Array(Ae+1-Fe.length).join(Se)+Be},Ve={s:we,z:function(Be){var Ae=-Be.utcOffset(),Se=Math.abs(Ae),Fe=Math.floor(Se/60),Me=Se%60;return(Ae<=0?"+":"-")+we(Fe,2,"0")+":"+we(Me,2,"0")},m:function Be(Ae,Se){if(Ae.date()<Se.date())return-Be(Se,Ae);var Fe=12*(Se.year()-Ae.year())+(Se.month()-Ae.month()),Me=Ae.clone().add(Fe,ie),Ge=Se-Me<0,ze=Ae.clone().add(Fe+(Ge?-1:1),ie);return+(-(Fe+(Se-Me)/(Ge?Me-ze:ze-Me))||0)},a:function(Be){return Be<0?Math.ceil(Be)||0:Math.floor(Be)},p:function(Be){return{M:ie,y:oe,w:le,d:ae,D:ue,h:X,m:Q,s:Z,ms:B,Q:se}[Be]||String(Be||"").toLowerCase().replace(/s$/,"")},u:function(Be){return Be===void 0}},Re="en",qe={};qe[Re]=he;var We=function(Be){return Be instanceof Ke},Ee=function Be(Ae,Se,Fe){var Me;if(!Ae)return Re;if(typeof Ae=="string"){var Ge=Ae.toLowerCase();qe[Ge]&&(Me=Ge),Se&&(qe[Ge]=Se,Me=Ge);var ze=Ae.split("-");if(!Me&&ze.length>1)return Be(ze[0])}else{var Ue=Ae.name;qe[Ue]=Ae,Me=Ue}return!Fe&&Me&&(Re=Me),Me||!Fe&&Re},Pe=function(Be,Ae){if(We(Be))return Be.clone();var Se=typeof Ae=="object"?Ae:{};return Se.date=Be,Se.args=arguments,new Ke(Se)},je=Ve;je.l=Ee,je.i=We,je.w=function(Be,Ae){return Pe(Be,{locale:Ae.$L,utc:Ae.$u,x:Ae.$x,$offset:Ae.$offset})};var Ke=function(){function Be(Se){this.$L=Ee(Se.locale,null,!0),this.parse(Se)}var Ae=Be.prototype;return Ae.parse=function(Se){this.$d=function(Fe){var Me=Fe.date,Ge=Fe.utc;if(Me===null)return new Date(NaN);if(je.u(Me))return new Date;if(Me instanceof Date)return new Date(Me);if(typeof Me=="string"&&!/Z$/i.test(Me)){var ze=Me.match(de);if(ze){var Ue=ze[2]-1||0,Ye=(ze[7]||"0").substring(0,3);return Ge?new Date(Date.UTC(ze[1],Ue,ze[3]||1,ze[4]||0,ze[5]||0,ze[6]||0,Ye)):new Date(ze[1],Ue,ze[3]||1,ze[4]||0,ze[5]||0,ze[6]||0,Ye)}}return new Date(Me)}(Se),this.$x=Se.x||{},this.init()},Ae.init=function(){var Se=this.$d;this.$y=Se.getFullYear(),this.$M=Se.getMonth(),this.$D=Se.getDate(),this.$W=Se.getDay(),this.$H=Se.getHours(),this.$m=Se.getMinutes(),this.$s=Se.getSeconds(),this.$ms=Se.getMilliseconds()},Ae.$utils=function(){return je},Ae.isValid=function(){return this.$d.toString()!==ce},Ae.isSame=function(Se,Fe){var Me=Pe(Se);return this.startOf(Fe)<=Me&&Me<=this.endOf(Fe)},Ae.isAfter=function(Se,Fe){return Pe(Se)<this.startOf(Fe)},Ae.isBefore=function(Se,Fe){return this.endOf(Fe)<Pe(Se)},Ae.$g=function(Se,Fe,Me){return je.u(Se)?this[Fe]:this.set(Me,Se)},Ae.unix=function(){return Math.floor(this.valueOf()/1e3)},Ae.valueOf=function(){return this.$d.getTime()},Ae.startOf=function(Se,Fe){var Me=this,Ge=!!je.u(Fe)||Fe,ze=je.p(Se),Ue=function(nn,Qe){var sn=je.w(Me.$u?Date.UTC(Me.$y,Qe,nn):new Date(Me.$y,Qe,nn),Me);return Ge?sn:sn.endOf(ae)},Ye=function(nn,Qe){return je.w(Me.toDate()[nn].apply(Me.toDate("s"),(Ge?[0,0,0,0]:[23,59,59,999]).slice(Qe)),Me)},Ze=this.$W,Je=this.$M,Xe=this.$D,en="set"+(this.$u?"UTC":"");switch(ze){case oe:return Ge?Ue(1,0):Ue(31,11);case ie:return Ge?Ue(1,Je):Ue(0,Je+1);case le:var tn=this.$locale().weekStart||0,an=(Ze<tn?Ze+7:Ze)-tn;return Ue(Ge?Xe-an:Xe+(6-an),Je);case ae:case ue:return Ye(en+"Hours",0);case X:return Ye(en+"Minutes",1);case Q:return Ye(en+"Seconds",2);case Z:return Ye(en+"Milliseconds",3);default:return this.clone()}},Ae.endOf=function(Se){return this.startOf(Se,!1)},Ae.$set=function(Se,Fe){var Me,Ge=je.p(Se),ze="set"+(this.$u?"UTC":""),Ue=(Me={},Me[ae]=ze+"Date",Me[ue]=ze+"Date",Me[ie]=ze+"Month",Me[oe]=ze+"FullYear",Me[X]=ze+"Hours",Me[Q]=ze+"Minutes",Me[Z]=ze+"Seconds",Me[B]=ze+"Milliseconds",Me)[Ge],Ye=Ge===ae?this.$D+(Fe-this.$W):Fe;if(Ge===ie||Ge===oe){var Ze=this.clone().set(ue,1);Ze.$d[Ue](Ye),Ze.init(),this.$d=Ze.set(ue,Math.min(this.$D,Ze.daysInMonth())).$d}else Ue&&this.$d[Ue](Ye);return this.init(),this},Ae.set=function(Se,Fe){return this.clone().$set(Se,Fe)},Ae.get=function(Se){return this[je.p(Se)]()},Ae.add=function(Se,Fe){var Me,Ge=this;Se=Number(Se);var ze=je.p(Fe),Ue=function(Je){var Xe=Pe(Ge);return je.w(Xe.date(Xe.date()+Math.round(Je*Se)),Ge)};if(ze===ie)return this.set(ie,this.$M+Se);if(ze===oe)return this.set(oe,this.$y+Se);if(ze===ae)return Ue(1);if(ze===le)return Ue(7);var Ye=(Me={},Me[Q]=j,Me[X]=N,Me[Z]=F,Me)[ze]||1,Ze=this.$d.getTime()+Se*Ye;return je.w(Ze,this)},Ae.subtract=function(Se,Fe){return this.add(-1*Se,Fe)},Ae.format=function(Se){var Fe=this,Me=this.$locale();if(!this.isValid())return Me.invalidDate||ce;var Ge=Se||"YYYY-MM-DDTHH:mm:ssZ",ze=je.z(this),Ue=this.$H,Ye=this.$m,Ze=this.$M,Je=Me.weekdays,Xe=Me.months,en=function(Qe,sn,rn,on){return Qe&&(Qe[sn]||Qe(Fe,Ge))||rn[sn].slice(0,on)},tn=function(Qe){return je.s(Ue%12||12,Qe,"0")},an=Me.meridiem||function(Qe,sn,rn){var on=Qe<12?"AM":"PM";return rn?on.toLowerCase():on},nn={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Ze+1,MM:je.s(Ze+1,2,"0"),MMM:en(Me.monthsShort,Ze,Xe,3),MMMM:en(Xe,Ze),D:this.$D,DD:je.s(this.$D,2,"0"),d:String(this.$W),dd:en(Me.weekdaysMin,this.$W,Je,2),ddd:en(Me.weekdaysShort,this.$W,Je,3),dddd:Je[this.$W],H:String(Ue),HH:je.s(Ue,2,"0"),h:tn(1),hh:tn(2),a:an(Ue,Ye,!0),A:an(Ue,Ye,!1),m:String(Ye),mm:je.s(Ye,2,"0"),s:String(this.$s),ss:je.s(this.$s,2,"0"),SSS:je.s(this.$ms,3,"0"),Z:ze};return Ge.replace(ke,function(Qe,sn){return sn||nn[Qe]||ze.replace(":","")})},Ae.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},Ae.diff=function(Se,Fe,Me){var Ge,ze=je.p(Fe),Ue=Pe(Se),Ye=(Ue.utcOffset()-this.utcOffset())*j,Ze=this-Ue,Je=je.m(this,Ue);return Je=(Ge={},Ge[oe]=Je/12,Ge[ie]=Je,Ge[se]=Je/3,Ge[le]=(Ze-Ye)/6048e5,Ge[ae]=(Ze-Ye)/864e5,Ge[X]=Ze/N,Ge[Q]=Ze/j,Ge[Z]=Ze/F,Ge)[ze]||Ze,Me?Je:je.a(Je)},Ae.daysInMonth=function(){return this.endOf(ie).$D},Ae.$locale=function(){return qe[this.$L]},Ae.locale=function(Se,Fe){if(!Se)return this.$L;var Me=this.clone(),Ge=Ee(Se,Fe,!0);return Ge&&(Me.$L=Ge),Me},Ae.clone=function(){return je.w(this.$d,this)},Ae.toDate=function(){return new Date(this.valueOf())},Ae.toJSON=function(){return this.isValid()?this.toISOString():null},Ae.toISOString=function(){return this.$d.toISOString()},Ae.toString=function(){return this.$d.toUTCString()},Be}(),ln=Ke.prototype;return Pe.prototype=ln,[["$ms",B],["$s",Z],["$m",Q],["$H",X],["$W",ae],["$M",ie],["$y",oe],["$D",ue]].forEach(function(Be){ln[Be[1]]=function(Ae){return this.$g(Ae,Be[0],Be[1])}}),Pe.extend=function(Be,Ae){return Be.$i||(Be(Ae,Ke,Pe),Be.$i=!0),Pe},Pe.locale=Ee,Pe.isDayjs=We,Pe.unix=function(Be){return Pe(1e3*Be)},Pe.en=qe[Re],Pe.Ls=qe,Pe.p={},Pe})})(me);var V=nt,it={},pe={get exports(){return it},set exports($){it=$}};(function($,E){(function(F,j){$.exports=j()})(K$1,function(){return function(F,j,N){var B=j.prototype,Z=function(se){var oe,ue=se.date,ce=se.utc,de={};if(!((oe=ue)instanceof Date||oe instanceof Array||B.$utils().u(oe)||oe.constructor.name!=="Object")){if(!Object.keys(ue).length)return new Date;var ke=ce?N.utc():N();Object.keys(ue).forEach(function(Pe){var je,Ke;de[je=Pe,Ke=B.$utils().p(je),Ke==="date"?"day":Ke]=ue[Pe]});var he=de.day||(de.year||de.month>=0?1:ke.date()),we=de.year||ke.year(),Ve=de.month>=0?de.month:de.year||de.day?0:ke.month(),Re=de.hour||0,qe=de.minute||0,We=de.second||0,Ee=de.millisecond||0;return ce?new Date(Date.UTC(we,Ve,he,Re,qe,We,Ee)):new Date(we,Ve,he,Re,qe,We,Ee)}return ue},Q=B.parse;B.parse=function(se){se.date=Z.bind(this)(se),Q.bind(this)(se)};var X=B.set,ae=B.add,le=B.subtract,ie=function(se,oe,ue,ce){ce===void 0&&(ce=1);var de=Object.keys(oe),ke=this;return de.forEach(function(he){ke=se.bind(ke)(oe[he]*ce,he)}),ke};B.set=function(se,oe){return oe=oe===void 0?se:oe,se.constructor.name==="Object"?ie.bind(this)(function(ue,ce){return X.bind(this)(ce,ue)},oe,se):X.bind(this)(se,oe)},B.add=function(se,oe){return se.constructor.name==="Object"?ie.bind(this)(ae,se,oe):ae.bind(this)(se,oe)},B.subtract=function(se,oe){return se.constructor.name==="Object"?ie.bind(this)(ae,se,oe,-1):le.bind(this)(se,oe)}}})})(pe);var ve=it,rt={},ge={get exports(){return rt},set exports($){rt=$}};(function($,E){(function(F,j){$.exports=j()})(K$1,function(){var F={year:0,month:1,day:2,hour:3,minute:4,second:5},j={};return function(N,B,Z){var Q,X=function(se,oe,ue){ue===void 0&&(ue={});var ce=new Date(se),de=function(ke,he){he===void 0&&(he={});var we=he.timeZoneName||"short",Ve=ke+"|"+we,Re=j[Ve];return Re||(Re=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:ke,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:we}),j[Ve]=Re),Re}(oe,ue);return de.formatToParts(ce)},ae=function(se,oe){for(var ue=X(se,oe),ce=[],de=0;de<ue.length;de+=1){var ke=ue[de],he=ke.type,we=ke.value,Ve=F[he];Ve>=0&&(ce[Ve]=parseInt(we,10))}var Re=ce[3],qe=Re===24?0:Re,We=ce[0]+"-"+ce[1]+"-"+ce[2]+" "+qe+":"+ce[4]+":"+ce[5]+":000",Ee=+se;return(Z.utc(We).valueOf()-(Ee-=Ee%1e3))/6e4},le=B.prototype;le.tz=function(se,oe){se===void 0&&(se=Q);var ue=this.utcOffset(),ce=this.toDate(),de=ce.toLocaleString("en-US",{timeZone:se}),ke=Math.round((ce-new Date(de))/1e3/60),he=Z(de).$set("millisecond",this.$ms).utcOffset(15*-Math.round(ce.getTimezoneOffset()/15)-ke,!0);if(oe){var we=he.utcOffset();he=he.add(ue-we,"minute")}return he.$x.$timezone=se,he},le.offsetName=function(se){var oe=this.$x.$timezone||Z.tz.guess(),ue=X(this.valueOf(),oe,{timeZoneName:se}).find(function(ce){return ce.type.toLowerCase()==="timezonename"});return ue&&ue.value};var ie=le.startOf;le.startOf=function(se,oe){if(!this.$x||!this.$x.$timezone)return ie.call(this,se,oe);var ue=Z(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return ie.call(ue,se,oe).tz(this.$x.$timezone,!0)},Z.tz=function(se,oe,ue){var ce=ue&&oe,de=ue||oe||Q,ke=ae(+Z(),de);if(typeof se!="string")return Z(se).tz(de);var he=function(qe,We,Ee){var Pe=qe-60*We*1e3,je=ae(Pe,Ee);if(We===je)return[Pe,We];var Ke=ae(Pe-=60*(je-We)*1e3,Ee);return je===Ke?[Pe,je]:[qe-60*Math.min(je,Ke)*1e3,Math.max(je,Ke)]}(Z.utc(se,ce).valueOf(),ke,de),we=he[0],Ve=he[1],Re=Z(we).utcOffset(Ve);return Re.$x.$timezone=de,Re},Z.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},Z.tz.setDefault=function(se){Q=se}}})})(ge);var $e=rt,st={},ye={get exports(){return st},set exports($){st=$}};(function($,E){(function(F,j){$.exports=j()})(K$1,function(){var F="minute",j=/[+-]\d\d(?::?\d\d)?/g,N=/([+-]|\d\d)/g;return function(B,Z,Q){var X=Z.prototype;Q.utc=function(ce){var de={date:ce,utc:!0,args:arguments};return new Z(de)},X.utc=function(ce){var de=Q(this.toDate(),{locale:this.$L,utc:!0});return ce?de.add(this.utcOffset(),F):de},X.local=function(){return Q(this.toDate(),{locale:this.$L,utc:!1})};var ae=X.parse;X.parse=function(ce){ce.utc&&(this.$u=!0),this.$utils().u(ce.$offset)||(this.$offset=ce.$offset),ae.call(this,ce)};var le=X.init;X.init=function(){if(this.$u){var ce=this.$d;this.$y=ce.getUTCFullYear(),this.$M=ce.getUTCMonth(),this.$D=ce.getUTCDate(),this.$W=ce.getUTCDay(),this.$H=ce.getUTCHours(),this.$m=ce.getUTCMinutes(),this.$s=ce.getUTCSeconds(),this.$ms=ce.getUTCMilliseconds()}else le.call(this)};var ie=X.utcOffset;X.utcOffset=function(ce,de){var ke=this.$utils().u;if(ke(ce))return this.$u?0:ke(this.$offset)?ie.call(this):this.$offset;if(typeof ce=="string"&&(ce=function(Re){Re===void 0&&(Re="");var qe=Re.match(j);if(!qe)return null;var We=(""+qe[0]).match(N)||["-",0,0],Ee=We[0],Pe=60*+We[1]+ +We[2];return Pe===0?0:Ee==="+"?Pe:-Pe}(ce),ce===null))return this;var he=Math.abs(ce)<=16?60*ce:ce,we=this;if(de)return we.$offset=he,we.$u=ce===0,we;if(ce!==0){var Ve=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(we=this.local().add(he+Ve,F)).$offset=he,we.$x.$localOffset=Ve}else we=this.utc();return we};var se=X.format;X.format=function(ce){var de=ce||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return se.call(this,de)},X.valueOf=function(){var ce=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*ce},X.isUTC=function(){return!!this.$u},X.toISOString=function(){return this.toDate().toISOString()},X.toString=function(){return this.toDate().toUTCString()};var oe=X.toDate;X.toDate=function(ce){return ce==="s"&&this.$offset?Q(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():oe.call(this)};var ue=X.diff;X.diff=function(ce,de,ke){if(ce&&this.$u===ce.$u)return ue.call(this,ce,de,ke);var he=this.local(),we=Q(ce).local();return ue.call(he,we,de,ke)}}})})(ye);var be=st;V.extend(ve),V.extend(be),V.extend($e);const ot=($,E)=>{if($){if(V($ instanceof Date?$:P$1($)?$.trim():$).isValid()){const j=E?V($).tz(E):V($),N=j.year(),B=j.month()+1,Z=j.date(),Q=j.hour(),X=j.minute(),ae=j.second(),le=j.millisecond(),ie=Q===0&&X===0&&ae===0&&le===0;return{value:j.toDate(),info:{year:N,month:B,day:Z,...ie?{}:{hour:Q,minute:X,second:ae}},type:ie?"date":"full"}}const F=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec($.trim());if(F){const[,j,N,B,Z,Q,X]=F,ae=de=>typeof de>"u"?void 0:Number(de),le=de=>de&&de<100?de+2e3:de,ie=de=>Z&&Q&&!X?0:de,se={year:le(ae(j)),month:ae(N),day:ae(B),hour:ae(Z),minute:ae(Q),second:ie(ae(X))},oe=j===void 0&&N===void 0&&B===void 0,ue=Z===void 0&&Q===void 0&&X===void 0,ce=V({...se,month:se.month-1}).toDate();return{value:oe?void 0:ce,info:ue?{year:se.year,month:se.month,day:se.day}:oe?{hour:se.hour,minute:se.minute,second:se.second}:se,type:oe?"time":ue?"date":"full"}}}return null},_t=($,E)=>P$1($)&&$.startsWith(E),Oe=($,E)=>P$1($)&&$.endsWith(E),Tt=Object.entries,at=Object.keys,Ct=$=>J($)&&P$1($.name),De=($,E=!1)=>$?et($)?$.map(F=>P$1(F)?{name:F}:Ct(F)?F:null).filter(F=>F!==null):P$1($)?[{name:$}]:Ct($)?[$]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${E?"":"| false"} | undefined\`, but got`,$),[]):[],ct=($,E)=>{if($){if(et($)&&$.every(P$1))return $;if(P$1($))return[$];console.error(`Expect ${E||"value"} to be \`string[] | string | undefined\`, but got`,$)}return[]},xe=$=>ct($,"category"),Ie=$=>ct($,"tag"),_e=$=>_t($,"/");class Te{constructor(){this.messageElements={};const E="message-container",F=document.getElementById(E);F?this.containerElement=F:(this.containerElement=document.createElement("div"),this.containerElement.id=E,document.body.appendChild(this.containerElement))}pop(E,F=2e3){const j=document.createElement("div"),N=Date.now();return j.className="message move-in",j.innerHTML=E,this.containerElement.appendChild(j),this.messageElements[N]=j,F>0&&setTimeout(()=>{this.close(N)},F),N}close(E){if(E){const F=this.messageElements[E];F.classList.remove("move-in"),F.classList.add("move-out"),F.addEventListener("animationend",()=>{F.remove(),delete this.messageElements[E]})}else at(this.messageElements).forEach(F=>this.close(Number(F)))}destroy(){document.body.removeChild(this.containerElement)}}const zt=/#.*$/u,kt=$=>{const E=zt.exec($);return E?E[0]:""},lt=$=>decodeURI($).replace(zt,"").replace(/(index)?\.(md|html)$/,""),Ce=($,E)=>{if(E===void 0)return!1;const F=lt($.path),j=lt(E),N=kt(E);return N?N===$.hash&&(!j||F===j):F===j},He=$=>{const E=atob($);return strFromU8(unzlibSync(strToU8(E,!0)))},Le=$=>Ot($)?$:`https://github.com/${$}`,Ne=$=>!Ot($)||/github\.com/.test($)?"GitHub":/bitbucket\.org/.test($)?"Bitbucket":/gitlab\.com/.test($)?"GitLab":/gitee\.com/.test($)?"Gitee":null,Ht=($,...E)=>{const F=$.resolve(...E),j=F.matched[F.matched.length-1];if(!(j!=null&&j.redirect))return F;const{redirect:N}=j,B=Gt(N)?N(F):N,Z=P$1(B)?{path:B}:B;return Ht($,{hash:F.hash,query:F.query,params:F.params,...Z})};var _a;const isClient=typeof window<"u",isFunction=$=>typeof $=="function",isString=$=>typeof $=="string",noop=()=>{},isIOS=isClient&&((_a=window==null?void 0:window.navigator)==null?void 0:_a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref($){return typeof $=="function"?$():unref($)}function createFilterWrapper($,E){function F(...j){return new Promise((N,B)=>{Promise.resolve($(()=>E.apply(this,j),{fn:E,thisArg:this,args:j})).then(N).catch(B)})}return F}const bypassFilter=$=>$();function throttleFilter($,E=!0,F=!0,j=!1){let N=0,B,Z=!0,Q=noop,X;const ae=()=>{B&&(clearTimeout(B),B=void 0,Q(),Q=noop)};return ie=>{const se=resolveUnref($),oe=Date.now()-N,ue=()=>X=ie();return ae(),se<=0?(N=Date.now(),ue()):(oe>se&&(F||!Z)?(N=Date.now(),ue()):E&&(X=new Promise((ce,de)=>{Q=j?de:ce,B=setTimeout(()=>{N=Date.now(),Z=!0,ce(ue()),ae()},Math.max(0,se-oe))})),!F&&!B&&(B=setTimeout(()=>Z=!0,se)),Z=!1,X)}}function pausableFilter($=bypassFilter){const E=ref(!0);function F(){E.value=!1}function j(){E.value=!0}const N=(...B)=>{E.value&&$(...B)};return{isActive:readonly(E),pause:F,resume:j,eventFilter:N}}function identity($){return $}function tryOnScopeDispose($){return getCurrentScope()?(onScopeDispose($),!0):!1}function useThrottleFn($,E=200,F=!1,j=!0,N=!1){return createFilterWrapper(throttleFilter(E,F,j,N),$)}function resolveRef($){return typeof $=="function"?computed($):ref($)}function tryOnMounted($,E=!0){getCurrentInstance()?onMounted($):E?$():nextTick($)}function useTimeoutFn($,E,F={}){const{immediate:j=!0}=F,N=ref(!1);let B=null;function Z(){B&&(clearTimeout(B),B=null)}function Q(){N.value=!1,Z()}function X(...ae){Z(),N.value=!0,B=setTimeout(()=>{N.value=!1,B=null,$(...ae)},resolveUnref(E))}return j&&(N.value=!0,isClient&&X()),tryOnScopeDispose(Q),{isPending:readonly(N),start:X,stop:Q}}function useToggle($=!1,E={}){const{truthyValue:F=!0,falsyValue:j=!1}=E,N=isRef($),B=ref($);function Z(Q){if(arguments.length)return B.value=Q,B.value;{const X=resolveUnref(F);return B.value=B.value===X?resolveUnref(j):X,B.value}}return N?Z:[B,Z]}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=($,E)=>{var F={};for(var j in $)__hasOwnProp$6.call($,j)&&E.indexOf(j)<0&&(F[j]=$[j]);if($!=null&&__getOwnPropSymbols$6)for(var j of __getOwnPropSymbols$6($))E.indexOf(j)<0&&__propIsEnum$6.call($,j)&&(F[j]=$[j]);return F};function watchWithFilter($,E,F={}){const j=F,{eventFilter:N=bypassFilter}=j,B=__objRest$5(j,["eventFilter"]);return watch($,createFilterWrapper(N,E),B)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=($,E,F)=>E in $?__defProp$2($,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):$[E]=F,__spreadValues$2=($,E)=>{for(var F in E||(E={}))__hasOwnProp$2.call(E,F)&&__defNormalProp$2($,F,E[F]);if(__getOwnPropSymbols$2)for(var F of __getOwnPropSymbols$2(E))__propIsEnum$2.call(E,F)&&__defNormalProp$2($,F,E[F]);return $},__spreadProps$2=($,E)=>__defProps$2($,__getOwnPropDescs$2(E)),__objRest$1$1=($,E)=>{var F={};for(var j in $)__hasOwnProp$2.call($,j)&&E.indexOf(j)<0&&(F[j]=$[j]);if($!=null&&__getOwnPropSymbols$2)for(var j of __getOwnPropSymbols$2($))E.indexOf(j)<0&&__propIsEnum$2.call($,j)&&(F[j]=$[j]);return F};function watchPausable($,E,F={}){const j=F,{eventFilter:N}=j,B=__objRest$1$1(j,["eventFilter"]),{eventFilter:Z,pause:Q,resume:X,isActive:ae}=pausableFilter(N);return{stop:watchWithFilter($,E,__spreadProps$2(__spreadValues$2({},B),{eventFilter:Z})),pause:Q,resume:X,isActive:ae}}function unrefElement($){var E;const F=resolveUnref($);return(E=F==null?void 0:F.$el)!=null?E:F}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0,defaultNavigator=isClient?window.navigator:void 0;function useEventListener(...$){let E,F,j,N;if(isString($[0])||Array.isArray($[0])?([F,j,N]=$,E=defaultWindow):[E,F,j,N]=$,!E)return noop;Array.isArray(F)||(F=[F]),Array.isArray(j)||(j=[j]);const B=[],Z=()=>{B.forEach(le=>le()),B.length=0},Q=(le,ie,se,oe)=>(le.addEventListener(ie,se,oe),()=>le.removeEventListener(ie,se,oe)),X=watch(()=>[unrefElement(E),resolveUnref(N)],([le,ie])=>{Z(),le&&B.push(...F.flatMap(se=>j.map(oe=>Q(le,se,oe,ie))))},{immediate:!0,flush:"post"}),ae=()=>{X(),Z()};return tryOnScopeDispose(ae),ae}let _iOSWorkaround=!1;function onClickOutside($,E,F={}){const{window:j=defaultWindow,ignore:N=[],capture:B=!0,detectIframe:Z=!1}=F;if(!j)return;isIOS&&!_iOSWorkaround&&(_iOSWorkaround=!0,Array.from(j.document.body.children).forEach(se=>se.addEventListener("click",noop)));let Q=!0;const X=se=>N.some(oe=>{if(typeof oe=="string")return Array.from(j.document.querySelectorAll(oe)).some(ue=>ue===se.target||se.composedPath().includes(ue));{const ue=unrefElement(oe);return ue&&(se.target===ue||se.composedPath().includes(ue))}}),le=[useEventListener(j,"click",se=>{const oe=unrefElement($);if(!(!oe||oe===se.target||se.composedPath().includes(oe))){if(se.detail===0&&(Q=!X(se)),!Q){Q=!0;return}E(se)}},{passive:!0,capture:B}),useEventListener(j,"pointerdown",se=>{const oe=unrefElement($);oe&&(Q=!se.composedPath().includes(oe)&&!X(se))},{passive:!0}),Z&&useEventListener(j,"blur",se=>{var oe;const ue=unrefElement($);((oe=j.document.activeElement)==null?void 0:oe.tagName)==="IFRAME"&&!(ue!=null&&ue.contains(j.document.activeElement))&&E(se)})].filter(Boolean);return()=>le.forEach(se=>se())}function useSupported($,E=!1){const F=ref(),j=()=>F.value=Boolean($());return j(),tryOnMounted(j,E),F}function useMediaQuery($,E={}){const{window:F=defaultWindow}=E,j=useSupported(()=>F&&"matchMedia"in F&&typeof F.matchMedia=="function");let N;const B=ref(!1),Z=()=>{N&&("removeEventListener"in N?N.removeEventListener("change",Q):N.removeListener(Q))},Q=()=>{j.value&&(Z(),N=F.matchMedia(resolveRef($).value),B.value=N.matches,"addEventListener"in N?N.addEventListener("change",Q):N.addListener(Q))};return watchEffect(Q),tryOnScopeDispose(()=>Z()),B}function useClipboard($={}){const{navigator:E=defaultNavigator,read:F=!1,source:j,copiedDuring:N=1500,legacy:B=!1}=$,Z=["copy","cut"],Q=useSupported(()=>E&&"clipboard"in E),X=computed(()=>Q.value||B),ae=ref(""),le=ref(!1),ie=useTimeoutFn(()=>le.value=!1,N);function se(){Q.value?E.clipboard.readText().then(de=>{ae.value=de}):ae.value=ce()}if(X.value&&F)for(const de of Z)useEventListener(de,se);async function oe(de=resolveUnref(j)){X.value&&de!=null&&(Q.value?await E.clipboard.writeText(de):ue(de),ae.value=de,le.value=!0,ie.start())}function ue(de){const ke=document.createElement("textarea");ke.value=de??"",ke.style.position="absolute",ke.style.opacity="0",document.body.appendChild(ke),ke.select(),document.execCommand("copy"),ke.remove()}function ce(){var de,ke,he;return(he=(ke=(de=document==null?void 0:document.getSelection)==null?void 0:de.call(document))==null?void 0:ke.toString())!=null?he:""}return{isSupported:X,text:ae,copied:le,copy:oe}}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler($,E){return handlers[$]||E}function guessSerializerType($){return $==null?"any":$ instanceof Set?"set":$ instanceof Map?"map":$ instanceof Date?"date":typeof $=="boolean"?"boolean":typeof $=="string"?"string":typeof $=="object"?"object":Number.isNaN($)?"any":"number"}var __defProp$k=Object.defineProperty,__getOwnPropSymbols$m=Object.getOwnPropertySymbols,__hasOwnProp$m=Object.prototype.hasOwnProperty,__propIsEnum$m=Object.prototype.propertyIsEnumerable,__defNormalProp$k=($,E,F)=>E in $?__defProp$k($,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):$[E]=F,__spreadValues$k=($,E)=>{for(var F in E||(E={}))__hasOwnProp$m.call(E,F)&&__defNormalProp$k($,F,E[F]);if(__getOwnPropSymbols$m)for(var F of __getOwnPropSymbols$m(E))__propIsEnum$m.call(E,F)&&__defNormalProp$k($,F,E[F]);return $};const StorageSerializers={boolean:{read:$=>$==="true",write:$=>String($)},object:{read:$=>JSON.parse($),write:$=>JSON.stringify($)},number:{read:$=>Number.parseFloat($),write:$=>String($)},any:{read:$=>$,write:$=>String($)},string:{read:$=>$,write:$=>String($)},map:{read:$=>new Map(JSON.parse($)),write:$=>JSON.stringify(Array.from($.entries()))},set:{read:$=>new Set(JSON.parse($)),write:$=>JSON.stringify(Array.from($))},date:{read:$=>new Date($),write:$=>$.toISOString()}},customStorageEventName="vueuse-storage";function useStorage($,E,F,j={}){var N;const{flush:B="pre",deep:Z=!0,listenToStorageChanges:Q=!0,writeDefaults:X=!0,mergeDefaults:ae=!1,shallow:le,window:ie=defaultWindow,eventFilter:se,onError:oe=Ee=>{console.error(Ee)}}=j,ue=(le?shallowRef:ref)(E);if(!F)try{F=getSSRHandler("getDefaultStorage",()=>{var Ee;return(Ee=defaultWindow)==null?void 0:Ee.localStorage})()}catch(Ee){oe(Ee)}if(!F)return ue;const ce=resolveUnref(E),de=guessSerializerType(ce),ke=(N=j.serializer)!=null?N:StorageSerializers[de],{pause:he,resume:we}=watchPausable(ue,()=>Ve(ue.value),{flush:B,deep:Z,eventFilter:se});return ie&&Q&&(useEventListener(ie,"storage",We),useEventListener(ie,customStorageEventName,qe)),We(),ue;function Ve(Ee){try{if(Ee==null)F.removeItem($);else{const Pe=ke.write(Ee),je=F.getItem($);je!==Pe&&(F.setItem($,Pe),ie&&ie.dispatchEvent(new CustomEvent(customStorageEventName,{detail:{key:$,oldValue:je,newValue:Pe,storageArea:F}})))}}catch(Pe){oe(Pe)}}function Re(Ee){const Pe=Ee?Ee.newValue:F.getItem($);if(Pe==null)return X&&ce!==null&&F.setItem($,ke.write(ce)),ce;if(!Ee&&ae){const je=ke.read(Pe);return isFunction(ae)?ae(je,ce):de==="object"&&!Array.isArray(je)?__spreadValues$k(__spreadValues$k({},ce),je):je}else return typeof Pe!="string"?Pe:ke.read(Pe)}function qe(Ee){We(Ee.detail)}function We(Ee){if(!(Ee&&Ee.storageArea!==F)){if(Ee&&Ee.key==null){ue.value=ce;return}if(!(Ee&&Ee.key!==$)){he();try{ue.value=Re(Ee)}catch(Pe){oe(Pe)}finally{Ee?nextTick(we):we()}}}}}function usePreferredDark($){return useMediaQuery("(prefers-color-scheme: dark)",$)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen($,E={}){const{document:F=defaultDocument,autoExit:j=!1}=E,N=$||(F==null?void 0:F.querySelector("html")),B=ref(!1);let Z=functionsMap[0];const Q=useSupported(()=>{if(F){for(const ce of functionsMap)if(ce[1]in F)return Z=ce,!0}else return!1;return!1}),[X,ae,le,,ie]=Z;async function se(){Q.value&&(F!=null&&F[le]&&await F[ae](),B.value=!1)}async function oe(){if(!Q.value)return;await se();const ce=unrefElement(N);ce&&(await ce[X](),B.value=!0)}async function ue(){B.value?await se():await oe()}return F&&useEventListener(F,ie,()=>{B.value=!!(F!=null&&F[le])},!1),j&&tryOnScopeDispose(se),{isSupported:Q,isFullscreen:B,enter:oe,exit:se,toggle:ue}}var __getOwnPropSymbols$8=Object.getOwnPropertySymbols,__hasOwnProp$8=Object.prototype.hasOwnProperty,__propIsEnum$8=Object.prototype.propertyIsEnumerable,__objRest$1=($,E)=>{var F={};for(var j in $)__hasOwnProp$8.call($,j)&&E.indexOf(j)<0&&(F[j]=$[j]);if($!=null&&__getOwnPropSymbols$8)for(var j of __getOwnPropSymbols$8($))E.indexOf(j)<0&&__propIsEnum$8.call($,j)&&(F[j]=$[j]);return F};function useMutationObserver($,E,F={}){const j=F,{window:N=defaultWindow}=j,B=__objRest$1(j,["window"]);let Z;const Q=useSupported(()=>N&&"MutationObserver"in N),X=()=>{Z&&(Z.disconnect(),Z=void 0)},ae=watch(()=>unrefElement($),ie=>{X(),Q.value&&N&&ie&&(Z=new MutationObserver(E),Z.observe(ie,B))},{immediate:!0}),le=()=>{X(),ae()};return tryOnScopeDispose(le),{isSupported:Q,stop:le}}var SwipeDirection;(function($){$.UP="UP",$.RIGHT="RIGHT",$.DOWN="DOWN",$.LEFT="LEFT",$.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));function checkOverflowScroll($){const E=window.getComputedStyle($);if(E.overflowX==="scroll"||E.overflowY==="scroll"||E.overflowX==="auto"&&$.clientHeight<$.scrollHeight||E.overflowY==="auto"&&$.clientWidth<$.scrollWidth)return!0;{const F=$.parentNode;return!F||F.tagName==="BODY"?!1:checkOverflowScroll(F)}}function preventDefault($){const E=$||window.event,F=E.target;return checkOverflowScroll(F)?!1:E.touches.length>1?!0:(E.preventDefault&&E.preventDefault(),!1)}function useScrollLock($,E=!1){const F=ref(E);let j=null,N;watch(resolveRef($),Q=>{if(Q){const X=Q;N=X.style.overflow,F.value&&(X.style.overflow="hidden")}},{immediate:!0});const B=()=>{const Q=resolveUnref($);!Q||F.value||(isIOS&&(j=useEventListener(Q,"touchmove",X=>{preventDefault(X)},{passive:!1})),Q.style.overflow="hidden",F.value=!0)},Z=()=>{const Q=resolveUnref($);!Q||!F.value||(isIOS&&(j==null||j()),Q.style.overflow=N,F.value=!1)};return tryOnScopeDispose(Z),computed({get(){return F.value},set(Q){Q?B():Z()}})}function useSessionStorage($,E,F={}){const{window:j=defaultWindow}=F;return useStorage($,E,j==null?void 0:j.sessionStorage,F)}let _id=0;function useStyleTag($,E={}){const F=ref(!1),{document:j=defaultDocument,immediate:N=!0,manual:B=!1,id:Z=`vueuse_styletag_${++_id}`}=E,Q=ref($);let X=()=>{};const ae=()=>{if(!j)return;const ie=j.getElementById(Z)||j.createElement("style");ie.isConnected||(ie.type="text/css",ie.id=Z,E.media&&(ie.media=E.media),j.head.appendChild(ie)),!F.value&&(X=watch(Q,se=>{ie.textContent=se},{immediate:!0}),F.value=!0)},le=()=>{!j||!F.value||(X(),j.head.removeChild(j.getElementById(Z)),F.value=!1)};return N&&!B&&tryOnMounted(ae),B||tryOnScopeDispose(le),{id:Z,css:Q,unload:le,load:ae,isLoaded:readonly(F)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=($,E,F)=>E in $?__defProp($,E,{enumerable:!0,configurable:!0,writable:!0,value:F}):$[E]=F,__spreadValues=($,E)=>{for(var F in E||(E={}))__hasOwnProp.call(E,F)&&__defNormalProp($,F,E[F]);if(__getOwnPropSymbols)for(var F of __getOwnPropSymbols(E))__propIsEnum.call(E,F)&&__defNormalProp($,F,E[F]);return $};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);function useWindowScroll({window:$=defaultWindow}={}){if(!$)return{x:ref(0),y:ref(0)};const E=ref($.scrollX),F=ref($.scrollY);return useEventListener($,"scroll",()=>{E.value=$.scrollX,F.value=$.scrollY},{capture:!1,passive:!0}),{x:E,y:F}}const fontIcon="";var m$3=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup($){const E=computed(()=>{const j=["font-icon icon"],N=`iconfont icon-${$.icon}`;return j.push(N),j}),F=computed(()=>{const j={};return $.color&&(j.color=$.color),$.size&&(j["font-size"]=Number.isNaN(Number($.size))?$.size:`${$.size}px`),at(j).length?j:null});return()=>$.icon?h$2("span",{key:$.icon,class:E.value,style:F.value}):null}});const badge="",t$3=({type:$="info",text:E="",vertical:F="top",color:j},{slots:N})=>{var B;return h$2("span",{class:["badge",$,{diy:j}],style:{verticalAlign:F,...j?{backgroundColor:j}:{}}},E||((B=N.default)==null?void 0:B.call(N)))};t$3.displayName="Badge";const biliBili="",e$4="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",h$1=$=>isString$1($)?$:`${$}px`,x$2=($,E=0)=>{const F=ref(),j=computed(()=>h$1(unref($.width)||"100%")),N=ref("auto"),B=X=>{if(isString$1(X)){const[ae,le]=X.split(":"),ie=Number(ae)/Number(le);if(!Number.isNaN(ie))return ie}return typeof X=="number"?X:16/9},Z=X=>{const ae=unref($.height),le=B(unref($.ratio));return ae?h$1(ae):`${Number(X)/le+unref(E)}px`},Q=()=>{F.value&&(N.value=Z(F.value.clientWidth))};return onMounted(()=>{Q(),isRef(E)&&watch(E,()=>Q()),useEventListener("orientationchange",()=>Q()),useEventListener("resize",()=>Q())}),{el:F,width:j,height:N}};var y=defineComponent({name:"BiliBili",props:{bvid:{type:String,required:!0},title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},lowQuality:Boolean,noDanmaku:Boolean},setup($){const E=ref(!1),F=computed(()=>E.value?0:68),j=()=>{E.value=re(navigator.userAgent)||N.value.clientWidth<640},{el:N,width:B,height:Z}=x$2($,F),Q=computed(()=>`https://player.bilibili.com/player.html?bvid=${$.bvid}&t=${$.time}&high_quality=${$.lowQuality?0:1}&page=${$.page}&danmaku=${$.noDanmaku?0:1}`);return onMounted(()=>{j(),useEventListener("orientationchange",()=>j()),useEventListener("resize",()=>j())}),()=>[h$2("div",{class:"bili-desc"},h$2("a",{class:"sr-only",href:Q.value},$.title)),h$2("iframe",{ref:N,src:Q.value,title:$.title,class:"bili-iframe",allow:e$4,style:{width:B.value,height:Z.value}})]}});const z$1=["mp4","mp3","webm","ogg","m3u8","hls","ts","flv","mpd","dash"],A$1=$=>($==null?void 0:$.split(".").pop())||"",k$1=async($,E,F,j=!1,N=0)=>{const B=(await __vitePreload(()=>import("./dash.all.min-17db9e8a.js").then(Z=>Z.d),["assets/dash.all.min-17db9e8a.js","assets/commonjsHelpers-725317a4.js"])).default;if(B.supportsMediaSource()){const Z=B.MediaPlayer().create();Z.initialize($,E,j,N),F(()=>Z.destroy())}},L=async($,E,F)=>{const j=(await __vitePreload(()=>import("./mpegts-233576b6.js").then(N=>N.m),["assets/mpegts-233576b6.js","assets/commonjsHelpers-725317a4.js"])).default;if(j.isSupported()){const N=j.createPlayer({type:"flv",url:E});N.attachMediaElement($),N.load(),F(()=>N.destroy())}},R=async($,E,F)=>{const j=(await __vitePreload(()=>import("./hls.min-c0f2426e.js").then(N=>N.h),["assets/hls.min-c0f2426e.js","assets/commonjsHelpers-725317a4.js"])).default;if($.canPlayType("application/x-mpegURL")||$.canPlayType("application/vnd.apple.mpegURL"))$.src=E;else if(j.isSupported()){const N=new j;N.attachMedia($),N.on(j.Events.MEDIA_ATTACHED,function(){N.loadSource(E)}),F(()=>N.destroy())}},D$1=["no-fullscreen","no-hotkey","no-playback-rate","no-setting","no-mutex","no-plays-inline"],O$1=["airplay","autoplay","aspect-ratio","auto-mini","auto-size","auto-orientation","auto-playback","fast-forward","flip","fullscreen-web","lock","loop","is-live","muted","mini-progress-bar","pip","screenshot","subtitle-offset"],U=["en","pl","cs","es","fa"],_$1=["zh-cn","zh-tw"],x$1=$=>{const E=$.toLowerCase(),F=E.split("-")[0];return _$1.includes(E)?E:U.includes(F)?F:F==="zh"?"zh-cn":"en"};var C$3=defineComponent({name:"ArtPlayer",props:{src:{type:String,required:!0},type:{type:String,default:""},poster:{type:String,default:""},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},config:{type:Object,default:null},customPlayer:{type:Function,default:$=>$}},setup($,{attrs:E}){const F=usePageLang(),{el:j,width:N,height:B}=x$2($,0);let Z;const Q=()=>{var X,ae,le;const ie={theme:"#3eaf7c",fullscreen:!0,playbackRate:!0,setting:!0,container:j.value,title:$.title,poster:$.poster,url:$.src,type:$.type||A$1($.src),lang:x$1(F.value),...$.config,useSSR:!1},se=at(E);if(D$1.forEach(oe=>{se.includes(oe)&&(ie[camelize(oe.replace(/^no-/,""))]=!1)}),O$1.forEach(oe=>{se.includes(oe)&&(ie[camelize(oe)]=!0)}),ie.type){const oe=ie.customType??(ie.customType={});if(z$1.includes(ie.type.toLowerCase()))switch(ie.type){case"m3u8":case"hls":oe[X=ie.type]??(oe[X]=(ue,ce,de)=>R(ue,ce,ke=>{de.on("destroy",ke)}));break;case"flv":oe[ae=ie.type]??(oe[ae]=(ue,ce,de)=>L(ue,ce,ke=>{de.on("destroy",ke)}));break;case"mpd":case"dash":oe[le=ie.type]??(oe[le]=(ue,ce,de)=>k$1(ue,ce,ke=>{de.on("destroy",ke)}));break}else console.warn(`[components]: ArtPlayer does not support current file type ${ie.type}!`)}return ie};return onMounted(async()=>{const{default:X}=await __vitePreload(()=>import("./artplayer-c60d4c82.js").then(le=>le.a),["assets/artplayer-c60d4c82.js","assets/commonjsHelpers-725317a4.js"]),ae=new X(Q());Z=await $.customPlayer(ae)||ae}),onUnmounted(()=>{Z==null||Z.destroy()}),()=>h$2("div",{ref:j,style:{width:N.value,height:B.value}},"Loading...")}});const l$3=()=>h$2(G,{name:"back-to-top"},()=>[h$2("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$2("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);l$3.displayName="BackToTopIcon";const balloon="",backToTop="";var T$3=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup($){const E=usePageFrontmatter(),F=ne({"/en/":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}}),{y:j}=useWindowScroll(),N=computed(()=>E.value.backToTop!==!1&&j.value>$.threshold);return()=>h$2(Transition,{name:"fade"},()=>N.value?h$2("button",{class:"back-to-top","aria-label":F.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},h$2(l$3)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:$})=>{Vt("FontIcon")||$.component("FontIcon",m$3),Vt("Badge")||$.component("Badge",t$3),Vt("BiliBili")||$.component("BiliBili",y),Vt("ArtPlayer")||$.component("ArtPlayer",C$3)},setup:()=>{useStyleTag(`  @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>h$2(T$3,{threshold:300})]});function r$3($,E,F){var j,N,B;E===void 0&&(E=50),F===void 0&&(F={});var Z=(j=F.isImmediate)!=null&&j,Q=(N=F.callback)!=null&&N,X=F.maxWait,ae=Date.now(),le=[];function ie(){if(X!==void 0){var oe=Date.now()-ae;if(oe+E>=X)return X-oe}return E}var se=function(){var oe=[].slice.call(arguments),ue=this;return new Promise(function(ce,de){var ke=Z&&B===void 0;if(B!==void 0&&clearTimeout(B),B=setTimeout(function(){if(B=void 0,ae=Date.now(),!Z){var we=$.apply(ue,oe);Q&&Q(we),le.forEach(function(Ve){return(0,Ve.resolve)(we)}),le=[]}},ie()),ke){var he=$.apply(ue,oe);return Q&&Q(he),ce(he)}le.push({resolve:ce,reject:de})})};return se.cancel=function(oe){B!==void 0&&clearTimeout(B),le.forEach(function(ue){return(0,ue.reject)(oe)}),le=[]},se}const useActiveHeaderLinks=({headerLinkSelector:$,headerAnchorSelector:E,delay:F,offset:j=5})=>{const N=useRouter(),Z=r$3(()=>{var ce,de;const Q=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(Q-0)<j){updateHash(N,"");return}const ae=window.innerHeight+Q,le=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),ie=Math.abs(le-ae)<j,se=Array.from(document.querySelectorAll($)),ue=Array.from(document.querySelectorAll(E)).filter(ke=>se.some(he=>he.hash===ke.hash));for(let ke=0;ke<ue.length;ke++){const he=ue[ke],we=ue[ke+1],Ve=Q>=(((ce=he.parentElement)==null?void 0:ce.offsetTop)??0)-j,Re=!we||Q<(((de=we.parentElement)==null?void 0:de.offsetTop)??0)-j;if(!(Ve&&Re))continue;const We=decodeURIComponent(N.currentRoute.value.hash),Ee=decodeURIComponent(he.hash);if(We===Ee)return;if(ie){for(let Pe=ke+1;Pe<ue.length;Pe++)if(We===decodeURIComponent(ue[Pe].hash))return}updateHash(N,Ee);return}},F);onMounted(()=>{window.addEventListener("scroll",Z)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",Z)})},updateHash=async($,E)=>{const{scrollBehavior:F}=$.options;$.options.scrollBehavior=void 0,await $.replace({query:$.currentRoute.value.query,hash:E,force:!0}).finally(()=>$.options.scrollBehavior=F)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}}),autoCatalog="";var D=defineComponent({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup($,{slots:E}){const F=ne({"/en/":{title:"Catalog"},"/":{title:"目录"}}),j=usePageData(),N=useRouter(),B=useSiteData(),Z=ae=>{const le=ae.I;return typeof le>"u"||le},Q=()=>{const ae=$.base||j.value.path.replace(/\/[^/]+$/,"/"),le=N.getRoutes(),ie=[];return le.filter(({meta:se,path:oe})=>{if(!_t(oe,ae)||oe===ae)return!1;if(ae==="/"){const ue=at(B.value.locales).filter(ce=>ce!=="/");if(oe==="/404.html"||ue.some(ce=>_t(oe,ce)))return!1}return(Oe(oe,".html")&&!Oe(oe,"/index.html")||Oe(oe,"/"))&&Z(se)}).map(({path:se,meta:oe})=>{const ue=se.substring(ae.length).split("/").length;return{title:oe.t||"",icon:oe.i,base:se.replace(/\/[^/]+\/?$/,"/"),order:oe.O||null,level:Oe(se,"/")?ue-1:ue,path:se}}).filter(({title:se,level:oe})=>typeof se=="string"&&se&&oe<=$.level).sort(({title:se,level:oe,path:ue,order:ce},{title:de,level:ke,path:he,order:we})=>oe-ke||(Oe(ue,"/index.html")?-1:Oe(he,"/index.html")?1:ce===null?we===null?se.localeCompare(de):we:we===null?ce:ce>0?we>0?ce-we:-1:we<0?ce-we:1)).forEach(se=>{var oe;const{base:ue,level:ce}=se;switch(ce){case 1:ie.push(se);break;case 2:{const de=ie.find(ke=>ke.path===ue);de&&(de.children??(de.children=[])).push(se);break}default:{const de=ie.find(ke=>ke.path===ue.replace(/\/[^/]+\/$/,"/"));if(de){const ke=(oe=de.children)==null?void 0:oe.find(he=>he.path===ue);ke&&(ke.children??(ke.children=[])).push(se)}}}}),ie},X=computed(()=>Q());return()=>h$2("div",{class:"auto-catalog-wrapper"},[h$2("h2",{class:"main-title"},F.value.title),...X.value.map(({children:ae=[],icon:le,path:ie,title:se},oe)=>[h$2("h3",{id:se,class:["child-title",{"has-children":ae.length}]},[h$2("a",{href:`#${se}`,class:"header-anchor"},"#"),h$2(RouterLink,{class:"catalog-title",to:ie},()=>[$.index?`${oe+1}.`:null,le&&E.icon?E.icon({icon:le}):null,se||"Unknown"])]),ae.length?h$2("ul",{class:"child-catalog-wrapper"},ae.map(({children:ue=[],icon:ce,path:de,title:ke},he)=>h$2("li",{class:"child-catalog-item"},[h$2("div",{class:["sub-title",{"has-children":ue.length}]},[h$2("a",{href:`#${ke}`,class:"header-anchor"},"#"),h$2(RouterLink,{class:"catalog-title",to:de},()=>[$.index?`${oe+1}.${he+1}`:null,ce&&E.icon?E.icon({icon:ce}):null,ke||"Unknown"])]),ue.length?h$2("div",{class:"sub-catalog-wrapper"},ue.map(({icon:we,path:Ve,title:Re},qe)=>h$2(RouterLink,{class:"sub-catalog-item",to:Ve},()=>[$.index?`${oe+1}.${he+1}.${qe+1}`:null,we&&E.icon?E.icon({icon:we}):null,Re||"Unknown"]))):null]))):null])])}}),K=defineClientConfig({enhance:({app:$})=>{Vt("AutoCatalog",$)||$.component("AutoCatalog",E=>h$2(D,E,{icon:({icon:F})=>h$2(resolveComponent("HopeIcon"),{icon:F})}))}});const vars$2="",externalLinkIcon="",svg=h$2("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$2("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$2("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup($){const E=useRouteLocale(),F=computed(()=>$.locales[E.value]??{openInNewWindow:"open in new window"});return()=>h$2("span",[svg,h$2("span",{class:"external-link-icon-sr-only"},F.value.openInNewWindow)])}}),locales$1={},clientConfig4=defineClientConfig({enhance({app:$}){$.component("ExternalLinkIcon",h$2(ExternalLinkIcon,{locales:locales$1}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:$=>{const E=nprogress$1.isStarted();$=clamp($,nprogress$1.settings.minimum,1),nprogress$1.status=$===1?null:$;const F=nprogress$1.render(!E),j=F.querySelector(nprogress$1.settings.barSelector),N=nprogress$1.settings.speed,B=nprogress$1.settings.easing;return F.offsetWidth,queue(Z=>{css(j,{transform:"translate3d("+toBarPerc($)+"%,0,0)",transition:"all "+N+"ms "+B}),$===1?(css(F,{transition:"none",opacity:"1"}),F.offsetWidth,setTimeout(function(){css(F,{transition:"all "+N+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),Z()},N)},N)):setTimeout(()=>Z(),N)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const $=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),$())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&$(),nprogress$1},done:$=>!$&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:$=>{let E=nprogress$1.status;return E?(typeof $!="number"&&($=(1-E)*clamp(Math.random()*E,.1,.95)),E=clamp(E+$,0,.994),nprogress$1.set(E)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:$=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const E=document.createElement("div");E.id="nprogress",E.innerHTML=nprogress$1.settings.template;const F=E.querySelector(nprogress$1.settings.barSelector),j=$?"-100":toBarPerc(nprogress$1.status||0),N=document.querySelector(nprogress$1.settings.parent);return css(F,{transition:"all 0 linear",transform:"translate3d("+j+"%,0,0)"}),N!==document.body&&addClass(N,"nprogress-custom-parent"),N==null||N.appendChild(E),E},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const $=document.getElementById("nprogress");$&&removeElement($)},isRendered:()=>!!document.getElementById("nprogress")},clamp=($,E,F)=>$<E?E:$>F?F:$,toBarPerc=$=>(-1+$)*100,queue=function(){const $=[];function E(){const F=$.shift();F&&F(E)}return function(F){$.push(F),$.length===1&&E()}}(),css=function(){const $=["Webkit","O","Moz","ms"],E={};function F(Z){return Z.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(Q,X){return X.toUpperCase()})}function j(Z){const Q=document.body.style;if(Z in Q)return Z;let X=$.length;const ae=Z.charAt(0).toUpperCase()+Z.slice(1);let le;for(;X--;)if(le=$[X]+ae,le in Q)return le;return Z}function N(Z){return Z=F(Z),E[Z]||(E[Z]=j(Z))}function B(Z,Q,X){Q=N(Q),Z.style[Q]=X}return function(Z,Q){for(const X in Q){const ae=Q[X];ae!==void 0&&Object.prototype.hasOwnProperty.call(Q,X)&&B(Z,X,ae)}}}(),hasClass=($,E)=>(typeof $=="string"?$:classList($)).indexOf(" "+E+" ")>=0,addClass=($,E)=>{const F=classList($),j=F+E;hasClass(F,E)||($.className=j.substring(1))},removeClass=($,E)=>{const F=classList($);if(!hasClass($,E))return;const j=F.replace(" "+E+" "," ");$.className=j.substring(1,j.length-1)},classList=$=>(" "+($.className||"")+" ").replace(/\s+/gi," "),removeElement=$=>{$&&$.parentNode&&$.parentNode.removeChild($)},vars$1="",nprogress="",useNprogress=()=>{onMounted(()=>{const $=useRouter(),E=new Set;E.add($.currentRoute.value.path),$.beforeEach(F=>{E.has(F.path)||nprogress$1.start()}),$.afterEach(F=>{E.add(F.path),nprogress$1.done()})})},clientConfig5=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse(`{"encrypt":{"config":{}},"themeColor":{"red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f","pink":"#f8bfca"},"blog":{"timeline":"新文档还在编写中！","description":"一个开发者","intro":"/","medias":{"Gitee":"https://gitee.com/licheng1013","Github":"https://github.com/licheng1013"}},"locales":{"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"author":{"name":"LiCheng","url":"https://gitee.com/licheng1013"},"logo":"/logo.png","repo":"https://gitee.com/licheng1013","footer":"逆水求剑-致永恒 <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728700105340810'crossorigin='anonymous'><\/script>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/en/",{"text":"Plugins","icon":"alias","link":"/en/plugins"},{"text":"English","icon":"language","link":"/en/english"},{"icon":"link","text":"Links","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java Guide","link":"https://javaguide.cn/"}]},{"text":"Github","icon":"github","link":"https://github.com/licheng1013"}],"sidebar":{"/en/english/":"structure","/en/plugins/":"structure"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"LiCheng","url":"https://gitee.com/licheng1013"},"logo":"/logo.png","repo":"https://gitee.com/licheng1013","footer":"逆水求剑-致永恒 <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728700105340810'crossorigin='anonymous'><\/script>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/",{"text":"介绍","icon":"creative","link":"/blog/"},{"text":"插件","icon":"alias","link":"/plugins/"},{"text":"个人","icon":"study","link":"/study/"},{"text":"工具","icon":"tool","link":"/util/"},{"icon":"link","text":"友链","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java指南","link":"https://javaguide.cn/"},{"text":"主题文档","link":"https://theme-hope.vuejs.press/zh/"},{"text":"Idea插件","link":"/util/idea.md"}]},{"text":"Gitee镜像文档","icon":"gitee","link":"https://licheng1013.gitee.io/"}],"sidebar":{"/blog/":"structure","/plugins/":"structure","/study/":"structure","/util/":"structure"}}}}`),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const $=inject(themeLocaleDataSymbol);if(!$)throw new Error("useThemeLocaleData() is called without provider.");return $},resolveThemeLocaleData=($,E)=>{var F;return{...$,...(F=$.locales)==null?void 0:F[E]}},clientConfig6=defineClientConfig({enhance({app:$}){const E=useThemeData$1(),F=$._context.provides[routeLocaleSymbol],j=computed(()=>resolveThemeLocaleData(E.value,F.value));$.provide(themeLocaleDataSymbol,j),Object.defineProperties($.config.globalProperties,{$theme:{get(){return E.value}},$themeLocale:{get(){return j.value}}})}}),giscus="",i$4=["de","gsw","en","es","fr","id","it","ja","ko","pl","ro","ru","tr","vi","zh-CN","zh-TW"],e$3={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/dark.css",repo:"licheng1013/blog-giscus",repoId:"R_kgDOIVLLNA",categoryId:"DIC_kwDOIVLLNM4CSQfj",category:"Announcements",mapping:"title"},{repo:T$2,repoId:w$1,category:C$2,categoryId:b}=e$3;var z=defineComponent({name:"GiscusComment",props:{darkmode:Boolean},setup($){const E=usePageFrontmatter(),F=usePageData(),j=ref(!1),N=computed(()=>{const Q=usePageLang().value;if(i$4.includes(Q))return Q;const X=Q.split("-")[0];return i$4.includes(X)?X:"en"}),B=computed(()=>{const Q=e$3.comment!==!1,X=E.value.comment;return!!X||Q!==!1&&X!==!1}),Z=computed(()=>({repo:T$2,repoId:w$1,category:C$2,categoryId:b,lang:N.value,theme:$.darkmode?e$3.darkTheme:e$3.lightTheme,mapping:e$3.mapping,term:withBase(F.value.path),inputPosition:e$3.inputPosition||"top",reactionsEnabled:e$3.reactionsEnabled===!1?"0":"1",strict:e$3.strict===!1?"0":"1",loading:e$3.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return onMounted(async()=>{await __vitePreload(()=>import("./giscus-9b97f17f.js"),[]),j.value=!0}),()=>h$2("div",{class:["giscus-wrapper",{"input-top":e$3.inputPosition!=="bottom"}],id:"comment",style:{display:B.value?"block":"none"}},j.value?h$2("giscus-widget",Z.value):h$2(vt))}});const i$3={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.190/templates/giscus/dark.css",repo:"licheng1013/blog-giscus",repoId:"R_kgDOIVLLNA",categoryId:"DIC_kwDOIVLLNM4CSQfj",category:"Announcements",mapping:"title"}.comment!==!1,d=defineComponent({name:"CommentService",props:{darkmode:Boolean},setup($){const E=usePageFrontmatter(),F=computed(()=>E.value.comment||i$3&&E.value.comment!==!1);return()=>h$2(z,{darkmode:$.darkmode,style:{display:F.value?"block":"none"}})}});var l$2=defineClientConfig({enhance:({app:$})=>{$.component("CommentService",d)}});const button="",M=800,u$1=2e3,S$1={"/en/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"},"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},n$1=!1,P=['.theme-hope-content div[class*="language-"] pre'],m$2=!1,l$1=new Map,T$1=()=>{const{copy:$}=useClipboard({legacy:!0}),E=ne(S$1),F=usePageData(),j=ee(),N=Q=>{if(!Q.hasAttribute("copy-code-registered")){const X=document.createElement("button");X.classList.add("copy-code-button"),X.innerHTML='<div class="copy-icon" />',X.setAttribute("aria-label",E.value.copy),X.setAttribute("data-copied",E.value.copied),Q.parentElement&&Q.parentElement.insertBefore(X,Q),Q.setAttribute("copy-code-registered","")}},B=()=>nextTick().then(()=>new Promise(Q=>{setTimeout(()=>{P.forEach(X=>{document.querySelectorAll(X).forEach(N)}),Q()},M)})),Z=(Q,X,ae)=>{let{innerText:le=""}=X;/language-(shellscript|shell|bash|sh|zsh)/.test(Q.classList.toString())&&(le=le.replace(/^ *(\$|>) /gm,"")),$(le).then(()=>{ae.classList.add("copied"),clearTimeout(l$1.get(ae));const ie=setTimeout(()=>{ae.classList.remove("copied"),ae.blur(),l$1.delete(ae)},u$1);l$1.set(ae,ie)})};onMounted(()=>{(!j.value||m$2)&&B(),useEventListener("click",Q=>{const X=Q.target;if(X.matches('div[class*="language-"] > button.copy')){const ae=X.parentElement,le=X.nextElementSibling;le&&Z(ae,le,X)}else if(X.matches('div[class*="language-"] div.copy-icon')){const ae=X.parentElement,le=ae.parentElement,ie=ae.nextElementSibling;ie&&Z(le,ie,ae)}}),watch(()=>F.value.path,()=>{(!j.value||m$2)&&B()})})};var Y=defineClientConfig({setup:()=>{T$1()}});const chart="",parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup($){const E=ref(),F=ref(),j=ref(!0);return onMounted(async()=>{const[{default:N}]=await Promise.all([__vitePreload(()=>import("./auto-8f825dbd.js"),[]),new Promise(Q=>setTimeout(Q,800))]);N.defaults.maintainAspectRatio=!1;const B=parseChartConfig(He($.config),$.type),Z=F.value.getContext("2d");new N(Z,B),j.value=!1}),()=>[$.title?h$2("div",{class:"chart-title"},decodeURIComponent($.title)):null,j.value?h$2(vt,{class:"chart-loading",height:192}):null,h$2("div",{ref:E,class:"chart-wrapper",id:$.id,style:{display:j.value?"none":"block"}},h$2("canvas",{ref:F,height:400}))]}});const index$2="",o$1=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t$2=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e$2=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$2=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a$1=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i$2=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c$2=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a$1(),t$2(),o$1(),e$2(),i$2(),r$2(),c$2()],index$1="",leagueGothic="",sourceSansPro="";var S=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup($){const E=usePageFrontmatter(),F=ref(""),j=ref(!0),N=ref();let B=null;const Z=async Q=>{const X=[new Promise(se=>setTimeout(se,800)),...useReveal()],[,ae,...le]=await Promise.all(X),ie=new ae.default(Q,{plugins:le.map(({default:se})=>se)});return await ie.initialize({backgroundTransition:"slide",hash:E.value.layout==="Slide",mouseWheel:E.value.layout==="Slide",transition:"slide",slideNumber:!0,...E.value.reveal||{},embedded:E.value.layout!=="Slide"}),ie.configure({backgroundTransition:"slide"}),ie};return onMounted(async()=>{const Q=N.value;Q&&(F.value=He($.code),Q.setAttribute("id",$.id),Q.setAttribute("data-theme",$.theme),B=await Z(Q),j.value=!1)}),onUnmounted(()=>{B==null||B.destroy()}),()=>h$2("div",{class:"presentation-wrapper"},[h$2("div",{ref:N,class:["reveal","reveal-viewport"]},h$2("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${F.value}<\/script></section>`})),j.value?h$2(vt,{class:"reveal-loading",height:400}):null])}});const tasklist="",clientConfig9=defineClientConfig({enhance:({app:$})=>{$.component("ChartJS",ChartJS),$.component("Presentation",S)}}),photoswipe="",photoSwipe="",T=".theme-hope-content :not(a) > img:not([no-view])",C$1={"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},O=800,x={},A=$=>isString$1($)?Array.from(document.querySelectorAll($)):$.map(E=>Array.from(document.querySelectorAll(E))).flat(),p$1=$=>new Promise((E,F)=>{$.complete?E({src:$.src,width:$.naturalWidth,height:$.naturalHeight,alt:$.alt}):($.onload=()=>E(p$1($)),$.onerror=j=>F(j))}),H=()=>{const{isSupported:$,toggle:E}=useFullscreen(),F=ne(C$1),j=usePageData(),N=()=>Promise.all([__vitePreload(()=>import("./photoswipe.esm-6e6cbe40.js"),[]),nextTick().then(()=>new Promise(B=>setTimeout(B,O)).then(()=>A(T)))]).then(([{default:B},Z])=>{const Q='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';Z.forEach((X,ae)=>{const le=()=>{const ie=Array(Z.length).fill({html:Q}),se=new B({dataSource:ie,preloaderDelay:0,...F.value,...x,index:ae});se.on("uiRegister",()=>{$&&se.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{E()}}),se.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(oe,ue)=>{oe.setAttribute("download",""),oe.setAttribute("target","_blank"),oe.setAttribute("rel","noopener"),ue.on("change",()=>{oe.href=ue.currSlide.data.src})}})}),se.init(),Z.forEach((oe,ue)=>{p$1(oe).then(ce=>{ie.splice(ue,1,ce),se.refreshSlideContent(ue)})})};X.style.cursor="zoom-in",X.addEventListener("click",()=>{le()}),X.addEventListener("keypress",({key:ie})=>{ie==="Enter"&&le()})})});onMounted(()=>{N(),watch(()=>j.value.path,()=>N())})};var I=defineClientConfig({setup:()=>{H()}});function i$1($){return{all:$=$||new Map,on:function(E,F){var j=$.get(E);j?j.push(F):$.set(E,[F])},off:function(E,F){var j=$.get(E);j&&(F?j.splice(j.indexOf(F)>>>0,1):$.set(E,[]))},emit:function(E,F){var j=$.get(E);j&&j.slice().map(function(N){N(F)}),(j=$.get("*"))&&j.slice().map(function(N){N(E,F)})}}}const t$1=Symbol.for("PWAEvent"),r$1=()=>{const $=inject(t$1);if(!$)throw new Error("usePWAEvent() is called without provider.");return $},g$1=async $=>{const{register:E}=await __vitePreload(()=>import("./index-70769223.js"),[]);E(withBase("service-worker.js"),{ready(F){console.log("[PWA]: Service worker is active"),$.emit("ready",F)},registered(F){console.log("[PWA]: Service worker has been registered."),$.emit("registered",F)},cached(F){console.log("[PWA]: Content has been cached for offline usage"),$.emit("cached",F)},async updatefound(F){await navigator.serviceWorker.getRegistration()&&(console.log("[PWA]: New content is downloading."),$.emit("updatefound",F))},updated(F){console.log("[PWA]: New content is available, please refresh.");const j="service-worker-version",N=Number(localStorage.getItem(j)||0);localStorage.setItem(j,(N+1).toString()),localStorage.removeItem("manifest"),$.emit("updated",F)},offline(){console.log("[PWA]: No internet connection found. App is running in offline mode."),$.emit("offline")},error(F){console.log("[PWA]: Error during service worker registration:",F),$.emit("error",F)}})},m$1=()=>{const $=i$1();provide(t$1,$),onMounted(async()=>{var E;let F=!1;(E=navigator.serviceWorker)!=null&&E.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{F||(F=!0,window.location.reload())}),await g$1($)})},e$1=()=>h$2(G,{name:"update"},()=>h$2("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));e$1.displayName="UpdateIcon";const s$1={"/en/":{install:"Install",iOSInstall:"Tap the share button and then 'Add to Home Screen'",cancel:"Cancel",close:"Close",prevImage:"Previous Image",nextImage:"Next Image",desc:"Description",feature:"Key Features",explain:"This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",hint:"New content found.",update:"New content is available."},"/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"}},popup="",W=$=>{const E=$.waiting;if(!E)return;const F=new MessageChannel;E.postMessage({type:"SKIP_WAITING"},[F.port2])};var w=defineComponent({name:"SWUpdatePopup",setup($,{slots:E}){const F=ne(s$1),j=ref(),N=computed(()=>!!j.value),B=()=>{j.value&&(W(j.value),j.value=void 0)};return onMounted(()=>{r$1().on("updated",Z=>{Z&&(j.value=Z)})}),()=>h$2(Transition,{name:"popup"},()=>{var Z;return((Z=E.default)==null?void 0:Z.call(E,{enabled:N.value,reload:B}))||(N.value?h$2("button",{class:"sw-update-popup",tabindex:0,onClick:()=>B()},[F.value.update,h$2("span",{class:"icon-wrapper"},h$2(e$1))]):null)})}});const clientConfig11=defineClientConfig({setup:()=>{m$1()},rootComponents:[w]}),HopeIcon=$=>{const{icon:E=""}=$;return isLinkHttp(E)?h$2("img",{class:"icon",src:E,"no-view":""}):_e(E)?h$2("img",{class:"icon",src:withBase(E),"no-view":""}):h$2(resolveComponent("FontIcon"),$)};HopeIcon.displayName="HopeIcon";const useAutoLink=($,E=!1)=>{const F=useRouter(),{fullPath:j,meta:N,name:B}=Ht(F,encodeURI($));return{text:!E&&N.s?N.s:N.t||$,link:B==="404"?$:j,...N.i?{icon:N.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useWindowSize=()=>{const $=useThemeData(),E=ref(!1),F=ref(!1),j=()=>{E.value=window.innerWidth<=($.value.mobileBreakPoint||719),F.value=window.innerWidth>=($.value.wideBreakPoint||1440)};return onMounted(()=>{j(),useEventListener("resize",j,!1),useEventListener("orientationchange",j,!1)}),{isMobile:E,isWide:F}},useNavigate=()=>{const $=useRouter(),E=useRoute();return F=>{if(F)if(_e(F))E.path!==F&&$.push(F);else if(isLinkHttp(F)||isLinkMailto(F))window&&window.open(F);else{const j=E.path.slice(0,E.path.lastIndexOf("/"));$.push(`${j}/${encodeURI(F)}`)}}},usePageAuthor=()=>{const $=useThemeLocaleData(),E=usePageFrontmatter();return computed(()=>{const{author:F}=E.value;return F?De(F):F===!1?[]:De($.value.author,!1)})},usePageCategory=()=>{const $=usePageFrontmatter();return computed(()=>xe($.value.category).map(E=>{var F,j;return{name:E,path:((j=(F=inject(Symbol.for("categoryMap")))==null?void 0:F.value.map[E])==null?void 0:j.path)||""}}))},usePageTag=()=>{const $=usePageFrontmatter();return computed(()=>Ie($.value.tag).map(E=>{var F,j;return{name:E,path:((j=(F=inject(Symbol.for("tagMap")))==null?void 0:F.value.map[E])==null?void 0:j.path)||""}}))},usePageDate=()=>{const $=usePageFrontmatter(),E=usePageData();return computed(()=>{const{date:F}=$.value;if(F)return ot(F);const{createdTime:j}=E.value.git||{};return j?ot(new Date(j)):null})},usePageInfo=()=>{const $=useThemeLocaleData(),E=usePageData(),F=usePageFrontmatter(),j=usePageAuthor(),N=usePageCategory(),B=usePageTag(),Z=usePageDate(),Q=computed(()=>({author:j.value,category:N.value,date:Z.value,localizedDate:E.value.localizedDate,tag:B.value,isOriginal:F.value.isOriginal||!1,readingTime:E.value.readingTime||null,pageview:"pageview"in F.value?F.value.pageview:!0})),X=computed(()=>"pageInfo"in F.value?F.value.pageInfo:"pageInfo"in $.value?$.value.pageInfo:null);return{info:Q,items:X}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise($=>promiseResolve=$)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const $=usePageFrontmatter(),E=useThemeLocaleData(),F=usePageAuthor(),j=computed(()=>{const{copyright:Z,footer:Q}=$.value;return Q!==!1&&Boolean(Z||Q||E.value.displayFooter)}),N=computed(()=>{const{footer:Z}=$.value;return Z===!1?!1:isString$1(Z)?Z:E.value.footer||""}),B=computed(()=>"copyright"in $.value?$.value.copyright:"copyright"in E.value?E.value.copyright:F.value.length?`Copyright © ${new Date().getFullYear()} ${F.value[0].name}`:!1);return()=>j.value?h$2("footer",{class:"footer-wrapper"},[N.value?h$2("div",{class:"footer",innerHTML:N.value}):null,B.value?h$2("div",{class:"copyright",innerHTML:B.value}):null]):null}}),AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],setup($,{attrs:E,emit:F,slots:j}){const N=useRoute(),B=useSiteData(),Z=toRef($,"config"),Q=computed(()=>isLinkHttp(Z.value.link)),X=computed(()=>isLinkMailto(Z.value.link)||isLinkTel(Z.value.link)),ae=computed(()=>X.value?void 0:Z.value.target||(Q.value?"_blank":void 0)),le=computed(()=>ae.value==="_blank"),ie=computed(()=>!Q.value&&!X.value&&!le.value),se=computed(()=>X.value?void 0:Z.value.rel||(le.value?"noopener noreferrer":void 0)),oe=computed(()=>Z.value.ariaLabel||Z.value.text),ue=computed(()=>{if($.exact)return!1;const de=at(B.value.locales);return de.length?de.every(ke=>ke!==Z.value.link):Z.value.link!=="/"}),ce=computed(()=>ie.value?Z.value.activeMatch?new RegExp(Z.value.activeMatch).test(N.path):ue.value?_t(N.path,Z.value.link):N.path===Z.value.link:!1);return()=>{var we,Ve,Re;const{text:de,icon:ke,link:he}=Z.value;return ie.value?h$2(RouterLink,{to:he,"aria-label":oe.value,...E,class:["nav-link",{active:ce.value},E.class],onFocusout:()=>F("focusout")},()=>{var qe,We,Ee;return((qe=j.default)==null?void 0:qe.call(j))||[((We=j.before)==null?void 0:We.call(j))||h$2(HopeIcon,{icon:ke}),de,(Ee=j.after)==null?void 0:Ee.call(j)]}):h$2("a",{href:he,rel:se.value,target:ae.value,"aria-label":oe.value,...E,class:["nav-link",E.class],onFocusout:()=>F("focusout")},((we=j.default)==null?void 0:we.call(j))||[((Ve=j.before)==null?void 0:Ve.call(j))||h$2(HopeIcon,{icon:ke}),de,$.noExternalLinkIcon?null:h$2(ExternalLinkIcon),(Re=j.after)==null?void 0:Re.call(j)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup($,{slots:E}){const F=usePageData(),j=toRef($,"config"),N=computed(()=>j.value.ariaLabel||j.value.text),B=ref(!1);watch(()=>F.value.path,()=>{B.value=!1});const Z=Q=>{Q.detail===0&&(B.value=!B.value)};return()=>{var Q;return h$2("div",{class:["dropdown-wrapper",{open:B.value}]},[h$2("button",{class:"dropdown-title",type:"button","aria-label":N.value,onClick:Z},[((Q=E.title)==null?void 0:Q.call(E))||h$2("span",{class:"title"},[h$2(HopeIcon,{icon:j.value.icon}),$.config.text]),h$2("span",{class:"arrow"}),h$2("ul",{class:"nav-dropdown"},j.value.children.map((X,ae)=>{const le=ae===j.value.children.length-1;return h$2("li",{class:"dropdown-item"},"children"in X?[h$2("h4",{class:"dropdown-subtitle"},X.link?h$2(AutoLink,{config:X,onFocusout:()=>{X.children.length===0&&le&&(B.value=!1)}}):h$2("span",X.text)),h$2("ul",{class:"dropdown-subitem-wrapper"},X.children.map((ie,se)=>h$2("li",{class:"dropdown-subitem"},h$2(AutoLink,{config:ie,onFocusout:()=>{se===X.children.length-1&&le&&(B.value=!1)}}))))]:h$2(AutoLink,{config:X,onFocusout:()=>{le&&(B.value=!1)}}))}))])])}}}),I18nIcon=()=>h$2(G,{name:"i18n"},()=>[h$2("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const resolveNavbarItem=($,E="")=>isString$1($)?useAutoLink(`${E}${$}`):"children"in $?{...$,...$.link&&!isLinkExternal($.link)?useAutoLink(`${E}${$.link}`):{},children:$.children.map(F=>resolveNavbarItem(F,`${E}${$.prefix||""}`))}:{...$,link:isLinkExternal($.link)?$.link:useAutoLink(`${E}${$.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map($=>resolveNavbarItem($))),useNavbarLanguageDropdown=()=>{const $=useRouter(),E=useRouteLocale(),F=useSiteLocaleData(),j=useThemeData(),N=useThemeLocaleData();return computed(()=>{const B=at(F.value.locales);if(B.length<2)return null;const{path:Z,fullPath:Q}=$.currentRoute.value,{navbarLocales:X}=N.value;return{text:"",ariaLabel:X==null?void 0:X.selectLangAriaLabel,children:B.map(le=>{var de,ke,he;const ie=((de=F.value.locales)==null?void 0:de[le])??{},se=((ke=j.value.locales)==null?void 0:ke[le])??{},oe=ie.lang||"",ue=((he=se.navbarLocales)==null?void 0:he.langName)??oe;let ce;if(oe===F.value.lang)ce=Z;else{const we=Z.replace(E.value,le);ce=$.getRoutes().some(Ve=>Ve.path===we)?Q.replace(Z,we):se.home??le}return{text:ue,link:ce}})}})},useNavbarRepo=()=>{const $=useThemeLocaleData(),E=computed(()=>$.value.repo||null),F=computed(()=>E.value?Le(E.value):null),j=computed(()=>E.value?Ne(E.value):null),N=computed(()=>F.value?$.value.repoLabel??(j.value===null?"Source":j.value):null);return computed(()=>!F.value||!N.value||$.value.repoDisplay===!1?null:{type:j.value||"Source",label:N.value,link:F.value})},LanguageDropdown=defineComponent({name:"LanguageDropdown",setup(){const $=useNavbarLanguageDropdown();return()=>$.value?h$2("div",{class:"nav-item"},h$2(DropdownLink,{class:"i18n-dropdown",config:$.value},{title:()=>{var E;return h$2(I18nIcon,{"aria-label":(E=$.value)==null?void 0:E.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup($){const E=usePageData(),F=toRef($,"config"),j=computed(()=>F.value.ariaLabel||F.value.text),N=ref(!1);watch(()=>E.value.path,()=>{N.value=!1});const B=(Z,Q)=>Q[Q.length-1]===Z;return()=>[h$2("button",{class:["nav-screen-dropdown-title",{active:N.value}],type:"button","aria-label":j.value,onClick:()=>{N.value=!N.value}},[h$2("span",{class:"title"},[h$2(HopeIcon,{icon:F.value.icon}),$.config.text]),h$2("span",{class:["arrow",N.value?"down":"end"]})]),h$2("ul",{class:["nav-screen-dropdown",{hide:!N.value}]},F.value.children.map(Z=>h$2("li",{class:"dropdown-item"},"children"in Z?[h$2("h4",{class:"dropdown-subtitle"},Z.link?h$2(AutoLink,{config:Z,onFocusout:()=>{B(Z,F.value.children)&&Z.children.length===0&&(N.value=!1)}}):h$2("span",Z.text)),h$2("ul",{class:"dropdown-subitem-wrapper"},Z.children.map(Q=>h$2("li",{class:"dropdown-subitem"},h$2(AutoLink,{config:Q,onFocusout:()=>{B(Q,Z.children)&&B(Z,F.value.children)&&(N.value=!1)}}))))]:h$2(AutoLink,{config:Z,onFocusout:()=>{B(Z,F.value.children)&&(N.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const $=useNavbarConfig();return()=>$.value.length?h$2("nav",{class:"nav-screen-links"},$.value.map(E=>h$2("div",{class:"navbar-links-item"},"children"in E?h$2(NavScreenDropdown,{config:E}):h$2(AutoLink,{config:E})))):null}}),DarkIcon=()=>h$2(G,{name:"dark"},()=>h$2("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$2(G,{name:"light"},()=>h$2("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$2(G,{name:"auto"},()=>h$2("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$2(G,{name:"enter-fullscreen"},()=>h$2("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$2(G,{name:"cancel-fullscreen"},()=>h$2("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$2(G,{name:"outlook"},()=>[h$2("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const darkModeSymbol=Symbol.for("darkMode"),useDarkmode=()=>{const $=inject(darkModeSymbol);if(!$)throw new Error("useDarkmode() is called without provider.");return $},injectDarkmode=$=>{const E=useThemeData(),F=usePreferredDark(),j=useStorage("vuepress-theme-hope-scheme","auto"),N=computed(()=>E.value.darkmode||"switch"),B=computed(()=>{const Q=N.value;return Q==="disable"?!1:Q==="enable"?!0:Q==="auto"?F.value:Q==="toggle"?j.value==="dark":j.value==="dark"||j.value==="auto"&&F.value}),Z=computed(()=>{const Q=N.value;return Q==="switch"||Q==="toggle"});$.provide(darkModeSymbol,{canToggle:Z,config:N,isDarkmode:B,status:j}),Object.defineProperties($.config.globalProperties,{$isDarkmode:{get:()=>B.value}})},setupDarkmode=()=>{const{isDarkmode:$}=useDarkmode(),E=(F=$.value)=>document.documentElement.setAttribute("data-theme",F?"dark":"light");onMounted(()=>{watch($,E,{immediate:!0})})},appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const{config:$,status:E}=useDarkmode(),F=()=>{$.value==="switch"?E.value={light:"dark",dark:"auto",auto:"light"}[E.value]:E.value=E.value==="light"?"dark":"light"};return()=>h$2("button",{id:"appearance-switch",onClick:()=>F()},[h$2(AutoIcon,{style:{display:E.value==="auto"?"block":"none"}}),h$2(DarkIcon,{style:{display:E.value==="dark"?"block":"none"}}),h$2(LightIcon,{style:{display:E.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const $=useThemeLocaleData(),{canToggle:E}=useDarkmode(),F=computed(()=>$.value.outlookLocales.darkmode);return()=>E.value?h$2("div",{class:"appearance-wrapper"},[h$2("label",{class:"appearance-title",for:"appearance-switch"},F.value),h$2(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup($){const E=(F="")=>{const j=document.documentElement.classList,N=at($.themeColor).map(B=>`theme-${B}`);if(!F){localStorage.removeItem("theme"),j.remove(...N);return}j.remove(...N.filter(B=>B!==`theme-${F}`)),j.add(`theme-${F}`),localStorage.setItem("theme",F)};return onMounted(()=>{const F=localStorage.getItem("theme");F&&E(F)}),()=>h$2("ul",{id:"theme-color-picker"},[h$2("li",h$2("span",{class:"theme-color",onClick:()=>E()})),...Tt($.themeColor).map(([F,j])=>h$2("li",h$2("span",{style:{background:j},onClick:()=>E(F)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const $=useThemeData(),E=useThemeLocaleData(),F=computed(()=>E.value.outlookLocales.themeColor),j=computed(()=>{const{themeColor:N}=$.value;return N===!1?null:N});return()=>j.value?h$2("div",{class:"theme-color-wrapper"},[h$2("label",{class:"theme-color-title",for:"theme-color-picker"},F.value),h$2(ThemeColorPicker,{themeColor:j.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const $=useThemeLocaleData(),{isSupported:E,isFullscreen:F,toggle:j}=useFullscreen(),N=computed(()=>$.value.outlookLocales.fullscreen);return()=>E?h$2("div",{class:"full-screen-wrapper"},[h$2("label",{class:"full-screen-title",for:"full-screen-switch"},N.value),h$2("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:F.value,onClick:()=>j()},F.value?h$2(CancelFullScreenIcon):h$2(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const $=useThemeData(),E=usePure(),F=computed(()=>!E.value&&Boolean($.value.themeColor)),j=computed(()=>!E.value&&$.value.fullscreen);return()=>h$2(ClientOnly,()=>[F.value?h$2(ThemeColor):null,h$2(AppearanceMode),j.value?h$2(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:["close"],setup($,{emit:E,slots:F}){const j=usePageData(),{isMobile:N}=useWindowSize(),B=ref(),Z=useScrollLock(B);return onMounted(()=>{B.value=document.body,watch(N,Q=>{!Q&&$.show&&(Z.value=!1,E("close"))}),watch(()=>j.value.path,()=>{Z.value=!1,E("close")})}),onUnmounted(()=>{Z.value=!1}),()=>h$2(Transition,{name:"fade",onEnter:()=>{Z.value=!0},onAfterLeave:()=>{Z.value=!1}},()=>{var Q,X;return $.show?h$2("div",{id:"nav-screen"},h$2("div",{class:"container"},[(Q=F.before)==null?void 0:Q.call(F),h$2(NavScreenLinks),h$2("div",{class:"outlook-wrapper"},h$2(OutlookSettings)),(X=F.after)==null?void 0:X.call(F)])):null})}}),navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const $=useRouteLocale(),E=useSiteLocaleData(),F=useThemeLocaleData(),j=computed(()=>F.value.home||$.value),N=computed(()=>E.value.title),B=computed(()=>F.value.logo?withBase(F.value.logo):null),Z=computed(()=>F.value.logoDark?withBase(F.value.logoDark):null);return()=>h$2(RouterLink,{to:j.value,class:"brand"},()=>[B.value?h$2("img",{class:["logo",{light:Boolean(Z.value)}],src:B.value,alt:N.value}):null,Z.value?h$2("img",{class:["logo dark"],src:Z.value,alt:N.value}):null,N.value?h$2("span",{class:["site-name",{"hide-in-pad":B.value&&F.value.hideSiteNameOnMobile!==!1}]},N.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const $=useNavbarConfig();return()=>$.value.length?h$2("nav",{class:"nav-links"},[...$.value.map(E=>h$2("div",{class:"nav-item hide-in-mobile"},"children"in E?h$2(DropdownLink,{config:E}):h$2(AutoLink,{config:E})))]):null}}),repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon:bt,GiteeIcon:yt,GitHubIcon:gt,GitlabIcon:$t,SourceIcon:wt},setup(){const $=useNavbarRepo();return()=>$.value?h$2("div",{class:"nav-item"},h$2("a",{class:"repo-link",href:$.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":$.value.label},h$2(resolveComponent(`${$.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:$=!1},{emit:E})=>h$2("button",{class:["toggle-navbar-button",{"is-active":$}],"aria-label":"Toggle Navbar","aria-expanded":$,"aria-controls":"nav-screen",onClick:()=>E("toggle")},h$2("span",{class:"button-container"},[h$2("span",{class:"button-top"}),h$2("span",{class:"button-middle"}),h$2("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=($,{emit:E})=>h$2("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>E("toggle")},h$2("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:$}=useFullscreen(),E=useThemeData(),F=usePure(),j=usePageData(),{canToggle:N}=useDarkmode(),B=ref(!1),Z=computed(()=>!F.value&&Boolean(E.value.themeColor)),Q=computed(()=>!F.value&&E.value.fullscreen&&$);return watch(()=>j.value.path,()=>{B.value=!1}),()=>N.value||Q.value||Z.value?h$2("div",{class:"nav-item hide-in-mobile"},N.value&&!Q.value&&!Z.value?h$2(AppearanceSwitch):Q.value&&!N.value&&!Z.value?h$2(ToggleFullScreenButton):h$2("button",{class:["outlook-button",{open:B.value}],tabindex:"-1",ariaHidden:!0},[h$2(OutlookIcon),h$2("div",{class:"outlook-dropdown"},h$2(OutlookSettings))])):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:["toggleSidebar"],setup($,{emit:E,slots:F}){const j=useThemeLocaleData(),{isMobile:N}=useWindowSize(),B=ref(!1),Z=computed(()=>{const{navbarAutoHide:X="mobile"}=j.value;return X!=="none"&&(X==="always"||N.value)}),Q=computed(()=>j.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]});return()=>{var ae,le,ie,se,oe,ue;const X={Brand:h$2(NavbarBrand),Language:h$2(LanguageDropdown),Links:h$2(NavbarLinks),Repo:h$2(RepoLink),Outlook:h$2(OutlookButton),Search:Vt("Docsearch")?h$2(resolveComponent("Docsearch")):Vt("SearchBox")?h$2(resolveComponent("SearchBox")):Vt("SearchBox")?h$2(resolveComponent("SearchBox")):null};return[h$2("header",{class:["navbar",{"auto-hide":Z.value,"hide-icon":j.value.navbarIcon===!1}],id:"navbar"},[h$2("div",{class:"navbar-start"},[h$2(ToggleSidebarButton,{onToggle:()=>{B.value&&(B.value=!1),E("toggleSidebar")}}),(ae=F.startBefore)==null?void 0:ae.call(F),...(Q.value.start||[]).map(ce=>X[ce]),(le=F.startAfter)==null?void 0:le.call(F)]),h$2("div",{class:"navbar-center"},[(ie=F.centerBefore)==null?void 0:ie.call(F),...(Q.value.center||[]).map(ce=>X[ce]),(se=F.centerAfter)==null?void 0:se.call(F)]),h$2("div",{class:"navbar-end"},[(oe=F.endBefore)==null?void 0:oe.call(F),...(Q.value.end||[]).map(ce=>X[ce]),(ue=F.endAfter)==null?void 0:ue.call(F),h$2(ToggleNavbarButton,{active:B.value,onToggle:()=>{B.value=!B.value}})])]),h$2(NavScreen,{show:B.value,onClose:()=>{B.value=!1}},{before:()=>{var ce;return(ce=F.screenTop)==null?void 0:ce.call(F)},after:()=>{var ce;return(ce=F.screenBottom)==null?void 0:ce.call(F)}})]}}}),isActiveSidebarItem=($,E,F=!1)=>"activeMatch"in E?new RegExp(E.activeMatch).test($.path):Ce($,E.link)?!0:E.children&&!F?E.children.some(j=>isActiveSidebarItem($,j)):!1,isMatchedSidebarItem=($,E)=>E.type==="group"?E.children.some(F=>F.type==="group"?isMatchedSidebarItem($,F):F.type==="page"&&isActiveSidebarItem($,F,!0))||"prefix"in E&&Ce($,E.prefix):!1,renderItem=($,E)=>$.link?h$2(AutoLink,{...E,config:$}):h$2("p",E,[h$2(HopeIcon,{icon:$.icon}),$.text]),renderChildren$1=$=>{const E=useRoute();return $?h$2("ul",{class:"sidebar-sub-headers"},$.map(F=>{const j=isActiveSidebarItem(E,F,!0);return h$2("li",{class:"sidebar-sub-header"},[renderItem(F,{class:["sidebar-link","heading",{active:j}]}),renderChildren$1(F.children)])})):null},sidebarData={"/en/english/":["study","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19"],"/en/plugins/":["gorm","jorm","vue-admin"],"/blog/":["body","desc","video","random"],"/plugins/":["gorm","io-game","java-orm","request-tool","rocket-cat","rs-orm","vue-admin"],"/study/":[{text:"Game",prefix:"game/",collapsible:!0,icon:"app",children:["cocos",{text:"Design",prefix:"design/",collapsible:!0,children:["chess"]},"game","godot","unity"]},{text:"Go",prefix:"go/",collapsible:!0,icon:"hot",children:["gin","go","gorm","socket","ssh","wails","qiniu","try","util","design-mode","difficult"]},{text:"Java",prefix:"java/",collapsible:!0,icon:"java",children:[{text:"Design Mode",prefix:"design-mode/",collapsible:!0,children:["proxy","design-mode"]},"hutool","io-game","java","maven","mqtt","mybatis","protostuff","redisson","rocket-mq","spring-boot","spring-boot-demo","spring-cloud","spring-cloud-alibaba","transaction","data-struct"]},{text:"Linux",prefix:"linux/",collapsible:!0,icon:"linux",children:["docker","git","linux","mysql","nginx","shell","server"]},{text:"Try",prefix:"try/",collapsible:!0,icon:"support",children:["antlr","english","flutter","python","rust","jiazhao"]},{text:"Web",prefix:"web/",collapsible:!0,icon:"leaf",children:["axios","css","electron","node","vite","vue"]}],"/util/":["dev","common"]},resolvePrefix=($="",E="")=>_e(E)?E:`${ensureEndingSlash($)}${E}`,headerToSidebarItem=($,E)=>{const F=usePageData();return{type:"heading",text:$.title,link:`${F.value.path}#${$.slug}`,children:headersToSidebarItemChildren($.children,E)}},headersToSidebarItemChildren=($,E)=>E>0?$.map(F=>headerToSidebarItem(F,E-1)):[],resolveHeadingSidebarItems=$=>{const E=usePageData();return headersToSidebarItemChildren(E.value.headers,$)},resolveArraySidebarItems=($,E,F="")=>{const j=usePageData(),N=(B,Z=F)=>{var X;const Q=isString$1(B)?useAutoLink(resolvePrefix(Z,B)):B.link?{...B,...isLinkExternal(B.link)?{}:{link:useAutoLink(resolvePrefix(Z,B.link)).link}}:B;if("children"in Q){const ae=resolvePrefix(Z,Q.prefix),le=Q.children==="structure"?sidebarData[ae]:Q.children;return{type:"group",...Q,prefix:ae,children:le.map(ie=>N(ie,ae))}}return{type:"page",...Q,children:Q.link===j.value.path?headersToSidebarItemChildren(((X=j.value.headers[0])==null?void 0:X.level)===1?j.value.headers[0].children:j.value.headers,E):[]}};return $.map(B=>N(B))},resolveMultiSidebarItems=($,E)=>{const F=usePageData(),j=at($).sort((N,B)=>B.length-N.length);for(const N of j)if(_t(decodeURI(F.value.path),N)){const B=$[N];return B?resolveArraySidebarItems(B==="structure"?sidebarData[N]:B==="heading"?resolveHeadingSidebarItems(E):B,E,N):[]}return console.warn(`${F.value.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const $=useRouteLocale(),E=usePageFrontmatter(),F=useThemeLocaleData(),j=E.value.home?!1:E.value.sidebar??F.value.sidebar??"structure",N=E.value.headerDepth??F.value.headerDepth??2;return j===!1?[]:j==="heading"?resolveHeadingSidebarItems(N):j==="structure"?resolveArraySidebarItems(sidebarData[$.value],N,$.value):isArray(j)?resolveArraySidebarItems(j,N):isPlainObject(j)?resolveMultiSidebarItems(j,N):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const $=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,$)},useSidebarItems=()=>{const $=inject(sidebarItemsSymbol);if(!$)throw new Error("useSidebarItems() is called without provider.");return $},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup($){const E=useRoute();return()=>[renderItem($.config,{class:["sidebar-link",`sidebar-${$.config.type}`,{active:isActiveSidebarItem(E,$.config,!0)}],exact:!0}),renderChildren$1($.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup($,{emit:E}){const F=useRoute(),j=computed(()=>isActiveSidebarItem(F,$.config)),N=computed(()=>isActiveSidebarItem(F,$.config,!0));return()=>{const{collapsible:B,children:Z=[],icon:Q,prefix:X,link:ae,text:le}=$.config;return h$2("section",{class:"sidebar-group"},[h$2(B?"button":"p",{class:["sidebar-heading",{clickable:B||ae,exact:N.value,active:j.value}],...B?{onClick:()=>E("toggle"),onKeydown:ie=>{ie.key==="Enter"&&E("toggle")}}:{}},[h$2(HopeIcon,{icon:Q}),ae?h$2(RouterLink,{to:ae,class:"title"},()=>le):h$2("span",{class:"title"},le),B?h$2("span",{class:["arrow",$.open?"down":"end"]}):null]),$.open||!B?h$2(SidebarLinks,{key:X,config:Z}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup($){const E=useRoute(),F=ref(-1),j=N=>{F.value=N===F.value?-1:N};return watch(()=>E.path,()=>{const N=$.config.findIndex(B=>isMatchedSidebarItem(E,B));F.value=N},{immediate:!0,flush:"post"}),()=>h$2("ul",{class:"sidebar-links"},$.config.map((N,B)=>h$2("li",N.type==="group"?h$2(SidebarGroup,{config:N,open:B===F.value,onToggle:()=>j(B)}):h$2(SidebarChild,{config:N}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup($,{slots:E}){const F=useRoute(),j=useThemeLocaleData(),N=useSidebarItems(),B=ref();return onMounted(()=>{watch(()=>F.hash,Z=>{const Q=document.querySelector(`.sidebar a.sidebar-link[href="${F.path}${Z}"]`);if(!Q)return;const{top:X,height:ae}=B.value.getBoundingClientRect(),{top:le,height:ie}=Q.getBoundingClientRect();le<X?Q.scrollIntoView(!0):le+ie>X+ae&&Q.scrollIntoView(!1)})}),()=>{var Z,Q,X;return h$2("aside",{class:["sidebar",{"hide-icon":j.value.sidebarIcon===!1}],id:"sidebar",ref:B},[(Z=E.top)==null?void 0:Z.call(E),((Q=E.default)==null?void 0:Q.call(E))||h$2(SidebarLinks,{config:N.value}),(X=E.bottom)==null?void 0:X.call(E)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup($,{slots:E}){const F=useRouter(),j=usePageData(),N=usePageFrontmatter(),B=useThemeLocaleData(),{isMobile:Z,isWide:Q}=useWindowSize(),[X,ae]=useToggle(!1),[le,ie]=useToggle(!1),se=useSidebarItems(),oe=ref(),ue=useScrollLock(oe),ce=ref(!1),de=computed(()=>$.noNavbar||N.value.navbar===!1||B.value.navbar===!1?!1:Boolean(j.value.title||B.value.logo||B.value.repo||B.value.navbar)),ke=computed(()=>$.noSidebar?!1:N.value.sidebar!==!1&&se.value.length!==0&&!N.value.home),he={x:0,y:0},we=Ee=>{he.x=Ee.changedTouches[0].clientX,he.y=Ee.changedTouches[0].clientY},Ve=Ee=>{const Pe=Ee.changedTouches[0].clientX-he.x,je=Ee.changedTouches[0].clientY-he.y;Math.abs(Pe)>Math.abs(je)*1.5&&Math.abs(Pe)>40&&(Pe>0&&he.x<=80?ae(!0):ae(!1))},Re=computed(()=>N.value.home?!1:N.value.toc||B.value.toc!==!1&&N.value.toc!==!1),qe=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let We=0;return useEventListener("scroll",useThrottleFn(()=>{const Ee=qe();Ee<=58||Ee<We?ce.value=!1:We+200<Ee&&!X.value&&(ce.value=!0),We=Ee},300,!0)),watch(X,Ee=>{ue.value=Ee}),watch(Z,Ee=>{Ee||ae(!1)}),onMounted(()=>{oe.value=document.body;const Ee=F.afterEach(()=>{ae(!1)});onUnmounted(()=>{Ee()})}),()=>h$2(Vt("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):Rt,()=>{var Ee;return h$2("div",{class:["theme-container",{"no-navbar":!de.value,"no-sidebar":!ke.value&&!(E.sidebar||E.sidebarTop||E.sidebarBottom),"has-toc":Re.value,"hide-navbar":ce.value,"sidebar-collapsed":!Z.value&&!Q.value&&le.value,"sidebar-open":Z.value&&X.value},N.value.containerClass||""],onTouchStart:we,onTouchEnd:Ve},[de.value?h$2(Navbar,{onToggleSidebar:()=>ae()},{startBefore:()=>{var Pe;return(Pe=E.navbarStartBefore)==null?void 0:Pe.call(E)},startAfter:()=>{var Pe;return(Pe=E.navbarStartAfter)==null?void 0:Pe.call(E)},centerBefore:()=>{var Pe;return(Pe=E.navbarCenterBefore)==null?void 0:Pe.call(E)},centerAfter:()=>{var Pe;return(Pe=E.navbarCenterAfter)==null?void 0:Pe.call(E)},endBefore:()=>{var Pe;return(Pe=E.navbarEndBefore)==null?void 0:Pe.call(E)},endAfter:()=>{var Pe;return(Pe=E.navbarEndAfter)==null?void 0:Pe.call(E)},screenTop:()=>{var Pe;return(Pe=E.navScreenTop)==null?void 0:Pe.call(E)},screenBottom:()=>{var Pe;return(Pe=E.navScreenBottom)==null?void 0:Pe.call(E)}}):null,h$2(Transition,{name:"fade"},()=>X.value?h$2("div",{class:"sidebar-mask",onClick:()=>ae(!1)}):null),h$2(Transition,{name:"fade"},()=>Z.value?null:h$2("div",{class:"toggle-sidebar-wrapper",onClick:()=>ie()},h$2("span",{class:["arrow",le.value?"end":"start"]}))),h$2(Sidebar,{},{...E.sidebar?{default:()=>{var Pe;return(Pe=E.sidebar)==null?void 0:Pe.call(E)}}:{},top:()=>{var Pe;return(Pe=E.sidebarTop)==null?void 0:Pe.call(E)},bottom:()=>{var Pe;return(Pe=E.sidebarBottom)==null?void 0:Pe.call(E)}}),(Ee=E.default)==null?void 0:Ee.call(E),h$2(PageFooter)])})}}),featurePanel="",FeaturePanel=defineComponent({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup($){return()=>h$2("div",{class:"feature-panel"},[$.header?h$2("h2",{class:"feature-header"},$.header):null,$.items.length?h$2("div",{class:"feature-wrapper"},$.items.map(E=>{const F=[h$2("h3",[h$2(HopeIcon,{icon:E.icon}),h$2("span",{innerHTML:E.title})]),h$2("p",{innerHTML:E.details})];return E.link?isLinkExternal(E.link)?h$2("a",{class:"feature-item link",href:E.link,role:"navigation","aria-label":E.title,target:"_blank"},F):h$2(RouterLink,{class:"feature-item link",to:E.link,role:"navigation","aria-label":E.title},()=>F):h$2("div",{class:"feature-item"},F)})):null])}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup($,{slots:E}){const F=N=>{N.style.transition=`transform ${$.duration}s ease-in-out ${$.delay}s, opacity ${$.duration}s ease-in-out ${$.delay}s`,N.style.transform="translateY(-20px)",N.style.opacity="0"},j=N=>{N.style.transform="translateY(0)",N.style.opacity="1"};return()=>h$2($.type==="single"?Transition:TransitionGroup,{name:"drop",appear:$.appear,onAppear:F,onAfterAppear:j,onEnter:F,onAfterEnter:j,onBeforeLeave:F},()=>{var N;return(N=E.default)==null?void 0:N.call(E)})}}),heroInfo="",HeroInfo=defineComponent({name:"HeroInfo",setup($,{slots:E}){const F=usePageFrontmatter(),j=useSiteLocaleData(),N=computed(()=>F.value.heroText===!1?!1:F.value.heroText||j.value.title||"Hello"),B=computed(()=>F.value.tagline===!1?!1:F.value.tagline||j.value.description||"Welcome to your VuePress site"),Z=computed(()=>F.value.heroImage?withBase(F.value.heroImage):null),Q=computed(()=>F.value.heroImageDark?withBase(F.value.heroImageDark):null),X=computed(()=>F.value.heroAlt||N.value||"hero"),ae=computed(()=>F.value.actions??[]);return()=>{var le,ie;return h$2("header",{class:"hero-info-wrapper"},[((le=E.heroImage)==null?void 0:le.call(E))||h$2(DropTransition,{appear:!0,type:"group"},()=>[Z.value?h$2("img",{key:"light",class:{light:Q.value},src:Z.value,alt:X.value}):null,Q.value?h$2("img",{key:"dark",class:"dark",src:Q.value,alt:X.value}):null]),((ie=E.heroInfo)==null?void 0:ie.call(E))||h$2("div",{class:"hero-info"},[N.value?h$2(DropTransition,{appear:!0,delay:.04},()=>h$2("h1",{id:"main-title"},N.value)):null,B.value?h$2(DropTransition,{appear:!0,delay:.08},()=>h$2("p",{class:"description"},B.value)):null,ae.value.length?h$2(DropTransition,{appear:!0,delay:.12},()=>h$2("p",{class:"actions"},ae.value.map(se=>h$2(AutoLink,{class:["action-button",se.type||"default"],config:se,noExternalLinkIcon:!0})))):null])])}}}),MarkdownContent=({custom:$})=>h$2(Content,{class:["theme-hope-content",{custom:$}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const homePage="",HomePage=defineComponent({name:"HopePage",setup($,{slots:E}){const F=usePure(),j=usePageFrontmatter(),N=computed(()=>{const{features:B}=j.value;return isArray(B)?B.some(Z=>!("items"in Z))?[{items:B}]:B:[]});return()=>{var B,Z,Q;return h$2("main",{class:["home project",{pure:F.value}],id:"main-content","aria-labelledby":j.value.heroText===null?void 0:"main-title"},[(B=E.top)==null?void 0:B.call(E),h$2(HeroInfo),N.value.map(({header:X="",items:ae},le)=>h$2(DropTransition,{appear:!0,delay:.16+le*.08},()=>h$2(FeaturePanel,{header:X,items:ae}))),(Z=E.center)==null?void 0:Z.call(E),h$2(DropTransition,{appear:!0,delay:.16+N.value.length*.08},()=>h$2(MarkdownContent)),(Q=E.bottom)==null?void 0:Q.call(E)])}}}),getAncestorLinks=($,E)=>{const F=$.replace(E,"/").split("/"),j=[];let N=removeEndingSlash(E);return F.forEach((B,Z)=>{Z!==F.length-1?(N+=`${B}/`,j.push(N)):B!==""&&(N+=B,j.push(N))}),j},breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const $=useRouter(),E=usePageData(),F=useRouteLocale(),j=usePageFrontmatter(),N=useThemeLocaleData(),B=ref([]),Z=computed(()=>(j.value.breadcrumb||j.value.breadcrumb!==!1&&N.value.breadcrumb!==!1)&&B.value.length>1),Q=computed(()=>j.value.breadcrumbIcon||j.value.breadcrumbIcon!==!1&&N.value.breadcrumbIcon!==!1),X=()=>{const ae=$.getRoutes(),le=getAncestorLinks(E.value.path,F.value).map(ie=>{const se=ae.find(oe=>oe.path===ie);if(se){const{meta:oe,path:ue}=Ht($,se.path),ce=oe.s||oe.t;if(ce)return{title:ce,icon:oe.i,path:ue}}return null}).filter(ie=>ie!==null);le.length>1&&(B.value=le)};return onMounted(()=>{X(),watch(()=>E.value.path,X)}),()=>h$2("nav",{class:["breadcrumb",{disable:!Z.value}]},Z.value?h$2("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},B.value.map((ae,le)=>h$2("li",{class:{"is-active":B.value.length-1===le},property:"itemListElement",typeof:"ListItem"},[h$2(RouterLink,{to:ae.path,property:"item",typeof:"WebPage"},()=>[Q.value?h$2(HopeIcon,{icon:ae.icon}):null,h$2("span",{property:"name"},ae.title||"Unknown")]),h$2("meta",{property:"position",content:le+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=$=>$===!1?!1:isString$1($)?useAutoLink($,!0):isPlainObject($)?$:null,resolveFromSidebarItems=($,E,F)=>{const j=$.findIndex(N=>N.link===E);if(j!==-1){const N=$[j+F];return N!=null&&N.link?N:null}for(const N of $)if(N.children){const B=resolveFromSidebarItems(N.children,E,F);if(B)return B}return null},PageNav=defineComponent({name:"PageNav",setup(){const $=useThemeLocaleData(),E=usePageFrontmatter(),F=useSidebarItems(),j=usePageData(),N=useNavigate(),B=computed(()=>{const Q=resolveFromFrontmatterConfig(E.value.prev);return Q===!1?null:Q||($.value.prevLink===!1?null:resolveFromSidebarItems(F.value,j.value.path,-1))}),Z=computed(()=>{const Q=resolveFromFrontmatterConfig(E.value.next);return Q===!1?null:Q||($.value.nextLink===!1?null:resolveFromSidebarItems(F.value,j.value.path,1))});return useEventListener("keydown",Q=>{Q.altKey&&(Q.key==="ArrowRight"?Z.value&&(N(Z.value.link),Q.preventDefault()):Q.key==="ArrowLeft"&&B.value&&(N(B.value.link),Q.preventDefault()))}),()=>B.value||Z.value?h$2("nav",{class:"page-nav"},[B.value?h$2(AutoLink,{class:"prev",config:B.value},()=>{var Q,X;return[h$2("div",{class:"hint"},[h$2("span",{class:"arrow start"}),$.value.metaLocales.prev]),h$2("div",{class:"link"},[h$2(HopeIcon,{icon:(Q=B.value)==null?void 0:Q.icon}),(X=B.value)==null?void 0:X.text])]}):null,Z.value?h$2(AutoLink,{class:"next",config:Z.value},()=>{var Q,X;return[h$2("div",{class:"hint"},[$.value.metaLocales.next,h$2("span",{class:"arrow end"})]),h$2("div",{class:"link"},[(Q=Z.value)==null?void 0:Q.text,h$2(HopeIcon,{icon:(X=Z.value)==null?void 0:X.icon})])]}):null]):null}}),AuthorIcon=()=>h$2(G,{name:"author"},()=>h$2("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$2(G,{name:"calendar"},()=>h$2("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$2(G,{name:"category"},()=>h$2("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$2(G,{name:"eye"},()=>h$2("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$2(G,{name:"fire"},()=>h$2("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const PrintIcon=()=>h$2(G,{name:"print"},()=>h$2("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));PrintIcon.displayName="PrintIcon";const TagIcon$1=()=>h$2(G,{name:"tag"},()=>h$2("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$2(G,{name:"timer"},()=>h$2("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$2(G,{name:"word"},()=>[h$2("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$2("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const $=useThemeLocaleData();return computed(()=>$.value.metaLocales)},readingTimeLocales={"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:$,docsBranch:E,docsDir:F,filePathRelative:j,editLinkPattern:N})=>{if(!j)return null;const B=Ne($);let Z;return N?Z=N:B!==null&&(Z=editLinkPatterns[B]),Z?Z.replace(/:repo/,isLinkHttp($)?$:`https://github.com/${$}`).replace(/:branch/,E).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(F)}/${j}`)):null},useEditLink=()=>{const $=useThemeLocaleData(),E=usePageData(),F=usePageFrontmatter();return computed(()=>{const{repo:j,docsRepo:N=j,docsBranch:B="main",docsDir:Z="",editLink:Q,editLinkPattern:X=""}=$.value;if(!(F.value.editLink??Q??!0)||!N)return null;const le=resolveEditLink({docsRepo:N,docsBranch:B,docsDir:Z,editLinkPattern:X,filePathRelative:E.value.filePathRelative});return le?{text:$.value.metaLocales.editLink,link:le}:null})},useUpdateTime=()=>{const $=useSiteLocaleData(),E=useThemeLocaleData(),F=usePageData(),j=usePageFrontmatter();return computed(()=>{var Z,Q;return!(j.value.lastUpdated??E.value.lastUpdated??!0)||!((Z=F.value.git)!=null&&Z.updatedTime)?null:new Date((Q=F.value.git)==null?void 0:Q.updatedTime).toLocaleString($.value.lang)})},useContributors=()=>{const $=useThemeLocaleData(),E=usePageData(),F=usePageFrontmatter();return computed(()=>{var N;return F.value.contributors??$.value.contributors??!0?((N=E.value.git)==null?void 0:N.contributors)??null:null})},authorInfo="",AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup($){const E=useMetaLocale();return()=>$.author.length?h$2("span",{class:"page-author-info","aria-label":`${E.value.author}${$.pure?"":"🖊"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(AuthorIcon),h$2("span",$.author.map(F=>F.url?h$2("a",{class:"page-author-item",href:F.url,target:"_blank",rel:"noopener noreferrer"},F.name):h$2("span",{class:"page-author-item"},F.name))),h$2("span",{property:"author",content:$.author.map(F=>F.name).join(", ")})]):null}}),categoryInfo="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup($){const E=useRouter(),F=usePageData(),j=useMetaLocale(),N=(B,Z="")=>{Z&&F.value.path!==Z&&(B.preventDefault(),E.push(Z))};return()=>$.category.length?h$2("span",{class:"page-category-info","aria-label":`${j.value.category}${$.pure?"":"🌈"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(CategoryIcon$1),...$.category.map(({name:B,path:Z})=>h$2("span",{class:["page-category-item",{[`category${fe(B,9)}`]:!$.pure,clickable:Z}],role:Z?"navigation":"",onClick:Q=>N(Q,Z)},B)),h$2("meta",{property:"articleSection",content:$.category.map(({name:B})=>B).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup($){const E=usePageLang(),F=useMetaLocale();return()=>{var j,N;return $.date?h$2("span",{class:"page-date-info","aria-label":`${F.value.date}${$.pure?"":"📅"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(CalendarIcon),h$2("span",h$2(ClientOnly,()=>{var B;return $.localizedDate||((B=$.date.value)==null?void 0:B.toLocaleDateString(E.value))})),h$2("meta",{property:"datePublished",content:((N=(j=$.date)==null?void 0:j.value)==null?void 0:N.toISOString())||""})]):null}}}),originalInfo="",OriginalInfo=defineComponent({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup($){const E=useMetaLocale();return()=>$.isOriginal?h$2("span",{class:"page-original-info"},E.value.origin):null}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup($){const E=useRoute(),F=useMetaLocale(),j=ref(),N=ref(0);return useMutationObserver(j,()=>{const B=j.value.textContent;B&&!isNaN(Number(B))&&(N.value=Number(B))},{childList:!0}),()=>$.pageview?h$2("span",{class:"page-pageview-info","aria-label":`${F.value.views}${$.pure?"":"🔢"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(N.value<1e3?EyeIcon:FireIcon),h$2("span",{ref:j,class:"waline-pageview-count",id:"ArtalkPV","data-path":isString$1($.pageview)?$.pageview:withBase(E.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup($){const E=useMetaLocale(),F=ne(readingTimeLocales),j=computed(()=>{if(!$.readingTime)return null;const{minutes:N}=$.readingTime;return N<1?{text:F.value.less1Minute,time:"PT1M"}:{text:F.value.time.replace("$time",Math.round(N).toString()),time:`PT${Math.round(N)}M`}});return()=>j.value?h$2("span",{class:"page-reading-time-info","aria-label":`${E.value.readingTime}${$.pure?"":"⌛"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(TimerIcon),h$2("span",j.value.text),h$2("meta",{property:"timeRequired",content:j.value.time})]):null}}),tagInfo="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup($){const E=useRouter(),F=usePageData(),j=useMetaLocale(),N=(B,Z="")=>{Z&&F.value.path!==Z&&(B.preventDefault(),E.push(Z))};return()=>$.tag.length?h$2("span",{class:"page-tag-info","aria-label":`${j.value.tag}${$.pure?"":"🏷"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(TagIcon$1),...$.tag.map(({name:B,path:Z})=>h$2("span",{class:["page-tag-item",{[`tag${fe(B,9)}`]:!$.pure,clickable:Z}],role:Z?"navigation":"",onClick:Q=>N(Q,Z)},B)),h$2("meta",{property:"keywords",content:$.tag.map(({name:B})=>B).join(",")})]):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup($){const E=useMetaLocale(),F=ne(readingTimeLocales),j=computed(()=>{var B;return(B=$.readingTime)==null?void 0:B.words.toString()}),N=computed(()=>F.value.word.replace("$word",j.value||""));return()=>j.value?h$2("span",{class:"page-word-info","aria-label":`${E.value.words}${$.pure?"":"🔠"}`,...$.pure?{}:{"data-balloon-pos":"down"}},[h$2(WordIcon),h$2("span",N.value),h$2("meta",{property:"wordCount",content:j.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup($){const E=usePure();return()=>$.items?h$2("div",{class:"page-info"},$.items.map(F=>h$2(resolveComponent(`${F}Info`),{...$.info,pure:E.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const $=usePageData(),E=usePageFrontmatter(),F=useThemeLocaleData(),{info:j,items:N}=usePageInfo();return()=>h$2("div",{class:"page-title"},[h$2("h1",[F.value.titleIcon===!1?null:h$2(HopeIcon,{icon:E.value.icon}),$.value.title]),h$2(PageInfo,{info:j.value,...N.value===null?{}:{items:N.value}}),h$2("hr")])}}),EditIcon=()=>h$2(G,{name:"edit"},()=>[h$2("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$2("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const $=useThemeLocaleData(),E=useEditLink(),F=useUpdateTime(),j=useContributors();return()=>{const{metaLocales:N}=$.value;return h$2("footer",{class:"page-meta"},[E.value?h$2("div",{class:"meta-item edit-link"},h$2(AutoLink,{class:"label",config:E.value},{before:()=>h$2(EditIcon)})):null,h$2("div",{class:"meta-item git-info"},[F.value?h$2("div",{class:"update-time"},[h$2("span",{class:"label"},`${N.lastUpdated}: `),h$2(ClientOnly,()=>h$2("span",{class:"info"},F.value))]):null,j.value&&j.value.length?h$2("div",{class:"contributors"},[h$2("span",{class:"label"},`${N.contributors}: `),j.value.map(({email:B,name:Z},Q)=>[h$2("span",{class:"contributor",title:`email: ${B}`},Z),Q!==j.value.length-1?",":""])]):null])])}}}),printButton="",PrintButton=defineComponent({name:"PrintButton",setup(){const $=useThemeData(),E=useThemeLocaleData();return()=>$.value.print===!1?null:h$2("button",{class:"print-button",title:E.value.metaLocales.print,onClick:()=>{window.print()}},h$2(PrintIcon))}}),toc="",renderHeader=({title:$,level:E,slug:F})=>h$2(RouterLink,{to:`#${F}`,class:["toc-link",`level${E}`]},()=>$),renderChildren=($,E)=>{const F=useRoute();return $.length&&E>0?h$2("ul",{class:"toc-list"},$.map(j=>[h$2("li",{class:["toc-item",{active:Ce(F,`#${j.slug}`)}]},renderHeader(j)),renderChildren(j.children,E-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup($,{slots:E}){const F=useRoute(),j=usePageData(),N=useMetaLocale(),B=ref(),Z=Q=>{var X;(X=B.value)==null||X.scrollTo({top:Q,behavior:"smooth"})};return onMounted(()=>{watch(()=>F.hash,Q=>{if(B.value){const X=document.querySelector(`#toc a.toc-link[href$="${Q}"]`);if(!X)return;const{top:ae,height:le}=B.value.getBoundingClientRect(),{top:ie,height:se}=X.getBoundingClientRect();ie<ae?Z(B.value.scrollTop+ie-ae):ie+se>ae+le&&Z(B.value.scrollTop+ie+se-ae-le)}})}),()=>{var X,ae;const Q=$.items.length?renderChildren($.items,$.headerDepth):j.value.headers?renderChildren(j.value.headers,$.headerDepth):null;return Q?h$2("div",{class:"toc-place-holder"},[h$2("aside",{id:"toc"},[(X=E.before)==null?void 0:X.call(E),h$2("div",{class:"toc-header"},[N.value.toc,h$2(PrintButton)]),h$2("div",{class:"toc-wrapper",ref:B},Q),(ae=E.after)==null?void 0:ae.call(E)])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup($,{slots:E}){const F=usePageFrontmatter(),{isDarkmode:j}=useDarkmode(),N=useThemeLocaleData(),B=computed(()=>F.value.toc||F.value.toc!==!1&&N.value.toc!==!1);return()=>h$2("main",{class:"page",id:"main-content"},h$2(Vt("LocalEncrypt")?resolveComponent("LocalEncrypt"):Rt,()=>{var Z,Q,X,ae;return[(Z=E.top)==null?void 0:Z.call(E),h$2(BreadCrumb),h$2(PageTitle),B.value?h$2(TOC,{headerDepth:F.value.headerDepth??N.value.headerDepth??2},{before:()=>{var le;return(le=E.tocBefore)==null?void 0:le.call(E)},after:()=>{var le;return(le=E.tocAfter)==null?void 0:le.call(E)}}):null,(Q=E.contentBefore)==null?void 0:Q.call(E),h$2(MarkdownContent),(X=E.contentAfter)==null?void 0:X.call(E),h$2(PageMeta),h$2(PageNav),Vt("CommentService")?h$2(resolveComponent("CommentService"),{darkmode:j.value}):null,(ae=E.bottom)==null?void 0:ae.call(E)]}))}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup($){const E=usePageData(),F=useThemeLocaleData(),j=ref(),N=({target:B})=>{const Z=document.querySelector(B.hash);if(Z){const Q=()=>{Z.removeAttribute("tabindex"),Z.removeEventListener("blur",Q)};Z.setAttribute("tabindex","-1"),Z.addEventListener("blur",Q),Z.focus(),window.scrollTo(0,0)}};return onMounted(()=>{watch(()=>E.value.path,()=>j.value.focus())}),()=>[h$2("span",{ref:j,tabindex:"-1"}),h$2("a",{href:`#${$.content}`,class:"skip-link sr-only",onClick:N},F.value.routeLocales.skipToContent)]}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup($,{slots:E}){const{resolve:F,pending:j}=useScrollPromise();return()=>h$2(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:F,onBeforeLeave:j},()=>{var N;return(N=E.default)==null?void 0:N.call(E)})}}),Layout=defineComponent({name:"Layout",setup(){const $=useThemeData(),E=useThemeLocaleData(),F=usePageData(),j=usePageFrontmatter(),{isMobile:N}=useWindowSize(),B=computed(()=>{var Z,Q;return((Z=E.value.blog)==null?void 0:Z.sidebarDisplay)||((Q=$.value.blog)==null?void 0:Q.sidebarDisplay)||"mobile"});return()=>[h$2(SkipLink),h$2(CommonWrapper,{},{default:()=>j.value.home?h$2(HomePage):h$2(FadeSlideY,()=>h$2(NormalPage,{key:F.value.path})),...B.value!=="none"?{navScreenBottom:()=>h$2(resolveComponent("BloggerInfo"))}:{},...!N.value&&B.value==="always"?{sidebar:()=>h$2(resolveComponent("BloggerInfo"))}:{}})]}}),notFoundHint="",NotFoundHint=defineComponent({name:"NotFoundHint",setup(){const $=useThemeLocaleData(),E=()=>{const F=$.value.routeLocales.notFoundMsg;return F[Math.floor(Math.random()*F.length)]};return()=>h$2("div",{class:"not-found-hint"},[h$2("p",{class:"error-code"},"404"),h$2("h1",{class:"error-title"},$.value.routeLocales.notFoundTitle),h$2("p",{class:"error-hint"},E())])}}),notFound="",NotFound=defineComponent({name:"NotFound",setup($,{slots:E}){const F=useRouteLocale(),j=useThemeLocaleData(),{navigate:N}=useLink({to:j.value.home??F.value});return()=>[h$2(SkipLink),h$2(CommonWrapper,{noSidebar:!0},()=>{var B;return h$2("main",{class:"page not-found",id:"main-content"},((B=E.default)==null?void 0:B.call(E))||[h$2(NotFoundHint),h$2("div",{class:"actions"},[h$2("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},j.value.routeLocales.back),h$2("button",{class:"action-button",onClick:()=>N()},j.value.routeLocales.home)])])})]}}),index="",icons={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{}},"/en/":{path:"/en/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}},"/en/":{path:"/en/tag/",map:{}}}},typeMap={article:{"/":{path:"/article/",keys:["v-0d202a22","v-08700fb4","v-9376cbd8","v-50eda543","v-1296d022","v-34c0cc3a","v-6b01bef8","v-4bd5befb","v-3dc19728","v-9d9130cc","v-5ff88586","v-0afa9360","v-0a822add","v-566689bd","v-50b2aeca","v-0221a8ad","v-33afe9f2","v-eadc129a","v-156a1114","v-74d2721e","v-ec4f77b0","v-74fcd9ee","v-2e75823a","v-9d9383da","v-67d16688","v-d7188082","v-05aa60bc","v-655dabc9","v-40662ab6","v-20932f22","v-73096696","v-470743c9","v-97ce3324","v-39c90182","v-0afe37c4","v-a86ab80e","v-e2d863ca","v-f4a23b22","v-ce60a5b4","v-eb998da4","v-e295e46e","v-6261669c","v-ff9673f2","v-e4f84858","v-53d99f9f","v-0ea8a1d4","v-37e7ddac","v-6485064d","v-9c987956","v-71361d27","v-4a160b56","v-13b6c6a9","v-157e5c3f","v-eff126fe","v-855c2bc2","v-15351731","v-03aa6f39","v-6ab5d8fc","v-3f92c263","v-03a09d9f","v-277b3408","v-6b7873d0","v-7829234e","v-566cfcec","v-42dddec2","v-0d6a9cd2","v-1a97af14","v-0167aec8","v-d8862ffc","v-883c5c18","v-4a5f1fe4","v-eeac3bce","v-0439749c","v-4331a9ae","v-a39c4cfa","v-145ac574"]},"/en/":{path:"/en/article/",keys:["v-61a15761","v-5fec7ec2","v-5e37a623","v-5c82cd84","v-5acdf4e5","v-59191c46","v-576443a7","v-55af6b08","v-53fa9269","v-5245b9ca","v-a5987ae0","v-0a92777c","v-a9022c1e","v-ac6bdd5c","v-afd58e9a","v-b33f3fd8","v-b6a8f116","v-ba12a254","v-bd7c5392","v-e4904468","v-c0e604d0","v-9b94b2c8","v-72f1067a","v-2fbe537d","v-987b21a6"]}},star:{"/":{path:"/star/",keys:[]},"/en/":{path:"/en/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-0d202a22","v-08700fb4","v-9376cbd8","v-50eda543","v-1296d022","v-34c0cc3a","v-6b01bef8","v-4bd5befb","v-3dc19728","v-9d9130cc","v-5ff88586","v-0afa9360","v-0a822add","v-566689bd","v-50b2aeca","v-0221a8ad","v-33afe9f2","v-eadc129a","v-156a1114","v-74d2721e","v-ec4f77b0","v-74fcd9ee","v-2e75823a","v-9d9383da","v-67d16688","v-d7188082","v-05aa60bc","v-655dabc9","v-40662ab6","v-20932f22","v-73096696","v-470743c9","v-97ce3324","v-39c90182","v-0afe37c4","v-a86ab80e","v-e2d863ca","v-f4a23b22","v-ce60a5b4","v-eb998da4","v-e295e46e","v-6261669c","v-ff9673f2","v-e4f84858","v-53d99f9f","v-0ea8a1d4","v-37e7ddac","v-6485064d","v-9c987956","v-71361d27","v-4a160b56","v-13b6c6a9","v-157e5c3f","v-eff126fe","v-855c2bc2","v-15351731","v-03aa6f39","v-6ab5d8fc","v-3f92c263","v-03a09d9f","v-277b3408","v-6b7873d0","v-7829234e","v-566cfcec","v-42dddec2","v-0d6a9cd2","v-1a97af14","v-0167aec8","v-d8862ffc","v-883c5c18","v-4a5f1fe4","v-eeac3bce","v-0439749c","v-4331a9ae","v-a39c4cfa","v-145ac574"]},"/en/":{path:"/en/timeline/",keys:["v-61a15761","v-5fec7ec2","v-5e37a623","v-5c82cd84","v-5acdf4e5","v-59191c46","v-576443a7","v-55af6b08","v-53fa9269","v-5245b9ca","v-a5987ae0","v-0a92777c","v-a9022c1e","v-ac6bdd5c","v-afd58e9a","v-b33f3fd8","v-b6a8f116","v-ba12a254","v-bd7c5392","v-e4904468","v-c0e604d0","v-9b94b2c8","v-72f1067a","v-2fbe537d","v-987b21a6"]}}},_=ref(categoryMap),k=($="")=>{const E=usePageData(),F=useRouter(),j=useRouteLocale();return computed(()=>{var N;const B=$||((N=usePageFrontmatter().value.blog)==null?void 0:N.key)||"";if(!B)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const Z=F.getRoutes();if(!_.value[B])throw new Error(`useBlogCategory: key ${B} is invalid`);const Q=_.value[B][j.value],X={path:Q.path,map:{}};for(const ae in Q.map){const le=Q.map[ae];X.map[ae]={path:le.path,items:[]};for(const ie of le.keys){const se=Z.find(({name:oe})=>oe===ie);if(se){const oe=Ht(F,se.path);X.map[ae].items.push({path:oe.path,info:oe.meta})}}E.value.path===le.path&&(X.currentItems=X.map[ae].items)}return X})},c$1=ref(typeMap),C=($="")=>{const E=useRouter(),F=useRouteLocale();return computed(()=>{var j;const N=$||((j=usePageFrontmatter().value.blog)==null?void 0:j.key)||"";if(!N)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!c$1.value[N])throw new Error(`useBlogType: key ${$} is invalid`);const B=E.getRoutes(),Z=c$1.value[N][F.value],Q={path:Z.path,items:[]};for(const X of Z.keys){const ae=B.find(({name:le})=>le===X);if(ae){const le=Ht(E,ae.path);Q.items.push({path:le.path,info:le.meta})}}return Q})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const $=inject(categoryMapSymbol);if(!$)throw new Error("useCategoryMap() is called without provider.");return $},setupCategoryMap=()=>{const $=k("category");provide(categoryMapSymbol,$)},useBlogOptions=()=>{const $=useThemeData(),E=useThemeLocaleData();return computed(()=>({...$.value.blog,...E.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const $=inject(tagMapSymbol);if(!$)throw new Error("useTagMap() is called without provider.");return $},setupTagMap=()=>{const $=k("tag");provide(tagMapSymbol,$)},useArticleAuthor=$=>{const E=useThemeLocaleData();return computed(()=>{const{["a"]:F}=$.value;return F?De(F):F===!1?[]:De(E.value.author,!1)})},useArticleCategory=$=>{const E=useCategoryMap();return computed(()=>xe($.value.c).map(F=>({name:F,path:E.value.map[F].path})))},useArticleTag=$=>{const E=useTagMap();return computed(()=>Ie($.value.g).map(F=>({name:F,path:E.value.map[F].path})))},useArticleDate=$=>computed(()=>{const{["d"]:E}=$.value;return E?ot(E):null}),useArticleInfo=$=>{const E=toRef($,"info"),F=useBlogOptions(),j=useArticleAuthor(E),N=useArticleCategory(E),B=useArticleTag(E),Z=useArticleDate(E),Q=computed(()=>({author:j.value,category:N.value,date:Z.value,localizedDate:E.value.l||"",tag:B.value,isOriginal:E.value.o||!1,readingTime:E.value.r||null,pageview:$.path})),X=computed(()=>F.value.articleInfo);return{info:Q,items:X}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const $=inject(articlesSymbol);if(!$)throw new Error("useArticles() is called without provider.");return $},setupArticles=()=>{const $=C("article");provide(articlesSymbol,$)},starsSymbol=Symbol.for("stars"),useStars=()=>{const $=inject(starsSymbol);if(!$)throw new Error("useStars() is called without provider.");return $},setupStars=()=>{const $=C("star");provide(starsSymbol,$)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const $=inject(timelinesSymbol);if(!$)throw new Error("useTimelines() is called without provider.");return $},setupTimelines=()=>{const $=C("timeline"),E=computed(()=>{const F=[];return $.value.items.forEach(({info:j,path:N})=>{var X;const{year:B,month:Z,day:Q}=((X=ot(j.d))==null?void 0:X.info)||{};B&&Z&&Q&&((!F[0]||F[0].year!==B)&&F.unshift({year:B,items:[]}),F[0].items.push({date:`${Z}/${Q}`,info:j,path:N}))}),{...$.value,config:F.reverse()}});provide(timelinesSymbol,E)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const $=useBlogOptions(),E=usePure(),F=computed(()=>{const j=$.value.medias;return j?Tt(j).map(([N,B])=>({name:N,icon:icons[N],url:B})):[]});return()=>F.value.length?h$2("div",{class:"social-media-wrapper"},F.value.map(({name:j,icon:N,url:B})=>h$2("a",{class:"social-media",href:B,rel:"noopener noreferrer",target:"_blank","aria-label":j,...E.value?{}:{"data-balloon-pos":"up"},innerHTML:N}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const $=useBlogOptions(),E=useSiteLocaleData(),F=useThemeLocaleData(),j=useArticles(),N=useCategoryMap(),B=useTagMap(),Z=useTimelines(),Q=useNavigate(),X=computed(()=>{var se;return $.value.name||((se=De(F.value.author)[0])==null?void 0:se.name)||E.value.title}),ae=computed(()=>$.value.avatar||F.value.logo),le=computed(()=>F.value.blogLocales),ie=computed(()=>$.value.intro);return()=>h$2("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$2("div",{class:"blogger",...ie.value?{style:{cursor:"pointer"},"aria-label":le.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>Q(ie.value)}:{}},[ae.value?h$2("img",{class:["blogger-avatar",{round:$.value.roundAvatar}],src:withBase(ae.value),property:"image",alt:"Blogger Avatar"}):null,X.value?h$2("div",{class:"blogger-name",property:"name"},X.value):null,$.value.description?h$2("div",{class:"blogger-description",innerHTML:$.value.description}):null,ie.value?h$2("meta",{property:"url",content:withBase(ie.value)}):null]),h$2("div",{class:"num-wrapper"},[h$2("div",{onClick:()=>Q(j.value.path)},[h$2("div",{class:"num"},j.value.items.length),h$2("div",le.value.article)]),h$2("div",{onClick:()=>Q(N.value.path)},[h$2("div",{class:"num"},at(N.value.map).length),h$2("div",le.value.category)]),h$2("div",{onClick:()=>Q(B.value.path)},[h$2("div",{class:"num"},at(B.value.map).length),h$2("div",le.value.tag)]),h$2("div",{onClick:()=>Q(Z.value.path)},[h$2("div",{class:"num"},Z.value.items.length),h$2("div",le.value.timeline)])]),h$2(SocialMedia)])}}),CategoryIcon=()=>h$2(G,{name:"category"},()=>h$2("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$2(G,{name:"tag"},()=>h$2("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$2(G,{name:"timeline"},()=>h$2("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$2(G,{name:"slides"},()=>h$2("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$2(G,{name:"sticky"},()=>[h$2("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$2(G,{name:"article"},()=>h$2("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$2(G,{name:"book"},()=>h$2("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$2(G,{name:"link"},()=>h$2("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$2(G,{name:"project"},()=>h$2("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$2(G,{name:"friend"},()=>h$2("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$2(G,{name:"slide-down"},()=>h$2("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$2("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$2(G,{name:"lock"},()=>h$2("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup($){const E=toRef($,"info"),{info:F,items:j}=useArticleInfo($);return()=>h$2("div",{class:"article-item"},h$2("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[E.value.u?h$2(StickyIcon):null,h$2(RouterLink,{to:$.path},()=>[h$2("header",{class:"title"},[E.value.n?h$2(LockIcon):null,E.value.y==="s"?h$2(SlideIcon):null,h$2("span",{property:"headline"},E.value.t),E.value.v?h$2("meta",{property:"image",content:withBase(E.value.v)}):null])]),E.value.e?h$2("div",{class:"article-excerpt",innerHTML:E.value.e}):null,h$2("hr",{class:"hr"}),h$2(PageInfo,{info:F.value,...j.value?{items:j.value}:{}})]))}}),message="",pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup($,{emit:E}){let F;const j=useThemeLocaleData(),N=ref(""),B=computed(()=>j.value.paginationLocales),Z=computed(()=>Math.ceil($.total/$.perPage)),Q=computed(()=>Boolean(Z.value)&&Z.value!==1),X=computed(()=>Z.value<7?!1:$.current>4),ae=computed(()=>Z.value<7?!1:$.current<Z.value-3),le=computed(()=>{const{current:oe}=$;let ue=1,ce=Z.value;const de=[];Z.value>=7&&(oe<=4&&oe<Z.value-3?(ue=1,ce=5):oe>4&&oe>=Z.value-3?(ce=Z.value,ue=Z.value-4):Z.value>7&&(ue=oe-2,ce=oe+2));for(let ke=ue;ke<=ce;ke++)de.push(ke);return de}),ie=oe=>E("updateCurrentPage",oe),se=oe=>{const ue=parseInt(oe);ue<=Z.value&&ue>0?ie(ue):F.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${B.value.errorText.replace(/\$page/g,Z.value.toString())}`)};return onMounted(()=>{F=new Te}),()=>h$2("div",{class:"pagination-wrapper"},Q.value?h$2("div",{class:"pagination-list"},[h$2("div",{class:"page-number"},[$.current>1?h$2("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>ie($.current-1)},B.value.prev):null,...X.value?[h$2("div",{role:"navigation",onClick:()=>ie(1)},1),h$2("div",{class:"ellipsis"},"...")]:[],...le.value.map(oe=>h$2("div",{key:oe,class:{active:$.current===oe},role:"navigation",onClick:()=>ie(oe)},oe)),...ae.value?[h$2("div",{class:"ellipsis"},"..."),h$2("div",{role:"navigation",onClick:()=>ie(Z.value)},Z.value)]:[],$.current<Z.value?h$2("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>ie($.current+1)},B.value.next):null]),h$2("div",{class:"navigate-wrapper"},[h$2("label",{for:"navigation-text"},`${B.value.navigate}: `),h$2("input",{id:"navigation-text",value:N.value,onInput:({target:oe})=>{N.value=oe.value},onKeydown:oe=>{oe.key==="Enter"&&(oe.preventDefault(),se(N.value))}}),h$2("button",{class:"navigate",role:"navigation",title:B.value.action,onClick:()=>se(N.value)},B.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup($){const E=useRoute(),F=useRouter(),j=useBlogOptions(),N=ref(1),B=computed(()=>j.value.articlePerPage||10),Z=computed(()=>$.items.slice((N.value-1)*B.value,N.value*B.value)),Q=X=>{N.value=X;const ae={...E.query};ae.page===X.toString()||X===1&&!ae.page||(X===1?delete ae.page:ae.page=X.toString(),F.push({path:E.path,query:ae}))};return onMounted(()=>{const{page:X}=E.query;Q(X?Number(X):1),watch(N,()=>{const ae=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,ae)},100)})}),()=>h$2("div",{id:"article-list",class:"article-wrapper"},Z.value.length?[...Z.value.map(({info:X,path:ae},le)=>h$2(DropTransition,{appear:!0,delay:le*.04},()=>h$2(ArticleItem,{key:ae,info:X,path:ae}))),h$2(Pagination,{current:N.value,perPage:B.value,total:$.items.length,onUpdateCurrentPage:Q})]:h$2(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const $=usePageData(),E=useCategoryMap();return()=>h$2("ul",{class:"category-list-wrapper"},Tt(E.value.map).map(([F,{path:j,items:N}])=>h$2("li",{class:["category",`category${fe(F,9)}`,{active:j===$.value.path}]},h$2(RouterLink,{to:j},()=>[F,h$2("span",{class:"category-num"},N.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const $=usePageFrontmatter(),E=useTagMap(),F=j=>{var N;return j===((N=$.value.blog)==null?void 0:N.name)};return()=>h$2("ul",{class:"tag-list-wrapper"},Tt(E.value.map).map(([j,{path:N,items:B}])=>h$2("li",{class:["tag",`tag${fe(j,9)}`,{active:F(j)}]},h$2(RouterLink,{to:N},()=>[j,h$2("span",{class:"tag-num"},B.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const $=useThemeLocaleData(),E=useTimelines(),F=useNavigate(),j=computed(()=>$.value.blogLocales.timeline);return()=>h$2("div",{class:"timeline-list-wrapper"},[h$2("div",{class:"timeline-list-title",onClick:()=>F(E.value.path)},[h$2(TimelineIcon),h$2("span",{class:"num"},E.value.items.length),j.value]),h$2("hr"),h$2("div",{class:"timeline-content"},h$2("ul",{class:"timeline-list"},E.value.config.map(({year:N,items:B},Z)=>h$2(DropTransition,{appear:!0,delay:.08*(Z+1)},()=>h$2("li",[h$2("h3",{class:"timeline-year"},N),h$2("ul",{class:"timeline-year-wrapper"},B.map(({date:Q,info:X,path:ae})=>h$2("li",{class:"timeline-item"},[h$2("span",{class:"timeline-date"},Q),h$2(RouterLink,{class:"timeline-title",to:ae},()=>X.t)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const $=useThemeLocaleData(),E=useArticles(),F=useCategoryMap(),j=computed(()=>at(F.value.map).length),N=useStars(),B=useTagMap(),Z=computed(()=>at(B.value.map).length),Q=useNavigate(),X=ref("article"),ae=computed(()=>$.value.blogLocales),le=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$2("div",{class:"blog-info-list"},[h$2("div",{class:"blog-type-wrapper"},le.map(([ie,se])=>h$2("button",{class:"blog-type-button",onClick:()=>{X.value=ie}},h$2("div",{class:["icon-wrapper",{active:X.value===ie}],"aria-label":ae.value[ie],"data-balloon-pos":"up"},h$2(se))))),h$2(DropTransition,()=>X.value==="article"?h$2("div",{class:"sticky-article-wrapper"},[h$2("div",{class:"title",onClick:()=>Q(E.value.path)},[h$2(ArticleIcon),h$2("span",{class:"num"},E.value.items.length),ae.value.article]),h$2("hr"),h$2("ul",{class:"sticky-article-list"},N.value.items.map(({info:ie,path:se},oe)=>h$2(DropTransition,{appear:!0,delay:.08*(oe+1)},()=>h$2("li",{class:"sticky-article"},h$2(RouterLink,{to:se},()=>ie.t)))))]):X.value==="category"?h$2("div",{class:"category-wrapper"},[j.value?h$2("div",{class:"title",onClick:()=>Q(F.value.path)},[h$2(CategoryIcon),h$2("span",{class:"num"},j.value),ae.value.category]):null,h$2("hr"),h$2(DropTransition,{delay:.04},()=>h$2(CategoryList))]):X.value==="tag"?h$2("div",{class:"tag-wrapper"},[Z.value?h$2("div",{class:"title",onClick:()=>Q(B.value.path)},[h$2(TagIcon),h$2("span",{class:"num"},Z.value),ae.value.tag]):null,h$2("hr"),h$2(DropTransition,{delay:.04},()=>h$2(TagList))]):h$2(DropTransition,()=>h$2(TimelineList)))])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup($,{slots:E}){const{isMobile:F}=useWindowSize();return()=>[h$2(SkipLink),h$2(CommonWrapper,{noSidebar:!0},{default:()=>{var j;return(j=E.default)==null?void 0:j.call(E)},navScreenBottom:()=>h$2(BloggerInfo),...F.value?{sidebar:()=>h$2(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$2("aside",{class:"blog-info-wrapper"},[h$2(DropTransition,()=>h$2(BloggerInfo)),h$2(DropTransition,{delay:.04},()=>h$2(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const $=usePageData(),E=usePageFrontmatter(),F=useCategoryMap(),j=useTagMap(),N=computed(()=>E.value.blog||{}),B=computed(()=>{const{key:Q=""}=N.value;return Q==="category"?"CategoryList":Q==="tag"?"TagList":null}),Z=computed(()=>{const{name:Q="",key:X=""}=N.value;return X==="category"?Q?F.value.map[Q].items:[]:X==="tag"?Q?j.value.map[Q].items:[]:[]});return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,()=>B.value?h$2(resolveComponent(B.value)):null),N.value.name?h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{key:$.value.path,items:Z.value})):null]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),defaultHeroBgImagePath="/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const $=usePageHeadTitle(),E=usePageFrontmatter(),F=ref(),j=computed(()=>E.value.heroImage||null),N=computed(()=>E.value.heroFullScreen||!1),B=computed(()=>E.value.bgImage?withBase(E.value.bgImage):E.value.bgImage??defaultHeroBgImagePath);return()=>E.value.hero===!1?null:h$2("div",{ref:F,class:["blog-hero",{fullscreen:N.value,"no-bg":!B.value}]},[B.value?h$2("div",{class:"mask",style:{background:`url(${B.value}) center/cover no-repeat`,...E.value.bgImageStyle}}):null,h$2(DropTransition,{appear:!0,delay:.04},()=>j.value?h$2("img",{class:"hero-image",style:E.value.heroImageStyle,src:withBase(j.value),alt:E.value.heroAlt||"hero image"}):null),h$2(DropTransition,{appear:!0,delay:.08},()=>E.value.heroText===!1?null:h$2("h1",E.value.heroText||$.value)),h$2(DropTransition,{appear:!0,delay:.12},()=>E.value.tagline?h$2("p",{class:"description",innerHTML:E.value.tagline}):null),N.value?h$2("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:F.value.clientHeight,behavior:"smooth"})}},[h$2(SlideDownIcon),h$2(SlideDownIcon)]):null])}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const $=usePageFrontmatter(),E=usePure(),F=useNavigate(),j=(N="",B="icon")=>AVAILABLE_PROJECT_TYPES.includes(N)?h$2(resolveComponent(`${N}-icon`)):isLinkHttp(N)?h$2("img",{src:N,alt:B,class:"image"}):_e(N)?h$2("img",{src:withBase(N),alt:B,class:"image"}):h$2(HopeIcon,{icon:N});return()=>{var N;return(N=$.value.projects)!=null&&N.length?h$2("div",{class:"project-panel"},$.value.projects.map(({icon:B,link:Z,name:Q,desc:X},ae)=>h$2("div",{class:["project",{[`project${ae%9}`]:!E.value}],onClick:()=>F(Z)},[j(B,Q),h$2("div",{class:"name"},Q),h$2("div",{class:"desc"},X)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const $=useArticles();return()=>h$2("div",{class:"page blog"},[h$2(BlogHero),h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-home",id:"main-content"},[h$2(DropTransition,{appear:!0,delay:.16},()=>h$2(ProjectPanel)),h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{items:$.value.items}))]),h$2(DropTransition,{appear:!0,delay:.16},()=>h$2(InfoPanel))]),h$2(DropTransition,{appear:!0,delay:.28},()=>h$2(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$2(BlogWrapper,()=>h$2(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const $=usePageData(),E=useRouteLocale(),F=useThemeLocaleData(),j=useArticles(),N=useStars(),B=computed(()=>{const Z=F.value.blogLocales;return[{text:Z.all,path:j.value.path},{text:Z.star,path:N.value.path},...[].map(({key:Q,path:X})=>({text:Z[Q],path:X.replace(/^\//,E.value)}))]});return()=>h$2("ul",{class:"article-type-wrapper"},B.value.map(Z=>h$2("li",{class:["article-type",{active:Z.path===$.value.path}]},h$2(RouterLink,{to:Z.path},()=>Z.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const $=C(),E=usePageFrontmatter(),F=usePageData(),j=useArticles(),N=useStars(),B=computed(()=>{const{key:Z="",type:Q}=E.value.blog||{};return Z==="star"?N.value.items:Q==="type"&&Z?$.value.items:j.value.items});return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,()=>h$2(ArticleType)),h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(ArticleList,{key:F.value.path,items:B.value}))]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const $=useBlogOptions(),E=useThemeLocaleData(),F=useTimelines(),j=computed(()=>$.value.timeline||E.value.blogLocales.timelineTitle),N=computed(()=>F.value.config.map(({year:B})=>({title:B.toString(),level:2,slug:B.toString(),children:[]})));return()=>h$2("div",{class:"timeline-wrapper"},h$2("ul",{class:"timeline-content"},[h$2(DropTransition,()=>h$2("li",{class:"motto"},j.value)),h$2(TOC,{items:N.value}),...F.value.config.map(({year:B,items:Z},Q)=>h$2(DropTransition,{appear:!0,delay:.08*(Q+1),type:"group"},()=>[h$2("h3",{key:"title",id:B,class:"timeline-year-title"},h$2("span",B)),h$2("li",{key:"content",class:"timeline-year-list"},[h$2("ul",{class:"timeline-year-wrapper"},Z.map(({date:X,info:ae,path:le})=>h$2("li",{class:"timeline-item"},[h$2("span",{class:"timeline-date"},X),h$2(RouterLink,{class:"timeline-title",to:le},()=>ae.t)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$2(BlogWrapper,()=>h$2("div",{class:"page blog"},h$2("div",{class:"blog-page-wrapper"},[h$2("main",{class:"blog-main",id:"main-content"},[h$2(DropTransition,{appear:!0,delay:.24},()=>h$2(TimelineItems))]),h$2(DropTransition,{delay:.16},()=>h$2(InfoPanel))])))}}),layout="",passwordModal="",PasswordModal=defineComponent({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup($,{emit:E}){const F=usePageFrontmatter(),j=useThemeLocaleData(),N=ref(""),B=ref(!1),Z=ref(!1),Q=computed(()=>j.value.encryptLocales);let X=null;const ae=()=>{X&&clearTimeout(X),B.value=!1,E("verify",N.value,Z.value),nextTick().then(()=>{B.value=!0,X=setTimeout(()=>{B.value=!1},1e3)})};return()=>h$2("div",{class:["password-layer",{expand:$.full||F.value.home}]},h$2("div",{class:"password-modal"},[h$2("div",{class:["hint",{tried:B.value}]},B.value?Q.value.errorHint:h$2(LockIcon,{"aria-label":Q.value.iconLabel})),h$2("div",{class:"password"},[h$2("input",{type:"password",value:N.value,placeholder:Q.value.placeholder,onInput:({target:le})=>{N.value=le.value},onKeydown:({key:le})=>{le==="Enter"&&ae()}})]),h$2("div",{class:"remember-password"},[h$2("input",{type:"checkbox",value:Z.value,onChange:()=>Z.value=!Z.value}),Q.value.remember]),h$2("button",{class:"submit",onClick:()=>ae()},"OK")]))}}),r="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],e=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],n=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],o=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],s=($,E)=>{if(E<=0||E>$.length)throw Error(`Illegal len: ${E}`);let F,j,N=0;const B=[];for(;N<E;){if(F=255&$[N++],B.push(r[F>>2&63]),F=(3&F)<<4,N>=E){B.push(r[63&F]);break}if(j=255&$[N++],F|=j>>4&15,B.push(r[63&F]),F=(15&j)<<2,N>=E){B.push(r[63&F]);break}j=255&$[N++],F|=j>>6&3,B.push(r[63&F]),B.push(r[63&j])}return B.join("")},l=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,f=($,E,F,j)=>{let N,B=$[E],Z=$[E+1];return B^=F[0],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[1],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[2],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[3],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[4],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[5],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[6],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[7],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[8],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[9],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[10],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[11],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[12],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[13],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[14],N=j[B>>>24],N+=j[256|B>>16&255],N^=j[512|B>>8&255],N+=j[768|255&B],Z^=N^F[15],N=j[Z>>>24],N+=j[256|Z>>16&255],N^=j[512|Z>>8&255],N+=j[768|255&Z],B^=N^F[16],$[E]=Z^F[17],$[E+1]=B,$},i=($,E)=>{let F=0;for(let j=0;j<4;++j)F=F<<8|255&$[E],E=(E+1)%$.length;return{key:F,offp:E}},u=($,E,F)=>{const j=E.length,N=F.length;let B,Z=0,Q=[0,0];for(let X=0;X<j;X++)B=i($,Z),Z=B.offp,E[X]=E[X]^B.key;for(let X=0;X<j;X+=2)Q=f(Q,0,E,F),E[X]=Q[0],E[X+1]=Q[1];for(let X=0;X<N;X+=2)Q=f(Q,0,E,F),F[X]=Q[0],F[X+1]=Q[1]},h=($,E,F,j,N)=>{const B=o.slice(),Z=B.length;if(F<4||F>31){const se=new Error(`Illegal number of rounds (4-31): ${F}`);if(j===!1)return Promise.reject(se);throw se}if(E.length!==16){const se=new Error(`Illegal salt length: ${E.length} != 16`);if(j===!1)return Promise.reject(se);throw se}let Q,X;F=1<<F>>>0;let ae,le=0;Int32Array?(Q=new Int32Array(e),X=new Int32Array(n)):(Q=e.slice(),X=n.slice()),((se,oe,ue,ce)=>{const de=ue.length,ke=ce.length;let he,we=0,Ve=[0,0];for(let Re=0;Re<de;Re++)he=i(oe,we),we=he.offp,ue[Re]=ue[Re]^he.key;we=0;for(let Re=0;Re<de;Re+=2)he=i(se,we),we=he.offp,Ve[0]^=he.key,he=i(se,we),we=he.offp,Ve[1]^=he.key,Ve=f(Ve,0,ue,ce),ue[Re]=Ve[0],ue[Re+1]=Ve[1];for(let Re=0;Re<ke;Re+=2)he=i(se,we),we=he.offp,Ve[0]^=he.key,he=i(se,we),we=he.offp,Ve[1]^=he.key,Ve=f(Ve,0,ue,ce),ce[Re]=Ve[0],ce[Re+1]=Ve[1]})(E,$,Q,X);const ie=()=>{if(N&&N(le/F),!(le<F)){for(le=0;le<64;le++)for(ae=0;ae<Z>>1;ae++)f(B,ae<<1,Q,X);const se=[];for(le=0;le<Z;le++)se.push((B[le]>>24&255)>>>0),se.push((B[le]>>16&255)>>>0),se.push((B[le]>>8&255)>>>0),se.push((255&B[le])>>>0);return j===!1?Promise.resolve(se):se}{const se=Date.now();for(;le<F&&(le+=1,u($,Q,X),u(E,Q,X),!(Date.now()-se>100)););}if(j===!1)return new Promise(se=>l(()=>{ie().then(se)}))};if(j===!1)return ie();{let se;for(;;)if((se=ie())!==void 0)return se||[]}},p=($=10)=>{if(typeof $!="number")throw Error("Illegal arguments: "+typeof $);$<4?$=4:$>31&&($=31);const E=[];return E.push("$2a$"),$<10&&E.push("0"),E.push($.toString()),E.push("$"),E.push(s((F=>{try{let j;return(self.crypto||self.msCrypto).getRandomValues(j=new Uint32Array(F)),Array.prototype.slice.call(j)}catch{throw Error("WebCryptoAPI is not available")}})(16),16)),E.join("")};function g($,E,F,j){if(typeof $!="string"||typeof E!="string"){const ie=new Error("Invalid string / salt: Not a string");if(F===!1)return Promise.reject(ie);throw ie}let N,B;if(E.charAt(0)!=="$"||E.charAt(1)!=="2"){const ie=new Error("Invalid salt version: "+E.substring(0,2));if(F===!1)return Promise.reject(ie);throw ie}if(E.charAt(2)==="$")N=String.fromCharCode(0),B=3;else{if(N=E.charAt(2),N!=="a"&&N!=="b"&&N!=="y"||E.charAt(3)!=="$"){const ie=Error("Invalid salt revision: "+E.substring(2,4));if(F===!1)return Promise.reject(ie);throw ie}B=4}if(E.charAt(B+2)>"$"){const ie=new Error("Missing salt rounds");if(F===!1)return Promise.reject(ie);throw ie}const Z=10*parseInt(E.substring(B,B+1),10)+parseInt(E.substring(B+1,B+2),10),Q=E.substring(B+3,B+25),X=(ie=>{const se=[];let oe=0;var ue;return ue=ce=>{se.push(ce)},((ce,de)=>{let ke,he=null;for(;(ke=he!==null?he:ce())!==null;)ke>=55296&&ke<=57343&&(he=ce())!==null&&he>=56320&&he<=57343?(de(1024*(ke-55296)+he-56320+65536),he=null):de(ke);he!==null&&de(he)})(()=>oe>=ie.length?null:ie.charCodeAt(oe++),function(ce){((de,ke)=>{let he=null;for(typeof de=="number"&&(he=de,de=()=>null);he!==null||(he=de())!==null;)he<128?ke(127&he):he<2048?(ke(he>>6&31|192),ke(63&he|128)):he<65536?(ke(he>>12&15|224),ke(he>>6&63|128),ke(63&he|128)):(ke(he>>18&7|240),ke(he>>12&63|128),ke(he>>6&63|128),ke(63&he|128)),he=null})(ce,ue)}),se})($+=N>="a"?"\0":""),ae=((ie,se)=>{if(se<=0)throw Error(`Illegal len: ${se}`);const oe=ie.length;let ue,ce,de,ke,he,we,Ve=0,Re=0;const qe=[];for(;Ve<oe-1&&Re<se&&(we=ie.charCodeAt(Ve++),ue=we<t.length?t[we]:-1,we=ie.charCodeAt(Ve++),ce=we<t.length?t[we]:-1,ue!=-1&&ce!=-1)&&(he=ue<<2>>>0,he|=(48&ce)>>4,qe.push(String.fromCharCode(he)),!(++Re>=se||Ve>=oe))&&(we=ie.charCodeAt(Ve++),de=we<t.length?t[we]:-1,de!=-1)&&(he=(15&ce)<<4>>>0,he|=(60&de)>>2,qe.push(String.fromCharCode(he)),!(++Re>=se||Ve>=oe));)we=ie.charCodeAt(Ve++),ke=we<t.length?t[we]:-1,he=(3&de)<<6>>>0,he|=ke,qe.push(String.fromCharCode(he)),++Re;return qe.map(We=>We.charCodeAt(0))})(Q,16),le=ie=>{const se=[];return se.push("$2"),N>="a"&&se.push(N),se.push("$"),Z<10&&se.push("0"),se.push(Z.toString()),se.push("$"),se.push(s(ae,ae.length)),se.push(s(ie,4*o.length-1)),se.join("")};return F===!1?h(X,ae,Z,!1,j).then(ie=>le(ie)):le(h(X,ae,Z,!0,j))}const c=($,E=10)=>{if(typeof E=="number"&&(E=p(E)),typeof $!="string"||typeof E!="string")throw Error("Illegal arguments: "+typeof $+", "+typeof E);return g($,E,!0)},m=($,E)=>{if(typeof $!="string"||typeof E!="string")throw Error("Illegal arguments: "+typeof $+", "+typeof E);return E.length===60&&c($,E.substring(0,E.length-31))===E},useEncryptData=()=>{const $=useThemeData();return computed(()=>$.value.encrypt||{})},STORAGE_KEY$1="VUEPRESS_HOPE_GLOBAL_TOKEN",useGlobalEncrypt=()=>{const $=useEncryptData(),E=useStorage(STORAGE_KEY$1,""),F=useSessionStorage(STORAGE_KEY$1,""),j=computed(()=>{const{global:Z=!1,admin:Q=[]}=$.value;return Z&&Q.length>0}),N=computed(()=>{if(j.value){if(E.value)return $.value.admin.some(Z=>m(E.value,Z));if(F.value)return $.value.admin.some(Z=>m(F.value,Z))}return!1});return{isEncrypted:j,isDecrypted:N,validate:(Z,Q=!1)=>{(Q?E:F).value=Z}}},checkToken=($="",E)=>Boolean($)&&m($,E),STORAGE_KEY="VUEPRESS_HOPE_PATH_TOKEN",usePathEncrypt=()=>{const $=usePageData(),E=useEncryptData(),F=useStorage(STORAGE_KEY,{}),j=useSessionStorage(STORAGE_KEY,{}),N=X=>isPlainObject(E.value.config)?at(E.value.config).filter(ae=>_t(decodeURI(X),ae)).sort((ae,le)=>le.length-ae.length):[],B=X=>{const ae=N(X);if(ae.length>0){const{config:le={}}=E.value;return{isEncrypted:!0,isDecrypted:ae.some(ie=>F.value[ie]&&le[ie].some(se=>checkToken(F.value[ie],se))||j.value[ie]&&le[ie].some(se=>checkToken(j.value[ie],se)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:computed(()=>B($.value.path)),getStatus:B,validate:(X,ae=!1)=>{const{config:le={}}=E.value,ie=N($.value.path);for(const se of ie)if(le[se].filter(oe=>checkToken(X,oe))){(ae?F:j).value[se]=X;break}}}},GlobalEncrypt=defineComponent({name:"GlobalEncrypt",setup($,{slots:E}){const{isDecrypted:F,isEncrypted:j,validate:N}=useGlobalEncrypt(),B=ref(!1);return onMounted(()=>{B.value=!0}),()=>h$2(FadeSlideY,()=>{var Z,Q;return j.value?B.value?F.value?(Z=E.default)==null?void 0:Z.call(E):h$2(PasswordModal,{full:!0,onVerify:N}):null:(Q=E.default)==null?void 0:Q.call(E)})}}),LocalEncrypt=defineComponent({name:"LocalEncrypt",setup($,{slots:E}){const{status:F,validate:j}=usePathEncrypt(),N=ref(!1);return onMounted(()=>{N.value=!0}),()=>{var Q,X;const{isEncrypted:B,isDecrypted:Z}=F.value;return B?N.value?Z?((Q=E.default)==null?void 0:Q.call(E))||null:h$2(PasswordModal,{full:!0,onVerify:j}):null:((X=E.default)==null?void 0:X.call(E))||null}}}),q=()=>h$2(G,{name:"back"},()=>h$2("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),a=()=>h$2(G,{name:"home"},()=>h$2("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),slidePage="";var v=defineComponent({name:"SlidePage",setup(){const $=useRouter(),E=ref(!1),F=ref(),j=()=>{E.value=!E.value},N=()=>{E.value=!1},B=()=>{N(),window.history.go(-1)},Z=()=>{N(),$.push("/")};return onClickOutside(F,N),()=>h$2("div",{class:"presentation"},[h$2(Content),h$2("div",{ref:F,class:["menu",{active:E.value}]},[h$2("button",{class:"menu-button",onClick:()=>j()},h$2("span",{class:"icon"})),h$2("button",{class:"back-button",onClick:()=>B()},h$2(q)),h$2("button",{class:"home-button",onClick:()=>Z()},h$2(a))])])}});const clientConfig12=defineClientConfig({enhance:({app:$,router:E})=>{const{scrollBehavior:F}=E.options;E.options.scrollBehavior=async(...j)=>(await useScrollPromise().wait(),F(...j)),injectDarkmode($),$.component("HopeIcon",HopeIcon),$.component("BloggerInfo",BloggerInfo),$.component("GlobalEncrypt",GlobalEncrypt),$.component("LocalEncrypt",LocalEncrypt)},setup:()=>{setupDarkmode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:v}}),isFocusingTextControl=$=>$ instanceof Element?document.activeElement===$&&(["TEXTAREA","SELECT","INPUT"].includes($.tagName)||$.hasAttribute("contenteditable")):!1,isKeyMatched=($,E)=>E.some(F=>{if(isString$1(F))return F===$.key;const{key:j,ctrl:N=!1,shift:B=!1,alt:Z=!1}=F;return j===$.key&&N===$.ctrlKey&&B===$.shiftKey&&Z===$.altKey}),nonASCIIRegExp=/[^\x00-\x7F]/,splitWords=$=>$.split(/\s+/g).map(E=>E.trim()).filter(E=>!!E),escapeRegExp=$=>$.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),isQueryMatched=($,E)=>{const F=E.join(" "),j=splitWords($);if(nonASCIIRegExp.test($))return j.some(Z=>F.toLowerCase().indexOf(Z)>-1);const N=$.endsWith(" ");return new RegExp(j.map((Z,Q)=>j.length===Q+1&&!N?`(?=.*\\b${escapeRegExp(Z)})`:`(?=.*\\b${escapeRegExp(Z)}\\b)`).join("")+".+","gi").test(F)},useHotKeys=({input:$,hotKeys:E})=>{if(E.value.length===0)return;const F=j=>{$.value&&isKeyMatched(j,E.value)&&!isFocusingTextControl(j.target)&&(j.preventDefault(),$.value.focus())};onMounted(()=>{document.addEventListener("keydown",F)}),onBeforeUnmount(()=>{document.removeEventListener("keydown",F)})},searchIndex$1=[{title:"首页",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"博客技术栈🐔",slug:"博客技术栈",link:"#博客技术栈",children:[]},{level:2,title:"描述💒",slug:"描述",link:"#描述",children:[]},{level:2,title:"探索插件💢",slug:"探索插件",link:"#探索插件",children:[]}],path:"/blog/",pathLocale:"/",extraFields:[]},{title:"自述",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"堆栈😆",slug:"堆栈",link:"#堆栈",children:[{level:3,title:"栈🍎",slug:"栈",link:"#栈",children:[]},{level:3,title:"堆🍏",slug:"堆",link:"#堆",children:[]}]},{level:2,title:"网络协议❤️",slug:"网络协议",link:"#网络协议",children:[{level:3,title:"Http协议😃",slug:"http协议",link:"#http协议",children:[]}]}],path:"/blog/body.html",pathLocale:"/",extraFields:[]},{title:"Desc",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"博客数据🍒",slug:"博客数据",link:"#博客数据",children:[]}],path:"/blog/desc.html",pathLocale:"/",extraFields:[]},{title:"随笔",headers:[{level:2,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[{level:3,title:"ThreadPoolExecutor🍉",slug:"threadpoolexecutor",link:"#threadpoolexecutor",children:[]}]},{level:2,title:"框架理解💔",slug:"框架理解",link:"#框架理解",children:[]},{level:2,title:"名言✋",slug:"名言",link:"#名言",children:[]},{level:2,title:"正则表达式💔",slug:"正则表达式",link:"#正则表达式",children:[]},{level:2,title:"Bnf范式🐯",slug:"bnf范式",link:"#bnf范式",children:[]}],path:"/blog/random.html",pathLocale:"/",extraFields:[]},{title:"Video",headers:[{level:2,title:"觉得不错的b站视频👊",slug:"觉得不错的b站视频",link:"#觉得不错的b站视频",children:[]},{level:2,title:"Ok🌈",slug:"ok",link:"#ok",children:[]}],path:"/blog/video.html",pathLocale:"/",extraFields:[]},{title:"Front page",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍🐱",slug:"介绍",link:"#介绍",children:[{level:3,title:"标签⚡",slug:"标签",link:"#标签",children:[]},{level:3,title:"示例",slug:"示例",link:"#示例",children:[]},{level:3,title:"视频教学🐶",slug:"视频教学",link:"#视频教学",children:[]}]},{level:2,title:"功能🐔",slug:"功能",link:"#功能",children:[]},{level:2,title:"Where语句字段提示",slug:"where语句字段提示",link:"#where语句字段提示",children:[{level:3,title:"用法1",slug:"用法1",link:"#用法1",children:[]},{level:3,title:"用法2",slug:"用法2",link:"#用法2",children:[]}]},{level:2,title:"Json转结构体",slug:"json转结构体",link:"#json转结构体",children:[]},{level:2,title:"结构体转创建表",slug:"结构体转创建表",link:"#结构体转创建表",children:[]},{level:2,title:"Gin接口调试:👊",slug:"gin接口调试",link:"#gin接口调试",children:[]},{level:2,title:"Gin路由导航👊",slug:"gin路由导航",link:"#gin路由导航",children:[]},{level:2,title:"Gorm模板功能👊",slug:"gorm模板功能",link:"#gorm模板功能",children:[{level:3,title:"Easy模板变量🌟",slug:"easy模板变量",link:"#easy模板变量",children:[]},{level:3,title:"Mvc模板变量😆",slug:"mvc模板变量",link:"#mvc模板变量",children:[]},{level:3,title:"测试的平台🐈",slug:"测试的平台",link:"#测试的平台",children:[]},{level:3,title:"测试的数据库🌰",slug:"测试的数据库",link:"#测试的数据库",children:[]},{level:3,title:"生成代码示例🎁",slug:"生成代码示例",link:"#生成代码示例",children:[]}]},{level:2,title:"结尾🐒",slug:"结尾",link:"#结尾",children:[]}],path:"/plugins/gorm.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[{level:2,title:"重要",slug:"重要",link:"#重要",children:[]},{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"教程",slug:"教程",link:"#教程",children:[{level:3,title:"路由导航",slug:"路由导航",link:"#路由导航",children:[]},{level:3,title:"Java(自动)转Proto",slug:"java-自动-转proto",link:"#java-自动-转proto",children:[]},{level:3,title:"Java路由类转C#",slug:"java路由类转c",link:"#java路由类转c",children:[]},{level:3,title:"图形化操作",slug:"图形化操作",link:"#图形化操作",children:[]}]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[{level:3,title:"已开发",slug:"已开发",link:"#已开发",children:[]},{level:3,title:"未开发",slug:"未开发",link:"#未开发",children:[]},{level:3,title:"准备加入",slug:"准备加入",link:"#准备加入",children:[]}]},{level:2,title:"功能建议",slug:"功能建议",link:"#功能建议",children:[]}],path:"/plugins/io-game.html",pathLocale:"/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]},{level:2,title:"模板功能",slug:"模板功能",link:"#模板功能",children:[{level:3,title:"基础模板",slug:"基础模板",link:"#基础模板",children:[]}]}],path:"/plugins/java-orm.html",pathLocale:"/",extraFields:[]},{title:"RequestTool",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"插件地址",slug:"插件地址",link:"#插件地址",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[{level:3,title:"目前支持",slug:"目前支持",link:"#目前支持",children:[]},{level:3,title:"前置请求",slug:"前置请求",link:"#前置请求",children:[]},{level:3,title:"参数解析",slug:"参数解析",link:"#参数解析",children:[]},{level:3,title:"保存请求历史和参数",slug:"保存请求历史和参数",link:"#保存请求历史和参数",children:[]}]},{level:2,title:"使用技巧",slug:"使用技巧",link:"#使用技巧",children:[{level:3,title:"技巧1",slug:"技巧1",link:"#技巧1",children:[]},{level:3,title:"技巧2",slug:"技巧2",link:"#技巧2",children:[]}]},{level:2,title:"更新说明",slug:"更新说明",link:"#更新说明",children:[]}],path:"/plugins/request-tool.html",pathLocale:"/",extraFields:[]},{title:"RocketCat",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/rocket-cat.html",pathLocale:"/",extraFields:[]},{title:"RsRom",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/plugins/rs-orm.html",pathLocale:"/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"源码地址",slug:"源码地址",link:"#源码地址",children:[]},{level:2,title:"桌面端的实现",slug:"桌面端的实现",link:"#桌面端的实现",children:[]}],path:"/plugins/vue-admin.html",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/",pathLocale:"/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍🍉",slug:"介绍🍉",link:"#介绍🍉",children:[]},{level:2,title:"工具列表🐸",slug:"工具列表🐸",link:"#工具列表🐸",children:[{level:3,title:"Icon素材",slug:"icon素材",link:"#icon素材",children:[]},{level:3,title:"AI代码工具",slug:"ai代码工具",link:"#ai代码工具",children:[]},{level:3,title:"开发工具👊",slug:"开发工具👊",link:"#开发工具👊",children:[]},{level:3,title:"日常工具😆",slug:"日常工具😆",link:"#日常工具😆",children:[]}]},{level:2,title:"桌面美化👻",slug:"桌面美化👻",link:"#桌面美化👻",children:[{level:3,title:"国内🐸",slug:"国内🐸",link:"#国内🐸",children:[]},{level:3,title:"国外🌟",slug:"国外🌟",link:"#国外🌟",children:[]}]}],path:"/util/",pathLocale:"/",extraFields:[]},{title:"通用工具",headers:[{level:2,title:"内存节约工具",slug:"内存节约工具",link:"#内存节约工具",children:[]},{level:2,title:"AI工具",slug:"ai工具",link:"#ai工具",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"日常工具",slug:"日常工具",link:"#日常工具",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]},{level:2,title:"图像工具",slug:"图像工具",link:"#图像工具",children:[{level:3,title:"列表",slug:"列表-2",link:"#列表-2",children:[]}]}],path:"/util/common.html",pathLocale:"/",extraFields:[]},{title:"开发工具",headers:[{level:2,title:"Fleet",slug:"fleet",link:"#fleet",children:[{level:3,title:"主题编辑器",slug:"主题编辑器",link:"#主题编辑器",children:[]}]},{level:2,title:"Github",slug:"github",link:"#github",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"Shell",slug:"shell",link:"#shell",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]}],path:"/util/dev.html",pathLocale:"/",extraFields:[]},{title:"Idea插件",headers:[{level:2,title:"介绍🐔",slug:"介绍🐔",link:"#介绍🐔",children:[]},{level:2,title:"插件🍏",slug:"插件🍏",link:"#插件🍏",children:[]},{level:2,title:"插件文档👏",slug:"插件文档👏",link:"#插件文档👏",children:[]},{level:2,title:"必备插件🎈",slug:"必备插件🎈",link:"#必备插件🎈",children:[{level:3,title:"阿里巴巴部署插件🌟",slug:"阿里巴巴部署插件🌟",link:"#阿里巴巴部署插件🌟",children:[]},{level:3,title:"接口搜索插件💒",slug:"接口搜索插件💒",link:"#接口搜索插件💒",children:[]},{level:3,title:"翻译插件👏",slug:"翻译插件👏",link:"#翻译插件👏",children:[]},{level:3,title:"Gitee插件😎",slug:"gitee插件😎",link:"#gitee插件😎",children:[]},{level:3,title:"彩虹括号插件😄",slug:"彩虹括号插件😄",link:"#彩虹括号插件😄",children:[]},{level:3,title:"背景图片插件🍋",slug:"背景图片插件🍋",link:"#背景图片插件🍋",children:[]},{level:3,title:"SpringBoot热更插件🍊",slug:"springboot热更插件🍊",link:"#springboot热更插件🍊",children:[]}]},{level:2,title:"油猴插件🍒",slug:"油猴插件🍒",link:"#油猴插件🍒",children:[{level:3,title:"Github🍑",slug:"github🍑",link:"#github🍑",children:[]},{level:3,title:"魔法💞",slug:"魔法💞",link:"#魔法💞",children:[]},{level:3,title:"搭建魔法",slug:"搭建魔法",link:"#搭建魔法",children:[]}]},{level:2,title:"Github💢",slug:"github💢",link:"#github💢",children:[{level:3,title:"自动修改host😎",slug:"自动修改host😎",link:"#自动修改host😎",children:[]}]},{level:2,title:"Edge🏧",slug:"edge🏧",link:"#edge🏧",children:[]},{level:2,title:"原型设计💔",slug:"原型设计💔",link:"#原型设计💔",children:[{level:3,title:"激活码😎",slug:"激活码😎",link:"#激活码😎",children:[]},{level:3,title:"下载地址🍊",slug:"下载地址🍊",link:"#下载地址🍊",children:[]}]}],path:"/util/idea.html",pathLocale:"/",extraFields:[]},{title:"English",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]}],path:"/en/english/",pathLocale:"/en/",extraFields:[]},{title:"Day1",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day1.html",pathLocale:"/en/",extraFields:[]},{title:"Day10",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day10.html",pathLocale:"/en/",extraFields:[]},{title:"Day11",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day11.html",pathLocale:"/en/",extraFields:[]},{title:"Day12",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day12.html",pathLocale:"/en/",extraFields:[]},{title:"Day13",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day13.html",pathLocale:"/en/",extraFields:[]},{title:"Day14",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day14.html",pathLocale:"/en/",extraFields:[]},{title:"Day15",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day15.html",pathLocale:"/en/",extraFields:[]},{title:"Day16",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"小知识",slug:"小知识",link:"#小知识",children:[]}]}],path:"/en/english/day16.html",pathLocale:"/en/",extraFields:[]},{title:"Day17",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day17.html",pathLocale:"/en/",extraFields:[]},{title:"Day18",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"review",slug:"review",link:"#review",children:[]},{level:3,title:"practice",slug:"practice",link:"#practice",children:[]}]}],path:"/en/english/day18.html",pathLocale:"/en/",extraFields:[]},{title:"Day19",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"语法分析",slug:"语法分析",link:"#语法分析",children:[{level:3,title:"Is duo from a small town near Beijing?",slug:"is-duo-from-a-small-town-near-beijing",link:"#is-duo-from-a-small-town-near-beijing",children:[]},{level:3,title:"This small town has many good coffee shops.",slug:"this-small-town-has-many-good-coffee-shops",link:"#this-small-town-has-many-good-coffee-shops",children:[]},{level:3,title:"The food at this restaurant is really bad.",slug:"the-food-at-this-restaurant-is-really-bad",link:"#the-food-at-this-restaurant-is-really-bad",children:[]},{level:3,title:"Is the food here good or bad?",slug:"is-the-food-here-good-or-bad",link:"#is-the-food-here-good-or-bad",children:[]},{level:3,title:"Is there a coffee shop near Ben's office?",slug:"is-there-a-coffee-shop-near-ben-s-office",link:"#is-there-a-coffee-shop-near-ben-s-office",children:[]}]}],path:"/en/english/day19.html",pathLocale:"/en/",extraFields:[]},{title:"Day2",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"Do you and Are you",slug:"do-you-and-are-you",link:"#do-you-and-are-you",children:[]}]}],path:"/en/english/day2.html",pathLocale:"/en/",extraFields:[]},{title:"Day3",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day3.html",pathLocale:"/en/",extraFields:[]},{title:"Day4",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"has and have",slug:"has-and-have",link:"#has-and-have",children:[]},{level:3,title:"what and where",slug:"what-and-where",link:"#what-and-where",children:[]},{level:3,title:"He and She",slug:"he-and-she",link:"#he-and-she",children:[]}]}],path:"/en/english/day4.html",pathLocale:"/en/",extraFields:[]},{title:"Day5",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day5.html",pathLocale:"/en/",extraFields:[]},{title:"Day6",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day6.html",pathLocale:"/en/",extraFields:[]},{title:"Day7",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day7.html",pathLocale:"/en/",extraFields:[]},{title:"Day8",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day8.html",pathLocale:"/en/",extraFields:[]},{title:"Day9",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day9.html",pathLocale:"/en/",extraFields:[]},{title:"Study",headers:[{level:2,title:"前缀(12)-义",slug:"前缀-12-义",link:"#前缀-12-义",children:[]},{level:2,title:"后缀(3)-性",slug:"后缀-3-性",link:"#后缀-3-性",children:[]},{level:2,title:"词根",slug:"词根",link:"#词根",children:[]}],path:"/en/english/study.html",pathLocale:"/en/",extraFields:[]},{title:"Plugins",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Menu",slug:"menu",link:"#menu",children:[{level:3,title:"Supported",slug:"supported",link:"#supported",children:[]}]}],path:"/en/plugins/",pathLocale:"/en/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Question",slug:"question",link:"#question",children:[]},{level:2,title:"Label",slug:"label",link:"#label",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Video teaching",slug:"video-teaching",link:"#video-teaching",children:[]},{level:2,title:"Function",slug:"function",link:"#function",children:[]},{level:2,title:"English",slug:"english",link:"#english",children:[]},{level:2,title:"JsonToStruct",slug:"jsontostruct",link:"#jsontostruct",children:[]},{level:2,title:"StructToSql",slug:"structtosql",link:"#structtosql",children:[]},{level:2,title:"Generate code samples",slug:"generate-code-samples",link:"#generate-code-samples",children:[]},{level:2,title:"Currently tested databases",slug:"currently-tested-databases",link:"#currently-tested-databases",children:[]},{level:2,title:"Currently tested platforms",slug:"currently-tested-platforms",link:"#currently-tested-platforms",children:[]},{level:2,title:"End",slug:"end",link:"#end",children:[]}],path:"/en/plugins/gorm.html",pathLocale:"/en/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]}],path:"/en/plugins/jorm.html",pathLocale:"/en/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Implementation on the desktop",slug:"implementation-on-the-desktop",link:"#implementation-on-the-desktop",children:[]}],path:"/en/plugins/vue-admin.html",pathLocale:"/en/",extraFields:[]},{title:"Game",headers:[],path:"/study/game/",pathLocale:"/",extraFields:[]},{title:"Cocos",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🌈",slug:"官网",link:"#官网",children:[]},{level:2,title:"插件💒",slug:"插件",link:"#插件",children:[]}],path:"/study/game/cocos.html",pathLocale:"/",extraFields:[]},{title:"Game",headers:[{level:2,title:"提示❤️",slug:"提示",link:"#提示",children:[]},{level:2,title:"技术🍑",slug:"技术",link:"#技术",children:[{level:3,title:"帧同步🍉",slug:"帧同步",link:"#帧同步",children:[]}]},{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"游戏引擎🍇",slug:"游戏引擎",link:"#游戏引擎",children:[{level:3,title:"Godot💔",slug:"godot",link:"#godot",children:[]},{level:3,title:"Unity🍑",slug:"unity",link:"#unity",children:[]},{level:3,title:"Cocos😎",slug:"cocos",link:"#cocos",children:[]}]},{level:2,title:"游戏素材🏧",slug:"游戏素材",link:"#游戏素材",children:[{level:3,title:"音效🎈",slug:"音效",link:"#音效",children:[]},{level:3,title:"Logo✋",slug:"logo",link:"#logo",children:[]},{level:3,title:"国外🍑",slug:"国外",link:"#国外",children:[]},{level:3,title:"国内🪲",slug:"国内",link:"#国内",children:[]}]},{level:2,title:"准备使用的素材🍎",slug:"准备使用的素材",link:"#准备使用的素材",children:[]},{level:2,title:"游戏服务器框架❤️",slug:"游戏服务器框架",link:"#游戏服务器框架",children:[]},{level:2,title:"游戏政策模板",slug:"游戏政策模板",link:"#游戏政策模板",children:[]}],path:"/study/game/game.html",pathLocale:"/",extraFields:[]},{title:"Godot",headers:[{level:2,title:"介绍🚩",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网❤️",slug:"官网",link:"#官网",children:[]},{level:2,title:"Proto✋",slug:"proto",link:"#proto",children:[]}],path:"/study/game/godot.html",pathLocale:"/",extraFields:[]},{title:"Unity",headers:[{level:2,title:"Unity版本自动构建🪲",slug:"unity版本自动构建",link:"#unity版本自动构建",children:[{level:3,title:"脚本",slug:"脚本",link:"#脚本",children:[]}]},{level:2,title:"Unity基础🪲",slug:"unity基础",link:"#unity基础",children:[{level:3,title:"闭包🎈",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"协程🎈",slug:"协程",link:"#协程",children:[]},{level:3,title:"ads接入🎈",slug:"ads接入",link:"#ads接入",children:[]},{level:3,title:"小程序🏧",slug:"小程序",link:"#小程序",children:[]},{level:3,title:"json转换问题😄",slug:"json转换问题",link:"#json转换问题",children:[]}]},{level:2,title:"插件🐔",slug:"插件",link:"#插件",children:[{level:3,title:"Advertisement🍉",slug:"advertisement",link:"#advertisement",children:[]},{level:3,title:"DoTween🐷",slug:"dotween",link:"#dotween",children:[]},{level:3,title:"EasySave🗾",slug:"easysave",link:"#easysave",children:[]},{level:3,title:"LeanTouch💔",slug:"leantouch",link:"#leantouch",children:[]}]},{level:2,title:"开源库🍏",slug:"开源库",link:"#开源库",children:[{level:3,title:"WebSocket🍎",slug:"websocket",link:"#websocket",children:[]},{level:3,title:"Protobuf😎",slug:"protobuf",link:"#protobuf",children:[]},{level:3,title:"KCP🍇",slug:"kcp",link:"#kcp",children:[]},{level:3,title:"LuBan👊",slug:"luban",link:"#luban",children:[]}]},{level:2,title:"微信游戏🪲",slug:"微信游戏",link:"#微信游戏",children:[]},{level:2,title:"UnityApi🐯",slug:"unityapi",link:"#unityapi",children:[{level:3,title:"移动相关👊",slug:"移动相关",link:"#移动相关",children:[]},{level:3,title:"邮件发送💒",slug:"邮件发送",link:"#邮件发送",children:[]},{level:3,title:"IoGameUnity✋",slug:"iogameunity",link:"#iogameunity",children:[]}]}],path:"/study/game/unity.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[],path:"/study/go/",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"Go语言实现",slug:"go语言实现",link:"#go语言实现",children:[{level:3,title:"代理模式",slug:"代理模式",link:"#代理模式",children:[]}]}],path:"/study/go/design-mode.html",pathLocale:"/",extraFields:[]},{title:"高级",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Select",slug:"select",link:"#select",children:[{level:3,title:"常见用法",slug:"常见用法",link:"#常见用法",children:[]},{level:3,title:"使用注意",slug:"使用注意",link:"#使用注意",children:[]}]},{level:2,title:"线程",slug:"线程",link:"#线程",children:[{level:3,title:"轻量级线程变量如何处理的?",slug:"轻量级线程变量如何处理的",link:"#轻量级线程变量如何处理的",children:[]},{level:3,title:"goroutine和线程区别？",slug:"goroutine和线程区别",link:"#goroutine和线程区别",children:[]},{level:3,title:"goroutine能创建多少个？",slug:"goroutine能创建多少个",link:"#goroutine能创建多少个",children:[]}]},{level:2,title:"排序",slug:"排序",link:"#排序",children:[{level:3,title:"基本排序",slug:"基本排序",link:"#基本排序",children:[]}]},{level:2,title:"Chan(缓冲区)",slug:"chan-缓冲区",link:"#chan-缓冲区",children:[]},{level:2,title:"协程上下文",slug:"协程上下文",link:"#协程上下文",children:[{level:3,title:"简易版",slug:"简易版",link:"#简易版",children:[]}]}],path:"/study/go/difficult.html",pathLocale:"/",extraFields:[]},{title:"Gin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"优雅停机",slug:"优雅停机",link:"#优雅停机",children:[]},{level:2,title:"中间件",slug:"中间件",link:"#中间件",children:[{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"cors跨域",slug:"cors跨域",link:"#cors跨域",children:[]},{level:3,title:"缓存redis",slug:"缓存redis",link:"#缓存redis",children:[]},{level:3,title:"认证处理器",slug:"认证处理器",link:"#认证处理器",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"对象封装",slug:"对象封装",link:"#对象封装",children:[]}]}],path:"/study/go/gin.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]},{level:2,title:"语法糖",slug:"语法糖",link:"#语法糖",children:[{level:3,title:"方法返回值赋值",slug:"方法返回值赋值",link:"#方法返回值赋值",children:[]}]},{level:2,title:"go基础部分",slug:"go基础部分",link:"#go基础部分",children:[{level:3,title:"变量赋值",slug:"变量赋值",link:"#变量赋值",children:[]},{level:3,title:"流程语句",slug:"流程语句",link:"#流程语句",children:[]},{level:3,title:"Map和List",slug:"map和list",link:"#map和list",children:[]},{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"自定义错误类型",slug:"自定义错误类型",link:"#自定义错误类型",children:[]},{level:3,title:"闭包",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"接口与结构体",slug:"接口与结构体",link:"#接口与结构体",children:[]},{level:3,title:"指针概念",slug:"指针概念",link:"#指针概念",children:[]},{level:3,title:"多线程通道",slug:"多线程通道",link:"#多线程通道",children:[]}]},{level:2,title:"Go实践",slug:"go实践",link:"#go实践",children:[]},{level:2,title:"开源库",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"高级部分",slug:"高级部分",link:"#高级部分",children:[{level:3,title:"镜像配置",slug:"镜像配置",link:"#镜像配置",children:[]},{level:3,title:"微服务",slug:"微服务",link:"#微服务",children:[]},{level:3,title:"多模块开发",slug:"多模块开发",link:"#多模块开发",children:[]},{level:3,title:"context上下文",slug:"context上下文",link:"#context上下文",children:[]},{level:3,title:"互斥锁",slug:"互斥锁",link:"#互斥锁",children:[]},{level:3,title:"单元测试",slug:"单元测试",link:"#单元测试",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"Jwt",slug:"jwt",link:"#jwt",children:[]},{level:3,title:"打包",slug:"打包",link:"#打包",children:[]}]}],path:"/study/go/go.html",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/study/go/gorm.html",pathLocale:"/",extraFields:[]},{title:"七牛云",headers:[{level:2,title:"七牛云存储对接",slug:"七牛云存储对接",link:"#七牛云存储对接",children:[]},{level:2,title:"后端go具体代码",slug:"后端go具体代码",link:"#后端go具体代码",children:[]},{level:2,title:"前端Vue",slug:"前端vue",link:"#前端vue",children:[]}],path:"/study/go/qiniu.html",pathLocale:"/",extraFields:[]},{title:"Socket",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"自定义协议",slug:"自定义协议",link:"#自定义协议",children:[{level:3,title:"使用示例",slug:"使用示例",link:"#使用示例",children:[]}]},{level:2,title:"简单协议",slug:"简单协议",link:"#简单协议",children:[{level:3,title:"代码",slug:"代码",link:"#代码",children:[]}]}],path:"/study/go/socket.html",pathLocale:"/",extraFields:[]},{title:"Ssh",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"终端连接",slug:"终端连接",link:"#终端连接",children:[]}],path:"/study/go/ssh.html",pathLocale:"/",extraFields:[]},{title:"原理解析",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Gin",slug:"gin",link:"#gin",children:[]},{level:2,title:"Go",slug:"go",link:"#go",children:[]}],path:"/study/go/try.html",pathLocale:"/",extraFields:[]},{title:"工具",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"缓存工具类",slug:"缓存工具类",link:"#缓存工具类",children:[]}]}],path:"/study/go/util.html",pathLocale:"/",extraFields:[]},{title:"Wails",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]}],path:"/study/go/wails.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[],path:"/study/java/",pathLocale:"/",extraFields:[]},{title:"数据结构",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"HashMap✋",slug:"hashmap",link:"#hashmap",children:[]},{level:2,title:"LinkedList🍅",slug:"linkedlist",link:"#linkedlist",children:[]},{level:2,title:"Array🐯",slug:"array",link:"#array",children:[]},{level:2,title:"Stack👏",slug:"stack",link:"#stack",children:[]},{level:2,title:"Queue👏",slug:"queue",link:"#queue",children:[]}],path:"/study/java/data-struct.html",pathLocale:"/",extraFields:[]},{title:"Hutool",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Api😃",slug:"api",link:"#api",children:[{level:3,title:"对象复制🗾",slug:"对象复制",link:"#对象复制",children:[]}]}],path:"/study/java/hutool.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🍎",slug:"官网",link:"#官网",children:[]},{level:2,title:"Api🍒",slug:"api",link:"#api",children:[{level:3,title:"通知🎈",slug:"通知",link:"#通知",children:[]}]}],path:"/study/java/io-game.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Java基础🍊",slug:"java基础",link:"#java基础",children:[{level:3,title:"List工具🍅",slug:"list工具",link:"#list工具",children:[]},{level:3,title:"泛型💔",slug:"泛型",link:"#泛型",children:[]},{level:3,title:"定时任务👊",slug:"定时任务",link:"#定时任务",children:[]},{level:3,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[]}]},{level:2,title:"Jvm😎",slug:"jvm",link:"#jvm",children:[{level:3,title:"线程私有的⛪",slug:"线程私有的",link:"#线程私有的",children:[]},{level:3,title:"线程公有的💢",slug:"线程公有的",link:"#线程公有的",children:[]}]},{level:2,title:"锁🏧",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁🍒",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"悲观锁😃",slug:"悲观锁",link:"#悲观锁",children:[]}]}],path:"/study/java/java.html",pathLocale:"/",extraFields:[]},{title:"Maven",headers:[{level:2,title:"介绍😄",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"腾讯源镜像",slug:"腾讯源镜像",link:"#腾讯源镜像",children:[]},{level:2,title:"镜像🍋",slug:"镜像",link:"#镜像",children:[]},{level:2,title:"父子依赖👻",slug:"父子依赖",link:"#父子依赖",children:[]}],path:"/study/java/maven.html",pathLocale:"/",extraFields:[]},{title:"Mqtt",headers:[{level:2,title:"介绍🍏",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🍑",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例 SpringBoot🏧",slug:"示例-springboot",link:"#示例-springboot",children:[]}],path:"/study/java/mqtt.html",pathLocale:"/",extraFields:[]},{title:"Mybatis",headers:[{level:2,title:"介绍🍊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"常用标签😃",slug:"常用标签",link:"#常用标签",children:[]},{level:2,title:"使用规范⛪",slug:"使用规范",link:"#使用规范",children:[]},{level:2,title:"原理😎",slug:"原理",link:"#原理",children:[{level:3,title:"spring环境🍇",slug:"spring环境",link:"#spring环境",children:[]}]},{level:2,title:"mybatis-plus🎈",slug:"mybatis-plus",link:"#mybatis-plus",children:[{level:3,title:"LambdaQueryWrapper💢",slug:"lambdaquerywrapper",link:"#lambdaquerywrapper",children:[]},{level:3,title:"配置插件🗾",slug:"配置插件",link:"#配置插件",children:[]},{level:3,title:"MybatisX🎈",slug:"mybatisx",link:"#mybatisx",children:[]}]}],path:"/study/java/mybatis.html",pathLocale:"/",extraFields:[]},{title:"Protostuff序列化",headers:[{level:2,title:"介绍💔",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用😃",slug:"使用",link:"#使用",children:[]}],path:"/study/java/protostuff.html",pathLocale:"/",extraFields:[]},{title:"Redisson",headers:[{level:2,title:"官网⛪",slug:"官网",link:"#官网",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/redisson.html",pathLocale:"/",extraFields:[]},{title:"RocketMq",headers:[{level:2,title:"介绍🐷",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🎁",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例😃",slug:"示例",link:"#示例",children:[]},{level:2,title:"部署💞",slug:"部署",link:"#部署",children:[]}],path:"/study/java/rocket-mq.html",pathLocale:"/",extraFields:[]},{title:"SpringBootDemo",headers:[{level:2,title:"根据条件创建bean的注解👻",slug:"根据条件创建bean的注解",link:"#根据条件创建bean的注解",children:[{level:3,title:"@ConditionalOnProperty💒",slug:"conditionalonproperty",link:"#conditionalonproperty",children:[]},{level:3,title:"@ConditionalOnMissingBean🌅",slug:"conditionalonmissingbean",link:"#conditionalonmissingbean",children:[]},{level:3,title:"@ConditionalOnBean🌟",slug:"conditionalonbean",link:"#conditionalonbean",children:[]},{level:3,title:"@AutoConfigureAfter🐔",slug:"autoconfigureafter",link:"#autoconfigureafter",children:[]},{level:3,title:"@ConditionalOnClass🍊",slug:"conditionalonclass",link:"#conditionalonclass",children:[]},{level:3,title:"@Conditional🍊",slug:"conditional",link:"#conditional",children:[]},{level:3,title:"@AutoConfigureBefore😎",slug:"autoconfigurebefore",link:"#autoconfigurebefore",children:[]}]},{level:2,title:"双MQ控制时间差🍎",slug:"双mq控制时间差",link:"#双mq控制时间差",children:[]},{level:2,title:"文件上传🚩",slug:"文件上传",link:"#文件上传",children:[]}],path:"/study/java/spring-boot-demo.html",pathLocale:"/",extraFields:[]},{title:"SpringBoot",headers:[{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"必读指南",slug:"必读指南",link:"#必读指南",children:[]},{level:2,title:"规范😎",slug:"规范",link:"#规范",children:[]},{level:2,title:"打包原生脚本执行🪲",slug:"打包原生脚本执行",link:"#打包原生脚本执行",children:[]},{level:2,title:"启动和部署🍉",slug:"启动和部署",link:"#启动和部署",children:[]},{level:2,title:"Cors跨域配置🍎 !",slug:"cors跨域配置",link:"#cors跨域配置",children:[]},{level:2,title:"yml配置💞",slug:"yml配置",link:"#yml配置",children:[]},{level:2,title:"测试搭建👻",slug:"测试搭建",link:"#测试搭建",children:[]},{level:2,title:"Controller传参🐔",slug:"controller传参",link:"#controller传参",children:[]},{level:2,title:"全局异常处理🐟",slug:"全局异常处理",link:"#全局异常处理",children:[]},{level:2,title:"文件上传下载🍇",slug:"文件上传下载",link:"#文件上传下载",children:[]},{level:2,title:"SpringBootUtil🎁 !",slug:"springbootutil",link:"#springbootutil",children:[{level:3,title:"HttpServletUtil🐟 !",slug:"httpservletutil",link:"#httpservletutil",children:[]},{level:3,title:"返回对象封装🐷 !",slug:"返回对象封装",link:"#返回对象封装",children:[]},{level:3,title:"TokenUtil⭐",slug:"tokenutil",link:"#tokenutil",children:[]},{level:3,title:"FileUtil🐷 !",slug:"fileutil",link:"#fileutil",children:[]}]},{level:2,title:"拦截器⭐",slug:"拦截器",link:"#拦截器",children:[]},{level:2,title:"参数校验😃",slug:"参数校验",link:"#参数校验",children:[{level:3,title:"依赖🍒",slug:"依赖",link:"#依赖",children:[]},{level:3,title:"DTO❤️",slug:"dto",link:"#dto",children:[]},{level:3,title:"Controller⭐",slug:"controller",link:"#controller",children:[]}]}],path:"/study/java/spring-boot.html",pathLocale:"/",extraFields:[]},{title:"SpringCloudAlibaba",headers:[{level:2,title:"介绍🎁",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"项目🌅",slug:"项目",link:"#项目",children:[]},{level:2,title:"Nacos🌈",slug:"nacos",link:"#nacos",children:[]},{level:2,title:"Seata😎",slug:"seata",link:"#seata",children:[]}],path:"/study/java/spring-cloud-alibaba.html",pathLocale:"/",extraFields:[]},{title:"SpringCloud",headers:[{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/spring-cloud.html",pathLocale:"/",extraFields:[]},{title:"Transaction",headers:[{level:2,title:"介绍🍒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"单机事务🐷",slug:"单机事务",link:"#单机事务",children:[]},{level:2,title:"分布式事务💢",slug:"分布式事务",link:"#分布式事务",children:[]}],path:"/study/java/transaction.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[],path:"/study/linux/",pathLocale:"/",extraFields:[]},{title:"Docker",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装✋",slug:"安装",link:"#安装",children:[]},{level:2,title:"常用命令✋",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"配置镜像源💢",slug:"配置镜像源",link:"#配置镜像源",children:[]}]},{level:2,title:"运行镜像🗾",slug:"运行镜像",link:"#运行镜像",children:[{level:3,title:"Mongodb🍋",slug:"mongodb",link:"#mongodb",children:[]},{level:3,title:"Mysql🏩",slug:"mysql",link:"#mysql",children:[]},{level:3,title:"Redis🍏",slug:"redis",link:"#redis",children:[]},{level:3,title:"PostgresSql😃",slug:"postgressql",link:"#postgressql",children:[]},{level:3,title:"Rabbitmq🏧",slug:"rabbitmq",link:"#rabbitmq",children:[]},{level:3,title:"RocketMq🍒",slug:"rocketmq",link:"#rocketmq",children:[]},{level:3,title:"Nacos🐔",slug:"nacos",link:"#nacos",children:[]},{level:3,title:"Seata❤️",slug:"seata",link:"#seata",children:[]},{level:3,title:"Ubuntu⭐",slug:"ubuntu",link:"#ubuntu",children:[]}]},{level:2,title:"Python🌈",slug:"python",link:"#python",children:[]},{level:2,title:"DrawIo🐔",slug:"drawio",link:"#drawio",children:[]},{level:2,title:"Go部署😎",slug:"go部署",link:"#go部署",children:[{level:3,title:"docker-compose部署🌅",slug:"docker-compose部署",link:"#docker-compose部署",children:[]}]},{level:2,title:"Java部署🍋",slug:"java部署",link:"#java部署",children:[{level:3,title:"docker-compose部署🍒",slug:"docker-compose部署-1",link:"#docker-compose部署-1",children:[]}]}],path:"/study/linux/docker.html",pathLocale:"/",extraFields:[]},{title:"Git使用",headers:[{level:2,title:"介绍🏧",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"下载地址💞",slug:"下载地址",link:"#下载地址",children:[]},{level:2,title:"基本命令💒",slug:"基本命令",link:"#基本命令",children:[]},{level:2,title:"分支🗾",slug:"分支",link:"#分支",children:[{level:3,title:"新建分支🪲",slug:"新建分支",link:"#新建分支",children:[]},{level:3,title:"选择其他分支合并到当前分支🍅",slug:"选择其他分支合并到当前分支",link:"#选择其他分支合并到当前分支",children:[]},{level:3,title:"使用其他分支当作基础分支合并到当前分支上⛪",slug:"使用其他分支当作基础分支合并到当前分支上",link:"#使用其他分支当作基础分支合并到当前分支上",children:[]},{level:3,title:"清除提交历史在创建新分支😆",slug:"清除提交历史在创建新分支",link:"#清除提交历史在创建新分支",children:[]}]}],path:"/study/linux/git.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[{level:2,title:"Shell脚本👻",slug:"shell脚本",link:"#shell脚本",children:[]},{level:2,title:"Ubuntu🐟",slug:"ubuntu",link:"#ubuntu",children:[{level:3,title:"镜像源😎",slug:"镜像源",link:"#镜像源",children:[]}]},{level:2,title:"Centos7🐔",slug:"centos7",link:"#centos7",children:[{level:3,title:"自动化脚本🌈",slug:"自动化脚本",link:"#自动化脚本",children:[]},{level:3,title:"Mysql8安装🌈",slug:"mysql8安装",link:"#mysql8安装",children:[]},{level:3,title:"Ffmpeg💒",slug:"ffmpeg",link:"#ffmpeg",children:[]}]},{level:2,title:"Deepin🎁",slug:"deepin",link:"#deepin",children:[]},{level:2,title:"内存搭配🐸",slug:"内存搭配",link:"#内存搭配",children:[]},{level:2,title:"常用命令👏",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"Date(时间)🌈",slug:"date-时间",link:"#date-时间",children:[]},{level:3,title:"Crontab(定时)🍊",slug:"crontab-定时",link:"#crontab-定时",children:[]},{level:3,title:"Tar(压缩)🗾",slug:"tar-压缩",link:"#tar-压缩",children:[]},{level:3,title:"Zip(压缩)🍒",slug:"zip-压缩",link:"#zip-压缩",children:[]},{level:3,title:"Lrzsz(上传文件)🎁",slug:"lrzsz-上传文件",link:"#lrzsz-上传文件",children:[]},{level:3,title:"Vim🐸",slug:"vim",link:"#vim",children:[]},{level:3,title:"Awk🐯",slug:"awk",link:"#awk",children:[]}]}],path:"/study/linux/linux.html",pathLocale:"/",extraFields:[]},{title:"Mysql",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Sql强化",slug:"sql强化",link:"#sql强化",children:[{level:3,title:"计算排名sql",slug:"计算排名sql",link:"#计算排名sql",children:[]}]},{level:2,title:"Mysql基本优化🏩",slug:"mysql基本优化",link:"#mysql基本优化",children:[]},{level:2,title:"索引🌈",slug:"索引",link:"#索引",children:[]},{level:2,title:"索引类型🍉",slug:"索引类型",link:"#索引类型",children:[]},{level:2,title:"事务👻",slug:"事务",link:"#事务",children:[{level:3,title:"特性ACID⭐",slug:"特性acid",link:"#特性acid",children:[]},{level:3,title:"隔离级别🏧",slug:"隔离级别",link:"#隔离级别",children:[]}]},{level:2,title:"锁🍑",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁👻",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"自旋锁(乐观锁递归)🍋",slug:"自旋锁-乐观锁递归",link:"#自旋锁-乐观锁递归",children:[]}]},{level:2,title:"备份🍉",slug:"备份",link:"#备份",children:[{level:3,title:"定时备份命令🪲",slug:"定时备份命令",link:"#定时备份命令",children:[]},{level:3,title:"备份脚本😎",slug:"备份脚本",link:"#备份脚本",children:[]}]},{level:2,title:"Docker🍊",slug:"docker",link:"#docker",children:[]},{level:2,title:"读写分离👏",slug:"读写分离",link:"#读写分离",children:[]}],path:"/study/linux/mysql.html",pathLocale:"/",extraFields:[]},{title:"Nginx",headers:[{level:2,title:"配置😎",slug:"配置",link:"#配置",children:[]}],path:"/study/linux/nginx.html",pathLocale:"/",extraFields:[]},{title:"网络",headers:[{level:2,title:"通信协议🐔",slug:"通信协议",link:"#通信协议",children:[{level:3,title:"RPC🍅",slug:"rpc",link:"#rpc",children:[]},{level:3,title:"HTTP🍒",slug:"http",link:"#http",children:[]}]}],path:"/study/linux/server.html",pathLocale:"/",extraFields:[]},{title:"Shell",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"开始🍎",slug:"开始",link:"#开始",children:[]},{level:2,title:"组合命令🐷",slug:"组合命令",link:"#组合命令",children:[]},{level:2,title:"shell参数🎈",slug:"shell参数",link:"#shell参数",children:[]}],path:"/study/linux/shell.html",pathLocale:"/",extraFields:[]},{title:"Try",headers:[],path:"/study/try/",pathLocale:"/",extraFields:[]},{title:"Antlr",headers:[{level:2,title:"介绍🍇",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"符号作用🍎",slug:"符号作用",link:"#符号作用",children:[]},{level:2,title:"示例🌟",slug:"示例",link:"#示例",children:[{level:3,title:"JSON💞",slug:"json",link:"#json",children:[]},{level:3,title:"ORM🍏",slug:"orm",link:"#orm",children:[]}]}],path:"/study/try/antlr.html",pathLocale:"/",extraFields:[]},{title:"English",headers:[{level:2,title:"Documentation",slug:"documentation",link:"#documentation",children:[]},{level:2,title:"A Man and A Woman",slug:"a-man-and-a-woman",link:"#a-man-and-a-woman",children:[]},{level:2,title:"代词",slug:"代词",link:"#代词",children:[{level:3,title:"in 在(范围里面),根据前一个单词来表示",slug:"in-在-范围里面-根据前一个单词来表示",link:"#in-在-范围里面-根据前一个单词来表示",children:[]},{level:3,title:"at 在(准确物品地点)",slug:"at-在-准确物品地点",link:"#at-在-准确物品地点",children:[]},{level:3,title:"then 然后",slug:"then-然后",link:"#then-然后",children:[]}]},{level:2,title:"日常所见",slug:"日常所见",link:"#日常所见",children:[{level:3,title:"生活",slug:"生活",link:"#生活",children:[]}]},{level:2,title:"阅读",slug:"阅读",link:"#阅读",children:[{level:3,title:"词组",slug:"词组",link:"#词组",children:[]}]}],path:"/study/try/english.html",pathLocale:"/",extraFields:[]},{title:"Flutter",headers:[{level:2,title:"介绍💔",slug:"介绍💔",link:"#介绍💔",children:[]},{level:2,title:"项目🐷",slug:"项目🐷",link:"#项目🐷",children:[]},{level:2,title:"官方组件在线示例",slug:"官方组件在线示例",link:"#官方组件在线示例",children:[]},{level:2,title:"明星组件库",slug:"明星组件库",link:"#明星组件库",children:[{level:3,title:"共享数据",slug:"共享数据",link:"#共享数据",children:[]},{level:3,title:"状态库",slug:"状态库",link:"#状态库",children:[]},{level:3,title:"轮播库",slug:"轮播库",link:"#轮播库",children:[]},{level:3,title:"通知库",slug:"通知库",link:"#通知库",children:[]},{level:3,title:"滑块库",slug:"滑块库",link:"#滑块库",children:[]},{level:3,title:"位置库",slug:"位置库",link:"#位置库",children:[]},{level:3,title:"文字库",slug:"文字库",link:"#文字库",children:[]},{level:3,title:"数据库",slug:"数据库",link:"#数据库",children:[]},{level:3,title:"图标库",slug:"图标库",link:"#图标库",children:[]},{level:3,title:"加载动画库",slug:"加载动画库",link:"#加载动画库",children:[]},{level:3,title:"无限滚动库",slug:"无限滚动库",link:"#无限滚动库",children:[]},{level:3,title:"时间选择",slug:"时间选择",link:"#时间选择",children:[]},{level:3,title:"表情库",slug:"表情库",link:"#表情库",children:[]},{level:3,title:"组件动画库",slug:"组件动画库",link:"#组件动画库",children:[]},{level:3,title:"其他库",slug:"其他库",link:"#其他库",children:[]}]},{level:2,title:"介绍🌟",slug:"介绍🌟",link:"#介绍🌟",children:[{level:3,title:"布局介绍⛪️",slug:"布局介绍⛪️",link:"#布局介绍⛪️",children:[]},{level:3,title:"组件组合常用😎",slug:"组件组合常用😎",link:"#组件组合常用😎",children:[]},{level:3,title:"AS插件🌅",slug:"as插件🌅",link:"#as插件🌅",children:[]},{level:3,title:"路由🌈",slug:"路由🌈",link:"#路由🌈",children:[]},{level:3,title:"插件👏",slug:"插件👏",link:"#插件👏",children:[]}]},{level:2,title:"必须安装🐷",slug:"必须安装🐷",link:"#必须安装🐷",children:[]},{level:2,title:"组件😄",slug:"组件😄",link:"#组件😄",children:[{level:3,title:"IgnorePointer😆",slug:"ignorepointer😆",link:"#ignorepointer😆",children:[]}]},{level:2,title:"GetX🍏",slug:"getx🍏",link:"#getx🍏",children:[{level:3,title:"动画操作😃",slug:"动画操作😃",link:"#动画操作😃",children:[]},{level:3,title:"文档🌅",slug:"文档🌅",link:"#文档🌅",children:[]},{level:3,title:"常用Api❤️",slug:"常用api❤️",link:"#常用api❤️",children:[]}]},{level:2,title:"Idea模板💒",slug:"idea模板💒",link:"#idea模板💒",children:[]}],path:"/study/try/flutter.html",pathLocale:"/",extraFields:[]},{title:"z-驾照考试",headers:[{level:2,title:"科目3考试要点✋",slug:"科目3考试要点",link:"#科目3考试要点",children:[]},{level:2,title:"规则🗾",slug:"规则",link:"#规则",children:[]},{level:2,title:"灯光😆",slug:"灯光",link:"#灯光",children:[]},{level:2,title:"考试必记🪲",slug:"考试必记",link:"#考试必记",children:[]},{level:2,title:"广汕路考试路况😎",slug:"广汕路考试路况",link:"#广汕路考试路况",children:[{level:3,title:"现场考试步骤(重要)🗾",slug:"现场考试步骤-重要",link:"#现场考试步骤-重要",children:[]}]},{level:2,title:"教学视频🍏",slug:"教学视频",link:"#教学视频",children:[]}],path:"/study/try/jiazhao.html",pathLocale:"/",extraFields:[]},{title:"Python",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"pip镜像设置✋",slug:"pip镜像设置",link:"#pip镜像设置",children:[]},{level:2,title:"Game🎁",slug:"game",link:"#game",children:[]},{level:2,title:"开源库🚩",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"Pygame🍇",slug:"pygame",link:"#pygame",children:[{level:3,title:"介绍🌟",slug:"介绍-1",link:"#介绍-1",children:[]},{level:3,title:"图片加载⭐",slug:"图片加载",link:"#图片加载",children:[]},{level:3,title:"上下左右移动事件🍉",slug:"上下左右移动事件",link:"#上下左右移动事件",children:[]},{level:3,title:"碰撞处理😎",slug:"碰撞处理",link:"#碰撞处理",children:[]}]},{level:2,title:"爬虫",slug:"爬虫",link:"#爬虫",children:[{level:3,title:"基本示例",slug:"基本示例",link:"#基本示例",children:[]},{level:3,title:"标签获取",slug:"标签获取",link:"#标签获取",children:[]}]},{level:2,title:"Jwt使用",slug:"jwt使用",link:"#jwt使用",children:[]},{level:2,title:"介绍",slug:"介绍-2",link:"#介绍-2",children:[{level:3,title:"图片加载",slug:"图片加载-1",link:"#图片加载-1",children:[]},{level:3,title:"上下左右移动事件",slug:"上下左右移动事件-1",link:"#上下左右移动事件-1",children:[]},{level:3,title:"碰撞处理",slug:"碰撞处理-1",link:"#碰撞处理-1",children:[]}]}],path:"/study/try/python.html",pathLocale:"/",extraFields:[]},{title:"Rust",headers:[{level:2,title:"镜像源🍊",slug:"镜像源",link:"#镜像源",children:[]},{level:2,title:"描述🍑",slug:"描述",link:"#描述",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"基本语法👏",slug:"基本语法",link:"#基本语法",children:[{level:3,title:"变量👻",slug:"变量",link:"#变量",children:[]},{level:3,title:"流程控制💔",slug:"流程控制",link:"#流程控制",children:[]},{level:3,title:"三元表达式💔",slug:"三元表达式",link:"#三元表达式",children:[]},{level:3,title:"列表🍅",slug:"列表",link:"#列表",children:[]},{level:3,title:"Map🐷",slug:"map",link:"#map",children:[]}]},{level:2,title:"开源库🍇",slug:"开源库",link:"#开源库",children:[{level:3,title:"跨平台桌面框架🐔",slug:"跨平台桌面框架",link:"#跨平台桌面框架",children:[]},{level:3,title:"前端框架💢",slug:"前端框架",link:"#前端框架",children:[]},{level:3,title:"后端框架✋",slug:"后端框架",link:"#后端框架",children:[]},{level:3,title:"WebSocket💞",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"关键字👻",slug:"关键字",link:"#关键字",children:[{level:3,title:"unwrap😎",slug:"unwrap",link:"#unwrap",children:[]}]},{level:2,title:"结尾👏",slug:"结尾",link:"#结尾",children:[]}],path:"/study/try/rust.html",pathLocale:"/",extraFields:[]},{title:"Web",headers:[],path:"/study/web/",pathLocale:"/",extraFields:[]},{title:"Axios",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Vue3插件玩法🍒",slug:"vue3插件玩法",link:"#vue3插件玩法",children:[]},{level:2,title:"Npm基本用法💔",slug:"npm基本用法",link:"#npm基本用法",children:[{level:3,title:"Http配置🌟",slug:"http配置",link:"#http配置",children:[]},{level:3,title:"Api配置🍎",slug:"api配置",link:"#api配置",children:[]}]}],path:"/study/web/axios.html",pathLocale:"/",extraFields:[]},{title:"Css",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Css配置🪲",slug:"css配置",link:"#css配置",children:[{level:3,title:"css动画库😎",slug:"css动画库",link:"#css动画库",children:[]}]},{level:2,title:"Flex布局",slug:"flex布局",link:"#flex布局",children:[{level:3,title:"示例",slug:"示例",link:"#示例",children:[]}]}],path:"/study/web/css.html",pathLocale:"/",extraFields:[]},{title:"Electron",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装🍇",slug:"安装",link:"#安装",children:[]},{level:2,title:"问题🍎",slug:"问题",link:"#问题",children:[]},{level:2,title:"通信🐸",slug:"通信",link:"#通信",children:[]},{level:2,title:"vue3 + Electron🏧",slug:"vue3-electron",link:"#vue3-electron",children:[]},{level:2,title:"进程通信💞",slug:"进程通信",link:"#进程通信",children:[{level:3,title:"暴露给渲染进程的API🍎",slug:"暴露给渲染进程的api",link:"#暴露给渲染进程的api",children:[]},{level:3,title:"主进程定义的通道👏",slug:"主进程定义的通道",link:"#主进程定义的通道",children:[]},{level:3,title:"API🍒",slug:"api",link:"#api",children:[]}]},{level:2,title:"打包🍉",slug:"打包",link:"#打包",children:[]},{level:2,title:"项目👏",slug:"项目",link:"#项目",children:[]}],path:"/study/web/electron.html",pathLocale:"/",extraFields:[]},{title:"Node",headers:[{level:2,title:"介绍😃",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"设置npm镜像😆",slug:"设置npm镜像",link:"#设置npm镜像",children:[]},{level:2,title:"javaScript👏",slug:"javascript",link:"#javascript",children:[]},{level:2,title:"linux安装npm👊",slug:"linux安装npm",link:"#linux安装npm",children:[]},{level:2,title:"linux安装yarn👻",slug:"linux安装yarn",link:"#linux安装yarn",children:[]},{level:2,title:"js数据存储🎁",slug:"js数据存储",link:"#js数据存储",children:[{level:3,title:"JSON转换🍅",slug:"json转换",link:"#json转换",children:[]},{level:3,title:"Token保存代码👏",slug:"token保存代码",link:"#token保存代码",children:[]},{level:3,title:"1:持久化存储 localStorage✋",slug:"_1-持久化存储-localstorage",link:"#_1-持久化存储-localstorage",children:[]},{level:3,title:"2:会话存储 sessionStorage💢",slug:"_2-会话存储-sessionstorage",link:"#_2-会话存储-sessionstorage",children:[]},{level:3,title:"webSocket🍉",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"开源库✋",slug:"开源库",link:"#开源库",children:[]}],path:"/study/web/node.html",pathLocale:"/",extraFields:[]},{title:"Vite",headers:[{level:2,title:"介绍👊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置相对路径🍅",slug:"配置相对路径",link:"#配置相对路径",children:[]},{level:2,title:"创建vue项目🪲",slug:"创建vue项目",link:"#创建vue项目",children:[]},{level:2,title:"scss🍅",slug:"scss",link:"#scss",children:[]},{level:2,title:"常见用法🍅",slug:"常见用法",link:"#常见用法",children:[{level:3,title:"导入项目内静态资源🐸",slug:"导入项目内静态资源",link:"#导入项目内静态资源",children:[]}]}],path:"/study/web/vite.html",pathLocale:"/",extraFields:[]},{title:"Vue",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"教程🐟",slug:"教程",link:"#教程",children:[{level:3,title:"插槽slot🍏",slug:"插槽slot",link:"#插槽slot",children:[]},{level:3,title:"复用组件🐯",slug:"复用组件",link:"#复用组件",children:[]}]},{level:2,title:"插件🍎",slug:"插件",link:"#插件",children:[{level:3,title:"桌面端🐯",slug:"桌面端",link:"#桌面端",children:[]},{level:3,title:"移动端😎",slug:"移动端",link:"#移动端",children:[]},{level:3,title:"可视化组件💢",slug:"可视化组件",link:"#可视化组件",children:[]},{level:3,title:"创建项目😄",slug:"创建项目",link:"#创建项目",children:[]}]},{level:2,title:"事件👏",slug:"事件",link:"#事件",children:[{level:3,title:"指针事件😃",slug:"指针事件",link:"#指针事件",children:[]}]},{level:2,title:"组件库🍊",slug:"组件库",link:"#组件库",children:[{level:3,title:"VueCss⭐",slug:"vuecss",link:"#vuecss",children:[]},{level:3,title:"Markdown👻",slug:"markdown",link:"#markdown",children:[]},{level:3,title:"复制工具🍊",slug:"复制工具",link:"#复制工具",children:[]}]}],path:"/study/web/vue.html",pathLocale:"/",extraFields:[]},{title:"Chess",headers:[{level:2,title:"棋牌",slug:"棋牌",link:"#棋牌",children:[]},{level:2,title:"伪代码",slug:"伪代码",link:"#伪代码",children:[]}],path:"/study/game/design/chess.html",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/design-mode/design-mode.html",pathLocale:"/",extraFields:[]},{title:"代理模式",headers:[{level:2,title:"jdk代理",slug:"jdk代理",link:"#jdk代理",children:[]},{level:2,title:"cglib代理",slug:"cglib代理",link:"#cglib代理",children:[]}],path:"/study/java/design-mode/proxy.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"Design",headers:[],path:"/study/game/design/",pathLocale:"/",extraFields:[]},{title:"Design Mode",headers:[],path:"/study/java/design-mode/",pathLocale:"/",extraFields:[]},{title:"分类",headers:[],path:"/category/",pathLocale:"/",extraFields:[]},{title:"标签",headers:[],path:"/tag/",pathLocale:"/",extraFields:[]},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:[]},{title:"收藏",headers:[],path:"/star/",pathLocale:"/",extraFields:[]},{title:"时间轴",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"Category",headers:[],path:"/en/category/",pathLocale:"/",extraFields:[]},{title:"Tag",headers:[],path:"/en/tag/",pathLocale:"/",extraFields:[]},{title:"Articles",headers:[],path:"/en/article/",pathLocale:"/",extraFields:[]},{title:"Star",headers:[],path:"/en/star/",pathLocale:"/",extraFields:[]},{title:"Timeline",headers:[],path:"/en/timeline/",pathLocale:"/",extraFields:[]}],searchIndex=ref(searchIndex$1),useSearchIndex=()=>searchIndex,useSearchSuggestions=({searchIndex:$,routeLocale:E,query:F,maxSuggestions:j})=>{const N=computed(()=>$.value.filter(B=>B.pathLocale===E.value));return computed(()=>{const B=F.value.trim().toLowerCase();if(!B)return[];const Z=[],Q=(X,ae)=>{isQueryMatched(B,[ae.title])&&Z.push({link:`${X.path}#${ae.slug}`,title:X.title,header:ae.title});for(const le of ae.children){if(Z.length>=j.value)return;Q(X,le)}};for(const X of N.value){if(Z.length>=j.value)break;if(isQueryMatched(B,[X.title,...X.extraFields])){Z.push({link:X.path,title:X.title});continue}for(const ae of X.headers){if(Z.length>=j.value)break;Q(X,ae)}}return Z})},useSuggestionsFocus=$=>{const E=ref(0);return{focusIndex:E,focusNext:()=>{E.value<$.value.length-1?E.value+=1:E.value=0},focusPrev:()=>{E.value>0?E.value-=1:E.value=$.value.length-1}}},SearchBox=defineComponent({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup($){const{locales:E,hotKeys:F,maxSuggestions:j}=toRefs($),N=useRouter(),B=useRouteLocale(),Z=useSearchIndex(),Q=ref(null),X=ref(!1),ae=ref(""),le=computed(()=>E.value[B.value]??{}),ie=useSearchSuggestions({searchIndex:Z,routeLocale:B,query:ae,maxSuggestions:j}),{focusIndex:se,focusNext:oe,focusPrev:ue}=useSuggestionsFocus(ie);useHotKeys({input:Q,hotKeys:F});const ce=computed(()=>X.value&&!!ie.value.length),de=()=>{ce.value&&ue()},ke=()=>{ce.value&&oe()},he=we=>{if(!ce.value)return;const Ve=ie.value[we];Ve&&N.push(Ve.link).then(()=>{ae.value="",se.value=0})};return()=>h$2("form",{class:"search-box",role:"search"},[h$2("input",{ref:Q,type:"search",placeholder:le.value.placeholder,autocomplete:"off",spellcheck:!1,value:ae.value,onFocus:()=>X.value=!0,onBlur:()=>X.value=!1,onInput:we=>ae.value=we.target.value,onKeydown:we=>{switch(we.key){case"ArrowUp":{de();break}case"ArrowDown":{ke();break}case"Enter":{we.preventDefault(),he(se.value);break}}}}),ce.value&&h$2("ul",{class:"suggestions",onMouseleave:()=>se.value=-1},ie.value.map(({link:we,title:Ve,header:Re},qe)=>h$2("li",{class:["suggestion",{focus:se.value===qe}],onMouseenter:()=>se.value=qe,onMousedown:()=>he(qe)},h$2("a",{href:we,onClick:We=>We.preventDefault()},[h$2("span",{class:"page-title"},Ve),Re&&h$2("span",{class:"page-header"},`> ${Re}`)]))))])}}),vars="",search="",locales={},hotKeys=["s","/"],maxSuggestions=5,clientConfig13=defineClientConfig({enhance({app:$}){$.component("SearchBox",E=>h$2(SearchBox,{locales,hotKeys,maxSuggestions,...E}))}}),MyHello_vue_vue_type_style_index_0_scoped_78c1a974_lang="",_hoisted_1={class:"my"},_sfc_main={__name:"MyHello",setup($){return console.log("Hello 组件！"),(E,F)=>(openBlock(),createElementBlock("div",_hoisted_1))}},MyComponent=_export_sfc(_sfc_main,[["__scopeId","data-v-78c1a974"],["__file","MyHello.vue"]]),clientConfig14=defineClientConfig({enhance:({app:$,router:E,siteData:F})=>{$.component("MyComponent",MyComponent)}}),clientConfigs=[clientConfig0,clientConfig1,clientConfig2,K,clientConfig4,clientConfig5,clientConfig6,l$2,Y,clientConfig9,I,clientConfig11,clientConfig12,clientConfig13,clientConfig14],pagesRoutes=[["v-8daa1a0e","/",{y:"h",t:"首页",i:"home"},["/index.html","/README.md"]],["v-145ac574","/blog/",{d:"2022-06-02T13:47:21.000Z",e:`<h1> 指南</h1>
<ul>
<li>这个博客有我的技术学习记录</li>
<li>下面列出了一些开发Idea插件或者Goland插件,未来也许会开发其他插件！</li>
<li>我可以为您的Web框架制作对应的插件</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">例如</p>
<ul>
<li>路由导航,接口调试,甚至对于增删改查这类功能也能集成到您的Web框架中。</li>
</ul>
</div>
<h2> 博客技术栈🐔</h2>
<ul>
<li>使用了基于vue的vuepress框架进行搭建</li>
<li>官网: <a href="https://vuepress-theme-hope.github.io/v2/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/</a></li>
</ul>`,r:{minutes:.85,words:255},y:"a",t:"指南",i:"creative",I:0},["/blog/index.html","/blog/README.md"]],["v-a39c4cfa","/blog/body.html",{d:"2022-06-02T14:06:39.000Z",e:`<h1> 自述</h1>
<h2> 介绍⛪</h2>
<ul>
<li>学习一些新东西，体验一些新东西。</li>
</ul>
<h2> 堆栈😆</h2>
<h3> 栈🍎</h3>
<ul>
<li>栈内存</li>
<li>方法栈</li>
<li>本地方法栈</li>
<li>描述：在本地方法读取，其变量的内存大小是可预见的。</li>
<li>代码优化: 本地变量获取赋值如果不需要修改则请使用 final 修饰变量</li>
</ul>
<h3> 堆🍏</h3>
<ul>
<li>堆内存</li>
<li>描述：内存大小是不固定的。内存地址的位置也不固定。</li>
<li>代码建议: 尽量不使用或替换到本地方法变量，找寻内存地址也需要时间。</li>
</ul>`,r:{minutes:.56,words:169},y:"a",t:"自述",i:"light",O:1},["/blog/body","/blog/body.md"]],["v-883c5c18","/blog/desc.html",{d:"2022-10-21T07:52:34.000Z",e:`<h1> Desc</h1>
<h2> 介绍💒</h2>
<ul>
<li>2022/10/21</li>
</ul>
<h2> 博客数据🍒</h2>
<ul>
<li>此后每月1日更新一次！</li>
<li>日期: 2022/10/21</li>
</ul>
`,r:{minutes:4.29,words:1287},y:"a",t:"Desc",i:"study",O:2},["/blog/desc","/blog/desc.md"]],["v-d8862ffc","/blog/random.html",{d:"2022-11-17T01:44:46.000Z",e:`<h1> 随笔</h1>
<ul>
<li>2022/6/2</li>
</ul>
<h2> 多线程🍎</h2>
<ul>
<li>线程的状态</li>
<li>创建，运行，休眠，阻塞，死亡</li>
</ul>
<h3> ThreadPoolExecutor🍉</h3>
<ul>
<li>线程池的描述</li>
<li>参数：5-7个</li>
<li>核心线程数</li>
<li>最大线程数</li>
<li>最大空闲时间</li>
<li>时间类型(秒，分，时)</li>
<li>队列</li>
<li>线程工厂</li>
<li>拒绝策略</li>
</ul>
<p><img src="/images/ThreadPool.png" alt="线程池"></p>`,r:{minutes:.64,words:193},y:"a",t:"随笔",i:"style"},["/blog/random","/blog/random.md"]],["v-0439749c","/blog/video.html",{d:"2022-10-15T10:46:27.000Z",e:`<h1> Video</h1>
<h2> 觉得不错的b站视频👊</h2>
`,r:{minutes:.07,words:21},y:"a",t:"Video",i:"support"},["/blog/video","/blog/video.md"]],["v-2d0a870d","/en/",{y:"h",t:"Front page",i:"home"},["/en/index.html","/en/README.md"]],["v-67d16688","/plugins/",{d:"2022-12-09T11:31:09.000Z",e:`<h1> Plugins</h1>
<h2> 介绍</h2>
<div class="hint-container tip">
<p class="hint-container-title">插件介绍</p>
<ul>
<li>2022/10/21</li>
<li>实现一些目前阶段常用组件</li>
<li>这些是在学习的过程中开发的插件，用于辅助开发提高效率</li>
</ul>
</div>
<h2> 功能</h2>
<ul>
<li>具体功能请查看对于文件</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">结尾</p>
<ul>
<li>这些插件都是来自对重复性工作的抽离</li>
<li>未来将会根据情况开发一些新插件，来满足其他场景的应用!</li>
</ul>
</div>`,r:{minutes:.37,words:111},y:"a",t:"插件",I:0},["/plugins/index.html","/plugins/README.md"]],["v-4a5f1fe4","/plugins/gorm.html",{d:"2022-10-18T01:12:32.000Z",e:`<h1> Gorm</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍🐱</h2>
<div class="hint-container warning">
<p class="hint-container-title">描述</p>
<ul>
<li>2022/8</li>
<li>基于Gorm 和 Gin 制作的代码生成插件</li>
<li>如果您对使用文档有任何建议，非常乐意接受您的反馈。</li>
</ul>
</div>`,r:{minutes:3.53,words:1059},y:"a",t:"Gorm",i:"hot"},["/plugins/gorm","/plugins/gorm.md"]],["v-0167aec8","/plugins/io-game.html",{d:"2022-11-26T06:26:47.000Z",e:`<h1> IoGame</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li><s>对于使用问题，您还可以加群询问。</s></li>
<li><s>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></s></li>
</ul>
</div>
<h2> 重要</h2>`,r:{minutes:1.88,words:563},y:"a",t:"IoGame",i:"java"},["/plugins/io-game","/plugins/io-game.md"]],["v-33afe9f2","/plugins/java-orm.html",{d:"2022-12-15T07:06:48.000Z",e:`<h1> JavaOrm</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>
<ul>
<li>2022/9/14</li>
<li>基于MybatisPlus 和 SpringBoot 制作的代码生成插件</li>
<li>支持SpringBoot项目快速搭建.</li>
<li>插件地址: <a href="https://plugins.jetbrains.com/plugin/20888-javaorm" target="_blank" rel="noopener noreferrer">https://plugins.jetbrains.com/plugin/20888-javaorm</a></li>
</ul>`,r:{minutes:.96,words:287},y:"a",t:"JavaOrm",i:"java"},["/plugins/java-orm","/plugins/java-orm.md"]],["v-4bd5befb","/plugins/request-tool.html",{d:"2023-01-21T02:27:45.000Z",e:`<h1> RequestTool</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>`,r:{minutes:1.44,words:431},y:"a",t:"RequestTool",i:"tool"},["/plugins/request-tool","/plugins/request-tool.md"]],["v-9376cbd8","/plugins/rocket-cat.html",{d:"2023-04-10T03:12:57.000Z",e:`<h1> RocketCat</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>
`,r:{minutes:.66,words:199},y:"a",t:"RocketCat",i:"hot"},["/plugins/rocket-cat","/plugins/rocket-cat.md"]],["v-eadc129a","/plugins/rs-orm.html",{d:"2022-12-15T07:06:48.000Z",e:`<h1> RsRom</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>
<ul class="task-list-container">
<li>2022/12/15</li>
<li>基于Actix+SeaOrm的Idea插件</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 是否开发</label></li>
</ul>`,r:{minutes:.17,words:52},y:"a",t:"RsRom",i:"launch"},["/plugins/rs-orm","/plugins/rs-orm.md"]],["v-eeac3bce","/plugins/vue-admin.html",{d:"2022-10-18T01:12:32.000Z",e:`<h1> VueAdmin</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
<li>这个示例前端后台模板</li>
<li>未来可能会和生态插件Gorm等绑定到一起</li>
</ul>`,r:{minutes:.57,words:170},y:"a",t:"VueAdmin",i:"vue"},["/plugins/vue-admin","/plugins/vue-admin.md"]],["v-d7188082","/study/",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 指南</h1>
<h2> 介绍</h2>
<div class="hint-container tip">
<p class="hint-container-title">介绍</p>
<ul>
<li>2022/12/9</li>
<li>一个博客网站，把一些文章整理成一起！</li>
</ul>
</div>
<table>
<thead>
<tr>
<th>模块名</th>
<th>作用</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td>Game</td>
<td>游戏开发相关</td>
<td><a href="/study/game/game.html" target="blank">Game</a></td>
</tr>
<tr>
<td>Go</td>
<td>Go技术相关</td>
<td><a href="/study/go/go.html" target="blank">Go</a></td>
</tr>
<tr>
<td>Java</td>
<td>Java技术相关</td>
<td><a href="/study/java/java.html" target="blank">Java</a></td>
</tr>
<tr>
<td>Linux</td>
<td>Linux技术相关</td>
<td><a href="/study/linux/linux.html" target="blank">Linux</a></td>
</tr>
<tr>
<td>Try</td>
<td>尝试的技术</td>
<td><a href="/study/try/asset.html" target="blank">Try</a></td>
</tr>
<tr>
<td>Web</td>
<td>Web技术相关</td>
<td><a href="/study/try/vue.html" target="blank">Web</a></td>
</tr>
</tbody>
</table>`,r:{minutes:.5,words:151},y:"a",t:"指南",i:"creative",I:0},["/study/index.html","/study/README.md"]],["v-156a1114","/util/",{d:"2022-12-15T07:06:48.000Z",e:`<h1> 小工具</h1>
<h2> 介绍🍉</h2>
<ul>
<li>有些软件还没进行分类</li>
<li>搜集一些好用的工具</li>
<li>2022/7/29</li>
</ul>
<h2> 工具列表🐸</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>无论你是开发者,或平常用电脑的人,以下总有一款适合你的工具</p>
</div>
<h3> Icon素材</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>网址</th>
<th>是否免费</th>
</tr>
</thead>
<tbody>
<tr>
<td>pixabay</td>
<td><a href="https://pixabay.com/zh" target="_blank" rel="noopener noreferrer">https://pixabay.com/zh</a></td>
<td>免费(图片)</td>
</tr>
<tr>
<td>iconpark</td>
<td><a href="https://iconpark.oceanengine.com/official" target="_blank" rel="noopener noreferrer">https://iconpark.oceanengine.com/officia</a></td>
<td>免费</td>
</tr>
<tr>
<td>lottiefiles</td>
<td><a href="https://lottiefiles.com/featured" target="_blank" rel="noopener noreferrer">https://lottiefiles.com/featured</a></td>
<td>免费/付费</td>
</tr>
<tr>
<td>iconfont</td>
<td><a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">https://www.iconfont.cn/</a></td>
<td>付费</td>
</tr>
<tr>
<td>iconscout</td>
<td><a href="https://iconscout.com/" target="_blank" rel="noopener noreferrer">https://iconscout.com/</a></td>
<td>付费</td>
</tr>
<tr>
<td>pixeltrue</td>
<td><a href="https://www.pixeltrue.com/packs" target="_blank" rel="noopener noreferrer">https://www.pixeltrue.com/packs</a></td>
<td>付费</td>
</tr>
</tbody>
</table>`,r:{minutes:1.34,words:402},y:"a",t:"插件",I:0},["/util/index.html","/util/README.md"]],["v-34c0cc3a","/util/common.html",{d:"2023-02-13T06:03:11.000Z",e:`<h1> 通用工具</h1>
<h2> 内存节约工具</h2>
<ul>
<li>win11有时会吞掉一些内存,使用该工具可以显著减少内存占用</li>
<li>下载该工具运行压缩包里面的: RAMMap.exe 文件,使用下图用法</li>
<li><a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/rammap" target="_blank" rel="noopener noreferrer">rammap</a></li>
</ul>
<p><img src="/images/util1.png" alt=""></p>`,r:{minutes:.89,words:266},y:"a",t:"通用工具"},["/util/common","/util/common.md"]],["v-6b01bef8","/util/dev.html",{d:"2023-02-13T06:03:11.000Z",e:`<h1> 开发工具</h1>
<h2> Fleet</h2>
<ul>
<li>2022/12/8</li>
<li>一个新的代码编辑工具</li>
</ul>
<h3> 主题编辑器</h3>
<ul>
<li><a href="https://hueflake.dev/apps/fleet" target="_blank" rel="noopener noreferrer">https://hueflake.dev/apps/fleet</a></li>
</ul>
<h2> Github</h2>
<ul>
<li>2022/12/15</li>
<li>加速访问Github</li>
<li>都是免费可以使用的</li>
</ul>`,r:{minutes:.35,words:105},y:"a",t:"开发工具"},["/util/dev","/util/dev.md"]],["v-4331a9ae","/util/idea.html",{d:"2022-08-13T17:15:01.000Z",e:`<h1> Idea插件</h1>
<h2> 介绍🐔</h2>
<ul>
<li>最牛皮的开发工具 Idea 比 &gt; Eclipse 强大N倍</li>
<li><a href="https://www.ajihuo.com/idea/4222.html" target="_blank" rel="noopener noreferrer">https://www.ajihuo.com/idea/4222.html</a></li>
<li><a href="https://idea.medeming.com/" target="_blank" rel="noopener noreferrer">https://idea.medeming.com/</a></li>
<li><a href="http://idea.javatiku.cn/" target="_blank" rel="noopener noreferrer">http://idea.javatiku.cn/</a></li>
<li>购买激活，没买过</li>
<li><a href="https://javaforall.cn/128783.html" target="_blank" rel="noopener noreferrer">https://javaforall.cn/128783.html</a></li>
<li><a href="https://gitee.com/ja-netfilter/ja-netfilter" target="_blank" rel="noopener noreferrer">https://gitee.com/ja-netfilter/ja-netfilter</a></li>
</ul>`,r:{minutes:1.7,words:511},y:"a",t:"Idea插件",I:0},["/util/idea","/util/idea.md"]],["v-e4904468","/en/english/",{d:"2023-02-26T11:27:21.000Z",e:`<h1> English</h1>
<h2> Desc</h2>
<ul>
<li>2023/2/26</li>
<li>I am studying English. This is my diary.</li>
</ul>
`,r:{minutes:.06,words:17},y:"a",t:"English",i:"creative",I:0},["/en/english/index.html","/en/english/README.md"]],["v-c0e604d0","/en/english/day1.html",{d:"2023-02-26T11:27:21.000Z",e:`<h1> Day1</h1>
<h2> Desc</h2>
<ul>
<li>2023/2/26</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>读音</th>
<th>Desc</th>
<th>World</th>
<th>读音</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>six</td>
<td></td>
<td>6</td>
<td>Saturday</td>
<td>sætərdeɪ</td>
<td>周6</td>
</tr>
<tr>
<td>guy</td>
<td>ɡaɪ</td>
<td>男人</td>
<td>dress</td>
<td>dres</td>
<td>连衣裙</td>
</tr>
<tr>
<td>tonight</td>
<td>təˈnaɪt</td>
<td>今晚</td>
<td>expensive</td>
<td>ɪkˈspensɪv</td>
<td>贵的</td>
</tr>
<tr>
<td>watch</td>
<td>wɑːtʃ</td>
<td>手表</td>
<td>buy</td>
<td>baɪ</td>
<td>买</td>
</tr>
<tr>
<td>skirt</td>
<td>skɜːrt</td>
<td>短裙</td>
<td>too</td>
<td>tuː</td>
<td>太,过于</td>
</tr>
<tr>
<td>cell phone</td>
<td>sɛl fon</td>
<td>手机</td>
<td>shirt</td>
<td>ʃɜːrt</td>
<td>衬衫</td>
</tr>
<tr>
<td>yuan</td>
<td>juˈɑːn</td>
<td>元</td>
<td>seventeen</td>
<td></td>
<td>17</td>
</tr>
<tr>
<td>different</td>
<td>dɪfrənt</td>
<td>不同的</td>
<td>His</td>
<td>hɪz; ɪz</td>
<td>他的</td>
</tr>
<tr>
<td>coat</td>
<td>koʊt</td>
<td>外套</td>
<td>sixteen</td>
<td></td>
<td>16</td>
</tr>
<tr>
<td>jeans</td>
<td>dʒiːnz</td>
<td>牛仔裤</td>
<td>those</td>
<td>ðoʊz</td>
<td>那些</td>
</tr>
<tr>
<td>both</td>
<td>boʊθ</td>
<td>两个</td>
<td>favorite</td>
<td>feɪvərɪt</td>
<td>最喜欢的</td>
</tr>
</tbody>
</table>`,r:{minutes:.39,words:118},y:"a",t:"Day1"},["/en/english/day1","/en/english/day1.md"]],["v-5245b9ca","/en/english/day10.html",{d:"2023-03-22T15:23:48.000Z",e:`<h1> Day10</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/22</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>What time does the basketball game start?</li>
<li>It starts at eleven o'clock.</li>
<li>We have time today. We want to watch a soccer game together.</li>
<li>We always play soccer at three o'clock on Fridays.</li>
<li>Do they have time?</li>
<li>Do you have a math class at three o'clock on Thursday?</li>
<li>Dou is never late for work.</li>
<li>I have time.</li>
<li>What time does the English class start?</li>
<li>Are they late for work?</li>
<li>On Thursday.</li>
<li>Thursday or Tuesday.</li>
<li>Do you unually work on Fridays?</li>
<li>What time does the exam start?</li>
<li>They are not late for work.</li>
<li>Do you unually go to school on Fridays?</li>
</ul>`,r:{minutes:.37,words:110},y:"a",t:"Day10"},["/en/english/day10","/en/english/day10.md"]],["v-53fa9269","/en/english/day11.html",{d:"2023-03-25T14:55:22.000Z",e:`<h1> Day11</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/25</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>five buese</li>
<li>Anna , look , It's ten o'clock . You are late(迟到) for class.</li>
<li>I don't want to go to school. Please come(来) to my house.</li>
<li>Please come here.</li>
<li>Don't close the window,mom.</li>
<li>I study English every day. I don't want to study math.</li>
<li>Look ! The school is closed.</li>
<li>Look ! Our teacher is here.</li>
<li>Dou , come here.</li>
<li>There(有) are two buses.</li>
<li>I don't want to do(做) my homework.</li>
<li>one bus or two buses?</li>
<li>Look ! Duo is here.</li>
<li>Dou doesn't want to do his homework.</li>
<li>Does she go to the bookstore every day.</li>
<li>We have many classes during the week, Don't forget(忘记) your books.</li>
<li>Does Anna study every day.</li>
<li>Where is the bookstore?</li>
<li>Duo, come here Please</li>
<li>Ben goes(前进) to English class during the week, but  I go on Saturday.(星期六)</li>
<li>Anna, Open the window Please.</li>
<li>Duo, come(来) here please.</li>
<li>She goes(去) to work every morning.</li>
<li>Ben goes to school every morning.</li>
<li>Don't forget(忘记) your call phone.</li>
<li>Is that bookstore open?</li>
<li>Don't forget your keys.</li>
<li>Duo does his homework every evening.</li>
<li>I go to school every day during the week(期间)</li>
<li>She sometimes does her homework at school.</li>
</ul>`,r:{minutes:.74,words:222},y:"a",t:"Day11"},["/en/english/day11","/en/english/day11.md"]],["v-55af6b08","/en/english/day12.html",{d:"2023-03-27T14:06:29.000Z",e:`<h1> Day12</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/27</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>ten,twenty(20)</li>
<li>twenty plates(盘子)</li>
<li>Sure(当然)</li>
<li>Do you want to eat dinner now?</li>
<li>What(什么) is it?  -&gt; is it(它是)的疑问形式</li>
<li>Do you neet a plate.</li>
<li>Please wait(等) for ten minutes.(分钟)</li>
<li>Oh, sure! We understand(懂,明白). The restaurant is busy. We can wait for ten minutes.</li>
<li>Can you wait for twenty minutes?</li>
<li>You need to wait for five minutes.</li>
<li>It is a menu.</li>
<li>I can help you.</li>
<li>Ben can I eat your cake?</li>
<li>Sorry, You cannot,But you can eay my pizza.</li>
<li>Can(可以,会) I sit(坐) here?</li>
<li>Can we sit in these chairs?</li>
<li>Sure, you can sit next(旁边,下一个) to the window.</li>
<li>John, can I eat your sandwich?</li>
<li>Sorry, I cannot help you.</li>
<li>We cannot go to this restaurant. It's closed.</li>
<li>You cannot sit here.</li>
<li>Do you need me in the kitchen(厨房)?</li>
<li>You cannot drink coffee, son.</li>
<li>Please help me.</li>
<li>Anna can you help me.</li>
<li>Excuse me, can you help me.</li>
<li>Sorry, I don't have money. Can you pay(付钱) for me?</li>
<li>This sandwich is good , but I can't eat it, Can you eat it?</li>
<li>I can't help you. sorry.</li>
<li>Where is my wallet(钱包)? I need some money.</li>
<li>You can't eat it.</li>
<li>You can't eat here</li>
<li>How much money do we need?</li>
<li>You don't need to pay for it.  (to pay for it = 为它付钱)</li>
<li>Can I pay for it now?</li>
<li>Where is my money.</li>
</ul>`,r:{minutes:.9,words:271},y:"a",t:"Day12"},["/en/english/day12","/en/english/day12.md"]],["v-576443a7","/en/english/day13.html",{d:"2023-03-28T15:23:39.000Z",e:`<h1> Day13</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/28</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>I want to learn to cook noodles(面条).</li>
<li>an easy game.</li>
<li>Emma loves American football, and she plays very well. Now she wants to learn to play the piano.</li>
<li>a computer game.</li>
<li>We want to learn to play the piano.</li>
<li>Can you play American football?</li>
<li>I like to play American football.</li>
<li>Duo cooks very well.</li>
<li>Ben plays this game every day. He likes play games with his friends.</li>
<li>Do you like to play American football?</li>
<li>She draws(画画) very well(非常好).</li>
<li>I want to learn to play the guitar.</li>
<li>I don't play the guitar very well. (我吉他弹得不是非常好)</li>
<li>He needs to learn to drive.</li>
<li>She can play tennis, But she can't play American football.</li>
<li>Can he play American football?</li>
<li>He can play soccer very well.</li>
<li>Do you speak Chinese or Japanese?</li>
<li>He cannot play the guitar, but he can play the piano.</li>
<li>I want to ride(骑) a horse(🐎), but I can't.</li>
<li>He wants to learn(学习) to cook.</li>
<li>Soccer or American football.</li>
<li>Do you play the guitar or the piano.</li>
<li>He wants to dance, but he can't.</li>
<li>Anna doesn't cook very well.(非常好,出现don't相关则=不是非常好)</li>
<li>He needs to learn to drive.</li>
<li>Duo rides a bike to school every day.</li>
<li>I want to learn to ride a horse.(我想要学骑马)</li>
</ul>`,r:{minutes:.85,words:255},y:"a",t:"Day13"},["/en/english/day13","/en/english/day13.md"]],["v-59191c46","/en/english/day14.html",{d:"2023-04-06T15:43:24.000Z",e:`<h1> Day14</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/6</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>John,are you playing baseball with your sister?</li>
<li>Are you talking(在跟说话) to me?</li>
<li>Tom is very busy right noew. He's doing his homework.</li>
<li>He is talking to you.</li>
<li>We are doing our homework now. Do you want to do homework together?</li>
<li>They're at a Japanese restaurant.</li>
<li>Do you play tennis? We are playing tennis right now.</li>
<li>I love Japenese food.</li>
<li>Do you want to talk to Grandma? I'm talking to her now.</li>
<li>Are they playing basketball?</li>
<li>Are they doing their homework right now.</li>
<li>Hi is playing baseball.</li>
<li>Is she talking to him right now?</li>
</ul>`,r:{minutes:.36,words:107},y:"a",t:"Day14"},["/en/english/day14","/en/english/day14.md"]],["v-5acdf4e5","/en/english/day15.html",{d:"2023-04-07T02:59:53.000Z",e:`<h1> Day15</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/7</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>let me say this: (让我说这个)</li>
<li>bein a idiot is no box of chocolates.(做一个白痴可不像一盒巧克力)</li>
<li></li>
</ul>
`,r:{minutes:.12,words:37},y:"a",t:"Day15"},["/en/english/day15","/en/english/day15.md"]],["v-5c82cd84","/en/english/day16.html",{d:"2023-04-08T14:10:34.000Z",e:`<h1> Day16</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/8</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>He lives in California with his child.</li>
<li>Are you looking for your cell phone.</li>
<li>I like your new gray jacket.</li>
<li>Why do you like to play the piano?</li>
<li>Look at her!</li>
<li>Who is she?</li>
<li>Can you look at the camera.</li>
<li>He wants four children, two boys and two girls.</li>
<li>Hi Tom! I'm at the restaurant, and I'm looking for our table. Can you see me.</li>
<li>She always wears a black jacket.</li>
<li>They want three children.</li>
<li>I can't see the clock.</li>
</ul>`,r:{minutes:.39,words:118},y:"a",t:"Day16"},["/en/english/day16","/en/english/day16.md"]],["v-5e37a623","/en/english/day17.html",{d:"2023-04-10T13:41:00.000Z",e:`<h1> Day17</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/10</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>sitting 坐着</li>
<li>My sisters are shopping , and I  am playing soccer.</li>
<li>My Dog loves to play with a tennis ball.</li>
<li>I am sitting with Mom , and thdy are sitting with Dad.</li>
<li>I can't find my friends.</li>
<li>They're sitting over there.</li>
<li>I am playing tennis, and my cats are playing with a tennis ball.</li>
<li>Is Anna shopping?</li>
<li>No, she's sitting in the car.</li>
<li>I can't find my teenis ball.</li>
<li>Is she shopping right noew?</li>
<li>Can you find Duo?</li>
<li>Can you find my ticket?</li>
<li>He is sitting next to his daughter.</li>
<li>Thay are shopping together right now.</li>
<li>Look! It's snowing outside!</li>
<li>It's raining outside. Let's stay here. We can watch a movie.</li>
<li>Ben, is it raining now? No,let's go outside!</li>
<li>The boys want to play outside.</li>
<li>Don't go outside! It snowing now. It's snows a lot at night.</li>
</ul>`,r:{minutes:.52,words:156},y:"a",t:"Day17"},["/en/english/day17","/en/english/day17.md"]],["v-5fec7ec2","/en/english/day18.html",{d:"2023-04-18T06:10:52.000Z",e:`<h1> Day18</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/18</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>a am are app apple append American</li>
<li>bind Ben birthday boy brother boyfirend banana black blue by buy</li>
<li>cat catch cache chicken child children China Chinese color come coming coffee cold cna't can</li>
<li>day dad daughter dog docker doctor desk don't do down</li>
<li>egg end English England eat eating exit</li>
<li>fish father find four firt fast finding  friend friends</li>
<li>go goalng good</li>
<li>happy hat have he hello her here his hi hey has how</li>
<li>I idea if in is it image</li>
<li>jump jumping java jacke jay jar join joinning</li>
<li>kind kitchen</li>
<li>like love look looking linux</li>
<li>mother mom me my money monkey morning make making</li>
<li>name nice no not now</li>
<li>open orange one on out of off ok okay</li>
<li>play playing pay party pinching phone picture pig pen pencil paper pink</li>
<li>quick quit question</li>
<li>read reading red right run running rabbit</li>
<li>she shoping show sing singing sit sitting sister six sixty sever start starting stop stoping</li>
<li>the there they this that to too two ten teach teacher team teachering tomorrow touch touching today toyear</li>
<li>up us use unity under</li>
<li>very video visit visitng</li>
<li>where who what when why with water want wants watch watching wash washing white window want wants windows  Weather</li>
<li>x</li>
<li>yuan yellow yes you your young younger youngest</li>
<li>zero</li>
</ul>`,r:{minutes:1.12,words:335},y:"a",t:"Day18"},["/en/english/day18","/en/english/day18.md"]],["v-61a15761","/en/english/day19.html",{d:"2023-04-21T13:27:55.000Z",e:`<h1> Day19</h1>
<h2> Desc</h2>
<ul>
<li>2023/4/21</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>near 附近</li>
<li>zoo 动物园</li>
<li>town 小镇</li>
</ul>
<h2> 语法分析</h2>
<ul>
<li>-&gt; 表示从前往后理解</li>
<li>&lt;- 表示从后往前理解</li>
</ul>
<h3> Is duo from a small town near Beijing?</h3>
<ul>
<li>朵儿来自北京附近的一个小镇</li>
<li>Is duo from -&gt;</li>
<li>a small town near Beijing &lt;-</li>
</ul>`,r:{minutes:.56,words:168},y:"a",t:"Day19"},["/en/english/day19","/en/english/day19.md"]],["v-bd7c5392","/en/english/day2.html",{d:"2023-02-27T03:14:57.000Z",e:`<h1> Day2</h1>
<h2> Desc</h2>
<ul>
<li>2023/2/27</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>读音</th>
<th>Desc</th>
<th>World</th>
<th>读音</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>different</td>
<td></td>
<td>不同的</td>
<td>Does</td>
<td></td>
<td>吗</td>
</tr>
<tr>
<td>tennis</td>
<td></td>
<td>网球</td>
<td>fruit</td>
<td></td>
<td>水果</td>
</tr>
<tr>
<td>train</td>
<td></td>
<td>火车</td>
<td>station</td>
<td></td>
<td>站</td>
</tr>
<tr>
<td>subwary</td>
<td></td>
<td>地铁</td>
<td>right</td>
<td></td>
<td>就</td>
</tr>
<tr>
<td>bathroom</td>
<td></td>
<td>洗手间</td>
<td>ticket</td>
<td></td>
<td>票</td>
</tr>
</tbody>
</table>`,r:{minutes:.89,words:268},y:"a",t:"Day2"},["/en/english/day2","/en/english/day2.md"]],["v-ba12a254","/en/english/day3.html",{d:"2023-02-28T14:21:57.000Z",e:`<h1> Day3</h1>
<h2> Desc</h2>
<ul>
<li>2023/2/28</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>Desc</th>
<th>间隔</th>
<th>World</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>funny</td>
<td>有趣的</td>
<td></td>
<td>movie</td>
<td>电影</td>
</tr>
<tr>
<td>baseball</td>
<td>棒球</td>
<td></td>
<td>daughter</td>
<td>女儿</td>
</tr>
<tr>
<td>cook</td>
<td>做法</td>
<td></td>
<td>draw</td>
<td>画</td>
</tr>
<tr>
<td>sometimes</td>
<td>有的时候</td>
<td></td>
<td>talk</td>
<td>谈谈</td>
</tr>
<tr>
<td>then</td>
<td>那么</td>
<td></td>
<td>first</td>
<td>首先</td>
</tr>
<tr>
<td>sure</td>
<td>没问题</td>
<td></td>
<td>great</td>
<td>很棒</td>
</tr>
<tr>
<td>often</td>
<td>经常</td>
<td></td>
<td>university</td>
<td>大学</td>
</tr>
<tr>
<td>washes</td>
<td>洗</td>
<td></td>
<td>hands</td>
<td>手</td>
</tr>
<tr>
<td>eye</td>
<td>眼睛</td>
<td></td>
<td>has</td>
<td>有</td>
</tr>
<tr>
<td>hair</td>
<td>头发</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.23,words:70},y:"a",t:"Day3"},["/en/english/day3","/en/english/day3.md"]],["v-b6a8f116","/en/english/day4.html",{d:"2023-03-01T13:02:23.000Z",e:`<h1> Day4</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/1</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>Desc</th>
<th>间隔</th>
<th>World</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>has</td>
<td>有</td>
<td></td>
<td>eighteen</td>
<td>18</td>
</tr>
<tr>
<td>those</td>
<td>那些</td>
<td></td>
<td>brown</td>
<td>棕色</td>
</tr>
<tr>
<td>eyes</td>
<td>棕色</td>
<td></td>
<td>daughter</td>
<td>女儿</td>
</tr>
<tr>
<td>washes</td>
<td>洗</td>
<td></td>
<td>face</td>
<td>脸</td>
</tr>
<tr>
<td>parents</td>
<td>PengRunCi</td>
<td></td>
<td>tall</td>
<td>高(Tao)</td>
</tr>
<tr>
<td>doesn't</td>
<td>DaZheTe</td>
<td></td>
<td>hair</td>
<td>头发</td>
</tr>
<tr>
<td>wife</td>
<td>妻子</td>
<td></td>
<td>Saturday</td>
<td>周六</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.79,words:236},y:"a",t:"Day4"},["/en/english/day4","/en/english/day4.md"]],["v-b33f3fd8","/en/english/day5.html",{d:"2023-03-03T13:49:08.000Z",e:`<h1> Day5</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/3</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>Desc</th>
<th>间隔</th>
<th>World</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>pork</td>
<td>猪肉</td>
<td></td>
<td>beef</td>
<td>牛肉</td>
</tr>
<tr>
<td>food</td>
<td>食物</td>
<td></td>
<td>make</td>
<td>做</td>
</tr>
<tr>
<td>kind</td>
<td>种类</td>
<td></td>
<td>lunch</td>
<td>午饭</td>
</tr>
<tr>
<td>dinner</td>
<td>晚饭</td>
<td></td>
<td>Would you like</td>
<td>你想要吗</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.14,words:41},y:"a",t:"Day5"},["/en/english/day5","/en/english/day5.md"]],["v-afd58e9a","/en/english/day6.html",{d:"2023-03-04T15:59:14.000Z",e:`<h1> Day6</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/4</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>Desc</th>
<th>间隔</th>
<th>World</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>late</td>
<td>迟到</td>
<td></td>
<td>yuan</td>
<td>元</td>
</tr>
</tbody>
</table>
<h2> bing</h2>`,r:{minutes:.06,words:19},y:"a",t:"Day6"},["/en/english/day6","/en/english/day6.md"]],["v-ac6bdd5c","/en/english/day7.html",{d:"2023-03-06T13:26:42.000Z",e:`<h1> Day7</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/5</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<table>
<thead>
<tr>
<th>World</th>
<th>Desc</th>
<th>间隔</th>
<th>World</th>
<th>Desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>wash</td>
<td>洗</td>
<td></td>
<td>often</td>
<td>经常</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:.06,words:19},y:"a",t:"Day7"},["/en/english/day7","/en/english/day7.md"]],["v-a9022c1e","/en/english/day8.html",{d:"2023-03-06T15:32:14.000Z",e:`<h1> Day8</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/6</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>She wants food, not water.(她想要食物，不是水)</li>
<li>To the airport.(去机场)</li>
<li>Anna lives with Ben.(安娜跟本一起住)</li>
<li>Ha has a phone.(他有一部电话)</li>
<li>I work at a book store.(我在一个书店上班)</li>
<li>Excuse me, I would like a subway ticket.</li>
<li>Please wash your clothes tonight.</li>
<li>Our taxi is right here!</li>
<li>This cat wants to buy some fish.</li>
<li>She teaches Spanish.</li>
<li>Does she eat chicken?</li>
<li>Do you like these shoes?</li>
<li>Yes, but they're five hundred dollars!(是的,但他们是500美元)</li>
<li>I want to buy some clothes.</li>
<li>Do you want to buy that book now ?</li>
<li>They are very nice!(他们很不错)</li>
<li>These are nice jackets! How much are they?(这些不错的夹克,他们多少钱)</li>
<li>two clothes stores(两个服装店)</li>
<li>Are those restaurants  open?(那些餐厅开门吗)</li>
<li>Is that your favorite clothes store?(那是你最喜欢的服装店吗)</li>
</ul>`,r:{minutes:.65,words:195},y:"a",t:"Day8"},["/en/english/day8","/en/english/day8.md"]],["v-a5987ae0","/en/english/day9.html",{d:"2023-03-20T12:20:45.000Z",e:`<h1> Day9</h1>
<h2> Desc</h2>
<ul>
<li>2023/3/20</li>
</ul>
<h2> Study</h2>
<h3> Words</h3>
<ul>
<li>Does his right foot hurt.</li>
<li>Our farm has chickens and pigs,but we want to but more animals.</li>
<li>There is a bird on my head.</li>
<li>It is nine o'clock.</li>
<li>Which place is your favorite?</li>
<li>Is that a bird?</li>
<li>ont tooth.</li>
<li>Do you want to go to the park together?</li>
<li>Is that your farm?  Are there a lot of horses?</li>
<li>These are the hotels in New York. Are these hotels near the subway station?</li>
<li>on my nose.</li>
<li>a man's foot.</li>
<li>a bus stop.</li>
<li>My dog's legs are long</li>
<li>Does the movie start at twelve? Do you want bo buy the tickets?</li>
<li>That is a fish.</li>
<li>I never watch TV,but my sister always watches TV on Sundays.</li>
<li>The game starts at five.</li>
<li>My right eye.</li>
<li>What time deos the movie start.</li>
<li>Dou,what time is it?</li>
<li>Sorry,I don't have time.</li>
<li>Your hands are not clean.</li>
<li>My foot are cold.</li>
<li>He needs a vacation.</li>
<li>What time do you go to work?</li>
<li>Those towns.</li>
<li>Both  universities are famous.</li>
<li>This afternoon.</li>
<li>At eleven.</li>
<li>The park is next to the university.</li>
<li>at four o'clock in the afternoon.</li>
<li>How many chickens are there in the garden?</li>
<li>There are many fish here.</li>
<li>Do you want to go to work together?</li>
<li>This restaurant is busy.</li>
</ul>`,r:{minutes:.72,words:216},y:"a",t:"Day9"},["/en/english/day9","/en/english/day9.md"]],["v-0a92777c","/en/english/study.html",{d:"2023-03-10T00:37:52.000Z",e:`<h1> Study</h1>
<h2> 前缀(12)-义</h2>
<table>
<thead>
<tr>
<th>主意</th>
<th>词缀</th>
<th>示例</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>外/出</td>
<td>e/ex/ef</td>
<td>export(出口)</td>
<td>外</td>
</tr>
<tr>
<td>内/进</td>
<td>in/im</td>
<td>inject(注射)</td>
<td>进</td>
</tr>
<tr>
<td>向前</td>
<td>pro</td>
<td>progress(进步)</td>
<td>前-动态</td>
</tr>
<tr>
<td>在前/预先/提前</td>
<td>pre</td>
<td>prefix(前缀)prepay(预先支付)</td>
<td>前-静态</td>
</tr>
<tr>
<td>回/重新/再次</td>
<td>re</td>
<td>return(返回)restart(重启)</td>
<td>回</td>
</tr>
<tr>
<td>一起/共同</td>
<td>co/con/com/col</td>
<td>connect(联系)collect(收集)</td>
<td>聚集</td>
</tr>
<tr>
<td>分散/分开</td>
<td>di/dis/dif</td>
<td>divide(分成)</td>
<td>分散</td>
</tr>
<tr>
<td>上/超过</td>
<td>super/over/sur</td>
<td>surpass(超过)</td>
<td>上</td>
</tr>
<tr>
<td>下/不足</td>
<td>under/de/sub/sup</td>
<td>degrade(降级)</td>
<td>下</td>
</tr>
<tr>
<td>转移/转变</td>
<td>trans</td>
<td>transfer(转账)</td>
<td>转变</td>
</tr>
<tr>
<td>相互之间</td>
<td>inter</td>
<td>internet(互联网)</td>
<td>相互</td>
</tr>
<tr>
<td>a+双写辅音字母</td>
<td>强调</td>
<td>Assert(断言)</td>
<td></td>
</tr>
<tr>
<td>否定前缀</td>
<td>un/in/im/dis/ab/il</td>
<td>unhappy(不开心)</td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:1.36,words:409},y:"a",t:"Study",O:1},["/en/english/study","/en/english/study.md"]],["v-9b94b2c8","/en/plugins/",{d:"2023-02-26T11:27:21.000Z",e:`<h1> Plugins</h1>
<h2> Desc</h2>
<ul>
<li>2022/10/21</li>
<li>Hi,If you look this page.</li>
<li>The sidebars are all my Idea plug-ins, some java or go related.</li>
</ul>
<h2> Menu</h2>
<h3> Supported</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Gorm</label></li>
</ul>`,r:{minutes:.1,words:31},y:"a",t:"Plugins",i:"creative",I:0},["/en/plugins/index.html","/en/plugins/README.md"]],["v-72f1067a","/en/plugins/gorm.html",{d:"2022-11-23T10:07:54.000Z",e:`<h1> Gorm</h1>
<div class="hint-container info">
<p class="hint-container-title">Significant</p>
<ul>
<li>2023/2/9</li>
<li>For usage issues, you can send them to me via the email address on the plugin's homepage. <a href="https://plugins.jetbrains.com/plugin/20411-gorm" target="_blank" rel="noopener noreferrer">Gorm</a></li>
<li>English documentation may not be up to date,The latest documentation can be accessed here. <a href="https://licheng1013.github.io/plugins/gorm.html" target="_blank" rel="noopener noreferrer">Docs</a></li>
</ul>
</div>`,r:{minutes:.93,words:280},y:"a",t:"Gorm"},["/en/plugins/gorm","/en/plugins/gorm.md"]],["v-2fbe537d","/en/plugins/jorm.html",{d:"2022-11-23T10:07:54.000Z",e:`<h1> JavaOrm</h1>
<h2> 介绍</h2>
<ul>
<li>2022/9/14</li>
<li>基于MybatisPlus 和 SpringBoot 制作的代码生成插件</li>
</ul>
<h2> 使用</h2>
<ul>
<li>下载: 在Idea插件市场进行下载</li>
</ul>
<h2> 功能介绍</h2>
<h3> 支持对数据库注释和字段名进行mybatis-plus的注解关联</h3>
<ul>
<li>主键自动添加 @TableId 注解</li>
<li>deleted 或者 数据库注释为 "软删除" =&gt; 则自动对应mp的软删除注解 @TableLogic</li>
<li>create_time 或者 created_time 或者 create_at 或者 数据库注释为: ”创建时间“ =&gt; 则自动设置mp的创建时间注解  @TableField(fill = FieldFill.INSERT)</li>
<li>update_time 或者 updated_time 或者 updated_at 或者 数据库注释为: ”修改时间“ =&gt; 则自动设置mp的修改时间注解 @TableField(fill = FieldFill.UPDATE)</li>
</ul>`,r:{minutes:.63,words:189},y:"a",t:"JavaOrm"},["/en/plugins/jorm","/en/plugins/jorm.md"]],["v-987b21a6","/en/plugins/vue-admin.html",{d:"2022-11-23T10:07:54.000Z",e:`<h1> VueAdmin</h1>
<h2> Desc</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
</ul>
<h2> Example</h2>
<ul>
<li><a href="http://licheng1013.gitee.io/vue3-vite-admin-template/" target="_blank" rel="noopener noreferrer">http://licheng1013.gitee.io/vue3-vite-admin-template/</a></li>
</ul>`,r:{minutes:.28,words:83},y:"a",t:"VueAdmin"},["/en/plugins/vue-admin","/en/plugins/vue-admin.md"]],["v-74d2721e","/study/game/",{d:"2022-12-15T07:06:48.000Z",r:{minutes:.02,words:6},y:"a",t:"Game",i:"app",I:0},["/study/game/index.html","/study/game/README.md"]],["v-05aa60bc","/study/game/cocos.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Cocos</h1>
<h2> 介绍⛪</h2>
<ul>
<li>2022/9/20</li>
</ul>
<h2> 官网🌈</h2>
<ul>
<li>官网：<a href="https://www.cocos.com/" target="_blank" rel="noopener noreferrer">https://www.cocos.com/</a></li>
</ul>
<h2> 插件💒</h2>
<ul>
<li>动画</li>
<li><a href="http://docs.cocos.com/creator/manual/zh/tween/" target="_blank" rel="noopener noreferrer">http://docs.cocos.com/creator/manual/zh/tween/</a></li>
</ul>`,r:{minutes:.11,words:33},y:"a",t:"Cocos"},["/study/game/cocos","/study/game/cocos.md"]],["v-655dabc9","/study/game/game.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Game</h1>
<h2> 提示❤️</h2>
<ul>
<li>2022/9/22 游戏引擎说明</li>
</ul>
<h2> 技术🍑</h2>
<h3> 帧同步🍉</h3>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/36884005" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/36884005</a></li>
<li><img src="/images/game.png" alt="/images/game.png"></li>
</ul>`,r:{minutes:3.2,words:959},y:"a",t:"Game"},["/study/game/game","/study/game/game.md"]],["v-40662ab6","/study/game/godot.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Godot</h1>
<h2> 介绍🚩</h2>
<ul>
<li>2022/9/22</li>
</ul>
<h2> 官网❤️</h2>
<ul>
<li>Github: <a href="https://github.com/godotengine/godot" target="_blank" rel="noopener noreferrer">https://github.com/godotengine/godot</a></li>
<li>中文文档：<a href="https://docs.godotengine.org/zh_CN/stable/index.html" target="_blank" rel="noopener noreferrer">https://docs.godotengine.org/zh_CN/stable/index.html</a></li>
<li>官网：<a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">https://godotengine.org/</a></li>
</ul>`,r:{minutes:.16,words:49},y:"a",t:"Godot"},["/study/game/godot","/study/game/godot.md"]],["v-20932f22","/study/game/unity.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Unity</h1>
<h2> Unity版本自动构建🪲</h2>
<h3> 脚本</h3>
<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// 詹姆斯·德夫为原创剧本灵感 原项目地址: https://github.com/JesusLuvsYooh/BuildVersionProcessor
// 例如，此文件必须位于“编辑器”文件夹（Unity/Assets/Editor）中。
// 将此类 autoBuildVersion  属性设置为 false，以禁用自动版本更改
// 在 "File/Manually Increment Build Version" 中文则是 "文件/Manually Increment Build Version" 手动生成版本
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;
class BuildVersionProcessor : IPreprocessBuildWithReport{
    private readonly bool autoBuildVersion = true;

    public int callbackOrder =&gt; 0;

    public void OnPreprocessBuild(BuildReport report){
        //Debug.Log("MyCustomBuildProcessor.OnPreprocessBuild for target " + report.summary.platform + " at path " + report.summary.outputPath);
        if (autoBuildVersion){
            IncrementVersion();
        }
    }

    [MenuItem("File/Manually Increment Build Version", priority = 1)]
    public static void ButtonIncrementVersion(){
        Debug.Log("Button Increment Version called.");
        IncrementVersion();
    }

    private static void IncrementVersion(){
        string versionCurrent = Application.version;
        string[] versionParts = versionCurrent.Split('.');
        if (versionParts != null &amp;&amp; versionParts.Length &gt; 0){
            int versionIncremented = int.Parse(versionParts[^1]);
            versionIncremented += 1;
            versionParts[^1] = versionIncremented.ToString();
            PlayerSettings.bundleVersion = string.Join(".", versionParts);
            Debug.Log("Version:  " + versionCurrent + "  increased to:  " + PlayerSettings.bundleVersion);
        }else{
            Debug.Log("Version has no data, check Unity - Player Settings - Version, input box at top.");
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.19,words:1257},y:"a",t:"Unity"},["/study/game/unity","/study/game/unity.md"]],["v-ec4f77b0","/study/go/",{d:"2022-12-15T07:06:48.000Z",r:{minutes:.02,words:6},y:"a",t:"Go",i:"hot",I:0},["/study/go/index.html","/study/go/README.md"]],["v-1296d022","/study/go/design-mode.html",{d:"2023-02-15T03:48:30.000Z",e:`<h1> 设计模式</h1>
<h2> Go语言实现</h2>
<h3> 代理模式</h3>
<div class="hint-container info">
<p class="hint-container-title">描述</p>
<ul>
<li>实现了基本代理模式，和嵌套代理模式</li>
</ul>
</div>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"log"</span>
	<span class="token string">"testing"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">TestProxy</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span>
	p1<span class="token punctuation">.</span>proxy <span class="token operator">=</span> <span class="token operator">&amp;</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		p2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Proxy<span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//新的</span>
		p2<span class="token punctuation">.</span>proxy <span class="token operator">=</span> p1  <span class="token comment">//新的代理挂在旧的代理</span>
		p1 <span class="token operator">=</span> p2        <span class="token comment">//新的替换原有的</span>
	<span class="token punctuation">}</span>
	p1<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> A <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Proxy <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	proxy A
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Proxy<span class="token punctuation">)</span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"代理之前"</span><span class="token punctuation">)</span>
	p<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span><span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"代理之后"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">Invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"业务逻辑"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.37,words:112},y:"a",t:"设计模式"},["/study/go/design-mode","/study/go/design-mode.md"]],["v-50eda543","/study/go/difficult.html",{d:"2023-02-28T08:04:15.000Z",e:`<h1> 高级</h1>
<h2> 介绍</h2>
<ul>
<li>23/2/28</li>
<li>理解go某些高级操作。</li>
</ul>
<h2> Select</h2>
<ul>
<li>select 用于在多线程计算数据</li>
<li>下面示例附带了超时机制,但没有default语句.</li>
<li>当存在default语句，如果渠道还未存在数据,则直接执行default语句</li>
<li><strong>超时机制的作用在于延迟兜底操作。</strong></li>
<li><strong>default就是渠道都没准备好,就直接执行</strong></li>
</ul>`,r:{minutes:5.4,words:1621},y:"a",t:"高级"},["/study/go/difficult","/study/go/difficult.md"]],["v-73096696","/study/go/gin.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Gin</h1>
<h2> 介绍</h2>
<ul>
<li>2022/9/23</li>
</ul>
<h2> 安装</h2>
<ul>
<li>go get -u github.com/gin-gonic/gin</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"github.com/gin-gonic/gin"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">"/ping"</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"pong"</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 监听并在 0.0.0.0:8080 上启动服务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.25,words:975},y:"a",t:"Gin"},["/study/go/gin","/study/go/gin.md"]],["v-470743c9","/study/go/go.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Go</h1>
<h2> 介绍</h2>
<ul>
<li>2019年开始了解Go语言，到现在慢慢补。</li>
<li>本文档介绍了Go语言基础</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">描述</p>
<ul>
<li>学习项目: <a href="https://github.com/licheng1013/go-study" target="_blank" rel="noopener noreferrer">go-study</a></li>
</ul>
</div>`,r:{minutes:4.65,words:1395},y:"a",t:"Go"},["/study/go/go","/study/go/go.md"]],["v-97ce3324","/study/go/gorm.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Gorm</h1>
<h2> 介绍</h2>
<ul>
<li>2022/9/23</li>
</ul>
<h2> 安装</h2>
<ul>
<li>go get -u gorm.io/gorm</li>
<li>go get -u github.com/go-sql-driver/mysql</li>
<li>go get -u gorm.io/driver/mysql v1.3.5</li>
</ul>
<h2> 使用</h2>
<ul>
<li>下面代码复制完运行这行代码后会自动搜索包: go mod tidy</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"gin-gin/common"</span>
	<span class="token string">"gorm.io/driver/mysql"</span>
	<span class="token string">"gorm.io/gorm"</span>
	<span class="token string">"gorm.io/gorm/logger"</span>
	<span class="token string">"gorm.io/gorm/schema"</span>
	<span class="token string">"log"</span>
<span class="token punctuation">)</span>

<span class="token comment">// 初始化mysql链接</span>
<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">mysqlInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">mysqlInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 日志打印</span>
	newLogger <span class="token operator">:=</span> logger<span class="token punctuation">.</span>Default

	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Mysql:初始化！"</span><span class="token punctuation">)</span>
	dsn <span class="token operator">:=</span> <span class="token string">"root:root@tcp(127.0.0.1:3306)/t_demo?charset=utf8mb4&amp;parseTime=True&amp;loc=Local"</span>
	v<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		Logger<span class="token punctuation">:</span> newLogger<span class="token punctuation">,</span>
		NamingStrategy<span class="token punctuation">:</span> schema<span class="token punctuation">.</span>NamingStrategy<span class="token punctuation">{</span>
			TablePrefix<span class="token punctuation">:</span>   <span class="token string">"t_"</span><span class="token punctuation">,</span> <span class="token comment">// 定义表前缀</span>
			SingularTable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// true不在表后面+ s，</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	common<span class="token punctuation">.</span>Db <span class="token operator">=</span> v
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.48,words:143},y:"a",t:"Gorm"},["/study/go/gorm","/study/go/gorm.md"]],["v-39c90182","/study/go/qiniu.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 七牛云</h1>
<h2> 七牛云存储对接</h2>
<ul>
<li>go</li>
<li>2022/11/26</li>
</ul>
<h2> 后端go具体代码</h2>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"github.com/qiniu/go-sdk/v7/auth/qbox"</span>
	<span class="token string">"github.com/qiniu/go-sdk/v7/storage"</span>
<span class="token punctuation">)</span>


<span class="token comment">//七牛云密钥 - 密钥查看: https://portal.qiniu.com/user/key</span>
<span class="token keyword">const</span> accessKey <span class="token operator">=</span> <span class="token string">"your accessKey"</span>  
<span class="token keyword">const</span> secretKey <span class="token operator">=</span> <span class="token string">"your secretKey"</span>
<span class="token comment">//你的资源资源桶名称 - 桶查看: https://portal.qiniu.com/kodo/bucket</span>
<span class="token keyword">const</span> bucket <span class="token operator">=</span><span class="token string">"my-video-test"</span>
<span class="token comment">//获取token</span>
<span class="token keyword">func</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	putPolicy <span class="token operator">:=</span> storage<span class="token punctuation">.</span>PutPolicy<span class="token punctuation">{</span>
		Scope<span class="token punctuation">:</span> bucket<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	mac <span class="token operator">:=</span> qbox<span class="token punctuation">.</span><span class="token function">NewMac</span><span class="token punctuation">(</span>accessKey<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span>
	upToken <span class="token operator">:=</span> putPolicy<span class="token punctuation">.</span><span class="token function">UploadToken</span><span class="token punctuation">(</span>mac<span class="token punctuation">)</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>upToken<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// DeleteFile 删除文件</span>
<span class="token keyword">func</span> <span class="token function">DeleteFile</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	mac <span class="token operator">:=</span> qbox<span class="token punctuation">.</span><span class="token function">NewMac</span><span class="token punctuation">(</span>accessKey<span class="token punctuation">,</span> secretKey<span class="token punctuation">)</span>
	cfg <span class="token operator">:=</span> storage<span class="token punctuation">.</span>Config<span class="token punctuation">{</span>
		UseHTTPS<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		Zone<span class="token punctuation">:</span>     <span class="token operator">&amp;</span>storage<span class="token punctuation">.</span>ZoneHuanan<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	bucketManager <span class="token operator">:=</span> storage<span class="token punctuation">.</span><span class="token function">NewBucketManager</span><span class="token punctuation">(</span>mac<span class="token punctuation">,</span> <span class="token operator">&amp;</span>cfg<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> bucketManager<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>bucket<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token keyword">return</span> err
<span class="token punctuation">}</span>

<span class="token comment">// DeleteFileByUrl 根据url删除</span>
<span class="token keyword">func</span> <span class="token function">DeleteFileByUrl</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	key <span class="token operator">:=</span> <span class="token function">ParseKey</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token function">DeleteFile</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// ParseKey 解析 url中的key</span>
<span class="token keyword">func</span> <span class="token function">ParseKey</span><span class="token punctuation">(</span>url <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// 从url中解析出key</span>
	index <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">LastIndex</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span>
	key <span class="token operator">:=</span> url<span class="token punctuation">[</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

	<span class="token comment">// 去除参数</span>
	index <span class="token operator">=</span> strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">"?"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> index <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
		key <span class="token operator">=</span> key<span class="token punctuation">[</span><span class="token punctuation">:</span>index<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> key
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.91,words:274},y:"a",t:"七牛云"},["/study/go/qiniu","/study/go/qiniu.md"]],["v-0afe37c4","/study/go/socket.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Socket</h1>
<h2> 介绍</h2>
<ul>
<li>2022/10/25</li>
</ul>
<h2> 自定义协议</h2>
<ul>
<li>2023/2/16</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token comment">// 定义一个自定义协议的结构体，包含消息的长度、类型和内容</span>
<span class="token keyword">type</span> MyProtocol <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Length <span class="token builtin">int</span>    <span class="token comment">// 消息的长度，用4个字节表示</span>
	Type   <span class="token builtin">int</span>    <span class="token comment">// 消息的类型，用4个字节表示，比如1表示文本，2表示图片，3表示音频等</span>
	Data   <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token comment">// 消息的内容，用字节切片表示，长度由Length决定</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个编码函数，将自定义协议的结构体转换为字节切片，用于发送数据</span>
<span class="token keyword">func</span> <span class="token function">Encode</span><span class="token punctuation">(</span>mp <span class="token operator">*</span>MyProtocol<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个缓冲区，用于存储编码后的数据</span>
	buf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 使用encoding/binary包中的Write函数，按照大端字节序，将结构体中的字段写入缓冲区</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
	<span class="token comment">// 返回缓冲区中的字节切片</span>
	<span class="token keyword">return</span> buf<span class="token punctuation">.</span><span class="token function">Bytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义一个解码函数，将字节切片转换为自定义协议的结构体，用于接收数据</span>
<span class="token keyword">func</span> <span class="token function">Decode</span><span class="token punctuation">(</span>data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">)</span> <span class="token operator">*</span>MyProtocol <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个缓冲区，用于存储解码后的数据</span>
	buf <span class="token operator">:=</span> bytes<span class="token punctuation">.</span><span class="token function">NewBuffer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	<span class="token comment">// 创建一个自定义协议的结构体，用于存储解码后的字段</span>
	mp <span class="token operator">:=</span> <span class="token operator">&amp;</span>MyProtocol<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 使用encoding/binary包中的Read函数，按照大端字节序，从缓冲区中读取字段到结构体中</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Type<span class="token punctuation">)</span>
	<span class="token comment">// 根据Length的值，创建一个字节切片，用于存储Data字段</span>
	mp<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> mp<span class="token punctuation">.</span>Length<span class="token punctuation">)</span>
	binary<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> binary<span class="token punctuation">.</span>BigEndian<span class="token punctuation">,</span> <span class="token operator">&amp;</span>mp<span class="token punctuation">.</span>Data<span class="token punctuation">)</span>
	<span class="token comment">// 返回解码后的结构体</span>
	<span class="token keyword">return</span> mp
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.51,words:1653},y:"a",t:"Socket"},["/study/go/socket","/study/go/socket.md"]],["v-a86ab80e","/study/go/ssh.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Ssh</h1>
<h2> 介绍</h2>
<ul>
<li>2022/10/25</li>
</ul>
<h2> 终端连接</h2>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>
<span class="token keyword">package</span> test

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"golang.org/x/crypto/ssh"</span>
	<span class="token string">"log"</span>
	<span class="token string">"testing"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Test2</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sshHost <span class="token operator">:=</span> <span class="token string">"192.168.101.11"</span>
	sshUser <span class="token operator">:=</span> <span class="token string">"root"</span>
	sshPassword <span class="token operator">:=</span> <span class="token string">"root"</span>
	sshPort <span class="token operator">:=</span> <span class="token number">22</span>

	<span class="token comment">//创建ssh登陆配置</span>
	config <span class="token operator">:=</span> <span class="token operator">&amp;</span>ssh<span class="token punctuation">.</span>ClientConfig<span class="token punctuation">{</span>
		Timeout<span class="token punctuation">:</span>         time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span> <span class="token comment">//ssh 连接time out 时间一秒钟, 如果ssh验证错误 会在一秒内返回</span>
		User<span class="token punctuation">:</span>            sshUser<span class="token punctuation">,</span>
		HostKeyCallback<span class="token punctuation">:</span> ssh<span class="token punctuation">.</span><span class="token function">InsecureIgnoreHostKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//这个可以, 但是不够安全</span>
		<span class="token comment">//HostKeyCallback: hostKeyCallBackFunc(h.Host),</span>
	<span class="token punctuation">}</span>
	config<span class="token punctuation">.</span>Auth <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>ssh<span class="token punctuation">.</span>AuthMethod<span class="token punctuation">{</span>ssh<span class="token punctuation">.</span><span class="token function">Password</span><span class="token punctuation">(</span>sshPassword<span class="token punctuation">)</span><span class="token punctuation">}</span>

	<span class="token comment">//dial 获取ssh client</span>
	addr <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"%s:%d"</span><span class="token punctuation">,</span> sshHost<span class="token punctuation">,</span> sshPort<span class="token punctuation">)</span>
	sshClient<span class="token punctuation">,</span> err <span class="token operator">:=</span> ssh<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">"tcp"</span><span class="token punctuation">,</span> addr<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"创建ssh client 失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> sshClient<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">//创建ssh-session</span>
	session<span class="token punctuation">,</span> err <span class="token operator">:=</span> sshClient<span class="token punctuation">.</span><span class="token function">NewSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"创建ssh session 失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> session<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">//执行远程命令</span>
	combo<span class="token punctuation">,</span> err <span class="token operator">:=</span> session<span class="token punctuation">.</span><span class="token function">CombinedOutput</span><span class="token punctuation">(</span><span class="token string">"echo HelloWorld"</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatalln</span><span class="token punctuation">(</span><span class="token string">"远程执行cmd 失败"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"命令输出:"</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>combo<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.6,words:180},y:"a",t:"Ssh"},["/study/go/ssh","/study/go/ssh.md"]],["v-08700fb4","/study/go/try.html",{d:"2023-05-19T01:56:49.000Z",e:`<h1> 原理解析</h1>
<h2> 介绍</h2>
<ul>
<li>此文档解析一下go的原理或框架的原理</li>
</ul>
<h2> Gin</h2>
<h2> Go</h2>
`,r:{minutes:.08,words:25},y:"a",t:"原理解析"},["/study/go/try","/study/go/try.md"]],["v-0d202a22","/study/go/util.html",{d:"2023-05-26T03:28:21.000Z",e:`<h1> 工具</h1>
<h2> 介绍</h2>
<ul>
<li>2023/5/26</li>
</ul>
<h3> 缓存工具类</h3>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> component

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"sync"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token comment">// Cache 构建一个缓存组件</span>
<span class="token keyword">type</span> Cache <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// 锁</span>
	lock sync<span class="token punctuation">.</span>Mutex
	<span class="token comment">// 缓存数据</span>
	cacheMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">// 延迟删除</span>
	delMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>time<span class="token punctuation">.</span>Time
<span class="token punctuation">}</span>

<span class="token comment">// NewCache 构建新的实例</span>
<span class="token keyword">func</span> <span class="token function">NewCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Cache <span class="token punctuation">{</span>
	c <span class="token operator">:=</span> <span class="token operator">&amp;</span>Cache<span class="token punctuation">{</span>cacheMap<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> delMap<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">startTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token comment">// Set 缓存数据并设置过期时间</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cache<span class="token punctuation">)</span> <span class="token function">Set</span><span class="token punctuation">(</span>key <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> value <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c<span class="token punctuation">.</span><span class="token function">SetWithTime</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// SetWithTime 缓存数据并设置过期时间</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cache<span class="token punctuation">)</span> <span class="token function">SetWithTime</span><span class="token punctuation">(</span>key <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> value <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> duration time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	k <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> value
	<span class="token comment">// 为负数时,不设置过期时间</span>
	<span class="token keyword">if</span> duration <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span>delMap<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Get 获取缓存数据</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cache<span class="token punctuation">)</span> <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> c<span class="token punctuation">.</span>cacheMap<span class="token punctuation">[</span>fmt<span class="token punctuation">.</span><span class="token function">Sprint</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// Del 删除缓存数据</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cache<span class="token punctuation">)</span> <span class="token function">Del</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> c<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span>lock<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>cacheMap<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>delMap<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// startTask 开启定时任务</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cache<span class="token punctuation">)</span> <span class="token function">startTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token boolean">true</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> c<span class="token punctuation">.</span>delMap <span class="token punctuation">{</span>
				<span class="token keyword">if</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					c<span class="token punctuation">.</span><span class="token function">Del</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.74,words:222},y:"a",t:"工具"},["/study/go/util","/study/go/util.md"]],["v-e2d863ca","/study/go/wails.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Wails</h1>
<h2> 介绍</h2>
<ul>
<li>2022/10/4</li>
<li>跨平台框架</li>
</ul>
<h2> 官网</h2>
<ul>
<li><a href="https://wails.io/zh-Hans/docs/gettingstarted/installation/" target="_blank" rel="noopener noreferrer">https://wails.io/zh-Hans/docs/gettingstarted/installation/</a></li>
</ul>
`,r:{minutes:.09,words:27},y:"a",t:"Wails"},["/study/go/wails","/study/go/wails.md"]],["v-74fcd9ee","/study/java/",{d:"2022-12-15T07:06:48.000Z",r:{minutes:.02,words:6},y:"a",t:"Java",i:"java",I:0},["/study/java/index.html","/study/java/README.md"]],["v-f4a23b22","/study/java/data-struct.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 数据结构</h1>
<h2> 介绍💒</h2>
<ul>
<li>待写</li>
</ul>
<h2> HashMap✋</h2>
<ul>
<li>
<p>数据结构: Array LinkedList Tree</p>
</li>
<li>
<p>实现</p>
<ul>
<li>默认构造方法不会创建内部的数组对象</li>
<li>put方法调用过程,判断内部是否创建了数组对象，没有创建则创建。
<ul>
<li>计算key的hashCode如果在数组中不存在则存入进去
<ul>
<li>判断两个对象hash值和对象地址对比是否一样 不一样继续判断 equals 对比也不一样 (hash值一样，地址不一样,equals也不一样则往下走)</li>
<li>判断有没有变成树</li>
<li>变成链表放入其中：如果，链表大于8并且HashMap的数组大于64则转换成树</li>
</ul>
</li>
<li>size++</li>
<li>执行完毕</li>
</ul>
</li>
<li>默认长度为: 16 负载因子: 0.75</li>
</ul>
</li>
<li>
<p>putVal方法</p>
</li>
<li>
<p>省略其他方法</p>
</li>
</ul>`,r:{minutes:1.96,words:588},y:"a",t:"数据结构"},["/study/java/data-struct","/study/java/data-struct.md"]],["v-ce60a5b4","/study/java/hutool.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Hutool</h1>
<h2> 介绍💢</h2>
<ul>
<li>2022/9/15</li>
<li>一个很好用的工具库</li>
</ul>
<h2> Api😃</h2>
<ul>
<li>一些常用Api</li>
</ul>
<h3> 对象复制🗾</h3>
<ul>
<li>A对象复制到B对象</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>aiwan</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>bean<span class="token punctuation">.</span></span><span class="token class-name">BeanUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>aiwan<span class="token punctuation">.</span>dto<span class="token punctuation">.</span></span><span class="token class-name">UserDto</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>aiwan<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/9/15
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setNickName</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserDto</span> userDto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserDto</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> userDto<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userDto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.26,words:79},y:"a",t:"Hutool"},["/study/java/hutool","/study/java/hutool.md"]],["v-eb998da4","/study/java/io-game.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> IoGame</h1>
<h2> 介绍😎</h2>
<ul>
<li>一个游戏框架</li>
</ul>
<h2> 官网🍎</h2>
<ul>
<li>文档 <a href="https://www.yuque.com/iohao/game/wwvg7z" target="_blank" rel="noopener noreferrer">https://www.yuque.com/iohao/game/wwvg7z</a></li>
<li>Gitee <a href="https://gitee.com/iohao/iogame" target="_blank" rel="noopener noreferrer">https://gitee.com/iohao/iogame</a></li>
</ul>`,r:{minutes:.36,words:109},y:"a",t:"IoGame"},["/study/java/io-game","/study/java/io-game.md"]],["v-e295e46e","/study/java/java.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Java</h1>
<h2> 介绍🐸</h2>
<ul>
<li>2022/7/18</li>
</ul>
<h2> Java基础🍊</h2>
<h3> List工具🍅</h3>
<ul>
<li>
<p>一些常用的工具方法</p>
</li>
<li>
<p>Collections.shuffle(list); 可以打乱list顺序</p>
</li>
<li>
<p>Collections.sort(list);  枚举也能排序，根据枚举定义的顺序排序</p>
</li>
</ul>
<h3> 泛型💔</h3>
<ul>
<li>泛型的场景</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ArrayList</span>
<span class="token comment">// HashMap</span>
<span class="token comment">// LikedList</span>
<span class="token comment">// Array</span>
<span class="token comment">// 远程调用泛型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.63,words:490},y:"a",t:"Java"},["/study/java/java","/study/java/java.md"]],["v-6261669c","/study/java/maven.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Maven</h1>
<h2> 介绍😄</h2>
<ul>
<li>2019</li>
<li>如果把 mirror 去掉则是默认从中央仓库拉取</li>
</ul>
<h2> 腾讯源镜像</h2>
<ul>
<li>阿里云有时候总有问题</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>tencent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>tencent maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.84,words:252},y:"a",t:"Maven"},["/study/java/maven","/study/java/maven.md"]],["v-ff9673f2","/study/java/mqtt.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Mqtt</h1>
<h2> 介绍🍏</h2>
<ul>
<li>2022/6/6</li>
<li>消息队列 <a href="https://www.emqx.com/zh" target="_blank" rel="noopener noreferrer">https://www.emqx.com/zh</a></li>
<li>基于：完整 MQTT 3.x 和 5.0 规范</li>
</ul>
<h2> 使用场景🍑</h2>
<ul>
<li>移动端 与 服务端的消息解耦</li>
</ul>
<h2> 示例 SpringBoot🏧</h2>
<ul>
<li>接入依赖</li>
</ul>`,r:{minutes:1.16,words:349},y:"a",t:"Mqtt"},["/study/java/mqtt","/study/java/mqtt.md"]],["v-e4f84858","/study/java/mybatis.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Mybatis</h1>
<h2> 介绍🍊</h2>
<ul>
<li>2022/5/10</li>
<li>一个ORM数据操作框架，支持以xml形式动态sql编写</li>
</ul>
<h2> 常用标签😃</h2>
<ul>
<li>select</li>
<li>update</li>
<li>delete</li>
<li>insert</li>
<li>if</li>
<li>where</li>
<li>sql</li>
<li>foreach</li>
</ul>
<h2> 使用规范⛪</h2>
<ul>
<li>#{} 预编译sql语句在传值进去 不会sql注入</li>
<li>\${} 不编译sql语句直接传进去 引发sql注入</li>
</ul>`,r:{minutes:1.59,words:478},y:"a",t:"Mybatis"},["/study/java/mybatis","/study/java/mybatis.md"]],["v-53d99f9f","/study/java/protostuff.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Protostuff序列化</h1>
<h2> 介绍💔</h2>
<ul>
<li>序列化工具</li>
<li><a href="https://github.com/protostuff/protostuff" target="_blank" rel="noopener noreferrer">https://github.com/protostuff/protostuff</a></li>
</ul>
<h2> 使用😃</h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.protostuff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protostuff-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.8.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.protostuff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protostuff-runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.8.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:191},y:"a",t:"Protostuff序列化"},["/study/java/protostuff","/study/java/protostuff.md"]],["v-0ea8a1d4","/study/java/redisson.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Redisson</h1>
<h2> 官网⛪</h2>
<ul>
<li><a href="https://github.com/redisson/redisson" target="_blank" rel="noopener noreferrer">https://github.com/redisson/redisson</a></li>
<li><a href="https://github.com/redisson/redisson/wiki" target="_blank" rel="noopener noreferrer">中文文档</a></li>
</ul>
<h2> 介绍🐯</h2>`,r:{minutes:.11,words:32},y:"a",t:"Redisson"},["/study/java/redisson","/study/java/redisson.md"]],["v-37e7ddac","/study/java/rocket-mq.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> RocketMq</h1>
<h2> 介绍🐷</h2>
<ul>
<li>2022/6/6</li>
</ul>
<h2> 使用场景🎁</h2>
<ul>
<li>服务端 与 服务端的消息解耦</li>
<li>延迟订单</li>
<li>事务消息</li>
</ul>
<h2> 示例😃</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/rocket-mq-demo" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/rocket-mq-demo</a></li>
</ul>`,r:{minutes:.22,words:65},y:"a",t:"RocketMq"},["/study/java/rocket-mq","/study/java/rocket-mq.md"]],["v-6485064d","/study/java/spring-boot-demo.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> SpringBootDemo</h1>
<h2> 根据条件创建bean的注解👻</h2>
<h3> @ConditionalOnProperty💒</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"spring.cloud.discovery.enabled"</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnDiscoveryEnabled</span> <span class="token punctuation">{</span>
    <span class="token comment">//在指定的类上添加，可以限制类的bean创建。</span>
    <span class="token comment">//value             配置yml文件中的属性名</span>
    <span class="token comment">//matchIfMissing    设置值,默认为false及默认不创建bean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.35,words:404},y:"a",t:"SpringBootDemo"},["/study/java/spring-boot-demo","/study/java/spring-boot-demo.md"]],["v-9c987956","/study/java/spring-boot.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> SpringBoot</h1>
<h2> 介绍🎈</h2>
<ul>
<li>2019/7</li>
<li>一些常用SpringBoot用法</li>
</ul>
<h2> 必读指南</h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>标题后面带 ! 的内容将可能不在此更新(但不代表不能用)，</li>
<li>改从 JavaOrm 插件提供的模板进行更新</li>
<li><a href="/plugins/java-orm.html" target="blank">JavaOrm</a></li>
</ul>
</div>`,r:{minutes:6.5,words:1951},y:"a",t:"SpringBoot"},["/study/java/spring-boot","/study/java/spring-boot.md"]],["v-71361d27","/study/java/spring-cloud-alibaba.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> SpringCloudAlibaba</h1>
<h2> 介绍🎁</h2>
<ul>
<li>2022/5/10</li>
<li>SpringCloudAlibaba 系列</li>
</ul>
<h2> 项目🌅</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/spring-cloud-alibaba" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/spring-cloud-alibaba</a></li>
</ul>
<h2> Nacos🌈</h2>`,r:{minutes:.25,words:76},y:"a",t:"SpringCloudAlibaba"},["/study/java/spring-cloud-alibaba","/study/java/spring-cloud-alibaba.md"]],["v-4a160b56","/study/java/spring-cloud.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> SpringCloud</h1>
<h2> 介绍🐯</h2>
<ul>
<li>待补充</li>
</ul>
`,r:{minutes:.02,words:7},y:"a",t:"SpringCloud"},["/study/java/spring-cloud","/study/java/spring-cloud.md"]],["v-13b6c6a9","/study/java/transaction.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Transaction</h1>
<h2> 介绍🍒</h2>
<ul>
<li>一组事务的特性ACID</li>
<li>分别是，原子性，隔离性，持久性，一致性</li>
<li>原子：一组操作要么全执行成功，要么不执行</li>
<li>隔离：事务的隔离级别，读未提交，读已提交，可重复读，串形化</li>
<li>持久：从内存持久到硬盘上</li>
<li>一致：执行结果和预期的要一致，先来先执行事务</li>
</ul>
<h2> 单机事务🐷</h2>
<ul>
<li>@Transaction 事务注解解决</li>
<li>必须在public上使用，否则会失效，</li>
<li>属性</li>
<li>timeout 超时时间                默认不设置超时时间</li>
<li>rollbackFor 回滚异常类型,        默认异常就回滚</li>
<li>noRollbackFor 不回滚的异常类型,   默认不设置</li>
</ul>`,r:{minutes:.62,words:185},y:"a",t:"Transaction"},["/study/java/transaction","/study/java/transaction.md"]],["v-2e75823a","/study/linux/",{d:"2022-12-15T07:06:48.000Z",r:{minutes:.02,words:6},y:"a",t:"Linux",i:"linux",I:0},["/study/linux/index.html","/study/linux/README.md"]],["v-157e5c3f","/study/linux/docker.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Docker</h1>
<h2> 介绍🐸</h2>
<ul>
<li>2019</li>
<li>一种容器化技术,更快更方便的部署</li>
</ul>
<h2> 安装✋</h2>
<ul>
<li>
<p>ubuntu20: snap install docker</p>
</li>
<li>
<p>docker</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.48,words:1045},y:"a",t:"Docker"},["/study/linux/docker","/study/linux/docker.md"]],["v-eff126fe","/study/linux/git.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Git使用</h1>
<h2> 介绍🏧</h2>
<ul>
<li>2018</li>
<li>学习git的使用</li>
</ul>
<h2> 下载地址💞</h2>
<ul>
<li><a href="/util/small-util.html" target="blank">下载地址</a></li>
</ul>
<h2> 基本命令💒</h2>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>git add .</td>
<td>添加当前目录</td>
</tr>
<tr>
<td>git commit -t "msg"</td>
<td>提交和加入信息</td>
</tr>
<tr>
<td>git remote add {name} {url}</td>
<td>添加分支</td>
</tr>
<tr>
<td>git push {name}</td>
<td>推送分支</td>
</tr>
<tr>
<td>git checkout -- *</td>
<td>撤销至上次提交后的所有修改</td>
</tr>
<tr>
<td>git rm -r --cached .idea</td>
<td>清理已经提交过的目录</td>
</tr>
</tbody>
</table>`,r:{minutes:1.44,words:431},y:"a",t:"Git使用"},["/study/linux/git","/study/linux/git.md"]],["v-855c2bc2","/study/linux/linux.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Linux</h1>
<ul>
<li>2018</li>
</ul>
<h2> Shell脚本👻</h2>
<h2> Ubuntu🐟</h2>
<ul>
<li>允许root远程登入</li>
<li>vim /etc/ssh/sshd_config</li>
<li>Authentication 下面添加 <strong>PermitRootLogin yes</strong></li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Authentication:</span>

<span class="token comment">#LoginGraceTime 2m</span>
<span class="token comment">#PermitRootLogin prohibit-password</span>
PermitRootLogin <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.63,words:489},y:"a",t:"Linux"},["/study/linux/linux","/study/linux/linux.md"]],["v-15351731","/study/linux/mysql.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Mysql</h1>
<h2> 介绍💢</h2>
<ul>
<li>2019</li>
<li>mysql 采用c或c++写的</li>
</ul>
<h2> Sql强化</h2>
<h3> 计算排名sql</h3>
<ul>
<li>关键函数: row_number() OVER</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">介绍</p>
<ul>
<li>先统计符合的数据，在统计total，在总和pass_time，以total为优先排名pass_time次之排名，</li>
<li>sql难度: ⭐⭐⭐⭐⭐</li>
</ul>
</div>`,r:{minutes:3.34,words:1002},y:"a",t:"Mysql"},["/study/linux/mysql","/study/linux/mysql.md"]],["v-03aa6f39","/study/linux/nginx.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Nginx</h1>
<ul>
<li>2019</li>
</ul>
<h2> 配置😎</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    sendfile        on<span class="token punctuation">;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>
    
    <span class="token comment">#负载均衡ly最后不要有空格</span>
    upstream ly<span class="token punctuation">{</span> 
        server localhost:8080<span class="token punctuation">;</span>
        server localhost:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
        server_name www.shileke.cn<span class="token punctuation">;</span>
        root html<span class="token punctuation">;</span>
        index index.html index.htm<span class="token punctuation">;</span>
        ssl_certificate   /usr/local/nginx/cert/3022254_www.shileke.cn.pem<span class="token punctuation">;</span>
        ssl_certificate_key  /usr/local/nginx/cert/3022254_www.shileke.cn.key<span class="token punctuation">;</span>
        ssl_session_timeout 5m<span class="token punctuation">;</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
        <span class="token comment">#强制https访问</span>
        <span class="token comment">#fastcgi_param   HTTPS         on;</span>
        <span class="token comment">#fastcgi_param   HTTP_SCHEME   https;	</span>
    
        location / <span class="token punctuation">{</span>
                    root  /usr/local/src/static/dengling/<span class="token punctuation">;</span>
                    index index.html index.htm<span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
    
        location /api <span class="token punctuation">{</span>    
            charset utf-8<span class="token punctuation">;</span>          <span class="token comment">#显示中文</span>
            proxy_pass http://ly/<span class="token punctuation">;</span>
            proxy_redirect off<span class="token punctuation">;</span>	  
        <span class="token punctuation">}</span>
    
        location /app <span class="token punctuation">{</span>
            <span class="token builtin class-name">alias</span> /usr/local/src/app/<span class="token punctuation">;</span>
            autoindex on<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.45,words:134},y:"a",t:"Nginx"},["/study/linux/nginx","/study/linux/nginx.md"]],["v-6ab5d8fc","/study/linux/server.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 网络</h1>
<ul>
<li>2022/6/22</li>
</ul>
<h2> 通信协议🐔</h2>
<ul>
<li>基于 Socket 来实现</li>
<li>Socket是最原始的一种链接方式，负责从 a 链接到 b</li>
<li>此层面需要自己去定义数据的开头和结尾并且设置断开时间</li>
</ul>
<h3> RPC🍅</h3>
<ul>
<li>远程调用</li>
<li>内部的实现可以自由定义数据的传输接受方式</li>
<li>性能好，但数据的传输格式的自己定义</li>
</ul>
<h3> HTTP🍒</h3>
<ul>
<li>由一组定义好的协议进行数据的传输</li>
<li>但报文太多影响效率</li>
</ul>`,r:{minutes:.44,words:131},y:"a",t:"网络"},["/study/linux/server","/study/linux/server.md"]],["v-3f92c263","/study/linux/shell.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Shell</h1>
<h2> 介绍💢</h2>
<ul>
<li>2018</li>
<li>shell脚本教程</li>
</ul>
<h2> 开始🍎</h2>
<ul>
<li>创建一个shell脚本</li>
<li>vim test.sh</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 上面用于定义执行的sh，需要使用./test.sh才能以bash执行脚本</span>
<span class="token comment"># 如果是 sh test.sh 那么只会是普通的shell进行执行 if [[ $cmd == "q" ]] 不能在sh下执行</span>

<span class="token comment"># if语法  或 || 于 &amp;&amp; </span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">"test"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$cmd</span> <span class="token operator">==</span> <span class="token string">"test"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.69,words:206},y:"a",t:"Shell"},["/study/linux/shell","/study/linux/shell.md"]],["v-9d9383da","/study/try/",{d:"2022-12-15T07:06:48.000Z",r:{minutes:.02,words:6},y:"a",t:"Try",i:"support",I:0},["/study/try/index.html","/study/try/README.md"]],["v-03a09d9f","/study/try/antlr.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Antlr</h1>
<h2> 介绍🍇</h2>
<ul>
<li>2022/11/18</li>
<li>版本 antlr4</li>
</ul>
<h2> 符号作用🍎</h2>
<h2> 示例🌟</h2>
<h3> JSON💞</h3>
<div class="language-antlr line-numbers-mode" data-ext="antlr"><pre class="language-antlr"><code>grammar JSON;
json: value EOF;
value  : STRING | NUMBER | obj | arr | 'true' | 'false' | 'null' ;
obj : '{' pair (',' pair)* '}' | '{' '}' ;
pair : STRING ':' value ;
arr  : '[' value (',' value)* ']' | '[' ']';
STRING : '"' (ESC | SAFECODEPOINT)* '"' ;
fragment ESC : '\\\\' (["\\\\/bfnrt] | UNICODE) ;
fragment UNICODE  : 'u' HEX HEX HEX HEX;
fragment HEX : [0-9a-fA-F] ;
fragment SAFECODEPOINT : ~ ["\\\\\\u0000-\\u001F];
NUMBER : '-'? INT ('.' [0-9] +)? EXP? ;
fragment INT : '0' | [1-9] [0-9]* ;
// no leading zeros
fragment EXP : [Ee] [+\\-]? INT;
// \\- since - means "range" inside [...]
// 跳过值
WS : [ \\t\\n\\r] + -&gt; skip ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.5,words:149},y:"a",t:"Antlr"},["/study/try/antlr","/study/try/antlr.md"]],["v-277b3408","/study/try/english.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> English</h1>
<h2> Documentation</h2>
<ul>
<li>Hi,This my english a study note.</li>
</ul>
<h2> A Man and A Woman</h2>
<ul>
<li>Who is She ? , Yes, She is My Big Sister. No, She is My younger Sister.</li>
<li>He is used For a Man.</li>
<li>She is used For a Woman.</li>
<li>It is used For an Animal.</li>
</ul>`,r:{minutes:1.38,words:414},y:"a",t:"English"},["/study/try/english","/study/try/english.md"]],["v-6b7873d0","/study/try/flutter.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Flutter</h1>
<h2> 介绍💔</h2>
<ul>
<li><a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">https://flutter.cn</a></li>
</ul>
<h2> 项目🐷</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/flutter-study" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/flutter-study</a></li>
</ul>`,r:{minutes:2.94,words:882},y:"a",t:"Flutter"},["/study/try/flutter","/study/try/flutter.md"]],["v-7829234e","/study/try/jiazhao.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> z-驾照考试</h1>
<ul>
<li>2021/10/3</li>
</ul>
<h2> 科目3考试要点✋</h2>
<ul>
<li>
<p>1：注意后方来车，起步左转向灯，按两下喇叭</p>
</li>
<li>
<p>2：挂挡位，一档到三挡先退回空挡，一档or二挡互换挡无需回空挡</p>
</li>
<li>
<p>3：座位，怎么舒服怎么来</p>
</li>
<li>
<p>4：第一根调高低，第二个调前后座位，滚盘调后移</p>
</li>
<li>
<p>5：打转向灯至少持续3秒，下左上右
1挡20公里以内，2挡20-30公里以内回1档速度要降到15-20以内，3挡低于25-40公里以内。其他全挂，10秒内要到规定档位速度</p>
</li>
<li>
<p>6：任何挡都要松油门踩离合挂挡，一定松完离合放其他地方，踩加速加油，</p>
</li>
</ul>`,r:{minutes:3.93,words:1179},y:"a",t:"z-驾照考试"},["/study/try/jiazhao","/study/try/jiazhao.md"]],["v-566cfcec","/study/try/python.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Python</h1>
<h2> 介绍😎</h2>
<ul>
<li>2018</li>
<li>入门语言，学了又弃，弃而又学</li>
<li>下载：[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li>
</ul>
<h2> pip镜像设置✋</h2>
<ul>
<li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li>
</ul>`,r:{minutes:4.99,words:1497},y:"a",t:"Python"},["/study/try/python","/study/try/python.md"]],["v-42dddec2","/study/try/rust.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> Rust</h1>
<h2> 镜像源🍊</h2>
<ul>
<li><a href="https://rsproxy.cn/" target="_blank" rel="noopener noreferrer">https://rsproxy.cn/</a></li>
</ul>
<h2> 描述🍑</h2>
<ul>
<li>无聊又去学一门新语言怎么样。</li>
<li>与其他语言不同的是，rust的语法相当的陌生。</li>
</ul>
<h2> 介绍🐯</h2>
<ul>
<li>官网 <a href="https://www.rust-lang.org/zh-CN/learn" target="_blank" rel="noopener noreferrer">https://www.rust-lang.org/zh-CN/learn</a></li>
<li>文档 <a href="https://kaisery.github.io/trpl-zh-cn/ch03-01-variables-and-mutability.html" target="_blank" rel="noopener noreferrer">中文文档</a></li>
<li>教程 <a href="https://rustwiki.org/zh-CN/rust-by-example/index.html" target="_blank" rel="noopener noreferrer">https://rustwiki.org/zh-CN/rust-by-example/index.html</a></li>
<li>学习 <a href="https://github.com/licheng1013/rust-study" target="_blank" rel="noopener noreferrer">https://github.com/licheng1013/rust-study</a></li>
</ul>`,r:{minutes:1.81,words:544},y:"a",t:"Rust"},["/study/try/rust","/study/try/rust.md"]],["v-9d9130cc","/study/web/",{d:"2022-12-16T03:07:15.000Z",r:{minutes:.02,words:6},y:"a",t:"Web",i:"leaf",I:0},["/study/web/index.html","/study/web/README.md"]],["v-5ff88586","/study/web/axios.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Axios</h1>
<ul>
<li>2022/7/12</li>
</ul>
<h2> 介绍💞</h2>
<ul>
<li>2019</li>
</ul>
<h2> Vue3插件玩法🍒</h2>
<ul>
<li>npm install --save axios vue-axios</li>
<li><a href="http://www.axios-js.com/zh-cn/docs/vue-axios.html" target="_blank" rel="noopener noreferrer">http://www.axios-js.com/zh-cn/docs/vue-axios.html</a></li>
<li>使用</li>
</ul>`,r:{minutes:1.03,words:309},y:"a",t:"Axios"},["/study/web/axios","/study/web/axios.md"]],["v-0afa9360","/study/web/css.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Css</h1>
<h2> 介绍</h2>
<ul>
<li>对常用css配置进行收集</li>
<li>Css是对Html进行装饰</li>
<li>如果说Html是骨架那么Css就是衣服。</li>
<li>想想一个Cat(猫)没有他的毛发会是啥样。</li>
</ul>
<h2> Css配置🪲</h2>
<ul>
<li>每个Vue项目基本必须配置的样式</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请使用div进行布局不要element-ui的组件布局！</p>
</div>`,r:{minutes:.98,words:294},y:"a",t:"Css"},["/study/web/css","/study/web/css.md"]],["v-0a822add","/study/web/electron.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Electron</h1>
<h2> 介绍💢</h2>
<ul>
<li>桌面跨平台框架</li>
<li><a href="https://www.electronjs.org/zh/docs/latest" target="_blank" rel="noopener noreferrer">ElectronJs</a></li>
<li>打包很大。</li>
</ul>
<h2> 安装🍇</h2>
<ul>
<li>依赖 npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/</li>
<li>创建vue+vite项目： ts + npm create electron-vite</li>
</ul>`,r:{minutes:1.01,words:302},y:"a",t:"Electron"},["/study/web/electron","/study/web/electron.md"]],["v-566689bd","/study/web/node.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Node</h1>
<ul>
<li>2022/7/13</li>
</ul>
<h2> 介绍😃</h2>
<ul>
<li>安装</li>
<li>Ubuntu: sudo snap install node <a href="https://github.com/nodejs/snap" target="_blank" rel="noopener noreferrer">https://github.com/nodejs/snap</a></li>
<li>Windows: <a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></li>
</ul>`,r:{minutes:1.33,words:400},y:"a",t:"Node"},["/study/web/node","/study/web/node.md"]],["v-50b2aeca","/study/web/vite.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Vite</h1>
<h2> 介绍👊</h2>
<ul>
<li>2022/8/6</li>
<li>官网</li>
<li><a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">https://vitejs.cn/</a></li>
</ul>
<h2> 配置相对路径🍅</h2>
<ul>
<li>electron 里面需要引入vue文件需要加上.vue</li>
<li>vite.config.js</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>join<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@'</span><span class="token operator">:</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">'src'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.4,words:121},y:"a",t:"Vite"},["/study/web/vite","/study/web/vite.md"]],["v-0221a8ad","/study/web/vue.html",{d:"2022-12-16T03:07:15.000Z",e:`<h1> Vue</h1>
<h2> 介绍💞</h2>
<ul>
<li>
<p><a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3</a></p>
</li>
<li>
<p><a href="https://cli.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">Vue-Cli</a></p>
</li>
<li>
<p>npm install -g @vue/cli</p>
</li>
</ul>
`,r:{minutes:1.95,words:586},y:"a",t:"Vue"},["/study/web/vue","/study/web/vue.md"]],["v-3dc19728","/study/game/design/chess.html",{d:"2023-01-04T08:35:13.000Z",e:`<h1> Chess</h1>
<h2> 棋牌</h2>
<ul>
<li><a href="https://www.zhihu.com/question/490679283" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/490679283</a></li>
</ul>
<h2> 伪代码</h2>
`,r:{minutes:.05,words:14},y:"a",t:"Chess"},["/study/game/design/chess","/study/game/design/chess.md"]],["v-0d6a9cd2","/study/java/design-mode/design-mode.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 设计模式</h1>
<h2> 介绍</h2>
<ul>
<li>待写</li>
</ul>
`,r:{minutes:.03,words:8},y:"a",t:"设计模式"},["/study/java/design-mode/design-mode","/study/java/design-mode/design-mode.md"]],["v-1a97af14","/study/java/design-mode/proxy.html",{d:"2022-12-09T10:55:53.000Z",e:`<h1> 代理模式</h1>
<ul>
<li>增加对象的行为</li>
<li>jdk代理，cglib代理</li>
</ul>
<h2> jdk代理</h2>
<ul>
<li>只代理接口,代理实现继承了 Proxy 类，所以就不能使用子类去创建代理了</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> lc
 * <span class="token keyword">@since</span> 2022/6/8
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Mapper</span> m <span class="token operator">=</span> id <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//实现类</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Mapper</span> mapper <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Mapper</span><span class="token punctuation">)</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">Mapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">Mapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span>
                <span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ProxyMapper</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mapper<span class="token punctuation">.</span><span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Mapper</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">ProxyMapper</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> pro<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ProxyMapper</span><span class="token punctuation">(</span><span class="token class-name">Object</span> pro<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pro <span class="token operator">=</span> pro<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"拦截执行！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"获取方法名："</span><span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>pro<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.5,words:150},y:"a",t:"代理模式"},["/study/java/design-mode/proxy","/study/java/design-mode/proxy.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-abc9f35a","/study/game/design/",{y:"p",t:"Design"},["/study/game/design/index.html"]],["v-60fb21ea","/study/java/design-mode/",{y:"p",t:"Design Mode"},["/study/java/design-mode/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},["/timeline/index.html"]],["v-5decfa84","/en/category/",{y:"p",t:"Category",I:0},["/en/category/index.html"]],["v-075c6c62","/en/tag/",{y:"p",t:"Tag",I:0},["/en/tag/index.html"]],["v-506407f4","/en/article/",{y:"p",t:"Articles",I:0},["/en/article/index.html"]],["v-37a8c5a0","/en/star/",{y:"p",t:"Star",I:0},["/en/star/index.html"]],["v-0379cba1","/en/timeline/",{y:"p",t:"Timeline",I:0},["/en/timeline/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const $=usePageLayout();return()=>h$2($.value)}}),createRoutes=()=>pagesRoutes.reduce(($,[E,F,j,N])=>($.push({name:E,path:F,component:Vuepress,meta:j},...N.map(B=>({path:B,redirect:F}))),$),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const $=createRouter({history:historyCreator(removeEndingSlash("/")),routes:createRoutes(),scrollBehavior:(E,F,j)=>j||(E.hash?{el:E.hash}:{top:0})});return $.beforeResolve(async(E,F)=>{var j;(E.path!==F.path||F===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData(E.name),(j=pagesComponents[E.name])==null?void 0:j.__asyncLoader()]))}),$},setupGlobalComponents=$=>{$.component("ClientOnly",ClientOnly),$.component("Content",Content)},setupGlobalComputed=($,E,F)=>{const j=ref(E.currentRoute.value.path);watch(()=>E.currentRoute.value.path,se=>j.value=se);const N=computed(()=>resolvers.resolveLayouts(F)),B=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,j.value)),Z=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,B.value)),Q=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),X=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,Z.value)),ae=computed(()=>resolvers.resolvePageHead(X.value,Q.value,Z.value)),le=computed(()=>resolvers.resolvePageLang(pageData.value)),ie=computed(()=>resolvers.resolvePageLayout(pageData.value,N.value));return $.provide(layoutsSymbol,N),$.provide(pageFrontmatterSymbol,Q),$.provide(pageHeadTitleSymbol,X),$.provide(pageHeadSymbol,ae),$.provide(pageLangSymbol,le),$.provide(pageLayoutSymbol,ie),$.provide(routeLocaleSymbol,B),$.provide(siteLocaleDataSymbol,Z),Object.defineProperties($.config.globalProperties,{$frontmatter:{get:()=>Q.value},$head:{get:()=>ae.value},$headTitle:{get:()=>X.value},$lang:{get:()=>le.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>B.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>Z.value},$withBase:{get:()=>withBase}}),{layouts:N,pageData,pageFrontmatter:Q,pageHead:ae,pageHeadTitle:X,pageLang:le,pageLayout:ie,routeLocale:B,siteData,siteLocaleData:Z}},setupUpdateHead=()=>{const $=usePageHead(),E=usePageLang(),F=ref([]),j=()=>{$.value.forEach(B=>{const Z=queryHeadTag(B);Z&&F.value.push(Z)})},N=()=>{document.documentElement.lang=E.value,F.value.forEach(B=>{B.parentNode===document.head&&document.head.removeChild(B)}),F.value.splice(0,F.value.length),$.value.forEach(B=>{const Z=createHeadTag(B);Z!==null&&(document.head.appendChild(Z),F.value.push(Z))})};provide(updateHeadSymbol,N),onMounted(()=>{j(),N(),watch(()=>$.value,()=>N())})},queryHeadTag=([$,E,F=""])=>{const j=Object.entries(E).map(([Q,X])=>isString$1(X)?`[${Q}=${JSON.stringify(X)}]`:X===!0?`[${Q}]`:"").join(""),N=`head > ${$}${j}`;return Array.from(document.querySelectorAll(N)).find(Q=>Q.innerText===F)||null},createHeadTag=([$,E,F])=>{if(!isString$1($))return null;const j=document.createElement($);return isPlainObject(E)&&Object.entries(E).forEach(([N,B])=>{isString$1(B)?j.setAttribute(N,B):B===!0&&j.setAttribute(N,"")}),isString$1(F)&&j.appendChild(document.createTextNode(F)),j},appCreator=createSSRApp,createVueApp=async()=>{var F;const $=appCreator({name:"VuepressApp",setup(){var j;setupUpdateHead();for(const N of clientConfigs)(j=N.setup)==null||j.call(N);return()=>[h$2(RouterView),...clientConfigs.flatMap(({rootComponents:N=[]})=>N.map(B=>h$2(B)))]}}),E=createVueRouter();setupGlobalComponents($),setupGlobalComputed($,E,clientConfigs);for(const j of clientConfigs)await((F=j.enhance)==null?void 0:F.call(j,{app:$,router:E,siteData}));return $.use(E),{app:$,router:E}};createVueApp().then(({app:$,router:E})=>{E.isReady().then(()=>{$.mount("#app")})});export{createVueApp};

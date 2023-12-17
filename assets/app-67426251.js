var Lp=Object.defineProperty;var Ip=(e,n,t)=>n in e?Lp(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var xl=(e,n,t)=>(Ip(e,typeof n!="symbol"?n+"":n,t),t);const Ap="modulepreload",Pp=function(e){return"/"+e},bi={},m=function(n,t,s){if(!t||t.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=Pp(a),a in bi)return;bi[a]=!0;const i=a.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(!!s)for(let p=l.length-1;p>=0;p--){const d=l[p];if(d.href===a&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${r}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Ap,i||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),i)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())};function wa(e,n){const t=Object.create(null),s=e.split(",");for(let l=0;l<s.length;l++)t[s[l]]=!0;return n?l=>!!t[l.toLowerCase()]:l=>!!t[l]}const Le={},_t=[],kn=()=>{},Dp=()=>!1,Sp=/^on[^a-z]/,ks=e=>Sp.test(e),Ea=e=>e.startsWith("onUpdate:"),De=Object.assign,xa=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Cp=Object.prototype.hasOwnProperty,ve=(e,n)=>Cp.call(e,n),X=Array.isArray,Xt=e=>ll(e)==="[object Map]",Op=e=>ll(e)==="[object Set]",te=e=>typeof e=="function",re=e=>typeof e=="string",Ta=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",ar=e=>Ae(e)&&te(e.then)&&te(e.catch),Rp=Object.prototype.toString,ll=e=>Rp.call(e),$p=e=>ll(e).slice(8,-1),Mp=e=>ll(e)==="[object Object]",La=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),al=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Vp=/-(\w)/g,Ge=al(e=>e.replace(Vp,(n,t)=>t?t.toUpperCase():"")),Fp=/\B([A-Z])/g,$t=al(e=>e.replace(Fp,"-$1").toLowerCase()),ys=al(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tl=al(e=>e?`on${ys(e)}`:""),os=(e,n)=>!Object.is(e,n),Ll=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Us=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},jp=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Np=e=>{const n=re(e)?Number(e):NaN;return isNaN(n)?e:n};let _i;const Gl=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ia(e){if(X(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],l=re(s)?qp(s):Ia(s);if(l)for(const a in l)n[a]=l[a]}return n}else{if(re(e))return e;if(Ae(e))return e}}const Bp=/;(?![^(]*\))/g,Hp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function qp(e){const n={};return e.replace(zp,"").split(Bp).forEach(t=>{if(t){const s=t.split(Hp);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Aa(e){let n="";if(re(e))n=e;else if(X(e))for(let t=0;t<e.length;t++){const s=Aa(e[t]);s&&(n+=s+" ")}else if(Ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=wa(Wp);function ir(e){return!!e||e===""}let Qe;class Gp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Qe,!n&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Qe;try{return Qe=this,n()}finally{Qe=t}}}on(){Qe=this}off(){Qe=this.parent}stop(n){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Kp(e,n=Qe){n&&n.active&&n.effects.push(e)}function or(){return Qe}function Jp(e){Qe&&Qe.cleanups.push(e)}const Pa=e=>{const n=new Set(e);return n.w=0,n.n=0,n},rr=e=>(e.w&Xn)>0,cr=e=>(e.n&Xn)>0,Yp=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Xn},Qp=e=>{const{deps:n}=e;if(n.length){let t=0;for(let s=0;s<n.length;s++){const l=n[s];rr(l)&&!cr(l)?l.delete(e):n[t++]=l,l.w&=~Xn,l.n&=~Xn}n.length=t}},Gs=new WeakMap;let Yt=0,Xn=1;const Kl=30;let hn;const ot=Symbol(""),Jl=Symbol("");class Da{constructor(n,t=null,s){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Kp(this,s)}run(){if(!this.active)return this.fn();let n=hn,t=Yn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=hn,hn=this,Yn=!0,Xn=1<<++Yt,Yt<=Kl?Yp(this):wi(this),this.fn()}finally{Yt<=Kl&&Qp(this),Xn=1<<--Yt,hn=this.parent,Yn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(wi(this),this.onStop&&this.onStop(),this.active=!1)}}function wi(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let Yn=!0;const ur=[];function Mt(){ur.push(Yn),Yn=!1}function Vt(){const e=ur.pop();Yn=e===void 0?!0:e}function Ke(e,n,t){if(Yn&&hn){let s=Gs.get(e);s||Gs.set(e,s=new Map);let l=s.get(t);l||s.set(t,l=Pa()),pr(l)}}function pr(e,n){let t=!1;Yt<=Kl?cr(e)||(e.n|=Xn,t=!rr(e)):t=!e.has(hn),t&&(e.add(hn),hn.deps.push(e))}function $n(e,n,t,s,l,a){const i=Gs.get(e);if(!i)return;let r=[];if(n==="clear")r=[...i.values()];else if(t==="length"&&X(e)){const c=Number(s);i.forEach((u,p)=>{(p==="length"||p>=c)&&r.push(u)})}else switch(t!==void 0&&r.push(i.get(t)),n){case"add":X(e)?La(t)&&r.push(i.get("length")):(r.push(i.get(ot)),Xt(e)&&r.push(i.get(Jl)));break;case"delete":X(e)||(r.push(i.get(ot)),Xt(e)&&r.push(i.get(Jl)));break;case"set":Xt(e)&&r.push(i.get(ot));break}if(r.length===1)r[0]&&Yl(r[0]);else{const c=[];for(const u of r)u&&c.push(...u);Yl(Pa(c))}}function Yl(e,n){const t=X(e)?e:[...e];for(const s of t)s.computed&&Ei(s);for(const s of t)s.computed||Ei(s)}function Ei(e,n){(e!==hn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Xp(e,n){var t;return(t=Gs.get(e))==null?void 0:t.get(n)}const Zp=wa("__proto__,__v_isRef,__isVue"),dr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ta)),ed=Sa(),nd=Sa(!1,!0),td=Sa(!0),xi=sd();function sd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=ue(this);for(let a=0,i=this.length;a<i;a++)Ke(s,"get",a+"");const l=s[n](...t);return l===-1||l===!1?s[n](...t.map(ue)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){Mt();const s=ue(this)[n].apply(this,t);return Vt(),s}}),e}function ld(e){const n=ue(this);return Ke(n,"has",e),n.hasOwnProperty(e)}function Sa(e=!1,n=!1){return function(s,l,a){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&a===(e?n?bd:gr:n?fr:mr).get(s))return s;const i=X(s);if(!e){if(i&&ve(xi,l))return Reflect.get(xi,l,a);if(l==="hasOwnProperty")return ld}const r=Reflect.get(s,l,a);return(Ta(l)?dr.has(l):Zp(l))||(e||Ke(s,"get",l),n)?r:Oe(r)?i&&La(l)?r:r.value:Ae(r)?e?et(r):Ft(r):r}}const ad=vr(),id=vr(!0);function vr(e=!1){return function(t,s,l,a){let i=t[s];if(Lt(i)&&Oe(i)&&!Oe(l))return!1;if(!e&&(!Ks(l)&&!Lt(l)&&(i=ue(i),l=ue(l)),!X(t)&&Oe(i)&&!Oe(l)))return i.value=l,!0;const r=X(t)&&La(s)?Number(s)<t.length:ve(t,s),c=Reflect.set(t,s,l,a);return t===ue(a)&&(r?os(l,i)&&$n(t,"set",s,l):$n(t,"add",s,l)),c}}function od(e,n){const t=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&t&&$n(e,"delete",n,void 0),s}function rd(e,n){const t=Reflect.has(e,n);return(!Ta(n)||!dr.has(n))&&Ke(e,"has",n),t}function cd(e){return Ke(e,"iterate",X(e)?"length":ot),Reflect.ownKeys(e)}const hr={get:ed,set:ad,deleteProperty:od,has:rd,ownKeys:cd},ud={get:td,set(e,n){return!0},deleteProperty(e,n){return!0}},pd=De({},hr,{get:nd,set:id}),Ca=e=>e,il=e=>Reflect.getPrototypeOf(e);function Ss(e,n,t=!1,s=!1){e=e.__v_raw;const l=ue(e),a=ue(n);t||(n!==a&&Ke(l,"get",n),Ke(l,"get",a));const{has:i}=il(l),r=s?Ca:t?$a:rs;if(i.call(l,n))return r(e.get(n));if(i.call(l,a))return r(e.get(a));e!==l&&e.get(n)}function Cs(e,n=!1){const t=this.__v_raw,s=ue(t),l=ue(e);return n||(e!==l&&Ke(s,"has",e),Ke(s,"has",l)),e===l?t.has(e):t.has(e)||t.has(l)}function Os(e,n=!1){return e=e.__v_raw,!n&&Ke(ue(e),"iterate",ot),Reflect.get(e,"size",e)}function Ti(e){e=ue(e);const n=ue(this);return il(n).has.call(n,e)||(n.add(e),$n(n,"add",e,e)),this}function Li(e,n){n=ue(n);const t=ue(this),{has:s,get:l}=il(t);let a=s.call(t,e);a||(e=ue(e),a=s.call(t,e));const i=l.call(t,e);return t.set(e,n),a?os(n,i)&&$n(t,"set",e,n):$n(t,"add",e,n),this}function Ii(e){const n=ue(this),{has:t,get:s}=il(n);let l=t.call(n,e);l||(e=ue(e),l=t.call(n,e)),s&&s.call(n,e);const a=n.delete(e);return l&&$n(n,"delete",e,void 0),a}function Ai(){const e=ue(this),n=e.size!==0,t=e.clear();return n&&$n(e,"clear",void 0,void 0),t}function Rs(e,n){return function(s,l){const a=this,i=a.__v_raw,r=ue(i),c=n?Ca:e?$a:rs;return!e&&Ke(r,"iterate",ot),i.forEach((u,p)=>s.call(l,c(u),c(p),a))}}function $s(e,n,t){return function(...s){const l=this.__v_raw,a=ue(l),i=Xt(a),r=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=l[e](...s),p=t?Ca:n?$a:rs;return!n&&Ke(a,"iterate",c?Jl:ot),{next(){const{value:d,done:v}=u.next();return v?{value:d,done:v}:{value:r?[p(d[0]),p(d[1])]:p(d),done:v}},[Symbol.iterator](){return this}}}}function Bn(e){return function(...n){return e==="delete"?!1:this}}function dd(){const e={get(a){return Ss(this,a)},get size(){return Os(this)},has:Cs,add:Ti,set:Li,delete:Ii,clear:Ai,forEach:Rs(!1,!1)},n={get(a){return Ss(this,a,!1,!0)},get size(){return Os(this)},has:Cs,add:Ti,set:Li,delete:Ii,clear:Ai,forEach:Rs(!1,!0)},t={get(a){return Ss(this,a,!0)},get size(){return Os(this,!0)},has(a){return Cs.call(this,a,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Rs(!0,!1)},s={get(a){return Ss(this,a,!0,!0)},get size(){return Os(this,!0)},has(a){return Cs.call(this,a,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:Rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=$s(a,!1,!1),t[a]=$s(a,!0,!1),n[a]=$s(a,!1,!0),s[a]=$s(a,!0,!0)}),[e,t,n,s]}const[vd,hd,md,fd]=dd();function Oa(e,n){const t=n?e?fd:md:e?hd:vd;return(s,l,a)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?s:Reflect.get(ve(t,l)&&l in s?t:s,l,a)}const gd={get:Oa(!1,!1)},kd={get:Oa(!1,!0)},yd={get:Oa(!0,!1)},mr=new WeakMap,fr=new WeakMap,gr=new WeakMap,bd=new WeakMap;function _d(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(e){return e.__v_skip||!Object.isExtensible(e)?0:_d($p(e))}function Ft(e){return Lt(e)?e:Ra(e,!1,hr,gd,mr)}function Ed(e){return Ra(e,!1,pd,kd,fr)}function et(e){return Ra(e,!0,ud,yd,gr)}function Ra(e,n,t,s,l){if(!Ae(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=l.get(e);if(a)return a;const i=wd(e);if(i===0)return e;const r=new Proxy(e,i===2?s:t);return l.set(e,r),r}function wt(e){return Lt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Ks(e){return!!(e&&e.__v_isShallow)}function kr(e){return wt(e)||Lt(e)}function ue(e){const n=e&&e.__v_raw;return n?ue(n):e}function yr(e){return Us(e,"__v_skip",!0),e}const rs=e=>Ae(e)?Ft(e):e,$a=e=>Ae(e)?et(e):e;function Ma(e){Yn&&hn&&(e=ue(e),pr(e.dep||(e.dep=Pa())))}function Va(e,n){e=ue(e);const t=e.dep;t&&Yl(t)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function H(e){return br(e,!1)}function Ne(e){return br(e,!0)}function br(e,n){return Oe(e)?e:new xd(e,n)}class xd{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:ue(n),this._value=t?n:rs(n)}get value(){return Ma(this),this._value}set value(n){const t=this.__v_isShallow||Ks(n)||Lt(n);n=t?n:ue(n),os(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:rs(n),Va(this))}}function mn(e){return Oe(e)?e.value:e}const Td={get:(e,n,t)=>mn(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const l=e[n];return Oe(l)&&!Oe(t)?(l.value=t,!0):Reflect.set(e,n,t,s)}};function _r(e){return wt(e)?e:new Proxy(e,Td)}class Ld{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=n(()=>Ma(this),()=>Va(this));this._get=t,this._set=s}get value(){return this._get()}set value(n){this._set(n)}}function Id(e){return new Ld(e)}function Ad(e){const n=X(e)?new Array(e.length):{};for(const t in e)n[t]=wr(e,t);return n}class Pd{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Xp(ue(this._object),this._key)}}class Dd{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function jt(e,n,t){return Oe(e)?e:te(e)?new Dd(e):Ae(e)&&arguments.length>1?wr(e,n,t):H(e)}function wr(e,n,t){const s=e[n];return Oe(s)?s:new Pd(e,n,t)}class Sd{constructor(n,t,s,l){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Da(n,()=>{this._dirty||(this._dirty=!0,Va(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=s}get value(){const n=ue(this);return Ma(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Cd(e,n,t=!1){let s,l;const a=te(e);return a?(s=e,l=kn):(s=e.get,l=e.set),new Sd(s,l,a||!l,t)}function Qn(e,n,t,s){let l;try{l=s?e(...s):e()}catch(a){bs(a,n,t)}return l}function rn(e,n,t,s){if(te(e)){const a=Qn(e,n,t,s);return a&&ar(a)&&a.catch(i=>{bs(i,n,t)}),a}const l=[];for(let a=0;a<e.length;a++)l.push(rn(e[a],n,t,s));return l}function bs(e,n,t,s=!0){const l=n?n.vnode:null;if(n){let a=n.parent;const i=n.proxy,r=t;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,i,r)===!1)return}a=a.parent}const c=n.appContext.config.errorHandler;if(c){Qn(c,null,10,[e,i,r]);return}}Od(e,t,l,s)}function Od(e,n,t,s=!0){console.error(e)}let cs=!1,Ql=!1;const je=[];let Tn=0;const Et=[];let Rn=null,lt=0;const Er=Promise.resolve();let Fa=null;function ct(e){const n=Fa||Er;return e?n.then(this?e.bind(this):e):n}function Rd(e){let n=Tn+1,t=je.length;for(;n<t;){const s=n+t>>>1;us(je[s])<e?n=s+1:t=s}return n}function ol(e){(!je.length||!je.includes(e,cs&&e.allowRecurse?Tn+1:Tn))&&(e.id==null?je.push(e):je.splice(Rd(e.id),0,e),xr())}function xr(){!cs&&!Ql&&(Ql=!0,Fa=Er.then(Tr))}function $d(e){const n=je.indexOf(e);n>Tn&&je.splice(n,1)}function Md(e){X(e)?Et.push(...e):(!Rn||!Rn.includes(e,e.allowRecurse?lt+1:lt))&&Et.push(e),xr()}function Pi(e,n=cs?Tn+1:0){for(;n<je.length;n++){const t=je[n];t&&t.pre&&(je.splice(n,1),n--,t())}}function Js(e){if(Et.length){const n=[...new Set(Et)];if(Et.length=0,Rn){Rn.push(...n);return}for(Rn=n,Rn.sort((t,s)=>us(t)-us(s)),lt=0;lt<Rn.length;lt++)Rn[lt]();Rn=null,lt=0}}const us=e=>e.id==null?1/0:e.id,Vd=(e,n)=>{const t=us(e)-us(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Tr(e){Ql=!1,cs=!0,je.sort(Vd);const n=kn;try{for(Tn=0;Tn<je.length;Tn++){const t=je[Tn];t&&t.active!==!1&&Qn(t,null,14)}}finally{Tn=0,je.length=0,Js(),cs=!1,Fa=null,(je.length||Et.length)&&Tr()}}function Fd(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||Le;let l=t;const a=n.startsWith("update:"),i=a&&n.slice(7);if(i&&i in s){const p=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:v}=s[p]||Le;v&&(l=t.map(h=>re(h)?h.trim():h)),d&&(l=t.map(jp))}let r,c=s[r=Tl(n)]||s[r=Tl(Ge(n))];!c&&a&&(c=s[r=Tl($t(n))]),c&&rn(c,e,6,l);const u=s[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,rn(u,e,6,l)}}function Lr(e,n,t=!1){const s=n.emitsCache,l=s.get(e);if(l!==void 0)return l;const a=e.emits;let i={},r=!1;if(!te(e)){const c=u=>{const p=Lr(u,n,!0);p&&(r=!0,De(i,p))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!r?(Ae(e)&&s.set(e,null),null):(X(a)?a.forEach(c=>i[c]=null):De(i,a),Ae(e)&&s.set(e,i),i)}function rl(e,n){return!e||!ks(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,$t(n))||ve(e,n))}let an=null,Ir=null;function Ys(e){const n=an;return an=e,Ir=e&&e.type.__scopeId||null,n}function jd(e,n=an,t){if(!n||e._n)return e;const s=(...l)=>{s._d&&Bi(-1);const a=Ys(n);let i;try{i=e(...l)}finally{Ys(a),s._d&&Bi(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Il(e){const{type:n,vnode:t,proxy:s,withProxy:l,props:a,propsOptions:[i],slots:r,attrs:c,emit:u,render:p,renderCache:d,data:v,setupState:h,ctx:k,inheritAttrs:E}=e;let x,g;const b=Ys(e);try{if(t.shapeFlag&4){const S=l||s;x=vn(p.call(S,S,d,a,h,v,k)),g=c}else{const S=n;x=vn(S.length>1?S(a,{attrs:c,slots:r,emit:u}):S(a,null)),g=n.props?c:Nd(c)}}catch(S){ss.length=0,bs(S,e,1),x=$e(Ln)}let A=x;if(g&&E!==!1){const S=Object.keys(g),{shapeFlag:B}=A;S.length&&B&7&&(i&&S.some(Ea)&&(g=Bd(g,i)),A=Zn(A,g))}return t.dirs&&(A=Zn(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),x=A,Ys(b),x}const Nd=e=>{let n;for(const t in e)(t==="class"||t==="style"||ks(t))&&((n||(n={}))[t]=e[t]);return n},Bd=(e,n)=>{const t={};for(const s in e)(!Ea(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Hd(e,n,t){const{props:s,children:l,component:a}=e,{props:i,children:r,patchFlag:c}=n,u=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Di(s,i,u):!!i;if(c&8){const p=n.dynamicProps;for(let d=0;d<p.length;d++){const v=p[d];if(i[v]!==s[v]&&!rl(u,v))return!0}}}else return(l||r)&&(!r||!r.$stable)?!0:s===i?!1:s?i?Di(s,i,u):!0:!!i;return!1}function Di(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const a=s[l];if(n[a]!==e[a]&&!rl(t,a))return!0}return!1}function zd({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const qd=e=>e.__isSuspense;function Ar(e,n){n&&n.pendingBranch?X(e)?n.effects.push(...e):n.effects.push(e):Md(e)}function Pr(e,n){return ja(e,null,n)}const Ms={};function fe(e,n,t){return ja(e,n,t)}function ja(e,n,{immediate:t,deep:s,flush:l,onTrack:a,onTrigger:i}=Le){var r;const c=or()===((r=Re)==null?void 0:r.scope)?Re:null;let u,p=!1,d=!1;if(Oe(e)?(u=()=>e.value,p=Ks(e)):wt(e)?(u=()=>e,s=!0):X(e)?(d=!0,p=e.some(S=>wt(S)||Ks(S)),u=()=>e.map(S=>{if(Oe(S))return S.value;if(wt(S))return kt(S);if(te(S))return Qn(S,c,2)})):te(e)?n?u=()=>Qn(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return v&&v(),rn(e,c,3,[h])}:u=kn,n&&s){const S=u;u=()=>kt(S())}let v,h=S=>{v=b.onStop=()=>{Qn(S,c,4)}},k;if(Pt)if(h=kn,n?t&&rn(n,c,3,[u(),d?[]:void 0,h]):u(),l==="sync"){const S=Nv();k=S.__watcherHandles||(S.__watcherHandles=[])}else return kn;let E=d?new Array(e.length).fill(Ms):Ms;const x=()=>{if(b.active)if(n){const S=b.run();(s||p||(d?S.some((B,C)=>os(B,E[C])):os(S,E)))&&(v&&v(),rn(n,c,3,[S,E===Ms?void 0:d&&E[0]===Ms?[]:E,h]),E=S)}else b.run()};x.allowRecurse=!!n;let g;l==="sync"?g=x:l==="post"?g=()=>We(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),g=()=>ol(x));const b=new Da(u,g);n?t?x():E=b.run():l==="post"?We(b.run.bind(b),c&&c.suspense):b.run();const A=()=>{b.stop(),c&&c.scope&&xa(c.scope.effects,b)};return k&&k.push(A),A}function Wd(e,n,t){const s=this.proxy,l=re(e)?e.includes(".")?Dr(s,e):()=>s[e]:e.bind(s,s);let a;te(n)?a=n:(a=n.handler,t=n);const i=Re;At(this);const r=ja(l,a.bind(s),t);return i?At(i):rt(),r}function Dr(e,n){const t=n.split(".");return()=>{let s=e;for(let l=0;l<t.length&&s;l++)s=s[t[l]];return s}}function kt(e,n){if(!Ae(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Oe(e))kt(e.value,n);else if(X(e))for(let t=0;t<e.length;t++)kt(e[t],n);else if(Op(e)||Xt(e))e.forEach(t=>{kt(t,n)});else if(Mp(e))for(const t in e)kt(e[t],n);return e}function xn(e,n,t,s){const l=e.dirs,a=n&&n.dirs;for(let i=0;i<l.length;i++){const r=l[i];a&&(r.oldValue=a[i].value);let c=r.dir[s];c&&(Mt(),rn(c,t,8,[e.el,r,e,n]),Vt())}}function Sr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return he(()=>{e.isMounted=!0}),ul(()=>{e.isUnmounting=!0}),e}const tn=[Function,Array],Cr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Ud={name:"BaseTransition",props:Cr,setup(e,{slots:n}){const t=Bt(),s=Sr();let l;return()=>{const a=n.default&&Na(n.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const E of a)if(E.type!==Ln){i=E;break}}const r=ue(e),{mode:c}=r;if(s.isLeaving)return Al(i);const u=Si(i);if(!u)return Al(i);const p=ps(u,r,s,t);ds(u,p);const d=t.subTree,v=d&&Si(d);let h=!1;const{getTransitionKey:k}=u.type;if(k){const E=k();l===void 0?l=E:E!==l&&(l=E,h=!0)}if(v&&v.type!==Ln&&(!at(u,v)||h)){const E=ps(v,r,s,t);if(ds(v,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&t.update()},Al(i);c==="in-out"&&u.type!==Ln&&(E.delayLeave=(x,g,b)=>{const A=Or(s,v);A[String(v.key)]=v,x._leaveCb=()=>{g(),x._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=b})}return i}}},Gd=Ud;function Or(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function ps(e,n,t,s){const{appear:l,mode:a,persisted:i=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:v,onAfterLeave:h,onLeaveCancelled:k,onBeforeAppear:E,onAppear:x,onAfterAppear:g,onAppearCancelled:b}=n,A=String(e.key),S=Or(t,e),B=(P,W)=>{P&&rn(P,s,9,W)},C=(P,W)=>{const z=W[1];B(P,W),X(P)?P.every(se=>se.length<=1)&&z():P.length<=1&&z()},J={mode:a,persisted:i,beforeEnter(P){let W=r;if(!t.isMounted)if(l)W=E||r;else return;P._leaveCb&&P._leaveCb(!0);const z=S[A];z&&at(e,z)&&z.el._leaveCb&&z.el._leaveCb(),B(W,[P])},enter(P){let W=c,z=u,se=p;if(!t.isMounted)if(l)W=x||c,z=g||u,se=b||p;else return;let q=!1;const Z=P._enterCb=U=>{q||(q=!0,U?B(se,[P]):B(z,[P]),J.delayedLeave&&J.delayedLeave(),P._enterCb=void 0)};W?C(W,[P,Z]):Z()},leave(P,W){const z=String(e.key);if(P._enterCb&&P._enterCb(!0),t.isUnmounting)return W();B(d,[P]);let se=!1;const q=P._leaveCb=Z=>{se||(se=!0,W(),Z?B(k,[P]):B(h,[P]),P._leaveCb=void 0,S[z]===e&&delete S[z])};S[z]=e,v?C(v,[P,q]):q()},clone(P){return ps(P,n,t,s)}};return J}function Al(e){if(_s(e))return e=Zn(e),e.children=null,e}function Si(e){return _s(e)?e.children?e.children[0]:void 0:e}function ds(e,n){e.shapeFlag&6&&e.component?ds(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Na(e,n=!1,t){let s=[],l=0;for(let a=0;a<e.length;a++){let i=e[a];const r=t==null?i.key:String(t)+String(i.key!=null?i.key:a);i.type===Xe?(i.patchFlag&128&&l++,s=s.concat(Na(i.children,n,r))):(n||i.type!==Ln)&&s.push(r!=null?Zn(i,{key:r}):i)}if(l>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}function $(e,n){return te(e)?(()=>De({name:e.name},n,{setup:e}))():e}const es=e=>!!e.type.__asyncLoader;function I(e){te(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:s,delay:l=200,timeout:a,suspensible:i=!0,onError:r}=e;let c=null,u,p=0;const d=()=>(p++,c=null,v()),v=()=>{let h;return c||(h=c=n().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),r)return new Promise((E,x)=>{r(k,()=>E(d()),()=>x(k),p+1)});throw k}).then(k=>h!==c&&c?c:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),u=k,k)))};return $({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return u},setup(){const h=Re;if(u)return()=>Pl(u,h);const k=b=>{c=null,bs(b,h,13,!s)};if(i&&h.suspense||Pt)return v().then(b=>()=>Pl(b,h)).catch(b=>(k(b),()=>s?$e(s,{error:b}):null));const E=H(!1),x=H(),g=H(!!l);return l&&setTimeout(()=>{g.value=!1},l),a!=null&&setTimeout(()=>{if(!E.value&&!x.value){const b=new Error(`Async component timed out after ${a}ms.`);k(b),x.value=b}},a),v().then(()=>{E.value=!0,h.parent&&_s(h.parent.vnode)&&ol(h.parent.update)}).catch(b=>{k(b),x.value=b}),()=>{if(E.value&&u)return Pl(u,h);if(x.value&&s)return $e(s,{error:x.value});if(t&&!g.value)return $e(t)}}})}function Pl(e,n){const{ref:t,props:s,children:l,ce:a}=n.vnode,i=$e(e,s,l);return i.ref=t,i.ce=a,delete n.vnode.ce,i}const _s=e=>e.type.__isKeepAlive;function Kd(e,n){Rr(e,"a",n)}function Jd(e,n){Rr(e,"da",n)}function Rr(e,n,t=Re){const s=e.__wdc||(e.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(cl(n,s,t),t){let l=t.parent;for(;l&&l.parent;)_s(l.parent.vnode)&&Yd(s,n,t,l),l=l.parent}}function Yd(e,n,t,s){const l=cl(n,e,s,!0);Nt(()=>{xa(s[n],l)},t)}function cl(e,n,t=Re,s=!1){if(t){const l=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...i)=>{if(t.isUnmounted)return;Mt(),At(t);const r=rn(n,t,e,i);return rt(),Vt(),r});return s?l.unshift(a):l.push(a),a}}const Fn=e=>(n,t=Re)=>(!Pt||e==="sp")&&cl(e,(...s)=>n(...s),t),Qd=Fn("bm"),he=Fn("m"),Xd=Fn("bu"),$r=Fn("u"),ul=Fn("bum"),Nt=Fn("um"),Zd=Fn("sp"),ev=Fn("rtg"),nv=Fn("rtc");function tv(e,n=Re){cl("ec",e,n)}const Mr="components";function Ze(e,n){return lv(Mr,e,!0,n)||e}const sv=Symbol.for("v-ndc");function lv(e,n,t=!0,s=!1){const l=an||Re;if(l){const a=l.type;if(e===Mr){const r=Vv(a,!1);if(r&&(r===n||r===Ge(n)||r===ys(Ge(n))))return a}const i=Ci(l[e]||a[e],n)||Ci(l.appContext[e],n);return!i&&s?a:i}}function Ci(e,n){return e&&(e[n]||e[Ge(n)]||e[ys(Ge(n))])}const Xl=e=>e?Kr(e)?Wa(e)||e.proxy:Xl(e.parent):null,ns=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xl(e.parent),$root:e=>Xl(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>ol(e.update)),$nextTick:e=>e.n||(e.n=ct.bind(e.proxy)),$watch:e=>Wd.bind(e)}),Dl=(e,n)=>e!==Le&&!e.__isScriptSetup&&ve(e,n),av={get({_:e},n){const{ctx:t,setupState:s,data:l,props:a,accessCache:i,type:r,appContext:c}=e;let u;if(n[0]!=="$"){const h=i[n];if(h!==void 0)switch(h){case 1:return s[n];case 2:return l[n];case 4:return t[n];case 3:return a[n]}else{if(Dl(s,n))return i[n]=1,s[n];if(l!==Le&&ve(l,n))return i[n]=2,l[n];if((u=e.propsOptions[0])&&ve(u,n))return i[n]=3,a[n];if(t!==Le&&ve(t,n))return i[n]=4,t[n];Zl&&(i[n]=0)}}const p=ns[n];let d,v;if(p)return n==="$attrs"&&Ke(e,"get",n),p(e);if((d=r.__cssModules)&&(d=d[n]))return d;if(t!==Le&&ve(t,n))return i[n]=4,t[n];if(v=c.config.globalProperties,ve(v,n))return v[n]},set({_:e},n,t){const{data:s,setupState:l,ctx:a}=e;return Dl(l,n)?(l[n]=t,!0):s!==Le&&ve(s,n)?(s[n]=t,!0):ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:l,propsOptions:a}},i){let r;return!!t[i]||e!==Le&&ve(e,i)||Dl(n,i)||(r=a[0])&&ve(r,i)||ve(s,i)||ve(ns,i)||ve(l.config.globalProperties,i)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Oi(e){return X(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Zl=!0;function iv(e){const n=Ba(e),t=e.proxy,s=e.ctx;Zl=!1,n.beforeCreate&&Ri(n.beforeCreate,e,"bc");const{data:l,computed:a,methods:i,watch:r,provide:c,inject:u,created:p,beforeMount:d,mounted:v,beforeUpdate:h,updated:k,activated:E,deactivated:x,beforeDestroy:g,beforeUnmount:b,destroyed:A,unmounted:S,render:B,renderTracked:C,renderTriggered:J,errorCaptured:P,serverPrefetch:W,expose:z,inheritAttrs:se,components:q,directives:Z,filters:U}=n;if(u&&ov(u,s,null),i)for(const ke in i){const ne=i[ke];te(ne)&&(s[ke]=ne.bind(t))}if(l){const ke=l.call(t,t);Ae(ke)&&(e.data=Ft(ke))}if(Zl=!0,a)for(const ke in a){const ne=a[ke],un=te(ne)?ne.bind(t,t):te(ne.get)?ne.get.bind(t,t):kn,wn=!te(ne)&&te(ne.set)?ne.set.bind(t):kn,qe=_({get:un,set:wn});Object.defineProperty(s,ke,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Pe=>qe.value=Pe})}if(r)for(const ke in r)Vr(r[ke],s,t,ke);if(c){const ke=te(c)?c.call(t):c;Reflect.ownKeys(ke).forEach(ne=>{cn(ne,ke[ne])})}p&&Ri(p,e,"c");function ie(ke,ne){X(ne)?ne.forEach(un=>ke(un.bind(t))):ne&&ke(ne.bind(t))}if(ie(Qd,d),ie(he,v),ie(Xd,h),ie($r,k),ie(Kd,E),ie(Jd,x),ie(tv,P),ie(nv,C),ie(ev,J),ie(ul,b),ie(Nt,S),ie(Zd,W),X(z))if(z.length){const ke=e.exposed||(e.exposed={});z.forEach(ne=>{Object.defineProperty(ke,ne,{get:()=>t[ne],set:un=>t[ne]=un})})}else e.exposed||(e.exposed={});B&&e.render===kn&&(e.render=B),se!=null&&(e.inheritAttrs=se),q&&(e.components=q),Z&&(e.directives=Z)}function ov(e,n,t=kn){X(e)&&(e=ea(e));for(const s in e){const l=e[s];let a;Ae(l)?"default"in l?a=ge(l.from||s,l.default,!0):a=ge(l.from||s):a=ge(l),Oe(a)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):n[s]=a}}function Ri(e,n,t){rn(X(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Vr(e,n,t,s){const l=s.includes(".")?Dr(t,s):()=>t[s];if(re(e)){const a=n[e];te(a)&&fe(l,a)}else if(te(e))fe(l,e.bind(t));else if(Ae(e))if(X(e))e.forEach(a=>Vr(a,n,t,s));else{const a=te(e.handler)?e.handler.bind(t):n[e.handler];te(a)&&fe(l,a,e)}}function Ba(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:l,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,r=a.get(n);let c;return r?c=r:!l.length&&!t&&!s?c=n:(c={},l.length&&l.forEach(u=>Qs(c,u,i,!0)),Qs(c,n,i)),Ae(n)&&a.set(n,c),c}function Qs(e,n,t,s=!1){const{mixins:l,extends:a}=n;a&&Qs(e,a,t,!0),l&&l.forEach(i=>Qs(e,i,t,!0));for(const i in n)if(!(s&&i==="expose")){const r=rv[i]||t&&t[i];e[i]=r?r(e[i],n[i]):n[i]}return e}const rv={data:$i,props:Mi,emits:Mi,methods:Qt,computed:Qt,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Qt,directives:Qt,watch:uv,provide:$i,inject:cv};function $i(e,n){return n?e?function(){return De(te(e)?e.call(this,this):e,te(n)?n.call(this,this):n)}:n:e}function cv(e,n){return Qt(ea(e),ea(n))}function ea(e){if(X(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Be(e,n){return e?[...new Set([].concat(e,n))]:n}function Qt(e,n){return e?De(Object.create(null),e,n):n}function Mi(e,n){return e?X(e)&&X(n)?[...new Set([...e,...n])]:De(Object.create(null),Oi(e),Oi(n??{})):n}function uv(e,n){if(!e)return n;if(!n)return e;const t=De(Object.create(null),e);for(const s in n)t[s]=Be(e[s],n[s]);return t}function Fr(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pv=0;function dv(e,n){return function(s,l=null){te(s)||(s=De({},s)),l!=null&&!Ae(l)&&(l=null);const a=Fr(),i=new Set;let r=!1;const c=a.app={_uid:pv++,_component:s,_props:l,_container:null,_context:a,_instance:null,version:Bv,get config(){return a.config},set config(u){},use(u,...p){return i.has(u)||(u&&te(u.install)?(i.add(u),u.install(c,...p)):te(u)&&(i.add(u),u(c,...p))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,p){return p?(a.components[u]=p,c):a.components[u]},directive(u,p){return p?(a.directives[u]=p,c):a.directives[u]},mount(u,p,d){if(!r){const v=$e(s,l);return v.appContext=a,p&&n?n(v,u):e(v,u,d),r=!0,c._container=u,u.__vue_app__=c,Wa(v.component)||v.component.proxy}},unmount(){r&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return a.provides[u]=p,c},runWithContext(u){Xs=c;try{return u()}finally{Xs=null}}};return c}}let Xs=null;function cn(e,n){if(Re){let t=Re.provides;const s=Re.parent&&Re.parent.provides;s===t&&(t=Re.provides=Object.create(s)),t[e]=n}}function ge(e,n,t=!1){const s=Re||an;if(s||Xs){const l=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Xs._context.provides;if(l&&e in l)return l[e];if(arguments.length>1)return t&&te(n)?n.call(s&&s.proxy):n}}function vv(e,n,t,s=!1){const l={},a={};Us(a,pl,1),e.propsDefaults=Object.create(null),jr(e,n,l,a);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);t?e.props=s?l:Ed(l):e.type.props?e.props=l:e.props=a,e.attrs=a}function hv(e,n,t,s){const{props:l,attrs:a,vnode:{patchFlag:i}}=e,r=ue(l),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let v=p[d];if(rl(e.emitsOptions,v))continue;const h=n[v];if(c)if(ve(a,v))h!==a[v]&&(a[v]=h,u=!0);else{const k=Ge(v);l[k]=na(c,r,k,h,e,!1)}else h!==a[v]&&(a[v]=h,u=!0)}}}else{jr(e,n,l,a)&&(u=!0);let p;for(const d in r)(!n||!ve(n,d)&&((p=$t(d))===d||!ve(n,p)))&&(c?t&&(t[d]!==void 0||t[p]!==void 0)&&(l[d]=na(c,r,d,void 0,e,!0)):delete l[d]);if(a!==r)for(const d in a)(!n||!ve(n,d))&&(delete a[d],u=!0)}u&&$n(e,"set","$attrs")}function jr(e,n,t,s){const[l,a]=e.propsOptions;let i=!1,r;if(n)for(let c in n){if(Zt(c))continue;const u=n[c];let p;l&&ve(l,p=Ge(c))?!a||!a.includes(p)?t[p]=u:(r||(r={}))[p]=u:rl(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(a){const c=ue(t),u=r||Le;for(let p=0;p<a.length;p++){const d=a[p];t[d]=na(l,c,d,u[d],e,!ve(u,d))}}return i}function na(e,n,t,s,l,a){const i=e[t];if(i!=null){const r=ve(i,"default");if(r&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&te(c)){const{propsDefaults:u}=l;t in u?s=u[t]:(At(l),s=u[t]=c.call(null,n),rt())}else s=c}i[0]&&(a&&!r?s=!1:i[1]&&(s===""||s===$t(t))&&(s=!0))}return s}function Nr(e,n,t=!1){const s=n.propsCache,l=s.get(e);if(l)return l;const a=e.props,i={},r=[];let c=!1;if(!te(e)){const p=d=>{c=!0;const[v,h]=Nr(d,n,!0);De(i,v),h&&r.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!c)return Ae(e)&&s.set(e,_t),_t;if(X(a))for(let p=0;p<a.length;p++){const d=Ge(a[p]);Vi(d)&&(i[d]=Le)}else if(a)for(const p in a){const d=Ge(p);if(Vi(d)){const v=a[p],h=i[d]=X(v)||te(v)?{type:v}:De({},v);if(h){const k=Ni(Boolean,h.type),E=Ni(String,h.type);h[0]=k>-1,h[1]=E<0||k<E,(k>-1||ve(h,"default"))&&r.push(d)}}}const u=[i,r];return Ae(e)&&s.set(e,u),u}function Vi(e){return e[0]!=="$"}function Fi(e){const n=e&&e.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:e===null?"null":""}function ji(e,n){return Fi(e)===Fi(n)}function Ni(e,n){return X(n)?n.findIndex(t=>ji(t,e)):te(n)&&ji(n,e)?0:-1}const Br=e=>e[0]==="_"||e==="$stable",Ha=e=>X(e)?e.map(vn):[vn(e)],mv=(e,n,t)=>{if(n._n)return n;const s=jd((...l)=>Ha(n(...l)),t);return s._c=!1,s},Hr=(e,n,t)=>{const s=e._ctx;for(const l in e){if(Br(l))continue;const a=e[l];if(te(a))n[l]=mv(l,a,s);else if(a!=null){const i=Ha(a);n[l]=()=>i}}},zr=(e,n)=>{const t=Ha(n);e.slots.default=()=>t},fv=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=ue(n),Us(n,"_",t)):Hr(n,e.slots={})}else e.slots={},n&&zr(e,n);Us(e.slots,pl,1)},gv=(e,n,t)=>{const{vnode:s,slots:l}=e;let a=!0,i=Le;if(s.shapeFlag&32){const r=n._;r?t&&r===1?a=!1:(De(l,n),!t&&r===1&&delete l._):(a=!n.$stable,Hr(n,l)),i=n}else n&&(zr(e,n),i={default:1});if(a)for(const r in l)!Br(r)&&!(r in i)&&delete l[r]};function Zs(e,n,t,s,l=!1){if(X(e)){e.forEach((v,h)=>Zs(v,n&&(X(n)?n[h]:n),t,s,l));return}if(es(s)&&!l)return;const a=s.shapeFlag&4?Wa(s.component)||s.component.proxy:s.el,i=l?null:a,{i:r,r:c}=e,u=n&&n.r,p=r.refs===Le?r.refs={}:r.refs,d=r.setupState;if(u!=null&&u!==c&&(re(u)?(p[u]=null,ve(d,u)&&(d[u]=null)):Oe(u)&&(u.value=null)),te(c))Qn(c,r,12,[i,p]);else{const v=re(c),h=Oe(c);if(v||h){const k=()=>{if(e.f){const E=v?ve(d,c)?d[c]:p[c]:c.value;l?X(E)&&xa(E,a):X(E)?E.includes(a)||E.push(a):v?(p[c]=[a],ve(d,c)&&(d[c]=p[c])):(c.value=[a],e.k&&(p[e.k]=c.value))}else v?(p[c]=i,ve(d,c)&&(d[c]=i)):h&&(c.value=i,e.k&&(p[e.k]=i))};i?(k.id=-1,We(k,t)):k()}}}let Hn=!1;const Vs=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Fs=e=>e.nodeType===8;function kv(e){const{mt:n,p:t,o:{patchProp:s,createText:l,nextSibling:a,parentNode:i,remove:r,insert:c,createComment:u}}=e,p=(g,b)=>{if(!b.hasChildNodes()){t(null,g,b),Js(),b._vnode=g;return}Hn=!1,d(b.firstChild,g,null,null,null),Js(),b._vnode=g,Hn&&console.error("Hydration completed but contains mismatches.")},d=(g,b,A,S,B,C=!1)=>{const J=Fs(g)&&g.data==="[",P=()=>E(g,b,A,S,B,J),{type:W,ref:z,shapeFlag:se,patchFlag:q}=b;let Z=g.nodeType;b.el=g,q===-2&&(C=!1,b.dynamicChildren=null);let U=null;switch(W){case It:Z!==3?b.children===""?(c(b.el=l(""),i(g),g),U=g):U=P():(g.data!==b.children&&(Hn=!0,g.data=b.children),U=a(g));break;case Ln:Z!==8||J?U=P():U=a(g);break;case ts:if(J&&(g=a(g),Z=g.nodeType),Z===1||Z===3){U=g;const Te=!b.children.length;for(let ie=0;ie<b.staticCount;ie++)Te&&(b.children+=U.nodeType===1?U.outerHTML:U.data),ie===b.staticCount-1&&(b.anchor=U),U=a(U);return J?a(U):U}else P();break;case Xe:J?U=k(g,b,A,S,B,C):U=P();break;default:if(se&1)Z!==1||b.type.toLowerCase()!==g.tagName.toLowerCase()?U=P():U=v(g,b,A,S,B,C);else if(se&6){b.slotScopeIds=B;const Te=i(g);if(n(b,Te,null,A,S,Vs(Te),C),U=J?x(g):a(g),U&&Fs(U)&&U.data==="teleport end"&&(U=a(U)),es(b)){let ie;J?(ie=$e(Xe),ie.anchor=U?U.previousSibling:Te.lastChild):ie=g.nodeType===3?Gr(""):$e("div"),ie.el=g,b.component.subTree=ie}}else se&64?Z!==8?U=P():U=b.type.hydrate(g,b,A,S,B,C,e,h):se&128&&(U=b.type.hydrate(g,b,A,S,Vs(i(g)),B,C,e,d))}return z!=null&&Zs(z,null,S,b),U},v=(g,b,A,S,B,C)=>{C=C||!!b.dynamicChildren;const{type:J,props:P,patchFlag:W,shapeFlag:z,dirs:se}=b,q=J==="input"&&se||J==="option";if(q||W!==-1){if(se&&xn(b,null,A,"created"),P)if(q||!C||W&48)for(const U in P)(q&&U.endsWith("value")||ks(U)&&!Zt(U))&&s(g,U,null,P[U],!1,void 0,A);else P.onClick&&s(g,"onClick",null,P.onClick,!1,void 0,A);let Z;if((Z=P&&P.onVnodeBeforeMount)&&sn(Z,A,b),se&&xn(b,null,A,"beforeMount"),((Z=P&&P.onVnodeMounted)||se)&&Ar(()=>{Z&&sn(Z,A,b),se&&xn(b,null,A,"mounted")},S),z&16&&!(P&&(P.innerHTML||P.textContent))){let U=h(g.firstChild,b,g,A,S,B,C);for(;U;){Hn=!0;const Te=U;U=U.nextSibling,r(Te)}}else z&8&&g.textContent!==b.children&&(Hn=!0,g.textContent=b.children)}return g.nextSibling},h=(g,b,A,S,B,C,J)=>{J=J||!!b.dynamicChildren;const P=b.children,W=P.length;for(let z=0;z<W;z++){const se=J?P[z]:P[z]=vn(P[z]);if(g)g=d(g,se,S,B,C,J);else{if(se.type===It&&!se.children)continue;Hn=!0,t(null,se,A,null,S,B,Vs(A),C)}}return g},k=(g,b,A,S,B,C)=>{const{slotScopeIds:J}=b;J&&(B=B?B.concat(J):J);const P=i(g),W=h(a(g),b,P,A,S,B,C);return W&&Fs(W)&&W.data==="]"?a(b.anchor=W):(Hn=!0,c(b.anchor=u("]"),P,W),W)},E=(g,b,A,S,B,C)=>{if(Hn=!0,b.el=null,C){const W=x(g);for(;;){const z=a(g);if(z&&z!==W)r(z);else break}}const J=a(g),P=i(g);return r(g),t(null,b,P,J,A,S,Vs(P),B),J},x=g=>{let b=0;for(;g;)if(g=a(g),g&&Fs(g)&&(g.data==="["&&b++,g.data==="]")){if(b===0)return a(g);b--}return g};return[p,d]}const We=Ar;function yv(e){return bv(e,kv)}function bv(e,n){const t=Gl();t.__VUE__=!0;const{insert:s,remove:l,patchProp:a,createElement:i,createText:r,createComment:c,setText:u,setElementText:p,parentNode:d,nextSibling:v,setScopeId:h=kn,insertStaticContent:k}=e,E=(f,y,w,T=null,D=null,O=null,j=!1,M=null,F=!!y.dynamicChildren)=>{if(f===y)return;f&&!at(f,y)&&(T=L(f),Pe(f,D,O,!0),f=null),y.patchFlag===-2&&(F=!1,y.dynamicChildren=null);const{type:R,ref:Y,shapeFlag:G}=y;switch(R){case It:x(f,y,w,T);break;case Ln:g(f,y,w,T);break;case ts:f==null&&b(y,w,T,j);break;case Xe:q(f,y,w,T,D,O,j,M,F);break;default:G&1?B(f,y,w,T,D,O,j,M,F):G&6?Z(f,y,w,T,D,O,j,M,F):(G&64||G&128)&&R.process(f,y,w,T,D,O,j,M,F,V)}Y!=null&&D&&Zs(Y,f&&f.ref,O,y||f,!y)},x=(f,y,w,T)=>{if(f==null)s(y.el=r(y.children),w,T);else{const D=y.el=f.el;y.children!==f.children&&u(D,y.children)}},g=(f,y,w,T)=>{f==null?s(y.el=c(y.children||""),w,T):y.el=f.el},b=(f,y,w,T)=>{[f.el,f.anchor]=k(f.children,y,w,T,f.el,f.anchor)},A=({el:f,anchor:y},w,T)=>{let D;for(;f&&f!==y;)D=v(f),s(f,w,T),f=D;s(y,w,T)},S=({el:f,anchor:y})=>{let w;for(;f&&f!==y;)w=v(f),l(f),f=w;l(y)},B=(f,y,w,T,D,O,j,M,F)=>{j=j||y.type==="svg",f==null?C(y,w,T,D,O,j,M,F):W(f,y,D,O,j,M,F)},C=(f,y,w,T,D,O,j,M)=>{let F,R;const{type:Y,props:G,shapeFlag:Q,transition:ee,dirs:oe}=f;if(F=f.el=i(f.type,O,G&&G.is,G),Q&8?p(F,f.children):Q&16&&P(f.children,F,null,T,D,O&&Y!=="foreignObject",j,M),oe&&xn(f,null,T,"created"),J(F,f,f.scopeId,j,T),G){for(const _e in G)_e!=="value"&&!Zt(_e)&&a(F,_e,null,G[_e],O,f.children,T,D,Se);"value"in G&&a(F,"value",null,G.value),(R=G.onVnodeBeforeMount)&&sn(R,T,f)}oe&&xn(f,null,T,"beforeMount");const Ee=(!D||D&&!D.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(F),s(F,y,w),((R=G&&G.onVnodeMounted)||Ee||oe)&&We(()=>{R&&sn(R,T,f),Ee&&ee.enter(F),oe&&xn(f,null,T,"mounted")},D)},J=(f,y,w,T,D)=>{if(w&&h(f,w),T)for(let O=0;O<T.length;O++)h(f,T[O]);if(D){let O=D.subTree;if(y===O){const j=D.vnode;J(f,j,j.scopeId,j.slotScopeIds,D.parent)}}},P=(f,y,w,T,D,O,j,M,F=0)=>{for(let R=F;R<f.length;R++){const Y=f[R]=M?Gn(f[R]):vn(f[R]);E(null,Y,y,w,T,D,O,j,M)}},W=(f,y,w,T,D,O,j)=>{const M=y.el=f.el;let{patchFlag:F,dynamicChildren:R,dirs:Y}=y;F|=f.patchFlag&16;const G=f.props||Le,Q=y.props||Le;let ee;w&&tt(w,!1),(ee=Q.onVnodeBeforeUpdate)&&sn(ee,w,y,f),Y&&xn(y,f,w,"beforeUpdate"),w&&tt(w,!0);const oe=D&&y.type!=="foreignObject";if(R?z(f.dynamicChildren,R,M,w,T,oe,O):j||ne(f,y,M,null,w,T,oe,O,!1),F>0){if(F&16)se(M,y,G,Q,w,T,D);else if(F&2&&G.class!==Q.class&&a(M,"class",null,Q.class,D),F&4&&a(M,"style",G.style,Q.style,D),F&8){const Ee=y.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const Ce=Ee[_e],pn=G[Ce],dt=Q[Ce];(dt!==pn||Ce==="value")&&a(M,Ce,pn,dt,D,f.children,w,T,Se)}}F&1&&f.children!==y.children&&p(M,y.children)}else!j&&R==null&&se(M,y,G,Q,w,T,D);((ee=Q.onVnodeUpdated)||Y)&&We(()=>{ee&&sn(ee,w,y,f),Y&&xn(y,f,w,"updated")},T)},z=(f,y,w,T,D,O,j)=>{for(let M=0;M<y.length;M++){const F=f[M],R=y[M],Y=F.el&&(F.type===Xe||!at(F,R)||F.shapeFlag&70)?d(F.el):w;E(F,R,Y,null,T,D,O,j,!0)}},se=(f,y,w,T,D,O,j)=>{if(w!==T){if(w!==Le)for(const M in w)!Zt(M)&&!(M in T)&&a(f,M,w[M],null,j,y.children,D,O,Se);for(const M in T){if(Zt(M))continue;const F=T[M],R=w[M];F!==R&&M!=="value"&&a(f,M,R,F,j,y.children,D,O,Se)}"value"in T&&a(f,"value",w.value,T.value)}},q=(f,y,w,T,D,O,j,M,F)=>{const R=y.el=f?f.el:r(""),Y=y.anchor=f?f.anchor:r("");let{patchFlag:G,dynamicChildren:Q,slotScopeIds:ee}=y;ee&&(M=M?M.concat(ee):ee),f==null?(s(R,w,T),s(Y,w,T),P(y.children,w,Y,D,O,j,M,F)):G>0&&G&64&&Q&&f.dynamicChildren?(z(f.dynamicChildren,Q,w,D,O,j,M),(y.key!=null||D&&y===D.subTree)&&qr(f,y,!0)):ne(f,y,w,Y,D,O,j,M,F)},Z=(f,y,w,T,D,O,j,M,F)=>{y.slotScopeIds=M,f==null?y.shapeFlag&512?D.ctx.activate(y,w,T,j,F):U(y,w,T,D,O,j,F):Te(f,y,F)},U=(f,y,w,T,D,O,j)=>{const M=f.component=Cv(f,T,D);if(_s(f)&&(M.ctx.renderer=V),Ov(M),M.asyncDep){if(D&&D.registerDep(M,ie),!f.el){const F=M.subTree=$e(Ln);g(null,F,y,w)}return}ie(M,f,y,w,D,O,j)},Te=(f,y,w)=>{const T=y.component=f.component;if(Hd(f,y,w))if(T.asyncDep&&!T.asyncResolved){ke(T,y,w);return}else T.next=y,$d(T.update),T.update();else y.el=f.el,T.vnode=y},ie=(f,y,w,T,D,O,j)=>{const M=()=>{if(f.isMounted){let{next:Y,bu:G,u:Q,parent:ee,vnode:oe}=f,Ee=Y,_e;tt(f,!1),Y?(Y.el=oe.el,ke(f,Y,j)):Y=oe,G&&Ll(G),(_e=Y.props&&Y.props.onVnodeBeforeUpdate)&&sn(_e,ee,Y,oe),tt(f,!0);const Ce=Il(f),pn=f.subTree;f.subTree=Ce,E(pn,Ce,d(pn.el),L(pn),f,D,O),Y.el=Ce.el,Ee===null&&zd(f,Ce.el),Q&&We(Q,D),(_e=Y.props&&Y.props.onVnodeUpdated)&&We(()=>sn(_e,ee,Y,oe),D)}else{let Y;const{el:G,props:Q}=y,{bm:ee,m:oe,parent:Ee}=f,_e=es(y);if(tt(f,!1),ee&&Ll(ee),!_e&&(Y=Q&&Q.onVnodeBeforeMount)&&sn(Y,Ee,y),tt(f,!0),G&&pe){const Ce=()=>{f.subTree=Il(f),pe(G,f.subTree,f,D,null)};_e?y.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=Il(f);E(null,Ce,w,T,f,D,O),y.el=Ce.el}if(oe&&We(oe,D),!_e&&(Y=Q&&Q.onVnodeMounted)){const Ce=y;We(()=>sn(Y,Ee,Ce),D)}(y.shapeFlag&256||Ee&&es(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&We(f.a,D),f.isMounted=!0,y=w=T=null}},F=f.effect=new Da(M,()=>ol(R),f.scope),R=f.update=()=>F.run();R.id=f.uid,tt(f,!0),R()},ke=(f,y,w)=>{y.component=f;const T=f.vnode.props;f.vnode=y,f.next=null,hv(f,y.props,T,w),gv(f,y.children,w),Mt(),Pi(),Vt()},ne=(f,y,w,T,D,O,j,M,F=!1)=>{const R=f&&f.children,Y=f?f.shapeFlag:0,G=y.children,{patchFlag:Q,shapeFlag:ee}=y;if(Q>0){if(Q&128){wn(R,G,w,T,D,O,j,M,F);return}else if(Q&256){un(R,G,w,T,D,O,j,M,F);return}}ee&8?(Y&16&&Se(R,D,O),G!==R&&p(w,G)):Y&16?ee&16?wn(R,G,w,T,D,O,j,M,F):Se(R,D,O,!0):(Y&8&&p(w,""),ee&16&&P(G,w,T,D,O,j,M,F))},un=(f,y,w,T,D,O,j,M,F)=>{f=f||_t,y=y||_t;const R=f.length,Y=y.length,G=Math.min(R,Y);let Q;for(Q=0;Q<G;Q++){const ee=y[Q]=F?Gn(y[Q]):vn(y[Q]);E(f[Q],ee,w,null,D,O,j,M,F)}R>Y?Se(f,D,O,!0,!1,G):P(y,w,T,D,O,j,M,F,G)},wn=(f,y,w,T,D,O,j,M,F)=>{let R=0;const Y=y.length;let G=f.length-1,Q=Y-1;for(;R<=G&&R<=Q;){const ee=f[R],oe=y[R]=F?Gn(y[R]):vn(y[R]);if(at(ee,oe))E(ee,oe,w,null,D,O,j,M,F);else break;R++}for(;R<=G&&R<=Q;){const ee=f[G],oe=y[Q]=F?Gn(y[Q]):vn(y[Q]);if(at(ee,oe))E(ee,oe,w,null,D,O,j,M,F);else break;G--,Q--}if(R>G){if(R<=Q){const ee=Q+1,oe=ee<Y?y[ee].el:T;for(;R<=Q;)E(null,y[R]=F?Gn(y[R]):vn(y[R]),w,oe,D,O,j,M,F),R++}}else if(R>Q)for(;R<=G;)Pe(f[R],D,O,!0),R++;else{const ee=R,oe=R,Ee=new Map;for(R=oe;R<=Q;R++){const Ye=y[R]=F?Gn(y[R]):vn(y[R]);Ye.key!=null&&Ee.set(Ye.key,R)}let _e,Ce=0;const pn=Q-oe+1;let dt=!1,gi=0;const Gt=new Array(pn);for(R=0;R<pn;R++)Gt[R]=0;for(R=ee;R<=G;R++){const Ye=f[R];if(Ce>=pn){Pe(Ye,D,O,!0);continue}let En;if(Ye.key!=null)En=Ee.get(Ye.key);else for(_e=oe;_e<=Q;_e++)if(Gt[_e-oe]===0&&at(Ye,y[_e])){En=_e;break}En===void 0?Pe(Ye,D,O,!0):(Gt[En-oe]=R+1,En>=gi?gi=En:dt=!0,E(Ye,y[En],w,null,D,O,j,M,F),Ce++)}const ki=dt?_v(Gt):_t;for(_e=ki.length-1,R=pn-1;R>=0;R--){const Ye=oe+R,En=y[Ye],yi=Ye+1<Y?y[Ye+1].el:T;Gt[R]===0?E(null,En,w,yi,D,O,j,M,F):dt&&(_e<0||R!==ki[_e]?qe(En,w,yi,2):_e--)}}},qe=(f,y,w,T,D=null)=>{const{el:O,type:j,transition:M,children:F,shapeFlag:R}=f;if(R&6){qe(f.component.subTree,y,w,T);return}if(R&128){f.suspense.move(y,w,T);return}if(R&64){j.move(f,y,w,V);return}if(j===Xe){s(O,y,w);for(let G=0;G<F.length;G++)qe(F[G],y,w,T);s(f.anchor,y,w);return}if(j===ts){A(f,y,w);return}if(T!==2&&R&1&&M)if(T===0)M.beforeEnter(O),s(O,y,w),We(()=>M.enter(O),D);else{const{leave:G,delayLeave:Q,afterLeave:ee}=M,oe=()=>s(O,y,w),Ee=()=>{G(O,()=>{oe(),ee&&ee()})};Q?Q(O,oe,Ee):Ee()}else s(O,y,w)},Pe=(f,y,w,T=!1,D=!1)=>{const{type:O,props:j,ref:M,children:F,dynamicChildren:R,shapeFlag:Y,patchFlag:G,dirs:Q}=f;if(M!=null&&Zs(M,null,w,f,!0),Y&256){y.ctx.deactivate(f);return}const ee=Y&1&&Q,oe=!es(f);let Ee;if(oe&&(Ee=j&&j.onVnodeBeforeUnmount)&&sn(Ee,y,f),Y&6)Nn(f.component,w,T);else{if(Y&128){f.suspense.unmount(w,T);return}ee&&xn(f,null,y,"beforeUnmount"),Y&64?f.type.remove(f,y,w,D,V,T):R&&(O!==Xe||G>0&&G&64)?Se(R,y,w,!1,!0):(O===Xe&&G&384||!D&&Y&16)&&Se(F,y,w),T&&Pn(f)}(oe&&(Ee=j&&j.onVnodeUnmounted)||ee)&&We(()=>{Ee&&sn(Ee,y,f),ee&&xn(f,null,y,"unmounted")},w)},Pn=f=>{const{type:y,el:w,anchor:T,transition:D}=f;if(y===Xe){nn(w,T);return}if(y===ts){S(f);return}const O=()=>{l(w),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(f.shapeFlag&1&&D&&!D.persisted){const{leave:j,delayLeave:M}=D,F=()=>j(w,O);M?M(f.el,O,F):F()}else O()},nn=(f,y)=>{let w;for(;f!==y;)w=v(f),l(f),f=w;l(y)},Nn=(f,y,w)=>{const{bum:T,scope:D,update:O,subTree:j,um:M}=f;T&&Ll(T),D.stop(),O&&(O.active=!1,Pe(j,f,y,w)),M&&We(M,y),We(()=>{f.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Se=(f,y,w,T=!1,D=!1,O=0)=>{for(let j=O;j<f.length;j++)Pe(f[j],y,w,T,D)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),N=(f,y,w)=>{f==null?y._vnode&&Pe(y._vnode,null,null,!0):E(y._vnode||null,f,y,null,null,null,w),Pi(),Js(),y._vnode=f},V={p:E,um:Pe,m:qe,r:Pn,mt:U,mc:P,pc:ne,pbc:z,n:L,o:e};let K,pe;return n&&([K,pe]=n(V)),{render:N,hydrate:K,createApp:dv(N,K)}}function tt({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function qr(e,n,t=!1){const s=e.children,l=n.children;if(X(s)&&X(l))for(let a=0;a<s.length;a++){const i=s[a];let r=l[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=l[a]=Gn(l[a]),r.el=i.el),t||qr(i,r)),r.type===It&&(r.el=i.el)}}function _v(e){const n=e.slice(),t=[0];let s,l,a,i,r;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(l=t[t.length-1],e[l]<u){n[s]=l,t.push(s);continue}for(a=0,i=t.length-1;a<i;)r=a+i>>1,e[t[r]]<u?a=r+1:i=r;u<e[t[a]]&&(a>0&&(n[s]=t[a-1]),t[a]=s)}}for(a=t.length,i=t[a-1];a-- >0;)t[a]=i,i=n[i];return t}const wv=e=>e.__isTeleport,Xe=Symbol.for("v-fgt"),It=Symbol.for("v-txt"),Ln=Symbol.for("v-cmt"),ts=Symbol.for("v-stc"),ss=[];let fn=null;function Ev(e=!1){ss.push(fn=e?null:[])}function xv(){ss.pop(),fn=ss[ss.length-1]||null}let vs=1;function Bi(e){vs+=e}function Tv(e){return e.dynamicChildren=vs>0?fn||_t:null,xv(),vs>0&&fn&&fn.push(e),e}function Lv(e,n,t,s,l,a){return Tv(Ur(e,n,t,s,l,a,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function at(e,n){return e.type===n.type&&e.key===n.key}const pl="__vInternal",Wr=({key:e})=>e??null,Ws=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||Oe(e)||te(e)?{i:an,r:e,k:n,f:!!t}:e:null);function Ur(e,n=null,t=null,s=0,l=null,a=e===Xe?0:1,i=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Wr(n),ref:n&&Ws(n),scopeId:Ir,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:an};return r?(za(c,t),a&128&&e.normalize(c)):t&&(c.shapeFlag|=re(t)?8:16),vs>0&&!i&&fn&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&fn.push(c),c}const $e=Iv;function Iv(e,n=null,t=null,s=0,l=null,a=!1){if((!e||e===sv)&&(e=Ln),ta(e)){const r=Zn(e,n,!0);return t&&za(r,t),vs>0&&!a&&fn&&(r.shapeFlag&6?fn[fn.indexOf(e)]=r:fn.push(r)),r.patchFlag|=-2,r}if(Fv(e)&&(e=e.__vccOpts),n){n=Av(n);let{class:r,style:c}=n;r&&!re(r)&&(n.class=Aa(r)),Ae(c)&&(kr(c)&&!X(c)&&(c=De({},c)),n.style=Ia(c))}const i=re(e)?1:qd(e)?128:wv(e)?64:Ae(e)?4:te(e)?2:0;return Ur(e,n,t,s,l,i,a,!0)}function Av(e){return e?kr(e)||pl in e?De({},e):e:null}function Zn(e,n,t=!1){const{props:s,ref:l,patchFlag:a,children:i}=e,r=n?Pv(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&Wr(r),ref:n&&n.ref?t&&l?X(l)?l.concat(Ws(n)):[l,Ws(n)]:Ws(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Xe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zn(e.ssContent),ssFallback:e.ssFallback&&Zn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gr(e=" ",n=0){return $e(It,null,e,n)}function xg(e,n){const t=$e(ts,null,e);return t.staticCount=n,t}function vn(e){return e==null||typeof e=="boolean"?$e(Ln):X(e)?$e(Xe,null,e.slice()):typeof e=="object"?Gn(e):$e(It,null,String(e))}function Gn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zn(e)}function za(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(X(n))t=16;else if(typeof n=="object")if(s&65){const l=n.default;l&&(l._c&&(l._d=!1),za(e,l()),l._c&&(l._d=!0));return}else{t=32;const l=n._;!l&&!(pl in n)?n._ctx=an:l===3&&an&&(an.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else te(n)?(n={default:n,_ctx:an},t=32):(n=String(n),s&64?(t=16,n=[Gr(n)]):t=8);e.children=n,e.shapeFlag|=t}function Pv(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const l in s)if(l==="class")n.class!==s.class&&(n.class=Aa([n.class,s.class]));else if(l==="style")n.style=Ia([n.style,s.style]);else if(ks(l)){const a=n[l],i=s[l];i&&a!==i&&!(X(a)&&a.includes(i))&&(n[l]=a?[].concat(a,i):i)}else l!==""&&(n[l]=s[l])}return n}function sn(e,n,t,s=null){rn(e,n,7,[t,s])}const Dv=Fr();let Sv=0;function Cv(e,n,t){const s=e.type,l=(n?n.appContext:e.appContext)||Dv,a={uid:Sv++,vnode:e,type:s,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nr(s,l),emitsOptions:Lr(s,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=Fd.bind(null,a),e.ce&&e.ce(a),a}let Re=null;const Bt=()=>Re||an;let qa,vt,Hi="__VUE_INSTANCE_SETTERS__";(vt=Gl()[Hi])||(vt=Gl()[Hi]=[]),vt.push(e=>Re=e),qa=e=>{vt.length>1?vt.forEach(n=>n(e)):vt[0](e)};const At=e=>{qa(e),e.scope.on()},rt=()=>{Re&&Re.scope.off(),qa(null)};function Kr(e){return e.vnode.shapeFlag&4}let Pt=!1;function Ov(e,n=!1){Pt=n;const{props:t,children:s}=e.vnode,l=Kr(e);vv(e,t,l,n),fv(e,s);const a=l?Rv(e,n):void 0;return Pt=!1,a}function Rv(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=yr(new Proxy(e.ctx,av));const{setup:s}=t;if(s){const l=e.setupContext=s.length>1?Mv(e):null;At(e),Mt();const a=Qn(s,e,0,[e.props,l]);if(Vt(),rt(),ar(a)){if(a.then(rt,rt),n)return a.then(i=>{zi(e,i,n)}).catch(i=>{bs(i,e,0)});e.asyncDep=a}else zi(e,a,n)}else Jr(e,n)}function zi(e,n,t){te(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ae(n)&&(e.setupState=_r(n)),Jr(e,t)}let qi;function Jr(e,n,t){const s=e.type;if(!e.render){if(!n&&qi&&!s.render){const l=s.template||Ba(e).template;if(l){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:r,compilerOptions:c}=s,u=De(De({isCustomElement:a,delimiters:r},i),c);s.render=qi(l,u)}}e.render=s.render||kn}At(e),Mt(),iv(e),Vt(),rt()}function $v(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ke(e,"get","$attrs"),n[t]}}))}function Mv(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return $v(e)},slots:e.slots,emit:e.emit,expose:n}}function Wa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(_r(yr(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ns)return ns[t](e)},has(n,t){return t in n||t in ns}}))}function Vv(e,n=!0){return te(e)?e.displayName||e.name:e.name||n&&e.__name}function Fv(e){return te(e)&&"__vccOpts"in e}const _=(e,n)=>Cd(e,n,Pt);function o(e,n,t){const s=arguments.length;return s===2?Ae(n)&&!X(n)?ta(n)?$e(e,null,[n]):$e(e,n):$e(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ta(t)&&(t=[t]),$e(e,n,t))}const jv=Symbol.for("v-scx"),Nv=()=>ge(jv),Bv="3.3.4",Hv="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Wi=it&&it.createElement("template"),zv={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const l=n?it.createElementNS(Hv,e):it.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,l,a){const i=t?t.previousSibling:n.lastChild;if(l&&(l===a||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),t),!(l===a||!(l=l.nextSibling)););else{Wi.innerHTML=s?`<svg>${e}</svg>`:e;const r=Wi.content;if(s){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}n.insertBefore(r,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function qv(e,n,t){const s=e._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Wv(e,n,t){const s=e.style,l=re(t);if(t&&!l){if(n&&!re(n))for(const a in n)t[a]==null&&sa(s,a,"");for(const a in t)sa(s,a,t[a])}else{const a=s.display;l?n!==t&&(s.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(s.display=a)}}const Ui=/\s*!important$/;function sa(e,n,t){if(X(t))t.forEach(s=>sa(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=Uv(e,n);Ui.test(t)?e.setProperty($t(s),t.replace(Ui,""),"important"):e[s]=t}}const Gi=["Webkit","Moz","ms"],Sl={};function Uv(e,n){const t=Sl[n];if(t)return t;let s=Ge(n);if(s!=="filter"&&s in e)return Sl[n]=s;s=ys(s);for(let l=0;l<Gi.length;l++){const a=Gi[l]+s;if(a in e)return Sl[n]=a}return n}const Ki="http://www.w3.org/1999/xlink";function Gv(e,n,t,s,l){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ki,n.slice(6,n.length)):e.setAttributeNS(Ki,n,t);else{const a=Up(n);t==null||a&&!ir(t)?e.removeAttribute(n):e.setAttribute(n,a?"":t)}}function Kv(e,n,t,s,l,a,i){if(n==="innerHTML"||n==="textContent"){s&&i(s,l,a),e[n]=t??"";return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){e._value=t;const u=r==="OPTION"?e.getAttribute("value"):e.value,p=t??"";u!==p&&(e.value=p),t==null&&e.removeAttribute(n);return}let c=!1;if(t===""||t==null){const u=typeof e[n];u==="boolean"?t=ir(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{e[n]=t}catch{}c&&e.removeAttribute(n)}function Jv(e,n,t,s){e.addEventListener(n,t,s)}function Yv(e,n,t,s){e.removeEventListener(n,t,s)}function Qv(e,n,t,s,l=null){const a=e._vei||(e._vei={}),i=a[n];if(s&&i)i.value=s;else{const[r,c]=Xv(n);if(s){const u=a[n]=n1(s,l);Jv(e,r,u,c)}else i&&(Yv(e,r,i,c),a[n]=void 0)}}const Ji=/(?:Once|Passive|Capture)$/;function Xv(e){let n;if(Ji.test(e)){n={};let s;for(;s=e.match(Ji);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),n]}let Cl=0;const Zv=Promise.resolve(),e1=()=>Cl||(Zv.then(()=>Cl=0),Cl=Date.now());function n1(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;rn(t1(s,t.value),n,5,[s])};return t.value=e,t.attached=e1(),t}function t1(e,n){if(X(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>l=>!l._stopped&&s&&s(l))}else return n}const Yi=/^on[a-z]/,s1=(e,n,t,s,l=!1,a,i,r,c)=>{n==="class"?qv(e,s,l):n==="style"?Wv(e,t,s):ks(n)?Ea(n)||Qv(e,n,t,s,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):l1(e,n,s,l))?Kv(e,n,s,a,i,r,c):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Gv(e,n,s,l))};function l1(e,n,t,s){return s?!!(n==="innerHTML"||n==="textContent"||n in e&&Yi.test(n)&&te(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Yi.test(n)&&re(t)?!1:n in e}const zn="transition",Kt="animation",Mn=(e,{slots:n})=>o(Gd,Qr(e),n);Mn.displayName="Transition";const Yr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},a1=Mn.props=De({},Cr,Yr),st=(e,n=[])=>{X(e)?e.forEach(t=>t(...n)):e&&e(...n)},Qi=e=>e?X(e)?e.some(n=>n.length>1):e.length>1:!1;function Qr(e){const n={};for(const q in e)q in Yr||(n[q]=e[q]);if(e.css===!1)return n;const{name:t="v",type:s,duration:l,enterFromClass:a=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:r=`${t}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:p=r,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:v=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,k=i1(l),E=k&&k[0],x=k&&k[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:A,onLeave:S,onLeaveCancelled:B,onBeforeAppear:C=g,onAppear:J=b,onAppearCancelled:P=A}=n,W=(q,Z,U)=>{Un(q,Z?p:r),Un(q,Z?u:i),U&&U()},z=(q,Z)=>{q._isLeaving=!1,Un(q,d),Un(q,h),Un(q,v),Z&&Z()},se=q=>(Z,U)=>{const Te=q?J:b,ie=()=>W(Z,q,U);st(Te,[Z,ie]),Xi(()=>{Un(Z,q?c:a),Sn(Z,q?p:r),Qi(Te)||Zi(Z,s,E,ie)})};return De(n,{onBeforeEnter(q){st(g,[q]),Sn(q,a),Sn(q,i)},onBeforeAppear(q){st(C,[q]),Sn(q,c),Sn(q,u)},onEnter:se(!1),onAppear:se(!0),onLeave(q,Z){q._isLeaving=!0;const U=()=>z(q,Z);Sn(q,d),Zr(),Sn(q,v),Xi(()=>{q._isLeaving&&(Un(q,d),Sn(q,h),Qi(S)||Zi(q,s,x,U))}),st(S,[q,U])},onEnterCancelled(q){W(q,!1),st(A,[q])},onAppearCancelled(q){W(q,!0),st(P,[q])},onLeaveCancelled(q){z(q),st(B,[q])}})}function i1(e){if(e==null)return null;if(Ae(e))return[Ol(e.enter),Ol(e.leave)];{const n=Ol(e);return[n,n]}}function Ol(e){return Np(e)}function Sn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(n)}function Un(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const{_vtc:t}=e;t&&(t.delete(n),t.size||(e._vtc=void 0))}function Xi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let o1=0;function Zi(e,n,t,s){const l=e._endId=++o1,a=()=>{l===e._endId&&s()};if(t)return setTimeout(a,t);const{type:i,timeout:r,propCount:c}=Xr(e,n);if(!i)return s();const u=i+"end";let p=0;const d=()=>{e.removeEventListener(u,v),a()},v=h=>{h.target===e&&++p>=c&&d()};setTimeout(()=>{p<c&&d()},r+1),e.addEventListener(u,v)}function Xr(e,n){const t=window.getComputedStyle(e),s=k=>(t[k]||"").split(", "),l=s(`${zn}Delay`),a=s(`${zn}Duration`),i=eo(l,a),r=s(`${Kt}Delay`),c=s(`${Kt}Duration`),u=eo(r,c);let p=null,d=0,v=0;n===zn?i>0&&(p=zn,d=i,v=a.length):n===Kt?u>0&&(p=Kt,d=u,v=c.length):(d=Math.max(i,u),p=d>0?i>u?zn:Kt:null,v=p?p===zn?a.length:c.length:0);const h=p===zn&&/\b(transform|all)(,|$)/.test(s(`${zn}Property`).toString());return{type:p,timeout:d,propCount:v,hasTransform:h}}function eo(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>no(t)+no(e[s])))}function no(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Zr(){return document.body.offsetHeight}const ec=new WeakMap,nc=new WeakMap,tc={name:"TransitionGroup",props:De({},a1,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=Bt(),s=Sr();let l,a;return $r(()=>{if(!l.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!v1(l[0].el,t.vnode.el,i))return;l.forEach(u1),l.forEach(p1);const r=l.filter(d1);Zr(),r.forEach(c=>{const u=c.el,p=u.style;Sn(u,i),p.transform=p.webkitTransform=p.transitionDuration="";const d=u._moveCb=v=>{v&&v.target!==u||(!v||/transform$/.test(v.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,Un(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=ue(e),r=Qr(i);let c=i.tag||Xe;l=a,a=n.default?Na(n.default()):[];for(let u=0;u<a.length;u++){const p=a[u];p.key!=null&&ds(p,ps(p,r,s,t))}if(l)for(let u=0;u<l.length;u++){const p=l[u];ds(p,ps(p,r,s,t)),ec.set(p,p.el.getBoundingClientRect())}return $e(c,null,a)}}},r1=e=>delete e.mode;tc.props;const c1=tc;function u1(e){const n=e.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function p1(e){nc.set(e,e.el.getBoundingClientRect())}function d1(e){const n=ec.get(e),t=nc.get(e),s=n.left-t.left,l=n.top-t.top;if(s||l){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${l}px)`,a.transitionDuration="0s",e}}function v1(e,n,t){const s=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(r=>r&&s.classList.remove(r))}),t.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(s);const{hasTransform:a}=Xr(s);return l.removeChild(s),a}const h1=De({patchProp:s1},zv);let Rl,to=!1;function m1(){return Rl=to?Rl:yv(h1),to=!0,Rl}const f1=(...e)=>{const n=m1().createApp(...e),{mount:t}=n;return n.mount=s=>{const l=g1(s);if(l)return t(l,!0,l instanceof SVGElement)},n};function g1(e){return re(e)?document.querySelector(e):e}const k1={"v-8daa1a0e":()=>m(()=>import("./index.html-214dd877.js"),[]).then(({data:e})=>e),"v-145ac574":()=>m(()=>import("./index.html-fff78526.js"),[]).then(({data:e})=>e),"v-a39c4cfa":()=>m(()=>import("./body.html-9b392f6a.js"),[]).then(({data:e})=>e),"v-883c5c18":()=>m(()=>import("./desc.html-44e64615.js"),[]).then(({data:e})=>e),"v-d8862ffc":()=>m(()=>import("./random.html-f93ba5c9.js"),[]).then(({data:e})=>e),"v-0439749c":()=>m(()=>import("./video.html-b37fa8d3.js"),[]).then(({data:e})=>e),"v-2d0a870d":()=>m(()=>import("./index.html-6e041823.js"),[]).then(({data:e})=>e),"v-67d16688":()=>m(()=>import("./index.html-ca98be40.js"),[]).then(({data:e})=>e),"v-4a5f1fe4":()=>m(()=>import("./gorm.html-f1ac3f67.js"),[]).then(({data:e})=>e),"v-0167aec8":()=>m(()=>import("./io-game.html-6d19b2cd.js"),[]).then(({data:e})=>e),"v-33afe9f2":()=>m(()=>import("./java-orm.html-57a57d79.js"),[]).then(({data:e})=>e),"v-4bd5befb":()=>m(()=>import("./request-tool.html-4e80e7b4.js"),[]).then(({data:e})=>e),"v-9376cbd8":()=>m(()=>import("./rocket-cat.html-c1876efa.js"),[]).then(({data:e})=>e),"v-eadc129a":()=>m(()=>import("./rs-orm.html-fca725e6.js"),[]).then(({data:e})=>e),"v-eeac3bce":()=>m(()=>import("./vue-admin.html-9620f44f.js"),[]).then(({data:e})=>e),"v-d7188082":()=>m(()=>import("./index.html-21759600.js"),[]).then(({data:e})=>e),"v-156a1114":()=>m(()=>import("./index.html-ea57d4a9.js"),[]).then(({data:e})=>e),"v-34c0cc3a":()=>m(()=>import("./common.html-61495f34.js"),[]).then(({data:e})=>e),"v-6b01bef8":()=>m(()=>import("./dev.html-1e12c39e.js"),[]).then(({data:e})=>e),"v-4331a9ae":()=>m(()=>import("./idea.html-804d7638.js"),[]).then(({data:e})=>e),"v-e4904468":()=>m(()=>import("./index.html-c9c1179d.js"),[]).then(({data:e})=>e),"v-c0e604d0":()=>m(()=>import("./day1.html-fa6991b7.js"),[]).then(({data:e})=>e),"v-5245b9ca":()=>m(()=>import("./day10.html-e4864400.js"),[]).then(({data:e})=>e),"v-53fa9269":()=>m(()=>import("./day11.html-059b7db6.js"),[]).then(({data:e})=>e),"v-55af6b08":()=>m(()=>import("./day12.html-1d40b1b9.js"),[]).then(({data:e})=>e),"v-576443a7":()=>m(()=>import("./day13.html-e667280b.js"),[]).then(({data:e})=>e),"v-59191c46":()=>m(()=>import("./day14.html-63c63acd.js"),[]).then(({data:e})=>e),"v-5acdf4e5":()=>m(()=>import("./day15.html-fb83cc2e.js"),[]).then(({data:e})=>e),"v-5c82cd84":()=>m(()=>import("./day16.html-ddc3a9ee.js"),[]).then(({data:e})=>e),"v-5e37a623":()=>m(()=>import("./day17.html-932987a2.js"),[]).then(({data:e})=>e),"v-5fec7ec2":()=>m(()=>import("./day18.html-02f9e61e.js"),[]).then(({data:e})=>e),"v-61a15761":()=>m(()=>import("./day19.html-e78d4a03.js"),[]).then(({data:e})=>e),"v-bd7c5392":()=>m(()=>import("./day2.html-d86c03fa.js"),[]).then(({data:e})=>e),"v-ba12a254":()=>m(()=>import("./day3.html-e084c633.js"),[]).then(({data:e})=>e),"v-b6a8f116":()=>m(()=>import("./day4.html-a7bb93f7.js"),[]).then(({data:e})=>e),"v-b33f3fd8":()=>m(()=>import("./day5.html-7bb9e07f.js"),[]).then(({data:e})=>e),"v-afd58e9a":()=>m(()=>import("./day6.html-b4c40ebe.js"),[]).then(({data:e})=>e),"v-ac6bdd5c":()=>m(()=>import("./day7.html-c468c2d2.js"),[]).then(({data:e})=>e),"v-a9022c1e":()=>m(()=>import("./day8.html-0b6b844b.js"),[]).then(({data:e})=>e),"v-a5987ae0":()=>m(()=>import("./day9.html-378402c5.js"),[]).then(({data:e})=>e),"v-0a92777c":()=>m(()=>import("./study.html-61fb0b4d.js"),[]).then(({data:e})=>e),"v-9b94b2c8":()=>m(()=>import("./index.html-d863c29c.js"),[]).then(({data:e})=>e),"v-72f1067a":()=>m(()=>import("./gorm.html-1921586e.js"),[]).then(({data:e})=>e),"v-2fbe537d":()=>m(()=>import("./jorm.html-2dcdea58.js"),[]).then(({data:e})=>e),"v-987b21a6":()=>m(()=>import("./vue-admin.html-f87dbb3c.js"),[]).then(({data:e})=>e),"v-74d2721e":()=>m(()=>import("./index.html-ba14b534.js"),[]).then(({data:e})=>e),"v-05aa60bc":()=>m(()=>import("./cocos.html-0e503344.js"),[]).then(({data:e})=>e),"v-655dabc9":()=>m(()=>import("./game.html-c74cdc52.js"),[]).then(({data:e})=>e),"v-40662ab6":()=>m(()=>import("./godot.html-135bcae9.js"),[]).then(({data:e})=>e),"v-1532dc1e":()=>m(()=>import("./unity-camera.html-84179863.js"),[]).then(({data:e})=>e),"v-20932f22":()=>m(()=>import("./unity.html-798dce2a.js"),[]).then(({data:e})=>e),"v-ec4f77b0":()=>m(()=>import("./index.html-7bbb35b3.js"),[]).then(({data:e})=>e),"v-1296d022":()=>m(()=>import("./design-mode.html-c971b3f5.js"),[]).then(({data:e})=>e),"v-50eda543":()=>m(()=>import("./difficult.html-e08aeddf.js"),[]).then(({data:e})=>e),"v-73096696":()=>m(()=>import("./gin.html-ffc4457d.js"),[]).then(({data:e})=>e),"v-470743c9":()=>m(()=>import("./go.html-e6e7063d.js"),[]).then(({data:e})=>e),"v-97ce3324":()=>m(()=>import("./gorm.html-3ee6fdb4.js"),[]).then(({data:e})=>e),"v-39c90182":()=>m(()=>import("./qiniu.html-76a24f50.js"),[]).then(({data:e})=>e),"v-0afe37c4":()=>m(()=>import("./socket.html-f471ed94.js"),[]).then(({data:e})=>e),"v-a86ab80e":()=>m(()=>import("./ssh.html-b8c8a938.js"),[]).then(({data:e})=>e),"v-08700fb4":()=>m(()=>import("./try.html-6046b197.js"),[]).then(({data:e})=>e),"v-0d202a22":()=>m(()=>import("./util.html-386f3e1c.js"),[]).then(({data:e})=>e),"v-e2d863ca":()=>m(()=>import("./wails.html-8942c40a.js"),[]).then(({data:e})=>e),"v-74fcd9ee":()=>m(()=>import("./index.html-df62a003.js"),[]).then(({data:e})=>e),"v-f4a23b22":()=>m(()=>import("./data-struct.html-3bd4ecb9.js"),[]).then(({data:e})=>e),"v-ce60a5b4":()=>m(()=>import("./hutool.html-f439ee46.js"),[]).then(({data:e})=>e),"v-eb998da4":()=>m(()=>import("./io-game.html-22d3ced4.js"),[]).then(({data:e})=>e),"v-e295e46e":()=>m(()=>import("./java.html-ecfc764d.js"),[]).then(({data:e})=>e),"v-737d6172":()=>m(()=>import("./kd.html-c67c2aee.js"),[]).then(({data:e})=>e),"v-6261669c":()=>m(()=>import("./maven.html-44a1bc7c.js"),[]).then(({data:e})=>e),"v-ff9673f2":()=>m(()=>import("./mqtt.html-4d5d7b72.js"),[]).then(({data:e})=>e),"v-e4f84858":()=>m(()=>import("./mybatis.html-2d97bd10.js"),[]).then(({data:e})=>e),"v-53d99f9f":()=>m(()=>import("./protostuff.html-12459fa4.js"),[]).then(({data:e})=>e),"v-0ea8a1d4":()=>m(()=>import("./redisson.html-d9e697d7.js"),[]).then(({data:e})=>e),"v-37e7ddac":()=>m(()=>import("./rocket-mq.html-d922a3ee.js"),[]).then(({data:e})=>e),"v-6485064d":()=>m(()=>import("./spring-boot-demo.html-90ab706c.js"),[]).then(({data:e})=>e),"v-9c987956":()=>m(()=>import("./spring-boot.html-e75c17e9.js"),[]).then(({data:e})=>e),"v-71361d27":()=>m(()=>import("./spring-cloud-alibaba.html-72ce0068.js"),[]).then(({data:e})=>e),"v-4a160b56":()=>m(()=>import("./spring-cloud.html-1cdc3339.js"),[]).then(({data:e})=>e),"v-13b6c6a9":()=>m(()=>import("./transaction.html-7eff0395.js"),[]).then(({data:e})=>e),"v-2e75823a":()=>m(()=>import("./index.html-3b104ed1.js"),[]).then(({data:e})=>e),"v-157e5c3f":()=>m(()=>import("./docker.html-92a8b503.js"),[]).then(({data:e})=>e),"v-eff126fe":()=>m(()=>import("./git.html-58e31213.js"),[]).then(({data:e})=>e),"v-855c2bc2":()=>m(()=>import("./linux.html-64d05dea.js"),[]).then(({data:e})=>e),"v-15351731":()=>m(()=>import("./mysql.html-178572fe.js"),[]).then(({data:e})=>e),"v-03aa6f39":()=>m(()=>import("./nginx.html-488180d8.js"),[]).then(({data:e})=>e),"v-6ab5d8fc":()=>m(()=>import("./server.html-23297bb6.js"),[]).then(({data:e})=>e),"v-3f92c263":()=>m(()=>import("./shell.html-02c35b98.js"),[]).then(({data:e})=>e),"v-9d9383da":()=>m(()=>import("./index.html-95ac9c1c.js"),[]).then(({data:e})=>e),"v-03a09d9f":()=>m(()=>import("./antlr.html-63d70cc0.js"),[]).then(({data:e})=>e),"v-6b7873d0":()=>m(()=>import("./flutter.html-5baa9d4c.js"),[]).then(({data:e})=>e),"v-566cfcec":()=>m(()=>import("./python.html-b04b8e43.js"),[]).then(({data:e})=>e),"v-42dddec2":()=>m(()=>import("./rust.html-1da84fb5.js"),[]).then(({data:e})=>e),"v-9d9130cc":()=>m(()=>import("./index.html-7b586544.js"),[]).then(({data:e})=>e),"v-5ff88586":()=>m(()=>import("./axios.html-3d9bd741.js"),[]).then(({data:e})=>e),"v-0afa9360":()=>m(()=>import("./css.html-85ba7dc4.js"),[]).then(({data:e})=>e),"v-0a822add":()=>m(()=>import("./electron.html-5e86a23e.js"),[]).then(({data:e})=>e),"v-566689bd":()=>m(()=>import("./node.html-cbc67617.js"),[]).then(({data:e})=>e),"v-50b2aeca":()=>m(()=>import("./vite.html-69325b8d.js"),[]).then(({data:e})=>e),"v-0221a8ad":()=>m(()=>import("./vue.html-2fca38ca.js"),[]).then(({data:e})=>e),"v-3dc19728":()=>m(()=>import("./chess.html-dd07edc3.js"),[]).then(({data:e})=>e),"v-0d6a9cd2":()=>m(()=>import("./design-mode.html-e03b92b5.js"),[]).then(({data:e})=>e),"v-1a97af14":()=>m(()=>import("./proxy.html-14aa158a.js"),[]).then(({data:e})=>e),"v-3706649a":()=>m(()=>import("./404.html-dd994a37.js"),[]).then(({data:e})=>e),"v-abc9f35a":()=>m(()=>import("./index.html-71620511.js"),[]).then(({data:e})=>e),"v-60fb21ea":()=>m(()=>import("./index.html-2d884b69.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>m(()=>import("./index.html-99e9f130.js"),[]).then(({data:e})=>e),"v-744d024e":()=>m(()=>import("./index.html-72b5eb9c.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>m(()=>import("./index.html-bb22e93e.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>m(()=>import("./index.html-70525dae.js"),[]).then(({data:e})=>e),"v-01560935":()=>m(()=>import("./index.html-6e6097f2.js"),[]).then(({data:e})=>e),"v-5decfa84":()=>m(()=>import("./index.html-6fe8eff7.js"),[]).then(({data:e})=>e),"v-075c6c62":()=>m(()=>import("./index.html-6463ac7c.js"),[]).then(({data:e})=>e),"v-506407f4":()=>m(()=>import("./index.html-6beff70c.js"),[]).then(({data:e})=>e),"v-37a8c5a0":()=>m(()=>import("./index.html-6e7bacfa.js"),[]).then(({data:e})=>e),"v-0379cba1":()=>m(()=>import("./index.html-9a539ba9.js"),[]).then(({data:e})=>e)},y1=JSON.parse(`{"base":"/","lang":"en-US","title":"LiCheng Blog","description":"vuepress-theme-hope 的演示","head":[["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-Y1CRKZRBH8","async":true}],["script",{},"  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n\\n  gtag('config', 'G-Y1CRKZRBH8');"],["link",{"rel":"icon","href":"favicon.ico"}],["link",{"rel":"icon","href":"logo.png","sizes":"512x512"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"logo.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"logo.png"}],["meta",{"name":"msapplication-TileColor","content":"#46bd87"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"zh-CN"},"/en/":{"lang":"en-US"}}}`);var b1=([e,n,t])=>e==="meta"&&n.name?`${e}.${n.name}`:["title","base"].includes(e)?e:e==="template"&&n.id?`${e}.${n.id}`:JSON.stringify([e,n,t]),_1=e=>{const n=new Set,t=[];return e.forEach(s=>{const l=b1(s);n.has(l)||(n.add(l),t.push(s))}),t},w1=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,E1=e=>e.startsWith("ftp://"),ut=e=>/^(https?:)?\/\//.test(e),x1=/.md((\?|#).*)?$/,el=(e,n="/")=>!!(ut(e)||E1(e)||e.startsWith("/")&&!e.startsWith(n)&&!x1.test(e)),sc=e=>/^mailto:/.test(e),T1=e=>/^tel:/.test(e),dl=e=>Object.prototype.toString.call(e)==="[object Object]",Ua=e=>e[e.length-1]==="/"?e.slice(0,-1):e,lc=e=>e[0]==="/"?e.slice(1):e,L1=(e,n)=>{const t=Object.keys(e).sort((s,l)=>{const a=l.split("/").length-s.split("/").length;return a!==0?a:l.length-s.length});for(const s of t)if(n.startsWith(s))return s;return"/"};const ac={"v-8daa1a0e":I(()=>m(()=>import("./index.html-d19b8946.js"),[])),"v-145ac574":I(()=>m(()=>import("./index.html-623ea4a9.js"),[])),"v-a39c4cfa":I(()=>m(()=>import("./body.html-329c0254.js"),[])),"v-883c5c18":I(()=>m(()=>import("./desc.html-4ed1015f.js"),[])),"v-d8862ffc":I(()=>m(()=>import("./random.html-dcc6dbac.js"),[])),"v-0439749c":I(()=>m(()=>import("./video.html-0630ec39.js"),[])),"v-2d0a870d":I(()=>m(()=>import("./index.html-d65c676d.js"),[])),"v-67d16688":I(()=>m(()=>import("./index.html-445bba97.js"),[])),"v-4a5f1fe4":I(()=>m(()=>import("./gorm.html-6902c526.js"),["assets/gorm.html-6902c526.js","assets/1-e13e731e.js"])),"v-0167aec8":I(()=>m(()=>import("./io-game.html-e9852880.js"),[])),"v-33afe9f2":I(()=>m(()=>import("./java-orm.html-a3e2d8ec.js"),["assets/java-orm.html-a3e2d8ec.js","assets/img-c1a6ea05.js"])),"v-4bd5befb":I(()=>m(()=>import("./request-tool.html-6ef3272b.js"),[])),"v-9376cbd8":I(()=>m(()=>import("./rocket-cat.html-d7114ac8.js"),[])),"v-eadc129a":I(()=>m(()=>import("./rs-orm.html-15850159.js"),[])),"v-eeac3bce":I(()=>m(()=>import("./vue-admin.html-075057d6.js"),[])),"v-d7188082":I(()=>m(()=>import("./index.html-005206e5.js"),[])),"v-156a1114":I(()=>m(()=>import("./index.html-ee9aabb9.js"),[])),"v-34c0cc3a":I(()=>m(()=>import("./common.html-604024e6.js"),[])),"v-6b01bef8":I(()=>m(()=>import("./dev.html-a1cd0ce2.js"),[])),"v-4331a9ae":I(()=>m(()=>import("./idea.html-16d1cb3a.js"),[])),"v-e4904468":I(()=>m(()=>import("./index.html-d3caa381.js"),[])),"v-c0e604d0":I(()=>m(()=>import("./day1.html-0804a342.js"),[])),"v-5245b9ca":I(()=>m(()=>import("./day10.html-12c62880.js"),[])),"v-53fa9269":I(()=>m(()=>import("./day11.html-b875ecd1.js"),[])),"v-55af6b08":I(()=>m(()=>import("./day12.html-efc666fd.js"),[])),"v-576443a7":I(()=>m(()=>import("./day13.html-f6f82306.js"),[])),"v-59191c46":I(()=>m(()=>import("./day14.html-06bc3bc8.js"),[])),"v-5acdf4e5":I(()=>m(()=>import("./day15.html-67d3c1e4.js"),[])),"v-5c82cd84":I(()=>m(()=>import("./day16.html-317293b3.js"),[])),"v-5e37a623":I(()=>m(()=>import("./day17.html-920a0e31.js"),[])),"v-5fec7ec2":I(()=>m(()=>import("./day18.html-e674632c.js"),[])),"v-61a15761":I(()=>m(()=>import("./day19.html-37b7f8eb.js"),[])),"v-bd7c5392":I(()=>m(()=>import("./day2.html-272e6460.js"),[])),"v-ba12a254":I(()=>m(()=>import("./day3.html-522a74b0.js"),[])),"v-b6a8f116":I(()=>m(()=>import("./day4.html-a06bee89.js"),[])),"v-b33f3fd8":I(()=>m(()=>import("./day5.html-1863a1f0.js"),[])),"v-afd58e9a":I(()=>m(()=>import("./day6.html-88a593fd.js"),[])),"v-ac6bdd5c":I(()=>m(()=>import("./day7.html-0b146d94.js"),[])),"v-a9022c1e":I(()=>m(()=>import("./day8.html-d85d2cc4.js"),[])),"v-a5987ae0":I(()=>m(()=>import("./day9.html-3fc54872.js"),[])),"v-0a92777c":I(()=>m(()=>import("./study.html-c7e0b100.js"),[])),"v-9b94b2c8":I(()=>m(()=>import("./index.html-a342ed73.js"),[])),"v-72f1067a":I(()=>m(()=>import("./gorm.html-6158cb49.js"),["assets/gorm.html-6158cb49.js","assets/1-e13e731e.js"])),"v-2fbe537d":I(()=>m(()=>import("./jorm.html-f8f44e3d.js"),["assets/jorm.html-f8f44e3d.js","assets/img-c1a6ea05.js"])),"v-987b21a6":I(()=>m(()=>import("./vue-admin.html-e3c555f3.js"),[])),"v-74d2721e":I(()=>m(()=>import("./index.html-1e83bedc.js"),[])),"v-05aa60bc":I(()=>m(()=>import("./cocos.html-c9cf8491.js"),[])),"v-655dabc9":I(()=>m(()=>import("./game.html-cc35a260.js"),[])),"v-40662ab6":I(()=>m(()=>import("./godot.html-10c7ebaa.js"),[])),"v-1532dc1e":I(()=>m(()=>import("./unity-camera.html-6109b972.js"),[])),"v-20932f22":I(()=>m(()=>import("./unity.html-3ae67a14.js"),[])),"v-ec4f77b0":I(()=>m(()=>import("./index.html-999abd83.js"),[])),"v-1296d022":I(()=>m(()=>import("./design-mode.html-fad9f794.js"),[])),"v-50eda543":I(()=>m(()=>import("./difficult.html-d08da603.js"),[])),"v-73096696":I(()=>m(()=>import("./gin.html-18d23d26.js"),[])),"v-470743c9":I(()=>m(()=>import("./go.html-88733ecd.js"),[])),"v-97ce3324":I(()=>m(()=>import("./gorm.html-f196c1d8.js"),[])),"v-39c90182":I(()=>m(()=>import("./qiniu.html-d8b477dd.js"),[])),"v-0afe37c4":I(()=>m(()=>import("./socket.html-2842a087.js"),[])),"v-a86ab80e":I(()=>m(()=>import("./ssh.html-579258a3.js"),[])),"v-08700fb4":I(()=>m(()=>import("./try.html-d4ab2996.js"),[])),"v-0d202a22":I(()=>m(()=>import("./util.html-6c6ca6a1.js"),[])),"v-e2d863ca":I(()=>m(()=>import("./wails.html-dc58e5be.js"),[])),"v-74fcd9ee":I(()=>m(()=>import("./index.html-c99670bf.js"),[])),"v-f4a23b22":I(()=>m(()=>import("./data-struct.html-dc1b255f.js"),[])),"v-ce60a5b4":I(()=>m(()=>import("./hutool.html-3cbf92d9.js"),[])),"v-eb998da4":I(()=>m(()=>import("./io-game.html-3eb79e02.js"),[])),"v-e295e46e":I(()=>m(()=>import("./java.html-af261328.js"),[])),"v-737d6172":I(()=>m(()=>import("./kd.html-62bee589.js"),[])),"v-6261669c":I(()=>m(()=>import("./maven.html-65e8ecfb.js"),[])),"v-ff9673f2":I(()=>m(()=>import("./mqtt.html-740284fc.js"),[])),"v-e4f84858":I(()=>m(()=>import("./mybatis.html-003e9c33.js"),[])),"v-53d99f9f":I(()=>m(()=>import("./protostuff.html-4fb69892.js"),[])),"v-0ea8a1d4":I(()=>m(()=>import("./redisson.html-564159ec.js"),[])),"v-37e7ddac":I(()=>m(()=>import("./rocket-mq.html-d73d1b85.js"),[])),"v-6485064d":I(()=>m(()=>import("./spring-boot-demo.html-95bfca45.js"),[])),"v-9c987956":I(()=>m(()=>import("./spring-boot.html-d6562390.js"),[])),"v-71361d27":I(()=>m(()=>import("./spring-cloud-alibaba.html-7a95763f.js"),[])),"v-4a160b56":I(()=>m(()=>import("./spring-cloud.html-e24a47b0.js"),[])),"v-13b6c6a9":I(()=>m(()=>import("./transaction.html-416915e5.js"),[])),"v-2e75823a":I(()=>m(()=>import("./index.html-76b67024.js"),[])),"v-157e5c3f":I(()=>m(()=>import("./docker.html-d22f32ed.js"),[])),"v-eff126fe":I(()=>m(()=>import("./git.html-6f2397f4.js"),[])),"v-855c2bc2":I(()=>m(()=>import("./linux.html-49e947e2.js"),[])),"v-15351731":I(()=>m(()=>import("./mysql.html-0c779612.js"),[])),"v-03aa6f39":I(()=>m(()=>import("./nginx.html-acf12d88.js"),[])),"v-6ab5d8fc":I(()=>m(()=>import("./server.html-22e9ab11.js"),[])),"v-3f92c263":I(()=>m(()=>import("./shell.html-6673d38f.js"),[])),"v-9d9383da":I(()=>m(()=>import("./index.html-bf72a06d.js"),[])),"v-03a09d9f":I(()=>m(()=>import("./antlr.html-55cdeb75.js"),[])),"v-6b7873d0":I(()=>m(()=>import("./flutter.html-a43d8f93.js"),[])),"v-566cfcec":I(()=>m(()=>import("./python.html-019a575a.js"),[])),"v-42dddec2":I(()=>m(()=>import("./rust.html-f6fc7b3b.js"),[])),"v-9d9130cc":I(()=>m(()=>import("./index.html-5a4a556d.js"),[])),"v-5ff88586":I(()=>m(()=>import("./axios.html-6d5817a1.js"),[])),"v-0afa9360":I(()=>m(()=>import("./css.html-ebfb7a94.js"),[])),"v-0a822add":I(()=>m(()=>import("./electron.html-69525369.js"),[])),"v-566689bd":I(()=>m(()=>import("./node.html-03574993.js"),[])),"v-50b2aeca":I(()=>m(()=>import("./vite.html-b2699f42.js"),[])),"v-0221a8ad":I(()=>m(()=>import("./vue.html-8ccc7660.js"),[])),"v-3dc19728":I(()=>m(()=>import("./chess.html-fd77ea6e.js"),[])),"v-0d6a9cd2":I(()=>m(()=>import("./design-mode.html-d949830e.js"),[])),"v-1a97af14":I(()=>m(()=>import("./proxy.html-687fbd9e.js"),[])),"v-3706649a":I(()=>m(()=>import("./404.html-ff60e006.js"),[])),"v-abc9f35a":I(()=>m(()=>import("./index.html-aa5dad00.js"),[])),"v-60fb21ea":I(()=>m(()=>import("./index.html-d6634406.js"),[])),"v-5bc93818":I(()=>m(()=>import("./index.html-7e34198e.js"),[])),"v-744d024e":I(()=>m(()=>import("./index.html-b6ed7893.js"),[])),"v-e52c881c":I(()=>m(()=>import("./index.html-d982756e.js"),[])),"v-154dc4c4":I(()=>m(()=>import("./index.html-ea3cb791.js"),[])),"v-01560935":I(()=>m(()=>import("./index.html-cfb0a676.js"),[])),"v-5decfa84":I(()=>m(()=>import("./index.html-ea50ef80.js"),[])),"v-075c6c62":I(()=>m(()=>import("./index.html-2e8858a0.js"),[])),"v-506407f4":I(()=>m(()=>import("./index.html-44c9b7b9.js"),[])),"v-37a8c5a0":I(()=>m(()=>import("./index.html-8bd6dc5f.js"),[])),"v-0379cba1":I(()=>m(()=>import("./index.html-f7c013d2.js"),[]))};var I1=Symbol(""),A1=H(k1),ic=et({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Kn=H(ic),ce=()=>Kn,oc=Symbol(""),be=()=>{const e=ge(oc);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},rc=Symbol(""),P1=()=>{const e=ge(rc);if(!e)throw new Error("usePageHead() is called without provider.");return e},D1=Symbol(""),cc=Symbol(""),vl=()=>{const e=ge(cc);if(!e)throw new Error("usePageLang() is called without provider.");return e},uc=Symbol(""),S1=()=>{const e=ge(uc);if(!e)throw new Error("usePageLayout() is called without provider.");return e},Ga=Symbol(""),bn=()=>{const e=ge(Ga);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},yt=H(y1),pc=()=>yt,dc=Symbol(""),Ht=()=>{const e=ge(dc);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},C1=Symbol(""),O1="Layout",R1="NotFound",Cn=Ft({resolveLayouts:e=>e.reduce((n,t)=>({...n,...t.layouts}),{}),resolvePageData:async e=>{const n=A1.value[e];return await(n==null?void 0:n())??ic},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,n,t)=>{const s=re(n.description)?n.description:t.description,l=[...X(n.head)?n.head:[],...t.head,["title",{},e],["meta",{name:"description",content:s}]];return _1(l)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(t=>!!t).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,n)=>{let t;if(e.path){const s=e.frontmatter.layout;re(s)?t=s:t=O1}else t=R1;return n[t]},resolveRouteLocale:(e,n)=>L1(e,n),resolveSiteLocaleData:(e,n)=>({...e,...e.locales[n]})}),hl=$({name:"ClientOnly",setup(e,n){const t=H(!1);return he(()=>{t.value=!0}),()=>{var s,l;return t.value?(l=(s=n.slots).default)==null?void 0:l.call(s):null}}}),Ka=$({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const n=ce(),t=_(()=>ac[e.pageKey||n.value.key]);return()=>t.value?o(t.value):o("div","404 Not Found")}}),Je=(e={})=>e,Ie=e=>ut(e)?e:`/${lc(e)}`;const $1={};/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ft=typeof window<"u";function M1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ye=Object.assign;function $l(e,n){const t={};for(const s in n){const l=n[s];t[s]=yn(l)?l.map(e):e(l)}return t}const ls=()=>{},yn=Array.isArray,V1=/\/$/,F1=e=>e.replace(V1,"");function Ml(e,n,t="/"){let s,l={},a="",i="";const r=n.indexOf("#");let c=n.indexOf("?");return r<c&&r>=0&&(c=-1),c>-1&&(s=n.slice(0,c),a=n.slice(c+1,r>-1?r:n.length),l=e(a)),r>-1&&(s=s||n.slice(0,r),i=n.slice(r,n.length)),s=H1(s??n,t),{fullPath:s+(a&&"?")+a+i,path:s,query:l,hash:i}}function j1(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function so(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function N1(e,n,t){const s=n.matched.length-1,l=t.matched.length-1;return s>-1&&s===l&&Dt(n.matched[s],t.matched[l])&&vc(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Dt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function vc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!B1(e[t],n[t]))return!1;return!0}function B1(e,n){return yn(e)?lo(e,n):yn(n)?lo(n,e):e===n}function lo(e,n){return yn(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function H1(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),l=s[s.length-1];(l===".."||l===".")&&s.push("");let a=t.length-1,i,r;for(i=0;i<s.length;i++)if(r=s[i],r!==".")if(r==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var hs;(function(e){e.pop="pop",e.push="push"})(hs||(hs={}));var as;(function(e){e.back="back",e.forward="forward",e.unknown=""})(as||(as={}));function z1(e){if(!e)if(ft){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),F1(e)}const q1=/^[^#]+#/;function W1(e,n){return e.replace(q1,"#")+n}function U1(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const ml=()=>({left:window.pageXOffset,top:window.pageYOffset});function G1(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),l=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!l)return;n=U1(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function ao(e,n){return(history.state?history.state.position-n:-1)+e}const la=new Map;function K1(e,n){la.set(e,n)}function J1(e){const n=la.get(e);return la.delete(e),n}let Y1=()=>location.protocol+"//"+location.host;function hc(e,n){const{pathname:t,search:s,hash:l}=n,a=e.indexOf("#");if(a>-1){let r=l.includes(e.slice(a))?e.slice(a).length:1,c=l.slice(r);return c[0]!=="/"&&(c="/"+c),so(c,"")}return so(t,e)+s+l}function Q1(e,n,t,s){let l=[],a=[],i=null;const r=({state:v})=>{const h=hc(e,location),k=t.value,E=n.value;let x=0;if(v){if(t.value=h,n.value=v,i&&i===k){i=null;return}x=E?v.position-E.position:0}else s(h);l.forEach(g=>{g(t.value,k,{delta:x,type:hs.pop,direction:x?x>0?as.forward:as.back:as.unknown})})};function c(){i=t.value}function u(v){l.push(v);const h=()=>{const k=l.indexOf(v);k>-1&&l.splice(k,1)};return a.push(h),h}function p(){const{history:v}=window;v.state&&v.replaceState(ye({},v.state,{scroll:ml()}),"")}function d(){for(const v of a)v();a=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function io(e,n,t,s=!1,l=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:l?ml():null}}function X1(e){const{history:n,location:t}=window,s={value:hc(e,t)},l={value:n.state};l.value||a(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(c,u,p){const d=e.indexOf("#"),v=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+c:Y1()+e+c;try{n[p?"replaceState":"pushState"](u,"",v),l.value=u}catch(h){console.error(h),t[p?"replace":"assign"](v)}}function i(c,u){const p=ye({},n.state,io(l.value.back,c,l.value.forward,!0),u,{position:l.value.position});a(c,p,!0),s.value=c}function r(c,u){const p=ye({},l.value,n.state,{forward:c,scroll:ml()});a(p.current,p,!0);const d=ye({},io(s.value,c,null),{position:p.position+1},u);a(c,d,!1),s.value=c}return{location:s,state:l,push:r,replace:i}}function Z1(e){e=z1(e);const n=X1(e),t=Q1(e,n.state,n.location,n.replace);function s(a,i=!0){i||t.pauseListeners(),history.go(a)}const l=ye({location:"",base:e,go:s,createHref:W1.bind(null,e)},n,t);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function eh(e){return typeof e=="string"||e&&typeof e=="object"}function mc(e){return typeof e=="string"||typeof e=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fc=Symbol("");var oo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(oo||(oo={}));function St(e,n){return ye(new Error,{type:e,[fc]:!0},n)}function Dn(e,n){return e instanceof Error&&fc in e&&(n==null||!!(e.type&n))}const ro="[^/]+?",nh={sensitive:!1,strict:!1,start:!0,end:!0},th=/[.+*?^${}()[\]/\\]/g;function sh(e,n){const t=ye({},nh,n),s=[];let l=t.start?"^":"";const a=[];for(const u of e){const p=u.length?[]:[90];t.strict&&!u.length&&(l+="/");for(let d=0;d<u.length;d++){const v=u[d];let h=40+(t.sensitive?.25:0);if(v.type===0)d||(l+="/"),l+=v.value.replace(th,"\\$&"),h+=40;else if(v.type===1){const{value:k,repeatable:E,optional:x,regexp:g}=v;a.push({name:k,repeatable:E,optional:x});const b=g||ro;if(b!==ro){h+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${k}" (${b}): `+S.message)}}let A=E?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(A=x&&u.length<2?`(?:/${A})`:"/"+A),x&&(A+="?"),l+=A,h+=20,x&&(h+=-8),E&&(h+=-20),b===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(l+="/?"),t.end?l+="$":t.strict&&(l+="(?:/|$)");const i=new RegExp(l,t.sensitive?"":"i");function r(u){const p=u.match(i),d={};if(!p)return null;for(let v=1;v<p.length;v++){const h=p[v]||"",k=a[v-1];d[k.name]=h&&k.repeatable?h.split("/"):h}return d}function c(u){let p="",d=!1;for(const v of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const h of v)if(h.type===0)p+=h.value;else if(h.type===1){const{value:k,repeatable:E,optional:x}=h,g=k in u?u[k]:"";if(yn(g)&&!E)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const b=yn(g)?g.join("/"):g;if(!b)if(x)v.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);p+=b}}return p||"/"}return{re:i,score:s,keys:a,parse:r,stringify:c}}function lh(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function ah(e,n){let t=0;const s=e.score,l=n.score;for(;t<s.length&&t<l.length;){const a=lh(s[t],l[t]);if(a)return a;t++}if(Math.abs(l.length-s.length)===1){if(co(s))return 1;if(co(l))return-1}return l.length-s.length}function co(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ih={type:0,value:""},oh=/[a-zA-Z0-9_]/;function rh(e){if(!e)return[[]];if(e==="/")return[[ih]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${t})/"${u}": ${h}`)}let t=0,s=t;const l=[];let a;function i(){a&&l.push(a),a=[]}let r=0,c,u="",p="";function d(){u&&(t===0?a.push({type:0,value:u}):t===1||t===2||t===3?(a.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),u="")}function v(){u+=c}for(;r<e.length;){if(c=e[r++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&d(),i()):c===":"?(d(),t=1):v();break;case 4:v(),t=s;break;case 1:c==="("?t=2:oh.test(c)?v():(d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&r--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:t=3:p+=c;break;case 3:d(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&r--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),i(),l}function ch(e,n,t){const s=sh(rh(e.path),t),l=ye(s,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function uh(e,n){const t=[],s=new Map;n=vo({strict:!1,end:!0,sensitive:!1},n);function l(p){return s.get(p)}function a(p,d,v){const h=!v,k=ph(p);k.aliasOf=v&&v.record;const E=vo(n,p),x=[k];if("alias"in p){const A=typeof p.alias=="string"?[p.alias]:p.alias;for(const S of A)x.push(ye({},k,{components:v?v.record.components:k.components,path:S,aliasOf:v?v.record:k}))}let g,b;for(const A of x){const{path:S}=A;if(d&&S[0]!=="/"){const B=d.record.path,C=B[B.length-1]==="/"?"":"/";A.path=d.record.path+(S&&C+S)}if(g=ch(A,d,E),v?v.alias.push(g):(b=b||g,b!==g&&b.alias.push(g),h&&p.name&&!po(g)&&i(p.name)),k.children){const B=k.children;for(let C=0;C<B.length;C++)a(B[C],g,v&&v.children[C])}v=v||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&c(g)}return b?()=>{i(b)}:ls}function i(p){if(mc(p)){const d=s.get(p);d&&(s.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(i),p.alias.forEach(i))}}function r(){return t}function c(p){let d=0;for(;d<t.length&&ah(p,t[d])>=0&&(p.record.path!==t[d].record.path||!gc(p,t[d]));)d++;t.splice(d,0,p),p.record.name&&!po(p)&&s.set(p.record.name,p)}function u(p,d){let v,h={},k,E;if("name"in p&&p.name){if(v=s.get(p.name),!v)throw St(1,{location:p});E=v.record.name,h=ye(uo(d.params,v.keys.filter(b=>!b.optional).map(b=>b.name)),p.params&&uo(p.params,v.keys.map(b=>b.name))),k=v.stringify(h)}else if("path"in p)k=p.path,v=t.find(b=>b.re.test(k)),v&&(h=v.parse(k),E=v.record.name);else{if(v=d.name?s.get(d.name):t.find(b=>b.re.test(d.path)),!v)throw St(1,{location:p,currentLocation:d});E=v.record.name,h=ye({},d.params,p.params),k=v.stringify(h)}const x=[];let g=v;for(;g;)x.unshift(g.record),g=g.parent;return{name:E,path:k,params:h,matched:x,meta:vh(x)}}return e.forEach(p=>a(p)),{addRoute:a,resolve:u,removeRoute:i,getRoutes:r,getRecordMatcher:l}}function uo(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function ph(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:dh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function dh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="boolean"?t:t[s];return n}function po(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vh(e){return e.reduce((n,t)=>ye(n,t.meta),{})}function vo(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function gc(e,n){return n.children.some(t=>t===e||gc(e,t))}const kc=/#/g,hh=/&/g,mh=/\//g,fh=/=/g,gh=/\?/g,yc=/\+/g,kh=/%5B/g,yh=/%5D/g,bc=/%5E/g,bh=/%60/g,_c=/%7B/g,_h=/%7C/g,wc=/%7D/g,wh=/%20/g;function Ja(e){return encodeURI(""+e).replace(_h,"|").replace(kh,"[").replace(yh,"]")}function Eh(e){return Ja(e).replace(_c,"{").replace(wc,"}").replace(bc,"^")}function aa(e){return Ja(e).replace(yc,"%2B").replace(wh,"+").replace(kc,"%23").replace(hh,"%26").replace(bh,"`").replace(_c,"{").replace(wc,"}").replace(bc,"^")}function xh(e){return aa(e).replace(fh,"%3D")}function Th(e){return Ja(e).replace(kc,"%23").replace(gh,"%3F")}function Lh(e){return e==null?"":Th(e).replace(mh,"%2F")}function nl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ih(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<s.length;++l){const a=s[l].replace(yc," "),i=a.indexOf("="),r=nl(i<0?a:a.slice(0,i)),c=i<0?null:nl(a.slice(i+1));if(r in n){let u=n[r];yn(u)||(u=n[r]=[u]),u.push(c)}else n[r]=c}return n}function ho(e){let n="";for(let t in e){const s=e[t];if(t=xh(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(yn(s)?s.map(a=>a&&aa(a)):[s&&aa(s)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function Ah(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=yn(s)?s.map(l=>l==null?null:""+l):s==null?s:""+s)}return n}const Ph=Symbol(""),mo=Symbol(""),fl=Symbol(""),Ya=Symbol(""),ia=Symbol("");function Jt(){let e=[];function n(s){return e.push(s),()=>{const l=e.indexOf(s);l>-1&&e.splice(l,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function Jn(e,n,t,s,l){const a=s&&(s.enterCallbacks[l]=s.enterCallbacks[l]||[]);return()=>new Promise((i,r)=>{const c=d=>{d===!1?r(St(4,{from:t,to:n})):d instanceof Error?r(d):eh(d)?r(St(2,{from:n,to:d})):(a&&s.enterCallbacks[l]===a&&typeof d=="function"&&a.push(d),i())},u=e.call(s&&s.instances[l],n,t,c);let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(d=>r(d))})}function Vl(e,n,t,s){const l=[];for(const a of e)for(const i in a.components){let r=a.components[i];if(!(n!=="beforeRouteEnter"&&!a.instances[i]))if(Dh(r)){const u=(r.__vccOpts||r)[n];u&&l.push(Jn(u,t,s,a,i))}else{let c=r();l.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const p=M1(u)?u.default:u;a.components[i]=p;const v=(p.__vccOpts||p)[n];return v&&Jn(v,t,s,a,i)()}))}}return l}function Dh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function oa(e){const n=ge(fl),t=ge(Ya),s=_(()=>n.resolve(mn(e.to))),l=_(()=>{const{matched:c}=s.value,{length:u}=c,p=c[u-1],d=t.matched;if(!p||!d.length)return-1;const v=d.findIndex(Dt.bind(null,p));if(v>-1)return v;const h=fo(c[u-2]);return u>1&&fo(p)===h&&d[d.length-1].path!==h?d.findIndex(Dt.bind(null,c[u-2])):v}),a=_(()=>l.value>-1&&Rh(t.params,s.value.params)),i=_(()=>l.value>-1&&l.value===t.matched.length-1&&vc(t.params,s.value.params));function r(c={}){return Oh(c)?n[mn(e.replace)?"replace":"push"](mn(e.to)).catch(ls):Promise.resolve()}return{route:s,href:_(()=>s.value.href),isActive:a,isExactActive:i,navigate:r}}const Sh=$({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oa,setup(e,{slots:n}){const t=Ft(oa(e)),{options:s}=ge(fl),l=_(()=>({[go(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[go(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:o("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:l.value},a)}}}),Ch=Sh;function Oh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Rh(e,n){for(const t in n){const s=n[t],l=e[t];if(typeof s=="string"){if(s!==l)return!1}else if(!yn(l)||l.length!==s.length||s.some((a,i)=>a!==l[i]))return!1}return!0}function fo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const go=(e,n,t)=>e??n??t,$h=$({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=ge(ia),l=_(()=>e.route||s.value),a=ge(mo,0),i=_(()=>{let u=mn(a);const{matched:p}=l.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),r=_(()=>l.value.matched[i.value]);cn(mo,_(()=>i.value+1)),cn(Ph,r),cn(ia,l);const c=H();return fe(()=>[c.value,r.value,e.name],([u,p,d],[v,h,k])=>{p&&(p.instances[d]=u,h&&h!==p&&u&&u===v&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!Dt(p,h)||!v)&&(p.enterCallbacks[d]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=l.value,p=e.name,d=r.value,v=d&&d.components[p];if(!v)return ko(t.default,{Component:v,route:u});const h=d.props[p],k=h?h===!0?u.params:typeof h=="function"?h(u):h:null,x=o(v,ye({},k,n,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[p]=null)},ref:c}));return ko(t.default,{Component:x,route:u})||x}}});function ko(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Ec=$h;function Mh(e){const n=uh(e.routes,e),t=e.parseQuery||Ih,s=e.stringifyQuery||ho,l=e.history,a=Jt(),i=Jt(),r=Jt(),c=Ne(On);let u=On;ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=$l.bind(null,L=>""+L),d=$l.bind(null,Lh),v=$l.bind(null,nl);function h(L,N){let V,K;return mc(L)?(V=n.getRecordMatcher(L),K=N):K=L,n.addRoute(K,V)}function k(L){const N=n.getRecordMatcher(L);N&&n.removeRoute(N)}function E(){return n.getRoutes().map(L=>L.record)}function x(L){return!!n.getRecordMatcher(L)}function g(L,N){if(N=ye({},N||c.value),typeof L=="string"){const w=Ml(t,L,N.path),T=n.resolve({path:w.path},N),D=l.createHref(w.fullPath);return ye(w,T,{params:v(T.params),hash:nl(w.hash),redirectedFrom:void 0,href:D})}let V;if("path"in L)V=ye({},L,{path:Ml(t,L.path,N.path).path});else{const w=ye({},L.params);for(const T in w)w[T]==null&&delete w[T];V=ye({},L,{params:d(w)}),N.params=d(N.params)}const K=n.resolve(V,N),pe=L.hash||"";K.params=p(v(K.params));const f=j1(s,ye({},L,{hash:Eh(pe),path:K.path})),y=l.createHref(f);return ye({fullPath:f,hash:pe,query:s===ho?Ah(L.query):L.query||{}},K,{redirectedFrom:void 0,href:y})}function b(L){return typeof L=="string"?Ml(t,L,c.value.path):ye({},L)}function A(L,N){if(u!==L)return St(8,{from:N,to:L})}function S(L){return J(L)}function B(L){return S(ye(b(L),{replace:!0}))}function C(L){const N=L.matched[L.matched.length-1];if(N&&N.redirect){const{redirect:V}=N;let K=typeof V=="function"?V(L):V;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=b(K):{path:K},K.params={}),ye({query:L.query,hash:L.hash,params:"path"in K?{}:L.params},K)}}function J(L,N){const V=u=g(L),K=c.value,pe=L.state,f=L.force,y=L.replace===!0,w=C(V);if(w)return J(ye(b(w),{state:typeof w=="object"?ye({},pe,w.state):pe,force:f,replace:y}),N||V);const T=V;T.redirectedFrom=N;let D;return!f&&N1(s,K,V)&&(D=St(16,{to:T,from:K}),qe(K,K,!0,!1)),(D?Promise.resolve(D):z(T,K)).catch(O=>Dn(O)?Dn(O,2)?O:wn(O):ne(O,T,K)).then(O=>{if(O){if(Dn(O,2))return J(ye({replace:y},b(O.to),{state:typeof O.to=="object"?ye({},pe,O.to.state):pe,force:f}),N||T)}else O=q(T,K,!0,y,pe);return se(T,K,O),O})}function P(L,N){const V=A(L,N);return V?Promise.reject(V):Promise.resolve()}function W(L){const N=nn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(L):L()}function z(L,N){let V;const[K,pe,f]=Vh(L,N);V=Vl(K.reverse(),"beforeRouteLeave",L,N);for(const w of K)w.leaveGuards.forEach(T=>{V.push(Jn(T,L,N))});const y=P.bind(null,L,N);return V.push(y),Se(V).then(()=>{V=[];for(const w of a.list())V.push(Jn(w,L,N));return V.push(y),Se(V)}).then(()=>{V=Vl(pe,"beforeRouteUpdate",L,N);for(const w of pe)w.updateGuards.forEach(T=>{V.push(Jn(T,L,N))});return V.push(y),Se(V)}).then(()=>{V=[];for(const w of L.matched)if(w.beforeEnter&&!N.matched.includes(w))if(yn(w.beforeEnter))for(const T of w.beforeEnter)V.push(Jn(T,L,N));else V.push(Jn(w.beforeEnter,L,N));return V.push(y),Se(V)}).then(()=>(L.matched.forEach(w=>w.enterCallbacks={}),V=Vl(f,"beforeRouteEnter",L,N),V.push(y),Se(V))).then(()=>{V=[];for(const w of i.list())V.push(Jn(w,L,N));return V.push(y),Se(V)}).catch(w=>Dn(w,8)?w:Promise.reject(w))}function se(L,N,V){for(const K of r.list())W(()=>K(L,N,V))}function q(L,N,V,K,pe){const f=A(L,N);if(f)return f;const y=N===On,w=ft?history.state:{};V&&(K||y?l.replace(L.fullPath,ye({scroll:y&&w&&w.scroll},pe)):l.push(L.fullPath,pe)),c.value=L,qe(L,N,V,y),wn()}let Z;function U(){Z||(Z=l.listen((L,N,V)=>{if(!Nn.listening)return;const K=g(L),pe=C(K);if(pe){J(ye(pe,{replace:!0}),K).catch(ls);return}u=K;const f=c.value;ft&&K1(ao(f.fullPath,V.delta),ml()),z(K,f).catch(y=>Dn(y,12)?y:Dn(y,2)?(J(y.to,K).then(w=>{Dn(w,20)&&!V.delta&&V.type===hs.pop&&l.go(-1,!1)}).catch(ls),Promise.reject()):(V.delta&&l.go(-V.delta,!1),ne(y,K,f))).then(y=>{y=y||q(K,f,!1),y&&(V.delta&&!Dn(y,8)?l.go(-V.delta,!1):V.type===hs.pop&&Dn(y,20)&&l.go(-1,!1)),se(K,f,y)}).catch(ls)}))}let Te=Jt(),ie=Jt(),ke;function ne(L,N,V){wn(L);const K=ie.list();return K.length?K.forEach(pe=>pe(L,N,V)):console.error(L),Promise.reject(L)}function un(){return ke&&c.value!==On?Promise.resolve():new Promise((L,N)=>{Te.add([L,N])})}function wn(L){return ke||(ke=!L,U(),Te.list().forEach(([N,V])=>L?V(L):N()),Te.reset()),L}function qe(L,N,V,K){const{scrollBehavior:pe}=e;if(!ft||!pe)return Promise.resolve();const f=!V&&J1(ao(L.fullPath,0))||(K||!V)&&history.state&&history.state.scroll||null;return ct().then(()=>pe(L,N,f)).then(y=>y&&G1(y)).catch(y=>ne(y,L,N))}const Pe=L=>l.go(L);let Pn;const nn=new Set,Nn={currentRoute:c,listening:!0,addRoute:h,removeRoute:k,hasRoute:x,getRoutes:E,resolve:g,options:e,push:S,replace:B,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:a.add,beforeResolve:i.add,afterEach:r.add,onError:ie.add,isReady:un,install(L){const N=this;L.component("RouterLink",Ch),L.component("RouterView",Ec),L.config.globalProperties.$router=N,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(c)}),ft&&!Pn&&c.value===On&&(Pn=!0,S(l.location).catch(pe=>{}));const V={};for(const pe in On)V[pe]=_(()=>c.value[pe]);L.provide(fl,N),L.provide(Ya,Ft(V)),L.provide(ia,c);const K=L.unmount;nn.add(L),L.unmount=function(){nn.delete(L),nn.size<1&&(u=On,Z&&Z(),Z=null,c.value=On,Pn=!1,ke=!1),K()}}};function Se(L){return L.reduce((N,V)=>N.then(()=>W(V)),Promise.resolve())}return Nn}function Vh(e,n){const t=[],s=[],l=[],a=Math.max(n.matched.length,e.matched.length);for(let i=0;i<a;i++){const r=n.matched[i];r&&(e.matched.find(u=>Dt(u,r))?s.push(r):t.push(r));const c=e.matched[i];c&&(n.matched.find(u=>Dt(u,c))||l.push(c))}return[t,s,l]}function Fe(){return ge(fl)}function _n(){return ge(Ya)}var He=Uint8Array,bt=Uint16Array,Fh=Int32Array,xc=new He([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Tc=new He([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jh=new He([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lc=function(e,n){for(var t=new bt(31),s=0;s<31;++s)t[s]=n+=1<<e[s-1];for(var l=new Fh(t[30]),s=1;s<30;++s)for(var a=t[s];a<t[s+1];++a)l[a]=a-t[s]<<5|s;return{b:t,r:l}},Ic=Lc(xc,2),Ac=Ic.b,Nh=Ic.r;Ac[28]=258,Nh[258]=28;var Bh=Lc(Tc,0),Hh=Bh.b,ra=new bt(32768);for(var xe=0;xe<32768;++xe){var qn=(xe&43690)>>1|(xe&21845)<<1;qn=(qn&52428)>>2|(qn&13107)<<2,qn=(qn&61680)>>4|(qn&3855)<<4,ra[xe]=((qn&65280)>>8|(qn&255)<<8)>>1}var is=function(e,n,t){for(var s=e.length,l=0,a=new bt(n);l<s;++l)e[l]&&++a[e[l]-1];var i=new bt(n);for(l=1;l<n;++l)i[l]=i[l-1]+a[l-1]<<1;var r;if(t){r=new bt(1<<n);var c=15-n;for(l=0;l<s;++l)if(e[l])for(var u=l<<4|e[l],p=n-e[l],d=i[e[l]-1]++<<p,v=d|(1<<p)-1;d<=v;++d)r[ra[d]>>c]=u}else for(r=new bt(s),l=0;l<s;++l)e[l]&&(r[l]=ra[i[e[l]-1]++]>>15-e[l]);return r},ws=new He(288);for(var xe=0;xe<144;++xe)ws[xe]=8;for(var xe=144;xe<256;++xe)ws[xe]=9;for(var xe=256;xe<280;++xe)ws[xe]=7;for(var xe=280;xe<288;++xe)ws[xe]=8;var Pc=new He(32);for(var xe=0;xe<32;++xe)Pc[xe]=5;var zh=is(ws,9,1),qh=is(Pc,5,1),Fl=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},dn=function(e,n,t){var s=n/8|0;return(e[s]|e[s+1]<<8)>>(n&7)&t},jl=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Wh=function(e){return(e+7)/8|0},Qa=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var s=new He(t-n);return s.set(e.subarray(n,t)),s},Uh=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ln=function(e,n,t){var s=new Error(n||Uh[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,ln),!t)throw s;return s},Gh=function(e,n,t,s){var l=e.length,a=s?s.length:0;if(!l||n.f&&!n.l)return t||new He(0);var i=!t||n.i!=2,r=n.i;t||(t=new He(l*3));var c=function(K){var pe=t.length;if(K>pe){var f=new He(Math.max(pe*2,K));f.set(t),t=f}},u=n.f||0,p=n.p||0,d=n.b||0,v=n.l,h=n.d,k=n.m,E=n.n,x=l*8;do{if(!v){u=dn(e,p,1);var g=dn(e,p+1,3);if(p+=3,g)if(g==1)v=zh,h=qh,k=9,E=5;else if(g==2){var B=dn(e,p,31)+257,C=dn(e,p+10,15)+4,J=B+dn(e,p+5,31)+1;p+=14;for(var P=new He(J),W=new He(19),z=0;z<C;++z)W[jh[z]]=dn(e,p+z*3,7);p+=C*3;for(var se=Fl(W),q=(1<<se)-1,Z=is(W,se,1),z=0;z<J;){var U=Z[dn(e,p,q)];p+=U&15;var b=U>>4;if(b<16)P[z++]=b;else{var Te=0,ie=0;for(b==16?(ie=3+dn(e,p,3),p+=2,Te=P[z-1]):b==17?(ie=3+dn(e,p,7),p+=3):b==18&&(ie=11+dn(e,p,127),p+=7);ie--;)P[z++]=Te}}var ke=P.subarray(0,B),ne=P.subarray(B);k=Fl(ke),E=Fl(ne),v=is(ke,k,1),h=is(ne,E,1)}else ln(1);else{var b=Wh(p)+4,A=e[b-4]|e[b-3]<<8,S=b+A;if(S>l){r&&ln(0);break}i&&c(d+A),t.set(e.subarray(b,S),d),n.b=d+=A,n.p=p=S*8,n.f=u;continue}if(p>x){r&&ln(0);break}}i&&c(d+131072);for(var un=(1<<k)-1,wn=(1<<E)-1,qe=p;;qe=p){var Te=v[jl(e,p)&un],Pe=Te>>4;if(p+=Te&15,p>x){r&&ln(0);break}if(Te||ln(2),Pe<256)t[d++]=Pe;else if(Pe==256){qe=p,v=null;break}else{var Pn=Pe-254;if(Pe>264){var z=Pe-257,nn=xc[z];Pn=dn(e,p,(1<<nn)-1)+Ac[z],p+=nn}var Nn=h[jl(e,p)&wn],Se=Nn>>4;Nn||ln(3),p+=Nn&15;var ne=Hh[Se];if(Se>3){var nn=Tc[Se];ne+=jl(e,p)&(1<<nn)-1,p+=nn}if(p>x){r&&ln(0);break}i&&c(d+131072);var L=d+Pn;if(d<ne){var N=a-ne,V=Math.min(ne,L);for(N+d<0&&ln(3);d<V;++d)t[d]=s[N+d]}for(;d<L;d+=4)t[d]=t[d-ne],t[d+1]=t[d+1-ne],t[d+2]=t[d+2-ne],t[d+3]=t[d+3-ne];d=L}}n.l=v,n.p=qe,n.b=d,n.f=u,v&&(u=1,n.m=k,n.d=h,n.n=E)}while(!u);return d==t.length?t:Qa(t,0,d)},Kh=new He(0),Jh=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&ln(6,"invalid zlib data"),(e[1]>>5&1)==+!n&&ln(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Yh(e,n){return Gh(e.subarray(Jh(e,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var yo=typeof TextEncoder<"u"&&new TextEncoder,ca=typeof TextDecoder<"u"&&new TextDecoder,Qh=0;try{ca.decode(Kh,{stream:!0}),Qh=1}catch{}var Xh=function(e){for(var n="",t=0;;){var s=e[t++],l=(s>127)+(s>223)+(s>239);if(t+l>e.length)return{s:n,r:Qa(e,t-1)};l?l==3?(s=((s&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|s>>10,56320|s&1023)):l&1?n+=String.fromCharCode((s&31)<<6|e[t++]&63):n+=String.fromCharCode((s&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(s)}};function Zh(e,n){if(n){for(var t=new He(e.length),s=0;s<e.length;++s)t[s]=e.charCodeAt(s);return t}if(yo)return yo.encode(e);for(var l=e.length,a=new He(e.length+(e.length>>1)),i=0,r=function(p){a[i++]=p},s=0;s<l;++s){if(i+5>a.length){var c=new He(i+8+(l-s<<1));c.set(a),a=c}var u=e.charCodeAt(s);u<128||n?r(u):u<2048?(r(192|u>>6),r(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++s)&1023,r(240|u>>18),r(128|u>>12&63),r(128|u>>6&63),r(128|u&63)):(r(224|u>>12),r(128|u>>6&63),r(128|u&63))}return Qa(a,0,i)}function e2(e,n){if(n){for(var t="",s=0;s<e.length;s+=16384)t+=String.fromCharCode.apply(null,e.subarray(s,s+16384));return t}else{if(ca)return ca.decode(e);var l=Xh(e),a=l.s,t=l.r;return t.length&&ln(8),a}}const le=({name:e="",color:n="currentColor"},{slots:t})=>{var s;return o("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(s=t.default)==null?void 0:s.call(t))};le.displayName="IconBase";const zt=({size:e=48,stroke:n=4,wrapper:t=!0,height:s=2*e})=>{const l=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[o("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),o("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round"},[o("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),o("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?o("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},l):l};zt.displayName="LoadingIcon";const Dc=(e,{slots:n})=>{var t;return(t=n.default)==null?void 0:t.call(n)},Xa=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const n=Date.parse(e.toString());if(!Number.isNaN(n))return new Date(n)}return null},gl=(e,n)=>{let t=1;for(let s=0;s<e.length;s++)t+=e.charCodeAt(s),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%n},Sc=Array.isArray,n2=e=>typeof e=="function",t2=e=>typeof e=="string";var s2=e=>e.startsWith("ftp://"),Za=e=>/^(https?:)?\/\//.test(e),l2=/.md((\?|#).*)?$/,a2=(e,n="/")=>!!(Za(e)||s2(e)||e.startsWith("/")&&!e.startsWith(n)&&!l2.test(e)),Cc=e=>Object.prototype.toString.call(e)==="[object Object]";function i2(){const e=H(!1);return Bt()&&he(()=>{e.value=!0}),e}function o2(e){return i2(),_(()=>!!e())}const Vn=e=>typeof e=="string",Ct=(e,n)=>Vn(e)&&e.startsWith(n),ht=(e,n)=>Vn(e)&&e.endsWith(n),qt=Object.entries,r2=Object.fromEntries,en=Object.keys,c2=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),Oc=e=>{const[n,t=""]=e.split("#");return n?`${c2(n)}${t?`#${t}`:""}`:e},bo=e=>Cc(e)&&Vn(e.name),ms=(e,n=!1)=>e?Sc(e)?e.map(t=>Vn(t)?{name:t}:bo(t)?t:null).filter(t=>t!==null):Vn(e)?[{name:e}]:bo(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n?"":"| false"} | undefined\`, but got`,e),[]):[],Rc=(e,n)=>{if(e){if(Sc(e)&&e.every(Vn))return e;if(Vn(e))return[e];console.error(`Expect ${n||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},$c=e=>Rc(e,"category"),Mc=e=>Rc(e,"tag"),kl=e=>Ct(e,"/");let u2=class{constructor(){xl(this,"containerElement");xl(this,"messageElements",{});const n="message-container",t=document.getElementById(n);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=n,document.body.appendChild(this.containerElement))}pop(n,t=2e3){const s=document.createElement("div"),l=Date.now();return s.className="message move-in",s.innerHTML=n,this.containerElement.appendChild(s),this.messageElements[l]=s,t>0&&setTimeout(()=>{this.close(l)},t),l}close(n){if(n){const t=this.messageElements[n];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[n]})}else en(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const Vc=/#.*$/u,p2=e=>{const n=Vc.exec(e);return n?n[0]:""},_o=e=>decodeURI(e).replace(Vc,"").replace(/(index)?\.(md|html)$/,""),ei=(e,n)=>{if(n===void 0)return!1;const t=_o(e.path),s=_o(n),l=p2(n);return l?l===e.hash&&(!s||t===s):t===s},Fc=e=>{const n=atob(e);return e2(Yh(Zh(n,!0)))},d2=e=>Za(e)?e:`https://github.com/${e}`,jc=e=>!Za(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Ot=(e,...n)=>{const t=e.resolve(...n),s=t.matched[t.matched.length-1];if(!(s!=null&&s.redirect))return t;const{redirect:l}=s,a=n2(l)?l(t):l,i=t2(a)?{path:a}:a;return Ot(e,{hash:t.hash,query:t.query,params:t.params,...i})},v2=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const n=e.currentTarget.getAttribute("target");if(n!=null&&n.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Me=({to:e=""},{slots:n})=>{var t;const s=Fe(),l=(a={})=>v2(a)?s.push(e).catch():Promise.resolve();return o("a",{class:"vp-link",href:Ie(Oc(e)),onClick:l},(t=n.default)==null?void 0:t.call(n))};Me.displayName="VPLink";const Nc=()=>o(le,{name:"github"},()=>o("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Nc.displayName="GitHubIcon";const Bc=()=>o(le,{name:"gitlab"},()=>o("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Bc.displayName="GitLabIcon";const Hc=()=>o(le,{name:"gitee"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Hc.displayName="GiteeIcon";const zc=()=>o(le,{name:"bitbucket"},()=>o("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));zc.displayName="BitbucketIcon";const qc=()=>o(le,{name:"source"},()=>o("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));qc.displayName="SourceIcon";const gn=(e,n)=>{const t=n?n._instance:Bt();return Cc(t==null?void 0:t.appContext.components)&&(e in t.appContext.components||Ge(e)in t.appContext.components||ys(Ge(e))in t.appContext.components)},h2=()=>o2(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),m2=()=>{const e=h2();return _(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Wt=e=>{const n=bn();return _(()=>e[n.value])};var f2=Object.defineProperty,g2=Object.defineProperties,k2=Object.getOwnPropertyDescriptors,wo=Object.getOwnPropertySymbols,y2=Object.prototype.hasOwnProperty,b2=Object.prototype.propertyIsEnumerable,Eo=(e,n,t)=>n in e?f2(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,_2=(e,n)=>{for(var t in n||(n={}))y2.call(n,t)&&Eo(e,t,n[t]);if(wo)for(var t of wo(n))b2.call(n,t)&&Eo(e,t,n[t]);return e},w2=(e,n)=>g2(e,k2(n));function xo(e,n){var t;const s=Ne();return Pr(()=>{s.value=e()},w2(_2({},n),{flush:(t=n==null?void 0:n.flush)!=null?t:"sync"})),et(s)}function pt(e){return or()?(Jp(e),!0):!1}function In(e){return typeof e=="function"?e():mn(e)}const Es=typeof window<"u",fs=()=>{},ua=E2();function E2(){var e;return Es&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Wc(e,n){function t(...s){return new Promise((l,a)=>{Promise.resolve(e(()=>n.apply(this,s),{fn:n,thisArg:this,args:s})).then(l).catch(a)})}return t}const Uc=e=>e();function x2(e,n=!0,t=!0,s=!1){let l=0,a,i=!0,r=fs,c;const u=()=>{a&&(clearTimeout(a),a=void 0,r(),r=fs)};return d=>{const v=In(e),h=Date.now()-l,k=()=>c=d();return u(),v<=0?(l=Date.now(),k()):(h>v&&(t||!i)?(l=Date.now(),k()):n&&(c=new Promise((E,x)=>{r=s?x:E,a=setTimeout(()=>{l=Date.now(),i=!0,E(k()),u()},Math.max(0,v-h))})),!t&&!a&&(a=setTimeout(()=>i=!0,v)),i=!1,c)}}function T2(e=Uc){const n=H(!0);function t(){n.value=!1}function s(){n.value=!0}const l=(...a)=>{n.value&&e(...a)};return{isActive:et(n),pause:t,resume:s,eventFilter:l}}function Gc(...e){if(e.length!==1)return jt(...e);const n=e[0];return typeof n=="function"?et(Id(()=>({get:n,set:fs}))):H(n)}function L2(e,n=200,t=!1,s=!0,l=!1){return Wc(x2(n,t,s,l),e)}function Kc(e,n=!0){Bt()?he(e):n?e():ct(e)}function I2(e,n,t={}){const{immediate:s=!0}=t,l=H(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function r(){l.value=!1,i()}function c(...u){i(),l.value=!0,a=setTimeout(()=>{l.value=!1,a=null,e(...u)},In(n))}return s&&(l.value=!0,Es&&c()),pt(r),{isPending:et(l),start:c,stop:r}}function To(e=!1,n={}){const{truthyValue:t=!0,falsyValue:s=!1}=n,l=Oe(e),a=H(e);function i(r){if(arguments.length)return a.value=r,a.value;{const c=In(t);return a.value=a.value===c?In(s):c,a.value}}return l?i:[a,i]}var Lo=Object.getOwnPropertySymbols,A2=Object.prototype.hasOwnProperty,P2=Object.prototype.propertyIsEnumerable,D2=(e,n)=>{var t={};for(var s in e)A2.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Lo)for(var s of Lo(e))n.indexOf(s)<0&&P2.call(e,s)&&(t[s]=e[s]);return t};function S2(e,n,t={}){const s=t,{eventFilter:l=Uc}=s,a=D2(s,["eventFilter"]);return fe(e,Wc(l,n),a)}var C2=Object.defineProperty,O2=Object.defineProperties,R2=Object.getOwnPropertyDescriptors,tl=Object.getOwnPropertySymbols,Jc=Object.prototype.hasOwnProperty,Yc=Object.prototype.propertyIsEnumerable,Io=(e,n,t)=>n in e?C2(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,$2=(e,n)=>{for(var t in n||(n={}))Jc.call(n,t)&&Io(e,t,n[t]);if(tl)for(var t of tl(n))Yc.call(n,t)&&Io(e,t,n[t]);return e},M2=(e,n)=>O2(e,R2(n)),V2=(e,n)=>{var t={};for(var s in e)Jc.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&tl)for(var s of tl(e))n.indexOf(s)<0&&Yc.call(e,s)&&(t[s]=e[s]);return t};function F2(e,n,t={}){const s=t,{eventFilter:l}=s,a=V2(s,["eventFilter"]),{eventFilter:i,pause:r,resume:c,isActive:u}=T2(l);return{stop:S2(e,n,M2($2({},a),{eventFilter:i})),pause:r,resume:c,isActive:u}}function on(e){var n;const t=In(e);return(n=t==null?void 0:t.$el)!=null?n:t}const An=Es?window:void 0,Qc=Es?window.document:void 0,j2=Es?window.navigator:void 0;function Ve(...e){let n,t,s,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,l]=e,n=An):[n,t,s,l]=e,!n)return fs;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const a=[],i=()=>{a.forEach(p=>p()),a.length=0},r=(p,d,v,h)=>(p.addEventListener(d,v,h),()=>p.removeEventListener(d,v,h)),c=fe(()=>[on(n),In(l)],([p,d])=>{i(),p&&a.push(...t.flatMap(v=>s.map(h=>r(p,v,h,d))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return pt(u),u}let Ao=!1;function N2(e,n,t={}){const{window:s=An,ignore:l=[],capture:a=!0,detectIframe:i=!1}=t;if(!s)return;ua&&!Ao&&(Ao=!0,Array.from(s.document.body.children).forEach(v=>v.addEventListener("click",fs)));let r=!0;const c=v=>l.some(h=>{if(typeof h=="string")return Array.from(s.document.querySelectorAll(h)).some(k=>k===v.target||v.composedPath().includes(k));{const k=on(h);return k&&(v.target===k||v.composedPath().includes(k))}}),p=[Ve(s,"click",v=>{const h=on(e);if(!(!h||h===v.target||v.composedPath().includes(h))){if(v.detail===0&&(r=!c(v)),!r){r=!0;return}n(v)}},{passive:!0,capture:a}),Ve(s,"pointerdown",v=>{const h=on(e);h&&(r=!v.composedPath().includes(h)&&!c(v))},{passive:!0}),i&&Ve(s,"blur",v=>{setTimeout(()=>{var h;const k=on(e);((h=s.document.activeElement)==null?void 0:h.tagName)==="IFRAME"&&!(k!=null&&k.contains(s.document.activeElement))&&n(v)},0)})].filter(Boolean);return()=>p.forEach(v=>v())}function B2(){const e=H(!1);return Bt()&&he(()=>{e.value=!0}),e}function yl(e){const n=B2();return _(()=>(n.value,!!e()))}function Xc(e,n={}){const{window:t=An}=n,s=yl(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let l;const a=H(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",r):l.removeListener(r))},r=()=>{s.value&&(i(),l=t.matchMedia(Gc(e).value),a.value=!!(l!=null&&l.matches),l&&("addEventListener"in l?l.addEventListener("change",r):l.addListener(r)))};return Pr(r),pt(()=>i()),a}function H2(e={}){const{navigator:n=j2,read:t=!1,source:s,copiedDuring:l=1500,legacy:a=!1}=e,i=["copy","cut"],r=yl(()=>n&&"clipboard"in n),c=_(()=>r.value||a),u=H(""),p=H(!1),d=I2(()=>p.value=!1,l);function v(){r.value?n.clipboard.readText().then(x=>{u.value=x}):u.value=E()}if(c.value&&t)for(const x of i)Ve(x,v);async function h(x=In(s)){c.value&&x!=null&&(r.value?await n.clipboard.writeText(x):k(x),u.value=x,p.value=!0,d.start())}function k(x){const g=document.createElement("textarea");g.value=x??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function E(){var x,g,b;return(b=(g=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:g.toString())!=null?b:""}return{isSupported:c,text:u,copied:p,copy:h}}const js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ns="__vueuse_ssr_handlers__",z2=q2();function q2(){return Ns in js||(js[Ns]=js[Ns]||{}),js[Ns]}function W2(e,n){return z2[e]||n}function U2(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var G2=Object.defineProperty,Po=Object.getOwnPropertySymbols,K2=Object.prototype.hasOwnProperty,J2=Object.prototype.propertyIsEnumerable,Do=(e,n,t)=>n in e?G2(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,So=(e,n)=>{for(var t in n||(n={}))K2.call(n,t)&&Do(e,t,n[t]);if(Po)for(var t of Po(n))J2.call(n,t)&&Do(e,t,n[t]);return e};const Y2={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Co="vueuse-storage";function bl(e,n,t,s={}){var l;const{flush:a="pre",deep:i=!0,listenToStorageChanges:r=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:p,window:d=An,eventFilter:v,onError:h=P=>{console.error(P)}}=s,k=(p?Ne:H)(n);if(!t)try{t=W2("getDefaultStorage",()=>{var P;return(P=An)==null?void 0:P.localStorage})()}catch(P){h(P)}if(!t)return k;const E=In(n),x=U2(E),g=(l=s.serializer)!=null?l:Y2[x],{pause:b,resume:A}=F2(k,()=>S(k.value),{flush:a,deep:i,eventFilter:v});return d&&r&&(Ve(d,"storage",J),Ve(d,Co,C)),J(),k;function S(P){try{if(P==null)t.removeItem(e);else{const W=g.write(P),z=t.getItem(e);z!==W&&(t.setItem(e,W),d&&d.dispatchEvent(new CustomEvent(Co,{detail:{key:e,oldValue:z,newValue:W,storageArea:t}})))}}catch(W){h(W)}}function B(P){const W=P?P.newValue:t.getItem(e);if(W==null)return c&&E!==null&&t.setItem(e,g.write(E)),E;if(!P&&u){const z=g.read(W);return typeof u=="function"?u(z,E):x==="object"&&!Array.isArray(z)?So(So({},E),z):z}else return typeof W!="string"?W:g.read(W)}function C(P){J(P.detail)}function J(P){if(!(P&&P.storageArea!==t)){if(P&&P.key==null){k.value=E;return}if(!(P&&P.key!==e)){b();try{k.value=B(P)}catch(W){h(W)}finally{P?ct(A):A()}}}}}function Q2(e){return Xc("(prefers-color-scheme: dark)",e)}var Oo=Object.getOwnPropertySymbols,X2=Object.prototype.hasOwnProperty,Z2=Object.prototype.propertyIsEnumerable,e0=(e,n)=>{var t={};for(var s in e)X2.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&Oo)for(var s of Oo(e))n.indexOf(s)<0&&Z2.call(e,s)&&(t[s]=e[s]);return t};function n0(e,n,t={}){const s=t,{window:l=An}=s,a=e0(s,["window"]);let i;const r=yl(()=>l&&"ResizeObserver"in l),c=()=>{i&&(i.disconnect(),i=void 0)},u=_(()=>Array.isArray(e)?e.map(v=>on(v)):[on(e)]),p=fe(u,v=>{if(c(),r.value&&l){i=new ResizeObserver(n);for(const h of v)h&&i.observe(h,a)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{c(),p()};return pt(d),{isSupported:r,stop:d}}function t0(e,n={width:0,height:0},t={}){const{window:s=An,box:l="content-box"}=t,a=_(()=>{var c,u;return(u=(c=on(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),i=H(n.width),r=H(n.height);return n0(e,([c])=>{const u=l==="border-box"?c.borderBoxSize:l==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(s&&a.value){const p=on(e);if(p){const d=s.getComputedStyle(p);i.value=Number.parseFloat(d.width),r.value=Number.parseFloat(d.height)}}else if(u){const p=Array.isArray(u)?u:[u];i.value=p.reduce((d,{inlineSize:v})=>d+v,0),r.value=p.reduce((d,{blockSize:v})=>d+v,0)}else i.value=c.contentRect.width,r.value=c.contentRect.height},t),fe(()=>on(e),c=>{i.value=c?n.width:0,r.value=c?n.height:0}),{width:i,height:r}}const Ro=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ni(e,n={}){const{document:t=Qc,autoExit:s=!1}=n,l=_(()=>{var g;return(g=on(e))!=null?g:t==null?void 0:t.querySelector("html")}),a=H(!1),i=_(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(g=>t&&g in t||l.value&&g in l.value)),r=_(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(g=>t&&g in t||l.value&&g in l.value)),c=_(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(g=>t&&g in t||l.value&&g in l.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(g=>t&&g in t),p=yl(()=>l.value&&t&&i.value!==void 0&&r.value!==void 0&&c.value!==void 0),d=()=>u?(t==null?void 0:t[u])===l.value:!1,v=()=>{if(c.value){if(t&&t[c.value]!=null)return t[c.value];{const g=l.value;if((g==null?void 0:g[c.value])!=null)return!!g[c.value]}}return!1};async function h(){if(!(!p.value||!a.value)){if(r.value)if((t==null?void 0:t[r.value])!=null)await t[r.value]();else{const g=l.value;(g==null?void 0:g[r.value])!=null&&await g[r.value]()}a.value=!1}}async function k(){if(!p.value||a.value)return;v()&&await h();const g=l.value;i.value&&(g==null?void 0:g[i.value])!=null&&(await g[i.value](),a.value=!0)}async function E(){await(a.value?h():k())}const x=()=>{const g=v();(!g||g&&d())&&(a.value=g)};return Ve(t,Ro,x,!1),Ve(()=>on(l),Ro,x,!1),s&&pt(h),{isSupported:p,isFullscreen:a,enter:k,exit:h,toggle:E}}function Zc(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const t=e.parentNode;return!t||t.tagName==="BODY"?!1:Zc(t)}}function s0(e){const n=e||window.event,t=n.target;return Zc(t)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}function eu(e,n=!1){const t=H(n);let s=null,l;fe(Gc(e),r=>{if(r){const c=r;l=c.style.overflow,t.value&&(c.style.overflow="hidden")}},{immediate:!0});const a=()=>{const r=In(e);!r||t.value||(ua&&(s=Ve(r,"touchmove",c=>{s0(c)},{passive:!1})),r.style.overflow="hidden",t.value=!0)},i=()=>{const r=In(e);!r||!t.value||(ua&&(s==null||s()),r.style.overflow=l,t.value=!1)};return pt(i),_({get(){return t.value},set(r){r?a():i()}})}function nu(e,n,t={}){const{window:s=An}=t;return bl(e,n,s==null?void 0:s.sessionStorage,t)}let l0=0;function a0(e,n={}){const t=H(!1),{document:s=Qc,immediate:l=!0,manual:a=!1,id:i=`vueuse_styletag_${++l0}`}=n,r=H(e);let c=()=>{};const u=()=>{if(!s)return;const d=s.getElementById(i)||s.createElement("style");d.isConnected||(d.type="text/css",d.id=i,n.media&&(d.media=n.media),s.head.appendChild(d)),!t.value&&(c=fe(r,v=>{d.textContent=v},{immediate:!0}),t.value=!0)},p=()=>{!s||!t.value||(c(),s.head.removeChild(s.getElementById(i)),t.value=!1)};return l&&!a&&Kc(u),a||pt(p),{id:i,css:r,unload:p,load:u,isLoaded:et(t)}}function i0({window:e=An}={}){if(!e)return{x:H(0),y:H(0)};const n=H(e.scrollX),t=H(e.scrollY);return Ve(e,"scroll",()=>{n.value=e.scrollX,t.value=e.scrollY},{capture:!1,passive:!0}),{x:n,y:t}}function o0(e={}){const{window:n=An,initialWidth:t=1/0,initialHeight:s=1/0,listenOrientation:l=!0,includeScrollbar:a=!0}=e,i=H(t),r=H(s),c=()=>{n&&(a?(i.value=n.innerWidth,r.value=n.innerHeight):(i.value=n.document.documentElement.clientWidth,r.value=n.document.documentElement.clientHeight))};if(c(),Kc(c),Ve("resize",c,{passive:!0}),l){const u=Xc("(orientation: portrait)");fe(u,()=>c())}return{width:i,height:r}}var r0=$({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const n=_(()=>{const s=["font-icon icon"],l=`iconfont icon-${e.icon}`;return s.push(l),s}),t=_(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),en(s).length?s:null});return()=>e.icon?o("span",{key:e.icon,class:n.value,style:t.value}):null}});const tu=({type:e="info",text:n="",vertical:t,color:s},{slots:l})=>{var a;return o("span",{class:["vp-badge",e,{diy:s}],style:{verticalAlign:t??!1,backgroundColor:s??!1}},((a=l.default)==null?void 0:a.call(l))||n)};tu.displayName="Badge";const c0="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",$o=e=>re(e)?e:`${e}px`,su=(e,n=0)=>{const t=Ne(),s=_(()=>$o(mn(e.width)||"100%")),l=H("auto"),a=c=>{if(re(c)){const[u,p]=c.split(":"),d=Number(u)/Number(p);if(!Number.isNaN(d))return d}return typeof c=="number"?c:16/9},i=c=>{const u=mn(e.height),p=a(mn(e.ratio));return u?$o(u):`${Number(c)/p+mn(n)}px`},r=()=>{t.value&&(l.value=i(t.value.clientWidth))};return he(()=>{r(),Oe(n)&&fe(n,()=>r()),Ve("orientationchange",()=>r()),Ve("resize",()=>r())}),{el:t,width:s,height:l}},Mo="https://player.bilibili.com/player.html";var u0=$({name:"BiliBili",props:{bvid:{type:String,default:""},aid:{type:String,default:""},cid:{type:String,default:""},title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},autoplay:Boolean},setup(e){const{el:n,width:t,height:s}=su(e),l=H(!1),a=_(()=>{const{aid:i,bvid:r,cid:c,autoplay:u,time:p,page:d}=e;return i&&c?`${Mo}?aid=${i}&cid=${c}&t=${p}&autoplay=${u?1:0}&page=${d}`:r?`${Mo}?bvid=${r}&t=${p}&autoplay=${u?1:0}`:null});return()=>a.value?[o("div",{class:"bilibili-desc"},o("a",{class:"sr-only",href:a.value},e.title)),o("iframe",{ref:n,src:a.value,title:e.title,class:"bilibili-iframe",allow:c0,style:{width:t.value,height:l.value?s.value:0},onLoad:()=>{l.value=!0}}),l.value?null:o(zt)]:[]}});const p0=["mp4","mp3","webm","ogg","m3u8","hls","ts","flv","mpd","dash"],d0=e=>(e==null?void 0:e.split(".").pop())||"",v0=async(e,n,t,s=!1,l=0)=>{const a=(await m(()=>import("./dash.all.min-0fdf75be.js").then(i=>i.d),["assets/dash.all.min-0fdf75be.js","assets/commonjsHelpers-725317a4.js"])).default;if(a.supportsMediaSource()){const i=a.MediaPlayer().create();i.initialize(e,n,s,l),t(()=>i.destroy())}},h0=async(e,n,t)=>{const s=(await m(()=>import("./mpegts-8aaee227.js").then(l=>l.m),["assets/mpegts-8aaee227.js","assets/commonjsHelpers-725317a4.js"])).default;if(s.isSupported()){const l=s.createPlayer({type:"flv",url:n});l.attachMediaElement(e),l.load(),t(()=>l.destroy())}},m0=async(e,n,t)=>{const s=(await m(()=>import("./hls.min-eefbaad2.js").then(l=>l.h),["assets/hls.min-eefbaad2.js","assets/commonjsHelpers-725317a4.js"])).default;if(e.canPlayType("application/x-mpegURL")||e.canPlayType("application/vnd.apple.mpegURL"))e.src=n;else if(s.isSupported()){const l=new s;l.attachMedia(e),l.on(s.Events.MEDIA_ATTACHED,function(){l.loadSource(n)}),t(()=>l.destroy())}},f0=["no-fullscreen","no-hotkey","no-playback-rate","no-setting","no-mutex","no-plays-inline"],g0=["airplay","autoplay","aspect-ratio","auto-mini","auto-size","auto-orientation","auto-playback","fast-forward","flip","fullscreen-web","lock","loop","is-live","muted","mini-progress-bar","pip","screenshot","subtitle-offset"],k0=["en","pl","cs","es","fa","fr","id","ru"],y0=["zh-cn","zh-tw"],b0=e=>{const n=e.toLowerCase(),t=n.split("-")[0];return y0.includes(n)?n:k0.includes(t)?t:t==="zh"?"zh-cn":"en"};var _0=$({name:"ArtPlayer",inheritAttrs:!1,props:{src:{type:String,required:!0},type:{type:String,default:""},poster:{type:String,default:""},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},config:{type:Object,default:null},customPlayer:{type:Function,default:e=>e}},setup(e,{attrs:n}){const t=vl(),{el:s,width:l,height:a}=su(e,0),i=H(!1);let r;const c=()=>{var d,v,h;const u={theme:"#3eaf7c",fullscreen:!0,playbackRate:!0,setting:!0,container:s.value,poster:e.poster,url:e.src,type:e.type||d0(e.src),lang:b0(t.value),...e.config,useSSR:!1},p=en(n);if(f0.forEach(k=>{p.includes(k)&&(u[Ge(k.replace(/^no-/,""))]=!1)}),g0.forEach(k=>{p.includes(k)&&(u[Ge(k)]=!0)}),u.type){const k=u.customType??(u.customType={});if(p0.includes(u.type.toLowerCase()))switch(u.type){case"m3u8":case"hls":k[d=u.type]??(k[d]=(E,x,g)=>m0(E,x,b=>{g.on("destroy",b)}));break;case"flv":k[v=u.type]??(k[v]=(E,x,g)=>h0(E,x,b=>{g.on("destroy",b)}));break;case"mpd":case"dash":k[h=u.type]??(k[h]=(E,x,g)=>v0(E,x,b=>{g.on("destroy",b)}));break}else console.warn(`[components]: ArtPlayer does not support current file type ${u.type}!`)}return u};return he(async()=>{const{default:u}=await m(()=>import("./artplayer-f3bebc2a.js").then(d=>d.a),["assets/artplayer-f3bebc2a.js","assets/commonjsHelpers-725317a4.js"]),p=new u(c());r=await e.customPlayer(p)||p,i.value=!0}),Nt(()=>{r==null||r.destroy()}),()=>[o("div",{ref:s,class:"vp-artplayer",style:{width:l.value,height:a.value}}),i.value?null:o(zt)]}});const lu=()=>o(le,{name:"back-to-top"},()=>[o("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),o("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);lu.displayName="BackToTopIcon";var w0=$({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const n=be(),t=Wt({"/en/":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}}),s=Ne(),{height:l}=t0(s),{height:a}=o0(),{y:i}=i0(),r=_(()=>n.value.backToTop!==!1&&i.value>e.threshold),c=_(()=>i.value/(l.value-a.value));return he(()=>{s.value=document.body}),()=>o(Mn,{name:"fade"},()=>r.value?o("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:o("svg",{class:"vp-scroll-progress"},o("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),o(lu)]):null)}});const E0=Je({enhance:({app:e})=>{gn("FontIcon")||e.component("FontIcon",r0),gn("Badge")||e.component("Badge",tu),gn("BiliBili")||e.component("BiliBili",u0),gn("ArtPlayer")||e.component("ArtPlayer",_0)},setup:()=>{a0(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>o(w0,{})]});function x0(e,n,t){var s,l,a;n===void 0&&(n=50),t===void 0&&(t={});var i=(s=t.isImmediate)!=null&&s,r=(l=t.callback)!=null&&l,c=t.maxWait,u=Date.now(),p=[];function d(){if(c!==void 0){var h=Date.now()-u;if(h+n>=c)return c-h}return n}var v=function(){var h=[].slice.call(arguments),k=this;return new Promise(function(E,x){var g=i&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,u=Date.now(),!i){var A=e.apply(k,h);r&&r(A),p.forEach(function(S){return(0,S.resolve)(A)}),p=[]}},d()),g){var b=e.apply(k,h);return r&&r(b),E(b)}p.push({resolve:E,reject:x})})};return v.cancel=function(h){a!==void 0&&clearTimeout(a),p.forEach(function(k){return(0,k.reject)(h)}),p=[]},v}const T0=({headerLinkSelector:e,headerAnchorSelector:n,delay:t,offset:s=5})=>{const l=Fe(),i=x0(()=>{var E,x;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<s){Vo(l,"");return}const u=window.innerHeight+r,p=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(p-u)<s,v=Array.from(document.querySelectorAll(e)),k=Array.from(document.querySelectorAll(n)).filter(g=>v.some(b=>b.hash===g.hash));for(let g=0;g<k.length;g++){const b=k[g],A=k[g+1],S=r>=(((E=b.parentElement)==null?void 0:E.offsetTop)??0)-s,B=!A||r<(((x=A.parentElement)==null?void 0:x.offsetTop)??0)-s;if(!(S&&B))continue;const J=decodeURIComponent(l.currentRoute.value.hash),P=decodeURIComponent(b.hash);if(J===P)return;if(d){for(let W=g+1;W<k.length;W++)if(J===decodeURIComponent(k[W].hash))return}Vo(l,P);return}},t);he(()=>{window.addEventListener("scroll",i)}),ul(()=>{window.removeEventListener("scroll",i)})},Vo=async(e,n)=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:n}).finally(()=>e.options.scrollBehavior=t)},L0=".vp-sidebar-link, .toc-link",I0=".header-anchor",A0=200,P0=5,D0=Je({setup(){T0({headerLinkSelector:L0,headerAnchorSelector:I0,delay:A0,offset:P0})}});let au=()=>null;const iu=Symbol(""),S0=e=>{au=e},C0=()=>ge(iu),O0=e=>{e.provide(iu,au)};var R0=$({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(e){const n=C0(),t=Wt({"/en/":{title:"Catalog",empty:"No catalog"},"/":{title:"目录",empty:"暂无目录"}}),s=ce(),l=Fe(),a=pc(),i=u=>{const p=u.I;return typeof p>"u"||p},r=()=>{const u=e.base||s.value.path.replace(/\/[^/]+$/,"/"),p=l.getRoutes(),d=[];return p.filter(({meta:v,path:h})=>{if(!Ct(h,u)||h===u)return!1;if(u==="/"){const k=en(a.value.locales).filter(E=>E!=="/");if(h==="/404.html"||k.some(E=>Ct(h,E)))return!1}return(ht(h,".html")&&!ht(h,"/index.html")||ht(h,"/"))&&i(v)}).map(({path:v,meta:h})=>{const k=v.substring(u.length).split("/").length;return{title:h.t||"",icon:h.i,base:v.replace(/\/[^/]+\/?$/,"/"),order:h.O||null,level:ht(v,"/")?k-1:k,path:v}}).filter(({title:v,level:h})=>v&&h<=e.level).sort(({title:v,level:h,path:k,order:E},{title:x,level:g,path:b,order:A})=>h-g||(ht(k,"/index.html")?-1:ht(b,"/index.html")?1:E===null?A===null?v.localeCompare(x):A:A===null?E:E>0?A>0?E-A:-1:A<0?E-A:1)).forEach(v=>{var h;const{base:k,level:E}=v;switch(E){case 1:d.push(v);break;case 2:{const x=d.find(g=>g.path===k);x&&(x.children??(x.children=[])).push(v);break}default:{const x=d.find(g=>g.path===k.replace(/\/[^/]+\/$/,"/"));if(x){const g=(h=x.children)==null?void 0:h.find(b=>b.path===k);g&&(g.children??(g.children=[])).push(v)}}}}),d},c=_(()=>r());return()=>o("div",{class:"vp-catalog"},[o("h2",{class:"vp-catalog-main-title"},t.value.title),c.value.length?c.value.map(({children:u=[],icon:p,path:d,title:v},h)=>[o("h3",{id:v,class:["vp-catalog-child-title",{"has-children":u.length}]},[o("a",{href:`#${v}`,class:"header-anchor","aria-hidden":!0},"#"),o(Me,{class:"vp-catalog-title",to:d},()=>[e.index?`${h+1}.`:null,p&&n?o(n,{icon:p}):null,v||d])]),u.length?o("ul",{class:"vp-catalog-child-catalogs"},u.map(({children:k=[],icon:E,path:x,title:g},b)=>o("li",{class:"vp-child-catalog"},[o("div",{class:["vp-catalog-sub-title",{"has-children":k.length}]},[o("a",{href:`#${g}`,class:"header-anchor"},"#"),o(Me,{class:"vp-catalog-title",to:x},()=>[e.index?`${h+1}.${b+1}`:null,E&&n?o(n,{icon:E}):null,g||x])]),k.length?o("div",{class:"v-sub-catalogs"},k.map(({icon:A,path:S,title:B},C)=>o(Me,{class:"vp-sub-catalog",to:S},()=>[e.index?`${h+1}.${b+1}.${C+1}`:null,A&&n?o(n,{icon:A}):null,B||S]))):null]))):null]):o("p",{class:"vp-empty-catalog"},t.value.empty)])}}),$0=Je({enhance:({app:e})=>{O0(e),gn("AutoCatalog",e)||e.component("AutoCatalog",R0)}});const M0=o("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[o("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ou=$({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const n=bn(),t=_(()=>e.locales[n.value]??{openInNewWindow:"open in new window"});return()=>o("span",[M0,o("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}}),V0={},F0=Je({enhance({app:e}){e.component("ExternalLinkIcon",o(ou,{locales:V0}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const de={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const n=de.isStarted();e=Nl(e,de.settings.minimum,1),de.status=e===1?null:e;const t=de.render(!n),s=t.querySelector(de.settings.barSelector),l=de.settings.speed,a=de.settings.easing;return t.offsetWidth,j0(i=>{Bs(s,{transform:"translate3d("+Fo(e)+"%,0,0)",transition:"all "+l+"ms "+a}),e===1?(Bs(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Bs(t,{transition:"all "+l+"ms linear",opacity:"0"}),setTimeout(function(){de.remove(),i()},l)},l)):setTimeout(()=>i(),l)}),de},isStarted:()=>typeof de.status=="number",start:()=>{de.status||de.set(0);const e=()=>{setTimeout(()=>{de.status&&(de.trickle(),e())},de.settings.trickleSpeed)};return de.settings.trickle&&e(),de},done:e=>!e&&!de.status?de:de.inc(.3+.5*Math.random()).set(1),inc:e=>{let n=de.status;return n?(typeof e!="number"&&(e=(1-n)*Nl(Math.random()*n,.1,.95)),n=Nl(n+e,0,.994),de.set(n)):de.start()},trickle:()=>de.inc(Math.random()*de.settings.trickleRate),render:e=>{if(de.isRendered())return document.getElementById("nprogress");jo(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=de.settings.template;const t=n.querySelector(de.settings.barSelector),s=e?"-100":Fo(de.status||0),l=document.querySelector(de.settings.parent);return Bs(t,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),l!==document.body&&jo(l,"nprogress-custom-parent"),l==null||l.appendChild(n),n},remove:()=>{No(document.documentElement,"nprogress-busy"),No(document.querySelector(de.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&N0(e)},isRendered:()=>!!document.getElementById("nprogress")},Nl=(e,n,t)=>e<n?n:e>t?t:e,Fo=e=>(-1+e)*100,j0=function(){const e=[];function n(){const t=e.shift();t&&t(n)}return function(t){e.push(t),e.length===1&&n()}}(),Bs=function(){const e=["Webkit","O","Moz","ms"],n={};function t(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(r,c){return c.toUpperCase()})}function s(i){const r=document.body.style;if(i in r)return i;let c=e.length;const u=i.charAt(0).toUpperCase()+i.slice(1);let p;for(;c--;)if(p=e[c]+u,p in r)return p;return i}function l(i){return i=t(i),n[i]??(n[i]=s(i))}function a(i,r,c){r=l(r),i.style[r]=c}return function(i,r){for(const c in r){const u=r[c];u!==void 0&&Object.prototype.hasOwnProperty.call(r,c)&&a(i,c,u)}}}(),ru=(e,n)=>(typeof e=="string"?e:ti(e)).indexOf(" "+n+" ")>=0,jo=(e,n)=>{const t=ti(e),s=t+n;ru(t,n)||(e.className=s.substring(1))},No=(e,n)=>{const t=ti(e);if(!ru(e,n))return;const s=t.replace(" "+n+" "," ");e.className=s.substring(1,s.length-1)},ti=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),N0=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const B0=()=>{he(()=>{const e=Fe(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(t=>{n.has(t.path)||de.start()}),e.afterEach(t=>{n.add(t.path),de.done()})})},H0=Je({setup(){B0()}}),z0=JSON.parse(`{"encrypt":{"config":{}},"author":{"name":"LiCheng","url":"https://gitee.com/licheng1013"},"logo":"/logo.png","repo":"https://gitee.com/licheng1013","themeColor":{"red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f","pink":"#f8bfca"},"locales":{"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/en/",{"text":"Plugins","icon":"alias","link":"/en/plugins"},{"text":"English","icon":"language","link":"/en/english"},{"icon":"link","text":"Links","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java Guide","link":"https://javaguide.cn/"}]},{"text":"Github","icon":"github","link":"https://github.com/licheng1013"}],"sidebar":{"/en/english/":"structure","/en/plugins/":"structure"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"介绍","icon":"creative","link":"/blog/"},{"text":"插件","icon":"alias","link":"/plugins/"},{"text":"个人","icon":"study","link":"/study/"},{"text":"工具","icon":"tool","link":"/util/"},{"icon":"link","text":"友链","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java指南","link":"https://javaguide.cn/"},{"text":"主题文档","link":"https://theme-hope.vuejs.press/zh/"},{"text":"Idea插件","link":"/util/idea.md"}]},{"text":"Gitee镜像文档","icon":"gitee","link":"https://licheng1013.gitee.io/"}],"sidebar":{"/blog/":"structure","/plugins/":"structure","/study/":"structure","/util/":"structure"}}},"footer":"逆水求剑-致永恒 <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728700105340810'crossorigin='anonymous'><\/script>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"blog":{"timeline":"新文档还在编写中！","description":"一个开发者","intro":"/","medias":{"Gitee":"https://gitee.com/licheng1013","Github":"https://github.com/licheng1013"}}}`),q0=H(z0),cu=()=>q0,uu=Symbol(""),W0=()=>{const e=ge(uu);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},U0=(e,n)=>{const{locales:t,...s}=e;return{...s,...t==null?void 0:t[n]}},G0=Je({enhance({app:e}){const n=cu(),t=e._context.provides[Ga],s=_(()=>U0(n.value,t.value));e.provide(uu,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return s.value}}})}});const K0={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.230/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.230/templates/giscus/dark.css",repo:"licheng1013/blog-giscus",repoId:"R_kgDOIVLLNA",categoryId:"DIC_kwDOIVLLNM4CSQfj",category:"Announcements",mapping:"title"};let J0=K0;const pu=Symbol(""),du=()=>ge(pu),Y0=du,Q0=e=>{e.provide(pu,J0)},Bo=["ar","de","gsw","en","es","fa","fr","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var X0=$({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(e){const n=Y0(),t=!!(n.repo&&n.repoId&&n.category&&n.categoryId),{repo:s,repoId:l,category:a,categoryId:i}=n,r=H(!1),c=_(()=>{const p=vl().value;if(Bo.includes(p))return p;const d=p.split("-")[0];return Bo.includes(d)?d:"en"}),u=_(()=>({repo:s,repoId:l,category:a,categoryId:i,lang:c.value,theme:e.darkmode?n.darkTheme||"dark":n.lightTheme||"light",mapping:n.mapping||"pathname",term:e.identifier,inputPosition:n.inputPosition||"top",reactionsEnabled:n.reactionsEnabled===!1?"0":"1",strict:n.strict===!1?"0":"1",loading:n.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return he(async()=>{await m(()=>import("./giscus-fbd30324.js"),[]),r.value=!0}),()=>t?o("div",{id:"comment",class:["giscus-wrapper",{"input-top":n.inputPosition!=="bottom"}]},r.value?o("giscus-widget",u.value):o(zt)):null}}),Z0=$({name:"CommentService",props:{darkmode:Boolean},setup(e){const n=du(),t=ce(),s=be(),l=n.comment!==!1,a=_(()=>s.value.comment||l&&s.value.comment!==!1);return()=>o(X0,{identifier:s.value.commentID||t.value.path,darkmode:e.darkmode,style:{display:a.value?"block":"none"}})}}),e3=Je({enhance:({app:e})=>{Q0(e),e.component("CommentService",Z0)}});const n3=800,t3=2e3,s3={"/en/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"},"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},l3=!1,a3=['.theme-hope-content div[class*="language-"] pre'],Ho=!1,Bl=new Map,i3=()=>{const{copy:e}=H2({legacy:!0}),n=Wt(s3),t=ce(),s=m2(),l=r=>{if(!r.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",n.value.copy),c.setAttribute("data-copied",n.value.copied),r.parentElement&&r.parentElement.insertBefore(c,r),r.setAttribute("copy-code-registered","")}},a=()=>ct().then(()=>new Promise(r=>{setTimeout(()=>{a3.forEach(c=>{document.querySelectorAll(c).forEach(l)}),r()},n3)})),i=(r,c,u)=>{let{innerText:p=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(r.classList.toString())&&(p=p.replace(/^ *(\$|>) /gm,"")),e(p).then(()=>{u.classList.add("copied"),clearTimeout(Bl.get(u));const d=setTimeout(()=>{u.classList.remove("copied"),u.blur(),Bl.delete(u)},t3);Bl.set(u,d)})};he(()=>{(!s.value||Ho)&&a(),Ve("click",r=>{const c=r.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,p=c.nextElementSibling;p&&i(u,p,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,p=u.parentElement,d=u.nextElementSibling;d&&i(p,d,u)}}),fe(()=>t.value.path,()=>{(!s.value||Ho)&&a()})})};var o3=Je({setup:()=>{i3()}});const r3=(e,n)=>n==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var c3=$({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const n=Ne(),t=Ne(),s=H(!0);return he(async()=>{const[{default:l}]=await Promise.all([m(()=>import("./auto-c5e1fff3.js"),[]),new Promise(r=>setTimeout(r,800))]);l.defaults.maintainAspectRatio=!1;const a=r3(Fc(e.config),e.type),i=t.value.getContext("2d");new l(i,a),s.value=!1}),()=>[e.title?o("div",{class:"chartjs-title"},decodeURIComponent(e.title)):null,s.value?o(zt,{class:"chartjs-loading",height:192}):null,o("div",{ref:n,class:"chartjs-wrapper",id:e.id,style:{display:s.value?"none":"block"}},o("canvas",{ref:t,height:400}))]}});let u3={};const vu=Symbol(""),p3=()=>ge(vu),d3=e=>{e.provide(vu,u3)},v3=()=>m(()=>import("./highlight.esm-75b11b9d.js"),[]),h3=()=>m(()=>import("./markdown.esm-0191f9da.js"),[]),m3=()=>m(()=>import("./math.esm-70a288c8.js"),[]),f3=()=>m(()=>import("./notes.esm-a106bb2c.js"),[]),g3=()=>m(()=>import("./reveal.esm-ec5549c1.js"),[]),k3=()=>m(()=>import("./search.esm-7e6792e2.js"),[]),y3=()=>m(()=>import("./zoom.esm-b83b91d0.js"),[]),b3=()=>[g3(),h3(),v3(),m3(),k3(),f3(),y3()];var _3=$({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const n=p3(),t=be(),s=H(""),l=H(!0),a=Ne();let i=null;const r=async c=>{const u=[new Promise(h=>setTimeout(h,800)),...b3()],[,p,...d]=await Promise.all(u),v=new p.default(c,{backgroundTransition:"slide",hash:t.value.layout==="Slide",mouseWheel:t.value.layout==="Slide",transition:"slide",slideNumber:!0,...n,...t.value.reveal||{},embedded:t.value.layout!=="Slide",plugins:[...d.map(({default:h})=>h),...n.plugins??[]]});return await v.initialize(),v};return he(async()=>{const c=a.value;c&&(s.value=Fc(e.code),c.setAttribute("id",e.id),c.setAttribute("data-theme",e.theme),i=await r(c),l.value=!1)}),Nt(()=>{i==null||i.destroy()}),()=>o("div",{class:"vp-reveal"},[o("div",{ref:a,class:["reveal","reveal-viewport"]},o("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s.value}<\/script></section>`})),l.value?o(zt,{class:"reveal-loading",height:400}):null])}});const w3=Je({enhance:({app:e})=>{e.component("ChartJS",c3),d3(e),e.component("Presentation",_3)},setup:()=>{}});let E3={};const hu=Symbol(""),x3=()=>ge(hu),T3=e=>{e.provide(hu,E3)};const L3=".theme-hope-content :not(a) > img:not([no-view])",I3={"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},A3=800,P3='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',D3=e=>re(e)?Array.from(document.querySelectorAll(e)):e.map(n=>Array.from(document.querySelectorAll(n))).flat(),mu=e=>new Promise((n,t)=>{e.complete?n({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>n(mu(e)),e.onerror=s=>t(s))}),S3=()=>{const{isSupported:e,toggle:n}=ni(),t=x3(),s=Wt(I3),l=ce();let a;const i=c=>{c.on("uiRegister",()=>{e&&c.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{n()}}),c.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(u,p)=>{u.setAttribute("download",""),u.setAttribute("target","_blank"),u.setAttribute("rel","noopener"),p.on("change",()=>{u.setAttribute("href",p.currSlide.data.src)})}}),c.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(u,p)=>{const d=[];let v=-1;for(let h=0;h<p.getNumItems();h++){const k=document.createElement("div");k.className="photo-swipe-bullet",k.onclick=E=>{p.goTo(d.indexOf(E.target))},d.push(k),u.appendChild(k)}p.on("change",()=>{v>=0&&d[v].classList.remove("active"),d[p.currIndex].classList.add("active"),v=p.currIndex})}})})},r=()=>Promise.all([m(()=>import("./photoswipe.esm-5794cde2.js"),[]),ct().then(()=>new Promise(c=>setTimeout(c,A3)).then(()=>D3(L3)))]).then(([{default:c},u])=>{const p=u.map(d=>({html:P3,element:d,msrc:d.src}));u.forEach((d,v)=>{const h=()=>{a=new c({preloaderDelay:0,showHideAnimationType:"zoom",...s.value,...t,dataSource:p,index:v,closeOnVerticalDrag:!0,wheelToZoom:!1}),i(a),a.addFilter("thumbEl",()=>d),a.addFilter("placeholderSrc",()=>d.src),a.init()};d.style.cursor="zoom-in",d.addEventListener("click",()=>{h()}),d.addEventListener("keypress",({key:k})=>{k==="Enter"&&h()})}),u.forEach((d,v)=>{mu(d).then(h=>{p.splice(v,1,h),a==null||a.refreshSlideContent(v)})})});he(()=>{Ve("wheel",()=>{a==null||a.close()}),r(),fe(()=>l.value.path,()=>r())})};var C3=Je({enhance:({app:e})=>{T3(e)},setup:()=>{S3()}});function O3(e){return{all:e=e||new Map,on:function(n,t){var s=e.get(n);s?s.push(t):e.set(n,[t])},off:function(n,t){var s=e.get(n);s&&(t?s.splice(s.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var s=e.get(n);s&&s.slice().map(function(l){l(t)}),(s=e.get("*"))&&s.slice().map(function(l){l(n,t)})}}}const fu=Symbol(""),R3=()=>{const e=ge(fu);if(!e)throw new Error("usePWAEvent() is called without provider.");return e},$3=async(e,n={},t=!0)=>{const{register:s}=await m(()=>import("./index-e32a7948.js"),[]);s(e,{ready(l){var a;t&&console.info("[Service Worker]: active"),(a=n.ready)==null||a.call(n,l)},registered(l){var a;t&&console.log("[Service Worker]: registered"),(a=n.registered)==null||a.call(n,l)},cached(l){var a;t&&console.log("[Service Worker]: cached"),(a=n.cached)==null||a.call(n,l)},async updatefound(l){var a;await navigator.serviceWorker.getRegistration()&&(t&&console.log("[Service Worker]: update found"),(a=n.updatefound)==null||a.call(n,l))},updated(l){var a;t&&console.log("[Service Worker]: updated"),(a=n.updated)==null||a.call(n,l)},offline(){var l;t&&console.log("[Service Worker]: offline"),(l=n.offline)==null||l.call(n)},error(l){var a;t&&console.error("[Service Worker]: ",l),(a=n.error)==null||a.call(n,l)}})},M3=async e=>$3(Ie("service-worker.js"),{ready(n){e.emit("ready",n)},registered(n){e.emit("registered",n)},cached(n){e.emit("cached",n)},updatefound(n){e.emit("updatefound",n)},updated(n){const t="service-worker-version",s=Number(localStorage.getItem(t)||0);localStorage.setItem(t,(s+1).toString()),localStorage.removeItem("manifest"),e.emit("updated",n)},offline(){e.emit("offline")},error(n){e.emit("error",n)}}),V3=()=>{const e=O3();cn(fu,e),he(async()=>{var n;let t=!1;(n=navigator.serviceWorker)!=null&&n.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{t||(t=!0,window.location.reload())}),await M3(e)})},gu=()=>o(le,{name:"update"},()=>o("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));gu.displayName="UpdateIcon";const F3={"/en/":{install:"Install",iOSInstall:"Tap the share button and then 'Add to Home Screen'",cancel:"Cancel",close:"Close",prevImage:"Previous Image",nextImage:"Next Image",desc:"Description",feature:"Key Features",explain:"This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",hint:"New content found.",update:"New content is available."},"/":{install:"安装",iOSInstall:"点击分享按钮然后点击“添加到主屏幕”",cancel:"取消",close:"关闭",prevImage:"上一张图片",nextImage:"下一张图片",desc:"详情",feature:"主要特色",explain:"该应用可以安装在你的 PC 或移动设备上。这将使该 Web 应用程序外观和行为与其他应用程序相同。它将在出现在应用程序列表中，并可以固定到主屏幕，开始菜单或任务栏。此 Web 应用程序还将能够与其他应用程序和你的操作系统安全地进行交互。",hint:"发现新内容可用",update:"新内容已就绪"}};const j3=e=>{const n=e.waiting;if(!n)return;const t=new MessageChannel;n.postMessage({type:"SKIP_WAITING"},[t.port2])};var N3=$({name:"SWUpdatePopup",slots:Object,setup(e,{slots:n}){const t=Wt(F3),s=Ne(),l=_(()=>!!s.value),a=()=>{s.value&&(j3(s.value),s.value=void 0)};return he(()=>{R3().on("updated",i=>{i&&(s.value=i)})}),()=>o(Mn,{name:"popup"},()=>{var i;return((i=n.default)==null?void 0:i.call(n,{enabled:l.value,reload:a}))||(l.value?o("button",{type:"button",class:"sw-update-popup",tabindex:0,onClick:()=>a()},[t.value.update,o("span",{class:"icon-wrapper"},o(gu))]):null)})}});const B3=Je({setup:()=>{V3()},rootComponents:[N3]}),ku=()=>{const e=ce();return _(()=>e.value.readingTime??null)},pa=typeof{"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},yu=(e,n)=>{const{minutes:t,words:s}=e,{less1Minute:l,word:a,time:i}=n;return{time:t<1?l:i.replace("$time",Math.round(t).toString()),words:a.replace("$word",s.toString())}},zo={words:"",time:""},bu=()=>pa?Wt(pa):_(()=>null),H3=()=>{if(typeof pa>"u")return _(()=>zo);const e=ku(),n=bu();return _(()=>e.value&&n.value?yu(e.value,n.value):zo)},jn=()=>cu(),ae=()=>W0(),Ut=()=>_(()=>!!jn().value.pure);var qo=$({name:"EmptyComponent",setup:()=>()=>null});const z3="719px",q3="1440px",W3="false",si={mobileBreakPoint:z3,pcBreakPoint:q3,enableThemeColor:W3},li={"/en/english/":["study","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19"],"/en/plugins/":["gorm","jorm","vue-admin"],"/blog/":["body","desc","video","random"],"/plugins/":["gorm","io-game","java-orm","request-tool","rocket-cat","rs-orm","vue-admin"],"/study/":[{text:"Game",prefix:"game/",collapsible:!0,icon:"app",children:["cocos",{text:"Design",prefix:"design/",collapsible:!0,children:["chess"]},"game","godot","unity","unity-camera"]},{text:"Go",prefix:"go/",collapsible:!0,icon:"hot",children:["gin","go","gorm","socket","ssh","wails","qiniu","try","util","design-mode","difficult"]},{text:"Java",prefix:"java/",collapsible:!0,icon:"java",children:[{text:"Design Mode",prefix:"design-mode/",collapsible:!0,children:["proxy","design-mode"]},"hutool","io-game","java","maven","mqtt","mybatis","protostuff","redisson","rocket-mq","spring-boot","spring-boot-demo","spring-cloud","spring-cloud-alibaba","transaction","data-struct","kd"]},{text:"Linux",prefix:"linux/",collapsible:!0,icon:"linux",children:["docker","git","linux","mysql","nginx","shell","server"]},{text:"Try",prefix:"try/",collapsible:!0,icon:"support",children:["antlr","flutter","python","rust"]},{text:"Web",prefix:"web/",collapsible:!0,icon:"leaf",children:["axios","css","electron","node","vite","vue"]}],"/util/":["dev","common"]},_u=e=>{const{icon:n="",color:t,size:s}=e,l={};return t&&(l.color=t),s&&(l.height=Number.isNaN(Number(s))?s:`${s}px`),ut(n)?o("img",{class:"icon",src:n,"no-view":"",style:l}):kl(n)?o("img",{class:"icon",src:Ie(n),"no-view":"",style:l}):o(Ze("FontIcon"),e)};_u.displayName="HopeIcon";var ze=_u,we=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(we||{}),wu=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(wu||{});const xt=(e,n,t=!1)=>{const s=encodeURI(n);let l=Ot(e,Oc(s));l.name==="404"&&(l=Ot(e,s));const{fullPath:a,meta:i,name:r}=l;return{text:!t&&i[we.shortTitle]?i[we.shortTitle]:i[we.title]||n,link:r==="404"?n:a,...i[we.icon]?{icon:i[we.icon]}:{}}},xs=()=>{const e=Fe(),n=_n();return t=>{if(t)if(kl(t))n.path!==t&&e.push(t);else if(ut(t)||sc(t))window&&window.open(t);else{const s=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${s}/${encodeURI(t)}`)}}},Eu=()=>{const e=ae(),n=be();return _(()=>{const{author:t}=n.value;return t?ms(t):t===!1?[]:ms(e.value.author,!1)})},U3=()=>{const e=be();return _(()=>$c(e.value.category).map(n=>{var t,s;return{name:n,path:((s=(t=ge(Symbol.for("categoryMap")))==null?void 0:t.value.map[n])==null?void 0:s.path)||""}}))},G3=()=>{const e=be();return _(()=>Mc(e.value.tag).map(n=>{var t,s;return{name:n,path:((s=(t=ge(Symbol.for("tagMap")))==null?void 0:t.value.map[n])==null?void 0:s.path)||""}}))},K3=()=>{const e=be(),n=ce();return _(()=>{const t=Xa(e.value.date);if(t)return t;const{createdTime:s}=n.value.git||{};return s?new Date(s):null})},J3=()=>{const e=ae(),n=ce(),t=be(),s=Eu(),l=U3(),a=G3(),i=K3(),r=ku(),c=H3(),u=_(()=>({author:s.value,category:l.value,date:i.value,localizedDate:n.value.localizedDate,tag:a.value,isOriginal:t.value.isOriginal||!1,readingTime:r.value,readingTimeLocale:c.value,pageview:"pageview"in t.value?t.value.pageview:!0})),p=_(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:u,items:p}},{mobileBreakPoint:Y3,pcBreakPoint:Q3}=si,Wo=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Ts=()=>{const e=H(!1),n=H(!1),t=()=>{e.value=window.innerWidth<=(Wo(Y3)??719),n.value=window.innerWidth>=(Wo(Q3)??1440)};return he(()=>{t(),Ve("resize",t,!1),Ve("orientationchange",t,!1)}),{isMobile:e,isPC:n}},xu=Symbol(""),Ls=()=>{const e=ge(xu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},X3=e=>{const n=jn(),t=Q2(),s=bl("vuepress-theme-hope-scheme","auto"),l=_(()=>n.value.darkmode||"switch"),a=_(()=>{const r=l.value;return r==="disable"?!1:r==="enable"?!0:r==="auto"?t.value:r==="toggle"?s.value==="dark":s.value==="dark"||s.value==="auto"&&t.value}),i=_(()=>{const r=l.value;return r==="switch"||r==="toggle"});e.provide(xu,{canToggle:i,config:l,isDarkmode:a,status:s}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>a.value}})},Z3=()=>{const{isDarkmode:e}=Ls(),n=(t=e.value)=>document.documentElement.setAttribute("data-theme",t?"dark":"light");he(()=>{fe(e,n,{immediate:!0})})};var Ue=$({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:n,emit:t,slots:s}){const l=_n(),a=pc(),i=jt(e,"config"),r=_(()=>ut(i.value.link)),c=_(()=>sc(i.value.link)||T1(i.value.link)),u=_(()=>c.value?void 0:i.value.target||(r.value?"_blank":void 0)),p=_(()=>u.value==="_blank"),d=_(()=>!r.value&&!c.value&&!p.value),v=_(()=>c.value?void 0:i.value.rel||(p.value?"noopener noreferrer":void 0)),h=_(()=>i.value.ariaLabel||i.value.text),k=_(()=>{if(e.exact)return!1;const x=en(a.value.locales);return x.length?x.every(g=>g!==i.value.link):i.value.link!=="/"}),E=_(()=>d.value?i.value.activeMatch?new RegExp(i.value.activeMatch).test(l.path):k.value?Ct(l.path,i.value.link):l.path===i.value.link:!1);return()=>{const{before:x,after:g,default:b}=s,{text:A,icon:S,link:B}=i.value;return d.value?o(Me,{to:B,"aria-label":h.value,...n,class:["nav-link",{active:E.value},n.class],onFocusout:()=>t("focusout")},()=>b?b():[x?x():o(ze,{icon:S}),A,g==null?void 0:g()]):o("a",{href:B,rel:v.value,target:u.value,"aria-label":h.value,...n,class:["nav-link",n.class],onFocusout:()=>t("focusout")},b?b():[x?x():o(ze,{icon:S}),A,e.noExternalLinkIcon?null:o(ou),g==null?void 0:g()])}}});const Rt=(e,n,t=!1)=>"activeMatch"in n?new RegExp(n.activeMatch).test(e.path):ei(e,n.link)?!0:n.children&&!t?n.children.some(s=>Rt(e,s)):!1,Tu=(e,n)=>n.type==="group"?n.children.some(t=>t.type==="group"?Tu(e,t):t.type==="page"&&Rt(e,t,!0))||"prefix"in n&&ei(e,n.prefix):!1,Lu=(e,n)=>re(e.link)?o(Ue,{...n,config:e}):o("p",n,[o(ze,{icon:e.icon}),e.text]),Iu=e=>{const n=_n();return e?o("ul",{class:"vp-sidebar-sub-headers"},e.map(t=>{const s=Rt(n,t,!0);return o("li",{class:"vp-sidebar-sub-header"},[Lu(t,{class:["vp-sidebar-link","vp-heading",{active:s}]}),Iu(t.children)])})):null},Hl=(e="",n="")=>kl(n)?n:`${w1(e)}${n}`,em=(e,n)=>{const t=ce();return{type:"heading",text:e.title,link:`${t.value.path}#${e.slug}`,children:ai(e.children,n)}},ai=(e,n)=>n>0?e.map(t=>em(t,n-1)):[],Au=e=>{const n=ce();return ai(n.value.headers,e)},da=(e,n,t="")=>{const s=Fe(),l=ce(),a=(i,r=t)=>{var c;const u=re(i)?xt(s,Hl(r,i)):i.link?{...i,...el(i.link)?{}:{link:xt(s,Hl(r,i.link)).link}}:i;if("children"in u){const p=Hl(r,u.prefix),d=u.children==="structure"?li[p]:u.children;return{type:"group",...u,prefix:p,children:d.map(v=>a(v,p))}}return{type:"page",...u,children:u.link===l.value.path?ai(((c=l.value.headers[0])==null?void 0:c.level)===1?l.value.headers[0].children:l.value.headers,n):[]}};return e.map(i=>a(i))},nm=(e,n)=>{const t=ce(),s=en(e).sort((l,a)=>a.length-l.length);for(const l of s)if(Ct(decodeURI(t.value.path),l)){const a=e[l];return a?da(a==="structure"?li[l]:a==="heading"?Au(n):a,n,l):[]}return console.warn(`${t.value.path} is missing sidebar config.`),[]},tm=(e,n)=>{const t=bn();return e===!1?[]:e==="heading"?Au(n):e==="structure"?da(li[t.value],n,t.value):X(e)?da(e,n):dl(e)?nm(e,n):[]},Pu=Symbol(""),sm=()=>{const e=be(),n=ae(),t=_(()=>e.value.home?!1:e.value.sidebar??n.value.sidebar??"structure"),s=_(()=>e.value.headerDepth??n.value.headerDepth??2),l=_(()=>tm(t.value,s.value));cn(Pu,l)},ii=()=>{const e=ge(Pu);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var lm=$({name:"PageFooter",setup(){const e=be(),n=ae(),t=Eu(),s=_(()=>{const{copyright:i,footer:r}=e.value;return r!==!1&&!!(i||r||n.value.displayFooter)}),l=_(()=>{const{footer:i}=e.value;return i===!1?!1:re(i)?i:n.value.footer||""}),a=_(()=>"copyright"in e.value?e.value.copyright:"copyright"in n.value?n.value.copyright:t.value.length?`Copyright © ${new Date().getFullYear()} ${t.value[0].name}`:!1);return()=>s.value?o("footer",{class:"vp-footer-wrapper"},[l.value?o("div",{class:"vp-footer",innerHTML:l.value}):null,a.value?o("div",{class:"vp-copyright",innerHTML:a.value}):null]):null}}),Du=$({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:n}){const t=ce(),s=jt(e,"config"),l=_(()=>s.value.ariaLabel||s.value.text),a=H(!1);fe(()=>t.value.path,()=>{a.value=!1});const i=r=>{r.detail===0&&(a.value=!a.value)};return()=>{var r;return o("div",{class:["dropdown-wrapper",{open:a.value}]},[o("button",{type:"button",class:"dropdown-title","aria-label":l.value,onClick:i},[((r=n.title)==null?void 0:r.call(n))||o("span",{class:"title"},[o(ze,{icon:s.value.icon}),e.config.text]),o("span",{class:"arrow"}),o("ul",{class:"nav-dropdown"},s.value.children.map((c,u)=>{const p=u===s.value.children.length-1;return o("li",{class:"dropdown-item"},"children"in c?[o("h4",{class:"dropdown-subtitle"},c.link?o(Ue,{config:c,onFocusout:()=>{c.children.length===0&&p&&(a.value=!1)}}):o("span",c.text)),o("ul",{class:"dropdown-subitem-wrapper"},c.children.map((d,v)=>o("li",{class:"dropdown-subitem"},o(Ue,{config:d,onFocusout:()=>{v===c.children.length-1&&p&&(a.value=!1)}}))))]:o(Ue,{config:c,onFocusout:()=>{p&&(a.value=!1)}}))}))])])}}});const Su=()=>o(le,{name:"i18n"},()=>[o("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);Su.displayName="I18nIcon";const Cu=(e,n,t="")=>re(n)?xt(e,`${t}${n}`):"children"in n?{...n,...n.link&&!el(n.link)?xt(e,`${t}${n.link}`):{},children:n.children.map(s=>Cu(e,s,`${t}${n.prefix||""}`))}:{...n,link:el(n.link)?n.link:xt(e,`${t}${n.link}`).link},Ou=()=>{const e=ae(),n=Fe(),t=()=>(e.value.navbar||[]).map(l=>Cu(n,l)),s=H(t());return fe(e,()=>{s.value=t()}),s},am=()=>{const e=Fe(),n=_n(),t=bn(),s=Ht(),l=jn(),a=ae();return _(()=>{const i=en(s.value.locales),r=qt(l.value.extraLocales??{});if(i.length<2&&!r.length)return null;const{path:c,fullPath:u}=e.currentRoute.value,{navbarLocales:p}=a.value;return{text:"",ariaLabel:p==null?void 0:p.selectLangAriaLabel,children:[...i.map(d=>{var v,h,k;const E=((v=s.value.locales)==null?void 0:v[d])??{},x=((h=l.value.locales)==null?void 0:h[d])??{},g=E.lang||"",b=((k=x.navbarLocales)==null?void 0:k.langName)??g;let A;if(g===s.value.lang)A=c;else{const S=c.replace(t.value,d);A=e.getRoutes().some(B=>B.path===S)?u.replace(c,S):x.home??d}return{text:b,link:A}}),...r.map(([d,v])=>({text:d,link:v.replace(":route",n.path.replace(t.value,""))}))]}})},im=()=>{const e=ae(),n=_(()=>e.value.repo||null),t=_(()=>n.value?d2(n.value):null),s=_(()=>n.value?jc(n.value):null),l=_(()=>t.value?e.value.repoLabel??(s.value===null?"Source":s.value):null);return _(()=>!t.value||!l.value||e.value.repoDisplay===!1?null:{type:s.value||"Source",label:l.value,link:t.value})};var om=$({name:"LanguageDropdown",setup(){const e=am();return()=>e.value?o("div",{class:"nav-item"},o(Du,{class:"i18n-dropdown",config:e.value},{title:()=>{var n;return o(Su,{"aria-label":(n=e.value)==null?void 0:n.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),rm=$({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const n=ce(),t=jt(e,"config"),s=_(()=>t.value.ariaLabel||t.value.text),l=H(!1);fe(()=>n.value.path,()=>{l.value=!1});const a=(i,r)=>r[r.length-1]===i;return()=>[o("button",{type:"button",class:["nav-screen-dropdown-title",{active:l.value}],"aria-label":s.value,onClick:()=>{l.value=!l.value}},[o("span",{class:"title"},[o(ze,{icon:t.value.icon}),e.config.text]),o("span",{class:["arrow",l.value?"down":"end"]})]),o("ul",{class:["nav-screen-dropdown",{hide:!l.value}]},t.value.children.map(i=>o("li",{class:"dropdown-item"},"children"in i?[o("h4",{class:"dropdown-subtitle"},i.link?o(Ue,{config:i,onFocusout:()=>{a(i,t.value.children)&&i.children.length===0&&(l.value=!1)}}):o("span",i.text)),o("ul",{class:"dropdown-subitem-wrapper"},i.children.map(r=>o("li",{class:"dropdown-subitem"},o(Ue,{config:r,onFocusout:()=>{a(r,i.children)&&a(i,t.value.children)&&(l.value=!1)}}))))]:o(Ue,{config:i,onFocusout:()=>{a(i,t.value.children)&&(l.value=!1)}}))))]}}),cm=$({name:"NavScreenLinks",setup(){const e=Ou();return()=>e.value.length?o("nav",{class:"nav-screen-links"},e.value.map(n=>o("div",{class:"navbar-links-item"},"children"in n?o(rm,{config:n}):o(Ue,{config:n})))):null}});const Ru=()=>o(le,{name:"dark"},()=>o("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Ru.displayName="DarkIcon";const $u=()=>o(le,{name:"light"},()=>o("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));$u.displayName="LightIcon";const Mu=()=>o(le,{name:"auto"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Mu.displayName="AutoIcon";const Vu=()=>o(le,{name:"enter-fullscreen"},()=>o("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Vu.displayName="EnterFullScreenIcon";const Fu=()=>o(le,{name:"cancel-fullscreen"},()=>o("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Fu.displayName="CancelFullScreenIcon";const ju=()=>o(le,{name:"outlook"},()=>[o("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);ju.displayName="OutlookIcon";var Nu=$({name:"AppearanceSwitch",setup(){const{config:e,status:n}=Ls(),t=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"};return()=>o("button",{type:"button",id:"appearance-switch",onClick:()=>t()},[o(Mu,{style:{display:n.value==="auto"?"block":"none"}}),o(Ru,{style:{display:n.value==="dark"?"block":"none"}}),o($u,{style:{display:n.value==="light"?"block":"none"}})])}}),um=$({name:"AppearanceMode",setup(){const e=ae(),{canToggle:n}=Ls(),t=_(()=>e.value.outlookLocales.darkmode);return()=>n.value?o("div",{class:"appearance-wrapper"},[o("label",{class:"appearance-title",for:"appearance-switch"},t.value),o(Nu)]):null}});const zl="VUEPRESS_THEME_COLOR";var pm=$({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const n=(t="")=>{const s=document.documentElement.classList,l=en(e.themeColor);if(!t){localStorage.removeItem(zl),s.remove(...l);return}s.remove(...l.filter(a=>a!==t)),s.add(t),localStorage.setItem(zl,t)};return he(()=>{const t=localStorage.getItem(zl);t&&n(t)}),()=>o("ul",{id:"theme-color-picker"},[o("li",o("span",{class:"theme-color",onClick:()=>n()})),qt(e.themeColor).map(([t,s])=>o("li",o("span",{style:{background:s},onClick:()=>n(t)})))])}});const Tt=si.enableThemeColor==="true",dm=Tt?r2(qt(si).filter(([e])=>e.startsWith("theme-"))):{};var vm=$({name:"ThemeColor",setup(){const e=ae(),n=_(()=>e.value.outlookLocales.themeColor);return()=>Tt?o("div",{class:"theme-color-wrapper"},[o("label",{class:"theme-color-title",for:"theme-color-picker"},n.value),o(pm,{themeColor:dm})]):null}}),Bu=$({name:"ToggleFullScreenButton",setup(){const e=ae(),{isSupported:n,isFullscreen:t,toggle:s}=ni(),l=_(()=>e.value.outlookLocales.fullscreen);return()=>n?o("div",{class:"full-screen-wrapper"},[o("label",{class:"full-screen-title",for:"full-screen-switch"},l.value),o("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>s()},t.value?o(Fu):o(Vu))]):null}}),Hu=$({name:"OutlookSettings",setup(){const e=jn(),n=Ut(),t=_(()=>!n.value&&e.value.fullscreen);return()=>o(hl,()=>[Tt?o(vm):null,o(um),t.value?o(Bu):null])}}),hm=$({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:n,slots:t}){const s=ce(),{isMobile:l}=Ts(),a=Ne(),i=eu(a);return he(()=>{a.value=document.body,fe(l,r=>{!r&&e.show&&(i.value=!1,n("close"))}),fe(()=>s.value.path,()=>{i.value=!1,n("close")})}),Nt(()=>{i.value=!1}),()=>o(Mn,{name:"fade",onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>{var r,c;return e.show?o("div",{id:"nav-screen"},o("div",{class:"vp-nav-screen-container"},[(r=t.before)==null?void 0:r.call(t),o(cm),o("div",{class:"vp-outlook-wrapper"},o(Hu)),(c=t.after)==null?void 0:c.call(t)])):null})}}),mm=$({name:"NavbarBrand",setup(){const e=bn(),n=Ht(),t=ae(),s=_(()=>t.value.home||e.value),l=_(()=>n.value.title),a=_(()=>t.value.navTitle??l.value),i=_(()=>t.value.logo?Ie(t.value.logo):null),r=_(()=>t.value.logoDark?Ie(t.value.logoDark):null);return()=>o(Me,{to:s.value,class:"vp-brand"},()=>[i.value?o("img",{class:["vp-nav-logo",{light:!!r.value}],src:i.value,alt:l.value}):null,r.value?o("img",{class:["vp-nav-logo dark"],src:r.value,alt:l.value}):null,a.value?o("span",{class:["vp-site-name",{"hide-in-pad":i.value&&t.value.hideSiteNameOnMobile!==!1}]},a.value):null])}}),fm=$({name:"NavbarLinks",setup(){const e=Ou();return()=>e.value.length?o("nav",{class:"vp-nav-links"},e.value.map(n=>o("div",{class:"nav-item hide-in-mobile"},"children"in n?o(Du,{config:n}):o(Ue,{config:n})))):null}}),gm=$({name:"RepoLink",components:{BitbucketIcon:zc,GiteeIcon:Hc,GitHubIcon:Nc,GitLabIcon:Bc,SourceIcon:qc},setup(){const e=im();return()=>e.value?o("div",{class:"nav-item vp-repo"},o("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},o(Ze(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const zu=({active:e=!1},{emit:n})=>o("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>n("toggle")},o("span",[o("span",{class:"vp-top"}),o("span",{class:"vp-middle"}),o("span",{class:"vp-bottom"})]));zu.displayName="ToggleNavbarButton";var km=zu;const va=(e,{emit:n})=>o("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>n("toggle")},o("span",{class:"icon"}));va.displayName="ToggleSidebarButton",va.emits=["toggle"];var ym=va,bm=$({name:"OutlookButton",setup(){const{isSupported:e}=ni(),n=jn(),t=Ut(),s=ce(),{canToggle:l}=Ls(),a=H(!1),i=_(()=>!t.value&&n.value.fullscreen&&e);return fe(()=>s.value.path,()=>{a.value=!1}),()=>l.value||i.value||Tt?o("div",{class:"nav-item hide-in-mobile"},l.value&&!i.value&&!Tt?o(Nu):i.value&&!l.value&&!Tt?o(Bu):o("button",{type:"button",class:["outlook-button",{open:a.value}],tabindex:"-1","aria-hidden":!0},[o(ju),o("div",{class:"outlook-dropdown"},o(Hu))])):null}}),_m=$({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:n,slots:t}){const s=ae(),{isMobile:l}=Ts(),a=H(!1),i=_(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||l.value)}),r=_(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:mm,Language:om,Links:fm,Repo:gm,Outlook:bm,Search:gn("Docsearch")?Ze("Docsearch"):gn("SearchBox")?Ze("SearchBox"):qo},u=p=>c[p]??(gn(p)?Ze(p):qo);return()=>{var p,d,v,h,k,E;return[o("header",{id:"navbar",class:["vp-navbar",{"auto-hide":i.value,"hide-icon":s.value.navbarIcon===!1}]},[o("div",{class:"vp-navbar-start"},[o(ym,{onToggle:()=>{a.value&&(a.value=!1),n("toggleSidebar")}}),(p=t.startBefore)==null?void 0:p.call(t),(r.value.start||[]).map(x=>o(u(x))),(d=t.startAfter)==null?void 0:d.call(t)]),o("div",{class:"vp-navbar-center"},[(v=t.centerBefore)==null?void 0:v.call(t),(r.value.center||[]).map(x=>o(u(x))),(h=t.centerAfter)==null?void 0:h.call(t)]),o("div",{class:"vp-navbar-end"},[(k=t.endBefore)==null?void 0:k.call(t),(r.value.end||[]).map(x=>o(u(x))),(E=t.endAfter)==null?void 0:E.call(t),o(km,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),o(hm,{show:a.value,onClose:()=>{a.value=!1}},{before:()=>{var x;return(x=t.screenTop)==null?void 0:x.call(t)},after:()=>{var x;return(x=t.screenBottom)==null?void 0:x.call(t)}})]}}}),wm=$({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const n=_n();return()=>[Lu(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Rt(n,e.config,!0)}],exact:!0}),Iu(e.config.children)]}}),Em=$({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:n}){const t=_n(),s=_(()=>Rt(t,e.config)),l=_(()=>Rt(t,e.config,!0));return()=>{const{collapsible:a,children:i=[],icon:r,prefix:c,link:u,text:p}=e.config;return o("section",{class:"vp-sidebar-group"},[o(a?"button":"p",{class:["vp-sidebar-heading",{clickable:a||u,exact:l.value,active:s.value}],...a?{type:"button",onClick:()=>n("toggle"),onKeydown:d=>{d.key==="Enter"&&n("toggle")}}:{}},[o(ze,{icon:r}),u?o(Ue,{class:"vp-sidebar-title",config:{text:p,link:u},noExternalLinkIcon:!0}):o("span",{class:"vp-sidebar-title"},p),a?o("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!a?o(qu,{key:c,config:i}):null])}}}),qu=$({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const n=_n(),t=H(-1),s=l=>{t.value=l===t.value?-1:l};return fe(()=>n.path,()=>{const l=e.config.findIndex(a=>Tu(n,a));t.value=l},{immediate:!0,flush:"post"}),()=>o("ul",{class:"vp-sidebar-links"},e.config.map((l,a)=>o("li",l.type==="group"?o(Em,{config:l,open:a===t.value,onToggle:()=>s(a)}):o(wm,{config:l}))))}}),xm=$({name:"SideBar",slots:Object,setup(e,{slots:n}){const t=_n(),s=ae(),l=ii(),a=Ne();return he(()=>{fe(()=>t.hash,i=>{const r=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${i}"]`);if(!r)return;const{top:c,height:u}=a.value.getBoundingClientRect(),{top:p,height:d}=r.getBoundingClientRect();p<c?r.scrollIntoView(!0):p+d>c+u&&r.scrollIntoView(!1)})}),()=>{var i,r,c;return o("aside",{ref:a,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}]},[(i=n.top)==null?void 0:i.call(n),((r=n.default)==null?void 0:r.call(n))||o(qu,{config:l.value}),(c=n.bottom)==null?void 0:c.call(n)])}}}),oi=$({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:n}){const t=Fe(),s=ce(),l=be(),a=ae(),{isMobile:i,isPC:r}=Ts(),[c,u]=To(!1),[p,d]=To(!1),v=ii(),h=H(!1),k=_(()=>e.noNavbar||l.value.navbar===!1||a.value.navbar===!1?!1:!!(s.value.title||a.value.logo||a.value.repo||a.value.navbar)),E=_(()=>e.noSidebar?!1:l.value.sidebar!==!1&&v.value.length!==0&&!l.value.home),x=_(()=>e.noToc||l.value.home?!1:l.value.toc||a.value.toc!==!1&&l.value.toc!==!1),g={x:0,y:0},b=C=>{g.x=C.changedTouches[0].clientX,g.y=C.changedTouches[0].clientY},A=C=>{const J=C.changedTouches[0].clientX-g.x,P=C.changedTouches[0].clientY-g.y;Math.abs(J)>Math.abs(P)*1.5&&Math.abs(J)>40&&(J>0&&g.x<=80?u(!0):u(!1))},S=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let B=0;return Ve("scroll",L2(()=>{const C=S();C<=58||C<B?h.value=!1:B+200<C&&!c.value&&(h.value=!0),B=C},300,!0)),fe(i,C=>{C||u(!1)}),he(()=>{const C=eu(document.body);fe(c,P=>{C.value=P});const J=t.afterEach(()=>{u(!1)});Nt(()=>{C.value=!1,J()})}),()=>o(gn("GlobalEncrypt")?Ze("GlobalEncrypt"):Dc,()=>o("div",{class:["theme-container",{"no-navbar":!k.value,"no-sidebar":!E.value&&!(n.sidebar||n.sidebarTop||n.sidebarBottom),"has-toc":x.value,"hide-navbar":h.value,"sidebar-collapsed":!i.value&&!r.value&&p.value,"sidebar-open":i.value&&c.value},e.containerClass,l.value.containerClass||""],onTouchStart:b,onTouchEnd:A},[k.value?o(_m,{onToggleSidebar:()=>u()},{startBefore:()=>{var C;return(C=n.navbarStartBefore)==null?void 0:C.call(n)},startAfter:()=>{var C;return(C=n.navbarStartAfter)==null?void 0:C.call(n)},centerBefore:()=>{var C;return(C=n.navbarCenterBefore)==null?void 0:C.call(n)},centerAfter:()=>{var C;return(C=n.navbarCenterAfter)==null?void 0:C.call(n)},endBefore:()=>{var C;return(C=n.navbarEndBefore)==null?void 0:C.call(n)},endAfter:()=>{var C;return(C=n.navbarEndAfter)==null?void 0:C.call(n)},screenTop:()=>{var C;return(C=n.navScreenTop)==null?void 0:C.call(n)},screenBottom:()=>{var C;return(C=n.navScreenBottom)==null?void 0:C.call(n)}}):null,o(Mn,{name:"fade"},()=>c.value?o("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),o(Mn,{name:"fade"},()=>i.value?null:o("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},o("span",{class:["arrow",p.value?"end":"start"]}))),o(xm,{},{...n.sidebar?{default:()=>n.sidebar()}:{},top:()=>{var C;return(C=n.sidebarTop)==null?void 0:C.call(n)},bottom:()=>{var C;return(C=n.sidebarBottom)==null?void 0:C.call(n)}}),n.default(),o(lm)]))}}),me=$({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:n}){const t=l=>{l.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,l.style.transform="translateY(-20px)",l.style.opacity="0"},s=l=>{l.style.transform="translateY(0)",l.style.opacity="1"};return()=>o(e.type==="single"?Mn:c1,{name:"drop",appear:e.appear,onAppear:t,onAfterAppear:s,onEnter:t,onAfterEnter:s,onBeforeLeave:t},()=>n.default())}});const ha=({custom:e})=>o(Ka,{class:["theme-hope-content",{custom:e}]});ha.displayName="MarkdownContent",ha.props={custom:Boolean};var ri=ha;const Wu=()=>o(le,{name:"author"},()=>o("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Wu.displayName="AuthorIcon";const Uu=()=>o(le,{name:"calendar"},()=>o("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Uu.displayName="CalendarIcon";const Gu=()=>o(le,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Gu.displayName="CategoryIcon";const Ku=()=>o(le,{name:"print"},()=>o("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Ku.displayName="PrintIcon";const Ju=()=>o(le,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Ju.displayName="TagIcon";const Yu=()=>o(le,{name:"timer"},()=>o("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Yu.displayName="TimerIcon";const Qu=()=>o(le,{name:"word"},()=>[o("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),o("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Qu.displayName="WordIcon";const nt=()=>{const e=ae();return _(()=>e.value.metaLocales)};var Tm=$({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const n=nt();return()=>e.author.length?o("span",{class:"page-author-info","aria-label":`${n.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Wu),o("span",e.author.map(t=>t.url?o("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):o("span",{class:"page-author-item"},t.name))),o("span",{property:"author",content:e.author.map(t=>t.name).join(", ")})]):null}}),Lm=$({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const n=Fe(),t=ce(),s=nt(),l=(a,i="")=>{i&&t.value.path!==i&&(a.preventDefault(),n.push(i))};return()=>e.category.length?o("span",{class:"page-category-info","aria-label":`${s.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Gu),e.category.map(({name:a,path:i})=>o("span",{class:["page-category-item",{[`category${gl(a,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:r=>l(r,i)},a)),o("meta",{property:"articleSection",content:e.category.map(({name:a})=>a).join(",")})]):null}}),Im=$({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const n=vl(),t=nt();return()=>e.date?o("span",{class:"page-date-info","aria-label":`${t.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Uu),o("span",o(hl,()=>e.localizedDate||e.date.toLocaleDateString(n.value))),o("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),Am=$({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const n=nt();return()=>e.isOriginal?o("span",{class:"page-original-info"},n.value.origin):null}}),Pm=$({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=nt(),t=_(()=>{if(!e.readingTime)return null;const{minutes:s}=e.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,l;return(s=e.readingTimeLocale)!=null&&s.time?o("span",{class:"page-reading-time-info","aria-label":`${n.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Yu),o("span",(l=e.readingTimeLocale)==null?void 0:l.time),o("meta",{property:"timeRequired",content:t.value})]):null}}}),Dm=$({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const n=Fe(),t=ce(),s=nt(),l=(a,i="")=>{i&&t.value.path!==i&&(a.preventDefault(),n.push(i))};return()=>e.tag.length?o("span",{class:"page-tag-info","aria-label":`${s.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Ju),e.tag.map(({name:a,path:i})=>o("span",{class:["page-tag-item",{[`tag${gl(a,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:r=>l(r,i)},a)),o("meta",{property:"keywords",content:e.tag.map(({name:a})=>a).join(",")})]):null}}),Sm=$({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=nt();return()=>{var t,s,l;return(t=e.readingTimeLocale)!=null&&t.words?o("span",{class:"page-word-info","aria-label":`${n.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Qu),o("span",(s=e.readingTimeLocale)==null?void 0:s.words),o("meta",{property:"wordCount",content:(l=e.readingTime)==null?void 0:l.words})]):null}}}),Xu=$({name:"PageInfo",components:{AuthorInfo:Tm,CategoryInfo:Lm,DateInfo:Im,OriginalInfo:Am,PageViewInfo:()=>null,ReadingTimeInfo:Pm,TagInfo:Dm,WordInfo:Sm},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const n=Ut();return()=>e.items?o("div",{class:"page-info"},e.items.map(t=>o(Ze(`${t}Info`),{...e.info,pure:n.value}))):null}}),Cm=$({name:"PrintButton",setup(){const e=jn(),n=ae();return()=>e.value.print===!1?null:o("button",{type:"button",class:"print-button",title:n.value.metaLocales.print,onClick:()=>{window.print()}},o(Ku))}});const Om=({title:e,level:n,slug:t})=>o(Me,{to:`#${t}`,class:["toc-link",`level${n}`]},()=>e),ma=(e,n)=>{const t=_n();return e.length&&n>0?o("ul",{class:"toc-list"},e.map(s=>{const l=ma(s.children,n-1);return[o("li",{class:["toc-item",{active:ei(t,`#${s.slug}`)}]},Om(s)),l?o("li",l):null]})):null};var Zu=$({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:n}){const t=_n(),s=ce(),l=nt(),a=Ne(),i=H("-1.7rem"),r=u=>{var p;(p=a.value)==null||p.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(a.value){const u=document.querySelector(".toc-item.active");u?i.value=`${u.getBoundingClientRect().top-a.value.getBoundingClientRect().top+a.value.scrollTop}px`:i.value="-1.7rem"}else i.value="-1.7rem"};return he(()=>{fe(()=>t.hash,u=>{if(a.value){const p=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!p)return;const{top:d,height:v}=a.value.getBoundingClientRect(),{top:h,height:k}=p.getBoundingClientRect();h<d?r(a.value.scrollTop+h-d):h+k>d+v&&r(a.value.scrollTop+h+k-d-v)}}),fe(()=>t.fullPath,()=>c(),{flush:"post",immediate:!0})}),()=>{var u,p;const d=e.items.length?ma(e.items,e.headerDepth):s.value.headers?ma(s.value.headers,e.headerDepth):null;return d?o("div",{class:"toc-place-holder"},[o("aside",{id:"toc"},[(u=n.before)==null?void 0:u.call(n),o("div",{class:"toc-header"},[l.value.toc,o(Cm)]),o("div",{class:"toc-wrapper",ref:a},[d,o("div",{class:"toc-marker",style:{top:i.value}})]),(p=n.after)==null?void 0:p.call(n)])]):null}}}),ci=$({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const n=ce(),t=ae(),s=Ne(),l=({target:a})=>{const i=document.querySelector(a.hash);if(i){const r=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",r)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",r),i.focus(),window.scrollTo(0,0)}};return he(()=>{fe(()=>n.value.path,()=>s.value.focus())}),()=>[o("span",{ref:s,tabindex:"-1"}),o("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:l},t.value.routeLocales.skipToContent)]}});let ql=null,Hs=null;const Rm={wait:()=>ql,pending:()=>{ql=new Promise(e=>Hs=e)},resolve:()=>{Hs==null||Hs(),ql=null,Hs=null}},ep=()=>Rm;var np=$({name:"FadeSlideY",slots:Object,setup(e,{slots:n}){const{resolve:t,pending:s}=ep();return()=>o(Mn,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:s},()=>{var l;return(l=n.default)==null?void 0:l.call(n)})}});const $m=(e,n)=>{const t=e.replace(n,"/").split("/"),s=[];let l=Ua(n);return t.forEach((a,i)=>{i!==t.length-1?(l+=`${a}/`,s.push({link:l,name:a||"Home"})):a!==""&&(l+=a,s.push({link:l,name:a}))}),s},tp=(e,{slots:n})=>{var t,s;const{bgImage:l,bgImageDark:a,bgImageStyle:i,color:r,description:c,image:u,imageDark:p,header:d,features:v=[]}=e;return o("div",{class:"vp-feature-wrapper"},[l?o("div",{class:["vp-feature-bg",{light:a}],style:[{"background-image":`url(${l})`},i]}):null,a?o("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${a})`},i]}):null,o("div",{class:"vp-feature",style:r?{color:r}:{}},[((t=n.image)==null?void 0:t.call(n,e))||[u?o("img",{class:["vp-feature-image",{light:p}],src:Ie(u),alt:d}):null,p?o("img",{class:"vp-feature-image dark",src:Ie(p),alt:d}):null],((s=n.info)==null?void 0:s.call(n,e))||[d?o("h2",{class:"vp-feature-header"},d):null,c?o("p",{class:"vp-feature-description",innerHTML:c}):null],v.length?o("div",{class:"vp-features"},v.map(({icon:h,title:k,details:E,link:x})=>{const g=[o("h3",{class:"vp-feature-title"},[o(ze,{icon:h}),o("span",{innerHTML:k})]),o("p",{class:"vp-feature-details",innerHTML:E})];return x?el(x)?o("a",{class:"vp-feature-item link",href:x,role:"navigation","aria-label":k,target:"_blank"},g):o(Me,{class:"vp-feature-item link",to:x,role:"navigation","aria-label":k},()=>g):o("div",{class:"vp-feature-item"},g)})):null])])};tp.displayName="FeaturePanel";var Uo=tp,Mm=$({name:"HeroInfo",slots:Object,setup(e,{slots:n}){const t=be(),s=Ht(),l=_(()=>t.value.heroFullScreen??!1),a=_(()=>{const{heroText:u,tagline:p}=t.value;return{text:u??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:l.value}}),i=_(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:v,heroImageStyle:h}=t.value;return{image:p?Ie(p):null,imageDark:d?Ie(d):null,heroStyle:h,alt:v||u||"hero image",isFullScreen:l.value}}),r=_(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=t.value;return{image:Vn(u)?Ie(u):null,imageDark:Vn(p)?Ie(p):null,bgStyle:d,isFullScreen:l.value}}),c=_(()=>t.value.actions??[]);return()=>{var u,p,d;return o("header",{class:["vp-hero-info-wrapper",{fullscreen:l.value}]},[((u=n.heroBg)==null?void 0:u.call(n,r.value))||[r.value.image?o("div",{class:["vp-hero-mask",{light:r.value.imageDark}],style:[{"background-image":`url(${r.value.image})`},r.value.bgStyle]}):null,r.value.imageDark?o("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${r.value.imageDark})`},r.value.bgStyle]}):null],o("div",{class:"vp-hero-info"},[((p=n.heroImage)==null?void 0:p.call(n,i.value))||o(me,{appear:!0,type:"group"},()=>[i.value.image?o("img",{key:"light",class:["vp-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?o("img",{key:"dark",class:"vp-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),((d=n.heroInfo)==null?void 0:d.call(n,a.value))??o("div",{class:"vp-hero-infos"},[a.value.text?o(me,{appear:!0,delay:.04},()=>o("h1",{id:"main-title"},a.value.text)):null,a.value.tagline?o(me,{appear:!0,delay:.08},()=>o("p",{class:"vp-description",innerHTML:a.value.tagline})):null,c.value.length?o(me,{appear:!0,delay:.12},()=>o("p",{class:"vp-actions"},c.value.map(v=>o(Ue,{class:["vp-action",v.type||"default"],config:v,noExternalLinkIcon:!0})))):null])])])}}});const sp=(e,{slots:n})=>{var t,s,l;const{bgImage:a,bgImageDark:i,bgImageStyle:r,color:c,description:u,image:p,imageDark:d,header:v,highlights:h=[],type:k="un-order"}=e;return o("div",{class:"vp-highlight-wrapper",style:c?{color:c}:{}},[a?o("div",{class:["vp-highlight-bg",{light:i}],style:[{"background-image":`url(${a})`},r]}):null,i?o("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${i})`},r]}):null,o("div",{class:"vp-highlight"},[((t=n.image)==null?void 0:t.call(n,e))||[p?o("img",{class:["vp-highlight-image",{light:d}],src:Ie(p),alt:v}):null,d?o("img",{class:"vp-highlight-image dark",src:Ie(d),alt:v}):null],((s=n.info)==null?void 0:s.call(n,e))||[o("div",{class:"vp-highlight-info-wrapper"},o("div",{class:"vp-highlight-info"},[v?o("h2",{class:"vp-highlight-header",innerHTML:v}):null,u?o("p",{class:"vp-highlight-description",innerHTML:u}):null,((l=n.highlights)==null?void 0:l.call(n,h))||o(k==="order"?"ol":k==="no-order"?"dl":"ul",{class:"vp-highlights"},h.map(({icon:E,title:x,details:g,link:b})=>{const A=[o(k==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[E?o(ze,{class:"vp-highlight-icon",icon:E}):null,o("span",{innerHTML:x})]),g?o(k==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:g}):null];return o(k==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:b}]},b?a2(b)?o("a",{class:"vp-highlight-item link",href:b,role:"navigation","aria-label":x,target:"_blank"},A):o(Me,{class:"vp-highlight-item link",to:b,role:"navigation","aria-label":x},()=>A):o("div",{class:"vp-highlight-item"},A))}))]))]])])};sp.displayName="HighlightPanel";var Vm=sp,Fm=$({name:"HomePage",slots:Object,setup(e,{slots:n}){const t=Ut(),s=be(),l=_(()=>{const{features:i}=s.value;return X(i)?i:null}),a=_(()=>{const{highlights:i}=s.value;return X(i)?i:null});return()=>{var i,r,c,u;return o("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(i=n.top)==null?void 0:i.call(n),o(Mm),((r=a.value)==null?void 0:r.map(p=>"features"in p?o(Uo,p):o(Vm,p)))||(l.value?o(me,{appear:!0,delay:.24},()=>o(Uo,{features:l.value})):null),(c=n.center)==null?void 0:c.call(n),o(me,{appear:!0,delay:.32},()=>o(ri)),(u=n.bottom)==null?void 0:u.call(n)])}}}),jm=$({name:"BreadCrumb",setup(){const e=Fe(),n=ce(),t=bn(),s=be(),l=ae(),a=Ne([]),i=_(()=>(s.value.breadcrumb||s.value.breadcrumb!==!1&&l.value.breadcrumb!==!1)&&a.value.length>1),r=_(()=>s.value.breadcrumbIcon||s.value.breadcrumbIcon!==!1&&l.value.breadcrumbIcon!==!1),c=()=>{const u=e.getRoutes(),p=$m(n.value.path,t.value).map(({link:d,name:v})=>{const h=u.find(k=>k.path===d);if(h){const{meta:k,path:E}=Ot(e,h.path);return{title:k[we.shortTitle]||k[we.title]||v,icon:k[we.icon],path:E}}return null}).filter(d=>d!==null);p.length>1&&(a.value=p)};return he(()=>{c(),fe(()=>n.value.path,c)}),()=>o("nav",{class:["vp-breadcrumb",{disable:!i.value}]},i.value?o("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((u,p)=>o("li",{class:{"is-active":a.value.length-1===p},property:"itemListElement",typeof:"ListItem"},[o(Me,{to:u.path,property:"item",typeof:"WebPage"},()=>[r.value?o(ze,{icon:u.icon}):null,o("span",{property:"name"},u.title||"Unknown")]),o("meta",{property:"position",content:p+1})]))):[])}});const Go=e=>{const n=Fe();return e===!1?!1:re(e)?xt(n,e,!0):dl(e)?e:null},fa=(e,n,t)=>{const s=e.findIndex(l=>l.link===n);if(s!==-1){const l=e[s+t];return l!=null&&l.link?l:null}for(const l of e)if(l.children){const a=fa(l.children,n,t);if(a)return a}return null};var Nm=$({name:"PageNav",setup(){const e=ae(),n=be(),t=ii(),s=ce(),l=xs(),a=_(()=>{const r=Go(n.value.prev);return r===!1?null:r||(e.value.prevLink===!1?null:fa(t.value,s.value.path,-1))}),i=_(()=>{const r=Go(n.value.next);return r===!1?null:r||(e.value.nextLink===!1?null:fa(t.value,s.value.path,1))});return Ve("keydown",r=>{r.altKey&&(r.key==="ArrowRight"?i.value&&(l(i.value.link),r.preventDefault()):r.key==="ArrowLeft"&&a.value&&(l(a.value.link),r.preventDefault()))}),()=>a.value||i.value?o("nav",{class:"vp-page-nav"},[a.value?o(Ue,{class:"prev",config:a.value},()=>{var r,c;return[o("div",{class:"hint"},[o("span",{class:"arrow start"}),e.value.metaLocales.prev]),o("div",{class:"link"},[o(ze,{icon:(r=a.value)==null?void 0:r.icon}),(c=a.value)==null?void 0:c.text])]}):null,i.value?o(Ue,{class:"next",config:i.value},()=>{var r,c;return[o("div",{class:"hint"},[e.value.metaLocales.next,o("span",{class:"arrow end"})]),o("div",{class:"link"},[(r=i.value)==null?void 0:r.text,o(ze,{icon:(c=i.value)==null?void 0:c.icon})])]}):null]):null}});const Bm={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Hm=({docsRepo:e,docsBranch:n,docsDir:t,filePathRelative:s,editLinkPattern:l})=>{if(!s)return null;const a=jc(e);let i;return l?i=l:a!==null&&(i=Bm[a]),i?i.replace(/:repo/,ut(e)?e:`https://github.com/${e}`).replace(/:branch/,n).replace(/:path/,lc(`${Ua(t)}/${s}`)):null},zm=()=>{const e=ae(),n=ce(),t=be();return _(()=>{const{repo:s,docsRepo:l=s,docsBranch:a="main",docsDir:i="",editLink:r,editLinkPattern:c=""}=e.value;if(!(t.value.editLink??r??!0)||!l)return null;const u=Hm({docsRepo:l,docsBranch:a,docsDir:i,editLinkPattern:c,filePathRelative:n.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},qm=()=>{const e=Ht(),n=ae(),t=ce(),s=be();return _(()=>{var l,a;return!(s.value.lastUpdated??n.value.lastUpdated??!0)||!((l=t.value.git)!=null&&l.updatedTime)?null:new Date((a=t.value.git)==null?void 0:a.updatedTime).toLocaleString(e.value.lang)})},Wm=()=>{const e=ae(),n=ce(),t=be();return _(()=>{var s;return t.value.contributors??e.value.contributors??!0?((s=n.value.git)==null?void 0:s.contributors)??null:null})};var Um=$({name:"PageTitle",setup(){const e=ce(),n=be(),t=ae(),{info:s,items:l}=J3();return()=>o("div",{class:"vp-page-title"},[o("h1",[t.value.titleIcon===!1?null:o(ze,{icon:n.value.icon}),e.value.title]),o(Xu,{info:s.value,...l.value===null?{}:{items:l.value}}),o("hr")])}});const lp=()=>o(le,{name:"edit"},()=>[o("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),o("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);lp.displayName="EditIcon";var Gm=$({name:"PageMeta",setup(){const e=ae(),n=zm(),t=qm(),s=Wm();return()=>{const{metaLocales:l}=e.value;return o("footer",{class:"page-meta"},[n.value?o("div",{class:"meta-item edit-link"},o(Ue,{class:"label",config:n.value},{before:()=>o(lp)})):null,o("div",{class:"meta-item git-info"},[t.value?o("div",{class:"update-time"},[o("span",{class:"label"},`${l.lastUpdated}: `),o(hl,()=>o("span",{class:"info"},t.value))]):null,s.value&&s.value.length?o("div",{class:"contributors"},[o("span",{class:"label"},`${l.contributors}: `),s.value.map(({email:a,name:i},r)=>[o("span",{class:"contributor",title:`email: ${a}`},i),r!==s.value.length-1?",":""])]):null])])}}}),Km=$({name:"NormalPage",slots:Object,setup(e,{slots:n}){const t=be(),s=ce(),{isDarkmode:l}=Ls(),a=ae(),i=_(()=>t.value.toc||t.value.toc!==!1&&a.value.toc!==!1);return()=>o("main",{id:"main-content",class:"vp-page"},o(gn("LocalEncrypt")?Ze("LocalEncrypt"):Dc,()=>{var r,c,u,p;return[(r=n.top)==null?void 0:r.call(n),t.value.cover?o("img",{class:"page-cover",src:Ie(t.value.cover),alt:s.value.title,"no-view":""}):null,o(jm),o(Um),i.value?o(Zu,{headerDepth:t.value.headerDepth??a.value.headerDepth??2},{before:()=>{var d;return(d=n.tocBefore)==null?void 0:d.call(n)},after:()=>{var d;return(d=n.tocAfter)==null?void 0:d.call(n)}}):null,(c=n.contentBefore)==null?void 0:c.call(n),o(ri),(u=n.contentAfter)==null?void 0:u.call(n),o(Gm),o(Nm),gn("CommentService")?o(Ze("CommentService"),{darkmode:l.value}):null,(p=n.bottom)==null?void 0:p.call(n)]}))}}),Jm=$({name:"Layout",setup(){const e=jn(),n=ae(),t=ce(),s=be(),{isMobile:l}=Ts(),a=_(()=>{var i,r;return((i=n.value.blog)==null?void 0:i.sidebarDisplay)||((r=e.value.blog)==null?void 0:r.sidebarDisplay)||"mobile"});return()=>[o(ci),o(oi,{},{default:()=>s.value.home?o(Fm):o(np,()=>o(Km,{key:t.value.path})),...a.value!=="none"?{navScreenBottom:()=>o(Ze("BloggerInfo"))}:{},...!l.value&&a.value==="always"?{sidebar:()=>o(Ze("BloggerInfo"))}:{}})]}}),Ym=$({name:"NotFoundHint",setup(){const e=ae(),n=()=>{const t=e.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>o("div",{class:"not-found-hint"},[o("p",{class:"error-code"},"404"),o("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),o("p",{class:"error-hint"},n())])}}),Qm=$({name:"NotFound",slots:Object,setup(e,{slots:n}){const t=bn(),s=ae(),{navigate:l}=oa({to:s.value.home??t.value});return()=>[o(ci),o(oi,{noSidebar:!0},()=>{var a;return o("main",{id:"main-content",class:"vp-page not-found"},((a=n.default)==null?void 0:a.call(n))||[o(Ym),o("div",{class:"actions"},[o("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},s.value.routeLocales.back),o("button",{type:"button",class:"action-button",onClick:()=>l()},s.value.routeLocales.home)])])})]}});const Xm={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},Zm={category:{"/":{path:"/category/",map:{}},"/en/":{path:"/en/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}},"/en/":{path:"/en/tag/",map:{}}}},ef={article:{"/":{path:"/article/",keys:["v-737d6172","v-1532dc1e","v-0d202a22","v-08700fb4","v-9376cbd8","v-50eda543","v-1296d022","v-34c0cc3a","v-6b01bef8","v-4bd5befb","v-3dc19728","v-9d9130cc","v-5ff88586","v-0afa9360","v-0a822add","v-566689bd","v-50b2aeca","v-0221a8ad","v-33afe9f2","v-eadc129a","v-156a1114","v-74d2721e","v-ec4f77b0","v-74fcd9ee","v-2e75823a","v-9d9383da","v-67d16688","v-d7188082","v-05aa60bc","v-655dabc9","v-40662ab6","v-20932f22","v-73096696","v-470743c9","v-97ce3324","v-39c90182","v-0afe37c4","v-a86ab80e","v-e2d863ca","v-f4a23b22","v-ce60a5b4","v-eb998da4","v-e295e46e","v-6261669c","v-ff9673f2","v-e4f84858","v-53d99f9f","v-0ea8a1d4","v-37e7ddac","v-6485064d","v-9c987956","v-71361d27","v-4a160b56","v-13b6c6a9","v-157e5c3f","v-eff126fe","v-855c2bc2","v-15351731","v-03aa6f39","v-6ab5d8fc","v-3f92c263","v-03a09d9f","v-6b7873d0","v-566cfcec","v-42dddec2","v-0d6a9cd2","v-1a97af14","v-0167aec8","v-d8862ffc","v-883c5c18","v-4a5f1fe4","v-eeac3bce","v-0439749c","v-4331a9ae","v-a39c4cfa","v-145ac574"]},"/en/":{path:"/en/article/",keys:["v-61a15761","v-5fec7ec2","v-5e37a623","v-5c82cd84","v-5acdf4e5","v-59191c46","v-576443a7","v-55af6b08","v-53fa9269","v-5245b9ca","v-a5987ae0","v-0a92777c","v-a9022c1e","v-ac6bdd5c","v-afd58e9a","v-b33f3fd8","v-b6a8f116","v-ba12a254","v-bd7c5392","v-e4904468","v-c0e604d0","v-9b94b2c8","v-72f1067a","v-2fbe537d","v-987b21a6"]}},star:{"/":{path:"/star/",keys:[]},"/en/":{path:"/en/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-737d6172","v-1532dc1e","v-0d202a22","v-08700fb4","v-9376cbd8","v-50eda543","v-1296d022","v-34c0cc3a","v-6b01bef8","v-4bd5befb","v-3dc19728","v-9d9130cc","v-5ff88586","v-0afa9360","v-0a822add","v-566689bd","v-50b2aeca","v-0221a8ad","v-33afe9f2","v-eadc129a","v-156a1114","v-74d2721e","v-ec4f77b0","v-74fcd9ee","v-2e75823a","v-9d9383da","v-67d16688","v-d7188082","v-05aa60bc","v-655dabc9","v-40662ab6","v-20932f22","v-73096696","v-470743c9","v-97ce3324","v-39c90182","v-0afe37c4","v-a86ab80e","v-e2d863ca","v-f4a23b22","v-ce60a5b4","v-eb998da4","v-e295e46e","v-6261669c","v-ff9673f2","v-e4f84858","v-53d99f9f","v-0ea8a1d4","v-37e7ddac","v-6485064d","v-9c987956","v-71361d27","v-4a160b56","v-13b6c6a9","v-157e5c3f","v-eff126fe","v-855c2bc2","v-15351731","v-03aa6f39","v-6ab5d8fc","v-3f92c263","v-03a09d9f","v-6b7873d0","v-566cfcec","v-42dddec2","v-0d6a9cd2","v-1a97af14","v-0167aec8","v-d8862ffc","v-883c5c18","v-4a5f1fe4","v-eeac3bce","v-0439749c","v-4331a9ae","v-a39c4cfa","v-145ac574"]},"/en/":{path:"/en/timeline/",keys:["v-61a15761","v-5fec7ec2","v-5e37a623","v-5c82cd84","v-5acdf4e5","v-59191c46","v-576443a7","v-55af6b08","v-53fa9269","v-5245b9ca","v-a5987ae0","v-0a92777c","v-a9022c1e","v-ac6bdd5c","v-afd58e9a","v-b33f3fd8","v-b6a8f116","v-ba12a254","v-bd7c5392","v-e4904468","v-c0e604d0","v-9b94b2c8","v-72f1067a","v-2fbe537d","v-987b21a6"]}}},Ko=H(Zm),ap=(e="")=>{const n=ce(),t=Fe(),s=bn();return _(()=>{var l;const a=e||((l=be().value.blog)==null?void 0:l.key)||"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const i=t.getRoutes();if(!Ko.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const r=Ko.value[a][s.value],c={path:r.path,map:{}};for(const u in r.map){const p=r.map[u];c.map[u]={path:p.path,items:[]};for(const d of p.keys){const v=i.find(({name:h})=>h===d);if(v){const h=Ot(t,v.path);c.map[u].items.push({path:h.path,info:h.meta})}}n.value.path===p.path&&(c.currentItems=c.map[u].items)}return c})},Jo=H(ef),_l=(e="")=>{const n=Fe(),t=bn();return _(()=>{var s;const l=e||((s=be().value.blog)==null?void 0:s.key)||"";if(!l)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Jo.value[l])throw new Error(`useBlogType: key ${e} is invalid`);const a=n.getRoutes(),i=Jo.value[l][t.value],r={path:i.path,items:[]};for(const c of i.keys){const u=a.find(({name:p})=>p===c);if(u){const p=Ot(n,u.path);r.items.push({path:p.path,info:p.meta})}}return r})};const nf="/assets/hero-197a9d2d.jpg",ip=Symbol.for("categoryMap"),Is=()=>{const e=ge(ip);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},tf=()=>{const e=ap("category");cn(ip,e)},As=()=>{const e=jn(),n=ae();return _(()=>({...e.value.blog,...n.value.blog}))},op=Symbol.for("tagMap"),Ps=()=>{const e=ge(op);if(!e)throw new Error("useTagMap() is called without provider.");return e},sf=()=>{const e=ap("tag");cn(op,e)},lf=e=>{const n=ae();return _(()=>{const{[we.author]:t}=e.value;return t?ms(t):t===!1?[]:ms(n.value.author,!1)})},af=e=>{const n=Is();return _(()=>$c(e.value[we.category]).map(t=>({name:t,path:n.value.map[t].path})))},of=e=>{const n=Ps();return _(()=>Mc(e.value[we.tag]).map(t=>({name:t,path:n.value.map[t].path})))},rf=e=>_(()=>{const{[we.date]:n}=e.value;return Xa(n)}),cf=e=>{const n=jt(e,"info"),t=As(),s=lf(n),l=af(n),a=of(n),i=rf(n),r=bu(),c=_(()=>({author:s.value,category:l.value,date:i.value,localizedDate:n.value[we.localizedDate]||"",tag:a.value,isOriginal:n.value[we.isOriginal]||!1,readingTime:n.value[we.readingTime]||null,readingTimeLocale:n.value[we.readingTime]&&r.value?yu(n.value[we.readingTime],r.value):null,pageview:e.path})),u=_(()=>t.value.articleInfo);return{info:c,items:u}},rp=Symbol(""),Ds=()=>{const e=ge(rp);if(!e)throw new Error("useArticles() is called without provider.");return e},uf=()=>{const e=_l("article");cn(rp,e)},cp=Symbol(""),ui=()=>{const e=ge(cp);if(!e)throw new Error("useStars() is called without provider.");return e},pf=()=>{const e=_l("star");cn(cp,e)},up=Symbol(""),pi=()=>{const e=ge(up);if(!e)throw new Error("useTimelines() is called without provider.");return e},df=()=>{const e=_l("timeline"),n=_(()=>{const t=[];return e.value.items.forEach(({info:s,path:l})=>{const a=Xa(s[we.date]),i=a==null?void 0:a.getFullYear(),r=a?a.getMonth()+1:null,c=a==null?void 0:a.getDate();i&&r&&c&&((!t[0]||t[0].year!==i)&&t.unshift({year:i,items:[]}),t[0].items.push({date:`${r}/${c}`,info:s,path:l}))}),{...e.value,config:t.reverse()}});cn(up,n)},vf=()=>{uf(),tf(),pf(),sf(),df()};var hf=$({name:"SocialMedia",setup(){const e=As(),n=Ut(),t=_(()=>{const s=e.value.medias;return s?qt(s).map(([l,a])=>({name:l,icon:Xm[l],url:a})):[]});return()=>t.value.length?o("div",{class:"vp-social-medias"},t.value.map(({name:s,icon:l,url:a})=>o("a",{class:"vp-social-media",href:a,rel:"noopener noreferrer",target:"_blank","aria-label":s,...n.value?{}:{"data-balloon-pos":"up"},innerHTML:l}))):null}}),di=$({name:"BloggerInfo",setup(){const e=As(),n=Ht(),t=ae(),s=Ds(),l=Is(),a=Ps(),i=pi(),r=xs(),c=_(()=>{var v;return e.value.name||((v=ms(t.value.author)[0])==null?void 0:v.name)||n.value.title}),u=_(()=>e.value.avatar||t.value.logo),p=_(()=>t.value.blogLocales),d=_(()=>e.value.intro);return()=>{const{article:v,category:h,tag:k,timeline:E}=p.value,x=[[s.value.path,s.value.items.length,v],[l.value.path,en(l.value.map).length,h],[a.value.path,en(a.value.map).length,k],[i.value.path,i.value.items.length,E]];return o("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[o("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>r(d.value)}:{}},[u.value?o("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Ie(u.value),property:"image",alt:"Blogger Avatar"}):null,c.value?o("div",{class:"vp-blogger-name",property:"name"},c.value):null,e.value.description?o("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?o("meta",{property:"url",content:Ie(d.value)}):null]),o("div",{class:"vp-blog-counts"},x.map(([g,b,A])=>o(Me,{class:"vp-blog-count",to:g},()=>[o("div",{class:"count"},b),o("div",A)]))),o(hf)])}}});const ga=()=>o(le,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ga.displayName="CategoryIcon";const ka=()=>o(le,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));ka.displayName="TagIcon";const vi=()=>o(le,{name:"timeline"},()=>o("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));vi.displayName="TimelineIcon";const pp=()=>o(le,{name:"slides"},()=>o("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));pp.displayName="SlideIcon";const dp=()=>o(le,{name:"sticky"},()=>[o("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);dp.displayName="StickyIcon";const sl=()=>o(le,{name:"article"},()=>o("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));sl.displayName="ArticleIcon";const vp=()=>o(le,{name:"book"},()=>o("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));vp.displayName="BookIcon";const hp=()=>o(le,{name:"link"},()=>o("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));hp.displayName="LinkIcon";const mp=()=>o(le,{name:"project"},()=>o("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));mp.displayName="ProjectIcon";const fp=()=>o(le,{name:"friend"},()=>o("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));fp.displayName="FriendIcon";const ya=()=>o(le,{name:"slide-down"},()=>o("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));ya.displayName="SlideDownIcon";const gp=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});gp.displayName="EmptyIcon";const kp=()=>o(le,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));kp.displayName="LockIcon";var mf=$({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const t=jt(e,"info"),{info:s,items:l}=cf(e);return()=>{var a,i,r;const{[we.title]:c,[we.type]:u,[we.isEncrypted]:p=!1,[we.cover]:d,[we.excerpt]:v,[we.sticky]:h}=t.value,k=s.value;return o("div",{class:"vp-article-wrapper"},o("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((a=n.cover)==null?void 0:a.call(n,{cover:d}))||(d?[o("img",{class:"vp-article-cover",src:Ie(d)}),o("meta",{property:"image",content:Ie(d)})]:[]),h?o(dp):null,o(Me,{to:e.path},()=>{var E;return((E=n.title)==null?void 0:E.call(n,{title:c,isEncrypted:p,type:u}))||o("header",{class:"vp-article-title"},[p?o(kp):null,u===wu.slide?o(pp):null,o("span",{property:"headline"},c)])}),((i=n.excerpt)==null?void 0:i.call(n,{excerpt:v}))||(v?o("div",{class:"vp-article-excerpt",innerHTML:v}):null),o("hr",{class:"vp-article-hr"}),((r=n.info)==null?void 0:r.call(n,{info:k}))||o(Xu,{info:k,...l.value?{items:l.value}:{}})]))}}}),ff=$({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:n}){let t;const s=ae(),l=H(""),a=_(()=>s.value.paginationLocales),i=_(()=>Math.ceil(e.total/e.perPage)),r=_(()=>!!i.value&&i.value!==1),c=_(()=>i.value<7?!1:e.current>4),u=_(()=>i.value<7?!1:e.current<i.value-3),p=_(()=>{const{current:h}=e;let k=1,E=i.value;const x=[];i.value>=7&&(h<=4&&h<i.value-3?(k=1,E=5):h>4&&h>=i.value-3?(E=i.value,k=i.value-4):i.value>7&&(k=h-2,E=h+2));for(let g=k;g<=E;g++)x.push(g);return x}),d=h=>n("updateCurrentPage",h),v=h=>{const k=parseInt(h);k<=i.value&&k>0?d(k):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${a.value.errorText.replace(/\$page/g,i.value.toString())}`)};return he(()=>{t=new u2}),()=>o("div",{class:"vp-pagination"},r.value?o("div",{class:"vp-pagination-list"},[o("div",{class:"vp-pagination-number "},[e.current>1?o("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},a.value.prev):null,c.value?[o("div",{role:"navigation",onClick:()=>d(1)},1),o("div",{class:"ellipsis"},"...")]:null,p.value.map(h=>o("div",{key:h,class:{active:e.current===h},role:"navigation",onClick:()=>d(h)},h)),u.value?[o("div",{class:"ellipsis"},"..."),o("div",{role:"navigation",onClick:()=>d(i.value)},i.value)]:null,e.current<i.value?o("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},a.value.next):null]),o("div",{class:"vp-pagination-nav"},[o("label",{for:"navigation-text"},`${a.value.navigate}: `),o("input",{id:"navigation-text",value:l.value,onInput:({target:h})=>{l.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),v(l.value))}}),o("button",{class:"vp-pagination-button",role:"navigation",title:a.value.action,onClick:()=>v(l.value)},a.value.action)])]):[])}}),hi=$({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const n=_n(),t=Fe(),s=As(),l=H(1),a=_(()=>s.value.articlePerPage||10),i=_(()=>e.items.slice((l.value-1)*a.value,l.value*a.value)),r=c=>{l.value=c;const u={...n.query};u.page===c.toString()||c===1&&!u.page||(c===1?delete u.page:u.page=c.toString(),t.push({path:n.path,query:u}))};return he(()=>{const{page:c}=n.query;r(c?Number(c):1),fe(l,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)}),fe(()=>n.query,({page:u})=>{r(u?Number(u):1)})}),()=>o("div",{id:"article-list",class:"vp-article-list"},i.value.length?[...i.value.map(({info:c,path:u},p)=>o(me,{appear:!0,delay:p*.04},()=>o(mf,{key:u,info:c,path:u}))),o(ff,{current:l.value,perPage:a.value,total:e.items.length,onUpdateCurrentPage:r})]:o(gp))}}),mi=$({name:"CategoryList",setup(){const e=ce(),n=Is();return()=>o("ul",{class:"vp-category-list"},qt(n.value.map).map(([t,{path:s,items:l}])=>o("li",{class:["vp-category",`vp-category${gl(t,9)}`,{active:s===e.value.path}]},o(Me,{to:s},()=>[t,o("span",{class:"count"},l.length)]))))}}),fi=$({name:"TagList",setup(){const e=be(),n=Ps(),t=s=>{var l;return s===((l=e.value.blog)==null?void 0:l.name)};return()=>o("ul",{class:"tag-list-wrapper"},qt(n.value.map).map(([s,{path:l,items:a}])=>o("li",{class:["tag",`tag${gl(s,9)}`,{active:t(s)}]},o(Me,{to:l},()=>[s,o("span",{class:"tag-num"},a.length)]))))}}),gf=$({name:"TimelineList",setup(){const e=ae(),n=pi(),t=xs(),s=_(()=>e.value.blogLocales.timeline);return()=>o("div",{class:"timeline-list-wrapper"},[o("div",{class:"timeline-list-title",onClick:()=>t(n.value.path)},[o(vi),o("span",{class:"num"},n.value.items.length),s.value]),o("hr"),o("div",{class:"timeline-content"},o("ul",{class:"timeline-list"},n.value.config.map(({year:l,items:a},i)=>o(me,{appear:!0,delay:.08*(i+1)},()=>o("li",[o("h3",{class:"timeline-year"},l),o("ul",{class:"timeline-year-wrapper"},a.map(({date:r,info:c,path:u})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},r),o(Me,{class:"timeline-title",to:u},()=>c[we.title])])))])))))])}}),yp=$({name:"InfoList",setup(){const e=ae(),n=Ds(),t=Is(),s=_(()=>en(t.value.map).length),l=ui(),a=Ps(),i=_(()=>en(a.value.map).length),r=xs(),c=H("article"),u=_(()=>e.value.blogLocales),p=[["article",sl],["category",ga],["tag",ka],["timeline",vi]];return()=>o("div",{class:"vp-blog-infos"},[o("div",{class:"vp-blog-type-switcher"},p.map(([d,v])=>o("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=d}},o("div",{class:["icon-wrapper",{active:c.value===d}],"aria-label":u.value[d],"data-balloon-pos":"up"},o(v))))),o(me,()=>c.value==="article"?o("div",{class:"vp-sticky-article-wrapper"},[o("div",{class:"title",onClick:()=>r(n.value.path)},[o(sl),o("span",{class:"num"},n.value.items.length),u.value.article]),o("hr"),o("ul",{class:"vp-sticky-articles"},l.value.items.map(({info:d,path:v},h)=>o(me,{appear:!0,delay:.08*(h+1)},()=>o("li",{class:"vp-sticky-article"},o(Me,{to:v},()=>d[we.title])))))]):c.value==="category"?o("div",{class:"vp-category-wrapper"},[s.value?o("div",{class:"title",onClick:()=>r(t.value.path)},[o(ga),o("span",{class:"num"},s.value),u.value.category]):null,o("hr"),o(me,{delay:.04},()=>o(mi))]):c.value==="tag"?o("div",{class:"vp-tag-wrapper"},[i.value?o("div",{class:"title",onClick:()=>r(a.value.path)},[o(ka),o("span",{class:"num"},i.value),u.value.tag]):null,o("hr"),o(me,{delay:.04},()=>o(fi))]):o(me,()=>o(gf)))])}}),wl=$({name:"BlogWrapper",slots:Object,setup(e,{slots:n}){const{isMobile:t}=Ts();return()=>[o(ci),o(oi,{noSidebar:!0,noToc:!0},{default:()=>n.default(),navScreenBottom:()=>o(di),...t.value?{sidebar:()=>o(yp)}:{}})]}});const bp=()=>o("aside",{class:"vp-blog-info-wrapper"},[o(me,()=>o(di)),o(me,{delay:.04},()=>o(yp))]);bp.displayName="InfoPanel";var El=bp,kf=$({name:"BlogPage",components:{CategoryList:mi,TagList:fi},setup(){const e=ce(),n=be(),t=Is(),s=Ps(),l=_(()=>n.value.blog||{}),a=_(()=>{const{key:r=""}=l.value;return r==="category"?"CategoryList":r==="tag"?"TagList":null}),i=_(()=>{const{name:r="",key:c=""}=l.value;return c==="category"?r?t.value.map[r].items:[]:c==="tag"?r?s.value.map[r].items:[]:[]});return()=>o(wl,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(me,()=>a.value?o(Ze(a.value)):null),l.value.name?o(me,{appear:!0,delay:.24},()=>o(hi,{key:e.value.path,items:i.value})):null]),o(me,{delay:.16},()=>o(El,{key:"blog"}))])))}}),yf=$({name:"BlogHero",slots:Object,setup(e,{slots:n}){const t=be(),s=Ht(),l=Ne(),a=_(()=>t.value.heroFullScreen??!1),i=_(()=>{const{heroText:c,heroImage:u,heroImageDark:p,heroAlt:d,heroImageStyle:v,tagline:h}=t.value;return{text:c??s.value.title??"Hello",image:u?Ie(u):null,imageDark:p?Ie(p):null,heroStyle:v,alt:d||c||"hero image",tagline:h??"",isFullScreen:a.value}}),r=_(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:p}=t.value;return{image:re(c)?Ie(c):c===!1?null:nf,imageDark:re(u)?Ie(u):null,bgStyle:p,isFullScreen:a.value}});return()=>{var c,u;return t.value.hero===!1?null:o("div",{ref:l,class:["vp-blog-hero",{fullscreen:a.value,"no-bg":!r.value.image}]},[((c=n.heroBg)==null?void 0:c.call(n,r.value))||[r.value.image?o("div",{class:["vp-blog-mask",{light:r.value.imageDark}],style:[{background:`url(${r.value.image}) center/cover no-repeat`},r.value.bgStyle]}):null,r.value.imageDark?o("div",{class:"vp-blog-mask dark",style:[{background:`url(${r.value.imageDark}) center/cover no-repeat`},r.value.bgStyle]}):null],((u=n.heroInfo)==null?void 0:u.call(n,i.value))||[o(me,{appear:!0,type:"group",delay:.04},()=>[i.value.image?o("img",{key:"light",class:["vp-blog-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?o("img",{key:"dark",class:"vp-blog-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),o(me,{appear:!0,delay:.08},()=>i.value.text?o("h1",{class:"vp-blog-hero-title"},i.value.text):null),o(me,{appear:!0,delay:.12},()=>i.value.tagline?o("p",{class:"vp-blog-hero-description",innerHTML:i.value.tagline}):null)],i.value.isFullScreen?o("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:l.value.clientHeight,behavior:"smooth"})}},[o(ya),o(ya)]):null])}}});const bf=["link","article","book","project","friend"];var _f=$({name:"ProjectPanel",components:{ArticleIcon:sl,BookIcon:vp,FriendIcon:fp,LinkIcon:hp,ProjectIcon:mp},setup(){const e=be(),n=Ut(),t=xs(),s=(l="",a="icon")=>bf.includes(l)?o(Ze(`${l}-icon`)):ut(l)?o("img",{class:"vp-project-image",src:l,alt:a}):kl(l)?o("img",{class:"vp-project-image",src:Ie(l),alt:a}):o(ze,{icon:l});return()=>{var l;return(l=e.value.projects)!=null&&l.length?o("div",{class:"vp-project-panel"},e.value.projects.map(({icon:a,link:i,name:r,desc:c},u)=>o("div",{class:["vp-project-card",{[`project${u%9}`]:!n.value}],onClick:()=>t(i)},[s(a,r),o("div",{class:"vp-project-name"},r),o("div",{class:"vp-project-desc"},c)]))):null}}}),wf=$({name:"BlogHome",setup(){const e=Ds();return()=>o("div",{class:"vp-page vp-blog"},[o(yf),o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(me,{appear:!0,delay:.16},()=>o(_f)),o(me,{appear:!0,delay:.24},()=>o(hi,{items:e.value.items}))]),o(me,{appear:!0,delay:.16},()=>o(El,{key:"blog"}))]),o(me,{appear:!0,delay:.28},()=>o(ri))])}}),Ef=$({name:"BlogHome",setup(){return()=>o(wl,()=>o(wf))}}),_p=$({name:"ArticleType",setup(){const e=ce(),n=bn(),t=ae(),s=Ds(),l=ui(),a=_(()=>{const i=t.value.blogLocales;return[{text:i.all,path:s.value.path},{text:i.star,path:l.value.path},...[].map(({key:r,path:c})=>({text:i[r],path:c.replace(/^\//,n.value)}))]});return()=>o("ul",{class:"vp-article-type-wrapper"},a.value.map(i=>o("li",{class:["vp-article-type",{active:i.path===e.value.path}]},o(Me,{to:i.path},()=>i.text))))}}),xf=$({name:"BlogPage",setup(){const e=_l(),n=be(),t=ce(),s=Ds(),l=ui(),a=_(()=>{const{key:i="",type:r}=n.value.blog||{};return i==="star"?l.value.items:r==="type"&&i?e.value.items:s.value.items});return()=>o(wl,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(me,()=>o(_p)),o(me,{appear:!0,delay:.24},()=>o(hi,{key:t.value.path,items:a.value}))]),o(me,{delay:.16},()=>o(El,{key:"blog"}))])))}}),Tf=$({name:"TimelineItems",setup(){const e=As(),n=ae(),t=pi(),s=_(()=>e.value.timeline||n.value.blogLocales.timelineTitle),l=_(()=>t.value.config.map(({year:a})=>({title:a.toString(),level:2,slug:a.toString(),children:[]})));return()=>o("div",{class:"timeline-wrapper"},o("ul",{class:"timeline-content"},[o(me,()=>o("li",{class:"motto"},s.value)),o(Zu,{items:l.value}),t.value.config.map(({year:a,items:i},r)=>o(me,{appear:!0,delay:.08*(r+1),type:"group"},()=>[o("h3",{key:"title",id:a,class:"timeline-year-title"},o("span",a)),o("li",{key:"content",class:"timeline-year-list"},[o("ul",{class:"timeline-year-wrapper"},i.map(({date:c,info:u,path:p})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},c),o(Me,{class:"timeline-title",to:p},()=>u[we.title])])))])]))]))}}),Lf=$({name:"Timeline",components:{ArticleType:_p,CategoryList:mi,TagList:fi},setup(){return()=>o(wl,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(me,{appear:!0,delay:.24},()=>o(Tf))]),o(me,{delay:.16},()=>o(El,{key:"blog"}))])))}});const mt="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),Wl=Array.from({length:64},(e,n)=>n),zs=e=>Array(e).fill(-1),Wn=[...zs(46),0,1,...Wl.slice(54,64),...zs(7),...Wl.slice(2,28),...zs(6),...Wl.slice(28,54),...zs(5)],Yo=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Qo=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],wp=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],ba=(e,n)=>{if(n<=0||n>e.length)throw Error(`Illegal len: ${n}`);let t=0,s,l;const a=[];for(;t<n;){if(s=e[t++]&255,a.push(mt[s>>2&63]),s=(s&3)<<4,t>=n){a.push(mt[s&63]);break}if(l=e[t++]&255,s|=l>>4&15,a.push(mt[s&63]),s=(l&15)<<2,t>=n){a.push(mt[s&63]);break}l=e[t++]&255,s|=l>>6&3,a.push(mt[s&63]),a.push(mt[l&63])}return a.join("")},If=(e,n)=>{if(n<=0)throw Error(`Illegal len: ${n}`);const t=e.length;let s=0,l=0,a,i,r,c,u,p;const d=[];for(;s<t-1&&l<n&&(p=e.charCodeAt(s++),a=p<Wn.length?Wn[p]:-1,p=e.charCodeAt(s++),i=p<Wn.length?Wn[p]:-1,!(a==-1||i==-1||(u=a<<2>>>0,u|=(i&48)>>4,d.push(String.fromCharCode(u)),++l>=n||s>=t)||(p=e.charCodeAt(s++),r=p<Wn.length?Wn[p]:-1,r==-1)||(u=(i&15)<<4>>>0,u|=(r&60)>>2,d.push(String.fromCharCode(u)),++l>=n||s>=t)));)p=e.charCodeAt(s++),c=p<Wn.length?Wn[p]:-1,u=(r&3)<<6>>>0,u|=c,d.push(String.fromCharCode(u)),++l;return d.map(v=>v.charCodeAt(0))},Af=(e,n)=>{let t=null;for(typeof e=="number"&&(t=e,e=()=>null);t!==null||(t=e())!==null;)t<128?n(t&127):t<2048?(n(t>>6&31|192),n(t&63|128)):t<65536?(n(t>>12&15|224),n(t>>6&63|128),n(t&63|128)):(n(t>>18&7|240),n(t>>12&63|128),n(t>>6&63|128),n(t&63|128)),t=null},Pf=(e,n)=>{let t,s=null;for(;(t=s!==null?s:e())!==null;){if(t>=55296&&t<=57343&&(s=e())!==null&&s>=56320&&s<=57343){n((t-55296)*1024+s-56320+65536),s=null;continue}n(t)}s!==null&&n(s)},Df=(e,n)=>{Pf(e,function(t){Af(t,n)})},Sf=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,Cf=e=>{const n=[];let t=0;return Df(()=>t>=e.length?null:e.charCodeAt(t++),s=>{n.push(s)}),n},gs=(e,n,t,s)=>{let l,a=e[n],i=e[n+1];return a^=t[0],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[1],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[2],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[3],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[4],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[5],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[6],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[7],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[8],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[9],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[10],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[11],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[12],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[13],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[14],l=s[a>>>24],l+=s[256|a>>16&255],l^=s[512|a>>8&255],l+=s[768|a&255],i^=l^t[15],l=s[i>>>24],l+=s[256|i>>16&255],l^=s[512|i>>8&255],l+=s[768|i&255],a^=l^t[16],e[n]=i^t[16+1],e[n+1]=a,e},gt=(e,n)=>{let t=0;for(let s=0;s<4;++s)t=t<<8|e[n]&255,n=(n+1)%e.length;return{key:t,offp:n}},Xo=(e,n,t)=>{const s=n.length,l=t.length;let a=0,i=[0,0],r;for(let c=0;c<s;c++)r=gt(e,a),a=r.offp,n[c]=n[c]^r.key;for(let c=0;c<s;c+=2)i=gs(i,0,n,t),n[c]=i[0],n[c+1]=i[1];for(let c=0;c<l;c+=2)i=gs(i,0,n,t),t[c]=i[0],t[c+1]=i[1]},Of=(e,n,t,s)=>{const l=t.length,a=s.length;let i=0,r=[0,0],c;for(let u=0;u<l;u++)c=gt(n,i),i=c.offp,t[u]=t[u]^c.key;i=0;for(let u=0;u<l;u+=2)c=gt(e,i),i=c.offp,r[0]^=c.key,c=gt(e,i),i=c.offp,r[1]^=c.key,r=gs(r,0,t,s),t[u]=r[0],t[u+1]=r[1];for(let u=0;u<a;u+=2)c=gt(e,i),i=c.offp,r[0]^=c.key,c=gt(e,i),i=c.offp,r[1]^=c.key,r=gs(r,0,t,s),s[u]=r[0],s[u+1]=r[1]},Zo=(e,n,t,s,l)=>{const a=wp.slice(),i=a.length;if(t<4||t>31){const v=new Error(`Illegal number of rounds (4-31): ${t}`);if(s===!1)return Promise.reject(v);throw v}if(n.length!==16){const v=new Error(`Illegal salt length: ${n.length} != 16`);if(s===!1)return Promise.reject(v);throw v}t=1<<t>>>0;let r,c,u=0,p;Int32Array?(r=new Int32Array(Yo),c=new Int32Array(Qo)):(r=Yo.slice(),c=Qo.slice()),Of(n,e,r,c);const d=()=>{if(l&&l(u/t),u<t){const v=Date.now();for(;u<t&&(u=u+1,Xo(e,r,c),Xo(n,r,c),!(Date.now()-v>100)););}else{for(u=0;u<64;u++)for(p=0;p<i>>1;p++)gs(a,p<<1,r,c);const v=[];for(u=0;u<i;u++)v.push((a[u]>>24&255)>>>0),v.push((a[u]>>16&255)>>>0),v.push((a[u]>>8&255)>>>0),v.push((a[u]&255)>>>0);return s===!1?Promise.resolve(v):v}if(s===!1)return new Promise(v=>Sf(()=>{d().then(v)}))};if(s===!1)return d();{let v;for(;;)if(typeof(v=d())<"u")return v||[]}},Rf=e=>{try{let n;return(self.crypto||self.msCrypto).getRandomValues(n=new Uint32Array(e)),Array.prototype.slice.call(n)}catch{throw Error("WebCryptoAPI is not available")}},$f=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const n=[];return n.push("$2a$"),e<10&&n.push("0"),n.push(e.toString()),n.push("$"),n.push(ba(Rf(16),16)),n.join("")};function Mf(e,n,t,s){if(typeof e!="string"||typeof n!="string"){const h=new Error("Invalid string / salt: Not a string");if(t===!1)return Promise.reject(h);throw h}let l,a;if(n.charAt(0)!=="$"||n.charAt(1)!=="2"){const h=new Error("Invalid salt version: "+n.substring(0,2));if(t===!1)return Promise.reject(h);throw h}if(n.charAt(2)==="$")l=String.fromCharCode(0),a=3;else{if(l=n.charAt(2),l!=="a"&&l!=="b"&&l!=="y"||n.charAt(3)!=="$"){const h=Error("Invalid salt revision: "+n.substring(2,4));if(t===!1)return Promise.reject(h);throw h}a=4}if(n.charAt(a+2)>"$"){const h=new Error("Missing salt rounds");if(t===!1)return Promise.reject(h);throw h}const i=parseInt(n.substring(a,a+1),10)*10,r=parseInt(n.substring(a+1,a+2),10),c=i+r,u=n.substring(a+3,a+25);e+=l>="a"?"\0":"";const p=Cf(e),d=If(u,16),v=h=>{const k=[];return k.push("$2"),l>="a"&&k.push(l),k.push("$"),c<10&&k.push("0"),k.push(c.toString()),k.push("$"),k.push(ba(d,d.length)),k.push(ba(h,wp.length*4-1)),k.join("")};return t===!1?Zo(p,d,c,!1,s).then(h=>v(h)):v(Zo(p,d,c,!0,s))}const Vf=(e,n=10)=>{if(typeof n=="number"&&(n=$f(n)),typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return Mf(e,n,!0)},_a=(e,n)=>{if(typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return n.length!==60?!1:Vf(e,n.substring(0,n.length-31))===n},Ep=()=>o(le,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Ep.displayName="LockIcon";var xp=$({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:n}){const t=be(),s=ae(),l=H(""),a=H(!1),i=H(!1),r=_(()=>s.value.encryptLocales);let c=null;const u=()=>{c&&clearTimeout(c),a.value=!1,n("verify",l.value,i.value),ct().then(()=>{a.value=!0,c=setTimeout(()=>{a.value=!1},1e3)})};return()=>o("div",{class:["vp-decrypt-layer",{expand:e.full||t.value.home}]},o("div",{class:"vp-decrypt-modal"},[o("div",{class:["vp-decrypt-hint",{tried:a.value}]},a.value?r.value.errorHint:o(Ep,{"aria-label":r.value.iconLabel})),o("div",{class:"vp-decrypt-input"},[o("input",{type:"password",value:l.value,placeholder:r.value.placeholder,onInput:({target:p})=>{l.value=p.value},onKeydown:({key:p})=>{p==="Enter"&&u()}})]),o("div",{class:"vp-remember-password"},[o("input",{type:"checkbox",value:i.value,onChange:()=>i.value=!i.value}),r.value.remember]),o("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>u()},"OK")]))}});const Tp=()=>{const e=jn();return _(()=>e.value.encrypt||{})},er="VUEPRESS_HOPE_GLOBAL_TOKEN",Ff=()=>{const e=Tp(),n=bl(er,""),t=nu(er,""),s=_(()=>{const{global:a=!1,admin:i=[]}=e.value;return a&&i.length>0}),l=_(()=>{if(s.value){if(n.value)return e.value.admin.some(a=>_a(n.value,a));if(t.value)return e.value.admin.some(a=>_a(t.value,a))}return!1});return{isEncrypted:s,isDecrypted:l,validate:(a,i=!1)=>{(i?n:t).value=a}}},Ul=(e="",n)=>!!e&&_a(e,n),nr="VUEPRESS_HOPE_PATH_TOKEN",jf=()=>{const e=ce(),n=Tp(),t=bl(nr,{}),s=nu(nr,{}),l=i=>dl(n.value.config)?en(n.value.config).filter(r=>Ct(decodeURI(i),r)).sort((r,c)=>c.length-r.length):[],a=i=>{const r=l(i);if(r.length>0){const{config:c={}}=n.value;return{isEncrypted:!0,isDecrypted:r.some(u=>t.value[u]&&c[u].some(p=>Ul(t.value[u],p))||s.value[u]&&c[u].some(p=>Ul(s.value[u],p)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:_(()=>a(e.value.path)),getStatus:a,validate:(i,r=!1)=>{const{config:c={}}=n.value,u=l(e.value.path);for(const p of u)if(c[p].filter(d=>Ul(i,d))){(r?t:s).value[p]=i;break}}}};var Nf=$({name:"GlobalEncrypt",slots:Object,setup(e,{slots:n}){const{isDecrypted:t,isEncrypted:s,validate:l}=Ff(),a=H(!1);return he(()=>{a.value=!0}),()=>o(np,()=>s.value?a.value?t.value?n.default():o(xp,{full:!0,onVerify:l}):null:n.default())}}),Bf=$({name:"LocalEncrypt",slots:Object,setup(e,{slots:n}){const{status:t,validate:s}=jf(),l=H(!1);return he(()=>{l.value=!0}),()=>{const{isEncrypted:a,isDecrypted:i}=t.value;return a?l.value?i?n.default()||null:o(xp,{full:!0,onVerify:s}):null:n.default()||null}}});const Hf=()=>o(le,{name:"back"},()=>o("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),zf=()=>o(le,{name:"home"},()=>o("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var qf=$({name:"SlidePage",setup(){const e=Fe(),n=H(!1),t=Ne(),s=()=>{n.value=!n.value},l=()=>{n.value=!1},a=()=>{l(),window.history.go(-1)},i=()=>{l(),e.push("/")};return N2(t,l),()=>o("div",{class:"vp-reveal-page"},[o(Ka),o("div",{ref:t,class:["vp-reveal-menu",{active:n.value}]},[o("button",{type:"button",class:"menu-button",onClick:()=>s()},o("span",{class:"icon"})),o("button",{type:"button",class:"back-button",onClick:()=>a()},o(Hf)),o("button",{type:"button",class:"home-button",onClick:()=>i()},o(zf))])])}});S0(ze);const Wf=Je({enhance:({app:e,router:n})=>{const{scrollBehavior:t}=n.options;n.options.scrollBehavior=async(...s)=>(await ep().wait(),t(...s)),X3(e),e.component("HopeIcon",ze),e.component("VPLink",Me),e.component("BloggerInfo",di),e.component("GlobalEncrypt",Nf),e.component("LocalEncrypt",Bf)},setup:()=>{Z3(),sm(),vf()},layouts:{Layout:Jm,NotFound:Qm,BlogCategory:kf,BlogHome:Ef,BlogType:xf,Timeline:Lf,Slide:qf}}),Uf=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,Gf=(e,n)=>n.some(t=>{if(re(t))return t===e.key;const{key:s,ctrl:l=!1,shift:a=!1,alt:i=!1}=t;return s===e.key&&l===e.ctrlKey&&a===e.shiftKey&&i===e.altKey}),Kf=/[^\x00-\x7F]/,Jf=e=>e.split(/\s+/g).map(n=>n.trim()).filter(n=>!!n),tr=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),sr=(e,n)=>{const t=n.join(" "),s=Jf(e);if(Kf.test(e))return s.some(i=>t.toLowerCase().indexOf(i)>-1);const l=e.endsWith(" ");return new RegExp(s.map((i,r)=>s.length===r+1&&!l?`(?=.*\\b${tr(i)})`:`(?=.*\\b${tr(i)}\\b)`).join("")+".+","gi").test(t)},Yf=({input:e,hotKeys:n})=>{if(n.value.length===0)return;const t=s=>{e.value&&Gf(s,n.value)&&!Uf(s.target)&&(s.preventDefault(),e.value.focus())};he(()=>{document.addEventListener("keydown",t)}),ul(()=>{document.removeEventListener("keydown",t)})},Qf=[{title:"首页",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"博客技术栈🐔",slug:"博客技术栈",link:"#博客技术栈",children:[]},{level:2,title:"描述💒",slug:"描述",link:"#描述",children:[]},{level:2,title:"探索插件💢",slug:"探索插件",link:"#探索插件",children:[]}],path:"/blog/",pathLocale:"/",extraFields:[]},{title:"自述",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"堆栈😆",slug:"堆栈",link:"#堆栈",children:[{level:3,title:"栈🍎",slug:"栈",link:"#栈",children:[]},{level:3,title:"堆🍏",slug:"堆",link:"#堆",children:[]}]},{level:2,title:"网络协议❤️",slug:"网络协议",link:"#网络协议",children:[{level:3,title:"Http协议😃",slug:"http协议",link:"#http协议",children:[]}]}],path:"/blog/body.html",pathLocale:"/",extraFields:[]},{title:"Desc",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"博客数据🍒",slug:"博客数据",link:"#博客数据",children:[]}],path:"/blog/desc.html",pathLocale:"/",extraFields:[]},{title:"随笔",headers:[{level:2,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[{level:3,title:"ThreadPoolExecutor🍉",slug:"threadpoolexecutor",link:"#threadpoolexecutor",children:[]}]},{level:2,title:"框架理解💔",slug:"框架理解",link:"#框架理解",children:[]},{level:2,title:"名言✋",slug:"名言",link:"#名言",children:[]},{level:2,title:"正则表达式💔",slug:"正则表达式",link:"#正则表达式",children:[]},{level:2,title:"Bnf范式🐯",slug:"bnf范式",link:"#bnf范式",children:[]}],path:"/blog/random.html",pathLocale:"/",extraFields:[]},{title:"Video",headers:[{level:2,title:"觉得不错的b站视频👊",slug:"觉得不错的b站视频",link:"#觉得不错的b站视频",children:[]},{level:2,title:"Ok🌈",slug:"ok",link:"#ok",children:[]}],path:"/blog/video.html",pathLocale:"/",extraFields:[]},{title:"Front page",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍🐱",slug:"介绍",link:"#介绍",children:[{level:3,title:"标签⚡",slug:"标签",link:"#标签",children:[]},{level:3,title:"示例",slug:"示例",link:"#示例",children:[]},{level:3,title:"视频教学🐶",slug:"视频教学",link:"#视频教学",children:[]}]},{level:2,title:"功能🐔",slug:"功能",link:"#功能",children:[]},{level:2,title:"前端模板生成",slug:"前端模板生成",link:"#前端模板生成",children:[]},{level:2,title:"Where语句字段提示",slug:"where语句字段提示",link:"#where语句字段提示",children:[{level:3,title:"用法1",slug:"用法1",link:"#用法1",children:[]},{level:3,title:"用法2",slug:"用法2",link:"#用法2",children:[]}]},{level:2,title:"Json转结构体",slug:"json转结构体",link:"#json转结构体",children:[]},{level:2,title:"结构体转创建表",slug:"结构体转创建表",link:"#结构体转创建表",children:[]},{level:2,title:"Gin接口调试:👊",slug:"gin接口调试",link:"#gin接口调试",children:[]},{level:2,title:"Gin路由导航👊",slug:"gin路由导航",link:"#gin路由导航",children:[]},{level:2,title:"Gorm模板功能👊",slug:"gorm模板功能",link:"#gorm模板功能",children:[{level:3,title:"Easy模板变量🌟",slug:"easy模板变量",link:"#easy模板变量",children:[]},{level:3,title:"Mvc模板变量😆",slug:"mvc模板变量",link:"#mvc模板变量",children:[]},{level:3,title:"测试的平台🐈",slug:"测试的平台",link:"#测试的平台",children:[]},{level:3,title:"测试的数据库🌰",slug:"测试的数据库",link:"#测试的数据库",children:[]},{level:3,title:"生成代码示例🎁",slug:"生成代码示例",link:"#生成代码示例",children:[]}]},{level:2,title:"结尾🐒",slug:"结尾",link:"#结尾",children:[]}],path:"/plugins/gorm.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[],path:"/plugins/io-game.html",pathLocale:"/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]},{level:2,title:"模板功能",slug:"模板功能",link:"#模板功能",children:[{level:3,title:"基础模板",slug:"基础模板",link:"#基础模板",children:[]}]}],path:"/plugins/java-orm.html",pathLocale:"/",extraFields:[]},{title:"RequestTool",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"插件地址",slug:"插件地址",link:"#插件地址",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[{level:3,title:"目前支持",slug:"目前支持",link:"#目前支持",children:[]},{level:3,title:"前置请求",slug:"前置请求",link:"#前置请求",children:[]},{level:3,title:"参数解析",slug:"参数解析",link:"#参数解析",children:[]},{level:3,title:"保存请求历史和参数",slug:"保存请求历史和参数",link:"#保存请求历史和参数",children:[]}]},{level:2,title:"使用技巧",slug:"使用技巧",link:"#使用技巧",children:[{level:3,title:"技巧1",slug:"技巧1",link:"#技巧1",children:[]},{level:3,title:"技巧2",slug:"技巧2",link:"#技巧2",children:[]}]},{level:2,title:"更新说明",slug:"更新说明",link:"#更新说明",children:[]}],path:"/plugins/request-tool.html",pathLocale:"/",extraFields:[]},{title:"RocketCat",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/rocket-cat.html",pathLocale:"/",extraFields:[]},{title:"RsRom",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/plugins/rs-orm.html",pathLocale:"/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"源码地址",slug:"源码地址",link:"#源码地址",children:[]},{level:2,title:"桌面端的实现",slug:"桌面端的实现",link:"#桌面端的实现",children:[]}],path:"/plugins/vue-admin.html",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/",pathLocale:"/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍🍉",slug:"介绍🍉",link:"#介绍🍉",children:[]},{level:2,title:"工具列表🐸",slug:"工具列表🐸",link:"#工具列表🐸",children:[{level:3,title:"Icon素材",slug:"icon素材",link:"#icon素材",children:[]},{level:3,title:"AI代码工具",slug:"ai代码工具",link:"#ai代码工具",children:[]},{level:3,title:"开发工具👊",slug:"开发工具👊",link:"#开发工具👊",children:[]},{level:3,title:"日常工具😆",slug:"日常工具😆",link:"#日常工具😆",children:[]}]},{level:2,title:"桌面美化👻",slug:"桌面美化👻",link:"#桌面美化👻",children:[{level:3,title:"国内🐸",slug:"国内🐸",link:"#国内🐸",children:[]},{level:3,title:"国外🌟",slug:"国外🌟",link:"#国外🌟",children:[]}]}],path:"/util/",pathLocale:"/",extraFields:[]},{title:"通用工具",headers:[{level:2,title:"内存节约工具",slug:"内存节约工具",link:"#内存节约工具",children:[]},{level:2,title:"AI工具",slug:"ai工具",link:"#ai工具",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"日常工具",slug:"日常工具",link:"#日常工具",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]},{level:2,title:"图像工具",slug:"图像工具",link:"#图像工具",children:[{level:3,title:"列表",slug:"列表-2",link:"#列表-2",children:[]}]}],path:"/util/common.html",pathLocale:"/",extraFields:[]},{title:"开发工具",headers:[{level:2,title:"Fleet",slug:"fleet",link:"#fleet",children:[{level:3,title:"主题编辑器",slug:"主题编辑器",link:"#主题编辑器",children:[]}]},{level:2,title:"Github",slug:"github",link:"#github",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"Shell",slug:"shell",link:"#shell",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]}],path:"/util/dev.html",pathLocale:"/",extraFields:[]},{title:"Idea插件",headers:[{level:2,title:"介绍🐔",slug:"介绍🐔",link:"#介绍🐔",children:[]},{level:2,title:"插件🍏",slug:"插件🍏",link:"#插件🍏",children:[]},{level:2,title:"插件文档👏",slug:"插件文档👏",link:"#插件文档👏",children:[]},{level:2,title:"必备插件🎈",slug:"必备插件🎈",link:"#必备插件🎈",children:[{level:3,title:"阿里巴巴部署插件🌟",slug:"阿里巴巴部署插件🌟",link:"#阿里巴巴部署插件🌟",children:[]},{level:3,title:"接口搜索插件💒",slug:"接口搜索插件💒",link:"#接口搜索插件💒",children:[]},{level:3,title:"翻译插件👏",slug:"翻译插件👏",link:"#翻译插件👏",children:[]},{level:3,title:"Gitee插件😎",slug:"gitee插件😎",link:"#gitee插件😎",children:[]},{level:3,title:"彩虹括号插件😄",slug:"彩虹括号插件😄",link:"#彩虹括号插件😄",children:[]},{level:3,title:"背景图片插件🍋",slug:"背景图片插件🍋",link:"#背景图片插件🍋",children:[]},{level:3,title:"SpringBoot热更插件🍊",slug:"springboot热更插件🍊",link:"#springboot热更插件🍊",children:[]}]},{level:2,title:"油猴插件🍒",slug:"油猴插件🍒",link:"#油猴插件🍒",children:[{level:3,title:"Github🍑",slug:"github🍑",link:"#github🍑",children:[]},{level:3,title:"魔法💞",slug:"魔法💞",link:"#魔法💞",children:[]},{level:3,title:"搭建魔法",slug:"搭建魔法",link:"#搭建魔法",children:[]}]},{level:2,title:"Github💢",slug:"github💢",link:"#github💢",children:[{level:3,title:"自动修改host😎",slug:"自动修改host😎",link:"#自动修改host😎",children:[]}]},{level:2,title:"Edge🏧",slug:"edge🏧",link:"#edge🏧",children:[]},{level:2,title:"原型设计💔",slug:"原型设计💔",link:"#原型设计💔",children:[{level:3,title:"激活码😎",slug:"激活码😎",link:"#激活码😎",children:[]},{level:3,title:"下载地址🍊",slug:"下载地址🍊",link:"#下载地址🍊",children:[]}]}],path:"/util/idea.html",pathLocale:"/",extraFields:[]},{title:"English",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]}],path:"/en/english/",pathLocale:"/en/",extraFields:[]},{title:"Day1",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day1.html",pathLocale:"/en/",extraFields:[]},{title:"Day10",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day10.html",pathLocale:"/en/",extraFields:[]},{title:"Day11",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day11.html",pathLocale:"/en/",extraFields:[]},{title:"Day12",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day12.html",pathLocale:"/en/",extraFields:[]},{title:"Day13",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day13.html",pathLocale:"/en/",extraFields:[]},{title:"Day14",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day14.html",pathLocale:"/en/",extraFields:[]},{title:"Day15",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day15.html",pathLocale:"/en/",extraFields:[]},{title:"Day16",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"小知识",slug:"小知识",link:"#小知识",children:[]}]}],path:"/en/english/day16.html",pathLocale:"/en/",extraFields:[]},{title:"Day17",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day17.html",pathLocale:"/en/",extraFields:[]},{title:"Day18",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"review",slug:"review",link:"#review",children:[]},{level:3,title:"practice",slug:"practice",link:"#practice",children:[]}]}],path:"/en/english/day18.html",pathLocale:"/en/",extraFields:[]},{title:"Day19",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"语法分析",slug:"语法分析",link:"#语法分析",children:[{level:3,title:"Is duo from a small town near Beijing?",slug:"is-duo-from-a-small-town-near-beijing",link:"#is-duo-from-a-small-town-near-beijing",children:[]},{level:3,title:"This small town has many good coffee shops.",slug:"this-small-town-has-many-good-coffee-shops",link:"#this-small-town-has-many-good-coffee-shops",children:[]},{level:3,title:"The food at this restaurant is really bad.",slug:"the-food-at-this-restaurant-is-really-bad",link:"#the-food-at-this-restaurant-is-really-bad",children:[]},{level:3,title:"Is the food here good or bad?",slug:"is-the-food-here-good-or-bad",link:"#is-the-food-here-good-or-bad",children:[]},{level:3,title:"Is there a coffee shop near Ben's office?",slug:"is-there-a-coffee-shop-near-ben-s-office",link:"#is-there-a-coffee-shop-near-ben-s-office",children:[]}]}],path:"/en/english/day19.html",pathLocale:"/en/",extraFields:[]},{title:"Day2",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"Do you and Are you",slug:"do-you-and-are-you",link:"#do-you-and-are-you",children:[]}]}],path:"/en/english/day2.html",pathLocale:"/en/",extraFields:[]},{title:"Day3",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day3.html",pathLocale:"/en/",extraFields:[]},{title:"Day4",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"has and have",slug:"has-and-have",link:"#has-and-have",children:[]},{level:3,title:"what and where",slug:"what-and-where",link:"#what-and-where",children:[]},{level:3,title:"He and She",slug:"he-and-she",link:"#he-and-she",children:[]}]}],path:"/en/english/day4.html",pathLocale:"/en/",extraFields:[]},{title:"Day5",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day5.html",pathLocale:"/en/",extraFields:[]},{title:"Day6",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day6.html",pathLocale:"/en/",extraFields:[]},{title:"Day7",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day7.html",pathLocale:"/en/",extraFields:[]},{title:"Day8",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day8.html",pathLocale:"/en/",extraFields:[]},{title:"Day9",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day9.html",pathLocale:"/en/",extraFields:[]},{title:"Study",headers:[{level:2,title:"前缀(12)-义",slug:"前缀-12-义",link:"#前缀-12-义",children:[]},{level:2,title:"后缀(3)-性",slug:"后缀-3-性",link:"#后缀-3-性",children:[]},{level:2,title:"词根",slug:"词根",link:"#词根",children:[]}],path:"/en/english/study.html",pathLocale:"/en/",extraFields:[]},{title:"Plugins",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Menu",slug:"menu",link:"#menu",children:[{level:3,title:"Supported",slug:"supported",link:"#supported",children:[]}]}],path:"/en/plugins/",pathLocale:"/en/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Question",slug:"question",link:"#question",children:[]},{level:2,title:"Label",slug:"label",link:"#label",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Video teaching",slug:"video-teaching",link:"#video-teaching",children:[]},{level:2,title:"Function",slug:"function",link:"#function",children:[]},{level:2,title:"English",slug:"english",link:"#english",children:[]},{level:2,title:"JsonToStruct",slug:"jsontostruct",link:"#jsontostruct",children:[]},{level:2,title:"StructToSql",slug:"structtosql",link:"#structtosql",children:[]},{level:2,title:"Generate code samples",slug:"generate-code-samples",link:"#generate-code-samples",children:[]},{level:2,title:"Currently tested databases",slug:"currently-tested-databases",link:"#currently-tested-databases",children:[]},{level:2,title:"Currently tested platforms",slug:"currently-tested-platforms",link:"#currently-tested-platforms",children:[]},{level:2,title:"End",slug:"end",link:"#end",children:[]}],path:"/en/plugins/gorm.html",pathLocale:"/en/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]}],path:"/en/plugins/jorm.html",pathLocale:"/en/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Implementation on the desktop",slug:"implementation-on-the-desktop",link:"#implementation-on-the-desktop",children:[]}],path:"/en/plugins/vue-admin.html",pathLocale:"/en/",extraFields:[]},{title:"Game",headers:[],path:"/study/game/",pathLocale:"/",extraFields:[]},{title:"Cocos",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🌈",slug:"官网",link:"#官网",children:[]},{level:2,title:"插件💒",slug:"插件",link:"#插件",children:[]}],path:"/study/game/cocos.html",pathLocale:"/",extraFields:[]},{title:"Game",headers:[{level:2,title:"提示❤️",slug:"提示",link:"#提示",children:[]},{level:2,title:"技术🍑",slug:"技术",link:"#技术",children:[{level:3,title:"帧同步🍉",slug:"帧同步",link:"#帧同步",children:[]}]},{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"游戏引擎🍇",slug:"游戏引擎",link:"#游戏引擎",children:[{level:3,title:"Godot💔",slug:"godot",link:"#godot",children:[]},{level:3,title:"Unity🍑",slug:"unity",link:"#unity",children:[]},{level:3,title:"Cocos😎",slug:"cocos",link:"#cocos",children:[]}]},{level:2,title:"游戏素材🏧",slug:"游戏素材",link:"#游戏素材",children:[{level:3,title:"音效🎈",slug:"音效",link:"#音效",children:[]},{level:3,title:"Logo✋",slug:"logo",link:"#logo",children:[]},{level:3,title:"实用性高素材网站",slug:"实用性高素材网站",link:"#实用性高素材网站",children:[]},{level:3,title:"音效素材网",slug:"音效素材网",link:"#音效素材网",children:[]},{level:3,title:"国外🍑",slug:"国外",link:"#国外",children:[]},{level:3,title:"国内🪲",slug:"国内",link:"#国内",children:[]}]},{level:2,title:"准备使用的素材🍎",slug:"准备使用的素材",link:"#准备使用的素材",children:[]},{level:2,title:"游戏服务器框架❤️",slug:"游戏服务器框架",link:"#游戏服务器框架",children:[]},{level:2,title:"游戏政策模板",slug:"游戏政策模板",link:"#游戏政策模板",children:[]}],path:"/study/game/game.html",pathLocale:"/",extraFields:[]},{title:"Godot",headers:[{level:2,title:"介绍🚩",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网❤️",slug:"官网",link:"#官网",children:[]},{level:2,title:"Proto✋",slug:"proto",link:"#proto",children:[]}],path:"/study/game/godot.html",pathLocale:"/",extraFields:[]},{title:"Unity-Camera",headers:[{level:2,title:"日期",slug:"日期",link:"#日期",children:[]},{level:2,title:"步骤",slug:"步骤",link:"#步骤",children:[]}],path:"/study/game/unity-camera.html",pathLocale:"/",extraFields:[]},{title:"Unity",headers:[{level:2,title:"工具",slug:"工具",link:"#工具",children:[]},{level:2,title:"子物体自适应高度布局滚动",slug:"子物体自适应高度布局滚动",link:"#子物体自适应高度布局滚动",children:[]},{level:2,title:"Unity版本自动构建🪲",slug:"unity版本自动构建",link:"#unity版本自动构建",children:[{level:3,title:"脚本",slug:"脚本",link:"#脚本",children:[]}]},{level:2,title:"Unity基础🪲",slug:"unity基础",link:"#unity基础",children:[{level:3,title:"闭包🎈",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"协程🎈",slug:"协程",link:"#协程",children:[]},{level:3,title:"ads接入🎈",slug:"ads接入",link:"#ads接入",children:[]},{level:3,title:"小程序🏧",slug:"小程序",link:"#小程序",children:[]},{level:3,title:"json转换问题😄",slug:"json转换问题",link:"#json转换问题",children:[]}]},{level:2,title:"插件🐔",slug:"插件",link:"#插件",children:[{level:3,title:"Advertisement🍉",slug:"advertisement",link:"#advertisement",children:[]},{level:3,title:"DoTween🐷",slug:"dotween",link:"#dotween",children:[]},{level:3,title:"EasySave🗾",slug:"easysave",link:"#easysave",children:[]},{level:3,title:"LeanTouch💔",slug:"leantouch",link:"#leantouch",children:[]}]},{level:2,title:"开源库🍏",slug:"开源库",link:"#开源库",children:[{level:3,title:"WebSocket🍎",slug:"websocket",link:"#websocket",children:[]},{level:3,title:"Protobuf😎",slug:"protobuf",link:"#protobuf",children:[]},{level:3,title:"KCP🍇",slug:"kcp",link:"#kcp",children:[]},{level:3,title:"LuBan👊",slug:"luban",link:"#luban",children:[]}]},{level:2,title:"微信游戏🪲",slug:"微信游戏",link:"#微信游戏",children:[]},{level:2,title:"UnityApi🐯",slug:"unityapi",link:"#unityapi",children:[{level:3,title:"移动相关👊",slug:"移动相关",link:"#移动相关",children:[]},{level:3,title:"邮件发送💒",slug:"邮件发送",link:"#邮件发送",children:[]},{level:3,title:"IoGameUnity✋",slug:"iogameunity",link:"#iogameunity",children:[]}]}],path:"/study/game/unity.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[],path:"/study/go/",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"Go语言实现",slug:"go语言实现",link:"#go语言实现",children:[{level:3,title:"代理模式",slug:"代理模式",link:"#代理模式",children:[]}]}],path:"/study/go/design-mode.html",pathLocale:"/",extraFields:[]},{title:"高级",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Select",slug:"select",link:"#select",children:[{level:3,title:"常见用法",slug:"常见用法",link:"#常见用法",children:[]},{level:3,title:"使用注意",slug:"使用注意",link:"#使用注意",children:[]}]},{level:2,title:"线程",slug:"线程",link:"#线程",children:[{level:3,title:"轻量级线程变量如何处理的?",slug:"轻量级线程变量如何处理的",link:"#轻量级线程变量如何处理的",children:[]},{level:3,title:"goroutine和线程区别？",slug:"goroutine和线程区别",link:"#goroutine和线程区别",children:[]},{level:3,title:"goroutine能创建多少个？",slug:"goroutine能创建多少个",link:"#goroutine能创建多少个",children:[]}]},{level:2,title:"排序",slug:"排序",link:"#排序",children:[{level:3,title:"基本排序",slug:"基本排序",link:"#基本排序",children:[]}]},{level:2,title:"Chan(缓冲区)",slug:"chan-缓冲区",link:"#chan-缓冲区",children:[]},{level:2,title:"协程上下文",slug:"协程上下文",link:"#协程上下文",children:[{level:3,title:"简易版",slug:"简易版",link:"#简易版",children:[]}]}],path:"/study/go/difficult.html",pathLocale:"/",extraFields:[]},{title:"Gin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"优雅停机",slug:"优雅停机",link:"#优雅停机",children:[]},{level:2,title:"中间件",slug:"中间件",link:"#中间件",children:[{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"cors跨域",slug:"cors跨域",link:"#cors跨域",children:[]},{level:3,title:"缓存redis",slug:"缓存redis",link:"#缓存redis",children:[]},{level:3,title:"认证处理器",slug:"认证处理器",link:"#认证处理器",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"对象封装",slug:"对象封装",link:"#对象封装",children:[]}]}],path:"/study/go/gin.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]},{level:2,title:"语法糖",slug:"语法糖",link:"#语法糖",children:[{level:3,title:"方法返回值赋值",slug:"方法返回值赋值",link:"#方法返回值赋值",children:[]}]},{level:2,title:"go基础部分",slug:"go基础部分",link:"#go基础部分",children:[{level:3,title:"变量赋值",slug:"变量赋值",link:"#变量赋值",children:[]},{level:3,title:"流程语句",slug:"流程语句",link:"#流程语句",children:[]},{level:3,title:"Map和List",slug:"map和list",link:"#map和list",children:[]},{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"自定义错误类型",slug:"自定义错误类型",link:"#自定义错误类型",children:[]},{level:3,title:"闭包",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"接口与结构体",slug:"接口与结构体",link:"#接口与结构体",children:[]},{level:3,title:"指针概念",slug:"指针概念",link:"#指针概念",children:[]},{level:3,title:"多线程通道",slug:"多线程通道",link:"#多线程通道",children:[]}]},{level:2,title:"Go实践",slug:"go实践",link:"#go实践",children:[]},{level:2,title:"开源库",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"高级部分",slug:"高级部分",link:"#高级部分",children:[{level:3,title:"镜像配置",slug:"镜像配置",link:"#镜像配置",children:[]},{level:3,title:"微服务",slug:"微服务",link:"#微服务",children:[]},{level:3,title:"多模块开发",slug:"多模块开发",link:"#多模块开发",children:[]},{level:3,title:"context上下文",slug:"context上下文",link:"#context上下文",children:[]},{level:3,title:"互斥锁",slug:"互斥锁",link:"#互斥锁",children:[]},{level:3,title:"单元测试",slug:"单元测试",link:"#单元测试",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"Jwt",slug:"jwt",link:"#jwt",children:[]},{level:3,title:"打包",slug:"打包",link:"#打包",children:[]}]}],path:"/study/go/go.html",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/study/go/gorm.html",pathLocale:"/",extraFields:[]},{title:"七牛云",headers:[{level:2,title:"七牛云存储对接",slug:"七牛云存储对接",link:"#七牛云存储对接",children:[]},{level:2,title:"后端go具体代码",slug:"后端go具体代码",link:"#后端go具体代码",children:[]},{level:2,title:"前端Vue",slug:"前端vue",link:"#前端vue",children:[]}],path:"/study/go/qiniu.html",pathLocale:"/",extraFields:[]},{title:"Socket",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"自定义协议",slug:"自定义协议",link:"#自定义协议",children:[{level:3,title:"使用示例",slug:"使用示例",link:"#使用示例",children:[]}]},{level:2,title:"简单协议",slug:"简单协议",link:"#简单协议",children:[{level:3,title:"代码",slug:"代码",link:"#代码",children:[]}]}],path:"/study/go/socket.html",pathLocale:"/",extraFields:[]},{title:"Ssh",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"终端连接",slug:"终端连接",link:"#终端连接",children:[]}],path:"/study/go/ssh.html",pathLocale:"/",extraFields:[]},{title:"原理解析",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Gin",slug:"gin",link:"#gin",children:[]},{level:2,title:"Go",slug:"go",link:"#go",children:[]}],path:"/study/go/try.html",pathLocale:"/",extraFields:[]},{title:"工具",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"缓存工具类",slug:"缓存工具类",link:"#缓存工具类",children:[]}]}],path:"/study/go/util.html",pathLocale:"/",extraFields:[]},{title:"Wails",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]}],path:"/study/go/wails.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[],path:"/study/java/",pathLocale:"/",extraFields:[]},{title:"数据结构",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"HashMap✋",slug:"hashmap",link:"#hashmap",children:[]},{level:2,title:"LinkedList🍅",slug:"linkedlist",link:"#linkedlist",children:[]},{level:2,title:"Array🐯",slug:"array",link:"#array",children:[]},{level:2,title:"Stack👏",slug:"stack",link:"#stack",children:[]},{level:2,title:"Queue👏",slug:"queue",link:"#queue",children:[]}],path:"/study/java/data-struct.html",pathLocale:"/",extraFields:[]},{title:"Hutool",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Api😃",slug:"api",link:"#api",children:[{level:3,title:"对象复制🗾",slug:"对象复制",link:"#对象复制",children:[]}]}],path:"/study/java/hutool.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🍎",slug:"官网",link:"#官网",children:[]},{level:2,title:"Api🍒",slug:"api",link:"#api",children:[{level:3,title:"通知🎈",slug:"通知",link:"#通知",children:[]}]}],path:"/study/java/io-game.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Java基础🍊",slug:"java基础",link:"#java基础",children:[{level:3,title:"List工具🍅",slug:"list工具",link:"#list工具",children:[]},{level:3,title:"泛型💔",slug:"泛型",link:"#泛型",children:[]},{level:3,title:"定时任务👊",slug:"定时任务",link:"#定时任务",children:[]},{level:3,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[]}]},{level:2,title:"Jvm😎",slug:"jvm",link:"#jvm",children:[{level:3,title:"线程私有的⛪",slug:"线程私有的",link:"#线程私有的",children:[]},{level:3,title:"线程公有的💢",slug:"线程公有的",link:"#线程公有的",children:[]}]},{level:2,title:"锁🏧",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁🍒",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"悲观锁😃",slug:"悲观锁",link:"#悲观锁",children:[]}]}],path:"/study/java/java.html",pathLocale:"/",extraFields:[]},{title:"目录",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/kd.html",pathLocale:"/",extraFields:[]},{title:"Maven",headers:[{level:2,title:"介绍😄",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"腾讯源镜像",slug:"腾讯源镜像",link:"#腾讯源镜像",children:[]},{level:2,title:"镜像🍋",slug:"镜像",link:"#镜像",children:[]},{level:2,title:"父子依赖👻",slug:"父子依赖",link:"#父子依赖",children:[]}],path:"/study/java/maven.html",pathLocale:"/",extraFields:[]},{title:"Mqtt",headers:[{level:2,title:"介绍🍏",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🍑",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例 SpringBoot🏧",slug:"示例-springboot",link:"#示例-springboot",children:[]}],path:"/study/java/mqtt.html",pathLocale:"/",extraFields:[]},{title:"Mybatis",headers:[{level:2,title:"介绍🍊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"常用标签😃",slug:"常用标签",link:"#常用标签",children:[]},{level:2,title:"使用规范⛪",slug:"使用规范",link:"#使用规范",children:[]},{level:2,title:"原理😎",slug:"原理",link:"#原理",children:[{level:3,title:"spring环境🍇",slug:"spring环境",link:"#spring环境",children:[]}]},{level:2,title:"mybatis-plus🎈",slug:"mybatis-plus",link:"#mybatis-plus",children:[{level:3,title:"LambdaQueryWrapper💢",slug:"lambdaquerywrapper",link:"#lambdaquerywrapper",children:[]},{level:3,title:"配置插件🗾",slug:"配置插件",link:"#配置插件",children:[]},{level:3,title:"MybatisX🎈",slug:"mybatisx",link:"#mybatisx",children:[]}]}],path:"/study/java/mybatis.html",pathLocale:"/",extraFields:[]},{title:"Protostuff序列化",headers:[{level:2,title:"介绍💔",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用😃",slug:"使用",link:"#使用",children:[]}],path:"/study/java/protostuff.html",pathLocale:"/",extraFields:[]},{title:"Redisson",headers:[{level:2,title:"官网⛪",slug:"官网",link:"#官网",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/redisson.html",pathLocale:"/",extraFields:[]},{title:"RocketMq",headers:[{level:2,title:"介绍🐷",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🎁",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例😃",slug:"示例",link:"#示例",children:[]},{level:2,title:"部署💞",slug:"部署",link:"#部署",children:[]}],path:"/study/java/rocket-mq.html",pathLocale:"/",extraFields:[]},{title:"SpringBootDemo",headers:[{level:2,title:"根据条件创建bean的注解👻",slug:"根据条件创建bean的注解",link:"#根据条件创建bean的注解",children:[{level:3,title:"@ConditionalOnProperty💒",slug:"conditionalonproperty",link:"#conditionalonproperty",children:[]},{level:3,title:"@ConditionalOnMissingBean🌅",slug:"conditionalonmissingbean",link:"#conditionalonmissingbean",children:[]},{level:3,title:"@ConditionalOnBean🌟",slug:"conditionalonbean",link:"#conditionalonbean",children:[]},{level:3,title:"@AutoConfigureAfter🐔",slug:"autoconfigureafter",link:"#autoconfigureafter",children:[]},{level:3,title:"@ConditionalOnClass🍊",slug:"conditionalonclass",link:"#conditionalonclass",children:[]},{level:3,title:"@Conditional🍊",slug:"conditional",link:"#conditional",children:[]},{level:3,title:"@AutoConfigureBefore😎",slug:"autoconfigurebefore",link:"#autoconfigurebefore",children:[]}]},{level:2,title:"双MQ控制时间差🍎",slug:"双mq控制时间差",link:"#双mq控制时间差",children:[]},{level:2,title:"文件上传🚩",slug:"文件上传",link:"#文件上传",children:[]}],path:"/study/java/spring-boot-demo.html",pathLocale:"/",extraFields:[]},{title:"SpringBoot",headers:[{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"必读指南",slug:"必读指南",link:"#必读指南",children:[]},{level:2,title:"规范😎",slug:"规范",link:"#规范",children:[]},{level:2,title:"打包原生脚本执行🪲",slug:"打包原生脚本执行",link:"#打包原生脚本执行",children:[]},{level:2,title:"启动和部署🍉",slug:"启动和部署",link:"#启动和部署",children:[]},{level:2,title:"Cors跨域配置🍎 !",slug:"cors跨域配置",link:"#cors跨域配置",children:[]},{level:2,title:"yml配置💞",slug:"yml配置",link:"#yml配置",children:[]},{level:2,title:"测试搭建👻",slug:"测试搭建",link:"#测试搭建",children:[]},{level:2,title:"Controller传参🐔",slug:"controller传参",link:"#controller传参",children:[]},{level:2,title:"全局异常处理🐟",slug:"全局异常处理",link:"#全局异常处理",children:[]},{level:2,title:"文件上传下载🍇",slug:"文件上传下载",link:"#文件上传下载",children:[]},{level:2,title:"SpringBootUtil🎁 !",slug:"springbootutil",link:"#springbootutil",children:[{level:3,title:"HttpServletUtil🐟 !",slug:"httpservletutil",link:"#httpservletutil",children:[]},{level:3,title:"返回对象封装🐷 !",slug:"返回对象封装",link:"#返回对象封装",children:[]},{level:3,title:"TokenUtil⭐",slug:"tokenutil",link:"#tokenutil",children:[]},{level:3,title:"FileUtil🐷 !",slug:"fileutil",link:"#fileutil",children:[]}]},{level:2,title:"拦截器⭐",slug:"拦截器",link:"#拦截器",children:[]},{level:2,title:"参数校验😃",slug:"参数校验",link:"#参数校验",children:[{level:3,title:"依赖🍒",slug:"依赖",link:"#依赖",children:[]},{level:3,title:"DTO❤️",slug:"dto",link:"#dto",children:[]},{level:3,title:"Controller⭐",slug:"controller",link:"#controller",children:[]}]}],path:"/study/java/spring-boot.html",pathLocale:"/",extraFields:[]},{title:"SpringCloudAlibaba",headers:[{level:2,title:"介绍🎁",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"项目🌅",slug:"项目",link:"#项目",children:[]},{level:2,title:"Nacos🌈",slug:"nacos",link:"#nacos",children:[]},{level:2,title:"Seata😎",slug:"seata",link:"#seata",children:[]}],path:"/study/java/spring-cloud-alibaba.html",pathLocale:"/",extraFields:[]},{title:"SpringCloud",headers:[{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/spring-cloud.html",pathLocale:"/",extraFields:[]},{title:"Transaction",headers:[{level:2,title:"介绍🍒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"单机事务🐷",slug:"单机事务",link:"#单机事务",children:[]},{level:2,title:"分布式事务💢",slug:"分布式事务",link:"#分布式事务",children:[]}],path:"/study/java/transaction.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[],path:"/study/linux/",pathLocale:"/",extraFields:[]},{title:"Docker",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装✋",slug:"安装",link:"#安装",children:[]},{level:2,title:"常用命令✋",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"配置镜像源💢",slug:"配置镜像源",link:"#配置镜像源",children:[]}]},{level:2,title:"运行镜像🗾",slug:"运行镜像",link:"#运行镜像",children:[{level:3,title:"Mongodb🍋",slug:"mongodb",link:"#mongodb",children:[]},{level:3,title:"Mysql🏩",slug:"mysql",link:"#mysql",children:[]},{level:3,title:"Redis🍏",slug:"redis",link:"#redis",children:[]},{level:3,title:"PostgresSql😃",slug:"postgressql",link:"#postgressql",children:[]},{level:3,title:"Rabbitmq🏧",slug:"rabbitmq",link:"#rabbitmq",children:[]},{level:3,title:"RocketMq🍒",slug:"rocketmq",link:"#rocketmq",children:[]},{level:3,title:"Nacos🐔",slug:"nacos",link:"#nacos",children:[]},{level:3,title:"Seata❤️",slug:"seata",link:"#seata",children:[]},{level:3,title:"Ubuntu⭐",slug:"ubuntu",link:"#ubuntu",children:[]}]},{level:2,title:"Python🌈",slug:"python",link:"#python",children:[]},{level:2,title:"DrawIo🐔",slug:"drawio",link:"#drawio",children:[]},{level:2,title:"Go部署😎",slug:"go部署",link:"#go部署",children:[{level:3,title:"docker-compose部署🌅",slug:"docker-compose部署",link:"#docker-compose部署",children:[]}]},{level:2,title:"Java部署🍋",slug:"java部署",link:"#java部署",children:[{level:3,title:"docker-compose部署🍒",slug:"docker-compose部署-1",link:"#docker-compose部署-1",children:[]}]}],path:"/study/linux/docker.html",pathLocale:"/",extraFields:[]},{title:"Git使用",headers:[{level:2,title:"介绍🏧",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"下载地址💞",slug:"下载地址",link:"#下载地址",children:[]},{level:2,title:"基本命令💒",slug:"基本命令",link:"#基本命令",children:[]},{level:2,title:"分支🗾",slug:"分支",link:"#分支",children:[{level:3,title:"新建分支🪲",slug:"新建分支",link:"#新建分支",children:[]},{level:3,title:"选择其他分支合并到当前分支🍅",slug:"选择其他分支合并到当前分支",link:"#选择其他分支合并到当前分支",children:[]},{level:3,title:"使用其他分支当作基础分支合并到当前分支上⛪",slug:"使用其他分支当作基础分支合并到当前分支上",link:"#使用其他分支当作基础分支合并到当前分支上",children:[]},{level:3,title:"清除提交历史在创建新分支😆",slug:"清除提交历史在创建新分支",link:"#清除提交历史在创建新分支",children:[]}]}],path:"/study/linux/git.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[{level:2,title:"Shell脚本👻",slug:"shell脚本",link:"#shell脚本",children:[]},{level:2,title:"Ubuntu🐟",slug:"ubuntu",link:"#ubuntu",children:[{level:3,title:"镜像源😎",slug:"镜像源",link:"#镜像源",children:[]}]},{level:2,title:"Centos7🐔",slug:"centos7",link:"#centos7",children:[{level:3,title:"自动化脚本🌈",slug:"自动化脚本",link:"#自动化脚本",children:[]},{level:3,title:"Mysql8安装🌈",slug:"mysql8安装",link:"#mysql8安装",children:[]},{level:3,title:"Ffmpeg💒",slug:"ffmpeg",link:"#ffmpeg",children:[]}]},{level:2,title:"Deepin🎁",slug:"deepin",link:"#deepin",children:[]},{level:2,title:"内存搭配🐸",slug:"内存搭配",link:"#内存搭配",children:[]},{level:2,title:"常用命令👏",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"Date(时间)🌈",slug:"date-时间",link:"#date-时间",children:[]},{level:3,title:"Crontab(定时)🍊",slug:"crontab-定时",link:"#crontab-定时",children:[]},{level:3,title:"Tar(压缩)🗾",slug:"tar-压缩",link:"#tar-压缩",children:[]},{level:3,title:"Zip(压缩)🍒",slug:"zip-压缩",link:"#zip-压缩",children:[]},{level:3,title:"Lrzsz(上传文件)🎁",slug:"lrzsz-上传文件",link:"#lrzsz-上传文件",children:[]},{level:3,title:"Vim🐸",slug:"vim",link:"#vim",children:[]},{level:3,title:"Awk🐯",slug:"awk",link:"#awk",children:[]}]}],path:"/study/linux/linux.html",pathLocale:"/",extraFields:[]},{title:"Mysql",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[{level:3,title:"yum包",slug:"yum包",link:"#yum包",children:[]}]},{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Sql强化",slug:"sql强化",link:"#sql强化",children:[{level:3,title:"计算排名sql",slug:"计算排名sql",link:"#计算排名sql",children:[]}]},{level:2,title:"Mysql基本优化🏩",slug:"mysql基本优化",link:"#mysql基本优化",children:[]},{level:2,title:"索引🌈",slug:"索引",link:"#索引",children:[]},{level:2,title:"索引类型🍉",slug:"索引类型",link:"#索引类型",children:[]},{level:2,title:"事务👻",slug:"事务",link:"#事务",children:[{level:3,title:"特性ACID⭐",slug:"特性acid",link:"#特性acid",children:[]},{level:3,title:"隔离级别🏧",slug:"隔离级别",link:"#隔离级别",children:[]}]},{level:2,title:"锁🍑",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁👻",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"自旋锁(乐观锁递归)🍋",slug:"自旋锁-乐观锁递归",link:"#自旋锁-乐观锁递归",children:[]}]},{level:2,title:"备份🍉",slug:"备份",link:"#备份",children:[{level:3,title:"定时备份命令🪲",slug:"定时备份命令",link:"#定时备份命令",children:[]},{level:3,title:"备份脚本😎",slug:"备份脚本",link:"#备份脚本",children:[]}]},{level:2,title:"Docker🍊",slug:"docker",link:"#docker",children:[]},{level:2,title:"读写分离👏",slug:"读写分离",link:"#读写分离",children:[]}],path:"/study/linux/mysql.html",pathLocale:"/",extraFields:[]},{title:"Nginx",headers:[{level:2,title:"配置😎",slug:"配置",link:"#配置",children:[]}],path:"/study/linux/nginx.html",pathLocale:"/",extraFields:[]},{title:"网络",headers:[{level:2,title:"通信协议🐔",slug:"通信协议",link:"#通信协议",children:[{level:3,title:"RPC🍅",slug:"rpc",link:"#rpc",children:[]},{level:3,title:"HTTP🍒",slug:"http",link:"#http",children:[]}]}],path:"/study/linux/server.html",pathLocale:"/",extraFields:[]},{title:"Shell",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"开始🍎",slug:"开始",link:"#开始",children:[]},{level:2,title:"组合命令🐷",slug:"组合命令",link:"#组合命令",children:[]},{level:2,title:"shell参数🎈",slug:"shell参数",link:"#shell参数",children:[]}],path:"/study/linux/shell.html",pathLocale:"/",extraFields:[]},{title:"Try",headers:[],path:"/study/try/",pathLocale:"/",extraFields:[]},{title:"Antlr",headers:[{level:2,title:"介绍🍇",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"符号作用🍎",slug:"符号作用",link:"#符号作用",children:[]},{level:2,title:"示例🌟",slug:"示例",link:"#示例",children:[{level:3,title:"JSON💞",slug:"json",link:"#json",children:[]},{level:3,title:"ORM🍏",slug:"orm",link:"#orm",children:[]}]}],path:"/study/try/antlr.html",pathLocale:"/",extraFields:[]},{title:"Flutter",headers:[{level:2,title:"介绍💔",slug:"介绍💔",link:"#介绍💔",children:[]},{level:2,title:"镜像💔",slug:"镜像💔",link:"#镜像💔",children:[]},{level:2,title:"项目🐷",slug:"项目🐷",link:"#项目🐷",children:[]},{level:2,title:"官方组件在线示例",slug:"官方组件在线示例",link:"#官方组件在线示例",children:[]},{level:2,title:"明星组件库",slug:"明星组件库",link:"#明星组件库",children:[{level:3,title:"共享数据",slug:"共享数据",link:"#共享数据",children:[]},{level:3,title:"状态库",slug:"状态库",link:"#状态库",children:[]},{level:3,title:"轮播库",slug:"轮播库",link:"#轮播库",children:[]},{level:3,title:"通知库",slug:"通知库",link:"#通知库",children:[]},{level:3,title:"滑块库",slug:"滑块库",link:"#滑块库",children:[]},{level:3,title:"位置库",slug:"位置库",link:"#位置库",children:[]},{level:3,title:"文字库",slug:"文字库",link:"#文字库",children:[]},{level:3,title:"数据库",slug:"数据库",link:"#数据库",children:[]},{level:3,title:"图标库",slug:"图标库",link:"#图标库",children:[]},{level:3,title:"加载动画库",slug:"加载动画库",link:"#加载动画库",children:[]},{level:3,title:"无限滚动库",slug:"无限滚动库",link:"#无限滚动库",children:[]},{level:3,title:"时间选择",slug:"时间选择",link:"#时间选择",children:[]},{level:3,title:"表情库",slug:"表情库",link:"#表情库",children:[]},{level:3,title:"组件动画库",slug:"组件动画库",link:"#组件动画库",children:[]},{level:3,title:"其他库",slug:"其他库",link:"#其他库",children:[]}]},{level:2,title:"介绍🌟",slug:"介绍🌟",link:"#介绍🌟",children:[{level:3,title:"布局介绍⛪️",slug:"布局介绍⛪️",link:"#布局介绍⛪️",children:[]},{level:3,title:"组件组合常用😎",slug:"组件组合常用😎",link:"#组件组合常用😎",children:[]},{level:3,title:"AS插件🌅",slug:"as插件🌅",link:"#as插件🌅",children:[]},{level:3,title:"路由🌈",slug:"路由🌈",link:"#路由🌈",children:[]},{level:3,title:"插件👏",slug:"插件👏",link:"#插件👏",children:[]}]},{level:2,title:"必须安装🐷",slug:"必须安装🐷",link:"#必须安装🐷",children:[]},{level:2,title:"组件😄",slug:"组件😄",link:"#组件😄",children:[{level:3,title:"IgnorePointer😆",slug:"ignorepointer😆",link:"#ignorepointer😆",children:[]}]},{level:2,title:"GetX🍏",slug:"getx🍏",link:"#getx🍏",children:[{level:3,title:"动画操作😃",slug:"动画操作😃",link:"#动画操作😃",children:[]},{level:3,title:"文档🌅",slug:"文档🌅",link:"#文档🌅",children:[]},{level:3,title:"常用Api❤️",slug:"常用api❤️",link:"#常用api❤️",children:[]}]},{level:2,title:"Idea模板💒",slug:"idea模板💒",link:"#idea模板💒",children:[]}],path:"/study/try/flutter.html",pathLocale:"/",extraFields:[]},{title:"Python",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"pip镜像设置✋",slug:"pip镜像设置",link:"#pip镜像设置",children:[]},{level:2,title:"Game🎁",slug:"game",link:"#game",children:[]},{level:2,title:"开源库🚩",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"Pygame🍇",slug:"pygame",link:"#pygame",children:[{level:3,title:"介绍🌟",slug:"介绍-1",link:"#介绍-1",children:[]},{level:3,title:"图片加载⭐",slug:"图片加载",link:"#图片加载",children:[]},{level:3,title:"上下左右移动事件🍉",slug:"上下左右移动事件",link:"#上下左右移动事件",children:[]},{level:3,title:"碰撞处理😎",slug:"碰撞处理",link:"#碰撞处理",children:[]}]},{level:2,title:"爬虫",slug:"爬虫",link:"#爬虫",children:[{level:3,title:"基本示例",slug:"基本示例",link:"#基本示例",children:[]},{level:3,title:"标签获取",slug:"标签获取",link:"#标签获取",children:[]}]},{level:2,title:"Jwt使用",slug:"jwt使用",link:"#jwt使用",children:[]},{level:2,title:"介绍",slug:"介绍-2",link:"#介绍-2",children:[{level:3,title:"图片加载",slug:"图片加载-1",link:"#图片加载-1",children:[]},{level:3,title:"上下左右移动事件",slug:"上下左右移动事件-1",link:"#上下左右移动事件-1",children:[]},{level:3,title:"碰撞处理",slug:"碰撞处理-1",link:"#碰撞处理-1",children:[]}]}],path:"/study/try/python.html",pathLocale:"/",extraFields:[]},{title:"Rust",headers:[{level:2,title:"镜像源🍊",slug:"镜像源",link:"#镜像源",children:[]},{level:2,title:"描述🍑",slug:"描述",link:"#描述",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"基本语法👏",slug:"基本语法",link:"#基本语法",children:[{level:3,title:"变量👻",slug:"变量",link:"#变量",children:[]},{level:3,title:"流程控制💔",slug:"流程控制",link:"#流程控制",children:[]},{level:3,title:"三元表达式💔",slug:"三元表达式",link:"#三元表达式",children:[]},{level:3,title:"列表🍅",slug:"列表",link:"#列表",children:[]},{level:3,title:"Map🐷",slug:"map",link:"#map",children:[]}]},{level:2,title:"开源库🍇",slug:"开源库",link:"#开源库",children:[{level:3,title:"跨平台桌面框架🐔",slug:"跨平台桌面框架",link:"#跨平台桌面框架",children:[]},{level:3,title:"前端框架💢",slug:"前端框架",link:"#前端框架",children:[]},{level:3,title:"后端框架✋",slug:"后端框架",link:"#后端框架",children:[]},{level:3,title:"WebSocket💞",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"关键字👻",slug:"关键字",link:"#关键字",children:[{level:3,title:"unwrap😎",slug:"unwrap",link:"#unwrap",children:[]}]},{level:2,title:"结尾👏",slug:"结尾",link:"#结尾",children:[]}],path:"/study/try/rust.html",pathLocale:"/",extraFields:[]},{title:"Web",headers:[],path:"/study/web/",pathLocale:"/",extraFields:[]},{title:"Axios",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Vue3插件玩法🍒",slug:"vue3插件玩法",link:"#vue3插件玩法",children:[]},{level:2,title:"Npm基本用法💔",slug:"npm基本用法",link:"#npm基本用法",children:[{level:3,title:"Http配置🌟",slug:"http配置",link:"#http配置",children:[]},{level:3,title:"Api配置🍎",slug:"api配置",link:"#api配置",children:[]}]}],path:"/study/web/axios.html",pathLocale:"/",extraFields:[]},{title:"Css",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Css配置🪲",slug:"css配置",link:"#css配置",children:[{level:3,title:"css动画库😎",slug:"css动画库",link:"#css动画库",children:[]}]},{level:2,title:"Flex布局",slug:"flex布局",link:"#flex布局",children:[{level:3,title:"示例",slug:"示例",link:"#示例",children:[]}]}],path:"/study/web/css.html",pathLocale:"/",extraFields:[]},{title:"Electron",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装🍇",slug:"安装",link:"#安装",children:[]},{level:2,title:"问题🍎",slug:"问题",link:"#问题",children:[]},{level:2,title:"通信🐸",slug:"通信",link:"#通信",children:[]},{level:2,title:"vue3 + Electron🏧",slug:"vue3-electron",link:"#vue3-electron",children:[]},{level:2,title:"进程通信💞",slug:"进程通信",link:"#进程通信",children:[{level:3,title:"暴露给渲染进程的API🍎",slug:"暴露给渲染进程的api",link:"#暴露给渲染进程的api",children:[]},{level:3,title:"主进程定义的通道👏",slug:"主进程定义的通道",link:"#主进程定义的通道",children:[]},{level:3,title:"API🍒",slug:"api",link:"#api",children:[]}]},{level:2,title:"打包🍉",slug:"打包",link:"#打包",children:[]},{level:2,title:"项目👏",slug:"项目",link:"#项目",children:[]}],path:"/study/web/electron.html",pathLocale:"/",extraFields:[]},{title:"Node",headers:[{level:2,title:"介绍😃",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"设置npm镜像😆",slug:"设置npm镜像",link:"#设置npm镜像",children:[]},{level:2,title:"javaScript👏",slug:"javascript",link:"#javascript",children:[]},{level:2,title:"linux安装npm👊",slug:"linux安装npm",link:"#linux安装npm",children:[]},{level:2,title:"linux安装yarn👻",slug:"linux安装yarn",link:"#linux安装yarn",children:[]},{level:2,title:"js数据存储🎁",slug:"js数据存储",link:"#js数据存储",children:[{level:3,title:"JSON转换🍅",slug:"json转换",link:"#json转换",children:[]},{level:3,title:"Token保存代码👏",slug:"token保存代码",link:"#token保存代码",children:[]},{level:3,title:"1:持久化存储 localStorage✋",slug:"_1-持久化存储-localstorage",link:"#_1-持久化存储-localstorage",children:[]},{level:3,title:"2:会话存储 sessionStorage💢",slug:"_2-会话存储-sessionstorage",link:"#_2-会话存储-sessionstorage",children:[]},{level:3,title:"webSocket🍉",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"开源库✋",slug:"开源库",link:"#开源库",children:[]}],path:"/study/web/node.html",pathLocale:"/",extraFields:[]},{title:"Vite",headers:[{level:2,title:"介绍👊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置相对路径🍅",slug:"配置相对路径",link:"#配置相对路径",children:[]},{level:2,title:"创建vue项目🪲",slug:"创建vue项目",link:"#创建vue项目",children:[]},{level:2,title:"scss🍅",slug:"scss",link:"#scss",children:[]},{level:2,title:"常见用法🍅",slug:"常见用法",link:"#常见用法",children:[{level:3,title:"导入项目内静态资源🐸",slug:"导入项目内静态资源",link:"#导入项目内静态资源",children:[]}]}],path:"/study/web/vite.html",pathLocale:"/",extraFields:[]},{title:"Vue",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"教程🐟",slug:"教程",link:"#教程",children:[{level:3,title:"插槽slot🍏",slug:"插槽slot",link:"#插槽slot",children:[]},{level:3,title:"复用组件🐯",slug:"复用组件",link:"#复用组件",children:[]}]},{level:2,title:"插件🍎",slug:"插件",link:"#插件",children:[{level:3,title:"桌面端🐯",slug:"桌面端",link:"#桌面端",children:[]},{level:3,title:"移动端😎",slug:"移动端",link:"#移动端",children:[]},{level:3,title:"可视化组件💢",slug:"可视化组件",link:"#可视化组件",children:[]},{level:3,title:"创建项目😄",slug:"创建项目",link:"#创建项目",children:[]}]},{level:2,title:"事件👏",slug:"事件",link:"#事件",children:[{level:3,title:"指针事件😃",slug:"指针事件",link:"#指针事件",children:[]}]},{level:2,title:"组件库🍊",slug:"组件库",link:"#组件库",children:[{level:3,title:"VueCss⭐",slug:"vuecss",link:"#vuecss",children:[]},{level:3,title:"Markdown👻",slug:"markdown",link:"#markdown",children:[]},{level:3,title:"复制工具🍊",slug:"复制工具",link:"#复制工具",children:[]}]}],path:"/study/web/vue.html",pathLocale:"/",extraFields:[]},{title:"Chess",headers:[{level:2,title:"棋牌",slug:"棋牌",link:"#棋牌",children:[]},{level:2,title:"伪代码",slug:"伪代码",link:"#伪代码",children:[]}],path:"/study/game/design/chess.html",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/design-mode/design-mode.html",pathLocale:"/",extraFields:[]},{title:"代理模式",headers:[{level:2,title:"jdk代理",slug:"jdk代理",link:"#jdk代理",children:[]},{level:2,title:"cglib代理",slug:"cglib代理",link:"#cglib代理",children:[]}],path:"/study/java/design-mode/proxy.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"Design",headers:[],path:"/study/game/design/",pathLocale:"/",extraFields:[]},{title:"Design Mode",headers:[],path:"/study/java/design-mode/",pathLocale:"/",extraFields:[]},{title:"分类",headers:[],path:"/category/",pathLocale:"/",extraFields:[]},{title:"标签",headers:[],path:"/tag/",pathLocale:"/",extraFields:[]},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:[]},{title:"收藏",headers:[],path:"/star/",pathLocale:"/",extraFields:[]},{title:"时间轴",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"Category",headers:[],path:"/en/category/",pathLocale:"/",extraFields:[]},{title:"Tag",headers:[],path:"/en/tag/",pathLocale:"/",extraFields:[]},{title:"Articles",headers:[],path:"/en/article/",pathLocale:"/",extraFields:[]},{title:"Star",headers:[],path:"/en/star/",pathLocale:"/",extraFields:[]},{title:"Timeline",headers:[],path:"/en/timeline/",pathLocale:"/",extraFields:[]}],Xf=H(Qf),Zf=()=>Xf,eg=({searchIndex:e,routeLocale:n,query:t,maxSuggestions:s})=>{const l=_(()=>e.value.filter(a=>a.pathLocale===n.value));return _(()=>{const a=t.value.trim().toLowerCase();if(!a)return[];const i=[],r=(c,u)=>{sr(a,[u.title])&&i.push({link:`${c.path}#${u.slug}`,title:c.title,header:u.title});for(const p of u.children){if(i.length>=s.value)return;r(c,p)}};for(const c of l.value){if(i.length>=s.value)break;if(sr(a,[c.title,...c.extraFields])){i.push({link:c.path,title:c.title});continue}for(const u of c.headers){if(i.length>=s.value)break;r(c,u)}}return i})},ng=e=>{const n=H(0);return{focusIndex:n,focusNext:()=>{n.value<e.value.length-1?n.value+=1:n.value=0},focusPrev:()=>{n.value>0?n.value-=1:n.value=e.value.length-1}}},tg=$({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:n,hotKeys:t,maxSuggestions:s}=Ad(e),l=Fe(),a=bn(),i=Zf(),r=H(null),c=H(!1),u=H(""),p=_(()=>n.value[a.value]??{}),d=eg({searchIndex:i,routeLocale:a,query:u,maxSuggestions:s}),{focusIndex:v,focusNext:h,focusPrev:k}=ng(d);Yf({input:r,hotKeys:t});const E=_(()=>c.value&&!!d.value.length),x=()=>{E.value&&k()},g=()=>{E.value&&h()},b=A=>{if(!E.value)return;const S=d.value[A];S&&l.push(S.link).then(()=>{u.value="",v.value=0})};return()=>o("form",{class:"search-box",role:"search"},[o("input",{ref:r,type:"search",placeholder:p.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>c.value=!0,onBlur:()=>c.value=!1,onInput:A=>u.value=A.target.value,onKeydown:A=>{switch(A.key){case"ArrowUp":{x();break}case"ArrowDown":{g();break}case"Enter":{A.preventDefault(),b(v.value);break}}}}),E.value&&o("ul",{class:"suggestions",onMouseleave:()=>v.value=-1},d.value.map(({link:A,title:S,header:B},C)=>o("li",{class:["suggestion",{focus:v.value===C}],onMouseenter:()=>v.value=C,onMousedown:()=>b(C)},o("a",{href:A,onClick:J=>J.preventDefault()},[o("span",{class:"page-title"},S),B&&o("span",{class:"page-header"},`> ${B}`)]))))])}});const sg={},lg=["s","/"],ag=5,ig=Je({enhance({app:e}){e.component("SearchBox",n=>o(tg,{locales:sg,hotKeys:lg,maxSuggestions:ag,...n}))}});const og=(e,n)=>{const t=e.__vccOpts||e;for(const[s,l]of n)t[s]=l;return t},rg={class:"my"},cg={__name:"MyHello",setup(e){return console.log("Hello 组件！"),(n,t)=>(Ev(),Lv("div",rg))}},ug=og(cg,[["__scopeId","data-v-78c1a974"],["__file","MyHello.vue"]]),pg=Je({enhance:({app:e,router:n,siteData:t})=>{e.component("MyComponent",ug)}}),qs=[$1,E0,D0,$0,F0,H0,G0,e3,o3,w3,C3,B3,Wf,ig,pg],dg=[["v-8daa1a0e","/",{y:"h",t:"首页",i:"home"},["/README.md"]],["v-145ac574","/blog/",{d:1654177641e3,e:`<h1> 指南</h1>
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
</ul>`,r:{minutes:.82,words:247},y:"a",t:"指南",i:"creative"},["/blog/README.md"]],["v-a39c4cfa","/blog/body.html",{d:1654178799e3,e:`<h1> 自述</h1>
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
</ul>`,r:{minutes:.56,words:169},y:"a",t:"自述",i:"light",O:1},[":md"]],["v-883c5c18","/blog/desc.html",{d:1666338754e3,e:`<h1> Desc</h1>
<h2> 介绍💒</h2>
<ul>
<li>2022/10/21</li>
</ul>
<h2> 博客数据🍒</h2>
<ul>
<li>此后每月1日更新一次！</li>
<li>日期: 2022/10/21</li>
</ul>
`,r:{minutes:3.54,words:1063},y:"a",t:"Desc",i:"study",O:2},[":md"]],["v-d8862ffc","/blog/random.html",{d:1668649486e3,e:`<h1> 随笔</h1>
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
<p><img src="/images/ThreadPool.png" alt="线程池"></p>`,r:{minutes:.63,words:190},y:"a",t:"随笔",i:"style"},[":md"]],["v-0439749c","/blog/video.html",{d:1665830787e3,e:`<h1> Video</h1>
<h2> 觉得不错的b站视频👊</h2>
`,r:{minutes:.07,words:22},y:"a",t:"Video",i:"support"},[":md"]],["v-2d0a870d","/en/",{y:"h",t:"Front page",i:"home"},["/en/README.md"]],["v-67d16688","/plugins/",{d:1670585469e3,e:`<h1> Plugins</h1>
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
</div>`,r:{minutes:.36,words:109},y:"a",t:"插件"},["/plugins/README.md"]],["v-4a5f1fe4","/plugins/gorm.html",{d:1666055552e3,e:`<h1> Gorm</h1>
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
</div>`,r:{minutes:3.5,words:1049},y:"a",t:"Gorm",i:"hot"},[":md"]],["v-0167aec8","/plugins/io-game.html",{d:1669444007e3,e:`<h1> IoGame</h1>
<ul>
<li>文档迁移至: https://github.com/licheng1013/io-game-example</li>
</ul>
`,r:{minutes:.04,words:12},y:"a",t:"IoGame",i:"java"},[":md"]],["v-33afe9f2","/plugins/java-orm.html",{d:1671088008e3,e:`<h1> JavaOrm</h1>
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
</ul>`,r:{minutes:.92,words:276},y:"a",t:"JavaOrm",i:"java"},[":md"]],["v-4bd5befb","/plugins/request-tool.html",{d:1674268065e3,e:`<h1> RequestTool</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>`,r:{minutes:1.36,words:409},y:"a",t:"RequestTool",i:"tool"},[":md"]],["v-9376cbd8","/plugins/rocket-cat.html",{d:1681096377e3,e:`<h1> RocketCat</h1>
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2> 介绍</h2>
`,r:{minutes:.64,words:193},y:"a",t:"RocketCat",i:"hot"},[":md"]],["v-eadc129a","/plugins/rs-orm.html",{d:1671088008e3,e:`<h1> RsRom</h1>
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
</ul>`,r:{minutes:.17,words:50},y:"a",t:"RsRom",i:"launch"},[":md"]],["v-eeac3bce","/plugins/vue-admin.html",{d:1666055552e3,e:`<h1> VueAdmin</h1>
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
</ul>`,r:{minutes:.5,words:151},y:"a",t:"VueAdmin",i:"vue"},[":md"]],["v-d7188082","/study/",{d:1670583353e3,e:`<h1> 指南</h1>
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
</table>`,r:{minutes:.46,words:137},y:"a",t:"指南",i:"creative"},["/study/README.md"]],["v-156a1114","/util/",{d:1671088008e3,e:`<h1> 小工具</h1>
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
<td>freepik</td>
<td><a href="https://www.freepik.com/" target="_blank" rel="noopener noreferrer">https://www.freepik.com/</a></td>
<td>免费</td>
</tr>
<tr>
<td>igoutu</td>
<td><a href="https://igoutu.cn/" target="_blank" rel="noopener noreferrer">https://igoutu.cn/</a></td>
<td>免费/付费/图标</td>
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
</table>`,r:{minutes:1.37,words:410},y:"a",t:"插件"},["/util/README.md"]],["v-34c0cc3a","/util/common.html",{d:1676268191e3,e:`<h1> 通用工具</h1>
<h2> 内存节约工具</h2>
<ul>
<li>win11有时会吞掉一些内存,使用该工具可以显著减少内存占用</li>
<li>下载该工具运行压缩包里面的: RAMMap.exe 文件,使用下图用法</li>
<li><a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/rammap" target="_blank" rel="noopener noreferrer">rammap</a></li>
</ul>
<p><img src="/images/util1.png" alt=""></p>`,r:{minutes:.8,words:240},y:"a",t:"通用工具"},[":md"]],["v-6b01bef8","/util/dev.html",{d:1676268191e3,e:`<h1> 开发工具</h1>
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
</ul>`,r:{minutes:.29,words:87},y:"a",t:"开发工具"},[":md"]],["v-4331a9ae","/util/idea.html",{d:1660410901e3,e:`<h1> Idea插件</h1>
<h2> 介绍🐔</h2>
<ul>
<li>最牛皮的开发工具 Idea 比 &gt; Eclipse 强大N倍</li>
<li><a href="https://www.ajihuo.com/idea/4222.html" target="_blank" rel="noopener noreferrer">https://www.ajihuo.com/idea/4222.html</a></li>
<li><a href="https://idea.medeming.com/" target="_blank" rel="noopener noreferrer">https://idea.medeming.com/</a></li>
<li><a href="http://idea.javatiku.cn/" target="_blank" rel="noopener noreferrer">http://idea.javatiku.cn/</a></li>
<li>购买激活，没买过</li>
<li><a href="https://javaforall.cn/128783.html" target="_blank" rel="noopener noreferrer">https://javaforall.cn/128783.html</a></li>
<li><a href="https://gitee.com/ja-netfilter/ja-netfilter" target="_blank" rel="noopener noreferrer">https://gitee.com/ja-netfilter/ja-netfilter</a></li>
</ul>`,r:{minutes:1.35,words:405},y:"a",t:"Idea插件",I:0},[":md"]],["v-e4904468","/en/english/",{d:1677410841e3,e:`<h1> English</h1>
<h2> Desc</h2>
<ul>
<li>2023/2/26</li>
<li>I am studying English. This is my diary.</li>
</ul>
`,r:{minutes:.05,words:15},y:"a",t:"English",i:"creative"},["/en/english/README.md"]],["v-c0e604d0","/en/english/day1.html",{d:1677410841e3,e:`<h1> Day1</h1>
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
</table>`,r:{minutes:.38,words:115},y:"a",t:"Day1"},[":md"]],["v-5245b9ca","/en/english/day10.html",{d:1679498628e3,e:`<h1> Day10</h1>
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
</ul>`,r:{minutes:.36,words:108},y:"a",t:"Day10"},[":md"]],["v-53fa9269","/en/english/day11.html",{d:1679756122e3,e:`<h1> Day11</h1>
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
</ul>`,r:{minutes:.73,words:218},y:"a",t:"Day11"},[":md"]],["v-55af6b08","/en/english/day12.html",{d:1679925989e3,e:`<h1> Day12</h1>
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
</ul>`,r:{minutes:.89,words:267},y:"a",t:"Day12"},[":md"]],["v-576443a7","/en/english/day13.html",{d:1680017019e3,e:`<h1> Day13</h1>
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
</ul>`,r:{minutes:.84,words:251},y:"a",t:"Day13"},[":md"]],["v-59191c46","/en/english/day14.html",{d:1680795804e3,e:`<h1> Day14</h1>
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
</ul>`,r:{minutes:.35,words:106},y:"a",t:"Day14"},[":md"]],["v-5acdf4e5","/en/english/day15.html",{d:1680836393e3,e:`<h1> Day15</h1>
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
`,r:{minutes:.12,words:35},y:"a",t:"Day15"},[":md"]],["v-5c82cd84","/en/english/day16.html",{d:1680963034e3,e:`<h1> Day16</h1>
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
</ul>`,r:{minutes:.38,words:114},y:"a",t:"Day16"},[":md"]],["v-5e37a623","/en/english/day17.html",{d:168113406e4,e:`<h1> Day17</h1>
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
</ul>`,r:{minutes:.51,words:153},y:"a",t:"Day17"},[":md"]],["v-5fec7ec2","/en/english/day18.html",{d:1681798252e3,e:`<h1> Day18</h1>
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
</ul>`,r:{minutes:1.11,words:333},y:"a",t:"Day18"},[":md"]],["v-61a15761","/en/english/day19.html",{d:1682083675e3,e:`<h1> Day19</h1>
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
</ul>`,r:{minutes:.55,words:166},y:"a",t:"Day19"},[":md"]],["v-bd7c5392","/en/english/day2.html",{d:1677467697e3,e:`<h1> Day2</h1>
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
</table>`,r:{minutes:.89,words:266},y:"a",t:"Day2"},[":md"]],["v-ba12a254","/en/english/day3.html",{d:1677594117e3,e:`<h1> Day3</h1>
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
</table>`,r:{minutes:.23,words:68},y:"a",t:"Day3"},[":md"]],["v-b6a8f116","/en/english/day4.html",{d:1677675743e3,e:`<h1> Day4</h1>
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
</table>`,r:{minutes:.8,words:241},y:"a",t:"Day4"},[":md"]],["v-b33f3fd8","/en/english/day5.html",{d:1677851348e3,e:`<h1> Day5</h1>
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
</table>`,r:{minutes:.13,words:39},y:"a",t:"Day5"},[":md"]],["v-afd58e9a","/en/english/day6.html",{d:1677945554e3,e:`<h1> Day6</h1>
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
<h2> bing</h2>`,r:{minutes:.06,words:17},y:"a",t:"Day6"},[":md"]],["v-ac6bdd5c","/en/english/day7.html",{d:1678109202e3,e:`<h1> Day7</h1>
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
</table>`,r:{minutes:.06,words:17},y:"a",t:"Day7"},[":md"]],["v-a9022c1e","/en/english/day8.html",{d:1678116734e3,e:`<h1> Day8</h1>
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
</ul>`,r:{minutes:.64,words:191},y:"a",t:"Day8"},[":md"]],["v-a5987ae0","/en/english/day9.html",{d:1679314845e3,e:`<h1> Day9</h1>
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
</ul>`,r:{minutes:.73,words:218},y:"a",t:"Day9"},[":md"]],["v-0a92777c","/en/english/study.html",{d:1678408672e3,e:`<h1> Study</h1>
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
</table>`,r:{minutes:1.28,words:384},y:"a",t:"Study",O:1},[":md"]],["v-9b94b2c8","/en/plugins/",{d:1677410841e3,e:`<h1> Plugins</h1>
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
</ul>`,r:{minutes:.1,words:30},y:"a",t:"Plugins",i:"creative"},["/en/plugins/README.md"]],["v-72f1067a","/en/plugins/gorm.html",{d:1669198074e3,e:`<h1> Gorm</h1>
<div class="hint-container info">
<p class="hint-container-title">Significant</p>
<ul>
<li>2023/2/9</li>
<li>For usage issues, you can send them to me via the email address on the plugin's homepage. <a href="https://plugins.jetbrains.com/plugin/20411-gorm" target="_blank" rel="noopener noreferrer">Gorm</a></li>
<li>English documentation may not be up to date,The latest documentation can be accessed here. <a href="https://licheng1013.github.io/plugins/gorm.html" target="_blank" rel="noopener noreferrer">Docs</a></li>
</ul>
</div>`,r:{minutes:.85,words:255},y:"a",t:"Gorm"},[":md"]],["v-2fbe537d","/en/plugins/jorm.html",{d:1669198074e3,e:`<h1> JavaOrm</h1>
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
</ul>`,r:{minutes:.62,words:186},y:"a",t:"JavaOrm"},[":md"]],["v-987b21a6","/en/plugins/vue-admin.html",{d:1669198074e3,e:`<h1> VueAdmin</h1>
<h2> Desc</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
</ul>
<h2> Example</h2>
<ul>
<li><a href="http://licheng1013.gitee.io/vue3-vite-admin-template/" target="_blank" rel="noopener noreferrer">http://licheng1013.gitee.io/vue3-vite-admin-template/</a></li>
</ul>`,r:{minutes:.22,words:67},y:"a",t:"VueAdmin"},[":md"]],["v-74d2721e","/study/game/",{d:1671088008e3,r:{minutes:.02,words:6},y:"a",t:"Game",i:"app"},["/study/game/README.md"]],["v-05aa60bc","/study/game/cocos.html",{d:1670583353e3,e:`<h1> Cocos</h1>
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
</ul>`,r:{minutes:.08,words:23},y:"a",t:"Cocos"},[":md"]],["v-655dabc9","/study/game/game.html",{d:1670583353e3,e:`<h1> Game</h1>
<h2> 提示❤️</h2>
<ul>
<li>2022/9/22 游戏引擎说明</li>
</ul>
<h2> 技术🍑</h2>
<h3> 帧同步🍉</h3>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/36884005" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/36884005</a></li>
<li><img src="/images/game.png" alt="/images/game.png"></li>
</ul>`,r:{minutes:3.15,words:945},y:"a",t:"Game"},[":md"]],["v-40662ab6","/study/game/godot.html",{d:1670583353e3,e:`<h1> Godot</h1>
<h2> 介绍🚩</h2>
<ul>
<li>2022/9/22</li>
</ul>
<h2> 官网❤️</h2>
<ul>
<li>Github: <a href="https://github.com/godotengine/godot" target="_blank" rel="noopener noreferrer">https://github.com/godotengine/godot</a></li>
<li>中文文档：<a href="https://docs.godotengine.org/zh_CN/stable/index.html" target="_blank" rel="noopener noreferrer">https://docs.godotengine.org/zh_CN/stable/index.html</a></li>
<li>官网：<a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">https://godotengine.org/</a></li>
</ul>`,r:{minutes:.11,words:33},y:"a",t:"Godot"},[":md"]],["v-1532dc1e","/study/game/unity-camera.html",{d:1701479021e3,e:`<h1> Unity-Camera</h1>
<h2> 日期</h2>
<ul>
<li>2023/12/2</li>
</ul>
<h2> 步骤</h2>
<ul>
<li>
<p>1.安装一个插件: <code>Cinemachine</code></p>
</li>
<li>
<p></p>
</li>
<li>
<p>2.创建一个相机: <code>场景内右键后选择: Cinemachine</code></p>
</li>
<li>
<p></p>
</li>
<li>
<p><code>一般会在主相机中添加一个CinemachineBrain</code> 并创建一个 <code>CM vcam1</code> 相机</p>
</li>
<li>
<p>如下图:</p>
</li>
<li>
<p></p>
</li>
<li>
<p>3.创建一个限定范围的碰撞器</p>
</li>
<li>
<p></p>
</li>
<li>
<p>4.设计一个相机跟随的对象和范围</p>
</li>
<li>
<p></p>
</li>
</ul>`,r:{minutes:.3,words:89},y:"a",t:"Unity-Camera"},[":md"]],["v-20932f22","/study/game/unity.html",{d:1670583353e3,e:`<h1> Unity</h1>
<h2> 工具</h2>
<ul>
<li>json序列化库导入!</li>
<li>com.unity.nuget.newtonsoft-json</li>
<li></li>
</ul>
<h2> 子物体自适应高度布局滚动</h2>
<ul>
<li></li>
</ul>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.26,words:1277},y:"a",t:"Unity"},[":md"]],["v-ec4f77b0","/study/go/",{d:1671088008e3,r:{minutes:.02,words:6},y:"a",t:"Go",i:"hot"},["/study/go/README.md"]],["v-1296d022","/study/go/design-mode.html",{d:167643291e4,e:`<h1> 设计模式</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.38,words:115},y:"a",t:"设计模式"},[":md"]],["v-50eda543","/study/go/difficult.html",{d:1677571455e3,e:`<h1> 高级</h1>
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
</ul>`,r:{minutes:5.4,words:1620},y:"a",t:"高级"},[":md"]],["v-73096696","/study/go/gin.html",{d:1670583353e3,e:`<h1> Gin</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.21,words:964},y:"a",t:"Gin"},[":md"]],["v-470743c9","/study/go/go.html",{d:1670583353e3,e:`<h1> Go</h1>
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
</div>`,r:{minutes:4.54,words:1362},y:"a",t:"Go"},[":md"]],["v-97ce3324","/study/go/gorm.html",{d:1670583353e3,e:`<h1> Gorm</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.43,words:128},y:"a",t:"Gorm"},[":md"]],["v-39c90182","/study/go/qiniu.html",{d:1670583353e3,e:`<h1> 七牛云</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.89,words:266},y:"a",t:"七牛云"},[":md"]],["v-0afe37c4","/study/go/socket.html",{d:1670583353e3,e:`<h1> Socket</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.68,words:1705},y:"a",t:"Socket"},[":md"]],["v-a86ab80e","/study/go/ssh.html",{d:1670583353e3,e:`<h1> Ssh</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.56,words:169},y:"a",t:"Ssh"},[":md"]],["v-08700fb4","/study/go/try.html",{d:1684461409e3,e:`<h1> 原理解析</h1>
<h2> 介绍</h2>
<ul>
<li>此文档解析一下go的原理或框架的原理</li>
</ul>
<h2> Gin</h2>
<h2> Go</h2>
`,r:{minutes:.08,words:25},y:"a",t:"原理解析"},[":md"]],["v-0d202a22","/study/go/util.html",{d:1685071701e3,e:`<h1> 工具</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.75,words:226},y:"a",t:"工具"},[":md"]],["v-e2d863ca","/study/go/wails.html",{d:1670583353e3,e:`<h1> Wails</h1>
<h2> 介绍</h2>
<ul>
<li>2022/10/4</li>
<li>跨平台框架</li>
</ul>
<h2> 官网</h2>
<ul>
<li><a href="https://wails.io/zh-Hans/docs/gettingstarted/installation/" target="_blank" rel="noopener noreferrer">https://wails.io/zh-Hans/docs/gettingstarted/installation/</a></li>
</ul>
`,r:{minutes:.06,words:17},y:"a",t:"Wails"},[":md"]],["v-74fcd9ee","/study/java/",{d:1671088008e3,r:{minutes:.02,words:6},y:"a",t:"Java",i:"java"},["/study/java/README.md"]],["v-f4a23b22","/study/java/data-struct.html",{d:1670583353e3,e:`<h1> 数据结构</h1>
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
</ul>`,r:{minutes:1.98,words:595},y:"a",t:"数据结构"},[":md"]],["v-ce60a5b4","/study/java/hutool.html",{d:1670583353e3,e:`<h1> Hutool</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.26,words:77},y:"a",t:"Hutool"},[":md"]],["v-eb998da4","/study/java/io-game.html",{d:1670583353e3,e:`<h1> IoGame</h1>
<h2> 介绍😎</h2>
<ul>
<li>一个游戏框架</li>
</ul>
<h2> 官网🍎</h2>
<ul>
<li>文档 <a href="https://www.yuque.com/iohao/game/wwvg7z" target="_blank" rel="noopener noreferrer">https://www.yuque.com/iohao/game/wwvg7z</a></li>
<li>Gitee <a href="https://gitee.com/iohao/iogame" target="_blank" rel="noopener noreferrer">https://gitee.com/iohao/iogame</a></li>
</ul>`,r:{minutes:.34,words:103},y:"a",t:"IoGame"},[":md"]],["v-e295e46e","/study/java/java.html",{d:1670583353e3,e:`<h1> Java</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.65,words:494},y:"a",t:"Java"},[":md"]],["v-737d6172","/study/java/kd.html",{d:1701673404e3,e:`<h1> 目录</h1>
<h2> 介绍</h2>
<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code>
<span class="token keyword">fun</span> <span class="token function">rename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">val</span> path <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲"</span></span>
    <span class="token comment">// 获取所有文件</span>
    <span class="token keyword">val</span> files <span class="token operator">=</span> FileUtil<span class="token punctuation">.</span><span class="token function">getFiles</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>file <span class="token keyword">in</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修改文件名</span>
        <span class="token keyword">val</span> name <span class="token operator">=</span> file<span class="token punctuation">.</span>name
        <span class="token comment">// 插入字符串</span>
        <span class="token keyword">var</span> newName <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"-"</span></span><span class="token punctuation">,</span><span class="token string-literal singleline"><span class="token string">" "</span></span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span>
        file<span class="token punctuation">.</span><span class="token function">renameTo</span><span class="token punctuation">(</span><span class="token function">File</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>parentFile<span class="token punctuation">,</span> newName<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">fun</span> <span class="token function">downloadBB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> cmd <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲\\\\BBDown.exe"</span></span>
    <span class="token keyword">val</span> json <span class="token operator">=</span> FileUtil<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"C:\\\\Users\\\\bll\\\\Downloads\\\\周借论钢琴曲\\\\json.txt"</span></span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> list <span class="token operator">=</span> JsonUtil<span class="token punctuation">.</span><span class="token function">toObject</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> ArrayList<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>it <span class="token keyword">in</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token keyword">is</span> Map<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">val</span> id <span class="token operator">=</span> it<span class="token punctuation">[</span><span class="token string-literal singleline"><span class="token string">"bvid"</span></span><span class="token punctuation">]</span>
            <span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// 休眠3秒继续</span>
            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 执行命令</span>
<span class="token keyword">fun</span> <span class="token function">exec</span><span class="token punctuation">(</span>cmd<span class="token operator">:</span> String<span class="token punctuation">,</span> bvId<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> processBuilder <span class="token operator">=</span> <span class="token function">ProcessBuilder</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> bvId<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"--audio-only"</span></span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>processBuilder<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    processBuilder<span class="token punctuation">.</span><span class="token function">redirectErrorStream</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> process <span class="token operator">=</span> processBuilder<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> bufferedReader <span class="token operator">=</span> process<span class="token punctuation">.</span>inputStream<span class="token punctuation">.</span><span class="token function">bufferedReader</span><span class="token punctuation">(</span>charset <span class="token operator">=</span> Charsets<span class="token punctuation">.</span>US_ASCII<span class="token punctuation">)</span>
    <span class="token keyword">var</span> line<span class="token operator">:</span> String<span class="token operator">?</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>bufferedReader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">also</span> <span class="token punctuation">{</span> line <span class="token operator">=</span> it <span class="token punctuation">}</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    process<span class="token punctuation">.</span><span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    bufferedReader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.54,words:161},y:"a",t:"目录"},[":md"]],["v-6261669c","/study/java/maven.html",{d:1670583353e3,e:`<h1> Maven</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.76,words:229},y:"a",t:"Maven"},[":md"]],["v-ff9673f2","/study/java/mqtt.html",{d:1670583353e3,e:`<h1> Mqtt</h1>
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
</ul>`,r:{minutes:1.17,words:350},y:"a",t:"Mqtt"},[":md"]],["v-e4f84858","/study/java/mybatis.html",{d:1670583353e3,e:`<h1> Mybatis</h1>
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
</ul>`,r:{minutes:1.57,words:471},y:"a",t:"Mybatis"},[":md"]],["v-53d99f9f","/study/java/protostuff.html",{d:1670583353e3,e:`<h1> Protostuff序列化</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.64,words:191},y:"a",t:"Protostuff序列化"},[":md"]],["v-0ea8a1d4","/study/java/redisson.html",{d:1670583353e3,e:`<h1> Redisson</h1>
<h2> 官网⛪</h2>
<ul>
<li><a href="https://github.com/redisson/redisson" target="_blank" rel="noopener noreferrer">https://github.com/redisson/redisson</a></li>
<li><a href="https://github.com/redisson/redisson/wiki" target="_blank" rel="noopener noreferrer">中文文档</a></li>
</ul>
<h2> 介绍🐯</h2>`,r:{minutes:.08,words:25},y:"a",t:"Redisson"},[":md"]],["v-37e7ddac","/study/java/rocket-mq.html",{d:1670583353e3,e:`<h1> RocketMq</h1>
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
</ul>`,r:{minutes:.2,words:59},y:"a",t:"RocketMq"},[":md"]],["v-6485064d","/study/java/spring-boot-demo.html",{d:1670583353e3,e:`<h1> SpringBootDemo</h1>
<h2> 根据条件创建bean的注解👻</h2>
<h3> @ConditionalOnProperty💒</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"spring.cloud.discovery.enabled"</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnDiscoveryEnabled</span> <span class="token punctuation">{</span>
    <span class="token comment">//在指定的类上添加，可以限制类的bean创建。</span>
    <span class="token comment">//value             配置yml文件中的属性名</span>
    <span class="token comment">//matchIfMissing    设置值,默认为false及默认不创建bean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.34,words:403},y:"a",t:"SpringBootDemo"},[":md"]],["v-9c987956","/study/java/spring-boot.html",{d:1670583353e3,e:`<h1> SpringBoot</h1>
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
</div>`,r:{minutes:6.58,words:1974},y:"a",t:"SpringBoot"},[":md"]],["v-71361d27","/study/java/spring-cloud-alibaba.html",{d:1670583353e3,e:`<h1> SpringCloudAlibaba</h1>
<h2> 介绍🎁</h2>
<ul>
<li>2022/5/10</li>
<li>SpringCloudAlibaba 系列</li>
</ul>
<h2> 项目🌅</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/spring-cloud-alibaba" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/spring-cloud-alibaba</a></li>
</ul>
<h2> Nacos🌈</h2>`,r:{minutes:.2,words:60},y:"a",t:"SpringCloudAlibaba"},[":md"]],["v-4a160b56","/study/java/spring-cloud.html",{d:1670583353e3,e:`<h1> SpringCloud</h1>
<h2> 介绍🐯</h2>
<ul>
<li>待补充</li>
</ul>
`,r:{minutes:.02,words:7},y:"a",t:"SpringCloud"},[":md"]],["v-13b6c6a9","/study/java/transaction.html",{d:1670583353e3,e:`<h1> Transaction</h1>
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
</ul>`,r:{minutes:.6,words:181},y:"a",t:"Transaction"},[":md"]],["v-2e75823a","/study/linux/",{d:1671088008e3,r:{minutes:.02,words:6},y:"a",t:"Linux",i:"linux"},["/study/linux/README.md"]],["v-157e5c3f","/study/linux/docker.html",{d:1670583353e3,e:`<h1> Docker</h1>
<h2> 介绍🐸</h2>
<ul>
<li>2019</li>
<li>一种容器化技术,更快更方便的部署</li>
</ul>
<h2> 安装✋</h2>
<ul>
<li>
<p>这个安装方式貌似无法使用镜像源 <s>- ubuntu20: snap install docker</s></p>
</li>
<li>
<p>docker</p>
</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.31,words:994},y:"a",t:"Docker"},[":md"]],["v-eff126fe","/study/linux/git.html",{d:1670583353e3,e:`<h1> Git使用</h1>
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
</table>`,r:{minutes:1.41,words:422},y:"a",t:"Git使用"},[":md"]],["v-855c2bc2","/study/linux/linux.html",{d:1670583353e3,e:`<h1> Linux</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.48,words:443},y:"a",t:"Linux"},[":md"]],["v-15351731","/study/linux/mysql.html",{d:1670583353e3,e:`<h1> Mysql</h1>
<h2> 安装</h2>
<h3> yum包</h3>
<ul>
<li>
<p>下载依赖</p>
</li>
<li>
<p>https://dev.mysql.com/downloads/repo/yum/</p>
</li>
<li>
<p>安装教程</p>
</li>
<li>
<p>https://dev.mysql.com/doc/mysql-yum-repo-quick-guide/en/</p>
</li>
</ul>
<h2> 介绍💢</h2>
<ul>
<li>2019</li>
<li>mysql 采用c或c++写的</li>
</ul>`,r:{minutes:3.36,words:1009},y:"a",t:"Mysql"},[":md"]],["v-03aa6f39","/study/linux/nginx.html",{d:1670583353e3,e:`<h1> Nginx</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.4,words:119},y:"a",t:"Nginx"},[":md"]],["v-6ab5d8fc","/study/linux/server.html",{d:1670583353e3,e:`<h1> 网络</h1>
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
</ul>`,r:{minutes:.43,words:129},y:"a",t:"网络"},[":md"]],["v-3f92c263","/study/linux/shell.html",{d:1670583353e3,e:`<h1> Shell</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.68,words:203},y:"a",t:"Shell"},[":md"]],["v-9d9383da","/study/try/",{d:1671088008e3,r:{minutes:.02,words:6},y:"a",t:"Try",i:"support"},["/study/try/README.md"]],["v-03a09d9f","/study/try/antlr.html",{d:1670583353e3,e:`<h1> Antlr</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.5,words:151},y:"a",t:"Antlr"},[":md"]],["v-6b7873d0","/study/try/flutter.html",{d:1670583353e3,e:`<h1> Flutter</h1>
<h2> 介绍💔</h2>
<ul>
<li><a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">https://flutter.cn</a></li>
</ul>
<h2> 镜像💔</h2>
<ul>
<li>必做配置否则下载卡死</li>
<li>新建或修改 $HEOM$/.gradle/init.gradle</li>
<li>用户家目录下创建</li>
<li>配置内容</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def repoConfig = {
    all { ArtifactRepository repo -&gt;
        if (repo instanceof MavenArtifactRepository) {
            def url = repo.url.toString()
            if (url.contains('repo1.maven.org/maven2') || url.contains('jcenter.bintray.com')) {
                println "gradle init: (\${repo.name}: \${repo.url}) removed"
                remove repo
            }
        }
    }
    // maven { url 'http://mirrors.cloud.tencent.com/nexus/repository/maven-public/' }
    maven { url 'https://maven.aliyun.com/repository/central' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
}

allprojects {
    buildscript {
        repositories repoConfig
    }

    repositories repoConfig
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.03,words:909},y:"a",t:"Flutter"},[":md"]],["v-566cfcec","/study/try/python.html",{d:1670583353e3,e:`<h1> Python</h1>
<h2> 介绍😎</h2>
<ul>
<li>2018</li>
<li>入门语言，学了又弃，弃而又学</li>
<li>下载：[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li>
</ul>
<h2> pip镜像设置✋</h2>
<ul>
<li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li>
</ul>`,r:{minutes:4.87,words:1460},y:"a",t:"Python"},[":md"]],["v-42dddec2","/study/try/rust.html",{d:1670583353e3,e:`<h1> Rust</h1>
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
</ul>`,r:{minutes:1.72,words:515},y:"a",t:"Rust"},[":md"]],["v-9d9130cc","/study/web/",{d:1671160035e3,r:{minutes:.02,words:6},y:"a",t:"Web",i:"leaf"},["/study/web/README.md"]],["v-5ff88586","/study/web/axios.html",{d:1671160035e3,e:`<h1> Axios</h1>
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
</ul>`,r:{minutes:.98,words:294},y:"a",t:"Axios"},[":md"]],["v-0afa9360","/study/web/css.html",{d:1671160035e3,e:`<h1> Css</h1>
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
</div>`,r:{minutes:.97,words:290},y:"a",t:"Css"},[":md"]],["v-0a822add","/study/web/electron.html",{d:1671160035e3,e:`<h1> Electron</h1>
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
</ul>`,r:{minutes:.95,words:286},y:"a",t:"Electron"},[":md"]],["v-566689bd","/study/web/node.html",{d:1671160035e3,e:`<h1> Node</h1>
<ul>
<li>2022/7/13</li>
</ul>
<h2> 介绍😃</h2>
<ul>
<li>安装</li>
<li>Ubuntu: sudo snap install node <a href="https://github.com/nodejs/snap" target="_blank" rel="noopener noreferrer">https://github.com/nodejs/snap</a></li>
<li>Windows: <a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></li>
</ul>`,r:{minutes:1.33,words:398},y:"a",t:"Node"},[":md"]],["v-50b2aeca","/study/web/vite.html",{d:1671160035e3,e:`<h1> Vite</h1>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.39,words:116},y:"a",t:"Vite"},[":md"]],["v-0221a8ad","/study/web/vue.html",{d:1671160035e3,e:`<h1> Vue</h1>
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
`,r:{minutes:1.81,words:542},y:"a",t:"Vue"},[":md"]],["v-3dc19728","/study/game/design/chess.html",{d:1672821313e3,e:`<h1> Chess</h1>
<h2> 棋牌</h2>
<ul>
<li><a href="https://www.zhihu.com/question/490679283" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/490679283</a></li>
</ul>
<h2> 伪代码</h2>
`,r:{minutes:.03,words:10},y:"a",t:"Chess"},[":md"]],["v-0d6a9cd2","/study/java/design-mode/design-mode.html",{d:1670583353e3,e:`<h1> 设计模式</h1>
<h2> 介绍</h2>
<ul>
<li>待写</li>
</ul>
`,r:{minutes:.03,words:8},y:"a",t:"设计模式"},[":md"]],["v-1a97af14","/study/java/design-mode/proxy.html",{d:1670583353e3,e:`<h1> 代理模式</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.49,words:148},y:"a",t:"代理模式"},[":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-abc9f35a","/study/game/design/",{y:"p",t:"Design"},[]],["v-60fb21ea","/study/java/design-mode/",{y:"p",t:"Design Mode"},[]],["v-5bc93818","/category/",{y:"p",t:"分类",I:0},[]],["v-744d024e","/tag/",{y:"p",t:"标签",I:0},[]],["v-e52c881c","/article/",{y:"p",t:"文章",I:0},[]],["v-154dc4c4","/star/",{y:"p",t:"收藏",I:0},[]],["v-01560935","/timeline/",{y:"p",t:"时间轴",I:0},[]],["v-5decfa84","/en/category/",{y:"p",t:"Category",I:0},[]],["v-075c6c62","/en/tag/",{y:"p",t:"Tag",I:0},[]],["v-506407f4","/en/article/",{y:"p",t:"Articles",I:0},[]],["v-37a8c5a0","/en/star/",{y:"p",t:"Star",I:0},[]],["v-0379cba1","/en/timeline/",{y:"p",t:"Timeline",I:0},[]]];var lr=$({name:"Vuepress",setup(){const e=S1();return()=>o(e.value)}}),vg=()=>dg.reduce((e,[n,t,s,l])=>(e.push({name:n,path:t,component:lr,meta:s},{path:t.endsWith("/")?t+"index.html":t.substring(0,t.length-5),redirect:t},...l.map(a=>({path:a===":md"?t.substring(0,t.length-5)+".md":a,redirect:t}))),e),[{name:"404",path:"/:catchAll(.*)",component:lr}]),hg=Z1,mg=()=>{const e=Mh({history:hg(Ua("/")),routes:vg(),scrollBehavior:(n,t,s)=>s||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,t)=>{var s;(n.path!==t.path||t===On)&&([Kn.value]=await Promise.all([Cn.resolvePageData(n.name),(s=ac[n.name])==null?void 0:s.__asyncLoader()]))}),e},fg=e=>{e.component("ClientOnly",hl),e.component("Content",Ka)},gg=(e,n,t)=>{const s=_(()=>Cn.resolveLayouts(t)),l=xo(()=>n.currentRoute.value.path),a=xo(()=>Cn.resolveRouteLocale(yt.value.locales,l.value)),i=_(()=>Cn.resolveSiteLocaleData(yt.value,a.value)),r=_(()=>Cn.resolvePageFrontmatter(Kn.value)),c=_(()=>Cn.resolvePageHeadTitle(Kn.value,i.value)),u=_(()=>Cn.resolvePageHead(c.value,r.value,i.value)),p=_(()=>Cn.resolvePageLang(Kn.value)),d=_(()=>Cn.resolvePageLayout(Kn.value,s.value));return e.provide(I1,s),e.provide(oc,r),e.provide(D1,c),e.provide(rc,u),e.provide(cc,p),e.provide(uc,d),e.provide(Ga,a),e.provide(dc,i),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>r.value},$head:{get:()=>u.value},$headTitle:{get:()=>c.value},$lang:{get:()=>p.value},$page:{get:()=>Kn.value},$routeLocale:{get:()=>a.value},$site:{get:()=>yt.value},$siteLocale:{get:()=>i.value},$withBase:{get:()=>Ie}}),{layouts:s,pageData:Kn,pageFrontmatter:r,pageHead:u,pageHeadTitle:c,pageLang:p,pageLayout:d,routeLocale:a,siteData:yt,siteLocaleData:i}},kg=()=>{const e=P1(),n=vl(),t=H([]),s=()=>{e.value.forEach(a=>{const i=yg(a);i&&t.value.push(i)})},l=()=>{document.documentElement.lang=n.value,t.value.forEach(a=>{a.parentNode===document.head&&document.head.removeChild(a)}),t.value.splice(0,t.value.length),e.value.forEach(a=>{const i=bg(a);i!==null&&(document.head.appendChild(i),t.value.push(i))})};cn(C1,l),he(()=>{s(),l(),fe(()=>e.value,l)})},yg=([e,n,t=""])=>{const s=Object.entries(n).map(([r,c])=>re(c)?`[${r}=${JSON.stringify(c)}]`:c===!0?`[${r}]`:"").join(""),l=`head > ${e}${s}`;return Array.from(document.querySelectorAll(l)).find(r=>r.innerText===t)||null},bg=([e,n,t])=>{if(!re(e))return null;const s=document.createElement(e);return dl(n)&&Object.entries(n).forEach(([l,a])=>{re(a)?s.setAttribute(l,a):a===!0&&s.setAttribute(l,"")}),re(t)&&s.appendChild(document.createTextNode(t)),s},_g=f1,wg=async()=>{var t;const e=_g({name:"VuepressApp",setup(){var s;kg();for(const l of qs)(s=l.setup)==null||s.call(l);return()=>[o(Ec),...qs.flatMap(({rootComponents:l=[]})=>l.map(a=>o(a)))]}}),n=mg();fg(e),gg(e,n,qs);for(const s of qs)await((t=s.enhance)==null?void 0:t.call(s,{app:e,router:n,siteData:yt}));return e.use(n),{app:e,router:n}};wg().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{og as _,Ur as a,$e as b,Lv as c,wg as createVueApp,xg as d,Gr as e,Ev as o,Ze as r,jd as w};

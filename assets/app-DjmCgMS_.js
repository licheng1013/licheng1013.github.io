function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/java-orm.html-B_rufssg.js","assets/img-zi5H8HGR.js","assets/jorm.html-C-q1i_Kw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dl(n,e){const t=new Set(n.split(","));return e?s=>t.has(s.toLowerCase()):s=>t.has(s)}const xn={},vt=[],ne=()=>{},Gu=()=>!1,us=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hl=n=>n.startsWith("onUpdate:"),In=Object.assign,fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ku=Object.prototype.hasOwnProperty,un=(n,e)=>Ku.call(n,e),Z=Array.isArray,Vt=n=>sa(n)==="[object Map]",Ju=n=>sa(n)==="[object Set]",tn=n=>typeof n=="function",Mn=n=>typeof n=="string",ta=n=>typeof n=="symbol",Ln=n=>n!==null&&typeof n=="object",Ni=n=>(Ln(n)||tn(n))&&tn(n.then)&&tn(n.catch),Yu=Object.prototype.toString,sa=n=>Yu.call(n),Xu=n=>sa(n).slice(8,-1),Qu=n=>sa(n)==="[object Object]",gl=n=>Mn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,yt=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Zu=/-(\w)/g,se=aa(n=>n.replace(Zu,(e,t)=>t?t.toUpperCase():"")),np=/\B([A-Z])/g,At=aa(n=>n.replace(np,"-$1").toLowerCase()),ps=aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=aa(n=>n?`on${ps(n)}`:""),qe=(n,e)=>!Object.is(n,e),ba=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Gs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ep=n=>{const e=parseFloat(n);return isNaN(e)?n:e},tp=n=>{const e=Mn(n)?Number(n):NaN;return isNaN(e)?n:e};let co;const Hi=()=>co||(co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ml(n){if(Z(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],a=Mn(s)?op(s):ml(s);if(a)for(const l in a)e[l]=a[l]}return e}else if(Mn(n)||Ln(n))return n}const sp=/;(?![^(]*\))/g,ap=/:([^]+)/,lp=/\/\*[^]*?\*\//g;function op(n){const e={};return n.replace(lp,"").split(sp).forEach(t=>{if(t){const s=t.split(ap);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kl(n){let e="";if(Mn(n))e=n;else if(Z(n))for(let t=0;t<n.length;t++){const s=kl(n[t]);s&&(e+=s+" ")}else if(Ln(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ip="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rp=dl(ip);function Vi(n){return!!n||n===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yn;class cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Yn,!e&&Yn&&(this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Yn;try{return Yn=this,e()}finally{Yn=t}}}on(){Yn=this}off(){Yn=this.parent}stop(e){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function up(n,e=Yn){e&&e.active&&e.effects.push(n)}function Bi(){return Yn}function pp(n){Yn&&Yn.cleanups.push(n)}let tt;class vl{constructor(e,t,s,a){this.fn=e,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,up(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,lt();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(dp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ot()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Be,t=tt;try{return Be=!0,tt=this,this._runnings++,uo(this),this.fn()}finally{po(this),this._runnings--,tt=t,Be=e}}stop(){var e;this.active&&(uo(this),po(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function dp(n){return n.value}function uo(n){n._trackId++,n._depsLength=0}function po(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)zi(n.deps[e],n);n.deps.length=n._depsLength}}function zi(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Be=!0,Ha=0;const qi=[];function lt(){qi.push(Be),Be=!1}function ot(){const n=qi.pop();Be=n===void 0?!0:n}function yl(){Ha++}function bl(){for(Ha--;!Ha&&Va.length;)Va.shift()()}function Wi(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const s=n.deps[n._depsLength];s!==e?(s&&zi(s,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Va=[];function Ui(n,e,t){yl();for(const s of n.keys()){let a;s._dirtyLevel<e&&(a??(a=n.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(a??(a=n.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Va.push(s.scheduler)))}bl()}const Gi=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},Ks=new WeakMap,st=Symbol(""),Ba=Symbol("");function Gn(n,e,t){if(Be&&tt){let s=Ks.get(n);s||Ks.set(n,s=new Map);let a=s.get(t);a||s.set(t,a=Gi(()=>s.delete(t))),Wi(tt,a)}}function Se(n,e,t,s,a,l){const o=Ks.get(n);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(t==="length"&&Z(n)){const r=Number(s);o.forEach((u,p)=>{(p==="length"||!ta(p)&&p>=r)&&c.push(u)})}else switch(t!==void 0&&c.push(o.get(t)),e){case"add":Z(n)?gl(t)&&c.push(o.get("length")):(c.push(o.get(st)),Vt(n)&&c.push(o.get(Ba)));break;case"delete":Z(n)||(c.push(o.get(st)),Vt(n)&&c.push(o.get(Ba)));break;case"set":Vt(n)&&c.push(o.get(st));break}yl();for(const r of c)r&&Ui(r,4);bl()}function hp(n,e){var t;return(t=Ks.get(n))==null?void 0:t.get(e)}const fp=dl("__proto__,__v_isRef,__isVue"),Ki=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ta)),ho=gp();function gp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const s=on(this);for(let l=0,o=this.length;l<o;l++)Gn(s,"get",l+"");const a=s[e](...t);return a===-1||a===!1?s[e](...t.map(on)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){lt(),yl();const s=on(this)[e].apply(this,t);return bl(),ot(),s}}),n}function mp(n){const e=on(this);return Gn(e,"has",n),e.hasOwnProperty(n)}class Ji{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){const a=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(a?l?Ip:Zi:l?Qi:Xi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Z(e);if(!a){if(o&&un(ho,t))return Reflect.get(ho,t,s);if(t==="hasOwnProperty")return mp}const c=Reflect.get(e,t,s);return(ta(t)?Ki.has(t):fp(t))||(a||Gn(e,"get",t),l)?c:Pn(c)?o&&gl(t)?c:c.value:Ln(c)?a?it(c):ds(c):c}}class Yi extends Ji{constructor(e=!1){super(!1,e)}set(e,t,s,a){let l=e[t];if(!this._isShallow){const r=xt(l);if(!Js(s)&&!xt(s)&&(l=on(l),s=on(s)),!Z(e)&&Pn(l)&&!Pn(s))return r?!1:(l.value=s,!0)}const o=Z(e)&&gl(t)?Number(t)<e.length:un(e,t),c=Reflect.set(e,t,s,a);return e===on(a)&&(o?qe(s,l)&&Se(e,"set",t,s):Se(e,"add",t,s)),c}deleteProperty(e,t){const s=un(e,t);e[t];const a=Reflect.deleteProperty(e,t);return a&&s&&Se(e,"delete",t,void 0),a}has(e,t){const s=Reflect.has(e,t);return(!ta(t)||!Ki.has(t))&&Gn(e,"has",t),s}ownKeys(e){return Gn(e,"iterate",Z(e)?"length":st),Reflect.ownKeys(e)}}class kp extends Ji{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vp=new Yi,yp=new kp,bp=new Yi(!0),wl=n=>n,la=n=>Reflect.getPrototypeOf(n);function As(n,e,t=!1,s=!1){n=n.__v_raw;const a=on(n),l=on(e);t||(qe(e,l)&&Gn(a,"get",e),Gn(a,"get",l));const{has:o}=la(a),c=s?wl:t?El:Yt;if(o.call(a,e))return c(n.get(e));if(o.call(a,l))return c(n.get(l));n!==a&&n.get(e)}function Ps(n,e=!1){const t=this.__v_raw,s=on(t),a=on(n);return e||(qe(n,a)&&Gn(s,"has",n),Gn(s,"has",a)),n===a?t.has(n):t.has(n)||t.has(a)}function Ds(n,e=!1){return n=n.__v_raw,!e&&Gn(on(n),"iterate",st),Reflect.get(n,"size",n)}function fo(n){n=on(n);const e=on(this);return la(e).has.call(e,n)||(e.add(n),Se(e,"add",n,n)),this}function go(n,e){e=on(e);const t=on(this),{has:s,get:a}=la(t);let l=s.call(t,n);l||(n=on(n),l=s.call(t,n));const o=a.call(t,n);return t.set(n,e),l?qe(e,o)&&Se(t,"set",n,e):Se(t,"add",n,e),this}function mo(n){const e=on(this),{has:t,get:s}=la(e);let a=t.call(e,n);a||(n=on(n),a=t.call(e,n)),s&&s.call(e,n);const l=e.delete(n);return a&&Se(e,"delete",n,void 0),l}function ko(){const n=on(this),e=n.size!==0,t=n.clear();return e&&Se(n,"clear",void 0,void 0),t}function Rs(n,e){return function(s,a){const l=this,o=l.__v_raw,c=on(o),r=e?wl:n?El:Yt;return!n&&Gn(c,"iterate",st),o.forEach((u,p)=>s.call(a,r(u),r(p),l))}}function Os(n,e,t){return function(...s){const a=this.__v_raw,l=on(a),o=Vt(l),c=n==="entries"||n===Symbol.iterator&&o,r=n==="keys"&&o,u=a[n](...s),p=t?wl:e?El:Yt;return!e&&Gn(l,"iterate",r?Ba:st),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:c?[p(d[0]),p(d[1])]:p(d),done:h}},[Symbol.iterator](){return this}}}}function De(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function wp(){const n={get(l){return As(this,l)},get size(){return Ds(this)},has:Ps,add:fo,set:go,delete:mo,clear:ko,forEach:Rs(!1,!1)},e={get(l){return As(this,l,!1,!0)},get size(){return Ds(this)},has:Ps,add:fo,set:go,delete:mo,clear:ko,forEach:Rs(!1,!0)},t={get(l){return As(this,l,!0)},get size(){return Ds(this,!0)},has(l){return Ps.call(this,l,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Rs(!0,!1)},s={get(l){return As(this,l,!0,!0)},get size(){return Ds(this,!0)},has(l){return Ps.call(this,l,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=Os(l,!1,!1),t[l]=Os(l,!0,!1),e[l]=Os(l,!1,!0),s[l]=Os(l,!0,!0)}),[n,t,e,s]}const[_p,xp,Ep,Lp]=wp();function _l(n,e){const t=e?n?Lp:Ep:n?xp:_p;return(s,a,l)=>a==="__v_isReactive"?!n:a==="__v_isReadonly"?n:a==="__v_raw"?s:Reflect.get(un(t,a)&&a in s?t:s,a,l)}const Tp={get:_l(!1,!1)},Cp={get:_l(!1,!0)},Sp={get:_l(!0,!1)},Xi=new WeakMap,Qi=new WeakMap,Zi=new WeakMap,Ip=new WeakMap;function Ap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pp(n){return n.__v_skip||!Object.isExtensible(n)?0:Ap(Xu(n))}function ds(n){return xt(n)?n:xl(n,!1,vp,Tp,Xi)}function nr(n){return xl(n,!1,bp,Cp,Qi)}function it(n){return xl(n,!0,yp,Sp,Zi)}function xl(n,e,t,s,a){if(!Ln(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const l=a.get(n);if(l)return l;const o=Pp(n);if(o===0)return n;const c=new Proxy(n,o===2?s:t);return a.set(n,c),c}function bt(n){return xt(n)?bt(n.__v_raw):!!(n&&n.__v_isReactive)}function xt(n){return!!(n&&n.__v_isReadonly)}function Js(n){return!!(n&&n.__v_isShallow)}function er(n){return bt(n)||xt(n)}function on(n){const e=n&&n.__v_raw;return e?on(e):n}function tr(n){return Object.isExtensible(n)&&Gs(n,"__v_skip",!0),n}const Yt=n=>Ln(n)?ds(n):n,El=n=>Ln(n)?it(n):n;class sr{constructor(e,t,s,a){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vl(()=>e(this._value),()=>Bt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const e=on(this);return(!e._cacheable||e.effect.dirty)&&qe(e._value,e._value=e.effect.run())&&Bt(e,4),Ll(e),e.effect._dirtyLevel>=2&&Bt(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Dp(n,e,t=!1){let s,a;const l=tn(n);return l?(s=n,a=ne):(s=n.get,a=n.set),new sr(s,a,l||!a,t)}function Ll(n){var e;Be&&tt&&(n=on(n),Wi(tt,(e=n.dep)!=null?e:n.dep=Gi(()=>n.dep=void 0,n instanceof sr?n:void 0)))}function Bt(n,e=4,t){n=on(n);const s=n.dep;s&&Ui(s,e)}function Pn(n){return!!(n&&n.__v_isRef===!0)}function J(n){return ar(n,!1)}function jn(n){return ar(n,!0)}function ar(n,e){return Pn(n)?n:new Rp(n,e)}class Rp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:on(e),this._value=t?e:Yt(e)}get value(){return Ll(this),this._value}set value(e){const t=this.__v_isShallow||Js(e)||xt(e);e=t?e:on(e),qe(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Yt(e),Bt(this,4))}}function ie(n){return Pn(n)?n.value:n}const Op={get:(n,e,t)=>ie(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const a=n[e];return Pn(a)&&!Pn(t)?(a.value=t,!0):Reflect.set(n,e,t,s)}};function lr(n){return bt(n)?n:new Proxy(n,Op)}class Mp{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=e(()=>Ll(this),()=>Bt(this));this._get=t,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Tl(n){return new Mp(n)}function jp(n){const e=Z(n)?new Array(n.length):{};for(const t in n)e[t]=or(n,t);return e}class Fp{constructor(e,t,s){this._object=e,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return hp(on(this._object),this._key)}}class $p{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Pt(n,e,t){return Pn(n)?n:tn(n)?new $p(n):Ln(n)&&arguments.length>1?or(n,e,t):J(n)}function or(n,e,t){const s=n[e];return Pn(s)?s:new Fp(n,e,t)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ze(n,e,t,s){try{return s?n(...s):n()}catch(a){hs(a,e,t)}}function te(n,e,t,s){if(tn(n)){const l=ze(n,e,t,s);return l&&Ni(l)&&l.catch(o=>{hs(o,e,t)}),l}const a=[];for(let l=0;l<n.length;l++)a.push(te(n[l],e,t,s));return a}function hs(n,e,t,s=!0){const a=e?e.vnode:null;if(e){let l=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](n,o,c)===!1)return}l=l.parent}const r=e.appContext.config.errorHandler;if(r){ze(r,null,10,[n,o,c]);return}}Np(n,t,a,s)}function Np(n,e,t,s=!0){console.error(n)}let Xt=!1,za=!1;const $n=[];let ke=0;const wt=[];let Fe=null,Ze=0;const ir=Promise.resolve();let Cl=null;function Ge(n){const e=Cl||ir;return n?e.then(this?n.bind(this):n):e}function Hp(n){let e=ke+1,t=$n.length;for(;e<t;){const s=e+t>>>1,a=$n[s],l=Qt(a);l<n||l===n&&a.pre?e=s+1:t=s}return e}function oa(n){(!$n.length||!$n.includes(n,Xt&&n.allowRecurse?ke+1:ke))&&(n.id==null?$n.push(n):$n.splice(Hp(n.id),0,n),rr())}function rr(){!Xt&&!za&&(za=!0,Cl=ir.then(cr))}function Vp(n){const e=$n.indexOf(n);e>ke&&$n.splice(e,1)}function Bp(n){Z(n)?wt.push(...n):(!Fe||!Fe.includes(n,n.allowRecurse?Ze+1:Ze))&&wt.push(n),rr()}function vo(n,e,t=Xt?ke+1:0){for(;t<$n.length;t++){const s=$n[t];if(s&&s.pre){if(n&&s.id!==n.uid)continue;$n.splice(t,1),t--,s()}}}function Ys(n){if(wt.length){const e=[...new Set(wt)].sort((t,s)=>Qt(t)-Qt(s));if(wt.length=0,Fe){Fe.push(...e);return}for(Fe=e,Ze=0;Ze<Fe.length;Ze++)Fe[Ze]();Fe=null,Ze=0}}const Qt=n=>n.id==null?1/0:n.id,zp=(n,e)=>{const t=Qt(n)-Qt(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function cr(n){za=!1,Xt=!0,$n.sort(zp);try{for(ke=0;ke<$n.length;ke++){const e=$n[ke];e&&e.active!==!1&&ze(e,null,14)}}finally{ke=0,$n.length=0,Ys(),Xt=!1,Cl=null,($n.length||wt.length)&&cr()}}function qp(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||xn;let a=t;const l=e.startsWith("update:"),o=l&&e.slice(7);if(o&&o in s){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[p]||xn;h&&(a=t.map(f=>Mn(f)?f.trim():f)),d&&(a=t.map(ep))}let c,r=s[c=ya(e)]||s[c=ya(se(e))];!r&&l&&(r=s[c=ya(At(e))]),r&&te(r,n,6,a);const u=s[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,te(u,n,6,a)}}function ur(n,e,t=!1){const s=e.emitsCache,a=s.get(n);if(a!==void 0)return a;const l=n.emits;let o={},c=!1;if(!tn(n)){const r=u=>{const p=ur(u,e,!0);p&&(c=!0,In(o,p))};!t&&e.mixins.length&&e.mixins.forEach(r),n.extends&&r(n.extends),n.mixins&&n.mixins.forEach(r)}return!l&&!c?(Ln(n)&&s.set(n,null),null):(Z(l)?l.forEach(r=>o[r]=null):In(o,l),Ln(n)&&s.set(n,o),o)}function ia(n,e){return!n||!us(e)?!1:(e=e.slice(2).replace(/Once$/,""),un(n,e[0].toLowerCase()+e.slice(1))||un(n,At(e))||un(n,e))}let ee=null,pr=null;function Xs(n){const e=ee;return ee=n,pr=n&&n.type.__scopeId||null,e}function Wp(n,e=ee,t){if(!e||n._n)return n;const s=(...a)=>{s._d&&Ao(-1);const l=Xs(e);let o;try{o=n(...a)}finally{Xs(l),s._d&&Ao(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wa(n){const{type:e,vnode:t,proxy:s,withProxy:a,props:l,propsOptions:[o],slots:c,attrs:r,emit:u,render:p,renderCache:d,data:h,setupState:f,ctx:k,inheritAttrs:_}=n;let w,y;const E=Xs(n);try{if(t.shapeFlag&4){const T=a||s,j=T;w=oe(p.call(j,T,d,l,f,h,k)),y=r}else{const T=e;w=oe(T.length>1?T(l,{attrs:r,slots:c,emit:u}):T(l,null)),y=e.props?r:Up(r)}}catch(T){Gt.length=0,hs(T,n,1),w=An(ye)}let v=w;if(y&&_!==!1){const T=Object.keys(y),{shapeFlag:j}=v;T.length&&j&7&&(o&&T.some(hl)&&(y=Gp(y,o)),v=We(v,y))}return t.dirs&&(v=We(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),w=v,Xs(E),w}const Up=n=>{let e;for(const t in n)(t==="class"||t==="style"||us(t))&&((e||(e={}))[t]=n[t]);return e},Gp=(n,e)=>{const t={};for(const s in n)(!hl(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function Kp(n,e,t){const{props:s,children:a,component:l}=n,{props:o,children:c,patchFlag:r}=e,u=l.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&r>=0){if(r&1024)return!0;if(r&16)return s?yo(s,o,u):!!o;if(r&8){const p=e.dynamicProps;for(let d=0;d<p.length;d++){const h=p[d];if(o[h]!==s[h]&&!ia(u,h))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?yo(s,o,u):!0:!!o;return!1}function yo(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let a=0;a<s.length;a++){const l=s[a];if(e[l]!==n[l]&&!ia(t,l))return!0}return!1}function Jp({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const dr="components";function ce(n,e){return Xp(dr,n,!0,e)||n}const Yp=Symbol.for("v-ndc");function Xp(n,e,t=!0,s=!1){const a=ee||On;if(a){const l=a.type;if(n===dr){const c=Kd(l,!1);if(c&&(c===e||c===se(e)||c===ps(se(e))))return l}const o=bo(a[n]||l[n],e)||bo(a.appContext[n],e);return!o&&s?l:o}}function bo(n,e){return n&&(n[e]||n[se(e)]||n[ps(se(e))])}const Qp=n=>n.__isSuspense;function hr(n,e){e&&e.pendingBranch?Z(n)?e.effects.push(...n):e.effects.push(n):Bp(n)}const Zp=Symbol.for("v-scx"),nd=()=>yn(Zp);function fr(n,e){return Sl(n,null,e)}const Ms={};function dn(n,e,t){return Sl(n,e,t)}function Sl(n,e,{immediate:t,deep:s,flush:a,once:l,onTrack:o,onTrigger:c}=xn){if(e&&l){const L=e;e=(...q)=>{L(...q),j()}}const r=On,u=L=>s===!0?L:kt(L,s===!1?1:void 0);let p,d=!1,h=!1;if(Pn(n)?(p=()=>n.value,d=Js(n)):bt(n)?(p=()=>u(n),d=!0):Z(n)?(h=!0,d=n.some(L=>bt(L)||Js(L)),p=()=>n.map(L=>{if(Pn(L))return L.value;if(bt(L))return u(L);if(tn(L))return ze(L,r,2)})):tn(n)?e?p=()=>ze(n,r,2):p=()=>(f&&f(),te(n,r,3,[k])):p=ne,e&&s){const L=p;p=()=>kt(L())}let f,k=L=>{f=v.onStop=()=>{ze(L,r,4),f=v.onStop=void 0}},_;if(vs)if(k=ne,e?t&&te(e,r,3,[p(),h?[]:void 0,k]):p(),a==="sync"){const L=nd();_=L.__watcherHandles||(L.__watcherHandles=[])}else return ne;let w=h?new Array(n.length).fill(Ms):Ms;const y=()=>{if(!(!v.active||!v.dirty))if(e){const L=v.run();(s||d||(h?L.some((q,N)=>qe(q,w[N])):qe(L,w)))&&(f&&f(),te(e,r,3,[L,w===Ms?void 0:h&&w[0]===Ms?[]:w,k]),w=L)}else v.run()};y.allowRecurse=!!e;let E;a==="sync"?E=y:a==="post"?E=()=>qn(y,r&&r.suspense):(y.pre=!0,r&&(y.id=r.uid),E=()=>oa(y));const v=new vl(p,ne,E),T=Bi(),j=()=>{v.stop(),T&&fl(T.effects,v)};return e?t?y():w=v.run():a==="post"?qn(v.run.bind(v),r&&r.suspense):v.run(),_&&_.push(j),j}function ed(n,e,t){const s=this.proxy,a=Mn(n)?n.includes(".")?gr(s,n):()=>s[n]:n.bind(s,s);let l;tn(e)?l=e:(l=e.handler,t=e);const o=ks(this),c=Sl(a,l.bind(s),t);return o(),c}function gr(n,e){const t=e.split(".");return()=>{let s=n;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function kt(n,e,t=0,s){if(!Ln(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(s=s||new Set,s.has(n))return n;if(s.add(n),Pn(n))kt(n.value,e,t,s);else if(Z(n))for(let a=0;a<n.length;a++)kt(n[a],e,t,s);else if(Ju(n)||Vt(n))n.forEach(a=>{kt(a,e,t,s)});else if(Qu(n))for(const a in n)kt(n[a],e,t,s);return n}function me(n,e,t,s){const a=n.dirs,l=e&&e.dirs;for(let o=0;o<a.length;o++){const c=a[o];l&&(c.oldValue=l[o].value);let r=c.dir[s];r&&(lt(),te(r,t,8,[n.el,c,n,e]),ot())}}const $e=Symbol("_leaveCb"),js=Symbol("_enterCb");function mr(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{n.isMounted=!0}),Al(()=>{n.isUnmounting=!0}),n}const Qn=[Function,Array],kr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qn,onEnter:Qn,onAfterEnter:Qn,onEnterCancelled:Qn,onBeforeLeave:Qn,onLeave:Qn,onAfterLeave:Qn,onLeaveCancelled:Qn,onBeforeAppear:Qn,onAppear:Qn,onAfterAppear:Qn,onAppearCancelled:Qn},td={name:"BaseTransition",props:kr,setup(n,{slots:e}){const t=ms(),s=mr();return()=>{const a=e.default&&Il(e.default(),!0);if(!a||!a.length)return;let l=a[0];if(a.length>1){for(const h of a)if(h.type!==ye){l=h;break}}const o=on(n),{mode:c}=o;if(s.isLeaving)return _a(l);const r=wo(l);if(!r)return _a(l);const u=Zt(r,o,s,t);ns(r,u);const p=t.subTree,d=p&&wo(p);if(d&&d.type!==ye&&!nt(r,d)){const h=Zt(d,o,s,t);if(ns(d,h),c==="out-in")return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},_a(l);c==="in-out"&&r.type!==ye&&(h.delayLeave=(f,k,_)=>{const w=vr(s,d);w[String(d.key)]=d,f[$e]=()=>{k(),f[$e]=void 0,delete u.delayedLeave},u.delayedLeave=_})}return l}}},sd=td;function vr(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function Zt(n,e,t,s){const{appear:a,mode:l,persisted:o=!1,onBeforeEnter:c,onEnter:r,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:k,onBeforeAppear:_,onAppear:w,onAfterAppear:y,onAppearCancelled:E}=e,v=String(n.key),T=vr(t,n),j=(N,Y)=>{N&&te(N,s,9,Y)},L=(N,Y)=>{const D=Y[1];j(N,Y),Z(N)?N.every(X=>X.length<=1)&&D():N.length<=1&&D()},q={mode:l,persisted:o,beforeEnter(N){let Y=c;if(!t.isMounted)if(a)Y=_||c;else return;N[$e]&&N[$e](!0);const D=T[v];D&&nt(n,D)&&D.el[$e]&&D.el[$e](),j(Y,[N])},enter(N){let Y=r,D=u,X=p;if(!t.isMounted)if(a)Y=w||r,D=y||u,X=E||p;else return;let M=!1;const nn=N[js]=Tn=>{M||(M=!0,Tn?j(X,[N]):j(D,[N]),q.delayedLeave&&q.delayedLeave(),N[js]=void 0)};Y?L(Y,[N,nn]):nn()},leave(N,Y){const D=String(n.key);if(N[js]&&N[js](!0),t.isUnmounting)return Y();j(d,[N]);let X=!1;const M=N[$e]=nn=>{X||(X=!0,Y(),nn?j(k,[N]):j(f,[N]),N[$e]=void 0,T[D]===n&&delete T[D])};T[D]=n,h?L(h,[N,M]):M()},clone(N){return Zt(N,e,t,s)}};return q}function _a(n){if(fs(n))return n=We(n),n.children=null,n}function wo(n){return fs(n)?n.children?n.children[0]:void 0:n}function ns(n,e){n.shapeFlag&6&&n.component?ns(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Il(n,e=!1,t){let s=[],a=0;for(let l=0;l<n.length;l++){let o=n[l];const c=t==null?o.key:String(t)+String(o.key!=null?o.key:l);o.type===Xn?(o.patchFlag&128&&a++,s=s.concat(Il(o.children,e,c))):(e||o.type!==ye)&&s.push(c!=null?We(o,{key:c}):o)}if(a>1)for(let l=0;l<s.length;l++)s[l].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function $(n,e){return tn(n)?In({name:n.name},e,{setup:n}):n}const zt=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ad(n){tn(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:s,delay:a=200,timeout:l,suspensible:o=!0,onError:c}=n;let r=null,u,p=0;const d=()=>(p++,r=null,h()),h=()=>{let f;return r||(f=r=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),c)return new Promise((_,w)=>{c(k,()=>_(d()),()=>w(k),p+1)});throw k}).then(k=>f!==r&&r?r:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),u=k,k)))};return $({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const f=On;if(u)return()=>xa(u,f);const k=E=>{r=null,hs(E,f,13,!s)};if(o&&f.suspense||vs)return h().then(E=>()=>xa(E,f)).catch(E=>(k(E),()=>s?An(s,{error:E}):null));const _=J(!1),w=J(),y=J(!!a);return a&&setTimeout(()=>{y.value=!1},a),l!=null&&setTimeout(()=>{if(!_.value&&!w.value){const E=new Error(`Async component timed out after ${l}ms.`);k(E),w.value=E}},l),h().then(()=>{_.value=!0,f.parent&&fs(f.parent.vnode)&&(f.parent.effect.dirty=!0,oa(f.parent.update))}).catch(E=>{k(E),w.value=E}),()=>{if(_.value&&u)return xa(u,f);if(w.value&&s)return An(s,{error:w.value});if(t&&!y.value)return An(t)}}})}function xa(n,e){const{ref:t,props:s,children:a,ce:l}=e.vnode,o=An(n,s,a);return o.ref=t,o.ce=l,delete e.vnode.ce,o}const fs=n=>n.type.__isKeepAlive;function ld(n,e){yr(n,"a",e)}function od(n,e){yr(n,"da",e)}function yr(n,e,t=On){const s=n.__wdc||(n.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return n()});if(ra(e,s,t),t){let a=t.parent;for(;a&&a.parent;)fs(a.parent.vnode)&&id(s,e,t,a),a=a.parent}}function id(n,e,t,s){const a=ra(e,n,s,!0);gs(()=>{fl(s[e],a)},t)}function ra(n,e,t=On,s=!1){if(t){const a=t[n]||(t[n]=[]),l=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;lt();const c=ks(t),r=te(e,t,n,o);return c(),ot(),r});return s?a.unshift(l):a.push(l),l}}const Ie=n=>(e,t=On)=>(!vs||n==="sp")&&ra(n,(...s)=>e(...s),t),rd=Ie("bm"),bn=Ie("m"),cd=Ie("bu"),br=Ie("u"),Al=Ie("bum"),gs=Ie("um"),ud=Ie("sp"),pd=Ie("rtg"),dd=Ie("rtc");function hd(n,e=On){ra("ec",n,e)}const qa=n=>n?Or(n)?Ol(n)||n.proxy:qa(n.parent):null,qt=In(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>qa(n.parent),$root:n=>qa(n.root),$emit:n=>n.emit,$options:n=>Pl(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,oa(n.update)}),$nextTick:n=>n.n||(n.n=Ge.bind(n.proxy)),$watch:n=>ed.bind(n)}),Ea=(n,e)=>n!==xn&&!n.__isScriptSetup&&un(n,e),fd={get({_:n},e){const{ctx:t,setupState:s,data:a,props:l,accessCache:o,type:c,appContext:r}=n;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return a[e];case 4:return t[e];case 3:return l[e]}else{if(Ea(s,e))return o[e]=1,s[e];if(a!==xn&&un(a,e))return o[e]=2,a[e];if((u=n.propsOptions[0])&&un(u,e))return o[e]=3,l[e];if(t!==xn&&un(t,e))return o[e]=4,t[e];Wa&&(o[e]=0)}}const p=qt[e];let d,h;if(p)return e==="$attrs"&&Gn(n,"get",e),p(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==xn&&un(t,e))return o[e]=4,t[e];if(h=r.config.globalProperties,un(h,e))return h[e]},set({_:n},e,t){const{data:s,setupState:a,ctx:l}=n;return Ea(a,e)?(a[e]=t,!0):s!==xn&&un(s,e)?(s[e]=t,!0):un(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(l[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:a,propsOptions:l}},o){let c;return!!t[o]||n!==xn&&un(n,o)||Ea(e,o)||(c=l[0])&&un(c,o)||un(s,o)||un(qt,o)||un(a.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:un(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _o(n){return Z(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wa=!0;function gd(n){const e=Pl(n),t=n.proxy,s=n.ctx;Wa=!1,e.beforeCreate&&xo(e.beforeCreate,n,"bc");const{data:a,computed:l,methods:o,watch:c,provide:r,inject:u,created:p,beforeMount:d,mounted:h,beforeUpdate:f,updated:k,activated:_,deactivated:w,beforeDestroy:y,beforeUnmount:E,destroyed:v,unmounted:T,render:j,renderTracked:L,renderTriggered:q,errorCaptured:N,serverPrefetch:Y,expose:D,inheritAttrs:X,components:M,directives:nn,filters:Tn}=e;if(u&&md(u,s,null),o)for(const sn in o){const U=o[sn];tn(U)&&(s[sn]=U.bind(t))}if(a){const sn=a.call(t,t);Ln(sn)&&(n.data=ds(sn))}if(Wa=!0,l)for(const sn in l){const U=l[sn],ae=tn(U)?U.bind(t,t):tn(U.get)?U.get.bind(t,t):ne,Pe=!tn(U)&&tn(U.set)?U.set.bind(t):ne,fe=b({get:ae,set:Pe});Object.defineProperty(s,sn,{enumerable:!0,configurable:!0,get:()=>fe.value,set:zn=>fe.value=zn})}if(c)for(const sn in c)wr(c[sn],s,t,sn);if(r){const sn=tn(r)?r.call(t):r;Reflect.ownKeys(sn).forEach(U=>{ue(U,sn[U])})}p&&xo(p,n,"c");function G(sn,U){Z(U)?U.forEach(ae=>sn(ae.bind(t))):U&&sn(U.bind(t))}if(G(rd,d),G(bn,h),G(cd,f),G(br,k),G(ld,_),G(od,w),G(hd,N),G(dd,L),G(pd,q),G(Al,E),G(gs,T),G(ud,Y),Z(D))if(D.length){const sn=n.exposed||(n.exposed={});D.forEach(U=>{Object.defineProperty(sn,U,{get:()=>t[U],set:ae=>t[U]=ae})})}else n.exposed||(n.exposed={});j&&n.render===ne&&(n.render=j),X!=null&&(n.inheritAttrs=X),M&&(n.components=M),nn&&(n.directives=nn)}function md(n,e,t=ne){Z(n)&&(n=Ua(n));for(const s in n){const a=n[s];let l;Ln(a)?"default"in a?l=yn(a.from||s,a.default,!0):l=yn(a.from||s):l=yn(a),Pn(l)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):e[s]=l}}function xo(n,e,t){te(Z(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function wr(n,e,t,s){const a=s.includes(".")?gr(t,s):()=>t[s];if(Mn(n)){const l=e[n];tn(l)&&dn(a,l)}else if(tn(n))dn(a,n.bind(t));else if(Ln(n))if(Z(n))n.forEach(l=>wr(l,e,t,s));else{const l=tn(n.handler)?n.handler.bind(t):e[n.handler];tn(l)&&dn(a,l,n)}}function Pl(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:a,optionsCache:l,config:{optionMergeStrategies:o}}=n.appContext,c=l.get(e);let r;return c?r=c:!a.length&&!t&&!s?r=e:(r={},a.length&&a.forEach(u=>Qs(r,u,o,!0)),Qs(r,e,o)),Ln(e)&&l.set(e,r),r}function Qs(n,e,t,s=!1){const{mixins:a,extends:l}=e;l&&Qs(n,l,t,!0),a&&a.forEach(o=>Qs(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const c=kd[o]||t&&t[o];n[o]=c?c(n[o],e[o]):e[o]}return n}const kd={data:Eo,props:Lo,emits:Lo,methods:Nt,computed:Nt,beforeCreate:Vn,created:Vn,beforeMount:Vn,mounted:Vn,beforeUpdate:Vn,updated:Vn,beforeDestroy:Vn,beforeUnmount:Vn,destroyed:Vn,unmounted:Vn,activated:Vn,deactivated:Vn,errorCaptured:Vn,serverPrefetch:Vn,components:Nt,directives:Nt,watch:yd,provide:Eo,inject:vd};function Eo(n,e){return e?n?function(){return In(tn(n)?n.call(this,this):n,tn(e)?e.call(this,this):e)}:e:n}function vd(n,e){return Nt(Ua(n),Ua(e))}function Ua(n){if(Z(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vn(n,e){return n?[...new Set([].concat(n,e))]:e}function Nt(n,e){return n?In(Object.create(null),n,e):e}function Lo(n,e){return n?Z(n)&&Z(e)?[...new Set([...n,...e])]:In(Object.create(null),_o(n),_o(e??{})):e}function yd(n,e){if(!n)return e;if(!e)return n;const t=In(Object.create(null),n);for(const s in e)t[s]=Vn(n[s],e[s]);return t}function _r(){return{app:null,config:{isNativeTag:Gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bd=0;function wd(n,e){return function(s,a=null){tn(s)||(s=In({},s)),a!=null&&!Ln(a)&&(a=null);const l=_r(),o=new WeakSet;let c=!1;const r=l.app={_uid:bd++,_component:s,_props:a,_container:null,_context:l,_instance:null,version:Yd,get config(){return l.config},set config(u){},use(u,...p){return o.has(u)||(u&&tn(u.install)?(o.add(u),u.install(r,...p)):tn(u)&&(o.add(u),u(r,...p))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,p){return p?(l.components[u]=p,r):l.components[u]},directive(u,p){return p?(l.directives[u]=p,r):l.directives[u]},mount(u,p,d){if(!c){const h=An(s,a);return h.appContext=l,d===!0?d="svg":d===!1&&(d=void 0),p&&e?e(h,u):n(h,u,d),c=!0,r._container=u,u.__vue_app__=r,Ol(h.component)||h.component.proxy}},unmount(){c&&(n(null,r._container),delete r._container.__vue_app__)},provide(u,p){return l.provides[u]=p,r},runWithContext(u){const p=Wt;Wt=r;try{return u()}finally{Wt=p}}};return r}}let Wt=null;function ue(n,e){if(On){let t=On.provides;const s=On.parent&&On.parent.provides;s===t&&(t=On.provides=Object.create(s)),t[n]=e}}function yn(n,e,t=!1){const s=On||ee;if(s||Wt){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Wt._context.provides;if(a&&n in a)return a[n];if(arguments.length>1)return t&&tn(e)?e.call(s&&s.proxy):e}}function _d(n,e,t,s=!1){const a={},l={};Gs(l,ca,1),n.propsDefaults=Object.create(null),xr(n,e,a,l);for(const o in n.propsOptions[0])o in a||(a[o]=void 0);t?n.props=s?a:nr(a):n.type.props?n.props=a:n.props=l,n.attrs=l}function xd(n,e,t,s){const{props:a,attrs:l,vnode:{patchFlag:o}}=n,c=on(a),[r]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const p=n.vnode.dynamicProps;for(let d=0;d<p.length;d++){let h=p[d];if(ia(n.emitsOptions,h))continue;const f=e[h];if(r)if(un(l,h))f!==l[h]&&(l[h]=f,u=!0);else{const k=se(h);a[k]=Ga(r,c,k,f,n,!1)}else f!==l[h]&&(l[h]=f,u=!0)}}}else{xr(n,e,a,l)&&(u=!0);let p;for(const d in c)(!e||!un(e,d)&&((p=At(d))===d||!un(e,p)))&&(r?t&&(t[d]!==void 0||t[p]!==void 0)&&(a[d]=Ga(r,c,d,void 0,n,!0)):delete a[d]);if(l!==c)for(const d in l)(!e||!un(e,d))&&(delete l[d],u=!0)}u&&Se(n,"set","$attrs")}function xr(n,e,t,s){const[a,l]=n.propsOptions;let o=!1,c;if(e)for(let r in e){if(yt(r))continue;const u=e[r];let p;a&&un(a,p=se(r))?!l||!l.includes(p)?t[p]=u:(c||(c={}))[p]=u:ia(n.emitsOptions,r)||(!(r in s)||u!==s[r])&&(s[r]=u,o=!0)}if(l){const r=on(t),u=c||xn;for(let p=0;p<l.length;p++){const d=l[p];t[d]=Ga(a,r,d,u[d],n,!un(u,d))}}return o}function Ga(n,e,t,s,a,l){const o=n[t];if(o!=null){const c=un(o,"default");if(c&&s===void 0){const r=o.default;if(o.type!==Function&&!o.skipFactory&&tn(r)){const{propsDefaults:u}=a;if(t in u)s=u[t];else{const p=ks(a);s=u[t]=r.call(null,e),p()}}else s=r}o[0]&&(l&&!c?s=!1:o[1]&&(s===""||s===At(t))&&(s=!0))}return s}function Er(n,e,t=!1){const s=e.propsCache,a=s.get(n);if(a)return a;const l=n.props,o={},c=[];let r=!1;if(!tn(n)){const p=d=>{r=!0;const[h,f]=Er(d,e,!0);In(o,h),f&&c.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}if(!l&&!r)return Ln(n)&&s.set(n,vt),vt;if(Z(l))for(let p=0;p<l.length;p++){const d=se(l[p]);To(d)&&(o[d]=xn)}else if(l)for(const p in l){const d=se(p);if(To(d)){const h=l[p],f=o[d]=Z(h)||tn(h)?{type:h}:In({},h);if(f){const k=Io(Boolean,f.type),_=Io(String,f.type);f[0]=k>-1,f[1]=_<0||k<_,(k>-1||un(f,"default"))&&c.push(d)}}}const u=[o,c];return Ln(n)&&s.set(n,u),u}function To(n){return n[0]!=="$"&&!yt(n)}function Co(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function So(n,e){return Co(n)===Co(e)}function Io(n,e){return Z(e)?e.findIndex(t=>So(t,n)):tn(e)&&So(e,n)?0:-1}const Lr=n=>n[0]==="_"||n==="$stable",Dl=n=>Z(n)?n.map(oe):[oe(n)],Ed=(n,e,t)=>{if(e._n)return e;const s=Wp((...a)=>Dl(e(...a)),t);return s._c=!1,s},Tr=(n,e,t)=>{const s=n._ctx;for(const a in n){if(Lr(a))continue;const l=n[a];if(tn(l))e[a]=Ed(a,l,s);else if(l!=null){const o=Dl(l);e[a]=()=>o}}},Cr=(n,e)=>{const t=Dl(e);n.slots.default=()=>t},Ld=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=on(e),Gs(e,"_",t)):Tr(e,n.slots={})}else n.slots={},e&&Cr(n,e);Gs(n.slots,ca,1)},Td=(n,e,t)=>{const{vnode:s,slots:a}=n;let l=!0,o=xn;if(s.shapeFlag&32){const c=e._;c?t&&c===1?l=!1:(In(a,e),!t&&c===1&&delete a._):(l=!e.$stable,Tr(e,a)),o=e}else e&&(Cr(n,e),o={default:1});if(l)for(const c in a)!Lr(c)&&o[c]==null&&delete a[c]};function Zs(n,e,t,s,a=!1){if(Z(n)){n.forEach((h,f)=>Zs(h,e&&(Z(e)?e[f]:e),t,s,a));return}if(zt(s)&&!a)return;const l=s.shapeFlag&4?Ol(s.component)||s.component.proxy:s.el,o=a?null:l,{i:c,r}=n,u=e&&e.r,p=c.refs===xn?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==r&&(Mn(u)?(p[u]=null,un(d,u)&&(d[u]=null)):Pn(u)&&(u.value=null)),tn(r))ze(r,c,12,[o,p]);else{const h=Mn(r),f=Pn(r);if(h||f){const k=()=>{if(n.f){const _=h?un(d,r)?d[r]:p[r]:r.value;a?Z(_)&&fl(_,l):Z(_)?_.includes(l)||_.push(l):h?(p[r]=[l],un(d,r)&&(d[r]=p[r])):(r.value=[l],n.k&&(p[n.k]=r.value))}else h?(p[r]=o,un(d,r)&&(d[r]=o)):f&&(r.value=o,n.k&&(p[n.k]=o))};o?(k.id=-1,qn(k,t)):k()}}}let Re=!1;const Cd=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Sd=n=>n.namespaceURI.includes("MathML"),Fs=n=>{if(Cd(n))return"svg";if(Sd(n))return"mathml"},$s=n=>n.nodeType===8;function Id(n){const{mt:e,p:t,o:{patchProp:s,createText:a,nextSibling:l,parentNode:o,remove:c,insert:r,createComment:u}}=n,p=(v,T)=>{if(!T.hasChildNodes()){t(null,v,T),Ys(),T._vnode=v;return}Re=!1,d(T.firstChild,v,null,null,null),Ys(),T._vnode=v,Re&&console.error("Hydration completed but contains mismatches.")},d=(v,T,j,L,q,N=!1)=>{const Y=$s(v)&&v.data==="[",D=()=>_(v,T,j,L,q,Y),{type:X,ref:M,shapeFlag:nn,patchFlag:Tn}=T;let Cn=v.nodeType;T.el=v,Tn===-2&&(N=!1,T.dynamicChildren=null);let G=null;switch(X){case Et:Cn!==3?T.children===""?(r(T.el=a(""),o(v),v),G=v):G=D():(v.data!==T.children&&(Re=!0,v.data=T.children),G=l(v));break;case ye:E(v)?(G=l(v),y(T.el=v.content.firstChild,v,j)):Cn!==8||Y?G=D():G=l(v);break;case Ut:if(Y&&(v=l(v),Cn=v.nodeType),Cn===1||Cn===3){G=v;const sn=!T.children.length;for(let U=0;U<T.staticCount;U++)sn&&(T.children+=G.nodeType===1?G.outerHTML:G.data),U===T.staticCount-1&&(T.anchor=G),G=l(G);return Y?l(G):G}else D();break;case Xn:Y?G=k(v,T,j,L,q,N):G=D();break;default:if(nn&1)(Cn!==1||T.type.toLowerCase()!==v.tagName.toLowerCase())&&!E(v)?G=D():G=h(v,T,j,L,q,N);else if(nn&6){T.slotScopeIds=q;const sn=o(v);if(Y?G=w(v):$s(v)&&v.data==="teleport start"?G=w(v,v.data,"teleport end"):G=l(v),e(T,sn,null,j,L,Fs(sn),N),zt(T)){let U;Y?(U=An(Xn),U.anchor=G?G.previousSibling:sn.lastChild):U=v.nodeType===3?Rr(""):An("div"),U.el=v,T.component.subTree=U}}else nn&64?Cn!==8?G=D():G=T.type.hydrate(v,T,j,L,q,N,n,f):nn&128&&(G=T.type.hydrate(v,T,j,L,Fs(o(v)),q,N,n,d))}return M!=null&&Zs(M,null,L,T),G},h=(v,T,j,L,q,N)=>{N=N||!!T.dynamicChildren;const{type:Y,props:D,patchFlag:X,shapeFlag:M,dirs:nn,transition:Tn}=T,Cn=Y==="input"||Y==="option";if(Cn||X!==-1){nn&&me(T,null,j,"created");let G=!1;if(E(v)){G=Sr(L,Tn)&&j&&j.vnode.props&&j.vnode.props.appear;const U=v.content.firstChild;G&&Tn.beforeEnter(U),y(U,v,j),T.el=v=U}if(M&16&&!(D&&(D.innerHTML||D.textContent))){let U=f(v.firstChild,T,v,j,L,q,N);for(;U;){Re=!0;const ae=U;U=U.nextSibling,c(ae)}}else M&8&&v.textContent!==T.children&&(Re=!0,v.textContent=T.children);if(D)if(Cn||!N||X&48)for(const U in D)(Cn&&(U.endsWith("value")||U==="indeterminate")||us(U)&&!yt(U)||U[0]===".")&&s(v,U,null,D[U],void 0,void 0,j);else D.onClick&&s(v,"onClick",null,D.onClick,void 0,void 0,j);let sn;(sn=D&&D.onVnodeBeforeMount)&&Zn(sn,j,T),nn&&me(T,null,j,"beforeMount"),((sn=D&&D.onVnodeMounted)||nn||G)&&hr(()=>{sn&&Zn(sn,j,T),G&&Tn.enter(v),nn&&me(T,null,j,"mounted")},L)}return v.nextSibling},f=(v,T,j,L,q,N,Y)=>{Y=Y||!!T.dynamicChildren;const D=T.children,X=D.length;for(let M=0;M<X;M++){const nn=Y?D[M]:D[M]=oe(D[M]);if(v)v=d(v,nn,L,q,N,Y);else{if(nn.type===Et&&!nn.children)continue;Re=!0,t(null,nn,j,null,L,q,Fs(j),N)}}return v},k=(v,T,j,L,q,N)=>{const{slotScopeIds:Y}=T;Y&&(q=q?q.concat(Y):Y);const D=o(v),X=f(l(v),T,D,j,L,q,N);return X&&$s(X)&&X.data==="]"?l(T.anchor=X):(Re=!0,r(T.anchor=u("]"),D,X),X)},_=(v,T,j,L,q,N)=>{if(Re=!0,T.el=null,N){const X=w(v);for(;;){const M=l(v);if(M&&M!==X)c(M);else break}}const Y=l(v),D=o(v);return c(v),t(null,T,D,Y,j,L,Fs(D),q),Y},w=(v,T="[",j="]")=>{let L=0;for(;v;)if(v=l(v),v&&$s(v)&&(v.data===T&&L++,v.data===j)){if(L===0)return l(v);L--}return v},y=(v,T,j)=>{const L=T.parentNode;L&&L.replaceChild(v,T);let q=j;for(;q;)q.vnode.el===T&&(q.vnode.el=q.subTree.el=v),q=q.parent},E=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[p,d]}const qn=hr;function Ad(n){return Pd(n,Id)}function Pd(n,e){const t=Hi();t.__VUE__=!0;const{insert:s,remove:a,patchProp:l,createElement:o,createText:c,createComment:r,setText:u,setElementText:p,parentNode:d,nextSibling:h,setScopeId:f=ne,insertStaticContent:k}=n,_=(g,m,x,A=null,S=null,O=null,V=void 0,R=null,F=!!m.dynamicChildren)=>{if(g===m)return;g&&!nt(g,m)&&(A=I(g),zn(g,S,O,!0),g=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:P,ref:z,shapeFlag:Q}=m;switch(P){case Et:w(g,m,x,A);break;case ye:y(g,m,x,A);break;case Ut:g==null&&E(m,x,A,V);break;case Xn:M(g,m,x,A,S,O,V,R,F);break;default:Q&1?j(g,m,x,A,S,O,V,R,F):Q&6?nn(g,m,x,A,S,O,V,R,F):(Q&64||Q&128)&&P.process(g,m,x,A,S,O,V,R,F,W)}z!=null&&S&&Zs(z,g&&g.ref,O,m||g,!m)},w=(g,m,x,A)=>{if(g==null)s(m.el=c(m.children),x,A);else{const S=m.el=g.el;m.children!==g.children&&u(S,m.children)}},y=(g,m,x,A)=>{g==null?s(m.el=r(m.children||""),x,A):m.el=g.el},E=(g,m,x,A)=>{[g.el,g.anchor]=k(g.children,m,x,A,g.el,g.anchor)},v=({el:g,anchor:m},x,A)=>{let S;for(;g&&g!==m;)S=h(g),s(g,x,A),g=S;s(m,x,A)},T=({el:g,anchor:m})=>{let x;for(;g&&g!==m;)x=h(g),a(g),g=x;a(m)},j=(g,m,x,A,S,O,V,R,F)=>{m.type==="svg"?V="svg":m.type==="math"&&(V="mathml"),g==null?L(m,x,A,S,O,V,R,F):Y(g,m,S,O,V,R,F)},L=(g,m,x,A,S,O,V,R)=>{let F,P;const{props:z,shapeFlag:Q,transition:K,dirs:en}=g;if(F=g.el=o(g.type,O,z&&z.is,z),Q&8?p(F,g.children):Q&16&&N(g.children,F,null,A,S,La(g,O),V,R),en&&me(g,null,A,"created"),q(F,g,g.scopeId,V,A),z){for(const mn in z)mn!=="value"&&!yt(mn)&&l(F,mn,null,z[mn],O,g.children,A,S,Fn);"value"in z&&l(F,"value",null,z.value,O),(P=z.onVnodeBeforeMount)&&Zn(P,A,g)}en&&me(g,null,A,"beforeMount");const an=Sr(S,K);an&&K.beforeEnter(F),s(F,m,x),((P=z&&z.onVnodeMounted)||an||en)&&qn(()=>{P&&Zn(P,A,g),an&&K.enter(F),en&&me(g,null,A,"mounted")},S)},q=(g,m,x,A,S)=>{if(x&&f(g,x),A)for(let O=0;O<A.length;O++)f(g,A[O]);if(S){let O=S.subTree;if(m===O){const V=S.vnode;q(g,V,V.scopeId,V.slotScopeIds,S.parent)}}},N=(g,m,x,A,S,O,V,R,F=0)=>{for(let P=F;P<g.length;P++){const z=g[P]=R?Ne(g[P]):oe(g[P]);_(null,z,m,x,A,S,O,V,R)}},Y=(g,m,x,A,S,O,V)=>{const R=m.el=g.el;let{patchFlag:F,dynamicChildren:P,dirs:z}=m;F|=g.patchFlag&16;const Q=g.props||xn,K=m.props||xn;let en;if(x&&Ye(x,!1),(en=K.onVnodeBeforeUpdate)&&Zn(en,x,m,g),z&&me(m,g,x,"beforeUpdate"),x&&Ye(x,!0),P?D(g.dynamicChildren,P,R,x,A,La(m,S),O):V||U(g,m,R,null,x,A,La(m,S),O,!1),F>0){if(F&16)X(R,m,Q,K,x,A,S);else if(F&2&&Q.class!==K.class&&l(R,"class",null,K.class,S),F&4&&l(R,"style",Q.style,K.style,S),F&8){const an=m.dynamicProps;for(let mn=0;mn<an.length;mn++){const _n=an[mn],Rn=Q[_n],le=K[_n];(le!==Rn||_n==="value")&&l(R,_n,Rn,le,S,g.children,x,A,Fn)}}F&1&&g.children!==m.children&&p(R,m.children)}else!V&&P==null&&X(R,m,Q,K,x,A,S);((en=K.onVnodeUpdated)||z)&&qn(()=>{en&&Zn(en,x,m,g),z&&me(m,g,x,"updated")},A)},D=(g,m,x,A,S,O,V)=>{for(let R=0;R<m.length;R++){const F=g[R],P=m[R],z=F.el&&(F.type===Xn||!nt(F,P)||F.shapeFlag&70)?d(F.el):x;_(F,P,z,null,A,S,O,V,!0)}},X=(g,m,x,A,S,O,V)=>{if(x!==A){if(x!==xn)for(const R in x)!yt(R)&&!(R in A)&&l(g,R,x[R],null,V,m.children,S,O,Fn);for(const R in A){if(yt(R))continue;const F=A[R],P=x[R];F!==P&&R!=="value"&&l(g,R,P,F,V,m.children,S,O,Fn)}"value"in A&&l(g,"value",x.value,A.value,V)}},M=(g,m,x,A,S,O,V,R,F)=>{const P=m.el=g?g.el:c(""),z=m.anchor=g?g.anchor:c("");let{patchFlag:Q,dynamicChildren:K,slotScopeIds:en}=m;en&&(R=R?R.concat(en):en),g==null?(s(P,x,A),s(z,x,A),N(m.children||[],x,z,S,O,V,R,F)):Q>0&&Q&64&&K&&g.dynamicChildren?(D(g.dynamicChildren,K,x,S,O,V,R),(m.key!=null||S&&m===S.subTree)&&Ir(g,m,!0)):U(g,m,x,z,S,O,V,R,F)},nn=(g,m,x,A,S,O,V,R,F)=>{m.slotScopeIds=R,g==null?m.shapeFlag&512?S.ctx.activate(m,x,A,V,F):Tn(m,x,A,S,O,V,F):Cn(g,m,F)},Tn=(g,m,x,A,S,O,V)=>{const R=g.component=zd(g,A,S);if(fs(g)&&(R.ctx.renderer=W),qd(R),R.asyncDep){if(S&&S.registerDep(R,G),!g.el){const F=R.subTree=An(ye);y(null,F,m,x)}}else G(R,g,m,x,S,O,V)},Cn=(g,m,x)=>{const A=m.component=g.component;if(Kp(g,m,x))if(A.asyncDep&&!A.asyncResolved){sn(A,m,x);return}else A.next=m,Vp(A.update),A.effect.dirty=!0,A.update();else m.el=g.el,A.vnode=m},G=(g,m,x,A,S,O,V)=>{const R=()=>{if(g.isMounted){let{next:z,bu:Q,u:K,parent:en,vnode:an}=g;{const ht=Ar(g);if(ht){z&&(z.el=an.el,sn(g,z,V)),ht.asyncDep.then(()=>{g.isUnmounted||R()});return}}let mn=z,_n;Ye(g,!1),z?(z.el=an.el,sn(g,z,V)):z=an,Q&&ba(Q),(_n=z.props&&z.props.onVnodeBeforeUpdate)&&Zn(_n,en,z,an),Ye(g,!0);const Rn=wa(g),le=g.subTree;g.subTree=Rn,_(le,Rn,d(le.el),I(le),g,S,O),z.el=Rn.el,mn===null&&Jp(g,Rn.el),K&&qn(K,S),(_n=z.props&&z.props.onVnodeUpdated)&&qn(()=>Zn(_n,en,z,an),S)}else{let z;const{el:Q,props:K}=m,{bm:en,m:an,parent:mn}=g,_n=zt(m);if(Ye(g,!1),en&&ba(en),!_n&&(z=K&&K.onVnodeBeforeMount)&&Zn(z,mn,m),Ye(g,!0),Q&&wn){const Rn=()=>{g.subTree=wa(g),wn(Q,g.subTree,g,S,null)};_n?m.type.__asyncLoader().then(()=>!g.isUnmounted&&Rn()):Rn()}else{const Rn=g.subTree=wa(g);_(null,Rn,x,A,g,S,O),m.el=Rn.el}if(an&&qn(an,S),!_n&&(z=K&&K.onVnodeMounted)){const Rn=m;qn(()=>Zn(z,mn,Rn),S)}(m.shapeFlag&256||mn&&zt(mn.vnode)&&mn.vnode.shapeFlag&256)&&g.a&&qn(g.a,S),g.isMounted=!0,m=x=A=null}},F=g.effect=new vl(R,ne,()=>oa(P),g.scope),P=g.update=()=>{F.dirty&&F.run()};P.id=g.uid,Ye(g,!0),P()},sn=(g,m,x)=>{m.component=g;const A=g.vnode.props;g.vnode=m,g.next=null,xd(g,m.props,A,x),Td(g,m.children,x),lt(),vo(g),ot()},U=(g,m,x,A,S,O,V,R,F=!1)=>{const P=g&&g.children,z=g?g.shapeFlag:0,Q=m.children,{patchFlag:K,shapeFlag:en}=m;if(K>0){if(K&128){Pe(P,Q,x,A,S,O,V,R,F);return}else if(K&256){ae(P,Q,x,A,S,O,V,R,F);return}}en&8?(z&16&&Fn(P,S,O),Q!==P&&p(x,Q)):z&16?en&16?Pe(P,Q,x,A,S,O,V,R,F):Fn(P,S,O,!0):(z&8&&p(x,""),en&16&&N(Q,x,A,S,O,V,R,F))},ae=(g,m,x,A,S,O,V,R,F)=>{g=g||vt,m=m||vt;const P=g.length,z=m.length,Q=Math.min(P,z);let K;for(K=0;K<Q;K++){const en=m[K]=F?Ne(m[K]):oe(m[K]);_(g[K],en,x,null,S,O,V,R,F)}P>z?Fn(g,S,O,!0,!1,Q):N(m,x,A,S,O,V,R,F,Q)},Pe=(g,m,x,A,S,O,V,R,F)=>{let P=0;const z=m.length;let Q=g.length-1,K=z-1;for(;P<=Q&&P<=K;){const en=g[P],an=m[P]=F?Ne(m[P]):oe(m[P]);if(nt(en,an))_(en,an,x,null,S,O,V,R,F);else break;P++}for(;P<=Q&&P<=K;){const en=g[Q],an=m[K]=F?Ne(m[K]):oe(m[K]);if(nt(en,an))_(en,an,x,null,S,O,V,R,F);else break;Q--,K--}if(P>Q){if(P<=K){const en=K+1,an=en<z?m[en].el:A;for(;P<=K;)_(null,m[P]=F?Ne(m[P]):oe(m[P]),x,an,S,O,V,R,F),P++}}else if(P>K)for(;P<=Q;)zn(g[P],S,O,!0),P++;else{const en=P,an=P,mn=new Map;for(P=an;P<=K;P++){const Jn=m[P]=F?Ne(m[P]):oe(m[P]);Jn.key!=null&&mn.set(Jn.key,P)}let _n,Rn=0;const le=K-an+1;let ht=!1,oo=0;const Mt=new Array(le);for(P=0;P<le;P++)Mt[P]=0;for(P=en;P<=Q;P++){const Jn=g[P];if(Rn>=le){zn(Jn,S,O,!0);continue}let ge;if(Jn.key!=null)ge=mn.get(Jn.key);else for(_n=an;_n<=K;_n++)if(Mt[_n-an]===0&&nt(Jn,m[_n])){ge=_n;break}ge===void 0?zn(Jn,S,O,!0):(Mt[ge-an]=P+1,ge>=oo?oo=ge:ht=!0,_(Jn,m[ge],x,null,S,O,V,R,F),Rn++)}const io=ht?Dd(Mt):vt;for(_n=io.length-1,P=le-1;P>=0;P--){const Jn=an+P,ge=m[Jn],ro=Jn+1<z?m[Jn+1].el:A;Mt[P]===0?_(null,ge,x,ro,S,O,V,R,F):ht&&(_n<0||P!==io[_n]?fe(ge,x,ro,2):_n--)}}},fe=(g,m,x,A,S=null)=>{const{el:O,type:V,transition:R,children:F,shapeFlag:P}=g;if(P&6){fe(g.component.subTree,m,x,A);return}if(P&128){g.suspense.move(m,x,A);return}if(P&64){V.move(g,m,x,W);return}if(V===Xn){s(O,m,x);for(let Q=0;Q<F.length;Q++)fe(F[Q],m,x,A);s(g.anchor,m,x);return}if(V===Ut){v(g,m,x);return}if(A!==2&&P&1&&R)if(A===0)R.beforeEnter(O),s(O,m,x),qn(()=>R.enter(O),S);else{const{leave:Q,delayLeave:K,afterLeave:en}=R,an=()=>s(O,m,x),mn=()=>{Q(O,()=>{an(),en&&en()})};K?K(O,an,mn):mn()}else s(O,m,x)},zn=(g,m,x,A=!1,S=!1)=>{const{type:O,props:V,ref:R,children:F,dynamicChildren:P,shapeFlag:z,patchFlag:Q,dirs:K}=g;if(R!=null&&Zs(R,null,x,g,!0),z&256){m.ctx.deactivate(g);return}const en=z&1&&K,an=!zt(g);let mn;if(an&&(mn=V&&V.onVnodeBeforeUnmount)&&Zn(mn,m,g),z&6)Is(g.component,x,A);else{if(z&128){g.suspense.unmount(x,A);return}en&&me(g,null,m,"beforeUnmount"),z&64?g.type.remove(g,m,x,S,W,A):P&&(O!==Xn||Q>0&&Q&64)?Fn(P,m,x,!1,!0):(O===Xn&&Q&384||!S&&z&16)&&Fn(F,m,x),A&&pt(g)}(an&&(mn=V&&V.onVnodeUnmounted)||en)&&qn(()=>{mn&&Zn(mn,m,g),en&&me(g,null,m,"unmounted")},x)},pt=g=>{const{type:m,el:x,anchor:A,transition:S}=g;if(m===Xn){dt(x,A);return}if(m===Ut){T(g);return}const O=()=>{a(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:V,delayLeave:R}=S,F=()=>V(x,O);R?R(g.el,O,F):F()}else O()},dt=(g,m)=>{let x;for(;g!==m;)x=h(g),a(g),g=x;a(m)},Is=(g,m,x)=>{const{bum:A,scope:S,update:O,subTree:V,um:R}=g;A&&ba(A),S.stop(),O&&(O.active=!1,zn(V,g,m,x)),R&&qn(R,m),qn(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Fn=(g,m,x,A=!1,S=!1,O=0)=>{for(let V=O;V<g.length;V++)zn(g[V],m,x,A,S)},I=g=>g.shapeFlag&6?I(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el);let B=!1;const H=(g,m,x)=>{g==null?m._vnode&&zn(m._vnode,null,null,!0):_(m._vnode||null,g,m,null,null,null,x),B||(B=!0,vo(),Ys(),B=!1),m._vnode=g},W={p:_,um:zn,m:fe,r:pt,mt:Tn,mc:N,pc:U,pbc:D,n:I,o:n};let hn,wn;return e&&([hn,wn]=e(W)),{render:H,hydrate:hn,createApp:wd(H,hn)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ye({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Sr(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ir(n,e,t=!1){const s=n.children,a=e.children;if(Z(s)&&Z(a))for(let l=0;l<s.length;l++){const o=s[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=Ne(a[l]),c.el=o.el),t||Ir(o,c)),c.type===Et&&(c.el=o.el)}}function Dd(n){const e=n.slice(),t=[0];let s,a,l,o,c;const r=n.length;for(s=0;s<r;s++){const u=n[s];if(u!==0){if(a=t[t.length-1],n[a]<u){e[s]=a,t.push(s);continue}for(l=0,o=t.length-1;l<o;)c=l+o>>1,n[t[c]]<u?l=c+1:o=c;u<n[t[l]]&&(l>0&&(e[s]=t[l-1]),t[l]=s)}}for(l=t.length,o=t[l-1];l-- >0;)t[l]=o,o=e[o];return t}function Ar(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ar(e)}const Rd=n=>n.__isTeleport,Xn=Symbol.for("v-fgt"),Et=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),Ut=Symbol.for("v-stc"),Gt=[];let re=null;function Od(n=!1){Gt.push(re=n?null:[])}function Md(){Gt.pop(),re=Gt[Gt.length-1]||null}let es=1;function Ao(n){es+=n}function jd(n){return n.dynamicChildren=es>0?re||vt:null,Md(),es>0&&re&&re.push(n),n}function Fd(n,e,t,s,a,l){return jd(Dr(n,e,t,s,a,l,!0))}function Ka(n){return n?n.__v_isVNode===!0:!1}function nt(n,e){return n.type===e.type&&n.key===e.key}const ca="__vInternal",Pr=({key:n})=>n??null,Ws=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Mn(n)||Pn(n)||tn(n)?{i:ee,r:n,k:e,f:!!t}:n:null);function Dr(n,e=null,t=null,s=0,a=null,l=n===Xn?0:1,o=!1,c=!1){const r={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pr(e),ref:e&&Ws(e),scopeId:pr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ee};return c?(Rl(r,t),l&128&&n.normalize(r)):t&&(r.shapeFlag|=Mn(t)?8:16),es>0&&!o&&re&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&re.push(r),r}const An=$d;function $d(n,e=null,t=null,s=0,a=null,l=!1){if((!n||n===Yp)&&(n=ye),Ka(n)){const c=We(n,e,!0);return t&&Rl(c,t),es>0&&!l&&re&&(c.shapeFlag&6?re[re.indexOf(n)]=c:re.push(c)),c.patchFlag|=-2,c}if(Jd(n)&&(n=n.__vccOpts),e){e=Nd(e);let{class:c,style:r}=e;c&&!Mn(c)&&(e.class=kl(c)),Ln(r)&&(er(r)&&!Z(r)&&(r=In({},r)),e.style=ml(r))}const o=Mn(n)?1:Qp(n)?128:Rd(n)?64:Ln(n)?4:tn(n)?2:0;return Dr(n,e,t,s,a,o,l,!0)}function Nd(n){return n?er(n)||ca in n?In({},n):n:null}function We(n,e,t=!1){const{props:s,ref:a,patchFlag:l,children:o}=n,c=e?Hd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pr(c),ref:e&&e.ref?t&&a?Z(a)?a.concat(Ws(e)):[a,Ws(e)]:Ws(e):a,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xn?l===-1?16:l|16:l,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&We(n.ssContent),ssFallback:n.ssFallback&&We(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Rr(n=" ",e=0){return An(Et,null,n,e)}function M3(n,e){const t=An(Ut,null,n);return t.staticCount=e,t}function oe(n){return n==null||typeof n=="boolean"?An(ye):Z(n)?An(Xn,null,n.slice()):typeof n=="object"?Ne(n):An(Et,null,String(n))}function Ne(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:We(n)}function Rl(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(Z(e))t=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),Rl(n,a()),a._c&&(a._d=!0));return}else{t=32;const a=e._;!a&&!(ca in e)?e._ctx=ee:a===3&&ee&&(ee.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else tn(e)?(e={default:e,_ctx:ee},t=32):(e=String(e),s&64?(t=16,e=[Rr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Hd(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=kl([e.class,s.class]));else if(a==="style")e.style=ml([e.style,s.style]);else if(us(a)){const l=e[a],o=s[a];o&&l!==o&&!(Z(l)&&l.includes(o))&&(e[a]=l?[].concat(l,o):o)}else a!==""&&(e[a]=s[a])}return e}function Zn(n,e,t,s=null){te(n,e,7,[t,s])}const Vd=_r();let Bd=0;function zd(n,e,t){const s=n.type,a=(e?e.appContext:n.appContext)||Vd,l={uid:Bd++,vnode:n,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Er(s,a),emitsOptions:ur(s,a),emit:null,emitted:null,propsDefaults:xn,inheritAttrs:s.inheritAttrs,ctx:xn,data:xn,props:xn,attrs:xn,slots:xn,refs:xn,setupState:xn,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=e?e.root:l,l.emit=qp.bind(null,l),n.ce&&n.ce(l),l}let On=null;const ms=()=>On||ee;let na,Ja;{const n=Hi(),e=(t,s)=>{let a;return(a=n[t])||(a=n[t]=[]),a.push(s),l=>{a.length>1?a.forEach(o=>o(l)):a[0](l)}};na=e("__VUE_INSTANCE_SETTERS__",t=>On=t),Ja=e("__VUE_SSR_SETTERS__",t=>vs=t)}const ks=n=>{const e=On;return na(n),n.scope.on(),()=>{n.scope.off(),na(e)}},Po=()=>{On&&On.scope.off(),na(null)};function Or(n){return n.vnode.shapeFlag&4}let vs=!1;function qd(n,e=!1){e&&Ja(e);const{props:t,children:s}=n.vnode,a=Or(n);_d(n,t,a,e),Ld(n,s);const l=a?Wd(n,e):void 0;return e&&Ja(!1),l}function Wd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=tr(new Proxy(n.ctx,fd));const{setup:s}=t;if(s){const a=n.setupContext=s.length>1?Gd(n):null,l=ks(n);lt();const o=ze(s,n,0,[n.props,a]);if(ot(),l(),Ni(o)){if(o.then(Po,Po),e)return o.then(c=>{Do(n,c,e)}).catch(c=>{hs(c,n,0)});n.asyncDep=o}else Do(n,o,e)}else Mr(n,e)}function Do(n,e,t){tn(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ln(e)&&(n.setupState=lr(e)),Mr(n,t)}let Ro;function Mr(n,e,t){const s=n.type;if(!n.render){if(!e&&Ro&&!s.render){const a=s.template||Pl(n).template;if(a){const{isCustomElement:l,compilerOptions:o}=n.appContext.config,{delimiters:c,compilerOptions:r}=s,u=In(In({isCustomElement:l,delimiters:c},o),r);s.render=Ro(a,u)}}n.render=s.render||ne}{const a=ks(n);lt();try{gd(n)}finally{ot(),a()}}}function Ud(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Gn(n,"get","$attrs"),e[t]}}))}function Gd(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ud(n)},slots:n.slots,emit:n.emit,expose:e}}function Ol(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(lr(tr(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qt)return qt[t](n)},has(e,t){return t in e||t in qt}}))}function Kd(n,e=!0){return tn(n)?n.displayName||n.name:n.name||e&&n.__name}function Jd(n){return tn(n)&&"__vccOpts"in n}const b=(n,e)=>Dp(n,e,vs);function i(n,e,t){const s=arguments.length;return s===2?Ln(e)&&!Z(e)?Ka(e)?An(n,null,[e]):An(n,e):An(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Ka(t)&&(t=[t]),An(n,e,t))}const Yd="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Xd="http://www.w3.org/2000/svg",Qd="http://www.w3.org/1998/Math/MathML",He=typeof document<"u"?document:null,Oo=He&&He.createElement("template"),Zd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const a=e==="svg"?He.createElementNS(Xd,n):e==="mathml"?He.createElementNS(Qd,n):He.createElement(n,t?{is:t}:void 0);return n==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:n=>He.createTextNode(n),createComment:n=>He.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>He.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,a,l){const o=t?t.previousSibling:e.lastChild;if(a&&(a===l||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),t),!(a===l||!(a=a.nextSibling)););else{Oo.innerHTML=s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n;const c=Oo.content;if(s==="svg"||s==="mathml"){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}e.insertBefore(c,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Oe="transition",jt="animation",Lt=Symbol("_vtc"),Ue=(n,{slots:e})=>i(sd,Fr(n),e);Ue.displayName="Transition";const jr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nh=Ue.props=In({},kr,jr),Xe=(n,e=[])=>{Z(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mo=n=>n?Z(n)?n.some(e=>e.length>1):n.length>1:!1;function Fr(n){const e={};for(const M in n)M in jr||(e[M]=n[M]);if(n.css===!1)return e;const{name:t="v",type:s,duration:a,enterFromClass:l=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:r=l,appearActiveClass:u=o,appearToClass:p=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,k=eh(a),_=k&&k[0],w=k&&k[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:v,onLeave:T,onLeaveCancelled:j,onBeforeAppear:L=y,onAppear:q=E,onAppearCancelled:N=v}=e,Y=(M,nn,Tn)=>{je(M,nn?p:c),je(M,nn?u:o),Tn&&Tn()},D=(M,nn)=>{M._isLeaving=!1,je(M,d),je(M,f),je(M,h),nn&&nn()},X=M=>(nn,Tn)=>{const Cn=M?q:E,G=()=>Y(nn,M,Tn);Xe(Cn,[nn,G]),jo(()=>{je(nn,M?r:l),Te(nn,M?p:c),Mo(Cn)||Fo(nn,s,_,G)})};return In(e,{onBeforeEnter(M){Xe(y,[M]),Te(M,l),Te(M,o)},onBeforeAppear(M){Xe(L,[M]),Te(M,r),Te(M,u)},onEnter:X(!1),onAppear:X(!0),onLeave(M,nn){M._isLeaving=!0;const Tn=()=>D(M,nn);Te(M,d),Nr(),Te(M,h),jo(()=>{M._isLeaving&&(je(M,d),Te(M,f),Mo(T)||Fo(M,s,w,Tn))}),Xe(T,[M,Tn])},onEnterCancelled(M){Y(M,!1),Xe(v,[M])},onAppearCancelled(M){Y(M,!0),Xe(N,[M])},onLeaveCancelled(M){D(M),Xe(j,[M])}})}function eh(n){if(n==null)return null;if(Ln(n))return[Ta(n.enter),Ta(n.leave)];{const e=Ta(n);return[e,e]}}function Ta(n){return tp(n)}function Te(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Lt]||(n[Lt]=new Set)).add(e)}function je(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[Lt];t&&(t.delete(e),t.size||(n[Lt]=void 0))}function jo(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let th=0;function Fo(n,e,t,s){const a=n._endId=++th,l=()=>{a===n._endId&&s()};if(t)return setTimeout(l,t);const{type:o,timeout:c,propCount:r}=$r(n,e);if(!o)return s();const u=o+"end";let p=0;const d=()=>{n.removeEventListener(u,h),l()},h=f=>{f.target===n&&++p>=r&&d()};setTimeout(()=>{p<r&&d()},c+1),n.addEventListener(u,h)}function $r(n,e){const t=window.getComputedStyle(n),s=k=>(t[k]||"").split(", "),a=s(`${Oe}Delay`),l=s(`${Oe}Duration`),o=$o(a,l),c=s(`${jt}Delay`),r=s(`${jt}Duration`),u=$o(c,r);let p=null,d=0,h=0;e===Oe?o>0&&(p=Oe,d=o,h=l.length):e===jt?u>0&&(p=jt,d=u,h=r.length):(d=Math.max(o,u),p=d>0?o>u?Oe:jt:null,h=p?p===Oe?l.length:r.length:0);const f=p===Oe&&/\b(transform|all)(,|$)/.test(s(`${Oe}Property`).toString());return{type:p,timeout:d,propCount:h,hasTransform:f}}function $o(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>No(t)+No(n[s])))}function No(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nr(){return document.body.offsetHeight}function sh(n,e,t){const s=n[Lt];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ho=Symbol("_vod"),ah=Symbol("_vsh"),lh=Symbol(""),oh=/(^|;)\s*display\s*:/;function ih(n,e,t){const s=n.style,a=Mn(t);let l=!1;if(t&&!a){if(e)if(Mn(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();t[c]==null&&Us(s,c,"")}else for(const o in e)t[o]==null&&Us(s,o,"");for(const o in t)o==="display"&&(l=!0),Us(s,o,t[o])}else if(a){if(e!==t){const o=s[lh];o&&(t+=";"+o),s.cssText=t,l=oh.test(t)}}else e&&n.removeAttribute("style");Ho in n&&(n[Ho]=l?s.display:"",n[ah]&&(s.display="none"))}const Vo=/\s*!important$/;function Us(n,e,t){if(Z(t))t.forEach(s=>Us(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=rh(n,e);Vo.test(t)?n.setProperty(At(s),t.replace(Vo,""),"important"):n[s]=t}}const Bo=["Webkit","Moz","ms"],Ca={};function rh(n,e){const t=Ca[e];if(t)return t;let s=se(e);if(s!=="filter"&&s in n)return Ca[e]=s;s=ps(s);for(let a=0;a<Bo.length;a++){const l=Bo[a]+s;if(l in n)return Ca[e]=l}return e}const zo="http://www.w3.org/1999/xlink";function ch(n,e,t,s,a){if(s&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(zo,e.slice(6,e.length)):n.setAttributeNS(zo,e,t);else{const l=rp(e);t==null||l&&!Vi(t)?n.removeAttribute(e):n.setAttribute(e,l?"":t)}}function uh(n,e,t,s,a,l,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,a,l),n[e]=t??"";return}const c=n.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?n.getAttribute("value")||"":n.value,p=t??"";(u!==p||!("_value"in n))&&(n.value=p),t==null&&n.removeAttribute(e),n._value=t;return}let r=!1;if(t===""||t==null){const u=typeof n[e];u==="boolean"?t=Vi(t):t==null&&u==="string"?(t="",r=!0):u==="number"&&(t=0,r=!0)}try{n[e]=t}catch{}r&&n.removeAttribute(e)}function ph(n,e,t,s){n.addEventListener(e,t,s)}function dh(n,e,t,s){n.removeEventListener(e,t,s)}const qo=Symbol("_vei");function hh(n,e,t,s,a=null){const l=n[qo]||(n[qo]={}),o=l[e];if(s&&o)o.value=s;else{const[c,r]=fh(e);if(s){const u=l[e]=kh(s,a);ph(n,c,u,r)}else o&&(dh(n,c,o,r),l[e]=void 0)}}const Wo=/(?:Once|Passive|Capture)$/;function fh(n){let e;if(Wo.test(n)){e={};let s;for(;s=n.match(Wo);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):At(n.slice(2)),e]}let Sa=0;const gh=Promise.resolve(),mh=()=>Sa||(gh.then(()=>Sa=0),Sa=Date.now());function kh(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;te(vh(s,t.value),e,5,[s])};return t.value=n,t.attached=mh(),t}function vh(n,e){if(Z(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const Uo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yh=(n,e,t,s,a,l,o,c,r)=>{const u=a==="svg";e==="class"?sh(n,s,u):e==="style"?ih(n,t,s):us(e)?hl(e)||hh(n,e,t,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bh(n,e,s,u))?uh(n,e,s,l,o,c,r):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),ch(n,e,s,u))};function bh(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uo(e)&&tn(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=n.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Uo(e)&&Mn(t)?!1:e in n}const Hr=new WeakMap,Vr=new WeakMap,ea=Symbol("_moveCb"),Go=Symbol("_enterCb"),Br={name:"TransitionGroup",props:In({},nh,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=ms(),s=mr();let a,l;return br(()=>{if(!a.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Th(a[0].el,t.vnode.el,o))return;a.forEach(xh),a.forEach(Eh);const c=a.filter(Lh);Nr(),c.forEach(r=>{const u=r.el,p=u.style;Te(u,o),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[ea]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[ea]=null,je(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=on(n),c=Fr(o);let r=o.tag||Xn;a=l,l=e.default?Il(e.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null&&ns(p,Zt(p,c,s,t))}if(a)for(let u=0;u<a.length;u++){const p=a[u];ns(p,Zt(p,c,s,t)),Hr.set(p,p.el.getBoundingClientRect())}return An(r,null,l)}}},wh=n=>delete n.mode;Br.props;const _h=Br;function xh(n){const e=n.el;e[ea]&&e[ea](),e[Go]&&e[Go]()}function Eh(n){Vr.set(n,n.el.getBoundingClientRect())}function Lh(n){const e=Hr.get(n),t=Vr.get(n),s=e.left-t.left,a=e.top-t.top;if(s||a){const l=n.el.style;return l.transform=l.webkitTransform=`translate(${s}px,${a}px)`,l.transitionDuration="0s",n}}function Th(n,e,t){const s=n.cloneNode(),a=n[Lt];a&&a.forEach(c=>{c.split(/\s+/).forEach(r=>r&&s.classList.remove(r))}),t.split(/\s+/).forEach(c=>c&&s.classList.add(c)),s.style.display="none";const l=e.nodeType===1?e:e.parentNode;l.appendChild(s);const{hasTransform:o}=$r(s);return l.removeChild(s),o}const Ch=In({patchProp:yh},Zd);let Ia,Ko=!1;function Sh(){return Ia=Ko?Ia:Ad(Ch),Ko=!0,Ia}const Ih=(...n)=>{const e=Sh().createApp(...n),{mount:t}=e;return e.mount=s=>{const a=Ph(s);if(a)return t(a,!0,Ah(a))},e};function Ah(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ph(n){return Mn(n)?document.querySelector(n):n}var Dh=["link","meta","script","style","noscript","template"],Rh=["title","base"],Oh=([n,e,t])=>Rh.includes(n)?n:Dh.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),t]):null,Mh=n=>{const e=new Set,t=[];return n.forEach(s=>{const a=Oh(s);a&&!e.has(a)&&(e.add(a),t.push(s))}),t},jh=n=>n[0]==="/"?n:`/${n}`,zr=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,Ke=n=>/^(https?:)?\/\//.test(n),Fh=/.md((\?|#).*)?$/,ts=(n,e="/")=>!!(Ke(n)||n.startsWith("/")&&!n.startsWith(e)&&!Fh.test(n)),qr=n=>/^[a-z][a-z0-9+.-]*:/.test(n),ys=n=>Object.prototype.toString.call(n)==="[object Object]",$h=n=>{const[e,...t]=n.split(/(\?|#)/);if(!e||e.endsWith("/"))return n;let s=e.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+t.join("")},Ml=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Wr=n=>n[0]==="/"?n.slice(1):n,Nh=(n,e)=>{const t=Object.keys(n).sort((s,a)=>{const l=a.split("/").length-s.split("/").length;return l!==0?l:a.length-s.length});for(const s of t)if(e.startsWith(s))return s;return"/"},vn=n=>typeof n=="string";const Hh="modulepreload",Vh=function(n){return"/"+n},Jo={},C=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.all(t.map(r=>{if(r=Vh(r),r in Jo)return;Jo[r]=!0;const u=r.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let f=l.length-1;f>=0;f--){const k=l[f];if(k.href===r&&(!u||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Hh,u||(h.as="script",h.crossOrigin=""),h.href=r,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((f,k)=>{h.addEventListener("load",f),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>e()).catch(l=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l})},Bh=JSON.parse("{}"),zh=Object.fromEntries([["/",{loader:()=>C(()=>import("./index.html-BWP3ZmuG.js"),[]),meta:{t:"首页",i:"home"}}],["/blog/",{loader:()=>C(()=>import("./index.html-C2jkUtOo.js"),[]),meta:{d:1654177641e3,e:`
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
<h2>博客技术栈🐔</h2>
<ul>
<li>使用了基于vue的vuepress框架进行搭建</li>
<li>官网: <a href="https://vuepress-theme-hope.github.io/v2/zh/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/v2/zh/</a></li>
</ul>`,r:{minutes:.82,words:247},t:"指南",i:"creative",y:"a"}}],["/blog/body.html",{loader:()=>C(()=>import("./body.html-DjT5Mel6.js"),[]),meta:{d:1652589468e3,e:`
<h2>介绍⛪</h2>
<ul>
<li>学习一些新东西，体验一些新东西。</li>
</ul>
<h2>堆栈😆</h2>
<h3>栈🍎</h3>
<ul>
<li>栈内存</li>
<li>方法栈</li>
<li>本地方法栈</li>
<li>描述：在本地方法读取，其变量的内存大小是可预见的。</li>
<li>代码优化: 本地变量获取赋值如果不需要修改则请使用 final 修饰变量</li>
</ul>
<h3>堆🍏</h3>
<ul>
<li>堆内存</li>
<li>描述：内存大小是不固定的。内存地址的位置也不固定。</li>
<li>代码建议: 尽量不使用或替换到本地方法变量，找寻内存地址也需要时间。</li>
</ul>`,r:{minutes:.56,words:169},t:"自述",i:"light",O:1,y:"a"}}],["/blog/desc.html",{loader:()=>C(()=>import("./desc.html-BVmcz_8a.js"),[]),meta:{d:1666338754e3,e:`
<h2>介绍💒</h2>
<ul>
<li>2022/10/21</li>
</ul>
<h2>博客数据🍒</h2>
<ul>
<li>此后每月1日更新一次！</li>
<li>日期: 2022/10/21
::: chart 修改次数排行</li>
</ul>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"labels"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"2022/8/25"</span><span class="token punctuation">,</span><span class="token string">"2022/9/1"</span><span class="token punctuation">,</span><span class="token string">"2022/9/2"</span><span class="token punctuation">,</span><span class="token string">"2022/9/14"</span><span class="token punctuation">,</span><span class="token string">"2022/9/15"</span><span class="token punctuation">,</span><span class="token string">"2022/9/19"</span><span class="token punctuation">,</span><span class="token string">"2022/9/21"</span><span class="token punctuation">,</span><span class="token string">"2022/9/27"</span><span class="token punctuation">,</span><span class="token string">"2022/9/30"</span><span class="token punctuation">,</span><span class="token string">"2022/10/9"</span><span class="token punctuation">,</span><span class="token string">"2022/10/10"</span><span class="token punctuation">,</span><span class="token string">"2022/10/11"</span><span class="token punctuation">,</span><span class="token string">"2022/10/12"</span><span class="token punctuation">,</span><span class="token string">"2022/10/13"</span><span class="token punctuation">,</span><span class="token string">"2022/10/15"</span><span class="token punctuation">,</span><span class="token string">"2022/10/19"</span><span class="token punctuation">,</span><span class="token string">"2022/10/21"</span><span class="token punctuation">,</span><span class="token string">"2022/10/22"</span><span class="token punctuation">,</span><span class="token string">"2022/10/24"</span><span class="token punctuation">,</span><span class="token string">"2022/10/25"</span><span class="token punctuation">,</span><span class="token string">"2022/10/26"</span><span class="token punctuation">,</span><span class="token string">"2022/10/28"</span><span class="token punctuation">,</span><span class="token string">"2022/10/29"</span><span class="token punctuation">,</span><span class="token string">"2022/10/31"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">"datasets"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">"label"</span><span class="token operator">:</span><span class="token string">"修改数"</span><span class="token punctuation">,</span><span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">"backgroundColor"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 0.2)"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">"borderColor"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">,</span><span class="token string">"rgba(54, 162, 235, 1)"</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token property">"borderWidth"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"bar"</span><span class="token punctuation">,</span><span class="token property">"options"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"scales"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"y"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"beginAtZero"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.54,words:1063},t:"Desc",i:"study",O:2,y:"a"}}],["/blog/random.html",{loader:()=>C(()=>import("./random.html-CQDX9rNw.js"),[]),meta:{d:1654177641e3,e:`
<ul>
<li>2022/6/2</li>
</ul>
<h2>多线程🍎</h2>
<ul>
<li>线程的状态</li>
<li>创建，运行，休眠，阻塞，死亡</li>
</ul>
<h3>ThreadPoolExecutor🍉</h3>
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
<p><img src="/images/ThreadPool.png" alt="线程池"></p>`,r:{minutes:.63,words:190},t:"随笔",i:"style",y:"a"}}],["/blog/video.html",{loader:()=>C(()=>import("./video.html-BmRuXJ1Y.js"),[]),meta:{d:1665830787e3,e:`
<h2>觉得不错的b站视频👊</h2>
`,r:{minutes:.07,words:22},t:"Video",i:"support",y:"a"}}],["/en/",{loader:()=>C(()=>import("./index.html-Cpo6b74h.js"),[]),meta:{t:"Front page",i:"home"}}],["/plugins/",{loader:()=>C(()=>import("./index.html-CcVOWocc.js"),[]),meta:{d:1670585469e3,e:`
<h2>介绍</h2>
<div class="hint-container tip">
<p class="hint-container-title">插件介绍</p>
<ul>
<li>2022/10/21</li>
<li>实现一些目前阶段常用组件</li>
<li>这些是在学习的过程中开发的插件，用于辅助开发提高效率</li>
</ul>
</div>
<h2>功能</h2>
<ul>
<li>具体功能请查看对于文件</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">结尾</p>
<ul>
<li>这些插件都是来自对重复性工作的抽离</li>
<li>未来将会根据情况开发一些新插件，来满足其他场景的应用!</li>
</ul>
</div>`,r:{minutes:.36,words:109},t:"插件",y:"a"}}],["/plugins/gorm.html",{loader:()=>C(()=>import("./gorm.html--QMyhuld.js"),[]),meta:{d:1666055552e3,e:`
<ul>
<li>文档链接: <a href="https://github.com/licheng1013/gorm-template" target="_blank" rel="noopener noreferrer">gorm-template</a></li>
<li>下面的文档已经过时,请参考上面的文档</li>
</ul>
`,r:{minutes:.1,words:29},t:"Gorm",i:"hot",y:"a"}}],["/plugins/io-game.html",{loader:()=>C(()=>import("./io-game.html-BInHxgl1.js"),[]),meta:{d:1669444007e3,e:`
<ul>
<li>文档迁移至: https://github.com/licheng1013/io-game-example</li>
</ul>
`,r:{minutes:.04,words:12},t:"IoGame",i:"java",y:"a"}}],["/plugins/java-orm.html",{loader:()=>C(()=>import("./java-orm.html-B_rufssg.js"),__vite__mapDeps([0,1])),meta:{d:166313995e4,e:`
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2>介绍</h2>
<ul>
<li>2022/9/14</li>
<li>基于MybatisPlus 和 SpringBoot 制作的代码生成插件</li>
<li>支持SpringBoot项目快速搭建.</li>
<li>插件地址: <a href="https://plugins.jetbrains.com/plugin/20888-javaorm" target="_blank" rel="noopener noreferrer">https://plugins.jetbrains.com/plugin/20888-javaorm</a></li>
</ul>`,r:{minutes:.92,words:276},t:"JavaOrm",i:"java",y:"a"}}],["/plugins/request-tool.html",{loader:()=>C(()=>import("./request-tool.html-C798z6is.js"),[]),meta:{d:1674268065e3,e:`
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2>介绍</h2>
<ul class="task-list-container">
<li>2023/1/21</li>
<li>一个Http请求工具,您可以例如请求结果构建自己的文档</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 是否开发</label></li>
</ul>`,r:{minutes:1.36,words:409},t:"RequestTool",i:"tool",y:"a"}}],["/plugins/rocket-cat.html",{loader:()=>C(()=>import("./rocket-cat.html-DVEFFJC0.js"),[]),meta:{d:1681096377e3,e:`
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2>介绍</h2>
<ul>
<li>2023/4/10</li>
<li>RocketCat框架的辅助插件</li>
<li><a href="https://plugins.jetbrains.com/plugin/21283-rocketcat" target="_blank" rel="noopener noreferrer">RocketCat插件</a></li>
<li><a href="https://github.com/licheng1013/rocket-cat" target="_blank" rel="noopener noreferrer">RocketCat框架</a></li>
<li>对于个人开发者制作网络游戏的一个插件工具</li>
<li>我们在进行双端开发时，总是需要把一些常用的变量或者文件复制到两个项目中。</li>
<li>在项目路由太多的情况下，可能需要一些快速定位到目标方法上。来提高开发体验。</li>
</ul>`,r:{minutes:.64,words:193},t:"RocketCat",i:"hot",y:"a"}}],["/plugins/rs-orm.html",{loader:()=>C(()=>import("./rs-orm.html-CB5Z5GFp.js"),[]),meta:{d:1671088008e3,e:`
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2>介绍</h2>
<ul class="task-list-container">
<li>2022/12/15</li>
<li>基于Actix+SeaOrm的Idea插件</li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 是否开发</label></li>
</ul>`,r:{minutes:.17,words:50},t:"RsRom",i:"launch",y:"a"}}],["/plugins/vue-admin.html",{loader:()=>C(()=>import("./vue-admin.html-DZQ4DI7x.js"),[]),meta:{d:1666055552e3,e:`
<div class="hint-container info">
<p class="hint-container-title">重要</p>
<ul>
<li>对于使用问题，您还可以加群询问。</li>
<li>🐧群: <strong>289132257</strong> 加群链接: <a href="https://jq.qq.com/?_wv=1027&amp;k=MLHAbqMY" target="_blank" rel="noopener noreferrer">交流群</a></li>
</ul>
</div>
<h2>介绍</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
<li>这个示例前端后台模板</li>
<li>未来可能会和生态插件Gorm等绑定到一起</li>
</ul>`,r:{minutes:.5,words:151},t:"VueAdmin",i:"vue",y:"a"}}],["/study/",{loader:()=>C(()=>import("./index.html-DYebU7NE.js"),[]),meta:{d:1670583353e3,e:`
<h2>介绍</h2>
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
<td><a href="/study/game/game.html" target="_blank">Game</a></td>
</tr>
<tr>
<td>Go</td>
<td>Go技术相关</td>
<td><a href="/study/go/go.html" target="_blank">Go</a></td>
</tr>
<tr>
<td>Java</td>
<td>Java技术相关</td>
<td><a href="/study/java/java.html" target="_blank">Java</a></td>
</tr>
<tr>
<td>Linux</td>
<td>Linux技术相关</td>
<td><a href="/study/linux/linux.html" target="_blank">Linux</a></td>
</tr>
<tr>
<td>Try</td>
<td>尝试的技术</td>
<td><a href="/study/try/asset.html" target="_blank">Try</a></td>
</tr>
<tr>
<td>Web</td>
<td>Web技术相关</td>
<td><a href="/study/try/vue.html" target="_blank">Web</a></td>
</tr>
</tbody>
</table>`,r:{minutes:.46,words:137},t:"指南",i:"creative",y:"a"}}],["/util/",{loader:()=>C(()=>import("./index.html-Do6CQaDE.js"),[]),meta:{d:1671088008e3,e:`
<h2>介绍🍉</h2>
<ul>
<li>有些软件还没进行分类</li>
<li>搜集一些好用的工具</li>
<li>2022/7/29</li>
</ul>
<h2>工具列表🐸</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>无论你是开发者,或平常用电脑的人,以下总有一款适合你的工具</p>
</div>
<h3>Icon素材</h3>
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
</table>`,r:{minutes:1.37,words:410},t:"插件",y:"a"}}],["/util/common.html",{loader:()=>C(()=>import("./common.html-Wb0iDL_v.js"),[]),meta:{d:1671088008e3,e:`
<h2>内存节约工具</h2>
<ul>
<li>win11有时会吞掉一些内存,使用该工具可以显著减少内存占用</li>
<li>下载该工具运行压缩包里面的: RAMMap.exe 文件,使用下图用法</li>
<li><a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/rammap" target="_blank" rel="noopener noreferrer">rammap</a></li>
</ul>
<p><img src="/images/util1.png" alt=""></p>
<h2>AI工具</h2>`,r:{minutes:.8,words:240},t:"通用工具",y:"a"}}],["/util/dev.html",{loader:()=>C(()=>import("./dev.html-CLCrGbPH.js"),[]),meta:{d:1676268191e3,e:`
<h2>Fleet</h2>
<ul>
<li>2022/12/8</li>
<li>一个新的代码编辑工具</li>
</ul>
<h3>主题编辑器</h3>
<ul>
<li><a href="https://hueflake.dev/apps/fleet" target="_blank" rel="noopener noreferrer">https://hueflake.dev/apps/fleet</a></li>
</ul>
<h2>Github</h2>
<ul>
<li>2022/12/15</li>
<li>加速访问Github</li>
<li>都是免费可以使用的</li>
</ul>`,r:{minutes:.29,words:87},t:"开发工具",y:"a"}}],["/util/idea.html",{loader:()=>C(()=>import("./idea.html-BhgzBOOh.js"),[]),meta:{d:1655797181e3,e:`
<h2>介绍🐔</h2>
<ul>
<li>最牛皮的开发工具 Idea 比 &gt; Eclipse 强大N倍</li>
<li><a href="https://www.ajihuo.com/idea/4222.html" target="_blank" rel="noopener noreferrer">https://www.ajihuo.com/idea/4222.html</a></li>
<li><a href="https://idea.medeming.com/" target="_blank" rel="noopener noreferrer">https://idea.medeming.com/</a></li>
<li><a href="http://idea.javatiku.cn/" target="_blank" rel="noopener noreferrer">http://idea.javatiku.cn/</a></li>
<li>购买激活，没买过</li>
<li><a href="https://javaforall.cn/128783.html" target="_blank" rel="noopener noreferrer">https://javaforall.cn/128783.html</a></li>
<li><a href="https://gitee.com/ja-netfilter/ja-netfilter" target="_blank" rel="noopener noreferrer">https://gitee.com/ja-netfilter/ja-netfilter</a></li>
</ul>`,r:{minutes:1.35,words:405},t:"Idea插件",I:!1,y:"a"}}],["/en/english/",{loader:()=>C(()=>import("./index.html-BPq-DfKG.js"),[]),meta:{d:1677410841e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/2/26</li>
<li>I am studying English. This is my diary.</li>
</ul>
`,r:{minutes:.05,words:15},t:"English",i:"creative",y:"a"}}],["/en/english/day1.html",{loader:()=>C(()=>import("./day1.html-Dy7czS3l.js"),[]),meta:{d:1677410841e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/2/26</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.38,words:115},t:"Day1",y:"a"}}],["/en/english/day10.html",{loader:()=>C(()=>import("./day10.html-D5cMYPeu.js"),[]),meta:{d:1679498628e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/22</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.36,words:108},t:"Day10",y:"a"}}],["/en/english/day11.html",{loader:()=>C(()=>import("./day11.html-BbGCM7m1.js"),[]),meta:{d:1679756122e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/25</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.73,words:218},t:"Day11",y:"a"}}],["/en/english/day12.html",{loader:()=>C(()=>import("./day12.html-Eik4eSm3.js"),[]),meta:{d:1679925989e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/27</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.89,words:267},t:"Day12",y:"a"}}],["/en/english/day13.html",{loader:()=>C(()=>import("./day13.html-DVNsPgnv.js"),[]),meta:{d:1680017019e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/28</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.84,words:251},t:"Day13",y:"a"}}],["/en/english/day14.html",{loader:()=>C(()=>import("./day14.html-C4reg3f1.js"),[]),meta:{d:1680795804e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/6</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.35,words:106},t:"Day14",y:"a"}}],["/en/english/day15.html",{loader:()=>C(()=>import("./day15.html-BGDoIb28.js"),[]),meta:{d:1680017019e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/7</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
<ul>
<li>let me say this: (让我说这个)</li>
<li>bein a idiot is no box of chocolates.(做一个白痴可不像一盒巧克力)</li>
<li></li>
</ul>
`,r:{minutes:.12,words:35},t:"Day15",y:"a"}}],["/en/english/day16.html",{loader:()=>C(()=>import("./day16.html-D2UHl9M_.js"),[]),meta:{d:1680963034e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/8</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.38,words:114},t:"Day16",y:"a"}}],["/en/english/day17.html",{loader:()=>C(()=>import("./day17.html-DlDRZAWg.js"),[]),meta:{d:168113406e4,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/10</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.51,words:153},t:"Day17",y:"a"}}],["/en/english/day18.html",{loader:()=>C(()=>import("./day18.html-CVb3BTdI.js"),[]),meta:{d:1681798252e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/18</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:1.11,words:333},t:"Day18",y:"a"}}],["/en/english/day19.html",{loader:()=>C(()=>import("./day19.html-DfncKmTM.js"),[]),meta:{d:1682083675e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/4/21</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
<ul>
<li>near 附近</li>
<li>zoo 动物园</li>
<li>town 小镇</li>
</ul>
<h2>语法分析</h2>
<ul>
<li>-&gt; 表示从前往后理解</li>
<li>&lt;- 表示从后往前理解</li>
</ul>
<h3>Is duo from a small town near Beijing?</h3>
<ul>
<li>朵儿来自北京附近的一个小镇</li>
<li>Is duo from -&gt;</li>
<li>a small town near Beijing &lt;-</li>
</ul>`,r:{minutes:.55,words:166},t:"Day19",y:"a"}}],["/en/english/day2.html",{loader:()=>C(()=>import("./day2.html-DXn90GPg.js"),[]),meta:{d:1677467697e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/2/27</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.89,words:266},t:"Day2",y:"a"}}],["/en/english/day3.html",{loader:()=>C(()=>import("./day3.html-D57kxPVG.js"),[]),meta:{d:1677594117e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/2/28</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.23,words:68},t:"Day3",y:"a"}}],["/en/english/day4.html",{loader:()=>C(()=>import("./day4.html-BQJeWtyq.js"),[]),meta:{d:1677675743e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/1</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.8,words:241},t:"Day4",y:"a"}}],["/en/english/day5.html",{loader:()=>C(()=>import("./day5.html-CvPx_003.js"),[]),meta:{d:1677851348e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/3</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.13,words:39},t:"Day5",y:"a"}}],["/en/english/day6.html",{loader:()=>C(()=>import("./day6.html-dnkzRvvt.js"),[]),meta:{d:1677945554e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/4</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
<h2>bing</h2>
`,r:{minutes:.06,words:17},t:"Day6",y:"a"}}],["/en/english/day7.html",{loader:()=>C(()=>import("./day7.html-CLedEJxk.js"),[]),meta:{d:1678109202e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/5</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</table>`,r:{minutes:.06,words:17},t:"Day7",y:"a"}}],["/en/english/day8.html",{loader:()=>C(()=>import("./day8.html-CT9VdcDu.js"),[]),meta:{d:1678116734e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/6</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.64,words:191},t:"Day8",y:"a"}}],["/en/english/day9.html",{loader:()=>C(()=>import("./day9.html-DkKiyVse.js"),[]),meta:{d:1679314845e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/3/20</li>
</ul>
<h2>Study</h2>
<h3>Words</h3>
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
</ul>`,r:{minutes:.73,words:218},t:"Day9",y:"a"}}],["/en/english/study.html",{loader:()=>C(()=>import("./study.html-NZNSShaX.js"),[]),meta:{d:1678408672e3,e:`
<h2>前缀(12)-义</h2>
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
</table>`,r:{minutes:1.28,words:384},t:"Study",O:1,y:"a"}}],["/en/plugins/",{loader:()=>C(()=>import("./index.html-B57Jt5hZ.js"),[]),meta:{d:1677410841e3,e:`
<h2>Desc</h2>
<ul>
<li>2022/10/21</li>
<li>Hi,If you look this page.</li>
<li>The sidebars are all my Idea plug-ins, some java or go related.</li>
</ul>
<h2>Menu</h2>
<h3>Supported</h3>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Gorm</label></li>
</ul>`,r:{minutes:.1,words:30},t:"Plugins",i:"creative",y:"a"}}],["/en/plugins/gorm.html",{loader:()=>C(()=>import("./gorm.html-DiPwQrWb.js"),[]),meta:{d:1666055552e3,e:`
<ul>
<li><a href="https://github.com/licheng1013/gorm-template" target="_blank" rel="noopener noreferrer">Document Connections</a></li>
<li>The following documentation is outdated, please refer to the documentation above</li>
</ul>
`,r:{minutes:.06,words:18},t:"Document Connections",y:"a"}}],["/en/plugins/jorm.html",{loader:()=>C(()=>import("./jorm.html-C-q1i_Kw.js"),__vite__mapDeps([2,1])),meta:{d:166313995e4,e:`
<h2>介绍</h2>
<ul>
<li>2022/9/14</li>
<li>基于MybatisPlus 和 SpringBoot 制作的代码生成插件</li>
</ul>
<h2>使用</h2>
<ul>
<li>下载: 在Idea插件市场进行下载</li>
</ul>
<h2>功能介绍</h2>
<h3>支持对数据库注释和字段名进行mybatis-plus的注解关联</h3>
<ul>
<li>主键自动添加 @TableId 注解</li>
<li>deleted 或者 数据库注释为 "软删除" =&gt; 则自动对应mp的软删除注解 @TableLogic</li>
<li>create_time 或者 created_time 或者 create_at 或者 数据库注释为: ”创建时间“ =&gt; 则自动设置mp的创建时间注解  @TableField(fill = FieldFill.INSERT)</li>
<li>update_time 或者 updated_time 或者 updated_at 或者 数据库注释为: ”修改时间“ =&gt; 则自动设置mp的修改时间注解 @TableField(fill = FieldFill.UPDATE)</li>
</ul>`,r:{minutes:.62,words:186},t:"JavaOrm",y:"a"}}],["/en/plugins/vue-admin.html",{loader:()=>C(()=>import("./vue-admin.html-CygQcbrt.js"),[]),meta:{d:1666055552e3,e:`
<h2>Desc</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
</ul>
<h2>Example</h2>
<ul>
<li><a href="http://licheng1013.gitee.io/vue3-vite-admin-template/" target="_blank" rel="noopener noreferrer">http://licheng1013.gitee.io/vue3-vite-admin-template/</a></li>
</ul>
<h2>Implementation on the desktop</h2>`,r:{minutes:.22,words:67},t:"VueAdmin",y:"a"}}],["/study/game/",{loader:()=>C(()=>import("./index.html-ITxeblLC.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Game",i:"app",y:"a"}}],["/study/game/cocos.html",{loader:()=>C(()=>import("./cocos.html-2shqo_h_.js"),[]),meta:{d:1663818581e3,e:`
<h2>介绍⛪</h2>
<ul>
<li>2022/9/20</li>
</ul>
<h2>官网🌈</h2>
<ul>
<li>官网：<a href="https://www.cocos.com/" target="_blank" rel="noopener noreferrer">https://www.cocos.com/</a></li>
</ul>
<h2>插件💒</h2>
<ul>
<li>动画</li>
<li><a href="http://docs.cocos.com/creator/manual/zh/tween/" target="_blank" rel="noopener noreferrer">http://docs.cocos.com/creator/manual/zh/tween/</a></li>
</ul>`,r:{minutes:.08,words:23},t:"Cocos",y:"a"}}],["/study/game/game.html",{loader:()=>C(()=>import("./game.html-nblsUA_9.js"),[]),meta:{d:1663818581e3,e:`
<h2>提示❤️</h2>
<ul>
<li>2022/9/22 游戏引擎说明</li>
</ul>
<h2>技术🍑</h2>
<h3>帧同步🍉</h3>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/36884005" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/36884005</a></li>
<li><img src="/images/game.png" alt="/images/game.png"></li>
</ul>
<h2>介绍🎈</h2>`,r:{minutes:3.15,words:945},t:"Game",y:"a"}}],["/study/game/godot.html",{loader:()=>C(()=>import("./godot.html-CmorfrM5.js"),[]),meta:{d:1663818581e3,e:`
<h2>介绍🚩</h2>
<ul>
<li>2022/9/22</li>
</ul>
<h2>官网❤️</h2>
<ul>
<li>Github: <a href="https://github.com/godotengine/godot" target="_blank" rel="noopener noreferrer">https://github.com/godotengine/godot</a></li>
<li>中文文档：<a href="https://docs.godotengine.org/zh_CN/stable/index.html" target="_blank" rel="noopener noreferrer">https://docs.godotengine.org/zh_CN/stable/index.html</a></li>
<li>官网：<a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">https://godotengine.org/</a></li>
</ul>`,r:{minutes:.11,words:33},t:"Godot",y:"a"}}],["/study/game/unity-camera.html",{loader:()=>C(()=>import("./unity-camera.html-Ced__kbE.js"),[]),meta:{d:1701479021e3,e:`
<h2>日期</h2>
<ul>
<li>2023/12/2</li>
</ul>
<h2>步骤</h2>
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
</ul>`,r:{minutes:.3,words:89},t:"Unity-Camera",y:"a"}}],["/study/game/unity.html",{loader:()=>C(()=>import("./unity.html-B5LwiW7X.js"),[]),meta:{d:1655639782e3,e:`
<h2>工具</h2>
<ul>
<li>json序列化库导入!</li>
<li>com.unity.nuget.newtonsoft-json</li>
<li></li>
</ul>
<h2>子物体自适应高度布局滚动</h2>
<ul>
<li></li>
</ul>
<h2>Unity版本自动构建🪲</h2>
<h3>脚本</h3>
<div class="language-c#" data-ext="c#" data-title="c#"><pre class="language-c#"><code>// 詹姆斯·德夫为原创剧本灵感 原项目地址: https://github.com/JesusLuvsYooh/BuildVersionProcessor
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
</code></pre></div>`,r:{minutes:4.26,words:1277},t:"Unity",y:"a"}}],["/study/go/",{loader:()=>C(()=>import("./index.html-D9kXX4sy.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Go",i:"hot",y:"a"}}],["/study/go/design-mode.html",{loader:()=>C(()=>import("./design-mode.html-Bnn_i_7l.js"),[]),meta:{d:167643291e4,e:`
<h2>Go语言实现</h2>
<h3>代理模式</h3>
<div class="hint-container info">
<p class="hint-container-title">描述</p>
<ul>
<li>实现了基本代理模式，和嵌套代理模式</li>
</ul>
</div>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
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

</code></pre></div>`,r:{minutes:.38,words:115},t:"设计模式",y:"a"}}],["/study/go/difficult.html",{loader:()=>C(()=>import("./difficult.html-D0pj0iiN.js"),[]),meta:{d:1677571455e3,e:`
<h2>介绍</h2>
<ul>
<li>23/2/28</li>
<li>理解go某些高级操作。</li>
</ul>
<h2>Select</h2>
<ul>
<li>select 用于在多线程计算数据</li>
<li>下面示例附带了超时机制,但没有default语句.</li>
<li>当存在default语句，如果渠道还未存在数据,则直接执行default语句</li>
<li><strong>超时机制的作用在于延迟兜底操作。</strong></li>
<li><strong>default就是渠道都没准备好,就直接执行</strong></li>
</ul>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	c1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	c2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		c1 <span class="token operator">&lt;-</span> <span class="token string">"one"</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		c2 <span class="token operator">&lt;-</span> <span class="token string">"two"</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> msg1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"received"</span><span class="token punctuation">,</span> msg1<span class="token punctuation">)</span>
		<span class="token keyword">case</span> msg2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c2<span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"received"</span><span class="token punctuation">,</span> msg2<span class="token punctuation">)</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"timeout"</span><span class="token punctuation">)</span> <span class="token comment">//超时</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 输出</span>
	<span class="token comment">// received one</span>
	<span class="token comment">// received two</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:5.4,words:1620},t:"高级",y:"a"}}],["/study/go/gin.html",{loader:()=>C(()=>import("./gin.html-B38NqoTi.js"),[]),meta:{d:1663927052e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/9/23</li>
</ul>
<h2>安装</h2>
<ul>
<li>go get -u github.com/gin-gonic/gin</li>
</ul>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre></div>`,r:{minutes:3.21,words:964},t:"Gin",y:"a"}}],["/study/go/go.html",{loader:()=>C(()=>import("./go.html-BL8WXd7A.js"),[]),meta:{d:1659695436e3,e:`
<h2>介绍</h2>
<ul>
<li>2019年开始了解Go语言，到现在慢慢补。</li>
<li>本文档介绍了Go语言基础</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">描述</p>
<ul>
<li>学习项目: <a href="https://github.com/licheng1013/go-study" target="_blank" rel="noopener noreferrer">go-study</a></li>
</ul>
</div>
<h2>官网</h2>
`,r:{minutes:4.54,words:1362},t:"Go",y:"a"}}],["/study/go/gorm.html",{loader:()=>C(()=>import("./gorm.html-Cljqs_Dd.js"),[]),meta:{d:1663927052e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/9/23</li>
</ul>
<h2>安装</h2>
<ul>
<li>go get -u gorm.io/gorm</li>
<li>go get -u github.com/go-sql-driver/mysql</li>
<li>go get -u gorm.io/driver/mysql v1.3.5</li>
</ul>
<h2>使用</h2>
<ul>
<li>下面代码复制完运行这行代码后会自动搜索包: go mod tidy</li>
</ul>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> config

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

</code></pre></div>`,r:{minutes:.43,words:128},t:"Gorm",y:"a"}}],["/study/go/qiniu.html",{loader:()=>C(()=>import("./qiniu.html-M5Spq2gj.js"),[]),meta:{d:1669432928e3,e:`
<h2>七牛云存储对接</h2>
<ul>
<li>go</li>
<li>2022/11/26</li>
</ul>
<h2>后端go具体代码</h2>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
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
</code></pre></div>`,r:{minutes:.89,words:266},t:"七牛云",y:"a"}}],["/study/go/socket.html",{loader:()=>C(()=>import("./socket.html-CD4fTR3Q.js"),[]),meta:{d:1666663905e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/10/25</li>
</ul>
<h2>自定义协议</h2>
<ul>
<li>2023/2/16</li>
</ul>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code>
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

</code></pre></div>`,r:{minutes:5.68,words:1705},t:"Socket",y:"a"}}],["/study/go/ssh.html",{loader:()=>C(()=>import("./ssh.html-Clwo_26D.js"),[]),meta:{d:1666662126e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/10/25</li>
</ul>
<h2>终端连接</h2>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code>
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

</code></pre></div>`,r:{minutes:.56,words:169},t:"Ssh",y:"a"}}],["/study/go/try.html",{loader:()=>C(()=>import("./try.html-Di9AoSV-.js"),[]),meta:{d:1684461409e3,e:`
<h2>介绍</h2>
<ul>
<li>此文档解析一下go的原理或框架的原理</li>
</ul>
<h2>Gin</h2>
<h2>Go</h2>
`,r:{minutes:.08,words:25},t:"原理解析",y:"a"}}],["/study/go/util.html",{loader:()=>C(()=>import("./util.html-3vwzrIS-.js"),[]),meta:{d:1685071701e3,e:`
<h2>介绍</h2>
<ul>
<li>2023/5/26</li>
</ul>
<h3>缓存工具类</h3>
<div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> component

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

</code></pre></div>`,r:{minutes:.75,words:226},t:"工具",y:"a"}}],["/study/go/wails.html",{loader:()=>C(()=>import("./wails.html-BNkcesfj.js"),[]),meta:{d:1664896733e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/10/4</li>
<li>跨平台框架</li>
</ul>
<h2>官网</h2>
<ul>
<li><a href="https://wails.io/zh-Hans/docs/gettingstarted/installation/" target="_blank" rel="noopener noreferrer">https://wails.io/zh-Hans/docs/gettingstarted/installation/</a></li>
</ul>
`,r:{minutes:.06,words:17},t:"Wails",y:"a"}}],["/study/java/",{loader:()=>C(()=>import("./index.html-CqdVQmDI.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Java",i:"java",y:"a"}}],["/study/java/data-struct.html",{loader:()=>C(()=>import("./data-struct.html-BTyNneuQ.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍💒</h2>
<ul>
<li>待写</li>
</ul>
<h2>HashMap✋</h2>
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
</ul>`,r:{minutes:1.98,words:595},t:"数据结构",y:"a"}}],["/study/java/hutool.html",{loader:()=>C(()=>import("./hutool.html-NNyQoH58.js"),[]),meta:{d:1663209573e3,e:`
<h2>介绍💢</h2>
<ul>
<li>2022/9/15</li>
<li>一个很好用的工具库</li>
</ul>
<h2>Api😃</h2>
<ul>
<li>一些常用Api</li>
</ul>
<h3>对象复制🗾</h3>
<ul>
<li>A对象复制到B对象</li>
</ul>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>aiwan</span><span class="token punctuation">;</span>

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
</code></pre></div>`,r:{minutes:.26,words:77},t:"Hutool",y:"a"}}],["/study/java/io-game.html",{loader:()=>C(()=>import("./io-game.html-wrCQKuAm.js"),[]),meta:{d:1663058638e3,e:`
<h2>介绍😎</h2>
<ul>
<li>一个游戏框架</li>
</ul>
<h2>官网🍎</h2>
<ul>
<li>文档 <a href="https://www.yuque.com/iohao/game/wwvg7z" target="_blank" rel="noopener noreferrer">https://www.yuque.com/iohao/game/wwvg7z</a></li>
<li>Gitee <a href="https://gitee.com/iohao/iogame" target="_blank" rel="noopener noreferrer">https://gitee.com/iohao/iogame</a></li>
</ul>`,r:{minutes:.34,words:103},t:"IoGame",y:"a"}}],["/study/java/java.html",{loader:()=>C(()=>import("./java.html-BAdWprD3.js"),[]),meta:{d:165812515e4,e:`
<h2>介绍🐸</h2>
<ul>
<li>2022/7/18</li>
</ul>
<h2>Java基础🍊</h2>
<h3>List工具🍅</h3>
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
<h3>泛型💔</h3>
<ul>
<li>泛型的场景</li>
</ul>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// ArrayList</span>
<span class="token comment">// HashMap</span>
<span class="token comment">// LikedList</span>
<span class="token comment">// Array</span>
<span class="token comment">// 远程调用泛型</span>
</code></pre></div>`,r:{minutes:1.65,words:494},t:"Java",y:"a"}}],["/study/java/kd.html",{loader:()=>C(()=>import("./kd.html-BkhWig5v.js"),[]),meta:{d:1701673404e3,e:`
<h2>介绍</h2>
<div class="language-kotlin" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code>
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
</code></pre></div>`,r:{minutes:.54,words:161},t:"目录",y:"a"}}],["/study/java/maven.html",{loader:()=>C(()=>import("./maven.html-BjR2VFga.js"),[]),meta:{d:1661338e6,e:`
<h2>介绍😄</h2>
<ul>
<li>2019</li>
<li>如果把 mirror 去掉则是默认从中央仓库拉取</li>
</ul>
<h2>腾讯源镜像</h2>
<ul>
<li>阿里云有时候总有问题</li>
</ul>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>tencent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>tencent maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:.76,words:229},t:"Maven",y:"a"}}],["/study/java/mqtt.html",{loader:()=>C(()=>import("./mqtt.html-B-ntjvTz.js"),[]),meta:{d:165448599e4,e:`
<h2>介绍🍏</h2>
<ul>
<li>2022/6/6</li>
<li>消息队列 <a href="https://www.emqx.com/zh" target="_blank" rel="noopener noreferrer">https://www.emqx.com/zh</a></li>
<li>基于：完整 MQTT 3.x 和 5.0 规范</li>
</ul>
<h2>使用场景🍑</h2>
<ul>
<li>移动端 与 服务端的消息解耦</li>
</ul>
<h2>示例 SpringBoot🏧</h2>
<ul>
<li>接入依赖</li>
</ul>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.eclipse.paho<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>org.eclipse.paho.client.mqttv3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,r:{minutes:1.17,words:350},t:"Mqtt",y:"a"}}],["/study/java/mybatis.html",{loader:()=>C(()=>import("./mybatis.html-Bt62U6Mb.js"),[]),meta:{d:1655693918e3,e:`
<h2>介绍🍊</h2>
<ul>
<li>2022/5/10</li>
<li>一个ORM数据操作框架，支持以xml形式动态sql编写</li>
</ul>
<h2>常用标签😃</h2>
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
<h2>使用规范⛪</h2>
<ul>
<li>#{} 预编译sql语句在传值进去 不会sql注入</li>
<li>\${} 不编译sql语句直接传进去 引发sql注入</li>
</ul>`,r:{minutes:1.57,words:471},t:"Mybatis",y:"a"}}],["/study/java/protostuff.html",{loader:()=>C(()=>import("./protostuff.html-BVHNSHuL.js"),[]),meta:{d:1657609771e3,e:`
<h2>介绍💔</h2>
<ul>
<li>序列化工具</li>
<li><a href="https://github.com/protostuff/protostuff" target="_blank" rel="noopener noreferrer">https://github.com/protostuff/protostuff</a></li>
</ul>
<h2>使用😃</h2>
<div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div>`,r:{minutes:.64,words:191},t:"Protostuff序列化",y:"a"}}],["/study/java/redisson.html",{loader:()=>C(()=>import("./redisson.html-CShzmnFz.js"),[]),meta:{d:165559606e4,e:`
<h2>官网⛪</h2>
<ul>
<li><a href="https://github.com/redisson/redisson" target="_blank" rel="noopener noreferrer">https://github.com/redisson/redisson</a></li>
<li><a href="https://github.com/redisson/redisson/wiki" target="_blank" rel="noopener noreferrer">中文文档</a></li>
</ul>
<h2>介绍🐯</h2>
<ul>
<li>redis分布式锁的延升</li>
</ul>`,r:{minutes:.08,words:25},t:"Redisson",y:"a"}}],["/study/java/rocket-mq.html",{loader:()=>C(()=>import("./rocket-mq.html-BGRSvb4e.js"),[]),meta:{d:165448599e4,e:`
<h2>介绍🐷</h2>
<ul>
<li>2022/6/6</li>
</ul>
<h2>使用场景🎁</h2>
<ul>
<li>服务端 与 服务端的消息解耦</li>
<li>延迟订单</li>
<li>事务消息</li>
</ul>
<h2>示例😃</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/rocket-mq-demo" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/rocket-mq-demo</a></li>
</ul>`,r:{minutes:.2,words:59},t:"RocketMq",y:"a"}}],["/study/java/spring-boot-demo.html",{loader:()=>C(()=>import("./spring-boot-demo.html-BMR2qD4E.js"),[]),meta:{d:1652589468e3,e:`
<h2>根据条件创建bean的注解👻</h2>
<h3>@ConditionalOnProperty💒</h3>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"spring.cloud.discovery.enabled"</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnDiscoveryEnabled</span> <span class="token punctuation">{</span>
    <span class="token comment">//在指定的类上添加，可以限制类的bean创建。</span>
    <span class="token comment">//value             配置yml文件中的属性名</span>
    <span class="token comment">//matchIfMissing    设置值,默认为false及默认不创建bean</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.34,words:403},t:"SpringBootDemo",y:"a"}}],["/study/java/spring-boot.html",{loader:()=>C(()=>import("./spring-boot.html-6t30Zudn.js"),[]),meta:{d:1657369302e3,e:`
<h2>介绍🎈</h2>
<ul>
<li>2019/7</li>
<li>一些常用SpringBoot用法</li>
</ul>
<h2>必读指南</h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>标题后面带 ! 的内容将可能不在此更新(但不代表不能用)，</li>
<li>改从 JavaOrm 插件提供的模板进行更新</li>
<li><a href="/plugins/java-orm.html" target="_blank">JavaOrm</a></li>
</ul>
</div>`,r:{minutes:6.58,words:1974},t:"SpringBoot",y:"a"}}],["/study/java/spring-cloud-alibaba.html",{loader:()=>C(()=>import("./spring-cloud-alibaba.html-DCareMW0.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍🎁</h2>
<ul>
<li>2022/5/10</li>
<li>SpringCloudAlibaba 系列</li>
</ul>
<h2>项目🌅</h2>
<ul>
<li><a href="https://gitee.com/licheng1013/spring-cloud-alibaba" target="_blank" rel="noopener noreferrer">https://gitee.com/licheng1013/spring-cloud-alibaba</a></li>
</ul>
<h2>Nacos🌈</h2>
<ul>
<li>注册中心</li>
<li><a href="https://nacos.io/zh-cn/index.html" target="_blank" rel="noopener noreferrer">https://nacos.io/zh-cn/index.html</a></li>
<li><a href="/blog-doc/linux/docker.html#nacos" target="_blank">Docker单机部署</a></li>
</ul>`,r:{minutes:.2,words:60},t:"SpringCloudAlibaba",y:"a"}}],["/study/java/spring-cloud.html",{loader:()=>C(()=>import("./spring-cloud.html-BzYcWz6D.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍🐯</h2>
<ul>
<li>待补充</li>
</ul>
`,r:{minutes:.02,words:7},t:"SpringCloud",y:"a"}}],["/study/java/transaction.html",{loader:()=>C(()=>import("./transaction.html-BYU_4Df8.js"),[]),meta:{d:1654852665e3,e:`
<h2>介绍🍒</h2>
<ul>
<li>一组事务的特性ACID</li>
<li>分别是，原子性，隔离性，持久性，一致性</li>
<li>原子：一组操作要么全执行成功，要么不执行</li>
<li>隔离：事务的隔离级别，读未提交，读已提交，可重复读，串形化</li>
<li>持久：从内存持久到硬盘上</li>
<li>一致：执行结果和预期的要一致，先来先执行事务</li>
</ul>
<h2>单机事务🐷</h2>
<ul>
<li>@Transaction 事务注解解决</li>
<li>必须在public上使用，否则会失效，</li>
<li>属性</li>
<li>timeout 超时时间                默认不设置超时时间</li>
<li>rollbackFor 回滚异常类型,        默认异常就回滚</li>
<li>noRollbackFor 不回滚的异常类型,   默认不设置</li>
</ul>`,r:{minutes:.6,words:181},t:"Transaction",y:"a"}}],["/study/linux/",{loader:()=>C(()=>import("./index.html-_8X3EFSe.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Linux",i:"linux",y:"a"}}],["/study/linux/docker.html",{loader:()=>C(()=>import("./docker.html-CMCMoc-W.js"),[]),meta:{d:1655614514e3,e:`
<h2>介绍🐸</h2>
<ul>
<li>2019</li>
<li>一种容器化技术,更快更方便的部署</li>
</ul>
<h2>安装✋</h2>
<ul>
<li>
<p>这个安装方式貌似无法使用镜像源 <s>- ubuntu20: snap install docker</s></p>
</li>
<li>
<p>docker</p>
</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">docker</span> <span class="token parameter variable">--mirror</span> Aliyun
</code></pre></div>`,r:{minutes:3.31,words:994},t:"Docker",y:"a"}}],["/study/linux/git.html",{loader:()=>C(()=>import("./git.html-CEeBBrby.js"),[]),meta:{d:1654399479e3,e:`
<h2>介绍🏧</h2>
<ul>
<li>2018</li>
<li>学习git的使用</li>
</ul>
<h2>下载地址💞</h2>
<ul>
<li><a href="/util/small-util.html" target="_blank">下载地址</a></li>
</ul>
<h2>基本命令💒</h2>
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
</table>`,r:{minutes:1.41,words:422},t:"Git使用",y:"a"}}],["/study/linux/linux.html",{loader:()=>C(()=>import("./linux.html-Bo44hwhI.js"),[]),meta:{d:1655798572e3,e:`
<ul>
<li>2018</li>
</ul>
<h2>Shell脚本👻</h2>
<h2>Ubuntu🐟</h2>
<ul>
<li>允许root远程登入</li>
<li>vim /etc/ssh/sshd_config</li>
<li>Authentication 下面添加 <strong>PermitRootLogin yes</strong></li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Authentication:</span>

<span class="token comment">#LoginGraceTime 2m</span>
<span class="token comment">#PermitRootLogin prohibit-password</span>
PermitRootLogin <span class="token function">yes</span>
</code></pre></div>`,r:{minutes:1.48,words:443},t:"Linux",y:"a"}}],["/study/linux/mysql.html",{loader:()=>C(()=>import("./mysql.html-CZKiXPr9.js"),[]),meta:{d:1658066376e3,e:`
<h2>安装</h2>
<h3>yum包</h3>
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
<h2>介绍💢</h2>
<ul>
<li>2019</li>
<li>mysql 采用c或c++写的</li>
</ul>
<h2>Sql强化</h2>
<h3>计算排名sql</h3>`,r:{minutes:4.57,words:1370},t:"Mysql",y:"a"}}],["/study/linux/nginx.html",{loader:()=>C(()=>import("./nginx.html-CPeRCWVX.js"),[]),meta:{d:1657693801e3,e:`
<ul>
<li>2019</li>
</ul>
<h2>配置😎</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
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
</code></pre></div>`,r:{minutes:.4,words:119},t:"Nginx",y:"a"}}],["/study/linux/server.html",{loader:()=>C(()=>import("./server.html-D0PYvcTH.js"),[]),meta:{d:1655884192e3,e:`
<ul>
<li>2022/6/22</li>
</ul>
<h2>通信协议🐔</h2>
<ul>
<li>基于 Socket 来实现</li>
<li>Socket是最原始的一种链接方式，负责从 a 链接到 b</li>
<li>此层面需要自己去定义数据的开头和结尾并且设置断开时间</li>
</ul>
<h3>RPC🍅</h3>
<ul>
<li>远程调用</li>
<li>内部的实现可以自由定义数据的传输接受方式</li>
<li>性能好，但数据的传输格式的自己定义</li>
</ul>
<h3>HTTP🍒</h3>
<ul>
<li>由一组定义好的协议进行数据的传输</li>
<li>但报文太多影响效率</li>
</ul>`,r:{minutes:.43,words:129},t:"网络",y:"a"}}],["/study/linux/shell.html",{loader:()=>C(()=>import("./shell.html-DOxwh8Up.js"),[]),meta:{d:1657092715e3,e:`
<h2>介绍💢</h2>
<ul>
<li>2018</li>
<li>shell脚本教程</li>
</ul>
<h2>开始🍎</h2>
<ul>
<li>创建一个shell脚本</li>
<li>vim test.sh</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 上面用于定义执行的sh，需要使用./test.sh才能以bash执行脚本</span>
<span class="token comment"># 如果是 sh test.sh 那么只会是普通的shell进行执行 if [[ $cmd == "q" ]] 不能在sh下执行</span>

<span class="token comment"># if语法  或 || 于 &amp;&amp; </span>
<span class="token assign-left variable">cmd</span><span class="token operator">=</span><span class="token string">"test"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$cmd</span> <span class="token operator">==</span> <span class="token string">"test"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  
<span class="token keyword">fi</span>
</code></pre></div>`,r:{minutes:.68,words:203},t:"Shell",y:"a"}}],["/study/try/",{loader:()=>C(()=>import("./index.html-Cr6PZ3HN.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Try",i:"support",y:"a"}}],["/study/try/antlr.html",{loader:()=>C(()=>import("./antlr.html-CMKRbD4M.js"),[]),meta:{d:1668737652e3,e:`
<h2>介绍🍇</h2>
<ul>
<li>2022/11/18</li>
<li>版本 antlr4</li>
</ul>
<h2>符号作用🍎</h2>
<h2>示例🌟</h2>
<h3>JSON💞</h3>
<div class="language-antlr" data-ext="antlr" data-title="antlr"><pre class="language-antlr"><code>grammar JSON;
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
</code></pre></div>`,r:{minutes:.5,words:151},t:"Antlr",y:"a"}}],["/study/try/flutter.html",{loader:()=>C(()=>import("./flutter.html-D89PXEoC.js"),[]),meta:{d:1657369621e3,e:`
<h2>介绍💔</h2>
<ul>
<li><a href="https://flutter.cn/" target="_blank" rel="noopener noreferrer">https://flutter.cn</a></li>
</ul>
<h2>镜像💔</h2>
<ul>
<li>必做配置否则下载卡死</li>
<li>新建或修改 $HEOM$/.gradle/init.gradle</li>
<li>用户家目录下创建</li>
<li>配置内容</li>
</ul>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>def repoConfig = {
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

</code></pre></div>`,r:{minutes:3.03,words:909},t:"Flutter",y:"a"}}],["/study/try/python.html",{loader:()=>C(()=>import("./python.html-B9nJNxCg.js"),[]),meta:{d:1658285202e3,e:`
<h2>介绍😎</h2>
<ul>
<li>2018</li>
<li>入门语言，学了又弃，弃而又学</li>
<li>下载：[https://registry.npmmirror.com/binary.html?path=python/](https://registry.npmmirror.com/binary.html?path=python/</li>
</ul>
<h2>pip镜像设置✋</h2>
<ul>
<li>pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/</li>
</ul>
<h2>Game🎁</h2>`,r:{minutes:4.87,words:1460},t:"Python",y:"a"}}],["/study/try/rust.html",{loader:()=>C(()=>import("./rust.html-B1NCmP_I.js"),[]),meta:{d:1663080627e3,e:`
<h2>镜像源🍊</h2>
<ul>
<li><a href="https://rsproxy.cn/" target="_blank" rel="noopener noreferrer">https://rsproxy.cn/</a></li>
</ul>
<h2>描述🍑</h2>
<ul>
<li>无聊又去学一门新语言怎么样。</li>
<li>与其他语言不同的是，rust的语法相当的陌生。</li>
</ul>
<h2>介绍🐯</h2>
<ul>
<li>官网 <a href="https://www.rust-lang.org/zh-CN/learn" target="_blank" rel="noopener noreferrer">https://www.rust-lang.org/zh-CN/learn</a></li>
<li>文档 <a href="https://kaisery.github.io/trpl-zh-cn/ch03-01-variables-and-mutability.html" target="_blank" rel="noopener noreferrer">中文文档</a></li>
<li>教程 <a href="https://rustwiki.org/zh-CN/rust-by-example/index.html" target="_blank" rel="noopener noreferrer">https://rustwiki.org/zh-CN/rust-by-example/index.html</a></li>
<li>学习 <a href="https://github.com/licheng1013/rust-study" target="_blank" rel="noopener noreferrer">https://github.com/licheng1013/rust-study</a></li>
</ul>`,r:{minutes:1.72,words:515},t:"Rust",y:"a"}}],["/study/web/",{loader:()=>C(()=>import("./index.html-QApLyGkE.js"),[]),meta:{d:1671160035e3,r:{minutes:.02,words:6},t:"Web",i:"leaf",y:"a"}}],["/study/web/axios.html",{loader:()=>C(()=>import("./axios.html-DT9W0ORv.js"),[]),meta:{d:1657691221e3,e:`
<ul>
<li>2022/7/12</li>
</ul>
<h2>介绍💞</h2>
<ul>
<li>2019</li>
</ul>
<h2>Vue3插件玩法🍒</h2>
<ul>
<li>npm install --save axios vue-axios</li>
<li><a href="http://www.axios-js.com/zh-cn/docs/vue-axios.html" target="_blank" rel="noopener noreferrer">http://www.axios-js.com/zh-cn/docs/vue-axios.html</a></li>
<li>使用</li>
</ul>`,r:{minutes:.98,words:294},t:"Axios",y:"a"}}],["/study/web/css.html",{loader:()=>C(()=>import("./css.html-JvGkCgoW.js"),[]),meta:{d:1671160035e3,e:`
<h2>介绍</h2>
<ul>
<li>对常用css配置进行收集</li>
<li>Css是对Html进行装饰</li>
<li>如果说Html是骨架那么Css就是衣服。</li>
<li>想想一个Cat(猫)没有他的毛发会是啥样。</li>
</ul>
<h2>Css配置🪲</h2>
<ul>
<li>每个Vue项目基本必须配置的样式</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>请使用div进行布局不要element-ui的组件布局！</p>
</div>
<ul>
<li>项目默认css配置</li>
</ul>`,r:{minutes:.97,words:290},t:"Css",y:"a"}}],["/study/web/electron.html",{loader:()=>C(()=>import("./electron.html-DzwtQYMq.js"),[]),meta:{d:1656920535e3,e:`
<h2>介绍💢</h2>
<ul>
<li>桌面跨平台框架</li>
<li><a href="https://www.electronjs.org/zh/docs/latest" target="_blank" rel="noopener noreferrer">ElectronJs</a></li>
<li>打包很大。</li>
</ul>
<h2>安装🍇</h2>
<ul>
<li>依赖 npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/</li>
<li>创建vue+vite项目： ts + npm create electron-vite</li>
</ul>`,r:{minutes:.95,words:286},t:"Electron",y:"a"}}],["/study/web/node.html",{loader:()=>C(()=>import("./node.html-Df6d5dKj.js"),[]),meta:{d:165448599e4,e:`
<ul>
<li>2022/7/13</li>
</ul>
<h2>介绍😃</h2>
<ul>
<li>安装</li>
<li>Ubuntu: sudo snap install node <a href="https://github.com/nodejs/snap" target="_blank" rel="noopener noreferrer">https://github.com/nodejs/snap</a></li>
<li>Windows: <a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></li>
</ul>`,r:{minutes:1.33,words:398},t:"Node",y:"a"}}],["/study/web/vite.html",{loader:()=>C(()=>import("./vite.html-D0rmdZ-w.js"),[]),meta:{d:1659747522e3,e:`
<h2>介绍👊</h2>
<ul>
<li>2022/8/6</li>
<li>官网</li>
<li><a href="https://vitejs.cn/" target="_blank" rel="noopener noreferrer">https://vitejs.cn/</a></li>
</ul>
<h2>配置相对路径🍅</h2>
<ul>
<li>electron 里面需要引入vue文件需要加上.vue</li>
<li>vite.config.js</li>
</ul>
<div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
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

</code></pre></div>`,r:{minutes:.39,words:116},t:"Vite",y:"a"}}],["/study/web/vue.html",{loader:()=>C(()=>import("./vue.html-jXKPQkji.js"),[]),meta:{d:1657335182e3,e:`
<h2>介绍💞</h2>
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
<h2>教程🐟</h2>
`,r:{minutes:1.81,words:542},t:"Vue",y:"a"}}],["/study/game/design/chess.html",{loader:()=>C(()=>import("./chess.html-CejmzvcH.js"),[]),meta:{d:1672821313e3,e:`
<h2>棋牌</h2>
<ul>
<li><a href="https://www.zhihu.com/question/490679283" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/490679283</a></li>
</ul>
<h2>伪代码</h2>
`,r:{minutes:.03,words:10},t:"Chess",y:"a"}}],["/study/java/design-mode/design-mode.html",{loader:()=>C(()=>import("./design-mode.html-cmZhJm77.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍</h2>
<ul>
<li>待写</li>
</ul>
`,r:{minutes:.03,words:8},t:"设计模式",y:"a"}}],["/study/java/design-mode/proxy.html",{loader:()=>C(()=>import("./proxy.html-Dnx9WfdN.js"),[]),meta:{d:1654698354e3,e:`
<ul>
<li>增加对象的行为</li>
<li>jdk代理，cglib代理</li>
</ul>
<h2>jdk代理</h2>
<ul>
<li>只代理接口,代理实现继承了 Proxy 类，所以就不能使用子类去创建代理了</li>
</ul>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
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
</code></pre></div>`,r:{minutes:.49,words:148},t:"代理模式",y:"a"}}],["/404.html",{loader:()=>C(()=>import("./404.html-Bonide-K.js"),[]),meta:{t:""}}],["/study/game/design/",{loader:()=>C(()=>import("./index.html-D4sodG5g.js"),[]),meta:{t:"Design"}}],["/study/java/design-mode/",{loader:()=>C(()=>import("./index.html-B01yIzYs.js"),[]),meta:{t:"Design Mode"}}],["/category/",{loader:()=>C(()=>import("./index.html-CDxPH-DH.js"),[]),meta:{t:"分类",I:!1}}],["/en/category/",{loader:()=>C(()=>import("./index.html-D0oGsMS9.js"),[]),meta:{t:"Category",I:!1}}],["/tag/",{loader:()=>C(()=>import("./index.html-LK5D7G68.js"),[]),meta:{t:"标签",I:!1}}],["/en/tag/",{loader:()=>C(()=>import("./index.html-BMzQ2_V0.js"),[]),meta:{t:"Tag",I:!1}}],["/article/",{loader:()=>C(()=>import("./index.html-C_n_1jSu.js"),[]),meta:{t:"文章",I:!1}}],["/en/article/",{loader:()=>C(()=>import("./index.html-BXZIrXLU.js"),[]),meta:{t:"Articles",I:!1}}],["/star/",{loader:()=>C(()=>import("./index.html-DmX2Xy99.js"),[]),meta:{t:"星标",I:!1}}],["/en/star/",{loader:()=>C(()=>import("./index.html-DIIrRhTz.js"),[]),meta:{t:"Star",I:!1}}],["/timeline/",{loader:()=>C(()=>import("./index.html-a8pm2duP.js"),[]),meta:{t:"时间轴",I:!1}}],["/en/timeline/",{loader:()=>C(()=>import("./index.html-BZKnX02N.js"),[]),meta:{t:"Timeline",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gt=typeof document<"u";function qh(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const fn=Object.assign;function Aa(n,e){const t={};for(const s in e){const a=e[s];t[s]=pe(a)?a.map(n):n(a)}return t}const Kt=()=>{},pe=Array.isArray,Ur=/#/g,Wh=/&/g,Uh=/\//g,Gh=/=/g,Kh=/\?/g,Gr=/\+/g,Jh=/%5B/g,Yh=/%5D/g,Kr=/%5E/g,Xh=/%60/g,Jr=/%7B/g,Qh=/%7C/g,Yr=/%7D/g,Zh=/%20/g;function jl(n){return encodeURI(""+n).replace(Qh,"|").replace(Jh,"[").replace(Yh,"]")}function n2(n){return jl(n).replace(Jr,"{").replace(Yr,"}").replace(Kr,"^")}function Ya(n){return jl(n).replace(Gr,"%2B").replace(Zh,"+").replace(Ur,"%23").replace(Wh,"%26").replace(Xh,"`").replace(Jr,"{").replace(Yr,"}").replace(Kr,"^")}function e2(n){return Ya(n).replace(Gh,"%3D")}function t2(n){return jl(n).replace(Ur,"%23").replace(Kh,"%3F")}function s2(n){return n==null?"":t2(n).replace(Uh,"%2F")}function ss(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const a2=/\/$/,l2=n=>n.replace(a2,"");function Pa(n,e,t="/"){let s,a={},l="",o="";const c=e.indexOf("#");let r=e.indexOf("?");return c<r&&c>=0&&(r=-1),r>-1&&(s=e.slice(0,r),l=e.slice(r+1,c>-1?c:e.length),a=n(l)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=c2(s??e,t),{fullPath:s+(l&&"?")+l+o,path:s,query:a,hash:ss(o)}}function o2(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Yo(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function i2(n,e,t){const s=e.matched.length-1,a=t.matched.length-1;return s>-1&&s===a&&Tt(e.matched[s],t.matched[a])&&Xr(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Tt(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Xr(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!r2(n[t],e[t]))return!1;return!0}function r2(n,e){return pe(n)?Xo(n,e):pe(e)?Xo(e,n):n===e}function Xo(n,e){return pe(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function c2(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let l=t.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+s.slice(o).join("/")}var as;(function(n){n.pop="pop",n.push="push"})(as||(as={}));var Jt;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Jt||(Jt={}));function u2(n){if(!n)if(gt){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),l2(n)}const p2=/^[^#]+#/;function d2(n,e){return n.replace(p2,"#")+e}function h2(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function f2(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;e=h2(a,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qo(n,e){return(history.state?history.state.position-e:-1)+n}const Xa=new Map;function g2(n,e){Xa.set(n,e)}function m2(n){const e=Xa.get(n);return Xa.delete(n),e}let k2=()=>location.protocol+"//"+location.host;function Qr(n,e){const{pathname:t,search:s,hash:a}=e,l=n.indexOf("#");if(l>-1){let c=a.includes(n.slice(l))?n.slice(l).length:1,r=a.slice(c);return r[0]!=="/"&&(r="/"+r),Yo(r,"")}return Yo(t,n)+s+a}function v2(n,e,t,s){let a=[],l=[],o=null;const c=({state:h})=>{const f=Qr(n,location),k=t.value,_=e.value;let w=0;if(h){if(t.value=f,e.value=h,o&&o===k){o=null;return}w=_?h.position-_.position:0}else s(f);a.forEach(y=>{y(t.value,k,{delta:w,type:as.pop,direction:w?w>0?Jt.forward:Jt.back:Jt.unknown})})};function r(){o=t.value}function u(h){a.push(h);const f=()=>{const k=a.indexOf(h);k>-1&&a.splice(k,1)};return l.push(f),f}function p(){const{history:h}=window;h.state&&h.replaceState(fn({},h.state,{scroll:ua()}),"")}function d(){for(const h of l)h();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:r,listen:u,destroy:d}}function Zo(n,e,t,s=!1,a=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:a?ua():null}}function y2(n){const{history:e,location:t}=window,s={value:Qr(n,t)},a={value:e.state};a.value||l(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function l(r,u,p){const d=n.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+r:k2()+n+r;try{e[p?"replaceState":"pushState"](u,"",h),a.value=u}catch(f){console.error(f),t[p?"replace":"assign"](h)}}function o(r,u){const p=fn({},e.state,Zo(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,p,!0),s.value=r}function c(r,u){const p=fn({},a.value,e.state,{forward:r,scroll:ua()});l(p.current,p,!0);const d=fn({},Zo(s.value,r,null),{position:p.position+1},u);l(r,d,!1),s.value=r}return{location:s,state:a,push:c,replace:o}}function b2(n){n=u2(n);const e=y2(n),t=v2(n,e.state,e.location,e.replace);function s(l,o=!0){o||t.pauseListeners(),history.go(l)}const a=fn({location:"",base:n,go:s,createHref:d2.bind(null,n)},e,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}function w2(n){return typeof n=="string"||n&&typeof n=="object"}function Zr(n){return typeof n=="string"||typeof n=="symbol"}const Ce={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nc=Symbol("");var ni;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ni||(ni={}));function Ct(n,e){return fn(new Error,{type:n,[nc]:!0},e)}function Le(n,e){return n instanceof Error&&nc in n&&(e==null||!!(n.type&e))}const ei="[^/]+?",_2={sensitive:!1,strict:!1,start:!0,end:!0},x2=/[.+*?^${}()[\]/\\]/g;function E2(n,e){const t=fn({},_2,e),s=[];let a=t.start?"^":"";const l=[];for(const u of n){const p=u.length?[]:[90];t.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const h=u[d];let f=40+(t.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(x2,"\\$&"),f+=40;else if(h.type===1){const{value:k,repeatable:_,optional:w,regexp:y}=h;l.push({name:k,repeatable:_,optional:w});const E=y||ei;if(E!==ei){f+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${k}" (${E}): `+T.message)}}let v=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(v=w&&u.length<2?`(?:/${v})`:"/"+v),w&&(v+="?"),a+=v,f+=20,w&&(f+=-8),_&&(f+=-20),E===".*"&&(f+=-50)}p.push(f)}s.push(p)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const o=new RegExp(a,t.sensitive?"":"i");function c(u){const p=u.match(o),d={};if(!p)return null;for(let h=1;h<p.length;h++){const f=p[h]||"",k=l[h-1];d[k.name]=f&&k.repeatable?f.split("/"):f}return d}function r(u){let p="",d=!1;for(const h of n){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const f of h)if(f.type===0)p+=f.value;else if(f.type===1){const{value:k,repeatable:_,optional:w}=f,y=k in u?u[k]:"";if(pe(y)&&!_)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const E=pe(y)?y.join("/"):y;if(!E)if(w)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);p+=E}}return p||"/"}return{re:o,score:s,keys:l,parse:c,stringify:r}}function L2(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function T2(n,e){let t=0;const s=n.score,a=e.score;for(;t<s.length&&t<a.length;){const l=L2(s[t],a[t]);if(l)return l;t++}if(Math.abs(a.length-s.length)===1){if(ti(s))return 1;if(ti(a))return-1}return a.length-s.length}function ti(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const C2={type:0,value:""},S2=/[a-zA-Z0-9_]/;function I2(n){if(!n)return[[]];if(n==="/")return[[C2]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=0,s=t;const a=[];let l;function o(){l&&a.push(l),l=[]}let c=0,r,u="",p="";function d(){u&&(t===0?l.push({type:0,value:u}):t===1||t===2||t===3?(l.length>1&&(r==="*"||r==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=r}for(;c<n.length;){if(r=n[c++],r==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:r==="/"?(u&&d(),o()):r===":"?(d(),t=1):h();break;case 4:h(),t=s;break;case 1:r==="("?t=2:S2.test(r)?h():(d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--);break;case 2:r===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+r:t=3:p+=r;break;case 3:d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--,p="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),a}function A2(n,e,t){const s=E2(I2(n.path),t),a=fn(s,{record:n,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function P2(n,e){const t=[],s=new Map;e=li({strict:!1,end:!0,sensitive:!1},e);function a(p){return s.get(p)}function l(p,d,h){const f=!h,k=D2(p);k.aliasOf=h&&h.record;const _=li(e,p),w=[k];if("alias"in p){const v=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of v)w.push(fn({},k,{components:h?h.record.components:k.components,path:T,aliasOf:h?h.record:k}))}let y,E;for(const v of w){const{path:T}=v;if(d&&T[0]!=="/"){const j=d.record.path,L=j[j.length-1]==="/"?"":"/";v.path=d.record.path+(T&&L+T)}if(y=A2(v,d,_),h?h.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),f&&p.name&&!ai(y)&&o(p.name)),k.children){const j=k.children;for(let L=0;L<j.length;L++)l(j[L],y,h&&h.children[L])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&r(y)}return E?()=>{o(E)}:Kt}function o(p){if(Zr(p)){const d=s.get(p);d&&(s.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return t}function r(p){let d=0;for(;d<t.length&&T2(p,t[d])>=0&&(p.record.path!==t[d].record.path||!ec(p,t[d]));)d++;t.splice(d,0,p),p.record.name&&!ai(p)&&s.set(p.record.name,p)}function u(p,d){let h,f={},k,_;if("name"in p&&p.name){if(h=s.get(p.name),!h)throw Ct(1,{location:p});_=h.record.name,f=fn(si(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),p.params&&si(p.params,h.keys.map(E=>E.name))),k=h.stringify(f)}else if(p.path!=null)k=p.path,h=t.find(E=>E.re.test(k)),h&&(f=h.parse(k),_=h.record.name);else{if(h=d.name?s.get(d.name):t.find(E=>E.re.test(d.path)),!h)throw Ct(1,{location:p,currentLocation:d});_=h.record.name,f=fn({},d.params,p.params),k=h.stringify(f)}const w=[];let y=h;for(;y;)w.unshift(y.record),y=y.parent;return{name:_,path:k,params:f,matched:w,meta:O2(w)}}return n.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:a}}function si(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function D2(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:R2(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function R2(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function ai(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function O2(n){return n.reduce((e,t)=>fn(e,t.meta),{})}function li(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function ec(n,e){return e.children.some(t=>t===n||ec(n,t))}function M2(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let a=0;a<s.length;++a){const l=s[a].replace(Gr," "),o=l.indexOf("="),c=ss(o<0?l:l.slice(0,o)),r=o<0?null:ss(l.slice(o+1));if(c in e){let u=e[c];pe(u)||(u=e[c]=[u]),u.push(r)}else e[c]=r}return e}function oi(n){let e="";for(let t in n){const s=n[t];if(t=e2(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(pe(s)?s.map(l=>l&&Ya(l)):[s&&Ya(s)]).forEach(l=>{l!==void 0&&(e+=(e.length?"&":"")+t,l!=null&&(e+="="+l))})}return e}function j2(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=pe(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const F2=Symbol(""),ii=Symbol(""),pa=Symbol(""),Fl=Symbol(""),Qa=Symbol("");function Ft(){let n=[];function e(s){return n.push(s),()=>{const a=n.indexOf(s);a>-1&&n.splice(a,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ve(n,e,t,s,a,l=o=>o()){const o=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((c,r)=>{const u=h=>{h===!1?r(Ct(4,{from:t,to:e})):h instanceof Error?r(h):w2(h)?r(Ct(2,{from:e,to:h})):(o&&s.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),c())},p=l(()=>n.call(s&&s.instances[a],e,t,u));let d=Promise.resolve(p);n.length<3&&(d=d.then(u)),d.catch(h=>r(h))})}function Da(n,e,t,s,a=l=>l()){const l=[];for(const o of n)for(const c in o.components){let r=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if($2(r)){const p=(r.__vccOpts||r)[e];p&&l.push(Ve(p,t,s,o,c,a))}else{let u=r();l.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const d=qh(p)?p.default:p;o.components[c]=d;const f=(d.__vccOpts||d)[e];return f&&Ve(f,t,s,o,c,a)()}))}}return l}function $2(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ri(n){const e=yn(pa),t=yn(Fl),s=b(()=>e.resolve(ie(n.to))),a=b(()=>{const{matched:r}=s.value,{length:u}=r,p=r[u-1],d=t.matched;if(!p||!d.length)return-1;const h=d.findIndex(Tt.bind(null,p));if(h>-1)return h;const f=ci(r[u-2]);return u>1&&ci(p)===f&&d[d.length-1].path!==f?d.findIndex(Tt.bind(null,r[u-2])):h}),l=b(()=>a.value>-1&&B2(t.params,s.value.params)),o=b(()=>a.value>-1&&a.value===t.matched.length-1&&Xr(t.params,s.value.params));function c(r={}){return V2(r)?e[ie(n.replace)?"replace":"push"](ie(n.to)).catch(Kt):Promise.resolve()}return{route:s,href:b(()=>s.value.href),isActive:l,isExactActive:o,navigate:c}}const N2=$({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ri,setup(n,{slots:e}){const t=ds(ri(n)),{options:s}=yn(pa),a=b(()=>({[ui(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[ui(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const l=e.default&&e.default(t);return n.custom?l:i("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},l)}}}),H2=N2;function V2(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function B2(n,e){for(const t in e){const s=e[t],a=n[t];if(typeof s=="string"){if(s!==a)return!1}else if(!pe(a)||a.length!==s.length||s.some((l,o)=>l!==a[o]))return!1}return!0}function ci(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ui=(n,e,t)=>n??e??t,z2=$({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=yn(Qa),a=b(()=>n.route||s.value),l=yn(ii,0),o=b(()=>{let u=ie(l);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),c=b(()=>a.value.matched[o.value]);ue(ii,b(()=>o.value+1)),ue(F2,c),ue(Qa,a);const r=J();return dn(()=>[r.value,c.value,n.name],([u,p,d],[h,f,k])=>{p&&(p.instances[d]=u,f&&f!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=f.leaveGuards),p.updateGuards.size||(p.updateGuards=f.updateGuards))),u&&p&&(!f||!Tt(p,f)||!h)&&(p.enterCallbacks[d]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,p=n.name,d=c.value,h=d&&d.components[p];if(!h)return pi(t.default,{Component:h,route:u});const f=d.props[p],k=f?f===!0?u.params:typeof f=="function"?f(u):f:null,w=i(h,fn({},k,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[p]=null)},ref:r}));return pi(t.default,{Component:w,route:u})||w}}});function pi(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const q2=z2;function W2(n){const e=P2(n.routes,n),t=n.parseQuery||M2,s=n.stringifyQuery||oi,a=n.history,l=Ft(),o=Ft(),c=Ft(),r=jn(Ce);let u=Ce;gt&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Aa.bind(null,I=>""+I),d=Aa.bind(null,s2),h=Aa.bind(null,ss);function f(I,B){let H,W;return Zr(I)?(H=e.getRecordMatcher(I),W=B):W=I,e.addRoute(W,H)}function k(I){const B=e.getRecordMatcher(I);B&&e.removeRoute(B)}function _(){return e.getRoutes().map(I=>I.record)}function w(I){return!!e.getRecordMatcher(I)}function y(I,B){if(B=fn({},B||r.value),typeof I=="string"){const m=Pa(t,I,B.path),x=e.resolve({path:m.path},B),A=a.createHref(m.fullPath);return fn(m,x,{params:h(x.params),hash:ss(m.hash),redirectedFrom:void 0,href:A})}let H;if(I.path!=null)H=fn({},I,{path:Pa(t,I.path,B.path).path});else{const m=fn({},I.params);for(const x in m)m[x]==null&&delete m[x];H=fn({},I,{params:d(m)}),B.params=d(B.params)}const W=e.resolve(H,B),hn=I.hash||"";W.params=p(h(W.params));const wn=o2(s,fn({},I,{hash:n2(hn),path:W.path})),g=a.createHref(wn);return fn({fullPath:wn,hash:hn,query:s===oi?j2(I.query):I.query||{}},W,{redirectedFrom:void 0,href:g})}function E(I){return typeof I=="string"?Pa(t,I,r.value.path):fn({},I)}function v(I,B){if(u!==I)return Ct(8,{from:B,to:I})}function T(I){return q(I)}function j(I){return T(fn(E(I),{replace:!0}))}function L(I){const B=I.matched[I.matched.length-1];if(B&&B.redirect){const{redirect:H}=B;let W=typeof H=="function"?H(I):H;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=E(W):{path:W},W.params={}),fn({query:I.query,hash:I.hash,params:W.path!=null?{}:I.params},W)}}function q(I,B){const H=u=y(I),W=r.value,hn=I.state,wn=I.force,g=I.replace===!0,m=L(H);if(m)return q(fn(E(m),{state:typeof m=="object"?fn({},hn,m.state):hn,force:wn,replace:g}),B||H);const x=H;x.redirectedFrom=B;let A;return!wn&&i2(s,W,H)&&(A=Ct(16,{to:x,from:W}),fe(W,W,!0,!1)),(A?Promise.resolve(A):D(x,W)).catch(S=>Le(S)?Le(S,2)?S:Pe(S):U(S,x,W)).then(S=>{if(S){if(Le(S,2))return q(fn({replace:g},E(S.to),{state:typeof S.to=="object"?fn({},hn,S.to.state):hn,force:wn}),B||x)}else S=M(x,W,!0,g,hn);return X(x,W,S),S})}function N(I,B){const H=v(I,B);return H?Promise.reject(H):Promise.resolve()}function Y(I){const B=dt.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(I):I()}function D(I,B){let H;const[W,hn,wn]=U2(I,B);H=Da(W.reverse(),"beforeRouteLeave",I,B);for(const m of W)m.leaveGuards.forEach(x=>{H.push(Ve(x,I,B))});const g=N.bind(null,I,B);return H.push(g),Fn(H).then(()=>{H=[];for(const m of l.list())H.push(Ve(m,I,B));return H.push(g),Fn(H)}).then(()=>{H=Da(hn,"beforeRouteUpdate",I,B);for(const m of hn)m.updateGuards.forEach(x=>{H.push(Ve(x,I,B))});return H.push(g),Fn(H)}).then(()=>{H=[];for(const m of wn)if(m.beforeEnter)if(pe(m.beforeEnter))for(const x of m.beforeEnter)H.push(Ve(x,I,B));else H.push(Ve(m.beforeEnter,I,B));return H.push(g),Fn(H)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),H=Da(wn,"beforeRouteEnter",I,B,Y),H.push(g),Fn(H))).then(()=>{H=[];for(const m of o.list())H.push(Ve(m,I,B));return H.push(g),Fn(H)}).catch(m=>Le(m,8)?m:Promise.reject(m))}function X(I,B,H){c.list().forEach(W=>Y(()=>W(I,B,H)))}function M(I,B,H,W,hn){const wn=v(I,B);if(wn)return wn;const g=B===Ce,m=gt?history.state:{};H&&(W||g?a.replace(I.fullPath,fn({scroll:g&&m&&m.scroll},hn)):a.push(I.fullPath,hn)),r.value=I,fe(I,B,H,g),Pe()}let nn;function Tn(){nn||(nn=a.listen((I,B,H)=>{if(!Is.listening)return;const W=y(I),hn=L(W);if(hn){q(fn(hn,{replace:!0}),W).catch(Kt);return}u=W;const wn=r.value;gt&&g2(Qo(wn.fullPath,H.delta),ua()),D(W,wn).catch(g=>Le(g,12)?g:Le(g,2)?(q(g.to,W).then(m=>{Le(m,20)&&!H.delta&&H.type===as.pop&&a.go(-1,!1)}).catch(Kt),Promise.reject()):(H.delta&&a.go(-H.delta,!1),U(g,W,wn))).then(g=>{g=g||M(W,wn,!1),g&&(H.delta&&!Le(g,8)?a.go(-H.delta,!1):H.type===as.pop&&Le(g,20)&&a.go(-1,!1)),X(W,wn,g)}).catch(Kt)}))}let Cn=Ft(),G=Ft(),sn;function U(I,B,H){Pe(I);const W=G.list();return W.length?W.forEach(hn=>hn(I,B,H)):console.error(I),Promise.reject(I)}function ae(){return sn&&r.value!==Ce?Promise.resolve():new Promise((I,B)=>{Cn.add([I,B])})}function Pe(I){return sn||(sn=!I,Tn(),Cn.list().forEach(([B,H])=>I?H(I):B()),Cn.reset()),I}function fe(I,B,H,W){const{scrollBehavior:hn}=n;if(!gt||!hn)return Promise.resolve();const wn=!H&&m2(Qo(I.fullPath,0))||(W||!H)&&history.state&&history.state.scroll||null;return Ge().then(()=>hn(I,B,wn)).then(g=>g&&f2(g)).catch(g=>U(g,I,B))}const zn=I=>a.go(I);let pt;const dt=new Set,Is={currentRoute:r,listening:!0,addRoute:f,removeRoute:k,hasRoute:w,getRoutes:_,resolve:y,options:n,push:T,replace:j,go:zn,back:()=>zn(-1),forward:()=>zn(1),beforeEach:l.add,beforeResolve:o.add,afterEach:c.add,onError:G.add,isReady:ae,install(I){const B=this;I.component("RouterLink",H2),I.component("RouterView",q2),I.config.globalProperties.$router=B,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ie(r)}),gt&&!pt&&r.value===Ce&&(pt=!0,T(a.location).catch(hn=>{}));const H={};for(const hn in Ce)Object.defineProperty(H,hn,{get:()=>r.value[hn],enumerable:!0});I.provide(pa,B),I.provide(Fl,nr(H)),I.provide(Qa,r);const W=I.unmount;dt.add(I),I.unmount=function(){dt.delete(I),dt.size<1&&(u=Ce,nn&&nn(),nn=null,r.value=Ce,pt=!1,sn=!1),W()}}};function Fn(I){return I.reduce((B,H)=>B.then(()=>Y(H)),Promise.resolve())}return Is}function U2(n,e){const t=[],s=[],a=[],l=Math.max(e.matched.length,n.matched.length);for(let o=0;o<l;o++){const c=e.matched[o];c&&(n.matched.find(u=>Tt(u,c))?s.push(c):t.push(c));const r=n.matched[o];r&&(e.matched.find(u=>Tt(u,r))||a.push(r))}return[t,s,a]}function Je(){return yn(pa)}function _e(){return yn(Fl)}var $l=Symbol(""),xe=()=>{const n=yn($l);if(!n)throw new Error("useClientData() is called without provider.");return n},G2=()=>xe().pageComponent,kn=()=>xe().pageData,gn=()=>xe().pageFrontmatter,K2=()=>xe().pageHead,Nl=()=>xe().pageLang,J2=()=>xe().pageLayout,he=()=>xe().routeLocale,tc=()=>xe().routes,sc=()=>xe().siteData,Dt=()=>xe().siteLocaleData,Y2=Symbol(""),Za=jn(Bh),ls=jn(zh),ac=n=>{const e=$h(n);if(ls.value[e])return e;const t=encodeURI(e);return ls.value[t]?t:Za.value[e]||Za.value[t]||e},at=n=>{const e=ac(n),t=ls.value[e]??{...ls.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...t}},da=$({name:"ClientOnly",setup(n,e){const t=J(!1);return bn(()=>{t.value=!0}),()=>{var s,a;return t.value?(a=(s=e.slots).default)==null?void 0:a.call(s):null}}}),lc=$({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=G2(),t=b(()=>{if(!n.path)return e.value;const s=at(n.path);return ad(()=>s.loader().then(({comp:a})=>a))});return()=>i(t.value)}}),Kn=(n={})=>n,En=n=>Ke(n)?n:`/${Wr(n)}`,X2=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const e=n.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},Sn=({active:n=!1,activeClass:e="route-link-active",to:t,...s},{slots:a})=>{var r;const l=Je(),o=ac(t),c=o.startsWith("#")||o.startsWith("?")?o:En(o);return i("a",{...s,class:["route-link",{[e]:n}],href:c,onClick:(u={})=>{X2(u)?l.push(t).catch():Promise.resolve()}},(r=a.default)==null?void 0:r.call(a))};Sn.displayName="RouteLink";Sn.props={active:Boolean,activeClass:String,to:String};var Q2="Layout",Z2="en-US",Qe=ds({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(n,e,t)=>{const s=vn(e.description)?e.description:t.description,a=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:s}]];return Mh(a)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||Z2,resolvePageLayout:(n,e)=>{const t=vn(n.frontmatter.layout)?n.frontmatter.layout:Q2;if(!e[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return e[t]},resolveRouteLocale:(n,e)=>Nh(n,e),resolveSiteLocaleData:(n,e)=>{var t;return{...n,...n.locales[e],head:[...((t=n.locales[e])==null?void 0:t.head)??[],...n.head??[]]}}});const n1={},bs=n=>{const e=he();return b(()=>n[e.value]??{})},e1=()=>{const n=tc();return b(()=>Object.keys(n.value))},be=(n,e)=>{var s;const t=(s=(e==null?void 0:e._instance)||ms())==null?void 0:s.appContext.components;return t?n in t||se(n)in t||ps(se(n))in t:!1},t1=n=>typeof n<"u",Ra=n=>typeof n=="number",nl=Array.isArray,St=(n,e)=>vn(n)&&n.startsWith(e),s1=(n,e)=>vn(n)&&n.endsWith(e),Rt=Object.entries,de=Object.keys,Hl=n=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},ws=n=>St(n,"/"),a1="http://.",l1=(n,e)=>{if(ws(n)||typeof e!="string")return at(n);const t=e.slice(0,e.lastIndexOf("/"));return at(new URL(`${t}/${encodeURI(n)}`,a1).pathname)},oc=n=>new Promise(e=>setTimeout(e,n));var o1=$({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=b(()=>{const s=["font-icon icon"],a=`${n.icon}`;return s.push(a),s}),t=b(()=>{const s={};return n.color&&(s.color=n.color),n.size&&(s["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),de(s).length?s:null});return()=>n.icon?i("span",{key:n.icon,class:e.value,style:t.value}):null}});const ic=({type:n="info",text:e="",vertical:t,color:s},{slots:a})=>{var l;return i("span",{class:["vp-badge",n,{diy:s}],style:{verticalAlign:t??!1,backgroundColor:s??!1}},((l=a.default)==null?void 0:l.call(a))||e)};ic.displayName="Badge";const rn=({name:n="",color:e="currentColor"},{slots:t})=>{var s;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(s=t.default)==null?void 0:s.call(t))};rn.displayName="IconBase";const rc=({size:n=48,stroke:e=4,wrapper:t=!0,height:s=2*n})=>{const a=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};rc.displayName="LoadingIcon";const cc=(n,{slots:e})=>{var t;return(t=e.default)==null?void 0:t.call(e)},i1=n=>Ke(n)?n:`https://github.com/${n}`,Vl=(n="")=>!Ke(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,uc=()=>i(rn,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));uc.displayName="GitHubIcon";const pc=()=>i(rn,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));pc.displayName="GiteeIcon";const dc=()=>i(rn,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));dc.displayName="BitbucketIcon";const hc=()=>i(rn,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));hc.displayName="SourceIcon";const r1=({link:n,type:e=Vl(n??"")})=>{if(!e)return null;const t=e.toLowerCase();return i(t==="bitbucket"?dc:t==="github"?uc:t==="gitlab"?"GitLab":t==="gitee"?pc:hc)},ha=(n,e)=>{let t=1;for(let s=0;s<n.length;s++)t+=n.charCodeAt(s),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%e};let c1=class{constructor(){this.messageElements={};const e="message-container",t=document.getElementById(e);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,t=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=e,this.containerElement.appendChild(s),this.messageElements[a]=s,t>0&&setTimeout(()=>{this.close(a)},t),a}close(e){if(e){const t=this.messageElements[e];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[e]})}else de(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const fc=/#.*$/u,u1=n=>{const e=fc.exec(n);return e?e[0]:""},di=n=>decodeURI(n).replace(fc,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),gc=(n,e)=>{if(!t1(e))return!1;const t=di(n.path),s=di(e),a=u1(e);return a?a===n.hash&&(!s||t===s):t===s};var p1=n=>Object.prototype.toString.call(n)==="[object Object]",os=n=>typeof n=="string";const mc=Array.isArray,hi=n=>p1(n)&&os(n.name),is=(n,e=!1)=>n?mc(n)?n.map(t=>os(t)?{name:t}:hi(t)?t:null).filter(t=>t!==null):os(n)?[{name:n}]:hi(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],kc=(n,e)=>{if(n){if(mc(n)&&n.every(os))return n;if(os(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},vc=n=>kc(n,"category"),yc=n=>kc(n,"tag"),d1="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture";function Bl(n,e){let t,s,a;const l=J(!0),o=()=>{l.value=!0,a()};dn(n,o,{flush:"sync"});const c=typeof e=="function"?e:e.get,r=typeof e=="function"?void 0:e.set,u=Tl((p,d)=>(s=p,a=d,{get(){return l.value&&(t=c(),l.value=!1),s(),t},set(h){r==null||r(h)}}));return Object.isExtensible(u)&&(u.trigger=o),u}function rt(n){return Bi()?(pp(n),!0):!1}function Bn(n){return typeof n=="function"?n():ie(n)}const _s=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const h1=n=>n!=null,f1=Object.prototype.toString,g1=n=>f1.call(n)==="[object Object]",It=()=>{},fi=m1();function m1(){var n,e;return _s&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function zl(n,e){function t(...s){return new Promise((a,l)=>{Promise.resolve(n(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(a).catch(l)})}return t}const bc=n=>n();function k1(n,e={}){let t,s,a=It;const l=c=>{clearTimeout(c),a(),a=It};return c=>{const r=Bn(n),u=Bn(e.maxWait);return t&&l(t),r<=0||u!==void 0&&u<=0?(s&&(l(s),s=null),Promise.resolve(c())):new Promise((p,d)=>{a=e.rejectOnCancel?d:p,u&&!s&&(s=setTimeout(()=>{t&&l(t),s=null,p(c())},u)),t=setTimeout(()=>{s&&l(s),s=null,p(c())},r)})}}function v1(...n){let e=0,t,s=!0,a=It,l,o,c,r,u;!Pn(n[0])&&typeof n[0]=="object"?{delay:o,trailing:c=!0,leading:r=!0,rejectOnCancel:u=!1}=n[0]:[o,c=!0,r=!0,u=!1]=n;const p=()=>{t&&(clearTimeout(t),t=void 0,a(),a=It)};return h=>{const f=Bn(o),k=Date.now()-e,_=()=>l=h();return p(),f<=0?(e=Date.now(),_()):(k>f&&(r||!s)?(e=Date.now(),_()):c&&(l=new Promise((w,y)=>{a=u?y:w,t=setTimeout(()=>{e=Date.now(),s=!0,w(_()),p()},Math.max(0,f-k))})),!r&&!t&&(t=setTimeout(()=>s=!0,f)),s=!1,l)}}function y1(n=bc){const e=J(!0);function t(){e.value=!1}function s(){e.value=!0}const a=(...l)=>{e.value&&n(...l)};return{isActive:it(e),pause:t,resume:s,eventFilter:a}}function b1(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const s=e;e=void 0,s&&await s},t}function w1(n){return n||ms()}function _1(...n){if(n.length!==1)return Pt(...n);const e=n[0];return typeof e=="function"?it(Tl(()=>({get:e,set:It}))):J(e)}function x1(n,e=200,t={}){return zl(k1(e,t),n)}function E1(n,e=200,t=!1,s=!0,a=!1){return zl(v1(e,t,s,a),n)}function L1(n,e,t={}){const{eventFilter:s=bc,...a}=t;return dn(n,zl(s,e),a)}function T1(n,e,t={}){const{eventFilter:s,...a}=t,{eventFilter:l,pause:o,resume:c,isActive:r}=y1(s);return{stop:L1(n,e,{...a,eventFilter:l}),pause:o,resume:c,isActive:r}}function ql(n,e=!0,t){w1()?bn(n,t):e?n():Ge(n)}function C1(n,e,t={}){const{immediate:s=!0}=t,a=J(!1);let l=null;function o(){l&&(clearTimeout(l),l=null)}function c(){a.value=!1,o()}function r(...u){o(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,n(...u)},Bn(e))}return s&&(a.value=!0,_s&&r()),rt(c),{isPending:it(a),start:r,stop:c}}function el(n=!1,e={}){const{truthyValue:t=!0,falsyValue:s=!1}=e,a=Pn(n),l=J(n);function o(c){if(arguments.length)return l.value=c,l.value;{const r=Bn(t);return l.value=l.value===r?Bn(s):r,l.value}}return a?o:[l,o]}function ve(n){var e;const t=Bn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const we=_s?window:void 0,S1=_s?window.document:void 0,wc=_s?window.navigator:void 0;function Dn(...n){let e,t,s,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,s,a]=n,e=we):[e,t,s,a]=n,!e)return It;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const l=[],o=()=>{l.forEach(p=>p()),l.length=0},c=(p,d,h,f)=>(p.addEventListener(d,h,f),()=>p.removeEventListener(d,h,f)),r=dn(()=>[ve(e),Bn(a)],([p,d])=>{if(o(),!p)return;const h=g1(d)?{...d}:d;l.push(...t.flatMap(f=>s.map(k=>c(p,f,k,h))))},{immediate:!0,flush:"post"}),u=()=>{r(),o()};return rt(u),u}function I1(){const n=J(!1),e=ms();return e&&bn(()=>{n.value=!0},e),n}function Ot(n){const e=I1();return b(()=>(e.value,!!n()))}function _c(n,e={}){const{window:t=we}=e,s=Ot(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const l=J(!1),o=u=>{l.value=u.matches},c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},r=fr(()=>{s.value&&(c(),a=t.matchMedia(Bn(n)),"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),l.value=a.matches)});return rt(()=>{r(),c(),a=void 0}),l}function gi(n,e={}){const{controls:t=!1,navigator:s=wc}=e,a=Ot(()=>s&&"permissions"in s);let l;const o=typeof n=="string"?{name:n}:n,c=J(),r=()=>{l&&(c.value=l.state)},u=b1(async()=>{if(a.value){if(!l)try{l=await s.permissions.query(o),Dn(l,"change",r),r()}catch{c.value="prompt"}return l}});return u(),t?{state:c,isSupported:a,query:u}:c}function A1(n={}){const{navigator:e=wc,read:t=!1,source:s,copiedDuring:a=1500,legacy:l=!1}=n,o=Ot(()=>e&&"clipboard"in e),c=gi("clipboard-read"),r=gi("clipboard-write"),u=b(()=>o.value||l),p=J(""),d=J(!1),h=C1(()=>d.value=!1,a);function f(){o.value&&y(c.value)?e.clipboard.readText().then(E=>{p.value=E}):p.value=w()}u.value&&t&&Dn(["copy","cut"],f);async function k(E=Bn(s)){u.value&&E!=null&&(o.value&&y(r.value)?await e.clipboard.writeText(E):_(E),p.value=E,d.value=!0,h.start())}function _(E){const v=document.createElement("textarea");v.value=E??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function w(){var E,v,T;return(T=(v=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:v.toString())!=null?T:""}function y(E){return E==="granted"||E==="prompt"}return{isSupported:u,text:p,copied:d,copy:k}}const Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hs="__vueuse_ssr_handlers__",P1=D1();function D1(){return Hs in Ns||(Ns[Hs]=Ns[Hs]||{}),Ns[Hs]}function R1(n,e){return P1[n]||e}function O1(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const M1={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},mi="vueuse-storage";function fa(n,e,t,s={}){var a;const{flush:l="pre",deep:o=!0,listenToStorageChanges:c=!0,writeDefaults:r=!0,mergeDefaults:u=!1,shallow:p,window:d=we,eventFilter:h,onError:f=D=>{console.error(D)},initOnMounted:k}=s,_=(p?jn:J)(typeof e=="function"?e():e);if(!t)try{t=R1("getDefaultStorage",()=>{var D;return(D=we)==null?void 0:D.localStorage})()}catch(D){f(D)}if(!t)return _;const w=Bn(e),y=O1(w),E=(a=s.serializer)!=null?a:M1[y],{pause:v,resume:T}=T1(_,()=>L(_.value),{flush:l,deep:o,eventFilter:h});d&&c&&ql(()=>{Dn(d,"storage",N),Dn(d,mi,Y),k&&N()}),k||N();function j(D,X){d&&d.dispatchEvent(new CustomEvent(mi,{detail:{key:n,oldValue:D,newValue:X,storageArea:t}}))}function L(D){try{const X=t.getItem(n);if(D==null)j(X,null),t.removeItem(n);else{const M=E.write(D);X!==M&&(t.setItem(n,M),j(X,M))}}catch(X){f(X)}}function q(D){const X=D?D.newValue:t.getItem(n);if(X==null)return r&&w!=null&&t.setItem(n,E.write(w)),w;if(!D&&u){const M=E.read(X);return typeof u=="function"?u(M,w):y==="object"&&!Array.isArray(M)?{...w,...M}:M}else return typeof X!="string"?X:E.read(X)}function N(D){if(!(D&&D.storageArea!==t)){if(D&&D.key==null){_.value=w;return}if(!(D&&D.key!==n)){v();try{(D==null?void 0:D.newValue)!==E.write(_.value)&&(_.value=q(D))}catch(X){f(X)}finally{D?Ge(T):T()}}}}function Y(D){N(D.detail)}return _}function j1(n){return _c("(prefers-color-scheme: dark)",n)}function F1(n,e,t={}){const{window:s=we,...a}=t;let l;const o=Ot(()=>s&&"MutationObserver"in s),c=()=>{l&&(l.disconnect(),l=void 0)},r=b(()=>{const h=Bn(n),f=(Array.isArray(h)?h:[h]).map(ve).filter(h1);return new Set(f)}),u=dn(()=>r.value,h=>{c(),o.value&&s&&h.size&&(l=new MutationObserver(e),h.forEach(f=>l.observe(f,a)))},{immediate:!0,flush:"post"}),p=()=>l==null?void 0:l.takeRecords(),d=()=>{c(),u()};return rt(d),{isSupported:o,stop:d,takeRecords:p}}function $1(n,e,t={}){const{window:s=we,...a}=t;let l;const o=Ot(()=>s&&"ResizeObserver"in s),c=()=>{l&&(l.disconnect(),l=void 0)},r=b(()=>Array.isArray(n)?n.map(d=>ve(d)):[ve(n)]),u=dn(r,d=>{if(c(),o.value&&s){l=new ResizeObserver(e);for(const h of d)h&&l.observe(h,a)}},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return rt(p),{isSupported:o,stop:p}}function N1(n,e={width:0,height:0},t={}){const{window:s=we,box:a="content-box"}=t,l=b(()=>{var d,h;return(h=(d=ve(n))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),o=J(e.width),c=J(e.height),{stop:r}=$1(n,([d])=>{const h=a==="border-box"?d.borderBoxSize:a==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(s&&l.value){const f=ve(n);if(f){const k=s.getComputedStyle(f);o.value=Number.parseFloat(k.width),c.value=Number.parseFloat(k.height)}}else if(h){const f=Array.isArray(h)?h:[h];o.value=f.reduce((k,{inlineSize:_})=>k+_,0),c.value=f.reduce((k,{blockSize:_})=>k+_,0)}else o.value=d.contentRect.width,c.value=d.contentRect.height},t);ql(()=>{const d=ve(n);d&&(o.value="offsetWidth"in d?d.offsetWidth:e.width,c.value="offsetHeight"in d?d.offsetHeight:e.height)});const u=dn(()=>ve(n),d=>{o.value=d?e.width:0,c.value=d?e.height:0});function p(){r(),u()}return{width:o,height:c,stop:p}}const ki=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Wl(n,e={}){const{document:t=S1,autoExit:s=!1}=e,a=b(()=>{var y;return(y=ve(n))!=null?y:t==null?void 0:t.querySelector("html")}),l=J(!1),o=b(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>t&&y in t||a.value&&y in a.value)),c=b(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>t&&y in t||a.value&&y in a.value)),r=b(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>t&&y in t||a.value&&y in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>t&&y in t),p=Ot(()=>a.value&&t&&o.value!==void 0&&c.value!==void 0&&r.value!==void 0),d=()=>u?(t==null?void 0:t[u])===a.value:!1,h=()=>{if(r.value){if(t&&t[r.value]!=null)return t[r.value];{const y=a.value;if((y==null?void 0:y[r.value])!=null)return!!y[r.value]}}return!1};async function f(){if(!(!p.value||!l.value)){if(c.value)if((t==null?void 0:t[c.value])!=null)await t[c.value]();else{const y=a.value;(y==null?void 0:y[c.value])!=null&&await y[c.value]()}l.value=!1}}async function k(){if(!p.value||l.value)return;h()&&await f();const y=a.value;o.value&&(y==null?void 0:y[o.value])!=null&&(await y[o.value](),l.value=!0)}async function _(){await(l.value?f():k())}const w=()=>{const y=h();(!y||y&&d())&&(l.value=y)};return Dn(t,ki,w,!1),Dn(()=>ve(a),ki,w,!1),s&&rt(f),{isSupported:p,isFullscreen:l,enter:k,exit:f,toggle:_}}function Oa(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function xc(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!t||t.tagName==="BODY"?!1:xc(t)}}function H1(n){const e=n||window.event,t=e.target;return xc(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const Vs=new WeakMap;function Ec(n,e=!1){const t=J(e);let s=null;dn(_1(n),o=>{const c=Oa(Bn(o));if(c){const r=c;Vs.get(r)||Vs.set(r,r.style.overflow),t.value&&(r.style.overflow="hidden")}},{immediate:!0});const a=()=>{const o=Oa(Bn(n));!o||t.value||(fi&&(s=Dn(o,"touchmove",c=>{H1(c)},{passive:!1})),o.style.overflow="hidden",t.value=!0)},l=()=>{var o;const c=Oa(Bn(n));!c||!t.value||(fi&&(s==null||s()),c.style.overflow=(o=Vs.get(c))!=null?o:"",Vs.delete(c),t.value=!1)};return rt(l),b({get(){return t.value},set(o){o?a():l()}})}function Lc(n,e,t={}){const{window:s=we}=t;return fa(n,e,s==null?void 0:s.sessionStorage,t)}function V1(n={}){const{window:e=we,behavior:t="auto"}=n;if(!e)return{x:J(0),y:J(0)};const s=J(e.scrollX),a=J(e.scrollY),l=b({get(){return s.value},set(c){scrollTo({left:c,behavior:t})}}),o=b({get(){return a.value},set(c){scrollTo({top:c,behavior:t})}});return Dn(e,"scroll",()=>{s.value=e.scrollX,a.value=e.scrollY},{capture:!1,passive:!0}),{x:l,y:o}}function B1(n={}){const{window:e=we,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:l=!0}=n,o=J(t),c=J(s),r=()=>{e&&(l?(o.value=e.innerWidth,c.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,c.value=e.document.documentElement.clientHeight))};if(r(),ql(r),Dn("resize",r,{passive:!0}),a){const u=_c("(orientation: portrait)");dn(u,()=>r())}return{width:o,height:c}}const vi=n=>vn(n)?n:`${n}px`,z1=(n,e=0)=>{const t=jn(),s=b(()=>vi(ie(n.width)||"100%")),a=J("auto"),l=r=>{if(vn(r)){const[u,p]=r.split(":"),d=Number(u)/Number(p);if(!Number.isNaN(d))return d}return typeof r=="number"?r:16/9},o=r=>{const u=ie(n.height),p=l(ie(n.ratio));return u?vi(u):`${Number(r)/p+ie(e)}px`},c=()=>{t.value&&(a.value=o(t.value.clientWidth))};return bn(()=>{c(),Pn(e)&&dn(e,c),Dn("orientationchange",c),Dn("resize",c)}),{el:t,width:s,height:a,resize:c}},yi="https://player.bilibili.com/player.html";var q1=$({name:"BiliBili",props:{bvid:{type:String,default:""},aid:{type:String,default:""},cid:{type:String,default:""},title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},autoplay:Boolean},setup(n){const{el:e,width:t,height:s,resize:a}=z1(n),l=J(!1),o=b(()=>{const{aid:c,bvid:r,cid:u,autoplay:p,time:d,page:h}=n;return c&&u?`${yi}?aid=${c}&cid=${u}&t=${d}&autoplay=${p?1:0}&p=${h}`:r?`${yi}?bvid=${r}&t=${d}&autoplay=${p?1:0}`:null});return()=>o.value?[i("div",{class:"bilibili-desc"},i("a",{class:"sr-only",href:o.value},n.title)),i("iframe",{ref:e,src:o.value,title:n.title,class:"bilibili-iframe",allow:d1,style:{width:t.value,height:l.value?s.value:0},onLoad:()=>{l.value=!0,a()}}),l.value?null:i(rc)]:[]}});const W1=Kn({enhance:({app:n})=>{be("FontIcon")||n.component("FontIcon",o1),be("Badge")||n.component("Badge",ic),be("BiliBili")||n.component("BiliBili",q1)},setup:()=>{},rootComponents:[]}),bi=async(n,e)=>{const{path:t,query:s}=n.currentRoute.value,{scrollBehavior:a}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:t,query:s,hash:e}),n.options.scrollBehavior=a},U1=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:s=5})=>{const a=Je();Dn("scroll",x1(()=>{var k,_;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<s){bi(a,"");return}const r=window.innerHeight+o,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(u-r)<s,d=Array.from(document.querySelectorAll(n)),f=Array.from(document.querySelectorAll(e)).filter(w=>d.some(y=>y.hash===w.hash));for(let w=0;w<f.length;w++){const y=f[w],E=f[w+1],v=o>=(((k=y.parentElement)==null?void 0:k.offsetTop)??0)-s,T=!E||o<(((_=E.parentElement)==null?void 0:_.offsetTop)??0)-s;if(!(v&&T))continue;const L=decodeURIComponent(a.currentRoute.value.hash),q=decodeURIComponent(y.hash);if(L===q)return;if(p){for(let N=w+1;N<f.length;N++)if(L===decodeURIComponent(f[N].hash))return}bi(a,q);return}},t))},G1=".vp-sidebar-link, .vp-toc-link",K1=".header-anchor",J1=200,Y1=5,X1=Kn({setup(){U1({headerLinkSelector:G1,headerAnchorSelector:K1,delay:J1,offset:Y1})}});let Tc=n=>vn(n.title)?{title:n.title}:null;const Cc=Symbol(""),Q1=n=>{Tc=n},Z1=()=>yn(Cc),n0=n=>{n.provide(Cc,Tc)};var e0={"/en/":{title:"Catalog",empty:"No catalog"},"/":{title:"目录",empty:"暂无目录"}};const t0=$({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(n){const e=Z1(),t=bs(e0),s=kn(),a=tc(),l=sc(),c=jn(Rt(a.value).map(([u,{meta:p}])=>{const d=e(p);if(!d)return null;const h=u.split("/").length;return{level:s1(u,"/")?h-2:h-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...d}}).filter(u=>ys(u)&&vn(u.title))),r=b(()=>{const u=n.base?jh(zr(n.base)):s.value.path.replace(/\/[^/]+$/,"/"),p=u.split("/").length-2,d=[];return c.value.filter(({level:h,path:f})=>{if(!St(f,u)||f===u)return!1;if(u==="/"){const k=de(l.value.locales).filter(_=>_!=="/");if(f==="/404.html"||k.some(_=>St(f,_)))return!1}return h-p<=n.level}).sort(({title:h,level:f,order:k},{title:_,level:w,order:y})=>{const E=f-w;return E||(Ra(k)?Ra(y)?k>0?y>0?k-y:-1:y<0?k-y:1:k:Ra(y)?y:h.localeCompare(_))}).forEach(h=>{var _;const{base:f,level:k}=h;switch(k-p){case 1:{d.push(h);break}case 2:{const w=d.find(y=>y.path===f);w&&(w.children??(w.children=[])).push(h);break}default:{const w=d.find(y=>y.path===f.replace(/\/[^/]+\/$/,"/"));if(w){const y=(_=w.children)==null?void 0:_.find(E=>E.path===f);y&&(y.children??(y.children=[])).push(h)}}}}),d});return()=>{const u=r.value.some(p=>p.children);return i("div",{class:["vp-catalog-wrapper",{index:n.index}]},[n.hideHeading?null:i("h2",{class:"vp-catalog-main-title"},t.value.title),r.value.length?i(n.index?"ol":"ul",{class:["vp-catalogs",{deep:u}]},r.value.map(({children:p=[],title:d,path:h,content:f})=>{const k=i(Sn,{class:"vp-catalog-title",to:h},()=>f?i(f):d);return i("li",{class:"vp-catalog"},u?[i("h3",{id:d,class:["vp-catalog-child-title",{"has-children":p.length}]},[i("a",{href:`#${d}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),k]),p.length?i(n.index?"ol":"ul",{class:"vp-child-catalogs"},p.map(({children:_=[],content:w,path:y,title:E})=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":_.length}]},[i("a",{href:`#${E}`,class:"vp-catalog-header-anchor"},"#"),i(Sn,{class:"vp-catalog-title",to:y},()=>w?i(w):E)]),_.length?i(n.index?"ol":"div",{class:n.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},_.map(({content:v,path:T,title:j})=>n.index?i("li",{class:"vp-sub-catalog"},i(Sn,{to:T},()=>v?i(v):j)):i(Sn,{class:"vp-sub-catalog-link",to:T},()=>v?i(v):j))):null]))):null]:i("div",{class:"vp-catalog-child-title"},k))})):i("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),s0=Kn({enhance:({app:n})=>{n0(n),be("Catalog",n)||n.component("Catalog",t0)}});var a0={"/en/":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}};const l0=$({name:"BackToTop",setup(){const n=gn(),e=bs(a0),t=jn(),{height:s}=N1(t),{height:a}=B1(),{y:l}=V1(),o=b(()=>n.value.backToTop!==!1&&l.value>100),c=b(()=>l.value/(s.value-a.value)*100);return bn(()=>{t.value=document.body}),()=>i(Ue,{name:"back-to-top"},()=>o.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[i("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},i("svg",i("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*c.value*.48} ${Math.PI*(100-c.value)*.48}`}))),i("div",{class:"back-to-top-icon"})]):null)}}),o0=Kn({rootComponents:[l0]}),i0=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Sc=$({name:"ExternalLinkIcon",props:{locales:{type:Object,default:()=>({})}},setup(n){const e=he(),t=b(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>i("span",[i0,i("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var r0={};const c0=r0,u0=Kn({enhance({app:n}){n.component("ExternalLinkIcon",i(Sc,{locales:c0}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const cn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=cn.isStarted();n=Ma(n,cn.settings.minimum,1),cn.status=n===1?null:n;const t=cn.render(!e),s=t.querySelector(cn.settings.barSelector),a=cn.settings.speed,l=cn.settings.easing;return t.offsetWidth,p0(o=>{Bs(s,{transform:"translate3d("+wi(n)+"%,0,0)",transition:"all "+a+"ms "+l}),n===1?(Bs(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Bs(t,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){cn.remove(),o()},a)},a)):setTimeout(()=>o(),a)}),cn},isStarted:()=>typeof cn.status=="number",start:()=>{cn.status||cn.set(0);const n=()=>{setTimeout(()=>{cn.status&&(cn.trickle(),n())},cn.settings.trickleSpeed)};return cn.settings.trickle&&n(),cn},done:n=>!n&&!cn.status?cn:cn.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=cn.status;return e?(typeof n!="number"&&(n=(1-e)*Ma(Math.random()*e,.1,.95)),e=Ma(e+n,0,.994),cn.set(e)):cn.start()},trickle:()=>cn.inc(Math.random()*cn.settings.trickleRate),render:n=>{if(cn.isRendered())return document.getElementById("nprogress");_i(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=cn.settings.template;const t=e.querySelector(cn.settings.barSelector),s=n?"-100":wi(cn.status||0),a=document.querySelector(cn.settings.parent);return Bs(t,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&_i(a,"nprogress-custom-parent"),a==null||a.appendChild(e),e},remove:()=>{xi(document.documentElement,"nprogress-busy"),xi(document.querySelector(cn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&d0(n)},isRendered:()=>!!document.getElementById("nprogress")},Ma=(n,e,t)=>n<e?e:n>t?t:n,wi=n=>(-1+n)*100,p0=function(){const n=[];function e(){const t=n.shift();t&&t(e)}return function(t){n.push(t),n.length===1&&e()}}(),Bs=function(){const n=["Webkit","O","Moz","ms"],e={};function t(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,r){return r.toUpperCase()})}function s(o){const c=document.body.style;if(o in c)return o;let r=n.length;const u=o.charAt(0).toUpperCase()+o.slice(1);let p;for(;r--;)if(p=n[r]+u,p in c)return p;return o}function a(o){return o=t(o),e[o]??(e[o]=s(o))}function l(o,c,r){c=a(c),o.style[c]=r}return function(o,c){for(const r in c){const u=c[r];u!==void 0&&Object.prototype.hasOwnProperty.call(c,r)&&l(o,r,u)}}}(),Ic=(n,e)=>(typeof n=="string"?n:Ul(n)).indexOf(" "+e+" ")>=0,_i=(n,e)=>{const t=Ul(n),s=t+e;Ic(t,e)||(n.className=s.substring(1))},xi=(n,e)=>{const t=Ul(n);if(!Ic(n,e))return;const s=t.replace(" "+e+" "," ");n.className=s.substring(1,s.length-1)},Ul=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),d0=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},h0=()=>{bn(()=>{const n=Je(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||cn.start()}),n.afterEach(t=>{e.add(t.path),cn.done()})})},f0=Kn({setup(){h0()}}),g0=JSON.parse(`{"encrypt":{"config":{}},"author":{"name":"LiCheng","url":"https://gitee.com/licheng1013"},"logo":"/logo.png","repo":"https://gitee.com/licheng1013","themeColor":{"red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f","pink":"#f8bfca"},"locales":{"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/en/",{"text":"Plugins","icon":"alias","link":"/en/plugins"},{"text":"English","icon":"language","link":"/en/english"},{"icon":"link","text":"Links","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java Guide","link":"https://javaguide.cn/"}]},{"text":"Github","icon":"github","link":"https://github.com/licheng1013"}],"sidebar":{"/en/english/":"structure","/en/plugins/":"structure"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"介绍","icon":"creative","link":"/blog/"},{"text":"插件","icon":"alias","link":"/plugins/"},{"text":"个人","icon":"study","link":"/study/"},{"text":"工具","icon":"tool","link":"/util/"},{"icon":"link","text":"友链","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java指南","link":"https://javaguide.cn/"},{"text":"主题文档","link":"https://theme-hope.vuejs.press/zh/"},{"text":"Idea插件","link":"/util/idea.md"}]},{"text":"Gitee镜像文档","icon":"gitee","link":"https://licheng1013.gitee.io/"}],"sidebar":{"/blog/":"structure","/plugins/":"structure","/study/":"structure","/util/":"structure"}}},"footer":"逆水求剑-致永恒 <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728700105340810'crossorigin='anonymous'><\/script>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"blog":{"timeline":"新文档还在编写中！","description":"一个开发者","intro":"/","medias":{"Gitee":"https://gitee.com/licheng1013","Github":"https://github.com/licheng1013"}}}`),m0=J(g0),Ac=()=>m0,Pc=Symbol(""),k0=()=>{const n=yn(Pc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},v0=(n,e)=>{const{locales:t,...s}=n;return{...s,...t==null?void 0:t[e]}},y0=Kn({enhance({app:n}){const e=Ac(),t=n._context.provides[$l],s=b(()=>v0(e.value,t.routeLocale.value));n.provide(Pc,s),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return s.value}}})}});var b0={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.34/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.34/templates/giscus/dark.css",repo:"licheng1013/blog-giscus",repoId:"R_kgDOIVLLNA",categoryId:"DIC_kwDOIVLLNM4CSQfj",category:"Announcements",mapping:"title"};const w0=b0;let _0=w0;const Dc=Symbol(""),Rc=()=>yn(Dc),x0=Rc,E0=n=>{n.provide(Dc,_0)},Oc=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[i("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},i("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},i("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Oc.displayName="LoadingIcon";const Ei=["ar","ca","da","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","uz","vi","zh-CN","zh-TW"],L0=$({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(n){const e=x0(),t=Nl(),s=!!(e.repo&&e.repoId&&e.category&&e.categoryId),{repo:a,repoId:l,category:o,categoryId:c}=e,r=J(!1),u=b(()=>{if(Ei.includes(t.value))return t.value;const d=t.value.split("-")[0];return Ei.includes(d)?d:"en"}),p=b(()=>({repo:a,repoId:l,category:o,categoryId:c,lang:u.value,theme:n.darkmode?e.darkTheme||"dark":e.lightTheme||"light",mapping:e.mapping||"pathname",term:n.identifier,inputPosition:e.inputPosition||"top",reactionsEnabled:e.reactionsEnabled===!1?"0":"1",strict:e.strict===!1?"0":"1",loading:e.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return bn(async()=>{await C(()=>import("./giscus-7BMGhbDA.js"),[]),r.value=!0}),()=>s?i("div",{id:"comment",class:["giscus-wrapper",{"input-top":e.inputPosition!=="bottom"}]},r.value?i("giscus-widget",p.value):i(Oc)):null}}),T0=$({name:"CommentService",props:{darkmode:Boolean},setup(n){const e=Rc(),t=kn(),s=gn(),a=e.comment!==!1,l=b(()=>s.value.comment||a&&s.value.comment!==!1);return()=>i(L0,{id:"vp-comment",identifier:s.value.commentID||t.value.path,darkmode:n.darkmode,style:{display:l.value?"block":"none"}})}}),C0=Kn({enhance:({app:n})=>{E0(n),n.component("CommentService",T0)}}),S0=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,I0=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&S0.test(navigator.userAgent),A0=({delay:n=500,duration:e=2e3,locales:t,selector:s,showInMobile:a})=>{const{copy:l,copied:o}=A1({legacy:!0,copiedDuring:e}),c=bs(t),r=kn(),u=h=>{if(!h.hasAttribute("copy-code-registered")){const f=document.createElement("button");f.type="button",f.classList.add("vp-copy-code-button"),f.innerHTML='<div class="vp-copy-icon" />',f.setAttribute("aria-label",c.value.copy),f.setAttribute("data-copied",c.value.copied),h.parentElement&&h.parentElement.insertBefore(f,h),h.setAttribute("copy-code-registered","")}},p=()=>{Ge().then(()=>oc(n)).then(()=>{s.forEach(h=>{document.querySelectorAll(h).forEach(u)})})},d=(h,f,k)=>{let{innerText:_=""}=f;/language-(shellscript|shell|bash|sh|zsh)/.test(h.classList.toString())&&(_=_.replace(/^ *(\$|>) /gm,"")),l(_).then(()=>{k.classList.add("copied"),dn(o,()=>{k.classList.remove("copied"),k.blur()},{once:!0})})};bn(()=>{const h=!I0()||a;h&&p(),Dn("click",f=>{const k=f.target;if(k.matches('div[class*="language-"] > button.copy')){const _=k.parentElement,w=k.nextElementSibling;w&&d(_,w,k)}else if(k.matches('div[class*="language-"] div.vp-copy-icon')){const _=k.parentElement,w=_.parentElement,y=_.nextElementSibling;y&&d(w,y,_)}}),dn(()=>r.value.path,()=>{h&&p()})})};var P0={"/en/":{copy:"Copy code",copied:"Copied"},"/":{copy:"复制代码",copied:"已复制"}},D0=['.theme-hope-content div[class*="language-"] pre'];const R0=500,O0=2e3,M0=P0,j0=D0,F0=!1,$0=Kn({setup:()=>{A0({selector:j0,locales:M0,duration:O0,delay:R0,showInMobile:F0})}}),N0=()=>{Dn("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})})},H0=Kn({enhance:({app:n})=>{},setup:()=>{N0()}});let V0={};const Mc=Symbol(""),B0=()=>yn(Mc),z0=n=>{n.provide(Mc,V0)},q0='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',W0=n=>vn(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),jc=n=>new Promise((e,t)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(jc(n)),n.onerror=s=>t(s))}),U0=n=>{const{isSupported:e,toggle:t}=Wl();n.on("uiRegister",()=>{e.value&&n.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),n.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,a)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),a.on("change",()=>{s.setAttribute("href",a.currSlide.data.src)})}}),n.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,a)=>{const l=[];let o=-1;for(let c=0;c<a.getNumItems();c++){const r=document.createElement("div");r.className="photo-swipe-bullet",r.onclick=u=>{a.goTo(l.indexOf(u.target))},l.push(r),s.appendChild(r)}a.on("change",()=>{o>=0&&l[o].classList.remove("active"),l[a.currIndex].classList.add("active"),o=a.currIndex})}})})},G0=(n,e,t=!0)=>C(()=>import("./photoswipe.esm-SzV8tJDW.js"),[]).then(({default:s})=>{let a=null;const l=n.map(o=>({html:q0,element:o,msrc:o.src}));return n.forEach((o,c)=>{const r=()=>{a==null||a.destroy(),a=new s({preloaderDelay:0,showHideAnimationType:"zoom",...e,dataSource:l,index:c,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),U0(a),a.addFilter("thumbEl",()=>o),a.addFilter("placeholderSrc",()=>o.src),a.init()};o.getAttribute("photo-swipe")||(o.style.cursor="zoom-in",o.addEventListener("click",()=>{r()}),o.addEventListener("keypress",({key:u})=>{u==="Enter"&&r()}),o.setAttribute("photo-swipe","")),jc(o).then(u=>{l.splice(c,1,u),a==null||a.refreshSlideContent(c)})}),t?Dn("wheel",()=>{a==null||a.close()}):()=>{}}),K0=({selector:n,locales:e,delay:t=500,scrollToClose:s=!0})=>{const a=B0(),l=bs(e),o=kn(),c=gn();let r=null;const u=()=>{const{photoSwipe:p}=c.value;p!==!1&&Ge().then(()=>oc(t)).then(async()=>{const d=vn(p)?p:n;r=await G0(W0(d),{...a,...l.value},s)})};bn(()=>{u(),dn(()=>o.value.path,()=>{r==null||r(),u()})}),gs(()=>{r==null||r()})};var J0={"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const Y0=".theme-hope-content :not(a) > img:not([no-view])",X0=J0,Q0=800,Z0=!0,nf=Kn({enhance:({app:n})=>{z0(n)},setup:()=>{K0({selector:Y0,delay:Q0,locales:X0,scrollToClose:Z0})}}),Fc=()=>{const n=kn();return b(()=>n.value.readingTime??null)},$c=(n,e)=>{const{minutes:t,words:s}=n,{less1Minute:a,word:l,time:o}=e;return{time:t<1?a:o.replace("$time",Math.round(t).toString()),words:l.replace("$word",s.toString())}};var Li={"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Ti={words:"",time:""},tl=typeof Li>"u"?null:Li,Nc=()=>tl?bs(tl):b(()=>null),ef=()=>{if(typeof tl>"u")return b(()=>Ti);const n=Fc(),e=Nc();return b(()=>n.value&&e.value?$c(n.value,e.value):Ti)},Ee=()=>Ac(),ln=()=>k0(),ct=()=>{const n=Ee();return b(()=>!!n.value.pure)},Ci=()=>null,tf="719px",sf="1440px",af="false",Hc={mobileBreakPoint:tf,pcBreakPoint:sf,enableThemeColor:af},Gl={"/en/english/":["study","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19"],"/en/plugins/":["gorm","jorm","vue-admin"],"/blog/":["body","desc","video","random"],"/plugins/":["gorm","io-game","java-orm","request-tool","rocket-cat","rs-orm","vue-admin"],"/study/":[{text:"Game",prefix:"game/",collapsible:!0,icon:"app",children:["cocos",{text:"Design",prefix:"design/",collapsible:!0,children:["chess"]},"game","godot","unity","unity-camera"]},{text:"Go",prefix:"go/",collapsible:!0,icon:"hot",children:["gin","go","gorm","socket","ssh","wails","qiniu","try","util","design-mode","difficult"]},{text:"Java",prefix:"java/",collapsible:!0,icon:"java",children:[{text:"Design Mode",prefix:"design-mode/",collapsible:!0,children:["proxy","design-mode"]},"hutool","io-game","java","maven","mqtt","mybatis","protostuff","redisson","rocket-mq","spring-boot","spring-boot-demo","spring-cloud","spring-cloud-alibaba","transaction","data-struct","kd"]},{text:"Linux",prefix:"linux/",collapsible:!0,icon:"linux",children:["docker","git","linux","mysql","nginx","shell","server"]},{text:"Try",prefix:"try/",collapsible:!0,icon:"support",children:["antlr","flutter","python","rust"]},{text:"Web",prefix:"web/",collapsible:!0,icon:"leaf",children:["axios","css","electron","node","vite","vue"]}],"/util/":["dev","common"]},Vc=n=>{const{icon:e="",color:t,size:s}=n,a=t||s?{}:null;return t&&(a.color=t),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),Ke(e)?i("img",{class:"icon",src:e,alt:"","no-view":"",style:a}):ws(e)?i("img",{class:"icon",src:En(e),alt:"","aria-hidden":"","no-view":"",style:a}):i(ce("FontIcon"),n)};Vc.displayName="HopeIcon";var Hn=Vc;const lf="http://.",ut=()=>{const n=Je(),e=_e();return t=>{if(t)if(ws(t))e.path!==t&&n.push(t);else if(qr(t))window&&window.open(t);else{const s=e.path.slice(0,e.path.lastIndexOf("/"));n.push(new URL(`${s}/${encodeURI(t)}`,lf).pathname)}}},Bc=()=>{const n=ln(),e=gn();return b(()=>{const{author:t}=e.value;return t?is(t):t===!1?[]:is(n.value.author,!1)})},of=()=>{const n=gn(),e=yn(Symbol.for("categoryMap"));return b(()=>vc(n.value.category).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},rf=()=>{const n=gn(),e=yn(Symbol.for("tagMap"));return b(()=>yc(n.value.tag).map(t=>{var s;return{name:t,path:((s=e==null?void 0:e.value.map[t])==null?void 0:s.path)||""}}))},cf=()=>{const n=gn(),e=kn();return b(()=>{const t=Hl(n.value.date);if(t)return t;const{createdTime:s}=e.value.git||{};return s?new Date(s):null})},uf=()=>{const n=ln(),e=kn(),t=gn(),s=Bc(),a=of(),l=rf(),o=cf(),c=Fc(),r=ef(),u=b(()=>({author:s.value,category:a.value,date:o.value,localizedDate:e.value.localizedDate,tag:l.value,isOriginal:t.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:r.value,pageview:"pageview"in t.value?t.value.pageview:!0})),p=b(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:u,items:p}},{mobileBreakPoint:pf,pcBreakPoint:df}=Hc,Si=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,xs=()=>{const n=J(!1),e=J(!1),t=()=>{n.value=window.innerWidth<=(Si(pf)??719),e.value=window.innerWidth>=(Si(df)??1440)};return bn(()=>{t(),Dn("resize",t,!1),Dn("orientationchange",t,!1)}),{isMobile:n,isPC:e}},zc=Symbol(""),Es=()=>{const n=yn(zc);if(!n)throw new Error("useDarkmode() is called without provider.");return n},hf=n=>{const e=Ee(),t=j1(),s=b(()=>e.value.darkmode||"switch"),a=fa("vuepress-theme-hope-scheme","auto"),l=b(()=>{const c=s.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?t.value:c==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&t.value}),o=b(()=>{const c=s.value;return c==="switch"||c==="toggle"});n.provide(zc,{canToggle:o,config:s,isDarkmode:l,status:a}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},ff=()=>{const{config:n,isDarkmode:e,status:t}=Es();fr(()=>{n.value==="disable"?t.value="light":n.value==="enable"?t.value="dark":n.value==="toggle"&&t.value==="auto"&&(t.value="light")}),bn(()=>{dn(e,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var Wn=(n=>(n.title="t",n.shortTitle="s",n.icon="i",n.index="I",n.order="O",n.breadcrumbExclude="b",n))(Wn||{}),Nn=(n=>(n.type="y",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n))(Nn||{}),qc=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(qc||{});const et=(n="",e="")=>ws(e)?e:`${zr(n)}${e}`,_t=(n,e=!1,t)=>{const{meta:s,path:a,notFound:l}=l1(n,t);return l?{text:a,link:a}:{text:!e&&s[Wn.shortTitle]?s[Wn.shortTitle]:s[Wn.title]||a,link:a,...s[Wn.icon]?{icon:s[Wn.icon]}:{}}},sl=({config:n,prefix:e=""})=>{const t=(s,a=e)=>{const l=vn(s)?_t(et(a,s)):s.link?{...s,...ts(s.link)?{}:{link:_t(et(a,s.link)).link}}:s;if("children"in l){const o=et(a,l.prefix),c=l.children==="structure"?Gl[o]:l.children;return{type:"group",...l,prefix:o,children:c.map(r=>t(r,o))}}return{type:"page",...l}};return n.map(s=>t(s))},gf=({config:n,page:e,headerDepth:t})=>{const s=de(n).sort((a,l)=>l.length-a.length);for(const a of s)if(St(decodeURI(e.path),a)){const l=n[a];return l?sl({config:l==="structure"?Gl[a]:l,page:e,headerDepth:t,prefix:a}):[]}return console.warn(`${e.path} is missing sidebar config.`),[]},mf=({config:n,routeLocale:e,page:t,headerDepth:s})=>n==="structure"?sl({config:Gl[e],page:t,headerDepth:s,prefix:e}):nl(n)?sl({config:n,page:t,headerDepth:s}):ys(n)?gf({config:n,page:t,headerDepth:s}):[],Wc=Symbol(""),kf=()=>{const n=gn(),e=ln(),t=kn(),s=he(),a=b(()=>n.value.home?!1:n.value.sidebar??e.value.sidebar??"structure"),l=b(()=>n.value.headerDepth??e.value.headerDepth??2),o=Bl(()=>[a.value,l.value,t.value.path,null],()=>mf({config:a.value,routeLocale:s.value,page:t.value,headerDepth:l.value}));ue(Wc,o)},Kl=()=>{const n=yn(Wc);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var vf=$({name:"PageFooter",setup(){const n=Ee(),e=ln(),t=gn(),s=Bc(),a=b(()=>{const{copyright:u,footer:p}=t.value;return p!==!1&&!!(u||p||e.value.displayFooter)}),l=b(()=>{const{footer:u}=t.value;return u===!1?!1:vn(u)?u:e.value.footer||""}),o=b(()=>s.value.map(({name:u})=>u).join(", ")),c=u=>`Copyright © ${new Date().getFullYear()} ${o.value} ${u?`${u} Licensed`:""}`,r=b(()=>{const{copyright:u,license:p=""}=t.value,{license:d}=n.value,{copyright:h}=e.value;return u??(p?c(p):vn(h)?h:o.value||d?c(d):!1)});return()=>a.value?i("footer",{class:"vp-footer-wrapper"},[l.value?i("div",{class:"vp-footer",innerHTML:l.value}):null,r.value?i("div",{class:"vp-copyright",innerHTML:r.value}):null]):null}}),Un=$({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:t,slots:s}){const a=_e(),l=sc(),o=Pt(n,"config"),c=b(()=>Ke(o.value.link)),r=b(()=>!c.value&&qr(o.value.link)),u=b(()=>o.value.target||(c.value?"_blank":void 0)),p=b(()=>u.value==="_blank"),d=b(()=>!c.value&&!r.value&&!p.value),h=b(()=>o.value.rel||(p.value?"noopener noreferrer":null)),f=b(()=>o.value.ariaLabel||o.value.text),k=b(()=>{if(n.exact)return!1;const w=de(l.value.locales);return w.length?w.every(y=>y!==o.value.link):o.value.link!=="/"}),_=b(()=>d.value?o.value.activeMatch?new RegExp(o.value.activeMatch,"u").test(a.path):k.value?St(a.path,o.value.link):a.path===o.value.link:!1);return()=>{const{before:w,after:y,default:E}=s,{text:v,icon:T,link:j}=o.value;return d.value?i(Sn,{to:j,"aria-label":f.value,...e,class:["nav-link",{active:_.value},e.class],onFocusout:()=>t("focusout")},()=>E?E():[w?w():i(Hn,{icon:T}),v,y==null?void 0:y()]):i("a",{href:j,rel:h.value,target:u.value,"aria-label":f.value,...e,class:["nav-link",e.class],onFocusout:()=>t("focusout")},E?E():[w?w():i(Hn,{icon:T}),v,n.noExternalLinkIcon?null:i(Sc),y==null?void 0:y()])}}}),Uc=$({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=kn(),s=Pt(n,"config"),a=b(()=>s.value.ariaLabel||s.value.text),l=J(!1);dn(()=>t.value.path,()=>{l.value=!1});const o=c=>{c.detail===0&&(l.value=!l.value)};return()=>{var c;return i("div",{class:["dropdown-wrapper",{open:l.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:o},[((c=e.title)==null?void 0:c.call(e))||i("span",{class:"title"},[i(Hn,{icon:s.value.icon}),n.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},s.value.children.map((r,u)=>{const p=u===s.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in r?[i("h4",{class:"dropdown-subtitle"},r.link?i(Un,{config:r,onFocusout:()=>{r.children.length===0&&p&&(l.value=!1)}}):i("span",r.text)),i("ul",{class:"dropdown-subitem-wrapper"},r.children.map((d,h)=>i("li",{class:"dropdown-subitem"},i(Un,{config:d,onFocusout:()=>{h===r.children.length-1&&p&&(l.value=!1)}}))))]:i(Un,{config:r,onFocusout:()=>{p&&(l.value=!1)}}))}))])])}}});const Gc=()=>i(rn,{name:"i18n"},()=>[i("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);Gc.displayName="I18nIcon";const Kc=(n,e="")=>vn(n)?_t(et(e,n)):"children"in n?{...n,...n.link&&!ts(n.link)?_t(et(e,n.link)):{},children:n.children.map(t=>Kc(t,et(e,n.prefix)))}:{...n,link:ts(n.link)?n.link:_t(et(e,n.link)).link},Jc=()=>{const n=ln(),e=()=>(n.value.navbar||[]).map(t=>Kc(t));return Bl(()=>n.value.navbar,()=>e())},yf=()=>{const n=e1(),e=_e(),t=he(),s=Dt(),a=Ee(),l=ln();return Bl(()=>e.path,()=>{const o=de(s.value.locales),c=Rt(a.value.extraLocales??{});if(o.length<2&&!c.length)return null;const{path:r,fullPath:u}=e,{navbarLocales:p}=l.value;return{text:"",ariaLabel:p==null?void 0:p.selectLangAriaLabel,children:[...o.map(d=>{var y,E,v;const h=((y=s.value.locales)==null?void 0:y[d])??{},f=((E=a.value.locales)==null?void 0:E[d])??{},k=h.lang||"",_=((v=f.navbarLocales)==null?void 0:v.langName)??k;let w;if(k===s.value.lang)w=r;else{const T=r.replace(t.value,d);w=n.value.some(j=>j===T)?u.replace(r,T):f.home??d}return{text:_,link:w}}),...c.map(([d,h])=>({text:d,link:h.replace(":route",e.path.replace(t.value,""))}))]}})},bf=()=>{const n=ln(),e=b(()=>n.value.repo||null),t=b(()=>e.value?i1(e.value):null),s=b(()=>e.value?Vl(e.value):null),a=b(()=>t.value?n.value.repoLabel??(s.value===null?"Source":s.value):null);return b(()=>!t.value||!a.value||n.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:t.value})};var wf=$({name:"LanguageDropdown",setup(){const n=yf();return()=>n.value?i("div",{class:"vp-nav-item"},i(Uc,{config:n.value},{title:()=>{var e;return i(Gc,{"aria-label":(e=n.value)==null?void 0:e.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),_f=$({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=kn(),t=Pt(n,"config"),s=b(()=>t.value.ariaLabel||t.value.text),a=J(!1);dn(()=>e.value.path,()=>{a.value=!1});const l=(o,c)=>c[c.length-1]===o;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[i("span",{class:"title"},[i(Hn,{icon:t.value.icon}),n.config.text]),i("span",{class:["arrow",a.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},t.value.children.map(o=>i("li",{class:"dropdown-item"},"children"in o?[i("h4",{class:"dropdown-subtitle"},o.link?i(Un,{config:o,onFocusout:()=>{l(o,t.value.children)&&o.children.length===0&&(a.value=!1)}}):i("span",o.text)),i("ul",{class:"dropdown-subitem-wrapper"},o.children.map(c=>i("li",{class:"dropdown-subitem"},i(Un,{config:c,onFocusout:()=>{l(c,o.children)&&l(o,t.value.children)&&(a.value=!1)}}))))]:i(Un,{config:o,onFocusout:()=>{l(o,t.value.children)&&(a.value=!1)}}))))]}}),xf=$({name:"NavScreenLinks",setup(){const n=Jc();return()=>n.value.length?i("nav",{class:"nav-screen-links"},n.value.map(e=>i("div",{class:"navbar-links-item"},"children"in e?i(_f,{config:e}):i(Un,{config:e})))):null}});const Yc=()=>i(rn,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Yc.displayName="DarkIcon";const Xc=()=>i(rn,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Xc.displayName="LightIcon";const Qc=()=>i(rn,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Qc.displayName="AutoIcon";const Zc=()=>i(rn,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Zc.displayName="EnterFullScreenIcon";const nu=()=>i(rn,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));nu.displayName="CancelFullScreenIcon";const eu=()=>i(rn,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);eu.displayName="OutlookIcon";var tu=$({name:"AppearanceSwitch",setup(){const{config:n,isDarkmode:e,status:t}=Es(),s=ct(),a=()=>{n.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"},l=async o=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!o){a();return}const c=o.clientX,r=o.clientY,u=Math.hypot(Math.max(c,innerWidth-c),Math.max(r,innerHeight-r)),p=e.value;await document.startViewTransition(async()=>{a(),await Ge()}).ready,e.value!==p&&document.documentElement.animate({clipPath:e.value?[`circle(${u}px at ${c}px ${r}px)`,`circle(0px at ${c}px ${r}px)`]:[`circle(0px at ${c}px ${r}px)`,`circle(${u}px at ${c}px ${r}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>i("button",{type:"button",id:"appearance-switch",onClick:l},[i(Qc,{style:{display:t.value==="auto"?"block":"none"}}),i(Yc,{style:{display:t.value==="dark"?"block":"none"}}),i(Xc,{style:{display:t.value==="light"?"block":"none"}})])}}),Ef=$({name:"AppearanceMode",setup(){const n=ln(),{canToggle:e}=Es(),t=b(()=>n.value.outlookLocales.darkmode);return()=>e.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},t.value),i(tu)]):null}});const ja=Hc.enableThemeColor==="true";var su=$({name:"ToggleFullScreenButton",setup(){const n=ln(),{isSupported:e,isFullscreen:t,toggle:s}=Wl(),a=b(()=>n.value.outlookLocales.fullscreen);return()=>e?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),i("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>s()},t.value?i(nu):i(Zc))]):null}}),au=$({name:"OutlookSettings",setup(){const n=Ee(),e=ct(),t=b(()=>!e.value&&n.value.fullscreen);return()=>i(da,()=>[null,i(Ef),t.value?i(su):null])}}),Lf=$({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:t}){const s=kn(),{isMobile:a}=xs(),l=jn(),o=Ec(l);return bn(()=>{l.value=document.body,dn(a,c=>{!c&&n.show&&(o.value=!1,e("close"))}),dn(()=>s.value.path,()=>{o.value=!1,e("close")})}),gs(()=>{o.value=!1}),()=>i(Ue,{name:"fade",onEnter:()=>{o.value=!0},onAfterLeave:()=>{o.value=!1}},()=>{var c,r;return n.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(c=t.before)==null?void 0:c.call(t),i(xf),i("div",{class:"vp-outlook-wrapper"},i(au)),(r=t.after)==null?void 0:r.call(t)])):null})}}),Tf=$({name:"NavbarBrand",setup(){const n=he(),e=Dt(),t=ln(),s=b(()=>t.value.home||n.value),a=b(()=>e.value.title),l=b(()=>t.value.navTitle??a.value),o=b(()=>t.value.logo?En(t.value.logo):null),c=b(()=>t.value.logoDark?En(t.value.logoDark):null);return()=>i(Sn,{to:s.value,class:"vp-brand"},()=>[o.value?i("img",{class:["vp-nav-logo",{light:!!c.value}],src:o.value,alt:""}):null,c.value?i("img",{class:["vp-nav-logo dark"],src:c.value,alt:""}):null,l.value?i("span",{class:["vp-site-name",{"hide-in-pad":o.value&&t.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),Cf=$({name:"NavbarLinks",setup(){const n=Jc();return()=>n.value.length?i("nav",{class:"vp-nav-links"},n.value.map(e=>i("div",{class:"vp-nav-item hide-in-mobile"},"children"in e?i(Uc,{config:e}):i(Un,{config:e})))):null}}),Sf=$({name:"RepoLink",setup(){const n=bf();return()=>n.value?i("div",{class:"vp-nav-item vp-action"},i("a",{class:"vp-action-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},i(r1,{type:n.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const lu=({active:n=!1},{emit:e})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));lu.displayName="ToggleNavbarButton";var If=lu;const al=(n,{emit:e})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},i("span",{class:"icon"}));al.displayName="ToggleSidebarButton",al.emits=["toggle"];var Af=al,Pf=$({name:"OutlookButton",setup(){const{isSupported:n}=Wl(),e=Ee(),t=ct(),s=kn(),{canToggle:a}=Es(),l=J(!1),o=b(()=>!t.value&&e.value.fullscreen&&n);return dn(()=>s.value.path,()=>{l.value=!1}),()=>a.value||o.value||ja?i("div",{class:"vp-nav-item hide-in-mobile"},a.value&&!o.value&&!ja?i(tu):o.value&&!a.value&&!ja?i(su):i("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[i(eu),i("div",{class:"outlook-dropdown"},i(au))])):null}}),Df=$({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:t}){const s=ln(),{isMobile:a}=xs(),l=J(!1),o=b(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||a.value)}),c=b(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),r={Brand:Tf,Language:wf,Links:Cf,Repo:Sf,Outlook:Pf,Search:be("Docsearch")?ce("Docsearch"):be("SearchBox")?ce("SearchBox"):Ci},u=p=>r[p]??(be(p)?ce(p):Ci);return()=>{var p,d,h,f,k,_;return[i("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":o.value,"hide-icon":s.value.navbarIcon===!1}]},[i("div",{class:"vp-navbar-start"},[i(Af,{onToggle:()=>{l.value&&(l.value=!1),e("toggleSidebar")}}),(p=t.startBefore)==null?void 0:p.call(t),(c.value.start||[]).map(w=>i(u(w))),(d=t.startAfter)==null?void 0:d.call(t)]),i("div",{class:"vp-navbar-center"},[(h=t.centerBefore)==null?void 0:h.call(t),(c.value.center||[]).map(w=>i(u(w))),(f=t.centerAfter)==null?void 0:f.call(t)]),i("div",{class:"vp-navbar-end"},[(k=t.endBefore)==null?void 0:k.call(t),(c.value.end||[]).map(w=>i(u(w))),(_=t.endAfter)==null?void 0:_.call(t),i(If,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),i(Lf,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var w;return(w=t.screenTop)==null?void 0:w.call(t)},after:()=>{var w;return(w=t.screenBottom)==null?void 0:w.call(t)}})]}}});const rs=(n,e,t=!1)=>"activeMatch"in e?new RegExp(e.activeMatch,"u").test(n.path):gc(n,e.link)?!0:"children"in e&&!t?e.children.some(s=>rs(n,s)):!1,ou=(n,e)=>e.type==="group"?e.children.some(t=>t.type==="group"?ou(n,t):t.type==="page"&&rs(n,t,!0))||"prefix"in e&&gc(n,e.prefix):!1;var Rf=$({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=_e();return()=>vn(n.config.link)?i(Un,{class:["vp-sidebar-link","vp-sidebar-page",{active:rs(e,n.config,!0)}],exact:!0,config:n.config}):i("p",n,[i(Hn,{icon:n.config.icon}),n.config.text])}}),Of=$({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const t=_e(),s=b(()=>rs(t,n.config)),a=b(()=>rs(t,n.config,!0));return()=>{const{collapsible:l,children:o=[],icon:c,prefix:r,link:u,text:p}=n.config;return i("section",{class:"vp-sidebar-group"},[i(l?"button":"p",{class:["vp-sidebar-header",{clickable:l||u,exact:a.value,active:s.value}],...l?{type:"button",onClick:()=>e("toggle"),onKeydown:d=>{d.key==="Enter"&&e("toggle")}}:{}},[i(Hn,{icon:c}),u?i(Un,{class:"vp-sidebar-title",config:{text:p,link:u},noExternalLinkIcon:!0}):i("span",{class:"vp-sidebar-title"},p),l?i("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!l?i(iu,{key:r,config:o}):null])}}}),iu=$({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=_e(),t=J(-1),s=a=>{t.value=a===t.value?-1:a};return dn(()=>e.path,()=>{const a=n.config.findIndex(l=>ou(e,l));t.value=a},{immediate:!0,flush:"post"}),()=>i("ul",{class:"vp-sidebar-links"},n.config.map((a,l)=>i("li",a.type==="group"?i(Of,{config:a,open:l===t.value,onToggle:()=>s(l)}):i(Rf,{config:a}))))}}),Mf=$({name:"SideBar",slots:Object,setup(n,{slots:e}){const t=_e(),s=ln(),a=Kl(),l=jn();return bn(()=>{dn(()=>t.hash,o=>{const c=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${o}"]`);if(!c)return;const{top:r,height:u}=l.value.getBoundingClientRect(),{top:p,height:d}=c.getBoundingClientRect();p<r?c.scrollIntoView(!0):p+d>r+u&&c.scrollIntoView(!1)},{immediate:!0})}),()=>{var o,c,r;return i("aside",{ref:l,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}],key:"sidebar"},[(o=e.top)==null?void 0:o.call(e),((c=e.default)==null?void 0:c.call(e))||i(iu,{config:a.value}),(r=e.bottom)==null?void 0:r.call(e)])}}}),Jl=$({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const t=Je(),s=kn(),a=gn(),l=ln(),{isMobile:o,isPC:c}=xs(),[r,u]=el(!1),[p,d]=el(!1),h=Kl(),f=J(!1),k=b(()=>n.noNavbar||a.value.navbar===!1||l.value.navbar===!1?!1:!!(s.value.title||l.value.logo||l.value.repo||l.value.navbar)),_=b(()=>n.noSidebar?!1:a.value.sidebar!==!1&&h.value.length!==0&&!a.value.home),w=b(()=>n.noToc||a.value.home?!1:a.value.toc||l.value.toc!==!1&&a.value.toc!==!1),y={x:0,y:0},E=L=>{y.x=L.changedTouches[0].clientX,y.y=L.changedTouches[0].clientY},v=L=>{const q=L.changedTouches[0].clientX-y.x,N=L.changedTouches[0].clientY-y.y;Math.abs(q)>Math.abs(N)*1.5&&Math.abs(q)>40&&(q>0&&y.x<=80?u(!0):u(!1))},T=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let j=0;return Dn("scroll",E1(()=>{const L=T();L<=58||L<j?f.value=!1:j+200<L&&!r.value&&(f.value=!0),j=L},300,!0)),dn(o,L=>{L||u(!1)}),bn(()=>{const L=Ec(document.body);dn(r,N=>{L.value=N});const q=t.afterEach(()=>{u(!1)});gs(()=>{L.value=!1,q()})}),()=>i(be("GlobalEncrypt")?ce("GlobalEncrypt"):cc,()=>i("div",{class:["theme-container",{"no-navbar":!k.value,"no-sidebar":!_.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":w.value,"hide-navbar":f.value,"sidebar-collapsed":!o.value&&!c.value&&p.value,"sidebar-open":o.value&&r.value},n.containerClass,a.value.containerClass||""],onTouchStart:E,onTouchEnd:v},[k.value?i(Df,{onToggleSidebar:()=>u()},{startBefore:()=>{var L;return(L=e.navbarStartBefore)==null?void 0:L.call(e)},startAfter:()=>{var L;return(L=e.navbarStartAfter)==null?void 0:L.call(e)},centerBefore:()=>{var L;return(L=e.navbarCenterBefore)==null?void 0:L.call(e)},centerAfter:()=>{var L;return(L=e.navbarCenterAfter)==null?void 0:L.call(e)},endBefore:()=>{var L;return(L=e.navbarEndBefore)==null?void 0:L.call(e)},endAfter:()=>{var L;return(L=e.navbarEndAfter)==null?void 0:L.call(e)},screenTop:()=>{var L;return(L=e.navScreenTop)==null?void 0:L.call(e)},screenBottom:()=>{var L;return(L=e.navScreenBottom)==null?void 0:L.call(e)}}):null,i(Ue,{name:"fade"},()=>r.value?i("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),i(Ue,{name:"fade"},()=>o.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},i("span",{class:["arrow",p.value?"end":"start"]}))),i(Mf,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var L;return(L=e.sidebarTop)==null?void 0:L.call(e)},bottom:()=>{var L;return(L=e.sidebarBottom)==null?void 0:L.call(e)}}),e.default(),i(vf)]))}}),pn=$({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const t=a=>{a.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>i(n.type==="single"?Ue:_h,{name:"drop",appear:n.appear,onAppear:t,onAfterAppear:s,onEnter:t,onAfterEnter:s,onBeforeLeave:t},()=>e.default())}});const ll=({custom:n})=>i(lc,{class:["theme-hope-content",{custom:n}]});ll.displayName="MarkdownContent",ll.props={custom:Boolean};var Yl=ll;const ru=()=>i(rn,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));ru.displayName="AuthorIcon";const cu=()=>i(rn,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));cu.displayName="CalendarIcon";const uu=()=>i(rn,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));uu.displayName="CategoryIcon";const pu=()=>i(rn,{name:"eye"},()=>i("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));pu.displayName="EyeIcon";const du=()=>i(rn,{name:"fire"},()=>i("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));du.displayName="FireIcon";const hu=()=>i(rn,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));hu.displayName="PrintIcon";const fu=()=>i(rn,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));fu.displayName="TagIcon";const gu=()=>i(rn,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));gu.displayName="TimerIcon";const mu=()=>i(rn,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);mu.displayName="WordIcon";const Ae=()=>{const n=ln();return b(()=>n.value.metaLocales)};var jf=$({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=Ae();return()=>n.author.length?i("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(ru),i("span",n.author.map(t=>t.url?i("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):i("span",{class:"page-author-item"},t.name))),i("span",{property:"author",content:n.author.map(t=>t.name).join(", ")})]):null}}),Ff=$({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=Ae(),t=ut();return()=>n.category.length?i("span",{class:"page-category-info","aria-label":`${e.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(uu),n.category.map(({name:s,path:a})=>i("span",{class:["page-category-item",{[`category${ha(s,9)}`]:!n.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&t(a)}},s)),i("meta",{property:"articleSection",content:n.category.map(({name:s})=>s).join(",")})]):null}}),$f=$({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=Nl(),t=Ae();return()=>n.date?i("span",{class:"page-date-info","aria-label":`${t.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(cu),i("span",i(da,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),i("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),Nf=$({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=Ae();return()=>n.isOriginal?i("span",{class:"page-original-info"},e.value.origin):null}}),Hf=$({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(n){const e=_e(),t=Ae(),s=jn(),a=J(0);return F1(s,()=>{},{childList:!0}),()=>n.pageview?i("span",{class:"page-pageview-info","aria-label":`${t.value.views}${n.pure?"":"🔢"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(a.value<1e3?pu:du),i("span",{ref:s,id:"ArtalkPV",class:"vp-pageview waline-pageview-count","data-path":vn(n.pageview)?n.pageview:e.path,"data-page-key":vn(n.pageview)?n.pageview:e.path},"...")]):null}}),Vf=$({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Ae(),t=b(()=>{if(!n.readingTime)return null;const{minutes:s}=n.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=n.readingTimeLocale)!=null&&s.time?i("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(gu),i("span",(a=n.readingTimeLocale)==null?void 0:a.time),i("meta",{property:"timeRequired",content:t.value})]):null}}}),Bf=$({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=Ae(),t=ut();return()=>n.tag.length?i("span",{class:"page-tag-info","aria-label":`${e.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(fu),n.tag.map(({name:s,path:a})=>i("span",{class:["page-tag-item",{[`tag${ha(s,9)}`]:!n.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&t(a)}},s)),i("meta",{property:"keywords",content:n.tag.map(({name:s})=>s).join(",")})]):null}}),zf=$({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=Ae();return()=>{var t,s,a;return(t=n.readingTimeLocale)!=null&&t.words?i("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[i(mu),i("span",(s=n.readingTimeLocale)==null?void 0:s.words),i("meta",{property:"wordCount",content:(a=n.readingTime)==null?void 0:a.words})]):null}}}),ku=$({name:"PageInfo",components:{AuthorInfo:jf,CategoryInfo:Ff,DateInfo:$f,OriginalInfo:Nf,PageViewInfo:Hf,ReadingTimeInfo:Vf,TagInfo:Bf,WordInfo:zf},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=ct();return()=>n.items?i("div",{class:"page-info"},n.items.map(t=>i(ce(`${t}Info`),{...n.info,pure:e.value}))):null}}),qf=$({name:"PrintButton",setup(){const n=Ee(),e=ln();return()=>n.value.print===!1?null:i("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},i(hu))}}),vu=$({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const t=_e(),s=kn(),a=Ae(),[l,o]=el(),c=jn(),r=J("-1.7rem"),u=d=>{var h;(h=c.value)==null||h.scrollTo({top:d,behavior:"smooth"})},p=()=>{if(c.value){const d=document.querySelector(".vp-toc-item.active");d?r.value=`${d.getBoundingClientRect().top-c.value.getBoundingClientRect().top+c.value.scrollTop}px`:r.value="-1.7rem"}else r.value="-1.7rem"};return bn(()=>{dn(()=>t.hash,d=>{if(c.value){const h=document.querySelector(`#toc a.toc-link[href$="${d}"]`);if(!h)return;const{top:f,height:k}=c.value.getBoundingClientRect(),{top:_,height:w}=h.getBoundingClientRect();_<f?u(c.value.scrollTop+_-f):_+w>f+k&&u(c.value.scrollTop+_+w-f-k)}}),dn(()=>t.fullPath,p,{flush:"post",immediate:!0})}),()=>{var k,_;const d=({title:w,level:y,slug:E})=>i(Sn,{to:`#${E}`,class:["vp-toc-link",`level${y}`],onClick:()=>{o()}},()=>w),h=(w,y)=>w.length&&y>0?i("ul",{class:"vp-toc-list"},w.map(E=>{const v=h(E.children,y-1);return[i("li",{class:["vp-toc-item",{active:t.hash===`#${E.slug}`}]},d(E)),v?i("li",v):null]})):null,f=n.items.length?h(n.items,n.headerDepth):s.value.headers?h(s.value.headers,n.headerDepth):null;return f?i("div",{class:"vp-toc-placeholder"},[i("aside",{id:"toc"},[(k=e.before)==null?void 0:k.call(e),i("div",{class:"vp-toc-header",onClick:()=>{o()}},[a.value.toc,i(qf),i("div",{class:["arrow",l.value?"down":"end"]})]),i("div",{class:["vp-toc-wrapper",l.value?"open":""],ref:c},[f,i("div",{class:"vp-toc-marker",style:{top:r.value}})]),(_=e.after)==null?void 0:_.call(e)])]):null}}}),Xl=$({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=kn(),t=ln(),s=jn(),a=({target:l})=>{const o=document.querySelector(l.hash);if(o){const c=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",c)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",c),o.focus(),window.scrollTo(0,0)}};return bn(()=>{dn(()=>e.value.path,()=>s.value.focus())}),()=>[i("span",{ref:s,tabindex:"-1"}),i("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:a},t.value.routeLocales.skipToContent)]}});let Fa=null,$t=null;const Wf={wait:()=>Fa,pending:()=>{Fa=new Promise(n=>{$t=n})},resolve:()=>{$t==null||$t(),Fa=null,$t=null}},yu=()=>Wf;var bu=$({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:t,pending:s}=yu();return()=>i(Ue,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:s},()=>{var a;return(a=e.default)==null?void 0:a.call(e)})}});const Uf=(n,e)=>{const t=n.replace(e,"/").split("/"),s=[];let a=Ml(e);return t.forEach((l,o)=>{o!==t.length-1?(a+=`${l}/`,s.push({link:a,name:l||"Home"})):l!==""&&(a+=l,s.push({link:a,name:l}))}),s},wu=(n,{slots:e})=>{var d,h;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:l,description:o,image:c,imageDark:r,header:u,features:p=[]}=n;return i("div",{class:"vp-feature-wrapper"},[t?i("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?i("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-feature",style:l?{color:l}:{}},[((d=e.image)==null?void 0:d.call(e,n))||[c?i("img",{class:["vp-feature-image",{light:r}],src:En(c),alt:""}):null,r?i("img",{class:"vp-feature-image dark",src:En(r),alt:""}):null],((h=e.info)==null?void 0:h.call(e,n))||[u?i("h2",{class:"vp-feature-header"},u):null,o?i("p",{class:"vp-feature-description",innerHTML:o}):null],p.length?i("div",{class:"vp-features"},p.map(({icon:f,title:k,details:_,link:w})=>{const y=[i("h3",{class:"vp-feature-title"},[i(Hn,{icon:f}),i("span",{innerHTML:k})]),i("p",{class:"vp-feature-details",innerHTML:_})];return w?ts(w)?i("a",{class:"vp-feature-item link",href:w,"aria-label":k,target:"_blank"},y):i(Sn,{class:"vp-feature-item link",to:w,"aria-label":k},()=>y):i("div",{class:"vp-feature-item"},y)})):null])])};wu.displayName="FeaturePanel";var Ii=wu,Gf=$({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const t=gn(),s=Dt(),a=b(()=>t.value.heroFullScreen??!1),l=b(()=>{const{heroText:u,tagline:p}=t.value;return{text:u??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:a.value}}),o=b(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:h,heroImageStyle:f}=t.value;return{image:p?En(p):null,imageDark:d?En(d):null,style:f,alt:h||u||"",isFullScreen:a.value}}),c=b(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=t.value;return{image:vn(u)?En(u):null,imageDark:vn(p)?En(p):null,bgStyle:d,isFullScreen:a.value}}),r=b(()=>t.value.actions??[]);return()=>{var u,p,d;return i("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((u=e.heroBg)==null?void 0:u.call(e,c.value))||[c.value.image?i("div",{class:["vp-hero-mask",{light:c.value.imageDark}],style:[{"background-image":`url(${c.value.image})`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${c.value.imageDark})`},c.value.bgStyle]}):null],i("div",{class:"vp-hero-info"},[((p=e.heroImage)==null?void 0:p.call(e,o.value))||i(pn,{appear:!0,type:"group"},()=>[o.value.image?i("img",{key:"light",class:["vp-hero-image",{light:o.value.imageDark}],style:o.value.style,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?i("img",{key:"dark",class:"vp-hero-image dark",style:o.value.style,src:o.value.imageDark,alt:o.value.alt}):null]),((d=e.heroInfo)==null?void 0:d.call(e,l.value))??i("div",{class:"vp-hero-infos"},[l.value.text?i(pn,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},l.value.text)):null,l.value.tagline?i(pn,{appear:!0,delay:.08},()=>i("p",{id:"main-description",innerHTML:l.value.tagline})):null,r.value.length?i(pn,{appear:!0,delay:.12},()=>i("p",{class:"vp-hero-actions"},r.value.map(h=>i(Un,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>i(Hn,{icon:h.icon})}:{})))):null])])])}}});const _u=(n,{slots:e})=>{var h,f,k;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:l,description:o,image:c,imageDark:r,header:u,highlights:p=[],type:d="un-order"}=n;return i("div",{class:"vp-highlight-wrapper",style:l?{color:l}:{}},[t?i("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?i("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-highlight"},[((h=e.image)==null?void 0:h.call(e,n))||[c?i("img",{class:["vp-highlight-image",{light:r}],src:En(c),alt:""}):null,r?i("img",{class:"vp-highlight-image dark",src:En(r),alt:""}):null],((f=e.info)==null?void 0:f.call(e,n))||[i("div",{class:"vp-highlight-info-wrapper"},i("div",{class:"vp-highlight-info"},[u?i("h2",{class:"vp-highlight-header",innerHTML:u}):null,o?i("p",{class:"vp-highlight-description",innerHTML:o}):null,((k=e.highlights)==null?void 0:k.call(e,p))||i(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},p.map(({icon:_,title:w,details:y,link:E})=>{const v=[i(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[_?i(Hn,{class:"vp-highlight-icon",icon:_}):null,i("span",{innerHTML:w})]),y?i(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return i(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?ts(E)?i("a",{class:"vp-highlight-item link",href:E,"aria-label":w,target:"_blank"},v):i(Sn,{class:"vp-highlight-item link",to:E,"aria-label":w},()=>v):i("div",{class:"vp-highlight-item"},v))}))]))]])])};_u.displayName="HighlightPanel";var Kf=_u,Jf=$({name:"HomePage",slots:Object,setup(n,{slots:e}){const t=ct(),s=gn(),a=b(()=>{const{features:o}=s.value;return nl(o)?o:null}),l=b(()=>{const{highlights:o}=s.value;return nl(o)?o:null});return()=>{var o,c,r,u;return i("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(o=e.top)==null?void 0:o.call(e),i(Gf),((c=l.value)==null?void 0:c.map(p=>"features"in p?i(Ii,p):i(Kf,p)))||(a.value?i(pn,{appear:!0,delay:.24},()=>i(Ii,{features:a.value})):null),(r=e.center)==null?void 0:r.call(e),i(pn,{appear:!0,delay:.32},()=>i(Yl)),(u=e.bottom)==null?void 0:u.call(e)])}}}),Yf=$({name:"BreadCrumb",setup(){const n=kn(),e=he(),t=gn(),s=ln(),a=jn([]),l=b(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&a.value.length>1),o=b(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),c=()=>{const r=Uf(n.value.path,e.value).map(({link:u,name:p})=>{const{path:d,meta:h,notFound:f}=at(u);return f||h[Wn.breadcrumbExclude]?null:{title:h[Wn.shortTitle]||h[Wn.title]||p,icon:h[Wn.icon],path:d}}).filter(u=>u!==null);r.length>1&&(a.value=r)};return bn(()=>{dn(()=>n.value.path,c,{immediate:!0})}),()=>i("nav",{class:["vp-breadcrumb",{disable:!l.value}]},l.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((r,u)=>i("li",{class:{"is-active":a.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[i(Sn,{to:r.path,property:"item",typeof:"WebPage"},()=>[o.value?i(Hn,{icon:r.icon}):null,i("span",{property:"name"},r.title||"Unknown")]),i("meta",{property:"position",content:u+1})]))):[])}});const Ai=n=>n===!1||ys(n)?n:vn(n)?_t(n,!0):null,ol=(n,e,t)=>{const s=n.findIndex(a=>a.link===e);if(s!==-1){const a=n[s+t];return a!=null&&a.link?a:null}for(const a of n)if("children"in a){const l=ol(a.children,e,t);if(l)return l}return null};var Xf=$({name:"PageNav",setup(){const n=ln(),e=gn(),t=Kl(),s=kn(),a=ut(),l=b(()=>{const c=Ai(e.value.prev);return c===!1?null:c||(n.value.prevLink===!1?null:ol(t.value,s.value.path,-1))}),o=b(()=>{const c=Ai(e.value.next);return c===!1?null:c||(n.value.nextLink===!1?null:ol(t.value,s.value.path,1))});return Dn("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?o.value&&(a(o.value.link),c.preventDefault()):c.key==="ArrowLeft"&&l.value&&(a(l.value.link),c.preventDefault()))}),()=>l.value||o.value?i("nav",{class:"vp-page-nav"},[l.value?i(Un,{class:"prev",config:l.value},()=>{var c,r;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),n.value.metaLocales.prev]),i("div",{class:"link"},[i(Hn,{icon:(c=l.value)==null?void 0:c.icon}),(r=l.value)==null?void 0:r.text])]}):null,o.value?i(Un,{class:"next",config:o.value},()=>{var c,r;return[i("div",{class:"hint"},[n.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(c=o.value)==null?void 0:c.text,i(Hn,{icon:(r=o.value)==null?void 0:r.icon})])]}):null]):null}});const Qf={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Zf=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const l=Vl(n);let o;return a?o=a:l!==null&&(o=Qf[l]),o?o.replace(/:repo/u,Ke(n)?n:`https://github.com/${n}`).replace(/:branch/u,e).replace(/:path/u,Wr(`${Ml(t)}/${s}`)):null},ng=()=>{const n=ln(),e=kn(),t=gn();return b(()=>{const{repo:s,docsRepo:a=s,docsBranch:l="main",docsDir:o="",editLink:c,editLinkPattern:r=""}=n.value;if(!(t.value.editLink??c??!0)||!a)return null;const u=Zf({docsRepo:a,docsBranch:l,docsDir:o,editLinkPattern:r,filePathRelative:e.value.filePathRelative});return u?{text:n.value.metaLocales.editLink,link:u}:null})},eg=()=>{const n=Dt(),e=ln(),t=kn(),s=gn();return b(()=>{var a,l;return!(s.value.lastUpdated??e.value.lastUpdated??!0)||!((a=t.value.git)!=null&&a.updatedTime)?null:new Date((l=t.value.git)==null?void 0:l.updatedTime).toLocaleString(n.value.lang)})},tg=()=>{const n=ln(),e=kn(),t=gn();return b(()=>{var s;return t.value.contributors??n.value.contributors??!0?((s=e.value.git)==null?void 0:s.contributors)??null:null})};var sg=$({name:"PageTitle",setup(){const n=kn(),e=gn(),t=ln(),{info:s,items:a}=uf();return()=>i("div",{class:"vp-page-title"},[i("h1",[t.value.titleIcon===!1?null:i(Hn,{icon:e.value.icon}),n.value.title]),i(ku,{info:s.value,...a.value===null?{}:{items:a.value}}),i("hr")])}});const xu=()=>i(rn,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);xu.displayName="EditIcon";var ag=$({name:"PageMeta",setup(){const n=ln(),e=ng(),t=eg(),s=tg();return()=>{const{metaLocales:a}=n.value;return i("footer",{class:"vp-page-meta"},[e.value?i("div",{class:"vp-meta-item edit-link"},i(Un,{class:"vp-meta-label",config:e.value},{before:()=>i(xu)})):null,i("div",{class:"vp-meta-item git-info"},[t.value?i("div",{class:"update-time"},[i("span",{class:"vp-meta-label"},`${a.lastUpdated}: `),i(da,()=>i("span",{class:"vp-meta-info"},t.value))]):null,s.value&&s.value.length?i("div",{class:"contributors"},[i("span",{class:"vp-meta-label"},`${a.contributors}: `),s.value.map(({email:l,name:o},c)=>[i("span",{class:"vp-meta-info",title:`email: ${l}`},o),c!==s.value.length-1?",":""])]):null])])}}}),lg=$({name:"NormalPage",slots:Object,setup(n,{slots:e}){const t=gn(),{isDarkmode:s}=Es(),a=ln(),l=b(()=>t.value.toc||t.value.toc!==!1&&a.value.toc!==!1);return()=>i("main",{id:"main-content",class:"vp-page"},i(be("LocalEncrypt")?ce("LocalEncrypt"):cc,()=>{var o,c,r,u;return[(o=e.top)==null?void 0:o.call(e),t.value.cover?i("div",{class:"page-cover"},i("img",{src:En(t.value.cover),alt:"","no-view":""})):null,i(Yf),i(sg),l.value?i(vu,{headerDepth:t.value.headerDepth??a.value.headerDepth??2},{before:()=>{var p;return(p=e.tocBefore)==null?void 0:p.call(e)},after:()=>{var p;return(p=e.tocAfter)==null?void 0:p.call(e)}}):null,(c=e.contentBefore)==null?void 0:c.call(e),i(Yl),(r=e.contentAfter)==null?void 0:r.call(e),i(ag),i(Xf),be("CommentService")?i(ce("CommentService"),{darkmode:s.value}):null,(u=e.bottom)==null?void 0:u.call(e)]}))}}),og=$({name:"Layout",slots:Object,setup(n,{slots:e}){const t=Ee(),s=ln(),a=kn(),l=gn(),{isMobile:o}=xs(),c=b(()=>{var r,u;return((r=s.value.blog)==null?void 0:r.sidebarDisplay)||((u=t.value.blog)==null?void 0:u.sidebarDisplay)||"mobile"});return()=>[i(Xl),i(Jl,{},{default:()=>{var r;return((r=e.default)==null?void 0:r.call(e))||(l.value.home?i(Jf):i(bu,()=>i(lg,{key:a.value.path},{top:()=>{var u;return(u=e.top)==null?void 0:u.call(e)},bottom:()=>{var u;return(u=e.bottom)==null?void 0:u.call(e)},contentBefore:()=>{var u;return(u=e.contentBefore)==null?void 0:u.call(e)},contentAfter:()=>{var u;return(u=e.contentAfter)==null?void 0:u.call(e)},tocBefore:()=>{var u;return(u=e.tocBefore)==null?void 0:u.call(e)},tocAfter:()=>{var u;return(u=e.tocAfter)==null?void 0:u.call(e)}})))},...c.value==="none"?{}:{navScreenBottom:()=>i(ce("BloggerInfo"))},...!o.value&&c.value==="always"?{sidebar:()=>i(ce("BloggerInfo"))}:{}})]}}),ig=$({name:"NotFoundHint",setup(){const n=ln(),e=()=>{const t=n.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},e())])}}),rg=$({name:"NotFound",slots:Object,setup(n,{slots:e}){const t=Je(),s=he(),a=ln();return()=>[i(Xl),i(Jl,{noSidebar:!0},()=>{var l;return i("main",{id:"main-content",class:"vp-page not-found"},((l=e.default)==null?void 0:l.call(e))||[i(ig),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>{t.push(a.value.home??s.value)}},a.value.routeLocales.home)])])})]}});const cg={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},ug={category:{"/":{path:"/category/",map:{}},"/en/":{path:"/en/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}},"/en/":{path:"/en/tag/",map:{}}}},Eu=["/study/java/kd.html","/study/game/unity-camera.html","/study/go/util.html","/study/go/try.html","/plugins/rocket-cat.html","/study/go/difficult.html","/study/go/design-mode.html","/util/dev.html","/plugins/request-tool.html","/study/game/design/chess.html","/study/web/","/study/web/css.html","/plugins/rs-orm.html","/util/","/util/common.html","/study/game/","/study/go/","/study/java/","/study/linux/","/study/try/","/plugins/","/study/","/plugins/io-game.html","/study/go/qiniu.html","/study/try/antlr.html","/study/go/socket.html","/study/go/ssh.html","/blog/desc.html","/plugins/gorm.html","/plugins/vue-admin.html","/blog/video.html","/study/go/wails.html","/study/go/gin.html","/study/go/gorm.html","/study/game/cocos.html","/study/game/game.html","/study/game/godot.html","/study/java/hutool.html","/plugins/java-orm.html","/study/try/rust.html","/study/java/io-game.html","/study/java/maven.html","/study/web/vite.html","/study/go/go.html","/study/try/python.html","/study/java/java.html","/study/linux/mysql.html","/study/linux/nginx.html","/study/web/axios.html","/study/java/protostuff.html","/study/try/flutter.html","/study/java/spring-boot.html","/study/web/vue.html","/study/linux/shell.html","/study/web/electron.html","/study/linux/server.html","/study/linux/linux.html","/util/idea.html","/study/java/mybatis.html","/study/game/unity.html","/study/linux/docker.html","/study/java/redisson.html","/study/java/transaction.html","/study/java/design-mode/proxy.html","/study/java/mqtt.html","/study/java/rocket-mq.html","/study/web/node.html","/study/linux/git.html","/study/java/data-struct.html","/study/java/spring-cloud-alibaba.html","/study/java/spring-cloud.html","/study/java/design-mode/design-mode.html","/blog/","/blog/random.html","/blog/body.html","/study/java/spring-boot-demo.html","/en/english/day19.html","/en/english/day18.html","/en/english/day17.html","/en/english/day16.html","/en/english/day14.html","/en/english/day13.html","/en/english/day15.html","/en/english/day12.html","/en/english/day11.html","/en/english/day10.html","/en/english/day9.html","/en/english/study.html","/en/english/day8.html","/en/english/day7.html","/en/english/day6.html","/en/english/day5.html","/en/english/day4.html","/en/english/day3.html","/en/english/day2.html","/en/english/","/en/english/day1.html","/en/plugins/","/en/plugins/gorm.html","/en/plugins/vue-admin.html","/en/plugins/jorm.html"],il=jn(ug);it(il);const Lu=n=>{const e=kn(),t=gn(),s=he();return b(()=>{var c;const a=n??((c=t.value.blog)==null?void 0:c.key)??"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!il.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const l=il.value[a][s.value],o={path:l.path,map:{}};for(const r in l.map){const u=l.map[r];o.map[r]={path:u.path,items:[]};for(const p of u.indexes){const{path:d,meta:h}=at(Eu[p]);o.map[r].items.push({path:d,info:h})}e.value.path===u.path&&(o.currentItems=o.map[r].items)}return o})},pg={article:{"/":{path:"/article/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]},"/en/":{path:"/en/article/",indexes:[76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]}},star:{"/":{path:"/star/",indexes:[]},"/en/":{path:"/en/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]},"/en/":{path:"/en/timeline/",indexes:[76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]}}},rl=jn(pg);it(rl);const ga=n=>{const e=gn(),t=he();return b(()=>{var o;const s=n??((o=e.value.blog)==null?void 0:o.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!rl.value[s])throw new Error(`useBlogType: key ${n} is invalid`);const a=rl.value[s][t.value],l={path:a.path,items:[]};for(const c of a.indexes){const{path:r,meta:u}=at(Eu[c]);l.items.push({path:r,info:u})}return l})},Ql=()=>i(rn,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Ql.displayName="LockIcon";var dg=[];const Tu=Symbol.for("categoryMap"),Ls=()=>{const n=yn(Tu);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},hg=()=>{const n=Lu("category");ue(Tu,n)},Ts=()=>{const n=Ee(),e=ln();return b(()=>({...n.value.blog,...e.value.blog}))},Cu=Symbol.for("tagMap"),Cs=()=>{const n=yn(Cu);if(!n)throw new Error("useTagMap() is called without provider.");return n},fg=()=>{const n=Lu("tag");ue(Cu,n)},gg=n=>{const e=ln();return b(()=>{const{[Nn.author]:t}=n.value;return t?is(t):t===!1?[]:is(e.value.author,!1)})},mg=n=>{const e=Ls();return b(()=>vc(n.value[Nn.category]).map(t=>({name:t,path:e.value.map[t].path})))},kg=n=>{const e=Cs();return b(()=>yc(n.value[Nn.tag]).map(t=>({name:t,path:e.value.map[t].path})))},vg=n=>b(()=>{const{[Nn.date]:e}=n.value;return Hl(e)}),yg=n=>{const e=Pt(n,"info"),t=Ts(),s=gg(e),a=mg(e),l=kg(e),o=vg(e),c=Nc(),r=b(()=>({author:s.value,category:a.value,date:o.value,localizedDate:e.value[Nn.localizedDate]||"",tag:l.value,isOriginal:e.value[Nn.isOriginal]||!1,readingTime:e.value[Nn.readingTime]||null,readingTimeLocale:e.value[Nn.readingTime]&&c.value?$c(e.value[Nn.readingTime],c.value):null,pageview:n.path})),u=b(()=>t.value.articleInfo);return{info:r,items:u}},Su=Symbol(""),Ss=()=>{const n=yn(Su);if(!n)throw new Error("useArticles() is called without provider.");return n},bg=()=>{const n=ga("article");ue(Su,n)},Iu=Symbol(""),Zl=()=>{const n=yn(Iu);if(!n)throw new Error("useStars() is called without provider.");return n},wg=()=>{const n=ga("star");ue(Iu,n)},Au=Symbol(""),no=()=>{const n=yn(Au);if(!n)throw new Error("useTimelines() is called without provider.");return n},_g=()=>{const n=ga("timeline"),e=b(()=>{const t=[];return n.value.items.forEach(({info:s,path:a})=>{const l=Hl(s[Nn.date]);if(l){const o=l.getFullYear(),c=l.getMonth()+1,r=l.getDate();(!t[0]||t[0].year!==o)&&t.unshift({year:o,items:[]}),t[0].items.push({date:`${c}/${r}`,info:s,path:a})}}),{...n.value,config:t.reverse()}});ue(Au,e)},xg=()=>{bg(),hg(),wg(),fg(),_g()};var Eg=$({name:"SocialMedia",setup(){const n=Ts(),e=ct(),t=b(()=>{const s=n.value.medias;return s?Rt(s).map(([a,l])=>({name:a,icon:cg[a],url:l})):[]});return()=>t.value.length?i("div",{class:"vp-social-medias"},t.value.map(({name:s,icon:a,url:l})=>i("a",{class:"vp-social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":s,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),eo=$({name:"BloggerInfo",setup(){const n=Ts(),e=Dt(),t=ln(),s=Ss(),a=Ls(),l=Cs(),o=no(),c=ut(),r=b(()=>{var h;return n.value.name||((h=is(t.value.author)[0])==null?void 0:h.name)||e.value.title}),u=b(()=>n.value.avatar||t.value.logo),p=b(()=>t.value.blogLocales),d=b(()=>n.value.intro);return()=>{const{article:h,category:f,tag:k,timeline:_}=p.value,w=[[s.value.path,s.value.items.length,h],[a.value.path,de(a.value.map).length,f],[l.value.path,de(l.value.map).length,k],[o.value.path,o.value.items.length,_]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>c(d.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:En(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,r.value?i("div",{class:"vp-blogger-name",property:"name"},r.value):null,n.value.description?i("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,d.value?i("meta",{property:"url",content:En(d.value)}):null]),i("div",{class:"vp-blog-counts"},w.map(([y,E,v])=>i(Sn,{class:"vp-blog-count",to:y},()=>[i("div",{class:"count"},E),i("div",v)]))),i(Eg)])}}});const to=()=>i(rn,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));to.displayName="CategoryIcon";const so=()=>i(rn,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));so.displayName="TagIcon";const ao=()=>i(rn,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));ao.displayName="TimelineIcon";const Pu=()=>i(rn,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Pu.displayName="SlideIcon";const Du=()=>i(rn,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Du.displayName="StickyIcon";const ma=()=>i(rn,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ma.displayName="ArticleIcon";const Ru=()=>i(rn,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Ru.displayName="BookIcon";const Ou=()=>i(rn,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));Ou.displayName="LinkIcon";const Mu=()=>i(rn,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Mu.displayName="ProjectIcon";const ju=()=>i(rn,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));ju.displayName="FriendIcon";const cl=()=>i(rn,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));cl.displayName="SlideDownIcon";const Fu=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Fu.displayName="EmptyIcon";var Lg=$({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const t=Pt(n,"info"),{info:s,items:a}=yg(n);return()=>{var h,f,k;const{[Wn.title]:l,[Nn.type]:o,[Nn.isEncrypted]:c=!1,[Nn.cover]:r,[Nn.excerpt]:u,[Nn.sticky]:p}=t.value,d=s.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=e.cover)==null?void 0:h.call(e,{cover:r}))||(r?[i("img",{class:"vp-article-cover",src:En(r),alt:"",loading:"lazy"}),i("meta",{property:"image",content:En(r)})]:[]),p?i(Du):null,i(Sn,{to:n.path},()=>{var _;return((_=e.title)==null?void 0:_.call(e,{title:l,isEncrypted:c,type:o}))||i("header",{class:"vp-article-title"},[c?i(Ql):null,o===qc.slide?i(Pu):null,i("span",{property:"headline"},l)])}),((f=e.excerpt)==null?void 0:f.call(e,{excerpt:u}))||(u?i("div",{class:"vp-article-excerpt",innerHTML:u}):null),i("hr",{class:"vp-article-hr"}),((k=e.info)==null?void 0:k.call(e,{info:d}))||i(ku,{info:d,...a.value?{items:a.value}:{}})]))}}}),Tg=$({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let t;const s=ln(),a=J(""),l=b(()=>s.value.paginationLocales),o=b(()=>Math.ceil(n.total/n.perPage)),c=b(()=>!!o.value&&o.value!==1),r=b(()=>o.value<7?!1:n.current>4),u=b(()=>o.value<7?!1:n.current<o.value-3),p=b(()=>{const{current:f}=n;let k=1,_=o.value;const w=[];o.value>=7&&(f<=4&&f<o.value-3?(k=1,_=5):f>4&&f>=o.value-3?(_=o.value,k=o.value-4):o.value>7&&(k=f-2,_=f+2));for(let y=k;y<=_;y++)w.push(y);return w}),d=f=>e("updateCurrentPage",f),h=f=>{const k=parseInt(f,10);k<=o.value&&k>0?d(k):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/gu,o.value.toString())}`)};return bn(()=>{t=new c1}),()=>i("div",{class:"vp-pagination"},c.value?i("nav",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[n.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(n.current-1)},l.value.prev):null,r.value?[i("div",{role:"navigation",onClick:()=>d(1)},1),i("div",{class:"ellipsis"},"...")]:null,p.value.map(f=>i("div",{key:f,class:{active:n.current===f},role:"navigation",onClick:()=>d(f)},f)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>d(o.value)},o.value)]:null,n.current<o.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(n.current+1)},l.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${l.value.navigate}: `),i("input",{id:"navigation-text",value:a.value,onInput:({target:f})=>{a.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),h(a.value))}}),i("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:l.value.action,onClick:()=>h(a.value)},l.value.action)])]):[])}}),lo=$({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=_e(),t=Je(),s=Ts(),a=J(1),l=b(()=>s.value.articlePerPage||10),o=b(()=>n.items.slice((a.value-1)*l.value,a.value*l.value)),c=async r=>{a.value=r;const u={...e.query};!(u.page===r.toString()||r===1&&!u.page)&&(r===1?delete u.page:u.page=r.toString(),await t.push({path:e.path,query:u}))};return bn(()=>{const{page:r}=e.query;c(r?Number(r):1),dn(a,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>i("div",{id:"article-list",class:"vp-article-list",role:"feed"},o.value.length?[...o.value.map(({info:r,path:u},p)=>i(pn,{appear:!0,delay:p*.04},()=>i(Lg,{key:u,info:r,path:u}))),i(Tg,{current:a.value,perPage:l.value,total:n.items.length,onUpdateCurrentPage:c})]:i(Fu))}}),$u=$({name:"CategoryList",setup(){const n=kn(),e=Ls();return()=>i("ul",{class:"vp-category-list"},Rt(e.value.map).sort(([,t],[,s])=>s.items.length-t.items.length).map(([t,{path:s,items:a}])=>i("li",{class:["vp-category",`vp-category${ha(t,9)}`,{active:s===n.value.path}]},i(Sn,{to:s},()=>[t,i("span",{class:"count"},a.length)]))))}}),Nu=$({name:"TagList",setup(){const n=gn(),e=Cs(),t=s=>{var a;return s===((a=n.value.blog)==null?void 0:a.name)};return()=>i("ul",{class:"tag-list-wrapper"},Rt(e.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:l}])=>i("li",{class:["tag",`tag${ha(s,9)}`,{active:t(s)}]},i(Sn,{to:a},()=>[s,i("span",{class:"tag-num"},l.length)]))))}}),Cg=$({name:"TimelineList",setup(){const n=ln(),e=no(),t=ut(),s=b(()=>n.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>t(e.value.path)},[i(ao),i("span",{class:"num"},e.value.items.length),s.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},e.value.config.map(({year:a,items:l},o)=>i(pn,{appear:!0,delay:.08*(o+1)},()=>i("li",[i("h3",{class:"timeline-year"},a),i("ul",{class:"timeline-year-wrapper"},l.map(({date:c,info:r,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Sn,{class:"timeline-title",to:u},()=>r[Wn.title])])))])))))])}});const Sg={article:ma,category:to,tag:so,timeline:ao};var Hu=$({name:"InfoList",setup(){const n=ln(),e=Ss(),t=Ls(),s=b(()=>de(t.value.map).length),a=Zl(),l=Cs(),o=b(()=>de(l.value.map).length),c=ut(),r=J("article"),u=b(()=>n.value.blogLocales);return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},Rt(Sg).map(([p,d])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{r.value=p}},i("div",{class:["icon-wrapper",{active:r.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},i(d))))),i(pn,()=>r.value==="article"?i("div",{class:"vp-star-article-wrapper"},[i("div",{class:"title",onClick:()=>c(e.value.path)},[i(ma),i("span",{class:"num"},e.value.items.length),u.value.article]),i("hr"),a.value.items.length?i("ul",{class:"vp-star-articles"},a.value.items.map(({info:p,path:d},h)=>i(pn,{appear:!0,delay:.08*(h+1)},()=>i("li",{class:"vp-star-article"},i(Sn,{to:d},()=>p[Wn.title]))))):i("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):r.value==="category"?i("div",{class:"vp-category-wrapper"},[s.value?[i("div",{class:"title",onClick:()=>c(t.value.path)},[i(to),i("span",{class:"num"},s.value),u.value.category]),i("hr"),i(pn,{delay:.04},()=>i($u))]:i("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):r.value==="tag"?i("div",{class:"vp-tag-wrapper"},[o.value?[i("div",{class:"title",onClick:()=>c(l.value.path)},[i(so),i("span",{class:"num"},o.value),u.value.tag]),i("hr"),i(pn,{delay:.04},()=>i(Nu))]:i("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):i(pn,()=>i(Cg)))])}}),ka=$({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:t}=xs();return()=>[i(Xl),i(Jl,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>i(eo),...t.value?{sidebar:()=>i(Hu)}:{}})]}});const Vu=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(pn,()=>i(eo)),i(pn,{delay:.04},()=>i(Hu))]);Vu.displayName="InfoPanel";var va=Vu,Ig=$({name:"BlogPage",setup(){const n=kn(),e=gn(),t=Ls(),s=Cs();return()=>{const{key:a="",name:l=""}=e.value.blog||{},o=l?a==="category"?t.value.map[l].items:a==="tag"?s.value.map[l].items:[]:[];return i(ka,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(pn,()=>a==="category"?i($u):a==="tag"?i(Nu):null),l?i(pn,{appear:!0,delay:.24},()=>i(lo,{key:n.value.path,items:o})):null]),i(pn,{delay:.16},()=>i(va,{key:"blog"}))])))}}});const Ag="//theme-hope-assets.vuejs.press/hero/default.jpg";var Pg=$({name:"BlogHero",slots:Object,setup(n,{slots:e}){const t=gn(),s=Dt(),a=jn(),l=b(()=>t.value.heroFullScreen??!1),o=b(()=>{const{heroText:r,heroImage:u,heroImageDark:p,heroAlt:d,heroImageStyle:h,tagline:f}=t.value;return{text:r??s.value.title??"Hello",tagline:f??"",image:u?En(u):null,imageDark:p?En(p):null,alt:d||r||"",style:h,isFullScreen:l.value}}),c=b(()=>{const{bgImage:r,bgImageDark:u,bgImageStyle:p}=t.value;return{image:vn(r)?En(r):r===!1?null:Ag,imageDark:vn(u)?En(u):null,bgStyle:p,isFullScreen:l.value}});return()=>{var r,u;return t.value.hero===!1?null:i("div",{ref:a,class:["vp-blog-hero",{fullscreen:l.value,"no-bg":!c.value.image}]},[((r=e.heroBg)==null?void 0:r.call(e,c.value))||[c.value.image?i("div",{class:["vp-blog-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-blog-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((u=e.heroInfo)==null?void 0:u.call(e,o.value))||[i(pn,{appear:!0,type:"group",delay:.04},()=>[o.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:o.value.imageDark}],style:o.value.style,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:o.value.style,src:o.value.imageDark,alt:o.value.alt}):null]),i(pn,{appear:!0,delay:.08},()=>o.value.text?i("h1",{class:"vp-blog-hero-title"},o.value.text):null),i(pn,{appear:!0,delay:.12},()=>o.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:o.value.tagline}):null)],o.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[i(cl),i(cl)]):null])}}});const Dg=["link","article","book","project","friend"];var Rg=$({name:"ProjectPanel",components:{ArticleIcon:ma,BookIcon:Ru,FriendIcon:ju,LinkIcon:Ou,ProjectIcon:Mu},props:{items:{type:Array,required:!0}},setup(n){const e=ct(),t=ut(),s=(a="",l="icon")=>Dg.includes(a)?i(ce(`${a}-icon`)):Ke(a)?i("img",{class:"vp-project-image",src:a,alt:l}):ws(a)?i("img",{class:"vp-project-image",src:En(a),alt:l}):i(Hn,{icon:a});return()=>i("div",{class:"vp-project-panel"},n.items.map(({icon:a,link:l,name:o,desc:c},r)=>i("div",{class:["vp-project-card",{[`project${r%9}`]:!e.value}],onClick:()=>t(l)},[s(a,o),i("div",{class:"vp-project-name"},o),i("div",{class:"vp-project-desc"},c)])))}}),Og=$({name:"BlogHome",setup(){const n=Ss(),e=gn(),t=b(()=>e.value.projects??[]);return()=>i("div",{class:"vp-page vp-blog"},[i(Pg),i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[t.value.length?i(pn,{appear:!0,delay:.16},()=>i(Rg,{items:t.value})):null,i(pn,{appear:!0,delay:.24},()=>i(lo,{items:n.value.items}))]),i(pn,{appear:!0,delay:.16},()=>i(va,{key:"blog"}))]),i(pn,{appear:!0,delay:.28},()=>i(Yl))])}});const Bu=()=>i(ka,()=>i(Og));Bu.displayName="BlogHomeLayout";var Mg=Bu,jg=$({name:"ArticleType",setup(){const n=kn(),e=he(),t=ln(),s=Ss(),a=Zl(),l=b(()=>{const o=t.value.blogLocales;return[{text:o.all,path:s.value.path},{text:o.star,path:a.value.path},...dg.map(({key:c,path:r})=>({text:o[c],path:r.replace(/^\//,e.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},l.value.map(o=>i("li",{class:["vp-article-type",{active:o.path===n.value.path}]},i(Sn,{to:o.path},()=>o.text))))}}),Fg=$({name:"BlogPage",setup(){const n=ga(),e=gn(),t=kn(),s=Ss(),a=Zl(),l=b(()=>{const{key:o="",type:c}=e.value.blog||{};return o==="star"?a.value.items:c==="type"&&o?n.value.items:s.value.items});return()=>i(ka,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(pn,()=>i(jg)),i(pn,{appear:!0,delay:.24},()=>i(lo,{key:t.value.path,items:l.value}))]),i(pn,{delay:.16},()=>i(va,{key:"blog"}))])))}}),$g=$({name:"TimelineItems",setup(){const n=Ts(),e=ln(),t=no(),s=b(()=>n.value.timeline||e.value.blogLocales.timelineTitle),a=b(()=>t.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(pn,()=>i("li",{class:"motto"},s.value)),i(vu,{items:a.value}),t.value.config.map(({year:l,items:o},c)=>i(pn,{appear:!0,delay:.08*(c+1),type:"group"},()=>[i("h3",{key:"title",id:l,class:"timeline-year-title"},i("span",l)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},o.map(({date:r,info:u,path:p})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},r),i(Sn,{class:"timeline-title",to:p},()=>u[Wn.title])])))])]))]))}});const zu=()=>i(ka,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(pn,{appear:!0,delay:.24},()=>i($g))]),i(pn,{delay:.16},()=>i(va,{key:"blog"}))])));zu.displayName="Timeline";var Ng=zu,Hg={};const ft="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),$a=Array.from({length:64},(n,e)=>e),zs=n=>Array(n).fill(-1),Me=[...zs(46),0,1,...$a.slice(54,64),...zs(7),...$a.slice(2,28),...zs(6),...$a.slice(28,54),...zs(5)],Pi=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Di=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],qu=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],ul=(n,e)=>{if(e<=0||e>n.length)throw Error(`Illegal len: ${e}`);let t=0,s,a;const l=[];for(;t<e;){if(s=n[t++]&255,l.push(ft[s>>2&63]),s=(s&3)<<4,t>=e){l.push(ft[s&63]);break}if(a=n[t++]&255,s|=a>>4&15,l.push(ft[s&63]),s=(a&15)<<2,t>=e){l.push(ft[s&63]);break}a=n[t++]&255,s|=a>>6&3,l.push(ft[s&63]),l.push(ft[a&63])}return l.join("")},Vg=(n,e)=>{if(e<=0)throw Error(`Illegal len: ${e}`);const t=n.length;let s=0,a=0,l,o,c,r,u,p;const d=[];for(;s<t-1&&a<e&&(p=n.charCodeAt(s++),l=p<Me.length?Me[p]:-1,p=n.charCodeAt(s++),o=p<Me.length?Me[p]:-1,!(l==-1||o==-1||(u=l<<2>>>0,u|=(o&48)>>4,d.push(String.fromCharCode(u)),++a>=e||s>=t)||(p=n.charCodeAt(s++),c=p<Me.length?Me[p]:-1,c==-1)||(u=(o&15)<<4>>>0,u|=(c&60)>>2,d.push(String.fromCharCode(u)),++a>=e||s>=t)));)p=n.charCodeAt(s++),r=p<Me.length?Me[p]:-1,u=(c&3)<<6>>>0,u|=r,d.push(String.fromCharCode(u)),++a;return d.map(h=>h.charCodeAt(0))},Bg=(n,e)=>{let t=null;for(typeof n=="number"&&(t=n,n=()=>null);t!==null||(t=n())!==null;)t<128?e(t&127):t<2048?(e(t>>6&31|192),e(t&63|128)):t<65536?(e(t>>12&15|224),e(t>>6&63|128),e(t&63|128)):(e(t>>18&7|240),e(t>>12&63|128),e(t>>6&63|128),e(t&63|128)),t=null},zg=(n,e)=>{let t,s=null;for(;(t=s!==null?s:n())!==null;){if(t>=55296&&t<=57343&&(s=n())!==null&&s>=56320&&s<=57343){e((t-55296)*1024+s-56320+65536),s=null;continue}e(t)}s!==null&&e(s)},qg=(n,e)=>{zg(n,function(t){Bg(t,e)})},Wg=typeof process=="object"&&Hg.NEXT_RUNTIME==="edge"?setTimeout:typeof setImmediate=="function"?setImmediate:typeof process=="object"&&typeof process.nextTick=="function"?process.nextTick:setTimeout,Ug=n=>{const e=[];let t=0;return qg(()=>t>=n.length?null:n.charCodeAt(t++),s=>{e.push(s)}),e},cs=(n,e,t,s)=>{let a,l=n[e],o=n[e+1];return l^=t[0],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[1],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[2],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[3],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[4],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[5],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[6],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[7],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[8],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[9],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[10],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[11],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[12],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[13],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[14],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[15],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[16],n[e]=o^t[17],n[e+1]=l,n},mt=(n,e)=>{let t=0;for(let s=0;s<4;++s)t=t<<8|n[e]&255,e=(e+1)%n.length;return{key:t,offp:e}},Ri=(n,e,t)=>{const s=e.length,a=t.length;let l=0,o=[0,0],c;for(let r=0;r<s;r++)c=mt(n,l),l=c.offp,e[r]=e[r]^c.key;for(let r=0;r<s;r+=2)o=cs(o,0,e,t),e[r]=o[0],e[r+1]=o[1];for(let r=0;r<a;r+=2)o=cs(o,0,e,t),t[r]=o[0],t[r+1]=o[1]},Gg=(n,e,t,s)=>{const a=t.length,l=s.length;let o=0,c=[0,0],r;for(let u=0;u<a;u++)r=mt(e,o),o=r.offp,t[u]=t[u]^r.key;o=0;for(let u=0;u<a;u+=2)r=mt(n,o),o=r.offp,c[0]^=r.key,r=mt(n,o),o=r.offp,c[1]^=r.key,c=cs(c,0,t,s),t[u]=c[0],t[u+1]=c[1];for(let u=0;u<l;u+=2)r=mt(n,o),o=r.offp,c[0]^=r.key,r=mt(n,o),o=r.offp,c[1]^=r.key,c=cs(c,0,t,s),s[u]=c[0],s[u+1]=c[1]},Oi=(n,e,t,s,a)=>{const l=qu.slice(),o=l.length;if(t<4||t>31){const h=new Error(`Illegal number of rounds (4-31): ${t}`);if(s===!1)return Promise.reject(h);throw h}if(e.length!==16){const h=new Error(`Illegal salt length: ${e.length} != 16`);if(s===!1)return Promise.reject(h);throw h}t=1<<t>>>0;let c,r,u=0,p;Int32Array?(c=new Int32Array(Pi),r=new Int32Array(Di)):(c=Pi.slice(),r=Di.slice()),Gg(e,n,c,r);const d=()=>{if(a&&a(u/t),u<t){const h=Date.now();for(;u<t&&(u=u+1,Ri(n,c,r),Ri(e,c,r),!(Date.now()-h>100)););}else{for(u=0;u<64;u++)for(p=0;p<o>>1;p++)cs(l,p<<1,c,r);const h=[];for(u=0;u<o;u++)h.push((l[u]>>24&255)>>>0),h.push((l[u]>>16&255)>>>0),h.push((l[u]>>8&255)>>>0),h.push((l[u]&255)>>>0);return s===!1?Promise.resolve(h):h}if(s===!1)return new Promise(h=>Wg(()=>{d().then(h)}))};if(s===!1)return d();{let h;for(;;)if(typeof(h=d())<"u")return h||[]}},Kg=n=>{try{let e;typeof window<"u"?e=window.crypto??window.msCrypto:e=globalThis.crypto;const t=new Uint32Array(n);return e==null||e.getRandomValues(t),Array.from(t)}catch{throw Error("WebCryptoAPI is not available")}},Jg=(n=10)=>{if(typeof n!="number")throw Error("Illegal arguments: "+typeof n);n<4?n=4:n>31&&(n=31);const e=[];return e.push("$2a$"),n<10&&e.push("0"),e.push(n.toString()),e.push("$"),e.push(ul(Kg(16),16)),e.join("")};function Yg(n,e,t,s){if(typeof n!="string"||typeof e!="string"){const f=new Error("Invalid string / salt: Not a string");if(t===!1)return Promise.reject(f);throw f}let a,l;if(e.charAt(0)!=="$"||e.charAt(1)!=="2"){const f=new Error("Invalid salt version: "+e.substring(0,2));if(t===!1)return Promise.reject(f);throw f}if(e.charAt(2)==="$")a="\0",l=3;else{if(a=e.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||e.charAt(3)!=="$"){const f=Error("Invalid salt revision: "+e.substring(2,4));if(t===!1)return Promise.reject(f);throw f}l=4}if(e.charAt(l+2)>"$"){const f=new Error("Missing salt rounds");if(t===!1)return Promise.reject(f);throw f}const o=parseInt(e.substring(l,l+1),10)*10,c=parseInt(e.substring(l+1,l+2),10),r=o+c,u=e.substring(l+3,l+25);n+=a>="a"?"\0":"";const p=Ug(n),d=Vg(u,16),h=f=>{const k=[];return k.push("$2"),a>="a"&&k.push(a),k.push("$"),r<10&&k.push("0"),k.push(r.toString()),k.push("$"),k.push(ul(d,d.length)),k.push(ul(f,qu.length*4-1)),k.join("")};return t===!1?Oi(p,d,r,!1,s).then(f=>h(f)):h(Oi(p,d,r,!0,s))}const Xg=(n,e=10)=>{if(typeof e=="number"&&(e=Jg(e)),typeof n!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof e);return Yg(n,e,!0)},pl=(n,e)=>{if(typeof n!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof n+", "+typeof e);return e.length!==60?!1:Xg(n,e.substring(0,e.length-31))===e};var Wu=$({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(n,{emit:e}){const t=gn(),s=ln(),a=J(""),l=J(!1),o=J(!1),c=b(()=>s.value.encryptLocales);let r=null;const u=()=>{r&&clearTimeout(r),l.value=!1,e("verify",a.value,o.value),Ge().then(()=>{l.value=!0,r=setTimeout(()=>{l.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:n.full||t.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:l.value}]},l.value?c.value.errorHint:i(Ql,{"aria-label":c.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:a.value,placeholder:c.value.placeholder,onInput:({target:p})=>{a.value=p.value},onKeydown:({key:p})=>{p==="Enter"&&u()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:o.value,onChange:()=>o.value=!o.value}),c.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>u()},"OK")]))}});const Uu=()=>{const n=Ee();return b(()=>n.value.encrypt||{})},Mi="VUEPRESS_HOPE_GLOBAL_TOKEN",Qg=()=>{const n=Uu(),e=fa(Mi,""),t=Lc(Mi,""),s=b(()=>{const{global:l=!1,admin:o=[]}=n.value;return l&&o.length>0}),a=b(()=>{if(s.value){if(e.value)return n.value.admin.some(l=>pl(e.value,l));if(t.value)return n.value.admin.some(l=>pl(t.value,l))}return!1});return{isEncrypted:s,isDecrypted:a,validate:(l,o=!1)=>{(o?e:t).value=l}}},Na=(n="",e)=>!!n&&pl(n,e),ji="VUEPRESS_HOPE_PATH_TOKEN",Zg=()=>{const n=kn(),e=Uu(),t=fa(ji,{}),s=Lc(ji,{}),a=o=>ys(e.value.config)?de(e.value.config).filter(c=>St(decodeURI(o),c)).sort((c,r)=>r.length-c.length):[],l=o=>{const c=a(o);if(c.length>0){const{config:r={}}=e.value;return{isEncrypted:!0,isDecrypted:c.some(u=>t.value[u]&&r[u].some(p=>Na(t.value[u],p))||s.value[u]&&r[u].some(p=>Na(s.value[u],p)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:b(()=>l(n.value.path)),getStatus:l,validate:(o,c=!1)=>{const{config:r={}}=e.value,u=a(n.value.path);for(const p of u)if(r[p].filter(d=>Na(o,d))){(c?t:s).value[p]=o;break}}}};var n3=$({name:"GlobalEncrypt",slots:Object,setup(n,{slots:e}){const{isDecrypted:t,isEncrypted:s,validate:a}=Qg(),l=J(!1);return bn(()=>{l.value=!0}),()=>i(bu,()=>s.value?l.value?t.value?e.default():i(Wu,{full:!0,onVerify:a}):null:e.default())}}),e3=$({name:"LocalEncrypt",slots:Object,setup(n,{slots:e}){const{status:t,validate:s}=Zg(),a=J(!1);return bn(()=>{a.value=!0}),()=>{const{isEncrypted:l,isDecrypted:o}=t.value;return l?a.value?o?e.default():i(Wu,{full:!0,onVerify:s}):null:e.default()}}});Q1(n=>{const e=n.t,t=n.I!==!1,s=n.i;return t?{title:e,content:s?()=>[i(Hn,{icon:s}),e]:null,order:n.O,index:n.I}:null});const t3=Kn({enhance:({app:n,router:e})=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=async(...s)=>(await yu().wait(),t(...s)),hf(n),n.component("HopeIcon",Hn),n.component("BloggerInfo",eo),n.component("GlobalEncrypt",n3),n.component("LocalEncrypt",e3)},setup:()=>{ff(),kf(),xg()},layouts:{Layout:og,NotFound:rg,BlogCategory:Ig,BlogHome:Mg,BlogType:Fg,Timeline:Ng}}),s3=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,a3=(n,e)=>e.some(t=>{if(vn(t))return t===n.key;const{key:s,ctrl:a=!1,shift:l=!1,alt:o=!1}=t;return s===n.key&&a===n.ctrlKey&&l===n.shiftKey&&o===n.altKey}),l3=/[^\x00-\x7F]/,o3=n=>n.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),Fi=n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),$i=(n,e)=>{const t=e.join(" "),s=o3(n);if(l3.test(n))return s.some(o=>t.toLowerCase().indexOf(o)>-1);const a=n.endsWith(" ");return new RegExp(s.map((o,c)=>s.length===c+1&&!a?`(?=.*\\b${Fi(o)})`:`(?=.*\\b${Fi(o)}\\b)`).join("")+".+","gi").test(t)},i3=({input:n,hotKeys:e})=>{if(e.value.length===0)return;const t=s=>{n.value&&a3(s,e.value)&&!s3(s.target)&&(s.preventDefault(),n.value.focus())};bn(()=>{document.addEventListener("keydown",t)}),Al(()=>{document.removeEventListener("keydown",t)})},r3=[{title:"首页",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"博客技术栈🐔",slug:"博客技术栈",link:"#博客技术栈",children:[]},{level:2,title:"描述💒",slug:"描述",link:"#描述",children:[]},{level:2,title:"探索插件💢",slug:"探索插件",link:"#探索插件",children:[]}],path:"/blog/",pathLocale:"/",extraFields:[]},{title:"自述",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"堆栈😆",slug:"堆栈",link:"#堆栈",children:[{level:3,title:"栈🍎",slug:"栈",link:"#栈",children:[]},{level:3,title:"堆🍏",slug:"堆",link:"#堆",children:[]}]},{level:2,title:"网络协议❤️",slug:"网络协议",link:"#网络协议",children:[{level:3,title:"Http协议😃",slug:"http协议",link:"#http协议",children:[]}]}],path:"/blog/body.html",pathLocale:"/",extraFields:[]},{title:"Desc",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"博客数据🍒",slug:"博客数据",link:"#博客数据",children:[]}],path:"/blog/desc.html",pathLocale:"/",extraFields:[]},{title:"随笔",headers:[{level:2,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[{level:3,title:"ThreadPoolExecutor🍉",slug:"threadpoolexecutor",link:"#threadpoolexecutor",children:[]}]},{level:2,title:"框架理解💔",slug:"框架理解",link:"#框架理解",children:[]},{level:2,title:"名言✋",slug:"名言",link:"#名言",children:[]},{level:2,title:"正则表达式💔",slug:"正则表达式",link:"#正则表达式",children:[]},{level:2,title:"Bnf范式🐯",slug:"bnf范式",link:"#bnf范式",children:[]}],path:"/blog/random.html",pathLocale:"/",extraFields:[]},{title:"Video",headers:[{level:2,title:"觉得不错的b站视频👊",slug:"觉得不错的b站视频",link:"#觉得不错的b站视频",children:[]},{level:2,title:"Ok🌈",slug:"ok",link:"#ok",children:[]}],path:"/blog/video.html",pathLocale:"/",extraFields:[]},{title:"Front page",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[],path:"/plugins/gorm.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[],path:"/plugins/io-game.html",pathLocale:"/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]},{level:2,title:"模板功能",slug:"模板功能",link:"#模板功能",children:[{level:3,title:"基础模板",slug:"基础模板",link:"#基础模板",children:[]}]}],path:"/plugins/java-orm.html",pathLocale:"/",extraFields:[]},{title:"RequestTool",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"插件地址",slug:"插件地址",link:"#插件地址",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[{level:3,title:"目前支持",slug:"目前支持",link:"#目前支持",children:[]},{level:3,title:"前置请求",slug:"前置请求",link:"#前置请求",children:[]},{level:3,title:"参数解析",slug:"参数解析",link:"#参数解析",children:[]},{level:3,title:"保存请求历史和参数",slug:"保存请求历史和参数",link:"#保存请求历史和参数",children:[]}]},{level:2,title:"使用技巧",slug:"使用技巧",link:"#使用技巧",children:[{level:3,title:"技巧1",slug:"技巧1",link:"#技巧1",children:[]},{level:3,title:"技巧2",slug:"技巧2",link:"#技巧2",children:[]}]},{level:2,title:"更新说明",slug:"更新说明",link:"#更新说明",children:[]}],path:"/plugins/request-tool.html",pathLocale:"/",extraFields:[]},{title:"RocketCat",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/rocket-cat.html",pathLocale:"/",extraFields:[]},{title:"RsRom",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/plugins/rs-orm.html",pathLocale:"/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"源码地址",slug:"源码地址",link:"#源码地址",children:[]},{level:2,title:"桌面端的实现",slug:"桌面端的实现",link:"#桌面端的实现",children:[]}],path:"/plugins/vue-admin.html",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/",pathLocale:"/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍🍉",slug:"介绍🍉",link:"#介绍🍉",children:[]},{level:2,title:"工具列表🐸",slug:"工具列表🐸",link:"#工具列表🐸",children:[{level:3,title:"Icon素材",slug:"icon素材",link:"#icon素材",children:[]},{level:3,title:"AI代码工具",slug:"ai代码工具",link:"#ai代码工具",children:[]},{level:3,title:"开发工具👊",slug:"开发工具👊",link:"#开发工具👊",children:[]},{level:3,title:"日常工具😆",slug:"日常工具😆",link:"#日常工具😆",children:[]}]},{level:2,title:"桌面美化👻",slug:"桌面美化👻",link:"#桌面美化👻",children:[{level:3,title:"国内🐸",slug:"国内🐸",link:"#国内🐸",children:[]},{level:3,title:"国外🌟",slug:"国外🌟",link:"#国外🌟",children:[]}]}],path:"/util/",pathLocale:"/",extraFields:[]},{title:"通用工具",headers:[{level:2,title:"内存节约工具",slug:"内存节约工具",link:"#内存节约工具",children:[]},{level:2,title:"AI工具",slug:"ai工具",link:"#ai工具",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"日常工具",slug:"日常工具",link:"#日常工具",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]},{level:2,title:"图像工具",slug:"图像工具",link:"#图像工具",children:[{level:3,title:"列表",slug:"列表-2",link:"#列表-2",children:[]}]}],path:"/util/common.html",pathLocale:"/",extraFields:[]},{title:"开发工具",headers:[{level:2,title:"Fleet",slug:"fleet",link:"#fleet",children:[{level:3,title:"主题编辑器",slug:"主题编辑器",link:"#主题编辑器",children:[]}]},{level:2,title:"Github",slug:"github",link:"#github",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"Shell",slug:"shell",link:"#shell",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]}],path:"/util/dev.html",pathLocale:"/",extraFields:[]},{title:"Idea插件",headers:[{level:2,title:"介绍🐔",slug:"介绍🐔",link:"#介绍🐔",children:[]},{level:2,title:"插件🍏",slug:"插件🍏",link:"#插件🍏",children:[]},{level:2,title:"插件文档👏",slug:"插件文档👏",link:"#插件文档👏",children:[]},{level:2,title:"必备插件🎈",slug:"必备插件🎈",link:"#必备插件🎈",children:[{level:3,title:"阿里巴巴部署插件🌟",slug:"阿里巴巴部署插件🌟",link:"#阿里巴巴部署插件🌟",children:[]},{level:3,title:"接口搜索插件💒",slug:"接口搜索插件💒",link:"#接口搜索插件💒",children:[]},{level:3,title:"翻译插件👏",slug:"翻译插件👏",link:"#翻译插件👏",children:[]},{level:3,title:"Gitee插件😎",slug:"gitee插件😎",link:"#gitee插件😎",children:[]},{level:3,title:"彩虹括号插件😄",slug:"彩虹括号插件😄",link:"#彩虹括号插件😄",children:[]},{level:3,title:"背景图片插件🍋",slug:"背景图片插件🍋",link:"#背景图片插件🍋",children:[]},{level:3,title:"SpringBoot热更插件🍊",slug:"springboot热更插件🍊",link:"#springboot热更插件🍊",children:[]}]},{level:2,title:"油猴插件🍒",slug:"油猴插件🍒",link:"#油猴插件🍒",children:[{level:3,title:"Github🍑",slug:"github🍑",link:"#github🍑",children:[]},{level:3,title:"魔法💞",slug:"魔法💞",link:"#魔法💞",children:[]},{level:3,title:"搭建魔法",slug:"搭建魔法",link:"#搭建魔法",children:[]}]},{level:2,title:"Github💢",slug:"github💢",link:"#github💢",children:[{level:3,title:"自动修改host😎",slug:"自动修改host😎",link:"#自动修改host😎",children:[]}]},{level:2,title:"Edge🏧",slug:"edge🏧",link:"#edge🏧",children:[]},{level:2,title:"原型设计💔",slug:"原型设计💔",link:"#原型设计💔",children:[{level:3,title:"激活码😎",slug:"激活码😎",link:"#激活码😎",children:[]},{level:3,title:"下载地址🍊",slug:"下载地址🍊",link:"#下载地址🍊",children:[]}]}],path:"/util/idea.html",pathLocale:"/",extraFields:[]},{title:"English",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]}],path:"/en/english/",pathLocale:"/en/",extraFields:[]},{title:"Day1",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day1.html",pathLocale:"/en/",extraFields:[]},{title:"Day10",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day10.html",pathLocale:"/en/",extraFields:[]},{title:"Day11",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day11.html",pathLocale:"/en/",extraFields:[]},{title:"Day12",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day12.html",pathLocale:"/en/",extraFields:[]},{title:"Day13",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day13.html",pathLocale:"/en/",extraFields:[]},{title:"Day14",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day14.html",pathLocale:"/en/",extraFields:[]},{title:"Day15",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day15.html",pathLocale:"/en/",extraFields:[]},{title:"Day16",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"小知识",slug:"小知识",link:"#小知识",children:[]}]}],path:"/en/english/day16.html",pathLocale:"/en/",extraFields:[]},{title:"Day17",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day17.html",pathLocale:"/en/",extraFields:[]},{title:"Day18",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"review",slug:"review",link:"#review",children:[]},{level:3,title:"practice",slug:"practice",link:"#practice",children:[]}]}],path:"/en/english/day18.html",pathLocale:"/en/",extraFields:[]},{title:"Day19",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"语法分析",slug:"语法分析",link:"#语法分析",children:[{level:3,title:"Is duo from a small town near Beijing?",slug:"is-duo-from-a-small-town-near-beijing",link:"#is-duo-from-a-small-town-near-beijing",children:[]},{level:3,title:"This small town has many good coffee shops.",slug:"this-small-town-has-many-good-coffee-shops",link:"#this-small-town-has-many-good-coffee-shops",children:[]},{level:3,title:"The food at this restaurant is really bad.",slug:"the-food-at-this-restaurant-is-really-bad",link:"#the-food-at-this-restaurant-is-really-bad",children:[]},{level:3,title:"Is the food here good or bad?",slug:"is-the-food-here-good-or-bad",link:"#is-the-food-here-good-or-bad",children:[]},{level:3,title:"Is there a coffee shop near Ben's office?",slug:"is-there-a-coffee-shop-near-ben-s-office",link:"#is-there-a-coffee-shop-near-ben-s-office",children:[]}]}],path:"/en/english/day19.html",pathLocale:"/en/",extraFields:[]},{title:"Day2",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"Do you and Are you",slug:"do-you-and-are-you",link:"#do-you-and-are-you",children:[]}]}],path:"/en/english/day2.html",pathLocale:"/en/",extraFields:[]},{title:"Day3",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day3.html",pathLocale:"/en/",extraFields:[]},{title:"Day4",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"has and have",slug:"has-and-have",link:"#has-and-have",children:[]},{level:3,title:"what and where",slug:"what-and-where",link:"#what-and-where",children:[]},{level:3,title:"He and She",slug:"he-and-she",link:"#he-and-she",children:[]}]}],path:"/en/english/day4.html",pathLocale:"/en/",extraFields:[]},{title:"Day5",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day5.html",pathLocale:"/en/",extraFields:[]},{title:"Day6",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day6.html",pathLocale:"/en/",extraFields:[]},{title:"Day7",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day7.html",pathLocale:"/en/",extraFields:[]},{title:"Day8",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day8.html",pathLocale:"/en/",extraFields:[]},{title:"Day9",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day9.html",pathLocale:"/en/",extraFields:[]},{title:"Study",headers:[{level:2,title:"前缀(12)-义",slug:"前缀-12-义",link:"#前缀-12-义",children:[]},{level:2,title:"后缀(3)-性",slug:"后缀-3-性",link:"#后缀-3-性",children:[]},{level:2,title:"词根",slug:"词根",link:"#词根",children:[]}],path:"/en/english/study.html",pathLocale:"/en/",extraFields:[]},{title:"Plugins",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Menu",slug:"menu",link:"#menu",children:[{level:3,title:"Supported",slug:"supported",link:"#supported",children:[]}]}],path:"/en/plugins/",pathLocale:"/en/",extraFields:[]},{title:"Document Connections",headers:[],path:"/en/plugins/gorm.html",pathLocale:"/en/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]}],path:"/en/plugins/jorm.html",pathLocale:"/en/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Implementation on the desktop",slug:"implementation-on-the-desktop",link:"#implementation-on-the-desktop",children:[]}],path:"/en/plugins/vue-admin.html",pathLocale:"/en/",extraFields:[]},{title:"Game",headers:[],path:"/study/game/",pathLocale:"/",extraFields:[]},{title:"Cocos",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🌈",slug:"官网",link:"#官网",children:[]},{level:2,title:"插件💒",slug:"插件",link:"#插件",children:[]}],path:"/study/game/cocos.html",pathLocale:"/",extraFields:[]},{title:"Game",headers:[{level:2,title:"提示❤️",slug:"提示",link:"#提示",children:[]},{level:2,title:"技术🍑",slug:"技术",link:"#技术",children:[{level:3,title:"帧同步🍉",slug:"帧同步",link:"#帧同步",children:[]}]},{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"游戏引擎🍇",slug:"游戏引擎",link:"#游戏引擎",children:[{level:3,title:"Godot💔",slug:"godot",link:"#godot",children:[]},{level:3,title:"Unity🍑",slug:"unity",link:"#unity",children:[]},{level:3,title:"Cocos😎",slug:"cocos",link:"#cocos",children:[]}]},{level:2,title:"游戏素材🏧",slug:"游戏素材",link:"#游戏素材",children:[{level:3,title:"音效🎈",slug:"音效",link:"#音效",children:[]},{level:3,title:"Logo✋",slug:"logo",link:"#logo",children:[]},{level:3,title:"实用性高素材网站",slug:"实用性高素材网站",link:"#实用性高素材网站",children:[]},{level:3,title:"音效素材网",slug:"音效素材网",link:"#音效素材网",children:[]},{level:3,title:"国外🍑",slug:"国外",link:"#国外",children:[]},{level:3,title:"国内🪲",slug:"国内",link:"#国内",children:[]}]},{level:2,title:"准备使用的素材🍎",slug:"准备使用的素材",link:"#准备使用的素材",children:[]},{level:2,title:"游戏服务器框架❤️",slug:"游戏服务器框架",link:"#游戏服务器框架",children:[]},{level:2,title:"游戏政策模板",slug:"游戏政策模板",link:"#游戏政策模板",children:[]}],path:"/study/game/game.html",pathLocale:"/",extraFields:[]},{title:"Godot",headers:[{level:2,title:"介绍🚩",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网❤️",slug:"官网",link:"#官网",children:[]},{level:2,title:"Proto✋",slug:"proto",link:"#proto",children:[]}],path:"/study/game/godot.html",pathLocale:"/",extraFields:[]},{title:"Unity-Camera",headers:[{level:2,title:"日期",slug:"日期",link:"#日期",children:[]},{level:2,title:"步骤",slug:"步骤",link:"#步骤",children:[]}],path:"/study/game/unity-camera.html",pathLocale:"/",extraFields:[]},{title:"Unity",headers:[{level:2,title:"工具",slug:"工具",link:"#工具",children:[]},{level:2,title:"子物体自适应高度布局滚动",slug:"子物体自适应高度布局滚动",link:"#子物体自适应高度布局滚动",children:[]},{level:2,title:"Unity版本自动构建🪲",slug:"unity版本自动构建",link:"#unity版本自动构建",children:[{level:3,title:"脚本",slug:"脚本",link:"#脚本",children:[]}]},{level:2,title:"Unity基础🪲",slug:"unity基础",link:"#unity基础",children:[{level:3,title:"闭包🎈",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"协程🎈",slug:"协程",link:"#协程",children:[]},{level:3,title:"ads接入🎈",slug:"ads接入",link:"#ads接入",children:[]},{level:3,title:"小程序🏧",slug:"小程序",link:"#小程序",children:[]},{level:3,title:"json转换问题😄",slug:"json转换问题",link:"#json转换问题",children:[]}]},{level:2,title:"插件🐔",slug:"插件",link:"#插件",children:[{level:3,title:"Advertisement🍉",slug:"advertisement",link:"#advertisement",children:[]},{level:3,title:"DoTween🐷",slug:"dotween",link:"#dotween",children:[]},{level:3,title:"EasySave🗾",slug:"easysave",link:"#easysave",children:[]},{level:3,title:"LeanTouch💔",slug:"leantouch",link:"#leantouch",children:[]}]},{level:2,title:"开源库🍏",slug:"开源库",link:"#开源库",children:[{level:3,title:"WebSocket🍎",slug:"websocket",link:"#websocket",children:[]},{level:3,title:"Protobuf😎",slug:"protobuf",link:"#protobuf",children:[]},{level:3,title:"KCP🍇",slug:"kcp",link:"#kcp",children:[]},{level:3,title:"LuBan👊",slug:"luban",link:"#luban",children:[]}]},{level:2,title:"微信游戏🪲",slug:"微信游戏",link:"#微信游戏",children:[]},{level:2,title:"UnityApi🐯",slug:"unityapi",link:"#unityapi",children:[{level:3,title:"移动相关👊",slug:"移动相关",link:"#移动相关",children:[]},{level:3,title:"邮件发送💒",slug:"邮件发送",link:"#邮件发送",children:[]},{level:3,title:"IoGameUnity✋",slug:"iogameunity",link:"#iogameunity",children:[]}]}],path:"/study/game/unity.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[],path:"/study/go/",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"Go语言实现",slug:"go语言实现",link:"#go语言实现",children:[{level:3,title:"代理模式",slug:"代理模式",link:"#代理模式",children:[]}]}],path:"/study/go/design-mode.html",pathLocale:"/",extraFields:[]},{title:"高级",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Select",slug:"select",link:"#select",children:[{level:3,title:"常见用法",slug:"常见用法",link:"#常见用法",children:[]},{level:3,title:"使用注意",slug:"使用注意",link:"#使用注意",children:[]}]},{level:2,title:"线程",slug:"线程",link:"#线程",children:[{level:3,title:"轻量级线程变量如何处理的?",slug:"轻量级线程变量如何处理的",link:"#轻量级线程变量如何处理的",children:[]},{level:3,title:"goroutine和线程区别？",slug:"goroutine和线程区别",link:"#goroutine和线程区别",children:[]},{level:3,title:"goroutine能创建多少个？",slug:"goroutine能创建多少个",link:"#goroutine能创建多少个",children:[]}]},{level:2,title:"排序",slug:"排序",link:"#排序",children:[{level:3,title:"基本排序",slug:"基本排序",link:"#基本排序",children:[]}]},{level:2,title:"Chan(缓冲区)",slug:"chan-缓冲区",link:"#chan-缓冲区",children:[]},{level:2,title:"协程上下文",slug:"协程上下文",link:"#协程上下文",children:[{level:3,title:"简易版",slug:"简易版",link:"#简易版",children:[]}]}],path:"/study/go/difficult.html",pathLocale:"/",extraFields:[]},{title:"Gin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"优雅停机",slug:"优雅停机",link:"#优雅停机",children:[]},{level:2,title:"中间件",slug:"中间件",link:"#中间件",children:[{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"cors跨域",slug:"cors跨域",link:"#cors跨域",children:[]},{level:3,title:"缓存redis",slug:"缓存redis",link:"#缓存redis",children:[]},{level:3,title:"认证处理器",slug:"认证处理器",link:"#认证处理器",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"对象封装",slug:"对象封装",link:"#对象封装",children:[]}]}],path:"/study/go/gin.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]},{level:2,title:"语法糖",slug:"语法糖",link:"#语法糖",children:[{level:3,title:"方法返回值赋值",slug:"方法返回值赋值",link:"#方法返回值赋值",children:[]}]},{level:2,title:"go基础部分",slug:"go基础部分",link:"#go基础部分",children:[{level:3,title:"变量赋值",slug:"变量赋值",link:"#变量赋值",children:[]},{level:3,title:"流程语句",slug:"流程语句",link:"#流程语句",children:[]},{level:3,title:"Map和List",slug:"map和list",link:"#map和list",children:[]},{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"自定义错误类型",slug:"自定义错误类型",link:"#自定义错误类型",children:[]},{level:3,title:"闭包",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"接口与结构体",slug:"接口与结构体",link:"#接口与结构体",children:[]},{level:3,title:"指针概念",slug:"指针概念",link:"#指针概念",children:[]},{level:3,title:"多线程通道",slug:"多线程通道",link:"#多线程通道",children:[]}]},{level:2,title:"Go实践",slug:"go实践",link:"#go实践",children:[]},{level:2,title:"开源库",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"高级部分",slug:"高级部分",link:"#高级部分",children:[{level:3,title:"镜像配置",slug:"镜像配置",link:"#镜像配置",children:[]},{level:3,title:"微服务",slug:"微服务",link:"#微服务",children:[]},{level:3,title:"多模块开发",slug:"多模块开发",link:"#多模块开发",children:[]},{level:3,title:"context上下文",slug:"context上下文",link:"#context上下文",children:[]},{level:3,title:"互斥锁",slug:"互斥锁",link:"#互斥锁",children:[]},{level:3,title:"单元测试",slug:"单元测试",link:"#单元测试",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"Jwt",slug:"jwt",link:"#jwt",children:[]},{level:3,title:"打包",slug:"打包",link:"#打包",children:[]}]}],path:"/study/go/go.html",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/study/go/gorm.html",pathLocale:"/",extraFields:[]},{title:"七牛云",headers:[{level:2,title:"七牛云存储对接",slug:"七牛云存储对接",link:"#七牛云存储对接",children:[]},{level:2,title:"后端go具体代码",slug:"后端go具体代码",link:"#后端go具体代码",children:[]},{level:2,title:"前端Vue",slug:"前端vue",link:"#前端vue",children:[]}],path:"/study/go/qiniu.html",pathLocale:"/",extraFields:[]},{title:"Socket",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"自定义协议",slug:"自定义协议",link:"#自定义协议",children:[{level:3,title:"使用示例",slug:"使用示例",link:"#使用示例",children:[]}]},{level:2,title:"简单协议",slug:"简单协议",link:"#简单协议",children:[{level:3,title:"代码",slug:"代码",link:"#代码",children:[]}]}],path:"/study/go/socket.html",pathLocale:"/",extraFields:[]},{title:"Ssh",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"终端连接",slug:"终端连接",link:"#终端连接",children:[]}],path:"/study/go/ssh.html",pathLocale:"/",extraFields:[]},{title:"原理解析",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Gin",slug:"gin",link:"#gin",children:[]},{level:2,title:"Go",slug:"go",link:"#go",children:[]}],path:"/study/go/try.html",pathLocale:"/",extraFields:[]},{title:"工具",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"缓存工具类",slug:"缓存工具类",link:"#缓存工具类",children:[]}]}],path:"/study/go/util.html",pathLocale:"/",extraFields:[]},{title:"Wails",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]}],path:"/study/go/wails.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[],path:"/study/java/",pathLocale:"/",extraFields:[]},{title:"数据结构",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"HashMap✋",slug:"hashmap",link:"#hashmap",children:[]},{level:2,title:"LinkedList🍅",slug:"linkedlist",link:"#linkedlist",children:[]},{level:2,title:"Array🐯",slug:"array",link:"#array",children:[]},{level:2,title:"Stack👏",slug:"stack",link:"#stack",children:[]},{level:2,title:"Queue👏",slug:"queue",link:"#queue",children:[]}],path:"/study/java/data-struct.html",pathLocale:"/",extraFields:[]},{title:"Hutool",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Api😃",slug:"api",link:"#api",children:[{level:3,title:"对象复制🗾",slug:"对象复制",link:"#对象复制",children:[]}]}],path:"/study/java/hutool.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🍎",slug:"官网",link:"#官网",children:[]},{level:2,title:"Api🍒",slug:"api",link:"#api",children:[{level:3,title:"通知🎈",slug:"通知",link:"#通知",children:[]}]}],path:"/study/java/io-game.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Java基础🍊",slug:"java基础",link:"#java基础",children:[{level:3,title:"List工具🍅",slug:"list工具",link:"#list工具",children:[]},{level:3,title:"泛型💔",slug:"泛型",link:"#泛型",children:[]},{level:3,title:"定时任务👊",slug:"定时任务",link:"#定时任务",children:[]},{level:3,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[]}]},{level:2,title:"Jvm😎",slug:"jvm",link:"#jvm",children:[{level:3,title:"线程私有的⛪",slug:"线程私有的",link:"#线程私有的",children:[]},{level:3,title:"线程公有的💢",slug:"线程公有的",link:"#线程公有的",children:[]}]},{level:2,title:"锁🏧",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁🍒",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"悲观锁😃",slug:"悲观锁",link:"#悲观锁",children:[]}]}],path:"/study/java/java.html",pathLocale:"/",extraFields:[]},{title:"目录",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/kd.html",pathLocale:"/",extraFields:[]},{title:"Maven",headers:[{level:2,title:"介绍😄",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"腾讯源镜像",slug:"腾讯源镜像",link:"#腾讯源镜像",children:[]},{level:2,title:"镜像🍋",slug:"镜像",link:"#镜像",children:[]},{level:2,title:"父子依赖👻",slug:"父子依赖",link:"#父子依赖",children:[]}],path:"/study/java/maven.html",pathLocale:"/",extraFields:[]},{title:"Mqtt",headers:[{level:2,title:"介绍🍏",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🍑",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例 SpringBoot🏧",slug:"示例-springboot",link:"#示例-springboot",children:[]}],path:"/study/java/mqtt.html",pathLocale:"/",extraFields:[]},{title:"Mybatis",headers:[{level:2,title:"介绍🍊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"常用标签😃",slug:"常用标签",link:"#常用标签",children:[]},{level:2,title:"使用规范⛪",slug:"使用规范",link:"#使用规范",children:[]},{level:2,title:"原理😎",slug:"原理",link:"#原理",children:[{level:3,title:"spring环境🍇",slug:"spring环境",link:"#spring环境",children:[]}]},{level:2,title:"mybatis-plus🎈",slug:"mybatis-plus",link:"#mybatis-plus",children:[{level:3,title:"LambdaQueryWrapper💢",slug:"lambdaquerywrapper",link:"#lambdaquerywrapper",children:[]},{level:3,title:"配置插件🗾",slug:"配置插件",link:"#配置插件",children:[]},{level:3,title:"MybatisX🎈",slug:"mybatisx",link:"#mybatisx",children:[]}]}],path:"/study/java/mybatis.html",pathLocale:"/",extraFields:[]},{title:"Protostuff序列化",headers:[{level:2,title:"介绍💔",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用😃",slug:"使用",link:"#使用",children:[]}],path:"/study/java/protostuff.html",pathLocale:"/",extraFields:[]},{title:"Redisson",headers:[{level:2,title:"官网⛪",slug:"官网",link:"#官网",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/redisson.html",pathLocale:"/",extraFields:[]},{title:"RocketMq",headers:[{level:2,title:"介绍🐷",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🎁",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例😃",slug:"示例",link:"#示例",children:[]},{level:2,title:"部署💞",slug:"部署",link:"#部署",children:[]}],path:"/study/java/rocket-mq.html",pathLocale:"/",extraFields:[]},{title:"SpringBootDemo",headers:[{level:2,title:"根据条件创建bean的注解👻",slug:"根据条件创建bean的注解",link:"#根据条件创建bean的注解",children:[{level:3,title:"@ConditionalOnProperty💒",slug:"conditionalonproperty",link:"#conditionalonproperty",children:[]},{level:3,title:"@ConditionalOnMissingBean🌅",slug:"conditionalonmissingbean",link:"#conditionalonmissingbean",children:[]},{level:3,title:"@ConditionalOnBean🌟",slug:"conditionalonbean",link:"#conditionalonbean",children:[]},{level:3,title:"@AutoConfigureAfter🐔",slug:"autoconfigureafter",link:"#autoconfigureafter",children:[]},{level:3,title:"@ConditionalOnClass🍊",slug:"conditionalonclass",link:"#conditionalonclass",children:[]},{level:3,title:"@Conditional🍊",slug:"conditional",link:"#conditional",children:[]},{level:3,title:"@AutoConfigureBefore😎",slug:"autoconfigurebefore",link:"#autoconfigurebefore",children:[]}]},{level:2,title:"双MQ控制时间差🍎",slug:"双mq控制时间差",link:"#双mq控制时间差",children:[]},{level:2,title:"文件上传🚩",slug:"文件上传",link:"#文件上传",children:[]}],path:"/study/java/spring-boot-demo.html",pathLocale:"/",extraFields:[]},{title:"SpringBoot",headers:[{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"必读指南",slug:"必读指南",link:"#必读指南",children:[]},{level:2,title:"规范😎",slug:"规范",link:"#规范",children:[]},{level:2,title:"打包原生脚本执行🪲",slug:"打包原生脚本执行",link:"#打包原生脚本执行",children:[]},{level:2,title:"启动和部署🍉",slug:"启动和部署",link:"#启动和部署",children:[]},{level:2,title:"Cors跨域配置🍎 !",slug:"cors跨域配置",link:"#cors跨域配置",children:[]},{level:2,title:"yml配置💞",slug:"yml配置",link:"#yml配置",children:[]},{level:2,title:"测试搭建👻",slug:"测试搭建",link:"#测试搭建",children:[]},{level:2,title:"Controller传参🐔",slug:"controller传参",link:"#controller传参",children:[]},{level:2,title:"全局异常处理🐟",slug:"全局异常处理",link:"#全局异常处理",children:[]},{level:2,title:"文件上传下载🍇",slug:"文件上传下载",link:"#文件上传下载",children:[]},{level:2,title:"SpringBootUtil🎁 !",slug:"springbootutil",link:"#springbootutil",children:[{level:3,title:"HttpServletUtil🐟 !",slug:"httpservletutil",link:"#httpservletutil",children:[]},{level:3,title:"返回对象封装🐷 !",slug:"返回对象封装",link:"#返回对象封装",children:[]},{level:3,title:"TokenUtil⭐",slug:"tokenutil",link:"#tokenutil",children:[]},{level:3,title:"FileUtil🐷 !",slug:"fileutil",link:"#fileutil",children:[]}]},{level:2,title:"拦截器⭐",slug:"拦截器",link:"#拦截器",children:[]},{level:2,title:"参数校验😃",slug:"参数校验",link:"#参数校验",children:[{level:3,title:"依赖🍒",slug:"依赖",link:"#依赖",children:[]},{level:3,title:"DTO❤️",slug:"dto",link:"#dto",children:[]},{level:3,title:"Controller⭐",slug:"controller",link:"#controller",children:[]}]}],path:"/study/java/spring-boot.html",pathLocale:"/",extraFields:[]},{title:"SpringCloudAlibaba",headers:[{level:2,title:"介绍🎁",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"项目🌅",slug:"项目",link:"#项目",children:[]},{level:2,title:"Nacos🌈",slug:"nacos",link:"#nacos",children:[]},{level:2,title:"Seata😎",slug:"seata",link:"#seata",children:[]}],path:"/study/java/spring-cloud-alibaba.html",pathLocale:"/",extraFields:[]},{title:"SpringCloud",headers:[{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/spring-cloud.html",pathLocale:"/",extraFields:[]},{title:"Transaction",headers:[{level:2,title:"介绍🍒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"单机事务🐷",slug:"单机事务",link:"#单机事务",children:[]},{level:2,title:"分布式事务💢",slug:"分布式事务",link:"#分布式事务",children:[]}],path:"/study/java/transaction.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[],path:"/study/linux/",pathLocale:"/",extraFields:[]},{title:"Docker",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装✋",slug:"安装",link:"#安装",children:[]},{level:2,title:"常用命令✋",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"配置镜像源💢",slug:"配置镜像源",link:"#配置镜像源",children:[]}]},{level:2,title:"运行镜像🗾",slug:"运行镜像",link:"#运行镜像",children:[{level:3,title:"Mongodb🍋",slug:"mongodb",link:"#mongodb",children:[]},{level:3,title:"Mysql🏩",slug:"mysql",link:"#mysql",children:[]},{level:3,title:"Redis🍏",slug:"redis",link:"#redis",children:[]},{level:3,title:"PostgresSql😃",slug:"postgressql",link:"#postgressql",children:[]},{level:3,title:"Rabbitmq🏧",slug:"rabbitmq",link:"#rabbitmq",children:[]},{level:3,title:"RocketMq🍒",slug:"rocketmq",link:"#rocketmq",children:[]},{level:3,title:"Nacos🐔",slug:"nacos",link:"#nacos",children:[]},{level:3,title:"Seata❤️",slug:"seata",link:"#seata",children:[]},{level:3,title:"Ubuntu⭐",slug:"ubuntu",link:"#ubuntu",children:[]}]},{level:2,title:"Python🌈",slug:"python",link:"#python",children:[]},{level:2,title:"DrawIo🐔",slug:"drawio",link:"#drawio",children:[]},{level:2,title:"Go部署😎",slug:"go部署",link:"#go部署",children:[{level:3,title:"docker-compose部署🌅",slug:"docker-compose部署",link:"#docker-compose部署",children:[]}]},{level:2,title:"Java部署🍋",slug:"java部署",link:"#java部署",children:[{level:3,title:"docker-compose部署🍒",slug:"docker-compose部署-1",link:"#docker-compose部署-1",children:[]}]}],path:"/study/linux/docker.html",pathLocale:"/",extraFields:[]},{title:"Git使用",headers:[{level:2,title:"介绍🏧",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"下载地址💞",slug:"下载地址",link:"#下载地址",children:[]},{level:2,title:"基本命令💒",slug:"基本命令",link:"#基本命令",children:[]},{level:2,title:"分支🗾",slug:"分支",link:"#分支",children:[{level:3,title:"新建分支🪲",slug:"新建分支",link:"#新建分支",children:[]},{level:3,title:"选择其他分支合并到当前分支🍅",slug:"选择其他分支合并到当前分支",link:"#选择其他分支合并到当前分支",children:[]},{level:3,title:"使用其他分支当作基础分支合并到当前分支上⛪",slug:"使用其他分支当作基础分支合并到当前分支上",link:"#使用其他分支当作基础分支合并到当前分支上",children:[]},{level:3,title:"清除提交历史在创建新分支😆",slug:"清除提交历史在创建新分支",link:"#清除提交历史在创建新分支",children:[]}]}],path:"/study/linux/git.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[{level:2,title:"Shell脚本👻",slug:"shell脚本",link:"#shell脚本",children:[]},{level:2,title:"Ubuntu🐟",slug:"ubuntu",link:"#ubuntu",children:[{level:3,title:"镜像源😎",slug:"镜像源",link:"#镜像源",children:[]}]},{level:2,title:"Centos7🐔",slug:"centos7",link:"#centos7",children:[{level:3,title:"自动化脚本🌈",slug:"自动化脚本",link:"#自动化脚本",children:[]},{level:3,title:"Mysql8安装🌈",slug:"mysql8安装",link:"#mysql8安装",children:[]},{level:3,title:"Ffmpeg💒",slug:"ffmpeg",link:"#ffmpeg",children:[]}]},{level:2,title:"Deepin🎁",slug:"deepin",link:"#deepin",children:[]},{level:2,title:"内存搭配🐸",slug:"内存搭配",link:"#内存搭配",children:[]},{level:2,title:"常用命令👏",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"Date(时间)🌈",slug:"date-时间",link:"#date-时间",children:[]},{level:3,title:"Crontab(定时)🍊",slug:"crontab-定时",link:"#crontab-定时",children:[]},{level:3,title:"Tar(压缩)🗾",slug:"tar-压缩",link:"#tar-压缩",children:[]},{level:3,title:"Zip(压缩)🍒",slug:"zip-压缩",link:"#zip-压缩",children:[]},{level:3,title:"Lrzsz(上传文件)🎁",slug:"lrzsz-上传文件",link:"#lrzsz-上传文件",children:[]},{level:3,title:"Vim🐸",slug:"vim",link:"#vim",children:[]},{level:3,title:"Awk🐯",slug:"awk",link:"#awk",children:[]}]}],path:"/study/linux/linux.html",pathLocale:"/",extraFields:[]},{title:"Mysql",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[{level:3,title:"yum包",slug:"yum包",link:"#yum包",children:[]}]},{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Sql强化",slug:"sql强化",link:"#sql强化",children:[{level:3,title:"计算排名sql",slug:"计算排名sql",link:"#计算排名sql",children:[]}]},{level:2,title:"Mysql基本优化🏩",slug:"mysql基本优化",link:"#mysql基本优化",children:[]},{level:2,title:"索引🌈",slug:"索引",link:"#索引",children:[]},{level:2,title:"索引类型🍉",slug:"索引类型",link:"#索引类型",children:[]},{level:2,title:"事务👻",slug:"事务",link:"#事务",children:[{level:3,title:"特性ACID⭐",slug:"特性acid",link:"#特性acid",children:[]},{level:3,title:"隔离级别🏧",slug:"隔离级别",link:"#隔离级别",children:[]}]},{level:2,title:"锁🍑",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁👻",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"自旋锁(乐观锁递归)🍋",slug:"自旋锁-乐观锁递归",link:"#自旋锁-乐观锁递归",children:[]}]},{level:2,title:"备份🍉",slug:"备份",link:"#备份",children:[{level:3,title:"定时备份命令🪲",slug:"定时备份命令",link:"#定时备份命令",children:[]},{level:3,title:"备份脚本😎",slug:"备份脚本",link:"#备份脚本",children:[]}]},{level:2,title:"Docker🍊",slug:"docker",link:"#docker",children:[]},{level:2,title:"读写分离👏",slug:"读写分离",link:"#读写分离",children:[]},{level:2,title:"优化",slug:"优化",link:"#优化",children:[]},{level:2,title:"快速模拟数据测试",slug:"快速模拟数据测试",link:"#快速模拟数据测试",children:[{level:3,title:"1.创建数据库",slug:"_1-创建数据库",link:"#_1-创建数据库",children:[]},{level:3,title:"2.创建表",slug:"_2-创建表",link:"#_2-创建表",children:[]},{level:3,title:"3.插入数据",slug:"_3-插入数据",link:"#_3-插入数据",children:[]}]}],path:"/study/linux/mysql.html",pathLocale:"/",extraFields:[]},{title:"Nginx",headers:[{level:2,title:"配置😎",slug:"配置",link:"#配置",children:[]}],path:"/study/linux/nginx.html",pathLocale:"/",extraFields:[]},{title:"网络",headers:[{level:2,title:"通信协议🐔",slug:"通信协议",link:"#通信协议",children:[{level:3,title:"RPC🍅",slug:"rpc",link:"#rpc",children:[]},{level:3,title:"HTTP🍒",slug:"http",link:"#http",children:[]}]}],path:"/study/linux/server.html",pathLocale:"/",extraFields:[]},{title:"Shell",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"开始🍎",slug:"开始",link:"#开始",children:[]},{level:2,title:"组合命令🐷",slug:"组合命令",link:"#组合命令",children:[]},{level:2,title:"shell参数🎈",slug:"shell参数",link:"#shell参数",children:[]}],path:"/study/linux/shell.html",pathLocale:"/",extraFields:[]},{title:"Try",headers:[],path:"/study/try/",pathLocale:"/",extraFields:[]},{title:"Antlr",headers:[{level:2,title:"介绍🍇",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"符号作用🍎",slug:"符号作用",link:"#符号作用",children:[]},{level:2,title:"示例🌟",slug:"示例",link:"#示例",children:[{level:3,title:"JSON💞",slug:"json",link:"#json",children:[]},{level:3,title:"ORM🍏",slug:"orm",link:"#orm",children:[]}]}],path:"/study/try/antlr.html",pathLocale:"/",extraFields:[]},{title:"Flutter",headers:[{level:2,title:"介绍💔",slug:"介绍💔",link:"#介绍💔",children:[]},{level:2,title:"镜像💔",slug:"镜像💔",link:"#镜像💔",children:[]},{level:2,title:"项目🐷",slug:"项目🐷",link:"#项目🐷",children:[]},{level:2,title:"官方组件在线示例",slug:"官方组件在线示例",link:"#官方组件在线示例",children:[]},{level:2,title:"明星组件库",slug:"明星组件库",link:"#明星组件库",children:[{level:3,title:"共享数据",slug:"共享数据",link:"#共享数据",children:[]},{level:3,title:"状态库",slug:"状态库",link:"#状态库",children:[]},{level:3,title:"轮播库",slug:"轮播库",link:"#轮播库",children:[]},{level:3,title:"通知库",slug:"通知库",link:"#通知库",children:[]},{level:3,title:"滑块库",slug:"滑块库",link:"#滑块库",children:[]},{level:3,title:"位置库",slug:"位置库",link:"#位置库",children:[]},{level:3,title:"文字库",slug:"文字库",link:"#文字库",children:[]},{level:3,title:"数据库",slug:"数据库",link:"#数据库",children:[]},{level:3,title:"图标库",slug:"图标库",link:"#图标库",children:[]},{level:3,title:"加载动画库",slug:"加载动画库",link:"#加载动画库",children:[]},{level:3,title:"无限滚动库",slug:"无限滚动库",link:"#无限滚动库",children:[]},{level:3,title:"时间选择",slug:"时间选择",link:"#时间选择",children:[]},{level:3,title:"表情库",slug:"表情库",link:"#表情库",children:[]},{level:3,title:"组件动画库",slug:"组件动画库",link:"#组件动画库",children:[]},{level:3,title:"其他库",slug:"其他库",link:"#其他库",children:[]}]},{level:2,title:"介绍🌟",slug:"介绍🌟",link:"#介绍🌟",children:[{level:3,title:"布局介绍⛪️",slug:"布局介绍⛪️",link:"#布局介绍⛪️",children:[]},{level:3,title:"组件组合常用😎",slug:"组件组合常用😎",link:"#组件组合常用😎",children:[]},{level:3,title:"AS插件🌅",slug:"as插件🌅",link:"#as插件🌅",children:[]},{level:3,title:"路由🌈",slug:"路由🌈",link:"#路由🌈",children:[]},{level:3,title:"插件👏",slug:"插件👏",link:"#插件👏",children:[]}]},{level:2,title:"必须安装🐷",slug:"必须安装🐷",link:"#必须安装🐷",children:[]},{level:2,title:"组件😄",slug:"组件😄",link:"#组件😄",children:[{level:3,title:"IgnorePointer😆",slug:"ignorepointer😆",link:"#ignorepointer😆",children:[]}]},{level:2,title:"GetX🍏",slug:"getx🍏",link:"#getx🍏",children:[{level:3,title:"动画操作😃",slug:"动画操作😃",link:"#动画操作😃",children:[]},{level:3,title:"文档🌅",slug:"文档🌅",link:"#文档🌅",children:[]},{level:3,title:"常用Api❤️",slug:"常用api❤️",link:"#常用api❤️",children:[]}]},{level:2,title:"Idea模板💒",slug:"idea模板💒",link:"#idea模板💒",children:[]}],path:"/study/try/flutter.html",pathLocale:"/",extraFields:[]},{title:"Python",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"pip镜像设置✋",slug:"pip镜像设置",link:"#pip镜像设置",children:[]},{level:2,title:"Game🎁",slug:"game",link:"#game",children:[]},{level:2,title:"开源库🚩",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"Pygame🍇",slug:"pygame",link:"#pygame",children:[{level:3,title:"介绍🌟",slug:"介绍-1",link:"#介绍-1",children:[]},{level:3,title:"图片加载⭐",slug:"图片加载",link:"#图片加载",children:[]},{level:3,title:"上下左右移动事件🍉",slug:"上下左右移动事件",link:"#上下左右移动事件",children:[]},{level:3,title:"碰撞处理😎",slug:"碰撞处理",link:"#碰撞处理",children:[]}]},{level:2,title:"爬虫",slug:"爬虫",link:"#爬虫",children:[{level:3,title:"基本示例",slug:"基本示例",link:"#基本示例",children:[]},{level:3,title:"标签获取",slug:"标签获取",link:"#标签获取",children:[]}]},{level:2,title:"Jwt使用",slug:"jwt使用",link:"#jwt使用",children:[]},{level:2,title:"介绍",slug:"介绍-2",link:"#介绍-2",children:[{level:3,title:"图片加载",slug:"图片加载-1",link:"#图片加载-1",children:[]},{level:3,title:"上下左右移动事件",slug:"上下左右移动事件-1",link:"#上下左右移动事件-1",children:[]},{level:3,title:"碰撞处理",slug:"碰撞处理-1",link:"#碰撞处理-1",children:[]}]}],path:"/study/try/python.html",pathLocale:"/",extraFields:[]},{title:"Rust",headers:[{level:2,title:"镜像源🍊",slug:"镜像源",link:"#镜像源",children:[]},{level:2,title:"描述🍑",slug:"描述",link:"#描述",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"基本语法👏",slug:"基本语法",link:"#基本语法",children:[{level:3,title:"变量👻",slug:"变量",link:"#变量",children:[]},{level:3,title:"流程控制💔",slug:"流程控制",link:"#流程控制",children:[]},{level:3,title:"三元表达式💔",slug:"三元表达式",link:"#三元表达式",children:[]},{level:3,title:"列表🍅",slug:"列表",link:"#列表",children:[]},{level:3,title:"Map🐷",slug:"map",link:"#map",children:[]}]},{level:2,title:"开源库🍇",slug:"开源库",link:"#开源库",children:[{level:3,title:"跨平台桌面框架🐔",slug:"跨平台桌面框架",link:"#跨平台桌面框架",children:[]},{level:3,title:"前端框架💢",slug:"前端框架",link:"#前端框架",children:[]},{level:3,title:"后端框架✋",slug:"后端框架",link:"#后端框架",children:[]},{level:3,title:"WebSocket💞",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"关键字👻",slug:"关键字",link:"#关键字",children:[{level:3,title:"unwrap😎",slug:"unwrap",link:"#unwrap",children:[]}]},{level:2,title:"结尾👏",slug:"结尾",link:"#结尾",children:[]}],path:"/study/try/rust.html",pathLocale:"/",extraFields:[]},{title:"Web",headers:[],path:"/study/web/",pathLocale:"/",extraFields:[]},{title:"Axios",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Vue3插件玩法🍒",slug:"vue3插件玩法",link:"#vue3插件玩法",children:[]},{level:2,title:"Npm基本用法💔",slug:"npm基本用法",link:"#npm基本用法",children:[{level:3,title:"Http配置🌟",slug:"http配置",link:"#http配置",children:[]},{level:3,title:"Api配置🍎",slug:"api配置",link:"#api配置",children:[]}]}],path:"/study/web/axios.html",pathLocale:"/",extraFields:[]},{title:"Css",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Css配置🪲",slug:"css配置",link:"#css配置",children:[{level:3,title:"css动画库😎",slug:"css动画库",link:"#css动画库",children:[]}]},{level:2,title:"Flex布局",slug:"flex布局",link:"#flex布局",children:[{level:3,title:"示例",slug:"示例",link:"#示例",children:[]}]}],path:"/study/web/css.html",pathLocale:"/",extraFields:[]},{title:"Electron",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装🍇",slug:"安装",link:"#安装",children:[]},{level:2,title:"问题🍎",slug:"问题",link:"#问题",children:[]},{level:2,title:"通信🐸",slug:"通信",link:"#通信",children:[]},{level:2,title:"vue3 + Electron🏧",slug:"vue3-electron",link:"#vue3-electron",children:[]},{level:2,title:"进程通信💞",slug:"进程通信",link:"#进程通信",children:[{level:3,title:"暴露给渲染进程的API🍎",slug:"暴露给渲染进程的api",link:"#暴露给渲染进程的api",children:[]},{level:3,title:"主进程定义的通道👏",slug:"主进程定义的通道",link:"#主进程定义的通道",children:[]},{level:3,title:"API🍒",slug:"api",link:"#api",children:[]}]},{level:2,title:"打包🍉",slug:"打包",link:"#打包",children:[]},{level:2,title:"项目👏",slug:"项目",link:"#项目",children:[]}],path:"/study/web/electron.html",pathLocale:"/",extraFields:[]},{title:"Node",headers:[{level:2,title:"介绍😃",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"设置npm镜像😆",slug:"设置npm镜像",link:"#设置npm镜像",children:[]},{level:2,title:"javaScript👏",slug:"javascript",link:"#javascript",children:[]},{level:2,title:"linux安装npm👊",slug:"linux安装npm",link:"#linux安装npm",children:[]},{level:2,title:"linux安装yarn👻",slug:"linux安装yarn",link:"#linux安装yarn",children:[]},{level:2,title:"js数据存储🎁",slug:"js数据存储",link:"#js数据存储",children:[{level:3,title:"JSON转换🍅",slug:"json转换",link:"#json转换",children:[]},{level:3,title:"Token保存代码👏",slug:"token保存代码",link:"#token保存代码",children:[]},{level:3,title:"1:持久化存储 localStorage✋",slug:"_1-持久化存储-localstorage",link:"#_1-持久化存储-localstorage",children:[]},{level:3,title:"2:会话存储 sessionStorage💢",slug:"_2-会话存储-sessionstorage",link:"#_2-会话存储-sessionstorage",children:[]},{level:3,title:"webSocket🍉",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"开源库✋",slug:"开源库",link:"#开源库",children:[]}],path:"/study/web/node.html",pathLocale:"/",extraFields:[]},{title:"Vite",headers:[{level:2,title:"介绍👊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置相对路径🍅",slug:"配置相对路径",link:"#配置相对路径",children:[]},{level:2,title:"创建vue项目🪲",slug:"创建vue项目",link:"#创建vue项目",children:[]},{level:2,title:"scss🍅",slug:"scss",link:"#scss",children:[]},{level:2,title:"常见用法🍅",slug:"常见用法",link:"#常见用法",children:[{level:3,title:"导入项目内静态资源🐸",slug:"导入项目内静态资源",link:"#导入项目内静态资源",children:[]}]}],path:"/study/web/vite.html",pathLocale:"/",extraFields:[]},{title:"Vue",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"教程🐟",slug:"教程",link:"#教程",children:[{level:3,title:"插槽slot🍏",slug:"插槽slot",link:"#插槽slot",children:[]},{level:3,title:"复用组件🐯",slug:"复用组件",link:"#复用组件",children:[]}]},{level:2,title:"插件🍎",slug:"插件",link:"#插件",children:[{level:3,title:"桌面端🐯",slug:"桌面端",link:"#桌面端",children:[]},{level:3,title:"移动端😎",slug:"移动端",link:"#移动端",children:[]},{level:3,title:"可视化组件💢",slug:"可视化组件",link:"#可视化组件",children:[]},{level:3,title:"创建项目😄",slug:"创建项目",link:"#创建项目",children:[]}]},{level:2,title:"事件👏",slug:"事件",link:"#事件",children:[{level:3,title:"指针事件😃",slug:"指针事件",link:"#指针事件",children:[]}]},{level:2,title:"组件库🍊",slug:"组件库",link:"#组件库",children:[{level:3,title:"VueCss⭐",slug:"vuecss",link:"#vuecss",children:[]},{level:3,title:"Markdown👻",slug:"markdown",link:"#markdown",children:[]},{level:3,title:"复制工具🍊",slug:"复制工具",link:"#复制工具",children:[]}]}],path:"/study/web/vue.html",pathLocale:"/",extraFields:[]},{title:"Chess",headers:[{level:2,title:"棋牌",slug:"棋牌",link:"#棋牌",children:[]},{level:2,title:"伪代码",slug:"伪代码",link:"#伪代码",children:[]}],path:"/study/game/design/chess.html",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/design-mode/design-mode.html",pathLocale:"/",extraFields:[]},{title:"代理模式",headers:[{level:2,title:"jdk代理",slug:"jdk代理",link:"#jdk代理",children:[]},{level:2,title:"cglib代理",slug:"cglib代理",link:"#cglib代理",children:[]}],path:"/study/java/design-mode/proxy.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"Design",headers:[],path:"/study/game/design/",pathLocale:"/",extraFields:[]},{title:"Design Mode",headers:[],path:"/study/java/design-mode/",pathLocale:"/",extraFields:[]},{title:"分类",headers:[],path:"/category/",pathLocale:"/",extraFields:[]},{title:"Category",headers:[],path:"/en/category/",pathLocale:"/",extraFields:[]},{title:"标签",headers:[],path:"/tag/",pathLocale:"/",extraFields:[]},{title:"Tag",headers:[],path:"/en/tag/",pathLocale:"/",extraFields:[]},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:[]},{title:"Articles",headers:[],path:"/en/article/",pathLocale:"/",extraFields:[]},{title:"星标",headers:[],path:"/star/",pathLocale:"/",extraFields:[]},{title:"Star",headers:[],path:"/en/star/",pathLocale:"/",extraFields:[]},{title:"时间轴",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"Timeline",headers:[],path:"/en/timeline/",pathLocale:"/",extraFields:[]}],c3=J(r3),u3=()=>c3,p3=({searchIndex:n,routeLocale:e,query:t,maxSuggestions:s})=>{const a=b(()=>n.value.filter(l=>l.pathLocale===e.value));return b(()=>{const l=t.value.trim().toLowerCase();if(!l)return[];const o=[],c=(r,u)=>{$i(l,[u.title])&&o.push({link:`${r.path}#${u.slug}`,title:r.title,header:u.title});for(const p of u.children){if(o.length>=s.value)return;c(r,p)}};for(const r of a.value){if(o.length>=s.value)break;if($i(l,[r.title,...r.extraFields])){o.push({link:r.path,title:r.title});continue}for(const u of r.headers){if(o.length>=s.value)break;c(r,u)}}return o})},d3=n=>{const e=J(0);return{focusIndex:e,focusNext:()=>{e.value<n.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=n.value.length-1}}},h3=$({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(n){const{locales:e,hotKeys:t,maxSuggestions:s}=jp(n),a=Je(),l=he(),o=u3(),c=J(null),r=J(!1),u=J(""),p=b(()=>e.value[l.value]??{}),d=p3({searchIndex:o,routeLocale:l,query:u,maxSuggestions:s}),{focusIndex:h,focusNext:f,focusPrev:k}=d3(d);i3({input:c,hotKeys:t});const _=b(()=>r.value&&!!d.value.length),w=()=>{_.value&&k()},y=()=>{_.value&&f()},E=v=>{if(!_.value)return;const T=d.value[v];T&&a.push(T.link).then(()=>{u.value="",h.value=0})};return()=>i("form",{class:"search-box",role:"search"},[i("input",{ref:c,type:"search",placeholder:p.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>r.value=!0,onBlur:()=>r.value=!1,onInput:v=>u.value=v.target.value,onKeydown:v=>{switch(v.key){case"ArrowUp":{w();break}case"ArrowDown":{y();break}case"Enter":{v.preventDefault(),E(h.value);break}}}}),_.value&&i("ul",{class:"suggestions",onMouseleave:()=>h.value=-1},d.value.map(({link:v,title:T,header:j},L)=>i("li",{class:["suggestion",{focus:h.value===L}],onMouseenter:()=>h.value=L,onMousedown:()=>E(L)},i("a",{href:v,onClick:q=>q.preventDefault()},[i("span",{class:"page-title"},T),j&&i("span",{class:"page-header"},`> ${j}`)]))))])}});var f3=["s","/"],g3={};const m3=g3,k3=f3,v3=5,y3=Kn({enhance({app:n}){n.component("SearchBox",e=>i(h3,{locales:m3,hotKeys:k3,maxSuggestions:v3,...e}))}}),b3=(n,e)=>{const t=n.__vccOpts||n;for(const[s,a]of e)t[s]=a;return t},w3={class:"my"},_3={__name:"MyHello",setup(n){return console.log("Hello 组件！"),(e,t)=>(Od(),Fd("div",w3))}},x3=b3(_3,[["__scopeId","data-v-78c1a974"],["__file","MyHello.vue"]]),E3=Kn({enhance:({app:n,router:e,siteData:t})=>{n.component("MyComponent",x3)}}),qs=[n1,W1,X1,s0,o0,u0,f0,y0,C0,$0,H0,nf,t3,y3,E3],L3=JSON.parse(`{"base":"/","lang":"en-US","title":"LiCheng Blog","description":"vuepress-theme-hope 的演示","head":[["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-Y1CRKZRBH8","async":true}],["script",{},"  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n\\n  gtag('config', 'G-Y1CRKZRBH8');"]],"locales":{"/":{"lang":"zh-CN"},"/en/":{"lang":"en-US"}}}`);var Ht=jn(L3),T3=b2,C3=()=>{const n=W2({history:T3(Ml("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,t,s)=>s||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Ce){const s=at(e.path);if(s.path!==e.path)return s.path;const a=await s.loader();e.meta={...s.meta,_pageChunk:a}}else e.path===t.path&&(e.meta=t.meta)}),n},S3=n=>{n.component("ClientOnly",da),n.component("Content",lc),n.component("RouteLink",Sn)},I3=(n,e,t)=>{const s=b(()=>e.currentRoute.value.path),a=Tl((w,y)=>({get(){return w(),e.currentRoute.value.meta._pageChunk},set(E){e.currentRoute.value.meta._pageChunk=E,y()}})),l=b(()=>Qe.resolveLayouts(t)),o=b(()=>Qe.resolveRouteLocale(Ht.value.locales,s.value)),c=b(()=>Qe.resolveSiteLocaleData(Ht.value,o.value)),r=b(()=>a.value.comp),u=b(()=>a.value.data),p=b(()=>u.value.frontmatter),d=b(()=>Qe.resolvePageHeadTitle(u.value,c.value)),h=b(()=>Qe.resolvePageHead(d.value,p.value,c.value)),f=b(()=>Qe.resolvePageLang(u.value,c.value)),k=b(()=>Qe.resolvePageLayout(u.value,l.value)),_={layouts:l,pageData:u,pageComponent:r,pageFrontmatter:p,pageHead:h,pageHeadTitle:d,pageLang:f,pageLayout:k,redirects:Za,routeLocale:o,routePath:s,routes:ls,siteData:Ht,siteLocaleData:c};return n.provide($l,_),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>h.value},$headTitle:{get:()=>d.value},$lang:{get:()=>f.value},$page:{get:()=>u.value},$routeLocale:{get:()=>o.value},$site:{get:()=>Ht.value},$siteLocale:{get:()=>c.value},$withBase:{get:()=>En}}),_},A3=()=>{const n=K2(),e=Nl();let t=[];const s=()=>{n.value.forEach(o=>{const c=P3(o);c&&t.push(c)})},a=()=>{const o=[];return n.value.forEach(c=>{const r=D3(c);r&&o.push(r)}),o},l=()=>{document.documentElement.lang=e.value;const o=a();t.forEach((c,r)=>{const u=o.findIndex(p=>c.isEqualNode(p));u===-1?(c.remove(),delete t[r]):o.splice(u,1)}),o.forEach(c=>document.head.appendChild(c)),t=[...t.filter(c=>!!c),...o]};ue(Y2,l),bn(()=>{s(),dn(n,l,{immediate:!1})})},P3=([n,e,t=""])=>{const s=Object.entries(e).map(([c,r])=>vn(r)?`[${c}=${JSON.stringify(r)}]`:r===!0?`[${c}]`:"").join(""),a=`head > ${n}${s}`;return Array.from(document.querySelectorAll(a)).find(c=>c.innerText===t)||null},D3=([n,e,t])=>{if(!vn(n))return null;const s=document.createElement(n);return ys(e)&&Object.entries(e).forEach(([a,l])=>{vn(l)?s.setAttribute(a,l):l===!0&&s.setAttribute(a,"")}),vn(t)&&s.appendChild(document.createTextNode(t)),s},R3=Ih,O3=async()=>{var t;const n=R3({name:"Vuepress",setup(){var l;A3();for(const o of qs)(l=o.setup)==null||l.call(o);const s=qs.flatMap(({rootComponents:o=[]})=>o.map(c=>i(c))),a=J2();return()=>[i(a.value),s]}}),e=C3();S3(n),I3(n,e,qs);for(const s of qs)await((t=s.enhance)==null?void 0:t.call(s,{app:n,router:e,siteData:Ht}));return n.use(e),{app:n,router:e}};O3().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{b3 as _,Dr as a,An as b,Fd as c,O3 as createVueApp,M3 as d,Rr as e,Od as o,ce as r,Wp as w};

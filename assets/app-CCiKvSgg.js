function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/java-orm.html-dRYZvsV2.js","assets/img-zi5H8HGR.js","assets/jorm.html-uI5wxK3h.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fl(e,n){const t=new Set(e.split(","));return n?s=>t.has(s.toLowerCase()):s=>t.has(s)}const _e={},yt=[],Ze=()=>{},Yu=()=>!1,ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gl=e=>e.startsWith("onUpdate:"),Se=Object.assign,ml=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Xu=Object.prototype.hasOwnProperty,ce=(e,n)=>Xu.call(e,n),Z=Array.isArray,Bt=e=>sa(e)==="[object Map]",Qu=e=>sa(e)==="[object Set]",te=e=>typeof e=="function",Me=e=>typeof e=="string",ta=e=>typeof e=="symbol",Ee=e=>e!==null&&typeof e=="object",Hi=e=>(Ee(e)||te(e))&&te(e.then)&&te(e.catch),Zu=Object.prototype.toString,sa=e=>Zu.call(e),ep=e=>sa(e).slice(8,-1),np=e=>sa(e)==="[object Object]",kl=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bt=fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},tp=/-(\w)/g,tn=aa(e=>e.replace(tp,(n,t)=>t?t.toUpperCase():"")),sp=/\B([A-Z])/g,It=aa(e=>e.replace(sp,"-$1").toLowerCase()),ds=aa(e=>e.charAt(0).toUpperCase()+e.slice(1)),ba=aa(e=>e?`on${ds(e)}`:""),qn=(e,n)=>!Object.is(e,n),wa=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},Gs=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},ap=e=>{const n=parseFloat(e);return isNaN(n)?e:n},lp=e=>{const n=Me(e)?Number(e):NaN;return isNaN(n)?e:n};let uo;const Vi=()=>uo||(uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vl(e){if(Z(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],a=Me(s)?cp(s):vl(s);if(a)for(const l in a)n[l]=a[l]}return n}else if(Me(e)||Ee(e))return e}const op=/;(?![^(]*\))/g,ip=/:([^]+)/,rp=/\/\*[^]*?\*\//g;function cp(e){const n={};return e.replace(rp,"").split(op).forEach(t=>{if(t){const s=t.split(ip);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function yl(e){let n="";if(Me(e))n=e;else if(Z(e))for(let t=0;t<e.length;t++){const s=yl(e[t]);s&&(n+=s+" ")}else if(Ee(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=fl(up);function Bi(e){return!!e||e===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class dp{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!n&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=Je;try{return Je=this,n()}finally{Je=t}}}on(){Je=this}off(){Je=this.parent}stop(n){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function hp(e,n=Je){n&&n.active&&n.effects.push(e)}function zi(){return Je}function fp(e){Je&&Je.cleanups.push(e)}let tt;class bl{constructor(n,t,s,a){this.fn=n,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,hp(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ot();for(let n=0;n<this._depsLength;n++){const t=this.deps[n];if(t.computed&&(gp(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),it()}return this._dirtyLevel>=4}set dirty(n){this._dirtyLevel=n?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=Bn,t=tt;try{return Bn=!0,tt=this,this._runnings++,po(this),this.fn()}finally{ho(this),this._runnings--,tt=t,Bn=n}}stop(){var n;this.active&&(po(this),ho(this),(n=this.onStop)==null||n.call(this),this.active=!1)}}function gp(e){return e.value}function po(e){e._trackId++,e._depsLength=0}function ho(e){if(e.deps.length>e._depsLength){for(let n=e._depsLength;n<e.deps.length;n++)qi(e.deps[n],e);e.deps.length=e._depsLength}}function qi(e,n){const t=e.get(n);t!==void 0&&n._trackId!==t&&(e.delete(n),e.size===0&&e.cleanup())}let Bn=!0,Ba=0;const Wi=[];function ot(){Wi.push(Bn),Bn=!1}function it(){const e=Wi.pop();Bn=e===void 0?!0:e}function wl(){Ba++}function _l(){for(Ba--;!Ba&&za.length;)za.shift()()}function Ui(e,n,t){if(n.get(e)!==e._trackId){n.set(e,e._trackId);const s=e.deps[e._depsLength];s!==n?(s&&qi(s,e),e.deps[e._depsLength++]=n):e._depsLength++}}const za=[];function Gi(e,n,t){wl();for(const s of e.keys()){let a;s._dirtyLevel<n&&(a??(a=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=n),s._shouldSchedule&&(a??(a=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&za.push(s.scheduler)))}_l()}const Ki=(e,n)=>{const t=new Map;return t.cleanup=e,t.computed=n,t},Ks=new WeakMap,st=Symbol(""),qa=Symbol("");function Ue(e,n,t){if(Bn&&tt){let s=Ks.get(e);s||Ks.set(e,s=new Map);let a=s.get(t);a||s.set(t,a=Ki(()=>s.delete(t))),Ui(tt,a)}}function Sn(e,n,t,s,a,l){const o=Ks.get(e);if(!o)return;let c=[];if(n==="clear")c=[...o.values()];else if(t==="length"&&Z(e)){const r=Number(s);o.forEach((u,p)=>{(p==="length"||!ta(p)&&p>=r)&&c.push(u)})}else switch(t!==void 0&&c.push(o.get(t)),n){case"add":Z(e)?kl(t)&&c.push(o.get("length")):(c.push(o.get(st)),Bt(e)&&c.push(o.get(qa)));break;case"delete":Z(e)||(c.push(o.get(st)),Bt(e)&&c.push(o.get(qa)));break;case"set":Bt(e)&&c.push(o.get(st));break}wl();for(const r of c)r&&Gi(r,4);_l()}function mp(e,n){var t;return(t=Ks.get(e))==null?void 0:t.get(n)}const kp=fl("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ta)),fo=vp();function vp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=oe(this);for(let l=0,o=this.length;l<o;l++)Ue(s,"get",l+"");const a=s[n](...t);return a===-1||a===!1?s[n](...t.map(oe)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){ot(),wl();const s=oe(this)[n].apply(this,t);return _l(),it(),s}}),e}function yp(e){const n=oe(this);return Ue(n,"has",e),n.hasOwnProperty(e)}class Yi{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){const a=this._isReadonly,l=this._isShallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return l;if(t==="__v_raw")return s===(a?l?Dp:er:l?Zi:Qi).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const o=Z(n);if(!a){if(o&&ce(fo,t))return Reflect.get(fo,t,s);if(t==="hasOwnProperty")return yp}const c=Reflect.get(n,t,s);return(ta(t)?Ji.has(t):kp(t))||(a||Ue(n,"get",t),l)?c:Ie(c)?o&&kl(t)?c:c.value:Ee(c)?a?rt(c):hs(c):c}}class Xi extends Yi{constructor(n=!1){super(!1,n)}set(n,t,s,a){let l=n[t];if(!this._isShallow){const r=Et(l);if(!Js(s)&&!Et(s)&&(l=oe(l),s=oe(s)),!Z(n)&&Ie(l)&&!Ie(s))return r?!1:(l.value=s,!0)}const o=Z(n)&&kl(t)?Number(t)<n.length:ce(n,t),c=Reflect.set(n,t,s,a);return n===oe(a)&&(o?qn(s,l)&&Sn(n,"set",t,s):Sn(n,"add",t,s)),c}deleteProperty(n,t){const s=ce(n,t);n[t];const a=Reflect.deleteProperty(n,t);return a&&s&&Sn(n,"delete",t,void 0),a}has(n,t){const s=Reflect.has(n,t);return(!ta(t)||!Ji.has(t))&&Ue(n,"has",t),s}ownKeys(n){return Ue(n,"iterate",Z(n)?"length":st),Reflect.ownKeys(n)}}class bp extends Yi{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const wp=new Xi,_p=new bp,xp=new Xi(!0),xl=e=>e,la=e=>Reflect.getPrototypeOf(e);function Is(e,n,t=!1,s=!1){e=e.__v_raw;const a=oe(e),l=oe(n);t||(qn(n,l)&&Ue(a,"get",n),Ue(a,"get",l));const{has:o}=la(a),c=s?xl:t?Tl:Xt;if(o.call(a,n))return c(e.get(n));if(o.call(a,l))return c(e.get(l));e!==a&&e.get(n)}function Ps(e,n=!1){const t=this.__v_raw,s=oe(t),a=oe(e);return n||(qn(e,a)&&Ue(s,"has",e),Ue(s,"has",a)),e===a?t.has(e):t.has(e)||t.has(a)}function Ds(e,n=!1){return e=e.__v_raw,!n&&Ue(oe(e),"iterate",st),Reflect.get(e,"size",e)}function go(e){e=oe(e);const n=oe(this);return la(n).has.call(n,e)||(n.add(e),Sn(n,"add",e,e)),this}function mo(e,n){n=oe(n);const t=oe(this),{has:s,get:a}=la(t);let l=s.call(t,e);l||(e=oe(e),l=s.call(t,e));const o=a.call(t,e);return t.set(e,n),l?qn(n,o)&&Sn(t,"set",e,n):Sn(t,"add",e,n),this}function ko(e){const n=oe(this),{has:t,get:s}=la(n);let a=t.call(n,e);a||(e=oe(e),a=t.call(n,e)),s&&s.call(n,e);const l=n.delete(e);return a&&Sn(n,"delete",e,void 0),l}function vo(){const e=oe(this),n=e.size!==0,t=e.clear();return n&&Sn(e,"clear",void 0,void 0),t}function Os(e,n){return function(s,a){const l=this,o=l.__v_raw,c=oe(o),r=n?xl:e?Tl:Xt;return!e&&Ue(c,"iterate",st),o.forEach((u,p)=>s.call(a,r(u),r(p),l))}}function Rs(e,n,t){return function(...s){const a=this.__v_raw,l=oe(a),o=Bt(l),c=e==="entries"||e===Symbol.iterator&&o,r=e==="keys"&&o,u=a[e](...s),p=t?xl:n?Tl:Xt;return!n&&Ue(l,"iterate",r?qa:st),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:c?[p(d[0]),p(d[1])]:p(d),done:h}},[Symbol.iterator](){return this}}}}function Dn(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Ep(){const e={get(l){return Is(this,l)},get size(){return Ds(this)},has:Ps,add:go,set:mo,delete:ko,clear:vo,forEach:Os(!1,!1)},n={get(l){return Is(this,l,!1,!0)},get size(){return Ds(this)},has:Ps,add:go,set:mo,delete:ko,clear:vo,forEach:Os(!1,!0)},t={get(l){return Is(this,l,!0)},get size(){return Ds(this,!0)},has(l){return Ps.call(this,l,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Os(!0,!1)},s={get(l){return Is(this,l,!0,!0)},get size(){return Ds(this,!0)},has(l){return Ps.call(this,l,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Rs(l,!1,!1),t[l]=Rs(l,!0,!1),n[l]=Rs(l,!1,!0),s[l]=Rs(l,!0,!0)}),[e,t,n,s]}const[Lp,Tp,Cp,Sp]=Ep();function El(e,n){const t=n?e?Sp:Cp:e?Tp:Lp;return(s,a,l)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(ce(t,a)&&a in s?t:s,a,l)}const Ap={get:El(!1,!1)},Ip={get:El(!1,!0)},Pp={get:El(!0,!1)},Qi=new WeakMap,Zi=new WeakMap,er=new WeakMap,Dp=new WeakMap;function Op(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rp(e){return e.__v_skip||!Object.isExtensible(e)?0:Op(ep(e))}function hs(e){return Et(e)?e:Ll(e,!1,wp,Ap,Qi)}function nr(e){return Ll(e,!1,xp,Ip,Zi)}function rt(e){return Ll(e,!0,_p,Pp,er)}function Ll(e,n,t,s,a){if(!Ee(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const l=a.get(e);if(l)return l;const o=Rp(e);if(o===0)return e;const c=new Proxy(e,o===2?s:t);return a.set(e,c),c}function wt(e){return Et(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Js(e){return!!(e&&e.__v_isShallow)}function tr(e){return wt(e)||Et(e)}function oe(e){const n=e&&e.__v_raw;return n?oe(n):e}function sr(e){return Object.isExtensible(e)&&Gs(e,"__v_skip",!0),e}const Xt=e=>Ee(e)?hs(e):e,Tl=e=>Ee(e)?rt(e):e;class ar{constructor(n,t,s,a){this.getter=n,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bl(()=>n(this._value),()=>zt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=s}get value(){const n=oe(this);return(!n._cacheable||n.effect.dirty)&&qn(n._value,n._value=n.effect.run())&&zt(n,4),Cl(n),n.effect._dirtyLevel>=2&&zt(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function Mp(e,n,t=!1){let s,a;const l=te(e);return l?(s=e,a=Ze):(s=e.get,a=e.set),new ar(s,a,l||!a,t)}function Cl(e){var n;Bn&&tt&&(e=oe(e),Ui(tt,(n=e.dep)!=null?n:e.dep=Ki(()=>e.dep=void 0,e instanceof ar?e:void 0)))}function zt(e,n=4,t){e=oe(e);const s=e.dep;s&&Gi(s,n)}function Ie(e){return!!(e&&e.__v_isRef===!0)}function K(e){return lr(e,!1)}function je(e){return lr(e,!0)}function lr(e,n){return Ie(e)?e:new jp(e,n)}class jp{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:oe(n),this._value=t?n:Xt(n)}get value(){return Cl(this),this._value}set value(n){const t=this.__v_isShallow||Js(n)||Et(n);n=t?n:oe(n),qn(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:Xt(n),zt(this,4))}}function on(e){return Ie(e)?e.value:e}const Fp={get:(e,n,t)=>on(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const a=e[n];return Ie(a)&&!Ie(t)?(a.value=t,!0):Reflect.set(e,n,t,s)}};function or(e){return wt(e)?e:new Proxy(e,Fp)}class $p{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:s}=n(()=>Cl(this),()=>zt(this));this._get=t,this._set=s}get value(){return this._get()}set value(n){this._set(n)}}function Sl(e){return new $p(e)}function Np(e){const n=Z(e)?new Array(e.length):{};for(const t in e)n[t]=ir(e,t);return n}class Hp{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return mp(oe(this._object),this._key)}}class Vp{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Pt(e,n,t){return Ie(e)?e:te(e)?new Vp(e):Ee(e)&&arguments.length>1?ir(e,n,t):K(e)}function ir(e,n,t){const s=e[n];return Ie(s)?s:new Hp(e,n,t)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(e,n,t,s){try{return s?e(...s):e()}catch(a){fs(a,n,t)}}function nn(e,n,t,s){if(te(e)){const l=zn(e,n,t,s);return l&&Hi(l)&&l.catch(o=>{fs(o,n,t)}),l}const a=[];for(let l=0;l<e.length;l++)a.push(nn(e[l],n,t,s));return a}function fs(e,n,t,s=!0){const a=n?n.vnode:null;if(n){let l=n.parent;const o=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,o,c)===!1)return}l=l.parent}const r=n.appContext.config.errorHandler;if(r){zn(r,null,10,[e,o,c]);return}}Bp(e,t,a,s)}function Bp(e,n,t,s=!0){console.error(e)}let Qt=!1,Wa=!1;const $e=[];let kn=0;const _t=[];let Fn=null,Zn=0;const rr=Promise.resolve();let Al=null;function Gn(e){const n=Al||rr;return e?n.then(this?e.bind(this):e):n}function zp(e){let n=kn+1,t=$e.length;for(;n<t;){const s=n+t>>>1,a=$e[s],l=Zt(a);l<e||l===e&&a.pre?n=s+1:t=s}return n}function oa(e){(!$e.length||!$e.includes(e,Qt&&e.allowRecurse?kn+1:kn))&&(e.id==null?$e.push(e):$e.splice(zp(e.id),0,e),cr())}function cr(){!Qt&&!Wa&&(Wa=!0,Al=rr.then(ur))}function qp(e){const n=$e.indexOf(e);n>kn&&$e.splice(n,1)}function Wp(e){Z(e)?_t.push(...e):(!Fn||!Fn.includes(e,e.allowRecurse?Zn+1:Zn))&&_t.push(e),cr()}function yo(e,n,t=Qt?kn+1:0){for(;t<$e.length;t++){const s=$e[t];if(s&&s.pre){if(e&&s.id!==e.uid)continue;$e.splice(t,1),t--,s()}}}function Ys(e){if(_t.length){const n=[...new Set(_t)].sort((t,s)=>Zt(t)-Zt(s));if(_t.length=0,Fn){Fn.push(...n);return}for(Fn=n,Zn=0;Zn<Fn.length;Zn++)Fn[Zn]();Fn=null,Zn=0}}const Zt=e=>e.id==null?1/0:e.id,Up=(e,n)=>{const t=Zt(e)-Zt(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function ur(e){Wa=!1,Qt=!0,$e.sort(Up);try{for(kn=0;kn<$e.length;kn++){const n=$e[kn];n&&n.active!==!1&&zn(n,null,14)}}finally{kn=0,$e.length=0,Ys(),Qt=!1,Al=null,($e.length||_t.length)&&ur()}}function Gp(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||_e;let a=t;const l=n.startsWith("update:"),o=l&&n.slice(7);if(o&&o in s){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[p]||_e;h&&(a=t.map(f=>Me(f)?f.trim():f)),d&&(a=t.map(ap))}let c,r=s[c=ba(n)]||s[c=ba(tn(n))];!r&&l&&(r=s[c=ba(It(n))]),r&&nn(r,e,6,a);const u=s[c+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,nn(u,e,6,a)}}function pr(e,n,t=!1){const s=n.emitsCache,a=s.get(e);if(a!==void 0)return a;const l=e.emits;let o={},c=!1;if(!te(e)){const r=u=>{const p=pr(u,n,!0);p&&(c=!0,Se(o,p))};!t&&n.mixins.length&&n.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!l&&!c?(Ee(e)&&s.set(e,null),null):(Z(l)?l.forEach(r=>o[r]=null):Se(o,l),Ee(e)&&s.set(e,o),o)}function ia(e,n){return!e||!ps(n)?!1:(n=n.slice(2).replace(/Once$/,""),ce(e,n[0].toLowerCase()+n.slice(1))||ce(e,It(n))||ce(e,n))}let en=null,dr=null;function Xs(e){const n=en;return en=e,dr=e&&e.type.__scopeId||null,n}function Kp(e,n=en,t){if(!n||e._n)return e;const s=(...a)=>{s._d&&Po(-1);const l=Xs(n);let o;try{o=e(...a)}finally{Xs(l),s._d&&Po(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _a(e){const{type:n,vnode:t,proxy:s,withProxy:a,props:l,propsOptions:[o],slots:c,attrs:r,emit:u,render:p,renderCache:d,data:h,setupState:f,ctx:k,inheritAttrs:_}=e;let w,y;const E=Xs(e);try{if(t.shapeFlag&4){const T=a||s,O=T;w=ln(p.call(O,T,d,l,f,h,k)),y=r}else{const T=n;w=ln(T.length>1?T(l,{attrs:r,slots:c,emit:u}):T(l,null)),y=n.props?r:Jp(r)}}catch(T){Kt.length=0,fs(T,e,1),w=Ae(yn)}let v=w;if(y&&_!==!1){const T=Object.keys(y),{shapeFlag:O}=v;T.length&&O&7&&(o&&T.some(gl)&&(y=Yp(y,o)),v=Wn(v,y))}return t.dirs&&(v=Wn(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),w=v,Xs(E),w}const Jp=e=>{let n;for(const t in e)(t==="class"||t==="style"||ps(t))&&((n||(n={}))[t]=e[t]);return n},Yp=(e,n)=>{const t={};for(const s in e)(!gl(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Xp(e,n,t){const{props:s,children:a,component:l}=e,{props:o,children:c,patchFlag:r}=n,u=l.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&r>=0){if(r&1024)return!0;if(r&16)return s?bo(s,o,u):!!o;if(r&8){const p=n.dynamicProps;for(let d=0;d<p.length;d++){const h=p[d];if(o[h]!==s[h]&&!ia(u,h))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?bo(s,o,u):!0:!!o;return!1}function bo(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const l=s[a];if(n[l]!==e[l]&&!ia(t,l))return!0}return!1}function Qp({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const hr="components";function cn(e,n){return ed(hr,e,!0,n)||e}const Zp=Symbol.for("v-ndc");function ed(e,n,t=!0,s=!1){const a=en||Oe;if(a){const l=a.type;if(e===hr){const c=Xd(l,!1);if(c&&(c===n||c===tn(n)||c===ds(tn(n))))return l}const o=wo(a[e]||l[e],n)||wo(a.appContext[e],n);return!o&&s?l:o}}function wo(e,n){return e&&(e[n]||e[tn(n)]||e[ds(tn(n))])}const nd=e=>e.__isSuspense;function fr(e,n){n&&n.pendingBranch?Z(e)?n.effects.push(...e):n.effects.push(e):Wp(e)}const td=Symbol.for("v-scx"),sd=()=>ve(td);function gr(e,n){return Il(e,null,n)}const Ms={};function pe(e,n,t){return Il(e,n,t)}function Il(e,n,{immediate:t,deep:s,flush:a,once:l,onTrack:o,onTrigger:c}=_e){if(n&&l){const L=n;n=(...j)=>{L(...j),O()}}const r=Oe,u=L=>s===!0?L:vt(L,s===!1?1:void 0);let p,d=!1,h=!1;if(Ie(e)?(p=()=>e.value,d=Js(e)):wt(e)?(p=()=>u(e),d=!0):Z(e)?(h=!0,d=e.some(L=>wt(L)||Js(L)),p=()=>e.map(L=>{if(Ie(L))return L.value;if(wt(L))return u(L);if(te(L))return zn(L,r,2)})):te(e)?n?p=()=>zn(e,r,2):p=()=>(f&&f(),nn(e,r,3,[k])):p=Ze,n&&s){const L=p;p=()=>vt(L())}let f,k=L=>{f=v.onStop=()=>{zn(L,r,4),f=v.onStop=void 0}},_;if(vs)if(k=Ze,n?t&&nn(n,r,3,[p(),h?[]:void 0,k]):p(),a==="sync"){const L=sd();_=L.__watcherHandles||(L.__watcherHandles=[])}else return Ze;let w=h?new Array(e.length).fill(Ms):Ms;const y=()=>{if(!(!v.active||!v.dirty))if(n){const L=v.run();(s||d||(h?L.some((j,R)=>qn(j,w[R])):qn(L,w)))&&(f&&f(),nn(n,r,3,[L,w===Ms?void 0:h&&w[0]===Ms?[]:w,k]),w=L)}else v.run()};y.allowRecurse=!!n;let E;a==="sync"?E=y:a==="post"?E=()=>ze(y,r&&r.suspense):(y.pre=!0,r&&(y.id=r.uid),E=()=>oa(y));const v=new bl(p,Ze,E),T=zi(),O=()=>{v.stop(),T&&ml(T.effects,v)};return n?t?y():w=v.run():a==="post"?ze(v.run.bind(v),r&&r.suspense):v.run(),_&&_.push(O),O}function ad(e,n,t){const s=this.proxy,a=Me(e)?e.includes(".")?mr(s,e):()=>s[e]:e.bind(s,s);let l;te(n)?l=n:(l=n.handler,t=n);const o=ks(this),c=Il(a,l.bind(s),t);return o(),c}function mr(e,n){const t=n.split(".");return()=>{let s=e;for(let a=0;a<t.length&&s;a++)s=s[t[a]];return s}}function vt(e,n,t=0,s){if(!Ee(e)||e.__v_skip)return e;if(n&&n>0){if(t>=n)return e;t++}if(s=s||new Set,s.has(e))return e;if(s.add(e),Ie(e))vt(e.value,n,t,s);else if(Z(e))for(let a=0;a<e.length;a++)vt(e[a],n,t,s);else if(Qu(e)||Bt(e))e.forEach(a=>{vt(a,n,t,s)});else if(np(e))for(const a in e)vt(e[a],n,t,s);return e}function mn(e,n,t,s){const a=e.dirs,l=n&&n.dirs;for(let o=0;o<a.length;o++){const c=a[o];l&&(c.oldValue=l[o].value);let r=c.dir[s];r&&(ot(),nn(r,t,8,[e.el,c,e,n]),it())}}const $n=Symbol("_leaveCb"),js=Symbol("_enterCb");function kr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ye(()=>{e.isMounted=!0}),Dl(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],vr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},ld={name:"BaseTransition",props:vr,setup(e,{slots:n}){const t=ms(),s=kr();return()=>{const a=n.default&&Pl(n.default(),!0);if(!a||!a.length)return;let l=a[0];if(a.length>1){for(const h of a)if(h.type!==yn){l=h;break}}const o=oe(e),{mode:c}=o;if(s.isLeaving)return xa(l);const r=_o(l);if(!r)return xa(l);const u=es(r,o,s,t);ns(r,u);const p=t.subTree,d=p&&_o(p);if(d&&d.type!==yn&&!et(r,d)){const h=es(d,o,s,t);if(ns(d,h),c==="out-in")return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},xa(l);c==="in-out"&&r.type!==yn&&(h.delayLeave=(f,k,_)=>{const w=yr(s,d);w[String(d.key)]=d,f[$n]=()=>{k(),f[$n]=void 0,delete u.delayedLeave},u.delayedLeave=_})}return l}}},od=ld;function yr(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function es(e,n,t,s){const{appear:a,mode:l,persisted:o=!1,onBeforeEnter:c,onEnter:r,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:k,onBeforeAppear:_,onAppear:w,onAfterAppear:y,onAppearCancelled:E}=n,v=String(e.key),T=yr(t,e),O=(R,Y)=>{R&&nn(R,s,9,Y)},L=(R,Y)=>{const D=Y[1];O(R,Y),Z(R)?R.every(X=>X.length<=1)&&D():R.length<=1&&D()},j={mode:l,persisted:o,beforeEnter(R){let Y=c;if(!t.isMounted)if(a)Y=_||c;else return;R[$n]&&R[$n](!0);const D=T[v];D&&et(e,D)&&D.el[$n]&&D.el[$n](),O(Y,[R])},enter(R){let Y=r,D=u,X=p;if(!t.isMounted)if(a)Y=w||r,D=y||u,X=E||p;else return;let $=!1;const ee=R[js]=Le=>{$||($=!0,Le?O(X,[R]):O(D,[R]),j.delayedLeave&&j.delayedLeave(),R[js]=void 0)};Y?L(Y,[R,ee]):ee()},leave(R,Y){const D=String(e.key);if(R[js]&&R[js](!0),t.isUnmounting)return Y();O(d,[R]);let X=!1;const $=R[$n]=ee=>{X||(X=!0,Y(),ee?O(k,[R]):O(f,[R]),R[$n]=void 0,T[D]===e&&delete T[D])};T[D]=e,h?L(h,[R,$]):$()},clone(R){return es(R,n,t,s)}};return j}function xa(e){if(gs(e))return e=Wn(e),e.children=null,e}function _o(e){return gs(e)?e.children?e.children[0]:void 0:e}function ns(e,n){e.shapeFlag&6&&e.component?ns(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Pl(e,n=!1,t){let s=[],a=0;for(let l=0;l<e.length;l++){let o=e[l];const c=t==null?o.key:String(t)+String(o.key!=null?o.key:l);o.type===Ye?(o.patchFlag&128&&a++,s=s.concat(Pl(o.children,n,c))):(n||o.type!==yn)&&s.push(c!=null?Wn(o,{key:c}):o)}if(a>1)for(let l=0;l<s.length;l++)s[l].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function H(e,n){return te(e)?Se({name:e.name},n,{setup:e}):e}const qt=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function id(e){te(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:s,delay:a=200,timeout:l,suspensible:o=!0,onError:c}=e;let r=null,u,p=0;const d=()=>(p++,r=null,h()),h=()=>{let f;return r||(f=r=n().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),c)return new Promise((_,w)=>{c(k,()=>_(d()),()=>w(k),p+1)});throw k}).then(k=>f!==r&&r?r:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),u=k,k)))};return H({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const f=Oe;if(u)return()=>Ea(u,f);const k=E=>{r=null,fs(E,f,13,!s)};if(o&&f.suspense||vs)return h().then(E=>()=>Ea(E,f)).catch(E=>(k(E),()=>s?Ae(s,{error:E}):null));const _=K(!1),w=K(),y=K(!!a);return a&&setTimeout(()=>{y.value=!1},a),l!=null&&setTimeout(()=>{if(!_.value&&!w.value){const E=new Error(`Async component timed out after ${l}ms.`);k(E),w.value=E}},l),h().then(()=>{_.value=!0,f.parent&&gs(f.parent.vnode)&&(f.parent.effect.dirty=!0,oa(f.parent.update))}).catch(E=>{k(E),w.value=E}),()=>{if(_.value&&u)return Ea(u,f);if(w.value&&s)return Ae(s,{error:w.value});if(t&&!y.value)return Ae(t)}}})}function Ea(e,n){const{ref:t,props:s,children:a,ce:l}=n.vnode,o=Ae(e,s,a);return o.ref=t,o.ce=l,delete n.vnode.ce,o}const gs=e=>e.type.__isKeepAlive;function rd(e,n){br(e,"a",n)}function cd(e,n){br(e,"da",n)}function br(e,n,t=Oe){const s=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ra(n,s,t),t){let a=t.parent;for(;a&&a.parent;)gs(a.parent.vnode)&&ud(s,n,t,a),a=a.parent}}function ud(e,n,t,s){const a=ra(n,e,s,!0);Dt(()=>{ml(s[n],a)},t)}function ra(e,n,t=Oe,s=!1){if(t){const a=t[e]||(t[e]=[]),l=n.__weh||(n.__weh=(...o)=>{if(t.isUnmounted)return;ot();const c=ks(t),r=nn(n,t,e,o);return c(),it(),r});return s?a.unshift(l):a.push(l),l}}const An=e=>(n,t=Oe)=>(!vs||e==="sp")&&ra(e,(...s)=>n(...s),t),pd=An("bm"),ye=An("m"),dd=An("bu"),wr=An("u"),Dl=An("bum"),Dt=An("um"),hd=An("sp"),fd=An("rtg"),gd=An("rtc");function md(e,n=Oe){ra("ec",e,n)}const Ua=e=>e?Mr(e)?jl(e)||e.proxy:Ua(e.parent):null,Wt=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ua(e.parent),$root:e=>Ua(e.root),$emit:e=>e.emit,$options:e=>Ol(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,oa(e.update)}),$nextTick:e=>e.n||(e.n=Gn.bind(e.proxy)),$watch:e=>ad.bind(e)}),La=(e,n)=>e!==_e&&!e.__isScriptSetup&&ce(e,n),kd={get({_:e},n){const{ctx:t,setupState:s,data:a,props:l,accessCache:o,type:c,appContext:r}=e;let u;if(n[0]!=="$"){const f=o[n];if(f!==void 0)switch(f){case 1:return s[n];case 2:return a[n];case 4:return t[n];case 3:return l[n]}else{if(La(s,n))return o[n]=1,s[n];if(a!==_e&&ce(a,n))return o[n]=2,a[n];if((u=e.propsOptions[0])&&ce(u,n))return o[n]=3,l[n];if(t!==_e&&ce(t,n))return o[n]=4,t[n];Ga&&(o[n]=0)}}const p=Wt[n];let d,h;if(p)return n==="$attrs"&&Ue(e,"get",n),p(e);if((d=c.__cssModules)&&(d=d[n]))return d;if(t!==_e&&ce(t,n))return o[n]=4,t[n];if(h=r.config.globalProperties,ce(h,n))return h[n]},set({_:e},n,t){const{data:s,setupState:a,ctx:l}=e;return La(a,n)?(a[n]=t,!0):s!==_e&&ce(s,n)?(s[n]=t,!0):ce(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(l[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:a,propsOptions:l}},o){let c;return!!t[o]||e!==_e&&ce(e,o)||La(n,o)||(c=l[0])&&ce(c,o)||ce(s,o)||ce(Wt,o)||ce(a.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ce(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function xo(e){return Z(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ga=!0;function vd(e){const n=Ol(e),t=e.proxy,s=e.ctx;Ga=!1,n.beforeCreate&&Eo(n.beforeCreate,e,"bc");const{data:a,computed:l,methods:o,watch:c,provide:r,inject:u,created:p,beforeMount:d,mounted:h,beforeUpdate:f,updated:k,activated:_,deactivated:w,beforeDestroy:y,beforeUnmount:E,destroyed:v,unmounted:T,render:O,renderTracked:L,renderTriggered:j,errorCaptured:R,serverPrefetch:Y,expose:D,inheritAttrs:X,components:$,directives:ee,filters:Le}=n;if(u&&yd(u,s,null),o)for(const se in o){const U=o[se];te(U)&&(s[se]=U.bind(t))}if(a){const se=a.call(t,t);Ee(se)&&(e.data=hs(se))}if(Ga=!0,l)for(const se in l){const U=l[se],sn=te(U)?U.bind(t,t):te(U.get)?U.get.bind(t,t):Ze,Pn=!te(U)&&te(U.set)?U.set.bind(t):Ze,fn=b({get:sn,set:Pn});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>fn.value,set:Be=>fn.value=Be})}if(c)for(const se in c)_r(c[se],s,t,se);if(r){const se=te(r)?r.call(t):r;Reflect.ownKeys(se).forEach(U=>{un(U,se[U])})}p&&Eo(p,e,"c");function G(se,U){Z(U)?U.forEach(sn=>se(sn.bind(t))):U&&se(U.bind(t))}if(G(pd,d),G(ye,h),G(dd,f),G(wr,k),G(rd,_),G(cd,w),G(md,R),G(gd,L),G(fd,j),G(Dl,E),G(Dt,T),G(hd,Y),Z(D))if(D.length){const se=e.exposed||(e.exposed={});D.forEach(U=>{Object.defineProperty(se,U,{get:()=>t[U],set:sn=>t[U]=sn})})}else e.exposed||(e.exposed={});O&&e.render===Ze&&(e.render=O),X!=null&&(e.inheritAttrs=X),$&&(e.components=$),ee&&(e.directives=ee)}function yd(e,n,t=Ze){Z(e)&&(e=Ka(e));for(const s in e){const a=e[s];let l;Ee(a)?"default"in a?l=ve(a.from||s,a.default,!0):l=ve(a.from||s):l=ve(a),Ie(l)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):n[s]=l}}function Eo(e,n,t){nn(Z(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function _r(e,n,t,s){const a=s.includes(".")?mr(t,s):()=>t[s];if(Me(e)){const l=n[e];te(l)&&pe(a,l)}else if(te(e))pe(a,e.bind(t));else if(Ee(e))if(Z(e))e.forEach(l=>_r(l,n,t,s));else{const l=te(e.handler)?e.handler.bind(t):n[e.handler];te(l)&&pe(a,l,e)}}function Ol(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:a,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,c=l.get(n);let r;return c?r=c:!a.length&&!t&&!s?r=n:(r={},a.length&&a.forEach(u=>Qs(r,u,o,!0)),Qs(r,n,o)),Ee(n)&&l.set(n,r),r}function Qs(e,n,t,s=!1){const{mixins:a,extends:l}=n;l&&Qs(e,l,t,!0),a&&a.forEach(o=>Qs(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const c=bd[o]||t&&t[o];e[o]=c?c(e[o],n[o]):n[o]}return e}const bd={data:Lo,props:To,emits:To,methods:Ht,computed:Ht,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Ht,directives:Ht,watch:_d,provide:Lo,inject:wd};function Lo(e,n){return n?e?function(){return Se(te(e)?e.call(this,this):e,te(n)?n.call(this,this):n)}:n:e}function wd(e,n){return Ht(Ka(e),Ka(n))}function Ka(e){if(Z(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ve(e,n){return e?[...new Set([].concat(e,n))]:n}function Ht(e,n){return e?Se(Object.create(null),e,n):n}function To(e,n){return e?Z(e)&&Z(n)?[...new Set([...e,...n])]:Se(Object.create(null),xo(e),xo(n??{})):n}function _d(e,n){if(!e)return n;if(!n)return e;const t=Se(Object.create(null),e);for(const s in n)t[s]=Ve(e[s],n[s]);return t}function xr(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xd=0;function Ed(e,n){return function(s,a=null){te(s)||(s=Se({},s)),a!=null&&!Ee(a)&&(a=null);const l=xr(),o=new WeakSet;let c=!1;const r=l.app={_uid:xd++,_component:s,_props:a,_container:null,_context:l,_instance:null,version:Zd,get config(){return l.config},set config(u){},use(u,...p){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(r,...p)):te(u)&&(o.add(u),u(r,...p))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,p){return p?(l.components[u]=p,r):l.components[u]},directive(u,p){return p?(l.directives[u]=p,r):l.directives[u]},mount(u,p,d){if(!c){const h=Ae(s,a);return h.appContext=l,d===!0?d="svg":d===!1&&(d=void 0),p&&n?n(h,u):e(h,u,d),c=!0,r._container=u,u.__vue_app__=r,jl(h.component)||h.component.proxy}},unmount(){c&&(e(null,r._container),delete r._container.__vue_app__)},provide(u,p){return l.provides[u]=p,r},runWithContext(u){const p=Ut;Ut=r;try{return u()}finally{Ut=p}}};return r}}let Ut=null;function un(e,n){if(Oe){let t=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===t&&(t=Oe.provides=Object.create(s)),t[e]=n}}function ve(e,n,t=!1){const s=Oe||en;if(s||Ut){const a=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ut._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return t&&te(n)?n.call(s&&s.proxy):n}}function Ld(e,n,t,s=!1){const a={},l={};Gs(l,ca,1),e.propsDefaults=Object.create(null),Er(e,n,a,l);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);t?e.props=s?a:nr(a):e.type.props?e.props=a:e.props=l,e.attrs=l}function Td(e,n,t,s){const{props:a,attrs:l,vnode:{patchFlag:o}}=e,c=oe(a),[r]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let h=p[d];if(ia(e.emitsOptions,h))continue;const f=n[h];if(r)if(ce(l,h))f!==l[h]&&(l[h]=f,u=!0);else{const k=tn(h);a[k]=Ja(r,c,k,f,e,!1)}else f!==l[h]&&(l[h]=f,u=!0)}}}else{Er(e,n,a,l)&&(u=!0);let p;for(const d in c)(!n||!ce(n,d)&&((p=It(d))===d||!ce(n,p)))&&(r?t&&(t[d]!==void 0||t[p]!==void 0)&&(a[d]=Ja(r,c,d,void 0,e,!0)):delete a[d]);if(l!==c)for(const d in l)(!n||!ce(n,d))&&(delete l[d],u=!0)}u&&Sn(e,"set","$attrs")}function Er(e,n,t,s){const[a,l]=e.propsOptions;let o=!1,c;if(n)for(let r in n){if(bt(r))continue;const u=n[r];let p;a&&ce(a,p=tn(r))?!l||!l.includes(p)?t[p]=u:(c||(c={}))[p]=u:ia(e.emitsOptions,r)||(!(r in s)||u!==s[r])&&(s[r]=u,o=!0)}if(l){const r=oe(t),u=c||_e;for(let p=0;p<l.length;p++){const d=l[p];t[d]=Ja(a,r,d,u[d],e,!ce(u,d))}}return o}function Ja(e,n,t,s,a,l){const o=e[t];if(o!=null){const c=ce(o,"default");if(c&&s===void 0){const r=o.default;if(o.type!==Function&&!o.skipFactory&&te(r)){const{propsDefaults:u}=a;if(t in u)s=u[t];else{const p=ks(a);s=u[t]=r.call(null,n),p()}}else s=r}o[0]&&(l&&!c?s=!1:o[1]&&(s===""||s===It(t))&&(s=!0))}return s}function Lr(e,n,t=!1){const s=n.propsCache,a=s.get(e);if(a)return a;const l=e.props,o={},c=[];let r=!1;if(!te(e)){const p=d=>{r=!0;const[h,f]=Lr(d,n,!0);Se(o,h),f&&c.push(...f)};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!r)return Ee(e)&&s.set(e,yt),yt;if(Z(l))for(let p=0;p<l.length;p++){const d=tn(l[p]);Co(d)&&(o[d]=_e)}else if(l)for(const p in l){const d=tn(p);if(Co(d)){const h=l[p],f=o[d]=Z(h)||te(h)?{type:h}:Se({},h);if(f){const k=Io(Boolean,f.type),_=Io(String,f.type);f[0]=k>-1,f[1]=_<0||k<_,(k>-1||ce(f,"default"))&&c.push(d)}}}const u=[o,c];return Ee(e)&&s.set(e,u),u}function Co(e){return e[0]!=="$"&&!bt(e)}function So(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ao(e,n){return So(e)===So(n)}function Io(e,n){return Z(n)?n.findIndex(t=>Ao(t,e)):te(n)&&Ao(n,e)?0:-1}const Tr=e=>e[0]==="_"||e==="$stable",Rl=e=>Z(e)?e.map(ln):[ln(e)],Cd=(e,n,t)=>{if(n._n)return n;const s=Kp((...a)=>Rl(n(...a)),t);return s._c=!1,s},Cr=(e,n,t)=>{const s=e._ctx;for(const a in e){if(Tr(a))continue;const l=e[a];if(te(l))n[a]=Cd(a,l,s);else if(l!=null){const o=Rl(l);n[a]=()=>o}}},Sr=(e,n)=>{const t=Rl(n);e.slots.default=()=>t},Sd=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=oe(n),Gs(n,"_",t)):Cr(n,e.slots={})}else e.slots={},n&&Sr(e,n);Gs(e.slots,ca,1)},Ad=(e,n,t)=>{const{vnode:s,slots:a}=e;let l=!0,o=_e;if(s.shapeFlag&32){const c=n._;c?t&&c===1?l=!1:(Se(a,n),!t&&c===1&&delete a._):(l=!n.$stable,Cr(n,a)),o=n}else n&&(Sr(e,n),o={default:1});if(l)for(const c in a)!Tr(c)&&o[c]==null&&delete a[c]};function Zs(e,n,t,s,a=!1){if(Z(e)){e.forEach((h,f)=>Zs(h,n&&(Z(n)?n[f]:n),t,s,a));return}if(qt(s)&&!a)return;const l=s.shapeFlag&4?jl(s.component)||s.component.proxy:s.el,o=a?null:l,{i:c,r}=e,u=n&&n.r,p=c.refs===_e?c.refs={}:c.refs,d=c.setupState;if(u!=null&&u!==r&&(Me(u)?(p[u]=null,ce(d,u)&&(d[u]=null)):Ie(u)&&(u.value=null)),te(r))zn(r,c,12,[o,p]);else{const h=Me(r),f=Ie(r);if(h||f){const k=()=>{if(e.f){const _=h?ce(d,r)?d[r]:p[r]:r.value;a?Z(_)&&ml(_,l):Z(_)?_.includes(l)||_.push(l):h?(p[r]=[l],ce(d,r)&&(d[r]=p[r])):(r.value=[l],e.k&&(p[e.k]=r.value))}else h?(p[r]=o,ce(d,r)&&(d[r]=o)):f&&(r.value=o,e.k&&(p[e.k]=o))};o?(k.id=-1,ze(k,t)):k()}}}let On=!1;const Id=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Pd=e=>e.namespaceURI.includes("MathML"),Fs=e=>{if(Id(e))return"svg";if(Pd(e))return"mathml"},$s=e=>e.nodeType===8;function Dd(e){const{mt:n,p:t,o:{patchProp:s,createText:a,nextSibling:l,parentNode:o,remove:c,insert:r,createComment:u}}=e,p=(v,T)=>{if(!T.hasChildNodes()){t(null,v,T),Ys(),T._vnode=v;return}On=!1,d(T.firstChild,v,null,null,null),Ys(),T._vnode=v,On&&console.error("Hydration completed but contains mismatches.")},d=(v,T,O,L,j,R=!1)=>{const Y=$s(v)&&v.data==="[",D=()=>_(v,T,O,L,j,Y),{type:X,ref:$,shapeFlag:ee,patchFlag:Le}=T;let Te=v.nodeType;T.el=v,Le===-2&&(R=!1,T.dynamicChildren=null);let G=null;switch(X){case Lt:Te!==3?T.children===""?(r(T.el=a(""),o(v),v),G=v):G=D():(v.data!==T.children&&(On=!0,v.data=T.children),G=l(v));break;case yn:E(v)?(G=l(v),y(T.el=v.content.firstChild,v,O)):Te!==8||Y?G=D():G=l(v);break;case Gt:if(Y&&(v=l(v),Te=v.nodeType),Te===1||Te===3){G=v;const se=!T.children.length;for(let U=0;U<T.staticCount;U++)se&&(T.children+=G.nodeType===1?G.outerHTML:G.data),U===T.staticCount-1&&(T.anchor=G),G=l(G);return Y?l(G):G}else D();break;case Ye:Y?G=k(v,T,O,L,j,R):G=D();break;default:if(ee&1)(Te!==1||T.type.toLowerCase()!==v.tagName.toLowerCase())&&!E(v)?G=D():G=h(v,T,O,L,j,R);else if(ee&6){T.slotScopeIds=j;const se=o(v);if(Y?G=w(v):$s(v)&&v.data==="teleport start"?G=w(v,v.data,"teleport end"):G=l(v),n(T,se,null,O,L,Fs(se),R),qt(T)){let U;Y?(U=Ae(Ye),U.anchor=G?G.previousSibling:se.lastChild):U=v.nodeType===3?Rr(""):Ae("div"),U.el=v,T.component.subTree=U}}else ee&64?Te!==8?G=D():G=T.type.hydrate(v,T,O,L,j,R,e,f):ee&128&&(G=T.type.hydrate(v,T,O,L,Fs(o(v)),j,R,e,d))}return $!=null&&Zs($,null,L,T),G},h=(v,T,O,L,j,R)=>{R=R||!!T.dynamicChildren;const{type:Y,props:D,patchFlag:X,shapeFlag:$,dirs:ee,transition:Le}=T,Te=Y==="input"||Y==="option";if(Te||X!==-1){ee&&mn(T,null,O,"created");let G=!1;if(E(v)){G=Ar(L,Le)&&O&&O.vnode.props&&O.vnode.props.appear;const U=v.content.firstChild;G&&Le.beforeEnter(U),y(U,v,O),T.el=v=U}if($&16&&!(D&&(D.innerHTML||D.textContent))){let U=f(v.firstChild,T,v,O,L,j,R);for(;U;){On=!0;const sn=U;U=U.nextSibling,c(sn)}}else $&8&&v.textContent!==T.children&&(On=!0,v.textContent=T.children);if(D)if(Te||!R||X&48)for(const U in D)(Te&&(U.endsWith("value")||U==="indeterminate")||ps(U)&&!bt(U)||U[0]===".")&&s(v,U,null,D[U],void 0,void 0,O);else D.onClick&&s(v,"onClick",null,D.onClick,void 0,void 0,O);let se;(se=D&&D.onVnodeBeforeMount)&&Qe(se,O,T),ee&&mn(T,null,O,"beforeMount"),((se=D&&D.onVnodeMounted)||ee||G)&&fr(()=>{se&&Qe(se,O,T),G&&Le.enter(v),ee&&mn(T,null,O,"mounted")},L)}return v.nextSibling},f=(v,T,O,L,j,R,Y)=>{Y=Y||!!T.dynamicChildren;const D=T.children,X=D.length;for(let $=0;$<X;$++){const ee=Y?D[$]:D[$]=ln(D[$]);if(v)v=d(v,ee,L,j,R,Y);else{if(ee.type===Lt&&!ee.children)continue;On=!0,t(null,ee,O,null,L,j,Fs(O),R)}}return v},k=(v,T,O,L,j,R)=>{const{slotScopeIds:Y}=T;Y&&(j=j?j.concat(Y):Y);const D=o(v),X=f(l(v),T,D,O,L,j,R);return X&&$s(X)&&X.data==="]"?l(T.anchor=X):(On=!0,r(T.anchor=u("]"),D,X),X)},_=(v,T,O,L,j,R)=>{if(On=!0,T.el=null,R){const X=w(v);for(;;){const $=l(v);if($&&$!==X)c($);else break}}const Y=l(v),D=o(v);return c(v),t(null,T,D,Y,O,L,Fs(D),j),Y},w=(v,T="[",O="]")=>{let L=0;for(;v;)if(v=l(v),v&&$s(v)&&(v.data===T&&L++,v.data===O)){if(L===0)return l(v);L--}return v},y=(v,T,O)=>{const L=T.parentNode;L&&L.replaceChild(v,T);let j=O;for(;j;)j.vnode.el===T&&(j.vnode.el=j.subTree.el=v),j=j.parent},E=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[p,d]}const ze=fr;function Od(e){return Rd(e,Dd)}function Rd(e,n){const t=Vi();t.__VUE__=!0;const{insert:s,remove:a,patchProp:l,createElement:o,createText:c,createComment:r,setText:u,setElementText:p,parentNode:d,nextSibling:h,setScopeId:f=Ze,insertStaticContent:k}=e,_=(g,m,x,I=null,S=null,F=null,B=void 0,M=null,N=!!m.dynamicChildren)=>{if(g===m)return;g&&!et(g,m)&&(I=A(g),Be(g,S,F,!0),g=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:P,ref:q,shapeFlag:Q}=m;switch(P){case Lt:w(g,m,x,I);break;case yn:y(g,m,x,I);break;case Gt:g==null&&E(m,x,I,B);break;case Ye:$(g,m,x,I,S,F,B,M,N);break;default:Q&1?O(g,m,x,I,S,F,B,M,N):Q&6?ee(g,m,x,I,S,F,B,M,N):(Q&64||Q&128)&&P.process(g,m,x,I,S,F,B,M,N,W)}q!=null&&S&&Zs(q,g&&g.ref,F,m||g,!m)},w=(g,m,x,I)=>{if(g==null)s(m.el=c(m.children),x,I);else{const S=m.el=g.el;m.children!==g.children&&u(S,m.children)}},y=(g,m,x,I)=>{g==null?s(m.el=r(m.children||""),x,I):m.el=g.el},E=(g,m,x,I)=>{[g.el,g.anchor]=k(g.children,m,x,I,g.el,g.anchor)},v=({el:g,anchor:m},x,I)=>{let S;for(;g&&g!==m;)S=h(g),s(g,x,I),g=S;s(m,x,I)},T=({el:g,anchor:m})=>{let x;for(;g&&g!==m;)x=h(g),a(g),g=x;a(m)},O=(g,m,x,I,S,F,B,M,N)=>{m.type==="svg"?B="svg":m.type==="math"&&(B="mathml"),g==null?L(m,x,I,S,F,B,M,N):Y(g,m,S,F,B,M,N)},L=(g,m,x,I,S,F,B,M)=>{let N,P;const{props:q,shapeFlag:Q,transition:J,dirs:ne}=g;if(N=g.el=o(g.type,F,q&&q.is,q),Q&8?p(N,g.children):Q&16&&R(g.children,N,null,I,S,Ta(g,F),B,M),ne&&mn(g,null,I,"created"),j(N,g,g.scopeId,B,I),q){for(const ge in q)ge!=="value"&&!bt(ge)&&l(N,ge,null,q[ge],F,g.children,I,S,Fe);"value"in q&&l(N,"value",null,q.value,F),(P=q.onVnodeBeforeMount)&&Qe(P,I,g)}ne&&mn(g,null,I,"beforeMount");const ae=Ar(S,J);ae&&J.beforeEnter(N),s(N,m,x),((P=q&&q.onVnodeMounted)||ae||ne)&&ze(()=>{P&&Qe(P,I,g),ae&&J.enter(N),ne&&mn(g,null,I,"mounted")},S)},j=(g,m,x,I,S)=>{if(x&&f(g,x),I)for(let F=0;F<I.length;F++)f(g,I[F]);if(S){let F=S.subTree;if(m===F){const B=S.vnode;j(g,B,B.scopeId,B.slotScopeIds,S.parent)}}},R=(g,m,x,I,S,F,B,M,N=0)=>{for(let P=N;P<g.length;P++){const q=g[P]=M?Nn(g[P]):ln(g[P]);_(null,q,m,x,I,S,F,B,M)}},Y=(g,m,x,I,S,F,B)=>{const M=m.el=g.el;let{patchFlag:N,dynamicChildren:P,dirs:q}=m;N|=g.patchFlag&16;const Q=g.props||_e,J=m.props||_e;let ne;if(x&&Yn(x,!1),(ne=J.onVnodeBeforeUpdate)&&Qe(ne,x,m,g),q&&mn(m,g,x,"beforeUpdate"),x&&Yn(x,!0),P?D(g.dynamicChildren,P,M,x,I,Ta(m,S),F):B||U(g,m,M,null,x,I,Ta(m,S),F,!1),N>0){if(N&16)X(M,m,Q,J,x,I,S);else if(N&2&&Q.class!==J.class&&l(M,"class",null,J.class,S),N&4&&l(M,"style",Q.style,J.style,S),N&8){const ae=m.dynamicProps;for(let ge=0;ge<ae.length;ge++){const we=ae[ge],De=Q[we],an=J[we];(an!==De||we==="value")&&l(M,we,De,an,S,g.children,x,I,Fe)}}N&1&&g.children!==m.children&&p(M,m.children)}else!B&&P==null&&X(M,m,Q,J,x,I,S);((ne=J.onVnodeUpdated)||q)&&ze(()=>{ne&&Qe(ne,x,m,g),q&&mn(m,g,x,"updated")},I)},D=(g,m,x,I,S,F,B)=>{for(let M=0;M<m.length;M++){const N=g[M],P=m[M],q=N.el&&(N.type===Ye||!et(N,P)||N.shapeFlag&70)?d(N.el):x;_(N,P,q,null,I,S,F,B,!0)}},X=(g,m,x,I,S,F,B)=>{if(x!==I){if(x!==_e)for(const M in x)!bt(M)&&!(M in I)&&l(g,M,x[M],null,B,m.children,S,F,Fe);for(const M in I){if(bt(M))continue;const N=I[M],P=x[M];N!==P&&M!=="value"&&l(g,M,P,N,B,m.children,S,F,Fe)}"value"in I&&l(g,"value",x.value,I.value,B)}},$=(g,m,x,I,S,F,B,M,N)=>{const P=m.el=g?g.el:c(""),q=m.anchor=g?g.anchor:c("");let{patchFlag:Q,dynamicChildren:J,slotScopeIds:ne}=m;ne&&(M=M?M.concat(ne):ne),g==null?(s(P,x,I),s(q,x,I),R(m.children||[],x,q,S,F,B,M,N)):Q>0&&Q&64&&J&&g.dynamicChildren?(D(g.dynamicChildren,J,x,S,F,B,M),(m.key!=null||S&&m===S.subTree)&&Ir(g,m,!0)):U(g,m,x,q,S,F,B,M,N)},ee=(g,m,x,I,S,F,B,M,N)=>{m.slotScopeIds=M,g==null?m.shapeFlag&512?S.ctx.activate(m,x,I,B,N):Le(m,x,I,S,F,B,N):Te(g,m,N)},Le=(g,m,x,I,S,F,B)=>{const M=g.component=Ud(g,I,S);if(gs(g)&&(M.ctx.renderer=W),Gd(M),M.asyncDep){if(S&&S.registerDep(M,G),!g.el){const N=M.subTree=Ae(yn);y(null,N,m,x)}}else G(M,g,m,x,S,F,B)},Te=(g,m,x)=>{const I=m.component=g.component;if(Xp(g,m,x))if(I.asyncDep&&!I.asyncResolved){se(I,m,x);return}else I.next=m,qp(I.update),I.effect.dirty=!0,I.update();else m.el=g.el,I.vnode=m},G=(g,m,x,I,S,F,B)=>{const M=()=>{if(g.isMounted){let{next:q,bu:Q,u:J,parent:ne,vnode:ae}=g;{const ft=Pr(g);if(ft){q&&(q.el=ae.el,se(g,q,B)),ft.asyncDep.then(()=>{g.isUnmounted||M()});return}}let ge=q,we;Yn(g,!1),q?(q.el=ae.el,se(g,q,B)):q=ae,Q&&wa(Q),(we=q.props&&q.props.onVnodeBeforeUpdate)&&Qe(we,ne,q,ae),Yn(g,!0);const De=_a(g),an=g.subTree;g.subTree=De,_(an,De,d(an.el),A(an),g,S,F),q.el=De.el,ge===null&&Qp(g,De.el),J&&ze(J,S),(we=q.props&&q.props.onVnodeUpdated)&&ze(()=>Qe(we,ne,q,ae),S)}else{let q;const{el:Q,props:J}=m,{bm:ne,m:ae,parent:ge}=g,we=qt(m);if(Yn(g,!1),ne&&wa(ne),!we&&(q=J&&J.onVnodeBeforeMount)&&Qe(q,ge,m),Yn(g,!0),Q&&be){const De=()=>{g.subTree=_a(g),be(Q,g.subTree,g,S,null)};we?m.type.__asyncLoader().then(()=>!g.isUnmounted&&De()):De()}else{const De=g.subTree=_a(g);_(null,De,x,I,g,S,F),m.el=De.el}if(ae&&ze(ae,S),!we&&(q=J&&J.onVnodeMounted)){const De=m;ze(()=>Qe(q,ge,De),S)}(m.shapeFlag&256||ge&&qt(ge.vnode)&&ge.vnode.shapeFlag&256)&&g.a&&ze(g.a,S),g.isMounted=!0,m=x=I=null}},N=g.effect=new bl(M,Ze,()=>oa(P),g.scope),P=g.update=()=>{N.dirty&&N.run()};P.id=g.uid,Yn(g,!0),P()},se=(g,m,x)=>{m.component=g;const I=g.vnode.props;g.vnode=m,g.next=null,Td(g,m.props,I,x),Ad(g,m.children,x),ot(),yo(g),it()},U=(g,m,x,I,S,F,B,M,N=!1)=>{const P=g&&g.children,q=g?g.shapeFlag:0,Q=m.children,{patchFlag:J,shapeFlag:ne}=m;if(J>0){if(J&128){Pn(P,Q,x,I,S,F,B,M,N);return}else if(J&256){sn(P,Q,x,I,S,F,B,M,N);return}}ne&8?(q&16&&Fe(P,S,F),Q!==P&&p(x,Q)):q&16?ne&16?Pn(P,Q,x,I,S,F,B,M,N):Fe(P,S,F,!0):(q&8&&p(x,""),ne&16&&R(Q,x,I,S,F,B,M,N))},sn=(g,m,x,I,S,F,B,M,N)=>{g=g||yt,m=m||yt;const P=g.length,q=m.length,Q=Math.min(P,q);let J;for(J=0;J<Q;J++){const ne=m[J]=N?Nn(m[J]):ln(m[J]);_(g[J],ne,x,null,S,F,B,M,N)}P>q?Fe(g,S,F,!0,!1,Q):R(m,x,I,S,F,B,M,N,Q)},Pn=(g,m,x,I,S,F,B,M,N)=>{let P=0;const q=m.length;let Q=g.length-1,J=q-1;for(;P<=Q&&P<=J;){const ne=g[P],ae=m[P]=N?Nn(m[P]):ln(m[P]);if(et(ne,ae))_(ne,ae,x,null,S,F,B,M,N);else break;P++}for(;P<=Q&&P<=J;){const ne=g[Q],ae=m[J]=N?Nn(m[J]):ln(m[J]);if(et(ne,ae))_(ne,ae,x,null,S,F,B,M,N);else break;Q--,J--}if(P>Q){if(P<=J){const ne=J+1,ae=ne<q?m[ne].el:I;for(;P<=J;)_(null,m[P]=N?Nn(m[P]):ln(m[P]),x,ae,S,F,B,M,N),P++}}else if(P>J)for(;P<=Q;)Be(g[P],S,F,!0),P++;else{const ne=P,ae=P,ge=new Map;for(P=ae;P<=J;P++){const Ke=m[P]=N?Nn(m[P]):ln(m[P]);Ke.key!=null&&ge.set(Ke.key,P)}let we,De=0;const an=J-ae+1;let ft=!1,io=0;const jt=new Array(an);for(P=0;P<an;P++)jt[P]=0;for(P=ne;P<=Q;P++){const Ke=g[P];if(De>=an){Be(Ke,S,F,!0);continue}let gn;if(Ke.key!=null)gn=ge.get(Ke.key);else for(we=ae;we<=J;we++)if(jt[we-ae]===0&&et(Ke,m[we])){gn=we;break}gn===void 0?Be(Ke,S,F,!0):(jt[gn-ae]=P+1,gn>=io?io=gn:ft=!0,_(Ke,m[gn],x,null,S,F,B,M,N),De++)}const ro=ft?Md(jt):yt;for(we=ro.length-1,P=an-1;P>=0;P--){const Ke=ae+P,gn=m[Ke],co=Ke+1<q?m[Ke+1].el:I;jt[P]===0?_(null,gn,x,co,S,F,B,M,N):ft&&(we<0||P!==ro[we]?fn(gn,x,co,2):we--)}}},fn=(g,m,x,I,S=null)=>{const{el:F,type:B,transition:M,children:N,shapeFlag:P}=g;if(P&6){fn(g.component.subTree,m,x,I);return}if(P&128){g.suspense.move(m,x,I);return}if(P&64){B.move(g,m,x,W);return}if(B===Ye){s(F,m,x);for(let Q=0;Q<N.length;Q++)fn(N[Q],m,x,I);s(g.anchor,m,x);return}if(B===Gt){v(g,m,x);return}if(I!==2&&P&1&&M)if(I===0)M.beforeEnter(F),s(F,m,x),ze(()=>M.enter(F),S);else{const{leave:Q,delayLeave:J,afterLeave:ne}=M,ae=()=>s(F,m,x),ge=()=>{Q(F,()=>{ae(),ne&&ne()})};J?J(F,ae,ge):ge()}else s(F,m,x)},Be=(g,m,x,I=!1,S=!1)=>{const{type:F,props:B,ref:M,children:N,dynamicChildren:P,shapeFlag:q,patchFlag:Q,dirs:J}=g;if(M!=null&&Zs(M,null,x,g,!0),q&256){m.ctx.deactivate(g);return}const ne=q&1&&J,ae=!qt(g);let ge;if(ae&&(ge=B&&B.onVnodeBeforeUnmount)&&Qe(ge,m,g),q&6)As(g.component,x,I);else{if(q&128){g.suspense.unmount(x,I);return}ne&&mn(g,null,m,"beforeUnmount"),q&64?g.type.remove(g,m,x,S,W,I):P&&(F!==Ye||Q>0&&Q&64)?Fe(P,m,x,!1,!0):(F===Ye&&Q&384||!S&&q&16)&&Fe(N,m,x),I&&dt(g)}(ae&&(ge=B&&B.onVnodeUnmounted)||ne)&&ze(()=>{ge&&Qe(ge,m,g),ne&&mn(g,null,m,"unmounted")},x)},dt=g=>{const{type:m,el:x,anchor:I,transition:S}=g;if(m===Ye){ht(x,I);return}if(m===Gt){T(g);return}const F=()=>{a(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:B,delayLeave:M}=S,N=()=>B(x,F);M?M(g.el,F,N):N()}else F()},ht=(g,m)=>{let x;for(;g!==m;)x=h(g),a(g),g=x;a(m)},As=(g,m,x)=>{const{bum:I,scope:S,update:F,subTree:B,um:M}=g;I&&wa(I),S.stop(),F&&(F.active=!1,Be(B,g,m,x)),M&&ze(M,m),ze(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Fe=(g,m,x,I=!1,S=!1,F=0)=>{for(let B=F;B<g.length;B++)Be(g[B],m,x,I,S)},A=g=>g.shapeFlag&6?A(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el);let z=!1;const V=(g,m,x)=>{g==null?m._vnode&&Be(m._vnode,null,null,!0):_(m._vnode||null,g,m,null,null,null,x),z||(z=!0,yo(),Ys(),z=!1),m._vnode=g},W={p:_,um:Be,m:fn,r:dt,mt:Le,mc:R,pc:U,pbc:D,n:A,o:e};let de,be;return n&&([de,be]=n(W)),{render:V,hydrate:de,createApp:Ed(V,de)}}function Ta({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Yn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Ar(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ir(e,n,t=!1){const s=e.children,a=n.children;if(Z(s)&&Z(a))for(let l=0;l<s.length;l++){const o=s[l];let c=a[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[l]=Nn(a[l]),c.el=o.el),t||Ir(o,c)),c.type===Lt&&(c.el=o.el)}}function Md(e){const n=e.slice(),t=[0];let s,a,l,o,c;const r=e.length;for(s=0;s<r;s++){const u=e[s];if(u!==0){if(a=t[t.length-1],e[a]<u){n[s]=a,t.push(s);continue}for(l=0,o=t.length-1;l<o;)c=l+o>>1,e[t[c]]<u?l=c+1:o=c;u<e[t[l]]&&(l>0&&(n[s]=t[l-1]),t[l]=s)}}for(l=t.length,o=t[l-1];l-- >0;)t[l]=o,o=n[o];return t}function Pr(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Pr(n)}const jd=e=>e.__isTeleport,Ye=Symbol.for("v-fgt"),Lt=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),Gt=Symbol.for("v-stc"),Kt=[];let rn=null;function Fd(e=!1){Kt.push(rn=e?null:[])}function $d(){Kt.pop(),rn=Kt[Kt.length-1]||null}let ts=1;function Po(e){ts+=e}function Nd(e){return e.dynamicChildren=ts>0?rn||yt:null,$d(),ts>0&&rn&&rn.push(e),e}function Hd(e,n,t,s,a,l){return Nd(Or(e,n,t,s,a,l,!0))}function Ya(e){return e?e.__v_isVNode===!0:!1}function et(e,n){return e.type===n.type&&e.key===n.key}const ca="__vInternal",Dr=({key:e})=>e??null,Ws=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Ie(e)||te(e)?{i:en,r:e,k:n,f:!!t}:e:null);function Or(e,n=null,t=null,s=0,a=null,l=e===Ye?0:1,o=!1,c=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Dr(n),ref:n&&Ws(n),scopeId:dr,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:en};return c?(Ml(r,t),l&128&&e.normalize(r)):t&&(r.shapeFlag|=Me(t)?8:16),ts>0&&!o&&rn&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&rn.push(r),r}const Ae=Vd;function Vd(e,n=null,t=null,s=0,a=null,l=!1){if((!e||e===Zp)&&(e=yn),Ya(e)){const c=Wn(e,n,!0);return t&&Ml(c,t),ts>0&&!l&&rn&&(c.shapeFlag&6?rn[rn.indexOf(e)]=c:rn.push(c)),c.patchFlag|=-2,c}if(Qd(e)&&(e=e.__vccOpts),n){n=Bd(n);let{class:c,style:r}=n;c&&!Me(c)&&(n.class=yl(c)),Ee(r)&&(tr(r)&&!Z(r)&&(r=Se({},r)),n.style=vl(r))}const o=Me(e)?1:nd(e)?128:jd(e)?64:Ee(e)?4:te(e)?2:0;return Or(e,n,t,s,a,o,l,!0)}function Bd(e){return e?tr(e)||ca in e?Se({},e):e:null}function Wn(e,n,t=!1){const{props:s,ref:a,patchFlag:l,children:o}=e,c=n?zd(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Dr(c),ref:n&&n.ref?t&&a?Z(a)?a.concat(Ws(n)):[a,Ws(n)]:Ws(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ye?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Rr(e=" ",n=0){return Ae(Lt,null,e,n)}function F3(e,n){const t=Ae(Gt,null,e);return t.staticCount=n,t}function ln(e){return e==null||typeof e=="boolean"?Ae(yn):Z(e)?Ae(Ye,null,e.slice()):typeof e=="object"?Nn(e):Ae(Lt,null,String(e))}function Nn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wn(e)}function Ml(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(Z(n))t=16;else if(typeof n=="object")if(s&65){const a=n.default;a&&(a._c&&(a._d=!1),Ml(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!(ca in n)?n._ctx=en:a===3&&en&&(en.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else te(n)?(n={default:n,_ctx:en},t=32):(n=String(n),s&64?(t=16,n=[Rr(n)]):t=8);e.children=n,e.shapeFlag|=t}function zd(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const a in s)if(a==="class")n.class!==s.class&&(n.class=yl([n.class,s.class]));else if(a==="style")n.style=vl([n.style,s.style]);else if(ps(a)){const l=n[a],o=s[a];o&&l!==o&&!(Z(l)&&l.includes(o))&&(n[a]=l?[].concat(l,o):o)}else a!==""&&(n[a]=s[a])}return n}function Qe(e,n,t,s=null){nn(e,n,7,[t,s])}const qd=xr();let Wd=0;function Ud(e,n,t){const s=e.type,a=(n?n.appContext:e.appContext)||qd,l={uid:Wd++,vnode:e,type:s,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new dp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lr(s,a),emitsOptions:pr(s,a),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=Gp.bind(null,l),e.ce&&e.ce(l),l}let Oe=null;const ms=()=>Oe||en;let ea,Xa;{const e=Vi(),n=(t,s)=>{let a;return(a=e[t])||(a=e[t]=[]),a.push(s),l=>{a.length>1?a.forEach(o=>o(l)):a[0](l)}};ea=n("__VUE_INSTANCE_SETTERS__",t=>Oe=t),Xa=n("__VUE_SSR_SETTERS__",t=>vs=t)}const ks=e=>{const n=Oe;return ea(e),e.scope.on(),()=>{e.scope.off(),ea(n)}},Do=()=>{Oe&&Oe.scope.off(),ea(null)};function Mr(e){return e.vnode.shapeFlag&4}let vs=!1;function Gd(e,n=!1){n&&Xa(n);const{props:t,children:s}=e.vnode,a=Mr(e);Ld(e,t,a,n),Sd(e,s);const l=a?Kd(e,n):void 0;return n&&Xa(!1),l}function Kd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=sr(new Proxy(e.ctx,kd));const{setup:s}=t;if(s){const a=e.setupContext=s.length>1?Yd(e):null,l=ks(e);ot();const o=zn(s,e,0,[e.props,a]);if(it(),l(),Hi(o)){if(o.then(Do,Do),n)return o.then(c=>{Oo(e,c,n)}).catch(c=>{fs(c,e,0)});e.asyncDep=o}else Oo(e,o,n)}else jr(e,n)}function Oo(e,n,t){te(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ee(n)&&(e.setupState=or(n)),jr(e,t)}let Ro;function jr(e,n,t){const s=e.type;if(!e.render){if(!n&&Ro&&!s.render){const a=s.template||Ol(e).template;if(a){const{isCustomElement:l,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:r}=s,u=Se(Se({isCustomElement:l,delimiters:c},o),r);s.render=Ro(a,u)}}e.render=s.render||Ze}{const a=ks(e);ot();try{vd(e)}finally{it(),a()}}}function Jd(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(n,t){return Ue(e,"get","$attrs"),n[t]}}))}function Yd(e){const n=t=>{e.exposed=t||{}};return{get attrs(){return Jd(e)},slots:e.slots,emit:e.emit,expose:n}}function jl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(or(sr(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Wt)return Wt[t](e)},has(n,t){return t in n||t in Wt}}))}function Xd(e,n=!0){return te(e)?e.displayName||e.name:e.name||n&&e.__name}function Qd(e){return te(e)&&"__vccOpts"in e}const b=(e,n)=>Mp(e,n,vs);function i(e,n,t){const s=arguments.length;return s===2?Ee(n)&&!Z(n)?Ya(n)?Ae(e,null,[n]):Ae(e,n):Ae(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Ya(t)&&(t=[t]),Ae(e,n,t))}const Zd="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const eh="http://www.w3.org/2000/svg",nh="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,Mo=Hn&&Hn.createElement("template"),th={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const a=n==="svg"?Hn.createElementNS(eh,e):n==="mathml"?Hn.createElementNS(nh,e):Hn.createElement(e,t?{is:t}:void 0);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,a,l){const o=t?t.previousSibling:n.lastChild;if(a&&(a===l||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===l||!(a=a.nextSibling)););else{Mo.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const c=Mo.content;if(s==="svg"||s==="mathml"){const r=c.firstChild;for(;r.firstChild;)c.appendChild(r.firstChild);c.removeChild(r)}n.insertBefore(c,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Rn="transition",Ft="animation",Tt=Symbol("_vtc"),Un=(e,{slots:n})=>i(od,$r(e),n);Un.displayName="Transition";const Fr={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sh=Un.props=Se({},vr,Fr),Xn=(e,n=[])=>{Z(e)?e.forEach(t=>t(...n)):e&&e(...n)},jo=e=>e?Z(e)?e.some(n=>n.length>1):e.length>1:!1;function $r(e){const n={};for(const $ in e)$ in Fr||(n[$]=e[$]);if(e.css===!1)return n;const{name:t="v",type:s,duration:a,enterFromClass:l=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:r=l,appearActiveClass:u=o,appearToClass:p=c,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=e,k=ah(a),_=k&&k[0],w=k&&k[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:v,onLeave:T,onLeaveCancelled:O,onBeforeAppear:L=y,onAppear:j=E,onAppearCancelled:R=v}=n,Y=($,ee,Le)=>{jn($,ee?p:c),jn($,ee?u:o),Le&&Le()},D=($,ee)=>{$._isLeaving=!1,jn($,d),jn($,f),jn($,h),ee&&ee()},X=$=>(ee,Le)=>{const Te=$?j:E,G=()=>Y(ee,$,Le);Xn(Te,[ee,G]),Fo(()=>{jn(ee,$?r:l),Tn(ee,$?p:c),jo(Te)||$o(ee,s,_,G)})};return Se(n,{onBeforeEnter($){Xn(y,[$]),Tn($,l),Tn($,o)},onBeforeAppear($){Xn(L,[$]),Tn($,r),Tn($,u)},onEnter:X(!1),onAppear:X(!0),onLeave($,ee){$._isLeaving=!0;const Le=()=>D($,ee);Tn($,d),Hr(),Tn($,h),Fo(()=>{$._isLeaving&&(jn($,d),Tn($,f),jo(T)||$o($,s,w,Le))}),Xn(T,[$,Le])},onEnterCancelled($){Y($,!1),Xn(v,[$])},onAppearCancelled($){Y($,!0),Xn(R,[$])},onLeaveCancelled($){D($),Xn(O,[$])}})}function ah(e){if(e==null)return null;if(Ee(e))return[Ca(e.enter),Ca(e.leave)];{const n=Ca(e);return[n,n]}}function Ca(e){return lp(e)}function Tn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Tt]||(e[Tt]=new Set)).add(n)}function jn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[Tt];t&&(t.delete(n),t.size||(e[Tt]=void 0))}function Fo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let lh=0;function $o(e,n,t,s){const a=e._endId=++lh,l=()=>{a===e._endId&&s()};if(t)return setTimeout(l,t);const{type:o,timeout:c,propCount:r}=Nr(e,n);if(!o)return s();const u=o+"end";let p=0;const d=()=>{e.removeEventListener(u,h),l()},h=f=>{f.target===e&&++p>=r&&d()};setTimeout(()=>{p<r&&d()},c+1),e.addEventListener(u,h)}function Nr(e,n){const t=window.getComputedStyle(e),s=k=>(t[k]||"").split(", "),a=s(`${Rn}Delay`),l=s(`${Rn}Duration`),o=No(a,l),c=s(`${Ft}Delay`),r=s(`${Ft}Duration`),u=No(c,r);let p=null,d=0,h=0;n===Rn?o>0&&(p=Rn,d=o,h=l.length):n===Ft?u>0&&(p=Ft,d=u,h=r.length):(d=Math.max(o,u),p=d>0?o>u?Rn:Ft:null,h=p?p===Rn?l.length:r.length:0);const f=p===Rn&&/\b(transform|all)(,|$)/.test(s(`${Rn}Property`).toString());return{type:p,timeout:d,propCount:h,hasTransform:f}}function No(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>Ho(t)+Ho(e[s])))}function Ho(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Hr(){return document.body.offsetHeight}function oh(e,n,t){const s=e[Tt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Vo=Symbol("_vod"),ih=Symbol("_vsh"),rh=Symbol(""),ch=/(^|;)\s*display\s*:/;function uh(e,n,t){const s=e.style,a=Me(t);let l=!1;if(t&&!a){if(n)if(Me(n))for(const o of n.split(";")){const c=o.slice(0,o.indexOf(":")).trim();t[c]==null&&Us(s,c,"")}else for(const o in n)t[o]==null&&Us(s,o,"");for(const o in t)o==="display"&&(l=!0),Us(s,o,t[o])}else if(a){if(n!==t){const o=s[rh];o&&(t+=";"+o),s.cssText=t,l=ch.test(t)}}else n&&e.removeAttribute("style");Vo in e&&(e[Vo]=l?s.display:"",e[ih]&&(s.display="none"))}const Bo=/\s*!important$/;function Us(e,n,t){if(Z(t))t.forEach(s=>Us(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=ph(e,n);Bo.test(t)?e.setProperty(It(s),t.replace(Bo,""),"important"):e[s]=t}}const zo=["Webkit","Moz","ms"],Sa={};function ph(e,n){const t=Sa[n];if(t)return t;let s=tn(n);if(s!=="filter"&&s in e)return Sa[n]=s;s=ds(s);for(let a=0;a<zo.length;a++){const l=zo[a]+s;if(l in e)return Sa[n]=l}return n}const qo="http://www.w3.org/1999/xlink";function dh(e,n,t,s,a){if(s&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(qo,n.slice(6,n.length)):e.setAttributeNS(qo,n,t);else{const l=pp(n);t==null||l&&!Bi(t)?e.removeAttribute(n):e.setAttribute(n,l?"":t)}}function hh(e,n,t,s,a,l,o){if(n==="innerHTML"||n==="textContent"){s&&o(s,a,l),e[n]=t??"";return}const c=e.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?e.getAttribute("value")||"":e.value,p=t??"";(u!==p||!("_value"in e))&&(e.value=p),t==null&&e.removeAttribute(n),e._value=t;return}let r=!1;if(t===""||t==null){const u=typeof e[n];u==="boolean"?t=Bi(t):t==null&&u==="string"?(t="",r=!0):u==="number"&&(t=0,r=!0)}try{e[n]=t}catch{}r&&e.removeAttribute(n)}function fh(e,n,t,s){e.addEventListener(n,t,s)}function gh(e,n,t,s){e.removeEventListener(n,t,s)}const Wo=Symbol("_vei");function mh(e,n,t,s,a=null){const l=e[Wo]||(e[Wo]={}),o=l[n];if(s&&o)o.value=s;else{const[c,r]=kh(n);if(s){const u=l[n]=bh(s,a);fh(e,c,u,r)}else o&&(gh(e,c,o,r),l[n]=void 0)}}const Uo=/(?:Once|Passive|Capture)$/;function kh(e){let n;if(Uo.test(e)){n={};let s;for(;s=e.match(Uo);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),n]}let Aa=0;const vh=Promise.resolve(),yh=()=>Aa||(vh.then(()=>Aa=0),Aa=Date.now());function bh(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;nn(wh(s,t.value),n,5,[s])};return t.value=e,t.attached=yh(),t}function wh(e,n){if(Z(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>a=>!a._stopped&&s&&s(a))}else return n}const Go=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,_h=(e,n,t,s,a,l,o,c,r)=>{const u=a==="svg";n==="class"?oh(e,s,u):n==="style"?uh(e,t,s):ps(n)?gl(n)||mh(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):xh(e,n,s,u))?hh(e,n,s,l,o,c,r):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),dh(e,n,s,u))};function xh(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&Go(n)&&te(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Go(n)&&Me(t)?!1:n in e}const Vr=new WeakMap,Br=new WeakMap,na=Symbol("_moveCb"),Ko=Symbol("_enterCb"),zr={name:"TransitionGroup",props:Se({},sh,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=ms(),s=kr();let a,l;return wr(()=>{if(!a.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Ah(a[0].el,t.vnode.el,o))return;a.forEach(Th),a.forEach(Ch);const c=a.filter(Sh);Hr(),c.forEach(r=>{const u=r.el,p=u.style;Tn(u,o),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[na]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",d),u[na]=null,jn(u,o))};u.addEventListener("transitionend",d)})}),()=>{const o=oe(e),c=$r(o);let r=o.tag||Ye;a=l,l=n.default?Pl(n.default()):[];for(let u=0;u<l.length;u++){const p=l[u];p.key!=null&&ns(p,es(p,c,s,t))}if(a)for(let u=0;u<a.length;u++){const p=a[u];ns(p,es(p,c,s,t)),Vr.set(p,p.el.getBoundingClientRect())}return Ae(r,null,l)}}},Eh=e=>delete e.mode;zr.props;const Lh=zr;function Th(e){const n=e.el;n[na]&&n[na](),n[Ko]&&n[Ko]()}function Ch(e){Br.set(e,e.el.getBoundingClientRect())}function Sh(e){const n=Vr.get(e),t=Br.get(e),s=n.left-t.left,a=n.top-t.top;if(s||a){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${s}px,${a}px)`,l.transitionDuration="0s",e}}function Ah(e,n,t){const s=e.cloneNode(),a=e[Tt];a&&a.forEach(c=>{c.split(/\s+/).forEach(r=>r&&s.classList.remove(r))}),t.split(/\s+/).forEach(c=>c&&s.classList.add(c)),s.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(s);const{hasTransform:o}=Nr(s);return l.removeChild(s),o}const Ih=Se({patchProp:_h},th);let Ia,Jo=!1;function Ph(){return Ia=Jo?Ia:Od(Ih),Jo=!0,Ia}const Dh=(...e)=>{const n=Ph().createApp(...e),{mount:t}=n;return n.mount=s=>{const a=Rh(s);if(a)return t(a,!0,Oh(a))},n};function Oh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Rh(e){return Me(e)?document.querySelector(e):e}var Mh=["link","meta","script","style","noscript","template"],jh=["title","base"],Fh=([e,n,t])=>jh.includes(e)?e:Mh.includes(e)?e==="meta"&&n.name?`${e}.${n.name}`:e==="template"&&n.id?`${e}.${n.id}`:JSON.stringify([e,Object.entries(n).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),t]):null,$h=e=>{const n=new Set,t=[];return e.forEach(s=>{const a=Fh(s);a&&!n.has(a)&&(n.add(a),t.push(s))}),t},Nh=e=>e[0]==="/"?e:`/${e}`,qr=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,Kn=e=>/^(https?:)?\/\//.test(e),Hh=/.md((\?|#).*)?$/,ss=(e,n="/")=>!!(Kn(e)||e.startsWith("/")&&!e.startsWith(n)&&!Hh.test(e)),Wr=e=>/^[a-z][a-z0-9+.-]*:/.test(e),ys=e=>Object.prototype.toString.call(e)==="[object Object]",Vh=e=>{const[n,...t]=e.split(/(\?|#)/);if(!n||n.endsWith("/"))return e;let s=n.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+t.join("")},Fl=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Ur=e=>e[0]==="/"?e.slice(1):e,Bh=(e,n)=>{const t=Object.keys(e).sort((s,a)=>{const l=a.split("/").length-s.split("/").length;return l!==0?l:a.length-s.length});for(const s of t)if(n.startsWith(s))return s;return"/"},ke=e=>typeof e=="string";const zh="modulepreload",qh=function(e){return"/"+e},Yo={},C=function(n,t,s){let a=Promise.resolve();if(t&&t.length>0){const l=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.all(t.map(r=>{if(r=qh(r),r in Yo)return;Yo[r]=!0;const u=r.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!s)for(let f=l.length-1;f>=0;f--){const k=l[f];if(k.href===r&&(!u||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":zh,u||(h.as="script",h.crossOrigin=""),h.href=r,c&&h.setAttribute("nonce",c),document.head.appendChild(h),u)return new Promise((f,k)=>{h.addEventListener("load",f),h.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>n()).catch(l=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l})},Wh=JSON.parse("{}"),Uh=Object.fromEntries([["/",{loader:()=>C(()=>import("./index.html-C6QdjuTH.js"),[]),meta:{t:"首页",i:"home"}}],["/blog/",{loader:()=>C(()=>import("./index.html-33y8_Xr_.js"),[]),meta:{d:1654177641e3,e:`
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
</ul>`,r:{minutes:.82,words:247},t:"指南",i:"creative",y:"a"}}],["/blog/body.html",{loader:()=>C(()=>import("./body.html-Bd-8oa42.js"),[]),meta:{d:1652589468e3,e:`
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
</ul>`,r:{minutes:.56,words:169},t:"自述",i:"light",O:1,y:"a"}}],["/blog/desc.html",{loader:()=>C(()=>import("./desc.html-Djzv0ZEf.js"),[]),meta:{d:1666338754e3,e:`
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
</code></pre></div>`,r:{minutes:3.54,words:1063},t:"Desc",i:"study",O:2,y:"a"}}],["/blog/random.html",{loader:()=>C(()=>import("./random.html-BcjfYyIm.js"),[]),meta:{d:1654177641e3,e:`
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
<p><img src="/images/ThreadPool.png" alt="线程池"></p>`,r:{minutes:.63,words:190},t:"随笔",i:"style",y:"a"}}],["/blog/video.html",{loader:()=>C(()=>import("./video.html-DMhsKpre.js"),[]),meta:{d:1665830787e3,e:`
<h2>觉得不错的b站视频👊</h2>
`,r:{minutes:.07,words:22},t:"Video",i:"support",y:"a"}}],["/en/",{loader:()=>C(()=>import("./index.html-DxgO8hnC.js"),[]),meta:{t:"Front page",i:"home"}}],["/plugins/",{loader:()=>C(()=>import("./index.html-CzwIzKN5.js"),[]),meta:{d:1670585469e3,e:`
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
</div>`,r:{minutes:.36,words:109},t:"插件",y:"a"}}],["/plugins/gorm.html",{loader:()=>C(()=>import("./gorm.html-CK9jKP9K.js"),[]),meta:{d:1666055552e3,e:`
<ul>
<li>文档链接: <a href="https://github.com/licheng1013/gorm-template" target="_blank" rel="noopener noreferrer">gorm-template</a></li>
<li>下面的文档已经过时,请参考上面的文档</li>
</ul>
`,r:{minutes:.1,words:29},t:"Gorm",i:"hot",y:"a"}}],["/plugins/io-game.html",{loader:()=>C(()=>import("./io-game.html-xQavgc9A.js"),[]),meta:{d:1669444007e3,e:`
<ul>
<li>文档迁移至: https://github.com/licheng1013/io-game-example</li>
</ul>
`,r:{minutes:.04,words:12},t:"IoGame",i:"java",y:"a"}}],["/plugins/java-orm.html",{loader:()=>C(()=>import("./java-orm.html-dRYZvsV2.js"),__vite__mapDeps([0,1])),meta:{d:166313995e4,e:`
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
</ul>`,r:{minutes:.92,words:276},t:"JavaOrm",i:"java",y:"a"}}],["/plugins/request-tool.html",{loader:()=>C(()=>import("./request-tool.html-HKUKNxWG.js"),[]),meta:{d:1674268065e3,e:`
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
</ul>`,r:{minutes:1.36,words:409},t:"RequestTool",i:"tool",y:"a"}}],["/plugins/rocket-cat.html",{loader:()=>C(()=>import("./rocket-cat.html-jmGW1Ouw.js"),[]),meta:{d:1681096377e3,e:`
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
</ul>`,r:{minutes:.64,words:193},t:"RocketCat",i:"hot",y:"a"}}],["/plugins/rs-orm.html",{loader:()=>C(()=>import("./rs-orm.html-ButV7oC2.js"),[]),meta:{d:1671088008e3,e:`
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
</ul>`,r:{minutes:.17,words:50},t:"RsRom",i:"launch",y:"a"}}],["/plugins/vue-admin.html",{loader:()=>C(()=>import("./vue-admin.html-D2Bb7CZz.js"),[]),meta:{d:1666055552e3,e:`
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
</ul>`,r:{minutes:.5,words:151},t:"VueAdmin",i:"vue",y:"a"}}],["/study/",{loader:()=>C(()=>import("./index.html-CEY5Pah_.js"),[]),meta:{d:1670583353e3,e:`
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
</table>`,r:{minutes:.46,words:137},t:"指南",i:"creative",y:"a"}}],["/util/",{loader:()=>C(()=>import("./index.html-HGXIqvuX.js"),[]),meta:{d:1671088008e3,e:`
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
</table>`,r:{minutes:1.37,words:410},t:"插件",y:"a"}}],["/util/common.html",{loader:()=>C(()=>import("./common.html-DVqhmqg5.js"),[]),meta:{d:1671088008e3,e:`
<h2>内存节约工具</h2>
<ul>
<li>win11有时会吞掉一些内存,使用该工具可以显著减少内存占用</li>
<li>下载该工具运行压缩包里面的: RAMMap.exe 文件,使用下图用法</li>
<li><a href="https://learn.microsoft.com/zh-tw/sysinternals/downloads/rammap" target="_blank" rel="noopener noreferrer">rammap</a></li>
</ul>
<p><img src="/images/util1.png" alt=""></p>
<h2>AI工具</h2>`,r:{minutes:.8,words:240},t:"通用工具",y:"a"}}],["/util/dev.html",{loader:()=>C(()=>import("./dev.html-CnNV0SiF.js"),[]),meta:{d:1676268191e3,e:`
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
</ul>`,r:{minutes:.29,words:87},t:"开发工具",y:"a"}}],["/util/idea.html",{loader:()=>C(()=>import("./idea.html-DBHMFREM.js"),[]),meta:{d:1655797181e3,e:`
<h2>介绍🐔</h2>
<ul>
<li>最牛皮的开发工具 Idea 比 &gt; Eclipse 强大N倍</li>
<li><a href="https://www.ajihuo.com/idea/4222.html" target="_blank" rel="noopener noreferrer">https://www.ajihuo.com/idea/4222.html</a></li>
<li><a href="https://idea.medeming.com/" target="_blank" rel="noopener noreferrer">https://idea.medeming.com/</a></li>
<li><a href="http://idea.javatiku.cn/" target="_blank" rel="noopener noreferrer">http://idea.javatiku.cn/</a></li>
<li>购买激活，没买过</li>
<li><a href="https://javaforall.cn/128783.html" target="_blank" rel="noopener noreferrer">https://javaforall.cn/128783.html</a></li>
<li><a href="https://gitee.com/ja-netfilter/ja-netfilter" target="_blank" rel="noopener noreferrer">https://gitee.com/ja-netfilter/ja-netfilter</a></li>
</ul>`,r:{minutes:1.35,words:405},t:"Idea插件",I:!1,y:"a"}}],["/en/english/",{loader:()=>C(()=>import("./index.html-Br3ijF6t.js"),[]),meta:{d:1677410841e3,e:`
<h2>Desc</h2>
<ul>
<li>2023/2/26</li>
<li>I am studying English. This is my diary.</li>
</ul>
`,r:{minutes:.05,words:15},t:"English",i:"creative",y:"a"}}],["/en/english/day1.html",{loader:()=>C(()=>import("./day1.html-dF2AxOrN.js"),[]),meta:{d:1677410841e3,e:`
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
</table>`,r:{minutes:.38,words:115},t:"Day1",y:"a"}}],["/en/english/day10.html",{loader:()=>C(()=>import("./day10.html-rE4BlqzK.js"),[]),meta:{d:1679498628e3,e:`
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
</ul>`,r:{minutes:.36,words:108},t:"Day10",y:"a"}}],["/en/english/day11.html",{loader:()=>C(()=>import("./day11.html-C34wwknW.js"),[]),meta:{d:1679756122e3,e:`
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
</ul>`,r:{minutes:.73,words:218},t:"Day11",y:"a"}}],["/en/english/day12.html",{loader:()=>C(()=>import("./day12.html-CWSrwd_S.js"),[]),meta:{d:1679925989e3,e:`
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
</ul>`,r:{minutes:.89,words:267},t:"Day12",y:"a"}}],["/en/english/day13.html",{loader:()=>C(()=>import("./day13.html-CSHRmun7.js"),[]),meta:{d:1680017019e3,e:`
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
</ul>`,r:{minutes:.84,words:251},t:"Day13",y:"a"}}],["/en/english/day14.html",{loader:()=>C(()=>import("./day14.html-BDrnTW-R.js"),[]),meta:{d:1680795804e3,e:`
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
</ul>`,r:{minutes:.35,words:106},t:"Day14",y:"a"}}],["/en/english/day15.html",{loader:()=>C(()=>import("./day15.html-C5aZDMFS.js"),[]),meta:{d:1680017019e3,e:`
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
`,r:{minutes:.12,words:35},t:"Day15",y:"a"}}],["/en/english/day16.html",{loader:()=>C(()=>import("./day16.html-iQfUlSRd.js"),[]),meta:{d:1680963034e3,e:`
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
</ul>`,r:{minutes:.38,words:114},t:"Day16",y:"a"}}],["/en/english/day17.html",{loader:()=>C(()=>import("./day17.html-Bt45UJnD.js"),[]),meta:{d:168113406e4,e:`
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
</ul>`,r:{minutes:.51,words:153},t:"Day17",y:"a"}}],["/en/english/day18.html",{loader:()=>C(()=>import("./day18.html-CX_sMMvw.js"),[]),meta:{d:1681798252e3,e:`
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
</ul>`,r:{minutes:1.11,words:333},t:"Day18",y:"a"}}],["/en/english/day19.html",{loader:()=>C(()=>import("./day19.html-D5xmu-ds.js"),[]),meta:{d:1682083675e3,e:`
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
</ul>`,r:{minutes:.55,words:166},t:"Day19",y:"a"}}],["/en/english/day2.html",{loader:()=>C(()=>import("./day2.html-D2-_ptb_.js"),[]),meta:{d:1677467697e3,e:`
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
</table>`,r:{minutes:.89,words:266},t:"Day2",y:"a"}}],["/en/english/day3.html",{loader:()=>C(()=>import("./day3.html-hI_wXcfl.js"),[]),meta:{d:1677594117e3,e:`
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
</table>`,r:{minutes:.23,words:68},t:"Day3",y:"a"}}],["/en/english/day4.html",{loader:()=>C(()=>import("./day4.html-DN0-33U4.js"),[]),meta:{d:1677675743e3,e:`
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
</table>`,r:{minutes:.8,words:241},t:"Day4",y:"a"}}],["/en/english/day5.html",{loader:()=>C(()=>import("./day5.html-DKbHcK61.js"),[]),meta:{d:1677851348e3,e:`
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
</table>`,r:{minutes:.13,words:39},t:"Day5",y:"a"}}],["/en/english/day6.html",{loader:()=>C(()=>import("./day6.html-BC37pdM0.js"),[]),meta:{d:1677945554e3,e:`
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
`,r:{minutes:.06,words:17},t:"Day6",y:"a"}}],["/en/english/day7.html",{loader:()=>C(()=>import("./day7.html-DbXurbNB.js"),[]),meta:{d:1678109202e3,e:`
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
</table>`,r:{minutes:.06,words:17},t:"Day7",y:"a"}}],["/en/english/day8.html",{loader:()=>C(()=>import("./day8.html-CbyH80XG.js"),[]),meta:{d:1678116734e3,e:`
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
</ul>`,r:{minutes:.64,words:191},t:"Day8",y:"a"}}],["/en/english/day9.html",{loader:()=>C(()=>import("./day9.html-QqFz1inU.js"),[]),meta:{d:1679314845e3,e:`
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
</ul>`,r:{minutes:.73,words:218},t:"Day9",y:"a"}}],["/en/english/study.html",{loader:()=>C(()=>import("./study.html-D6FqCpiR.js"),[]),meta:{d:1678408672e3,e:`
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
</table>`,r:{minutes:1.28,words:384},t:"Study",O:1,y:"a"}}],["/en/plugins/",{loader:()=>C(()=>import("./index.html-CcIUfCno.js"),[]),meta:{d:1677410841e3,e:`
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
</ul>`,r:{minutes:.1,words:30},t:"Plugins",i:"creative",y:"a"}}],["/en/plugins/gorm.html",{loader:()=>C(()=>import("./gorm.html-mh23YIlQ.js"),[]),meta:{d:1666055552e3,e:`
<ul>
<li><a href="https://github.com/licheng1013/gorm-template" target="_blank" rel="noopener noreferrer">Document Connections</a></li>
<li>The following documentation is outdated, please refer to the documentation above</li>
</ul>
`,r:{minutes:.06,words:18},t:"Document Connections",y:"a"}}],["/en/plugins/jorm.html",{loader:()=>C(()=>import("./jorm.html-uI5wxK3h.js"),__vite__mapDeps([2,1])),meta:{d:166313995e4,e:`
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
</ul>`,r:{minutes:.62,words:186},t:"JavaOrm",y:"a"}}],["/en/plugins/vue-admin.html",{loader:()=>C(()=>import("./vue-admin.html-P8wdQEpB.js"),[]),meta:{d:1666055552e3,e:`
<h2>Desc</h2>
<ul>
<li>vue3-vite-admin-template</li>
<li>2022/10/18</li>
</ul>
<h2>Example</h2>
<ul>
<li><a href="http://licheng1013.gitee.io/vue3-vite-admin-template/" target="_blank" rel="noopener noreferrer">http://licheng1013.gitee.io/vue3-vite-admin-template/</a></li>
</ul>
<h2>Implementation on the desktop</h2>`,r:{minutes:.22,words:67},t:"VueAdmin",y:"a"}}],["/study/game/",{loader:()=>C(()=>import("./index.html-tes3HWdb.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Game",i:"app",y:"a"}}],["/study/game/cocos.html",{loader:()=>C(()=>import("./cocos.html-Bg1CDBUW.js"),[]),meta:{d:1663818581e3,e:`
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
</ul>`,r:{minutes:.08,words:23},t:"Cocos",y:"a"}}],["/study/game/font.html",{loader:()=>C(()=>import("./font.html-BRQL47zm.js"),[]),meta:{d:1714183309e3,e:`
<h2>小米</h2>
<ul>
<li>商用免费</li>
<li><a href="https://hyperos.mi.com/font/download" target="_blank" rel="noopener noreferrer">https://hyperos.mi.com/font/download</a></li>
</ul>
<h2>OPPO</h2>
<ul>
<li>商用免费</li>
<li><a href="https://www.coloros.com/article/A00000050/" target="_blank" rel="noopener noreferrer">https://www.coloros.com/article/A00000050/</a></li>
</ul>`,r:{minutes:.07,words:20},t:"Font",y:"a"}}],["/study/game/game.html",{loader:()=>C(()=>import("./game.html-BRsNNOTR.js"),[]),meta:{d:1663818581e3,e:`
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
<h2>介绍🎈</h2>`,r:{minutes:3.15,words:945},t:"Game",y:"a"}}],["/study/game/godot.html",{loader:()=>C(()=>import("./godot.html-BZMR9vrB.js"),[]),meta:{d:1663818581e3,e:`
<h2>介绍🚩</h2>
<ul>
<li>2022/9/22</li>
</ul>
<h2>官网❤️</h2>
<ul>
<li>Github: <a href="https://github.com/godotengine/godot" target="_blank" rel="noopener noreferrer">https://github.com/godotengine/godot</a></li>
<li>中文文档：<a href="https://docs.godotengine.org/zh_CN/stable/index.html" target="_blank" rel="noopener noreferrer">https://docs.godotengine.org/zh_CN/stable/index.html</a></li>
<li>官网：<a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer">https://godotengine.org/</a></li>
</ul>`,r:{minutes:.11,words:33},t:"Godot",y:"a"}}],["/study/game/unity-camera.html",{loader:()=>C(()=>import("./unity-camera.html-B9EkPEJH.js"),[]),meta:{d:1701479021e3,e:`
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
</ul>`,r:{minutes:.3,words:89},t:"Unity-Camera",y:"a"}}],["/study/game/unity.html",{loader:()=>C(()=>import("./unity.html-COY7TeQu.js"),[]),meta:{d:1655639782e3,e:`
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
</code></pre></div>`,r:{minutes:4.26,words:1277},t:"Unity",y:"a"}}],["/study/go/",{loader:()=>C(()=>import("./index.html-ggljjB_n.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Go",i:"hot",y:"a"}}],["/study/go/design-mode.html",{loader:()=>C(()=>import("./design-mode.html-CroeShWk.js"),[]),meta:{d:167643291e4,e:`
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

</code></pre></div>`,r:{minutes:.38,words:115},t:"设计模式",y:"a"}}],["/study/go/difficult.html",{loader:()=>C(()=>import("./difficult.html-Blr7d_xi.js"),[]),meta:{d:1677571455e3,e:`
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
</code></pre></div>`,r:{minutes:5.4,words:1620},t:"高级",y:"a"}}],["/study/go/gin.html",{loader:()=>C(()=>import("./gin.html-Bl9swo8E.js"),[]),meta:{d:1663927052e3,e:`
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
</code></pre></div>`,r:{minutes:3.21,words:964},t:"Gin",y:"a"}}],["/study/go/go.html",{loader:()=>C(()=>import("./go.html-bXFkqGHK.js"),[]),meta:{d:1659695436e3,e:`
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
`,r:{minutes:4.54,words:1362},t:"Go",y:"a"}}],["/study/go/gorm.html",{loader:()=>C(()=>import("./gorm.html-DgXPqSN3.js"),[]),meta:{d:1663927052e3,e:`
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

</code></pre></div>`,r:{minutes:.43,words:128},t:"Gorm",y:"a"}}],["/study/go/qiniu.html",{loader:()=>C(()=>import("./qiniu.html-C5alhfNe.js"),[]),meta:{d:1669432928e3,e:`
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
</code></pre></div>`,r:{minutes:.89,words:266},t:"七牛云",y:"a"}}],["/study/go/socket.html",{loader:()=>C(()=>import("./socket.html-CFwYPK7s.js"),[]),meta:{d:1666663905e3,e:`
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

</code></pre></div>`,r:{minutes:5.68,words:1705},t:"Socket",y:"a"}}],["/study/go/ssh.html",{loader:()=>C(()=>import("./ssh.html-QTIWJ9aq.js"),[]),meta:{d:1666662126e3,e:`
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

</code></pre></div>`,r:{minutes:.56,words:169},t:"Ssh",y:"a"}}],["/study/go/try.html",{loader:()=>C(()=>import("./try.html-DASIXerk.js"),[]),meta:{d:1684461409e3,e:`
<h2>介绍</h2>
<ul>
<li>此文档解析一下go的原理或框架的原理</li>
</ul>
<h2>Gin</h2>
<h2>Go</h2>
`,r:{minutes:.08,words:25},t:"原理解析",y:"a"}}],["/study/go/util.html",{loader:()=>C(()=>import("./util.html-PyitjvfM.js"),[]),meta:{d:1685071701e3,e:`
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

</code></pre></div>`,r:{minutes:.75,words:226},t:"工具",y:"a"}}],["/study/go/wails.html",{loader:()=>C(()=>import("./wails.html-DHKc3XbD.js"),[]),meta:{d:1664896733e3,e:`
<h2>介绍</h2>
<ul>
<li>2022/10/4</li>
<li>跨平台框架</li>
</ul>
<h2>官网</h2>
<ul>
<li><a href="https://wails.io/zh-Hans/docs/gettingstarted/installation/" target="_blank" rel="noopener noreferrer">https://wails.io/zh-Hans/docs/gettingstarted/installation/</a></li>
</ul>
`,r:{minutes:.06,words:17},t:"Wails",y:"a"}}],["/study/java/",{loader:()=>C(()=>import("./index.html-CgM-Eu-C.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Java",i:"java",y:"a"}}],["/study/java/data-struct.html",{loader:()=>C(()=>import("./data-struct.html-BFbAYcVu.js"),[]),meta:{d:1654178799e3,e:`
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
</ul>`,r:{minutes:1.98,words:595},t:"数据结构",y:"a"}}],["/study/java/hutool.html",{loader:()=>C(()=>import("./hutool.html-Ctel1kNF.js"),[]),meta:{d:1663209573e3,e:`
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
</code></pre></div>`,r:{minutes:.26,words:77},t:"Hutool",y:"a"}}],["/study/java/io-game.html",{loader:()=>C(()=>import("./io-game.html-DgFzHXME.js"),[]),meta:{d:1663058638e3,e:`
<h2>介绍😎</h2>
<ul>
<li>一个游戏框架</li>
</ul>
<h2>官网🍎</h2>
<ul>
<li>文档 <a href="https://www.yuque.com/iohao/game/wwvg7z" target="_blank" rel="noopener noreferrer">https://www.yuque.com/iohao/game/wwvg7z</a></li>
<li>Gitee <a href="https://gitee.com/iohao/iogame" target="_blank" rel="noopener noreferrer">https://gitee.com/iohao/iogame</a></li>
</ul>`,r:{minutes:.34,words:103},t:"IoGame",y:"a"}}],["/study/java/java.html",{loader:()=>C(()=>import("./java.html-DHA1vnxO.js"),[]),meta:{d:165812515e4,e:`
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
</code></pre></div>`,r:{minutes:1.65,words:494},t:"Java",y:"a"}}],["/study/java/kd.html",{loader:()=>C(()=>import("./kd.html-D5fivdDx.js"),[]),meta:{d:1701673404e3,e:`
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
</code></pre></div>`,r:{minutes:.54,words:161},t:"目录",y:"a"}}],["/study/java/maven.html",{loader:()=>C(()=>import("./maven.html-BX6SScTQ.js"),[]),meta:{d:1661338e6,e:`
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
</code></pre></div>`,r:{minutes:.76,words:229},t:"Maven",y:"a"}}],["/study/java/mqtt.html",{loader:()=>C(()=>import("./mqtt.html-LXDNrv0J.js"),[]),meta:{d:165448599e4,e:`
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
</code></pre></div>`,r:{minutes:1.17,words:350},t:"Mqtt",y:"a"}}],["/study/java/mybatis.html",{loader:()=>C(()=>import("./mybatis.html-CNjHdeOk.js"),[]),meta:{d:1655693918e3,e:`
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
</ul>`,r:{minutes:1.57,words:471},t:"Mybatis",y:"a"}}],["/study/java/protostuff.html",{loader:()=>C(()=>import("./protostuff.html-CQ8Roh11.js"),[]),meta:{d:1657609771e3,e:`
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
</code></pre></div>`,r:{minutes:.64,words:191},t:"Protostuff序列化",y:"a"}}],["/study/java/redisson.html",{loader:()=>C(()=>import("./redisson.html-VUUAFtWk.js"),[]),meta:{d:165559606e4,e:`
<h2>官网⛪</h2>
<ul>
<li><a href="https://github.com/redisson/redisson" target="_blank" rel="noopener noreferrer">https://github.com/redisson/redisson</a></li>
<li><a href="https://github.com/redisson/redisson/wiki" target="_blank" rel="noopener noreferrer">中文文档</a></li>
</ul>
<h2>介绍🐯</h2>
<ul>
<li>redis分布式锁的延升</li>
</ul>`,r:{minutes:.08,words:25},t:"Redisson",y:"a"}}],["/study/java/rocket-mq.html",{loader:()=>C(()=>import("./rocket-mq.html-C1HqUfSP.js"),[]),meta:{d:165448599e4,e:`
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
</ul>`,r:{minutes:.2,words:59},t:"RocketMq",y:"a"}}],["/study/java/spring-boot-demo.html",{loader:()=>C(()=>import("./spring-boot-demo.html-Do60fa04.js"),[]),meta:{d:1652589468e3,e:`
<h2>根据条件创建bean的注解👻</h2>
<h3>@ConditionalOnProperty💒</h3>
<div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"spring.cloud.discovery.enabled"</span><span class="token punctuation">,</span> matchIfMissing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">ConditionalOnDiscoveryEnabled</span> <span class="token punctuation">{</span>
    <span class="token comment">//在指定的类上添加，可以限制类的bean创建。</span>
    <span class="token comment">//value             配置yml文件中的属性名</span>
    <span class="token comment">//matchIfMissing    设置值,默认为false及默认不创建bean</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.34,words:403},t:"SpringBootDemo",y:"a"}}],["/study/java/spring-boot.html",{loader:()=>C(()=>import("./spring-boot.html-QHHw7AAj.js"),[]),meta:{d:1657369302e3,e:`
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
</div>`,r:{minutes:6.58,words:1974},t:"SpringBoot",y:"a"}}],["/study/java/spring-cloud-alibaba.html",{loader:()=>C(()=>import("./spring-cloud-alibaba.html-ZpmfXhvq.js"),[]),meta:{d:1654178799e3,e:`
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
</ul>`,r:{minutes:.2,words:60},t:"SpringCloudAlibaba",y:"a"}}],["/study/java/spring-cloud.html",{loader:()=>C(()=>import("./spring-cloud.html-Y6ceH2aQ.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍🐯</h2>
<ul>
<li>待补充</li>
</ul>
`,r:{minutes:.02,words:7},t:"SpringCloud",y:"a"}}],["/study/java/transaction.html",{loader:()=>C(()=>import("./transaction.html-iUGVLdLP.js"),[]),meta:{d:1654852665e3,e:`
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
</ul>`,r:{minutes:.6,words:181},t:"Transaction",y:"a"}}],["/study/linux/",{loader:()=>C(()=>import("./index.html-Dgzi6hgq.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Linux",i:"linux",y:"a"}}],["/study/linux/docker.html",{loader:()=>C(()=>import("./docker.html-o-EN5d1K.js"),[]),meta:{d:1655614514e3,e:`
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
</code></pre></div>`,r:{minutes:3.32,words:996},t:"Docker",y:"a"}}],["/study/linux/git.html",{loader:()=>C(()=>import("./git.html-vf3iUAOI.js"),[]),meta:{d:1654399479e3,e:`
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
</table>`,r:{minutes:1.41,words:422},t:"Git使用",y:"a"}}],["/study/linux/linux.html",{loader:()=>C(()=>import("./linux.html-CxTGqWLU.js"),[]),meta:{d:1655798572e3,e:`
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
</code></pre></div>`,r:{minutes:1.48,words:443},t:"Linux",y:"a"}}],["/study/linux/mysql.html",{loader:()=>C(()=>import("./mysql.html-BZkSDWoI.js"),[]),meta:{d:1658066376e3,e:`
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
<h3>计算排名sql</h3>`,r:{minutes:4.57,words:1370},t:"Mysql",y:"a"}}],["/study/linux/nginx.html",{loader:()=>C(()=>import("./nginx.html-8NROYO-i.js"),[]),meta:{d:1657693801e3,e:`
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
</code></pre></div>`,r:{minutes:.4,words:119},t:"Nginx",y:"a"}}],["/study/linux/server.html",{loader:()=>C(()=>import("./server.html-CoVmqfT3.js"),[]),meta:{d:1655884192e3,e:`
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
</ul>`,r:{minutes:.43,words:129},t:"网络",y:"a"}}],["/study/linux/shell.html",{loader:()=>C(()=>import("./shell.html-BLH9BMFu.js"),[]),meta:{d:1657092715e3,e:`
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
</code></pre></div>`,r:{minutes:.68,words:203},t:"Shell",y:"a"}}],["/study/try/",{loader:()=>C(()=>import("./index.html-CS4YsAUg.js"),[]),meta:{d:1671088008e3,r:{minutes:.02,words:6},t:"Try",i:"support",y:"a"}}],["/study/try/antlr.html",{loader:()=>C(()=>import("./antlr.html-W_3xtfRM.js"),[]),meta:{d:1668737652e3,e:`
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
</code></pre></div>`,r:{minutes:.5,words:151},t:"Antlr",y:"a"}}],["/study/try/flutter.html",{loader:()=>C(()=>import("./flutter.html-BsN110Fk.js"),[]),meta:{d:1657369621e3,e:`
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

</code></pre></div>`,r:{minutes:3.03,words:909},t:"Flutter",y:"a"}}],["/study/try/python.html",{loader:()=>C(()=>import("./python.html-CctxL5T-.js"),[]),meta:{d:1658285202e3,e:`
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
<h2>Game🎁</h2>`,r:{minutes:4.87,words:1460},t:"Python",y:"a"}}],["/study/try/rust.html",{loader:()=>C(()=>import("./rust.html-BiaNhSBq.js"),[]),meta:{d:1663080627e3,e:`
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
</ul>`,r:{minutes:1.72,words:515},t:"Rust",y:"a"}}],["/study/web/",{loader:()=>C(()=>import("./index.html-KUNMJh1P.js"),[]),meta:{d:1671160035e3,r:{minutes:.02,words:6},t:"Web",i:"leaf",y:"a"}}],["/study/web/axios.html",{loader:()=>C(()=>import("./axios.html-CMcPoWuR.js"),[]),meta:{d:1657691221e3,e:`
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
</ul>`,r:{minutes:.98,words:294},t:"Axios",y:"a"}}],["/study/web/css.html",{loader:()=>C(()=>import("./css.html-DCrouqyd.js"),[]),meta:{d:1671160035e3,e:`
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
</ul>`,r:{minutes:.97,words:290},t:"Css",y:"a"}}],["/study/web/electron.html",{loader:()=>C(()=>import("./electron.html-CPFdBJ9i.js"),[]),meta:{d:1656920535e3,e:`
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
</ul>`,r:{minutes:.95,words:286},t:"Electron",y:"a"}}],["/study/web/node.html",{loader:()=>C(()=>import("./node.html-CyR21z35.js"),[]),meta:{d:165448599e4,e:`
<ul>
<li>2022/7/13</li>
</ul>
<h2>介绍😃</h2>
<ul>
<li>安装</li>
<li>Ubuntu: sudo snap install node <a href="https://github.com/nodejs/snap" target="_blank" rel="noopener noreferrer">https://github.com/nodejs/snap</a></li>
<li>Windows: <a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></li>
</ul>`,r:{minutes:1.33,words:398},t:"Node",y:"a"}}],["/study/web/vite.html",{loader:()=>C(()=>import("./vite.html-DrR8L9Ad.js"),[]),meta:{d:1659747522e3,e:`
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

</code></pre></div>`,r:{minutes:.39,words:116},t:"Vite",y:"a"}}],["/study/web/vue.html",{loader:()=>C(()=>import("./vue.html-BaK_8Ej5.js"),[]),meta:{d:1657335182e3,e:`
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
`,r:{minutes:1.81,words:542},t:"Vue",y:"a"}}],["/study/game/design/chess.html",{loader:()=>C(()=>import("./chess.html-CiDqBV3H.js"),[]),meta:{d:1672821313e3,e:`
<h2>棋牌</h2>
<ul>
<li><a href="https://www.zhihu.com/question/490679283" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/490679283</a></li>
</ul>
<h2>伪代码</h2>
`,r:{minutes:.03,words:10},t:"Chess",y:"a"}}],["/study/java/design-mode/design-mode.html",{loader:()=>C(()=>import("./design-mode.html-CxrF_wBx.js"),[]),meta:{d:1654178799e3,e:`
<h2>介绍</h2>
<ul>
<li>待写</li>
</ul>
`,r:{minutes:.03,words:8},t:"设计模式",y:"a"}}],["/study/java/design-mode/proxy.html",{loader:()=>C(()=>import("./proxy.html-BxXkUj_v.js"),[]),meta:{d:1654698354e3,e:`
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
</code></pre></div>`,r:{minutes:.49,words:148},t:"代理模式",y:"a"}}],["/404.html",{loader:()=>C(()=>import("./404.html-D65jCpTd.js"),[]),meta:{t:""}}],["/study/game/design/",{loader:()=>C(()=>import("./index.html-CJ1BJ0EJ.js"),[]),meta:{t:"Design"}}],["/study/java/design-mode/",{loader:()=>C(()=>import("./index.html-DM1AdXNX.js"),[]),meta:{t:"Design Mode"}}],["/category/",{loader:()=>C(()=>import("./index.html-BAvYUDpe.js"),[]),meta:{t:"分类",I:!1}}],["/en/category/",{loader:()=>C(()=>import("./index.html-9nt_Fbw8.js"),[]),meta:{t:"Category",I:!1}}],["/tag/",{loader:()=>C(()=>import("./index.html-CXaShEB0.js"),[]),meta:{t:"标签",I:!1}}],["/en/tag/",{loader:()=>C(()=>import("./index.html-BUVkEbvu.js"),[]),meta:{t:"Tag",I:!1}}],["/article/",{loader:()=>C(()=>import("./index.html-Dm_usR5P.js"),[]),meta:{t:"文章",I:!1}}],["/en/article/",{loader:()=>C(()=>import("./index.html-C3oD70eP.js"),[]),meta:{t:"Articles",I:!1}}],["/star/",{loader:()=>C(()=>import("./index.html-B77Lir4z.js"),[]),meta:{t:"星标",I:!1}}],["/en/star/",{loader:()=>C(()=>import("./index.html-Dpo5kdyJ.js"),[]),meta:{t:"Star",I:!1}}],["/timeline/",{loader:()=>C(()=>import("./index.html-ChpXyiAv.js"),[]),meta:{t:"时间轴",I:!1}}],["/en/timeline/",{loader:()=>C(()=>import("./index.html-CgSv_Wx5.js"),[]),meta:{t:"Timeline",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mt=typeof document<"u";function Gh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function Pa(e,n){const t={};for(const s in n){const a=n[s];t[s]=pn(a)?a.map(e):e(a)}return t}const Jt=()=>{},pn=Array.isArray,Gr=/#/g,Kh=/&/g,Jh=/\//g,Yh=/=/g,Xh=/\?/g,Kr=/\+/g,Qh=/%5B/g,Zh=/%5D/g,Jr=/%5E/g,e2=/%60/g,Yr=/%7B/g,n2=/%7C/g,Xr=/%7D/g,t2=/%20/g;function $l(e){return encodeURI(""+e).replace(n2,"|").replace(Qh,"[").replace(Zh,"]")}function s2(e){return $l(e).replace(Yr,"{").replace(Xr,"}").replace(Jr,"^")}function Qa(e){return $l(e).replace(Kr,"%2B").replace(t2,"+").replace(Gr,"%23").replace(Kh,"%26").replace(e2,"`").replace(Yr,"{").replace(Xr,"}").replace(Jr,"^")}function a2(e){return Qa(e).replace(Yh,"%3D")}function l2(e){return $l(e).replace(Gr,"%23").replace(Xh,"%3F")}function o2(e){return e==null?"":l2(e).replace(Jh,"%2F")}function as(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const i2=/\/$/,r2=e=>e.replace(i2,"");function Da(e,n,t="/"){let s,a={},l="",o="";const c=n.indexOf("#");let r=n.indexOf("?");return c<r&&c>=0&&(r=-1),r>-1&&(s=n.slice(0,r),l=n.slice(r+1,c>-1?c:n.length),a=e(l)),c>-1&&(s=s||n.slice(0,c),o=n.slice(c,n.length)),s=d2(s??n,t),{fullPath:s+(l&&"?")+l+o,path:s,query:a,hash:as(o)}}function c2(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Xo(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function u2(e,n,t){const s=n.matched.length-1,a=t.matched.length-1;return s>-1&&s===a&&Ct(n.matched[s],t.matched[a])&&Qr(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Ct(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Qr(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!p2(e[t],n[t]))return!1;return!0}function p2(e,n){return pn(e)?Qo(e,n):pn(n)?Qo(n,e):e===n}function Qo(e,n){return pn(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function d2(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let l=t.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+s.slice(o).join("/")}var ls;(function(e){e.pop="pop",e.push="push"})(ls||(ls={}));var Yt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yt||(Yt={}));function h2(e){if(!e)if(mt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),r2(e)}const f2=/^[^#]+#/;function g2(e,n){return e.replace(f2,"#")+n}function m2(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const ua=()=>({left:window.scrollX,top:window.scrollY});function k2(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;n=m2(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Zo(e,n){return(history.state?history.state.position-n:-1)+e}const Za=new Map;function v2(e,n){Za.set(e,n)}function y2(e){const n=Za.get(e);return Za.delete(e),n}let b2=()=>location.protocol+"//"+location.host;function Zr(e,n){const{pathname:t,search:s,hash:a}=n,l=e.indexOf("#");if(l>-1){let c=a.includes(e.slice(l))?e.slice(l).length:1,r=a.slice(c);return r[0]!=="/"&&(r="/"+r),Xo(r,"")}return Xo(t,e)+s+a}function w2(e,n,t,s){let a=[],l=[],o=null;const c=({state:h})=>{const f=Zr(e,location),k=t.value,_=n.value;let w=0;if(h){if(t.value=f,n.value=h,o&&o===k){o=null;return}w=_?h.position-_.position:0}else s(f);a.forEach(y=>{y(t.value,k,{delta:w,type:ls.pop,direction:w?w>0?Yt.forward:Yt.back:Yt.unknown})})};function r(){o=t.value}function u(h){a.push(h);const f=()=>{const k=a.indexOf(h);k>-1&&a.splice(k,1)};return l.push(f),f}function p(){const{history:h}=window;h.state&&h.replaceState(he({},h.state,{scroll:ua()}),"")}function d(){for(const h of l)h();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:r,listen:u,destroy:d}}function ei(e,n,t,s=!1,a=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:a?ua():null}}function _2(e){const{history:n,location:t}=window,s={value:Zr(e,t)},a={value:n.state};a.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(r,u,p){const d=e.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+r:b2()+e+r;try{n[p?"replaceState":"pushState"](u,"",h),a.value=u}catch(f){console.error(f),t[p?"replace":"assign"](h)}}function o(r,u){const p=he({},n.state,ei(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,p,!0),s.value=r}function c(r,u){const p=he({},a.value,n.state,{forward:r,scroll:ua()});l(p.current,p,!0);const d=he({},ei(s.value,r,null),{position:p.position+1},u);l(r,d,!1),s.value=r}return{location:s,state:a,push:c,replace:o}}function x2(e){e=h2(e);const n=_2(e),t=w2(e,n.state,n.location,n.replace);function s(l,o=!0){o||t.pauseListeners(),history.go(l)}const a=he({location:"",base:e,go:s,createHref:g2.bind(null,e)},n,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function E2(e){return typeof e=="string"||e&&typeof e=="object"}function ec(e){return typeof e=="string"||typeof e=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nc=Symbol("");var ni;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ni||(ni={}));function St(e,n){return he(new Error,{type:e,[nc]:!0},n)}function Ln(e,n){return e instanceof Error&&nc in e&&(n==null||!!(e.type&n))}const ti="[^/]+?",L2={sensitive:!1,strict:!1,start:!0,end:!0},T2=/[.+*?^${}()[\]/\\]/g;function C2(e,n){const t=he({},L2,n),s=[];let a=t.start?"^":"";const l=[];for(const u of e){const p=u.length?[]:[90];t.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const h=u[d];let f=40+(t.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(T2,"\\$&"),f+=40;else if(h.type===1){const{value:k,repeatable:_,optional:w,regexp:y}=h;l.push({name:k,repeatable:_,optional:w});const E=y||ti;if(E!==ti){f+=10;try{new RegExp(`(${E})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${k}" (${E}): `+T.message)}}let v=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(v=w&&u.length<2?`(?:/${v})`:"/"+v),w&&(v+="?"),a+=v,f+=20,w&&(f+=-8),_&&(f+=-20),E===".*"&&(f+=-50)}p.push(f)}s.push(p)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(a+="/?"),t.end?a+="$":t.strict&&(a+="(?:/|$)");const o=new RegExp(a,t.sensitive?"":"i");function c(u){const p=u.match(o),d={};if(!p)return null;for(let h=1;h<p.length;h++){const f=p[h]||"",k=l[h-1];d[k.name]=f&&k.repeatable?f.split("/"):f}return d}function r(u){let p="",d=!1;for(const h of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const f of h)if(f.type===0)p+=f.value;else if(f.type===1){const{value:k,repeatable:_,optional:w}=f,y=k in u?u[k]:"";if(pn(y)&&!_)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const E=pn(y)?y.join("/"):y;if(!E)if(w)h.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);p+=E}}return p||"/"}return{re:o,score:s,keys:l,parse:c,stringify:r}}function S2(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function A2(e,n){let t=0;const s=e.score,a=n.score;for(;t<s.length&&t<a.length;){const l=S2(s[t],a[t]);if(l)return l;t++}if(Math.abs(a.length-s.length)===1){if(si(s))return 1;if(si(a))return-1}return a.length-s.length}function si(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const I2={type:0,value:""},P2=/[a-zA-Z0-9_]/;function D2(e){if(!e)return[[]];if(e==="/")return[[I2]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${t})/"${u}": ${f}`)}let t=0,s=t;const a=[];let l;function o(){l&&a.push(l),l=[]}let c=0,r,u="",p="";function d(){u&&(t===0?l.push({type:0,value:u}):t===1||t===2||t===3?(l.length>1&&(r==="*"||r==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:p,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):n("Invalid state to consume buffer"),u="")}function h(){u+=r}for(;c<e.length;){if(r=e[c++],r==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:r==="/"?(u&&d(),o()):r===":"?(d(),t=1):h();break;case 4:h(),t=s;break;case 1:r==="("?t=2:P2.test(r)?h():(d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--);break;case 2:r===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+r:t=3:p+=r;break;case 3:d(),t=0,r!=="*"&&r!=="?"&&r!=="+"&&c--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${u}"`),d(),o(),a}function O2(e,n,t){const s=C2(D2(e.path),t),a=he(s,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function R2(e,n){const t=[],s=new Map;n=oi({strict:!1,end:!0,sensitive:!1},n);function a(p){return s.get(p)}function l(p,d,h){const f=!h,k=M2(p);k.aliasOf=h&&h.record;const _=oi(n,p),w=[k];if("alias"in p){const v=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of v)w.push(he({},k,{components:h?h.record.components:k.components,path:T,aliasOf:h?h.record:k}))}let y,E;for(const v of w){const{path:T}=v;if(d&&T[0]!=="/"){const O=d.record.path,L=O[O.length-1]==="/"?"":"/";v.path=d.record.path+(T&&L+T)}if(y=O2(v,d,_),h?h.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),f&&p.name&&!li(y)&&o(p.name)),k.children){const O=k.children;for(let L=0;L<O.length;L++)l(O[L],y,h&&h.children[L])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&r(y)}return E?()=>{o(E)}:Jt}function o(p){if(ec(p)){const d=s.get(p);d&&(s.delete(p),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(p);d>-1&&(t.splice(d,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return t}function r(p){let d=0;for(;d<t.length&&A2(p,t[d])>=0&&(p.record.path!==t[d].record.path||!tc(p,t[d]));)d++;t.splice(d,0,p),p.record.name&&!li(p)&&s.set(p.record.name,p)}function u(p,d){let h,f={},k,_;if("name"in p&&p.name){if(h=s.get(p.name),!h)throw St(1,{location:p});_=h.record.name,f=he(ai(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),p.params&&ai(p.params,h.keys.map(E=>E.name))),k=h.stringify(f)}else if(p.path!=null)k=p.path,h=t.find(E=>E.re.test(k)),h&&(f=h.parse(k),_=h.record.name);else{if(h=d.name?s.get(d.name):t.find(E=>E.re.test(d.path)),!h)throw St(1,{location:p,currentLocation:d});_=h.record.name,f=he({},d.params,p.params),k=h.stringify(f)}const w=[];let y=h;for(;y;)w.unshift(y.record),y=y.parent;return{name:_,path:k,params:f,matched:w,meta:F2(w)}}return e.forEach(p=>l(p)),{addRoute:l,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:a}}function ai(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function M2(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:j2(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function j2(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="object"?t[s]:t;return n}function li(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function F2(e){return e.reduce((n,t)=>he(n,t.meta),{})}function oi(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function tc(e,n){return n.children.some(t=>t===e||tc(e,t))}function $2(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const l=s[a].replace(Kr," "),o=l.indexOf("="),c=as(o<0?l:l.slice(0,o)),r=o<0?null:as(l.slice(o+1));if(c in n){let u=n[c];pn(u)||(u=n[c]=[u]),u.push(r)}else n[c]=r}return n}function ii(e){let n="";for(let t in e){const s=e[t];if(t=a2(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(pn(s)?s.map(l=>l&&Qa(l)):[s&&Qa(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+t,l!=null&&(n+="="+l))})}return n}function N2(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=pn(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return n}const H2=Symbol(""),ri=Symbol(""),pa=Symbol(""),Nl=Symbol(""),el=Symbol("");function $t(){let e=[];function n(s){return e.push(s),()=>{const a=e.indexOf(s);a>-1&&e.splice(a,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Vn(e,n,t,s,a,l=o=>o()){const o=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((c,r)=>{const u=h=>{h===!1?r(St(4,{from:t,to:n})):h instanceof Error?r(h):E2(h)?r(St(2,{from:n,to:h})):(o&&s.enterCallbacks[a]===o&&typeof h=="function"&&o.push(h),c())},p=l(()=>e.call(s&&s.instances[a],n,t,u));let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(h=>r(h))})}function Oa(e,n,t,s,a=l=>l()){const l=[];for(const o of e)for(const c in o.components){let r=o.components[c];if(!(n!=="beforeRouteEnter"&&!o.instances[c]))if(V2(r)){const p=(r.__vccOpts||r)[n];p&&l.push(Vn(p,t,s,o,c,a))}else{let u=r();l.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const d=Gh(p)?p.default:p;o.components[c]=d;const f=(d.__vccOpts||d)[n];return f&&Vn(f,t,s,o,c,a)()}))}}return l}function V2(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ci(e){const n=ve(pa),t=ve(Nl),s=b(()=>n.resolve(on(e.to))),a=b(()=>{const{matched:r}=s.value,{length:u}=r,p=r[u-1],d=t.matched;if(!p||!d.length)return-1;const h=d.findIndex(Ct.bind(null,p));if(h>-1)return h;const f=ui(r[u-2]);return u>1&&ui(p)===f&&d[d.length-1].path!==f?d.findIndex(Ct.bind(null,r[u-2])):h}),l=b(()=>a.value>-1&&W2(t.params,s.value.params)),o=b(()=>a.value>-1&&a.value===t.matched.length-1&&Qr(t.params,s.value.params));function c(r={}){return q2(r)?n[on(e.replace)?"replace":"push"](on(e.to)).catch(Jt):Promise.resolve()}return{route:s,href:b(()=>s.value.href),isActive:l,isExactActive:o,navigate:c}}const B2=H({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ci,setup(e,{slots:n}){const t=hs(ci(e)),{options:s}=ve(pa),a=b(()=>({[pi(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[pi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const l=n.default&&n.default(t);return e.custom?l:i("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},l)}}}),z2=B2;function q2(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function W2(e,n){for(const t in n){const s=n[t],a=e[t];if(typeof s=="string"){if(s!==a)return!1}else if(!pn(a)||a.length!==s.length||s.some((l,o)=>l!==a[o]))return!1}return!0}function ui(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const pi=(e,n,t)=>e??n??t,U2=H({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=ve(el),a=b(()=>e.route||s.value),l=ve(ri,0),o=b(()=>{let u=on(l);const{matched:p}=a.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),c=b(()=>a.value.matched[o.value]);un(ri,b(()=>o.value+1)),un(H2,c),un(el,a);const r=K();return pe(()=>[r.value,c.value,e.name],([u,p,d],[h,f,k])=>{p&&(p.instances[d]=u,f&&f!==p&&u&&u===h&&(p.leaveGuards.size||(p.leaveGuards=f.leaveGuards),p.updateGuards.size||(p.updateGuards=f.updateGuards))),u&&p&&(!f||!Ct(p,f)||!h)&&(p.enterCallbacks[d]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,p=e.name,d=c.value,h=d&&d.components[p];if(!h)return di(t.default,{Component:h,route:u});const f=d.props[p],k=f?f===!0?u.params:typeof f=="function"?f(u):f:null,w=i(h,he({},k,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[p]=null)},ref:r}));return di(t.default,{Component:w,route:u})||w}}});function di(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const G2=U2;function K2(e){const n=R2(e.routes,e),t=e.parseQuery||$2,s=e.stringifyQuery||ii,a=e.history,l=$t(),o=$t(),c=$t(),r=je(Cn);let u=Cn;mt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Pa.bind(null,A=>""+A),d=Pa.bind(null,o2),h=Pa.bind(null,as);function f(A,z){let V,W;return ec(A)?(V=n.getRecordMatcher(A),W=z):W=A,n.addRoute(W,V)}function k(A){const z=n.getRecordMatcher(A);z&&n.removeRoute(z)}function _(){return n.getRoutes().map(A=>A.record)}function w(A){return!!n.getRecordMatcher(A)}function y(A,z){if(z=he({},z||r.value),typeof A=="string"){const m=Da(t,A,z.path),x=n.resolve({path:m.path},z),I=a.createHref(m.fullPath);return he(m,x,{params:h(x.params),hash:as(m.hash),redirectedFrom:void 0,href:I})}let V;if(A.path!=null)V=he({},A,{path:Da(t,A.path,z.path).path});else{const m=he({},A.params);for(const x in m)m[x]==null&&delete m[x];V=he({},A,{params:d(m)}),z.params=d(z.params)}const W=n.resolve(V,z),de=A.hash||"";W.params=p(h(W.params));const be=c2(s,he({},A,{hash:s2(de),path:W.path})),g=a.createHref(be);return he({fullPath:be,hash:de,query:s===ii?N2(A.query):A.query||{}},W,{redirectedFrom:void 0,href:g})}function E(A){return typeof A=="string"?Da(t,A,r.value.path):he({},A)}function v(A,z){if(u!==A)return St(8,{from:z,to:A})}function T(A){return j(A)}function O(A){return T(he(E(A),{replace:!0}))}function L(A){const z=A.matched[A.matched.length-1];if(z&&z.redirect){const{redirect:V}=z;let W=typeof V=="function"?V(A):V;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=E(W):{path:W},W.params={}),he({query:A.query,hash:A.hash,params:W.path!=null?{}:A.params},W)}}function j(A,z){const V=u=y(A),W=r.value,de=A.state,be=A.force,g=A.replace===!0,m=L(V);if(m)return j(he(E(m),{state:typeof m=="object"?he({},de,m.state):de,force:be,replace:g}),z||V);const x=V;x.redirectedFrom=z;let I;return!be&&u2(s,W,V)&&(I=St(16,{to:x,from:W}),fn(W,W,!0,!1)),(I?Promise.resolve(I):D(x,W)).catch(S=>Ln(S)?Ln(S,2)?S:Pn(S):U(S,x,W)).then(S=>{if(S){if(Ln(S,2))return j(he({replace:g},E(S.to),{state:typeof S.to=="object"?he({},de,S.to.state):de,force:be}),z||x)}else S=$(x,W,!0,g,de);return X(x,W,S),S})}function R(A,z){const V=v(A,z);return V?Promise.reject(V):Promise.resolve()}function Y(A){const z=ht.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(A):A()}function D(A,z){let V;const[W,de,be]=J2(A,z);V=Oa(W.reverse(),"beforeRouteLeave",A,z);for(const m of W)m.leaveGuards.forEach(x=>{V.push(Vn(x,A,z))});const g=R.bind(null,A,z);return V.push(g),Fe(V).then(()=>{V=[];for(const m of l.list())V.push(Vn(m,A,z));return V.push(g),Fe(V)}).then(()=>{V=Oa(de,"beforeRouteUpdate",A,z);for(const m of de)m.updateGuards.forEach(x=>{V.push(Vn(x,A,z))});return V.push(g),Fe(V)}).then(()=>{V=[];for(const m of be)if(m.beforeEnter)if(pn(m.beforeEnter))for(const x of m.beforeEnter)V.push(Vn(x,A,z));else V.push(Vn(m.beforeEnter,A,z));return V.push(g),Fe(V)}).then(()=>(A.matched.forEach(m=>m.enterCallbacks={}),V=Oa(be,"beforeRouteEnter",A,z,Y),V.push(g),Fe(V))).then(()=>{V=[];for(const m of o.list())V.push(Vn(m,A,z));return V.push(g),Fe(V)}).catch(m=>Ln(m,8)?m:Promise.reject(m))}function X(A,z,V){c.list().forEach(W=>Y(()=>W(A,z,V)))}function $(A,z,V,W,de){const be=v(A,z);if(be)return be;const g=z===Cn,m=mt?history.state:{};V&&(W||g?a.replace(A.fullPath,he({scroll:g&&m&&m.scroll},de)):a.push(A.fullPath,de)),r.value=A,fn(A,z,V,g),Pn()}let ee;function Le(){ee||(ee=a.listen((A,z,V)=>{if(!As.listening)return;const W=y(A),de=L(W);if(de){j(he(de,{replace:!0}),W).catch(Jt);return}u=W;const be=r.value;mt&&v2(Zo(be.fullPath,V.delta),ua()),D(W,be).catch(g=>Ln(g,12)?g:Ln(g,2)?(j(g.to,W).then(m=>{Ln(m,20)&&!V.delta&&V.type===ls.pop&&a.go(-1,!1)}).catch(Jt),Promise.reject()):(V.delta&&a.go(-V.delta,!1),U(g,W,be))).then(g=>{g=g||$(W,be,!1),g&&(V.delta&&!Ln(g,8)?a.go(-V.delta,!1):V.type===ls.pop&&Ln(g,20)&&a.go(-1,!1)),X(W,be,g)}).catch(Jt)}))}let Te=$t(),G=$t(),se;function U(A,z,V){Pn(A);const W=G.list();return W.length?W.forEach(de=>de(A,z,V)):console.error(A),Promise.reject(A)}function sn(){return se&&r.value!==Cn?Promise.resolve():new Promise((A,z)=>{Te.add([A,z])})}function Pn(A){return se||(se=!A,Le(),Te.list().forEach(([z,V])=>A?V(A):z()),Te.reset()),A}function fn(A,z,V,W){const{scrollBehavior:de}=e;if(!mt||!de)return Promise.resolve();const be=!V&&y2(Zo(A.fullPath,0))||(W||!V)&&history.state&&history.state.scroll||null;return Gn().then(()=>de(A,z,be)).then(g=>g&&k2(g)).catch(g=>U(g,A,z))}const Be=A=>a.go(A);let dt;const ht=new Set,As={currentRoute:r,listening:!0,addRoute:f,removeRoute:k,hasRoute:w,getRoutes:_,resolve:y,options:e,push:T,replace:O,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:l.add,beforeResolve:o.add,afterEach:c.add,onError:G.add,isReady:sn,install(A){const z=this;A.component("RouterLink",z2),A.component("RouterView",G2),A.config.globalProperties.$router=z,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>on(r)}),mt&&!dt&&r.value===Cn&&(dt=!0,T(a.location).catch(de=>{}));const V={};for(const de in Cn)Object.defineProperty(V,de,{get:()=>r.value[de],enumerable:!0});A.provide(pa,z),A.provide(Nl,nr(V)),A.provide(el,r);const W=A.unmount;ht.add(A),A.unmount=function(){ht.delete(A),ht.size<1&&(u=Cn,ee&&ee(),ee=null,r.value=Cn,dt=!1,se=!1),W()}}};function Fe(A){return A.reduce((z,V)=>z.then(()=>Y(V)),Promise.resolve())}return As}function J2(e,n){const t=[],s=[],a=[],l=Math.max(n.matched.length,e.matched.length);for(let o=0;o<l;o++){const c=n.matched[o];c&&(e.matched.find(u=>Ct(u,c))?s.push(c):t.push(c));const r=e.matched[o];r&&(n.matched.find(u=>Ct(u,r))||a.push(r))}return[t,s,a]}function Jn(){return ve(pa)}function _n(){return ve(Nl)}var Hl=Symbol(""),xn=()=>{const e=ve(Hl);if(!e)throw new Error("useClientData() is called without provider.");return e},Y2=()=>xn().pageComponent,me=()=>xn().pageData,fe=()=>xn().pageFrontmatter,X2=()=>xn().pageHead,Vl=()=>xn().pageLang,Q2=()=>xn().pageLayout,hn=()=>xn().routeLocale,sc=()=>xn().routes,ac=()=>xn().siteData,Ot=()=>xn().siteLocaleData,Z2=Symbol(""),nl=je(Wh),os=je(Uh),lc=e=>{const n=Vh(e);if(os.value[n])return n;const t=encodeURI(n);return os.value[t]?t:nl.value[n]||nl.value[t]||n},at=e=>{const n=lc(e),t=os.value[n]??{...os.value["/404.html"],notFound:!0};return{path:n,notFound:!1,...t}},da=H({name:"ClientOnly",setup(e,n){const t=K(!1);return ye(()=>{t.value=!0}),()=>{var s,a;return t.value?(a=(s=n.slots).default)==null?void 0:a.call(s):null}}}),oc=H({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const n=Y2(),t=b(()=>{if(!e.path)return n.value;const s=at(e.path);return id(()=>s.loader().then(({comp:a})=>a))});return()=>i(t.value)}}),Ge=(e={})=>e,xe=e=>Kn(e)?e:`/${Ur(e)}`,e1=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const n=e.currentTarget.getAttribute("target");if(n!=null&&n.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Ce=({active:e=!1,activeClass:n="route-link-active",to:t,...s},{slots:a})=>{var r;const l=Jn(),o=lc(t),c=o.startsWith("#")||o.startsWith("?")?o:xe(o);return i("a",{...s,class:["route-link",{[n]:e}],href:c,onClick:(u={})=>{e1(u)?l.push(t).catch():Promise.resolve()}},(r=a.default)==null?void 0:r.call(a))};Ce.displayName="RouteLink";Ce.props={active:Boolean,activeClass:String,to:String};var n1="Layout",t1="en-US",Qn=hs({resolveLayouts:e=>e.reduce((n,t)=>({...n,...t.layouts}),{}),resolvePageHead:(e,n,t)=>{const s=ke(n.description)?n.description:t.description,a=[...Array.isArray(n.head)?n.head:[],...t.head,["title",{},e],["meta",{name:"description",content:s}]];return $h(a)},resolvePageHeadTitle:(e,n)=>[e.title,n.title].filter(t=>!!t).join(" | "),resolvePageLang:(e,n)=>e.lang||n.lang||t1,resolvePageLayout:(e,n)=>{const t=ke(e.frontmatter.layout)?e.frontmatter.layout:n1;if(!n[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return n[t]},resolveRouteLocale:(e,n)=>Bh(e,n),resolveSiteLocaleData:(e,n)=>{var t;return{...e,...e.locales[n],head:[...((t=e.locales[n])==null?void 0:t.head)??[],...e.head??[]]}}});const s1={},bs=e=>{const n=hn();return b(()=>e[n.value]??{})},a1=()=>{const e=sc();return b(()=>Object.keys(e.value))},bn=(e,n)=>{var s;const t=(s=(n==null?void 0:n._instance)||ms())==null?void 0:s.appContext.components;return t?e in t||tn(e)in t||ds(tn(e))in t:!1},l1=e=>typeof e<"u",Ra=e=>typeof e=="number",tl=Array.isArray,At=(e,n)=>ke(e)&&e.startsWith(n),o1=(e,n)=>ke(e)&&e.endsWith(n),Rt=Object.entries,dn=Object.keys,Bl=e=>{if(e){if(typeof e=="number")return new Date(e);const n=Date.parse(e.toString());if(!Number.isNaN(n))return new Date(n)}return null},ws=e=>At(e,"/"),i1="http://.",r1=(e,n)=>{if(ws(e)||typeof n!="string")return at(e);const t=n.slice(0,n.lastIndexOf("/"));return at(new URL(`${t}/${encodeURI(e)}`,i1).pathname)},ic=e=>new Promise(n=>setTimeout(n,e));function zl(e,n){let t,s,a;const l=K(!0),o=()=>{l.value=!0,a()};pe(e,o,{flush:"sync"});const c=typeof n=="function"?n:n.get,r=typeof n=="function"?void 0:n.set,u=Sl((p,d)=>(s=p,a=d,{get(){return l.value&&(t=c(),l.value=!1),s(),t},set(h){r==null||r(h)}}));return Object.isExtensible(u)&&(u.trigger=o),u}function ct(e){return zi()?(fp(e),!0):!1}function Re(e){return typeof e=="function"?e():on(e)}const _s=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const c1=e=>e!=null,u1=Object.prototype.toString,p1=e=>u1.call(e)==="[object Object]",lt=()=>{},hi=d1();function d1(){var e,n;return _s&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ql(e,n){function t(...s){return new Promise((a,l)=>{Promise.resolve(e(()=>n.apply(this,s),{fn:n,thisArg:this,args:s})).then(a).catch(l)})}return t}const rc=e=>e();function h1(e,n={}){let t,s,a=lt;const l=c=>{clearTimeout(c),a(),a=lt};return c=>{const r=Re(e),u=Re(n.maxWait);return t&&l(t),r<=0||u!==void 0&&u<=0?(s&&(l(s),s=null),Promise.resolve(c())):new Promise((p,d)=>{a=n.rejectOnCancel?d:p,u&&!s&&(s=setTimeout(()=>{t&&l(t),s=null,p(c())},u)),t=setTimeout(()=>{s&&l(s),s=null,p(c())},r)})}}function f1(...e){let n=0,t,s=!0,a=lt,l,o,c,r,u;!Ie(e[0])&&typeof e[0]=="object"?{delay:o,trailing:c=!0,leading:r=!0,rejectOnCancel:u=!1}=e[0]:[o,c=!0,r=!0,u=!1]=e;const p=()=>{t&&(clearTimeout(t),t=void 0,a(),a=lt)};return h=>{const f=Re(o),k=Date.now()-n,_=()=>l=h();return p(),f<=0?(n=Date.now(),_()):(k>f&&(r||!s)?(n=Date.now(),_()):c&&(l=new Promise((w,y)=>{a=u?y:w,t=setTimeout(()=>{n=Date.now(),s=!0,w(_()),p()},Math.max(0,f-k))})),!r&&!t&&(t=setTimeout(()=>s=!0,f)),s=!1,l)}}function g1(e=rc){const n=K(!0);function t(){n.value=!1}function s(){n.value=!0}const a=(...l)=>{n.value&&e(...l)};return{isActive:rt(n),pause:t,resume:s,eventFilter:a}}function m1(e){let n;function t(){return n||(n=e()),n}return t.reset=async()=>{const s=n;n=void 0,s&&await s},t}function cc(e){return e||ms()}function k1(...e){if(e.length!==1)return Pt(...e);const n=e[0];return typeof n=="function"?rt(Sl(()=>({get:n,set:lt}))):K(n)}function v1(e,n=200,t={}){return ql(h1(n,t),e)}function y1(e,n=200,t=!1,s=!0,a=!1){return ql(f1(n,t,s,a),e)}function b1(e,n,t={}){const{eventFilter:s=rc,...a}=t;return pe(e,ql(s,n),a)}function w1(e,n,t={}){const{eventFilter:s,...a}=t,{eventFilter:l,pause:o,resume:c,isActive:r}=g1(s);return{stop:b1(e,n,{...a,eventFilter:l}),pause:o,resume:c,isActive:r}}function ha(e,n=!0,t){cc()?ye(e,t):n?e():Gn(e)}function _1(e,n){cc(n)&&Dt(e,n)}function x1(e,n,t={}){const{immediate:s=!0}=t,a=K(!1);let l=null;function o(){l&&(clearTimeout(l),l=null)}function c(){a.value=!1,o()}function r(...u){o(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,e(...u)},Re(n))}return s&&(a.value=!0,_s&&r()),ct(c),{isPending:rt(a),start:r,stop:c}}function sl(e=!1,n={}){const{truthyValue:t=!0,falsyValue:s=!1}=n,a=Ie(e),l=K(e);function o(c){if(arguments.length)return l.value=c,l.value;{const r=Re(t);return l.value=l.value===r?Re(s):r,l.value}}return a?o:[l,o]}function vn(e){var n;const t=Re(e);return(n=t==null?void 0:t.$el)!=null?n:t}const wn=_s?window:void 0,uc=_s?window.document:void 0,pc=_s?window.navigator:void 0;function Pe(...e){let n,t,s,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,s,a]=e,n=wn):[n,t,s,a]=e,!n)return lt;Array.isArray(t)||(t=[t]),Array.isArray(s)||(s=[s]);const l=[],o=()=>{l.forEach(p=>p()),l.length=0},c=(p,d,h,f)=>(p.addEventListener(d,h,f),()=>p.removeEventListener(d,h,f)),r=pe(()=>[vn(n),Re(a)],([p,d])=>{if(o(),!p)return;const h=p1(d)?{...d}:d;l.push(...t.flatMap(f=>s.map(k=>c(p,f,k,h))))},{immediate:!0,flush:"post"}),u=()=>{r(),o()};return ct(u),u}function E1(){const e=K(!1),n=ms();return n&&ye(()=>{e.value=!0},n),e}function Mt(e){const n=E1();return b(()=>(n.value,!!e()))}function dc(e,n={}){const{window:t=wn}=n,s=Mt(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const l=K(!1),o=u=>{l.value=u.matches},c=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},r=gr(()=>{s.value&&(c(),a=t.matchMedia(Re(e)),"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),l.value=a.matches)});return ct(()=>{r(),c(),a=void 0}),l}function fi(e,n={}){const{controls:t=!1,navigator:s=pc}=n,a=Mt(()=>s&&"permissions"in s);let l;const o=typeof e=="string"?{name:e}:e,c=K(),r=()=>{l&&(c.value=l.state)},u=m1(async()=>{if(a.value){if(!l)try{l=await s.permissions.query(o),Pe(l,"change",r),r()}catch{c.value="prompt"}return l}});return u(),t?{state:c,isSupported:a,query:u}:c}function L1(e={}){const{navigator:n=pc,read:t=!1,source:s,copiedDuring:a=1500,legacy:l=!1}=e,o=Mt(()=>n&&"clipboard"in n),c=fi("clipboard-read"),r=fi("clipboard-write"),u=b(()=>o.value||l),p=K(""),d=K(!1),h=x1(()=>d.value=!1,a);function f(){o.value&&y(c.value)?n.clipboard.readText().then(E=>{p.value=E}):p.value=w()}u.value&&t&&Pe(["copy","cut"],f);async function k(E=Re(s)){u.value&&E!=null&&(o.value&&y(r.value)?await n.clipboard.writeText(E):_(E),p.value=E,d.value=!0,h.start())}function _(E){const v=document.createElement("textarea");v.value=E??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function w(){var E,v,T;return(T=(v=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:v.toString())!=null?T:""}function y(E){return E==="granted"||E==="prompt"}return{isSupported:u,text:p,copied:d,copy:k}}const Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hs="__vueuse_ssr_handlers__",T1=C1();function C1(){return Hs in Ns||(Ns[Hs]=Ns[Hs]||{}),Ns[Hs]}function S1(e,n){return T1[e]||n}function A1(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const I1={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},gi="vueuse-storage";function fa(e,n,t,s={}){var a;const{flush:l="pre",deep:o=!0,listenToStorageChanges:c=!0,writeDefaults:r=!0,mergeDefaults:u=!1,shallow:p,window:d=wn,eventFilter:h,onError:f=D=>{console.error(D)},initOnMounted:k}=s,_=(p?je:K)(typeof n=="function"?n():n);if(!t)try{t=S1("getDefaultStorage",()=>{var D;return(D=wn)==null?void 0:D.localStorage})()}catch(D){f(D)}if(!t)return _;const w=Re(n),y=A1(w),E=(a=s.serializer)!=null?a:I1[y],{pause:v,resume:T}=w1(_,()=>L(_.value),{flush:l,deep:o,eventFilter:h});d&&c&&ha(()=>{Pe(d,"storage",R),Pe(d,gi,Y),k&&R()}),k||R();function O(D,X){d&&d.dispatchEvent(new CustomEvent(gi,{detail:{key:e,oldValue:D,newValue:X,storageArea:t}}))}function L(D){try{const X=t.getItem(e);if(D==null)O(X,null),t.removeItem(e);else{const $=E.write(D);X!==$&&(t.setItem(e,$),O(X,$))}}catch(X){f(X)}}function j(D){const X=D?D.newValue:t.getItem(e);if(X==null)return r&&w!=null&&t.setItem(e,E.write(w)),w;if(!D&&u){const $=E.read(X);return typeof u=="function"?u($,w):y==="object"&&!Array.isArray($)?{...w,...$}:$}else return typeof X!="string"?X:E.read(X)}function R(D){if(!(D&&D.storageArea!==t)){if(D&&D.key==null){_.value=w;return}if(!(D&&D.key!==e)){v();try{(D==null?void 0:D.newValue)!==E.write(_.value)&&(_.value=j(D))}catch(X){f(X)}finally{D?Gn(T):T()}}}}function Y(D){R(D.detail)}return _}function P1(e){return dc("(prefers-color-scheme: dark)",e)}function D1(e,n,t={}){const{window:s=wn,...a}=t;let l;const o=Mt(()=>s&&"MutationObserver"in s),c=()=>{l&&(l.disconnect(),l=void 0)},r=b(()=>{const h=Re(e),f=(Array.isArray(h)?h:[h]).map(vn).filter(c1);return new Set(f)}),u=pe(()=>r.value,h=>{c(),o.value&&s&&h.size&&(l=new MutationObserver(n),h.forEach(f=>l.observe(f,a)))},{immediate:!0,flush:"post"}),p=()=>l==null?void 0:l.takeRecords(),d=()=>{c(),u()};return ct(d),{isSupported:o,stop:d,takeRecords:p}}function O1(e,n,t={}){const{window:s=wn,...a}=t;let l;const o=Mt(()=>s&&"ResizeObserver"in s),c=()=>{l&&(l.disconnect(),l=void 0)},r=b(()=>Array.isArray(e)?e.map(d=>vn(d)):[vn(e)]),u=pe(r,d=>{if(c(),o.value&&s){l=new ResizeObserver(n);for(const h of d)h&&l.observe(h,a)}},{immediate:!0,flush:"post"}),p=()=>{c(),u()};return ct(p),{isSupported:o,stop:p}}function R1(e,n={width:0,height:0},t={}){const{window:s=wn,box:a="content-box"}=t,l=b(()=>{var d,h;return(h=(d=vn(e))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),o=K(n.width),c=K(n.height),{stop:r}=O1(e,([d])=>{const h=a==="border-box"?d.borderBoxSize:a==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(s&&l.value){const f=vn(e);if(f){const k=s.getComputedStyle(f);o.value=Number.parseFloat(k.width),c.value=Number.parseFloat(k.height)}}else if(h){const f=Array.isArray(h)?h:[h];o.value=f.reduce((k,{inlineSize:_})=>k+_,0),c.value=f.reduce((k,{blockSize:_})=>k+_,0)}else o.value=d.contentRect.width,c.value=d.contentRect.height},t);ha(()=>{const d=vn(e);d&&(o.value="offsetWidth"in d?d.offsetWidth:n.width,c.value="offsetHeight"in d?d.offsetHeight:n.height)});const u=pe(()=>vn(e),d=>{o.value=d?n.width:0,c.value=d?n.height:0});function p(){r(),u()}return{width:o,height:c,stop:p}}const mi=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Wl(e,n={}){const{document:t=uc,autoExit:s=!1}=n,a=b(()=>{var y;return(y=vn(e))!=null?y:t==null?void 0:t.querySelector("html")}),l=K(!1),o=b(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>t&&y in t||a.value&&y in a.value)),c=b(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>t&&y in t||a.value&&y in a.value)),r=b(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>t&&y in t||a.value&&y in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>t&&y in t),p=Mt(()=>a.value&&t&&o.value!==void 0&&c.value!==void 0&&r.value!==void 0),d=()=>u?(t==null?void 0:t[u])===a.value:!1,h=()=>{if(r.value){if(t&&t[r.value]!=null)return t[r.value];{const y=a.value;if((y==null?void 0:y[r.value])!=null)return!!y[r.value]}}return!1};async function f(){if(!(!p.value||!l.value)){if(c.value)if((t==null?void 0:t[c.value])!=null)await t[c.value]();else{const y=a.value;(y==null?void 0:y[c.value])!=null&&await y[c.value]()}l.value=!1}}async function k(){if(!p.value||l.value)return;h()&&await f();const y=a.value;o.value&&(y==null?void 0:y[o.value])!=null&&(await y[o.value](),l.value=!0)}async function _(){await(l.value?f():k())}const w=()=>{const y=h();(!y||y&&d())&&(l.value=y)};return Pe(t,mi,w,!1),Pe(()=>vn(a),mi,w,!1),s&&ct(f),{isSupported:p,isFullscreen:l,enter:k,exit:f,toggle:_}}function Ma(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function ja(e,n=lt,t={}){const{immediate:s=!0,manual:a=!1,type:l="text/javascript",async:o=!0,crossOrigin:c,referrerPolicy:r,noModule:u,defer:p,document:d=uc,attrs:h={}}=t,f=K(null);let k=null;const _=E=>new Promise((v,T)=>{const O=R=>(f.value=R,v(R),R);if(!d){v(!1);return}let L=!1,j=d.querySelector(`script[src="${Re(e)}"]`);j?j.hasAttribute("data-loaded")&&O(j):(j=d.createElement("script"),j.type=l,j.async=o,j.src=Re(e),p&&(j.defer=p),c&&(j.crossOrigin=c),u&&(j.noModule=u),r&&(j.referrerPolicy=r),Object.entries(h).forEach(([R,Y])=>j==null?void 0:j.setAttribute(R,Y)),L=!0),j.addEventListener("error",R=>T(R)),j.addEventListener("abort",R=>T(R)),j.addEventListener("load",()=>{j.setAttribute("data-loaded","true"),n(j),O(j)}),L&&(j=d.head.appendChild(j)),E||O(j)}),w=(E=!0)=>(k||(k=_(E)),k),y=()=>{if(!d)return;k=null,f.value&&(f.value=null);const E=d.querySelector(`script[src="${Re(e)}"]`);E&&d.head.removeChild(E)};return s&&!a&&ha(w),a||_1(y),{scriptTag:f,load:w,unload:y}}function hc(e){const n=window.getComputedStyle(e);if(n.overflowX==="scroll"||n.overflowY==="scroll"||n.overflowX==="auto"&&e.clientWidth<e.scrollWidth||n.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const t=e.parentNode;return!t||t.tagName==="BODY"?!1:hc(t)}}function M1(e){const n=e||window.event,t=n.target;return hc(t)?!1:n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)}const Vs=new WeakMap;function fc(e,n=!1){const t=K(n);let s=null;pe(k1(e),o=>{const c=Ma(Re(o));if(c){const r=c;Vs.get(r)||Vs.set(r,r.style.overflow),t.value&&(r.style.overflow="hidden")}},{immediate:!0});const a=()=>{const o=Ma(Re(e));!o||t.value||(hi&&(s=Pe(o,"touchmove",c=>{M1(c)},{passive:!1})),o.style.overflow="hidden",t.value=!0)},l=()=>{var o;const c=Ma(Re(e));!c||!t.value||(hi&&(s==null||s()),c.style.overflow=(o=Vs.get(c))!=null?o:"",Vs.delete(c),t.value=!1)};return ct(l),b({get(){return t.value},set(o){o?a():l()}})}function gc(e,n,t={}){const{window:s=wn}=t;return fa(e,n,s==null?void 0:s.sessionStorage,t)}function j1(e={}){const{window:n=wn,behavior:t="auto"}=e;if(!n)return{x:K(0),y:K(0)};const s=K(n.scrollX),a=K(n.scrollY),l=b({get(){return s.value},set(c){scrollTo({left:c,behavior:t})}}),o=b({get(){return a.value},set(c){scrollTo({top:c,behavior:t})}});return Pe(n,"scroll",()=>{s.value=n.scrollX,a.value=n.scrollY},{capture:!1,passive:!0}),{x:l,y:o}}function F1(e={}){const{window:n=wn,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:l=!0}=e,o=K(t),c=K(s),r=()=>{n&&(l?(o.value=n.innerWidth,c.value=n.innerHeight):(o.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};if(r(),ha(r),Pe("resize",r,{passive:!0}),a){const u=dc("(orientation: portrait)");pe(u,()=>r())}return{width:o,height:c}}var $1=H({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const n=b(()=>{const s=["font-icon icon"],a=`fas fa-${e.icon}`;return s.push("fa-fw fa-sm"),s.push(e.icon.includes(" ")?e.icon:a),s}),t=b(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),dn(s).length?s:null});return()=>e.icon?i("span",{key:e.icon,class:n.value,style:t.value}):null}});const mc=({type:e="info",text:n="",vertical:t,color:s},{slots:a})=>{var l;return i("span",{class:["vp-badge",e,{diy:s}],style:{verticalAlign:t??!1,backgroundColor:s??!1}},((l=a.default)==null?void 0:l.call(a))||n)};mc.displayName="Badge";const ie=({name:e="",color:n="currentColor"},{slots:t})=>{var s;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:n,"aria-label":`${e} icon`},(s=t.default)==null?void 0:s.call(t))};ie.displayName="IconBase";const kc=({size:e=48,stroke:n=4,wrapper:t=!0,height:s=2*e})=>{const a=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${s}px`},a):a};kc.displayName="LoadingIcon";const vc=(e,{slots:n})=>{var t;return(t=n.default)==null?void 0:t.call(n)},N1=e=>Kn(e)?e:`https://github.com/${e}`,Ul=(e="")=>!Kn(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,yc=()=>i(ie,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));yc.displayName="GitHubIcon";const bc=()=>i(ie,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));bc.displayName="GiteeIcon";const wc=()=>i(ie,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));wc.displayName="BitbucketIcon";const _c=()=>i(ie,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));_c.displayName="SourceIcon";const H1=({link:e,type:n=Ul(e??"")})=>{if(!n)return null;const t=n.toLowerCase();return i(t==="bitbucket"?wc:t==="github"?yc:t==="gitlab"?"GitLab":t==="gitee"?bc:_c)},ga=(e,n)=>{let t=1;for(let s=0;s<e.length;s++)t+=e.charCodeAt(s),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%n};let V1=class{constructor(){this.messageElements={};const n="message-container",t=document.getElementById(n);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=n,document.body.appendChild(this.containerElement))}pop(n,t=2e3){const s=document.createElement("div"),a=Date.now();return s.className="message move-in",s.innerHTML=n,this.containerElement.appendChild(s),this.messageElements[a]=s,t>0&&setTimeout(()=>{this.close(a)},t),a}close(n){if(n){const t=this.messageElements[n];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[n]})}else dn(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const xc=/#.*$/u,B1=e=>{const n=xc.exec(e);return n?n[0]:""},ki=e=>decodeURI(e).replace(xc,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),Ec=(e,n)=>{if(!l1(n))return!1;const t=ki(e.path),s=ki(n),a=B1(n);return a?a===e.hash&&(!s||t===s):t===s};var z1=e=>Object.prototype.toString.call(e)==="[object Object]",is=e=>typeof e=="string";const Lc=Array.isArray,vi=e=>z1(e)&&is(e.name),rs=(e,n=!1)=>e?Lc(e)?e.map(t=>is(t)?{name:t}:vi(t)?t:null).filter(t=>t!==null):is(e)?[{name:e}]:vi(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n?"":"| false"} | undefined\`, but got`,e),[]):[],Tc=(e,n)=>{if(e){if(Lc(e)&&e.every(is))return e;if(is(e))return[e];console.error(`Expect ${n||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},Cc=e=>Tc(e,"category"),Sc=e=>Tc(e,"tag"),q1="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",yi=e=>ke(e)?e:`${e}px`,W1=(e,n=0)=>{const t=je(),s=b(()=>yi(on(e.width)||"100%")),a=K("auto"),l=r=>{if(ke(r)){const[u,p]=r.split(":"),d=Number(u)/Number(p);if(!Number.isNaN(d))return d}return typeof r=="number"?r:16/9},o=r=>{const u=on(e.height),p=l(on(e.ratio));return u?yi(u):`${Number(r)/p+on(n)}px`},c=()=>{t.value&&(a.value=o(t.value.clientWidth))};return ye(()=>{c(),Ie(n)&&pe(n,c),Pe("orientationchange",c),Pe("resize",c)}),{el:t,width:s,height:a,resize:c}},bi="https://player.bilibili.com/player.html";var U1=H({name:"BiliBili",props:{bvid:{type:String,default:""},aid:{type:String,default:""},cid:{type:String,default:""},title:{type:String,default:"A BiliBili video"},page:{type:[String,Number],default:1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},time:{type:[String,Number],default:0},autoplay:Boolean},setup(e){const{el:n,width:t,height:s,resize:a}=W1(e),l=K(!1),o=b(()=>{const{aid:c,bvid:r,cid:u,autoplay:p,time:d,page:h}=e;return c&&u?`${bi}?aid=${c}&cid=${u}&t=${d}&autoplay=${p?1:0}&p=${h}`:r?`${bi}?bvid=${r}&t=${d}&autoplay=${p?1:0}`:null});return()=>o.value?[i("div",{class:"bilibili-desc"},i("a",{class:"sr-only",href:o.value},e.title)),i("iframe",{ref:n,src:o.value,title:e.title,class:"bilibili-iframe",allow:q1,style:{width:t.value,height:l.value?s.value:0},onLoad:()=>{l.value=!0,a()}}),l.value?null:i(kc)]:[]}});const G1=Ge({enhance:({app:e})=>{bn("FontIcon")||e.component("FontIcon",$1),bn("Badge")||e.component("Badge",mc),bn("BiliBili")||e.component("BiliBili",U1)},setup:()=>{ja("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ja("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),ja("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[]}),wi=async(e,n)=>{const{path:t,query:s}=e.currentRoute.value,{scrollBehavior:a}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:t,query:s,hash:n}),e.options.scrollBehavior=a},K1=({headerLinkSelector:e,headerAnchorSelector:n,delay:t,offset:s=5})=>{const a=Jn();Pe("scroll",v1(()=>{var k,_;const o=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(o-0)<s){wi(a,"");return}const r=window.innerHeight+o,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(u-r)<s,d=Array.from(document.querySelectorAll(e)),f=Array.from(document.querySelectorAll(n)).filter(w=>d.some(y=>y.hash===w.hash));for(let w=0;w<f.length;w++){const y=f[w],E=f[w+1],v=o>=(((k=y.parentElement)==null?void 0:k.offsetTop)??0)-s,T=!E||o<(((_=E.parentElement)==null?void 0:_.offsetTop)??0)-s;if(!(v&&T))continue;const L=decodeURIComponent(a.currentRoute.value.hash),j=decodeURIComponent(y.hash);if(L===j)return;if(p){for(let R=w+1;R<f.length;R++)if(L===decodeURIComponent(f[R].hash))return}wi(a,j);return}},t))},J1=".vp-sidebar-link, .vp-toc-link",Y1=".header-anchor",X1=200,Q1=5,Z1=Ge({setup(){K1({headerLinkSelector:J1,headerAnchorSelector:Y1,delay:X1,offset:Q1})}});let Ac=e=>ke(e.title)?{title:e.title}:null;const Ic=Symbol(""),e0=e=>{Ac=e},n0=()=>ve(Ic),t0=e=>{e.provide(Ic,Ac)};var s0={"/en/":{title:"Catalog",empty:"No catalog"},"/":{title:"目录",empty:"暂无目录"}};const a0=H({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const n=n0(),t=bs(s0),s=me(),a=sc(),l=ac(),c=je(Rt(a.value).map(([u,{meta:p}])=>{const d=n(p);if(!d)return null;const h=u.split("/").length;return{level:o1(u,"/")?h-2:h-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...d}}).filter(u=>ys(u)&&ke(u.title))),r=b(()=>{const u=e.base?Nh(qr(e.base)):s.value.path.replace(/\/[^/]+$/,"/"),p=u.split("/").length-2,d=[];return c.value.filter(({level:h,path:f})=>{if(!At(f,u)||f===u)return!1;if(u==="/"){const k=dn(l.value.locales).filter(_=>_!=="/");if(f==="/404.html"||k.some(_=>At(f,_)))return!1}return h-p<=e.level}).sort(({title:h,level:f,order:k},{title:_,level:w,order:y})=>{const E=f-w;return E||(Ra(k)?Ra(y)?k>0?y>0?k-y:-1:y<0?k-y:1:k:Ra(y)?y:h.localeCompare(_))}).forEach(h=>{var _;const{base:f,level:k}=h;switch(k-p){case 1:{d.push(h);break}case 2:{const w=d.find(y=>y.path===f);w&&(w.children??(w.children=[])).push(h);break}default:{const w=d.find(y=>y.path===f.replace(/\/[^/]+\/$/,"/"));if(w){const y=(_=w.children)==null?void 0:_.find(E=>E.path===f);y&&(y.children??(y.children=[])).push(h)}}}}),d});return()=>{const u=r.value.some(p=>p.children);return i("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:i("h2",{class:"vp-catalog-main-title"},t.value.title),r.value.length?i(e.index?"ol":"ul",{class:["vp-catalogs",{deep:u}]},r.value.map(({children:p=[],title:d,path:h,content:f})=>{const k=i(Ce,{class:"vp-catalog-title",to:h},()=>f?i(f):d);return i("li",{class:"vp-catalog"},u?[i("h3",{id:d,class:["vp-catalog-child-title",{"has-children":p.length}]},[i("a",{href:`#${d}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),k]),p.length?i(e.index?"ol":"ul",{class:"vp-child-catalogs"},p.map(({children:_=[],content:w,path:y,title:E})=>i("li",{class:"vp-child-catalog"},[i("div",{class:["vp-catalog-sub-title",{"has-children":_.length}]},[i("a",{href:`#${E}`,class:"vp-catalog-header-anchor"},"#"),i(Ce,{class:"vp-catalog-title",to:y},()=>w?i(w):E)]),_.length?i(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},_.map(({content:v,path:T,title:O})=>e.index?i("li",{class:"vp-sub-catalog"},i(Ce,{to:T},()=>v?i(v):O)):i(Ce,{class:"vp-sub-catalog-link",to:T},()=>v?i(v):O))):null]))):null]:i("div",{class:"vp-catalog-child-title"},k))})):i("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),l0=Ge({enhance:({app:e})=>{t0(e),bn("Catalog",e)||e.component("Catalog",a0)}});var o0={"/en/":{backToTop:"Back to top"},"/":{backToTop:"返回顶部"}};const i0=H({name:"BackToTop",setup(){const e=fe(),n=bs(o0),t=je(),{height:s}=R1(t),{height:a}=F1(),{y:l}=j1(),o=b(()=>e.value.backToTop!==!1&&l.value>100),c=b(()=>l.value/(s.value-a.value)*100);return ye(()=>{t.value=document.body}),()=>i(Un,{name:"back-to-top"},()=>o.value?i("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[i("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":c.value},i("svg",i("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*c.value*.48} ${Math.PI*(100-c.value)*.48}`}))),i("div",{class:"back-to-top-icon"})]):null)}}),r0=Ge({rootComponents:[i0]}),c0=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Pc=H({name:"ExternalLinkIcon",props:{locales:{type:Object,default:()=>({})}},setup(e){const n=hn(),t=b(()=>e.locales[n.value]??{openInNewWindow:"open in new window"});return()=>i("span",[c0,i("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var u0={};const p0=u0,d0=Ge({enhance({app:e}){e.component("ExternalLinkIcon",i(Pc,{locales:p0}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const re={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const n=re.isStarted();e=Fa(e,re.settings.minimum,1),re.status=e===1?null:e;const t=re.render(!n),s=t.querySelector(re.settings.barSelector),a=re.settings.speed,l=re.settings.easing;return t.offsetWidth,h0(o=>{Bs(s,{transform:"translate3d("+_i(e)+"%,0,0)",transition:"all "+a+"ms "+l}),e===1?(Bs(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){Bs(t,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){re.remove(),o()},a)},a)):setTimeout(()=>o(),a)}),re},isStarted:()=>typeof re.status=="number",start:()=>{re.status||re.set(0);const e=()=>{setTimeout(()=>{re.status&&(re.trickle(),e())},re.settings.trickleSpeed)};return re.settings.trickle&&e(),re},done:e=>!e&&!re.status?re:re.inc(.3+.5*Math.random()).set(1),inc:e=>{let n=re.status;return n?(typeof e!="number"&&(e=(1-n)*Fa(Math.random()*n,.1,.95)),n=Fa(n+e,0,.994),re.set(n)):re.start()},trickle:()=>re.inc(Math.random()*re.settings.trickleRate),render:e=>{if(re.isRendered())return document.getElementById("nprogress");xi(document.documentElement,"nprogress-busy");const n=document.createElement("div");n.id="nprogress",n.innerHTML=re.settings.template;const t=n.querySelector(re.settings.barSelector),s=e?"-100":_i(re.status||0),a=document.querySelector(re.settings.parent);return Bs(t,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),a!==document.body&&xi(a,"nprogress-custom-parent"),a==null||a.appendChild(n),n},remove:()=>{Ei(document.documentElement,"nprogress-busy"),Ei(document.querySelector(re.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&f0(e)},isRendered:()=>!!document.getElementById("nprogress")},Fa=(e,n,t)=>e<n?n:e>t?t:e,_i=e=>(-1+e)*100,h0=function(){const e=[];function n(){const t=e.shift();t&&t(n)}return function(t){e.push(t),e.length===1&&n()}}(),Bs=function(){const e=["Webkit","O","Moz","ms"],n={};function t(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(c,r){return r.toUpperCase()})}function s(o){const c=document.body.style;if(o in c)return o;let r=e.length;const u=o.charAt(0).toUpperCase()+o.slice(1);let p;for(;r--;)if(p=e[r]+u,p in c)return p;return o}function a(o){return o=t(o),n[o]??(n[o]=s(o))}function l(o,c,r){c=a(c),o.style[c]=r}return function(o,c){for(const r in c){const u=c[r];u!==void 0&&Object.prototype.hasOwnProperty.call(c,r)&&l(o,r,u)}}}(),Dc=(e,n)=>(typeof e=="string"?e:Gl(e)).indexOf(" "+n+" ")>=0,xi=(e,n)=>{const t=Gl(e),s=t+n;Dc(t,n)||(e.className=s.substring(1))},Ei=(e,n)=>{const t=Gl(e);if(!Dc(e,n))return;const s=t.replace(" "+n+" "," ");e.className=s.substring(1,s.length-1)},Gl=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),f0=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},g0=()=>{ye(()=>{const e=Jn(),n=new Set;n.add(e.currentRoute.value.path),e.beforeEach(t=>{n.has(t.path)||re.start()}),e.afterEach(t=>{n.add(t.path),re.done()})})},m0=Ge({setup(){g0()}}),k0=JSON.parse(`{"encrypt":{"config":{}},"author":{"name":"LiCheng","url":"https://gitee.com/licheng1013"},"logo":"/logo.png","repo":"https://gitee.com/licheng1013","themeColor":true,"locales":{"/en/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"navbar":["/en/",{"text":"Plugins","icon":"alias","link":"/en/plugins"},{"text":"English","icon":"language","link":"/en/english"},{"icon":"link","text":"Links","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java Guide","link":"https://javaguide.cn/"}]},{"text":"Github","icon":"github","link":"https://github.com/licheng1013"}],"sidebar":{"/en/english/":"structure","/en/plugins/":"structure"}},"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"介绍","icon":"creative","link":"/blog/"},{"text":"插件","icon":"alias","link":"/plugins/"},{"text":"个人","icon":"study","link":"/study/"},{"text":"工具","icon":"tool","link":"/util/"},{"icon":"link","text":"友链","children":[{"text":"Vuepress","link":"https://v2.vuepress.vuejs.org/zh/"},{"text":"SpringBoot","link":"https://spring.io/"},{"text":"Java指南","link":"https://javaguide.cn/"},{"text":"主题文档","link":"https://theme-hope.vuejs.press/zh/"},{"text":"Idea插件","link":"/util/idea.md"}]},{"text":"Gitee镜像文档","icon":"gitee","link":"https://licheng1013.gitee.io/"}],"sidebar":{"/blog/":"structure","/plugins/":"structure","/study/":"structure","/util/":"structure"}}},"footer":"枫叶 <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4728700105340810'crossorigin='anonymous'><\/script>","displayFooter":true,"pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"blog":{"timeline":"新文档还在编写中！","description":"一个开发者","intro":"/","medias":{"Gitee":"https://gitee.com/licheng1013","Github":"https://github.com/licheng1013"}}}`),v0=K(k0),Oc=()=>v0,Rc=Symbol(""),y0=()=>{const e=ve(Rc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},b0=(e,n)=>{const{locales:t,...s}=e;return{...s,...t==null?void 0:t[n]}},w0=Ge({enhance({app:e}){const n=Oc(),t=e._context.provides[Hl],s=b(()=>b0(n.value,t.routeLocale.value));e.provide(Rc,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return s.value}}})}});var _0={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.34/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-rc.34/templates/giscus/dark.css",repo:"licheng1013/blog-giscus",repoId:"R_kgDOIVLLNA",categoryId:"DIC_kwDOIVLLNM4CSQfj",category:"Announcements",mapping:"title"};const x0=_0;let E0=x0;const Mc=Symbol(""),jc=()=>ve(Mc),L0=jc,T0=e=>{e.provide(Mc,E0)},Fc=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[i("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},i("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},i("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),i("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},i("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Fc.displayName="LoadingIcon";const Li=["ar","ca","da","de","en","eo","es","fa","fr","he","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","uz","vi","zh-CN","zh-TW"],C0=H({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(e){const n=L0(),t=Vl(),s=!!(n.repo&&n.repoId&&n.category&&n.categoryId),{repo:a,repoId:l,category:o,categoryId:c}=n,r=K(!1),u=b(()=>{if(Li.includes(t.value))return t.value;const d=t.value.split("-")[0];return Li.includes(d)?d:"en"}),p=b(()=>({repo:a,repoId:l,category:o,categoryId:c,lang:u.value,theme:e.darkmode?n.darkTheme||"dark":n.lightTheme||"light",mapping:n.mapping||"pathname",term:e.identifier,inputPosition:n.inputPosition||"top",reactionsEnabled:n.reactionsEnabled===!1?"0":"1",strict:n.strict===!1?"0":"1",loading:n.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return ye(async()=>{await C(()=>import("./giscus-7BMGhbDA.js"),[]),r.value=!0}),()=>s?i("div",{id:"comment",class:["giscus-wrapper",{"input-top":n.inputPosition!=="bottom"}]},r.value?i("giscus-widget",p.value):i(Fc)):null}}),S0=H({name:"CommentService",props:{darkmode:Boolean},setup(e){const n=jc(),t=me(),s=fe(),a=n.comment!==!1,l=b(()=>s.value.comment||a&&s.value.comment!==!1);return()=>i(C0,{id:"vp-comment",identifier:s.value.commentID||t.value.path,darkmode:e.darkmode,style:{display:l.value?"block":"none"}})}}),A0=Ge({enhance:({app:e})=>{T0(e),e.component("CommentService",S0)}}),I0=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,P0=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&I0.test(navigator.userAgent),D0=({delay:e=500,duration:n=2e3,locales:t,selector:s,showInMobile:a})=>{const{copy:l,copied:o}=L1({legacy:!0,copiedDuring:n}),c=bs(t),r=me(),u=h=>{if(!h.hasAttribute("copy-code-registered")){const f=document.createElement("button");f.type="button",f.classList.add("vp-copy-code-button"),f.innerHTML='<div class="vp-copy-icon" />',f.setAttribute("aria-label",c.value.copy),f.setAttribute("data-copied",c.value.copied),h.parentElement&&h.parentElement.insertBefore(f,h),h.setAttribute("copy-code-registered","")}},p=()=>{Gn().then(()=>ic(e)).then(()=>{s.forEach(h=>{document.querySelectorAll(h).forEach(u)})})},d=(h,f,k)=>{let{innerText:_=""}=f;/language-(shellscript|shell|bash|sh|zsh)/.test(h.classList.toString())&&(_=_.replace(/^ *(\$|>) /gm,"")),l(_).then(()=>{k.classList.add("copied"),pe(o,()=>{k.classList.remove("copied"),k.blur()},{once:!0})})};ye(()=>{const h=!P0()||a;h&&p(),Pe("click",f=>{const k=f.target;if(k.matches('div[class*="language-"] > button.copy')){const _=k.parentElement,w=k.nextElementSibling;w&&d(_,w,k)}else if(k.matches('div[class*="language-"] div.vp-copy-icon')){const _=k.parentElement,w=_.parentElement,y=_.nextElementSibling;y&&d(w,y,_)}}),pe(()=>r.value.path,()=>{h&&p()})})};var O0={"/en/":{copy:"Copy code",copied:"Copied"},"/":{copy:"复制代码",copied:"已复制"}},R0=['.theme-hope-content div[class*="language-"] pre'];const M0=500,j0=2e3,F0=O0,$0=R0,N0=!1,H0=Ge({setup:()=>{D0({selector:$0,locales:F0,duration:j0,delay:M0,showInMobile:N0})}}),V0=()=>{Pe("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})},B0=Ge({enhance:({app:e})=>{},setup:()=>{V0()}});let z0={};const $c=Symbol(""),q0=()=>ve($c),W0=e=>{e.provide($c,z0)},U0='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',G0=e=>ke(e)?Array.from(document.querySelectorAll(e)):e.map(n=>Array.from(document.querySelectorAll(n))).flat(),Nc=e=>new Promise((n,t)=>{e.complete?n({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>n(Nc(e)),e.onerror=s=>t(s))}),K0=e=>{const{isSupported:n,toggle:t}=Wl();e.on("uiRegister",()=>{n.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,a)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),a.on("change",()=>{s.setAttribute("href",a.currSlide.data.src)})}}),e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,a)=>{const l=[];let o=-1;for(let c=0;c<a.getNumItems();c++){const r=document.createElement("div");r.className="photo-swipe-bullet",r.onclick=u=>{a.goTo(l.indexOf(u.target))},l.push(r),s.appendChild(r)}a.on("change",()=>{o>=0&&l[o].classList.remove("active"),l[a.currIndex].classList.add("active"),o=a.currIndex})}})})},J0=(e,n,t=!0)=>C(()=>import("./photoswipe.esm-SzV8tJDW.js"),[]).then(({default:s})=>{let a=null;const l=e.map(o=>({html:U0,element:o,msrc:o.src}));return e.forEach((o,c)=>{const r=()=>{a==null||a.destroy(),a=new s({preloaderDelay:0,showHideAnimationType:"zoom",...n,dataSource:l,index:c,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),K0(a),a.addFilter("thumbEl",()=>o),a.addFilter("placeholderSrc",()=>o.src),a.init()};o.getAttribute("photo-swipe")||(o.style.cursor="zoom-in",o.addEventListener("click",()=>{r()}),o.addEventListener("keypress",({key:u})=>{u==="Enter"&&r()}),o.setAttribute("photo-swipe","")),Nc(o).then(u=>{l.splice(c,1,u),a==null||a.refreshSlideContent(c)})}),t?Pe("wheel",()=>{a==null||a.close()}):()=>{}}),Y0=({selector:e,locales:n,delay:t=500,scrollToClose:s=!0})=>{const a=q0(),l=bs(n),o=me(),c=fe();let r=null;const u=()=>{const{photoSwipe:p}=c.value;p!==!1&&Gn().then(()=>ic(t)).then(async()=>{const d=ke(p)?p:e;r=await J0(G0(d),{...a,...l.value},s)})};ye(()=>{u(),pe(()=>o.value.path,()=>{r==null||r(),u()})}),Dt(()=>{r==null||r()})};var X0={"/en/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"},"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const Q0=".theme-hope-content :not(a) > img:not([no-view])",Z0=X0,ef=800,nf=!0,tf=Ge({enhance:({app:e})=>{W0(e)},setup:()=>{Y0({selector:Q0,delay:ef,locales:Z0,scrollToClose:nf})}}),Hc=()=>{const e=me();return b(()=>e.value.readingTime??null)},Vc=(e,n)=>{const{minutes:t,words:s}=e,{less1Minute:a,word:l,time:o}=n;return{time:t<1?a:o.replace("$time",Math.round(t).toString()),words:l.replace("$word",s.toString())}};var Ti={"/en/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"},"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Ci={words:"",time:""},al=typeof Ti>"u"?null:Ti,Bc=()=>al?bs(al):b(()=>null),sf=()=>{if(typeof al>"u")return b(()=>Ci);const e=Hc(),n=Bc();return b(()=>e.value&&n.value?Vc(e.value,n.value):Ci)},En=()=>Oc(),le=()=>y0(),ut=()=>{const e=En();return b(()=>!!e.value.pure)},Si=()=>null,af="719px",lf="1440px",of="false",zc={mobileBreakPoint:af,pcBreakPoint:lf,enableThemeColor:of},Kl={"/en/english/":["study","day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19"],"/en/plugins/":["gorm","jorm","vue-admin"],"/blog/":["body","desc","video","random"],"/plugins/":["gorm","io-game","java-orm","request-tool","rocket-cat","rs-orm","vue-admin"],"/study/":[{text:"Game",prefix:"game/",collapsible:!0,icon:"app",children:["cocos",{text:"Design",prefix:"design/",collapsible:!0,children:["chess"]},"font","game","godot","unity","unity-camera"]},{text:"Go",prefix:"go/",collapsible:!0,icon:"hot",children:["gin","go","gorm","socket","ssh","wails","qiniu","try","util","design-mode","difficult"]},{text:"Java",prefix:"java/",collapsible:!0,icon:"java",children:[{text:"Design Mode",prefix:"design-mode/",collapsible:!0,children:["proxy","design-mode"]},"hutool","io-game","java","maven","mqtt","mybatis","protostuff","redisson","rocket-mq","spring-boot","spring-boot-demo","spring-cloud","spring-cloud-alibaba","transaction","data-struct","kd"]},{text:"Linux",prefix:"linux/",collapsible:!0,icon:"linux",children:["docker","git","linux","mysql","nginx","shell","server"]},{text:"Try",prefix:"try/",collapsible:!0,icon:"support",children:["antlr","flutter","python","rust"]},{text:"Web",prefix:"web/",collapsible:!0,icon:"leaf",children:["axios","css","electron","node","vite","vue"]}],"/util/":["dev","common"]},qc=e=>{const{icon:n="",color:t,size:s}=e,a=t||s?{}:null;return t&&(a.color=t),s&&(a.height=Number.isNaN(Number(s))?s:`${s}px`),Kn(n)?i("img",{class:"icon",src:n,alt:"","no-view":"",style:a}):ws(n)?i("img",{class:"icon",src:xe(n),alt:"","aria-hidden":"","no-view":"",style:a}):i(cn("FontIcon"),e)};qc.displayName="HopeIcon";var He=qc;const rf="http://.",pt=()=>{const e=Jn(),n=_n();return t=>{if(t)if(ws(t))n.path!==t&&e.push(t);else if(Wr(t))window&&window.open(t);else{const s=n.path.slice(0,n.path.lastIndexOf("/"));e.push(new URL(`${s}/${encodeURI(t)}`,rf).pathname)}}},Wc=()=>{const e=le(),n=fe();return b(()=>{const{author:t}=n.value;return t?rs(t):t===!1?[]:rs(e.value.author,!1)})},cf=()=>{const e=fe(),n=ve(Symbol.for("categoryMap"));return b(()=>Cc(e.value.category).map(t=>{var s;return{name:t,path:((s=n==null?void 0:n.value.map[t])==null?void 0:s.path)||""}}))},uf=()=>{const e=fe(),n=ve(Symbol.for("tagMap"));return b(()=>Sc(e.value.tag).map(t=>{var s;return{name:t,path:((s=n==null?void 0:n.value.map[t])==null?void 0:s.path)||""}}))},pf=()=>{const e=fe(),n=me();return b(()=>{const t=Bl(e.value.date);if(t)return t;const{createdTime:s}=n.value.git||{};return s?new Date(s):null})},df=()=>{const e=le(),n=me(),t=fe(),s=Wc(),a=cf(),l=uf(),o=pf(),c=Hc(),r=sf(),u=b(()=>({author:s.value,category:a.value,date:o.value,localizedDate:n.value.localizedDate,tag:l.value,isOriginal:t.value.isOriginal||!1,readingTime:c.value,readingTimeLocale:r.value,pageview:"pageview"in t.value?t.value.pageview:!0})),p=b(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:u,items:p}},{mobileBreakPoint:hf,pcBreakPoint:ff}=zc,Ai=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,xs=()=>{const e=K(!1),n=K(!1),t=()=>{e.value=window.innerWidth<=(Ai(hf)??719),n.value=window.innerWidth>=(Ai(ff)??1440)};return ye(()=>{t(),Pe("resize",t,!1),Pe("orientationchange",t,!1)}),{isMobile:e,isPC:n}},Uc=Symbol(""),Es=()=>{const e=ve(Uc);if(!e)throw new Error("useDarkmode() is called without provider.");return e},gf=e=>{const n=En(),t=P1(),s=b(()=>n.value.darkmode||"switch"),a=fa("vuepress-theme-hope-scheme","auto"),l=b(()=>{const c=s.value;return c==="disable"?!1:c==="enable"?!0:c==="auto"?t.value:c==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&t.value}),o=b(()=>{const c=s.value;return c==="switch"||c==="toggle"});e.provide(Uc,{canToggle:o,config:s,isDarkmode:l,status:a}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},mf=()=>{const{config:e,isDarkmode:n,status:t}=Es();gr(()=>{e.value==="disable"?t.value="light":e.value==="enable"?t.value="dark":e.value==="toggle"&&t.value==="auto"&&(t.value="light")}),ye(()=>{pe(n,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var qe=(e=>(e.title="t",e.shortTitle="s",e.icon="i",e.index="I",e.order="O",e.breadcrumbExclude="b",e))(qe||{}),Ne=(e=>(e.type="y",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e))(Ne||{}),Gc=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(Gc||{});const nt=(e="",n="")=>ws(n)?n:`${qr(e)}${n}`,xt=(e,n=!1,t)=>{const{meta:s,path:a,notFound:l}=r1(e,t);return l?{text:a,link:a}:{text:!n&&s[qe.shortTitle]?s[qe.shortTitle]:s[qe.title]||a,link:a,...s[qe.icon]?{icon:s[qe.icon]}:{}}},ll=({config:e,prefix:n=""})=>{const t=(s,a=n)=>{const l=ke(s)?xt(nt(a,s)):s.link?{...s,...ss(s.link)?{}:{link:xt(nt(a,s.link)).link}}:s;if("children"in l){const o=nt(a,l.prefix),c=l.children==="structure"?Kl[o]:l.children;return{type:"group",...l,prefix:o,children:c.map(r=>t(r,o))}}return{type:"page",...l}};return e.map(s=>t(s))},kf=({config:e,page:n,headerDepth:t})=>{const s=dn(e).sort((a,l)=>l.length-a.length);for(const a of s)if(At(decodeURI(n.path),a)){const l=e[a];return l?ll({config:l==="structure"?Kl[a]:l,page:n,headerDepth:t,prefix:a}):[]}return console.warn(`${n.path} is missing sidebar config.`),[]},vf=({config:e,routeLocale:n,page:t,headerDepth:s})=>e==="structure"?ll({config:Kl[n],page:t,headerDepth:s,prefix:n}):tl(e)?ll({config:e,page:t,headerDepth:s}):ys(e)?kf({config:e,page:t,headerDepth:s}):[],Kc=Symbol(""),yf=()=>{const e=fe(),n=le(),t=me(),s=hn(),a=b(()=>e.value.home?!1:e.value.sidebar??n.value.sidebar??"structure"),l=b(()=>e.value.headerDepth??n.value.headerDepth??2),o=zl(()=>[a.value,l.value,t.value.path,null],()=>vf({config:a.value,routeLocale:s.value,page:t.value,headerDepth:l.value}));un(Kc,o)},Jl=()=>{const e=ve(Kc);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var bf=H({name:"PageFooter",setup(){const e=En(),n=le(),t=fe(),s=Wc(),a=b(()=>{const{copyright:u,footer:p}=t.value;return p!==!1&&!!(u||p||n.value.displayFooter)}),l=b(()=>{const{footer:u}=t.value;return u===!1?!1:ke(u)?u:n.value.footer||""}),o=b(()=>s.value.map(({name:u})=>u).join(", ")),c=u=>`Copyright © ${new Date().getFullYear()} ${o.value} ${u?`${u} Licensed`:""}`,r=b(()=>{const{copyright:u,license:p=""}=t.value,{license:d}=e.value,{copyright:h}=n.value;return u??(p?c(p):ke(h)?h:o.value||d?c(d):!1)});return()=>a.value?i("footer",{class:"vp-footer-wrapper"},[l.value?i("div",{class:"vp-footer",innerHTML:l.value}):null,r.value?i("div",{class:"vp-copyright",innerHTML:r.value}):null]):null}}),We=H({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:n,emit:t,slots:s}){const a=_n(),l=ac(),o=Pt(e,"config"),c=b(()=>Kn(o.value.link)),r=b(()=>!c.value&&Wr(o.value.link)),u=b(()=>o.value.target||(c.value?"_blank":void 0)),p=b(()=>u.value==="_blank"),d=b(()=>!c.value&&!r.value&&!p.value),h=b(()=>o.value.rel||(p.value?"noopener noreferrer":null)),f=b(()=>o.value.ariaLabel||o.value.text),k=b(()=>{if(e.exact)return!1;const w=dn(l.value.locales);return w.length?w.every(y=>y!==o.value.link):o.value.link!=="/"}),_=b(()=>d.value?o.value.activeMatch?new RegExp(o.value.activeMatch,"u").test(a.path):k.value?At(a.path,o.value.link):a.path===o.value.link:!1);return()=>{const{before:w,after:y,default:E}=s,{text:v,icon:T,link:O}=o.value;return d.value?i(Ce,{to:O,"aria-label":f.value,...n,class:["nav-link",{active:_.value},n.class],onFocusout:()=>t("focusout")},()=>E?E():[w?w():i(He,{icon:T}),v,y==null?void 0:y()]):i("a",{href:O,rel:h.value,target:u.value,"aria-label":f.value,...n,class:["nav-link",n.class],onFocusout:()=>t("focusout")},E?E():[w?w():i(He,{icon:T}),v,e.noExternalLinkIcon?null:i(Pc),y==null?void 0:y()])}}}),Jc=H({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:n}){const t=me(),s=Pt(e,"config"),a=b(()=>s.value.ariaLabel||s.value.text),l=K(!1);pe(()=>t.value.path,()=>{l.value=!1});const o=c=>{c.detail===0&&(l.value=!l.value)};return()=>{var c;return i("div",{class:["dropdown-wrapper",{open:l.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:o},[((c=n.title)==null?void 0:c.call(n))||i("span",{class:"title"},[i(He,{icon:s.value.icon}),e.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},s.value.children.map((r,u)=>{const p=u===s.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in r?[i("h4",{class:"dropdown-subtitle"},r.link?i(We,{config:r,onFocusout:()=>{r.children.length===0&&p&&(l.value=!1)}}):i("span",r.text)),i("ul",{class:"dropdown-subitem-wrapper"},r.children.map((d,h)=>i("li",{class:"dropdown-subitem"},i(We,{config:d,onFocusout:()=>{h===r.children.length-1&&p&&(l.value=!1)}}))))]:i(We,{config:r,onFocusout:()=>{p&&(l.value=!1)}}))}))])])}}});const Yc=()=>i(ie,{name:"i18n"},()=>[i("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);Yc.displayName="I18nIcon";const Xc=(e,n="")=>ke(e)?xt(nt(n,e)):"children"in e?{...e,...e.link&&!ss(e.link)?xt(nt(n,e.link)):{},children:e.children.map(t=>Xc(t,nt(n,e.prefix)))}:{...e,link:ss(e.link)?e.link:xt(nt(n,e.link)).link},Qc=()=>{const e=le(),n=()=>(e.value.navbar||[]).map(t=>Xc(t));return zl(()=>e.value.navbar,()=>n())},wf=()=>{const e=a1(),n=_n(),t=hn(),s=Ot(),a=En(),l=le();return zl(()=>n.path,()=>{const o=dn(s.value.locales),c=Rt(a.value.extraLocales??{});if(o.length<2&&!c.length)return null;const{path:r,fullPath:u}=n,{navbarLocales:p}=l.value;return{text:"",ariaLabel:p==null?void 0:p.selectLangAriaLabel,children:[...o.map(d=>{var y,E,v;const h=((y=s.value.locales)==null?void 0:y[d])??{},f=((E=a.value.locales)==null?void 0:E[d])??{},k=h.lang||"",_=((v=f.navbarLocales)==null?void 0:v.langName)??k;let w;if(k===s.value.lang)w=r;else{const T=r.replace(t.value,d);w=e.value.some(O=>O===T)?u.replace(r,T):f.home??d}return{text:_,link:w}}),...c.map(([d,h])=>({text:d,link:h.replace(":route",n.path.replace(t.value,""))}))]}})},_f=()=>{const e=le(),n=b(()=>e.value.repo||null),t=b(()=>n.value?N1(n.value):null),s=b(()=>n.value?Ul(n.value):null),a=b(()=>t.value?e.value.repoLabel??(s.value===null?"Source":s.value):null);return b(()=>!t.value||!a.value||e.value.repoDisplay===!1?null:{type:s.value||"Source",label:a.value,link:t.value})};var xf=H({name:"LanguageDropdown",setup(){const e=wf();return()=>e.value?i("div",{class:"vp-nav-item"},i(Jc,{config:e.value},{title:()=>{var n;return i(Yc,{"aria-label":(n=e.value)==null?void 0:n.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),Ef=H({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const n=me(),t=Pt(e,"config"),s=b(()=>t.value.ariaLabel||t.value.text),a=K(!1);pe(()=>n.value.path,()=>{a.value=!1});const l=(o,c)=>c[c.length-1]===o;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[i("span",{class:"title"},[i(He,{icon:t.value.icon}),e.config.text]),i("span",{class:["arrow",a.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},t.value.children.map(o=>i("li",{class:"dropdown-item"},"children"in o?[i("h4",{class:"dropdown-subtitle"},o.link?i(We,{config:o,onFocusout:()=>{l(o,t.value.children)&&o.children.length===0&&(a.value=!1)}}):i("span",o.text)),i("ul",{class:"dropdown-subitem-wrapper"},o.children.map(c=>i("li",{class:"dropdown-subitem"},i(We,{config:c,onFocusout:()=>{l(c,o.children)&&l(o,t.value.children)&&(a.value=!1)}}))))]:i(We,{config:o,onFocusout:()=>{l(o,t.value.children)&&(a.value=!1)}}))))]}}),Lf=H({name:"NavScreenLinks",setup(){const e=Qc();return()=>e.value.length?i("nav",{class:"nav-screen-links"},e.value.map(n=>i("div",{class:"navbar-links-item"},"children"in n?i(Ef,{config:n}):i(We,{config:n})))):null}});const Zc=()=>i(ie,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Zc.displayName="DarkIcon";const eu=()=>i(ie,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));eu.displayName="LightIcon";const nu=()=>i(ie,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));nu.displayName="AutoIcon";const tu=()=>i(ie,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));tu.displayName="EnterFullScreenIcon";const su=()=>i(ie,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));su.displayName="CancelFullScreenIcon";const au=()=>i(ie,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);au.displayName="OutlookIcon";var lu=H({name:"AppearanceSwitch",setup(){const{config:e,isDarkmode:n,status:t}=Es(),s=ut(),a=()=>{e.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"},l=async o=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!o){a();return}const c=o.clientX,r=o.clientY,u=Math.hypot(Math.max(c,innerWidth-c),Math.max(r,innerHeight-r)),p=n.value;await document.startViewTransition(async()=>{a(),await Gn()}).ready,n.value!==p&&document.documentElement.animate({clipPath:n.value?[`circle(${u}px at ${c}px ${r}px)`,`circle(0px at ${c}px ${r}px)`]:[`circle(0px at ${c}px ${r}px)`,`circle(${u}px at ${c}px ${r}px)`]},{duration:400,pseudoElement:n.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>i("button",{type:"button",id:"appearance-switch",onClick:l},[i(nu,{style:{display:t.value==="auto"?"block":"none"}}),i(Zc,{style:{display:t.value==="dark"?"block":"none"}}),i(eu,{style:{display:t.value==="light"?"block":"none"}})])}}),Tf=H({name:"AppearanceMode",setup(){const e=le(),{canToggle:n}=Es(),t=b(()=>e.value.outlookLocales.darkmode);return()=>n.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},t.value),i(lu)]):null}});const $a=zc.enableThemeColor==="true";var ou=H({name:"ToggleFullScreenButton",setup(){const e=le(),{isSupported:n,isFullscreen:t,toggle:s}=Wl(),a=b(()=>e.value.outlookLocales.fullscreen);return()=>n?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),i("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>s()},t.value?i(su):i(tu))]):null}}),iu=H({name:"OutlookSettings",setup(){const e=En(),n=ut(),t=b(()=>!n.value&&e.value.fullscreen);return()=>i(da,()=>[null,i(Tf),t.value?i(ou):null])}}),Cf=H({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:n,slots:t}){const s=me(),{isMobile:a}=xs(),l=je(),o=fc(l);return ye(()=>{l.value=document.body,pe(a,c=>{!c&&e.show&&(o.value=!1,n("close"))}),pe(()=>s.value.path,()=>{o.value=!1,n("close")})}),Dt(()=>{o.value=!1}),()=>i(Un,{name:"fade",onEnter:()=>{o.value=!0},onAfterLeave:()=>{o.value=!1}},()=>{var c,r;return e.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(c=t.before)==null?void 0:c.call(t),i(Lf),i("div",{class:"vp-outlook-wrapper"},i(iu)),(r=t.after)==null?void 0:r.call(t)])):null})}}),Sf=H({name:"NavbarBrand",setup(){const e=hn(),n=Ot(),t=le(),s=b(()=>t.value.home||e.value),a=b(()=>n.value.title),l=b(()=>t.value.navTitle??a.value),o=b(()=>t.value.logo?xe(t.value.logo):null),c=b(()=>t.value.logoDark?xe(t.value.logoDark):null);return()=>i(Ce,{to:s.value,class:"vp-brand"},()=>[o.value?i("img",{class:["vp-nav-logo",{light:!!c.value}],src:o.value,alt:""}):null,c.value?i("img",{class:["vp-nav-logo dark"],src:c.value,alt:""}):null,l.value?i("span",{class:["vp-site-name",{"hide-in-pad":o.value&&t.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),Af=H({name:"NavbarLinks",setup(){const e=Qc();return()=>e.value.length?i("nav",{class:"vp-nav-links"},e.value.map(n=>i("div",{class:"vp-nav-item hide-in-mobile"},"children"in n?i(Jc,{config:n}):i(We,{config:n})))):null}}),If=H({name:"RepoLink",setup(){const e=_f();return()=>e.value?i("div",{class:"vp-nav-item vp-action"},i("a",{class:"vp-action-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},i(H1,{type:e.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const ru=({active:e=!1},{emit:n})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>n("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));ru.displayName="ToggleNavbarButton";var Pf=ru;const ol=(e,{emit:n})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>n("toggle")},i("span",{class:"icon"}));ol.displayName="ToggleSidebarButton",ol.emits=["toggle"];var Df=ol,Of=H({name:"OutlookButton",setup(){const{isSupported:e}=Wl(),n=En(),t=ut(),s=me(),{canToggle:a}=Es(),l=K(!1),o=b(()=>!t.value&&n.value.fullscreen&&e);return pe(()=>s.value.path,()=>{l.value=!1}),()=>a.value||o.value||$a?i("div",{class:"vp-nav-item hide-in-mobile"},a.value&&!o.value&&!$a?i(lu):o.value&&!a.value&&!$a?i(ou):i("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[i(au),i("div",{class:"outlook-dropdown"},i(iu))])):null}}),Rf=H({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:n,slots:t}){const s=le(),{isMobile:a}=xs(),l=K(!1),o=b(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||a.value)}),c=b(()=>s.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),r={Brand:Sf,Language:xf,Links:Af,Repo:If,Outlook:Of,Search:bn("Docsearch")?cn("Docsearch"):bn("SearchBox")?cn("SearchBox"):Si},u=p=>r[p]??(bn(p)?cn(p):Si);return()=>{var p,d,h,f,k,_;return[i("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":o.value,"hide-icon":s.value.navbarIcon===!1}]},[i("div",{class:"vp-navbar-start"},[i(Df,{onToggle:()=>{l.value&&(l.value=!1),n("toggleSidebar")}}),(p=t.startBefore)==null?void 0:p.call(t),(c.value.start||[]).map(w=>i(u(w))),(d=t.startAfter)==null?void 0:d.call(t)]),i("div",{class:"vp-navbar-center"},[(h=t.centerBefore)==null?void 0:h.call(t),(c.value.center||[]).map(w=>i(u(w))),(f=t.centerAfter)==null?void 0:f.call(t)]),i("div",{class:"vp-navbar-end"},[(k=t.endBefore)==null?void 0:k.call(t),(c.value.end||[]).map(w=>i(u(w))),(_=t.endAfter)==null?void 0:_.call(t),i(Pf,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),i(Cf,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var w;return(w=t.screenTop)==null?void 0:w.call(t)},after:()=>{var w;return(w=t.screenBottom)==null?void 0:w.call(t)}})]}}});const cs=(e,n,t=!1)=>"activeMatch"in n?new RegExp(n.activeMatch,"u").test(e.path):Ec(e,n.link)?!0:"children"in n&&!t?n.children.some(s=>cs(e,s)):!1,cu=(e,n)=>n.type==="group"?n.children.some(t=>t.type==="group"?cu(e,t):t.type==="page"&&cs(e,t,!0))||"prefix"in n&&Ec(e,n.prefix):!1;var Mf=H({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const n=_n();return()=>ke(e.config.link)?i(We,{class:["vp-sidebar-link","vp-sidebar-page",{active:cs(n,e.config,!0)}],exact:!0,config:e.config}):i("p",e,[i(He,{icon:e.config.icon}),e.config.text])}}),jf=H({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:n}){const t=_n(),s=b(()=>cs(t,e.config)),a=b(()=>cs(t,e.config,!0));return()=>{const{collapsible:l,children:o=[],icon:c,prefix:r,link:u,text:p}=e.config;return i("section",{class:"vp-sidebar-group"},[i(l?"button":"p",{class:["vp-sidebar-header",{clickable:l||u,exact:a.value,active:s.value}],...l?{type:"button",onClick:()=>n("toggle"),onKeydown:d=>{d.key==="Enter"&&n("toggle")}}:{}},[i(He,{icon:c}),u?i(We,{class:"vp-sidebar-title",config:{text:p,link:u},noExternalLinkIcon:!0}):i("span",{class:"vp-sidebar-title"},p),l?i("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!l?i(uu,{key:r,config:o}):null])}}}),uu=H({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const n=_n(),t=K(-1),s=a=>{t.value=a===t.value?-1:a};return pe(()=>n.path,()=>{const a=e.config.findIndex(l=>cu(n,l));t.value=a},{immediate:!0,flush:"post"}),()=>i("ul",{class:"vp-sidebar-links"},e.config.map((a,l)=>i("li",a.type==="group"?i(jf,{config:a,open:l===t.value,onToggle:()=>s(l)}):i(Mf,{config:a}))))}}),Ff=H({name:"SideBar",slots:Object,setup(e,{slots:n}){const t=_n(),s=le(),a=Jl(),l=je();return ye(()=>{pe(()=>t.hash,o=>{const c=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${o}"]`);if(!c)return;const{top:r,height:u}=l.value.getBoundingClientRect(),{top:p,height:d}=c.getBoundingClientRect();p<r?c.scrollIntoView(!0):p+d>r+u&&c.scrollIntoView(!1)},{immediate:!0})}),()=>{var o,c,r;return i("aside",{ref:l,id:"sidebar",class:["vp-sidebar",{"hide-icon":s.value.sidebarIcon===!1}],key:"sidebar"},[(o=n.top)==null?void 0:o.call(n),((c=n.default)==null?void 0:c.call(n))||i(uu,{config:a.value}),(r=n.bottom)==null?void 0:r.call(n)])}}}),Yl=H({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:n}){const t=Jn(),s=me(),a=fe(),l=le(),{isMobile:o,isPC:c}=xs(),[r,u]=sl(!1),[p,d]=sl(!1),h=Jl(),f=K(!1),k=b(()=>e.noNavbar||a.value.navbar===!1||l.value.navbar===!1?!1:!!(s.value.title||l.value.logo||l.value.repo||l.value.navbar)),_=b(()=>e.noSidebar?!1:a.value.sidebar!==!1&&h.value.length!==0&&!a.value.home),w=b(()=>e.noToc||a.value.home?!1:a.value.toc||l.value.toc!==!1&&a.value.toc!==!1),y={x:0,y:0},E=L=>{y.x=L.changedTouches[0].clientX,y.y=L.changedTouches[0].clientY},v=L=>{const j=L.changedTouches[0].clientX-y.x,R=L.changedTouches[0].clientY-y.y;Math.abs(j)>Math.abs(R)*1.5&&Math.abs(j)>40&&(j>0&&y.x<=80?u(!0):u(!1))},T=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let O=0;return Pe("scroll",y1(()=>{const L=T();L<=58||L<O?f.value=!1:O+200<L&&!r.value&&(f.value=!0),O=L},300,!0)),pe(o,L=>{L||u(!1)}),ye(()=>{const L=fc(document.body);pe(r,R=>{L.value=R});const j=t.afterEach(()=>{u(!1)});Dt(()=>{L.value=!1,j()})}),()=>i(bn("GlobalEncrypt")?cn("GlobalEncrypt"):vc,()=>i("div",{class:["theme-container",{"no-navbar":!k.value,"no-sidebar":!_.value&&!(n.sidebar||n.sidebarTop||n.sidebarBottom),"has-toc":w.value,"hide-navbar":f.value,"sidebar-collapsed":!o.value&&!c.value&&p.value,"sidebar-open":o.value&&r.value},e.containerClass,a.value.containerClass||""],onTouchStart:E,onTouchEnd:v},[k.value?i(Rf,{onToggleSidebar:()=>u()},{startBefore:()=>{var L;return(L=n.navbarStartBefore)==null?void 0:L.call(n)},startAfter:()=>{var L;return(L=n.navbarStartAfter)==null?void 0:L.call(n)},centerBefore:()=>{var L;return(L=n.navbarCenterBefore)==null?void 0:L.call(n)},centerAfter:()=>{var L;return(L=n.navbarCenterAfter)==null?void 0:L.call(n)},endBefore:()=>{var L;return(L=n.navbarEndBefore)==null?void 0:L.call(n)},endAfter:()=>{var L;return(L=n.navbarEndAfter)==null?void 0:L.call(n)},screenTop:()=>{var L;return(L=n.navScreenTop)==null?void 0:L.call(n)},screenBottom:()=>{var L;return(L=n.navScreenBottom)==null?void 0:L.call(n)}}):null,i(Un,{name:"fade"},()=>r.value?i("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),i(Un,{name:"fade"},()=>o.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},i("span",{class:["arrow",p.value?"end":"start"]}))),i(Ff,{},{...n.sidebar?{default:()=>n.sidebar()}:{},top:()=>{var L;return(L=n.sidebarTop)==null?void 0:L.call(n)},bottom:()=>{var L;return(L=n.sidebarBottom)==null?void 0:L.call(n)}}),n.default(),i(bf)]))}}),ue=H({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:n}){const t=a=>{a.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},s=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>i(e.type==="single"?Un:Lh,{name:"drop",appear:e.appear,onAppear:t,onAfterAppear:s,onEnter:t,onAfterEnter:s,onBeforeLeave:t},()=>n.default())}});const il=({custom:e})=>i(oc,{class:["theme-hope-content",{custom:e}]});il.displayName="MarkdownContent",il.props={custom:Boolean};var Xl=il;const pu=()=>i(ie,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));pu.displayName="AuthorIcon";const du=()=>i(ie,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));du.displayName="CalendarIcon";const hu=()=>i(ie,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));hu.displayName="CategoryIcon";const fu=()=>i(ie,{name:"eye"},()=>i("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));fu.displayName="EyeIcon";const gu=()=>i(ie,{name:"fire"},()=>i("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));gu.displayName="FireIcon";const mu=()=>i(ie,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));mu.displayName="PrintIcon";const ku=()=>i(ie,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));ku.displayName="TagIcon";const vu=()=>i(ie,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));vu.displayName="TimerIcon";const yu=()=>i(ie,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);yu.displayName="WordIcon";const In=()=>{const e=le();return b(()=>e.value.metaLocales)};var $f=H({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const n=In();return()=>e.author.length?i("span",{class:"page-author-info","aria-label":`${n.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(pu),i("span",e.author.map(t=>t.url?i("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):i("span",{class:"page-author-item"},t.name))),i("span",{property:"author",content:e.author.map(t=>t.name).join(", ")})]):null}}),Nf=H({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const n=In(),t=pt();return()=>e.category.length?i("span",{class:"page-category-info","aria-label":`${n.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(hu),e.category.map(({name:s,path:a})=>i("span",{class:["page-category-item",{[`category${ga(s,9)}`]:!e.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&t(a)}},s)),i("meta",{property:"articleSection",content:e.category.map(({name:s})=>s).join(",")})]):null}}),Hf=H({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const n=Vl(),t=In();return()=>e.date?i("span",{class:"page-date-info","aria-label":`${t.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(du),i("span",i(da,()=>e.localizedDate||e.date.toLocaleDateString(n.value))),i("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),Vf=H({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const n=In();return()=>e.isOriginal?i("span",{class:"page-original-info"},n.value.origin):null}}),Bf=H({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(e){const n=_n(),t=In(),s=je(),a=K(0);return D1(s,()=>{},{childList:!0}),()=>e.pageview?i("span",{class:"page-pageview-info","aria-label":`${t.value.views}${e.pure?"":"🔢"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(a.value<1e3?fu:gu),i("span",{ref:s,id:"ArtalkPV",class:"vp-pageview waline-pageview-count","data-path":ke(e.pageview)?e.pageview:n.path,"data-page-key":ke(e.pageview)?e.pageview:n.path},"...")]):null}}),zf=H({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=In(),t=b(()=>{if(!e.readingTime)return null;const{minutes:s}=e.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,a;return(s=e.readingTimeLocale)!=null&&s.time?i("span",{class:"page-reading-time-info","aria-label":`${n.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(vu),i("span",(a=e.readingTimeLocale)==null?void 0:a.time),i("meta",{property:"timeRequired",content:t.value})]):null}}}),qf=H({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const n=In(),t=pt();return()=>e.tag.length?i("span",{class:"page-tag-info","aria-label":`${n.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(ku),e.tag.map(({name:s,path:a})=>i("span",{class:["page-tag-item",{[`tag${ga(s,9)}`]:!e.pure,clickable:a}],role:a?"navigation":"",onClick:()=>{a&&t(a)}},s)),i("meta",{property:"keywords",content:e.tag.map(({name:s})=>s).join(",")})]):null}}),Wf=H({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const n=In();return()=>{var t,s,a;return(t=e.readingTimeLocale)!=null&&t.words?i("span",{class:"page-word-info","aria-label":`${n.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[i(yu),i("span",(s=e.readingTimeLocale)==null?void 0:s.words),i("meta",{property:"wordCount",content:(a=e.readingTime)==null?void 0:a.words})]):null}}}),bu=H({name:"PageInfo",components:{AuthorInfo:$f,CategoryInfo:Nf,DateInfo:Hf,OriginalInfo:Vf,PageViewInfo:Bf,ReadingTimeInfo:zf,TagInfo:qf,WordInfo:Wf},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const n=ut();return()=>e.items?i("div",{class:"page-info"},e.items.map(t=>i(cn(`${t}Info`),{...e.info,pure:n.value}))):null}}),Uf=H({name:"PrintButton",setup(){const e=En(),n=le();return()=>e.value.print===!1?null:i("button",{type:"button",class:"print-button",title:n.value.metaLocales.print,onClick:()=>{window.print()}},i(mu))}}),wu=H({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:n}){const t=_n(),s=me(),a=In(),[l,o]=sl(),c=je(),r=K("-1.7rem"),u=d=>{var h;(h=c.value)==null||h.scrollTo({top:d,behavior:"smooth"})},p=()=>{if(c.value){const d=document.querySelector(".vp-toc-item.active");d?r.value=`${d.getBoundingClientRect().top-c.value.getBoundingClientRect().top+c.value.scrollTop}px`:r.value="-1.7rem"}else r.value="-1.7rem"};return ye(()=>{pe(()=>t.hash,d=>{if(c.value){const h=document.querySelector(`#toc a.toc-link[href$="${d}"]`);if(!h)return;const{top:f,height:k}=c.value.getBoundingClientRect(),{top:_,height:w}=h.getBoundingClientRect();_<f?u(c.value.scrollTop+_-f):_+w>f+k&&u(c.value.scrollTop+_+w-f-k)}}),pe(()=>t.fullPath,p,{flush:"post",immediate:!0})}),()=>{var k,_;const d=({title:w,level:y,slug:E})=>i(Ce,{to:`#${E}`,class:["vp-toc-link",`level${y}`],onClick:()=>{o()}},()=>w),h=(w,y)=>w.length&&y>0?i("ul",{class:"vp-toc-list"},w.map(E=>{const v=h(E.children,y-1);return[i("li",{class:["vp-toc-item",{active:t.hash===`#${E.slug}`}]},d(E)),v?i("li",v):null]})):null,f=e.items.length?h(e.items,e.headerDepth):s.value.headers?h(s.value.headers,e.headerDepth):null;return f?i("div",{class:"vp-toc-placeholder"},[i("aside",{id:"toc"},[(k=n.before)==null?void 0:k.call(n),i("div",{class:"vp-toc-header",onClick:()=>{o()}},[a.value.toc,i(Uf),i("div",{class:["arrow",l.value?"down":"end"]})]),i("div",{class:["vp-toc-wrapper",l.value?"open":""],ref:c},[f,i("div",{class:"vp-toc-marker",style:{top:r.value}})]),(_=n.after)==null?void 0:_.call(n)])]):null}}}),Ql=H({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const n=me(),t=le(),s=je(),a=({target:l})=>{const o=document.querySelector(l.hash);if(o){const c=()=>{o.removeAttribute("tabindex"),o.removeEventListener("blur",c)};o.setAttribute("tabindex","-1"),o.addEventListener("blur",c),o.focus(),window.scrollTo(0,0)}};return ye(()=>{pe(()=>n.value.path,()=>s.value.focus())}),()=>[i("span",{ref:s,tabindex:"-1"}),i("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:a},t.value.routeLocales.skipToContent)]}});let Na=null,Nt=null;const Gf={wait:()=>Na,pending:()=>{Na=new Promise(e=>{Nt=e})},resolve:()=>{Nt==null||Nt(),Na=null,Nt=null}},_u=()=>Gf;var xu=H({name:"FadeSlideY",slots:Object,setup(e,{slots:n}){const{resolve:t,pending:s}=_u();return()=>i(Un,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:s},()=>{var a;return(a=n.default)==null?void 0:a.call(n)})}});const Kf=(e,n)=>{const t=e.replace(n,"/").split("/"),s=[];let a=Fl(n);return t.forEach((l,o)=>{o!==t.length-1?(a+=`${l}/`,s.push({link:a,name:l||"Home"})):l!==""&&(a+=l,s.push({link:a,name:l}))}),s},Eu=(e,{slots:n})=>{var d,h;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:l,description:o,image:c,imageDark:r,header:u,features:p=[]}=e;return i("div",{class:"vp-feature-wrapper"},[t?i("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?i("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-feature",style:l?{color:l}:{}},[((d=n.image)==null?void 0:d.call(n,e))||[c?i("img",{class:["vp-feature-image",{light:r}],src:xe(c),alt:""}):null,r?i("img",{class:"vp-feature-image dark",src:xe(r),alt:""}):null],((h=n.info)==null?void 0:h.call(n,e))||[u?i("h2",{class:"vp-feature-header"},u):null,o?i("p",{class:"vp-feature-description",innerHTML:o}):null],p.length?i("div",{class:"vp-features"},p.map(({icon:f,title:k,details:_,link:w})=>{const y=[i("h3",{class:"vp-feature-title"},[i(He,{icon:f}),i("span",{innerHTML:k})]),i("p",{class:"vp-feature-details",innerHTML:_})];return w?ss(w)?i("a",{class:"vp-feature-item link",href:w,"aria-label":k,target:"_blank"},y):i(Ce,{class:"vp-feature-item link",to:w,"aria-label":k},()=>y):i("div",{class:"vp-feature-item"},y)})):null])])};Eu.displayName="FeaturePanel";var Ii=Eu,Jf=H({name:"HeroInfo",slots:Object,setup(e,{slots:n}){const t=fe(),s=Ot(),a=b(()=>t.value.heroFullScreen??!1),l=b(()=>{const{heroText:u,tagline:p}=t.value;return{text:u??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:a.value}}),o=b(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:h,heroImageStyle:f}=t.value;return{image:p?xe(p):null,imageDark:d?xe(d):null,style:f,alt:h||u||"",isFullScreen:a.value}}),c=b(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=t.value;return{image:ke(u)?xe(u):null,imageDark:ke(p)?xe(p):null,bgStyle:d,isFullScreen:a.value}}),r=b(()=>t.value.actions??[]);return()=>{var u,p,d;return i("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((u=n.heroBg)==null?void 0:u.call(n,c.value))||[c.value.image?i("div",{class:["vp-hero-mask",{light:c.value.imageDark}],style:[{"background-image":`url(${c.value.image})`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${c.value.imageDark})`},c.value.bgStyle]}):null],i("div",{class:"vp-hero-info"},[((p=n.heroImage)==null?void 0:p.call(n,o.value))||i(ue,{appear:!0,type:"group"},()=>[o.value.image?i("img",{key:"light",class:["vp-hero-image",{light:o.value.imageDark}],style:o.value.style,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?i("img",{key:"dark",class:"vp-hero-image dark",style:o.value.style,src:o.value.imageDark,alt:o.value.alt}):null]),((d=n.heroInfo)==null?void 0:d.call(n,l.value))??i("div",{class:"vp-hero-infos"},[l.value.text?i(ue,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},l.value.text)):null,l.value.tagline?i(ue,{appear:!0,delay:.08},()=>i("p",{id:"main-description",innerHTML:l.value.tagline})):null,r.value.length?i(ue,{appear:!0,delay:.12},()=>i("p",{class:"vp-hero-actions"},r.value.map(h=>i(We,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>i(He,{icon:h.icon})}:{})))):null])])])}}});const Lu=(e,{slots:n})=>{var h,f,k;const{bgImage:t,bgImageDark:s,bgImageStyle:a,color:l,description:o,image:c,imageDark:r,header:u,highlights:p=[],type:d="un-order"}=e;return i("div",{class:"vp-highlight-wrapper",style:l?{color:l}:{}},[t?i("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${t})`},a]}):null,s?i("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,i("div",{class:"vp-highlight"},[((h=n.image)==null?void 0:h.call(n,e))||[c?i("img",{class:["vp-highlight-image",{light:r}],src:xe(c),alt:""}):null,r?i("img",{class:"vp-highlight-image dark",src:xe(r),alt:""}):null],((f=n.info)==null?void 0:f.call(n,e))||[i("div",{class:"vp-highlight-info-wrapper"},i("div",{class:"vp-highlight-info"},[u?i("h2",{class:"vp-highlight-header",innerHTML:u}):null,o?i("p",{class:"vp-highlight-description",innerHTML:o}):null,((k=n.highlights)==null?void 0:k.call(n,p))||i(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},p.map(({icon:_,title:w,details:y,link:E})=>{const v=[i(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[_?i(He,{class:"vp-highlight-icon",icon:_}):null,i("span",{innerHTML:w})]),y?i(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return i(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?ss(E)?i("a",{class:"vp-highlight-item link",href:E,"aria-label":w,target:"_blank"},v):i(Ce,{class:"vp-highlight-item link",to:E,"aria-label":w},()=>v):i("div",{class:"vp-highlight-item"},v))}))]))]])])};Lu.displayName="HighlightPanel";var Yf=Lu,Xf=H({name:"HomePage",slots:Object,setup(e,{slots:n}){const t=ut(),s=fe(),a=b(()=>{const{features:o}=s.value;return tl(o)?o:null}),l=b(()=>{const{highlights:o}=s.value;return tl(o)?o:null});return()=>{var o,c,r,u;return i("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(o=n.top)==null?void 0:o.call(n),i(Jf),((c=l.value)==null?void 0:c.map(p=>"features"in p?i(Ii,p):i(Yf,p)))||(a.value?i(ue,{appear:!0,delay:.24},()=>i(Ii,{features:a.value})):null),(r=n.center)==null?void 0:r.call(n),i(ue,{appear:!0,delay:.32},()=>i(Xl)),(u=n.bottom)==null?void 0:u.call(n)])}}}),Qf=H({name:"BreadCrumb",setup(){const e=me(),n=hn(),t=fe(),s=le(),a=je([]),l=b(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&s.value.breadcrumb!==!1)&&a.value.length>1),o=b(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&s.value.breadcrumbIcon!==!1),c=()=>{const r=Kf(e.value.path,n.value).map(({link:u,name:p})=>{const{path:d,meta:h,notFound:f}=at(u);return f||h[qe.breadcrumbExclude]?null:{title:h[qe.shortTitle]||h[qe.title]||p,icon:h[qe.icon],path:d}}).filter(u=>u!==null);r.length>1&&(a.value=r)};return ye(()=>{pe(()=>e.value.path,c,{immediate:!0})}),()=>i("nav",{class:["vp-breadcrumb",{disable:!l.value}]},l.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((r,u)=>i("li",{class:{"is-active":a.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[i(Ce,{to:r.path,property:"item",typeof:"WebPage"},()=>[o.value?i(He,{icon:r.icon}):null,i("span",{property:"name"},r.title||"Unknown")]),i("meta",{property:"position",content:u+1})]))):[])}});const Pi=e=>e===!1||ys(e)?e:ke(e)?xt(e,!0):null,rl=(e,n,t)=>{const s=e.findIndex(a=>a.link===n);if(s!==-1){const a=e[s+t];return a!=null&&a.link?a:null}for(const a of e)if("children"in a){const l=rl(a.children,n,t);if(l)return l}return null};var Zf=H({name:"PageNav",setup(){const e=le(),n=fe(),t=Jl(),s=me(),a=pt(),l=b(()=>{const c=Pi(n.value.prev);return c===!1?null:c||(e.value.prevLink===!1?null:rl(t.value,s.value.path,-1))}),o=b(()=>{const c=Pi(n.value.next);return c===!1?null:c||(e.value.nextLink===!1?null:rl(t.value,s.value.path,1))});return Pe("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?o.value&&(a(o.value.link),c.preventDefault()):c.key==="ArrowLeft"&&l.value&&(a(l.value.link),c.preventDefault()))}),()=>l.value||o.value?i("nav",{class:"vp-page-nav"},[l.value?i(We,{class:"prev",config:l.value},()=>{var c,r;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),e.value.metaLocales.prev]),i("div",{class:"link"},[i(He,{icon:(c=l.value)==null?void 0:c.icon}),(r=l.value)==null?void 0:r.text])]}):null,o.value?i(We,{class:"next",config:o.value},()=>{var c,r;return[i("div",{class:"hint"},[e.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(c=o.value)==null?void 0:c.text,i(He,{icon:(r=o.value)==null?void 0:r.icon})])]}):null]):null}});const eg={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ng=({docsRepo:e,docsBranch:n,docsDir:t,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const l=Ul(e);let o;return a?o=a:l!==null&&(o=eg[l]),o?o.replace(/:repo/u,Kn(e)?e:`https://github.com/${e}`).replace(/:branch/u,n).replace(/:path/u,Ur(`${Fl(t)}/${s}`)):null},tg=()=>{const e=le(),n=me(),t=fe();return b(()=>{const{repo:s,docsRepo:a=s,docsBranch:l="main",docsDir:o="",editLink:c,editLinkPattern:r=""}=e.value;if(!(t.value.editLink??c??!0)||!a)return null;const u=ng({docsRepo:a,docsBranch:l,docsDir:o,editLinkPattern:r,filePathRelative:n.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},sg=()=>{const e=Ot(),n=le(),t=me(),s=fe();return b(()=>{var a,l;return!(s.value.lastUpdated??n.value.lastUpdated??!0)||!((a=t.value.git)!=null&&a.updatedTime)?null:new Date((l=t.value.git)==null?void 0:l.updatedTime).toLocaleString(e.value.lang)})},ag=()=>{const e=le(),n=me(),t=fe();return b(()=>{var s;return t.value.contributors??e.value.contributors??!0?((s=n.value.git)==null?void 0:s.contributors)??null:null})};var lg=H({name:"PageTitle",setup(){const e=me(),n=fe(),t=le(),{info:s,items:a}=df();return()=>i("div",{class:"vp-page-title"},[i("h1",[t.value.titleIcon===!1?null:i(He,{icon:n.value.icon}),e.value.title]),i(bu,{info:s.value,...a.value===null?{}:{items:a.value}}),i("hr")])}});const Tu=()=>i(ie,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Tu.displayName="EditIcon";var og=H({name:"PageMeta",setup(){const e=le(),n=tg(),t=sg(),s=ag();return()=>{const{metaLocales:a}=e.value;return i("footer",{class:"vp-page-meta"},[n.value?i("div",{class:"vp-meta-item edit-link"},i(We,{class:"vp-meta-label",config:n.value},{before:()=>i(Tu)})):null,i("div",{class:"vp-meta-item git-info"},[t.value?i("div",{class:"update-time"},[i("span",{class:"vp-meta-label"},`${a.lastUpdated}: `),i(da,()=>i("span",{class:"vp-meta-info"},t.value))]):null,s.value&&s.value.length?i("div",{class:"contributors"},[i("span",{class:"vp-meta-label"},`${a.contributors}: `),s.value.map(({email:l,name:o},c)=>[i("span",{class:"vp-meta-info",title:`email: ${l}`},o),c!==s.value.length-1?",":""])]):null])])}}}),ig=H({name:"NormalPage",slots:Object,setup(e,{slots:n}){const t=fe(),{isDarkmode:s}=Es(),a=le(),l=b(()=>t.value.toc||t.value.toc!==!1&&a.value.toc!==!1);return()=>i("main",{id:"main-content",class:"vp-page"},i(bn("LocalEncrypt")?cn("LocalEncrypt"):vc,()=>{var o,c,r,u;return[(o=n.top)==null?void 0:o.call(n),t.value.cover?i("div",{class:"page-cover"},i("img",{src:xe(t.value.cover),alt:"","no-view":""})):null,i(Qf),i(lg),l.value?i(wu,{headerDepth:t.value.headerDepth??a.value.headerDepth??2},{before:()=>{var p;return(p=n.tocBefore)==null?void 0:p.call(n)},after:()=>{var p;return(p=n.tocAfter)==null?void 0:p.call(n)}}):null,(c=n.contentBefore)==null?void 0:c.call(n),i(Xl),(r=n.contentAfter)==null?void 0:r.call(n),i(og),i(Zf),bn("CommentService")?i(cn("CommentService"),{darkmode:s.value}):null,(u=n.bottom)==null?void 0:u.call(n)]}))}}),rg=H({name:"Layout",slots:Object,setup(e,{slots:n}){const t=En(),s=le(),a=me(),l=fe(),{isMobile:o}=xs(),c=b(()=>{var r,u;return((r=s.value.blog)==null?void 0:r.sidebarDisplay)||((u=t.value.blog)==null?void 0:u.sidebarDisplay)||"mobile"});return()=>[i(Ql),i(Yl,{},{default:()=>{var r;return((r=n.default)==null?void 0:r.call(n))||(l.value.home?i(Xf):i(xu,()=>i(ig,{key:a.value.path},{top:()=>{var u;return(u=n.top)==null?void 0:u.call(n)},bottom:()=>{var u;return(u=n.bottom)==null?void 0:u.call(n)},contentBefore:()=>{var u;return(u=n.contentBefore)==null?void 0:u.call(n)},contentAfter:()=>{var u;return(u=n.contentAfter)==null?void 0:u.call(n)},tocBefore:()=>{var u;return(u=n.tocBefore)==null?void 0:u.call(n)},tocAfter:()=>{var u;return(u=n.tocAfter)==null?void 0:u.call(n)}})))},...c.value==="none"?{}:{navScreenBottom:()=>i(cn("BloggerInfo"))},...!o.value&&c.value==="always"?{sidebar:()=>i(cn("BloggerInfo"))}:{}})]}}),cg=H({name:"NotFoundHint",setup(){const e=le(),n=()=>{const t=e.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},n())])}}),ug=H({name:"NotFound",slots:Object,setup(e,{slots:n}){const t=Jn(),s=hn(),a=le();return()=>[i(Ql),i(Yl,{noSidebar:!0},()=>{var l;return i("main",{id:"main-content",class:"vp-page not-found"},((l=n.default)==null?void 0:l.call(n))||[i(cg),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},a.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>{t.push(a.value.home??s.value)}},a.value.routeLocales.home)])])})]}});const pg={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},dg={category:{"/":{path:"/category/",map:{}},"/en/":{path:"/en/category/",map:{}}},tag:{"/":{path:"/tag/",map:{}},"/en/":{path:"/en/tag/",map:{}}}},Cu=["/study/game/font.html","/study/java/kd.html","/study/game/unity-camera.html","/study/go/util.html","/study/go/try.html","/plugins/rocket-cat.html","/study/go/difficult.html","/study/go/design-mode.html","/util/dev.html","/plugins/request-tool.html","/study/game/design/chess.html","/study/web/","/study/web/css.html","/plugins/rs-orm.html","/util/","/util/common.html","/study/game/","/study/go/","/study/java/","/study/linux/","/study/try/","/plugins/","/study/","/plugins/io-game.html","/study/go/qiniu.html","/study/try/antlr.html","/study/go/socket.html","/study/go/ssh.html","/blog/desc.html","/plugins/gorm.html","/plugins/vue-admin.html","/blog/video.html","/study/go/wails.html","/study/go/gin.html","/study/go/gorm.html","/study/game/cocos.html","/study/game/game.html","/study/game/godot.html","/study/java/hutool.html","/plugins/java-orm.html","/study/try/rust.html","/study/java/io-game.html","/study/java/maven.html","/study/web/vite.html","/study/go/go.html","/study/try/python.html","/study/java/java.html","/study/linux/mysql.html","/study/linux/nginx.html","/study/web/axios.html","/study/java/protostuff.html","/study/try/flutter.html","/study/java/spring-boot.html","/study/web/vue.html","/study/linux/shell.html","/study/web/electron.html","/study/linux/server.html","/study/linux/linux.html","/util/idea.html","/study/java/mybatis.html","/study/game/unity.html","/study/linux/docker.html","/study/java/redisson.html","/study/java/transaction.html","/study/java/design-mode/proxy.html","/study/java/mqtt.html","/study/java/rocket-mq.html","/study/web/node.html","/study/linux/git.html","/study/java/data-struct.html","/study/java/spring-cloud-alibaba.html","/study/java/spring-cloud.html","/study/java/design-mode/design-mode.html","/blog/","/blog/random.html","/blog/body.html","/study/java/spring-boot-demo.html","/en/english/day19.html","/en/english/day18.html","/en/english/day17.html","/en/english/day16.html","/en/english/day14.html","/en/english/day13.html","/en/english/day15.html","/en/english/day12.html","/en/english/day11.html","/en/english/day10.html","/en/english/day9.html","/en/english/study.html","/en/english/day8.html","/en/english/day7.html","/en/english/day6.html","/en/english/day5.html","/en/english/day4.html","/en/english/day3.html","/en/english/day2.html","/en/english/","/en/english/day1.html","/en/plugins/","/en/plugins/gorm.html","/en/plugins/vue-admin.html","/en/plugins/jorm.html"],cl=je(dg);rt(cl);const Su=e=>{const n=me(),t=fe(),s=hn();return b(()=>{var c;const a=e??((c=t.value.blog)==null?void 0:c.key)??"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!cl.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const l=cl.value[a][s.value],o={path:l.path,map:{}};for(const r in l.map){const u=l.map[r];o.map[r]={path:u.path,items:[]};for(const p of u.indexes){const{path:d,meta:h}=at(Cu[p]);o.map[r].items.push({path:d,info:h})}n.value.path===u.path&&(o.currentItems=o.map[r].items)}return o})},hg={article:{"/":{path:"/article/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},"/en/":{path:"/en/article/",indexes:[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]}},star:{"/":{path:"/star/",indexes:[]},"/en/":{path:"/en/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76]},"/en/":{path:"/en/timeline/",indexes:[77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]}}},ul=je(hg);rt(ul);const ma=e=>{const n=fe(),t=hn();return b(()=>{var o;const s=e??((o=n.value.blog)==null?void 0:o.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!ul.value[s])throw new Error(`useBlogType: key ${e} is invalid`);const a=ul.value[s][t.value],l={path:a.path,items:[]};for(const c of a.indexes){const{path:r,meta:u}=at(Cu[c]);l.items.push({path:r,info:u})}return l})},Zl=()=>i(ie,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Zl.displayName="LockIcon";var fg=[];const Au=Symbol.for("categoryMap"),Ls=()=>{const e=ve(Au);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},gg=()=>{const e=Su("category");un(Au,e)},Ts=()=>{const e=En(),n=le();return b(()=>({...e.value.blog,...n.value.blog}))},Iu=Symbol.for("tagMap"),Cs=()=>{const e=ve(Iu);if(!e)throw new Error("useTagMap() is called without provider.");return e},mg=()=>{const e=Su("tag");un(Iu,e)},kg=e=>{const n=le();return b(()=>{const{[Ne.author]:t}=e.value;return t?rs(t):t===!1?[]:rs(n.value.author,!1)})},vg=e=>{const n=Ls();return b(()=>Cc(e.value[Ne.category]).map(t=>({name:t,path:n.value.map[t].path})))},yg=e=>{const n=Cs();return b(()=>Sc(e.value[Ne.tag]).map(t=>({name:t,path:n.value.map[t].path})))},bg=e=>b(()=>{const{[Ne.date]:n}=e.value;return Bl(n)}),wg=e=>{const n=Pt(e,"info"),t=Ts(),s=kg(n),a=vg(n),l=yg(n),o=bg(n),c=Bc(),r=b(()=>({author:s.value,category:a.value,date:o.value,localizedDate:n.value[Ne.localizedDate]||"",tag:l.value,isOriginal:n.value[Ne.isOriginal]||!1,readingTime:n.value[Ne.readingTime]||null,readingTimeLocale:n.value[Ne.readingTime]&&c.value?Vc(n.value[Ne.readingTime],c.value):null,pageview:e.path})),u=b(()=>t.value.articleInfo);return{info:r,items:u}},Pu=Symbol(""),Ss=()=>{const e=ve(Pu);if(!e)throw new Error("useArticles() is called without provider.");return e},_g=()=>{const e=ma("article");un(Pu,e)},Du=Symbol(""),eo=()=>{const e=ve(Du);if(!e)throw new Error("useStars() is called without provider.");return e},xg=()=>{const e=ma("star");un(Du,e)},Ou=Symbol(""),no=()=>{const e=ve(Ou);if(!e)throw new Error("useTimelines() is called without provider.");return e},Eg=()=>{const e=ma("timeline"),n=b(()=>{const t=[];return e.value.items.forEach(({info:s,path:a})=>{const l=Bl(s[Ne.date]);if(l){const o=l.getFullYear(),c=l.getMonth()+1,r=l.getDate();(!t[0]||t[0].year!==o)&&t.unshift({year:o,items:[]}),t[0].items.push({date:`${c}/${r}`,info:s,path:a})}}),{...e.value,config:t.reverse()}});un(Ou,n)},Lg=()=>{_g(),gg(),xg(),mg(),Eg()};var Tg=H({name:"SocialMedia",setup(){const e=Ts(),n=ut(),t=b(()=>{const s=e.value.medias;return s?Rt(s).map(([a,l])=>({name:a,icon:pg[a],url:l})):[]});return()=>t.value.length?i("div",{class:"vp-social-medias"},t.value.map(({name:s,icon:a,url:l})=>i("a",{class:"vp-social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":s,...n.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),to=H({name:"BloggerInfo",setup(){const e=Ts(),n=Ot(),t=le(),s=Ss(),a=Ls(),l=Cs(),o=no(),c=pt(),r=b(()=>{var h;return e.value.name||((h=rs(t.value.author)[0])==null?void 0:h.name)||n.value.title}),u=b(()=>e.value.avatar||t.value.logo),p=b(()=>t.value.blogLocales),d=b(()=>e.value.intro);return()=>{const{article:h,category:f,tag:k,timeline:_}=p.value,w=[[s.value.path,s.value.items.length,h],[a.value.path,dn(a.value.map).length,f],[l.value.path,dn(l.value.map).length,k],[o.value.path,o.value.items.length,_]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":p.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>c(d.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:xe(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,r.value?i("div",{class:"vp-blogger-name",property:"name"},r.value):null,e.value.description?i("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?i("meta",{property:"url",content:xe(d.value)}):null]),i("div",{class:"vp-blog-counts"},w.map(([y,E,v])=>i(Ce,{class:"vp-blog-count",to:y},()=>[i("div",{class:"count"},E),i("div",v)]))),i(Tg)])}}});const so=()=>i(ie,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));so.displayName="CategoryIcon";const ao=()=>i(ie,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));ao.displayName="TagIcon";const lo=()=>i(ie,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));lo.displayName="TimelineIcon";const Ru=()=>i(ie,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Ru.displayName="SlideIcon";const Mu=()=>i(ie,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);Mu.displayName="StickyIcon";const ka=()=>i(ie,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ka.displayName="ArticleIcon";const ju=()=>i(ie,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));ju.displayName="BookIcon";const Fu=()=>i(ie,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));Fu.displayName="LinkIcon";const $u=()=>i(ie,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));$u.displayName="ProjectIcon";const Nu=()=>i(ie,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Nu.displayName="FriendIcon";const pl=()=>i(ie,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));pl.displayName="SlideDownIcon";const Hu=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Hu.displayName="EmptyIcon";var Cg=H({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:n}){const t=Pt(e,"info"),{info:s,items:a}=wg(e);return()=>{var h,f,k;const{[qe.title]:l,[Ne.type]:o,[Ne.isEncrypted]:c=!1,[Ne.cover]:r,[Ne.excerpt]:u,[Ne.sticky]:p}=t.value,d=s.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=n.cover)==null?void 0:h.call(n,{cover:r}))||(r?[i("img",{class:"vp-article-cover",src:xe(r),alt:"",loading:"lazy"}),i("meta",{property:"image",content:xe(r)})]:[]),p?i(Mu):null,i(Ce,{to:e.path},()=>{var _;return((_=n.title)==null?void 0:_.call(n,{title:l,isEncrypted:c,type:o}))||i("header",{class:"vp-article-title"},[c?i(Zl):null,o===Gc.slide?i(Ru):null,i("span",{property:"headline"},l)])}),((f=n.excerpt)==null?void 0:f.call(n,{excerpt:u}))||(u?i("div",{class:"vp-article-excerpt",innerHTML:u}):null),i("hr",{class:"vp-article-hr"}),((k=n.info)==null?void 0:k.call(n,{info:d}))||i(bu,{info:d,...a.value?{items:a.value}:{}})]))}}}),Sg=H({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:n}){let t;const s=le(),a=K(""),l=b(()=>s.value.paginationLocales),o=b(()=>Math.ceil(e.total/e.perPage)),c=b(()=>!!o.value&&o.value!==1),r=b(()=>o.value<7?!1:e.current>4),u=b(()=>o.value<7?!1:e.current<o.value-3),p=b(()=>{const{current:f}=e;let k=1,_=o.value;const w=[];o.value>=7&&(f<=4&&f<o.value-3?(k=1,_=5):f>4&&f>=o.value-3?(_=o.value,k=o.value-4):o.value>7&&(k=f-2,_=f+2));for(let y=k;y<=_;y++)w.push(y);return w}),d=f=>n("updateCurrentPage",f),h=f=>{const k=parseInt(f,10);k<=o.value&&k>0?d(k):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/gu,o.value.toString())}`)};return ye(()=>{t=new V1}),()=>i("div",{class:"vp-pagination"},c.value?i("nav",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[e.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},l.value.prev):null,r.value?[i("div",{role:"navigation",onClick:()=>d(1)},1),i("div",{class:"ellipsis"},"...")]:null,p.value.map(f=>i("div",{key:f,class:{active:e.current===f},role:"navigation",onClick:()=>d(f)},f)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>d(o.value)},o.value)]:null,e.current<o.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},l.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${l.value.navigate}: `),i("input",{id:"navigation-text",value:a.value,onInput:({target:f})=>{a.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),h(a.value))}}),i("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:l.value.action,onClick:()=>h(a.value)},l.value.action)])]):[])}}),oo=H({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const n=_n(),t=Jn(),s=Ts(),a=K(1),l=b(()=>s.value.articlePerPage||10),o=b(()=>e.items.slice((a.value-1)*l.value,a.value*l.value)),c=async r=>{a.value=r;const u={...n.query};!(u.page===r.toString()||r===1&&!u.page)&&(r===1?delete u.page:u.page=r.toString(),await t.push({path:n.path,query:u}))};return ye(()=>{const{page:r}=n.query;c(r?Number(r):1),pe(a,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>i("div",{id:"article-list",class:"vp-article-list",role:"feed"},o.value.length?[...o.value.map(({info:r,path:u},p)=>i(ue,{appear:!0,delay:p*.04},()=>i(Cg,{key:u,info:r,path:u}))),i(Sg,{current:a.value,perPage:l.value,total:e.items.length,onUpdateCurrentPage:c})]:i(Hu))}}),Vu=H({name:"CategoryList",setup(){const e=me(),n=Ls();return()=>i("ul",{class:"vp-category-list"},Rt(n.value.map).sort(([,t],[,s])=>s.items.length-t.items.length).map(([t,{path:s,items:a}])=>i("li",{class:["vp-category",`vp-category${ga(t,9)}`,{active:s===e.value.path}]},i(Ce,{to:s},()=>[t,i("span",{class:"count"},a.length)]))))}}),Bu=H({name:"TagList",setup(){const e=fe(),n=Cs(),t=s=>{var a;return s===((a=e.value.blog)==null?void 0:a.name)};return()=>i("ul",{class:"tag-list-wrapper"},Rt(n.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:l}])=>i("li",{class:["tag",`tag${ga(s,9)}`,{active:t(s)}]},i(Ce,{to:a},()=>[s,i("span",{class:"tag-num"},l.length)]))))}}),Ag=H({name:"TimelineList",setup(){const e=le(),n=no(),t=pt(),s=b(()=>e.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>t(n.value.path)},[i(lo),i("span",{class:"num"},n.value.items.length),s.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},n.value.config.map(({year:a,items:l},o)=>i(ue,{appear:!0,delay:.08*(o+1)},()=>i("li",[i("h3",{class:"timeline-year"},a),i("ul",{class:"timeline-year-wrapper"},l.map(({date:c,info:r,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Ce,{class:"timeline-title",to:u},()=>r[qe.title])])))])))))])}});const Ig={article:ka,category:so,tag:ao,timeline:lo};var zu=H({name:"InfoList",setup(){const e=le(),n=Ss(),t=Ls(),s=b(()=>dn(t.value.map).length),a=eo(),l=Cs(),o=b(()=>dn(l.value.map).length),c=pt(),r=K("article"),u=b(()=>e.value.blogLocales);return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},Rt(Ig).map(([p,d])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{r.value=p}},i("div",{class:["icon-wrapper",{active:r.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},i(d))))),i(ue,()=>r.value==="article"?i("div",{class:"vp-star-article-wrapper"},[i("div",{class:"title",onClick:()=>c(n.value.path)},[i(ka),i("span",{class:"num"},n.value.items.length),u.value.article]),i("hr"),a.value.items.length?i("ul",{class:"vp-star-articles"},a.value.items.map(({info:p,path:d},h)=>i(ue,{appear:!0,delay:.08*(h+1)},()=>i("li",{class:"vp-star-article"},i(Ce,{to:d},()=>p[qe.title]))))):i("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):r.value==="category"?i("div",{class:"vp-category-wrapper"},[s.value?[i("div",{class:"title",onClick:()=>c(t.value.path)},[i(so),i("span",{class:"num"},s.value),u.value.category]),i("hr"),i(ue,{delay:.04},()=>i(Vu))]:i("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):r.value==="tag"?i("div",{class:"vp-tag-wrapper"},[o.value?[i("div",{class:"title",onClick:()=>c(l.value.path)},[i(ao),i("span",{class:"num"},o.value),u.value.tag]),i("hr"),i(ue,{delay:.04},()=>i(Bu))]:i("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):i(ue,()=>i(Ag)))])}}),va=H({name:"BlogWrapper",slots:Object,setup(e,{slots:n}){const{isMobile:t}=xs();return()=>[i(Ql),i(Yl,{noSidebar:!0,noToc:!0},{default:()=>n.default(),navScreenBottom:()=>i(to),...t.value?{sidebar:()=>i(zu)}:{}})]}});const qu=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(ue,()=>i(to)),i(ue,{delay:.04},()=>i(zu))]);qu.displayName="InfoPanel";var ya=qu,Pg=H({name:"BlogPage",setup(){const e=me(),n=fe(),t=Ls(),s=Cs();return()=>{const{key:a="",name:l=""}=n.value.blog||{},o=l?a==="category"?t.value.map[l].items:a==="tag"?s.value.map[l].items:[]:[];return i(va,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ue,()=>a==="category"?i(Vu):a==="tag"?i(Bu):null),l?i(ue,{appear:!0,delay:.24},()=>i(oo,{key:e.value.path,items:o})):null]),i(ue,{delay:.16},()=>i(ya,{key:"blog"}))])))}}});const Dg="//theme-hope-assets.vuejs.press/hero/default.jpg";var Og=H({name:"BlogHero",slots:Object,setup(e,{slots:n}){const t=fe(),s=Ot(),a=je(),l=b(()=>t.value.heroFullScreen??!1),o=b(()=>{const{heroText:r,heroImage:u,heroImageDark:p,heroAlt:d,heroImageStyle:h,tagline:f}=t.value;return{text:r??s.value.title??"Hello",tagline:f??"",image:u?xe(u):null,imageDark:p?xe(p):null,alt:d||r||"",style:h,isFullScreen:l.value}}),c=b(()=>{const{bgImage:r,bgImageDark:u,bgImageStyle:p}=t.value;return{image:ke(r)?xe(r):r===!1?null:Dg,imageDark:ke(u)?xe(u):null,bgStyle:p,isFullScreen:l.value}});return()=>{var r,u;return t.value.hero===!1?null:i("div",{ref:a,class:["vp-blog-hero",{fullscreen:l.value,"no-bg":!c.value.image}]},[((r=n.heroBg)==null?void 0:r.call(n,c.value))||[c.value.image?i("div",{class:["vp-blog-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?i("div",{class:"vp-blog-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((u=n.heroInfo)==null?void 0:u.call(n,o.value))||[i(ue,{appear:!0,type:"group",delay:.04},()=>[o.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:o.value.imageDark}],style:o.value.style,src:o.value.image,alt:o.value.alt}):null,o.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:o.value.style,src:o.value.imageDark,alt:o.value.alt}):null]),i(ue,{appear:!0,delay:.08},()=>o.value.text?i("h1",{class:"vp-blog-hero-title"},o.value.text):null),i(ue,{appear:!0,delay:.12},()=>o.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:o.value.tagline}):null)],o.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[i(pl),i(pl)]):null])}}});const Rg=["link","article","book","project","friend"];var Mg=H({name:"ProjectPanel",components:{ArticleIcon:ka,BookIcon:ju,FriendIcon:Nu,LinkIcon:Fu,ProjectIcon:$u},props:{items:{type:Array,required:!0}},setup(e){const n=ut(),t=pt(),s=(a="",l="icon")=>Rg.includes(a)?i(cn(`${a}-icon`)):Kn(a)?i("img",{class:"vp-project-image",src:a,alt:l}):ws(a)?i("img",{class:"vp-project-image",src:xe(a),alt:l}):i(He,{icon:a});return()=>i("div",{class:"vp-project-panel"},e.items.map(({icon:a,link:l,name:o,desc:c},r)=>i("div",{class:["vp-project-card",{[`project${r%9}`]:!n.value}],onClick:()=>t(l)},[s(a,o),i("div",{class:"vp-project-name"},o),i("div",{class:"vp-project-desc"},c)])))}}),jg=H({name:"BlogHome",setup(){const e=Ss(),n=fe(),t=b(()=>n.value.projects??[]);return()=>i("div",{class:"vp-page vp-blog"},[i(Og),i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[t.value.length?i(ue,{appear:!0,delay:.16},()=>i(Mg,{items:t.value})):null,i(ue,{appear:!0,delay:.24},()=>i(oo,{items:e.value.items}))]),i(ue,{appear:!0,delay:.16},()=>i(ya,{key:"blog"}))]),i(ue,{appear:!0,delay:.28},()=>i(Xl))])}});const Wu=()=>i(va,()=>i(jg));Wu.displayName="BlogHomeLayout";var Fg=Wu,$g=H({name:"ArticleType",setup(){const e=me(),n=hn(),t=le(),s=Ss(),a=eo(),l=b(()=>{const o=t.value.blogLocales;return[{text:o.all,path:s.value.path},{text:o.star,path:a.value.path},...fg.map(({key:c,path:r})=>({text:o[c],path:r.replace(/^\//,n.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},l.value.map(o=>i("li",{class:["vp-article-type",{active:o.path===e.value.path}]},i(Ce,{to:o.path},()=>o.text))))}}),Ng=H({name:"BlogPage",setup(){const e=ma(),n=fe(),t=me(),s=Ss(),a=eo(),l=b(()=>{const{key:o="",type:c}=n.value.blog||{};return o==="star"?a.value.items:c==="type"&&o?e.value.items:s.value.items});return()=>i(va,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ue,()=>i($g)),i(ue,{appear:!0,delay:.24},()=>i(oo,{key:t.value.path,items:l.value}))]),i(ue,{delay:.16},()=>i(ya,{key:"blog"}))])))}}),Hg=H({name:"TimelineItems",setup(){const e=Ts(),n=le(),t=no(),s=b(()=>e.value.timeline||n.value.blogLocales.timelineTitle),a=b(()=>t.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(ue,()=>i("li",{class:"motto"},s.value)),i(wu,{items:a.value}),t.value.config.map(({year:l,items:o},c)=>i(ue,{appear:!0,delay:.08*(c+1),type:"group"},()=>[i("h3",{key:"title",id:l,class:"timeline-year-title"},i("span",l)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},o.map(({date:r,info:u,path:p})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},r),i(Ce,{class:"timeline-title",to:p},()=>u[qe.title])])))])]))]))}});const Uu=()=>i(va,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{id:"main-content",class:"vp-blog-main"},[i(ue,{appear:!0,delay:.24},()=>i(Hg))]),i(ue,{delay:.16},()=>i(ya,{key:"blog"}))])));Uu.displayName="Timeline";var Vg=Uu,Bg={};const gt="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),Ha=Array.from({length:64},(e,n)=>n),zs=e=>Array(e).fill(-1),Mn=[...zs(46),0,1,...Ha.slice(54,64),...zs(7),...Ha.slice(2,28),...zs(6),...Ha.slice(28,54),...zs(5)],Di=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],Oi=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],Gu=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],dl=(e,n)=>{if(n<=0||n>e.length)throw Error(`Illegal len: ${n}`);let t=0,s,a;const l=[];for(;t<n;){if(s=e[t++]&255,l.push(gt[s>>2&63]),s=(s&3)<<4,t>=n){l.push(gt[s&63]);break}if(a=e[t++]&255,s|=a>>4&15,l.push(gt[s&63]),s=(a&15)<<2,t>=n){l.push(gt[s&63]);break}a=e[t++]&255,s|=a>>6&3,l.push(gt[s&63]),l.push(gt[a&63])}return l.join("")},zg=(e,n)=>{if(n<=0)throw Error(`Illegal len: ${n}`);const t=e.length;let s=0,a=0,l,o,c,r,u,p;const d=[];for(;s<t-1&&a<n&&(p=e.charCodeAt(s++),l=p<Mn.length?Mn[p]:-1,p=e.charCodeAt(s++),o=p<Mn.length?Mn[p]:-1,!(l==-1||o==-1||(u=l<<2>>>0,u|=(o&48)>>4,d.push(String.fromCharCode(u)),++a>=n||s>=t)||(p=e.charCodeAt(s++),c=p<Mn.length?Mn[p]:-1,c==-1)||(u=(o&15)<<4>>>0,u|=(c&60)>>2,d.push(String.fromCharCode(u)),++a>=n||s>=t)));)p=e.charCodeAt(s++),r=p<Mn.length?Mn[p]:-1,u=(c&3)<<6>>>0,u|=r,d.push(String.fromCharCode(u)),++a;return d.map(h=>h.charCodeAt(0))},qg=(e,n)=>{let t=null;for(typeof e=="number"&&(t=e,e=()=>null);t!==null||(t=e())!==null;)t<128?n(t&127):t<2048?(n(t>>6&31|192),n(t&63|128)):t<65536?(n(t>>12&15|224),n(t>>6&63|128),n(t&63|128)):(n(t>>18&7|240),n(t>>12&63|128),n(t>>6&63|128),n(t&63|128)),t=null},Wg=(e,n)=>{let t,s=null;for(;(t=s!==null?s:e())!==null;){if(t>=55296&&t<=57343&&(s=e())!==null&&s>=56320&&s<=57343){n((t-55296)*1024+s-56320+65536),s=null;continue}n(t)}s!==null&&n(s)},Ug=(e,n)=>{Wg(e,function(t){qg(t,n)})},Gg=typeof process=="object"&&Bg.NEXT_RUNTIME==="edge"?setTimeout:typeof setImmediate=="function"?setImmediate:typeof process=="object"&&typeof process.nextTick=="function"?process.nextTick:setTimeout,Kg=e=>{const n=[];let t=0;return Ug(()=>t>=e.length?null:e.charCodeAt(t++),s=>{n.push(s)}),n},us=(e,n,t,s)=>{let a,l=e[n],o=e[n+1];return l^=t[0],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[1],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[2],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[3],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[4],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[5],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[6],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[7],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[8],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[9],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[10],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[11],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[12],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[13],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[14],a=s[l>>>24],a+=s[256|l>>16&255],a^=s[512|l>>8&255],a+=s[768|l&255],o^=a^t[15],a=s[o>>>24],a+=s[256|o>>16&255],a^=s[512|o>>8&255],a+=s[768|o&255],l^=a^t[16],e[n]=o^t[17],e[n+1]=l,e},kt=(e,n)=>{let t=0;for(let s=0;s<4;++s)t=t<<8|e[n]&255,n=(n+1)%e.length;return{key:t,offp:n}},Ri=(e,n,t)=>{const s=n.length,a=t.length;let l=0,o=[0,0],c;for(let r=0;r<s;r++)c=kt(e,l),l=c.offp,n[r]=n[r]^c.key;for(let r=0;r<s;r+=2)o=us(o,0,n,t),n[r]=o[0],n[r+1]=o[1];for(let r=0;r<a;r+=2)o=us(o,0,n,t),t[r]=o[0],t[r+1]=o[1]},Jg=(e,n,t,s)=>{const a=t.length,l=s.length;let o=0,c=[0,0],r;for(let u=0;u<a;u++)r=kt(n,o),o=r.offp,t[u]=t[u]^r.key;o=0;for(let u=0;u<a;u+=2)r=kt(e,o),o=r.offp,c[0]^=r.key,r=kt(e,o),o=r.offp,c[1]^=r.key,c=us(c,0,t,s),t[u]=c[0],t[u+1]=c[1];for(let u=0;u<l;u+=2)r=kt(e,o),o=r.offp,c[0]^=r.key,r=kt(e,o),o=r.offp,c[1]^=r.key,c=us(c,0,t,s),s[u]=c[0],s[u+1]=c[1]},Mi=(e,n,t,s,a)=>{const l=Gu.slice(),o=l.length;if(t<4||t>31){const h=new Error(`Illegal number of rounds (4-31): ${t}`);if(s===!1)return Promise.reject(h);throw h}if(n.length!==16){const h=new Error(`Illegal salt length: ${n.length} != 16`);if(s===!1)return Promise.reject(h);throw h}t=1<<t>>>0;let c,r,u=0,p;Int32Array?(c=new Int32Array(Di),r=new Int32Array(Oi)):(c=Di.slice(),r=Oi.slice()),Jg(n,e,c,r);const d=()=>{if(a&&a(u/t),u<t){const h=Date.now();for(;u<t&&(u=u+1,Ri(e,c,r),Ri(n,c,r),!(Date.now()-h>100)););}else{for(u=0;u<64;u++)for(p=0;p<o>>1;p++)us(l,p<<1,c,r);const h=[];for(u=0;u<o;u++)h.push((l[u]>>24&255)>>>0),h.push((l[u]>>16&255)>>>0),h.push((l[u]>>8&255)>>>0),h.push((l[u]&255)>>>0);return s===!1?Promise.resolve(h):h}if(s===!1)return new Promise(h=>Gg(()=>{d().then(h)}))};if(s===!1)return d();{let h;for(;;)if(typeof(h=d())<"u")return h||[]}},Yg=e=>{try{let n;typeof window<"u"?n=window.crypto??window.msCrypto:n=globalThis.crypto;const t=new Uint32Array(e);return n==null||n.getRandomValues(t),Array.from(t)}catch{throw Error("WebCryptoAPI is not available")}},Xg=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const n=[];return n.push("$2a$"),e<10&&n.push("0"),n.push(e.toString()),n.push("$"),n.push(dl(Yg(16),16)),n.join("")};function Qg(e,n,t,s){if(typeof e!="string"||typeof n!="string"){const f=new Error("Invalid string / salt: Not a string");if(t===!1)return Promise.reject(f);throw f}let a,l;if(n.charAt(0)!=="$"||n.charAt(1)!=="2"){const f=new Error("Invalid salt version: "+n.substring(0,2));if(t===!1)return Promise.reject(f);throw f}if(n.charAt(2)==="$")a="\0",l=3;else{if(a=n.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||n.charAt(3)!=="$"){const f=Error("Invalid salt revision: "+n.substring(2,4));if(t===!1)return Promise.reject(f);throw f}l=4}if(n.charAt(l+2)>"$"){const f=new Error("Missing salt rounds");if(t===!1)return Promise.reject(f);throw f}const o=parseInt(n.substring(l,l+1),10)*10,c=parseInt(n.substring(l+1,l+2),10),r=o+c,u=n.substring(l+3,l+25);e+=a>="a"?"\0":"";const p=Kg(e),d=zg(u,16),h=f=>{const k=[];return k.push("$2"),a>="a"&&k.push(a),k.push("$"),r<10&&k.push("0"),k.push(r.toString()),k.push("$"),k.push(dl(d,d.length)),k.push(dl(f,Gu.length*4-1)),k.join("")};return t===!1?Mi(p,d,r,!1,s).then(f=>h(f)):h(Mi(p,d,r,!0,s))}const Zg=(e,n=10)=>{if(typeof n=="number"&&(n=Xg(n)),typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return Qg(e,n,!0)},hl=(e,n)=>{if(typeof e!="string"||typeof n!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof n);return n.length!==60?!1:Zg(e,n.substring(0,n.length-31))===n};var Ku=H({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:n}){const t=fe(),s=le(),a=K(""),l=K(!1),o=K(!1),c=b(()=>s.value.encryptLocales);let r=null;const u=()=>{r&&clearTimeout(r),l.value=!1,n("verify",a.value,o.value),Gn().then(()=>{l.value=!0,r=setTimeout(()=>{l.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:e.full||t.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:l.value}]},l.value?c.value.errorHint:i(Zl,{"aria-label":c.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:a.value,placeholder:c.value.placeholder,onInput:({target:p})=>{a.value=p.value},onKeydown:({key:p})=>{p==="Enter"&&u()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:o.value,onChange:()=>o.value=!o.value}),c.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>u()},"OK")]))}});const Ju=()=>{const e=En();return b(()=>e.value.encrypt||{})},ji="VUEPRESS_HOPE_GLOBAL_TOKEN",e3=()=>{const e=Ju(),n=fa(ji,""),t=gc(ji,""),s=b(()=>{const{global:l=!1,admin:o=[]}=e.value;return l&&o.length>0}),a=b(()=>{if(s.value){if(n.value)return e.value.admin.some(l=>hl(n.value,l));if(t.value)return e.value.admin.some(l=>hl(t.value,l))}return!1});return{isEncrypted:s,isDecrypted:a,validate:(l,o=!1)=>{(o?n:t).value=l}}},Va=(e="",n)=>!!e&&hl(e,n),Fi="VUEPRESS_HOPE_PATH_TOKEN",n3=()=>{const e=me(),n=Ju(),t=fa(Fi,{}),s=gc(Fi,{}),a=o=>ys(n.value.config)?dn(n.value.config).filter(c=>At(decodeURI(o),c)).sort((c,r)=>r.length-c.length):[],l=o=>{const c=a(o);if(c.length>0){const{config:r={}}=n.value;return{isEncrypted:!0,isDecrypted:c.some(u=>t.value[u]&&r[u].some(p=>Va(t.value[u],p))||s.value[u]&&r[u].some(p=>Va(s.value[u],p)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:b(()=>l(e.value.path)),getStatus:l,validate:(o,c=!1)=>{const{config:r={}}=n.value,u=a(e.value.path);for(const p of u)if(r[p].filter(d=>Va(o,d))){(c?t:s).value[p]=o;break}}}};var t3=H({name:"GlobalEncrypt",slots:Object,setup(e,{slots:n}){const{isDecrypted:t,isEncrypted:s,validate:a}=e3(),l=K(!1);return ye(()=>{l.value=!0}),()=>i(xu,()=>s.value?l.value?t.value?n.default():i(Ku,{full:!0,onVerify:a}):null:n.default())}}),s3=H({name:"LocalEncrypt",slots:Object,setup(e,{slots:n}){const{status:t,validate:s}=n3(),a=K(!1);return ye(()=>{a.value=!0}),()=>{const{isEncrypted:l,isDecrypted:o}=t.value;return l?a.value?o?n.default():i(Ku,{full:!0,onVerify:s}):null:n.default()}}});e0(e=>{const n=e.t,t=e.I!==!1,s=e.i;return t?{title:n,content:s?()=>[i(He,{icon:s}),n]:null,order:e.O,index:e.I}:null});const a3=Ge({enhance:({app:e,router:n})=>{const{scrollBehavior:t}=n.options;n.options.scrollBehavior=async(...s)=>(await _u().wait(),t(...s)),gf(e),e.component("HopeIcon",He),e.component("BloggerInfo",to),e.component("GlobalEncrypt",t3),e.component("LocalEncrypt",s3)},setup:()=>{mf(),yf(),Lg()},layouts:{Layout:rg,NotFound:ug,BlogCategory:Pg,BlogHome:Fg,BlogType:Ng,Timeline:Vg}}),l3=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,o3=(e,n)=>n.some(t=>{if(ke(t))return t===e.key;const{key:s,ctrl:a=!1,shift:l=!1,alt:o=!1}=t;return s===e.key&&a===e.ctrlKey&&l===e.shiftKey&&o===e.altKey}),i3=/[^\x00-\x7F]/,r3=e=>e.split(/\s+/g).map(n=>n.trim()).filter(n=>!!n),$i=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),Ni=(e,n)=>{const t=n.join(" "),s=r3(e);if(i3.test(e))return s.some(o=>t.toLowerCase().indexOf(o)>-1);const a=e.endsWith(" ");return new RegExp(s.map((o,c)=>s.length===c+1&&!a?`(?=.*\\b${$i(o)})`:`(?=.*\\b${$i(o)}\\b)`).join("")+".+","gi").test(t)},c3=({input:e,hotKeys:n})=>{if(n.value.length===0)return;const t=s=>{e.value&&o3(s,n.value)&&!l3(s.target)&&(s.preventDefault(),e.value.focus())};ye(()=>{document.addEventListener("keydown",t)}),Dl(()=>{document.removeEventListener("keydown",t)})},u3=[{title:"首页",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"博客技术栈🐔",slug:"博客技术栈",link:"#博客技术栈",children:[]},{level:2,title:"描述💒",slug:"描述",link:"#描述",children:[]},{level:2,title:"探索插件💢",slug:"探索插件",link:"#探索插件",children:[]}],path:"/blog/",pathLocale:"/",extraFields:[]},{title:"自述",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"堆栈😆",slug:"堆栈",link:"#堆栈",children:[{level:3,title:"栈🍎",slug:"栈",link:"#栈",children:[]},{level:3,title:"堆🍏",slug:"堆",link:"#堆",children:[]}]},{level:2,title:"网络协议❤️",slug:"网络协议",link:"#网络协议",children:[{level:3,title:"Http协议😃",slug:"http协议",link:"#http协议",children:[]}]}],path:"/blog/body.html",pathLocale:"/",extraFields:[]},{title:"Desc",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"博客数据🍒",slug:"博客数据",link:"#博客数据",children:[]}],path:"/blog/desc.html",pathLocale:"/",extraFields:[]},{title:"随笔",headers:[{level:2,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[{level:3,title:"ThreadPoolExecutor🍉",slug:"threadpoolexecutor",link:"#threadpoolexecutor",children:[]}]},{level:2,title:"框架理解💔",slug:"框架理解",link:"#框架理解",children:[]},{level:2,title:"名言✋",slug:"名言",link:"#名言",children:[]},{level:2,title:"正则表达式💔",slug:"正则表达式",link:"#正则表达式",children:[]},{level:2,title:"Bnf范式🐯",slug:"bnf范式",link:"#bnf范式",children:[]}],path:"/blog/random.html",pathLocale:"/",extraFields:[]},{title:"Video",headers:[{level:2,title:"觉得不错的b站视频👊",slug:"觉得不错的b站视频",link:"#觉得不错的b站视频",children:[]},{level:2,title:"Ok🌈",slug:"ok",link:"#ok",children:[]}],path:"/blog/video.html",pathLocale:"/",extraFields:[]},{title:"Front page",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[],path:"/plugins/gorm.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[],path:"/plugins/io-game.html",pathLocale:"/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]},{level:2,title:"模板功能",slug:"模板功能",link:"#模板功能",children:[{level:3,title:"基础模板",slug:"基础模板",link:"#基础模板",children:[]}]}],path:"/plugins/java-orm.html",pathLocale:"/",extraFields:[]},{title:"RequestTool",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"插件地址",slug:"插件地址",link:"#插件地址",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[{level:3,title:"目前支持",slug:"目前支持",link:"#目前支持",children:[]},{level:3,title:"前置请求",slug:"前置请求",link:"#前置请求",children:[]},{level:3,title:"参数解析",slug:"参数解析",link:"#参数解析",children:[]},{level:3,title:"保存请求历史和参数",slug:"保存请求历史和参数",link:"#保存请求历史和参数",children:[]}]},{level:2,title:"使用技巧",slug:"使用技巧",link:"#使用技巧",children:[{level:3,title:"技巧1",slug:"技巧1",link:"#技巧1",children:[]},{level:3,title:"技巧2",slug:"技巧2",link:"#技巧2",children:[]}]},{level:2,title:"更新说明",slug:"更新说明",link:"#更新说明",children:[]}],path:"/plugins/request-tool.html",pathLocale:"/",extraFields:[]},{title:"RocketCat",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"功能",slug:"功能",link:"#功能",children:[]}],path:"/plugins/rocket-cat.html",pathLocale:"/",extraFields:[]},{title:"RsRom",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/plugins/rs-orm.html",pathLocale:"/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"源码地址",slug:"源码地址",link:"#源码地址",children:[]},{level:2,title:"桌面端的实现",slug:"桌面端的实现",link:"#桌面端的实现",children:[]}],path:"/plugins/vue-admin.html",pathLocale:"/",extraFields:[]},{title:"指南",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/",pathLocale:"/",extraFields:[]},{title:"插件",headers:[{level:2,title:"介绍🍉",slug:"介绍🍉",link:"#介绍🍉",children:[]},{level:2,title:"工具列表🐸",slug:"工具列表🐸",link:"#工具列表🐸",children:[{level:3,title:"Icon素材",slug:"icon素材",link:"#icon素材",children:[]},{level:3,title:"AI代码工具",slug:"ai代码工具",link:"#ai代码工具",children:[]},{level:3,title:"开发工具👊",slug:"开发工具👊",link:"#开发工具👊",children:[]},{level:3,title:"日常工具😆",slug:"日常工具😆",link:"#日常工具😆",children:[]}]},{level:2,title:"桌面美化👻",slug:"桌面美化👻",link:"#桌面美化👻",children:[{level:3,title:"国内🐸",slug:"国内🐸",link:"#国内🐸",children:[]},{level:3,title:"国外🌟",slug:"国外🌟",link:"#国外🌟",children:[]}]}],path:"/util/",pathLocale:"/",extraFields:[]},{title:"通用工具",headers:[{level:2,title:"内存节约工具",slug:"内存节约工具",link:"#内存节约工具",children:[]},{level:2,title:"AI工具",slug:"ai工具",link:"#ai工具",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"日常工具",slug:"日常工具",link:"#日常工具",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]},{level:2,title:"图像工具",slug:"图像工具",link:"#图像工具",children:[{level:3,title:"列表",slug:"列表-2",link:"#列表-2",children:[]}]}],path:"/util/common.html",pathLocale:"/",extraFields:[]},{title:"开发工具",headers:[{level:2,title:"Fleet",slug:"fleet",link:"#fleet",children:[{level:3,title:"主题编辑器",slug:"主题编辑器",link:"#主题编辑器",children:[]}]},{level:2,title:"Github",slug:"github",link:"#github",children:[{level:3,title:"列表",slug:"列表",link:"#列表",children:[]}]},{level:2,title:"Shell",slug:"shell",link:"#shell",children:[{level:3,title:"列表",slug:"列表-1",link:"#列表-1",children:[]}]}],path:"/util/dev.html",pathLocale:"/",extraFields:[]},{title:"Idea插件",headers:[{level:2,title:"介绍🐔",slug:"介绍🐔",link:"#介绍🐔",children:[]},{level:2,title:"插件🍏",slug:"插件🍏",link:"#插件🍏",children:[]},{level:2,title:"插件文档👏",slug:"插件文档👏",link:"#插件文档👏",children:[]},{level:2,title:"必备插件🎈",slug:"必备插件🎈",link:"#必备插件🎈",children:[{level:3,title:"阿里巴巴部署插件🌟",slug:"阿里巴巴部署插件🌟",link:"#阿里巴巴部署插件🌟",children:[]},{level:3,title:"接口搜索插件💒",slug:"接口搜索插件💒",link:"#接口搜索插件💒",children:[]},{level:3,title:"翻译插件👏",slug:"翻译插件👏",link:"#翻译插件👏",children:[]},{level:3,title:"Gitee插件😎",slug:"gitee插件😎",link:"#gitee插件😎",children:[]},{level:3,title:"彩虹括号插件😄",slug:"彩虹括号插件😄",link:"#彩虹括号插件😄",children:[]},{level:3,title:"背景图片插件🍋",slug:"背景图片插件🍋",link:"#背景图片插件🍋",children:[]},{level:3,title:"SpringBoot热更插件🍊",slug:"springboot热更插件🍊",link:"#springboot热更插件🍊",children:[]}]},{level:2,title:"油猴插件🍒",slug:"油猴插件🍒",link:"#油猴插件🍒",children:[{level:3,title:"Github🍑",slug:"github🍑",link:"#github🍑",children:[]},{level:3,title:"魔法💞",slug:"魔法💞",link:"#魔法💞",children:[]},{level:3,title:"搭建魔法",slug:"搭建魔法",link:"#搭建魔法",children:[]}]},{level:2,title:"Github💢",slug:"github💢",link:"#github💢",children:[{level:3,title:"自动修改host😎",slug:"自动修改host😎",link:"#自动修改host😎",children:[]}]},{level:2,title:"Edge🏧",slug:"edge🏧",link:"#edge🏧",children:[]},{level:2,title:"原型设计💔",slug:"原型设计💔",link:"#原型设计💔",children:[{level:3,title:"激活码😎",slug:"激活码😎",link:"#激活码😎",children:[]},{level:3,title:"下载地址🍊",slug:"下载地址🍊",link:"#下载地址🍊",children:[]}]}],path:"/util/idea.html",pathLocale:"/",extraFields:[]},{title:"English",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]}],path:"/en/english/",pathLocale:"/en/",extraFields:[]},{title:"Day1",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day1.html",pathLocale:"/en/",extraFields:[]},{title:"Day10",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day10.html",pathLocale:"/en/",extraFields:[]},{title:"Day11",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day11.html",pathLocale:"/en/",extraFields:[]},{title:"Day12",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day12.html",pathLocale:"/en/",extraFields:[]},{title:"Day13",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day13.html",pathLocale:"/en/",extraFields:[]},{title:"Day14",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day14.html",pathLocale:"/en/",extraFields:[]},{title:"Day15",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day15.html",pathLocale:"/en/",extraFields:[]},{title:"Day16",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"小知识",slug:"小知识",link:"#小知识",children:[]}]}],path:"/en/english/day16.html",pathLocale:"/en/",extraFields:[]},{title:"Day17",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day17.html",pathLocale:"/en/",extraFields:[]},{title:"Day18",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]},{level:3,title:"review",slug:"review",link:"#review",children:[]},{level:3,title:"practice",slug:"practice",link:"#practice",children:[]}]}],path:"/en/english/day18.html",pathLocale:"/en/",extraFields:[]},{title:"Day19",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"语法分析",slug:"语法分析",link:"#语法分析",children:[{level:3,title:"Is duo from a small town near Beijing?",slug:"is-duo-from-a-small-town-near-beijing",link:"#is-duo-from-a-small-town-near-beijing",children:[]},{level:3,title:"This small town has many good coffee shops.",slug:"this-small-town-has-many-good-coffee-shops",link:"#this-small-town-has-many-good-coffee-shops",children:[]},{level:3,title:"The food at this restaurant is really bad.",slug:"the-food-at-this-restaurant-is-really-bad",link:"#the-food-at-this-restaurant-is-really-bad",children:[]},{level:3,title:"Is the food here good or bad?",slug:"is-the-food-here-good-or-bad",link:"#is-the-food-here-good-or-bad",children:[]},{level:3,title:"Is there a coffee shop near Ben's office?",slug:"is-there-a-coffee-shop-near-ben-s-office",link:"#is-there-a-coffee-shop-near-ben-s-office",children:[]}]}],path:"/en/english/day19.html",pathLocale:"/en/",extraFields:[]},{title:"Day2",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"Do you and Are you",slug:"do-you-and-are-you",link:"#do-you-and-are-you",children:[]}]}],path:"/en/english/day2.html",pathLocale:"/en/",extraFields:[]},{title:"Day3",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day3.html",pathLocale:"/en/",extraFields:[]},{title:"Day4",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[{level:3,title:"has and have",slug:"has-and-have",link:"#has-and-have",children:[]},{level:3,title:"what and where",slug:"what-and-where",link:"#what-and-where",children:[]},{level:3,title:"He and She",slug:"he-and-she",link:"#he-and-she",children:[]}]}],path:"/en/english/day4.html",pathLocale:"/en/",extraFields:[]},{title:"Day5",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day5.html",pathLocale:"/en/",extraFields:[]},{title:"Day6",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day6.html",pathLocale:"/en/",extraFields:[]},{title:"Day7",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]},{level:2,title:"bing",slug:"bing",link:"#bing",children:[]}],path:"/en/english/day7.html",pathLocale:"/en/",extraFields:[]},{title:"Day8",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day8.html",pathLocale:"/en/",extraFields:[]},{title:"Day9",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Study",slug:"study",link:"#study",children:[{level:3,title:"Words",slug:"words",link:"#words",children:[]}]}],path:"/en/english/day9.html",pathLocale:"/en/",extraFields:[]},{title:"Study",headers:[{level:2,title:"前缀(12)-义",slug:"前缀-12-义",link:"#前缀-12-义",children:[]},{level:2,title:"后缀(3)-性",slug:"后缀-3-性",link:"#后缀-3-性",children:[]},{level:2,title:"词根",slug:"词根",link:"#词根",children:[]}],path:"/en/english/study.html",pathLocale:"/en/",extraFields:[]},{title:"Plugins",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Menu",slug:"menu",link:"#menu",children:[{level:3,title:"Supported",slug:"supported",link:"#supported",children:[]}]}],path:"/en/plugins/",pathLocale:"/en/",extraFields:[]},{title:"Document Connections",headers:[],path:"/en/plugins/gorm.html",pathLocale:"/en/",extraFields:[]},{title:"JavaOrm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]},{level:2,title:"功能介绍",slug:"功能介绍",link:"#功能介绍",children:[{level:3,title:"支持对数据库注释和字段名进行mybatis-plus的注解关联",slug:"支持对数据库注释和字段名进行mybatis-plus的注解关联",link:"#支持对数据库注释和字段名进行mybatis-plus的注解关联",children:[]},{level:3,title:"效果图",slug:"效果图",link:"#效果图",children:[]},{level:3,title:"支持的Mysql类型",slug:"支持的mysql类型",link:"#支持的mysql类型",children:[]}]}],path:"/en/plugins/jorm.html",pathLocale:"/en/",extraFields:[]},{title:"VueAdmin",headers:[{level:2,title:"Desc",slug:"desc",link:"#desc",children:[]},{level:2,title:"Example",slug:"example",link:"#example",children:[]},{level:2,title:"Implementation on the desktop",slug:"implementation-on-the-desktop",link:"#implementation-on-the-desktop",children:[]}],path:"/en/plugins/vue-admin.html",pathLocale:"/en/",extraFields:[]},{title:"Game",headers:[],path:"/study/game/",pathLocale:"/",extraFields:[]},{title:"Cocos",headers:[{level:2,title:"介绍⛪",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🌈",slug:"官网",link:"#官网",children:[]},{level:2,title:"插件💒",slug:"插件",link:"#插件",children:[]}],path:"/study/game/cocos.html",pathLocale:"/",extraFields:[]},{title:"Font",headers:[{level:2,title:"小米",slug:"小米",link:"#小米",children:[]},{level:2,title:"OPPO",slug:"oppo",link:"#oppo",children:[]}],path:"/study/game/font.html",pathLocale:"/",extraFields:[]},{title:"Game",headers:[{level:2,title:"提示❤️",slug:"提示",link:"#提示",children:[]},{level:2,title:"技术🍑",slug:"技术",link:"#技术",children:[{level:3,title:"帧同步🍉",slug:"帧同步",link:"#帧同步",children:[]}]},{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"游戏引擎🍇",slug:"游戏引擎",link:"#游戏引擎",children:[{level:3,title:"Godot💔",slug:"godot",link:"#godot",children:[]},{level:3,title:"Unity🍑",slug:"unity",link:"#unity",children:[]},{level:3,title:"Cocos😎",slug:"cocos",link:"#cocos",children:[]}]},{level:2,title:"游戏素材🏧",slug:"游戏素材",link:"#游戏素材",children:[{level:3,title:"音效🎈",slug:"音效",link:"#音效",children:[]},{level:3,title:"Logo✋",slug:"logo",link:"#logo",children:[]},{level:3,title:"实用性高素材网站",slug:"实用性高素材网站",link:"#实用性高素材网站",children:[]},{level:3,title:"音效素材网",slug:"音效素材网",link:"#音效素材网",children:[]},{level:3,title:"国外🍑",slug:"国外",link:"#国外",children:[]},{level:3,title:"国内🪲",slug:"国内",link:"#国内",children:[]}]},{level:2,title:"准备使用的素材🍎",slug:"准备使用的素材",link:"#准备使用的素材",children:[]},{level:2,title:"游戏服务器框架❤️",slug:"游戏服务器框架",link:"#游戏服务器框架",children:[]},{level:2,title:"游戏政策模板",slug:"游戏政策模板",link:"#游戏政策模板",children:[]}],path:"/study/game/game.html",pathLocale:"/",extraFields:[]},{title:"Godot",headers:[{level:2,title:"介绍🚩",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网❤️",slug:"官网",link:"#官网",children:[]},{level:2,title:"Proto✋",slug:"proto",link:"#proto",children:[]}],path:"/study/game/godot.html",pathLocale:"/",extraFields:[]},{title:"Unity-Camera",headers:[{level:2,title:"日期",slug:"日期",link:"#日期",children:[]},{level:2,title:"步骤",slug:"步骤",link:"#步骤",children:[]}],path:"/study/game/unity-camera.html",pathLocale:"/",extraFields:[]},{title:"Unity",headers:[{level:2,title:"工具",slug:"工具",link:"#工具",children:[]},{level:2,title:"子物体自适应高度布局滚动",slug:"子物体自适应高度布局滚动",link:"#子物体自适应高度布局滚动",children:[]},{level:2,title:"Unity版本自动构建🪲",slug:"unity版本自动构建",link:"#unity版本自动构建",children:[{level:3,title:"脚本",slug:"脚本",link:"#脚本",children:[]}]},{level:2,title:"Unity基础🪲",slug:"unity基础",link:"#unity基础",children:[{level:3,title:"闭包🎈",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"协程🎈",slug:"协程",link:"#协程",children:[]},{level:3,title:"ads接入🎈",slug:"ads接入",link:"#ads接入",children:[]},{level:3,title:"小程序🏧",slug:"小程序",link:"#小程序",children:[]},{level:3,title:"json转换问题😄",slug:"json转换问题",link:"#json转换问题",children:[]}]},{level:2,title:"插件🐔",slug:"插件",link:"#插件",children:[{level:3,title:"Advertisement🍉",slug:"advertisement",link:"#advertisement",children:[]},{level:3,title:"DoTween🐷",slug:"dotween",link:"#dotween",children:[]},{level:3,title:"EasySave🗾",slug:"easysave",link:"#easysave",children:[]},{level:3,title:"LeanTouch💔",slug:"leantouch",link:"#leantouch",children:[]}]},{level:2,title:"开源库🍏",slug:"开源库",link:"#开源库",children:[{level:3,title:"WebSocket🍎",slug:"websocket",link:"#websocket",children:[]},{level:3,title:"Protobuf😎",slug:"protobuf",link:"#protobuf",children:[]},{level:3,title:"KCP🍇",slug:"kcp",link:"#kcp",children:[]},{level:3,title:"LuBan👊",slug:"luban",link:"#luban",children:[]}]},{level:2,title:"微信游戏🪲",slug:"微信游戏",link:"#微信游戏",children:[]},{level:2,title:"UnityApi🐯",slug:"unityapi",link:"#unityapi",children:[{level:3,title:"移动相关👊",slug:"移动相关",link:"#移动相关",children:[]},{level:3,title:"邮件发送💒",slug:"邮件发送",link:"#邮件发送",children:[]},{level:3,title:"IoGameUnity✋",slug:"iogameunity",link:"#iogameunity",children:[]}]}],path:"/study/game/unity.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[],path:"/study/go/",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"Go语言实现",slug:"go语言实现",link:"#go语言实现",children:[{level:3,title:"代理模式",slug:"代理模式",link:"#代理模式",children:[]}]}],path:"/study/go/design-mode.html",pathLocale:"/",extraFields:[]},{title:"高级",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Select",slug:"select",link:"#select",children:[{level:3,title:"常见用法",slug:"常见用法",link:"#常见用法",children:[]},{level:3,title:"使用注意",slug:"使用注意",link:"#使用注意",children:[]}]},{level:2,title:"线程",slug:"线程",link:"#线程",children:[{level:3,title:"轻量级线程变量如何处理的?",slug:"轻量级线程变量如何处理的",link:"#轻量级线程变量如何处理的",children:[]},{level:3,title:"goroutine和线程区别？",slug:"goroutine和线程区别",link:"#goroutine和线程区别",children:[]},{level:3,title:"goroutine能创建多少个？",slug:"goroutine能创建多少个",link:"#goroutine能创建多少个",children:[]}]},{level:2,title:"排序",slug:"排序",link:"#排序",children:[{level:3,title:"基本排序",slug:"基本排序",link:"#基本排序",children:[]}]},{level:2,title:"Chan(缓冲区)",slug:"chan-缓冲区",link:"#chan-缓冲区",children:[]},{level:2,title:"协程上下文",slug:"协程上下文",link:"#协程上下文",children:[{level:3,title:"简易版",slug:"简易版",link:"#简易版",children:[]}]}],path:"/study/go/difficult.html",pathLocale:"/",extraFields:[]},{title:"Gin",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"优雅停机",slug:"优雅停机",link:"#优雅停机",children:[]},{level:2,title:"中间件",slug:"中间件",link:"#中间件",children:[{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"cors跨域",slug:"cors跨域",link:"#cors跨域",children:[]},{level:3,title:"缓存redis",slug:"缓存redis",link:"#缓存redis",children:[]},{level:3,title:"认证处理器",slug:"认证处理器",link:"#认证处理器",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"对象封装",slug:"对象封装",link:"#对象封装",children:[]}]}],path:"/study/go/gin.html",pathLocale:"/",extraFields:[]},{title:"Go",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]},{level:2,title:"语法糖",slug:"语法糖",link:"#语法糖",children:[{level:3,title:"方法返回值赋值",slug:"方法返回值赋值",link:"#方法返回值赋值",children:[]}]},{level:2,title:"go基础部分",slug:"go基础部分",link:"#go基础部分",children:[{level:3,title:"变量赋值",slug:"变量赋值",link:"#变量赋值",children:[]},{level:3,title:"流程语句",slug:"流程语句",link:"#流程语句",children:[]},{level:3,title:"Map和List",slug:"map和list",link:"#map和list",children:[]},{level:3,title:"异常处理",slug:"异常处理",link:"#异常处理",children:[]},{level:3,title:"自定义错误类型",slug:"自定义错误类型",link:"#自定义错误类型",children:[]},{level:3,title:"闭包",slug:"闭包",link:"#闭包",children:[]},{level:3,title:"接口与结构体",slug:"接口与结构体",link:"#接口与结构体",children:[]},{level:3,title:"指针概念",slug:"指针概念",link:"#指针概念",children:[]},{level:3,title:"多线程通道",slug:"多线程通道",link:"#多线程通道",children:[]}]},{level:2,title:"Go实践",slug:"go实践",link:"#go实践",children:[]},{level:2,title:"开源库",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"高级部分",slug:"高级部分",link:"#高级部分",children:[{level:3,title:"镜像配置",slug:"镜像配置",link:"#镜像配置",children:[]},{level:3,title:"微服务",slug:"微服务",link:"#微服务",children:[]},{level:3,title:"多模块开发",slug:"多模块开发",link:"#多模块开发",children:[]},{level:3,title:"context上下文",slug:"context上下文",link:"#context上下文",children:[]},{level:3,title:"互斥锁",slug:"互斥锁",link:"#互斥锁",children:[]},{level:3,title:"单元测试",slug:"单元测试",link:"#单元测试",children:[]}]},{level:2,title:"工具类",slug:"工具类",link:"#工具类",children:[{level:3,title:"Jwt",slug:"jwt",link:"#jwt",children:[]},{level:3,title:"打包",slug:"打包",link:"#打包",children:[]}]}],path:"/study/go/go.html",pathLocale:"/",extraFields:[]},{title:"Gorm",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装",slug:"安装",link:"#安装",children:[]},{level:2,title:"使用",slug:"使用",link:"#使用",children:[]}],path:"/study/go/gorm.html",pathLocale:"/",extraFields:[]},{title:"七牛云",headers:[{level:2,title:"七牛云存储对接",slug:"七牛云存储对接",link:"#七牛云存储对接",children:[]},{level:2,title:"后端go具体代码",slug:"后端go具体代码",link:"#后端go具体代码",children:[]},{level:2,title:"前端Vue",slug:"前端vue",link:"#前端vue",children:[]}],path:"/study/go/qiniu.html",pathLocale:"/",extraFields:[]},{title:"Socket",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"自定义协议",slug:"自定义协议",link:"#自定义协议",children:[{level:3,title:"使用示例",slug:"使用示例",link:"#使用示例",children:[]}]},{level:2,title:"简单协议",slug:"简单协议",link:"#简单协议",children:[{level:3,title:"代码",slug:"代码",link:"#代码",children:[]}]}],path:"/study/go/socket.html",pathLocale:"/",extraFields:[]},{title:"Ssh",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"终端连接",slug:"终端连接",link:"#终端连接",children:[]}],path:"/study/go/ssh.html",pathLocale:"/",extraFields:[]},{title:"原理解析",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Gin",slug:"gin",link:"#gin",children:[]},{level:2,title:"Go",slug:"go",link:"#go",children:[]}],path:"/study/go/try.html",pathLocale:"/",extraFields:[]},{title:"工具",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[{level:3,title:"缓存工具类",slug:"缓存工具类",link:"#缓存工具类",children:[]}]}],path:"/study/go/util.html",pathLocale:"/",extraFields:[]},{title:"Wails",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网",slug:"官网",link:"#官网",children:[]}],path:"/study/go/wails.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[],path:"/study/java/",pathLocale:"/",extraFields:[]},{title:"数据结构",headers:[{level:2,title:"介绍💒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"HashMap✋",slug:"hashmap",link:"#hashmap",children:[]},{level:2,title:"LinkedList🍅",slug:"linkedlist",link:"#linkedlist",children:[]},{level:2,title:"Array🐯",slug:"array",link:"#array",children:[]},{level:2,title:"Stack👏",slug:"stack",link:"#stack",children:[]},{level:2,title:"Queue👏",slug:"queue",link:"#queue",children:[]}],path:"/study/java/data-struct.html",pathLocale:"/",extraFields:[]},{title:"Hutool",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Api😃",slug:"api",link:"#api",children:[{level:3,title:"对象复制🗾",slug:"对象复制",link:"#对象复制",children:[]}]}],path:"/study/java/hutool.html",pathLocale:"/",extraFields:[]},{title:"IoGame",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"官网🍎",slug:"官网",link:"#官网",children:[]},{level:2,title:"Api🍒",slug:"api",link:"#api",children:[{level:3,title:"通知🎈",slug:"通知",link:"#通知",children:[]}]}],path:"/study/java/io-game.html",pathLocale:"/",extraFields:[]},{title:"Java",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Java基础🍊",slug:"java基础",link:"#java基础",children:[{level:3,title:"List工具🍅",slug:"list工具",link:"#list工具",children:[]},{level:3,title:"泛型💔",slug:"泛型",link:"#泛型",children:[]},{level:3,title:"定时任务👊",slug:"定时任务",link:"#定时任务",children:[]},{level:3,title:"多线程🍎",slug:"多线程",link:"#多线程",children:[]}]},{level:2,title:"Jvm😎",slug:"jvm",link:"#jvm",children:[{level:3,title:"线程私有的⛪",slug:"线程私有的",link:"#线程私有的",children:[]},{level:3,title:"线程公有的💢",slug:"线程公有的",link:"#线程公有的",children:[]}]},{level:2,title:"锁🏧",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁🍒",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"悲观锁😃",slug:"悲观锁",link:"#悲观锁",children:[]}]}],path:"/study/java/java.html",pathLocale:"/",extraFields:[]},{title:"目录",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/kd.html",pathLocale:"/",extraFields:[]},{title:"Maven",headers:[{level:2,title:"介绍😄",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"腾讯源镜像",slug:"腾讯源镜像",link:"#腾讯源镜像",children:[]},{level:2,title:"镜像🍋",slug:"镜像",link:"#镜像",children:[]},{level:2,title:"父子依赖👻",slug:"父子依赖",link:"#父子依赖",children:[]}],path:"/study/java/maven.html",pathLocale:"/",extraFields:[]},{title:"Mqtt",headers:[{level:2,title:"介绍🍏",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🍑",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例 SpringBoot🏧",slug:"示例-springboot",link:"#示例-springboot",children:[]}],path:"/study/java/mqtt.html",pathLocale:"/",extraFields:[]},{title:"Mybatis",headers:[{level:2,title:"介绍🍊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"常用标签😃",slug:"常用标签",link:"#常用标签",children:[]},{level:2,title:"使用规范⛪",slug:"使用规范",link:"#使用规范",children:[]},{level:2,title:"原理😎",slug:"原理",link:"#原理",children:[{level:3,title:"spring环境🍇",slug:"spring环境",link:"#spring环境",children:[]}]},{level:2,title:"mybatis-plus🎈",slug:"mybatis-plus",link:"#mybatis-plus",children:[{level:3,title:"LambdaQueryWrapper💢",slug:"lambdaquerywrapper",link:"#lambdaquerywrapper",children:[]},{level:3,title:"配置插件🗾",slug:"配置插件",link:"#配置插件",children:[]},{level:3,title:"MybatisX🎈",slug:"mybatisx",link:"#mybatisx",children:[]}]}],path:"/study/java/mybatis.html",pathLocale:"/",extraFields:[]},{title:"Protostuff序列化",headers:[{level:2,title:"介绍💔",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用😃",slug:"使用",link:"#使用",children:[]}],path:"/study/java/protostuff.html",pathLocale:"/",extraFields:[]},{title:"Redisson",headers:[{level:2,title:"官网⛪",slug:"官网",link:"#官网",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/redisson.html",pathLocale:"/",extraFields:[]},{title:"RocketMq",headers:[{level:2,title:"介绍🐷",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"使用场景🎁",slug:"使用场景",link:"#使用场景",children:[]},{level:2,title:"示例😃",slug:"示例",link:"#示例",children:[]},{level:2,title:"部署💞",slug:"部署",link:"#部署",children:[]}],path:"/study/java/rocket-mq.html",pathLocale:"/",extraFields:[]},{title:"SpringBootDemo",headers:[{level:2,title:"根据条件创建bean的注解👻",slug:"根据条件创建bean的注解",link:"#根据条件创建bean的注解",children:[{level:3,title:"@ConditionalOnProperty💒",slug:"conditionalonproperty",link:"#conditionalonproperty",children:[]},{level:3,title:"@ConditionalOnMissingBean🌅",slug:"conditionalonmissingbean",link:"#conditionalonmissingbean",children:[]},{level:3,title:"@ConditionalOnBean🌟",slug:"conditionalonbean",link:"#conditionalonbean",children:[]},{level:3,title:"@AutoConfigureAfter🐔",slug:"autoconfigureafter",link:"#autoconfigureafter",children:[]},{level:3,title:"@ConditionalOnClass🍊",slug:"conditionalonclass",link:"#conditionalonclass",children:[]},{level:3,title:"@Conditional🍊",slug:"conditional",link:"#conditional",children:[]},{level:3,title:"@AutoConfigureBefore😎",slug:"autoconfigurebefore",link:"#autoconfigurebefore",children:[]}]},{level:2,title:"双MQ控制时间差🍎",slug:"双mq控制时间差",link:"#双mq控制时间差",children:[]},{level:2,title:"文件上传🚩",slug:"文件上传",link:"#文件上传",children:[]}],path:"/study/java/spring-boot-demo.html",pathLocale:"/",extraFields:[]},{title:"SpringBoot",headers:[{level:2,title:"介绍🎈",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"必读指南",slug:"必读指南",link:"#必读指南",children:[]},{level:2,title:"规范😎",slug:"规范",link:"#规范",children:[]},{level:2,title:"打包原生脚本执行🪲",slug:"打包原生脚本执行",link:"#打包原生脚本执行",children:[]},{level:2,title:"启动和部署🍉",slug:"启动和部署",link:"#启动和部署",children:[]},{level:2,title:"Cors跨域配置🍎 !",slug:"cors跨域配置",link:"#cors跨域配置",children:[]},{level:2,title:"yml配置💞",slug:"yml配置",link:"#yml配置",children:[]},{level:2,title:"测试搭建👻",slug:"测试搭建",link:"#测试搭建",children:[]},{level:2,title:"Controller传参🐔",slug:"controller传参",link:"#controller传参",children:[]},{level:2,title:"全局异常处理🐟",slug:"全局异常处理",link:"#全局异常处理",children:[]},{level:2,title:"文件上传下载🍇",slug:"文件上传下载",link:"#文件上传下载",children:[]},{level:2,title:"SpringBootUtil🎁 !",slug:"springbootutil",link:"#springbootutil",children:[{level:3,title:"HttpServletUtil🐟 !",slug:"httpservletutil",link:"#httpservletutil",children:[]},{level:3,title:"返回对象封装🐷 !",slug:"返回对象封装",link:"#返回对象封装",children:[]},{level:3,title:"TokenUtil⭐",slug:"tokenutil",link:"#tokenutil",children:[]},{level:3,title:"FileUtil🐷 !",slug:"fileutil",link:"#fileutil",children:[]}]},{level:2,title:"拦截器⭐",slug:"拦截器",link:"#拦截器",children:[]},{level:2,title:"参数校验😃",slug:"参数校验",link:"#参数校验",children:[{level:3,title:"依赖🍒",slug:"依赖",link:"#依赖",children:[]},{level:3,title:"DTO❤️",slug:"dto",link:"#dto",children:[]},{level:3,title:"Controller⭐",slug:"controller",link:"#controller",children:[]}]}],path:"/study/java/spring-boot.html",pathLocale:"/",extraFields:[]},{title:"SpringCloudAlibaba",headers:[{level:2,title:"介绍🎁",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"项目🌅",slug:"项目",link:"#项目",children:[]},{level:2,title:"Nacos🌈",slug:"nacos",link:"#nacos",children:[]},{level:2,title:"Seata😎",slug:"seata",link:"#seata",children:[]}],path:"/study/java/spring-cloud-alibaba.html",pathLocale:"/",extraFields:[]},{title:"SpringCloud",headers:[{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/spring-cloud.html",pathLocale:"/",extraFields:[]},{title:"Transaction",headers:[{level:2,title:"介绍🍒",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"单机事务🐷",slug:"单机事务",link:"#单机事务",children:[]},{level:2,title:"分布式事务💢",slug:"分布式事务",link:"#分布式事务",children:[]}],path:"/study/java/transaction.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[],path:"/study/linux/",pathLocale:"/",extraFields:[]},{title:"Docker",headers:[{level:2,title:"介绍🐸",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装✋",slug:"安装",link:"#安装",children:[]},{level:2,title:"常用命令✋",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"配置镜像源💢",slug:"配置镜像源",link:"#配置镜像源",children:[]}]},{level:2,title:"运行镜像🗾",slug:"运行镜像",link:"#运行镜像",children:[{level:3,title:"Mongodb🍋",slug:"mongodb",link:"#mongodb",children:[]},{level:3,title:"Mysql🏩",slug:"mysql",link:"#mysql",children:[]},{level:3,title:"Redis🍏",slug:"redis",link:"#redis",children:[]},{level:3,title:"PostgresSql😃",slug:"postgressql",link:"#postgressql",children:[]},{level:3,title:"Rabbitmq🏧",slug:"rabbitmq",link:"#rabbitmq",children:[]},{level:3,title:"RocketMq🍒",slug:"rocketmq",link:"#rocketmq",children:[]},{level:3,title:"Nacos🐔",slug:"nacos",link:"#nacos",children:[]},{level:3,title:"Seata❤️",slug:"seata",link:"#seata",children:[]},{level:3,title:"Ubuntu⭐",slug:"ubuntu",link:"#ubuntu",children:[]}]},{level:2,title:"Python🌈",slug:"python",link:"#python",children:[]},{level:2,title:"DrawIo🐔",slug:"drawio",link:"#drawio",children:[]},{level:2,title:"Go部署😎",slug:"go部署",link:"#go部署",children:[{level:3,title:"docker-compose部署🌅",slug:"docker-compose部署",link:"#docker-compose部署",children:[]}]},{level:2,title:"Java部署🍋",slug:"java部署",link:"#java部署",children:[{level:3,title:"docker-compose部署🍒",slug:"docker-compose部署-1",link:"#docker-compose部署-1",children:[]}]}],path:"/study/linux/docker.html",pathLocale:"/",extraFields:[]},{title:"Git使用",headers:[{level:2,title:"介绍🏧",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"下载地址💞",slug:"下载地址",link:"#下载地址",children:[]},{level:2,title:"基本命令💒",slug:"基本命令",link:"#基本命令",children:[]},{level:2,title:"分支🗾",slug:"分支",link:"#分支",children:[{level:3,title:"新建分支🪲",slug:"新建分支",link:"#新建分支",children:[]},{level:3,title:"选择其他分支合并到当前分支🍅",slug:"选择其他分支合并到当前分支",link:"#选择其他分支合并到当前分支",children:[]},{level:3,title:"使用其他分支当作基础分支合并到当前分支上⛪",slug:"使用其他分支当作基础分支合并到当前分支上",link:"#使用其他分支当作基础分支合并到当前分支上",children:[]},{level:3,title:"清除提交历史在创建新分支😆",slug:"清除提交历史在创建新分支",link:"#清除提交历史在创建新分支",children:[]}]}],path:"/study/linux/git.html",pathLocale:"/",extraFields:[]},{title:"Linux",headers:[{level:2,title:"Shell脚本👻",slug:"shell脚本",link:"#shell脚本",children:[]},{level:2,title:"Ubuntu🐟",slug:"ubuntu",link:"#ubuntu",children:[{level:3,title:"镜像源😎",slug:"镜像源",link:"#镜像源",children:[]}]},{level:2,title:"Centos7🐔",slug:"centos7",link:"#centos7",children:[{level:3,title:"自动化脚本🌈",slug:"自动化脚本",link:"#自动化脚本",children:[]},{level:3,title:"Mysql8安装🌈",slug:"mysql8安装",link:"#mysql8安装",children:[]},{level:3,title:"Ffmpeg💒",slug:"ffmpeg",link:"#ffmpeg",children:[]}]},{level:2,title:"Deepin🎁",slug:"deepin",link:"#deepin",children:[]},{level:2,title:"内存搭配🐸",slug:"内存搭配",link:"#内存搭配",children:[]},{level:2,title:"常用命令👏",slug:"常用命令",link:"#常用命令",children:[{level:3,title:"Date(时间)🌈",slug:"date-时间",link:"#date-时间",children:[]},{level:3,title:"Crontab(定时)🍊",slug:"crontab-定时",link:"#crontab-定时",children:[]},{level:3,title:"Tar(压缩)🗾",slug:"tar-压缩",link:"#tar-压缩",children:[]},{level:3,title:"Zip(压缩)🍒",slug:"zip-压缩",link:"#zip-压缩",children:[]},{level:3,title:"Lrzsz(上传文件)🎁",slug:"lrzsz-上传文件",link:"#lrzsz-上传文件",children:[]},{level:3,title:"Vim🐸",slug:"vim",link:"#vim",children:[]},{level:3,title:"Awk🐯",slug:"awk",link:"#awk",children:[]}]}],path:"/study/linux/linux.html",pathLocale:"/",extraFields:[]},{title:"Mysql",headers:[{level:2,title:"安装",slug:"安装",link:"#安装",children:[{level:3,title:"yum包",slug:"yum包",link:"#yum包",children:[]}]},{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Sql强化",slug:"sql强化",link:"#sql强化",children:[{level:3,title:"计算排名sql",slug:"计算排名sql",link:"#计算排名sql",children:[]}]},{level:2,title:"Mysql基本优化🏩",slug:"mysql基本优化",link:"#mysql基本优化",children:[]},{level:2,title:"索引🌈",slug:"索引",link:"#索引",children:[]},{level:2,title:"索引类型🍉",slug:"索引类型",link:"#索引类型",children:[]},{level:2,title:"事务👻",slug:"事务",link:"#事务",children:[{level:3,title:"特性ACID⭐",slug:"特性acid",link:"#特性acid",children:[]},{level:3,title:"隔离级别🏧",slug:"隔离级别",link:"#隔离级别",children:[]}]},{level:2,title:"锁🍑",slug:"锁",link:"#锁",children:[{level:3,title:"乐观锁👻",slug:"乐观锁",link:"#乐观锁",children:[]},{level:3,title:"自旋锁(乐观锁递归)🍋",slug:"自旋锁-乐观锁递归",link:"#自旋锁-乐观锁递归",children:[]}]},{level:2,title:"备份🍉",slug:"备份",link:"#备份",children:[{level:3,title:"定时备份命令🪲",slug:"定时备份命令",link:"#定时备份命令",children:[]},{level:3,title:"备份脚本😎",slug:"备份脚本",link:"#备份脚本",children:[]}]},{level:2,title:"Docker🍊",slug:"docker",link:"#docker",children:[]},{level:2,title:"读写分离👏",slug:"读写分离",link:"#读写分离",children:[]},{level:2,title:"优化",slug:"优化",link:"#优化",children:[]},{level:2,title:"快速模拟数据测试",slug:"快速模拟数据测试",link:"#快速模拟数据测试",children:[{level:3,title:"1.创建数据库",slug:"_1-创建数据库",link:"#_1-创建数据库",children:[]},{level:3,title:"2.创建表",slug:"_2-创建表",link:"#_2-创建表",children:[]},{level:3,title:"3.插入数据",slug:"_3-插入数据",link:"#_3-插入数据",children:[]}]}],path:"/study/linux/mysql.html",pathLocale:"/",extraFields:[]},{title:"Nginx",headers:[{level:2,title:"配置😎",slug:"配置",link:"#配置",children:[]}],path:"/study/linux/nginx.html",pathLocale:"/",extraFields:[]},{title:"网络",headers:[{level:2,title:"通信协议🐔",slug:"通信协议",link:"#通信协议",children:[{level:3,title:"RPC🍅",slug:"rpc",link:"#rpc",children:[]},{level:3,title:"HTTP🍒",slug:"http",link:"#http",children:[]}]}],path:"/study/linux/server.html",pathLocale:"/",extraFields:[]},{title:"Shell",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"开始🍎",slug:"开始",link:"#开始",children:[]},{level:2,title:"组合命令🐷",slug:"组合命令",link:"#组合命令",children:[]},{level:2,title:"shell参数🎈",slug:"shell参数",link:"#shell参数",children:[]}],path:"/study/linux/shell.html",pathLocale:"/",extraFields:[]},{title:"Try",headers:[],path:"/study/try/",pathLocale:"/",extraFields:[]},{title:"Antlr",headers:[{level:2,title:"介绍🍇",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"符号作用🍎",slug:"符号作用",link:"#符号作用",children:[]},{level:2,title:"示例🌟",slug:"示例",link:"#示例",children:[{level:3,title:"JSON💞",slug:"json",link:"#json",children:[]},{level:3,title:"ORM🍏",slug:"orm",link:"#orm",children:[]}]}],path:"/study/try/antlr.html",pathLocale:"/",extraFields:[]},{title:"Flutter",headers:[{level:2,title:"介绍💔",slug:"介绍💔",link:"#介绍💔",children:[]},{level:2,title:"镜像💔",slug:"镜像💔",link:"#镜像💔",children:[]},{level:2,title:"项目🐷",slug:"项目🐷",link:"#项目🐷",children:[]},{level:2,title:"官方组件在线示例",slug:"官方组件在线示例",link:"#官方组件在线示例",children:[]},{level:2,title:"明星组件库",slug:"明星组件库",link:"#明星组件库",children:[{level:3,title:"共享数据",slug:"共享数据",link:"#共享数据",children:[]},{level:3,title:"状态库",slug:"状态库",link:"#状态库",children:[]},{level:3,title:"轮播库",slug:"轮播库",link:"#轮播库",children:[]},{level:3,title:"通知库",slug:"通知库",link:"#通知库",children:[]},{level:3,title:"滑块库",slug:"滑块库",link:"#滑块库",children:[]},{level:3,title:"位置库",slug:"位置库",link:"#位置库",children:[]},{level:3,title:"文字库",slug:"文字库",link:"#文字库",children:[]},{level:3,title:"数据库",slug:"数据库",link:"#数据库",children:[]},{level:3,title:"图标库",slug:"图标库",link:"#图标库",children:[]},{level:3,title:"加载动画库",slug:"加载动画库",link:"#加载动画库",children:[]},{level:3,title:"无限滚动库",slug:"无限滚动库",link:"#无限滚动库",children:[]},{level:3,title:"时间选择",slug:"时间选择",link:"#时间选择",children:[]},{level:3,title:"表情库",slug:"表情库",link:"#表情库",children:[]},{level:3,title:"组件动画库",slug:"组件动画库",link:"#组件动画库",children:[]},{level:3,title:"其他库",slug:"其他库",link:"#其他库",children:[]}]},{level:2,title:"介绍🌟",slug:"介绍🌟",link:"#介绍🌟",children:[{level:3,title:"布局介绍⛪️",slug:"布局介绍⛪️",link:"#布局介绍⛪️",children:[]},{level:3,title:"组件组合常用😎",slug:"组件组合常用😎",link:"#组件组合常用😎",children:[]},{level:3,title:"AS插件🌅",slug:"as插件🌅",link:"#as插件🌅",children:[]},{level:3,title:"路由🌈",slug:"路由🌈",link:"#路由🌈",children:[]},{level:3,title:"插件👏",slug:"插件👏",link:"#插件👏",children:[]}]},{level:2,title:"必须安装🐷",slug:"必须安装🐷",link:"#必须安装🐷",children:[]},{level:2,title:"组件😄",slug:"组件😄",link:"#组件😄",children:[{level:3,title:"IgnorePointer😆",slug:"ignorepointer😆",link:"#ignorepointer😆",children:[]}]},{level:2,title:"GetX🍏",slug:"getx🍏",link:"#getx🍏",children:[{level:3,title:"动画操作😃",slug:"动画操作😃",link:"#动画操作😃",children:[]},{level:3,title:"文档🌅",slug:"文档🌅",link:"#文档🌅",children:[]},{level:3,title:"常用Api❤️",slug:"常用api❤️",link:"#常用api❤️",children:[]}]},{level:2,title:"Idea模板💒",slug:"idea模板💒",link:"#idea模板💒",children:[]}],path:"/study/try/flutter.html",pathLocale:"/",extraFields:[]},{title:"Python",headers:[{level:2,title:"介绍😎",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"pip镜像设置✋",slug:"pip镜像设置",link:"#pip镜像设置",children:[]},{level:2,title:"Game🎁",slug:"game",link:"#game",children:[]},{level:2,title:"开源库🚩",slug:"开源库",link:"#开源库",children:[]},{level:2,title:"Pygame🍇",slug:"pygame",link:"#pygame",children:[{level:3,title:"介绍🌟",slug:"介绍-1",link:"#介绍-1",children:[]},{level:3,title:"图片加载⭐",slug:"图片加载",link:"#图片加载",children:[]},{level:3,title:"上下左右移动事件🍉",slug:"上下左右移动事件",link:"#上下左右移动事件",children:[]},{level:3,title:"碰撞处理😎",slug:"碰撞处理",link:"#碰撞处理",children:[]}]},{level:2,title:"爬虫",slug:"爬虫",link:"#爬虫",children:[{level:3,title:"基本示例",slug:"基本示例",link:"#基本示例",children:[]},{level:3,title:"标签获取",slug:"标签获取",link:"#标签获取",children:[]}]},{level:2,title:"Jwt使用",slug:"jwt使用",link:"#jwt使用",children:[]},{level:2,title:"介绍",slug:"介绍-2",link:"#介绍-2",children:[{level:3,title:"图片加载",slug:"图片加载-1",link:"#图片加载-1",children:[]},{level:3,title:"上下左右移动事件",slug:"上下左右移动事件-1",link:"#上下左右移动事件-1",children:[]},{level:3,title:"碰撞处理",slug:"碰撞处理-1",link:"#碰撞处理-1",children:[]}]}],path:"/study/try/python.html",pathLocale:"/",extraFields:[]},{title:"Rust",headers:[{level:2,title:"镜像源🍊",slug:"镜像源",link:"#镜像源",children:[]},{level:2,title:"描述🍑",slug:"描述",link:"#描述",children:[]},{level:2,title:"介绍🐯",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"基本语法👏",slug:"基本语法",link:"#基本语法",children:[{level:3,title:"变量👻",slug:"变量",link:"#变量",children:[]},{level:3,title:"流程控制💔",slug:"流程控制",link:"#流程控制",children:[]},{level:3,title:"三元表达式💔",slug:"三元表达式",link:"#三元表达式",children:[]},{level:3,title:"列表🍅",slug:"列表",link:"#列表",children:[]},{level:3,title:"Map🐷",slug:"map",link:"#map",children:[]}]},{level:2,title:"开源库🍇",slug:"开源库",link:"#开源库",children:[{level:3,title:"跨平台桌面框架🐔",slug:"跨平台桌面框架",link:"#跨平台桌面框架",children:[]},{level:3,title:"前端框架💢",slug:"前端框架",link:"#前端框架",children:[]},{level:3,title:"后端框架✋",slug:"后端框架",link:"#后端框架",children:[]},{level:3,title:"WebSocket💞",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"关键字👻",slug:"关键字",link:"#关键字",children:[{level:3,title:"unwrap😎",slug:"unwrap",link:"#unwrap",children:[]}]},{level:2,title:"结尾👏",slug:"结尾",link:"#结尾",children:[]}],path:"/study/try/rust.html",pathLocale:"/",extraFields:[]},{title:"Web",headers:[],path:"/study/web/",pathLocale:"/",extraFields:[]},{title:"Axios",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Vue3插件玩法🍒",slug:"vue3插件玩法",link:"#vue3插件玩法",children:[]},{level:2,title:"Npm基本用法💔",slug:"npm基本用法",link:"#npm基本用法",children:[{level:3,title:"Http配置🌟",slug:"http配置",link:"#http配置",children:[]},{level:3,title:"Api配置🍎",slug:"api配置",link:"#api配置",children:[]}]}],path:"/study/web/axios.html",pathLocale:"/",extraFields:[]},{title:"Css",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"Css配置🪲",slug:"css配置",link:"#css配置",children:[{level:3,title:"css动画库😎",slug:"css动画库",link:"#css动画库",children:[]}]},{level:2,title:"Flex布局",slug:"flex布局",link:"#flex布局",children:[{level:3,title:"示例",slug:"示例",link:"#示例",children:[]}]}],path:"/study/web/css.html",pathLocale:"/",extraFields:[]},{title:"Electron",headers:[{level:2,title:"介绍💢",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"安装🍇",slug:"安装",link:"#安装",children:[]},{level:2,title:"问题🍎",slug:"问题",link:"#问题",children:[]},{level:2,title:"通信🐸",slug:"通信",link:"#通信",children:[]},{level:2,title:"vue3 + Electron🏧",slug:"vue3-electron",link:"#vue3-electron",children:[]},{level:2,title:"进程通信💞",slug:"进程通信",link:"#进程通信",children:[{level:3,title:"暴露给渲染进程的API🍎",slug:"暴露给渲染进程的api",link:"#暴露给渲染进程的api",children:[]},{level:3,title:"主进程定义的通道👏",slug:"主进程定义的通道",link:"#主进程定义的通道",children:[]},{level:3,title:"API🍒",slug:"api",link:"#api",children:[]}]},{level:2,title:"打包🍉",slug:"打包",link:"#打包",children:[]},{level:2,title:"项目👏",slug:"项目",link:"#项目",children:[]}],path:"/study/web/electron.html",pathLocale:"/",extraFields:[]},{title:"Node",headers:[{level:2,title:"介绍😃",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"设置npm镜像😆",slug:"设置npm镜像",link:"#设置npm镜像",children:[]},{level:2,title:"javaScript👏",slug:"javascript",link:"#javascript",children:[]},{level:2,title:"linux安装npm👊",slug:"linux安装npm",link:"#linux安装npm",children:[]},{level:2,title:"linux安装yarn👻",slug:"linux安装yarn",link:"#linux安装yarn",children:[]},{level:2,title:"js数据存储🎁",slug:"js数据存储",link:"#js数据存储",children:[{level:3,title:"JSON转换🍅",slug:"json转换",link:"#json转换",children:[]},{level:3,title:"Token保存代码👏",slug:"token保存代码",link:"#token保存代码",children:[]},{level:3,title:"1:持久化存储 localStorage✋",slug:"_1-持久化存储-localstorage",link:"#_1-持久化存储-localstorage",children:[]},{level:3,title:"2:会话存储 sessionStorage💢",slug:"_2-会话存储-sessionstorage",link:"#_2-会话存储-sessionstorage",children:[]},{level:3,title:"webSocket🍉",slug:"websocket",link:"#websocket",children:[]}]},{level:2,title:"开源库✋",slug:"开源库",link:"#开源库",children:[]}],path:"/study/web/node.html",pathLocale:"/",extraFields:[]},{title:"Vite",headers:[{level:2,title:"介绍👊",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"配置相对路径🍅",slug:"配置相对路径",link:"#配置相对路径",children:[]},{level:2,title:"创建vue项目🪲",slug:"创建vue项目",link:"#创建vue项目",children:[]},{level:2,title:"scss🍅",slug:"scss",link:"#scss",children:[]},{level:2,title:"常见用法🍅",slug:"常见用法",link:"#常见用法",children:[{level:3,title:"导入项目内静态资源🐸",slug:"导入项目内静态资源",link:"#导入项目内静态资源",children:[]}]}],path:"/study/web/vite.html",pathLocale:"/",extraFields:[]},{title:"Vue",headers:[{level:2,title:"介绍💞",slug:"介绍",link:"#介绍",children:[]},{level:2,title:"教程🐟",slug:"教程",link:"#教程",children:[{level:3,title:"插槽slot🍏",slug:"插槽slot",link:"#插槽slot",children:[]},{level:3,title:"复用组件🐯",slug:"复用组件",link:"#复用组件",children:[]}]},{level:2,title:"插件🍎",slug:"插件",link:"#插件",children:[{level:3,title:"桌面端🐯",slug:"桌面端",link:"#桌面端",children:[]},{level:3,title:"移动端😎",slug:"移动端",link:"#移动端",children:[]},{level:3,title:"可视化组件💢",slug:"可视化组件",link:"#可视化组件",children:[]},{level:3,title:"创建项目😄",slug:"创建项目",link:"#创建项目",children:[]}]},{level:2,title:"事件👏",slug:"事件",link:"#事件",children:[{level:3,title:"指针事件😃",slug:"指针事件",link:"#指针事件",children:[]}]},{level:2,title:"组件库🍊",slug:"组件库",link:"#组件库",children:[{level:3,title:"VueCss⭐",slug:"vuecss",link:"#vuecss",children:[]},{level:3,title:"Markdown👻",slug:"markdown",link:"#markdown",children:[]},{level:3,title:"复制工具🍊",slug:"复制工具",link:"#复制工具",children:[]}]}],path:"/study/web/vue.html",pathLocale:"/",extraFields:[]},{title:"Chess",headers:[{level:2,title:"棋牌",slug:"棋牌",link:"#棋牌",children:[]},{level:2,title:"伪代码",slug:"伪代码",link:"#伪代码",children:[]}],path:"/study/game/design/chess.html",pathLocale:"/",extraFields:[]},{title:"设计模式",headers:[{level:2,title:"介绍",slug:"介绍",link:"#介绍",children:[]}],path:"/study/java/design-mode/design-mode.html",pathLocale:"/",extraFields:[]},{title:"代理模式",headers:[{level:2,title:"jdk代理",slug:"jdk代理",link:"#jdk代理",children:[]},{level:2,title:"cglib代理",slug:"cglib代理",link:"#cglib代理",children:[]}],path:"/study/java/design-mode/proxy.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"Design",headers:[],path:"/study/game/design/",pathLocale:"/",extraFields:[]},{title:"Design Mode",headers:[],path:"/study/java/design-mode/",pathLocale:"/",extraFields:[]},{title:"分类",headers:[],path:"/category/",pathLocale:"/",extraFields:[]},{title:"Category",headers:[],path:"/en/category/",pathLocale:"/",extraFields:[]},{title:"标签",headers:[],path:"/tag/",pathLocale:"/",extraFields:[]},{title:"Tag",headers:[],path:"/en/tag/",pathLocale:"/",extraFields:[]},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:[]},{title:"Articles",headers:[],path:"/en/article/",pathLocale:"/",extraFields:[]},{title:"星标",headers:[],path:"/star/",pathLocale:"/",extraFields:[]},{title:"Star",headers:[],path:"/en/star/",pathLocale:"/",extraFields:[]},{title:"时间轴",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"Timeline",headers:[],path:"/en/timeline/",pathLocale:"/",extraFields:[]}],p3=K(u3),d3=()=>p3,h3=({searchIndex:e,routeLocale:n,query:t,maxSuggestions:s})=>{const a=b(()=>e.value.filter(l=>l.pathLocale===n.value));return b(()=>{const l=t.value.trim().toLowerCase();if(!l)return[];const o=[],c=(r,u)=>{Ni(l,[u.title])&&o.push({link:`${r.path}#${u.slug}`,title:r.title,header:u.title});for(const p of u.children){if(o.length>=s.value)return;c(r,p)}};for(const r of a.value){if(o.length>=s.value)break;if(Ni(l,[r.title,...r.extraFields])){o.push({link:r.path,title:r.title});continue}for(const u of r.headers){if(o.length>=s.value)break;c(r,u)}}return o})},f3=e=>{const n=K(0);return{focusIndex:n,focusNext:()=>{n.value<e.value.length-1?n.value+=1:n.value=0},focusPrev:()=>{n.value>0?n.value-=1:n.value=e.value.length-1}}},g3=H({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(e){const{locales:n,hotKeys:t,maxSuggestions:s}=Np(e),a=Jn(),l=hn(),o=d3(),c=K(null),r=K(!1),u=K(""),p=b(()=>n.value[l.value]??{}),d=h3({searchIndex:o,routeLocale:l,query:u,maxSuggestions:s}),{focusIndex:h,focusNext:f,focusPrev:k}=f3(d);c3({input:c,hotKeys:t});const _=b(()=>r.value&&!!d.value.length),w=()=>{_.value&&k()},y=()=>{_.value&&f()},E=v=>{if(!_.value)return;const T=d.value[v];T&&a.push(T.link).then(()=>{u.value="",h.value=0})};return()=>i("form",{class:"search-box",role:"search"},[i("input",{ref:c,type:"search",placeholder:p.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>r.value=!0,onBlur:()=>r.value=!1,onInput:v=>u.value=v.target.value,onKeydown:v=>{switch(v.key){case"ArrowUp":{w();break}case"ArrowDown":{y();break}case"Enter":{v.preventDefault(),E(h.value);break}}}}),_.value&&i("ul",{class:"suggestions",onMouseleave:()=>h.value=-1},d.value.map(({link:v,title:T,header:O},L)=>i("li",{class:["suggestion",{focus:h.value===L}],onMouseenter:()=>h.value=L,onMousedown:()=>E(L)},i("a",{href:v,onClick:j=>j.preventDefault()},[i("span",{class:"page-title"},T),O&&i("span",{class:"page-header"},`> ${O}`)]))))])}});var m3=["s","/"],k3={};const v3=k3,y3=m3,b3=5,w3=Ge({enhance({app:e}){e.component("SearchBox",n=>i(g3,{locales:v3,hotKeys:y3,maxSuggestions:b3,...n}))}}),_3=(e,n)=>{const t=e.__vccOpts||e;for(const[s,a]of n)t[s]=a;return t},x3={class:"my"},E3={__name:"MyHello",setup(e){return console.log("Hello 组件！"),(n,t)=>(Fd(),Hd("div",x3))}},L3=_3(E3,[["__scopeId","data-v-78c1a974"],["__file","MyHello.vue"]]),T3=Ge({enhance:({app:e,router:n,siteData:t})=>{e.component("MyComponent",L3)}}),qs=[s1,G1,Z1,l0,r0,d0,m0,w0,A0,H0,B0,tf,a3,w3,T3],C3=JSON.parse(`{"base":"/","lang":"en-US","title":"LiCheng Blog","description":"vuepress-theme-hope 的演示","head":[["script",{"src":"https://www.googletagmanager.com/gtag/js?id=G-Y1CRKZRBH8","async":true}],["script",{},"  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n\\n  gtag('config', 'G-Y1CRKZRBH8');"]],"locales":{"/":{"lang":"zh-CN"},"/en/":{"lang":"en-US"}}}`);var Vt=je(C3),S3=x2,A3=()=>{const e=K2({history:S3(Fl("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(n,t,s)=>s||(n.hash?{el:n.hash}:{top:0})});return e.beforeResolve(async(n,t)=>{if(n.path!==t.path||t===Cn){const s=at(n.path);if(s.path!==n.path)return s.path;const a=await s.loader();n.meta={...s.meta,_pageChunk:a}}else n.path===t.path&&(n.meta=t.meta)}),e},I3=e=>{e.component("ClientOnly",da),e.component("Content",oc),e.component("RouteLink",Ce)},P3=(e,n,t)=>{const s=b(()=>n.currentRoute.value.path),a=Sl((w,y)=>({get(){return w(),n.currentRoute.value.meta._pageChunk},set(E){n.currentRoute.value.meta._pageChunk=E,y()}})),l=b(()=>Qn.resolveLayouts(t)),o=b(()=>Qn.resolveRouteLocale(Vt.value.locales,s.value)),c=b(()=>Qn.resolveSiteLocaleData(Vt.value,o.value)),r=b(()=>a.value.comp),u=b(()=>a.value.data),p=b(()=>u.value.frontmatter),d=b(()=>Qn.resolvePageHeadTitle(u.value,c.value)),h=b(()=>Qn.resolvePageHead(d.value,p.value,c.value)),f=b(()=>Qn.resolvePageLang(u.value,c.value)),k=b(()=>Qn.resolvePageLayout(u.value,l.value)),_={layouts:l,pageData:u,pageComponent:r,pageFrontmatter:p,pageHead:h,pageHeadTitle:d,pageLang:f,pageLayout:k,redirects:nl,routeLocale:o,routePath:s,routes:os,siteData:Vt,siteLocaleData:c};return e.provide(Hl,_),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>h.value},$headTitle:{get:()=>d.value},$lang:{get:()=>f.value},$page:{get:()=>u.value},$routeLocale:{get:()=>o.value},$site:{get:()=>Vt.value},$siteLocale:{get:()=>c.value},$withBase:{get:()=>xe}}),_},D3=()=>{const e=X2(),n=Vl();let t=[];const s=()=>{e.value.forEach(o=>{const c=O3(o);c&&t.push(c)})},a=()=>{const o=[];return e.value.forEach(c=>{const r=R3(c);r&&o.push(r)}),o},l=()=>{document.documentElement.lang=n.value;const o=a();t.forEach((c,r)=>{const u=o.findIndex(p=>c.isEqualNode(p));u===-1?(c.remove(),delete t[r]):o.splice(u,1)}),o.forEach(c=>document.head.appendChild(c)),t=[...t.filter(c=>!!c),...o]};un(Z2,l),ye(()=>{s(),pe(e,l,{immediate:!1})})},O3=([e,n,t=""])=>{const s=Object.entries(n).map(([c,r])=>ke(r)?`[${c}=${JSON.stringify(r)}]`:r===!0?`[${c}]`:"").join(""),a=`head > ${e}${s}`;return Array.from(document.querySelectorAll(a)).find(c=>c.innerText===t)||null},R3=([e,n,t])=>{if(!ke(e))return null;const s=document.createElement(e);return ys(n)&&Object.entries(n).forEach(([a,l])=>{ke(l)?s.setAttribute(a,l):l===!0&&s.setAttribute(a,"")}),ke(t)&&s.appendChild(document.createTextNode(t)),s},M3=Dh,j3=async()=>{var t;const e=M3({name:"Vuepress",setup(){var l;D3();for(const o of qs)(l=o.setup)==null||l.call(o);const s=qs.flatMap(({rootComponents:o=[]})=>o.map(c=>i(c))),a=Q2();return()=>[i(a.value),s]}}),n=A3();I3(e),P3(e,n,qs);for(const s of qs)await((t=s.enhance)==null?void 0:t.call(s,{app:e,router:n,siteData:Vt}));return e.use(n),{app:e,router:n}};j3().then(({app:e,router:n})=>{n.isReady().then(()=>{e.mount("#app")})});export{_3 as _,Or as a,Ae as b,Hd as c,j3 as createVueApp,Rr as d,F3 as e,Fd as o,cn as r,Kp as w};

import{a as ce,j as E,T as dr,D as q}from"./Task.stories-2298b2b2.js";import{r as C,R as pr}from"./index-8db94870.js";import{r as yr}from"./index-8ce4a492.js";var Wt={exports:{}},Kt={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=C;function vr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hr=typeof Object.is=="function"?Object.is:vr,mr=X.useState,br=X.useEffect,gr=X.useLayoutEffect,Sr=X.useDebugValue;function wr(e,t){var r=t(),n=mr({inst:{value:r,getSnapshot:t}}),o=n[0].inst,i=n[1];return gr(function(){o.value=r,o.getSnapshot=t,Ie(o)&&i({inst:o})},[e,r,t]),br(function(){return Ie(o)&&i({inst:o}),e(function(){Ie(o)&&i({inst:o})})},[e]),Sr(r),r}function Ie(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!hr(e,r)}catch{return!0}}function Or(e,t){return t()}var Pr=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Or:wr;Kt.useSyncExternalStore=X.useSyncExternalStore!==void 0?X.useSyncExternalStore:Pr;Wt.exports=Kt;var kr=Wt.exports,Vt={exports:{}},zt={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=C,Er=kr;function xr(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $r=typeof Object.is=="function"?Object.is:xr,jr=Er.useSyncExternalStore,Ar=ye.useRef,_r=ye.useEffect,Tr=ye.useMemo,Mr=ye.useDebugValue;zt.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Ar(null);if(i.current===null){var u={hasValue:!1,value:null};i.current=u}else u=i.current;i=Tr(function(){function s(p){if(!a){if(a=!0,f=p,p=n(p),o!==void 0&&u.hasValue){var y=u.value;if(o(y,p))return d=y}return d=p}if(y=d,$r(f,p))return y;var v=n(p);return o!==void 0&&o(y,v)?y:(f=p,d=v)}var a=!1,f,d,l=r===void 0?null:r;return[function(){return s(t())},l===null?void 0:function(){return s(l())}]},[t,r,n,o]);var c=jr(e,i[0],i[1]);return _r(function(){u.hasValue=!0,u.value=c},[c]),Mr(c),c};Vt.exports=zt;var Cr=Vt.exports;function Rr(e){e()}let Ft=Rr;const Nr=e=>Ft=e,Ir=()=>Ft,W=C.createContext(null);function qt(){return C.useContext(W)}const Dr=()=>{throw new Error("uSES not initialized!")};let Ut=Dr;const Lr=e=>{Ut=e},Wr=(e,t)=>e===t;function Kr(e=W){const t=e===W?qt:()=>C.useContext(e);return function(n,o=Wr){const{store:i,subscription:u,getServerState:c}=t(),s=Ut(u.addNestedSub,i.getState,c||i.getState,n,o);return C.useDebugValue(s),s}}const st=Kr();var Bt={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=typeof Symbol=="function"&&Symbol.for,Ye=P?Symbol.for("react.element"):60103,Je=P?Symbol.for("react.portal"):60106,ve=P?Symbol.for("react.fragment"):60107,he=P?Symbol.for("react.strict_mode"):60108,me=P?Symbol.for("react.profiler"):60114,be=P?Symbol.for("react.provider"):60109,ge=P?Symbol.for("react.context"):60110,Qe=P?Symbol.for("react.async_mode"):60111,Se=P?Symbol.for("react.concurrent_mode"):60111,we=P?Symbol.for("react.forward_ref"):60112,Oe=P?Symbol.for("react.suspense"):60113,Vr=P?Symbol.for("react.suspense_list"):60120,Pe=P?Symbol.for("react.memo"):60115,ke=P?Symbol.for("react.lazy"):60116,zr=P?Symbol.for("react.block"):60121,Fr=P?Symbol.for("react.fundamental"):60117,qr=P?Symbol.for("react.responder"):60118,Ur=P?Symbol.for("react.scope"):60119;function j(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ye:switch(e=e.type,e){case Qe:case Se:case ve:case me:case he:case Oe:return e;default:switch(e=e&&e.$$typeof,e){case ge:case we:case ke:case Pe:case be:return e;default:return t}}case Je:return t}}}function Xt(e){return j(e)===Se}g.AsyncMode=Qe;g.ConcurrentMode=Se;g.ContextConsumer=ge;g.ContextProvider=be;g.Element=Ye;g.ForwardRef=we;g.Fragment=ve;g.Lazy=ke;g.Memo=Pe;g.Portal=Je;g.Profiler=me;g.StrictMode=he;g.Suspense=Oe;g.isAsyncMode=function(e){return Xt(e)||j(e)===Qe};g.isConcurrentMode=Xt;g.isContextConsumer=function(e){return j(e)===ge};g.isContextProvider=function(e){return j(e)===be};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ye};g.isForwardRef=function(e){return j(e)===we};g.isFragment=function(e){return j(e)===ve};g.isLazy=function(e){return j(e)===ke};g.isMemo=function(e){return j(e)===Pe};g.isPortal=function(e){return j(e)===Je};g.isProfiler=function(e){return j(e)===me};g.isStrictMode=function(e){return j(e)===he};g.isSuspense=function(e){return j(e)===Oe};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ve||e===Se||e===me||e===he||e===Oe||e===Vr||typeof e=="object"&&e!==null&&(e.$$typeof===ke||e.$$typeof===Pe||e.$$typeof===be||e.$$typeof===ge||e.$$typeof===we||e.$$typeof===Fr||e.$$typeof===qr||e.$$typeof===Ur||e.$$typeof===zr)};g.typeOf=j;Bt.exports=g;var Br=Bt.exports,Gt=Br,Xr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ht={};Ht[Gt.ForwardRef]=Xr;Ht[Gt.Memo]=Gr;var S={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=Symbol.for("react.element"),et=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),xe=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),je=Symbol.for("react.provider"),Ae=Symbol.for("react.context"),Hr=Symbol.for("react.server_context"),_e=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Yr=Symbol.for("react.offscreen"),Yt;Yt=Symbol.for("react.module.reference");function A(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ze:switch(e=e.type,e){case Ee:case $e:case xe:case Te:case Me:return e;default:switch(e=e&&e.$$typeof,e){case Hr:case Ae:case _e:case Re:case Ce:case je:return e;default:return t}}case et:return t}}}S.ContextConsumer=Ae;S.ContextProvider=je;S.Element=Ze;S.ForwardRef=_e;S.Fragment=Ee;S.Lazy=Re;S.Memo=Ce;S.Portal=et;S.Profiler=$e;S.StrictMode=xe;S.Suspense=Te;S.SuspenseList=Me;S.isAsyncMode=function(){return!1};S.isConcurrentMode=function(){return!1};S.isContextConsumer=function(e){return A(e)===Ae};S.isContextProvider=function(e){return A(e)===je};S.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ze};S.isForwardRef=function(e){return A(e)===_e};S.isFragment=function(e){return A(e)===Ee};S.isLazy=function(e){return A(e)===Re};S.isMemo=function(e){return A(e)===Ce};S.isPortal=function(e){return A(e)===et};S.isProfiler=function(e){return A(e)===$e};S.isStrictMode=function(e){return A(e)===xe};S.isSuspense=function(e){return A(e)===Te};S.isSuspenseList=function(e){return A(e)===Me};S.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ee||e===$e||e===xe||e===Te||e===Me||e===Yr||typeof e=="object"&&e!==null&&(e.$$typeof===Re||e.$$typeof===Ce||e.$$typeof===je||e.$$typeof===Ae||e.$$typeof===_e||e.$$typeof===Yt||e.getModuleId!==void 0)};S.typeOf=A;function Jr(){const e=Ir();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,i=r={callback:n,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const ft={notify(){},get:()=>[]};function Qr(e,t){let r,n=ft;function o(d){return s(),n.subscribe(d)}function i(){n.notify()}function u(){f.onStateChange&&f.onStateChange()}function c(){return!!r}function s(){r||(r=t?t.addNestedSub(u):e.subscribe(u),n=Jr())}function a(){r&&(r(),r=void 0,n.clear(),n=ft)}const f={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:u,isSubscribed:c,trySubscribe:s,tryUnsubscribe:a,getListeners:()=>n};return f}const Zr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",en=Zr?C.useLayoutEffect:C.useEffect;function tn({store:e,context:t,children:r,serverState:n}){const o=C.useMemo(()=>{const c=Qr(e);return{store:e,subscription:c,getServerState:n?()=>n:void 0}},[e,n]),i=C.useMemo(()=>e.getState(),[e]);en(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),i!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,i]);const u=t||W;return pr.createElement(u.Provider,{value:o},r)}function Jt(e=W){const t=e===W?qt:()=>C.useContext(e);return function(){const{store:n}=t();return n}}const rn=Jt();function nn(e=W){const t=e===W?rn:Jt(e);return function(){return t().dispatch}}const on=nn();Lr(Cr.useSyncExternalStoreWithSelector);Nr(yr.unstable_batchedUpdates);function M(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function K(e){return!!e&&!!e[O]}function N(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===yn}(e)||Array.isArray(e)||!!e[mt]||!!(!((t=e.constructor)===null||t===void 0)&&t[mt])||tt(e)||rt(e))}function z(e,t,r){r===void 0&&(r=!1),Y(e)===0?(r?Object.keys:B)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function Y(e){var t=e[O];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:tt(e)?2:rt(e)?3:0}function U(e,t){return Y(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function an(e,t){return Y(e)===2?e.get(t):e[t]}function Qt(e,t,r){var n=Y(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Zt(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function tt(e){return dn&&e instanceof Map}function rt(e){return pn&&e instanceof Set}function V(e){return e.o||e.t}function nt(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=tr(e);delete t[O];for(var r=B(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function ot(e,t){return t===void 0&&(t=!1),it(e)||K(e)||!N(e)||(Y(e)>1&&(e.set=e.add=e.clear=e.delete=un),Object.freeze(e),t&&z(e,function(r,n){return ot(n,!0)},!0)),e}function un(){M(2)}function it(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function R(e){var t=Ge[e];return t||M(18,e),t}function cn(e,t){Ge[e]||(Ge[e]=t)}function Ue(){return ie}function De(e,t){t&&(R("Patches"),e.u=[],e.s=[],e.v=t)}function se(e){Be(e),e.p.forEach(sn),e.p=null}function Be(e){e===ie&&(ie=e.l)}function lt(e){return ie={p:[],l:ie,h:e,m:!0,_:0}}function sn(e){var t=e[O];t.i===0||t.i===1?t.j():t.g=!0}function Le(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||R("ES5").S(t,e,n),n?(r[O].P&&(se(t),M(4)),N(e)&&(e=fe(t,e),t.l||le(t,e)),t.u&&R("Patches").M(r[O].t,e,t.u,t.s)):e=fe(t,r,[]),se(t),t.u&&t.v(t.u,t.s),e!==er?e:void 0}function fe(e,t,r){if(it(t))return t;var n=t[O];if(!n)return z(t,function(c,s){return dt(e,n,t,c,s,r)},!0),t;if(n.A!==e)return t;if(!n.P)return le(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=nt(n.k):n.o,i=o,u=!1;n.i===3&&(i=new Set(o),o.clear(),u=!0),z(i,function(c,s){return dt(e,n,o,c,s,r,u)}),le(e,o,!1),r&&e.u&&R("Patches").N(n,r,e.u,e.s)}return n.o}function dt(e,t,r,n,o,i,u){if(K(o)){var c=fe(e,o,i&&t&&t.i!==3&&!U(t.R,n)?i.concat(n):void 0);if(Qt(r,n,c),!K(c))return;e.m=!1}else u&&r.add(o);if(N(o)&&!it(o)){if(!e.h.D&&e._<1)return;fe(e,o),t&&t.A.l||le(e,o)}}function le(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&ot(t,r)}function We(e,t){var r=e[O];return(r?V(r):e)[t]}function pt(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function I(e){e.P||(e.P=!0,e.l&&I(e.l))}function Ke(e){e.o||(e.o=nt(e.t))}function Xe(e,t,r){var n=tt(t)?R("MapSet").F(t,r):rt(t)?R("MapSet").T(t,r):e.O?function(o,i){var u=Array.isArray(o),c={i:u?1:0,A:i?i.A:Ue(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},s=c,a=ae;u&&(s=[c],a=ee);var f=Proxy.revocable(s,a),d=f.revoke,l=f.proxy;return c.k=l,c.j=d,l}(t,r):R("ES5").J(t,r);return(r?r.A:Ue()).p.push(n),n}function fn(e){return K(e)||M(22,e),function t(r){if(!N(r))return r;var n,o=r[O],i=Y(r);if(o){if(!o.P&&(o.i<4||!R("ES5").K(o)))return o.t;o.I=!0,n=yt(r,i),o.I=!1}else n=yt(r,i);return z(n,function(u,c){o&&an(o.t,u)===c||Qt(n,u,t(c))}),i===3?new Set(n):n}(e)}function yt(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return nt(e)}function ln(){function e(i,u){var c=o[i];return c?c.enumerable=u:o[i]=c={configurable:!0,enumerable:u,get:function(){var s=this[O];return ae.get(s,i)},set:function(s){var a=this[O];ae.set(a,i,s)}},c}function t(i){for(var u=i.length-1;u>=0;u--){var c=i[u][O];if(!c.P)switch(c.i){case 5:n(c)&&I(c);break;case 4:r(c)&&I(c)}}}function r(i){for(var u=i.t,c=i.k,s=B(c),a=s.length-1;a>=0;a--){var f=s[a];if(f!==O){var d=u[f];if(d===void 0&&!U(u,f))return!0;var l=c[f],p=l&&l[O];if(p?p.t!==d:!Zt(l,d))return!0}}var y=!!u[O];return s.length!==B(u).length+(y?0:1)}function n(i){var u=i.k;if(u.length!==i.t.length)return!0;var c=Object.getOwnPropertyDescriptor(u,u.length-1);if(c&&!c.get)return!0;for(var s=0;s<u.length;s++)if(!u.hasOwnProperty(s))return!0;return!1}var o={};cn("ES5",{J:function(i,u){var c=Array.isArray(i),s=function(f,d){if(f){for(var l=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(l,""+p,e(p,!0));return l}var y=tr(d);delete y[O];for(var v=B(y),m=0;m<v.length;m++){var b=v[m];y[b]=e(b,f||!!y[b].enumerable)}return Object.create(Object.getPrototypeOf(d),y)}(c,i),a={i:c?5:4,A:u?u.A:Ue(),P:!1,I:!1,R:{},l:u,t:i,k:s,o:null,g:!1,C:!1};return Object.defineProperty(s,O,{value:a,writable:!0}),s},S:function(i,u,c){c?K(u)&&u[O].A===i&&t(i.p):(i.u&&function s(a){if(a&&typeof a=="object"){var f=a[O];if(f){var d=f.t,l=f.k,p=f.R,y=f.i;if(y===4)z(l,function(w){w!==O&&(d[w]!==void 0||U(d,w)?p[w]||s(l[w]):(p[w]=!0,I(f)))}),z(d,function(w){l[w]!==void 0||U(l,w)||(p[w]=!1,I(f))});else if(y===5){if(n(f)&&(I(f),p.length=!0),l.length<d.length)for(var v=l.length;v<d.length;v++)p[v]=!1;else for(var m=d.length;m<l.length;m++)p[m]=!0;for(var b=Math.min(l.length,d.length),h=0;h<b;h++)l.hasOwnProperty(h)||(p[h]=!0),p[h]===void 0&&s(l[h])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var vt,ie,at=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",dn=typeof Map<"u",pn=typeof Set<"u",ht=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",er=at?Symbol.for("immer-nothing"):((vt={})["immer-nothing"]=!0,vt),mt=at?Symbol.for("immer-draftable"):"__$immer_draftable",O=at?Symbol.for("immer-state"):"__$immer_state",yn=""+Object.prototype.constructor,B=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,tr=Object.getOwnPropertyDescriptors||function(e){var t={};return B(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Ge={},ae={get:function(e,t){if(t===O)return e;var r=V(e);if(!U(r,t))return function(o,i,u){var c,s=pt(i,u);return s?"value"in s?s.value:(c=s.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!N(n)?n:n===We(e.t,t)?(Ke(e),e.o[t]=Xe(e.A.h,n,e)):n},has:function(e,t){return t in V(e)},ownKeys:function(e){return Reflect.ownKeys(V(e))},set:function(e,t,r){var n=pt(V(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=We(V(e),t),i=o==null?void 0:o[O];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Zt(r,o)&&(r!==void 0||U(e.t,t)))return!0;Ke(e),I(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return We(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ke(e),I(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=V(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){M(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){M(12)}},ee={};z(ae,function(e,t){ee[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ee.deleteProperty=function(e,t){return ee.set.call(this,e,t,void 0)},ee.set=function(e,t,r){return ae.set.call(this,e[0],t,r,e[0])};var vn=function(){function e(r){var n=this;this.O=ht,this.D=!0,this.produce=function(o,i,u){if(typeof o=="function"&&typeof i!="function"){var c=i;i=o;var s=n;return function(v){var m=this;v===void 0&&(v=c);for(var b=arguments.length,h=Array(b>1?b-1:0),w=1;w<b;w++)h[w-1]=arguments[w];return s.produce(v,function(x){var _;return(_=i).call.apply(_,[m,x].concat(h))})}}var a;if(typeof i!="function"&&M(6),u!==void 0&&typeof u!="function"&&M(7),N(o)){var f=lt(n),d=Xe(n,o,void 0),l=!0;try{a=i(d),l=!1}finally{l?se(f):Be(f)}return typeof Promise<"u"&&a instanceof Promise?a.then(function(v){return De(f,u),Le(v,f)},function(v){throw se(f),v}):(De(f,u),Le(a,f))}if(!o||typeof o!="object"){if((a=i(o))===void 0&&(a=o),a===er&&(a=void 0),n.D&&ot(a,!0),u){var p=[],y=[];R("Patches").M(o,a,p,y),u(p,y)}return a}M(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(a){for(var f=arguments.length,d=Array(f>1?f-1:0),l=1;l<f;l++)d[l-1]=arguments[l];return n.produceWithPatches(a,function(p){return o.apply(void 0,[p].concat(d))})};var u,c,s=n.produce(o,i,function(a,f){u=a,c=f});return typeof Promise<"u"&&s instanceof Promise?s.then(function(a){return[a,u,c]}):[s,u,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){N(r)||M(8),K(r)&&(r=fn(r));var n=lt(this),o=Xe(this,r,void 0);return o[O].C=!0,Be(n),o},t.finishDraft=function(r,n){var o=r&&r[O],i=o.A;return De(i,n),Le(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!ht&&M(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var u=R("Patches").$;return K(r)?u(r,n):this.produce(r,function(c){return u(c,n)})},e}(),$=new vn,rr=$.produce;$.produceWithPatches.bind($);$.setAutoFreeze.bind($);$.setUseProxies.bind($);$.applyPatches.bind($);$.createDraft.bind($);$.finishDraft.bind($);function ue(e){return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ue(e)}function hn(e,t){if(ue(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ue(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mn(e){var t=hn(e,"string");return ue(t)==="symbol"?t:String(t)}function bn(e,t,r){return t=mn(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function gt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bt(Object(r),!0).forEach(function(n){bn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function k(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var St=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ve=function(){return Math.random().toString(36).substring(7).split("").join(".")},de={INIT:"@@redux/INIT"+Ve(),REPLACE:"@@redux/REPLACE"+Ve(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ve()}};function gn(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function nr(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(k(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(k(1));return r(nr)(e,t)}if(typeof e!="function")throw new Error(k(2));var o=e,i=t,u=[],c=u,s=!1;function a(){c===u&&(c=u.slice())}function f(){if(s)throw new Error(k(3));return i}function d(v){if(typeof v!="function")throw new Error(k(4));if(s)throw new Error(k(5));var m=!0;return a(),c.push(v),function(){if(m){if(s)throw new Error(k(6));m=!1,a();var h=c.indexOf(v);c.splice(h,1),u=null}}}function l(v){if(!gn(v))throw new Error(k(7));if(typeof v.type>"u")throw new Error(k(8));if(s)throw new Error(k(9));try{s=!0,i=o(i,v)}finally{s=!1}for(var m=u=c,b=0;b<m.length;b++){var h=m[b];h()}return v}function p(v){if(typeof v!="function")throw new Error(k(10));o=v,l({type:de.REPLACE})}function y(){var v,m=d;return v={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(k(11));function w(){h.next&&h.next(f())}w();var x=m(w);return{unsubscribe:x}}},v[St]=function(){return this},v}return l({type:de.INIT}),n={dispatch:l,subscribe:d,getState:f,replaceReducer:p},n[St]=y,n}function Sn(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:de.INIT});if(typeof n>"u")throw new Error(k(12));if(typeof r(void 0,{type:de.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(k(13))})}function wn(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var i=Object.keys(r),u;try{Sn(r)}catch(c){u=c}return function(s,a){if(s===void 0&&(s={}),u)throw u;for(var f=!1,d={},l=0;l<i.length;l++){var p=i[l],y=r[p],v=s[p],m=y(v,a);if(typeof m>"u")throw a&&a.type,new Error(k(14));d[p]=m,f=f||m!==v}return f=f||i.length!==Object.keys(s).length,f?d:s}}function pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function On(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(k(15))},u={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},c=t.map(function(s){return s(u)});return i=pe.apply(void 0,c)(o.dispatch),gt(gt({},o),{},{dispatch:i})}}}function or(e){var t=function(n){var o=n.dispatch,i=n.getState;return function(u){return function(c){return typeof c=="function"?c(o,i,e):u(c)}}};return t}var ir=or();ir.withExtraArgument=or;const wt=ir;var ar=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Pn=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(f){return s([a,f])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(f){a=[6,f],o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},G=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},kn=Object.defineProperty,En=Object.defineProperties,xn=Object.getOwnPropertyDescriptors,Ot=Object.getOwnPropertySymbols,$n=Object.prototype.hasOwnProperty,jn=Object.prototype.propertyIsEnumerable,Pt=function(e,t,r){return t in e?kn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},D=function(e,t){for(var r in t||(t={}))$n.call(t,r)&&Pt(e,r,t[r]);if(Ot)for(var n=0,o=Ot(t);n<o.length;n++){var r=o[n];jn.call(t,r)&&Pt(e,r,t[r])}return e},ze=function(e,t){return En(e,xn(t))},An=function(e,t,r){return new Promise(function(n,o){var i=function(s){try{c(r.next(s))}catch(a){o(a)}},u=function(s){try{c(r.throw(s))}catch(a){o(a)}},c=function(s){return s.done?n(s.value):Promise.resolve(s.value).then(i,u)};c((r=r.apply(e,t)).next())})},_n=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?pe:pe.apply(null,arguments)};function Tn(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var Mn=function(e){ar(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,G([void 0],r[0].concat(this)))):new(t.bind.apply(t,G([void 0],r.concat(this))))},t}(Array),Cn=function(e){ar(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,G([void 0],r[0].concat(this)))):new(t.bind.apply(t,G([void 0],r.concat(this))))},t}(Array);function He(e){return N(e)?rr(e,function(){}):e}function Rn(e){return typeof e=="boolean"}function Nn(){return function(t){return In(t)}}function In(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new Mn;return r&&(Rn(r)?n.push(wt):n.push(wt.withExtraArgument(r.extraArgument))),n}var Dn=!0;function ur(e){var t=Nn(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,i=r.middleware,u=i===void 0?t():i,c=r.devTools,s=c===void 0?!0:c,a=r.preloadedState,f=a===void 0?void 0:a,d=r.enhancers,l=d===void 0?void 0:d,p;if(typeof o=="function")p=o;else if(Tn(o))p=wn(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=u;typeof y=="function"&&(y=y(t));var v=On.apply(void 0,y),m=pe;s&&(m=_n(D({trace:!Dn},typeof s=="object"&&s)));var b=new Cn(v),h=b;Array.isArray(l)?h=G([v],l):typeof l=="function"&&(h=l(b));var w=m.apply(void 0,h);return nr(p,f,w)}function L(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var i=t.apply(void 0,n);if(!i)throw new Error("prepareAction did not return an object");return D(D({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function cr(e){var t={},r=[],n,o={addCase:function(i,u){var c=typeof i=="string"?i:i.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=u,o},addMatcher:function(i,u){return r.push({matcher:i,reducer:u}),o},addDefaultCase:function(i){return n=i,o}};return e(o),[t,r,n]}function Ln(e){return typeof e=="function"}function Wn(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?cr(t):[t,r,n],i=o[0],u=o[1],c=o[2],s;if(Ln(e))s=function(){return He(e())};else{var a=He(e);s=function(){return a}}function f(d,l){d===void 0&&(d=s());var p=G([i[l.type]],u.filter(function(y){var v=y.matcher;return v(l)}).map(function(y){var v=y.reducer;return v}));return p.filter(function(y){return!!y}).length===0&&(p=[c]),p.reduce(function(y,v){if(v)if(K(y)){var m=y,b=v(m,l);return b===void 0?y:b}else{if(N(y))return rr(y,function(h){return v(h,l)});var b=v(y,l);if(b===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}return y},d)}return f.getInitialState=s,f}function Kn(e,t){return e+"/"+t}function sr(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:He(e.initialState),n=e.reducers||{},o=Object.keys(n),i={},u={},c={};o.forEach(function(f){var d=n[f],l=Kn(t,f),p,y;"reducer"in d?(p=d.reducer,y=d.prepare):p=d,i[f]=p,u[l]=p,c[f]=y?L(l,y):L(l)});function s(){var f=typeof e.extraReducers=="function"?cr(e.extraReducers):[e.extraReducers],d=f[0],l=d===void 0?{}:d,p=f[1],y=p===void 0?[]:p,v=f[2],m=v===void 0?void 0:v,b=D(D({},l),u);return Wn(r,function(h){for(var w in b)h.addCase(w,b[w]);for(var x=0,_=y;x<_.length;x++){var J=_[x];h.addMatcher(J.matcher,J.reducer)}m&&h.addDefaultCase(m)})}var a;return{name:t,reducer:function(f,d){return a||(a=s()),a(f,d)},actions:c,caseReducers:i,getInitialState:function(){return a||(a=s()),a.getInitialState()}}}var Vn="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",zn=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=Vn[Math.random()*64|0];return t},Fn=["name","message","stack","code"],Fe=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),kt=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),qn=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Fn;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Un=function(){function e(t,r,n){var o=L(t+"/fulfilled",function(a,f,d,l){return{payload:a,meta:ze(D({},l||{}),{arg:d,requestId:f,requestStatus:"fulfilled"})}}),i=L(t+"/pending",function(a,f,d){return{payload:void 0,meta:ze(D({},d||{}),{arg:f,requestId:a,requestStatus:"pending"})}}),u=L(t+"/rejected",function(a,f,d,l,p){return{payload:l,error:(n&&n.serializeError||qn)(a||"Rejected"),meta:ze(D({},p||{}),{arg:d,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function a(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return a.prototype.abort=function(){},a}();function s(a){return function(f,d,l){var p=n!=null&&n.idGenerator?n.idGenerator(a):zn(),y=new c,v;function m(h){v=h,y.abort()}var b=function(){return An(this,null,function(){var h,w,x,_,J,Q,ct;return Pn(this,function(F){switch(F.label){case 0:return F.trys.push([0,4,,5]),_=(h=n==null?void 0:n.condition)==null?void 0:h.call(n,a,{getState:d,extra:l}),Xn(_)?[4,_]:[3,2];case 1:_=F.sent(),F.label=2;case 2:if(_===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return J=new Promise(function(T,Z){return y.signal.addEventListener("abort",function(){return Z({name:"AbortError",message:v||"Aborted"})})}),f(i(p,a,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:p,arg:a},{getState:d,extra:l}))),[4,Promise.race([J,Promise.resolve(r(a,{dispatch:f,getState:d,extra:l,requestId:p,signal:y.signal,abort:m,rejectWithValue:function(T,Z){return new Fe(T,Z)},fulfillWithValue:function(T,Z){return new kt(T,Z)}})).then(function(T){if(T instanceof Fe)throw T;return T instanceof kt?o(T.payload,p,a,T.meta):o(T,p,a)})])];case 3:return x=F.sent(),[3,5];case 4:return Q=F.sent(),x=Q instanceof Fe?u(null,p,a,Q.payload,Q.meta):u(Q,p,a),[3,5];case 5:return ct=n&&!n.dispatchConditionRejection&&u.match(x)&&x.meta.condition,ct||f(x),[2,x]}})})}();return Object.assign(b,{abort:m,requestId:p,arg:a,unwrap:function(){return b.then(Bn)}})}}return Object.assign(s,{pending:i,rejected:u,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function Bn(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Xn(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ut="listenerMiddleware";L(ut+"/add");L(ut+"/removeAll");L(ut+"/remove");var Et;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);ln();const Gn={tasks:[],status:"idle",error:null},qe=Un("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),fr=sr({name:"taskbox",initialState:Gn,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,o=e.tasks.findIndex(i=>i.id===r);o>=0&&(e.tasks[o].state=n)}},extraReducers(e){e.addCase(qe.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(qe.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(qe.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:xt}=fr.actions,Hn=ur({reducer:{taskbox:fr.reducer}}),to=Hn;function lr(){const e=st(u=>[...u.taskbox.tasks.filter(a=>a.state==="TASK_PINNED"),...u.taskbox.tasks.filter(a=>a.state!=="TASK_PINNED")].filter(a=>a.state==="TASK_INBOX"||a.state==="TASK_PINNED")),{status:t}=st(u=>u.taskbox),r=on(),n=u=>{r(xt({id:u,newTaskState:"TASK_PINNED"}))},o=u=>{r(xt({id:u,newTaskState:"TASK_ARCHIVED"}))},i=ce("div",{className:"loading-item",children:[E("span",{className:"glow-checkbox"}),ce("span",{className:"glow-text",children:[E("span",{children:"Loading"})," ",E("span",{children:"cool"})," ",E("span",{children:"state"})]})]});return t==="loading"?ce("div",{className:"list-items","data-testid":"loading",children:[i,i,i,i,i,i]},"loading"):e.length===0?E("div",{className:"list-items","data-testid":"empty",children:ce("div",{className:"wrapper-message",children:[E("span",{className:"icon-check"}),E("p",{className:"title-message",children:"You have no tasks"}),E("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):E("div",{className:"list-items","data-testid":"success",children:e.map(u=>E(dr,{task:u,onPinTask:c=>n(c),onArchiveTask:c=>o(c)},u.id))},"success")}lr.__docgenInfo={description:"",methods:[],displayName:"TaskList"};const H={tasks:[{...q.args.task,id:"1",title:"Task 1"},{...q.args.task,id:"2",title:"Task 2"},{...q.args.task,id:"3",title:"Task 3"},{...q.args.task,id:"4",title:"Task 4"},{...q.args.task,id:"5",title:"Task 5"},{...q.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},Ne=({taskboxState:e,children:t})=>E(tn,{store:ur({reducer:{taskbox:sr({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:o,newTaskState:i}=n.payload,u=r.tasks.findIndex(c=>c.id===o);u>=0&&(r.tasks[u].state=i)}}}).reducer}}),children:t}),Yn={component:lr,title:"TaskList",tags:["autodocs"],decorators:[e=>E("div",{style:{padding:"3rem"},children:e()})],excludeStories:/.*MockedState$/},te={decorators:[e=>E(Ne,{taskboxState:H,children:e()})]},re={decorators:[e=>{const t=[...H.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return E(Ne,{taskboxState:{...H,tasks:t},children:e()})}]},ne={decorators:[e=>E(Ne,{taskboxState:{...H,status:"loading"},children:e()})]},oe={decorators:[e=>E(Ne,{taskboxState:{...H,tasks:[]},children:e()})]};var $t,jt,At;te.parameters={...te.parameters,docs:{...($t=te.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(At=(jt=te.parameters)==null?void 0:jt.docs)==null?void 0:At.source}}};var _t,Tt,Mt;re.parameters={...re.parameters,docs:{...(_t=re.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: "6",
      title: "Task 6 (pinned)",
      state: "TASK_PINNED"
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...(Mt=(Tt=re.parameters)==null?void 0:Tt.docs)==null?void 0:Mt.source}}};var Ct,Rt,Nt;ne.parameters={...ne.parameters,docs:{...(Ct=ne.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: "loading"
  }}>
        {story()}
      </Mockstore>]
}`,...(Nt=(Rt=ne.parameters)==null?void 0:Rt.docs)==null?void 0:Nt.source}}};var It,Dt,Lt;oe.parameters={...oe.parameters,docs:{...(It=oe.parameters)==null?void 0:It.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(Lt=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:Lt.source}}};const Jn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],ro=Object.freeze(Object.defineProperty({__proto__:null,Default:te,Empty:oe,Loading:ne,MockedState:H,WithPinnedTasks:re,__namedExportsOrder:Jn,default:Yn},Symbol.toStringTag,{value:"Module"}));export{H as M,tn as P,lr as T,st as a,ro as b,qe as f,to as s,on as u};
//# sourceMappingURL=TaskList.stories-b61302f2.js.map

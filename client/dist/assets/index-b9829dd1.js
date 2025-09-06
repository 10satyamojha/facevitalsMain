var xN=Object.defineProperty;var wN=(e,t,r)=>t in e?xN(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var hd=(e,t,r)=>(wN(e,typeof t!="symbol"?t+"":t,r),r);function SN(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function CN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lo={},kN={get exports(){return Lo},set exports(e){Lo=e}},Qc={},y={},PN={get exports(){return y},set exports(e){y=e}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),NN=Symbol.for("react.portal"),EN=Symbol.for("react.fragment"),ON=Symbol.for("react.strict_mode"),AN=Symbol.for("react.profiler"),TN=Symbol.for("react.provider"),_N=Symbol.for("react.context"),zN=Symbol.for("react.forward_ref"),MN=Symbol.for("react.suspense"),jN=Symbol.for("react.memo"),IN=Symbol.for("react.lazy"),Ug=Symbol.iterator;function DN(e){return e===null||typeof e!="object"?null:(e=Ug&&e[Ug]||e["@@iterator"],typeof e=="function"?e:null)}var fx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},px=Object.assign,hx={};function Da(e,t,r){this.props=e,this.context=t,this.refs=hx,this.updater=r||fx}Da.prototype.isReactComponent={};Da.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Da.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mx(){}mx.prototype=Da.prototype;function Mh(e,t,r){this.props=e,this.context=t,this.refs=hx,this.updater=r||fx}var jh=Mh.prototype=new mx;jh.constructor=Mh;px(jh,Da.prototype);jh.isPureReactComponent=!0;var Kg=Array.isArray,vx=Object.prototype.hasOwnProperty,Ih={current:null},gx={key:!0,ref:!0,__self:!0,__source:!0};function yx(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)vx.call(t,n)&&!gx.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:vl,type:e,key:a,ref:o,props:i,_owner:Ih.current}}function RN(e,t){return{$$typeof:vl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dh(e){return typeof e=="object"&&e!==null&&e.$$typeof===vl}function LN(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Wg=/\/+/g;function md(e,t){return typeof e=="object"&&e!==null&&e.key!=null?LN(""+e.key):t.toString(36)}function ys(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case vl:case NN:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+md(o,0):n,Kg(i)?(r="",e!=null&&(r=e.replace(Wg,"$&/")+"/"),ys(i,t,r,"",function(c){return c})):i!=null&&(Dh(i)&&(i=RN(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",Kg(e))for(var l=0;l<e.length;l++){a=e[l];var s=n+md(a,l);o+=ys(a,t,r,s,i)}else if(s=DN(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=n+md(a,l++),o+=ys(a,t,r,s,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Bl(e,t,r){if(e==null)return e;var n=[],i=0;return ys(e,n,"","",function(a){return t.call(r,a,i++)}),n}function $N(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Nt={current:null},bs={transition:null},FN={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:bs,ReactCurrentOwner:Ih};re.Children={map:Bl,forEach:function(e,t,r){Bl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bl(e,function(){t++}),t},toArray:function(e){return Bl(e,function(t){return t})||[]},only:function(e){if(!Dh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Da;re.Fragment=EN;re.Profiler=AN;re.PureComponent=Mh;re.StrictMode=ON;re.Suspense=MN;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FN;re.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=px({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Ih.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)vx.call(t,s)&&!gx.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:vl,type:e.type,key:i,ref:a,props:n,_owner:o}};re.createContext=function(e){return e={$$typeof:_N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:TN,_context:e},e.Consumer=e};re.createElement=yx;re.createFactory=function(e){var t=yx.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:zN,render:e}};re.isValidElement=Dh;re.lazy=function(e){return{$$typeof:IN,_payload:{_status:-1,_result:e},_init:$N}};re.memo=function(e,t){return{$$typeof:jN,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=bs.transition;bs.transition={};try{e()}finally{bs.transition=t}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,t){return Nt.current.useCallback(e,t)};re.useContext=function(e){return Nt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Nt.current.useDeferredValue(e)};re.useEffect=function(e,t){return Nt.current.useEffect(e,t)};re.useId=function(){return Nt.current.useId()};re.useImperativeHandle=function(e,t,r){return Nt.current.useImperativeHandle(e,t,r)};re.useInsertionEffect=function(e,t){return Nt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return Nt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return Nt.current.useMemo(e,t)};re.useReducer=function(e,t,r){return Nt.current.useReducer(e,t,r)};re.useRef=function(e){return Nt.current.useRef(e)};re.useState=function(e){return Nt.current.useState(e)};re.useSyncExternalStore=function(e,t,r){return Nt.current.useSyncExternalStore(e,t,r)};re.useTransition=function(){return Nt.current.useTransition()};re.version="18.2.0";(function(e){e.exports=re})(PN);const en=CN(y),Is=SN({__proto__:null,default:en},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BN=y,HN=Symbol.for("react.element"),UN=Symbol.for("react.fragment"),KN=Object.prototype.hasOwnProperty,WN=BN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VN={key:!0,ref:!0,__self:!0,__source:!0};function bx(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)KN.call(t,n)&&!VN.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:HN,type:e,key:a,ref:o,props:i,_owner:WN.current}}Qc.Fragment=UN;Qc.jsx=bx;Qc.jsxs=bx;(function(e){e.exports=Qc})(kN);const Tt=Lo.Fragment,f=Lo.jsx,x=Lo.jsxs;var Ef={},Ds={},GN={get exports(){return Ds},set exports(e){Ds=e}},Jt={},Of={},YN={get exports(){return Of},set exports(e){Of=e}},xx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,$){var V=R.length;R.push($);e:for(;0<V;){var X=V-1>>>1,F=R[X];if(0<i(F,$))R[X]=$,R[V]=F,V=X;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var $=R[0],V=R.pop();if(V!==$){R[0]=V;e:for(var X=0,F=R.length,Le=F>>>1;X<Le;){var ce=2*(X+1)-1,ue=R[ce],Je=ce+1,br=R[Je];if(0>i(ue,V))Je<F&&0>i(br,ue)?(R[X]=br,R[Je]=V,X=Je):(R[X]=ue,R[ce]=V,X=ce);else if(Je<F&&0>i(br,V))R[X]=br,R[Je]=V,X=Je;else break e}}return $}function i(R,$){var V=R.sortIndex-$.sortIndex;return V!==0?V:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],u=1,d=null,p=3,h=!1,m=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(R){for(var $=r(c);$!==null;){if($.callback===null)n(c);else if($.startTime<=R)n(c),$.sortIndex=$.expirationTime,t(s,$);else break;$=r(c)}}function C(R){if(v=!1,S(R),!m)if(r(s)!==null)m=!0,L(k);else{var $=r(c);$!==null&&q(C,$.startTime-R)}}function k(R,$){m=!1,v&&(v=!1,g(A),A=-1),h=!0;var V=p;try{for(S($),d=r(s);d!==null&&(!(d.expirationTime>$)||R&&!z());){var X=d.callback;if(typeof X=="function"){d.callback=null,p=d.priorityLevel;var F=X(d.expirationTime<=$);$=e.unstable_now(),typeof F=="function"?d.callback=F:d===r(s)&&n(s),S($)}else n(s);d=r(s)}if(d!==null)var Le=!0;else{var ce=r(c);ce!==null&&q(C,ce.startTime-$),Le=!1}return Le}finally{d=null,p=V,h=!1}}var P=!1,N=null,A=-1,E=5,_=-1;function z(){return!(e.unstable_now()-_<E)}function M(){if(N!==null){var R=e.unstable_now();_=R;var $=!0;try{$=N(!0,R)}finally{$?G():(P=!1,N=null)}}else P=!1}var G;if(typeof w=="function")G=function(){w(M)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,D=Z.port2;Z.port1.onmessage=M,G=function(){D.postMessage(null)}}else G=function(){b(M,0)};function L(R){N=R,P||(P=!0,G())}function q(R,$){A=b(function(){R(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,L(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(R){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var V=p;p=$;try{return R()}finally{p=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=p;p=R;try{return $()}finally{p=V}},e.unstable_scheduleCallback=function(R,$,V){var X=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,R){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=V+F,R={id:u++,callback:$,priorityLevel:R,startTime:V,expirationTime:F,sortIndex:-1},V>X?(R.sortIndex=V,t(c,R),r(s)===null&&R===r(c)&&(v?(g(A),A=-1):v=!0,q(C,V-X))):(R.sortIndex=F,t(s,R),m||h||(m=!0,L(k))),R},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(R){var $=p;return function(){var V=p;p=$;try{return R.apply(this,arguments)}finally{p=V}}}})(xx);(function(e){e.exports=xx})(YN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx=y,Gt=Of;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sx=new Set,$o={};function Bi(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for($o[e]=t,e=0;e<t.length;e++)Sx.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,qN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Gg={};function XN(e){return Af.call(Gg,e)?!0:Af.call(Vg,e)?!1:qN.test(e)?Gg[e]=!0:(Vg[e]=!0,!1)}function QN(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function JN(e,t,r,n){if(t===null||typeof t>"u"||QN(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Et(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ut[e]=new Et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ut[t]=new Et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ut[e]=new Et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ut[e]=new Et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ut[e]=new Et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ut[e]=new Et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ut[e]=new Et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ut[e]=new Et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ut[e]=new Et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Lh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rh,Lh);ut[t]=new Et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rh,Lh);ut[t]=new Et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rh,Lh);ut[t]=new Et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ut[e]=new Et(e,1,!1,e.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ut[e]=new Et(e,1,!1,e.toLowerCase(),null,!0,!0)});function $h(e,t,r,n){var i=ut.hasOwnProperty(t)?ut[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(JN(t,r,i,n)&&(r=null),n||i===null?XN(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var mn=wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hl=Symbol.for("react.element"),Xi=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),Cx=Symbol.for("react.provider"),kx=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),Px=Symbol.for("react.offscreen"),Yg=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=Yg&&e[Yg]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,vd;function yo(e){if(vd===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);vd=t&&t[1]||""}return`
`+vd+e}var gd=!1;function yd(e,t){if(!e||gd)return"";gd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{gd=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?yo(e):""}function ZN(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=yd(e.type,!1),e;case 11:return e=yd(e.type.render,!1),e;case 1:return e=yd(e.type,!0),e;default:return""}}function Mf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qi:return"Fragment";case Xi:return"Portal";case Tf:return"Profiler";case Fh:return"StrictMode";case _f:return"Suspense";case zf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kx:return(e.displayName||"Context")+".Consumer";case Cx:return(e._context.displayName||"Context")+".Provider";case Bh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hh:return t=e.displayName||null,t!==null?t:Mf(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return Mf(e(t))}catch{}}return null}function eE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(t);case 8:return t===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tE(e){var t=Nx(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ul(e){e._valueTracker||(e._valueTracker=tE(e))}function Ex(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Nx(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jf(e,t){var r=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function qg(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Yn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ox(e,t){t=t.checked,t!=null&&$h(e,"checked",t,!1)}function If(e,t){Ox(e,t);var r=Yn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Df(e,t.type,r):t.hasOwnProperty("defaultValue")&&Df(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xg(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Df(e,t,r){(t!=="number"||Rs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var bo=Array.isArray;function da(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Yn(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qg(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(I(92));if(bo(r)){if(1<r.length)throw Error(I(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Yn(r)}}function Ax(e,t){var r=Yn(t.value),n=Yn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Jg(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kl,_x=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rE=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){rE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function zx(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function Mx(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=zx(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var nE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(e,t){if(t){if(nE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Ff(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bf=null;function Uh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hf=null,fa=null,pa=null;function Zg(e){if(e=bl(e)){if(typeof Hf!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ru(t),Hf(e.stateNode,e.type,t))}}function jx(e){fa?pa?pa.push(e):pa=[e]:fa=e}function Ix(){if(fa){var e=fa,t=pa;if(pa=fa=null,Zg(e),t)for(e=0;e<t.length;e++)Zg(t[e])}}function Dx(e,t){return e(t)}function Rx(){}var bd=!1;function Lx(e,t,r){if(bd)return e(t,r);bd=!0;try{return Dx(e,t,r)}finally{bd=!1,(fa!==null||pa!==null)&&(Rx(),Ix())}}function Bo(e,t){var r=e.stateNode;if(r===null)return null;var n=ru(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(I(231,t,typeof r));return r}var Uf=!1;if(on)try{var to={};Object.defineProperty(to,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Uf=!1}function iE(e,t,r,n,i,a,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Po=!1,Ls=null,$s=!1,Kf=null,aE={onError:function(e){Po=!0,Ls=e}};function oE(e,t,r,n,i,a,o,l,s){Po=!1,Ls=null,iE.apply(aE,arguments)}function lE(e,t,r,n,i,a,o,l,s){if(oE.apply(this,arguments),Po){if(Po){var c=Ls;Po=!1,Ls=null}else throw Error(I(198));$s||($s=!0,Kf=c)}}function Hi(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function $x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function e0(e){if(Hi(e)!==e)throw Error(I(188))}function sE(e){var t=e.alternate;if(!t){if(t=Hi(e),t===null)throw Error(I(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return e0(i),e;if(a===n)return e0(i),t;a=a.sibling}throw Error(I(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,n=a;break}if(l===n){o=!0,n=i,r=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===r){o=!0,r=a,n=i;break}if(l===n){o=!0,n=a,r=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(r.alternate!==n)throw Error(I(190))}if(r.tag!==3)throw Error(I(188));return r.stateNode.current===r?e:t}function Fx(e){return e=sE(e),e!==null?Bx(e):null}function Bx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bx(e);if(t!==null)return t;e=e.sibling}return null}var Hx=Gt.unstable_scheduleCallback,t0=Gt.unstable_cancelCallback,cE=Gt.unstable_shouldYield,uE=Gt.unstable_requestPaint,Ie=Gt.unstable_now,dE=Gt.unstable_getCurrentPriorityLevel,Kh=Gt.unstable_ImmediatePriority,Ux=Gt.unstable_UserBlockingPriority,Fs=Gt.unstable_NormalPriority,fE=Gt.unstable_LowPriority,Kx=Gt.unstable_IdlePriority,Jc=null,$r=null;function pE(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(Jc,e,void 0,(e.current.flags&128)===128)}catch{}}var Ar=Math.clz32?Math.clz32:vE,hE=Math.log,mE=Math.LN2;function vE(e){return e>>>=0,e===0?32:31-(hE(e)/mE|0)|0}var Wl=64,Vl=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var l=o&~i;l!==0?n=xo(l):(a&=o,a!==0&&(n=xo(a)))}else o=r&~i,o!==0?n=xo(o):a!==0&&(n=xo(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ar(t),i=1<<r,n|=e[r],t&=~i;return n}function gE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yE(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ar(a),l=1<<o,s=i[o];s===-1?(!(l&r)||l&n)&&(i[o]=gE(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Wf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wx(){var e=Wl;return Wl<<=1,!(Wl&4194240)&&(Wl=64),e}function xd(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gl(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ar(t),e[t]=r}function bE(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Ar(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Wh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ar(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var fe=0;function Vx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gx,Vh,Yx,qx,Xx,Vf=!1,Gl=[],Dn=null,Rn=null,Ln=null,Ho=new Map,Uo=new Map,Tn=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r0(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ho.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function ro(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bl(t),t!==null&&Vh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wE(e,t,r,n,i){switch(t){case"focusin":return Dn=ro(Dn,e,t,r,n,i),!0;case"dragenter":return Rn=ro(Rn,e,t,r,n,i),!0;case"mouseover":return Ln=ro(Ln,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Ho.set(a,ro(Ho.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Uo.set(a,ro(Uo.get(a)||null,e,t,r,n,i)),!0}return!1}function Qx(e){var t=gi(e.target);if(t!==null){var r=Hi(t);if(r!==null){if(t=r.tag,t===13){if(t=$x(r),t!==null){e.blockedOn=t,Xx(e.priority,function(){Yx(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Gf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Bf=n,r.target.dispatchEvent(n),Bf=null}else return t=bl(r),t!==null&&Vh(t),e.blockedOn=r,!1;t.shift()}return!0}function n0(e,t,r){xs(e)&&r.delete(t)}function SE(){Vf=!1,Dn!==null&&xs(Dn)&&(Dn=null),Rn!==null&&xs(Rn)&&(Rn=null),Ln!==null&&xs(Ln)&&(Ln=null),Ho.forEach(n0),Uo.forEach(n0)}function no(e,t){e.blockedOn===t&&(e.blockedOn=null,Vf||(Vf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,SE)))}function Ko(e){function t(i){return no(i,e)}if(0<Gl.length){no(Gl[0],e);for(var r=1;r<Gl.length;r++){var n=Gl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Dn!==null&&no(Dn,e),Rn!==null&&no(Rn,e),Ln!==null&&no(Ln,e),Ho.forEach(t),Uo.forEach(t),r=0;r<Tn.length;r++)n=Tn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)Qx(r),r.blockedOn===null&&Tn.shift()}var ha=mn.ReactCurrentBatchConfig,Hs=!0;function CE(e,t,r,n){var i=fe,a=ha.transition;ha.transition=null;try{fe=1,Gh(e,t,r,n)}finally{fe=i,ha.transition=a}}function kE(e,t,r,n){var i=fe,a=ha.transition;ha.transition=null;try{fe=4,Gh(e,t,r,n)}finally{fe=i,ha.transition=a}}function Gh(e,t,r,n){if(Hs){var i=Gf(e,t,r,n);if(i===null)Td(e,t,n,Us,r),r0(e,n);else if(wE(i,e,t,r,n))n.stopPropagation();else if(r0(e,n),t&4&&-1<xE.indexOf(e)){for(;i!==null;){var a=bl(i);if(a!==null&&Gx(a),a=Gf(e,t,r,n),a===null&&Td(e,t,n,Us,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Td(e,t,n,null,r)}}var Us=null;function Gf(e,t,r,n){if(Us=null,e=Uh(n),e=gi(e),e!==null)if(t=Hi(e),t===null)e=null;else if(r=t.tag,r===13){if(e=$x(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Us=e,null}function Jx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dE()){case Kh:return 1;case Ux:return 4;case Fs:case fE:return 16;case Kx:return 536870912;default:return 16}default:return 16}}var Mn=null,Yh=null,ws=null;function Zx(){if(ws)return ws;var e,t=Yh,r=t.length,n,i="value"in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return ws=i.slice(e,1<n?1-n:void 0)}function Ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yl(){return!0}function i0(){return!1}function Zt(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yl:i0,this.isPropagationStopped=i0,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qh=Zt(Ra),yl=_e({},Ra,{view:0,detail:0}),PE=Zt(yl),wd,Sd,io,Zc=_e({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(wd=e.screenX-io.screenX,Sd=e.screenY-io.screenY):Sd=wd=0,io=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),a0=Zt(Zc),NE=_e({},Zc,{dataTransfer:0}),EE=Zt(NE),OE=_e({},yl,{relatedTarget:0}),Cd=Zt(OE),AE=_e({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=Zt(AE),_E=_e({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zE=Zt(_E),ME=_e({},Ra,{data:0}),o0=Zt(ME),jE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DE[e])?!!t[e]:!1}function Xh(){return RE}var LE=_e({},yl,{key:function(e){if(e.key){var t=jE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$E=Zt(LE),FE=_e({},Zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l0=Zt(FE),BE=_e({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),HE=Zt(BE),UE=_e({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=Zt(UE),WE=_e({},Zc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),VE=Zt(WE),GE=[9,13,27,32],Qh=on&&"CompositionEvent"in window,No=null;on&&"documentMode"in document&&(No=document.documentMode);var YE=on&&"TextEvent"in window&&!No,ew=on&&(!Qh||No&&8<No&&11>=No),s0=String.fromCharCode(32),c0=!1;function tw(e,t){switch(e){case"keyup":return GE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ji=!1;function qE(e,t){switch(e){case"compositionend":return rw(t);case"keypress":return t.which!==32?null:(c0=!0,s0);case"textInput":return e=t.data,e===s0&&c0?null:e;default:return null}}function XE(e,t){if(Ji)return e==="compositionend"||!Qh&&tw(e,t)?(e=Zx(),ws=Yh=Mn=null,Ji=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ew&&t.locale!=="ko"?null:t.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!QE[e.type]:t==="textarea"}function nw(e,t,r,n){jx(n),t=Ks(t,"onChange"),0<t.length&&(r=new qh("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Eo=null,Wo=null;function JE(e){hw(e,0)}function eu(e){var t=ta(e);if(Ex(t))return e}function ZE(e,t){if(e==="change")return t}var iw=!1;if(on){var kd;if(on){var Pd="oninput"in document;if(!Pd){var d0=document.createElement("div");d0.setAttribute("oninput","return;"),Pd=typeof d0.oninput=="function"}kd=Pd}else kd=!1;iw=kd&&(!document.documentMode||9<document.documentMode)}function f0(){Eo&&(Eo.detachEvent("onpropertychange",aw),Wo=Eo=null)}function aw(e){if(e.propertyName==="value"&&eu(Wo)){var t=[];nw(t,Wo,e,Uh(e)),Lx(JE,t)}}function eO(e,t,r){e==="focusin"?(f0(),Eo=t,Wo=r,Eo.attachEvent("onpropertychange",aw)):e==="focusout"&&f0()}function tO(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eu(Wo)}function rO(e,t){if(e==="click")return eu(t)}function nO(e,t){if(e==="input"||e==="change")return eu(t)}function iO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zr=typeof Object.is=="function"?Object.is:iO;function Vo(e,t){if(zr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Af.call(t,i)||!zr(e[i],t[i]))return!1}return!0}function p0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function h0(e,t){var r=p0(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=p0(r)}}function ow(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ow(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lw(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Jh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function aO(e){var t=lw(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ow(r.ownerDocument.documentElement,r)){if(n!==null&&Jh(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=h0(r,a);var o=h0(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oO=on&&"documentMode"in document&&11>=document.documentMode,Zi=null,Yf=null,Oo=null,qf=!1;function m0(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qf||Zi==null||Zi!==Rs(n)||(n=Zi,"selectionStart"in n&&Jh(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Oo&&Vo(Oo,n)||(Oo=n,n=Ks(Yf,"onSelect"),0<n.length&&(t=new qh("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Zi)))}function ql(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ea={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},Nd={},sw={};on&&(sw=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function tu(e){if(Nd[e])return Nd[e];if(!ea[e])return e;var t=ea[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in sw)return Nd[e]=t[r];return e}var cw=tu("animationend"),uw=tu("animationiteration"),dw=tu("animationstart"),fw=tu("transitionend"),pw=new Map,v0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(e,t){pw.set(e,t),Bi(t,[e])}for(var Ed=0;Ed<v0.length;Ed++){var Od=v0[Ed],lO=Od.toLowerCase(),sO=Od[0].toUpperCase()+Od.slice(1);ti(lO,"on"+sO)}ti(cw,"onAnimationEnd");ti(uw,"onAnimationIteration");ti(dw,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(fw,"onTransitionEnd");ba("onMouseEnter",["mouseout","mouseover"]);ba("onMouseLeave",["mouseout","mouseover"]);ba("onPointerEnter",["pointerout","pointerover"]);ba("onPointerLeave",["pointerout","pointerover"]);Bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cO=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function g0(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,lE(n,t,void 0,e),e.currentTarget=null}function hw(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var l=n[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;g0(i,l,c),a=s}else for(o=0;o<n.length;o++){if(l=n[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;g0(i,l,c),a=s}}}if($s)throw e=Kf,$s=!1,Kf=null,e}function we(e,t){var r=t[ep];r===void 0&&(r=t[ep]=new Set);var n=e+"__bubble";r.has(n)||(mw(t,e,2,!1),r.add(n))}function Ad(e,t,r){var n=0;t&&(n|=4),mw(r,e,n,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Go(e){if(!e[Xl]){e[Xl]=!0,Sx.forEach(function(r){r!=="selectionchange"&&(cO.has(r)||Ad(r,!1,e),Ad(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,Ad("selectionchange",!1,t))}}function mw(e,t,r,n){switch(Jx(t)){case 1:var i=CE;break;case 4:i=kE;break;default:i=Gh}r=i.bind(null,t,r,e),i=void 0,!Uf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Td(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=gi(l),o===null)return;if(s=o.tag,s===5||s===6){n=a=o;continue e}l=l.parentNode}}n=n.return}Lx(function(){var c=a,u=Uh(r),d=[];e:{var p=pw.get(e);if(p!==void 0){var h=qh,m=e;switch(e){case"keypress":if(Ss(r)===0)break e;case"keydown":case"keyup":h=$E;break;case"focusin":m="focus",h=Cd;break;case"focusout":m="blur",h=Cd;break;case"beforeblur":case"afterblur":h=Cd;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=a0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=EE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=HE;break;case cw:case uw:case dw:h=TE;break;case fw:h=KE;break;case"scroll":h=PE;break;case"wheel":h=VE;break;case"copy":case"cut":case"paste":h=zE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=l0}var v=(t&4)!==0,b=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var w=c,S;w!==null;){S=w;var C=S.stateNode;if(S.tag===5&&C!==null&&(S=C,g!==null&&(C=Bo(w,g),C!=null&&v.push(Yo(w,C,S)))),b)break;w=w.return}0<v.length&&(p=new h(p,m,null,r,u),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&r!==Bf&&(m=r.relatedTarget||r.fromElement)&&(gi(m)||m[ln]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=r.relatedTarget||r.toElement,h=c,m=m?gi(m):null,m!==null&&(b=Hi(m),m!==b||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(v=a0,C="onMouseLeave",g="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(v=l0,C="onPointerLeave",g="onPointerEnter",w="pointer"),b=h==null?p:ta(h),S=m==null?p:ta(m),p=new v(C,w+"leave",h,r,u),p.target=b,p.relatedTarget=S,C=null,gi(u)===c&&(v=new v(g,w+"enter",m,r,u),v.target=S,v.relatedTarget=b,C=v),b=C,h&&m)t:{for(v=h,g=m,w=0,S=v;S;S=Yi(S))w++;for(S=0,C=g;C;C=Yi(C))S++;for(;0<w-S;)v=Yi(v),w--;for(;0<S-w;)g=Yi(g),S--;for(;w--;){if(v===g||g!==null&&v===g.alternate)break t;v=Yi(v),g=Yi(g)}v=null}else v=null;h!==null&&y0(d,p,h,v,!1),m!==null&&b!==null&&y0(d,b,m,v,!0)}}e:{if(p=c?ta(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var k=ZE;else if(u0(p))if(iw)k=nO;else{k=tO;var P=eO}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=rO);if(k&&(k=k(e,c))){nw(d,k,r,u);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Df(p,"number",p.value)}switch(P=c?ta(c):window,e){case"focusin":(u0(P)||P.contentEditable==="true")&&(Zi=P,Yf=c,Oo=null);break;case"focusout":Oo=Yf=Zi=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,m0(d,r,u);break;case"selectionchange":if(oO)break;case"keydown":case"keyup":m0(d,r,u)}var N;if(Qh)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Ji?tw(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(ew&&r.locale!=="ko"&&(Ji||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ji&&(N=Zx()):(Mn=u,Yh="value"in Mn?Mn.value:Mn.textContent,Ji=!0)),P=Ks(c,A),0<P.length&&(A=new o0(A,e,null,r,u),d.push({event:A,listeners:P}),N?A.data=N:(N=rw(r),N!==null&&(A.data=N)))),(N=YE?qE(e,r):XE(e,r))&&(c=Ks(c,"onBeforeInput"),0<c.length&&(u=new o0("onBeforeInput","beforeinput",null,r,u),d.push({event:u,listeners:c}),u.data=N))}hw(d,t)})}function Yo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ks(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Bo(e,r),a!=null&&n.unshift(Yo(e,a,i)),a=Bo(e,t),a!=null&&n.push(Yo(e,a,i))),e=e.return}return n}function Yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function y0(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var l=r,s=l.alternate,c=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&c!==null&&(l=c,i?(s=Bo(r,a),s!=null&&o.unshift(Yo(r,s,l))):i||(s=Bo(r,a),s!=null&&o.push(Yo(r,s,l)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var uO=/\r\n?/g,dO=/\u0000|\uFFFD/g;function b0(e){return(typeof e=="string"?e:""+e).replace(uO,`
`).replace(dO,"")}function Ql(e,t,r){if(t=b0(t),b0(e)!==t&&r)throw Error(I(425))}function Ws(){}var Xf=null,Qf=null;function Jf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zf=typeof setTimeout=="function"?setTimeout:void 0,fO=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,pO=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(e){return x0.resolve(null).then(e).catch(hO)}:Zf;function hO(e){setTimeout(function(){throw e})}function _d(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ko(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ko(t)}function $n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function w0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var La=Math.random().toString(36).slice(2),Dr="__reactFiber$"+La,qo="__reactProps$"+La,ln="__reactContainer$"+La,ep="__reactEvents$"+La,mO="__reactListeners$"+La,vO="__reactHandles$"+La;function gi(e){var t=e[Dr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[ln]||r[Dr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=w0(e);e!==null;){if(r=e[Dr])return r;e=w0(e)}return t}e=r,r=e.parentNode}return null}function bl(e){return e=e[Dr]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ta(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ru(e){return e[qo]||null}var tp=[],ra=-1;function ri(e){return{current:e}}function Ce(e){0>ra||(e.current=tp[ra],tp[ra]=null,ra--)}function xe(e,t){ra++,tp[ra]=e.current,e.current=t}var qn={},bt=ri(qn),Mt=ri(!1),_i=qn;function xa(e,t){var r=e.type.contextTypes;if(!r)return qn;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function jt(e){return e=e.childContextTypes,e!=null}function Vs(){Ce(Mt),Ce(bt)}function S0(e,t,r){if(bt.current!==qn)throw Error(I(168));xe(bt,t),xe(Mt,r)}function vw(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(I(108,eE(e)||"Unknown",i));return _e({},r,n)}function Gs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,_i=bt.current,xe(bt,e),xe(Mt,Mt.current),!0}function C0(e,t,r){var n=e.stateNode;if(!n)throw Error(I(169));r?(e=vw(e,t,_i),n.__reactInternalMemoizedMergedChildContext=e,Ce(Mt),Ce(bt),xe(bt,e)):Ce(Mt),xe(Mt,r)}var Gr=null,nu=!1,zd=!1;function gw(e){Gr===null?Gr=[e]:Gr.push(e)}function gO(e){nu=!0,gw(e)}function ni(){if(!zd&&Gr!==null){zd=!0;var e=0,t=fe;try{var r=Gr;for(fe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Gr=null,nu=!1}catch(i){throw Gr!==null&&(Gr=Gr.slice(e+1)),Hx(Kh,ni),i}finally{fe=t,zd=!1}}return null}var na=[],ia=0,Ys=null,qs=0,or=[],lr=0,zi=null,Xr=1,Qr="";function fi(e,t){na[ia++]=qs,na[ia++]=Ys,Ys=e,qs=t}function yw(e,t,r){or[lr++]=Xr,or[lr++]=Qr,or[lr++]=zi,zi=e;var n=Xr;e=Qr;var i=32-Ar(n)-1;n&=~(1<<i),r+=1;var a=32-Ar(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Xr=1<<32-Ar(t)+i|r<<i|n,Qr=a+e}else Xr=1<<a|r<<i|n,Qr=e}function Zh(e){e.return!==null&&(fi(e,1),yw(e,1,0))}function em(e){for(;e===Ys;)Ys=na[--ia],na[ia]=null,qs=na[--ia],na[ia]=null;for(;e===zi;)zi=or[--lr],or[lr]=null,Qr=or[--lr],or[lr]=null,Xr=or[--lr],or[lr]=null}var Wt=null,Ut=null,Pe=!1,kr=null;function bw(e,t){var r=cr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function k0(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Wt=e,Ut=$n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Wt=e,Ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zi!==null?{id:Xr,overflow:Qr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=cr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Wt=e,Ut=null,!0):!1;default:return!1}}function rp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function np(e){if(Pe){var t=Ut;if(t){var r=t;if(!k0(e,t)){if(rp(e))throw Error(I(418));t=$n(r.nextSibling);var n=Wt;t&&k0(e,t)?bw(n,r):(e.flags=e.flags&-4097|2,Pe=!1,Wt=e)}}else{if(rp(e))throw Error(I(418));e.flags=e.flags&-4097|2,Pe=!1,Wt=e}}}function P0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Wt=e}function Jl(e){if(e!==Wt)return!1;if(!Pe)return P0(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jf(e.type,e.memoizedProps)),t&&(t=Ut)){if(rp(e))throw xw(),Error(I(418));for(;t;)bw(e,t),t=$n(t.nextSibling)}if(P0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ut=$n(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ut=null}}else Ut=Wt?$n(e.stateNode.nextSibling):null;return!0}function xw(){for(var e=Ut;e;)e=$n(e.nextSibling)}function wa(){Ut=Wt=null,Pe=!1}function tm(e){kr===null?kr=[e]:kr.push(e)}var yO=mn.ReactCurrentBatchConfig;function Sr(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Xs=ri(null),Qs=null,aa=null,rm=null;function nm(){rm=aa=Qs=null}function im(e){var t=Xs.current;Ce(Xs),e._currentValue=t}function ip(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function ma(e,t){Qs=e,rm=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_t=!0),e.firstContext=null)}function pr(e){var t=e._currentValue;if(rm!==e)if(e={context:e,memoizedValue:t,next:null},aa===null){if(Qs===null)throw Error(I(308));aa=e,Qs.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return t}var yi=null;function am(e){yi===null?yi=[e]:yi.push(e)}function ww(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,am(t)):(r.next=i.next,i.next=r),t.interleaved=r,sn(e,n)}function sn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var On=!1;function om(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,oe&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,sn(e,r)}return i=n.interleaved,i===null?(t.next=t,am(n)):(t.next=i.next,i.next=t),n.interleaved=t,sn(e,r)}function Cs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wh(e,r)}}function N0(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Js(e,t,r,n){var i=e.updateQueue;On=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?a=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,u=c=s=null,l=a;do{var p=l.lane,h=l.eventTime;if((n&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(p=t,h=r,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(h,d,p);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,p=typeof m=="function"?m.call(h,d,p):m,p==null)break e;d=_e({},d,p);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=h,s=d):u=u.next=h,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ji|=o,e.lanes=o,e.memoizedState=d}}function E0(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(I(191,i));i.call(n)}}}var Cw=new wx.Component().refs;function ap(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:_e({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var iu={isMounted:function(e){return(e=e._reactInternals)?Hi(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=kt(),i=Hn(e),a=tn(n,i);a.payload=t,r!=null&&(a.callback=r),t=Fn(e,a,i),t!==null&&(Tr(t,e,i,n),Cs(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=kt(),i=Hn(e),a=tn(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Fn(e,a,i),t!==null&&(Tr(t,e,i,n),Cs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=kt(),n=Hn(e),i=tn(r,n);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,n),t!==null&&(Tr(t,e,n,r),Cs(t,e,n))}};function O0(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vo(r,n)||!Vo(i,a):!0}function kw(e,t,r){var n=!1,i=qn,a=t.contextType;return typeof a=="object"&&a!==null?a=pr(a):(i=jt(t)?_i:bt.current,n=t.contextTypes,a=(n=n!=null)?xa(e,i):qn),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=iu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function A0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&iu.enqueueReplaceState(t,t.state,null)}function op(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=Cw,om(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=pr(a):(a=jt(t)?_i:bt.current,i.context=xa(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ap(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&iu.enqueueReplaceState(i,i.state,null),Js(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ao(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(I(309));var n=r.stateNode}if(!n)throw Error(I(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;l===Cw&&(l=i.refs={}),o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(I(284));if(!r._owner)throw Error(I(290,e))}return e}function Zl(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function T0(e){var t=e._init;return t(e._payload)}function Pw(e){function t(g,w){if(e){var S=g.deletions;S===null?(g.deletions=[w],g.flags|=16):S.push(w)}}function r(g,w){if(!e)return null;for(;w!==null;)t(g,w),w=w.sibling;return null}function n(g,w){for(g=new Map;w!==null;)w.key!==null?g.set(w.key,w):g.set(w.index,w),w=w.sibling;return g}function i(g,w){return g=Un(g,w),g.index=0,g.sibling=null,g}function a(g,w,S){return g.index=S,e?(S=g.alternate,S!==null?(S=S.index,S<w?(g.flags|=2,w):S):(g.flags|=2,w)):(g.flags|=1048576,w)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,w,S,C){return w===null||w.tag!==6?(w=$d(S,g.mode,C),w.return=g,w):(w=i(w,S),w.return=g,w)}function s(g,w,S,C){var k=S.type;return k===Qi?u(g,w,S.props.children,C,S.key):w!==null&&(w.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===En&&T0(k)===w.type)?(C=i(w,S.props),C.ref=ao(g,w,S),C.return=g,C):(C=As(S.type,S.key,S.props,null,g.mode,C),C.ref=ao(g,w,S),C.return=g,C)}function c(g,w,S,C){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Fd(S,g.mode,C),w.return=g,w):(w=i(w,S.children||[]),w.return=g,w)}function u(g,w,S,C,k){return w===null||w.tag!==7?(w=Ni(S,g.mode,C,k),w.return=g,w):(w=i(w,S),w.return=g,w)}function d(g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=$d(""+w,g.mode,S),w.return=g,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hl:return S=As(w.type,w.key,w.props,null,g.mode,S),S.ref=ao(g,null,w),S.return=g,S;case Xi:return w=Fd(w,g.mode,S),w.return=g,w;case En:var C=w._init;return d(g,C(w._payload),S)}if(bo(w)||eo(w))return w=Ni(w,g.mode,S,null),w.return=g,w;Zl(g,w)}return null}function p(g,w,S,C){var k=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return k!==null?null:l(g,w,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:return S.key===k?s(g,w,S,C):null;case Xi:return S.key===k?c(g,w,S,C):null;case En:return k=S._init,p(g,w,k(S._payload),C)}if(bo(S)||eo(S))return k!==null?null:u(g,w,S,C,null);Zl(g,S)}return null}function h(g,w,S,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(S)||null,l(w,g,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Hl:return g=g.get(C.key===null?S:C.key)||null,s(w,g,C,k);case Xi:return g=g.get(C.key===null?S:C.key)||null,c(w,g,C,k);case En:var P=C._init;return h(g,w,S,P(C._payload),k)}if(bo(C)||eo(C))return g=g.get(S)||null,u(w,g,C,k,null);Zl(w,C)}return null}function m(g,w,S,C){for(var k=null,P=null,N=w,A=w=0,E=null;N!==null&&A<S.length;A++){N.index>A?(E=N,N=null):E=N.sibling;var _=p(g,N,S[A],C);if(_===null){N===null&&(N=E);break}e&&N&&_.alternate===null&&t(g,N),w=a(_,w,A),P===null?k=_:P.sibling=_,P=_,N=E}if(A===S.length)return r(g,N),Pe&&fi(g,A),k;if(N===null){for(;A<S.length;A++)N=d(g,S[A],C),N!==null&&(w=a(N,w,A),P===null?k=N:P.sibling=N,P=N);return Pe&&fi(g,A),k}for(N=n(g,N);A<S.length;A++)E=h(N,g,A,S[A],C),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?A:E.key),w=a(E,w,A),P===null?k=E:P.sibling=E,P=E);return e&&N.forEach(function(z){return t(g,z)}),Pe&&fi(g,A),k}function v(g,w,S,C){var k=eo(S);if(typeof k!="function")throw Error(I(150));if(S=k.call(S),S==null)throw Error(I(151));for(var P=k=null,N=w,A=w=0,E=null,_=S.next();N!==null&&!_.done;A++,_=S.next()){N.index>A?(E=N,N=null):E=N.sibling;var z=p(g,N,_.value,C);if(z===null){N===null&&(N=E);break}e&&N&&z.alternate===null&&t(g,N),w=a(z,w,A),P===null?k=z:P.sibling=z,P=z,N=E}if(_.done)return r(g,N),Pe&&fi(g,A),k;if(N===null){for(;!_.done;A++,_=S.next())_=d(g,_.value,C),_!==null&&(w=a(_,w,A),P===null?k=_:P.sibling=_,P=_);return Pe&&fi(g,A),k}for(N=n(g,N);!_.done;A++,_=S.next())_=h(N,g,A,_.value,C),_!==null&&(e&&_.alternate!==null&&N.delete(_.key===null?A:_.key),w=a(_,w,A),P===null?k=_:P.sibling=_,P=_);return e&&N.forEach(function(M){return t(g,M)}),Pe&&fi(g,A),k}function b(g,w,S,C){if(typeof S=="object"&&S!==null&&S.type===Qi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Hl:e:{for(var k=S.key,P=w;P!==null;){if(P.key===k){if(k=S.type,k===Qi){if(P.tag===7){r(g,P.sibling),w=i(P,S.props.children),w.return=g,g=w;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===En&&T0(k)===P.type){r(g,P.sibling),w=i(P,S.props),w.ref=ao(g,P,S),w.return=g,g=w;break e}r(g,P);break}else t(g,P);P=P.sibling}S.type===Qi?(w=Ni(S.props.children,g.mode,C,S.key),w.return=g,g=w):(C=As(S.type,S.key,S.props,null,g.mode,C),C.ref=ao(g,w,S),C.return=g,g=C)}return o(g);case Xi:e:{for(P=S.key;w!==null;){if(w.key===P)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){r(g,w.sibling),w=i(w,S.children||[]),w.return=g,g=w;break e}else{r(g,w);break}else t(g,w);w=w.sibling}w=Fd(S,g.mode,C),w.return=g,g=w}return o(g);case En:return P=S._init,b(g,w,P(S._payload),C)}if(bo(S))return m(g,w,S,C);if(eo(S))return v(g,w,S,C);Zl(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(r(g,w.sibling),w=i(w,S),w.return=g,g=w):(r(g,w),w=$d(S,g.mode,C),w.return=g,g=w),o(g)):r(g,w)}return b}var Sa=Pw(!0),Nw=Pw(!1),xl={},Fr=ri(xl),Xo=ri(xl),Qo=ri(xl);function bi(e){if(e===xl)throw Error(I(174));return e}function lm(e,t){switch(xe(Qo,t),xe(Xo,e),xe(Fr,xl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lf(t,e)}Ce(Fr),xe(Fr,t)}function Ca(){Ce(Fr),Ce(Xo),Ce(Qo)}function Ew(e){bi(Qo.current);var t=bi(Fr.current),r=Lf(t,e.type);t!==r&&(xe(Xo,e),xe(Fr,r))}function sm(e){Xo.current===e&&(Ce(Fr),Ce(Xo))}var Ae=ri(0);function Zs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Md=[];function cm(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var ks=mn.ReactCurrentDispatcher,jd=mn.ReactCurrentBatchConfig,Mi=0,Te=null,We=null,et=null,ec=!1,Ao=!1,Jo=0,bO=0;function pt(){throw Error(I(321))}function um(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!zr(e[r],t[r]))return!1;return!0}function dm(e,t,r,n,i,a){if(Mi=a,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?CO:kO,e=r(n,i),Ao){a=0;do{if(Ao=!1,Jo=0,25<=a)throw Error(I(301));a+=1,et=We=null,t.updateQueue=null,ks.current=PO,e=r(n,i)}while(Ao)}if(ks.current=tc,t=We!==null&&We.next!==null,Mi=0,et=We=Te=null,ec=!1,t)throw Error(I(300));return e}function fm(){var e=Jo!==0;return Jo=0,e}function Ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Te.memoizedState=et=e:et=et.next=e,et}function hr(){if(We===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=et===null?Te.memoizedState:et.next;if(t!==null)et=t,We=e;else{if(e===null)throw Error(I(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},et===null?Te.memoizedState=et=e:et=et.next=e}return et}function Zo(e,t){return typeof t=="function"?t(e):t}function Id(e){var t=hr(),r=t.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=e;var n=We,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var l=o=null,s=null,c=a;do{var u=c.lane;if((Mi&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,o=n):s=s.next=d,Te.lanes|=u,ji|=u}c=c.next}while(c!==null&&c!==a);s===null?o=n:s.next=l,zr(n,t.memoizedState)||(_t=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Te.lanes|=a,ji|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Dd(e){var t=hr(),r=t.queue;if(r===null)throw Error(I(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);zr(a,t.memoizedState)||(_t=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function Ow(){}function Aw(e,t){var r=Te,n=hr(),i=t(),a=!zr(n.memoizedState,i);if(a&&(n.memoizedState=i,_t=!0),n=n.queue,pm(zw.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,el(9,_w.bind(null,r,n,i,t),void 0,null),rt===null)throw Error(I(349));Mi&30||Tw(r,t,i)}return i}function Tw(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function _w(e,t,r,n){t.value=r,t.getSnapshot=n,Mw(t)&&jw(e)}function zw(e,t,r){return r(function(){Mw(t)&&jw(e)})}function Mw(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!zr(e,r)}catch{return!0}}function jw(e){var t=sn(e,1);t!==null&&Tr(t,e,1,-1)}function _0(e){var t=Ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zo,lastRenderedState:e},t.queue=e,e=e.dispatch=SO.bind(null,Te,e),[t.memoizedState,e]}function el(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Iw(){return hr().memoizedState}function Ps(e,t,r,n){var i=Ir();Te.flags|=e,i.memoizedState=el(1|t,r,void 0,n===void 0?null:n)}function au(e,t,r,n){var i=hr();n=n===void 0?null:n;var a=void 0;if(We!==null){var o=We.memoizedState;if(a=o.destroy,n!==null&&um(n,o.deps)){i.memoizedState=el(t,r,a,n);return}}Te.flags|=e,i.memoizedState=el(1|t,r,a,n)}function z0(e,t){return Ps(8390656,8,e,t)}function pm(e,t){return au(2048,8,e,t)}function Dw(e,t){return au(4,2,e,t)}function Rw(e,t){return au(4,4,e,t)}function Lw(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $w(e,t,r){return r=r!=null?r.concat([e]):null,au(4,4,Lw.bind(null,t,e),r)}function hm(){}function Fw(e,t){var r=hr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&um(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Bw(e,t){var r=hr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&um(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Hw(e,t,r){return Mi&21?(zr(r,t)||(r=Wx(),Te.lanes|=r,ji|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_t=!0),e.memoizedState=r)}function xO(e,t){var r=fe;fe=r!==0&&4>r?r:4,e(!0);var n=jd.transition;jd.transition={};try{e(!1),t()}finally{fe=r,jd.transition=n}}function Uw(){return hr().memoizedState}function wO(e,t,r){var n=Hn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Kw(e))Ww(t,r);else if(r=ww(e,t,r,n),r!==null){var i=kt();Tr(r,e,n,i),Vw(r,t,n)}}function SO(e,t,r){var n=Hn(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Kw(e))Ww(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,r);if(i.hasEagerState=!0,i.eagerState=l,zr(l,o)){var s=t.interleaved;s===null?(i.next=i,am(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}r=ww(e,t,i,n),r!==null&&(i=kt(),Tr(r,e,n,i),Vw(r,t,n))}}function Kw(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function Ww(e,t){Ao=ec=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vw(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wh(e,r)}}var tc={readContext:pr,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},CO={readContext:pr,useCallback:function(e,t){return Ir().memoizedState=[e,t===void 0?null:t],e},useContext:pr,useEffect:z0,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ps(4194308,4,Lw.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var r=Ir();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ir();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=wO.bind(null,Te,e),[n.memoizedState,e]},useRef:function(e){var t=Ir();return e={current:e},t.memoizedState=e},useState:_0,useDebugValue:hm,useDeferredValue:function(e){return Ir().memoizedState=e},useTransition:function(){var e=_0(!1),t=e[0];return e=xO.bind(null,e[1]),Ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Te,i=Ir();if(Pe){if(r===void 0)throw Error(I(407));r=r()}else{if(r=t(),rt===null)throw Error(I(349));Mi&30||Tw(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,z0(zw.bind(null,n,a,e),[e]),n.flags|=2048,el(9,_w.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ir(),t=rt.identifierPrefix;if(Pe){var r=Qr,n=Xr;r=(n&~(1<<32-Ar(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bO++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kO={readContext:pr,useCallback:Fw,useContext:pr,useEffect:pm,useImperativeHandle:$w,useInsertionEffect:Dw,useLayoutEffect:Rw,useMemo:Bw,useReducer:Id,useRef:Iw,useState:function(){return Id(Zo)},useDebugValue:hm,useDeferredValue:function(e){var t=hr();return Hw(t,We.memoizedState,e)},useTransition:function(){var e=Id(Zo)[0],t=hr().memoizedState;return[e,t]},useMutableSource:Ow,useSyncExternalStore:Aw,useId:Uw,unstable_isNewReconciler:!1},PO={readContext:pr,useCallback:Fw,useContext:pr,useEffect:pm,useImperativeHandle:$w,useInsertionEffect:Dw,useLayoutEffect:Rw,useMemo:Bw,useReducer:Dd,useRef:Iw,useState:function(){return Dd(Zo)},useDebugValue:hm,useDeferredValue:function(e){var t=hr();return We===null?t.memoizedState=e:Hw(t,We.memoizedState,e)},useTransition:function(){var e=Dd(Zo)[0],t=hr().memoizedState;return[e,t]},useMutableSource:Ow,useSyncExternalStore:Aw,useId:Uw,unstable_isNewReconciler:!1};function ka(e,t){try{var r="",n=t;do r+=ZN(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Rd(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function lp(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var NO=typeof WeakMap=="function"?WeakMap:Map;function Gw(e,t,r){r=tn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){nc||(nc=!0,gp=n),lp(e,t)},r}function Yw(e,t,r){r=tn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){lp(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){lp(e,t),typeof n!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function M0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new NO;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=FO.bind(null,e,t,r),t.then(e,e))}function j0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function I0(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=tn(-1,1),t.tag=2,Fn(r,t,1))),r.lanes|=1),e)}var EO=mn.ReactCurrentOwner,_t=!1;function St(e,t,r,n){t.child=e===null?Nw(t,null,r,n):Sa(t,e.child,r,n)}function D0(e,t,r,n,i){r=r.render;var a=t.ref;return ma(t,i),n=dm(e,t,r,n,a,i),r=fm(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(Pe&&r&&Zh(t),t.flags|=1,St(e,t,n,i),t.child)}function R0(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!Sm(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,qw(e,t,a,n,i)):(e=As(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Vo,r(o,n)&&e.ref===t.ref)return cn(e,t,i)}return t.flags|=1,e=Un(a,n),e.ref=t.ref,e.return=t,t.child=e}function qw(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Vo(a,n)&&e.ref===t.ref)if(_t=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(_t=!0);else return t.lanes=e.lanes,cn(e,t,i)}return sp(e,t,r,n,i)}function Xw(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(la,$t),$t|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(la,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,xe(la,$t),$t|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,xe(la,$t),$t|=n;return St(e,t,i,r),t.child}function Qw(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sp(e,t,r,n,i){var a=jt(r)?_i:bt.current;return a=xa(t,a),ma(t,i),r=dm(e,t,r,n,a,i),n=fm(),e!==null&&!_t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,cn(e,t,i)):(Pe&&n&&Zh(t),t.flags|=1,St(e,t,r,i),t.child)}function L0(e,t,r,n,i){if(jt(r)){var a=!0;Gs(t)}else a=!1;if(ma(t,i),t.stateNode===null)Ns(e,t),kw(t,r,n),op(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=pr(c):(c=jt(r)?_i:bt.current,c=xa(t,c));var u=r.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||s!==c)&&A0(t,o,n,c),On=!1;var p=t.memoizedState;o.state=p,Js(t,n,o,i),s=t.memoizedState,l!==n||p!==s||Mt.current||On?(typeof u=="function"&&(ap(t,r,u,n),s=t.memoizedState),(l=On||O0(t,r,l,n,p,s,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),o.props=n,o.state=s,o.context=c,n=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Sw(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Sr(t.type,l),o.props=c,d=t.pendingProps,p=o.context,s=r.contextType,typeof s=="object"&&s!==null?s=pr(s):(s=jt(r)?_i:bt.current,s=xa(t,s));var h=r.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||p!==s)&&A0(t,o,n,s),On=!1,p=t.memoizedState,o.state=p,Js(t,n,o,i);var m=t.memoizedState;l!==d||p!==m||Mt.current||On?(typeof h=="function"&&(ap(t,r,h,n),m=t.memoizedState),(c=On||O0(t,r,c,n,p,m,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,m,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),o.props=n,o.state=m,o.context=s,n=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return cp(e,t,r,n,a,i)}function cp(e,t,r,n,i,a){Qw(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&C0(t,r,!1),cn(e,t,a);n=t.stateNode,EO.current=t;var l=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):St(e,t,l,a),t.memoizedState=n.state,i&&C0(t,r,!0),t.child}function Jw(e){var t=e.stateNode;t.pendingContext?S0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&S0(e,t.context,!1),lm(e,t.containerInfo)}function $0(e,t,r,n,i){return wa(),tm(i),t.flags|=256,St(e,t,r,n),t.child}var up={dehydrated:null,treeContext:null,retryLane:0};function dp(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zw(e,t,r){var n=t.pendingProps,i=Ae.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe(Ae,i&1),e===null)return np(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=su(o,n,0,null),e=Ni(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=dp(r),t.memoizedState=up,e):mm(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return OO(e,t,o,n,l,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=Un(i,s),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Un(l,a):(a=Ni(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?dp(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=up,n}return a=e.child,e=a.sibling,n=Un(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function mm(e,t){return t=su({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,r,n){return n!==null&&tm(n),Sa(t,e.child,null,r),e=mm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OO(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=Rd(Error(I(422))),es(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=su({mode:"visible",children:n.children},i,0,null),a=Ni(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&Sa(t,e.child,null,o),t.child.memoizedState=dp(o),t.memoizedState=up,a);if(!(t.mode&1))return es(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(I(419)),n=Rd(a,n,void 0),es(e,t,o,n)}if(l=(o&e.childLanes)!==0,_t||l){if(n=rt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,sn(e,i),Tr(n,e,i,-1))}return wm(),n=Rd(Error(I(421))),es(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=BO.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ut=$n(i.nextSibling),Wt=t,Pe=!0,kr=null,e!==null&&(or[lr++]=Xr,or[lr++]=Qr,or[lr++]=zi,Xr=e.id,Qr=e.overflow,zi=t),t=mm(t,n.children),t.flags|=4096,t)}function F0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ip(e.return,t,r)}function Ld(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function e2(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(St(e,t,n.children,r),n=Ae.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&F0(e,r,t);else if(e.tag===19)F0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(xe(Ae,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Zs(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ld(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zs(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ld(t,!0,r,null,a);break;case"together":Ld(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ji|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,r=Un(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Un(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function AO(e,t,r){switch(t.tag){case 3:Jw(t),wa();break;case 5:Ew(t);break;case 1:jt(t.type)&&Gs(t);break;case 4:lm(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;xe(Xs,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(xe(Ae,Ae.current&1),t.flags|=128,null):r&t.child.childLanes?Zw(e,t,r):(xe(Ae,Ae.current&1),e=cn(e,t,r),e!==null?e.sibling:null);xe(Ae,Ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return e2(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Ae,Ae.current),n)break;return null;case 22:case 23:return t.lanes=0,Xw(e,t,r)}return cn(e,t,r)}var t2,fp,r2,n2;t2=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fp=function(){};r2=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,bi(Fr.current);var a=null;switch(r){case"input":i=jf(e,i),n=jf(e,n),a=[];break;case"select":i=_e({},i,{value:void 0}),n=_e({},n,{value:void 0}),a=[];break;case"textarea":i=Rf(e,i),n=Rf(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ws)}$f(r,n);var o;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var s=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(r||(r={}),r[o]=s[o])}else r||(a||(a=[]),a.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&we("scroll",e),a||l===s||(a=[])):(a=a||[]).push(c,s))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};n2=function(e,t,r,n){r!==n&&(t.flags|=4)};function oo(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function TO(e,t,r){var n=t.pendingProps;switch(em(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return jt(t.type)&&Vs(),ht(t),null;case 3:return n=t.stateNode,Ca(),Ce(Mt),Ce(bt),cm(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,kr!==null&&(xp(kr),kr=null))),fp(e,t),ht(t),null;case 5:sm(t);var i=bi(Qo.current);if(r=t.type,e!==null&&t.stateNode!=null)r2(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(I(166));return ht(t),null}if(e=bi(Fr.current),Jl(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Dr]=t,n[qo]=a,e=(t.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(i=0;i<wo.length;i++)we(wo[i],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":qg(n,a),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},we("invalid",n);break;case"textarea":Qg(n,a),we("invalid",n)}$f(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&Ql(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Ql(n.textContent,l,e),i=["children",""+l]):$o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",n)}switch(r){case"input":Ul(n),Xg(n,a,!0);break;case"textarea":Ul(n),Jg(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Ws)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tx(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Dr]=t,e[qo]=n,t2(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ff(r,n),r){case"dialog":we("cancel",e),we("close",e),i=n;break;case"iframe":case"object":case"embed":we("load",e),i=n;break;case"video":case"audio":for(i=0;i<wo.length;i++)we(wo[i],e);i=n;break;case"source":we("error",e),i=n;break;case"img":case"image":case"link":we("error",e),we("load",e),i=n;break;case"details":we("toggle",e),i=n;break;case"input":qg(e,n),i=jf(e,n),we("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=_e({},n,{value:void 0}),we("invalid",e);break;case"textarea":Qg(e,n),i=Rf(e,n),we("invalid",e);break;default:i=n}$f(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Mx(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_x(e,s)):a==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Fo(e,s):typeof s=="number"&&Fo(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&($o.hasOwnProperty(a)?s!=null&&a==="onScroll"&&we("scroll",e):s!=null&&$h(e,a,s,o))}switch(r){case"input":Ul(e),Xg(e,n,!1);break;case"textarea":Ul(e),Jg(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Yn(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?da(e,!!n.multiple,a,!1):n.defaultValue!=null&&da(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ws)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)n2(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(I(166));if(r=bi(Qo.current),bi(Fr.current),Jl(t)){if(n=t.stateNode,r=t.memoizedProps,n[Dr]=t,(a=n.nodeValue!==r)&&(e=Wt,e!==null))switch(e.tag){case 3:Ql(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ql(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Dr]=t,t.stateNode=n}return ht(t),null;case 13:if(Ce(Ae),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&Ut!==null&&t.mode&1&&!(t.flags&128))xw(),wa(),t.flags|=98560,a=!1;else if(a=Jl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(I(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(I(317));a[Dr]=t}else wa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),a=!1}else kr!==null&&(xp(kr),kr=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Ae.current&1?Ve===0&&(Ve=3):wm())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return Ca(),fp(e,t),e===null&&Go(t.stateNode.containerInfo),ht(t),null;case 10:return im(t.type._context),ht(t),null;case 17:return jt(t.type)&&Vs(),ht(t),null;case 19:if(Ce(Ae),a=t.memoizedState,a===null)return ht(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)oo(a,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zs(e),o!==null){for(t.flags|=128,oo(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return xe(Ae,Ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ie()>Pa&&(t.flags|=128,n=!0,oo(a,!1),t.lanes=4194304)}else{if(!n)if(e=Zs(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),oo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Pe)return ht(t),null}else 2*Ie()-a.renderingStartTime>Pa&&r!==1073741824&&(t.flags|=128,n=!0,oo(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ie(),t.sibling=null,r=Ae.current,xe(Ae,n?r&1|2:r&1),t):(ht(t),null);case 22:case 23:return xm(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?$t&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function _O(e,t){switch(em(t),t.tag){case 1:return jt(t.type)&&Vs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ca(),Ce(Mt),Ce(bt),cm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sm(t),null;case 13:if(Ce(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ae),null;case 4:return Ca(),null;case 10:return im(t.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var ts=!1,vt=!1,zO=typeof WeakSet=="function"?WeakSet:Set,U=null;function oa(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Me(e,t,n)}else r.current=null}function pp(e,t,r){try{r()}catch(n){Me(e,t,n)}}var B0=!1;function MO(e,t){if(Xf=Hs,e=lw(),Jh(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,l=-1,s=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var h;d!==r||i!==0&&d.nodeType!==3||(l=o+i),d!==a||n!==0&&d.nodeType!==3||(s=o+n),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===r&&++c===i&&(l=o),p===a&&++u===n&&(s=o),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}r=l===-1||s===-1?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(Qf={focusedElem:e,selectionRange:r},Hs=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,b=m.memoizedState,g=t.stateNode,w=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Sr(t.type,v),b);g.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(C){Me(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return m=B0,B0=!1,m}function To(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&pp(t,r,a)}i=i.next}while(i!==n)}}function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hp(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function i2(e){var t=e.alternate;t!==null&&(e.alternate=null,i2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dr],delete t[qo],delete t[ep],delete t[mO],delete t[vO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function a2(e){return e.tag===5||e.tag===3||e.tag===4}function H0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||a2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mp(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ws));else if(n!==4&&(e=e.child,e!==null))for(mp(e,t,r),e=e.sibling;e!==null;)mp(e,t,r),e=e.sibling}function vp(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(vp(e,t,r),e=e.sibling;e!==null;)vp(e,t,r),e=e.sibling}var lt=null,Cr=!1;function Cn(e,t,r){for(r=r.child;r!==null;)o2(e,t,r),r=r.sibling}function o2(e,t,r){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(Jc,r)}catch{}switch(r.tag){case 5:vt||oa(r,t);case 6:var n=lt,i=Cr;lt=null,Cn(e,t,r),lt=n,Cr=i,lt!==null&&(Cr?(e=lt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):lt.removeChild(r.stateNode));break;case 18:lt!==null&&(Cr?(e=lt,r=r.stateNode,e.nodeType===8?_d(e.parentNode,r):e.nodeType===1&&_d(e,r),Ko(e)):_d(lt,r.stateNode));break;case 4:n=lt,i=Cr,lt=r.stateNode.containerInfo,Cr=!0,Cn(e,t,r),lt=n,Cr=i;break;case 0:case 11:case 14:case 15:if(!vt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&pp(r,t,o),i=i.next}while(i!==n)}Cn(e,t,r);break;case 1:if(!vt&&(oa(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){Me(r,t,l)}Cn(e,t,r);break;case 21:Cn(e,t,r);break;case 22:r.mode&1?(vt=(n=vt)||r.memoizedState!==null,Cn(e,t,r),vt=n):Cn(e,t,r);break;default:Cn(e,t,r)}}function U0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new zO),t.forEach(function(n){var i=HO.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function wr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:lt=l.stateNode,Cr=!1;break e;case 3:lt=l.stateNode.containerInfo,Cr=!0;break e;case 4:lt=l.stateNode.containerInfo,Cr=!0;break e}l=l.return}if(lt===null)throw Error(I(160));o2(a,o,i),lt=null,Cr=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){Me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)l2(t,e),t=t.sibling}function l2(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wr(t,e),jr(e),n&4){try{To(3,e,e.return),ou(3,e)}catch(v){Me(e,e.return,v)}try{To(5,e,e.return)}catch(v){Me(e,e.return,v)}}break;case 1:wr(t,e),jr(e),n&512&&r!==null&&oa(r,r.return);break;case 5:if(wr(t,e),jr(e),n&512&&r!==null&&oa(r,r.return),e.flags&32){var i=e.stateNode;try{Fo(i,"")}catch(v){Me(e,e.return,v)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Ox(i,a),Ff(l,o);var c=Ff(l,a);for(o=0;o<s.length;o+=2){var u=s[o],d=s[o+1];u==="style"?Mx(i,d):u==="dangerouslySetInnerHTML"?_x(i,d):u==="children"?Fo(i,d):$h(i,u,d,c)}switch(l){case"input":If(i,a);break;case"textarea":Ax(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?da(i,!!a.multiple,h,!1):p!==!!a.multiple&&(a.defaultValue!=null?da(i,!!a.multiple,a.defaultValue,!0):da(i,!!a.multiple,a.multiple?[]:"",!1))}i[qo]=a}catch(v){Me(e,e.return,v)}}break;case 6:if(wr(t,e),jr(e),n&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){Me(e,e.return,v)}}break;case 3:if(wr(t,e),jr(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ko(t.containerInfo)}catch(v){Me(e,e.return,v)}break;case 4:wr(t,e),jr(e);break;case 13:wr(t,e),jr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ym=Ie())),n&4&&U0(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(vt=(c=vt)||u,wr(t,e),vt=c):wr(t,e),jr(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(d=U=u;U!==null;){switch(p=U,h=p.child,p.tag){case 0:case 11:case 14:case 15:To(4,p,p.return);break;case 1:oa(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Me(n,r,v)}}break;case 5:oa(p,p.return);break;case 22:if(p.memoizedState!==null){W0(d);continue}}h!==null?(h.return=p,U=h):W0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=zx("display",o))}catch(v){Me(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Me(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wr(t,e),jr(e),n&4&&U0(e);break;case 21:break;default:wr(t,e),jr(e)}}function jr(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(a2(r)){var n=r;break e}r=r.return}throw Error(I(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Fo(i,""),n.flags&=-33);var a=H0(e);vp(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,l=H0(e);mp(e,l,o);break;default:throw Error(I(161))}}catch(s){Me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jO(e,t,r){U=e,s2(e)}function s2(e,t,r){for(var n=(e.mode&1)!==0;U!==null;){var i=U,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||ts;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||vt;l=ts;var c=vt;if(ts=o,(vt=s)&&!c)for(U=i;U!==null;)o=U,s=o.child,o.tag===22&&o.memoizedState!==null?V0(i):s!==null?(s.return=o,U=s):V0(i);for(;a!==null;)U=a,s2(a),a=a.sibling;U=i,ts=l,vt=c}K0(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,U=a):K0(e)}}function K0(e){for(;U!==null;){var t=U;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:vt||ou(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!vt)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Sr(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&E0(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}E0(t,o,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ko(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}vt||t.flags&512&&hp(t)}catch(p){Me(t,t.return,p)}}if(t===e){U=null;break}if(r=t.sibling,r!==null){r.return=t.return,U=r;break}U=t.return}}function W0(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var r=t.sibling;if(r!==null){r.return=t.return,U=r;break}U=t.return}}function V0(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ou(4,t)}catch(s){Me(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(s){Me(t,i,s)}}var a=t.return;try{hp(t)}catch(s){Me(t,a,s)}break;case 5:var o=t.return;try{hp(t)}catch(s){Me(t,o,s)}}}catch(s){Me(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var IO=Math.ceil,rc=mn.ReactCurrentDispatcher,vm=mn.ReactCurrentOwner,dr=mn.ReactCurrentBatchConfig,oe=0,rt=null,$e=null,ct=0,$t=0,la=ri(0),Ve=0,tl=null,ji=0,lu=0,gm=0,_o=null,At=null,ym=0,Pa=1/0,Vr=null,nc=!1,gp=null,Bn=null,rs=!1,jn=null,ic=0,zo=0,yp=null,Es=-1,Os=0;function kt(){return oe&6?Ie():Es!==-1?Es:Es=Ie()}function Hn(e){return e.mode&1?oe&2&&ct!==0?ct&-ct:yO.transition!==null?(Os===0&&(Os=Wx()),Os):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Jx(e.type)),e):1}function Tr(e,t,r,n){if(50<zo)throw zo=0,yp=null,Error(I(185));gl(e,r,n),(!(oe&2)||e!==rt)&&(e===rt&&(!(oe&2)&&(lu|=r),Ve===4&&_n(e,ct)),It(e,n),r===1&&oe===0&&!(t.mode&1)&&(Pa=Ie()+500,nu&&ni()))}function It(e,t){var r=e.callbackNode;yE(e,t);var n=Bs(e,e===rt?ct:0);if(n===0)r!==null&&t0(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&t0(r),t===1)e.tag===0?gO(G0.bind(null,e)):gw(G0.bind(null,e)),pO(function(){!(oe&6)&&ni()}),r=null;else{switch(Vx(n)){case 1:r=Kh;break;case 4:r=Ux;break;case 16:r=Fs;break;case 536870912:r=Kx;break;default:r=Fs}r=v2(r,c2.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function c2(e,t){if(Es=-1,Os=0,oe&6)throw Error(I(327));var r=e.callbackNode;if(va()&&e.callbackNode!==r)return null;var n=Bs(e,e===rt?ct:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ac(e,n);else{t=n;var i=oe;oe|=2;var a=d2();(rt!==e||ct!==t)&&(Vr=null,Pa=Ie()+500,Pi(e,t));do try{LO();break}catch(l){u2(e,l)}while(1);nm(),rc.current=a,oe=i,$e!==null?t=0:(rt=null,ct=0,t=Ve)}if(t!==0){if(t===2&&(i=Wf(e),i!==0&&(n=i,t=bp(e,i))),t===1)throw r=tl,Pi(e,0),_n(e,n),It(e,Ie()),r;if(t===6)_n(e,n);else{if(i=e.current.alternate,!(n&30)&&!DO(i)&&(t=ac(e,n),t===2&&(a=Wf(e),a!==0&&(n=a,t=bp(e,a))),t===1))throw r=tl,Pi(e,0),_n(e,n),It(e,Ie()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(I(345));case 2:pi(e,At,Vr);break;case 3:if(_n(e,n),(n&130023424)===n&&(t=ym+500-Ie(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){kt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zf(pi.bind(null,e,At,Vr),t);break}pi(e,At,Vr);break;case 4:if(_n(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Ar(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*IO(n/1960))-n,10<n){e.timeoutHandle=Zf(pi.bind(null,e,At,Vr),n);break}pi(e,At,Vr);break;case 5:pi(e,At,Vr);break;default:throw Error(I(329))}}}return It(e,Ie()),e.callbackNode===r?c2.bind(null,e):null}function bp(e,t){var r=_o;return e.current.memoizedState.isDehydrated&&(Pi(e,t).flags|=256),e=ac(e,t),e!==2&&(t=At,At=r,t!==null&&xp(t)),e}function xp(e){At===null?At=e:At.push.apply(At,e)}function DO(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!zr(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~gm,t&=~lu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ar(t),n=1<<r;e[r]=-1,t&=~n}}function G0(e){if(oe&6)throw Error(I(327));va();var t=Bs(e,0);if(!(t&1))return It(e,Ie()),null;var r=ac(e,t);if(e.tag!==0&&r===2){var n=Wf(e);n!==0&&(t=n,r=bp(e,n))}if(r===1)throw r=tl,Pi(e,0),_n(e,t),It(e,Ie()),r;if(r===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pi(e,At,Vr),It(e,Ie()),null}function bm(e,t){var r=oe;oe|=1;try{return e(t)}finally{oe=r,oe===0&&(Pa=Ie()+500,nu&&ni())}}function Ii(e){jn!==null&&jn.tag===0&&!(oe&6)&&va();var t=oe;oe|=1;var r=dr.transition,n=fe;try{if(dr.transition=null,fe=1,e)return e()}finally{fe=n,dr.transition=r,oe=t,!(oe&6)&&ni()}}function xm(){$t=la.current,Ce(la)}function Pi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,fO(r)),$e!==null)for(r=$e.return;r!==null;){var n=r;switch(em(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Vs();break;case 3:Ca(),Ce(Mt),Ce(bt),cm();break;case 5:sm(n);break;case 4:Ca();break;case 13:Ce(Ae);break;case 19:Ce(Ae);break;case 10:im(n.type._context);break;case 22:case 23:xm()}r=r.return}if(rt=e,$e=e=Un(e.current,null),ct=$t=t,Ve=0,tl=null,gm=lu=ji=0,At=_o=null,yi!==null){for(t=0;t<yi.length;t++)if(r=yi[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}yi=null}return e}function u2(e,t){do{var r=$e;try{if(nm(),ks.current=tc,ec){for(var n=Te.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ec=!1}if(Mi=0,et=We=Te=null,Ao=!1,Jo=0,vm.current=null,r===null||r.return===null){Ve=1,tl=t,$e=null;break}e:{var a=e,o=r.return,l=r,s=t;if(t=ct,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=j0(o);if(h!==null){h.flags&=-257,I0(h,o,l,a,t),h.mode&1&&M0(a,c,t),t=h,s=c;var m=t.updateQueue;if(m===null){var v=new Set;v.add(s),t.updateQueue=v}else m.add(s);break e}else{if(!(t&1)){M0(a,c,t),wm();break e}s=Error(I(426))}}else if(Pe&&l.mode&1){var b=j0(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),I0(b,o,l,a,t),tm(ka(s,l));break e}}a=s=ka(s,l),Ve!==4&&(Ve=2),_o===null?_o=[a]:_o.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Gw(a,s,t);N0(a,g);break e;case 1:l=s;var w=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Bn===null||!Bn.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=Yw(a,l,t);N0(a,C);break e}}a=a.return}while(a!==null)}p2(r)}catch(k){t=k,$e===r&&r!==null&&($e=r=r.return);continue}break}while(1)}function d2(){var e=rc.current;return rc.current=tc,e===null?tc:e}function wm(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),rt===null||!(ji&268435455)&&!(lu&268435455)||_n(rt,ct)}function ac(e,t){var r=oe;oe|=2;var n=d2();(rt!==e||ct!==t)&&(Vr=null,Pi(e,t));do try{RO();break}catch(i){u2(e,i)}while(1);if(nm(),oe=r,rc.current=n,$e!==null)throw Error(I(261));return rt=null,ct=0,Ve}function RO(){for(;$e!==null;)f2($e)}function LO(){for(;$e!==null&&!cE();)f2($e)}function f2(e){var t=m2(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?p2(e):$e=t,vm.current=null}function p2(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=_O(r,t),r!==null){r.flags&=32767,$e=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,$e=null;return}}else if(r=TO(r,t,$t),r!==null){$e=r;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Ve===0&&(Ve=5)}function pi(e,t,r){var n=fe,i=dr.transition;try{dr.transition=null,fe=1,$O(e,t,r,n)}finally{dr.transition=i,fe=n}return null}function $O(e,t,r,n){do va();while(jn!==null);if(oe&6)throw Error(I(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(bE(e,a),e===rt&&($e=rt=null,ct=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||rs||(rs=!0,v2(Fs,function(){return va(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=dr.transition,dr.transition=null;var o=fe;fe=1;var l=oe;oe|=4,vm.current=null,MO(e,r),l2(r,e),aO(Qf),Hs=!!Xf,Qf=Xf=null,e.current=r,jO(r),uE(),oe=l,fe=o,dr.transition=a}else e.current=r;if(rs&&(rs=!1,jn=e,ic=i),a=e.pendingLanes,a===0&&(Bn=null),pE(r.stateNode),It(e,Ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,e=gp,gp=null,e;return ic&1&&e.tag!==0&&va(),a=e.pendingLanes,a&1?e===yp?zo++:(zo=0,yp=e):zo=0,ni(),null}function va(){if(jn!==null){var e=Vx(ic),t=dr.transition,r=fe;try{if(dr.transition=null,fe=16>e?16:e,jn===null)var n=!1;else{if(e=jn,jn=null,ic=0,oe&6)throw Error(I(331));var i=oe;for(oe|=4,U=e.current;U!==null;){var a=U,o=a.child;if(U.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(U=c;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:To(8,u,a)}var d=u.child;if(d!==null)d.return=u,U=d;else for(;U!==null;){u=U;var p=u.sibling,h=u.return;if(i2(u),u===c){U=null;break}if(p!==null){p.return=h,U=p;break}U=h}}}var m=a.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}U=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,U=o;else e:for(;U!==null;){if(a=U,a.flags&2048)switch(a.tag){case 0:case 11:case 15:To(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,U=g;break e}U=a.return}}var w=e.current;for(U=w;U!==null;){o=U;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,U=S;else e:for(o=w;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(k){Me(l,l.return,k)}if(l===o){U=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,U=C;break e}U=l.return}}if(oe=i,ni(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(Jc,e)}catch{}n=!0}return n}finally{fe=r,dr.transition=t}}return!1}function Y0(e,t,r){t=ka(r,t),t=Gw(e,t,1),e=Fn(e,t,1),t=kt(),e!==null&&(gl(e,1,t),It(e,t))}function Me(e,t,r){if(e.tag===3)Y0(e,e,r);else for(;t!==null;){if(t.tag===3){Y0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Bn===null||!Bn.has(n))){e=ka(r,e),e=Yw(t,e,1),t=Fn(t,e,1),e=kt(),t!==null&&(gl(t,1,e),It(t,e));break}}t=t.return}}function FO(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&r,rt===e&&(ct&r)===r&&(Ve===4||Ve===3&&(ct&130023424)===ct&&500>Ie()-ym?Pi(e,0):gm|=r),It(e,t)}function h2(e,t){t===0&&(e.mode&1?(t=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):t=1);var r=kt();e=sn(e,t),e!==null&&(gl(e,t,r),It(e,r))}function BO(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),h2(e,r)}function HO(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(I(314))}n!==null&&n.delete(t),h2(e,r)}var m2;m2=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Mt.current)_t=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return _t=!1,AO(e,t,r);_t=!!(e.flags&131072)}else _t=!1,Pe&&t.flags&1048576&&yw(t,qs,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ns(e,t),e=t.pendingProps;var i=xa(t,bt.current);ma(t,r),i=dm(null,t,n,e,i,r);var a=fm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(n)?(a=!0,Gs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,om(t),i.updater=iu,t.stateNode=i,i._reactInternals=t,op(t,n,e,r),t=cp(null,t,n,!0,a,r)):(t.tag=0,Pe&&a&&Zh(t),St(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=KO(n),e=Sr(n,e),i){case 0:t=sp(null,t,n,e,r);break e;case 1:t=L0(null,t,n,e,r);break e;case 11:t=D0(null,t,n,e,r);break e;case 14:t=R0(null,t,n,Sr(n.type,e),r);break e}throw Error(I(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Sr(n,i),sp(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Sr(n,i),L0(e,t,n,i,r);case 3:e:{if(Jw(t),e===null)throw Error(I(387));n=t.pendingProps,a=t.memoizedState,i=a.element,Sw(e,t),Js(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ka(Error(I(423)),t),t=$0(e,t,n,r,i);break e}else if(n!==i){i=ka(Error(I(424)),t),t=$0(e,t,n,r,i);break e}else for(Ut=$n(t.stateNode.containerInfo.firstChild),Wt=t,Pe=!0,kr=null,r=Nw(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(wa(),n===i){t=cn(e,t,r);break e}St(e,t,n,r)}t=t.child}return t;case 5:return Ew(t),e===null&&np(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Jf(n,i)?o=null:a!==null&&Jf(n,a)&&(t.flags|=32),Qw(e,t),St(e,t,o,r),t.child;case 6:return e===null&&np(t),null;case 13:return Zw(e,t,r);case 4:return lm(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Sa(t,null,n,r):St(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Sr(n,i),D0(e,t,n,i,r);case 7:return St(e,t,t.pendingProps,r),t.child;case 8:return St(e,t,t.pendingProps.children,r),t.child;case 12:return St(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,xe(Xs,n._currentValue),n._currentValue=o,a!==null)if(zr(a.value,o)){if(a.children===i.children&&!Mt.current){t=cn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===n){if(a.tag===1){s=tn(-1,r&-r),s.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),ip(a.return,r,t),l.lanes|=r;break}s=s.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(I(341));o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),ip(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}St(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,ma(t,r),i=pr(i),n=n(i),t.flags|=1,St(e,t,n,r),t.child;case 14:return n=t.type,i=Sr(n,t.pendingProps),i=Sr(n.type,i),R0(e,t,n,i,r);case 15:return qw(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Sr(n,i),Ns(e,t),t.tag=1,jt(n)?(e=!0,Gs(t)):e=!1,ma(t,r),kw(t,n,i),op(t,n,i,r),cp(null,t,n,!0,e,r);case 19:return e2(e,t,r);case 22:return Xw(e,t,r)}throw Error(I(156,t.tag))};function v2(e,t){return Hx(e,t)}function UO(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(e,t,r,n){return new UO(e,t,r,n)}function Sm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function KO(e){if(typeof e=="function")return Sm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bh)return 11;if(e===Hh)return 14}return 2}function Un(e,t){var r=e.alternate;return r===null?(r=cr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function As(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")Sm(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qi:return Ni(r.children,i,a,t);case Fh:o=8,i|=8;break;case Tf:return e=cr(12,r,t,i|2),e.elementType=Tf,e.lanes=a,e;case _f:return e=cr(13,r,t,i),e.elementType=_f,e.lanes=a,e;case zf:return e=cr(19,r,t,i),e.elementType=zf,e.lanes=a,e;case Px:return su(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cx:o=10;break e;case kx:o=9;break e;case Bh:o=11;break e;case Hh:o=14;break e;case En:o=16,n=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=cr(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Ni(e,t,r,n){return e=cr(7,e,n,t),e.lanes=r,e}function su(e,t,r,n){return e=cr(22,e,n,t),e.elementType=Px,e.lanes=r,e.stateNode={isHidden:!1},e}function $d(e,t,r){return e=cr(6,e,null,t),e.lanes=r,e}function Fd(e,t,r){return t=cr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function WO(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cm(e,t,r,n,i,a,o,l,s){return e=new WO(e,t,r,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cr(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(a),e}function VO(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xi,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function g2(e){if(!e)return qn;e=e._reactInternals;e:{if(Hi(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var r=e.type;if(jt(r))return vw(e,r,t)}return t}function y2(e,t,r,n,i,a,o,l,s){return e=Cm(r,n,!0,e,i,a,o,l,s),e.context=g2(null),r=e.current,n=kt(),i=Hn(r),a=tn(n,i),a.callback=t??null,Fn(r,a,i),e.current.lanes=i,gl(e,i,n),It(e,n),e}function cu(e,t,r,n){var i=t.current,a=kt(),o=Hn(i);return r=g2(r),t.context===null?t.context=r:t.pendingContext=r,t=tn(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Fn(i,t,o),e!==null&&(Tr(e,i,o,a),Cs(e,i,o)),o}function oc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function q0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function km(e,t){q0(e,t),(e=e.alternate)&&q0(e,t)}function GO(){return null}var b2=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pm(e){this._internalRoot=e}uu.prototype.render=Pm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));cu(e,t,null,null)};uu.prototype.unmount=Pm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ii(function(){cu(null,e,null,null)}),t[ln]=null}};function uu(e){this._internalRoot=e}uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=qx();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tn.length&&t!==0&&t<Tn[r].priority;r++);Tn.splice(r,0,e),r===0&&Qx(e)}};function Nm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function X0(){}function YO(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var c=oc(o);a.call(c)}}var o=y2(t,n,e,0,null,!1,!1,"",X0);return e._reactRootContainer=o,e[ln]=o.current,Go(e.nodeType===8?e.parentNode:e),Ii(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=oc(s);l.call(c)}}var s=Cm(e,0,!1,null,null,!1,!1,"",X0);return e._reactRootContainer=s,e[ln]=s.current,Go(e.nodeType===8?e.parentNode:e),Ii(function(){cu(t,s,r,n)}),s}function fu(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=oc(o);l.call(s)}}cu(t,o,e,i)}else o=YO(r,t,e,i,n);return oc(o)}Gx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=xo(t.pendingLanes);r!==0&&(Wh(t,r|1),It(t,Ie()),!(oe&6)&&(Pa=Ie()+500,ni()))}break;case 13:Ii(function(){var n=sn(e,1);if(n!==null){var i=kt();Tr(n,e,1,i)}}),km(e,1)}};Vh=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var r=kt();Tr(t,e,134217728,r)}km(e,134217728)}};Yx=function(e){if(e.tag===13){var t=Hn(e),r=sn(e,t);if(r!==null){var n=kt();Tr(r,e,t,n)}km(e,t)}};qx=function(){return fe};Xx=function(e,t){var r=fe;try{return fe=e,t()}finally{fe=r}};Hf=function(e,t,r){switch(t){case"input":if(If(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=ru(n);if(!i)throw Error(I(90));Ex(n),If(n,i)}}}break;case"textarea":Ax(e,r);break;case"select":t=r.value,t!=null&&da(e,!!r.multiple,t,!1)}};Dx=bm;Rx=Ii;var qO={usingClientEntryPoint:!1,Events:[bl,ta,ru,jx,Ix,bm]},lo={findFiberByHostInstance:gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XO={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fx(e),e===null?null:e.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||GO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Jc=ns.inject(XO),$r=ns}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qO;Jt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nm(t))throw Error(I(200));return VO(e,t,null,r)};Jt.createRoot=function(e,t){if(!Nm(e))throw Error(I(299));var r=!1,n="",i=b2;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cm(e,1,!1,null,null,r,!1,n,i),e[ln]=t.current,Go(e.nodeType===8?e.parentNode:e),new Pm(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Fx(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return Ii(e)};Jt.hydrate=function(e,t,r){if(!du(t))throw Error(I(200));return fu(null,e,t,!0,r)};Jt.hydrateRoot=function(e,t,r){if(!Nm(e))throw Error(I(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=b2;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=y2(t,null,e,1,r??null,i,!1,a,o),e[ln]=t.current,Go(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new uu(t)};Jt.render=function(e,t,r){if(!du(t))throw Error(I(200));return fu(null,e,t,!1,r)};Jt.unmountComponentAtNode=function(e){if(!du(e))throw Error(I(40));return e._reactRootContainer?(Ii(function(){fu(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};Jt.unstable_batchedUpdates=bm;Jt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!du(r))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return fu(e,t,r,!1,n)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}t(),e.exports=Jt})(GN);var Q0=Ds;Ef.createRoot=Q0.createRoot,Ef.hydrateRoot=Q0.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rl.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const J0="popstate";function QO(e){e===void 0&&(e={});function t(n,i){let{pathname:a,search:o,hash:l}=n.location;return wp("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:lc(i)}return ZO(t,r,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Em(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function JO(){return Math.random().toString(36).substr(2,8)}function Z0(e,t){return{usr:e.state,key:e.key,idx:t}}function wp(e,t,r,n){return r===void 0&&(r=null),rl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$a(t):t,{state:r,key:t&&t.key||n||JO()})}function lc(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function $a(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function ZO(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,o=i.history,l=In.Pop,s=null,c=u();c==null&&(c=0,o.replaceState(rl({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){l=In.Pop;let b=u(),g=b==null?null:b-c;c=b,s&&s({action:l,location:v.location,delta:g})}function p(b,g){l=In.Push;let w=wp(v.location,b,g);r&&r(w,b),c=u()+1;let S=Z0(w,c),C=v.createHref(w);try{o.pushState(S,"",C)}catch{i.location.assign(C)}a&&s&&s({action:l,location:v.location,delta:1})}function h(b,g){l=In.Replace;let w=wp(v.location,b,g);r&&r(w,b),c=u();let S=Z0(w,c),C=v.createHref(w);o.replaceState(S,"",C),a&&s&&s({action:l,location:v.location,delta:0})}function m(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof b=="string"?b:lc(b);return He(g,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,g)}let v={get action(){return l},get location(){return e(i,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(J0,d),s=b,()=>{i.removeEventListener(J0,d),s=null}},createHref(b){return t(i,b)},createURL:m,encodeLocation(b){let g=m(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(b){return o.go(b)}};return v}var ey;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ey||(ey={}));function eA(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?$a(t):t,i=Om(n.pathname||"/",r);if(i==null)return null;let a=x2(e);tA(a);let o=null;for(let l=0;o==null&&l<a.length;++l)o=uA(a[l],pA(i));return o}function x2(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(He(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let c=Kn([n,s.relativePath]),u=r.concat(s);a.children&&a.children.length>0&&(He(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),x2(a.children,t,u,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:sA(c,a.index),routesMeta:u})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of w2(a.path))i(a,o,s)}),t}function w2(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=w2(n.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function tA(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:cA(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const rA=/^:\w+$/,nA=3,iA=2,aA=1,oA=10,lA=-2,ty=e=>e==="*";function sA(e,t){let r=e.split("/"),n=r.length;return r.some(ty)&&(n+=lA),t&&(n+=iA),r.filter(i=>!ty(i)).reduce((i,a)=>i+(rA.test(a)?nA:a===""?aA:oA),n)}function cA(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function uA(e,t){let{routesMeta:r}=e,n={},i="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],s=o===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=dA({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!u)return null;Object.assign(n,u.params);let d=l.route;a.push({params:n,pathname:Kn([i,u.pathname]),pathnameBase:gA(Kn([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Kn([i,u.pathnameBase]))}return a}function dA(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=fA(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((c,u,d)=>{if(u==="*"){let p=l[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=hA(l[d]||"",u),c},{}),pathname:a,pathnameBase:o,pattern:e}}function fA(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Em(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(n.push(l),"/([^\\/]+)"));return e.endsWith("*")?(n.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function pA(e){try{return decodeURI(e)}catch(t){return Em(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hA(e,t){try{return decodeURIComponent(e)}catch(r){return Em(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Om(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function mA(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?$a(e):e;return{pathname:r?r.startsWith("/")?r:vA(r,t):t,search:yA(n),hash:bA(i)}}function vA(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Bd(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function C2(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=$a(e):(i=rl({},e),He(!i.pathname||!i.pathname.includes("?"),Bd("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),Bd("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),Bd("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(n||o==null)l=r;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=mA(i,l),c=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const Kn=e=>e.join("/").replace(/\/\/+/g,"/"),gA=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yA=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bA=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function xA(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const SA=typeof Object.is=="function"?Object.is:wA,{useState:CA,useEffect:kA,useLayoutEffect:PA,useDebugValue:NA}=Is;function EA(e,t,r){const n=t(),[{inst:i},a]=CA({inst:{value:n,getSnapshot:t}});return PA(()=>{i.value=n,i.getSnapshot=t,Hd(i)&&a({inst:i})},[e,n,t]),kA(()=>(Hd(i)&&a({inst:i}),e(()=>{Hd(i)&&a({inst:i})})),[e]),NA(n),n}function Hd(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!SA(r,n)}catch{return!0}}function OA(e,t,r){return t()}const AA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TA=!AA,_A=TA?OA:EA;"useSyncExternalStore"in Is&&(e=>e.useSyncExternalStore)(Is);const k2=y.createContext(null),Am=y.createContext(null),wl=y.createContext(null),pu=y.createContext(null),ii=y.createContext({outlet:null,matches:[]}),P2=y.createContext(null);function Sp(){return Sp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sp.apply(this,arguments)}function zA(e,t){let{relative:r}=t===void 0?{}:t;Fa()||He(!1);let{basename:n,navigator:i}=y.useContext(wl),{hash:a,pathname:o,search:l}=N2(e,{relative:r}),s=o;return n!=="/"&&(s=o==="/"?n:Kn([n,o])),i.createHref({pathname:s,search:l,hash:a})}function Fa(){return y.useContext(pu)!=null}function Ba(){return Fa()||He(!1),y.useContext(pu).location}function Kr(){Fa()||He(!1);let{basename:e,navigator:t}=y.useContext(wl),{matches:r}=y.useContext(ii),{pathname:n}=Ba(),i=JSON.stringify(S2(r).map(l=>l.pathnameBase)),a=y.useRef(!1);return y.useEffect(()=>{a.current=!0}),y.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let c=C2(l,JSON.parse(i),n,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Kn([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,i,n])}const MA=y.createContext(null);function jA(e){let t=y.useContext(ii).outlet;return t&&y.createElement(MA.Provider,{value:e},t)}function IA(){let{matches:e}=y.useContext(ii),t=e[e.length-1];return t?t.params:{}}function N2(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=y.useContext(ii),{pathname:i}=Ba(),a=JSON.stringify(S2(n).map(o=>o.pathnameBase));return y.useMemo(()=>C2(e,JSON.parse(a),i,r==="path"),[e,a,i,r])}function DA(e,t){Fa()||He(!1);let{navigator:r}=y.useContext(wl),n=y.useContext(Am),{matches:i}=y.useContext(ii),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Ba(),c;if(t){var u;let v=typeof t=="string"?$a(t):t;l==="/"||(u=v.pathname)!=null&&u.startsWith(l)||He(!1),c=v}else c=s;let d=c.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",h=eA(e,{pathname:p}),m=FA(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Kn([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Kn([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n||void 0);return t&&m?y.createElement(pu.Provider,{value:{location:Sp({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:In.Pop}},m):m}function RA(){let e=KA(),t=xA(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:i},r):null,a)}class LA extends y.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?y.createElement(ii.Provider,{value:this.props.routeContext},y.createElement(P2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $A(e){let{routeContext:t,match:r,children:n}=e,i=y.useContext(k2);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(ii.Provider,{value:t},n)}function FA(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,i=r==null?void 0:r.errors;if(i!=null){let a=n.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||He(!1),n=n.slice(0,Math.min(n.length,a+1))}return n.reduceRight((a,o,l)=>{let s=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;r&&(o.route.ErrorBoundary?c=y.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=y.createElement(RA,null));let u=t.concat(n.slice(0,l+1)),d=()=>{let p=a;return s?p=c:o.route.Component?p=y.createElement(o.route.Component,null):o.route.element&&(p=o.route.element),y.createElement($A,{match:o,routeContext:{outlet:a,matches:u},children:p})};return r&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?y.createElement(LA,{location:r.location,component:c,error:s,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var ry;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(ry||(ry={}));var sc;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(sc||(sc={}));function BA(e){let t=y.useContext(Am);return t||He(!1),t}function HA(e){let t=y.useContext(ii);return t||He(!1),t}function UA(e){let t=HA(),r=t.matches[t.matches.length-1];return r.route.id||He(!1),r.route.id}function KA(){var e;let t=y.useContext(P2),r=BA(sc.UseRouteError),n=UA(sc.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function E2(e){let{to:t,replace:r,state:n,relative:i}=e;Fa()||He(!1);let a=y.useContext(Am),o=Kr();return y.useEffect(()=>{a&&a.navigation.state!=="idle"||o(t,{replace:r,state:n,relative:i})}),null}function O2(e){return jA(e.context)}function at(e){He(!1)}function WA(e){let{basename:t="/",children:r=null,location:n,navigationType:i=In.Pop,navigator:a,static:o=!1}=e;Fa()&&He(!1);let l=t.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:l,navigator:a,static:o}),[l,a,o]);typeof n=="string"&&(n=$a(n));let{pathname:c="/",search:u="",hash:d="",state:p=null,key:h="default"}=n,m=y.useMemo(()=>{let v=Om(c,l);return v==null?null:{location:{pathname:v,search:u,hash:d,state:p,key:h},navigationType:i}},[l,c,u,d,p,h,i]);return m==null?null:y.createElement(wl.Provider,{value:s},y.createElement(pu.Provider,{children:r,value:m}))}function VA(e){let{children:t,location:r}=e,n=y.useContext(k2),i=n&&!t?n.router.routes:Cp(t);return DA(i,r)}var ny;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ny||(ny={}));new Promise(()=>{});function Cp(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,i)=>{if(!y.isValidElement(n))return;let a=[...t,i];if(n.type===y.Fragment){r.push.apply(r,Cp(n.props.children,a));return}n.type!==at&&He(!1),!n.props.index||!n.props.children||He(!1);let o={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Cp(n.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kp(){return kp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kp.apply(this,arguments)}function GA(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function YA(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qA(e,t){return e.button===0&&(!t||t==="_self")&&!YA(e)}function Pp(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function XA(e,t){let r=Pp(e);if(t)for(let n of t.keys())r.has(n)||t.getAll(n).forEach(i=>{r.append(n,i)});return r}const QA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JA(e){let{basename:t,children:r,window:n}=e,i=y.useRef();i.current==null&&(i.current=QO({window:n,v5Compat:!0}));let a=i.current,[o,l]=y.useState({action:a.action,location:a.location});return y.useLayoutEffect(()=>a.listen(l),[a]),y.createElement(WA,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:a})}const ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_r=y.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:c,preventScrollReset:u}=t,d=GA(t,QA),{basename:p}=y.useContext(wl),h,m=!1;if(typeof c=="string"&&e4.test(c)&&(h=c,ZA)){let w=new URL(window.location.href),S=c.startsWith("//")?new URL(w.protocol+c):new URL(c),C=Om(S.pathname,p);S.origin===w.origin&&C!=null?c=C+S.search+S.hash:m=!0}let v=zA(c,{relative:i}),b=t4(c,{replace:o,state:l,target:s,preventScrollReset:u,relative:i});function g(w){n&&n(w),w.defaultPrevented||b(w)}return y.createElement("a",kp({},d,{href:h||v,onClick:m||a?n:g,ref:r,target:s}))});var iy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(iy||(iy={}));var ay;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ay||(ay={}));function t4(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,l=Kr(),s=Ba(),c=N2(e,{relative:o});return y.useCallback(u=>{if(qA(u,r)){u.preventDefault();let d=n!==void 0?n:lc(s)===lc(c);l(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[s,l,c,n,i,r,e,a,o])}function A2(e){let t=y.useRef(Pp(e)),r=y.useRef(!1),n=Ba(),i=y.useMemo(()=>XA(n.search,r.current?null:t.current),[n.search]),a=Kr(),o=y.useCallback((l,s)=>{const c=Pp(typeof l=="function"?l(i):l);r.current=!0,a("?"+c,s)},[a,i]);return[i,o]}const Ui="/assets/logo-4a336de9.png";var T2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oy=en.createContext&&en.createContext(T2),Wn=globalThis&&globalThis.__assign||function(){return Wn=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wn.apply(this,arguments)},r4=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function _2(e){return e&&e.map(function(t,r){return en.createElement(t.tag,Wn({key:r},t.attr),_2(t.child))})}function pe(e){return function(t){return en.createElement(n4,Wn({attr:Wn({},e.attr)},t),_2(e.child))}}function n4(e){var t=function(r){var n=e.attr,i=e.size,a=e.title,o=r4(e,["attr","size","title"]),l=i||r.size||"1em",s;return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),en.createElement("svg",Wn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,o,{className:s,style:Wn(Wn({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&en.createElement("title",null,a),e.children)};return oy!==void 0?en.createElement(oy.Consumer,null,function(r){return t(r)}):t(T2)}function Np(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 3a9 9 0 00-9 9H1l4 4 4-4H6c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7c-1.9 0-3.62-.76-4.88-1.99L6.7 18.42A8.982 8.982 0 0013 21a9 9 0 000-18zm2 8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"}}]})(e)}function i4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}function z2(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 19a6.995 6.995 0 0110-6.32V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"}}]})(e)}function Ep(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"}}]})(e)}function cc(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"}}]})(e)}function a4(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"}}]})(e)}function M2(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}}]})(e)}function o4(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"}},{tag:"path",attr:{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}},{tag:"path",attr:{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"}}]})(e)}function l4(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"}}]})(e)}function s4(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]})(e)}function c4(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function ly(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function sy(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function u4(e){return pe({tag:"svg",attr:{t:"1569683742680",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]})(e)}function Tm(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"}}]})(e)}function d4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"}}]})(e)}function j2(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"}},{tag:"path",attr:{d:"M11 7h2v7h-2zm0 8h2v2h-2z"}}]})(e)}function f4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 17a5.007 5.007 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.007 5.007 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z"}}]})(e)}function p4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"}}]})(e)}function h4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m2 12 5 4v-3h9v-2H7V8z"}},{tag:"path",attr:{d:"M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"}}]})(e)}function m4(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"}}]})(e)}function v4(e){return pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"}}]})(e)}function g4(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"}}]})(e)}function I2(e){return pe({tag:"svg",attr:{viewBox:"0 0 256 512"},child:[{tag:"path",attr:{d:"M168 416c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88v-64h-88c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h88V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64h-88z"}}]})(e)}function D2(e){return pe({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"}}]})(e)}function y4(e){return pe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function b4(e){return pe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M564 0h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-48.7 48.7C422.5 72.1 396.2 64 368 64c-33.7 0-64.6 11.6-89.2 30.9 14 16.7 25 36 32.1 57.1 14.5-14.8 34.7-24 57.1-24 44.1 0 80 35.9 80 80s-35.9 80-80 80c-22.3 0-42.6-9.2-57.1-24-7.1 21.1-18 40.4-32.1 57.1 24.5 19.4 55.5 30.9 89.2 30.9 79.5 0 144-64.5 144-144 0-28.2-8.1-54.5-22.1-76.7l48.7-48.7 16.9 16.9c2.4 2.4 5.4 3.5 8.4 3.5 6.2 0 12.1-4.8 12.1-12V12c0-6.6-5.4-12-12-12zM144 64C64.5 64 0 128.5 0 208c0 68.5 47.9 125.9 112 140.4V400H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.6 112-71.9 112-140.4 0-79.5-64.5-144-144-144zm0 224c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"}}]})(e)}function R2(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 64h-25.98C438.44 92.28 448 125.01 448 160c0 105.87-86.13 192-192 192S64 265.87 64 160c0-34.99 9.56-67.72 25.98-96H64C28.71 64 0 92.71 0 128v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64V128c0-35.29-28.71-64-64-64zM256 320c88.37 0 160-71.63 160-160S344.37 0 256 0 96 71.63 96 160s71.63 160 160 160zm-.3-151.94l33.58-78.36c3.5-8.17 12.94-11.92 21.03-8.41 8.12 3.48 11.88 12.89 8.41 21l-33.67 78.55C291.73 188 296 197.45 296 208c0 22.09-17.91 40-40 40s-40-17.91-40-40c0-21.98 17.76-39.77 39.7-39.94z"}}]})(e)}function cy(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z"}}]}]})(e)}const x4=()=>{const[e,t]=y.useState("dashboard"),[r,n]=y.useState(null),i=Kr(),a=Ba();y.useEffect(()=>{const s=a.pathname;s==="/dashboard"?t("dashboard"):s==="/dashboard/Camera"?t("camera"):s.startsWith("/dashboard/vitals")?t("vitals"):s.startsWith("/dashboard/analytics")?t("analytics"):s.startsWith("/dashboard/api-keys")?t("api-keys"):s.startsWith("/dashboard/profile")?t("profile"):s.startsWith("/dashboard/results")?t("results"):s.startsWith("/dashboard/insights")&&t("insights");const c=localStorage.getItem("userProfile");c&&n(JSON.parse(c))},[a.pathname]);const o=()=>{localStorage.removeItem("authToken"),localStorage.removeItem("user"),localStorage.removeItem("userProfile"),i("/")},l=(s,c)=>{t(c),i(s)};return x("div",{className:"sideBar grid",children:[x("div",{className:"logoDiv flex",children:[f("img",{src:Ui,alt:"Health Vitals Logo"}),f("h2",{children:"Health Vitals"})]}),x("div",{className:"menuDiv",children:[f("h3",{className:"divTitle",children:"MAIN MENU"}),x("ul",{className:"menuLists grid",children:[f("li",{className:`listItem ${e==="dashboard"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard","dashboard")},children:[f(cy,{className:"icon"}),f("span",{className:"smallText",children:"Dashboard"})]})}),f("li",{className:`listItem ${e==="camera"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/Camera","camera")},children:[f(cy,{className:"icon"}),f("span",{className:"smallText",children:"Live Health CheckUp"})]})}),f("li",{className:`listItem ${e==="vitals"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/vitals","vitals")},children:[f(g4,{className:"icon"}),f("span",{className:"smallText",children:"Health Vitals"})]})}),f("li",{className:`listItem ${e==="analytics"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/analytics","analytics")},children:[f(s4,{className:"icon"}),f("span",{className:"smallText",children:"Analytics"})]})}),f("li",{className:`listItem ${e==="results"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/results","results")},children:[f(o4,{className:"icon"}),f("span",{className:"smallText",children:"My Results"})]})})]})]}),x("div",{className:"settingsDiv",children:[f("h3",{className:"divTitle",children:"SETTINGS & API"}),x("ul",{className:"menuLists grid",children:[f("li",{className:`listItem ${e==="api-keys"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/api-keys","api-keys")},children:[f(f4,{className:"icon"}),f("span",{className:"smallText",children:"API Keys"})]})}),f("li",{className:`listItem ${e==="profile"?"active":""}`,children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),l("/dashboard/profile","profile")},children:[f(m4,{className:"icon"}),f("span",{className:"smallText",children:"Profile"})]})}),f("li",{className:"listItem",children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),window.open("https://docs.anura.ai","_blank")},children:[f(l4,{className:"icon"}),f("span",{className:"smallText",children:"Help Center"})]})}),f("li",{className:"listItem logout",children:x("a",{href:"#",className:"menuLink flex",onClick:s=>{s.preventDefault(),o()},children:[f(h4,{className:"icon"}),f("span",{className:"smallText",children:"Log Out"})]})})]})]}),x("div",{className:"sideBarCard",children:[f(Ep,{className:"icon"}),x("div",{className:"cardContent",children:[f("div",{className:"circle1"}),f("div",{className:"circle2"}),f("h3",{children:"Health Insights"}),f("p",{children:"Get AI-powered health recommendations based on your vitals and lifestyle."}),f("button",{className:"btn",onClick:()=>l("/dashboard/insights","insights"),children:"View Insights"})]})]}),r&&f("div",{className:"profileSummary",children:x("div",{className:"profileStats",children:[x("div",{className:"stat",children:[f(R2,{className:"icon"}),x("span",{children:[r.weight," ",r.unit==="metric"?"kg":"lbs"]})]}),x("div",{className:"stat",children:[f(I2,{className:"icon"}),x("span",{children:[r.height," ",r.unit==="metric"?"cm":"in"]})]}),r.bmi&&x("div",{className:"stat",children:[f(a4,{className:"icon"}),x("span",{children:["BMI: ",r.bmi]})]})]})})]})},w4=()=>f("div",{className:"dashboard flex",children:x("div",{className:"dashboardContainer flex",children:[f(x4,{}),x("div",{className:"mainContent",children:[f(O2,{})," "]})]})});function L2(e,t){return function(){return e.apply(t,arguments)}}const{toString:$2}=Object.prototype,{getPrototypeOf:_m}=Object,zm=(e=>t=>{const r=$2.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),vn=e=>(e=e.toLowerCase(),t=>zm(t)===e),hu=e=>t=>typeof t===e,{isArray:Ha}=Array,nl=hu("undefined");function S4(e){return e!==null&&!nl(e)&&e.constructor!==null&&!nl(e.constructor)&&Xn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const F2=vn("ArrayBuffer");function C4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&F2(e.buffer),t}const k4=hu("string"),Xn=hu("function"),B2=hu("number"),Mm=e=>e!==null&&typeof e=="object",P4=e=>e===!0||e===!1,Ts=e=>{if(zm(e)!=="object")return!1;const t=_m(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},N4=vn("Date"),E4=vn("File"),O4=vn("Blob"),A4=vn("FileList"),T4=e=>Mm(e)&&Xn(e.pipe),_4=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||$2.call(e)===t||Xn(e.toString)&&e.toString()===t)},z4=vn("URLSearchParams"),M4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sl(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),Ha(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const a=r?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let l;for(n=0;n<o;n++)l=a[n],t.call(null,e[l],l,e)}}function H2(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const U2=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),K2=e=>!nl(e)&&e!==U2;function Op(){const{caseless:e}=K2(this)&&this||{},t={},r=(n,i)=>{const a=e&&H2(t,i)||i;Ts(t[a])&&Ts(n)?t[a]=Op(t[a],n):Ts(n)?t[a]=Op({},n):Ha(n)?t[a]=n.slice():t[a]=n};for(let n=0,i=arguments.length;n<i;n++)arguments[n]&&Sl(arguments[n],r);return t}const j4=(e,t,r,{allOwnKeys:n}={})=>(Sl(t,(i,a)=>{r&&Xn(i)?e[a]=L2(i,r):e[a]=i},{allOwnKeys:n}),e),I4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),D4=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},R4=(e,t,r,n)=>{let i,a,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!n||n(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=r!==!1&&_m(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},L4=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},$4=e=>{if(!e)return null;if(Ha(e))return e;let t=e.length;if(!B2(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},F4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_m(Uint8Array)),B4=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},H4=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},U4=vn("HTMLFormElement"),K4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),uy=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),W4=vn("RegExp"),W2=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Sl(r,(i,a)=>{t(i,a,e)!==!1&&(n[a]=i)}),Object.defineProperties(e,n)},V4=e=>{W2(e,(t,r)=>{if(Xn(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(Xn(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},G4=(e,t)=>{const r={},n=i=>{i.forEach(a=>{r[a]=!0})};return Ha(e)?n(e):n(String(e).split(t)),r},Y4=()=>{},q4=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ud="abcdefghijklmnopqrstuvwxyz",dy="0123456789",V2={DIGIT:dy,ALPHA:Ud,ALPHA_DIGIT:Ud+Ud.toUpperCase()+dy},X4=(e=16,t=V2.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Q4(e){return!!(e&&Xn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const J4=e=>{const t=new Array(10),r=(n,i)=>{if(Mm(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[i]=n;const a=Ha(n)?[]:{};return Sl(n,(o,l)=>{const s=r(o,i+1);!nl(s)&&(a[l]=s)}),t[i]=void 0,a}}return n};return r(e,0)},T={isArray:Ha,isArrayBuffer:F2,isBuffer:S4,isFormData:_4,isArrayBufferView:C4,isString:k4,isNumber:B2,isBoolean:P4,isObject:Mm,isPlainObject:Ts,isUndefined:nl,isDate:N4,isFile:E4,isBlob:O4,isRegExp:W4,isFunction:Xn,isStream:T4,isURLSearchParams:z4,isTypedArray:F4,isFileList:A4,forEach:Sl,merge:Op,extend:j4,trim:M4,stripBOM:I4,inherits:D4,toFlatObject:R4,kindOf:zm,kindOfTest:vn,endsWith:L4,toArray:$4,forEachEntry:B4,matchAll:H4,isHTMLForm:U4,hasOwnProperty:uy,hasOwnProp:uy,reduceDescriptors:W2,freezeMethods:V4,toObjectSet:G4,toCamelCase:K4,noop:Y4,toFiniteNumber:q4,findKey:H2,global:U2,isContextDefined:K2,ALPHABET:V2,generateString:X4,isSpecCompliantForm:Q4,toJSONObject:J4};function ae(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}T.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const G2=ae.prototype,Y2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Y2[e]={value:e}});Object.defineProperties(ae,Y2);Object.defineProperty(G2,"isAxiosError",{value:!0});ae.from=(e,t,r,n,i,a)=>{const o=Object.create(G2);return T.toFlatObject(e,o,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),ae.call(o,e.message,t,r,n,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const Z4=null;function Ap(e){return T.isPlainObject(e)||T.isArray(e)}function q2(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function fy(e,t,r){return e?e.concat(t).map(function(i,a){return i=q2(i),!r&&a?"["+i+"]":i}).join(r?".":""):t}function e3(e){return T.isArray(e)&&!e.some(Ap)}const t3=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function mu(e,t,r){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=T.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!T.isUndefined(b[v])});const n=r.metaTokens,i=r.visitor||u,a=r.dots,o=r.indexes,s=(r.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(i))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(T.isDate(m))return m.toISOString();if(!s&&T.isBlob(m))throw new ae("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(m)||T.isTypedArray(m)?s&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,v,b){let g=m;if(m&&!b&&typeof m=="object"){if(T.endsWith(v,"{}"))v=n?v:v.slice(0,-2),m=JSON.stringify(m);else if(T.isArray(m)&&e3(m)||(T.isFileList(m)||T.endsWith(v,"[]"))&&(g=T.toArray(m)))return v=q2(v),g.forEach(function(S,C){!(T.isUndefined(S)||S===null)&&t.append(o===!0?fy([v],C,a):o===null?v:v+"[]",c(S))}),!1}return Ap(m)?!0:(t.append(fy(b,v,a),c(m)),!1)}const d=[],p=Object.assign(t3,{defaultVisitor:u,convertValue:c,isVisitable:Ap});function h(m,v){if(!T.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),T.forEach(m,function(g,w){(!(T.isUndefined(g)||g===null)&&i.call(t,g,T.isString(w)?w.trim():w,v,p))===!0&&h(g,v?v.concat(w):[w])}),d.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return h(e),t}function py(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function jm(e,t){this._pairs=[],e&&mu(e,this,t)}const X2=jm.prototype;X2.append=function(t,r){this._pairs.push([t,r])};X2.toString=function(t){const r=t?function(n){return t.call(this,n,py)}:py;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function r3(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Q2(e,t,r){if(!t)return e;const n=r&&r.encode||r3,i=r&&r.serialize;let a;if(i?a=i(t,r):a=T.isURLSearchParams(t)?t.toString():new jm(t,r).toString(n),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class n3{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(n){n!==null&&t(n)})}}const hy=n3,J2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},i3=typeof URLSearchParams<"u"?URLSearchParams:jm,a3=typeof FormData<"u"?FormData:null,o3=typeof Blob<"u"?Blob:null,l3=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),s3=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Rr={isBrowser:!0,classes:{URLSearchParams:i3,FormData:a3,Blob:o3},isStandardBrowserEnv:l3,isStandardBrowserWebWorkerEnv:s3,protocols:["http","https","file","blob","url","data"]};function c3(e,t){return mu(e,new Rr.classes.URLSearchParams,Object.assign({visitor:function(r,n,i,a){return Rr.isNode&&T.isBuffer(r)?(this.append(n,r.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function u3(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function d3(e){const t={},r=Object.keys(e);let n;const i=r.length;let a;for(n=0;n<i;n++)a=r[n],t[a]=e[a];return t}function Z2(e){function t(r,n,i,a){let o=r[a++];const l=Number.isFinite(+o),s=a>=r.length;return o=!o&&T.isArray(i)?i.length:o,s?(T.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!l):((!i[o]||!T.isObject(i[o]))&&(i[o]=[]),t(r,n,i[o],a)&&T.isArray(i[o])&&(i[o]=d3(i[o])),!l)}if(T.isFormData(e)&&T.isFunction(e.entries)){const r={};return T.forEachEntry(e,(n,i)=>{t(u3(n),i,r,0)}),r}return null}const f3={"Content-Type":void 0};function p3(e,t,r){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const vu={transitional:J2,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,a=T.isObject(t);if(a&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return i&&i?JSON.stringify(Z2(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(n.indexOf("application/x-www-form-urlencoded")>-1)return c3(t,this.formSerializer).toString();if((l=T.isFileList(t))||n.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return mu(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||i?(r.setContentType("application/json",!1),p3(t)):t}],transformResponse:[function(t){const r=this.transitional||vu.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(t&&T.isString(t)&&(n&&!this.responseType||i)){const o=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?ae.from(l,ae.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rr.classes.FormData,Blob:Rr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};T.forEach(["delete","get","head"],function(t){vu.headers[t]={}});T.forEach(["post","put","patch"],function(t){vu.headers[t]=T.merge(f3)});const Im=vu,h3=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m3=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),r=o.substring(0,i).trim().toLowerCase(),n=o.substring(i+1).trim(),!(!r||t[r]&&h3[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},my=Symbol("internals");function so(e){return e&&String(e).trim().toLowerCase()}function _s(e){return e===!1||e==null?e:T.isArray(e)?e.map(_s):String(e)}function v3(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const g3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Kd(e,t,r,n,i){if(T.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!T.isString(t)){if(T.isString(n))return t.indexOf(n)!==-1;if(T.isRegExp(n))return n.test(t)}}function y3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function b3(e,t){const r=T.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,a,o){return this[n].call(this,t,i,a,o)},configurable:!0})})}class gu{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function a(l,s,c){const u=so(s);if(!u)throw new Error("header name must be a non-empty string");const d=T.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||s]=_s(l))}const o=(l,s)=>T.forEach(l,(c,u)=>a(c,u,s));return T.isPlainObject(t)||t instanceof this.constructor?o(t,r):T.isString(t)&&(t=t.trim())&&!g3(t)?o(m3(t),r):t!=null&&a(r,t,n),this}get(t,r){if(t=so(t),t){const n=T.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return v3(i);if(T.isFunction(r))return r.call(this,i,n);if(T.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=so(t),t){const n=T.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Kd(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function a(o){if(o=so(o),o){const l=T.findKey(n,o);l&&(!r||Kd(n,n[l],l,r))&&(delete n[l],i=!0)}}return T.isArray(t)?t.forEach(a):a(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const a=r[n];(!t||Kd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const r=this,n={};return T.forEach(this,(i,a)=>{const o=T.findKey(n,a);if(o){r[o]=_s(i),delete r[a];return}const l=t?y3(a):String(a).trim();l!==a&&delete r[a],r[l]=_s(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return T.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&T.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[my]=this[my]={accessors:{}}).accessors,i=this.prototype;function a(o){const l=so(o);n[l]||(b3(i,o),n[l]=!0)}return T.isArray(t)?t.forEach(a):a(t),this}}gu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.freezeMethods(gu.prototype);T.freezeMethods(gu);const rn=gu;function Wd(e,t){const r=this||Im,n=t||r,i=rn.from(n.headers);let a=n.data;return T.forEach(e,function(l){a=l.call(r,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function eS(e){return!!(e&&e.__CANCEL__)}function Cl(e,t,r){ae.call(this,e??"canceled",ae.ERR_CANCELED,t,r),this.name="CanceledError"}T.inherits(Cl,ae,{__CANCEL__:!0});function x3(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new ae("Request failed with status code "+r.status,[ae.ERR_BAD_REQUEST,ae.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const w3=Rr.isStandardBrowserEnv?function(){return{write:function(r,n,i,a,o,l){const s=[];s.push(r+"="+encodeURIComponent(n)),T.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),T.isString(a)&&s.push("path="+a),T.isString(o)&&s.push("domain="+o),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function S3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function C3(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function tS(e,t){return e&&!S3(t)?C3(e,t):t}const k3=Rr.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function i(a){let o=a;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=i(window.location.href),function(o){const l=T.isString(o)?i(o):o;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function P3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function N3(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(s){const c=Date.now(),u=n[a];o||(o=c),r[i]=s,n[i]=c;let d=a,p=0;for(;d!==i;)p+=r[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;const h=u&&c-u;return h?Math.round(p*1e3/h):void 0}}function vy(e,t){let r=0;const n=N3(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,l=a-r,s=n(l),c=a<=o;r=a;const u={loaded:a,total:o,progress:o?a/o:void 0,bytes:l,rate:s||void 0,estimated:s&&o&&c?(o-a)/s:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const E3=typeof XMLHttpRequest<"u",O3=E3&&function(e){return new Promise(function(r,n){let i=e.data;const a=rn.from(e.headers).normalize(),o=e.responseType;let l;function s(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}T.isFormData(i)&&(Rr.isStandardBrowserEnv||Rr.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(h+":"+m))}const u=tS(e.baseURL,e.url);c.open(e.method.toUpperCase(),Q2(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const h=rn.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};x3(function(g){r(g),s()},function(g){n(g),s()},v),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(n(new ae("Request aborted",ae.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new ae("Network Error",ae.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const v=e.transitional||J2;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new ae(m,v.clarifyTimeoutError?ae.ETIMEDOUT:ae.ECONNABORTED,e,c)),c=null},Rr.isStandardBrowserEnv){const h=(e.withCredentials||k3(u))&&e.xsrfCookieName&&w3.read(e.xsrfCookieName);h&&a.set(e.xsrfHeaderName,h)}i===void 0&&a.setContentType(null),"setRequestHeader"in c&&T.forEach(a.toJSON(),function(m,v){c.setRequestHeader(v,m)}),T.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",vy(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",vy(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=h=>{c&&(n(!h||h.type?new Cl(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const p=P3(u);if(p&&Rr.protocols.indexOf(p)===-1){n(new ae("Unsupported protocol "+p+":",ae.ERR_BAD_REQUEST,e));return}c.send(i||null)})},zs={http:Z4,xhr:O3};T.forEach(zs,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const A3={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let i=0;i<t&&(r=e[i],!(n=T.isString(r)?zs[r.toLowerCase()]:r));i++);if(!n)throw n===!1?new ae(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(T.hasOwnProp(zs,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!T.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:zs};function Vd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Cl(null,e)}function gy(e){return Vd(e),e.headers=rn.from(e.headers),e.data=Wd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),A3.getAdapter(e.adapter||Im.adapter)(e).then(function(n){return Vd(e),n.data=Wd.call(e,e.transformResponse,n),n.headers=rn.from(n.headers),n},function(n){return eS(n)||(Vd(e),n&&n.response&&(n.response.data=Wd.call(e,e.transformResponse,n.response),n.response.headers=rn.from(n.response.headers))),Promise.reject(n)})}const yy=e=>e instanceof rn?e.toJSON():e;function Na(e,t){t=t||{};const r={};function n(c,u,d){return T.isPlainObject(c)&&T.isPlainObject(u)?T.merge.call({caseless:d},c,u):T.isPlainObject(u)?T.merge({},u):T.isArray(u)?u.slice():u}function i(c,u,d){if(T.isUndefined(u)){if(!T.isUndefined(c))return n(void 0,c,d)}else return n(c,u,d)}function a(c,u){if(!T.isUndefined(u))return n(void 0,u)}function o(c,u){if(T.isUndefined(u)){if(!T.isUndefined(c))return n(void 0,c)}else return n(void 0,u)}function l(c,u,d){if(d in t)return n(c,u);if(d in e)return n(void 0,c)}const s={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,u)=>i(yy(c),yy(u),!0)};return T.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const d=s[u]||i,p=d(e[u],t[u],u);T.isUndefined(p)&&d!==l||(r[u]=p)}),r}const rS="1.3.5",Dm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Dm[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const by={};Dm.transitional=function(t,r,n){function i(a,o){return"[Axios v"+rS+"] Transitional option '"+a+"'"+o+(n?". "+n:"")}return(a,o,l)=>{if(t===!1)throw new ae(i(o," has been removed"+(r?" in "+r:"")),ae.ERR_DEPRECATED);return r&&!by[o]&&(by[o]=!0,console.warn(i(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,o,l):!0}};function T3(e,t,r){if(typeof e!="object")throw new ae("options must be an object",ae.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const a=n[i],o=t[a];if(o){const l=e[a],s=l===void 0||o(l,a,e);if(s!==!0)throw new ae("option "+a+" must be "+s,ae.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ae("Unknown option "+a,ae.ERR_BAD_OPTION)}}const Tp={assertOptions:T3,validators:Dm},kn=Tp.validators;class uc{constructor(t){this.defaults=t,this.interceptors={request:new hy,response:new hy}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Na(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:a}=r;n!==void 0&&Tp.assertOptions(n,{silentJSONParsing:kn.transitional(kn.boolean),forcedJSONParsing:kn.transitional(kn.boolean),clarifyTimeoutError:kn.transitional(kn.boolean)},!1),i!=null&&(T.isFunction(i)?r.paramsSerializer={serialize:i}:Tp.assertOptions(i,{encode:kn.function,serialize:kn.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o;o=a&&T.merge(a.common,a[r.method]),o&&T.forEach(["delete","get","head","post","put","patch","common"],m=>{delete a[m]}),r.headers=rn.concat(o,a);const l=[];let s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(s=s&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,p;if(!s){const m=[gy.bind(this),void 0];for(m.unshift.apply(m,l),m.push.apply(m,c),p=m.length,u=Promise.resolve(r);d<p;)u=u.then(m[d++],m[d++]);return u}p=l.length;let h=r;for(d=0;d<p;){const m=l[d++],v=l[d++];try{h=m(h)}catch(b){v.call(this,b);break}}try{u=gy.call(this,h)}catch(m){return Promise.reject(m)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=Na(this.defaults,t);const r=tS(t.baseURL,t.url);return Q2(r,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){uc.prototype[t]=function(r,n){return this.request(Na(n||{},{method:t,url:r,data:(n||{}).data}))}});T.forEach(["post","put","patch"],function(t){function r(n){return function(a,o,l){return this.request(Na(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}uc.prototype[t]=r(),uc.prototype[t+"Form"]=r(!0)});const Ms=uc;class Rm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(a){r=a});const n=this;this.promise.then(i=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](i);n._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(l=>{n.subscribe(l),a=l}).then(i);return o.cancel=function(){n.unsubscribe(a)},o},t(function(a,o,l){n.reason||(n.reason=new Cl(a,o,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Rm(function(i){t=i}),cancel:t}}}const _3=Rm;function z3(e){return function(r){return e.apply(null,r)}}function M3(e){return T.isObject(e)&&e.isAxiosError===!0}const _p={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_p).forEach(([e,t])=>{_p[t]=e});const j3=_p;function nS(e){const t=new Ms(e),r=L2(Ms.prototype.request,t);return T.extend(r,Ms.prototype,t,{allOwnKeys:!0}),T.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return nS(Na(e,i))},r}const Ge=nS(Im);Ge.Axios=Ms;Ge.CanceledError=Cl;Ge.CancelToken=_3;Ge.isCancel=eS;Ge.VERSION=rS;Ge.toFormData=mu;Ge.AxiosError=ae;Ge.Cancel=Ge.CanceledError;Ge.all=function(t){return Promise.all(t)};Ge.spread=z3;Ge.isAxiosError=M3;Ge.mergeConfig=Na;Ge.AxiosHeaders=rn;Ge.formToJSON=e=>Z2(T.isHTMLForm(e)?new FormData(e):e);Ge.HttpStatusCode=j3;Ge.default=Ge;const Fe=Ge,Di="/assets/video-84ab32ab.mp4",I3=()=>{const[e,t]=y.useState(""),[r,n]=y.useState(""),i=Kr(),[a,o]=y.useState(""),[l,s]=y.useState("message"),[c,u]=y.useState(!1),d=h=>{if(h.preventDefault(),e.trim()===""||r.trim()===""){o("Please enter both username and password!");return}u(!0),o(""),Fe.post("http://localhost:5000/api/auth/login",{LoginUserName:e,LoginPassword:r}).then(m=>{console.log("Login response:",m.data),m.data.success||m.data.token?(m.data.token&&(localStorage.setItem("authToken",m.data.token),localStorage.setItem("user",JSON.stringify(m.data.user)),console.log("token",m.data.token)),o("Login successful! Redirecting..."),setTimeout(()=>{i("/dashboard")},1500)):o("Login failed. Please try again.")}).catch(m=>{if(console.error("Login error:",m),m.response){const v=m.response.data.message||"Login failed";o(v)}else m.request?o("Unable to connect to server. Please try again."):o("An error occurred. Please try again.")}).finally(()=>{u(!1)})};return y.useEffect(()=>{if(a!==""){s("showMessage");const h=setTimeout(()=>{s("message")},4e3);return()=>clearTimeout(h)}},[a]),f("div",{className:"loginPage flex",children:x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Health Vitals"}),f("p",{children:"Adopt the peace of nature!"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Don't have an account?"}),f(_r,{to:"/register",children:f("button",{className:"btn",children:"Sign Up"})})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:"Welcome Back!"})]}),x("form",{className:"form grid",onSubmit:h=>{h.preventDefault(),d(h)},children:[f("span",{className:l,children:a}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"username",children:"Username or Email"}),x("div",{className:"input flex",children:[f(D2,{className:"icon"}),f("input",{type:"text",id:"username",placeholder:"Enter Username or Email",value:e,onChange:h=>t(h.target.value),disabled:c})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"password",children:"Password"}),x("div",{className:"input flex",children:[f(cc,{className:"icon"}),f("input",{type:"password",id:"password",placeholder:"Enter Password",value:r,onChange:h=>n(h.target.value),disabled:c})]})]}),x("button",{type:"submit",className:"btn flex",disabled:c,children:[f("span",{children:c?"Logging in...":"Login"}),!c&&f(Tm,{className:"icon"})]}),x("span",{className:"forgotPassword",children:["Forgot your password? ",f(_r,{to:"/forgot-password",children:"Click Here"})]})]})]})]})})};const D3=()=>{const[e,t]=y.useState(""),[r,n]=y.useState(""),[i,a]=y.useState(""),[o,l]=y.useState(""),[s,c]=y.useState(!1),u=Kr();return f("div",{className:"registerPage flex",children:x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Create And Sell Extraordinary Products"}),f("p",{children:"Adopt the peace of nature!"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Have an account?"}),f(_r,{to:"/",children:f("button",{className:"btn",children:"Login"})})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:"Let Us Know You!"})]}),x("form",{onSubmit:async p=>{p.preventDefault(),l(""),c(!0);try{const h=await Fe.post("http://localhost:5000/api/auth/register",{email:e,userName:r,password:i});alert(h.data.message||"Registration successful! Please check your email to verify your account."),t(""),n(""),a(""),u("/")}catch(h){if(h.response){if(l(h.response.data.message||"Registration failed"),h.response.data.requirements){const m=h.response.data.requirements.join(`
`);l(`Password requirements:
${m}`)}}else h.request?l("No response from server. Please check if backend is running."):l("An error occurred. Please try again.");console.error("Registration error:",h)}finally{c(!1)}},className:"form grid",children:[o&&f("div",{className:"errorDiv",style:{color:"red",padding:"10px",marginBottom:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#ffebee",whiteSpace:"pre-line"},children:o}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"email",children:"Email"}),x("div",{className:"input flex",children:[f(z2,{className:"icon"}),f("input",{type:"email",id:"email",placeholder:"Enter Email",value:e,onChange:p=>t(p.target.value),required:!0})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"username",children:"Username"}),x("div",{className:"input flex",children:[f(D2,{className:"icon"}),f("input",{type:"text",id:"username",placeholder:"Enter Username",value:r,onChange:p=>n(p.target.value),required:!0})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"password",children:"Password"}),x("div",{className:"input flex",children:[f(cc,{className:"icon"}),f("input",{type:"password",id:"password",placeholder:"Enter Password",value:i,onChange:p=>a(p.target.value),required:!0})]})]}),x("button",{type:"submit",className:"btn flex",disabled:s,children:[f("span",{children:s?"Registering...":"Register"}),f(Tm,{className:"icon"})]}),x("span",{className:"forgotPassword",children:["Forgot your password? ",f("a",{href:"/forgot-password",children:"Click Here"})]})]})]})]})})},R3=()=>{const[e,t]=y.useState(""),[r,n]=y.useState(""),[i,a]=y.useState(""),o=Kr();return f("div",{className:"registerPage flex",children:x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Reset Your Password"}),f("p",{children:"We'll help you get back to your account!"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Remember your password?"}),f(_r,{to:"/",children:f("button",{className:"btn",children:"Login"})})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:"Forgot Password?"})]}),x("form",{onSubmit:async s=>{if(s.preventDefault(),!e){a("Please enter your email address"),n("error");return}n("sending"),a("");try{const c=await Fe.post("http://localhost:5000/api/auth/forgot-password",{email:e});n("success"),a(c.data.message||"If an account exists with this email, we have sent a password reset link."),t(""),setTimeout(()=>{o("/")},5e3)}catch(c){n("error"),c.response?a(c.response.data.message||"Failed to send reset email"):a("Unable to connect to server. Please try again later.")}},className:"form grid",children:[x("div",{style:{padding:"15px",backgroundColor:"#e6f7ff",borderRadius:"8px",border:"1px solid #91d5ff",marginBottom:"20px"},children:[f(Np,{style:{fontSize:"30px",color:"#1890ff",marginBottom:"10px"}}),f("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.5"},children:"Enter your registered email address below. We'll send you a link to reset your password."})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"email",children:"Email Address"}),x("div",{className:"input flex",children:[f(z2,{className:"icon"}),f("input",{type:"email",id:"email",placeholder:"Enter your registered email",value:e,onChange:s=>t(s.target.value),required:!0,disabled:r==="sending"})]})]}),r==="success"&&x("div",{style:{padding:"15px",backgroundColor:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"8px",marginBottom:"15px",textAlign:"center"},children:[f(c4,{style:{fontSize:"24px",color:"#52c41a",marginBottom:"8px"}}),f("p",{style:{color:"#52c41a",fontWeight:"500"},children:"Email Sent Successfully!"}),f("p",{style:{color:"#666",fontSize:"14px",marginTop:"5px"},children:i}),f("p",{style:{color:"#999",fontSize:"12px",marginTop:"10px"},children:"Redirecting to login page in 5 seconds..."})]}),r==="error"&&f("div",{style:{padding:"15px",backgroundColor:"#fff2e8",border:"1px solid #ffbb96",borderRadius:"8px",marginBottom:"15px",textAlign:"center"},children:f("p",{style:{color:"#ff4d4f"},children:i})}),x("button",{type:"submit",className:"btn flex",disabled:r==="sending",style:{justifyContent:"center"},children:[f(u4,{className:"icon",style:{marginRight:"10px"}}),f("span",{children:r==="sending"?"Sending...":"Send Reset Link"})]}),x("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px",fontSize:"14px"},children:[x(_r,{to:"/register",style:{color:"#666",textDecoration:"none",display:"flex",alignItems:"center"},children:[f(d4,{style:{marginRight:"5px"}}),"Back to Register"]}),f(_r,{to:"/",style:{color:"#1890ff",textDecoration:"none"},children:"Back to Login"})]})]})]})]})})},L3=()=>{const[e]=A2(),[t,r]=y.useState(""),[n,i]=y.useState(""),[a,o]=y.useState(!1),[l,s]=y.useState(!1),[c,u]=y.useState(""),[d,p]=y.useState(""),[h,m]=y.useState([]),v=Kr(),b=e.get("token");y.useEffect(()=>{b||(u("error"),p("Invalid reset link. Please request a new password reset."))},[b]);const g=()=>t!==n?(p("Passwords do not match"),!1):!0,w=async S=>{if(S.preventDefault(),!g()){u("error");return}u("resetting"),p(""),m([]);try{const C=await Fe.post("http://localhost:5000/api/auth/reset-password",{token:b,password:t});u("success"),p(C.data.message||"Password reset successfully!"),setTimeout(()=>{v("/")},3e3)}catch(C){u("error"),C.response?(p(C.response.data.message||"Failed to reset password"),C.response.data.requirements&&m(C.response.data.requirements)):p("Unable to connect to server. Please try again later.")}};return b?f("div",{className:"registerPage flex",children:x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Create New Password"}),f("p",{children:"Choose a strong password to secure your account"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Remember your password?"}),f(_r,{to:"/",children:f("button",{className:"btn",children:"Login"})})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:"Reset Your Password"})]}),x("form",{onSubmit:w,className:"form grid",children:[x("div",{style:{padding:"15px",backgroundColor:"#f0f5ff",borderRadius:"8px",border:"1px solid #adc6ff",marginBottom:"20px"},children:[f(Np,{style:{fontSize:"30px",color:"#2f54eb",marginBottom:"10px"}}),f("p",{style:{color:"#666",fontSize:"14px",lineHeight:"1.5"},children:"Enter your new password below. Make sure it's strong and unique."})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"password",children:"New Password"}),x("div",{className:"input flex",style:{position:"relative"},children:[f(cc,{className:"icon"}),f("input",{type:a?"text":"password",id:"password",placeholder:"Enter new password",value:t,onChange:S=>r(S.target.value),required:!0,disabled:c==="resetting",style:{paddingRight:"40px"}}),f("button",{type:"button",onClick:()=>o(!a),style:{position:"absolute",right:"10px",background:"none",border:"none",cursor:"pointer",padding:"5px"},children:a?f(ly,{}):f(sy,{})})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),x("div",{className:"input flex",style:{position:"relative"},children:[f(cc,{className:"icon"}),f("input",{type:l?"text":"password",id:"confirmPassword",placeholder:"Confirm new password",value:n,onChange:S=>i(S.target.value),required:!0,disabled:c==="resetting",style:{paddingRight:"40px"}}),f("button",{type:"button",onClick:()=>s(!l),style:{position:"absolute",right:"10px",background:"none",border:"none",cursor:"pointer",padding:"5px"},children:l?f(ly,{}):f(sy,{})})]})]}),h.length>0&&x("div",{style:{padding:"15px",backgroundColor:"#fff2e8",border:"1px solid #ffbb96",borderRadius:"8px",marginBottom:"15px"},children:[f("p",{style:{color:"#ff4d4f",fontWeight:"500",marginBottom:"10px"},children:"Password Requirements:"}),f("ul",{style:{marginLeft:"20px",color:"#666"},children:h.map((S,C)=>f("li",{style:{fontSize:"14px",marginBottom:"5px"},children:S},C))})]}),c==="success"&&x("div",{style:{padding:"15px",backgroundColor:"#f6ffed",border:"1px solid #b7eb8f",borderRadius:"8px",marginBottom:"15px",textAlign:"center"},children:[f(M2,{style:{fontSize:"24px",color:"#52c41a",marginBottom:"8px"}}),f("p",{style:{color:"#52c41a",fontWeight:"500"},children:"Password Reset Successful!"}),f("p",{style:{color:"#666",fontSize:"14px",marginTop:"5px"},children:d}),f("p",{style:{color:"#999",fontSize:"12px",marginTop:"10px"},children:"Redirecting to login page..."})]}),c==="error"&&d&&!h.length&&f("div",{style:{padding:"15px",backgroundColor:"#fff2e8",border:"1px solid #ffbb96",borderRadius:"8px",marginBottom:"15px",textAlign:"center"},children:f("p",{style:{color:"#ff4d4f"},children:d})}),x("button",{type:"submit",className:"btn flex",disabled:c==="resetting"||c==="success",style:{justifyContent:"center"},children:[f(Np,{className:"icon",style:{marginRight:"10px"}}),f("span",{children:c==="resetting"?"Resetting...":"Reset Password"})]}),x("div",{style:{marginTop:"20px",padding:"10px",backgroundColor:"#fafafa",borderRadius:"5px",fontSize:"12px",color:"#666"},children:[f("strong",{children:"Tips for a strong password:"}),x("ul",{style:{marginLeft:"20px",marginTop:"5px"},children:[f("li",{children:"At least 8 characters long"}),f("li",{children:"Include uppercase and lowercase letters"}),f("li",{children:"Include numbers and special characters"}),f("li",{children:"Avoid common words or personal information"})]})]})]})]})]})}):f("div",{className:"registerPage flex",children:x("div",{className:"container flex",children:[f("div",{className:"videoDiv",children:f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0})}),f("div",{className:"formDiv flex",children:x("div",{style:{textAlign:"center",padding:"40px"},children:[f(j2,{style:{fontSize:"60px",color:"#ff4d4f",marginBottom:"20px"}}),f("h3",{style:{color:"#333",marginBottom:"20px"},children:"Invalid Reset Link"}),f("p",{style:{color:"#666",marginBottom:"30px"},children:"This password reset link is invalid or has expired."}),f(_r,{to:"/forgot-password",children:f("button",{className:"btn",children:"Request New Reset Link"})})]})})]})})},$3=()=>{const[e]=A2(),{token:t}=IA(),[r,n]=y.useState("verifying"),[i,a]=y.useState(""),[o,l]=y.useState(!1),[s,c]=y.useState(""),u=Kr(),d=e.get("token")||t;y.useEffect(()=>{if(!d){n("error"),a("Invalid verification link. No token found.");return}p()},[d]);const p=async()=>{try{n("verifying"),a("Verifying your email...");const m=await Fe.get(`http://localhost:5000/api/auth/verify-email?token=${d}`);n("success"),a(m.data.message||"Email verified successfully!"),setTimeout(()=>{u("/")},3e3)}catch(m){n("error"),m.response?a(m.response.data.message||"Email verification failed"):a("Unable to connect to server. Please try again later.")}};return x("div",{className:"registerPage flex",children:[x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Email Verification"}),f("p",{children:"Verifying your account to get started"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Already verified?"}),f(_r,{to:"/",children:f("button",{className:"btn",children:"Login"})})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:"Email Verification"})]}),x("div",{className:"form grid",style:{textAlign:"center",padding:"40px"},children:[r==="verifying"&&x("div",{children:[f(p4,{style:{fontSize:"60px",color:"#1890ff",marginBottom:"20px",animation:"spin 1s linear infinite"}}),f("h3",{style:{color:"#333",marginBottom:"20px"},children:"Verifying Your Email"}),f("p",{style:{color:"#666",marginBottom:"30px"},children:"Please wait while we verify your email address..."})]}),r==="success"&&x("div",{children:[f(M2,{style:{fontSize:"60px",color:"#52c41a",marginBottom:"20px"}}),f("h3",{style:{color:"#52c41a",marginBottom:"20px"},children:"Email Verified Successfully!"}),f("p",{style:{color:"#666",marginBottom:"20px"},children:i}),f("p",{style:{color:"#999",fontSize:"14px",marginBottom:"30px"},children:"You will be redirected to login page in a few seconds..."}),f(_r,{to:"/",children:f("button",{className:"btn",children:"Go to Login"})})]}),r==="error"&&x("div",{children:[f(j2,{style:{fontSize:"60px",color:"#ff4d4f",marginBottom:"20px"}}),f("h3",{style:{color:"#ff4d4f",marginBottom:"20px"},children:"Verification Failed"}),f("p",{style:{color:"#666",marginBottom:"30px"},children:i}),x("div",{style:{marginBottom:"20px"},children:[x("button",{className:"btn",onClick:async()=>{try{l(!0),c(""),c("Please go to the registration page to resend verification email.")}catch{c("Failed to resend verification email. Please try again.")}finally{l(!1)}},disabled:o,style:{marginRight:"10px"},children:[f(i4,{style:{marginRight:"5px"}}),o?"Sending...":"Resend Verification"]}),f(_r,{to:"/register",children:f("button",{className:"btn",style:{backgroundColor:"#666"},children:"Back to Register"})})]}),s&&f("p",{style:{color:s.includes("Failed")?"#ff4d4f":"#52c41a",fontSize:"14px",marginTop:"15px"},children:s})]}),!1]})]})]}),f("style",{jsx:!0,children:`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `})]})};const F3=()=>{const[e,t]=y.useState({nickname:"",age:"",height:"",weight:"",unit:"metric",sex:""}),[r,n]=y.useState(""),[i,a]=y.useState("message"),[o,l]=y.useState(!1),[s,c]=y.useState(!1),u=Kr();y.useEffect(()=>{if(!localStorage.getItem("authToken")){u("/");return}d()},[u]);const d=async()=>{try{const v=localStorage.getItem("authToken"),b=await Fe.get("http://localhost:5000/api/profile/check",{headers:{Authorization:`Bearer ${v}`}});if(b.data.hasProfile&&b.data.profile){const g=b.data.profile;t({nickname:g.nickname||"",age:g.age?g.age.toString():"",height:g.height?g.height.toString():"",weight:g.weight?g.weight.toString():"",unit:g.unit||"metric",sex:g.sex||""}),c(!0)}}catch(v){console.log("No existing profile found or error:",v.message)}},p=v=>{const{name:b,value:g}=v.target;t(w=>({...w,[b]:g}))},h=()=>{const{nickname:v,age:b,height:g,weight:w,sex:S}=e;return v.trim()?!b||parseInt(b)<18?(n("Age must be 18 or older"),!1):!g||parseFloat(g)<=0?(n("Please enter valid height"),!1):!w||parseFloat(w)<=0?(n("Please enter valid weight"),!1):S?!0:(n("Please select your gender"),!1):(n("Please enter your nickname"),!1)},m=async v=>{if(v.preventDefault(),!!h()){l(!0),n("");try{const b=localStorage.getItem("authToken"),g=await Fe.post("http://localhost:5000/api/profile/create-update",e,{headers:{Authorization:`Bearer ${b}`,"Content-Type":"application/json"}});n("Profile saved successfully! Redirecting to dashboard..."),localStorage.setItem("userProfile",JSON.stringify(g.data.profile)),setTimeout(()=>{u("/dashboard")},2e3)}catch(b){console.error("Profile creation error:",b),b.response?b.response.status===401?(n("Session expired. Please login again."),localStorage.removeItem("authToken"),localStorage.removeItem("user"),setTimeout(()=>u("/"),2e3)):n(b.response.data.message||"Failed to create profile"):n("Unable to connect to server. Please try again.")}finally{l(!1)}}};return y.useEffect(()=>{r!==""&&(a("showMessage"),setTimeout(()=>{a("message")},4e3))},[r]),f("div",{className:"loginPage flex",children:x("div",{className:"container flex",children:[x("div",{className:"videoDiv",children:[f("video",{src:Di,autoPlay:!0,muted:!0,loop:!0}),x("div",{className:"textDiv",children:[f("h2",{className:"title",children:"Health Profile Setup"}),f("p",{children:"Complete your health vitals for personalized care!"})]}),x("div",{className:"footerDiv flex",children:[f("span",{className:"text",children:"Need to logout?"}),f("button",{className:"btn",onClick:()=>{localStorage.clear(),u("/")},children:"Logout"})]})]}),x("div",{className:"formDiv flex",children:[x("div",{className:"headerDiv",children:[f("img",{src:Ui,alt:"Logo Image"}),f("h3",{children:s?"Update Your Profile":"Complete Your Profile"}),f("p",{style:{color:"#666",fontSize:"14px",marginTop:"5px"},children:s?"Update your health information for better insights":"Help us provide personalized health insights"})]}),x("form",{className:"form grid",onSubmit:m,children:[f("span",{className:i,children:r}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"nickname",children:"Nickname / Display Name"}),x("div",{className:"input flex",children:[f(y4,{className:"icon"}),f("input",{type:"text",id:"nickname",name:"nickname",placeholder:"Enter your preferred name",value:e.nickname,onChange:p,disabled:o,required:!0})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"age",children:"Age"}),x("div",{className:"input flex",children:[f(v4,{className:"icon"}),f("input",{type:"number",id:"age",name:"age",placeholder:"Enter your age",value:e.age,onChange:p,disabled:o,min:"18",max:"120",required:!0})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"sex",children:"Gender"}),x("div",{className:"input flex",children:[f(b4,{className:"icon"}),x("select",{id:"sex",name:"sex",value:e.sex,onChange:p,disabled:o,required:!0,style:{background:"transparent",border:"none",outline:"none",flex:1,color:"#333"},children:[f("option",{value:"",children:"Select Gender"}),f("option",{value:"male",children:"Male"}),f("option",{value:"female",children:"Female"}),f("option",{value:"other",children:"Other"})]})]})]}),x("div",{className:"inputDiv",children:[f("label",{htmlFor:"unit",children:"Measurement Unit"}),x("div",{className:"input flex",children:[f(Ep,{className:"icon"}),x("select",{id:"unit",name:"unit",value:e.unit,onChange:p,disabled:o,required:!0,style:{background:"transparent",border:"none",outline:"none",flex:1,color:"#333"},children:[f("option",{value:"metric",children:"Metric (cm, kg)"}),f("option",{value:"imperial",children:"Imperial (ft/in, lbs)"})]})]})]}),x("div",{className:"inputDiv",children:[x("label",{htmlFor:"height",children:["Height ",e.unit==="metric"?"(cm)":"(inches)"]}),x("div",{className:"input flex",children:[f(I2,{className:"icon"}),f("input",{type:"number",id:"height",name:"height",placeholder:e.unit==="metric"?"Enter height in cm":"Enter height in inches",value:e.height,onChange:p,disabled:o,min:e.unit==="metric"?"100":"36",max:e.unit==="metric"?"250":"96",step:"0.1",required:!0})]})]}),x("div",{className:"inputDiv",children:[x("label",{htmlFor:"weight",children:["Weight ",e.unit==="metric"?"(kg)":"(lbs)"]}),x("div",{className:"input flex",children:[f(R2,{className:"icon"}),f("input",{type:"number",id:"weight",name:"weight",placeholder:e.unit==="metric"?"Enter weight in kg":"Enter weight in lbs",value:e.weight,onChange:p,disabled:o,min:e.unit==="metric"?"30":"66",max:e.unit==="metric"?"300":"660",step:"0.1",required:!0})]})]}),x("div",{style:{padding:"15px",backgroundColor:"#f0f5ff",borderRadius:"8px",border:"1px solid #adc6ff",marginBottom:"15px"},children:[f(Ep,{style:{color:"#2f54eb",marginRight:"8px"}}),f("span",{style:{color:"#666",fontSize:"14px"},children:"Your information helps us provide personalized health insights and recommendations."})]}),x("button",{type:"submit",className:"btn flex",disabled:o,children:[f("span",{children:o?"Saving Profile...":s?"Update Profile":"Complete Setup"}),!o&&f(Tm,{className:"icon"})]})]})]})]})})};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H3=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),xy=e=>{const t=H3(e);return t.charAt(0).toUpperCase()+t.slice(1)},iS=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),U3=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:o,...l},s)=>y.createElement("svg",{ref:s,...K3,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:iS("lucide",i),...!a&&!U3(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,u])=>y.createElement(c,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(e,t)=>{const r=y.forwardRef(({className:n,...i},a)=>y.createElement(W3,{ref:a,iconNode:t,className:iS(`lucide-${B3(xy(e))}`,`lucide-${e}`,n),...i}));return r.displayName=xy(e),r};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],fr=J("activity",V3);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Y3=J("arrow-right",G3);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],X3=J("bell",q3);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],J3=J("camera",Q3);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],zp=J("calendar",Z3);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Mp=J("chart-column",eT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ar=J("chevron-right",tT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Mo=J("circle-alert",rT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],iT=J("circle-check-big",nT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],oT=J("clock",aT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sT=J("copy",lT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],sa=J("droplet",cT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],dT=J("eye-off",uT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],aS=J("eye",fT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],hT=J("file-spreadsheet",pT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],wy=J("file-text",mT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Kt=J("heart",vT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],yT=J("info",gT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Gd=J("key",bT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],wT=J("loader",xT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],CT=J("mail",ST);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],PT=J("message-circle",kT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M5 12h14",key:"1ays0h"}]],Yd=J("minus",NT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],OT=J("phone",ET);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Sy=J("play",AT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],il=J("plus",TT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],zT=J("refresh-cw",_T);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jT=J("rotate-ccw",MT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],oS=J("ruler",IT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Lm=J("save",DT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],LT=J("search",RT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],FT=J("shield",$T);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],HT=J("square-pen",BT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],KT=J("square",UT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],qd=J("thermometer",WT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],lS=J("trash-2",VT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Xd=J("trending-down",GT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],jo=J("trending-up",YT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],XT=J("triangle-alert",qT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Cy=J("user",QT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]],jp=J("weight",JT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Io=J("wind",ZT);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dc=J("x",e8),t8=()=>{const[e,t]=y.useState("vitals"),[r,n]=y.useState(""),[i,a]=y.useState(!0),[o,l]=y.useState(null),[s,c]=y.useState(null),[u,d]=y.useState(null),[p,h]=y.useState([]),[m,v]=y.useState([]),[b,g]=y.useState(null),w=async()=>{try{const D=localStorage.getItem("authToken"),L=await fetch("http://localhost:5000/api/profile/getProfile",{headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(!L.ok)throw new Error("Failed to fetch profile");const q=await L.json();d(q)}catch(D){console.error("Profile fetch error:",D),d(null)}},S=async()=>{try{const D=localStorage.getItem("authToken"),L=await fetch("http://localhost:5000/api/vitals/latest",{headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(!L.ok)throw new Error("Failed to fetch vitals");const q=await L.json();c(q)}catch(D){console.error("Vitals fetch error:",D),c(null)}},C=async()=>{try{const D=localStorage.getItem("authToken"),L=await fetch("http://localhost:5000/api/activity/recent",{headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(!L.ok)throw new Error("Failed to fetch activity");const q=await L.json();h(q)}catch(D){console.error("Activity fetch error:",D),h([])}},k=async()=>{try{const D=localStorage.getItem("authToken"),L=await fetch("http://localhost:5000/api/notifications",{headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(!L.ok)throw new Error("Failed to fetch notifications");const q=await L.json();v(q)}catch(D){console.error("Notifications fetch error:",D),v([])}},P=async()=>{try{const D=localStorage.getItem("authToken"),L=await fetch("http://localhost:5000/api/usage-stats",{headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"}});if(!L.ok)throw new Error("Failed to fetch API usage");const q=await L.json();g(q)}catch(D){console.error("API usage fetch error:",D),g(null)}};y.useEffect(()=>{(async()=>{a(!0);try{await Promise.all([w(),S(),C(),k(),P()])}catch{l("Failed to load dashboard data")}finally{a(!1)}})()},[]);const N=()=>{const D=new Date().getHours();return D<12?"Good Morning":D<18?"Good Afternoon":"Good Evening"},A=D=>D?D<18.5?"Underweight":D<25?"Normal":D<30?"Overweight":"Obese":"Not calculated",E=D=>D?D<18.5?"#f39c12":D<25?"#5eaa3c":D<30?"#e67e22":"#e74c3c":"#718096",_=async()=>{try{const D=localStorage.getItem("authToken");if(!(await fetch("/api/vitals",{method:"POST",headers:{Authorization:`Bearer ${D}`,"Content-Type":"application/json"},body:JSON.stringify({timestamp:new Date().toISOString()})})).ok)throw new Error("Failed to add vitals");await S()}catch(D){console.error("Add vitals error:",D)}};if(i)return f("div",{className:"dashboard-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:x("div",{style:{textAlign:"center"},children:[f(wT,{className:"spinner",size:48}),f("p",{style:{marginTop:"1rem",color:"var(--textColor)"},children:"Loading dashboard..."})]})});if(o)return f("div",{className:"dashboard-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:x("div",{style:{textAlign:"center"},children:[f(Mo,{size:48,color:"#e74c3c"}),f("p",{style:{marginTop:"1rem",color:"#e74c3c"},children:o}),f("button",{onClick:()=>window.location.reload(),style:{marginTop:"1rem",padding:"0.5rem 1rem",background:"var(--PrimaryColor)",color:"white",border:"none",borderRadius:"8px"},children:"Retry"})]})});const z=()=>x("div",{className:"topSection",children:[x("div",{className:"headerSection",children:[x("div",{className:"title",children:[x("h1",{children:[N(),", ",(u==null?void 0:u.nickname)||"User","!"]}),f("p",{children:"Monitor your health vitals and get AI-powered insights"})]}),x("div",{className:"searchBar",children:[f("input",{type:"text",placeholder:"Search health data, insights...",value:r,onChange:D=>n(D.target.value)}),f(LT,{className:"icon",size:20})]}),x("div",{className:"adminDiv",children:[f("div",{className:"icon-btn",children:f(PT,{size:20})}),x("div",{className:"notification-wrapper",children:[f("div",{className:"icon-btn",children:f(X3,{size:20})}),m.filter(D=>!D.read).length>0&&f("span",{className:"notification-badge",children:m.filter(D=>!D.read).length})]}),f("div",{className:"adminImage",children:f("img",{src:"https://i.pravatar.cc/150?img=8",alt:"User Avatar"})})]})]}),x("div",{className:"cardSection",children:[x("div",{className:"rightCard",children:[f("h1",{children:"AI-Powered Health Monitoring"}),f("p",{children:"Get personalized health insights based on your vitals, lifestyle, and medical history using advanced AI technology!"}),x("div",{className:"buttons",children:[x("button",{className:"btn primary",onClick:_,children:[f(il,{size:18}),"Add Vitals"]}),x("button",{className:"btn transparent",onClick:()=>t("activity"),children:[f(Mp,{size:18}),"View Analytics"]})]}),f("div",{className:"health-animation",children:f(Kt,{className:"heartbeat-icon"})})]}),x("div",{className:"leftCard",children:[x("div",{className:"health-stats",children:[f("h1",{children:"My Health Stats"}),x("div",{className:"stats-grid",children:[x("div",{className:"stat-item",children:[f(jp,{className:"stat-icon"}),f("span",{className:"stat-value",children:(u==null?void 0:u.weight)||"N/A"}),f("span",{className:"stat-unit",children:(u==null?void 0:u.unit)==="metric"?"kg":"lbs"})]}),x("div",{className:"stat-item",children:[f(oS,{className:"stat-icon"}),f("span",{className:"stat-value",children:(u==null?void 0:u.height)||"N/A"}),f("span",{className:"stat-unit",children:(u==null?void 0:u.unit)==="metric"?"cm":"in"})]}),x("div",{className:"stat-item",children:[f(fr,{className:"stat-icon"}),f("span",{className:"stat-value",style:{color:E(u==null?void 0:u.bmi)},children:(u==null?void 0:u.bmi)||"N/A"}),f("span",{className:"stat-unit",children:"BMI"}),f("small",{className:"bmi-status",style:{color:E(u==null?void 0:u.bmi)},children:A(u==null?void 0:u.bmi)})]})]}),x("span",{className:"link",onClick:()=>t("activity"),children:[f(Mp,{size:18}),"View detailed analytics",f(Y3,{size:18})]})]}),x("div",{className:"api-stats",children:[f("h3",{children:"API Usage"}),x("div",{className:"usage-item",children:[f("span",{className:"usage-label",children:"This Month"}),x("span",{className:"usage-value",children:[(b==null?void 0:b.currentMonth)||0," requests"]})]}),x("div",{className:"usage-item",children:[f("span",{className:"usage-label",children:"Rate Limit"}),x("span",{className:"usage-value",children:[(b==null?void 0:b.limit)||1e4,"/month"]})]}),f("div",{className:"progress-bar",children:f("div",{className:"progress",style:{width:`${(b==null?void 0:b.percentage)||0}%`}})})]})]})]})]}),M=({title:D,icon:L,value:q,unit:R,status:$,color:V,trend:X=[]})=>x("div",{className:"vital-card",children:[x("div",{className:"vital-header",children:[x("div",{className:"vital-title",children:[L,f("span",{children:D})]}),f("span",{className:`vital-status status-${$==="normal"||$==="optimal"||$==="excellent"?"normal":"warning"}`,children:$})]}),x("div",{className:"vital-value",style:{color:V},children:[q," ",f("span",{className:"vital-unit",children:R})]}),X.length>0&&f("div",{className:"mini-chart",children:x("svg",{viewBox:"0 0 300 80",width:"100%",height:"100%",children:[f("polyline",{points:X.map((F,Le)=>{const ce=Math.min(...X),Je=Math.max(...X)-ce||1;return`${Le*(300/(X.length-1))},${80-(F-ce)/Je*60}`}).join(" "),stroke:V,strokeWidth:"2",fill:"none"}),X.map((F,Le)=>{const ce=Math.min(...X),Je=Math.max(...X)-ce||1;return f("circle",{cx:Le*(300/(X.length-1)),cy:80-(F-ce)/Je*60,r:"3",fill:V},Le)})]})})]});return x("div",{className:"dashboard-container",children:[x("div",{className:"tabs-container",children:[f("button",{className:`tab-btn ${e==="vitals"?"active":""}`,onClick:()=>t("vitals"),children:"Health Vitals Dashboard"}),f("button",{className:`tab-btn ${e==="activity"?"active":""}`,onClick:()=>t("activity"),children:"Activity & Analytics"})]}),e==="vitals"?f(()=>{var D,L,q,R,$,V,X,F,Le,ce,ue,Je,br,di;return x(Tt,{children:[f(z,{}),f("div",{className:"vitals-grid",children:s&&x(Tt,{children:[f(M,{title:"Heart Rate",icon:f(Kt,{size:20,color:"#ff4757"}),value:(D=s.heartRate)==null?void 0:D.current,unit:"bpm",status:(L=s.heartRate)==null?void 0:L.status,color:"#ff4757",trend:(q=s.heartRate)==null?void 0:q.trend}),f(M,{title:"Blood Pressure",icon:f(sa,{size:20,color:"#5f27cd"}),value:`${(R=s.bloodPressure)==null?void 0:R.systolic}/${($=s.bloodPressure)==null?void 0:$.diastolic}`,unit:"mmHg",status:(V=s.bloodPressure)==null?void 0:V.status,color:"#5f27cd",trend:(F=(X=s.bloodPressure)==null?void 0:X.trend)==null?void 0:F.systolic}),f(M,{title:"Oxygen Saturation",icon:f(Io,{size:20,color:"#00d2d3"}),value:(Le=s.oxygenSaturation)==null?void 0:Le.current,unit:"%",status:(ce=s.oxygenSaturation)==null?void 0:ce.status,color:"#00d2d3",trend:(ue=s.oxygenSaturation)==null?void 0:ue.trend}),f(M,{title:"Temperature",icon:f(fr,{size:20,color:"#ff9ff3"}),value:(Je=s.temperature)==null?void 0:Je.current,unit:"°F",status:(br=s.temperature)==null?void 0:br.status,color:"#ff9ff3",trend:(di=s.temperature)==null?void 0:di.trend})]})}),x("div",{className:"two-column-layout",children:[x("div",{className:"activitySection",children:[x("div",{className:"heading",children:[f("h1",{children:"Recent Activity"}),x("button",{className:"btn-secondary",onClick:C,children:["Refresh",f(ar,{size:16})]})]}),f("div",{className:"secContainer",children:p.map(B=>x("div",{className:"singleCustomer",children:[f("img",{src:B.avatar,alt:B.user}),x("div",{className:"customerDetails",children:[f("span",{className:"name",children:B.user}),f("small",{children:B.activity})]}),f("div",{className:"duration",children:B.timestamp})]},B.id))})]}),x("div",{className:"lisitingSection",children:[x("div",{className:"heading",children:[f("h1",{children:"Health Insights"}),x("button",{className:"btn-secondary",children:["View All",f(ar,{size:16})]})]}),x("div",{className:"insights-container",children:[x("div",{className:"insight-card",children:[f(Kt,{className:"insight-icon"}),x("div",{className:"insight-content",children:[f("h4",{children:"Heart Rate Trend"}),f("p",{children:"Your resting heart rate has improved by 5% this month"}),f("span",{className:"insight-date",children:"Today"})]})]}),x("div",{className:"insight-card",children:[f(fr,{className:"insight-icon"}),x("div",{className:"insight-content",children:[f("h4",{children:"BMI Status"}),f("p",{children:"Maintaining healthy BMI range consistently"}),f("span",{className:"insight-date",children:"This week"})]})]})]})]})]})]})},{}):f(()=>x(Tt,{children:[f(z,{}),x("div",{className:"two-column-layout",children:[x("div",{className:"activitySection",children:[x("div",{className:"heading",children:[f("h1",{children:"All Activities"}),x("button",{className:"btn-secondary",onClick:C,children:["Refresh",f(ar,{size:16})]})]}),f("div",{className:"secContainer",children:p.map((D,L)=>x("div",{className:"singleCustomer",children:[f("img",{src:D.avatar,alt:D.user}),x("div",{className:"customerDetails",children:[f("span",{className:"name",children:D.user}),f("small",{children:D.activity})]}),f("div",{className:"duration",children:D.timestamp})]},`${D.id}-${L}`))})]}),x("div",{className:"lisitingSection",children:[x("div",{className:"heading",children:[f("h1",{children:"Health Analytics"}),x("button",{className:"btn-secondary",children:["Export Data",f(ar,{size:16})]})]}),f("div",{className:"analytics-summary",children:x("div",{className:"summary-card",children:[x("div",{className:"summary-header",children:[f("h4",{children:"Weekly Summary"}),f(jo,{className:"trend-icon",color:"var(--PrimaryColor)"})]}),x("div",{className:"summary-stats",children:[x("div",{className:"stat",children:[f("span",{className:"stat-label",children:"Avg Heart Rate"}),f("span",{className:"stat-value",children:"74 bpm"})]}),x("div",{className:"stat",children:[f("span",{className:"stat-label",children:"Blood Pressure"}),f("span",{className:"stat-value",children:"120/80"})]})]})]})})]})]})]}),{}),f("style",{children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --PrimaryColor: #5eaa3c;
          --HoverColor: #4a8530;
          --paleGreen: #f0f8eb;
          --whiteColor: #ffffff;
          --blackColor: #2c3e50;
          --greyText: #718096;
          --textColor: #64748b;
          --bgColor: #f8fafc;
          --inputColor: #f1f5f9;
          --itemCardHover: #e2e8f0;
          --h1FontSize: 2rem;
          --h2FontSize: 1.5rem;
          --h3FontSize: 1.25rem;
          --normalFontSize: 1rem;
          --smallFontSize: 0.875rem;
          --smallestFontSize: 0.75rem;
          --biggestFontSize: 2.5rem;
        }

        .dashboard-container {
      
          background: var(--bgColor);
          padding: 1.5rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .spinner {
          animation: spin 1s linear infinite;
          color: var(--PrimaryColor);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Top Section Styles */
        .topSection {
          margin-bottom: 2rem;
        }

        .headerSection {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .title h1 {
          font-size: var(--h1FontSize);
          color: var(--blackColor);
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .title p {
          font-size: var(--normalFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .searchBar {
          display: flex;
          align-items: center;
          padding: 0.8rem 1.5rem;
          background: var(--whiteColor);
          border-radius: 12px;
          gap: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          min-width: 300px;
        }

        .searchBar input {
          border: none;
          outline: none;
          background: none;
          flex: 1;
          font-size: var(--normalFontSize);
          color: var(--blackColor);
        }

        .searchBar input::placeholder {
          color: var(--greyText);
        }

        .searchBar .icon {
          color: var(--textColor);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .searchBar .icon:hover {
          color: var(--PrimaryColor);
        }

        .adminDiv {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .notification-wrapper {
          position: relative;
        }

        .adminDiv .icon-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--whiteColor);
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          color: var(--textColor);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .adminDiv .icon-btn:hover {
          color: var(--PrimaryColor);
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.12);
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 18px;
          height: 18px;
          background: var(--PrimaryColor);
          color: var(--whiteColor);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .adminImage {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .adminImage:hover {
          transform: scale(1.05);
        }

        .adminImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Card Section */
        .cardSection {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .rightCard {
          flex: 1.5;
          background: linear-gradient(135deg, var(--PrimaryColor), var(--HoverColor));
          padding: 2.5rem;
          border-radius: 16px;
          color: var(--whiteColor);
          position: relative;
          overflow: hidden;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(94, 170, 60, 0.25);
        }

        .rightCard::before {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -100px;
          right: -50px;
        }

        .rightCard h1 {
          font-size: var(--h1FontSize);
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .rightCard p {
          font-size: var(--normalFontSize);
          margin-bottom: 2rem;
          opacity: 0.95;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-size: var(--normalFontSize);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          outline: none;
        }

        .btn.primary {
          background: var(--whiteColor);
          color: var(--PrimaryColor);
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .btn.transparent {
          background: transparent;
          border: 2px solid var(--whiteColor);
          color: var(--whiteColor);
        }

        .btn.transparent:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .health-animation {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 0;
        }

        .heartbeat-icon {
          font-size: 3rem;
          opacity: 0.2;
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .leftCard {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .health-stats {
          background: var(--paleGreen);
          padding: 2rem;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .health-stats h1 {
          font-size: var(--h2FontSize);
          color: var(--blackColor);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-icon {
          font-size: 1.5rem;
          color: var(--PrimaryColor);
          opacity: 0.8;
        }

        .stat-value {
          font-size: var(--h1FontSize);
          font-weight: 700;
          color: var(--blackColor);
        }

        .stat-unit {
          font-size: var(--smallFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .bmi-status {
          font-size: var(--smallestFontSize);
          font-weight: 600;
          margin-top: 0.2rem;
        }

        .link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--blackColor);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: var(--PrimaryColor);
        }

        .link:hover .icon:last-child {
          transform: translateX(5px);
        }

        .api-stats {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .api-stats h3 {
          font-size: var(--h3FontSize);
          color: var(--blackColor);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .usage-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
        }

        .usage-label {
          font-size: var(--smallFontSize);
          color: var(--textColor);
        }

        .usage-value {
          font-size: var(--smallFontSize);
          font-weight: 600;
          color: var(--blackColor);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: var(--inputColor);
          border-radius: 8px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background: var(--PrimaryColor);
          border-radius: 8px;
          transition: width 0.3s ease;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          background: var(--whiteColor);
          padding: 0.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .tab-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: var(--textColor);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: var(--normalFontSize);
        }

        .tab-btn.active {
          background: var(--PrimaryColor);
          color: var(--whiteColor);
          box-shadow: 0 2px 8px rgba(94, 170, 60, 0.25);
        }

        .tab-btn:hover:not(.active) {
          background: var(--paleGreen);
          color: var(--PrimaryColor);
        }

        /* Vitals Grid */
        .vitals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .vital-card {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vital-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .vital-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .vital-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--normalFontSize);
          color: var(--textColor);
          font-weight: 500;
        }

        .vital-value {
          font-size: var(--biggestFontSize);
          font-weight: 700;
          margin: 0.5rem 0;
        }

        .vital-unit {
          font-size: var(--smallFontSize);
          color: var(--textColor);
          font-weight: 400;
        }

        .vital-status {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: var(--smallestFontSize);
          font-weight: 600;
        }

        .status-normal {
          background: var(--paleGreen);
          color: var(--PrimaryColor);
        }

        .status-warning {
          background: rgba(255, 193, 7, 0.1);
          color: #ffc107;
        }

        .mini-chart {
          height: 80px;
          margin-top: 1rem;
          position: relative;
          overflow: hidden;
        }

        /* Activity Section */
        .activitySection {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .heading {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .heading h1 {
          font-size: var(--h2FontSize);
          color: var(--blackColor);
          font-weight: 700;
        }

        .heading h3 {
          font-size: var(--h3FontSize);
          color: var(--blackColor);
          font-weight: 600;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--greyText);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--textColor);
          font-size: var(--smallFontSize);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-secondary:hover {
          border-color: var(--PrimaryColor);
          color: var(--PrimaryColor);
          background: var(--paleGreen);
        }

        .secContainer {
          display: grid;
          gap: 1rem;
        }

        .singleCustomer {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 1rem;
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .singleCustomer:hover {
          background: var(--inputColor);
        }

        .singleCustomer img {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin-right: 1rem;
        }

        .customerDetails {
          flex: 1;
        }

        .customerDetails .name {
          font-size: var(--h3FontSize);
          font-weight: 600;
          color: var(--blackColor);
          display: block;
          margin-bottom: 0.2rem;
        }

        .customerDetails small {
          font-weight: 400;
          color: var(--textColor);
          font-size: var(--smallFontSize);
        }

        .duration {
          color: var(--greyText);
          font-weight: 400;
          font-size: var(--smallestFontSize);
        }

        /* Listing Section */
        .lisitingSection {
          background: var(--whiteColor);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .insights-container {
          display: grid;
          gap: 1rem;
        }

        .insight-card {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--inputColor);
          border-radius: 12px;
          transition: background 0.3s ease;
        }

        .insight-card:hover {
          background: var(--paleGreen);
        }

        .insight-icon {
          color: var(--PrimaryColor);
          margin-top: 0.25rem;
        }

        .insight-content h4 {
          color: var(--blackColor);
          font-size: var(--normalFontSize);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .insight-content p {
          color: var(--textColor);
          font-size: var(--smallFontSize);
          margin-bottom: 0.5rem;
        }

        .insight-date {
          color: var(--greyText);
          font-size: var(--smallestFontSize);
        }

        .analytics-summary {
          display: grid;
          gap: 1.5rem;
        }

        .summary-card {
          background: var(--paleGreen);
          padding: 1.5rem;
          border-radius: 12px;
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .summary-header h4 {
          color: var(--blackColor);
          font-size: var(--h3FontSize);
          font-weight: 600;
        }

        .trend-icon {
          font-size: 1.5rem;
        }

        .summary-stats {
          display: grid;
          gap: 0.75rem;
        }

        .stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          color: var(--textColor);
          font-size: var(--smallFontSize);
        }

        .stat-value {
          color: var(--blackColor);
          font-size: var(--normalFontSize);
          font-weight: 600;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media screen and (max-width: 990px) {
          .cardSection {
            flex-direction: column;
          }
          
          .rightCard, .leftCard {
            width: 100%;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 918px) {
          .searchBar {
            display: none;
          }
          
          .two-column-layout {
            grid-template-columns: 1fr;
          }
          
          .vitals-grid {
            grid-template-columns: 1fr;
          }
        }

        @media screen and (max-width: 576px) {
          .dashboard-container {
            padding: 1rem;
          }
          
          .adminDiv {
            display: none;
          }
          
          .title {
            text-align: center;
          }
          
          .buttons {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})};const r8=()=>{const[e,t]=y.useState("vitals"),[r,n]=y.useState([72,75,71,78,76,74,73]),[i,a]=y.useState({systolic:[120,118,122,119,121,120,119],diastolic:[80,78,82,79,81,80,79]}),[o,l]=y.useState([98,97,98,99,97,98,98]),[s,c]=y.useState([98.6,98.4,98.7,98.5,98.6,98.5,98.6]),u=`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --PrimaryColor: hsl(94, 59%, 35%);
      --HoverColor: #bdf094;
      --paleGreen: hsl(96, 75%, 89%);
      --whiteColor: hsl(0, 0%, 100%);
      --blackColor: hsl(0, 0%, 18%);
      --textColor: hsl(240, 1%, 48%);
      --bgColor: hsl(220, 10%, 94%);
      --greyText: rgb(190, 190, 190);
      --inputColor: hsl(330, 12%, 97%);
      --itemCardColor: hsl(120, 5%, 88%);
      --itemCardHover: hsl(120, 27%, 87%);
      --heartColor: #ff4757;
      --bpColor: #5f27cd;
      --tempColor: #ff9ff3;
      --oxygenColor: #00d2d3;
      
      --biggestFontSize: 2.5rem;
      --h1FontSize: 1.5rem;
      --h2FontSize: 1.25rem;
      --h3FontSize: 1rem;
      --normalFontSize: .938rem;
      --smallFontSize: .813rem;
      --smallestFontSize: .75rem;
    }

    .dashboard-container {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .tabs-container {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      background: var(--whiteColor);
      padding: 0.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .tab-btn {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: none;
      border-radius: 8px;
      color: var(--textColor);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: var(--normalFontSize);
    }

    .tab-btn.active {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .tab-btn:hover:not(.active) {
      background: var(--paleGreen);
    }

    /* Vitals Section Styles */
    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .vital-card {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .vital-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .vital-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .vital-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--normalFontSize);
      color: var(--textColor);
      font-weight: 500;
    }

    .vital-value {
      font-size: var(--biggestFontSize);
      font-weight: 700;
      margin: 0.5rem 0;
    }

    .vital-unit {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      font-weight: 400;
    }

    .vital-status {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status-normal {
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }

    .status-warning {
      background: rgba(250, 173, 20, 0.1);
      color: #faad14;
    }

    .status-danger {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
    }

    .mini-chart {
      height: 80px;
      margin-top: 1rem;
      position: relative;
      overflow: hidden;
    }

    .chart-line {
      stroke-width: 2;
      fill: none;
      stroke-linecap: round;
    }

    /* Activity Section Styles */
    .activitySection {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .heading {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .heading h1 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
    }

    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      border: 1px solid var(--greyText);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      color: var(--textColor);
      font-size: var(--smallFontSize);
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .btn:hover {
      border-color: var(--PrimaryColor);
      color: var(--PrimaryColor);
      background: var(--paleGreen);
    }

    .secContainer {
      display: grid;
      gap: 1rem;
    }

    .singleCustomer {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 1rem;
      border-radius: 12px;
      transition: background 0.3s ease;
    }

    .singleCustomer:hover {
      background: var(--inputColor);
    }

    .singleCustomer img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-right: 1rem;
    }

    .customerDetails {
      flex: 1;
    }

    .customerDetails .name {
      font-size: var(--h3FontSize);
      font-weight: 600;
      color: var(--blackColor);
      display: block;
      margin-bottom: 0.2rem;
    }

    .customerDetails small {
      font-weight: 400;
      color: var(--textColor);
      font-size: var(--smallFontSize);
    }

    .duration {
      color: var(--greyText);
      font-weight: 400;
      font-size: var(--smallestFontSize);
    }

    /* Listing Section Styles */
    .lisitingSection {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .listing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .singleItem {
      position: relative;
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .singleItem:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      background: var(--itemCardHover);
    }

    .singleItem .icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 1.2rem;
      color: var(--heartColor);
      cursor: pointer;
    }

    .singleItem img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      margin: 0.5rem auto;
    }

    .singleItem h3 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-top: 0.5rem;
    }

    .sellers {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .topSellers, .featuredSellers {
      background: var(--inputColor);
      padding: 1.5rem;
      border-radius: 12px;
    }

    .card {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
      padding: 1rem;
      background: var(--whiteColor);
      border-radius: 10px;
    }

    .users {
      display: flex;
      margin-left: -10px;
    }

    .users img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 2px solid var(--whiteColor);
      margin-left: -10px;
      object-fit: cover;
    }

    .cardText {
      flex: 1;
    }

    .cardText span {
      font-size: var(--normalFontSize);
      font-weight: 600;
      color: var(--blackColor);
    }

    .cardText small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .date {
      color: var(--PrimaryColor);
      font-weight: 600;
    }

    .two-column-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    @media screen and (max-width: 968px) {
      .two-column-layout {
        grid-template-columns: 1fr;
      }
      
      .vitals-grid {
        grid-template-columns: 1fr;
      }
      
      .sellers {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 576px) {
      .dashboard-container {
        padding: 1rem;
      }
      
      .listing-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .tabs-container {
        overflow-x: auto;
      }
    }
  `,d=[{id:1,name:"Aldi Rahman",image:"https://i.pravatar.cc/150?img=1",activity:"Completed morning workout",time:"2 min ago"},{id:2,name:"Dadang Supriatna",image:"https://i.pravatar.cc/150?img=2",activity:"Logged blood pressure",time:"15 min ago"},{id:3,name:"Gilbert Hutapea",image:"https://i.pravatar.cc/150?img=3",activity:"Updated health goals",time:"1 hour ago"},{id:4,name:"Sarah Johnson",image:"https://i.pravatar.cc/150?img=4",activity:"Synced fitness tracker",time:"2 hours ago"},{id:5,name:"Michael Chen",image:"https://i.pravatar.cc/150?img=5",activity:"Checked vitals",time:"3 hours ago"}],p=[{id:1,name:"Heart Monitor",image:"https://via.placeholder.com/150/ff6b6b/ffffff?text=Heart",liked:!0},{id:2,name:"BP Tracker",image:"https://via.placeholder.com/150/4ecdc4/ffffff?text=BP",liked:!1},{id:3,name:"Oximeter",image:"https://via.placeholder.com/150/45b7d1/ffffff?text=O2",liked:!1},{id:4,name:"Thermometer",image:"https://via.placeholder.com/150/f7b731/ffffff?text=Temp",liked:!0}];return x(Tt,{children:[f("style",{children:u}),x("div",{className:"dashboard-container",children:[x("div",{className:"tabs-container",children:[f("button",{className:`tab-btn ${e==="vitals"?"active":""}`,onClick:()=>t("vitals"),children:"Health Vitals Dashboard"}),f("button",{className:`tab-btn ${e==="activity"?"active":""}`,onClick:()=>t("activity"),children:"Activity & Listings"})]}),e==="vitals"?f(()=>x(Tt,{children:[x("div",{className:"vitals-grid",children:[x("div",{className:"vital-card",children:[x("div",{className:"vital-header",children:[x("div",{className:"vital-title",children:[f(Kt,{size:20,color:"#ff4757"}),f("span",{children:"Heart Rate"})]}),f("span",{className:"vital-status status-normal",children:"Normal"})]}),x("div",{className:"vital-value",style:{color:"#ff4757"},children:["74 ",f("span",{className:"vital-unit",children:"bpm"})]}),f("div",{className:"mini-chart",children:x("svg",{viewBox:"0 0 300 80",width:"100%",height:"100%",children:[f("polyline",{className:"chart-line",points:r.map((v,b)=>`${b*50},${80-(v-70)*8}`).join(" "),stroke:"#ff4757",strokeWidth:"2",fill:"none"}),r.map((v,b)=>f("circle",{cx:b*50,cy:80-(v-70)*8,r:"3",fill:"#ff4757"},b))]})})]}),x("div",{className:"vital-card",children:[x("div",{className:"vital-header",children:[x("div",{className:"vital-title",children:[f(sa,{size:20,color:"#5f27cd"}),f("span",{children:"Blood Pressure"})]}),f("span",{className:"vital-status status-normal",children:"Optimal"})]}),x("div",{className:"vital-value",style:{color:"#5f27cd"},children:["120/80 ",f("span",{className:"vital-unit",children:"mmHg"})]}),f("div",{className:"mini-chart",children:x("svg",{viewBox:"0 0 300 80",width:"100%",height:"100%",children:[f("polyline",{className:"chart-line",points:i.systolic.map((v,b)=>`${b*50},${80-(v-115)*4}`).join(" "),stroke:"#5f27cd",strokeWidth:"2",fill:"none"}),f("polyline",{className:"chart-line",points:i.diastolic.map((v,b)=>`${b*50},${80-(v-75)*4}`).join(" "),stroke:"#8b5cf6",strokeWidth:"2",fill:"none"})]})})]}),x("div",{className:"vital-card",children:[x("div",{className:"vital-header",children:[x("div",{className:"vital-title",children:[f(Io,{size:20,color:"#00d2d3"}),f("span",{children:"Oxygen Saturation"})]}),f("span",{className:"vital-status status-normal",children:"Excellent"})]}),x("div",{className:"vital-value",style:{color:"#00d2d3"},children:["98 ",f("span",{className:"vital-unit",children:"%"})]}),f("div",{className:"mini-chart",children:x("svg",{viewBox:"0 0 300 80",width:"100%",height:"100%",children:[f("polyline",{className:"chart-line",points:o.map((v,b)=>`${b*50},${80-(v-96)*20}`).join(" "),stroke:"#00d2d3",strokeWidth:"2",fill:"none"}),o.map((v,b)=>f("circle",{cx:b*50,cy:80-(v-96)*20,r:"3",fill:"#00d2d3"},b))]})})]}),x("div",{className:"vital-card",children:[x("div",{className:"vital-header",children:[x("div",{className:"vital-title",children:[f(fr,{size:20,color:"#ff9ff3"}),f("span",{children:"Temperature"})]}),f("span",{className:"vital-status status-normal",children:"Normal"})]}),x("div",{className:"vital-value",style:{color:"#ff9ff3"},children:["98.6 ",f("span",{className:"vital-unit",children:"°F"})]}),f("div",{className:"mini-chart",children:x("svg",{viewBox:"0 0 300 80",width:"100%",height:"100%",children:[f("polyline",{className:"chart-line",points:s.map((v,b)=>`${b*50},${80-(v-98.3)*100}`).join(" "),stroke:"#ff9ff3",strokeWidth:"2",fill:"none"}),s.map((v,b)=>f("circle",{cx:b*50,cy:80-(v-98.3)*100,r:"3",fill:"#ff9ff3"},b))]})})]})]}),x("div",{className:"two-column-layout",children:[x("div",{className:"activitySection",children:[x("div",{className:"heading",children:[f("h1",{children:"Recent Activity"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),f("div",{className:"secContainer",children:d.map(v=>x("div",{className:"singleCustomer",children:[f("img",{src:v.image,alt:v.name}),x("div",{className:"customerDetails",children:[f("span",{className:"name",children:v.name}),f("small",{children:v.activity})]}),f("div",{className:"duration",children:v.time})]},v.id))})]}),x("div",{className:"lisitingSection",children:[x("div",{className:"heading",children:[f("h1",{children:"Health Devices"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),f("div",{className:"listing-grid",children:p.map(v=>x("div",{className:"singleItem",children:[f(Kt,{className:"icon",fill:v.liked?"#ff4757":"none",color:"#ff4757"}),f("img",{src:v.image,alt:v.name}),f("h3",{children:v.name})]},v.id))}),x("div",{className:"sellers",children:[x("div",{className:"topSellers",children:[x("div",{className:"heading",children:[f("h3",{children:"Top Contributors"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),x("div",{className:"card",children:[f("div",{className:"users",children:d.slice(0,4).map(v=>f("img",{src:v.image,alt:v.name},v.id))}),f("div",{className:"cardText",children:x("span",{children:["14,556 Activities logged ",f("br",{}),x("small",{children:["21 Members ",f("span",{className:"date",children:"7 Days"})]})]})})]})]}),x("div",{className:"featuredSellers",children:[x("div",{className:"heading",children:[f("h3",{children:"Health Champions"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),x("div",{className:"card",children:[f("div",{className:"users",children:d.slice(0,4).reverse().map(v=>f("img",{src:v.image,alt:v.name},v.id))}),f("div",{className:"cardText",children:x("span",{children:["28,556 Goals achieved ",f("br",{}),x("small",{children:["26 Champions ",f("span",{className:"date",children:"31 Days"})]})]})})]})]})]})]})]})]}),{}):f(()=>x("div",{className:"two-column-layout",children:[x("div",{className:"activitySection",children:[x("div",{className:"heading",children:[f("h1",{children:"Recent Activity"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),f("div",{className:"secContainer",children:[...d,...d].map((v,b)=>x("div",{className:"singleCustomer",children:[f("img",{src:v.image,alt:v.name}),x("div",{className:"customerDetails",children:[f("span",{className:"name",children:v.name}),f("small",{children:v.activity})]}),f("div",{className:"duration",children:v.time})]},`${v.id}-${b}`))})]}),x("div",{className:"lisitingSection",children:[x("div",{className:"heading",children:[f("h1",{children:"My Listings"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),f("div",{className:"listing-grid",children:[...p,...p].map((v,b)=>x("div",{className:"singleItem",children:[f(Kt,{className:"icon",fill:v.liked?"#ff4757":"none",color:"#ff4757"}),f("img",{src:v.image,alt:v.name}),f("h3",{children:v.name})]},`${v.id}-${b}`))}),x("div",{className:"sellers",children:[x("div",{className:"topSellers",children:[x("div",{className:"heading",children:[f("h3",{children:"Top Sellers"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),x("div",{className:"card",children:[f("div",{className:"users",children:d.slice(0,4).map(v=>f("img",{src:v.image,alt:v.name},v.id))}),f("div",{className:"cardText",children:x("span",{children:["14,556 Items sold ",f("br",{}),x("small",{children:["21 Sellers ",f("span",{className:"date",children:"7 Days"})]})]})})]})]}),x("div",{className:"featuredSellers",children:[x("div",{className:"heading",children:[f("h3",{children:"Featured Sellers"}),x("button",{className:"btn",children:["See All",f(ar,{size:16})]})]}),x("div",{className:"card",children:[f("div",{className:"users",children:d.slice(0,4).reverse().map(v=>f("img",{src:v.image,alt:v.name},v.id))}),f("div",{className:"cardText",children:x("span",{children:["28,556 Items sold ",f("br",{}),x("small",{children:["26 Sellers ",f("span",{className:"date",children:"31 Days"})]})]})})]})]})]})]})]}),{})]})]})},n8=()=>x("div",{className:"mainContent",children:[f(t8,{}),f("div",{className:"bottom flex",children:f(r8,{})})]}),i8=()=>{var d;const[e,t]=y.useState({heartRate:"",bloodPressureSystolic:"",bloodPressureDiastolic:"",temperature:"",oxygenSaturation:"",weight:"",height:""}),[r,n]=y.useState([]),[i,a]=y.useState(!1);y.useEffect(()=>{const p=localStorage.getItem("vitalHistory");p&&n(JSON.parse(p))},[]);const o=p=>{t({...e,[p.target.name]:p.target.value})},l=p=>{p.preventDefault();const m=[{id:Date.now(),...e,timestamp:new Date().toLocaleString()},...r];n(m),localStorage.setItem("vitalHistory",JSON.stringify(m)),t({heartRate:"",bloodPressureSystolic:"",bloodPressureDiastolic:"",temperature:"",oxygenSaturation:"",weight:"",height:""}),a(!1)},s=(p,h)=>{switch(p){case"heartRate":return h>=60&&h<=100?{status:"normal",label:"Normal",color:"status-normal"}:h<60?{status:"low",label:"Low",color:"status-warning"}:{status:"high",label:"High",color:"status-danger"};case"temperature":return h>=36.1&&h<=37.2?{status:"normal",label:"Normal",color:"status-normal"}:h<36.1?{status:"low",label:"Low",color:"status-warning"}:{status:"high",label:"High",color:"status-danger"};case"oxygenSaturation":return h>=95?{status:"normal",label:"Normal",color:"status-normal"}:{status:"low",label:"Low",color:"status-warning"};case"bloodPressure":return h.systolic>=90&&h.systolic<=120&&h.diastolic>=60&&h.diastolic<=80?{status:"normal",label:"Normal",color:"status-normal"}:{status:"high",label:"Check",color:"status-warning"};default:return{status:"normal",label:"Normal",color:"status-normal"}}},c=p=>{const h=r.filter(m=>m.id!==p);n(h),localStorage.setItem("vitalHistory",JSON.stringify(h))};return x(Tt,{children:[f("style",{children:`
    :root {
      --PrimaryColor: hsl(94, 59%, 35%);
      --HoverColor: #bdf094;
      --paleGreen: hsl(96, 75%, 89%);
      --whiteColor: hsl(0, 0%, 100%);
      --blackColor: hsl(0, 0%, 18%);
      --textColor: hsl(240, 1%, 48%);
      --bgColor: hsl(220, 10%, 94%);
      --greyText: rgb(190, 190, 190);
      --inputColor: hsl(330, 12%, 97%);
      --itemCardColor: hsl(120, 5%, 88%);
      --itemCardHover: hsl(120, 27%, 87%);
      
      --biggestFontSize: 2.5rem;
      --h1FontSize: 1.5rem;
      --h2FontSize: 1.25rem;
      --h3FontSize: 1rem;
      --normalFontSize: .938rem;
      --smallFontSize: .813rem;
      --smallestFontSize: .75rem;
    }

    .vitalsContainer {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .vitalsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .headerContent h1 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .headerContent p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      font-weight: 500;
    }

    .addNewBtn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .addNewBtn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .modalOverlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modalContent {
      background: var(--whiteColor);
      border-radius: 16px;
      width: 90%;
      max-width: 800px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 2rem;
    }

    .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--inputColor);
    }

    .modalTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
    }

    .modalTitle .icon {
      color: var(--PrimaryColor);
    }

    .closeModalBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      color: var(--textColor);
    }

    .closeModalBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .formGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .formGroup {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .formGroup label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .formGroup input {
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      transition: all 0.3s ease;
      background: var(--whiteColor);
    }

    .formGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .formHint {
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      padding-top: 1rem;
      border-top: 1px solid var(--inputColor);
    }

    .btnCancel {
      padding: 0.75rem 1.5rem;
      background: transparent;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      color: var(--textColor);
      font-size: var(--normalFontSize);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btnCancel:hover {
      background: var(--inputColor);
    }

    .btnSave {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btnSave:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .currentVitals {
      margin-bottom: 2rem;
    }

    .sectionTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .lastUpdated {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      font-weight: 400;
      margin-left: auto;
    }

    .vitalsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .vitalCard {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .vitalCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .cardTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .iconBox {
      width: 48px;
      height: 48px;
      background: var(--paleGreen);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .iconBox .icon {
      font-size: 1.5rem;
      color: var(--PrimaryColor);
    }

    .statusBadge {
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status-normal {
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }

    .status-warning {
      background: rgba(250, 173, 20, 0.1);
      color: #faad14;
    }

    .status-danger {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
    }

    .cardInfo {
      text-align: center;
    }

    .cardValue {
      font-size: var(--biggestFontSize);
      font-weight: 700;
      color: var(--blackColor);
      margin: 0;
    }

    .cardUnit {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      margin: 0.2rem 0;
    }

    .cardLabel {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 500;
      margin: 0;
    }

    .historySection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .historyHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .historyTitle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
    }

    .recordBadge {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.4rem 1rem;
      border-radius: 20px;
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .tableWrapper {
      overflow-x: auto;
    }

    .vitalsTable {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
    }

    .vitalsTable thead {
      background: var(--inputColor);
    }

    .vitalsTable th {
      padding: 1rem;
      text-align: left;
      font-size: var(--smallFontSize);
      font-weight: 600;
      color: var(--blackColor);
      border-bottom: 2px solid var(--bgColor);
    }

    .vitalsTable th:first-child {
      border-radius: 8px 0 0 0;
    }

    .vitalsTable th:last-child {
      border-radius: 0 8px 0 0;
    }

    .vitalsTable td {
      padding: 1rem;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      border-bottom: 1px solid var(--inputColor);
    }

    .vitalsTable tbody tr {
      transition: background 0.3s ease;
    }

    .vitalsTable tbody tr:hover {
      background: var(--inputColor);
    }

    .latestRow {
      background: rgba(189, 240, 148, 0.2);
    }

    .latestTag {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
      margin-left: 0.5rem;
    }

    .cellWithIcon {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cellWithIcon .icon {
      font-size: 1rem;
    }

    .deleteButton {
      width: 32px;
      height: 32px;
      background: rgba(255, 77, 79, 0.1);
      border: none;
      border-radius: 6px;
      color: #ff4d4f;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .deleteButton:hover {
      background: #ff4d4f;
      color: var(--whiteColor);
      transform: scale(1.1);
    }

    .emptyState {
      text-align: center;
      padding: 3rem;
    }

    .emptyIcon {
      width: 80px;
      height: 80px;
      background: var(--inputColor);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .emptyIcon .icon {
      font-size: 2.5rem;
      color: var(--greyText);
    }

    .emptyTitle {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyText {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 2rem;
    }

    .emptyButton {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .emptyButton:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    @media screen and (max-width: 768px) {
      .modalContent {
        padding: 1.5rem;
        margin: 1rem;
      }

      .formGrid {
        grid-template-columns: 1fr;
      }

      .vitalsGrid {
        grid-template-columns: 1fr;
      }

      .vitalsHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .addNewBtn {
        justify-content: center;
      }

      .tableWrapper {
        overflow-x: scroll;
      }

      .vitalsTable {
        min-width: 600px;
      }
    }
      :root {
      --PrimaryColor: #5eaa3c;
      --HoverColor: #4a8530;
      --paleGreen: #f0f8eb;
      --whiteColor: #ffffff;
      --blackColor: #2c3e50;
      --greyText: #718096;
      --textColor: #64748b;
      --bgColor: #f8fafc;
      --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0;
      --h1FontSize: 2rem;
      --h2FontSize: 1.5rem;
      --h3FontSize: 1.25rem;
      --normalFontSize: 1rem;
      --smallFontSize: 0.875rem;
      --smallestFontSize: 0.75rem;
    }

    .apiKeys {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .apiKeysHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .apiKeysHeader div {
      flex: 1;
    }

    .apiKeysHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .apiKeysHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .createKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .createKeyForm {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .formCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .formCard h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      margin-bottom: 1.5rem;
    }

    .inputGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .inputGroup input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .inputGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .permissions {
      margin-bottom: 2rem;
    }

    .permissions > label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .permissionsList {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkboxLabel {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      font-weight: normal !important;
      margin-bottom: 0 !important;
      font-size: var(--normalFontSize) !important;
      color: var(--textColor) !important;
      cursor: pointer;
    }

    .checkboxLabel input {
      width: auto !important;
      margin: 0 !important;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .formActions button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cancelBtn {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .cancelBtn:hover {
      background: var(--itemCardHover);
    }

    .submitBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .submitBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .securityNotice {
      background: var(--paleGreen);
      border: 1px solid var(--PrimaryColor);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .securityIcon {
      color: var(--PrimaryColor);
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .noticeContent h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .noticeContent p {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      line-height: 1.5;
      margin: 0;
    }

    .apiKeysList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .apiKeyCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .apiKeyCard:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    }

    .keyHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .keyInfo h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .keyMeta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .keyMeta span {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status.active {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .keyActions {
      display: flex;
      gap: 0.5rem;
    }

    .actionBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actionBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .keyValue {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
    }

    .keyValue code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      background: none;
      padding: 0;
      word-break: break-all;
    }

    .keyPermissions {
      margin-bottom: 1rem;
    }

    .keyPermissions h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .permissionTags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .permissionTag {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
    }

    .keyUsage {
      border-top: 1px solid var(--inputColor);
      padding-top: 1rem;
    }

    .usageStats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .usageStat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .usageStat .label {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .usageStat .value {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .createFirstKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createFirstKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .apiDocumentation {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .apiDocumentation h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .apiDocumentation p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .docLinks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .docLink {
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: var(--normalFontSize);
      font-weight: 500;
      transition: all 0.3s ease;
      display: block;
      text-align: center;
    }

    .docLink:hover {
      background: var(--itemCardHover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media screen and (max-width: 768px) {
      .apiKeysHeader {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .keyHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .keyMeta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .keyActions {
        justify-content: center;
      }

      .usageStats {
        flex-direction: column;
        gap: 1rem;
      }

      .formCard {
        width: 95%;
        padding: 1.5rem;
      }

      .formActions {
        flex-direction: column;
      }

      .docLinks {
        grid-template-columns: 1fr;
      }
    }
  `}),x("div",{className:"vitalsContainer",children:[x("div",{className:"vitalsHeader",children:[x("div",{className:"headerContent",children:[x("h1",{children:[f(fr,{className:"icon"}),"Health Vitals"]}),f("p",{children:"Monitor and track your vital signs for better health management"})]}),x("button",{className:"addNewBtn",onClick:()=>a(!0),children:[f(il,{className:"icon"})," Add New Reading"]})]}),i&&f("div",{className:"modalOverlay",children:x("div",{className:"modalContent",children:[x("div",{className:"modalHeader",children:[x("h3",{className:"modalTitle",children:[f(Kt,{className:"icon"}),"Record New Vitals"]}),f("button",{onClick:()=>a(!1),className:"closeModalBtn",children:f(dc,{className:"icon"})})]}),x("form",{onSubmit:l,className:"vitalForm",children:[x("div",{className:"formGrid",children:[x("div",{className:"formGroup",children:[x("label",{children:[f(Kt,{className:"icon",style:{color:"#ef4444"}}),"Heart Rate (BPM)"]}),f("input",{type:"number",name:"heartRate",value:e.heartRate,onChange:o,placeholder:"72"}),f("p",{className:"formHint",children:"Normal: 60-100 BPM"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(sa,{className:"icon",style:{color:"#8b5cf6"}}),"Blood Pressure (Systolic)"]}),f("input",{type:"number",name:"bloodPressureSystolic",value:e.bloodPressureSystolic,onChange:o,placeholder:"120"}),f("p",{className:"formHint",children:"Normal: 90-120 mmHg"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(sa,{className:"icon",style:{color:"#8b5cf6"}}),"Blood Pressure (Diastolic)"]}),f("input",{type:"number",name:"bloodPressureDiastolic",value:e.bloodPressureDiastolic,onChange:o,placeholder:"80"}),f("p",{className:"formHint",children:"Normal: 60-80 mmHg"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(qd,{className:"icon",style:{color:"#f97316"}}),"Temperature (°C)"]}),f("input",{type:"number",step:"0.1",name:"temperature",value:e.temperature,onChange:o,placeholder:"36.5"}),f("p",{className:"formHint",children:"Normal: 36.1-37.2°C"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(Io,{className:"icon",style:{color:"#3b82f6"}}),"Oxygen Saturation (%)"]}),f("input",{type:"number",name:"oxygenSaturation",value:e.oxygenSaturation,onChange:o,placeholder:"98"}),f("p",{className:"formHint",children:"Normal: ≥95%"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(jp,{className:"icon",style:{color:"#10b981"}}),"Weight (kg)"]}),f("input",{type:"number",step:"0.1",name:"weight",value:e.weight,onChange:o,placeholder:"70.0"})]}),x("div",{className:"formGroup",children:[x("label",{children:[f(oS,{className:"icon",style:{color:"#6366f1"}}),"Height (cm)"]}),f("input",{type:"number",name:"height",value:e.height,onChange:o,placeholder:"175"})]})]}),x("div",{className:"formActions",children:[f("button",{type:"button",onClick:()=>a(!1),className:"btnCancel",children:"Cancel"}),x("button",{type:"submit",className:"btnSave",children:[f(Lm,{className:"icon"})," Save Vitals"]})]})]})]})}),r.length>0&&x("div",{className:"currentVitals",children:[x("h3",{className:"sectionTitle",children:[f(jo,{className:"icon"}),"Latest Readings",x("span",{className:"lastUpdated",children:["Last updated: ",(d=r[0])==null?void 0:d.timestamp]})]}),x("div",{className:"vitalsGrid",children:[r[0].heartRate&&x("div",{className:"vitalCard",children:[x("div",{className:"cardTop",children:[f("div",{className:"iconBox",children:f(Kt,{className:"icon"})}),f("span",{className:`statusBadge ${s("heartRate",r[0].heartRate).color}`,children:s("heartRate",r[0].heartRate).label})]}),x("div",{className:"cardInfo",children:[f("p",{className:"cardValue",children:r[0].heartRate}),f("p",{className:"cardUnit",children:"BPM"}),f("p",{className:"cardLabel",children:"Heart Rate"})]})]}),r[0].bloodPressureSystolic&&x("div",{className:"vitalCard",children:[x("div",{className:"cardTop",children:[f("div",{className:"iconBox",children:f(sa,{className:"icon"})}),f("span",{className:`statusBadge ${s("bloodPressure",{systolic:r[0].bloodPressureSystolic,diastolic:r[0].bloodPressureDiastolic}).color}`,children:s("bloodPressure",{systolic:r[0].bloodPressureSystolic,diastolic:r[0].bloodPressureDiastolic}).label})]}),x("div",{className:"cardInfo",children:[x("p",{className:"cardValue",children:[r[0].bloodPressureSystolic,"/",r[0].bloodPressureDiastolic]}),f("p",{className:"cardUnit",children:"mmHg"}),f("p",{className:"cardLabel",children:"Blood Pressure"})]})]}),r[0].temperature&&x("div",{className:"vitalCard",children:[x("div",{className:"cardTop",children:[f("div",{className:"iconBox",children:f(qd,{className:"icon"})}),f("span",{className:`statusBadge ${s("temperature",r[0].temperature).color}`,children:s("temperature",r[0].temperature).label})]}),x("div",{className:"cardInfo",children:[x("p",{className:"cardValue",children:[r[0].temperature,"°"]}),f("p",{className:"cardUnit",children:"Celsius"}),f("p",{className:"cardLabel",children:"Temperature"})]})]}),r[0].oxygenSaturation&&x("div",{className:"vitalCard",children:[x("div",{className:"cardTop",children:[f("div",{className:"iconBox",children:f(Io,{className:"icon"})}),f("span",{className:`statusBadge ${s("oxygenSaturation",r[0].oxygenSaturation).color}`,children:s("oxygenSaturation",r[0].oxygenSaturation).label})]}),x("div",{className:"cardInfo",children:[x("p",{className:"cardValue",children:[r[0].oxygenSaturation,"%"]}),f("p",{className:"cardUnit",children:"SpO2"}),f("p",{className:"cardLabel",children:"Oxygen Saturation"})]})]})]})]}),x("div",{className:"historySection",children:[x("div",{className:"historyHeader",children:[x("h3",{className:"historyTitle",children:[f(fr,{className:"icon"}),"Health Records History"]}),r.length>0&&x("span",{className:"recordBadge",children:[r.length," Records"]})]}),r.length>0?f("div",{className:"tableWrapper",children:x("table",{className:"vitalsTable",children:[f("thead",{children:x("tr",{children:[f("th",{children:"Date & Time"}),f("th",{children:"Heart Rate"}),f("th",{children:"Blood Pressure"}),f("th",{children:"Temperature"}),f("th",{children:"Oxygen Sat."}),f("th",{children:"Weight"}),f("th",{children:"Actions"})]})}),f("tbody",{children:r.map((p,h)=>x("tr",{className:h===0?"latestRow":"",children:[x("td",{children:[f("span",{children:p.timestamp}),h===0&&f("span",{className:"latestTag",children:"Latest"})]}),f("td",{children:p.heartRate?x("div",{className:"cellWithIcon",children:[f(Kt,{className:"icon",style:{color:"#ef4444",width:"16px"}}),x("span",{children:[p.heartRate," BPM"]})]}):"-"}),f("td",{children:p.bloodPressureSystolic?x("div",{className:"cellWithIcon",children:[f(sa,{className:"icon",style:{color:"#8b5cf6",width:"16px"}}),x("span",{children:[p.bloodPressureSystolic,"/",p.bloodPressureDiastolic]})]}):"-"}),f("td",{children:p.temperature?x("div",{className:"cellWithIcon",children:[f(qd,{className:"icon",style:{color:"#f97316",width:"16px"}}),x("span",{children:[p.temperature,"°C"]})]}):"-"}),f("td",{children:p.oxygenSaturation?x("div",{className:"cellWithIcon",children:[f(Io,{className:"icon",style:{color:"#3b82f6",width:"16px"}}),x("span",{children:[p.oxygenSaturation,"%"]})]}):"-"}),f("td",{children:p.weight?x("div",{className:"cellWithIcon",children:[f(jp,{className:"icon",style:{color:"#10b981",width:"16px"}}),x("span",{children:[p.weight," kg"]})]}):"-"}),f("td",{children:f("button",{onClick:()=>c(p.id),className:"deleteButton",children:f(dc,{className:"icon"})})})]},p.id))})]})}):x("div",{className:"emptyState",children:[f("div",{className:"emptyIcon",children:f(Mo,{className:"icon"})}),f("h4",{className:"emptyTitle",children:"No vital readings recorded yet"}),f("p",{className:"emptyText",children:"Start tracking your health by adding your first reading!"}),x("button",{onClick:()=>a(!0),className:"emptyButton",children:[f(il,{className:"icon"})," Add First Reading"]})]})]})]})]})};function sS(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=sS(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function se(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=sS(e))&&(n&&(n+=" "),n+=t);return n}var yu={},cS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==="__proto__"}e.isUnsafeProperty=t})(cS);var $m={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){switch(typeof r){case"number":case"symbol":return!1;case"string":return r.includes(".")||r.includes("[")||r.includes("]")}}e.isDeepKey=t})($m);var Fm={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){var n;return typeof r=="string"||typeof r=="symbol"?r:Object.is((n=r==null?void 0:r.valueOf)==null?void 0:n.call(r),-0)?"-0":String(r)}e.toKey=t})(Fm);var bu={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){const n=[],i=r.length;if(i===0)return n;let a=0,o="",l="",s=!1;for(r.charCodeAt(0)===46&&(n.push(""),a++);a<i;){const c=r[a];l?c==="\\"&&a+1<i?(a++,o+=r[a]):c===l?l="":o+=c:s?c==='"'||c==="'"?l=c:c==="]"?(s=!1,n.push(o),o=""):o+=c:c==="["?(s=!0,o&&(n.push(o),o="")):c==="."?o&&(n.push(o),o=""):o+=c,a++}return o&&n.push(o),n}e.toPath=t})(bu);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=cS,r=$m,n=Fm,i=bu;function a(l,s,c){if(l==null)return c;switch(typeof s){case"string":{if(t.isUnsafeProperty(s))return c;const u=l[s];return u===void 0?r.isDeepKey(s)?a(l,i.toPath(s),c):c:u}case"number":case"symbol":{typeof s=="number"&&(s=n.toKey(s));const u=l[s];return u===void 0?c:u}default:{if(Array.isArray(s))return o(l,s,c);if(Object.is(s==null?void 0:s.valueOf(),-0)?s="-0":s=String(s),t.isUnsafeProperty(s))return c;const u=l[s];return u===void 0?c:u}}}function o(l,s,c){if(s.length===0)return c;let u=l;for(let d=0;d<s.length;d++){if(u==null||t.isUnsafeProperty(s[d]))return c;u=u[s[d]]}return u===void 0?c:u}e.get=a})(yu);var a8=yu.get;const Qn=a8;var Ip={},o8={get exports(){return Ip},set exports(e){Ip=e}},ye={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=Symbol.for("react.transitional.element"),Hm=Symbol.for("react.portal"),xu=Symbol.for("react.fragment"),wu=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Cu=Symbol.for("react.consumer"),ku=Symbol.for("react.context"),Pu=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Ou=Symbol.for("react.memo"),Au=Symbol.for("react.lazy"),l8=Symbol.for("react.view_transition"),s8=Symbol.for("react.client.reference");function gr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bm:switch(e=e.type,e){case xu:case Su:case wu:case Nu:case Eu:case l8:return e;default:switch(e=e&&e.$$typeof,e){case ku:case Pu:case Au:case Ou:return e;case Cu:return e;default:return t}}case Hm:return t}}}ye.ContextConsumer=Cu;ye.ContextProvider=ku;ye.Element=Bm;ye.ForwardRef=Pu;ye.Fragment=xu;ye.Lazy=Au;ye.Memo=Ou;ye.Portal=Hm;ye.Profiler=Su;ye.StrictMode=wu;ye.Suspense=Nu;ye.SuspenseList=Eu;ye.isContextConsumer=function(e){return gr(e)===Cu};ye.isContextProvider=function(e){return gr(e)===ku};ye.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bm};ye.isForwardRef=function(e){return gr(e)===Pu};ye.isFragment=function(e){return gr(e)===xu};ye.isLazy=function(e){return gr(e)===Au};ye.isMemo=function(e){return gr(e)===Ou};ye.isPortal=function(e){return gr(e)===Hm};ye.isProfiler=function(e){return gr(e)===Su};ye.isStrictMode=function(e){return gr(e)===wu};ye.isSuspense=function(e){return gr(e)===Nu};ye.isSuspenseList=function(e){return gr(e)===Eu};ye.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xu||e===Su||e===wu||e===Nu||e===Eu||typeof e=="object"&&e!==null&&(e.$$typeof===Au||e.$$typeof===Ou||e.$$typeof===ku||e.$$typeof===Cu||e.$$typeof===Pu||e.$$typeof===s8||e.getModuleId!==void 0)};ye.typeOf=gr;(function(e){e.exports=ye})(o8);var tt=e=>e===0?0:e>0?1:-1,Yt=e=>typeof e=="number"&&e!=+e,xi=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,H=e=>(typeof e=="number"||e instanceof Number)&&!Yt(e),Hr=e=>H(e)||typeof e=="string",c8=0,al=e=>{var t=++c8;return"".concat(e||"").concat(t)},Pt=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!H(t)&&typeof t!="string")return n;var a;if(xi(t)){if(r==null)return n;var o=t.indexOf("%");a=r*parseFloat(t.slice(0,o))/100}else a=+t;return Yt(a)&&(a=n),i&&r!=null&&a>r&&(a=r),a},uS=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,r={},n=0;n<t;n++)if(!r[e[n]])r[e[n]]=!0;else return!0;return!1},ky=(e,t)=>H(e)&&H(t)?r=>e+r*(t-e):()=>t;function Pr(e,t,r){return H(e)&&H(t)?e+r*(t-e):t}function dS(e,t,r){if(!(!e||!e.length))return e.find(n=>n&&(typeof t=="function"?t(n):Qn(n,t))===r)}var ke=e=>e===null||typeof e>"u",kl=e=>ke(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)),u8=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function Um(e){if(typeof e!="string")return!1;var t=u8;return t.includes(e)}var d8=["viewBox","children"],Py=["points","pathLength"],Qd={svg:d8,polygon:Py,polyline:Py},Km=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var r=e;if(y.isValidElement(e)&&(r=e.props),typeof r!="object"&&typeof r!="function")return null;var n={};return Object.keys(r).forEach(i=>{Um(i)&&(n[i]=t||(a=>r[i](r,a)))}),n},f8=(e,t,r)=>n=>(e(t,r,n),null),Tu=(e,t,r)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var n=null;return Object.keys(e).forEach(i=>{var a=e[i];Um(i)&&typeof a=="function"&&(n||(n={}),n[i]=f8(a,t,r))}),n},p8=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"];function fS(e){if(typeof e!="string")return!1;var t=p8;return t.includes(e)}function gn(e){var t=Object.entries(e).filter(r=>{var[n]=r;return fS(n)});return Object.fromEntries(t)}var Ny=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",Ey=null,Jd=null,pS=e=>{if(e===Ey&&Array.isArray(Jd))return Jd;var t=[];return y.Children.forEach(e,r=>{ke(r)||(Ip.isFragment(r)?t=t.concat(pS(r.props.children)):t.push(r))}),Jd=t,Ey=e,t};function Pl(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(i=>Ny(i)):n=[Ny(t)],pS(e).forEach(i=>{var a=Qn(i,"type.displayName")||Qn(i,"type.name");n.indexOf(a)!==-1&&r.push(i)}),r}var hS=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0,h8=(e,t,r,n)=>{var i;if(typeof t=="symbol"||typeof t=="number")return!0;var a=(i=n&&(Qd==null?void 0:Qd[n]))!==null&&i!==void 0?i:[],o=t.startsWith("data-"),l=typeof e!="function"&&(!!n&&a.includes(t)||fS(t)),s=!!r&&Um(t);return o||l||s},Ne=(e,t,r)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var n=e;if(y.isValidElement(e)&&(n=e.props),typeof n!="object"&&typeof n!="function")return null;var i={};return Object.keys(n).forEach(a=>{var o;h8((o=n)===null||o===void 0?void 0:o[a],a,t,r)&&(i[a]=n[a])}),i},m8=["children","width","height","viewBox","className","style","title","desc"];function Dp(){return Dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Dp.apply(null,arguments)}function v8(e,t){if(e==null)return{};var r,n,i=g8(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function g8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var mS=y.forwardRef((e,t)=>{var{children:r,width:n,height:i,viewBox:a,className:o,style:l,title:s,desc:c}=e,u=v8(e,m8),d=a||{width:n,height:i,x:0,y:0},p=se("recharts-surface",o);return y.createElement("svg",Dp({},Ne(u,!0,"svg"),{className:p,width:n,height:i,style:l,viewBox:"".concat(d.x," ").concat(d.y," ").concat(d.width," ").concat(d.height),ref:t}),y.createElement("title",null,s),y.createElement("desc",null,c),r)}),y8=["children","className"];function Rp(){return Rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rp.apply(null,arguments)}function b8(e,t){if(e==null)return{};var r,n,i=x8(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function x8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var xt=y.forwardRef((e,t)=>{var{children:r,className:n}=e,i=b8(e,y8),a=se("recharts-layer",n);return y.createElement("g",Rp({className:a},Ne(i,!0),{ref:t}),r)}),w8=y.createContext(null);function be(e){return function(){return e}}const vS=Math.cos,fc=Math.sin,Mr=Math.sqrt,pc=Math.PI,_u=2*pc,Lp=Math.PI,$p=2*Lp,hi=1e-6,S8=$p-hi;function gS(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function C8(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return gS;const r=10**t;return function(n){this._+=n[0];for(let i=1,a=n.length;i<a;++i)this._+=Math.round(arguments[i]*r)/r+n[i]}}class k8{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?gS:C8(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,i){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+i}`}bezierCurveTo(t,r,n,i,a,o){this._append`C${+t},${+r},${+n},${+i},${this._x1=+a},${this._y1=+o}`}arcTo(t,r,n,i,a){if(t=+t,r=+r,n=+n,i=+i,a=+a,a<0)throw new Error(`negative radius: ${a}`);let o=this._x1,l=this._y1,s=n-t,c=i-r,u=o-t,d=l-r,p=u*u+d*d;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(p>hi)if(!(Math.abs(d*s-c*u)>hi)||!a)this._append`L${this._x1=t},${this._y1=r}`;else{let h=n-o,m=i-l,v=s*s+c*c,b=h*h+m*m,g=Math.sqrt(v),w=Math.sqrt(p),S=a*Math.tan((Lp-Math.acos((v+p-b)/(2*g*w)))/2),C=S/w,k=S/g;Math.abs(C-1)>hi&&this._append`L${t+C*u},${r+C*d}`,this._append`A${a},${a},0,0,${+(d*h>u*m)},${this._x1=t+k*s},${this._y1=r+k*c}`}}arc(t,r,n,i,a,o){if(t=+t,r=+r,n=+n,o=!!o,n<0)throw new Error(`negative radius: ${n}`);let l=n*Math.cos(i),s=n*Math.sin(i),c=t+l,u=r+s,d=1^o,p=o?i-a:a-i;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>hi||Math.abs(this._y1-u)>hi)&&this._append`L${c},${u}`,n&&(p<0&&(p=p%$p+$p),p>S8?this._append`A${n},${n},0,1,${d},${t-l},${r-s}A${n},${n},0,1,${d},${this._x1=c},${this._y1=u}`:p>hi&&this._append`A${n},${n},0,${+(p>=Lp)},${d},${this._x1=t+n*Math.cos(a)},${this._y1=r+n*Math.sin(a)}`)}rect(t,r,n,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+i}h${-n}Z`}toString(){return this._}}function Wm(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new k8(t)}function Vm(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function yS(e){this._context=e}yS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function zu(e){return new yS(e)}function bS(e){return e[0]}function xS(e){return e[1]}function wS(e,t){var r=be(!0),n=null,i=zu,a=null,o=Wm(l);e=typeof e=="function"?e:e===void 0?bS:be(e),t=typeof t=="function"?t:t===void 0?xS:be(t);function l(s){var c,u=(s=Vm(s)).length,d,p=!1,h;for(n==null&&(a=i(h=o())),c=0;c<=u;++c)!(c<u&&r(d=s[c],c,s))===p&&((p=!p)?a.lineStart():a.lineEnd()),p&&a.point(+e(d,c,s),+t(d,c,s));if(h)return a=null,h+""||null}return l.x=function(s){return arguments.length?(e=typeof s=="function"?s:be(+s),l):e},l.y=function(s){return arguments.length?(t=typeof s=="function"?s:be(+s),l):t},l.defined=function(s){return arguments.length?(r=typeof s=="function"?s:be(!!s),l):r},l.curve=function(s){return arguments.length?(i=s,n!=null&&(a=i(n)),l):i},l.context=function(s){return arguments.length?(s==null?n=a=null:a=i(n=s),l):n},l}function is(e,t,r){var n=null,i=be(!0),a=null,o=zu,l=null,s=Wm(c);e=typeof e=="function"?e:e===void 0?bS:be(+e),t=typeof t=="function"?t:be(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?xS:be(+r);function c(d){var p,h,m,v=(d=Vm(d)).length,b,g=!1,w,S=new Array(v),C=new Array(v);for(a==null&&(l=o(w=s())),p=0;p<=v;++p){if(!(p<v&&i(b=d[p],p,d))===g)if(g=!g)h=p,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),m=p-1;m>=h;--m)l.point(S[m],C[m]);l.lineEnd(),l.areaEnd()}g&&(S[p]=+e(b,p,d),C[p]=+t(b,p,d),l.point(n?+n(b,p,d):S[p],r?+r(b,p,d):C[p]))}if(w)return l=null,w+""||null}function u(){return wS().defined(i).curve(o).context(a)}return c.x=function(d){return arguments.length?(e=typeof d=="function"?d:be(+d),n=null,c):e},c.x0=function(d){return arguments.length?(e=typeof d=="function"?d:be(+d),c):e},c.x1=function(d){return arguments.length?(n=d==null?null:typeof d=="function"?d:be(+d),c):n},c.y=function(d){return arguments.length?(t=typeof d=="function"?d:be(+d),r=null,c):t},c.y0=function(d){return arguments.length?(t=typeof d=="function"?d:be(+d),c):t},c.y1=function(d){return arguments.length?(r=d==null?null:typeof d=="function"?d:be(+d),c):r},c.lineX0=c.lineY0=function(){return u().x(e).y(t)},c.lineY1=function(){return u().x(e).y(r)},c.lineX1=function(){return u().x(n).y(t)},c.defined=function(d){return arguments.length?(i=typeof d=="function"?d:be(!!d),c):i},c.curve=function(d){return arguments.length?(o=d,a!=null&&(l=o(a)),c):o},c.context=function(d){return arguments.length?(d==null?a=l=null:l=o(a=d),c):a},c}class SS{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function P8(e){return new SS(e,!0)}function N8(e){return new SS(e,!1)}const Gm={draw(e,t){const r=Mr(t/pc);e.moveTo(r,0),e.arc(0,0,r,0,_u)}},E8={draw(e,t){const r=Mr(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},CS=Mr(1/3),O8=CS*2,A8={draw(e,t){const r=Mr(t/O8),n=r*CS;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},T8={draw(e,t){const r=Mr(t),n=-r/2;e.rect(n,n,r,r)}},_8=.8908130915292852,kS=fc(pc/10)/fc(7*pc/10),z8=fc(_u/10)*kS,M8=-vS(_u/10)*kS,j8={draw(e,t){const r=Mr(t*_8),n=z8*r,i=M8*r;e.moveTo(0,-r),e.lineTo(n,i);for(let a=1;a<5;++a){const o=_u*a/5,l=vS(o),s=fc(o);e.lineTo(s*r,-l*r),e.lineTo(l*n-s*i,s*n+l*i)}e.closePath()}},Zd=Mr(3),I8={draw(e,t){const r=-Mr(t/(Zd*3));e.moveTo(0,r*2),e.lineTo(-Zd*r,-r),e.lineTo(Zd*r,-r),e.closePath()}},rr=-.5,nr=Mr(3)/2,Fp=1/Mr(12),D8=(Fp/2+1)*3,R8={draw(e,t){const r=Mr(t/D8),n=r/2,i=r*Fp,a=n,o=r*Fp+r,l=-a,s=o;e.moveTo(n,i),e.lineTo(a,o),e.lineTo(l,s),e.lineTo(rr*n-nr*i,nr*n+rr*i),e.lineTo(rr*a-nr*o,nr*a+rr*o),e.lineTo(rr*l-nr*s,nr*l+rr*s),e.lineTo(rr*n+nr*i,rr*i-nr*n),e.lineTo(rr*a+nr*o,rr*o-nr*a),e.lineTo(rr*l+nr*s,rr*s-nr*l),e.closePath()}};function L8(e,t){let r=null,n=Wm(i);e=typeof e=="function"?e:be(e||Gm),t=typeof t=="function"?t:be(t===void 0?64:+t);function i(){let a;if(r||(r=a=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),a)return r=null,a+""||null}return i.type=function(a){return arguments.length?(e=typeof a=="function"?a:be(a),i):e},i.size=function(a){return arguments.length?(t=typeof a=="function"?a:be(+a),i):t},i.context=function(a){return arguments.length?(r=a??null,i):r},i}function hc(){}function mc(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function PS(e){this._context=e}PS.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:mc(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:mc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function $8(e){return new PS(e)}function NS(e){this._context=e}NS.prototype={areaStart:hc,areaEnd:hc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:mc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function F8(e){return new NS(e)}function ES(e){this._context=e}ES.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:mc(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function B8(e){return new ES(e)}function OS(e){this._context=e}OS.prototype={areaStart:hc,areaEnd:hc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function H8(e){return new OS(e)}function Oy(e){return e<0?-1:1}function Ay(e,t,r){var n=e._x1-e._x0,i=t-e._x1,a=(e._y1-e._y0)/(n||i<0&&-0),o=(r-e._y1)/(i||n<0&&-0),l=(a*i+o*n)/(n+i);return(Oy(a)+Oy(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(l))||0}function Ty(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function ef(e,t,r){var n=e._x0,i=e._y0,a=e._x1,o=e._y1,l=(a-n)/3;e._context.bezierCurveTo(n+l,i+l*t,a-l,o-l*r,a,o)}function vc(e){this._context=e}vc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ef(this,this._t0,Ty(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,ef(this,Ty(this,r=Ay(this,e,t)),r);break;default:ef(this,this._t0,r=Ay(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function AS(e){this._context=new TS(e)}(AS.prototype=Object.create(vc.prototype)).point=function(e,t){vc.prototype.point.call(this,t,e)};function TS(e){this._context=e}TS.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,i,a){this._context.bezierCurveTo(t,e,n,r,a,i)}};function U8(e){return new vc(e)}function K8(e){return new AS(e)}function _S(e){this._context=e}_S.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=_y(e),i=_y(t),a=0,o=1;o<r;++a,++o)this._context.bezierCurveTo(n[0][a],i[0][a],n[1][a],i[1][a],e[o],t[o]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function _y(e){var t,r=e.length-1,n,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=e[0]+2*e[1],t=1;t<r-1;++t)i[t]=1,a[t]=4,o[t]=4*e[t]+2*e[t+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=i[t]/a[t-1],a[t]-=n,o[t]-=n*o[t-1];for(i[r-1]=o[r-1]/a[r-1],t=r-2;t>=0;--t)i[t]=(o[t]-i[t+1])/a[t];for(a[r-1]=(e[r]+i[r-1])/2,t=0;t<r-1;++t)a[t]=2*e[t+1]-i[t+1];return[i,a]}function W8(e){return new _S(e)}function Mu(e,t){this._context=e,this._t=t}Mu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function V8(e){return new Mu(e,.5)}function G8(e){return new Mu(e,0)}function Y8(e){return new Mu(e,1)}function Ea(e,t){if((o=e.length)>1)for(var r=1,n,i,a=e[t[0]],o,l=a.length;r<o;++r)for(i=a,a=e[t[r]],n=0;n<l;++n)a[n][1]+=a[n][0]=isNaN(i[n][1])?i[n][0]:i[n][1]}function Bp(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function q8(e,t){return e[t]}function X8(e){const t=[];return t.key=e,t}function Q8(){var e=be([]),t=Bp,r=Ea,n=q8;function i(a){var o=Array.from(e.apply(this,arguments),X8),l,s=o.length,c=-1,u;for(const d of a)for(l=0,++c;l<s;++l)(o[l][c]=[0,+n(d,o[l].key,c,a)]).data=d;for(l=0,u=Vm(t(o));l<s;++l)o[u[l]].index=l;return r(o,u),o}return i.keys=function(a){return arguments.length?(e=typeof a=="function"?a:be(Array.from(a)),i):e},i.value=function(a){return arguments.length?(n=typeof a=="function"?a:be(+a),i):n},i.order=function(a){return arguments.length?(t=a==null?Bp:typeof a=="function"?a:be(Array.from(a)),i):t},i.offset=function(a){return arguments.length?(r=a??Ea,i):r},i}function J8(e,t){if((n=e.length)>0){for(var r,n,i=0,a=e[0].length,o;i<a;++i){for(o=r=0;r<n;++r)o+=e[r][i][1]||0;if(o)for(r=0;r<n;++r)e[r][i][1]/=o}Ea(e,t)}}function Z8(e,t){if((i=e.length)>0){for(var r=0,n=e[t[0]],i,a=n.length;r<a;++r){for(var o=0,l=0;o<i;++o)l+=e[o][r][1]||0;n[r][1]+=n[r][0]=-l/2}Ea(e,t)}}function e_(e,t){if(!(!((o=e.length)>0)||!((a=(i=e[t[0]]).length)>0))){for(var r=0,n=1,i,a,o;n<a;++n){for(var l=0,s=0,c=0;l<o;++l){for(var u=e[t[l]],d=u[n][1]||0,p=u[n-1][1]||0,h=(d-p)/2,m=0;m<l;++m){var v=e[t[m]],b=v[n][1]||0,g=v[n-1][1]||0;h+=b-g}s+=d,c+=h*d}i[n-1][1]+=i[n-1][0]=r,s&&(r-=c/s)}i[n-1][1]+=i[n-1][0]=r,Ea(e,t)}}var t_=["type","size","sizeType"];function Hp(){return Hp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hp.apply(null,arguments)}function zy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function My(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?zy(Object(r),!0).forEach(function(n){r_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zy(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function r_(e,t,r){return(t=n_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n_(e){var t=i_(e,"string");return typeof t=="symbol"?t:t+""}function i_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a_(e,t){if(e==null)return{};var r,n,i=o_(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function o_(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var zS={symbolCircle:Gm,symbolCross:E8,symbolDiamond:A8,symbolSquare:T8,symbolStar:j8,symbolTriangle:I8,symbolWye:R8},l_=Math.PI/180,s_=e=>{var t="symbol".concat(kl(e));return zS[t]||Gm},c_=(e,t,r)=>{if(t==="area")return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var n=18*l_;return 1.25*e*e*(Math.tan(n)-Math.tan(n*2)*Math.tan(n)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},u_=(e,t)=>{zS["symbol".concat(kl(e))]=t},MS=e=>{var{type:t="circle",size:r=64,sizeType:n="area"}=e,i=a_(e,t_),a=My(My({},i),{},{type:t,size:r,sizeType:n}),o=()=>{var d=s_(t),p=L8().type(d).size(c_(r,n,t));return p()},{className:l,cx:s,cy:c}=a,u=Ne(a,!0);return s===+s&&c===+c&&r===+r?y.createElement("path",Hp({},u,{className:se("recharts-symbols",l),transform:"translate(".concat(s,", ").concat(c,")"),d:o()})):null};MS.registerSymbol=u_;var jS={},IS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const i=new Map;for(let a=0;a<r.length;a++){const o=r[a],l=n(o);i.has(l)||i.set(l,o)}return Array.from(i.values())}e.uniqBy=t})(IS);var Ym={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(Ym);var DS={},ju={},RS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Number.isSafeInteger(r)&&r>=0}e.isLength=t})(RS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=RS;function r(n){return n!=null&&typeof n!="function"&&t.isLength(n.length)}e.isArrayLike=r})(ju);var LS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(LS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ju,r=LS;function n(i){return r.isObjectLike(i)&&t.isArrayLike(i)}e.isArrayLikeObject=n})(DS);var $S={},FS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=yu;function r(n){return function(i){return t.get(i,n)}}e.property=r})(FS);var BS={},tf={},rf={},qm={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r!==null&&(typeof r=="object"||typeof r=="function")}e.isObject=t})(qm);var Xm={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(Xm);var Iu={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){return r===n||Number.isNaN(r)&&Number.isNaN(n)}e.eq=t})(Iu);var jy;function d_(){return jy||(jy=1,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Qm(),r=qm,n=Xm,i=Iu;function a(d,p,h){return typeof h!="function"?t.isMatch(d,p):o(d,p,function m(v,b,g,w,S,C){const k=h(v,b,g,w,S,C);return k!==void 0?!!k:o(v,b,m,C)},new Map)}function o(d,p,h,m){if(p===d)return!0;switch(typeof p){case"object":return l(d,p,h,m);case"function":return Object.keys(p).length>0?o(d,{...p},h,m):i.eq(d,p);default:return r.isObject(d)?typeof p=="string"?p==="":!0:i.eq(d,p)}}function l(d,p,h,m){if(p==null)return!0;if(Array.isArray(p))return c(d,p,h,m);if(p instanceof Map)return s(d,p,h,m);if(p instanceof Set)return u(d,p,h,m);const v=Object.keys(p);if(d==null)return v.length===0;if(v.length===0)return!0;if(m&&m.has(p))return m.get(p)===d;m&&m.set(p,d);try{for(let b=0;b<v.length;b++){const g=v[b];if(!n.isPrimitive(d)&&!(g in d)||p[g]===void 0&&d[g]!==void 0||p[g]===null&&d[g]!==null||!h(d[g],p[g],g,d,p,m))return!1}return!0}finally{m&&m.delete(p)}}function s(d,p,h,m){if(p.size===0)return!0;if(!(d instanceof Map))return!1;for(const[v,b]of p.entries()){const g=d.get(v);if(h(g,b,v,d,p,m)===!1)return!1}return!0}function c(d,p,h,m){if(p.length===0)return!0;if(!Array.isArray(d))return!1;const v=new Set;for(let b=0;b<p.length;b++){const g=p[b];let w=!1;for(let S=0;S<d.length;S++){if(v.has(S))continue;const C=d[S];let k=!1;if(h(C,g,b,d,p,m)&&(k=!0),k){v.add(S),w=!0;break}}if(!w)return!1}return!0}function u(d,p,h,m){return p.size===0?!0:d instanceof Set?c([...d],[...p],h,m):!1}e.isMatchWith=a,e.isSetMatch=u}(rf)),rf}var Iy;function Qm(){return Iy||(Iy=1,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=d_();function r(n,i){return t.isMatchWith(n,i,()=>{})}e.isMatch=r}(tf)),tf}var HS={},Jm={},Zm={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Object.getOwnPropertySymbols(r).filter(n=>Object.prototype.propertyIsEnumerable.call(r,n))}e.getSymbols=t})(Zm);var Du={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}e.getTag=t})(Du);var Ru={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",r="[object String]",n="[object Number]",i="[object Boolean]",a="[object Arguments]",o="[object Symbol]",l="[object Date]",s="[object Map]",c="[object Set]",u="[object Array]",d="[object Function]",p="[object ArrayBuffer]",h="[object Object]",m="[object Error]",v="[object DataView]",b="[object Uint8Array]",g="[object Uint8ClampedArray]",w="[object Uint16Array]",S="[object Uint32Array]",C="[object BigUint64Array]",k="[object Int8Array]",P="[object Int16Array]",N="[object Int32Array]",A="[object BigInt64Array]",E="[object Float32Array]",_="[object Float64Array]";e.argumentsTag=a,e.arrayBufferTag=p,e.arrayTag=u,e.bigInt64ArrayTag=A,e.bigUint64ArrayTag=C,e.booleanTag=i,e.dataViewTag=v,e.dateTag=l,e.errorTag=m,e.float32ArrayTag=E,e.float64ArrayTag=_,e.functionTag=d,e.int16ArrayTag=P,e.int32ArrayTag=N,e.int8ArrayTag=k,e.mapTag=s,e.numberTag=n,e.objectTag=h,e.regexpTag=t,e.setTag=c,e.stringTag=r,e.symbolTag=o,e.uint16ArrayTag=w,e.uint32ArrayTag=S,e.uint8ArrayTag=b,e.uint8ClampedArrayTag=g})(Ru);var US={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(US);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Zm,r=Du,n=Ru,i=Xm,a=US;function o(u,d){return l(u,void 0,u,new Map,d)}function l(u,d,p,h=new Map,m=void 0){const v=m==null?void 0:m(u,d,p,h);if(v!==void 0)return v;if(i.isPrimitive(u))return u;if(h.has(u))return h.get(u);if(Array.isArray(u)){const b=new Array(u.length);h.set(u,b);for(let g=0;g<u.length;g++)b[g]=l(u[g],g,p,h,m);return Object.hasOwn(u,"index")&&(b.index=u.index),Object.hasOwn(u,"input")&&(b.input=u.input),b}if(u instanceof Date)return new Date(u.getTime());if(u instanceof RegExp){const b=new RegExp(u.source,u.flags);return b.lastIndex=u.lastIndex,b}if(u instanceof Map){const b=new Map;h.set(u,b);for(const[g,w]of u)b.set(g,l(w,g,p,h,m));return b}if(u instanceof Set){const b=new Set;h.set(u,b);for(const g of u)b.add(l(g,void 0,p,h,m));return b}if(typeof Buffer<"u"&&Buffer.isBuffer(u))return u.subarray();if(a.isTypedArray(u)){const b=new(Object.getPrototypeOf(u)).constructor(u.length);h.set(u,b);for(let g=0;g<u.length;g++)b[g]=l(u[g],g,p,h,m);return b}if(u instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&u instanceof SharedArrayBuffer)return u.slice(0);if(u instanceof DataView){const b=new DataView(u.buffer.slice(0),u.byteOffset,u.byteLength);return h.set(u,b),s(b,u,p,h,m),b}if(typeof File<"u"&&u instanceof File){const b=new File([u],u.name,{type:u.type});return h.set(u,b),s(b,u,p,h,m),b}if(u instanceof Blob){const b=new Blob([u],{type:u.type});return h.set(u,b),s(b,u,p,h,m),b}if(u instanceof Error){const b=new u.constructor;return h.set(u,b),b.message=u.message,b.name=u.name,b.stack=u.stack,b.cause=u.cause,s(b,u,p,h,m),b}if(typeof u=="object"&&c(u)){const b=Object.create(Object.getPrototypeOf(u));return h.set(u,b),s(b,u,p,h,m),b}return u}function s(u,d,p=u,h,m){const v=[...Object.keys(d),...t.getSymbols(d)];for(let b=0;b<v.length;b++){const g=v[b],w=Object.getOwnPropertyDescriptor(u,g);(w==null||w.writable)&&(u[g]=l(d[g],g,p,h,m))}}function c(u){switch(r.getTag(u)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=o,e.cloneDeepWithImpl=l,e.copyProperties=s})(Jm);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Jm;function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(HS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Qm(),r=HS;function n(i){return i=r.cloneDeep(i),a=>t.isMatch(a,i)}e.matches=n})(BS);var KS={},WS={},VS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Jm,r=Ru;function n(i,a){return t.cloneDeepWith(i,(o,l,s,c)=>{const u=a==null?void 0:a(o,l,s,c);if(u!==void 0)return u;if(typeof i=="object")switch(Object.prototype.toString.call(i)){case r.numberTag:case r.stringTag:case r.booleanTag:{const d=new i.constructor(i==null?void 0:i.valueOf());return t.copyProperties(d,i),d}case r.argumentsTag:{const d={};return t.copyProperties(d,i),d.length=i.length,d[Symbol.iterator]=i[Symbol.iterator],d}default:return}})}e.cloneDeepWith=n})(VS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=VS;function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(WS);var GS={},ev={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function r(n,i=Number.MAX_SAFE_INTEGER){switch(typeof n){case"number":return Number.isInteger(n)&&n>=0&&n<i;case"symbol":return!1;case"string":return t.test(n)}}e.isIndex=r})(ev);var YS={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Du;function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(YS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=$m,r=ev,n=YS,i=bu;function a(o,l){let s;if(Array.isArray(l)?s=l:typeof l=="string"&&t.isDeepKey(l)&&(o==null?void 0:o[l])==null?s=i.toPath(l):s=[l],s.length===0)return!1;let c=o;for(let u=0;u<s.length;u++){const d=s[u];if((c==null||!Object.hasOwn(c,d))&&!((Array.isArray(c)||n.isArguments(c))&&r.isIndex(d)&&d<c.length))return!1;c=c[d]}return!0}e.has=a})(GS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Qm(),r=Fm,n=WS,i=yu,a=GS;function o(l,s){switch(typeof l){case"object":{Object.is(l==null?void 0:l.valueOf(),-0)&&(l="-0");break}case"number":{l=r.toKey(l);break}}return s=n.cloneDeep(s),function(c){const u=i.get(c,l);return u===void 0?a.has(c,l):s===void 0?u===void 0:t.isMatch(u,s)}}e.matchesProperty=o})(KS);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ym,r=FS,n=BS,i=KS;function a(o){if(o==null)return t.identity;switch(typeof o){case"function":return o;case"object":return Array.isArray(o)&&o.length===2?i.matchesProperty(o[0],o[1]):n.matches(o);case"string":case"symbol":case"number":return r.property(o)}}e.iteratee=a})($S);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=IS,r=Ym,n=DS,i=$S;function a(o,l=r.identity){return n.isArrayLikeObject(o)?t.uniqBy(Array.from(o),i.iteratee(l)):[]}e.uniqBy=a})(jS);var f_=jS.uniqBy;const Dy=f_;function p_(e,t,r){return t===!0?Dy(e,r):typeof t=="function"?Dy(e,t):e}var Up={},h_={get exports(){return Up},set exports(e){Up=e}},qS={},Kp={},m_={get exports(){return Kp},set exports(e){Kp=e}},XS={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=y;function v_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var g_=typeof Object.is=="function"?Object.is:v_,y_=Oa.useState,b_=Oa.useEffect,x_=Oa.useLayoutEffect,w_=Oa.useDebugValue;function S_(e,t){var r=t(),n=y_({inst:{value:r,getSnapshot:t}}),i=n[0].inst,a=n[1];return x_(function(){i.value=r,i.getSnapshot=t,nf(i)&&a({inst:i})},[e,r,t]),b_(function(){return nf(i)&&a({inst:i}),e(function(){nf(i)&&a({inst:i})})},[e]),w_(r),r}function nf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!g_(e,r)}catch{return!0}}function C_(e,t){return t()}var k_=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?C_:S_;XS.useSyncExternalStore=Oa.useSyncExternalStore!==void 0?Oa.useSyncExternalStore:k_;(function(e){e.exports=XS})(m_);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=y,P_=Kp;function N_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var E_=typeof Object.is=="function"?Object.is:N_,O_=P_.useSyncExternalStore,A_=Lu.useRef,T_=Lu.useEffect,__=Lu.useMemo,z_=Lu.useDebugValue;qS.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var a=A_(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=__(function(){function s(h){if(!c){if(c=!0,u=h,h=n(h),i!==void 0&&o.hasValue){var m=o.value;if(i(m,h))return d=m}return d=h}if(m=d,E_(u,h))return m;var v=n(h);return i!==void 0&&i(m,v)?(u=h,m):(u=h,d=v)}var c=!1,u,d,p=r===void 0?null:r;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,r,n,i]);var l=O_(e,a[0],a[1]);return T_(function(){o.hasValue=!0,o.value=l},[l]),z_(l),l};(function(e){e.exports=qS})(h_);var tv=y.createContext(null),M_=e=>e,De=()=>{var e=y.useContext(tv);return e?e.store.dispatch:M_},js=()=>{},j_=()=>js,I_=(e,t)=>e===t;function W(e){var t=y.useContext(tv);return Up.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:j_,t?t.store.getState:js,t?t.store.getState:js,t?e:js,I_)}function D_(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function R_(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function L_(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var Ry=e=>Array.isArray(e)?e:[e];function $_(e){const t=Array.isArray(e[0])?e[0]:e;return L_(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function F_(e,t){const r=[],{length:n}=e;for(let i=0;i<n;i++)r.push(e[i].apply(null,t));return r}var B_=class{constructor(e){this.value=e}deref(){return this.value}},H_=typeof WeakRef<"u"?WeakRef:B_,U_=0,Ly=1;function as(){return{s:U_,v:void 0,o:null,p:null}}function QS(e,t={}){let r=as();const{resultEqualityCheck:n}=t;let i,a=0;function o(){var d;let l=r;const{length:s}=arguments;for(let p=0,h=s;p<h;p++){const m=arguments[p];if(typeof m=="function"||typeof m=="object"&&m!==null){let v=l.o;v===null&&(l.o=v=new WeakMap);const b=v.get(m);b===void 0?(l=as(),v.set(m,l)):l=b}else{let v=l.p;v===null&&(l.p=v=new Map);const b=v.get(m);b===void 0?(l=as(),v.set(m,l)):l=b}}const c=l;let u;if(l.s===Ly)u=l.v;else if(u=e.apply(null,arguments),a++,n){const p=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;p!=null&&n(p,u)&&(u=p,a!==0&&a--),i=typeof u=="object"&&u!==null||typeof u=="function"?new H_(u):u}return c.s=Ly,c.v=u,u}return o.clearCache=()=>{r=as(),o.resetResultsCount()},o.resultsCount=()=>a,o.resetResultsCount=()=>{a=0},o}function K_(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...i)=>{let a=0,o=0,l,s={},c=i.pop();typeof c=="object"&&(s=c,c=i.pop()),D_(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const u={...r,...s},{memoize:d,memoizeOptions:p=[],argsMemoize:h=QS,argsMemoizeOptions:m=[],devModeChecks:v={}}=u,b=Ry(p),g=Ry(m),w=$_(i),S=d(function(){return a++,c.apply(null,arguments)},...b),C=h(function(){o++;const P=F_(w,arguments);return l=S.apply(null,P),l},...g);return Object.assign(C,{resultFunc:c,memoizedResultFunc:S,dependencies:w,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>l,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:d,argsMemoize:h})};return Object.assign(n,{withTypes:()=>n}),n}var O=K_(QS),W_=Object.assign((e,t=O)=>{R_(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(a=>e[a]);return t(n,(...a)=>a.reduce((o,l,s)=>(o[r[s]]=l,o),{}))},{withTypes:()=>W_}),JS={},ZS={},eC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"?1:n===null?2:n===void 0?3:n!==n?4:0}const r=(n,i,a)=>{if(n!==i){const o=t(n),l=t(i);if(o===l&&o===0){if(n<i)return a==="desc"?1:-1;if(n>i)return a==="desc"?-1:1}return a==="desc"?l-o:o-l}return 0};e.compareValues=r})(eC);var tC={},rv={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"||r instanceof Symbol}e.isSymbol=t})(rv);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=rv,r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function i(a,o){return Array.isArray(a)?!1:typeof a=="number"||typeof a=="boolean"||a==null||t.isSymbol(a)?!0:typeof a=="string"&&(n.test(a)||!r.test(a))||o!=null&&Object.hasOwn(o,a)}e.isKey=i})(tC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=eC,r=tC,n=bu;function i(a,o,l,s){if(a==null)return[];l=s?void 0:l,Array.isArray(a)||(a=Object.values(a)),Array.isArray(o)||(o=o==null?[null]:[o]),o.length===0&&(o=[null]),Array.isArray(l)||(l=l==null?[]:[l]),l=l.map(h=>String(h));const c=(h,m)=>{let v=h;for(let b=0;b<m.length&&v!=null;++b)v=v[m[b]];return v},u=(h,m)=>m==null||h==null?m:typeof h=="object"&&"key"in h?Object.hasOwn(m,h.key)?m[h.key]:c(m,h.path):typeof h=="function"?h(m):Array.isArray(h)?c(m,h):typeof m=="object"?m[h]:m,d=o.map(h=>(Array.isArray(h)&&h.length===1&&(h=h[0]),h==null||typeof h=="function"||Array.isArray(h)||r.isKey(h)?h:{key:h,path:n.toPath(h)}));return a.map(h=>({original:h,criteria:d.map(m=>u(m,h))})).slice().sort((h,m)=>{for(let v=0;v<d.length;v++){const b=t.compareValues(h.criteria[v],m.criteria[v],l[v]);if(b!==0)return b}return 0}).map(h=>h.original)}e.orderBy=i})(ZS);var rC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n=1){const i=[],a=Math.floor(n),o=(l,s)=>{for(let c=0;c<l.length;c++){const u=l[c];Array.isArray(u)&&s<a?o(u,s+1):i.push(u)}};return o(r,0),i}e.flatten=t})(rC);var nv={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ev,r=ju,n=qm,i=Iu;function a(o,l,s){return n.isObject(s)&&(typeof l=="number"&&r.isArrayLike(s)&&t.isIndex(l)&&l<s.length||typeof l=="string"&&l in s)?i.eq(s[l],o):!1}e.isIterateeCall=a})(nv);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ZS,r=rC,n=nv;function i(a,...o){const l=o.length;return l>1&&n.isIterateeCall(a,o[0],o[1])?o=[]:l>2&&n.isIterateeCall(o[0],o[1],o[2])&&(o=[o[0]]),t.orderBy(a,r.flatten(o),["asc"])}e.sortBy=i})(JS);var V_=JS.sortBy;const $u=V_;var nC=e=>e.legend.settings,G_=e=>e.legend.size,Y_=e=>e.legend.payload;O([Y_,nC],(e,t)=>{var{itemSorter:r}=t,n=e.flat(1);return r?$u(n,r):n});var os=1;function q_(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=y.useState({height:0,left:0,top:0,width:0}),n=y.useCallback(i=>{if(i!=null){var a=i.getBoundingClientRect(),o={height:a.height,left:a.left,top:a.top,width:a.width};(Math.abs(o.height-t.height)>os||Math.abs(o.left-t.left)>os||Math.abs(o.top-t.top)>os||Math.abs(o.width-t.width)>os)&&r({height:o.height,left:o.left,top:o.top,width:o.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}function ot(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var X_=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),$y=X_,af=()=>Math.random().toString(36).substring(7).split("").join("."),Q_={INIT:`@@redux/INIT${af()}`,REPLACE:`@@redux/REPLACE${af()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${af()}`},gc=Q_;function iv(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function iC(e,t,r){if(typeof e!="function")throw new Error(ot(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(ot(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(ot(1));return r(iC)(e,t)}let n=e,i=t,a=new Map,o=a,l=0,s=!1;function c(){o===a&&(o=new Map,a.forEach((b,g)=>{o.set(g,b)}))}function u(){if(s)throw new Error(ot(3));return i}function d(b){if(typeof b!="function")throw new Error(ot(4));if(s)throw new Error(ot(5));let g=!0;c();const w=l++;return o.set(w,b),function(){if(g){if(s)throw new Error(ot(6));g=!1,c(),o.delete(w),a=null}}}function p(b){if(!iv(b))throw new Error(ot(7));if(typeof b.type>"u")throw new Error(ot(8));if(typeof b.type!="string")throw new Error(ot(17));if(s)throw new Error(ot(9));try{s=!0,i=n(i,b)}finally{s=!1}return(a=o).forEach(w=>{w()}),b}function h(b){if(typeof b!="function")throw new Error(ot(10));n=b,p({type:gc.REPLACE})}function m(){const b=d;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(ot(11));function w(){const C=g;C.next&&C.next(u())}return w(),{unsubscribe:b(w)}},[$y](){return this}}}return p({type:gc.INIT}),{dispatch:p,subscribe:d,getState:u,replaceReducer:h,[$y]:m}}function J_(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:gc.INIT})>"u")throw new Error(ot(12));if(typeof r(void 0,{type:gc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ot(13))})}function aC(e){const t=Object.keys(e),r={};for(let a=0;a<t.length;a++){const o=t[a];typeof e[o]=="function"&&(r[o]=e[o])}const n=Object.keys(r);let i;try{J_(r)}catch(a){i=a}return function(o={},l){if(i)throw i;let s=!1;const c={};for(let u=0;u<n.length;u++){const d=n[u],p=r[d],h=o[d],m=p(h,l);if(typeof m>"u")throw l&&l.type,new Error(ot(14));c[d]=m,s=s||m!==h}return s=s||n.length!==Object.keys(o).length,s?c:o}}function yc(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Z_(...e){return t=>(r,n)=>{const i=t(r,n);let a=()=>{throw new Error(ot(15))};const o={getState:i.getState,dispatch:(s,...c)=>a(s,...c)},l=e.map(s=>s(o));return a=yc(...l)(i.dispatch),{...i,dispatch:a}}}function oC(e){return iv(e)&&"type"in e&&typeof e.type=="string"}var lC=Symbol.for("immer-nothing"),Fy=Symbol.for("immer-draftable"),qt=Symbol.for("immer-state");function Er(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Aa=Object.getPrototypeOf;function Ri(e){return!!e&&!!e[qt]}function un(e){var t;return e?sC(e)||Array.isArray(e)||!!e[Fy]||!!((t=e.constructor)!=null&&t[Fy])||Bu(e)||Hu(e):!1}var e6=Object.prototype.constructor.toString();function sC(e){if(!e||typeof e!="object")return!1;const t=Aa(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===e6}function bc(e,t){Fu(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function Fu(e){const t=e[qt];return t?t.type_:Array.isArray(e)?1:Bu(e)?2:Hu(e)?3:0}function Wp(e,t){return Fu(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function cC(e,t,r){const n=Fu(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function t6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Bu(e){return e instanceof Map}function Hu(e){return e instanceof Set}function mi(e){return e.copy_||e.base_}function Vp(e,t){if(Bu(e))return new Map(e);if(Hu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=sC(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[qt];let i=Reflect.ownKeys(n);for(let a=0;a<i.length;a++){const o=i[a],l=n[o];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(n[o]={configurable:!0,writable:!0,enumerable:l.enumerable,value:e[o]})}return Object.create(Aa(e),n)}else{const n=Aa(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function av(e,t=!1){return Uu(e)||Ri(e)||!un(e)||(Fu(e)>1&&(e.set=e.add=e.clear=e.delete=r6),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>av(n,!0))),e}function r6(){Er(2)}function Uu(e){return Object.isFrozen(e)}var n6={};function Li(e){const t=n6[e];return t||Er(0,e),t}var ol;function uC(){return ol}function i6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function By(e,t){t&&(Li("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Gp(e){Yp(e),e.drafts_.forEach(a6),e.drafts_=null}function Yp(e){e===ol&&(ol=e.parent_)}function Hy(e){return ol=i6(ol,e)}function a6(e){const t=e[qt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Uy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[qt].modified_&&(Gp(t),Er(4)),un(e)&&(e=xc(t,e),t.parent_||wc(t,e)),t.patches_&&Li("Patches").generateReplacementPatches_(r[qt].base_,e,t.patches_,t.inversePatches_)):e=xc(t,r,[]),Gp(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==lC?e:void 0}function xc(e,t,r){if(Uu(t))return t;const n=t[qt];if(!n)return bc(t,(i,a)=>Ky(e,n,t,i,a,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return wc(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let a=i,o=!1;n.type_===3&&(a=new Set(i),i.clear(),o=!0),bc(a,(l,s)=>Ky(e,n,i,l,s,r,o)),wc(e,i,!1),r&&e.patches_&&Li("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Ky(e,t,r,n,i,a,o){if(Ri(i)){const l=a&&t&&t.type_!==3&&!Wp(t.assigned_,n)?a.concat(n):void 0,s=xc(e,i,l);if(cC(r,n,s),Ri(s))e.canAutoFreeze_=!1;else return}else o&&r.add(i);if(un(i)&&!Uu(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;xc(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&wc(e,i)}}function wc(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&av(t,r)}function o6(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:uC(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,a=ov;r&&(i=[n],a=ll);const{revoke:o,proxy:l}=Proxy.revocable(i,a);return n.draft_=l,n.revoke_=o,l}var ov={get(e,t){if(t===qt)return e;const r=mi(e);if(!Wp(r,t))return l6(e,r,t);const n=r[t];return e.finalized_||!un(n)?n:n===of(e.base_,t)?(lf(e),e.copy_[t]=Xp(n,e)):n},has(e,t){return t in mi(e)},ownKeys(e){return Reflect.ownKeys(mi(e))},set(e,t,r){const n=dC(mi(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=of(mi(e),t),a=i==null?void 0:i[qt];if(a&&a.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(t6(r,i)&&(r!==void 0||Wp(e.base_,t)))return!0;lf(e),qp(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return of(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,lf(e),qp(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=mi(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Er(11)},getPrototypeOf(e){return Aa(e.base_)},setPrototypeOf(){Er(12)}},ll={};bc(ov,(e,t)=>{ll[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ll.deleteProperty=function(e,t){return ll.set.call(this,e,t,void 0)};ll.set=function(e,t,r){return ov.set.call(this,e[0],t,r,e[0])};function of(e,t){const r=e[qt];return(r?mi(r):e)[t]}function l6(e,t,r){var i;const n=dC(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function dC(e,t){if(!(t in e))return;let r=Aa(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Aa(r)}}function qp(e){e.modified_||(e.modified_=!0,e.parent_&&qp(e.parent_))}function lf(e){e.copy_||(e.copy_=Vp(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var s6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const a=r;r=t;const o=this;return function(s=a,...c){return o.produce(s,u=>r.call(this,u,...c))}}typeof r!="function"&&Er(6),n!==void 0&&typeof n!="function"&&Er(7);let i;if(un(t)){const a=Hy(this),o=Xp(t,void 0);let l=!0;try{i=r(o),l=!1}finally{l?Gp(a):Yp(a)}return By(a,n),Uy(i,a)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===lC&&(i=void 0),this.autoFreeze_&&av(i,!0),n){const a=[],o=[];Li("Patches").generateReplacementPatches_(t,i,a,o),n(a,o)}return i}else Er(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(o,...l)=>this.produceWithPatches(o,s=>t(s,...l));let n,i;return[this.produce(t,r,(o,l)=>{n=o,i=l}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){un(e)||Er(8),Ri(e)&&(e=nn(e));const t=Hy(this),r=Xp(e,void 0);return r[qt].isManual_=!0,Yp(t),r}finishDraft(e,t){const r=e&&e[qt];(!r||!r.isManual_)&&Er(9);const{scope_:n}=r;return By(n,t),Uy(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=Li("Patches").applyPatches_;return Ri(e)?n(e,t):this.produce(e,i=>n(i,t))}};function Xp(e,t){const r=Bu(e)?Li("MapSet").proxyMap_(e,t):Hu(e)?Li("MapSet").proxySet_(e,t):o6(e,t);return(t?t.scope_:uC()).drafts_.push(r),r}function nn(e){return Ri(e)||Er(10,e),fC(e)}function fC(e){if(!un(e)||Uu(e))return e;const t=e[qt];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Vp(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Vp(e,!0);return bc(r,(n,i)=>{cC(r,n,fC(i))}),t&&(t.finalized_=!1),r}var Xt=new s6,pC=Xt.produce;Xt.produceWithPatches.bind(Xt);Xt.setAutoFreeze.bind(Xt);Xt.setUseStrictShallowCopy.bind(Xt);Xt.applyPatches.bind(Xt);Xt.createDraft.bind(Xt);Xt.finishDraft.bind(Xt);function hC(e){return({dispatch:r,getState:n})=>i=>a=>typeof a=="function"?a(r,n,e):i(a)}var c6=hC(),u6=hC,d6=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?yc:yc.apply(null,arguments)};function mr(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(Vt(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>oC(n)&&n.type===e,r}var mC=class So extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,So.prototype)}static get[Symbol.species](){return So}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new So(...t[0].concat(this)):new So(...t.concat(this))}};function Wy(e){return un(e)?pC(e,()=>{}):e}function ls(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function f6(e){return typeof e=="boolean"}var p6=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=t??{};let o=new mC;return r&&(f6(r)?o.push(c6):o.push(u6(r.extraArgument))),o},h6="RTK_autoBatch",Vy=e=>t=>{setTimeout(t,e)},m6=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,a=!1,o=!1;const l=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Vy(10):e.type==="callback"?e.queueNotification:Vy(e.timeout),c=()=>{o=!1,a&&(a=!1,l.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const d=()=>i&&u(),p=n.subscribe(d);return l.add(u),()=>{p(),l.delete(u)}},dispatch(u){var d;try{return i=!((d=u==null?void 0:u.meta)!=null&&d[h6]),a=!i,a&&(o||(o=!0,s(c))),n.dispatch(u)}finally{i=!0}}})},v6=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new mC(e);return n&&i.push(m6(typeof n=="object"?n:void 0)),i};function g6(e){const t=p6(),{reducer:r=void 0,middleware:n,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:l=void 0}=e||{};let s;if(typeof r=="function")s=r;else if(iv(r))s=aC(r);else throw new Error(Vt(1));let c;typeof n=="function"?c=n(t):c=t();let u=yc;i&&(u=d6({trace:!1,...typeof i=="object"&&i}));const d=Z_(...c),p=v6(d);let h=typeof l=="function"?l(p):p();const m=u(...h);return iC(s,o,m)}function vC(e){const t={},r=[];let n;const i={addCase(a,o){const l=typeof a=="string"?a:a.type;if(!l)throw new Error(Vt(28));if(l in t)throw new Error(Vt(29));return t[l]=o,i},addMatcher(a,o){return r.push({matcher:a,reducer:o}),i},addDefaultCase(a){return n=a,i}};return e(i),[t,r,n]}function y6(e){return typeof e=="function"}function b6(e,t){let[r,n,i]=vC(t),a;if(y6(e))a=()=>Wy(e());else{const l=Wy(e);a=()=>l}function o(l=a(),s){let c=[r[s.type],...n.filter(({matcher:u})=>u(s)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,d)=>{if(d)if(Ri(u)){const h=d(u,s);return h===void 0?u:h}else{if(un(u))return pC(u,p=>d(p,s));{const p=d(u,s);if(p===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return u},l)}return o.getInitialState=a,o}var x6="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",w6=(e=21)=>{let t="",r=e;for(;r--;)t+=x6[Math.random()*64|0];return t},S6=Symbol.for("rtk-slice-createasyncthunk");function C6(e,t){return`${e}/${t}`}function k6({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[S6];return function(i){const{name:a,reducerPath:o=a}=i;if(!a)throw new Error(Vt(11));typeof process<"u";const l=(typeof i.reducers=="function"?i.reducers(N6()):i.reducers)||{},s=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(C,k){const P=typeof C=="string"?C:C.type;if(!P)throw new Error(Vt(12));if(P in c.sliceCaseReducersByType)throw new Error(Vt(13));return c.sliceCaseReducersByType[P]=k,u},addMatcher(C,k){return c.sliceMatchers.push({matcher:C,reducer:k}),u},exposeAction(C,k){return c.actionCreators[C]=k,u},exposeCaseReducer(C,k){return c.sliceCaseReducersByName[C]=k,u}};s.forEach(C=>{const k=l[C],P={reducerName:C,type:C6(a,C),createNotation:typeof i.reducers=="function"};O6(k)?T6(P,k,u,t):E6(P,k,u)});function d(){const[C={},k=[],P=void 0]=typeof i.extraReducers=="function"?vC(i.extraReducers):[i.extraReducers],N={...C,...c.sliceCaseReducersByType};return b6(i.initialState,A=>{for(let E in N)A.addCase(E,N[E]);for(let E of c.sliceMatchers)A.addMatcher(E.matcher,E.reducer);for(let E of k)A.addMatcher(E.matcher,E.reducer);P&&A.addDefaultCase(P)})}const p=C=>C,h=new Map,m=new WeakMap;let v;function b(C,k){return v||(v=d()),v(C,k)}function g(){return v||(v=d()),v.getInitialState()}function w(C,k=!1){function P(A){let E=A[C];return typeof E>"u"&&k&&(E=ls(m,P,g)),E}function N(A=p){const E=ls(h,k,()=>new WeakMap);return ls(E,A,()=>{const _={};for(const[z,M]of Object.entries(i.selectors??{}))_[z]=P6(M,A,()=>ls(m,A,g),k);return _})}return{reducerPath:C,getSelectors:N,get selectors(){return N(P)},selectSlice:P}}const S={name:a,reducer:b,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...w(o),injectInto(C,{reducerPath:k,...P}={}){const N=k??o;return C.inject({reducerPath:N,reducer:b},P),{...S,...w(N,!0)}}};return S}}function P6(e,t,r,n){function i(a,...o){let l=t(a);return typeof l>"u"&&n&&(l=r()),e(l,...o)}return i.unwrapped=e,i}var er=k6();function N6(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function E6({type:e,reducerName:t,createNotation:r},n,i){let a,o;if("reducer"in n){if(r&&!A6(n))throw new Error(Vt(17));a=n.reducer,o=n.prepare}else a=n;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?mr(e,o):mr(e))}function O6(e){return e._reducerDefinitionType==="asyncThunk"}function A6(e){return e._reducerDefinitionType==="reducerWithPrepare"}function T6({type:e,reducerName:t},r,n,i){if(!i)throw new Error(Vt(18));const{payloadCreator:a,fulfilled:o,pending:l,rejected:s,settled:c,options:u}=r,d=i(e,a,u);n.exposeAction(t,d),o&&n.addCase(d.fulfilled,o),l&&n.addCase(d.pending,l),s&&n.addCase(d.rejected,s),c&&n.addMatcher(d.settled,c),n.exposeCaseReducer(t,{fulfilled:o||ss,pending:l||ss,rejected:s||ss,settled:c||ss})}function ss(){}var _6="task",gC="listener",yC="completed",lv="cancelled",z6=`task-${lv}`,M6=`task-${yC}`,Qp=`${gC}-${lv}`,j6=`${gC}-${yC}`,Ku=class{constructor(e){hd(this,"name","TaskAbortError");hd(this,"message");this.code=e,this.message=`${_6} ${lv} (reason: ${e})`}},sv=(e,t)=>{if(typeof e!="function")throw new TypeError(Vt(32))},Sc=()=>{},bC=(e,t=Sc)=>(e.catch(t),e),xC=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),Ei=(e,t)=>{const r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},Oi=e=>{if(e.aborted){const{reason:t}=e;throw new Ku(t)}};function wC(e,t){let r=Sc;return new Promise((n,i)=>{const a=()=>i(new Ku(e.reason));if(e.aborted){a();return}r=xC(e,a),t.finally(()=>r()).then(n,i)}).finally(()=>{r=Sc})}var I6=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(r){return{status:r instanceof Ku?"cancelled":"rejected",error:r}}finally{t==null||t()}},Cc=e=>t=>bC(wC(e,t).then(r=>(Oi(e),r))),SC=e=>{const t=Cc(e);return r=>t(new Promise(n=>setTimeout(n,r)))},{assign:ga}=Object,Gy={},Wu="listenerMiddleware",D6=(e,t)=>{const r=n=>xC(e,()=>Ei(n,e.reason));return(n,i)=>{sv(n);const a=new AbortController;r(a);const o=I6(async()=>{Oi(e),Oi(a.signal);const l=await n({pause:Cc(a.signal),delay:SC(a.signal),signal:a.signal});return Oi(a.signal),l},()=>Ei(a,M6));return i!=null&&i.autoJoin&&t.push(o.catch(Sc)),{result:Cc(e)(o),cancel(){Ei(a,z6)}}}},R6=(e,t)=>{const r=async(n,i)=>{Oi(t);let a=()=>{};const l=[new Promise((s,c)=>{let u=e({predicate:n,effect:(d,p)=>{p.unsubscribe(),s([d,p.getState(),p.getOriginalState()])}});a=()=>{u(),c()}})];i!=null&&l.push(new Promise(s=>setTimeout(s,i,null)));try{const s=await wC(t,Promise.race(l));return Oi(t),s}finally{a()}};return(n,i)=>bC(r(n,i))},CC=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:a}=e;if(t)i=mr(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(!i)throw new Error(Vt(21));return sv(a),{predicate:i,type:t,effect:a}},kC=ga(e=>{const{type:t,predicate:r,effect:n}=CC(e);return{id:w6(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(Vt(22))}}},{withTypes:()=>kC}),Yy=(e,t)=>{const{type:r,effect:n,predicate:i}=CC(t);return Array.from(e.values()).find(a=>(typeof r=="string"?a.type===r:a.predicate===i)&&a.effect===n)},Jp=e=>{e.pending.forEach(t=>{Ei(t,Qp)})},L6=e=>()=>{e.forEach(Jp),e.clear()},qy=(e,t,r)=>{try{e(t,r)}catch(n){setTimeout(()=>{throw n},0)}},PC=ga(mr(`${Wu}/add`),{withTypes:()=>PC}),$6=mr(`${Wu}/removeAll`),NC=ga(mr(`${Wu}/remove`),{withTypes:()=>NC}),F6=(...e)=>{console.error(`${Wu}/error`,...e)},Nl=(e={})=>{const t=new Map,{extra:r,onError:n=F6}=e;sv(n);const i=u=>(u.unsubscribe=()=>t.delete(u.id),t.set(u.id,u),d=>{u.unsubscribe(),d!=null&&d.cancelActive&&Jp(u)}),a=u=>{const d=Yy(t,u)??kC(u);return i(d)};ga(a,{withTypes:()=>a});const o=u=>{const d=Yy(t,u);return d&&(d.unsubscribe(),u.cancelActive&&Jp(d)),!!d};ga(o,{withTypes:()=>o});const l=async(u,d,p,h)=>{const m=new AbortController,v=R6(a,m.signal),b=[];try{u.pending.add(m),await Promise.resolve(u.effect(d,ga({},p,{getOriginalState:h,condition:(g,w)=>v(g,w).then(Boolean),take:v,delay:SC(m.signal),pause:Cc(m.signal),extra:r,signal:m.signal,fork:D6(m.signal,b),unsubscribe:u.unsubscribe,subscribe:()=>{t.set(u.id,u)},cancelActiveListeners:()=>{u.pending.forEach((g,w,S)=>{g!==m&&(Ei(g,Qp),S.delete(g))})},cancel:()=>{Ei(m,Qp),u.pending.delete(m)},throwIfCancelled:()=>{Oi(m.signal)}})))}catch(g){g instanceof Ku||qy(n,g,{raisedBy:"effect"})}finally{await Promise.all(b),Ei(m,j6),u.pending.delete(m)}},s=L6(t);return{middleware:u=>d=>p=>{if(!oC(p))return d(p);if(PC.match(p))return a(p.payload);if($6.match(p)){s();return}if(NC.match(p))return o(p.payload);let h=u.getState();const m=()=>{if(h===Gy)throw new Error(Vt(23));return h};let v;try{if(v=d(p),t.size>0){const b=u.getState(),g=Array.from(t.values());for(const w of g){let S=!1;try{S=w.predicate(p,b,h)}catch(C){S=!1,qy(n,C,{raisedBy:"predicate"})}S&&l(w,p,u,m)}}}finally{h=Gy}return v},startListening:a,stopListening:o,clearListeners:s}};function Vt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var B6={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},EC=er({name:"chartLayout",initialState:B6,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){e.margin.top=t.payload.top,e.margin.right=t.payload.right,e.margin.bottom=t.payload.bottom,e.margin.left=t.payload.left},setScale(e,t){e.scale=t.payload}}}),{setMargin:H6,setLayout:U6,setChartSize:K6,setScale:W6}=EC.actions,V6=EC.reducer;function Xy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Qy(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Xy(Object(r),!0).forEach(function(n){G6(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xy(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function G6(e,t,r){return(t=Y6(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y6(e){var t=q6(e,"string");return typeof t=="symbol"?t:t+""}function q6(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var kc=Math.PI/180,X6=e=>e*180/Math.PI,Be=(e,t,r,n)=>({x:e+Math.cos(-kc*n)*r,y:t+Math.sin(-kc*n)*r}),OC=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(t-(n.left||0)-(n.right||0)),Math.abs(r-(n.top||0)-(n.bottom||0)))/2},Q6=(e,t)=>{var{x:r,y:n}=e,{x:i,y:a}=t;return Math.sqrt((r-i)**2+(n-a)**2)},J6=(e,t)=>{var{x:r,y:n}=e,{cx:i,cy:a}=t,o=Q6({x:r,y:n},{x:i,y:a});if(o<=0)return{radius:o,angle:0};var l=(r-i)/o,s=Math.acos(l);return n>a&&(s=2*Math.PI-s),{radius:o,angle:X6(s),angleInRadian:s}},Z6=e=>{var{startAngle:t,endAngle:r}=e,n=Math.floor(t/360),i=Math.floor(r/360),a=Math.min(n,i);return{startAngle:t-a*360,endAngle:r-a*360}},ez=(e,t)=>{var{startAngle:r,endAngle:n}=t,i=Math.floor(r/360),a=Math.floor(n/360),o=Math.min(i,a);return e+o*360},tz=(e,t)=>{var{x:r,y:n}=e,{radius:i,angle:a}=J6({x:r,y:n},t),{innerRadius:o,outerRadius:l}=t;if(i<o||i>l||i===0)return null;var{startAngle:s,endAngle:c}=Z6(t),u=a,d;if(s<=c){for(;u>c;)u-=360;for(;u<s;)u+=360;d=u>=s&&u<=c}else{for(;u>s;)u-=360;for(;u<c;)u+=360;d=u>=c&&u<=s}return d?Qy(Qy({},t),{},{radius:i,angle:ez(u,t)}):null};function AC(e,t,r){return Array.isArray(e)&&e&&t+r!==0?e.slice(t,r+1):e}function Jy(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function sr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jy(Object(r),!0).forEach(function(n){rz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jy(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function rz(e,t,r){return(t=nz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nz(e){var t=iz(e,"string");return typeof t=="symbol"?t:t+""}function iz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ve(e,t,r){return ke(e)||ke(t)?r:Hr(t)?Qn(e,t,r):typeof t=="function"?t(e):r}var az=(e,t,r,n,i)=>{var a,o=-1,l=(a=t==null?void 0:t.length)!==null&&a!==void 0?a:0;if(l<=1||e==null)return 0;if(n==="angleAxis"&&i!=null&&Math.abs(Math.abs(i[1]-i[0])-360)<=1e-6)for(var s=0;s<l;s++){var c=s>0?r[s-1].coordinate:r[l-1].coordinate,u=r[s].coordinate,d=s>=l-1?r[0].coordinate:r[s+1].coordinate,p=void 0;if(tt(u-c)!==tt(d-u)){var h=[];if(tt(d-u)===tt(i[1]-i[0])){p=d;var m=u+i[1]-i[0];h[0]=Math.min(m,(m+c)/2),h[1]=Math.max(m,(m+c)/2)}else{p=c;var v=d+i[1]-i[0];h[0]=Math.min(u,(v+u)/2),h[1]=Math.max(u,(v+u)/2)}var b=[Math.min(u,(p+u)/2),Math.max(u,(p+u)/2)];if(e>b[0]&&e<=b[1]||e>=h[0]&&e<=h[1]){({index:o}=r[s]);break}}else{var g=Math.min(c,d),w=Math.max(c,d);if(e>(g+u)/2&&e<=(w+u)/2){({index:o}=r[s]);break}}}else if(t){for(var S=0;S<l;S++)if(S===0&&e<=(t[S].coordinate+t[S+1].coordinate)/2||S>0&&S<l-1&&e>(t[S].coordinate+t[S-1].coordinate)/2&&e<=(t[S].coordinate+t[S+1].coordinate)/2||S===l-1&&e>(t[S].coordinate+t[S-1].coordinate)/2){({index:o}=t[S]);break}}return o},oz=(e,t,r)=>{if(t&&r){var{width:n,height:i}=r,{align:a,verticalAlign:o,layout:l}=t;if((l==="vertical"||l==="horizontal"&&o==="middle")&&a!=="center"&&H(e[a]))return sr(sr({},e),{},{[a]:e[a]+(n||0)});if((l==="horizontal"||l==="vertical"&&a==="center")&&o!=="middle"&&H(e[o]))return sr(sr({},e),{},{[o]:e[o]+(i||0)})}return e},ai=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",TC=(e,t,r,n)=>{if(n)return e.map(l=>l.coordinate);var i,a,o=e.map(l=>(l.coordinate===t&&(i=!0),l.coordinate===r&&(a=!0),l.coordinate));return i||o.push(t),a||o.push(r),o},_C=(e,t,r)=>{if(!e)return null;var{duplicateDomain:n,type:i,range:a,scale:o,realScaleType:l,isCategorical:s,categoricalDomain:c,tickCount:u,ticks:d,niceTicks:p,axisType:h}=e;if(!o)return null;var m=l==="scaleBand"&&o.bandwidth?o.bandwidth()/2:2,v=(t||r)&&i==="category"&&o.bandwidth?o.bandwidth()/m:0;if(v=h==="angleAxis"&&a&&a.length>=2?tt(a[0]-a[1])*2*v:v,t&&(d||p)){var b=(d||p||[]).map((g,w)=>{var S=n?n.indexOf(g):g;return{coordinate:o(S)+v,value:g,offset:v,index:w}});return b.filter(g=>!Yt(g.coordinate))}return s&&c?c.map((g,w)=>({coordinate:o(g)+v,value:g,index:w,offset:v})):o.ticks&&!r&&u!=null?o.ticks(u).map((g,w)=>({coordinate:o(g)+v,value:g,offset:v,index:w})):o.domain().map((g,w)=>({coordinate:o(g)+v,value:n?n[g]:g,index:w,offset:v}))},Zy=1e-4,lz=e=>{var t=e.domain();if(!(!t||t.length<=2)){var r=t.length,n=e.range(),i=Math.min(n[0],n[1])-Zy,a=Math.max(n[0],n[1])+Zy,o=e(t[0]),l=e(t[r-1]);(o<i||o>a||l<i||l>a)&&e.domain([t[0],t[r-1]])}},sz=(e,t)=>{if(!t||t.length!==2||!H(t[0])||!H(t[1]))return e;var r=Math.min(t[0],t[1]),n=Math.max(t[0],t[1]),i=[e[0],e[1]];return(!H(e[0])||e[0]<r)&&(i[0]=r),(!H(e[1])||e[1]>n)&&(i[1]=n),i[0]>n&&(i[0]=n),i[1]<r&&(i[1]=r),i},cz=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var i=0,a=0,o=0;o<t;++o){var l=Yt(e[o][r][1])?e[o][r][0]:e[o][r][1];l>=0?(e[o][r][0]=i,e[o][r][1]=i+l,i=e[o][r][1]):(e[o][r][0]=a,e[o][r][1]=a+l,a=e[o][r][1])}},uz=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var i=0,a=0;a<t;++a){var o=Yt(e[a][r][1])?e[a][r][0]:e[a][r][1];o>=0?(e[a][r][0]=i,e[a][r][1]=i+o,i=e[a][r][1]):(e[a][r][0]=0,e[a][r][1]=0)}},dz={sign:cz,expand:J8,none:Ea,silhouette:Z8,wiggle:e_,positive:uz},fz=(e,t,r)=>{var n=dz[r],i=Q8().keys(t).value((a,o)=>+ve(a,o,0)).order(Bp).offset(n);return i(e)};function pz(e){return e==null?void 0:String(e)}function e1(e){var{axis:t,ticks:r,bandSize:n,entry:i,index:a,dataKey:o}=e;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!ke(i[t.dataKey])){var l=dS(r,"value",i[t.dataKey]);if(l)return l.coordinate+n/2}return r[a]?r[a].coordinate+n/2:null}var s=ve(i,ke(o)?t.dataKey:o);return ke(s)?null:t.scale(s)}var t1=e=>{var{axis:t,ticks:r,offset:n,bandSize:i,entry:a,index:o}=e;if(t.type==="category")return r[o]?r[o].coordinate+n:null;var l=ve(a,t.dataKey,t.scale.domain()[o]);return ke(l)?null:t.scale(l)-i/2+n},hz=e=>{var{numericAxis:t}=e,r=t.scale.domain();if(t.type==="number"){var n=Math.min(r[0],r[1]),i=Math.max(r[0],r[1]);return n<=0&&i>=0?0:i<0?i:n}return r[0]},mz=e=>{var t=e.flat(2).filter(H);return[Math.min(...t),Math.max(...t)]},vz=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],gz=(e,t,r)=>{if(e!=null)return vz(Object.keys(e).reduce((n,i)=>{var a=e[i],{stackedData:o}=a,l=o.reduce((s,c)=>{var u=AC(c,t,r),d=mz(u);return[Math.min(s[0],d[0]),Math.max(s[1],d[1])]},[1/0,-1/0]);return[Math.min(l[0],n[0]),Math.max(l[1],n[1])]},[1/0,-1/0]))},r1=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,n1=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,sl=(e,t,r)=>{if(e&&e.scale&&e.scale.bandwidth){var n=e.scale.bandwidth();if(!r||n>0)return n}if(e&&t&&t.length>=2){for(var i=$u(t,u=>u.coordinate),a=1/0,o=1,l=i.length;o<l;o++){var s=i[o],c=i[o-1];a=Math.min((s.coordinate||0)-(c.coordinate||0),a)}return a===1/0?0:a}return r?void 0:0};function i1(e){var{tooltipEntrySettings:t,dataKey:r,payload:n,value:i,name:a}=e;return sr(sr({},t),{},{dataKey:r,payload:n,value:i,name:a})}function Ua(e,t){if(e)return String(e);if(typeof t=="string")return t}function yz(e,t,r,n,i){if(r==="horizontal"||r==="vertical"){var a=e>=i.left&&e<=i.left+i.width&&t>=i.top&&t<=i.top+i.height;return a?{x:e,y:t}:null}return n?tz({x:e,y:t},n):null}var bz=(e,t,r,n)=>{var i=t.find(c=>c&&c.index===r);if(i){if(e==="horizontal")return{x:i.coordinate,y:n.y};if(e==="vertical")return{x:n.x,y:i.coordinate};if(e==="centric"){var a=i.coordinate,{radius:o}=n;return sr(sr(sr({},n),Be(n.cx,n.cy,o,a)),{},{angle:a,radius:o})}var l=i.coordinate,{angle:s}=n;return sr(sr(sr({},n),Be(n.cx,n.cy,l,s)),{},{angle:s,radius:l})}return{x:0,y:0}},xz=(e,t)=>t==="horizontal"?e.x:t==="vertical"?e.y:t==="centric"?e.angle:e.radius,yn=e=>e.layout.width,bn=e=>e.layout.height,wz=e=>e.layout.scale,zC=e=>e.layout.margin,cv=O(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),uv=O(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),MC="data-recharts-item-index",jC="data-recharts-item-data-key",Vu=60;function a1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Pn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?a1(Object(r),!0).forEach(function(n){Sz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Sz(e,t,r){return(t=Cz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Cz(e){var t=kz(e,"string");return typeof t=="symbol"?t:t+""}function kz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pz=e=>e.brush.height,Ye=O([yn,bn,zC,Pz,cv,uv,nC,G_],(e,t,r,n,i,a,o,l)=>{var s=a.reduce((m,v)=>{var{orientation:b}=v;if(!v.mirror&&!v.hide){var g=typeof v.width=="number"?v.width:Vu;return Pn(Pn({},m),{},{[b]:m[b]+g})}return m},{left:r.left||0,right:r.right||0}),c=i.reduce((m,v)=>{var{orientation:b}=v;return!v.mirror&&!v.hide?Pn(Pn({},m),{},{[b]:Qn(m,"".concat(b))+v.height}):m},{top:r.top||0,bottom:r.bottom||0}),u=Pn(Pn({},c),s),d=u.bottom;u.bottom+=n,u=oz(u,o,l);var p=e-u.left-u.right,h=t-u.top-u.bottom;return Pn(Pn({brushBottom:d},u),{},{width:Math.max(p,0),height:Math.max(h,0)})}),Nz=O(Ye,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),IC=O(yn,bn,(e,t)=>({x:0,y:0,width:e,height:t})),Ez=y.createContext(null),Dt=()=>y.useContext(Ez)!=null,Gu=e=>e.brush,Yu=O([Gu,Ye,zC],(e,t,r)=>({height:e.height,x:H(e.x)?e.x:t.left,y:H(e.y)?e.y:t.top+t.height+t.brushBottom-((r==null?void 0:r.bottom)||0),width:H(e.width)?e.width:t.width})),dv=()=>{var e,t=Dt(),r=W(Nz),n=W(Yu),i=(e=W(Gu))===null||e===void 0?void 0:e.padding;return!t||!n||!i?r:{width:n.width-i.left-i.right,height:n.height-i.top-i.bottom,x:i.left,y:i.top}},Oz={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},DC=()=>{var e;return(e=W(Ye))!==null&&e!==void 0?e:Oz},RC=()=>W(yn),LC=()=>W(bn),ie=e=>e.layout.layoutType,qu=()=>W(ie),Az={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},$C=er({name:"legend",initialState:Az,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload(e,t){e.payload.push(t.payload)},removeLegendPayload(e,t){var r=nn(e).payload.indexOf(t.payload);r>-1&&e.payload.splice(r,1)}}}),{setLegendSize:MU,setLegendSettings:jU,addLegendPayload:FC,removeLegendPayload:BC}=$C.actions,Tz=$C.reducer;function Zp(){return Zp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zp.apply(null,arguments)}function o1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function sf(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?o1(Object(r),!0).forEach(function(n){_z(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function _z(e,t,r){return(t=zz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function zz(e){var t=Mz(e,"string");return typeof t=="symbol"?t:t+""}function Mz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jz(e){return Array.isArray(e)&&Hr(e[0])&&Hr(e[1])?e.join(" ~ "):e}var Iz=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:i={},payload:a,formatter:o,itemSorter:l,wrapperClassName:s,labelClassName:c,label:u,labelFormatter:d,accessibilityLayer:p=!1}=e,h=()=>{if(a&&a.length){var k={padding:0,margin:0},P=(l?$u(a,l):a).map((N,A)=>{if(N.type==="none")return null;var E=N.formatter||o||jz,{value:_,name:z}=N,M=_,G=z;if(E){var Z=E(_,z,N,A,a);if(Array.isArray(Z))[M,G]=Z;else if(Z!=null)M=Z;else return null}var D=sf({display:"block",paddingTop:4,paddingBottom:4,color:N.color||"#000"},n);return y.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(A),style:D},Hr(G)?y.createElement("span",{className:"recharts-tooltip-item-name"},G):null,Hr(G)?y.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,y.createElement("span",{className:"recharts-tooltip-item-value"},M),y.createElement("span",{className:"recharts-tooltip-item-unit"},N.unit||""))});return y.createElement("ul",{className:"recharts-tooltip-item-list",style:k},P)}return null},m=sf({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),v=sf({margin:0},i),b=!ke(u),g=b?u:"",w=se("recharts-default-tooltip",s),S=se("recharts-tooltip-label",c);b&&d&&a!==void 0&&a!==null&&(g=d(u,a));var C=p?{role:"status","aria-live":"assertive"}:{};return y.createElement("div",Zp({className:w,style:m},C),y.createElement("p",{className:S,style:v},y.isValidElement(g)?g:"".concat(g)),h())},co="recharts-tooltip-wrapper",Dz={visibility:"hidden"};function Rz(e){var{coordinate:t,translateX:r,translateY:n}=e;return se(co,{["".concat(co,"-right")]:H(r)&&t&&H(t.x)&&r>=t.x,["".concat(co,"-left")]:H(r)&&t&&H(t.x)&&r<t.x,["".concat(co,"-bottom")]:H(n)&&t&&H(t.y)&&n>=t.y,["".concat(co,"-top")]:H(n)&&t&&H(t.y)&&n<t.y})}function l1(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:i,position:a,reverseDirection:o,tooltipDimension:l,viewBox:s,viewBoxDimension:c}=e;if(a&&H(a[n]))return a[n];var u=r[n]-l-(i>0?i:0),d=r[n]+i;if(t[n])return o[n]?u:d;var p=s[n];if(p==null)return 0;if(o[n]){var h=u,m=p;return h<m?Math.max(d,p):Math.max(u,p)}if(c==null)return 0;var v=d+l,b=p+c;return v>b?Math.max(u,p):Math.max(d,p)}function Lz(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function $z(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:i,reverseDirection:a,tooltipBox:o,useTranslate3d:l,viewBox:s}=e,c,u,d;return o.height>0&&o.width>0&&r?(u=l1({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:i,reverseDirection:a,tooltipDimension:o.width,viewBox:s,viewBoxDimension:s.width}),d=l1({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:i,reverseDirection:a,tooltipDimension:o.height,viewBox:s,viewBoxDimension:s.height}),c=Lz({translateX:u,translateY:d,useTranslate3d:l})):c=Dz,{cssProperties:c,cssClasses:Rz({translateX:u,translateY:d,coordinate:r})}}function s1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function cs(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?s1(Object(r),!0).forEach(function(n){eh(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function eh(e,t,r){return(t=Fz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Fz(e){var t=Bz(e,"string");return typeof t=="symbol"?t:t+""}function Bz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Hz extends y.PureComponent{constructor(){super(...arguments),eh(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),eh(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,i,a;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(i=(a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==null&&i!==void 0?i:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:i,children:a,coordinate:o,hasPayload:l,isAnimationActive:s,offset:c,position:u,reverseDirection:d,useTranslate3d:p,viewBox:h,wrapperStyle:m,lastBoundingBox:v,innerRef:b,hasPortalFromProps:g}=this.props,{cssClasses:w,cssProperties:S}=$z({allowEscapeViewBox:r,coordinate:o,offsetTopLeft:c,position:u,reverseDirection:d,tooltipBox:{height:v.height,width:v.width},useTranslate3d:p,viewBox:h}),C=g?{}:cs(cs({transition:s&&t?"transform ".concat(n,"ms ").concat(i):void 0},S),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&l?"visible":"hidden",position:"absolute",top:0,left:0}),k=cs(cs({},C),{},{visibility:!this.state.dismissed&&t&&l?"visible":"hidden"},m);return y.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:w,style:k,ref:b},a)}}var Uz=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),Ki={isSsr:Uz()},HC=()=>W(e=>e.rootProps.accessibilityLayer);function Qt(e){return Number.isFinite(e)}function Ta(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function th(){return th=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},th.apply(null,arguments)}function c1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function u1(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?c1(Object(r),!0).forEach(function(n){Kz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Kz(e,t,r){return(t=Wz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Wz(e){var t=Vz(e,"string");return typeof t=="symbol"?t:t+""}function Vz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var d1={curveBasisClosed:F8,curveBasisOpen:B8,curveBasis:$8,curveBumpX:P8,curveBumpY:N8,curveLinearClosed:H8,curveLinear:zu,curveMonotoneX:U8,curveMonotoneY:K8,curveNatural:W8,curveStep:V8,curveStepAfter:Y8,curveStepBefore:G8},us=e=>Qt(e.x)&&Qt(e.y),uo=e=>e.x,fo=e=>e.y,Gz=(e,t)=>{if(typeof e=="function")return e;var r="curve".concat(kl(e));return(r==="curveMonotone"||r==="curveBump")&&t?d1["".concat(r).concat(t==="vertical"?"Y":"X")]:d1[r]||zu},Yz=e=>{var{type:t="linear",points:r=[],baseLine:n,layout:i,connectNulls:a=!1}=e,o=Gz(t,i),l=a?r.filter(us):r,s;if(Array.isArray(n)){var c=a?n.filter(d=>us(d)):n,u=l.map((d,p)=>u1(u1({},d),{},{base:c[p]}));return i==="vertical"?s=is().y(fo).x1(uo).x0(d=>d.base.x):s=is().x(uo).y1(fo).y0(d=>d.base.y),s.defined(us).curve(o),s(u)}return i==="vertical"&&H(n)?s=is().y(fo).x1(uo).x0(n):H(n)?s=is().x(uo).y1(fo).y0(n):s=wS().x(uo).y(fo),s.defined(us).curve(o),s(l)},fv=e=>{var{className:t,points:r,path:n,pathRef:i}=e;if((!r||!r.length)&&!n)return null;var a=r&&r.length?Yz(e):n;return y.createElement("path",th({},gn(e),Km(e),{className:se("recharts-curve",t),d:a===null?void 0:a,ref:i}))},qz=["x","y","top","left","width","height","className"];function rh(){return rh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rh.apply(null,arguments)}function f1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Xz(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?f1(Object(r),!0).forEach(function(n){Qz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Qz(e,t,r){return(t=Jz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jz(e){var t=Zz(e,"string");return typeof t=="symbol"?t:t+""}function Zz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function eM(e,t){if(e==null)return{};var r,n,i=tM(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function tM(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var rM=(e,t,r,n,i,a)=>"M".concat(e,",").concat(i,"v").concat(n,"M").concat(a,",").concat(t,"h").concat(r),nM=e=>{var{x:t=0,y:r=0,top:n=0,left:i=0,width:a=0,height:o=0,className:l}=e,s=eM(e,qz),c=Xz({x:t,y:r,top:n,left:i,width:a,height:o},s);return!H(t)||!H(r)||!H(a)||!H(o)||!H(n)||!H(i)?null:y.createElement("path",rh({},Ne(c,!0),{className:se("recharts-cross",l),d:rM(t,r,a,o,n,i)}))};function iM(e,t,r,n){var i=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-i:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-i,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function p1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function aM(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?p1(Object(r),!0).forEach(function(n){oM(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oM(e,t,r){return(t=lM(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lM(e){var t=sM(e,"string");return typeof t=="symbol"?t:t+""}function sM(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tr(e,t){var r=aM({},e),n=t,i=Object.keys(t),a=i.reduce((o,l)=>(o[l]===void 0&&n[l]!==void 0&&(o[l]=n[l]),o),r);return a}var UC={},KC={},WC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){if(!r||typeof r!="object")return!1;const n=Object.getPrototypeOf(r);return n===null||n===Object.prototype||Object.getPrototypeOf(n)===null?Object.prototype.toString.call(r)==="[object Object]":!1}e.isPlainObject=t})(WC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=WC,r=Zm,n=Du,i=Ru,a=Iu;function o(c,u,d){return l(c,u,void 0,void 0,void 0,void 0,d)}function l(c,u,d,p,h,m,v){const b=v(c,u,d,p,h,m);if(b!==void 0)return b;if(typeof c==typeof u)switch(typeof c){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return c===u;case"number":return c===u||Object.is(c,u);case"function":return c===u;case"object":return s(c,u,m,v)}return s(c,u,m,v)}function s(c,u,d,p){if(Object.is(c,u))return!0;let h=n.getTag(c),m=n.getTag(u);if(h===i.argumentsTag&&(h=i.objectTag),m===i.argumentsTag&&(m=i.objectTag),h!==m)return!1;switch(h){case i.stringTag:return c.toString()===u.toString();case i.numberTag:{const g=c.valueOf(),w=u.valueOf();return a.eq(g,w)}case i.booleanTag:case i.dateTag:case i.symbolTag:return Object.is(c.valueOf(),u.valueOf());case i.regexpTag:return c.source===u.source&&c.flags===u.flags;case i.functionTag:return c===u}d=d??new Map;const v=d.get(c),b=d.get(u);if(v!=null&&b!=null)return v===u;d.set(c,u),d.set(u,c);try{switch(h){case i.mapTag:{if(c.size!==u.size)return!1;for(const[g,w]of c.entries())if(!u.has(g)||!l(w,u.get(g),g,c,u,d,p))return!1;return!0}case i.setTag:{if(c.size!==u.size)return!1;const g=Array.from(c.values()),w=Array.from(u.values());for(let S=0;S<g.length;S++){const C=g[S],k=w.findIndex(P=>l(C,P,void 0,c,u,d,p));if(k===-1)return!1;w.splice(k,1)}return!0}case i.arrayTag:case i.uint8ArrayTag:case i.uint8ClampedArrayTag:case i.uint16ArrayTag:case i.uint32ArrayTag:case i.bigUint64ArrayTag:case i.int8ArrayTag:case i.int16ArrayTag:case i.int32ArrayTag:case i.bigInt64ArrayTag:case i.float32ArrayTag:case i.float64ArrayTag:{if(typeof Buffer<"u"&&Buffer.isBuffer(c)!==Buffer.isBuffer(u)||c.length!==u.length)return!1;for(let g=0;g<c.length;g++)if(!l(c[g],u[g],g,c,u,d,p))return!1;return!0}case i.arrayBufferTag:return c.byteLength!==u.byteLength?!1:s(new Uint8Array(c),new Uint8Array(u),d,p);case i.dataViewTag:return c.byteLength!==u.byteLength||c.byteOffset!==u.byteOffset?!1:s(new Uint8Array(c),new Uint8Array(u),d,p);case i.errorTag:return c.name===u.name&&c.message===u.message;case i.objectTag:{if(!(s(c.constructor,u.constructor,d,p)||t.isPlainObject(c)&&t.isPlainObject(u)))return!1;const w=[...Object.keys(c),...r.getSymbols(c)],S=[...Object.keys(u),...r.getSymbols(u)];if(w.length!==S.length)return!1;for(let C=0;C<w.length;C++){const k=w[C],P=c[k];if(!Object.hasOwn(u,k))return!1;const N=u[k];if(!l(P,N,k,c,u,d,p))return!1}return!0}default:return!1}}finally{d.delete(c),d.delete(u)}}e.isEqualWith=o})(KC);var VC={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(){}e.noop=t})(VC);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=KC,r=VC;function n(i,a){return t.isEqualWith(i,a,r.noop)}e.isEqual=n})(UC);var cM=UC.isEqual;const uM=cM;var Pc=1e-4,GC=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],YC=(e,t)=>e.map((r,n)=>r*t**n).reduce((r,n)=>r+n),h1=(e,t)=>r=>{var n=GC(e,t);return YC(n,r)},dM=(e,t)=>r=>{var n=GC(e,t),i=[...n.map((a,o)=>a*o).slice(1),0];return YC(i,r)},m1=function(){for(var t,r,n,i,a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];if(o.length===1)switch(o[0]){case"linear":[t,n,r,i]=[0,0,1,1];break;case"ease":[t,n,r,i]=[.25,.1,.25,1];break;case"ease-in":[t,n,r,i]=[.42,0,1,1];break;case"ease-out":[t,n,r,i]=[.42,0,.58,1];break;case"ease-in-out":[t,n,r,i]=[0,0,.58,1];break;default:{var s=o[0].split("(");s[0]==="cubic-bezier"&&s[1].split(")")[0].split(",").length===4&&([t,n,r,i]=s[1].split(")")[0].split(",").map(m=>parseFloat(m)))}}else o.length===4&&([t,n,r,i]=o);var c=h1(t,r),u=h1(n,i),d=dM(t,r),p=m=>m>1?1:m<0?0:m,h=m=>{for(var v=m>1?1:m,b=v,g=0;g<8;++g){var w=c(b)-v,S=d(b);if(Math.abs(w-v)<Pc||S<Pc)return u(b);b=p(b-w/S)}return u(b)};return h.isStepper=!1,h},fM=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:r=100,damping:n=8,dt:i=17}=t,a=(o,l,s)=>{var c=-(o-l)*r,u=s*n,d=s+(c-u)*i/1e3,p=s*i/1e3+o;return Math.abs(p-l)<Pc&&Math.abs(d)<Pc?[l,0]:[p,d]};return a.isStepper=!0,a.dt=i,a},qC=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return m1(e);case"spring":return fM();default:if(e.split("(")[0]==="cubic-bezier")return m1(e)}return typeof e=="function"?e:null};function v1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function g1(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?v1(Object(r),!0).forEach(function(n){pM(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function pM(e,t,r){return(t=hM(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hM(e){var t=mM(e,"string");return typeof t=="symbol"?t:t+""}function mM(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var vM=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),gM=(e,t,r)=>e.map(n=>"".concat(vM(n)," ").concat(t,"ms ").concat(r)).join(","),yM=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((r,n)=>r.filter(i=>n.includes(i))),cl=(e,t)=>Object.keys(t).reduce((r,n)=>g1(g1({},r),{},{[n]:e(n,t[n])}),{});function y1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function st(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?y1(Object(r),!0).forEach(function(n){bM(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function bM(e,t,r){return(t=xM(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xM(e){var t=wM(e,"string");return typeof t=="symbol"?t:t+""}function wM(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Nc=(e,t,r)=>e+(t-e)*r,nh=e=>{var{from:t,to:r}=e;return t!==r},XC=(e,t,r)=>{var n=cl((i,a)=>{if(nh(a)){var[o,l]=e(a.from,a.to,a.velocity);return st(st({},a),{},{from:o,velocity:l})}return a},t);return r<1?cl((i,a)=>nh(a)?st(st({},a),{},{velocity:Nc(a.velocity,n[i].velocity,r),from:Nc(a.from,n[i].from,r)}):a,t):XC(e,n,r-1)};function SM(e,t,r,n,i,a){var o,l=n.reduce((p,h)=>st(st({},p),{},{[h]:{from:e[h],velocity:0,to:t[h]}}),{}),s=()=>cl((p,h)=>h.from,l),c=()=>!Object.values(l).filter(nh).length,u=null,d=p=>{o||(o=p);var h=p-o,m=h/r.dt;l=XC(r,l,m),i(st(st(st({},e),t),s())),o=p,c()||(u=a.setTimeout(d))};return()=>(u=a.setTimeout(d),()=>{u()})}function CM(e,t,r,n,i,a,o){var l=null,s=i.reduce((d,p)=>st(st({},d),{},{[p]:[e[p],t[p]]}),{}),c,u=d=>{c||(c=d);var p=(d-c)/n,h=cl((v,b)=>Nc(...b,r(p)),s);if(a(st(st(st({},e),t),h)),p<1)l=o.setTimeout(u);else{var m=cl((v,b)=>Nc(...b,r(1)),s);a(st(st(st({},e),t),m))}};return()=>(l=o.setTimeout(u),()=>{l()})}const QC=(e,t,r,n,i,a)=>{var o=yM(e,t);return r.isStepper===!0?SM(e,t,r,o,i,a):CM(e,t,r,n,o,i,a)};function kM(e){var t,r=()=>null,n=!1,i=null,a=o=>{if(!n){if(Array.isArray(o)){if(!o.length)return;var l=o,[s,...c]=l;if(typeof s=="number"){i=e.setTimeout(a.bind(null,c),s);return}a(s),i=e.setTimeout(a.bind(null,c));return}typeof o=="string"&&(t=o,r(t)),typeof o=="object"&&(t=o,r(t)),typeof o=="function"&&o()}};return{stop:()=>{n=!0},start:o=>{n=!1,i&&(i(),i=null),a(o)},subscribe:o=>(r=o,()=>{r=()=>null}),getTimeoutController:()=>e}}class PM{setTimeout(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=performance.now(),i=null,a=o=>{o-n>=r?t(o):typeof requestAnimationFrame=="function"&&(i=requestAnimationFrame(a))};return i=requestAnimationFrame(a),()=>{cancelAnimationFrame(i)}}}function NM(){return kM(new PM)}var EM=y.createContext(NM);function JC(e,t){var r=y.useContext(EM);return y.useMemo(()=>t??r(e),[e,t,r])}var OM=["children","begin","duration","attributeName","easing","isActive","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart","animationManager"];function ih(){return ih=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ih.apply(null,arguments)}function AM(e,t){if(e==null)return{};var r,n,i=TM(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function TM(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function b1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Nn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b1(Object(r),!0).forEach(function(n){wi(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function wi(e,t,r){return(t=_M(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _M(e){var t=zM(e,"string");return typeof t=="symbol"?t:t+""}function zM(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class pv extends y.PureComponent{constructor(t,r){super(t,r),wi(this,"mounted",!1),wi(this,"manager",void 0),wi(this,"stopJSAnimation",null),wi(this,"unSubscribe",null);var{isActive:n,attributeName:i,from:a,to:o,children:l,duration:s,animationManager:c}=this.props;if(this.manager=c,this.handleStyleChange=this.handleStyleChange.bind(this),this.changeStyle=this.changeStyle.bind(this),!n||s<=0){this.state={style:{}},typeof l=="function"&&(this.state={style:o});return}if(a){if(typeof l=="function"){this.state={style:a};return}this.state={style:i?{[i]:a}:a}}else this.state={style:{}}}componentDidMount(){var{isActive:t,canBegin:r}=this.props;this.mounted=!0,!(!t||!r)&&this.runAnimation(this.props)}componentDidUpdate(t){var{isActive:r,canBegin:n,attributeName:i,shouldReAnimate:a,to:o,from:l}=this.props,{style:s}=this.state;if(n){if(!r){var c={style:i?{[i]:o}:o};this.state&&s&&(i&&s[i]!==o||!i&&s!==o)&&this.setState(c);return}if(!(uM(t.to,o)&&t.canBegin&&t.isActive)){var u=!t.canBegin||!t.isActive;this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var d=u||a?l:t.to;if(this.state&&s){var p={style:i?{[i]:d}:d};(i&&s[i]!==d||!i&&s!==d)&&this.setState(p)}this.runAnimation(Nn(Nn({},this.props),{},{from:d,begin:0}))}}}componentWillUnmount(){this.mounted=!1;var{onAnimationEnd:t}=this.props;this.unSubscribe&&this.unSubscribe(),this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation(),t&&t()}handleStyleChange(t){this.changeStyle(t)}changeStyle(t){this.mounted&&this.setState({style:t})}runJSAnimation(t){var{from:r,to:n,duration:i,easing:a,begin:o,onAnimationEnd:l,onAnimationStart:s}=t,c=QC(r,n,qC(a),i,this.changeStyle,this.manager.getTimeoutController()),u=()=>{this.stopJSAnimation=c()};this.manager.start([s,o,u,i,l])}runAnimation(t){var{begin:r,duration:n,attributeName:i,to:a,easing:o,onAnimationStart:l,onAnimationEnd:s,children:c}=t;if(this.unSubscribe=this.manager.subscribe(this.handleStyleChange),typeof o=="function"||typeof c=="function"||o==="spring"){this.runJSAnimation(t);return}var u=i?{[i]:a}:a,d=gM(Object.keys(u),n,o);this.manager.start([l,r,Nn(Nn({},u),{},{transition:d}),n,s])}render(){var t=this.props,{children:r,begin:n,duration:i,attributeName:a,easing:o,isActive:l,from:s,to:c,canBegin:u,onAnimationEnd:d,shouldReAnimate:p,onAnimationReStart:h,animationManager:m}=t,v=AM(t,OM),b=y.Children.count(r),g=this.state.style;if(typeof r=="function")return r(g);if(!l||b===0||i<=0)return r;var w=S=>{var{style:C={},className:k}=S.props,P=y.cloneElement(S,Nn(Nn({},v),{},{style:Nn(Nn({},C),g),className:k}));return P};return b===1?w(y.Children.only(r)):y.createElement("div",null,y.Children.map(r,S=>w(S)))}}wi(pv,"displayName","Animate");wi(pv,"defaultProps",{begin:0,duration:1e3,attributeName:"",easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}});function Ec(e){var t,r=JC((t=e.attributeName)!==null&&t!==void 0?t:Object.keys(e.to).join(","),e.animationManager);return y.createElement(pv,ih({},e,{animationManager:r}))}function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oc.apply(null,arguments)}var x1=(e,t,r,n,i)=>{var a=Math.min(Math.abs(r)/2,Math.abs(n)/2),o=n>=0?1:-1,l=r>=0?1:-1,s=n>=0&&r>=0||n<0&&r<0?1:0,c;if(a>0&&i instanceof Array){for(var u=[0,0,0,0],d=0,p=4;d<p;d++)u[d]=i[d]>a?a:i[d];c="M".concat(e,",").concat(t+o*u[0]),u[0]>0&&(c+="A ".concat(u[0],",").concat(u[0],",0,0,").concat(s,",").concat(e+l*u[0],",").concat(t)),c+="L ".concat(e+r-l*u[1],",").concat(t),u[1]>0&&(c+="A ".concat(u[1],",").concat(u[1],",0,0,").concat(s,`,
        `).concat(e+r,",").concat(t+o*u[1])),c+="L ".concat(e+r,",").concat(t+n-o*u[2]),u[2]>0&&(c+="A ".concat(u[2],",").concat(u[2],",0,0,").concat(s,`,
        `).concat(e+r-l*u[2],",").concat(t+n)),c+="L ".concat(e+l*u[3],",").concat(t+n),u[3]>0&&(c+="A ".concat(u[3],",").concat(u[3],",0,0,").concat(s,`,
        `).concat(e,",").concat(t+n-o*u[3])),c+="Z"}else if(a>0&&i===+i&&i>0){var h=Math.min(a,i);c="M ".concat(e,",").concat(t+o*h,`
            A `).concat(h,",").concat(h,",0,0,").concat(s,",").concat(e+l*h,",").concat(t,`
            L `).concat(e+r-l*h,",").concat(t,`
            A `).concat(h,",").concat(h,",0,0,").concat(s,",").concat(e+r,",").concat(t+o*h,`
            L `).concat(e+r,",").concat(t+n-o*h,`
            A `).concat(h,",").concat(h,",0,0,").concat(s,",").concat(e+r-l*h,",").concat(t+n,`
            L `).concat(e+l*h,",").concat(t+n,`
            A `).concat(h,",").concat(h,",0,0,").concat(s,",").concat(e,",").concat(t+n-o*h," Z")}else c="M ".concat(e,",").concat(t," h ").concat(r," v ").concat(n," h ").concat(-r," Z");return c},MM={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},ZC=e=>{var t=tr(e,MM),r=y.useRef(null),[n,i]=y.useState(-1);y.useEffect(()=>{if(r.current&&r.current.getTotalLength)try{var g=r.current.getTotalLength();g&&i(g)}catch{}},[]);var{x:a,y:o,width:l,height:s,radius:c,className:u}=t,{animationEasing:d,animationDuration:p,animationBegin:h,isAnimationActive:m,isUpdateAnimationActive:v}=t;if(a!==+a||o!==+o||l!==+l||s!==+s||l===0||s===0)return null;var b=se("recharts-rectangle",u);return v?y.createElement(Ec,{canBegin:n>0,from:{width:l,height:s,x:a,y:o},to:{width:l,height:s,x:a,y:o},duration:p,animationEasing:d,isActive:v},g=>{var{width:w,height:S,x:C,y:k}=g;return y.createElement(Ec,{canBegin:n>0,from:"0px ".concat(n===-1?1:n,"px"),to:"".concat(n,"px 0px"),attributeName:"strokeDasharray",begin:h,duration:p,isActive:m,easing:d},y.createElement("path",Oc({},Ne(t,!0),{className:b,d:x1(C,k,w,S,c),ref:r})))}):y.createElement("path",Oc({},Ne(t,!0),{className:b,d:x1(a,o,l,s,c)}))};function ek(e){var{cx:t,cy:r,radius:n,startAngle:i,endAngle:a}=e,o=Be(t,r,n,i),l=Be(t,r,n,a);return{points:[o,l],cx:t,cy:r,radius:n,startAngle:i,endAngle:a}}function ah(){return ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ah.apply(null,arguments)}var jM=(e,t)=>{var r=tt(t-e),n=Math.min(Math.abs(t-e),359.999);return r*n},ds=e=>{var{cx:t,cy:r,radius:n,angle:i,sign:a,isExternal:o,cornerRadius:l,cornerIsExternal:s}=e,c=l*(o?1:-1)+n,u=Math.asin(l/c)/kc,d=s?i:i+a*u,p=Be(t,r,c,d),h=Be(t,r,n,d),m=s?i-a*u:i,v=Be(t,r,c*Math.cos(u*kc),m);return{center:p,circleTangency:h,lineTangency:v,theta:u}},tk=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:i,startAngle:a,endAngle:o}=e,l=jM(a,o),s=a+l,c=Be(t,r,i,a),u=Be(t,r,i,s),d="M ".concat(c.x,",").concat(c.y,`
    A `).concat(i,",").concat(i,`,0,
    `).concat(+(Math.abs(l)>180),",").concat(+(a>s),`,
    `).concat(u.x,",").concat(u.y,`
  `);if(n>0){var p=Be(t,r,n,a),h=Be(t,r,n,s);d+="L ".concat(h.x,",").concat(h.y,`
            A `).concat(n,",").concat(n,`,0,
            `).concat(+(Math.abs(l)>180),",").concat(+(a<=s),`,
            `).concat(p.x,",").concat(p.y," Z")}else d+="L ".concat(t,",").concat(r," Z");return d},IM=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:i,cornerRadius:a,forceCornerRadius:o,cornerIsExternal:l,startAngle:s,endAngle:c}=e,u=tt(c-s),{circleTangency:d,lineTangency:p,theta:h}=ds({cx:t,cy:r,radius:i,angle:s,sign:u,cornerRadius:a,cornerIsExternal:l}),{circleTangency:m,lineTangency:v,theta:b}=ds({cx:t,cy:r,radius:i,angle:c,sign:-u,cornerRadius:a,cornerIsExternal:l}),g=l?Math.abs(s-c):Math.abs(s-c)-h-b;if(g<0)return o?"M ".concat(p.x,",").concat(p.y,`
        a`).concat(a,",").concat(a,",0,0,1,").concat(a*2,`,0
        a`).concat(a,",").concat(a,",0,0,1,").concat(-a*2,`,0
      `):tk({cx:t,cy:r,innerRadius:n,outerRadius:i,startAngle:s,endAngle:c});var w="M ".concat(p.x,",").concat(p.y,`
    A`).concat(a,",").concat(a,",0,0,").concat(+(u<0),",").concat(d.x,",").concat(d.y,`
    A`).concat(i,",").concat(i,",0,").concat(+(g>180),",").concat(+(u<0),",").concat(m.x,",").concat(m.y,`
    A`).concat(a,",").concat(a,",0,0,").concat(+(u<0),",").concat(v.x,",").concat(v.y,`
  `);if(n>0){var{circleTangency:S,lineTangency:C,theta:k}=ds({cx:t,cy:r,radius:n,angle:s,sign:u,isExternal:!0,cornerRadius:a,cornerIsExternal:l}),{circleTangency:P,lineTangency:N,theta:A}=ds({cx:t,cy:r,radius:n,angle:c,sign:-u,isExternal:!0,cornerRadius:a,cornerIsExternal:l}),E=l?Math.abs(s-c):Math.abs(s-c)-k-A;if(E<0&&a===0)return"".concat(w,"L").concat(t,",").concat(r,"Z");w+="L".concat(N.x,",").concat(N.y,`
      A`).concat(a,",").concat(a,",0,0,").concat(+(u<0),",").concat(P.x,",").concat(P.y,`
      A`).concat(n,",").concat(n,",0,").concat(+(E>180),",").concat(+(u>0),",").concat(S.x,",").concat(S.y,`
      A`).concat(a,",").concat(a,",0,0,").concat(+(u<0),",").concat(C.x,",").concat(C.y,"Z")}else w+="L".concat(t,",").concat(r,"Z");return w},DM={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},rk=e=>{var t=tr(e,DM),{cx:r,cy:n,innerRadius:i,outerRadius:a,cornerRadius:o,forceCornerRadius:l,cornerIsExternal:s,startAngle:c,endAngle:u,className:d}=t;if(a<i||c===u)return null;var p=se("recharts-sector",d),h=a-i,m=Pt(o,h,0,!0),v;return m>0&&Math.abs(c-u)<360?v=IM({cx:r,cy:n,innerRadius:i,outerRadius:a,cornerRadius:Math.min(m,h/2),forceCornerRadius:l,cornerIsExternal:s,startAngle:c,endAngle:u}):v=tk({cx:r,cy:n,innerRadius:i,outerRadius:a,startAngle:c,endAngle:u}),y.createElement("path",ah({},Ne(t,!0),{className:p,d:v}))};function RM(e,t,r){var n,i,a,o;if(e==="horizontal")n=t.x,a=n,i=r.top,o=r.top+r.height;else if(e==="vertical")i=t.y,o=i,n=r.left,a=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var{cx:l,cy:s,innerRadius:c,outerRadius:u,angle:d}=t,p=Be(l,s,c,d),h=Be(l,s,u,d);n=p.x,i=p.y,a=h.x,o=h.y}else return ek(t);return[{x:n,y:i},{x:a,y:o}]}var nk={},ik={},ak={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=rv;function r(n){return t.isSymbol(n)?NaN:Number(n)}e.toNumber=r})(ak);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=ak;function r(n){return n?(n=t.toNumber(n),n===1/0||n===-1/0?(n<0?-1:1)*Number.MAX_VALUE:n===n?n:0):n===0?n:0}e.toFinite=r})(ik);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=nv,r=ik;function n(i,a,o){o&&typeof o!="number"&&t.isIterateeCall(i,a,o)&&(a=o=void 0),i=r.toFinite(i),a===void 0?(a=i,i=0):a=r.toFinite(a),o=o===void 0?i<a?1:-1:r.toFinite(o);const l=Math.max(Math.ceil((a-i)/(o||1)),0),s=new Array(l);for(let c=0;c<l;c++)s[c]=i,i+=o;return s}e.range=n})(nk);var LM=nk.range;const ok=LM;function Vn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function $M(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function hv(e){let t,r,n;e.length!==2?(t=Vn,r=(l,s)=>Vn(e(l),s),n=(l,s)=>e(l)-s):(t=e===Vn||e===$M?e:FM,r=e,n=e);function i(l,s,c=0,u=l.length){if(c<u){if(t(s,s)!==0)return u;do{const d=c+u>>>1;r(l[d],s)<0?c=d+1:u=d}while(c<u)}return c}function a(l,s,c=0,u=l.length){if(c<u){if(t(s,s)!==0)return u;do{const d=c+u>>>1;r(l[d],s)<=0?c=d+1:u=d}while(c<u)}return c}function o(l,s,c=0,u=l.length){const d=i(l,s,c,u-1);return d>c&&n(l[d-1],s)>-n(l[d],s)?d-1:d}return{left:i,center:o,right:a}}function FM(){return 0}function lk(e){return e===null?NaN:+e}function*BM(e,t){if(t===void 0)for(let r of e)r!=null&&(r=+r)>=r&&(yield r);else{let r=-1;for(let n of e)(n=t(n,++r,e))!=null&&(n=+n)>=n&&(yield n)}}const HM=hv(Vn),UM=HM.right;hv(lk).center;const El=UM;class w1 extends Map{constructor(t,r=VM){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,i]of t)this.set(n,i)}get(t){return super.get(S1(this,t))}has(t){return super.has(S1(this,t))}set(t,r){return super.set(KM(this,t),r)}delete(t){return super.delete(WM(this,t))}}function S1({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function KM({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function WM({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function VM(e){return e!==null&&typeof e=="object"?e.valueOf():e}function GM(e=Vn){if(e===Vn)return sk;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,r)=>{const n=e(t,r);return n||n===0?n:(e(r,r)===0)-(e(t,t)===0)}}function sk(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const YM=Math.sqrt(50),qM=Math.sqrt(10),XM=Math.sqrt(2);function Ac(e,t,r){const n=(t-e)/Math.max(0,r),i=Math.floor(Math.log10(n)),a=n/Math.pow(10,i),o=a>=YM?10:a>=qM?5:a>=XM?2:1;let l,s,c;return i<0?(c=Math.pow(10,-i)/o,l=Math.round(e*c),s=Math.round(t*c),l/c<e&&++l,s/c>t&&--s,c=-c):(c=Math.pow(10,i)*o,l=Math.round(e/c),s=Math.round(t/c),l*c<e&&++l,s*c>t&&--s),s<l&&.5<=r&&r<2?Ac(e,t,r*2):[l,s,c]}function oh(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[i,a,o]=n?Ac(t,e,r):Ac(e,t,r);if(!(a>=i))return[];const l=a-i+1,s=new Array(l);if(n)if(o<0)for(let c=0;c<l;++c)s[c]=(a-c)/-o;else for(let c=0;c<l;++c)s[c]=(a-c)*o;else if(o<0)for(let c=0;c<l;++c)s[c]=(i+c)/-o;else for(let c=0;c<l;++c)s[c]=(i+c)*o;return s}function lh(e,t,r){return t=+t,e=+e,r=+r,Ac(e,t,r)[2]}function sh(e,t,r){t=+t,e=+e,r=+r;const n=t<e,i=n?lh(t,e,r):lh(e,t,r);return(n?-1:1)*(i<0?1/-i:i)}function C1(e,t){let r;if(t===void 0)for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);else{let n=-1;for(let i of e)(i=t(i,++n,e))!=null&&(r<i||r===void 0&&i>=i)&&(r=i)}return r}function k1(e,t){let r;if(t===void 0)for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);else{let n=-1;for(let i of e)(i=t(i,++n,e))!=null&&(r>i||r===void 0&&i>=i)&&(r=i)}return r}function ck(e,t,r=0,n=1/0,i){if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),n=Math.floor(Math.min(e.length-1,n)),!(r<=t&&t<=n))return e;for(i=i===void 0?sk:GM(i);n>r;){if(n-r>600){const s=n-r+1,c=t-r+1,u=Math.log(s),d=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*d*(s-d)/s)*(c-s/2<0?-1:1),h=Math.max(r,Math.floor(t-c*d/s+p)),m=Math.min(n,Math.floor(t+(s-c)*d/s+p));ck(e,t,h,m,i)}const a=e[t];let o=r,l=n;for(po(e,r,t),i(e[n],a)>0&&po(e,r,n);o<l;){for(po(e,o,l),++o,--l;i(e[o],a)<0;)++o;for(;i(e[l],a)>0;)--l}i(e[r],a)===0?po(e,r,l):(++l,po(e,l,n)),l<=t&&(r=l+1),t<=l&&(n=l-1)}return e}function po(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function QM(e,t,r){if(e=Float64Array.from(BM(e,r)),!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return k1(e);if(t>=1)return C1(e);var n,i=(n-1)*t,a=Math.floor(i),o=C1(ck(e,a).subarray(0,a+1)),l=k1(e.subarray(a+1));return o+(l-o)*(i-a)}}function JM(e,t,r=lk){if(!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,i=(n-1)*t,a=Math.floor(i),o=+r(e[a],a,e),l=+r(e[a+1],a+1,e);return o+(l-o)*(i-a)}}function ZM(e,t,r){e=+e,t=+t,r=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+r;for(var n=-1,i=Math.max(0,Math.ceil((t-e)/r))|0,a=new Array(i);++n<i;)a[n]=e+n*r;return a}function yr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function xn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const ch=Symbol("implicit");function mv(){var e=new w1,t=[],r=[],n=ch;function i(a){let o=e.get(a);if(o===void 0){if(n!==ch)return n;e.set(a,o=t.push(a)-1)}return r[o%r.length]}return i.domain=function(a){if(!arguments.length)return t.slice();t=[],e=new w1;for(const o of a)e.has(o)||e.set(o,t.push(o)-1);return i},i.range=function(a){return arguments.length?(r=Array.from(a),i):r.slice()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return mv(t,r).unknown(n)},yr.apply(i,arguments),i}function vv(){var e=mv().unknown(void 0),t=e.domain,r=e.range,n=0,i=1,a,o,l=!1,s=0,c=0,u=.5;delete e.unknown;function d(){var p=t().length,h=i<n,m=h?i:n,v=h?n:i;a=(v-m)/Math.max(1,p-s+c*2),l&&(a=Math.floor(a)),m+=(v-m-a*(p-s))*u,o=a*(1-s),l&&(m=Math.round(m),o=Math.round(o));var b=ZM(p).map(function(g){return m+a*g});return r(h?b.reverse():b)}return e.domain=function(p){return arguments.length?(t(p),d()):t()},e.range=function(p){return arguments.length?([n,i]=p,n=+n,i=+i,d()):[n,i]},e.rangeRound=function(p){return[n,i]=p,n=+n,i=+i,l=!0,d()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(p){return arguments.length?(l=!!p,d()):l},e.padding=function(p){return arguments.length?(s=Math.min(1,c=+p),d()):s},e.paddingInner=function(p){return arguments.length?(s=Math.min(1,p),d()):s},e.paddingOuter=function(p){return arguments.length?(c=+p,d()):c},e.align=function(p){return arguments.length?(u=Math.max(0,Math.min(1,p)),d()):u},e.copy=function(){return vv(t(),[n,i]).round(l).paddingInner(s).paddingOuter(c).align(u)},yr.apply(d(),arguments)}function uk(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return uk(t())},e}function ej(){return uk(vv.apply(null,arguments).paddingInner(1))}function gv(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function dk(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function Ol(){}var ul=.7,Tc=1/ul,ya="\\s*([+-]?\\d+)\\s*",dl="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Br="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",tj=/^#([0-9a-f]{3,8})$/,rj=new RegExp(`^rgb\\(${ya},${ya},${ya}\\)$`),nj=new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`),ij=new RegExp(`^rgba\\(${ya},${ya},${ya},${dl}\\)$`),aj=new RegExp(`^rgba\\(${Br},${Br},${Br},${dl}\\)$`),oj=new RegExp(`^hsl\\(${dl},${Br},${Br}\\)$`),lj=new RegExp(`^hsla\\(${dl},${Br},${Br},${dl}\\)$`),P1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gv(Ol,fl,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:N1,formatHex:N1,formatHex8:sj,formatHsl:cj,formatRgb:E1,toString:E1});function N1(){return this.rgb().formatHex()}function sj(){return this.rgb().formatHex8()}function cj(){return fk(this).formatHsl()}function E1(){return this.rgb().formatRgb()}function fl(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=tj.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?O1(t):r===3?new zt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?fs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?fs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=rj.exec(e))?new zt(t[1],t[2],t[3],1):(t=nj.exec(e))?new zt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ij.exec(e))?fs(t[1],t[2],t[3],t[4]):(t=aj.exec(e))?fs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=oj.exec(e))?_1(t[1],t[2]/100,t[3]/100,1):(t=lj.exec(e))?_1(t[1],t[2]/100,t[3]/100,t[4]):P1.hasOwnProperty(e)?O1(P1[e]):e==="transparent"?new zt(NaN,NaN,NaN,0):null}function O1(e){return new zt(e>>16&255,e>>8&255,e&255,1)}function fs(e,t,r,n){return n<=0&&(e=t=r=NaN),new zt(e,t,r,n)}function uj(e){return e instanceof Ol||(e=fl(e)),e?(e=e.rgb(),new zt(e.r,e.g,e.b,e.opacity)):new zt}function uh(e,t,r,n){return arguments.length===1?uj(e):new zt(e,t,r,n??1)}function zt(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}gv(zt,uh,dk(Ol,{brighter(e){return e=e==null?Tc:Math.pow(Tc,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ul:Math.pow(ul,e),new zt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new zt(Ai(this.r),Ai(this.g),Ai(this.b),_c(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:A1,formatHex:A1,formatHex8:dj,formatRgb:T1,toString:T1}));function A1(){return`#${Si(this.r)}${Si(this.g)}${Si(this.b)}`}function dj(){return`#${Si(this.r)}${Si(this.g)}${Si(this.b)}${Si((isNaN(this.opacity)?1:this.opacity)*255)}`}function T1(){const e=_c(this.opacity);return`${e===1?"rgb(":"rgba("}${Ai(this.r)}, ${Ai(this.g)}, ${Ai(this.b)}${e===1?")":`, ${e})`}`}function _c(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ai(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Si(e){return e=Ai(e),(e<16?"0":"")+e.toString(16)}function _1(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Or(e,t,r,n)}function fk(e){if(e instanceof Or)return new Or(e.h,e.s,e.l,e.opacity);if(e instanceof Ol||(e=fl(e)),!e)return new Or;if(e instanceof Or)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=NaN,l=a-i,s=(a+i)/2;return l?(t===a?o=(r-n)/l+(r<n)*6:r===a?o=(n-t)/l+2:o=(t-r)/l+4,l/=s<.5?a+i:2-a-i,o*=60):l=s>0&&s<1?0:o,new Or(o,l,s,e.opacity)}function fj(e,t,r,n){return arguments.length===1?fk(e):new Or(e,t,r,n??1)}function Or(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}gv(Or,fj,dk(Ol,{brighter(e){return e=e==null?Tc:Math.pow(Tc,e),new Or(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ul:Math.pow(ul,e),new Or(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new zt(cf(e>=240?e-240:e+120,i,n),cf(e,i,n),cf(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new Or(z1(this.h),ps(this.s),ps(this.l),_c(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=_c(this.opacity);return`${e===1?"hsl(":"hsla("}${z1(this.h)}, ${ps(this.s)*100}%, ${ps(this.l)*100}%${e===1?")":`, ${e})`}`}}));function z1(e){return e=(e||0)%360,e<0?e+360:e}function ps(e){return Math.max(0,Math.min(1,e||0))}function cf(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const yv=e=>()=>e;function pj(e,t){return function(r){return e+r*t}}function hj(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function mj(e){return(e=+e)==1?pk:function(t,r){return r-t?hj(t,r,e):yv(isNaN(t)?r:t)}}function pk(e,t){var r=t-e;return r?pj(e,r):yv(isNaN(e)?t:e)}const M1=function e(t){var r=mj(t);function n(i,a){var o=r((i=uh(i)).r,(a=uh(a)).r),l=r(i.g,a.g),s=r(i.b,a.b),c=pk(i.opacity,a.opacity);return function(u){return i.r=o(u),i.g=l(u),i.b=s(u),i.opacity=c(u),i+""}}return n.gamma=e,n}(1);function vj(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),i;return function(a){for(i=0;i<r;++i)n[i]=e[i]*(1-a)+t[i]*a;return n}}function gj(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function yj(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,i=new Array(n),a=new Array(r),o;for(o=0;o<n;++o)i[o]=Ka(e[o],t[o]);for(;o<r;++o)a[o]=t[o];return function(l){for(o=0;o<n;++o)a[o]=i[o](l);return a}}function bj(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function zc(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function xj(e,t){var r={},n={},i;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in e?r[i]=Ka(e[i],t[i]):n[i]=t[i];return function(a){for(i in r)n[i]=r[i](a);return n}}var dh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,uf=new RegExp(dh.source,"g");function wj(e){return function(){return e}}function Sj(e){return function(t){return e(t)+""}}function Cj(e,t){var r=dh.lastIndex=uf.lastIndex=0,n,i,a,o=-1,l=[],s=[];for(e=e+"",t=t+"";(n=dh.exec(e))&&(i=uf.exec(t));)(a=i.index)>r&&(a=t.slice(r,a),l[o]?l[o]+=a:l[++o]=a),(n=n[0])===(i=i[0])?l[o]?l[o]+=i:l[++o]=i:(l[++o]=null,s.push({i:o,x:zc(n,i)})),r=uf.lastIndex;return r<t.length&&(a=t.slice(r),l[o]?l[o]+=a:l[++o]=a),l.length<2?s[0]?Sj(s[0].x):wj(t):(t=s.length,function(c){for(var u=0,d;u<t;++u)l[(d=s[u]).i]=d.x(c);return l.join("")})}function Ka(e,t){var r=typeof t,n;return t==null||r==="boolean"?yv(t):(r==="number"?zc:r==="string"?(n=fl(t))?(t=n,M1):Cj:t instanceof fl?M1:t instanceof Date?bj:gj(t)?vj:Array.isArray(t)?yj:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?xj:zc)(e,t)}function bv(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function kj(e,t){t===void 0&&(t=e,e=Ka);for(var r=0,n=t.length-1,i=t[0],a=new Array(n<0?0:n);r<n;)a[r]=e(i,i=t[++r]);return function(o){var l=Math.max(0,Math.min(n-1,Math.floor(o*=n)));return a[l](o-l)}}function Pj(e){return function(){return e}}function Mc(e){return+e}var j1=[0,1];function Ct(e){return e}function fh(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:Pj(isNaN(t)?NaN:.5)}function Nj(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function Ej(e,t,r){var n=e[0],i=e[1],a=t[0],o=t[1];return i<n?(n=fh(i,n),a=r(o,a)):(n=fh(n,i),a=r(a,o)),function(l){return a(n(l))}}function Oj(e,t,r){var n=Math.min(e.length,t.length)-1,i=new Array(n),a=new Array(n),o=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++o<n;)i[o]=fh(e[o],e[o+1]),a[o]=r(t[o],t[o+1]);return function(l){var s=El(e,l,1,n)-1;return a[s](i[s](l))}}function Al(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Xu(){var e=j1,t=j1,r=Ka,n,i,a,o=Ct,l,s,c;function u(){var p=Math.min(e.length,t.length);return o!==Ct&&(o=Nj(e[0],e[p-1])),l=p>2?Oj:Ej,s=c=null,d}function d(p){return p==null||isNaN(p=+p)?a:(s||(s=l(e.map(n),t,r)))(n(o(p)))}return d.invert=function(p){return o(i((c||(c=l(t,e.map(n),zc)))(p)))},d.domain=function(p){return arguments.length?(e=Array.from(p,Mc),u()):e.slice()},d.range=function(p){return arguments.length?(t=Array.from(p),u()):t.slice()},d.rangeRound=function(p){return t=Array.from(p),r=bv,u()},d.clamp=function(p){return arguments.length?(o=p?!0:Ct,u()):o!==Ct},d.interpolate=function(p){return arguments.length?(r=p,u()):r},d.unknown=function(p){return arguments.length?(a=p,d):a},function(p,h){return n=p,i=h,u()}}function xv(){return Xu()(Ct,Ct)}function Aj(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function jc(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function _a(e){return e=jc(Math.abs(e)),e?e[1]:NaN}function Tj(e,t){return function(r,n){for(var i=r.length,a=[],o=0,l=e[0],s=0;i>0&&l>0&&(s+l+1>n&&(l=Math.max(1,n-s)),a.push(r.substring(i-=l,i+l)),!((s+=l+1)>n));)l=e[o=(o+1)%e.length];return a.reverse().join(t)}}function _j(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var zj=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function pl(e){if(!(t=zj.exec(e)))throw new Error("invalid format: "+e);var t;return new wv({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}pl.prototype=wv.prototype;function wv(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}wv.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Mj(e){e:for(var t=e.length,r=1,n=-1,i;r<t;++r)switch(e[r]){case".":n=i=r;break;case"0":n===0&&(n=r),i=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(i+1):e}var hk;function jj(e,t){var r=jc(e,t);if(!r)return e+"";var n=r[0],i=r[1],a=i-(hk=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=n.length;return a===o?n:a>o?n+new Array(a-o+1).join("0"):a>0?n.slice(0,a)+"."+n.slice(a):"0."+new Array(1-a).join("0")+jc(e,Math.max(0,t+a-1))[0]}function I1(e,t){var r=jc(e,t);if(!r)return e+"";var n=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const D1={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Aj,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>I1(e*100,t),r:I1,s:jj,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function R1(e){return e}var L1=Array.prototype.map,$1=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ij(e){var t=e.grouping===void 0||e.thousands===void 0?R1:Tj(L1.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",a=e.numerals===void 0?R1:_j(L1.call(e.numerals,String)),o=e.percent===void 0?"%":e.percent+"",l=e.minus===void 0?"−":e.minus+"",s=e.nan===void 0?"NaN":e.nan+"";function c(d){d=pl(d);var p=d.fill,h=d.align,m=d.sign,v=d.symbol,b=d.zero,g=d.width,w=d.comma,S=d.precision,C=d.trim,k=d.type;k==="n"?(w=!0,k="g"):D1[k]||(S===void 0&&(S=12),C=!0,k="g"),(b||p==="0"&&h==="=")&&(b=!0,p="0",h="=");var P=v==="$"?r:v==="#"&&/[boxX]/.test(k)?"0"+k.toLowerCase():"",N=v==="$"?n:/[%p]/.test(k)?o:"",A=D1[k],E=/[defgprs%]/.test(k);S=S===void 0?6:/[gprs]/.test(k)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function _(z){var M=P,G=N,Z,D,L;if(k==="c")G=A(z)+G,z="";else{z=+z;var q=z<0||1/z<0;if(z=isNaN(z)?s:A(Math.abs(z),S),C&&(z=Mj(z)),q&&+z==0&&m!=="+"&&(q=!1),M=(q?m==="("?m:l:m==="-"||m==="("?"":m)+M,G=(k==="s"?$1[8+hk/3]:"")+G+(q&&m==="("?")":""),E){for(Z=-1,D=z.length;++Z<D;)if(L=z.charCodeAt(Z),48>L||L>57){G=(L===46?i+z.slice(Z+1):z.slice(Z))+G,z=z.slice(0,Z);break}}}w&&!b&&(z=t(z,1/0));var R=M.length+z.length+G.length,$=R<g?new Array(g-R+1).join(p):"";switch(w&&b&&(z=t($+z,$.length?g-G.length:1/0),$=""),h){case"<":z=M+z+G+$;break;case"=":z=M+$+z+G;break;case"^":z=$.slice(0,R=$.length>>1)+M+z+G+$.slice(R);break;default:z=$+M+z+G;break}return a(z)}return _.toString=function(){return d+""},_}function u(d,p){var h=c((d=pl(d),d.type="f",d)),m=Math.max(-8,Math.min(8,Math.floor(_a(p)/3)))*3,v=Math.pow(10,-m),b=$1[8+m/3];return function(g){return h(v*g)+b}}return{format:c,formatPrefix:u}}var hs,Sv,mk;Dj({thousands:",",grouping:[3],currency:["$",""]});function Dj(e){return hs=Ij(e),Sv=hs.format,mk=hs.formatPrefix,hs}function Rj(e){return Math.max(0,-_a(Math.abs(e)))}function Lj(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(_a(t)/3)))*3-_a(Math.abs(e)))}function $j(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,_a(t)-_a(e))+1}function vk(e,t,r,n){var i=sh(e,t,r),a;switch(n=pl(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(a=Lj(i,o))&&(n.precision=a),mk(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(a=$j(i,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=a-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(a=Rj(i))&&(n.precision=a-(n.type==="%")*2);break}}return Sv(n)}function oi(e){var t=e.domain;return e.ticks=function(r){var n=t();return oh(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var i=t();return vk(i[0],i[i.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),i=0,a=n.length-1,o=n[i],l=n[a],s,c,u=10;for(l<o&&(c=o,o=l,l=c,c=i,i=a,a=c);u-- >0;){if(c=lh(o,l,r),c===s)return n[i]=o,n[a]=l,t(n);if(c>0)o=Math.floor(o/c)*c,l=Math.ceil(l/c)*c;else if(c<0)o=Math.ceil(o*c)/c,l=Math.floor(l*c)/c;else break;s=c}return e},e}function gk(){var e=xv();return e.copy=function(){return Al(e,gk())},yr.apply(e,arguments),oi(e)}function yk(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,Mc),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return yk(e).unknown(t)},e=arguments.length?Array.from(e,Mc):[0,1],oi(r)}function bk(e,t){e=e.slice();var r=0,n=e.length-1,i=e[r],a=e[n],o;return a<i&&(o=r,r=n,n=o,o=i,i=a,a=o),e[r]=t.floor(i),e[n]=t.ceil(a),e}function F1(e){return Math.log(e)}function B1(e){return Math.exp(e)}function Fj(e){return-Math.log(-e)}function Bj(e){return-Math.exp(-e)}function Hj(e){return isFinite(e)?+("1e"+e):e<0?0:e}function Uj(e){return e===10?Hj:e===Math.E?Math.exp:t=>Math.pow(e,t)}function Kj(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function H1(e){return(t,r)=>-e(-t,r)}function Cv(e){const t=e(F1,B1),r=t.domain;let n=10,i,a;function o(){return i=Kj(n),a=Uj(n),r()[0]<0?(i=H1(i),a=H1(a),e(Fj,Bj)):e(F1,B1),t}return t.base=function(l){return arguments.length?(n=+l,o()):n},t.domain=function(l){return arguments.length?(r(l),o()):r()},t.ticks=l=>{const s=r();let c=s[0],u=s[s.length-1];const d=u<c;d&&([c,u]=[u,c]);let p=i(c),h=i(u),m,v;const b=l==null?10:+l;let g=[];if(!(n%1)&&h-p<b){if(p=Math.floor(p),h=Math.ceil(h),c>0){for(;p<=h;++p)for(m=1;m<n;++m)if(v=p<0?m/a(-p):m*a(p),!(v<c)){if(v>u)break;g.push(v)}}else for(;p<=h;++p)for(m=n-1;m>=1;--m)if(v=p>0?m/a(-p):m*a(p),!(v<c)){if(v>u)break;g.push(v)}g.length*2<b&&(g=oh(c,u,b))}else g=oh(p,h,Math.min(h-p,b)).map(a);return d?g.reverse():g},t.tickFormat=(l,s)=>{if(l==null&&(l=10),s==null&&(s=n===10?"s":","),typeof s!="function"&&(!(n%1)&&(s=pl(s)).precision==null&&(s.trim=!0),s=Sv(s)),l===1/0)return s;const c=Math.max(1,n*l/t.ticks().length);return u=>{let d=u/a(Math.round(i(u)));return d*n<n-.5&&(d*=n),d<=c?s(u):""}},t.nice=()=>r(bk(r(),{floor:l=>a(Math.floor(i(l))),ceil:l=>a(Math.ceil(i(l)))})),t}function xk(){const e=Cv(Xu()).domain([1,10]);return e.copy=()=>Al(e,xk()).base(e.base()),yr.apply(e,arguments),e}function U1(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function K1(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function kv(e){var t=1,r=e(U1(t),K1(t));return r.constant=function(n){return arguments.length?e(U1(t=+n),K1(t)):t},oi(r)}function wk(){var e=kv(Xu());return e.copy=function(){return Al(e,wk()).constant(e.constant())},yr.apply(e,arguments)}function W1(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function Wj(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function Vj(e){return e<0?-e*e:e*e}function Pv(e){var t=e(Ct,Ct),r=1;function n(){return r===1?e(Ct,Ct):r===.5?e(Wj,Vj):e(W1(r),W1(1/r))}return t.exponent=function(i){return arguments.length?(r=+i,n()):r},oi(t)}function Nv(){var e=Pv(Xu());return e.copy=function(){return Al(e,Nv()).exponent(e.exponent())},yr.apply(e,arguments),e}function Gj(){return Nv.apply(null,arguments).exponent(.5)}function V1(e){return Math.sign(e)*e*e}function Yj(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function Sk(){var e=xv(),t=[0,1],r=!1,n;function i(a){var o=Yj(e(a));return isNaN(o)?n:r?Math.round(o):o}return i.invert=function(a){return e.invert(V1(a))},i.domain=function(a){return arguments.length?(e.domain(a),i):e.domain()},i.range=function(a){return arguments.length?(e.range((t=Array.from(a,Mc)).map(V1)),i):t.slice()},i.rangeRound=function(a){return i.range(a).round(!0)},i.round=function(a){return arguments.length?(r=!!a,i):r},i.clamp=function(a){return arguments.length?(e.clamp(a),i):e.clamp()},i.unknown=function(a){return arguments.length?(n=a,i):n},i.copy=function(){return Sk(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},yr.apply(i,arguments),oi(i)}function Ck(){var e=[],t=[],r=[],n;function i(){var o=0,l=Math.max(1,t.length);for(r=new Array(l-1);++o<l;)r[o-1]=JM(e,o/l);return a}function a(o){return o==null||isNaN(o=+o)?n:t[El(r,o)]}return a.invertExtent=function(o){var l=t.indexOf(o);return l<0?[NaN,NaN]:[l>0?r[l-1]:e[0],l<r.length?r[l]:e[e.length-1]]},a.domain=function(o){if(!arguments.length)return e.slice();e=[];for(let l of o)l!=null&&!isNaN(l=+l)&&e.push(l);return e.sort(Vn),i()},a.range=function(o){return arguments.length?(t=Array.from(o),i()):t.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.quantiles=function(){return r.slice()},a.copy=function(){return Ck().domain(e).range(t).unknown(n)},yr.apply(a,arguments)}function kk(){var e=0,t=1,r=1,n=[.5],i=[0,1],a;function o(s){return s!=null&&s<=s?i[El(n,s,0,r)]:a}function l(){var s=-1;for(n=new Array(r);++s<r;)n[s]=((s+1)*t-(s-r)*e)/(r+1);return o}return o.domain=function(s){return arguments.length?([e,t]=s,e=+e,t=+t,l()):[e,t]},o.range=function(s){return arguments.length?(r=(i=Array.from(s)).length-1,l()):i.slice()},o.invertExtent=function(s){var c=i.indexOf(s);return c<0?[NaN,NaN]:c<1?[e,n[0]]:c>=r?[n[r-1],t]:[n[c-1],n[c]]},o.unknown=function(s){return arguments.length&&(a=s),o},o.thresholds=function(){return n.slice()},o.copy=function(){return kk().domain([e,t]).range(i).unknown(a)},yr.apply(oi(o),arguments)}function Pk(){var e=[.5],t=[0,1],r,n=1;function i(a){return a!=null&&a<=a?t[El(e,a,0,n)]:r}return i.domain=function(a){return arguments.length?(e=Array.from(a),n=Math.min(e.length,t.length-1),i):e.slice()},i.range=function(a){return arguments.length?(t=Array.from(a),n=Math.min(e.length,t.length-1),i):t.slice()},i.invertExtent=function(a){var o=t.indexOf(a);return[e[o-1],e[o]]},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Pk().domain(e).range(t).unknown(r)},yr.apply(i,arguments)}const df=new Date,ff=new Date;function qe(e,t,r,n){function i(a){return e(a=arguments.length===0?new Date:new Date(+a)),a}return i.floor=a=>(e(a=new Date(+a)),a),i.ceil=a=>(e(a=new Date(a-1)),t(a,1),e(a),a),i.round=a=>{const o=i(a),l=i.ceil(a);return a-o<l-a?o:l},i.offset=(a,o)=>(t(a=new Date(+a),o==null?1:Math.floor(o)),a),i.range=(a,o,l)=>{const s=[];if(a=i.ceil(a),l=l==null?1:Math.floor(l),!(a<o)||!(l>0))return s;let c;do s.push(c=new Date(+a)),t(a,l),e(a);while(c<a&&a<o);return s},i.filter=a=>qe(o=>{if(o>=o)for(;e(o),!a(o);)o.setTime(o-1)},(o,l)=>{if(o>=o)if(l<0)for(;++l<=0;)for(;t(o,-1),!a(o););else for(;--l>=0;)for(;t(o,1),!a(o););}),r&&(i.count=(a,o)=>(df.setTime(+a),ff.setTime(+o),e(df),e(ff),Math.floor(r(df,ff))),i.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?i.filter(n?o=>n(o)%a===0:o=>i.count(0,o)%a===0):i)),i}const Ic=qe(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Ic.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?qe(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):Ic);Ic.range;const Jr=1e3,ur=Jr*60,Zr=ur*60,dn=Zr*24,Ev=dn*7,G1=dn*30,pf=dn*365,Ci=qe(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Jr)},(e,t)=>(t-e)/Jr,e=>e.getUTCSeconds());Ci.range;const Ov=qe(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Jr)},(e,t)=>{e.setTime(+e+t*ur)},(e,t)=>(t-e)/ur,e=>e.getMinutes());Ov.range;const Av=qe(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*ur)},(e,t)=>(t-e)/ur,e=>e.getUTCMinutes());Av.range;const Tv=qe(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Jr-e.getMinutes()*ur)},(e,t)=>{e.setTime(+e+t*Zr)},(e,t)=>(t-e)/Zr,e=>e.getHours());Tv.range;const _v=qe(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Zr)},(e,t)=>(t-e)/Zr,e=>e.getUTCHours());_v.range;const Tl=qe(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*ur)/dn,e=>e.getDate()-1);Tl.range;const Qu=qe(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/dn,e=>e.getUTCDate()-1);Qu.range;const Nk=qe(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/dn,e=>Math.floor(e/dn));Nk.range;function Wi(e){return qe(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*ur)/Ev)}const Ju=Wi(0),Dc=Wi(1),qj=Wi(2),Xj=Wi(3),za=Wi(4),Qj=Wi(5),Jj=Wi(6);Ju.range;Dc.range;qj.range;Xj.range;za.range;Qj.range;Jj.range;function Vi(e){return qe(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/Ev)}const Zu=Vi(0),Rc=Vi(1),Zj=Vi(2),eI=Vi(3),Ma=Vi(4),tI=Vi(5),rI=Vi(6);Zu.range;Rc.range;Zj.range;eI.range;Ma.range;tI.range;rI.range;const zv=qe(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());zv.range;const Mv=qe(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());Mv.range;const fn=qe(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());fn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:qe(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});fn.range;const pn=qe(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());pn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:qe(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});pn.range;function Ek(e,t,r,n,i,a){const o=[[Ci,1,Jr],[Ci,5,5*Jr],[Ci,15,15*Jr],[Ci,30,30*Jr],[a,1,ur],[a,5,5*ur],[a,15,15*ur],[a,30,30*ur],[i,1,Zr],[i,3,3*Zr],[i,6,6*Zr],[i,12,12*Zr],[n,1,dn],[n,2,2*dn],[r,1,Ev],[t,1,G1],[t,3,3*G1],[e,1,pf]];function l(c,u,d){const p=u<c;p&&([c,u]=[u,c]);const h=d&&typeof d.range=="function"?d:s(c,u,d),m=h?h.range(c,+u+1):[];return p?m.reverse():m}function s(c,u,d){const p=Math.abs(u-c)/d,h=hv(([,,b])=>b).right(o,p);if(h===o.length)return e.every(sh(c/pf,u/pf,d));if(h===0)return Ic.every(Math.max(sh(c,u,d),1));const[m,v]=o[p/o[h-1][2]<o[h][2]/p?h-1:h];return m.every(v)}return[l,s]}const[nI,iI]=Ek(pn,Mv,Zu,Nk,_v,Av),[aI,oI]=Ek(fn,zv,Ju,Tl,Tv,Ov);function hf(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function mf(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function ho(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function lI(e){var t=e.dateTime,r=e.date,n=e.time,i=e.periods,a=e.days,o=e.shortDays,l=e.months,s=e.shortMonths,c=mo(i),u=vo(i),d=mo(a),p=vo(a),h=mo(o),m=vo(o),v=mo(l),b=vo(l),g=mo(s),w=vo(s),S={a:q,A:R,b:$,B:V,c:null,d:Z1,e:Z1,f:TI,g:FI,G:HI,H:EI,I:OI,j:AI,L:Ok,m:_I,M:zI,p:X,q:F,Q:rb,s:nb,S:MI,u:jI,U:II,V:DI,w:RI,W:LI,x:null,X:null,y:$I,Y:BI,Z:UI,"%":tb},C={a:Le,A:ce,b:ue,B:Je,c:null,d:eb,e:eb,f:GI,g:nD,G:aD,H:KI,I:WI,j:VI,L:Tk,m:YI,M:qI,p:br,q:di,Q:rb,s:nb,S:XI,u:QI,U:JI,V:ZI,w:eD,W:tD,x:null,X:null,y:rD,Y:iD,Z:oD,"%":tb},k={a:_,A:z,b:M,B:G,c:Z,d:Q1,e:Q1,f:CI,g:X1,G:q1,H:J1,I:J1,j:bI,L:SI,m:yI,M:xI,p:E,q:gI,Q:PI,s:NI,S:wI,u:fI,U:pI,V:hI,w:dI,W:mI,x:D,X:L,y:X1,Y:q1,Z:vI,"%":kI};S.x=P(r,S),S.X=P(n,S),S.c=P(t,S),C.x=P(r,C),C.X=P(n,C),C.c=P(t,C);function P(B,ee){return function(ne){var j=[],dt=-1,he=0,it=B.length,wt,Wr,Za;for(ne instanceof Date||(ne=new Date(+ne));++dt<it;)B.charCodeAt(dt)===37&&(j.push(B.slice(he,dt)),(Wr=Y1[wt=B.charAt(++dt)])!=null?wt=B.charAt(++dt):Wr=wt==="e"?" ":"0",(Za=ee[wt])&&(wt=Za(ne,Wr)),j.push(wt),he=dt+1);return j.push(B.slice(he,dt)),j.join("")}}function N(B,ee){return function(ne){var j=ho(1900,void 0,1),dt=A(j,B,ne+="",0),he,it;if(dt!=ne.length)return null;if("Q"in j)return new Date(j.Q);if("s"in j)return new Date(j.s*1e3+("L"in j?j.L:0));if(ee&&!("Z"in j)&&(j.Z=0),"p"in j&&(j.H=j.H%12+j.p*12),j.m===void 0&&(j.m="q"in j?j.q:0),"V"in j){if(j.V<1||j.V>53)return null;"w"in j||(j.w=1),"Z"in j?(he=mf(ho(j.y,0,1)),it=he.getUTCDay(),he=it>4||it===0?Rc.ceil(he):Rc(he),he=Qu.offset(he,(j.V-1)*7),j.y=he.getUTCFullYear(),j.m=he.getUTCMonth(),j.d=he.getUTCDate()+(j.w+6)%7):(he=hf(ho(j.y,0,1)),it=he.getDay(),he=it>4||it===0?Dc.ceil(he):Dc(he),he=Tl.offset(he,(j.V-1)*7),j.y=he.getFullYear(),j.m=he.getMonth(),j.d=he.getDate()+(j.w+6)%7)}else("W"in j||"U"in j)&&("w"in j||(j.w="u"in j?j.u%7:"W"in j?1:0),it="Z"in j?mf(ho(j.y,0,1)).getUTCDay():hf(ho(j.y,0,1)).getDay(),j.m=0,j.d="W"in j?(j.w+6)%7+j.W*7-(it+5)%7:j.w+j.U*7-(it+6)%7);return"Z"in j?(j.H+=j.Z/100|0,j.M+=j.Z%100,mf(j)):hf(j)}}function A(B,ee,ne,j){for(var dt=0,he=ee.length,it=ne.length,wt,Wr;dt<he;){if(j>=it)return-1;if(wt=ee.charCodeAt(dt++),wt===37){if(wt=ee.charAt(dt++),Wr=k[wt in Y1?ee.charAt(dt++):wt],!Wr||(j=Wr(B,ne,j))<0)return-1}else if(wt!=ne.charCodeAt(j++))return-1}return j}function E(B,ee,ne){var j=c.exec(ee.slice(ne));return j?(B.p=u.get(j[0].toLowerCase()),ne+j[0].length):-1}function _(B,ee,ne){var j=h.exec(ee.slice(ne));return j?(B.w=m.get(j[0].toLowerCase()),ne+j[0].length):-1}function z(B,ee,ne){var j=d.exec(ee.slice(ne));return j?(B.w=p.get(j[0].toLowerCase()),ne+j[0].length):-1}function M(B,ee,ne){var j=g.exec(ee.slice(ne));return j?(B.m=w.get(j[0].toLowerCase()),ne+j[0].length):-1}function G(B,ee,ne){var j=v.exec(ee.slice(ne));return j?(B.m=b.get(j[0].toLowerCase()),ne+j[0].length):-1}function Z(B,ee,ne){return A(B,t,ee,ne)}function D(B,ee,ne){return A(B,r,ee,ne)}function L(B,ee,ne){return A(B,n,ee,ne)}function q(B){return o[B.getDay()]}function R(B){return a[B.getDay()]}function $(B){return s[B.getMonth()]}function V(B){return l[B.getMonth()]}function X(B){return i[+(B.getHours()>=12)]}function F(B){return 1+~~(B.getMonth()/3)}function Le(B){return o[B.getUTCDay()]}function ce(B){return a[B.getUTCDay()]}function ue(B){return s[B.getUTCMonth()]}function Je(B){return l[B.getUTCMonth()]}function br(B){return i[+(B.getUTCHours()>=12)]}function di(B){return 1+~~(B.getUTCMonth()/3)}return{format:function(B){var ee=P(B+="",S);return ee.toString=function(){return B},ee},parse:function(B){var ee=N(B+="",!1);return ee.toString=function(){return B},ee},utcFormat:function(B){var ee=P(B+="",C);return ee.toString=function(){return B},ee},utcParse:function(B){var ee=N(B+="",!0);return ee.toString=function(){return B},ee}}}var Y1={"-":"",_:" ",0:"0"},nt=/^\s*\d+/,sI=/^%/,cI=/[\\^$*+?|[\]().{}]/g;function le(e,t,r){var n=e<0?"-":"",i=(n?-e:e)+"",a=i.length;return n+(a<r?new Array(r-a+1).join(t)+i:i)}function uI(e){return e.replace(cI,"\\$&")}function mo(e){return new RegExp("^(?:"+e.map(uI).join("|")+")","i")}function vo(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function dI(e,t,r){var n=nt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function fI(e,t,r){var n=nt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function pI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function hI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function mI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function q1(e,t,r){var n=nt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function X1(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function vI(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function gI(e,t,r){var n=nt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function yI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function Q1(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function bI(e,t,r){var n=nt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function J1(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function xI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function wI(e,t,r){var n=nt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function SI(e,t,r){var n=nt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function CI(e,t,r){var n=nt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function kI(e,t,r){var n=sI.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function PI(e,t,r){var n=nt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function NI(e,t,r){var n=nt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function Z1(e,t){return le(e.getDate(),t,2)}function EI(e,t){return le(e.getHours(),t,2)}function OI(e,t){return le(e.getHours()%12||12,t,2)}function AI(e,t){return le(1+Tl.count(fn(e),e),t,3)}function Ok(e,t){return le(e.getMilliseconds(),t,3)}function TI(e,t){return Ok(e,t)+"000"}function _I(e,t){return le(e.getMonth()+1,t,2)}function zI(e,t){return le(e.getMinutes(),t,2)}function MI(e,t){return le(e.getSeconds(),t,2)}function jI(e){var t=e.getDay();return t===0?7:t}function II(e,t){return le(Ju.count(fn(e)-1,e),t,2)}function Ak(e){var t=e.getDay();return t>=4||t===0?za(e):za.ceil(e)}function DI(e,t){return e=Ak(e),le(za.count(fn(e),e)+(fn(e).getDay()===4),t,2)}function RI(e){return e.getDay()}function LI(e,t){return le(Dc.count(fn(e)-1,e),t,2)}function $I(e,t){return le(e.getFullYear()%100,t,2)}function FI(e,t){return e=Ak(e),le(e.getFullYear()%100,t,2)}function BI(e,t){return le(e.getFullYear()%1e4,t,4)}function HI(e,t){var r=e.getDay();return e=r>=4||r===0?za(e):za.ceil(e),le(e.getFullYear()%1e4,t,4)}function UI(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+le(t/60|0,"0",2)+le(t%60,"0",2)}function eb(e,t){return le(e.getUTCDate(),t,2)}function KI(e,t){return le(e.getUTCHours(),t,2)}function WI(e,t){return le(e.getUTCHours()%12||12,t,2)}function VI(e,t){return le(1+Qu.count(pn(e),e),t,3)}function Tk(e,t){return le(e.getUTCMilliseconds(),t,3)}function GI(e,t){return Tk(e,t)+"000"}function YI(e,t){return le(e.getUTCMonth()+1,t,2)}function qI(e,t){return le(e.getUTCMinutes(),t,2)}function XI(e,t){return le(e.getUTCSeconds(),t,2)}function QI(e){var t=e.getUTCDay();return t===0?7:t}function JI(e,t){return le(Zu.count(pn(e)-1,e),t,2)}function _k(e){var t=e.getUTCDay();return t>=4||t===0?Ma(e):Ma.ceil(e)}function ZI(e,t){return e=_k(e),le(Ma.count(pn(e),e)+(pn(e).getUTCDay()===4),t,2)}function eD(e){return e.getUTCDay()}function tD(e,t){return le(Rc.count(pn(e)-1,e),t,2)}function rD(e,t){return le(e.getUTCFullYear()%100,t,2)}function nD(e,t){return e=_k(e),le(e.getUTCFullYear()%100,t,2)}function iD(e,t){return le(e.getUTCFullYear()%1e4,t,4)}function aD(e,t){var r=e.getUTCDay();return e=r>=4||r===0?Ma(e):Ma.ceil(e),le(e.getUTCFullYear()%1e4,t,4)}function oD(){return"+0000"}function tb(){return"%"}function rb(e){return+e}function nb(e){return Math.floor(+e/1e3)}var qi,zk,Mk;lD({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function lD(e){return qi=lI(e),zk=qi.format,qi.parse,Mk=qi.utcFormat,qi.utcParse,qi}function sD(e){return new Date(e)}function cD(e){return e instanceof Date?+e:+new Date(+e)}function jv(e,t,r,n,i,a,o,l,s,c){var u=xv(),d=u.invert,p=u.domain,h=c(".%L"),m=c(":%S"),v=c("%I:%M"),b=c("%I %p"),g=c("%a %d"),w=c("%b %d"),S=c("%B"),C=c("%Y");function k(P){return(s(P)<P?h:l(P)<P?m:o(P)<P?v:a(P)<P?b:n(P)<P?i(P)<P?g:w:r(P)<P?S:C)(P)}return u.invert=function(P){return new Date(d(P))},u.domain=function(P){return arguments.length?p(Array.from(P,cD)):p().map(sD)},u.ticks=function(P){var N=p();return e(N[0],N[N.length-1],P??10)},u.tickFormat=function(P,N){return N==null?k:c(N)},u.nice=function(P){var N=p();return(!P||typeof P.range!="function")&&(P=t(N[0],N[N.length-1],P??10)),P?p(bk(N,P)):u},u.copy=function(){return Al(u,jv(e,t,r,n,i,a,o,l,s,c))},u}function uD(){return yr.apply(jv(aI,oI,fn,zv,Ju,Tl,Tv,Ov,Ci,zk).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function dD(){return yr.apply(jv(nI,iI,pn,Mv,Zu,Qu,_v,Av,Ci,Mk).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function ed(){var e=0,t=1,r,n,i,a,o=Ct,l=!1,s;function c(d){return d==null||isNaN(d=+d)?s:o(i===0?.5:(d=(a(d)-r)*i,l?Math.max(0,Math.min(1,d)):d))}c.domain=function(d){return arguments.length?([e,t]=d,r=a(e=+e),n=a(t=+t),i=r===n?0:1/(n-r),c):[e,t]},c.clamp=function(d){return arguments.length?(l=!!d,c):l},c.interpolator=function(d){return arguments.length?(o=d,c):o};function u(d){return function(p){var h,m;return arguments.length?([h,m]=p,o=d(h,m),c):[o(0),o(1)]}}return c.range=u(Ka),c.rangeRound=u(bv),c.unknown=function(d){return arguments.length?(s=d,c):s},function(d){return a=d,r=d(e),n=d(t),i=r===n?0:1/(n-r),c}}function li(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function jk(){var e=oi(ed()(Ct));return e.copy=function(){return li(e,jk())},xn.apply(e,arguments)}function Ik(){var e=Cv(ed()).domain([1,10]);return e.copy=function(){return li(e,Ik()).base(e.base())},xn.apply(e,arguments)}function Dk(){var e=kv(ed());return e.copy=function(){return li(e,Dk()).constant(e.constant())},xn.apply(e,arguments)}function Iv(){var e=Pv(ed());return e.copy=function(){return li(e,Iv()).exponent(e.exponent())},xn.apply(e,arguments)}function fD(){return Iv.apply(null,arguments).exponent(.5)}function Rk(){var e=[],t=Ct;function r(n){if(n!=null&&!isNaN(n=+n))return t((El(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let i of n)i!=null&&!isNaN(i=+i)&&e.push(i);return e.sort(Vn),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,i)=>t(i/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(i,a)=>QM(e,a/n))},r.copy=function(){return Rk(t).domain(e)},xn.apply(r,arguments)}function td(){var e=0,t=.5,r=1,n=1,i,a,o,l,s,c=Ct,u,d=!1,p;function h(v){return isNaN(v=+v)?p:(v=.5+((v=+u(v))-a)*(n*v<n*a?l:s),c(d?Math.max(0,Math.min(1,v)):v))}h.domain=function(v){return arguments.length?([e,t,r]=v,i=u(e=+e),a=u(t=+t),o=u(r=+r),l=i===a?0:.5/(a-i),s=a===o?0:.5/(o-a),n=a<i?-1:1,h):[e,t,r]},h.clamp=function(v){return arguments.length?(d=!!v,h):d},h.interpolator=function(v){return arguments.length?(c=v,h):c};function m(v){return function(b){var g,w,S;return arguments.length?([g,w,S]=b,c=kj(v,[g,w,S]),h):[c(0),c(.5),c(1)]}}return h.range=m(Ka),h.rangeRound=m(bv),h.unknown=function(v){return arguments.length?(p=v,h):p},function(v){return u=v,i=v(e),a=v(t),o=v(r),l=i===a?0:.5/(a-i),s=a===o?0:.5/(o-a),n=a<i?-1:1,h}}function Lk(){var e=oi(td()(Ct));return e.copy=function(){return li(e,Lk())},xn.apply(e,arguments)}function $k(){var e=Cv(td()).domain([.1,1,10]);return e.copy=function(){return li(e,$k()).base(e.base())},xn.apply(e,arguments)}function Fk(){var e=kv(td());return e.copy=function(){return li(e,Fk()).constant(e.constant())},xn.apply(e,arguments)}function Dv(){var e=Pv(td());return e.copy=function(){return li(e,Dv()).exponent(e.exponent())},xn.apply(e,arguments)}function pD(){return Dv.apply(null,arguments).exponent(.5)}const Co=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:vv,scaleDiverging:Lk,scaleDivergingLog:$k,scaleDivergingPow:Dv,scaleDivergingSqrt:pD,scaleDivergingSymlog:Fk,scaleIdentity:yk,scaleImplicit:ch,scaleLinear:gk,scaleLog:xk,scaleOrdinal:mv,scalePoint:ej,scalePow:Nv,scaleQuantile:Ck,scaleQuantize:kk,scaleRadial:Sk,scaleSequential:jk,scaleSequentialLog:Ik,scaleSequentialPow:Iv,scaleSequentialQuantile:Rk,scaleSequentialSqrt:fD,scaleSequentialSymlog:Dk,scaleSqrt:Gj,scaleSymlog:wk,scaleThreshold:Pk,scaleTime:uD,scaleUtc:dD,tickFormat:vk},Symbol.toStringTag,{value:"Module"}));var si=e=>e.chartData,Rv=O([si],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),rd=(e,t,r,n)=>n?Rv(e):si(e);function ja(e){if(Array.isArray(e)&&e.length===2){var[t,r]=e;if(Qt(t)&&Qt(r))return!0}return!1}function ib(e,t,r){return r?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function hD(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[r,n]=e,i,a;if(Qt(r))i=r;else if(typeof r=="function")return;if(Qt(n))a=n;else if(typeof n=="function")return;var o=[i,a];if(ja(o))return o}}function mD(e,t,r){if(!(!r&&t==null)){if(typeof e=="function"&&t!=null)try{var n=e(t,r);if(ja(n))return ib(n,t,r)}catch{}if(Array.isArray(e)&&e.length===2){var[i,a]=e,o,l;if(i==="auto")t!=null&&(o=Math.min(...t));else if(H(i))o=i;else if(typeof i=="function")try{t!=null&&(o=i(t==null?void 0:t[0]))}catch{}else if(typeof i=="string"&&r1.test(i)){var s=r1.exec(i);if(s==null||t==null)o=void 0;else{var c=+s[1];o=t[0]-c}}else o=t==null?void 0:t[0];if(a==="auto")t!=null&&(l=Math.max(...t));else if(H(a))l=a;else if(typeof a=="function")try{t!=null&&(l=a(t==null?void 0:t[1]))}catch{}else if(typeof a=="string"&&n1.test(a)){var u=n1.exec(a);if(u==null||t==null)l=void 0;else{var d=+u[1];l=t[1]+d}}else l=t==null?void 0:t[1];var p=[o,l];if(ja(p))return t==null?p:ib(p,t,r)}}}var Wa=1e9,vD={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},$v,Ee=!0,vr="[DecimalError] ",Ti=vr+"Invalid argument: ",Lv=vr+"Exponent out of range: ",Va=Math.floor,vi=Math.pow,gD=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Ht,Ze=1e7,Se=7,Bk=9007199254740991,Lc=Va(Bk/Se),K={};K.absoluteValue=K.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};K.comparedTo=K.cmp=function(e){var t,r,n,i,a=this;if(e=new a.constructor(e),a.s!==e.s)return a.s||-e.s;if(a.e!==e.e)return a.e>e.e^a.s<0?1:-1;for(n=a.d.length,i=e.d.length,t=0,r=n<i?n:i;t<r;++t)if(a.d[t]!==e.d[t])return a.d[t]>e.d[t]^a.s<0?1:-1;return n===i?0:n>i^a.s<0?1:-1};K.decimalPlaces=K.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Se;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};K.dividedBy=K.div=function(e){return an(this,new this.constructor(e))};K.dividedToIntegerBy=K.idiv=function(e){var t=this,r=t.constructor;return ge(an(t,new r(e),0,1),r.precision)};K.equals=K.eq=function(e){return!this.cmp(e)};K.exponent=function(){return Ue(this)};K.greaterThan=K.gt=function(e){return this.cmp(e)>0};K.greaterThanOrEqualTo=K.gte=function(e){return this.cmp(e)>=0};K.isInteger=K.isint=function(){return this.e>this.d.length-2};K.isNegative=K.isneg=function(){return this.s<0};K.isPositive=K.ispos=function(){return this.s>0};K.isZero=function(){return this.s===0};K.lessThan=K.lt=function(e){return this.cmp(e)<0};K.lessThanOrEqualTo=K.lte=function(e){return this.cmp(e)<1};K.logarithm=K.log=function(e){var t,r=this,n=r.constructor,i=n.precision,a=i+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(Ht))throw Error(vr+"NaN");if(r.s<1)throw Error(vr+(r.s?"NaN":"-Infinity"));return r.eq(Ht)?new n(0):(Ee=!1,t=an(hl(r,a),hl(e,a),a),Ee=!0,ge(t,i))};K.minus=K.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?Kk(t,e):Hk(t,(e.s=-e.s,e))};K.modulo=K.mod=function(e){var t,r=this,n=r.constructor,i=n.precision;if(e=new n(e),!e.s)throw Error(vr+"NaN");return r.s?(Ee=!1,t=an(r,e,0,1).times(e),Ee=!0,r.minus(t)):ge(new n(r),i)};K.naturalExponential=K.exp=function(){return Uk(this)};K.naturalLogarithm=K.ln=function(){return hl(this)};K.negated=K.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};K.plus=K.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?Hk(t,e):Kk(t,(e.s=-e.s,e))};K.precision=K.sd=function(e){var t,r,n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Ti+e);if(t=Ue(i)+1,n=i.d.length-1,r=n*Se+1,n=i.d[n],n){for(;n%10==0;n/=10)r--;for(n=i.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};K.squareRoot=K.sqrt=function(){var e,t,r,n,i,a,o,l=this,s=l.constructor;if(l.s<1){if(!l.s)return new s(0);throw Error(vr+"NaN")}for(e=Ue(l),Ee=!1,i=Math.sqrt(+l),i==0||i==1/0?(t=Lr(l.d),(t.length+e)%2==0&&(t+="0"),i=Math.sqrt(t),e=Va((e+1)/2)-(e<0||e%2),i==1/0?t="5e"+e:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new s(t)):n=new s(i.toString()),r=s.precision,i=o=r+3;;)if(a=n,n=a.plus(an(l,a,o+2)).times(.5),Lr(a.d).slice(0,o)===(t=Lr(n.d)).slice(0,o)){if(t=t.slice(o-3,o+1),i==o&&t=="4999"){if(ge(a,r+1,0),a.times(a).eq(l)){n=a;break}}else if(t!="9999")break;o+=4}return Ee=!0,ge(n,r)};K.times=K.mul=function(e){var t,r,n,i,a,o,l,s,c,u=this,d=u.constructor,p=u.d,h=(e=new d(e)).d;if(!u.s||!e.s)return new d(0);for(e.s*=u.s,r=u.e+e.e,s=p.length,c=h.length,s<c&&(a=p,p=h,h=a,o=s,s=c,c=o),a=[],o=s+c,n=o;n--;)a.push(0);for(n=c;--n>=0;){for(t=0,i=s+n;i>n;)l=a[i]+h[n]*p[i-n-1]+t,a[i--]=l%Ze|0,t=l/Ze|0;a[i]=(a[i]+t)%Ze|0}for(;!a[--o];)a.pop();return t?++r:a.shift(),e.d=a,e.e=r,Ee?ge(e,d.precision):e};K.toDecimalPlaces=K.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(Ur(e,0,Wa),t===void 0?t=n.rounding:Ur(t,0,8),ge(r,e+Ue(r)+1,t))};K.toExponential=function(e,t){var r,n=this,i=n.constructor;return e===void 0?r=$i(n,!0):(Ur(e,0,Wa),t===void 0?t=i.rounding:Ur(t,0,8),n=ge(new i(n),e+1,t),r=$i(n,!0,e+1)),r};K.toFixed=function(e,t){var r,n,i=this,a=i.constructor;return e===void 0?$i(i):(Ur(e,0,Wa),t===void 0?t=a.rounding:Ur(t,0,8),n=ge(new a(i),e+Ue(i)+1,t),r=$i(n.abs(),!1,e+Ue(n)+1),i.isneg()&&!i.isZero()?"-"+r:r)};K.toInteger=K.toint=function(){var e=this,t=e.constructor;return ge(new t(e),Ue(e)+1,t.rounding)};K.toNumber=function(){return+this};K.toPower=K.pow=function(e){var t,r,n,i,a,o,l=this,s=l.constructor,c=12,u=+(e=new s(e));if(!e.s)return new s(Ht);if(l=new s(l),!l.s){if(e.s<1)throw Error(vr+"Infinity");return l}if(l.eq(Ht))return l;if(n=s.precision,e.eq(Ht))return ge(l,n);if(t=e.e,r=e.d.length-1,o=t>=r,a=l.s,o){if((r=u<0?-u:u)<=Bk){for(i=new s(Ht),t=Math.ceil(n/Se+4),Ee=!1;r%2&&(i=i.times(l),ob(i.d,t)),r=Va(r/2),r!==0;)l=l.times(l),ob(l.d,t);return Ee=!0,e.s<0?new s(Ht).div(i):ge(i,n)}}else if(a<0)throw Error(vr+"NaN");return a=a<0&&e.d[Math.max(t,r)]&1?-1:1,l.s=1,Ee=!1,i=e.times(hl(l,n+c)),Ee=!0,i=Uk(i),i.s=a,i};K.toPrecision=function(e,t){var r,n,i=this,a=i.constructor;return e===void 0?(r=Ue(i),n=$i(i,r<=a.toExpNeg||r>=a.toExpPos)):(Ur(e,1,Wa),t===void 0?t=a.rounding:Ur(t,0,8),i=ge(new a(i),e,t),r=Ue(i),n=$i(i,e<=r||r<=a.toExpNeg,e)),n};K.toSignificantDigits=K.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(Ur(e,1,Wa),t===void 0?t=n.rounding:Ur(t,0,8)),ge(new n(r),e,t)};K.toString=K.valueOf=K.val=K.toJSON=K[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=Ue(e),r=e.constructor;return $i(e,t<=r.toExpNeg||t>=r.toExpPos)};function Hk(e,t){var r,n,i,a,o,l,s,c,u=e.constructor,d=u.precision;if(!e.s||!t.s)return t.s||(t=new u(e)),Ee?ge(t,d):t;if(s=e.d,c=t.d,o=e.e,i=t.e,s=s.slice(),a=o-i,a){for(a<0?(n=s,a=-a,l=c.length):(n=c,i=o,l=s.length),o=Math.ceil(d/Se),l=o>l?o+1:l+1,a>l&&(a=l,n.length=1),n.reverse();a--;)n.push(0);n.reverse()}for(l=s.length,a=c.length,l-a<0&&(a=l,n=c,c=s,s=n),r=0;a;)r=(s[--a]=s[a]+c[a]+r)/Ze|0,s[a]%=Ze;for(r&&(s.unshift(r),++i),l=s.length;s[--l]==0;)s.pop();return t.d=s,t.e=i,Ee?ge(t,d):t}function Ur(e,t,r){if(e!==~~e||e<t||e>r)throw Error(Ti+e)}function Lr(e){var t,r,n,i=e.length-1,a="",o=e[0];if(i>0){for(a+=o,t=1;t<i;t++)n=e[t]+"",r=Se-n.length,r&&(a+=An(r)),a+=n;o=e[t],n=o+"",r=Se-n.length,r&&(a+=An(r))}else if(o===0)return"0";for(;o%10===0;)o/=10;return a+o}var an=function(){function e(n,i){var a,o=0,l=n.length;for(n=n.slice();l--;)a=n[l]*i+o,n[l]=a%Ze|0,o=a/Ze|0;return o&&n.unshift(o),n}function t(n,i,a,o){var l,s;if(a!=o)s=a>o?1:-1;else for(l=s=0;l<a;l++)if(n[l]!=i[l]){s=n[l]>i[l]?1:-1;break}return s}function r(n,i,a){for(var o=0;a--;)n[a]-=o,o=n[a]<i[a]?1:0,n[a]=o*Ze+n[a]-i[a];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,a,o){var l,s,c,u,d,p,h,m,v,b,g,w,S,C,k,P,N,A,E=n.constructor,_=n.s==i.s?1:-1,z=n.d,M=i.d;if(!n.s)return new E(n);if(!i.s)throw Error(vr+"Division by zero");for(s=n.e-i.e,N=M.length,k=z.length,h=new E(_),m=h.d=[],c=0;M[c]==(z[c]||0);)++c;if(M[c]>(z[c]||0)&&--s,a==null?w=a=E.precision:o?w=a+(Ue(n)-Ue(i))+1:w=a,w<0)return new E(0);if(w=w/Se+2|0,c=0,N==1)for(u=0,M=M[0],w++;(c<k||u)&&w--;c++)S=u*Ze+(z[c]||0),m[c]=S/M|0,u=S%M|0;else{for(u=Ze/(M[0]+1)|0,u>1&&(M=e(M,u),z=e(z,u),N=M.length,k=z.length),C=N,v=z.slice(0,N),b=v.length;b<N;)v[b++]=0;A=M.slice(),A.unshift(0),P=M[0],M[1]>=Ze/2&&++P;do u=0,l=t(M,v,N,b),l<0?(g=v[0],N!=b&&(g=g*Ze+(v[1]||0)),u=g/P|0,u>1?(u>=Ze&&(u=Ze-1),d=e(M,u),p=d.length,b=v.length,l=t(d,v,p,b),l==1&&(u--,r(d,N<p?A:M,p))):(u==0&&(l=u=1),d=M.slice()),p=d.length,p<b&&d.unshift(0),r(v,d,b),l==-1&&(b=v.length,l=t(M,v,N,b),l<1&&(u++,r(v,N<b?A:M,b))),b=v.length):l===0&&(u++,v=[0]),m[c++]=u,l&&v[0]?v[b++]=z[C]||0:(v=[z[C]],b=1);while((C++<k||v[0]!==void 0)&&w--)}return m[0]||m.shift(),h.e=s,ge(h,o?a+Ue(h)+1:a)}}();function Uk(e,t){var r,n,i,a,o,l,s=0,c=0,u=e.constructor,d=u.precision;if(Ue(e)>16)throw Error(Lv+Ue(e));if(!e.s)return new u(Ht);for(t==null?(Ee=!1,l=d):l=t,o=new u(.03125);e.abs().gte(.1);)e=e.times(o),c+=5;for(n=Math.log(vi(2,c))/Math.LN10*2+5|0,l+=n,r=i=a=new u(Ht),u.precision=l;;){if(i=ge(i.times(e),l),r=r.times(++s),o=a.plus(an(i,r,l)),Lr(o.d).slice(0,l)===Lr(a.d).slice(0,l)){for(;c--;)a=ge(a.times(a),l);return u.precision=d,t==null?(Ee=!0,ge(a,d)):a}a=o}}function Ue(e){for(var t=e.e*Se,r=e.d[0];r>=10;r/=10)t++;return t}function vf(e,t,r){if(t>e.LN10.sd())throw Ee=!0,r&&(e.precision=r),Error(vr+"LN10 precision limit exceeded");return ge(new e(e.LN10),t)}function An(e){for(var t="";e--;)t+="0";return t}function hl(e,t){var r,n,i,a,o,l,s,c,u,d=1,p=10,h=e,m=h.d,v=h.constructor,b=v.precision;if(h.s<1)throw Error(vr+(h.s?"NaN":"-Infinity"));if(h.eq(Ht))return new v(0);if(t==null?(Ee=!1,c=b):c=t,h.eq(10))return t==null&&(Ee=!0),vf(v,c);if(c+=p,v.precision=c,r=Lr(m),n=r.charAt(0),a=Ue(h),Math.abs(a)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)h=h.times(e),r=Lr(h.d),n=r.charAt(0),d++;a=Ue(h),n>1?(h=new v("0."+r),a++):h=new v(n+"."+r.slice(1))}else return s=vf(v,c+2,b).times(a+""),h=hl(new v(n+"."+r.slice(1)),c-p).plus(s),v.precision=b,t==null?(Ee=!0,ge(h,b)):h;for(l=o=h=an(h.minus(Ht),h.plus(Ht),c),u=ge(h.times(h),c),i=3;;){if(o=ge(o.times(u),c),s=l.plus(an(o,new v(i),c)),Lr(s.d).slice(0,c)===Lr(l.d).slice(0,c))return l=l.times(2),a!==0&&(l=l.plus(vf(v,c+2,b).times(a+""))),l=an(l,new v(d),c),v.precision=b,t==null?(Ee=!0,ge(l,b)):l;l=s,i+=2}}function ab(e,t){var r,n,i;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(i=t.length;t.charCodeAt(i-1)===48;)--i;if(t=t.slice(n,i),t){if(i-=n,r=r-n-1,e.e=Va(r/Se),e.d=[],n=(r+1)%Se,r<0&&(n+=Se),n<i){for(n&&e.d.push(+t.slice(0,n)),i-=Se;n<i;)e.d.push(+t.slice(n,n+=Se));t=t.slice(n),n=Se-t.length}else n-=i;for(;n--;)t+="0";if(e.d.push(+t),Ee&&(e.e>Lc||e.e<-Lc))throw Error(Lv+r)}else e.s=0,e.e=0,e.d=[0];return e}function ge(e,t,r){var n,i,a,o,l,s,c,u,d=e.d;for(o=1,a=d[0];a>=10;a/=10)o++;if(n=t-o,n<0)n+=Se,i=t,c=d[u=0];else{if(u=Math.ceil((n+1)/Se),a=d.length,u>=a)return e;for(c=a=d[u],o=1;a>=10;a/=10)o++;n%=Se,i=n-Se+o}if(r!==void 0&&(a=vi(10,o-i-1),l=c/a%10|0,s=t<0||d[u+1]!==void 0||c%a,s=r<4?(l||s)&&(r==0||r==(e.s<0?3:2)):l>5||l==5&&(r==4||s||r==6&&(n>0?i>0?c/vi(10,o-i):0:d[u-1])%10&1||r==(e.s<0?8:7))),t<1||!d[0])return s?(a=Ue(e),d.length=1,t=t-a-1,d[0]=vi(10,(Se-t%Se)%Se),e.e=Va(-t/Se)||0):(d.length=1,d[0]=e.e=e.s=0),e;if(n==0?(d.length=u,a=1,u--):(d.length=u+1,a=vi(10,Se-n),d[u]=i>0?(c/vi(10,o-i)%vi(10,i)|0)*a:0),s)for(;;)if(u==0){(d[0]+=a)==Ze&&(d[0]=1,++e.e);break}else{if(d[u]+=a,d[u]!=Ze)break;d[u--]=0,a=1}for(n=d.length;d[--n]===0;)d.pop();if(Ee&&(e.e>Lc||e.e<-Lc))throw Error(Lv+Ue(e));return e}function Kk(e,t){var r,n,i,a,o,l,s,c,u,d,p=e.constructor,h=p.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new p(e),Ee?ge(t,h):t;if(s=e.d,d=t.d,n=t.e,c=e.e,s=s.slice(),o=c-n,o){for(u=o<0,u?(r=s,o=-o,l=d.length):(r=d,n=c,l=s.length),i=Math.max(Math.ceil(h/Se),l)+2,o>i&&(o=i,r.length=1),r.reverse(),i=o;i--;)r.push(0);r.reverse()}else{for(i=s.length,l=d.length,u=i<l,u&&(l=i),i=0;i<l;i++)if(s[i]!=d[i]){u=s[i]<d[i];break}o=0}for(u&&(r=s,s=d,d=r,t.s=-t.s),l=s.length,i=d.length-l;i>0;--i)s[l++]=0;for(i=d.length;i>o;){if(s[--i]<d[i]){for(a=i;a&&s[--a]===0;)s[a]=Ze-1;--s[a],s[i]+=Ze}s[i]-=d[i]}for(;s[--l]===0;)s.pop();for(;s[0]===0;s.shift())--n;return s[0]?(t.d=s,t.e=n,Ee?ge(t,h):t):new p(0)}function $i(e,t,r){var n,i=Ue(e),a=Lr(e.d),o=a.length;return t?(r&&(n=r-o)>0?a=a.charAt(0)+"."+a.slice(1)+An(n):o>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(i<0?"e":"e+")+i):i<0?(a="0."+An(-i-1)+a,r&&(n=r-o)>0&&(a+=An(n))):i>=o?(a+=An(i+1-o),r&&(n=r-i-1)>0&&(a=a+"."+An(n))):((n=i+1)<o&&(a=a.slice(0,n)+"."+a.slice(n)),r&&(n=r-o)>0&&(i+1===o&&(a+="."),a+=An(n))),e.s<0?"-"+a:a}function ob(e,t){if(e.length>t)return e.length=t,!0}function Wk(e){var t,r,n;function i(a){var o=this;if(!(o instanceof i))return new i(a);if(o.constructor=i,a instanceof i){o.s=a.s,o.e=a.e,o.d=(a=a.d)?a.slice():a;return}if(typeof a=="number"){if(a*0!==0)throw Error(Ti+a);if(a>0)o.s=1;else if(a<0)a=-a,o.s=-1;else{o.s=0,o.e=0,o.d=[0];return}if(a===~~a&&a<1e7){o.e=0,o.d=[a];return}return ab(o,a.toString())}else if(typeof a!="string")throw Error(Ti+a);if(a.charCodeAt(0)===45?(a=a.slice(1),o.s=-1):o.s=1,gD.test(a))ab(o,a);else throw Error(Ti+a)}if(i.prototype=K,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.clone=Wk,i.config=i.set=yD,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return i.config(e),i}function yD(e){if(!e||typeof e!="object")throw Error(vr+"Object expected");var t,r,n,i=["precision",1,Wa,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<i.length;t+=3)if((n=e[r=i[t]])!==void 0)if(Va(n)===n&&n>=i[t+1]&&n<=i[t+2])this[r]=n;else throw Error(Ti+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(Ti+r+": "+n);return this}var $v=Wk(vD);Ht=new $v(1);const de=$v;var bD=e=>e,Vk={"@@functional/placeholder":!0},Gk=e=>e===Vk,lb=e=>function t(){return arguments.length===0||arguments.length===1&&Gk(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},Yk=(e,t)=>e===1?t:lb(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var a=n.filter(o=>o!==Vk).length;return a>=e?t(...n):Yk(e-a,lb(function(){for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];var c=n.map(u=>Gk(u)?l.shift():u);return t(...c,...l)}))}),nd=e=>Yk(e.length,e),ph=(e,t)=>{for(var r=[],n=e;n<t;++n)r[n-e]=n;return r},xD=nd((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(r=>t[r]).map(e)),wD=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return bD;var i=r.reverse(),a=i[0],o=i.slice(1);return function(){return o.reduce((l,s)=>s(l),a(...arguments))}},hh=e=>Array.isArray(e)?e.reverse():e.split("").reverse().join(""),qk=e=>{var t=null,r=null;return function(){for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t&&i.every((o,l)=>{var s;return o===((s=t)===null||s===void 0?void 0:s[l])})||(t=i,r=e(...i)),r}};function Xk(e){var t;return e===0?t=1:t=Math.floor(new de(e).abs().log(10).toNumber())+1,t}function Qk(e,t,r){for(var n=new de(e),i=0,a=[];n.lt(t)&&i<1e5;)a.push(n.toNumber()),n=n.add(r),i++;return a}nd((e,t,r)=>{var n=+e,i=+t;return n+r*(i-n)});nd((e,t,r)=>{var n=t-+e;return n=n||1/0,(r-e)/n});nd((e,t,r)=>{var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});var Jk=e=>{var[t,r]=e,[n,i]=[t,r];return t>r&&([n,i]=[r,t]),[n,i]},Zk=(e,t,r)=>{if(e.lte(0))return new de(0);var n=Xk(e.toNumber()),i=new de(10).pow(n),a=e.div(i),o=n!==1?.05:.1,l=new de(Math.ceil(a.div(o).toNumber())).add(r).mul(o),s=l.mul(i);return t?new de(s.toNumber()):new de(Math.ceil(s.toNumber()))},SD=(e,t,r)=>{var n=new de(1),i=new de(e);if(!i.isint()&&r){var a=Math.abs(e);a<1?(n=new de(10).pow(Xk(e)-1),i=new de(Math.floor(i.div(n).toNumber())).mul(n)):a>1&&(i=new de(Math.floor(e)))}else e===0?i=new de(Math.floor((t-1)/2)):r||(i=new de(Math.floor(e)));var o=Math.floor((t-1)/2),l=wD(xD(s=>i.add(new de(s-o).mul(n)).toNumber()),ph);return l(0,t)},eP=function(t,r,n,i){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((r-t)/(n-1)))return{step:new de(0),tickMin:new de(0),tickMax:new de(0)};var o=Zk(new de(r).sub(t).div(n-1),i,a),l;t<=0&&r>=0?l=new de(0):(l=new de(t).add(r).div(2),l=l.sub(new de(l).mod(o)));var s=Math.ceil(l.sub(t).div(o).toNumber()),c=Math.ceil(new de(r).sub(l).div(o).toNumber()),u=s+c+1;return u>n?eP(t,r,n,i,a+1):(u<n&&(c=r>0?c+(n-u):c,s=r>0?s:s+(n-u)),{step:o,tickMin:l.sub(new de(s).mul(o)),tickMax:l.add(new de(c).mul(o))})};function CD(e){var[t,r]=e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=Math.max(n,2),[o,l]=Jk([t,r]);if(o===-1/0||l===1/0){var s=l===1/0?[o,...ph(0,n-1).map(()=>1/0)]:[...ph(0,n-1).map(()=>-1/0),l];return t>r?hh(s):s}if(o===l)return SD(o,n,i);var{step:c,tickMin:u,tickMax:d}=eP(o,l,a,i,0),p=Qk(u,d.add(new de(.1).mul(c)),c);return t>r?hh(p):p}function kD(e,t){var[r,n]=e,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[a,o]=Jk([r,n]);if(a===-1/0||o===1/0)return[r,n];if(a===o)return[a];var l=Math.max(t,2),s=Zk(new de(o).sub(a).div(l-1),i,0),c=[...Qk(new de(a),new de(o),s),o];return i===!1&&(c=c.map(u=>Math.round(u))),r>n?hh(c):c}var PD=qk(CD),ND=qk(kD),tP=e=>e.rootProps.maxBarSize,ED=e=>e.rootProps.barGap,rP=e=>e.rootProps.barCategoryGap,OD=e=>e.rootProps.barSize,_l=e=>e.rootProps.stackOffset,Fv=e=>e.options.chartName,Bv=e=>e.rootProps.syncId,nP=e=>e.rootProps.syncMethod,Hv=e=>e.options.eventEmitter,Yr={allowDuplicatedCategory:!0,angleAxisId:0,axisLine:!0,cx:0,cy:0,orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"category"},Ft={allowDataOverflow:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,cx:0,cy:0,orientation:"right",radiusAxisId:0,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,type:"number"},id=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},AD={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:Yr.angleAxisId,includeHidden:!1,name:void 0,reversed:Yr.reversed,scale:Yr.scale,tick:Yr.tick,tickCount:void 0,ticks:void 0,type:Yr.type,unit:void 0},TD={allowDataOverflow:Ft.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Ft.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Ft.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Ft.scale,tick:Ft.tick,tickCount:Ft.tickCount,ticks:void 0,type:Ft.type,unit:void 0},_D={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:Yr.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Yr.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Yr.scale,tick:Yr.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},zD={allowDataOverflow:Ft.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Ft.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Ft.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Ft.scale,tick:Ft.tick,tickCount:Ft.tickCount,ticks:void 0,type:"category",unit:void 0},Uv=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?_D:AD,Kv=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?zD:TD,ad=e=>e.polarOptions,Wv=O([yn,bn,Ye],OC),iP=O([ad,Wv],(e,t)=>{if(e!=null)return Pt(e.innerRadius,t,0)}),aP=O([ad,Wv],(e,t)=>{if(e!=null)return Pt(e.outerRadius,t,t*.8)}),MD=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:r}=e;return[t,r]},oP=O([ad],MD);O([Uv,oP],id);var lP=O([Wv,iP,aP],(e,t,r)=>{if(!(e==null||t==null||r==null))return[t,r]});O([Kv,lP],id);var sP=O([ie,ad,iP,aP,yn,bn],(e,t,r,n,i,a)=>{if(!(e!=="centric"&&e!=="radial"||t==null||r==null||n==null)){var{cx:o,cy:l,startAngle:s,endAngle:c}=t;return{cx:Pt(o,i,i/2),cy:Pt(l,a,a/2),innerRadius:r,outerRadius:n,startAngle:s,endAngle:c,clockWise:!1}}}),Oe=(e,t)=>t,zl=(e,t,r)=>r;function Vv(e){return e==null?void 0:e.id}var Xe=e=>{var t=ie(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},Ga=e=>e.tooltip.settings.axisId,Qe=e=>{var t=Xe(e),r=Ga(e);return Ml(e,t,r)};function cP(e,t,r){var{chartData:n=[]}=t,i=r==null?void 0:r.dataKey,a=new Map;return e.forEach(o=>{var l,s=(l=o.data)!==null&&l!==void 0?l:n;if(!(s==null||s.length===0)){var c=Vv(o);s.forEach((u,d)=>{var p=i==null?d:String(ve(u,i,null)),h=ve(u,o.dataKey,0),m;a.has(p)?m=a.get(p):m={},Object.assign(m,{[c]:h}),a.set(p,m)})}}),Array.from(a.values())}function od(e){return e.stackId!=null&&e.dataKey!=null}function sb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sb(Object(r),!0).forEach(function(n){jD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jD(e,t,r){return(t=ID(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ID(e){var t=DD(e,"string");return typeof t=="symbol"?t:t+""}function DD(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mh=[0,"auto"],Rt={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},wn=(e,t)=>{var r=e.cartesianAxis.xAxis[t];return r??Rt},Lt={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:mh,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:Vu},ci=(e,t)=>{var r=e.cartesianAxis.yAxis[t];return r??Lt},RD={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},Gv=(e,t)=>{var r=e.cartesianAxis.zAxis[t];return r??RD},Re=(e,t,r)=>{switch(t){case"xAxis":return wn(e,r);case"yAxis":return ci(e,r);case"zAxis":return Gv(e,r);case"angleAxis":return Uv(e,r);case"radiusAxis":return Kv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},LD=(e,t,r)=>{switch(t){case"xAxis":return wn(e,r);case"yAxis":return ci(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},Ml=(e,t,r)=>{switch(t){case"xAxis":return wn(e,r);case"yAxis":return ci(e,r);case"angleAxis":return Uv(e,r);case"radiusAxis":return Kv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},uP=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function Yv(e,t){return r=>{switch(e){case"xAxis":return"xAxisId"in r&&r.xAxisId===t;case"yAxis":return"yAxisId"in r&&r.yAxisId===t;case"zAxis":return"zAxisId"in r&&r.zAxisId===t;case"angleAxis":return"angleAxisId"in r&&r.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in r&&r.radiusAxisId===t;default:return!1}}}var ld=e=>e.graphicalItems.cartesianItems,$D=O([Oe,zl],Yv),qv=(e,t,r)=>e.filter(r).filter(n=>(t==null?void 0:t.includeHidden)===!0?!0:!n.hide),jl=O([ld,Re,$D],qv),dP=O([jl],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(od)),fP=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),pP=O([jl],fP),Xv=e=>e.map(t=>t.data).filter(Boolean).flat(1),FD=O([jl],Xv),Qv=(e,t)=>{var{chartData:r=[],dataStartIndex:n,dataEndIndex:i}=t;return e.length>0?e:r.slice(n,i+1)},Jv=O([FD,rd],Qv),Zv=(e,t,r)=>(t==null?void 0:t.dataKey)!=null?e.map(n=>({value:ve(n,t.dataKey)})):r.length>0?r.map(n=>n.dataKey).flatMap(n=>e.map(i=>({value:ve(i,n)}))):e.map(n=>({value:n})),sd=O([Jv,Re,jl],Zv);function hP(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function Gi(e){return e.filter(t=>Hr(t)||t instanceof Date).map(Number).filter(t=>Yt(t)===!1)}function BD(e,t,r){return!r||typeof t!="number"||Yt(t)?[]:r.length?Gi(r.flatMap(n=>{var i=ve(e,n.dataKey),a,o;if(Array.isArray(i)?[a,o]=i:a=o=i,!(!Qt(a)||!Qt(o)))return[t-a,t+o]})):[]}var HD=O([dP,rd,Qe],cP),mP=(e,t,r)=>{var n={},i=t.reduce((a,o)=>(o.stackId==null||(a[o.stackId]==null&&(a[o.stackId]=[]),a[o.stackId].push(o)),a),n);return Object.fromEntries(Object.entries(i).map(a=>{var[o,l]=a,s=l.map(Vv);return[o,{stackedData:fz(e,s,r),graphicalItems:l}]}))},vh=O([HD,dP,_l],mP),vP=(e,t,r)=>{var{dataStartIndex:n,dataEndIndex:i}=t;if(r!=="zAxis"){var a=gz(e,n,i);if(!(a!=null&&a[0]===0&&a[1]===0))return a}},UD=O([vh,si,Oe],vP),gP=(e,t,r,n,i)=>r.length>0?e.flatMap(a=>r.flatMap(o=>{var l,s,c=(l=n[o.id])===null||l===void 0?void 0:l.filter(d=>hP(i,d)),u=ve(a,(s=t.dataKey)!==null&&s!==void 0?s:o.dataKey);return{value:u,errorDomain:BD(a,u,c)}})).filter(Boolean):(t==null?void 0:t.dataKey)!=null?e.map(a=>({value:ve(a,t.dataKey),errorDomain:[]})):e.map(a=>({value:a,errorDomain:[]})),cd=e=>e.errorBars,yP=(e,t,r)=>e.flatMap(n=>t[n.id]).filter(Boolean).filter(n=>hP(r,n));O([pP,cd,Oe],yP);var KD=O([Jv,Re,pP,cd,Oe],gP);function WD(e){var{value:t}=e;if(Hr(t)||t instanceof Date)return t}var cb=e=>{var t=e.flatMap(n=>[n.value,n.errorDomain]).flat(1),r=Gi(t);if(r.length!==0)return[Math.min(...r),Math.max(...r)]},VD=(e,t,r)=>{var n=e.map(WD).filter(i=>i!=null);return r&&(t.dataKey==null||t.allowDuplicatedCategory&&uS(n))?ok(0,e.length):t.allowDuplicatedCategory?n:Array.from(new Set(n))},eg=e=>{var t;if(e==null||!("domain"in e))return mh;if(e.domain!=null)return e.domain;if(e.ticks!=null){if(e.type==="number"){var r=Gi(e.ticks);return[Math.min(...r),Math.max(...r)]}if(e.type==="category")return e.ticks.map(String)}return(t=e==null?void 0:e.domain)!==null&&t!==void 0?t:mh},Fc=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var i=r.filter(Boolean);if(i.length!==0){var a=i.flat(),o=Math.min(...a),l=Math.max(...a);return[o,l]}},bP=e=>e.referenceElements.dots,Ya=(e,t,r)=>e.filter(n=>n.ifOverflow==="extendDomain").filter(n=>t==="xAxis"?n.xAxisId===r:n.yAxisId===r),GD=O([bP,Oe,zl],Ya),xP=e=>e.referenceElements.areas,YD=O([xP,Oe,zl],Ya),wP=e=>e.referenceElements.lines,qD=O([wP,Oe,zl],Ya),SP=(e,t)=>{var r=Gi(e.map(n=>t==="xAxis"?n.x:n.y));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},XD=O(GD,Oe,SP),CP=(e,t)=>{var r=Gi(e.flatMap(n=>[t==="xAxis"?n.x1:n.y1,t==="xAxis"?n.x2:n.y2]));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},QD=O([YD,Oe],CP),kP=(e,t)=>{var r=Gi(e.map(n=>t==="xAxis"?n.x:n.y));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},JD=O(qD,Oe,kP),ZD=O(XD,JD,QD,(e,t,r)=>Fc(e,r,t)),PP=O([Re],eg),tg=(e,t,r,n,i,a,o)=>{var l=hD(t,e.allowDataOverflow);if(l!=null)return l;var s=a==="vertical"&&o==="xAxis"||a==="horizontal"&&o==="yAxis",c=s?Fc(r,i,cb(n)):Fc(i,cb(n));return mD(t,c,e.allowDataOverflow)},e7=O([Re,PP,UD,KD,ZD,ie,Oe],tg),t7=[0,1],rg=(e,t,r,n,i,a,o)=>{if(!((e==null||r==null||r.length===0)&&o===void 0)){var{dataKey:l,type:s}=e,c=ai(t,a);return c&&l==null?ok(0,r.length):s==="category"?VD(n,e,c):i==="expand"?t7:o}},ng=O([Re,ie,Jv,sd,_l,Oe,e7],rg),NP=(e,t,r,n,i)=>{if(e!=null){var{scale:a,type:o}=e;if(a==="auto")return t==="radial"&&i==="radiusAxis"?"band":t==="radial"&&i==="angleAxis"?"linear":o==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?"point":o==="category"?"band":"linear";if(typeof a=="string"){var l="scale".concat(kl(a));return l in Co?l:"point"}}},qa=O([Re,ie,uP,Fv,Oe],NP);function r7(e){if(e!=null){if(e in Co)return Co[e]();var t="scale".concat(kl(e));if(t in Co)return Co[t]()}}function ig(e,t,r,n){if(!(r==null||n==null)){if(typeof e.scale=="function")return e.scale.copy().domain(r).range(n);var i=r7(t);if(i!=null){var a=i.domain(r).range(n);return lz(a),a}}}var ag=(e,t,r)=>{var n=eg(t);if(!(r!=="auto"&&r!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(n)&&(n[0]==="auto"||n[1]==="auto")&&ja(e))return PD(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&ja(e))return ND(e,t.tickCount,t.allowDecimals)}},og=O([ng,Ml,qa],ag),lg=(e,t,r,n)=>{if(n!=="angleAxis"&&(e==null?void 0:e.type)==="number"&&ja(t)&&Array.isArray(r)&&r.length>0){var i=t[0],a=r[0],o=t[1],l=r[r.length-1];return[Math.min(i,a),Math.max(o,l)]}return t},n7=O([Re,ng,og,Oe],lg),i7=O(sd,Re,(e,t)=>{if(!(!t||t.type!=="number")){var r=1/0,n=Array.from(Gi(e.map(l=>l.value))).sort((l,s)=>l-s);if(n.length<2)return 1/0;var i=n[n.length-1]-n[0];if(i===0)return 1/0;for(var a=0;a<n.length-1;a++){var o=n[a+1]-n[a];r=Math.min(r,o)}return r/i}}),EP=O(i7,ie,rP,Ye,(e,t,r,n)=>n,(e,t,r,n,i)=>{if(!Qt(e))return 0;var a=t==="vertical"?n.height:n.width;if(i==="gap")return e*a/2;if(i==="no-gap"){var o=Pt(r,e*a),l=e*a/2;return l-o-(l-o)/a*o}return 0}),a7=(e,t)=>{var r=wn(e,t);return r==null||typeof r.padding!="string"?0:EP(e,"xAxis",t,r.padding)},o7=(e,t)=>{var r=ci(e,t);return r==null||typeof r.padding!="string"?0:EP(e,"yAxis",t,r.padding)},l7=O(wn,a7,(e,t)=>{var r,n;if(e==null)return{left:0,right:0};var{padding:i}=e;return typeof i=="string"?{left:t,right:t}:{left:((r=i.left)!==null&&r!==void 0?r:0)+t,right:((n=i.right)!==null&&n!==void 0?n:0)+t}}),s7=O(ci,o7,(e,t)=>{var r,n;if(e==null)return{top:0,bottom:0};var{padding:i}=e;return typeof i=="string"?{top:t,bottom:t}:{top:((r=i.top)!==null&&r!==void 0?r:0)+t,bottom:((n=i.bottom)!==null&&n!==void 0?n:0)+t}}),c7=O([Ye,l7,Yu,Gu,(e,t,r)=>r],(e,t,r,n,i)=>{var{padding:a}=n;return i?[a.left,r.width-a.right]:[e.left+t.left,e.left+e.width-t.right]}),u7=O([Ye,ie,s7,Yu,Gu,(e,t,r)=>r],(e,t,r,n,i,a)=>{var{padding:o}=i;return a?[n.height-o.bottom,o.top]:t==="horizontal"?[e.top+e.height-r.bottom,e.top+r.top]:[e.top+r.top,e.top+e.height-r.bottom]}),Il=(e,t,r,n)=>{var i;switch(t){case"xAxis":return c7(e,r,n);case"yAxis":return u7(e,r,n);case"zAxis":return(i=Gv(e,r))===null||i===void 0?void 0:i.range;case"angleAxis":return oP(e);case"radiusAxis":return lP(e,r);default:return}},OP=O([Re,Il],id),Xa=O([Re,qa,n7,OP],ig);O([jl,cd,Oe],yP);function AP(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var ud=(e,t)=>t,dd=(e,t,r)=>r,d7=O(cv,ud,dd,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(AP)),f7=O(uv,ud,dd,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(AP)),TP=(e,t)=>({width:e.width,height:t.height}),p7=(e,t)=>{var r=typeof t.width=="number"?t.width:Vu;return{width:r,height:e.height}},_P=O(Ye,wn,TP),h7=(e,t,r)=>{switch(t){case"top":return e.top;case"bottom":return r-e.bottom;default:return 0}},m7=(e,t,r)=>{switch(t){case"left":return e.left;case"right":return r-e.right;default:return 0}},v7=O(bn,Ye,d7,ud,dd,(e,t,r,n,i)=>{var a={},o;return r.forEach(l=>{var s=TP(t,l);o==null&&(o=h7(t,n,e));var c=n==="top"&&!i||n==="bottom"&&i;a[l.id]=o-Number(c)*s.height,o+=(c?-1:1)*s.height}),a}),g7=O(yn,Ye,f7,ud,dd,(e,t,r,n,i)=>{var a={},o;return r.forEach(l=>{var s=p7(t,l);o==null&&(o=m7(t,n,e));var c=n==="left"&&!i||n==="right"&&i;a[l.id]=o-Number(c)*s.width,o+=(c?-1:1)*s.width}),a}),y7=(e,t)=>{var r=Ye(e),n=wn(e,t);if(n!=null){var i=v7(e,n.orientation,n.mirror),a=i[t];return a==null?{x:r.left,y:0}:{x:r.left,y:a}}},b7=(e,t)=>{var r=Ye(e),n=ci(e,t);if(n!=null){var i=g7(e,n.orientation,n.mirror),a=i[t];return a==null?{x:0,y:r.top}:{x:a,y:r.top}}},zP=O(Ye,ci,(e,t)=>{var r=typeof t.width=="number"?t.width:Vu;return{width:r,height:e.height}}),ub=(e,t,r)=>{switch(t){case"xAxis":return _P(e,r).width;case"yAxis":return zP(e,r).height;default:return}},MP=(e,t,r,n)=>{if(r!=null){var{allowDuplicatedCategory:i,type:a,dataKey:o}=r,l=ai(e,n),s=t.map(c=>c.value);if(o&&l&&a==="category"&&i&&uS(s))return s}},sg=O([ie,sd,Re,Oe],MP),jP=(e,t,r,n)=>{if(!(r==null||r.dataKey==null)){var{type:i,scale:a}=r,o=ai(e,n);if(o&&(i==="number"||a!=="auto"))return t.map(l=>l.value)}},cg=O([ie,sd,Ml,Oe],jP),db=O([ie,LD,qa,Xa,sg,cg,Il,og,Oe],(e,t,r,n,i,a,o,l,s)=>{if(t==null)return null;var c=ai(e,s);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:s,categoricalDomain:a,duplicateDomain:i,isCategorical:c,niceTicks:l,range:o,realScaleType:r,scale:n}}),x7=(e,t,r,n,i,a,o,l,s)=>{if(!(t==null||n==null)){var c=ai(e,s),{type:u,ticks:d,tickCount:p}=t,h=r==="scaleBand"&&typeof n.bandwidth=="function"?n.bandwidth()/2:2,m=u==="category"&&n.bandwidth?n.bandwidth()/h:0;m=s==="angleAxis"&&a!=null&&a.length>=2?tt(a[0]-a[1])*2*m:m;var v=d||i;if(v){var b=v.map((g,w)=>{var S=o?o.indexOf(g):g;return{index:w,coordinate:n(S)+m,value:g,offset:m}});return b.filter(g=>!Yt(g.coordinate))}return c&&l?l.map((g,w)=>({coordinate:n(g)+m,value:g,index:w,offset:m})):n.ticks?n.ticks(p).map(g=>({coordinate:n(g)+m,value:g,offset:m})):n.domain().map((g,w)=>({coordinate:n(g)+m,value:o?o[g]:g,index:w,offset:m}))}},IP=O([ie,Ml,qa,Xa,og,Il,sg,cg,Oe],x7),w7=(e,t,r,n,i,a,o)=>{if(!(t==null||r==null||n==null||n[0]===n[1])){var l=ai(e,o),{tickCount:s}=t,c=0;return c=o==="angleAxis"&&(n==null?void 0:n.length)>=2?tt(n[0]-n[1])*2*c:c,l&&a?a.map((u,d)=>({coordinate:r(u)+c,value:u,index:d,offset:c})):r.ticks?r.ticks(s).map(u=>({coordinate:r(u)+c,value:u,offset:c})):r.domain().map((u,d)=>({coordinate:r(u)+c,value:i?i[u]:u,index:d,offset:c}))}},Jn=O([ie,Ml,Xa,Il,sg,cg,Oe],w7),Zn=O(Re,Xa,(e,t)=>{if(!(e==null||t==null))return $c($c({},e),{},{scale:t})}),S7=O([Re,qa,ng,OP],ig);O((e,t,r)=>Gv(e,r),S7,(e,t)=>{if(!(e==null||t==null))return $c($c({},e),{},{scale:t})});var C7=O([ie,cv,uv],(e,t,r)=>{switch(e){case"horizontal":return t.some(n=>n.reversed)?"right-to-left":"left-to-right";case"vertical":return r.some(n=>n.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),DP=e=>e.options.defaultTooltipEventType,RP=e=>e.options.validateTooltipEventTypes;function LP(e,t,r){if(e==null)return t;var n=e?"axis":"item";return r==null?t:r.includes(n)?n:t}function ug(e,t){var r=DP(e),n=RP(e);return LP(t,r,n)}function k7(e){return W(t=>ug(t,e))}var $P=(e,t)=>{var r,n=Number(t);if(!(Yt(n)||t==null))return n>=0?e==null||(r=e[n])===null||r===void 0?void 0:r.value:void 0},P7=e=>e.tooltip.settings,zn={active:!1,index:null,dataKey:void 0,coordinate:void 0},N7={itemInteraction:{click:zn,hover:zn},axisInteraction:{click:zn,hover:zn},keyboardInteraction:zn,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},FP=er({name:"tooltip",initialState:N7,reducers:{addTooltipEntrySettings(e,t){e.tooltipItemPayloads.push(t.payload)},removeTooltipEntrySettings(e,t){var r=nn(e).tooltipItemPayloads.indexOf(t.payload);r>-1&&e.tooltipItemPayloads.splice(r,1)},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate,e.keyboardInteraction.dataKey=t.payload.activeDataKey}}}),{addTooltipEntrySettings:E7,removeTooltipEntrySettings:O7,setTooltipSettingsState:A7,setActiveMouseOverItemIndex:BP,mouseLeaveItem:T7,mouseLeaveChart:HP,setActiveClickItemIndex:_7,setMouseOverAxisIndex:UP,setMouseClickAxisIndex:z7,setSyncInteraction:gh,setKeyboardInteraction:yh}=FP.actions,M7=FP.reducer;function fb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ms(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?fb(Object(r),!0).forEach(function(n){j7(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j7(e,t,r){return(t=I7(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I7(e){var t=D7(e,"string");return typeof t=="symbol"?t:t+""}function D7(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R7(e,t,r){return t==="axis"?r==="click"?e.axisInteraction.click:e.axisInteraction.hover:r==="click"?e.itemInteraction.click:e.itemInteraction.hover}function L7(e){return e.index!=null}var KP=(e,t,r,n)=>{if(t==null)return zn;var i=R7(e,t,r);if(i==null)return zn;if(i.active)return i;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var a=e.settings.active===!0;if(L7(i)){if(a)return ms(ms({},i),{},{active:!0})}else if(n!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:n};return ms(ms({},zn),{},{coordinate:i.coordinate})},dg=(e,t)=>{var r=e==null?void 0:e.index;if(r==null)return null;var n=Number(r);if(!Qt(n))return r;var i=0,a=1/0;return t.length>0&&(a=t.length-1),String(Math.max(i,Math.min(n,a)))},WP=(e,t,r,n,i,a,o,l)=>{if(!(a==null||l==null)){var s=o[0],c=s==null?void 0:l(s.positions,a);if(c!=null)return c;var u=i==null?void 0:i[Number(a)];if(u)switch(r){case"horizontal":return{x:u.coordinate,y:(n.top+t)/2};default:return{x:(n.left+e)/2,y:u.coordinate}}}},VP=(e,t,r,n)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var i;return r==="hover"?i=e.itemInteraction.hover.dataKey:i=e.itemInteraction.click.dataKey,i==null&&n!=null?[e.tooltipItemPayloads[0]]:e.tooltipItemPayloads.filter(a=>{var o;return((o=a.settings)===null||o===void 0?void 0:o.dataKey)===i})},Dl=e=>e.options.tooltipPayloadSearcher,Qa=e=>e.tooltip;function pb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function hb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?pb(Object(r),!0).forEach(function(n){$7(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function $7(e,t,r){return(t=F7(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F7(e){var t=B7(e,"string");return typeof t=="symbol"?t:t+""}function B7(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function H7(e,t){return e??t}var GP=(e,t,r,n,i,a,o)=>{if(!(t==null||a==null)){var{chartData:l,computedData:s,dataStartIndex:c,dataEndIndex:u}=r,d=[];return e.reduce((p,h)=>{var m,{dataDefinedOnItem:v,settings:b}=h,g=H7(v,l),w=Array.isArray(g)?AC(g,c,u):g,S=(m=b==null?void 0:b.dataKey)!==null&&m!==void 0?m:n==null?void 0:n.dataKey,C=b==null?void 0:b.nameKey,k;if(n!=null&&n.dataKey&&Array.isArray(w)&&!Array.isArray(w[0])&&o==="axis"?k=dS(w,n.dataKey,i):k=a(w,t,s,C),Array.isArray(k))k.forEach(N=>{var A=hb(hb({},b),{},{name:N.name,unit:N.unit,color:void 0,fill:void 0});p.push(i1({tooltipEntrySettings:A,dataKey:N.dataKey,payload:N.payload,value:ve(N.payload,N.dataKey),name:N.name}))});else{var P;p.push(i1({tooltipEntrySettings:b,dataKey:S,payload:k,value:ve(k,S),name:(P=ve(k,C))!==null&&P!==void 0?P:b==null?void 0:b.name}))}return p},d)}},fg=O([Qe,ie,uP,Fv,Xe],NP),U7=O([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),K7=O([Xe,Ga],Yv),Rl=O([U7,Qe,K7],qv),W7=O([Rl],e=>e.filter(od)),V7=O([Rl],Xv),Ja=O([V7,si],Qv),G7=O([W7,si,Qe],cP),pg=O([Ja,Qe,Rl],Zv),Y7=O([Qe],eg),q7=O([Rl],e=>e.filter(od)),X7=O([G7,q7,_l],mP),Q7=O([X7,si,Xe],vP),J7=O([Rl],fP),Z7=O([Ja,Qe,J7,cd,Xe],gP),eR=O([bP,Xe,Ga],Ya),tR=O([eR,Xe],SP),rR=O([xP,Xe,Ga],Ya),nR=O([rR,Xe],CP),iR=O([wP,Xe,Ga],Ya),aR=O([iR,Xe],kP),oR=O([tR,aR,nR],Fc),lR=O([Qe,Y7,Q7,Z7,oR,ie,Xe],tg),YP=O([Qe,ie,Ja,pg,_l,Xe,lR],rg),sR=O([YP,Qe,fg],ag),cR=O([Qe,YP,sR,Xe],lg),qP=e=>{var t=Xe(e),r=Ga(e),n=!1;return Il(e,t,r,n)},XP=O([Qe,qP],id),QP=O([Qe,fg,cR,XP],ig),uR=O([ie,pg,Qe,Xe],MP),dR=O([ie,pg,Qe,Xe],jP),fR=(e,t,r,n,i,a,o,l)=>{if(t){var{type:s}=t,c=ai(e,l);if(n){var u=r==="scaleBand"&&n.bandwidth?n.bandwidth()/2:2,d=s==="category"&&n.bandwidth?n.bandwidth()/u:0;return d=l==="angleAxis"&&i!=null&&(i==null?void 0:i.length)>=2?tt(i[0]-i[1])*2*d:d,c&&o?o.map((p,h)=>({coordinate:n(p)+d,value:p,index:h,offset:d})):n.domain().map((p,h)=>({coordinate:n(p)+d,value:a?a[p]:p,index:h,offset:d}))}}},Sn=O([ie,Qe,fg,QP,qP,uR,dR,Xe],fR),hg=O([DP,RP,P7],(e,t,r)=>LP(r.shared,e,t)),JP=e=>e.tooltip.settings.trigger,mg=e=>e.tooltip.settings.defaultIndex,fd=O([Qa,hg,JP,mg],KP),ei=O([fd,Ja],dg),ZP=O([Sn,ei],$P),e5=O([fd],e=>{if(e)return e.dataKey}),t5=O([Qa,hg,JP,mg],VP),pR=O([yn,bn,ie,Ye,Sn,mg,t5,Dl],WP),hR=O([fd,pR],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),mR=O([fd],e=>e.active),vR=O([t5,ei,si,Qe,ZP,Dl,hg],GP),gR=O([vR],e=>{if(e!=null){var t=e.map(r=>r.payload).filter(r=>r!=null);return Array.from(new Set(t))}});function mb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function vb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mb(Object(r),!0).forEach(function(n){yR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yR(e,t,r){return(t=bR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bR(e){var t=xR(e,"string");return typeof t=="symbol"?t:t+""}function xR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var wR=()=>W(Qe),SR=()=>{var e=wR(),t=W(Sn),r=W(QP);return sl(vb(vb({},e),{},{scale:r}),t)},CR=()=>W(Fv),vg=(e,t)=>t,r5=(e,t,r)=>r,gg=(e,t,r,n)=>n,kR=O(Sn,e=>$u(e,t=>t.coordinate)),yg=O([Qa,vg,r5,gg],KP),n5=O([yg,Ja],dg),PR=(e,t,r)=>{if(t!=null){var n=Qa(e);return t==="axis"?r==="hover"?n.axisInteraction.hover.dataKey:n.axisInteraction.click.dataKey:r==="hover"?n.itemInteraction.hover.dataKey:n.itemInteraction.click.dataKey}},i5=O([Qa,vg,r5,gg],VP),Bc=O([yn,bn,ie,Ye,Sn,gg,i5,Dl],WP),NR=O([yg,Bc],(e,t)=>{var r;return(r=e.coordinate)!==null&&r!==void 0?r:t}),a5=O(Sn,n5,$P),ER=O([i5,n5,si,Qe,a5,Dl,vg],GP),OR=O([yg],e=>({isActive:e.active,activeIndex:e.index})),AR=(e,t,r,n,i,a,o,l)=>{if(!(!e||!t||!n||!i||!a)){var s=yz(e.chartX,e.chartY,t,r,l);if(s){var c=xz(s,t),u=az(c,o,a,n,i),d=bz(t,a,u,s);return{activeIndex:String(u),activeCoordinate:d}}}};function bh(){return bh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bh.apply(null,arguments)}function gb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function vs(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gb(Object(r),!0).forEach(function(n){TR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function TR(e,t,r){return(t=_R(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _R(e){var t=zR(e,"string");return typeof t=="symbol"?t:t+""}function zR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function MR(e){var{coordinate:t,payload:r,index:n,offset:i,tooltipAxisBandSize:a,layout:o,cursor:l,tooltipEventType:s,chartName:c}=e,u=t,d=r,p=n;if(!l||!u||c!=="ScatterChart"&&s!=="axis")return null;var h,m;if(c==="ScatterChart")h=u,m=nM;else if(c==="BarChart")h=iM(o,u,i,a),m=ZC;else if(o==="radial"){var{cx:v,cy:b,radius:g,startAngle:w,endAngle:S}=ek(u);h={cx:v,cy:b,startAngle:w,endAngle:S,innerRadius:g,outerRadius:g},m=rk}else h={points:RM(o,u,i)},m=fv;var C=typeof l=="object"&&"className"in l?l.className:void 0,k=vs(vs(vs(vs({stroke:"#ccc",pointerEvents:"none"},i),h),Ne(l,!1)),{},{payload:d,payloadIndex:p,className:se("recharts-tooltip-cursor",C)});return y.isValidElement(l)?y.cloneElement(l,k):y.createElement(m,k)}function jR(e){var t=SR(),r=DC(),n=qu(),i=CR();return y.createElement(MR,bh({},e,{coordinate:e.coordinate,index:e.index,payload:e.payload,offset:r,layout:n,tooltipAxisBandSize:t,chartName:i}))}var o5=y.createContext(null),IR=()=>y.useContext(o5),xh={},DR={get exports(){return xh},set exports(e){xh=e}};(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function i(s,c,u){this.fn=s,this.context=c,this.once=u||!1}function a(s,c,u,d,p){if(typeof u!="function")throw new TypeError("The listener must be a function");var h=new i(u,d||s,p),m=r?r+c:c;return s._events[m]?s._events[m].fn?s._events[m]=[s._events[m],h]:s._events[m].push(h):(s._events[m]=h,s._eventsCount++),s}function o(s,c){--s._eventsCount===0?s._events=new n:delete s._events[c]}function l(){this._events=new n,this._eventsCount=0}l.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)t.call(u,d)&&c.push(r?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},l.prototype.listeners=function(c){var u=r?r+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,h=d.length,m=new Array(h);p<h;p++)m[p]=d[p].fn;return m},l.prototype.listenerCount=function(c){var u=r?r+c:c,d=this._events[u];return d?d.fn?1:d.length:0},l.prototype.emit=function(c,u,d,p,h,m){var v=r?r+c:c;if(!this._events[v])return!1;var b=this._events[v],g=arguments.length,w,S;if(b.fn){switch(b.once&&this.removeListener(c,b.fn,void 0,!0),g){case 1:return b.fn.call(b.context),!0;case 2:return b.fn.call(b.context,u),!0;case 3:return b.fn.call(b.context,u,d),!0;case 4:return b.fn.call(b.context,u,d,p),!0;case 5:return b.fn.call(b.context,u,d,p,h),!0;case 6:return b.fn.call(b.context,u,d,p,h,m),!0}for(S=1,w=new Array(g-1);S<g;S++)w[S-1]=arguments[S];b.fn.apply(b.context,w)}else{var C=b.length,k;for(S=0;S<C;S++)switch(b[S].once&&this.removeListener(c,b[S].fn,void 0,!0),g){case 1:b[S].fn.call(b[S].context);break;case 2:b[S].fn.call(b[S].context,u);break;case 3:b[S].fn.call(b[S].context,u,d);break;case 4:b[S].fn.call(b[S].context,u,d,p);break;default:if(!w)for(k=1,w=new Array(g-1);k<g;k++)w[k-1]=arguments[k];b[S].fn.apply(b[S].context,w)}}return!0},l.prototype.on=function(c,u,d){return a(this,c,u,d,!1)},l.prototype.once=function(c,u,d){return a(this,c,u,d,!0)},l.prototype.removeListener=function(c,u,d,p){var h=r?r+c:c;if(!this._events[h])return this;if(!u)return o(this,h),this;var m=this._events[h];if(m.fn)m.fn===u&&(!p||m.once)&&(!d||m.context===d)&&o(this,h);else{for(var v=0,b=[],g=m.length;v<g;v++)(m[v].fn!==u||p&&!m[v].once||d&&m[v].context!==d)&&b.push(m[v]);b.length?this._events[h]=b.length===1?b[0]:b:o(this,h)}return this},l.prototype.removeAllListeners=function(c){var u;return c?(u=r?r+c:c,this._events[u]&&o(this,u)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=r,l.EventEmitter=l,e.exports=l})(DR);const RR=xh;var ml=new RR,wh="recharts.syncEvent.tooltip",yb="recharts.syncEvent.brush";function bg(e,t){if(t){var r=Number.parseInt(t,10);if(!Yt(r))return e==null?void 0:e[r]}}var LR={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},l5=er({name:"options",initialState:LR,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),$R=l5.reducer,{createEventEmitter:FR}=l5.actions;function BR(e){return e.tooltip.syncInteraction}var HR={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},s5=er({name:"chartData",initialState:HR,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:r,endIndex:n}=t.payload;r!=null&&(e.dataStartIndex=r),n!=null&&(e.dataEndIndex=n)}}}),{setChartData:bb,setDataStartEndIndexes:UR,setComputedData:IU}=s5.actions,KR=s5.reducer,c5=()=>{};function WR(){var e=W(Bv),t=W(Hv),r=De(),n=W(nP),i=W(Sn),a=qu(),o=dv(),l=W(s=>s.rootProps.className);y.useEffect(()=>{if(e==null)return c5;var s=(c,u,d)=>{if(t!==d&&e===c){if(n==="index"){r(u);return}if(i!=null){var p;if(typeof n=="function"){var h={activeTooltipIndex:u.payload.index==null?void 0:Number(u.payload.index),isTooltipActive:u.payload.active,activeIndex:u.payload.index==null?void 0:Number(u.payload.index),activeLabel:u.payload.label,activeDataKey:u.payload.dataKey,activeCoordinate:u.payload.coordinate},m=n(i,h);p=i[m]}else n==="value"&&(p=i.find(P=>String(P.value)===u.payload.label));var{coordinate:v}=u.payload;if(p==null||u.payload.active===!1||v==null||o==null){r(gh({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0}));return}var{x:b,y:g}=v,w=Math.min(b,o.x+o.width),S=Math.min(g,o.y+o.height),C={x:a==="horizontal"?p.coordinate:w,y:a==="horizontal"?S:p.coordinate},k=gh({active:u.payload.active,coordinate:C,dataKey:u.payload.dataKey,index:String(p.index),label:u.payload.label});r(k)}}};return ml.on(wh,s),()=>{ml.off(wh,s)}},[l,r,t,e,n,i,a,o])}function VR(){var e=W(Bv),t=W(Hv),r=De();y.useEffect(()=>{if(e==null)return c5;var n=(i,a,o)=>{t!==o&&e===i&&r(UR(a))};return ml.on(yb,n),()=>{ml.off(yb,n)}},[r,t,e])}function GR(){var e=De();y.useEffect(()=>{e(FR())},[e]),WR(),VR()}function YR(e,t,r,n,i,a){var o=W(p=>PR(p,e,t)),l=W(Hv),s=W(Bv),c=W(nP),u=W(BR),d=u==null?void 0:u.active;y.useEffect(()=>{if(!d&&s!=null&&l!=null){var p=gh({active:a,coordinate:r,dataKey:o,index:i,label:typeof n=="number"?String(n):n});ml.emit(wh,s,p,l)}},[d,r,o,i,n,l,s,c,a])}function xb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function wb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xb(Object(r),!0).forEach(function(n){qR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qR(e,t,r){return(t=XR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XR(e){var t=QR(e,"string");return typeof t=="symbol"?t:t+""}function QR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JR(e){return e.dataKey}function ZR(e,t){return y.isValidElement(e)?y.cloneElement(e,t):typeof e=="function"?y.createElement(e,t):y.createElement(Iz,t)}var Sb=[],eL={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!Ki.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function gf(e){var t=tr(e,eL),{active:r,allowEscapeViewBox:n,animationDuration:i,animationEasing:a,content:o,filterNull:l,isAnimationActive:s,offset:c,payloadUniqBy:u,position:d,reverseDirection:p,useTranslate3d:h,wrapperStyle:m,cursor:v,shared:b,trigger:g,defaultIndex:w,portal:S,axisId:C}=t,k=De(),P=typeof w=="number"?String(w):w;y.useEffect(()=>{k(A7({shared:b,trigger:g,axisId:C,active:r,defaultIndex:P}))},[k,b,g,C,r,P]);var N=dv(),A=HC(),E=k7(b),{activeIndex:_,isActive:z}=W(ue=>OR(ue,E,g,P)),M=W(ue=>ER(ue,E,g,P)),G=W(ue=>a5(ue,E,g,P)),Z=W(ue=>NR(ue,E,g,P)),D=M,L=IR(),q=r??z,[R,$]=q_([D,q]),V=E==="axis"?G:void 0;YR(E,g,Z,V,_,q);var X=S??L;if(X==null)return null;var F=D??Sb;q||(F=Sb),l&&F.length&&(F=p_(D.filter(ue=>ue.value!=null&&(ue.hide!==!0||t.includeHidden)),u,JR));var Le=F.length>0,ce=y.createElement(Hz,{allowEscapeViewBox:n,animationDuration:i,animationEasing:a,isAnimationActive:s,active:q,coordinate:Z,hasPayload:Le,offset:c,position:d,reverseDirection:p,useTranslate3d:h,viewBox:N,wrapperStyle:m,lastBoundingBox:R,innerRef:$,hasPortalFromProps:!!S},ZR(o,wb(wb({},t),{},{payload:F,label:V,active:q,coordinate:Z,accessibilityLayer:A})));return y.createElement(y.Fragment,null,Ds.createPortal(ce,X),q&&y.createElement(jR,{cursor:v,tooltipEventType:E,coordinate:Z,payload:D,index:_}))}var u5={},d5={},f5={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n,{signal:i,edges:a}={}){let o,l=null;const s=a!=null&&a.includes("leading"),c=a==null||a.includes("trailing"),u=()=>{l!==null&&(r.apply(o,l),o=void 0,l=null)},d=()=>{c&&u(),v()};let p=null;const h=()=>{p!=null&&clearTimeout(p),p=setTimeout(()=>{p=null,d()},n)},m=()=>{p!==null&&(clearTimeout(p),p=null)},v=()=>{m(),o=void 0,l=null},b=()=>{u()},g=function(...w){if(i!=null&&i.aborted)return;o=this,l=w;const S=p==null;h(),s&&S&&u()};return g.schedule=h,g.cancel=v,g.flush=b,i==null||i.addEventListener("abort",v,{once:!0}),g}e.debounce=t})(f5);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=f5;function r(n,i=0,a={}){typeof a!="object"&&(a={});const{leading:o=!1,trailing:l=!0,maxWait:s}=a,c=Array(2);o&&(c[0]="leading"),l&&(c[1]="trailing");let u,d=null;const p=t.debounce(function(...v){u=n.apply(this,v),d=null},i,{edges:c}),h=function(...v){return s!=null&&(d===null&&(d=Date.now()),Date.now()-d>=s)?(u=n.apply(this,v),d=Date.now(),p.cancel(),p.schedule(),u):(p.apply(this,v),u)},m=()=>(p.flush(),u);return h.cancel=p.cancel,h.flush=m,h}e.debounce=r})(d5);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=d5;function r(n,i=0,a={}){const{leading:o=!0,trailing:l=!0}=a;return t.debounce(n,i,{leading:o,maxWait:i,trailing:l})}e.throttle=r})(u5);var tL=u5.throttle;const rL=tL;var Do=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a]};function Cb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function yf(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Cb(Object(r),!0).forEach(function(n){nL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Cb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function nL(e,t,r){return(t=iL(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iL(e){var t=aL(e,"string");return typeof t=="symbol"?t:t+""}function aL(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bf=y.forwardRef((e,t)=>{var{aspect:r,initialDimension:n={width:-1,height:-1},width:i="100%",height:a="100%",minWidth:o=0,minHeight:l,maxHeight:s,children:c,debounce:u=0,id:d,className:p,onResize:h,style:m={}}=e,v=y.useRef(null),b=y.useRef();b.current=h,y.useImperativeHandle(t,()=>v.current);var[g,w]=y.useState({containerWidth:n.width,containerHeight:n.height}),S=y.useCallback((k,P)=>{w(N=>{var A=Math.round(k),E=Math.round(P);return N.containerWidth===A&&N.containerHeight===E?N:{containerWidth:A,containerHeight:E}})},[]);y.useEffect(()=>{var k=E=>{var _,{width:z,height:M}=E[0].contentRect;S(z,M),(_=b.current)===null||_===void 0||_.call(b,z,M)};u>0&&(k=rL(k,u,{trailing:!0,leading:!1}));var P=new ResizeObserver(k),{width:N,height:A}=v.current.getBoundingClientRect();return S(N,A),P.observe(v.current),()=>{P.disconnect()}},[S,u]);var C=y.useMemo(()=>{var{containerWidth:k,containerHeight:P}=g;if(k<0||P<0)return null;Do(xi(i)||xi(a),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,i,a),Do(!r||r>0,"The aspect(%s) must be greater than zero.",r);var N=xi(i)?k:i,A=xi(a)?P:a;return r&&r>0&&(N?A=N/r:A&&(N=A*r),s&&A>s&&(A=s)),Do(N>0||A>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,N,A,i,a,o,l,r),y.Children.map(c,E=>y.cloneElement(E,{width:N,height:A,style:yf({width:N,height:A},E.props.style)}))},[r,c,a,s,l,o,g,i]);return y.createElement("div",{id:d?"".concat(d):void 0,className:se("recharts-responsive-container",p),style:yf(yf({},m),{},{width:i,height:a,minWidth:o,minHeight:l,maxHeight:s}),ref:v},y.createElement("div",{style:{width:0,height:0,overflow:"visible"}},C))}),Ll=e=>null;Ll.displayName="Cell";function oL(e,t,r){return(t=lL(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lL(e){var t=sL(e,"string");return typeof t=="symbol"?t:t+""}function sL(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class cL{constructor(t){oL(this,"cache",new Map),this.maxSize=t}get(t){var r=this.cache.get(t);return r!==void 0&&(this.cache.delete(t),this.cache.set(t,r)),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;this.cache.delete(n)}this.cache.set(t,r)}clear(){this.cache.clear()}size(){return this.cache.size}}function kb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function uL(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?kb(Object(r),!0).forEach(function(n){dL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):kb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function dL(e,t,r){return(t=fL(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function fL(e){var t=pL(e,"string");return typeof t=="symbol"?t:t+""}function pL(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var hL={cacheSize:2e3,enableCache:!0},p5=uL({},hL),Pb=new cL(p5.cacheSize),mL={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},Nb="recharts_measurement_span";function vL(e,t){var r=t.fontSize||"",n=t.fontFamily||"",i=t.fontWeight||"",a=t.fontStyle||"",o=t.letterSpacing||"",l=t.textTransform||"";return"".concat(e,"|").concat(r,"|").concat(n,"|").concat(i,"|").concat(a,"|").concat(o,"|").concat(l)}var Eb=(e,t)=>{try{var r=document.getElementById(Nb);r||(r=document.createElement("span"),r.setAttribute("id",Nb),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),Object.assign(r.style,mL,t),r.textContent="".concat(e);var n=r.getBoundingClientRect();return{width:n.width,height:n.height}}catch{return{width:0,height:0}}},Ro=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Ki.isSsr)return{width:0,height:0};if(!p5.enableCache)return Eb(t,r);var n=vL(t,r),i=Pb.get(n);if(i)return i;var a=Eb(t,r);return Pb.set(n,a),a},Ob=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,Ab=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,gL=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,yL=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,h5={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},bL=Object.keys(h5),ca="NaN";function xL(e,t){return e*h5[t]}class Ot{static parse(t){var r,[,n,i]=(r=yL.exec(t))!==null&&r!==void 0?r:[];return new Ot(parseFloat(n),i??"")}constructor(t,r){this.num=t,this.unit=r,this.num=t,this.unit=r,Yt(t)&&(this.unit=""),r!==""&&!gL.test(r)&&(this.num=NaN,this.unit=""),bL.includes(r)&&(this.num=xL(t,r),this.unit="px")}add(t){return this.unit!==t.unit?new Ot(NaN,""):new Ot(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new Ot(NaN,""):new Ot(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new Ot(NaN,""):new Ot(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new Ot(NaN,""):new Ot(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return Yt(this.num)}}function m5(e){if(e.includes(ca))return ca;for(var t=e;t.includes("*")||t.includes("/");){var r,[,n,i,a]=(r=Ob.exec(t))!==null&&r!==void 0?r:[],o=Ot.parse(n??""),l=Ot.parse(a??""),s=i==="*"?o.multiply(l):o.divide(l);if(s.isNaN())return ca;t=t.replace(Ob,s.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var c,[,u,d,p]=(c=Ab.exec(t))!==null&&c!==void 0?c:[],h=Ot.parse(u??""),m=Ot.parse(p??""),v=d==="+"?h.add(m):h.subtract(m);if(v.isNaN())return ca;t=t.replace(Ab,v.toString())}return t}var Tb=/\(([^()]*)\)/;function wL(e){for(var t=e,r;(r=Tb.exec(t))!=null;){var[,n]=r;t=t.replace(Tb,m5(n))}return t}function SL(e){var t=e.replace(/\s+/g,"");return t=wL(t),t=m5(t),t}function CL(e){try{return SL(e)}catch{return ca}}function xf(e){var t=CL(e.slice(5,-1));return t===ca?"":t}var kL=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],PL=["dx","dy","angle","className","breakAll"];function Sh(){return Sh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sh.apply(null,arguments)}function _b(e,t){if(e==null)return{};var r,n,i=NL(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function NL(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var v5=/[ \f\n\r\t\v\u2028\u2029]+/,g5=e=>{var{children:t,breakAll:r,style:n}=e;try{var i=[];ke(t)||(r?i=t.toString().split(""):i=t.toString().split(v5));var a=i.map(l=>({word:l,width:Ro(l,n).width})),o=r?0:Ro(" ",n).width;return{wordsWithComputedWidth:a,spaceWidth:o}}catch{return null}},EL=(e,t,r,n,i)=>{var{maxLines:a,children:o,style:l,breakAll:s}=e,c=H(a),u=o,d=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return z.reduce((M,G)=>{var{word:Z,width:D}=G,L=M[M.length-1];if(L&&(n==null||i||L.width+D+r<Number(n)))L.words.push(Z),L.width+=D+r;else{var q={words:[Z],width:D};M.push(q)}return M},[])},p=d(t),h=_=>_.reduce((z,M)=>z.width>M.width?z:M);if(!c||i)return p;var m=p.length>a||h(p).width>Number(n);if(!m)return p;for(var v="…",b=_=>{var z=u.slice(0,_),M=g5({breakAll:s,style:l,children:z+v}).wordsWithComputedWidth,G=d(M),Z=G.length>a||h(G).width>Number(n);return[Z,G]},g=0,w=u.length-1,S=0,C;g<=w&&S<=u.length-1;){var k=Math.floor((g+w)/2),P=k-1,[N,A]=b(P),[E]=b(k);if(!N&&!E&&(g=k+1),N&&E&&(w=k-1),!N&&E){C=A;break}S++}return C||p},zb=e=>{var t=ke(e)?[]:e.toString().split(v5);return[{words:t}]},OL=e=>{var{width:t,scaleToFit:r,children:n,style:i,breakAll:a,maxLines:o}=e;if((t||r)&&!Ki.isSsr){var l,s,c=g5({breakAll:a,children:n,style:i});if(c){var{wordsWithComputedWidth:u,spaceWidth:d}=c;l=u,s=d}else return zb(n);return EL({breakAll:a,children:n,maxLines:o,style:i},l,s,t,r)}return zb(n)},Mb="#808080",pd=y.forwardRef((e,t)=>{var{x:r=0,y:n=0,lineHeight:i="1em",capHeight:a="0.71em",scaleToFit:o=!1,textAnchor:l="start",verticalAnchor:s="end",fill:c=Mb}=e,u=_b(e,kL),d=y.useMemo(()=>OL({breakAll:u.breakAll,children:u.children,maxLines:u.maxLines,scaleToFit:o,style:u.style,width:u.width}),[u.breakAll,u.children,u.maxLines,o,u.style,u.width]),{dx:p,dy:h,angle:m,className:v,breakAll:b}=u,g=_b(u,PL);if(!Hr(r)||!Hr(n))return null;var w=r+(H(p)?p:0),S=n+(H(h)?h:0),C;switch(s){case"start":C=xf("calc(".concat(a,")"));break;case"middle":C=xf("calc(".concat((d.length-1)/2," * -").concat(i," + (").concat(a," / 2))"));break;default:C=xf("calc(".concat(d.length-1," * -").concat(i,")"));break}var k=[];if(o){var P=d[0].width,{width:N}=u;k.push("scale(".concat(H(N)?N/P:1,")"))}return m&&k.push("rotate(".concat(m,", ").concat(w,", ").concat(S,")")),k.length&&(g.transform=k.join(" ")),y.createElement("text",Sh({},Ne(g,!0),{ref:t,x:w,y:S,className:se("recharts-text",v),textAnchor:l,fill:c.includes("url")?Mb:c}),d.map((A,E)=>{var _=A.words.join(b?"":" ");return y.createElement("tspan",{x:w,dy:E===0?C:i,key:"".concat(_,"-").concat(E)},_)}))});pd.displayName="Text";var AL=["offset"],TL=["labelRef"];function jb(e,t){if(e==null)return{};var r,n,i=_L(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function _L(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Ib(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ib(Object(r),!0).forEach(function(n){zL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ib(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function zL(e,t,r){return(t=ML(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ML(e){var t=jL(e,"string");return typeof t=="symbol"?t:t+""}function jL(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qr.apply(null,arguments)}var IL=e=>{var{value:t,formatter:r}=e,n=ke(e.children)?t:e.children;return typeof r=="function"?r(n):n},xg=e=>e!=null&&typeof e=="function",DL=(e,t)=>{var r=tt(t-e),n=Math.min(Math.abs(t-e),360);return r*n},RL=(e,t,r,n)=>{var{position:i,offset:a,className:o}=e,{cx:l,cy:s,innerRadius:c,outerRadius:u,startAngle:d,endAngle:p,clockWise:h}=n,m=(c+u)/2,v=DL(d,p),b=v>=0?1:-1,g,w;i==="insideStart"?(g=d+b*a,w=h):i==="insideEnd"?(g=p-b*a,w=!h):i==="end"&&(g=p+b*a,w=h),w=v<=0?w:!w;var S=Be(l,s,m,g),C=Be(l,s,m,g+(w?1:-1)*359),k="M".concat(S.x,",").concat(S.y,`
    A`).concat(m,",").concat(m,",0,1,").concat(w?0:1,`,
    `).concat(C.x,",").concat(C.y),P=ke(e.id)?al("recharts-radial-line-"):e.id;return y.createElement("text",qr({},r,{dominantBaseline:"central",className:se("recharts-radial-bar-label",o)}),y.createElement("defs",null,y.createElement("path",{id:P,d:k})),y.createElement("textPath",{xlinkHref:"#".concat(P)},t))},LL=(e,t,r)=>{var{cx:n,cy:i,innerRadius:a,outerRadius:o,startAngle:l,endAngle:s}=e,c=(l+s)/2;if(r==="outside"){var{x:u,y:d}=Be(n,i,o+t,c);return{x:u,y:d,textAnchor:u>=n?"start":"end",verticalAnchor:"middle"}}if(r==="center")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"middle"};if(r==="centerTop")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"start"};if(r==="centerBottom")return{x:n,y:i,textAnchor:"middle",verticalAnchor:"end"};var p=(a+o)/2,{x:h,y:m}=Be(n,i,p,c);return{x:h,y:m,textAnchor:"middle",verticalAnchor:"middle"}},$L=(e,t)=>{var{parentViewBox:r,offset:n,position:i}=e,{x:a,y:o,width:l,height:s}=t,c=s>=0?1:-1,u=c*n,d=c>0?"end":"start",p=c>0?"start":"end",h=l>=0?1:-1,m=h*n,v=h>0?"end":"start",b=h>0?"start":"end";if(i==="top"){var g={x:a+l/2,y:o-c*n,textAnchor:"middle",verticalAnchor:d};return ze(ze({},g),r?{height:Math.max(o-r.y,0),width:l}:{})}if(i==="bottom"){var w={x:a+l/2,y:o+s+u,textAnchor:"middle",verticalAnchor:p};return ze(ze({},w),r?{height:Math.max(r.y+r.height-(o+s),0),width:l}:{})}if(i==="left"){var S={x:a-m,y:o+s/2,textAnchor:v,verticalAnchor:"middle"};return ze(ze({},S),r?{width:Math.max(S.x-r.x,0),height:s}:{})}if(i==="right"){var C={x:a+l+m,y:o+s/2,textAnchor:b,verticalAnchor:"middle"};return ze(ze({},C),r?{width:Math.max(r.x+r.width-C.x,0),height:s}:{})}var k=r?{width:l,height:s}:{};return i==="insideLeft"?ze({x:a+m,y:o+s/2,textAnchor:b,verticalAnchor:"middle"},k):i==="insideRight"?ze({x:a+l-m,y:o+s/2,textAnchor:v,verticalAnchor:"middle"},k):i==="insideTop"?ze({x:a+l/2,y:o+u,textAnchor:"middle",verticalAnchor:p},k):i==="insideBottom"?ze({x:a+l/2,y:o+s-u,textAnchor:"middle",verticalAnchor:d},k):i==="insideTopLeft"?ze({x:a+m,y:o+u,textAnchor:b,verticalAnchor:p},k):i==="insideTopRight"?ze({x:a+l-m,y:o+u,textAnchor:v,verticalAnchor:p},k):i==="insideBottomLeft"?ze({x:a+m,y:o+s-u,textAnchor:b,verticalAnchor:d},k):i==="insideBottomRight"?ze({x:a+l-m,y:o+s-u,textAnchor:v,verticalAnchor:d},k):i&&typeof i=="object"&&(H(i.x)||xi(i.x))&&(H(i.y)||xi(i.y))?ze({x:a+Pt(i.x,l),y:o+Pt(i.y,s),textAnchor:"end",verticalAnchor:"end"},k):ze({x:a+l/2,y:o+s/2,textAnchor:"middle",verticalAnchor:"middle"},k)},FL=e=>"cx"in e&&H(e.cx);function Bt(e){var{offset:t=5}=e,r=jb(e,AL),n=ze({offset:t},r),{viewBox:i,position:a,value:o,children:l,content:s,className:c="",textBreakAll:u,labelRef:d}=n,p=W(sP),h=dv(),m=a==="center"?h:p??h,v=i||m;if(!v||ke(o)&&ke(l)&&!y.isValidElement(s)&&typeof s!="function")return null;var b=ze(ze({},n),{},{viewBox:v});if(y.isValidElement(s)){var g=jb(b,TL);return y.cloneElement(s,g)}var w;if(typeof s=="function"){if(w=y.createElement(s,b),y.isValidElement(w))return w}else w=IL(n);var S=FL(v),C=Ne(n,!0);if(S&&(a==="insideStart"||a==="insideEnd"||a==="end"))return RL(n,w,C,v);var k=S?LL(v,n.offset,n.position):$L(n,v);return y.createElement(pd,qr({ref:d,className:se("recharts-label",c)},C,k,{breakAll:u}),w)}Bt.displayName="Label";var y5=e=>{var{cx:t,cy:r,angle:n,startAngle:i,endAngle:a,r:o,radius:l,innerRadius:s,outerRadius:c,x:u,y:d,top:p,left:h,width:m,height:v,clockWise:b,labelViewBox:g}=e;if(g)return g;if(H(m)&&H(v)){if(H(u)&&H(d))return{x:u,y:d,width:m,height:v};if(H(p)&&H(h))return{x:p,y:h,width:m,height:v}}if(H(u)&&H(d))return{x:u,y:d,width:0,height:0};if(H(t)&&H(r))return{cx:t,cy:r,startAngle:i||n||0,endAngle:a||n||0,innerRadius:s||0,outerRadius:c||l||o||0,clockWise:b};if(e.viewBox)return e.viewBox},BL=(e,t,r)=>{if(!e)return null;var n={viewBox:t,labelRef:r};return e===!0?y.createElement(Bt,qr({key:"label-implicit"},n)):Hr(e)?y.createElement(Bt,qr({key:"label-implicit",value:e},n)):y.isValidElement(e)?e.type===Bt?y.cloneElement(e,ze({key:"label-implicit"},n)):y.createElement(Bt,qr({key:"label-implicit",content:e},n)):xg(e)?y.createElement(Bt,qr({key:"label-implicit",content:e},n)):e&&typeof e=="object"?y.createElement(Bt,qr({},e,{key:"label-implicit"},n)):null},HL=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&n&&!t.label)return null;var{children:i,labelRef:a}=t,o=y5(t),l=Pl(i,Bt).map((c,u)=>y.cloneElement(c,{viewBox:r||o,key:"label-".concat(u)}));if(!n)return l;var s=BL(t.label,r||o,a);return[s,...l]};Bt.parseViewBox=y5;Bt.renderCallByParent=HL;var b5={},x5={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r[r.length-1]}e.last=t})(x5);var w5={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Array.isArray(r)?r:Array.from(r)}e.toArray=t})(w5);(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=x5,r=w5,n=ju;function i(a){if(n.isArrayLike(a))return t.last(r.toArray(a))}e.last=i})(b5);var UL=b5.last;const KL=UL;var WL=["valueAccessor"],VL=["data","dataKey","clockWise","id","textBreakAll"];function Hc(){return Hc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hc.apply(null,arguments)}function Db(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Rb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Db(Object(r),!0).forEach(function(n){GL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Db(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function GL(e,t,r){return(t=YL(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function YL(e){var t=qL(e,"string");return typeof t=="symbol"?t:t+""}function qL(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lb(e,t){if(e==null)return{};var r,n,i=XL(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function XL(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var QL=e=>Array.isArray(e.value)?KL(e.value):e.value;function Gn(e){var{valueAccessor:t=QL}=e,r=Lb(e,WL),{data:n,dataKey:i,clockWise:a,id:o,textBreakAll:l}=r,s=Lb(r,VL);return!n||!n.length?null:y.createElement(xt,{className:"recharts-label-list"},n.map((c,u)=>{var d=ke(i)?t(c,u):ve(c&&c.payload,i),p=ke(o)?{}:{id:"".concat(o,"-").concat(u)};return y.createElement(Bt,Hc({},Ne(c,!0),s,p,{parentViewBox:c.parentViewBox,value:d,textBreakAll:l,viewBox:Bt.parseViewBox(ke(a)?c:Rb(Rb({},c),{},{clockWise:a})),key:"label-".concat(u),index:u}))}))}Gn.displayName="LabelList";function JL(e,t){return e?e===!0?y.createElement(Gn,{key:"labelList-implicit",data:t}):y.isValidElement(e)||xg(e)?y.createElement(Gn,{key:"labelList-implicit",data:t,content:e}):typeof e=="object"?y.createElement(Gn,Hc({data:t},e,{key:"labelList-implicit"})):null:null}function ZL(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var{children:n}=e,i=Pl(n,Gn).map((o,l)=>y.cloneElement(o,{data:t,key:"labelList-".concat(l)}));if(!r)return i;var a=JL(e.label,t);return[a,...i]}Gn.renderCallByParent=ZL;function Ch(){return Ch=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ch.apply(null,arguments)}var S5=e=>{var{cx:t,cy:r,r:n,className:i}=e,a=se("recharts-dot",i);return t===+t&&r===+r&&n===+n?y.createElement("circle",Ch({},gn(e),Km(e),{className:a,cx:t,cy:r,r:n})):null},C5=e=>e.graphicalItems.polarItems,e$=O([Oe,zl],Yv),wg=O([C5,Re,e$],qv),t$=O([wg],Xv),Sg=O([t$,Rv],Qv),r$=O([Sg,Re,wg],Zv),n$=O([Sg,Re,wg],(e,t,r)=>r.length>0?e.flatMap(n=>r.flatMap(i=>{var a,o=ve(n,(a=t.dataKey)!==null&&a!==void 0?a:i.dataKey);return{value:o,errorDomain:[]}})).filter(Boolean):(t==null?void 0:t.dataKey)!=null?e.map(n=>({value:ve(n,t.dataKey),errorDomain:[]})):e.map(n=>({value:n,errorDomain:[]}))),$b=()=>{},i$=O([Re,PP,$b,n$,$b,ie,Oe],tg),k5=O([Re,ie,Sg,r$,_l,Oe,i$],rg),a$=O([k5,Re,qa],ag);O([Re,k5,a$,Oe],lg);var o$={radiusAxis:{},angleAxis:{}},P5=er({name:"polarAxis",initialState:o$,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}});P5.actions;var l$=P5.reducer;function Fb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Bb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Fb(Object(r),!0).forEach(function(n){s$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function s$(e,t,r){return(t=c$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c$(e){var t=u$(e,"string");return typeof t=="symbol"?t:t+""}function u$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var d$=(e,t)=>t,Cg=O([C5,d$],(e,t)=>e.filter(r=>r.type==="pie").find(r=>r.id===t)),f$=[],kg=(e,t,r)=>(r==null?void 0:r.length)===0?f$:r,N5=O([Rv,Cg,kg],(e,t,r)=>{var{chartData:n}=e;if(t!=null){var i;if((t==null?void 0:t.data)!=null&&t.data.length>0?i=t.data:i=n,(!i||!i.length)&&r!=null&&(i=r.map(a=>Bb(Bb({},t.presentationProps),a.props))),i!=null)return i}}),p$=O([N5,Cg,kg],(e,t,r)=>{if(!(e==null||t==null))return e.map((n,i)=>{var a,o=ve(n,t.nameKey,t.name),l;return r!=null&&(a=r[i])!==null&&a!==void 0&&(a=a.props)!==null&&a!==void 0&&a.fill?l=r[i].props.fill:typeof n=="object"&&n!=null&&"fill"in n?l=n.fill:l=t.fill,{value:Ua(o,t.dataKey),color:l,payload:n,type:t.legendType}})}),h$=O([N5,Cg,kg,Ye],(e,t,r,n)=>{if(!(t==null||e==null))return aF({offset:n,pieSettings:t,displayedData:e,cells:r})}),E5={};(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){var i;if(typeof r!="object"||r==null)return!1;if(Object.getPrototypeOf(r)===null)return!0;if(Object.prototype.toString.call(r)!=="[object Object]"){const a=r[Symbol.toStringTag];return a==null||!((i=Object.getOwnPropertyDescriptor(r,Symbol.toStringTag))!=null&&i.writable)?!1:r.toString()===`[object ${a}]`}let n=r;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}e.isPlainObject=t})(E5);var m$=E5.isPlainObject;const v$=m$;function Uc(){return Uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Uc.apply(null,arguments)}var Hb=(e,t,r,n,i)=>{var a=r-n,o;return o="M ".concat(e,",").concat(t),o+="L ".concat(e+r,",").concat(t),o+="L ".concat(e+r-a/2,",").concat(t+i),o+="L ".concat(e+r-a/2-n,",").concat(t+i),o+="L ".concat(e,",").concat(t," Z"),o},g$={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},y$=e=>{var t=tr(e,g$),r=y.useRef(),[n,i]=y.useState(-1);y.useEffect(()=>{if(r.current&&r.current.getTotalLength)try{var b=r.current.getTotalLength();b&&i(b)}catch{}},[]);var{x:a,y:o,upperWidth:l,lowerWidth:s,height:c,className:u}=t,{animationEasing:d,animationDuration:p,animationBegin:h,isUpdateAnimationActive:m}=t;if(a!==+a||o!==+o||l!==+l||s!==+s||c!==+c||l===0&&s===0||c===0)return null;var v=se("recharts-trapezoid",u);return m?y.createElement(Ec,{canBegin:n>0,from:{upperWidth:0,lowerWidth:0,height:c,x:a,y:o},to:{upperWidth:l,lowerWidth:s,height:c,x:a,y:o},duration:p,animationEasing:d,isActive:m},b=>{var{upperWidth:g,lowerWidth:w,height:S,x:C,y:k}=b;return y.createElement(Ec,{canBegin:n>0,from:"0px ".concat(n===-1?1:n,"px"),to:"".concat(n,"px 0px"),attributeName:"strokeDasharray",begin:h,duration:p,easing:d},y.createElement("path",Uc({},Ne(t,!0),{className:v,d:Hb(C,k,g,w,S),ref:r})))}):y.createElement("g",null,y.createElement("path",Uc({},Ne(t,!0),{className:v,d:Hb(a,o,l,s,c)})))},b$=["option","shapeType","propTransformer","activeClassName","isActive"];function x$(e,t){if(e==null)return{};var r,n,i=w$(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function w$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Ub(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Kc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ub(Object(r),!0).forEach(function(n){S$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ub(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function S$(e,t,r){return(t=C$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C$(e){var t=k$(e,"string");return typeof t=="symbol"?t:t+""}function k$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function P$(e,t){return Kc(Kc({},t),e)}function N$(e,t){return e==="symbols"}function Kb(e){var{shapeType:t,elementProps:r}=e;switch(t){case"rectangle":return y.createElement(ZC,r);case"trapezoid":return y.createElement(y$,r);case"sector":return y.createElement(rk,r);case"symbols":if(N$(t))return y.createElement(MS,r);break;default:return null}}function E$(e){return y.isValidElement(e)?e.props:e}function O5(e){var{option:t,shapeType:r,propTransformer:n=P$,activeClassName:i="recharts-active-shape",isActive:a}=e,o=x$(e,b$),l;if(y.isValidElement(t))l=y.cloneElement(t,Kc(Kc({},o),E$(t)));else if(typeof t=="function")l=t(o);else if(v$(t)&&typeof t!="boolean"){var s=n(t,o);l=y.createElement(Kb,{shapeType:r,elementProps:s})}else{var c=o;l=y.createElement(Kb,{shapeType:r,elementProps:c})}return a?y.createElement(xt,{className:i},l):l}var Pg=(e,t)=>{var r=De();return(n,i)=>a=>{e==null||e(n,i,a),r(BP({activeIndex:String(i),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}},Ng=e=>{var t=De();return(r,n)=>i=>{e==null||e(r,n,i),t(T7())}},Eg=(e,t)=>{var r=De();return(n,i)=>a=>{e==null||e(n,i,a),r(_7({activeIndex:String(i),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}};function Og(e){var{fn:t,args:r}=e,n=De(),i=Dt();return y.useEffect(()=>{if(!i){var a=t(r);return n(E7(a)),()=>{n(O7(a))}}},[t,r,n,i]),null}var A5=()=>{};function T5(e){var{legendPayload:t}=e,r=De(),n=Dt();return y.useEffect(()=>n?A5:(r(FC(t)),()=>{r(BC(t))}),[r,n,t]),null}function O$(e){var{legendPayload:t}=e,r=De(),n=W(ie);return y.useEffect(()=>n!=="centric"&&n!=="radial"?A5:(r(FC(t)),()=>{r(BC(t))}),[r,n,t]),null}function Ag(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",r=y.useRef(al(t)),n=y.useRef(e);return n.current!==e&&(r.current=al(t),n.current=e),r.current}var wf,A$=()=>{var[e]=y.useState(()=>al("uid-"));return e},T$=(wf=Is["useId".toString()])!==null&&wf!==void 0?wf:A$;function _$(e,t){var r=T$();return t||(e?"".concat(e,"-").concat(r):r)}var z$=y.createContext(void 0),Tg=e=>{var{id:t,type:r,children:n}=e,i=_$("recharts-".concat(r),t);return y.createElement(z$.Provider,{value:i},n(i))},M$={cartesianItems:[],polarItems:[]},_5=er({name:"graphicalItems",initialState:M$,reducers:{addCartesianGraphicalItem(e,t){e.cartesianItems.push(t.payload)},replaceCartesianGraphicalItem(e,t){var{prev:r,next:n}=t.payload,i=nn(e).cartesianItems.indexOf(r);i>-1&&(e.cartesianItems[i]=n)},removeCartesianGraphicalItem(e,t){var r=nn(e).cartesianItems.indexOf(t.payload);r>-1&&e.cartesianItems.splice(r,1)},addPolarGraphicalItem(e,t){e.polarItems.push(t.payload)},removePolarGraphicalItem(e,t){var r=nn(e).polarItems.indexOf(t.payload);r>-1&&e.polarItems.splice(r,1)}}}),{addCartesianGraphicalItem:j$,replaceCartesianGraphicalItem:I$,removeCartesianGraphicalItem:D$,addPolarGraphicalItem:R$,removePolarGraphicalItem:L$}=_5.actions,$$=_5.reducer;function z5(e){var t=De(),r=y.useRef(null);return y.useEffect(()=>{r.current===null?t(j$(e)):r.current!==e&&t(I$({prev:r.current,next:e})),r.current=e},[t,e]),y.useEffect(()=>()=>{r.current&&(t(D$(r.current)),r.current=null)},[t]),null}function F$(e){var t=De();return y.useEffect(()=>(t(R$(e)),()=>{t(L$(e))}),[t,e]),null}function B$(){}var H$={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},Wb={t:0},Sf={t:1};function _g(e){var t=tr(e,H$),{isActive:r,canBegin:n,duration:i,easing:a,begin:o,onAnimationEnd:l,onAnimationStart:s,children:c}=t,u=JC("JavascriptAnimate",t.animationManager),[d,p]=y.useState(r?Wb:Sf),h=y.useRef(null);return y.useEffect(()=>{r||p(Sf)},[r]),y.useEffect(()=>{if(!r||!n)return B$;var m=QC(Wb,Sf,qC(a),i,p,u.getTimeoutController()),v=()=>{h.current=m()};return u.start([s,o,v,i,l]),()=>{u.stop(),h.current&&h.current(),l()}},[r,n,i,a,o,s,l,u]),c(d.t)}var U$=["onMouseEnter","onClick","onMouseLeave"],K$=["id"],W$=["id"];function zg(e,t){if(e==null)return{};var r,n,i=V$(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function V$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Vb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Vb(Object(r),!0).forEach(function(n){G$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function G$(e,t,r){return(t=Y$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y$(e){var t=q$(e,"string");return typeof t=="symbol"?t:t+""}function q$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hn(){return hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hn.apply(null,arguments)}function X$(e){var t=y.useMemo(()=>Pl(e.children,Ll),[e.children]),r=W(n=>p$(n,e.id,t));return r==null?null:y.createElement(O$,{legendPayload:r})}function Q$(e){var{dataKey:t,nameKey:r,sectors:n,stroke:i,strokeWidth:a,fill:o,name:l,hide:s,tooltipType:c}=e;return{dataDefinedOnItem:n==null?void 0:n.map(u=>u.tooltipPayload),positions:n==null?void 0:n.map(u=>u.tooltipPosition),settings:{stroke:i,strokeWidth:a,fill:o,dataKey:t,nameKey:r,name:Ua(l,t),hide:s,type:c,color:o,unit:""}}}var J$=(e,t)=>e>t?"start":e<t?"end":"middle",Z$=(e,t,r)=>typeof t=="function"?t(e):Pt(t,r,r*.8),eF=(e,t,r)=>{var{top:n,left:i,width:a,height:o}=t,l=OC(a,o),s=i+Pt(e.cx,a,a/2),c=n+Pt(e.cy,o,o/2),u=Pt(e.innerRadius,l,0),d=Z$(r,e.outerRadius,l),p=e.maxRadius||Math.sqrt(a*a+o*o)/2;return{cx:s,cy:c,innerRadius:u,outerRadius:d,maxRadius:p}},tF=(e,t)=>{var r=tt(t-e),n=Math.min(Math.abs(t-e),360);return r*n},rF=(e,t)=>{if(y.isValidElement(e))return y.cloneElement(e,t);if(typeof e=="function")return e(t);var r=se("recharts-pie-label-line",typeof e!="boolean"?e.className:"");return y.createElement(fv,hn({},t,{type:"linear",className:r}))},nF=(e,t,r)=>{if(y.isValidElement(e))return y.cloneElement(e,t);var n=r;if(typeof e=="function"&&(n=e(t),y.isValidElement(n)))return n;var i=se("recharts-pie-label-text",typeof e!="boolean"&&typeof e!="function"?e.className:"");return y.createElement(pd,hn({},t,{alignmentBaseline:"middle",className:i}),n)};function iF(e){var{sectors:t,props:r,showLabels:n}=e,{label:i,labelLine:a,dataKey:o}=r;if(!n||!i||!t)return null;var l=gn(r),s=Ne(i,!1),c=Ne(a,!1),u=typeof i=="object"&&"offsetRadius"in i&&i.offsetRadius||20,d=t.map((p,h)=>{var m=(p.startAngle+p.endAngle)/2,v=Be(p.cx,p.cy,p.outerRadius+u,m),b=je(je(je(je({},l),p),{},{stroke:"none"},s),{},{index:h,textAnchor:J$(v.x,p.cx)},v),g=je(je(je(je({},l),p),{},{fill:"none",stroke:p.fill},c),{},{index:h,points:[Be(p.cx,p.cy,p.outerRadius,m),v],key:"line"});return y.createElement(xt,{key:"label-".concat(p.startAngle,"-").concat(p.endAngle,"-").concat(p.midAngle,"-").concat(h)},a&&rF(a,g),nF(i,b,ve(p,o)))});return y.createElement(xt,{className:"recharts-pie-labels"},d)}function M5(e){var{sectors:t,activeShape:r,inactiveShape:n,allOtherPieProps:i,showLabels:a}=e,o=W(ei),{onMouseEnter:l,onClick:s,onMouseLeave:c}=i,u=zg(i,U$),d=Pg(l,i.dataKey),p=Ng(c),h=Eg(s,i.dataKey);return t==null?null:y.createElement(y.Fragment,null,t.map((m,v)=>{if((m==null?void 0:m.startAngle)===0&&(m==null?void 0:m.endAngle)===0&&t.length!==1)return null;var b=r&&String(v)===o,g=o?n:null,w=b?r:g,S=je(je({},m),{},{stroke:m.stroke,tabIndex:-1,[MC]:v,[jC]:i.dataKey});return y.createElement(xt,hn({tabIndex:-1,className:"recharts-pie-sector"},Tu(u,m,v),{onMouseEnter:d(m,v),onMouseLeave:p(m,v),onClick:h(m,v),key:"sector-".concat(m==null?void 0:m.startAngle,"-").concat(m==null?void 0:m.endAngle,"-").concat(m.midAngle,"-").concat(v)}),y.createElement(O5,hn({option:w,isActive:b,shapeType:"sector"},S)))}),y.createElement(iF,{sectors:t,props:i,showLabels:a}))}function aF(e){var t,{pieSettings:r,displayedData:n,cells:i,offset:a}=e,{cornerRadius:o,startAngle:l,endAngle:s,dataKey:c,nameKey:u,tooltipType:d}=r,p=Math.abs(r.minAngle),h=tF(l,s),m=Math.abs(h),v=n.length<=1?0:(t=r.paddingAngle)!==null&&t!==void 0?t:0,b=n.filter(P=>ve(P,c,0)!==0).length,g=(m>=360?b:b-1)*v,w=m-b*p-g,S=n.reduce((P,N)=>{var A=ve(N,c,0);return P+(H(A)?A:0)},0),C;if(S>0){var k;C=n.map((P,N)=>{var A=ve(P,c,0),E=ve(P,u,N),_=eF(r,a,P),z=(H(A)?A:0)/S,M,G=je(je({},P),i&&i[N]&&i[N].props);N?M=k.endAngle+tt(h)*v*(A!==0?1:0):M=l;var Z=M+tt(h)*((A!==0?p:0)+z*w),D=(M+Z)/2,L=(_.innerRadius+_.outerRadius)/2,q=[{name:E,value:A,payload:G,dataKey:c,type:d}],R=Be(_.cx,_.cy,L,D);return k=je(je(je(je({},r.presentationProps),{},{percent:z,cornerRadius:o,name:E,tooltipPayload:q,midAngle:D,middleRadius:L,tooltipPosition:R},G),_),{},{value:ve(P,c),startAngle:M,endAngle:Z,payload:G,paddingAngle:tt(h)*v}),k})}return C}function oF(e){var{props:t,previousSectorsRef:r}=e,{sectors:n,isAnimationActive:i,animationBegin:a,animationDuration:o,animationEasing:l,activeShape:s,inactiveShape:c,onAnimationStart:u,onAnimationEnd:d}=t,p=Ag(t,"recharts-pie-"),h=r.current,[m,v]=y.useState(!0),b=y.useCallback(()=>{typeof d=="function"&&d(),v(!1)},[d]),g=y.useCallback(()=>{typeof u=="function"&&u(),v(!0)},[u]);return y.createElement(_g,{begin:a,duration:o,isActive:i,easing:l,onAnimationStart:g,onAnimationEnd:b,key:p},w=>{var S=[],C=n&&n[0],k=C.startAngle;return n.forEach((P,N)=>{var A=h&&h[N],E=N>0?Qn(P,"paddingAngle",0):0;if(A){var _=ky(A.endAngle-A.startAngle,P.endAngle-P.startAngle),z=je(je({},P),{},{startAngle:k+E,endAngle:k+_(w)+E});S.push(z),k=z.endAngle}else{var{endAngle:M,startAngle:G}=P,Z=ky(0,M-G),D=Z(w),L=je(je({},P),{},{startAngle:k+E,endAngle:k+D+E});S.push(L),k=L.endAngle}}),r.current=S,y.createElement(xt,null,y.createElement(M5,{sectors:S,activeShape:s,inactiveShape:c,allOtherPieProps:t,showLabels:!m}))})}function lF(e){var{sectors:t,isAnimationActive:r,activeShape:n,inactiveShape:i}=e,a=y.useRef(null),o=a.current;return r&&t&&t.length&&(!o||o!==t)?y.createElement(oF,{props:e,previousSectorsRef:a}):y.createElement(M5,{sectors:t,activeShape:n,inactiveShape:i,allOtherPieProps:e,showLabels:!0})}function sF(e){var{hide:t,className:r,rootTabIndex:n}=e,i=se("recharts-pie",r);return t?null:y.createElement(xt,{tabIndex:n,className:i},y.createElement(lF,e))}var cF={animationBegin:400,animationDuration:1500,animationEasing:"ease",cx:"50%",cy:"50%",dataKey:"value",endAngle:360,fill:"#808080",hide:!1,innerRadius:0,isAnimationActive:!Ki.isSsr,labelLine:!0,legendType:"rect",minAngle:0,nameKey:"name",outerRadius:"80%",paddingAngle:0,rootTabIndex:0,startAngle:0,stroke:"#fff"};function uF(e){var{id:t}=e,r=zg(e,K$),n=y.useMemo(()=>Pl(e.children,Ll),[e.children]),i=W(a=>h$(a,t,n));return y.createElement(y.Fragment,null,y.createElement(Og,{fn:Q$,args:je(je({},e),{},{sectors:i})}),y.createElement(sF,hn({},r,{sectors:i})))}function j5(e){var t=tr(e,cF),{id:r}=t,n=zg(t,W$),i=gn(n);return y.createElement(Tg,{id:r,type:"pie"},a=>y.createElement(y.Fragment,null,y.createElement(F$,{type:"pie",id:a,data:n.data,dataKey:n.dataKey,hide:n.hide,angleAxisId:0,radiusAxisId:0,name:n.name,nameKey:n.nameKey,tooltipType:n.tooltipType,legendType:n.legendType,fill:n.fill,cx:n.cx,cy:n.cy,startAngle:n.startAngle,endAngle:n.endAngle,paddingAngle:n.paddingAngle,minAngle:n.minAngle,innerRadius:n.innerRadius,outerRadius:n.outerRadius,cornerRadius:n.cornerRadius,presentationProps:i}),y.createElement(X$,hn({},n,{id:a})),y.createElement(uF,hn({},n,{id:a})),n.children))}j5.displayName="Pie";var dF=O([Ye],e=>{if(e)return{top:e.top,bottom:e.bottom,left:e.left,right:e.right}}),fF=O([dF,yn,bn],(e,t,r)=>{if(!(!e||t==null||r==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,r-e.top-e.bottom)}}),Mg=()=>W(fF),pF=()=>W(gR);function Gb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Yb(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Gb(Object(r),!0).forEach(function(n){hF(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Gb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function hF(e,t,r){return(t=mF(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mF(e){var t=vF(e,"string");return typeof t=="symbol"?t:t+""}function vF(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gF=e=>{var{point:t,childIndex:r,mainColor:n,activeDot:i,dataKey:a}=e;if(i===!1||t.x==null||t.y==null)return null;var o=Yb(Yb({index:r,dataKey:a,cx:t.x,cy:t.y,r:4,fill:n??"none",strokeWidth:2,stroke:"#fff",payload:t.payload,value:t.value},Ne(i,!1)),Km(i)),l;return y.isValidElement(i)?l=y.cloneElement(i,o):typeof i=="function"?l=i(o):l=y.createElement(S5,o),y.createElement(xt,{className:"recharts-active-dot"},l)};function yF(e){var{points:t,mainColor:r,activeDot:n,itemDataKey:i}=e,a=W(ei),o=pF();if(t==null||o==null)return null;var l=t.find(s=>o.includes(s.payload));return ke(l)?null:gF({point:l,childIndex:Number(a),mainColor:r,dataKey:i,activeDot:n})}var bF=!0,Cf="Invariant failed";function xF(e,t){if(!e){if(bF)throw new Error(Cf);var r=typeof t=="function"?t():t,n=r?"".concat(Cf,": ").concat(r):Cf;throw new Error(n)}}var wF=["x","y"];function kh(){return kh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kh.apply(null,arguments)}function qb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function go(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qb(Object(r),!0).forEach(function(n){SF(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function SF(e,t,r){return(t=CF(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function CF(e){var t=kF(e,"string");return typeof t=="symbol"?t:t+""}function kF(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function PF(e,t){if(e==null)return{};var r,n,i=NF(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function NF(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function EF(e,t){var{x:r,y:n}=e,i=PF(e,wF),a="".concat(r),o=parseInt(a,10),l="".concat(n),s=parseInt(l,10),c="".concat(t.height||i.height),u=parseInt(c,10),d="".concat(t.width||i.width),p=parseInt(d,10);return go(go(go(go(go({},t),i),o?{x:o}:{}),s?{y:s}:{}),{},{height:u,width:p,name:t.name,radius:t.radius})}function I5(e){return y.createElement(O5,kh({shapeType:"rectangle",propTransformer:EF,activeClassName:"recharts-active-bar"},e))}var OF=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(n,i)=>{if(H(t))return t;var a=H(n)||ke(n);return a?t(n,i):(a||xF(!1),r)}},AF={},D5=er({name:"errorBars",initialState:AF,reducers:{addErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]||(e[r]=[]),e[r].push(n)},removeErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]&&(e[r]=e[r].filter(i=>i.dataKey!==n.dataKey||i.direction!==n.direction))}}});D5.actions;var TF=D5.reducer,_F=["children"];function zF(e,t){if(e==null)return{};var r,n,i=MF(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function MF(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var jF={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},IF=y.createContext(jF);function R5(e){var{children:t}=e,r=zF(e,_F);return y.createElement(IF.Provider,{value:r},t)}function jg(e,t){var r,n,i=W(c=>wn(c,e)),a=W(c=>ci(c,t)),o=(r=i==null?void 0:i.allowDataOverflow)!==null&&r!==void 0?r:Rt.allowDataOverflow,l=(n=a==null?void 0:a.allowDataOverflow)!==null&&n!==void 0?n:Lt.allowDataOverflow,s=o||l;return{needClip:s,needClipX:o,needClipY:l}}function L5(e){var{xAxisId:t,yAxisId:r,clipPathId:n}=e,i=Mg(),{needClipX:a,needClipY:o,needClip:l}=jg(t,r);if(!l)return null;var{x:s,y:c,width:u,height:d}=i;return y.createElement("clipPath",{id:"clipPath-".concat(n)},y.createElement("rect",{x:a?s:s-u/2,y:o?c:c-d/2,width:a?u:u*2,height:o?d:d*2}))}var DF=["onMouseEnter","onMouseLeave","onClick"],RF=["value","background","tooltipPosition"],LF=["id"],$F=["onMouseEnter","onClick","onMouseLeave"];function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ia.apply(null,arguments)}function Xb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function gt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Xb(Object(r),!0).forEach(function(n){FF(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function FF(e,t,r){return(t=BF(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function BF(e){var t=HF(e,"string");return typeof t=="symbol"?t:t+""}function HF(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wc(e,t){if(e==null)return{};var r,n,i=UF(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function UF(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var KF=e=>{var{dataKey:t,name:r,fill:n,legendType:i,hide:a}=e;return[{inactive:a,dataKey:t,type:i,color:n,value:Ua(r,t),payload:e}]};function WF(e){var{dataKey:t,stroke:r,strokeWidth:n,fill:i,name:a,hide:o,unit:l}=e;return{dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:r,strokeWidth:n,fill:i,dataKey:t,nameKey:void 0,name:Ua(a,t),hide:o,type:e.tooltipType,color:e.fill,unit:l}}}function VF(e){var t=W(ei),{data:r,dataKey:n,background:i,allOtherBarProps:a}=e,{onMouseEnter:o,onMouseLeave:l,onClick:s}=a,c=Wc(a,DF),u=Pg(o,n),d=Ng(l),p=Eg(s,n);if(!i||r==null)return null;var h=Ne(i,!1);return y.createElement(y.Fragment,null,r.map((m,v)=>{var{value:b,background:g,tooltipPosition:w}=m,S=Wc(m,RF);if(!g)return null;var C=u(m,v),k=d(m,v),P=p(m,v),N=gt(gt(gt(gt(gt({option:i,isActive:String(v)===t},S),{},{fill:"#eee"},g),h),Tu(c,m,v)),{},{onMouseEnter:C,onMouseLeave:k,onClick:P,dataKey:n,index:v,className:"recharts-bar-background-rectangle"});return y.createElement(I5,Ia({key:"background-bar-".concat(v)},N))}))}function $5(e){var{data:t,props:r,showLabels:n}=e,i=gn(r),a=Wc(i,LF),{shape:o,dataKey:l,activeBar:s}=r,c=W(ei),u=W(e5),{onMouseEnter:d,onClick:p,onMouseLeave:h}=r,m=Wc(r,$F),v=Pg(d,l),b=Ng(h),g=Eg(p,l);return t?y.createElement(y.Fragment,null,t.map((w,S)=>{var C=s&&String(S)===c&&(u==null||l===u),k=C?s:o,P=gt(gt(gt({},a),w),{},{isActive:C,option:k,index:S,dataKey:l});return y.createElement(xt,Ia({className:"recharts-bar-rectangle"},Tu(m,w,S),{onMouseEnter:v(w,S),onMouseLeave:b(w,S),onClick:g(w,S),key:"rectangle-".concat(w==null?void 0:w.x,"-").concat(w==null?void 0:w.y,"-").concat(w==null?void 0:w.value,"-").concat(S)}),y.createElement(I5,P))}),n&&Gn.renderCallByParent(r,t)):null}function GF(e){var{props:t,previousRectanglesRef:r}=e,{data:n,layout:i,isAnimationActive:a,animationBegin:o,animationDuration:l,animationEasing:s,onAnimationEnd:c,onAnimationStart:u}=t,d=r.current,p=Ag(t,"recharts-bar-"),[h,m]=y.useState(!1),v=y.useCallback(()=>{typeof c=="function"&&c(),m(!1)},[c]),b=y.useCallback(()=>{typeof u=="function"&&u(),m(!0)},[u]);return y.createElement(_g,{begin:o,duration:l,isActive:a,easing:s,onAnimationEnd:v,onAnimationStart:b,key:p},g=>{var w=g===1?n:n==null?void 0:n.map((S,C)=>{var k=d&&d[C];if(k)return gt(gt({},S),{},{x:Pr(k.x,S.x,g),y:Pr(k.y,S.y,g),width:Pr(k.width,S.width,g),height:Pr(k.height,S.height,g)});if(i==="horizontal"){var P=Pr(0,S.height,g);return gt(gt({},S),{},{y:S.y+S.height-P,height:P})}var N=Pr(0,S.width,g);return gt(gt({},S),{},{width:N})});return g>0&&(r.current=w??null),w==null?null:y.createElement(xt,null,y.createElement($5,{props:t,data:w,showLabels:!h}))})}function YF(e){var{data:t,isAnimationActive:r}=e,n=y.useRef(null);return r&&t&&t.length&&(n.current==null||n.current!==t)?y.createElement(GF,{previousRectanglesRef:n,props:e}):y.createElement($5,{props:e,data:t,showLabels:!0})}var F5=0,qF=(e,t)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:ve(e,t)}};class XF extends y.PureComponent{render(){var{hide:t,data:r,dataKey:n,className:i,xAxisId:a,yAxisId:o,needClip:l,background:s,id:c}=this.props;if(t)return null;var u=se("recharts-bar",i),d=c;return y.createElement(xt,{className:u,id:c},l&&y.createElement("defs",null,y.createElement(L5,{clipPathId:d,xAxisId:a,yAxisId:o})),y.createElement(xt,{className:"recharts-bar-rectangles",clipPath:l?"url(#clipPath-".concat(d,")"):void 0},y.createElement(VF,{data:r,dataKey:n,background:s,allOtherBarProps:this.props}),y.createElement(YF,this.props)),this.props.children)}}var QF={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",hide:!1,isAnimationActive:!Ki.isSsr,legendType:"rect",minPointSize:F5,xAxisId:0,yAxisId:0};function JF(e){var{xAxisId:t,yAxisId:r,hide:n,legendType:i,minPointSize:a,activeBar:o,animationBegin:l,animationDuration:s,animationEasing:c,isAnimationActive:u}=e,{needClip:d}=jg(t,r),p=qu(),h=Dt(),m=Pl(e.children,Ll),v=W(w=>P9(w,t,r,h,e.id,m));if(p!=="vertical"&&p!=="horizontal")return null;var b,g=v==null?void 0:v[0];return g==null||g.height==null||g.width==null?b=0:b=p==="vertical"?g.height/2:g.width/2,y.createElement(R5,{xAxisId:t,yAxisId:r,data:v,dataPointFormatter:qF,errorBarOffset:b},y.createElement(XF,Ia({},e,{layout:p,needClip:d,data:v,xAxisId:t,yAxisId:r,hide:n,legendType:i,minPointSize:a,activeBar:o,animationBegin:l,animationDuration:s,animationEasing:c,isAnimationActive:u})))}function ZF(e){var{layout:t,barSettings:{dataKey:r,minPointSize:n},pos:i,bandSize:a,xAxis:o,yAxis:l,xAxisTicks:s,yAxisTicks:c,stackedData:u,displayedData:d,offset:p,cells:h}=e,m=t==="horizontal"?l:o,v=u?m.scale.domain():null,b=hz({numericAxis:m});return d.map((g,w)=>{var S,C,k,P,N,A;u?S=sz(u[w],v):(S=ve(g,r),Array.isArray(S)||(S=[b,S]));var E=OF(n,F5)(S[1],w);if(t==="horizontal"){var _,[z,M]=[l.scale(S[0]),l.scale(S[1])];C=t1({axis:o,ticks:s,bandSize:a,offset:i.offset,entry:g,index:w}),k=(_=M??z)!==null&&_!==void 0?_:void 0,P=i.size;var G=z-M;if(N=Yt(G)?0:G,A={x:C,y:p.top,width:P,height:p.height},Math.abs(E)>0&&Math.abs(N)<Math.abs(E)){var Z=tt(N||E)*(Math.abs(E)-Math.abs(N));k-=Z,N+=Z}}else{var[D,L]=[o.scale(S[0]),o.scale(S[1])];if(C=D,k=t1({axis:l,ticks:c,bandSize:a,offset:i.offset,entry:g,index:w}),P=L-D,N=i.size,A={x:p.left,y:k,width:p.width,height:N},Math.abs(E)>0&&Math.abs(P)<Math.abs(E)){var q=tt(P||E)*(Math.abs(E)-Math.abs(P));P+=q}}if(C==null||k==null||P==null||N==null)return null;var R=gt(gt({},g),{},{x:C,y:k,width:P,height:N,value:u?S:S[1],payload:g,background:A,tooltipPosition:{x:C+P/2,y:k+N/2}},h&&h[w]&&h[w].props);return R}).filter(Boolean)}function Ph(e){var t=tr(e,QF),r=Dt();return y.createElement(Tg,{id:t.id,type:"bar"},n=>y.createElement(y.Fragment,null,y.createElement(T5,{legendPayload:KF(t)}),y.createElement(Og,{fn:WF,args:t}),y.createElement(z5,{type:"bar",id:n,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:pz(t.stackId),hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),y.createElement(JF,Ia({},t,{id:n}))))}Ph.displayName="Bar";function Qb(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function gs(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Qb(Object(r),!0).forEach(function(n){e9(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qb(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function e9(e,t,r){return(t=t9(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t9(e){var t=r9(e,"string");return typeof t=="symbol"?t:t+""}function r9(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var n9=(e,t)=>t,i9=(e,t,r)=>r,a9=(e,t,r,n)=>n,o9=(e,t,r,n,i)=>i,$l=O([ld,o9],(e,t)=>e.filter(r=>r.type==="bar").find(r=>r.id===t)),l9=O([$l],e=>e==null?void 0:e.maxBarSize),s9=(e,t,r,n,i,a)=>a,Jb=(e,t,r)=>{var n=r??e;if(!ke(n))return Pt(n,t,0)},c9=O([ie,ld,n9,i9,a9],(e,t,r,n,i)=>t.filter(a=>e==="horizontal"?a.xAxisId===r:a.yAxisId===n).filter(a=>a.isPanorama===i).filter(a=>a.hide===!1).filter(a=>a.type==="bar")),u9=(e,t,r,n)=>{var i=ie(e);return i==="horizontal"?vh(e,"yAxis",r,n):vh(e,"xAxis",t,n)},d9=(e,t,r)=>{var n=ie(e);return n==="horizontal"?ub(e,"xAxis",t):ub(e,"yAxis",r)},f9=(e,t,r)=>{var n={},i=e.filter(od),a=e.filter(c=>c.stackId==null),o=i.reduce((c,u)=>(c[u.stackId]||(c[u.stackId]=[]),c[u.stackId].push(u),c),n),l=Object.entries(o).map(c=>{var[u,d]=c,p=d.map(m=>m.dataKey),h=Jb(t,r,d[0].barSize);return{stackId:u,dataKeys:p,barSize:h}}),s=a.map(c=>{var u=[c.dataKey].filter(p=>p!=null),d=Jb(t,r,c.barSize);return{stackId:void 0,dataKeys:u,barSize:d}});return[...l,...s]},p9=O([c9,OD,d9],f9),h9=(e,t,r,n,i)=>{var a,o,l=$l(e,t,r,n,i);if(l!=null){var s=ie(e),c=tP(e),{maxBarSize:u}=l,d=ke(u)?c:u,p,h;return s==="horizontal"?(p=Zn(e,"xAxis",t,n),h=Jn(e,"xAxis",t,n)):(p=Zn(e,"yAxis",r,n),h=Jn(e,"yAxis",r,n)),(a=(o=sl(p,h,!0))!==null&&o!==void 0?o:d)!==null&&a!==void 0?a:0}},B5=(e,t,r,n)=>{var i=ie(e),a,o;return i==="horizontal"?(a=Zn(e,"xAxis",t,n),o=Jn(e,"xAxis",t,n)):(a=Zn(e,"yAxis",r,n),o=Jn(e,"yAxis",r,n)),sl(a,o)};function m9(e,t,r,n,i){var a=n.length;if(!(a<1)){var o=Pt(e,r,0,!0),l,s=[];if(Qt(n[0].barSize)){var c=!1,u=r/a,d=n.reduce((g,w)=>g+(w.barSize||0),0);d+=(a-1)*o,d>=r&&(d-=(a-1)*o,o=0),d>=r&&u>0&&(c=!0,u*=.9,d=a*u);var p=(r-d)/2>>0,h={offset:p-o,size:0};l=n.reduce((g,w)=>{var S,C={stackId:w.stackId,dataKeys:w.dataKeys,position:{offset:h.offset+h.size+o,size:c?u:(S=w.barSize)!==null&&S!==void 0?S:0}},k=[...g,C];return h=k[k.length-1].position,k},s)}else{var m=Pt(t,r,0,!0);r-2*m-(a-1)*o<=0&&(o=0);var v=(r-2*m-(a-1)*o)/a;v>1&&(v>>=0);var b=Qt(i)?Math.min(v,i):v;l=n.reduce((g,w,S)=>[...g,{stackId:w.stackId,dataKeys:w.dataKeys,position:{offset:m+(v+o)*S+(v-b)/2,size:b}}],s)}return l}}var v9=(e,t,r,n,i,a,o)=>{var l=ke(o)?t:o,s=m9(r,n,i!==a?i:a,e,l);return i!==a&&s!=null&&(s=s.map(c=>gs(gs({},c),{},{position:gs(gs({},c.position),{},{offset:c.position.offset-i/2})}))),s},g9=O([p9,tP,ED,rP,h9,B5,l9],v9),y9=(e,t,r,n)=>Zn(e,"xAxis",t,n),b9=(e,t,r,n)=>Zn(e,"yAxis",r,n),x9=(e,t,r,n)=>Jn(e,"xAxis",t,n),w9=(e,t,r,n)=>Jn(e,"yAxis",r,n),S9=O([g9,$l],(e,t)=>{if(!(e==null||t==null)){var r=e.find(n=>n.stackId===t.stackId&&t.dataKey!=null&&n.dataKeys.includes(t.dataKey));if(r!=null)return r.position}}),C9=(e,t)=>{var r=Vv(t);if(!(!e||r==null||t==null)){var{stackId:n}=t;if(n!=null){var i=e[n];if(i){var{stackedData:a}=i;if(a)return a.find(o=>o.key===r)}}}},k9=O([u9,$l],C9),P9=O([Ye,y9,b9,x9,w9,S9,ie,rd,B5,k9,$l,s9],(e,t,r,n,i,a,o,l,s,c,u,d)=>{var{chartData:p,dataStartIndex:h,dataEndIndex:m}=l;if(!(u==null||a==null||o!=="horizontal"&&o!=="vertical"||t==null||r==null||n==null||i==null||s==null)){var{data:v}=u,b;if(v!=null&&v.length>0?b=v:b=p==null?void 0:p.slice(h,m+1),b!=null)return ZF({layout:o,barSettings:u,pos:a,bandSize:s,xAxis:t,yAxis:r,xAxisTicks:n,yAxisTicks:i,stackedData:c,displayedData:b,offset:e,cells:d})}}),H5=e=>{var{chartData:t}=e,r=De(),n=Dt();return y.useEffect(()=>n?()=>{}:(r(bb(t)),()=>{r(bb(void 0))}),[t,r,n]),null},Zb={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},U5=er({name:"brush",initialState:Zb,reducers:{setBrushSettings(e,t){return t.payload==null?Zb:t.payload}}});U5.actions;var N9=U5.reducer;function E9(e,t,r){return(t=O9(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O9(e){var t=A9(e,"string");return typeof t=="symbol"?t:t+""}function A9(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Ig{static create(t){return new Ig(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:r,position:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(n)switch(n){case"start":return this.scale(t);case"middle":{var i=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+i}case"end":{var a=this.bandwidth?this.bandwidth():0;return this.scale(t)+a}default:return this.scale(t)}if(r){var o=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+o}return this.scale(t)}}isInRange(t){var r=this.range(),n=r[0],i=r[r.length-1];return n<=i?t>=n&&t<=i:t>=i&&t<=n}}E9(Ig,"EPS",1e-4);function T9(e){return(e%180+180)%180}var _9=function(t){var{width:r,height:n}=t,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=T9(i),o=a*Math.PI/180,l=Math.atan(n/r),s=o>l&&o<Math.PI-l?n/Math.sin(o):r/Math.cos(o);return Math.abs(s)},z9={dots:[],areas:[],lines:[]},K5=er({name:"referenceElements",initialState:z9,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var r=nn(e).dots.findIndex(n=>n===t.payload);r!==-1&&e.dots.splice(r,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var r=nn(e).areas.findIndex(n=>n===t.payload);r!==-1&&e.areas.splice(r,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var r=nn(e).lines.findIndex(n=>n===t.payload);r!==-1&&e.lines.splice(r,1)}}});K5.actions;var M9=K5.reducer,j9=y.createContext(void 0),I9=e=>{var{children:t}=e,[r]=y.useState("".concat(al("recharts"),"-clip")),n=Mg();if(n==null)return null;var{x:i,y:a,width:o,height:l}=n;return y.createElement(j9.Provider,{value:r},y.createElement("defs",null,y.createElement("clipPath",{id:r},y.createElement("rect",{x:i,y:a,height:l,width:o}))),t)};function kf(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function W5(e,t,r){if(t<1)return[];if(t===1&&r===void 0)return e;for(var n=[],i=0;i<e.length;i+=t)if(r===void 0||r(e[i])===!0)n.push(e[i]);else return;return n}function D9(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return _9(n,r)}function R9(e,t,r){var n=r==="width",{x:i,y:a,width:o,height:l}=e;return t===1?{start:n?i:a,end:n?i+o:a+l}:{start:n?i+o:a+l,end:n?i:a}}function Vc(e,t,r,n,i){if(e*t<e*n||e*t>e*i)return!1;var a=r();return e*(t-e*a/2-n)>=0&&e*(t+e*a/2-i)<=0}function L9(e,t){return W5(e,t+1)}function $9(e,t,r,n,i){for(var a=(n||[]).slice(),{start:o,end:l}=t,s=0,c=1,u=o,d=function(){var m=n==null?void 0:n[s];if(m===void 0)return{v:W5(n,c)};var v=s,b,g=()=>(b===void 0&&(b=r(m,v)),b),w=m.coordinate,S=s===0||Vc(e,w,g,u,l);S||(s=0,u=o,c+=1),S&&(u=w+e*(g()/2+i),s+=c)},p;c<=a.length;)if(p=d(),p)return p.v;return[]}function ex(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function mt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ex(Object(r),!0).forEach(function(n){F9(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ex(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function F9(e,t,r){return(t=B9(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B9(e){var t=H9(e,"string");return typeof t=="symbol"?t:t+""}function H9(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function U9(e,t,r,n,i){for(var a=(n||[]).slice(),o=a.length,{start:l}=t,{end:s}=t,c=function(p){var h=a[p],m,v=()=>(m===void 0&&(m=r(h,p)),m);if(p===o-1){var b=e*(h.coordinate+e*v()/2-s);a[p]=h=mt(mt({},h),{},{tickCoord:b>0?h.coordinate-b*e:h.coordinate})}else a[p]=h=mt(mt({},h),{},{tickCoord:h.coordinate});var g=Vc(e,h.tickCoord,v,l,s);g&&(s=h.tickCoord-e*(v()/2+i),a[p]=mt(mt({},h),{},{isShow:!0}))},u=o-1;u>=0;u--)c(u);return a}function K9(e,t,r,n,i,a){var o=(n||[]).slice(),l=o.length,{start:s,end:c}=t;if(a){var u=n[l-1],d=r(u,l-1),p=e*(u.coordinate+e*d/2-c);o[l-1]=u=mt(mt({},u),{},{tickCoord:p>0?u.coordinate-p*e:u.coordinate});var h=Vc(e,u.tickCoord,()=>d,s,c);h&&(c=u.tickCoord-e*(d/2+i),o[l-1]=mt(mt({},u),{},{isShow:!0}))}for(var m=a?l-1:l,v=function(w){var S=o[w],C,k=()=>(C===void 0&&(C=r(S,w)),C);if(w===0){var P=e*(S.coordinate-e*k()/2-s);o[w]=S=mt(mt({},S),{},{tickCoord:P<0?S.coordinate-P*e:S.coordinate})}else o[w]=S=mt(mt({},S),{},{tickCoord:S.coordinate});var N=Vc(e,S.tickCoord,k,s,c);N&&(s=S.tickCoord+e*(k()/2+i),o[w]=mt(mt({},S),{},{isShow:!0}))},b=0;b<m;b++)v(b);return o}function Dg(e,t,r){var{tick:n,ticks:i,viewBox:a,minTickGap:o,orientation:l,interval:s,tickFormatter:c,unit:u,angle:d}=e;if(!i||!i.length||!n)return[];if(H(s)||Ki.isSsr){var p;return(p=L9(i,H(s)?s:0))!==null&&p!==void 0?p:[]}var h=[],m=l==="top"||l==="bottom"?"width":"height",v=u&&m==="width"?Ro(u,{fontSize:t,letterSpacing:r}):{width:0,height:0},b=(S,C)=>{var k=typeof c=="function"?c(S.value,C):S.value;return m==="width"?D9(Ro(k,{fontSize:t,letterSpacing:r}),v,d):Ro(k,{fontSize:t,letterSpacing:r})[m]},g=i.length>=2?tt(i[1].coordinate-i[0].coordinate):1,w=R9(a,g,m);return s==="equidistantPreserveStart"?$9(g,w,b,i,o):(s==="preserveStart"||s==="preserveStartEnd"?h=K9(g,w,b,i,o,s==="preserveStartEnd"):h=U9(g,w,b,i,o),h.filter(S=>S.isShow))}var W9=["viewBox"],V9=["viewBox"];function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ua.apply(null,arguments)}function tx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Ke(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tx(Object(r),!0).forEach(function(n){Rg(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tx(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function rx(e,t){if(e==null)return{};var r,n,i=G9(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function G9(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Rg(e,t,r){return(t=Y9(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y9(e){var t=q9(e,"string");return typeof t=="symbol"?t:t+""}function q9(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class ui extends y.Component{constructor(t){super(t),this.tickRefs=y.createRef(),this.tickRefs.current=[],this.state={fontSize:"",letterSpacing:""}}shouldComponentUpdate(t,r){var{viewBox:n}=t,i=rx(t,W9),a=this.props,{viewBox:o}=a,l=rx(a,V9);return!kf(n,o)||!kf(i,l)||!kf(r,this.state)}getTickLineCoord(t){var{x:r,y:n,width:i,height:a,orientation:o,tickSize:l,mirror:s,tickMargin:c}=this.props,u,d,p,h,m,v,b=s?-1:1,g=t.tickSize||l,w=H(t.tickCoord)?t.tickCoord:t.coordinate;switch(o){case"top":u=d=t.coordinate,h=n+ +!s*a,p=h-b*g,v=p-b*c,m=w;break;case"left":p=h=t.coordinate,d=r+ +!s*i,u=d-b*g,m=u-b*c,v=w;break;case"right":p=h=t.coordinate,d=r+ +s*i,u=d+b*g,m=u+b*c,v=w;break;default:u=d=t.coordinate,h=n+ +s*a,p=h+b*g,v=p+b*c,m=w;break}return{line:{x1:u,y1:p,x2:d,y2:h},tick:{x:m,y:v}}}getTickTextAnchor(){var{orientation:t,mirror:r}=this.props,n;switch(t){case"left":n=r?"start":"end";break;case"right":n=r?"end":"start";break;default:n="middle";break}return n}getTickVerticalAnchor(){var{orientation:t,mirror:r}=this.props;switch(t){case"left":case"right":return"middle";case"top":return r?"start":"end";default:return r?"end":"start"}}renderAxisLine(){var{x:t,y:r,width:n,height:i,orientation:a,mirror:o,axisLine:l}=this.props,s=Ke(Ke(Ke({},Ne(this.props,!1)),Ne(l,!1)),{},{fill:"none"});if(a==="top"||a==="bottom"){var c=+(a==="top"&&!o||a==="bottom"&&o);s=Ke(Ke({},s),{},{x1:t,y1:r+c*i,x2:t+n,y2:r+c*i})}else{var u=+(a==="left"&&!o||a==="right"&&o);s=Ke(Ke({},s),{},{x1:t+u*n,y1:r,x2:t+u*n,y2:r+i})}return y.createElement("line",ua({},s,{className:se("recharts-cartesian-axis-line",Qn(l,"className"))}))}static renderTickItem(t,r,n){var i,a=se(r.className,"recharts-cartesian-axis-tick-value");if(y.isValidElement(t))i=y.cloneElement(t,Ke(Ke({},r),{},{className:a}));else if(typeof t=="function")i=t(Ke(Ke({},r),{},{className:a}));else{var o="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(o=se(o,t.className)),i=y.createElement(pd,ua({},r,{className:o}),n)}return i}renderTicks(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],{tickLine:i,stroke:a,tick:o,tickFormatter:l,unit:s,padding:c}=this.props,u=Dg(Ke(Ke({},this.props),{},{ticks:n}),t,r),d=this.getTickTextAnchor(),p=this.getTickVerticalAnchor(),h=gn(this.props),m=Ne(o,!1),v=Ke(Ke({},h),{},{fill:"none"},Ne(i,!1)),b=u.map((g,w)=>{var{line:S,tick:C}=this.getTickLineCoord(g),k=Ke(Ke(Ke(Ke({textAnchor:d,verticalAnchor:p},h),{},{stroke:"none",fill:a},m),C),{},{index:w,payload:g,visibleTicksCount:u.length,tickFormatter:l,padding:c});return y.createElement(xt,ua({className:"recharts-cartesian-axis-tick",key:"tick-".concat(g.value,"-").concat(g.coordinate,"-").concat(g.tickCoord)},Tu(this.props,g,w)),i&&y.createElement("line",ua({},v,S,{className:se("recharts-cartesian-axis-tick-line",Qn(i,"className"))})),o&&ui.renderTickItem(o,k,"".concat(typeof l=="function"?l(g.value,w):g.value).concat(s||"")))});return b.length>0?y.createElement("g",{className:"recharts-cartesian-axis-ticks"},b):null}render(){var{axisLine:t,width:r,height:n,className:i,hide:a}=this.props;if(a)return null;var{ticks:o}=this.props;return r!=null&&r<=0||n!=null&&n<=0?null:y.createElement(xt,{className:se("recharts-cartesian-axis",i),ref:l=>{if(l){var s=l.getElementsByClassName("recharts-cartesian-axis-tick-value");this.tickRefs.current=Array.from(s);var c=s[0];if(c){var u=window.getComputedStyle(c).fontSize,d=window.getComputedStyle(c).letterSpacing;(u!==this.state.fontSize||d!==this.state.letterSpacing)&&this.setState({fontSize:window.getComputedStyle(c).fontSize,letterSpacing:window.getComputedStyle(c).letterSpacing})}}}},t&&this.renderAxisLine(),this.renderTicks(this.state.fontSize,this.state.letterSpacing,o),Bt.renderCallByParent(this.props))}}Rg(ui,"displayName","CartesianAxis");Rg(ui,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var X9=["x1","y1","x2","y2","key"],Q9=["offset"],J9=["xAxisId","yAxisId"],Z9=["xAxisId","yAxisId"];function nx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nx(Object(r),!0).forEach(function(n){eB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nx(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function eB(e,t,r){return(t=tB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tB(e){var t=rB(e,"string");return typeof t=="symbol"?t:t+""}function rB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ki.apply(null,arguments)}function Gc(e,t){if(e==null)return{};var r,n,i=nB(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function nB(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var iB=e=>{var{fill:t}=e;if(!t||t==="none")return null;var{fillOpacity:r,x:n,y:i,width:a,height:o,ry:l}=e;return y.createElement("rect",{x:n,y:i,ry:l,width:a,height:o,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function V5(e,t){var r;if(y.isValidElement(e))r=y.cloneElement(e,t);else if(typeof e=="function")r=e(t);else{var{x1:n,y1:i,x2:a,y2:o,key:l}=t,s=Gc(t,X9),c=gn(s),u=Gc(c,Q9);r=y.createElement("line",ki({},u,{x1:n,y1:i,x2:a,y2:o,fill:"none",key:l}))}return r}function aB(e){var{x:t,width:r,horizontal:n=!0,horizontalPoints:i}=e;if(!n||!i||!i.length)return null;var a=Gc(e,J9),o=i.map((l,s)=>{var c=yt(yt({},a),{},{x1:t,y1:l,x2:t+r,y2:l,key:"line-".concat(s),index:s});return V5(n,c)});return y.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function oB(e){var{y:t,height:r,vertical:n=!0,verticalPoints:i}=e;if(!n||!i||!i.length)return null;var a=Gc(e,Z9),o=i.map((l,s)=>{var c=yt(yt({},a),{},{x1:l,y1:t,x2:l,y2:t+r,key:"line-".concat(s),index:s});return V5(n,c)});return y.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function lB(e){var{horizontalFill:t,fillOpacity:r,x:n,y:i,width:a,height:o,horizontalPoints:l,horizontal:s=!0}=e;if(!s||!t||!t.length)return null;var c=l.map(d=>Math.round(d+i-i)).sort((d,p)=>d-p);i!==c[0]&&c.unshift(0);var u=c.map((d,p)=>{var h=!c[p+1],m=h?i+o-d:c[p+1]-d;if(m<=0)return null;var v=p%t.length;return y.createElement("rect",{key:"react-".concat(p),y:d,x:n,height:m,width:a,stroke:"none",fill:t[v],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return y.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}function sB(e){var{vertical:t=!0,verticalFill:r,fillOpacity:n,x:i,y:a,width:o,height:l,verticalPoints:s}=e;if(!t||!r||!r.length)return null;var c=s.map(d=>Math.round(d+i-i)).sort((d,p)=>d-p);i!==c[0]&&c.unshift(0);var u=c.map((d,p)=>{var h=!c[p+1],m=h?i+o-d:c[p+1]-d;if(m<=0)return null;var v=p%r.length;return y.createElement("rect",{key:"react-".concat(p),x:d,y:a,width:m,height:l,stroke:"none",fill:r[v],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return y.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}var cB=(e,t)=>{var{xAxis:r,width:n,height:i,offset:a}=e;return TC(Dg(yt(yt(yt({},ui.defaultProps),r),{},{ticks:_C(r,!0),viewBox:{x:0,y:0,width:n,height:i}})),a.left,a.left+a.width,t)},uB=(e,t)=>{var{yAxis:r,width:n,height:i,offset:a}=e;return TC(Dg(yt(yt(yt({},ui.defaultProps),r),{},{ticks:_C(r,!0),viewBox:{x:0,y:0,width:n,height:i}})),a.top,a.top+a.height,t)},dB={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0};function Nh(e){var t=RC(),r=LC(),n=DC(),i=yt(yt({},tr(e,dB)),{},{x:H(e.x)?e.x:n.left,y:H(e.y)?e.y:n.top,width:H(e.width)?e.width:n.width,height:H(e.height)?e.height:n.height}),{xAxisId:a,yAxisId:o,x:l,y:s,width:c,height:u,syncWithTicks:d,horizontalValues:p,verticalValues:h}=i,m=Dt(),v=W(E=>db(E,"xAxis",a,m)),b=W(E=>db(E,"yAxis",o,m));if(!H(c)||c<=0||!H(u)||u<=0||!H(l)||l!==+l||!H(s)||s!==+s)return null;var g=i.verticalCoordinatesGenerator||cB,w=i.horizontalCoordinatesGenerator||uB,{horizontalPoints:S,verticalPoints:C}=i;if((!S||!S.length)&&typeof w=="function"){var k=p&&p.length,P=w({yAxis:b?yt(yt({},b),{},{ticks:k?p:b.ticks}):void 0,width:t,height:r,offset:n},k?!0:d);Do(Array.isArray(P),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof P,"]")),Array.isArray(P)&&(S=P)}if((!C||!C.length)&&typeof g=="function"){var N=h&&h.length,A=g({xAxis:v?yt(yt({},v),{},{ticks:N?h:v.ticks}):void 0,width:t,height:r,offset:n},N?!0:d);Do(Array.isArray(A),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A,"]")),Array.isArray(A)&&(C=A)}return y.createElement("g",{className:"recharts-cartesian-grid"},y.createElement(iB,{fill:i.fill,fillOpacity:i.fillOpacity,x:i.x,y:i.y,width:i.width,height:i.height,ry:i.ry}),y.createElement(lB,ki({},i,{horizontalPoints:S})),y.createElement(sB,ki({},i,{verticalPoints:C})),y.createElement(aB,ki({},i,{offset:n,horizontalPoints:S,xAxis:v,yAxis:b})),y.createElement(oB,ki({},i,{offset:n,verticalPoints:C,xAxis:v,yAxis:b})))}Nh.displayName="CartesianGrid";var G5=(e,t,r,n)=>Zn(e,"xAxis",t,n),Y5=(e,t,r,n)=>Jn(e,"xAxis",t,n),q5=(e,t,r,n)=>Zn(e,"yAxis",r,n),X5=(e,t,r,n)=>Jn(e,"yAxis",r,n),fB=O([ie,G5,q5,Y5,X5],(e,t,r,n,i)=>ai(e,"xAxis")?sl(t,n,!1):sl(r,i,!1)),pB=(e,t,r,n,i)=>i;function hB(e){return e.type==="line"}var mB=O([ld,pB],(e,t)=>e.filter(hB).find(r=>r.id===t)),vB=O([ie,G5,q5,Y5,X5,mB,fB,rd],(e,t,r,n,i,a,o,l)=>{var{chartData:s,dataStartIndex:c,dataEndIndex:u}=l;if(!(a==null||t==null||r==null||n==null||i==null||n.length===0||i.length===0||o==null)){var{dataKey:d,data:p}=a,h;if(p!=null&&p.length>0?h=p:h=s==null?void 0:s.slice(c,u+1),h!=null)return RB({layout:e,xAxis:t,yAxis:r,xAxisTicks:n,yAxisTicks:i,dataKey:d,bandSize:o,displayedData:h})}}),gB=["id"],yB=["type","layout","connectNulls","needClip"],bB=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function ix(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Nr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ix(Object(r),!0).forEach(function(n){xB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ix(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function xB(e,t,r){return(t=wB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function wB(e){var t=SB(e,"string");return typeof t=="symbol"?t:t+""}function SB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lg(e,t){if(e==null)return{};var r,n,i=CB(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function CB(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fi.apply(null,arguments)}var kB=e=>{var{dataKey:t,name:r,stroke:n,legendType:i,hide:a}=e;return[{inactive:a,dataKey:t,type:i,color:n,value:Ua(r,t),payload:e}]};function PB(e){var{dataKey:t,data:r,stroke:n,strokeWidth:i,fill:a,name:o,hide:l,unit:s}=e;return{dataDefinedOnItem:r,positions:void 0,settings:{stroke:n,strokeWidth:i,fill:a,dataKey:t,nameKey:void 0,name:Ua(o,t),hide:l,type:e.tooltipType,color:e.stroke,unit:s}}}var Q5=(e,t)=>"".concat(t,"px ").concat(e-t,"px");function NB(e,t){for(var r=e.length%2!==0?[...e,0]:e,n=[],i=0;i<t;++i)n=[...n,...r];return n}var EB=(e,t,r)=>{var n=r.reduce((d,p)=>d+p);if(!n)return Q5(t,e);for(var i=Math.floor(e/n),a=e%n,o=t-e,l=[],s=0,c=0;s<r.length;c+=r[s],++s)if(c+r[s]>a){l=[...r.slice(0,s),a-c];break}var u=l.length%2===0?[0,o]:[o];return[...NB(r,i),...l,...u].map(d=>"".concat(d,"px")).join(", ")};function OB(e,t){var r;if(y.isValidElement(e))r=y.cloneElement(e,t);else if(typeof e=="function")r=e(t);else{var n=se("recharts-line-dot",typeof e!="boolean"?e.className:"");r=y.createElement(S5,Fi({},t,{className:n}))}return r}function AB(e,t){return e==null?!1:t?!0:e.length===1}function TB(e){var{clipPathId:t,points:r,props:n}=e,{dot:i,dataKey:a,needClip:o}=n;if(!AB(r,i))return null;var l=Lg(n,gB),s=hS(i),c=gn(l),u=Ne(i,!0),d=r.map((h,m)=>{var v=Nr(Nr(Nr({key:"dot-".concat(m),r:3},c),u),{},{index:m,cx:h.x,cy:h.y,dataKey:a,value:h.value,payload:h.payload,points:r});return OB(i,v)}),p={clipPath:o?"url(#clipPath-".concat(s?"":"dots-").concat(t,")"):void 0};return y.createElement(xt,Fi({className:"recharts-line-dots",key:"dots"},p),d)}function Eh(e){var{clipPathId:t,pathRef:r,points:n,strokeDasharray:i,props:a,showLabels:o}=e,{type:l,layout:s,connectNulls:c,needClip:u}=a,d=Lg(a,yB),p=Nr(Nr({},Ne(d,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:u?"url(#clipPath-".concat(t,")"):void 0,points:n,type:l,layout:s,connectNulls:c,strokeDasharray:i??a.strokeDasharray});return y.createElement(y.Fragment,null,(n==null?void 0:n.length)>1&&y.createElement(fv,Fi({},p,{pathRef:r})),y.createElement(TB,{points:n,clipPathId:t,props:a}),o&&Gn.renderCallByParent(a,n))}function _B(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function zB(e){var{clipPathId:t,props:r,pathRef:n,previousPointsRef:i,longestAnimatedLengthRef:a}=e,{points:o,strokeDasharray:l,isAnimationActive:s,animationBegin:c,animationDuration:u,animationEasing:d,animateNewValues:p,width:h,height:m,onAnimationEnd:v,onAnimationStart:b}=r,g=i.current,w=Ag(r,"recharts-line-"),[S,C]=y.useState(!1),k=y.useCallback(()=>{typeof v=="function"&&v(),C(!1)},[v]),P=y.useCallback(()=>{typeof b=="function"&&b(),C(!0)},[b]),N=_B(n.current),A=a.current;return y.createElement(_g,{begin:c,duration:u,isActive:s,easing:d,onAnimationEnd:k,onAnimationStart:P,key:w},E=>{var _=Pr(A,N+A,E),z=Math.min(_,N),M;if(l){var G="".concat(l).split(/[,\s]+/gim).map(L=>parseFloat(L));M=EB(z,N,G)}else M=Q5(N,z);if(g){var Z=g.length/o.length,D=E===1?o:o.map((L,q)=>{var R=Math.floor(q*Z);if(g[R]){var $=g[R];return Nr(Nr({},L),{},{x:Pr($.x,L.x,E),y:Pr($.y,L.y,E)})}return p?Nr(Nr({},L),{},{x:Pr(h*2,L.x,E),y:Pr(m/2,L.y,E)}):Nr(Nr({},L),{},{x:L.x,y:L.y})});return i.current=D,y.createElement(Eh,{props:r,points:D,clipPathId:t,pathRef:n,showLabels:!S,strokeDasharray:M})}return E>0&&N>0&&(i.current=o,a.current=z),y.createElement(Eh,{props:r,points:o,clipPathId:t,pathRef:n,showLabels:!S,strokeDasharray:M})})}function MB(e){var{clipPathId:t,props:r}=e,{points:n,isAnimationActive:i}=r,a=y.useRef(null),o=y.useRef(0),l=y.useRef(null),s=a.current;return i&&n&&n.length&&s!==n?y.createElement(zB,{props:r,clipPathId:t,previousPointsRef:a,longestAnimatedLengthRef:o,pathRef:l}):y.createElement(Eh,{props:r,points:n,clipPathId:t,pathRef:l,showLabels:!0})}var jB=(e,t)=>({x:e.x,y:e.y,value:e.value,errorVal:ve(e.payload,t)});class IB extends y.Component{render(){var t,{hide:r,dot:n,points:i,className:a,xAxisId:o,yAxisId:l,top:s,left:c,width:u,height:d,id:p,needClip:h}=this.props;if(r)return null;var m=se("recharts-line",a),v=p,{r:b=3,strokeWidth:g=2}=(t=Ne(n,!1))!==null&&t!==void 0?t:{r:3,strokeWidth:2},w=hS(n),S=b*2+g;return y.createElement(y.Fragment,null,y.createElement(xt,{className:m},h&&y.createElement("defs",null,y.createElement(L5,{clipPathId:v,xAxisId:o,yAxisId:l}),!w&&y.createElement("clipPath",{id:"clipPath-dots-".concat(v)},y.createElement("rect",{x:c-S/2,y:s-S/2,width:u+S,height:d+S}))),y.createElement(MB,{props:this.props,clipPathId:v}),y.createElement(R5,{xAxisId:o,yAxisId:l,data:i,dataPointFormatter:jB,errorBarOffset:0},this.props.children)),y.createElement(yF,{activeDot:this.props.activeDot,points:i,mainColor:this.props.stroke,itemDataKey:this.props.dataKey}))}}var J5={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:!Ki.isSsr,label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0};function DB(e){var t=tr(e,J5),{activeDot:r,animateNewValues:n,animationBegin:i,animationDuration:a,animationEasing:o,connectNulls:l,dot:s,hide:c,isAnimationActive:u,label:d,legendType:p,xAxisId:h,yAxisId:m,id:v}=t,b=Lg(t,bB),{needClip:g}=jg(h,m),w=Mg(),S=qu(),C=Dt(),k=W(_=>vB(_,h,m,C,v));if(S!=="horizontal"&&S!=="vertical"||k==null||w==null)return null;var{height:P,width:N,x:A,y:E}=w;return y.createElement(IB,Fi({},b,{id:v,connectNulls:l,dot:s,activeDot:r,animateNewValues:n,animationBegin:i,animationDuration:a,animationEasing:o,isAnimationActive:u,hide:c,label:d,legendType:p,xAxisId:h,yAxisId:m,points:k,layout:S,height:P,width:N,left:A,top:E,needClip:g}))}function RB(e){var{layout:t,xAxis:r,yAxis:n,xAxisTicks:i,yAxisTicks:a,dataKey:o,bandSize:l,displayedData:s}=e;return s.map((c,u)=>{var d=ve(c,o);if(t==="horizontal"){var p=e1({axis:r,ticks:i,bandSize:l,entry:c,index:u}),h=ke(d)?null:n.scale(d);return{x:p,y:h,value:d,payload:c}}var m=ke(d)?null:r.scale(d),v=e1({axis:n,ticks:a,bandSize:l,entry:c,index:u});return m==null||v==null?null:{x:m,y:v,value:d,payload:c}}).filter(Boolean)}function Z5(e){var t=tr(e,J5),r=Dt();return y.createElement(Tg,{id:t.id,type:"line"},n=>y.createElement(y.Fragment,null,y.createElement(T5,{legendPayload:kB(t)}),y.createElement(Og,{fn:PB,args:t}),y.createElement(z5,{type:"line",id:n,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:r}),y.createElement(DB,Fi({},t,{id:n}))))}Z5.displayName="Line";function ax(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ox(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ax(Object(r),!0).forEach(function(n){LB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ax(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function LB(e,t,r){return(t=$B(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $B(e){var t=FB(e,"string");return typeof t=="symbol"?t:t+""}function FB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var BB={xAxis:{},yAxis:{},zAxis:{}},eN=er({name:"cartesianAxis",initialState:BB,reducers:{addXAxis(e,t){e.xAxis[t.payload.id]=t.payload},removeXAxis(e,t){delete e.xAxis[t.payload.id]},addYAxis(e,t){e.yAxis[t.payload.id]=t.payload},removeYAxis(e,t){delete e.yAxis[t.payload.id]},addZAxis(e,t){e.zAxis[t.payload.id]=t.payload},removeZAxis(e,t){delete e.zAxis[t.payload.id]},updateYAxisWidth(e,t){var{id:r,width:n}=t.payload;e.yAxis[r]&&(e.yAxis[r]=ox(ox({},e.yAxis[r]),{},{width:n}))}}}),{addXAxis:HB,removeXAxis:UB,addYAxis:KB,removeYAxis:WB,addZAxis:DU,removeZAxis:RU,updateYAxisWidth:VB}=eN.actions,GB=eN.reducer,YB=["children"],qB=["dangerouslySetInnerHTML","ticks"];function tN(e,t,r){return(t=XB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XB(e){var t=QB(e,"string");return typeof t=="symbol"?t:t+""}function QB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oh(){return Oh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oh.apply(null,arguments)}function rN(e,t){if(e==null)return{};var r,n,i=JB(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function JB(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function ZB(e){var t=De(),r=y.useMemo(()=>{var a=rN(e,YB);return a},[e]),n=W(a=>wn(a,r.id)),i=r===n;return y.useEffect(()=>(t(HB(r)),()=>{t(UB(r))}),[r,t]),i?e.children:null}var eH=e=>{var{xAxisId:t,className:r}=e,n=W(IC),i=Dt(),a="xAxis",o=W(d=>Xa(d,a,t,i)),l=W(d=>IP(d,a,t,i)),s=W(d=>_P(d,t)),c=W(d=>y7(d,t));if(s==null||c==null)return null;var u=rN(e,qB);return y.createElement(ui,Oh({},u,{scale:o,x:c.x,y:c.y,width:s.width,height:s.height,className:se("recharts-".concat(a," ").concat(a),r),viewBox:n,ticks:l}))},tH=e=>{var t,r,n,i,a;return y.createElement(ZB,{interval:(t=e.interval)!==null&&t!==void 0?t:"preserveEnd",id:e.xAxisId,scale:e.scale,type:e.type,padding:e.padding,allowDataOverflow:e.allowDataOverflow,domain:e.domain,dataKey:e.dataKey,allowDuplicatedCategory:e.allowDuplicatedCategory,allowDecimals:e.allowDecimals,tickCount:e.tickCount,includeHidden:(r=e.includeHidden)!==null&&r!==void 0?r:!1,reversed:e.reversed,ticks:e.ticks,height:e.height,orientation:e.orientation,mirror:e.mirror,hide:e.hide,unit:e.unit,name:e.name,angle:(n=e.angle)!==null&&n!==void 0?n:0,minTickGap:(i=e.minTickGap)!==null&&i!==void 0?i:5,tick:(a=e.tick)!==null&&a!==void 0?a:!0,tickFormatter:e.tickFormatter},y.createElement(eH,e))};class Yc extends y.Component{render(){return y.createElement(tH,this.props)}}tN(Yc,"displayName","XAxis");tN(Yc,"defaultProps",{allowDataOverflow:Rt.allowDataOverflow,allowDecimals:Rt.allowDecimals,allowDuplicatedCategory:Rt.allowDuplicatedCategory,height:Rt.height,hide:!1,mirror:Rt.mirror,orientation:Rt.orientation,padding:Rt.padding,reversed:Rt.reversed,scale:Rt.scale,tickCount:Rt.tickCount,type:Rt.type,xAxisId:0});var rH=e=>{var{ticks:t,label:r,labelGapWithTick:n=5,tickSize:i=0,tickMargin:a=0}=e,o=0;if(t){t.forEach(u=>{if(u){var d=u.getBoundingClientRect();d.width>o&&(o=d.width)}});var l=r?r.getBoundingClientRect().width:0,s=i+a,c=o+s+l+(r?n:0);return Math.round(c)}return 0},nH=["dangerouslySetInnerHTML","ticks"];function nN(e,t,r){return(t=iH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iH(e){var t=aH(e,"string");return typeof t=="symbol"?t:t+""}function aH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ah(){return Ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ah.apply(null,arguments)}function oH(e,t){if(e==null)return{};var r,n,i=lH(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function lH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function sH(e){var t=De();return y.useEffect(()=>(t(KB(e)),()=>{t(WB(e))}),[e,t]),null}var cH=e=>{var t,{yAxisId:r,className:n,width:i,label:a}=e,o=y.useRef(null),l=y.useRef(null),s=W(IC),c=Dt(),u=De(),d="yAxis",p=W(g=>Xa(g,d,r,c)),h=W(g=>zP(g,r)),m=W(g=>b7(g,r)),v=W(g=>IP(g,d,r,c));if(y.useLayoutEffect(()=>{var g;if(!(i!=="auto"||!h||xg(a)||y.isValidElement(a))){var w=o.current,S=w==null||(g=w.tickRefs)===null||g===void 0?void 0:g.current,{tickSize:C,tickMargin:k}=w.props,P=rH({ticks:S,label:l.current,labelGapWithTick:5,tickSize:C,tickMargin:k});Math.round(h.width)!==Math.round(P)&&u(VB({id:r,width:P}))}},[o,o==null||(t=o.current)===null||t===void 0||(t=t.tickRefs)===null||t===void 0?void 0:t.current,h==null?void 0:h.width,h,u,a,r,i]),h==null||m==null)return null;var b=oH(e,nH);return y.createElement(ui,Ah({},b,{ref:o,labelRef:l,scale:p,x:m.x,y:m.y,width:h.width,height:h.height,className:se("recharts-".concat(d," ").concat(d),n),viewBox:s,ticks:v}))},uH=e=>{var t,r,n,i,a;return y.createElement(y.Fragment,null,y.createElement(sH,{interval:(t=e.interval)!==null&&t!==void 0?t:"preserveEnd",id:e.yAxisId,scale:e.scale,type:e.type,domain:e.domain,allowDataOverflow:e.allowDataOverflow,dataKey:e.dataKey,allowDuplicatedCategory:e.allowDuplicatedCategory,allowDecimals:e.allowDecimals,tickCount:e.tickCount,padding:e.padding,includeHidden:(r=e.includeHidden)!==null&&r!==void 0?r:!1,reversed:e.reversed,ticks:e.ticks,width:e.width,orientation:e.orientation,mirror:e.mirror,hide:e.hide,unit:e.unit,name:e.name,angle:(n=e.angle)!==null&&n!==void 0?n:0,minTickGap:(i=e.minTickGap)!==null&&i!==void 0?i:5,tick:(a=e.tick)!==null&&a!==void 0?a:!0,tickFormatter:e.tickFormatter}),y.createElement(cH,e))},dH={allowDataOverflow:Lt.allowDataOverflow,allowDecimals:Lt.allowDecimals,allowDuplicatedCategory:Lt.allowDuplicatedCategory,hide:!1,mirror:Lt.mirror,orientation:Lt.orientation,padding:Lt.padding,reversed:Lt.reversed,scale:Lt.scale,tickCount:Lt.tickCount,type:Lt.type,width:Lt.width,yAxisId:0};class qc extends y.Component{render(){return y.createElement(uH,this.props)}}nN(qc,"displayName","YAxis");nN(qc,"defaultProps",dH);var lx={},fH={get exports(){return lx},set exports(e){lx=e}},iN={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fl=y;function pH(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hH=typeof Object.is=="function"?Object.is:pH,mH=Fl.useSyncExternalStore,vH=Fl.useRef,gH=Fl.useEffect,yH=Fl.useMemo,bH=Fl.useDebugValue;iN.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var a=vH(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=yH(function(){function s(h){if(!c){if(c=!0,u=h,h=n(h),i!==void 0&&o.hasValue){var m=o.value;if(i(m,h))return d=m}return d=h}if(m=d,hH(u,h))return m;var v=n(h);return i!==void 0&&i(m,v)?(u=h,m):(u=h,d=v)}var c=!1,u,d,p=r===void 0?null:r;return[function(){return s(t())},p===null?void 0:function(){return s(p())}]},[t,r,n,i]);var l=mH(e,a[0],a[1]);return gH(function(){o.hasValue=!0,o.value=l},[l]),bH(l),l};(function(e){e.exports=iN})(fH);function xH(e){e()}function wH(){let e=null,t=null;return{clear(){e=null,t=null},notify(){xH(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var sx={notify(){},get:()=>[]};function SH(e,t){let r,n=sx,i=0,a=!1;function o(v){u();const b=n.subscribe(v);let g=!1;return()=>{g||(g=!0,b(),d())}}function l(){n.notify()}function s(){m.onStateChange&&m.onStateChange()}function c(){return a}function u(){i++,r||(r=t?t.addNestedSub(s):e.subscribe(s),n=wH())}function d(){i--,r&&i===0&&(r(),r=void 0,n.clear(),n=sx)}function p(){a||(a=!0,u())}function h(){a&&(a=!1,d())}const m={addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:s,isSubscribed:c,trySubscribe:p,tryUnsubscribe:h,getListeners:()=>n};return m}var CH=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kH=CH(),PH=()=>typeof navigator<"u"&&navigator.product==="ReactNative",NH=PH(),EH=()=>kH||NH?y.useLayoutEffect:y.useEffect,OH=EH(),Pf=Symbol.for("react-redux-context"),Nf=typeof globalThis<"u"?globalThis:{};function AH(){if(!y.createContext)return{};const e=Nf[Pf]??(Nf[Pf]=new Map);let t=e.get(y.createContext);return t||(t=y.createContext(null),e.set(y.createContext,t)),t}var TH=AH();function _H(e){const{children:t,context:r,serverState:n,store:i}=e,a=y.useMemo(()=>{const s=SH(i);return{store:i,subscription:s,getServerState:n?()=>n:void 0}},[i,n]),o=y.useMemo(()=>i.getState(),[i]);OH(()=>{const{subscription:s}=a;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),o!==i.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[a,o]);const l=r||TH;return y.createElement(l.Provider,{value:a},t)}var zH=_H,MH=(e,t)=>t,$g=O([MH,ie,sP,Xe,XP,Sn,kR,Ye],AR),Fg=e=>{var t=e.currentTarget.getBoundingClientRect(),r=t.width/e.currentTarget.offsetWidth,n=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/r),chartY:Math.round((e.clientY-t.top)/n)}},aN=mr("mouseClick"),oN=Nl();oN.startListening({actionCreator:aN,effect:(e,t)=>{var r=e.payload,n=$g(t.getState(),Fg(r));(n==null?void 0:n.activeIndex)!=null&&t.dispatch(z7({activeIndex:n.activeIndex,activeDataKey:void 0,activeCoordinate:n.activeCoordinate}))}});var Th=mr("mouseMove"),lN=Nl();lN.startListening({actionCreator:Th,effect:(e,t)=>{var r=e.payload,n=t.getState(),i=ug(n,n.tooltip.settings.shared),a=$g(n,Fg(r));i==="axis"&&((a==null?void 0:a.activeIndex)!=null?t.dispatch(UP({activeIndex:a.activeIndex,activeDataKey:void 0,activeCoordinate:a.activeCoordinate})):t.dispatch(HP()))}});function jH(e,t){return t instanceof HTMLElement?"HTMLElement <".concat(t.tagName,' class="').concat(t.className,'">'):t===window?"global.window":t}var cx={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index"},sN=er({name:"rootProps",initialState:cx,reducers:{updateOptions:(e,t)=>{var r;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(r=t.payload.barGap)!==null&&r!==void 0?r:cx.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className}}}),IH=sN.reducer,{updateOptions:DH}=sN.actions,cN=er({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}}),{updatePolarOptions:RH}=cN.actions,LH=cN.reducer,uN=mr("keyDown"),dN=mr("focus"),Bg=Nl();Bg.startListening({actionCreator:uN,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:i}=r.tooltip,a=e.payload;if(!(a!=="ArrowRight"&&a!=="ArrowLeft"&&a!=="Enter")){var o=Number(dg(i,Ja(r))),l=Sn(r);if(a==="Enter"){var s=Bc(r,"axis","hover",String(i.index));t.dispatch(yh({active:!i.active,activeIndex:i.index,activeDataKey:i.dataKey,activeCoordinate:s}));return}var c=C7(r),u=c==="left-to-right"?1:-1,d=a==="ArrowRight"?1:-1,p=o+d*u;if(!(l==null||p>=l.length||p<0)){var h=Bc(r,"axis","hover",String(p));t.dispatch(yh({active:!0,activeIndex:p.toString(),activeDataKey:void 0,activeCoordinate:h}))}}}}});Bg.startListening({actionCreator:dN,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:i}=r.tooltip;if(!i.active&&i.index==null){var a="0",o=Bc(r,"axis","hover",String(a));t.dispatch(yh({activeDataKey:void 0,active:!0,activeIndex:a,activeCoordinate:o}))}}}});var ir=mr("externalEvent"),fN=Nl();fN.startListening({actionCreator:ir,effect:(e,t)=>{if(e.payload.handler!=null){var r=t.getState(),n={activeCoordinate:hR(r),activeDataKey:e5(r),activeIndex:ei(r),activeLabel:ZP(r),activeTooltipIndex:ei(r),isTooltipActive:mR(r)};e.payload.handler(n,e.payload.reactEvent)}}});var $H=O([Qa],e=>e.tooltipItemPayloads),FH=O([$H,Dl,(e,t,r)=>t,(e,t,r)=>r],(e,t,r,n)=>{var i=e.find(l=>l.settings.dataKey===n);if(i!=null){var{positions:a}=i;if(a!=null){var o=t(a,r);return o}}}),pN=mr("touchMove"),hN=Nl();hN.startListening({actionCreator:pN,effect:(e,t)=>{var r=e.payload,n=t.getState(),i=ug(n,n.tooltip.settings.shared);if(i==="axis"){var a=$g(n,Fg({clientX:r.touches[0].clientX,clientY:r.touches[0].clientY,currentTarget:r.currentTarget}));(a==null?void 0:a.activeIndex)!=null&&t.dispatch(UP({activeIndex:a.activeIndex,activeDataKey:void 0,activeCoordinate:a.activeCoordinate}))}else if(i==="item"){var o,l=r.touches[0],s=document.elementFromPoint(l.clientX,l.clientY);if(!s||!s.getAttribute)return;var c=s.getAttribute(MC),u=(o=s.getAttribute(jC))!==null&&o!==void 0?o:void 0,d=FH(t.getState(),c,u);t.dispatch(BP({activeDataKey:u,activeIndex:c,activeCoordinate:d}))}}});var BH=aC({brush:N9,cartesianAxis:GB,chartData:KR,errorBars:TF,graphicalItems:$$,layout:V6,legend:Tz,options:$R,polarAxis:l$,polarOptions:LH,referenceElements:M9,rootProps:IH,tooltip:M7}),HH=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"Chart";return g6({reducer:BH,preloadedState:t,middleware:n=>n({serializableCheck:!1}).concat([oN.middleware,lN.middleware,Bg.middleware,fN.middleware,hN.middleware]),devTools:{serialize:{replacer:jH},name:"recharts-".concat(r)}})};function mN(e){var{preloadedState:t,children:r,reduxStoreName:n}=e,i=Dt(),a=y.useRef(null);if(i)return r;a.current==null&&(a.current=HH(t,n));var o=tv;return y.createElement(zH,{context:o,store:a.current},r)}function vN(e){var{layout:t,width:r,height:n,margin:i}=e,a=De(),o=Dt();return y.useEffect(()=>{o||(a(U6(t)),a(K6({width:r,height:n})),a(H6(i)))},[a,o,t,r,n,i]),null}function gN(e){var t=De();return y.useEffect(()=>{t(DH(e))},[t,e]),null}var UH=["children"];function KH(e,t){if(e==null)return{};var r,n,i=WH(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function WH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Xc(){return Xc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xc.apply(null,arguments)}var VH={width:"100%",height:"100%"},GH=y.forwardRef((e,t)=>{var r=RC(),n=LC(),i=HC();if(!Ta(r)||!Ta(n))return null;var{children:a,otherAttributes:o,title:l,desc:s}=e,c,u;return typeof o.tabIndex=="number"?c=o.tabIndex:c=i?0:void 0,typeof o.role=="string"?u=o.role:u=i?"application":void 0,y.createElement(mS,Xc({},o,{title:l,desc:s,role:u,tabIndex:c,width:r,height:n,style:VH,ref:t}),a)}),YH=e=>{var{children:t}=e,r=W(Yu);if(!r)return null;var{width:n,height:i,y:a,x:o}=r;return y.createElement(mS,{width:n,height:i,x:o,y:a},t)},ux=y.forwardRef((e,t)=>{var{children:r}=e,n=KH(e,UH),i=Dt();return i?y.createElement(YH,null,r):y.createElement(GH,Xc({ref:t},n),r)});function qH(){var e=De(),[t,r]=y.useState(null),n=W(wz);return y.useEffect(()=>{if(t!=null){var i=t.getBoundingClientRect(),a=i.width/t.offsetWidth;Qt(a)&&a!==n&&e(W6(a))}},[t,e,n]),r}function dx(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function XH(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dx(Object(r),!0).forEach(function(n){QH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dx(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function QH(e,t,r){return(t=JH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function JH(e){var t=ZH(e,"string");return typeof t=="symbol"?t:t+""}function ZH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var eU=y.forwardRef((e,t)=>{var{children:r,className:n,height:i,onClick:a,onContextMenu:o,onDoubleClick:l,onMouseDown:s,onMouseEnter:c,onMouseLeave:u,onMouseMove:d,onMouseUp:p,onTouchEnd:h,onTouchMove:m,onTouchStart:v,style:b,width:g}=e,w=De(),[S,C]=y.useState(null),[k,P]=y.useState(null);GR();var N=qH(),A=y.useCallback(F=>{N(F),typeof t=="function"&&t(F),C(F),P(F)},[N,t,C,P]),E=y.useCallback(F=>{w(aN(F)),w(ir({handler:a,reactEvent:F}))},[w,a]),_=y.useCallback(F=>{w(Th(F)),w(ir({handler:c,reactEvent:F}))},[w,c]),z=y.useCallback(F=>{w(HP()),w(ir({handler:u,reactEvent:F}))},[w,u]),M=y.useCallback(F=>{w(Th(F)),w(ir({handler:d,reactEvent:F}))},[w,d]),G=y.useCallback(()=>{w(dN())},[w]),Z=y.useCallback(F=>{w(uN(F.key))},[w]),D=y.useCallback(F=>{w(ir({handler:o,reactEvent:F}))},[w,o]),L=y.useCallback(F=>{w(ir({handler:l,reactEvent:F}))},[w,l]),q=y.useCallback(F=>{w(ir({handler:s,reactEvent:F}))},[w,s]),R=y.useCallback(F=>{w(ir({handler:p,reactEvent:F}))},[w,p]),$=y.useCallback(F=>{w(ir({handler:v,reactEvent:F}))},[w,v]),V=y.useCallback(F=>{w(pN(F)),w(ir({handler:m,reactEvent:F}))},[w,m]),X=y.useCallback(F=>{w(ir({handler:h,reactEvent:F}))},[w,h]);return y.createElement(o5.Provider,{value:S},y.createElement(w8.Provider,{value:k},y.createElement("div",{className:se("recharts-wrapper",n),style:XH({position:"relative",cursor:"default",width:g,height:i},b),onClick:E,onContextMenu:D,onDoubleClick:L,onFocus:G,onKeyDown:Z,onMouseDown:q,onMouseEnter:_,onMouseLeave:z,onMouseMove:M,onMouseUp:R,onTouchEnd:X,onTouchMove:V,onTouchStart:$,ref:A},r)))}),tU=["children","className","width","height","style","compact","title","desc"];function rU(e,t){if(e==null)return{};var r,n,i=nU(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function nU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var yN=y.forwardRef((e,t)=>{var{children:r,className:n,width:i,height:a,style:o,compact:l,title:s,desc:c}=e,u=rU(e,tU),d=gn(u);return l?y.createElement(ux,{otherAttributes:d,title:s,desc:c},r):y.createElement(eU,{className:n,style:o,width:i,height:a,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},y.createElement(ux,{otherAttributes:d,title:s,desc:c,ref:t},y.createElement(I9,null,r)))}),iU=["width","height"];function _h(){return _h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_h.apply(null,arguments)}function aU(e,t){if(e==null)return{};var r,n,i=oU(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function oU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var lU={top:5,right:5,bottom:5,left:5},sU={accessibilityLayer:!0,layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:lU,reverseStackOrder:!1,syncMethod:"index"},bN=y.forwardRef(function(t,r){var n,i=tr(t.categoricalChartProps,sU),{width:a,height:o}=i,l=aU(i,iU);if(!Ta(a)||!Ta(o))return null;var{chartName:s,defaultTooltipEventType:c,validateTooltipEventTypes:u,tooltipPayloadSearcher:d,categoricalChartProps:p}=t,h={chartName:s,defaultTooltipEventType:c,validateTooltipEventTypes:u,tooltipPayloadSearcher:d,eventEmitter:void 0};return y.createElement(mN,{preloadedState:{options:h},reduxStoreName:(n=p.id)!==null&&n!==void 0?n:s},y.createElement(H5,{chartData:p.data}),y.createElement(vN,{width:a,height:o,layout:i.layout,margin:i.margin}),y.createElement(gN,{accessibilityLayer:i.accessibilityLayer,barCategoryGap:i.barCategoryGap,maxBarSize:i.maxBarSize,stackOffset:i.stackOffset,barGap:i.barGap,barSize:i.barSize,syncId:i.syncId,syncMethod:i.syncMethod,className:i.className}),y.createElement(yN,_h({},l,{width:a,height:o,ref:r})))}),cU=["axis"],uU=y.forwardRef((e,t)=>y.createElement(bN,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:cU,tooltipPayloadSearcher:bg,categoricalChartProps:e,ref:t})),dU=["axis","item"],fU=y.forwardRef((e,t)=>y.createElement(bN,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:dU,tooltipPayloadSearcher:bg,categoricalChartProps:e,ref:t}));function pU(e){var t=De();return y.useEffect(()=>{t(RH(e))},[t,e]),null}var hU=["width","height","layout"];function zh(){return zh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zh.apply(null,arguments)}function mU(e,t){if(e==null)return{};var r,n,i=vU(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function vU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var gU={top:5,right:5,bottom:5,left:5},yU={accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:gU,reverseStackOrder:!1,syncMethod:"index",layout:"radial"},bU=y.forwardRef(function(t,r){var n,i=tr(t.categoricalChartProps,yU),{width:a,height:o,layout:l}=i,s=mU(i,hU);if(!Ta(a)||!Ta(o))return null;var{chartName:c,defaultTooltipEventType:u,validateTooltipEventTypes:d,tooltipPayloadSearcher:p}=t,h={chartName:c,defaultTooltipEventType:u,validateTooltipEventTypes:d,tooltipPayloadSearcher:p,eventEmitter:void 0};return y.createElement(mN,{preloadedState:{options:h},reduxStoreName:(n=i.id)!==null&&n!==void 0?n:c},y.createElement(H5,{chartData:i.data}),y.createElement(vN,{width:a,height:o,layout:l,margin:i.margin}),y.createElement(gN,{accessibilityLayer:i.accessibilityLayer,barCategoryGap:i.barCategoryGap,maxBarSize:i.maxBarSize,stackOffset:i.stackOffset,barGap:i.barGap,barSize:i.barSize,syncId:i.syncId,syncMethod:i.syncMethod,className:i.className}),y.createElement(pU,{cx:i.cx,cy:i.cy,startAngle:i.startAngle,endAngle:i.endAngle,innerRadius:i.innerRadius,outerRadius:i.outerRadius}),y.createElement(yN,zh({width:a,height:o},s,{ref:r})))}),xU=["item"],wU={layout:"centric",startAngle:0,endAngle:360,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},SU=y.forwardRef((e,t)=>{var r=tr(e,wU);return y.createElement(bU,{chartName:"PieChart",defaultTooltipEventType:"item",validateTooltipEventTypes:xU,tooltipPayloadSearcher:bg,categoricalChartProps:r,ref:t})});const CU=()=>{const[e,t]=y.useState([]),[r,n]=y.useState("7days"),[i,a]=y.useState("heartRate");y.useEffect(()=>{const h=localStorage.getItem("vitalHistory");h&&t(JSON.parse(h))},[]);const o=e.slice(0,10).reverse().map((h,m)=>({name:`Day ${m+1}`,heartRate:parseInt(h.heartRate)||0,systolic:parseInt(h.bloodPressureSystolic)||0,diastolic:parseInt(h.bloodPressureDiastolic)||0,temperature:parseFloat(h.temperature)||0,oxygenSaturation:parseInt(h.oxygenSaturation)||0,weight:parseFloat(h.weight)||0})),l=(h,m)=>{if(h.length<2)return{trend:"stable",percentage:0};const v=h[h.length-1][m],b=h[h.length-2][m];return v>b?{trend:"up",percentage:((v-b)/b*100).toFixed(1)}:v<b?{trend:"down",percentage:((b-v)/b*100).toFixed(1)}:{trend:"stable",percentage:0}},s=l(o,"heartRate"),c=l(o,"weight"),u=l(o,"temperature"),d=[{name:"Excellent",value:25,color:"#52c41a"},{name:"Good",value:45,color:"#00d2d3"},{name:"Average",value:20,color:"#f39c12"},{name:"Needs Attention",value:10,color:"#ff4757"}];return x(Tt,{children:[f("style",{children:`
    .analytics {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .analyticsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .analyticsHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .timeRangeSelect {
      padding: 0.75rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .timeRangeSelect:hover {
      border-color: var(--PrimaryColor);
    }

    .timeRangeSelect:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .trendsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .trendCard {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .trendCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .trendHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .trendHeader h3 {
      font-size: var(--h3FontSize);
      color: var(--textColor);
      font-weight: 500;
    }

    .trendIndicator {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .trendIndicator.up {
      background: rgba(82, 196, 26, 0.1);
      color: #52c41a;
    }

    .trendIndicator.down {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4d4f;
    }

    .trendIndicator.stable {
      background: rgba(250, 173, 20, 0.1);
      color: #faad14;
    }

    .currentValue {
      font-size: var(--biggestFontSize);
      font-weight: 700;
      color: var(--blackColor);
      margin: 0;
    }

    .chartsSection {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .chartContainer {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .chartContainer h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .chartControls {
      margin-bottom: 1rem;
    }

    .chartControls select {
      padding: 0.5rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 6px;
      font-size: var(--smallFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
    }

    .comparisonChart {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .comparisonChart h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .insightsSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .insightsSection h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .insightsList {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .insightItem {
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 4px solid;
      background: var(--inputColor);
      transition: transform 0.3s ease;
    }

    .insightItem:hover {
      transform: translateX(5px);
    }

    .insightItem.positive {
      border-left-color: #52c41a;
      background: rgba(82, 196, 26, 0.05);
    }

    .insightItem.warning {
      border-left-color: #faad14;
      background: rgba(250, 173, 20, 0.05);
    }

    .insightItem.info {
      border-left-color: #00d2d3;
      background: rgba(0, 210, 211, 0.05);
    }

    .insightItem h4 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .insightItem p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
      margin: 0;
    }

    .icon-insight {
      width: 20px;
      height: 20px;
    }

    /* Custom Recharts Styles */
    .recharts-cartesian-grid-horizontal line,
    .recharts-cartesian-grid-vertical line {
      stroke: var(--inputColor);
    }

    .recharts-text {
      fill: var(--textColor);
      font-size: var(--smallFontSize);
    }

    .recharts-tooltip-wrapper {
      outline: none !important;
    }

    .recharts-default-tooltip {
      background: var(--whiteColor) !important;
      border: 1px solid var(--inputColor) !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
    }

    .recharts-tooltip-label {
      color: var(--blackColor) !important;
      font-weight: 600 !important;
      margin-bottom: 0.5rem !important;
    }

    .recharts-tooltip-item {
      color: var(--textColor) !important;
    }

    @media screen and (max-width: 768px) {
      .chartsSection {
        grid-template-columns: 1fr;
      }

      .trendsGrid {
        grid-template-columns: 1fr;
      }

      .insightsList {
        grid-template-columns: 1fr;
      }

      .analyticsHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .timeRangeSelect {
        width: 100%;
      }
    }
      :root {
      --PrimaryColor: #5eaa3c;
      --HoverColor: #4a8530;
      --paleGreen: #f0f8eb;
      --whiteColor: #ffffff;
      --blackColor: #2c3e50;
      --greyText: #718096;
      --textColor: #64748b;
      --bgColor: #f8fafc;
      --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0;
      --h1FontSize: 2rem;
      --h2FontSize: 1.5rem;
      --h3FontSize: 1.25rem;
      --normalFontSize: 1rem;
      --smallFontSize: 0.875rem;
      --smallestFontSize: 0.75rem;
    }

    .apiKeys {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .apiKeysHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .apiKeysHeader div {
      flex: 1;
    }

    .apiKeysHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .apiKeysHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .createKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .createKeyForm {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .formCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .formCard h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      margin-bottom: 1.5rem;
    }

    .inputGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .inputGroup input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .inputGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .permissions {
      margin-bottom: 2rem;
    }

    .permissions > label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .permissionsList {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkboxLabel {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      font-weight: normal !important;
      margin-bottom: 0 !important;
      font-size: var(--normalFontSize) !important;
      color: var(--textColor) !important;
      cursor: pointer;
    }

    .checkboxLabel input {
      width: auto !important;
      margin: 0 !important;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .formActions button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cancelBtn {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .cancelBtn:hover {
      background: var(--itemCardHover);
    }

    .submitBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .submitBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .securityNotice {
      background: var(--paleGreen);
      border: 1px solid var(--PrimaryColor);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .securityIcon {
      color: var(--PrimaryColor);
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .noticeContent h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .noticeContent p {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      line-height: 1.5;
      margin: 0;
    }

    .apiKeysList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .apiKeyCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .apiKeyCard:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    }

    .keyHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .keyInfo h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .keyMeta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .keyMeta span {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status.active {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .keyActions {
      display: flex;
      gap: 0.5rem;
    }

    .actionBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actionBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .keyValue {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
    }

    .keyValue code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      background: none;
      padding: 0;
      word-break: break-all;
    }

    .keyPermissions {
      margin-bottom: 1rem;
    }

    .keyPermissions h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .permissionTags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .permissionTag {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
    }

    .keyUsage {
      border-top: 1px solid var(--inputColor);
      padding-top: 1rem;
    }

    .usageStats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .usageStat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .usageStat .label {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .usageStat .value {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .createFirstKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createFirstKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .apiDocumentation {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .apiDocumentation h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .apiDocumentation p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .docLinks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .docLink {
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: var(--normalFontSize);
      font-weight: 500;
      transition: all 0.3s ease;
      display: block;
      text-align: center;
    }

    .docLink:hover {
      background: var(--itemCardHover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media screen and (max-width: 768px) {
      .apiKeysHeader {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .keyHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .keyMeta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .keyActions {
        justify-content: center;
      }

      .usageStats {
        flex-direction: column;
        gap: 1rem;
      }

      .formCard {
        width: 95%;
        padding: 1.5rem;
      }

      .formActions {
        flex-direction: column;
      }

      .docLinks {
        grid-template-columns: 1fr;
      }
    }
  `}),x("div",{className:"analytics",children:[x("div",{className:"analyticsHeader",children:[x("h1",{children:[f(Mp,{size:28,color:"var(--PrimaryColor)"}),"Health Analytics"]}),f("div",{className:"controls",children:x("select",{value:r,onChange:h=>n(h.target.value),className:"timeRangeSelect",children:[f("option",{value:"7days",children:"Last 7 Days"}),f("option",{value:"30days",children:"Last 30 Days"}),f("option",{value:"90days",children:"Last 90 Days"})]})})]}),x("div",{className:"trendsGrid",children:[x("div",{className:"trendCard",children:[x("div",{className:"trendHeader",children:[f("h3",{children:"Heart Rate Trend"}),x("div",{className:`trendIndicator ${s.trend}`,children:[s.trend==="up"&&f(jo,{size:16}),s.trend==="down"&&f(Xd,{size:16}),s.trend==="stable"&&f(Yd,{size:16}),x("span",{children:[s.percentage,"%"]})]})]}),x("p",{className:"currentValue",children:[o.length>0?o[o.length-1].heartRate:"--"," BPM"]})]}),x("div",{className:"trendCard",children:[x("div",{className:"trendHeader",children:[f("h3",{children:"Weight Trend"}),x("div",{className:`trendIndicator ${c.trend}`,children:[c.trend==="up"&&f(jo,{size:16}),c.trend==="down"&&f(Xd,{size:16}),c.trend==="stable"&&f(Yd,{size:16}),x("span",{children:[c.percentage,"%"]})]})]}),x("p",{className:"currentValue",children:[o.length>0?o[o.length-1].weight:"--"," kg"]})]}),x("div",{className:"trendCard",children:[x("div",{className:"trendHeader",children:[f("h3",{children:"Temperature Trend"}),x("div",{className:`trendIndicator ${u.trend}`,children:[u.trend==="up"&&f(jo,{size:16}),u.trend==="down"&&f(Xd,{size:16}),u.trend==="stable"&&f(Yd,{size:16}),x("span",{children:[u.percentage,"%"]})]})]}),x("p",{className:"currentValue",children:[o.length>0?o[o.length-1].temperature:"--","°C"]})]})]}),x("div",{className:"chartsSection",children:[x("div",{className:"chartContainer",children:[f("h3",{children:"Vital Signs Over Time"}),f("div",{className:"chartControls",children:x("select",{value:i,onChange:h=>a(h.target.value),children:[f("option",{value:"heartRate",children:"Heart Rate"}),f("option",{value:"systolic",children:"Blood Pressure (Systolic)"}),f("option",{value:"temperature",children:"Temperature"}),f("option",{value:"weight",children:"Weight"})]})}),f(bf,{width:"100%",height:400,children:x(uU,{data:o,children:[f(Nh,{strokeDasharray:"3 3",stroke:"var(--inputColor)"}),f(Yc,{dataKey:"name",stroke:"var(--textColor)"}),f(qc,{stroke:"var(--textColor)"}),f(gf,{}),f(Z5,{type:"monotone",dataKey:i,stroke:"var(--PrimaryColor)",strokeWidth:3,dot:{fill:"var(--PrimaryColor)",strokeWidth:2,r:6},activeDot:{r:8}})]})})]}),x("div",{className:"chartContainer",children:[f("h3",{children:"Health Score Distribution"}),f(bf,{width:"100%",height:400,children:x(SU,{children:[f(j5,{data:d,cx:"50%",cy:"50%",labelLine:!1,label:({name:h,percent:m})=>`${h}: ${(m*100).toFixed(0)}%`,outerRadius:120,fill:"#8884d8",dataKey:"value",children:d.map((h,m)=>f(Ll,{fill:h.color},`cell-${m}`))}),f(gf,{})]})})]})]}),x("div",{className:"comparisonChart",children:[f("h3",{children:"Weekly Comparison"}),f(bf,{width:"100%",height:300,children:x(fU,{data:o.slice(-7),children:[f(Nh,{strokeDasharray:"3 3",stroke:"var(--inputColor)"}),f(Yc,{dataKey:"name",stroke:"var(--textColor)"}),f(qc,{stroke:"var(--textColor)"}),f(gf,{}),f(Ph,{dataKey:"heartRate",fill:"#ff4757",name:"Heart Rate",radius:[8,8,0,0]}),f(Ph,{dataKey:"oxygenSaturation",fill:"#00d2d3",name:"Oxygen Sat.",radius:[8,8,0,0]})]})})]}),x("div",{className:"insightsSection",children:[x("h3",{children:[f(fr,{size:24,color:"var(--PrimaryColor)"}),"Health Insights"]}),x("div",{className:"insightsList",children:[x("div",{className:"insightItem positive",children:[x("h4",{children:[f(iT,{className:"icon-insight",color:"#52c41a"}),"Good Progress"]}),f("p",{children:"Your heart rate has been stable within the normal range for the past week."})]}),x("div",{className:"insightItem warning",children:[x("h4",{children:[f(XT,{className:"icon-insight",color:"#faad14"}),"Monitor Weight"]}),f("p",{children:"Consider tracking your weight more consistently for better health monitoring."})]}),x("div",{className:"insightItem info",children:[x("h4",{children:[f(yT,{className:"icon-insight",color:"#00d2d3"}),"Recommendation"]}),f("p",{children:"Continue monitoring your vitals daily for comprehensive health tracking."})]})]})]})]})]})},kU=()=>{const[e,t]=y.useState([]),[r,n]=y.useState(null),[i,a]=y.useState(!1),[o,l]=y.useState("all"),[s,c]=y.useState("newest");y.useEffect(()=>{(async()=>{try{const g=localStorage.getItem("authToken"),w=await Fe.get("http://localhost:5000/api/healthResults",{headers:{Authorization:`Bearer ${g}`}});t(w.data.results)}catch(g){console.error("Failed to fetch health results:",g)}})()},[]);const u=b=>{n(b),a(!0)},d=(b,g)=>{alert(`Downloading ${b.title} as ${g.toUpperCase()}`)},p=async b=>{if(window.confirm("Are you sure you want to delete this result?"))try{const g=localStorage.getItem("authToken");await Fe.delete(`http://localhost:5000/api/healthResults/${b}`,{headers:{Authorization:`Bearer ${g}`}}),t(e.filter(w=>w.id!==b))}catch(g){console.error("Failed to delete result:",g),alert("Failed to delete result")}};e.filter(b=>o==="all"||b.type===o).sort((b,g)=>s==="newest"?new Date(g.date)-new Date(b.date):s==="oldest"?new Date(b.date)-new Date(g.date):0);const m=b=>{switch(b.toLowerCase()){case"excellent":return"#52c41a";case"good":case"normal":return"#00d2d3";case"warning":return"#faad14";case"critical":return"#ff4757";default:return"#95a5a6"}};return x(Tt,{children:[f("style",{children:`
  :root {
      --PrimaryColor: #5eaa3c;
      --HoverColor: #4a8530;
      --paleGreen: #f0f8eb;
      --whiteColor: #ffffff;
      --blackColor: #2c3e50;
      --greyText: #718096;
      --textColor: #64748b;
      --bgColor: #f8fafc;
      --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0;
      --h1FontSize: 2rem;
      --h2FontSize: 1.5rem;
      --h3FontSize: 1.25rem;
      --normalFontSize: 1rem;
      --smallFontSize: 0.875rem;
      --smallestFontSize: 0.75rem;
    }

    .apiKeys {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .apiKeysHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .apiKeysHeader div {
      flex: 1;
    }

    .apiKeysHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .apiKeysHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .createKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .createKeyForm {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .formCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .formCard h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      margin-bottom: 1.5rem;
    }

    .inputGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .inputGroup input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .inputGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .permissions {
      margin-bottom: 2rem;
    }

    .permissions > label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .permissionsList {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkboxLabel {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      font-weight: normal !important;
      margin-bottom: 0 !important;
      font-size: var(--normalFontSize) !important;
      color: var(--textColor) !important;
      cursor: pointer;
    }

    .checkboxLabel input {
      width: auto !important;
      margin: 0 !important;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .formActions button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cancelBtn {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .cancelBtn:hover {
      background: var(--itemCardHover);
    }

    .submitBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .submitBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .securityNotice {
      background: var(--paleGreen);
      border: 1px solid var(--PrimaryColor);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .securityIcon {
      color: var(--PrimaryColor);
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .noticeContent h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .noticeContent p {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      line-height: 1.5;
      margin: 0;
    }

    .apiKeysList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .apiKeyCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .apiKeyCard:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    }

    .keyHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .keyInfo h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .keyMeta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .keyMeta span {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status.active {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .keyActions {
      display: flex;
      gap: 0.5rem;
    }

    .actionBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actionBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .keyValue {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
    }

    .keyValue code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      background: none;
      padding: 0;
      word-break: break-all;
    }

    .keyPermissions {
      margin-bottom: 1rem;
    }

    .keyPermissions h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .permissionTags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .permissionTag {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
    }

    .keyUsage {
      border-top: 1px solid var(--inputColor);
      padding-top: 1rem;
    }

    .usageStats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .usageStat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .usageStat .label {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .usageStat .value {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .createFirstKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createFirstKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .apiDocumentation {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .apiDocumentation h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .apiDocumentation p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .docLinks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .docLink {
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: var(--normalFontSize);
      font-weight: 500;
      transition: all 0.3s ease;
      display: block;
      text-align: center;
    }

    .docLink:hover {
      background: var(--itemCardHover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media screen and (max-width: 768px) {
      .apiKeysHeader {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .keyHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .keyMeta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .keyActions {
        justify-content: center;
      }

      .usageStats {
        flex-direction: column;
        gap: 1rem;
      }

      .formCard {
        width: 95%;
        padding: 1.5rem;
      }

      .formActions {
        flex-direction: column;
      }

      .docLinks {
        grid-template-columns: 1fr;
      }
    }
    .results {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .resultsHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .resultsHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .resultsHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .filterSection {
      background: var(--whiteColor);
      padding: 1.5rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .filterControls {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filterSelect, .sortSelect {
      padding: 0.75rem 1rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 150px;
    }

    .filterSelect:hover, .sortSelect:hover {
      border-color: var(--PrimaryColor);
    }

    .filterSelect:focus, .sortSelect:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .resultsGrid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 1.5rem;
    }

    .resultCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .resultCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .resultHeader {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .resultIcon {
      width: 48px;
      height: 48px;
      background: var(--paleGreen);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--PrimaryColor);
      font-size: 1.5rem;
    }

    .resultMeta {
      flex: 1;
    }

    .resultMeta h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.3rem;
    }

    .resultDate {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .resultType {
      display: inline-block;
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
      margin-top: 0.5rem;
    }

    .resultStatus {
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      color: var(--whiteColor);
      font-size: var(--smallestFontSize);
      font-weight: 600;
      position: absolute;
      top: 0;
      right: 0;
    }

    .status-excellent {
      background: #52c41a;
    }

    .status-normal {
      background: #00d2d3;
    }

    .status-warning {
      background: #faad14;
    }

    .status-danger {
      background: #ff4757;
    }

    .resultContent {
      margin-bottom: 1rem;
    }

    .resultSummary {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .recommendations {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      border-left: 3px solid var(--PrimaryColor);
    }

    .recommendations h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .recommendations ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .recommendations li {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      padding: 0.3rem 0;
      padding-left: 1rem;
      position: relative;
    }

    .recommendations li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--PrimaryColor);
    }

    .resultActions {
      display: flex;
      gap: 0.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--inputColor);
    }

    .actionBtn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 6px;
      font-size: var(--smallFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .actionBtn.view {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .actionBtn.view:hover {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .actionBtn.download {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .actionBtn.download:hover {
      background: var(--itemCardHover);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
    }

    /* Modal Styles */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .modalContent {
      background: var(--whiteColor);
      border-radius: 16px;
      width: 90%;
      max-width: 700px;
      max-height: 85vh;
      overflow-y: auto;
    }

    .modalHeader {
      padding: 2rem;
      border-bottom: 1px solid var(--inputColor);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modalHeader h2 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin: 0;
    }

    .closeBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      font-size: 1.5rem;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .closeBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .modalBody {
      padding: 2rem;
    }

    .detailRow {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--inputColor);
      font-size: var(--normalFontSize);
    }

    .detailRow strong {
      color: var(--blackColor);
      min-width: 100px;
    }

    .statusBadge {
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      color: var(--whiteColor);
      font-size: var(--smallFontSize);
      font-weight: 600;
    }

    .detailSection {
      margin: 2rem 0;
    }

    .detailSection h4 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .detailSection p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      line-height: 1.6;
    }

    .detailSection ul {
      list-style: none;
      padding: 0;
    }

    .detailSection li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      font-size: var(--normalFontSize);
      color: var(--textColor);
    }

    .detailSection li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--PrimaryColor);
      font-weight: 600;
    }

    .vitalBreakdown {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
    }

    .vitalItem {
      padding: 0.5rem 0;
      font-size: var(--normalFontSize);
      color: var(--blackColor);
    }

    .modalFooter {
      padding: 1.5rem 2rem;
      border-top: 1px solid var(--inputColor);
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .modalFooter button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .modalFooter button:first-child {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .modalFooter button:first-child:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .modalFooter button:last-child {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .modalFooter button:last-child:hover {
      background: var(--itemCardHover);
    }

    @media screen and (max-width: 768px) {
      .resultsGrid {
        grid-template-columns: 1fr;
      }

      .filterControls {
        flex-direction: column;
      }

      .filterSelect, .sortSelect {
        width: 100%;
      }

      .resultActions {
        flex-wrap: wrap;
      }

      .modalContent {
        width: 95%;
      }
    }
  `}),x("div",{className:"results",children:[x("div",{className:"resultsHeader",children:[x("h1",{children:[f(fr,{size:28,color:"var(--PrimaryColor)"}),"My Health Results"]}),f("p",{children:"View, download, and manage your health reports and analyses"})]}),f("div",{className:"filterSection",children:x("div",{className:"filterControls",children:[x("select",{className:"filterSelect",value:o,onChange:b=>l(b.target.value),children:[f("option",{value:"all",children:"All Results"}),f("option",{value:"monthly",children:"Monthly Reports"}),f("option",{value:"weekly",children:"Weekly Reports"}),f("option",{value:"analysis",children:"Specific Analysis"})]}),x("select",{className:"sortSelect",value:s,onChange:b=>c(b.target.value),children:[f("option",{value:"newest",children:"Newest First"}),f("option",{value:"oldest",children:"Oldest First"}),f("option",{value:"title",children:"Title A-Z"})]})]})}),f("div",{className:"resultsGrid",children:e.map(b=>x("div",{className:"resultCard",children:[x("div",{className:"resultHeader",children:[f("div",{className:"resultIcon",children:f(fr,{})}),x("div",{className:"resultMeta",children:[f("h3",{children:b.title}),x("p",{className:"resultDate",children:[f(zp,{size:14}),new Date(b.date).toLocaleDateString()]}),f("span",{className:"resultType",children:b.type})]}),f("div",{className:"resultStatus",style:{backgroundColor:m(b.status)},children:b.status})]}),x("div",{className:"resultContent",children:[f("p",{className:"resultSummary",children:b.summary}),x("div",{className:"recommendations",children:[f("h4",{children:"Key Recommendations:"}),f("ul",{children:b.recommendations.map((g,w)=>f("li",{children:g},w))})]})]}),x("div",{className:"resultActions",children:[x("button",{className:"actionBtn view",onClick:()=>u(b),children:[f(aS,{size:16})," View"]}),x("button",{className:"actionBtn download",onClick:()=>d(b,"pdf"),children:[f(wy,{size:16})," PDF"]}),x("button",{className:"actionBtn download",onClick:()=>d(b,"excel"),children:[f(hT,{size:16})," Excel"]}),f("button",{className:"actionBtn delete",onClick:()=>p(b.id),children:f(lS,{size:16})})]})]},b.id))}),e.length===0&&x("div",{className:"emptyState",children:[f(fr,{className:"emptyIcon"}),f("h3",{children:"No Results Yet"}),f("p",{children:"Your health reports and analyses will appear here once generated."})]}),i&&r&&f("div",{className:"modal",children:x("div",{className:"modalContent",children:[x("div",{className:"modalHeader",children:[f("h2",{children:r.title}),f("button",{className:"closeBtn",onClick:()=>a(!1),children:f(dc,{})})]}),f("div",{className:"modalBody",children:x("div",{className:"resultDetails",children:[x("div",{className:"detailRow",children:[f("strong",{children:"Date:"})," ",new Date(r.date).toLocaleDateString()]}),x("div",{className:"detailRow",children:[f("strong",{children:"Type:"})," ",r.type]}),x("div",{className:"detailRow",children:[f("strong",{children:"Status:"}),f("span",{className:"statusBadge",style:{backgroundColor:m(r.status)},children:r.status})]}),x("div",{className:"detailSection",children:[f("h4",{children:"Summary"}),f("p",{children:r.summary})]}),x("div",{className:"detailSection",children:[f("h4",{children:"Detailed Analysis"}),f("p",{children:"This is a comprehensive analysis of your health vitals for the specified period. All measurements have been evaluated against standard health ranges and personalized baselines."}),x("div",{className:"vitalBreakdown",children:[x("div",{className:"vitalItem",children:[f("strong",{children:"Heart Rate:"})," 72 BPM (Normal Range: 60-100)"]}),x("div",{className:"vitalItem",children:[f("strong",{children:"Blood Pressure:"})," 120/80 mmHg (Optimal)"]}),x("div",{className:"vitalItem",children:[f("strong",{children:"Temperature:"})," 36.8°C (Normal)"]})]})]}),x("div",{className:"detailSection",children:[f("h4",{children:"Recommendations"}),f("ul",{children:r.recommendations.map((b,g)=>f("li",{children:b},g))})]}),x("div",{className:"detailSection",children:[f("h4",{children:"Next Steps"}),x("ul",{children:[f("li",{children:"Continue monitoring vitals daily"}),f("li",{children:"Schedule follow-up in 30 days"}),f("li",{children:"Maintain current lifestyle habits"})]})]})]})}),x("div",{className:"modalFooter",children:[x("button",{onClick:()=>d(r,"pdf"),children:[f(wy,{size:16})," Download PDF"]}),f("button",{onClick:()=>a(!1),children:"Close"})]})]})})]})]})},PU=()=>{const[e,t]=y.useState([]),[r,n]=y.useState(!1),[i,a]=y.useState(""),[o,l]=y.useState(["read"]),[s,c]=y.useState({}),[u,d]=y.useState(!1),[p,h]=y.useState(""),m="http://localhost:5000/api/apikeys",v=()=>{const E=localStorage.getItem("authToken");if(!E)throw new Error("Authentication token not found. Please log in again.");return{Authorization:`Bearer ${E}`,"Content-Type":"application/json"}},b=(E,_)=>{var M;console.error(_,E);let z=_;return E.response?z=((M=E.response.data)==null?void 0:M.message)||`Server error (${E.response.status})`:E.request?z="Network error. Please check your connection.":E.message&&(z=E.message),h(z),z};y.useEffect(()=>{g()},[]);const g=async()=>{d(!0);try{const E=await Fe.get(`${m}/listApiKeys`,{headers:v()});t(E.data.apiKeys||[]),h("")}catch(E){b(E,"Failed to fetch API keys")}finally{d(!1)}},w=async()=>{if(!i.trim()){h("Please enter a name for the API key");return}if(o.length===0){h("Please select at least one permission");return}d(!0);try{const E=await Fe.post(`${m}/createApiKey`,{name:i.trim(),permissions:o},{headers:v()});t(_=>[..._,E.data.apiKey]),a(""),l(["read"]),n(!1),h(""),alert("API Key created successfully!")}catch(E){const _=b(E,"Failed to create API key");alert(_)}finally{d(!1)}},S=async E=>{try{await navigator.clipboard.writeText(E),alert("API Key copied to clipboard!")}catch(_){console.error("Failed to copy to clipboard:",_),alert("Failed to copy to clipboard")}},C=E=>{c(_=>({..._,[E]:!_[E]}))},k=async E=>{if(console.log("Deleting key with ID:",E),!E){h("Invalid API key ID"),alert("Invalid API key ID");return}if(window.confirm("Are you sure you want to delete this API key? This action cannot be undone.")){d(!0);try{await Fe.delete(`${m}/${E}`,{headers:v()}),t(e.filter(_=>(_.id||_._id)!==E)),h(""),alert("API Key deleted successfully!")}catch(_){const z=b(_,"Failed to delete API key");alert(z)}finally{d(!1)}}},P=async E=>{if(console.log("Regenerating key with ID:",E),!E){h("Invalid API key ID"),alert("Invalid API key ID");return}if(window.confirm("Are you sure you want to regenerate this API key? The old key will stop working immediately.")){d(!0);try{const z=(await Fe.post(`${m}/${E}/regenerate`,{},{headers:v()})).data.apiKey;t(e.map(M=>(M.id||M._id)===E?z:M)),h(""),c(M=>({...M,[E]:!0})),alert("API Key regenerated successfully! The new key is now visible.")}catch(_){const z=b(_,"Failed to regenerate API key");alert(z)}finally{d(!1)}}},N=(E,_)=>{l(_?[...o,E]:o.filter(z=>z!==E))},A=E=>{if(!E)return"";const _=Math.min(12,E.length),z=Math.max(4,E.length-_);return E.substring(0,_)+"*".repeat(20)+E.substring(E.length-z)};return x(Tt,{children:[f("style",{children:NU}),x("div",{className:"apiKeys",children:[x("div",{className:"apiKeysHeader",children:[x("div",{children:[x("h1",{children:[f(Gd,{size:28}),"API Keys Management"]}),f("p",{children:"Manage your Health Vitals API keys for integrations and third-party access"})]}),x("button",{className:"createKeyBtn",onClick:()=>n(!0),children:[f(il,{size:16})," Create New Key"]})]}),r&&f("div",{className:"createKeyForm",children:x("div",{className:"formCard",children:[f("h3",{children:"Create New API Key"}),x("div",{className:"inputGroup",children:[f("label",{children:"API Key Name"}),f("input",{type:"text",value:i,onChange:E=>a(E.target.value),placeholder:"e.g., Mobile App Integration"}),f("small",{children:"Choose a descriptive name to identify this key"})]}),x("div",{className:"permissions",children:[f("label",{children:"Permissions"}),x("div",{className:"permissionsList",children:[x("label",{className:"checkboxLabel",children:[f("input",{type:"checkbox",checked:o.includes("read"),onChange:E=>N("read",E.target.checked)}),f("span",{children:"Read vitals data"})]}),x("label",{className:"checkboxLabel",children:[f("input",{type:"checkbox",checked:o.includes("write"),onChange:E=>N("write",E.target.checked)}),f("span",{children:"Write vitals data"})]}),x("label",{className:"checkboxLabel",children:[f("input",{type:"checkbox",checked:o.includes("delete"),onChange:E=>N("delete",E.target.checked)}),f("span",{children:"Delete data"})]})]})]}),x("div",{className:"formActions",children:[f("button",{className:"cancelBtn",onClick:()=>n(!1),children:"Cancel"}),x("button",{className:"submitBtn",onClick:w,children:[f(Gd,{size:16})," Create API Key"]})]})]})}),x("div",{className:"securityNotice",children:[f(FT,{className:"securityIcon",size:24}),x("div",{className:"noticeContent",children:[f("h4",{children:"Security Notice"}),f("p",{children:"Keep your API keys secure and never share them publicly. Each key provides access to your health data according to its permissions."})]})]}),f("div",{className:"apiKeysList",children:e.map(E=>x("div",{className:"apiKeyCard",children:[x("div",{className:"keyHeader",children:[x("div",{className:"keyInfo",children:[f("h3",{children:E.name}),x("div",{className:"keyMeta",children:[x("span",{className:"created",children:["Created: ",new Date(E.created).toLocaleDateString()]}),x("span",{className:"lastUsed",children:["Last used: ",E.lastUsed]}),f("span",{className:`status ${E.status}`,children:E.status})]})]}),x("div",{className:"keyActions",children:[f("button",{className:"actionBtn",onClick:()=>C(E.id),title:s[E.id]?"Hide key":"Show key",children:s[E.id]?f(dT,{size:16}):f(aS,{size:16})}),f("button",{className:"actionBtn",onClick:()=>S(E.key),title:"Copy key",children:f(sT,{size:16})}),f("button",{className:"actionBtn",onClick:()=>P(E.id),title:"Regenerate key",children:f(zT,{size:16})}),f("button",{className:"actionBtn delete",onClick:()=>k(E.id),title:"Delete key",children:f(lS,{size:16})})]})]}),f("div",{className:"keyValue",children:f("code",{children:s[E.id]?E.key:A(E.key)})}),x("div",{className:"keyPermissions",children:[f("h4",{children:"Permissions:"}),f("div",{className:"permissionTags",children:E.permissions.map(_=>f("span",{className:"permissionTag",children:_},_))})]}),f("div",{className:"keyUsage",children:x("div",{className:"usageStats",children:[x("div",{className:"usageStat",children:[f("span",{className:"label",children:"Requests this month:"}),f("span",{className:"value",children:E.requestsThisMonth.toLocaleString()})]}),x("div",{className:"usageStat",children:[f("span",{className:"label",children:"Rate limit:"}),f("span",{className:"value",children:E.rateLimit})]})]})})]},E.id))}),e.length===0&&x("div",{className:"emptyState",children:[f(Gd,{className:"emptyIcon",size:64}),f("h3",{children:"No API Keys"}),f("p",{children:"Create your first API key to start integrating with Health Vitals API"}),x("button",{className:"createFirstKeyBtn",onClick:()=>n(!0),children:[f(il,{size:16})," Create Your First API Key"]})]}),x("div",{className:"apiDocumentation",children:[f("h3",{children:"API Documentation"}),f("p",{children:"Learn how to integrate Health Vitals API into your applications:"}),x("div",{className:"docLinks",children:[f("a",{href:"#",className:"docLink",children:"Getting Started Guide"}),f("a",{href:"#",className:"docLink",children:"API Reference"}),f("a",{href:"#",className:"docLink",children:"Code Examples"}),f("a",{href:"#",className:"docLink",children:"Rate Limits & Best Practices"})]})]})]})]})},NU=`
    :root {
      --PrimaryColor: #5eaa3c;
      --HoverColor: #4a8530;
      --paleGreen: #f0f8eb;
      --whiteColor: #ffffff;
      --blackColor: #2c3e50;
      --greyText: #718096;
      --textColor: #64748b;
      --bgColor: #f8fafc;
      --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0;
      --h1FontSize: 2rem;
      --h2FontSize: 1.5rem;
      --h3FontSize: 1.25rem;
      --normalFontSize: 1rem;
      --smallFontSize: 0.875rem;
      --smallestFontSize: 0.75rem;
    }

    .apiKeys {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .apiKeysHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .apiKeysHeader div {
      flex: 1;
    }

    .apiKeysHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .apiKeysHeader p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin: 0;
    }

    .createKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .createKeyForm {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
    }

    .formCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      width: 90%;
      max-width: 500px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    }

    .formCard h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      margin-bottom: 1.5rem;
    }

    .inputGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .inputGroup input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .inputGroup input:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup small {
      display: block;
      font-size: var(--smallestFontSize);
      color: var(--textColor);
      margin-top: 0.3rem;
    }

    .permissions {
      margin-bottom: 2rem;
    }

    .permissions > label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .permissionsList {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .checkboxLabel {
      display: flex !important;
      align-items: center;
      gap: 0.5rem;
      font-weight: normal !important;
      margin-bottom: 0 !important;
      font-size: var(--normalFontSize) !important;
      color: var(--textColor) !important;
      cursor: pointer;
    }

    .checkboxLabel input {
      width: auto !important;
      margin: 0 !important;
    }

    .formActions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }

    .formActions button {
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cancelBtn {
      background: var(--inputColor);
      color: var(--blackColor);
    }

    .cancelBtn:hover {
      background: var(--itemCardHover);
    }

    .submitBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
    }

    .submitBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .securityNotice {
      background: var(--paleGreen);
      border: 1px solid var(--PrimaryColor);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .securityIcon {
      color: var(--PrimaryColor);
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    .noticeContent h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .noticeContent p {
      font-size: var(--smallFontSize);
      color: var(--textColor);
      line-height: 1.5;
      margin: 0;
    }

    .apiKeysList {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .apiKeyCard {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .apiKeyCard:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    }

    .keyHeader {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .keyInfo h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .keyMeta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .keyMeta span {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 600;
    }

    .status.active {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
    }

    .keyActions {
      display: flex;
      gap: 0.5rem;
    }

    .actionBtn {
      width: 36px;
      height: 36px;
      border: none;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--textColor);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .actionBtn:hover {
      background: var(--itemCardHover);
      color: var(--blackColor);
    }

    .actionBtn.delete {
      background: rgba(255, 77, 79, 0.1);
      color: #ff4757;
    }

    .actionBtn.delete:hover {
      background: #ff4757;
      color: var(--whiteColor);
    }

    .keyValue {
      background: var(--inputColor);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
    }

    .keyValue code {
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      background: none;
      padding: 0;
      word-break: break-all;
    }

    .keyPermissions {
      margin-bottom: 1rem;
    }

    .keyPermissions h4 {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .permissionTags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .permissionTag {
      background: var(--paleGreen);
      color: var(--PrimaryColor);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: var(--smallestFontSize);
      font-weight: 500;
    }

    .keyUsage {
      border-top: 1px solid var(--inputColor);
      padding-top: 1rem;
    }

    .usageStats {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .usageStat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .usageStat .label {
      font-size: var(--smallFontSize);
      color: var(--textColor);
    }

    .usageStat .value {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .emptyState {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 4rem 2rem;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      margin-bottom: 2rem;
    }

    .emptyIcon {
      font-size: 4rem;
      color: var(--greyText);
      margin-bottom: 1rem;
    }

    .emptyState h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      margin-bottom: 0.5rem;
    }

    .emptyState p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .createFirstKeyBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .createFirstKeyBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .apiDocumentation {
      background: var(--whiteColor);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .apiDocumentation h3 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .apiDocumentation p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 1.5rem;
    }

    .docLinks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .docLink {
      background: var(--inputColor);
      color: var(--blackColor);
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-size: var(--normalFontSize);
      font-weight: 500;
      transition: all 0.3s ease;
      display: block;
      text-align: center;
    }

    .docLink:hover {
      background: var(--itemCardHover);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media screen and (max-width: 768px) {
      .apiKeysHeader {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .keyHeader {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .keyMeta {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .keyActions {
        justify-content: center;
      }

      .usageStats {
        flex-direction: column;
        gap: 1rem;
      }

      .formCard {
        width: 95%;
        padding: 1.5rem;
      }

      .formActions {
        flex-direction: column;
      }

      .docLinks {
        grid-template-columns: 1fr;
      }
    }
  `,EU=()=>{const[e,t]=y.useState({firstName:"",lastName:"",email:"",phone:"",dateOfBirth:"",gender:"",height:"",weight:"",bloodType:"",allergies:"",medications:"",emergencyContact:"",unit:"metric",notifications:!1,dataSharing:!1,bmi:null}),[r,n]=y.useState(null),[i,a]=y.useState(!1),o=()=>localStorage.getItem("token")||localStorage.getItem("authToken")||localStorage.getItem("accessToken"),l=()=>{localStorage.clear(),alert("Your session has expired. Please login again."),window.location.href="/login"};y.useEffect(()=>{async function m(){try{const v=o();if(!v){alert("Please login to access your profile."),window.location.href="/login";return}const g=(await Fe.get("http://localhost:5000/api/profile/getProfile",{headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"}})).data.profile||{};t({firstName:g.firstName||"",lastName:g.lastName||"",email:g.email||"",phone:g.phone||"",dateOfBirth:g.dateOfBirth?g.dateOfBirth.split("T")[0]:"",gender:g.sex||"",height:g.height||"",weight:g.weight||"",bloodType:g.bloodGroup||"",allergies:Array.isArray(g.allergies)?g.allergies.join(", "):"",medications:Array.isArray(g.medications)?g.medications.join(", "):"",emergencyContact:g.emergencyContact?`${g.emergencyContact.name} - ${g.emergencyContact.phone}`:"",unit:g.unit||"metric",notifications:g.notifications||!1,dataSharing:g.dataSharing||!1,bmi:g.bmi||null}),n(g.profileImage||null)}catch(v){console.error("Error fetching profile:",v),v.response?(v.response.status===401||v.response.status===403)&&(l(),alert(`Error: ${v.response.data.message||"Failed to fetch profile"}`)):v.request?alert("Network error. Please check your connection and try again."):alert("An unexpected error occurred. Please try again.")}}m()},[]),y.useEffect(()=>{e.height&&e.weight&&s()},[e.height,e.weight,e.unit]);const s=()=>{if(e.height&&e.weight){let m;if(e.unit==="metric"){const v=e.height/100;m=(e.weight/(v*v)).toFixed(1)}else m=(e.weight/(e.height*e.height)*703).toFixed(1);t(v=>({...v,bmi:m}))}},c=m=>{const{name:v,value:b,type:g,checked:w}=m.target;t(S=>({...S,[v]:g==="checkbox"?w:b}))},u=async m=>{m.preventDefault();try{const v=o();if(!v){alert("Authentication token not found. Please login again."),l();return}s();let b={};if(e.emergencyContact&&e.emergencyContact.includes(" - ")){const[S,C]=e.emergencyContact.split(" - ");b={name:S.trim(),phone:C.trim()}}else e.emergencyContact&&(b={name:e.emergencyContact.trim(),phone:""});const g={firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,dateOfBirth:e.dateOfBirth,gender:e.gender,height:e.height,weight:e.weight,unit:e.unit,bloodType:e.bloodType,allergies:e.allergies?e.allergies.split(",").map(S=>S.trim()):[],medications:e.medications?e.medications.split(",").map(S=>S.trim()):[],emergencyContact:b};console.log("Sending update data:",g);const w=await Fe.post("http://localhost:5000/api/profile/createOrUpdateProfile",g,{headers:{Authorization:`Bearer ${v}`,"Content-Type":"application/json"}});alert("Profile updated successfully!"),a(!1)}catch(v){if(console.error("Error updating profile:",v),v.response){const{status:b,data:g}=v.response;b===401||b===403?(alert(`Authentication failed: ${g.message||"Please login again"}`),l()):alert(b===400?`Validation error: ${g.message||"Please check your input data"}`:`Error: ${g.message||"Failed to update profile"}`)}else v.request?alert("Network error. Please check your connection and try again."):alert("An unexpected error occurred. Please try again.")}},d=m=>{const v=m.target.files[0];if(v){const b=new FileReader;b.onload=g=>{n(g.target.result)},b.readAsDataURL(v)}},p=m=>m<18.5?{category:"Underweight",color:"#3498db"}:m<25?{category:"Normal",color:"#27ae60"}:m<30?{category:"Overweight",color:"#f39c12"}:{category:"Obese",color:"#e74c3c"},h=m=>{if(!m)return null;const v=new Date,b=new Date(m);let g=v.getFullYear()-b.getFullYear();const w=v.getMonth()-b.getMonth();return(w<0||w===0&&v.getDate()<b.getDate())&&g--,g};return x(Tt,{children:[f("style",{children:OU}),x("div",{className:"profile",children:[x("div",{className:"profileHeader",children:[x("h1",{children:[f(Cy,{size:28}),"My Profile"]}),x("button",{className:`editBtn ${i?"saving":""}`,onClick:i?u:()=>a(!0),children:[i?f(Lm,{size:16}):f(HT,{size:16}),i?"Save Changes":"Edit Profile"]})]}),x("div",{className:"profileContent",children:[x("div",{className:"profileImageSection",children:[x("div",{className:"imageContainer",children:[r?f("img",{src:r,alt:"Profile",className:"profileImg"}):f("div",{className:"imagePlaceholder",children:f(Cy,{size:48})}),i&&x("label",{className:"imageUpload",children:[f(J3,{size:16}),f("input",{type:"file",accept:"image/*",onChange:d,style:{display:"none"}})]})]}),x("div",{className:"basicInfo",children:[x("h2",{children:[e.firstName," ",e.lastName]}),x("p",{children:[f(CT,{size:16,style:{display:"inline",marginRight:"0.5rem"}}),e.email]}),x("p",{children:[f(OT,{size:16,style:{display:"inline",marginRight:"0.5rem"}}),e.phone]}),e.dateOfBirth&&x("p",{children:[f(zp,{size:16,style:{display:"inline",marginRight:"0.5rem"}}),h(e.dateOfBirth)," years old"]})]})]}),x("div",{className:"profileForm",children:[x("div",{className:"formSection",children:[f("h3",{children:"Personal Information"}),x("div",{className:"formGrid",children:[x("div",{className:"inputGroup",children:[f("label",{children:"First Name"}),f("input",{type:"text",name:"firstName",value:e.firstName,onChange:c,disabled:!i,placeholder:"Enter first name"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Last Name"}),f("input",{type:"text",name:"lastName",value:e.lastName,onChange:c,disabled:!i,placeholder:"Enter last name"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Email"}),f("input",{type:"email",name:"email",value:e.email,onChange:c,disabled:!i,placeholder:"Enter email"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Phone"}),f("input",{type:"tel",name:"phone",value:e.phone,onChange:c,disabled:!i,placeholder:"Enter phone number"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Date of Birth"}),f("input",{type:"date",name:"dateOfBirth",value:e.dateOfBirth,onChange:c,disabled:!i})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Gender"}),x("select",{name:"gender",value:e.gender,onChange:c,disabled:!i,children:[f("option",{value:"",children:"Select Gender"}),f("option",{value:"male",children:"Male"}),f("option",{value:"female",children:"Female"}),f("option",{value:"other",children:"Other"})]})]})]})]}),x("div",{className:"formSection",children:[f("h3",{children:"Health Information"}),x("div",{className:"formGrid",children:[x("div",{className:"inputGroup",children:[x("label",{children:["Height (",e.unit==="metric"?"cm":"inches",")"]}),f("input",{type:"number",name:"height",value:e.height,onChange:c,disabled:!i,placeholder:e.unit==="metric"?"170":"67"})]}),x("div",{className:"inputGroup",children:[x("label",{children:["Weight (",e.unit==="metric"?"kg":"lbs",")"]}),f("input",{type:"number",step:"0.1",name:"weight",value:e.weight,onChange:c,disabled:!i,placeholder:e.unit==="metric"?"70":"154"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Blood Type"}),x("select",{name:"bloodType",value:e.bloodType,onChange:c,disabled:!i,children:[f("option",{value:"",children:"Select Blood Type"}),f("option",{value:"A+",children:"A+"}),f("option",{value:"A-",children:"A-"}),f("option",{value:"B+",children:"B+"}),f("option",{value:"B-",children:"B-"}),f("option",{value:"AB+",children:"AB+"}),f("option",{value:"AB-",children:"AB-"}),f("option",{value:"O+",children:"O+"}),f("option",{value:"O-",children:"O-"})]})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Unit System"}),x("select",{name:"unit",value:e.unit,onChange:c,disabled:!i,children:[f("option",{value:"metric",children:"Metric (kg, cm)"}),f("option",{value:"imperial",children:"Imperial (lbs, inches)"})]})]})]}),x("div",{className:"textAreaGroup",children:[f("label",{children:"Allergies"}),f("textarea",{name:"allergies",value:e.allergies,onChange:c,disabled:!i,placeholder:"List any known allergies",rows:"3"})]}),x("div",{className:"textAreaGroup",children:[f("label",{children:"Current Medications"}),f("textarea",{name:"medications",value:e.medications,onChange:c,disabled:!i,placeholder:"List current medications and dosages",rows:"3"})]}),x("div",{className:"inputGroup",children:[f("label",{children:"Emergency Contact"}),f("input",{type:"text",name:"emergencyContact",value:e.emergencyContact,onChange:c,disabled:!i,placeholder:"Name and phone number"})]})]}),x("div",{className:"formSection",children:[f("h3",{children:"Preferences"}),f("div",{className:"checkboxGroup",children:x("label",{className:"checkboxLabel",children:[f("input",{type:"checkbox",name:"notifications",checked:e.notifications,onChange:c,disabled:!i}),f("span",{children:"Enable email notifications for health reminders"})]})}),f("div",{className:"checkboxGroup",children:x("label",{className:"checkboxLabel",children:[f("input",{type:"checkbox",name:"dataSharing",checked:e.dataSharing,onChange:c,disabled:!i}),f("span",{children:"Share anonymized data for health research"})]})})]})]}),e.height&&e.weight&&e.bmi&&x("div",{className:"healthSummary",children:[f("h3",{children:"Health Summary"}),x("div",{className:"summaryCard",children:[x("div",{className:"bmiInfo",children:[f("h4",{children:"Body Mass Index (BMI)"}),x("div",{className:"bmiValue",children:[f("span",{className:"bmi",children:e.bmi}),f("span",{className:"bmiCategory",style:{color:p(e.bmi).color},children:p(e.bmi).category})]})]}),x("div",{className:"healthStats",children:[x("div",{className:"healthStat",children:[f(Kt,{size:20}),f("span",{children:"Health Score: 85/100"})]}),x("div",{className:"healthStat",children:[f(zp,{size:20}),x("span",{children:["Age: ",h(e.dateOfBirth)," years"]})]}),x("div",{className:"healthStat",children:[f(fr,{size:20}),x("span",{children:["BMI: ",e.bmi," (",p(e.bmi).category,")"]})]})]})]})]})]})]})]})},OU=`
    :root {
      --PrimaryColor: #5eaa3c;
      --HoverColor: #4a8530;
      --paleGreen: #f0f8eb;
      --whiteColor: #ffffff;
      --blackColor: #2c3e50;
      --greyText: #718096;
      --textColor: #64748b;
      --bgColor: #f8fafc;
      --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0;
      --h1FontSize: 2rem;
      --h2FontSize: 1.5rem;
      --h3FontSize: 1.25rem;
      --normalFontSize: 1rem;
      --smallFontSize: 0.875rem;
      --smallestFontSize: 0.75rem;
    }

    .profile {
      min-height: 100vh;
      background: var(--bgColor);
      padding: 1.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    }

    .profileHeader {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      margin-bottom: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .profileHeader h1 {
      font-size: var(--h1FontSize);
      color: var(--blackColor);
      font-weight: 700;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .editBtn {
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: var(--normalFontSize);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .editBtn:hover {
      background: var(--HoverColor);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .editBtn.saving {
      background: #27ae60;
    }

    .profileContent {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr;
    }

    .profileImageSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .imageContainer {
      position: relative;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid var(--paleGreen);
    }

    .profileImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .imagePlaceholder {
      width: 100%;
      height: 100%;
      background: var(--inputColor);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--greyText);
      font-size: 3rem;
    }

    .imageUpload {
      position: absolute;
      bottom: -5px;
      right: -5px;
      background: var(--PrimaryColor);
      color: var(--whiteColor);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }

    .imageUpload:hover {
      background: var(--HoverColor);
      transform: scale(1.1);
    }

    .basicInfo {
      flex: 1;
    }

    .basicInfo h2 {
      font-size: var(--h2FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .basicInfo p {
      font-size: var(--normalFontSize);
      color: var(--textColor);
      margin-bottom: 0.25rem;
    }

    .profileForm {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .formSection {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .formSection h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--inputColor);
    }

    .formGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .inputGroup {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .inputGroup label {
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
    }

    .inputGroup input,
    .inputGroup select {
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
    }

    .inputGroup input:focus,
    .inputGroup select:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .inputGroup input:disabled,
    .inputGroup select:disabled {
      background: var(--inputColor);
      color: var(--greyText);
      cursor: not-allowed;
    }

    .textAreaGroup {
      margin-bottom: 1.5rem;
    }

    .textAreaGroup label {
      display: block;
      font-size: var(--smallFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .textAreaGroup textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--greyText);
      border-radius: 8px;
      font-size: var(--normalFontSize);
      background: var(--whiteColor);
      color: var(--blackColor);
      transition: all 0.3s ease;
      resize: vertical;
      box-sizing: border-box;
    }

    .textAreaGroup textarea:focus {
      outline: none;
      border-color: var(--PrimaryColor);
      box-shadow: 0 0 0 3px rgba(94, 170, 60, 0.1);
    }

    .textAreaGroup textarea:disabled {
      background: var(--inputColor);
      color: var(--greyText);
      cursor: not-allowed;
    }

    .checkboxGroup {
      margin-bottom: 1rem;
    }

    .checkboxLabel {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: var(--normalFontSize);
      color: var(--textColor);
      cursor: pointer;
    }

    .checkboxLabel input {
      margin: 0;
    }

    .checkboxLabel input:disabled {
      cursor: not-allowed;
    }

    .healthSummary {
      background: var(--whiteColor);
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    }

    .healthSummary h3 {
      font-size: var(--h3FontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--inputColor);
    }

    .summaryCard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .bmiInfo {
      background: var(--paleGreen);
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
    }

    .bmiInfo h4 {
      font-size: var(--normalFontSize);
      color: var(--blackColor);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .bmiValue {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .bmi {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--blackColor);
    }

    .bmiCategory {
      font-size: var(--normalFontSize);
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      background: var(--whiteColor);
    }

    .healthStats {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .healthStat {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: var(--inputColor);
      border-radius: 8px;
      color: var(--blackColor);
      font-size: var(--normalFontSize);
      font-weight: 500;
    }

    .healthStat svg {
      color: var(--PrimaryColor);
    }

    @media screen and (max-width: 768px) {
      .profileHeader {
        flex-direction: column;
        text-align: center;
      }

      .profileImageSection {
        flex-direction: column;
        text-align: center;
      }

      .formGrid {
        grid-template-columns: 1fr;
      }

      .summaryCard {
        grid-template-columns: 1fr;
      }

      .profile {
        padding: 1rem;
      }
    }
  `;function AU(){var Za,Hg;const e=y.useRef(null),t=y.useRef(null),r=y.useRef(null),n=y.useRef(null),i=y.useRef(null),a=y.useRef(null),[o,l]=y.useState(!1),[s,c]=y.useState(null),[u,d]=y.useState(!1),[p,h]=y.useState(0),[m,v]=y.useState(null),[b,g]=y.useState(null),[w,S]=y.useState(!1),[C,k]=y.useState(!1),[P,N]=y.useState(null),[A,E]=y.useState(!1),[_,z]=y.useState(!1),[M,G]=y.useState([]),[Z,D]=y.useState(!1),[L,q]=y.useState(null),[R,$]=y.useState(!1),[V,X]=y.useState(!0),F="http://localhost:5000",Le=()=>{const Q=localStorage.getItem("token")||localStorage.getItem("authToken")||localStorage.getItem("accessToken");return Q?{Authorization:`Bearer ${Q}`}:(console.error("Auth token is not available for API call."),null)};y.useEffect(()=>{(async()=>{try{const te=localStorage.getItem("token")||localStorage.getItem("authToken")||localStorage.getItem("accessToken");if(!te){console.log("No auth token found, proceeding as guest.");return}console.log("Attempting to fetch user profile...");const Y=await Fe.get(`${F}/api/profile/getProfile`,{headers:{Authorization:`Bearer ${te}`}});console.log("Received profile data:",Y.data)}catch(te){console.warn("Could not fetch user profile, but continuing. This might be normal for new users.",te.message)}finally{X(!1)}})()},[]);const ce=384,ue=518;y.useEffect(()=>{const Q=te=>new Promise((Y,me)=>{const ft=document.createElement("script");ft.src=te,ft.crossOrigin="anonymous",ft.onload=Y,ft.onerror=me,document.body.appendChild(ft)});Promise.all([Q("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"),Q("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"),Q("https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js")]).then(()=>{l(!0)}).catch(te=>{console.error("Failed to load MediaPipe scripts",te),c({message:"Failed to load required scripts. Please check your internet connection."})})},[]);const Je=Q=>{const te=Math.floor(Q/60),Y=Q%60;return`${te.toString().padStart(2,"0")}:${Y.toString().padStart(2,"0")}`},br=Q=>{var me;if(!window.drawConnectors||!window.drawLandmarks)return;const te=t.current;if(!te)return;const Y=te.getContext("2d");if(!(!Y||!e.current)){if(te.width=ce,te.height=ue,Y.save(),Y.clearRect(0,0,ce,ue),Y.scale(-1,1),Y.translate(-ce,0),(me=Q.multiFaceLandmarks)!=null&&me.length){const ft=Q.multiFaceLandmarks[0];Y.shadowColor="rgba(0,0,0,0.35)",Y.shadowBlur=8,window.drawConnectors(Y,ft,window.FACEMESH_FACE_OVAL,{color:"#FFF",lineWidth:2}),Y.shadowBlur=0,window.drawConnectors(Y,ft,window.FACEMESH_LEFT_EYE,{color:"rgba(255,255,255,0.75)",lineWidth:1.3}),window.drawConnectors(Y,ft,window.FACEMESH_RIGHT_EYE,{color:"rgba(255,255,255,0.75)",lineWidth:1.3}),window.drawConnectors(Y,ft,window.FACEMESH_LIPS,{color:"rgba(255,255,255,0.8)",lineWidth:1.3}),window.drawLandmarks(Y,ft,{color:"#FFF",lineWidth:.7,radius:.8})}Y.restore()}},di=()=>{if(!P)return;he(),d(!0),h(0);const Q=[],te=new MediaRecorder(P,{mimeType:"video/webm;codecs=vp9"});te.ondataavailable=Y=>{Y.data.size>0&&Q.push(Y.data)},te.onstop=async()=>{i.current&&(clearInterval(i.current),i.current=null),d(!1);const Y=new Blob(Q,{type:"video/webm"}),me=URL.createObjectURL(Y);a.current=Y,v(me),ee(Y)},n.current=te,te.start(),i.current=setInterval(()=>{h(Y=>{const me=Y+1;return me>=30?(n.current&&n.current.state==="recording"&&n.current.stop(),i.current&&(clearInterval(i.current),i.current=null),30):me})},1e3)},B=()=>{n.current&&n.current.state==="recording"&&n.current.stop()},ee=async Q=>{S(!0),g(null),z(!1);try{const te=new FormData;te.append("video",Q,"health-scan.webm");const me=(await Fe.post("https://anurudh-268064419384.europe-west1.run.app/analyze",te)).data;if(typeof me=="object"&&me!==null&&!me.error)g(me),await ne(me,Q);else throw new Error(me.error||"AI API se anupयुक्त response structure mila.")}catch(te){console.error("AI API Error:",te);const Y=te.response?JSON.stringify(te.response.data):te.message;g({error:`Analysis failed: ${Y}`})}finally{S(!1),z(!0)}},ne=async(Q,te)=>{var me,ft;const Y=Le();if(!Y){c({message:"You must be logged in to save results."});return}k(!0),E(!1);try{const xr=new FormData;xr.append("video",te),xr.append("predictions",JSON.stringify(Q)),xr.append("heartRate",Q.heartRate||""),xr.append("bloodPressureSystolic",((me=Q.bloodPressure)==null?void 0:me.systolic)||""),xr.append("bloodPressureDiastolic",((ft=Q.bloodPressure)==null?void 0:ft.diastolic)||""),xr.append("oxygenSaturation",Q.oxygenSaturation||""),xr.append("stressLevel",Q.stressLevel||""),xr.append("scanDuration",p),await Fe.post(`${F}/api/scan/saveHealthData`,xr,{headers:Y}),E(!0),j()}catch(xr){console.error("Error saving to database:",xr),E(!1)}finally{k(!1)}},j=async()=>{const Q=Le();if(Q){D(!0);try{const te=await Fe.get(`${F}/api/scan/getScanHistory?limit=5`,{headers:Q});G(te.data.results||[])}catch(te){console.error("Error fetching history:",te),G([])}finally{D(!1)}}},dt=async Q=>{const te=Le();if(te){$(!0),q(null);try{const Y=await Fe.get(`${F}/api/scan/${Q}`,{headers:te});q(Y.data.result)}catch(Y){console.error("Error fetching details:",Y)}}},he=()=>{d(!1),h(0),v(null),g(null),S(!1),z(!1),E(!1),k(!1),a.current=null,i.current&&(clearInterval(i.current),i.current=null)};y.useEffect(()=>{if(!o||V)return;j();let Q=!0;return(async()=>{try{P&&P.getTracks().forEach(me=>me.stop());const Y=await navigator.mediaDevices.getUserMedia({video:{width:ce,height:ue,facingMode:"user"},audio:!1});Q&&e.current?(e.current.srcObject=Y,N(Y),c(null),e.current.onloadedmetadata=()=>{if(!Q||!window.FaceMesh||!window.Camera)return;const me=new window.FaceMesh({locateFile:ft=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${ft}`});me.setOptions({selfieMode:!0,maxNumFaces:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),me.onResults(br),r.current&&r.current.close(),e.current&&(r.current=new window.Camera(e.current,{onFrame:async()=>{e.current&&await me.send({image:e.current})},width:ce,height:ue}),r.current.start())}):Y.getTracks().forEach(me=>me.stop())}catch(Y){console.error("Failed to acquire camera feed:",Y),Q&&c({message:"Could not access the camera. Please grant permission in your browser."})}})(),()=>{Q=!1,P&&P.getTracks().forEach(Y=>Y.stop()),r.current&&(r.current.close(),r.current=null),i.current&&clearInterval(i.current)}},[o,V]);const it=`
    :root {
      --PrimaryColor: #5eaa3c; --HoverColor: #4a8530; --paleGreen: #f0f8eb;
      --whiteColor: #ffffff; --blackColor: #2c3e50; --greyText: #718096;
      --textColor: #64748b; --bgColor: #f8fafc; --inputColor: #f1f5f9;
      --itemCardHover: #e2e8f0; --successColor: #10b981; --warningColor: #f59e0b;
      --h1FontSize: 2rem; --h2FontSize: 1.5rem; --h3FontSize: 1.25rem;
      --normalFontSize: 1rem; --smallFontSize: 0.875rem; --smallestFontSize: 0.75rem;
    }
    .cameraSection { min-height: 100vh; background: var(--bgColor); padding: 1.5rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
    .cameraHeader { background: var(--whiteColor); padding: 2rem; border-radius: 16px; margin-bottom: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; }
    .cameraHeader h1 { font-size: var(--h1FontSize); color: var(--blackColor); font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; justify-content: center; }
    .cameraHeader p { font-size: var(--normalFontSize); color: var(--textColor); margin: 0; }
    .cameraContainer { background: var(--whiteColor); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 2rem; display: flex; flex-direction: column; align-items: center; gap: 2rem; }
    .cameraWrapper { position: relative; display: inline-block; }
    .errorState { background: var(--inputColor); border-radius: 16px; padding: 4rem 2rem; text-align: center; border: 2px dashed var(--greyText); width: 384px; height: 518px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .errorIcon { color: #ff4757; margin-bottom: 1rem; }
    .errorText { font-size: var(--normalFontSize); color: var(--textColor); margin-bottom: 1.5rem; }
    .controlsGrid { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
    .controlBtn { background: var(--PrimaryColor); color: var(--whiteColor); border: none; padding: 0.875rem 1.75rem; border-radius: 8px; font-size: var(--normalFontSize); font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; gap: 0.75rem; min-width: 160px; justify-content: center; }
    .controlBtn:hover { background: var(--HoverColor); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
    .controlBtn:disabled { background: var(--greyText); cursor: not-allowed; transform: none; box-shadow: none; }
    .controlBtn.secondary { background: var(--inputColor); color: var(--blackColor); border: 2px solid var(--itemCardHover); }
    .controlBtn.secondary:hover { background: var(--itemCardHover); border-color: var(--greyText); }
    .controlBtn.danger { background: #ff4757; color: var(--whiteColor); }
    .controlBtn.danger:hover { background: #ff3742; }
    .recordingIndicator { background: #ff4757; color: var(--whiteColor); padding: 0.5rem 1rem; border-radius: 12px; font-size: var(--smallFontSize); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; position: absolute; top: 1rem; left: 1rem; z-index: 100; }
    .recordingDot { width: 8px; height: 8px; background: var(--whiteColor); border-radius: 50%; animation: pulse 1.5s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .statusIndicator { padding: 0.75rem 1rem; border-radius: 8px; font-size: var(--normalFontSize); font-weight: 600; display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; width: 100%; max-width: 384px; justify-content: center; }
    .statusIndicator.success { background: rgba(16, 185, 129, 0.1); color: var(--successColor); }
    .statusIndicator.warning { background: rgba(245, 158, 11, 0.1); color: var(--warningColor); }
    .statusIndicator.error { background: rgba(255, 71, 87, 0.1); color: #ff4757; }
    .resultsSection, .historySection { background: var(--whiteColor); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-top: 2rem; width: 100%; max-width: 900px; }
    .sectionHeader { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; color: var(--blackColor); }
    .sectionHeader h3 { font-size: var(--h2FontSize); font-weight: 700; margin: 0; }
    .videoPreview { margin-bottom: 2rem; }
    .previewVideo { width: 300px; height: 200px; border-radius: 12px; object-fit: cover; border: 2px solid var(--inputColor); }
    .loadingState { text-align: center; padding: 2rem; color: var(--textColor); }
    .loadingSpinner { width: 24px; height: 24px; border: 3px solid var(--inputColor); border-top: 3px solid var(--PrimaryColor); border-radius: 50%; animation: spin 1s linear infinite; margin-right: 0.5rem; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .predictionGrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
    .predictionCard { background: var(--paleGreen); border: 1px solid var(--PrimaryColor); border-radius: 12px; padding: 1.5rem; text-align: center; transition: transform 0.2s ease; }
    .predictionCard:hover { transform: translateY(-2px); }
    .predictionValue { font-size: 2.5rem; font-weight: 700; color: var(--PrimaryColor); margin-bottom: 0.5rem; }
    .predictionLabel { font-size: var(--normalFontSize); color: var(--blackColor); font-weight: 600; margin-bottom: 0.25rem; }
    .predictionUnit { font-size: var(--smallFontSize); color: var(--textColor); }
    .historyList { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
    .historyItem { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--inputColor); border-radius: 8px; transition: background 0.2s; }
    .historyItem:hover { background: var(--itemCardHover); }
    .historyInfo { display: flex; flex-direction: column; }
    .historyDate { font-weight: 600; color: var(--blackColor); }
    .historyVitals { font-size: var(--smallFontSize); color: var(--textColor); }
    .modalOverlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; }
    .modalContent { background: var(--whiteColor); padding: 2rem; border-radius: 16px; width: 90%; max-width: 600px; max-height: 80vh; overflow-y: auto; position: relative; }
    .modalClose { position: absolute; top: 1rem; right: 1rem; background: none; border: none; cursor: pointer; color: var(--greyText); }
    .modalBody .predictionGrid { margin-top: 1.5rem; }
    @media screen and (max-width: 768px) {
      .cameraSection { padding: 1rem; }
      .cameraHeader { padding: 1.5rem; }
      .cameraHeader h1 { font-size: 1.5rem; }
      .cameraContainer { padding: 1rem; }
      .cameraWrapper { transform: scale(0.85); }
      .controlsGrid { flex-direction: column; align-items: center; }
      .controlBtn { width: 100%; max-width: 280px; }
      .predictionGrid { grid-template-columns: 1fr; }
      .previewVideo { width: 100%; max-width: 300px; }
    }
  `,wt=()=>w?x("div",{className:"statusIndicator warning",children:[f("div",{className:"loadingSpinner",style:{width:"20px",height:"20px",borderTop:"3px solid var(--warningColor)"}}),f("span",{children:"Analyzing your video..."})]}):_?b!=null&&b.error?x("div",{className:"statusIndicator error",children:[f(Mo,{size:18}),f("span",{children:"Analysis failed. Please try again."})]}):A?x("div",{className:"statusIndicator success",children:[f(Lm,{size:18}),f("span",{children:"Analysis complete and data saved."})]}):C?x("div",{className:"statusIndicator warning",children:[f("div",{className:"loadingSpinner",style:{width:"20px",height:"20px",borderTop:"3px solid var(--warningColor)"}}),f("span",{children:"Saving results..."})]}):x("div",{className:"statusIndicator error",children:[f(Mo,{size:18}),f("span",{children:"Analysis complete, but failed to save."})]}):null,Wr=()=>f("div",{className:"modalOverlay",onClick:()=>$(!1),children:x("div",{className:"modalContent",onClick:Q=>Q.stopPropagation(),children:[f("button",{className:"modalClose",onClick:()=>$(!1),children:f(dc,{size:24})}),L?x(Tt,{children:[f("div",{className:"sectionHeader",children:f("h3",{children:"Scan Details"})}),x("p",{children:[f("strong",{children:"Date:"})," ",new Date(L.timestamp).toLocaleString()]}),x("div",{className:"predictionGrid",children:[x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:L.heartRate||"--"}),f("div",{className:"predictionLabel",children:"Heart Rate"}),f("div",{className:"predictionUnit",children:"BPM"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:L.bloodPressureSystolic&&L.bloodPressureDiastolic?`${L.bloodPressureSystolic}/${L.bloodPressureDiastolic}`:"--/--"}),f("div",{className:"predictionLabel",children:"Blood Pressure"}),f("div",{className:"predictionUnit",children:"mmHg"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:L.oxygenSaturation||"--"}),f("div",{className:"predictionLabel",children:"Oxygen Saturation"}),f("div",{className:"predictionUnit",children:"%"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:L.stressIndex||"--"}),f("div",{className:"predictionLabel",children:"Stress Level"}),f("div",{className:"predictionUnit",children:"%"})]})]})]}):x("div",{className:"loadingState",children:[f("div",{className:"loadingSpinner"}),f("p",{children:"Loading Details..."})]})]})});return!o||V?x(Tt,{children:[f("style",{children:it}),f("div",{className:"cameraSection",children:x("div",{className:"loadingState",style:{paddingTop:"5rem"},children:[f("div",{className:"loadingSpinner"}),f("p",{children:"Loading scanner..."})]})})]}):s?x(Tt,{children:[f("style",{children:it}),x("div",{className:"cameraSection",children:[f("div",{className:"cameraHeader",children:x("h1",{children:[f(Kt,{size:28}),"Health Vitals Scanner"]})}),f("div",{className:"cameraContainer",children:x("div",{className:"errorState",children:[f(Mo,{className:"errorIcon",size:64}),f("p",{className:"errorText",children:s.message}),x("button",{className:"controlBtn",onClick:()=>window.location.reload(),children:[f(jT,{size:16})," Try Again"]})]})})]})]}):x(Tt,{children:[f("style",{children:it}),R&&Wr(),x("div",{className:"cameraSection",children:[x("div",{className:"cameraHeader",children:[x("h1",{children:[f(Kt,{size:28}),"Health Vitals Scanner"]}),f("p",{children:"Position your face in the oval and record for 30 seconds."})]}),x("div",{className:"cameraContainer",children:[f("div",{className:"cameraWrapper",style:{width:ce,height:ue},children:x("div",{style:{position:"relative",width:ce,height:ue,borderRadius:"1.5rem",overflow:"hidden",border:u?"4px solid #ff4757":"2px solid #e5e7eb",boxShadow:u?"0 0 20px rgba(255, 71, 87, 0.3)":"0 4px 20px rgba(0,0,0,0.08)"},children:[f("video",{ref:e,autoPlay:!0,playsInline:!0,muted:!0,style:{width:ce,height:ue,objectFit:"cover"}}),f("canvas",{ref:t,style:{position:"absolute",top:0,left:0,width:ce,height:ue,pointerEvents:"none",zIndex:20}}),f("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:30,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(16px)",WebkitMaskImage:"radial-gradient(ellipse 61% 68% at 50% 50%, transparent 69%, black 71%)",maskImage:"radial-gradient(ellipse 61% 68% at 50% 50%, transparent 69%, black 71%)",background:"rgba(255,255,255,0.10)"}}),f("div",{style:{position:"absolute",left:"6%",top:"4%",width:"88%",height:"92%",border:"5px dashed #fff",borderRadius:"50%",boxSizing:"border-box",zIndex:31,pointerEvents:"none"}}),f("div",{style:{position:"absolute",width:"100%",textAlign:"center",color:"#fff",fontWeight:600,fontSize:"1.15rem",textShadow:"0 2px 12px #003046cc",letterSpacing:"0.02em",top:"14px",left:0,zIndex:40,pointerEvents:"none"},children:"Place your face in the oval"}),u&&x("div",{className:"recordingIndicator",children:[f("div",{className:"recordingDot"}),"REC ",Je(p)]})]})}),wt(),x("div",{className:"controlsGrid",children:[!u&&!m&&x("button",{className:"controlBtn",onClick:di,disabled:!!s||V,children:[f(Sy,{size:18})," Start Recording"]}),u&&x("button",{className:"controlBtn danger",onClick:B,children:[f(KT,{size:18})," Stop Recording"]}),m&&x("button",{className:"controlBtn",onClick:di,disabled:w||C,children:[f(Sy,{size:18})," Record Again"]})]})]}),_&&b&&!b.error&&x("div",{className:"resultsSection",children:[x("div",{className:"sectionHeader",children:[f(fr,{size:24}),f("h3",{children:"Analysis Results"})]}),x("div",{className:"videoPreview",children:[f("h4",{style:{color:"var(--blackColor)",marginBottom:"1rem"},children:"Recorded Video:"}),f("video",{className:"previewVideo",controls:!0,src:m})]}),x("div",{className:"predictionGrid",children:[x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:b.heartRate||"--"}),f("div",{className:"predictionLabel",children:"Heart Rate"}),f("div",{className:"predictionUnit",children:"BPM"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:(Za=b.bloodPressure)!=null&&Za.systolic&&((Hg=b.bloodPressure)!=null&&Hg.diastolic)?`${b.bloodPressure.systolic}/${b.bloodPressure.diastolic}`:"--/--"}),f("div",{className:"predictionLabel",children:"Blood Pressure"}),f("div",{className:"predictionUnit",children:"mmHg"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:b.oxygenSaturation||"--"}),f("div",{className:"predictionLabel",children:"Oxygen Saturation"}),f("div",{className:"predictionUnit",children:"%"})]}),x("div",{className:"predictionCard",children:[f("div",{className:"predictionValue",children:b.stressLevel||"--"}),f("div",{className:"predictionLabel",children:"Stress Level"}),f("div",{className:"predictionUnit",children:"%"})]})]})]}),x("div",{className:"historySection",children:[x("div",{className:"sectionHeader",children:[f(oT,{size:24}),f("h3",{children:"Recent Scans"})]}),Z?x("div",{className:"loadingState",children:[f("div",{className:"loadingSpinner",style:{width:"24px",height:"24px"}})," Loading history..."]}):M.length>0?f("ul",{className:"historyList",children:M.map(Q=>x("li",{className:"historyItem",children:[x("div",{className:"historyInfo",children:[f("span",{className:"historyDate",children:new Date(Q.timestamp).toLocaleString()}),x("span",{className:"historyVitals",children:["HR: ",Q.heartRate||"N/A"]})]}),f("button",{className:"controlBtn secondary",style:{minWidth:"120px",padding:"0.5rem 1rem"},onClick:()=>dt(Q._id),children:"View Details"})]},Q._id))}):f("p",{style:{textAlign:"center",color:"var(--textColor)"},children:"No scan history found."})]})]})]})}const TU=()=>localStorage.getItem("authToken")?f(O2,{}):f(E2,{to:"/"});function _U(){return f(JA,{children:x(VA,{children:[f(at,{path:"/",element:f(I3,{})}),f(at,{path:"/register",element:f(D3,{})}),f(at,{path:"/verify-email",element:f($3,{})}),f(at,{path:"/forgot-password",element:f(R3,{})}),f(at,{path:"/reset-password",element:f(L3,{})}),x(at,{element:f(TU,{}),children:[f(at,{path:"/profileform",element:f(F3,{})}),x(at,{path:"/dashboard",element:f(w4,{}),children:[f(at,{index:!0,element:f(n8,{})})," ",f(at,{path:"vitals",element:f(i8,{})}),f(at,{path:"analytics",element:f(CU,{})}),f(at,{path:"results",element:f(kU,{})}),f(at,{path:"api-keys",element:f(PU,{})}),f(at,{path:"profile",element:f(EU,{})}),f(at,{path:"Camera",element:f(AU,{})})]})]}),f(at,{path:"*",element:f(E2,{to:"/"})})]})})}Ef.createRoot(document.getElementById("root")).render(f(en.StrictMode,{children:f(_U,{})}));

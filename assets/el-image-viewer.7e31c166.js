import{ax as F,bv as _e,y as re,x as Se,bw as Le,K as we,N as ce,aj as ye,ak as se,U as le,bx as ve,by as Ce,bz as ze,bA as be,V as he,b7 as Te,r as T,bB as Ne,ay as Oe,T as E,g as de,a5 as ke,a2 as Ie,o as L,a8 as fe,b as y,w as O,a as S,Z as h,q as r,aa as me,ap as $e,ab as $,an as V,bC as Re,c as M,F as oe,bD as Ae,am as Be,bE as Me,bF as Ve,a9 as Fe,bG as Ye,bH as De,au as Pe,aq as Xe,ar as He,Y as ae,aR as We,b8 as je,$ as xe,az as K,a_ as j,bI as Ke,af as Ee,aE as Ze,bJ as qe,t as Ue,aF as Ge,b6 as Je,P as Qe}from"./entry.3b485f01.js";import{u as et}from"./index.f0a89ea4.js";const tt=(e,o)=>{if(!F||!e||!o)return!1;const n=e.getBoundingClientRect();let s;return o instanceof Element?s=o.getBoundingClientRect():s={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<s.bottom&&n.bottom>s.top&&n.right>s.left&&n.left<s.right};var nt=/\s/;function at(e){for(var o=e.length;o--&&nt.test(e.charAt(o)););return o}var rt=/^\s+/;function st(e){return e&&e.slice(0,at(e)+1).replace(rt,"")}var pe=0/0,ot=/^[-+]0x[0-9a-f]+$/i,lt=/^0b[01]+$/i,it=/^0o[0-7]+$/i,ut=parseInt;function ge(e){if(typeof e=="number")return e;if(_e(e))return pe;if(re(e)){var o=typeof e.valueOf=="function"?e.valueOf():e;e=re(o)?o+"":o}if(typeof e!="string")return e===0?e:+e;e=st(e);var n=lt.test(e);return n||it.test(e)?ut(e.slice(2),n?2:8):ot.test(e)?pe:+e}var ct=function(){return Se.Date.now()};const ie=ct;var dt="Expected a function",ft=Math.max,mt=Math.min;function vt(e,o,n){var s,f,k,i,p,b,I=0,_=!1,g=!1,m=!0;if(typeof e!="function")throw new TypeError(dt);o=ge(o)||0,re(n)&&(_=!!n.leading,g="maxWait"in n,k=g?ft(ge(n.maxWait)||0,o):k,m="trailing"in n?!!n.trailing:m);function v(u){var w=s,B=f;return s=f=void 0,I=u,i=e.apply(B,w),i}function c(u){return I=u,p=setTimeout(A,o),_?v(u):i}function Y(u){var w=u-b,B=u-I,H=o-w;return g?mt(H,k-B):H}function R(u){var w=u-b,B=u-I;return b===void 0||w>=o||w<0||g&&B>=k}function A(){var u=ie();if(R(u))return X(u);p=setTimeout(A,Y(u))}function X(u){return p=void 0,m&&s?v(u):(s=f=void 0,i)}function Z(){p!==void 0&&clearTimeout(p),I=0,s=b=f=p=void 0}function D(){return p===void 0?i:X(ie())}function P(){var u=ie(),w=R(u);if(s=arguments,f=this,b=u,w){if(p===void 0)return c(b);if(g)return clearTimeout(p),p=setTimeout(A,o),v(b)}return p===void 0&&(p=setTimeout(A,o)),i}return P.cancel=Z,P.flush=D,P}var pt="Expected a function";function ue(e,o,n){var s=!0,f=!0;if(typeof e!="function")throw new TypeError(pt);return re(n)&&(s="leading"in n?!!n.leading:s,f="trailing"in n?!!n.trailing:f),vt(e,o,{leading:s,maxWait:o,trailing:f})}const gt=(e,o)=>{if(!F)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],s=Le(e,n);return["scroll","auto","overlay"].some(f=>s.includes(f))},wt=(e,o)=>{if(!F)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(gt(n,o))return n;n=n.parentNode}return n},yt=we({urlList:{type:ce(Array),default:()=>ye([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),bt={close:()=>!0,switch:e=>se(e),rotate:e=>se(e)},ht=["src"],kt=le({name:"ElImageViewer"}),It=le({...kt,props:yt,emits:bt,setup(e,{expose:o,emit:n}){const s=e,f={CONTAIN:{name:"contain",icon:ve(Ce)},ORIGINAL:{name:"original",icon:ve(ze)}},{t:k}=be(),i=he("image-viewer"),{nextZIndex:p}=Te(),b=T(),I=T([]),_=Ne(),g=T(!0),m=T(s.initialIndex),v=Oe(f.CONTAIN),c=T({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=E(()=>{const{urlList:a}=s;return a.length<=1}),R=E(()=>m.value===0),A=E(()=>m.value===s.urlList.length-1),X=E(()=>s.urlList[m.value]),Z=E(()=>[i.e("btn"),i.e("prev"),i.is("disabled",!s.infinite&&R.value)]),D=E(()=>[i.e("btn"),i.e("next"),i.is("disabled",!s.infinite&&A.value)]),P=E(()=>{const{scale:a,deg:l,offsetX:d,offsetY:C,enableTransition:N}=c.value;let x=d/a,z=C/a;switch(l%360){case 90:case-270:[x,z]=[z,-x];break;case 180:case-180:[x,z]=[-x,-z];break;case 270:case-90:[x,z]=[-z,x];break}const W={transform:`scale(${a}) rotate(${l}deg) translate(${x}px, ${z}px)`,transition:N?"transform .3s":""};return v.value.name===f.CONTAIN.name&&(W.maxWidth=W.maxHeight="100%"),W}),u=E(()=>se(s.zIndex)?s.zIndex:p());function w(){H(),n("close")}function B(){const a=ue(d=>{switch(d.code){case j.esc:s.closeOnPressEscape&&w();break;case j.space:ee();break;case j.left:te();break;case j.up:t("zoomIn");break;case j.right:ne();break;case j.down:t("zoomOut");break}}),l=ue(d=>{const C=d.deltaY||d.deltaX;t(C<0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})});_.run(()=>{K(document,"keydown",a),K(document,"wheel",l)})}function H(){_.stop()}function G(){g.value=!1}function J(a){g.value=!1,a.target.alt=k("el.image.error")}function Q(a){if(g.value||a.button!==0||!b.value)return;c.value.enableTransition=!1;const{offsetX:l,offsetY:d}=c.value,C=a.pageX,N=a.pageY,x=ue(W=>{c.value={...c.value,offsetX:l+W.pageX-C,offsetY:d+W.pageY-N}}),z=K(document,"mousemove",x);K(document,"mouseup",()=>{z()}),a.preventDefault()}function q(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(g.value)return;const a=Ke(f),l=Object.values(f),d=v.value.name,N=(l.findIndex(x=>x.name===d)+1)%a.length;v.value=f[a[N]],q()}function U(a){const l=s.urlList.length;m.value=(a+l)%l}function te(){R.value&&!s.infinite||U(m.value-1)}function ne(){A.value&&!s.infinite||U(m.value+1)}function t(a,l={}){if(g.value)return;const{minScale:d,maxScale:C}=s,{zoomRate:N,rotateDeg:x,enableTransition:z}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...l};switch(a){case"zoomOut":c.value.scale>d&&(c.value.scale=Number.parseFloat((c.value.scale/N).toFixed(3)));break;case"zoomIn":c.value.scale<C&&(c.value.scale=Number.parseFloat((c.value.scale*N).toFixed(3)));break;case"clockwise":c.value.deg+=x,n("rotate",c.value.deg);break;case"anticlockwise":c.value.deg-=x,n("rotate",c.value.deg);break}c.value.enableTransition=z}return de(X,()=>{ke(()=>{const a=I.value[0];a!=null&&a.complete||(g.value=!0)})}),de(m,a=>{q(),n("switch",a)}),Ie(()=>{var a,l;B(),(l=(a=b.value)==null?void 0:a.focus)==null||l.call(a)}),o({setActiveItem:U}),(a,l)=>(L(),fe(je,{to:"body",disabled:!a.teleported},[y(We,{name:"viewer-fade",appear:""},{default:O(()=>[S("div",{ref_key:"wrapper",ref:b,tabindex:-1,class:h(r(i).e("wrapper")),style:me({zIndex:r(u)})},[S("div",{class:h(r(i).e("mask")),onClick:l[0]||(l[0]=$e(d=>a.hideOnClickModal&&w(),["self"]))},null,2),$(" CLOSE "),S("span",{class:h([r(i).e("btn"),r(i).e("close")]),onClick:w},[y(r(V),null,{default:O(()=>[y(r(Re))]),_:1})],2),$(" ARROW "),r(Y)?$("v-if",!0):(L(),M(oe,{key:0},[S("span",{class:h(r(Z)),onClick:te},[y(r(V),null,{default:O(()=>[y(r(Ae))]),_:1})],2),S("span",{class:h(r(D)),onClick:ne},[y(r(V),null,{default:O(()=>[y(r(Be))]),_:1})],2)],64)),$(" ACTIONS "),S("div",{class:h([r(i).e("btn"),r(i).e("actions")])},[S("div",{class:h(r(i).e("actions__inner"))},[y(r(V),{onClick:l[1]||(l[1]=d=>t("zoomOut"))},{default:O(()=>[y(r(Me))]),_:1}),y(r(V),{onClick:l[2]||(l[2]=d=>t("zoomIn"))},{default:O(()=>[y(r(Ve))]),_:1}),S("i",{class:h(r(i).e("actions__divider"))},null,2),y(r(V),{onClick:ee},{default:O(()=>[(L(),fe(Fe(r(v).icon)))]),_:1}),S("i",{class:h(r(i).e("actions__divider"))},null,2),y(r(V),{onClick:l[3]||(l[3]=d=>t("anticlockwise"))},{default:O(()=>[y(r(Ye))]),_:1}),y(r(V),{onClick:l[4]||(l[4]=d=>t("clockwise"))},{default:O(()=>[y(r(De))]),_:1})],2)],2),$(" CANVAS "),S("div",{class:h(r(i).e("canvas"))},[(L(!0),M(oe,null,Pe(a.urlList,(d,C)=>Xe((L(),M("img",{ref_for:!0,ref:N=>I.value[C]=N,key:d,src:d,style:me(r(P)),class:h(r(i).e("img")),onLoad:G,onError:J,onMousedown:Q},null,46,ht)),[[He,C===m.value]])),128))],2),ae(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var xt=xe(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Et=Ee(xt),_t=we({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:ce([String,Object])},previewSrcList:{type:ce(Array),default:()=>ye([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),St={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>se(e),close:()=>!0,show:()=>!0},Lt=["src","loading"],Ct={key:0},zt=le({name:"ElImage",inheritAttrs:!1}),Tt=le({...zt,props:_t,emits:St,setup(e,{emit:o}){const n=e;let s="";const{t:f}=be(),k=he("image"),i=Ze(),p=et(),b=T(),I=T(!1),_=T(!0),g=T(!1),m=T(),v=T(),c=F&&"loading"in HTMLImageElement.prototype;let Y,R;const A=E(()=>[k.e("inner"),D.value&&k.e("preview"),_.value&&k.is("loading")]),X=E(()=>i.style),Z=E(()=>{const{fit:t}=n;return F&&t?{objectFit:t}:{}}),D=E(()=>{const{previewSrcList:t}=n;return Array.isArray(t)&&t.length>0}),P=E(()=>{const{previewSrcList:t,initialIndex:a}=n;let l=a;return a>t.length-1&&(l=0),l}),u=E(()=>n.loading==="eager"?!1:!c&&n.loading==="lazy"||n.lazy),w=()=>{F&&(_.value=!0,I.value=!1,b.value=n.src)};function B(t){_.value=!1,I.value=!1,o("load",t)}function H(t){_.value=!1,I.value=!0,o("error",t)}function G(){tt(m.value,v.value)&&(w(),q())}const J=qe(G,200,!0);async function Q(){var t;if(!F)return;await ke();const{scrollContainer:a}=n;Je(a)?v.value=a:Qe(a)&&a!==""?v.value=(t=document.querySelector(a))!=null?t:void 0:m.value&&(v.value=wt(m.value)),v.value&&(Y=K(v,"scroll",J),setTimeout(()=>G(),100))}function q(){!F||!v.value||!J||(Y==null||Y(),v.value=void 0)}function ee(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function U(){D.value&&(R=K("wheel",ee,{passive:!1}),s=document.body.style.overflow,document.body.style.overflow="hidden",g.value=!0,o("show"))}function te(){R==null||R(),document.body.style.overflow=s,g.value=!1,o("close")}function ne(t){o("switch",t)}return de(()=>n.src,()=>{u.value?(_.value=!0,I.value=!1,q(),Q()):w()}),Ie(()=>{u.value?Q():w()}),(t,a)=>(L(),M("div",{ref_key:"container",ref:m,class:h([r(k).b(),t.$attrs.class]),style:me(r(X))},[I.value?ae(t.$slots,"error",{key:0},()=>[S("div",{class:h(r(k).e("error"))},Ue(r(f)("el.image.error")),3)]):(L(),M(oe,{key:1},[b.value!==void 0?(L(),M("img",Ge({key:0},r(p),{src:b.value,loading:t.loading,style:r(Z),class:r(A),onClick:U,onLoad:B,onError:H}),null,16,Lt)):$("v-if",!0),_.value?(L(),M("div",{key:1,class:h(r(k).e("wrapper"))},[ae(t.$slots,"placeholder",{},()=>[S("div",{class:h(r(k).e("placeholder"))},null,2)])],2)):$("v-if",!0)],64)),r(D)?(L(),M(oe,{key:2},[g.value?(L(),fe(r(Et),{key:0,"z-index":t.zIndex,"initial-index":r(P),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:te,onSwitch:ne},{default:O(()=>[t.$slots.viewer?(L(),M("div",Ct,[ae(t.$slots,"viewer")])):$("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):$("v-if",!0)],64)):$("v-if",!0)],6))}});var Nt=xe(Tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Rt=Ee(Nt);export{Rt as E,wt as g};
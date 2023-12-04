import{E as ue}from"./el-image-viewer.2cea10f2.js";import{_ as ee}from"./nuxt-link.8b765b58.js";import{E as te,a as oe,b as me,c as de}from"./el-affix.2c14fc61.js";import{K as j,$ as q,U as A,a1 as fe,V as le,r as p,T as H,h as ve,az as Y,aB as F,o as h,a8 as L,w as u,aq as pe,a as M,Z as k,q as b,aa as K,ar as _e,aR as he,ax as ge,c as x,b as c,F as X,N as be,ak as O,ad as G,g as Q,a4 as ye,a5 as Z,W as we,n as xe,a2 as Se,a3 as ze,Y as ae,a9 as Ee,ab as ke,al as Me,af as Ne,_ as se,d as ne,ah as Te,au as U,t as V}from"./entry.9e4da1f4.js";import{E as re,c as Ce,b as He,a as Le}from"./el-header.bd18320d.js";import $e from"./Icon.4c10bedf.js";import{t as Pe}from"./index.b765480d.js";import{u as Re}from"./DocumentationStore.38f16d85.js";import{_ as Be}from"./client-only.b653bd92.js";import"./index.cb169318.js";import"./index.2361ed03.js";const C=4,Oe={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Ae=({move:_,size:f,bar:n})=>({[n.size]:f,transform:`translate${n.axis}(${_}%)`}),ie=Symbol("scrollbarContextKey"),De=j({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),We="Thumb",Ie=A({__name:"thumb",props:De,setup(_){const f=_,n=fe(ie),o=le("scrollbar");n||Pe(We,"can not inject scrollbar context");const r=p(),d=p(),l=p({}),a=p(!1);let t=!1,i=!1,g=ge?document.onselectstart:null;const s=H(()=>Oe[f.vertical?"vertical":"horizontal"]),S=H(()=>Ae({size:f.size,move:f.move,bar:s.value})),z=H(()=>r.value[s.value.offset]**2/n.wrapElement[s.value.scrollSize]/f.ratio/d.value[s.value.offset]),N=m=>{var e;if(m.stopPropagation(),m.ctrlKey||[1,2].includes(m.button))return;(e=window.getSelection())==null||e.removeAllRanges(),P(m);const v=m.currentTarget;v&&(l.value[s.value.axis]=v[s.value.offset]-(m[s.value.client]-v.getBoundingClientRect()[s.value.direction]))},$=m=>{if(!d.value||!r.value||!n.wrapElement)return;const e=Math.abs(m.target.getBoundingClientRect()[s.value.direction]-m[s.value.client]),v=d.value[s.value.offset]/2,E=(e-v)*100*z.value/r.value[s.value.offset];n.wrapElement[s.value.scroll]=E*n.wrapElement[s.value.scrollSize]/100},P=m=>{m.stopImmediatePropagation(),t=!0,document.addEventListener("mousemove",y),document.addEventListener("mouseup",w),g=document.onselectstart,document.onselectstart=()=>!1},y=m=>{if(!r.value||!d.value||t===!1)return;const e=l.value[s.value.axis];if(!e)return;const v=(r.value.getBoundingClientRect()[s.value.direction]-m[s.value.client])*-1,E=d.value[s.value.offset]-e,B=(v-E)*100*z.value/r.value[s.value.offset];n.wrapElement[s.value.scroll]=B*n.wrapElement[s.value.scrollSize]/100},w=()=>{t=!1,l.value[s.value.axis]=0,document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",w),D(),i&&(a.value=!1)},T=()=>{i=!1,a.value=!!f.size},R=()=>{i=!0,a.value=t};ve(()=>{D(),document.removeEventListener("mouseup",w)});const D=()=>{document.onselectstart!==g&&(document.onselectstart=g)};return Y(F(n,"scrollbarElement"),"mousemove",T),Y(F(n,"scrollbarElement"),"mouseleave",R),(m,e)=>(h(),L(he,{name:b(o).b("fade"),persisted:""},{default:u(()=>[pe(M("div",{ref_key:"instance",ref:r,class:k([b(o).e("bar"),b(o).is(b(s).key)]),onMousedown:$},[M("div",{ref_key:"thumb",ref:d,class:k(b(o).e("thumb")),style:K(b(S)),onMousedown:N},null,38)],34),[[_e,m.always||a.value]])]),_:1},8,["name"]))}});var J=q(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Xe=j({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ye=A({__name:"bar",props:Xe,setup(_,{expose:f}){const n=_,o=p(0),r=p(0);return f({handleScroll:l=>{if(l){const a=l.offsetHeight-C,t=l.offsetWidth-C;r.value=l.scrollTop*100/a*n.ratioY,o.value=l.scrollLeft*100/t*n.ratioX}}}),(l,a)=>(h(),x(X,null,[c(J,{move:o.value,ratio:l.ratioX,size:l.width,always:l.always},null,8,["move","ratio","size","always"]),c(J,{move:r.value,ratio:l.ratioY,size:l.height,vertical:"",always:l.always},null,8,["move","ratio","size","always"])],64))}});var Ke=q(Ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Ue=j({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:be([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Ve={scroll:({scrollTop:_,scrollLeft:f})=>[_,f].every(O)},je="ElScrollbar",qe=A({name:je}),Fe=A({...qe,props:Ue,emits:Ve,setup(_,{expose:f,emit:n}){const o=_,r=le("scrollbar");let d,l;const a=p(),t=p(),i=p(),g=p("0"),s=p("0"),S=p(),z=p(1),N=p(1),$=H(()=>{const e={};return o.height&&(e.height=G(o.height)),o.maxHeight&&(e.maxHeight=G(o.maxHeight)),[o.wrapStyle,e]}),P=H(()=>[o.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!o.native}]),y=H(()=>[r.e("view"),o.viewClass]),w=()=>{var e;t.value&&((e=S.value)==null||e.handleScroll(t.value),n("scroll",{scrollTop:t.value.scrollTop,scrollLeft:t.value.scrollLeft}))};function T(e,v){Me(e)?t.value.scrollTo(e):O(e)&&O(v)&&t.value.scrollTo(e,v)}const R=e=>{O(e)&&(t.value.scrollTop=e)},D=e=>{O(e)&&(t.value.scrollLeft=e)},m=()=>{if(!t.value)return;const e=t.value.offsetHeight-C,v=t.value.offsetWidth-C,E=e**2/t.value.scrollHeight,B=v**2/t.value.scrollWidth,W=Math.max(E,o.minSize),I=Math.max(B,o.minSize);z.value=E/(e-E)/(W/(e-W)),N.value=B/(v-B)/(I/(v-I)),s.value=W+C<e?`${W}px`:"",g.value=I+C<v?`${I}px`:""};return Q(()=>o.noresize,e=>{e?(d==null||d(),l==null||l()):({stop:d}=ye(i,m),l=Y("resize",m))},{immediate:!0}),Q(()=>[o.maxHeight,o.height],()=>{o.native||Z(()=>{var e;m(),t.value&&((e=S.value)==null||e.handleScroll(t.value))})}),we(ie,xe({scrollbarElement:a,wrapElement:t})),Se(()=>{o.native||Z(()=>{m()})}),ze(()=>m()),f({wrapRef:t,update:m,scrollTo:T,setScrollTop:R,setScrollLeft:D,handleScroll:w}),(e,v)=>(h(),x("div",{ref_key:"scrollbarRef",ref:a,class:k(b(r).b())},[M("div",{ref_key:"wrapRef",ref:t,class:k(b(P)),style:K(b($)),onScroll:w},[(h(),L(Ee(e.tag),{id:e.id,ref_key:"resizeRef",ref:i,class:k(b(y)),style:K(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:u(()=>[ae(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?ke("v-if",!0):(h(),L(Ke,{key:0,ref_key:"barRef",ref:S,height:s.value,width:g.value,always:e.always,"ratio-x":N.value,"ratio-y":z.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ge=q(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const ce=Ne(Ge);const Qe={},Ze=M("div",{class:"flex-grow"},null,-1);function Je(_,f){const n=ue,o=ee,r=te,d=oe,l=me;return h(),L(l,{offset:0},{default:u(()=>[c(d,{class:"flex items-center",mode:"horizontal",ellipsis:!1},{default:u(()=>[c(o,{to:"/documentation/get-started/quickstart"},{default:u(()=>[c(n,{src:"/images/logo.png",class:"hover:cursor-pointer"})]),_:1}),Ze,c(o,{to:"/app/dashboard"},{default:u(()=>[c(r,{index:"5"},{default:u(()=>[ne("Go to the App")]),_:1})]),_:1})]),_:1})]),_:1})}const et=se(Qe,[["render",Je]]);const tt={class:"text-xl"},ot=A({__name:"Menu",setup(_){const f=Te(),n=t=>t.toLowerCase().replaceAll(" ","-"),o=[{title:"Get started",icon:"ion:rocket-sharp",subMenus:["Quickstart"]},{title:"Assistant",icon:"mdi:robot",subMenus:["Overview","Package"]}],r=f.path.substring(0,f.path.lastIndexOf("/")),d=r.substring(r.lastIndexOf("/")+1);console.log(d);const l=o.map((t,i)=>({title:t.title,idx:(i+1).toString()})).filter(t=>n(t.title)===d),a=l.length===0?["1"]:[l[0].idx];return(t,i)=>{const g=$e,s=te,S=ee,z=de,N=oe,$=ce,P=re;return h(),L(P,{class:"h-[calc(100vh-160px)] text-2xl"},{default:u(()=>[c($,null,{default:u(()=>[c(N,{"default-openeds":b(a)},{default:u(()=>[(h(),x(X,null,U(o,(y,w)=>c(z,{index:(w+1).toString(),class:"text-2xl"},{title:u(()=>[c(g,{size:"18",name:y.icon,class:"mr-3"},null,8,["name"]),M("span",tt,V(y.title),1)]),default:u(()=>[(h(!0),x(X,null,U(y.subMenus,(T,R)=>(h(),L(S,{to:"/documentation/"+n(y.title)+"/"+n(T)},{default:u(()=>[c(s,{class:"text-base ml-5",index:w+1+"-"+(R+1)},{default:u(()=>[ne(V(T),1)]),_:2},1032,["index"])]),_:2},1032,["to"]))),256))]),_:2},1032,["index"])),64))]),_:1},8,["default-openeds"])]),_:1})]),_:1})}}}),lt={class:"border-l-2 pl-7"},at=["onClick"],st={__name:"PageNavigator",setup(_){const f=Re(),n=/#{1,6}.+/g;let o=p([]);f.$subscribe((l,a)=>{r(a.viewedPageMarkdown)});const r=l=>{const a=l.match(n),t={1:0,2:0,3:0,4:0,5:0,6:0};o.value=a.map(i=>{const g=i.split(" ",1)[0].length;return t[g]+=1,{level:g,text:i.substring(g+1),levelIndex:t[g]}}).filter(i=>i.level<3)},d=l=>{const a=document.getElementById("documentation-md-insert-point").getElementsByTagName("h"+l.level)[l.levelIndex-1],t=a.style.position,i=a.style.top;a.style.position="relative",a.style.top="-60px",a.scrollIntoView({behavior:"smooth",block:"start"}),a.style.top=i,a.style.position=t};return(l,a)=>{const t=ce;return h(),x("div",lt,[c(t,null,{default:u(()=>[(h(!0),x(X,null,U(b(o),i=>(h(),x("div",{class:"m-1",onClick:()=>d(i)},[M("div",{class:k({"ml-3":i.level===2})},[M("span",{class:k(["cursor-pointer hover:text-sky-500",{"text-xl":i.level===1,"text-lg":i.level===2}])},V(i.text),3)],2)],8,at))),256))]),_:1})])}}},nt={},rt={class:"common-layout"};function it(_,f){const n=et,o=Ce,r=ot,d=He,l=Le,a=re,t=st,i=Be;return h(),x("div",rt,[c(a,null,{default:u(()=>[c(o,null,{default:u(()=>[c(n)]),_:1}),c(a,null,{default:u(()=>[c(d,{width:"200px",class:"fixed"},{default:u(()=>[c(r)]),_:1}),c(a,{class:"mx-52"},{default:u(()=>[c(l,null,{default:u(()=>[ae(_.$slots,"default")]),_:3})]),_:3}),c(d,{width:"200px",class:"fixed right-0"},{default:u(()=>[c(i,null,{default:u(()=>[c(t)]),_:1})]),_:1})]),_:3})]),_:3})])}const yt=se(nt,[["render",it]]);export{yt as default};

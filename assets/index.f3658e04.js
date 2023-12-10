import{c as H,u as pe,a as z,E as me}from"./el-button.667f6210.js";import{K as P,N as S,U as y,V as N,o as r,c as m,Z as h,q as l,Y as C,d as v,t as x,ab as K,a as i,aa as O,$ as j,af as A,T as b,W as J,a8 as $,w as _,a9 as R,aj as I,a1 as Z,ak as D,al as _e,r as E,g as fe,b as u,am as be,an as X,ao as ye,ap as ge,aq as he,ar as ve,ag as xe,as as $e,R as we,at as Ce,_ as ee,s as q,F as B,au as V,u as te,av as se,aw as Y}from"./entry.68f5bc80.js";import{E as M}from"./el-image-viewer.68a1d12f.js";import ne from"./Icon.c4a69092.js";import{U as oe,C as ae}from"./index.20dd929c.js";import{_ as ke}from"./index.887a444d.js";import"./index.0cacc455.js";const le=()=>Math.floor(Math.random()*1e4),Se=P({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:S([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),Ee=y({name:"ElCard"}),Pe=y({...Ee,props:Se,setup(n){const e=N("card");return(t,o)=>(r(),m("div",{class:h([l(e).b(),l(e).is(`${t.shadow}-shadow`)])},[t.$slots.header||t.header?(r(),m("div",{key:0,class:h(l(e).e("header"))},[C(t.$slots,"header",{},()=>[v(x(t.header),1)])],2)):K("v-if",!0),i("div",{class:h([l(e).e("body"),t.bodyClass]),style:O(t.bodyStyle)},[C(t.$slots,"default")],6),t.$slots.footer||t.footer?(r(),m("div",{key:1,class:h(l(e).e("footer"))},[C(t.$slots,"footer",{},()=>[v(x(t.footer),1)])],2)):K("v-if",!0)],2))}});var Ne=j(Pe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const je=A(Ne),ie=Symbol("rowContextKey"),Te=["start","center","end","space-around","space-between","space-evenly"],Ie=["top","middle","bottom"],Ke=P({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:Te,default:"start"},align:{type:String,values:Ie}}),Ae=y({name:"ElRow"}),qe=y({...Ae,props:Ke,setup(n){const e=n,t=N("row"),o=b(()=>e.gutter);J(ie,{gutter:o});const c=b(()=>{const s={};return e.gutter&&(s.marginRight=s.marginLeft=`-${e.gutter/2}px`),s}),a=b(()=>[t.b(),t.is(`justify-${e.justify}`,e.justify!=="start"),t.is(`align-${e.align}`,!!e.align)]);return(s,d)=>(r(),$(R(s.tag),{class:h(l(a)),style:O(l(c))},{default:_(()=>[C(s.$slots,"default")]),_:3},8,["class","style"]))}});var Be=j(qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const ce=A(Be),Ve=P({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:S([Number,Object]),default:()=>I({})},sm:{type:S([Number,Object]),default:()=>I({})},md:{type:S([Number,Object]),default:()=>I({})},lg:{type:S([Number,Object]),default:()=>I({})},xl:{type:S([Number,Object]),default:()=>I({})}}),ze=y({name:"ElCol"}),Fe=y({...ze,props:Ve,setup(n){const e=n,{gutter:t}=Z(ie,{gutter:b(()=>0)}),o=N("col"),c=b(()=>{const s={};return t.value&&(s.paddingLeft=s.paddingRight=`${t.value/2}px`),s}),a=b(()=>{const s=[];return["span","offset","pull","push"].forEach(p=>{const g=e[p];D(g)&&(p==="span"?s.push(o.b(`${e[p]}`)):g>0&&s.push(o.b(`${p}-${e[p]}`)))}),["xs","sm","md","lg","xl"].forEach(p=>{D(e[p])?s.push(o.b(`${p}-${e[p]}`)):_e(e[p])&&Object.entries(e[p]).forEach(([g,w])=>{s.push(g!=="span"?o.b(`${p}-${g}-${w}`):o.b(`${p}-${w}`))})}),t.value&&s.push(o.is("guttered")),[o.b(),s]});return(s,d)=>(r(),$(R(s.tag),{class:h(l(a)),style:O(l(c))},{default:_(()=>[C(s.$slots,"default")]),_:3},8,["class","style"]))}});var Oe=j(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const re=A(Oe),Q=n=>typeof D(n),Re=P({accordion:Boolean,modelValue:{type:S([Array,String,Number]),default:()=>I([])}}),Ge={[oe]:Q,[ae]:Q},ue=Symbol("collapseContextKey"),We=(n,e)=>{const t=E(H(n.modelValue)),o=a=>{t.value=a;const s=n.accordion?t.value[0]:t.value;e(oe,s),e(ae,s)},c=a=>{if(n.accordion)o([t.value[0]===a?"":a]);else{const s=[...t.value],d=s.indexOf(a);d>-1?s.splice(d,1):s.push(a),o(s)}};return fe(()=>n.modelValue,()=>t.value=H(n.modelValue),{deep:!0}),J(ue,{activeNames:t,handleItemClick:c}),{activeNames:t,setActiveNames:o}},Le=()=>{const n=N("collapse");return{rootKls:b(()=>n.b())}},De=y({name:"ElCollapse"}),Me=y({...De,props:Re,emits:Ge,setup(n,{expose:e,emit:t}){const o=n,{activeNames:c,setActiveNames:a}=We(o,t),{rootKls:s}=Le();return e({activeNames:c,setActiveNames:a}),(d,f)=>(r(),m("div",{class:h(l(s))},[C(d.$slots,"default")],2))}});var Ue=j(Me,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const He=P({title:{type:String,default:""},name:{type:S([String,Number]),default:()=>le()},disabled:Boolean}),Ye=n=>{const e=Z(ue),t=E(!1),o=E(!1),c=E(le()),a=b(()=>e==null?void 0:e.activeNames.value.includes(n.name));return{focusing:t,id:c,isActive:a,handleFocus:()=>{setTimeout(()=>{o.value?o.value=!1:t.value=!0},50)},handleHeaderClick:()=>{n.disabled||(e==null||e.handleItemClick(n.name),t.value=!1,o.value=!0)},handleEnterClick:()=>{e==null||e.handleItemClick(n.name)}}},Qe=(n,{focusing:e,isActive:t,id:o})=>{const c=N("collapse"),a=b(()=>[c.b("item"),c.is("active",l(t)),c.is("disabled",n.disabled)]),s=b(()=>[c.be("item","header"),c.is("active",l(t)),{focusing:l(e)&&!n.disabled}]),d=b(()=>[c.be("item","arrow"),c.is("active",l(t))]),f=b(()=>c.be("item","wrap")),p=b(()=>c.be("item","content")),g=b(()=>c.b(`content-${l(o)}`)),w=b(()=>c.b(`head-${l(o)}`));return{arrowKls:d,headKls:s,rootKls:a,itemWrapperKls:f,itemContentKls:p,scopedContentId:g,scopedHeadId:w}},Je=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Ze=["id","aria-hidden","aria-labelledby"],Xe=y({name:"ElCollapseItem"}),et=y({...Xe,props:He,setup(n,{expose:e}){const t=n,{focusing:o,id:c,isActive:a,handleFocus:s,handleHeaderClick:d,handleEnterClick:f}=Ye(t),{arrowKls:p,headKls:g,rootKls:w,itemWrapperKls:G,itemContentKls:W,scopedContentId:L,scopedHeadId:U}=Qe(t,{focusing:o,isActive:a,id:c});return e({isActive:a}),(F,k)=>(r(),m("div",{class:h(l(w))},[i("button",{id:l(U),class:h(l(g)),"aria-expanded":l(a),"aria-controls":l(L),"aria-describedby":l(L),tabindex:F.disabled?-1:0,type:"button",onClick:k[0]||(k[0]=(...T)=>l(d)&&l(d)(...T)),onKeydown:k[1]||(k[1]=ye(ge((...T)=>l(f)&&l(f)(...T),["stop","prevent"]),["space","enter"])),onFocus:k[2]||(k[2]=(...T)=>l(s)&&l(s)(...T)),onBlur:k[3]||(k[3]=T=>o.value=!1)},[C(F.$slots,"title",{},()=>[v(x(F.title),1)]),u(l(X),{class:h(l(p))},{default:_(()=>[u(l(be))]),_:1},8,["class"])],42,Je),u(l(ke),null,{default:_(()=>[he(i("div",{id:l(L),role:"region",class:h(l(G)),"aria-hidden":!l(a),"aria-labelledby":l(U)},[i("div",{class:h(l(W))},[C(F.$slots,"default")],2)],10,Ze),[[ve,l(a)]])]),_:3})],2))}});var de=j(et,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const tt=A(Ue,{CollapseItem:de}),st=xe(de),nt=P({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:$e}}),ot={click:n=>n instanceof MouseEvent},at=["href"],lt=y({name:"ElLink"}),it=y({...lt,props:nt,emits:ot,setup(n,{emit:e}){const t=n,o=N("link"),c=b(()=>[o.b(),o.m(t.type),o.is("disabled",t.disabled),o.is("underline",t.underline&&!t.disabled)]);function a(s){t.disabled||e("click",s)}return(s,d)=>(r(),m("a",{class:h(l(c)),href:s.disabled||!s.href?void 0:s.href,onClick:a},[s.icon?(r(),$(l(X),{key:0},{default:_(()=>[(r(),$(R(s.icon)))]),_:1})):K("v-if",!0),s.$slots.default?(r(),m("span",{key:1,class:h(l(o).e("inner"))},[C(s.$slots,"default")],2)):K("v-if",!0),s.$slots.icon?C(s.$slots,"icon",{key:2}):K("v-if",!0)],10,at))}});var ct=j(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const rt=A(ct),ut=P({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:we,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),dt=y({name:"ElText"}),pt=y({...dt,props:ut,setup(n){const e=n,t=pe(),o=N("text"),c=b(()=>[o.b(),o.m(e.type),o.m(t.value),o.is("truncated",e.truncated),o.is("line-clamp",!Ce(e.lineClamp))]);return(a,s)=>(r(),$(R(a.tag),{class:h(l(c)),style:O({"-webkit-line-clamp":a.lineClamp})},{default:_(()=>[C(a.$slots,"default")]),_:3},8,["class","style"]))}});var mt=j(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const _t=A(mt);const ft={},bt={class:"pl-10"},yt=i("h1",{class:"text-5xl font-bold text-left"},[v(" Custom ChatGPT"),i("br"),i("span",{class:"text-blue-600"},"Website Assistants")],-1),gt=i("p",{class:"text-left text-slate-600 mt-5 text-xl"},[v(" Create and manage your ChatGPT Assistant. "),i("br"),v(" Answers your client questions on your website and your documents. ")],-1);function ht(n,e){const t=z,o=re,c=M,a=ce;return r(),$(a,{class:"h-[calc(100vh-60px)] items-center",id:"about"},{default:_(()=>[u(o,{span:12,xs:24,class:"grid justify-items-center"},{default:_(()=>[i("div",bt,[yt,gt,u(t,{class:"mt-5 text-lg p-6",type:"primary",size:"large",color:"#2563EB",onClick:e[0]||(e[0]=s=>("navigateTo"in n?n.navigateTo:l(q))("/app/signup"))},{default:_(()=>[v("Create your assistant now")]),_:1})])]),_:1}),u(o,{span:12,xs:24,class:"grid justify-items-center"},{default:_(()=>[u(c,{src:"/PortfolioWebsiteGPT/images/landing-discussion.png",fit:"contain"})]),_:1})]),_:1})}const vt=ee(ft,[["render",ht]]),xt={class:"grid grid-cols-6 gap-4"},$t={class:"bg-blue-500 justify-self-end h-fit p-2"},wt={class:"justify-self-start col-span-5"},Ct={class:"text-xl font-medium"},kt={class:"text-slate-500"},St=y({__name:"Feature",props:{icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}},setup(n){const e=n;return(t,o)=>{const c=ne;return r(),m("div",xt,[i("div",$t,[u(c,{name:e.icon,color:"white",size:"30"},null,8,["name"])]),i("div",wt,[i("h2",Ct,x(e.title),1),i("p",kt,x(e.description),1)])])}}}),Et={id:"features"},Pt=i("div",{class:"text-center mb-8"},[i("h1",{class:"text-4xl font-bold tracking-tight"}," The best way to answer questions on your website ")],-1),Nt={class:"grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-y-6"},jt=y({__name:"Features",setup(n){const e=[{icon:"mdi:clock-fast",title:"Quick setup",description:"It only takes a few clicks to setup your custom assistant and get started using it ! Add your website url, some documents if you have any and start chatting with it immediately !"},{icon:"ic:baseline-dashboard-customize",title:"Fully customizable",description:"Your assistant is completely customizable, from it's name and function to extremely specific answers it must know to some questions."},{icon:"simple-icons:openai",title:"Powered by ChatGPT",description:"ChatGPT is used as our engine to answer your user's questions. We rely on a proven cutting-edge solution to give the best results possible"},{icon:"ic:baseline-monitor",title:"Easy monitoring",description:"Your users usage can be easily monitored from our dashboard. Know exactly what is happening at all times !"}];return(t,o)=>{const c=St;return r(),m("div",Et,[Pt,i("div",Nt,[(r(),m(B,null,V(e,a=>u(c,{icon:a.icon,title:a.title,description:a.description,class:"bg-white justify-self-center"},null,8,["icon","title","description"])),64))])])}}});const Tt={class:"flex justify-center mt-5"},It=i("div",{class:"flex justify-center"},[i("span",{class:"text-xs text-center mt-4"}," Supported payment methods: ")],-1),Kt={class:"flex justify-center items-center"},At={__name:"StripePayment",props:{subscription:{type:Object,required:!0},is_active:{type:Boolean,required:!0}},setup(n){const e=n,t=te(),o=()=>{if(t.subscription.name==="Unknown"){q("/app/login");return}if(e.is_active){q("");return}if(e.subscription.link.length<=5){t.unsubscribe();return}q(`${e.subscription.link}?prefilled_email=${t.user.email}&client_reference_id=${t.user.id}`,{external:!0})};return(c,a)=>{const s=z,d=M;return r(),m("div",null,[i("div",Tt,[u(s,{class:"text-2xl w-full h-8 p-6",color:"#2563EB",disabled:n.is_active,onClick:o},{default:_(()=>[v(x(n.is_active?"Subscribed":"Subscribe Now"),1)]),_:1},8,["disabled"])]),It,i("div",Kt,[u(d,{src:"/PortfolioWebsiteGPT/images/payment_methods.png",class:"w-40 h-fit",fit:"fill"})])])}}};const qt={class:"text-3xl text-center font-bold mb-3 mt-5 capitalize"},Bt={class:"text-center items-center flex justify-center mb-5"},Vt=i("span",{class:"text-3xl"},"$ ",-1),zt={class:"font-bold text-5xl m-2"},Ft=i("span",{class:"text-2xl text-slate-500"},"/month",-1),Ot={class:"slate-background p-5"},Rt={class:"grid grid-cols-[60px_auto] items-center"},Gt={key:2,class:"font-bold ml-1"},Wt={key:5,class:"text-lg text-slate-500 capitalize"},Lt={key:6,class:"text-lg text-slate-500"},Dt={__name:"Card",props:{subscription:{type:Object,required:!0},is_active:{type:Boolean,required:!0}},setup(n){const e=n,t={"AI messages per month":"nb_message","Specific Questions and Answers":"nb_qa","Website URLs":"nb_url",Documents:"nb_doc","PDF documents":"has_pdf","CSV documents":"has_csv","Mb maximum per document":"max_doc_size","AI conversation memory":"memory","Website Refresh":"refresh_frequency"};return(o,c)=>{const a=ne,s=At,d=je;return r(),$(d,{class:h(["box-card mt-5 no-padding-card inline-block stripe-card",{"border-4":n.is_active,"border-blue-800":n.is_active}])},{default:_(()=>[i("h1",qt,x(n.subscription.name),1),i("h1",Bt,[Vt,i("span",zt,x(n.subscription.price.toFixed(2)),1),Ft]),i("div",Ot,[(r(),m(B,null,V(t,(f,p)=>i("div",Rt,[f==="memory"?(r(),$(a,{key:0,name:"ic:outline-close",color:"red",size:"25"})):f==="refresh_frequency"?(r(),$(a,{key:1,name:"ic:round-check",color:"green",size:"25"})):Number.isInteger(n.subscription[f])?(r(),m("span",Gt,x(n.subscription[f]),1)):n.subscription[f]?(r(),$(a,{key:3,name:"ic:round-check",color:"green",size:"25"})):(r(),$(a,{key:4,name:"ic:outline-close",color:"red",size:"25"})),f==="refresh_frequency"?(r(),m("span",Wt,x(n.subscription[f])+" "+x(p),1)):(r(),m("span",Lt,x(p),1))])),64)),u(s,{subscription:e.subscription,is_active:e.is_active},null,8,["subscription","is_active"])])]),_:1},8,["class"])}}},Mt={class:"gap-5 flex flex-wrap"},Ut=i("div",{class:"mt-5 special-plan-contact"}," Need a special plan ? Send us an email at contact-websitegpt@gmail.com ",-1),Ht={__name:"Cards",setup(n){const e=te();return e.getSubscription(),e.getSubscriptions(),(t,o)=>{const c=Dt;return r(),m("div",null,[i("div",Mt,[(r(!0),m(B,null,V(l(e).subscriptions,a=>{var s;return r(),$(c,{subscription:a,is_active:a.name.toLowerCase()===((s=l(e).subscription.name)==null?void 0:s.toLowerCase())},null,8,["subscription","is_active"])}),256))]),Ut])}}};const Yt={class:"flex justify-center landing-premium",id:"premium"},Qt={class:"bg-blue-600 p-10 sm:ml-10 sm:mr-10 rounded-lg shadow-md max-w-7xl"},Jt={class:"pl-10 text-white"},Zt=i("h1",{class:"text-3xl font-bold text-left"},"WebsiteGPT Pricing",-1),Xt=i("p",{class:"text-left text-slate-200 mt-5 text-xl"},[v(" Create and manage your ChatGPT Assistant. "),i("br"),v(" Answers your client questions on your website and your documents. ")],-1),es=y({__name:"Premium",setup(n){const e=E(!0),t=E([]),o=()=>{t.value=t.value[0]=="1"?[]:["1"],e.value=!e.value};return(c,a)=>{const s=z,d=re,f=M,p=ce,g=Ht,w=st,G=tt;return r(),m("div",Yt,[i("div",Qt,[u(p,{class:"items-center",gutter:20},{default:_(()=>[u(d,{span:12,xs:24,class:"grid justify-items-center mb-5 mt-5"},{default:_(()=>[i("div",Jt,[Zt,Xt,u(s,{class:"mt-5 text-lg p-5",size:"large",type:"primary",plain:"",onClick:o},{default:_(()=>[v("Find out more")]),_:1})])]),_:1}),u(d,{span:12,xs:24,class:"grid justify-items-center max-h-48 overflow-clip"},{default:_(()=>[u(f,{src:"/PortfolioWebsiteGPT/images/landing-assistant.png",fit:"fill"})]),_:1})]),_:1}),K("",!0),u(G,{modelValue:l(t),"onUpdate:modelValue":a[0]||(a[0]=W=>se(t)?t.value=W:null),class:"bg-blue-500 border-0"},{default:_(()=>[u(w,{name:"1",class:"bg-blue-500"},{default:_(()=>[u(g)]),_:1})]),_:1},8,["modelValue"])])])}}});const ts={},ss={class:"grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-6"},ns=i("h1",{class:"text-3xl font-bold text-left"},[v(" Ready to dive in?"),i("br"),i("span",{class:"text-blue-600"},"Create your assistant today.")],-1);function os(n,e){const t=z;return r(),m("div",ss,[ns,u(t,{class:"mt-5 text-lg p-6",type:"primary",size:"large",color:"#2563EB",onClick:e[0]||(e[0]=o=>("navigateTo"in n?n.navigateTo:l(q))("/app/signup"))},{default:_(()=>[v("Get started")]),_:1})])}const as=ee(ts,[["render",os]]);const ls={class:"sm:gap-x-28 gap-x-12 gap-y-12 flex flex-wrap justify-center"},is={class:"text-semibold uppercase text-slate-400"},cs=i("h1",{class:"text-semibold uppercase text-slate-400"}," Sign up to the Newsletter ",-1),rs=i("br",null,null,-1),us={class:"flex sm:flex-nowrap flex-wrap mt-2"},ds={__name:"Footer",setup(n){const e=E(""),t=[{title:"Product",links:[{text:"About",url:"#about"},{text:"Features",url:"#features"},{text:"Pricing",url:"#premium"}]},{title:"Documentation",links:[{text:"Get Started",url:"documentation/get-started/quickstart"},{text:"Assistant",url:"documentation/assistant/overview"}]}],o=()=>{$fetch("https://api.headlessforms.cloud/api/v1/form/t8QbsCVx9i",{method:"post",body:{type:"newsletter subscription",app:"websitegpt",email:e.value}}).then(()=>{Y({message:"You have successfully subscribed to the newsletter !",type:"success"})}).catch(()=>{Y.error({message:"Newsletter Subscription failed. An unexpected error happened. Please try again later"})})};return(c,a)=>{const s=rt,d=_t,f=me,p=z;return r(),m("div",ls,[(r(),m(B,null,V(t,g=>i("div",null,[i("h1",is,x(g.title),1),(r(!0),m(B,null,V(g.links,w=>(r(),m("div",null,[u(s,{type:"info",class:"ml-1 capitalize mt-2",underline:!1,href:w.url},{default:_(()=>[v(x(w.text),1)]),_:2},1032,["href"])]))),256))])),64)),i("div",null,[cs,u(d,{type:"info",class:"mt-2"},{default:_(()=>[v("Stay in tune with WebsiteGPT's latest updates")]),_:1}),rs,i("div",us,[u(f,{modelValue:l(e),"onUpdate:modelValue":a[0]||(a[0]=g=>se(e)?e.value=g:null),placeholder:"Email address",class:"w-38"},null,8,["modelValue"]),u(p,{color:"#2563EB",onClick:o},{default:_(()=>[v("SUBSCRIBE")]),_:1})])])])}}};const ps={class:"ml-3 mr-3"},vs={__name:"index",setup(n){return(e,t)=>{const o=vt,c=jt,a=es,s=as,d=ds;return r(),m("div",null,[i("div",null,[u(o),i("div",ps,[u(c),u(a,{class:"mt-24"}),u(s,{class:"mt-24"}),u(d,{class:"mt-14 pt-10 mb-10 border-t-2"})])])])}}};export{vs as default};

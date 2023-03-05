var ae=Object.defineProperty,re=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var R=Math.pow,U=(i,l,t)=>l in i?ae(i,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[l]=t,V=(i,l)=>{for(var t in l||(l={}))ne.call(l,t)&&U(i,t,l[t]);if(K)for(var t of K(l))ie.call(l,t)&&U(i,t,l[t]);return i},q=(i,l)=>re(i,se(l));import{u as W,b as ce}from"./request.29c9df35.js";import{d as B,B as ue,r as v,c as w,D as ve,q as F,a as x,b as $,e as ee,J as fe,m as D,g as E,u as m,n as X,K as de,T as me,f as te,j as I,F as pe,w as G,P as J,p as he,M as be,o as ye,aa as ge,i as we,l as _e,k as Se}from"./index.f20a2340.js";import{b as Y,a as le,t as ze,_ as j,Q as ke,d as xe,a8 as k,M as Q,ab as Ee,w as He}from"./base.f9e60852.js";const g=4,Te={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Ce=({move:i,size:l,bar:t})=>({[t.size]:l,transform:`translate${t.axis}(${i}%)`}),oe=Symbol("scrollbarContextKey"),Ne=Y({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Pe="Thumb",Re=B({__name:"thumb",props:Ne,setup(i){const l=i,t=ue(oe),r=le("scrollbar");t||ze(Pe,"can not inject scrollbar context");const u=v(),f=v(),n=v({}),d=v(!1);let a=!1,h=!1,b=ke?document.onselectstart:null;const o=w(()=>Te[l.vertical?"vertical":"horizontal"]),_=w(()=>Ce({size:l.size,move:l.move,bar:o.value})),S=w(()=>R(u.value[o.value.offset],2)/t.wrapElement[o.value.scrollSize]/l.ratio/f.value[o.value.offset]),H=s=>{var e;if(s.stopPropagation(),s.ctrlKey||[1,2].includes(s.button))return;(e=window.getSelection())==null||e.removeAllRanges(),M(s);const c=s.currentTarget;!c||(n.value[o.value.axis]=c[o.value.offset]-(s[o.value.client]-c.getBoundingClientRect()[o.value.direction]))},L=s=>{if(!f.value||!u.value||!t.wrapElement)return;const e=Math.abs(s.target.getBoundingClientRect()[o.value.direction]-s[o.value.client]),c=f.value[o.value.offset]/2,p=(e-c)*100*S.value/u.value[o.value.offset];t.wrapElement[o.value.scroll]=p*t.wrapElement[o.value.scrollSize]/100},M=s=>{s.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",T),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},T=s=>{if(!u.value||!f.value||a===!1)return;const e=n.value[o.value.axis];if(!e)return;const c=(u.value.getBoundingClientRect()[o.value.direction]-s[o.value.client])*-1,p=f.value[o.value.offset]-e,z=(c-p)*100*S.value/u.value[o.value.offset];t.wrapElement[o.value.scroll]=z*t.wrapElement[o.value.scrollSize]/100},y=()=>{a=!1,n.value[o.value.axis]=0,document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",y),C(),h&&(d.value=!1)},O=()=>{h=!1,d.value=!!l.size},A=()=>{h=!0,d.value=a};ve(()=>{C(),document.removeEventListener("mouseup",y)});const C=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return W(F(t,"scrollbarElement"),"mousemove",O),W(F(t,"scrollbarElement"),"mouseleave",A),(s,e)=>(x(),$(me,{name:m(r).b("fade"),persisted:""},{default:ee(()=>[fe(D("div",{ref_key:"instance",ref:u,class:E([m(r).e("bar"),m(r).is(m(o).key)]),onMousedown:L},[D("div",{ref_key:"thumb",ref:f,class:E(m(r).e("thumb")),style:X(m(_)),onMousedown:H},null,38)],34),[[de,s.always||d.value]])]),_:1},8,["name"]))}});var Z=j(Re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Be=Y({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Le=B({__name:"bar",props:Be,setup(i,{expose:l}){const t=i,r=v(0),u=v(0);return l({handleScroll:n=>{if(n){const d=n.offsetHeight-g,a=n.offsetWidth-g;u.value=n.scrollTop*100/d*t.ratioY,r.value=n.scrollLeft*100/a*t.ratioX}}}),(n,d)=>(x(),te(pe,null,[I(Z,{move:r.value,ratio:n.ratioX,size:n.width,always:n.always},null,8,["move","ratio","size","always"]),I(Z,{move:u.value,ratio:n.ratioY,size:n.height,vertical:"",always:n.always},null,8,["move","ratio","size","always"])],64))}});var Me=j(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Oe=Y({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:xe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ae={scroll:({scrollTop:i,scrollLeft:l})=>[i,l].every(k)},We="ElScrollbar",$e=B({name:We}),De=B(q(V({},$e),{props:Oe,emits:Ae,setup(i,{expose:l,emit:t}){const r=i,u=le("scrollbar");let f,n;const d=v(),a=v(),h=v(),b=v("0"),o=v("0"),_=v(),S=v(1),H=v(1),L=w(()=>{const e={};return r.height&&(e.height=Q(r.height)),r.maxHeight&&(e.maxHeight=Q(r.maxHeight)),[r.wrapStyle,e]}),M=w(()=>[r.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!r.native}]),T=w(()=>[u.e("view"),r.viewClass]),y=()=>{var e;a.value&&((e=_.value)==null||e.handleScroll(a.value),t("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function O(e,c){Ee(e)?a.value.scrollTo(e):k(e)&&k(c)&&a.value.scrollTo(e,c)}const A=e=>{!k(e)||(a.value.scrollTop=e)},C=e=>{!k(e)||(a.value.scrollLeft=e)},s=()=>{if(!a.value)return;const e=a.value.offsetHeight-g,c=a.value.offsetWidth-g,p=R(e,2)/a.value.scrollHeight,z=R(c,2)/a.value.scrollWidth,N=Math.max(p,r.minSize),P=Math.max(z,r.minSize);S.value=p/(e-p)/(N/(e-N)),H.value=z/(c-z)/(P/(c-P)),o.value=N+g<e?`${N}px`:"",b.value=P+g<c?`${P}px`:""};return G(()=>r.noresize,e=>{e?(f==null||f(),n==null||n()):({stop:f}=ce(h,s),n=W("resize",s))},{immediate:!0}),G(()=>[r.maxHeight,r.height],()=>{r.native||J(()=>{var e;s(),a.value&&((e=_.value)==null||e.handleScroll(a.value))})}),he(oe,be({scrollbarElement:d,wrapElement:a})),ye(()=>{r.native||J(()=>{s()})}),ge(()=>s()),l({wrapRef:a,update:s,scrollTo:O,setScrollTop:A,setScrollLeft:C,handleScroll:y}),(e,c)=>(x(),te("div",{ref_key:"scrollbarRef",ref:d,class:E(m(u).b())},[D("div",{ref_key:"wrapRef",ref:a,class:E(m(M)),style:X(m(L)),onScroll:y},[(x(),$(_e(e.tag),{ref_key:"resizeRef",ref:h,class:E(m(T)),style:X(e.viewStyle)},{default:ee(()=>[we(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?Se("v-if",!0):(x(),$(Me,{key:0,ref_key:"barRef",ref:_,height:o.value,width:b.value,always:e.always,"ratio-x":H.value,"ratio-y":S.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}));var Xe=j(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Ve=He(Xe);export{Ve as E};

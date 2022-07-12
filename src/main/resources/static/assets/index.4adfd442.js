import{P as L,t as B,B as I,a0 as b,a2 as C,$ as g,a1 as h,b as X,d as Y,u as G}from"./base.cf6a8745.js";import{o as U,am as z,H as W,P as K,w as $,a4 as V,N as p,d as j,h as q,g as w,al as J}from"./index.b54e4b70.js";import{a as Q}from"./scroll.70de8d63.js";var c=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(c||{});const se=(e,o,n)=>{let s={offsetX:0,offsetY:0};const d=i=>{const r=i.clientX,A=i.clientY,{offsetX:l,offsetY:m}=s,a=e.value.getBoundingClientRect(),f=a.left,E=a.top,N=a.width,O=a.height,x=document.documentElement.clientWidth,D=document.documentElement.clientHeight,R=-f+l,k=-E+m,H=x-f-N+l,_=D-E-O+m,v=T=>{const S=Math.min(Math.max(l+T.clientX-r,R),H),M=Math.min(Math.max(m+T.clientY-A,k),_);s={offsetX:S,offsetY:M},e.value.style.transform=`translate(${L(S)}, ${L(M)})`},y=()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",y)},u=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",d)},t=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",d)};U(()=>{z(()=>{n.value?u():t()})}),W(()=>{t()})},de=e=>{if(K(e)||B("[useLockscreen]","You need to pass a ref param to this function"),!I||b(document.body,"el-popup-parent--hidden"))return;let o=0,n=!1,s="0",d=0;const u=()=>{h(document.body,"el-popup-parent--hidden"),n&&(document.body.style.paddingRight=s)};$(e,t=>{if(!t){u();return}n=!b(document.body,"el-popup-parent--hidden"),n&&(s=document.body.style.paddingRight,d=Number.parseInt(C(document.body,"paddingRight"),10)),o=Q();const i=document.documentElement.clientHeight<document.body.scrollHeight,r=C(document.body,"overflowY");o>0&&(i||r==="scroll")&&n&&(document.body.style.paddingRight=`${d+o}px`),g(document.body,"el-popup-parent--hidden")}),V(()=>u())},Z=e=>{if(!e)return{onClick:p,onMousedown:p,onMouseup:p};let o=!1,n=!1;return{onClick:t=>{o&&n&&e(t),o=n=!1},onMousedown:t=>{o=t.target===t.currentTarget},onMouseup:t=>{n=t.target===t.currentTarget}}},P=X({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:Y([String,Array,Object])},zIndex:{type:Y([String,Number])}}),F={click:e=>e instanceof MouseEvent};var ee=j({name:"ElOverlay",props:P,emits:F,setup(e,{slots:o,emit:n}){const s=G("overlay"),d=r=>{n("click",r)},{onClick:u,onMousedown:t,onMouseup:i}=Z(e.customMaskEvent?void 0:d);return()=>e.mask?q("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:t,onMouseup:i},[w(o,"default")],c.STYLE|c.CLASS|c.PROPS,["onClick","onMouseup","onMousedown"]):J("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[w(o,"default")])}});const ue=ee;export{ue as E,Z as a,de as b,se as u};

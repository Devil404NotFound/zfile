var g=(m,_,e)=>new Promise((c,p)=>{var S=i=>{try{d(e.next(i))}catch(s){p(s)}},l=i=>{try{d(e.throw(i))}catch(s){p(s)}},d=i=>i.done?c(i.value):Promise.resolve(i.value).then(S,l);d((e=e.apply(m,_)).next())});import{as as w,X as z,_ as v,a as E,f as C,u as o,J as M,b as A,e as t,L as n,j as u,k as R,Q as D,R as L,m as V}from"./index.f20a2340.js";import{A as F}from"./base.f9e60852.js";/* empty css                */import{Z as P,a as J}from"./ZFormItem.91aded87.js";/* empty css               */import"./tooltip.f118fcb0.js";import{E as j}from"./popper.819708f8.js";/* empty css              */import{E as B}from"./input-number.f57e8352.js";import{E as N}from"./switch.9f84dbfb.js";import{E as Z}from"./radio.bdc7b396.js";import{l as q,b as H}from"./admin-setting.c62e8d8e.js";import{c as x}from"./common.81138c7e.js";import{E as Q}from"./request.29c9df35.js";import{b as U}from"./route-block.9b0645f8.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import{r as G}from"./BadgeCheckIcon.9b23bce0.js";import{E as K}from"./index.2085544e.js";import{v as W}from"./directive.eb3ba7ee.js";import"./index.5cf4e3bb.js";import"./focus-trap.7aeb3cb3.js";import"./event.776e7e11.js";import"./index.4a39cc77.js";import"./validator.02bde218.js";function Y(){const{data:m,loading:_,reload:e}=w(q,{formatResult:l=>{let d=l.data;return d.customVideoSuffix||(d.customVideoSuffix=x.constant.fileTypeMap.video.join(",")),d.customImageSuffix||(d.customImageSuffix=x.constant.fileTypeMap.image.join(",")),d.customAudioSuffix||(d.customAudioSuffix=x.constant.fileTypeMap.audio.join(",")),d.customTextSuffix||(d.customTextSuffix=x.constant.fileTypeMap.text.join(",")),d.announcement||(d.announcement=""),d}}),{loading:c,run:p}=w(H,{manual:!0,onSuccess(){Q({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:m,dataLoading:_,reload:e,saveData:()=>{p(m.value)},saveLoading:c}}const b=m=>(D("data-v-41d2aae0"),m=m(),L(),m),$=b(()=>V("div",null,[n("OnlyOffice \u670D\u52A1\u5730\u5740\uFF0C\u9ED8\u8BA4\u7684\u516C\u5171\u670D\u52A1\u4E0D\u4FDD\u8BC1\u7A33\u5B9A\u6027\uFF0C\u63A8\u8350\u81EA\u884C\u90E8\u7F72 OnlyOffice \u670D\u52A1. \u90E8\u7F72\u6559\u7A0B\uFF1A"),V("a",{class:"link",href:"https://docs.zfile.vip/advanced#only-office",target:"_blank"},"https://docs.zfile.vip/advanced#only-office")],-1)),h=b(()=>V("div",null,"\u63D0\u793A\uFF1A\u8FDB\u884C\u9884\u89C8\u7684\u6587\u4EF6\u9700 OnlyOffice \u670D\u52A1\u5668\u53EF\u8BBF\u95EE\uFF0C\u5982\u60A8\u7684 OnlyOffice \u5728\u516C\u7F51\uFF0C\u8981\u9884\u89C8\u7684\u6587\u4EF6\u5728\u5185\u7F51\uFF0C\u5219\u65E0\u6CD5\u6B63\u5E38\u9884\u89C8\u3002",-1)),ee=b(()=>V("div",null,"\u63D0\u793A\uFF1A\u6839\u636E\u6D4F\u89C8\u5668\u5B89\u5168\u89C4\u8303\uFF0C\u5982\u60A8\u7684 ZFile \u662F https \u534F\u8BAE\u7684\uFF0COnlyOffice \u670D\u52A1\u4E5F\u5FC5\u987B\u662F https \u534F\u8BAE\u7684\uFF0C\u5426\u5219\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u3002",-1)),le=b(()=>V("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),oe=b(()=>V("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),O={__name:"view-setting",setup(m){const _=z(()=>new Promise((S,l)=>{(function(){return g(this,null,function*(){try{const d=yield v(()=>import("./base-editor.0dd06070.js").then(function(f){return f.b}),["assets/base-editor.0dd06070.js","assets/index.f20a2340.js","assets/index.f476a66f.css","assets/vue.runtime.esm-bundler.2b687cd0.js"]);yield v(()=>Promise.resolve({}),["assets/base-editor.079785da.css"]),yield v(()=>Promise.resolve({}),["assets/vuepress.95aa9197.css"]);const i=yield v(()=>import("./vuepress.c7ff875c.js").then(function(f){return f.v}),["assets/vuepress.c7ff875c.js","assets/index.f20a2340.js","assets/index.f476a66f.css"]),s=yield v(()=>import("./prism.3c7dbef4.js").then(function(f){return f.p}),["assets/prism.3c7dbef4.js","assets/index.f20a2340.js","assets/index.f476a66f.css"]);d.use(i,{Prism:s}),S(d)}catch(d){l(d)}})})()})),{data:e,saveData:c,saveLoading:p}=Y();return(S,l)=>{const d=Z,i=P,s=N,f=B,r=K,y=j,k=F,T=J,I=W;return E(),C("div",null,[o(e)?M((E(),A(T,{key:0,model:o(e),"element-loading-text":"\u4FDD\u5B58\u4E2D..."},{"form-title":t(()=>[n(" \u663E\u793A\u4FE1\u606F ")]),"form-sub-title":t(()=>[n(" \u6B64\u9875\u9762\u663E\u793A\u7F51\u7AD9\u524D\u53F0\u7684\u663E\u793A\u76F8\u5173\u7684\u4FE1\u606F ")]),footer:t(()=>[u(k,{type:"primary",size:"default",icon:o(G),onClick:o(c)},{default:t(()=>[n("\u4FDD\u5B58\u8BBE\u7F6E")]),_:1},8,["icon","onClick"])]),default:t(()=>[u(i,{label:"\u9875\u9762\u5E03\u5C40"},{default:t(()=>[u(d,{modelValue:o(e).layout,"onUpdate:modelValue":l[0]||(l[0]=a=>o(e).layout=a),label:"full"},{default:t(()=>[n("\u5168\u5C4F")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).layout,"onUpdate:modelValue":l[1]||(l[1]=a=>o(e).layout=a),label:"center"},{default:t(()=>[n("\u5C45\u4E2D")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).layout,"onUpdate:modelValue":l[2]||(l[2]=a=>o(e).layout=a),label:"card"},{default:t(()=>[n("\u5361\u7247")]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90"},{tips:t(()=>[n(" \u6839\u76EE\u5F55\u662F\u5426\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90, \u5982\u679C\u4E3A true, \u5219\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90\u5217\u8868, \u5982\u679C\u4E3A false, \u5219\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u7B2C\u4E00\u4E2A\u5B58\u50A8\u6E90. ")]),default:t(()=>[u(s,{modelValue:o(e).rootShowStorage,"onUpdate:modelValue":l[3]||(l[3]=a=>o(e).rootShowStorage=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u6587\u4EF6\u64CD\u4F5C\u4E60\u60EF"},{tips:t(()=>[n(" \u63A7\u5236\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u70B9\u51FB\u4E60\u60EF, \u5355\u51FB/\u53CC\u51FB\u6253\u5F00\u6587\u4EF6\u5939\u6216\u9884\u89C8\u6587\u4EF6 ")]),default:t(()=>[u(d,{modelValue:o(e).fileClickMode,"onUpdate:modelValue":l[4]||(l[4]=a=>o(e).fileClickMode=a),label:"click"},{default:t(()=>[n("\u5355\u51FB\u8FDB\u5165")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).fileClickMode,"onUpdate:modelValue":l[5]||(l[5]=a=>o(e).fileClickMode=a),label:"dbclick"},{default:t(()=>[n("\u53CC\u51FB\u8FDB\u5165")]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u9ED8\u8BA4\u6700\u5927\u663E\u793A\u6587\u4EF6\u6570"},{tips:t(()=>[n(" \u9ED8\u8BA4\u6700\u5927\u663E\u793A\u6587\u4EF6\u6570, \u7528\u4E8E\u63A7\u5236\u6587\u4EF6\u5939\u4E2D\u6587\u4EF6\u7684\u663E\u793A\u6570\u91CF\uFF0C\u9632\u6B62\u6587\u4EF6\u8FC7\u591A\u5BFC\u81F4\u9875\u9762\u5361\u987F ")]),default:t(()=>[u(f,{modelValue:o(e).maxShowSize,"onUpdate:modelValue":l[6]||(l[6]=a=>o(e).maxShowSize=a),min:1},null,8,["modelValue"])]),_:1}),u(i,{label:"\u6BCF\u6B21\u52A0\u8F7D\u66F4\u591A\u6587\u4EF6\u6570"},{tips:t(()=>[n(" \u5F53\u60F3\u663E\u793A\u66F4\u591A\u6587\u4EF6\u65F6\uFF0C\u6BCF\u6B21\u989D\u5916\u663E\u793A\u7684\u6587\u4EF6\u6570 ")]),default:t(()=>[u(f,{modelValue:o(e).loadMoreSize,"onUpdate:modelValue":l[7]||(l[7]=a=>o(e).loadMoreSize=a),min:1},null,8,["modelValue"])]),_:1}),u(i,{label:"\u9ED8\u8BA4\u6392\u5E8F\u5B57\u6BB5"},{tips:t(()=>[n(" \u9ED8\u8BA4\u6392\u5E8F\u65B9\u5F0F, \u7528\u4E8E\u63A7\u5236\u6587\u4EF6\u5939\u4E2D\u6587\u4EF6\u7684\u663E\u793A\u987A\u5E8F ")]),default:t(()=>[u(d,{modelValue:o(e).defaultSortField,"onUpdate:modelValue":l[8]||(l[8]=a=>o(e).defaultSortField=a),label:"name"},{default:t(()=>[n("\u6587\u4EF6\u540D")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).defaultSortField,"onUpdate:modelValue":l[9]||(l[9]=a=>o(e).defaultSortField=a),label:"size"},{default:t(()=>[n("\u6587\u4EF6\u5927\u5C0F")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).defaultSortField,"onUpdate:modelValue":l[10]||(l[10]=a=>o(e).defaultSortField=a),label:"time"},{default:t(()=>[n("\u4FEE\u6539\u65F6\u95F4")]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u9ED8\u8BA4\u6392\u5E8F\u65B9\u5F0F"},{tips:t(()=>[n(" \u9ED8\u8BA4\u6392\u5E8F\u65B9\u5F0F, \u7528\u4E8E\u63A7\u5236\u6587\u4EF6\u5939\u4E2D\u6587\u4EF6\u7684\u663E\u793A\u987A\u5E8F ")]),default:t(()=>[u(d,{modelValue:o(e).defaultSortOrder,"onUpdate:modelValue":l[11]||(l[11]=a=>o(e).defaultSortOrder=a),label:"asc"},{default:t(()=>[n("\u5347\u5E8F")]),_:1},8,["modelValue"]),u(d,{modelValue:o(e).defaultSortOrder,"onUpdate:modelValue":l[12]||(l[12]=a=>o(e).defaultSortOrder=a),label:"desc"},{default:t(()=>[n("\u964D\u5E8F")]),_:1},8,["modelValue"])]),_:1}),u(i,{label:"\u89C6\u9891\u6587\u4EF6\u540E\u7F00"},{tips:t(()=>[n(" \u81EA\u5B9A\u4E49\u8BC6\u522B\u4E3A\u89C6\u9891\u683C\u5F0F\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u5206\u5F00\uFF0C\u5982 'mp4,avi,mkv', \u5728\u6B64\u5217\u8868\u4E2D\u7684\u5C06\u8C03\u7528\u64AD\u653E\u5668\u6253\u5F00\uFF08\u80FD\u5426\u64AD\u653E\u8981\u53D6\u51B3\u4E8E\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E00\u822C\u53EA\u652F\u6301\u5C01\u88C5\u683C\u5F0F\u4E3A h.264 (mp4) \u7684\u7F16\u7801\u683C\u5F0F\uFF09 ")]),default:t(()=>[u(r,{modelValue:o(e).customVideoSuffix,"onUpdate:modelValue":l[13]||(l[13]=a=>o(e).customVideoSuffix=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u56FE\u50CF\u6587\u4EF6\u540E\u7F00"},{default:t(()=>[u(r,{modelValue:o(e).customImageSuffix,"onUpdate:modelValue":l[14]||(l[14]=a=>o(e).customImageSuffix=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u97F3\u9891\u6587\u4EF6\u540E\u7F00"},{default:t(()=>[u(r,{modelValue:o(e).customAudioSuffix,"onUpdate:modelValue":l[15]||(l[15]=a=>o(e).customAudioSuffix=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u6587\u672C\u6587\u4EF6\u540E\u7F00"},{default:t(()=>[u(r,{modelValue:o(e).customTextSuffix,"onUpdate:modelValue":l[16]||(l[16]=a=>o(e).customTextSuffix=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"OnlyOffice \u670D\u52A1\u5730\u5740"},{tips:t(()=>[$,h,ee]),default:t(()=>[u(r,{modelValue:o(e).onlyOfficeUrl,"onUpdate:modelValue":l[17]||(l[17]=a=>o(e).onlyOfficeUrl=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u663E\u793A\u6587\u6863\u533A"},{default:t(()=>[u(s,{modelValue:o(e).showDocument,"onUpdate:modelValue":l[18]||(l[18]=a=>o(e).showDocument=a)},null,8,["modelValue"]),u(y,{placement:"right"},{content:t(()=>[n(" \u5728\u6587\u4EF6\u5217\u8868\u4E0B\uFF0C\u663E\u793A\u5F53\u524D\u6587\u4EF6\u5939\u7684\u76EE\u5F55\u6587\u6863 ")]),default:t(()=>[le]),_:1})]),_:1}),u(i,{label:"\u663E\u793A\u516C\u544A"},{default:t(()=>[u(s,{modelValue:o(e).showAnnouncement,"onUpdate:modelValue":l[19]||(l[19]=a=>o(e).showAnnouncement=a)},null,8,["modelValue"]),u(y,{placement:"right"},{content:t(()=>[n(" \u7F51\u7AD9\u9876\u90E8\uFF0C\u663E\u793A\u516C\u544A\u5185\u5BB9\uFF0C\u652F\u6301 HTML \u8BED\u6CD5 ")]),default:t(()=>[oe]),_:1})]),_:1}),u(i,{label:"\u516C\u544A\u5185\u5BB9"},{tips:t(()=>[n(" \u652F\u6301 Markdown \u8BED\u6CD5, \u5DE6\u53F3\u5206\u680F, \u6240\u89C1\u5373\u6240\u5F97, \u53EF\u4EE5\u4F7F\u7528 HTML \u8BED\u6CD5 ")]),default:t(()=>[u(o(_),{modelValue:o(e).announcement,"onUpdate:modelValue":l[20]||(l[20]=a=>o(e).announcement=a),height:"400px"},null,8,["modelValue"])]),_:1}),u(i,{label:"\u81EA\u5B9A\u4E49 CSS"},{tips:t(()=>[n(" \u81EA\u5B9A\u4E49 CSS \u5185\u5BB9, \u65E0\u987B\u5199 <style></style> \u6807\u7B7E ")]),default:t(()=>[u(r,{type:"textarea",autosize:{minRows:3},placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 CSS \u5185\u5BB9",modelValue:o(e).customCss,"onUpdate:modelValue":l[21]||(l[21]=a=>o(e).customCss=a)},null,8,["modelValue"])]),_:1}),u(i,{label:"\u81EA\u5B9A\u4E49 JS"},{tips:t(()=>[n(" \u81EA\u5B9A\u4E49 JS \u811A\u672C, <script><\/script> \u53EF\u5199\u53EF\u4E0D\u5199\uFF0C\u4F1A\u81EA\u52A8\u517C\u5BB9. ")]),default:t(()=>[u(r,{type:"textarea",autosize:{minRows:3},placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 JS \u5185\u5BB9",modelValue:o(e).customJs,"onUpdate:modelValue":l[22]||(l[22]=a=>o(e).customJs=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[I,o(p)]]):R("",!0)])}}};typeof U=="function"&&U(O);var Te=X(O,[["__scopeId","data-v-41d2aae0"]]);export{Te as default};

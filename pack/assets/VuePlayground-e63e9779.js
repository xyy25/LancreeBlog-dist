import{r as m,v as _,C as f,a as u}from"./app-6e2c727f.js";import{defineComponent as g,ref as y,shallowRef as r,computed as R,onMounted as w,h as t}from"vue";import"katex";import"vue-router";import"@vicons/carbon";const S=e=>JSON.parse(decodeURIComponent(e));var E=g({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const s=m(),i=y(!0),a=r(),o=r(),n=r(),l=R(()=>_({},s,S(e.settings))),d=async()=>{const[{ReplStore:p,Repl:v},{default:c}]=await Promise.all([u(()=>import("./vue-repl-bdae8d08.js"),["assets/vue-repl-bdae8d08.js","assets/app-6e2c727f.js","assets/utils-a5e1dbae-143be013.js"]),u(()=>import("./codemirror-editor-f07f039d.js"),["assets/codemirror-editor-f07f039d.js","assets/utils-a5e1dbae-143be013.js"])]);a.value=v,n.value=c,o.value=new p({serializedState:decodeURIComponent(e.files)}),l.value.vueVersion&&await o.value.setVueVersion(l.value.vueVersion)};return w(async()=>{await d(),i.value=!1}),()=>[t("div",{class:"vue-playground-wrapper"},[e.title?t("div",{class:"header"},decodeURIComponent(e.title)):null,t("div",{class:"repl-container"},[i.value?t(f,{class:"preview-loading",height:192}):null,a.value?t(a.value,{editor:n.value,store:o.value,autoResize:!0,...l.value,layout:"horizontal"}):null])])]}});export{E as default};

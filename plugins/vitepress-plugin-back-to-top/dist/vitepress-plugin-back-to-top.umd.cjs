(function(e,c){typeof exports=="object"&&typeof module<"u"?module.exports=c(require("vue")):typeof define=="function"&&define.amd?define(["vue"],c):(e=typeof globalThis<"u"?globalThis:e||self,e.VitepressPluginBackToTop=c(e.Vue))})(this,function(e){"use strict";const p=[(o=>(e.pushScopeId("data-v-09295527"),o=o(),e.popScopeId(),o))(()=>e.createElementVNode("svg",{class:"icon-top",viewBox:"0 0 24 4824",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor","stroke-width":"2","stroke-linecap":"butt","stroke-linejoin":"miter"},[e.createElementVNode("path",{d:"M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13m8 9l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"})],-1))],a=e.defineComponent({__name:"back-to-top",props:{threshold:{default:300}},setup(o){const n=o,t=e.ref(0),s=e.computed(()=>t.value>n.threshold);e.onMounted(()=>{t.value=r(),window.addEventListener("scroll",f(()=>{t.value=r()},100))});function r(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function _(){window.scrollTo({top:0,behavior:"smooth"}),t.value=0}function f(d,l=100){let i;return(...h)=>{clearTimeout(i),i=setTimeout(()=>{d.apply(null,h)},l)}}return(d,l)=>(e.openBlock(),e.createBlock(e.Transition,{name:"fade"},{default:e.withCtx(()=>[e.unref(s)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"go-to-top",onClick:_},p)):e.createCommentVNode("",!0)]),_:1}))}}),T="",u=((o,n)=>{const t=o.__vccOpts||o;for(const[s,r]of n)t[s]=r;return t})(a,[["__scopeId","data-v-09295527"]]);return o=>{typeof window>"u"||window.addEventListener("load",()=>{const n=document.createElement("div");document.body.appendChild(n),e.render(e.h(u,{threshold:o==null?void 0:o.threshold}),n)})}});

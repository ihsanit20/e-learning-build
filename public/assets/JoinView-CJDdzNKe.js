import{d as l,k as r,l as u,o as p,g as h,a as t,m as d,p as m,v as _}from"./index-BAbeo40T.js";const v={class:"max-w-6xl mx-auto py-4"},f={class:"card-bg p-8"},x=t("h1",{class:"title-lg text-center"},"Join",-1),g=t("button",{class:"btn-2",type:"submit"},"Join",-1),k={__name:"JoinView",setup(b){const e=l(""),s=r(),a=u(),n=async()=>{await a.checkPhone(e.value)?s.push({name:"login",query:{phone:e.value}}):s.push({name:"register",query:{phone:e.value}})};return(c,o)=>(p(),h("div",v,[t("div",f,[x,t("form",{class:"flex flex-col gap-4",onSubmit:d(n,["prevent"])},[m(t("input",{class:"input-1",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),type:"text",placeholder:"Enter Phone Number"},null,512),[[_,e.value]]),g],32)])]))}};export{k as default};
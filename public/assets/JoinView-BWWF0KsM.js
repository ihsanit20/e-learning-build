import{d as l,k as r,l as u,o as p,g as d,a as t,m as h,p as m,v as _}from"./index-Djx28oNT.js";const v={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},f={class:"space-y-4"},g=t("h1",{class:"title-lg text-center"},"Join Now",-1),x=t("button",{class:"btn-2",type:"submit"},"Join",-1),y={__name:"JoinView",setup(w){const e=l(""),s=r(),a=u(),n=async()=>{await a.checkPhone(e.value)?s.push({name:"login",query:{phone:e.value}}):s.push({name:"register",query:{phone:e.value}})};return(i,o)=>(p(),d("div",v,[t("div",f,[g,t("form",{class:"flex flex-col gap-4",onSubmit:h(n,["prevent"])},[m(t("input",{class:"input-1",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),type:"text",placeholder:"Enter Phone Number"},null,512),[[_,e.value]]),x],32)])]))}};export{y as default};
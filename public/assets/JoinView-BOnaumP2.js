import{r as c,k as l,l as u,d as p,e as d,f as t,m as h,p as m,v as _}from"./index-BrS3nTk0.js";const f={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},v={class:"space-y-4"},x=t("h1",{class:"title-lg text-center"},"Join Now",-1),g=t("button",{class:"btn-2",type:"submit"},"Join",-1),y={__name:"JoinView",setup(w){const e=c(""),s=l(),a=u(),n=async()=>{await a.checkPhone(e.value)?s.push({name:"login",query:{phone:e.value}}):s.push({name:"register",query:{phone:e.value}})};return(i,o)=>(p(),d("div",f,[t("div",v,[x,t("form",{class:"flex flex-col gap-4",onSubmit:h(n,["prevent"])},[m(t("input",{class:"input-1",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),type:"text",placeholder:"Enter Phone Number"},null,512),[[_,e.value]]),g],32)])]))}};export{y as default};

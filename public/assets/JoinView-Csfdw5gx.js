import{r as u,k as p,d as c,e as t,y as d,z as m,A as h,h as f,i as v}from"./index-BXpgum4r.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},g={class:"space-y-4"},w={class:"relative"},X={__name:"JoinView",setup(b){const s=u(""),n=f(),a=p(),l=()=>{s.value=s.value.replace(/\D/g,"")},i=async()=>{const o=`+88${s.value}`;await a.checkPhone(o)?n.push({name:"login",query:{phone:o}}):n.push({name:"register",query:{phone:o}})};return(o,e)=>(v(),c("div",x,[t("div",g,[e[3]||(e[3]=t("div",null,[t("h1",{class:"title-lg text-center"},"Join Now"),t("h1",{class:"title-md text-center"},"With Phone Number")],-1)),t("form",{class:"flex flex-col gap-4",onSubmit:d(i,["prevent"])},[t("div",w,[m(t("input",{class:"input-1 pl-10",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r),type:"tel",placeholder:"01XXXXXXXXX",pattern:"^01[0-9]{9}$",onInput:l,required:""},null,544),[[h,s.value]]),e[1]||(e[1]=t("span",{class:"absolute p-2 left-0"},"+88",-1))]),e[2]||(e[2]=t("button",{class:"btn-2",type:"submit"},"Join",-1))],32)])]))}},P=_(X,[["__scopeId","data-v-6e4e7f78"]]);export{P as default};

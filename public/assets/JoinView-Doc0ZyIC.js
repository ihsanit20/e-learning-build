import{r as u,c as p,k as c,e as d,f as m,g as t,y as h,z as f,A as v}from"./index-lQYSNhqT.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},x={class:"space-y-4"},w={class:"relative"},X={__name:"JoinView",setup(b){const s=u(""),n=p(),a=c(),l=()=>{s.value=s.value.replace(/\D/g,"")},r=async()=>{const o=`+88${s.value}`;await a.checkPhone(o)?n.push({name:"login",query:{phone:o}}):n.push({name:"register",query:{phone:o}})};return(o,e)=>(d(),m("div",g,[t("div",x,[e[3]||(e[3]=t("div",null,[t("h1",{class:"title-lg text-center"},"Join Now"),t("h1",{class:"title-md text-center"},"With Phone Number")],-1)),t("form",{class:"flex flex-col gap-4",onSubmit:h(r,["prevent"])},[t("div",w,[f(t("input",{class:"input-1 pl-10",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=i=>s.value=i),type:"tel",placeholder:"01XXXXXXXXX",pattern:"^01[0-9]{9}$",onInput:l,required:""},null,544),[[v,s.value]]),e[1]||(e[1]=t("span",{class:"absolute p-2 left-0"},"+88",-1))]),e[2]||(e[2]=t("button",{class:"btn-2",type:"submit"},"Join",-1))],32)])]))}},P=_(X,[["__scopeId","data-v-6e4e7f78"]]);export{P as default};

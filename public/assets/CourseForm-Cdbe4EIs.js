import{u as U,a as M,c as T,r as a,o as k,e as u,f as r,g as t,x as F,z as l,a5 as L,F as N,h as B,i as D,G as g,q as S,A as y,p as V,E as I,t as h,B as R,C as A}from"./index-BMsmsKno.js";import{_ as E}from"./TextEditor-B2rzrXCS.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d=n=>(R("data-v-e62d22d3"),n=n(),A(),n),z={class:"my-container"},G={class:"card-bg p-4 md:p-8"},P=d(()=>t("h1",{class:"title-lg"},"Add New Course",-1)),$=d(()=>t("option",{disabled:"",value:""},"Select a Category",-1)),j=["value"],H=d(()=>t("p",null,"Course Type",-1)),J={class:"flex items-center gap-2"},K={key:0},O=d(()=>t("p",null,"Start Date",-1)),Q=d(()=>t("button",{type:"submit",class:"btn-2"},"Add Course",-1)),W={key:0,class:"message"},X={__name:"CourseForm",setup(n){const b=U(),C=M(),w=T(),i=a(""),c=a(""),p=a(""),v=a(""),m=a(""),o=a(""),_=a(""),x=async()=>{const f={title:i.value,description:c.value,price:p.value,start_date:o.value==="Live Course"?v.value:null,category_id:m.value,course_type:o.value};try{await b.createCourse(f),_.value="The course is successfully added",setTimeout(()=>{w.push("/course-list")},2e3)}catch(s){console.error("Failed to add course:",s)}};return k(async()=>{await C.fetchCategories()}),(f,s)=>(u(),r("div",z,[t("div",G,[P,t("form",{onSubmit:F(x,["prevent"]),class:"space-y-2"},[l(t("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>m.value=e),class:"input-1"},[$,(u(!0),r(N,null,B(D(C).categories,e=>(u(),r("option",{key:e.id,value:e.id},h(e.name),9,j))),128))],512),[[L,m.value]]),t("div",null,[H,t("div",J,[t("label",null,[l(t("input",{type:"radio",value:"Live Course","onUpdate:modelValue":s[1]||(s[1]=e=>o.value=e)},null,512),[[g,o.value]]),S(" Live Course ")]),t("label",null,[l(t("input",{type:"radio",value:"Recorded Course","onUpdate:modelValue":s[2]||(s[2]=e=>o.value=e)},null,512),[[g,o.value]]),S(" Recorded Course ")])])]),l(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>i.value=e),placeholder:"Title",class:"input-1"},null,512),[[y,i.value]]),l(t("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>p.value=e),placeholder:"Price",class:"input-1"},null,512),[[y,p.value]]),o.value==="Live Course"?(u(),r("div",K,[O,l(t("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>v.value=e),type:"date",placeholder:"Start Date",class:"input-1"},null,512),[[y,v.value]])])):V("",!0),I(E,{modelValue:c.value,"onUpdate:modelValue":s[6]||(s[6]=e=>c.value=e)},null,8,["modelValue"]),Q],32),_.value?(u(),r("p",W,h(_.value),1)):V("",!0)])]))}},te=q(X,[["__scopeId","data-v-e62d22d3"]]);export{te as default};
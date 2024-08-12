import{u as U,a as k,k as M,r as a,o as T,d as u,e as r,f as t,m as F,p as l,J as I,F as L,g as N,h as D,C as g,x as S,v as y,q as V,y as R,t as h,H as B,I as A}from"./index-CcZtx1wx.js";import{_ as q}from"./TextEditor-DXHP2LkU.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n=d=>(B("data-v-3e97a591"),d=d(),A(),d),H={class:"my-container"},J={class:"card-bg p-4 md:p-8"},P=n(()=>t("h1",{class:"title-lg"},"Add New Course",-1)),$=n(()=>t("option",{disabled:"",value:""},"Select a Category",-1)),j=["value"],z=n(()=>t("p",null,"Course Type",-1)),G={class:"flex items-center gap-2"},K={key:0},O=n(()=>t("p",null,"Start Date",-1)),Q=n(()=>t("button",{type:"submit",class:"btn-2"},"Add Course",-1)),W={key:0,class:"message"},X={__name:"CourseForm",setup(d){const b=U(),C=k(),w=M(),i=a(""),c=a(""),p=a(""),v=a(""),m=a(""),o=a(""),_=a(""),x=async()=>{const f={title:i.value,description:c.value,price:p.value,start_date:o.value==="Live Course"?v.value:null,course_category:m.value,course_type:o.value};try{await b.createCourse(f),_.value="The course is successfully added",setTimeout(()=>{w.push("/course-list")},2e3)}catch(s){console.error("Failed to add course:",s)}};return T(async()=>{await C.fetchCategories()}),(f,s)=>(u(),r("div",H,[t("div",J,[P,t("form",{onSubmit:F(x,["prevent"]),class:"space-y-2"},[l(t("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>m.value=e),class:"input-1"},[$,(u(!0),r(L,null,N(D(C).categories,e=>(u(),r("option",{key:e.id,value:e.name},h(e.name),9,j))),128))],512),[[I,m.value]]),t("div",null,[z,t("div",G,[t("label",null,[l(t("input",{type:"radio",value:"Live Course","onUpdate:modelValue":s[1]||(s[1]=e=>o.value=e)},null,512),[[g,o.value]]),S(" Live Course ")]),t("label",null,[l(t("input",{type:"radio",value:"Recorded Course","onUpdate:modelValue":s[2]||(s[2]=e=>o.value=e)},null,512),[[g,o.value]]),S(" Recorded Course ")])])]),l(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>i.value=e),placeholder:"Title",class:"input-1"},null,512),[[y,i.value]]),l(t("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>p.value=e),placeholder:"Price",class:"input-1"},null,512),[[y,p.value]]),o.value==="Live Course"?(u(),r("div",K,[O,l(t("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>v.value=e),type:"date",placeholder:"Start Date",class:"input-1"},null,512),[[y,v.value]])])):V("",!0),R(q,{modelValue:c.value,"onUpdate:modelValue":s[6]||(s[6]=e=>c.value=e)},null,8,["modelValue"]),Q],32),_.value?(u(),r("p",W,h(_.value),1)):V("",!0)])]))}},te=E(X,[["__scopeId","data-v-3e97a591"]]);export{te as default};

import{u as V,a as x,k as w,r as o,o as b,d as l,e as r,f as t,m as k,p as u,J as F,F as M,g as U,h as I,v,A as N,t as g,q as T,s as A,x as B}from"./index-teJBcn3p.js";import{_ as D}from"./TextEditor-BfuMWDI-.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=a=>(A("data-v-1481387a"),a=a(),B(),a),E={class:"my-container max-w-xl"},J={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},L=_(()=>t("h1",{class:"title-lg"},"Add New Course",-1)),P=_(()=>t("option",{disabled:"",value:""},"Select a Category",-1)),R=["value"],$=_(()=>t("button",{type:"submit",class:"btn-2"},"Add Course",-1)),j={key:0,class:"message"},z={__name:"CourseForm",setup(a){const C=V(),f=x(),S=w(),n=o(""),c=o(""),d=o(""),i=o(""),p=o(""),m=o(""),h=async()=>{const y={title:n.value,description:c.value,price:d.value,start_date:i.value,course_category:p.value};try{await C.createCourse(y),m.value="The course is successfully added",setTimeout(()=>{S.push("/course-list")},2e3)}catch(s){console.error("Failed to add course:",s)}};return b(async()=>{await f.fetchCategories()}),(y,s)=>(l(),r("div",E,[t("div",J,[L,t("form",{onSubmit:k(h,["prevent"]),class:"space-y-2"},[u(t("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>p.value=e),class:"input-1"},[P,(l(!0),r(M,null,U(I(f).categories,e=>(l(),r("option",{key:e.id,value:e.name},g(e.name),9,R))),128))],512),[[F,p.value]]),u(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e),placeholder:"Title",class:"input-1"},null,512),[[v,n.value]]),N(D,{modelValue:c.value,"onUpdate:modelValue":s[2]||(s[2]=e=>c.value=e)},null,8,["modelValue"]),u(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>d.value=e),placeholder:"Price",class:"input-1"},null,512),[[v,d.value]]),u(t("input",{"onUpdate:modelValue":s[4]||(s[4]=e=>i.value=e),type:"date",placeholder:"Start Date",class:"input-1"},null,512),[[v,i.value]]),$],32),m.value?(l(),r("p",j,g(m.value),1)):T("",!0)])]))}},O=q(z,[["__scopeId","data-v-1481387a"]]);export{O as default};
import{u as x,a as b,k as w,r as o,o as V,d as r,e as u,f as s,m as k,p as a,J as F,F as M,g as U,h as D,v as n,t as g,q as I,s as T,x as B}from"./index-DflU3NkK.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _=l=>(T("data-v-c526714b"),l=l(),B(),l),A={class:"my-container max-w-xl"},q={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},E=_(()=>s("h1",{class:"title-lg"},"Add New Course",-1)),J=_(()=>s("option",{disabled:"",value:""},"Select a Category",-1)),L=["value"],P=_(()=>s("button",{type:"submit",class:"btn-2"},"Add Course",-1)),R={key:0,class:"message"},j={__name:"CourseForm",setup(l){const h=x(),f=b(),C=w(),c=o(""),d=o(""),i=o(""),p=o(""),v=o(""),m=o(""),S=async()=>{const y={title:c.value,description:d.value,price:i.value,start_date:p.value,course_category:v.value};try{await h.createCourse(y),m.value="The course is successfully added",setTimeout(()=>{C.push("/course-list")},2e3)}catch(t){console.error("Failed to add course:",t)}};return V(async()=>{await f.fetchCategories()}),(y,t)=>(r(),u("div",A,[s("div",q,[E,s("form",{onSubmit:k(S,["prevent"]),class:"space-y-2"},[a(s("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>v.value=e),class:"input-1"},[J,(r(!0),u(M,null,U(D(f).categories,e=>(r(),u("option",{key:e.id,value:e.name},g(e.name),9,L))),128))],512),[[F,v.value]]),a(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>c.value=e),placeholder:"Title",class:"input-1"},null,512),[[n,c.value]]),a(s("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e),placeholder:"Description",class:"input-1"},null,512),[[n,d.value]]),a(s("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),placeholder:"Price",class:"input-1"},null,512),[[n,i.value]]),a(s("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>p.value=e),type:"date",placeholder:"Start Date",class:"input-1"},null,512),[[n,p.value]]),P],32),m.value?(r(),u("p",R,g(m.value),1)):I("",!0)])]))}},H=N(j,[["__scopeId","data-v-c526714b"]]);export{H as default};

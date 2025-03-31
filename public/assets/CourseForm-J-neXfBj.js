import{u as x,a as M,r as l,o as N,d as u,e as s,p as f,y as T,z as a,B as _,N as k,F,f as L,g as B,q as g,H as V,A as c,t as S,h as D,i as r}from"./index-uPh3lHus.js";import{_ as R}from"./TextEditor-31_9SrwS.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"my-container"},z={class:"card-bg p-4 md:p-8"},E=["value"],H={class:"flex items-center gap-2"},I={key:0},P={key:0,class:"message"},$={__name:"CourseForm",setup(j){const b=x(),y=M(),U=D(),n=l(""),d=l(""),i=l(""),p=l(""),v=l(""),o=l(""),m=l(""),w=async()=>{const C={title:n.value,description:d.value,price:i.value,start_date:o.value==="Live Course"?p.value:null,category_id:v.value,course_type:o.value};try{await b.createCourse(C),m.value="The course is successfully added",setTimeout(()=>{U.push("/management/course-list")},2e3)}catch(e){console.error("Failed to add course:",e)}};return N(async()=>{await y.fetchCategories()}),(C,e)=>(r(),u("div",q,[s("div",z,[e[13]||(e[13]=s("h1",{class:"title-lg"},"Add New Course",-1)),s("form",{onSubmit:T(w,["prevent"]),class:"space-y-2"},[a(s("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t),class:"input-1"},[e[7]||(e[7]=s("option",{disabled:"",value:""},"Select a Category",-1)),(r(!0),u(F,null,L(B(y).categories,t=>(r(),u("option",{key:t.id,value:t.id},S(t.name),9,E))),128))],512),[[k,v.value]]),s("div",null,[e[10]||(e[10]=s("p",null,"Course Type",-1)),s("div",H,[s("label",null,[a(s("input",{type:"radio",value:"Live Course","onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t)},null,512),[[V,o.value]]),e[8]||(e[8]=g(" Live Course "))]),s("label",null,[a(s("input",{type:"radio",value:"Recorded Course","onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t)},null,512),[[V,o.value]]),e[9]||(e[9]=g(" Recorded Course "))])])]),a(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>n.value=t),placeholder:"Title",class:"input-1"},null,512),[[c,n.value]]),a(s("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>i.value=t),placeholder:"Price",class:"input-1"},null,512),[[c,i.value]]),o.value==="Live Course"?(r(),u("div",I,[e[11]||(e[11]=s("p",null,"Start Date",-1)),a(s("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),type:"date",placeholder:"Start Date",class:"input-1"},null,512),[[c,p.value]])])):f("",!0),_(R,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=t=>d.value=t)},null,8,["modelValue"]),e[12]||(e[12]=s("button",{type:"submit",class:"btn-2"},"Add Course",-1))],32),m.value?(r(),u("p",P,S(m.value),1)):f("",!0)])]))}},O=A($,[["__scopeId","data-v-13c9b050"]]);export{O as default};

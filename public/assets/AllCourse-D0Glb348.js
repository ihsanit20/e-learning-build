import{u as f,a as p,r as c,b as h,o as k,w as x,c as b,d as t,e as l,f as a,n as C,F as i,g as d,h as A,t as w,i as S,_ as B}from"./index-CT1U0GKd.js";const q={class:"my-container space-y-6 py-2"},$=a("div",null,[a("h2",{class:"title-xl text-center"},"Our Courses"),a("p",{class:"text-center"},"Explore our courses at a glance")],-1),E={class:"flex justify-center space-x-4"},F=["onClick"],L={key:0,class:"grid md:grid-cols-3 gap-4"},N=a("i",{class:"fas fa-image text-gray-300 text-[250px]"},null,-1),j=a("div",{class:"h-8 w-28 bg-gray-200 rounded-full mt-4"},null,-1),z=[N,j],D={key:1,class:"grid md:grid-cols-3 gap-4"},M={key:2},G={__name:"AllCourse",setup(O){const _=f(),v=p(),u=c([]),s=c("All Courses"),n=h(),g=c(!0);k(async()=>{await _.fetchCourses(),await v.fetchCategories(),u.value=_.courses.sort((o,r)=>r.id-o.id),n.query.category&&(s.value=n.query.category),g.value=!1}),x(()=>n.query.category,o=>{s.value=o||"All Courses"});const y=b(()=>s.value==="All Courses"?u.value:u.value.filter(o=>o.course_category===s.value)),m=o=>{s.value=o};return(o,r)=>(t(),l("div",q,[$,a("div",null,[a("div",E,[a("button",{onClick:r[0]||(r[0]=e=>m("All Courses")),class:C({"btn-2":s.value==="All Courses","btn-3":s.value!=="All Courses"})},"All Courses",2),(t(!0),l(i,null,d(A(v).categories,e=>(t(),l("button",{key:e.id,onClick:R=>m(e.name),class:C({"btn-2":s.value===e.name,"btn-3":s.value!==e.name})},w(e.name),11,F))),128))])]),g.value?(t(),l("div",L,[(t(),l(i,null,d(3,e=>a("div",{class:"card-bg p-4 animate-pulse items-center",key:e},z)),64))])):y.value.length>0?(t(),l("div",D,[(t(!0),l(i,null,d(y.value,e=>(t(),S(B,{key:e.id,course:e},null,8,["course"]))),128))])):(t(),l("p",M,"No courses available"))]))}};export{G as default};

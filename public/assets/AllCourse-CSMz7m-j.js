import{u as f,a as C,r as c,b as h,o as k,w as x,c as b,d as t,e as o,f as a,n as y,F as i,g as d,h as A,t as w,i as S,_ as B}from"./index-CcZtx1wx.js";const q={class:"my-container space-y-6 py-2"},$=a("div",null,[a("h2",{class:"title-xl text-center"},"Our Courses"),a("p",{class:"text-center"},"Explore our courses at a glance")],-1),E={class:"flex flex-wrap justify-center md:gap-4 gap-2"},F=["onClick"],L={key:0,class:"grid md:grid-cols-3 gap-4"},N=a("i",{class:"fas fa-image text-gray-300 text-[250px]"},null,-1),j=a("div",{class:"h-8 w-28 bg-gray-200 rounded-full mt-4"},null,-1),z=[N,j],D={key:1,class:"grid md:grid-cols-3 gap-4"},M={key:2},G={__name:"AllCourse",setup(O){const _=f(),v=C(),u=c([]),s=c("All Courses"),n=h(),g=c(!0);k(async()=>{await _.fetchCourses(),await v.fetchCategories(),u.value=_.courses.sort((l,r)=>r.id-l.id),n.query.category&&(s.value=n.query.category),g.value=!1}),x(()=>n.query.category,l=>{s.value=l||"All Courses"});const m=b(()=>s.value==="All Courses"?u.value:u.value.filter(l=>l.course_category===s.value)),p=l=>{s.value=l};return(l,r)=>(t(),o("div",q,[$,a("div",null,[a("div",E,[a("button",{onClick:r[0]||(r[0]=e=>p("All Courses")),class:y({"btn-2":s.value==="All Courses","btn-3":s.value!=="All Courses"})},"All Courses",2),(t(!0),o(i,null,d(A(v).categories,e=>(t(),o("button",{key:e.id,onClick:R=>p(e.name),class:y({"btn-2":s.value===e.name,"btn-3":s.value!==e.name})},w(e.name),11,F))),128))])]),g.value?(t(),o("div",L,[(t(),o(i,null,d(3,e=>a("div",{class:"card-bg p-4 animate-pulse items-center",key:e},z)),64))])):m.value.length>0?(t(),o("div",D,[(t(!0),o(i,null,d(m.value,e=>(t(),S(B,{key:e.id,course:e},null,8,["course"]))),128))])):(t(),o("p",M,"No courses available"))]))}};export{G as default};

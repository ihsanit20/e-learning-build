import{u as _,a as k,r as i,o as x,b,w as h,c as A,d as o,e as r,n as f,F as d,f as v,g as w,h as q,i as l,t as S,j as B,_ as $}from"./index-uPh3lHus.js";const j={class:"my-container space-y-6 py-2"},E={class:"flex flex-wrap justify-center md:gap-4 gap-2"},F=["onClick"],I={key:0,class:"grid md:grid-cols-3 gap-4"},L={key:1,class:"grid md:grid-cols-3 gap-4"},N={key:2},M={__name:"AllCourse",setup(R){const g=_(),n=k(),c=i([]),a=i("All Courses"),u=b(),C=q(),p=i(!0);x(async()=>{await g.fetchCourses(),await n.fetchCategories(),c.value=g.courses.sort((s,e)=>e.id-s.id),u.query.category&&(a.value=u.query.category),p.value=!1}),h(()=>u.query.category,s=>{a.value=s||"All Courses"});const m=A(()=>{if(a.value==="All Courses")return c.value;const s=n.categories.find(e=>e.name===a.value);return c.value.filter(e=>parseInt(e.category_id)===parseInt(s==null?void 0:s.id))}),y=s=>{a.value=s,C.replace({query:{...u.query,category:s}})};return(s,e)=>(l(),o("div",j,[e[2]||(e[2]=r("div",null,[r("h2",{class:"title-xl text-center"},"Our Courses"),r("p",{class:"text-center"},"Explore our courses at a glance")],-1)),r("div",null,[r("div",E,[r("button",{onClick:e[0]||(e[0]=t=>y("All Courses")),class:f({"btn-2":a.value==="All Courses","btn-3":a.value!=="All Courses"})}," All Courses ",2),(l(!0),o(d,null,v(w(n).categories,t=>(l(),o("button",{key:t.id,onClick:z=>y(t.name),class:f({"btn-2":a.value===t.name,"btn-3":a.value!==t.name})},S(t.name),11,F))),128))])]),p.value?(l(),o("div",I,[(l(),o(d,null,v(3,t=>r("div",{class:"card-bg p-4 animate-pulse items-center",key:t},e[1]||(e[1]=[r("i",{class:"fas fa-image text-gray-300 text-[250px]"},null,-1),r("div",{class:"h-8 w-28 bg-gray-200 rounded-full mt-4"},null,-1)]))),64))])):m.value.length>0?(l(),o("div",L,[(l(!0),o(d,null,v(m.value,t=>(l(),B($,{key:t.id,course:t},null,8,["course"]))),128))])):(l(),o("p",N,"No courses available"))]))}};export{M as default};

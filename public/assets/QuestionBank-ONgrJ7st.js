import{a as d,r as c,o as u,d as s,e as o,g as i,F as f,f as _,x as m,i as t,j as g,s as p,t as y}from"./index-BXpgum4r.js";const k={class:"my-container space-y-2"},x={key:0,class:"flex justify-center items-center"},v={key:1},b={class:"grid md:grid-cols-3 gap-4"},h={class:""},B={key:1,class:"text-red-500"},S={__name:"QuestionBank",setup(C){const a=d(),r=c(!0);return u(async()=>{try{await a.fetchCategories()}finally{r.value=!1}}),(L,e)=>{const l=m("RouterLink");return t(),s("div",k,[e[2]||(e[2]=o("h1",{class:"title-lg"},"Question Categories",-1)),r.value?(t(),s("div",x,e[0]||(e[0]=[o("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(t(),s("div",v,[o("div",b,[i(a).categories.length?(t(!0),s(f,{key:0},_(i(a).categories,n=>(t(),g(l,{to:{name:"SubjectList",params:{id:n.id}},key:n.id,class:"main-button flex-row"},{default:p(()=>[e[1]||(e[1]=o("i",{class:"fad fa-folder text-xl"},null,-1)),o("p",h,y(n.name),1)]),_:2},1032,["to"]))),128)):(t(),s("p",B,"No categories found"))])]))])}}};export{S as default};

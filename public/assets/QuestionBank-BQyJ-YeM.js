import{a as c,r as d,o as l,m as _,e,f as t,g as s,i as r,F as u,h as f,j as h,s as m,t as g}from"./index-BLC7tZcK.js";const p={class:"my-container space-y-2"},y=s("h1",{class:"title-lg"},"Question Categories",-1),k={key:0,class:"flex justify-center items-center"},v=s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),x=[v],b={key:1},B={class:"grid md:grid-cols-3 gap-4"},C=s("i",{class:"fad fa-folder text-xl"},null,-1),L={class:""},w={key:1,class:"text-red-500"},Q={__name:"QuestionBank",setup(S){const o=c(),n=d(!0);return l(async()=>{try{await o.fetchCategories()}finally{n.value=!1}}),(j,F)=>{const i=_("RouterLink");return e(),t("div",p,[y,n.value?(e(),t("div",k,x)):(e(),t("div",b,[s("div",B,[r(o).categories.length?(e(!0),t(u,{key:0},f(r(o).categories,a=>(e(),h(i,{to:{name:"SubjectList",params:{id:a.id}},key:a.id,class:"main-button flex-row"},{default:m(()=>[C,s("p",L,g(a.name),1)]),_:2},1032,["to"]))),128)):(e(),t("p",w,"No categories found"))])]))])}}};export{Q as default};

import{a as _,r as u,e as n,f as i,g as e,y as $,z as x,A as h,w as E,s as C,t as M,o as j,i as k,F as N,h as V,j as f,q as b}from"./index-CWc9enRv.js";const z={class:"modal"},B={class:"modal-content space-y-2"},q={class:"flex gap-4"},L={__name:"AddCategoryModal",emits:["close"],setup(y,{emit:c}){const l=c,r=_(),s=u(""),a=async()=>{await r.createCategory(s.value),s.value="",l("close")};return(d,t)=>(n(),i("div",z,[e("div",B,[t[3]||(t[3]=e("h2",null,"Add Category",-1)),e("form",{onSubmit:$(a,["prevent"]),class:"space-y-2"},[x(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),placeholder:"Category name",required:""},null,512),[[h,s.value]]),e("div",q,[t[2]||(t[2]=e("button",{type:"submit",class:"btn-2"},"Add",-1)),e("button",{type:"button",onClick:t[1]||(t[1]=o=>l("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},F={class:"modal"},O={class:"modal-content"},T={class:"flex gap-4"},U={__name:"EditCategoryModal",props:{category:Object},emits:["close"],setup(y,{emit:c}){const l=c,r=_(),s=y,a=u(s.category.name);E(()=>s.category,t=>{a.value=t.name});const d=async()=>{await r.updateCategory(s.category.id,{name:a.value}),l("close")};return(t,o)=>(n(),i("div",F,[e("div",O,[o[3]||(o[3]=e("h2",null,"Edit Category",-1)),e("form",{onSubmit:$(d,["prevent"]),class:"space-y-2"},[x(e("input",{"onUpdate:modelValue":o[0]||(o[0]=m=>a.value=m),class:"input-1",placeholder:"Category name",required:""},null,512),[[h,a.value]]),e("div",T,[o[2]||(o[2]=e("button",{type:"submit",class:"btn-2"},"Save",-1)),e("button",{type:"button",onClick:o[1]||(o[1]=m=>l("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},Y={class:"modal"},G={class:"modal-content space-y-2 flex justify-center flex-col items-center"},H={class:"text-red-500"},I={class:"font-bold"},J={class:"flex gap-4"},K={__name:"DeleteCategoryModal",props:{category:Object},emits:["close"],setup(y,{emit:c}){const l=c,r=_(),s=y,a=async()=>{await r.deleteCategory(s.category.id),l("close")};return(d,t)=>(n(),i("div",Y,[e("div",G,[t[3]||(t[3]=e("h2",{class:"title-md"},"Delete Category",-1)),e("p",H,[t[1]||(t[1]=C('Are you sure you want to delete the category " ')),e("span",I,M(y.category.name),1),t[2]||(t[2]=C('"?'))]),e("div",J,[e("button",{class:"btn-2",onClick:a},"Yes"),e("button",{class:"btn-contrast",onClick:t[0]||(t[0]=o=>d.$emit("close"))},"No")])])]))}},P={class:"my-container space-y-2"},Q={key:0,class:"flex justify-center items-center"},R={key:1},W={class:"card-bg p-4 divide-y-2"},X={class:"flex-1 title-md"},Z={class:"flex gap-2"},ee=["onClick"],te=["onClick"],se={key:1,class:"text-red-500"},ae={__name:"CategoryList",setup(y){const c=_(),l=u(!1),r=u(!1),s=u(!1),a=u(null),d=u(!0),t=()=>l.value=!0,o=()=>l.value=!1,m=p=>{a.value=p,r.value=!0},w=()=>r.value=!1,S=p=>{a.value=p,s.value=!0},A=()=>s.value=!1;return j(async()=>{try{await c.fetchCategories()}finally{d.value=!1}}),(p,v)=>(n(),i("div",P,[v[1]||(v[1]=e("h1",{class:"title-lg"},"Categories",-1)),d.value?(n(),i("div",Q,v[0]||(v[0]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(n(),i("div",R,[e("ul",W,[k(c).categories.length?(n(!0),i(N,{key:0},V(k(c).categories,g=>(n(),i("li",{key:g.id,class:"flex items-center py-2"},[e("p",X,M(g.name),1),e("div",Z,[e("button",{onClick:D=>m(g),class:"btn-1"},"Edit",8,ee),e("button",{onClick:D=>S(g),class:"btn-contrast"},"Delete",8,te)])]))),128)):(n(),i("p",se,"No categories found"))]),e("button",{class:"btn-2",onClick:t},"Add Category")])),l.value?(n(),f(L,{key:2,class:"z-40",onClose:o})):b("",!0),r.value?(n(),f(U,{key:3,class:"z-40",category:a.value,onClose:w},null,8,["category"])):b("",!0),s.value?(n(),f(K,{key:4,class:"z-40",category:a.value,onClose:A},null,8,["category"])):b("",!0)]))}};export{ae as default};

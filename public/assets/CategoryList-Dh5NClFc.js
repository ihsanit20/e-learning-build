import{a as v,r as u,e as a,f as d,g as e,x as C,z as $,A as k,w as D,q as f,t as x,o as E,i as b,F as j,h as N,j as g,p as h}from"./index-CXrK0xpE.js";const V={class:"modal"},z={class:"modal-content space-y-2"},B=e("h2",null,"Add Category",-1),q={class:"flex gap-4"},L=e("button",{type:"submit",class:"btn-2"},"Add",-1),F={__name:"AddCategoryModal",emits:["close"],setup(_,{emit:c}){const n=c,i=v(),t=u(""),s=async()=>{await i.createCategory(t.value),t.value="",n("close")};return(r,o)=>(a(),d("div",V,[e("div",z,[B,e("form",{onSubmit:C(s,["prevent"]),class:"space-y-2"},[$(e("input",{class:"input-1","onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),placeholder:"Category name",required:""},null,512),[[k,t.value]]),e("div",q,[L,e("button",{type:"button",onClick:o[1]||(o[1]=l=>n("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},O={class:"modal"},T={class:"modal-content"},U=e("h2",null,"Edit Category",-1),Y={class:"flex gap-4"},G=e("button",{type:"submit",class:"btn-2"},"Save",-1),H={__name:"EditCategoryModal",props:{category:Object},emits:["close"],setup(_,{emit:c}){const n=c,i=v(),t=_,s=u(t.category.name);D(()=>t.category,o=>{s.value=o.name});const r=async()=>{await i.updateCategory(t.category.id,{name:s.value}),n("close")};return(o,l)=>(a(),d("div",O,[e("div",T,[U,e("form",{onSubmit:C(r,["prevent"]),class:"space-y-2"},[$(e("input",{"onUpdate:modelValue":l[0]||(l[0]=y=>s.value=y),class:"input-1",placeholder:"Category name",required:""},null,512),[[k,s.value]]),e("div",Y,[G,e("button",{type:"button",onClick:l[1]||(l[1]=y=>n("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},I={class:"modal"},J={class:"modal-content space-y-2 flex justify-center flex-col items-center"},K=e("h2",{class:"title-md"},"Delete Category",-1),P={class:"text-red-500"},Q={class:"font-bold"},R={class:"flex gap-4"},W={__name:"DeleteCategoryModal",props:{category:Object},emits:["close"],setup(_,{emit:c}){const n=c,i=v(),t=_,s=async()=>{await i.deleteCategory(t.category.id),n("close")};return(r,o)=>(a(),d("div",I,[e("div",J,[K,e("p",P,[f('Are you sure you want to delete the category " '),e("span",Q,x(_.category.name),1),f('"?')]),e("div",R,[e("button",{class:"btn-2",onClick:s},"Yes"),e("button",{class:"btn-contrast",onClick:o[0]||(o[0]=l=>r.$emit("close"))},"No")])])]))}},X={class:"my-container space-y-2"},Z=e("h1",{class:"title-lg"},"Categories",-1),ee={key:0,class:"flex justify-center items-center"},te=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),se=[te],oe={key:1},ae={class:"card-bg p-4 divide-y-2"},ne={class:"flex-1 title-md"},le={class:"flex gap-2"},ce=["onClick"],ie=["onClick"],de={key:1,class:"text-red-500"},_e={__name:"CategoryList",setup(_){const c=v(),n=u(!1),i=u(!1),t=u(!1),s=u(null),r=u(!0),o=()=>n.value=!0,l=()=>n.value=!1,y=m=>{s.value=m,i.value=!0},M=()=>i.value=!1,w=m=>{s.value=m,t.value=!0},S=()=>t.value=!1;return E(async()=>{try{await c.fetchCategories()}finally{r.value=!1}}),(m,re)=>(a(),d("div",X,[Z,r.value?(a(),d("div",ee,se)):(a(),d("div",oe,[e("ul",ae,[b(c).categories.length?(a(!0),d(j,{key:0},N(b(c).categories,p=>(a(),d("li",{key:p.id,class:"flex items-center py-2"},[e("p",ne,x(p.name),1),e("div",le,[e("button",{onClick:A=>y(p),class:"btn-1"},"Edit",8,ce),e("button",{onClick:A=>w(p),class:"btn-contrast"},"Delete",8,ie)])]))),128)):(a(),d("p",de,"No categories found"))]),e("button",{class:"btn-2",onClick:o},"Add Category")])),n.value?(a(),g(F,{key:2,class:"z-40",onClose:l})):h("",!0),i.value?(a(),g(H,{key:3,class:"z-40",category:s.value,onClose:M},null,8,["category"])):h("",!0),t.value?(a(),g(W,{key:4,class:"z-40",category:s.value,onClose:S},null,8,["category"])):h("",!0)]))}};export{_e as default};

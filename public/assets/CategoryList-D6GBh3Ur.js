import{u as v}from"./category-VhYPZ0LY.js";import{_ as C,d as _,o as l,g as r,a as e,m as x,p as M,v as S,x as b,y as f,B as N,b as $,t as w,e as V,i as k,F as j,h as z,c as g,s as h}from"./index-Lk6wOGQy.js";const D=t=>(b("data-v-0e4d7e80"),t=t(),f(),t),q={class:"modal"},F={class:"modal-content space-y-2"},L=D(()=>e("h2",null,"Add Category",-1)),O={class:"flex gap-4"},T=D(()=>e("button",{type:"submit",class:"btn-2"},"Add",-1)),U={__name:"AddCategoryModal",emits:["close"],setup(t,{emit:d}){const c=d,i=v(),s=_(""),o=async()=>{await i.createCategory(s.value),s.value="",c("close")};return(u,a)=>(l(),r("div",q,[e("div",F,[L,e("form",{onSubmit:x(o,["prevent"]),class:"space-y-2"},[M(e("input",{class:"input-1","onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),placeholder:"Category name",required:""},null,512),[[S,s.value]]),e("div",O,[T,e("button",{type:"button",onClick:a[1]||(a[1]=n=>c("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},Y=C(U,[["__scopeId","data-v-0e4d7e80"]]),A=t=>(b("data-v-8906d358"),t=t(),f(),t),G={class:"modal"},H={class:"modal-content"},J=A(()=>e("h2",null,"Edit Category",-1)),K={class:"flex gap-4"},P=A(()=>e("button",{type:"submit",class:"btn-2"},"Save",-1)),Q={__name:"EditCategoryModal",props:{category:Object},emits:["close"],setup(t,{emit:d}){const c=d,i=v(),s=t,o=_(s.category.name);N(()=>s.category,a=>{o.value=a.name});const u=async()=>{await i.updateCategory(s.category.id,{name:o.value}),c("close")};return(a,n)=>(l(),r("div",G,[e("div",H,[J,e("form",{onSubmit:x(u,["prevent"]),class:"space-y-2"},[M(e("input",{"onUpdate:modelValue":n[0]||(n[0]=p=>o.value=p),class:"input-1",placeholder:"Category name",required:""},null,512),[[S,o.value]]),e("div",K,[P,e("button",{type:"button",onClick:n[1]||(n[1]=p=>c("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},R=C(Q,[["__scopeId","data-v-8906d358"]]),W=t=>(b("data-v-a36a7730"),t=t(),f(),t),X={class:"modal"},Z={class:"modal-content space-y-2 flex justify-center flex-col items-center"},ee=W(()=>e("h2",{class:"title-md"},"Delete Category",-1)),te={class:"text-red-500"},se={class:"font-bold"},oe={class:"flex gap-4"},ae={__name:"DeleteCategoryModal",props:{category:Object},emits:["close"],setup(t,{emit:d}){const c=d,i=v(),s=t,o=async()=>{await i.deleteCategory(s.category.id),c("close")};return(u,a)=>(l(),r("div",X,[e("div",Z,[ee,e("p",te,[$('Are you sure you want to delete the category " '),e("span",se,w(t.category.name),1),$('"?')]),e("div",oe,[e("button",{class:"btn-2",onClick:o},"Yes"),e("button",{class:"btn-contrast",onClick:a[0]||(a[0]=n=>u.$emit("close"))},"No")])])]))}},ce=C(ae,[["__scopeId","data-v-a36a7730"]]),ne={class:"my-container space-y-2"},le=e("h1",{class:"title-lg"},"Categories",-1),de={class:"card-bg p-4 divide-y-2"},ie={class:"flex-1 title-md"},re={class:"flex gap-2"},ue=["onClick"],_e=["onClick"],pe={key:1,class:"text-red-500"},ge={__name:"CategoryList",setup(t){const d=v(),c=_(!1),i=_(!1),s=_(!1),o=_(null),u=()=>c.value=!0,a=()=>c.value=!1,n=m=>{o.value=m,i.value=!0},p=()=>i.value=!1,E=m=>{o.value=m,s.value=!0},I=()=>s.value=!1;return V(()=>{d.fetchCategories()}),(m,me)=>(l(),r("div",ne,[le,e("ul",de,[k(d).categories.length?(l(!0),r(j,{key:0},z(k(d).categories,y=>(l(),r("li",{key:y.id,class:"flex items-center py-2"},[e("p",ie,w(y.name),1),e("div",re,[e("button",{onClick:B=>n(y),class:"btn-1"},"Edit",8,ue),e("button",{onClick:B=>E(y),class:"btn-contrast"},"Delete",8,_e)])]))),128)):(l(),r("p",pe,"No categories found"))]),e("button",{class:"btn-2",onClick:u},"Add Category"),c.value?(l(),g(Y,{key:0,class:"z-40",onClose:a})):h("",!0),i.value?(l(),g(R,{key:1,class:"z-40",category:o.value,onClose:p},null,8,["category"])):h("",!0),s.value?(l(),g(ce,{key:2,class:"z-40",category:o.value,onClose:I},null,8,["category"])):h("",!0)]))}};export{ge as default};
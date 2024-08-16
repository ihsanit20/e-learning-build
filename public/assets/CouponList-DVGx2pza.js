import{u as g}from"./coupon-Cx2S_Bkh.js";import{r as d,d as a,e as _,f as e,m as F,p as h,v as $,J as N,H as U,I as A,w as j,o as T,C as I,t as M,A as z,x as S,h as E,F as L,g as P,i as w,q as D}from"./index-DpEJbF1j.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const k=o=>(U("data-v-2a0a3f05"),o=o(),A(),o),H={class:"modal"},J={class:"modal-content space-y-2"},R=k(()=>e("h2",null,"Add Coupon",-1)),G=k(()=>e("option",{value:"percentage"},"Percentage",-1)),K=k(()=>e("option",{value:"fixed"},"Fixed Amount",-1)),O=[G,K],Q={class:"flex gap-4"},W=k(()=>e("button",{type:"submit",class:"btn-2"},"Add",-1)),X={__name:"AddCouponModal",emits:["close"],setup(o,{emit:f}){const c=f,v=g(),m=d(""),l=d("percentage"),n=d(0),i=d(""),y=d(""),x=async()=>{await v.createCoupon({code:m.value,discount_type:l.value,discount_value:n.value,valid_from:i.value,valid_until:y.value}),c("close")};return(V,s)=>(a(),_("div",H,[e("div",J,[R,e("form",{onSubmit:F(x,["prevent"]),class:"space-y-2"},[h(e("input",{class:"input-1","onUpdate:modelValue":s[0]||(s[0]=u=>m.value=u),placeholder:"Coupon code",required:""},null,512),[[$,m.value]]),h(e("select",{class:"input-1","onUpdate:modelValue":s[1]||(s[1]=u=>l.value=u)},O,512),[[N,l.value]]),h(e("input",{class:"input-1","onUpdate:modelValue":s[2]||(s[2]=u=>n.value=u),placeholder:"Discount value",type:"number",required:""},null,512),[[$,n.value]]),h(e("input",{class:"input-1","onUpdate:modelValue":s[3]||(s[3]=u=>i.value=u),placeholder:"Valid from",type:"date",required:""},null,512),[[$,i.value]]),h(e("input",{class:"input-1","onUpdate:modelValue":s[4]||(s[4]=u=>y.value=u),placeholder:"Valid until",type:"date",required:""},null,512),[[$,y.value]]),e("div",Q,[W,e("button",{type:"button",onClick:s[5]||(s[5]=u=>c("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},Y=q(X,[["__scopeId","data-v-2a0a3f05"]]),C=o=>(U("data-v-2b02b7bd"),o=o(),A(),o),Z={class:"modal"},ee={class:"max-w-2xl z-50 card-bg p-4 md:p-8 space-y-2"},te=C(()=>e("h2",{class:"title-lg"},"Edit Coupon",-1)),oe=C(()=>e("p",null,"Code",-1)),se=C(()=>e("p",null,"Discount type",-1)),le={class:"flex items-center space-x-4"},ne={class:"flex items-center"},ae=C(()=>e("span",{class:"ml-2"},"Percentage",-1)),de={class:"flex items-center"},ue=C(()=>e("span",{class:"ml-2"},"Fixed Amount",-1)),ce=C(()=>e("p",null,"Discount value",-1)),ie={class:"relative"},pe={class:"absolute top-2 right-3"},re=C(()=>e("p",null,"Valid from",-1)),_e=C(()=>e("p",null,"Valid to",-1)),ve={class:"flex justify-center gap-4"},me=C(()=>e("button",{type:"submit",class:"btn-2"},"Save",-1)),ye={__name:"EditCouponModal",props:["coupon"],emits:["close"],setup(o,{emit:f}){const c=o,v=f,m=g(),l=d(""),n=d("percentage"),i=d(0),y=d(""),x=d(""),V=p=>z(new Date(p),"yyyy-MM-dd"),s=p=>{l.value=p.code,n.value=p.discount_type,i.value=p.discount_value,y.value=V(p.valid_from),x.value=V(p.valid_until)};j(c.coupon,p=>{s(p)}),T(()=>{c.coupon&&s(c.coupon)});const u=async()=>{await m.updateCoupon(c.coupon.id,{code:l.value,discount_type:n.value,discount_value:i.value,valid_from:y.value,valid_until:x.value}),v("close")};return(p,t)=>(a(),_("div",Z,[e("div",ee,[te,e("form",{onSubmit:F(u,["prevent"]),class:"space-y-2"},[e("div",null,[oe,h(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),placeholder:"Coupon code",required:""},null,512),[[$,l.value]])]),e("div",null,[se,e("div",le,[e("label",ne,[h(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=r=>n.value=r),value:"percentage",class:"form-radio"},null,512),[[I,n.value]]),ae]),e("label",de,[h(e("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=r=>n.value=r),value:"fixed",class:"form-radio"},null,512),[[I,n.value]]),ue])])]),e("div",null,[ce,e("div",ie,[h(e("input",{class:"input-1","onUpdate:modelValue":t[3]||(t[3]=r=>i.value=r),placeholder:"Discount value",type:"number",required:""},null,512),[[$,i.value]]),e("span",pe,M(n.value==="percentage"?"%":"Tk"),1)])]),e("div",null,[re,h(e("input",{class:"input-1","onUpdate:modelValue":t[4]||(t[4]=r=>y.value=r),placeholder:"Valid from",type:"date",required:""},null,512),[[$,y.value]])]),e("div",null,[_e,h(e("input",{class:"input-1","onUpdate:modelValue":t[5]||(t[5]=r=>x.value=r),placeholder:"Valid until",type:"date",required:""},null,512),[[$,x.value]])]),e("div",ve,[me,e("button",{type:"button",onClick:t[6]||(t[6]=r=>v("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},he=q(ye,[["__scopeId","data-v-2b02b7bd"]]),fe=o=>(U("data-v-4bfe42e5"),o=o(),A(),o),be={class:"modal"},Ce={class:"modal-content space-y-2"},xe=fe(()=>e("h2",null,"Delete Coupon",-1)),$e={class:"flex gap-4"},Me={__name:"DeleteCouponModal",props:["coupon"],emits:["close"],setup(o,{emit:f}){const c=o,v=f,m=g(),l=async()=>{await m.deleteCoupon(c.coupon.id),v("close")};return(n,i)=>(a(),_("div",be,[e("div",Ce,[xe,e("p",null,[S("Are you sure you want to delete the coupon "),e("strong",null,M(o.coupon.code),1),S("?")]),e("div",$e,[e("button",{type:"button",class:"btn-2",onClick:l},"Delete"),e("button",{type:"button",onClick:i[0]||(i[0]=y=>v("close")),class:"btn-contrast"},"Cancel")])])]))}},Ve=q(Me,[["__scopeId","data-v-4bfe42e5"]]),ge={class:"my-container space-y-2"},ke=e("h1",{class:"title-lg"},"Coupons",-1),we={class:"card-bg p-4"},De={key:0,class:"flex justify-center items-center"},Se=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Ue=[Se],Ae={key:1},qe={key:0,class:"table-auto w-full"},Ie=e("thead",null,[e("tr",{class:"text-left"},[e("th",{class:"px-4 py-2"},"Code"),e("th",{class:"px-4 py-2"},"Discount Type"),e("th",{class:"px-4 py-2"},"Discount Value"),e("th",{class:"px-4 py-2"},"Valid From"),e("th",{class:"px-4 py-2"},"Valid Until"),e("th",{class:"px-4 py-2"},"Actions")])],-1),Ee={class:"px-4 py-2"},Fe={class:"px-4 py-2"},Te={class:"px-4 py-2"},ze={key:0},Be={key:1},Ne={class:"px-4 py-2"},je={class:"px-4 py-2"},Le={class:"px-4 py-2"},Pe={class:"flex gap-2"},He=["onClick"],Je=["onClick"],Re={key:1,class:"text-red-500"},Qe={__name:"CouponList",setup(o){const f=g(),c=d(!1),v=d(!1),m=d(!1),l=d(null),n=d(!0),i=()=>c.value=!0,y=()=>c.value=!1,x=t=>{l.value=t,v.value=!0},V=()=>v.value=!1,s=t=>{l.value=t,m.value=!0},u=()=>m.value=!1,p=t=>z(new Date(t),"dd-MMM-yyyy");return T(async()=>{try{await f.fetchCoupons()}finally{n.value=!1}}),(t,r)=>(a(),_("div",ge,[e("div",{class:"flex justify-between"},[ke,e("button",{class:"btn-2",onClick:i},"Add Coupon")]),e("div",we,[n.value?(a(),_("div",De,Ue)):(a(),_("div",Ae,[E(f).coupons.length?(a(),_("table",qe,[Ie,e("tbody",null,[(a(!0),_(L,null,P(E(f).coupons,b=>(a(),_("tr",{key:b.id,class:"border-t"},[e("td",Ee,M(b.code),1),e("td",Fe,M(b.discount_type),1),e("td",Te,[S(M(b.discount_value)+" ",1),b.discount_type==="percentage"?(a(),_("span",ze,"%")):(a(),_("span",Be,"Tk"))]),e("td",Ne,M(p(b.valid_from)),1),e("td",je,M(p(b.valid_until)),1),e("td",Le,[e("div",Pe,[e("button",{onClick:B=>x(b),class:"btn-1"},"Edit",8,He),e("button",{onClick:B=>s(b),class:"btn-contrast"},"Delete",8,Je)])])]))),128))])])):(a(),_("p",Re,"No coupons found"))]))]),c.value?(a(),w(Y,{key:0,class:"z-40",onClose:y})):D("",!0),v.value?(a(),w(he,{key:1,class:"z-40",coupon:l.value,onClose:V},null,8,["coupon"])):D("",!0),m.value?(a(),w(Ve,{key:2,class:"z-40",coupon:l.value,onClose:u},null,8,["coupon"])):D("",!0)]))}};export{Qe as default};

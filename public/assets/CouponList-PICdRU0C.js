import{u as U}from"./coupon-D2q5dGjh.js";import{r as o,o as q,e as a,f as u,g as e,y as E,s as y,z as r,N as A,F as z,h,t as p,i as S,q as w,A as k,w as B,H as j,x as N,n as F,j as T}from"./index-lQYSNhqT.js";import{u as I}from"./user-BA0uHEF3.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const G={class:"modal"},K={class:"max-w-4-xl bg-white p-4 rounded-lg space-y-2"},P={class:"col-start-1"},H={key:0},R=["value"],J={class:"col-start-1"},O={key:1},Q={class:"flex items-center"},W={class:"w-10 h-full shrink-0 grow-0 flex justify-center items-center text-xl font-bold"},X={class:"col-start-1"},Y={class:"flex items-center"},Z={class:"w-10 h-full shrink-0 grow-0 flex justify-center items-center text-xl font-bold"},ee={class:"flex gap-4 col-span-full"},te={__name:"AddCouponModal",emits:["close"],setup(M,{emit:$}){const c=$,f=U(),C=I(),v=o(""),d=o("general"),n=o(""),i=o("percentage"),b=o(0),x=o(0),_=o(""),g=o(""),D=async()=>{await f.createCoupon({code:v.value,code_type:d.value,affiliate_user_id:n.value,discount_type:i.value,discount_value:x.value,commission_value:b.value,valid_from:_.value,valid_until:g.value}),c("close")};return q(()=>{C.fetchUsers({affiliate_status:"Active"})}),(V,t)=>(a(),u("div",G,[e("div",K,[t[22]||(t[22]=e("h2",{class:"text-xl font-semibold"},"Add Coupon",-1)),t[23]||(t[23]=e("hr",{class:"col-span-full"},null,-1)),e("form",{onSubmit:E(D,["prevent"]),class:"grid md:grid-cols-2 gap-4"},[e("label",P,[t[10]||(t[10]=y(" Coupon Type ")),r(e("select",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s)},t[9]||(t[9]=[e("option",{value:"general"},"General",-1),e("option",{value:"affiliate"},"Affiliate",-1)]),512),[[A,d.value]])]),d.value==="affiliate"?(a(),u("label",H,[t[12]||(t[12]=y(" User ")),r(e("select",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=s=>n.value=s),required:""},[t[11]||(t[11]=e("option",{value:""},"-- Select User --",-1)),(a(!0),u(z,null,h(S(C).users,s=>(a(),u("option",{key:s.id,value:s.id},p(`[${s.phone}] ${s.name}`),9,R))),128))],512),[[A,n.value]])])):w("",!0),e("label",J,[t[13]||(t[13]=y(" Coupon code ")),r(e("input",{class:"input-1","onUpdate:modelValue":t[2]||(t[2]=s=>v.value=s),placeholder:"Coupon code",required:""},null,512),[[k,v.value]])]),d.value==="affiliate"?(a(),u("label",O,[t[14]||(t[14]=y(" Commission value ")),e("div",Q,[r(e("input",{class:"input-1 text-right","onUpdate:modelValue":t[3]||(t[3]=s=>b.value=s),type:"number",required:""},null,512),[[k,b.value]]),e("div",W,p(i.value==="percentage"?"%":"TK"),1)])])):w("",!0),e("label",X,[t[16]||(t[16]=y(" Discount Type ")),r(e("select",{class:"input-1","onUpdate:modelValue":t[4]||(t[4]=s=>i.value=s)},t[15]||(t[15]=[e("option",{value:"percentage"},"Percentage",-1),e("option",{value:"fixed"},"Fixed Amount",-1)]),512),[[A,i.value]])]),e("label",null,[t[17]||(t[17]=y(" Discount Amount ")),e("div",Y,[r(e("input",{class:"input-1 text-right","onUpdate:modelValue":t[5]||(t[5]=s=>x.value=s),placeholder:"Discount value",type:"number",required:""},null,512),[[k,x.value]]),e("div",Z,p(i.value==="percentage"?"%":"TK"),1)])]),e("label",null,[t[18]||(t[18]=y(" Valid From ")),r(e("input",{class:"input-1","onUpdate:modelValue":t[6]||(t[6]=s=>_.value=s),placeholder:"Valid from",type:"date",required:""},null,512),[[k,_.value]])]),e("label",null,[t[19]||(t[19]=y(" Valid Until ")),r(e("input",{class:"input-1","onUpdate:modelValue":t[7]||(t[7]=s=>g.value=s),placeholder:"Valid until",type:"date",required:""},null,512),[[k,g.value]])]),t[21]||(t[21]=e("hr",{class:"col-span-full"},null,-1)),e("div",ee,[t[20]||(t[20]=e("button",{type:"submit",class:"btn-2"},"Add",-1)),e("button",{type:"button",onClick:t[8]||(t[8]=s=>c("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},se={class:"modal"},le={class:"modal-content space-y-2"},oe={class:"flex gap-4"},ne={__name:"DeleteCouponModal",props:["coupon"],emits:["close"],setup(M,{emit:$}){const c=M,f=$,C=U(),v=async()=>{await C.deleteCoupon(c.coupon.id),f("close")};return(d,n)=>(a(),u("div",se,[e("div",le,[n[3]||(n[3]=e("h2",null,"Delete Coupon",-1)),e("p",null,[n[1]||(n[1]=y("Are you sure you want to delete the coupon ")),e("strong",null,p(M.coupon.code),1),n[2]||(n[2]=y("?"))]),e("div",oe,[e("button",{type:"button",class:"btn-2",onClick:v},"Delete"),e("button",{type:"button",onClick:n[0]||(n[0]=i=>f("close")),class:"btn-contrast"},"Cancel")])])]))}},ae={class:"modal"},ue={class:"max-w-2xl z-50 card-bg p-4 md:p-8 space-y-2"},ie={class:"flex flex-wrap justify-between items-center gap-2"},de={class:"border rounded-lg px-3 pt-2 pb-1 font-semibold text-black"},re={class:"capitalize border rounded-lg px-3 pt-2 pb-1"},pe={key:0,class:"border rounded-lg px-3 pt-2 pb-1"},ce={class:"border pt-2 pb-1 rounded-lg px-2"},ve={class:"flex justify-center items-center gap-3"},me={class:"flex items-center cursor-pointer"},fe={class:"flex items-center cursor-pointer"},ye={class:"grid md:grid-cols-2 gap-3"},be={class:"relative"},xe={class:"absolute top-2 right-3"},_e={key:0},ge={class:"relative"},$e={class:"absolute top-2 right-3"},Ce={class:"grid md:grid-cols-2 gap-3"},ke={class:"flex justify-center gap-4"},Ve={__name:"EditCouponModal",props:["coupon"],emits:["close"],setup(M,{emit:$}){const c=M,f=$,C=U(),v=o(""),d=o("general"),n=o(""),i=o("percentage"),b=o(0),x=o(0),_=o(""),g=o(""),D=s=>N(new Date(s),"yyyy-MM-dd"),V=s=>{v.value=s.code,d.value=s.code_type,n.value=s.affiliate_user_id,i.value=s.discount_type,b.value=s.discount_value,x.value=s.commission_value,_.value=D(s.valid_from),g.value=D(s.valid_until)};B(c.coupon,s=>{V(s)}),q(()=>{c.coupon&&V(c.coupon)});const t=async()=>{await C.updateCoupon(c.coupon.id,{discount_type:i.value,discount_value:b.value,commission_value:x.value,valid_from:_.value,valid_until:g.value}),f("close")};return(s,l)=>(a(),u("div",ae,[e("div",ue,[l[16]||(l[16]=e("h2",{class:"title-lg"},"Edit Coupon",-1)),e("form",{onSubmit:E(t,["prevent"]),class:"space-y-4"},[e("div",ie,[e("p",de,p(v.value),1),e("p",re,"Type: "+p(d.value),1),d.value==="affiliate"?(a(),u("p",pe," User ID: "+p(n.value),1)):w("",!0)]),e("div",ce,[l[10]||(l[10]=e("p",{class:"md:hidden text-gray-500"},"Discount type:",-1)),e("div",ve,[l[9]||(l[9]=e("p",{class:"hidden md:block text-gray-500"},"Discount type:",-1)),e("label",me,[r(e("input",{type:"radio","onUpdate:modelValue":l[0]||(l[0]=m=>i.value=m),value:"percentage",class:"form-radio"},null,512),[[j,i.value]]),l[7]||(l[7]=e("span",{class:"ml-2"},"Percentage",-1))]),e("label",fe,[r(e("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=m=>i.value=m),value:"fixed",class:"form-radio"},null,512),[[j,i.value]]),l[8]||(l[8]=e("span",{class:"ml-2"},"Fixed Amount",-1))])])]),e("div",ye,[e("div",null,[l[11]||(l[11]=e("p",null,"Discount value",-1)),e("div",be,[r(e("input",{class:"input-1","onUpdate:modelValue":l[2]||(l[2]=m=>b.value=m),placeholder:"Discount value",type:"number",required:""},null,512),[[k,b.value]]),e("span",xe,p(i.value==="percentage"?"%":"Tk"),1)])]),d.value==="affiliate"?(a(),u("div",_e,[l[12]||(l[12]=e("p",null,"Commission value",-1)),e("div",ge,[r(e("input",{class:"input-1","onUpdate:modelValue":l[3]||(l[3]=m=>x.value=m),placeholder:"Commission value",type:"number",required:""},null,512),[[k,x.value]]),e("span",$e,p(i.value==="percentage"?"%":"Tk"),1)])])):w("",!0)]),e("div",Ce,[e("div",null,[l[13]||(l[13]=e("p",null,"Valid from",-1)),r(e("input",{class:"input-1","onUpdate:modelValue":l[4]||(l[4]=m=>_.value=m),placeholder:"Valid from",type:"date",required:""},null,512),[[k,_.value]])]),e("div",null,[l[14]||(l[14]=e("p",null,"Valid to",-1)),r(e("input",{class:"input-1","onUpdate:modelValue":l[5]||(l[5]=m=>g.value=m),placeholder:"Valid until",type:"date",required:""},null,512),[[k,g.value]])])]),e("div",ke,[l[15]||(l[15]=e("button",{type:"submit",class:"btn-2"},"Save",-1)),e("button",{type:"button",onClick:l[6]||(l[6]=m=>f("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},we=L(Ve,[["__scopeId","data-v-e73471a2"]]),De={class:"my-container space-y-2"},Me={class:"flex justify-between"},Ue={class:"flex items-center gap-4"},Ae={class:"card-bg p-4"},Te={key:0,class:"flex justify-center items-center"},Se={key:1},qe={key:0,class:"table-auto w-full"},je={class:"px-4 py-2"},Fe={class:"px-4 py-2 text-center"},Ee={class:"px-4 py-2 text-center"},ze={key:0},he={key:1},Ne={class:"px-4 py-2"},Be={class:"px-4 py-2"},Ie={class:"px-4 py-2"},Le={class:"flex justify-center gap-2"},Ge=["onClick"],Ke={key:1,class:"text-red-500"},Oe={__name:"CouponList",setup(M){const $=U(),c=o(!1),f=o(!1),C=o(!1),v=o(null),d=o(!0),n=o("general"),i=()=>c.value=!0,b=()=>c.value=!1,x=V=>{v.value=V,f.value=!0},_=()=>f.value=!1,g=()=>C.value=!1,D=V=>N(new Date(V),"dd-MMM-yyyy");return q(async()=>{try{await $.fetchCoupons()}finally{d.value=!1}}),(V,t)=>(a(),u("div",De,[e("div",Me,[e("div",Ue,[e("button",{class:F(n.value==="general"?"btn-2":"btn-1"),type:"button",onClick:t[0]||(t[0]=s=>n.value="general")}," General Coupons ",2),e("button",{class:F(n.value==="affiliate"?"btn-2":"btn-1"),type:"button",onClick:t[1]||(t[1]=s=>n.value="affiliate")}," Affiliate Coupons ",2)]),e("button",{class:"btn-2",onClick:i},"Add Coupon")]),e("div",Ae,[d.value?(a(),u("div",Te,t[2]||(t[2]=[e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(a(),u("div",Se,[S($).coupons.length?(a(),u("table",qe,[t[3]||(t[3]=e("thead",null,[e("tr",{class:"text-left"},[e("th",{class:"px-4 py-2"},"Code"),e("th",{class:"px-4 py-2 text-center"},"Discount Type"),e("th",{class:"px-4 py-2 text-center"},"Discount Value"),e("th",{class:"px-4 py-2"},"Valid From"),e("th",{class:"px-4 py-2"},"Valid Until"),e("th",{class:"px-4 py-2 text-center"},"Actions")])],-1)),e("tbody",null,[(a(!0),u(z,null,h(S($).coupons.filter(s=>s.code_type===n.value),s=>(a(),u("tr",{key:s.id,class:"border-t"},[e("td",je,p(s.code),1),e("td",Fe,p(s.discount_type),1),e("td",Ee,[y(p(s.discount_value)+" ",1),s.discount_type==="percentage"?(a(),u("span",ze,"%")):(a(),u("span",he,"Tk"))]),e("td",Ne,p(D(s.valid_from)),1),e("td",Be,p(D(s.valid_until)),1),e("td",Ie,[e("div",Le,[e("button",{onClick:l=>x(s),class:"btn-1"},"Edit",8,Ge),w("",!0)])])]))),128))])])):(a(),u("p",Ke,"No coupons found"))]))]),c.value?(a(),T(te,{key:0,class:"z-40",onClose:b})):w("",!0),f.value?(a(),T(we,{key:1,class:"z-40",coupon:v.value,onClose:_},null,8,["coupon"])):w("",!0),C.value?(a(),T(ne,{key:2,class:"z-40",coupon:v.value,onClose:g},null,8,["coupon"])):w("",!0)]))}};export{Oe as default};

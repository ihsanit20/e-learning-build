import{u as U}from"./coupon-BwReyncE.js";import{r as o,o as q,e as l,f as n,g as e,x as E,q as f,z as c,a5 as S,F as z,h as I,t as r,i as T,p as D,A as V,w as N,G as j,B as G,C as L,v as B,n as F,j as A}from"./index-DobcMGJW.js";import{u as K}from"./user-D5Az-tSi.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R={class:"modal"},H={class:"max-w-4-xl bg-white p-4 rounded-lg space-y-2"},J=e("h2",{class:"text-xl font-semibold"},"Add Coupon",-1),O=e("hr",{class:"col-span-full"},null,-1),Q={class:"col-start-1"},W=e("option",{value:"general"},"General",-1),X=e("option",{value:"affiliate"},"Affiliate",-1),Y=[W,X],Z={key:0},ee=e("option",{value:""},"-- Select User --",-1),te=["value"],se={class:"col-start-1"},oe={key:1},le={class:"flex items-center"},ne={class:"w-10 h-full shrink-0 grow-0 flex justify-center items-center text-xl font-bold"},ae={class:"col-start-1"},ie=e("option",{value:"percentage"},"Percentage",-1),de=e("option",{value:"fixed"},"Fixed Amount",-1),ue=[ie,de],ce={class:"flex items-center"},re={class:"w-10 h-full shrink-0 grow-0 flex justify-center items-center text-xl font-bold"},pe=e("hr",{class:"col-span-full"},null,-1),_e={class:"flex gap-4 col-span-full"},ve=e("button",{type:"submit",class:"btn-2"},"Add",-1),me={__name:"AddCouponModal",emits:["close"],setup(y,{emit:C}){const p=C,m=U(),k=K(),_=o(""),u=o("general"),i=o(""),a=o("percentage"),h=o(0),b=o(0),x=o(""),$=o(""),M=async()=>{await m.createCoupon({code:_.value,code_type:u.value,affiliate_user_id:i.value,discount_type:a.value,discount_value:b.value,commission_value:h.value,valid_from:x.value,valid_until:$.value}),p("close")};return q(()=>{k.fetchUsers({affiliate_status:"Active"})}),(w,s)=>(l(),n("div",R,[e("div",H,[J,O,e("form",{onSubmit:E(M,["prevent"]),class:"grid md:grid-cols-2 gap-4"},[e("label",Q,[f(" Coupon Type "),c(e("select",{class:"input-1","onUpdate:modelValue":s[0]||(s[0]=t=>u.value=t)},Y,512),[[S,u.value]])]),u.value==="affiliate"?(l(),n("label",Z,[f(" User "),c(e("select",{class:"input-1","onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),required:""},[ee,(l(!0),n(z,null,I(T(k).users,t=>(l(),n("option",{key:t.id,value:t.id},r(`[${t.phone}] ${t.name}`),9,te))),128))],512),[[S,i.value]])])):D("",!0),e("label",se,[f(" Coupon code "),c(e("input",{class:"input-1","onUpdate:modelValue":s[2]||(s[2]=t=>_.value=t),placeholder:"Coupon code",required:""},null,512),[[V,_.value]])]),u.value==="affiliate"?(l(),n("label",oe,[f(" Commission value "),e("div",le,[c(e("input",{class:"input-1 text-right","onUpdate:modelValue":s[3]||(s[3]=t=>h.value=t),type:"number",required:""},null,512),[[V,h.value]]),e("div",ne,r(a.value==="percentage"?"%":"TK"),1)])])):D("",!0),e("label",ae,[f(" Discount Type "),c(e("select",{class:"input-1","onUpdate:modelValue":s[4]||(s[4]=t=>a.value=t)},ue,512),[[S,a.value]])]),e("label",null,[f(" Discount Amount "),e("div",ce,[c(e("input",{class:"input-1 text-right","onUpdate:modelValue":s[5]||(s[5]=t=>b.value=t),placeholder:"Discount value",type:"number",required:""},null,512),[[V,b.value]]),e("div",re,r(a.value==="percentage"?"%":"TK"),1)])]),e("label",null,[f(" Valid From "),c(e("input",{class:"input-1","onUpdate:modelValue":s[6]||(s[6]=t=>x.value=t),placeholder:"Valid from",type:"date",required:""},null,512),[[V,x.value]])]),e("label",null,[f(" Valid Until "),c(e("input",{class:"input-1","onUpdate:modelValue":s[7]||(s[7]=t=>$.value=t),placeholder:"Valid until",type:"date",required:""},null,512),[[V,$.value]])]),pe,e("div",_e,[ve,e("button",{type:"button",onClick:s[8]||(s[8]=t=>p("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},fe={class:"modal"},ye={class:"modal-content space-y-2"},he=e("h2",null,"Delete Coupon",-1),be={class:"flex gap-4"},xe={__name:"DeleteCouponModal",props:["coupon"],emits:["close"],setup(y,{emit:C}){const p=y,m=C,k=U(),_=async()=>{await k.deleteCoupon(p.coupon.id),m("close")};return(u,i)=>(l(),n("div",fe,[e("div",ye,[he,e("p",null,[f("Are you sure you want to delete the coupon "),e("strong",null,r(y.coupon.code),1),f("?")]),e("div",be,[e("button",{type:"button",class:"btn-2",onClick:_},"Delete"),e("button",{type:"button",onClick:i[0]||(i[0]=a=>m("close")),class:"btn-contrast"},"Cancel")])])]))}},g=y=>(G("data-v-e73471a2"),y=y(),L(),y),$e={class:"modal"},ge={class:"max-w-2xl z-50 card-bg p-4 md:p-8 space-y-2"},Ce=g(()=>e("h2",{class:"title-lg"},"Edit Coupon",-1)),ke={class:"flex flex-wrap justify-between items-center gap-2"},Ve={class:"border rounded-lg px-3 pt-2 pb-1 font-semibold text-black"},we={class:"capitalize border rounded-lg px-3 pt-2 pb-1"},De={key:0,class:"border rounded-lg px-3 pt-2 pb-1"},Me={class:"border pt-2 pb-1 rounded-lg px-2"},Ue=g(()=>e("p",{class:"md:hidden text-gray-500"},"Discount type:",-1)),Se={class:"flex justify-center items-center gap-3"},Ae=g(()=>e("p",{class:"hidden md:block text-gray-500"},"Discount type:",-1)),Te={class:"flex items-center cursor-pointer"},qe=g(()=>e("span",{class:"ml-2"},"Percentage",-1)),je={class:"flex items-center cursor-pointer"},Fe=g(()=>e("span",{class:"ml-2"},"Fixed Amount",-1)),Ee={class:"grid md:grid-cols-2 gap-3"},ze=g(()=>e("p",null,"Discount value",-1)),Ie={class:"relative"},Be={class:"absolute top-2 right-3"},Ne={key:0},Ge=g(()=>e("p",null,"Commission value",-1)),Le={class:"relative"},Ke={class:"absolute top-2 right-3"},Pe={class:"grid md:grid-cols-2 gap-3"},Re=g(()=>e("p",null,"Valid from",-1)),He=g(()=>e("p",null,"Valid to",-1)),Je={class:"flex justify-center gap-4"},Oe=g(()=>e("button",{type:"submit",class:"btn-2"},"Save",-1)),Qe={__name:"EditCouponModal",props:["coupon"],emits:["close"],setup(y,{emit:C}){const p=y,m=C,k=U(),_=o(""),u=o("general"),i=o(""),a=o("percentage"),h=o(0),b=o(0),x=o(""),$=o(""),M=t=>B(new Date(t),"yyyy-MM-dd"),w=t=>{_.value=t.code,u.value=t.code_type,i.value=t.affiliate_user_id,a.value=t.discount_type,h.value=t.discount_value,b.value=t.commission_value,x.value=M(t.valid_from),$.value=M(t.valid_until)};N(p.coupon,t=>{w(t)}),q(()=>{p.coupon&&w(p.coupon)});const s=async()=>{await k.updateCoupon(p.coupon.id,{discount_type:a.value,discount_value:h.value,commission_value:b.value,valid_from:x.value,valid_until:$.value}),m("close")};return(t,d)=>(l(),n("div",$e,[e("div",ge,[Ce,e("form",{onSubmit:E(s,["prevent"]),class:"space-y-4"},[e("div",ke,[e("p",Ve,r(_.value),1),e("p",we,"Type: "+r(u.value),1),u.value==="affiliate"?(l(),n("p",De," User ID: "+r(i.value),1)):D("",!0)]),e("div",Me,[Ue,e("div",Se,[Ae,e("label",Te,[c(e("input",{type:"radio","onUpdate:modelValue":d[0]||(d[0]=v=>a.value=v),value:"percentage",class:"form-radio"},null,512),[[j,a.value]]),qe]),e("label",je,[c(e("input",{type:"radio","onUpdate:modelValue":d[1]||(d[1]=v=>a.value=v),value:"fixed",class:"form-radio"},null,512),[[j,a.value]]),Fe])])]),e("div",Ee,[e("div",null,[ze,e("div",Ie,[c(e("input",{class:"input-1","onUpdate:modelValue":d[2]||(d[2]=v=>h.value=v),placeholder:"Discount value",type:"number",required:""},null,512),[[V,h.value]]),e("span",Be,r(a.value==="percentage"?"%":"Tk"),1)])]),u.value==="affiliate"?(l(),n("div",Ne,[Ge,e("div",Le,[c(e("input",{class:"input-1","onUpdate:modelValue":d[3]||(d[3]=v=>b.value=v),placeholder:"Commission value",type:"number",required:""},null,512),[[V,b.value]]),e("span",Ke,r(a.value==="percentage"?"%":"Tk"),1)])])):D("",!0)]),e("div",Pe,[e("div",null,[Re,c(e("input",{class:"input-1","onUpdate:modelValue":d[4]||(d[4]=v=>x.value=v),placeholder:"Valid from",type:"date",required:""},null,512),[[V,x.value]])]),e("div",null,[He,c(e("input",{class:"input-1","onUpdate:modelValue":d[5]||(d[5]=v=>$.value=v),placeholder:"Valid until",type:"date",required:""},null,512),[[V,$.value]])])]),e("div",Je,[Oe,e("button",{type:"button",onClick:d[6]||(d[6]=v=>m("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},We=P(Qe,[["__scopeId","data-v-e73471a2"]]),Xe={class:"my-container space-y-2"},Ye={class:"flex justify-between"},Ze={class:"flex items-center gap-4"},et={class:"card-bg p-4"},tt={key:0,class:"flex justify-center items-center"},st=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ot=[st],lt={key:1},nt={key:0,class:"table-auto w-full"},at=e("thead",null,[e("tr",{class:"text-left"},[e("th",{class:"px-4 py-2"},"Code"),e("th",{class:"px-4 py-2 text-center"},"Discount Type"),e("th",{class:"px-4 py-2 text-center"},"Discount Value"),e("th",{class:"px-4 py-2"},"Valid From"),e("th",{class:"px-4 py-2"},"Valid Until"),e("th",{class:"px-4 py-2 text-center"},"Actions")])],-1),it={class:"px-4 py-2"},dt={class:"px-4 py-2 text-center"},ut={class:"px-4 py-2 text-center"},ct={key:0},rt={key:1},pt={class:"px-4 py-2"},_t={class:"px-4 py-2"},vt={class:"px-4 py-2"},mt={class:"flex justify-center gap-2"},ft=["onClick"],yt={key:1,class:"text-red-500"},gt={__name:"CouponList",setup(y){const C=U(),p=o(!1),m=o(!1),k=o(!1),_=o(null),u=o(!0),i=o("general"),a=()=>p.value=!0,h=()=>p.value=!1,b=w=>{_.value=w,m.value=!0},x=()=>m.value=!1,$=()=>k.value=!1,M=w=>B(new Date(w),"dd-MMM-yyyy");return q(async()=>{try{await C.fetchCoupons()}finally{u.value=!1}}),(w,s)=>(l(),n("div",Xe,[e("div",Ye,[e("div",Ze,[e("button",{class:F(i.value==="general"?"btn-2":"btn-1"),type:"button",onClick:s[0]||(s[0]=t=>i.value="general")}," General Coupons ",2),e("button",{class:F(i.value==="affiliate"?"btn-2":"btn-1"),type:"button",onClick:s[1]||(s[1]=t=>i.value="affiliate")}," Affiliate Coupons ",2)]),e("button",{class:"btn-2",onClick:a},"Add Coupon")]),e("div",et,[u.value?(l(),n("div",tt,ot)):(l(),n("div",lt,[T(C).coupons.length?(l(),n("table",nt,[at,e("tbody",null,[(l(!0),n(z,null,I(T(C).coupons.filter(t=>t.code_type===i.value),t=>(l(),n("tr",{key:t.id,class:"border-t"},[e("td",it,r(t.code),1),e("td",dt,r(t.discount_type),1),e("td",ut,[f(r(t.discount_value)+" ",1),t.discount_type==="percentage"?(l(),n("span",ct,"%")):(l(),n("span",rt,"Tk"))]),e("td",pt,r(M(t.valid_from)),1),e("td",_t,r(M(t.valid_until)),1),e("td",vt,[e("div",mt,[e("button",{onClick:d=>b(t),class:"btn-1"},"Edit",8,ft),D("",!0)])])]))),128))])])):(l(),n("p",yt,"No coupons found"))]))]),p.value?(l(),A(me,{key:0,class:"z-40",onClose:h})):D("",!0),m.value?(l(),A(We,{key:1,class:"z-40",coupon:_.value,onClose:x},null,8,["coupon"])):D("",!0),k.value?(l(),A(xe,{key:2,class:"z-40",coupon:_.value,onClose:$},null,8,["coupon"])):D("",!0)]))}};export{gt as default};

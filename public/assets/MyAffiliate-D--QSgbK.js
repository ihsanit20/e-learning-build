import{d as U,o as j,e as s,f as l,g as e,q as m,t as r,x as C,i as _,F as h,h as w,B as V,C as D,k as K,r as g,z as k,A as L,a5 as F,p as I,j as z}from"./index-CXrK0xpE.js";import{u as q}from"./coupon-IBocXKte.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const B=d=>(V("data-v-c0b8d3e2"),d=d(),D(),d),Y={class:"bg-white border rounded-lg w-full max-w-3xl p-4 max-h-[80vh]"},G={class:"flex justify-between items-center gap-2"},H={class:"mb-0"},R={class:"border px-3 pt-2 pb-1 rounded-lg"},J=B(()=>e("hr",{class:"my-3"},null,-1)),O={key:0},Q=B(()=>e("thead",null,[e("tr",null,[e("th",null,"Date"),e("th",null,"Course"),e("th",{class:"text-right"},"Amount")])],-1)),W={class:"text-right"},X={key:1,class:"flex justify-center items-center py-20 text-red-600"},Z={__name:"CouponEarnListModal",props:{code:String,onClose:Function},setup(d){const u=d,p=q(),v=U(()=>{const f=p.userEarnings.reduce((c,i)=>c+parseInt(i.commission_amount),0);return parseInt(f)});return j(()=>{p.fetchUserEarnings({code:u.code})}),(f,c)=>{var i,b;return s(),l("div",{onClick:c[1]||(c[1]=C((...a)=>d.onClose&&d.onClose(...a),["self"])),class:"fixed inset-0 w-full h-full flex justify-center pt-16 bg-black/40 z-[99999999]"},[e("div",Y,[e("div",G,[e("h2",H,[m(" Earnings for Code: "),e("b",R,r(d.code),1)]),e("i",{onClick:c[0]||(c[0]=C((...a)=>d.onClose&&d.onClose(...a),["self"])),class:"fal fa-window-close text-3xl cursor-pointer text-red-500"})]),J,(b=(i=_(p))==null?void 0:i.userEarnings)!=null&&b.length?(s(),l("div",O,[e("p",null,[m(" Total Earnings: "),e("strong",null,r(v.value)+" TK",1)]),e("table",null,[Q,e("tbody",null,[(s(!0),l(h,null,w(_(p).userEarnings,a=>{var x;return s(),l("tr",{key:a.id},[e("td",null,r(a.date),1),e("td",null,r((x=a==null?void 0:a.course)==null?void 0:x.title),1),e("td",null,[e("div",W,r(parseInt(a.commission_amount))+" TK",1)])])}),128))])])])):(s(),l("div",X," No earnings found for this promo code. "))])])}}},ee=P(Z,[["__scopeId","data-v-c0b8d3e2"]]),te={class:"max-w-4xl mx-auto p-4"},oe=e("h1",{class:"title-xl"},"My Affiliate",-1),se={key:0,class:"py-8"},le={class:"py-4"},ne={key:0},ie=e("h3",{class:"text-xl font-semibold"},"Affiliate Form",-1),ae=e("hr",{class:"my-3"},null,-1),de={class:"grid md:grid-cols-2 gap-4"},ce={class:"col-span-full"},re=e("option",{value:""},"-- Select Year --",-1),ue=["value"],pe=e("option",{value:""},"-- Select Group --",-1),_e=e("option",{value:"Science"},"Science",-1),fe=e("option",{value:"Arts"},"Arts",-1),me=e("option",{value:"Commerce"},"Commerce",-1),he=[pe,_e,fe,me],ve=e("hr",{class:"my-3"},null,-1),be=e("div",{class:"flex justify-end items-center"},[e("button",{class:"btn-2",type:"submit"},"Submit")],-1),xe={key:1,class:"py-4"},ye=e("h2",{class:"text-xl font-semibold"},"Promo Codes",-1),ge={class:"flex flex-wrap items-center gap-3"},Ce={class:"flex gap-3 items-center"},ke=["onClick"],we=["value"],Se=["onClick"],$e=e("i",{class:"far fa-copy"},null,-1),Ae=[$e],Me={class:"ml-auto flex gap-3 items-center"},Te={class:"border px-3 pt-2 pb-1 rounded-lg text-sm md:text-base"},Fe={class:"border px-3 pt-2 pb-1 rounded-lg text-sm md:text-base"},Ie={key:1,class:"text-red-600 py-4 text-center"},Ee={__name:"MyAffiliate",setup(d){const u=K(),p=q(),v=g(""),f=g(!1),c=g(!1),i=g({institute:"",session:"",group:""});j(()=>{p.fetchUserCoupons()});const b=n=>{n&&(v.value=n,f.value=!0)},a=async()=>{const n=await u.applyAffiliate({additional_info:i.value});u.user.affiliate_status=n==null?void 0:n.affiliate_status,u.user.additional_info=n==null?void 0:n.additional_info,c.value=!1},x=Array.from({length:51},(n,o)=>new Date().getFullYear()-o);function E(n){if(navigator.clipboard&&typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(n).then(()=>alert("Promo code link copied to clipboard!")).catch(o=>console.error("Failed to copy: ",o));else{const o=document.createElement("input");o.value=n,document.body.appendChild(o),o.select();try{document.execCommand("copy"),alert("Promo code link copied to clipboard!")}catch(y){console.error("Fallback copy failed: ",y)}document.body.removeChild(o)}}return(n,o)=>{var y,S,$,A,M,T;return s(),l(h,null,[e("div",te,[oe,_(u).loading?(s(),l("div",se,"Loading...")):(s(),l(h,{key:1},[e("div",le,[m(" Affiliate Status: "),e("b",null,r(((S=(y=_(u))==null?void 0:y.user)==null?void 0:S.affiliate_status)??"N/A"),1)]),(A=($=_(u))==null?void 0:$.user)!=null&&A.affiliate_status?(s(),l("div",xe,[ye,(T=(M=_(p))==null?void 0:M.userCoupons)!=null&&T.length?(s(!0),l(h,{key:0},w(_(p).userCoupons,t=>(s(),l("div",{key:t.id,class:"bg-white p-3 rounded-lg mb-3"},[e("div",ge,[e("div",Ce,[e("button",{onClick:N=>b(t.code),class:"px-3 pt-2.5 pb-2 border rounded-lg btn-2",type:"button"}," Earnings ",8,ke),e("input",{class:"input-1 text-black w-40 text-center",type:"text",value:t.code,readonly:""},null,8,we),e("button",{class:"shrink-0 grow-0 border rounded-lg px-3 pt-2 pb-1.5",type:"button",onClick:N=>E(t.code)},Ae,8,Se)]),e("div",Me,[e("div",Te," Discount: "+r(t.discount_value)+r(t.discount_type==="percentage"?"%":"TK"),1),e("div",Fe," Commission: "+r(t.commission_value)+r(t.discount_type==="percentage"?"%":"TK"),1)])])]))),128)):(s(),l("div",Ie,"-- Coupon Code Not Found! --"))])):(s(),l("div",ne,[e("button",{onClick:o[0]||(o[0]=t=>c.value=!0),type:"button",class:"btn-2"}," Request for Affiliate "),c.value?(s(),l("div",{key:0,onClick:o[4]||(o[4]=C(t=>c.value=!1,["self"])),class:"fixed inset-0 flex pt-16 justify-center w-full h-full bg-black/40 z-[999999]"},[e("form",{onSubmit:C(a,["prevent"]),class:"bg-white p-4 rounded-lg border w-full max-w-xl max-h-[80vh] overflow-y-auto mb-auto"},[ie,ae,e("div",de,[e("label",ce,[m(" College / University "),k(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>i.value.institute=t),type:"text",class:"input-1",required:""},null,512),[[L,i.value.institute]])]),e("label",null,[m(" HSC Batch (Year) "),k(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>i.value.session=t),class:"input-1 text-center",required:""},[re,(s(!0),l(h,null,w(_(x),t=>(s(),l("option",{key:t,value:t},r(t),9,ue))),128))],512),[[F,i.value.session]])]),e("label",null,[m(" HSC Group "),k(e("select",{"onUpdate:modelValue":o[3]||(o[3]=t=>i.value.group=t),class:"input-1 text-center",required:""},he,512),[[F,i.value.group]])])]),ve,be],32)])):I("",!0)]))],64))]),f.value?(s(),z(ee,{key:0,code:v.value,onClose:()=>f.value=!1},null,8,["code","onClose"])):I("",!0)],64)}}};export{Ee as default};

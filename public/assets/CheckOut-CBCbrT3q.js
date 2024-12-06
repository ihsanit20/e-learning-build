import{b as D,c as B,u as M,r as d,o as E,d as j,e as n,f as c,g as e,t as u,q as f,z as x,A as S,p as y,F as V,G as $,i as g,v as A}from"./index-CXrK0xpE.js";import{u as K}from"./coupon-IBocXKte.js";import{u as N}from"./purchase-Dq37w6Im.js";const R="/assets/bkash_payment_logo-CHh0TPdw.png",I={class:"my-container py-4"},L={key:0,class:"space-y-4"},U=e("h1",{class:"title-xl text-center"},"Checkout Page",-1),z={class:"grid md:grid-cols-2 gap-4"},q={class:"card-bg p-4 flex gap-4"},G=["src"],H={class:"space-y-2"},O={class:"title-xl"},J={class:"flex gap-4 justify-between"},Q={class:"font-bold text-sky-600"},W={key:0},X={class:"font-bold text-sky-600"},Y={key:1,class:"bg-pink-50 px-3 rounded-full"},Z={class:"font-bold text-pink-600"},ee={class:"card-bg p-4 space-y-3"},te=e("h4",{class:"title-lg text-center"},"Payment Details",-1),se={class:"space-y-1"},oe={class:"flex justify-between"},ae=e("p",null,"Course Fee",-1),le={class:"flex justify-between"},ne=e("p",null,"Promo Discount",-1),ce=e("hr",null,null,-1),ue={class:"flex justify-between font-bold"},re=e("p",null,"Total",-1),ie=e("hr",{class:"border-black"},null,-1),de=e("p",{class:"title-lg text-center"},"Enter Coupon Code",-1),pe={key:0,class:"flex justify-center items-center flex-wrap"},_e=e("span",{class:"text-green-700"}," ✓ Applied Code: ",-1),ve={class:"border rounded px-2 pt-1.5 pb-0.5 mx-2"},he={key:1,class:"flex gap-2"},ye=["disabled"],me={key:0,class:"animate-spin border size-4 rounded-full"},fe={key:2,class:"error text-rose-600"},ke=e("hr",{class:"border-black"},null,-1),be=e("p",{class:"title-lg text-center"},"Select payment method",-1),xe={class:"mt-2"},ge={class:"flex items-center space-x-4"},Ce=e("span",null,[e("img",{class:"w-52",src:R,alt:"Bkash Payment"})],-1),we={key:4,class:"mt-2 text-red-600 font-bold text-center text-xl"},Fe={key:1},Me={__name:"CheckOut",setup(Pe){const C=D(),k=B(),r=M(),m=N(),w=K(),b=C.params.id,s=d(null),i=d(null),p=d(!1),v=d("bkash_payment"),h=d(""),o=d(null);E(async()=>{var t;try{if(await r.fetchCourse(b),s.value=r.course,(t=r==null?void 0:r.course)!=null&&t.is_purchased)return k.replace(`/my/course/${r==null?void 0:r.course.id}`)}catch(a){i.value=a.message||"Failed to fetch course"}});const _=j(()=>{if(!s.value)return 0;let t=0;return o.value&&(o.value.discount_type==="percentage"?t=s.value.price*o.value.discount_value/100:t=o.value.discount_value),t}),F=async()=>{p.value=!0;try{const t=await w.fetchCouponByCode(h.value);if(console.log(t),!t)throw new Error("Invalid coupon code");o.value=t,i.value=null,console.log("Coupon applied:",o.value),p.value=!1}catch(t){i.value=t.message||"Invalid coupon code",console.error("Error applying coupon:",i.value),o.value=null,p.value=!1}h.value=""},P=async()=>{var t,a;try{if(v.value==="bkash_payment"){const l=await m.createPayment(b,{coupon_code:(t=o.value)==null?void 0:t.code});console.log("Bkash payment response:",l),window.location=(a=l==null?void 0:l.data)==null?void 0:a.bkashURL}else v.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),k.push("/my/course"))}catch(l){i.value=l.message||"Failed to initiate payment",console.error("Error during checkout:",i.value)}},T=t=>A(new Date(t),"dd-MMM-yyyy");return(t,a)=>(n(),c("div",I,[s.value?(n(),c("div",L,[U,e("div",z,[e("div",q,[e("div",null,[e("img",{src:s.value.thumbnail,alt:""},null,8,G)]),e("div",H,[e("h1",O,u(s.value.title),1),e("div",J,[e("p",null,[f(" Course Fee: "),e("span",Q,u(s.value.price>0?`${s.value.price} TK`:"Free"),1)]),s.value.course_type==="Live Course"?(n(),c("p",W,[f(" Start Date: "),e("span",X,u(T(s.value.start_date)),1)])):(n(),c("p",Y,[e("span",Z,u(s.value.course_type),1)]))])])]),e("div",ee,[te,e("div",se,[e("div",oe,[ae,e("p",null,u(s.value.price>0?`${s.value.price} TK`:"Free"),1)]),e("div",le,[ne,e("p",null,u(_.value),1)]),ce,e("div",ue,[re,e("p",null,u(s.value.price-_.value)+" TK",1)])]),ie,de,o.value?(n(),c("div",pe,[_e,e("b",ve,u(o.value.code),1),e("i",{onClick:a[0]||(a[0]=l=>o.value=null),class:"fas fa-trash text-red-600 ml-2 cursor-pointer"})])):(n(),c("div",he,[x(e("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=l=>h.value=l),class:"input-1",placeholder:"Enter coupon code"},null,512),[[S,h.value]]),e("button",{onClick:F,class:"btn-2",disabled:p.value},[f(" Apply "),p.value?(n(),c("span",me,".")):y("",!0)],8,ye)])),i.value?(n(),c("div",fe,u(i.value),1)):y("",!0),ke,s.value.price-_.value>0?(n(),c(V,{key:3},[be,e("div",xe,[e("label",ge,[x(e("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=l=>v.value=l),value:"bkash_payment"},null,512),[[$,v.value]]),Ce])])],64)):y("",!0),e("button",{class:"btn-2 mt-4",onClick:P},u(s.value.price-_.value>0?`Pay Now (${s.value.price-_.value} TK)`:"Checkout (Fee)"),1),g(m).error?(n(),c("div",we,u(g(m).error),1)):y("",!0)])])])):(n(),c("div",Fe,"Loading..."))]))}};export{Me as default};

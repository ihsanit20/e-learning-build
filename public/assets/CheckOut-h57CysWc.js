import{b as S,k as B,u as D,r,o as E,c as M,d as i,e as d,t as l,f as e,z as f,p as h,v as V,E as g,h as k,q as j,C as F}from"./index-CT1U0GKd.js";import{u as K}from"./purchase-Ck0_iseT.js";import{u as N}from"./coupon-Z6eqj6qp.js";const R="/assets/bkash_payment_logo-CHh0TPdw.png",U={class:"my-container py-4"},I={key:0,class:"error"},A={key:1,class:"space-y-4"},L=e("h1",{class:"title-xl text-center"},"Checkout Page",-1),q={class:"grid md:grid-cols-2 gap-4"},z={class:"card-bg p-4 flex gap-4"},H=["src"],O={class:"space-y-2"},G={class:"title-xl"},J={class:"flex gap-4 justify-between"},Q={class:"font-bold text-sky-600"},W={class:"font-bold text-sky-600"},X={class:"card-bg p-4 space-y-2"},Y=e("h4",{class:"title-lg text-center"},"Payment Details",-1),Z={class:"space-y-1"},$={class:"flex justify-between"},ee=e("p",null,"Course Fee",-1),te={class:"flex justify-between"},se=e("p",null,"Promo Discount",-1),oe=e("hr",null,null,-1),ae={class:"flex justify-between font-bold"},le=e("p",null,"Total",-1),ne=e("p",{class:"title-lg text-center"},"Enter Coupon Code",-1),ce={class:"flex gap-2"},ue=e("p",{class:"title-lg text-center"},"Select payment method",-1),re={class:"mt-2"},ie={class:"flex items-center space-x-4"},de=e("span",null,[e("img",{class:"w-52",src:R,alt:"Bkash Payment"})],-1),pe={class:"flex items-center space-x-4 mt-2"},_e=e("span",null,"Bank Transfer",-1),ve={key:0,class:"mt-2 text-red-600 font-bold text-center text-xl"},he={key:2},ke={__name:"CheckOut",setup(me){const x=S(),b=B(),m=D(),p=K(),C=N(),y=x.params.id,s=r(null),n=r(null),u=r("bkash_payment"),_=r(""),c=r(null);E(async()=>{try{await m.fetchCourse(y),s.value=m.course,console.log("Course fetched:",s.value)}catch(t){n.value=t.message||"Failed to fetch course"}});const v=M(()=>{if(!s.value)return 0;let t=0;return c.value&&(c.value.discount_type==="percentage"?t=s.value.price*c.value.discount_value/100:t=c.value.discount_value),t}),w=async()=>{try{const t=await C.fetchCouponByCode(_.value);if(console.log(t),!t)throw new Error("Invalid coupon code");c.value=t,n.value=null,console.log("Coupon applied:",c.value)}catch(t){n.value=t.message||"Invalid coupon code",console.error("Error applying coupon:",n.value),c.value=null}},T=async()=>{var t,a;try{if(u.value==="bkash_payment"){const o=await p.createPayment(y,{coupon_code:(t=c.value)==null?void 0:t.code});console.log("Bkash payment response:",o),window.location=(a=o==null?void 0:o.data)==null?void 0:a.bkashURL}else u.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),b.push("/my/course"))}catch(o){n.value=o.message||"Failed to initiate payment",console.error("Error during checkout:",n.value)}},P=t=>F(new Date(t),"dd-MMM-yyyy");return(t,a)=>(i(),d("div",U,[n.value?(i(),d("div",I,l(n.value),1)):s.value?(i(),d("div",A,[L,e("div",q,[e("div",z,[e("div",null,[e("img",{src:s.value.thumbnail,alt:""},null,8,H)]),e("div",O,[e("h1",G,l(s.value.title),1),e("div",J,[e("p",null,[f(" Course Fee: "),e("span",Q,l(s.value.price)+" TK",1)]),e("p",null,[f(" Start Date: "),e("span",W,l(P(s.value.start_date)),1)])])])]),e("div",X,[Y,e("div",Z,[e("div",$,[ee,e("p",null,l(s.value.price)+" TK",1)]),e("div",te,[se,e("p",null,l(v.value),1)]),oe,e("div",ae,[le,e("p",null,l(s.value.price-v.value)+" TK",1)])]),ne,e("div",ce,[h(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>_.value=o),class:"input-1",placeholder:"Enter coupon code"},null,512),[[V,_.value]]),e("button",{onClick:w,class:"btn-2"},"Apply")]),ue,e("div",re,[e("label",ie,[h(e("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=o=>u.value=o),value:"bkash_payment"},null,512),[[g,u.value]]),de]),e("label",pe,[h(e("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=o=>u.value=o),value:"bank_transfer"},null,512),[[g,u.value]]),_e])]),e("button",{class:"btn-2 mt-4",onClick:T},"Pay Now ("+l(s.value.price-v.value)+" TK)",1),k(p).error?(i(),d("div",ve,l(k(p).error),1)):j("",!0)])])])):(i(),d("div",he,"Loading..."))]))}};export{ke as default};

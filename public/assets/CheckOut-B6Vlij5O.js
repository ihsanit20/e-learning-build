import{b as T,k as B,u as D,r,o as E,c as M,d as i,e as d,t as c,f as e,z as f,p as v,v as V,E as g,h as k,q as j,C as F}from"./index-C9dQhS5a.js";import{u as N}from"./purchase-D5mTOwcY.js";import{u as R}from"./coupon-Cvt-Hxo3.js";const U="/assets/bkash_payment_logo-CHh0TPdw.png",I={class:"my-container py-4"},K={key:0,class:"error"},A={key:1,class:"space-y-4"},L=e("h1",{class:"title-xl text-center"},"Checkout Page",-1),q={class:"grid md:grid-cols-2 gap-4"},z={class:"card-bg p-4 flex gap-4"},H=["src"],O={class:"space-y-2"},G={class:"title-xl"},J={class:"flex gap-4 justify-between"},Q={class:"font-bold text-sky-600"},W={class:"font-bold text-sky-600"},X={class:"card-bg p-4 space-y-2"},Y=e("h4",{class:"title-lg text-center"},"Payment Details",-1),Z={class:"space-y-1"},$={class:"flex justify-between"},ee=e("p",null,"Course Fee",-1),te={class:"flex justify-between"},se=e("p",null,"Promo Discount",-1),oe=e("hr",null,null,-1),ae={class:"flex justify-between font-bold"},le=e("p",null,"Total",-1),ne=e("p",{class:"title-lg text-center"},"Enter Coupon Code",-1),ce={class:"flex gap-2"},ue=e("p",{class:"title-lg text-center"},"Select payment method",-1),re={class:"mt-2"},ie={class:"flex items-center space-x-4"},de=e("span",null,[e("img",{class:"w-52",src:U,alt:"Bkash Payment"})],-1),pe={class:"flex items-center space-x-4 mt-2"},_e=e("span",null,"Bank Transfer",-1),ve={key:0,class:"mt-2 text-red-600 font-bold text-center text-xl"},he={key:2},ke={__name:"CheckOut",setup(me){const x=T(),b=B(),h=D(),p=N(),C=R(),m=x.params.id,o=r(null),l=r(null),u=r("bkash_payment"),_=r(""),n=r(null);E(async()=>{try{await h.fetchCourse(m),o.value=h.course,console.log("Course fetched:",o.value)}catch(t){l.value=t.message||"Failed to fetch course"}});const y=M(()=>{if(!o.value)return 0;let t=0;return n.value&&(n.value.discount_type==="percentage"?t=o.value.price*n.value.discount_value/100:t=n.value.discount_value),t}),w=async()=>{try{const t=await C.fetchCouponByCode(_.value);if(console.log(t),!t)throw new Error("Invalid coupon code");n.value=t,l.value=null,console.log("Coupon applied:",n.value)}catch(t){l.value=t.message||"Invalid coupon code",console.error("Error applying coupon:",l.value),n.value=null}},P=async()=>{var t,a;try{if(u.value==="bkash_payment"){const s=await p.createPayment(m,{coupon_code:(t=n.value)==null?void 0:t.code});console.log("Bkash payment response:",s),window.location=(a=s==null?void 0:s.data)==null?void 0:a.bkashURL}else u.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),b.push("/my/course"))}catch(s){l.value=s.message||"Failed to initiate payment",console.error("Error during checkout:",l.value)}},S=t=>F(new Date(t),"dd-MMM-yyyy");return(t,a)=>(i(),d("div",I,[l.value?(i(),d("div",K,c(l.value),1)):o.value?(i(),d("div",A,[L,e("div",q,[e("div",z,[e("div",null,[e("img",{src:o.value.thumbnail,alt:""},null,8,H)]),e("div",O,[e("h1",G,c(o.value.title),1),e("div",J,[e("p",null,[f(" Course Fee: "),e("span",Q,c(o.value.price)+" TK",1)]),e("p",null,[f(" Start Date: "),e("span",W,c(S(o.value.start_date)),1)])])])]),e("div",X,[Y,e("div",Z,[e("div",$,[ee,e("p",null,c(o.value.price)+" TK",1)]),e("div",te,[se,e("p",null,c(y.value),1)]),oe,e("div",ae,[le,e("p",null,c(o.value.price-y.value)+" TK",1)])]),ne,e("div",ce,[v(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>_.value=s),class:"input-1",placeholder:"Enter coupon code"},null,512),[[V,_.value]]),e("button",{onClick:w,class:"btn-2"},"Apply")]),ue,e("div",re,[e("label",ie,[v(e("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=s=>u.value=s),value:"bkash_payment"},null,512),[[g,u.value]]),de]),e("label",pe,[v(e("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=s=>u.value=s),value:"bank_transfer"},null,512),[[g,u.value]]),_e])]),e("button",{class:"btn-2 mt-4",onClick:P},"Pay Now"),k(p).error?(i(),d("div",ve,c(k(p).error),1)):j("",!0)])])])):(i(),d("div",he,"Loading..."))]))}};export{ke as default};
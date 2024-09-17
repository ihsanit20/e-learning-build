import{b as T,c as D,u as B,r as p,o as M,d as E,e as r,f as i,t as a,g as e,q as f,z as g,A as S,F as V,G as j,p as k,i as x,v as K}from"./index-C2bsUYJh.js";import{u as N}from"./purchase-PDB1EIam.js";import{u as R}from"./coupon-C4NQkK8_.js";const $="/assets/bkash_payment_logo-CHh0TPdw.png",A={class:"my-container py-4"},I={key:0,class:"error"},L={key:1,class:"space-y-4"},U=e("h1",{class:"title-xl text-center"},"Checkout Page",-1),q={class:"grid md:grid-cols-2 gap-4"},z={class:"card-bg p-4 flex gap-4"},G=["src"],H={class:"space-y-2"},O={class:"title-xl"},J={class:"flex gap-4 justify-between"},Q={class:"font-bold text-sky-600"},W={key:0},X={class:"font-bold text-sky-600"},Y={key:1,class:"bg-pink-50 px-3 rounded-full"},Z={class:"font-bold text-pink-600"},ee={class:"card-bg p-4 space-y-2"},te=e("h4",{class:"title-lg text-center"},"Payment Details",-1),se={class:"space-y-1"},oe={class:"flex justify-between"},ae=e("p",null,"Course Fee",-1),le={class:"flex justify-between"},ne=e("p",null,"Promo Discount",-1),ce=e("hr",null,null,-1),ue={class:"flex justify-between font-bold"},re=e("p",null,"Total",-1),ie=e("p",{class:"title-lg text-center"},"Enter Coupon Code",-1),de={class:"flex gap-2"},pe=e("p",{class:"title-lg text-center"},"Select payment method",-1),_e={class:"mt-2"},ve={class:"flex items-center space-x-4"},he=e("span",null,[e("img",{class:"w-52",src:$,alt:"Bkash Payment"})],-1),ye={key:1,class:"mt-2 text-red-600 font-bold text-center text-xl"},me={key:2},be={__name:"CheckOut",setup(fe){const b=T(),y=D(),n=B(),v=N(),C=R(),m=b.params.id,s=p(null),c=p(null),_=p("bkash_payment"),h=p(""),u=p(null);M(async()=>{var t;try{if(await n.fetchCourse(m),s.value=n.course,(t=n==null?void 0:n.course)!=null&&t.is_purchased)return y.replace(`/my/course/${n==null?void 0:n.course.id}`)}catch(l){c.value=l.message||"Failed to fetch course"}});const d=E(()=>{if(!s.value)return 0;let t=0;return u.value&&(u.value.discount_type==="percentage"?t=s.value.price*u.value.discount_value/100:t=u.value.discount_value),t}),w=async()=>{try{const t=await C.fetchCouponByCode(h.value);if(console.log(t),!t)throw new Error("Invalid coupon code");u.value=t,c.value=null,console.log("Coupon applied:",u.value)}catch(t){c.value=t.message||"Invalid coupon code",console.error("Error applying coupon:",c.value),u.value=null}},F=async()=>{var t,l;try{if(_.value==="bkash_payment"){const o=await v.createPayment(m,{coupon_code:(t=u.value)==null?void 0:t.code});console.log("Bkash payment response:",o),window.location=(l=o==null?void 0:o.data)==null?void 0:l.bkashURL}else _.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),y.push("/my/course"))}catch(o){c.value=o.message||"Failed to initiate payment",console.error("Error during checkout:",c.value)}},P=t=>K(new Date(t),"dd-MMM-yyyy");return(t,l)=>(r(),i("div",A,[c.value?(r(),i("div",I,a(c.value),1)):s.value?(r(),i("div",L,[U,e("div",q,[e("div",z,[e("div",null,[e("img",{src:s.value.thumbnail,alt:""},null,8,G)]),e("div",H,[e("h1",O,a(s.value.title),1),e("div",J,[e("p",null,[f(" Course Fee: "),e("span",Q,a(s.value.price>0?`${s.value.price} TK`:"Free"),1)]),s.value.course_type==="Live Course"?(r(),i("p",W,[f(" Start Date: "),e("span",X,a(P(s.value.start_date)),1)])):(r(),i("p",Y,[e("span",Z,a(s.value.course_type),1)]))])])]),e("div",ee,[te,e("div",se,[e("div",oe,[ae,e("p",null,a(s.value.price>0?`${s.value.price} TK`:"Free"),1)]),e("div",le,[ne,e("p",null,a(d.value),1)]),ce,e("div",ue,[re,e("p",null,a(s.value.price-d.value)+" TK",1)])]),ie,e("div",de,[g(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=o=>h.value=o),class:"input-1",placeholder:"Enter coupon code"},null,512),[[S,h.value]]),e("button",{onClick:w,class:"btn-2"},"Apply")]),s.value.price-d.value>0?(r(),i(V,{key:0},[pe,e("div",_e,[e("label",ve,[g(e("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=o=>_.value=o),value:"bkash_payment"},null,512),[[j,_.value]]),he])])],64)):k("",!0),e("button",{class:"btn-2 mt-4",onClick:F},a(s.value.price-d.value>0?`Pay Now (${s.value.price-d.value} TK)`:"Checkout (Fee)"),1),x(v).error?(r(),i("div",ye,a(x(v).error),1)):k("",!0)])])])):(r(),i("div",me,"Loading..."))]))}};export{be as default};

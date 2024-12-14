import{b as T,c as B,u as M,r as c,o as E,d as j,e as n,f as u,g as t,t as r,s as k,z as g,A as S,q as f,F as V,D as $,i as h,x as A}from"./index-qZuTYeIO.js";import{u as K}from"./coupon-B_l72YhP.js";import{u as N}from"./purchase-tPb0zvPL.js";const R="/assets/bkash_payment_logo-CHh0TPdw.png",I={class:"my-container py-4"},L={key:0,class:"space-y-4"},U={class:"grid md:grid-cols-2 gap-4"},z={class:"card-bg p-4 flex gap-4"},q=["src"],H={class:"space-y-2"},O={class:"title-xl"},G={class:"flex gap-4 justify-between"},J={class:"font-bold text-sky-600"},Q={key:0},W={class:"font-bold text-sky-600"},X={key:1,class:"bg-pink-50 px-3 rounded-full"},Y={class:"font-bold text-pink-600"},Z={class:"card-bg p-4 space-y-3"},ee={class:"space-y-1"},te={class:"flex justify-between"},se={class:"flex justify-between"},oe={class:"flex justify-between font-bold"},le={key:0,class:"flex justify-center items-center flex-wrap"},ae={class:"border rounded px-2 pt-1.5 pb-0.5 mx-2"},ne={key:1,class:"flex gap-2"},ue=["disabled"],re={key:0,class:"animate-spin border size-4 rounded-full"},ie={key:2,class:"error text-rose-600"},de={class:"mt-2"},ce={class:"flex items-center space-x-4"},pe={key:4,class:"mt-2 text-red-600 font-bold text-center text-xl"},ve={key:1},ke={__name:"CheckOut",setup(ye){const C=T(),b=B(),i=M(),_=N(),w=K(),x=C.params.id,o=c(null),d=c(null),p=c(!1),y=c("bkash_payment"),m=c(""),l=c(null);E(async()=>{var s;try{if(await i.fetchCourse(x),o.value=i.course,(s=i==null?void 0:i.course)!=null&&s.is_purchased)return b.replace(`/my/course/${i==null?void 0:i.course.id}`)}catch(e){d.value=e.message||"Failed to fetch course"}});const v=j(()=>{if(!o.value)return 0;let s=0;return l.value&&(l.value.discount_type==="percentage"?s=o.value.price*l.value.discount_value/100:s=l.value.discount_value),s}),D=async()=>{p.value=!0;try{const s=await w.fetchCouponByCode(m.value);if(console.log(s),!s)throw new Error("Invalid coupon code");l.value=s,d.value=null,console.log("Coupon applied:",l.value),p.value=!1}catch(s){d.value=s.message||"Invalid coupon code",console.error("Error applying coupon:",d.value),l.value=null,p.value=!1}m.value=""},F=async()=>{var s,e;try{if(y.value==="bkash_payment"){const a=await _.createPayment(x,{coupon_code:(s=l.value)==null?void 0:s.code});console.log("Bkash payment response:",a),window.location=(e=a==null?void 0:a.data)==null?void 0:e.bkashURL}else y.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),b.push("/my/course"))}catch(a){d.value=a.message||"Failed to initiate payment",console.error("Error during checkout:",d.value)}},P=s=>A(new Date(s),"dd-MMM-yyyy");return(s,e)=>(n(),u("div",I,[o.value?(n(),u("div",L,[e[17]||(e[17]=t("h1",{class:"title-xl text-center"},"Checkout Page",-1)),t("div",U,[t("div",z,[t("div",null,[t("img",{src:o.value.thumbnail,alt:""},null,8,q)]),t("div",H,[t("h1",O,r(o.value.title),1),t("div",G,[t("p",null,[e[3]||(e[3]=k(" Course Fee: ")),t("span",J,r(o.value.price>0?`${o.value.price} TK`:"Free"),1)]),o.value.course_type==="Live Course"?(n(),u("p",Q,[e[4]||(e[4]=k(" Start Date: ")),t("span",W,r(P(o.value.start_date)),1)])):(n(),u("p",X,[t("span",Y,r(o.value.course_type),1)]))])])]),t("div",Z,[e[13]||(e[13]=t("h4",{class:"title-lg text-center"},"Payment Details",-1)),t("div",ee,[t("div",te,[e[5]||(e[5]=t("p",null,"Course Fee",-1)),t("p",null,r(o.value.price>0?`${o.value.price} TK`:"Free"),1)]),t("div",se,[e[6]||(e[6]=t("p",null,"Promo Discount",-1)),t("p",null,r(v.value),1)]),e[8]||(e[8]=t("hr",null,null,-1)),t("div",oe,[e[7]||(e[7]=t("p",null,"Total",-1)),t("p",null,r(o.value.price-v.value)+" TK",1)])]),e[14]||(e[14]=t("hr",{class:"border-black"},null,-1)),e[15]||(e[15]=t("p",{class:"title-lg text-center"},"Enter Coupon Code",-1)),l.value?(n(),u("div",le,[e[9]||(e[9]=t("span",{class:"text-green-700"}," ✓ Applied Code: ",-1)),t("b",ae,r(l.value.code),1),t("i",{onClick:e[0]||(e[0]=a=>l.value=null),class:"fas fa-trash text-red-600 ml-2 cursor-pointer"})])):(n(),u("div",ne,[g(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=a=>m.value=a),class:"input-1",placeholder:"Enter coupon code"},null,512),[[S,m.value]]),t("button",{onClick:D,class:"btn-2",disabled:p.value},[e[10]||(e[10]=k(" Apply ")),p.value?(n(),u("span",re,".")):f("",!0)],8,ue)])),d.value?(n(),u("div",ie,r(d.value),1)):f("",!0),e[16]||(e[16]=t("hr",{class:"border-black"},null,-1)),o.value.price-v.value>0?(n(),u(V,{key:3},[e[12]||(e[12]=t("p",{class:"title-lg text-center"},"Select payment method",-1)),t("div",de,[t("label",ce,[g(t("input",{type:"radio","onUpdate:modelValue":e[2]||(e[2]=a=>y.value=a),value:"bkash_payment"},null,512),[[$,y.value]]),e[11]||(e[11]=t("span",null,[t("img",{class:"w-52",src:R,alt:"Bkash Payment"})],-1))])])],64)):f("",!0),t("button",{class:"btn-2 mt-4",onClick:F},r(o.value.price-v.value>0?`Pay Now (${o.value.price-v.value} TK)`:"Checkout (Fee)"),1),h(_).error?(n(),u("div",pe,r(h(_).error),1)):f("",!0)])])])):(n(),u("div",ve,"Loading..."))]))}};export{ke as default};
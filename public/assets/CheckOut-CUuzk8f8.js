import{b as A,c as I,u as K,r as u,d as B,o as q,e as l,f as a,g as s,i as y,t as r,q as d,s as k,F as P,C as z,v as H,z as S,A as D,G as O,H as G,x as Y,R as J}from"./main-nmRUI8-2.js";import{u as Q}from"./coupon-CPnhXMNn.js";import{u as W}from"./purchase-BuAUgaYT.js";const X="/assets/bkash_payment_logo-CHh0TPdw.png",Z={class:"my-container py-4"},ee={key:0,class:"space-y-4"},se={key:0,class:"text-center text-green-600 bg-green-600/20 p-4 rounded font-bold text-xl md:text-2xl"},te={class:"grid md:grid-cols-2 gap-4"},oe={class:"card-bg p-4 flex gap-4"},le=["src"],ae={class:"space-y-2"},ne={class:"title-xl"},re={class:"flex gap-4 justify-between"},ue={class:"font-bold text-sky-600"},ie={key:0},de={class:"font-bold text-sky-600"},ce={key:1,class:"bg-pink-50 px-3 rounded-full"},pe={class:"font-bold text-pink-600"},ve={class:"flex justify-end gap-2 items-center mt-4"},ye={class:"card-bg p-4 space-y-3"},me={class:"space-y-1"},fe={class:"flex justify-between"},xe={class:"flex justify-between"},be={class:"flex justify-between font-bold"},ke={key:0,class:"flex justify-center items-center flex-wrap"},ge={class:"border rounded px-2 pt-1.5 pb-0.5 mx-2"},he={key:1,class:"flex gap-2"},_e=["disabled"],Ce={key:0,class:"animate-spin border size-4 rounded-full"},we={key:2,class:"error text-rose-600"},Pe={class:"flex items-center space-x-2 cursor-pointer"},Se={key:0,class:"mt-4 flex gap-2"},Ee={key:0,class:"flex justify-center items-center flex-wrap"},Ue={class:"border rounded px-2 pt-1.5 pb-0.5 mx-2"},Fe={class:"w-full flex items-center"},Te=["disabled"],je={key:0,class:"animate-spin border size-4 rounded-full"},Be={key:3,class:"error text-rose-600"},De={class:"mt-2"},Me={class:"flex items-center space-x-4"},Ve={key:5,class:"mt-2 text-red-600 font-bold text-center text-xl"},Ne={key:1},Ie={__name:"CheckOut",setup(Le){const E=A(),M=I(),U=E.query.message,F=K(),g=W(),V=Q(),h=E.params.id,n=u(null),c=u(null),m=u(!1),_=u("bkash_payment"),C=u(""),i=u(null),p=u(E.query.for==="someone"),w=u(""),f=u(""),T=u(""),v=u(null),x=u(!1),j=B(()=>{var o;return(o=n.value)==null?void 0:o.is_purchased});q(async()=>{try{await F.fetchCourse(h),n.value=F.course}catch(o){c.value=o.message||"Failed to fetch course"}});const b=B(()=>{if(!n.value)return 0;let o=0;return i.value&&(i.value.discount_type==="percentage"?o=n.value.price*i.value.discount_value/100:o=i.value.discount_value),o}),N=async()=>{m.value=!0;try{const o=await V.fetchCouponByCode(C.value);if(console.log(o),!o)throw new Error("Invalid coupon code");i.value=o,c.value=null,console.log("Coupon applied:",i.value),m.value=!1}catch(o){c.value=o.message||"Invalid coupon code",console.error("Error applying coupon:",c.value),i.value=null,m.value=!1}C.value=""},L=async()=>{var o,e;if(!w.value){v.value="Please enter a phone number";return}x.value=!0;try{const t=await g.findNotEnrolledUserByPhone(h,w.value);if(console.log("User found:",t),!t)throw new Error("User not found");v.value=null,f.value=t.id,T.value=t.name,x.value=!1}catch(t){v.value=((e=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:e.message)||t.message||"User not found",console.error("Error searching user:",v.value),x.value=!1}},R=async()=>{var o,e;try{if(_.value==="bkash_payment"){const t=await g.createPayment(h,{coupon_code:(o=i.value)==null?void 0:o.code,user_id:p.value?f.value:null});console.log("Bkash payment response:",t),window.location=(e=t==null?void 0:t.data)==null?void 0:e.bkashURL}else _.value==="bank_transfer"&&(alert("Bank Transfer selected. Checkout completed successfully!"),M.push("/my/course"))}catch(t){c.value=t.message||"Failed to initiate payment",console.error("Error during checkout:",c.value)}},$=o=>Y(new Date(o),"dd-MMM-yyyy");return(o,e)=>(l(),a("div",Z,[n.value?(l(),a("div",ee,[e[28]||(e[28]=s("h1",{class:"title-xl text-center"},"Checkout Page",-1)),y(U)?(l(),a("div",se,r(y(U)),1)):d("",!0),s("div",te,[s("div",oe,[s("div",null,[s("img",{src:n.value.thumbnail,alt:"",class:"w-full aspect-video object-cover"},null,8,le)]),s("div",ae,[s("h1",ne,r(n.value.title),1),s("div",re,[s("p",null,[e[6]||(e[6]=k(" Course Fee: ")),s("span",ue,r(n.value.price>0?`${n.value.price} TK`:"Free"),1)]),n.value.course_type==="Live Course"?(l(),a("p",ie,[e[7]||(e[7]=k(" Start Date: ")),s("span",de,r($(n.value.start_date)),1)])):(l(),a("p",ce,[s("span",pe,r(n.value.course_type),1)]))])]),j.value?(l(),a(P,{key:0},[e[10]||(e[10]=s("hr",{class:"border-black"},null,-1)),s("div",ve,[e[9]||(e[9]=s("p",null,"You have already purchased this course.",-1)),z(y(J),{to:`/my/course/${y(h)}`,class:"btn-2"},{default:H(()=>e[8]||(e[8]=[k(" Start Learning ")])),_:1},8,["to"])])],64)):d("",!0)]),s("div",ye,[e[24]||(e[24]=s("h4",{class:"title-lg text-center"},"Payment Details",-1)),s("div",me,[s("div",fe,[e[11]||(e[11]=s("p",null,"Course Fee",-1)),s("p",null,r(n.value.price>0?`${n.value.price} TK`:"Free"),1)]),s("div",xe,[e[12]||(e[12]=s("p",null,"Promo Discount",-1)),s("p",null,r(b.value),1)]),e[14]||(e[14]=s("hr",null,null,-1)),s("div",be,[e[13]||(e[13]=s("p",null,"Total",-1)),s("p",null,r(n.value.price-b.value)+" TK",1)])]),e[25]||(e[25]=s("hr",{class:"border-black"},null,-1)),e[26]||(e[26]=s("p",{class:"title-lg text-center"},"Enter Coupon Code",-1)),i.value?(l(),a("div",ke,[e[15]||(e[15]=s("span",{class:"text-green-700"}," ✓ Applied Code: ",-1)),s("b",ge,r(i.value.code),1),s("i",{onClick:e[0]||(e[0]=t=>i.value=null),class:"fas fa-trash text-red-600 ml-2 cursor-pointer"})])):(l(),a("div",he,[S(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>C.value=t),class:"input-1",placeholder:"Enter coupon code"},null,512),[[D,C.value]]),s("button",{onClick:N,class:"btn-2",disabled:m.value},[e[16]||(e[16]=k(" Apply ")),m.value?(l(),a("span",Ce,".")):d("",!0)],8,_e)])),c.value?(l(),a("div",we,r(c.value),1)):d("",!0),e[27]||(e[27]=s("hr",{class:"border-black"},null,-1)),s("div",null,[s("label",Pe,[S(s("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t)},null,512),[[O,p.value]]),e[17]||(e[17]=s("span",{class:"pt-1"},"Purchase for someone else",-1))]),p.value?(l(),a("div",Se,[f.value?(l(),a("div",Ee,[e[18]||(e[18]=s("span",{class:"text-green-700"}," ✓",-1)),s("b",Ue,r(T.value),1),s("i",{onClick:e[3]||(e[3]=t=>f.value=null),class:"fas fa-trash text-red-600 ml-2 cursor-pointer"})])):(l(),a(P,{key:1},[s("div",Fe,[e[19]||(e[19]=s("span",{class:"input-1 max-w-max pl-3 pr-1 pt-2.5 pb-1.5 text-gray-600 bg-gray-200 rounded-r-none"}," +88 ",-1)),S(s("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=t=>w.value=t),class:"input-1 rounded-l-none px-1 pt-2.5 pb-1.5",placeholder:"Enter User Phone"},null,512),[[D,w.value]])]),s("button",{type:"button",onClick:L,class:"btn-2",disabled:x.value},[e[20]||(e[20]=k(" Search ")),x.value?(l(),a("span",je,".")):d("",!0)],8,Te)],64))])):d("",!0)]),v.value?(l(),a("div",Be,r(v.value),1)):d("",!0),!p.value&&!j.value||p.value&&f.value?(l(),a(P,{key:4},[e[23]||(e[23]=s("hr",{class:"border-black"},null,-1)),n.value.price-b.value>0?(l(),a(P,{key:0},[e[22]||(e[22]=s("p",{class:"title-lg text-center"},"Select payment method",-1)),s("div",De,[s("label",Me,[S(s("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=t=>_.value=t),value:"bkash_payment"},null,512),[[G,_.value]]),e[21]||(e[21]=s("span",null,[s("img",{class:"w-52",src:X,alt:"Bkash Payment"})],-1))])])],64)):d("",!0),s("button",{class:"btn-2 mt-4",onClick:R},r(n.value.price-b.value>0?`Pay Now (${n.value.price-b.value} TK)`:"Checkout (Fee)"),1)],64)):d("",!0),y(g).error?(l(),a("div",Ve,r(y(g).error),1)):d("",!0)])])])):(l(),a("div",Ne,"Loading..."))]))}};export{Ie as default};

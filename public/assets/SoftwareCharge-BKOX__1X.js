import{J as k,r as p,K as S,ac as $,c as x,o as v,d as l,p as f,i as r,t as d,F as b,e,q as g,g as w,f as L,j as M}from"./index-B0aZB9bj.js";const _=k("software-charge",()=>{const c=p(null),u=p([]),i=a=>{const[s,n]=a.split("-").map(Number);return`${a}-${new Date(s,n,0).getDate()}`};return{error:c,payments:u,fetchMonthlyTotalIncome:async a=>{var n,t;const s={from:`${a}-01`,to:i(a)};try{const{data:o}=await S.get("/total-income",{params:s});return Number((o==null?void 0:o.total_income)??0).toFixed(2)}catch(o){throw c.value=((t=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:t.message)??"An error occurred",c.value}},fetchPaidHistory:async()=>{var s,n;const a="https://ihsanit.com";try{const{data:t}=await $.get(`${a}/api/software-charges/paid/history`,{headers:{"Content-Type":"application/json"}});return u.value=t,t}catch(t){throw c.value=((n=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:n.message)??"An error occurred",c.value}},paymentSoftwareCharge:async(a,s)=>{const n="https://ihsanit.com";return window.location=`${n}/software-charges/payment/${a}/${s}`}}}),A={key:0},T={key:0,class:"border px-4 py-2 text-center animate-pulse",colspan:"6"},j={key:1,class:"border px-4 py-2 text-center text-red-500",colspan:"6"},D={class:"border px-4 py-2"},N={class:"border px-4 py-2"},P={class:"w-full flex gap-1 justify-between"},F={class:"border px-4 py-2"},I={class:"w-full flex gap-1 justify-between"},B={class:"border px-4 py-2"},H={key:0,class:"w-full flex gap-1 justify-between"},R={class:"border px-4 py-2"},U={key:0,class:"w-full flex gap-1 justify-between"},V={class:"border px-4 py-2"},O={key:0,class:"flex justify-center items-center gap-4"},q={__name:"MonthlyTableRow",props:["month","percentage"],setup(c){const u=c,i=p(null),y=p(!1),h=p(0),m=_(),a=x(()=>(h.value*u.percentage*.01).toFixed(2)),s=x(()=>{var t;return((t=m.payments)==null?void 0:t.filter(o=>o.month===u.month)).reduce((o,C)=>o+Number(C.paid_amount),0).toFixed(2)});return v(async()=>{var n,t;try{y.value=!0,h.value=await m.fetchMonthlyTotalIncome(u.month)}catch(o){i.value=((t=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:t.message)||"An error occurred"}finally{y.value=!1}}),(n,t)=>c.month?(r(),l("tr",A,[y.value?(r(),l("td",T,"Loading...")):i.value?(r(),l("td",j,d(i.value),1)):(r(),l(b,{key:2},[e("td",D,d(new Date(c.month+"-01").toLocaleString("default",{month:"short",year:"numeric"}).toUpperCase()),1),e("td",N,[e("div",P,[t[1]||(t[1]=e("span",null,"৳",-1)),g(" "+d(h.value),1)])]),e("td",F,[e("div",I,[t[2]||(t[2]=e("span",null,"৳",-1)),g(" "+d(a.value),1)])]),e("td",B,[s.value>0?(r(),l("div",H,[t[3]||(t[3]=e("span",null,"৳",-1)),g(" "+d(s.value),1)])):f("",!0)]),e("td",R,[a.value-s.value>0?(r(),l("div",U,[t[4]||(t[4]=e("span",null,"৳",-1)),g(" "+d((a.value-s.value).toFixed(2)),1)])):f("",!0)]),e("td",V,[a.value-s.value>0?(r(),l("div",O,[e("button",{onClick:t[0]||(t[0]=o=>w(m).paymentSoftwareCharge(c.month,a.value-s.value)),class:"btn-3"}," Pay Charge ")])):f("",!0)])],64))])):f("",!0)}},E={class:"my-container space-y-4"},J={key:0,class:"text-center mt-2"},K={key:1,class:"text-red-500 text-center mb-4"},z={key:2,class:"w-full table table-auto text-center"},Q={__name:"SoftwareCharge",setup(c){const u=_(),i=p(null),y=p(!1),h=Array.from({length:12},(m,a)=>{const s=new Date;return s.setMonth(s.getMonth()-a),s.toISOString().slice(0,7)});return v(async()=>{await u.fetchPaidHistory()}),(m,a)=>(r(),l("div",E,[a[1]||(a[1]=e("h1",{class:"text-3xl font-bold mb-6 text-center"},"Software Charge",-1)),y.value?(r(),l("div",J,"Loading...")):i.value?(r(),l("div",K,d(i.value),1)):(r(),l("table",z,[a[0]||(a[0]=e("thead",null,[e("tr",{class:"bg-gray-200"},[e("th",{class:"border px-4 py-2"},"Month"),e("th",{class:"border px-4 py-2"},"Total Transaction"),e("th",{class:"border px-4 py-2"},"Software Charge"),e("th",{class:"border px-4 py-2"},"Paid Amount"),e("th",{class:"border px-4 py-2"},"Due Amount"),e("th",{class:"border px-4 py-2"},"Action")])],-1)),e("tbody",null,[(r(!0),l(b,null,L(w(h),s=>(r(),M(q,{key:s,month:s,percentage:5},null,8,["month"]))),128))])]))]))}};export{Q as default};

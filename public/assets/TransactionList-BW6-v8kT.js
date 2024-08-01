import{G as P,H as L,r as d,o as D,c as w,d as r,e as i,f as e,p as M,v as N,F as S,g as B,t as o,q as V,C as j}from"./index-BGHaPwEk.js";const A=P("transaction",{state:()=>({transactions:[],error:null}),actions:{async fetchTransactions(){var u,l;try{const a=await L.get("/transactions");this.transactions=(a==null?void 0:a.data)??[]}catch(a){this.error=((l=(u=a==null?void 0:a.response)==null?void 0:u.data)==null?void 0:l.message)??"An error occurred"}}}}),F={class:"my-container mx-auto py-4"},K={class:"flex items-center py-4"},q=e("h1",{class:"flex-1 text-2xl font-bold"},"Transaction List",-1),E={key:0,class:"flex justify-center items-center"},G=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),H=[G],I={key:1,class:"overflow-x-auto card-bg"},U={class:"min-w-full divide-y divide-gray-400"},z=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"}," SL "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Course Title "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased by "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Phone "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased on "),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-bold uppercase tracking-wider"}," TrxID "),e("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Amount "),e("th",{scope:"col",class:"px-6 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Discount "),e("th",{scope:"col",class:"px-6 py-3 text-center text-xs font-bold uppercase tracking-wider"}," Coupon Code ")])],-1),J={class:"bg-white divide-y divide-gray-200"},O={class:"px-6 py-4 whitespace-nowrap"},Q={class:"px-6 py-4 whitespace-nowrap"},R={class:"px-6 py-4 whitespace-nowrap"},W={class:"px-6 py-4 whitespace-nowrap"},X={class:"px-6 py-4 whitespace-nowrap"},Y={class:"px-6 py-4 whitespace-nowrap text-center"},Z={class:"px-6 py-4 whitespace-nowrap text-right"},$={class:"px-6 py-4 whitespace-nowrap text-right"},ee={class:"px-6 py-4 whitespace-nowrap text-center"},te={class:"flex justify-between mt-4"},se=["disabled"],ae=["disabled"],oe={key:2,class:"text-red-500 mt-4"},p=25,ne={__name:"TransactionList",setup(u){const l=A(),a=d([]),x=d(""),h=d(null),f=d(!0),c=d(1);D(async()=>{try{await l.fetchTransactions(),a.value=l.transactions}catch(n){h.value=n}finally{f.value=!1}});const b=n=>{const s=new Date(n);return j(s,"dd-MMM-yyyy")},g=w(()=>[...a.value].sort((s,t)=>new Date(t.created_at)-new Date(s.created_at)).filter(s=>{const t=s.course.title.toLowerCase(),_=s.user.name.toLowerCase(),C=s.user.phone.toLowerCase(),y=x.value.toLowerCase();return t.includes(y)||_.includes(y)||C.includes(y)})),m=w(()=>{const n=(c.value-1)*p,s=n+p;return g.value.slice(n,s)}),v=w(()=>Math.ceil(g.value.length/p)),k=()=>{c.value<v.value&&c.value++},T=()=>{c.value>1&&c.value--};return(n,s)=>(r(),i("div",F,[e("div",K,[q,M(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>x.value=t),type:"text",placeholder:"Title, Name or Phone",class:"input-1 w-80"},null,512),[[N,x.value]])]),f.value?(r(),i("div",E,H)):(r(),i("div",I,[e("table",U,[z,e("tbody",J,[(r(!0),i(S,null,B(m.value,(t,_)=>(r(),i("tr",{key:t.id},[e("td",O,o((c.value-1)*p+_+1),1),e("td",Q,o(t.course.title),1),e("td",R,o(t.user.name),1),e("td",W,o(t.user.phone),1),e("td",X,o(b(t.created_at)),1),e("td",Y,o(t.trx_id),1),e("td",Z,o(t.paid_amount)+" TK",1),e("td",$,o(t.discount_amount)+" TK",1),e("td",ee,o(t.coupon_code),1)]))),128))])])])),e("div",te,[e("button",{onClick:T,disabled:c.value===1,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,se),e("button",{onClick:k,disabled:c.value===v.value,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ae)]),h.value?(r(),i("p",oe,o(h.value),1)):V("",!0)]))}};export{ne as default};

import{Y as C,Z as L,r as d,o as D,d as w,e as r,f as l,g as e,z as M,A as N,F as S,h as A,t as o,p as B,v as V}from"./index-NELb0t0C.js";const j=C("transaction",{state:()=>({transactions:[],error:null}),actions:{async fetchTransactions(){var u,i;try{const a=await L.get("/transactions");this.transactions=(a==null?void 0:a.data)??[]}catch(a){this.error=((i=(u=a==null?void 0:a.response)==null?void 0:u.data)==null?void 0:i.message)??"An error occurred"}}}}),F={class:"my-container mx-auto py-4"},K={class:"flex items-center py-4"},z=e("h1",{class:"flex-1 text-2xl font-bold"},"Transaction List",-1),E={key:0,class:"flex justify-center items-center"},I=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),U=[I],Y={key:1,class:"overflow-x-auto card-bg"},Z={class:"min-w-full divide-y divide-gray-400 text-sm"},q=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," SL "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Course Title "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased by "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Phone "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased on "),e("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," TrxID "),e("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Amount "),e("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Discount "),e("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," Coupon Code ")])],-1),G={class:"bg-white divide-y divide-gray-200"},H={class:"px-3 py-3 whitespace-nowrap"},J={class:"px-3 py-3 max-w-xs"},O={class:"px-3 py-3 whitespace-nowrap"},Q={class:"px-3 py-3 whitespace-nowrap"},R={class:"px-3 py-3 whitespace-nowrap"},W={class:"px-3 py-3 whitespace-nowrap text-center"},X={class:"px-3 py-3 whitespace-nowrap text-right"},$={class:"px-3 py-3 whitespace-nowrap text-right"},ee={class:"px-3 py-3 whitespace-nowrap text-center"},te={class:"flex justify-between mt-4"},se=["disabled"],ae=["disabled"],oe={key:2,class:"text-red-500 mt-4"},p=25,ne={__name:"TransactionList",setup(u){const i=j(),a=d([]),x=d(""),h=d(null),f=d(!0),c=d(1);D(async()=>{try{await i.fetchTransactions(),a.value=i.transactions}catch(n){h.value=n}finally{f.value=!1}});const m=n=>{const s=new Date(n);return V(s,"dd-MMM-yyyy")},g=w(()=>[...a.value].sort((s,t)=>new Date(t.created_at)-new Date(s.created_at)).filter(s=>{const t=s.course.title.toLowerCase(),_=s.user.name.toLowerCase(),P=s.user.phone.toLowerCase(),y=x.value.toLowerCase();return t.includes(y)||_.includes(y)||P.includes(y)})),b=w(()=>{const n=(c.value-1)*p,s=n+p;return g.value.slice(n,s)}),v=w(()=>Math.ceil(g.value.length/p)),k=()=>{c.value<v.value&&c.value++},T=()=>{c.value>1&&c.value--};return(n,s)=>(r(),l("div",F,[e("div",K,[z,M(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>x.value=t),type:"text",placeholder:"Title, Name or Phone",class:"input-1 w-80"},null,512),[[N,x.value]])]),f.value?(r(),l("div",E,U)):(r(),l("div",Y,[e("table",Z,[q,e("tbody",G,[(r(!0),l(S,null,A(b.value,(t,_)=>(r(),l("tr",{key:t.id},[e("td",H,o((c.value-1)*p+_+1),1),e("td",J,o(t.course.title),1),e("td",O,o(t.user.name),1),e("td",Q,o(t.user.phone),1),e("td",R,o(m(t.created_at)),1),e("td",W,o(t.trx_id),1),e("td",X,o(t.paid_amount)+" TK",1),e("td",$,o(t.discount_amount)+" TK",1),e("td",ee,o(t.coupon_code),1)]))),128))])])])),e("div",te,[e("button",{onClick:T,disabled:c.value===1,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,se),e("button",{onClick:k,disabled:c.value===v.value,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,ae)]),h.value?(r(),l("p",oe,o(h.value),1)):B("",!0)]))}};export{ne as default};

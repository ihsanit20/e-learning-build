import{a1 as A,a2 as S,r as l,o as j,d as x,e as i,f as d,g as e,q as T,t as o,n as k,z as F,A as V,F as B,h as K,p as z,v as $}from"./index-BedAWJhs.js";const q=A("transaction",{state:()=>({transactions:[],error:null}),actions:{async fetchTransactions(w={}){var p,r;try{const n=await S.get("/transactions",{params:w});this.transactions=(n==null?void 0:n.data)??[]}catch(n){this.error=((r=(p=n==null?void 0:n.response)==null?void 0:p.data)==null?void 0:r.message)??"An error occurred"}}}}),E={class:"my-container mx-auto py-4"},I={class:"flex justify-between gap-4 flex-wrap"},U=e("h1",{class:"flex-1 text-2xl font-bold"},"Transaction List",-1),G={class:"flex justify-center items-center gap-4 text-gray-400"},H={class:"flex flex-wrap items-center py-4 gap-4"},J={class:"flex items-center rounded-lg overflow-hidden"},O={key:0,class:"flex justify-center items-center"},Q=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),R=[Q],W={key:1,class:"overflow-x-auto card-bg"},X={class:"min-w-full divide-y divide-gray-400 text-sm"},Y=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," SL "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Course Title "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased by "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Phone "),e("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased on "),e("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," TrxID "),e("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Amount "),e("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Discount "),e("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," Coupon Code ")])],-1),Z={class:"bg-white divide-y divide-gray-200"},ee={class:"px-3 py-3 whitespace-nowrap"},te={class:"px-3 py-3 max-w-xs"},se={class:"px-3 py-3 whitespace-nowrap"},ae={class:"px-3 py-3 whitespace-nowrap"},oe={class:"px-3 py-3 whitespace-nowrap"},ne={class:"px-3 py-3 whitespace-nowrap text-center"},ce={class:"px-3 py-3 whitespace-nowrap text-right"},re={class:"px-3 py-3 whitespace-nowrap text-right"},le={class:"px-3 py-3 whitespace-nowrap text-center"},ie={class:"flex justify-between mt-4"},de=["disabled"],pe=["disabled"],ue={key:2,class:"text-red-500 mt-4"},h=15,he={__name:"TransactionList",setup(w){const p=q(),r=l([]),n=l(""),y=l(null),u=l(!0),c=l(1),_=l("paid"),f=async a=>{u.value=!0,_.value=a,c.value=1;const t=a==="paid"?{paid:!0}:{free:!0};await p.fetchTransactions(t),r.value=p.transactions,u.value=!1};j(async()=>{try{f("paid")}catch(a){y.value=a}finally{u.value=!1}});const C=a=>{const t=new Date(a);return $(t,"dd-MMM-yyyy")},b=x(()=>[...r.value].sort((t,s)=>new Date(s.created_at)-new Date(t.created_at)).filter(t=>{const s=t.course.title.toLowerCase(),v=t.user.name.toLowerCase(),N=t.user.phone.toLowerCase(),g=n.value.toLowerCase();return s.includes(g)||v.includes(g)||N.includes(g)})),P=x(()=>{const a=(c.value-1)*h,t=a+h;return b.value.slice(a,t)}),m=x(()=>Math.ceil(b.value.length/h)),L=()=>{c.value<m.value&&c.value++},D=()=>{c.value>1&&c.value--},M=x(()=>{let a=0;return r.value&&(a=r.value.reduce((t,s)=>s.paid_amount?t+parseFloat(s.paid_amount):t,0)),a});return(a,t)=>(i(),d("div",E,[e("div",I,[U,e("div",G,[e("div",null,[T("Total Transaction: "),e("b",null,o(r.value.length),1)]),e("div",null,[T("Total Amount: "),e("b",null,o(M.value)+" TK",1)])])]),e("div",H,[e("div",J,[e("button",{type:"button",class:k(["px-4 py-2.5",_.value==="paid"?"bg-sky-500 text-white":"bg-gray-300 text-black"]),onClick:t[0]||(t[0]=s=>f("paid"))}," Paid Transactions ",2),e("button",{type:"button",class:k(["px-4 py-2.5",_.value==="free"?"bg-sky-500 text-white":"bg-gray-300 text-black"]),onClick:t[1]||(t[1]=s=>f("free"))}," Free Transactions ",2)]),F(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.value=s),type:"text",placeholder:"Title, Name or Phone",class:"input-1 w-full md:w-80 ml-auto"},null,512),[[V,n.value]])]),u.value?(i(),d("div",O,R)):(i(),d("div",W,[e("table",X,[Y,e("tbody",Z,[(i(!0),d(B,null,K(P.value,(s,v)=>(i(),d("tr",{key:s.id},[e("td",ee,o((c.value-1)*h+v+1),1),e("td",te,o(s.course.title),1),e("td",se,o(s.user.name),1),e("td",ae,o(s.user.phone),1),e("td",oe,o(C(s.created_at)),1),e("td",ne,o(s.trx_id),1),e("td",ce,o(s.paid_amount)+" TK",1),e("td",re,o(s.discount_amount)+" TK ",1),e("td",le,o(s.coupon_code),1)]))),128))])])])),e("div",ie,[e("button",{onClick:D,disabled:c.value===1,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,de),e("button",{onClick:L,disabled:c.value===m.value,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,pe)]),y.value?(i(),d("p",ue,o(y.value),1)):z("",!0)]))}};export{he as default};

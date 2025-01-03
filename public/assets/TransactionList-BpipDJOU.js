import{$ as A,a0 as S,r as c,o as j,d as x,e as i,f as d,g as t,s as T,t as o,n as k,z as F,A as V,F as B,h as K,q as $,x as z}from"./index-DIWD3pil.js";const q=A("transaction",{state:()=>({transactions:[],error:null}),actions:{async fetchTransactions(b={}){var p,l;try{const n=await S.get("/transactions",{params:b});this.transactions=(n==null?void 0:n.data)??[]}catch(n){this.error=((l=(p=n==null?void 0:n.response)==null?void 0:p.data)==null?void 0:l.message)??"An error occurred"}}}}),E={class:"my-container mx-auto py-4"},I={class:"flex justify-between gap-4 flex-wrap"},U={class:"flex justify-center items-center gap-4 text-gray-400"},G={class:"flex flex-wrap items-center py-4 gap-4"},H={class:"flex items-center rounded-lg overflow-hidden"},J={key:0,class:"flex justify-center items-center"},O={key:1,class:"overflow-x-auto card-bg"},Q={class:"min-w-full divide-y divide-gray-400 text-sm"},R={class:"bg-white divide-y divide-gray-200"},W={class:"px-3 py-3 whitespace-nowrap"},X={class:"px-3 py-3 max-w-xs"},Y={class:"px-3 py-3 whitespace-nowrap"},Z={class:"px-3 py-3 whitespace-nowrap"},tt={class:"px-3 py-3 whitespace-nowrap"},et={class:"px-3 py-3 whitespace-nowrap text-center"},st={class:"px-3 py-3 whitespace-nowrap text-right"},at={class:"px-3 py-3 whitespace-nowrap text-right"},ot={class:"px-3 py-3 whitespace-nowrap text-center"},nt={class:"flex justify-between mt-4"},rt=["disabled"],lt=["disabled"],ct={key:2,class:"text-red-500 mt-4"},y=15,dt={__name:"TransactionList",setup(b){const p=q(),l=c([]),n=c(""),f=c(null),u=c(!0),r=c(1),v=c("paid"),h=async a=>{u.value=!0,v.value=a,r.value=1;const e=a==="paid"?{paid:!0}:{free:!0};await p.fetchTransactions(e),l.value=p.transactions,u.value=!1};j(async()=>{try{h("paid")}catch(a){f.value=a}finally{u.value=!1}});const C=a=>{const e=new Date(a);return z(e,"dd-MMM-yyyy")},_=x(()=>[...l.value].sort((e,s)=>new Date(s.created_at)-new Date(e.created_at)).filter(e=>{const s=e.course.title.toLowerCase(),g=e.user.name.toLowerCase(),N=e.user.phone.toLowerCase(),w=n.value.toLowerCase();return s.includes(w)||g.includes(w)||N.includes(w)})),P=x(()=>{const a=(r.value-1)*y,e=a+y;return _.value.slice(a,e)}),m=x(()=>Math.ceil(_.value.length/y)),L=()=>{r.value<m.value&&r.value++},D=()=>{r.value>1&&r.value--},M=x(()=>{let a=0;return l.value&&(a=l.value.reduce((e,s)=>s.paid_amount?e+parseFloat(s.paid_amount):e,0)),a});return(a,e)=>(i(),d("div",E,[t("div",I,[e[5]||(e[5]=t("h1",{class:"flex-1 text-2xl font-bold"},"Transaction List",-1)),t("div",U,[t("div",null,[e[3]||(e[3]=T("Total Transaction: ")),t("b",null,o(l.value.length),1)]),t("div",null,[e[4]||(e[4]=T("Total Amount: ")),t("b",null,o(M.value)+" TK",1)])])]),t("div",G,[t("div",H,[t("button",{type:"button",class:k(["px-4 py-2.5",v.value==="paid"?"bg-sky-500 text-white":"bg-gray-300 text-black"]),onClick:e[0]||(e[0]=s=>h("paid"))}," Paid Transactions ",2),t("button",{type:"button",class:k(["px-4 py-2.5",v.value==="free"?"bg-sky-500 text-white":"bg-gray-300 text-black"]),onClick:e[1]||(e[1]=s=>h("free"))}," Free Transactions ",2)]),F(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>n.value=s),type:"text",placeholder:"Title, Name or Phone",class:"input-1 w-full md:w-80 ml-auto"},null,512),[[V,n.value]])]),u.value?(i(),d("div",J,e[6]||(e[6]=[t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(i(),d("div",O,[t("table",Q,[e[7]||(e[7]=t("thead",{class:"bg-gray-200"},[t("tr",null,[t("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," SL "),t("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Course Title "),t("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased by "),t("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Phone "),t("th",{scope:"col",class:"px-3 py-3 text-left text-xs font-bold uppercase tracking-wider"}," Purchased on "),t("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," TrxID "),t("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Amount "),t("th",{scope:"col",class:"px-3 py-3 text-right text-xs font-bold uppercase tracking-wider"}," Discount "),t("th",{scope:"col",class:"px-3 py-3 text-center text-xs font-bold uppercase tracking-wider"}," Coupon Code ")])],-1)),t("tbody",R,[(i(!0),d(B,null,K(P.value,(s,g)=>(i(),d("tr",{key:s.id},[t("td",W,o((r.value-1)*y+g+1),1),t("td",X,o(s.course.title),1),t("td",Y,o(s.user.name),1),t("td",Z,o(s.user.phone),1),t("td",tt,o(C(s.created_at)),1),t("td",et,o(s.trx_id),1),t("td",st,o(s.paid_amount)+" TK",1),t("td",at,o(s.discount_amount)+" TK ",1),t("td",ot,o(s.coupon_code),1)]))),128))])])])),t("div",nt,[t("button",{onClick:D,disabled:r.value===1,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Previous ",8,rt),t("button",{onClick:L,disabled:r.value===m.value,class:"px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"}," Next ",8,lt)]),f.value?(i(),d("p",ct,o(f.value),1)):$("",!0)]))}};export{dt as default};

import{$ as n,a0 as o}from"./index-BAKIfp63.js";const h=n("purchase",{state:()=>({purchases:[],purchase:null,error:null}),actions:{async fetchPurchases(){var s,a;try{const e=await o.get("/user/courses",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});this.purchases=e.data}catch(e){this.error=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||e.message}},async createPayment(s,a={}){var e,t;try{return(await o.post(`courses/${s}/payment`,a,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(r){throw this.error=((t=(e=r.response)==null?void 0:e.data)==null?void 0:t.message)||r.message,r}},async executePayment(s,a={}){var e,t;try{return(await o.post(`courses/${s}/enroll`,a,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(r){throw this.error=((t=(e=r.response)==null?void 0:e.data)==null?void 0:t.message)||r.message,r}}}});export{h as u};

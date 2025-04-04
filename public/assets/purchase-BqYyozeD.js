import{d as n}from"./vue-BP9P6hCg.js";import{h as o}from"./index-C-7Rzlh_.js";const u=n("purchase",{state:()=>({purchases:[],purchase:null,error:null}),actions:{async fetchPurchases(a={}){var s,e;try{const r=await o.get("/user/courses",{params:a,headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});this.purchases=r.data}catch(r){this.error=((e=(s=r.response)==null?void 0:s.data)==null?void 0:e.message)||r.message}},async createPayment(a,s={}){var e,r;try{return(await o.post(`courses/${a}/payment`,s,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(t){throw this.error=((r=(e=t.response)==null?void 0:e.data)==null?void 0:r.message)||t.message,t}},async executePayment(a,s={}){var e,r;try{return(await o.post(`courses/${a}/enroll`,s,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(t){throw this.error=((r=(e=t.response)==null?void 0:e.data)==null?void 0:r.message)||t.message,t}},async findNotEnrolledUserByPhone(a,s){try{return(await o.get(`/courses/${a}/not-enrolled-user-by-phone/${s}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(e){throw console.log(e),e}}}});export{u};

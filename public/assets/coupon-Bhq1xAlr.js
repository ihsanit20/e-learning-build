import{J as i,K as r}from"./index-DN8cqjEB.js";const h=i("coupon",{state:()=>({coupons:[],userCoupons:[],userEarnings:[],error:null,loading:!1}),actions:{async fetchCoupons(){var s,e;this.loading=!0,this.error=null;try{const o=await r.get("/coupons");this.coupons=(o==null?void 0:o.data)??[]}catch(o){this.error=((e=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while fetching coupons"}finally{this.loading=!1}},async fetchUserCoupons(){var s,e;this.loading=!0,this.error=null;try{const o=await r.get("/user-coupons");this.userCoupons=(o==null?void 0:o.data)??[]}catch(o){this.error=((e=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while fetching user coupons"}finally{this.loading=!1}},async fetchUserEarnings(s={}){var e,o;console.log(s),this.loading=!0,this.error=null;try{const t=await r.get("/user-earnings",{params:s});this.userEarnings=(t==null?void 0:t.data)??[]}catch(t){this.error=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)??"An error occurred while fetching user earnings"}finally{this.loading=!1}},async createCoupon(s){var e,o;this.error=null;try{const t=await r.post("/coupons",s);this.coupons.push(t==null?void 0:t.data)}catch(t){throw this.error=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)??"An error occurred while creating the coupon",t}},async updateCoupon(s,e){var o,t;this.error=null;try{const n=await r.put(`/coupons/${s}`,e),a=this.coupons.findIndex(c=>c.id===s);a!==-1&&(this.coupons[a]=(n==null?void 0:n.data)??this.coupons[a])}catch(n){throw this.error=((t=(o=n==null?void 0:n.response)==null?void 0:o.data)==null?void 0:t.message)??"An error occurred while updating the coupon",n}},async deleteCoupon(s){var e,o;this.error=null;try{await r.delete(`/coupons/${s}`),this.coupons=this.coupons.filter(t=>t.id!==s)}catch(t){throw this.error=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)??"An error occurred while deleting the coupon",t}},async fetchCouponByCode(s){var e,o;try{if(s){const t=await r.get(`/coupons/${s}`);return t==null?void 0:t.data}}catch(t){throw this.error=((o=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:o.message)??"An error occurred while fetching the coupon",t}}}});export{h as u};

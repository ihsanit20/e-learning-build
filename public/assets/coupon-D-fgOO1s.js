import{E as i,G as r}from"./index-B1GkNHwC.js";const h=i("coupon",{state:()=>({coupons:[],error:null,loading:!1}),actions:{async fetchCoupons(){var e,s;this.loading=!0,this.error=null;try{const t=await r.get("/coupons");this.coupons=(t==null?void 0:t.data)??[]}catch(t){this.error=((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)??"An error occurred while fetching coupons"}finally{this.loading=!1}},async createCoupon(e){var s,t;this.error=null;try{const o=await r.post("/coupons",e);this.coupons.push(o==null?void 0:o.data)}catch(o){throw this.error=((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)??"An error occurred while creating the coupon",o}},async updateCoupon(e,s){var t,o;this.error=null;try{const n=await r.put(`/coupons/${e}`,s),a=this.coupons.findIndex(c=>c.id===e);a!==-1&&(this.coupons[a]=(n==null?void 0:n.data)??this.coupons[a])}catch(n){throw this.error=((o=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:o.message)??"An error occurred while updating the coupon",n}},async deleteCoupon(e){var s,t;this.error=null;try{await r.delete(`/coupons/${e}`),this.coupons=this.coupons.filter(o=>o.id!==e)}catch(o){throw this.error=((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)??"An error occurred while deleting the coupon",o}},async fetchCouponByCode(e){var s,t;try{if(e){const o=await r.get(`/coupons/${e}`);return o==null?void 0:o.data}}catch(o){throw this.error=((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)??"An error occurred while fetching the coupon",o}}}});export{h as u};

import{D as g,E as o}from"./index-Bw9lAbC-.js";const n=g("category",{state:()=>({categories:[],error:null,loading:!1}),actions:{async fetchCategories(){var r,a;this.loading=!0,this.error=null;try{const t=await o.get("/category");this.categories=(t==null?void 0:t.data)??[]}catch(t){this.error=((a=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:a.message)??"An error occurred while fetching categories"}finally{this.loading=!1}},async createCategory(r){var a,t;this.error=null;try{const e=await o.post("/category",{name:r});this.categories.push(e==null?void 0:e.data)}catch(e){throw this.error=((t=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:t.message)??"An error occurred while creating the category",e}},async updateCategory(r,a){var t,e;this.error=null;try{const s=await o.put(`/category/${r}`,a),i=this.categories.findIndex(c=>c.id===r);i!==-1&&(this.categories[i]=(s==null?void 0:s.data)??this.categories[i])}catch(s){throw this.error=((e=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:e.message)??"An error occurred while updating the category",s}},async deleteCategory(r){var a,t;this.error=null;try{await o.delete(`/category/${r}`),this.categories=this.categories.filter(e=>e.id!==r)}catch(e){throw this.error=((t=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:t.message)??"An error occurred while deleting the category",e}}}});export{n as u};

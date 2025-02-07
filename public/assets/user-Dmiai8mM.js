import{J as n,K as o}from"./index-BjzCwm78.js";const c=n("user",{state:()=>({users:[],error:null,loading:!1}),actions:{async fetchUsers(e={}){var r,t;this.loading=!0,this.error=null;try{const s=await o.get("/users",{params:e});this.users=(s==null?void 0:s.data)??[]}catch(s){this.error=((t=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:t.message)??"An error occurred while fetching users"}finally{this.loading=!1}},async addUser(e){var r,t;this.error=null;try{const s=await o.post("/users",e);this.users.push((s==null?void 0:s.data)??e)}catch(s){throw this.error=((t=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:t.message)??"An error occurred while adding the user",s}},async updateUser(e,r){var t,s;this.error=null;try{const a=await o.put(`/users/${e}`,r),i=this.users.findIndex(h=>h.id===e);i!==-1&&(this.users[i]=(a==null?void 0:a.data)??this.users[i])}catch(a){throw this.error=((s=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:s.message)??"An error occurred while updating the user",a}},async uploadPhoto(e){var r,t;this.error=null;try{await o.post("/user/photo",e,{headers:{"Content-Type":"multipart/form-data"}})}catch(s){throw this.error=((t=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:t.message)??"An error occurred while uploading the photo",s}}}});export{c as u};

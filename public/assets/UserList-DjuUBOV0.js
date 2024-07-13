import{D as E,E as $,_ as I,d as p,e as S,o as _,g as m,a as e,p as f,v as U,C as L,t as b,s as w,x as M,y as N,f as P,F as V,h as A,c as O}from"./index-Lk6wOGQy.js";const C=E("user",{state:()=>({users:[],error:null,loading:!1}),actions:{async fetchUsers(){var o,r;this.loading=!0,this.error=null;try{const t=await $.get("/users");this.users=(t==null?void 0:t.data)??[]}catch(t){this.error=((r=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:r.message)??"An error occurred while fetching users"}finally{this.loading=!1}},async addUser(o){var r,t;this.error=null;try{const s=await $.post("/users",o);this.users.push((s==null?void 0:s.data)??o)}catch(s){throw this.error=((t=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:t.message)??"An error occurred while adding the user",s}},async updateUser(o,r){var t,s;this.error=null;try{const a=await $.put(`/users/${o}`,r),l=this.users.findIndex(h=>h.id===o);l!==-1&&(this.users[l]=(a==null?void 0:a.data)??this.users[l])}catch(a){throw this.error=((s=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:s.message)??"An error occurred while updating the user",a}}}}),u=o=>(M("data-v-00f1efd7"),o=o(),N(),o),B={key:0,class:"modal"},j={class:"card-bg p-4 md:p-8 w-full max-w-5xl"},D=u(()=>e("h2",{class:"title-md text-center"},"Edit User",-1)),R=u(()=>e("p",null,"Name",-1)),F=u(()=>e("p",null,"Email",-1)),T=u(()=>e("p",null,"Phone",-1)),q=u(()=>e("p",null,"Photo URL",-1)),z=u(()=>e("p",null,"Role",-1)),G=u(()=>e("option",{value:"developer"},"Developer",-1)),H=u(()=>e("option",{value:"admin"},"Admin",-1)),J=u(()=>e("option",{value:"instructor"},"Instructor",-1)),K=u(()=>e("option",{value:"student"},"Student",-1)),Q=[G,H,J,K],W={key:0,class:"mt-4 text-red-600"},X={__name:"EditUser",props:{user:Object,isOpen:Boolean},emits:["close","update"],setup(o,{emit:r}){const t=o,s=r,a=C(),l=p(""),h=p(""),y=p(""),g=p(""),n=p("student"),v=p(null);S(()=>{t.user&&(l.value=t.user.name,h.value=t.user.email,y.value=t.user.phone,g.value=t.user.photo,n.value=t.user.role)});const c=async()=>{try{const x={name:l.value,email:h.value,phone:y.value,photo:g.value,role:n.value};await a.updateUser(t.user.id,x),s("update",x),s("close")}catch(x){v.value=x.message}},k=()=>{s("close")};return(x,d)=>o.isOpen?(_(),m("div",B,[e("div",j,[D,R,f(e("input",{class:"input-1","onUpdate:modelValue":d[0]||(d[0]=i=>l.value=i),placeholder:"Name"},null,512),[[U,l.value]]),F,f(e("input",{class:"input-1","onUpdate:modelValue":d[1]||(d[1]=i=>h.value=i),placeholder:"Email"},null,512),[[U,h.value]]),T,f(e("input",{class:"input-1","onUpdate:modelValue":d[2]||(d[2]=i=>y.value=i),placeholder:"Phone"},null,512),[[U,y.value]]),q,f(e("input",{class:"input-1","onUpdate:modelValue":d[3]||(d[3]=i=>g.value=i),placeholder:"Photo URL"},null,512),[[U,g.value]]),z,f(e("select",{class:"input-1","onUpdate:modelValue":d[4]||(d[4]=i=>n.value=i)},Q,512),[[L,n.value]]),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-2",onClick:c},"Save"),e("button",{class:"btn-contrast",onClick:k},"Close")]),v.value?(_(),m("div",W,b(v.value),1)):w("",!0)])])):w("",!0)}},Y=I(X,[["__scopeId","data-v-00f1efd7"]]),Z={class:"my-container p-4"},ee=e("div",{class:"flex items-center justify-between"},[e("h1",{class:"text-2xl font-bold mb-4"},"User List")],-1),te={class:"overflow-x-auto"},se={class:"min-w-full bg-white shadow-md rounded-lg overflow-hidden"},oe=e("thead",{class:"font-bold"},[e("tr",null,[e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," SL "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Photo "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Name "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Phone "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Role "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Actions ")])],-1),ae={class:"py-2 px-4 border-b border-gray-200"},le={class:"py-2 px-4 border-b border-gray-200"},re=["src"],ne={class:"py-2 px-4 border-b border-gray-200"},ce={class:"py-2 px-4 border-b border-gray-200"},de={class:"py-2 px-4 border-b border-gray-200"},ue={class:"py-2 px-4 border-b border-gray-200"},ie=["onClick"],pe={key:0},he=e("td",{class:"py-2 px-4 border-b border-gray-200",colspan:"6"},"No users found",-1),_e=[he],ve={key:0,class:"mt-4 text-red-600"},ye={__name:"UserList",setup(o){const r=C(),t=p(null),s=p(!1),a=p(null);S(async()=>{try{await r.fetchUsers()}catch(n){t.value=n.message}});const l=P(()=>r.users),h=n=>{a.value=n,s.value=!0},y=()=>{s.value=!1,a.value=null},g=n=>{const v=l.value.findIndex(c=>c.id===n.id);v!==-1&&(l.value[v]=n)};return(n,v)=>(_(),m("div",Z,[ee,e("div",te,[e("table",se,[oe,e("tbody",null,[(_(!0),m(V,null,A(l.value,(c,k)=>(_(),m("tr",{key:c.id,class:"hover:bg-gray-100"},[e("td",ae,b(k+1),1),e("td",le,[e("img",{src:c.photo||"default-photo.png",alt:"Photo",class:"h-10 w-10 rounded-full object-cover"},null,8,re)]),e("td",ne,b(c.name),1),e("td",ce,b(c.phone),1),e("td",de,b(c.role||"N/A"),1),e("td",ue,[e("button",{class:"btn-2",onClick:x=>h(c)},"Edit",8,ie)])]))),128)),l.value.length===0?(_(),m("tr",pe,_e)):w("",!0)])])]),t.value?(_(),m("div",ve,b(t.value),1)):w("",!0),s.value&&a.value?(_(),O(Y,{key:1,user:a.value,isOpen:s.value,onClose:y,onUpdate:g},null,8,["user","isOpen"])):w("",!0)]))}};export{ye as default};

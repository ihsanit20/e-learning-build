import{r,o as P,e as a,f as p,g as e,z as x,A as k,M,t as b,p as g,K as E,L as N,P as V,d as j,F as w,h as I,j as O,i as A}from"./index-C6JPkN7d.js";import{u as C}from"./user-CHhfOXKI.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u=d=>(E("data-v-00f1efd7"),d=d(),N(),d),D={key:0,class:"modal"},R={class:"card-bg p-4 md:p-8 w-full max-w-5xl"},z=u(()=>e("h2",{class:"title-md text-center"},"Edit User",-1)),F=u(()=>e("p",null,"Name",-1)),K=u(()=>e("p",null,"Email",-1)),T=u(()=>e("p",null,"Phone",-1)),q=u(()=>e("p",null,"Photo URL",-1)),G=u(()=>e("p",null,"Role",-1)),H=u(()=>e("option",{value:"developer"},"Developer",-1)),J=u(()=>e("option",{value:"admin"},"Admin",-1)),Q=u(()=>e("option",{value:"instructor"},"Instructor",-1)),W=u(()=>e("option",{value:"student"},"Student",-1)),X=[H,J,Q,W],Y={key:0,class:"mt-4 text-red-600"},Z={__name:"EditUser",props:{user:Object,isOpen:Boolean},emits:["close","update"],setup(d,{emit:U}){const n=d,v=U,_=C(),c=r(""),h=r(""),i=r(""),m=r(""),f=r("student"),y=r(null);P(()=>{n.user&&(c.value=n.user.name,h.value=n.user.email,i.value=n.user.phone,m.value=n.user.photo,f.value=n.user.role)});const $=async()=>{try{const s={name:c.value,email:h.value,phone:i.value,photo:m.value,role:f.value};await _.updateUser(n.user.id,s),v("update",s),v("close")}catch(s){y.value=s.message}},o=()=>{v("close")};return(s,t)=>d.isOpen?(a(),p("div",D,[e("div",R,[z,F,x(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=l=>c.value=l),placeholder:"Name"},null,512),[[k,c.value]]),K,x(e("input",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=l=>h.value=l),placeholder:"Email"},null,512),[[k,h.value]]),T,x(e("input",{class:"input-1","onUpdate:modelValue":t[2]||(t[2]=l=>i.value=l),placeholder:"Phone"},null,512),[[k,i.value]]),q,x(e("input",{class:"input-1","onUpdate:modelValue":t[3]||(t[3]=l=>m.value=l),placeholder:"Photo URL"},null,512),[[k,m.value]]),G,x(e("select",{class:"input-1","onUpdate:modelValue":t[4]||(t[4]=l=>f.value=l)},X,512),[[M,f.value]]),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-2",onClick:$},"Save"),e("button",{class:"btn-contrast",onClick:o},"Close")]),y.value?(a(),p("div",Y,b(y.value),1)):g("",!0)])])):g("",!0)}},ee=B(Z,[["__scopeId","data-v-00f1efd7"]]);function S(d){return`https://ui-avatars.com/api/?name=${d}&length=1`}const te={class:"my-container p-4"},oe=e("div",{class:"flex items-center justify-between"},[e("h1",{class:"text-2xl font-bold mb-4"},"User List")],-1),se={class:"overflow-x-auto"},le={class:"min-w-full bg-white shadow-md rounded-lg overflow-hidden"},ne=e("thead",{class:"font-bold"},[e("tr",{class:"*:py-2 *:px-4 *:bg-gray-200 *:text-left *:text-sm *:text-gray-700 *:uppercase *:tracking-wider"},[e("th",null,"SL"),e("th",null,"Photo"),e("th",null,"Name"),e("th",null,"Phone"),e("th",null,"Role"),e("th",null,"Actions")])],-1),ae={key:0},re=e("td",{class:"py-2 px-4 border-b border-gray-200 text-center",colspan:"6"},[e("div",{class:"flex justify-center items-center space-x-2"},[e("div",{class:"w-4 h-4 border-4 border-t-4 border-gray-200 rounded-full animate-spin"}),e("span",null,"Loading...")])],-1),ue=[re],de=["src","onClick"],ce=["onClick"],ie={key:0},pe=e("td",{class:"py-2 px-4 border-b border-gray-200",colspan:"6"},"No users found",-1),ve=[pe],he={key:0,class:"mt-4 text-red-600"},be={__name:"UserList",setup(d){const U=C(),n=V(),v=r(null),_=r(!1),c=r(null),h=r(!0);P(async()=>{try{await U.fetchUsers()}catch(o){v.value=o.message}finally{h.value=!1}});const i=j(()=>U.users),m=o=>{c.value=o,_.value=!0},f=()=>{_.value=!1,c.value=null},y=o=>{const s=i.value.findIndex(t=>t.id===o.id);s!==-1&&(i.value[s]=o)},$=o=>{n.openPhotoModal("user",o.id,s=>o.photo=s,1),n.preview=o.photo??S(o.name)};return(o,s)=>(a(),p("div",te,[oe,e("div",se,[e("table",le,[ne,e("tbody",null,[h.value?(a(),p("tr",ae,ue)):(a(),p(w,{key:1},[(a(!0),p(w,null,I(i.value,(t,l)=>(a(),p("tr",{key:t.id,class:"hover:bg-gray-100 *:py-2 *:px-4 *:border-b *:border-gray-200"},[e("td",null,b(l+1),1),e("td",null,[e("img",{src:t.photo??A(S)(t.name),alt:"Photo",class:"size-10 rounded-full object-cover cursor-pointer",onClick:L=>$(t)},null,8,de)]),e("td",null,b(t.name),1),e("td",null,b(t.phone),1),e("td",null,b(t.role||"N/A"),1),e("td",null,[e("button",{class:"btn-2",onClick:L=>m(t)},"Edit",8,ce)])]))),128)),i.value.length===0?(a(),p("tr",ie,ve)):g("",!0)],64))])])]),v.value?(a(),p("div",he,b(v.value),1)):g("",!0),_.value&&c.value?(a(),O(ee,{key:1,user:c.value,isOpen:_.value,onClose:f,onUpdate:y},null,8,["user","isOpen"])):g("",!0)]))}};export{be as default};

import{r as f,o as S,d as r,p as x,e as t,z as C,A as I,N,g as A,t as c,i,c as V,q as j,y as E,F as M,f as D,ab as B,j as L,n as h}from"./index-C2q63Jwc.js";import{u as O}from"./user-D4_7vZ3f.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as z}from"./coupon-D2Vkf78K.js";const R={key:0,class:"modal"},F={class:"card-bg p-4 md:p-8 w-full max-w-xl space-y-2"},K={class:"grid md:grid-cols-2 gap-4"},q={key:0,value:"developer"},G={key:0,class:"mt-4 text-red-600"},H={__name:"EditUser",props:{user:Object,isOpen:Boolean},emits:["close","update"],setup(v,{emit:y}){const d=v,g=y,m=O(),a=f(""),u=f(""),b=f(""),l=f("student"),p=f(""),U=f(null);S(()=>{d.user&&(a.value=d.user.name,u.value=d.user.phone,b.value=d.user.photo,l.value=d.user.role,p.value=d.user.affiliate_status||"")});const w=async()=>{try{const k={name:a.value,phone:u.value,photo:b.value,role:l.value,affiliate_status:p.value};await m.updateUser(d.user.id,k),g("update",k),g("close")}catch(k){U.value=k.message}},$=()=>{g("close")};return(k,s)=>{var n,e;return v.isOpen?(i(),r("div",R,[t("div",F,[s[14]||(s[14]=t("h2",{class:"title-md text-center"},"Edit User",-1)),t("div",null,[s[5]||(s[5]=t("p",null,"Name",-1)),C(t("input",{class:"input-1","onUpdate:modelValue":s[0]||(s[0]=o=>a.value=o),placeholder:"Name"},null,512),[[I,a.value]])]),t("div",null,[s[6]||(s[6]=t("p",null,"Phone",-1)),C(t("input",{class:"input-1","onUpdate:modelValue":s[1]||(s[1]=o=>u.value=o),placeholder:"Phone"},null,512),[[I,u.value]])]),t("div",null,[s[7]||(s[7]=t("p",null,"Photo URL",-1)),C(t("input",{class:"input-1","onUpdate:modelValue":s[2]||(s[2]=o=>b.value=o),placeholder:"Photo URL"},null,512),[[I,b.value]])]),t("div",K,[t("div",null,[s[11]||(s[11]=t("p",null,"Role",-1)),C(t("select",{class:"input-1","onUpdate:modelValue":s[3]||(s[3]=o=>l.value=o)},[((e=(n=A(m))==null?void 0:n.user)==null?void 0:e.role)==="developer"?(i(),r("option",q,"Developer")):x("",!0),s[8]||(s[8]=t("option",{value:"admin"},"Admin",-1)),s[9]||(s[9]=t("option",{value:"instructor"},"Instructor",-1)),s[10]||(s[10]=t("option",{value:"student"},"Student",-1))],512),[[N,l.value]])]),t("div",null,[s[13]||(s[13]=t("p",null,"Affiliate Status",-1)),C(t("select",{class:"input-1","onUpdate:modelValue":s[4]||(s[4]=o=>p.value=o)},s[12]||(s[12]=[t("option",{value:""},"- N/A -",-1),t("option",{value:"Pending"},"Pending",-1),t("option",{value:"Active"},"Active",-1),t("option",{value:"Inactive"},"Inactive",-1)]),512),[[N,p.value]])])]),t("div",{class:"flex justify-center gap-4 pt-4 border-t"},[t("button",{class:"btn-2",onClick:w},"Save"),t("button",{class:"btn-contrast",onClick:$},"Close")]),U.value?(i(),r("div",G,c(U.value),1)):x("",!0)])])):x("",!0)}}},J=T(H,[["__scopeId","data-v-2d6467d1"]]),Q={class:"bg-white border rounded-lg w-full max-w-3xl p-4 max-h-[80vh]"},W={class:"flex justify-between items-center gap-2"},X={class:"mb-0"},Y={class:"border px-3 pt-2 pb-1 rounded-lg"},Z={key:0},tt={class:"text-right"},et={key:1,class:"flex justify-center items-center py-20 text-red-600"},st={__name:"UserEarnListModal",props:{userId:String,onClose:Function},setup(v){const y=v;console.log(y);const d=z(),g=V(()=>{const m=d.userEarnings.reduce((a,u)=>a+parseInt(u.commission_amount),0);return parseInt(m)});return S(()=>{d.fetchUserEarnings({user_id:y.userId})}),(m,a)=>{var u,b;return i(),r("div",{onClick:a[1]||(a[1]=E((...l)=>v.onClose&&v.onClose(...l),["self"])),class:"fixed inset-0 w-full h-full flex justify-center pt-16 bg-black/40 z-[99999999]"},[t("div",Q,[t("div",W,[t("h2",X,[a[2]||(a[2]=j(" Earnings for UserID: ")),t("b",Y,c(v.userId),1)]),t("i",{onClick:a[0]||(a[0]=E((...l)=>v.onClose&&v.onClose(...l),["self"])),class:"fal fa-window-close text-3xl cursor-pointer text-red-500"})]),a[5]||(a[5]=t("hr",{class:"my-3"},null,-1)),(b=(u=A(d))==null?void 0:u.userEarnings)!=null&&b.length?(i(),r("div",Z,[t("p",null,[a[3]||(a[3]=j(" Total Earnings: ")),t("strong",null,c(g.value)+" TK",1)]),t("table",null,[a[4]||(a[4]=t("thead",null,[t("tr",null,[t("th",null,"Date"),t("th",null,"Course"),t("th",{class:"text-right"},"Amount")])],-1)),t("tbody",null,[(i(!0),r(M,null,D(A(d).userEarnings,l=>{var p;return i(),r("tr",{key:l.id},[t("td",null,c(l.date),1),t("td",null,c((p=l==null?void 0:l.course)==null?void 0:p.title),1),t("td",null,[t("div",tt,c(parseInt(l.commission_amount))+" TK",1)])])}),128))])])])):(i(),r("div",et," No earnings found for this promo code. "))])])}}},lt=T(st,[["__scopeId","data-v-15b6ee6c"]]);function _(v){return`https://ui-avatars.com/api/?name=${v}&length=1`}const ot={class:"my-container p-4"},nt={class:"flex items-center gap-2 mb-3"},at={class:"overflow-x-auto"},it={class:"min-w-full bg-white shadow-md rounded-lg overflow-hidden"},rt={class:"font-bold"},ut={class:"*:py-2 *:px-4 *:bg-gray-200 *:text-left *:text-sm *:text-gray-700 *:uppercase *:tracking-wider"},dt={key:0},vt={key:0},pt={class:"text-center"},ft=["src","onClick"],ct={class:"flex justify-center items-center gap-2"},mt=["onClick"],bt=["onClick"],xt={key:0},yt={key:0,class:"mt-4 text-red-600"},ht={__name:"UserList",setup(v){const y=O(),d=B(),g=f(null),m=f(!1),a=f(!1),u=f(null),b=f(!0),l=f("Users");S(async()=>{try{await y.fetchUsers()}catch(n){g.value=n.message}finally{b.value=!1}});const p=V(()=>l.value==="Affiliate"?y.users.filter(n=>n==null?void 0:n.affiliate_status):l.value==="Admins"?y.users.filter(n=>(n==null?void 0:n.role)==="admin"):y.users),U=n=>{u.value=n,m.value=!0},w=n=>{u.value=n,a.value=!0},$=()=>{m.value=!1,u.value=null},k=n=>{const e=p.value.findIndex(o=>o.id===n.id);e!==-1&&(p.value[e]=n)},s=n=>{d.openPhotoModal("user",n.id,e=>n.photo=e,1),d.preview=n.photo??_(n.name)};return(n,e)=>(i(),r("div",ot,[e[12]||(e[12]=t("div",{class:"flex items-center justify-between"},[t("h1",{class:"text-2xl font-bold mb-4"},"User List")],-1)),t("div",nt,[t("button",{class:h(l.value==="Users"?"btn-2":"btn-1"),type:"button",onClick:e[0]||(e[0]=o=>l.value="Users")}," All Users ",2),t("button",{class:h(l.value==="Admins"?"btn-2":"btn-1"),type:"button",onClick:e[1]||(e[1]=o=>l.value="Admins")}," Admin Users ",2),t("button",{class:h(l.value==="Affiliate"?"btn-2":"btn-1"),type:"button",onClick:e[2]||(e[2]=o=>l.value="Affiliate")}," Affiliate Users ",2)]),t("div",at,[t("table",it,[t("thead",rt,[t("tr",ut,[e[4]||(e[4]=t("th",null,[t("div",{class:"text-center"},"User ID")],-1)),e[5]||(e[5]=t("th",null,"Photo",-1)),e[6]||(e[6]=t("th",null,"Name",-1)),e[7]||(e[7]=t("th",null,"Phone",-1)),e[8]||(e[8]=t("th",null,"Role",-1)),l.value==="Affiliate"?(i(),r("th",dt,e[3]||(e[3]=[t("div",{class:"text-center"},"Affiliate",-1)]))):x("",!0),e[9]||(e[9]=t("th",null,[t("div",{class:"text-center"},"Actions")],-1))])]),t("tbody",null,[b.value?(i(),r("tr",vt,e[10]||(e[10]=[t("td",{class:"py-2 px-4 border-b border-gray-200 text-center",colspan:"6"},[t("div",{class:"flex justify-center items-center space-x-2"},[t("div",{class:"w-4 h-4 border-4 border-t-4 border-gray-200 rounded-full animate-spin"}),t("span",null,"Loading...")])],-1)]))):(i(),r(M,{key:1},[(i(!0),r(M,null,D(p.value,o=>(i(),r("tr",{key:o.id,class:"hover:bg-gray-100 *:py-2 *:px-4 *:border-b *:border-gray-200"},[t("td",pt,c(o.id),1),t("td",null,[t("img",{src:o.photo??A(_)(o.name),alt:"Photo",class:"size-10 rounded-full object-cover cursor-pointer",onClick:P=>s(o)},null,8,ft)]),t("td",null,c(o.name),1),t("td",null,c(o.phone),1),t("td",null,c(o.role||"N/A"),1),l.value==="Affiliate"?(i(),r("td",{key:0,class:h(["text-center",o.affiliate_status==="Active"?"text-green-600":"text-red-600"])},c(o.affiliate_status),3)):x("",!0),t("td",null,[t("div",ct,[t("button",{class:"btn-2",onClick:P=>U(o)},"Edit",8,mt),l.value==="Affiliate"?(i(),r("button",{key:0,class:"btn-1",onClick:P=>w(o)}," Earnings ",8,bt)):x("",!0)])])]))),128)),p.value.length===0?(i(),r("tr",xt,e[11]||(e[11]=[t("td",{class:"py-2 px-4 border-b border-gray-200",colspan:"6"},"No users found",-1)]))):x("",!0)],64))])])]),g.value?(i(),r("div",yt,c(g.value),1)):x("",!0),m.value&&u.value?(i(),L(J,{key:1,user:u.value,isOpen:m.value,onClose:$,onUpdate:k},null,8,["user","isOpen"])):x("",!0),a.value?(i(),L(lt,{key:2,userId:`${u.value.id}`,onClose:()=>a.value=!1},null,8,["userId","onClose"])):x("",!0)]))}};export{ht as default};

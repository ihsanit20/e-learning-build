import{l as D,r as a,o as N,s as S,d as m,e as g,f as e,t as i,q as B,x as n,y as M,z as j,m as A,p as u,v as d}from"./index-CNls0FiY.js";import{u as z}from"./user-fmqC6-wi.js";const F={class:"my-container max-w-xl"},L={class:"card-bg p-4 md:p-8 flex flex-col items-center relative space-y-4"},R={class:"bg-gray-200 size-40 rounded-full overflow-hidden relative"},T=["src"],q={class:"flex flex-col border w-full p-4 rounded"},G=e("p",null,[e("strong",null,"Profile Photo")],-1),H={class:"flex w-full text-center gap-4"},I={key:0,class:"text-green-500"},J={key:0,class:"space-y-4 relative w-full"},K=e("h1",{class:"text-center title-lg"},"My Profile",-1),O=e("strong",null,"Name:",-1),Q=e("strong",null,"Phone:",-1),W=e("strong",null,"Date of Birth:",-1),X=e("strong",null,"Email:",-1),Y=e("strong",null,"Address:",-1),Z={class:"flex gap-4 justify-between items-center"},$=e("i",{class:"far fa-edit"},null,-1),ee={key:1,class:"w-full"},te=e("h1",{class:"text-center title-lg"},"Edit Profile",-1),se={class:"flex gap-2 items-center"},le=e("label",{for:"name"},"Name:",-1),ae={class:"flex gap-2 items-center"},oe=e("label",{for:"phone"},"Phone:",-1),ne={class:"flex gap-2 items-center"},ie=e("label",{for:"date_of_birth"},"Date of Birth:",-1),ue={class:"flex gap-2 items-center"},de=e("label",{for:"email"},"Email:",-1),ce={class:"flex gap-2 items-center"},re=e("label",{for:"address"},"Address:",-1),pe=e("button",{class:"btn-2",type:"submit"},"Update",-1),he={__name:"ProfileView",setup(_e){const x=D(),w=z(),c=a(!1),t=a({}),r=a(""),p=a(""),_=a(""),f=a(""),v=a(""),h=a(null),b=a(""),P=()=>{c.value=!0,r.value=t.value.name,p.value=t.value.phone,_.value=t.value.date_of_birth,f.value=t.value.email,v.value=t.value.address},U=()=>{c.value=!1},k=async()=>{const o={name:r.value,phone:p.value,date_of_birth:_.value,email:f.value,address:v.value};await x.updateProfile(o),c.value=!1,await y()},y=async()=>{await x.fetchUser(),t.value=x.user},V=o=>{h.value=o.target.files[0]},C=async()=>{if(!h.value)return;const o=new FormData;o.append("photo",h.value),await w.uploadPhoto(o),await y(),h.value=null,b.value="Photo upload successful"};return N(async()=>{await y()}),(o,s)=>{const E=S("RouterLink");return m(),g("div",F,[e("div",L,[e("div",R,[e("img",{class:"min-w-full min-h-full object-cover",src:t.value.photo,alt:"Profile Photo"},null,8,T)]),e("div",q,[G,e("div",H,[e("input",{type:"file",onChange:V,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:C},"Upload")]),b.value?(m(),g("p",I,i(b.value),1)):B("",!0)]),c.value?(m(),g("div",ee,[te,e("form",{onSubmit:A(k,["prevent"]),class:"space-y-2"},[e("div",se,[le,u(e("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),type:"text",class:"input-1"},null,512),[[d,r.value]])]),e("div",ae,[oe,u(e("input",{id:"phone","onUpdate:modelValue":s[1]||(s[1]=l=>p.value=l),type:"text",class:"input-1"},null,512),[[d,p.value]])]),e("div",ne,[ie,u(e("input",{id:"date_of_birth","onUpdate:modelValue":s[2]||(s[2]=l=>_.value=l),type:"date",class:"input-1"},null,512),[[d,_.value]])]),e("div",ue,[de,u(e("input",{id:"email","onUpdate:modelValue":s[3]||(s[3]=l=>f.value=l),type:"email",class:"input-1"},null,512),[[d,f.value]])]),e("div",ce,[re,u(e("input",{id:"address","onUpdate:modelValue":s[4]||(s[4]=l=>v.value=l),type:"text",class:"input-1"},null,512),[[d,v.value]])]),e("div",{class:"flex justify-center gap-4"},[e("button",{class:"btn-3",onClick:U},"Cancel"),pe])],32)])):(m(),g("div",J,[K,e("p",null,[O,n(" "+i(t.value.name),1)]),e("p",null,[Q,n(" "+i(t.value.phone),1)]),e("p",null,[W,n(" "+i(t.value.date_of_birth),1)]),e("p",null,[X,n(" "+i(t.value.email),1)]),e("p",null,[Y,n(" "+i(t.value.address),1)]),e("div",Z,[e("button",{class:"btn-2 flex-1",onClick:P},[$,n("Edit")]),M(E,{class:"btn-3 flex-1",to:"/profile/change-password"},{default:j(()=>[n(" Change Password ")]),_:1})])]))])])}}};export{he as default};

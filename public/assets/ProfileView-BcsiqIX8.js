import{l as D,r as a,o as B,y as S,d as g,e as b,f as e,t as n,z as i,q as M,A as N,B as A,m as z,p as u,v as d}from"./index-BGHaPwEk.js";import{u as F}from"./user-DHQTDPcp.js";const L={class:"my-container max-w-xl"},R={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},T=e("h1",{class:"title-lg"},"My Profile",-1),j={class:"bg-gray-200 size-40 rounded-full overflow-hidden relative"},q=["src"],G={key:0,class:"space-y-4"},H={class:"title-md text-center"},I=e("strong",null,"Phone:",-1),J=e("strong",null,"Date of Birth:",-1),K=e("strong",null,"Email:",-1),O=e("strong",null,"Address:",-1),Q=e("i",{class:"far fa-edit"},null,-1),W={class:"flex flex-col"},X=e("p",null,[e("strong",null,"Profile Photo")],-1),Y={class:"flex w-full text-center gap-4"},Z={key:0,class:"text-green-500"},$={key:1},ee=e("h1",{class:"text-center title-md"},"Edit Profile",-1),te={class:"flex gap-2 items-center"},se=e("label",{for:"name"},"Name:",-1),le={class:"flex gap-2 items-center"},ae=e("label",{for:"phone"},"Phone:",-1),oe={class:"flex gap-2 items-center"},ne=e("label",{for:"date_of_birth"},"Date of Birth:",-1),ie={class:"flex gap-2 items-center"},ue=e("label",{for:"email"},"Email:",-1),de={class:"flex gap-2 items-center"},ce=e("label",{for:"address"},"Address:",-1),re=e("button",{class:"btn-2",type:"submit"},"Update",-1),fe={__name:"ProfileView",setup(pe){const c=D(),w=F(),r=a(!1),t=a({}),p=a(""),_=a(""),v=a(""),f=a(""),h=a(""),m=a(null),x=a(""),P=()=>{r.value=!0,p.value=t.value.name,_.value=t.value.phone,v.value=t.value.date_of_birth,f.value=t.value.email,h.value=t.value.address},U=()=>{r.value=!1},k=async()=>{const o={name:p.value,phone:_.value,date_of_birth:v.value,email:f.value,address:h.value};await c.updateProfile(o),r.value=!1,await y()},y=async()=>{c.user||await c.fetchUser(),t.value=c.user},V=o=>{m.value=o.target.files[0]},C=async()=>{if(!m.value)return;const o=new FormData;o.append("photo",m.value),await w.uploadPhoto(o),await y(),m.value=null,x.value="Photo upload successful"};return B(async()=>{await y()}),(o,s)=>{const E=S("RouterLink");return g(),b("div",L,[e("div",R,[T,e("div",j,[e("img",{src:t.value.photo,alt:"Profile Photo"},null,8,q)]),r.value?(g(),b("div",$,[ee,e("form",{onSubmit:z(k,["prevent"]),class:"space-y-2"},[e("div",te,[se,u(e("input",{id:"name","onUpdate:modelValue":s[0]||(s[0]=l=>p.value=l),type:"text",class:"input-1"},null,512),[[d,p.value]])]),e("div",le,[ae,u(e("input",{id:"phone","onUpdate:modelValue":s[1]||(s[1]=l=>_.value=l),type:"text",class:"input-1"},null,512),[[d,_.value]])]),e("div",oe,[ne,u(e("input",{id:"date_of_birth","onUpdate:modelValue":s[2]||(s[2]=l=>v.value=l),type:"date",class:"input-1"},null,512),[[d,v.value]])]),e("div",ie,[ue,u(e("input",{id:"email","onUpdate:modelValue":s[3]||(s[3]=l=>f.value=l),type:"email",class:"input-1"},null,512),[[d,f.value]])]),e("div",de,[ce,u(e("input",{id:"address","onUpdate:modelValue":s[4]||(s[4]=l=>h.value=l),type:"text",class:"input-1"},null,512),[[d,h.value]])]),e("div",{class:"flex justify-center gap-4"},[e("button",{class:"btn-3",onClick:U},"Cancel"),re])],32)])):(g(),b("div",G,[e("p",H,n(t.value.name),1),e("p",null,[I,i(" "+n(t.value.phone),1)]),e("p",null,[J,i(" "+n(t.value.date_of_birth),1)]),e("p",null,[K,i(" "+n(t.value.email),1)]),e("p",null,[O,i(" "+n(t.value.address),1)]),e("button",{class:"btn-2 absolute top-4 right-4",onClick:P},[Q,i("Edit ")]),e("div",W,[X,e("div",Y,[e("input",{type:"file",onChange:V,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:C},"Upload")]),x.value?(g(),b("p",Z,n(x.value),1)):M("",!0)]),N(E,{class:"btn-2",to:"/profile/change-password"},{default:A(()=>[i(" Change Password ")]),_:1})]))])])}}};export{fe as default};

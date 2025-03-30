import{k as D,r as a,o as B,d as x,e,p as N,t as i,q as n,B as S,s as M,x as A,y as j,z as u,A as r,i as b}from"./index-B4Mp3J9K.js";import{u as z}from"./user-GF5ZsLzW.js";const F={class:"my-container max-w-xl"},L={class:"card-bg p-4 md:p-8 flex flex-col items-center relative space-y-4"},R={class:"bg-gray-200 size-40 rounded-full overflow-hidden relative"},T=["src"],q={class:"flex flex-col border w-full p-4 rounded"},G={class:"flex w-full text-center gap-4"},H={key:0,class:"text-green-500"},I={key:0,class:"space-y-4 relative w-full"},J={class:"flex gap-4 justify-between items-center"},K={key:1,class:"w-full"},O={class:"flex gap-2 items-center"},Q={class:"flex gap-2 items-center"},W={class:"flex gap-2 items-center"},X={class:"flex gap-2 items-center"},Y={class:"flex gap-2 items-center"},te={__name:"ProfileView",setup(Z){const y=D(),h=z(),d=a(!1),l=a({}),p=a(""),f=a(""),v=a(""),m=a(""),c=a(""),g=a(null),w=a(""),k=()=>{d.value=!0,p.value=l.value.name,f.value=l.value.phone,v.value=l.value.date_of_birth,m.value=l.value.email,c.value=l.value.address},U=()=>{d.value=!1},_=async()=>{const o={name:p.value,phone:f.value,date_of_birth:v.value,email:m.value,address:c.value};await y.updateProfile(o),d.value=!1,await P()},P=async()=>{await y.fetchUser(),l.value=y.user},V=o=>{g.value=o.target.files[0]},C=async()=>{if(!g.value)return;const o=new FormData;o.append("photo",g.value),await h.uploadPhoto(o),await P(),g.value=null,w.value="Photo upload successful"};return B(async()=>{await P()}),(o,t)=>{const E=A("RouterLink");return b(),x("div",F,[e("div",L,[e("div",R,[e("img",{class:"min-w-full min-h-full object-cover",src:l.value.photo,alt:"Profile Photo"},null,8,T)]),e("div",q,[t[5]||(t[5]=e("p",null,[e("strong",null,"Profile Photo")],-1)),e("div",G,[e("input",{type:"file",onChange:V,class:"input-1"},null,32),e("button",{class:"btn-1",onClick:C},"Upload")]),w.value?(b(),x("p",H,i(w.value),1)):N("",!0)]),d.value?(b(),x("div",K,[t[20]||(t[20]=e("h1",{class:"text-center title-lg"},"Edit Profile",-1)),e("form",{onSubmit:j(_,["prevent"]),class:"space-y-2"},[e("div",O,[t[14]||(t[14]=e("label",{for:"name"},"Name:",-1)),u(e("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=s=>p.value=s),type:"text",class:"input-1"},null,512),[[r,p.value]])]),e("div",Q,[t[15]||(t[15]=e("label",{for:"phone"},"Phone:",-1)),u(e("input",{id:"phone","onUpdate:modelValue":t[1]||(t[1]=s=>f.value=s),type:"text",class:"input-1"},null,512),[[r,f.value]])]),e("div",W,[t[16]||(t[16]=e("label",{for:"date_of_birth"},"Date of Birth:",-1)),u(e("input",{id:"date_of_birth","onUpdate:modelValue":t[2]||(t[2]=s=>v.value=s),type:"date",class:"input-1"},null,512),[[r,v.value]])]),e("div",X,[t[17]||(t[17]=e("label",{for:"email"},"Email:",-1)),u(e("input",{id:"email","onUpdate:modelValue":t[3]||(t[3]=s=>m.value=s),type:"email",class:"input-1"},null,512),[[r,m.value]])]),e("div",Y,[t[18]||(t[18]=e("label",{for:"address"},"Address:",-1)),u(e("input",{id:"address","onUpdate:modelValue":t[4]||(t[4]=s=>c.value=s),type:"text",class:"input-1"},null,512),[[r,c.value]])]),e("div",{class:"flex justify-center gap-4"},[e("button",{class:"btn-3",onClick:U},"Cancel"),t[19]||(t[19]=e("button",{class:"btn-2",type:"submit"},"Update",-1))])],32)])):(b(),x("div",I,[t[13]||(t[13]=e("h1",{class:"text-center title-lg"},"My Profile",-1)),e("p",null,[t[6]||(t[6]=e("strong",null,"Name:",-1)),n(" "+i(l.value.name),1)]),e("p",null,[t[7]||(t[7]=e("strong",null,"Phone:",-1)),n(" "+i(l.value.phone),1)]),e("p",null,[t[8]||(t[8]=e("strong",null,"Date of Birth:",-1)),n(" "+i(l.value.date_of_birth),1)]),e("p",null,[t[9]||(t[9]=e("strong",null,"Email:",-1)),n(" "+i(l.value.email),1)]),e("p",null,[t[10]||(t[10]=e("strong",null,"Address:",-1)),n(" "+i(l.value.address),1)]),e("div",J,[e("button",{class:"btn-2 flex-1",onClick:k},t[11]||(t[11]=[e("i",{class:"far fa-edit"},null,-1),n("Edit")])),S(E,{class:"btn-3 flex-1",to:"/profile/change-password"},{default:M(()=>t[12]||(t[12]=[n(" Change Password ")])),_:1})])]))])])}}};export{te as default};

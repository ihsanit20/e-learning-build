import{l as h,r as o,d as n,e as l,f as s,m as y,p as u,D as p,t as _,q as g}from"./index-BGHaPwEk.js";const x={class:"my-container max-w-xl"},P={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},b=s("h1",{class:"title-lg"},"Change Password",-1),C={class:"flex gap-2 items-center"},V=s("label",{for:"current-password"},"Current Password:",-1),k=["type"],S={class:"flex gap-2 items-center"},D=s("label",{for:"new-password"},"New Password:",-1),N=["type"],B={class:"flex gap-2 items-center"},M=s("label",{for:"new-password-confirmation"},"Confirm New Password:",-1),U=["type"],j={class:"flex justify-center"},q={key:0,class:"far fa-eye-slash"},A={key:1,class:"far fa-eye"},E=s("div",{class:"flex justify-center gap-4"},[s("button",{class:"btn-2",type:"submit"},"Change Password")],-1),H={key:0,class:"message"},G={__name:"ChangePasswordView",setup(z){const v=h(),i=o(""),r=o(""),d=o(""),c=o(""),e=o(!1),f=async()=>{const w=await v.changePassword(i.value,r.value,d.value);c.value=w},m=()=>{e.value=!e.value};return(w,t)=>(n(),l("div",x,[s("div",P,[b,s("form",{onSubmit:y(f,["prevent"]),class:"space-y-2"},[s("div",C,[V,u(s("input",{id:"current-password","onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),type:e.value?"text":"password",class:"input-1"},null,8,k),[[p,i.value]])]),s("div",S,[D,u(s("input",{id:"new-password","onUpdate:modelValue":t[1]||(t[1]=a=>r.value=a),type:e.value?"text":"password",class:"input-1"},null,8,N),[[p,r.value]])]),s("div",B,[M,u(s("input",{id:"new-password-confirmation","onUpdate:modelValue":t[2]||(t[2]=a=>d.value=a),type:e.value?"text":"password",class:"input-1"},null,8,U),[[p,d.value]])]),s("div",j,[s("button",{onClick:m,type:"button",class:"space-x-2"},[e.value?(n(),l("i",q)):(n(),l("i",A)),s("span",null,_(e.value?"Hide Password":"Show Password"),1)])]),E],32),c.value?(n(),l("p",H,_(c.value),1)):g("",!0)])]))}};export{G as default};

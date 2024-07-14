import{l as h,d as o,o as n,g as l,a as s,m as y,p as u,A as p,t as _,s as g}from"./index-Djx28oNT.js";const x={class:"my-container max-w-xl"},P={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},b=s("h1",{class:"title-lg"},"Change Password",-1),C={class:"flex gap-2 items-center"},V=s("label",{for:"current-password"},"Current Password:",-1),k=["type"],S={class:"flex gap-2 items-center"},N=s("label",{for:"new-password"},"New Password:",-1),B=["type"],D={class:"flex gap-2 items-center"},M=s("label",{for:"new-password-confirmation"},"Confirm New Password:",-1),U=["type"],j={class:"flex justify-center"},A={key:0,class:"far fa-eye-slash"},E={key:1,class:"far fa-eye"},H=s("div",{class:"flex justify-center gap-4"},[s("button",{class:"btn-2",type:"submit"},"Change Password")],-1),q={key:0,class:"message"},G={__name:"ChangePasswordView",setup(z){const v=h(),i=o(""),r=o(""),d=o(""),c=o(""),e=o(!1),m=async()=>{const w=await v.changePassword(i.value,r.value,d.value);c.value=w},f=()=>{e.value=!e.value};return(w,t)=>(n(),l("div",x,[s("div",P,[b,s("form",{onSubmit:y(m,["prevent"]),class:"space-y-2"},[s("div",C,[V,u(s("input",{id:"current-password","onUpdate:modelValue":t[0]||(t[0]=a=>i.value=a),type:e.value?"text":"password",class:"input-1"},null,8,k),[[p,i.value]])]),s("div",S,[N,u(s("input",{id:"new-password","onUpdate:modelValue":t[1]||(t[1]=a=>r.value=a),type:e.value?"text":"password",class:"input-1"},null,8,B),[[p,r.value]])]),s("div",D,[M,u(s("input",{id:"new-password-confirmation","onUpdate:modelValue":t[2]||(t[2]=a=>d.value=a),type:e.value?"text":"password",class:"input-1"},null,8,U),[[p,d.value]])]),s("div",j,[s("button",{onClick:f,type:"button",class:"space-x-2"},[e.value?(n(),l("i",A)):(n(),l("i",E)),s("span",null,_(e.value?"Hide Password":"Show Password"),1)])]),H],32),c.value?(n(),l("p",q,_(c.value),1)):g("",!0)])]))}};export{G as default};

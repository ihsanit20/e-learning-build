import{k as _,r as o,d as n,e as s,p as g,y as x,z as p,C as c,t as v,i as l}from"./index-BRjg0X-h.js";const P={class:"my-container max-w-xl"},b={class:"card-bg p-4 md:p-8 flex flex-col items-center relative"},h={class:"flex gap-2 items-center"},C=["type"],V={class:"flex gap-2 items-center"},k=["type"],S={class:"flex gap-2 items-center"},N=["type"],B={class:"flex justify-center"},D={key:0,class:"far fa-eye-slash"},M={key:1,class:"far fa-eye"},U={key:0,class:"message"},A={__name:"ChangePasswordView",setup(j){const f=_(),r=o(""),i=o(""),d=o(""),u=o(""),t=o(!1),m=async()=>{const w=await f.changePassword(r.value,i.value,d.value);u.value=w},y=()=>{t.value=!t.value};return(w,e)=>(l(),n("div",P,[s("div",b,[e[7]||(e[7]=s("h1",{class:"title-lg"},"Change Password",-1)),s("form",{onSubmit:x(m,["prevent"]),class:"space-y-2"},[s("div",h,[e[3]||(e[3]=s("label",{for:"current-password"},"Current Password:",-1)),p(s("input",{id:"current-password","onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),type:t.value?"text":"password",class:"input-1"},null,8,C),[[c,r.value]])]),s("div",V,[e[4]||(e[4]=s("label",{for:"new-password"},"New Password:",-1)),p(s("input",{id:"new-password","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),type:t.value?"text":"password",class:"input-1"},null,8,k),[[c,i.value]])]),s("div",S,[e[5]||(e[5]=s("label",{for:"new-password-confirmation"},"Confirm New Password:",-1)),p(s("input",{id:"new-password-confirmation","onUpdate:modelValue":e[2]||(e[2]=a=>d.value=a),type:t.value?"text":"password",class:"input-1"},null,8,N),[[c,d.value]])]),s("div",B,[s("button",{onClick:y,type:"button",class:"space-x-2"},[t.value?(l(),n("i",D)):(l(),n("i",M)),s("span",null,v(t.value?"Hide Password":"Show Password"),1)])]),e[6]||(e[6]=s("div",{class:"flex justify-center gap-4"},[s("button",{class:"btn-2",type:"submit"},"Change Password")],-1))],32),u.value?(l(),n("p",U,v(u.value),1)):g("",!0)])]))}};export{A as default};

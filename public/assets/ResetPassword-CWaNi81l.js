import{r as t,k as _,b as k,c as q,o as C,e as c,f as v,g as s,y as N,s as R,t as m,z as x,B as b,n as h,q as g}from"./index-DIWD3pil.js";const V={class:"max-w-md mx-auto my-10 px-2"},B={class:"bg-white p-6 rounded-lg shadow-md"},S={class:"font-medium text-gray-900 text-center"},D={class:"font-bold"},M={class:"relative"},T=["type"],j={class:"relative"},z=["type"],E={key:0,class:"mt-4 text-sm text-red-500 text-center"},U={key:1,class:"mt-4 text-sm text-green-500 text-center"},F={__name:"ResetPassword",setup($){const i=t(""),d=t(""),p=t(""),n=t(""),r=t(""),f=_(),o=k(),y=q(),l=t(!1),u=t(!1),P=async()=>{try{const w=o.query.phone;await f.resetPassword(o.query.otp,w||p.value,i.value,d.value)&&(r.value="Password reset successfully.",n.value="",setTimeout(()=>{y.push("/login")},2e3))}catch{n.value=f.error||"Failed to reset password. Try again.",r.value=""}};return C(()=>{if(!o.query.otp)return y.replace("/join");o.query.phone&&(p.value=o.query.phone)}),(w,e)=>(c(),v("div",V,[s("div",B,[e[8]||(e[8]=s("h2",{class:"title-lg text-center"},"Reset Password",-1)),s("form",{onSubmit:N(P,["prevent"]),class:"space-y-4"},[s("div",S,[e[4]||(e[4]=R(" Your phone number is ")),s("span",D,m(p.value),1)]),s("div",null,[e[5]||(e[5]=s("label",{for:"new-password",class:"block font-medium text-gray-700"},"New Password",-1)),s("div",M,[x(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),type:l.value?"text":"password",id:"new-password",name:"new-password",class:"input-1 w-full",placeholder:"Enter new password",required:""},null,8,T),[[b,i.value]]),s("button",{type:"button",class:"absolute inset-y-0 right-0 px-3 text-gray-600",onClick:e[1]||(e[1]=a=>l.value=!l.value)},[s("i",{class:h(l.value?"fas fa-eye-slash":"far fa-eye")},null,2)])])]),s("div",null,[e[6]||(e[6]=s("label",{for:"new-password-confirmation",class:"block font-medium text-gray-700"},"Confirm New Password",-1)),s("div",j,[x(s("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>d.value=a),type:u.value?"text":"password",id:"new-password-confirmation",name:"new-password-confirmation",class:"input-1 w-full",placeholder:"Confirm new password",required:""},null,8,z),[[b,d.value]]),s("button",{type:"button",class:"absolute inset-y-0 right-0 px-3 text-gray-600",onClick:e[3]||(e[3]=a=>u.value=!u.value)},[s("i",{class:h(u.value?"fas fa-eye-slash":"far fa-eye")},null,2)])])]),n.value?(c(),v("div",E,m(n.value),1)):g("",!0),r.value?(c(),v("div",U,m(r.value),1)):g("",!0),e[7]||(e[7]=s("div",{class:"flex justify-center"},[s("button",{type:"submit",class:"btn-2"},"Reset Password")],-1))],32)])]))}};export{F as default};

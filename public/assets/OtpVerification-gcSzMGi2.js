import{r as s,k as b,o as O,b as g,d as a,e,y as w,p as c,q as _,t as p,z as T,A as k,h as P,i as n}from"./index-BRjg0X-h.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const q={class:"max-w-md mx-auto my-10 px-2"},S={class:"bg-white p-6 rounded-lg shadow-md"},A={class:"font-medium text-gray-900 text-center"},B={class:"font-bold"},I={class:"flex justify-center items-center"},M={key:0,class:"loader"},N={key:1,class:"text-green-500 text-2xl"},R={key:0,class:"mt-4 text-sm text-red-500 text-center"},j={key:1,class:"mt-4 text-sm text-green-500 text-center"},D={class:"flex justify-center"},E=["disabled"],z={__name:"OtpVerification",setup(C){const l=s(""),r=s(""),i=s(""),u=s(""),o=s(!1),d=s(!1),v=b(),x=P(),f=g(),y=async()=>{o.value=!0,d.value=!1;try{await v.verifyOtp(l.value,r.value)&&(u.value="OTP verification completed.",i.value="",o.value=!1,d.value=!0,setTimeout(()=>{x.push({name:"ResetPassword",query:{phone:l.value,otp:r.value}})},2e3))}catch{i.value=v.error||"Invalid OTP. Please try again.",u.value="",o.value=!1}};return O(()=>{f.query.phone&&(l.value=f.query.phone)}),(m,t)=>(n(),a("div",q,[e("div",S,[t[4]||(t[4]=e("h2",{class:"title-lg text-center"},"Verify OTP",-1)),e("form",{onSubmit:w(y,["prevent"]),class:"space-y-4"},[e("div",A,[t[1]||(t[1]=_(" An OTP has been sent to (")),e("span",B,p(l.value),1),t[2]||(t[2]=_(") this number. "))]),e("div",null,[T(e("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>r.value=h),type:"text",id:"otp",name:"otp",class:"input-1 w-full",placeholder:"Enter the OTP",required:""},null,512),[[k,r.value]])]),e("div",I,[o.value?(n(),a("span",M)):c("",!0),d.value?(n(),a("span",N,t[3]||(t[3]=[e("i",{class:"fad fa-check-circle"},null,-1)]))):c("",!0)]),i.value?(n(),a("div",R,p(i.value),1)):c("",!0),u.value?(n(),a("div",j,p(u.value),1)):c("",!0),e("div",D,[e("button",{type:"submit",class:"btn-2",disabled:o.value},"Verify OTP",8,E)])],32)])]))}},G=V(z,[["__scopeId","data-v-46e2d02f"]]);export{G as default};

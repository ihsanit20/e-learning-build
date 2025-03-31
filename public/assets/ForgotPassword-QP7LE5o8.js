import{r as n,k as x,o as y,b as g,d as l,e,y as b,p as i,z as k,A as w,t as m,h as P,i as u}from"./index-uPh3lHus.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O={class:"max-w-md mx-auto my-10 px-2"},S={class:"bg-white p-6 rounded-lg shadow-md"},T={class:"relative"},q={class:"flex justify-center items-center"},F={key:0,class:"loader"},V={key:1,class:"text-green-500 text-2xl"},A={key:0,class:"mt-4 text-sm text-red-500 text-center"},B={key:1,class:"mt-4 text-sm text-green-500 text-center"},M={class:"flex justify-center"},N=["disabled"],j={__name:"ForgotPassword",setup(D){const o=n(""),a=n(""),c=n(""),r=n(!1),d=n(!1),p=x(),h=P(),v=g();y(()=>{v.query.phone&&(o.value=v.query.phone)});const f=async()=>{r.value=!0,d.value=!1;try{const s=o.value.startsWith("+88")?o.value:`+88${o.value}`;await p.sendOtp(s)&&(c.value="OTP sent successfully. Please check your phone.",a.value="",r.value=!1,d.value=!0,setTimeout(()=>{h.push({name:"OtpVerification",query:{phone:s}})},2500))}catch(s){console.log("Error:",s),s.response&&s.response.status===404?a.value="The phone number is not registered.":s.response&&s.response.status===500?a.value="Failed to send OTP. Please try again later.":a.value=p.error||"An unexpected error occurred.",r.value=!1,c.value=""}};return(s,t)=>(u(),l("div",O,[e("div",S,[t[3]||(t[3]=e("h2",{class:"title-lg text-center"},"Forgot Password?",-1)),e("form",{onSubmit:b(f,["prevent"]),class:"space-y-4"},[e("div",null,[t[1]||(t[1]=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1)),e("div",T,[k(e("input",{"onUpdate:modelValue":t[0]||(t[0]=_=>o.value=_),type:"text",id:"phone",name:"phone",class:"input-1",autofocus:"",placeholder:"01XXXXXXXXX",required:""},null,512),[[w,o.value]])])]),e("div",q,[r.value?(u(),l("span",F)):i("",!0),d.value?(u(),l("span",V,t[2]||(t[2]=[e("i",{class:"fad fa-check-circle"},null,-1)]))):i("",!0)]),a.value?(u(),l("div",A,m(a.value),1)):i("",!0),c.value?(u(),l("div",B,m(c.value),1)):i("",!0),e("div",M,[e("button",{type:"submit",class:"btn-2",disabled:r.value},"Send OTP",8,N)])],32)])]))}},R=X(j,[["__scopeId","data-v-7a7a749c"]]);export{R as default};

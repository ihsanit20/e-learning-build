import{r,k as g,c as b,b as w,o as k,e as n,f as c,g as e,x as P,z as S,A as X,p as i,t as m,B as O,C as T}from"./index-BedAWJhs.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=l=>(O("data-v-7a7a749c"),l=l(),T(),l),q={class:"max-w-md mx-auto my-10 px-2"},B={class:"bg-white p-6 rounded-lg shadow-md"},F=h(()=>e("h2",{class:"title-lg text-center"},"Forgot Password?",-1)),V=h(()=>e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1)),A={class:"relative"},M={class:"flex justify-center items-center"},N={key:0,class:"loader"},j={key:1,class:"text-green-500 text-2xl"},C=h(()=>e("i",{class:"fad fa-check-circle"},null,-1)),D=[C],E={key:0,class:"mt-4 text-sm text-red-500 text-center"},R={key:1,class:"mt-4 text-sm text-green-500 text-center"},z={class:"flex justify-center"},U=["disabled"],W={__name:"ForgotPassword",setup(l){const t=r(""),o=r(""),u=r(""),a=r(!1),d=r(!1),_=g(),f=b(),v=w();k(()=>{v.query.phone&&(t.value=v.query.phone)});const x=async()=>{a.value=!0,d.value=!1;try{const s=t.value.startsWith("+88")?t.value:`+88${t.value}`;await _.sendOtp(s)&&(u.value="OTP sent successfully. Please check your phone.",o.value="",a.value=!1,d.value=!0,setTimeout(()=>{f.push({name:"OtpVerification",query:{phone:s}})},2500))}catch(s){console.log("Error:",s),s.response&&s.response.status===404?o.value="The phone number is not registered.":s.response&&s.response.status===500?o.value="Failed to send OTP. Please try again later.":o.value=_.error||"An unexpected error occurred.",a.value=!1,u.value=""}};return(s,p)=>(n(),c("div",q,[e("div",B,[F,e("form",{onSubmit:P(x,["prevent"]),class:"space-y-4"},[e("div",null,[V,e("div",A,[S(e("input",{"onUpdate:modelValue":p[0]||(p[0]=y=>t.value=y),type:"text",id:"phone",name:"phone",class:"input-1",autofocus:"",placeholder:"01XXXXXXXXX",required:""},null,512),[[X,t.value]])])]),e("div",M,[a.value?(n(),c("span",N)):i("",!0),d.value?(n(),c("span",j,D)):i("",!0)]),o.value?(n(),c("div",E,m(o.value),1)):i("",!0),u.value?(n(),c("div",R,m(u.value),1)):i("",!0),e("div",z,[e("button",{type:"submit",class:"btn-2",disabled:a.value},"Send OTP",8,U)])],32)])]))}},H=I(W,[["__scopeId","data-v-7a7a749c"]]);export{H as default};

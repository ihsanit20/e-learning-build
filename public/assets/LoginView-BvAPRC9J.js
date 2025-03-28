import{r as n,k as b,o as h,b as k,d as m,e as t,y as V,B as v,p as q,z as x,A as C,C as P,n as N,s as c,x as S,t as _,q as i,h as B,i as y}from"./index-DrPNioED.js";const D={class:"max-w-md mx-auto my-10 px-2"},M={class:"bg-white p-6 rounded-lg shadow-md"},A={class:"relative"},E=["type"],L={key:0,class:"mt-4 text-sm text-red-500 text-center"},R={class:"mt-4 text-sm text-center"},T={__name:"LoginView",setup(z){const s=n(""),l=n(""),f=B(),d=k(),u=b(),o=n(""),a=n(!1);h(()=>{d.query.phone&&(s.value=d.query.phone)});const g=async()=>{try{await u.login(s.value,l.value),u.error?o.value=u.error:f.push(localStorage.getItem("next")??"/dashboard")}catch{o.value="An unexpected error occurred. Please try again."}};return(w,e)=>{const p=S("router-link");return y(),m("div",D,[t("div",M,[e[9]||(e[9]=t("h2",{class:"title-lg text-center"},"Login",-1)),t("form",{onSubmit:V(g,["prevent"]),class:"space-y-4"},[t("div",null,[e[3]||(e[3]=t("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1)),x(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[C,s.value]])]),t("div",null,[e[4]||(e[4]=t("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1)),t("div",A,[x(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>l.value=r),type:a.value?"text":"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,8,E),[[P,l.value]]),t("button",{type:"button",class:"absolute inset-y-0 right-0 px-3 text-gray-600",onClick:e[2]||(e[2]=r=>a.value=!a.value)},[t("i",{class:N(a.value?"fas fa-eye-slash":"far fa-eye")},null,2)])])]),v(p,{to:{name:"ForgotPassword",query:{phone:s.value}},class:"text-indigo-500 hover:text-indigo-700"},{default:c(()=>e[5]||(e[5]=[i("Forgot Password?")])),_:1},8,["to"]),o.value?(y(),m("div",L,_(o.value),1)):q("",!0),e[6]||(e[6]=t("div",{class:"flex justify-center"},[t("button",{type:"submit",class:"btn-2"},"Login")],-1))],32),t("div",R,[e[8]||(e[8]=i(" Don't have an account? ")),v(p,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:c(()=>e[7]||(e[7]=[i("Register")])),_:1})])])])}}};export{T as default};

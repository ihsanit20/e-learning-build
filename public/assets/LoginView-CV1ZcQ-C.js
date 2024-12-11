import{r as n,c as y,b as w,k as b,o as k,m as V,e as p,f as m,g as e,x as q,z as v,A as P,D as C,n as D,E as h,s as x,t as N,p as S,q as i}from"./index-DobcMGJW.js";const E={class:"max-w-md mx-auto my-10 px-2"},M={class:"bg-white p-6 rounded-lg shadow-md"},A=e("h2",{class:"title-lg text-center"},"Login",-1),B=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),L=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),R={class:"relative"},z=["type"],F={key:0,class:"mt-4 text-sm text-red-500 text-center"},T=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),U={class:"mt-4 text-sm text-center"},$={__name:"LoginView",setup(j){const s=n(""),l=n(""),_=y(),d=w(),u=b(),o=n(""),a=n(!1);k(()=>{d.query.phone&&(s.value=d.query.phone)});const f=async()=>{try{await u.login(s.value,l.value),u.error?o.value=u.error:_.push(localStorage.getItem("next")??"/dashboard")}catch{o.value="An unexpected error occurred. Please try again."}};return(g,t)=>{const c=V("router-link");return p(),m("div",E,[e("div",M,[A,e("form",{onSubmit:q(f,["prevent"]),class:"space-y-4"},[e("div",null,[B,v(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.value=r),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[P,s.value]])]),e("div",null,[L,e("div",R,[v(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>l.value=r),type:a.value?"text":"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,8,z),[[C,l.value]]),e("button",{type:"button",class:"absolute inset-y-0 right-0 px-3 text-gray-600",onClick:t[2]||(t[2]=r=>a.value=!a.value)},[e("i",{class:D(a.value?"fas fa-eye-slash":"far fa-eye")},null,2)])])]),h(c,{to:{name:"ForgotPassword",query:{phone:s.value}},class:"text-indigo-500 hover:text-indigo-700"},{default:x(()=>[i("Forgot Password?")]),_:1},8,["to"]),o.value?(p(),m("div",F,N(o.value),1)):S("",!0),T],32),e("div",U,[i(" Don't have an account? "),h(c,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:x(()=>[i("Register")]),_:1})])])])}}};export{$ as default};

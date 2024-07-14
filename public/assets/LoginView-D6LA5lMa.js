import{d as r,k as f,q as x,l as g,e as y,r as b,o as i,g as d,a as e,p as c,v as p,m as k,b as m,z as V,w as q,t as N,s as S}from"./index-Djx28oNT.js";const B={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},C=e("h2",{class:"title-lg text-center"},"Login",-1),D=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),E=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),L=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),M={class:"mt-4 text-sm text-center"},R={key:0,class:"mt-4 text-sm text-red-500"},U={__name:"LoginView",setup(P){const t=r(""),s=r(""),h=f(),l=x(),u=g(),a=r("");y(()=>{l.query.phone&&(t.value=l.query.phone)});const v=async()=>{try{await u.login(t.value,s.value),u.error||h.push("/dashboard")}catch{a.value="Invalid phone number or password."}};return(_,o)=>{const w=b("router-link");return i(),d("div",B,[C,e("form",{onSubmit:k(v,["prevent"]),class:"space-y-4"},[e("div",null,[D,c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[p,t.value]])]),e("div",null,[E,c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>s.value=n),type:"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,512),[[p,s.value]])]),L],32),e("div",M,[m(" Don't have an account? "),V(w,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:q(()=>[m("Register")]),_:1})]),a.value?(i(),d("div",R,N(a.value),1)):S("",!0)])}}};export{U as default};

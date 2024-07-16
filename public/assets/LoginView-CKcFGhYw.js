import{e as r,p as w,f as x,q as g,g as y,r as b,o as i,j as d,a as e,v as c,x as p,s as k,b as m,B as V,w as q,t as N,y as B}from"./index-BagFNDAU.js";const S={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},C=e("h2",{class:"title-lg text-center"},"Login",-1),D=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),E=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),L=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),M={class:"mt-4 text-sm text-center"},R={key:0,class:"mt-4 text-sm text-red-500"},T={__name:"LoginView",setup(j){const t=r(""),s=r(""),h=w(),l=x(),u=g(),a=r("");y(()=>{l.query.phone&&(t.value=l.query.phone)});const v=async()=>{try{await u.login(t.value,s.value),u.error||h.push("/dashboard")}catch{a.value="Invalid phone number or password."}};return(_,o)=>{const f=b("router-link");return i(),d("div",S,[C,e("form",{onSubmit:k(v,["prevent"]),class:"space-y-4"},[e("div",null,[D,c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[p,t.value]])]),e("div",null,[E,c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>s.value=n),type:"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,512),[[p,s.value]])]),L],32),e("div",M,[m(" Don't have an account? "),V(f,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:q(()=>[m("Register")]),_:1})]),a.value?(i(),d("div",R,N(a.value),1)):B("",!0)])}}};export{T as default};

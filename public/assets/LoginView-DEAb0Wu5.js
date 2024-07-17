import{r,k as w,b as x,l as y,o as g,y as b,d as i,e as d,f as e,p as c,v as p,m as k,z as m,A as V,B as q,t as N,q as B}from"./index-D1cIuKqz.js";const S={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},C=e("h2",{class:"title-lg text-center"},"Login",-1),D=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),E=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),L=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),M={class:"mt-4 text-sm text-center"},R={key:0,class:"mt-4 text-sm text-red-500"},T={__name:"LoginView",setup(A){const t=r(""),s=r(""),h=w(),l=x(),u=y(),a=r("");g(()=>{l.query.phone&&(t.value=l.query.phone)});const v=async()=>{try{await u.login(t.value,s.value),u.error||h.push("/dashboard")}catch{a.value="Invalid phone number or password."}};return(_,o)=>{const f=b("router-link");return i(),d("div",S,[C,e("form",{onSubmit:k(v,["prevent"]),class:"space-y-4"},[e("div",null,[D,c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[p,t.value]])]),e("div",null,[E,c(e("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>s.value=n),type:"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,512),[[p,s.value]])]),L],32),e("div",M,[m(" Don't have an account? "),V(f,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:q(()=>[m("Register")]),_:1})]),a.value?(i(),d("div",R,N(a.value),1)):B("",!0)])}}};export{T as default};

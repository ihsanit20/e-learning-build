import{r as n,c as f,b as x,k as _,o as g,e as c,f as d,g as e,x as y,z as u,A as i,i as m,t as w,p as b}from"./index-BLC7tZcK.js";const V={class:"max-w-6xl mx-auto py-4"},R={class:"card-bg p-8"},k=e("h1",{class:"title-lg text-center"},"Register",-1),N=e("button",{class:"btn-2",type:"submit"},"Register",-1),S={key:0,class:"error-message"},q={__name:"RegisterView",setup(B){const r=n(""),o=n(""),l=n(""),v=f(),p=x(),a=_();g(()=>{p.query.phone&&(o.value=p.query.phone)});const h=async()=>{await a.register(r.value,o.value,l.value),a.error||v.push("/")};return(M,t)=>(c(),d("div",V,[e("div",R,[k,e("form",{class:"flex flex-col gap-4",onSubmit:y(h,["prevent"])},[u(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),type:"text",placeholder:"Full Name"},null,512),[[i,r.value]]),u(e("input",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=s=>o.value=s),type:"text",placeholder:"Phone Number"},null,512),[[i,o.value]]),u(e("input",{class:"input-1","onUpdate:modelValue":t[2]||(t[2]=s=>l.value=s),type:"password",placeholder:"Password"},null,512),[[i,l.value]]),N],32),m(a).error?(c(),d("div",S,w(m(a).error),1)):b("",!0)])]))}};export{q as default};

import{_ as x,d as u,k as f,q as y,l as w,e as S,o as c,g as m,a as e,m as V,p,v as i,i as v,t as b,s as R,x as k,y as I}from"./index-DsjxbswV.js";const _=o=>(k("data-v-853ed96e"),o=o(),I(),o),N={class:"max-w-6xl mx-auto py-4"},q={class:"card-bg p-8"},B=_(()=>e("h1",{class:"title-lg text-center"},"Register",-1)),M=_(()=>e("button",{class:"btn-2",type:"submit"},"Register",-1)),U={key:0,class:"error-message"},D={__name:"RegisterView",setup(o){const l=u(""),a=u(""),n=u(""),h=f(),d=y(),r=w();S(()=>{d.query.phone&&(a.value=d.query.phone)});const g=async()=>{await r.register(l.value,a.value,n.value),r.error||h.push("/login")};return(P,t)=>(c(),m("div",N,[e("div",q,[B,e("form",{class:"flex flex-col gap-4",onSubmit:V(g,["prevent"])},[p(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),type:"text",placeholder:"Full Name"},null,512),[[i,l.value]]),p(e("input",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),type:"text",placeholder:"Phone Number"},null,512),[[i,a.value]]),p(e("input",{class:"input-1","onUpdate:modelValue":t[2]||(t[2]=s=>n.value=s),type:"password",placeholder:"Password"},null,512),[[i,n.value]]),M],32),v(r).error?(c(),m("div",U,b(v(r).error),1)):R("",!0)])]))}},C=x(D,[["__scopeId","data-v-853ed96e"]]);export{C as default};
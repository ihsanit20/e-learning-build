import{_ as x,e as n,p as g,f as y,q as w,g as b,o as d,j as m,a as e,s as S,v as p,x as i,l as v,t as V,y as R,z as I,A as N}from"./index-m017vwY3.js";const _=o=>(I("data-v-cb2f1183"),o=o(),N(),o),k={class:"max-w-6xl mx-auto py-4"},q={class:"card-bg p-8"},B=_(()=>e("h1",{class:"title-lg text-center"},"Register",-1)),M=_(()=>e("button",{class:"btn-2",type:"submit"},"Register",-1)),U={key:0,class:"error-message"},A={__name:"RegisterView",setup(o){const l=n(""),a=n(""),u=n(""),h=g(),c=y(),r=w();b(()=>{c.query.phone&&(a.value=c.query.phone)});const f=async()=>{await r.register(l.value,a.value,u.value),r.error||h.push("/dashboard")};return(D,t)=>(d(),m("div",k,[e("div",q,[B,e("form",{class:"flex flex-col gap-4",onSubmit:S(f,["prevent"])},[p(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),type:"text",placeholder:"Full Name"},null,512),[[i,l.value]]),p(e("input",{class:"input-1","onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),type:"text",placeholder:"Phone Number"},null,512),[[i,a.value]]),p(e("input",{class:"input-1","onUpdate:modelValue":t[2]||(t[2]=s=>u.value=s),type:"password",placeholder:"Password"},null,512),[[i,u.value]]),M],32),v(r).error?(d(),m("div",U,V(v(r).error),1)):R("",!0)])]))}},j=x(A,[["__scopeId","data-v-cb2f1183"]]);export{j as default};

import{r as n,c as x,b as f,k as h,o as y,e as p,f as m,g as t,y as b,z as u,A as i,n as w,i as c,t as q,q as V}from"./index-BalslWPS.js";const R={class:"max-w-md mx-auto my-10 px-2"},S={class:"card-bg p-8"},k={key:0,class:"error-message"},M={__name:"RegisterView",setup(N){const l=n(""),a=n(""),r=n(""),v=x(),d=f(),o=h();y(()=>{d.query.phone&&(a.value=d.query.phone)});const g=async()=>{await o.register(l.value,a.value,r.value),o.error||v.push(localStorage.getItem("next")??"/dashboard")};return(_,e)=>(p(),m("div",R,[t("div",S,[e[4]||(e[4]=t("h1",{class:"title-lg text-center"},"Register",-1)),t("form",{class:"flex flex-col gap-4",onSubmit:b(g,["prevent"])},[u(t("input",{class:"input-1","onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),type:"text",placeholder:"Full Name",required:""},null,512),[[i,l.value]]),u(t("input",{class:"input-1","onUpdate:modelValue":e[1]||(e[1]=s=>a.value=s),type:"text",placeholder:"Phone Number",required:""},null,512),[[i,a.value]]),u(t("input",{class:"input-1","onUpdate:modelValue":e[2]||(e[2]=s=>r.value=s),type:"password",placeholder:"Password",required:"",minlength:6},null,512),[[i,r.value]]),t("div",{class:w(["text-xs -mt-3 pl-1",r.value.length<6?"text-red-600":"text-green-600"])}," * Password must be at least 6 characters ",2),e[3]||(e[3]=t("button",{class:"btn-2",type:"submit"},"Register",-1))],32),c(o).error?(p(),m("div",k,q(c(o).error),1)):V("",!0)])]))}};export{M as default};

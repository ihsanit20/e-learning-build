import{r as u,I as g,P as f,x as d,z as t,A as h,M as y,U as n,a9 as i,H as b,B as m,C as w,T as V,y as c}from"./vue-BP9P6hCg.js";import{b as q}from"./index-C-7Rzlh_.js";import"./vendor-PJuFQbji.js";const R={class:"max-w-md mx-auto my-10 px-2"},S={class:"card-bg p-8"},B={key:0,class:"error-message"},k={__name:"RegisterView",setup(M){const l=u(""),r=u(""),a=u(""),v=V(),p=f(),o=q();g(()=>{p.query.phone&&(r.value=p.query.phone)});const x=async()=>{await o.register(l.value,r.value,a.value),o.error||v.push(localStorage.getItem("next")??"/dashboard")};return(N,e)=>(c(),d("div",R,[t("div",S,[e[4]||(e[4]=t("h1",{class:"title-lg text-center"},"Register",-1)),t("form",{class:"flex flex-col gap-4",onSubmit:y(x,["prevent"])},[n(t("input",{class:"input-1","onUpdate:modelValue":e[0]||(e[0]=s=>l.value=s),type:"text",placeholder:"Full Name",required:""},null,512),[[i,l.value]]),n(t("input",{class:"input-1","onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),type:"text",placeholder:"Phone Number",required:""},null,512),[[i,r.value]]),n(t("input",{class:"input-1","onUpdate:modelValue":e[2]||(e[2]=s=>a.value=s),type:"password",placeholder:"Password",required:"",minlength:6},null,512),[[i,a.value]]),t("div",{class:b(["text-xs -mt-3 pl-1",a.value.length<6?"text-red-600":"text-green-600"])}," * Password must be at least 6 characters ",2),e[3]||(e[3]=t("button",{class:"btn-2",type:"submit"},"Register",-1))],32),m(o).error?(c(),d("div",B,w(m(o).error),1)):h("",!0)])]))}};export{k as default};

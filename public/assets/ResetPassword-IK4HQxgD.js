import{r as a,k as x,b as y,c as g,e as i,f as u,g as e,x as b,z as w,A as p,t as m,p as v}from"./index-amixhH3R.js";const P={class:"max-w-md mx-auto my-10 px-2"},k={class:"bg-white p-6 rounded-lg shadow-md"},R=e("h2",{class:"title-lg text-center"},"Reset Password",-1),C=e("label",{for:"new-password",class:"block font-medium text-gray-700"},"New Password",-1),N=e("label",{for:"new-password-confirmation",class:"block font-medium text-gray-700"},"Confirm New Password",-1),S={key:0,class:"mt-4 text-sm text-red-500 text-center"},V={key:1,class:"mt-4 text-sm text-green-500 text-center"},q=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Reset Password")],-1),A={__name:"ResetPassword",setup(B){const r=a(""),n=a(""),t=a(""),o=a(""),c=x(),f=y(),h=g(),_=async()=>{try{const l=f.query.phone;await c.changePassword(l,r.value,n.value)&&(o.value="Password changed successfully. Redirecting to login page...",t.value="",setTimeout(()=>{h.push("/login")},2e3))}catch{t.value=c.error||"Failed to reset password. Try again.",o.value=""}};return(l,s)=>(i(),u("div",P,[e("div",k,[R,e("form",{onSubmit:b(_,["prevent"]),class:"space-y-4"},[e("div",null,[C,w(e("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>r.value=d),type:"password",id:"new-password",name:"new-password",class:"input-1 w-full",placeholder:"Enter new password",required:""},null,512),[[p,r.value]])]),e("div",null,[N,w(e("input",{"onUpdate:modelValue":s[1]||(s[1]=d=>n.value=d),type:"password",id:"new-password-confirmation",name:"new-password-confirmation",class:"input-1 w-full",placeholder:"Confirm new password",required:""},null,512),[[p,n.value]])]),t.value?(i(),u("div",S,m(t.value),1)):v("",!0),o.value?(i(),u("div",V,m(o.value),1)):v("",!0),q],32)])]))}};export{A as default};

import{l,r as _,o as i,d as o,e as a,f as e,x as n,t as c}from"./index-BoT3z_7W.js";const r={class:"my-container"},d={class:"card-bg p-4 md:p-8"},u={key:0},h={class:"title-md"},p=e("h1",{class:"title-xl"},"Welcome back",-1),m={class:"title-md"},v={key:1},f=e("p",null,"Loading...",-1),k=[f],g={__name:"DashBoard",setup(x){const t=l(),s=_(t.user);return i(async()=>{s.value||(await t.fetchUser(),s.value=t.user)}),(y,B)=>(o(),a("div",r,[e("div",d,[s.value?(o(),a("div",u,[e("p",null,[n("Hello "),e("span",h,c(s.value.name)+"!",1)]),p,e("p",null,[n("Your phone number is "),e("span",m,c(s.value.phone),1)])])):(o(),a("div",v,k))])]))}};export{g as default};

import{k as i,r as u,o as d,e as a,f as n,g as e,s as l,t as r}from"./index-DFkC2udi.js";const p={class:"my-container"},c={class:"card-bg p-4 md:p-8"},m={key:0},_={class:"title-md"},v={class:"title-md"},f={key:1},g={__name:"DashBoard",setup(h){const o=i(),t=u(o.user);return d(async()=>{t.value||(await o.fetchUser(),t.value=o.user)}),(k,s)=>(a(),n("div",p,[e("div",c,[t.value?(a(),n("div",m,[e("p",null,[s[0]||(s[0]=l("Hello ")),e("span",_,r(t.value.name)+"!",1)]),s[2]||(s[2]=e("h1",{class:"title-xl"},"Welcome back",-1)),e("p",null,[s[1]||(s[1]=l("Your phone number is ")),e("span",v,r(t.value.phone),1)])])):(a(),n("div",f,s[3]||(s[3]=[e("p",null,"Loading...",-1)])))])]))}};export{g as default};

import{r as c,E as p,d as l,i as a,p as u,g as s,F as _,f as g,e as t,B as f,s as y,I as z,j as q,O as v,t as k}from"./index-JvEbh5Ug.js";import{_ as x}from"./TimeCountdown-D3Mc_oDt.js";const b={class:"my-container space-y-6 py-8"},h={key:0,class:"grid md:grid-cols-3 gap-4"},V={key:1,class:"grid md:grid-cols-3 gap-4"},B={class:"md:col-span-2 bg-white p-4 rounded-lg border"},S={class:"title-xl"},T=["innerHTML"],Q={__name:"QuizDetails",setup(w){const n=c(!1),e=p();return(m,i)=>{var r,d;return a(),l("div",b,[s(e).loading?(a(),l("div",h,[(a(),l(_,null,g(3,o=>t("div",{class:"card-bg p-4 animate-pulse items-center",key:o},i[1]||(i[1]=[t("i",{class:"fas fa-image text-gray-300 text-[250px]"},null,-1),t("div",{class:"h-8 w-28 bg-gray-200 rounded-full mt-4"},null,-1)]))),64))])):s(e).quiz&&((r=s(e).quiz)!=null&&r.opening_time)?(a(),l("div",V,[t("div",null,[f(v,{quiz:s(e).quiz},{default:y(()=>[n.value?z(m.$slots,"default",{key:0}):(a(),q(x,{key:1,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o),targetTime:s(e).quiz.opening_time},null,8,["modelValue","targetTime"]))]),_:3},8,["quiz"])]),t("div",B,[t("h2",S,k(s(e).quiz.title),1),i[2]||(i[2]=t("hr",{class:"my-4"},null,-1)),(d=s(e).quiz)!=null&&d.description?(a(),l("div",{key:0,innerHTML:s(e).quiz.description,class:"*:mb-2.5 text-justify text-sm md:text-base quiz-details"},null,8,T)):u("",!0)])])):u("",!0)])}}};export{Q as _};

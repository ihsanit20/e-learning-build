import{b,c as x,a4 as g,o as k,e as s,f as t,i as n,F as o,g as e,t as u,h as _,y as w,n as z,z as M,a2 as L,p as j}from"./index-C_Bbi4Qr.js";import{u as C}from"./course-exam-DIIxhZfC.js";const E={class:"my-container"},S={key:0,class:"card-bg p-4 md:p-8"},T=e("p",null,"Loading...",-1),V=[T],H={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},B={class:"flex justify-between items-center gap-2"},N={class:"line-clamp-1"},R=w('<div class="mt-6 flex flex-wrap items-center justify-center gap-4"><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর এবং এটি সঠিক উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-red-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর কিন্তু এটি ভুল উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4"><span>সঠিক উত্তর কিন্তু আপনি উত্তর করেননি</span><div class="absolute inset-0 w-full h-full z-10"></div></div></div>',1),D={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},F={class:"mb-2"},I={class:"font-semibold"},Q=["innerHTML"],U={key:0,class:"space-y-2"},A=["name","value","onUpdate:modelValue"],$=["innerHTML"],G=e("div",{class:"absolute inset-0 w-full h-full z-10"},null,-1),J=e("br",null,null,-1),X={__name:"MyExamAnswerSheet",setup(K){const p=b(),m=x(),c=C(),{courseId:l,examId:h}=p.params,{exam:i,loading:v}=g(c);return k(async()=>{if(!(await c.fetchExam(l,h)).has_user_exam)return m.replace({path:`/my/course/${l}`})}),(f,O)=>(s(),t("div",E,[n(v)?(s(),t("div",S,V)):(s(),t(o,{key:1},[e("div",H,[e("div",B,[e("h3",N,u(n(i).title),1)])]),R,e("div",D,[(s(!0),t(o,null,_(n(i).questions,(r,d)=>(s(),t("div",{key:r.id,class:"card-bg p-4"},[e("div",F,[e("h4",I,"Question "+u(d+1)+":",1),e("div",{innerHTML:r.question_text},null,8,Q)]),r.type==="MCQ"?(s(),t("div",U,[(s(!0),t(o,null,_(r.mcq_options,a=>(s(),t("div",{key:a.id,class:z(["relative flex items-center border px-3 py-4 rounded-lg overflow-hidden",{"bg-green-400/40":a.is_correct,"bg-red-400/40":r.user_answers.includes(a.id)&&!a.is_correct}])},[M(e("input",{type:"checkbox",name:"question-"+d,value:a.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":y=>r.user_answers=y},null,8,A),[[L,r.user_answers]]),e("div",{class:"cursor-pointer",innerHTML:a.option_text},null,8,$),G],2))),128))])):j("",!0)]))),128))]),J],64))]))}};export{X as default};

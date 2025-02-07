import{b as y,M as g,o as x,h as w,d as t,g as l,e,F as a,m as z,t as p,f as v,i as r,p as k,n as M,z as L,G as Q}from"./index-DN8cqjEB.js";import{u as j}from"./user-quiz-Fl2Hek3t.js";const S={class:"my-container"},T={key:0,class:"card-bg p-4 md:p-8"},V={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},C={class:"flex justify-between items-center gap-2"},H={class:"line-clamp-1"},B={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},N={class:"mb-2"},R={class:"font-semibold"},U=["innerHTML"],q={key:0,class:"space-y-2"},D=["name","value","onUpdate:modelValue"],F=["innerHTML"],I={__name:"MyQuizAnswerSheet",setup(A){const m=y(),_=w(),o=j(),{quizId:c}=m.params,{quiz:d,loading:f}=g(o);return x(async()=>{if(!(await o.fetchQuiz(c)).has_user_quiz)return _.replace({path:`/quiz/${c}/preview`})}),(h,s)=>(r(),t("div",S,[l(f)?(r(),t("div",T,s[0]||(s[0]=[e("p",null,"Loading...",-1)]))):(r(),t(a,{key:1},[e("div",V,[e("div",C,[e("h3",H,p(l(d).title),1)])]),s[2]||(s[2]=z('<div class="mt-6 flex flex-wrap items-center justify-center gap-4"><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর এবং এটি সঠিক উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-red-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর কিন্তু এটি ভুল উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4"><span>সঠিক উত্তর কিন্তু আপনি উত্তর করেননি</span><div class="absolute inset-0 w-full h-full z-10"></div></div></div>',1)),e("div",B,[(r(!0),t(a,null,v(l(d).questions,(i,u)=>(r(),t("div",{key:i.id,class:"card-bg p-4"},[e("div",N,[e("h4",R,"Question "+p(u+1)+":",1),e("div",{innerHTML:i.question_text},null,8,U)]),i.type==="MCQ"?(r(),t("div",q,[(r(!0),t(a,null,v(i.mcq_options,n=>(r(),t("div",{key:n.id,class:M(["relative flex items-center border px-3 py-4 rounded-lg overflow-hidden",{"bg-green-400/40":n.is_correct,"bg-red-400/40":i.user_answers.includes(n.id)&&!n.is_correct}])},[L(e("input",{type:"checkbox",name:"question-"+u,value:n.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":b=>i.user_answers=b},null,8,D),[[Q,i.user_answers]]),e("div",{class:"cursor-pointer",innerHTML:n.option_text},null,8,F),s[1]||(s[1]=e("div",{class:"absolute inset-0 w-full h-full z-10"},null,-1))],2))),128))])):k("",!0)]))),128))]),s[3]||(s[3]=e("br",null,null,-1))],64))]))}};export{I as default};

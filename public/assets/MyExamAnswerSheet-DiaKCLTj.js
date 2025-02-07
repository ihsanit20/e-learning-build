import{b as x,c as g,M as k,o as w,e as t,f as r,i as a,g as e,F as o,t as p,p as z,h as m,n as M,z as L,G as j,q as C}from"./index-Bs9WCFvG.js";import{u as E}from"./course-exam-2f3degjW.js";const S={class:"my-container"},T={key:0,class:"card-bg p-4 md:p-8"},V={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},H={class:"flex justify-between items-center gap-2"},B={class:"line-clamp-1"},N={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},R={class:"mb-2"},D={class:"font-semibold"},F=["innerHTML"],I={key:0,class:"space-y-2"},Q=["name","value","onUpdate:modelValue"],U=["innerHTML"],J={__name:"MyExamAnswerSheet",setup(A){const v=x(),_=g(),i=E(),{courseId:c,examId:f}=v.params,{exam:d,loading:h}=k(i);return w(async()=>{if(!(await i.fetchExam(c,f)).has_user_exam)return _.replace({path:`/my/course/${c}`})}),(y,s)=>(t(),r("div",S,[a(h)?(t(),r("div",T,s[0]||(s[0]=[e("p",null,"Loading...",-1)]))):(t(),r(o,{key:1},[e("div",V,[e("div",H,[e("h3",B,p(a(d).title),1)])]),s[2]||(s[2]=z('<div class="mt-6 flex flex-wrap items-center justify-center gap-4"><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর এবং এটি সঠিক উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-red-400/40 relative"><input type="checkbox" class="mr-2 size-4" checked><span>আপনার উত্তর কিন্তু এটি ভুল উত্তর</span><div class="absolute inset-0 w-full h-full z-10"></div></div><div class="flex justify-center items-center border rounded-lg px-3 py-2 bg-green-400/40 relative"><input type="checkbox" class="mr-2 size-4"><span>সঠিক উত্তর কিন্তু আপনি উত্তর করেননি</span><div class="absolute inset-0 w-full h-full z-10"></div></div></div>',1)),e("div",N,[(t(!0),r(o,null,m(a(d).questions,(n,u)=>(t(),r("div",{key:n.id,class:"card-bg p-4"},[e("div",R,[e("h4",D,"Question "+p(u+1)+":",1),e("div",{innerHTML:n.question_text},null,8,F)]),n.type==="MCQ"?(t(),r("div",I,[(t(!0),r(o,null,m(n.mcq_options,l=>(t(),r("div",{key:l.id,class:M(["relative flex items-center border px-3 py-4 rounded-lg overflow-hidden",{"bg-green-400/40":l.is_correct,"bg-red-400/40":n.user_answers.includes(l.id)&&!l.is_correct}])},[L(e("input",{type:"checkbox",name:"question-"+u,value:l.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":b=>n.user_answers=b},null,8,Q),[[j,n.user_answers]]),e("div",{class:"cursor-pointer",innerHTML:l.option_text},null,8,U),s[1]||(s[1]=e("div",{class:"absolute inset-0 w-full h-full z-10"},null,-1))],2))),128))])):C("",!0)]))),128))]),s[3]||(s[3]=e("br",null,null,-1))],64))]))}};export{J as default};

import{b as U,c as z,r as v,a2 as C,o as H,d as k,e as t,f as a,i as f,F as b,g as e,t as x,q as R,$ as B,h as M,z as y,a0 as $,n as j,x as A,A as D}from"./index-DpPtPH_x.js";import{u as F}from"./course-exam-DXFIu3cj.js";const N={class:"my-container"},P={key:0,class:"card-bg p-4 md:p-8"},Q=e("p",null,"Loading...",-1),W=[Q],G={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},J={class:"flex justify-between items-center gap-2"},K={class:"line-clamp-1"},O={class:"grow-0 shrink-0 border px-3 pt-2 pb-1 rounded-lg"},X=e("span",{class:"hidden md:inline"},"Remaining:",-1),Y={class:"relative w-full h-2 bg-gray-300 rounded mt-1"},Z={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},q={class:"mb-2"},ee={class:"font-semibold"},se=["innerHTML"],te={key:0,class:"space-y-2"},ae=["name","id","value","onUpdate:modelValue"],oe=["for","innerHTML"],ne={key:1},re=["onUpdate:modelValue"],le=e("hr",{class:"my-5"},null,-1),ie={class:"flex items-center gap-1 md:gap-2"},ce=e("span",{class:"pt-1 text-xs md:text-base"},"I want to submit",-1),de=e("br",null,null,-1),_e={__name:"MyExamParticipation",setup(ue){const S=U(),g=z(),p=F(),_=v(!1),{courseId:l,examId:h}=S.params,{exam:i,loading:T}=C(p),n=v(0),c=v(0);let d=null;H(async()=>{if((await p.fetchExam(l,h)).has_user_exam)return g.replace({path:`/my/course/${l}/exam/${h}/answer-sheet`});i.value.duration&&(c.value=i.value.duration*60,n.value=c.value,L())});function L(){d=setInterval(()=>{n.value>0?n.value-=1:(clearInterval(d),w())},1e3)}const V=k(()=>{const u=Math.floor(n.value/60),r=Math.floor(u/60),s=u%60,m=n.value%60;return`${r?`${r}:`:""}${String(s).padStart(2,"0")}:${String(m).padStart(2,"0")}`}),E=k(()=>(c.value-n.value)/c.value*100),w=async()=>(await p.submitExam(l,h),d&&clearInterval(d),g.replace({path:`/my/course/${l}`}));return(u,r)=>(t(),a("div",N,[f(T)?(t(),a("div",P,W)):(t(),a(b,{key:1},[e("div",G,[e("div",J,[e("h3",K,x(f(i).title),1),e("p",O,[X,R(),e("b",null,x(V.value),1)])]),e("div",Y,[e("div",{class:"absolute left-0 top-0 h-full bg-blue-500 rounded",style:B({width:`${E.value}%`})},null,4)])]),e("div",Z,[(t(!0),a(b,null,M(f(i).questions,(s,m)=>(t(),a("div",{key:s.id,class:"card-bg p-4"},[e("div",q,[e("h4",ee,"Question "+x(m+1)+":",1),e("div",{innerHTML:s.question_text},null,8,se)]),s.type==="MCQ"?(t(),a("div",te,[(t(!0),a(b,null,M(s.mcq_options,o=>(t(),a("div",{key:o.id,class:"flex items-center cursor-pointer border px-3 py-4 rounded-lg"},[y(e("input",{type:"checkbox",name:"question-"+m,id:`question:${s.id}-option:${o.id}`,value:o.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":I=>s.user_answers=I},null,8,ae),[[$,s.user_answers]]),e("label",{class:"cursor-pointer",for:`question:${s.id}-option:${o.id}`,innerHTML:o.option_text},null,8,oe)]))),128))])):(t(),a("div",ne,[y(e("textarea",{class:"w-full p-2 border rounded-md",rows:"4",placeholder:"Write your answer here...","onUpdate:modelValue":o=>s.user_answers[0]=o},null,8,re),[[D,s.user_answers[0]]])]))]))),128))]),le,e("form",{onSubmit:A(w,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[e("label",ie,[y(e("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>_.value=s),type:"checkbox",required:""},null,512),[[$,_.value]]),ce]),e("button",{type:"submit",class:j(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!_.value}])}," Submit Answer ",2)],32),de],64))]))}};export{_e as default};

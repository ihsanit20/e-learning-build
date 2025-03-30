import{r as f,b as V,M as U,o as I,h as q,c as x,d as o,g as _,e,F as b,t as h,q as H,L as R,f as k,z as y,G as z,n as B,y as C,i as a,A as j}from"./index-B4Mp3J9K.js";import{u as A}from"./user-quiz-zeggKpA8.js";const D={class:"my-container"},F={key:0,class:"card-bg p-4 md:p-8"},N={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},P={class:"flex justify-between items-center gap-2"},E={class:"line-clamp-1"},G={class:"grow-0 shrink-0 border px-3 pt-2 pb-1 rounded-lg"},W={class:"relative w-full h-2 bg-gray-300 rounded mt-1"},J={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},K={class:"mb-2"},O={class:"font-semibold"},X=["innerHTML"],Y={key:0,class:"space-y-2"},Z=["name","id","value","onUpdate:modelValue"],ee=["for","innerHTML"],se={key:1},te=["onUpdate:modelValue"],oe={class:"flex items-center gap-1 md:gap-2"},le={__name:"MyQuizParticipation",setup(ae){const M=V(),g=q(),m=A(),v=f(!1),{quizId:l}=M.params,{quiz:i,loading:S}=U(m),n=f(0),u=f(0);let d=null;I(async()=>{if((await m.fetchQuiz(l)).has_user_quiz)return g.replace({path:`/quiz/${l}/preview`});i.value.duration&&(u.value=i.value.duration*60,n.value=u.value,T())});function T(){d=setInterval(()=>{n.value>0?n.value-=1:(clearInterval(d),w())},1e3)}const $=x(()=>{const c=Math.floor(n.value/60),s=Math.floor(c/60),t=c%60,p=n.value%60;return`${s?`${s}:`:""}${String(t).padStart(2,"0")}:${String(p).padStart(2,"0")}`}),L=x(()=>(u.value-n.value)/u.value*100),w=async()=>(await m.submitQuiz(l),d&&clearInterval(d),g.replace({path:`/quiz/${l}/preview`}));return(c,s)=>(a(),o("div",D,[_(S)?(a(),o("div",F,s[1]||(s[1]=[e("p",null,"Loading...",-1)]))):(a(),o(b,{key:1},[e("div",N,[e("div",P,[e("h3",E,h(_(i).title),1),e("p",G,[s[2]||(s[2]=e("span",{class:"hidden md:inline"},"Remaining:",-1)),s[3]||(s[3]=H()),e("b",null,h($.value),1)])]),e("div",W,[e("div",{class:"absolute left-0 top-0 h-full bg-blue-500 rounded",style:R({width:`${L.value}%`})},null,4)])]),e("div",J,[(a(!0),o(b,null,k(_(i).questions,(t,p)=>(a(),o("div",{key:t.id,class:"card-bg p-4"},[e("div",K,[e("h4",O,"Question "+h(p+1)+":",1),e("div",{innerHTML:t.question_text},null,8,X)]),t.type==="MCQ"?(a(),o("div",Y,[(a(!0),o(b,null,k(t.mcq_options,r=>(a(),o("div",{key:r.id,class:"flex items-center cursor-pointer border px-3 py-4 rounded-lg"},[y(e("input",{type:"checkbox",name:"question-"+p,id:`question:${t.id}-option:${r.id}`,value:r.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":Q=>t.user_answers=Q},null,8,Z),[[z,t.user_answers]]),e("label",{class:"cursor-pointer",for:`question:${t.id}-option:${r.id}`,innerHTML:r.option_text},null,8,ee)]))),128))])):(a(),o("div",se,[y(e("textarea",{class:"w-full p-2 border rounded-md",rows:"4",placeholder:"Write your answer here...","onUpdate:modelValue":r=>t.user_answers[0]=r},null,8,te),[[j,t.user_answers[0]]])]))]))),128))]),s[5]||(s[5]=e("hr",{class:"my-5"},null,-1)),e("form",{onSubmit:C(w,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[e("label",oe,[y(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>v.value=t),type:"checkbox",required:""},null,512),[[z,v.value]]),s[4]||(s[4]=e("span",{class:"pt-1 text-xs md:text-base"},"I want to submit",-1))]),e("button",{type:"submit",class:B(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!v.value}])}," Submit Answer ",2)],32),s[6]||(s[6]=e("br",null,null,-1))],64))]))}};export{le as default};

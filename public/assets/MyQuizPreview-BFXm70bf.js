import{r as q,o as Q,d as z,p as b,i as d,q as S,e as t,t as p,I as $,j as k,b as M,E as C,B as v,s as _,y as w,g as x,z as R,G as j,n as I,F as P,h as V,R as N}from"./index-JvEbh5Ug.js";import{u as B}from"./user-quiz-D9QHR8oQ.js";import{_ as T}from"./TimeCountdown-D3Mc_oDt.js";import{_ as O}from"./QuizDetails-XejzWh1x.js";const U={key:0,class:"grow-0 shrink-0 border px-2 pt-1.5 pb-0.5 rounded-lg bg-blue-300/30 text-blue-600"},A={__name:"QuizMeritPosition",props:{quizId:[String,Number]},setup(l){const c=l,s=q(null),i=B();Q(async()=>{c.quizId&&(s.value=await i.fetchQuiz(c.quizId))});const n=a=>{const r=["th","st","nd","rd"],u=a%100;return a+(r[(u-20)%10]||r[u]||r[0])},m=a=>{var r,u;if((u=(r=s.value)==null?void 0:r.user_quiz)!=null&&u.is_practice){const f=Math.floor(a/10)*10+1,e=f+9;return`${n(f)} - ${n(e)}`}return n(a)};return(a,r)=>{var u,f,e,o;return(u=s.value)!=null&&u.user_quiz?(d(),z("div",U,[S(p((f=s.value.user_quiz)!=null&&f.is_practice?"Position: ":"Merit Position: ")+" ",1),t("b",null,p(m((o=(e=s.value)==null?void 0:e.user_quiz)==null?void 0:o.position)),1)])):b("",!0)}}},D={class:"table table-auto text-sm"},E={class:"text-center px-3 py-1.5"},F={class:"text-center px-3 py-1.5"},G={class:"text-center px-3 py-1.5"},L={class:"text-center px-3 py-1.5"},H={class:"text-red-500"},J={class:"text-center px-3 py-1.5"},K={class:"border-t font-bold"},W={class:"text-center px-3 py-1.5"},X={__name:"QuizMcqResult",props:{quiz:Object},setup(l){return(c,s)=>{var i,n,m,a,r,u,f,e,o,y,g,h;return d(),z("table",D,[t("tr",null,[s[0]||(s[0]=t("td",{class:"text-right px-3 py-1.5"},"Total Question",-1)),t("td",E,p((i=l.quiz)==null?void 0:i.quiz_questions_count),1)]),t("tr",null,[s[1]||(s[1]=t("td",{class:"text-right px-3 py-1.5"},"Answered Question",-1)),t("td",F,p((m=(n=l.quiz)==null?void 0:n.user_quiz)==null?void 0:m.user_quiz_mcq_answers_count),1)]),t("tr",null,[s[2]||(s[2]=t("td",{class:"text-right px-3 py-1.5"},"Unanswered Question",-1)),t("td",G,p(((a=l.quiz)==null?void 0:a.quiz_questions_count)-((u=(r=l.quiz)==null?void 0:r.user_quiz)==null?void 0:u.user_quiz_mcq_answers_count)),1)]),t("tr",null,[s[3]||(s[3]=t("td",{class:"text-right px-3 py-1.5"},"Correct Mark",-1)),t("td",L,p((e=(f=l.quiz)==null?void 0:f.user_quiz)==null?void 0:e.mcq_correct_mark),1)]),t("tr",H,[s[4]||(s[4]=t("td",{class:"text-right px-3 py-1.5"},"Negative Mark",-1)),t("td",J,p((y=(o=l.quiz)==null?void 0:o.user_quiz)==null?void 0:y.mcq_negative_mark),1)]),t("tr",K,[s[5]||(s[5]=t("td",{class:"text-right px-3 py-1.5"},"Obtained Mark",-1)),t("td",W,p((h=(g=l.quiz)==null?void 0:g.user_quiz)==null?void 0:h.obtained_mark),1)])])}}},Y={class:"modal"},Z={class:"modal-content !px-3 !py-4 !max-w-sm"},tt={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},et={class:"w-full flex justify-between items-center"},st={class:"title-lg text-center"},lt={class:"size-full grow shrink border-t py-4 overflow-y-auto scrollbar flex flex-col gap-4 justify-center items-center"},ut={class:"w-full flex justify-between items-center"},it={key:2,class:"mx-auto italic"},ot={__name:"QuizResultModal",props:{quiz:Object},setup(l){const c=q(!1);return(s,i)=>(d(),z("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("h3",st,"Result of "+p(l.quiz.title),1),$(s.$slots,"default")]),t("div",lt,[l.quiz?(d(),k(X,{key:0,quiz:l.quiz},null,8,["quiz"])):b("",!0),i[1]||(i[1]=t("hr",{class:"w-full"},null,-1)),t("div",ut,[c.value?$(s.$slots,"answerSheet",{key:0}):l.quiz.result_publish_time?(d(),k(T,{key:1,modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=n=>c.value=n),targetTime:l.quiz.result_publish_time,label:"Results are not yet published",class:"mx-auto items-center"},null,8,["modelValue","targetTime"])):(d(),z("span",it,"Results are not yet published"))])])])])]))}},nt={class:"w-full flex justify-between gap-2"},at={class:"modal-content !px-3 !py-4 !max-w-xl"},rt={class:"w-full h-full flex flex-col justify-between items-center space-y-3 overflow-hidden"},dt={class:"flex items-center gap-1 md:gap-2"},zt={__name:"MyQuizPreview",setup(l){const c=M(),s=V(),i=c.params.quizId,n=q(!1),m=q(!1),a=q(!1),r=async()=>{s.push({name:"QuizStart",params:{quizId:i}})},u=C();return Q(async()=>{await u.fetchQuiz(i)}),(f,e)=>(d(),z(P,null,[v(O,null,{default:_(()=>{var o;return[(o=x(u).quiz)!=null&&o.has_user_quiz?(d(),z("button",{key:0,type:"button",onClick:e[0]||(e[0]=y=>m.value=!0),class:"btn-contrast"},"Result")):b("",!0),x(u).quiz.has_user_quiz?b("",!0):(d(),z("button",{key:1,type:"button",onClick:e[1]||(e[1]=y=>n.value=!0),class:"btn-contrast"}," Start Quiz "))]}),_:1}),m.value?(d(),k(ot,{key:0,quiz:x(u).quiz,class:"modal",onClick:e[3]||(e[3]=w(o=>m.value=!1,["self"]))},{answerSheet:_(()=>[t("div",nt,[v(A,{quizId:x(i)},null,8,["quizId"]),v(x(N),{to:{name:"QuizAnswerSheet",params:{quizId:x(i)}},class:"btn-2 px-2 text-center ml-auto"},{default:_(()=>e[7]||(e[7]=[S(" Answer Sheet ")])),_:1},8,["to"])])]),default:_(()=>[t("button",{onClick:e[2]||(e[2]=o=>m.value=!1),type:"button",class:"btn-contrast"},"Close")]),_:1},8,["quiz"])):b("",!0),n.value?(d(),z("div",{key:1,class:"modal",onClick:e[6]||(e[6]=w(o=>n.value=!1,["self"]))},[t("div",at,[t("div",rt,[e[9]||(e[9]=t("div",{class:"sticky top-0 grow-0 shrink-0 w-full bg-white z-10"},[t("h3",{class:"title-lg text-center",id:"modal-title"},"সাবধান!! গুরুত্বপূর্ণ তথ্য সমূহ")],-1)),e[10]||(e[10]=t("div",{class:"size-full grow shrink border-y py-4 overflow-y-auto scrollbar"},[t("ul",{class:"w-full list-[square] space-y-3 list-outside pl-5"},[t("li",null,"Quiz এর নির্দিষ্ট সময়সীমা থাকবে। এই সময়ের মধ্যে আপনাকে Quiz সাবমিট করতে হবে।"),t("li",null," Quiz ওপেন করা (“Start Quiz” বাটনে ক্লিক) মাত্র আপনার টাইমার চালু হয়ে যাবে। আপনি Quiz থেকে বেরিয়ে গেলেও টাইমার চলতে থাকবে এবং টাইম শেষে সাবমিট হবে। "),t("li",null," Quiz দেয়ার সময়ে যদি কোনো কারনে কানেকশন লস হয়ে যায় এবং আপনার টাইম শেষ হয়ে যায় আর সাবমিট করতে না পারেন, তাহলে আর Quiz দেয়ার সুযোগ পাবেন না। ")])],-1)),t("form",{onSubmit:w(r,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[t("button",{onClick:e[4]||(e[4]=o=>n.value=!1),type:"button",class:"mr-auto btn-contrast px-1 md:px-4 text-xs md:text-base"}," Cancel "),t("label",dt,[R(t("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>a.value=o),type:"checkbox",required:""},null,512),[[j,a.value]]),e[8]||(e[8]=t("span",{class:"pt-1 text-xs md:text-base"},"আমি কুইজ শুরু করতে চাই",-1))]),t("button",{type:"submit",class:I(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!a.value}])}," Start Quiz ",2)],32)])])])):b("",!0)],64))}};export{zt as default};

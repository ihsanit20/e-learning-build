import{b as E,r as x,o as G,d as R,e as a,f as n,g as t,t as r,i as p,z as c,A as f,q as g,F as M,h as H,y as J,j as U,v as w,G as K}from"./index-DgW0pWoJ.js";import{_ as D}from"./QuestionCard-Kaws4uxZ.js";import{u as O}from"./quiz-DmcUHfBT.js";import{u as W}from"./question-C4QqMYYZ.js";const X={class:"my-container"},Y={class:"card-bg p-4"},Z={class:"flex justify-between items-center flex-wrap gap-4"},ee={class:"text-lg"},te={class:"text-xl"},se={class:"text-xl"},le={class:"flex items-center gap-2 ml-auto"},ae=["disabled"],ne={key:0,class:"mt-4 flex flex-wrap items-center gap-2"},oe={class:"flex flex-wrap items-center gap-2"},ie={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},ue={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},de={key:1,class:"flex justify-center items-center gap-1"},re=["disabled"],pe={key:1,class:"grid md:grid-cols-2 gap-4 mt-4"},ce={key:0,class:"flex justify-center items-center"},ve=["value","checked"],me={class:"pt-1.5 pb-1"},xe={class:"bg-green-600/10 text-green-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},fe={key:0,class:"bg-red-600/10 text-red-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},ye=["onClick"],be={key:2,class:"text-red-500 py-16 text-center"},ke={class:"w-full bg-gray-300 py-2 px-1 md:p-4 rounded-lg max-w-lg max-h-full overflow-y-auto"},he={class:"modal-body md:min-h-[200px] space-y-4"},ge={key:0,class:"flex justify-center items-center text-red-500 h-40"},Qe={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},_e={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},Me={key:1,class:"flex justify-center items-center gap-1"},we=["disabled"],Ce={key:1,class:"flex justify-center items-center text-red-500 h-40"},Ne={__name:"QuizQuestionListView",setup(ze){const B=E(),l=O(),F=W(),C=x(!1),i=x(null),v=x(""),u=x(""),d=x(1),y=x(.25),m=x([]),{quizId:k}=B.params;G(async()=>{l.fetchSingleQuiz(k)});const $=async()=>{v.value&&(i.value=await F.show(v.value,{type:l.quiz.type}),C.value=!0)},A=async()=>{if(!i.value)return Q();if(!(i.value.type==="MCQ"?d.value>0:u.value>0))return;const o=await l.addQuizQuestion(k,v.value,{mark:Math.abs(i.value.type==="MCQ"?d.value:u.value),negative_mark:Math.abs(y.value||0)});return o.quiz_question&&l.quiz.quiz_questions.push(o.quiz_question),v.value="",Q()},Q=()=>{i.value=null,C.value=!1},L=async()=>{var o,e;await l.changeQuizQuestionMark(k,{question_ids:m.value,mark:((o=l.quiz)==null?void 0:o.type)==="MCQ"?d.value:u.value,negative_mark:((e=l.quiz)==null?void 0:e.type)==="MCQ"?y.value:0}),m.value=[],l.fetchSingleQuiz(k)},P=async o=>{if(!confirm(`Do you want to remove this question [ID: ${o}] ?`))return;const e=await l.removeQuizQuestion(k,o);e.question_id&&(l.quiz.quiz_questions=l.quiz.quiz_questions.filter(b=>parseInt(b.question_id)!==parseInt(e.question_id)))},T=R(()=>{var e;let o=0;return(e=l.quiz)!=null&&e.quiz_questions&&(o=l.quiz.quiz_questions.reduce((b,_)=>b+parseFloat(_.mark||0),0)),o});return(o,e)=>{var b,_,z,q,j,I,V,N,S;return a(),n("div",X,[t("div",Y,[t("div",Z,[t("div",null,[t("div",null,[e[8]||(e[8]=t("span",{class:"text-gray-500 pr-1"},"Name:",-1)),t("b",ee,r(p(l).quiz.title),1)]),t("div",null,[t("span",null,r((b=p(l).quiz)==null?void 0:b.type)+": ",1),t("b",te,r((z=(_=p(l).quiz)==null?void 0:_.quiz_questions)==null?void 0:z.length),1),e[9]||(e[9]=t("span",null,"| Mark: ",-1)),t("b",se,r(T.value),1)])]),t("div",le,[c(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>v.value=s),type:"number",class:"input-1 px-0 py-1.5 w-24 text-center placeholder:text-sm placeholder:italic",placeholder:"Question ID"},null,512),[[f,v.value]]),t("button",{type:"button",disabled:!v.value,class:"btn-2",onClick:$}," Find Question ",8,ae)]),g("",!0)])]),m.value.length?(a(),n("div",ne,[t("div",null,"Selected Ids: "+r(m.value),1),t("div",oe,[((j=(q=p(l))==null?void 0:q.quiz)==null?void 0:j.type)==="MCQ"?(a(),n(M,{key:0},[t("div",ie,[e[10]||(e[10]=t("label",null,"Mark",-1)),c(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>d.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[f,d.value]])]),t("div",ue,[e[11]||(e[11]=t("label",null,"Negative",-1)),c(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>y.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[f,y.value]])])],64)):(a(),n("div",de,[e[12]||(e[12]=t("label",null,"Mark",-1)),c(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>u.value=s),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[f,u.value]])])),t("button",{type:"button",class:"btn-2",disabled:!(((V=(I=p(l))==null?void 0:I.quiz)==null?void 0:V.type)==="MCQ"?d.value>0:u.value>0),onClick:L}," Change Mark ",8,re)])])):g("",!0),(S=(N=p(l).quiz)==null?void 0:N.quiz_questions)!=null&&S.length?(a(),n("div",pe,[(a(!0),n(M,null,H(p(l).quiz.quiz_questions,s=>(a(),U(D,{key:s.id,question:s==null?void 0:s.question},{id:w(()=>[s.question_id?(a(),n("div",ce,[c(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=h=>m.value=h),value:s.question_id,checked:m.value.includes(s.question_id),class:"cursor-pointer"},null,8,ve),[[K,m.value]])])):g("",!0),t("div",me,"ID: "+r(s.question_id),1)]),mark:w(()=>{var h;return[t("div",xe," Mark: "+r(s==null?void 0:s.mark),1),((h=s==null?void 0:s.question)==null?void 0:h.type)==="MCQ"?(a(),n("div",fe," Negative: "+r(s==null?void 0:s.negative_mark),1)):g("",!0)]}),action:w(()=>[t("button",{type:"button",onClick:h=>P(s.question_id),class:"text-red-500"},e[13]||(e[13]=[t("i",{class:"fad fa-trash"},null,-1)]),8,ye)]),_:2},1032,["question"]))),128))])):(a(),n("p",be,"No questions found")),C.value?(a(),n("div",{key:3,class:"modal",onClick:J(Q,["self"])},[t("div",ke,[t("div",{class:"modal-header"},[e[14]||(e[14]=t("h3",{class:"text-xl font-semibold"},"Find Question",-1)),t("button",{type:"button",class:"btn-contrast",onClick:Q}," Cancel ")]),t("div",he,[i.value?(a(),n(M,{key:0},[p(l).quiz.quiz_questions.some(s=>parseInt(s.question_id)===parseInt(i.value.id))?(a(),n("div",ge," This question has already been added. ")):(a(),U(D,{key:1,question:i.value},{action:w(()=>[i.value.type==="MCQ"?(a(),n(M,{key:0},[t("div",Qe,[e[15]||(e[15]=t("label",null,"Mark",-1)),c(t("input",{"onUpdate:modelValue":e[5]||(e[5]=s=>d.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[f,d.value]])]),t("div",_e,[e[16]||(e[16]=t("label",null,"Negative",-1)),c(t("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>y.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[f,y.value]])])],64)):(a(),n("div",Me,[e[17]||(e[17]=t("label",null,"Mark",-1)),c(t("input",{"onUpdate:modelValue":e[7]||(e[7]=s=>u.value=s),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[f,u.value]])])),t("button",{type:"button",class:"btn-2",disabled:!(i.value.type==="MCQ"?d.value>0:u.value>0),onClick:A}," Add ",8,we)]),_:1},8,["question"]))],64)):(a(),n("div",Ce," Question not found! "))])])])):g("",!0),e[18]||(e[18]=t("br",null,null,-1))])}}};export{Ne as default};

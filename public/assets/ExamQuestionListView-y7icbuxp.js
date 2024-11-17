import{b as H,u as J,r as v,o as K,d as O,e as a,f as n,g as t,t as c,i as d,z as p,A as y,q as k,F as Q,h as W,y as X,j as B,v as C,a0 as Y}from"./index-CGxlq7hy.js";import{_ as F}from"./QuestionCard-B1W8ODP4.js";import{u as Z}from"./exam-BTRu47tR.js";import{u as ee}from"./question-DxhLe5kl.js";const te={class:"my-container"},se={class:"card-bg p-4"},le={class:"flex justify-between items-center flex-wrap gap-4"},ae={class:"text-lg"},ne={class:"text-xl"},oe={class:"text-xl"},ie={key:0,class:"flex items-center gap-2 ml-auto"},ue=["disabled"],re={key:0,class:"mt-4 flex flex-wrap items-center gap-2"},de={class:"flex flex-wrap items-center gap-2"},ce={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},pe={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},me={key:1,class:"flex justify-center items-center gap-1"},xe=["disabled"],ve={key:1,class:"grid md:grid-cols-2 gap-4 mt-4"},ye={key:0,class:"flex justify-center items-center"},fe=["value","checked"],be={class:"pt-1.5 pb-1"},ke={class:"bg-green-600/10 text-green-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},ge={key:0,class:"bg-red-600/10 text-red-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},he=["onClick"],_e={key:2,class:"text-red-500 py-16 text-center"},we={class:"w-full bg-gray-300 py-2 px-1 md:p-4 rounded-lg max-w-lg max-h-full overflow-y-auto"},Me={class:"modal-body md:min-h-[200px] space-y-4"},Qe={key:0,class:"flex justify-center items-center text-red-500 h-40"},Ce={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},Ie={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},je={key:1,class:"flex justify-center items-center gap-1"},Ve=["disabled"],Ne={key:1,class:"flex justify-center items-center text-red-500 h-40"},Be={__name:"ExamQuestionListView",setup(Se){const $=H(),l=Z(),A=ee(),_=J(),I=v(!1),i=v(null),m=v(""),u=v(""),r=v(1),f=v(.25),x=v([]),{courseId:L,examId:g}=$.params;K(async()=>{l.fetchSingleExam(g),await _.fetchCourse(L)});const P=async()=>{m.value&&(i.value=await A.show(m.value,{category_id:_.course.category_id,type:l.exam.type}),I.value=!0)},T=async()=>{if(!i.value)return w();if(!(i.value.type==="MCQ"?r.value>0:u.value>0))return;const o=await l.addExamQuestion(g,m.value,{category_id:_.course.category_id,mark:Math.abs(i.value.type==="MCQ"?r.value:u.value),negative_mark:Math.abs(f.value||0)});return o.exam_question&&l.exam.exam_questions.push(o.exam_question),m.value="",w()},w=()=>{i.value=null,I.value=!1},z=async()=>{var o,e;await l.changeExamQuestionMark(g,{question_ids:x.value,mark:((o=l.exam)==null?void 0:o.type)==="MCQ"?r.value:u.value,negative_mark:((e=l.exam)==null?void 0:e.type)==="MCQ"?f.value:0}),x.value=[],l.fetchSingleExam(g)},R=async o=>{if(!confirm(`Do you want to remove this question [ID: ${o}] ?`))return;const e=await l.removeExamQuestion(g,o);e.question_id&&(l.exam.exam_questions=l.exam.exam_questions.filter(b=>parseInt(b.question_id)!==parseInt(e.question_id)))},G=O(()=>{var e;let o=0;return(e=l.exam)!=null&&e.exam_questions&&(o=l.exam.exam_questions.reduce((b,M)=>b+parseFloat(M.mark||0),0)),o});return(o,e)=>{var b,M,j,V,N,S,E,q,U,D;return a(),n("div",te,[t("div",se,[t("div",le,[t("div",null,[t("div",null,[e[8]||(e[8]=t("span",{class:"text-gray-500 pr-1"},"Name:",-1)),t("b",ae,c(d(l).exam.title),1)]),t("div",null,[t("span",null,c((b=d(l).exam)==null?void 0:b.type)+": ",1),t("b",ne,c((j=(M=d(l).exam)==null?void 0:M.exam_questions)==null?void 0:j.length),1),e[9]||(e[9]=t("span",null,"| Mark: ",-1)),t("b",oe,c(G.value),1)])]),(V=d(_).course)!=null&&V.category_id?(a(),n("div",ie,[p(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s),type:"number",class:"input-1 px-0 py-1.5 w-24 text-center placeholder:text-sm placeholder:italic",placeholder:"Question ID"},null,512),[[y,m.value]]),t("button",{type:"button",disabled:!m.value,class:"btn-2",onClick:P}," Find Question ",8,ue)])):k("",!0),k("",!0)])]),x.value.length?(a(),n("div",re,[t("div",null,"Selected Ids: "+c(x.value),1),t("div",de,[((S=(N=d(l))==null?void 0:N.exam)==null?void 0:S.type)==="MCQ"?(a(),n(Q,{key:0},[t("div",ce,[e[10]||(e[10]=t("label",null,"Mark",-1)),p(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[y,r.value]])]),t("div",pe,[e[11]||(e[11]=t("label",null,"Negative",-1)),p(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>f.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[y,f.value]])])],64)):(a(),n("div",me,[e[12]||(e[12]=t("label",null,"Mark",-1)),p(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>u.value=s),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[y,u.value]])])),t("button",{type:"button",class:"btn-2",disabled:!(((q=(E=d(l))==null?void 0:E.exam)==null?void 0:q.type)==="MCQ"?r.value>0:u.value>0),onClick:z}," Change Mark ",8,xe)])])):k("",!0),(D=(U=d(l).exam)==null?void 0:U.exam_questions)!=null&&D.length?(a(),n("div",ve,[(a(!0),n(Q,null,W(d(l).exam.exam_questions,s=>(a(),B(F,{key:s.id,question:s==null?void 0:s.question},{id:C(()=>[s.question_id?(a(),n("div",ye,[p(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=h=>x.value=h),value:s.question_id,checked:x.value.includes(s.question_id),class:"cursor-pointer"},null,8,fe),[[Y,x.value]])])):k("",!0),t("div",be,"ID: "+c(s.question_id),1)]),mark:C(()=>{var h;return[t("div",ke," Mark: "+c(s==null?void 0:s.mark),1),((h=s==null?void 0:s.question)==null?void 0:h.type)==="MCQ"?(a(),n("div",ge," Negative: "+c(s==null?void 0:s.negative_mark),1)):k("",!0)]}),action:C(()=>[t("button",{type:"button",onClick:h=>R(s.question_id),class:"text-red-500"},e[13]||(e[13]=[t("i",{class:"fad fa-trash"},null,-1)]),8,he)]),_:2},1032,["question"]))),128))])):(a(),n("p",_e,"No questions found")),I.value?(a(),n("div",{key:3,class:"modal",onClick:X(w,["self"])},[t("div",we,[t("div",{class:"modal-header"},[e[14]||(e[14]=t("h3",{class:"text-xl font-semibold"},"Find Question",-1)),t("button",{type:"button",class:"btn-contrast",onClick:w}," Cancel ")]),t("div",Me,[i.value?(a(),n(Q,{key:0},[d(l).exam.exam_questions.some(s=>parseInt(s.question_id)===parseInt(i.value.id))?(a(),n("div",Qe," This question has already been added. ")):(a(),B(F,{key:1,question:i.value},{action:C(()=>[i.value.type==="MCQ"?(a(),n(Q,{key:0},[t("div",Ce,[e[15]||(e[15]=t("label",null,"Mark",-1)),p(t("input",{"onUpdate:modelValue":e[5]||(e[5]=s=>r.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[y,r.value]])]),t("div",Ie,[e[16]||(e[16]=t("label",null,"Negative",-1)),p(t("input",{"onUpdate:modelValue":e[6]||(e[6]=s=>f.value=s),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[y,f.value]])])],64)):(a(),n("div",je,[e[17]||(e[17]=t("label",null,"Mark",-1)),p(t("input",{"onUpdate:modelValue":e[7]||(e[7]=s=>u.value=s),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[y,u.value]])])),t("button",{type:"button",class:"btn-2",disabled:!(i.value.type==="MCQ"?r.value>0:u.value>0),onClick:T}," Add ",8,Ve)]),_:1},8,["question"]))],64)):(a(),n("div",Ne," Question not found! "))])])])):k("",!0),e[18]||(e[18]=t("br",null,null,-1))])}}};export{Be as default};

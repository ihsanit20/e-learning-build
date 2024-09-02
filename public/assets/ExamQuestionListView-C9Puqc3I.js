import{b as H,u as J,r as v,o as K,d as O,e as a,f as o,g as e,t as c,i as r,z as p,A as _,p as f,F as Q,h as W,x as X,j as B,s as C,I as Y}from"./index-C1RGtMrd.js";import{_ as F}from"./QuestionCard-D1G7U35R.js";import{u as Z}from"./exam-GadIjFV3.js";import{u as ee}from"./question-B1Zpjc-4.js";const te={class:"my-container"},se={class:"card-bg p-4"},le={class:"flex justify-between items-center flex-wrap gap-4"},ae=e("span",{class:"text-gray-500 pr-1"},"Name:",-1),oe={class:"text-lg"},ne={class:"text-xl"},ie=e("span",null,"| Mark: ",-1),de={class:"text-xl"},ue={key:0,class:"flex items-center gap-2 ml-auto"},re=["disabled"],ce={key:0,class:"mt-4 flex flex-wrap items-center gap-2"},pe={class:"flex flex-wrap items-center gap-2"},me={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},xe=e("label",null,"Mark",-1),ve={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},_e=e("label",null,"Negative",-1),he={key:1,class:"flex justify-center items-center gap-1"},ye=e("label",null,"Mark",-1),fe=["disabled"],be={key:1,class:"grid md:grid-cols-2 gap-4 mt-4"},ke={key:0,class:"flex justify-center items-center"},ge=["value","checked"],we={class:"pt-1.5 pb-1"},Me={class:"bg-green-600/10 text-green-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},Qe={key:0,class:"bg-red-600/10 text-red-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},Ce=["onClick"],Ie=e("i",{class:"fad fa-trash"},null,-1),je=[Ie],Ve={key:2,class:"text-red-500 py-16 text-center"},Ne={class:"w-full bg-gray-300 py-2 px-1 md:p-4 rounded-lg max-w-lg max-h-full overflow-y-auto"},Se=e("h3",{class:"text-xl font-semibold"},"Find Question",-1),Ee={class:"modal-body md:min-h-[200px] space-y-4"},Ue={key:0,class:"flex justify-center items-center text-red-500 h-40"},qe={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},De=e("label",null,"Mark",-1),Be={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},Fe=e("label",null,"Negative",-1),$e={key:1,class:"flex justify-center items-center gap-1"},Ae=e("label",null,"Mark",-1),Le=["disabled"],Pe={key:1,class:"flex justify-center items-center text-red-500 h-40"},Te=e("br",null,null,-1),Ke={__name:"ExamQuestionListView",setup(ze){const $=H(),l=Z(),A=ee(),g=J(),I=v(!1),i=v(null),m=v(""),d=v(""),u=v(1),h=v(.25),x=v([]),{courseId:L,examId:b}=$.params;K(async()=>{l.fetchSingleExam(b),await g.fetchCourse(L)});const P=async()=>{m.value&&(i.value=await A.show(m.value,{category_id:g.course.category_id,type:l.exam.type}),I.value=!0)},T=async()=>{if(!i.value)return w();if(!(i.value.type==="MCQ"?u.value>0:d.value>0))return;const n=await l.addExamQuestion(b,m.value,{category_id:g.course.category_id,mark:Math.abs(i.value.type==="MCQ"?u.value:d.value),negative_mark:Math.abs(h.value||0)});return n.exam_question&&l.exam.exam_questions.push(n.exam_question),m.value="",w()},w=()=>{i.value=null,I.value=!1},z=async()=>{var n,s;await l.changeExamQuestionMark(b,{question_ids:x.value,mark:((n=l.exam)==null?void 0:n.type)==="MCQ"?u.value:d.value,negative_mark:((s=l.exam)==null?void 0:s.type)==="MCQ"?h.value:0}),x.value=[],l.fetchSingleExam(b)},R=async n=>{if(!confirm(`Do you want to remove this question [ID: ${n}] ?`))return;const s=await l.removeExamQuestion(b,n);s.question_id&&(l.exam.exam_questions=l.exam.exam_questions.filter(y=>parseInt(y.question_id)!==parseInt(s.question_id)))},G=O(()=>{var s;let n=0;return(s=l.exam)!=null&&s.exam_questions&&(n=l.exam.exam_questions.reduce((y,M)=>y+parseFloat(M.mark||0),0)),n});return(n,s)=>{var y,M,j,V,N,S,E,U,q,D;return a(),o("div",te,[e("div",se,[e("div",le,[e("div",null,[e("div",null,[ae,e("b",oe,c(r(l).exam.title),1)]),e("div",null,[e("span",null,c((y=r(l).exam)==null?void 0:y.type)+": ",1),e("b",ne,c((j=(M=r(l).exam)==null?void 0:M.exam_questions)==null?void 0:j.length),1),ie,e("b",de,c(G.value),1)])]),(V=r(g).course)!=null&&V.category_id?(a(),o("div",ue,[p(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>m.value=t),type:"number",class:"input-1 px-0 py-1.5 w-24 text-center placeholder:text-sm placeholder:italic",placeholder:"Question ID"},null,512),[[_,m.value]]),e("button",{type:"button",disabled:!m.value,class:"btn-2",onClick:P}," Find Question ",8,re)])):f("",!0),f("",!0)])]),x.value.length?(a(),o("div",ce,[e("div",null,"Selected Ids: "+c(x.value),1),e("div",pe,[((S=(N=r(l))==null?void 0:N.exam)==null?void 0:S.type)==="MCQ"?(a(),o(Q,{key:0},[e("div",me,[xe,p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[_,u.value]])]),e("div",ve,[_e,p(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>h.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[_,h.value]])])],64)):(a(),o("div",he,[ye,p(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>d.value=t),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[_,d.value]])])),e("button",{type:"button",class:"btn-2",disabled:!(((U=(E=r(l))==null?void 0:E.exam)==null?void 0:U.type)==="MCQ"?u.value>0:d.value>0),onClick:z}," Change Mark ",8,fe)])])):f("",!0),(D=(q=r(l).exam)==null?void 0:q.exam_questions)!=null&&D.length?(a(),o("div",be,[(a(!0),o(Q,null,W(r(l).exam.exam_questions,t=>(a(),B(F,{key:t.id,question:t==null?void 0:t.question},{id:C(()=>[t.question_id?(a(),o("div",ke,[p(e("input",{type:"checkbox","onUpdate:modelValue":s[4]||(s[4]=k=>x.value=k),value:t.question_id,checked:x.value.includes(t.question_id),class:"cursor-pointer"},null,8,ge),[[Y,x.value]])])):f("",!0),e("div",we,"ID: "+c(t.question_id),1)]),mark:C(()=>{var k;return[e("div",Me," Mark: "+c(t==null?void 0:t.mark),1),((k=t==null?void 0:t.question)==null?void 0:k.type)==="MCQ"?(a(),o("div",Qe," Negative: "+c(t==null?void 0:t.negative_mark),1)):f("",!0)]}),action:C(()=>[e("button",{type:"button",onClick:k=>R(t.question_id),class:"text-red-500"},je,8,Ce)]),_:2},1032,["question"]))),128))])):(a(),o("p",Ve,"No questions found")),I.value?(a(),o("div",{key:3,class:"modal",onClick:X(w,["self"])},[e("div",Ne,[e("div",{class:"modal-header"},[Se,e("button",{type:"button",class:"btn-contrast",onClick:w}," Cancel ")]),e("div",Ee,[i.value?(a(),o(Q,{key:0},[r(l).exam.exam_questions.some(t=>parseInt(t.question_id)===parseInt(i.value.id))?(a(),o("div",Ue," This question has already been added. ")):(a(),B(F,{key:1,question:i.value},{action:C(()=>[i.value.type==="MCQ"?(a(),o(Q,{key:0},[e("div",qe,[De,p(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>u.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[_,u.value]])]),e("div",Be,[Fe,p(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>h.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[_,h.value]])])],64)):(a(),o("div",$e,[Ae,p(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>d.value=t),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[_,d.value]])])),e("button",{type:"button",class:"btn-2",disabled:!(i.value.type==="MCQ"?u.value>0:d.value>0),onClick:T}," Add ",8,Le)]),_:1},8,["question"]))],64)):(a(),o("div",Pe," Question not found! "))])])])):f("",!0),Te])}}};export{Ke as default};

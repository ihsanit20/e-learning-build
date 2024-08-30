import{b as A,u as L,r as p,o as O,d as C,e as a,f as i,g as e,t as m,i as f,q as S,z as _,A as y,p as b,F as N,h as P,x as z,j as V,s as I}from"./index-tP5fNA4T.js";import{_ as j}from"./QuestionCard-DkUquXCe.js";import{u as R}from"./exam-Paj6IXd_.js";import{u as G}from"./question-C7AosuEV.js";const H={class:"my-container"},J={class:"card-bg p-4"},K={class:"flex justify-between items-center flex-wrap gap-4"},X=e("span",{class:"text-gray-500 pr-1"},"Name:",-1),Y={class:"text-lg"},Z={class:"text-xl"},ee={class:"text-xl"},te={class:"text-xl"},se={key:0,class:"flex items-center gap-2 ml-auto"},oe=["disabled"],ae={key:0,class:"grid md:grid-cols-2 gap-4 mt-4"},le={class:"bg-green-600/10 text-green-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},ne={key:0,class:"bg-red-600/10 text-red-600 px-2 pt-1.5 pb-1 rounded-md text-xs font-semibold"},ie=["onClick"],re=e("i",{class:"fad fa-trash"},null,-1),ce=[re],ue={key:1,class:"text-red-500 py-16 text-center"},de={class:"w-full bg-gray-300 py-2 px-1 md:p-4 rounded-lg max-w-lg max-h-full overflow-y-auto"},pe=e("h3",{class:"text-xl font-semibold"},"Find Question",-1),me={class:"modal-body md:min-h-[200px] space-y-4"},ve={key:0,class:"flex justify-center items-center text-red-500 h-40"},xe={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},fe=e("label",null,"Mark",-1),he={class:"flex flex-col md:flex-row justify-center items-center gap-x-1 text-sm md:text-base"},_e=e("label",null,"Negative",-1),ye={key:1,class:"flex justify-center items-center gap-1"},be=e("label",null,"Mark",-1),ge=["disabled"],ke={key:1,class:"flex justify-center items-center text-red-500 h-40"},we=e("br",null,null,-1),Se={__name:"ExamQuestionListView",setup(Qe){const E=A(),o=R(),q=G(),g=L(),k=p(!1),c=p(null),d=p(""),v=p(""),x=p(1),w=p(.25),{courseId:B,examId:Q}=E.params;O(async()=>{o.fetchSingleExam(Q),await g.fetchCourse(B)});const D=async()=>{d.value&&(c.value=await q.show(d.value),k.value=!0)},F=async()=>{if(!c.value)return h();if(!(c.value.type==="MCQ"?x.value>0:v.value>0))return;const r=await o.addExamQuestion(Q,d.value,{category_id:g.course.category_id,mark:Math.abs(c.value.type==="MCQ"?x.value:v.value),negative_mark:Math.abs(w.value||0)});return r.exam_question&&o.exam.exam_questions.push(r.exam_question),d.value="",h()},h=()=>{c.value=null,k.value=!1},T=async r=>{if(!confirm(`Do you want to remove this question [ID: ${r}] ?`))return;const s=await o.removeExamQuestion(Q,r);s.question_id&&(o.exam.exam_questions=o.exam.exam_questions.filter(l=>parseInt(l.question_id)!==parseInt(s.question_id)))},U=C(()=>{var s,l;return(((l=(s=o.exam)==null?void 0:s.exam_questions)==null?void 0:l.filter(n=>{var u;return((u=n==null?void 0:n.question)==null?void 0:u.type)==="MCQ"}))??[]).length}),W=C(()=>{var s,l;return(((l=(s=o.exam)==null?void 0:s.exam_questions)==null?void 0:l.filter(n=>{var u;return((u=n==null?void 0:n.question)==null?void 0:u.type)==="Written"}))??[]).length}),$=C(()=>{var s;let r=0;return(s=o.exam)!=null&&s.exam_questions&&(r=o.exam.exam_questions.reduce((l,n)=>l+parseFloat(n.mark||0),0)),r});return(r,s)=>{var l,n,u;return a(),i("div",H,[e("div",J,[e("div",K,[e("div",null,[e("div",null,[X,e("b",Y,m(f(o).exam.title),1)]),e("div",null,[e("b",Z,m(U.value),1),S(" MCQ & "),e("b",ee,m(W.value),1),S(" Written | Total Mark: "),e("b",te,m($.value),1)])]),(l=f(g).course)!=null&&l.category_id?(a(),i("div",se,[_(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>d.value=t),type:"number",class:"input-1 px-0 py-1.5 w-24 text-center placeholder:text-sm placeholder:italic",placeholder:"Question ID"},null,512),[[y,d.value]]),e("button",{type:"button",disabled:!d.value,class:"btn-2",onClick:D}," Find Question ",8,oe)])):b("",!0),b("",!0)])]),(u=(n=f(o).exam)==null?void 0:n.exam_questions)!=null&&u.length?(a(),i("div",ae,[(a(!0),i(N,null,P(f(o).exam.exam_questions,t=>(a(),V(j,{key:t.id,question:t==null?void 0:t.question},{mark:I(()=>{var M;return[e("div",le," Mark: "+m(t==null?void 0:t.mark),1),((M=t==null?void 0:t.question)==null?void 0:M.type)==="MCQ"?(a(),i("div",ne," Negative: "+m(t==null?void 0:t.negative_mark),1)):b("",!0)]}),action:I(()=>[e("button",{type:"button",onClick:M=>T(t.question_id),class:"text-red-500"},ce,8,ie)]),_:2},1032,["question"]))),128))])):(a(),i("p",ue,"No questions found")),k.value?(a(),i("div",{key:2,class:"modal",onClick:z(h,["self"])},[e("div",de,[e("div",{class:"modal-header"},[pe,e("button",{type:"button",class:"btn-contrast",onClick:h}," Cancel ")]),e("div",me,[c.value?(a(),i(N,{key:0},[f(o).exam.exam_questions.some(t=>parseInt(t.question_id)===parseInt(c.value.id))?(a(),i("div",ve," This question has already been added. ")):(a(),V(j,{key:1,question:c.value},{action:I(()=>[c.value.type==="MCQ"?(a(),i(N,{key:0},[e("div",xe,[fe,_(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>x.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-12 text-center placeholder:text-xs placeholder:italic",placeholder:"Mark"},null,512),[[y,x.value]])]),e("div",he,[_e,_(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>w.value=t),type:"number",class:"input-1 px-0 pt-1 pb-0.5 w-16 text-center placeholder:text-xs placeholder:italic",placeholder:"Negative"},null,512),[[y,w.value]])])],64)):(a(),i("div",ye,[be,_(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>v.value=t),type:"number",class:"input-1 px-0 py-1 w-12 text-center placeholder:text-sm placeholder:italic",placeholder:"Mark"},null,512),[[y,v.value]])])),e("button",{type:"button",class:"btn-2",disabled:!(c.value.type==="MCQ"?x.value>0:v.value>0),onClick:F}," Add ",8,ge)]),_:1},8,["question"]))],64)):(a(),i("div",ke," Question not found! "))])])])):b("",!0),we])}}};export{Se as default};

import{r as x,e as s,f as n,g as e,z as q,A as w,F as S,h as C,B as V,s as I,I as M,J as B,b as D,u as N,o as j,t as Q,i as l,p as v,j as $}from"./index-BLC7tZcK.js";import{_ as A}from"./QuestionCard-DcDLxYwd.js";import{u as E}from"./exam-CQO-MmC-.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L=u=>(M("data-v-bf768d4c"),u=u(),B(),u),R={class:"modal"},T={class:"modal-content"},U=L(()=>e("h3",null,"Search and Add Questions",-1)),z={class:"modal-body md:min-h-[480px] space-y-4"},J={class:"flex justify-between items-center gap-6"},G={key:0,class:"text-center"},H={key:1},K={key:0},O=["onClick"],P={key:1},W={__name:"AddExamQuestionModal",setup(u){const m=E(),t=x(""),c=x([]),a=x(!1),p=()=>{m.isVisibleAddQuestionModal=!1},d=async()=>{a.value=!0,setTimeout(()=>{c.value=m.exam.questions,a.value=!1},1e3)},f=h=>{console.log("Selected question:",h),p()};return(h,i)=>(s(),n("div",R,[e("div",T,[e("div",{class:"modal-header"},[U,e("button",{onClick:p},"Close")]),e("div",z,[e("div",J,[q(e("input",{"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o),placeholder:"Question Id",class:"input-1"},null,512),[[w,t.value]]),e("button",{onClick:d,type:"button",class:"btn-1 shrink-0 grow-0"}," Find Question ")]),a.value?(s(),n("div",G,"Searching...")):(s(),n("div",H,[c.value.length?(s(),n("ul",K,[(s(!0),n(S,null,C(c.value,o=>(s(),n("li",{key:o.id},[V(A,{question:o,"show-explanation":!1},{action:I(()=>[e("button",{type:"button",class:"btn-3 py-0.5 px-2 text-xs",onClick:r=>f(o)}," + Add ",8,O)]),_:2},1032,["question"])]))),128))])):(s(),n("p",P,"No questions found."))]))])])]))}},X=F(W,[["__scopeId","data-v-bf768d4c"]]),Y={class:"my-container"},Z={class:"card-bg p-4"},ee={class:"flex justify-between items-center flex-wrap gap-4"},te={key:0,class:"flex items-center gap-2 ml-auto"},se={key:0,class:"grid md:grid-cols-2 gap-4 mt-4"},oe=["onClick"],ne=e("i",{class:"fad fa-trash"},null,-1),ae=[ne],ie={key:1,class:"text-red-500"},ce=e("br",null,null,-1),me={__name:"ExamQuestionListView",setup(u){const m=D(),t=E(),c=N(),a=x(""),{courseId:p,examId:d}=m.params;j(async()=>{t.fetchSingleExam(d),await c.fetchCourse(p)});const f=async()=>{if(a.value){const i=await t.addExamQuestion(d,a.value,{category_id:c.course.category_id});i.question&&t.exam.questions.push(i.question),a.value=""}},h=async i=>{if(!confirm(`Do you want to remove this question [ID: ${i}] ?`))return;const o=await t.removeExamQuestion(d,i);console.log(o),o.question_id&&(t.exam.questions=t.exam.questions.filter(r=>parseInt(r.id)!==parseInt(o.question_id)))};return(i,o)=>{var r,y,b,g,k;return s(),n("div",Y,[e("div",Z,[e("div",ee,[e("div",null,' "'+Q(l(t).exam.title)+'" Questions (total: '+Q(((y=(r=l(t).exam)==null?void 0:r.questions)==null?void 0:y.length)??0)+") ",1),(b=l(c).course)!=null&&b.category_id?(s(),n("div",te,[q(e("input",{"onUpdate:modelValue":o[0]||(o[0]=_=>a.value=_),type:"number",class:"input-1 py-1.5 w-32 text-center",placeholder:"Question ID"},null,512),[[w,a.value]]),e("button",{type:"button",class:"btn-3",onClick:f},"Add")])):v("",!0),v("",!0)])]),(k=(g=l(t).exam)==null?void 0:g.questions)!=null&&k.length?(s(),n("div",se,[(s(!0),n(S,null,C(l(t).exam.questions,_=>(s(),$(A,{key:_.id,question:_},{action:I(()=>[e("button",{onClick:le=>h(_.id),class:"text-red-500"},ae,8,oe)]),_:2},1032,["question"]))),128))])):(s(),n("p",ie,"No questions found")),l(t).isVisibleAddQuestionModal?(s(),$(X,{key:2})):v("",!0),ce])}}};export{me as default};

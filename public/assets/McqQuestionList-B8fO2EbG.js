import{r as o,b as j,o as B,w as C,d as n,e as s,j as r,p as y,B as A,s as M,x as E,g as h,F as N,f as z,i as t}from"./index-uPh3lHus.js";import{u as D}from"./question-DLce8vBT.js";import{_ as R}from"./QuestionCard-BOvWh5HW.js";import{_ as V,a as F,b as S}from"./EditQuestionModal-BwM5jWGh.js";import"./TextEditor-31_9SrwS.js";const T={class:"my-container space-y-2"},G={class:"flex justify-between"},H={class:"flex items-center gap-4"},J={key:0,class:"flex justify-center items-center"},K={key:1},O={key:0,class:"grid md:grid-cols-2 gap-4"},P=["onClick"],U=["onClick"],W={key:1,class:"text-red-500"},ae={__name:"McqQuestionList",setup(X){const l=j(),k=o(l.params.categoryId),b=o(l.params.subjectId),c=o(l.params.chapterId),d=D(),f=o(!1),m=o(!1),p=o(!1),i=o(null),v=o(!0),g=()=>f.value=!0,w=()=>f.value=!1,Q=a=>{i.value=a,m.value=!0},q=()=>m.value=!1,x=a=>{i.value=a,p.value=!0},I=()=>p.value=!1,_=async()=>{try{v.value=!0,await d.index(c.value,"MCQ")}finally{v.value=!1}};return B(_),C(()=>l.params.id,async a=>{c.value=a,await _()}),C(()=>l.params.categoryId,async a=>{k.value=a,await _()}),(a,e)=>{const L=E("RouterLink");return t(),n("div",T,[s("div",G,[s("div",H,[A(L,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:k.value,id:b.value}}},{default:M(()=>e[0]||(e[0]=[s("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),e[1]||(e[1]=s("h4",{class:"title-lg"},"MCQ Question List",-1))]),s("button",{class:"btn-2",onClick:g},"Add MCQ Question")]),v.value?(t(),n("div",J,e[2]||(e[2]=[s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(t(),n("div",K,[h(d).questions.length?(t(),n("div",O,[(t(!0),n(N,null,z(h(d).questions,u=>(t(),r(R,{key:u.id,question:u},{action:M(()=>[s("button",{class:"ml-auto",onClick:$=>Q(u)},e[3]||(e[3]=[s("i",{class:"fad fa-edit"},null,-1)]),8,P),s("button",{onClick:$=>x(u),class:"text-red-500"},e[4]||(e[4]=[s("i",{class:"fad fa-trash"},null,-1)]),8,U)]),_:2},1032,["question"]))),128))])):(t(),n("p",W,"No questions found"))])),f.value?(t(),r(V,{key:2,class:"z-40",chapterId:c.value,questionType:"MCQ",onClose:w},null,8,["chapterId"])):y("",!0),m.value?(t(),r(F,{key:3,class:"z-40",question:i.value,questionType:"MCQ",onClose:q},null,8,["question"])):y("",!0),p.value?(t(),r(S,{key:4,class:"z-40",question:i.value,onClose:I},null,8,["question"])):y("",!0)])}}};export{ae as default};

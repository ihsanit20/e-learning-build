import{b as j,r as o,o as A,w as C,m as B,e as s,f as n,g as t,C as E,v as h,i as M,F as N,h as z,j as r,q as y}from"./index-DFkC2udi.js";import{u as D}from"./question-CNJBgiPg.js";import{_ as R}from"./QuestionCard-k9HmA8Ns.js";import{_ as V,a as F,b as S}from"./EditQuestionModal-BJ_3EfwA.js";import"./TextEditor-DmMimU4A.js";const T={class:"my-container space-y-2"},G={class:"flex justify-between"},H={class:"flex items-center gap-4"},J={key:0,class:"flex justify-center items-center"},K={key:1},O={key:0,class:"grid md:grid-cols-2 gap-4"},P=["onClick"],U=["onClick"],W={key:1,class:"text-red-500"},ae={__name:"McqQuestionList",setup(X){const l=j(),k=o(l.params.categoryId),b=o(l.params.subjectId),c=o(l.params.chapterId),d=D(),f=o(!1),m=o(!1),p=o(!1),i=o(null),v=o(!0),g=()=>f.value=!0,w=()=>f.value=!1,q=a=>{i.value=a,m.value=!0},Q=()=>m.value=!1,I=a=>{i.value=a,p.value=!0},x=()=>p.value=!1,_=async()=>{try{v.value=!0,await d.index(c.value,"MCQ")}finally{v.value=!1}};return A(_),C(()=>l.params.id,async a=>{c.value=a,await _()}),C(()=>l.params.categoryId,async a=>{k.value=a,await _()}),(a,e)=>{const L=B("RouterLink");return s(),n("div",T,[t("div",G,[t("div",H,[E(L,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:k.value,id:b.value}}},{default:h(()=>e[0]||(e[0]=[t("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),e[1]||(e[1]=t("h4",{class:"title-lg"},"MCQ Question List",-1))]),t("button",{class:"btn-2",onClick:g},"Add MCQ Question")]),v.value?(s(),n("div",J,e[2]||(e[2]=[t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(s(),n("div",K,[M(d).questions.length?(s(),n("div",O,[(s(!0),n(N,null,z(M(d).questions,u=>(s(),r(R,{key:u.id,question:u},{action:h(()=>[t("button",{class:"ml-auto",onClick:$=>q(u)},e[3]||(e[3]=[t("i",{class:"fad fa-edit"},null,-1)]),8,P),t("button",{onClick:$=>I(u),class:"text-red-500"},e[4]||(e[4]=[t("i",{class:"fad fa-trash"},null,-1)]),8,U)]),_:2},1032,["question"]))),128))])):(s(),n("p",W,"No questions found"))])),f.value?(s(),r(V,{key:2,class:"z-40",chapterId:c.value,questionType:"MCQ",onClose:w},null,8,["chapterId"])):y("",!0),m.value?(s(),r(F,{key:3,class:"z-40",question:i.value,questionType:"MCQ",onClose:Q},null,8,["question"])):y("",!0),p.value?(s(),r(S,{key:4,class:"z-40",question:i.value,onClose:x},null,8,["question"])):y("",!0)])}}};export{ae as default};

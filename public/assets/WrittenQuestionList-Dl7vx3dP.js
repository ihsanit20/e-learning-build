import{b as $,r as o,o as j,w as h,m as A,e as t,f as n,g as s,C as B,v as b,i as g,F as E,h as N,j as u,q as y}from"./index-BalslWPS.js";import{u as z}from"./question-BAdh_19F.js";import{_ as D}from"./QuestionCard-BjNYlluH.js";import{_ as R,a as V,b as F}from"./EditQuestionModal-DIwBnGpc.js";import"./TextEditor-CtWEbLi1.js";const S={class:"my-container space-y-2"},T={class:"flex justify-between"},G={class:"flex items-center gap-4"},H={key:0,class:"flex justify-center items-center"},J={key:1},K={key:0,class:"grid md:grid-cols-2 gap-4"},O=["onClick"],P=["onClick"],U={key:1,class:"text-red-500"},ae={__name:"WrittenQuestionList",setup(X){const l=$(),k=o(l.params.categoryId),C=o(l.params.subjectId),c=o(l.params.chapterId),d=z(),f=o(!1),m=o(!1),p=o(!1),i=o(null),v=o(!0),w=()=>f.value=!0,q=()=>f.value=!1,I=a=>{i.value=a,m.value=!0},M=()=>m.value=!1,x=a=>{i.value=a,p.value=!0},L=()=>p.value=!1,_=async()=>{try{v.value=!0,await d.index(c.value,"Written")}finally{v.value=!1}};return j(_),h(()=>l.params.id,async a=>{c.value=a,await _()}),h(()=>l.params.categoryId,async a=>{k.value=a,await _()}),(a,e)=>{const Q=A("RouterLink");return t(),n("div",S,[s("div",T,[s("div",G,[B(Q,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:k.value,id:C.value}}},{default:b(()=>e[0]||(e[0]=[s("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),e[1]||(e[1]=s("h4",{class:"title-lg"},"Written Question List",-1))]),s("button",{class:"btn-2",onClick:w},"Add Written Question")]),v.value?(t(),n("div",H,e[2]||(e[2]=[s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(t(),n("div",J,[g(d).questions.length?(t(),n("div",K,[(t(!0),n(E,null,N(g(d).questions,r=>(t(),u(D,{key:r.id,question:r},{action:b(()=>[s("button",{class:"ml-auto",onClick:W=>I(r)},e[3]||(e[3]=[s("i",{class:"fad fa-edit"},null,-1)]),8,O),s("button",{onClick:W=>x(r),class:"text-red-500"},e[4]||(e[4]=[s("i",{class:"fad fa-trash"},null,-1)]),8,P)]),_:2},1032,["question"]))),128))])):(t(),n("p",U,"No questions found"))])),f.value?(t(),u(R,{key:2,class:"z-40",chapterId:c.value,questionType:"Written",onClose:q},null,8,["chapterId"])):y("",!0),m.value?(t(),u(V,{key:3,class:"z-40",question:i.value,questionType:"Written",onClose:M},null,8,["question"])):y("",!0),p.value?(t(),u(F,{key:4,class:"z-40",question:i.value,onClose:L},null,8,["question"])):y("",!0)])}}};export{ae as default};

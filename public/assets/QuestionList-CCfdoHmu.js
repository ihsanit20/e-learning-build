import{b as E,r as o,o as N,w as k,m as $,e as s,f as a,g as e,E as g,s as b,i as x,F as A,h as B,j as p,p as v,t as D,q as S}from"./index-CXrK0xpE.js";import{u as V}from"./question-D0NQD3cF.js";import{_ as z,a as R,b as F}from"./EditQuestionModal-D-WLTA1N.js";import"./TextEditor-6jWgDi11.js";const T={class:"my-container space-y-2"},G={class:"flex justify-between"},H={class:"flex items-center gap-4"},J=e("i",{class:"fas fa-arrow-left"},null,-1),K=e("h4",{class:"title-lg"},"Question List",-1),O={key:0,class:"flex justify-center items-center"},P=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),U=[P],W={key:1},X={key:0,class:"grid md:grid-cols-3 gap-4"},Y={class:"flex flex-col items-center"},Z=e("i",{class:"fad fa-folder text-4xl"},null,-1),ee={class:"title-md"},se={class:"absolute top-4 right-4 flex gap-2"},te=["onClick"],oe=e("i",{class:"fad fa-edit"},null,-1),ae=[oe],le=["onClick"],ne=e("i",{class:"fad fa-trash"},null,-1),ce=[ne],ie={key:1,class:"text-red-500"},pe={__name:"QuestionList",setup(de){const l=E(),m=o(l.params.categoryId),w=o(l.params.subjectId),i=o(l.params.chapterId),d=V(),r=o(!1),u=o(!1),_=o(!1),n=o(null),f=o(!0),C=()=>r.value=!0,I=()=>r.value=!1,M=t=>{n.value=t,u.value=!0},L=()=>u.value=!1,Q=t=>{n.value=t,_.value=!0},q=()=>_.value=!1,h=async()=>{try{f.value=!0,await d.index(i.value)}finally{f.value=!1}};return N(h),k(()=>l.params.id,async t=>{i.value=t,await h()}),k(()=>l.params.categoryId,async t=>{m.value=t,await h()}),(t,re)=>{const y=$("RouterLink");return s(),a("div",T,[e("div",G,[e("div",H,[g(y,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:m.value,id:w.value}}},{default:b(()=>[J]),_:1},8,["to"]),K]),e("button",{class:"btn-2",onClick:C},"Add Question")]),f.value?(s(),a("div",O,U)):(s(),a("div",W,[x(d).questions.length?(s(),a("div",X,[(s(!0),a(A,null,B(x(d).questions,c=>(s(),a("div",{key:c.id,class:"relative card-bg items-center p-4"},[e("div",Y,[Z,e("p",ee,D(c.name),1)]),e("div",se,[e("button",{onClick:j=>M(c)},ae,8,te),e("button",{onClick:j=>Q(c),class:"text-red-500"},ce,8,le)]),g(y,{to:"",class:"btn-link"},{default:b(()=>[S(" See Questions ")]),_:1})]))),128))])):(s(),a("p",ie,"No questions found"))])),r.value?(s(),p(z,{key:2,class:"z-40",chapterId:i.value,onClose:I},null,8,["chapterId"])):v("",!0),u.value?(s(),p(R,{key:3,class:"z-40",question:n.value,onClose:L},null,8,["question"])):v("",!0),_.value?(s(),p(F,{key:4,class:"z-40",question:n.value,onClose:q},null,8,["question"])):v("",!0)])}}};export{pe as default};

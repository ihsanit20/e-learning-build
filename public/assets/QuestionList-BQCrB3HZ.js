import{r as o,b as N,o as $,w as b,d as l,e as s,j as _,p as y,B as x,s as h,x as A,g as w,F as D,f as E,i as t,t as S,q as V}from"./index-BRjg0X-h.js";import{u as z}from"./question-CeX_LK93.js";import{_ as R,a as F,b as T}from"./EditQuestionModal-hTd763xS.js";import"./TextEditor-BhTxZYoq.js";const G={class:"my-container space-y-2"},H={class:"flex justify-between"},J={class:"flex items-center gap-4"},K={key:0,class:"flex justify-center items-center"},O={key:1},P={key:0,class:"grid md:grid-cols-3 gap-4"},U={class:"flex flex-col items-center"},W={class:"title-md"},X={class:"absolute top-4 right-4 flex gap-2"},Y=["onClick"],Z=["onClick"],ee={key:1,class:"text-red-500"},ne={__name:"QuestionList",setup(se){const n=N(),k=o(n.params.categoryId),C=o(n.params.subjectId),r=o(n.params.chapterId),u=z(),c=o(!1),f=o(!1),p=o(!1),i=o(null),v=o(!0),I=()=>c.value=!0,M=()=>c.value=!1,L=a=>{i.value=a,f.value=!0},Q=()=>f.value=!1,q=a=>{i.value=a,p.value=!0},j=()=>p.value=!1,m=async()=>{try{v.value=!0,await u.index(r.value)}finally{v.value=!1}};return $(m),b(()=>n.params.id,async a=>{r.value=a,await m()}),b(()=>n.params.categoryId,async a=>{k.value=a,await m()}),(a,e)=>{const g=A("RouterLink");return t(),l("div",G,[s("div",H,[s("div",J,[x(g,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:k.value,id:C.value}}},{default:h(()=>e[0]||(e[0]=[s("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),e[1]||(e[1]=s("h4",{class:"title-lg"},"Question List",-1))]),s("button",{class:"btn-2",onClick:I},"Add Question")]),v.value?(t(),l("div",K,e[2]||(e[2]=[s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(t(),l("div",O,[w(u).questions.length?(t(),l("div",P,[(t(!0),l(D,null,E(w(u).questions,d=>(t(),l("div",{key:d.id,class:"relative card-bg items-center p-4"},[s("div",U,[e[3]||(e[3]=s("i",{class:"fad fa-folder text-4xl"},null,-1)),s("p",W,S(d.name),1)]),s("div",X,[s("button",{onClick:B=>L(d)},e[4]||(e[4]=[s("i",{class:"fad fa-edit"},null,-1)]),8,Y),s("button",{onClick:B=>q(d),class:"text-red-500"},e[5]||(e[5]=[s("i",{class:"fad fa-trash"},null,-1)]),8,Z)]),x(g,{to:"",class:"btn-link"},{default:h(()=>e[6]||(e[6]=[V(" See Questions ")])),_:1})]))),128))])):(t(),l("p",ee,"No questions found"))])),c.value?(t(),_(R,{key:2,class:"z-40",chapterId:r.value,onClose:M},null,8,["chapterId"])):y("",!0),f.value?(t(),_(F,{key:3,class:"z-40",question:i.value,onClose:Q},null,8,["question"])):y("",!0),p.value?(t(),_(T,{key:4,class:"z-40",question:i.value,onClose:j},null,8,["question"])):y("",!0)])}}};export{ne as default};

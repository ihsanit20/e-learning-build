import{b as $,r as o,o as A,w as b,m as B,e as t,f as l,g as s,C as h,v as x,i as C,F as D,h as E,j as _,q as y,t as S,s as V}from"./index-DIWD3pil.js";import{u as z}from"./question-D0YmjAcJ.js";import{_ as R,a as F,b as T}from"./EditQuestionModal-CwT6ydxb.js";import"./TextEditor-BaElCI8M.js";const G={class:"my-container space-y-2"},H={class:"flex justify-between"},J={class:"flex items-center gap-4"},K={key:0,class:"flex justify-center items-center"},O={key:1},P={key:0,class:"grid md:grid-cols-3 gap-4"},U={class:"flex flex-col items-center"},W={class:"title-md"},X={class:"absolute top-4 right-4 flex gap-2"},Y=["onClick"],Z=["onClick"],ee={key:1,class:"text-red-500"},ne={__name:"QuestionList",setup(se){const n=$(),k=o(n.params.categoryId),w=o(n.params.subjectId),r=o(n.params.chapterId),u=z(),c=o(!1),f=o(!1),v=o(!1),i=o(null),m=o(!0),I=()=>c.value=!0,M=()=>c.value=!1,L=a=>{i.value=a,f.value=!0},Q=()=>f.value=!1,q=a=>{i.value=a,v.value=!0},j=()=>v.value=!1,p=async()=>{try{m.value=!0,await u.index(r.value)}finally{m.value=!1}};return A(p),b(()=>n.params.id,async a=>{r.value=a,await p()}),b(()=>n.params.categoryId,async a=>{k.value=a,await p()}),(a,e)=>{const g=B("RouterLink");return t(),l("div",G,[s("div",H,[s("div",J,[h(g,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:k.value,id:w.value}}},{default:x(()=>e[0]||(e[0]=[s("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["to"]),e[1]||(e[1]=s("h4",{class:"title-lg"},"Question List",-1))]),s("button",{class:"btn-2",onClick:I},"Add Question")]),m.value?(t(),l("div",K,e[2]||(e[2]=[s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1)]))):(t(),l("div",O,[C(u).questions.length?(t(),l("div",P,[(t(!0),l(D,null,E(C(u).questions,d=>(t(),l("div",{key:d.id,class:"relative card-bg items-center p-4"},[s("div",U,[e[3]||(e[3]=s("i",{class:"fad fa-folder text-4xl"},null,-1)),s("p",W,S(d.name),1)]),s("div",X,[s("button",{onClick:N=>L(d)},e[4]||(e[4]=[s("i",{class:"fad fa-edit"},null,-1)]),8,Y),s("button",{onClick:N=>q(d),class:"text-red-500"},e[5]||(e[5]=[s("i",{class:"fad fa-trash"},null,-1)]),8,Z)]),h(g,{to:"",class:"btn-link"},{default:x(()=>e[6]||(e[6]=[V(" See Questions ")])),_:1})]))),128))])):(t(),l("p",ee,"No questions found"))])),c.value?(t(),_(R,{key:2,class:"z-40",chapterId:r.value,onClose:M},null,8,["chapterId"])):y("",!0),f.value?(t(),_(F,{key:3,class:"z-40",question:i.value,onClose:Q},null,8,["question"])):y("",!0),v.value?(t(),_(T,{key:4,class:"z-40",question:i.value,onClose:j},null,8,["question"])):y("",!0)])}}};export{ne as default};

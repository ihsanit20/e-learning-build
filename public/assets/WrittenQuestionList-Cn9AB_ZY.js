import{b as W,r as o,o as $,w as y,m as j,e,f as a,g as t,E,s as k,i as b,F as A,h as B,j as i,p}from"./index-BMsmsKno.js";import{u as N}from"./question-BJysx68f.js";import{_ as z}from"./QuestionCard-DN5K9Y5b.js";import{_ as D,a as R,b as V}from"./EditQuestionModal-pyHEBJUF.js";import"./TextEditor-B2rzrXCS.js";const F={class:"my-container space-y-2"},S={class:"flex justify-between"},T={class:"flex items-center gap-4"},G=t("i",{class:"fas fa-arrow-left"},null,-1),H=t("h4",{class:"title-lg"},"Written Question List",-1),J={key:0,class:"flex justify-center items-center"},K=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),O=[K],P={key:1},U={key:0,class:"grid md:grid-cols-2 gap-4"},X=["onClick"],Y=t("i",{class:"fad fa-edit"},null,-1),Z=[Y],ee=["onClick"],te=t("i",{class:"fad fa-trash"},null,-1),se=[te],oe={key:1,class:"text-red-500"},ue={__name:"WrittenQuestionList",setup(ae){const n=W(),v=o(n.params.categoryId),g=o(n.params.subjectId),r=o(n.params.chapterId),d=N(),u=o(!1),_=o(!1),f=o(!1),l=o(null),m=o(!0),w=()=>u.value=!0,C=()=>u.value=!1,I=s=>{l.value=s,_.value=!0},M=()=>_.value=!1,q=s=>{l.value=s,f.value=!0},x=()=>f.value=!1,h=async()=>{try{m.value=!0,await d.index(r.value,"Written")}finally{m.value=!1}};return $(h),y(()=>n.params.id,async s=>{r.value=s,await h()}),y(()=>n.params.categoryId,async s=>{v.value=s,await h()}),(s,ne)=>{const L=j("RouterLink");return e(),a("div",F,[t("div",S,[t("div",T,[E(L,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:v.value,id:g.value}}},{default:k(()=>[G]),_:1},8,["to"]),H]),t("button",{class:"btn-2",onClick:w},"Add Written Question")]),m.value?(e(),a("div",J,O)):(e(),a("div",P,[b(d).questions.length?(e(),a("div",U,[(e(!0),a(A,null,B(b(d).questions,c=>(e(),i(z,{key:c.id,question:c},{action:k(()=>[t("button",{class:"ml-auto",onClick:Q=>I(c)},Z,8,X),t("button",{onClick:Q=>q(c),class:"text-red-500"},se,8,ee)]),_:2},1032,["question"]))),128))])):(e(),a("p",oe,"No questions found"))])),u.value?(e(),i(D,{key:2,class:"z-40",chapterId:r.value,questionType:"Written",onClose:C},null,8,["chapterId"])):p("",!0),_.value?(e(),i(R,{key:3,class:"z-40",question:l.value,questionType:"Written",onClose:M},null,8,["question"])):p("",!0),f.value?(e(),i(V,{key:4,class:"z-40",question:l.value,onClose:x},null,8,["question"])):p("",!0)])}}};export{ue as default};

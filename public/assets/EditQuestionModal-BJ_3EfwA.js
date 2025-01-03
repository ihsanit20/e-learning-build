import{r as h,w as $,e as r,f as d,g as e,t as q,y as j,C as k,q as y,F as I,h as E,z as T,D as L,A,j as D,s as N}from"./index-DFkC2udi.js";import{u as V}from"./question-CNJBgiPg.js";import{_ as C}from"./TextEditor-DmMimU4A.js";const B={class:"modal"},P={class:"modal-content space-y-2 max-w-[720px] min-w-80 md:min-w-[480px] lg:min-w-[580px]"},H={key:0,class:"text-red-500"},F={key:1,class:"text-red-500"},R={key:2,class:"grid py-2 gap-1.5 bg-gray-200 rounded-lg"},z=["onPaste"],W=["onUpdate:modelValue"],Z={class:"flex-1"},G={key:0,class:"mt-2 relative"},J=["innerHTML"],K=["onClick"],X=["onUpdate:modelValue"],Y={class:"grow-0 shrink-0 flex items-center"},ee=["onClick"],te={class:"grid"},se={class:"flex gap-4 justify-center"},M={__name:"QuestionForm",props:{question:Object,chapterId:[String,Number],questionType:String},emits:["close"],setup(u,{emit:x}){var g,b,w;const p=x,m=V(),o=u,l=h(((g=o.question)==null?void 0:g.question_text)||""),_=h(((b=o.question)==null?void 0:b.explanation)||""),a=h(((w=o.question)==null?void 0:w.mcq_options)||[{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1}]),i=h({}),f=()=>{a.value.push({option_text:"",is_correct:!1})},S=n=>{a.value.splice(n,1)},O=async n=>{const t=document.createElement("img");t.src=URL.createObjectURL(n),await new Promise(c=>{t.onload=c});const s=document.createElement("canvas");return s.width=t.width,s.height=t.height,s.getContext("2d").drawImage(t,0,0),s.toDataURL("image/webp")},Q=async(n,t)=>{const s=n.clipboardData||window.clipboardData;if(s.files.length>0){const v=s.files[0];if(v.type.startsWith("image/")){t.option_text="";const c=await O(v);t.option_text=`<img src="${c}" alt="Option Image" />`}}};$(()=>o.question,n=>{n&&(l.value=n.question_text,_.value=n.explanation,a.value=n.mcq_options||[])},{immediate:!0});const U=async()=>{i.value={};try{o.question?await m.update(o.question.id,{question_text:l.value,chapter_id:o.question.chapter_id,explanation:_.value,mcq_options:a.value}):await m.store({chapter_id:o.chapterId,type:o.questionType,question_text:l.value,explanation:_.value,mcq_options:a.value}),l.value="",_.value="",a.value=[{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1}],p("close")}catch(n){n.response&&n.response.data&&n.response.data.errors&&(i.value=n.response.data.errors)}};return(n,t)=>(r(),d("div",B,[e("div",P,[e("h2",null,q(o.question?"Edit":"Add")+" Question",1),e("form",{onSubmit:j(U,["prevent"]),class:"space-y-4"},[k(C,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),placeholder:"Question Text",required:""},null,8,["modelValue"]),i.value.question_text?(r(),d("div",H,q(i.value.question_text[0]),1)):y("",!0),i.value.chapter_id?(r(),d("div",F,q(i.value.chapter_id[0]),1)):y("",!0),u.questionType==="MCQ"?(r(),d("div",R,[t[4]||(t[4]=e("div",{class:"flex justify-between text-sm px-2"},[e("p",null,"Ans"),e("p",null,"Options"),e("p",null,"Delete")],-1)),(r(!0),d(I,null,E(a.value,(s,v)=>(r(),d("div",{key:v,class:"flex items-center gap-4 px-4",onPaste:c=>Q(c,s)},[T(e("input",{class:"grow-0 shrink-0",value:!0,name:"correct",type:"checkbox","onUpdate:modelValue":c=>s.is_correct=c},null,8,W),[[L,s.is_correct]]),e("div",Z,[s.option_text.includes("<img")?(r(),d("div",G,[e("div",{innerHTML:s.option_text},null,8,J),(r(),d("svg",{onClick:c=>s.option_text="",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"cursor-pointer absolute -top-2.5 -left-2.5 size-6 bg-white rounded-full border shadow text-red-500"},t[3]||(t[3]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"},null,-1)]),8,K))])):T((r(),d("input",{key:1,class:"input-1 text-black placeholder:italic bg-white w-full",type:"text","onUpdate:modelValue":c=>s.option_text=c,placeholder:"Option (text or image)",required:""},null,8,X)),[[A,s.option_text]])]),e("div",Y,[e("i",{onClick:c=>S(v),class:"fa fa-trash text-red-700 cursor-pointer ml-2"},null,8,ee)])],40,z))),128)),e("div",{class:"flex justify-center items-center pt-0.5"},[e("button",{type:"button",onClick:f,class:"px-2 pt-1 border rounded bg-gray-300 border-gray-400"}," + Add Option ")])])):y("",!0),e("div",te,[t[5]||(t[5]=e("h2",{class:"text-center md:text-left"},"Question Explanation",-1)),k(C,{class:"input-1",modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=s=>_.value=s),placeholder:"Question Explanation"},null,8,["modelValue"])]),e("div",se,[t[6]||(t[6]=e("button",{type:"submit",class:"btn-2"},"Save Question",-1)),e("button",{type:"button",onClick:t[2]||(t[2]=s=>p("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},pe={__name:"AddQuestionModal",props:{chapterId:{type:[String,Number],required:!0},questionType:String},emits:["close"],setup(u,{emit:x}){const p=x;return(m,o)=>(r(),D(M,{chapterId:u.chapterId,questionType:u.questionType,onClose:o[0]||(o[0]=l=>p("close"))},null,8,["chapterId","questionType"]))}},oe={key:0,class:"modal"},ne={class:"modal-content space-y-2"},ie={class:"py-2 space-y-1"},ae=["innerHTML"],le={key:0,class:"text-red-500"},re={class:"flex gap-4"},me={__name:"DeleteQuestionModal",props:{question:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(u,{emit:x}){const p=x,m=u,o=V(),l=h({});$(()=>m.question,a=>{},{immediate:!0});const _=async()=>{l.value={};try{await o.delete(m.question.id),p("close")}catch(a){a.response&&a.response.data&&a.response.data.errors&&(l.value=a.response.data.errors)}};return(a,i)=>m.question?(r(),d("div",oe,[e("div",ne,[i[3]||(i[3]=e("h2",null,"Delete Question",-1)),e("div",ie,[N(" Are you sure you want to delete the question ID:"+q(u.question.id)+"? ",1),i[1]||(i[1]=e("hr",null,null,-1)),e("div",{class:"overflow-hidden whitespace-pre-wrap line-clamp-3 italic",innerHTML:m.question.question_text},null,8,ae),i[2]||(i[2]=e("hr",null,null,-1))]),l.value.chapter_id?(r(),d("div",le,q(l.value.chapter_id[0]),1)):y("",!0),e("div",re,[e("button",{onClick:_,class:"btn-2"},"Delete"),e("button",{type:"button",onClick:i[0]||(i[0]=f=>p("close")),class:"btn-contrast"},"Cancel")])])])):y("",!0)}},_e={__name:"EditQuestionModal",props:{question:{type:Object,required:!0},questionType:String},emits:["close"],setup(u,{emit:x}){const p=x;return(m,o)=>(r(),D(M,{question:u.question,questionType:u.questionType,onClose:o[0]||(o[0]=l=>p("close"))},null,8,["question","questionType"]))}};export{pe as _,_e as a,me as b};